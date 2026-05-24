"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, ArrowLeft, Play, Clock, Users, Star, CheckCircle, Lock, Award } from "lucide-react"
import { SkillsShowcase } from "@/components/course/skills-showcase"
import { getDiplomaSkills } from "@/lib/diploma-course-skills"

interface Module {
  id: string
  title: string
  content: string
  duration?: string
}

interface Course {
  id: string
  title: string
  description: string
  level: string
  duration: string
  modules: Module[]
  students?: number
  rating?: number
}

export default function CoursePage({ params }: { params: { id: string } }) {
  const [currentModule, setCurrentModule] = useState<string | null>(null)
  const [showExercise, setShowExercise] = useState(false)
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [completedModules, setCompletedModules] = useState<string[]>([])
  const [userId, setUserId] = useState<string>("")
  const [enrollmentId, setEnrollmentId] = useState<string>("")

  useEffect(() => {
    // Get user ID from localStorage
    const storedUserId = localStorage.getItem("userId") || ""
    setUserId(storedUserId)

    // Fetch course data
    fetchCourse()
  }, [params.id])

  const fetchCourse = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(`/api/courses/${params.id}`)
      
      if (response.ok) {
        const data = await response.json()
        setCourse(data.course)
        setCompletedModules(data.completedModules || [])
        setEnrollmentId(data.enrollmentId || "")
        
        // Set first uncompleted module or first module as current
        const firstIncompleted = data.course?.modules?.find(
          (m: Module) => !data.completedModules?.includes(m.id)
        )
        setCurrentModule(firstIncompleted?.id || data.course?.modules?.[0]?.id)
      } else if (response.status === 404) {
        setError("Course not found")
      } else {
        setError("Failed to load course")
      }
    } catch (err) {
      console.error('[v0] Error fetching course:', err)
      setError("Error loading course")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <Card className="w-full max-w-md glass-card-light shadow-xl">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-gray-600">Loading course...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <Card className="w-full max-w-md glass-card-light shadow-xl">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-red-600 font-medium mb-4">{error || "Course not found"}</p>
            <Link href="/courses">
              <Button className="premium-button">Back to Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const completedCount = completedModules.length
  const totalModules = course.modules?.length || 0
  const progress = totalModules > 0 ? (completedCount / totalModules) * 100 : 0

  const currentModuleData = course.modules?.find((m) => m.id === currentModule)
  
  // Get skills for this diploma course
  const courseSkills = getDiplomaSkills(course.title)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-card fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/courses" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Courses</span>
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-blue-600">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                  alt="Edusanna Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold gradient-text">EDUSANNA</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Content */}
            <div className="lg:col-span-2">
              {/* Course Header */}
              <Card className="glass-card mb-8">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-blue-600">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jan%2022%2C%202026%2C%2012_21_21%20AM-WKqkdSRv1DtoghNmzkCDSdNQKXoMsG.png"
                            alt="Edusanna Logo"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      <div>
                        <CardTitle className="text-3xl gradient-text">{course.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-gray-600 mt-2">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {course.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {course.students.toLocaleString()} students
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                            {course.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">{course.description}</p>

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Course Progress</span>
                      <span className="text-sm text-gray-600">
                        {completedModules}/{course.modules.length} modules
                      </span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>
                </CardHeader>
              </Card>

              {/* Skills Showcase */}
              <SkillsShowcase skills={courseSkills} courseTitle={course.title} />

              {/* Module Content */}
              {!showExercise ? (
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="text-2xl gradient-text">
                        Module {currentModule}: {currentModuleData?.title}
                      </span>
                      {currentModuleData?.completed && <CheckCircle className="w-6 h-6 text-green-500 ml-2" />}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none mb-8">
                      <p className="text-gray-700 text-lg leading-relaxed">{currentModuleData?.content}</p>
                      <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        This module provides comprehensive insights and practical techniques that you can immediately
                        apply in your daily life. Through interactive examples and real-world scenarios, you'll develop
                        a deep understanding of the concepts presented.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Take your time to absorb the material, and don't hesitate to revisit sections as needed.
                        Learning is a journey, and mastery comes through practice and repetition.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentModule(Math.max(1, currentModule - 1))}
                        disabled={currentModule === 1}
                      >
                        Previous Module
                      </Button>
                      <Button className="premium-button" onClick={() => setShowExercise(true)}>
                        <Play className="w-4 h-4 mr-2" />
                        Start Exercise
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <ExerciseComponent
                  moduleId={currentModule}
                  onComplete={() => {
                    setShowExercise(false)
                    if (currentModule < course.modules.length) {
                      setCurrentModule(currentModule + 1)
                    }
                  }}
                  onBack={() => setShowExercise(false)}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="glass-card sticky top-24">
                <CardHeader>
                  <CardTitle className="gradient-text">Course Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.modules.map((module) => (
                      <div
                        key={module.id}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all ${
                          module.id === currentModule
                            ? "bg-purple-100 border-2 border-purple-300"
                            : module.completed
                              ? "bg-green-50 hover:bg-green-100"
                              : "bg-gray-50 hover:bg-gray-100"
                        }`}
                        onClick={() => {
                          if (module.id <= currentModule || module.completed) {
                            setCurrentModule(module.id)
                            setShowExercise(false)
                          }
                        }}
                      >
                        <div className="flex-shrink-0 mr-3">
                          {module.completed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : module.id <= currentModule ? (
                            <Play className="w-5 h-5 text-purple-500" />
                          ) : (
                            <Lock className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">Module {module.id}</div>
                          <div className="text-xs text-gray-600">{module.title}</div>
                        </div>
                      </div>
                    ))}

                    {/* Final Exam */}
                    <div className="flex items-center p-3 rounded-lg bg-yellow-50 border-2 border-yellow-200">
                      <Award className="w-5 h-5 text-yellow-600 mr-3" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-800">Final Exam</div>
                        <div className="text-xs text-gray-600">40 questions • 60 minutes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise Component
function ExerciseComponent({
  moduleId,
  onComplete,
  onBack,
}: {
  moduleId: number
  onComplete: () => void
  onBack: () => void
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const [showResults, setShowResults] = useState(false)

  // Mock questions
  const questions = [
    {
      question: "What is the primary physiological response to stress?",
      options: [
        "Increased heart rate and blood pressure",
        "Decreased metabolism",
        "Improved digestion",
        "Enhanced sleep quality",
      ],
      correct: 0,
    },
    {
      question: "Which technique is most effective for immediate stress relief?",
      options: ["Drinking caffeine", "Deep breathing exercises", "Intense physical exercise", "Watching television"],
      correct: 1,
    },
    // Add more questions...
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleSubmit = () => {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index]?.correct ? 1 : 0)
    }, 0)

    const percentage = Math.round((score / questions.length) * 100)
    setShowResults(true)

    if (percentage >= 70) {
      setTimeout(() => {
        onComplete()
      }, 3000)
    }
  }

  if (showResults) {
    const score = selectedAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index]?.correct ? 1 : 0)
    }, 0)
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <Card className="glass-card">
        <CardContent className="text-center py-12">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {passed ? (
              <CheckCircle className="w-12 h-12 text-green-500" />
            ) : (
              <div className="text-3xl font-bold text-red-500">{percentage}%</div>
            )}
          </div>

          {passed ? (
            <div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">Excellent Work!</h2>
              <p className="text-xl text-gray-600 mb-4">You scored {percentage}%</p>
              <p className="text-gray-600">Moving to next module...</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-2">You Can Do This, I Believe In You!!</h2>
              <p className="text-xl text-gray-600 mb-4">You scored {percentage}%</p>
              <p className="text-gray-600 mb-6">You need 70% to pass. Review the material and try again.</p>
              <Button onClick={onBack} className="premium-button">
                Review & Retry
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="gradient-text">Exercise {moduleId}</CardTitle>
          <div className="text-lg font-semibold text-purple-600">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
          </div>
        </div>
        <Progress value={(currentQuestion / questions.length) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className="text-lg text-gray-700 mb-6">{questions[currentQuestion]?.question}</p>

          <div className="space-y-3">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === index
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300 hover:bg-purple-25"
                }`}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <Button onClick={handleSubmit} className="premium-button">
              Submit Exercise
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="premium-button"
            >
              Next Question
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}




