import Testing
import Foundation
@testable import MealCapture
import CoreModels
import VisionService

@MainActor
@Suite("MealAnalysisViewModel")
struct MealAnalysisViewModelTests {

    private func makeVM(
        recognizer: FoodRecognizer = MockFoodRecognizer(foodResult: true),
        gateway: AIGateway,
        repository: MealRepository,
        analytics: Analytics? = nil,
        isFirstMeal: Bool = false
    ) -> MealAnalysisViewModel {
        let useCase = DefaultAnalyzeMealUseCase(
            preparer: StubImagePreparer.ok, recognizer: recognizer,
            gateway: gateway, nutritionDB: MockNutritionDatabase())
        return MealAnalysisViewModel(
            imageData: Data(), context: .sample, mealType: .lunch,
            useCase: useCase, repository: repository, analytics: analytics,
            isFirstMeal: isFirstMeal)
    }

    private func successGateway() -> MockAIGateway {
        MockAIGateway(outcome: .success(MealAnalysisResult(
            items: [sampleItem()], overallConfidence: 0.8, warnings: [], servedFromCache: false)))
    }

    @Test("start() moves to review and tracks first-meal analytics")
    func startReview() async {
        let spy = AnalyticsSpy()
        let vm = makeVM(gateway: successGateway(), repository: MockMealRepository(),
                        analytics: spy, isFirstMeal: true)
        await vm.start()
        #expect(vm.phase == .review)
        #expect(vm.items.count == 1)
        #expect(spy.events.contains(.firstMealAnalyzed))
    }

    @Test("Non-food frame lands on the notFood phase")
    func notFoodPhase() async {
        let vm = makeVM(recognizer: MockFoodRecognizer(foodResult: false),
                        gateway: successGateway(), repository: MockMealRepository())
        await vm.start()
        #expect(vm.phase == .notFood)
    }

    @Test("Editing a portion rescales nutrition proportionally")
    func editPortion() async {
        let vm = makeVM(gateway: successGateway(), repository: MockMealRepository())
        await vm.start()
        let item = vm.items[0]
        let baseCalories = item.nutrition.calories        // at 150g
        vm.updatePortion(itemID: item.id, grams: 300)     // double
        #expect(abs(vm.items[0].nutrition.calories - baseCalories * 2) < 0.001)
        #expect(vm.items[0].portionGrams == 300)
        #expect(vm.items[0].isUserEdited)
    }

    @Test("Removing the only item disables saving")
    func removeItem() async {
        let vm = makeVM(gateway: successGateway(), repository: MockMealRepository())
        await vm.start()
        #expect(vm.canSave)
        vm.remove(itemID: vm.items[0].id)
        #expect(!vm.canSave)
    }

    @Test("save() logs the meal and tracks the event")
    func saveLogs() async {
        let repo = MockMealRepository()
        let spy = AnalyticsSpy()
        let vm = makeVM(gateway: successGateway(), repository: repo, analytics: spy)
        await vm.start()
        await vm.save()
        #expect(vm.phase == .saved)
        #expect(await repo.loggedMeals().count == 1)
        #expect(await repo.loggedMeals().first?.mealType == .lunch)
        #expect(spy.events.contains(.mealLogged(source: .photoAI)))
    }

    @Test("A save failure surfaces an error phase")
    func saveFailure() async {
        let repo = MockMealRepository()
        await repo.setLogError(.server(code: 500))
        let vm = makeVM(gateway: successGateway(), repository: repo)
        await vm.start()
        await vm.save()
        if case .error = vm.phase {} else { Issue.record("Expected error phase, got \(vm.phase)") }
    }
}
