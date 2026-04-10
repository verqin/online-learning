# Certificate Payment System Setup Guide

## Overview
This guide walks you through setting up the complete certificate and diploma payment system for Edusanna using PayPal integration.

## Environment Variables Required

Add these to your `.env.local` file:

```bash
# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_SECRET=your_paypal_secret_here

# App URL (for PayPal redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000  # Use your production URL in production

# Supabase (Already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# WhatsApp Notifications (Optional)
CALLMEBOT_API_KEY=your_callmebot_key
ADMIN_WHATSAPP_PHONE=+1234567890  # Admin phone number for alerts
```

## Database Setup

Run this SQL in your Supabase project:

```sql
-- Create certificate_payments table
CREATE TABLE certificate_payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  course_id TEXT NOT NULL,
  course_name TEXT NOT NULL,
  certificate_type TEXT NOT NULL CHECK (certificate_type IN ('certificate', 'diploma')),
  amount DECIMAL(10, 2) NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid_pending_admin', 'noted', 'certificate_sent')),
  paypal_order_id TEXT UNIQUE,
  certificate_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_certificate_payments_user_id ON certificate_payments(user_id);
CREATE INDEX idx_certificate_payments_status ON certificate_payments(payment_status);
CREATE INDEX idx_certificate_payments_certificate_id ON certificate_payments(certificate_id);

-- Enable RLS
ALTER TABLE certificate_payments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own payments"
  ON certificate_payments
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admin can view all payments"
  ON certificate_payments
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );

CREATE POLICY "Service can insert payments"
  ON certificate_payments
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admin can update payments"
  ON certificate_payments
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.raw_user_meta_data->>'role' = 'admin'
    )
  );
```

## PayPal Setup

### 1. Create PayPal Sandbox Account
- Go to [PayPal Developer Dashboard](https://developer.paypal.com)
- Create a sandbox business account
- Get your Client ID and Secret

### 2. Add Environment Variables
```bash
NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_SANDBOX_CLIENT_ID
PAYPAL_SECRET=YOUR_SANDBOX_SECRET
```

### 3. Test Payment Flow
- Go to `/certificate-payment` (after course completion)
- Select a course and certificate type
- Click PayPal button
- Use sandbox credentials to test

## Features Implemented

### 1. Certificate Payment Page (`/certificate-payment`)
- Auto-fetches completed courses
- Dropdown selector for course selection
- Certificate ($12) or Diploma ($18) selection
- Real-time price calculation
- PayPal Smart Buttons integration

### 2. PayPal Integration
- **Create Order** (`/api/paypal/create-order`)
  - Generates PayPal order with amount
  - Returns order ID for front-end processing

- **Capture Order** (`/api/paypal/capture-order`)
  - Captures payment from PayPal
  - Verifies payment status
  - Prevents duplicate payments
  - Generates unique certificate ID
  - Stores payment record in database
  - Sends WhatsApp notification to admin

### 3. Success Page (`/certificate-success`)
- Displays payment confirmation
- Shows certificate ID
- Outlines next steps
- Links back to dashboard

### 4. Admin Dashboard (`/admin/payments`)
- View all pending payments
- Table with student info, course, amount, status
- Mark payment as "Noted"
- Mark as "Certificate Sent"
- View payment details in modal
- Real-time status updates

### 5. Certificate/Diploma Generation
- HTML-based certificate design
- Supports both certificate and diploma layouts
- Skills display in columns for diplomas
- Unique certificate ID per payment
- Download as PDF functionality

### 6. User Payment History
- View in user dashboard
- See payment status
- Preview certificate
- Download PDF when ready

## Security Features

1. **Server-Side Payment Verification**
   - PayPal API verification on capture
   - Prevents tampering with amounts

2. **Duplicate Payment Prevention**
   - Checks for existing payments before processing
   - Blocks duplicate certificate requests

3. **Course Completion Validation**
   - Only allows payment for 100% completed courses
   - Checks user progress before enabling payment

4. **Database Security**
   - RLS policies for user data isolation
   - Admin-only access to payment management

5. **Environment Variable Protection**
   - PayPal secret never exposed to frontend
   - Uses API routes for verification

## File Structure

```
app/
├── api/
│   └── paypal/
│       ├── create-order/route.ts
│       └── capture-order/route.ts
├── certificate-payment/
│   └── page.tsx
├── certificate-success/
│   └── page.tsx
└── admin/
    └── payments/
        └── page.tsx

lib/
├── payment-utils.ts
├── certificate-generator.ts
└── whatsapp-service.ts

components/
└── certificate-viewer.tsx

public/
├── certificate-skeleton.png
└── diploma-skeleton.png
```

## Testing Checklist

- [ ] Environment variables configured
- [ ] Database tables created
- [ ] PayPal Client ID and Secret added
- [ ] User can access `/certificate-payment`
- [ ] Can select completed course
- [ ] Can select certificate type
- [ ] PayPal button renders
- [ ] Can complete test payment
- [ ] Payment recorded in database
- [ ] Redirect to success page
- [ ] Admin can view payments
- [ ] Admin can update payment status
- [ ] WhatsApp notification sent (if configured)
- [ ] Certificate can be previewed
- [ ] Certificate can be downloaded as PDF

## Troubleshooting

### PayPal Button Not Rendering
- Check `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set
- Verify script loads: Check browser console for PayPal SDK errors

### Payment Fails
- Ensure sandbox credentials are correct
- Check PayPal order creation response
- Verify `PAYPAL_SECRET` is correct

### Database Insert Fails
- Verify `certificate_payments` table exists
- Check Supabase connection
- Ensure RLS policies are correct

### WhatsApp Not Sending
- Verify `CALLMEBOT_API_KEY` is set
- Check admin phone format: `+countrycode` + number
- Test with curl: `curl "https://api.callmebot.com/whatsapp.php?phone=+263...&text=test"`

## Production Checklist

- [ ] Switch to PayPal Live credentials
- [ ] Update `NEXT_PUBLIC_APP_URL` to production domain
- [ ] Test full payment flow with real PayPal
- [ ] Set up SSL certificate
- [ ] Configure proper error logging
- [ ] Set up email notifications for admins
- [ ] Test admin dashboard access controls
- [ ] Configure WhatsApp with real admin phone
- [ ] Set up certificate email delivery
- [ ] Test PDF generation performance
- [ ] Monitor payment status updates
- [ ] Set up backup for certificate records

## API Endpoints

### POST /api/paypal/create-order
```json
{
  "amount": 12,
  "courseId": "course-123",
  "courseName": "Python Basics",
  "certificateType": "certificate"
}
```

### POST /api/paypal/capture-order
```json
{
  "orderId": "paypal-order-id",
  "userId": "user-123",
  "studentName": "John Doe",
  "email": "john@example.com",
  "courseId": "course-123",
  "courseName": "Python Basics",
  "certificateType": "certificate",
  "amount": 12
}
```

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review console logs
3. Check PayPal API response codes
4. Verify environment variables
5. Test with sandbox credentials first

---

System Version: 1.0.0
Last Updated: 2026
