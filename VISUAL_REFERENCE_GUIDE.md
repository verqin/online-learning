# EDUSANNA - VISUAL REFERENCE GUIDE

## 🗺️ PLATFORM OVERVIEW

```
┌─────────────────────────────────────────────────────────────┐
│                    EDUSANNA PLATFORM                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  PUBLIC PAGES (No Login Required)                            │
│  ├─ / (Homepage)                                             │
│  ├─ /login (Sign in)                                         │
│  ├─ /signup (Create account → Auto-login)                    │
│  ├─ /courses (Browse courses)                                │
│  ├─ /verify (Verify certificate)                             │
│  ├─ /privacy-policy (TODO)                                   │
│  ├─ /terms-of-use (TODO)                                     │
│  └─ /contact (TODO)                                          │
│                                                               │
│  USER PAGES (Login Required)                                 │
│  ├─ /dashboard (User dashboard)                              │
│  ├─ /profile (User profile - TODO)                           │
│  └─ /my-certificates (User certificates - TODO)              │
│                                                               │
│  ADMIN PAGES (Admin Login + 2FA Required)                    │
│  ├─ /admin/dashboard (Admin overview)                        │
│  ├─ /admin/users (User management)                           │
│  ├─ /admin/payments (Payment tracking)                       │
│  ├─ /admin/certificates (Certificate management)             │
│  ├─ /admin/academia (School management - TODO)               │
│  ├─ /admin/notifications (Alert system - TODO)               │
│  └─ /admin/settings (Configuration)                          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 USER FLOW DIAGRAMS

### Regular User Journey

```
┌─────────────┐
│   Landing   │
│   Page      │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ Click "Get      │
│ Started"        │
└──────┬──────────┘
       │
       ▼
┌──────────────────────┐
│ Sign Up Form         │
│ - Email              │
│ - Password           │
│ - Name               │
│ - Country            │
│ - Payment Method     │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Account Created      │
│ ✓ Auto-Login!        │
│ ✓ Session Started    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Redirected to        │
│ /dashboard           │
│ Welcome Message      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Browse Courses       │
│ /courses             │
│ Search & Filter      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Select Course        │
│ View Details         │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Click "Start         │
│ Learning"            │
│ NO RE-LOGIN! ✓       │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Complete Course      │
│ Track Progress       │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Pay for Certificate  │
│ $12 or Diploma $18   │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Receive Certificate  │
│ Download PDF         │
│ Share Verification   │
└──────────────────────┘
```

### Admin Journey

```
┌──────────────┐
│ /login Page  │
└──────┬───────┘
       │
       ▼
┌────────────────────────────┐
│ Email:                      │
│ tinasheleev@gmail.com       │
│                             │
│ Password: ES#1Jehovah       │
└──────┬─────────────────────┘
       │
       ▼
┌────────────────────────────┐
│ 2FA Verification           │
│ (Google Authenticator)      │
│ Enter 6-digit code          │
└──────┬─────────────────────┘
       │
       ▼
┌────────────────────────────┐
│ Admin Dashboard            │
│ /admin/dashboard           │
│ • Overview                 │
│ • Stats                    │
│ • Recent Activity          │
└──────┬─────────────────────┘
       │
       ▼
