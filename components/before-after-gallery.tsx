"use client"

import { useState } from "react"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterProject {
  id: string
  title: string
  description: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  location: string
}

const projects: BeforeAfterProject[] = [
  {
    id: "wood-slat",
    title: "Modern Wood Slat Accent Wall",
    description:
      "Transformed a plain living room wall into a stunning wood slat feature that adds warmth and dimension.",
    beforeImage: "/plain-living-room-wall.png",
    afterImage: "/wood-slat-living-room.png",
    beforeAlt: "Plain white living room wall",
    afterAlt: "Modern wood slat accent wall",
    location: "Bethesda, MD",
  },
  {
    id: "board-batten",
    title: "Elegant Board & Batten",
    description: "Added classic board and batten to this dining room for a timeless, sophisticated look.",
    beforeImage: "/images/before-after/plain-dining-room.png",
    afterImage: "/images/before-after/board-batten-dining.png",
    beforeAlt: "Plain dining room wall",
    afterAlt: "Dining room with board and batten",
    location: "Silver Spring, MD",
  },
  {
    id: "roman-plaster",
    title: "Luxurious Roman Plaster",
    description: "Applied smooth finish Roman plaster to create a luxurious, textured bedroom wall.",
    beforeImage: "/images/before-after/plain-bedroom.png",
    afterImage: "/images/before-after/roman-plaster-bedroom.png",
    beforeAlt: "Plain bedroom wall",
    afterAlt: "Bedroom with Roman plaster wall",
    location: "Arlington, VA",
  },
]

export function BeforeAfterGallery() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentProject]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={prevProject} aria-label="Previous project">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextProject} aria-label="Next project">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <BeforeAfterSlider
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        beforeAlt={project.beforeAlt}
        afterAlt={project.afterAlt}
      />

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm mb-2">{project.description}</p>
        <p className="text-xs text-muted-foreground">Location: {project.location}</p>
      </div>

      <div className="flex justify-center">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === currentProject ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => setCurrentProject(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
