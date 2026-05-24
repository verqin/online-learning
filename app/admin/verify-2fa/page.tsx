'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Shield, Clock, MessageCircle } from 'lucide-react'

export default function Verify2FAPage() {
  const router = useRouter()
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState(18 * 60) // 18 minutes - extended timeout
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [sentMessage, setSentMessage] = useState('')

  useEffect(() => {
    const email = localStorage.getItem('adminEmail') || ''
    setAdminEmail(email)

    if (!email) {
      router.push('/login')
      return
    }

    // Timer countdown
    if (timeLeft === 0) {
      setError('Code has expired. Please request a new one.')
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, router])

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!code || code.length !== 6) {
      setError('Please enter a valid 6-digit code')
      setIsLoading(false)
      return
    }

    try {
      // Verify code via API
      const response = await fetch('/api/auth/verify-2fa-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: adminEmail,
          code 
        }),
      })

      const data = await response.json()
      if (response.ok && data.success) {
        setSuccess(true)
        localStorage.setItem('isAdmin', 'true')
        localStorage.removeItem('adminEmail') // Clear for next login
        
        // Redirect after brief success message
        setTimeout(() => {
          router.push('/admin/dashboard')
        }, 1500)
      } else {
        setError(data.error || 'Invalid verification code. Please try again.')
        setCode('')
      }
    } catch (err) {
      console.error('[v0] Verification error:', err)
      setError('Verification failed. Please check your code and try again.')
      setCode('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setTimeLeft(18 * 60) // Reset to 18 minutes
    setCode('')
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/send-2fa-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminEmail }),
      })

      const data = await response.json()
      if (response.ok) {
        setSentMessage('New code sent to your WhatsApp. It will arrive within 1-3 minutes.')
        setTimeout(() => setSentMessage(''), 5000)
      } else {
        setError(data.error || 'Could not resend code. Please try again.')
      }
    } catch (err) {
      console.error('[v0] Resend error:', err)
      setError('Code resend failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <Card className="w-full max-w-md glass-card-light shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Verified!</h2>
            <p className="text-green-700">Redirecting to admin dashboard...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="w-full max-w-md">
        <Link href="/login" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        <Card className="glass-card-light shadow-xl border-blue-100">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl gradient-text">Two-Factor Authentication</CardTitle>
            <p className="text-sm text-gray-600 mt-3 flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Code sent via: <span className="font-semibold text-blue-600">EDUSANNA ONLINE LEARNING WhatsApp</span>
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <Label htmlFor="code" className="text-blue-900 font-semibold mb-2 block">
                  Enter 6-Digit Code
                </Label>
                <Input
                  id="code"
                  type="text"
                  maxLength={6}
                  placeholder="000000"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="text-center text-3xl tracking-widest border-blue-200 focus:border-blue-600 font-mono h-14"
                  disabled={isLoading || timeLeft === 0}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              {sentMessage && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">{sentMessage}</p>
                </div>
              )}

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700 font-medium">
                  Code expires in {minutes}:{seconds.toString().padStart(2, '0')}
                </span>
              </div>

              <Button
                type="submit"
                disabled={isLoading || code.length !== 6 || timeLeft === 0}
                className="w-full premium-button h-12 text-base font-semibold"
              >
                {isLoading ? 'Verifying...' : 'Verify Code'}
              </Button>
            </form>

            <div className="mt-6 text-center border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600 mb-3">Didn&apos;t receive the code?</p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResendCode}
                disabled={isLoading}
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                Resend Code
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              For security, never share your code. EDUSANNA staff will never request it.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
