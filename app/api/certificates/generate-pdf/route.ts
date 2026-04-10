import { NextRequest, NextResponse } from 'next/server';
import { generateCertificateHTML, prepareCertificateData } from '@/lib/certificate-generator';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

/**
 * Generate certificate PDF HTML for download
 * The actual PDF generation happens on client-side using html2pdf
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paymentId } = body;

    if (!paymentId) {
      return NextResponse.json(
        { error: 'Payment ID is required' },
        { status: 400 }
      );
    }

    // Fetch payment record
    const { data: payment, error: fetchError } = await supabase
      .from('certificate_payments')
      .select('*')
      .eq('id', paymentId)
      .single();

    if (fetchError || !payment) {
      return NextResponse.json(
        { error: 'Payment record not found' },
        { status: 404 }
      );
    }

    // Fetch course details for skills
    const { data: courseData } = await supabase
      .from('courses')
      .select('skills')
      .eq('id', payment.course_id)
      .single();

    // Prepare data with skills
    const certificateData = prepareCertificateData({
      ...payment,
      skills: courseData?.skills || [],
    });

    // Generate HTML
    const html = generateCertificateHTML(certificateData);

    return NextResponse.json({
      html,
      filename: `${payment.course_name} - ${payment.certificate_type === 'diploma' ? 'Diploma' : 'Certificate'}.html`,
      certificateId: payment.certificate_id,
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    );
  }
}
