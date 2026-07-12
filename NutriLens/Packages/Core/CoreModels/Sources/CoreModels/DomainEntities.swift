import Foundation

// Framework-free domain entities. The persistence layer owns the SwiftData `@Model`
// mirrors and maps to/from these value types at its boundary, keeping Domain pure.

public struct FoodItemEntity: Codable, Sendable, Hashable, Identifiable {
    public let id: UUID
    public var name: String
    public var brand: String?
    public var quantity: Double
    public var servingUnit: ServingUnit
    public var portionGrams: Double
    public var nutrition: NutritionFacts
    public var fdcId: Int?
    public var offBarcode: String?
    public var confidence: Double
    public var isUserEdited: Bool

    public init(id: UUID = UUID(), name: String, brand: String? = nil,
                quantity: Double, servingUnit: ServingUnit, portionGrams: Double,
                nutrition: NutritionFacts, fdcId: Int? = nil, offBarcode: String? = nil,
                confidence: Double = 1, isUserEdited: Bool = false) {
        self.id = id; self.name = name; self.brand = brand
        self.quantity = quantity; self.servingUnit = servingUnit
        self.portionGrams = portionGrams; self.nutrition = nutrition
        self.fdcId = fdcId; self.offBarcode = offBarcode
        self.confidence = confidence; self.isUserEdited = isUserEdited
    }
}

public struct MealEntity: Codable, Sendable, Hashable, Identifiable {
    public let id: UUID
    public var mealType: MealType
    public var loggedAt: Date
    public var source: MealSource
    public var note: String?
    public var items: [FoodItemEntity]
    public var photoRemoteURL: String?

    public init(id: UUID = UUID(), mealType: MealType, loggedAt: Date = .now,
                source: MealSource, note: String? = nil, items: [FoodItemEntity],
                photoRemoteURL: String? = nil) {
        self.id = id; self.mealType = mealType; self.loggedAt = loggedAt
        self.source = source; self.note = note; self.items = items
        self.photoRemoteURL = photoRemoteURL
    }

    public var totalCalories: Double { items.reduce(0) { $0 + $1.nutrition.calories } }
    public var totalMacros: MacroBreakdown { items.reduce(.zero) { $0 + $1.nutrition.macros } }
}

/// Rolled-up totals for a single day — what the Home screen and widgets read.
public struct DailySummary: Codable, Sendable, Hashable {
    public var date: Date
    public var consumedCalories: Double
    public var macros: MacroBreakdown
    public var fiber: Double
    public var waterMl: Int
    public var steps: Int
    public var targetCalories: Int
    public var macroTargets: MacroTargets
    public var targetWaterMl: Int

    public init(date: Date, consumedCalories: Double, macros: MacroBreakdown,
                fiber: Double, waterMl: Int, steps: Int,
                targetCalories: Int, macroTargets: MacroTargets, targetWaterMl: Int = 0) {
        self.date = date; self.consumedCalories = consumedCalories; self.macros = macros
        self.fiber = fiber; self.waterMl = waterMl; self.steps = steps
        self.targetCalories = targetCalories; self.macroTargets = macroTargets
        self.targetWaterMl = targetWaterMl
    }

    public var remainingCalories: Int { targetCalories - Int(consumedCalories.rounded()) }
}
