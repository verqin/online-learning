/**
 * WhatsApp 2FA via CallMeBot API
 * Sends verification codes to admin's WhatsApp instead of email
 * No API key needed - uses CallMeBot's free service
 */

// Generate random 6-digit code
export function generateTwoFACode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Send 2FA code via WhatsApp using CallMeBot
export async function sendTwoFAWhatsApp(phoneNumber: string, code: string): Promise<boolean> {
  try {
    // CallMeBot API endpoint (no authentication needed)
    // Phone format: country code + number (e.g., 263782123456 for Zimbabwe)
    const message = `EDUSANNA Admin Login\n\nYour verification code is: ${code}\n\nCode expires in 10 minutes.\n\nIf you did not request this, ignore this message.`

    const encodedMessage = encodeURIComponent(message)
    const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=4372827`

    const response = await fetch(callmebotUrl, {
      method: 'GET',
    })

    if (response.ok) {
      return true
    } else {
      console.error('[v0] WhatsApp send failed:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('[v0] Error sending WhatsApp 2FA:', error)
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
