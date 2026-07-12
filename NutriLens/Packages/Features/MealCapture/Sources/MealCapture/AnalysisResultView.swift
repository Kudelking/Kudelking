import SwiftUI
import CoreModels
import CoreUI

/// The analysis-result screen. Renders every phase of `MealAnalysisViewModel` and lets the user
/// edit portions, remove items, pick a meal type, and save.
public struct AnalysisResultView: View {
    @State private var model: MealAnalysisViewModel
    private let onRetake: () -> Void
    private let onDone: () -> Void

    public init(model: MealAnalysisViewModel,
                onRetake: @escaping () -> Void = {},
                onDone: @escaping () -> Void = {}) {
        _model = State(initialValue: model)
        self.onRetake = onRetake
        self.onDone = onDone
    }

    public var body: some View {
        Group {
            switch model.phase {
            case .analyzing:
                LoadingView("Analyzing your meal…")
            case .review, .manualEntry:
                reviewList
            case .notFood:
                EmptyStateView(systemImage: "camera.metering.none",
                               title: "No food detected",
                               message: "Point the camera at your meal and try again.",
                               actionTitle: "Retake", action: onRetake)
            case let .error(message):
                ErrorStateView(message: message) { Task { await model.save() } }
            case .saved:
                EmptyStateView(systemImage: "checkmark.circle.fill",
                               title: "Logged!",
                               message: "Your meal has been added to today.",
                               actionTitle: "Done", action: onDone)
            }
        }
        .task { await model.start() }
    }

    private var reviewList: some View {
        VStack(spacing: 0) {
            if case let .manualEntry(_, reason) = model.phase {
                banner(for: reason)
            }
            List {
                Section {
                    Picker("Meal", selection: $model.mealType) {
                        ForEach(MealType.allCases, id: \.self) { Text($0.label).tag($0) }
                    }
                    .pickerStyle(.segmented)
                }
                Section("Detected") {
                    ForEach(model.items) { item in
                        FoodItemRow(item: item) { grams in
                            model.updatePortion(itemID: item.id, grams: grams)
                        }
                    }
                    .onDelete { indexSet in
                        indexSet.map { model.items[$0].id }.forEach(model.remove)
                    }
                }
                Section {
                    LabeledContent("Total") {
                        Text("\(Int(model.totalCalories.rounded())) kcal")
                            .font(Theme.Typography.headline)
                            .foregroundStyle(Theme.Colors.calories)
                    }
                    if model.servedFromCache {
                        Label("Served from cache", systemImage: "bolt.fill")
                            .font(Theme.Typography.caption)
                            .foregroundStyle(Theme.Colors.secondaryText)
                    }
                }
            }
            saveBar
        }
    }

    private func banner(for reason: AppError) -> some View {
        let text = reason == .quotaExceeded
            ? "Daily AI limit reached — add items manually."
            : "AI couldn't analyze this photo — add items manually."
        return Text(text)
            .font(Theme.Typography.caption)
            .foregroundStyle(Theme.Colors.warning)
            .frame(maxWidth: .infinity)
            .padding(Theme.Spacing.sm)
            .background(Theme.Colors.warning.opacity(0.12))
    }

    private var saveBar: some View {
        Button {
            Task { await model.save() }
        } label: {
            Text("Save meal").frame(maxWidth: .infinity, minHeight: 50)
        }
        .buttonStyle(.borderedProminent)
        .disabled(!model.canSave)
        .padding(Theme.Spacing.md)
    }
}

/// A single detected food with an inline portion stepper.
private struct FoodItemRow: View {
    let item: FoodItemEntity
    let onPortionChange: (Double) -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.xs) {
            HStack {
                Text(item.name).font(Theme.Typography.body)
                Spacer()
                Text("\(Int(item.nutrition.calories.rounded())) kcal")
                    .foregroundStyle(Theme.Colors.secondaryText)
            }
            HStack(spacing: Theme.Spacing.md) {
                macro("P", item.nutrition.macros.protein, Theme.Colors.protein)
                macro("C", item.nutrition.macros.carbs, Theme.Colors.carbs)
                macro("F", item.nutrition.macros.fat, Theme.Colors.fat)
                Spacer()
                Stepper("\(Int(item.portionGrams)) g",
                        onIncrement: { onPortionChange(item.portionGrams + 10) },
                        onDecrement: { onPortionChange(max(10, item.portionGrams - 10)) })
                    .labelsHidden()
                Text("\(Int(item.portionGrams)) g").monospacedDigit()
            }
            .font(Theme.Typography.caption)
        }
        .padding(.vertical, Theme.Spacing.xs)
    }

    private func macro(_ label: String, _ grams: Double, _ color: Color) -> some View {
        Text("\(label) \(Int(grams.rounded()))g").foregroundStyle(color)
    }
}
