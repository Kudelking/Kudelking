import Image from "next/image"
import Link from "next/link"

export function RomanPlasterCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
      <Link href="/services/roman-plaster" className="absolute inset-0 z-10">
        <span className="sr-only">View Roman Plaster Service</span>
      </Link>
      <div className="aspect-[4/3] w-full overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"
          alt="Roman Plaster"
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">Roman Plaster</h3>
        <p className="mt-2 text-sm text-gray-600">Elegant, timeless finishes that add luxury and depth to any space.</p>
      </div>
    </div>
  )
}
