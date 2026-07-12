import Foundation
import Observation
import CoreModels

/// Persistence boundary for lightweight user preferences (reminders, units). Backed by
/// UserDefaults/SwiftData in the app; a mock is used in tests.
public protocol PreferencesStore: Sendable {
    func bool(_ key: String, default defaultValue: Bool) -> Bool
    func setBool(_ value: Bool, key: String)
    func string(_ key: String) -> String?
    func setString(_ value: String, key: String)
}

/// Backs the Settings screen: reminder toggles, unit system, premium state, and sign-out.
@MainActor
@Observable
public final class SettingsViewModel {
    public struct ReminderToggle: Identifiable, Equatable {
        public let kind: String       // ReminderKind raw value
        public let title: String
        public var isOn: Bool
        public var id: String { kind }
    }

    public var reminders: [ReminderToggle]
    public var unitSystem: UnitSystem
    public private(set) var isPremium: Bool

    private let preferences: PreferencesStore
    private let purchases: PurchaseService?
    private let onSignOut: () async -> Void
    private let onRemindersChanged: ([String: Bool]) -> Void

    public init(preferences: PreferencesStore,
                purchases: PurchaseService? = nil,
                initialUnit: UnitSystem = .metric,
                reminderKinds: [(kind: String, title: String)] = SettingsViewModel.defaultReminders,
                onSignOut: @escaping () async -> Void = {},
                onRemindersChanged: @escaping ([String: Bool]) -> Void = { _ in }) {
        self.preferences = preferences
        self.purchases = purchases
        self.onSignOut = onSignOut
        self.onRemindersChanged = onRemindersChanged
        self.unitSystem = UnitSystem(rawValue: preferences.string("unitSystem") ?? "")
            ?? initialUnit
        self.isPremium = false
        self.reminders = reminderKinds.map {
            ReminderToggle(kind: $0.kind, title: $0.title,
                           isOn: preferences.bool("reminder.\($0.kind)", default: false))
        }
    }

    public static let defaultReminders: [(kind: String, title: String)] = [
        ("breakfast", "Breakfast reminder"),
        ("lunch", "Lunch reminder"),
        ("dinner", "Dinner reminder"),
        ("water", "Water reminders"),
        ("weighIn", "Weekly weigh-in")
    ]

    public func setReminder(_ kind: String, on: Bool) {
        guard let index = reminders.firstIndex(where: { $0.kind == kind }) else { return }
        reminders[index].isOn = on
        preferences.setBool(on, key: "reminder.\(kind)")
        onRemindersChanged(remindersState)
    }

    public func setUnitSystem(_ system: UnitSystem) {
        unitSystem = system
        preferences.setString(system.rawValue, key: "unitSystem")
    }

    public var remindersState: [String: Bool] {
        Dictionary(uniqueKeysWithValues: reminders.map { ($0.kind, $0.isOn) })
    }

    public func refreshPremium() async {
        isPremium = await purchases?.isPremium() ?? false
    }

    public func signOut() async {
        await onSignOut()
    }
}
