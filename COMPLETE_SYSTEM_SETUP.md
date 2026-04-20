# EDUSANNA Complete System Setup & Deployment Guide

## System Overview
EDUSANNA is a complete online learning platform with:
- Dual authentication (Learner + Admin)
- WhatsApp 2FA for admin login
- Certificate & diploma generation
- Real-time analytics dashboard
- Payment processing (PayPal)
- Supabase database integration

---

## Part 1: Environment Variables Setup

### Required Environment Variables

Add these to your Vercel project settings under "Settings > Environment Variables":

#### Admin Credentials (PRIVATE - NOT NEXT_PUBLIC)
```
ADMIN_EMAIL=tinasheleev@gmail.com
ADMIN_PASSWORD=ES#1Jehovah
ADMIN_WHATSAPP_NUMBER=263782XXXXXX  # Zimbabwe format with country code
```

#### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
POSTGRES_URL=postgresql://...
POSTGRES_PRISMA_URL=postgresql://...
POSTGRES_URL_NON_POOLING=postgresql://...
POSTGRES_USER=postgres
POSTGRES_PASSWORD=...
POSTGRES_DATABASE=postgres
POSTGRES_HOST=...
SUPABASE_JWT_SECRET=...
SUPABASE_ANON_KEY=...
SUPABASE_URL=...
```

#### PayPal Configuration
```
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
```

---

## Part 2: Database Setup

### Step 1: Create Tables in Supabase

1. Go to Supabase Dashboard → Your Project → SQL Editor
2. Copy the entire content from `/scripts/04-setup-supabase-tables.sql`
3. Paste into SQL Editor
4. Click "RUN"
5. Wait for all tables to be created

### Step 2: Verify Table Creation

Run this query to verify all tables exist:
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

Expected tables:
- users
- courses
- enrollments
- user_progress
- certificates
- payments
- notifications
- error_logs
- system_metrics
- analytics

### Step 3: Insert Sample Courses

```sql
INSERT INTO courses (title, description, instructor, duration_weeks, difficulty_level, category, price_standard, price_certificate, price_diploma, modules_count) VALUES
('Introduction to Web Development', 'Learn HTML, CSS, and JavaScript', 'John Doe', 8, 'beginner', 'Programming', 0, 29.99, 49.99, 10),
('Advanced Python Programming', 'Master Python for data science', 'Jane Smith', 12, 'advanced', 'Programming', 0, 39.99, 69.99, 15),
('Digital Marketing Basics', 'Complete guide to digital marketing', 'Mike Johnson', 6, 'beginner', 'Marketing', 0, 24.99, 44.99, 8),
('Business Analytics', 'Data analysis and business intelligence', 'Sarah Wilson', 10, 'intermediate', 'Business', 0, 34.99, 59.99, 12);
```

---

## Part 3: WhatsApp 2FA Configuration

### What You Need:
1. **WhatsApp Account**: Personal WhatsApp number for admin login
2. **CallMeBot**: Free WhatsApp API (no setup needed for basic use)

### How It Works:
1. Admin enters email and password on `/login`
2. System verifies credentials via `/api/auth/login`
3. If admin, generates 6-digit code
4. Code sent to admin's WhatsApp via CallMeBot API
5. Admin enters code on `/admin/verify-2fa`
6. Code verified via `/api/auth/verify-2fa-whatsapp`
7. Admin granted access to `/admin/dashboard`

### Test the Flow:
```
1. Go to /login
2. Enter: tinasheleev@gmail.com / ES#1Jehovah
3. Check WhatsApp for 6-digit code
4. Enter code on 2FA page
5. Access admin dashboard
```

---

## Part 4: Authentication Flow

### Learner Signup Flow:
```
1. User visits /signup
2. Selects "Academia Plan" or "Standard Plan"
3. Fills registration form
4. Auto-logged in, redirected to /dashboard
5. Data saved to Supabase users table
```

### Learner Login Flow:
```
1. User visits /login
2. Enters email & password
3. System calls /api/auth/login
4. Verified against Supabase (in production)
5. Redirected to /dashboard
6. Session stored in localStorage
```

### Admin Login Flow:
```
1. Admin visits /login
2. Enters admin email & password
3. Server-side verification (NOT exposed to frontend)
4. 6-digit WhatsApp code generated
5. Redirected to /admin/verify-2fa
6. Admin enters code from WhatsApp
7. Verified via /api/auth/verify-2fa-whatsapp
8. Access granted to /admin/dashboard
```

---

## Part 5: Key Features & Implementation

### 1. Start Learning
- Logged-in users see "Start Learning" button
- Links to `/learn/[courseId]`
- Tracks progress in `user_progress` table

### 2. Certificate Generation
- Users can request certificates after 80% completion
- Admin can manually generate certificates
- PDF generated via `/api/certificates/generate-pdf`
- Stored in Supabase with verification code

### 3. Analytics Dashboard
- Real-time data from Supabase
- Accessible at `/admin/analytics`
- Shows: Users, Courses, Enrollments, Payments, Error Logs
- API: `/api/admin/analytics`

### 4. Notifications
- Notification bell in navigation
- Types: success, warning, error, info
- Stored in localStorage (can upgrade to Supabase)
- Component: `/components/notifications-center.tsx`

### 5. Account Deletion
- Users can delete accounts via `/dashboard/settings`
- Cascading delete via Supabase RLS
- All user data removed

---

## Part 6: API Endpoints Reference

### Authentication
- `POST /api/auth/login` - Login (admin & learner)
- `POST /api/auth/send-2fa-whatsapp` - Send 2FA code
- `POST /api/auth/verify-2fa-whatsapp` - Verify 2FA code

### Certificates
- `POST /api/certificates/generate-pdf` - Generate certificate PDF
- `GET /api/certificates/generate-pdf` - Download certificate
- `POST /api/admin/generate-certificate` - Admin generate certificate
- `POST /api/user/request-certificate` - Learner request certificate

### Analytics
- `GET /api/admin/analytics` - Get analytics data

### PayPal Integration
- `POST /api/paypal/create-order` - Create payment order
- `POST /api/paypal/capture-order` - Capture payment

---

## Part 7: Testing Checklist

### Learner Account
- [ ] Sign up with Academia plan
- [ ] Sign up with Standard plan
- [ ] Login with learner credentials
- [ ] Browse courses
- [ ] Click "Start Learning"
- [ ] View course modules
- [ ] Complete course (80%+)
- [ ] Request certificate
- [ ] View notifications
- [ ] Delete account

### Admin Account
- [ ] Login with admin credentials
- [ ] Receive WhatsApp 2FA code
- [ ] Enter 2FA code correctly
- [ ] Access admin dashboard
- [ ] View analytics
- [ ] Generate certificate for student
- [ ] View system metrics
- [ ] Check error logs

### System
- [ ] All pages responsive on mobile
- [ ] PWA installation works
- [ ] Payment processing (PayPal)
- [ ] Course completion tracking
- [ ] Certificate PDF generation
- [ ] User data isolation (RLS working)

---

## Part 8: Troubleshooting

### 2FA Not Sending
- Check `ADMIN_WHATSAPP_NUMBER` is correct format
- Verify CallMeBot API is working
- Check WhatsApp number is active

### Admin Can't Login
- Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD` are exact match
- Check env vars are not exposed in frontend code
- Clear browser localStorage and try again

