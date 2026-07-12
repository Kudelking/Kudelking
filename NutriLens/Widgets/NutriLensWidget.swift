import WidgetKit
import SwiftUI
import CoreModels
import CoreUI

/// Timeline entry wrapping the shared daily snapshot.
struct NutriEntry: TimelineEntry {
    let date: Date
    let snapshot: WidgetSnapshot
}

/// Reads the App Group snapshot and refreshes hourly (and on app writes via reloadTimelines).
struct NutriProvider: TimelineProvider {
    private let store = AppGroupSnapshotStore()

    func placeholder(in context: Context) -> NutriEntry {
        NutriEntry(date: .now, snapshot: .placeholder)
    }

    func getSnapshot(in context: Context, completion: @escaping (NutriEntry) -> Void) {
        completion(NutriEntry(date: .now, snapshot: store.read() ?? .placeholder))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<NutriEntry>) -> Void) {
        let entry = NutriEntry(date: .now, snapshot: store.read() ?? .placeholder)
        let next = Calendar.current.date(byAdding: .hour, value: 1, to: .now) ?? .now
        completion(Timeline(entries: [entry], policy: .after(next)))
    }
}

struct NutriLensWidgetView: View {
    let entry: NutriEntry

    var body: some View {
        let s = entry.snapshot
        VStack(alignment: .leading, spacing: Theme.Spacing.sm) {
            HStack {
                Image(systemName: "fork.knife.circle.fill").foregroundStyle(Theme.Colors.accent)
                Text("Today").font(Theme.Typography.caption)
                    .foregroundStyle(Theme.Colors.secondaryText)
            }
            Text("\(s.remainingCalories)")
                .font(Theme.Typography.metric)
            Text("kcal left").font(Theme.Typography.caption)
                .foregroundStyle(Theme.Colors.secondaryText)
            ProgressView(value: s.calorieProgress).tint(Theme.Colors.accent)
        }
        .padding()
        .containerBackground(Theme.Colors.background, for: .widget)
    }
}

struct NutriLensWidget: Widget {
    let kind = "NutriLensWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: NutriProvider()) { entry in
            NutriLensWidgetView(entry: entry)
        }
        .configurationDisplayName("Calories")
        .description("Calories remaining today.")
        .supportedFamilies([.systemSmall, .accessoryRectangular])
    }
}

@main
struct NutriLensWidgetBundle: WidgetBundle {
    var body: some Widget { NutriLensWidget() }
}
