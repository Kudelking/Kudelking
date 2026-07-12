import Testing
import Foundation
@testable import Progress
import CoreModels

actor MockMetricsProvider: MetricsProviding {
    var weights: [WeightSample]
    var calories: [CaloriePoint]
    var shouldThrow: Bool
    private(set) var loggedWeights: [Double] = []

    init(weights: [WeightSample] = [], calories: [CaloriePoint] = [], shouldThrow: Bool = false) {
        self.weights = weights
        self.calories = calories
        self.shouldThrow = shouldThrow
    }

    func weightSeries(days: Int) async throws -> [WeightSample] {
        if shouldThrow { throw AppError.offline }
        return weights
    }
    func calorieSeries(days: Int) async throws -> [CaloriePoint] {
        if shouldThrow { throw AppError.offline }
        return calories
    }
    func logWeight(_ kg: Double, date: Date) async throws {
        loggedWeights.append(kg)
        weights.append(WeightSample(date: date, kg: kg))
    }
    func loggedCount() -> Int { loggedWeights.count }
}

@MainActor
@Suite("ProgressViewModel")
struct ProgressViewModelTests {

    private func day(_ o: Int) -> Date { Calendar.current.date(byAdding: .day, value: o, to: .now)! }

    @Test("load populates series and derives stats")
    func load() async {
        let provider = MockMetricsProvider(
            weights: [WeightSample(date: day(-5), kg: 82), WeightSample(date: day(0), kg: 80)],
            calories: [CaloriePoint(date: day(0), kcal: 2000)])
        let vm = ProgressViewModel(provider: provider, heightCm: 180)
        await vm.load()

        #expect(vm.weights.count == 2)
        #expect(vm.stats.currentWeightKg == 80)
        #expect(vm.stats.weightChangeKg == -2)
        #expect(!vm.isLoading)
        #expect(!vm.loadFailed)
    }

    @Test("A provider failure sets loadFailed and keeps prior data")
    func failure() async {
        let provider = MockMetricsProvider(shouldThrow: true)
        let vm = ProgressViewModel(provider: provider, heightCm: 180)
        await vm.load()
        #expect(vm.loadFailed)
        #expect(vm.weights.isEmpty)
    }

    @Test("logWeight persists and reloads")
    func logWeight() async {
        let provider = MockMetricsProvider()
        let vm = ProgressViewModel(provider: provider, heightCm: 180)
        await vm.logWeight(79.5)
        #expect(await provider.loggedCount() == 1)
        #expect(vm.stats.currentWeightKg == 79.5)
    }

    @Test("Series are sorted by date ascending")
    func sorted() async {
        let provider = MockMetricsProvider(
            weights: [WeightSample(date: day(0), kg: 80), WeightSample(date: day(-9), kg: 85)])
        let vm = ProgressViewModel(provider: provider, heightCm: 180)
        await vm.load()
        #expect(vm.weights.first?.kg == 85)
        #expect(vm.weights.last?.kg == 80)
    }
}
