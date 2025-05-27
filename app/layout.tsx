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
    default: "Accent Walls Pro | #1 Premium Accent Wall Installation in DMV | Wood Slat, Board & Batten, Roman Plaster",
    template: "%s | Accent Walls Pro - Premium Wall Installations DMV",
  },
  description:
    "★★★★★ Top-rated accent wall specialists in DMV. Custom wood slat walls, board & batten, Roman plaster, fireplace build-outs & media walls. Licensed, insured, 5-year warranty. Free quotes in Bethesda, Silver Spring, Rockville, DC, Maryland & Virginia.",
  keywords: [
    "accent walls DMV",
    "wood slat walls Maryland",
    "board and batten installation",
    "Roman plaster contractors",
    "fireplace build-outs DC",
    "media walls Virginia",
    "premium wall installation",
    "interior design contractors",
    "Bethesda accent walls",
    "Silver Spring board batten",
    "Rockville wood slat",
    "Washington DC wall contractors",
    "Montgomery County wall installation",
    "luxury wall finishes",
    "custom accent walls",
    "professional wall contractors",
  ],
  authors: [{ name: "Accent Walls Pro", url: "https://accentwallspro.com" }],
  creator: "Accent Walls Pro",
  publisher: "Accent Walls Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
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
        <Script id="organization-schema" type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Accent Walls Pro",
    "url": "https://accentwallspro.com",
    "logo": "https://accentwallspro.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-240-426-7900",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9811 Bristol Square Ln",
      "addressLocality": "Bethesda",
      "addressRegion": "MD",
      "postalCode": "20814",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61571978974930",
      "https://www.instagram.com/accentwalls.pro/"
    ]
  }
`}
        </Script>
      </body>
    </html>
  )
}
