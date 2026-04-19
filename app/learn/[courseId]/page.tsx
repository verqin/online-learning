'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  ChevronRight,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  Volume2,
  Settings,
  Menu,
  X,
  ArrowLeft,
} from 'lucide-react'

export default function CourseLearningPage({ params }: { params: { courseId: string } }) {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<number[]>([])

  // Mock course data - replace with API call
  const courseData = {
    id: params.courseId,
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 12543,
    progress: 35,
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
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    setIsLoggedIn(loggedIn)

    if (!loggedIn) {
      router.push('/login?redirect=/learn/' + params.courseId)
      return
    }

    setIsLoading(false)

    // Simulate loading saved progress
    const savedProgress = localStorage.getItem(`course-${params.courseId}-progress`)
    if (savedProgress) {
      setCompletedModules(JSON.parse(savedProgress))
    }
  }, [params.courseId, router])

  const handleModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      const updated = [...completedModules, moduleId]
      setCompletedModules(updated)
      localStorage.setItem(`course-${params.courseId}-progress`, JSON.stringify(updated))
    }
  }

  const progressPercentage = Math.round((completedModules.length / courseData.modules.length) * 100)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
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
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/courses" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Courses</span>
          </Link>

          <h1 className="text-lg sm:text-xl font-bold text-blue-900 text-center flex-1 px-4 truncate">
            {courseData.title}
          </h1>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="sm:hidden p-2 hover:bg-blue-100 rounded-lg"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">English</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex gap-6">
        {/* Sidebar - Course Modules */}
        <div
          className={`${
            sidebarOpen ? 'block' : 'hidden'
          } sm:block w-full sm:w-80 flex-shrink-0 bg-white rounded-lg shadow-sm p-6 h-fit sm:sticky sm:top-24`}
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-blue-900">Course Progress</h3>
              <span className="text-sm font-semibold text-blue-600">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <p className="text-xs text-gray-600 mt-2">
              {completedModules.length} of {courseData.modules.length} modules completed
            </p>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {courseData.modules.map((module, index) => (
              <button
                key={module.id}
                onClick={() => {
                  setCurrentModule(index)
                  setSidebarOpen(false)
                }}
                className={`w-full text-left p-3 rounded-lg transition ${
                  index === currentModule
                    ? 'bg-blue-100 border-2 border-blue-500'
                    : 'hover:bg-blue-50 border-2 border-transparent'
                }`}
              >
                <div className="flex items-start gap-3">
                  {completedModules.includes(module.id) ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-blue-900 truncate">Module {index + 1}</p>
                    <p className="text-xs text-gray-600 truncate">{module.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {(module.type === 'quiz' || module.type === 'project') && (
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            module.type === 'quiz' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                          }`}
                        >
                          {module.type === 'quiz' ? '📝 Quiz' : '🚀 Project'}
                        </Badge>
                      )}
                      <span className="text-xs text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <Card className="glass-card-light shadow-lg mb-6">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="premium-button">
                      {courseData.modules[currentModule].type}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      Module {currentModule + 1} of {courseData.modules.length}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                    {courseData.modules[currentModule].title}
                  </h2>
                  <p className="text-blue-700 mt-2">{courseData.modules[currentModule].description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Video/Content Area */}
          <Card className="glass-card-light shadow-lg mb-6 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold">Module Content</p>
                <p className="text-sm opacity-75 mt-2">Video player will display here</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-blue-700 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{courseData.modules[currentModule].duration}</span>
                <span className="text-sm">Estimated completion time</span>
              </div>
              <p className="text-gray-700 mb-6">
                In this module, you will learn the fundamentals and best practices. Take your time to understand each concept
                before moving forward.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    Learning Tip
                  </h4>
                  <p className="text-sm text-blue-800">
                    Take notes while watching. This helps retain information and creates a quick reference guide.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    What You&apos;ll Learn
                  </h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Core concepts and terminology</li>
                    <li>• Practical implementation techniques</li>
                    <li>• Real-world applications</li>
                    <li>• Best practices and tips</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentModule(Math.max(0, currentModule - 1))}
              disabled={currentModule === 0}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {!completedModules.includes(courseData.modules[currentModule].id) ? (
              <Button
                onClick={() => handleModuleComplete(courseData.modules[currentModule].id)}
                className="premium-button flex-1"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Mark as Complete
              </Button>
            ) : (
              <Button variant="secondary" disabled className="flex-1">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Completed
              </Button>
            )}

            <Button
              onClick={() => setCurrentModule(Math.min(courseData.modules.length - 1, currentModule + 1))}
              disabled={currentModule === courseData.modules.length - 1}
              className="flex-1"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Completion Message */}
          {currentModule === courseData.modules.length - 1 && completedModules.length === courseData.modules.length && (
            <Card className="glass-card-light border-2 border-green-500 shadow-lg mt-6 bg-green-50">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">Course Completed! 🎉</h3>
                <p className="text-green-700 mb-4">Congratulations! You&apos;ve successfully completed this course.</p>
                <Button className="premium-button">
                  Download Certificate
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
