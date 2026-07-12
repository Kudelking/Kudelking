import Testing
import Foundation
@testable import CoreModels

@Suite("DailySummaryBuilder")
struct DailySummaryBuilderTests {

    private func meal(calories: Double, protein: Double, fiber: Double) -> MealEntity {
        let item = FoodItemEntity(
            name: "x", quantity: 100, servingUnit: .gram, portionGrams: 100,
            nutrition: NutritionFacts(calories: calories,
                                      macros: MacroBreakdown(protein: protein, carbs: 0, fat: 0),
                                      fiber: fiber, source: .usda))
        return MealEntity(mealType: .lunch, source: .manual, items: [item])
    }

    private let targets = MacroTargets(protein: 150, carbs: 200, fat: 60)

    @Test("Aggregates calories, macros, and fiber across meals")
    func aggregates() {
        let summary = DailySummaryBuilder.build(
            date: .now,
            meals: [meal(calories: 300, protein: 30, fiber: 4),
                    meal(calories: 200, protein: 20, fiber: 3)],
            targetCalories: 2000, macroTargets: targets,
            waterMl: 1000, steps: 5000, targetWaterMl: 2500)

        #expect(summary.consumedCalories == 500)
        #expect(summary.macros.protein == 50)
        #expect(summary.fiber == 7)
        #expect(summary.remainingCalories == 1500)
        #expect(summary.waterMl == 1000)
    }

    @Test("Empty day yields zeros and full remaining")
    func emptyDay() {
        let summary = DailySummaryBuilder.build(
            date: .now, meals: [], targetCalories: 2000, macroTargets: targets,
            waterMl: 0, steps: 0, targetWaterMl: 2500)
        #expect(summary.consumedCalories == 0)
        #expect(summary.remainingCalories == 2000)
        #expect(summary.calorieProgress == 0)
    }

    @Test("Progress values are clamped to 0...1")
    func progressClamped() {
        let summary = DailySummaryBuilder.build(
            date: .now,
            meals: [meal(calories: 3000, protein: 300, fiber: 0)],
            targetCalories: 2000, macroTargets: targets,
            waterMl: 5000, steps: 0, targetWaterMl: 2500)
        #expect(summary.calorieProgress == 1)                 // 3000/2000 clamped
        #expect(summary.macroProgress(\.protein, target: \.protein) == 1)
        #expect(summary.waterProgress == 1)                   // 5000/2500 clamped
        #expect(summary.remainingCalories == -1000)           // remaining may go negative
    }

    @Test("Half-way progress is exact")
    func halfProgress() {
        let summary = DailySummaryBuilder.build(
            date: .now,
            meals: [meal(calories: 1000, protein: 75, fiber: 0)],
            targetCalories: 2000, macroTargets: targets,
            waterMl: 1250, steps: 0, targetWaterMl: 2500)
        #expect(abs(summary.calorieProgress - 0.5) < 0.0001)
        #expect(abs(summary.macroProgress(\.protein, target: \.protein) - 0.5) < 0.0001)
        #expect(abs(summary.waterProgress - 0.5) < 0.0001)
    }
}
