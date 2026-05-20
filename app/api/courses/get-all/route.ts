import { NextRequest, NextResponse } from 'next/server'
import { courseCatalog } from '@/lib/course-catalog'

export const dynamic = 'force-dynamic'
/**
 * GET /api/courses/get-all
 * Fetches all courses from the course catalog with optional filtering
 * Query params: category?, letter?, search?
 */
export async function GET(request: NextRequest) {
  try {
    // Get query parameters for filtering
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get('category')
    const letter = searchParams.get('letter')
    const search = searchParams.get('search')

    // Start with all courses from catalog
    let filteredCourses = [...courseCatalog]

    // Apply filters
    if (category) {
      filteredCourses = filteredCourses.filter((course) => course.category === category)
    }

    if (letter) {
      filteredCourses = filteredCourses.filter((course) => course.letter === letter)
    }

    if (search) {
      const searchLower = search.toLowerCase()
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.certificateTitle.toLowerCase().includes(searchLower) ||
          course.diplomaTitle.toLowerCase().includes(searchLower)
      )
    }

    // Sort by letter
    filteredCourses.sort((a, b) => a.letter.localeCompare(b.letter))

    // Transform to match frontend format
    const transformedCourses = filteredCourses.map((course) => ({
      id: course.id,
      letter: course.letter,
      certificateTitle: course.certificateTitle,
      diplomaTitle: course.diplomaTitle,
      category: course.category,
      icon: course.icon,
      color: course.color,
    }))

    console.log(`[v0] Courses API: Returning ${transformedCourses.length} courses`)

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
