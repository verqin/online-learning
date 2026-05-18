import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'

/**
 * Learner endpoint to request certificate/diploma after course completion
 * POST /api/user/request-certificate
 */
export async function POST(request: NextRequest) {
  try {
    // Get user ID from session/header
    const userId = request.headers.get('x-user-id')

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - user ID required' },
        { status: 401 }
      )
    }

    const { courseId, certificateType } = await request.json()

    // Validate input
    if (!courseId || !certificateType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!['certificate', 'diploma'].includes(certificateType)) {
      return NextResponse.json(
        { error: 'Invalid certificate type' },
        { status: 400 }
      )
    }

    const supabase = createServerSupabase()

    // Check enrollment progress
    const { data: enrollment, error: enrollmentError } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single()

    if (enrollmentError || !enrollment) {
      return NextResponse.json(
        { error: 'Enrollment not found' },
        { status: 404 }
      )
    }

    // Ensure course completion requirement
    if ((enrollment.progress || 0) < 80) {
      return NextResponse.json(
        { error: 'Course completion required (80% progress minimum)' },
        { status: 400 }
      )
    }

    // Generate verification code
    const verificationCode = `${courseId}-${userId}-${Date.now()}`

    // Create certificate directly in Supabase
    const { data, error } = await supabase
      .from('certificates')
      .insert([
        {
          user_id: userId,
          course_id: courseId,
          certificate_type: certificateType,
          verification_code: verificationCode,
          issue_date: new Date().toISOString(),
          is_valid: true,
        },
      ])
      .select()

    if (error) {
      console.error('[certificate insert error]', error)

      return NextResponse.json(
        { error: 'Failed to create certificate' },
        { status: 500 }
      )
    }

    console.log(
      `[v0] User ${userId} requested ${certificateType} for course ${courseId}`
    )

    return NextResponse.json(
      {
        success: true,
        certificateId: data?.[0]?.id,
        verificationCode: data?.[0]?.verification_code,
        message: `${certificateType} created successfully`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in certificate request:', error)

    return NextResponse.json(
      { error: 'Failed to create certificate' },
      { status: 500 }
    )
  }
}
