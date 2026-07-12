# 🍽️ NutriLens AI — Architecture (v1.0)

> Codename: **NutriLens**. Bundle ID: `com.nutrilens.app`. Deployment target: **iOS 17.0**
> (SwiftData, Observation, Live Activities). Language: **Swift 6 strict concurrency**.
>
> AI nutrition assistant: photograph food → detect dishes → estimate portion → compute
> calories/macros/micros → auto-log → track → coach. Production-grade, App Store scale.

---

## 1. System Architecture

Three layers, dependencies point inward (`Presentation → Domain → Data`). The Domain layer
knows nothing about SwiftUI or Firebase.

```
┌──────────────────────────────────────────────────────────────┐
│                        iOS CLIENT (SwiftUI)                    │
│  Presentation → Domain → Data                                  │
│  Views / @Observable ViewModels                                │
│  Use Cases / Entities / Protocols (CoreModels)                 │
│  Repositories: LocalStore(SwiftData) · RemoteStore(Firestore)  │
│               · NutritionDB(USDA/OFF) · AIGateway(→ proxy)      │
│  On-device: VisionKit, Vision.framework, HealthKit, Barcode    │
└───────────────┬──────────────────────────────┬───────────────┘
                │ HTTPS + App Check + ID token  │ HealthKit (local)
                ▼                               │
┌──────────────────────────────────────────┐   │
│      BACKEND (Firebase / GCP) = BFF       │   │
│  Cloud Functions:                         │   │
│   /analyzeMeal  /coachChat  /weeklyReport │   │
│    ├ Auth verify (Firebase Admin)         │   │
│    ├ App Check enforce                     │   │
│    ├ Rate-limit (Firestore counters)      │   │
│    ├ Cost guard + cache (pHash)            │   │
│    └ Secret Manager (OpenAI key)           │   │
│  Firestore · Storage · Remote Config       │   │
│  Analytics · Crashlytics                   │   │
└───────────────┬──────────────────────────┘   │
                ▼                               │
        ┌───────────────┐                       │
        │  OpenAI Vision │  (key lives ONLY here)│
        └───────────────┘                       │
        ┌───────────────┐   ┌────────────────┐  │
        │ USDA FDC API  │   │ OpenFoodFacts  │◄─┘
        └───────────────┘   └────────────────┘
```

**Principles**

| Principle | Decision |
|---|---|
| Clean layering | Domain has no framework imports. Deps injected via protocols. |
| No client secrets | Every paid/keyed call goes through the **BFF**. Client sends image + Firebase ID token + App Check token. |
| Offline-first | SwiftData is the source of truth for UI. Firestore is sync/backup. Writes are local first, replicated via an Outbox. |
| Modularity | Local SPM packages per feature; compiler forbids cross-feature imports. |
| Testability | Everything behind protocols + a DI container. AI and network are mockable. |

**Happy path (photo → logged meal)**

```
Camera → resize/compress (on-device) → Vision pre-scan (is-food?)
   → AIGateway.analyze(image, context) → BFF /analyzeMeal
       → cache lookup (pHash) ─hit→ return cached
       → miss → OpenAI Vision (structured JSON) → USDA nutrient enrichment
   → DTO → Domain.Meal → SwiftData insert (instant UI)
   → outbox → Firestore sync (background)
   → HealthKit write (with consent)
```

---

## 2. Database Schema

### SwiftData (local source of truth)

`UserProfile`, `Meal`, `FoodItem`, `FavoriteFood`, `MealTemplate`, `WeightEntry`,
`BodyMeasurement`, `WaterLog`, `ChatMessage`, `DailyCache`, `OutboxItem`.

- `Meal` and `DailyCache` keep **denormalized totals** so the Home screen never aggregates
  all `FoodItem`s on the fly — totals are recomputed once on meal mutation.
- Photos live on disk (`Application Support`) + Firebase Storage; only the path is stored.

See `Packages/Core/CoreModels` for the domain entities and the persistence package for the
`@Model` mirror types.

### Firestore (sync/backup — NOT the UI store)

```
users/{uid}                              profile mirror
users/{uid}/meals/{mealId}               meal + embedded items (doc < 1MB)
users/{uid}/weights/{entryId}
users/{uid}/measurements/{id}
users/{uid}/water/{id}
users/{uid}/chats/{messageId}
users/{uid}/dailyAggregates/{yyyy-MM-dd} for widgets / Watch, point-get by date
users/{uid}/usage/{yyyy-MM-dd}           rate-limit counters (atomic increment)
config/nutritionCacheKeys/{pHash}        server-side analysis cache (backend-only)
```

Composite indexes: `(uid)+loggedAt desc` on meals, `(uid)+date desc` on weights.
Aggregates are addressed by document id (the date) → point reads, no queries.

