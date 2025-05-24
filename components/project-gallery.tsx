"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { OptimizedImage } from "@/components/optimized-image"

interface Project {
  id: string
  title: string
  location: string
  image: string
  category: string
  description: string
  seoKeywords?: string
  completionTime?: string
  materials?: string
  roomType?: string
}

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["All Projects", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "All Projects" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-background border border-border hover:border-primary/50 hover:bg-muted"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group">
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.image}
              category={project.category}
              location={project.location}
              href={`#project-${project.id}`}
            />
            <div className="mt-3 space-y-1 text-sm text-muted-foreground">
              {project.completionTime && (
                <div className="flex justify-between">
                  <span>Completion Time:</span>
                  <span className="font-medium">{project.completionTime}</span>
                </div>
              )}
              {project.roomType && (
                <div className="flex justify-between">
                  <span>Room Type:</span>
                  <span className="font-medium">{project.roomType}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal/Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-80">
                  <OptimizedImage
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                  <div className="space-y-2">
                    <div>
                      <strong>Location:</strong> {selectedProject.location}
                    </div>
                    <div>
                      <strong>Category:</strong> {selectedProject.category}
                    </div>
                    {selectedProject.completionTime && (
                      <div>
                        <strong>Completion Time:</strong> {selectedProject.completionTime}
                      </div>
                    )}
                    {selectedProject.materials && (
                      <div>
                        <strong>Materials:</strong> {selectedProject.materials}
                      </div>
                    )}
                    {selectedProject.roomType && (
                      <div>
                        <strong>Room Type:</strong> {selectedProject.roomType}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEO Content */}
      <div className="mt-16 prose prose-gray max-w-none">
        <h3 className="text-xl font-semibold mb-4">Our Portfolio Showcase</h3>
        <p className="text-muted-foreground">
          Each project in our portfolio represents our commitment to excellence in accent wall installation. From modern
          wood slat walls in Bethesda to classic board and batten in Silver Spring, we bring your vision to life with
          precision craftsmanship and attention to detail.
        </p>
      </div>
    </div>
  )
}
