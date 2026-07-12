// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "APIClient",
    platforms: [.iOS(.v17), .watchOS(.v10), .macOS(.v14)],
    products: [
        .library(name: "APIClient", targets: ["APIClient"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreConcurrency")
    ],
    targets: [
        .target(
            name: "APIClient",
            dependencies: ["CoreModels", "CoreConcurrency"]
        ),
        .testTarget(
            name: "APIClientTests",
            dependencies: ["APIClient", "CoreModels"]
        )
    ]
)
