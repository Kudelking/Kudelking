"use client"

import { useState } from "react"
import Image from "next/image"

export function ServiceAreaMap() {
  const [activeArea, setActiveArea] = useState<string | null>(null)

  const serviceAreas = [
    { id: "dc", name: "Washington DC", description: "Full service coverage in all DC neighborhoods" },
    {
      id: "montgomery",
      name: "Montgomery County, MD",
      description: "Including Bethesda, Silver Spring, Rockville, Potomac, and Gaithersburg",
    },
    {
      id: "pg",
      name: "Prince George's County, MD",
      description: "Including Hyattsville, College Park, Bowie, and Laurel",
    },
    { id: "howard", name: "Howard County, MD", description: "Including Columbia, Ellicott City, and Clarksville" },
    { id: "fairfax", name: "Fairfax County, VA", description: "Including Vienna, Reston, McLean, and Falls Church" },
    {
      id: "arlington",
      name: "Arlington & Alexandria, VA",
      description: "Full service coverage in Arlington and Alexandria",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src="/images/dmv-map.png" alt="DMV Area Map" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h3 className="text-white text-xl font-bold shadow-text">DMV Service Area</h3>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-3">Areas We Serve</h3>
        <div className="space-y-2">
          {serviceAreas.map((area) => (
            <div
              key={area.id}
              className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <h4 className="font-medium text-gray-900">{area.name}</h4>
              {activeArea === area.id && <p className="text-sm text-gray-600 mt-1">{area.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
