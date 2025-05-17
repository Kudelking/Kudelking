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
  title: "Accent Wall Installation in Rockville, MD | Media Walls & Board and Batten",
  description:
    "Premium accent wall installation in Rockville, MD. Serving King Farm, Fallsgrove, Twinbrook, and all Rockville neighborhoods with custom media walls, board & batten, and wood slat walls.",
  keywords: [
    "accent walls Rockville",
    "media walls Rockville",
    "board and batten Rockville",
    "wood slat walls Rockville",
    "King Farm accent walls",
    "Fallsgrove accent walls",
    "Twinbrook accent walls",
    "Rockville interior design",
    "Rockville home improvement",
    "accent wall contractor Rockville",
  ],
}

export default function RockvillePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="rockville-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Accent Walls Pro - Rockville",
            "image": "https://accentwallspro.com/logo.png",
            "url": "https://accentwallspro.com/locations/rockville",
            "telephone": "240-426-7900",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "9811 Bristol Square Ln",
              "addressLocality": "Bethesda",
              "addressRegion": "MD",
              "postalCode": "20814",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": "Rockville",
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
              src="/placeholder.svg?height=600&width=1920&query=rockville maryland home with modern media wall"
              alt="Premium Accent Walls in Rockville, MD"
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
                <span>Rockville</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Premium Accent Walls in Rockville, MD
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Transform your Rockville home with custom accent walls, media walls, board & batten, and wood slat
                features. Serving all Rockville neighborhoods including King Farm, Fallsgrove, Twinbrook, and beyond.
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
                  <Link href="#portfolio">View Rockville Projects</Link>
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
                  Rockville's Premier Accent Wall Specialists
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  At Accent Walls Pro, we've been transforming Rockville homes with custom accent walls for over 3
                  years. Our team understands the unique architectural styles and design preferences in Rockville
                  neighborhoods, from the newer communities of King Farm and Fallsgrove to established neighborhoods
                  like Twinbrook and East Rockville.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Local Rockville Expertise</h3>
                      <p className="text-muted-foreground">
                        Our team has extensive experience working in Rockville homes and understands local building
                        codes and permit requirements.
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
                        We use only the highest quality materials that ensure durability and beauty in your Rockville
                        home.
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
                        Each accent wall is custom designed to complement your Rockville home's unique architecture and
                        your personal style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=rockville maryland home interior with media wall"
                  alt="Custom Media Wall in Rockville Home"
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Popular Accent Wall Styles in Rockville</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover the accent wall styles that Rockville homeowners are choosing to elevate their spaces.
              </p>
            </div>
            <Tabs defaultValue="media-walls" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="media-walls">Media Walls</TabsTrigger>
                  <TabsTrigger value="board-batten">Board & Batten</TabsTrigger>
                  <TabsTrigger value="wood-slat">Wood Slat Walls</TabsTrigger>
                  <TabsTrigger value="fireplace">Fireplace Surrounds</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="media-walls">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=modern media wall in rockville maryland home"
                      alt="Media Wall in Rockville Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Media Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Media walls have become the must-have accent wall in Rockville, particularly in King Farm and
                      Fallsgrove communities. These functional focal points combine entertainment needs with stylish
                      design, often incorporating the TV, storage, and decorative elements in one cohesive unit.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Rockville homeowners are investing in media walls that blend technology with design. We're
                      creating walls with integrated cable management, floating shelves, and often incorporating wood
                      slats or geometric patterns around the TV area for added visual interest.
                    </p>
                    <Button asChild>
                      <Link href="/services/media-walls">Learn More About Media Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="board-batten">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=board and batten accent wall in rockville maryland home"
                      alt="Board and Batten Wall in Rockville Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Board & Batten Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Board and batten accent walls add architectural interest and a touch of traditional elegance to
                      Rockville homes. This style is particularly popular in established neighborhoods like Twinbrook
                      and East Rockville, where traditional home styles predominate.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      In Rockville, we're seeing a trend toward both full-height and half-height board and batten
                      installations in dining rooms, entryways, and living spaces. Many Rockville homeowners are
                      choosing neutral colors for their board and batten walls, creating a timeless look that
                      complements a variety of interior design styles.
                    </p>
                    <Button asChild>
                      <Link href="/services/board-and-batten">Learn More About Board & Batten</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="wood-slat">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=wood slat accent wall in rockville maryland home"
                      alt="Wood Slat Wall in Rockville Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Wood Slat Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Wood slat walls are gaining popularity in Rockville, especially in newer homes and renovated
                      properties. These dimensional walls add warmth, texture, and a touch of modern organic style to
                      living rooms, primary bedrooms, and home offices.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      In Rockville, we're seeing a trend toward both natural wood finishes and painted wood slat walls.
                      Many homeowners are choosing to incorporate wood slat elements into media walls and fireplace
                      surrounds for added texture and visual interest.
                    </p>
                    <Button asChild>
                      <Link href="/services/accent-walls">Learn More About Wood Slat Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="fireplace">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=modern fireplace surround in rockville maryland home"
                      alt="Fireplace Surround in Rockville Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Fireplace Surrounds</h3>
                    <p className="text-muted-foreground mb-6">
                      In Rockville's single-family homes, particularly in neighborhoods like Fallsgrove and King Farm,
                      fireplace surrounds have become elaborate accent walls in their own right. These floor-to-ceiling
                      features often combine stone, wood, and metal elements.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Rockville homeowners are investing in dramatic fireplace surrounds that make a statement. We're
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Rockville Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed accent walls in Rockville homes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Media Wall"
                location="King Farm, Rockville"
                image="/placeholder.svg?height=400&width=600&query=modern media wall in king farm rockville home"
              />
              <ProjectCard
                title="Board & Batten Dining Room"
                location="Twinbrook, Rockville"
                image="/placeholder.svg?height=400&width=600&query=board and batten dining room in rockville maryland"
              />
              <ProjectCard
                title="Wood Slat Feature Wall"
                location="Fallsgrove, Rockville"
                image="/placeholder.svg?height=400&width=600&query=wood slat feature wall in fallsgrove rockville"
              />
              <ProjectCard
                title="Luxury Fireplace Surround"
                location="West End, Rockville"
                image="/placeholder.svg?height=400&width=600&query=luxury fireplace surround in rockville maryland home"
              />
              <ProjectCard
                title="Geometric Accent Wall"
                location="Town Center, Rockville"
                image="/placeholder.svg?height=400&width=600&query=geometric accent wall in rockville town center"
              />
              <ProjectCard
                title="Primary Bedroom Feature Wall"
                location="East Rockville"
                image="/placeholder.svg?height=400&width=600&query=primary bedroom feature wall in east rockville"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?location=rockville">View All Rockville Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Rockville Homeowners Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from your neighbors in Rockville who love their new accent walls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="The media wall they built in our King Farm home completely transformed our family room. The built-in shelving and clean cable management make it look like a magazine feature!"
                author="Robert & Lisa M."
                location="King Farm, Rockville"
                rating={5}
              />
              <TestimonialCard
                quote="We love our new board and batten accent wall in our dining room. The team at Accent Walls Pro was professional, efficient, and the result is stunning!"
                author="Thomas W."
                location="Twinbrook, Rockville"
                rating={5}
              />
              <TestimonialCard
                quote="The wood slat feature wall they installed in our Fallsgrove home adds so much warmth and texture to our living room. Excellent craftsmanship and attention to detail."
                author="Emily J."
                location="Fallsgrove, Rockville"
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
                <span className="font-medium">4.9 out of 5 based on 18+ Rockville reviews</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Rockville Neighborhoods We Serve</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide premium accent wall installation services throughout all Rockville neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">King Farm</h3>
                  <p className="text-muted-foreground">
                    Serving King Farm's modern homes with premium media walls, wood slat features, and custom accent
                    walls.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Fallsgrove</h3>
                  <p className="text-muted-foreground">
                    Providing Fallsgrove homes with elegant board & batten, wood slat walls, and fireplace surrounds.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Twinbrook</h3>
                  <p className="text-muted-foreground">
                    Enhancing Twinbrook homes with traditional and transitional accent wall designs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Town Center</h3>
                  <p className="text-muted-foreground">
                    Creating contemporary accent walls and media features for Town Center condos and apartments.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">East Rockville</h3>
                  <p className="text-muted-foreground">
                    Installing board & batten, wood slat walls, and other accent features in East Rockville residences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">West End</h3>
                  <p className="text-muted-foreground">
                    Providing West End homes with custom accent walls that complement their unique architecture.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                We also serve Rockville neighborhoods including Lincoln Park, Hungerford, Rockshire, and all surrounding
                areas.
              </p>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Transform Your Rockville Home?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Contact us today for a free consultation and quote for your accent wall project in Rockville.
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
                      <h3 className="text-lg font-medium">Serving All of Rockville</h3>
                      <p className="text-muted-foreground">
                        We provide in-home consultations throughout Rockville and all surrounding areas.
                      </p>
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
