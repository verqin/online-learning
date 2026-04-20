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

    // Get admin's WhatsApp number from env
    const adminWhatsApp = process.env.ADMIN_WHATSAPP_NUMBER
    if (!adminWhatsApp) {
      return NextResponse.json(
        { error: '2FA not configured' },
        { status: 500 }
      )
    }

    // Generate and send code
    const code = generateTwoFACode()
    const sent = await sendTwoFAWhatsApp(adminWhatsApp, code)

    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send WhatsApp message' },
        { status: 500 }
      )
    }

    // Store code temporarily for verification
    store2FACode(`admin-${email}`, code)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Verification code sent to WhatsApp'
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
