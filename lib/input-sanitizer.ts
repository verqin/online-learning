// Input Sanitization and Validation
// Prevents SQL injection, XSS, and other security vulnerabilities

/**
 * Sanitize string input by removing dangerous characters
 * This is a first line of defense - always use parameterized queries on the backend
 */
export function sanitizeString(input: string | null | undefined): string {
  if (!input) return ""

  // Remove any null bytes
  let sanitized = input.replace(/\0/g, "")

  // Escape special characters for SQL (but this should only be used with parameterized queries)
  // These are for display purposes only - NEVER build SQL strings with these values
  sanitized = sanitized
    .replace(/'/g, "''") // Escape single quotes
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/"/g, '\\"') // Escape double quotes

  // Trim whitespace
  sanitized = sanitized.trim()

  return sanitized
}

/**
 * Sanitize email input
 * Validates and normalizes email addresses
 */
export function sanitizeEmail(email: string | null | undefined): string {
  if (!email) return ""

  let sanitized = email.toLowerCase().trim()

  // Remove any spaces
  sanitized = sanitized.replace(/\s/g, "")

  // Basic validation - should match email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(sanitized)) {
    throw new Error("Invalid email format")
  }

  return sanitized
}

/**
 * Sanitize name input (full name, school name, etc)
 */
export function sanitizeName(name: string | null | undefined): string {
  if (!name) return ""

  let sanitized = name.trim()

  // Remove SQL injection patterns
  const injectionPatterns = [
    /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|EXEC|EXECUTE)\b)/gi,
    /(-{2}|\/\*|\*\/|;|\||&&)/g,
    /(--|#|\/\/)/g,
  ]

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "")
  })

  // Allow only alphanumeric, spaces, hyphens, and apostrophes (for names like O'Connor, Mary-Jane)
  sanitized = sanitized.replace(/[^a-zA-Z0-9\s\-']/g, "")

  return sanitized.trim()
}

/**
 * Sanitize phone number
 */
export function sanitizePhoneNumber(phone: string | null | undefined): string {
  if (!phone) return ""

  let sanitized = phone.trim()

  // Remove all non-numeric characters except + (for international format)
  sanitized = sanitized.replace(/[^\d+]/g, "")

  // Validate basic phone format
  if (!/^\+?[1-9]\d{1,14}$/.test(sanitized)) {
    throw new Error("Invalid phone number format")
  }

  return sanitized
}

/**
 * Sanitize country/city input
 */
export function sanitizeLocation(location: string | null | undefined): string {
  if (!location) return ""

  let sanitized = location.trim()

  // Remove SQL injection patterns
  const injectionPatterns = [
    /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|EXEC|EXECUTE)\b)/gi,
    /(-{2}|\/\*|\*\/|;|\||&&)/g,
  ]

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "")
  })

  // Allow alphanumeric, spaces, hyphens, commas, and periods
  sanitized = sanitized.replace(/[^a-zA-Z0-9\s\-,.]/g, "")

  return sanitized.trim()
}

/**
 * Sanitize password
 * Password should be validated for strength but stored hashed
 */
export function validatePassword(password: string | null | undefined): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (!password) {
    errors.push("Password is required")
    return { isValid: false, errors }
  }

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long")
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter")
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter")
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number")
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("Password must contain at least one special character")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Sanitize URL input
 * Ensures only safe URLs are processed
 */
export function sanitizeURL(url: string | null | undefined): string {
  if (!url) return ""

  try {
    const urlObj = new URL(url)

    // Only allow http and https protocols
    if (!["http:", "https:"].includes(urlObj.protocol)) {
      throw new Error("Invalid URL protocol")
    }

    return urlObj.toString()
  } catch {
    throw new Error("Invalid URL format")
  }
}

/**
 * Escape HTML special characters to prevent XSS
 */
export function escapeHTML(text: string | null | undefined): string {
  if (!text) return ""

  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }

  return text.replace(/[&<>"']/g, (char) => map[char])
}

/**
 * Validate and sanitize search input
 */
export function sanitizeSearchInput(search: string | null | undefined): string {
  if (!search) return ""

  let sanitized = search.trim()

  // Remove SQL injection patterns
  const injectionPatterns = [
    /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|EXEC|EXECUTE)\b)/gi,
    /(-{2}|\/\*|\*\/|;|\||&&)/g,
  ]

  injectionPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "")
  })

  // Limit length to prevent DOS
  sanitized = sanitized.substring(0, 100)

  return sanitized.trim()
}

/**
 * Validate form data object
 */
export function sanitizeFormData(formData: Record<string, any>) {
  const sanitized: Record<string, any> = {}

  Object.keys(formData).forEach((key) => {
    const value = formData[key]

    if (typeof value === "string") {
      if (
        key.toLowerCase().includes("email") ||
        key === "email"
      ) {
        sanitized[key] = sanitizeEmail(value)
      } else if (
        key.toLowerCase().includes("name") ||
        key === "fullName" ||
        key === "userName"
      ) {
        sanitized[key] = sanitizeName(value)
      } else if (
        key.toLowerCase().includes("phone") ||
        key === "mobileNumber"
      ) {
        sanitized[key] = sanitizePhoneNumber(value)
      } else if (
        key.toLowerCase().includes("country") ||
        key.toLowerCase().includes("city")
      ) {
        sanitized[key] = sanitizeLocation(value)
      } else if (key === "password" || key === "confirmPassword") {
        sanitized[key] = value // Don't sanitize passwords, only validate strength
      } else {
        sanitized[key] = sanitizeString(value)
      }
    } else {
      sanitized[key] = value
    }
  })

  return sanitized
}
