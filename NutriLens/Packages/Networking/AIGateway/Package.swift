// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "AIGateway",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [
        .library(name: "AIGateway", targets: ["AIGateway"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../APIClient")
    ],
    targets: [
        .target(
            name: "AIGateway",
            dependencies: ["CoreModels", "APIClient"]
        ),
        .testTarget(
            name: "AIGatewayTests",
            dependencies: ["AIGateway", "CoreModels", "APIClient"]
        )
    ]
)
