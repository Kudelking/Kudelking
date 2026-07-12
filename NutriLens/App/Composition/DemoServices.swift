import Foundation
import CoreModels
import Authentication
import Settings
import Paywall

// Lightweight, SDK-free service implementations so the app assembles and runs in a "dev/demo"
// mode without Firebase / RevenueCat / a live backend. Swap these for the real adapters
// (FirebaseAuthenticationService, RevenueCat, AIGatewayClient → your BFF URL) for production.

/// No-op analytics for dev builds.
struct NoopAnalytics: Analytics {
    func track(_ event: AnalyticsEvent) {}
}

/// Demo auth that "signs in" a local user for any provider/credentials.
actor DemoAuthenticationService: AuthenticationService {
    private let user = AuthenticatedUser(id: "demo-user", email: "demo@nutrilens.app",
                                         displayName: "Demo", provider: .email,
                                         idToken: "demo-token")
    func restoreSession() async throws -> AuthenticatedUser? { nil }
    func signInWithApple(_ credential: AppleCredential) async throws -> AuthenticatedUser { user }
    func signInWithGoogle(_ credential: GoogleCredential) async throws -> AuthenticatedUser { user }
    func signInWithEmail(email: String, password: String) async throws -> AuthenticatedUser { user }
    func registerWithEmail(email: String, password: String) async throws -> AuthenticatedUser { user }
    func signOut() async throws {}
}

/// Water logging persisted in UserDefaults (dev). Production uses a SwiftData-backed store.
struct UserDefaultsWaterStore: WaterStore {
    private let defaults = UserDefaults.standard
    private func key(_ day: Date) -> String {
        "water." + ISO8601DateFormatter().string(from: Calendar.current.startOfDay(for: day))
    }
    func water(on day: Date) async throws -> Int { defaults.integer(forKey: key(day)) }
    @discardableResult
    func addWater(_ ml: Int, on day: Date) async throws -> Int {
        let total = defaults.integer(forKey: key(day)) + ml
        defaults.set(total, forKey: key(day))
        return total
    }
}

/// Preferences over UserDefaults (used by Settings).
struct UserDefaultsPreferences: PreferencesStore {
    private let defaults = UserDefaults.standard
    func bool(_ key: String, default defaultValue: Bool) -> Bool {
        defaults.object(forKey: key) == nil ? defaultValue : defaults.bool(forKey: key)
    }
    func setBool(_ value: Bool, key: String) { defaults.set(value, forKey: key) }
    func string(_ key: String) -> String? { defaults.string(forKey: key) }
    func setString(_ value: String, key: String) { defaults.set(value, forKey: key) }
}

/// Free-tier purchase stub.
struct StubPurchaseService: PurchaseService {
    func isPremium() async -> Bool { false }
    func restore() async throws {}
}

/// Demo paywall offering two plans; "purchase" always succeeds (dev only).
struct DemoPaywallService: PaywallService {
    func products() async throws -> [PaywallProduct] {
        [
            PaywallProduct(id: "monthly", title: "Monthly", priceString: "$4.99", period: "month"),
            PaywallProduct(id: "yearly", title: "Yearly", priceString: "$39.99", period: "year",
                           isBestValue: true)
        ]
    }
    func purchase(_ productID: String) async throws -> Bool { true }
    func restore() async throws -> Bool { false }
    func isPremium() async -> Bool { false }
}

/// Persists the onboarding profile as JSON in UserDefaults (dev).
struct ProfileStore {
    private let defaults = UserDefaults.standard
    private let key = "userProfile"
    func load() -> UserProfileEntity? {
        guard let data = defaults.data(forKey: key) else { return nil }
        return try? JSONDecoder().decode(UserProfileEntity.self, from: data)
    }
    func save(_ profile: UserProfileEntity) {
        if let data = try? JSONEncoder().encode(profile) { defaults.set(data, forKey: key) }
    }
    func clear() { defaults.removeObject(forKey: key) }
}
