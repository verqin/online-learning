'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, XCircle, Volume2, VolumeX } from 'lucide-react'
import { getSoundEffects } from '@/lib/sound-effects'
import type { QuizQuestion } from '@/lib/types/quiz'

interface QuizModuleProps {
  title: string
  questions: QuizQuestion[]
  onComplete: (score: number, answers: number[]) => void
}

export function QuizModule({ title, questions, onComplete }: QuizModuleProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [answers, setAnswers] = useState<number[]>([])
  const [quizComplete, setQuizComplete] = useState(false)

  const soundEffects = getSoundEffects()
  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (optionIndex: number) => {
    if (answered) return

    setSelectedAnswer(optionIndex)
    setAnswered(true)

    const correct = optionIndex === question.correctAnswer
    setIsCorrect(correct)

    // Play sound effect
    if (soundEnabled) {
      if (correct) {
        soundEffects.playCorrectSound()
      } else {
        soundEffects.playWrongSound()
      }
    }

    // Update score
    if (correct) {
      setScore(score + 1)
    }

    // Store answer
    setAnswers([...answers, optionIndex])
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      // Quiz complete
      if (soundEnabled) {
        soundEffects.playSuccessSound()
      }
      setQuizComplete(true)
      onComplete(score, answers)
    }
  }

  if (quizComplete) {
    const percentageScore = (score / questions.length) * 100
    const passed = percentageScore >= 70

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className={`${passed ? 'bg-green-50' : 'bg-orange-50'}`}>
          <CardTitle className={passed ? 'text-green-900' : 'text-orange-900'}>
            {passed ? 'Quiz Complete!' : 'Quiz Finished'}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="text-center space-y-6">
            {passed ? (
              <CheckCircle2 className="w-16 h-16 mx-auto text-green-600" />
            ) : (
              <XCircle className="w-16 h-16 mx-auto text-orange-600" />
            )}

            <div>
              <h3 className="text-3xl font-bold">
                {score}/{questions.length}
              </h3>
              <p className="text-gray-600">
                {percentageScore.toFixed(0)}% Correct
              </p>
            </div>

            <Badge variant={passed ? 'default' : 'secondary'}>
              {passed ? 'Passed' : 'Review Required'}
            </Badge>

            <p className="text-gray-700">
              {passed
                ? 'Congratulations! You have completed this quiz successfully.'
                : 'Please review the material and try again to score higher.'}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <CardTitle>{title}</CardTitle>
              <p className="text-sm text-gray-600 mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="gap-2"
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Sound On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">Sound Off</span>
                </>
              )}
            </Button>
          </div>
          <Progress value={progress} className="mt-4" />
        </CardHeader>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{question.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={answered}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                selectedAnswer === index
                  ? isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : answered && index === question.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-blue-400'
              } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {selectedAnswer === index && (
                  <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
                {answered && index === question.correctAnswer && selectedAnswer !== index && (
                  <span className="text-green-600">✓</span>
                )}
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Explanation */}
      {answered && (
        <Card className={isCorrect ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'}>
          <CardContent className="pt-6">
            <p className="font-semibold mb-2">
              {isCorrect ? 'Great job!' : 'Not quite right.'}
            </p>
            <p className="text-gray-700">{question.explanation}</p>
          </CardContent>
        </Card>
      )}

      {/* Action Button */}
      {answered && (
        <Button onClick={handleNextQuestion} className="w-full" size="lg">
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
        </Button>
      )}

      {/* Score Display */}
      {answered && (
        <div className="text-center text-sm text-gray-600">
          Current Score: <span className="font-bold">{score}/{currentQuestion + 1}</span>
        </div>
      )}
    </div>
  )
}
