import SwiftUI
import CoreUI

/// Auth-gated root. Routes between authentication, onboarding, and the main tab bar.
/// Individual destinations are implemented as their feature modules land (see roadmap).
struct RootView: View {
    @Environment(DIContainer.self) private var container
    @State private var route: Route = .loading

    enum Route { case loading, auth, onboarding, main }

    var body: some View {
        Group {
            switch route {
            case .loading:
                LoadingView("Starting NutriLens…")
            case .auth:
                placeholder("Authentication", "Apple · Google · Email (M2)")
            case .onboarding:
                placeholder("Onboarding", "10-step profile wizard (M3)")
            case .main:
                MainTabView()
            }
        }
        .task { await resolveInitialRoute() }
    }

    private func resolveInitialRoute() async {
        // M2 wires this to Firebase Auth state + profile presence.
        route = .auth
    }

    private func placeholder(_ title: String, _ subtitle: String) -> some View {
        EmptyStateView(systemImage: "hammer", title: title, message: subtitle)
    }
}

/// The five-tab shell with the camera as the centered accent action.
struct MainTabView: View {
    var body: some View {
        TabView {
            Tab("Home", systemImage: "house.fill") { EmptyStateView(systemImage: "house", title: "Home", message: "Daily summary (M8)") }
            Tab("Diary", systemImage: "book.fill") { EmptyStateView(systemImage: "book", title: "Diary", message: "Meal log (M8)") }
            Tab("Scan", systemImage: "camera.fill") { EmptyStateView(systemImage: "camera", title: "Camera", message: "Photo analysis (M6/M7)") }
            Tab("Coach", systemImage: "sparkles") { EmptyStateView(systemImage: "sparkles", title: "AI Coach", message: "Chat (M10)") }
            Tab("Progress", systemImage: "chart.xyaxis.line") { EmptyStateView(systemImage: "chart.bar", title: "Progress", message: "Charts (M11)") }
        }
    }
}
