import Foundation
import CoreModels
import APIClient

/// Client for OpenFoodFacts — barcode fallback and packaged-product lookups.
public struct OpenFoodFactsClient: Sendable {
    private let http: HTTPClient
    private let baseURL: URL

    public init(http: HTTPClient,
                baseURL: URL = URL(string: "https://world.openfoodfacts.org")!) {
        self.http = http
        self.baseURL = baseURL
    }

    public func product(barcode: String) async throws -> FoodMatch? {
        let url = baseURL.appendingPathComponent("api/v2/product/\(barcode).json")
        let response: ProductResponse = try await http.sendJSON(HTTPRequest(url: url))
        guard response.status == 1, let product = response.product else { return nil }

        let n = product.nutriments
        let facts = NutritionFacts(
            calories: n.energyKcal100g ?? 0,
            macros: MacroBreakdown(protein: n.proteins100g ?? 0,
                                   carbs: n.carbohydrates100g ?? 0,
                                   fat: n.fat100g ?? 0),
            fiber: n.fiber100g ?? 0,
            sugar: n.sugars100g ?? 0,
            sodium: (n.sodium100g ?? 0) * 1000,        // OFF reports sodium in g/100g → mg
            source: .openFoodFacts
        )
        return FoodMatch(
            id: barcode,
            name: product.productName ?? "Unknown product",
            brand: product.brands,
            nutritionPer100g: facts
        )
    }
}

// MARK: - DTOs

private struct ProductResponse: Decodable {
    let status: Int
    let product: Product?
}

private struct Product: Decodable {
    let productName: String?
    let brands: String?
    let nutriments: Nutriments

    enum CodingKeys: String, CodingKey {
        case productName = "product_name"
        case brands
        case nutriments
    }
}

private struct Nutriments: Decodable {
    let energyKcal100g: Double?
    let proteins100g: Double?
    let carbohydrates100g: Double?
    let fat100g: Double?
    let fiber100g: Double?
    let sugars100g: Double?
    let sodium100g: Double?

    enum CodingKeys: String, CodingKey {
        case energyKcal100g = "energy-kcal_100g"
        case proteins100g = "proteins_100g"
        case carbohydrates100g = "carbohydrates_100g"
        case fat100g = "fat_100g"
        case fiber100g = "fiber_100g"
        case sugars100g = "sugars_100g"
        case sodium100g = "sodium_100g"
    }
}
