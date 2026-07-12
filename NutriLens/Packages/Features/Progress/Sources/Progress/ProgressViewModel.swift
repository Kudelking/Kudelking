import Foundation
import Observation
import CoreModels

/// Backs the Progress screen: loads weight and calorie series over a selectable window and derives
/// summary stats. Loading failures leave the previous data in place and surface a flag.
@MainActor
@Observable
public final class ProgressViewModel {
    public enum Range: Int, CaseIterable, Identifiable {
        case week = 7, month = 30, quarter = 90
        public var id: Int { rawValue }
        public var label: String {
            switch self {
            case .week: "7D"
            case .month: "30D"
            case .quarter: "90D"
            }
        }
    }

    public var range: Range = .month {
        didSet { Task { await load() } }
    }
    public private(set) var weights: [WeightSample] = []
    public private(set) var calories: [CaloriePoint] = []
    public private(set) var stats = ProgressStats(weights: [], calories: [], heightCm: 0)
    public private(set) var isLoading = true
    public private(set) var loadFailed = false

    private let provider: MetricsProviding
    private let heightCm: Double

    public init(provider: MetricsProviding, heightCm: Double) {
        self.provider = provider
        self.heightCm = heightCm
    }

    public func load() async {
        isLoading = true
        loadFailed = false
        do {
            async let weightSeries = provider.weightSeries(days: range.rawValue)
            async let calorieSeries = provider.calorieSeries(days: range.rawValue)
            let (weights, calories) = try await (weightSeries, calorieSeries)
            self.weights = weights.sorted { $0.date < $1.date }
            self.calories = calories.sorted { $0.date < $1.date }
            stats = ProgressStats(weights: self.weights, calories: self.calories, heightCm: heightCm)
        } catch {
            loadFailed = true
        }
        isLoading = false
    }

    public func logWeight(_ kg: Double) async {
        guard kg > 0 else { return }
        try? await provider.logWeight(kg, date: .now)
        await load()
    }
}
