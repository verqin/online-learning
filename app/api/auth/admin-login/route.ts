import { NextRequest, NextResponse } from 'next/server'

/**
 * Secure server-side admin authentication
 * Credentials stored in SERVER-ONLY environment variables (not NEXT_PUBLIC)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Admin credentials from server-only env vars (NOT exposed to frontend)
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    // Validate both credentials match
    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: 'Admin credentials not configured' },
        { status: 500 }
      )
    }

    if (email === adminEmail && password === adminPassword) {
      // Create secure session token (in production, use proper JWT)
      const sessionToken = Buffer.from(`${email}:${Date.now()}`).toString('base64')

      return NextResponse.json(
        {
          success: true,
          isAdmin: true,
          email: email,
          sessionToken: sessionToken,
        },
        {
          status: 200,
          headers: {
            'Set-Cookie': `admin_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict`,
          },
        }
      )
    }

    // Invalid credentials
    return NextResponse.json(
      { error: 'Invalid email or password' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}
