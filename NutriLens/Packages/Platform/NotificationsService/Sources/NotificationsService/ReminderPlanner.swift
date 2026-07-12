import Foundation

public enum ReminderKind: String, Sendable, CaseIterable {
    case breakfast, lunch, dinner, water, weighIn, aiTip
}

/// A user's preference for one reminder category.
public struct ReminderSetting: Sendable, Equatable {
    public let kind: ReminderKind
    public var isEnabled: Bool
    public var hour: Int
    public var minute: Int

    public init(kind: ReminderKind, isEnabled: Bool, hour: Int, minute: Int = 0) {
        self.kind = kind
        self.isEnabled = isEnabled
        self.hour = hour
        self.minute = minute
    }
}

/// A concrete, schedulable reminder. `dateComponents` drives a calendar trigger; `repeatsDaily`
/// distinguishes daily meal/water reminders from the weekly weigh-in.
public struct PlannedReminder: Sendable, Equatable, Identifiable {
    public let id: String
    public let kind: ReminderKind
    public let title: String
    public let body: String
    public let dateComponents: DateComponents
    public let repeatsDaily: Bool

    public init(id: String, kind: ReminderKind, title: String, body: String,
                dateComponents: DateComponents, repeatsDaily: Bool) {
        self.id = id
        self.kind = kind
        self.title = title
        self.body = body
        self.dateComponents = dateComponents
        self.repeatsDaily = repeatsDaily
    }
}

/// Pure planner: turns reminder settings into concrete scheduled reminders. No I/O — unit-tested.
/// Water is expanded into several evenly-spaced reminders across the active day.
public enum ReminderPlanner {
    /// Number of water reminders spread from the water setting's hour to 21:00.
    public static let waterReminderCount = 6
    public static let waterEndHour = 21

    public static func plan(_ settings: [ReminderSetting],
                            weighInWeekday: Int = 2) -> [PlannedReminder] {
        settings.filter(\.isEnabled).flatMap { setting -> [PlannedReminder] in
            switch setting.kind {
            case .water:
                return waterReminders(from: setting)
            case .weighIn:
                return [weighIn(setting, weekday: weighInWeekday)]
            default:
                return [dailyMeal(setting)]
            }
        }
    }

    private static func dailyMeal(_ s: ReminderSetting) -> PlannedReminder {
        let copy = content(for: s.kind)
        return PlannedReminder(
            id: s.kind.rawValue,
            kind: s.kind,
            title: copy.title,
            body: copy.body,
            dateComponents: DateComponents(hour: s.hour, minute: s.minute),
            repeatsDaily: true)
    }

    private static func weighIn(_ s: ReminderSetting, weekday: Int) -> PlannedReminder {
        PlannedReminder(
            id: s.kind.rawValue,
            kind: s.kind,
            title: "Weekly weigh-in",
            body: "Step on the scale to track your progress.",
            dateComponents: DateComponents(hour: s.hour, minute: s.minute, weekday: weekday),
            repeatsDaily: false)
    }

    private static func waterReminders(from s: ReminderSetting) -> [PlannedReminder] {
        let start = s.hour
        let span = max(1, waterEndHour - start)
        let step = max(1, span / max(1, waterReminderCount - 1))
        return (0..<waterReminderCount).compactMap { i in
            let hour = start + i * step
            guard hour <= waterEndHour else { return nil }
            return PlannedReminder(
                id: "water-\(i)",
                kind: .water,
                title: "Time to hydrate 💧",
                body: "Log a glass of water to hit your goal.",
                dateComponents: DateComponents(hour: hour, minute: s.minute),
                repeatsDaily: true)
        }
    }

    private static func content(for kind: ReminderKind) -> (title: String, body: String) {
        switch kind {
        case .breakfast: ("Breakfast time 🍳", "Log your breakfast to start the day right.")
        case .lunch: ("Lunch time 🥗", "Don't forget to log your lunch.")
        case .dinner: ("Dinner time 🍽️", "Log your dinner before you wind down.")
        case .aiTip: ("Your daily tip ✨", "Tap to see today's coaching tip.")
        default: ("Reminder", "Open NutriLens.")
        }
    }
}
