import SwiftUI
import Charts
import CoreModels
import CoreUI

/// The Progress screen: range picker, summary stat tiles, and weight/calorie charts.
public struct ProgressView: View {
    @State private var model: ProgressViewModel

    public init(model: ProgressViewModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        ScrollView {
            VStack(spacing: Theme.Spacing.lg) {
                rangePicker
                statTiles
                weightChart
                calorieChart
            }
            .padding(Theme.Spacing.lg)
        }
        .redacted(reason: model.isLoading ? .placeholder : [])
        .task { await model.load() }
    }

    private var rangePicker: some View {
        Picker("Range", selection: $model.range) {
            ForEach(ProgressViewModel.Range.allCases) { Text($0.label).tag($0) }
        }
        .pickerStyle(.segmented)
    }

    private var statTiles: some View {
        HStack(spacing: Theme.Spacing.md) {
            StatTile(systemImage: "scalemass",
                     value: model.stats.currentWeightKg.map { "\(Int($0)) kg" } ?? "—",
                     label: "Weight", tint: Theme.Colors.accent)
            StatTile(systemImage: "arrow.up.arrow.down",
                     value: model.stats.weightChangeKg.map { String(format: "%+.1f kg", $0) } ?? "—",
                     label: "Change", tint: Theme.Colors.carbs)
            StatTile(systemImage: "figure",
                     value: model.stats.bmi.map { String(format: "%.1f", $0) } ?? "—",
                     label: model.stats.bmiCategory ?? "BMI", tint: Theme.Colors.protein)
        }
    }

    private var weightChart: some View {
        chartCard("Weight") {
            Chart(model.weights) { sample in
                LineMark(x: .value("Date", sample.date), y: .value("kg", sample.kg))
                    .foregroundStyle(Theme.Colors.accent)
                    .interpolationMethod(.catmullRom)
                PointMark(x: .value("Date", sample.date), y: .value("kg", sample.kg))
                    .foregroundStyle(Theme.Colors.accent)
            }
            .chartYScale(domain: .automatic(includesZero: false))
            .frame(height: 180)
        }
    }

    private var calorieChart: some View {
        chartCard("Calories") {
            Chart(model.calories) { point in
                BarMark(x: .value("Date", point.date), y: .value("kcal", point.kcal))
                    .foregroundStyle(Theme.Colors.calories)
            }
            .frame(height: 180)
        }
    }

    private func chartCard(_ title: String, @ViewBuilder content: () -> some View) -> some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.sm) {
            Text(title).font(Theme.Typography.headline)
            if model.weights.isEmpty && model.calories.isEmpty {
                EmptyStateView(systemImage: "chart.xyaxis.line",
                               title: "Not enough data",
                               message: "Log meals and weight to see trends.")
                    .frame(height: 180)
            } else {
                content()
            }
        }
        .padding(Theme.Spacing.md)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
    }
}
