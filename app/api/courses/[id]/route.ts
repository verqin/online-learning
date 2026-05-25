import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-client'
import { courseCatalog } from '@/lib/course-catalog'
import { getDiplomaModules } from '@/lib/diploma-course-modules'
import { getCertificateModules } from '@/lib/certificate-course-modules'

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

    let course = null
    let modules = []

    // Try to fetch from database first
    if (supabaseAdmin) {
      try {
        const { data: dbCourse, error: courseError } = await supabaseAdmin
          .from('courses')
          .select('*')
          .eq('id', courseId)
          .single()

        if (dbCourse && !courseError) {
          course = dbCourse
          // Parse modules from database
          if (course.modules) {
            try {
              modules = typeof course.modules === 'string' 
                ? JSON.parse(course.modules) 
                : course.modules
            } catch (e) {
              modules = []
            }
          }
        }
      } catch (dbError) {
        console.warn('[v0] Database fetch failed, using fallback catalog')
      }
    }

    // Fallback to course catalog if database fails
    if (!course) {
      console.log('[v0] Using fallback course catalog for:', courseId)
      const catalogCourse = courseCatalog.find(c => c.id === courseId)
      
      if (!catalogCourse) {
        return NextResponse.json(
          { error: 'Course not found' },
          { status: 404 }
        )
      }

      // Get modules for this course from module data
      const isDiploma = request.nextUrl.searchParams.get('level') === 'diploma'
      if (isDiploma) {
        modules = getDiplomaModules(catalogCourse.diplomaTitle)
      } else {
        modules = getCertificateModules(catalogCourse.certificateTitle)
      }

      // Create course object from catalog
      course = {
        id: catalogCourse.id,
        title: isDiploma ? catalogCourse.diplomaTitle : catalogCourse.certificateTitle,
        description: `Complete ${isDiploma ? catalogCourse.diplomaTitle : catalogCourse.certificateTitle} program`,
        level: isDiploma ? 'diploma' : 'certificate',
        category: catalogCourse.category,
        modules: JSON.stringify(modules),
        rating: 4.8,
        students_count: 1000,
      }
    }

    // Parse modules if needed
    if (typeof modules !== 'object' || modules.length === 0) {
      if (course.modules) {
        try {
          modules = typeof course.modules === 'string' 
            ? JSON.parse(course.modules) 
            : course.modules
        } catch (e) {
          modules = []
        }
      }
    }

    // Get user ID from request if available (for progress tracking)
    const userId = request.headers.get('x-user-id')
    let completedModules: string[] = []
    let enrollmentId = ""

    if (userId && supabaseAdmin) {
      try {
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
      } catch (e) {
        console.warn('[v0] Could not fetch user progress:', e)
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
