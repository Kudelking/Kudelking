import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Modern Board & Batten Walls | AccentWallsPro",
  description:
    "Contemporary modern board & batten wall designs with clean lines and bold patterns. Serving the DMV area with premium installation services.",
}

export default function ModernBoardBattenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Modern Board & Batten Walls</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Contemporary designs with clean lines and bold patterns
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-foreground">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services/board-and-batten" className="hover:text-foreground">
                  Board & Batten
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Modern</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?key=m9d0a"
                  alt="Modern Board & Batten Wall"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Contemporary Modern Board & Batten</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Modern board and batten walls feature unique geometric patterns, asymmetrical designs, and bold
                  statements. These contemporary installations transform ordinary walls into stunning focal points that
                  showcase your personal style and elevate your interior design.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Geometric patterns and asymmetrical designs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Bold color options for dramatic effect</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Custom designed to fit your specific space</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Professional installation with precision measurements</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button size="lg" className="mr-4">
                    View Gallery
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Why Choose Modern Board & Batten?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Modern board and batten walls make a bold statement in contemporary homes. The unique geometric
                  patterns and clean lines create a sophisticated focal point that instantly elevates your space and
                  showcases your design-forward aesthetic.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Statement Design</h3>
                    <p className="mt-2 text-muted-foreground">Creates a bold focal point that transforms your space</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Customizable</h3>
                    <p className="mt-2 text-muted-foreground">
                      Endless pattern possibilities to match your unique style
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Contemporary Appeal</h3>
                    <p className="mt-2 text-muted-foreground">
                      Perfect for modern, minimalist, and transitional interiors
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Design Flexibility</h3>
                    <p className="mt-2 text-muted-foreground">Works in living rooms, bedrooms, offices, and more</p>
                  </div>
                </div>
              </div>
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Modern Board & Batten Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=modern geometric board and batten bedroom"
                  alt="Modern Board & Batten in Bedroom"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Bedroom Project</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=modern board and batten living room"
                  alt="Modern Board & Batten in Living Room"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Living Room Project</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=modern board and batten office"
                  alt="Modern Board & Batten in Office"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Office Project</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
