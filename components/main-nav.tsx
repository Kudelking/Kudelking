"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Define service categories with images and descriptions
const serviceCategories = [
  {
    name: "Accent Walls",
    href: "/services/accent-walls",
    image: "/images/accent-wall-thumb.jpg",
    description: "Transform your space with stunning accent walls",
    subcategories: [
      { name: "Wood Slat Walls", href: "/services/accent-walls/wood-slat" },
      { name: "Geometric Walls", href: "/services/accent-walls/geometric" },
    ],
  },
  {
    name: "Board & Batten",
    href: "/services/board-and-batten",
    image: "/images/board-batten-thumb.jpg",
    description: "Classic elegance with modern board & batten designs",
    subcategories: [
      { name: "Traditional Board & Batten", href: "/services/board-and-batten/traditional" },
      { name: "Modern Board & Batten", href: "/services/board-and-batten/modern" },
    ],
  },
  {
    name: "Roman Plaster",
    href: "/services/roman-plaster",
    image: "/images/roman-plaster-thumb.jpg",
    description: "Elegant texture and depth with Roman Plaster finishes",
    subcategories: [
      { name: "Smooth Finish", href: "/services/roman-plaster/smooth" },
      { name: "Textured Finish", href: "/services/roman-plaster/textured" },
      { name: "Marmorino", href: "/services/roman-plaster/marmorino" },
    ],
  },
  {
    name: "Fireplace Build-Outs",
    href: "/services/fireplace-buildouts",
    image: "/images/fireplace-thumb.jpg",
    description: "Custom fireplace designs to enhance your living space",
    subcategories: [
      { name: "Modern Fireplace", href: "/services/fireplace-buildouts/modern" },
      { name: "Traditional Fireplace", href: "/services/fireplace-buildouts/traditional" },
    ],
  },
]

