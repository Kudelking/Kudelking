import Testing
import Foundation
@testable import NutritionDB
import APIClient
import CoreModels

@Suite("NutritionDatabaseService")
struct NutritionDatabaseServiceTests {

    // MARK: Fixtures

    private let usdaSearchJSON = """
    {"foods":[{"fdcId":171077,"description":"Chicken breast, grilled","brandName":null,
      "foodNutrients":[
        {"nutrientId":1008,"value":165,"unitName":"KCAL"},
        {"nutrientId":1003,"value":31,"unitName":"G"},
        {"nutrientId":1004,"value":3.6,"unitName":"G"},
        {"nutrientId":1005,"value":0,"unitName":"G"},
        {"nutrientId":1089,"value":1.0,"unitName":"MG"}]}]}
    """

    private let usdaDetailJSON = """
    {"foodNutrients":[
      {"nutrient":{"id":1008,"unitName":"KCAL"},"amount":52},
      {"nutrient":{"id":1003,"unitName":"G"},"amount":0.3},
      {"nutrient":{"id":1162,"unitName":"MG"},"amount":4.6}]}
    """

    private let offFoundJSON = """
    {"status":1,"product":{"product_name":"Nutella","brands":"Ferrero","nutriments":{
      "energy-kcal_100g":539,"proteins_100g":6.3,"carbohydrates_100g":57.5,
      "fat_100g":30.9,"fiber_100g":0,"sugars_100g":56.3,"sodium_100g":0.107}}}
    """

    private func makeService(_ client: MockHTTPClient) -> NutritionDatabaseService {
        NutritionDatabaseService(
            usda: USDAClient(http: client, apiKey: "TEST"),
            off: OpenFoodFactsClient(http: client)
        )
    }

    // MARK: Tests

    @Test("USDA search maps foods to FoodMatch with macros and minerals")
    func search() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "foods/search", json: usdaSearchJSON)
        let results = try await makeService(client).search("chicken")

        #expect(results.count == 1)
        let match = try #require(results.first)
        #expect(match.id == "fdc:171077")
        #expect(match.name == "Chicken breast, grilled")
        #expect(match.nutritionPer100g.calories == 165)
        #expect(match.nutritionPer100g.macros.protein == 31)
        #expect(match.nutritionPer100g.minerals.contains { $0.name == "Iron" && $0.amount == 1.0 })
        #expect(match.nutritionPer100g.source == .usda)
    }

    @Test("Empty query short-circuits without a network call")
    func emptyQuery() async throws {
        let client = MockHTTPClient()
        let results = try await makeService(client).search("   ")
        #expect(results.isEmpty)
        #expect(await client.sentRequests.isEmpty)
    }

    @Test("USDA detail lookup maps the detail response shape")
    func lookup() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "food/171077", json: usdaDetailJSON)
        let facts = try await makeService(client).lookup(fdcId: 171077)
        #expect(facts.calories == 52)
        #expect(facts.vitamins.contains { $0.name == "Vitamin C" && $0.amount == 4.6 })
    }

    @Test("Barcode resolves via OpenFoodFacts, converting sodium g→mg")
    func barcodeFound() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "product/", json: offFoundJSON)
        let match = try await makeService(client).byBarcode("3017620422003")
        #expect(match?.name == "Nutella")
        #expect(match?.brand == "Ferrero")
        #expect(match?.nutritionPer100g.sodium == 107)     // 0.107 g → 107 mg
        #expect(match?.nutritionPer100g.source == .openFoodFacts)
    }

    @Test("Barcode not on OpenFoodFacts falls back to a USDA name search")
    func barcodeFallback() async throws {
        let client = MockHTTPClient()
        await client.stub(urlContains: "product/", json: #"{"status":0}"#)
        await client.stub(urlContains: "foods/search", json: usdaSearchJSON)
        let match = try await makeService(client).byBarcode("0000000000000")
        #expect(match?.id == "fdc:171077")                  // came from USDA fallback
    }

    @Test("Empty barcode returns nil without a network call")
    func emptyBarcode() async throws {
        let client = MockHTTPClient()
        let match = try await makeService(client).byBarcode("")
        #expect(match == nil)
        #expect(await client.sentRequests.isEmpty)
    }
}
