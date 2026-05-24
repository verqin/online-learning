import { NextRequest, NextResponse } from 'next/server'
import { verify2FACode } from '@/lib/whatsapp-2fa'

/**
 * API endpoint to verify 2FA code sent via WhatsApp
 * POST /api/auth/verify-2fa-whatsapp
 * Body: { email: string, code: string }
 * Returns: { success: boolean, isAdmin: boolean, sessionToken: string }
 */
export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json()

    // Validate input
    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and code are required' },
        { status: 400 }
      )
    }

    if (code.length !== 6 || !/^\d+$/.test(code)) {
      return NextResponse.json(
        { error: 'Code must be exactly 6 digits' },
        { status: 400 }
      )
    }

    // Verify it's the admin email
    const adminEmail = process.env.ADMIN_EMAIL
    if (!adminEmail || email !== adminEmail) {
      console.warn('[v0] 2FA verification attempted with non-admin email:', email)
      return NextResponse.json(
        { error: 'This email is not authorized for admin access' },
        { status: 401 }
      )
    }

    // Verify the code against database
    console.log('[v0] Verifying 2FA code for', email)
    const isValid = await verify2FACode(email, code)

    if (!isValid) {
      console.warn('[v0] 2FA verification failed - invalid or expired code')
      return NextResponse.json(
        { error: 'Invalid or expired verification code. Please request a new one.' },
        { status: 401 }
      )
    }

    // Code is valid - create secure session
    const sessionToken = Buffer.from(`${email}:${Date.now()}:admin:${Math.random().toString(36).substr(2, 9)}`).toString('base64')

    console.log('[v0] 2FA verification successful for', email)

    return NextResponse.json(
      {
        success: true,
        isAdmin: true,
        sessionToken: sessionToken,
        message: '2FA verification successful. Welcome to admin dashboard.',
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
      { error: 'Verification failed. Please try again.' },
      { status: 500 }
    )
  }
}
