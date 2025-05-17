import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Wood Slat Accent Walls in DC, Maryland & Virginia | Modern & Custom Designs",
  description:
    "Transform your space with custom wood slat accent walls in various styles, finishes, and patterns. Serving the DMV area with premium wood slat wall installation.",
}

export default function WoodSlatWallsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920&query=modern wood slat accent wall in living room"
              alt="Custom Wood Slat Accent Walls in DMV Area"
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
                <span>Wood Slat Walls</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Wood Slat Accent Walls</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Add warmth, texture, and dimension to your space with custom wood slat accent walls. From modern
                horizontal designs to intricate patterns, our wood slat walls create stunning focal points in any room.
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
                  <Link href="/portfolio?category=wood-slat-walls">View Our Work</Link>
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
                  Transform Your Space With Wood Slat Accent Walls
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Wood slat walls add warmth, texture, and natural beauty to any space. Our custom wood slat accent
                  walls can be designed with various wood types, finishes, and spacing to create the perfect look for
                  your home.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Premium Wood Selection</h3>
                      <p className="text-muted-foreground">
                        Choose from oak, walnut, pine, cedar, and more for your custom wood slat wall.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Custom Designs</h3>
                      <p className="text-muted-foreground">
                        Horizontal, vertical, or patterned slat arrangements to match your style and space.
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
                        Expert craftsmanship ensures your wood slat wall is perfectly installed and built to last.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=600&width=600&query=wood slat accent wall in modern living room"
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Wood Slat Wall Design Options</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our range of wood slat wall designs to find the perfect match for your space.
              </p>
            </div>
            <Tabs defaultValue="horizontal" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
                  <TabsTrigger value="vertical">Vertical</TabsTrigger>
                  <TabsTrigger value="patterned">Patterned</TabsTrigger>
                  <TabsTrigger value="backlit">Backlit</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="horizontal">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=horizontal wood slat accent wall"
                      alt="Horizontal Wood Slat Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Horizontal Wood Slat Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Horizontal wood slat walls create a sense of width and space, making them perfect for rooms that
                      you want to visually expand. The clean, linear look provides a modern aesthetic that works well in
                      contemporary homes.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Creates a sense of width and openness</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Customizable slat width and spacing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for living rooms and bedrooms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Available in various wood species and finishes</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Horizontal Wood Slat Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vertical">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=vertical wood slat accent wall"
                      alt="Vertical Wood Slat Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Vertical Wood Slat Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Vertical wood slat walls create a sense of height, making them ideal for rooms with lower
                      ceilings. The upward visual flow draws the eye up and adds an elegant, elongating effect to your
                      space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Creates a sense of height and grandeur</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Varying slat widths available for custom looks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Ideal for entryways and dining rooms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can be stained or painted to match your décor</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Vertical Wood Slat Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="patterned">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=patterned wood slat accent wall"
                      alt="Patterned Wood Slat Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Patterned Wood Slat Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Patterned wood slat walls take the texture and warmth of traditional slat walls to the next level
                      with intricate designs. These statement walls become true works of art that transform your space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Unique geometric or organic patterns</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Can incorporate multiple wood species or colors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for creating a dramatic focal point</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Custom designed to match your style</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Patterned Wood Slat Wall</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="backlit">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=backlit wood slat accent wall"
                      alt="Backlit Wood Slat Accent Wall"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Backlit Wood Slat Walls</h3>
                    <p className="text-muted-foreground mb-6">
                      Backlit wood slat walls combine the natural beauty of wood with dramatic lighting effects. LED
                      lighting installed behind the slats creates a warm glow that highlights the texture and adds
                      ambiance to your space.
                    </p>
                    <ul className="grid gap-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Integrated LED lighting for dramatic effect</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Optional color-changing or dimmable lights</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Creates stunning ambient lighting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Perfect for media rooms and living spaces</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="#quote">Get a Quote for Backlit Wood Slat Wall</Link>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Wood Slat Wall Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our portfolio of completed wood slat accent walls throughout the DMV area.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Modern Horizontal Slat Wall"
                location="Bethesda, MD"
                image="/placeholder.svg?height=400&width=600&query=modern horizontal wood slat wall in bethesda home"
              />
              <ProjectCard
                title="Walnut Vertical Slat Feature"
                location="Arlington, VA"
                image="/placeholder.svg?height=400&width=600&query=walnut vertical wood slat wall in arlington home"
              />
              <ProjectCard
                title="Backlit Oak Slat Wall"
                location="Washington, DC"
                image="/placeholder.svg?height=400&width=600&query=backlit oak slat wall in washington dc home"
              />
              <ProjectCard
                title="Geometric Pattern Slat Design"
                location="Silver Spring, MD"
                image="/placeholder.svg?height=400&width=600&query=geometric pattern wood slat wall in silver spring"
              />
              <ProjectCard
                title="Two-Tone Wood Slat Feature"
                location="Alexandria, VA"
                image="/placeholder.svg?height=400&width=600&query=two tone wood slat accent wall in alexandria"
              />
              <ProjectCard
                title="Media Wall with Wood Slats"
                location="Chevy Chase, MD"
                image="/placeholder.svg?height=400&width=600&query=media wall with wood slats in chevy chase"
              />
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/portfolio?category=wood-slat-walls">View Full Wood Slat Wall Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Wood Options & Finishes</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose from a variety of premium wood species and finishes for your custom slat wall.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=oak wood texture"
                      alt="Oak Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Oak</h3>
                  <p className="text-muted-foreground">
                    A classic hardwood with distinctive grain patterns. Available in red oak or white oak varieties.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=walnut wood texture"
                      alt="Walnut Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Walnut</h3>
                  <p className="text-muted-foreground">
                    Rich, dark tones with straight grain. Adds luxury and sophistication to any space.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=maple wood texture"
                      alt="Maple Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Maple</h3>
                  <p className="text-muted-foreground">
                    Light colored with subtle grain patterns. Perfect for contemporary and minimalist spaces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=pine wood texture"
                      alt="Pine Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Pine</h3>
                  <p className="text-muted-foreground">
                    Affordable softwood with prominent knots and grain. Great for rustic and farmhouse styles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=cedar wood texture"
                      alt="Cedar Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cedar</h3>
                  <p className="text-muted-foreground">
                    Aromatic wood with natural resistance to moisture. Ideal for bathrooms and humid areas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-40 mb-4 rounded overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=300&query=painted wood slats"
                      alt="Painted Wood"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Painted Finish</h3>
                  <p className="text-muted-foreground">
                    Custom color options to match your décor. Available in matte, satin, or gloss finishes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for Your Wood Slat Accent Wall?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Contact us today for a free consultation and quote for your custom wood slat wall project.
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
                        <option value="horizontal">Horizontal Wood Slat Wall</option>
                        <option value="vertical">Vertical Wood Slat Wall</option>
                        <option value="patterned">Patterned Wood Slat Wall</option>
                        <option value="backlit">Backlit Wood Slat Wall</option>
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
                    <h3 className="text-xl font-bold mb-4">Why Choose Our Wood Slat Walls?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Premium quality materials for lasting beauty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Expert installation by skilled craftsmen</span>
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
                    <p className="mb-4">We provide wood slat wall installation throughout the DMV area, including:</p>
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
