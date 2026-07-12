#!/usr/bin/env bash
# Generate the Xcode project from project.yml and build the app for an iOS Simulator.
# Requires macOS with Xcode 16+ and XcodeGen (`brew install xcodegen`).
set -euo pipefail
cd "$(dirname "$0")/.."

if ! command -v xcodegen >/dev/null 2>&1; then
  echo "XcodeGen not found. Install with: brew install xcodegen"
  exit 1
fi

echo "==> Generating NutriLens.xcodeproj"
xcodegen generate

echo "==> Building for iOS Simulator"
xcodebuild build \
  -project NutriLens.xcodeproj \
  -scheme NutriLens \
  -destination 'platform=iOS Simulator,name=iPhone 16,OS=latest' \
  CODE_SIGNING_ALLOWED=NO

echo "==> Done. Open NutriLens.xcodeproj in Xcode and press Run."
