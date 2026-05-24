import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'

/**
 * API endpoint to fetch course details
 * GET /api/courses/[id]
 * Returns: { course: Course, completedModules: string[] }
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const courseId = params.id
    
    if (!courseId) {
      return NextResponse.json(
        { error: 'Course ID is required' },
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

    // Fetch course from database
    const { data: course, error: courseError } = await supabaseAdmin
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .single()

    if (courseError || !course) {
      console.error('[v0] Error fetching course:', courseError)
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      )
    }

    // Parse modules if stored as JSON
    let modules = []
    if (course.modules) {
      try {
        modules = typeof course.modules === 'string' 
          ? JSON.parse(course.modules) 
          : course.modules
      } catch (e) {
        console.error('[v0] Error parsing modules:', e)
        modules = []
      }
    }

    // Get user ID from request if available (for progress tracking)
    const userId = request.headers.get('x-user-id')
    let completedModules: string[] = []
    let enrollmentId = ""

    if (userId) {
      // Check if user is enrolled in this course
      const { data: enrollment } = await supabaseAdmin
        .from('enrollments')
        .select('id')
        .eq('user_id', userId)
        .eq('course_id', courseId)
        .single()

      if (enrollment) {
        enrollmentId = enrollment.id

        // Get completed modules for this user
        const { data: progress } = await supabaseAdmin
          .from('progress')
          .select('module_id')
          .eq('enrollment_id', enrollmentId)
          .eq('user_id', userId)

        completedModules = (progress || []).map(p => p.module_id)
      }
    }

    return NextResponse.json(
      {
        course: {
          id: course.id,
          title: course.title,
          description: course.description,
          level: course.level || 'certificate',
          duration: course.duration || 'Not specified',
          modules: modules,
          students: course.students_count || 0,
          rating: course.rating || 0,
        },
        completedModules,
        enrollmentId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in course GET:', error)
    return NextResponse.json(
      { error: 'Failed to fetch course' },
      { status: 500 }
    )
  }
}
