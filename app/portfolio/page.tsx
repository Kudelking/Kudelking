import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

export const metadata = {
  title: "Premium Accent Wall Portfolio | 100+ Completed Projects | Accent Walls Pro",
  description:
    "Browse our extensive portfolio of accent walls, board & batten, Roman plaster, and wood slat installations in Washington DC, Maryland, and Virginia. See real customer transformations.",
  keywords:
    "accent wall portfolio, board and batten gallery, Roman plaster projects, wood slat walls, fireplace buildouts, media walls, interior design portfolio, wall transformation, custom millwork",
  openGraph: {
    title: "Premium Accent Wall Portfolio | 100+ Completed Projects",
    description:
      "Browse our extensive portfolio of accent walls, board & batten, Roman plaster installations in DC, MD, VA",
    images: [
      {
        url: "/images/portfolio/tv-media-wall-modern.png",
        width: 1200,
        height: 630,
        alt: "Accent Walls Pro Portfolio - Premium Wall Installations",
      },
    ],
    type: "website",
  },
}

// Optimized project data with correct images matching project types
const projects = [
  {
    id: "floating-tv-media-wall",
    title: "Floating TV Media Wall with LED Backlighting",
    location: "Arlington, VA",
    image: "/images/portfolio/tv-media-wall-modern.png",
    category: "media wall",
    description:
      "Modern floating TV media wall featuring clean lines, hidden cable management, and integrated LED backlighting. Perfect entertainment solution for contemporary living spaces.",
  },
  {
    id: "elegant-board-batten-dining",
    title: "Classic Board & Batten Dining Room",
    location: "Silver Spring, MD",
    image: "/images/portfolio/board-batten-dining-room.png",
    category: "board & batten",
    description:
      "Elegant white board and batten wainscoting in formal dining room. Classic molding and proportions create timeless architectural interest and sophistication.",
  },
  {
    id: "luxury-fireplace-buildout",
    title: "Luxury Stone Fireplace Build-Out",
    location: "Potomac, MD",
    image: "/images/portfolio/fireplace-buildout-stone.png",
    category: "fireplace",
    description:
      "Floor-to-ceiling stone fireplace surround with built-in shelving. Natural stone veneer and custom millwork create a stunning focal point for family gatherings.",
  },
  {
    id: "artisan-limewash-walls",
    title: "Artisan Textured Limewash Walls",
    location: "Alexandria, VA",
    image: "/images/portfolio/limewash-textured-wall.png",
    category: "limewash",
    description:
      "Hand-applied textured limewash accent wall in warm beige tones. Traditional European technique creates unique patterns and old-world charm in this historic home.",
  },
  {
    id: "vertical-wood-slat-bedroom",
    title: "Vertical Wood Slat Bedroom Feature",
    location: "Bethesda, MD",
    image: "/images/portfolio/wood-slat-vertical-bedroom.png",
    category: "wood slat",
    description:
      "Warm walnut wood slat accent wall behind bed creating a cozy focal point. Natural wood grain adds texture and warmth to this modern bedroom design.",
  },
  {
    id: "roman-plaster-luxury-living",
    title: "Smooth Roman Plaster Living Room",
    location: "Chevy Chase, MD",
    image: "/images/portfolio/roman-plaster-luxury-living.png",
    category: "roman plaster",
    description:
      "Sophisticated smooth Roman plaster accent wall in neutral tones. Hand-applied Venetian plaster technique creates depth and elegance in this luxury living space.",
  },
  {
    id: "geometric-wood-office",
    title: "Geometric Wood Pattern Office Wall",
    location: "Washington, DC",
    image: "/images/portfolio/geometric-wood-office.png",
    category: "geometric",
    description:
      "Bold geometric wood pattern accent wall with angular design elements. Creates an inspiring and dynamic backdrop for this modern home office workspace.",
  },
  {
    id: "restored-brick-accent",
    title: "Restored Brick Accent Wall",
    location: "Frederick, MD",
    image: "/images/portfolio/brick-accent-restored.png",
    category: "brick",
    description:
      "Beautifully restored brick accent wall with German smear technique. Celebrates the historic character while adding contemporary style to this renovated home.",
  },
  {
    id: "builtin-media-storage",
    title: "Built-in Media Wall with Storage",
    location: "Rockville, MD",
    image: "/images/portfolio/media-wall-storage-builtin.png",
    category: "media wall",
    description:
      "Custom built-in media wall with integrated storage solutions and ambient lighting. Maximizes functionality while maintaining clean, organized appearance.",
  },
  {
    id: "board-batten-bathroom",
    title: "Classic Board & Batten Bathroom",
    location: "Gaithersburg, MD",
    image: "/images/portfolio/board-batten-bathroom-white.png",
    category: "board & batten",
    description:
      "Crisp white board and batten wainscoting in elegant bathroom renovation. Classic design adds timeless charm and sophistication to any bathroom space.",
  },
  {
    id: "horizontal-wood-slat-living",
    title: "Horizontal Wood Slat Living Room",
    location: "Vienna, VA",
    image: "/images/portfolio/wood-slat-horizontal-living.png",
    category: "wood slat",
    description:
      "Horizontal wood slat accent wall in natural oak finish. Clean lines and warm wood tones create a serene, contemporary atmosphere in this living space.",
  },
  {
    id: "modern-linear-fireplace",
    title: "Modern Linear Fireplace Feature",
    location: "McLean, VA",
    image: "/images/portfolio/fireplace-modern-linear.png",
    category: "fireplace",
    description:
      "Sleek linear fireplace with modern stone surround and minimalist design. Creates a sophisticated focal point perfect for contemporary home interiors.",
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
        <section className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                Premium Accent Wall Portfolio
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore our collection of 100+ premium accent wall installations throughout Washington DC, Maryland, and
                Virginia. From elegant board & batten to luxurious Roman plaster, see how we transform spaces.
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

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Project Categories</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Browse our work by category to find inspiration for your next project
              </p>
            </div>
            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* Portfolio Stats Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm md:text-base text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-sm md:text-base text-muted-foreground">Service Categories</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm md:text-base text-muted-foreground">Cities Served</div>
              </div>
              <div>
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm md:text-base text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose Our Accent Wall Services?</h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Expert Craftsmanship</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Our skilled artisans bring years of experience in premium wall installations, ensuring every project
                    meets the highest standards of quality and attention to detail.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Local Expertise</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Serving Washington DC, Maryland, and Virginia, we understand local design preferences and building
                    requirements for seamless project completion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Premium Materials</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    We source only the finest materials for our installations, from sustainably harvested wood to
                    authentic Italian plasters, ensuring lasting beauty.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Custom Solutions</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Every project is tailored to your unique space and style preferences, creating one-of-a-kind accent
                    walls that perfectly complement your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 md:py-8 border-t">
        <div className="container text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Accent Walls Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
