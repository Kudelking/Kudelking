"use client"

import Image from "next/image"

export function TrustBadges() {
  return (
    <div className="container flex flex-wrap items-center justify-around gap-4">
      <div className="h-16 w-32 relative">
        <Image
          src="/home-advisor-badge.png"
          alt="HomeAdvisor Top Rated"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="h-16 w-32 relative">
        <Image
          src="/google-5-star-badge.png"
          alt="Google 5-Star Rated"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="h-16 w-32 relative">
        <Image
          src="/bbb-accredited-badge.png"
          alt="BBB Accredited Business"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="h-16 w-32 relative">
        <Image
          src="/thumbtack-top-pro-badge.png"
          alt="Thumbtack Top Pro"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
