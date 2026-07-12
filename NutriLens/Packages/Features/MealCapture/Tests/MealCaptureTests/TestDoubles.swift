import Foundation
@testable import MealCapture
import CoreModels
import VisionService

struct StubImagePreparer: ImagePreparing {
    var result: PreparedImage?
    func prepare(_ imageData: Data) -> PreparedImage? { result }

    static let ok = StubImagePreparer(result: PreparedImage(
        jpegData: Data([0xFF, 0xD8]), perceptualHashHex: "00ff00ff00ff00ff",
        pixelWidth: 1024, pixelHeight: 768))
}

final class MockAIGateway: AIGateway, @unchecked Sendable {
    enum Outcome { case success(MealAnalysisResult); case failure(AppError) }
    var outcome: Outcome
    private(set) var analyzeCallCount = 0

    init(outcome: Outcome) { self.outcome = outcome }

    func analyzeMeal(_ request: MealAnalysisRequest) async throws -> MealAnalysisResult {
        analyzeCallCount += 1
        switch outcome {
        case let .success(result): return result
        case let .failure(error): throw error
        }
    }

    func coachChat(_ request: CoachRequest) -> AsyncThrowingStream<String, Error> {
        AsyncThrowingStream { $0.finish() }
    }
}

struct MockNutritionDatabase: NutritionDatabase {
    var barcodeMatch: FoodMatch?
    func search(_ query: String) async throws -> [FoodMatch] { [] }
    func lookup(fdcId: Int) async throws -> NutritionFacts { NutritionFacts() }
    func byBarcode(_ code: String) async throws -> FoodMatch? { barcodeMatch }
}

actor MockMealRepository: MealRepository {
    private(set) var logged: [MealEntity] = []
    var logError: AppError?

    func setLogError(_ error: AppError?) { logError = error }
    func loggedMeals() -> [MealEntity] { logged }

    func log(_ meal: MealEntity) async throws {
        if let logError { throw logError }
        logged.append(meal)
    }
    func meals(on day: Date) async throws -> [MealEntity] { logged }
    func update(_ meal: MealEntity) async throws {}
    func delete(id: UUID) async throws {}
    nonisolated func observeDay(_ day: Date) -> AsyncStream<[MealEntity]> {
        AsyncStream { $0.finish() }
    }
}

final class AnalyticsSpy: Analytics, @unchecked Sendable {
    private(set) var events: [AnalyticsEvent] = []
    func track(_ event: AnalyticsEvent) { events.append(event) }
}

extension MealAnalysisContext {
    static let sample = MealAnalysisContext(goal: .loseWeight, remainingCalories: 800,
                                            allergies: [], unitSystem: .metric)
}

func sampleItem(name: String = "Chicken", calories: Double = 200,
                portion: Double = 150) -> FoodItemEntity {
    FoodItemEntity(name: name, quantity: portion, servingUnit: .gram, portionGrams: portion,
                   nutrition: NutritionFacts(calories: calories,
                                             macros: MacroBreakdown(protein: 30, carbs: 5, fat: 4),
                                             source: .usda))
}

func foodMatch() -> FoodMatch {
    FoodMatch(id: "123", name: "Protein bar", brand: "Acme",
              nutritionPer100g: NutritionFacts(calories: 400,
                                               macros: MacroBreakdown(protein: 30, carbs: 40, fat: 12),
                                               source: .openFoodFacts))
}
