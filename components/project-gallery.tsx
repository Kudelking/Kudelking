"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, MapPin } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

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

function ProjectCard({
  title,
  description,
  imageSrc,
  category,
  location,
}: { title: string; description: string; imageSrc: string; category: string; location: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md h-full flex flex-col">
      <div className="aspect-square relative">
        <OptimizedImage
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4">
        <Badge className="mb-2">{category}</Badge>
        <h3 className="text-white font-bold text-lg line-clamp-1 mb-1">{title}</h3>
        <div className="flex items-center text-white/80 text-sm mb-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{location}</span>
        </div>
        <p className="text-white/90 text-sm line-clamp-2 mb-3">{description}</p>
        <Button size="sm" variant="secondary" className="w-full mt-2">
          <span>View Project</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </div>
  )
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<string>("all")
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects)

  useEffect(() => {
    if (filter === "all") {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter((project) => project.category === filter))
    }
  }, [filter, projects])

  // Получаем уникальные категории из проектов
  const categories = ["all", ...Array.from(new Set(projects.map((project) => project.category)))]

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
        {visibleProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.image}
              category={project.category}
              location={project.location}
            />
          </div>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}
