import { NextRequest, NextResponse } from 'next/server';
import { generateCertificatePDF } from '@/lib/certificate-generator';

/**
 * Generate certificate PDF using pdf-lib
 * Server-side only, no DOM APIs, returns downloadable PDF
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentName, courseName, certificateId, completionDate, certificateType, skills } = body;

    // Validate required fields
    if (!studentName || !courseName || !certificateId || !completionDate || !certificateType) {
      return NextResponse.json(
        { error: 'Missing required certificate data' },
        { status: 400 }
      );
    }

    // Generate PDF buffer
    const pdfBuffer = await generateCertificatePDF({
      studentName,
      courseName,
      certificateId,
      completionDate,
      certificateType,
      skills: skills || [],
    });

    // Return PDF as response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${studentName} - ${certificateType === 'diploma' ? 'Diploma' : 'Certificate'}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate PDF' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for certificate preview/download
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const studentName = searchParams.get('studentName');
    const courseName = searchParams.get('courseName');
    const certificateId = searchParams.get('certificateId');
    const completionDate = searchParams.get('completionDate');
    const certificateType = searchParams.get('certificateType') as 'certificate' | 'diploma';
    const skillsParam = searchParams.get('skills');

    if (!studentName || !courseName || !certificateId || !completionDate || !certificateType) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const skills = skillsParam ? skillsParam.split(',') : [];

    const pdfBuffer = await generateCertificatePDF({
      studentName,
      courseName,
      certificateId,
      completionDate,
      certificateType,
      skills,
    });

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${studentName} - ${certificateType === 'diploma' ? 'Diploma' : 'Certificate'}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate certificate PDF' },
      { status: 500 }
    );
  }
}
