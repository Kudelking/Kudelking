import Foundation
import Observation
import CoreModels

/// Drives the analysis-result screen: runs the cascade, lets the user edit detected foods, and
/// saves the meal through the repository. All four canonical states are represented in `phase`.
@MainActor
@Observable
public final class MealAnalysisViewModel {
    public enum Phase: Equatable {
        case analyzing
        case review
        case notFood
        case manualEntry(prefill: [String], reason: AppError)
        case saved
        case error(String)
    }

    public private(set) var phase: Phase = .analyzing
    public var items: [FoodItemEntity] = []
    public var mealType: MealType
    public private(set) var servedFromCache = false

    private var source: MealSource = .photoAI
    private let imageData: Data
    private let context: MealAnalysisContext
    private let useCase: AnalyzeMealUseCase
    private let repository: MealRepository
    private let analytics: Analytics?
    private let isFirstMeal: Bool

    public init(imageData: Data,
                context: MealAnalysisContext,
                mealType: MealType,
                useCase: AnalyzeMealUseCase,
                repository: MealRepository,
                analytics: Analytics? = nil,
                isFirstMeal: Bool = false) {
        self.imageData = imageData
        self.context = context
        self.mealType = mealType
        self.useCase = useCase
        self.repository = repository
        self.analytics = analytics
        self.isFirstMeal = isFirstMeal
    }

    // MARK: - Derived totals

    public var totalCalories: Double { items.reduce(0) { $0 + $1.nutrition.calories } }
    public var totalMacros: MacroBreakdown { items.reduce(.zero) { $0 + $1.nutrition.macros } }
    public var canSave: Bool { !items.isEmpty }

    // MARK: - Flow

    public func start() async {
        phase = .analyzing
        let outcome = await useCase.analyze(imageData: imageData, context: context)
        switch outcome {
        case let .recognized(items, source, servedFromCache):
            self.items = items
            self.source = source
            self.servedFromCache = servedFromCache
            phase = .review
            if isFirstMeal { analytics?.track(.firstMealAnalyzed) }
        case .notFood:
            phase = .notFood
        case let .needsManualEntry(prefill, reason):
            source = .manual
            phase = .manualEntry(prefill: prefill, reason: reason)
        }
    }

    // MARK: - Editing

    /// Re-scale an item's nutrition proportionally when its portion changes.
    public func updatePortion(itemID: UUID, grams: Double) {
        guard grams > 0, let index = items.firstIndex(where: { $0.id == itemID }) else { return }
        let old = items[index].portionGrams
        guard old > 0 else { return }
        let factor = grams / old
        items[index].nutrition = items[index].nutrition.scaled(byFactor: factor)
        items[index].portionGrams = grams
        items[index].quantity = grams
        items[index].isUserEdited = true
    }

    public func remove(itemID: UUID) {
        items.removeAll { $0.id == itemID }
    }

    public func add(_ item: FoodItemEntity) {
        items.append(item)
        if phase != .review { phase = .review }
    }

    // MARK: - Save

    public func save() async {
        guard canSave else { return }
        let meal = MealEntity(mealType: mealType, loggedAt: .now, source: source, items: items)
        do {
            try await repository.log(meal)
            analytics?.track(.mealLogged(source: source))
            phase = .saved
        } catch let error as AppError {
            phase = .error(Self.message(for: error))
        } catch {
            phase = .error("Couldn't save this meal. Please try again.")
        }
    }

    static func message(for error: AppError) -> String {
        switch error {
        case .offline: "You're offline — the meal is saved locally and will sync later."
        default: "Couldn't save this meal. Please try again."
        }
    }
}
