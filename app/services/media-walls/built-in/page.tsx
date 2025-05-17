import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Built-in Entertainment Systems | Accent Walls Pro",
  description: "Custom built-in entertainment centers and media walls for your home. Serving DC, Maryland & Virginia.",
}

export default function BuiltInMediaWallsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/built-in-entertainment-center.png"
            alt="Built-in Entertainment System"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Built-in Entertainment Systems</h1>
        <p className="text-muted-foreground mb-6">
          Transform your living space with our custom built-in entertainment systems. These integrated solutions combine
          beautiful design with practical storage, creating a cohesive look that enhances your entire room while
          organizing your media components.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Built-in Entertainment Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=built-in entertainment center with storage"
                alt="Maximized Storage"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Maximized Storage</h3>
            <p className="text-muted-foreground">
              Built-in entertainment systems offer extensive storage options for media components, games, books, and
              decorative items. Custom cabinets, drawers, and shelving are designed to meet your specific needs.
            </p>
          </div>
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=custom built-in entertainment center in living room"
                alt="Seamless Integration"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
            <p className="text-muted-foreground">
              Our built-in systems are designed to integrate perfectly with your room's architecture, creating a custom
              look that appears as if it was always part of your home. This cohesive design enhances your space's
              overall aesthetic.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Built-in Entertainment Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall-to-wall entertainment center"
                alt="Wall-to-Wall System"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Wall-to-Wall System</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive entertainment center that spans the entire wall, maximizing storage and creating a
                dramatic focal point.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=entertainment center with fireplace"
                alt="Fireplace Integration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Fireplace Integration</h3>
              <p className="text-sm text-muted-foreground">
                Built-in system that incorporates a fireplace, creating a multi-functional focal point for your living
                space.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=bookcase entertainment center"
                alt="Bookcase Entertainment Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Bookcase Entertainment Center</h3>
              <p className="text-sm text-muted-foreground">
                Combines media storage with extensive shelving for books and decorative items, perfect for living rooms
                and family spaces.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=modern built-in entertainment center with hidden storage"
                alt="Hidden Component Storage"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Hidden Component Storage</h3>
              <p className="text-sm text-muted-foreground">
                Sleek design with concealed cabinets and drawers to hide media components, maintaining a clean,
                uncluttered appearance.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=corner built-in entertainment center"
                alt="Corner Entertainment Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Corner Entertainment Center</h3>
              <p className="text-sm text-muted-foreground">
                Specially designed to maximize corner spaces, ideal for rooms where wall space is limited or for angled
                viewing.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=two-tone entertainment center"
                alt="Two-Tone Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Two-Tone Design</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary style featuring contrasting colors or materials for visual interest and to complement your
                existing décor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Customization Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Cabinet Styles</h3>
            <p className="text-muted-foreground">
              Choose from shaker, flat panel, raised panel, and other door styles to match your home's aesthetic.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Hardware Options</h3>
            <p className="text-muted-foreground">
              Select from various handle and knob styles in finishes like brushed nickel, matte black, or brass.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Integrated Lighting</h3>
            <p className="text-muted-foreground">
              Add LED lighting to shelves, under cabinets, or behind the TV for ambiance and functionality.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Material Selection</h3>
            <p className="text-muted-foreground">
              Choose from solid hardwoods, engineered woods, laminates, and mixed materials for your perfect look.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Finish Options</h3>
            <p className="text-muted-foreground">
              Select from painted finishes in any color, natural wood stains, or high-gloss lacquers to match your
              décor.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Special Features</h3>
            <p className="text-muted-foreground">
              Add pull-out media trays, adjustable shelving, wire management systems, or ventilated component cabinets.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Design & Installation Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=interior designer consulting with client"
                alt="Initial Consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Initial Consultation</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your needs, preferences, and how you use your space.
                We discuss storage requirements, design style, and any special features you'd like to incorporate.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=3d design rendering of entertainment center"
                alt="Custom Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Custom Design</h3>
              <p className="text-muted-foreground">
                Our design team creates detailed plans for your built-in entertainment system, including dimensions,
                materials, finishes, and features. We provide 3D renderings to help you visualize the final result.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=custom cabinet fabrication"
                alt="Precision Fabrication"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Precision Fabrication</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen build your entertainment system in our workshop, ensuring every component meets
                our exacting standards. We use high-quality materials and pay meticulous attention to detail.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing built-in entertainment center"
                alt="Professional Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Professional Installation</h3>
              <p className="text-muted-foreground">
                Our installation team carefully installs your built-in entertainment system, ensuring it fits perfectly
                in your space. We handle all aspects of installation, including any necessary electrical work or
                modifications.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=final inspection of built-in entertainment center"
                alt="Final Inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Final Inspection & Setup</h3>
              <p className="text-muted-foreground">
                We conduct a thorough inspection to ensure everything meets our high standards and your expectations. We
                help you set up your equipment and explain how to use any integrated features like lighting or
                adjustable shelving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Entertainment Space?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a free consultation and quote for your custom built-in entertainment
                system. Our team is ready to help you create a beautiful, functional solution that will enhance your
                home for years to come.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/custom-media-wall.png"
                alt="Custom Built-in Entertainment Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
