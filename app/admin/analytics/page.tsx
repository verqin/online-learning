'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProtectedRoute } from '@/components/protected-route'
import {
  Users,
  TrendingUp,
  DollarSign,
  Award,
  BarChart3,
  PieChart,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react'

export default function AdminAnalytics() {
  const [isLoading, setIsLoading] = useState(true)
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalPayments: 0,
    totalRevenue: 0,
    totalCertificates: 0,
    conversionRate: 0,
    averageSessionTime: 0,
    topCourses: [],
    usersByCountry: {},
    errorRate: 0,
    avgLatency: 0,
  })

  useEffect(() => {
    // Load analytics data
    const loadAnalytics = async () => {
      try {
        // For now, using mock data. Replace with real API call
        setAnalytics({
          totalUsers: 0,
          totalPayments: 0,
          totalRevenue: 0,
          totalCertificates: 0,
          conversionRate: 0,
          averageSessionTime: 0,
          topCourses: [],
          usersByCountry: {},
          errorRate: 0,
          avgLatency: 0,
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadAnalytics()
  }, [])

  const metricCards = [
    {
      label: 'Total Users',
      value: analytics.totalUsers.toString(),
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      trend: '+12%',
    },
    {
      label: 'Total Payments',
      value: analytics.totalPayments.toString(),
      icon: DollarSign,
      color: 'bg-green-100 text-green-600',
      trend: '+8%',
    },
    {
      label: 'Total Revenue',
      value: `$${analytics.totalRevenue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'bg-purple-100 text-purple-600',
      trend: '+15%',
    },
    {
      label: 'Certificates Issued',
      value: analytics.totalCertificates.toString(),
      icon: Award,
      color: 'bg-orange-100 text-orange-600',
      trend: '+5%',
    },
  ]

  const performanceMetrics = [
    {
      label: 'Conversion Rate',
      value: `${analytics.conversionRate.toFixed(1)}%`,
      target: '5%',
    },
    {
      label: 'Error Rate',
      value: `${analytics.errorRate.toFixed(2)}%`,
      target: '<0.5%',
    },
    {
      label: 'Avg Latency',
      value: `${analytics.avgLatency.toFixed(0)}ms`,
      target: '<200ms',
    },
    {
      label: 'Avg Session Time',
      value: `${Math.round(analytics.averageSessionTime / 60)}m`,
      target: '>10m',
    },
  ]

  return (
    <ProtectedRoute requireAdmin>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link href="/admin/dashboard">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold gradient-text mb-2">Analytics & Performance</h1>
                <p className="text-gray-600">Monitor system performance, user metrics, and financial data</p>
              </div>
              <Button className="premium-button">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading analytics...</p>
            </div>
          ) : (
            <>
              {/* Main Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metricCards.map((card, index) => {
                  const Icon = card.icon
                  return (
                    <Card key={index} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">{card.label}</p>
                            <p className="text-3xl font-bold text-blue-900">{card.value}</p>
                            <p className="text-xs text-green-600 mt-2">{card.trend} from last month</p>
                          </div>
                          <div className={`${card.color} p-3 rounded-lg`}>
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="gradient-text flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      System Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {performanceMetrics.map((metric, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-gray-700">{metric.label}</span>
                          <span className="text-sm font-bold text-blue-600">{metric.value}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>Current</span>
                          <span>Target: {metric.target}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="gradient-text flex items-center gap-2">
                      <PieChart className="w-5 h-5" />
                      Financial Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Monthly Revenue</span>
                        <span className="text-lg font-bold text-green-600">${analytics.totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Avg Transaction</span>
                        <span className="text-lg font-bold text-blue-600">
                          ${analytics.totalPayments > 0 ? (analytics.totalRevenue / analytics.totalPayments).toFixed(2) : '0.00'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Pending Payments</span>
                        <span className="text-lg font-bold text-orange-600">0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Failed Payments</span>
                        <span className="text-lg font-bold text-red-600">0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="gradient-text">Top Performing Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {analytics.topCourses.length > 0 ? (
                      <div className="space-y-3">
                        {analytics.topCourses.slice(0, 5).map((course: any, index) => (
                          <div key={index} className="flex justify-between items-center pb-3 border-b last:border-b-0">
                            <span className="text-sm text-gray-700">{course.name}</span>
                            <span className="text-sm font-bold text-blue-600">{course.enrollments} enrollments</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No course data available yet</p>
                    )}
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="gradient-text">Users by Country</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Object.keys(analytics.usersByCountry).length > 0 ? (
                      <div className="space-y-3">
                        {Object.entries(analytics.usersByCountry)
                          .slice(0, 5)
                          .map(([country, count]: any, index) => (
                            <div key={index} className="flex justify-between items-center pb-3 border-b last:border-b-0">
                              <span className="text-sm text-gray-700">{country}</span>
                              <span className="text-sm font-bold text-blue-600">{count} users</span>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">No geographic data available yet</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
