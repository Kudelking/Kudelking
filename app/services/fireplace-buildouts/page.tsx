import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Fireplace Build-Outs | Accent Walls Pro",
  description:
    "Custom fireplace build-outs and renovations. Transform your existing fireplace or create a stunning new focal point for your home.",
}

export default function FireplaceBuildoutsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=luxury modern fireplace buildout with stone and wood"
            alt="Fireplace Build-Outs"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Fireplace Build-Outs</h1>
        <p className="text-muted-foreground mb-6">
          Transform your living space with a custom fireplace build-out. Whether you're looking to update an existing
          fireplace or create a stunning new focal point, our expert team designs and builds beautiful, functional
          fireplace surrounds that enhance your home's style and value.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Fireplace Build-Out Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=modern minimalist fireplace with clean lines"
                alt="Modern Fireplace"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Fireplace</h3>
              <p className="text-muted-foreground mb-4">
                Clean lines, minimalist design, and contemporary materials create a sleek, sophisticated focal point for
                your living space.
              </p>
              <Button asChild>
                <Link href="/services/fireplace-buildouts/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=traditional fireplace with detailed mantel and surround"
                alt="Traditional Fireplace"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Traditional Fireplace</h3>
              <p className="text-muted-foreground mb-4">
                Classic designs with detailed mantels, elegant surrounds, and timeless materials that add warmth and
                character to your home.
              </p>
              <Button asChild>
                <Link href="/services/fireplace-buildouts/traditional">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Why Choose a Custom Fireplace Build-Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Stunning Focal Point</h3>
            <p className="text-muted-foreground">
              Create a captivating centerpiece that draws the eye and anchors your living space.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Increased Home Value</h3>
            <p className="text-muted-foreground">
              A well-designed fireplace is a desirable feature that can significantly increase your home's resale value.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Personalized Design</h3>
            <p className="text-muted-foreground">
              Custom-tailored to your specific style, space, and functional requirements.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Enhanced Functionality</h3>
            <p className="text-muted-foreground">
              Incorporate storage, media components, or decorative elements that serve your lifestyle needs.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Material Versatility</h3>
            <p className="text-muted-foreground">
              Choose from a wide range of materials including stone, tile, wood, concrete, and metal to achieve your
              desired look.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Year-Round Appeal</h3>
            <p className="text-muted-foreground">
              Enjoy a beautiful focal point that enhances your space whether the fireplace is in use or not.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Fireplace Materials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=natural stone fireplace surround"
                alt="Natural Stone"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Natural Stone</h3>
              <p className="text-sm text-muted-foreground">
                Timeless elegance with materials like marble, limestone, or slate for a luxurious, enduring appeal.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wood fireplace mantel and surround"
                alt="Wood"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Wood</h3>
              <p className="text-sm text-muted-foreground">
                Warm and versatile, from rustic reclaimed timber to sleek modern designs with clean lines.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=tile fireplace surround"
                alt="Tile"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Tile</h3>
              <p className="text-sm text-muted-foreground">
                Endless design possibilities with ceramic, porcelain, or glass tiles in various colors and patterns.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=concrete fireplace surround modern"
                alt="Concrete"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Concrete</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary and industrial, offering a sleek, minimalist aesthetic with versatile finishing options.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=metal fireplace surround modern"
                alt="Metal"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Metal</h3>
              <p className="text-sm text-muted-foreground">
                Bold and distinctive, from brushed steel to patinated copper for a striking modern statement.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=brick fireplace surround"
                alt="Brick"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Brick</h3>
              <p className="text-sm text-muted-foreground">
                Classic and cozy, from traditional red brick to painted or whitewashed for a more contemporary look.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Fireplace Build-Out Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=fireplace design consultation"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision, space, and requirements. Our design
                team then creates detailed plans and 3D renderings to help you visualize the final result before any
                work begins.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Material Selection</h3>
              <p className="text-muted-foreground">
                We help you select the perfect materials for your fireplace build-out, considering aesthetics,
                durability, maintenance requirements, and budget. We provide samples and guidance to ensure you make
                informed choices.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=selecting materials for fireplace"
                alt="Material Selection"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=fireplace construction in progress"
                alt="Construction"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Professional Construction</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen build your custom fireplace with meticulous attention to detail. We handle all
                aspects of construction, from framing and electrical work to finishing touches, ensuring everything
                meets our high standards.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Final Inspection & Reveal</h3>
              <p className="text-muted-foreground">
                We conduct a thorough inspection to ensure every detail meets our quality standards. Once complete, we
                reveal your stunning new fireplace and provide care instructions to keep it looking beautiful for years
                to come.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=completed fireplace buildout reveal"
                alt="Final Inspection & Reveal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Fireplace Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/modern-fireplace-buildout.png" alt="Modern Stone Fireplace" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Stone Fireplace</h3>
              <p className="text-muted-foreground mb-4">
                A sleek, floor-to-ceiling stone fireplace with a minimalist design that creates a dramatic focal point
                in this contemporary living room.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/fireplace-built-in-shelving.png"
                alt="Traditional with Built-Ins"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Traditional with Built-Ins</h3>
              <p className="text-muted-foreground mb-4">
                A classic fireplace design with custom built-in shelving and cabinetry, creating a functional and
                beautiful centerpiece for this family room.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/modern-slim-fireplace.png" alt="Minimalist Linear Fireplace" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Minimalist Linear Fireplace</h3>
              <p className="text-muted-foreground mb-4">
                A contemporary linear fireplace with a sleek concrete surround, creating a subtle yet sophisticated
                feature in this modern home.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image src="/floor-to-ceiling-fireplace.png" alt="Rustic Stone Statement" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Rustic Stone Statement</h3>
              <p className="text-muted-foreground mb-4">
                A dramatic floor-to-ceiling natural stone fireplace that brings warmth and texture to this open-concept
                living area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Fireplace?</h2>
          <p className="mb-6">
            Contact us today to schedule a consultation for your custom fireplace build-out. Our team serves the entire
            DC, Maryland, and Virginia area with expert design and construction services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
