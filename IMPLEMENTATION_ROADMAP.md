# EDUSANNA IMPLEMENTATION ROADMAP

## PHASE 1: CRITICAL FIXES (COMPLETED)

### ✅ Logo & Header Fixes
- [x] Logo centering in circular white frame (object-contain + padding)
- [x] Mobile header text visibility ("EDUSANNA" "Elevate Your Mind" now shows on all screens)
- [x] Footer logo updated to use new logo file
- [x] All page headers (home, login, signup, dashboard, courses) updated

### ✅ PWA & App Installation
- [x] Enhanced PWA Install Prompt component
- [x] Added to root layout for global availability
- [x] iOS instructions included
- [x] 7-day dismissal cooldown implemented
- [x] Offline capability messaging

### ✅ Admin Authentication Setup
- [x] Updated admin credentials to: tinasheleev@gmail.com / ES#1Jehovah
- [x] Using environment variables (NEXT_PUBLIC_ADMIN_EMAIL, NEXT_PUBLIC_ADMIN_PASSWORD)
- [x] 2FA verification flow implemented
- [x] Redirect to /admin/verify-2fa after login

### ✅ Session Persistence
- [x] Created auth-persistence.ts utility library
- [x] Session storage with 30-day timeout
- [x] Migration support for old localStorage format
- [x] Session refresh mechanism
- [x] Proper session validation

---

## PHASE 2: DATABASE SETUP (REQUIRED IMMEDIATELY)

### Required Supabase Tables to Create

#### 1. **users** table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  full_name VARCHAR NOT NULL,
  country VARCHAR,
  school_name VARCHAR,  -- For Academia users
  signup_method VARCHAR CHECK (signup_method IN ('paypal', 'academia')),
  terms_accepted BOOLEAN DEFAULT false,
  terms_accepted_at TIMESTAMP,
  ip_address VARCHAR,
  user_agent TEXT,
  is_admin BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(email)
);

CREATE INDEX idx_users_country ON users(country);
CREATE INDEX idx_users_school_name ON users(school_name);
CREATE INDEX idx_users_signup_method ON users(signup_method);
```

#### 2. **payments** table
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_name VARCHAR NOT NULL,
  certificate_type VARCHAR CHECK (certificate_type IN ('certificate', 'diploma')),
  payment_method VARCHAR CHECK (payment_method IN ('paypal', 'cash')),
  payment_status VARCHAR CHECK (payment_status IN ('unpaid', 'payment_pending_manual', 'paid_pending_admin', 'completed')),
  paypal_order_id VARCHAR UNIQUE,
  capture_id VARCHAR UNIQUE,
  amount DECIMAL(10, 2),
  currency VARCHAR DEFAULT 'USD',
  reference VARCHAR UNIQUE NOT NULL,  -- Prevents duplicates
  payment_date TIMESTAMP,
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(payment_status);
CREATE INDEX idx_payments_reference ON payments(reference);
CREATE INDEX idx_payments_method ON payments(payment_method);
```

#### 3. **certificates** table
```sql
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  certificate_id VARCHAR UNIQUE NOT NULL,
  course_name VARCHAR NOT NULL,
  certificate_type VARCHAR CHECK (certificate_type IN ('certificate', 'diploma')),
  student_name VARCHAR NOT NULL,
  completion_date DATE,
  certificate_pdf_url VARCHAR,
  is_verified BOOLEAN DEFAULT false,
  verification_key VARCHAR UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_certificates_user_id ON certificates(user_id);
CREATE INDEX idx_certificates_certificate_id ON certificates(certificate_id);
CREATE INDEX idx_certificates_verification_key ON certificates(verification_key);
```

#### 4. **user_agreements** table
```sql
CREATE TABLE user_agreements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  agreement_type VARCHAR CHECK (agreement_type IN ('terms', 'privacy', 'cookie')),
  version VARCHAR,
  accepted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR,
  user_agent TEXT
);

CREATE INDEX idx_user_agreements_user_id ON user_agreements(user_id);
```

#### 5. **admin_logs** table
```sql
CREATE TABLE admin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR NOT NULL,
  entity_type VARCHAR,
  entity_id VARCHAR,
  details JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_admin_logs_admin_id ON admin_logs(admin_id);
CREATE INDEX idx_admin_logs_action ON admin_logs(action);
```

