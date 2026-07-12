import Foundation
import SwiftData
import CoreModels

// SwiftData `@Model` mirrors of the domain value types. These are the ONLY types that touch
// the store; the Domain layer stays framework-free. Mapping lives in `Mapping.swift`.
//
// Codable value types (MacroBreakdown, NutritionFacts, enums) are persisted directly by
// SwiftData as composite attributes, keeping the schema compact.

@Model
final class MealModel {
    @Attribute(.unique) var id: UUID
    var mealType: MealType
    var loggedAt: Date
    var source: MealSource
    var note: String?
    var photoLocalPath: String?
    var photoRemoteURL: String?

    // Denormalized totals so Home never re-aggregates items (see ARCHITECTURE §2).
    var totalCalories: Double
    var totalMacros: MacroBreakdown

    var syncState: SyncState
    var updatedAt: Date

    @Relationship(deleteRule: .cascade, inverse: \FoodItemModel.meal)
    var items: [FoodItemModel]

    init(id: UUID, mealType: MealType, loggedAt: Date, source: MealSource,
         note: String?, photoLocalPath: String?, photoRemoteURL: String?,
         totalCalories: Double, totalMacros: MacroBreakdown,
         syncState: SyncState, updatedAt: Date, items: [FoodItemModel]) {
        self.id = id
        self.mealType = mealType
        self.loggedAt = loggedAt
        self.source = source
        self.note = note
        self.photoLocalPath = photoLocalPath
        self.photoRemoteURL = photoRemoteURL
        self.totalCalories = totalCalories
        self.totalMacros = totalMacros
        self.syncState = syncState
        self.updatedAt = updatedAt
        self.items = items
    }
}

@Model
final class FoodItemModel {
    @Attribute(.unique) var id: UUID
    var name: String
    var brand: String?
    var quantity: Double
    var servingUnit: ServingUnit
    var portionGrams: Double
    var nutrition: NutritionFacts
    var fdcId: Int?
    var offBarcode: String?
    var confidence: Double
    var isUserEdited: Bool

    var meal: MealModel?

    init(id: UUID, name: String, brand: String?, quantity: Double,
         servingUnit: ServingUnit, portionGrams: Double, nutrition: NutritionFacts,
         fdcId: Int?, offBarcode: String?, confidence: Double, isUserEdited: Bool) {
        self.id = id
        self.name = name
        self.brand = brand
        self.quantity = quantity
        self.servingUnit = servingUnit
        self.portionGrams = portionGrams
        self.nutrition = nutrition
        self.fdcId = fdcId
        self.offBarcode = offBarcode
        self.confidence = confidence
        self.isUserEdited = isUserEdited
    }
}

/// Durable queue of local mutations awaiting replication to Firestore (M9).
/// Writing to the Outbox is part of the same local transaction as the data write,
/// so the app never loses a change even if it is killed before sync.
@Model
final class OutboxItemModel {
    @Attribute(.unique) var id: UUID
    var entityType: String
    var entityID: String
    var op: SyncOp
    var payload: Data
    var attempts: Int
    var createdAt: Date

    init(id: UUID = UUID(), entityType: String, entityID: String,
         op: SyncOp, payload: Data, attempts: Int = 0, createdAt: Date = .now) {
        self.id = id
        self.entityType = entityType
        self.entityID = entityID
        self.op = op
        self.payload = payload
        self.attempts = attempts
        self.createdAt = createdAt
    }
}

/// All model types registered with the container. Adding a model here is the single place
/// the schema is declared.
enum PersistenceSchema {
    static let models: [any PersistentModel.Type] = [
        MealModel.self,
        FoodItemModel.self,
        OutboxItemModel.self
    ]
}
