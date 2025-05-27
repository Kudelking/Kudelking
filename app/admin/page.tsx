"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UniversalImageManager } from "@/components/universal-image-manager"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Images, FolderOpen, Settings, BarChart3, Download, Upload, RefreshCw, Save } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Админ-панель сайта</h1>
        <p className="text-muted-foreground text-lg">Управление контентом и изображениями вашего сайта</p>
      </div>

      <Tabs defaultValue="images" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="images" className="flex items-center gap-2">
            <Images className="h-4 w-4" />
            Все изображения
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            Портфолио
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Сервисы
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Аналитика
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images">
          <UniversalImageManager />
        </TabsContent>

        <TabsContent value="portfolio">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Управление портфолио</h2>
                <p className="text-muted-foreground">Добавляйте, редактируйте и удаляйте проекты</p>
              </div>
              <Button asChild>
                <a href="/admin/portfolio">Открыть редактор портфолио</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderOpen className="h-5 w-5" />
                    Проекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">24</p>
                  <p className="text-sm text-muted-foreground">Всего проектов в портфолио</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Images className="h-5 w-5" />
                    Изображения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">48</p>
                  <p className="text-sm text-muted-foreground">Изображений в портфолио</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Категории
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">8</p>
                  <p className="text-sm text-muted-foreground">Активных категорий</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="services">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Управление сервисами</h2>
                <p className="text-muted-foreground">Редактируйте изображения и контент сервисов</p>
              </div>
              <Button asChild>
                <a href="/admin/services">Открыть редактор сервисов</a>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Акцентные стены", count: 12, icon: "🎨" },
                { name: "Board & Batten", count: 8, icon: "📐" },
                { name: "Римская штукатурка", count: 15, icon: "🏛️" },
                { name: "Лаймвош", count: 6, icon: "🌿" },
                { name: "Камины", count: 10, icon: "🔥" },
                { name: "Медиа стены", count: 7, icon: "📺" },
                { name: "Обои", count: 9, icon: "🖼️" },
                { name: "Кирпичные стены", count: 5, icon: "🧱" },
              ].map((service) => (
                <Card key={service.name}>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{service.name}</h3>
                    <p className="text-xs text-muted-foreground">{service.count} изображений</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Аналитика и инструменты</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Images className="h-5 w-5" />
                    Всего изображений
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">156</p>
                  <p className="text-sm text-muted-foreground">На всем сайте</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5" />
                    Изменено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">23</p>
                  <p className="text-sm text-muted-foreground">Замененных изображений</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Save className="h-5 w-5" />
                    Сохранено
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">45MB</p>
                  <p className="text-sm text-muted-foreground">Размер изменений</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Оптимизация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2">87%</p>
                  <p className="text-sm text-muted-foreground">Сжатие изображений</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Инструменты управления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Экспорт всех изображений
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Импорт резервной копии
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Сбросить все изменения
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Настройки оптимизации
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Быстрые действия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Последнее изменение:</strong> 5 минут назад
                    </p>
                    <p>
                      <strong>Последнее сохранение:</strong> 2 часа назад
                    </p>
                    <p>
                      <strong>Размер кэша:</strong> 127MB
                    </p>
                    <p>
                      <strong>Статус:</strong> <span className="text-green-600">Все сохранено</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
