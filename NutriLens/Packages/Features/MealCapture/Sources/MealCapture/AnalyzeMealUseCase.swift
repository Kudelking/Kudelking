import Foundation
import CoreModels
import VisionService

public protocol AnalyzeMealUseCase: Sendable {
    func analyze(imageData: Data, context: MealAnalysisContext) async -> MealAnalysisOutcome
}

/// Orchestrates the cost cascade (ARCHITECTURE §6):
///   1. prepare image (resize/compress/pHash)
///   2. barcode? → OpenFoodFacts/USDA, no AI  ($0)
///   3. on-device "is this food?" gate — reject junk frames before paying  ($0)
///   4. OpenAI Vision via the gateway (uses the pHash for server-side caching)
///   5. on failure → manual entry prefilled with on-device labels (graceful degradation)
///
/// Failures are converted to `MealAnalysisOutcome` so the caller always has a next step.
public struct DefaultAnalyzeMealUseCase: AnalyzeMealUseCase {
    private let preparer: ImagePreparing
    private let recognizer: FoodRecognizer
    private let gateway: AIGateway
    private let nutritionDB: NutritionDatabase

    public init(preparer: ImagePreparing,
                recognizer: FoodRecognizer,
                gateway: AIGateway,
                nutritionDB: NutritionDatabase) {
        self.preparer = preparer
        self.recognizer = recognizer
        self.gateway = gateway
        self.nutritionDB = nutritionDB
    }

    public func analyze(imageData: Data, context: MealAnalysisContext) async -> MealAnalysisOutcome {
        // 1. Prepare. An unreadable image can't be analyzed → manual entry.
        guard let prepared = preparer.prepare(imageData) else {
            return .needsManualEntry(prefill: [], reason: .foodNotRecognized)
        }

        // 2. Barcode short-circuit — no AI needed.
        if let barcode = await recognizer.detectBarcode(prepared.jpegData) {
            if let match = try? await nutritionDB.byBarcode(barcode) {
                return .recognized(items: [Self.item(from: match)],
                                   source: .barcode, servedFromCache: false)
            }
        }

        // 3. Free on-device gate.
        guard await recognizer.isFood(prepared.jpegData) else {
            return .notFood
        }

        // 4. Paid AI analysis.
        let request = MealAnalysisRequest(
            imageData: prepared.jpegData,
            perceptualHash: prepared.perceptualHashHex,
            goal: context.goal,
            remainingCalories: context.remainingCalories,
            allergies: context.allergies,
            unitSystem: context.unitSystem
        )
        do {
            let result = try await gateway.analyzeMeal(request)
            guard !result.items.isEmpty else {
                return await degrade(prepared, reason: .foodNotRecognized)
            }
            return .recognized(items: result.items, source: .photoAI,
                               servedFromCache: result.servedFromCache)
        } catch let error as AppError {
            return await degrade(prepared, reason: error)
        } catch {
            return await degrade(prepared, reason: .unknown)
        }
    }

    /// Build the manual-entry fallback, prefilled with whatever on-device labels we can gather.
    private func degrade(_ prepared: PreparedImage, reason: AppError) async -> MealAnalysisOutcome {
        let labels = await recognizer.classify(prepared.jpegData)
            .sorted { $0.confidence > $1.confidence }
            .prefix(5)
            .map(\.identifier)
        return .needsManualEntry(prefill: Array(labels), reason: reason)
    }

    /// A barcode match reports nutrition per 100g; default the portion to 100g (user editable).
    private static func item(from match: FoodMatch) -> FoodItemEntity {
        FoodItemEntity(
            name: match.name,
            brand: match.brand,
            quantity: 100,
            servingUnit: .gram,
            portionGrams: 100,
            nutrition: match.nutritionPer100g,
            offBarcode: match.id,
            confidence: 1
        )
    }
}
