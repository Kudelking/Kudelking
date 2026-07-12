import SwiftUI
import CoreUI

/// The paywall: premium benefits, subscription options, purchase + restore.
public struct PaywallView: View {
    @State private var model: PaywallViewModel
    private let onClose: () -> Void

    public init(model: PaywallViewModel, onClose: @escaping () -> Void = {}) {
        _model = State(initialValue: model)
        self.onClose = onClose
    }

    public var body: some View {
        VStack(spacing: Theme.Spacing.lg) {
            header
            benefits
            Spacer(minLength: 0)
            switch model.phase {
            case .loading:
                ProgressView()
            case let .failed(message):
                Text(message).font(Theme.Typography.caption).foregroundStyle(Theme.Colors.danger)
                products
            default:
                products
            }
            purchaseButton
            restoreButton
        }
        .padding(Theme.Spacing.lg)
        .task { await model.load() }
        .onChange(of: model.phase) { if model.phase == .purchased { onClose() } }
        .overlay(alignment: .topTrailing) {
            Button { onClose() } label: { Image(systemName: "xmark.circle.fill") }
                .foregroundStyle(Theme.Colors.secondaryText)
                .padding(Theme.Spacing.md)
        }
    }

    private var header: some View {
        VStack(spacing: Theme.Spacing.sm) {
            Image(systemName: "crown.fill").font(.system(size: 48))
                .foregroundStyle(Theme.Colors.accent)
            Text("NutriLens Premium").font(Theme.Typography.largeTitle)
            Text("Unlock the full experience").font(Theme.Typography.body)
                .foregroundStyle(Theme.Colors.secondaryText)
        }
        .padding(.top, Theme.Spacing.xl)
    }

    private var benefits: some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.sm) {
            ForEach(model.benefits, id: \.self) { benefit in
                Label(benefit.rawValue, systemImage: "checkmark.circle.fill")
                    .foregroundStyle(Theme.Colors.primaryText)
            }
        }
        .frame(maxWidth: .infinity, alignment: .leading)
    }

    private var products: some View {
        VStack(spacing: Theme.Spacing.sm) {
            ForEach(model.products) { product in
                Button {
                    model.selectedProductID = product.id
                } label: {
                    HStack {
                        VStack(alignment: .leading) {
                            Text(product.title).font(Theme.Typography.headline)
                            Text("\(product.priceString) / \(product.period)")
                                .font(Theme.Typography.caption)
                                .foregroundStyle(Theme.Colors.secondaryText)
                        }
                        Spacer()
                        if product.isBestValue {
                            Text("Best value").font(Theme.Typography.caption)
                                .padding(.horizontal, Theme.Spacing.sm)
                                .padding(.vertical, 2)
                                .background(Theme.Colors.accent.opacity(0.2), in: Capsule())
                        }
                        Image(systemName: model.selectedProductID == product.id
                              ? "largecircle.fill.circle" : "circle")
                            .foregroundStyle(Theme.Colors.accent)
                    }
                    .padding(Theme.Spacing.md)
                    .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
                }
                .foregroundStyle(Theme.Colors.primaryText)
            }
        }
    }

    private var purchaseButton: some View {
        Button {
            Task { await model.purchaseSelected() }
        } label: {
            Group {
                if model.phase == .purchasing {
                    ProgressView().tint(.white)
                } else {
                    Text("Continue")
                }
            }
            .frame(maxWidth: .infinity, minHeight: 50)
        }
        .buttonStyle(.borderedProminent)
        .disabled(model.selectedProductID == nil || model.phase == .purchasing)
    }

    private var restoreButton: some View {
        Button("Restore purchases") { Task { await model.restore() } }
            .font(Theme.Typography.caption)
    }
}
