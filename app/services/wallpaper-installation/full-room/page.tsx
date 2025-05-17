import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Full Room Wallpaper Installation | Accent Walls Pro",
  description:
    "Professional full room wallpaper installation services. Transform your entire space with our expert installation.",
}

export default function FullRoomWallpaperPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=elegant bedroom with full wallpaper installation"
            alt="Full Room Wallpaper"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Full Room Wallpaper Installation</h1>
        <p className="text-muted-foreground mb-6">
          Transform your entire space with our professional full room wallpaper installation services. Our expert team
          ensures perfect pattern matching and seamless results throughout the room, creating a cohesive and stunning
          environment.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Full Room Wallpaper</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Complete Transformation</h3>
            <p className="text-muted-foreground">
              Create a fully immersive environment that completely transforms the look and feel of your space.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Cohesive Design</h3>
            <p className="text-muted-foreground">
              Achieve a unified, cohesive look that ties all elements of your room together.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Room Enhancement</h3>
            <p className="text-muted-foreground">
              Make small rooms feel more intimate or create a specific atmosphere throughout the space.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Hide Imperfections</h3>
            <p className="text-muted-foreground">
              Conceal wall imperfections or uneven surfaces that might be noticeable with paint alone.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Texture & Dimension</h3>
            <p className="text-muted-foreground">
              Add texture and dimension to your walls that cannot be achieved with paint.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Lasting Impact</h3>
            <p className="text-muted-foreground">
              Create a lasting impression with a design statement that transforms your entire space.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Rooms for Full Wallpaper Installation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=powder room with elegant wallpaper"
              alt="Powder Room"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Powder Rooms</h3>
                <p className="text-sm">Small spaces perfect for bold, dramatic wallpaper statements</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=dining room with elegant wallpaper all walls"
              alt="Dining Room"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Dining Rooms</h3>
                <p className="text-sm">Create an elegant, formal atmosphere for entertaining</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=bedroom with calming wallpaper all walls"
              alt="Bedrooms"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Bedrooms</h3>
                <p className="text-sm">Create a cozy, personal retreat with full room wallpaper</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=home office with inspiring wallpaper all walls"
              alt="Home Office"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Home Offices</h3>
                <p className="text-sm">Create an inspiring, productive workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Full Room Installation Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  We discuss your vision, take measurements, and help you select the perfect wallpaper for your space.
                </p>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Preparation</h3>
                <p className="text-muted-foreground">
                  We thoroughly prepare all wall surfaces, removing old wallpaper, repairing imperfections, and priming.
                </p>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Installation</h3>
                <p className="text-muted-foreground">
                  Our professionals install your wallpaper with precision, ensuring perfect pattern matching and
                  seamless results.
                </p>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Final Inspection</h3>
                <p className="text-muted-foreground">
                  We conduct a thorough inspection, clean up, and provide care instructions for your new wallpaper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Wallpaper Styles for Full Room Installation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=subtle textured wallpaper in living room"
              alt="Subtle Textures"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Subtle Textures</h3>
                <p className="text-sm">Perfect for creating depth without overwhelming the space</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=small pattern wallpaper in bedroom"
              alt="Small Patterns"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Small Patterns</h3>
                <p className="text-sm">Adds interest without dominating the room</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=botanical wallpaper in dining room"
              alt="Botanical Prints"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Botanical Prints</h3>
                <p className="text-sm">Brings nature indoors for a fresh, organic feel</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=striped wallpaper in home office"
              alt="Stripes"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Stripes</h3>
                <p className="text-sm">Creates the illusion of height or width in a room</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=solid color textured wallpaper in bathroom"
              alt="Solid Textures"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Solid Textures</h3>
                <p className="text-sm">Adds dimension while maintaining a clean look</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=scenic mural wallpaper in powder room"
              alt="Scenic Murals"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Scenic Murals</h3>
                <p className="text-sm">Creates a dramatic statement in smaller rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-6">
            Contact us today to schedule a consultation for your full room wallpaper installation. Our team serves the
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
