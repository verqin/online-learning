'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { checkAdminAuth, clearAdminSession } from '@/lib/admin-auth'
import { ArrowLeft, LogOut } from 'lucide-react'

export default function AdminAnalytics() {
  const router = useRouter()
  const [isPageReady, setIsPageReady] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authStatus = checkAdminAuth()
    if (!authStatus.isAdmin) {
      router.push("/login")
      return
    }
    setIsPageReady(true)
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    clearAdminSession()
    window.location.href = "/login"
  }

  if (!isPageReady) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="glass-card-light shadow-lg border-blue-100">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto mb-4"></div>
              <p className="text-blue-700 font-medium">Loading analytics...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-blue-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-medium">Back to Dashboard</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Analytics</h1>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">System Analytics</h2>
          <p className="text-gray-600">Monitor platform performance and user metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-600 text-sm mb-1">Total Users</p>
              <p className="text-3xl font-bold text-blue-900">0</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-600 text-sm mb-1">Total Payments</p>
              <p className="text-3xl font-bold text-green-600">0</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-600 text-sm mb-1">Revenue</p>
              <p className="text-3xl font-bold text-purple-600">$0</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <p className="text-gray-600 text-sm mb-1">Certificates</p>
              <p className="text-3xl font-bold text-orange-600">0</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
