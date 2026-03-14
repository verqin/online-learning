'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lock, LogIn, UserPlus, ArrowRight } from 'lucide-react'

interface AuthGuardPromptProps {
  title?: string
  description?: string
  isOpen: boolean
  onClose?: () => void
}

export function AuthGuardPrompt({
  title = 'Unlock Full Access',
  description = 'Sign up or log in to access all courses and track your progress.',
  isOpen,
  onClose,
}: AuthGuardPromptProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4 p-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">{title}</h2>
        <p className="text-center text-gray-600 mb-8">{description}</p>

        <div className="space-y-3">
          <Link href="/login" className="block">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
              <LogIn className="w-5 h-5 mr-2" />
              Sign In
            </Button>
          </Link>

          <Link href="/signup" className="block">
            <Button className="w-full premium-button" size="lg">
              <UserPlus className="w-5 h-5 mr-2" />
              Create Account
            </Button>
          </Link>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Learn for free first. Pay only when you're ready for certification.
        </p>

        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </Card>
    </div>
  )
}
