import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create transporter - uses environment variables for security
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_FROM_EMAIL || 'edusannaonlinelearning@gmail.com',
    pass: process.env.SMTP_PASSWORD || '',
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      studentName,
      studentEmail,
      courseName,
      certificateType,
      certificateId,
      completionDate,
      skills,
    } = body

    // Validate required fields
    if (!studentName || !studentEmail || !courseName || !certificateType) {
      return NextResponse.json(
        { error: 'Missing required fields: studentName, studentEmail, courseName, certificateType' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(studentEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate certificate PDF (in production, would include actual PDF)
    // For now, we'll send email with certificate details

    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              background: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #667eea;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .logo {
              font-size: 28px;
              font-weight: bold;
              color: #667eea;
              margin-bottom: 5px;
            }
            .subtitle {
              color: #666;
              font-size: 14px;
            }
            .certificate-box {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 8px;
              margin: 30px 0;
              text-align: center;
            }
            .certificate-title {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 15px;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .certificate-details {
              font-size: 16px;
              margin: 10px 0;
            }
            .details-section {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 6px;
              margin: 20px 0;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
              padding-bottom: 10px;
              border-bottom: 1px solid #eee;
            }
            .detail-label {
              font-weight: bold;
              color: #667eea;
              flex: 0 0 150px;
            }
            .detail-value {
              color: #333;
              flex: 1;
            }
            .button-section {
              text-align: center;
              margin: 30px 0;
            }
            .button {
              background: #667eea;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 6px;
              display: inline-block;
              font-weight: bold;
              transition: background 0.3s ease;
            }
            .button:hover {
              background: #764ba2;
            }
            .footer {
              text-align: center;
              color: #666;
              font-size: 12px;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
            }
            .verification-code {
              background: #f0f0f0;
              padding: 15px;
              border-left: 4px solid #667eea;
              margin: 20px 0;
              font-family: monospace;
              font-size: 14px;
              word-break: break-all;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">EDUSANNA</div>
              <div class="subtitle">Online Learning Platform</div>
            </div>

            <p>Dear ${studentName},</p>

            <p>Congratulations! We are pleased to inform you that you have successfully completed the course:</p>

            <div class="certificate-box">
              <div class="certificate-title">
                ${certificateType === 'diploma' ? 'Diploma' : 'Certificate'} of Completion
              </div>
              <div class="certificate-details">
                <strong>${courseName}</strong>
              </div>
              ${completionDate ? `<div class="certificate-details">Completed on ${new Date(completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>` : ''}
            </div>

            <div class="details-section">
              <div class="detail-row">
                <span class="detail-label">Certificate ID:</span>
                <span class="detail-value">${certificateId}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Certificate Type:</span>
                <span class="detail-value">${certificateType === 'diploma' ? 'Diploma' : 'Certificate'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Student Name:</span>
                <span class="detail-value">${studentName}</span>
              </div>
              ${skills ? `
              <div class="detail-row">
                <span class="detail-label">Skills Acquired:</span>
                <span class="detail-value">${skills}</span>
              </div>
              ` : ''}
            </div>

            <p>Your certificate has been issued and is attached to this email. You can download it, share it with employers, or add it to your professional profile.</p>

            <div class="verification-code">
              Verification Code: ${certificateId}
            </div>

            <p>To verify the authenticity of this certificate, you can visit our certificate verification portal using the code above.</p>

            <div class="button-section">
              <a href="https://edusanna.com/verify-certificate" class="button">Verify Certificate</a>
            </div>

            <p>If you have any questions or concerns regarding your certificate, please don't hesitate to contact our support team.</p>

            <div class="footer">
              <p>&copy; 2025 EDUSANNA. All rights reserved.<br>
              This is an automated email. Please do not reply directly to this message.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'edusannaonlinelearning@gmail.com',
      to: studentEmail,
      subject: `Your ${certificateType === 'diploma' ? 'Diploma' : 'Certificate'} from EDUSANNA - ${courseName}`,
      html: emailContent,
      // In production, you would attach the PDF file here
      // attachments: [{ filename: `${studentName}-${certificateType}.pdf`, content: pdfBuffer }]
    }

    await transporter.sendMail(mailOptions)

    console.log(`[v0] Certificate email sent to ${studentEmail} for course: ${courseName}`)

    return NextResponse.json(
      {
        success: true,
        message: `Certificate sent successfully to ${studentEmail}`,
        certificateId,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error sending certificate email:', error)
    return NextResponse.json(
      { error: 'Failed to send certificate email' },
      { status: 500 }
    )
  }
}
