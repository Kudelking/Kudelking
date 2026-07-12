// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "MealCapture",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "MealCapture", targets: ["MealCapture"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI"),
        .package(path: "../../Platform/VisionService")
    ],
    targets: [
        .target(
            name: "MealCapture",
            dependencies: ["CoreModels", "CoreUI", "VisionService"]
        ),
        .testTarget(
            name: "MealCaptureTests",
            dependencies: ["MealCapture", "CoreModels", "VisionService"]
        )
    ]
)
