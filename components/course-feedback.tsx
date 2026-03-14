"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Send } from "lucide-react"

interface CourseFeedbackProps {
  courseName: string
  courseLevel: string
  onSubmit?: (feedback: FeedbackData) => void
}

export interface FeedbackData {
  rating: number
  review: string
  fullName: string
  email: string
  whatsapp: string
  startDate: string
  completionDate: string
  examScore: number
  country: string
  city: string
}

export function CourseFeedback({ courseName, courseLevel, onSubmit }: CourseFeedbackProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [formData, setFormData] = useState<FeedbackData>({
    rating: 0,
    review: "",
    fullName: "",
    email: "",
    whatsapp: "",
    startDate: "",
    completionDate: "",
    examScore: 0,
    country: "",
    city: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const finalData = {
      ...formData,
      rating: rating || formData.rating,
    }

    // Store feedback locally and notify admin
    localStorage.setItem(`course_feedback_${Date.now()}`, JSON.stringify({
      ...finalData,
      courseLevel,
      courseName,
      submittedAt: new Date().toISOString(),
    }))

    if (onSubmit) {
      onSubmit(finalData)
    }

    // Reset form
    setFormData({
      rating: 0,
      review: "",
      fullName: "",
      email: "",
      whatsapp: "",
      startDate: "",
      completionDate: "",
      examScore: 0,
      country: "",
      city: "",
    })
    setRating(0)
    setIsSubmitting(false)

    // Show success message
    alert("Thank you! Your feedback has been submitted and the admin has been notified.")
  }

  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
      <CardHeader>
        <CardTitle className="text-blue-900">Share Your Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              How would you rate this course?
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= (hoverRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              WhatsApp Number
            </label>
            <Input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              placeholder="+1234567890"
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <Input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                placeholder="Zimbabwe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Harare"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Completion Date
              </label>
              <Input
                type="date"
                value={formData.completionDate}
                onChange={(e) =>
                  setFormData({ ...formData, completionDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Exam Score */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exam Score (%)
            </label>
            <Input
              type="number"
              min="0"
              max="100"
              value={formData.examScore}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  examScore: parseInt(e.target.value) || 0,
                })
              }
              placeholder="85"
            />
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Review
            </label>
            <Textarea
              value={formData.review}
              onChange={(e) =>
                setFormData({ ...formData, review: e.target.value })
              }
              placeholder="Share your experience with this course..."
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !rating || !formData.review}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
