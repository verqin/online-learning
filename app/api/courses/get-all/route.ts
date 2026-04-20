import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

/**
 * GET /api/courses/get-all
 * Fetches all courses from Supabase with optional filtering
 * Query params: category?, letter?, search?
 */
export async function GET(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('[v0] Supabase not configured')
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get query parameters for filtering
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const letter = searchParams.get('letter')
    const search = searchParams.get('search')

    let query = supabase.from('courses').select('*')

    // Apply filters
    if (category) {
      query = query.eq('category', category)
    }
    if (letter) {
      query = query.eq('letter', letter)
    }
    if (search) {
      query = query.or(
        `certificate_title.ilike.%${search}%,diploma_title.ilike.%${search}%`
      )
    }

    const { data, error } = await query.order('letter', { ascending: true })

    if (error) {
      console.error('[v0] Error fetching courses:', error)
      return NextResponse.json(
        { error: 'Failed to fetch courses' },
        { status: 500 }
      )
    }

    // Transform database format to frontend format
    const transformedCourses = data?.map((course) => ({
      id: course.id,
      letter: course.letter,
      certificateTitle: course.certificate_title,
      diplomaTitle: course.diploma_title,
      category: course.category,
      icon: course.icon,
      color: course.color,
    })) || []

    return NextResponse.json(
      {
        success: true,
        count: transformedCourses.length,
        courses: transformedCourses,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Courses API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
