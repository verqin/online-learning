/**
 * WhatsApp 2FA via CallMeBot API
 * Sends verification codes to admin's WhatsApp via CallMeBot
 * Requires CALLMEBOT_PHONE and CALLMEBOT_APIKEY env vars
 */

// Generate random 6-digit code
export function generateTwoFACode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Send 2FA code via WhatsApp using CallMeBot
export async function sendTwoFAWhatsApp(phoneNumber: string, code: string): Promise<boolean> {
  try {
    // Get CallMeBot credentials from environment
    const callmebotPhone = process.env.CALLMEBOT_PHONE
    const callmebotApiKey = process.env.CALLMEBOT_APIKEY

    if (!callmebotPhone || !callmebotApiKey) {
      console.error('[v0] CallMeBot credentials not configured (CALLMEBOT_PHONE or CALLMEBOT_APIKEY missing)')
      return false
    }

    // CallMeBot API endpoint
    // Phone format: country code + number (e.g., 263712345678 for Zimbabwe)
    const message = `EDUSANNA ONLINE LEARNING\n\nAdmin Verification Code\n\nYour verification code is: ${code}\n\nCode expires in 10 minutes.\n\nIf you did not request this, ignore this message.`

    const encodedMessage = encodeURIComponent(message)
    const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${callmebotPhone}&text=${encodedMessage}&apikey=${callmebotApiKey}`

    const response = await fetch(callmebotUrl, {
      method: 'GET',
    })

    if (response.ok) {
      console.log('[v0] 2FA code sent via CallMeBot WhatsApp')
      return true
    } else {
      console.error('[v0] CallMeBot WhatsApp send failed:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('[v0] Error sending 2FA via CallMeBot:', error)
    return false
  }
}

// Store 2FA codes temporarily (in production, use Redis or database)
const storedCodes = new Map<string, { code: string; expiresAt: number }>()

export function store2FACode(identifier: string, code: string): void {
  const expiresAt = Date.now() + 10 * 60 * 1000 // 10 minutes
  storedCodes.set(identifier, { code, expiresAt })
}

export function verify2FACode(identifier: string, inputCode: string): boolean {
  const stored = storedCodes.get(identifier)

  if (!stored) {
    return false
  }

  // Check if code has expired
  if (Date.now() > stored.expiresAt) {
    storedCodes.delete(identifier)
    return false
  }

  // Check if code matches
  if (stored.code === inputCode) {
    storedCodes.delete(identifier) // Code used, remove it
    return true
  }

  return false
}

export function get2FACodeExpiry(identifier: string): number | null {
  const stored = storedCodes.get(identifier)
  if (!stored) return null
  return Math.max(0, stored.expiresAt - Date.now())
}
