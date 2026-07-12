import Testing
import Foundation
@testable import Paywall
import CoreModels

actor MockPaywallService: PaywallService {
    var offerings: [PaywallProduct]
    var purchaseResult: Result<Bool, Error>
    var restoreResult: Result<Bool, Error>
    var premium = false

    init(offerings: [PaywallProduct] = MockPaywallService.sample,
         purchaseResult: Result<Bool, Error> = .success(true),
         restoreResult: Result<Bool, Error> = .success(true)) {
        self.offerings = offerings
        self.purchaseResult = purchaseResult
        self.restoreResult = restoreResult
    }

    static let sample = [
        PaywallProduct(id: "monthly", title: "Monthly", priceString: "$4.99", period: "month"),
        PaywallProduct(id: "yearly", title: "Yearly", priceString: "$39.99", period: "year", isBestValue: true)
    ]

    func products() async throws -> [PaywallProduct] { offerings }
    func purchase(_ productID: String) async throws -> Bool {
        let result = try purchaseResult.get(); premium = result; return result
    }
    func restore() async throws -> Bool { try restoreResult.get() }
    func isPremium() async -> Bool { premium }
}

final class AnalyticsSpy: Analytics, @unchecked Sendable {
    private(set) var events: [AnalyticsEvent] = []
    func track(_ event: AnalyticsEvent) { events.append(event) }
}

private struct StubError: Error {}

@MainActor
@Suite("PaywallViewModel")
struct PaywallViewModelTests {

    @Test("load fetches products, preselects best value, and tracks paywallShown")
    func load() async {
        let spy = AnalyticsSpy()
        let vm = PaywallViewModel(service: MockPaywallService(), analytics: spy)
        await vm.load()
        #expect(vm.phase == .ready)
        #expect(vm.products.count == 2)
        #expect(vm.selectedProductID == "yearly")          // best value preselected
        #expect(spy.events.contains(.paywallShown))
    }

    @Test("Successful purchase entitles and fires callback + analytics")
    func purchase() async {
        var entitled = false
        let spy = AnalyticsSpy()
        let vm = PaywallViewModel(service: MockPaywallService(), analytics: spy) { entitled = true }
        await vm.load()
        await vm.purchaseSelected()
        #expect(vm.phase == .purchased)
        #expect(entitled)
        #expect(spy.events.contains(.purchaseCompleted))
    }

    @Test("A failed purchase surfaces a failure phase")
    func purchaseFailure() async {
        let vm = PaywallViewModel(service: MockPaywallService(purchaseResult: .failure(StubError())))
        await vm.load()
        await vm.purchaseSelected()
        if case .failed = vm.phase {} else { Issue.record("Expected failed phase, got \(vm.phase)") }
    }

    @Test("Restore with no purchases reports failure")
    func restoreNone() async {
        let vm = PaywallViewModel(service: MockPaywallService(restoreResult: .success(false)))
        await vm.load()
        await vm.restore()
        if case .failed = vm.phase {} else { Issue.record("Expected failed phase, got \(vm.phase)") }
    }

    @Test("Products load failure sets failed phase")
    func loadFailure() async {
        // A service that throws on products().
        struct ThrowingService: PaywallService {
            func products() async throws -> [PaywallProduct] { throw StubError() }
            func purchase(_ productID: String) async throws -> Bool { false }
            func restore() async throws -> Bool { false }
            func isPremium() async -> Bool { false }
        }
        let vm = PaywallViewModel(service: ThrowingService())
        await vm.load()
        if case .failed = vm.phase {} else { Issue.record("Expected failed phase, got \(vm.phase)") }
    }
}