---

## 3. Folder Structure

```
NutriLens/
├─ App/                      @main, DI bootstrap, RootView
├─ Packages/
│  ├─ Core/{CoreModels, CoreUI, CoreConcurrency, CorePersistence}
│  ├─ Networking/{APIClient, AIGateway, NutritionDB}
│  ├─ Features/{Authentication, Onboarding, Home, Camera, MealLogging,
│  │            FoodSearch, AICoach, Progress, Settings}
│  ├─ Platform/{HealthKitService, NotificationsService, VisionService, Purchases}
│  └─ Shared/{Analytics, RemoteConfigService}
├─ Widgets/                  WidgetKit + Live Activities
├─ Watch/                    watchOS target
├─ backend/functions/        Cloud Functions (BFF) + firestore.rules
├─ Config/                   xcconfig, GoogleService-Info.plist (gitignored)
├─ Tests/Fixtures/           recorded AI responses, sample images
└─ .github/workflows/ci.yml
```

Local SPM modules (not group folders) give explicit dependency boundaries, parallel builds,
isolated tests, and reuse across Widget/Watch targets.

---

## 4. API Layer

```swift
protocol APIClient { func send<R: Endpoint>(_ endpoint: R) async throws -> R.Response }
protocol Endpoint {
    associatedtype Response: Decodable
    var path: String { get }; var method: HTTPMethod { get }
    var body: Encodable? { get }; var requiresAuth: Bool { get }
}
```

`URLSessionAPIClient` chains interceptors: **AppCheck → Firebase ID token → retry → logging**.
Default timeout 30s; AI endpoints up to 60s.

Domain service protocols (in `CoreModels`): `MealRepository`, `AIGateway`,
`NutritionDatabase`, `HealthKitService`, `PurchaseService`.

Error model: a single `AppError` (`network`, `timeout`, `rateLimited`, `aiUnavailable`,
`aiMalformedResponse`, `notAuthenticated`, `quotaExceeded`, `foodNotRecognized`, `offline`,
`server`, `unknown`). Each layer maps low-level errors into it; the UI has one `ErrorView`
with a recommended action (retry / upgrade / manual entry).

---

## 5. AI Pipeline

**Split of responsibility**
- Client: image prep, on-device pre-scan, context assembly (profile, goal, remaining kcal), UI.
- BFF (`/analyzeMeal`): auth, App Check, rate-limit, pHash cache, OpenAI structured output,
  USDA enrichment, cost logging. **OpenAI key lives only here (Secret Manager).**

**Structured output** — the model returns a strict JSON schema (`response_format = json_schema`):

```json
{
  "items": [{
    "name": "grilled chicken breast",
    "canonicalQuery": "grilled chicken breast",
    "estimatedPortionGrams": 150,
    "portionConfidence": 0.72,
    "referenceObjects": ["plate", "fork"],
    "nutritionPer100g": { "kcal": 165, "protein": 31, "carbs": 0, "fat": 3.6,
      "fiber": 0, "sugar": 0, "sodium": 74,
      "vitamins": [{"name":"B6","amount":0.6,"unit":"mg"}],
      "minerals": [{"name":"Iron","amount":1.0,"unit":"mg"}] },
    "confidence": 0.81
  }],
  "overallConfidence": 0.78, "warnings": []
}
```

**Enrichment & validation**
1. For each item, look up `canonicalQuery` in **USDA FDC** for authoritative numbers (the model
   is more reliable at *recognition* than at *numbers*).
2. USDA miss → OpenFoodFacts → miss → keep model values, mark `source: ai_estimate`.
3. Validate: `kcal ≈ 4·p + 4·c + 9·f ± 20%`, portion within sane bounds. Malformed JSON → one
   repair retry → else `aiMalformedResponse`.

**Prompts** are versioned in git (`backend/functions/src/lib/prompts.ts`). Temperature 0.2 for
stable numbers.

**Coach (`/coachChat`)** — RAG over the user's own aggregates (not external sources). Context is
a compact summary, not raw logs. Function calling (`getDayNutrition`, `getWeightTrend`,
`suggestMeal`) returns exact numbers from the DB instead of hallucinating. Response streams (SSE).

---

## 6. Vision Pipeline (on-device vs OpenAI)

| Task | Where | Why |
|---|---|---|
| Is there food at all? | on-device `VNClassifyImageRequest` | Free, instant, drops junk frames before a paid call |
| Live-preview labels | on-device | Camera responsiveness without network |
| Barcode | on-device `VNBarcodeObservation` | No AI needed → OFF/USDA lookup |
| Plate segmentation / multi-dish boxes | on-device `VNGenerateForegroundInstanceMaskRequest` (iOS 17+) | Helps portion + multi-detection |
| Dish recognition + portion + nutrients | **OpenAI Vision (via BFF)** | Needs semantics on-device models lack |
| Resize/compress + perceptual hash | on-device | Cuts cost, enables cache |

