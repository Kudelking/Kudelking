"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageUploader } from "@/components/image-uploader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Plus, Edit, Trash2 } from "lucide-react"

interface Project {
  id: string
  title: string
  location: string
  image: string
  category: string
  description: string
}

const categories = [
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

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<{ [key: string]: string }>({})

  // Load projects from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio-projects")
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    } else {
      // Initialize with default projects
      const defaultProjects: Project[] = [
        {
          id: "floating-tv-modern",
          title: "Парящая ТВ стена с LED подсветкой",
          location: "Arlington, VA",
          image: "/floating-tv-media-wall.png",
          category: "tv walls",
          description:
            "Современная парящая ТВ стена с чистыми линиями, скрытым кабель-менеджментом и интегрированной LED подсветкой.",
        },
        {
          id: "board-batten-white-dining",
          title: "Классический белый Board & Batten в столовой",
          location: "Silver Spring, MD",
          image: "/white-board-and-batten-dining-room.png",
          category: "board & batten",
          description: "Элегантная белая обшивка board and batten в формальной столовой с классическими пропорциями.",
        },
      ]
      setProjects(defaultProjects)
    }
  }, [])

  // Save projects to localStorage
  const saveProjects = (newProjects: Project[]) => {
    setProjects(newProjects)
    localStorage.setItem("portfolio-projects", JSON.stringify(newProjects))
  }

  const handleImageUpload = (projectId: string, file: File, previewUrl: string) => {
    // In a real app, you would upload to a server here
    // For now, we'll store the blob URL
    setUploadedImages((prev) => ({
      ...prev,
      [projectId]: previewUrl,
    }))
  }

  const handleSaveProject = (project: Project) => {
    const imageUrl = uploadedImages[project.id] || project.image
    const updatedProject = { ...project, image: imageUrl }

    if (isCreating) {
      saveProjects([...projects, updatedProject])
      setIsCreating(false)
    } else {
      saveProjects(projects.map((p) => (p.id === project.id ? updatedProject : p)))
    }

    setEditingProject(null)
  }

  const handleDeleteProject = (projectId: string) => {
    if (confirm("Вы уверены, что хотите удалить этот проект?")) {
      saveProjects(projects.filter((p) => p.id !== projectId))
    }
  }

  const createNewProject = () => {
    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: "",
      location: "",
      image: "",
      category: "accent walls",
      description: "",
    }
    setEditingProject(newProject)
    setIsCreating(true)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Управление портфолио</h1>
        <p className="text-muted-foreground">Добавляйте, редактируйте и удаляйте проекты в вашем портфолио</p>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projects">Проекты</TabsTrigger>
          <TabsTrigger value="edit">Редактировать</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Все проекты ({projects.length})</h2>
            <Button onClick={createNewProject}>
              <Plus className="h-4 w-4 mr-2" />
              Добавить проект
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={uploadedImages[project.id] || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 space-x-2">
                    <Button size="sm" variant="secondary" onClick={() => setEditingProject(project)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDeleteProject(project.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                    {project.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="edit">
          {editingProject ? (
            <ProjectEditor
              project={editingProject}
              onSave={handleSaveProject}
              onCancel={() => {
                setEditingProject(null)
                setIsCreating(false)
              }}
              onImageUpload={handleImageUpload}
              isCreating={isCreating}
            />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">Выберите проект для редактирования</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ProjectEditorProps {
  project: Project
  onSave: (project: Project) => void
  onCancel: () => void
  onImageUpload: (projectId: string, file: File, previewUrl: string) => void
  isCreating: boolean
}

function ProjectEditor({ project, onSave, onCancel, onImageUpload, isCreating }: ProjectEditorProps) {
  const [formData, setFormData] = useState(project)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isCreating ? "Создать новый проект" : "Редактировать проект"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Название проекта</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Например: Современная ТВ стена"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location">Локация</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Например: Arlington, VA"
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Категория</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Описание</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Описание проекта..."
                  rows={4}
                  required
                />
              </div>
            </div>

            <div>
              <ImageUploader
                currentImage={formData.image}
                onImageChange={(file, previewUrl) => onImageUpload(formData.id, file, previewUrl)}
                title="Изображение проекта"
                description="Загрузите фото завершенного проекта"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <Button type="submit">
              <Save className="h-4 w-4 mr-2" />
              {isCreating ? "Создать проект" : "Сохранить изменения"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              Отмена
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
