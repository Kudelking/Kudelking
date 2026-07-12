import Foundation

/// Pure, deterministic nutrition calculations. No framework deps — fully unit-testable.
///
/// These functions are the single source of truth for how NutriLens derives a user's
/// energy and macro targets from their profile. They are intentionally free of any
/// storage / UI concerns so they can be exercised exhaustively in `CoreModelsTests`.
public enum NutritionMath {

    /// Basal Metabolic Rate via the Mifflin–St Jeor equation (kcal/day).
    ///
    /// male:   10·kg + 6.25·cm − 5·age + 5
    /// female: 10·kg + 6.25·cm − 5·age − 161
    /// other:  average of the two (no clinically standard formula exists).
    public static func basalMetabolicRate(weightKg: Double,
                                          heightCm: Double,
                                          age: Int,
                                          sex: BiologicalSex) -> Double {
        let base = 10 * weightKg + 6.25 * heightCm - 5 * Double(age)
        switch sex {
        case .male: return base + 5
        case .female: return base - 161
        case .other: return base + (5 - 161) / 2   // midpoint
        }
    }

    /// Total Daily Energy Expenditure = BMR × activity multiplier (kcal/day).
    public static func totalDailyEnergyExpenditure(bmr: Double,
                                                   activity: ActivityLevel) -> Double {
        bmr * activity.multiplier
    }

    /// Recommended daily calorie target for a goal, clamped to a safe floor.
    ///
    /// We never recommend below 1200 kcal (female) / 1500 kcal (male) to avoid
    /// unsafe deficits; `other` uses the lower floor.
    public static func targetCalories(tdee: Double,
                                      goal: Goal,
                                      sex: BiologicalSex) -> Int {
        let raw = tdee + Double(goal.calorieDelta)
        let floor: Double = switch sex {
        case .male: 1500
        case .female, .other: 1200
        }
        return Int(max(raw, floor).rounded())
    }

    /// Split target calories into macro grams.
    ///
    /// Protein is anchored to bodyweight (goal-dependent), fat to 25% of calories,
    /// and carbohydrates fill the remainder. This mirrors common evidence-based
    /// coaching guidance and guarantees protein adequacy in a deficit.
    public static func macroTargets(targetCalories: Int,
                                    weightKg: Double,
                                    goal: Goal) -> MacroTargets {
        let proteinGrams = goal.proteinPerKg * weightKg
        let proteinKcal = proteinGrams * 4

        let fatKcal = Double(targetCalories) * 0.25
        let fatGrams = fatKcal / 9

        let remainingKcal = max(0, Double(targetCalories) - proteinKcal - fatKcal)
        let carbGrams = remainingKcal / 4

        return MacroTargets(protein: proteinGrams.rounded(),
                            carbs: carbGrams.rounded(),
                            fat: fatGrams.rounded())
    }

    /// Body Mass Index (kg/m²).
    public static func bmi(weightKg: Double, heightCm: Double) -> Double {
        guard heightCm > 0 else { return 0 }
        let m = heightCm / 100
        return weightKg / (m * m)
    }

    /// Validate that stated calories agree with Atwater macro energy within tolerance.
    /// Returns true when |kcal − (4p+4c+9f)| ≤ tolerance·kcal. Used to sanity-check AI output.
    public static func caloriesConsistent(calories: Double,
                                          macros: MacroBreakdown,
                                          tolerance: Double = 0.20) -> Bool {
        guard calories > 0 else { return macros.calories == 0 }
        let delta = abs(calories - macros.calories)
        return delta <= tolerance * calories
    }
}
