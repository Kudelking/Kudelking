import SwiftUI
import CoreModels
import CoreUI

/// The daily dashboard: calorie ring, macro rings, water/steps/fiber tiles, and an AI tip.
public struct HomeView: View {
    @State private var model: HomeViewModel

    public init(model: HomeViewModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        ScrollView {
            VStack(spacing: Theme.Spacing.lg) {
                calorieCard
                macroRings
                tiles
                waterControls
                if let tip = model.aiTip { aiTipCard(tip) }
            }
            .padding(Theme.Spacing.lg)
        }
        .redacted(reason: model.isLoading ? .placeholder : [])
        .task { await model.start() }
        .onDisappear { model.stop() }
    }

    private var summary: DailySummary { model.summary }

    private var calorieCard: some View {
        VStack(spacing: Theme.Spacing.sm) {
            MacroRing(progress: summary.calorieProgress,
                      color: Theme.Colors.calories,
                      value: "\(Int(summary.consumedCalories.rounded()))",
                      label: "kcal", lineWidth: 14)
                .frame(width: 180, height: 180)
            Text("\(summary.remainingCalories) kcal remaining")
                .font(Theme.Typography.body)
                .foregroundStyle(Theme.Colors.secondaryText)
        }
    }

    private var macroRings: some View {
        HStack(spacing: Theme.Spacing.md) {
            ring(summary.macroProgress(\.protein, target: \.protein),
                 Theme.Colors.protein, summary.macros.protein, "Protein")
            ring(summary.macroProgress(\.carbs, target: \.carbs),
                 Theme.Colors.carbs, summary.macros.carbs, "Carbs")
            ring(summary.macroProgress(\.fat, target: \.fat),
                 Theme.Colors.fat, summary.macros.fat, "Fat")
        }
    }

    private func ring(_ progress: Double, _ color: Color, _ grams: Double, _ label: String) -> some View {
        MacroRing(progress: progress, color: color,
                  value: "\(Int(grams.rounded()))g", label: label)
            .frame(height: 100)
    }

    private var tiles: some View {
        HStack(spacing: Theme.Spacing.md) {
            StatTile(systemImage: "drop.fill",
                     value: "\(summary.waterMl) ml", label: "Water", tint: Theme.Colors.accent)
            StatTile(systemImage: "figure.walk",
                     value: "\(summary.steps)", label: "Steps", tint: Theme.Colors.carbs)
            StatTile(systemImage: "leaf.fill",
                     value: "\(Int(summary.fiber.rounded()))g", label: "Fiber", tint: Theme.Colors.protein)
        }
    }

    private var waterControls: some View {
        HStack {
            Text("Add water").font(Theme.Typography.headline)
            Spacer()
            ForEach([250, 500], id: \.self) { amount in
                Button("+\(amount)") { Task { await model.addWater(amount) } }
                    .buttonStyle(.bordered)
            }
        }
    }

    private func aiTipCard(_ tip: String) -> some View {
        HStack(alignment: .top, spacing: Theme.Spacing.sm) {
            Image(systemName: "sparkles").foregroundStyle(Theme.Colors.accent)
            Text(tip).font(Theme.Typography.body)
        }
        .padding(Theme.Spacing.md)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
    }
}
