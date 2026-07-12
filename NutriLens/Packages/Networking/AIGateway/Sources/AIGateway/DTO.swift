import Foundation
import CoreModels

// Wire types for the BFF. Kept internal; mapped to domain at the boundary.

struct AnalyzeRequestDTO: Encodable {
    let imageBase64: String
    let perceptualHash: String
    let goal: String
    let remainingCalories: Int
    let allergies: [String]
    let unitSystem: String
}

struct CoachRequestDTO: Encodable {
    let message: String
    let recentDays: Int
}

struct CoachReplyDTO: Decodable {
    let text: String
}

struct AnalyzeResponseDTO: Decodable {
    let items: [ItemDTO]
    let overallConfidence: Double
    let warnings: [String]
    let servedFromCache: Bool?

    struct ItemDTO: Decodable {
        let name: String
        let canonicalQuery: String?
        let brand: String?
        let estimatedPortionGrams: Double
        let nutritionPer100g: NutritionDTO
        let confidence: Double
        let nutritionSource: String?
    }

    struct NutritionDTO: Decodable {
        let kcal: Double
        let protein: Double
        let carbs: Double
        let fat: Double
        let fiber: Double
        let sugar: Double
        let sodium: Double
        let vitamins: [MicroDTO]?
        let minerals: [MicroDTO]?
    }

    struct MicroDTO: Decodable {
        let name: String
        let amount: Double
        let unit: String
    }

    func toDomain() -> MealAnalysisResult {
        let mapped = items.map { item -> FoodItemEntity in
            let per100 = NutritionFacts(
                calories: item.nutritionPer100g.kcal,
                macros: MacroBreakdown(protein: item.nutritionPer100g.protein,
                                       carbs: item.nutritionPer100g.carbs,
                                       fat: item.nutritionPer100g.fat),
                fiber: item.nutritionPer100g.fiber,
                sugar: item.nutritionPer100g.sugar,
                sodium: item.nutritionPer100g.sodium,
                vitamins: (item.nutritionPer100g.vitamins ?? []).map {
                    Micronutrient(name: $0.name, amount: $0.amount, unit: $0.unit)
                },
                minerals: (item.nutritionPer100g.minerals ?? []).map {
                    Micronutrient(name: $0.name, amount: $0.amount, unit: $0.unit)
                },
                source: NutritionSource(rawValue: item.nutritionSource ?? "") ?? .aiEstimate
            )
            // Scale per-100g facts to the estimated portion once, at the boundary.
            let scaled = per100.scaled(fromPer100gTo: item.estimatedPortionGrams)
            return FoodItemEntity(
                name: item.name,
                brand: item.brand,
                quantity: item.estimatedPortionGrams,
                servingUnit: .gram,
                portionGrams: item.estimatedPortionGrams,
                nutrition: scaled,
                confidence: item.confidence
            )
        }
        return MealAnalysisResult(items: mapped,
                                  overallConfidence: overallConfidence,
                                  warnings: warnings,
                                  servedFromCache: servedFromCache ?? false)
    }
}
