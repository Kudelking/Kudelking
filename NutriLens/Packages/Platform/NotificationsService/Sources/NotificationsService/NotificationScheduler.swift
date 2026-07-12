import Foundation

/// Scheduling boundary. Production wraps UNUserNotificationCenter; tests use a spy.
public protocol NotificationScheduler: Sendable {
    func requestAuthorization() async -> Bool
    /// Replace all previously scheduled NutriLens reminders with this set.
    func reschedule(_ reminders: [PlannedReminder]) async
    func cancelAll() async
}

#if canImport(UserNotifications)
import UserNotifications

/// Production scheduler over `UNUserNotificationCenter`. Cancels prior reminders and re-adds the
/// planned set so toggling settings never leaves stale notifications behind.
public struct SystemNotificationScheduler: NotificationScheduler {
    private let center: UNUserNotificationCenter

    public init(center: UNUserNotificationCenter = .current()) {
        self.center = center
    }

    public func requestAuthorization() async -> Bool {
        (try? await center.requestAuthorization(options: [.alert, .sound, .badge])) ?? false
    }

    public func reschedule(_ reminders: [PlannedReminder]) async {
        center.removeAllPendingNotificationRequests()
        for reminder in reminders {
            let content = UNMutableNotificationContent()
            content.title = reminder.title
            content.body = reminder.body
            content.sound = .default
            let trigger = UNCalendarNotificationTrigger(
                dateMatching: reminder.dateComponents, repeats: reminder.repeatsDaily)
            let request = UNNotificationRequest(
                identifier: reminder.id, content: content, trigger: trigger)
            try? await center.add(request)
        }
    }

    public func cancelAll() async {
        center.removeAllPendingNotificationRequests()
    }
}
#endif
