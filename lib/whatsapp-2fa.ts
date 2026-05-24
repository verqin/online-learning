/**
 * WhatsApp 2FA via CallMeBot API with Database Persistence
 * Sends verification codes to admin's WhatsApp via CallMeBot
 * Stores codes in Supabase for persistence across server restarts
 * Extended timeout: 18 minutes (1080 seconds) to accommodate CallMeBot delays
 */

import { supabaseAdmin } from './supabase-client'

// Generate random 6-digit code
export function generateTwoFACode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Send 2FA code via WhatsApp using CallMeBot with retry logic
export async function sendTwoFAWhatsApp(phoneNumber: string, code: string): Promise<boolean> {
  const maxRetries = 3
  let retries = 0

  while (retries < maxRetries) {
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
      // Extended message mentioning 18-minute expiry for CallMeBot delays
      const message = `EDUSANNA ONLINE LEARNING\n\nAdmin Verification Code\n\nYour verification code is: ${code}\n\nCode expires in 18 minutes.\n\nIf you did not request this, ignore this message.`

      const encodedMessage = encodeURIComponent(message)
      const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${callmebotPhone}&text=${encodedMessage}&apikey=${callmebotApiKey}`

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout per request

      const response = await fetch(callmebotUrl, {
        method: 'GET',
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        console.log('[v0] 2FA code sent via CallMeBot WhatsApp (attempt ' + (retries + 1) + ')')
        return true
      } else {
        console.warn('[v0] CallMeBot WhatsApp send failed (attempt ' + (retries + 1) + '):', response.statusText)
        retries++
        if (retries < maxRetries) {
          // Wait before retry (exponential backoff: 500ms, 1000ms, 1500ms)
          await new Promise(resolve => setTimeout(resolve, 500 * (retries + 1)))
        }
      }
    } catch (error) {
      console.warn('[v0] Error sending 2FA via CallMeBot (attempt ' + (retries + 1) + '):', error)
      retries++
      if (retries < maxRetries) {
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 500 * (retries + 1)))
      }
    }
  }

  console.error('[v0] Failed to send 2FA code after ' + maxRetries + ' retries')
  return false
}

// Store 2FA code in Supabase (persistent storage)
export async function store2FACode(email: string, code: string): Promise<boolean> {
  try {
    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      // Fallback: store in memory for development
      const expiresAt = Date.now() + 18 * 60 * 1000 // 18 minutes
      inMemoryCodes.set(`admin-${email}`, { code, expiresAt })
      return true
    }

    // Expire time: 18 minutes (1080 seconds) - allows for CallMeBot delays
    const expiresAt = new Date(Date.now() + 18 * 60 * 1000)

    const { error } = await supabaseAdmin
      .from('two_fa_codes')
      .insert([
        {
          email,
          code,
          purpose: 'admin_login',
          is_used: false,
          expires_at: expiresAt.toISOString(),
        },
      ])

    if (error) {
      console.error('[v0] Error storing 2FA code in Supabase:', error)
      // Fallback: store in memory
      const expiresAt = Date.now() + 18 * 60 * 1000
      inMemoryCodes.set(`admin-${email}`, { code, expiresAt })
      return true
    }

    return true
  } catch (error) {
    console.error('[v0] Error in store2FACode:', error)
    // Fallback: store in memory
    const expiresAt = Date.now() + 18 * 60 * 1000
    inMemoryCodes.set(`admin-${email}`, { code, expiresAt })
    return true
  }
}

// Verify 2FA code from Supabase
export async function verify2FACode(email: string, inputCode: string): Promise<boolean> {
  try {
    if (!supabaseAdmin) {
      console.warn('[v0] Supabase admin not available, using in-memory fallback')
      return verifyInMemory(`admin-${email}`, inputCode)
    }

    const now = new Date()

    // Find valid, unused code
    const { data, error } = await supabaseAdmin
      .from('two_fa_codes')
      .select('id, code')
      .eq('email', email)
      .eq('code', inputCode)
      .eq('is_used', false)
      .gt('expires_at', now.toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error verifying 2FA code:', error)
      return false
    }

    // No valid code found
    if (!data) {
      console.warn('[v0] 2FA code not found or expired')
      return false
    }

    // Mark code as used
    await supabaseAdmin
      .from('two_fa_codes')
      .update({ is_used: true })
      .eq('id', data.id)

    return true
  } catch (error) {
    console.error('[v0] Error in verify2FACode:', error)
    // Fallback to in-memory
    return verifyInMemory(`admin-${email}`, inputCode)
  }
}

// Get remaining time for 2FA code (for UI countdown)
export async function get2FACodeExpiry(email: string): Promise<number | null> {
  try {
    if (!supabaseAdmin) {
      // Check in-memory
      const stored = inMemoryCodes.get(`admin-${email}`)
      if (!stored) return null
      return Math.max(0, stored.expiresAt - Date.now())
    }

    const now = new Date()

    const { data, error } = await supabaseAdmin
      .from('two_fa_codes')
      .select('expires_at')
      .eq('email', email)
      .eq('is_used', false)
      .gt('expires_at', now.toISOString())
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (error && error.code !== 'PGRST116') {
      console.error('[v0] Error getting 2FA expiry:', error)
      return null
    }

    if (!data) {
      return null
    }

    const expiryTime = new Date(data.expires_at).getTime()
    return Math.max(0, expiryTime - Date.now())
  } catch (error) {
    console.error('[v0] Error in get2FACodeExpiry:', error)
    return null
  }
}

// In-memory fallback for development/testing
const inMemoryCodes = new Map<string, { code: string; expiresAt: number }>()

function verifyInMemory(identifier: string, inputCode: string): boolean {
  const stored = inMemoryCodes.get(identifier)

  if (!stored) {
    return false
  }

  // Check if code has expired
  if (Date.now() > stored.expiresAt) {
    inMemoryCodes.delete(identifier)
    return false
  }

  // Check if code matches
  if (stored.code === inputCode) {
    inMemoryCodes.delete(identifier) // Code used, remove it
    return true
  }

  return false
}
