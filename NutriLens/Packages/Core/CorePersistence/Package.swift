// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "CorePersistence",
    platforms: [.iOS(.v17), .watchOS(.v10), .macOS(.v14)],
    products: [
        .library(name: "CorePersistence", targets: ["CorePersistence"])
    ],
    dependencies: [
        .package(path: "../CoreModels")
    ],
    targets: [
        .target(
            name: "CorePersistence",
            dependencies: ["CoreModels"]
        ),
        .testTarget(
            name: "CorePersistenceTests",
            dependencies: ["CorePersistence", "CoreModels"]
        )
    ]
)
