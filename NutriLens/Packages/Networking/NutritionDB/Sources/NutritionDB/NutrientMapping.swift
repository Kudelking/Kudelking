import Foundation
import CoreModels

/// USDA FoodData Central nutrient numbers we care about. Central table so both the search and
/// detail response shapes map consistently.
enum USDANutrient {
    static let energyKcal = 1008
    static let protein = 1003
    static let carbs = 1005
    static let fat = 1004
    static let fiber = 1079
    static let sugars = 2000
    static let sodium = 1093        // mg

    // A curated subset of micronutrients surfaced in the UI.
    static let vitamins: [Int: String] = [
        1106: "Vitamin A", 1162: "Vitamin C", 1114: "Vitamin D",
        1109: "Vitamin E", 1175: "Vitamin B6", 1178: "Vitamin B12"
    ]
    static let minerals: [Int: String] = [
        1087: "Calcium", 1089: "Iron", 1090: "Magnesium",
        1092: "Potassium", 1095: "Zinc"
    ]
}

/// Builds `NutritionFacts` (per 100g) from a flat map of `nutrientId → (amount, unit)`.
func makeNutritionFacts(from values: [Int: (amount: Double, unit: String)],
                        source: NutritionSource) -> NutritionFacts {
    func amount(_ id: Int) -> Double { values[id]?.amount ?? 0 }

    let vitamins = USDANutrient.vitamins.compactMap { id, name -> Micronutrient? in
        guard let v = values[id] else { return nil }
        return Micronutrient(name: name, amount: v.amount, unit: v.unit)
    }.sorted { $0.name < $1.name }

    let minerals = USDANutrient.minerals.compactMap { id, name -> Micronutrient? in
        guard let v = values[id] else { return nil }
        return Micronutrient(name: name, amount: v.amount, unit: v.unit)
    }.sorted { $0.name < $1.name }

    return NutritionFacts(
        calories: amount(USDANutrient.energyKcal),
        macros: MacroBreakdown(protein: amount(USDANutrient.protein),
                               carbs: amount(USDANutrient.carbs),
                               fat: amount(USDANutrient.fat)),
        fiber: amount(USDANutrient.fiber),
        sugar: amount(USDANutrient.sugars),
        sodium: amount(USDANutrient.sodium),
        vitamins: vitamins,
        minerals: minerals,
        source: source
    )
}
