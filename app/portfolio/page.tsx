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
        url: "/images/portfolio/portfolio-hero.png",
        width: 1200,
        height: 630,
        alt: "Accent Walls Pro Portfolio - Premium Wall Installations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Accent Wall Portfolio | 100+ Completed Projects",
    description: "Browse our extensive portfolio of accent walls, board & batten, Roman plaster installations",
    images: ["/images/portfolio/portfolio-hero.png"],
  },
  alternates: {
    canonical: "https://accentwallspro.com/portfolio",
  },
}

// Validated project data with all required fields
const projects = [
  {
    id: "modern-wood-slat-bethesda",
    title: "Modern Vertical Wood Slat Feature Wall - Bethesda Living Room",
    location: "Bethesda, MD",
    image: "/images/portfolio/wood-slat-modern.png",
    category: "wood slat",
    description:
      "Transform your living space with this stunning vertical wood slat accent wall in rich walnut finish. This modern design creates a warm focal point while adding natural texture and sophistication to this Bethesda home's minimalist interior.",
  },
  {
    id: "elegant-board-batten-silver-spring",
    title: "Classic Full-Height Board & Batten - Silver Spring Dining Room",
    location: "Silver Spring, MD",
    image: "/images/portfolio/white-board-batten-dining.png",
    category: "board & batten",
    description:
      "Elevate your dining experience with this timeless full-height board and batten installation in crisp white. This classic wainscoting design adds architectural interest and elegant charm to this Silver Spring dining room, perfect for both formal and casual entertaining.",
  },
  {
    id: "floating-media-wall-arlington",
    title: "Minimalist Floating Media Wall with Hidden Storage - Arlington",
    location: "Arlington, VA",
    image: "/images/portfolio/floating-media-wall.png",
    category: "media wall",
    description:
      "Create the ultimate entertainment experience with this sleek floating media wall featuring clean lines, hidden cable management, and integrated ambient LED lighting. This custom Arlington installation maximizes space while maintaining a minimalist aesthetic.",
  },
  {
    id: "geometric-wood-office-dc",
    title: "Bold Geometric Wood Pattern - Washington DC Home Office",
    location: "Washington, DC",
    image: "/images/portfolio/geometric-office-wall.png",
    category: "geometric",
    description:
      "Make a statement in your workspace with this eye-catching geometric wood pattern accent wall. The dynamic angular design creates visual interest and inspiration in this Washington DC home office, boosting productivity and style.",
  },
  {
    id: "luxury-roman-plaster-chevy-chase",
    title: "Luxurious Smooth Roman Plaster - Chevy Chase Master Bedroom",
    location: "Chevy Chase, MD",
    image: "/images/portfolio/roman-plaster-bedroom.png",
    category: "roman plaster",
    description:
      "Experience ultimate luxury with this smooth Roman plaster accent wall in warm terracotta tones. This artisan-applied finish adds depth, texture, and Mediterranean elegance to this Chevy Chase master bedroom, creating a serene retreat.",
  },
  {
    id: "contemporary-fireplace-rockville",
    title: "Floor-to-Ceiling Fireplace Feature - Rockville Family Room",
    location: "Rockville, MD",
    image: "/images/portfolio/modern-fireplace-feature.png",
    category: "fireplace",
    description:
      "Transform your family gathering space with this stunning floor-to-ceiling fireplace feature wall combining natural stone and wood elements. This Rockville installation creates a dramatic focal point perfect for cozy family evenings.",
  },
  {
    id: "textured-limewash-alexandria",
    title: "Artisan Textured Limewash - Alexandria Historic Home",
    location: "Alexandria, VA",
    image: "/images/portfolio/limewash-living-room.png",
    category: "limewash",
    description:
      "Embrace old-world charm with this richly textured limewash accent wall that adds depth and character to this Alexandria historic home. The hand-applied technique creates unique patterns and movement in the sophisticated living space.",
  },
  {
    id: "backlit-wood-slat-georgetown",
    title: "LED Backlit Wood Slat Feature - Georgetown Luxury Condo",
    location: "Georgetown, DC",
    image: "/images/portfolio/backlit-wood-slat.png",
    category: "wood slat",
    description:
      "Create dramatic evening ambiance with this LED backlit wood slat feature wall. This Georgetown luxury condo installation combines warm wood tones with modern lighting technology for a stunning visual effect.",
  },
  {
    id: "restored-brick-frederick",
    title: "Restored Brick with German Smear - Frederick Historic Home",
    location: "Frederick, MD",
    image: "/images/portfolio/brick-accent-wall.png",
    category: "brick",
    description:
      "Celebrate historic character with this beautifully restored original brick accent wall featuring the German smear technique. This Frederick home renovation preserves architectural heritage while adding rustic charm.",
  },
  {
    id: "smooth-roman-plaster-potomac",
    title: "Elegant Smooth Roman Plaster - Potomac Luxury Home",
    location: "Potomac, MD",
    image: "/images/portfolio/roman-plaster-living-room.png",
    category: "roman plaster",
    description:
      "Achieve sophisticated elegance with this smooth Roman plaster accent wall in neutral tones. This Potomac luxury home installation demonstrates the timeless beauty of traditional Italian plastering techniques.",
  },
  {
    id: "modern-board-batten-gaithersburg",
    title: "Contemporary Board & Batten Entryway - Gaithersburg",
    location: "Gaithersburg, MD",
    image: "/images/portfolio/modern-board-batten-entry.png",
    category: "board & batten",
    description:
      "Make a powerful first impression with this contemporary board and batten design in your entryway. This Gaithersburg installation features clean lines and modern proportions for a welcoming entrance.",
  },
  {
    id: "custom-media-wall-bethesda",
    title: "Custom Media Wall with Integrated Storage - Bethesda",
    location: "Bethesda, MD",
    image: "/images/portfolio/media-wall-storage.png",
    category: "media wall",
    description:
      "Maximize functionality with this custom media wall featuring integrated storage solutions and ambient lighting. This Bethesda family room installation combines entertainment and organization in one beautiful design.",
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Premium Accent Wall Portfolio
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our collection of 100+ premium accent wall installations throughout Washington DC, Maryland, and
                Virginia. From elegant board & batten to luxurious Roman plaster, see how we transform spaces.
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
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Featured Project Categories</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  "All Projects",
                  "Wood Slat",
                  "Board & Batten",
                  "Roman Plaster",
                  "Media Wall",
                  "Fireplace",
                  "Geometric",
                ].map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Accent Wall Services?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Our skilled artisans bring years of experience in premium wall installations, ensuring every project
                    meets the highest standards of quality and attention to detail.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Serving Washington DC, Maryland, and Virginia, we understand local design preferences and building
                    requirements for seamless project completion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Premium Materials</h3>
                  <p className="text-muted-foreground">
                    We source only the finest materials for our installations, from sustainably harvested wood to
                    authentic Italian plasters, ensuring lasting beauty.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                  <p className="text-muted-foreground">
                    Every project is tailored to your unique space and style preferences, creating one-of-a-kind accent
                    walls that perfectly complement your home.
                  </p>
                </div>
              </div>
            </div>
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
