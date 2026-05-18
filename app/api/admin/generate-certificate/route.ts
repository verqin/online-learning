import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
  try {
    // 1. Admin auth check
    const adminSession = request.cookies.get('admin_session')

    if (!adminSession) {
      return NextResponse.json(
        { error: 'Unauthorized - admin access required' },
        { status: 401 }
      )
    }

    // 2. Parse request
    const { userId, courseId, certificateType, studentName, courseName } =
      await request.json()

    // 3. Validate input
    if (!userId || !courseId || !certificateType || !studentName || !courseName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (certificateType !== 'certificate' && certificateType !== 'diploma') {
      return NextResponse.json(
        { error: 'Invalid certificate type' },
        { status: 400 }
      )
    }

    // 4. Create Supabase server client (IMPORTANT FIX)
    const supabase = createServerSupabase()

    // 5. Generate verification code
    const verificationCode = `${courseId}-${userId}-${Date.now()}`

    // 6. Insert certificate
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

    // 7. Log
    console.log(
      `[ADMIN] Generated ${certificateType} for user ${userId} in course ${courseId}`
    )

    // 8. Response
    return NextResponse.json({
      success: true,
      certificateId: data?.[0]?.id,
      verificationCode: data?.[0]?.verification_code,
      message: `${certificateType} generated successfully`,
    })
  } catch (error) {
    console.error('[admin certificate error]', error)

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
