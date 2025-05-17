"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown, ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const serviceCategories = [
  {
    name: "Accent Walls",
    href: "/services/accent-walls",
    subcategories: [
      { name: "Wood Slat Walls", href: "/services/accent-walls/wood-slat" },
      { name: "Geometric Walls", href: "/services/accent-walls/geometric" },
    ],
  },
  {
    name: "Board & Batten",
    href: "/services/board-and-batten",
    subcategories: [
      { name: "Traditional Board & Batten", href: "/services/board-and-batten/traditional" },
      { name: "Modern Board & Batten", href: "/services/board-and-batten/modern" },
    ],
  },
  {
    name: "Roman Plaster",
    href: "/services/roman-plaster",
    subcategories: [
      { name: "Smooth Finish", href: "/services/roman-plaster/smooth" },
      { name: "Textured Finish", href: "/services/roman-plaster/textured" },
      { name: "Marmorino", href: "/services/roman-plaster/marmorino" },
    ],
  },
  {
    name: "Fireplace Build-Outs",
    href: "/services/fireplace-buildouts",
    subcategories: [
      { name: "Modern Fireplace", href: "/services/fireplace-buildouts/modern" },
      { name: "Traditional Fireplace", href: "/services/fireplace-buildouts/traditional" },
    ],
  },
]

export function MobileNav() {
  const [openCategories, setOpenCategories] = useState<string[]>([])

  const toggleCategory = (name: string) => {
    setOpenCategories((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  return (
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
              <Image src="/logo.png" alt="Accent Walls Pro Logo" width={120} height={35} className="h-8 w-auto" />
            </Link>
          </div>

          <nav className="flex-1 py-4">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                  Home
                </Link>
              </li>

              <li className="space-y-2">
                <button
                  className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-muted break-words"
                  onClick={() => toggleCategory("services")}
                >
                  <span className="mr-2">Services</span>
                  {openCategories.includes("services") ? (
                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  )}
                </button>

                {openCategories.includes("services") && (
                  <ul className="pl-4 space-y-2">
                    {serviceCategories.map((category) => (
                      <li key={category.href} className="space-y-2">
                        <button
                          className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-muted"
                          onClick={() => toggleCategory(category.name)}
                        >
                          <span>{category.name}</span>
                          {openCategories.includes(category.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </button>

                        {openCategories.includes(category.name) && (
                          <ul className="pl-4 space-y-1 mb-2">
                            <li>
                              <Link href={category.href} className="block py-1 px-3 rounded-md hover:bg-muted text-sm">
                                All {category.name}
                              </Link>
                            </li>
                            {category.subcategories.map((sub) => (
                              <li key={sub.href}>
                                <Link href={sub.href} className="block py-1 px-3 rounded-md hover:bg-muted text-sm">
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link href="/portfolio" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link href="/locations" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                  Locations
                </Link>
              </li>

              <li>
                <Link href="/blog" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="py-4 border-t">
            <Link href="tel:2404267900" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-muted">
              <Phone className="h-4 w-4" />
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
  )
}
