'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Trash2, AlertTriangle, Check, Shield, Bell, Lock, User, LogOut } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SettingsPage() {
  const router = useRouter()
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [confirmEmail, setConfirmEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)

  // Get user email from localStorage
  useEffect(() => {
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

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen premium-bg pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold gradient-text">Settings</h1>
              <p className="text-gray-600 mt-1">Manage your account, security, and preferences</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="account" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto gap-2 bg-white/50 backdrop-blur p-2 rounded-xl">
            <TabsTrigger value="account" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
            <TabsTrigger value="danger" className="gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="hidden sm:inline">Danger</span>
            </TabsTrigger>
          </TabsList>

          {/* Account Tab */}
          <TabsContent value="account" className="space-y-6">
            <Card className="glass-card border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-600" />
                  Account Information
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">View your account details</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <Label className="text-blue-900 font-semibold">Email Address</Label>
                    <p className="text-gray-700 mt-3 text-lg font-mono">{userEmail || 'No email found'}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <Label className="text-green-900 font-semibold">Account Status</Label>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <p className="text-green-600 font-medium">Active</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="glass-card border-purple-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-600" />
                  Security Settings
                </CardTitle>
                <p className="text-sm text-gray-600 mt-2">Manage your security preferences</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-purple-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-purple-700 mt-1">Add extra security to your account</p>
                    </div>
                    <Button variant="outline" className="border-purple-300 text-purple-700">Coming Soon</Button>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-blue-900">Session Management</h4>
                      <p className="text-sm text-blue-700 mt-1">View and manage your active sessions</p>
                    </div>
                    <Button variant="outline" className="border-blue-300 text-blue-700">View Sessions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Danger Zone Tab */}
          <TabsContent value="danger" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Logout Card */}
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-800 mb-4">Sign out from your account on this device</p>
                  <Button onClick={handleLogout} className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>

              {/* Delete Account Card */}
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-900">
                    <Trash2 className="w-5 h-5" />
                    Delete Account
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800 mb-4 text-sm">Permanently delete your account and all data</p>
                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-100"
                    onClick={() => setShowDeleteConfirm(true)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
              <Card className="border-2 border-red-300 bg-red-50 relative">
                <CardHeader>
                  <CardTitle className="text-red-900">Confirm Account Deletion</CardTitle>
                </CardHeader>
                <CardContent>
                  {deleteSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-900 mb-2">Account Deleted Successfully</h3>
                      <p className="text-green-700 mb-4">Your account and all associated data have been permanently deleted.</p>
                      <p className="text-sm text-gray-600">Redirecting to homepage...</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-900 font-semibold">
                          This action cannot be undone. Once you delete your account:
                        </p>
                        <ul className="text-red-800 mt-3 space-y-1 text-sm ml-4 list-disc">
                          <li>All your courses and progress will be deleted</li>
                          <li>Your certificates cannot be recovered</li>
                          <li>All personal information will be permanently removed</li>
                        </ul>
                      </div>

                      <div>
                        <Label className="text-red-900 font-semibold">Enter your email to confirm:</Label>
                        <Input
                          type="email"
                          placeholder={userEmail}
                          value={confirmEmail}
                          onChange={(e) => setConfirmEmail(e.target.value)}
                          className="mt-3 border-red-300 focus:border-red-500"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => {
                            setShowDeleteConfirm(false)
                            setConfirmEmail('')
                          }}
                          variant="outline"
                          className="flex-1 border-gray-300"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleDeleteAccount}
                          disabled={confirmEmail !== userEmail || isDeleting}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                        >
                          {isDeleting ? 'Deleting...' : 'Permanently Delete'}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
