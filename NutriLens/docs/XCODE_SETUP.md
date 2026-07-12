# Building NutriLens

NutriLens is assembled from local Swift packages into an Xcode project via **XcodeGen**. iOS apps
can only be compiled on **macOS with Xcode** — there is no Linux/CI path to a device build.

## Prerequisites
- macOS 14+ with **Xcode 16+** (iOS 17 SDK)
- [XcodeGen](https://github.com/yonaskolb/XcodeGen): `brew install xcodegen`

## One command
```bash
cd NutriLens
./scripts/build.sh
```
This runs `xcodegen generate` (creates `NutriLens.xcodeproj` from `project.yml`) and builds the
app for the iPhone 16 simulator. Then open the project and press **Run** (⌘R).

## What you get out of the box (dev/demo mode)
The app runs **without any backend or third-party SDK**. `DIContainer.live()` wires SDK-free
adapters (`App/Composition/`):
- Auth: `DemoAuthenticationService` — any sign-in succeeds
- Analysis: `DemoAIGateway` — returns a sample meal; coach streams a canned reply
- Storage: real `SwiftDataMealRepository`; water/prefs in `UserDefaults`
- Purchases: `DemoPaywallService`

So you can walk the full flow: sign in → onboarding → Home → Scan (pick a photo) → review/save →
Diary → Coach → Progress → Settings/Paywall.

## Going to production
Swap the demo adapters for real ones:
1. **Firebase** — add `firebase-ios-sdk` (SPM), drop in `GoogleService-Info.plist` (gitignored),
   and finish `App/FirebaseAuthenticationService.swift`. Set `FirebaseApp.configure()` +
   App Check in `AppDelegate`.
2. **Backend** — deploy `backend/functions` (see below) and point `AIGatewayClient` at its URL,
   replacing `DemoAIGateway` in `DIContainer.live()`.
3. **Nutrition DB** — replace `DemoNutritionDatabase` with
   `NutritionDatabaseService(usda:off:)` using `URLSessionHTTPClient` and your USDA key.
4. **RevenueCat** — add the SDK and implement `PaywallService` against it.
5. **HealthKit** — implement `HealthKitService`; pass it to `HomeViewModel`.

### Signing / capabilities
Set `DEVELOPMENT_TEAM` in `project.yml`. Capabilities are declared there: App Group
`group.com.nutrilens.app` (shared with the Widget + Watch), HealthKit, Push, Sign in with Apple.

## Backend
```bash
cd backend/functions
npm ci
npm test          # pure-helper unit tests
firebase deploy --only functions   # requires a configured Firebase project + Secret Manager keys
```
Secrets (`OPENAI_API_KEY`, `USDA_API_KEY`) live in GCP Secret Manager — never in the client.

## Tests
Each package has its own tests. In Xcode press **⌘U**, or from the CLI:
```bash
xcodebuild test -scheme CoreModels \
  -destination 'platform=iOS Simulator,name=iPhone 16,OS=latest'
```
CI (`.github/workflows/ci.yml`) runs every package's tests on an iOS Simulator plus the backend
helper tests.
