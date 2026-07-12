import SwiftUI
import SwiftData
import CoreModels
import CorePersistence
import VisionService
import Authentication
import Onboarding
import Home
import AICoach
import Progress
import Settings
import MealCapture

/// Composition root. Wires concrete services and builds feature view models. `live()` uses the
/// SDK-free dev/demo adapters (see App/Composition) so the app runs without Firebase; swap those
/// for production adapters (Firebase Auth, RevenueCat, AIGatewayClient → your BFF) to ship.
@MainActor
@Observable
final class DIContainer {
    let modelContainer: ModelContainer
    let mealRepository: any MealRepository
    let waterStore: any WaterStore
    let aiGateway: any AIGateway
    let nutritionDB: any NutritionDatabase
    let purchases: any PurchaseService
    let analytics: any Analytics
    let preferences: any PreferencesStore
    let metrics: any MetricsProviding
    let authSession: AuthSessionStore

    private let profileStore = ProfileStore()
    var currentProfile: UserProfileEntity?

    init(modelContainer: ModelContainer,
         mealRepository: any MealRepository,
         waterStore: any WaterStore,
         aiGateway: any AIGateway,
         nutritionDB: any NutritionDatabase,
         purchases: any PurchaseService,
         analytics: any Analytics,
         preferences: any PreferencesStore,
         metrics: any MetricsProviding,
         authSession: AuthSessionStore) {
        self.modelContainer = modelContainer
        self.mealRepository = mealRepository
        self.waterStore = waterStore
        self.aiGateway = aiGateway
        self.nutritionDB = nutritionDB
        self.purchases = purchases
        self.analytics = analytics
        self.preferences = preferences
        self.metrics = metrics
        self.authSession = authSession
        self.currentProfile = profileStore.load()
    }

    static func live() -> DIContainer {
        let container: ModelContainer
        do {
            container = try PersistenceController.live()
        } catch {
            fatalError("Failed to create the local store: \(error)")
        }
        let repo = SwiftDataMealRepository.make(container: container)
        return DIContainer(
            modelContainer: container,
            mealRepository: repo,
            waterStore: UserDefaultsWaterStore(),
            aiGateway: DemoAIGateway(),
            nutritionDB: DemoNutritionDatabase(),
            purchases: StubPurchaseService(),
            analytics: NoopAnalytics(),
            preferences: UserDefaultsPreferences(),
            metrics: DemoMetricsProvider(),
            authSession: AuthSessionStore(service: DemoAuthenticationService(),
                                          tokenStore: KeychainTokenStore()))
    }

    // MARK: - Profile

    func saveProfile(_ profile: UserProfileEntity) {
        profileStore.save(profile)
        currentProfile = profile
    }

    func clearProfile() {
        profileStore.clear()
        currentProfile = nil
    }

    // MARK: - Feature model builders

    func homeModel(_ profile: UserProfileEntity) -> HomeViewModel {
        HomeViewModel(profile: profile, mealRepository: mealRepository, waterStore: waterStore)
    }

    func diaryModel() -> DiaryViewModel {
        DiaryViewModel(repository: mealRepository)
    }

    func coachModel() -> CoachViewModel {
        CoachViewModel(gateway: aiGateway, analytics: analytics)
    }

    func progressModel(_ profile: UserProfileEntity) -> ProgressViewModel {
        ProgressViewModel(provider: metrics, heightCm: profile.heightCm)
    }

    func settingsModel() -> SettingsViewModel {
        SettingsViewModel(preferences: preferences, purchases: purchases,
                          initialUnit: currentProfile?.unitSystem ?? .metric,
                          onSignOut: { [authSession, weak self] in
                              await authSession.signOut()
                              self?.clearProfile()
                          })
    }

    func onboardingModel(userID: String, email: String?) -> OnboardingModel {
        OnboardingModel(userID: userID, email: email) { [weak self] profile in
            self?.saveProfile(profile)
        }
    }

    func analyzeUseCase() -> AnalyzeMealUseCase {
        DefaultAnalyzeMealUseCase(preparer: ImagePreparer(),
                                  recognizer: VisionFoodRecognizer(),
                                  gateway: aiGateway,
                                  nutritionDB: nutritionDB)
    }

    func mealAnalysisModel(imageData: Data, mealType: MealType) -> MealAnalysisViewModel {
        let profile = currentProfile
        let context = MealAnalysisContext(
            goal: profile?.goal ?? .maintain,
            remainingCalories: profile?.targetCalories ?? 2000,
            allergies: profile?.allergies ?? [],
            unitSystem: profile?.unitSystem ?? .metric)
        return MealAnalysisViewModel(imageData: imageData, context: context, mealType: mealType,
                                     useCase: analyzeUseCase(), repository: mealRepository,
                                     analytics: analytics)
    }
}