export function MainNav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when navigating to a new page
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsServicesOpen(false)
    }
  }

  return (
    <>
      {/* Spacer div that takes up space when nav is fixed */}
      {isScrolled && <div className="h-16" />}

      <header
        className={cn(
          "bg-white w-full z-50 transition-all duration-300",
          isScrolled ? "fixed top-0 left-0 right-0 shadow-md" : "relative shadow-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Accent Walls Pro Logo"
                width={100}
                height={30}
                className={cn("h-8 w-auto transition-all duration-300", isScrolled ? "scale-90" : "scale-100")}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === "/" && "text-primary font-semibold",
                )}
              >
                Home
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === "/" && "w-full",
                  )}
                ></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onKeyDown={handleKeyDown}
              >
                <button
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center relative group",
                    pathname.startsWith("/services") && "text-primary font-semibold",
                  )}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={cn("ml-0.5 h-3 w-3 transition-transform duration-300", isServicesOpen && "rotate-180")}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                      pathname.startsWith("/services") && "w-full",
                    )}
                  ></span>
                </button>

                {/* Mega Menu */}
                {isServicesOpen && (
                  <div
                    className="absolute left-0 mt-1 w-screen max-w-6xl -translate-x-1/3 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5 animate-fade-in"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.href} className="group">
                          <Link href={category.href} className="block">
                            <div className="relative h-40 mb-3 overflow-hidden rounded-lg">
                              <Image
                                src={category.image || "/placeholder.svg?height=400&width=600&query=accent wall"}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              <h3 className="absolute bottom-3 left-3 text-white font-bold text-lg">{category.name}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{category.description}</p>
                          </Link>
                          <ul className="space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <li key={subcategory.href}>
                                <Link
                                  href={subcategory.href}
                                  className={cn(
                                    "text-sm text-gray-500 hover:text-primary hover:underline transition-colors duration-200",
                                    pathname === subcategory.href && "text-primary font-medium",
                                  )}
                                >
                                  {subcategory.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 px-5 py-3 flex flex-wrap justify-between items-center rounded-b-md">
                      <p className="text-sm text-gray-500">Need a custom solution?</p>
                      <Link
                        href="/contact"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        Contact us for a free consultation →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === "/portfolio" && "text-primary font-semibold",
                )}
              >
                Portfolio
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === "/portfolio" && "w-full",
                  )}
                ></span>
              </Link>
              <Link
                href="/locations"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  (pathname === "/locations" || pathname.startsWith("/locations/")) && "text-primary font-semibold",
                )}
              >
                Locations
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    (pathname === "/locations" || pathname.startsWith("/locations/")) && "w-full",
                  )}
                ></span>
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  (pathname === "/blog" || pathname.startsWith("/blog/")) && "text-primary font-semibold",
                )}
              >
                Blog
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    (pathname === "/blog" || pathname.startsWith("/blog/")) && "w-full",
                  )}
                ></span>
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === "/contact" && "text-primary font-semibold",
                )}
              >
                Contact
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === "/contact" && "w-full",
                  )}
                ></span>
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="tel:2404267900"
                className="text-sm font-medium flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span>240-426-7900</span>
              </Link>
              <Button asChild size="sm" className="shadow-sm hover:shadow-md transition-all">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[350px] overflow-y-auto">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4 border-b">
                      <Link href="/" className="flex items-center gap-2">
                        <Image
                          src="/logo.png"
                          alt="Accent Walls Pro Logo"
                          width={120}
                          height={35}
                          className="h-8 w-auto"
                        />
                      </Link>
                    </div>

                    <nav className="flex-1 py-4">
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="/"
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md hover:bg-muted",
                              pathname === "/" && "text-primary font-medium bg-muted/50",
                            )}
                          >
                            Home
                          </Link>
                        </li>

                        <li className="space-y-2">
                          <button
                            className={cn(
                              "flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-muted break-words",
                              pathname.startsWith("/services") && "text-primary font-medium bg-muted/50",
                            )}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                          >
                            <span className="mr-2">Services</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 flex-shrink-0 transition-transform duration-200",
                                isMobileMenuOpen && "rotate-180",
                              )}
                            />
                          </button>

                          {isMobileMenuOpen && (
                            <ul className="pl-4 space-y-2 animate-slide-down">
                              {serviceCategories.map((category) => (
                                <li key={category.href}>
                                  <Link
                                    href={category.href}
                                    className={cn(
                                      "block py-2 px-3 rounded-md hover:bg-muted text-sm",
                                      pathname === category.href && "text-primary font-medium bg-muted/50",
                                    )}
                                  >
                                    {category.name}
                                  </Link>
                                  <ul className="pl-4 space-y-1 mt-1">
                                    {category.subcategories.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          className={cn(
                                            "block py-1 px-3 rounded-md hover:bg-muted text-sm",
                                            pathname === sub.href && "text-primary font-medium bg-muted/50",
                                          )}
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        <li>
                          <Link
                            href="/portfolio"
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md hover:bg-muted",
                              pathname === "/portfolio" && "text-primary font-medium bg-muted/50",
                            )}
                          >
                            Portfolio
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/locations"
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md hover:bg-muted",
                              (pathname === "/locations" || pathname.startsWith("/locations/")) &&
                                "text-primary font-medium bg-muted/50",
                            )}
                          >
                            Locations
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/blog"
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md hover:bg-muted",
                              (pathname === "/blog" || pathname.startsWith("/blog/")) &&
                                "text-primary font-medium bg-muted/50",
                            )}
                          >
                            Blog
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/contact"
                            className={cn(
                              "flex items-center py-2 px-3 rounded-md hover:bg-muted",
                              pathname === "/contact" && "text-primary font-medium bg-muted/50",
                            )}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <div className="py-4 border-t">
                      <Link
                        href="tel:2404267900"
                        className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-muted"
                      >
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
                          className="h-4 w-4"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>240-426-7900</span>
                      </Link>

                      <div className="mt-4">
                        <Button asChild className="w-full">
                          <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