#### 6. **payment_logs** table
```sql
CREATE TABLE payment_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id UUID NOT NULL REFERENCES payments(id),
  event_type VARCHAR,
  status_before VARCHAR,
  status_after VARCHAR,
  details JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_payment_logs_payment_id ON payment_logs(payment_id);
```

#### 7. **error_logs** table
```sql
CREATE TABLE error_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  error_type VARCHAR,
  error_message TEXT,
  stack_trace TEXT,
  context JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_error_logs_error_type ON error_logs(error_type);
CREATE INDEX idx_error_logs_created_at ON error_logs(created_at);
```

### Row Level Security (RLS) Policies

Enable RLS on sensitive tables:
- `payments`: Only authenticated users can see their own payments
- `certificates`: Only authenticated users can see their own certificates
- `user_agreements`: Only authenticated users can see their own agreements
- `admin_logs`: Only admins can access
- `payment_logs`: Only admins can access

---

## PHASE 3: LEGAL PAGES (HIGH PRIORITY)

### Pages to Create

1. **Privacy Policy** (`/privacy-policy`)
   - Data collection practices
   - PayPal integration details
   - Academia system disclaimer
   - Certificate usage
   - User rights (GDPR, CCPA)

2. **Terms of Use** (`/terms-of-use`)
   - Platform usage rules
   - Payment policies (PayPal + Academia)
   - Certificate authenticity clause
   - No refund policy
   - Account responsibility
   - Liability limitations

3. **GDPR Compliance** (`/gdpr`)
   - User rights
   - Data processing basis
   - Data protection measures

4. **CCPA Compliance** (`/ccpa`)
   - California user rights
   - Non-discrimination clause

5. **Cookie Policy** (`/cookie-policy`)
   - Cookie types and usage
   - User control options
   - Consent management

### Cookie Consent Banner
- Bottom popup with Accept/Decline buttons
- Save choice in localStorage
- Only show once per user (7-day cooldown)
- Enable analytics only if accepted

---

## PHASE 4: PAYMENT SYSTEM HARDENING

### PayPal Integration
- [ ] Backend verification endpoint at `/api/payments/verify-paypal`
- [ ] Verify PayPal order capture on server-side only
- [ ] Store paypal_order_id and capture_id
- [ ] Prevent duplicate payments (unique constraint)
- [ ] Handle failed captures gracefully

### Academia (Cash) System
- [ ] "Notify Admin" button on checkout for Academia users
- [ ] Create notification in admin dashboard
- [ ] Admin ability to manually mark as "paid_pending_admin"
- [ ] Track school_name, country, payment_method = 'cash'
- [ ] Notification system for pending Academia payments

### Payment Status Standardization
Only use: `unpaid`, `payment_pending_manual`, `paid_pending_admin`, `completed`

### API Routes Needed
- `POST /api/payments/create` - Initiate payment
- `POST /api/payments/verify-paypal` - Verify PayPal capture
- `POST /api/payments/manual-approve` - Admin marks as paid
- `GET /api/payments/status` - Check payment status
- `POST /api/payments/cancel` - Cancel payment

---

## PHASE 5: ADMIN DASHBOARD ENHANCEMENT

### Pages to Fix/Implement
1. **Dashboard** (`/admin/dashboard`)
   - [ ] Analytics with real data from Supabase
   - [ ] User count, revenue, pending payments
   - [ ] Charts showing trends
   - [ ] Recent activities

2. **User Management** (`/admin/users`)
   - [ ] List all users with filters
   - [ ] Filter by country, school_name, signup_method
   - [ ] Pagination support
   - [ ] Edit/delete users
   - [ ] View user details

3. **Payment Management** (`/admin/payments`)
   - [ ] List all payments with status
   - [ ] Filter by status, method, user
   - [ ] Verify PayPal payments
   - [ ] Manually approve Academia payments
   - [ ] Mark as paid for manual payments

4. **Certificate Management** (`/admin/certificates`)
   - [ ] Generate certificates on demand
   - [ ] View all issued certificates
   - [ ] Download/resend certificates
   - [ ] Verification system

5. **Academia Management** (`/admin/academia`)
   - [ ] List schools with Academia users
   - [ ] Track pending payments from each school
   - [ ] Manage school enrollment
   - [ ] View student lists per school

6. **Notifications** (`/admin/notifications`)
   - [ ] Show all pending Academia payments
   - [ ] Show new PayPal payments awaiting verification
   - [ ] Mark as read
   - [ ] Take action (approve, deny, message)

