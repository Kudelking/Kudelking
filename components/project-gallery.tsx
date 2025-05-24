"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

interface Project {
  id: string
  title: string
  location: string
  image: string
  category: string
  description: string
}

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<string>("all")

  // Ensure all projects have valid categories
  const validProjects = projects.filter(
    (project) => project && typeof project.category === "string" && project.category.trim().length > 0,
  )

  const categories = ["all", ...Array.from(new Set(validProjects.map((project) => project.category)))]

  const filteredProjects =
    filter === "all" ? validProjects : validProjects.filter((project) => project.category === filter)

  return (
    <div className="space-y-8">
      {/* Фильтры */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Галерея проектов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              title={project.title || "Untitled Project"}
              description={project.description || ""}
              imageSrc={project.image || "/accent-wall-project.png"}
              category={project.category || "general"}
              location={project.location || ""}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}
