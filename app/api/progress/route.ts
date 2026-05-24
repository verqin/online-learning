import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to save/update module progress
 * POST /api/progress
 * Body: { enrollmentId, courseId, userId, moduleId, progressPercentage }
 * Returns: { success: boolean }
 */
export async function POST(request: NextRequest) {
  try {
    const { enrollmentId, courseId, userId, moduleId, progressPercentage } = await request.json()

    // Validate input
    if (!enrollmentId || !courseId || !userId || !moduleId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      return NextResponse.json(
        { success: false, error: 'Database not available' },
        { status: 500 }
      )
    }

    // Check if progress record exists
    const { data: existingProgress, error: checkError } = await supabaseAdmin
      .from('progress')
      .select('id')
      .eq('enrollment_id', enrollmentId)
      .eq('module_id', moduleId)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('[v0] Error checking progress:', checkError)
    }

    if (existingProgress) {
      // Update existing progress
      const { error: updateError } = await supabaseAdmin
        .from('progress')
        .update({
          completed_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingProgress.id)

      if (updateError) {
        console.error('[v0] Error updating progress:', updateError)
        return NextResponse.json(
          { success: false, error: 'Failed to update progress' },
          { status: 500 }
        )
      }
    } else {
      // Create new progress record
      const { error: insertError } = await supabaseAdmin
        .from('progress')
        .insert([
          {
            enrollment_id: enrollmentId,
            user_id: userId,
            course_id: courseId,
            module_id: moduleId,
            completed_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ])

      if (insertError) {
        console.error('[v0] Error creating progress:', insertError)
        return NextResponse.json(
          { success: false, error: 'Failed to save progress' },
          { status: 500 }
        )
      }
    }

    // Update enrollment progress percentage
    const { error: enrollmentError } = await supabaseAdmin
      .from('enrollments')
      .update({
        progress: progressPercentage,
        updated_at: new Date().toISOString(),
      })
      .eq('id', enrollmentId)

    if (enrollmentError) {
      console.error('[v0] Error updating enrollment progress:', enrollmentError)
      // Don't fail if enrollment update fails - progress was saved
    }

    console.log('[v0] Progress saved:', moduleId, 'at', progressPercentage + '%')

    return NextResponse.json(
      { success: true, message: 'Progress saved successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in progress POST:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}
