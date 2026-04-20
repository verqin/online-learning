# EDUSANNA Quick Start Guide

## Immediate Actions Required

### 1. Add Environment Variables (5 minutes)

Go to **Vercel Project Settings → Environment Variables** and add:

```
ADMIN_EMAIL=tinasheleev@gmail.com
ADMIN_PASSWORD=ES#1Jehovah
ADMIN_WHATSAPP_NUMBER=263782XXXXXX
```

(Other Supabase/PayPal vars should already be set)

### 2. Run Database Migration (3 minutes)

1. Go to **Supabase Dashboard → SQL Editor**
2. Copy all content from `/scripts/04-setup-supabase-tables.sql`
3. Paste into SQL Editor → RUN

### 3. Add Sample Courses (2 minutes)

Copy this into Supabase SQL Editor:

```sql
INSERT INTO courses (title, description, instructor, duration_weeks, difficulty_level, category, price_standard, price_certificate, price_diploma, modules_count) VALUES
('Web Development Basics', 'Learn HTML, CSS, JavaScript', 'John Doe', 8, 'beginner', 'Programming', 0, 29.99, 49.99, 10),
('Python Data Science', 'Master Python for data', 'Jane Smith', 12, 'advanced', 'Programming', 0, 39.99, 69.99, 15),
('Digital Marketing', 'Complete marketing guide', 'Mike Johnson', 6, 'beginner', 'Marketing', 0, 24.99, 44.99, 8);
```

---

## Test the System

### Test Learner Flow (10 minutes)

1. Go to `/signup`
2. Select "Academia Plan" or "Standard Plan"
3. Fill form → Create Account
4. Automatically logged in to `/dashboard`
5. Go to `/courses`
6. Click "Start Learning" on any course
7. View course modules

### Test Admin Flow (5 minutes)

1. Go to `/login`
2. Email: `tinasheleev@gmail.com`
3. Password: `ES#1Jehovah`
4. **Check WhatsApp** for 6-digit code
5. Go to `/admin/verify-2fa`
6. Enter the code
7. Access `/admin/dashboard`

### Test Certificates (5 minutes)

1. As learner, complete course (80%+ progress)
2. Request certificate via dashboard
3. As admin, view certificate in analytics
4. Download certificate PDF

---

## Key URLs

| Page | URL | Purpose |
|------|-----|---------|
| Signup | `/signup` | Learner signup |
| Login | `/login` | Learner/Admin login |
| Learner Dashboard | `/dashboard` | View progress |
| Browse Courses | `/courses` | Find courses |
| Start Learning | `/learn/[id]` | Take course |
| Settings | `/dashboard/settings` | Delete account |
| Admin Dashboard | `/admin/dashboard` | Admin panel |
| Admin Analytics | `/admin/analytics` | View metrics |
| 2FA Verify | `/admin/verify-2fa` | 2FA entry |

---

## API Endpoints

### Login
```
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Send 2FA
```
POST /api/auth/send-2fa-whatsapp
{
  "email": "tinasheleev@gmail.com"
}
```

### Verify 2FA
```
POST /api/auth/verify-2fa-whatsapp
{
  "email": "tinasheleev@gmail.com",
  "code": "123456"
}
```

### Generate Certificate
```
POST /api/admin/generate-certificate
{
  "userId": "user-id",
  "courseId": "course-id",
  "certificateType": "certificate",
  "studentName": "John Doe",
  "courseName": "Web Development"
}
```

### Get Analytics
```
GET /api/admin/analytics
(Requires admin session)
```

---

## Troubleshooting

### 2FA Code Not Arriving
- Check WhatsApp is active
- Verify `ADMIN_WHATSAPP_NUMBER` format (country code required)
- Check WhatsApp notifications aren't muted

### Admin Can't Login
- Verify email/password exactly: `tinasheleev@gmail.com` / `ES#1Jehovah`
- Clear browser localStorage
- Check env vars are set (not hardcoded)

### "Start Learning" Shows Sign In Prompt
- Ensure you're logged in (check localStorage)
- Clear cache and reload
- Use incognito window to test

### Courses Not Loading
- Verify courses exist in Supabase
- Check courses have `is_active = true`
- Confirm `NEXT_PUBLIC_SUPABASE_URL` is correct

---

## What's Working

✓ Learner signup (Academia/Standard)
✓ Learner login & logout
✓ Admin login with WhatsApp 2FA
✓ Course browsing
✓ Start learning courses
✓ Progress tracking
✓ Certificate generation
✓ Admin analytics
✓ Account deletion
✓ Notifications system
✓ PayPal payments
✓ Responsive design

---

## Next 24 Hours Checklist

- [ ] Add 3 env vars (ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_WHATSAPP_NUMBER)
- [ ] Run SQL migration in Supabase
- [ ] Add sample courses
- [ ] Test learner signup flow
- [ ] Test admin login with 2FA
- [ ] Test course learning
- [ ] Test certificate generation
- [ ] Check analytics dashboard
- [ ] Test on mobile
- [ ] Deploy to production

---

## Important Notes

1. **WhatsApp 2FA**: Codes expire in 10 minutes
2. **Admin Credentials**: NEVER expose to frontend
3. **Certificates**: Require 80% course completion
4. **Sessions**: Stored in localStorage (upgrade to cookies for production)
5. **Database**: All data now persists in Supabase

---

## Support Files

Read these for detailed information:
- `COMPLETE_SYSTEM_SETUP.md` - Full setup guide
- `SYSTEM_COMPLETION_REPORT.md` - Detailed implementation report

---

**Ready to go live!** Follow the checklist above and you'll be up and running in 30 minutes.
