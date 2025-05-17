import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { DiscountPopup } from "@/components/discount-popup"
import { CallBackWidget } from "@/components/call-back-widget"
import { StickyCta } from "@/components/sticky-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { SocialProofNotification } from "@/components/social-proof-notification"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import Script from "next/script"
import { ImagePreloader } from "@/components/image-preloader"

const inter = Inter({ subsets: ["latin"] })

// Добавьте массив критических изображений
const criticalImages = [
  "/logo.png",
  "/modern-fireplace-buildout.png",
  "/tv-media-wall.png",
  "/bedroom-wood-slat-wall.png",
  "/geometric-accent-wall.png",
  "/full-wall-board-and-batten.png",
  "/elegant-board-and-batten.png",
  "/modern-wood-slat-wall.png",
]

export const metadata = {
  title: {
    default: "Accent Walls Pro | Premium Accent Wall Installation in DMV",
    template: "%s | Accent Walls Pro",
  },
  description:
    "Transform your space with custom accent walls, board & batten, wood slat walls, fireplaces & media walls. Licensed & insured professionals serving the DMV area.",
  keywords: [
    "accent walls",
    "board and batten",
    "wood slat walls",
    "fireplace build-outs",
    "media walls",
    "DMV",
    "Washington DC",
    "Maryland",
    "Virginia",
    "home improvement",
    "interior design",
  ],
  authors: [{ name: "Accent Walls Pro" }],
  creator: "Accent Walls Pro",
  publisher: "Accent Walls Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://accentwallspro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://accentwallspro.com",
    title: "Accent Walls Pro | Premium Accent Wall Installation in DMV",
    description: "Transform your space with custom accent walls, board & batten, wood slat walls, and more.",
    siteName: "Accent Walls Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Accent Walls Pro - Premium Wall Installations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accent Walls Pro | Premium Accent Wall Installation in DMV",
    description: "Transform your space with custom accent walls, board & batten, wood slat walls, and more.",
    images: ["/og-image.jpg"],
    creator: "@accentwallspro",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <MainNav />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <CallBackWidget />
          <DiscountPopup />
          <StickyCta />
          <ExitIntentPopup />
          <SocialProofNotification />
          <ImagePreloader images={criticalImages} />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
