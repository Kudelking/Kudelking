import Testing
import Foundation
@testable import Home
import CoreModels

@MainActor
@Suite("HomeViewModel")
struct HomeViewModelTests {

    private func makeVM(meals: [MealEntity] = [], water: Int = 0, steps: Int = 0)
        -> (HomeViewModel, StreamingMealRepository, InMemoryWaterStore) {
        let repo = StreamingMealRepository(meals: meals)
        let waterStore = InMemoryWaterStore()
        let vm = HomeViewModel(profile: sampleProfile(), mealRepository: repo,
                               waterStore: waterStore, healthKit: StubHealthKit(steps: steps))
        return (vm, repo, waterStore)
    }

    @Test("start() folds meals, water, and steps into the summary")
    func startBuildsSummary() async {
        let (vm, repo, _) = makeVM(meals: [mealWith(calories: 600)], steps: 8000)
        await vm.start()
        // Give the observation task a tick to deliver the initial snapshot.
        await Task.yield()
        #expect(vm.summary.consumedCalories == 600)
        #expect(vm.summary.steps == 8000)
        #expect(!vm.isLoading)
        vm.stop()
        await repo.finish()
    }

    @Test("Initial summary uses the profile's targets before data loads")
    func initialTargets() async {
        let (vm, _, _) = makeVM()
        #expect(vm.summary.targetCalories == sampleProfile().targetCalories)
        #expect(vm.summary.targetWaterMl == 2500)
    }

    @Test("addWater accumulates and updates the summary")
    func addWater() async {
        let (vm, repo, store) = makeVM()
        await vm.start()
        await vm.addWater(250)
        await vm.addWater(500)
        #expect(vm.summary.waterMl == 750)
        #expect(try! await store.water(on: .now) == 750)
        vm.stop()
        await repo.finish()
    }

    @Test("Logging a meal pushes through the stream into the summary")
    func reactiveUpdate() async {
        let (vm, repo, _) = makeVM()
        await vm.start()
        await Task.yield()
        #expect(vm.summary.consumedCalories == 0)

        try? await repo.log(mealWith(calories: 400))
        await Task.yield()
        #expect(vm.summary.consumedCalories == 400)
        vm.stop()
        await repo.finish()
    }
}
