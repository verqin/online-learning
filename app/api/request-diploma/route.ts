import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendDiplomaReadyNotification } from '@/lib/whatsapp-service'

interface DiplomaRequest {
  userId: string
  courseId: string
  courseName: string
  score: number
  userName: string
  phoneNumber: string
}

export async function POST(request: NextRequest) {
  try {
    const body: DiplomaRequest = await request.json()

    // Validate required fields
    if (
      !body.userId ||
      !body.courseId ||
      !body.courseName ||
      !body.userName ||
      !body.phoneNumber
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Generate unique diploma ID
    const diplomaId = `DPLM-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Here you would typically save to database
    // For now, we'll just log and send notification
    console.log('[Diploma Request]', {
      diplomaId,
      userId: body.userId,
      courseId: body.courseId,
      courseName: body.courseName,
      score: body.score,
    })

    // Send WhatsApp notification
    const whatsappResult = await sendDiplomaReadyNotification(
      body.phoneNumber,
      body.userName,
      body.courseName,
      diplomaId,
    )

    if (!whatsappResult.success) {
      console.warn('[Diploma] WhatsApp notification failed:', whatsappResult.error)
      // Don't fail the request if WhatsApp fails
    }

    return NextResponse.json(
      {
        success: true,
        diplomaId,
        message: 'Diploma request processed successfully',
        whatsappSent: whatsappResult.success,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[Diploma API Error]', error)
    return NextResponse.json(
      {
        error: 'Failed to process diploma request',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
