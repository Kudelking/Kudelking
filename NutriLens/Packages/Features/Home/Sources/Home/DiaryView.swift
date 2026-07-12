import SwiftUI
import CoreModels
import CoreUI

/// The Diary screen: today's meals grouped by meal type with swipe-to-delete.
public struct DiaryView: View {
    @State private var model: DiaryViewModel

    public init(model: DiaryViewModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        Group {
            if model.isLoading {
                LoadingView("Loading your day…")
            } else if model.isEmpty {
                EmptyStateView(systemImage: "fork.knife",
                               title: "No meals yet",
                               message: "Snap a photo of your food to start logging.")
            } else {
                list
            }
        }
        .task { await model.start() }
        .onDisappear { model.stop() }
    }

    private var list: some View {
        List {
            ForEach(model.sections) { section in
                if !section.meals.isEmpty {
                    Section {
                        ForEach(section.meals) { meal in
                            MealRow(meal: meal)
                                .swipeActions {
                                    Button("Delete", role: .destructive) {
                                        Task { await model.delete(meal) }
                                    }
                                }
                        }
                    } header: {
                        HStack {
                            Text(section.type.label)
                            Spacer()
                            Text("\(Int(section.calories.rounded())) kcal")
                                .foregroundStyle(Theme.Colors.secondaryText)
                        }
                    }
                }
            }
        }
    }
}

private struct MealRow: View {
    let meal: MealEntity

    var body: some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.xs) {
            ForEach(meal.items) { item in
                HStack {
                    Text(item.name).font(Theme.Typography.body)
                    Spacer()
                    Text("\(Int(item.nutrition.calories.rounded())) kcal")
                        .font(Theme.Typography.caption)
                        .foregroundStyle(Theme.Colors.secondaryText)
                }
            }
        }
        .padding(.vertical, Theme.Spacing.xs)
    }
}
