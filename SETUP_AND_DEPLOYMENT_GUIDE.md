# Edusanna Complete Setup and Deployment Guide

## Overview
This guide covers the complete setup of your new Edusanna platform with Supabase integration, session management, input sanitization, and secure authentication.

---

## Table of Contents
1. [Supabase Project Creation](#supabase-project-creation)
2. [Environment Variables Configuration](#environment-variables-configuration)
3. [Database Schema Setup](#database-schema-setup)
4. [Admin Dashboard Access](#admin-dashboard-access)
5. [Session Management](#session-management)
6. [Security Features](#security-features)
7. [Deployment Steps](#deployment-steps)

---

## Supabase Project Creation

### Step 1: Create a New Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click **"New Project"**
3. Enter these details:
   - **Project Name**: `edusanna-learning-platform`
   - **Database Password**: Create a strong password (save it securely)
   - **Region**: Choose closest to your users (e.g., `us-east-1`)
4. Click **"Create new project"** and wait for initialization (2-3 minutes)

### Step 2: Get Your Project Credentials

Once the project is created:

1. Go to **Settings → API**
2. Copy these values (you'll need them for Vercel):
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY`

3. Go to **Settings → Database**
4. Copy the connection string as `POSTGRES_URL`

---

## Environment Variables Configuration

### In Vercel Dashboard:

1. Go to your Vercel project → **Settings → Environment Variables**
2. Add these variables (paste the values from Supabase):

```
NEXT_PUBLIC_SUPABASE_URL=<your-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
POSTGRES_URL=<your-connection-string>
SUPABASE_JWT_SECRET=<your-jwt-secret>
```

3. Save all variables
4. Redeploy the project for changes to take effect

---

## Database Schema Setup

### Step 1: Run the SQL Migration

1. In Supabase Dashboard, go to **SQL Editor**
2. Click **"New Query"**
3. Copy the entire contents of `/scripts/00-supabase-complete-schema.sql`
4. Paste into the SQL Editor
5. Click **"Run"** button
6. Wait for completion (should see ✓ Success)

This creates:
- `profiles` table (user information)
- `courses` table (course catalog)
- `enrollments` table (user course enrollments)
- `certificates` table (issued certificates)
- `payments` table (payment records)
- `two_fa_codes` table (2FA codes)
- `notifications` table (user notifications)
- `sessions` table (session tracking)
- `error_logs` table (error tracking)
- `performance_logs` table (performance metrics)
- Proper indexes and RLS policies

### Step 2: Verify Tables Created

1. Go to **Table Editor**
2. Verify you see all these tables listed on the left:
   - profiles
   - courses
   - enrollments
   - certificates
   - payments
   - two_fa_codes
   - notifications
   - sessions
   - error_logs
   - performance_logs

---

## Admin Dashboard Access

### How to Access the Admin Dashboard

**URL**: `https://your-domain.com/admin/dashboard`

### Admin Login Process

1. **Navigate** to the login page
2. **Enter credentials**:
   - Email: `tinasheleev@gmail.com`
   - Password: Your admin password (from Vercel env vars)
3. **2FA Verification**:
   - A 6-digit code will be sent to your WhatsApp
   - Enter the code to complete login
4. **Access Dashboard** with full admin privileges

### Admin Dashboard Features

Once logged in, you can access:

- **Dashboard**: Overview of platform metrics
  - Total users
  - Total courses
  - Total enrollments
  - Revenue metrics

- **Users Management**: 
  - View all registered users
  - Filter by signup type (Academia/Standard)
  - View user activity and progress

- **Certificates**:
  - Manage issued certificates
  - Generate new certificates
  - Revoke invalid certificates

- **Payments**:
  - Track all payments
  - View transaction details
  - Process refunds

- **Analytics**:
  - View detailed usage statistics
  - Track course popularity
  - Monitor system performance

- **Settings**:
  - Configure platform settings
  - Manage admin users
  - Update system preferences

### Admin Credentials (Secure)

Your admin email and password are stored as private environment variables in Vercel:
- `ADMIN_EMAIL=tinasheleev@gmail.com`
- `ADMIN_PASSWORD=<your-secure-password>`

**IMPORTANT**: Never share these credentials. They are only for the system administrator.

---

## Session Management

### How Sessions Work

The platform implements comprehensive session management with the following features:

#### Session Persistence
- Users remain logged in across page reloads
- Sessions persist for 24 hours
- Session data stored securely in localStorage and Supabase

#### Inactivity Timeout
- **Timeout Duration**: 30 minutes of inactivity
- **Warning**: User receives warning at 5 minutes before timeout
- **Auto-Logout**: User is automatically logged out after 30 minutes of inactivity

#### Activity Tracking
The system detects user activity through:
- Mouse clicks
- Keyboard input
- Scrolling
- Touch interactions
- Page navigation

#### Logout Options
Users can:
1. **Manual Logout**: Click logout button
2. **Automatic Logout**: After 30 minutes inactivity
3. **Session Expiry**: After 24 hours maximum

### Session Implementation Details

**File**: `/lib/session-manager.ts`

Key functions:
- `saveSession()` - Save user session
- `getSession()` - Retrieve current session
- `updateLastActivity()` - Update activity timestamp
- `isUserInactive()` - Check inactivity status
- `clearSession()` - Logout user
- `initializeSessionManager()` - Initialize on app load

---

## Security Features

### Input Sanitization

All user inputs are sanitized using `/lib/input-sanitizer.ts`:

#### What Gets Sanitized

1. **Email Addresses**
   - Validated against email regex
   - Lowercased and trimmed
   - Spaces removed

2. **Names (Full Name, School Name, etc.)**
   - SQL injection patterns removed
   - Only alphanumeric, spaces, hyphens, apostrophes allowed
   - Maximum length enforced

3. **Phone Numbers**
   - International format validation
   - Only digits and + symbol allowed
   - Format validation (E.164 standard)

4. **Locations (Country, City)**
   - SQL injection patterns removed
   - Allows alphanumeric, spaces, hyphens, commas, periods

5. **Passwords**
   - Strength validation (not sanitized, only validated)
   - Minimum 8 characters
   - Must contain: uppercase, lowercase, numbers, special characters

6. **Search Input**
   - SQL injection patterns removed
   - Limited to 100 characters max
   - Prevents DOS attacks

### SQL Injection Prevention

**How It Works**:
1. User input is sanitized on the client
2. All server queries use **parameterized queries**
3. Supabase Row Level Security (RLS) provides additional protection
4. Database-level constraints prevent unauthorized access

**Example**:
```typescript
// SECURE - Parameterized query (what we use)
const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .eq('email', sanitizedEmail)  // Email is parameter, not concatenated

// INSECURE - String concatenation (what we never do)
const query = `SELECT * FROM profiles WHERE email = '${userEmail}'` // NEVER DO THIS
```

### Row Level Security (RLS)

All tables have RLS policies that ensure:
- Users can only see their own data
- Admins can see all data
- System tables are protected
- No direct SQL queries can bypass security

---

## Deployment Steps

### Step 1: Prepare the Environment

```bash
# In your project directory
git add .
git commit -m "Add Supabase setup, session management, input sanitization"
```

### Step 2: Push to GitHub

```bash
git push origin main
```

### Step 3: Verify Vercel Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your Edusanna project
3. Check that deployment is successful (green checkmark)
4. View production URL

### Step 4: Test the Platform

#### Test User Registration
1. Go to `/signup`
2. Choose Standard or Academia plan
3. Fill in form with test data
4. Submit - should create user in Supabase

#### Test Admin Login
1. Go to `/login`
2. Enter admin credentials
3. Complete 2FA with WhatsApp code
4. Access `/admin/dashboard`

#### Test Session Persistence
1. Login to user account
2. Reload page - user should still be logged in
3. Wait 30 minutes without activity
4. Warning should appear, then auto-logout

#### Test Privacy/Terms Pages
1. Visit `/privacy` - should see full policy
2. Visit `/terms` - should see full terms
3. Both pages should render properly with styling

### Step 5: Monitor Performance

Go to **Vercel Dashboard → Analytics** to monitor:
- Page load times
- Error rates
- User activity
- Deployment status

---

## Database Maintenance

### Backup Your Data
1. Supabase automatically backs up daily
2. Access backups in **Settings → Backups**
3. Download backups regularly

### Monitor Storage
1. Go to **Settings → Database**
2. Check storage usage
3. Monitor for approaching limits

### Clear Old Sessions
Periodically clean up old sessions:
```sql
DELETE FROM public.sessions 
WHERE expires_at < NOW();
```

---

## Troubleshooting

### Users Can't Login
1. Check Supabase is running (`supabase status`)
2. Verify env vars are correctly set in Vercel
3. Check error logs at `/admin/analytics`

### 2FA Code Not Sending
1. Verify `ADMIN_WHATSAPP_NUMBER` env var is set
2. Confirm WhatsApp connection is working
3. Check Supabase `two_fa_codes` table for entries

### Session Not Persisting
1. Check localStorage is enabled in browser
2. Verify `session-manager.ts` is initialized
3. Check browser console for errors

### Password Reset Not Working
1. Verify email service configuration
2. Check Supabase auth settings
3. Review error logs

---

## Quick Reference

### Important URLs
- Admin Dashboard: `/admin/dashboard`
- User Dashboard: `/dashboard`
- Courses: `/courses`
- Privacy Policy: `/privacy`
- Terms of Service: `/terms`

### Important Files
- Session Manager: `/lib/session-manager.ts`
- Input Sanitizer: `/lib/input-sanitizer.ts`
- SQL Schema: `/scripts/00-supabase-complete-schema.sql`
- Admin Dashboard: `/app/admin/dashboard/page.tsx`

### Important Env Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
POSTGRES_URL
ADMIN_EMAIL
ADMIN_PASSWORD
ADMIN_WHATSAPP_NUMBER
```

---

## Support

For issues or questions:
1. Check error logs in `/admin/analytics`
2. Review browser console for client errors
3. Check Supabase logs for database errors
4. Contact support: support@edusanna.com

---

**Last Updated**: January 2024
**Version**: 1.0
**Platform**: Edusanna Online Learning
