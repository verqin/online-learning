# 🎯 ACTION CHECKLIST - Steps 2-4 Complete

## Do These Steps RIGHT NOW (In Order)

### Step 1️⃣: Update Environment Variables (5 minutes)

Go to Vercel Project Settings → Environment Variables

**REMOVE these:**
- [ ] `NEXT_PUBLIC_ADMIN_EMAIL`
- [ ] `NEXT_PUBLIC_ADMIN_PASSWORD`

**ADD these NEW ones:**
- [ ] `ADMIN_EMAIL` = `tinasheleev@gmail.com`
- [ ] `ADMIN_PASSWORD` = `ES#1Jehovah`

**⚠️ IMPORTANT:** These new ones should NOT have `NEXT_PUBLIC` prefix!

After adding:
- [ ] Redeploy to Vercel (or `npm run dev` locally)

---

### Step 2️⃣: Create Database Tables (10 minutes)

1. [ ] Open https://supabase.com and login
2. [ ] Go to your project
3. [ ] Click **SQL Editor** on left sidebar
4. [ ] Click **New Query**
5. [ ] Copy entire content from: `/scripts/01-create-tables.sql`
6. [ ] Paste into SQL editor
7. [ ] Click **Run** button
8. [ ] Wait for "Success" message ✓

**Verify it worked:**
9. [ ] Click **Tables** on left sidebar
10. [ ] You should see these 9 tables:
    - [ ] users
    - [ ] courses
    - [ ] course_modules
    - [ ] enrollments
    - [ ] module_progress
    - [ ] certificates
    - [ ] payments
    - [ ] user_agreements
    - [ ] admin_logs

---

### Step 3️⃣: Enable Row Level Security (10 minutes)

1. [ ] In Supabase, click **SQL Editor**
2. [ ] Click **New Query** (new tab)
3. [ ] Copy entire content from: `/scripts/02-enable-rls.sql`
4. [ ] Paste into SQL editor
5. [ ] Click **Run** button
6. [ ] Wait for "Success" message ✓

**Verify it worked:**
7. [ ] Click **Tables** on left sidebar
8. [ ] Click any table (e.g., "users")
9. [ ] Click the **Auth** tab
10. [ ] Verify **RLS is enabled** (green checkmark)

---

### Step 4️⃣: Test Everything Works (10 minutes)

#### Test 4A: User Signup & Auto-Login
- [ ] Open your app in browser
- [ ] Click "Get Started" button
- [ ] Fill form:
  - Name: John Doe
  - Email: test@example.com
  - Password: Test123!
  - Mobile: +1234567890
  - Country: USA
  - City: New York
- [ ] Click "Create Account"
- [ ] ✓ Should auto-redirect to dashboard
- [ ] ✓ Should show "Welcome, John Doe!"
- [ ] ✓ No sign-in prompt

#### Test 4B: Browse Courses While Logged In
- [ ] Click "Browse Courses"
- [ ] ✓ Should see course list
- [ ] ✓ Navigation button says "My Dashboard" (NOT "Sign In")
- [ ] Click on any course
- [ ] Click "Start Learning" button
- [ ] ✓ Should open course learning page
- [ ] ✓ NO sign-in prompt!
- [ ] ✓ See modules in sidebar
- [ ] ✓ Progress bar shows 0%
- [ ] Click "Mark as Complete"
- [ ] ✓ Progress updates to module count

#### Test 4C: Admin Login (Secure)
- [ ] Go to `/login` page
- [ ] Fill form:
  - Email: `tinasheleev@gmail.com`
  - Password: `ES#1Jehovah`
- [ ] Click "Sign In"
- [ ] ✓ Should redirect to `/admin/verify-2fa`
- [ ] ✓ URL does NOT show password
- [ ] ✓ Check browser DevTools → Network → No password in request body

#### Test 4D: PWA Installation Prompt
- [ ] Open app on mobile or Chrome
- [ ] Wait 2-3 seconds
- [ ] ✓ Should see "Install EDUSANNA App" popup at bottom
- [ ] Click "Install Now"
- [ ] ✓ Chrome should show native install dialog
- [ ] Click "Install"
- [ ] ✓ App added to home screen
- [ ] ✓ Can launch from home screen

#### Test 4E: Session Persistence
- [ ] Login with test@example.com
- [ ] Close browser completely
- [ ] Reopen app
- [ ] ✓ Should still be logged in
- [ ] ✓ No need to sign in again
- [ ] ✓ Dashboard shows user info

---

## Summary Checklist

| Step | Task | Time | Status |
|------|------|------|--------|
| 1 | Update env vars | 5 min | 🔲 TODO |
| 2 | Create tables | 10 min | 🔲 TODO |
| 3 | Enable RLS | 10 min | 🔲 TODO |
| 4A | Test signup | 3 min | 🔲 TODO |
| 4B | Test courses | 3 min | 🔲 TODO |
| 4C | Test admin | 2 min | 🔲 TODO |
| 4D | Test PWA | 2 min | 🔲 TODO |
| 4E | Test session | 2 min | 🔲 TODO |

**Total Time: ~37 minutes to production-ready!**

---

## ✅ When Everything is Complete

After finishing all steps above, you'll have:

- ✅ Secure admin credentials (not exposed)
- ✅ Full database with 9 tables
- ✅ Row Level Security protecting user data
- ✅ Users auto-login after signup
- ✅ No repeated sign-in prompts
- ✅ Engaging course learning interface
- ✅ Progress tracking and certificates
- ✅ Fully functional admin dashboard
- ✅ PWA installable as app
- ✅ Sessions persist for 30 days

---

## 🆘 Troubleshooting

### SQL won't run
**Solution:** 
- Copy/paste each statement separately
- Check Supabase project is correct
- Refresh page and try again

### Admin login doesn't work
**Solution:**
- Verify env vars are set in Vercel
- Restart dev server (`npm run dev`)
- Check console for errors (F12)
- Use exact credentials: tinasheleev@gmail.com / ES#1Jehovah

### Courses show sign-in prompt
**Solution:**
- Clear browser cache (Ctrl+Shift+Del)
- Try in incognito mode
- Check localStorage (F12 → Application)
- Try logging out and back in

### RLS errors in Supabase
**Solution:**
- Make sure 01-create-tables.sql ran successfully first
- Try running one policy at a time
- Refresh Supabase dashboard
- Check Supabase logs for specific errors

---

## 📞 Need Help?

1. **Check documentation:** Read `/FINAL_SETUP_SUMMARY.md`
2. **Re-read this checklist:** Follow steps exactly in order
3. **Check browser console:** F12 → Console tab for errors
4. **Check Supabase logs:** Dashboard → Logs tab
5. **Verify env vars:** Vercel dashboard → Settings → Environment Variables

---

**You've got this! 🚀**

Follow the checklist above in order, and your EDUSANNA platform will be live and fully functional!
