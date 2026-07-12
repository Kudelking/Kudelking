import Foundation

/// A compact, Codable snapshot of the day shared with the Widget and Watch targets via an App
/// Group. Small and self-contained so the widget extension never touches the full store.
public struct WidgetSnapshot: Codable, Sendable, Equatable {
    public let date: Date
    public let consumedCalories: Int
    public let targetCalories: Int
    public let protein: Int
    public let carbs: Int
    public let fat: Int
    public let waterMl: Int
    public let targetWaterMl: Int

    public init(date: Date, consumedCalories: Int, targetCalories: Int,
                protein: Int, carbs: Int, fat: Int, waterMl: Int, targetWaterMl: Int) {
        self.date = date
        self.consumedCalories = consumedCalories
        self.targetCalories = targetCalories
        self.protein = protein
        self.carbs = carbs
        self.fat = fat
        self.waterMl = waterMl
        self.targetWaterMl = targetWaterMl
    }

    public init(summary: DailySummary) {
        self.init(
            date: summary.date,
            consumedCalories: Int(summary.consumedCalories.rounded()),
            targetCalories: summary.targetCalories,
            protein: Int(summary.macros.protein.rounded()),
            carbs: Int(summary.macros.carbs.rounded()),
            fat: Int(summary.macros.fat.rounded()),
            waterMl: summary.waterMl,
            targetWaterMl: summary.targetWaterMl)
    }

    public var remainingCalories: Int { targetCalories - consumedCalories }

    public var calorieProgress: Double {
        guard targetCalories > 0 else { return 0 }
        return min(1, max(0, Double(consumedCalories) / Double(targetCalories)))
    }

    public static let placeholder = WidgetSnapshot(
        date: .now, consumedCalories: 1200, targetCalories: 2000,
        protein: 90, carbs: 120, fat: 40, waterMl: 1500, targetWaterMl: 2500)
}

/// Shared persistence for the snapshot (App Group). Protocol so the widget + app agree and it is
/// testable with an in-memory double.
public protocol WidgetSnapshotStore: Sendable {
    func read() -> WidgetSnapshot?
    func write(_ snapshot: WidgetSnapshot)
}
