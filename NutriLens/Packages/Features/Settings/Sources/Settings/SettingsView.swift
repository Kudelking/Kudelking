import SwiftUI
import CoreModels
import CoreUI

/// The Settings screen: units, reminders, subscription, and account.
public struct SettingsView: View {
    @State private var model: SettingsViewModel
    private let onManageSubscription: () -> Void

    public init(model: SettingsViewModel, onManageSubscription: @escaping () -> Void = {}) {
        _model = State(initialValue: model)
        self.onManageSubscription = onManageSubscription
    }

    public var body: some View {
        Form {
            Section("Units") {
                Picker("Measurement", selection: unitBinding) {
                    Text("Metric").tag(UnitSystem.metric)
                    Text("Imperial").tag(UnitSystem.imperial)
                }
                .pickerStyle(.segmented)
            }

            Section("Reminders") {
                ForEach(model.reminders) { reminder in
                    Toggle(reminder.title, isOn: reminderBinding(reminder.kind, reminder.isOn))
                }
            }

            Section("Subscription") {
                LabeledContent("Status", value: model.isPremium ? "Premium" : "Free")
                if !model.isPremium {
                    Button("Upgrade to Premium", action: onManageSubscription)
                }
            }

            Section {
                Button("Sign out", role: .destructive) { Task { await model.signOut() } }
            }
        }
        .task { await model.refreshPremium() }
    }

    private var unitBinding: Binding<UnitSystem> {
        Binding(get: { model.unitSystem }, set: { model.setUnitSystem($0) })
    }

    private func reminderBinding(_ kind: String, _ isOn: Bool) -> Binding<Bool> {
        Binding(get: { isOn }, set: { model.setReminder(kind, on: $0) })
    }
}
