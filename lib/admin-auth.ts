/**
 * Admin Authentication Utility
 * Safe checks without redirect loops
 */

export interface AdminAuthStatus {
  isAdmin: boolean
  email: string | null
  sessionValid: boolean
}

/**
 * Check admin auth status safely (does NOT redirect)
 * Use this to avoid redirect loops on page changes
 */
export function checkAdminAuth(): AdminAuthStatus {
  if (typeof window === 'undefined') {
    return {
      isAdmin: false,
      email: null,
      sessionValid: false,
    }
  }

  const isAdmin = localStorage.getItem('isAdmin') === 'true'
  const adminEmail = localStorage.getItem('adminEmail')

  return {
    isAdmin: isAdmin && !!adminEmail,
    email: adminEmail,
    sessionValid: isAdmin && !!adminEmail,
  }
}

/**
 * Set admin session (call after successful login)
 */
export function setAdminSession(email: string): void {
  if (typeof window === 'undefined') return

  localStorage.setItem('isAdmin', 'true')
  localStorage.setItem('adminEmail', email)
}

/**
 * Clear admin session (call on logout)
 */
export function clearAdminSession(): void {
  if (typeof window === 'undefined') return

  localStorage.setItem('isAdmin', 'false')
  localStorage.removeItem('adminEmail')
}

/**
 * Get admin email safely
 */
export function getAdminEmail(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('adminEmail')
}
