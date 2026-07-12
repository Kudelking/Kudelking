import Testing
import Foundation
@testable import Home
import CoreModels

@MainActor
@Suite("DiaryViewModel")
struct DiaryViewModelTests {

    @Test("Groups meals by type and computes per-section calories")
    func grouping() async {
        let repo = StreamingMealRepository(meals: [
            mealWith(calories: 300, type: .breakfast),
            mealWith(calories: 500, type: .lunch),
            mealWith(calories: 200, type: .lunch)
        ])
        let vm = DiaryViewModel(repository: repo)
        await vm.start()
        await Task.yield()

        #expect(!vm.isEmpty)
        let lunch = vm.sections.first { $0.type == .lunch }
        #expect(lunch?.meals.count == 2)
        #expect(lunch?.calories == 700)
        let breakfast = vm.sections.first { $0.type == .breakfast }
        #expect(breakfast?.calories == 300)
        vm.stop()
        await repo.finish()
    }

    @Test("Empty repository reports empty")
    func empty() async {
        let repo = StreamingMealRepository()
        let vm = DiaryViewModel(repository: repo)
        await vm.start()
        await Task.yield()
        #expect(vm.isEmpty)
        vm.stop()
        await repo.finish()
    }

    @Test("Deleting a meal removes it from its section")
    func delete() async {
        let meal = mealWith(calories: 300, type: .dinner)
        let repo = StreamingMealRepository(meals: [meal])
        let vm = DiaryViewModel(repository: repo)
        await vm.start()
        await Task.yield()
        #expect(vm.sections.first { $0.type == .dinner }?.meals.count == 1)

        await vm.delete(meal)
        await Task.yield()
        #expect(vm.isEmpty)
        vm.stop()
        await repo.finish()
    }
}
