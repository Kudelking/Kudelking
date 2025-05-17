import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Traditional Board & Batten Walls | AccentWallsPro",
  description:
    "Classic traditional board & batten wall designs for timeless elegance in your home. Serving the DMV area with premium installation services.",
}

export default function TraditionalBoardBattenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Traditional Board & Batten Walls
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Classic elegance with timeless appeal for any room in your home
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
                  src="/placeholder.svg?key=d8nmv"
                  alt="Traditional Board & Batten Wall"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Classic Traditional Board & Batten</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Traditional board and batten walls feature evenly spaced vertical battens that create a timeless,
                  elegant look. This classic design works beautifully in dining rooms, entryways, and living spaces,
                  adding architectural interest and dimension to your walls.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Evenly spaced vertical battens for classic appeal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Available in full wall or wainscoting height</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">Premium paint finish in any color of your choice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      ✓
                    </div>
                    <span className="ml-3 text-base">
                      Professional installation with meticulous attention to detail
                    </span>
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
                <h2 className="text-3xl font-bold tracking-tight">Why Choose Traditional Board & Batten?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Traditional board and batten walls offer timeless appeal that works with virtually any interior design
                  style, from farmhouse to transitional to modern. The clean lines and dimensional texture create visual
                  interest without overwhelming your space.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Versatile Design</h3>
                    <p className="mt-2 text-muted-foreground">
                      Works beautifully in dining rooms, entryways, living rooms, and bedrooms
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Adds Character</h3>
                    <p className="mt-2 text-muted-foreground">
                      Creates architectural interest in otherwise plain spaces
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Durable Finish</h3>
                    <p className="mt-2 text-muted-foreground">
                      High-quality materials ensure your walls look beautiful for years
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold">Increased Home Value</h3>
                    <p className="mt-2 text-muted-foreground">Adds perceived value and appeal to your property</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Our Traditional Board & Batten Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?key=wypo6"
                  alt="Traditional Board & Batten in Dining Room"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Dining Room Project</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?key=ohx0c"
                  alt="Traditional Board & Batten in Entryway"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Entryway Project</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <Image
                  src="/placeholder.svg?key=9dcb8"
                  alt="Traditional Board & Batten in Living Room"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Living Room Project</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
