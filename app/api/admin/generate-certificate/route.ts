import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'

/**
 * Admin endpoint to manually generate certificates for students
 */
export async function POST(request: NextRequest) {
  try {
    // Verify admin authorization
    const adminSession = request.cookies.get('admin_session')
    if (!adminSession) {
      return NextResponse.json(
        { error: 'Unauthorized - admin access required' },
        { status: 401 }
      )
    }

    const { userId, courseId, certificateType, studentName, courseName } =
      await request.json()

    // Validate input
    if (!userId || !courseId || !certificateType || !studentName || !courseName) {
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

    const supabase = await createServerSupabase()

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

    // Log admin action
    console.log(
      `[v0] Admin generated ${certificateType} for user ${userId} in course ${courseId}`
    )

    return NextResponse.json(
      {
        success: true,
        certificateId: data?.[0]?.id,
        verificationCode: data?.[0]?.verification_code,
        message: `${certificateType} generated successfully`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error in admin certificate generation:', error)
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    )
  }
}
