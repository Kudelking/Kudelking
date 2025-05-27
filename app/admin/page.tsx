import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Images, FolderOpen, Settings } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Админ-панель</h1>
        <p className="text-muted-foreground">Управление контентом сайта Accent Walls Pro</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FolderOpen className="h-5 w-5" />
              <span>Портфолио</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Добавляйте, редактируйте и удаляйте проекты в портфолио</p>
            <Button asChild className="w-full">
              <Link href="/admin/portfolio">Управление портфолио</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Images className="h-5 w-5" />
              <span>Изображения сервисов</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Замените изображения на страницах сервисов</p>
            <Button asChild className="w-full">
              <Link href="/admin/services">Управление изображениями</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Настройки</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Общие настройки сайта и SEO</p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/settings">Настройки</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-6 bg-primary/5 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Быстрый старт</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-2">Добавление нового проекта:</h3>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Перейдите в "Портфолио"</li>
              <li>Нажмите "Добавить проект"</li>
              <li>Заполните информацию</li>
              <li>Загрузите фото</li>
              <li>Сохраните</li>
            </ol>
          </div>
          <div>
            <h3 className="font-medium mb-2">Замена изображения сервиса:</h3>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Перейдите в "Изображения сервисов"</li>
              <li>Выберите нужный сервис</li>
              <li>Загрузите новое изображение</li>
              <li>Нажмите "Сохранить все изменения"</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
