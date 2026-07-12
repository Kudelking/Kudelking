import Foundation

/// A single weight reading for charting.
public struct WeightSample: Sendable, Equatable, Identifiable {
    public var id: Date { date }
    public let date: Date
    public let kg: Double
    public init(date: Date, kg: Double) {
        self.date = date
        self.kg = kg
    }
}

/// A day's consumed calories for charting.
public struct CaloriePoint: Sendable, Equatable, Identifiable {
    public var id: Date { date }
    public let date: Date
    public let kcal: Double
    public init(date: Date, kcal: Double) {
        self.date = date
        self.kcal = kcal
    }
}

/// Source of historical metrics for the Progress screen. Backed by the local store + HealthKit.
public protocol MetricsProviding: Sendable {
    func weightSeries(days: Int) async throws -> [WeightSample]
    func calorieSeries(days: Int) async throws -> [CaloriePoint]
    func logWeight(_ kg: Double, date: Date) async throws
}

/// Pure summary statistics over a metrics window. No I/O — fully unit-tested.
public struct ProgressStats: Sendable, Equatable {
    public let currentWeightKg: Double?
    public let startWeightKg: Double?
    public let weightChangeKg: Double?
    public let bmi: Double?
    public let averageCalories: Double?

    public init(weights: [WeightSample], calories: [CaloriePoint], heightCm: Double) {
        let sorted = weights.sorted { $0.date < $1.date }
        currentWeightKg = sorted.last?.kg
        startWeightKg = sorted.first?.kg
        if let first = sorted.first?.kg, let last = sorted.last?.kg {
            weightChangeKg = last - first
        } else {
            weightChangeKg = nil
        }
        if let current = sorted.last?.kg, heightCm > 0 {
            bmi = NutritionMath.bmi(weightKg: current, heightCm: heightCm)
        } else {
            bmi = nil
        }
        averageCalories = calories.isEmpty
            ? nil
            : calories.reduce(0) { $0 + $1.kcal } / Double(calories.count)
    }

    /// Standard WHO BMI category for the current BMI.
    public var bmiCategory: String? {
        guard let bmi else { return nil }
        switch bmi {
        case ..<18.5: return "Underweight"
        case 18.5..<25: return "Normal"
        case 25..<30: return "Overweight"
        default: return "Obese"
        }
    }
}
