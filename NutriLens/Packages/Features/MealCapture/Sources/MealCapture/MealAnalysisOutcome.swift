import Foundation
import CoreModels

/// Context passed into an analysis so the AI can tailor warnings and portions to the user.
public struct MealAnalysisContext: Sendable, Equatable {
    public let goal: Goal
    public let remainingCalories: Int
    public let allergies: [Allergen]
    public let unitSystem: UnitSystem

    public init(goal: Goal, remainingCalories: Int,
                allergies: [Allergen], unitSystem: UnitSystem) {
        self.goal = goal
        self.remainingCalories = remainingCalories
        self.allergies = allergies
        self.unitSystem = unitSystem
    }
}

/// The result of running the on-device → barcode → AI cascade. Failures are encoded as outcomes
/// (never thrown) so the UI always has a concrete next step — the pipeline never dead-ends.
public enum MealAnalysisOutcome: Sendable, Equatable {
    /// Foods were identified. `source` distinguishes barcode vs photo AI; `servedFromCache`
    /// indicates a $0 cache hit.
    case recognized(items: [FoodItemEntity], source: MealSource, servedFromCache: Bool)
    /// The frame doesn't contain food — prompt the user to retake.
    case notFood
    /// AI was unavailable or the image was unreadable — fall back to manual entry, prefilled with
    /// any on-device labels we managed to gather.
    case needsManualEntry(prefill: [String], reason: AppError)
}
