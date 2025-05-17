import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Wallpaper Installation | Accent Walls Pro",
  description:
    "Professional wallpaper installation services for feature walls and full rooms. Serving DC, Maryland & Virginia.",
}

export default function WallpaperInstallationPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/luxury-wallpaper-feature-wall.png"
            alt="Wallpaper Installation"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Wallpaper Installation</h1>
        <p className="text-muted-foreground mb-6">
          Transform your space with our professional wallpaper installation services. Whether you're looking to create a
          stunning feature wall or refresh an entire room, our expert team delivers flawless installations that showcase
          the beauty of your chosen wallpaper.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Wallpaper Installation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/bold-patterned-feature-wall.png" alt="Feature Wall" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Feature Wall</h3>
              <p className="text-muted-foreground mb-4">
                Create a stunning focal point with a single wallpapered wall. Perfect for adding drama, pattern, or
                color to your space without overwhelming the room.
              </p>
              <Button asChild>
                <Link href="/services/wallpaper-installation/feature">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/bedroom-wallpaper-installation.png" alt="Full Room" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Full Room</h3>
              <p className="text-muted-foreground mb-4">
                Transform your entire space with wallpaper on all walls. Our expert installation ensures perfect pattern
                matching and seamless results throughout the room.
              </p>
              <Button asChild>
                <Link href="/services/wallpaper-installation/full-room">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Why Choose Professional Installation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Pattern Matching</h3>
            <p className="text-muted-foreground">
              Our experts ensure perfect pattern alignment across seams for a seamless, professional appearance.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Surface Preparation</h3>
            <p className="text-muted-foreground">
              We properly prepare walls to ensure smooth application and long-lasting results without bubbles or
              peeling.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Specialty Materials</h3>
            <p className="text-muted-foreground">
              We have experience with all wallpaper types, including delicate grasscloth, heavy vinyl, and premium
              designer papers.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Difficult Areas</h3>
            <p className="text-muted-foreground">
              Our installers expertly navigate tricky areas like corners, outlets, switches, and architectural features.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Time Efficiency</h3>
            <p className="text-muted-foreground">
              Professional installation is completed quickly and efficiently, saving you time and frustration.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Material Optimization</h3>
            <p className="text-muted-foreground">
              We minimize waste by carefully planning the installation, saving you money on expensive wallpaper.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Wallpaper Types We Install</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image src="/traditional-patterned-wallpaper.png" alt="Traditional Patterned" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Traditional Patterned</h3>
              <p className="text-sm text-muted-foreground">
                Classic designs including florals, damasks, and stripes for timeless elegance.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image src="/textured-grasscloth-wallpaper.png" alt="Grasscloth & Textured" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Grasscloth & Textured</h3>
              <p className="text-sm text-muted-foreground">
                Natural fiber wallcoverings that add organic texture and warmth to your space.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=modern geometric wallpaper"
                alt="Modern Geometric"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Modern Geometric</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary patterns with bold shapes and clean lines for a striking look.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=luxury metallic wallpaper"
                alt="Metallic & Specialty"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Metallic & Specialty</h3>
              <p className="text-sm text-muted-foreground">
                Luxurious papers with metallic accents, foils, or specialty finishes for glamour.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=large scale mural wallpaper"
                alt="Murals & Large Scale"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Murals & Large Scale</h3>
              <p className="text-sm text-muted-foreground">
                Dramatic wall-sized images and scenes that create a powerful visual impact.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=vinyl washable wallpaper"
                alt="Vinyl & Washable"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Vinyl & Washable</h3>
              <p className="text-sm text-muted-foreground">
                Durable, practical options perfect for high-traffic areas and homes with children.
              </p>
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
                src="/placeholder.svg?height=300&width=400&query=consultation for wallpaper installation"
                alt="Consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Measurement</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision and requirements. Our team takes precise
                measurements of your space to determine the amount of wallpaper needed and to plan the installation.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall preparation for wallpaper"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Surface Preparation</h3>
              <p className="text-muted-foreground">
                Proper wall preparation is crucial for a successful installation. We clean, repair, and prime your walls
                to create the ideal surface for wallpaper adhesion, ensuring a smooth finish and long-lasting results.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=professional wallpaper installation"
                alt="Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Professional Installation</h3>
              <p className="text-muted-foreground">
                Our skilled installers carefully hang your wallpaper with precision, ensuring perfect pattern matching
                and seamless seams. We pay special attention to corners, edges, and fixtures for a flawless finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=final inspection of wallpaper installation"
                alt="Final Inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Final Inspection & Cleanup</h3>
              <p className="text-muted-foreground">
                After installation, we conduct a thorough inspection to ensure everything meets our high standards. We
                clean up the workspace, remove any adhesive residue, and provide you with care instructions for your new
                wallpaper.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold mb-2">How long does wallpaper installation take?</h3>
            <p className="text-muted-foreground">
              The timeline depends on the size of the project and complexity of the wallpaper. A single feature wall
              typically takes 4-6 hours, while a full room may require 1-2 days. We'll provide a specific timeline
              during your consultation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold mb-2">Do I need to purchase the wallpaper or can you provide it?</h3>
            <p className="text-muted-foreground">
              We can work either way. Many clients select and purchase their own wallpaper, but we can also source
              wallpaper for you from our trusted suppliers. We're happy to provide recommendations based on your style
              preferences and budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold mb-2">How should I prepare my space before installation?</h3>
            <p className="text-muted-foreground">
              We recommend removing furniture from the area or moving it to the center of the room and covering it.
              Remove wall decorations, switch plates, and outlet covers. Our team will handle all wall preparation,
              including cleaning and priming.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold mb-2">How long will my wallpaper last?</h3>
            <p className="text-muted-foreground">
              With proper installation and care, quality wallpaper can last 15+ years. Factors affecting longevity
              include the type of wallpaper, room conditions, and maintenance. Vinyl and washable wallpapers are
              particularly durable for high-traffic areas.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-6">
            Contact us today to schedule a consultation for your wallpaper installation project. Our team serves the
            entire DC, Maryland, and Virginia area with expert installation services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
