// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "VisionService",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "VisionService", targets: ["VisionService"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels")
    ],
    targets: [
        .target(
            name: "VisionService",
            dependencies: ["CoreModels"]
        ),
        .testTarget(
            name: "VisionServiceTests",
            dependencies: ["VisionService"]
        )
    ]
)
