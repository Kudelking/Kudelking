import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Decorative Ceilings | Accent Walls Pro",
  description:
    "Custom decorative ceiling installations including tray ceilings, coffered ceilings, and exposed beams. Serving DC, Maryland & Virginia.",
}

export default function DecorativeCeilingsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=luxury coffered ceiling in living room"
            alt="Decorative Ceiling"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Decorative Ceilings</h1>
        <p className="text-muted-foreground mb-6">
          Transform the forgotten "fifth wall" of your home with our custom decorative ceiling installations. From
          elegant tray ceilings to dramatic coffered designs and rustic exposed beams, our expert craftsmen create
          stunning overhead features that elevate your entire space.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Decorative Ceiling Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=elegant tray ceiling with lighting"
                alt="Tray Ceilings"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Tray Ceilings</h3>
              <p className="text-muted-foreground mb-4">
                Multi-level recessed ceiling designs that add depth, dimension, and architectural interest to any room.
              </p>
              <Button asChild>
                <Link href="/services/decorative-ceilings/tray">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=white coffered ceiling in luxury home"
                alt="Coffered Ceilings"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Coffered Ceilings</h3>
              <p className="text-muted-foreground mb-4">
                Classic grid-pattern ceiling treatments that create a sophisticated, timeless look with dramatic shadows
                and depth.
              </p>
              <Button asChild>
                <Link href="/services/decorative-ceilings/coffered">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=rustic exposed wood beams in living room"
                alt="Exposed Beams"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Exposed Beams</h3>
              <p className="text-muted-foreground mb-4">
                Authentic or faux wood beams that add rustic charm, warmth, and character to your ceiling.
              </p>
              <Button asChild>
                <Link href="/services/decorative-ceilings/beams">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Decorative Ceilings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Visual Height</h3>
            <p className="text-muted-foreground">
              Properly designed ceiling treatments can make rooms appear taller and more spacious, enhancing your home's
              overall feel.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Architectural Interest</h3>
            <p className="text-muted-foreground">
              Decorative ceilings add distinctive architectural elements that set your home apart and create visual
              interest.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Enhanced Lighting</h3>
            <p className="text-muted-foreground">
              Many ceiling treatments incorporate recessed or accent lighting that improves the room's ambiance and
              functionality.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Increased Home Value</h3>
            <p className="text-muted-foreground">
              Quality architectural details like decorative ceilings can increase your home's appeal and market value.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Room Definition</h3>
            <p className="text-muted-foreground">
              In open floor plans, ceiling treatments can help define separate areas without the need for walls or
              dividers.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Acoustic Benefits</h3>
            <p className="text-muted-foreground">
              Many decorative ceiling elements can help reduce echo and improve a room's acoustic properties.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=living room with decorative ceiling"
              alt="Living Rooms"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Living Rooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=dining room with tray ceiling"
              alt="Dining Rooms"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Dining Rooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=master bedroom with coffered ceiling"
              alt="Master Bedrooms"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Master Bedrooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=home office with exposed beams"
              alt="Home Offices"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Home Offices</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=kitchen with decorative ceiling"
              alt="Kitchens"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Kitchens</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=entryway with tray ceiling"
              alt="Entryways"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Entryways</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Design & Installation Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=interior designer consulting about ceiling"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision and requirements. Our design team works
                with you to select the perfect ceiling treatment for your space, considering room dimensions, existing
                architecture, and your design preferences.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=3d rendering of decorative ceiling"
                alt="Custom Planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Custom Planning</h3>
              <p className="text-muted-foreground">
                We create detailed plans and, if needed, 3D renderings to help you visualize the final result. This
                includes precise measurements, material selections, and any integrated lighting or other features.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=ceiling preparation for installation"
                alt="Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Preparation</h3>
              <p className="text-muted-foreground">
                Our team prepares your ceiling and room for installation, including any necessary electrical work for
                integrated lighting. We take care to protect your floors, furniture, and belongings throughout the
                process.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing coffered ceiling"
                alt="Expert Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Expert Installation</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen carefully install your decorative ceiling according to the approved design. We use
                high-quality materials and pay meticulous attention to detail to ensure a professional, long-lasting
                result.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=finishing decorative ceiling with paint"
                alt="Finishing & Inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Finishing & Final Inspection</h3>
              <p className="text-muted-foreground">
                We apply the final finishes, including caulking, painting, staining, or other treatments to complete
                your ceiling's look. A thorough inspection ensures every detail meets our exacting standards and your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Ceiling?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a free consultation and quote for your decorative ceiling project. Our team
                is ready to help you create a stunning overhead feature that will elevate your entire space.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=completed luxury decorative ceiling"
                alt="Luxury Decorative Ceiling"
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
