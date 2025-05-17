import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Premium Accent Wall Services in DC, Maryland & Virginia",
  description:
    "Explore our full range of accent wall services including board & batten, wood slat walls, fireplaces, media walls, and more. Serving the DMV area.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Premium Services</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We specialize in transforming ordinary walls into extraordinary focal points that elevate your entire
                space.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Services</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="h-full">
                <ServiceCard
                  title="Accent Walls"
                  description="Modern geometric designs, wood slat walls, and custom patterns to transform any room."
                  icon="/placeholder.svg?key=ge609"
                  link="/services/accent-walls"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Board & Batten"
                  description="Traditional full wall and half wall designs that add dimension and character."
                  icon="/placeholder.svg?key=6fuy4"
                  link="/services/board-and-batten"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Roman Plaster"
                  description="Luxurious, timeless finishes with depth and texture inspired by ancient techniques."
                  icon="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"
                  link="/services/roman-plaster"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Limewash Walls"
                  description="Smooth finish and rustic textured styles for a unique, sophisticated look."
                  icon="/placeholder.svg?key=re02z"
                  link="/services/limewash-walls"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Brick Interior Walls"
                  description="Real brick installation and faux brick panel options for industrial charm."
                  icon="/placeholder.svg?key=cakqo"
                  link="/services/brick-walls"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Fireplace Build-Outs"
                  description="Slim line designs, floor-to-ceiling fireplaces, and integrated shelving."
                  icon="/placeholder.svg?key=4avke"
                  link="/services/fireplace-buildouts"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="TV Media Walls"
                  description="Floating media units and built-in surround systems for entertainment spaces."
                  icon="/placeholder.svg?key=i5ygd"
                  link="/services/media-walls"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Decorative Ceilings"
                  description="Tray ceilings, coffered ceilings, and exposed beams for overhead interest."
                  icon="/placeholder.svg?key=kb28v"
                  link="/services/decorative-ceilings"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Wallpaper Installation"
                  description="Custom feature wall wallpaper and full room wallpaper installations."
                  icon="/placeholder.svg?key=yasas"
                  link="/services/wallpaper-installation"
                />
              </div>
              <div className="h-full">
                <ServiceCard
                  title="Custom Projects"
                  description="Have a unique idea? We can bring your custom accent wall vision to life."
                  icon="/placeholder.svg?key=x6vh6"
                  link="/services/custom-projects"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular Design Variations</h2>
              <p className="mt-4 text-muted-foreground">Explore specific design styles within our service categories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Accent Wall Variations */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=teglq" alt="Wood Slat Walls" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Wood Slat Walls</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Warm, textured wooden elements that add natural beauty and dimension.
                  </p>
                  <Link
                    href="/services/accent-walls/wood-slat"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=n3dat" alt="Geometric Walls" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Geometric Walls</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Bold patterns and shapes that create visual interest and contemporary appeal.
                  </p>
                  <Link
                    href="/services/accent-walls/geometric"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Roman Plaster Variations */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=yst2s" alt="Smooth Roman Plaster" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Smooth Roman Plaster</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Elegant, polished finish with subtle depth and a luxurious sheen.
                  </p>
                  <Link
                    href="/services/roman-plaster/smooth"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/placeholder.svg?key=qbbz9" alt="Marmorino Roman Plaster" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Marmorino Plaster</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Marble-like finish with rich texture and natural stone appearance.
                  </p>
                  <Link
                    href="/services/roman-plaster/marmorino"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Board & Batten Variations */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image
                    src="/placeholder.svg?key=wx5kp"
                    alt="Traditional Board & Batten"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Traditional Board & Batten</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Classic evenly spaced vertical battens for timeless elegance.
                  </p>
                  <Link
                    href="/services/board-and-batten/traditional"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/modern-geometric-board-and-batten.png" alt="Modern Board & Batten" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Modern Board & Batten</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Contemporary geometric patterns with clean lines and bold statements.
                  </p>
                  <Link
                    href="/services/board-and-batten/modern"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Limewash Variations */}
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/smooth-limewash-wall.png" alt="Smooth Limewash" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Smooth Limewash</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Elegant, subtle texture with a sophisticated matte finish.
                  </p>
                  <Link
                    href="/services/limewash-walls/smooth"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-40">
                  <Image src="/rustic-limewash-wall.png" alt="Textured Limewash" fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">Textured Limewash</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Rustic, dramatic texture with old-world European charm.
                  </p>
                  <Link
                    href="/services/limewash-walls/textured"
                    className="group inline-flex items-center text-sm font-medium text-primary"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
