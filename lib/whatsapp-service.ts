/**
 * WhatsApp CallMeBot Integration Service
 * Sends WhatsApp messages via CallMeBot API for course completions and notifications
 */

const CALLMEBOT_API_URL = 'https://api.callmebot.com/whatsapp.php';

interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
}

interface WhatsAppResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Validates WhatsApp phone number format
 * Expected format: +country_code + number (e.g., +263712345678)
 */
function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^\+\d{1,3}\d{9,14}$/;
  return phoneRegex.test(phoneNumber);
}

/**
 * Sends a WhatsApp message via CallMeBot API
 */
export async function sendWhatsAppMessage(
  phoneNumber: string,
  message: string,
): Promise<WhatsAppResponse> {
  try {
    // Validate phone number
    if (!validatePhoneNumber(phoneNumber)) {
      console.error('[WhatsApp] Invalid phone number format:', phoneNumber);
      return {
        success: false,
        message: 'Invalid phone number format',
        error: 'Phone number must be in format: +country_code + number',
      };
    }

    // Build API request
    const params = new URLSearchParams({
      phone: phoneNumber,
      text: message,
      apikey: process.env.CALLMEBOT_API_KEY || 'test', // Test key for development
    });

    const response = await fetch(`${CALLMEBOT_API_URL}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('[WhatsApp] API error:', response.status, response.statusText);
      return {
        success: false,
        message: `API returned status ${response.status}`,
        error: response.statusText,
      };
    }

    const data = await response.text();
    console.log('[WhatsApp] Message sent successfully:', phoneNumber);

    return {
      success: true,
      message: 'WhatsApp message sent successfully',
    };
  } catch (error) {
    console.error('[WhatsApp] Error sending message:', error);
    return {
      success: false,
      message: 'Failed to send WhatsApp message',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Sends course completion notification
 */
export async function sendCourseCompletionNotification(
  phoneNumber: string,
  userName: string,
  courseName: string,
  level: 'certificate' | 'diploma',
  score: number,
): Promise<WhatsAppResponse> {
  const levelText = level === 'certificate' ? 'Certificate' : 'Diploma';
  const message = `🎉 Congratulations ${userName}!\n\nYou have successfully completed the ${courseName} ${levelText} course with a score of ${score}%.\n\nYour credential is now ready for download. Visit Edusanna to claim your certificate!\n\n📚 Keep learning with Edusanna`;

  return sendWhatsAppMessage(phoneNumber, message);
}

/**
 * Sends certificate ready notification
 */
export async function sendCertificateReadyNotification(
  phoneNumber: string,
  userName: string,
  courseName: string,
  certificateId: string,
): Promise<WhatsAppResponse> {
  const message = `✅ Hi ${userName}!\n\nYour ${courseName} Certificate is ready for download!\n\nCertificate ID: ${certificateId}\n\nVisit your dashboard to download it now.\n\n🎓 Edusanna`;

  return sendWhatsAppMessage(phoneNumber, message);
}

/**
 * Sends diploma ready notification
 */
export async function sendDiplomaReadyNotification(
  phoneNumber: string,
  userName: string,
  courseName: string,
  diplomaId: string,
): Promise<WhatsAppResponse> {
  const message = `🎓 Hi ${userName}!\n\nYour ${courseName} Diploma is ready for download!\n\nDiploma ID: ${diplomaId}\n\nVisit your dashboard to download it now.\n\n📚 Edusanna - Your Path to Excellence`;

  return sendWhatsAppMessage(phoneNumber, message);
}

/**
 * Sends important course update notification
 */
export async function sendCourseUpdateNotification(
  phoneNumber: string,
  userName: string,
  updateTitle: string,
  updateMessage: string,
): Promise<WhatsAppResponse> {
  const message = `📢 Hi ${userName}!\n\n${updateTitle}\n\n${updateMessage}\n\n👉 Log in to Edusanna to learn more`;

  return sendWhatsAppMessage(phoneNumber, message);
}
