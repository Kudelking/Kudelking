import Foundation
import CoreModels

/// Concrete `WidgetSnapshotStore` backed by a shared App Group so the app writes and the widget /
/// Watch read the same daily snapshot. The app group id must match the entitlement on both targets.
public struct AppGroupSnapshotStore: WidgetSnapshotStore {
    public static let appGroupID = "group.com.nutrilens.app"
    private static let key = "widgetSnapshot"

    private let defaults: UserDefaults?

    public init(appGroupID: String = AppGroupSnapshotStore.appGroupID) {
        self.defaults = UserDefaults(suiteName: appGroupID)
    }

    public func read() -> WidgetSnapshot? {
        guard let data = defaults?.data(forKey: Self.key) else { return nil }
        return try? JSONDecoder().decode(WidgetSnapshot.self, from: data)
    }

    public func write(_ snapshot: WidgetSnapshot) {
        guard let data = try? JSONEncoder().encode(snapshot) else { return }
        defaults?.set(data, forKey: Self.key)
    }
}
