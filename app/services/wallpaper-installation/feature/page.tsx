import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Feature Wall Wallpaper Installation | Accent Walls Pro",
  description:
    "Professional feature wall wallpaper installation services. Create a stunning focal point in any room with our expert installation.",
}

export default function FeatureWallPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=bold feature wall with patterned wallpaper in living room"
            alt="Feature Wall Wallpaper"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Feature Wall Wallpaper Installation</h1>
        <p className="text-muted-foreground mb-6">
          Create a stunning focal point in any room with our professional feature wall wallpaper installation. A feature
          wall is the perfect way to add drama, pattern, or color to your space without overwhelming the room.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Why Choose a Feature Wall?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Visual Impact</h3>
            <p className="text-muted-foreground">
              Create a dramatic focal point that draws the eye and defines the character of your space.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Budget-Friendly</h3>
            <p className="text-muted-foreground">
              Get the impact of wallpaper at a fraction of the cost of a full room installation.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Design Flexibility</h3>
            <p className="text-muted-foreground">
              Use bold patterns or colors that might be overwhelming on all walls but perfect as an accent.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Room Definition</h3>
            <p className="text-muted-foreground">
              Define specific areas in open-concept spaces or highlight architectural features.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Easy Updates</h3>
            <p className="text-muted-foreground">
              Change the look of your room with minimal commitment, making future updates simpler.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Premium Materials</h3>
            <p className="text-muted-foreground">
              Use luxury wallpapers that might be cost-prohibitive for an entire room.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Feature Wall Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=living room with bold wallpaper feature wall behind sofa"
              alt="Living Room Feature Wall"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Living Room</h3>
                <p className="text-sm">Behind the sofa or TV to create a focal point</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=bedroom with wallpaper feature wall behind headboard"
              alt="Bedroom Feature Wall"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Bedroom</h3>
                <p className="text-sm">Behind the headboard for a dramatic backdrop</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=dining room with elegant wallpaper feature wall"
              alt="Dining Room Feature Wall"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Dining Room</h3>
                <p className="text-sm">Create an elegant backdrop for dining experiences</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=home office with motivating wallpaper feature wall"
              alt="Home Office Feature Wall"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold mb-1">Home Office</h3>
                <p className="text-sm">Create an inspiring workspace with a feature wall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Feature Wall Installation Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Wall Selection</h3>
                <p className="text-muted-foreground">
                  We help you choose the optimal wall for your feature, considering room layout, lighting, and
                  architectural elements.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Surface Preparation</h3>
                <p className="text-muted-foreground">
                  We thoroughly prepare the wall surface, repairing any imperfections and applying primer to ensure
                  perfect adhesion.
                </p>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-primary/10 p-6 rounded-lg h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Installation</h3>
                <p className="text-muted-foreground">
                  Our professionals install your wallpaper with precision, ensuring perfect pattern alignment and
                  seamless results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Feature Wall Inspiration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=bold geometric wallpaper feature wall"
              alt="Geometric Patterns"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Geometric Patterns</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=floral wallpaper feature wall"
              alt="Floral Designs"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Floral Designs</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=textured grasscloth wallpaper feature wall"
              alt="Textured Wallpapers"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Textured Wallpapers</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=large scale mural wallpaper feature wall"
              alt="Murals & Scenes"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Murals & Scenes</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=metallic gold wallpaper feature wall"
              alt="Metallic Finishes"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Metallic Finishes</h3>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=bold abstract wallpaper feature wall"
              alt="Abstract Designs"
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Abstract Designs</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-6">
            Contact us today to schedule a consultation for your feature wall wallpaper installation. Our team serves
            the entire DC, Maryland, and Virginia area with expert installation services.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
