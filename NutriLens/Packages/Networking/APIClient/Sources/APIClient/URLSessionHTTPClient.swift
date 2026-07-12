import Foundation
import CoreModels
import CoreConcurrency

/// Production `HTTPClient` over `URLSession`, with transient-failure retry and error mapping.
public struct URLSessionHTTPClient: HTTPClient {
    private let session: URLSession
    private let retryPolicy: RetryPolicy
    private let timeout: TimeInterval

    public init(session: URLSession = .shared,
                retryPolicy: RetryPolicy = .network,
                timeout: TimeInterval = 30) {
        self.session = session
        self.retryPolicy = retryPolicy
        self.timeout = timeout
    }

    public func send(_ request: HTTPRequest) async throws -> HTTPResponse {
        try await withRetry(retryPolicy, shouldRetry: Self.isTransient) {
            try await self.perform(request)
        }
    }

    private func perform(_ request: HTTPRequest) async throws -> HTTPResponse {
        var urlRequest = URLRequest(url: request.url,
                                    timeoutInterval: timeout)
        urlRequest.httpMethod = request.method.rawValue
        urlRequest.httpBody = request.body
        for (key, value) in request.headers {
            urlRequest.setValue(value, forHTTPHeaderField: key)
        }

        do {
            let (data, response) = try await session.data(for: urlRequest)
            guard let http = response as? HTTPURLResponse else { throw AppError.unknown }
            return HTTPResponse(status: http.statusCode, data: data)
        } catch let error as URLError {
            throw Self.map(error)
        }
    }

    static func map(_ error: URLError) -> AppError {
        switch error.code {
        case .notConnectedToInternet, .dataNotAllowed: .offline
        case .timedOut: .timeout
        default: .network(code: error.errorCode)
        }
    }

    /// Retry only on transient conditions — not on auth or client errors.
    static func isTransient(_ error: Error) -> Bool {
        switch error {
        case AppError.offline, AppError.timeout, AppError.network:
            true
        case let AppError.server(code) where code >= 500:
            true
        default:
            false
        }
    }
}
