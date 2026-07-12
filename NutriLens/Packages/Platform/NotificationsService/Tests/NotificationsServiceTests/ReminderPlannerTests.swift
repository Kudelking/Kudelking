import Testing
import Foundation
@testable import NotificationsService

@Suite("ReminderPlanner")
struct ReminderPlannerTests {

    @Test("Disabled settings produce no reminders")
    func disabled() {
        let plan = ReminderPlanner.plan([
            ReminderSetting(kind: .breakfast, isEnabled: false, hour: 8),
            ReminderSetting(kind: .lunch, isEnabled: false, hour: 13)
        ])
        #expect(plan.isEmpty)
    }

    @Test("A meal reminder repeats daily at the set time")
    func mealReminder() {
        let plan = ReminderPlanner.plan([
            ReminderSetting(kind: .breakfast, isEnabled: true, hour: 8, minute: 30)
        ])
        #expect(plan.count == 1)
        let reminder = plan[0]
        #expect(reminder.kind == .breakfast)
        #expect(reminder.repeatsDaily)
        #expect(reminder.dateComponents.hour == 8)
        #expect(reminder.dateComponents.minute == 30)
    }

    @Test("Weigh-in is weekly with a weekday component")
    func weighIn() {
        let plan = ReminderPlanner.plan([
            ReminderSetting(kind: .weighIn, isEnabled: true, hour: 7)
        ], weighInWeekday: 2)
        #expect(plan.count == 1)
        #expect(!plan[0].repeatsDaily)
        #expect(plan[0].dateComponents.weekday == 2)
    }

    @Test("Water expands into several spaced reminders within the active window")
    func water() {
        let plan = ReminderPlanner.plan([
            ReminderSetting(kind: .water, isEnabled: true, hour: 9)
        ])
        let water = plan.filter { $0.kind == .water }
        #expect(water.count > 1)
        #expect(water.allSatisfy { $0.repeatsDaily })
        // First at the start hour, none past the end hour.
        #expect(water.first?.dateComponents.hour == 9)
        #expect(water.allSatisfy { ($0.dateComponents.hour ?? 0) <= ReminderPlanner.waterEndHour })
        // Reminder IDs are unique so scheduling doesn't overwrite.
        #expect(Set(water.map(\.id)).count == water.count)
    }

    @Test("Mixed settings plan the union of all enabled kinds")
    func mixed() {
        let plan = ReminderPlanner.plan([
            ReminderSetting(kind: .breakfast, isEnabled: true, hour: 8),
            ReminderSetting(kind: .dinner, isEnabled: true, hour: 19),
            ReminderSetting(kind: .water, isEnabled: true, hour: 10),
            ReminderSetting(kind: .weighIn, isEnabled: false, hour: 7)
        ])
        #expect(plan.contains { $0.kind == .breakfast })
        #expect(plan.contains { $0.kind == .dinner })
        #expect(plan.contains { $0.kind == .water })
        #expect(!plan.contains { $0.kind == .weighIn })   // disabled
    }
}
