'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Trash2, AlertTriangle, Check } from 'lucide-react'

export default function SettingsPage() {
  const router = useRouter()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  // Get user email from localStorage
  React.useEffect(() => {
    const email = localStorage.getItem('userEmail') || ''
    setUserEmail(email)
  }, [])

  const handleDeleteAccount = async () => {
    if (confirmEmail !== userEmail) {
      alert('Email does not match. Account not deleted.')
      return
    }

    setIsDeleting(true)

    try {
      // Delete from localStorage
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('userName')
      localStorage.removeItem('joinDate')
      localStorage.removeItem('userPhone')
      localStorage.removeItem('userCountry')
      localStorage.removeItem('userCity')

      // Clear any course-related localStorage items
      const keys = Object.keys(localStorage)
      keys.forEach((key) => {
        if (key.includes('course-')) {
          localStorage.removeItem(key)
        }
      })

      setDeleteSuccess(true)

      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    } catch (error) {
      alert('Error deleting account. Please try again.')
      setIsDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-blue-900">Settings</h1>
          <p className="text-blue-700">Manage your account and preferences</p>
        </div>

        {/* Account Information */}
        <Card className="glass-card-light shadow-lg border-blue-100 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-blue-900 font-semibold">Email Address</Label>
              <p className="text-gray-700 mt-2">{userEmail || 'No email found'}</p>
            </div>
            <div>
              <Label className="text-blue-900 font-semibold">Account Status</Label>
              <p className="text-green-600 font-medium mt-2">Active</p>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertTriangle className="w-5 h-5" />
              Danger Zone
            </CardTitle>
            <p className="text-sm text-red-700 mt-2">Irreversible actions</p>
          </CardHeader>
          <CardContent>
            {!showDeleteConfirm ? (
              <div>
                <p className="text-red-800 mb-4">
                  Once you delete your account, there is no going back. Please be certain you want to delete your account.
                </p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            ) : deleteSuccess ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Account Deleted Successfully</h3>
                <p className="text-green-700 mb-4">Redirecting to homepage...</p>
              </div>
            ) : (
              <div className="space-y-4 p-4 bg-white rounded-lg border-2 border-red-200">
                <div>
                  <p className="text-red-900 font-semibold mb-2">
                    Please enter your email to confirm deletion:
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className="border-red-300"
                  />
                  <p className="text-xs text-red-600 mt-2">
                    This action cannot be undone. All your data will be permanently deleted.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      setShowDeleteConfirm(false)
                      setConfirmEmail('')
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleDeleteAccount}
                    disabled={confirmEmail !== userEmail || isDeleting}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  >
                    {isDeleting ? 'Deleting...' : 'Permanently Delete Account'}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
