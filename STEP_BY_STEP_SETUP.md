# Complete Setup Steps 2-4 Guide

## 🔐 SECURITY FIX - Step 0 (CRITICAL!)

### The Problem You Identified
You correctly spotted that **NEVER put admin credentials in `NEXT_PUBLIC` variables**. They get exposed to frontend code!

### The Solution We Implemented
1. Created **server-only API route** at `/app/api/auth/admin-login/route.ts`
2. Admin credentials stored in **private environment variables** (not NEXT_PUBLIC):
   - `ADMIN_EMAIL` (server-only)
   - `ADMIN_PASSWORD` (server-only)

### Update Your Vercel Environment Variables NOW
Remove the PUBLIC ones:
- ❌ Delete `NEXT_PUBLIC_ADMIN_EMAIL`
- ❌ Delete `NEXT_PUBLIC_ADMIN_PASSWORD`

Add new PRIVATE ones:
- ✅ Add `ADMIN_EMAIL` = `tinasheleev@gmail.com`
- ✅ Add `ADMIN_PASSWORD` = `ES#1Jehovah`

**These will NEVER be sent to the browser - they're server-only!**

---

## Step 2: Create Supabase Tables (10 minutes)

### Method A: Using Supabase Dashboard (Recommended for beginners)

1. **Open Supabase Dashboard**
   - Go to https://supabase.com
   - Sign into your project
   - Click "SQL Editor" on the left sidebar

2. **Run Migration Script**
   - Click "New Query"
   - Copy content from `/scripts/01-create-tables.sql` from your project
   - Paste it into the SQL editor
   - Click "Run" (blue button)
   - Wait for "Success" message

3. **Verify Tables Created**
   - Click "Tables" in left sidebar
   - You should see 9 new tables:
     - users
     - courses
     - course_modules
     - enrollments
     - module_progress
     - certificates
     - payments
     - user_agreements
     - admin_logs

### Method B: Using CLI (For experienced developers)

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Run migrations
supabase migration up --file scripts/01-create-tables.sql
```

---

## Step 3: Enable Row Level Security (RLS) (10 minutes)

### Why RLS Matters
RLS ensures **users can only see their own data**:
- A learner can't see other learners' payments
- Only admins can view all enrollments
- Users can't modify other users' certificates

### Setup RLS Policies

1. **Open Supabase SQL Editor**
   - Click "SQL Editor" → "New Query"

2. **Run RLS Script**
   - Copy content from `/scripts/02-enable-rls.sql`
   - Paste into SQL editor
   - Click "Run"
   - Wait for success (may take 30 seconds)

3. **Verify RLS Enabled**
   - Go to "Tables" in sidebar
   - Click on each table
   - In the "Auth" tab, you should see RLS is "Enabled"

### What Each Policy Does
| Table | Policy | Access |
|-------|--------|--------|
| users | Own profile | User reads/edits their profile |
| courses | Public read | Everyone sees active courses |
| enrollments | Own enrollments | User sees their courses |
| payments | Own payments | User sees their transactions |
| certificates | Own certificates | User sees their certificates |
| admin_logs | Admin only | Only admins see logs |

---

## Step 4: Complete Testing (10 minutes)

### Test 1: User Signup & Auto-Login ✓
```
1. Open your app
2. Click "Get Started"
3. Fill signup form:
   - Name: John Doe
   - Email: john@example.com
   - Password: Test123!
4. Click "Create Account"
5. ✓ Should auto-redirect to dashboard
6. ✓ Should show "Welcome, John Doe!"
7. ✓ No sign-in prompt
```

### Test 2: Browsing Courses While Logged In ✓
```
1. From dashboard, click "Browse Courses"
2. ✓ Should NOT see "Sign In" button (should say "My Dashboard")
3. ✓ Should see all courses listed
4. Click on any course
5. Click "Start Learning"
6. ✓ Should open course content
7. ✓ NO sign-in prompt!
```

### Test 3: Admin Login (Secure) ✓
```
1. Go to login page
2. Enter credentials:
   - Email: tinasheleev@gmail.com
   - Password: ES#1Jehovah
3. Click "Sign In"
4. ✓ Should redirect to /admin/verify-2fa
5. ✓ Should NOT expose credentials in URL
6. ✓ Credentials sent via secure API, not frontend
```

### Test 4: PWA Installation Prompt ✓
```
1. Open app on mobile/Chrome
2. Wait 2 seconds
3. ✓ Should see "Install EDUSANNA App" prompt at bottom
4. Click "Install Now"
5. ✓ Chrome should show native install dialog
6. Click "Install" in Chrome dialog
7. ✓ App installed to home screen
```

### Test 5: Session Persistence ✓
```
1. Login as user
2. Close browser completely
3. Reopen app
4. ✓ Should still be logged in
5. No need to sign in again
6. ✓ Session persists for 30 days
```

---

## Troubleshooting

### Problem: Tables not appearing
**Solution:** 
- Refresh Supabase dashboard (F5)
- Check SQL errors in the output

### Problem: RLS policies failed
**Solution:**
- Make sure tables exist first
- Run 01-create-tables.sql before 02-enable-rls.sql
- Copy/paste each policy separately if needed

### Problem: Admin login doesn't work
**Solution:**
- Check environment variables are set (not NEXT_PUBLIC versions)
- Restart dev server: `npm run dev`
- Check browser console for errors

### Problem: Users still see sign-in prompt
**Solution:**
- Clear localStorage: Open DevTools → Application → Storage → Clear All
- Login fresh
- Check auth-persistence.ts is being used

---

## Files You Modified

1. ✅ **Environment Variables**
   - Removed: NEXT_PUBLIC_ADMIN_EMAIL, NEXT_PUBLIC_ADMIN_PASSWORD
   - Added: ADMIN_EMAIL, ADMIN_PASSWORD (server-only)

2. ✅ **New Files Created**
   - `/app/api/auth/admin-login/route.ts` - Secure admin authentication
   - `/scripts/01-create-tables.sql` - Database schema
   - `/scripts/02-enable-rls.sql` - Security policies

---

## Summary

| Step | Task | Time | Status |
|------|------|------|--------|
| 0 | Security fix (env vars) | 2 min | ✅ Done |
| 2 | Create tables | 10 min | ⏳ Do Now |
| 3 | Enable RLS | 10 min | ⏳ Do Now |
| 4 | Test | 10 min | ⏳ Do Now |

**Total Time: 32 minutes to production-ready!**
