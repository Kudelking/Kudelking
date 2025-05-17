import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Premium Accent Wall Services in DC, Maryland & Virginia",
  description:
    "Explore our full range of accent wall services including board & batten, wood slat walls, fireplaces, media walls, and more. Serving the DMV area.",
}

// Service categories structure with images and descriptions
const serviceCategories = [
  {
    id: "accent-walls",
    title: "Accent Walls",
    description: "Modern geometric designs, wood slat walls, and custom patterns to transform any room.",
    image: "/geometric-accent-wall.png",
    link: "/services/accent-walls",
    variants: [
      {
        name: "Wood Slat Walls",
        link: "/services/accent-walls/wood-slat",
        image: "/bedroom-wood-slat-wall.png",
      },
      { name: "Geometric Walls", link: "/services/accent-walls/geometric", image: "/geometric-accent-wall.png" },
    ],
  },
  {
    id: "board-and-batten",
    title: "Board & Batten",
    description: "Traditional full wall and half wall designs that add dimension and character to your space.",
    image: "/board-and-batten-shelf.png",
    link: "/services/board-and-batten",
    variants: [
      {
        name: "Traditional Board & Batten",
        link: "/services/board-and-batten/traditional",
        image: "/full-wall-board-and-batten.png",
      },
      {
        name: "Modern Board & Batten",
        link: "/services/board-and-batten/modern",
        image: "/modern-geometric-board-and-batten.png",
      },
    ],
  },
  {
    id: "roman-plaster",
    title: "Roman Plaster",
    description: "Luxurious, timeless finishes with depth and texture inspired by ancient techniques.",
    image: "/images/services/roman-plaster/luxury-living-room.png",
    link: "/services/roman-plaster",
    variants: [
      {
        name: "Smooth Finish",
        link: "/services/roman-plaster/smooth",
        image: "/images/services/roman-plaster/smooth/hero.png",
      },
      {
        name: "Textured Finish",
        link: "/services/roman-plaster/textured",
        image: "/textured-plaster-living-room.png",
      },
      {
        name: "Marmorino",
        link: "/services/roman-plaster/marmorino",
        image: "/images/services/roman-plaster/marmorino-finish.png",
      },
    ],
  },
  {
    id: "limewash-walls",
    title: "Limewash Walls",
    description: "Smooth finish and rustic textured styles for a unique, sophisticated look.",
    image: "/soft-beige-limewash.png",
    link: "/services/limewash-walls",
    variants: [
      {
        name: "Smooth Limewash",
        link: "/services/limewash-walls/smooth",
        image: "/smooth-limewash-wall.png",
      },
      {
        name: "Textured Limewash",
        link: "/services/limewash-walls/textured",
        image: "/rustic-limewash-wall.png",
      },
    ],
  },
  {
    id: "brick-walls",
    title: "Brick Interior Walls",
    description: "Real brick installation and faux brick panel options for industrial charm.",
    image: "/images/portfolio/brick-accent-wall.png",
    link: "/services/brick-walls",
    variants: [
      {
        name: "Real Brick",
        link: "/services/brick-walls/real",
        image: "/images/portfolio/brick-accent-wall.png",
      },
      { name: "Faux Brick", link: "/services/brick-walls/faux", image: "/images/portfolio/brick-accent-wall.png" },
    ],
  },
  {
    id: "fireplace-buildouts",
    title: "Fireplace Build-Outs",
    description: "Slim line designs, floor-to-ceiling fireplaces, and integrated shelving.",
    image: "/modern-fireplace-buildout.png",
    link: "/services/fireplace-buildouts",
    variants: [
      {
        name: "Modern Fireplace",
        link: "/services/fireplace-buildouts/modern",
        image: "/modern-fireplace-buildout.png",
      },
      {
        name: "Traditional Fireplace",
        link: "/services/fireplace-buildouts/traditional",
        image: "/fireplace-built-in-shelving.png",
      },
    ],
  },
  {
    id: "media-walls",
    title: "TV Media Walls",
    description: "Floating media units and built-in surround systems for entertainment spaces.",
    image: "/tv-media-wall.png",
    link: "/services/media-walls",
    variants: [
      { name: "Floating Media Walls", link: "/services/media-walls/floating", image: "/floating-tv-media-wall.png" },
      {
        name: "Built-in Media Walls",
        link: "/services/media-walls/built-in",
        image: "/built-in-entertainment-center.png",
      },
    ],
  },
  {
    id: "decorative-ceilings",
    title: "Decorative Ceilings",
    description: "Tray ceilings, coffered ceilings, and exposed beams for overhead interest.",
    image: "/images/portfolio/modern-board-batten-entry.png",
    link: "/services/decorative-ceilings",
    variants: [],
  },
  {
    id: "wallpaper-installation",
    title: "Wallpaper Installation",
    description: "Custom feature wall wallpaper and full room wallpaper installations.",
    image: "/luxury-wallpaper-feature-wall.png",
    link: "/services/wallpaper-installation",
    variants: [
      {
        name: "Feature Wall",
        link: "/services/wallpaper-installation/feature",
        image: "/luxury-wallpaper-feature-wall.png",
      },
      {
        name: "Full Room",
        link: "/services/wallpaper-installation/full-room",
        image: "/bedroom-wallpaper-installation.png",
      },
    ],
  },
  {
    id: "custom-projects",
    title: "Custom Projects",
    description: "Have a unique idea? We can bring your custom accent wall vision to life.",
    image: "/images/portfolio/restaurant-feature-wall.png",
    link: "/services/custom-projects",
    variants: [],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h1>
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

        {/* Main Service Categories */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg group border border-border/50 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-6 flex-grow">{category.description}</p>

                    {category.variants.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Variations:</h3>
                        <ul className="space-y-1">
                          {category.variants.map((variant) => (
                            <li key={variant.link}>
                              <Link
                                href={variant.link}
                                className="text-sm text-primary hover:underline flex items-center"
                              >
                                <ChevronRight className="h-3 w-3 mr-1 flex-shrink-0" />
                                {variant.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button asChild className="w-full">
                      <Link href={category.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why Choose Us</h2>
              <p className="mt-4 text-muted-foreground">We offer high-quality services with attention to detail</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">We use only high-quality materials and modern technologies</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="m19.07 4.93-14.14 14.14"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Custom Approach</h3>
                <p className="text-muted-foreground">
                  Each project is unique and designed with your specific needs in mind
                </p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v-4h2a2 2 0 0 0 0-4h-2Z"></path>
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Warranty</h3>
                <p className="text-muted-foreground">We provide warranty on all completed work</p>
              </div>

              <div className="bg-background p-6 rounded-lg shadow-sm border border-border/50 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Reliability</h3>
                <p className="text-muted-foreground">We always complete work on time and within budget</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Ready to Transform Your Space?</h2>
              <p className="text-muted-foreground mb-8">
                Contact us today for a free consultation and quote on your custom accent wall project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/portfolio">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
