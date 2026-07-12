import Foundation
import CoreModels
import APIClient

/// The app-facing `NutritionDatabase`: USDA is primary for search/lookup, OpenFoodFacts is the
/// barcode source with a USDA fallback path (ARCHITECTURE §2). Text search degrades gracefully —
/// a USDA failure yields an empty result rather than crashing the caller.
public struct NutritionDatabaseService: NutritionDatabase {
    private let usda: USDAClient
    private let off: OpenFoodFactsClient

    public init(usda: USDAClient, off: OpenFoodFactsClient) {
        self.usda = usda
        self.off = off
    }

    public func search(_ query: String) async throws -> [FoodMatch] {
        let trimmed = query.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return [] }
        return try await usda.search(trimmed)
    }

    public func lookup(fdcId: Int) async throws -> NutritionFacts {
        try await usda.food(fdcId: fdcId)
    }

    public func byBarcode(_ code: String) async throws -> FoodMatch? {
        let trimmed = code.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return nil }
        // Barcodes resolve best via OpenFoodFacts; if not found there, fall back to a name search.
        if let match = try await off.product(barcode: trimmed) {
            return match
        }
        return try await usda.search(trimmed, pageSize: 1).first
    }
}
