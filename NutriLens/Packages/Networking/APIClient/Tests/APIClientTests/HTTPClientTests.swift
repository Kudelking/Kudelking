import Testing
import Foundation
@testable import APIClient
import CoreModels

@Suite("HTTPClient JSON + error mapping")
struct HTTPClientTests {

    private struct Payload: Codable, Equatable { let value: Int }

    private func request() -> HTTPRequest {
        HTTPRequest(url: URL(string: "https://example.com/api")!)
    }

    @Test("Decodes a successful JSON body")
    func decodesJSON() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "example.com", json: #"{"value": 42}"#)
        let payload: Payload = try await client.sendJSON(request())
        #expect(payload == Payload(value: 42))
    }

    @Test("Maps non-2xx status codes to AppError")
    func mapsStatus() async {
        let client = MockHTTPClient()
        await client.stub(urlContains: "example.com", status: 429, json: "{}")
        await #expect(throws: AppError.self) {
            let _: Payload = try await client.sendJSON(request())
        }
    }

    @Test("Malformed JSON surfaces aiMalformedResponse")
    func malformed() async {
        let client = MockHTTPClient()
        await client.stub(urlContains: "example.com", json: "not json")
        await #expect(throws: AppError.aiMalformedResponse) {
            let _: Payload = try await client.sendJSON(request())
        }
    }

    @Test("Status mapping covers the important cases")
    func statusMapping() {
        #expect(URLSessionHTTPClient.mapStatus(401) == .notAuthenticated)
        #expect(URLSessionHTTPClient.mapStatus(429) == .rateLimited(retryAfter: 2))
        #expect(URLSessionHTTPClient.mapStatus(503) == .server(code: 503))
    }

    @Test("Only transient errors are retried")
    func transient() {
        #expect(URLSessionHTTPClient.isTransient(AppError.offline))
        #expect(URLSessionHTTPClient.isTransient(AppError.server(code: 500)))
        #expect(!URLSessionHTTPClient.isTransient(AppError.notAuthenticated))
        #expect(!URLSessionHTTPClient.isTransient(AppError.server(code: 404)))
    }
}
