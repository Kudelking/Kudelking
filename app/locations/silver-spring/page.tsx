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
  title: "Accent Wall Installation in Silver Spring, MD | Board & Batten and Wood Slat Walls",
  description:
    "Premium accent wall installation in Silver Spring, MD. Serving Downtown Silver Spring, Four Corners, Woodside Park, and all Silver Spring neighborhoods with custom board & batten, wood slat walls, and media walls.",
  keywords: [
    "accent walls Silver Spring",
    "board and batten Silver Spring",
    "wood slat walls Silver Spring",
    "media walls Silver Spring",
    "Downtown Silver Spring accent walls",
    "Four Corners accent walls",
    "Woodside Park accent walls",
    "Silver Spring interior design",
    "Silver Spring home improvement",
    "accent wall contractor Silver Spring",
  ],
}

export default function SilverSpringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="silver-spring-business-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Accent Walls Pro - Silver Spring",
            "image": "https://accentwallspro.com/logo.png",
            "url": "https://accentwallspro.com/locations/silver-spring",
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
              "name": "Silver Spring",
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
              src="/placeholder.svg?height=600&width=1920&query=silver spring maryland home with board and batten accent wall"
              alt="Premium Accent Walls in Silver Spring, MD"
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
                <span>Silver Spring</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Premium Accent Walls in Silver Spring, MD
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Transform your Silver Spring home with custom accent walls, board & batten, wood slat features, and
                media walls. Serving all Silver Spring neighborhoods including Downtown Silver Spring, Four Corners,
                Woodside Park, and beyond.
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
                  <Link href="#portfolio">View Silver Spring Projects</Link>
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
                  Silver Spring's Premier Accent Wall Specialists
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  At Accent Walls Pro, we've been transforming Silver Spring homes with custom accent walls for over 3
                  years. Our team understands the unique architectural styles and design preferences in Silver Spring
                  neighborhoods, from the urban homes of Downtown Silver Spring to the established neighborhoods of Four
                  Corners and Woodside Park.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Local Silver Spring Expertise</h3>
                      <p className="text-muted-foreground">
                        Our team has extensive experience working in Silver Spring homes and understands local building
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
                        We use only the highest quality materials that ensure durability and beauty in your Silver
                        Spring home.
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
                        Each accent wall is custom designed to complement your Silver Spring home's unique architecture
                        and your personal style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=silver spring maryland home interior with board and batten accent wall"
                  alt="Custom Board and Batten Accent Wall in Silver Spring Home"
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Popular Accent Wall Styles in Silver Spring
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover the accent wall styles that Silver Spring homeowners are choosing to elevate their spaces.
              </p>
            </div>
            <Tabs defaultValue="board-batten" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="board-batten">Board & Batten</TabsTrigger>
                  <TabsTrigger value="wood-slat">Wood Slat Walls</TabsTrigger>
                  <TabsTrigger value="media-walls">Media Walls</TabsTrigger>
                  <TabsTrigger value="geometric">Geometric Designs</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="board-batten">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=board and batten accent wall in silver spring maryland home"
                      alt="Board and Batten Accent Wall in Silver Spring Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Board & Batten Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Board and batten accent walls are particularly popular in Silver Spring's Four Corners and
                      Woodside Park neighborhoods. This classic style adds architectural interest and a touch of
                      traditional elegance to dining rooms, entryways, and living spaces.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Silver Spring homeowners are embracing both full-height and half-height board and batten
                      installations. We're seeing a lot of interest in painted board and batten in deep, moody colors
                      like navy, forest green, and charcoal, which creates a beautiful contrast against lighter wall
                      colors.
                    </p>
                    <Button asChild>
                      <Link href="/services/board-and-batten">Learn More About Board & Batten</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="wood-slat">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=wood slat accent wall in silver spring maryland home"
                      alt="Wood Slat Wall in Silver Spring Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Wood Slat Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Wood slat walls are gaining popularity in Silver Spring, especially in Downtown Silver Spring
                      condos and newer homes. These dimensional walls add warmth, texture, and a touch of modern organic
                      style to living rooms, primary bedrooms, and home offices.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      In Silver Spring, we're seeing a trend toward both natural wood finishes and painted wood slat
                      walls. Many homeowners are choosing to incorporate wood slat elements into media walls and
                      fireplace surrounds for added texture and visual interest.
                    </p>
                    <Button asChild>
                      <Link href="/services/accent-walls">Learn More About Wood Slat Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="media-walls">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=modern media wall in silver spring maryland home"
                      alt="Media Wall in Silver Spring Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Media Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Media walls have become increasingly popular in Silver Spring, particularly in Downtown Silver
                      Spring apartments and condos where space optimization is key. These functional focal points
                      combine entertainment needs with stylish design.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Silver Spring homeowners are investing in media walls that blend technology with design. We're
                      creating walls with integrated cable management, floating shelves, and often incorporating wood
                      slats or board and batten elements for added visual interest and texture.
                    </p>
                    <Button asChild>
                      <Link href="/services/media-walls">Learn More About Media Walls</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="geometric">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=geometric accent wall in silver spring maryland home"
                      alt="Geometric Accent Wall in Silver Spring Home"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Geometric Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Geometric pattern accent walls are trending in Silver Spring, particularly in Downtown Silver
                      Spring and newer developments. These bold, eye-catching designs add a contemporary flair to
                      bedrooms, home offices, and powder rooms.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Silver Spring residents are embracing clean lines and modern aesthetics. We're creating custom
                      geometric patterns using paint, wood trim, and even wallpaper to create statement walls that
                      reflect the homeowner's personality and complement their interior design style.
                    </p>
                    <Button asChild>
                      <Link href="/services/accent-walls">Learn More About Geometric Accent Walls</Link>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Silver Spring Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed accent walls in Silver Spring homes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Navy Board & Batten Dining Room"
                location="Four Corners, Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=navy board and batten dining room in silver spring home"
              />
              <ProjectCard
                title="Modern Wood Slat Feature Wall"
                location="Downtown Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=modern wood slat feature wall in downtown silver spring"
              />
              <ProjectCard
                title="Geometric Accent Wall"
                location="Woodside Park, Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=geometric accent wall in silver spring maryland home"
              />
              <ProjectCard
                title="Contemporary Media Wall"
                location="Downtown Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=contemporary media wall in downtown silver spring condo"
              />
              <ProjectCard
                title="Half-Wall Board & Batten"
                location="Forest Glen, Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=half wall board and batten in silver spring maryland home"
              />
              <ProjectCard
                title="Primary Bedroom Feature Wall"
                location="Woodmoor, Silver Spring"
                image="/placeholder.svg?height=400&width=600&query=primary bedroom feature wall in silver spring maryland"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?location=silver-spring">View All Silver Spring Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Silver Spring Homeowners Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from your neighbors in Silver Spring who love their new accent walls.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="We love our new board and batten accent wall in our dining room. The team at Accent Walls Pro was professional, efficient, and the result is stunning!"
                author="Rebecca T."
                location="Four Corners, Silver Spring"
                rating={5}
              />
              <TestimonialCard
                quote="The wood slat feature wall they installed in our Downtown Silver Spring condo completely transformed our space. Excellent craftsmanship and attention to detail."
                author="James & Maria C."
                location="Downtown Silver Spring"
                rating={5}
              />
              <TestimonialCard
                quote="Our geometric accent wall in the home office is exactly what we wanted. The design process was collaborative and the installation was flawless."
                author="Daniel K."
                location="Woodside Park, Silver Spring"
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
                <span className="font-medium">4.9 out of 5 based on 20+ Silver Spring reviews</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Silver Spring Neighborhoods We Serve</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide premium accent wall installation services throughout all Silver Spring neighborhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Downtown Silver Spring</h3>
                  <p className="text-muted-foreground">
                    Serving Downtown Silver Spring condos and apartments with modern accent walls and space-maximizing
                    features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Four Corners</h3>
                  <p className="text-muted-foreground">
                    Providing Four Corners homes with elegant board & batten, wood slat walls, and custom accent
                    features.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Woodside Park</h3>
                  <p className="text-muted-foreground">
                    Enhancing Woodside Park homes with traditional and transitional accent wall designs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Forest Glen</h3>
                  <p className="text-muted-foreground">
                    Creating custom accent walls for Forest Glen homes that complement their unique architecture.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Woodmoor</h3>
                  <p className="text-muted-foreground">
                    Installing board & batten, wood slat walls, and other accent features in Woodmoor residences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Takoma Park</h3>
                  <p className="text-muted-foreground">
                    Providing Takoma Park homes with custom accent walls that complement historic and eclectic styles.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                We also serve Silver Spring neighborhoods including Wheaton, Kemp Mill, White Oak, Colesville, and all
                surrounding areas.
              </p>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Transform Your Silver Spring Home?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Contact us today for a free consultation and quote for your accent wall project in Silver Spring.
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
                      <h3 className="text-lg font-medium">Serving All of Silver Spring</h3>
                      <p className="text-muted-foreground">
                        We provide in-home consultations throughout Silver Spring and all surrounding areas.
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
