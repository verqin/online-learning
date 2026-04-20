import nodemailer from 'nodemailer'

// Create transporter - uses environment variables for security
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_FROM_EMAIL || 'edusannaonlinelearning@gmail.com',
    pass: process.env.SMTP_PASSWORD || '',
  },
})

// Generate random 6-digit code
export function generateTwoFACode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Send 2FA code via email
export async function sendTwoFAEmail(email: string, code: string): Promise<boolean> {
  try {
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'edusannaonlinelearning@gmail.com',
      to: email,
      subject: 'EDUSANNA Admin Login - Two-Factor Authentication Code',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 20px;
              }
              .container {
                max-width: 500px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
              }
              .header {
                text-align: center;
                margin-bottom: 30px;
              }
              .header h1 {
                color: #2d3748;
                margin: 0 0 10px 0;
              }
              .code-box {
                background: #f7fafc;
                border: 2px solid #667eea;
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                margin: 30px 0;
              }
              .code {
                font-size: 48px;
                font-weight: bold;
                color: #667eea;
                letter-spacing: 5px;
                font-family: 'Courier New', monospace;
              }
              .expiry {
                color: #718096;
                font-size: 14px;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                color: #718096;
                font-size: 12px;
                margin-top: 30px;
                border-top: 1px solid #e2e8f0;
                padding-top: 20px;
              }
              .warning {
                background: #fff5f5;
                border-left: 4px solid #f56565;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .warning p {
                color: #c53030;
                margin: 0;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>EDUSANNA Admin Portal</h1>
                <p style="color: #718096;">Two-Factor Authentication</p>
              </div>

              <p style="color: #2d3748; margin-bottom: 20px;">
                You requested to log in to your EDUSANNA admin account. Use the code below to verify your identity.
              </p>

              <div class="code-box">
                <p style="color: #718096; margin: 0 0 10px 0; font-size: 14px;">Your verification code is:</p>
                <div class="code">${code}</div>
                <p class="expiry">This code expires in 10 minutes</p>
              </div>

              <div class="warning">
                <p>
                  If you did not request this code, please ignore this email.
                  Do not share this code with anyone.
                </p>
              </div>

              <p style="color: #2d3748; font-size: 14px;">
                <strong>Security Tips:</strong>
                <ul style="color: #718096; font-size: 13px;">
                  <li>Never share your 2FA code with anyone</li>
                  <li>EDUSANNA staff will never ask for your code</li>
                  <li>Always verify the sender of such emails</li>
                </ul>
              </p>

              <div class="footer">
                <p>© 2026 EDUSANNA. All rights reserved.</p>
                <p>This is an automated message, please do not reply to this email.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    await transporter.sendMail(mailOptions)
    return true
  } catch (error) {
    console.error('Error sending 2FA email:', error)
    return false
  }
}

// Verify 2FA code (would check against stored code in production)
export function verify2FACode(inputCode: string, storedCode: string): boolean {
  return inputCode === storedCode
}
