import Testing
import Foundation
@testable import Settings
import CoreModels

final class InMemoryPreferences: PreferencesStore, @unchecked Sendable {
    private var bools: [String: Bool] = [:]
    private var strings: [String: String] = [:]
    func bool(_ key: String, default defaultValue: Bool) -> Bool { bools[key] ?? defaultValue }
    func setBool(_ value: Bool, key: String) { bools[key] = value }
    func string(_ key: String) -> String? { strings[key] }
    func setString(_ value: String, key: String) { strings[key] = value }
}

struct StubPurchases: PurchaseService {
    var premium: Bool
    func isPremium() async -> Bool { premium }
    func restore() async throws {}
}

@MainActor
@Suite("SettingsViewModel")
struct SettingsViewModelTests {

    @Test("Reminders default off and persist when toggled")
    func toggleReminder() {
        let prefs = InMemoryPreferences()
        var pushed: [String: Bool] = [:]
        let vm = SettingsViewModel(preferences: prefs,
                                   onRemindersChanged: { pushed = $0 })
        #expect(vm.reminders.allSatisfy { !$0.isOn })

        vm.setReminder("breakfast", on: true)
        #expect(vm.reminders.first { $0.kind == "breakfast" }?.isOn == true)
        #expect(prefs.bool("reminder.breakfast", default: false))
        #expect(pushed["breakfast"] == true)
    }

    @Test("Reminder state is restored from preferences on init")
    func restoresState() {
        let prefs = InMemoryPreferences()
        prefs.setBool(true, key: "reminder.water")
        let vm = SettingsViewModel(preferences: prefs)
        #expect(vm.reminders.first { $0.kind == "water" }?.isOn == true)
    }

    @Test("Unit system persists")
    func unitSystem() {
        let prefs = InMemoryPreferences()
        let vm = SettingsViewModel(preferences: prefs)
        vm.setUnitSystem(.imperial)
        #expect(vm.unitSystem == .imperial)
        #expect(prefs.string("unitSystem") == "imperial")

        // A new VM restores the saved unit.
        let vm2 = SettingsViewModel(preferences: prefs)
        #expect(vm2.unitSystem == .imperial)
    }

    @Test("refreshPremium reflects the purchase service")
    func premium() async {
        let vm = SettingsViewModel(preferences: InMemoryPreferences(),
                                   purchases: StubPurchases(premium: true))
        await vm.refreshPremium()
        #expect(vm.isPremium)
    }

    @Test("signOut invokes the callback")
    func signOut() async {
        var didSignOut = false
        let vm = SettingsViewModel(preferences: InMemoryPreferences(),
                                   onSignOut: { didSignOut = true })
        await vm.signOut()
        #expect(didSignOut)
    }
}
