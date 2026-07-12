import SwiftUI
import AuthenticationServices
import CoreUI

/// The unauthenticated entry screen: brand, Sign in with Apple, optional Google, and an
/// email/password form that toggles between sign-in and registration.
public struct WelcomeView: View {
    @State private var model: AuthViewModel
    @Environment(\.colorScheme) private var colorScheme

    public init(model: AuthViewModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        ScrollView {
            VStack(spacing: Theme.Spacing.lg) {
                header
                providerButtons
                divider
                emailForm
                modeToggle
                if let errorMessage = model.errorMessage {
                    Text(errorMessage)
                        .font(Theme.Typography.caption)
                        .foregroundStyle(Theme.Colors.danger)
                        .multilineTextAlignment(.center)
                        .transition(.opacity)
                }
            }
            .padding(Theme.Spacing.lg)
            .frame(maxWidth: 480)
            .frame(maxWidth: .infinity)
        }
        .scrollBounceBehavior(.basedOnSize)
        .overlay { if model.isLoading { loadingOverlay } }
        .animation(.default, value: model.errorMessage)
        .disabled(model.isLoading)
    }

    private var header: some View {
        VStack(spacing: Theme.Spacing.sm) {
            Image(systemName: "fork.knife.circle.fill")
                .font(.system(size: 64))
                .foregroundStyle(Theme.Colors.accent)
                .accessibilityHidden(true)
            Text("NutriLens")
                .font(Theme.Typography.largeTitle)
            Text("Snap a photo. Know your nutrition.")
                .font(Theme.Typography.body)
                .foregroundStyle(Theme.Colors.secondaryText)
                .multilineTextAlignment(.center)
        }
        .padding(.top, Theme.Spacing.xl)
    }

    private var providerButtons: some View {
        VStack(spacing: Theme.Spacing.sm) {
            SignInWithAppleButton(.continue) { request in
                model.configure(request)
            } onCompletion: { result in
                Task { await model.handleAppleCompletion(result) }
            }
            .signInWithAppleButtonStyle(colorScheme == .dark ? .white : .black)
            .frame(height: 50)
            .clipShape(RoundedRectangle(cornerRadius: Theme.Radius.md))

            if model.showsGoogle {
                Button {
                    Task { await model.signInWithGoogle() }
                } label: {
                    Label("Continue with Google", systemImage: "g.circle.fill")
                        .frame(maxWidth: .infinity, minHeight: 50)
                }
                .buttonStyle(.bordered)
                .clipShape(RoundedRectangle(cornerRadius: Theme.Radius.md))
            }
        }
    }

    private var divider: some View {
        HStack {
            line; Text("or").font(Theme.Typography.caption)
                .foregroundStyle(Theme.Colors.secondaryText); line
        }
    }

    private var line: some View { Rectangle().fill(Theme.Colors.separator).frame(height: 1) }

    private var emailForm: some View {
        VStack(spacing: Theme.Spacing.sm) {
            TextField("Email", text: $model.email)
                .textContentType(.emailAddress)
                .keyboardType(.emailAddress)
                .textInputAutocapitalization(.never)
                .autocorrectionDisabled()
            SecureField("Password", text: $model.password)
                .textContentType(model.mode == .signIn ? .password : .newPassword)
            Button {
                Task { await model.submitEmail() }
            } label: {
                Text(model.submitTitle).frame(maxWidth: .infinity, minHeight: 50)
            }
            .buttonStyle(.borderedProminent)
        }
        .textFieldStyle(.roundedBorder)
    }

    private var modeToggle: some View {
        Button(model.mode == .signIn ? "New here? Create an account"
                                     : "Already have an account? Sign in") {
            model.toggleMode()
        }
        .font(Theme.Typography.caption)
    }

    private var loadingOverlay: some View {
        ZStack {
            Color.black.opacity(0.2).ignoresSafeArea()
            ProgressView().controlSize(.large)
        }
        .accessibilityLabel("Signing in")
    }
}
