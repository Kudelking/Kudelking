import Foundation

/// A purchasable subscription option, surfaced to the paywall UI.
public struct PaywallProduct: Identifiable, Sendable, Equatable {
    public let id: String            // store product identifier
    public let title: String
    public let priceString: String   // localized, formatted by the store
    public let period: String        // e.g. "month", "year"
    public let isBestValue: Bool

    public init(id: String, title: String, priceString: String,
                period: String, isBestValue: Bool = false) {
        self.id = id
        self.title = title
        self.priceString = priceString
        self.period = period
        self.isBestValue = isBestValue
    }
}

/// Purchase boundary. The production implementation wraps RevenueCat (added in the App target);
/// tests and previews use `MockPaywallService`. Keeping this a protocol lets the paywall flow be
/// exercised without StoreKit or a network.
public protocol PaywallService: Sendable {
    func products() async throws -> [PaywallProduct]
    /// Returns the resulting premium entitlement state.
    func purchase(_ productID: String) async throws -> Bool
    func restore() async throws -> Bool
    func isPremium() async -> Bool
}

/// The premium features gated behind the paywall (rendered as a checklist).
public enum PremiumBenefit: String, CaseIterable, Sendable {
    case unlimitedScans = "Unlimited AI photo analyses"
    case advancedCoach = "Unlimited AI coach chat"
    case mealPlans = "Personalized meal plans"
    case weeklyReports = "Weekly progress reports"
    case noAds = "Ad-free experience"
}
