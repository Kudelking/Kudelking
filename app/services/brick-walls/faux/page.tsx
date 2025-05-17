import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Faux Brick Walls | High-Quality Brick Veneer Panels",
  description:
    "Transform your space with realistic faux brick walls. Professional installation throughout DC, Maryland & Virginia.",
}

export default function FauxBrickWallsPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=500&width=1200&query=stylish interior with faux brick accent wall"
            alt="Faux Brick Wall Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Faux Brick Walls</h1>
              <p className="text-lg md:text-xl opacity-90">
                Realistic brick appearance at a fraction of the cost and weight
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Perfect Balance of Aesthetics and Practicality</h2>
            <p className="text-muted-foreground mb-4">
              Our premium faux brick panels and veneers provide the beautiful look of brick without the weight, cost, or
              installation complexity of real brick. These high-quality materials perfectly mimic the texture, color
              variation, and character of authentic brick, creating a stunning accent wall that's virtually
              indistinguishable from the real thing.
            </p>
            <p className="text-muted-foreground mb-4">
              With professional installation by our experienced team, faux brick offers an affordable way to add warmth,
              texture, and timeless appeal to any room in your home.
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
              src="/placeholder.svg?height=400&width=600&query=closeup of realistic faux brick texture"
              alt="Faux Brick Texture Closeup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Advantages of Faux Brick</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Budget-Friendly</h3>
            <p className="text-muted-foreground">
              Achieve the classic brick look at a fraction of the cost of real brick installation, making it an
              accessible option for any budget.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Lightweight</h3>
            <p className="text-muted-foreground">
              Faux brick is significantly lighter than real brick, making it suitable for any wall without structural
              concerns or reinforcement needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Quick Installation</h3>
            <p className="text-muted-foreground">
              Our faux brick walls can typically be installed in just 1-2 days, significantly faster than real brick
              installation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Low Maintenance</h3>
            <p className="text-muted-foreground">
              Easy to clean and requiring virtually no maintenance, faux brick offers long-lasting beauty without the
              upkeep of real masonry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Realistic Appearance</h3>
            <p className="text-muted-foreground">
              Today's high-quality faux brick panels feature incredible detail, texture, and color variation that make
              them nearly indistinguishable from real brick.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Versatile Application</h3>
            <p className="text-muted-foreground">
              Can be installed on virtually any surface, including drywall, plaster, concrete, or even over existing
              tile or paneling.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Faux Brick Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=traditional red faux brick panel wall"
                alt="Classic Red Faux Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Classic Red Brick</h3>
              <p className="text-muted-foreground mb-4">
                Our most popular option features the timeless look of traditional red brick with natural color
                variations. Perfect for creating warm, inviting spaces with traditional charm.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Traditional appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Natural color variations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Realistic texture</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=white faux brick wall in modern kitchen"
                alt="White Faux Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">White & Whitewashed</h3>
              <p className="text-muted-foreground mb-4">
                Pre-finished white or whitewashed faux brick panels that create a bright, airy feel while maintaining
                the texture and dimension of brick. Perfect for modern farmhouse and contemporary designs.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Bright, clean aesthetic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Enhances light in rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Traditional or modern applications</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=gray urban faux brick wall"
                alt="Urban Gray Faux Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Urban Gray</h3>
              <p className="text-muted-foreground mb-4">
                Contemporary gray faux brick that creates an industrial, urban loft aesthetic. Perfect for modern spaces
                and creating a sophisticated neutral backdrop for your décor.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Modern industrial look</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Versatile neutral palette</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Contemporary styling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=weathered faux brick wall"
                alt="Weathered Faux Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Weathered & Reclaimed</h3>
              <p className="text-muted-foreground mb-4">
                Faux brick panels with an aged, reclaimed appearance featuring varied colors, distressing, and
                character. Perfect for creating rustic, vintage-inspired spaces with historical charm.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Authentic aged appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Rich color variations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Rustic character and charm</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Installation Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=designer showing faux brick samples to homeowner"
                alt="Consultation and Material Selection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a detailed consultation to understand your vision and design goals. Our experts will help
                you select the perfect faux brick style, color, and pattern for your space, showing you samples to
                ensure you're completely satisfied with your choice before installation begins.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 md:order-last aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=measuring and preparing wall for faux brick installation"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Preparation & Measurement</h3>
              <p className="text-muted-foreground">
                Our team carefully prepares your wall surface for installation, ensuring it's clean, smooth, and free of
                damage. We take precise measurements and create a detailed installation plan to minimize waste and
                ensure a seamless finished appearance with properly aligned panels.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing faux brick panels"
                alt="Panel Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Professional Panel Installation</h3>
              <p className="text-muted-foreground">
                Our skilled installers carefully attach each faux brick panel using professional-grade adhesives and
                fasteners appropriate for your wall type. We meticulously align each panel to ensure the brick pattern
                flows naturally across the entire wall, with special attention to corners and edges for a cohesive look.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 md:order-last aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=seam treatment on faux brick wall"
                alt="Seam Treatment"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Seam Treatment & Detailing</h3>
              <p className="text-muted-foreground">
                We carefully treat all seams between panels to ensure they blend seamlessly. For panels that require it,
                we apply color-matched caulk or filler to panel joints and create realistic mortar lines that complete
                the authentic brick appearance, making it impossible to detect individual panels.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=finishing faux brick wall installation"
                alt="Finishing and Inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Finishing & Final Inspection</h3>
              <p className="text-muted-foreground">
                If desired, we can apply a protective clear sealer to enhance durability and make cleaning easier. We
                complete a thorough inspection of the entire installation, making any final adjustments needed to ensure
                a flawless finished product. Only when you're completely satisfied do we consider the job complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recent Faux Brick Projects</h2>
          <p className="text-muted-foreground mb-8">
            Browse some of our recent faux brick installations throughout the DMV area
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=modern dining room with faux brick accent wall"
              alt="Dining Room Faux Brick Wall"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Dining Room Feature Wall</h3>
                <p className="text-sm">Silver Spring, MD</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=white faux brick accent wall in bedroom"
              alt="White Faux Brick Bedroom"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">White Brick Bedroom Wall</h3>
                <p className="text-sm">Georgetown, DC</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=industrial loft style faux brick wall"
              alt="Industrial Style Faux Brick"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Industrial Loft Style Living Room</h3>
                <p className="text-sm">Alexandria, VA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/portfolio?category=brick-walls">View Full Portfolio</Link>
          </Button>
        </div>
      </section>

      <section id="quote-form" className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Request a Quote</h2>
          <p className="text-center text-muted-foreground mb-6">
            Interested in adding faux brick to your home? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
