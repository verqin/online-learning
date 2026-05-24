import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to fetch all users for admin dashboard
 * GET /api/admin/users
 * Returns: { users: User[] }
 */
export async function GET(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      return NextResponse.json(
        { users: [] },
        { status: 200 }
      )
    }

    // Fetch all users from profiles table
    const { data: profiles, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('id, email, full_name, created_at')
      .order('created_at', { ascending: false })

    if (profileError) {
      console.error('[v0] Error fetching profiles:', profileError)
      return NextResponse.json(
        { users: [] },
        { status: 200 }
      )
    }

    // For each user, count their enrollments
    const usersWithEnrollments = await Promise.all(
      (profiles || []).map(async (profile) => {
        const { count, error } = await supabaseAdmin
          .from('enrollments')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.id)

        return {
          id: profile.id,
          email: profile.email,
          full_name: profile.full_name,
          created_at: profile.created_at,
          enrollment_count: count || 0,
        }
      })
    )

    return NextResponse.json(
      { users: usersWithEnrollments },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in admin users GET:', error)
    return NextResponse.json(
      { users: [], error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}
