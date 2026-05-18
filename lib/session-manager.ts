// Session and Inactivity Management
// This module handles user session persistence and automatic logout on inactivity

const INACTIVITY_TIMEOUT = 30 * 60 * 1000 // 30 minutes
const SESSION_KEY = "edusanna_session"
const LAST_ACTIVITY_KEY = "edusanna_last_activity"
const INACTIVITY_WARNING_KEY = "edusanna_inactivity_warning"

export interface SessionData {
  userId: string
  email: string
  userName: string
  isAdmin: boolean
  signupType: string
  sessionToken: string
  expiresAt: number
}

/**
 * Initialize session management
 * Call this once when the app loads
 */
export function initializeSessionManager() {
  if (typeof window === "undefined") return

  // Check if session exists and is still valid
  const session = getSession()
  if (!session || isSessionExpired(session)) {
    clearSession()
    return
  }

  // Set up inactivity tracking
  setupInactivityTracking()
  updateLastActivity()
}

/**
 * Save user session to localStorage
 */
export function saveSession(sessionData: SessionData) {
  if (typeof window === "undefined") return

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000 // 24 hours
  const session: SessionData = {
    ...sessionData,
    expiresAt,
  }

  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString())

  // Also save to individual keys for backward compatibility
  localStorage.setItem("isLoggedIn", "true")
  localStorage.setItem("userEmail", sessionData.email)
  localStorage.setItem("userName", sessionData.userName)
  localStorage.setItem("isAdmin", sessionData.isAdmin.toString())
  localStorage.setItem("signupType", sessionData.signupType)
}

/**
 * Get current session from localStorage
 */
export function getSession(): SessionData | null {
  if (typeof window === "undefined") return null

  const sessionStr = localStorage.getItem(SESSION_KEY)
  if (!sessionStr) return null

  try {
    return JSON.parse(sessionStr) as SessionData
  } catch {
    return null
  }
}

/**
 * Check if session is expired
 */
export function isSessionExpired(session: SessionData): boolean {
  return Date.now() > session.expiresAt
}

/**
 * Update last activity timestamp
 */
export function updateLastActivity() {
  if (typeof window === "undefined") return
  localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString())
  localStorage.removeItem(INACTIVITY_WARNING_KEY)
}

/**
 * Check if user has been inactive
 */
export function isUserInactive(): boolean {
  if (typeof window === "undefined") return false

  const lastActivityStr = localStorage.getItem(LAST_ACTIVITY_KEY)
  if (!lastActivityStr) return false

  const lastActivity = parseInt(lastActivityStr, 10)
  const timeSinceLastActivity = Date.now() - lastActivity

  return timeSinceLastActivity > INACTIVITY_TIMEOUT
}

/**
 * Get remaining inactivity time in milliseconds
 */
export function getRemainingInactivityTime(): number {
  if (typeof window === "undefined") return 0

  const lastActivityStr = localStorage.getItem(LAST_ACTIVITY_KEY)
  if (!lastActivityStr) return 0

  const lastActivity = parseInt(lastActivityStr, 10)
  const timeSinceLastActivity = Date.now() - lastActivity
  const remaining = INACTIVITY_TIMEOUT - timeSinceLastActivity

  return Math.max(0, remaining)
}

/**
 * Clear session and log out user
 */
export function clearSession() {
  if (typeof window === "undefined") return

  localStorage.removeItem(SESSION_KEY)
  localStorage.removeItem(LAST_ACTIVITY_KEY)
  localStorage.removeItem(INACTIVITY_WARNING_KEY)
  localStorage.removeItem("isLoggedIn")
  localStorage.removeItem("userEmail")
  localStorage.removeItem("userName")
  localStorage.removeItem("isAdmin")
  localStorage.removeItem("signupType")
  localStorage.removeItem("userSchoolName")
  localStorage.removeItem("userPhone")
  localStorage.removeItem("userCountry")
  localStorage.removeItem("userCity")
  localStorage.removeItem("joinDate")
}

/**
 * Set up inactivity tracking listeners
 */
export function setupInactivityTracking() {
  if (typeof window === "undefined") return

  // Update activity on user interactions
  const events = ["mousedown", "keydown", "scroll", "touchstart", "click"]

  const handleActivity = () => {
    updateLastActivity()
  }

  events.forEach((event) => {
    document.addEventListener(event, handleActivity, true)
  })

  // Check for inactivity periodically (every 1 minute)
  const inactivityCheckInterval = setInterval(() => {
    if (isUserInactive()) {
      handleInactivityLogout()
      clearInterval(inactivityCheckInterval)
    } else {
      // Warn user before logout (5 minutes before timeout)
      const remainingTime = getRemainingInactivityTime()
      if (remainingTime < 5 * 60 * 1000 && remainingTime > 4 * 60 * 1000) {
        if (!localStorage.getItem(INACTIVITY_WARNING_KEY)) {
          localStorage.setItem(INACTIVITY_WARNING_KEY, "true")
          // Dispatch custom event for warning
          window.dispatchEvent(
            new CustomEvent("inactivityWarning", {
              detail: { remainingMinutes: Math.round(remainingTime / 60000) },
            })
          )
        }
      }
    }
  }, 60 * 1000) // Check every minute

  return () => {
    clearInterval(inactivityCheckInterval)
    events.forEach((event) => {
      document.removeEventListener(event, handleActivity, true)
    })
  }
}

/**
 * Handle automatic logout due to inactivity
 */
export function handleInactivityLogout() {
  clearSession()
  window.dispatchEvent(new CustomEvent("sessionExpired"))
  
  // Redirect to login page
  if (typeof window !== "undefined") {
    window.location.href = "/login?reason=inactivity"
  }
}

/**
 * Manually log out user
 */
export function logout() {
  clearSession()
  window.location.href = "/login"
}

/**
 * Get time until inactivity logout (formatted)
 */
export function getInactivityTimeRemaining(): string {
  const remaining = getRemainingInactivityTime()
  const minutes = Math.floor(remaining / 60000)
  const seconds = Math.floor((remaining % 60000) / 1000)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}
