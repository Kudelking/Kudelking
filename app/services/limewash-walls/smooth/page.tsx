import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Smooth Limewash Walls | Accent Walls Pro",
  description:
    "Transform your space with elegant smooth limewash walls. Professional application throughout DC, Maryland & Virginia.",
}

export default function SmoothLimewashWallsPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=500&width=1200&query=elegant smooth limewash wall in modern luxury home"
            alt="Smooth Limewash Wall Finish"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Smooth Limewash Walls</h1>
              <p className="text-lg md:text-xl opacity-90">
                Subtle elegance with depth, movement, and refined sophistication
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Elegant Sophistication with Subtle Depth</h2>
            <p className="text-muted-foreground mb-4">
              Our smooth limewash finish creates walls with understated elegance and subtle sophistication. This refined
              finish adds depth and visual interest while maintaining a clean, polished appearance that works
              beautifully in both contemporary and traditional spaces.
            </p>
            <p className="text-muted-foreground mb-4">
              Unlike flat paint, smooth limewash has a captivating dimensionality that catches light in unique ways,
              creating walls that appear to shift and change throughout the day as natural light moves across their
              surface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg">
                <Link href="#quote-form">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=closeup of smooth limewash texture"
              alt="Smooth Limewash Texture Closeup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Beauty of Smooth Limewash</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Subtle Movement</h3>
            <p className="text-muted-foreground">
              Our smooth limewash creates surfaces with gentle, cloud-like movement and subtle variations that add depth
              without overwhelming texture.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Refined Matte Finish</h3>
            <p className="text-muted-foreground">
              The characteristic matte finish of limewash provides a sophisticated alternative to flat paint, with a
              depth and luminosity that flat paint cannot achieve.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Light Interaction</h3>
            <p className="text-muted-foreground">
              Smooth limewash interacts beautifully with light, creating subtle shifts in appearance throughout the day
              that bring your walls to life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Contemporary Elegance</h3>
            <p className="text-muted-foreground">
              While rooted in ancient techniques, our smooth limewash creates a timeless look that works perfectly in
              modern, minimalist spaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Natural Materials</h3>
            <p className="text-muted-foreground">
              Made from limestone that has been crushed, burned, and mixed with water, limewash is an eco-friendly,
              non-toxic wall finish.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Breathable Surface</h3>
            <p className="text-muted-foreground">
              Limewash creates breathable walls that help regulate humidity and prevent mold and mildew issues,
              contributing to healthier indoor air.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Color Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=soft white limewash wall"
                alt="White & Off-White"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">White & Off-White</h3>
              <p className="text-muted-foreground">
                Clean, bright whites and subtle off-whites that create airy, luminous spaces. These timeless neutrals
                add elegance without overwhelming your décor.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=warm beige limewash wall"
                alt="Warm Neutrals"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Warm Neutrals</h3>
              <p className="text-muted-foreground">
                Soft beiges, warm taupes, and gentle earth tones that create a cozy, welcoming atmosphere while
                maintaining sophistication.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=cool gray limewash wall"
                alt="Cool Neutrals"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Cool Neutrals</h3>
              <p className="text-muted-foreground">
                Sophisticated grays, soft blues, and subtle greens that create serene, calming spaces with contemporary
                appeal.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=terracotta limewash wall"
                alt="Mediterranean Tones"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Mediterranean Tones</h3>
              <p className="text-muted-foreground">
                Warm terracottas, soft corals, and dusty pinks that evoke the sun-washed walls of Mediterranean villas.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=sage green limewash wall"
                alt="Nature-Inspired"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Nature-Inspired</h3>
              <p className="text-muted-foreground">
                Muted sages, soft mosses, and gentle blue-greens that bring the calming influence of nature indoors.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-52">
              <Image
                src="/placeholder.svg?height=300&width=300&query=custom color limewash wall"
                alt="Custom Colors"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Custom Colors</h3>
              <p className="text-muted-foreground">
                We can create custom limewash colors to perfectly match your design vision and complement your existing
                décor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ideal Spaces for Smooth Limewash</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=limewash living room"
                alt="Living Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Living & Dining Rooms</h3>
              <p className="text-muted-foreground">
                Smooth limewash creates an elegant backdrop for your main living spaces, adding subtle visual interest
                without competing with artwork or furniture. The gentle movement in the finish creates depth that makes
                rooms feel larger and more sophisticated.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=limewash bedroom"
                alt="Bedrooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Bedrooms & Retreats</h3>
              <p className="text-muted-foreground">
                The soft, subtle texture of smooth limewash creates a soothing, restful environment perfect for bedrooms
                and relaxation spaces. Its natural mineral composition contributes to better air quality for healthier
                sleep.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=limewash bathroom"
                alt="Bathrooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Bathrooms & Spa Spaces</h3>
              <p className="text-muted-foreground">
                Smooth limewash is naturally resistant to mold and mildew, making it an excellent choice for bathrooms.
                Its breathable nature helps regulate humidity, while its subtle texture creates a luxurious spa-like
                atmosphere.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=limewash entryway"
                alt="Entryways"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Entryways & Hallways</h3>
              <p className="text-muted-foreground">
                Make a sophisticated first impression with smooth limewash in your entryway. The subtle movement and
                depth create interest in transitional spaces and can make narrow hallways feel more expansive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Application Process</h2>
          <p className="text-muted-foreground mb-8">
            Creating beautiful smooth limewash walls requires skill, expertise, and meticulous attention to detail
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=limewash consultation and color selection"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
            <p className="text-muted-foreground">
              We begin with a thorough consultation to understand your vision and help you select the perfect color and
              finish. We provide samples so you can see how the limewash will look in your space.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=wall preparation for limewash"
                alt="Surface Preparation"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Expert Surface Preparation</h3>
            <p className="text-muted-foreground">
              Our team carefully prepares your walls, addressing any imperfections and applying a mineral primer to
              ensure proper adhesion and a flawless final appearance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=artisan applying smooth limewash"
                alt="Artisanal Application"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Artisanal Application</h3>
            <p className="text-muted-foreground">
              Our skilled artisans apply multiple layers of limewash using specialized brushes and techniques to achieve
              the perfect balance of smoothness and subtle movement.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Before & After Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&query=before limewash plain painted wall"
                alt="Before: Standard Painted Wall"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded">BEFORE</div>
            </div>
            <p className="text-center text-sm text-muted-foreground">Standard flat paint lacks depth and character</p>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&query=after elegant smooth limewash wall"
                alt="After: Smooth Limewash Finish"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-primary/80 text-white px-3 py-1 rounded">AFTER</div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Smooth limewash adds subtle depth, movement, and timeless elegance
            </p>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Request a Quote</h2>
          <p className="text-center text-muted-foreground mb-6">
            Interested in smooth limewash for your home? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
