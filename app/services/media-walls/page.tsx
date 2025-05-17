import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "TV Media Walls | Accent Walls Pro",
  description:
    "Custom TV media walls for your home. Create a stunning entertainment center with our expert design and installation services.",
}

export default function MediaWallsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=luxury tv media wall with led lighting and storage"
            alt="TV Media Walls"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">TV Media Walls</h1>
        <p className="text-muted-foreground mb-6">
          Transform your entertainment space with a custom TV media wall. Our expert team designs and builds beautiful,
          functional media walls that conceal cables, incorporate storage, and create a stunning focal point for your
          living area.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Media Wall Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=floating tv media wall with led backlighting"
                alt="Floating Media Walls"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Floating Media Walls</h3>
              <p className="text-muted-foreground mb-4">
                Sleek, modern designs that appear to float off the wall, often featuring LED backlighting for a dramatic
                effect. Perfect for contemporary spaces.
              </p>
              <Button asChild>
                <Link href="/services/media-walls/floating">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=built in entertainment center with shelving"
                alt="Built-In Entertainment Centers"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Built-In Entertainment Centers</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive solutions with integrated storage, display shelving, and media components for a cohesive,
                organized entertainment space.
              </p>
              <Button asChild>
                <Link href="/services/media-walls/built-in">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Custom Media Walls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Cable Management</h3>
            <p className="text-muted-foreground">
              Conceal unsightly cables and wires for a clean, professional appearance.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Integrated Storage</h3>
            <p className="text-muted-foreground">
              Incorporate cabinets, shelving, and drawers to store media components and accessories.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Custom Design</h3>
            <p className="text-muted-foreground">
              Tailored to your specific space, TV size, and aesthetic preferences.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Ambient Lighting</h3>
            <p className="text-muted-foreground">
              Optional LED lighting creates atmosphere and reduces eye strain during viewing.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Space Optimization</h3>
            <p className="text-muted-foreground">
              Maximize your available space with wall-mounted solutions that free up floor area.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Increased Home Value</h3>
            <p className="text-muted-foreground">
              A well-designed media wall is an attractive feature for potential homebuyers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Media Wall Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=led backlit tv on media wall"
                alt="LED Backlighting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">LED Backlighting</h3>
              <p className="text-sm text-muted-foreground">
                Creates ambiance, reduces eye strain, and adds a dramatic effect to your entertainment space.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wood slat tv media wall"
                alt="Wood Slat Panels"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Wood Slat Panels</h3>
              <p className="text-sm text-muted-foreground">
                Adds warmth and texture while creating a contemporary, architectural element.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=stone accent tv wall"
                alt="Stone Accents"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Stone Accents</h3>
              <p className="text-sm text-muted-foreground">
                Natural or manufactured stone creates a luxurious, textural focal point.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=hidden storage cabinets in media wall"
                alt="Hidden Storage"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Hidden Storage</h3>
              <p className="text-sm text-muted-foreground">
                Concealed cabinets and drawers keep media components and accessories organized and out of sight.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=display shelving in media wall"
                alt="Display Shelving"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Display Shelving</h3>
              <p className="text-sm text-muted-foreground">
                Showcase decorative items, books, and personal collections alongside your entertainment system.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=fireplace integrated in tv media wall"
                alt="Integrated Fireplace"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Integrated Fireplace</h3>
              <p className="text-sm text-muted-foreground">
                Combine your media wall with a fireplace for a multi-functional, cozy entertainment space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Media Wall Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=media wall design consultation"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your entertainment needs, space constraints, and
                design preferences. Our team then creates detailed plans and 3D renderings to help you visualize the
                final result.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Material Selection</h3>
              <p className="text-muted-foreground">
                We help you select the perfect materials for your media wall, considering aesthetics, durability, and
                functionality. From wood species and finishes to stone, tile, and hardware, every detail is carefully
                chosen.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=selecting materials for media wall"
                alt="Material Selection"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=media wall construction in progress"
                alt="Construction"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Professional Construction</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen build your custom media wall with meticulous attention to detail. We handle all
                aspects of construction, from framing and electrical work to finishing touches, ensuring everything
                meets our high standards.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Final Installation & Setup</h3>
              <p className="text-muted-foreground">
                We complete the installation of your media wall, including mounting your TV, connecting components, and
                ensuring all features function perfectly. We provide guidance on operation and maintenance before
                revealing your stunning new entertainment space.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=completed media wall installation"
                alt="Final Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Media Wall Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/floating-tv-media-wall.png" alt="Floating LED Media Wall" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Floating LED Media Wall</h3>
              <p className="text-muted-foreground mb-4">
                A sleek, floating media wall with integrated LED lighting that creates a dramatic effect in this
                contemporary living room.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/built-in-entertainment-center.png"
                alt="Built-In Entertainment Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Built-In Entertainment Center</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive entertainment center with ample storage, display shelving, and a central TV area,
                creating an organized and stylish focal point.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/media-wall-led.png" alt="Wood Slat Media Feature" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Wood Slat Media Feature</h3>
              <p className="text-muted-foreground mb-4">
                A warm, textural media wall featuring vertical wood slats with integrated lighting and a floating
                console for a modern, architectural look.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/tv-media-wall.png" alt="Stone & Wood Combination" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Stone & Wood Combination</h3>
              <p className="text-muted-foreground mb-4">
                A stunning media wall that combines natural stone and warm wood elements for a luxurious, textural
                statement piece.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Entertainment Space?</h2>
          <p className="mb-6">
            Contact us today to schedule a consultation for your custom media wall. Our team serves the entire DC,
            Maryland, and Virginia area with expert design and installation services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
