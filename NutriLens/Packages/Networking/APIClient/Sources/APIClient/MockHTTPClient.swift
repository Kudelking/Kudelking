import Foundation

/// Scriptable `HTTPClient` for tests and previews. Matches requests by a substring of the URL
/// so tests can register canned responses per endpoint, and records what was sent.
public actor MockHTTPClient: HTTPClient {
    public enum Stub: Sendable {
        case success(status: Int, data: Data)
        case failure(any Error & Sendable)
    }

    private var stubs: [(match: String, stub: Stub)] = []
    private var fallback: Stub
    public private(set) var sentRequests: [HTTPRequest] = []

    public init(fallback: Stub = .success(status: 200, data: Data())) {
        self.fallback = fallback
    }

    /// Register a canned response for any URL containing `urlContains`.
    public func stub(urlContains: String, status: Int = 200, json: String) {
        stubs.append((urlContains, .success(status: status, data: Data(json.utf8))))
    }

    public func stub(urlContains: String, failure: any Error & Sendable) {
        stubs.append((urlContains, .failure(failure)))
    }

    public func send(_ request: HTTPRequest) async throws -> HTTPResponse {
        sentRequests.append(request)
        let absolute = request.url.absoluteString
        let matched = stubs.first { absolute.contains($0.match) }?.stub ?? fallback
        switch matched {
        case let .success(status, data): return HTTPResponse(status: status, data: data)
        case let .failure(error): throw error
        }
    }
}
