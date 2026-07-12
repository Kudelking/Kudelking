import UIKit

/// Handles Firebase configuration, App Check, and push registration at launch.
/// Firebase SDK calls are added in M2 when `GoogleService-Info.plist` is provisioned.
final class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        // FirebaseApp.configure()
        // AppCheck.setAppCheckProviderFactory(AppAttestProviderFactory())
        return true
    }
}
