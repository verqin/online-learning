import { NextRequest, NextResponse } from 'next/server';
import { storePaymentRecord, generateCertificateId, checkDuplicatePayment } from '@/lib/payment-utils';
import { sendWhatsAppNotification } from '@/lib/whatsapp-service';
import { createClient } from '@supabase/supabase-js';

// Use production API - change to sandbox for testing
const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || 'https://api.paypal.com';
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_SECRET;

/**
 * Capture and verify PayPal payment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      orderId,
      userId,
      studentName,
      email,
      courseId,
      courseName,
      certificateType,
      amount,
    } = body;

    if (!orderId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!CLIENT_ID || !SECRET) {
      return NextResponse.json(
        { error: 'PayPal credentials not configured' },
        { status: 500 }
      );
    }

    // Check for duplicate payment BEFORE capturing
    const isDuplicate = await checkDuplicatePayment(
      userId,
      courseId,
      certificateType as 'certificate' | 'diploma'
    );

    if (isDuplicate) {
      return NextResponse.json(
        { error: 'You have already paid for this course certificate or diploma.' },
        { status: 400 }
      );
    }

    // Get access token
    const tokenResponse = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get PayPal access token');
    }

    const { access_token } = await tokenResponse.json();

    // Capture order
    const captureResponse = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
      }
    );

    if (!captureResponse.ok) {
      const errorData = await captureResponse.json();
      console.error('PayPal capture error:', errorData);
      throw new Error('Failed to capture payment');
    }

    const capturedOrder = await captureResponse.json();

    // Verify payment status
    if (
      capturedOrder.status !== 'COMPLETED' ||
      !capturedOrder.purchase_units?.[0]?.payments?.captures?.[0]
    ) {
      return NextResponse.json(
        { error: 'Payment verification failed' },
        { status: 400 }
      );
    }

    const capture = capturedOrder.purchase_units[0].payments.captures[0];

    if (capture.status !== 'COMPLETED') {
      return NextResponse.json(
        { error: 'Payment was not completed' },
        { status: 400 }
      );
    }

    // Generate certificate ID
    const certificateId = generateCertificateId();

    // Store payment record
    const paymentRecord = await storePaymentRecord({
      user_id: userId,
      student_name: studentName,
      email,
      course_id: courseId,
      course_name: courseName,
      certificate_type: certificateType as 'certificate' | 'diploma',
      amount: parseFloat(amount),
      paypal_order_id: orderId,
      certificate_id: certificateId,
    });

    // Send WhatsApp notification to admin
    try {
      await sendWhatsAppNotification(
        `New payment received from ${studentName} for ${courseName} ($${amount})`
      );
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', whatsappError);
      // Don't fail the payment if WhatsApp fails
    }

    return NextResponse.json({
      success: true,
      paymentId: paymentRecord?.id,
      certificateId,
      orderId,
      amount: capture.amount.value,
      currency: capture.amount.currency_code,
    });
  } catch (error) {
    console.error('Capture order error:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to capture order',
      },
      { status: 500 }
    );
  }
}
