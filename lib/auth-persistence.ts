// Auth Persistence Utilities
// Handles user session management and persistence across page reloads

export interface UserSession {
  isLoggedIn: boolean
  isAdmin: boolean
  email: string
  userName: string
  joinDate: string
  userPhone?: string
  userCountry?: string
  userCity?: string
  lastLoginTime: number
}

const SESSION_KEY = 'edusanna_user_session'
const SESSION_TIMEOUT = 30 * 24 * 60 * 60 * 1000 // 30 days

/**
 * Save user session to localStorage
 */
export function saveSession(session: Partial<UserSession>) {
  try {
    const existingSession = getSession()
    const newSession: UserSession = {
      ...existingSession,
      ...session,
      lastLoginTime: Date.now(),
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(newSession))
    return newSession
  } catch (error) {
    console.error('Failed to save session:', error)
    return null
  }
}

/**
 * Get user session from localStorage
 */
export function getSession(): UserSession | null {
  try {
    const stored = localStorage.getItem(SESSION_KEY)
    if (!stored) return null

    const session = JSON.parse(stored) as UserSession

    // Check if session has expired
    if (Date.now() - session.lastLoginTime > SESSION_TIMEOUT) {
      clearSession()
      return null
    }

    return session
  } catch (error) {
    console.error('Failed to retrieve session:', error)
    return null
  }
}

/**
 * Check if user is logged in
 */
export function isUserLoggedIn(): boolean {
  const session = getSession()
  return session?.isLoggedIn === true && !session.isAdmin
}

/**
 * Check if user is admin
 */
export function isAdminLoggedIn(): boolean {
  const session = getSession()
  return session?.isAdmin === true
}

/**
 * Clear user session
 */
export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('isAdmin')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    localStorage.removeItem('joinDate')
    localStorage.removeItem('adminEmail')
  } catch (error) {
    console.error('Failed to clear session:', error)
  }
}

/**
 * Legacy: Convert old localStorage format to new session format
 */
export function migrateOldSession() {
  try {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const isAdmin = localStorage.getItem('isAdmin') === 'true'
    const email = localStorage.getItem('userEmail') || localStorage.getItem('adminEmail') || ''
    const userName = localStorage.getItem('userName') || 'User'
    const joinDate = localStorage.getItem('joinDate') || new Date().toISOString().split('T')[0]

    if (isLoggedIn || isAdmin) {
      saveSession({
        isLoggedIn: isLoggedIn && !isAdmin,
        isAdmin,
        email,
        userName,
        joinDate,
      })
      return true
    }
    return false
  } catch (error) {
    console.error('Failed to migrate old session:', error)
    return false
  }
}

/**
 * Setup periodic session refresh
 * Prevents session timeout during active usage
 */
export function setupSessionRefresh() {
  const interval = setInterval(() => {
    const session = getSession()
    if (session) {
      saveSession({ lastLoginTime: Date.now() })
    } else {
      clearInterval(interval)
    }
  }, 5 * 60 * 1000) // Refresh every 5 minutes

  return () => clearInterval(interval)
}
