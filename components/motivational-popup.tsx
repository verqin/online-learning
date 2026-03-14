"use client"

import { useEffect, useState } from "react"
import { X, Lightbulb } from "lucide-react"
import { getRandomMotivationalMessage, MotivationalMessage } from "@/lib/motivational-messages"

export function MotivationalPopup() {
  const [message, setMessage] = useState<MotivationalMessage | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup randomly every 5-15 minutes
    const showPopup = () => {
      setMessage(getRandomMotivationalMessage())
      setIsVisible(true)

      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 8000)

      return () => clearTimeout(timer)
    }

    const interval = setInterval(showPopup, Math.random() * 600000 + 300000) // 5-15 minutes

    return () => clearInterval(interval)
  }, [])

  if (!isVisible || !message) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto animate-in fade-in slide-in-from-bottom-4 max-w-sm w-full">
        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 rounded-lg shadow-2xl p-6 space-y-4">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-center text-lg font-bold text-gray-900">
            {message.title}
          </h3>

          {/* Message */}
          <p className="text-center text-sm text-gray-700 leading-relaxed">
            {message.message}
          </p>

          {/* Action Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded font-semibold text-sm transition"
          >
            Keep Going
          </button>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500">
            Edusanna - Elevate Your Mind
          </p>
        </div>
      </div>
    </div>
  )
}
