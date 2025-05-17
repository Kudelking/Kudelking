import Link from "next/link"
import Image from "next/image"

export function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Accent Walls Pro Logo"
            width={180}
            height={180}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md shadow-sm"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  )
}
