import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Geometric Accent Walls in DC, Maryland & Virginia | Modern & Custom Designs",
  description:
    "Transform your space with custom geometric accent walls in various patterns and colors. Serving the DMV area with premium geometric wall installation.",
}

export default function GeometricWallsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920&query=modern geometric accent wall in living room"
              alt="Custom Geometric Accent Walls in DMV Area"
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
                <Link href="/services/accent-walls" className="hover:text-white">
                  Accent Walls
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Geometric Walls</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Geometric Accent Walls</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Add bold visual interest to your space with custom geometric accent walls. From simple linear designs to
                complex patterns, our geometric walls create stunning focal points in any room.
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
                  <Link href="/portfolio?category=geometric-walls">View Our Work</Link>
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
                  Transform Your Space With Geometric Accent Walls
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Geometric accent walls add bold visual interest and contemporary style to any space. Our custom
                  geometric walls can be designed with various patterns, colors, and materials to create the perfect
                  statement piece for your home.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Custom Pattern Design</h3>
                      <p className="text-muted-foreground">
                        Choose from a variety of geometric patterns or create your own custom design.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Multiple Material Options</h3>
                      <p className="text-muted-foreground">
                        Available in wood trim, PVC, metal, or painted designs to match your style.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Professional Installation</h3>
                      <p className="text-muted-foreground">
                        Expert craftsmanship ensures your geometric wall is perfectly installed with clean, precise
                        lines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=modern geometric accent wall in contemporary living room"
                  alt="Geometric Accent Wall"
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Geometric Wall Design Options</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our range of geometric wall designs to find the perfect match for your space.
              </p>
            </div>
            <Tabs defaultValue="linear" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="linear">Linear</TabsTrigger>
                  <TabsTrigger value="hexagon">Hexagon</TabsTrigger>
                  <TabsTrigger value="diamond">Diamond</TabsTrigger>
                  <TabsTrigger value="3d">3D Effect</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="linear">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=linear geometric accent wall"
                      alt="Linear Geometric Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Linear Geometric Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Linear geometric walls feature clean, straight lines arranged in various patterns. These designs
                      create a modern, sophisticated look that works well in contemporary spaces.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Clean, minimalist aesthetic</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Customizable line width and spacing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for living rooms and home offices</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in various colors and materials</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Linear Geometric Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="hexagon">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=hexagon geometric accent wall"
                      alt="Hexagon Geometric Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Hexagon Geometric Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Hexagon pattern accent walls create a modern, honeycomb-inspired look that adds depth and visual
                      interest to any room. This contemporary design is perfect for those looking to make a bold
                      statement.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Modern honeycomb-inspired pattern</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in various sizes and arrangements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can incorporate multiple colors for a unique look</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for modern and contemporary spaces</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Hexagon Geometric Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="diamond">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=diamond pattern geometric accent wall"
                      alt="Diamond Pattern Geometric Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Diamond Pattern Geometric Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Diamond pattern geometric walls create an elegant, sophisticated look with their angular design.
                      These walls add a touch of luxury and visual interest to any space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Elegant diamond-shaped pattern</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Customizable diamond size and arrangement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for dining rooms and bedrooms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in wood trim, PVC, or painted designs</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Diamond Pattern Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="3d">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=3d effect geometric accent wall"
                      alt="3D Effect Geometric Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">3D Effect Geometric Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      3D effect geometric walls create the illusion of depth and dimension through clever design and
                      installation techniques. These walls become true conversation pieces in any space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Creates the illusion of depth and dimension</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in various geometric patterns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can incorporate lighting for enhanced effect</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Makes a dramatic statement in any room</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for 3D Effect Geometric Wall</Link>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Geometric Wall Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed geometric accent walls throughout the DMV area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Linear Geometric Wall"
                location="Bethesda, MD"
                image="/placeholder.svg?height=400&width=600&query=modern linear geometric wall in bethesda home"
              />
              <ProjectCard
                title="Hexagon Pattern Feature Wall"
                location="Arlington, VA"
                image="/placeholder.svg?height=400&width=600&query=hexagon pattern feature wall in arlington home"
              />
              <ProjectCard
                title="Diamond Pattern Accent Wall"
                location="Washington, DC"
                image="/placeholder.svg?height=400&width=600&query=diamond pattern accent wall in washington dc home"
              />
              <ProjectCard
                title="3D Effect Geometric Design"
                location="Silver Spring, MD"
                image="/placeholder.svg?height=400&width=600&query=3d effect geometric design in silver spring"
              />
              <ProjectCard
                title="Two-Tone Geometric Feature"
                location="Alexandria, VA"
                image="/placeholder.svg?height=400&width=600&query=two tone geometric accent wall in alexandria"
              />
              <ProjectCard
                title="Bedroom Geometric Accent Wall"
                location="Chevy Chase, MD"
                image="/placeholder.svg?height=400&width=600&query=bedroom geometric accent wall in chevy chase"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?category=geometric-walls">View Full Geometric Wall Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for Your Geometric Accent Wall?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact us today for a free consultation and quote for your custom geometric wall project.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="design" className="text-sm font-medium">
                        Preferred Design
                      </label>
                      <select
                        id="design"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a design</option>
                        <option value="linear">Linear Geometric Wall</option>
                        <option value="hexagon">Hexagon Pattern Wall</option>
                        <option value="diamond">Diamond Pattern Wall</option>
                        <option value="3d">3D Effect Geometric Wall</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project, including dimensions and any specific design ideas."
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Why Choose Our Geometric Walls?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Precision installation for clean, sharp lines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Premium quality materials for lasting beauty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Custom designs tailored to your space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Comprehensive warranty on materials and labor</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                    <p className="mb-4">We provide geometric wall installation throughout the DMV area, including:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Bethesda, MD</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Silver Spring, MD</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Rockville, MD</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Washington, DC</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Arlington, VA</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Alexandria, VA</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