**Cost cascade**: on-device is-food (0 cost) → barcode → BFF cache hit (0 cost) → OpenAI →
if unavailable/over-limit → **manual entry** pre-filled with on-device labels (graceful
degradation, never a dead end).

**Image prep**: downscale max side to **1024px**, JPEG **q=0.6**, sRGB, EXIF-corrected. OpenAI
Vision bills per tile; 1024px keeps good recognition at ~1/3 the cost of full-res. Verify
accuracy on the fixture set.

---

## 7. User Flow

```
Launch → Auth gate
  ├─ Not signed → Welcome → [Apple/Google/Email] → first login → Onboarding (10 steps)
  │     → TDEE/goal calc → save profile → Home
  └─ Signed → (profile?) → Home / Onboarding

TabBar: Home · Diary · [＋ Camera] · Coach · Progress
  ＋ Camera → Take/Gallery/Live → on-device prescan → Analyzing…
     → Result cards (confidence) → Edit → pick meal type → Save → Home + HealthKit
     Barcode path → product → portion → Save
```

Activation moments: (1) onboarding complete, (2) first successful photo analysis. Paywall is
timed after the first "wow", never before.

---

## 8. UI Screens (with states)

Every screen implements **loading / empty / error / success**. Key screens: Welcome/Auth,
Onboarding ×10, **Home** (macro rings, water, steps, weight trend, AI tip), Camera Capture,
Analysis Result, Food Edit Sheet, Diary, Food Search / Barcode, Coach (streaming chat),
Progress (Swift Charts), Paywall, Settings.

Design system (`CoreUI`): semantic adaptive color tokens (Dark/Light), Dynamic Type
typography, components (`MacroRing`, `StatCard`, `FoodCard`, `PrimaryButton`) and shared
`LoadingView / EmptyView / ErrorView`. All animations respect Reduce Motion.

---

## 9. Rationale of Key Decisions

| Decision | Why | Rejected |
|---|---|---|
| SwiftData | Native `@Observable`/SwiftUI, less boilerplate, iOS 17 baseline | CoreData (more verbose; adopt if custom migrations needed) |
| BFF on Cloud Functions | Can't ship the OpenAI key; need rate-limit/cache/cost | Direct OpenAI from app = key leak, runaway cost |
| Offline-first + Outbox | Logging must work in a gym/subway | Online-only = data loss |
| On-device Vision as filter | Cuts paid calls (non-food, barcode, cache) | Everything via OpenAI = slow & costly |
| USDA numbers, AI recognition | LLM hallucinates numbers; USDA is authoritative | Trusting model numbers = wrong calories |
| Structured JSON + validation | Deterministic parsing, testable | Free text = brittle |
| Local SPM modules | Boundaries, parallel builds, reuse | Monolith target = slow & coupled |
| @Observable MVVM | Official Observation path, fine-grained updates | Combine ObservableObject legacy |
| RevenueCat | Cross-platform subs, server validation, A/B without release | Hand-rolled StoreKit2 billing |
| Firestore for sync only | Realtime backup + multi-device; UI reads local for speed/offline | Firestore as UI DB = lag & network dependence |

---

## 10. Threat Model + Security Rules + Secrets

| Threat | Mitigation |
|---|---|
| OpenAI key leak | Key only in **GCP Secret Manager**, read at runtime by the function. Never in client/git/Remote Config. |
| AI endpoint abuse | **Firebase App Check** (App Attest) required on functions + Firebase ID token + rate-limit. |
| Cross-tenant data access | Firestore rules: `request.auth.uid == uid` everywhere. |
| Token theft on device | Tokens in **Keychain**, never UserDefaults. |
| Food/health data leak | Explicit consent; private Storage under rules; HealthKit stays on device without separate consent. |

Firestore rules (see `backend/functions/firestore.rules`) allow read/write only to the owner and
deny all client access to `config/**` (backend-only via Admin SDK).

**Secrets strategy**: `GoogleService-Info.plist` is gitignored and injected in CI; OpenAI/USDA
keys in Secret Manager (IAM-scoped to functions); Remote Config holds non-sensitive flags only;
CI secrets in GitHub Actions / Xcode Cloud.

---

## 11. AI Budget + Cost Monitoring

