import { NextRequest, NextResponse } from 'next/server'

// Store codes in memory (use Redis or DB in production)
const twoFACodes: Map<string, { code: string; expiresAt: number }> = new Map()

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json()

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and code are required' },
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

    // For development, accept test code
    if (process.env.NODE_ENV === 'development' && code === '123456') {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Code verified'
        },
        { status: 200 }
      )
    }

    // Check if code exists and is not expired
    const storedData = twoFACodes.get(email)
    
    if (!storedData) {
      return NextResponse.json(
        { error: 'No code found. Request a new one.' },
        { status: 400 }
      )
    }

    if (Date.now() > storedData.expiresAt) {
      twoFACodes.delete(email)
      return NextResponse.json(
        { error: 'Code has expired. Request a new one.' },
        { status: 400 }
      )
    }

    if (storedData.code !== code) {
      return NextResponse.json(
        { error: 'Invalid code' },
        { status: 401 }
      )
    }

    // Code is valid - delete it
    twoFACodes.delete(email)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Code verified successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error verifying 2FA code:', error)
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    )
  }
}
