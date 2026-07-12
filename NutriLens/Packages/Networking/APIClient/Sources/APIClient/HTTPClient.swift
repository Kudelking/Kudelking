import Foundation
import CoreModels

public enum HTTPMethod: String, Sendable {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case delete = "DELETE"
}

public struct HTTPRequest: Sendable {
    public var url: URL
    public var method: HTTPMethod
    public var headers: [String: String]
    public var body: Data?

    public init(url: URL, method: HTTPMethod = .get,
                headers: [String: String] = [:], body: Data? = nil) {
        self.url = url
        self.method = method
        self.headers = headers
        self.body = body
    }
}

public struct HTTPResponse: Sendable {
    public let status: Int
    public let data: Data
    public init(status: Int, data: Data) {
        self.status = status
        self.data = data
    }
    public var isSuccess: Bool { (200..<300).contains(status) }
}

/// The transport seam. Everything that makes network calls depends on this protocol, so tests
/// inject a mock and never touch the network.
public protocol HTTPClient: Sendable {
    func send(_ request: HTTPRequest) async throws -> HTTPResponse
}

public extension HTTPClient {
    /// Send and decode a JSON body, mapping non-2xx and transport failures to `AppError`.
    func sendJSON<T: Decodable>(_ request: HTTPRequest,
                                as type: T.Type = T.self,
                                decoder: JSONDecoder = .init()) async throws -> T {
        let response = try await send(request)
        guard response.isSuccess else { throw Self.mapStatus(response.status) }
        do {
            return try decoder.decode(T.self, from: response.data)
        } catch {
            throw AppError.aiMalformedResponse
        }
    }

    static func mapStatus(_ status: Int) -> AppError {
        switch status {
        case 401, 403: .notAuthenticated
        case 429: .rateLimited(retryAfter: 2)
        case 400..<500: .server(code: status)
        case 500..<600: .server(code: status)
        default: .unknown
        }
    }
}