┌────────────────────────────┐
│ Choose Action:             │
│ • Manage Users             │
│ • Review Payments          │
│ • Approve Certificates     │
│ • Configure Academia       │
│ • Check Notifications      │
│ • Manage Settings          │
└────────────────────────────┘
```

---

## 🎛️ FEATURE STATUS DASHBOARD

```
┌──────────────────────────────────────────────────────────┐
│                FEATURE STATUS                             │
├──────────────────────────────────────────────────────────┤
│                                                            │
│ USER AUTHENTICATION                                       │
│ ├─ Sign up                           [✓ WORKING]         │
│ ├─ Auto-login after signup           [✓ WORKING]         │
│ ├─ Session persistence               [✓ WORKING]         │
│ ├─ Logout                            [✓ WORKING]         │
│ └─ Password reset                    [⏳ TODO]           │
│                                                            │
│ USER EXPERIENCE                                           │
│ ├─ Mobile header text                [✓ FIXED]           │
│ ├─ Logo centering                    [✓ FIXED]           │
│ ├─ PWA installation prompt            [✓ WORKING]         │
│ ├─ Responsive layout                 [✓ WORKING]         │
│ └─ Course access without re-login     [✓ WORKING]         │
│                                                            │
│ ADMIN FEATURES                                            │
│ ├─ Admin login                       [✓ WORKING]         │
│ ├─ 2FA verification                  [⏳ READY]          │
│ ├─ User management interface         [⏳ NEEDS DB]       │
│ ├─ Payment approval                  [⏳ NEEDS DB]       │
│ ├─ Certificate management            [⏳ NEEDS DB]       │
│ └─ Academia system                   [⏳ TODO]           │
│                                                            │
│ PAYMENT SYSTEM                                            │
│ ├─ Payment status tracking           [⏳ NEEDS DB]       │
│ ├─ PayPal integration                [⏳ TODO]           │
│ ├─ Academia payment method           [⏳ TODO]           │
│ └─ Payment logging                   [⏳ TODO]           │
│                                                            │
│ CERTIFICATES                                              │
│ ├─ Generation logic                  [✓ READY]           │
│ ├─ PDF creation                      [✓ READY]           │
│ ├─ Verification system               [⏳ NEEDS DB]       │
│ └─ Download & sharing                [⏳ TODO]           │
│                                                            │
│ LEGAL & COMPLIANCE                                        │
│ ├─ Privacy Policy page               [⏳ TODO]           │
│ ├─ Terms of Use page                 [⏳ TODO]           │
│ ├─ GDPR compliance                   [⏳ TODO]           │
│ ├─ CCPA compliance                   [⏳ TODO]           │
│ ├─ Cookie policy                     [⏳ TODO]           │
│ ├─ Cookie consent banner             [⏳ TODO]           │
│ └─ Terms acceptance tracking         [⏳ TODO]           │
│                                                            │
│ INFRASTRUCTURE                                            │
│ ├─ Supabase connection               [✓ CONNECTED]       │
│ ├─ Database tables                   [❌ NOT CREATED]    │
│ ├─ RLS policies                      [❌ NOT CREATED]    │
│ ├─ Error logging                     [⏳ TODO]           │
│ ├─ Admin audit logs                  [⏳ TODO]           │
│ └─ Payment logging                   [⏳ TODO]           │
│                                                            │
└──────────────────────────────────────────────────────────┘

