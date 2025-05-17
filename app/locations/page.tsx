import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CheckCircle, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Accent Wall Installation in Montgomery County, DC & Maryland | Service Areas",
  description:
    "Professional accent wall installation serving Montgomery County, Anne Arundel County, Howard County, Frederick County, Silver Spring, Bethesda, Rockville, and throughout the DMV area.",
  keywords: [
    "accent walls Montgomery County",
    "board and batten Silver Spring",
    "wood slat walls Bethesda",
    "accent walls Rockville",
    "media walls Chevy Chase",
    "fireplace buildouts DC",
    "accent walls Howard County",
    "accent walls Anne Arundel County",
    "accent walls Frederick County",
    "accent walls Gaithersburg",
    "accent walls North Bethesda",
    "accent walls Annapolis",
  ],
}

export default function LocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?key=3lh9b"
              alt="Accent Walls in Maryland and DC"
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
                <span>Service Areas</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Service Areas</h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                Proudly serving Montgomery County, Anne Arundel County, Howard County, Frederick County, and the
                District of Columbia with premium accent wall installation services.
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
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Areas We Serve</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Accent Walls Pro provides premium accent wall installation services throughout Maryland and the District
                of Columbia. Our service area includes:
              </p>
            </div>

            <Tabs defaultValue="montgomery" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="flex flex-nowrap">
                  <TabsTrigger value="montgomery">Montgomery County</TabsTrigger>
                  <TabsTrigger value="anne-arundel">Anne Arundel County</TabsTrigger>
                  <TabsTrigger value="howard">Howard County</TabsTrigger>
                  <TabsTrigger value="frederick">Frederick County</TabsTrigger>
                  <TabsTrigger value="dc">District of Columbia</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="montgomery">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?key=fuas2"
                      alt="Accent Walls in Montgomery County"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Montgomery County, MD</h3>
                    <p className="text-muted-foreground mb-6">
                      Montgomery County is one of our primary service areas, where we've completed numerous accent wall
                      projects in homes and businesses. Our team is familiar with local building codes and design
                      preferences throughout the county.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cities & Areas Served:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Bethesda</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Silver Spring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Rockville</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Gaithersburg</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>North Bethesda</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Also Serving:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Chevy Chase</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Potomac</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Kensington</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Takoma Park</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Wheaton</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="#quote">Get a Quote</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/portfolio?location=montgomery-county">View Montgomery County Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Recent Projects in Montgomery County</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                      title="Modern Wood Slat Wall"
                      location="Bethesda, MD"
                      image="/placeholder.svg?key=buk63"
                    />
                    <ProjectCard
                      title="Geometric Accent Wall"
                      location="Silver Spring, MD"
                      image="/placeholder.svg?key=jx1j6"
                    />
                    <ProjectCard
                      title="Board & Batten Living Room"
                      location="Rockville, MD"
                      image="/placeholder.svg?key=15gbx"
                    />
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Montgomery County Accent Wall Trends</h3>
                  <p className="mb-4">
                    In Montgomery County, we've noticed these popular accent wall trends among homeowners:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Wood Slat Walls:</span> Particularly popular in Bethesda and Chevy
                        Chase homes, adding warmth and texture to modern interiors.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Board & Batten:</span> A favorite in Silver Spring and Rockville,
                        especially in dining rooms and entryways.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Media Walls:</span> Growing in popularity throughout the county,
                        particularly in basement renovations and family rooms.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Geometric Patterns:</span> Trending in North Bethesda and
                        Gaithersburg, adding visual interest to home offices and bedrooms.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="anne-arundel">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=annapolis maryland home with accent wall"
                      alt="Accent Walls in Anne Arundel County"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Anne Arundel County, MD</h3>
                    <p className="text-muted-foreground mb-6">
                      We proudly serve Anne Arundel County with premium accent wall installation services. From
                      waterfront properties in Annapolis to family homes throughout the county, we bring custom design
                      and expert craftsmanship to every project.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cities & Areas Served:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Annapolis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Severna Park</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Arnold</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Crofton</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Edgewater</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Also Serving:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Odenton</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Pasadena</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Glen Burnie</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Davidsonville</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Gambrills</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="#quote">Get a Quote</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/portfolio?location=anne-arundel-county">View Anne Arundel County Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Recent Projects in Anne Arundel County</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                      title="Coastal-Inspired Accent Wall"
                      location="Annapolis, MD"
                      image="/placeholder.svg?height=400&width=600&query=coastal accent wall in annapolis home"
                    />
                    <ProjectCard
                      title="Fireplace Feature Wall"
                      location="Severna Park, MD"
                      image="/placeholder.svg?height=400&width=600&query=fireplace feature wall in severna park home"
                    />
                    <ProjectCard
                      title="Modern Media Wall"
                      location="Crofton, MD"
                      image="/placeholder.svg?height=400&width=600&query=media wall in crofton maryland home"
                    />
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Anne Arundel County Accent Wall Trends</h3>
                  <p className="mb-4">
                    In Anne Arundel County, we've noticed these popular accent wall trends among homeowners:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Coastal-Inspired Designs:</span> Popular in Annapolis and
                        waterfront properties, featuring shiplap and blue tones.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Fireplace Surrounds:</span> A growing trend in Severna Park and
                        Arnold, creating stunning focal points in living areas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Textured Finishes:</span> Limewash and venetian plaster are
                        trending in newer homes throughout the county.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Brick Accent Walls:</span> Popular in Crofton and Odenton,
                        especially in basement renovations and kitchen designs.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="howard">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=columbia maryland home with modern accent wall"
                      alt="Accent Walls in Howard County"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Howard County, MD</h3>
                    <p className="text-muted-foreground mb-6">
                      Howard County homeowners trust Accent Walls Pro for premium wall installations that transform
                      their spaces. We serve the entire county with custom designs and professional installation
                      services.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cities & Areas Served:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Columbia</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Ellicott City</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Clarksville</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Laurel</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Savage</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Also Serving:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Fulton</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Highland</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Glenelg</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Marriottsville</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>West Friendship</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="#quote">Get a Quote</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/portfolio?location=howard-county">View Howard County Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Recent Projects in Howard County</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                      title="Contemporary Wood Feature"
                      location="Columbia, MD"
                      image="/placeholder.svg?height=400&width=600&query=contemporary wood feature wall in columbia maryland"
                    />
                    <ProjectCard
                      title="Elegant Board & Batten"
                      location="Ellicott City, MD"
                      image="/placeholder.svg?height=400&width=600&query=elegant board and batten in ellicott city home"
                    />
                    <ProjectCard
                      title="Luxury Media Wall"
                      location="Clarksville, MD"
                      image="/placeholder.svg?height=400&width=600&query=luxury media wall in clarksville maryland home"
                    />
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Howard County Accent Wall Trends</h3>
                  <p className="mb-4">
                    In Howard County, we've noticed these popular accent wall trends among homeowners:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Contemporary Wood Features:</span> Especially popular in Columbia
                        and newer developments, featuring clean lines and mixed materials.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Elegant Board & Batten:</span> A favorite in Ellicott City's
                        historic district and traditional homes throughout the county.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Integrated Media Walls:</span> Growing in popularity in
                        Clarksville and Fulton, combining technology with sophisticated design.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Painted Geometric Patterns:</span> Trending in Columbia and Laurel
                        homes, adding visual interest to modern interiors.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="frederick">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video lg:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=frederick maryland home with accent wall"
                      alt="Accent Walls in Frederick County"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Frederick County, MD</h3>
                    <p className="text-muted-foreground mb-6">
                      We're proud to extend our premium accent wall services to Frederick County. From historic homes in
                      downtown Frederick to new constructions throughout the county, we bring custom designs and expert
                      craftsmanship to every project.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cities & Areas Served:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Frederick</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Urbana</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Middletown</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Brunswick</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Thurmont</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Also Serving:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>New Market</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Walkersville</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Emmitsburg</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Mount Airy</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Myersville</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="#quote">Get a Quote</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/portfolio?location=frederick-county">View Frederick County Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Recent Projects in Frederick County</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                      title="Historic Home Accent Wall"
                      location="Frederick, MD"
                      image="/placeholder.svg?height=400&width=600&query=historic home accent wall in frederick maryland"
                    />
                    <ProjectCard
                      title="Modern Farmhouse Feature"
                      location="Urbana, MD"
                      image="/placeholder.svg?height=400&width=600&query=modern farmhouse feature wall in urbana maryland"
                    />
                    <ProjectCard
                      title="Rustic Wood Accent"
                      location="Middletown, MD"
                      image="/placeholder.svg?height=400&width=600&query=rustic wood accent wall in middletown maryland"
                    />
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Frederick County Accent Wall Trends</h3>
                  <p className="mb-4">
                    In Frederick County, we've noticed these popular accent wall trends among homeowners:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Historic-Inspired Designs:</span> Popular in downtown Frederick's
                        historic district, blending traditional elements with modern techniques.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Modern Farmhouse Features:</span> Trending in Urbana and newer
                        developments, combining rustic and contemporary elements.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Rustic Wood Accents:</span> Popular in Middletown and rural areas,
                        featuring reclaimed wood and natural textures.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Brick and Stone Features:</span> Growing trend throughout the
                        county, especially in basement renovations and fireplace surrounds.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="dc">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=washington dc townhouse with modern accent wall"
                      alt="Accent Walls in Washington DC"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">District of Columbia</h3>
                    <p className="text-muted-foreground mb-6">
                      We proudly serve Washington DC with premium accent wall installation services. From historic
                      rowhouses to modern condos and apartments, we bring custom designs and expert craftsmanship to
                      every project in the nation's capital.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2">Neighborhoods Served:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Georgetown</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Capitol Hill</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Dupont Circle</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Logan Circle</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Shaw</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Also Serving:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Navy Yard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Adams Morgan</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Columbia Heights</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Foggy Bottom</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>Petworth</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href="#quote">Get a Quote</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/portfolio?location=washington-dc">View DC Projects</Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Recent Projects in Washington DC</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ProjectCard
                      title="Rowhouse Feature Wall"
                      location="Capitol Hill, DC"
                      image="/placeholder.svg?height=400&width=600&query=capitol hill rowhouse feature wall"
                    />
                    <ProjectCard
                      title="Modern Condo Accent Wall"
                      location="Logan Circle, DC"
                      image="/placeholder.svg?height=400&width=600&query=modern condo accent wall in logan circle dc"
                    />
                    <ProjectCard
                      title="Historic Home Renovation"
                      location="Georgetown, DC"
                      image="/placeholder.svg?height=400&width=600&query=georgetown historic home accent wall"
                    />
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Washington DC Accent Wall Trends</h3>
                  <p className="mb-4">
                    In Washington DC, we've noticed these popular accent wall trends among homeowners:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Historic Preservation with Modern Touches:</span> Popular in
                        Georgetown and Capitol Hill rowhouses, respecting architectural heritage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Contemporary Designs:</span> Trending in Logan Circle and Navy
                        Yard condos, featuring clean lines and minimalist aesthetics.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Space-Maximizing Features:</span> Popular in smaller urban spaces,
                        combining functionality with design through media walls and storage.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>
                        <span className="font-medium">Exposed Brick Restoration:</span> A classic DC trend, preserving
                        and enhancing original brick walls in historic buildings.
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Accent Walls Pro in Your Area
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're your local accent wall specialists, with deep knowledge of regional design preferences and
                building requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team has extensive experience working in Montgomery County, Anne Arundel County, Howard County,
                    Frederick County, and DC. We understand local building codes, permit requirements, and design
                    preferences specific to each area.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Convenient Service</h3>
                  <p className="text-muted-foreground">
                    As a local company based in Bethesda, we provide prompt service throughout the DMV area. Our central
                    location allows us to quickly respond to consultation requests and complete projects efficiently.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Connection</h3>
                  <p className="text-muted-foreground">
                    We're proud to be part of the communities we serve. Our reputation is built on trust and
                    relationships with local homeowners, designers, and contractors throughout Maryland and DC.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="quote" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Space?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Contact us today for a free consultation and quote for your accent wall project in Montgomery County,
                  Anne Arundel County, Howard County, Frederick County, or Washington DC.
                </p>
                <div className="mt-8 grid gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Call Us Directly</h3>
                      <p className="text-muted-foreground">
                        <Link href="tel:2404267900" className="hover:underline">
                          240-426-7900
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Our Location</h3>
                      <p className="text-muted-foreground">9811 Bristol Square Ln, Bethesda, MD 20814</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <label htmlFor="location" className="text-sm font-medium">
                          Your Location
                        </label>
                        <select
                          id="location"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select your area</option>
                          <option value="montgomery">Montgomery County</option>
                          <option value="anne-arundel">Anne Arundel County</option>
                          <option value="howard">Howard County</option>
                          <option value="frederick">Frederick County</option>
                          <option value="dc">Washington DC</option>
                          <option value="other">Other</option>
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
                          placeholder="Tell us about your project"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        Get My Free Quote
                      </Button>
                    </form>
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
