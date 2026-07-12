import SwiftUI
import CoreModels

/// Composition root. Feature ViewModels resolve their dependencies from here, so nothing
/// constructs concrete services directly. `live()` wires production implementations;
/// tests build a container with mocks.
@Observable
@MainActor
final class DIContainer {
    let aiGateway: AIGateway
    let mealRepository: MealRepository
    let nutritionDatabase: NutritionDatabase
    let healthKit: HealthKitService
    let purchases: PurchaseService
    let analytics: Analytics

    init(aiGateway: AIGateway,
         mealRepository: MealRepository,
         nutritionDatabase: NutritionDatabase,
         healthKit: HealthKitService,
         purchases: PurchaseService,
         analytics: Analytics) {
        self.aiGateway = aiGateway
        self.mealRepository = mealRepository
        self.nutritionDatabase = nutritionDatabase
        self.healthKit = healthKit
        self.purchases = purchases
        self.analytics = analytics
    }

    /// Production wiring. Concrete implementations are added as each module lands (M1–M12).
    static func live() -> DIContainer {
        // NOTE: Concrete services are introduced module-by-module per the roadmap.
        // Until then, `RootView` renders behind the auth gate and features are feature-flagged.
        fatalError("Wire live dependencies as modules land (see docs/ARCHITECTURE.md §13).")
    }
}
