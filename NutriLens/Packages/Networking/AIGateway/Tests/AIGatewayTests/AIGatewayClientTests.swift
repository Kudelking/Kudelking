import Testing
import Foundation
@testable import AIGateway
import APIClient
import CoreModels

@Suite("AIGatewayClient")
struct AIGatewayClientTests {

    private let analyzeJSON = """
    {"items":[
      {"name":"Grilled chicken breast","canonicalQuery":"grilled chicken breast",
       "brand":null,"estimatedPortionGrams":150,
       "nutritionPer100g":{"kcal":165,"protein":31,"carbs":0,"fat":3.6,"fiber":0,
         "sugar":0,"sodium":74,"minerals":[{"name":"Iron","amount":1.0,"unit":"mg"}]},
       "confidence":0.82,"nutritionSource":"usda"}],
     "overallConfidence":0.8,"warnings":[],"servedFromCache":false}
    """

    private func request() -> MealAnalysisRequest {
        MealAnalysisRequest(imageData: Data([0x01, 0x02]), perceptualHash: "abc",
                            goal: .loseWeight, remainingCalories: 800,
                            allergies: [.peanuts], unitSystem: .metric)
    }

    @Test("analyzeMeal maps BFF response and scales nutrition to the portion")
    func analyze() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "analyzeMeal", json: analyzeJSON)
        let gateway = AIGatewayClient(http: client, baseURL: URL(string: "https://bff.test")!)

        let result = try await gateway.analyzeMeal(request())
        #expect(result.items.count == 1)
        let item = try #require(result.items.first)
        #expect(item.name == "Grilled chicken breast")
        #expect(item.portionGrams == 150)
        // 165 kcal/100g scaled to 150g = 247.5
        #expect(abs(item.nutrition.calories - 247.5) < 0.001)
        #expect(abs(item.nutrition.macros.protein - 46.5) < 0.001)
        #expect(item.nutrition.minerals.first?.amount == 1.5)   // 1.0 × 1.5
        #expect(item.nutrition.source == .usda)
        #expect(!result.servedFromCache)
    }

    @Test("analyzeMeal posts JSON with base64 image and attaches auth headers")
    func requestShape() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "analyzeMeal", json: analyzeJSON)
        let gateway = AIGatewayClient(
            http: client, baseURL: URL(string: "https://bff.test")!,
            authHeaders: { ["Authorization": "Bearer token", "X-Firebase-AppCheck": "ac"] }
        )
        _ = try await gateway.analyzeMeal(request())

        let sent = try #require(await client.sentRequests.first)
        #expect(sent.method == .post)
        #expect(sent.headers["Authorization"] == "Bearer token")
        #expect(sent.headers["X-Firebase-AppCheck"] == "ac")
        #expect(sent.url.absoluteString.contains("analyzeMeal"))
    }

    @Test("A rate-limited BFF surfaces AppError")
    func rateLimited() async {
        let client = MockHTTPClient()
        await client.stub(urlContains: "analyzeMeal", status: 429, json: "{}")
        let gateway = AIGatewayClient(http: client, baseURL: URL(string: "https://bff.test")!)
        await #expect(throws: AppError.self) {
            _ = try await gateway.analyzeMeal(request())
        }
    }
}