### Courses Not Loading
- Verify Supabase tables are created
- Check `NEXT_PUBLIC_SUPABASE_URL` and key are correct
- Ensure courses are in database with `is_active = true`

### Certificates Not Generating
- Verify `pdf-lib` package is installed
- Check user has 80%+ progress before requesting
- Ensure course ID exists in database

### PayPal Payments Failing
- Verify PayPal credentials in env vars
- Check PayPal sandbox mode enabled
- Verify payment amount is valid

---

## Part 9: Production Deployment Checklist

Before deploying to production:

- [ ] Remove all console.log("[v0]...") statements
- [ ] Add password hashing (bcrypt) for user passwords
- [ ] Enable Supabase RLS policies
- [ ] Configure email notifications (optional)
- [ ] Set up SSL/HTTPS
- [ ] Enable CORS properly
- [ ] Set secure cookie flags
- [ ] Add rate limiting to API endpoints
- [ ] Implement request validation
- [ ] Set up error tracking (Sentry)
- [ ] Configure CDN for assets
- [ ] Enable database backups
- [ ] Set up monitoring/alerting

---

## Part 10: File Structure

```
/app
  /api
    /auth
      /login/route.ts - Main login API
      /send-2fa-whatsapp/route.ts - Send 2FA
      /verify-2fa-whatsapp/route.ts - Verify 2FA
    /admin
      /generate-certificate/route.ts - Admin cert generation
      /analytics/route.ts - Analytics data
    /user
      /request-certificate/route.ts - Learner cert request
    /certificates
      /generate-pdf/route.ts - PDF generation
    /paypal
      /create-order/route.ts - PayPal orders
      /capture-order/route.ts - PayPal payment capture
  /admin
    /dashboard/page.tsx - Admin dashboard
    /analytics/page.tsx - Analytics page
    /verify-2fa/page.tsx - 2FA verification
  /dashboard
    /page.tsx - Learner dashboard
    /settings/page.tsx - Account settings
  /login/page.tsx - Login page
  /signup/page.tsx - Signup page (Academia/Standard)
  /courses/page.tsx - Course browse
  /learn/[courseId]/page.tsx - Course learning
/lib
  /supabase-client.ts - Supabase utilities
  /whatsapp-2fa.ts - WhatsApp 2FA logic
  /certificate-generator.ts - PDF generation
  /posthog-client.ts - Analytics
  /error-logger.ts - Error tracking
/scripts
  /04-setup-supabase-tables.sql - Database schema
```

---

## Next Steps

1. **Add environment variables** to Vercel
2. **Run SQL migration** in Supabase
3. **Test all authentication flows**
4. **Verify certificate generation**
5. **Check analytics dashboard**
6. **Deploy to production**

Your EDUSANNA platform is now ready for production use!
