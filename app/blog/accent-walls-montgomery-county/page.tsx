import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, User, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Top Accent Wall Trends in Montgomery County, MD for 2025 | Accent Walls Pro",
  description:
    "Discover the latest accent wall trends in Montgomery County, including wood slat walls in Bethesda, board & batten in Silver Spring, and media walls in Rockville.",
  keywords: [
    "accent walls Montgomery County",
    "wood slat walls Bethesda",
    "board and batten Silver Spring",
    "media walls Rockville",
    "accent walls Chevy Chase",
    "accent walls North Bethesda",
    "accent walls Gaithersburg",
    "Montgomery County interior design",
    "accent wall trends 2025",
  ],
}

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <article>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=1920&query=modern home in bethesda maryland with accent wall"
              alt="Accent Wall Trends in Montgomery County"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container relative z-10 h-full flex flex-col justify-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-4 text-sm text-white/80">
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                  <span>Accent Wall Trends</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Top Accent Wall Trends in Montgomery County for 2025
                </h1>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>May 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>By Accent Walls Pro Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p>
                    Montgomery County homeowners are increasingly turning to accent walls to add personality and style
                    to their spaces. As we move through 2025, several distinct trends have emerged across different
                    areas of the county, from Bethesda to Silver Spring, Rockville, and beyond. Let's explore the top
                    accent wall trends we're seeing in Montgomery County this year.
                  </p>

                  <h2>Wood Slat Walls: Bethesda's Favorite</h2>
                  <p>
                    In Bethesda, particularly in neighborhoods like Edgemoor and Chevy Chase, wood slat walls have
                    become the accent wall of choice. These dimensional walls add warmth, texture, and a touch of modern
                    organic style to living rooms, primary bedrooms, and even home offices.
                  </p>
                  <p>
                    "Bethesda homeowners are gravitating toward walnut and oak wood slat walls with varying slat widths
                    for added visual interest," notes our lead designer. "We're also seeing integrated lighting between
                    slats, which creates a stunning effect in the evening."
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800&query=wood slat accent wall in bethesda maryland home"
                      alt="Wood Slat Accent Wall in Bethesda Home"
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      A recent wood slat accent wall installation in a Bethesda home
                    </p>
                  </div>

                  <h2>Board & Batten: Silver Spring's Classic Choice</h2>
                  <p>
                    In Silver Spring, particularly in neighborhoods like Woodside Park and Four Corners, board and
                    batten accent walls continue to be extremely popular. This classic style adds architectural interest
                    and a touch of traditional elegance to dining rooms, entryways, and living spaces.
                  </p>
                  <p>
                    "Silver Spring homeowners are embracing both full-height and half-height board and batten
                    installations," says our installation team lead. "We're seeing a lot of interest in painted board
                    and batten in deep, moody colors like navy, forest green, and charcoal, which creates a beautiful
                    contrast against lighter wall colors."
                  </p>

                  <h2>Media Walls: Rockville's Entertainment Upgrade</h2>
                  <p>
                    In Rockville, particularly in King Farm and Fallsgrove communities, media walls have become the
                    must-have accent wall. These functional focal points combine entertainment needs with stylish
                    design, often incorporating the TV, storage, and decorative elements in one cohesive unit.
                  </p>
                  <p>
                    "Rockville homeowners are investing in media walls that blend technology with design," explains our
                    project manager. "We're creating walls with integrated cable management, floating shelves, and often
                    incorporating wood slats or geometric patterns around the TV area for added visual interest."
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800&query=modern media wall in rockville maryland home"
                      alt="Media Wall in Rockville Home"
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      A custom media wall recently installed in a Rockville home
                    </p>
                  </div>

                  <h2>Geometric Patterns: North Bethesda's Modern Touch</h2>
                  <p>
                    In North Bethesda, particularly in the Pike & Rose area and luxury condos, geometric pattern accent
                    walls are trending. These bold, eye-catching designs add a contemporary flair to bedrooms, home
                    offices, and powder rooms.
                  </p>
                  <p>
                    "North Bethesda residents are embracing clean lines and modern aesthetics," notes our design
                    consultant. "We're creating custom geometric patterns using paint, wood trim, and even wallpaper to
                    create statement walls that reflect the homeowner's personality."
                  </p>

                  <h2>Limewash Finishes: Chevy Chase's Textural Element</h2>
                  <p>
                    In Chevy Chase, particularly in historic homes and renovated properties, limewash accent walls are
                    gaining popularity. This old-world finish adds subtle texture and depth to living rooms, dining
                    areas, and primary bedrooms.
                  </p>
                  <p>
                    "Chevy Chase homeowners appreciate the subtle, sophisticated texture that limewash provides," says
                    our finishing specialist. "We're applying limewash in warm neutrals, soft greens, and muted blues to
                    create accent walls that feel both timeless and on-trend."
                  </p>

                  <h2>Fireplace Surrounds: Potomac's Luxury Statement</h2>
                  <p>
                    In Potomac's luxury homes, fireplace surrounds have become elaborate accent walls in their own
                    right. These floor-to-ceiling features often combine stone, wood, and metal elements to create a
                    stunning focal point in living rooms and family rooms.
                  </p>
                  <p>
                    "Potomac homeowners are investing in dramatic fireplace surrounds that make a statement," explains
                    our custom project lead. "We're designing surrounds with integrated shelving, hidden storage, and
                    mixed materials like marble, wood slats, and metal accents."
                  </p>

                  <div className="my-8">
                    <Image
                      src="/placeholder.svg?height=400&width=800&query=luxury fireplace surround in potomac maryland home"
                      alt="Luxury Fireplace Surround in Potomac Home"
                      width={800}
                      height={400}
                      className="rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      A custom fireplace surround recently completed in a Potomac residence
                    </p>
                  </div>

                  <h2>Bringing Montgomery County Trends to Your Home</h2>
                  <p>
                    Whether you live in Bethesda, Silver Spring, Rockville, or anywhere else in Montgomery County, these
                    accent wall trends can be adapted to suit your home's style and your personal preferences. At Accent
                    Walls Pro, we specialize in creating custom accent walls throughout Montgomery County that reflect
                    both current trends and timeless design principles.
                  </p>
                  <p>
                    Our team of designers and installers has extensive experience working in homes throughout Montgomery
                    County, and we understand the unique architectural styles and design preferences in each community.
                    From historic homes in Kensington to modern condos in Bethesda, we can help you select the perfect
                    accent wall style for your space.
                  </p>

                  <h2>Ready to Transform Your Montgomery County Home?</h2>
                  <p>
                    If you're ready to enhance your Montgomery County home with a custom accent wall, we invite you to
                    contact us for a free consultation. Our team will work with you to design an accent wall that
                    reflects your style, complements your home, and incorporates the best of current trends while
                    remaining timeless.
                  </p>
                  <p>
                    Serving Bethesda, Silver Spring, Rockville, Chevy Chase, North Bethesda, Potomac, Kensington,
                    Gaithersburg, and all of Montgomery County with premium accent wall installation services.
                  </p>
                </div>

                <div className="mt-12 flex justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Schedule Your Free Consultation</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold mb-4">Our Service Areas in Montgomery County</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Bethesda</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Silver Spring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Rockville</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Chevy Chase</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>North Bethesda</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Potomac</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Gaithersburg</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Kensington</span>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <Link href="/locations" className="text-sm text-primary hover:underline">
                        View All Service Areas
                      </Link>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold mb-4">Popular Services</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/services/accent-walls"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span>Modern Geometric Accent Walls</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/wood-slat-walls"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span>Wood Slat Accent Walls</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/board-and-batten"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span>Board & Batten Walls</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/media-walls"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span>TV Media Walls</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/fireplace-buildouts"
                          className="flex items-center gap-2 text-primary hover:underline"
                        >
                          <ArrowRight className="h-4 w-4" />
                          <span>Fireplace Build-Outs</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                    <p className="mb-4">
                      Ready to transform your Montgomery County home with a custom accent wall? Contact us today for a
                      free, no-obligation quote.
                    </p>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Request a Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
