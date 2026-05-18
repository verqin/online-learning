import { NextRequest, NextResponse } from 'next/server'
import { issueCertificate, getUserProgress } from '@/lib/supabase-client'

/**
 * Learner endpoint to request certificate/diploma after course completion
 * POST /api/user/request-certificate
 * Body: { courseId: string, certificateType: 'certificate' | 'diploma' }
 * Returns: { success: boolean, certificateId: string }
 */
export async function POST(request: NextRequest) {
  try {
    // Get user ID from session or header
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

    // Check if user has completed the course (at least 80% progress)
    const progress = await getUserProgress(userId, courseId)
    if (!progress || progress.progress_percentage < 80) {
      return NextResponse.json(
        { error: 'Course completion required (80% progress minimum)' },
        { status: 400 }
      )
    }

    // Create certificate
    const certificateData = await issueCertificate(userId, courseId, certificateType as 'certificate' | 'diploma')

    if (!certificateData) {
      return NextResponse.json(
        { error: 'Failed to create certificate' },
        { status: 500 }
      )
    }

    console.log(`[v0] User ${userId} requested ${certificateType} for course ${courseId}`)

    return NextResponse.json(
      {
        success: true,
        certificateId: certificateData?.id,
        verificationCode: certificateData?.verification_code,
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
