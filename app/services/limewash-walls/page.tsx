import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Limewash Walls | Accent Walls Pro",
  description:
    "Transform your space with luxurious limewash wall finishes. Smooth and textured styles available. Serving DC, Maryland & Virginia.",
}

export default function LimewashWallsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1200&query=elegant limewash wall finish in living room"
            alt="Limewash Wall Finish"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Limewash Walls</h1>
        <p className="text-muted-foreground mb-6">
          Elevate your space with the timeless elegance of limewash wall finishes. This centuries-old technique creates
          walls with incredible depth, subtle movement, and a unique matte finish that catches light beautifully.
          Available in smooth and textured options, our professional limewash application adds sophisticated character
          and old-world charm to any room.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Limewash Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=smooth limewash wall finish"
                alt="Smooth Limewash"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Smooth Limewash</h3>
              <p className="text-muted-foreground mb-4">
                Our smooth limewash finish creates elegant walls with subtle texture and depth. This refined finish adds
                sophistication to any space while maintaining a clean, contemporary look.
              </p>
              <Button asChild>
                <Link href="/services/limewash-walls/smooth">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=600&query=textured limewash wall finish"
                alt="Textured Limewash"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Textured Limewash</h3>
              <p className="text-muted-foreground mb-4">
                Our textured limewash creates walls with pronounced texture and dramatic visual interest. This finish
                adds rustic character and Mediterranean charm to any room.
              </p>
              <Button asChild>
                <Link href="/services/limewash-walls/textured">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">The Beauty of Limewash</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Old-World Character</h3>
            <p className="text-muted-foreground">
              Limewash dates back thousands of years and adds authentic old-world charm and character that modern paints
              simply cannot replicate.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Natural Materials</h3>
            <p className="text-muted-foreground">
              Made from limestone that has been crushed, burned, and mixed with water, limewash is an eco-friendly,
              natural wall finish.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Depth and Dimension</h3>
            <p className="text-muted-foreground">
              Unlike flat paint, limewash creates surfaces with subtle movement, depth, and a unique play of light and
              shadow.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Breathable</h3>
            <p className="text-muted-foreground">
              Limewash is naturally breathable, allowing moisture to evaporate and helping to prevent mold and mildew
              issues.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Unique Patina</h3>
            <p className="text-muted-foreground">
              Limewash continues to carbonate and harden over time, developing a beautiful patina that gets better with
              age.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Timeless Appeal</h3>
            <p className="text-muted-foreground">
              The subtle, matte finish of limewash creates an enduring look that transcends trends and complements any
              décor style.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=limewash living room"
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
              src="/placeholder.svg?height=300&width=400&query=limewash bedroom walls"
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
              src="/placeholder.svg?height=300&width=400&query=limewash dining room"
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
              src="/placeholder.svg?height=300&width=400&query=limewash bathroom"
              alt="Bathrooms"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Bathrooms</h3>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=300&width=400&query=limewash kitchen"
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
              src="/placeholder.svg?height=300&width=400&query=limewash accent wall"
              alt="Accent Walls"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-bold text-lg">Accent Walls</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Limewash Application Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=limewash color consultation"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Color Selection</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision. Our design team helps you select the
                perfect limewash color, finish, and technique for your space, providing samples to ensure you're
                confident in your choice.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall preparation for limewash"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Surface Preparation</h3>
              <p className="text-muted-foreground">
                Our team carefully prepares your walls by cleaning, repairing any damage, and applying a mineral primer
                if needed. Proper preparation is essential for a successful limewash application and long-lasting
                results.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=applying limewash to wall"
                alt="Limewash Application"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Artisanal Application</h3>
              <p className="text-muted-foreground">
                Our skilled artisans apply the limewash using traditional techniques and specialized brushes. This is a
                meticulous process requiring expertise to achieve the characteristic depth and subtle variations that
                make limewash so special.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=limewash texture creation"
                alt="Texture Development"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Texture & Depth Development</h3>
              <p className="text-muted-foreground">
                For textured finishes, additional layers are applied using specialized techniques to build up the
                desired texture. For smooth finishes, we focus on creating subtle depth and movement within the surface.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=finished limewash wall inspection"
                alt="Final Inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Curing & Final Review</h3>
              <p className="text-muted-foreground">
                After application, the limewash needs time to properly cure and develop its characteristic appearance.
                We conduct a final inspection to ensure the finish meets our exacting standards and your expectations.
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
                Contact us today to schedule a free consultation and quote for your limewash project. Our team is ready
                to help you create walls with timeless beauty and character that will transform your space.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image src="/soft-beige-limewash.png" alt="Elegant Limewash Finish" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
