import SwiftUI
import CoreModels
import CoreUI

/// watchOS glance: today's calorie ring + macros from the shared App Group snapshot.
/// A quick "log water" action writes back through the shared store.
struct WatchHomeView: View {
    @State private var snapshot: WidgetSnapshot = .placeholder
    private let store = AppGroupSnapshotStore()

    var body: some View {
        ScrollView {
            VStack(spacing: Theme.Spacing.sm) {
                MacroRing(progress: snapshot.calorieProgress,
                          color: Theme.Colors.calories,
                          value: "\(snapshot.remainingCalories)",
                          label: "kcal left", lineWidth: 8)
                    .frame(width: 110, height: 110)
                HStack(spacing: Theme.Spacing.sm) {
                    macro("P", snapshot.protein, Theme.Colors.protein)
                    macro("C", snapshot.carbs, Theme.Colors.carbs)
                    macro("F", snapshot.fat, Theme.Colors.fat)
                }
                Label("\(snapshot.waterMl) ml", systemImage: "drop.fill")
                    .font(Theme.Typography.caption)
                    .foregroundStyle(Theme.Colors.accent)
            }
            .padding(Theme.Spacing.sm)
        }
        .onAppear { snapshot = store.read() ?? .placeholder }
    }

    private func macro(_ label: String, _ grams: Int, _ color: Color) -> some View {
        VStack {
            Text("\(grams)g").font(Theme.Typography.caption).foregroundStyle(color)
            Text(label).font(.system(size: 10)).foregroundStyle(Theme.Colors.secondaryText)
        }
    }
}

@main
struct NutriLensWatchApp: App {
    var body: some Scene {
        WindowGroup { WatchHomeView() }
    }
}
