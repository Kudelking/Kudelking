# 🍽️ NutriLens AI

Production-grade iOS AI nutrition assistant. Photograph food → detect dishes → estimate
portion → compute calories, macros, and micronutrients → auto-log → track → coach.

> **Status:** M0–M3 · M5 nutrition DB · M6 vision · M7 photo analysis · M8 home + diary · M10 AI coach. See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
> for the full system design and the 13-stage roadmap. Code lands module-by-module; each module
> must satisfy the Definition of Done (no warnings, lint clean, ≥70% logic tests, all UI states,
> no retain cycles, a11y audit, no secrets).

## Tech stack

SwiftUI · MVVM (`@Observable`) · Swift 6 concurrency · SwiftData · HealthKit · Vision ·
OpenAI (via a Cloud Functions BFF) · Firebase (Auth / Firestore / Remote Config / Analytics /
Crashlytics) · RevenueCat. Dark/Light, Dynamic Island, Widgets, watchOS.

## Layout

```
App/                     @main, DI container, auth-gated root
Packages/
  Core/CoreModels        domain entities, protocols, errors, nutrition math (+ tests)
  Core/CoreConcurrency   retry/backoff utilities (+ tests)
  Core/CoreUI            design tokens + shared state views
  Core/CorePersistence   SwiftData store, meal repository, Outbox (+ tests)
  Features/Authentication  Apple/Google/Email sign-in, Keychain, session store (+ tests)
  Features/Onboarding    10-step profile wizard, target derivation (+ tests)
Networking/
  APIClient              HTTPClient seam, URLSession impl, retry, mock (+ tests)
  NutritionDB            USDA + OpenFoodFacts + barcode behind NutritionDatabase (+ tests)
  AIGateway              BFF client for /analyzeMeal + /coachChat (+ tests)
Platform/
  VisionService          image prep, perceptual hash, on-device food/barcode recognizer (+ tests)
Features/
  MealCapture            analyze cascade, result screen + editing, save (+ tests)
  Home                   daily summary rings, water/steps, diary by meal type (+ tests)
  AICoach                streaming chat over coachChat, quick prompts (+ tests)
backend/functions        BFF: analyzeMeal (OpenAI + USDA + cache + rate-limit)
backend/firestore.rules  owner-only security rules
docs/ARCHITECTURE.md     full design document
.github/workflows/ci.yml lint + Swift tests + backend tests
```

## Key design guarantees

- **No client secrets.** The OpenAI key lives only in the BFF (GCP Secret Manager).
- **Offline-first.** SwiftData is the UI source of truth; Firestore is sync/backup via an Outbox.
- **Cost-controlled AI.** On-device Vision pre-filter → pHash cache → OpenAI → USDA enrichment.
  Target ≤ $0.03 / photo analysis. Rate limits are Remote-Config driven.
- **Accurate numbers.** AI does *recognition*; USDA provides *nutrition values*.

## Running

- iOS: open the workspace in Xcode 16+ (iOS 17 target). Swift package tests:
  `swift test --package-path Packages/Core/CoreModels`.
- Backend: `cd backend/functions && npm ci && npm test`.

Secrets (`GoogleService-Info.plist`, OpenAI/USDA keys) are provisioned via CI / Secret Manager
and are never committed.
