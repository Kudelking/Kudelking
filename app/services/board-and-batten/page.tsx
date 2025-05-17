import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Board & Batten Walls | Accent Walls Pro",
  description:
    "Premium board and batten wall installations for your home. Traditional and modern styles available. Serving DC, Maryland & Virginia.",
}

export default function BoardAndBattenPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/full-wall-board-and-batten.png"
            alt="Board and Batten Wall"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Board & Batten Walls</h1>
        <p className="text-muted-foreground mb-6">
          Add architectural interest and timeless elegance to your home with our custom board and batten wall
          treatments. Whether you prefer traditional vertical designs or modern geometric patterns, our expert team
          delivers flawless installations that transform ordinary walls into stunning focal points.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Board & Batten Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=traditional board and batten wall"
                alt="Traditional Board & Batten"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Traditional</h3>
              <p className="text-muted-foreground mb-4">
                Classic vertical board and batten designs that add timeless character and dimension to any room. Perfect
                for creating a sophisticated, tailored look.
              </p>
              <Button asChild>
                <Link href="/services/board-and-batten/traditional">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=modern geometric board and batten wall"
                alt="Modern Board & Batten"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern</h3>
              <p className="text-muted-foreground mb-4">
                Contemporary geometric patterns and unique designs that create bold visual interest. Perfect for making
                a statement in modern interiors.
              </p>
              <Button asChild>
                <Link href="/services/board-and-batten/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Board & Batten Walls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Architectural Interest</h3>
            <p className="text-muted-foreground">
              Board and batten adds dimension and texture to flat walls, creating visual interest and architectural
              character.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Timeless Appeal</h3>
            <p className="text-muted-foreground">
              This classic wall treatment has endured for centuries and continues to be a popular choice in both
              traditional and contemporary homes.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Versatile Application</h3>
            <p className="text-muted-foreground">
              Works beautifully in any room, from entryways and dining rooms to bedrooms and home offices.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Increased Home Value</h3>
            <p className="text-muted-foreground">
              Quality architectural details like board and batten can increase your home's appeal and market value.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Durability</h3>
            <p className="text-muted-foreground">
              More durable than standard painted walls, board and batten provides protection against scuffs and damage
              in high-traffic areas.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Design Flexibility</h3>
            <p className="text-muted-foreground">
              Can be painted in any color and installed at various heights to achieve different looks, from wainscoting
              to full-wall treatments.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=board and batten dining room"
              alt="Dining Room"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Dining Rooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=board and batten entryway"
              alt="Entryways"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Entryways</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=board and batten living room"
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
              src="/placeholder.svg?height=300&width=400&query=board and batten bedroom"
              alt="Bedrooms"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Bedrooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=board and batten home office"
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
              src="/placeholder.svg?height=300&width=400&query=board and batten hallway"
              alt="Hallways"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Hallways</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Installation Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=designer measuring wall for board and batten"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision and requirements. Our design team works
                with you to select the perfect board and batten style, pattern, and height for your space.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall preparation for board and batten"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Wall Preparation</h3>
              <p className="text-muted-foreground">
                Our team prepares your walls by ensuring they're clean, smooth, and ready for installation. We repair
                any existing damage and remove baseboards if necessary.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing board and batten"
                alt="Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Precise Installation</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen carefully install the boards and battens according to the agreed design. We use
                high-quality materials and pay meticulous attention to spacing, alignment, and level to ensure a
                professional finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=caulking board and batten seams"
                alt="Finishing"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Finishing & Caulking</h3>
              <p className="text-muted-foreground">
                We meticulously caulk all seams and nail holes to create a seamless appearance. This crucial step
                ensures your board and batten looks like a cohesive architectural feature rather than an add-on.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=painting board and batten wall"
                alt="Painting"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Painting & Final Inspection</h3>
              <p className="text-muted-foreground">
                We apply high-quality paint in your chosen color, typically using a semi-gloss or satin finish that
                highlights the dimensional quality of the board and batten. A final inspection ensures every detail
                meets our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Walls?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a free consultation and quote for your board and batten project. Our team
                is ready to help you create a stunning wall treatment that will elevate your entire space.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image src="/elegant-board-and-batten.png" alt="Elegant Board and Batten" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
