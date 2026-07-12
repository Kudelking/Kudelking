// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "NutritionDB",
    platforms: [.iOS(.v17), .watchOS(.v10), .macOS(.v14)],
    products: [
        .library(name: "NutritionDB", targets: ["NutritionDB"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../APIClient")
    ],
    targets: [
        .target(
            name: "NutritionDB",
            dependencies: ["CoreModels", "APIClient"]
        ),
        .testTarget(
            name: "NutritionDBTests",
            dependencies: ["NutritionDB", "CoreModels", "APIClient"]
        )
    ]
)
