import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle, Star, Phone, MapPin } from "lucide-react"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Accent Wall Installation in Bethesda, MD | Wood Slat & Board and Batten Walls",
  description:
    "Premium accent wall installation in Bethesda, MD. Serving Edgemoor, Chevy Chase, Downtown Bethesda, and all Bethesda neighborhoods with custom wood slat walls, board & batten, and media walls.",
  keywords: [
    "accent walls Bethesda",
    "wood slat walls Bethesda",
    "board and batten Bethesda",
    "media walls Bethesda",
    "Edgemoor accent walls",
    "Chevy Chase accent walls",
    "Downtown Bethesda accent walls",
    "Bethesda interior design",
    "Bethesda home improvement",
    "accent wall contractor Bethesda",
  ],
}

export default function BethesdaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="bethesda-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Accent Walls Pro - Bethesda",
            "image": "https://accentwallspro.com/logo.png",
            "url": "https://accentwallspro.com/locations/bethesda",
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
            "areaServed": {
              "@type": "City",
              "name": "Bethesda",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Montgomery County"
              }
            },
            "priceRange": "$$",
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
            ]
          }
        `}
      </Script>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?key=okpb0"
              alt="Premium Accent Walls in Bethesda, MD"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-4 text-sm text-white/80">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/locations" className="hover:text-white">
                  Locations
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Bethesda</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Premium Accent Walls in Bethesda, MD
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Transform your Bethesda home with custom accent walls, wood slat features, board & batten, and media
                walls. Serving all Bethesda neighborhoods including Edgemoor, Chevy Chase, Downtown Bethesda, and
                beyond.
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
                  <Link href="#portfolio">View Bethesda Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Bethesda's Premier Accent Wall Specialists
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  At Accent Walls Pro, we've been transforming Bethesda homes with custom accent walls for over 3 years.
                  Our team understands the unique architectural styles and design preferences in Bethesda neighborhoods,
                  from the classic homes of Edgemoor to the modern condos of Downtown Bethesda.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Local Bethesda Expertise</h3>
                      <p className="text-muted-foreground">
                        Our team has extensive experience working in Bethesda homes and understands local building codes
                        and permit requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Premium Materials</h3>
                      <p className="text-muted-foreground">
                        We use only the highest quality materials that meet Bethesda's discerning standards for luxury
                        home improvements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Custom Designs</h3>
                      <p className="text-muted-foreground">
                        Each accent wall is custom designed to complement your Bethesda home's unique architecture and
                        your personal style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?key=ptpjs"
                  alt="Custom Wood Slat Accent Wall in Bethesda Home"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Accent Wall Styles in Bethesda</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover the accent wall styles that Bethesda homeowners are choosing to elevate their spaces.
              </p>
            </div>
            <Tabs defaultValue="wood-slat" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="wood-slat">Wood Slat Walls</TabsTrigger>
                  <TabsTrigger value="board-batten">Board & Batten</TabsTrigger>
                  <TabsTrigger value="media-walls">Media Walls</TabsTrigger>
                  <TabsTrigger value="fireplace">Fireplace Surrounds</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="wood-slat">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?key=myjm8"
                      alt="Wood Slat Accent Wall in Bethesda Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Wood Slat Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Wood slat walls are particularly popular in Bethesda's Edgemoor and Chevy Chase neighborhoods.
                      These dimensional walls add warmth, texture, and a touch of modern organic style to living rooms,
                      primary bedrooms, and home offices.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Bethesda homeowners are gravitating toward walnut and oak wood slat walls with varying slat widths
                      for added visual interest. We're also installing integrated lighting between slats, which creates
                      a stunning effect in the evening.
                    </p>
                    <Button asChild>
                      <Link href="/services/accent-walls">Learn More About Wood Slat Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="board-batten">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?key=kienf"
                      alt="Board and Batten Wall in Bethesda Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Board & Batten Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Board and batten accent walls add architectural interest and a touch of traditional elegance to
                      Bethesda homes. This style is particularly popular in the Bradley Hills and Wyngate neighborhoods,
                      where traditional home styles predominate.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      In Bethesda, we're seeing a trend toward both full-height and half-height board and batten
                      installations in dining rooms, entryways, and living spaces. Many Bethesda homeowners are choosing
                      deep, moody colors like navy, forest green, and charcoal for their board and batten walls.
                    </p>
                    <Button asChild>
                      <Link href="/services/board-and-batten">Learn More About Board & Batten</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="media-walls">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?key=hs35c"
                      alt="Media Wall in Bethesda Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Media Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Media walls have become increasingly popular in Bethesda, particularly in Downtown Bethesda condos
                      and newer homes in the Woodmont Triangle area. These functional focal points combine entertainment
                      needs with stylish design.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Bethesda homeowners are investing in media walls that blend technology with design. We're creating
                      walls with integrated cable management, floating shelves, and often incorporating wood slats or
                      geometric patterns around the TV area for added visual interest.
                    </p>
                    <Button asChild>
                      <Link href="/services/media-walls">Learn More About Media Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="fireplace">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=modern fireplace surround in bethesda maryland home"
                      alt="Fireplace Surround in Bethesda Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Fireplace Surrounds</h3>
                    <p className="text-muted-foreground mb-6">
                      In Bethesda's luxury homes, particularly in neighborhoods like Edgemoor and Bradley Hills,
                      fireplace surrounds have become elaborate accent walls in their own right. These floor-to-ceiling
                      features often combine stone, wood, and metal elements.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Bethesda homeowners are investing in dramatic fireplace surrounds that make a statement. We're
                      designing surrounds with integrated shelving, hidden storage, and mixed materials like marble,
                      wood slats, and metal accents to create stunning focal points in living rooms and family rooms.
                    </p>
                    <Button asChild>
                      <Link href="/services/fireplace-buildouts">Learn More About Fireplace Surrounds</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Bethesda Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed accent walls in Bethesda homes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Wood Slat Wall"
                location="Edgemoor, Bethesda"
                image="/placeholder.svg?height=400&width=600&query=modern wood slat wall in edgemoor bethesda home"
              />
              <ProjectCard
                title="Navy Board & Batten Dining Room"
                location="Bradley Hills, Bethesda"
                image="/placeholder.svg?height=400&width=600&query=navy board and batten dining room in bethesda home"
              />
              <ProjectCard
                title="Contemporary Media Wall"
                location="Downtown Bethesda"
                image="/placeholder.svg?height=400&width=600&query=contemporary media wall in downtown bethesda condo"
              />
              <ProjectCard
                title="Luxury Fireplace Surround"
                location="Chevy Chase, Bethesda"
                image="/placeholder.svg?height=400&width=600&query=luxury fireplace surround in chevy chase bethesda home"
              />
              <ProjectCard
                title="Geometric Accent Wall"
                location="Woodmont Triangle, Bethesda"
                image="/placeholder.svg?height=400&width=600&query=geometric accent wall in bethesda maryland home"
              />
              <ProjectCard
                title="Primary Bedroom Feature Wall"
                location="Wyngate, Bethesda"
                image="/placeholder.svg?height=400&width=600&query=primary bedroom feature wall in bethesda maryland"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?location=bethesda">View All Bethesda Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Bethesda Homeowners Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from your neighbors in Bethesda who love their new accent walls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Accent Walls Pro transformed our Edgemoor home with a stunning wood slat wall in our living room. The team was professional, clean, and completed the project ahead of schedule!"
                author="Jennifer K."
                location="Edgemoor, Bethesda"
                rating={5}
              />
              <TestimonialCard
                quote="We couldn't be happier with our new board and batten accent wall in our dining room. The navy color is perfect, and the attention to detail was impressive."
                author="Michael S."
                location="Bradley Hills, Bethesda"
                rating={5}
              />
              <TestimonialCard
                quote="The media wall they built in our Downtown Bethesda condo completely transformed our living space. The built-in shelving and clean cable management make it look like a magazine feature!"
                author="David & Sarah L."
                location="Downtown Bethesda"
                rating={5}
              />
            </div>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium">4.9 out of 5 based on 25+ Bethesda reviews</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bethesda Neighborhoods We Serve</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide premium accent wall installation services throughout all Bethesda neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Edgemoor</h3>
                  <p className="text-muted-foreground">
                    Serving Edgemoor's luxury homes with premium accent walls, wood slat features, and custom fireplace
                    surrounds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Chevy Chase</h3>
                  <p className="text-muted-foreground">
                    Providing Chevy Chase homes with elegant board & batten, limewash walls, and media wall
                    installations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Downtown Bethesda</h3>
                  <p className="text-muted-foreground">
                    Creating contemporary accent walls and media features for Downtown Bethesda condos and apartments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Bradley Hills</h3>
                  <p className="text-muted-foreground">
                    Enhancing Bradley Hills homes with traditional and transitional accent wall designs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Woodmont Triangle</h3>
                  <p className="text-muted-foreground">
                    Installing modern accent walls and space-maximizing features in Woodmont Triangle residences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Wyngate</h3>
                  <p className="text-muted-foreground">
                    Providing Wyngate homes with custom accent walls that complement traditional architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                We also serve Bethesda neighborhoods including Glen Echo Heights, Bannockburn, Westmoreland Hills,
                Sumner, Wood Acres, Kenwood Park, and all surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Transform Your Bethesda Home?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Contact us today for a free consultation and quote for your accent wall project in Bethesda.
                </p>
                <div className="mt-8 grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Call Us Directly</h3>
                      <p className="text-muted-foreground">
                        <Link href="tel:2404267900" className="hover:underline">
                          240-426-7900
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Our Bethesda Location</h3>
                      <p className="text-muted-foreground">9811 Bristol Square Ln, Bethesda, MD 20814</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <QuoteForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
