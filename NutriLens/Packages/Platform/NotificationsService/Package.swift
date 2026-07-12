// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "NotificationsService",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "NotificationsService", targets: ["NotificationsService"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels")
    ],
    targets: [
        .target(
            name: "NotificationsService",
            dependencies: ["CoreModels"]
        ),
        .testTarget(
            name: "NotificationsServiceTests",
            dependencies: ["NotificationsService"]
        )
    ]
)
