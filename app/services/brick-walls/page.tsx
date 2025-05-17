import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Brick Walls | Accent Walls Pro",
  description:
    "Premium brick wall installations for your home. Real and faux brick options available. Serving DC, Maryland & Virginia.",
}

export default function BrickWallsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/brick-accent-wall-living-room.png"
            alt="Brick Wall"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Brick Walls</h1>
        <p className="text-muted-foreground mb-6">
          Add character, texture, and timeless appeal to your home with our premium brick wall installations. Whether
          you're looking for an authentic real brick wall or a more cost-effective faux brick option, our expert team
          delivers flawless installations that transform ordinary spaces into standout rooms.
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
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Brick Wall Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?key=ps763" alt="Real Brick Walls" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Real Brick</h3>
              <p className="text-muted-foreground mb-4">
                Authentic thin brick veneer that provides the genuine look, texture, and durability of real brick
                without the structural requirements of traditional masonry.
              </p>
              <Button asChild>
                <Link href="/services/brick-walls/real">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?key=tr967" alt="Faux Brick Walls" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Faux Brick</h3>
              <p className="text-muted-foreground mb-4">
                High-quality faux brick panels and veneers that perfectly mimic the look of real brick at a more
                affordable price point. Lightweight and easy to install.
              </p>
              <Button asChild>
                <Link href="/services/brick-walls/faux">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Benefits of Brick Accent Walls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Timeless Appeal</h3>
            <p className="text-muted-foreground">
              Brick has been a cherished building material for centuries, adding a classic, enduring aesthetic to any
              space.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Texture & Dimension</h3>
            <p className="text-muted-foreground">
              Brick walls add significant tactile texture and visual dimension that flat walls simply can't match.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Design Versatility</h3>
            <p className="text-muted-foreground">
              Works with virtually any décor style from industrial and rustic to modern and traditional.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Increased Home Value</h3>
            <p className="text-muted-foreground">
              Quality brick accent walls can increase your home's appeal and market value.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Durability</h3>
            <p className="text-muted-foreground">
              Brick is highly durable and resistant to wear, making it perfect for high-traffic areas of your home.
            </p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Low Maintenance</h3>
            <p className="text-muted-foreground">
              Once installed, brick walls require minimal maintenance while continuing to look beautiful for years.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Popular Applications</h2>

        <Tabs defaultValue="living-rooms" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="living-rooms">Living Rooms</TabsTrigger>
            <TabsTrigger value="kitchens">Kitchens</TabsTrigger>
            <TabsTrigger value="fireplaces">Fireplaces</TabsTrigger>
            <TabsTrigger value="exteriors">Exteriors</TabsTrigger>
          </TabsList>

          <TabsContent value="living-rooms">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/modern-living-room-brick.png" alt="Living Room Brick Wall" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Living Room Brick Walls</h3>
                <p className="text-muted-foreground mb-4">
                  A brick accent wall in your living room creates an instant focal point and adds warmth and character
                  to the space. Whether behind your sofa or TV, a brick wall transforms your living area into a
                  magazine-worthy setting.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Creates a stunning focal point</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Adds warmth and texture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Works with various décor styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Can be painted or left natural</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="kitchens">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-last relative aspect-video rounded-lg overflow-hidden">
                <Image src="/white-cabinet-brick-kitchen.png" alt="Kitchen Brick Backsplash" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Kitchen Brick Accents</h3>
                <p className="text-muted-foreground mb-4">
                  Brick in the kitchen, whether as a backsplash or full wall, adds rustic charm and industrial
                  character. Its texture contrasts beautifully with smooth countertops and cabinets, creating visual
                  interest and depth.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Heat and stain resistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Perfect for backsplashes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Creates a rustic or industrial vibe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Sealed for easy cleaning</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fireplaces">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=modern fireplace with brick surround"
                  alt="Brick Fireplace Surround"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Fireplace Surrounds</h3>
                <p className="text-muted-foreground mb-4">
                  Brick and fireplaces are a natural pairing. A brick fireplace surround adds traditional charm or, when
                  painted, can create a more contemporary look. It's a durable, heat-resistant option that enhances the
                  focal point of your room.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Heat resistant and safe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Traditional or contemporary options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Can extend to the ceiling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Complements wood mantels</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="exteriors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:order-last relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&query=outdoor patio with exposed brick feature wall"
                  alt="Exterior Brick Feature Wall"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Exterior Accent Walls</h3>
                <p className="text-muted-foreground mb-4">
                  Brick isn't just for interiors. Our weather-resistant brick options are perfect for outdoor living
                  spaces, patios, and exterior accent walls. They add texture and warmth to outdoor entertaining areas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Weather and UV resistant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Perfect for outdoor kitchens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Enhances patio and deck areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary mr-2">✓</span>
                    <span>Extremely durable</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Installation Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=designer measuring wall for brick installation"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision, space, and requirements. Our design
                team helps you select the perfect brick style, color, and pattern for your space.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall preparation for brick installation"
                alt="Wall Preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Wall Preparation</h3>
              <p className="text-muted-foreground">
                Our team prepares your walls by ensuring they're clean, stable, and ready for brick application. We
                address any existing damage and make sure the surface is properly prepared for maximum adhesion.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=installing brick veneer on wall"
                alt="Installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Expert Installation</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen carefully install each brick or panel, ensuring proper alignment, level
                installation, and the appropriate pattern. We pay meticulous attention to details that make the
                difference between an amateur and professional installation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=400&query=grouting and finishing brick wall"
                alt="Grouting & Finishing"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Grouting & Finishing</h3>
              <p className="text-muted-foreground">
                We apply professional-grade grout between the bricks to create an authentic finished look. The color of
                the grout is carefully selected to complement your brick and enhance the overall appearance.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=sealing brick wall for protection"
                alt="Sealing & Protection"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Sealing & Final Inspection</h3>
              <p className="text-muted-foreground">
                We apply a high-quality sealer to protect your brick wall and make it easier to clean and maintain. A
                final thorough inspection ensures every detail meets our exacting standards before we consider the job
                complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-muted/50 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Transform Your Space?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to schedule a free consultation and quote for your brick wall project. Our team is
                ready to help you create a stunning feature that will elevate your entire space.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=beautiful brick accent wall"
                alt="Beautiful Brick Accent Wall"
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
