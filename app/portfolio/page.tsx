import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

export const metadata = {
  title: "Our Project Portfolio | Accent Walls Pro",
  description:
    "Browse our portfolio of accent walls, board & batten, wood slat, and other premium wall features throughout DC, Maryland, and Virginia.",
}

// Данные проектов с реальными изображениями
const projects = [
  {
    id: "1",
    title: "Modern Wood Slat Feature Wall",
    location: "Bethesda, MD",
    image: "/images/portfolio/wood-slat-modern.png",
    category: "wood slat",
    description:
      "A contemporary vertical wood slat wall in rich walnut, creating a warm focal point in this minimalist living room.",
  },
  {
    id: "2",
    title: "Elegant Board & Batten Dining Room",
    location: "Silver Spring, MD",
    image: "/images/portfolio/white-board-batten-dining.png",
    category: "board & batten",
    description: "Full-height board and batten in classic white, transforming this dining room with timeless elegance.",
  },
  {
    id: "3",
    title: "Minimalist Media Wall",
    location: "Arlington, VA",
    image: "/images/portfolio/floating-media-wall.png",
    category: "media wall",
    description: "A floating media wall with clean lines, hidden cable management, and integrated ambient lighting.",
  },
  {
    id: "4",
    title: "Geometric Wood Feature",
    location: "Washington, DC",
    image: "/images/portfolio/geometric-office-wall.png",
    category: "geometric",
    description: "Bold geometric wood patterns creating visual interest in this modern home office space.",
  },
  {
    id: "5",
    title: "Luxurious Roman Plaster Bedroom",
    location: "Chevy Chase, MD",
    image: "/images/portfolio/roman-plaster-bedroom.png",
    category: "roman plaster",
    description: "Smooth roman plaster in a soft terracotta hue, adding elegance and texture to this primary bedroom.",
  },
  {
    id: "6",
    title: "Contemporary Fireplace Surround",
    location: "Rockville, MD",
    image: "/images/portfolio/modern-fireplace-feature.png",
    category: "fireplace",
    description: "A floor-to-ceiling fireplace feature with mixed materials for a stunning living room centerpiece.",
  },
  {
    id: "7",
    title: "Textured Limewash Accent",
    location: "Alexandria, VA",
    image: "/images/portfolio/limewash-living-room.png",
    category: "limewash",
    description: "Richly textured limewash creating depth and movement in this sophisticated living space.",
  },
  {
    id: "8",
    title: "Backlit Wood Slat Feature",
    location: "Georgetown, DC",
    image: "/images/portfolio/backlit-wood-slat.png",
    category: "wood slat",
    description: "Wood slat feature with integrated LED backlighting, creating a dramatic evening ambiance.",
  },
  {
    id: "9",
    title: "Brick Accent Wall",
    location: "Frederick, MD",
    image: "/images/portfolio/brick-accent-wall.png",
    category: "brick",
    description:
      "Restored original brick with German smear technique, celebrating the historic character of this home.",
  },
  {
    id: "10",
    title: "Luxury Roman Plaster Living Room",
    location: "Potomac, MD",
    image: "/images/portfolio/roman-plaster-living-room.png",
    category: "roman plaster",
    description: "Elegant smooth finish roman plaster in a neutral tone, creating a sophisticated living space.",
  },
  {
    id: "11",
    title: "Modern Board & Batten Entryway",
    location: "Gaithersburg, MD",
    image: "/images/portfolio/modern-board-batten-entry.png",
    category: "board & batten",
    description: "Contemporary board and batten design in a sleek entryway, making a strong first impression.",
  },
  {
    id: "12",
    title: "Custom Media Wall with Storage",
    location: "Bethesda, MD",
    image: "/images/portfolio/media-wall-storage.png",
    category: "media wall",
    description:
      "Custom media wall with integrated storage solutions and ambient lighting for a functional living room.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Accent Walls Pro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Project Portfolio</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our collection of premium accent wall installations throughout DC, Maryland, and Virginia.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ProjectGallery projects={projects} />
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 border-t">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Accent Walls Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
