import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Floating Media Units | Accent Walls Pro",
  description: "Modern floating TV media walls and entertainment units for your home. Serving DC, Maryland & Virginia.",
}

export default function FloatingMediaWallsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/floating-tv-media-wall.png"
            alt="Floating Media Units"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Floating Media Units</h1>
        <p className="text-muted-foreground mb-6">
          Create a sleek, contemporary look with our custom floating media units. These wall-mounted entertainment
          centers provide a modern aesthetic while concealing cables and offering functional storage for your media
          components.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/portfolio">View Our Portfolio</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Features of Floating Media Units</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=floating media unit with hidden cables"
                alt="Clean Cable Management"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Clean Cable Management</h3>
            <p className="text-muted-foreground">
              Our floating media units feature integrated cable management systems that conceal power cords, HDMI
              cables, and other connections for a clean, professional appearance.
            </p>
          </div>
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=floating media unit with LED backlighting"
                alt="Integrated Lighting"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Integrated Lighting</h3>
            <p className="text-muted-foreground">
              Optional LED backlighting creates ambiance and reduces eye strain when watching TV. Our systems can
              include color-changing options and remote controls for convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Floating Media Unit Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=minimalist floating media console"
                alt="Minimalist Console"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Minimalist Console</h3>
              <p className="text-sm text-muted-foreground">
                Clean lines and simple design for a sleek, uncluttered look. Perfect for contemporary spaces.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=floating media unit with wood slat accent"
                alt="Wood Slat Accent"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Wood Slat Accent</h3>
              <p className="text-sm text-muted-foreground">
                Floating console with textural wood slat elements for added visual interest and warmth.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=asymmetrical floating media unit"
                alt="Asymmetrical Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Asymmetrical Design</h3>
              <p className="text-sm text-muted-foreground">
                Modern, artistic layout with varied shelf heights and widths for a dynamic look.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=floating media unit with closed storage"
                alt="Hidden Storage"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Hidden Storage</h3>
              <p className="text-sm text-muted-foreground">
                Sleek design with concealed cabinets to hide media components, games, and accessories.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=floating media unit with feature wall"
                alt="Feature Wall Integration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Feature Wall Integration</h3>
              <p className="text-sm text-muted-foreground">
                Floating unit combined with a textured or accent wall for a complete design statement.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=corner floating media unit"
                alt="Corner Solution"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Corner Solution</h3>
              <p className="text-sm text-muted-foreground">
                Specially designed floating units that maximize corner spaces for efficient room layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Material Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Engineered Wood</h3>
            <p className="text-muted-foreground">
              High-quality MDF and plywood options with various finishes, offering durability and consistent appearance.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Solid Hardwood</h3>
            <p className="text-muted-foreground">
              Premium oak, walnut, maple, and other hardwoods for natural beauty and long-lasting quality.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">High-Gloss Lacquer</h3>
            <p className="text-muted-foreground">
              Contemporary, reflective finish available in various colors for a sleek, modern appearance.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Matte Finishes</h3>
            <p className="text-muted-foreground">
              Non-reflective surfaces that reduce fingerprints and provide a sophisticated, understated look.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Glass Elements</h3>
            <p className="text-muted-foreground">
              Clear, frosted, or tinted glass shelves and panels that add lightness and visual interest.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Metal Accents</h3>
            <p className="text-muted-foreground">
              Brushed aluminum, matte black, or brass hardware and trim for contemporary contrast and detail.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Installation Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=designer measuring for media unit"
                alt="Consultation & Measurement"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your needs and preferences. Our design team creates
                detailed plans for your floating media unit, including dimensions, materials, and features.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall preparation for floating media unit"
                alt="Wall Assessment"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Wall Assessment & Preparation</h3>
              <p className="text-muted-foreground">
                We evaluate your wall structure to ensure it can safely support a floating unit. If necessary, we
                reinforce the wall or install additional support structures behind the drywall.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=custom fabrication of media unit"
                alt="Fabrication"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Custom Fabrication</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen build your floating media unit according to the approved design. We use
                high-quality materials and pay meticulous attention to detail to ensure a flawless finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing floating media unit"
                alt="Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Professional Installation</h3>
              <p className="text-muted-foreground">
                Our team securely mounts your floating media unit to the wall, ensuring it's level and properly
                supported. We install any electrical components and manage all cable routing for a clean appearance.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=final inspection of floating media unit"
                alt="Final Setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Final Setup & Inspection</h3>
              <p className="text-muted-foreground">
                We help you set up your TV and media components, ensuring everything works perfectly. A final inspection
                confirms that all aspects of the installation meet our high standards and your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready for Your Floating Media Unit?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a free consultation and quote for your custom floating media unit project.
                Our team is ready to help you create a sleek, modern entertainment center that will transform your
                space.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image src="/media-wall-led.png" alt="Floating Media Unit with LED" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
