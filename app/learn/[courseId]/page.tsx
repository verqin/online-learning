'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Menu,
  X,
  Award,
} from 'lucide-react'

export default function CourseLearningPage({ params }: { params: { courseId: string } }) {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<number[]>([])

  const courseData = {
    id: params.courseId,
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    modules: [
      {
        id: 1,
        title: 'Getting Started with HTML',
        duration: '45 mins',
        type: 'lesson',
        description: 'Learn the basics of HTML structure and semantic elements',
      },
      {
        id: 2,
        title: 'CSS Styling Basics',
        duration: '50 mins',
        type: 'lesson',
        description: 'Master CSS selectors, properties, and responsive design',
      },
      {
        id: 3,
        title: 'HTML & CSS Quiz',
        duration: '20 mins',
        type: 'quiz',
        description: 'Test your knowledge with this interactive quiz',
      },
      {
        id: 4,
        title: 'JavaScript Fundamentals',
        duration: '60 mins',
        type: 'lesson',
        description: 'Understand variables, functions, and DOM manipulation',
      },
      {
        id: 5,
        title: 'Building Your First Project',
        duration: '120 mins',
        type: 'project',
        description: 'Create a responsive portfolio website',
      },
    ],
  }

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
      
      if (!loggedIn) {
        router.push(`/login?redirect=/learn/${params.courseId}`)
        return
      }
      
      setIsLoggedIn(true)
      
      const saved = localStorage.getItem(`course-${params.courseId}-completed`)
      if (saved) {
        setCompletedModules(JSON.parse(saved))
      }
      
      setIsLoading(false)
    }

    checkAuth()
  }, [params.courseId, router])

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      const updated = [...completedModules, moduleId]
      setCompletedModules(updated)
      localStorage.setItem(`course-${params.courseId}-completed`, JSON.stringify(updated))
    }
  }

  const progressPercentage = Math.round((completedModules.length / courseData.modules.length) * 100)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-blue-600 animate-bounce mx-auto mb-4" />
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-blue-900">{courseData.title}</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:col-span-1`}>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="text-lg">Course Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm font-bold text-blue-600">{progressPercentage}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm">Modules</h3>
                {courseData.modules.map((module, idx) => (
                  <button
                    key={module.id}
                    onClick={() => {
                      setCurrentModule(idx)
                      setSidebarOpen(false)
                    }}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      currentModule === idx
                        ? 'bg-blue-100 border-l-4 border-blue-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {completedModules.includes(module.id) ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0 mt-0.5" />
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{module.title}</p>
                        <p className="text-xs text-gray-500">{module.duration}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          {courseData.modules[currentModule] && (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {courseData.modules[currentModule].title}
                    </h2>
                    <p className="text-gray-600">{courseData.modules[currentModule].description}</p>
                  </div>
                  {completedModules.includes(courseData.modules[currentModule].id) && (
                    <Badge className="bg-green-100 text-green-700">Completed</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{courseData.modules[currentModule].duration}</span>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 min-h-60 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Module content would be displayed here</p>
                    <p className="text-sm text-gray-500">
                      {courseData.modules[currentModule].type === 'video'
                        ? 'Video player will be embedded'
                        : courseData.modules[currentModule].type === 'quiz'
                        ? 'Interactive quiz interface'
                        : 'Interactive lesson content'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setCurrentModule(Math.max(0, currentModule - 1))}
                    disabled={currentModule === 0}
                    variant="outline"
                  >
                    Previous Module
                  </Button>

                  {!completedModules.includes(courseData.modules[currentModule].id) && (
                    <Button
                      onClick={() => handleModuleComplete(courseData.modules[currentModule].id)}
                      className="premium-button flex-1"
                    >
                      Mark as Complete
                      <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}

                  <Button
                    onClick={() => setCurrentModule(Math.min(courseData.modules.length - 1, currentModule + 1))}
                    disabled={currentModule === courseData.modules.length - 1}
                  >
                    Next Module
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {progressPercentage === 100 && (
                  <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                    <h3 className="font-semibold text-green-900 mb-2">Course Completed!</h3>
                    <p className="text-green-700 text-sm mb-4">
                      Congratulations! You have completed all modules. You can now pursue certification or diploma.
                    </p>
                    <Link href="/dashboard">
                      <Button className="premium-button">
                        <Award className="w-4 h-4 mr-2" />
                        View Certification Options
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
