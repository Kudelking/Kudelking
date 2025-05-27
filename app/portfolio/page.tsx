import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

export const metadata = {
  title: "Premium Accent Wall Portfolio | 100+ Projects | Accent Walls Pro",
  description:
    "Browse our extensive portfolio of accent walls, board & batten, Roman plaster, and wood slat installations in Washington DC, Maryland & Virginia. Real client transformations.",
  keywords:
    "accent wall portfolio, board and batten gallery, Roman plaster projects, wood slat walls, fireplace buildouts, media walls, interior design portfolio",
  openGraph: {
    title: "Premium Accent Wall Portfolio | 100+ Completed Projects",
    description: "Browse our extensive portfolio of accent walls, board & batten, Roman plaster in DC, MD, VA",
    images: [
      {
        url: "/floating-tv-media-wall.png",
        width: 1200,
        height: 630,
        alt: "Accent Walls Pro Portfolio - Premium Wall Installations",
      },
    ],
    type: "website",
  },
}

const projects = [
  // TV WALLS / MEDIA WALLS
  {
    id: "floating-tv-modern",
    title: "Floating TV Wall with LED Lighting",
    location: "Arlington, VA",
    image: "/floating-tv-media-wall.png",
    category: "tv walls",
    description:
      "Modern floating TV wall with clean lines, hidden cable management, and integrated LED lighting for an elegant entertainment solution.",
  },
  {
    id: "builtin-tv-storage",
    title: "Built-in TV Wall with Custom Storage",
    location: "Rockville, MD",
    image: "/tv-media-wall.png",
    category: "tv walls",
    description:
      "Custom built-in TV wall with integrated cabinets and shelving, maximizing functionality while maintaining a clean appearance.",
  },
  {
    id: "tv-wall-entertainment",
    title: "Entertainment Center with TV Wall",
    location: "Bethesda, MD",
    image: "/built-in-entertainment-center.png",
    category: "tv walls",
    description:
      "Complete entertainment center with TV wall, including built-in shelves and hidden cable management for seamless integration.",
  },

  // BOARD & BATTEN
  {
    id: "board-batten-white-dining",
    title: "Classic White Board & Batten in Dining Room",
    location: "Silver Spring, MD",
    image: "/white-board-and-batten-dining-room.png",
    category: "board & batten",
    description:
      "Elegant white board and batten wainscoting in formal dining room with classic proportions and timeless appeal.",
  },
  {
    id: "board-batten-full-wall",
    title: "Full Wall Board & Batten",
    location: "Chevy Chase, MD",
    image: "/full-wall-board-and-batten.png",
    category: "board & batten",
    description:
      "Full wall board and batten installation creating dramatic architectural detail and visual interest in this elegant entryway.",
  },
  {
    id: "board-batten-elegant",
    title: "Elegant Board & Batten",
    location: "Gaithersburg, MD",
    image: "/elegant-board-and-batten.png",
    category: "board & batten",
    description:
      "Sophisticated board and batten installation with classic proportions, adding architectural elegance to this living space.",
  },

  // FIREPLACE BUILDOUTS
  {
    id: "fireplace-modern-buildout",
    title: "Modern Fireplace Buildout",
    location: "Potomac, MD",
    image: "/modern-fireplace-buildout.png",
    category: "fireplaces",
    description: "Contemporary floor-to-ceiling fireplace buildout with sleek linear gas fireplace as the centerpiece.",
  },
  {
    id: "fireplace-wood-stone",
    title: "Fireplace with Wood and Stone",
    location: "McLean, VA",
    image: "/modern-fireplace-wood-stone.png",
    category: "fireplaces",
    description:
      "Modern fireplace design combining natural wood and stone elements for a warm, sophisticated living room centerpiece.",
  },
  {
    id: "fireplace-slim-modern",
    title: "Modern Slim Fireplace",
    location: "Alexandria, VA",
    image: "/modern-slim-fireplace.png",
    category: "fireplaces",
    description:
      "Elegant slim fireplace with minimalist design, creating a sophisticated modern statement in this living space.",
  },

  // LIMEWASH
  {
    id: "limewash-beige-soft",
    title: "Soft Beige Limewash",
    location: "Reston, VA",
    image: "/soft-beige-limewash.png",
    category: "limewash",
    description:
      "Elegant soft beige limewash walls creating a calm, sophisticated atmosphere in this luxury living room.",
  },
  {
    id: "limewash-smooth-wall",
    title: "Smooth Limewash Wall",
    location: "Great Falls, VA",
    image: "/smooth-limewash-wall.png",
    category: "limewash",
    description: "Serene limewash walls with smooth finish creating a spa-like atmosphere in this minimalist design.",
  },
  {
    id: "limewash-rustic",
    title: "Rustic Limewash",
    location: "Fairfax, VA",
    image: "/rustic-limewash-wall.png",
    category: "limewash",
    description: "Textured rustic limewash wall bringing authentic Mediterranean character to this elegant space.",
  },

  // WOOD SLAT WALLS
  {
    id: "wood-slat-bedroom",
    title: "Wood Slat Wall in Bedroom",
    location: "Vienna, VA",
    image: "/bedroom-wood-slat-wall.png",
    category: "wood slats",
    description: "Warm wood slat accent wall creating a cozy focal point behind the bed in this modern bedroom.",
  },
  {
    id: "wood-slat-modern",
    title: "Modern Wood Slat Wall",
    location: "Tysons, VA",
    image: "/modern-wood-slat-wall.png",
    category: "wood slats",
    description: "Contemporary wood slat wall adding natural texture and warmth to this modern interior design.",
  },
  {
    id: "wood-slat-living",
    title: "Wood Slat Wall in Living Room",
    location: "Herndon, VA",
    image: "/wood-slat-living-room.png",
    category: "wood slats",
    description: "Elegant living room wood slat wall creating dramatic atmosphere and architectural interest.",
  },

  // ROMAN PLASTER
  {
    id: "roman-plaster-luxury-bedroom",
    title: "Luxury Roman Plaster in Bedroom",
    location: "Chevy Chase, MD",
    image: "/luxury-roman-plaster-bedroom.png",
    category: "roman plaster",
    description:
      "Sophisticated Roman plaster accent wall with subtle variations, creating elegant depth in this luxury living space.",
  },
  {
    id: "roman-plaster-home-office",
    title: "Roman Plaster in Home Office",
    location: "Potomac, MD",
    image: "/home-office-roman-plaster.png",
    category: "roman plaster",
    description:
      "Professional Roman plaster in home office, creating sophisticated work atmosphere with European charm.",
  },

  // ACCENT WALLS
  {
    id: "accent-wall-geometric",
    title: "Geometric Accent Wall",
    location: "Washington, DC",
    image: "/geometric-accent-wall.png",
    category: "accent walls",
    description:
      "Bold geometric accent wall with angular design elements, creating an inspiring backdrop for this modern space.",
  },
  {
    id: "accent-wall-project",
    title: "Custom Accent Wall",
    location: "Arlington, VA",
    image: "/accent-wall-project.png",
    category: "accent walls",
    description:
      "Unique custom accent wall designed specifically for this space with the client's individual preferences in mind.",
  },

  // BRICK WALLS
  {
    id: "brick-wall-exposed",
    title: "Exposed Brick Wall",
    location: "Frederick, MD",
    image: "/placeholder.svg?height=400&width=600&query=exposed+brick+accent+wall+loft+style",
    category: "brick walls",
    description:
      "Restored exposed brick accent wall with industrial lighting, celebrating the historic character of this converted loft space.",
  },
  {
    id: "brick-wall-painted",
    title: "Painted Brick Wall",
    location: "Annapolis, MD",
    image: "/placeholder.svg?height=400&width=600&query=painted+white+brick+wall+farmhouse+style",
    category: "brick walls",
    description:
      "Classic brick wall painted in crisp white for farmhouse-style living room, preserving texture while brightening the space.",
  },

  // WALLPAPER
  {
    id: "wallpaper-luxury-feature",
    title: "Luxury Wallpaper",
    location: "Cabin John, MD",
    image: "/luxury-wallpaper-feature-wall.png",
    category: "wallpaper",
    description: "Exquisite wallpaper creating an elegant focal point in this formal space.",
  },
  {
    id: "wallpaper-bedroom",
    title: "Bedroom Wallpaper",
    location: "Falls Church, VA",
    image: "/bedroom-wallpaper-installation.png",
    category: "wallpaper",
    description: "Elegant bedroom wallpaper installation creating a cozy and stylish atmosphere for relaxation.",
  },

  // CEILING DECORATION
  {
    id: "ceiling-coffered",
    title: "Coffered Ceiling",
    location: "Fairfax, VA",
    image: "/placeholder.svg?height=400&width=600&query=coffered+ceiling+home+office+elegant",
    category: "ceilings",
    description:
      "Custom coffered ceiling with detailed molding, adding architectural sophistication and visual height to this elegant office.",
  },
  {
    id: "ceiling-tray",
    title: "Tray Ceiling",
    location: "Herndon, VA",
    image: "/placeholder.svg?height=400&width=600&query=tray+ceiling+master+bedroom+crown+molding",
    category: "ceilings",
    description:
      "Elegant tray ceiling with crown molding and recessed lighting, creating a luxurious focal point in this master bedroom.",
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
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 bg-muted/30 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
                Premium Accent Wall Portfolio
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Explore our collection of 100+ premium installations of accent walls across Washington, Maryland and
                Virginia. Each category showcases our specialized expertise in transforming spaces.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Portfolio</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Browse by Specialty</h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Each category represents unique projects, showcasing our expertise in that particular area
              </p>
            </div>
            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* Portfolio Stats Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">100+</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Unique Projects</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">10</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Specialized Categories</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Cities Served</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">5★</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">
                Our Portfolio Specializations
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">TV & Media Walls</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Custom entertainment solutions with hidden cable management, built-in storage, and modern floating
                    designs.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Board & Batten</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Classic wainscoting and full-wall installations in dining rooms, entryways, and bedrooms with
                    timeless appeal.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Fireplace Buildouts</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Stone, brick, and tile fireplace surrounds from traditional mantels to modern linear designs.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Artisan Finishes</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Hand-applied limewash, Roman plaster, and specialty coatings bringing European craftsmanship to your
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4 md:py-6 lg:py-8 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Accent Walls Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
