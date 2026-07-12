import Foundation
import CoreModels

// Offline stand-ins for the networked services so the dev build runs without a backend.
// Production wires AIGatewayClient (→ your BFF) and NutritionDatabaseService (USDA/OFF).

/// Returns a canned analysis and streams a canned coach reply.
struct DemoAIGateway: AIGateway {
    func analyzeMeal(_ request: MealAnalysisRequest) async throws -> MealAnalysisResult {
        try? await Task.sleep(for: .milliseconds(600))     // simulate latency
        let item = FoodItemEntity(
            name: "Grilled chicken with rice",
            quantity: 320, servingUnit: .gram, portionGrams: 320,
            nutrition: NutritionFacts(
                calories: 520,
                macros: MacroBreakdown(protein: 42, carbs: 55, fat: 12),
                fiber: 3, sugar: 2, sodium: 480,
                minerals: [Micronutrient(name: "Iron", amount: 2.1, unit: "mg")],
                source: .aiEstimate),
            confidence: 0.86)
        return MealAnalysisResult(items: [item], overallConfidence: 0.86,
                                  warnings: [], servedFromCache: false)
    }

    func coachChat(_ request: CoachRequest) -> AsyncThrowingStream<String, Error> {
        let reply = "Based on your day so far, you have room for a protein-rich dinner. "
            + "Aim for ~40g protein and keep it around 500 kcal."
        return AsyncThrowingStream { continuation in
            Task {
                for word in reply.split(separator: " ") {
                    continuation.yield(String(word) + " ")
                    try? await Task.sleep(for: .milliseconds(40))
                }
                continuation.finish()
            }
        }
    }
}

/// Empty nutrition DB for dev (search returns nothing; barcodes unresolved).
struct DemoNutritionDatabase: NutritionDatabase {
    func search(_ query: String) async throws -> [FoodMatch] { [] }
    func lookup(fdcId: Int) async throws -> NutritionFacts { NutritionFacts() }
    func byBarcode(_ code: String) async throws -> FoodMatch? { nil }
}

/// Derives a weight/calorie series for the Progress screen from local storage (dev).
actor DemoMetricsProvider: MetricsProviding {
    private var weights: [WeightSample] = []
    func weightSeries(days: Int) async throws -> [WeightSample] { weights }
    func calorieSeries(days: Int) async throws -> [CaloriePoint] { [] }
    func logWeight(_ kg: Double, date: Date) async throws {
        weights.append(WeightSample(date: date, kg: kg))
    }
}
