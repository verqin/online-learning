# Edusanna Certificate & Diploma Payment System - Complete Setup Guide

## Overview

This guide covers the complete setup of the certificate and diploma payment system using PayPal for payments and Supabase for data management.

## Prerequisites

Before starting, ensure you have:
- Vercel project connected to GitHub
- Supabase project with authentication configured
- PayPal Merchant Account (Business account)
- CallMeBot WhatsApp account (for notifications)

## Environment Variables Required

Add these to your Vercel project settings (Settings → Environment Variables):

### PayPal Configuration
```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_SECRET=your_paypal_secret_here
PAYPAL_API_BASE=https://api.paypal.com
```

### WhatsApp Configuration (Optional but Recommended)
```
CALLMEBOT_API_KEY=your_callmebot_api_key
ADMIN_WHATSAPP_PHONE=+263712345678
```

### App Configuration
```
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Getting PayPal Credentials

1. Go to [PayPal Developer Dashboard](https://developer.paypal.com)
2. Log in with your PayPal merchant account
3. Navigate to Apps & Credentials
4. Create a new app
5. Copy the `Client ID` → Set as `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
6. Copy the `Secret` → Set as `PAYPAL_SECRET`

## Setting Up Supabase Database

### 1. Run the SQL Migration

Copy the SQL from `/scripts/setup-certificate-payments.sql` and run it in your Supabase SQL editor:

```sql
-- The script creates:
-- - certificate_payments table
-- - Indexes for performance
-- - Row Level Security policies
-- - Automated timestamp updates
```

**Steps:**
1. Open your Supabase project
2. Go to SQL Editor
3. Create a new query
4. Paste the entire content from `scripts/setup-certificate-payments.sql`
5. Click Execute
6. Verify the table was created

### 2. Verify the Table Structure

The `certificate_payments` table includes:
- `id` (UUID) - Primary key
- `user_id` (UUID) - References auth.users
- `student_name` (VARCHAR) - Student's full name
- `email` (VARCHAR) - Student's email
- `course_id` (UUID) - Course reference
- `course_name` (VARCHAR) - Course name for records
- `certificate_type` (VARCHAR) - 'certificate' or 'diploma'
- `amount` (DECIMAL) - Payment amount
- `paypal_order_id` (VARCHAR) - PayPal transaction ID
- `certificate_id` (VARCHAR) - Unique certificate ID (CERT-timestamp-random)
- `payment_status` (VARCHAR) - pending, paid_pending_admin, noted, certificate_sent
- `created_at` (TIMESTAMP) - Payment timestamp
- `updated_at` (TIMESTAMP) - Last update
- `notes` (TEXT) - Admin notes

## Getting CallMeBot WhatsApp API Key

