'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requireAdmin?: boolean
}

export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      if (requireAdmin) {
        // Check for admin access
        const isAdmin = localStorage.getItem('isAdmin') === 'true'
        if (!isAdmin) {
          router.push('/login')
          return
        }
      } else {
        // Check for regular user login
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
        if (!isLoggedIn) {
          const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
          router.push(`/login?redirect=${currentPath}`)
          return
        }
      }
      
      setIsAuthorized(true)
      setIsChecking(false)
    }

    checkAuth()
  }, [requireAdmin, router])

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
