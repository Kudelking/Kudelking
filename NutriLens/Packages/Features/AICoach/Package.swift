// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "AICoach",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "AICoach", targets: ["AICoach"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "AICoach",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "AICoachTests",
            dependencies: ["AICoach", "CoreModels"]
        )
    ]
)