**Photo analysis (target ≤ $0.03)**: 1024px ≈ 800–1200 image tokens + ~600 prompt input +
~500 structured output ≈ 1.4k in / 0.5k out → **~$0.01–0.03** on a vision-class model. Levers:
1024px/q0.6, low temperature, compact context summary, structured output, pHash cache, USDA
enrichment (don't ask the model for numbers).

**Chat (≤ $0.01/msg)**: aggregate summary context (≤ ~800 tokens), ≤ ~400 output, function
calling pulls exact numbers only when needed; text (non-vision) model → target met.

**Rate-limiting (Remote Config)**: free = 3 analyses/day, 10 coach msgs/day; premium = 100 / 200.
Counters in `users/{uid}/usage/{date}` (atomic increment). Over-limit → `429 quotaExceeded` →
paywall.

**Cache**: client-side **pHash**; similar images (Hamming ≤ threshold) return cached result from
`config/nutritionCacheKeys/{pHash}` (TTL 90d). USDA lookups cached 30d.

**Monitoring**: per-call log to BigQuery — `uid(hash)`, `endpoint`, `cacheHit`, `inputTokens`,
`outputTokens`, `imageTiles`, `estCostUSD`, `latencyMs`, `model`, `degraded`. Dashboard: avg
cost/analysis, cache hit-rate, P95 latency, daily burn; alert on budget breach.

---

## 12. Test Strategy + CI/CD

- **Unit** (Swift Testing / XCTest): ViewModels (all four states), calculations (TDEE, macros,
  kcal↔macro validation), AI JSON parsing, Outbox/sync, repositories on in-memory SwiftData.
  Target ≥ **70%** of business logic.
- **AI pipeline on recorded fixtures**: valid / malformed / empty / not-recognized / kcal-mismatch.
  **No real paid calls in CI.**
- **Networking**: `URLProtocol` mocks — retry/backoff/timeout/429 mapping.
- **Snapshot** of key screens in Light/Dark + large Dynamic Type.
- **UITests (smoke)**: onboarding → mock analysis → log → Home updates.

CI (`.github/workflows/ci.yml`): lint (SwiftLint/SwiftFormat) → build → test → coverage gate 70%;
separate backend job (`npm ci && lint && test`).

**Branching**: trunk-based + short-lived feature branches, PR + green CI gate. SemVer; build
number = CI run. TestFlight (internal → external); staging Firebase project separate from prod;
Cloud Functions deployed by a separate pipeline with manual prod approval.

---

## 13. Implementation Roadmap

Each module closes only on the **Definition of Done** (no warnings, lint clean, ≥70% logic tests,
all UI states, no retain cycles, a11y audit, no secrets).

| Stage | Modules | Depends on | Est. |
|---|---|---|---|
| **M0 Foundation** | Workspace, SPM modules, DIContainer, `CoreModels`, `CoreUI` tokens, `CoreConcurrency`, CI, lint | — | 1w |
| **M1 Persistence** | `CorePersistence` (SwiftData, migrations, Outbox), repos + in-memory tests | M0 | 1w |
| **M2 Auth** | Firebase Auth (Apple/Google/Email), Keychain, auth-gate, App Check | M0 | 1w |
| **M3 Onboarding** | 10-step wizard, TDEE/goal calc, save profile | M1,M2 | 1w |
| **M4 Backend BFF** | `/analyzeMeal` `/coachChat`, Secret Manager, rate-limit, pHash cache, USDA enrichment, rules, fixtures | M2 | 2w |
| **M5 NutritionDB** | USDA + OFF + merge, search, barcode | M1 | 1w |
| **M6 Vision + Camera** | `VisionService` (resize/compress/pHash/prescan/segmentation), capture/gallery/live, barcode | M5 | 2w |
| **M7 AI analysis E2E** | `AIGateway` → BFF, Result UI, edit sheet, save→SwiftData→HealthKit, degradation | M4,M6 | 2w |
| **M8 Home + Diary** | Home (rings/water/steps/trend/tip), Diary, favorites/recent/templates, HealthKit read | M1,M7 | 2w |
| **M9 Sync** | Outbox→Firestore, conflict resolve (LWW + updatedAt), Storage upload | M1,M8 | 1w |
| **M10 AI Coach** | Chat UI (stream), RAG aggregates, function calling, weekly report | M4,M8 | 1.5w |
| **M11 Progress** | Swift Charts: calories/weight/macros/BMI/bodyfat/measurements/photo | M8 | 1.5w |
| **M12 Monetization** | RevenueCat, paywall, entitlements, Remote Config limits, A/B | M2,M8 | 1w |
| **M13 Notifications** | Local + push (meal/water/weight/AI), deep-links | M8 | 0.5w |
| **M14 Extensions** | WidgetKit, Live Activity (Dynamic Island), watchOS | M8,M9 | 2w |
| **M15 Polish & Ship** | Analytics events, a11y audit, localization, snapshots, perf, TestFlight → App Store | all | 2w |

Critical path: M0 → M1 → M2 → M4 → M6 → M7 → M8. Roughly **6–7 months** for 1–2 engineers at
this quality bar.