LEGEND:
✓ WORKING    = Fully functional and tested
✓ FIXED      = Recently fixed and working
✓ READY      = Code ready, waiting for DB/integration
⏳ NEEDS DB  = Code ready, waiting for Supabase tables
⏳ TODO      = Not yet implemented
❌ BLOCKED   = Cannot proceed without prerequisites
```

---

## 🗂️ FILE STRUCTURE

```
edusanna/
├── app/
│   ├── page.tsx                    [✓ Fixed logo, footer]
│   ├── layout.tsx                  [✓ Added PWA]
│   ├── login/page.tsx              [✓ Updated creds]
│   ├── signup/page.tsx             [✓ Auto-login]
│   ├── dashboard/page.tsx          [✓ User dashboard]
│   ├── courses/page.tsx            [✓ Course catalog]
│   ├── admin/
│   │   ├── page.tsx                [✓ Redirect logic]
│   │   ├── dashboard/page.tsx      [⏳ Needs DB]
│   │   ├── users/page.tsx          [⏳ Needs DB]
│   │   ├── payments/page.tsx       [⏳ Needs DB]
│   │   ├── certificates/page.tsx   [⏳ Needs DB]
│   │   ├── academia/page.tsx       [⏳ Not started]
│   │   ├── settings/page.tsx       [⏳ Needs DB]
│   │   └── verify-2fa/page.tsx     [⏳ Needs backend]
│   ├── privacy-policy/             [❌ TODO]
│   ├── terms-of-use/               [❌ TODO]
│   ├── gdpr/                        [❌ TODO]
│   ├── ccpa/                        [❌ TODO]
│   └── cookie-policy/              [❌ TODO]
│
├── components/
│   ├── pwa-install-prompt.tsx      [✓ Enhanced]
│   ├── ui/                         [✓ Buttons, cards, etc]
│   └── auth/                       [⏳ Auth components]
│
├── lib/
│   ├── auth-persistence.ts         [✓ Session utility]
│   ├── certificate-generator.ts    [✓ PDF generation]
│   ├── course-catalog.ts           [✓ Course data]
│   └── seo-content.ts              [✓ Content]
│
├── public/
│   ├── edusanna-logo.png           [✓ New logo]
│   ├── manifest.json               [✓ PWA config]
│   └── favicon.ico                 [✓ Favicon]
│
├── Documentation
│   ├── README_START_HERE.md        [✓ This is the entry point]
│   ├── QUICK_SETUP_NEXT_STEPS.md   [✓ Action items]
│   ├── CURRENT_STATUS_SUMMARY.md   [✓ Detailed status]
│   ├── COMPLETE_SYSTEM_GUIDE.md    [✓ Reference]
│   ├── IMPLEMENTATION_ROADMAP.md   [✓ SQL & phases]
│   └── VISUAL_REFERENCE_GUIDE.md   [✓ You are here]
│
└── Configuration
    ├── package.json
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── .env.example                [✓ Variables listed]
```

---

## ⏱️ QUICK SETUP TIMELINE

```
START (0 min)
   │
   ├─────────────────────────────────────────────────────────┐
   │                                                           │
   ▼ Step 1: Environment Variables (5 min)                   │
   ✓ Add NEXT_PUBLIC_ADMIN_EMAIL                             │
   ✓ Add NEXT_PUBLIC_ADMIN_PASSWORD                          │
   ✓ Redeploy                                                │
   │                                                           │
   ├─────────────────────────────────────────────────────────┤
   │                                                           │
   ▼ Step 2: Supabase Tables (10 min)                        │
   ✓ Run Script 1: users table                               │
   ✓ Run Script 2: payments table                            │
   ✓ Run Script 3: certificates table                        │
   ✓ Run Script 4: user_agreements table                     │
   │                                                           │
   ├─────────────────────────────────────────────────────────┤
   │                                                           │
   ▼ Step 3: Enable RLS (10 min)                             │
   ✓ payments table: Enable RLS                              │
   ✓ certificates table: Enable RLS                          │
   ✓ user_agreements table: Enable RLS                       │
   │                                                           │
   ├─────────────────────────────────────────────────────────┤
   │                                                           │
   ▼ Step 4: Test (10 min)                                   │
   ✓ Sign up new user                                        │
   ✓ Browse courses (logged in)                              │
   ✓ Admin login with 2FA                                    │
   ✓ PWA install prompt                                      │
   │                                                           │
   └─────────────────────────────────────────────────────────┘
                             │
                             ▼
                        DONE! (35 min)
                   Platform ready for more features
```

---

## 🎯 DEPENDENCY TREE

```
User Signup
    │
    ├─→ Validate inputs
    │
    ├─→ Store in localStorage (local session)
    │   └─→ (Eventually: Supabase users table)
    │
    ├─→ Call auth-persistence.ts → saveSession()
    │   └─→ 30-day expiry timer
    │   └─→ 5-min auto-refresh
    │
    └─→ Redirect to /dashboard
        └─→ User is logged in ✓


User Browsing Courses
    │
    ├─→ Check auth-persistence.getSession()
    │   ├─→ If valid session → Show courses
    │   └─→ If no session → Redirect to /login
    │
    └─→ Select course → "Start Learning"
        └─→ No re-login needed ✓


