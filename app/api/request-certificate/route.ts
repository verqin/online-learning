import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendCertificateReadyNotification } from '@/lib/whatsapp-service'

interface CertificateRequest {
  userId: string
  courseId: string
  courseName: string
  score: number
  userName: string
  phoneNumber: string
}

export async function POST(request: NextRequest) {
  try {
    const body: CertificateRequest = await request.json()

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

    // Generate unique certificate ID
    const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Here you would typically save to database
    // For now, we'll just log and send notification
    console.log('[Certificate Request]', {
      certificateId,
      userId: body.userId,
      courseId: body.courseId,
      courseName: body.courseName,
      score: body.score,
    })

    // Send WhatsApp notification
    const whatsappResult = await sendCertificateReadyNotification(
      body.phoneNumber,
      body.userName,
      body.courseName,
      certificateId,
    )

    if (!whatsappResult.success) {
      console.warn('[Certificate] WhatsApp notification failed:', whatsappResult.error)
      // Don't fail the request if WhatsApp fails
    }

    return NextResponse.json(
      {
        success: true,
        certificateId,
        message: 'Certificate request processed successfully',
        whatsappSent: whatsappResult.success,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('[Certificate API Error]', error)
    return NextResponse.json(
      {
        error: 'Failed to process certificate request',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
