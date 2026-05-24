import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to delete a user
 * DELETE /api/admin/users/[id]
 * Returns: { success: boolean }
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      return NextResponse.json(
        { error: 'Database not available' },
        { status: 500 }
      )
    }

    // Delete user from profiles table (cascading deletes should handle enrollments)
    const { error } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('id', userId)

    if (error) {
      console.error('[v0] Error deleting user:', error)
      return NextResponse.json(
        { error: 'Failed to delete user' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'User deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in user delete:', error)
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    )
  }
}
