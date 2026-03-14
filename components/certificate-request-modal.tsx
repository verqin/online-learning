'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, CheckCircle, Loader2 } from 'lucide-react'

interface CertificateRequestModalProps {
  isOpen: boolean
  courseName: string
  level: 'certificate' | 'diploma'
  score: number
  price: number
  onClose: () => void
  onConfirm: (level: 'certificate' | 'diploma') => Promise<void>
}

export function CertificateRequestModal({
  isOpen,
  courseName,
  level,
  score,
  price,
  onClose,
  onConfirm,
}: CertificateRequestModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  const isCertificate = level === 'certificate'
  const title = isCertificate ? 'Request Certificate' : 'Request Diploma'
  const description = isCertificate
    ? 'Get your completion certificate'
    : 'Earn your professional diploma'
  const icon = isCertificate ? GraduationCap : Award

  const handleConfirm = async () => {
    setIsLoading(true)
    setError('')

    try {
      await onConfirm(level)
      setSuccess(true)
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSuccess(false)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process request')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-10">
            <div className="flex flex-col items-center text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
              <h3 className="text-2xl font-bold">Request Submitted!</h3>
              <p className="text-gray-600">
                {isCertificate ? 'Your certificate' : 'Your diploma'} has been requested.
              </p>
              <p className="text-sm text-gray-500">
                You'll receive a WhatsApp notification when it's ready.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            {icon &&
              (() => {
                const IconComponent = icon
                return <IconComponent className="w-5 h-5 text-purple-600" />
              })()}
            <Badge className={isCertificate ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}>
              {level.toUpperCase()}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Course Info */}
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Course</p>
            <p className="font-semibold">{courseName}</p>
          </div>

          {/* Score */}
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Your Score</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-purple-600">{score}%</p>
              <p className="text-gray-600">out of 100</p>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="text-sm text-gray-600">{isCertificate ? 'Certificate' : 'Diploma'} Price</p>
            <p className="text-2xl font-bold">${price}</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1" disabled={isLoading}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                `Request ${isCertificate ? 'Certificate' : 'Diploma'}`
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
