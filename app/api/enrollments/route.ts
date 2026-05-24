import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to fetch user enrollments
 * GET /api/enrollments?userId=<userId>
 * POST /api/enrollments - Create new enrollment
 * Returns: { enrollments: Enrollment[] }
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    if (!supabaseAdmin) {
      console.error('[v0] Supabase admin client not initialized')
      return NextResponse.json(
        { enrollments: [] },
        { status: 200 }
      )
    }

    // Fetch enrollments for the user with course details
    const { data: enrollments, error } = await supabaseAdmin
      .from('enrollments')
      .select('id, course_id, progress, status, enrolled_at, completed_at, exam_score, courses(id, title, description, level, duration)')
      .eq('user_id', userId)
      .order('enrolled_at', { ascending: false })

    if (error) {
      console.error('[v0] Error fetching enrollments:', error)
      return NextResponse.json(
        { enrollments: [] },
        { status: 200 }
      )
    }

    // Transform data for frontend
    const transformedEnrollments = (enrollments || []).map(enrollment => ({
      id: enrollment.id,
      courseId: enrollment.course_id,
      courseName: enrollment.courses?.title || 'Unknown Course',
      courseDescription: enrollment.courses?.description,
      level: enrollment.courses?.level || 'certificate',
      duration: enrollment.courses?.duration,
      progress: enrollment.progress || 0,
      status: enrollment.status || 'in-progress',
      startDate: enrollment.enrolled_at,
      completedDate: enrollment.completed_at,
      examScore: enrollment.exam_score,
    }))

    return NextResponse.json(
      { enrollments: transformedEnrollments },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in enrollments GET:', error)
    return NextResponse.json(
      { enrollments: [], error: 'Failed to fetch enrollments' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, courseId } = await request.json()

    if (!userId || !courseId) {
      return NextResponse.json(
        { error: 'User ID and Course ID are required' },
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

    // Check if already enrolled
    const { data: existing } = await supabaseAdmin
      .from('enrollments')
      .select('id')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single()

    if (existing) {
      return NextResponse.json(
        { error: 'Already enrolled in this course', enrollmentId: existing.id },
        { status: 400 }
      )
    }

    // Create new enrollment
    const { data: enrollment, error } = await supabaseAdmin
      .from('enrollments')
      .insert([
        {
          user_id: userId,
          course_id: courseId,
          status: 'in-progress',
          progress: 0,
          enrolled_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Error creating enrollment:', error)
      return NextResponse.json(
        { error: 'Failed to create enrollment' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        enrollmentId: enrollment?.[0]?.id,
        message: 'Successfully enrolled in course'
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Error in enrollments POST:', error)
    return NextResponse.json(
      { error: 'Failed to create enrollment' },
      { status: 500 }
    )
  }
}
