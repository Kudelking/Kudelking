import Foundation
import CoreModels

/// Meal repository that emits a fixed snapshot then keeps the stream open until finished,
/// letting tests push updates deterministically.
actor StreamingMealRepository: MealRepository {
    private var meals: [MealEntity]
    private var continuation: AsyncStream<[MealEntity]>.Continuation?

    init(meals: [MealEntity] = []) { self.meals = meals }

    func log(_ meal: MealEntity) async throws {
        meals.append(meal)
        continuation?.yield(meals)
    }
    func meals(on day: Date) async throws -> [MealEntity] { meals }
    func update(_ meal: MealEntity) async throws {}
    func delete(id: UUID) async throws {
        meals.removeAll { $0.id == id }
        continuation?.yield(meals)
    }
    nonisolated func observeDay(_ day: Date) -> AsyncStream<[MealEntity]> {
        AsyncStream { continuation in
            Task { await self.register(continuation) }
        }
    }
    private func register(_ continuation: AsyncStream<[MealEntity]>.Continuation) {
        self.continuation = continuation
        continuation.yield(meals)     // initial snapshot
    }
    func finish() { continuation?.finish() }
}

final class InMemoryWaterStore: WaterStore, @unchecked Sendable {
    private var totals: [String: Int] = [:]
    private let lock = NSLock()
    private func key(_ day: Date) -> String {
        ISO8601DateFormatter().string(from: Calendar.current.startOfDay(for: day))
    }
    func water(on day: Date) async throws -> Int {
        lock.lock(); defer { lock.unlock() }
        return totals[key(day)] ?? 0
    }
    @discardableResult
    func addWater(_ ml: Int, on day: Date) async throws -> Int {
        lock.lock(); defer { lock.unlock() }
        let total = (totals[key(day)] ?? 0) + ml
        totals[key(day)] = total
        return total
    }
}

struct StubHealthKit: HealthKitService {
    var steps: Int
    func requestAuthorization() async throws {}
    func todaySteps() async throws -> Int { steps }
    func write(nutrition: NutritionFacts, date: Date) async throws {}
    func writeWeight(_ kg: Double, date: Date) async throws {}
}

func sampleProfile(water: Int = 2500) -> UserProfileEntity {
    UserProfileEntity.make(
        id: "u1", displayName: "T", email: nil, age: 30, biologicalSex: .male,
        heightCm: 180, weightKg: 80, goalWeightKg: 75, activityLevel: .moderate,
        goal: .maintain, waterGoalMl: water)
}

func mealWith(calories: Double, type: MealType = .lunch) -> MealEntity {
    let item = FoodItemEntity(name: "Food", quantity: 100, servingUnit: .gram, portionGrams: 100,
                              nutrition: NutritionFacts(calories: calories, source: .usda))
    return MealEntity(mealType: type, source: .manual, items: [item])
}
