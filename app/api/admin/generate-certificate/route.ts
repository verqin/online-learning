import { NextRequest, NextResponse } from 'next/server'
import { issueCertificate } from '@/lib/supabase-client'

/**
 * Admin endpoint to manually generate certificates for students
 * POST /api/admin/generate-certificate
 * Body: { userId: string, courseId: string, certificateType: 'certificate' | 'diploma', studentName: string, courseName: string }
 * Returns: { certificateId: string, verificationCode: string }
 */
export async function POST(request: NextRequest) {
  try {
    // Verify admin authorization (check session cookie)
    const adminSession = request.cookies.get('admin_session')
    if (!adminSession) {
      return NextResponse.json(
        { error: 'Unauthorized - admin access required' },
        { status: 401 }
      )
    }

    const { userId, courseId, certificateType, studentName, courseName } = await request.json()

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

    // Create certificate in Supabase
    const certificateData = await issueCertificate(userId, courseId, certificateType as 'certificate' | 'diploma')

    if (!certificateData) {
      return NextResponse.json(
        { error: 'Failed to create certificate' },
        { status: 500 }
      )
    }

    // Log admin action
    console.log(`[v0] Admin generated ${certificateType} for user ${userId} in course ${courseId}`)

    return NextResponse.json(
      {
        success: true,
        certificateId: certificateData[0]?.id,
        verificationCode: certificateData[0]?.verification_code,
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
