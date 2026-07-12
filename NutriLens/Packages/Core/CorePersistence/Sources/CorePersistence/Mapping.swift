import Foundation
import CoreModels

// Boundary mapping between SwiftData models and framework-free domain entities.
// Repositories return/accept only domain entities; models never leak upward.

extension FoodItemModel {
    convenience init(entity: FoodItemEntity) {
        self.init(id: entity.id, name: entity.name, brand: entity.brand,
                  quantity: entity.quantity, servingUnit: entity.servingUnit,
                  portionGrams: entity.portionGrams, nutrition: entity.nutrition,
                  fdcId: entity.fdcId, offBarcode: entity.offBarcode,
                  confidence: entity.confidence, isUserEdited: entity.isUserEdited)
    }

    func toEntity() -> FoodItemEntity {
        FoodItemEntity(id: id, name: name, brand: brand, quantity: quantity,
                       servingUnit: servingUnit, portionGrams: portionGrams,
                       nutrition: nutrition, fdcId: fdcId, offBarcode: offBarcode,
                       confidence: confidence, isUserEdited: isUserEdited)
    }

    /// Copy domain values onto an existing model (used during update).
    func apply(_ entity: FoodItemEntity) {
        name = entity.name
        brand = entity.brand
        quantity = entity.quantity
        servingUnit = entity.servingUnit
        portionGrams = entity.portionGrams
        nutrition = entity.nutrition
        fdcId = entity.fdcId
        offBarcode = entity.offBarcode
        confidence = entity.confidence
        isUserEdited = entity.isUserEdited
    }
}

extension MealModel {
    convenience init(entity: MealEntity, syncState: SyncState) {
        self.init(
            id: entity.id,
            mealType: entity.mealType,
            loggedAt: entity.loggedAt,
            source: entity.source,
            note: entity.note,
            photoLocalPath: nil,
            photoRemoteURL: entity.photoRemoteURL,
            totalCalories: entity.totalCalories,
            totalMacros: entity.totalMacros,
            syncState: syncState,
            updatedAt: .now,
            items: entity.items.map(FoodItemModel.init(entity:))
        )
    }

    func toEntity() -> MealEntity {
        MealEntity(
            id: id,
            mealType: mealType,
            loggedAt: loggedAt,
            source: source,
            note: note,
            items: items
                .sorted { $0.name < $1.name }
                .map { $0.toEntity() },
            photoRemoteURL: photoRemoteURL
        )
    }
}
