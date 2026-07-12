import Foundation
import CoreModels
import APIClient

/// Client for USDA FoodData Central — the primary nutrition source.
public struct USDAClient: Sendable {
    private let http: HTTPClient
    private let apiKey: String
    private let baseURL: URL

    public init(http: HTTPClient, apiKey: String,
                baseURL: URL = URL(string: "https://api.nal.usda.gov/fdc/v1")!) {
        self.http = http
        self.apiKey = apiKey
        self.baseURL = baseURL
    }

    // MARK: Search

    public func search(_ query: String, pageSize: Int = 10) async throws -> [FoodMatch] {
        var components = URLComponents(url: baseURL.appendingPathComponent("foods/search"),
                                       resolvingAgainstBaseURL: false)!
        components.queryItems = [
            .init(name: "query", value: query),
            .init(name: "pageSize", value: String(pageSize)),
            .init(name: "api_key", value: apiKey)
        ]
        let response: SearchResponse = try await http.sendJSON(HTTPRequest(url: components.url!))
        return response.foods.map { food in
            let values = Dictionary(
                food.foodNutrients.map {
                    ($0.nutrientId, (amount: $0.value, unit: $0.unitName ?? ""))
                },
                uniquingKeysWith: { first, _ in first }
            )
            return FoodMatch(
                id: "fdc:\(food.fdcId)",
                name: food.description,
                brand: food.brandName,
                nutritionPer100g: makeNutritionFacts(from: values, source: .usda)
            )
        }
    }

    // MARK: Detail

    public func food(fdcId: Int) async throws -> NutritionFacts {
        var components = URLComponents(
            url: baseURL.appendingPathComponent("food/\(fdcId)"),
            resolvingAgainstBaseURL: false)!
        components.queryItems = [.init(name: "api_key", value: apiKey)]
        let detail: FoodDetail = try await http.sendJSON(HTTPRequest(url: components.url!))
        let values = Dictionary(
            detail.foodNutrients.compactMap { entry -> (Int, (amount: Double, unit: String))? in
                guard let id = entry.nutrient.id, let amount = entry.amount else { return nil }
                return (id, (amount: amount, unit: entry.nutrient.unitName ?? ""))
            },
            uniquingKeysWith: { first, _ in first }
        )
        return makeNutritionFacts(from: values, source: .usda)
    }
}

// MARK: - DTOs

private struct SearchResponse: Decodable {
    let foods: [Food]
    struct Food: Decodable {
        let fdcId: Int
        let description: String
        let brandName: String?
        let foodNutrients: [Nutrient]
    }
    struct Nutrient: Decodable {
        let nutrientId: Int
        let value: Double
        let unitName: String?
    }
}

private struct FoodDetail: Decodable {
    let foodNutrients: [Entry]
    struct Entry: Decodable {
        let nutrient: NutrientInfo
        let amount: Double?
    }
    struct NutrientInfo: Decodable {
        let id: Int?
        let unitName: String?
    }
}
