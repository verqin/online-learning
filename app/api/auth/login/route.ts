import { NextRequest, NextResponse } from 'next/server'

/**
 * Unified login API endpoint for both admin and learner users
 * POST /api/auth/login
 * Body: { email: string, password: string }
 * Returns: { isAdmin: boolean, userName?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Check if it's an admin login attempt
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminEmail || !adminPassword) {
      console.error('[v0] Admin credentials not configured in environment')
      return NextResponse.json(
        { error: 'Login service misconfigured' },
        { status: 500 }
      )
    }

    // Admin authentication
    if (email === adminEmail && password === adminPassword) {
      console.log('[v0] Admin login successful for:', email)
      return NextResponse.json(
        {
          success: true,
          isAdmin: true,
          email: email,
          message: 'Admin credentials verified. 2FA required.',
        },
        { status: 200 }
      )
    }

    // Learner authentication via Supabase
    // Note: In production, learner auth should be handled via Supabase client
    // This API is primarily for admin login with 2FA
    // Learners use Supabase built-in auth on the client side
    
    console.log('[v0] Non-admin login attempt - should use Supabase client auth')
    return NextResponse.json(
      { 
        error: 'Use Supabase client authentication for learner login',
        isAdmin: false 
      },
      { status: 400 }
    )
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Login failed - please try again' },
      { status: 500 }
    )
  }
}
