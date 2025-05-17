import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-16 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="Accent Walls Pro Logo" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your space with premium accent walls, board & batten, wood slat walls, fireplaces & media walls.
              Serving Washington DC, Maryland & Virginia.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61571978974930"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 bg-background hover:bg-background/80 p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/accentwalls.pro/"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 bg-background hover:bg-background/80 p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              {/* Twitter and LinkedIn links removed as requested */}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="ghost" size="sm" className="w-full sm:w-auto">
                <Link href="tel:2404267900">Call Us: 240-426-7900</Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 inline-flex transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  9811 Bristol Square Ln
                  <br />
                  Bethesda, MD 20814
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:2404267900" className="text-muted-foreground hover:text-foreground transition-colors">
                  240-426-7900
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link
                  href="mailto:info@accentwallspro.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@accentwallspro.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Accent Walls Pro. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
