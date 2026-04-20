import { NextRequest, NextResponse } from 'next/server'

// Store codes in memory (use Redis or DB in production)
const twoFACodes: Map<string, { code: string; expiresAt: number }> = new Map()

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Verify it's the admin email
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'tinasheleev@gmail.com'
    if (email !== adminEmail) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const code = generateCode()
    const expiresAt = Date.now() + 10 * 60 * 1000 // 10 minutes

    twoFACodes.set(email, { code, expiresAt })

    // In production, send actual email using nodemailer or Resend
    console.log(`[2FA Code for ${email}]: ${code}`)

    // For development, we can also log it
    if (process.env.NODE_ENV === 'development') {
      console.log(`Development: 2FA code is ${code}`)
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Code sent to email'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending 2FA code:', error)
    return NextResponse.json(
      { error: 'Failed to send code' },
      { status: 500 }
    )
  }
}
