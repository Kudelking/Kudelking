import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function ServicesSidebar() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Roman Plaster</h3>
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"
            alt="Roman Plaster"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/roman-plaster"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              All Roman Plaster
            </Link>
          </li>
          <li>
            <Link
              href="/services/roman-plaster/smooth"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Smooth Finish
            </Link>
          </li>
          <li>
            <Link
              href="/services/roman-plaster/textured"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Textured Finish
            </Link>
          </li>
          <li>
            <Link
              href="/services/roman-plaster/marmorino"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Marmorino
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Accent Walls</h3>
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <Image src="/geometric-accent-wall.png" alt="Accent Walls" fill className="object-cover" />
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/accent-walls"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              All Accent Walls
            </Link>
          </li>
          <li>
            <Link
              href="/services/accent-walls/wood-slat"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Wood Slat Walls
            </Link>
          </li>
          <li>
            <Link
              href="/services/accent-walls/geometric"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Geometric Designs
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Board & Batten</h3>
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <Image src="/elegant-board-and-batten.png" alt="Board & Batten" fill className="object-cover" />
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/board-and-batten"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              All Board & Batten
            </Link>
          </li>
          <li>
            <Link
              href="/services/board-and-batten/traditional"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Traditional
            </Link>
          </li>
          <li>
            <Link
              href="/services/board-and-batten/modern"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Modern
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Fireplace Build-Outs</h3>
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <Image src="/modern-fireplace-buildout.png" alt="Fireplace Build-Outs" fill className="object-cover" />
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/fireplace-buildouts"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              All Fireplace Build-Outs
            </Link>
          </li>
          <li>
            <Link
              href="/services/fireplace-buildouts/modern"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Modern
            </Link>
          </li>
          <li>
            <Link
              href="/services/fireplace-buildouts/traditional"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Traditional
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Media Walls</h3>
        <div className="relative h-40 rounded-lg overflow-hidden mb-3">
          <Image src="/tv-media-wall.png" alt="Media Walls" fill className="object-cover" />
        </div>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/media-walls"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              All Media Walls
            </Link>
          </li>
          <li>
            <Link
              href="/services/media-walls/floating"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Floating
            </Link>
          </li>
          <li>
            <Link
              href="/services/media-walls/built-in"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Built-In
            </Link>
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Other Services</h3>
        <ul className="space-y-1">
          <li>
            <Link
              href="/services/limewash-walls"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Limewash Walls
            </Link>
          </li>
          <li>
            <Link
              href="/services/brick-walls"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Brick Walls
            </Link>
          </li>
          <li>
            <Link
              href="/services/decorative-ceilings"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Decorative Ceilings
            </Link>
          </li>
          <li>
            <Link
              href="/services/wallpaper-installation"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Wallpaper Installation
            </Link>
          </li>
          <li>
            <Link
              href="/services/custom-projects"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4 mr-1" />
              Custom Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
