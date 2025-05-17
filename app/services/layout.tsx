import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesSidebar } from "@/components/services-sidebar"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Header */}
      <header className="border-b">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Accent Walls Pro" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <Button asChild size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar - hidden on mobile, shown on desktop */}
          <div className="hidden md:block">
            <div className="sticky top-4">
              <ServicesSidebar />
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact us for a free consultation and quote for your custom project.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar Toggle - only shown on mobile */}
          <div className="md:hidden mb-6">
            <details className="bg-white rounded-lg shadow-sm border border-gray-100">
              <summary className="p-4 font-medium cursor-pointer">Browse Services</summary>
              <div className="p-2 pt-0 border-t">
                <ServicesSidebar />
              </div>
            </details>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="mt-auto bg-muted/50 border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Accent Walls Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
