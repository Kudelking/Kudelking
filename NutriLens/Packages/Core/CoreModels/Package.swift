// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "CoreModels",
    platforms: [.iOS(.v17), .watchOS(.v10), .macOS(.v14)],
    products: [
        .library(name: "CoreModels", targets: ["CoreModels"])
    ],
    targets: [
        .target(
            name: "CoreModels",
            swiftSettings: [.enableExperimentalFeature("StrictConcurrency")]
        ),
        .testTarget(
            name: "CoreModelsTests",
            dependencies: ["CoreModels"]
        )
    ]
)
