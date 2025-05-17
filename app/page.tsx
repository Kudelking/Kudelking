import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { PromoBanner } from "@/components/promo-banner"
import { TrustBadges } from "@/components/trust-badges"
// Удаляем импорт DiscountPopup, если он есть
// import { DiscountPopup } from "@/components/discount-popup"

// Добавьте константу для URL изображения Roman Plaster
const ROMAN_PLASTER_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"

export const metadata = {
  title: "Accent Walls Pro | Premium Accent Wall Installation in Montgomery County, DC & Maryland",
  description:
    "Transform your space with custom accent walls, board & batten, wood slat walls, fireplaces & media walls. Licensed & insured professionals serving Montgomery County, Silver Spring, Bethesda, Rockville, and throughout the DMV area.",
  keywords: [
    "accent walls",
    "board and batten",
    "wood slat walls",
    "fireplace build-outs",
    "media walls",
    "Montgomery County",
    "Silver Spring",
    "Bethesda",
    "Rockville",
    "North Bethesda",
    "Chevy Chase",
    "Washington DC",
    "Maryland",
    "accent walls Montgomery County",
    "board and batten Silver Spring",
    "wood slat walls Bethesda",
    "accent walls Rockville",
    "media walls Chevy Chase",
    "fireplace buildouts DC",
  ],
  openGraph: {
    title: "Accent Walls Pro | Premium Accent Wall Installation in Montgomery County, DC & Maryland",
    description:
      "Transform your space with custom accent walls, board & batten, wood slat walls, fireplaces & media walls. Licensed & insured professionals serving Montgomery County, Silver Spring, Bethesda, Rockville, and throughout the DMV area.",
    url: "https://accentwallspro.com",
    siteName: "Accent Walls Pro",
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="local-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Accent Walls Pro",
            "image": "https://accentwallspro.com/logo.png",
            "url": "https://accentwallspro.com",
            "telephone": "240-426-7900",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9811 Bristol Square Ln",
              "addressLocality": "Bethesda",
              "addressRegion": "MD",
              "postalCode": "20814",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.0299,
              "longitude": -77.1003
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/accentwallspro",
              "https://www.instagram.com/accentwallspro"
            ],
            "priceRange": "$$"
          }
        `}
      </Script>
      <PromoBanner />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/wood-slat-living-room.png"
              alt="Premium Accent Walls in DMV Area"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your Space With Premium Accent Walls
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Elevate your home with custom accent walls, board & batten, wood slat walls, fireplaces & media walls.
                Serving Washington DC, Maryland & Virginia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#quote">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Bonded</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>3+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Остальные секции остаются без изменений */}
        {/* ... */}

        {/* Trust Badges Section */}
        <section className="py-8">
          <TrustBadges />
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Premium Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We specialize in transforming ordinary walls into extraordinary focal points that elevate your entire
                space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-full">
                <ServiceCard
                  title="Accent Walls"
                  description="Modern geometric designs, wood slat walls, and custom patterns to transform any room."
                  icon="/geometric-accent-wall.png"
                  link="/services/accent-walls"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Board & Batten"
                  description="Traditional full wall and half wall designs that add dimension and character."
                  icon="/board-and-batten-shelf.png"
                  link="/services/board-and-batten"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Roman Plaster"
                  description="Luxurious, timeless finishes with depth and texture inspired by ancient techniques."
                  icon={ROMAN_PLASTER_IMAGE}
                  link="/services/roman-plaster"
                  fallbackIcon={ROMAN_PLASTER_IMAGE}
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Wood Slat Walls"
                  description="Modern vertical and horizontal wood slat designs for warmth and texture."
                  icon="/bedroom-wood-slat-wall.png"
                  link="/services/accent-walls/wood-slat"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Fireplace Build-Outs"
                  description="Slim line designs, floor-to-ceiling fireplaces, and integrated shelving."
                  icon="/modern-fireplace-buildout.png"
                  link="/services/fireplace-buildouts"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="TV Media Walls"
                  description="Floating media units and built-in surround systems for entertainment spaces."
                  icon="/tv-media-wall.png"
                  link="/services/media-walls"
                />
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services" className="flex items-center gap-2">
                  View All Services
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Остальные секции остаются без изменений */}
        {/* ... */}
      </main>
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full shadow-lg flex items-center gap-2" asChild>
          <Link href="https://wa.me/12404267900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Chat Now
          </Link>
        </Button>
      </div>
      {/* Удаляем компонент DiscountPopup, если он есть */}
      {/* <DiscountPopup /> */}
    </div>
  )
}