1. Go to [CallMeBot](https://callmebot.com)
2. Click on WhatsApp
3. Follow their registration process
4. Copy your API key
5. Set as `CALLMEBOT_API_KEY` in Vercel

Note: Admin WhatsApp notifications require both `CALLMEBOT_API_KEY` and `ADMIN_WHATSAPP_PHONE`.

## System Architecture

### Payment Flow

```
1. User completes course
   ↓
2. User navigates to /certificate-payment
   ↓
3. System loads completed courses from Supabase
   ↓
4. User selects course and credential type (Certificate $12 or Diploma $18)
   ↓
5. PayPal buttons rendered
   ↓
6. User clicks "Pay Now"
   ↓
7. createOrder API called → Creates PayPal order
   ↓
8. PayPal checkout opens
   ↓
9. User completes payment
   ↓
10. onApprove callback → Calls captureOrder API
    ↓
11. captureOrder API:
    - Verifies payment with PayPal
    - Checks for duplicate payments
    - Stores payment record in Supabase
    - Sends WhatsApp notification to admin
    ↓
12. Redirects to /certificate-success
    ↓
13. Admin reviews payment at /admin/payments
    ↓
14. Admin marks as "Noted" (verified payment)
    ↓
15. Admin marks as "Certificate Sent" (PDF generated)
    ↓
16. User receives email with certificate PDF
```

### File Structure

```
app/
├── api/
│   └── paypal/
│       ├── create-order/route.ts          # Creates PayPal order
│       └── capture-order/route.ts         # Captures & stores payment
│   └── certificates/
│       └── generate-pdf/route.ts          # Generates certificate PDF
├── certificate-payment/page.tsx           # Payment form
├── certificate-success/page.tsx           # Success page
└── admin/
    └── payments/page.tsx                  # Admin dashboard

lib/
├── payment-utils.ts                       # Database utilities
├── whatsapp-service.ts                    # WhatsApp notifications
└── certificate-generator.ts               # Certificate HTML generation

components/
└── certificate-viewer.tsx                 # Certificate display

scripts/
└── setup-certificate-payments.sql         # Database migration

public/
├── certificate-skeleton.png               # Certificate template
└── diploma-skeleton.png                   # Diploma template
```

## API Endpoints

### POST /api/paypal/create-order
Creates a PayPal order for the specified amount.

**Request:**
```json
{
  "amount": 12,
  "courseId": "uuid",
  "courseName": "Course Name",
  "certificateType": "certificate"
}
```

**Response:**
```json
{
  "orderId": "paypal_order_id",
  "status": "CREATED"
}
```

### POST /api/paypal/capture-order
Captures the payment and stores payment record.

**Request:**
```json
{
  "orderId": "paypal_order_id",
  "userId": "user_uuid",
  "studentName": "John Doe",
  "email": "john@example.com",
  "courseId": "course_uuid",
  "courseName": "Course Name",
  "certificateType": "diploma",
  "amount": 18
}
```

**Response:**
```json
{
  "success": true,
  "paymentId": "payment_uuid",
  "certificateId": "CERT-timestamp-random",
  "orderId": "paypal_order_id",
  "amount": "18.00",
  "currency": "USD"
}
```

## Payment Statuses

- **pending** - Initial status (rarely used)
- **paid_pending_admin** - Payment received, awaiting admin verification
- **noted** - Admin has verified the payment
- **certificate_sent** - Certificate PDF has been generated and sent

## Admin Dashboard Features

### Location: `/admin/payments`

#### Features:
- View all pending and reviewed payments
- Filter by status (Pending Review, Reviewed, Sent)
- View detailed payment information
- Mark payments as "Noted" (verified)
- Mark payments as "Certificate Sent" (processed)
- Statistics dashboard showing:
  - Total payments
  - Pending review count
  - Reviewed count
  - Certificate sent count

#### Security:
- Requires Supabase authentication
- RLS policies enforce data access control
- Service role required for updates

## Testing with PayPal Sandbox

To test with sandbox credentials:

1. Update `PAYPAL_API_BASE` to `https://api.sandbox.paypal.com`
2. Use sandbox client ID and secret from PayPal Developer Dashboard
3. Use PayPal sandbox test accounts for testing
4. Payments will NOT be charged during sandbox testing

## Troubleshooting

### PayPal Errors
- **Credentials not configured**: Ensure PAYPAL_SECRET is set in Vercel
- **Failed to create order**: Check API endpoint and request format
- **Payment verification failed**: Verify PayPal is in production mode

### Database Errors
- **Table not found**: Run the SQL migration script
- **Permission denied**: Check RLS policies and user authentication
- **Duplicate payment error**: User already has this credential

### WhatsApp Notifications
- **API key not configured**: Set CALLMEBOT_API_KEY in Vercel
- **Invalid phone number**: Ensure format is +country_code + number
- **Message not sent**: Check CallMeBot account balance/status

## Email Integration (Future)

To add email notifications:

1. Connect SendGrid or Resend
2. Create email template for certificate sent
3. Call email service from admin dashboard when marking "Certificate Sent"

## Future Enhancements

1. **Automated Certificate Generation**
   - Generate PDF automatically after payment
   - Email certificate to user immediately

2. **Certificate Verification**
   - Public verification page to validate certificate
   - QR code on certificate linking to verification page

3. **Bulk Certifications**
   - Admin ability to mark multiple payments as sent
   - Batch email sending

4. **Payment Analytics**
   - Revenue dashboard
   - Payment trends
   - Course performance metrics

5. **Refund System**
   - PayPal refund integration
   - Refund history tracking

## Security Best Practices

✅ Implemented:
- PayPal secret stored server-side only
- Server-side payment verification
- Duplicate payment prevention
- User RLS policies in Supabase
- CORS protection on API routes

⚠️ Recommended:
- Enable 2FA on PayPal merchant account
- Monitor PayPal transactions regularly
- Review admin access logs
- Set up email alerts for large transactions
- Regular security audits

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review PayPal API documentation
3. Check Supabase RLS policies
4. Review server logs in Vercel

---

**Last Updated:** 2025
**Version:** 1.0