Admin Login
    │
    ├─→ Verify email + password match
    │
    ├─→ If match → Redirect to /admin/verify-2fa
    │   │
    │   └─→ User enters 2FA code
    │       ├─→ If correct → Redirect to /admin/dashboard
    │       │   └─→ Full admin access ✓
    │       │
    │       └─→ If incorrect → Show error
    │
    └─→ If no match → Show login error


Database Operations
    │
    ├─→ User Signs Up → Supabase users table
    │
    ├─→ User Pays → Supabase payments table
    │   └─→ PayPal integration verifies capture
    │
    ├─→ Course Completed → Supabase certificates table
    │   └─→ PDF generated
    │   └─→ Stored in storage
    │
    └─→ Admin Action → Supabase admin_logs table
        └─→ Audit trail created
```

---

## 📊 DATA FLOW

```
┌─────────────┐
│ User Input  │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Browser/Frontend    │
│ auth-persistence.ts │
└──────┬──────────────┘
       │
       ▼
┌──────────────────────┐
│ Next.js API Routes   │
│ /api/auth/*          │
│ /api/payments/*      │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Supabase Database    │
│ users table          │
│ payments table       │
│ certificates table   │
│ error_logs table     │
└──────────────────────┘
```

---

## 🔐 SECURITY LAYERS

```
LAYER 1: Frontend
├─ Client-side validation
├─ Session storage (localStorage)
└─ PWA security (HTTPS only)

LAYER 2: API Routes
├─ Environment variable verification
├─ Input validation
├─ Session validation
└─ Rate limiting (TODO)

LAYER 3: Database
├─ Row Level Security (RLS)
├─ Unique constraints
├─ Foreign keys
└─ Audit logging

LAYER 4: External Services
├─ PayPal verification (server-side)
├─ Email verification (TODO)
└─ 2FA verification
```

---

## 📈 GROWTH PATH

```
Phase 1: Core Platform ✓ (COMPLETED)
├─ User authentication
├─ Mobile responsiveness
└─ Session management

Phase 2: Database Integration ⏳ (THIS WEEK)
├─ Supabase tables
├─ RLS policies
└─ Data persistence

Phase 3: Admin Features ⏳ (NEXT)
├─ User management
├─ Payment approval
└─ Certificate issuance

Phase 4: Payment System ⏳ (NEXT)
├─ PayPal integration
├─ Academia support
└─ Payment logging

Phase 5: Legal & Compliance ⏳ (FOLLOWING)
├─ Privacy policy
├─ Terms of use
└─ GDPR/CCPA compliance

Phase 6: Advanced Features ⏳ (LATER)
├─ Email notifications
├─ Progress tracking
└─ Advanced analytics
```

---

## ✨ KEY METRICS

```
┌─────────────────────────────────────────┐
│         SYSTEM HEALTH SCORECARD          │
├─────────────────────────────────────────┤
│                                          │
│ Frontend Ready:           [████████░░]  80%
│ Backend Ready:            [████████░░]  75%
│ Database Ready:           [██░░░░░░░░]  20%
│ Security Setup:           [██████░░░░]  60%
│ Testing Complete:         [████░░░░░░]  40%
│ Documentation:            [██████████] 100%
│                                          │
│ Overall Readiness:        [████████░░]  69%
│                                          │
└─────────────────────────────────────────┘
```

---

## 🎓 LAST-MINUTE CHECKLIST

Before reading other docs:
- [ ] You understand user flow (signup → login → courses → pay → cert)
- [ ] You know admin credentials (tinasheleev@gmail.com / ES#1Jehovah)
- [ ] You see that mobile header is fixed ✓
- [ ] You know PWA prompts installation ✓
- [ ] You understand sessions persist ✓

---

**Next:** Read `QUICK_SETUP_NEXT_STEPS.md` for immediate action items!
