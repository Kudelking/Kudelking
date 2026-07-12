import Testing
import Foundation
@testable import CoreModels

@Suite("WidgetSnapshot")
struct WidgetSnapshotTests {

    private func summary() -> DailySummary {
        DailySummaryBuilder.build(
            date: .now,
            meals: [MealEntity(mealType: .lunch, source: .manual, items: [
                FoodItemEntity(name: "x", quantity: 100, servingUnit: .gram, portionGrams: 100,
                               nutrition: NutritionFacts(calories: 900,
                                                         macros: MacroBreakdown(protein: 60, carbs: 80, fat: 30),
                                                         source: .usda))])],
            targetCalories: 2000, macroTargets: MacroTargets(protein: 150, carbs: 200, fat: 60),
            waterMl: 1000, steps: 0, targetWaterMl: 2500)
    }

    @Test("Derives a snapshot from a DailySummary, rounding to ints")
    func fromSummary() {
        let snapshot = WidgetSnapshot(summary: summary())
        #expect(snapshot.consumedCalories == 900)
        #expect(snapshot.protein == 60)
        #expect(snapshot.targetCalories == 2000)
        #expect(snapshot.remainingCalories == 1100)
        #expect(abs(snapshot.calorieProgress - 0.45) < 0.001)
    }

    @Test("Round-trips through Codable")
    func codable() throws {
        let snapshot = WidgetSnapshot(summary: summary())
        let data = try JSONEncoder().encode(snapshot)
        let decoded = try JSONDecoder().decode(WidgetSnapshot.self, from: data)
        #expect(decoded == snapshot)
    }

    @Test("Progress clamps and handles zero target")
    func progress() {
        let over = WidgetSnapshot(date: .now, consumedCalories: 3000, targetCalories: 2000,
                                  protein: 0, carbs: 0, fat: 0, waterMl: 0, targetWaterMl: 0)
        #expect(over.calorieProgress == 1)
        let zero = WidgetSnapshot(date: .now, consumedCalories: 100, targetCalories: 0,
                                  protein: 0, carbs: 0, fat: 0, waterMl: 0, targetWaterMl: 0)
        #expect(zero.calorieProgress == 0)
    }
}
