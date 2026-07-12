import Foundation
import Observation
import CoreModels

/// Backs the Home screen. Subscribes to today's meals reactively (offline-first — data comes from
/// the local store) and folds them with the user's targets, water, and steps into a `DailySummary`.
@MainActor
@Observable
public final class HomeViewModel {
    public private(set) var summary: DailySummary
    public private(set) var isLoading = true
    public private(set) var aiTip: String?

    private let profile: UserProfileEntity
    private let mealRepository: MealRepository
    private let waterStore: WaterStore
    private let healthKit: HealthKitService?

    private var currentMeals: [MealEntity] = []
    private var waterMl = 0
    private var steps = 0
    private var observationTask: Task<Void, Never>?
    private let day: Date

    public init(profile: UserProfileEntity,
                mealRepository: MealRepository,
                waterStore: WaterStore,
                healthKit: HealthKitService? = nil,
                day: Date = .now) {
        self.profile = profile
        self.mealRepository = mealRepository
        self.waterStore = waterStore
        self.healthKit = healthKit
        self.day = day
        self.summary = DailySummaryBuilder.build(
            date: day, meals: [], targetCalories: profile.targetCalories,
            macroTargets: profile.macroTargets, waterMl: 0, steps: 0,
            targetWaterMl: profile.waterGoalMl)
    }

    public func start() async {
        waterMl = (try? await waterStore.water(on: day)) ?? 0
        if let healthKit { steps = (try? await healthKit.todaySteps()) ?? 0 }
        rebuild()

        // Reactive meal updates; the stream emits an initial snapshot immediately.
        observationTask?.cancel()
        let stream = mealRepository.observeDay(day)
        observationTask = Task { [weak self] in
            for await meals in stream {
                await self?.apply(meals: meals)
            }
        }
    }

    public func stop() {
        observationTask?.cancel()
        observationTask = nil
    }

    public func addWater(_ ml: Int) async {
        if let total = try? await waterStore.addWater(ml, on: day) {
            waterMl = total
            rebuild()
        }
    }

    public func refreshSteps() async {
        if let healthKit { steps = (try? await healthKit.todaySteps()) ?? steps }
        rebuild()
    }

    private func apply(meals: [MealEntity]) {
        currentMeals = meals
        isLoading = false
        rebuild()
    }

    private func rebuild() {
        summary = DailySummaryBuilder.build(
            date: day, meals: currentMeals,
            targetCalories: profile.targetCalories, macroTargets: profile.macroTargets,
            waterMl: waterMl, steps: steps, targetWaterMl: profile.waterGoalMl)
    }
}
