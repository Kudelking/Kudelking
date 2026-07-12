import SwiftUI

/// App entry point. Configures Firebase, builds the DI container, and mounts the auth-gated root.
@main
struct NutriLensApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate
    @State private var container = DIContainer.live()

    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(container)
                .tint(.accentColor)
        }
    }
}
