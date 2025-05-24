import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"
import { SchemaOrg } from "@/components/schema-org"

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

// SEO-оптимизированные данные проектов
const projects = [
  {
    id: "modern-wood-slat-bethesda",
    title: "Modern Vertical Wood Slat Feature Wall - Bethesda Living Room",
    location: "Bethesda, MD",
    image: "/images/portfolio/wood-slat-modern.png",
    category: "Wood Slat Walls",
    description:
      "Transform your living space with this stunning vertical wood slat accent wall in rich walnut finish. This modern design creates a warm focal point while adding natural texture and sophistication to this Bethesda home's minimalist interior.",
    seoKeywords:
      "wood slat wall, vertical wood slats, walnut accent wall, modern living room, Bethesda interior design",
    completionTime: "3 days",
    materials: "Premium walnut wood slats, LED backlighting",
    roomType: "Living Room",
  },
  {
    id: "elegant-board-batten-silver-spring",
    title: "Classic Full-Height Board & Batten - Silver Spring Dining Room",
    location: "Silver Spring, MD",
    image: "/images/portfolio/white-board-batten-dining.png",
    category: "Board & Batten",
    description:
      "Elevate your dining experience with this timeless full-height board and batten installation in crisp white. This classic wainscoting design adds architectural interest and elegant charm to this Silver Spring dining room, perfect for both formal and casual entertaining.",
    seoKeywords: "board and batten, white wainscoting, dining room design, Silver Spring renovation, classic millwork",
    completionTime: "2 days",
    materials: "Premium MDF boards, semi-gloss white paint",
    roomType: "Dining Room",
  },
  {
    id: "floating-media-wall-arlington",
    title: "Minimalist Floating Media Wall with Hidden Storage - Arlington",
    location: "Arlington, VA",
    image: "/images/portfolio/floating-media-wall.png",
    category: "Media Walls",
    description:
      "Create the ultimate entertainment experience with this sleek floating media wall featuring clean lines, hidden cable management, and integrated ambient LED lighting. This custom Arlington installation maximizes space while maintaining a minimalist aesthetic.",
    seoKeywords:
      "floating media wall, TV wall mount, hidden storage, Arlington home theater, modern entertainment center",
    completionTime: "4 days",
    materials: "Custom millwork, LED strip lighting, cable management system",
    roomType: "Living Room",
  },
  {
    id: "geometric-wood-office-dc",
    title: "Bold Geometric Wood Pattern - Washington DC Home Office",
    location: "Washington, DC",
    image: "/images/portfolio/geometric-office-wall.png",
    category: "Geometric Accent Walls",
    description:
      "Make a statement in your workspace with this eye-catching geometric wood pattern accent wall. The dynamic angular design creates visual interest and inspiration in this Washington DC home office, boosting productivity and style.",
    seoKeywords:
      "geometric accent wall, wood pattern wall, home office design, Washington DC renovation, modern workspace",
    completionTime: "3 days",
    materials: "Mixed wood species, precision-cut geometric panels",
    roomType: "Home Office",
  },
  {
    id: "luxury-roman-plaster-chevy-chase",
    title: "Luxurious Smooth Roman Plaster - Chevy Chase Master Bedroom",
    location: "Chevy Chase, MD",
    image: "/images/portfolio/roman-plaster-bedroom.png",
    category: "Roman Plaster",
    description:
      "Experience ultimate luxury with this smooth Roman plaster accent wall in warm terracotta tones. This artisan-applied finish adds depth, texture, and Mediterranean elegance to this Chevy Chase master bedroom, creating a serene retreat.",
    seoKeywords: "Roman plaster, smooth plaster finish, terracotta wall, luxury bedroom, Chevy Chase interior design",
    completionTime: "5 days",
    materials: "Venetian plaster, natural pigments, protective sealant",
    roomType: "Master Bedroom",
  },
  {
    id: "contemporary-fireplace-rockville",
    title: "Floor-to-Ceiling Fireplace Feature - Rockville Family Room",
    location: "Rockville, MD",
    image: "/images/portfolio/modern-fireplace-feature.png",
    category: "Fireplace Buildouts",
    description:
      "Transform your family gathering space with this stunning floor-to-ceiling fireplace feature wall combining natural stone and wood elements. This Rockville installation creates a dramatic focal point perfect for cozy family evenings.",
    seoKeywords:
      "fireplace feature wall, stone and wood fireplace, family room design, Rockville renovation, modern fireplace",
    completionTime: "6 days",
    materials: "Natural stone veneer, reclaimed wood, custom millwork",
    roomType: "Family Room",
  },
  {
    id: "textured-limewash-alexandria",
    title: "Artisan Textured Limewash - Alexandria Historic Home",
    location: "Alexandria, VA",
    image: "/images/portfolio/limewash-living-room.png",
    category: "Limewash Walls",
    description:
      "Embrace old-world charm with this richly textured limewash accent wall that adds depth and character to this Alexandria historic home. The hand-applied technique creates unique patterns and movement in the sophisticated living space.",
    seoKeywords:
      "limewash walls, textured wall finish, Alexandria historic home, old world charm, artisan wall treatment",
    completionTime: "4 days",
    materials: "Natural lime plaster, mineral pigments, traditional tools",
    roomType: "Living Room",
  },
  {
    id: "backlit-wood-slat-georgetown",
    title: "LED Backlit Wood Slat Feature - Georgetown Luxury Condo",
    location: "Georgetown, DC",
    image: "/images/portfolio/backlit-wood-slat.png",
    category: "Wood Slat Walls",
    description:
      "Create dramatic evening ambiance with this LED backlit wood slat feature wall. This Georgetown luxury condo installation combines warm wood tones with modern lighting technology for a stunning visual effect.",
    seoKeywords: "backlit wood slats, LED accent lighting, Georgetown condo, luxury interior design, modern wood wall",
    completionTime: "4 days",
    materials: "Premium wood slats, LED strip lighting, dimmer controls",
    roomType: "Living Room",
  },
  {
    id: "restored-brick-frederick",
    title: "Restored Brick with German Smear - Frederick Historic Home",
    location: "Frederick, MD",
    image: "/images/portfolio/brick-accent-wall.png",
    category: "Brick Walls",
    description:
      "Celebrate historic character with this beautifully restored original brick accent wall featuring the German smear technique. This Frederick home renovation preserves architectural heritage while adding rustic charm.",
    seoKeywords:
      "restored brick wall, German smear technique, Frederick historic home, rustic accent wall, brick restoration",
    completionTime: "3 days",
    materials: "Original brick, mortar, German smear finish",
    roomType: "Living Room",
  },
  {
    id: "smooth-roman-plaster-potomac",
    title: "Elegant Smooth Roman Plaster - Potomac Luxury Home",
    location: "Potomac, MD",
    image: "/images/portfolio/roman-plaster-living-room.png",
    category: "Roman Plaster",
    description:
      "Achieve sophisticated elegance with this smooth Roman plaster accent wall in neutral tones. This Potomac luxury home installation demonstrates the timeless beauty of traditional Italian plastering techniques.",
    seoKeywords:
      "smooth Roman plaster, luxury home design, Potomac interior, neutral plaster finish, Italian plastering",
    completionTime: "5 days",
    materials: "Venetian plaster, natural earth pigments, wax finish",
    roomType: "Living Room",
  },
  {
    id: "modern-board-batten-gaithersburg",
    title: "Contemporary Board & Batten Entryway - Gaithersburg",
    location: "Gaithersburg, MD",
    image: "/images/portfolio/modern-board-batten-entry.png",
    category: "Board & Batten",
    description:
      "Make a powerful first impression with this contemporary board and batten design in your entryway. This Gaithersburg installation features clean lines and modern proportions for a welcoming entrance.",
    seoKeywords:
      "modern board and batten, entryway design, Gaithersburg renovation, contemporary wainscoting, entrance makeover",
    completionTime: "2 days",
    materials: "Premium MDF, contemporary trim profiles, durable paint",
    roomType: "Entryway",
  },
  {
    id: "custom-media-wall-bethesda",
    title: "Custom Media Wall with Integrated Storage - Bethesda",
    location: "Bethesda, MD",
    image: "/images/portfolio/media-wall-storage.png",
    category: "Media Walls",
    description:
      "Maximize functionality with this custom media wall featuring integrated storage solutions and ambient lighting. This Bethesda family room installation combines entertainment and organization in one beautiful design.",
    seoKeywords: "custom media wall, integrated storage, Bethesda family room, entertainment center, functional design",
    completionTime: "5 days",
    materials: "Custom cabinetry, LED lighting, cable management",
    roomType: "Family Room",
  },
]

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Accent Walls Pro Portfolio",
  description:
    "Premium accent wall installations including board & batten, Roman plaster, wood slat walls, and fireplace buildouts in Washington DC, Maryland, and Virginia",
  url: "https://accentwallspro.com/portfolio",
  image: projects.map((project) => ({
    "@type": "ImageObject",
    url: `https://accentwallspro.com${project.image}`,
    name: project.title,
    description: project.description,
  })),
}

export default function PortfolioPage() {
  return (
    <>
      <SchemaOrg schema={portfolioSchema} />
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
                  Explore our collection of 100+ premium accent wall installations throughout Washington DC, Maryland,
                  and Virginia. From elegant board & batten to luxurious Roman plaster, see how we transform spaces.
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
                    "Wood Slat Walls",
                    "Board & Batten",
                    "Roman Plaster",
                    "Media Walls",
                    "Fireplace Buildouts",
                    "Geometric Accent Walls",
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
                      Our skilled artisans bring years of experience in premium wall installations, ensuring every
                      project meets the highest standards of quality and attention to detail.
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
                      Every project is tailored to your unique space and style preferences, creating one-of-a-kind
                      accent walls that perfectly complement your home.
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
    </>
  )
}
