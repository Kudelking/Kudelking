import Testing
import Foundation
@testable import CoreModels

@Suite("ProgressStats")
struct ProgressStatsTests {

    private func day(_ offset: Int) -> Date {
        Calendar.current.date(byAdding: .day, value: offset, to: .now)!
    }

    @Test("Computes weight change, current weight, BMI, and average calories")
    func computes() {
        let weights = [WeightSample(date: day(-7), kg: 82),
                       WeightSample(date: day(-3), kg: 81),
                       WeightSample(date: day(0), kg: 80)]
        let calories = [CaloriePoint(date: day(-1), kcal: 2000),
                        CaloriePoint(date: day(0), kcal: 2200)]
        let stats = ProgressStats(weights: weights, calories: calories, heightCm: 180)

        #expect(stats.currentWeightKg == 80)
        #expect(stats.startWeightKg == 82)
        #expect(stats.weightChangeKg == -2)
        #expect(abs((stats.bmi ?? 0) - 24.691) < 0.01)
        #expect(stats.averageCalories == 2100)
        #expect(stats.bmiCategory == "Normal")
    }

    @Test("Handles empty inputs without crashing")
    func empty() {
        let stats = ProgressStats(weights: [], calories: [], heightCm: 180)
        #expect(stats.currentWeightKg == nil)
        #expect(stats.weightChangeKg == nil)
        #expect(stats.bmi == nil)
        #expect(stats.averageCalories == nil)
        #expect(stats.bmiCategory == nil)
    }

    @Test("Orders unsorted samples before computing change")
    func unsorted() {
        let weights = [WeightSample(date: day(0), kg: 78),
                       WeightSample(date: day(-10), kg: 84)]
        let stats = ProgressStats(weights: weights, calories: [], heightCm: 175)
        #expect(stats.startWeightKg == 84)
        #expect(stats.currentWeightKg == 78)
        #expect(stats.weightChangeKg == -6)
    }

    @Test("BMI categories map to WHO ranges")
    func categories() {
        func category(weight: Double) -> String? {
            ProgressStats(weights: [WeightSample(date: .now, kg: weight)],
                          calories: [], heightCm: 180).bmiCategory
        }
        #expect(category(weight: 55) == "Underweight")   // BMI ~17
        #expect(category(weight: 75) == "Normal")        // ~23
        #expect(category(weight: 90) == "Overweight")    // ~27.8
        #expect(category(weight: 105) == "Obese")        // ~32.4
    }
}
