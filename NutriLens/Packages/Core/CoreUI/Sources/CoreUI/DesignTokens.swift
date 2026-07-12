import SwiftUI

/// Semantic design tokens. Colors adapt to Light/Dark automatically; spacing and radii are
/// centralized so the whole app stays visually consistent. Never hard-code colors in features.
public enum Theme {

    public enum Colors {
        // Defined programmatically (no asset catalog) so CoreUI needs no bundle resources.
        // When brand assets land in M15, swap these for named colors from an asset catalog.
        public static let accent = Color(red: 0.20, green: 0.78, blue: 0.45)   // brand green
        public static let background = Color(uiColor: .systemBackground)
        public static let secondaryBackground = Color(uiColor: .secondarySystemBackground)
        public static let card = Color(uiColor: .secondarySystemGroupedBackground)
        public static let primaryText = Color(uiColor: .label)
        public static let secondaryText = Color(uiColor: .secondaryLabel)
        public static let separator = Color(uiColor: .separator)

        // Macro-specific colors, chosen for contrast against the card background in both schemes.
        public static let protein = Color(red: 0.31, green: 0.51, blue: 0.96)  // blue
        public static let carbs = Color(red: 0.96, green: 0.62, blue: 0.24)    // amber
        public static let fat = Color(red: 0.86, green: 0.36, blue: 0.62)      // magenta
        public static let calories = accent
        public static let warning = Color(uiColor: .systemOrange)
        public static let danger = Color(uiColor: .systemRed)
    }

    public enum Spacing {
        public static let xs: CGFloat = 4
        public static let sm: CGFloat = 8
        public static let md: CGFloat = 16
        public static let lg: CGFloat = 24
        public static let xl: CGFloat = 32
    }

    public enum Radius {
        public static let sm: CGFloat = 8
        public static let md: CGFloat = 16
        public static let lg: CGFloat = 24
        public static let pill: CGFloat = 999
    }

    public enum Typography {
        // Dynamic Type friendly — always relative to the user's preferred size.
        public static let largeTitle = Font.largeTitle.weight(.bold)
        public static let title = Font.title2.weight(.semibold)
        public static let headline = Font.headline
        public static let body = Font.body
        public static let caption = Font.caption
        public static let metric = Font.system(.title, design: .rounded).weight(.bold)
    }

    /// Standard animation that automatically collapses when Reduce Motion is on.
    public static func motion(_ animation: Animation = .snappy,
                              reduceMotion: Bool) -> Animation? {
        reduceMotion ? nil : animation
    }
}
