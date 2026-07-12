import Testing
@testable import CoreModels

@Suite("NutritionMath")
struct NutritionMathTests {

    @Test("BMR matches Mifflin–St Jeor for a known male case")
    func bmrMale() {
        // 80kg, 180cm, 30y, male → 10*80 + 6.25*180 - 5*30 + 5 = 1780
        let bmr = NutritionMath.basalMetabolicRate(weightKg: 80, heightCm: 180, age: 30, sex: .male)
        #expect(abs(bmr - 1780) < 0.001)
    }

    @Test("BMR matches Mifflin–St Jeor for a known female case")
    func bmrFemale() {
        // 60kg, 165cm, 25y, female → 600 + 1031.25 - 125 - 161 = 1345.25
        let bmr = NutritionMath.basalMetabolicRate(weightKg: 60, heightCm: 165, age: 25, sex: .female)
        #expect(abs(bmr - 1345.25) < 0.001)
    }

    @Test("TDEE applies the activity multiplier")
    func tdee() {
        let tdee = NutritionMath.totalDailyEnergyExpenditure(bmr: 1780, activity: .moderate)
        #expect(abs(tdee - 1780 * 1.55) < 0.001)
    }

    @Test("Weight-loss target subtracts 500 kcal")
    func loseWeightTarget() {
        let t = NutritionMath.targetCalories(tdee: 2500, goal: .loseWeight, sex: .male)
        #expect(t == 2000)
    }

    @Test("Target never drops below the safe floor")
    func safetyFloor() {
        // Tiny TDEE with a deficit must clamp to the female/other floor of 1200.
        let t = NutritionMath.targetCalories(tdee: 1400, goal: .loseWeight, sex: .female)
        #expect(t == 1200)
    }

    @Test("Macro split hits protein-per-kg and 25% fat, carbs fill the rest")
    func macroSplit() {
        let targets = NutritionMath.macroTargets(targetCalories: 2000, weightKg: 80, goal: .loseWeight)
        // protein: 2.0 * 80 = 160g ; fat: 25% of 2000 = 500kcal / 9 ≈ 55.56 → 56g
        #expect(targets.protein == 160)
        #expect(targets.fat == 56)
        // carbs fill remainder: (2000 - 640 - 500)/4 = 215 → rounded
        #expect(targets.carbs == 215)
    }

    @Test("BMI is computed in kg/m²")
    func bmi() {
        // 80kg / (1.8^2) = 24.691...
        let value = NutritionMath.bmi(weightKg: 80, heightCm: 180)
        #expect(abs(value - 24.691) < 0.01)
    }

    @Test("Calorie/macro consistency check respects tolerance")
    func consistency() {
        let macros = MacroBreakdown(protein: 30, carbs: 0, fat: 3.6) // = 152.4 kcal
        #expect(NutritionMath.caloriesConsistent(calories: 165, macros: macros))       // within 20%
        #expect(!NutritionMath.caloriesConsistent(calories: 500, macros: macros))       // way off
    }
}

@Suite("NutritionFacts scaling")
struct NutritionScalingTests {

    @Test("Per-100g facts scale linearly to a portion")
    func scaling() {
        let per100 = NutritionFacts(calories: 165,
                                    macros: MacroBreakdown(protein: 31, carbs: 0, fat: 3.6),
                                    fiber: 0, sugar: 0, sodium: 74,
                                    minerals: [Micronutrient(name: "Iron", amount: 1, unit: "mg")],
                                    source: .usda)
        let scaled = per100.scaled(fromPer100gTo: 150)
        #expect(abs(scaled.calories - 247.5) < 0.001)
        #expect(abs(scaled.macros.protein - 46.5) < 0.001)
        #expect(abs(scaled.minerals.first!.amount - 1.5) < 0.001)
    }
}
