"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  CheckCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
} from "lucide-react"

interface Module {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  content: string
  quiz?: Quiz[]
}

interface Quiz {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

interface CourseLearningModuleProps {
  modules: Module[]
  courseLevel: string
  courseName: string
  onModuleComplete: (moduleId: string) => void
  onCourseComplete: () => void
}

export function CourseLearningModule({
  modules,
  courseLevel,
  courseName,
  onModuleComplete,
  onCourseComplete,
}: CourseLearningModuleProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(
    modules[0]?.id || null
  )
  const [completedModules, setCompletedModules] = useState<string[]>([])
  const [currentQuizAnswers, setCurrentQuizAnswers] = useState<{
    [key: string]: number
  }>({})

  const completionPercentage = Math.round(
    (completedModules.length / modules.length) * 100
  )

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      const newCompleted = [...completedModules, moduleId]
      setCompletedModules(newCompleted)
      onModuleComplete(moduleId)

      // Check if all modules completed
      if (newCompleted.length === modules.length) {
        setTimeout(() => {
          onCourseComplete()
        }, 1000)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-white">
        <CardContent className="pt-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Course Progress</h3>
              <span className="text-sm font-bold text-blue-600">
                {completionPercentage}%
              </span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
            <p className="text-sm text-gray-600">
              {completedModules.length} of {modules.length} modules completed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Modules List */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Course Modules</h2>
        {modules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id)
          const isLocked = index > 0 && !completedModules.includes(modules[index - 1].id)
          const isExpanded = expandedModule === module.id

          return (
            <Card
              key={module.id}
              className={`border-2 transition-all ${
                isCompleted
                  ? "border-green-300 bg-green-50"
                  : isLocked
                  ? "border-gray-200 bg-gray-50"
                  : expandedModule === module.id
                  ? "border-blue-400 bg-white"
                  : "border-gray-200 hover:border-blue-300 bg-white"
              }`}
            >
              <button
                onClick={() =>
                  !isLocked &&
                  setExpandedModule(isExpanded ? null : module.id)
                }
                className="w-full"
                disabled={isLocked}
              >
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : isLocked ? (
                        <Lock className="w-6 h-6 text-gray-400" />
                      ) : (
                        <Play className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-grow text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          Module {index + 1}: {module.title}
                        </h3>
                        {isCompleted && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {!isLocked &&
                        (isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        ))}
                    </div>
                  </div>
                </CardHeader>
              </button>

              {isExpanded && !isLocked && (
                <CardContent className="space-y-4 border-t border-gray-200">
                  {/* Module Content */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Module Content
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed">
                      {module.content}
                    </div>
                  </div>

                  {/* Quiz Section */}
                  {module.quiz && module.quiz.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <HelpCircle className="w-4 h-4" />
                        Quick Quiz
                      </h4>
                      <div className="space-y-4">
                        {module.quiz.map((question, qIdx) => (
                          <div
                            key={question.id}
                            className="bg-blue-50 p-4 rounded-lg"
                          >
                            <p className="font-medium text-gray-900 mb-3">
                              Q{qIdx + 1}: {question.question}
                            </p>
                            <div className="space-y-2">
                              {question.options.map((option, optIdx) => (
                                <label
                                  key={optIdx}
                                  className="flex items-center gap-3 p-2 rounded hover:bg-blue-100 cursor-pointer"
                                >
                                  <input
                                    type="radio"
                                    name={`quiz_${module.id}_${question.id}`}
                                    value={optIdx}
                                    checked={
                                      currentQuizAnswers[question.id] ===
                                      optIdx
                                    }
                                    onChange={(e) =>
                                      setCurrentQuizAnswers({
                                        ...currentQuizAnswers,
                                        [question.id]: parseInt(
                                          e.target.value
                                        ),
                                      })
                                    }
                                    className="w-4 h-4"
                                  />
                                  <span className="text-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Complete Module Button */}
                  <Button
                    onClick={() => handleModuleComplete(module.id)}
                    disabled={isCompleted}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    {isCompleted ? "Module Completed" : "Mark as Complete"}
                  </Button>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
