import Testing
import Foundation
@testable import MealCapture
import CoreModels
import VisionService

@Suite("DefaultAnalyzeMealUseCase cascade")
struct AnalyzeMealUseCaseTests {

    private func useCase(
        preparer: ImagePreparing = StubImagePreparer.ok,
        recognizer: FoodRecognizer,
        gateway: AIGateway,
        db: NutritionDatabase = MockNutritionDatabase()
    ) -> DefaultAnalyzeMealUseCase {
        DefaultAnalyzeMealUseCase(preparer: preparer, recognizer: recognizer,
                                  gateway: gateway, nutritionDB: db)
    }

    private var successGateway: MockAIGateway {
        MockAIGateway(outcome: .success(MealAnalysisResult(
            items: [sampleItem()], overallConfidence: 0.8, warnings: [], servedFromCache: false)))
    }

    @Test("Unreadable image falls back to manual entry")
    func unreadableImage() async {
        let uc = useCase(preparer: StubImagePreparer(result: nil),
                         recognizer: MockFoodRecognizer(), gateway: successGateway)
        let outcome = await uc.analyze(imageData: Data(), context: .sample)
        #expect(outcome == .needsManualEntry(prefill: [], reason: .foodNotRecognized))
    }

    @Test("Barcode short-circuits before any AI call")
    func barcodePath() async {
        let gateway = successGateway
        let uc = useCase(
            recognizer: MockFoodRecognizer(barcode: "3017620422003"),
            gateway: gateway,
            db: MockNutritionDatabase(barcodeMatch: foodMatch()))
        let outcome = await uc.analyze(imageData: Data(), context: .sample)

        if case let .recognized(items, source, _) = outcome {
            #expect(source == .barcode)
            #expect(items.first?.name == "Protein bar")
            #expect(items.first?.portionGrams == 100)
        } else {
            Issue.record("Expected barcode recognition, got \(outcome)")
        }
        #expect(gateway.analyzeCallCount == 0)
    }

    @Test("Non-food frame is rejected without calling AI")
    func notFood() async {
        let gateway = successGateway
        let uc = useCase(recognizer: MockFoodRecognizer(foodResult: false), gateway: gateway)
        let outcome = await uc.analyze(imageData: Data(), context: .sample)
        #expect(outcome == .notFood)
        #expect(gateway.analyzeCallCount == 0)
    }

    @Test("Food frame runs AI and returns recognized items")
    func aiSuccess() async {
        let uc = useCase(recognizer: MockFoodRecognizer(foodResult: true), gateway: successGateway)
        let outcome = await uc.analyze(imageData: Data(), context: .sample)
        if case let .recognized(items, source, cache) = outcome {
            #expect(source == .photoAI)
            #expect(items.count == 1)
            #expect(!cache)
        } else {
            Issue.record("Expected AI recognition, got \(outcome)")
        }
    }

    @Test("AI failure degrades to manual entry prefilled with on-device labels")
    func aiFailureDegrades() async {
        let recognizer = MockFoodRecognizer(
            foodResult: true,
            labels: [FoodLabel(identifier: "pizza", confidence: 0.7),
                     FoodLabel(identifier: "cheese", confidence: 0.5)])
        let uc = useCase(recognizer: recognizer,
                         gateway: MockAIGateway(outcome: .failure(.quotaExceeded)))
        let outcome = await uc.analyze(imageData: Data(), context: .sample)
        #expect(outcome == .needsManualEntry(prefill: ["pizza", "cheese"], reason: .quotaExceeded))
    }

    @Test("Empty AI result also degrades to manual entry")
    func emptyResultDegrades() async {
        let gateway = MockAIGateway(outcome: .success(MealAnalysisResult(
            items: [], overallConfidence: 0, warnings: [], servedFromCache: false)))
        let uc = useCase(recognizer: MockFoodRecognizer(foodResult: true), gateway: gateway)
        let outcome = await uc.analyze(imageData: Data(), context: .sample)
        if case .needsManualEntry = outcome {} else {
            Issue.record("Expected manual entry, got \(outcome)")
        }
    }
}
