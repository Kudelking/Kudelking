// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Onboarding",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Onboarding", targets: ["Onboarding"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Onboarding",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "OnboardingTests",
            dependencies: ["Onboarding", "CoreModels"]
        )
    ]
)
