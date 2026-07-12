import Testing
import Foundation
import SwiftData
@testable import CorePersistence
import CoreModels

@Suite("SwiftDataMealRepository")
struct MealRepositoryTests {

    private func makeRepository() throws -> SwiftDataMealRepository {
        let container = try PersistenceController.inMemory()
        return SwiftDataMealRepository(modelContainer: container)
    }

    private func sampleMeal(type: MealType = .lunch, at date: Date = .now) -> MealEntity {
        let item = FoodItemEntity(
            name: "Grilled chicken breast",
            quantity: 150, servingUnit: .gram, portionGrams: 150,
            nutrition: NutritionFacts(calories: 247.5,
                                      macros: MacroBreakdown(protein: 46.5, carbs: 0, fat: 5.4),
                                      source: .usda),
            fdcId: 171_077, confidence: 0.9
        )
        return MealEntity(mealType: type, loggedAt: date, source: .photoAI, items: [item])
    }

    @Test("Logging a meal makes it retrievable for that day")
    func logAndFetch() async throws {
        let repo = try makeRepository()
        let meal = sampleMeal()
        try await repo.log(meal)

        let meals = try await repo.meals(on: meal.loggedAt)
        #expect(meals.count == 1)
        #expect(meals.first?.id == meal.id)
        #expect(meals.first?.items.first?.name == "Grilled chicken breast")
        #expect(abs((meals.first?.totalCalories ?? 0) - 247.5) < 0.001)
    }

    @Test("Meals are scoped to their day")
    func dayScoping() async throws {
        let repo = try makeRepository()
        let today = Date()
        let yesterday = Calendar.current.date(byAdding: .day, value: -1, to: today)!
        try await repo.log(sampleMeal(type: .breakfast, at: today))
        try await repo.log(sampleMeal(type: .dinner, at: yesterday))

        #expect(try await repo.meals(on: today).count == 1)
        #expect(try await repo.meals(on: yesterday).count == 1)
    }

    @Test("Updating a meal replaces its items and totals")
    func update() async throws {
        let repo = try makeRepository()
        var meal = sampleMeal()
        try await repo.log(meal)

        let newItem = FoodItemEntity(
            name: "Brown rice", quantity: 100, servingUnit: .gram, portionGrams: 100,
            nutrition: NutritionFacts(calories: 111,
                                      macros: MacroBreakdown(protein: 2.6, carbs: 23, fat: 0.9),
                                      source: .usda)
        )
        meal = MealEntity(id: meal.id, mealType: .dinner, loggedAt: meal.loggedAt,
                          source: meal.source, items: [newItem])
        try await repo.update(meal)

        let meals = try await repo.meals(on: meal.loggedAt)
        #expect(meals.count == 1)
        #expect(meals.first?.mealType == .dinner)
        #expect(meals.first?.items.count == 1)
        #expect(meals.first?.items.first?.name == "Brown rice")
    }

    @Test("Deleting a meal removes it")
    func delete() async throws {
        let repo = try makeRepository()
        let meal = sampleMeal()
        try await repo.log(meal)
        try await repo.delete(id: meal.id)
        #expect(try await repo.meals(on: meal.loggedAt).isEmpty)
    }

    @Test("Each mutation enqueues exactly one Outbox entry")
    func outboxGrows() async throws {
        let repo = try makeRepository()
        let meal = sampleMeal()

        try await repo.log(meal)
        #expect(try await repo.pendingOutboxCount() == 1)

        try await repo.update(meal)
        #expect(try await repo.pendingOutboxCount() == 2)

        try await repo.delete(id: meal.id)
        #expect(try await repo.pendingOutboxCount() == 3)

        let entries = try await repo.pendingOutbox()
        #expect(entries.map(\.op) == [.create, .update, .delete])
        #expect(entries.allSatisfy { $0.entityType == "meal" })
    }

    @Test("Acknowledging an outbox entry removes it")
    func outboxAck() async throws {
        let repo = try makeRepository()
        try await repo.log(sampleMeal())
        let entry = try await repo.pendingOutbox().first
        let id = try #require(entry?.id)
        try await repo.acknowledgeOutbox(id: id)
        #expect(try await repo.pendingOutboxCount() == 0)
    }

    @Test("observeDay emits an initial snapshot and updates on writes")
    func observeDay() async throws {
        let repo = try makeRepository()
        let day = Date()
        let stream = repo.observeDay(day)
        var iterator = stream.makeAsyncIterator()

        // Initial snapshot (empty).
        let first = await iterator.next()
        #expect(first?.isEmpty == true)

        try await repo.log(sampleMeal(at: day))
        let second = await iterator.next()
        #expect(second?.count == 1)
    }
}
