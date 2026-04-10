import { createCanvas } from 'canvas';
import { createWriteStream } from 'fs';
import { join } from 'path';

interface CertificateData {
  studentName: string;
  courseName: string;
  certificateId: string;
  completionDate: string;
  certificateType: 'certificate' | 'diploma';
  skills?: string[];
}

/**
 * Generate certificate or diploma as canvas
 * Returns canvas for further processing or image generation
 */
export function generateCertificateCanvas(data: CertificateData): HTMLCanvasElement | null {
  // This function would use canvas to generate the certificate
  // For production, use a library like html2canvas or jspdf
  // For now, return the canvas reference for client-side generation
  return null;
}

/**
 * Generate certificate text content
 */
export function generateCertificateText(data: CertificateData): string {
  const isCertificate = data.certificateType === 'certificate';

  let text = `EDUSANNA
Online Learning
Elevate Your Mind

${isCertificate ? 'CERTIFICATE OF ACHIEVEMENT' : 'DIPLOMA'}

This Certifies That

${data.studentName}

Has Successfully Completed The

${data.courseName}
`;

  if (!isCertificate && data.skills && data.skills.length > 0) {
    text += `\nIn Recognition Of Outstanding Achievement:

${data.skills.map((skill) => `• ${skill}`).join('\n')}
`;
  } else {
    text += '\nIn Recognition Of Outstanding Achievement\n';
  }

  text += `
Certificate ID: ${data.certificateId}

Issued by Edusanna - A Digital Learning Institution

This certificate can be verified on Edusanna Online Learning

Issued: ${data.completionDate}
`;

  return text;
}

/**
 * Generate certificate HTML for PDF conversion
 */
export function generateCertificateHTML(data: CertificateData): string {
  const isCertificate = data.certificateType === 'certificate';

  const skillsList = data.skills && data.skills.length > 0
    ? `<div style="margin-top: 20px; text-align: center;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px auto; max-width: 600px;">
          ${data.skills
            .map(
              (skill, i) =>
                `<div style="padding: 10px; border: 1px solid #e0e7ff; border-radius: 8px; background: #f0f7ff;">
              ${skill}
            </div>`
            )
            .join('')}
        </div>
      </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.certificateType === 'diploma' ? 'Diploma' : 'Certificate'} - ${data.courseName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: white;
            padding: 40px;
        }

        .certificate-container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            border: 3px solid #1f2937;
            border-radius: 20px;
            padding: 60px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }

        .certificate-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 120px;
            background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #4c1d95 100%);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
        }

        .header {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
            z-index: 1;
            padding-top: 40px;
            color: white;
        }

        .header h1 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 14px;
            opacity: 0.95;
        }

        .content {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .title {
            font-size: 32px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 30px;
            letter-spacing: 2px;
        }

        .text-block {
            margin: 25px 0;
            font-size: 18px;
            color: #374151;
            line-height: 1.8;
        }

        .student-name {
            font-size: 28px;
            font-weight: bold;
            color: #2d3748;
            margin: 20px 0;
            text-decoration: underline;
            text-decoration-color: #a855f7;
            text-decoration-thickness: 3px;
            text-underline-offset: 8px;
        }

        .course-name {
            font-size: 24px;
            color: #a855f7;
            font-weight: bold;
            margin: 20px 0;
            text-decoration: underline;
            text-decoration-color: #fbbf24;
            text-decoration-thickness: 2px;
            text-underline-offset: 8px;
        }

        .certificate-id {
            font-family: 'Courier New', monospace;
            font-size: 16px;
            font-weight: bold;
            color: #1f2937;
            margin: 20px 0;
            padding: 15px;
            background: #f3f4f6;
            border-radius: 8px;
        }

        .footer-text {
            font-size: 14px;
            color: #6b7280;
            margin-top: 30px;
            line-height: 1.6;
        }

        .signature-section {
            margin-top: 40px;
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            padding-top: 30px;
            border-top: 2px solid #e5e7eb;
        }

        .signature-line {
            text-align: center;
            flex: 1;
        }

        .signature-line p {
            font-size: 12px;
            color: #6b7280;
            margin-top: 10px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 30px auto;
            max-width: 600px;
        }

        .skill-item {
            padding: 12px;
            border: 1px solid #dbeafe;
            border-radius: 8px;
            background: #f0f7ff;
            color: #1e40af;
            font-size: 14px;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="certificate-container">
        <div class="header">
            <h1>EDUSANNA</h1>
            <p>Online Learning</p>
            <p>Elevate Your Mind</p>
        </div>

        <div class="content">
            <div class="title">${isCertificate ? 'CERTIFICATE OF ACHIEVEMENT' : 'DIPLOMA'}</div>

            <div class="text-block">This Certifies That</div>
            <div class="student-name">${data.studentName}</div>

            <div class="text-block">Has Successfully Completed The</div>
            <div class="course-name">${data.courseName}</div>

            ${
              isCertificate
                ? '<div class="text-block">In Recognition Of Outstanding Achievement</div>'
                : '<div class="text-block">In Recognition Of Outstanding Achievement:</div>'
            }

            ${skillsList}

            <div class="certificate-id">Certificate ID: ${data.certificateId}</div>

            <div class="footer-text">
                <p>Issued by Edusanna - A Digital Learning Institution</p>
                <p style="margin-top: 10px;">This certificate can be verified on Edusanna Online Learning</p>
                <p style="margin-top: 10px;">Issued: ${data.completionDate}</p>
            </div>

            <div class="signature-section">
                <div class="signature-line">
                    <div style="height: 40px; border-top: 2px solid #1f2937; margin-bottom: 10px; width: 150px;"></div>
                    <p>Edusanna Founder</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
}

/**
 * Generate certificate and save as file
 * Uses html2pdf or similar library on client side
 */
export async function generateCertificatePDF(
  data: CertificateData,
  outputPath?: string
): Promise<Blob | null> {
  try {
    const html = generateCertificateHTML(data);

    // For client-side: return the HTML for pdf conversion library
    // For server-side: would need to use a library like puppeteer or weasyprint
    const blob = new Blob([html], { type: 'text/html' });
    return blob;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return null;
  }
}

/**
 * Prepare certificate data for HTML/PDF generation
 */
export function prepareCertificateData(payment: {
  student_name: string;
  course_name: string;
  certificate_id: string;
  certificate_type: string;
  created_at: string;
  skills?: string[];
}): CertificateData {
  return {
    studentName: payment.student_name,
    courseName: payment.course_name,
    certificateId: payment.certificate_id,
    completionDate: new Date(payment.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    certificateType: payment.certificate_type as 'certificate' | 'diploma',
    skills: payment.skills || [],
  };
}
