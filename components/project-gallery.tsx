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

  const categories = [
    "all",
    "tv walls",
    "board & batten",
    "fireplaces",
    "limewash",
    "wood slats",
    "roman plaster",
    "accent walls",
    "brick walls",
    "wallpaper",
    "ceilings",
  ]

  const getCategoryDisplayName = (category: string) => {
    const displayNames: { [key: string]: string } = {
      all: "Все проекты",
      "tv walls": "ТВ и медиа стены",
      "board & batten": "Board & Batten",
      fireplaces: "Облицовка каминов",
      limewash: "Лаймвош и декоративное",
      "wood slats": "Деревянные рейки",
      "roman plaster": "Римская штукатурка",
      "accent walls": "Акцентные стены",
      "brick walls": "Кирпичные стены",
      wallpaper: "Установка обоев",
      ceilings: "Декорация потолков",
    }
    return displayNames[category] || category
  }

  const filteredProjects =
    filter === "all" ? validProjects : validProjects.filter((project) => project.category === filter)

  // Show project count for current filter
  const projectCount = filteredProjects.length

  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center px-4">
        {categories.map((category) => {
          const categoryProjects =
            category === "all" ? validProjects : validProjects.filter((p) => p.category === category)
          return (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-sm"
              }`}
              aria-label={`Фильтровать проекты по ${category}`}
            >
              {getCategoryDisplayName(category)} ({categoryProjects.length})
            </button>
          )
        })}
      </div>

      {/* Results Summary */}
      <div className="text-center px-4">
        <p className="text-sm text-muted-foreground">
          Показано {projectCount} {filter === "all" ? "всего" : getCategoryDisplayName(filter).toLowerCase()} проектов
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              title={project.title || "Проект без названия"}
              description={project.description || ""}
              imageSrc={project.image || "/placeholder.svg?height=400&width=600&query=accent+wall+project"}
              category={project.category || "general"}
              location={project.location || ""}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-8 md:py-12 px-4">
          <p className="text-sm md:text-base text-muted-foreground">Проекты в этой категории не найдены.</p>
        </div>
      )}
    </div>
  )
}
