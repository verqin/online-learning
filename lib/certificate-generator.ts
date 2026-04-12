import { PDFDocument, PDFPage, rgb, degrees } from 'pdf-lib';
import { readFileSync } from 'fs';
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
 * Generate certificate PDF using pdf-lib
 * Server-side only, no DOM APIs
 */
export async function generateCertificatePDF(data: CertificateData): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([850, 650]);

  const isCertificate = data.certificateType === 'certificate';

  // Add background color
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 850,
    height: 650,
    color: rgb(1, 1, 1), // Dark background
  });

  // Add decorative border
  page.drawRectangle({
    x: 20,
    y: 20,
    width: 810,
    height: 610,
    borderColor: rgb(1, 0.8, 0), // Gold border
    borderWidth: 3,
  });

  page.drawRectangle({
    x: 30,
    y: 30,
    width: 790,
    height: 590,
    borderColor: rgb(0.6, 0.2, 1), // Purple border
    borderWidth: 2,
  });

  // Add white background for content
  page.drawRectangle({
    x: 40,
    y: 40,
    width: 770,
    height: 570,
    color: rgb(1, 1, 1),
  });

  // Draw main content
  const fontSize = 24;
  const titleSize = 36;
  const smallSize = 14;

  // Header section
  page.drawText('EDUSANNA', {
    x: 425,
    y: 580,
    size: 32,
    color: rgb(1, 0.8, 0),
    align: 'center',
  });

  page.drawText('Online Learning Platform', {
    x: 425,
    y: 555,
    size: 14,
    color: rgb(0.6, 0.2, 1),
    align: 'center',
  });

  page.drawText('Elevate Your Mind', {
    x: 425,
    y: 540,
    size: 14,
    color: rgb(0.6, 0.2, 1),
    align: 'center',
  });

  // Title
  page.drawText(
    isCertificate ? 'CERTIFICATE OF ACHIEVEMENT' : 'DIPLOMA',
    {
      x: 425,
      y: 490,
      size: titleSize,
      color: rgb(0, 0, 0),
      align: 'center',
    }
  );

  // Student name
  page.drawText('This Certifies That', {
    x: 425,
    y: 450,
    size: fontSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  page.drawText(data.studentName, {
    x: 425,
    y: 415,
    size: 28,
    color: rgb(0.6, 0.2, 1),
    align: 'center',
  });

  // Course information
  page.drawText('Has Successfully Completed The', {
    x: 425,
    y: 370,
    size: fontSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  page.drawText(data.courseName, {
    x: 425,
    y: 335,
    size: 26,
    color: rgb(0.6, 0.2, 1),
    align: 'center',
  });

  // Skills section (for diploma only)
  let yPosition = 300;
  if (!isCertificate && data.skills && data.skills.length > 0) {
    page.drawText('In Recognition Of Outstanding Achievement:', {
      x: 425,
      y: yPosition,
      size: fontSize,
      color: rgb(0, 0, 0),
      align: 'center',
    });

    yPosition -= 35;
    const skillsPerRow = 2;
    const skillWidth = 320;
    const skillHeight = 30;

    for (let i = 0; i < data.skills.length; i++) {
      const row = Math.floor(i / skillsPerRow);
      const col = i % skillsPerRow;
      const x = 180 + col * (skillWidth + 40);
      const y = yPosition - row * (skillHeight + 15);

      page.drawRectangle({
        x,
        y: y - skillHeight,
        width: skillWidth,
        height: skillHeight,
        borderColor: rgb(0.6, 0.2, 1),
        borderWidth: 1,
        color: rgb(0.96, 0.95, 1),
      });

      page.drawText(data.skills[i], {
        x: x + 10,
        y: y - 22,
        size: smallSize,
        color: rgb(0, 0, 0),
      });
    }
  } else {
    page.drawText('In Recognition Of Outstanding Achievement', {
      x: 425,
      y: yPosition,
      size: fontSize,
      color: rgb(0, 0, 0),
      align: 'center',
    });
  }

  // Certificate ID and details
  page.drawText(`Certificate ID: ${data.certificateId}`, {
    x: 425,
    y: 150,
    size: smallSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  page.drawText('Issued by Edusanna - A Digital Learning Institution', {
    x: 425,
    y: 130,
    size: smallSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  page.drawText('This certificate can be verified on Edusanna Online Learning', {
    x: 425,
    y: 110,
    size: smallSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  page.drawText(`Issued: ${data.completionDate}`, {
    x: 425,
    y: 70,
    size: smallSize,
    color: rgb(0, 0, 0),
    align: 'center',
  });

  // Generate PDF bytes
  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

/**
 * Generate certificate text content
 */
export function generateCertificateText(data: CertificateData): string {
  const isCertificate = data.certificateType === 'certificate';

  let text = `EDUSANNA
Online Learning Platform
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
 * Generate certificate HTML for preview
 */
export function generateCertificateHTML(data: CertificateData): string {
  const isCertificate = data.certificateType === 'certificate';

  const skillsList =
    data.skills && data.skills.length > 0
      ? `<div style="margin-top: 20px; text-align: center;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px auto; max-width: 600px;">
          ${data.skills
            .map(
              (skill) =>
                `<div style="padding: 10px; border: 1px solid #a855f7; border-radius: 8px; background: #f5f3ff; color: #333; font-weight: 500;">
              ${skill}
            </div>`
            )
            .join('')}
        </div>
      </div>`
      : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Georgia', serif;
          margin: 0;
          padding: 20px;
          background: #f0f0f0;
        }
        .certificate {
          width: 850px;
          height: 650px;
          margin: 0 auto;
          background: linear-gradient(135deg, #1e1b4b 0%, #5b21b6 50%, #1e1b4b 100%);
          border: 3px solid #d4af37;
          position: relative;
          padding: 40px;
          box-sizing: border-box;
          color: #333;
        }
        .certificate::after {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid #a855f7;
          pointer-events: none;
        }
        .content {
          position: relative;
          z-index: 1;
          background: white;
          padding: 40px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header h2 {
          color: #d4af37;
          font-size: 24px;
          margin: 0;
        }
        .header p {
          color: #a855f7;
          margin: 5px 0;
          font-size: 12px;
        }
        .title {
          text-align: center;
          font-size: 36px;
          color: #000;
          margin: 20px 0;
          letter-spacing: 2px;
        }
        .body-text {
          text-align: center;
          font-size: 18px;
          margin: 15px 0;
        }
        .student-name {
          font-size: 28px;
          color: #a855f7;
          font-weight: bold;
          margin: 20px 0;
        }
        .course-name {
          font-size: 24px;
          color: #a855f7;
          font-weight: bold;
          margin: 15px 0;
        }
        .skills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin: 20px 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .skill {
          padding: 8px;
          border: 1px solid #a855f7;
          border-radius: 4px;
          background: #f5f3ff;
          text-align: center;
          font-size: 12px;
          color: #333;
        }
        .footer-text {
          text-align: center;
          font-size: 12px;
          color: #666;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="content">
          <div class="header">
            <h2>EDUSANNA</h2>
            <p>Online Learning Platform</p>
            <p>Elevate Your Mind</p>
          </div>

          <div class="title">${isCertificate ? 'CERTIFICATE OF ACHIEVEMENT' : 'DIPLOMA'}</div>

          <div class="body-text">This Certifies That</div>
          <div class="student-name">${data.studentName}</div>
          <div class="body-text">Has Successfully Completed The</div>
          <div class="course-name">${data.courseName}</div>

          ${skillsList}

          <div class="body-text">In Recognition Of Outstanding Achievement</div>

          <div class="footer-text">
            <div>Certificate ID: ${data.certificateId}</div>
            <div style="margin-top: 10px;">Issued by Edusanna - A Digital Learning Institution</div>
            <div>This certificate can be verified on Edusanna Online Learning</div>
            <div style="margin-top: 10px;">Issued: ${data.completionDate}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}
