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
    try {
      const { createClient } = await import('@supabase/supabase-js')
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

      if (!supabaseUrl || !supabaseKey) {
        console.error('[v0] Supabase credentials not configured')
        return NextResponse.json(
          { error: 'Authentication service not configured' },
          { status: 500 }
        )
      }

      const supabase = createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false }
      })

      // Authenticate with Supabase
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError || !data.user) {
        console.log('[v0] Learner authentication failed:', authError?.message)
        return NextResponse.json(
          { 
            error: 'Invalid email or password',
            isAdmin: false 
          },
          { status: 401 }
        )
      }

      // Get user profile for full name
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', data.user.id)
        .single()

      console.log('[v0] Learner login successful:', email)
      return NextResponse.json(
        {
          success: true,
          isAdmin: false,
          email: data.user.email,
          userId: data.user.id,
          userName: profile?.full_name || email,
        },
        { status: 200 }
      )
    } catch (error) {
      console.error('[v0] Learner authentication error:', error)
      return NextResponse.json(
        { error: 'Authentication failed - please try again' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Login failed - please try again' },
      { status: 500 }
    )
  }
}
