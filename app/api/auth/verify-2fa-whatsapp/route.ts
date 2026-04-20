import { NextRequest, NextResponse } from 'next/server'
import { verify2FACode } from '@/lib/whatsapp-2fa'

/**
 * API endpoint to verify 2FA code sent via WhatsApp
 * POST /api/auth/verify-2fa-whatsapp
 * Body: { email: string, code: string }
 * Returns: { success: boolean, isAdmin: boolean }
 */
export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json()

    // Validate input
    if (!email || !code || code.length !== 6) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      )
    }

    // Verify the code
    const isValid = verify2FACode(`admin-${email}`, code)

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid or expired code' },
        { status: 401 }
      )
    }

    // Code is valid - verify it's actually the admin
    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Create secure session
    const sessionToken = Buffer.from(`${email}:${Date.now()}:admin`).toString('base64')

    return NextResponse.json(
      {
        success: true,
        isAdmin: true,
        sessionToken: sessionToken,
        message: '2FA verification successful',
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': `admin_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}`,
        },
      }
    )
  } catch (error) {
    console.error('[v0] Error in verify-2fa-whatsapp:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}