7. **Settings** (`/admin/settings`)
   - [ ] Configure certificate/diploma prices
   - [ ] Update platform email
   - [ ] Manage admin users
   - [ ] API key management

---

## PHASE 6: SUPABASE INTEGRATION

### Authentication
- [ ] Setup Supabase Auth (if moving from localStorage)
- [ ] Email/password sign-up
- [ ] Email/password login
- [ ] Password reset flow
- [ ] Session management

### Database Integration
- [ ] Connect signup to store users
- [ ] Connect payments to store payment records
- [ ] Connect certificates to store issued certificates
- [ ] Real-time updates for admin dashboard

### API Routes
- [ ] Middleware for authentication
- [ ] Protected routes (require login)
- [ ] Admin-only routes (require admin role)
- [ ] Error handling and logging

---

## PHASE 7: SYSTEM RELIABILITY

### Error Handling
- [ ] Global error boundary
- [ ] Try-catch on all API routes
- [ ] Logging to error_logs table
- [ ] User-friendly error messages
- [ ] Failed payment recovery

### Testing Checklist
- [ ] User signup → auto-login → dashboard access
- [ ] Browse courses without re-login
- [ ] Select course → Start Learning without prompt
- [ ] PayPal payment flow
- [ ] Academia notification flow
- [ ] Admin login with 2FA
- [ ] Admin can approve payments
- [ ] Certificate generation
- [ ] Mobile responsiveness
- [ ] PWA installation

---

## ADMIN ACCESS INFO

### New Admin Credentials (as of this update)
- **Email:** tinasheleev@gmail.com
- **Password:** ES#1Jehovah
- **2FA:** Required (setup with authenticator app)

### Admin Dashboard URL
- Development: `http://localhost:3000/admin/dashboard`
- Production: `https://edusanna-platform.vercel.app/admin/dashboard`

### How to Access
1. Go to /login
2. Enter admin email and password
3. Complete 2FA verification
4. Auto-redirect to /admin/dashboard

---

## CURRENT STATUS

### ✅ Completed
- Logo fixes (centering, visibility)
- Mobile header text visibility
- PWA installation prompt
- Session persistence utility
- Admin credentials setup
- System documentation

### ⚠️ In Progress
- Database schema creation
- Legal pages

### ❌ Not Started
- Supabase RLS policies
- Admin dashboard functionality
- Payment system integration
- PayPal verification
- Academia system
- Notification system
- Email notifications
- Full Supabase integration

---

## NEXT IMMEDIATE STEPS

1. **Create Supabase tables** (copy the SQL above)
2. **Enable RLS** on all tables
3. **Create legal pages** (privacy, terms, GDPR, CCPA, cookies)
4. **Fix authentication persistence** in signup/login pages
5. **Connect admin dashboard** to Supabase
6. **Implement payment API routes**
7. **Test complete user flow**

---

## ENVIRONMENT VARIABLES NEEDED

```
NEXT_PUBLIC_ADMIN_EMAIL=tinasheleev@gmail.com
NEXT_PUBLIC_ADMIN_PASSWORD=ES#1Jehovah

SUPABASE_URL=<your-supabase-url>
SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>

PAYPAL_CLIENT_ID=<your-paypal-client-id>
PAYPAL_SECRET=<your-paypal-secret>
```

⚠️ **SECURITY WARNING**: Never commit PAYPAL_SECRET or SUPABASE_SERVICE_ROLE_KEY to version control. Keep these only in environment variables.

---

## Files Modified This Session
- `/app/page.tsx` - Fixed logo centering, footer links
- `/app/login/page.tsx` - Updated admin credentials
- `/app/layout.tsx` - Added PWA component
- `/components/pwa-install-prompt.tsx` - Enhanced with iOS support
- `/lib/auth-persistence.ts` - NEW - Session management
- `/COMPLETE_SYSTEM_GUIDE.md` - NEW - System documentation
- `/IMPLEMENTATION_ROADMAP.md` - NEW - This file

---

## Questions or Issues?

Reference `/COMPLETE_SYSTEM_GUIDE.md` for:
- Admin dashboard access details
- System architecture overview
- Authentication flow diagrams
- User onboarding process
- Contact information

---

**Last Updated:** 2026-04-18
**Status:** Active Development
**Next Review:** After Phase 2 database setup
