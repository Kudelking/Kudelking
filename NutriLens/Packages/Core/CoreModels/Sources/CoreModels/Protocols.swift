import Foundation

// Domain service boundaries. Implementations live in the Data / Platform layers and are
// injected via the DI container, so ViewModels depend only on these protocols and are mockable.

// MARK: - AI Gateway

public struct MealAnalysisRequest: Sendable {
    public let imageData: Data
    public let perceptualHash: String
    public let goal: Goal
    public let remainingCalories: Int
    public let allergies: [Allergen]
    public let unitSystem: UnitSystem

    public init(imageData: Data, perceptualHash: String, goal: Goal,
                remainingCalories: Int, allergies: [Allergen], unitSystem: UnitSystem) {
        self.imageData = imageData; self.perceptualHash = perceptualHash
        self.goal = goal; self.remainingCalories = remainingCalories
        self.allergies = allergies; self.unitSystem = unitSystem
    }
}

public struct MealAnalysisResult: Sendable {
    public let items: [FoodItemEntity]
    public let overallConfidence: Double
    public let warnings: [String]
    public let servedFromCache: Bool

    public init(items: [FoodItemEntity], overallConfidence: Double,
                warnings: [String], servedFromCache: Bool) {
        self.items = items; self.overallConfidence = overallConfidence
        self.warnings = warnings; self.servedFromCache = servedFromCache
    }
}

public struct CoachRequest: Sendable {
    public let message: String
    public let recentDays: Int
    public init(message: String, recentDays: Int = 7) {
        self.message = message; self.recentDays = recentDays
    }
}

public struct CoachReply: Sendable {
    public let text: String
    public init(text: String) { self.text = text }
}

public protocol AIGateway: Sendable {
    func analyzeMeal(_ request: MealAnalysisRequest) async throws -> MealAnalysisResult
    /// Streamed tokens for the coach chat.
    func coachChat(_ request: CoachRequest) -> AsyncThrowingStream<String, Error>
}

// MARK: - Repositories

public protocol MealRepository: Sendable {
    func log(_ meal: MealEntity) async throws
    func meals(on day: Date) async throws -> [MealEntity]
    func update(_ meal: MealEntity) async throws
    func delete(id: UUID) async throws
    func observeDay(_ day: Date) -> AsyncStream<[MealEntity]>
}

public struct FoodMatch: Sendable, Hashable, Identifiable {
    public let id: String
    public let name: String
    public let brand: String?
    public let nutritionPer100g: NutritionFacts
    public init(id: String, name: String, brand: String?, nutritionPer100g: NutritionFacts) {
        self.id = id; self.name = name; self.brand = brand
        self.nutritionPer100g = nutritionPer100g
    }
}

public protocol NutritionDatabase: Sendable {
    func search(_ query: String) async throws -> [FoodMatch]
    func lookup(fdcId: Int) async throws -> NutritionFacts
    func byBarcode(_ code: String) async throws -> FoodMatch?
}

// MARK: - Platform

public protocol HealthKitService: Sendable {
    func requestAuthorization() async throws
    func todaySteps() async throws -> Int
    func write(nutrition: NutritionFacts, date: Date) async throws
    func writeWeight(_ kg: Double, date: Date) async throws
}

public protocol PurchaseService: Sendable {
    func isPremium() async -> Bool
    func restore() async throws
}

public protocol Analytics: Sendable {
    func track(_ event: AnalyticsEvent)
}

public enum AnalyticsEvent: Sendable {
    case onboardingCompleted
    case firstMealAnalyzed
    case mealLogged(source: MealSource)
    case paywallShown
    case purchaseCompleted
    case coachMessageSent
}
