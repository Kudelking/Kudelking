import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Traditional Fireplace Build-Outs | AccentWallsPro",
  description:
    "Classic traditional fireplace build-outs with elegant mantels and timeless design. Serving the DMV area with premium installation services.",
}

export default function TraditionalFireplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Traditional Fireplace Build-Outs
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Classic designs with elegant mantels and timeless appeal
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
                <Link href="/services/fireplace-buildouts" className="hover:text-foreground">
                  Fireplace Build-Outs
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Traditional</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=traditional fireplace with elegant mantel"
                  alt="Traditional Fireplace Build-Out"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Classic Traditional Fireplaces</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our traditional fireplace build-outs feature elegant mantels, classic proportions, and timeless
                  materials to create a sophisticated focal point in your home. These beautiful installations bring
                  warmth and character to your living space with their enduring design.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Elegant mantels with detailed millwork</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Classic materials including wood, stone, and marble</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Timeless proportions and balanced design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Optional built-in bookcases and storage</span>
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
                <h2 className="text-3xl font-bold tracking-tight">Why Choose a Traditional Fireplace?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Traditional fireplace build-outs create a timeless focal point that adds warmth and character to your
                  home. The elegant mantels and classic proportions complement traditional, transitional, and even
                  contemporary interiors, providing an enduring design element that never goes out of style.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Timeless Appeal</h3>
                    <p className="mt-2 text-muted-foreground">Classic design that never goes out of style</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Elegant Details</h3>
                    <p className="mt-2 text-muted-foreground">Beautiful millwork and craftsmanship</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Versatile Design</h3>
                    <p className="mt-2 text-muted-foreground">Works with many interior design styles</p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Added Value</h3>
                    <p className="mt-2 text-muted-foreground">Enhances your home's appeal and value</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Traditional Fireplace Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=traditional wood mantel fireplace"
                  alt="Traditional Wood Mantel Fireplace"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Wood Mantel Project</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=traditional stone fireplace with built-ins"
                  alt="Traditional Stone Fireplace with Built-ins"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Stone Fireplace with Built-ins</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=traditional marble fireplace surround"
                  alt="Traditional Marble Fireplace"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Marble Fireplace Project</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
