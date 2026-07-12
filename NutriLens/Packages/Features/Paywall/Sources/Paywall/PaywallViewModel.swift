import Foundation
import Observation
import CoreModels

/// Drives the paywall: loads offerings, handles purchase/restore, and reports entitlement.
@MainActor
@Observable
public final class PaywallViewModel {
    public enum Phase: Equatable {
        case loading
        case ready
        case purchasing
        case purchased
        case failed(String)
    }

    public private(set) var phase: Phase = .loading
    public private(set) var products: [PaywallProduct] = []
    public var selectedProductID: String?

    public let benefits = PremiumBenefit.allCases

    private let service: PaywallService
    private let analytics: Analytics?
    private let onEntitled: () -> Void

    public init(service: PaywallService,
                analytics: Analytics? = nil,
                onEntitled: @escaping () -> Void = {}) {
        self.service = service
        self.analytics = analytics
        self.onEntitled = onEntitled
    }

    public func load() async {
        phase = .loading
        analytics?.track(.paywallShown)
        do {
            products = try await service.products()
            selectedProductID = products.first(where: \.isBestValue)?.id ?? products.first?.id
            phase = .ready
        } catch {
            phase = .failed("Couldn't load subscription options.")
        }
    }

    public func purchaseSelected() async {
        guard let id = selectedProductID else { return }
        phase = .purchasing
        do {
            if try await service.purchase(id) {
                analytics?.track(.purchaseCompleted)
                phase = .purchased
                onEntitled()
            } else {
                phase = .failed("Purchase didn't complete.")
            }
        } catch {
            phase = .failed("Purchase failed. Please try again.")
        }
    }

    public func restore() async {
        phase = .purchasing
        do {
            if try await service.restore() {
                phase = .purchased
                onEntitled()
            } else {
                phase = .failed("No previous purchases found.")
            }
        } catch {
            phase = .failed("Restore failed. Please try again.")
        }
    }
}
