import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Custom Accent Walls in DC, Maryland & Virginia | Modern & Wood Slat Designs",
  description:
    "Transform your space with custom accent walls including modern geometric designs, wood slat walls, and painted accent wall designs throughout the DMV area.",
}

export default function AccentWallsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920&query=modern geometric accent wall in living room"
              alt="Custom Accent Walls in DMV Area"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-4 text-sm text-white/80">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Accent Walls</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Custom Accent Walls</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Transform your space with stunning accent walls that add dimension, texture, and visual interest. From
                modern geometric designs to wood slat walls, we create custom focal points that elevate any room.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#quote">Get a Free Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  asChild
                >
                  <Link href="/portfolio?category=accent-walls">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Elevate Your Space With a Custom Accent Wall
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  An accent wall is more than just a painted surface – it's a statement piece that transforms your
                  entire room. Our custom accent walls are designed to reflect your personal style while adding depth
                  and character to your space.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Modern Geometric Designs</h3>
                      <p className="text-muted-foreground">
                        Bold patterns and shapes that create visual interest and contemporary appeal.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Wood Slat Accent Walls</h3>
                      <p className="text-muted-foreground">
                        Warm, textured wooden elements that add natural beauty and dimension.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Painted Accent Wall Designs</h3>
                      <p className="text-muted-foreground">
                        Custom color schemes and artistic patterns that complement your décor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=wood slat accent wall in bedroom"
                  alt="Wood Slat Accent Wall"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Accent Wall Options</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our range of accent wall styles to find the perfect match for your space.
              </p>
            </div>
            <Tabs defaultValue="geometric" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList>
                  <TabsTrigger value="geometric">Geometric</TabsTrigger>
                  <TabsTrigger value="wood-slat">Wood Slat</TabsTrigger>
                  <TabsTrigger value="painted">Painted Designs</TabsTrigger>
                  <TabsTrigger value="herringbone">Herringbone</TabsTrigger>
                  <TabsTrigger value="hexagon">Hexagon</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="geometric">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?key=mevay"
                      alt="Modern Geometric Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Modern Geometric Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Our geometric accent walls feature bold lines, shapes, and patterns that create a striking focal
                      point in any room. Whether you prefer a subtle, tone-on-tone design or a bold, contrasting
                      statement, we can create a custom geometric pattern that complements your space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Custom pattern design to match your style</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Precision installation for clean, sharp lines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Multiple color options and combinations</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for living rooms, bedrooms, and offices</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Geometric Accent Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="wood-slat">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=wood slat accent wall"
                      alt="Wood Slat Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Wood Slat Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Wood slat walls add warmth, texture, and natural beauty to any space. Our custom wood slat accent
                      walls can be designed with various wood types, finishes, and spacing to create the perfect look
                      for your home. They're ideal for adding a touch of modern organic style to your interior.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Multiple wood species and stain options</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Customizable slat width and spacing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Optional integrated lighting effects</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Great for living rooms, dining areas, and entryways</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Wood Slat Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="painted">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=painted accent wall design"
                      alt="Painted Accent Wall Design"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Painted Accent Wall Designs</h3>
                    <p className="text-muted-foreground mb-6">
                      Our painted accent walls go beyond simple color blocks. We create custom designs, patterns, and
                      artistic effects that transform your wall into a work of art. From subtle tone-on-tone patterns to
                      bold, eye-catching designs, our painted accent walls are tailored to your style.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Custom color matching to your décor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Unique patterns and artistic techniques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>High-quality, durable paint finishes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Suitable for any room in your home</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Painted Accent Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="herringbone">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=herringbone wood accent wall"
                      alt="Herringbone Wood Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Herringbone Wood Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Herringbone pattern accent walls add a touch of elegance and sophistication to any space. This
                      classic pattern creates visual interest through its distinctive V-shaped arrangement of wood
                      pieces, bringing texture and warmth to your room.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in various wood species and finishes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can be installed at different angles for unique looks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Works beautifully in dining rooms and bedrooms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can be stained or painted to match your décor</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Herringbone Accent Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="hexagon">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=hexagon pattern accent wall"
                      alt="Hexagon Pattern Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Hexagon Pattern Accent Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Hexagon pattern accent walls create a modern, honeycomb-inspired look that adds depth and visual
                      interest to any room. This contemporary design is perfect for those looking to make a bold
                      statement with their accent wall.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in wood, PVC, or painted designs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can incorporate multiple colors for a unique look</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for modern and contemporary spaces</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Creates a stunning focal point in any room</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Hexagon Pattern Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Recent Accent Wall Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed accent walls throughout the DMV area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Geometric Accent Wall"
                location="Bethesda, MD"
                image="/placeholder.svg?height=400&width=600&query=modern geometric accent wall in living room"
              />
              <ProjectCard
                title="Wood Slat Feature Wall"
                location="Arlington, VA"
                image="/placeholder.svg?height=400&width=600&query=wood slat accent wall in bedroom"
              />
              <ProjectCard
                title="Painted Geometric Design"
                location="Washington, DC"
                image="/placeholder.svg?height=400&width=600&query=painted geometric accent wall"
              />
              <ProjectCard
                title="Herringbone Wood Accent Wall"
                location="Silver Spring, MD"
                image="/placeholder.svg?height=400&width=600&query=herringbone wood accent wall"
              />
              <ProjectCard
                title="Hexagon Pattern Wall"
                location="Alexandria, VA"
                image="/placeholder.svg?height=400&width=600&query=hexagon pattern accent wall"
              />
              <ProjectCard
                title="Minimalist Linear Design"
                location="Chevy Chase, MD"
                image="/placeholder.svg?height=400&width=600&query=minimalist linear accent wall"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?category=accent-walls">View Full Accent Wall Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get answers to common questions about our accent wall installation services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">How long does an accent wall installation take?</h3>
                  <p className="text-muted-foreground">
                    Most accent wall projects can be completed in 1-2 days, depending on the complexity and size. More
                    intricate designs or wood slat installations may take 2-3 days to ensure perfect execution.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">How much does an accent wall cost?</h3>
                  <p className="text-muted-foreground">
                    Pricing varies based on the size, materials, and complexity of the design. Painted accent walls
                    typically start around $500, while wood slat walls and more complex designs may range from
                    $1,200-$3,000+. We provide detailed quotes after understanding your specific project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Which rooms are best for accent walls?</h3>
                  <p className="text-muted-foreground">
                    Accent walls work well in virtually any room. They're particularly popular in living rooms,
                    bedrooms, home offices, and dining areas. The best wall for an accent is typically the focal point
                    of the room, such as behind a bed, sofa, or fireplace.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Do you help with design ideas?</h3>
                  <p className="text-muted-foreground">
                    Our team provides design consultation to help you choose the perfect accent wall style for your
                    space. We consider your existing décor, color scheme, and personal preferences to recommend designs
                    that will enhance your home.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">What materials do you use for wood slat walls?</h3>
                  <p className="text-muted-foreground">
                    We offer a variety of wood options including oak, walnut, pine, and cedar. We can also use
                    engineered wood products for specific applications. All materials are high-quality and can be
                    stained or painted to your specifications.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Can accent walls increase home value?</h3>
                  <p className="text-muted-foreground">
                    Well-designed accent walls can increase your home's appeal to potential buyers and may contribute to
                    higher property value. They're a relatively affordable upgrade that can significantly enhance the
                    aesthetic appeal of your space.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
