import Foundation

/// Pure aggregation of a day's meals into the `DailySummary` the Home screen and widgets read.
/// Framework-free and fully unit-tested. Totals come from each meal's denormalized fields where
/// possible, and fiber (not denormalized) is summed from items.
public enum DailySummaryBuilder {
    public static func build(date: Date,
                             meals: [MealEntity],
                             targetCalories: Int,
                             macroTargets: MacroTargets,
                             waterMl: Int,
                             steps: Int,
                             targetWaterMl: Int) -> DailySummary {
        let consumed = meals.reduce(0) { $0 + $1.totalCalories }
        let macros = meals.reduce(.zero) { $0 + $1.totalMacros }
        let fiber = meals
            .flatMap(\.items)
            .reduce(0) { $0 + $1.nutrition.fiber }

        return DailySummary(
            date: date,
            consumedCalories: consumed,
            macros: macros,
            fiber: fiber,
            waterMl: waterMl,
            steps: steps,
            targetCalories: targetCalories,
            macroTargets: macroTargets,
            targetWaterMl: targetWaterMl
        )
    }
}

public extension DailySummary {
    /// 0…1 progress toward the calorie target (clamped), for ring rendering.
    var calorieProgress: Double {
        guard targetCalories > 0 else { return 0 }
        return min(1, max(0, consumedCalories / Double(targetCalories)))
    }

    func macroProgress(_ keyPath: KeyPath<MacroBreakdown, Double>,
                       target: KeyPath<MacroTargets, Double>) -> Double {
        let goal = macroTargets[keyPath: target]
        guard goal > 0 else { return 0 }
        return min(1, max(0, macros[keyPath: keyPath] / goal))
    }

    var waterProgress: Double {
        // Water goal is carried on the profile; Home passes the target via `targetWaterMl`.
        guard targetWaterMl > 0 else { return 0 }
        return min(1, max(0, Double(waterMl) / Double(targetWaterMl)))
    }
}
