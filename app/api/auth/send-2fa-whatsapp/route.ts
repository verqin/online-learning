import { NextRequest, NextResponse } from 'next/server'
import { generateTwoFACode, sendTwoFAWhatsApp, store2FACode } from '@/lib/whatsapp-2fa'

/**
 * API endpoint to send 2FA code via WhatsApp
 * POST /api/auth/send-2fa-whatsapp
 * Body: { email: string }
 * Returns: { success: boolean }
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Verify it's the admin
    if (email !== process.env.ADMIN_EMAIL) {
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

    // Generate and send code via CallMeBot
    const code = generateTwoFACode()
    const sent = await sendTwoFAWhatsApp(callmebotPhone, code)

    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send 2FA code via CallMeBot' },
        { status: 500 }
      )
    }

    // Store code temporarily for verification
    store2FACode(`admin-${email}`, code)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification code sent to your WhatsApp via EDUSANNA ONLINE LEARNING'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in send-2fa-whatsapp:', error)
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    )
  }
}
