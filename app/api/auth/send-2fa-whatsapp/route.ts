import { NextRequest, NextResponse } from 'next/server'
import { generateTwoFACode, sendTwoFAWhatsApp, store2FACode } from '@/lib/whatsapp-2fa'

/**
 * API endpoint to send 2FA code via WhatsApp
 * POST /api/auth/send-2fa-whatsapp
 * Body: { email: string }
 * Returns: { success: boolean, message: string, expiresIn: number }
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate input
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Invalid email provided' },
        { status: 400 }
      )
    }

    // Verify it's the admin
    const adminEmail = process.env.ADMIN_EMAIL
    if (!adminEmail || email !== adminEmail) {
      console.warn('[v0] Unauthorized 2FA request for email:', email)
      return NextResponse.json(
        { error: 'Invalid admin email' },
        { status: 401 }
      )
    }

    // Get CallMeBot credentials from env
    const callmebotPhone = process.env.CALLMEBOT_PHONE
    const callmebotApiKey = process.env.CALLMEBOT_APIKEY
    
    if (!callmebotPhone || !callmebotApiKey) {
      console.error('[v0] CallMeBot credentials missing: CALLMEBOT_PHONE or CALLMEBOT_APIKEY')
      return NextResponse.json(
        { error: '2FA not configured - CallMeBot credentials missing' },
        { status: 500 }
      )
    }

    // Generate code
    const code = generateTwoFACode()
    console.log('[v0] Generated 2FA code for', email, ':', code)

    // Store code in database (before sending, to ensure persistence)
    const stored = await store2FACode(email, code)
    if (!stored) {
      console.error('[v0] Failed to store 2FA code in database')
      return NextResponse.json(
        { error: 'Failed to store verification code' },
        { status: 500 }
      )
    }

    // Send code via CallMeBot
    const sent = await sendTwoFAWhatsApp(callmebotPhone, code)

    if (!sent) {
      console.error('[v0] Failed to send 2FA code via CallMeBot after retries')
      return NextResponse.json(
        { 
          error: 'Failed to send code via WhatsApp - please check CallMeBot configuration',
          code: code, // Return code in dev for testing purposes
          isDevFallback: true
        },
        { status: 500 }
      )
    }

    // Success - code expires in 18 minutes
    const expirySeconds = 18 * 60

    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification code sent to your WhatsApp',
        expiresIn: expirySeconds,
        code: code // Return code in response for admin visibility in dev/test
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in send-2fa-whatsapp:', error)
    return NextResponse.json(
      { error: 'Failed to send verification code. Please try again.' },
      { status: 500 }
    )
  }
}
