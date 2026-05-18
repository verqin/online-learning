# Edusanna Quick Reference Guide

## How to Access Admin Dashboard

### URL
```
https://your-domain.com/admin/dashboard
```

### Admin Credentials
- **Email**: `tinasheleev@gmail.com`
- **Password**: Your secure password (from Vercel env vars)

### Login Steps
1. Go to `/login`
2. Enter admin email and password
3. Receive 6-digit 2FA code on WhatsApp
4. Enter 2FA code
5. Redirect to admin dashboard

### Admin Dashboard Features
- User Management
- Certificate Management
- Payment Tracking
- Analytics & Reports
- System Settings

---

## Session Management

### User Session Behavior
- **Duration**: Remains logged in until manual logout
- **Inactivity Timeout**: 30 minutes without user activity
- **Automatic Logout**: After 30 minutes of inactivity
- **Warning**: 5-minute warning before automatic logout

### Activity Tracking
Automatically tracked via:
- Mouse clicks
- Keyboard input
- Scrolling
- Touch interactions

### Manual Logout
Click "Logout" button on any page

---

## Security Features

### Input Sanitization
All user inputs are automatically sanitized:
- Email validation
- Name filtering (removes SQL injection patterns)
- Phone number validation (E.164 format)
- Location validation
- Password strength requirements

### SQL Injection Prevention
- Parameterized database queries (server-side)
- Row Level Security (RLS) policies
- Input sanitization (client-side)
- Database constraints

### 2FA System
- 6-digit codes via WhatsApp
- 10-minute code expiration
- Admin only
- Uses CallMeBot API (no setup required)

---

## New Features Implemented

### 1. Complete Supabase Schema
- 10 primary tables
- 15+ performance indexes
- RLS policies for all tables
- Sample course data included

### 2. Session Management
- Persistent user sessions (24-hour expiry)
- Inactivity tracking (30-minute timeout)
- Automatic logout
- Session warning system

### 3. Input Sanitization
- Email validation
- Name sanitization
- Phone number validation
- Search input protection
- Password strength validation

### 4. Privacy & Terms Pages
- `/privacy` - Complete privacy policy
- `/terms` - Comprehensive terms of service
- Fully styled and responsive

### 5. Admin Dashboard
- `/admin/dashboard` - Main admin console
- User management
- Certificate management
- Payment tracking
- Analytics

---

## Files Created/Modified

### New Files
```
/scripts/00-supabase-complete-schema.sql
/lib/session-manager.ts
/lib/input-sanitizer.ts
/app/privacy/page.tsx
/app/terms/page.tsx
/SETUP_AND_DEPLOYMENT_GUIDE.md
/QUICK_REFERENCE.md
```

### Supabase Tables
```
profiles
courses
enrollments
certificates
payments
two_fa_codes
notifications
sessions
error_logs
performance_logs
admin_audit_log
storage_stats
```

---

## Setup Checklist

- [ ] Create new Supabase project
- [ ] Copy Project URL to Vercel
- [ ] Copy anon key to Vercel
- [ ] Copy service role key to Vercel
- [ ] Copy POSTGRES_URL to Vercel
- [ ] Run SQL migration in Supabase
- [ ] Verify all tables created
- [ ] Set ADMIN_EMAIL in Vercel
- [ ] Set ADMIN_PASSWORD in Vercel
- [ ] Set ADMIN_WHATSAPP_NUMBER in Vercel
- [ ] Redeploy project in Vercel
- [ ] Test user registration
- [ ] Test admin login
- [ ] Test 2FA
- [ ] Test session timeout
- [ ] Verify Privacy/Terms pages

---

## Environment Variables Required

```
NEXT_PUBLIC_SUPABASE_URL=<from-supabase>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<from-supabase>
SUPABASE_SERVICE_ROLE_KEY=<from-supabase>
POSTGRES_URL=<from-supabase>
SUPABASE_JWT_SECRET=<from-supabase>
ADMIN_EMAIL=tinasheleev@gmail.com
ADMIN_PASSWORD=<your-secure-password>
ADMIN_WHATSAPP_NUMBER=<your-whatsapp-number>
```

---

## Troubleshooting

### Login Not Working
1. Check env vars in Vercel
2. Verify Supabase project is running
3. Check browser console for errors

### 2FA Code Not Sending
1. Verify ADMIN_WHATSAPP_NUMBER is set correctly
2. Check WhatsApp number format (+country-code)
3. Verify CallMeBot service is accessible

### Session Not Persisting
1. Check if localStorage is enabled
2. Verify no errors in browser console
3. Clear browser cache and try again

### Privacy/Terms Pages Blank
1. Check that `/privacy/page.tsx` and `/terms/page.tsx` exist
2. Verify no errors in console
3. Hard refresh browser (Ctrl+Shift+R)

---

## Support Contacts

- **Email**: support@edusanna.com
- **Privacy Questions**: privacy@edusanna.com
- **Admin Issues**: admin@edusanna.com

---

## Security Best Practices

1. **Never share admin credentials**
2. **Use strong, unique admin password**
3. **Enable 2FA for admin access**
4. **Regularly review error logs**
5. **Monitor user activity in analytics**
6. **Keep Supabase updated**
7. **Regular backups enabled**
8. **Review RLS policies regularly**

---

**Version**: 1.0
**Last Updated**: January 2024
**Platform**: Edusanna Online Learning Platform
