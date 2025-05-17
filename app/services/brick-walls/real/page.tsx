import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteForm } from "@/components/quote-form"

export const metadata = {
  title: "Real Brick Walls | Authentic Thin Brick Veneer Installation",
  description:
    "Transform your space with authentic real brick veneer walls. Professional installation throughout DC, Maryland & Virginia.",
}

export default function RealBrickWallsPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=500&width=1200&query=beautiful authentic brick wall in modern home"
            alt="Real Brick Wall Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Real Brick Walls</h1>
              <p className="text-lg md:text-xl opacity-90">
                Authentic thin brick veneer with genuine texture and character
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Authentic Look and Feel of Real Brick</h2>
            <p className="text-muted-foreground mb-4">
              Our authentic thin brick veneer delivers the genuine look, texture, and durability of real brick without
              the structural requirements and weight of traditional masonry. Each piece is made from real clay and
              kiln-fired just like traditional bricks, ensuring an authentic appearance that synthetic alternatives
              simply cannot match.
            </p>
            <p className="text-muted-foreground mb-4">
              With our professional installation, these thin brick veneers are virtually indistinguishable from
              traditional full-brick walls, giving you all the character and charm of real brick at a fraction of the
              weight and cost.
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
              src="/placeholder.svg?height=400&width=600&query=closeup of real brick veneer texture"
              alt="Real Brick Texture Closeup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Benefits of Real Brick Veneer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Authentic Look & Feel</h3>
            <p className="text-muted-foreground">
              Made from genuine clay and kiln-fired just like traditional bricks, our veneer provides authentic texture,
              color variation, and character that synthetic products can't replicate.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Lightweight Solution</h3>
            <p className="text-muted-foreground">
              At a fraction of the weight of traditional brick, our thin veneer can be installed on virtually any wall
              without structural reinforcement, opening up many more design possibilities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Exceptional Durability</h3>
            <p className="text-muted-foreground">
              Real brick veneer stands the test of time, resisting fading, wear, and damage. It's a long-term investment
              in your home's beauty and value.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Consistent Temperature</h3>
            <p className="text-muted-foreground">
              Brick naturally helps regulate temperature, keeping spaces cooler in summer and warmer in winter,
              potentially improving your home's energy efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Fire Resistant</h3>
            <p className="text-muted-foreground">
              Made from natural clay, real brick veneer offers excellent fire resistance, providing an additional layer
              of safety for your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Value Enhancement</h3>
            <p className="text-muted-foreground">
              The timeless appeal and quality of real brick veneer can increase your home's market value and appeal to
              potential buyers.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Style Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=traditional red brick wall"
                alt="Traditional Red Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Traditional Red Brick</h3>
              <p className="text-muted-foreground mb-4">
                Classic red brick options that range from bright, uniform tones to more varied, tumbled looks with
                rustic character. Perfect for traditional and colonial-style homes or spaces.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Classic, timeless appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Multiple shade variations available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Uniform or rustic texture options</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=whitewashed brick wall interior"
                alt="Whitewashed Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Whitewashed & Painted</h3>
              <p className="text-muted-foreground mb-4">
                Real brick that's whitewashed or painted for a more modern, clean look while still maintaining the
                texture and dimension of authentic brick. Popular in contemporary and farmhouse designs.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Brightens spaces while preserving texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Various whitewash techniques available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Custom paint colors offered</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=reclaimed antique brick wall"
                alt="Reclaimed Look Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Reclaimed Look</h3>
              <p className="text-muted-foreground mb-4">
                Brick veneer with the weathered, aged appearance of reclaimed brick, offering incredible character and
                historical charm without the cost and limited availability of true reclaimed materials.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Authentic aged appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Varied colors and patina</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Perfect for historic or industrial styles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=modern gray brick accent wall"
                alt="Contemporary Brick"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Contemporary Options</h3>
              <p className="text-muted-foreground mb-4">
                Modern brick options in sleek grays, blacks, and unique shapes that complement contemporary design while
                providing the authenticity and quality of real brick.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Modern colors and finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Unique sizes and patterns available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Perfect for modern and minimalist spaces</span>
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
                src="/placeholder.svg?height=300&width=400&query=designer selecting brick samples with client"
                alt="Consultation and Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Material Selection</h3>
              <p className="text-muted-foreground">
                We begin with an in-depth consultation to understand your vision and requirements. We'll help you select
                the perfect brick style, color, and pattern from our extensive collection of genuine brick veneers.
                You'll be able to see and feel samples to ensure you're getting exactly what you want.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 md:order-last aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=preparing wall for brick veneer installation"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Surface Preparation</h3>
              <p className="text-muted-foreground">
                Our team carefully prepares your wall surface to ensure proper adhesion. This includes cleaning,
                repairing any damage, and applying a suitable substrate if needed. Proper preparation is critical for a
                long-lasting installation that won't develop issues over time.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing thin brick veneer on wall"
                alt="Brick Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Expert Brick Installation</h3>
              <p className="text-muted-foreground">
                Our skilled masons meticulously install each piece of brick veneer, ensuring proper spacing, alignment,
                and pattern. We pay careful attention to corners, edges, and transitions to create a seamless, authentic
                appearance. Our installation techniques ensure the finished product looks indistinguishable from a
                traditional brick wall.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 md:order-last aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=applying grout between bricks"
                alt="Grouting Process"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Precise Grouting</h3>
              <p className="text-muted-foreground">
                We carefully apply high-quality grout between each brick, creating the mortar joints that give brick
                walls their distinctive character. You can choose from various grout colors and joint techniques to
                achieve your desired aesthetic, from traditional to contemporary.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=applying sealer to brick wall"
                alt="Sealing and Finishing"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Sealing & Final Detailing</h3>
              <p className="text-muted-foreground">
                Once the installation is complete and the grout has cured, we apply a high-quality sealer to protect
                your brick wall from stains and make it easier to clean. We perform a thorough final inspection and
                cleanup, ensuring every detail is perfect before considering the job complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Recent Real Brick Projects</h2>
          <p className="text-muted-foreground mb-8">
            Browse some of our recent real brick installations throughout the DMV area
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=modern living room with brick accent wall"
              alt="Living Room Brick Accent Wall"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Living Room Accent Wall</h3>
                <p className="text-sm">Bethesda, MD</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=kitchen with whitewashed brick backsplash"
              alt="Kitchen Brick Backsplash"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Whitewashed Brick Kitchen</h3>
                <p className="text-sm">Arlington, VA</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=brick fireplace renovation"
              alt="Brick Fireplace Renovation"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Brick Fireplace Renovation</h3>
                <p className="text-sm">Washington, DC</p>
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
            Interested in adding real brick to your home? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
