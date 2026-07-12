import SwiftUI
import PhotosUI
import CoreModels
import CoreUI
import Authentication
import Onboarding
import Home
import AICoach
import Progress
import Settings
import Paywall
import MealCapture

/// Auth-gated root: routes between authentication, onboarding, and the main tab bar based on the
/// session state and whether a profile exists.
struct RootView: View {
    @Environment(DIContainer.self) private var container
    @State private var didBootstrap = false

    var body: some View {
        content
            .task {
                guard !didBootstrap else { return }
                didBootstrap = true
                await container.authSession.bootstrap()
            }
    }

    @ViewBuilder private var content: some View {
        switch container.authSession.state {
        case .loading:
            LoadingView("Starting NutriLens…")
        case .signedOut:
            WelcomeView(model: AuthViewModel(session: container.authSession))
        case let .signedIn(user):
            if let profile = container.currentProfile {
                MainTabView(profile: profile)
            } else {
                OnboardingFlowView(model: container.onboardingModel(userID: user.id,
                                                                    email: user.email))
            }
        }
    }
}

/// The five-tab shell. Camera is the centered accent action; Settings opens from Home's toolbar.
struct MainTabView: View {
    @Environment(DIContainer.self) private var container
    let profile: UserProfileEntity
    @State private var showSettings = false
    @State private var showPaywall = false

    var body: some View {
        TabView {
            NavigationStack {
                HomeView(model: container.homeModel(profile))
                    .navigationTitle("Today")
                    .toolbar {
                        ToolbarItem(placement: .topBarTrailing) {
                            Button { showSettings = true } label: { Image(systemName: "gearshape") }
                        }
                    }
            }
            .tabItem { Label("Home", systemImage: "house.fill") }

            NavigationStack {
                DiaryView(model: container.diaryModel()).navigationTitle("Diary")
            }
            .tabItem { Label("Diary", systemImage: "book.fill") }

            ScanTab().tabItem { Label("Scan", systemImage: "camera.fill") }

            NavigationStack {
                CoachView(model: container.coachModel()).navigationTitle("Coach")
            }
            .tabItem { Label("Coach", systemImage: "sparkles") }

            NavigationStack {
                Progress.ProgressView(model: container.progressModel(profile))
                    .navigationTitle("Progress")
            }
            .tabItem { Label("Progress", systemImage: "chart.xyaxis.line") }
        }
        .sheet(isPresented: $showSettings) {
            NavigationStack {
                SettingsView(model: container.settingsModel(),
                             onManageSubscription: { showSettings = false; showPaywall = true })
                    .navigationTitle("Settings")
            }
        }
        .sheet(isPresented: $showPaywall) {
            PaywallView(model: PaywallViewModel(service: DemoPaywallService(),
                                                analytics: container.analytics)) {
                showPaywall = false
            }
        }
    }
}

/// Scan tab: pick a photo, run the analysis cascade, and review/save the result.
struct ScanTab: View {
    @Environment(DIContainer.self) private var container
    @State private var pickerItem: PhotosPickerItem?
    @State private var analysisModel: MealAnalysisViewModel?

    var body: some View {
        NavigationStack {
            Group {
                if let model = analysisModel {
                    AnalysisResultView(model: model,
                                       onRetake: { analysisModel = nil },
                                       onDone: { analysisModel = nil })
                } else {
                    ContentUnavailableView {
                        Label("Scan a meal", systemImage: "camera.viewfinder")
                    } description: {
                        Text("Pick a food photo to estimate its nutrition.")
                    } actions: {
                        PhotosPicker("Choose photo", selection: $pickerItem, matching: .images)
                            .buttonStyle(.borderedProminent)
                    }
                }
            }
            .navigationTitle("Scan")
            .onChange(of: pickerItem) { Task { await loadPickedImage() } }
        }
    }

    private func loadPickedImage() async {
        guard let item = pickerItem,
              let data = try? await item.loadTransferable(type: Data.self) else { return }
        analysisModel = container.mealAnalysisModel(imageData: data, mealType: .lunch)
    }
}
