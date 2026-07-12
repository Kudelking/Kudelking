import Foundation
import CoreModels
import APIClient

/// Client for the NutriLens BFF (`/analyzeMeal`, `/coachChat`). The OpenAI key never reaches the
/// device — this only talks to our own Cloud Functions, attaching auth + App Check headers.
public struct AIGatewayClient: AIGateway {
    private let http: HTTPClient
    private let baseURL: URL
    private let authHeaders: @Sendable () async -> [String: String]

    public init(http: HTTPClient,
                baseURL: URL,
                authHeaders: @escaping @Sendable () async -> [String: String] = { [:] }) {
        self.http = http
        self.baseURL = baseURL
        self.authHeaders = authHeaders
    }

    // MARK: - Analyze

    public func analyzeMeal(_ request: MealAnalysisRequest) async throws -> MealAnalysisResult {
        let payload = AnalyzeRequestDTO(
            imageBase64: request.imageData.base64EncodedString(),
            perceptualHash: request.perceptualHash,
            goal: request.goal.rawValue,
            remainingCalories: request.remainingCalories,
            allergies: request.allergies.map(\.rawValue),
            unitSystem: request.unitSystem.rawValue
        )
        var headers = await authHeaders()
        headers["Content-Type"] = "application/json"
        let httpRequest = HTTPRequest(
            url: baseURL.appendingPathComponent("analyzeMeal"),
            method: .post,
            headers: headers,
            body: try JSONEncoder().encode(payload)
        )
        let dto: AnalyzeResponseDTO = try await http.sendJSON(httpRequest)
        return dto.toDomain()
    }

    // MARK: - Coach (streaming)

    public func coachChat(_ request: CoachRequest) -> AsyncThrowingStream<String, Error> {
        AsyncThrowingStream { continuation in
            let task = Task {
                do {
                    var headers = await authHeaders()
                    headers["Content-Type"] = "application/json"
                    let body = try JSONEncoder().encode(
                        CoachRequestDTO(message: request.message, recentDays: request.recentDays))
                    let httpRequest = HTTPRequest(
                        url: baseURL.appendingPathComponent("coachChat"),
                        method: .post, headers: headers, body: body)
                    // Full-response fallback until true SSE streaming lands in M10.
                    let reply: CoachReplyDTO = try await http.sendJSON(httpRequest)
                    continuation.yield(reply.text)
                    continuation.finish()
                } catch {
                    continuation.finish(throwing: error)
                }
            }
            continuation.onTermination = { _ in task.cancel() }
        }
    }
}
