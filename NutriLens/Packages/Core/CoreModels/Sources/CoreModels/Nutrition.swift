import Foundation

/// A single micronutrient reading (vitamin or mineral).
public struct Micronutrient: Codable, Sendable, Hashable, Identifiable {
    public var id: String { name }
    public let name: String
    public let amount: Double
    public let unit: String   // "mg", "µg", "IU"

    public init(name: String, amount: Double, unit: String) {
        self.name = name
        self.amount = amount
        self.unit = unit
    }
}

/// Macro grams. Value type used both standalone and embedded.
public struct MacroBreakdown: Codable, Sendable, Hashable {
    public var protein: Double
    public var carbs: Double
    public var fat: Double

    public init(protein: Double = 0, carbs: Double = 0, fat: Double = 0) {
        self.protein = protein
        self.carbs = carbs
        self.fat = fat
    }

    /// Atwater energy from macros, kcal.
    public var calories: Double { protein * 4 + carbs * 4 + fat * 9 }

    public static func + (lhs: MacroBreakdown, rhs: MacroBreakdown) -> MacroBreakdown {
        MacroBreakdown(protein: lhs.protein + rhs.protein,
                       carbs: lhs.carbs + rhs.carbs,
                       fat: lhs.fat + rhs.fat)
    }

    public static let zero = MacroBreakdown()
}

/// Daily macro goals in grams.
public struct MacroTargets: Codable, Sendable, Hashable {
    public let protein: Double
    public let carbs: Double
    public let fat: Double

    public init(protein: Double, carbs: Double, fat: Double) {
        self.protein = protein
        self.carbs = carbs
        self.fat = fat
    }
}

/// Full nutrition facts, always normalized to a given basis.
public struct NutritionFacts: Codable, Sendable, Hashable {
    public var calories: Double
    public var macros: MacroBreakdown
    public var fiber: Double
    public var sugar: Double
    public var sodium: Double        // mg
    public var vitamins: [Micronutrient]
    public var minerals: [Micronutrient]
    /// Whether the numbers came from an authoritative DB or an AI estimate.
    public var source: NutritionSource

    public init(calories: Double = 0,
                macros: MacroBreakdown = .zero,
                fiber: Double = 0,
                sugar: Double = 0,
                sodium: Double = 0,
                vitamins: [Micronutrient] = [],
                minerals: [Micronutrient] = [],
                source: NutritionSource = .aiEstimate) {
        self.calories = calories
        self.macros = macros
        self.fiber = fiber
        self.sugar = sugar
        self.sodium = sodium
        self.vitamins = vitamins
        self.minerals = minerals
        self.source = source
    }

    /// Scale every value by a multiplier (e.g. when a portion is edited from 150g to 200g).
    public func scaled(byFactor f: Double) -> NutritionFacts {
        NutritionFacts(
            calories: calories * f,
            macros: MacroBreakdown(protein: macros.protein * f,
                                   carbs: macros.carbs * f,
                                   fat: macros.fat * f),
            fiber: fiber * f,
            sugar: sugar * f,
            sodium: sodium * f,
            vitamins: vitamins.map { Micronutrient(name: $0.name, amount: $0.amount * f, unit: $0.unit) },
            minerals: minerals.map { Micronutrient(name: $0.name, amount: $0.amount * f, unit: $0.unit) },
            source: source
        )
    }

    /// Scale facts expressed per 100g to an arbitrary gram portion.
    public func scaled(fromPer100gTo grams: Double) -> NutritionFacts {
        let f = grams / 100.0
        return NutritionFacts(
            calories: calories * f,
            macros: MacroBreakdown(protein: macros.protein * f,
                                   carbs: macros.carbs * f,
                                   fat: macros.fat * f),
            fiber: fiber * f,
            sugar: sugar * f,
            sodium: sodium * f,
            vitamins: vitamins.map { Micronutrient(name: $0.name, amount: $0.amount * f, unit: $0.unit) },
            minerals: minerals.map { Micronutrient(name: $0.name, amount: $0.amount * f, unit: $0.unit) },
            source: source
        )
    }
}

public enum NutritionSource: String, Codable, Sendable {
    case usda, openFoodFacts, aiEstimate, userDefined
}
