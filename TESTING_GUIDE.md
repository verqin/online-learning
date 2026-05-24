# Comprehensive SaaS Testing Guide

## Overview
This guide covers testing the enhanced EDUSANNA learning platform with fully functional admin dashboard, improved 2FA system, and persistent progress tracking.

---

## 1. 2FA System Testing

### Test 1.1: 2FA Code Generation & Sending
**Steps:**
1. Navigate to `/login`
2. Enter admin email (from `ADMIN_EMAIL` env var)
3. Click "Send 2FA Code"
4. **Expected:** Code should be sent to WhatsApp within 1-3 minutes via CallMeBot

**Success Criteria:**
- Code appears in WhatsApp within 3 minutes
- API response shows: `{ success: true, message: "..." }`
- Console shows: `[v0] 2FA code sent...`
- Code expires in 18 minutes (NOT 10 minutes)

### Test 1.2: 2FA Code Verification
**Steps:**
1. Receive code from WhatsApp
2. Enter 6-digit code on verification page
3. Click "Verify Code"
4. **Expected:** Redirect to admin dashboard

**Success Criteria:**
- Code verifies successfully
- Admin session created
- Stored in localStorage as `isAdmin=true`
- No console errors

### Test 1.3: 2FA Code Expiry
**Steps:**
1. Send 2FA code
2. Wait 18+ minutes
3. Try to verify expired code
4. **Expected:** "Code has expired" error

**Success Criteria:**
- Expired codes rejected cleanly
- User can request new code
- No console errors
- Proper error message displayed

### Test 1.4: 2FA Retry Logic
**Steps:**
1. Disable internet connection temporarily
2. Send 2FA code
3. Code should still send after retries
4. **Expected:** Code arrives even with network issues

**Success Criteria:**
- Retry logic works (up to 3 attempts)
- Exponential backoff applied
- Console logs retry attempts
- Code eventually arrives

### Test 1.5: 2FA Database Persistence
**Steps:**
1. Send 2FA code
2. Restart server/refresh page
3. Code should still be valid
4. **Expected:** Code works after server restart

**Success Criteria:**
- Code stored in `two_fa_codes` Supabase table
- Survives server restart
- Expiry time correct (18 minutes)
- Used flag updated after verification

---

## 2. Admin Dashboard Testing

### Test 2.1: Dashboard Load & Stats Display
**Steps:**
1. Login with admin credentials
2. Navigate to `/admin/dashboard`
3. **Expected:** Dashboard loads with real stats

**Success Criteria:**
- Total Users count displays (> 0 if users exist)
- Payments count displays (real data)
- Certificates count displays (real data)
- Revenue shows in $ format
- No hardcoded "0" values
- Stats load from `/api/admin/stats` endpoint

### Test 2.2: User Management
**Steps:**
1. Click "Manage Users" on dashboard
2. Navigate to `/admin/users`
3. **Expected:** Real user list loads

**Success Criteria:**
- Users table displays from database
- No placeholder users (tinashe@example.com removed)
- Search functionality works
- Join dates are real (not hardcoded)
- Enrollment counts are accurate
- Pagination works if >10 users

### Test 2.3: User Deletion
**Steps:**
1. On users page, select a test user
2. Click delete button
3. Confirm deletion
4. **Expected:** User removed from database

**Success Criteria:**
- User deleted from Supabase
- List refreshes immediately
- Cascading delete works (enrollments deleted)
- Proper confirmation dialog shown

### Test 2.4: Navigation Links
**Steps:**
1. From dashboard, click each admin section
2. Verify links to: Users, Payments, Certificates, Settings
3. **Expected:** All pages load

**Success Criteria:**
- No 404 errors
- Back navigation works
- All sections functional
- Logout button works on all pages

---

## 3. Learning Flow & Progress Tracking

### Test 3.1: Course Enrollment
**Steps:**
1. Login as regular user
2. Navigate to `/courses`
3. Click "Enroll Now" on a course
4. **Expected:** User enrolled in course

**Success Criteria:**
- Enrollment created in database
- User redirected to course page
- Can see course modules
- Progress starts at 0%

### Test 3.2: Module Completion Tracking
**Steps:**
1. Enrolled in a course
2. Click "Mark as Complete" on first module
3. **Expected:** Progress updates to database

**Success Criteria:**
- Progress percentage increases
- Completion saved in `progress` table
- Next module unlocks
- Cannot complete previous modules again
- Enrollment progress updated

### Test 3.3: Progress Persistence
**Steps:**
1. Complete 2-3 modules in a course
2. Refresh the page
3. **Expected:** Progress persists

**Success Criteria:**
- Module completion state retained
- Progress bar shows same percentage
- No console errors on reload
- Data loaded from Supabase, not localStorage

### Test 3.4: User Dashboard Enrollment View
**Steps:**
1. Login as user with enrollments
2. Navigate to `/dashboard`
3. **Expected:** Enrolled courses display

**Success Criteria:**
- Real enrollments from database show
- No empty array placeholder
- Course progress displays correctly
- Can click to continue learning

### Test 3.5: Quiz Functionality
**Steps:**
1. On a module, answer quiz questions
2. Click "Mark as Complete"
3. **Expected:** Quiz answers saved

**Success Criteria:**
- Answers recorded (if schema supports)
- Module marked complete
- Progress updates
- Cannot retake quiz if already completed

---

## 4. Error Handling & Edge Cases

### Test 4.1: Network Errors
**Steps:**
1. Disable internet connection
2. Try to perform API action
3. **Expected:** Graceful error handling

**Success Criteria:**
- User-friendly error messages
- "Something went wrong" not shown
- Suggest retry option
- No 500 errors in console

### Test 4.2: Missing Environment Variables
**Steps:**
1. Remove `CALLMEBOT_PHONE` or `CALLMEBOT_APIKEY`
2. Try to send 2FA code
3. **Expected:** Proper error message

**Success Criteria:**
- Error indicates missing config
- User told to configure system
- Fallback behavior (in-memory) works
- Developer can fix via env vars

### Test 4.3: Invalid Data Input
**Steps:**
1. Send empty code to 2FA verify
2. Enter non-numeric characters
3. Try incomplete form submissions
4. **Expected:** Input validation works

**Success Criteria:**
- Form validation prevents submission
- Error messages displayed
- Database constraints enforced
- No crashes from bad input

### Test 4.4: Unauthorized Access
**Steps:**
1. Try to access `/admin/dashboard` without login
2. Try to access `/api/admin/*` without session
3. **Expected:** Redirect to login

**Success Criteria:**
- Unauthorized users rejected
- Redirected to login page
- Session tokens validated
- Admin endpoints protected

### Test 4.5: Concurrent Operations
**Steps:**
1. Click "Mark Complete" rapidly multiple times
2. Open course in 2 tabs, complete module in one
3. **Expected:** Race conditions handled

**Success Criteria:**
- Duplicate completion prevented
- Last-write-wins or conflict resolution
- No database errors
- UI stays in sync

---

## 5. Mobile Responsiveness

### Test 5.1: Admin Dashboard Mobile
**Steps:**
1. Access `/admin/dashboard` on mobile (375px width)
2. Check all elements visible
3. Test touch interactions
4. **Expected:** Full functionality on mobile

**Success Criteria:**
- Stats cards stack properly
- Navigation hamburger works
- Buttons easily tappable
- No horizontal scroll needed

### Test 5.2: Course Page Mobile
**Steps:**
1. Access `/course/[id]` on mobile
2. Expand modules
3. Complete module
4. **Expected:** Full learning on mobile

**Success Criteria:**
- Module content readable
- Quiz questions visible
- Complete button accessible
- Progress bar updates

### Test 5.3: 2FA Verification Mobile
**Steps:**
1. Access `/admin/verify-2fa` on mobile
2. Enter 6-digit code
3. Submit
4. **Expected:** Works on mobile

**Success Criteria:**
- Input field large enough
- Code input auto-focus
- Timer visible and readable
- Resend button tappable

---

## 6. Performance Testing

### Test 6.1: 2FA Send Speed
**Measure:** Time from click to WhatsApp receipt
**Target:** < 5 seconds (including CallMeBot latency)
**Steps:**
1. Start timer
2. Click send 2FA code
3. Check WhatsApp receipt time
4. **Expected:** < 5 seconds

### Test 6.2: Admin Stats Load Time
**Measure:** API response time
**Target:** < 500ms
**Steps:**
1. Monitor network tab
2. Load `/api/admin/stats`
3. **Expected:** < 500ms response

### Test 6.3: Enrollment Creation
**Measure:** Time to create enrollment
**Target:** < 1 second
**Steps:**
1. Click enroll on course
2. Measure time to redirect
3. **Expected:** < 1 second

---

## 7. Data Validation

### Test 7.1: 2FA Code Format
**Steps:**
1. Verify code is exactly 6 digits
2. Check code is numeric only
3. **Expected:** Consistent format

**Success Criteria:**
- Codes always `[0-9]{6}`
- No letters or special chars
- Validation on both frontend and backend

### Test 7.2: Email Format
**Steps:**
1. Try invalid email on login
2. **Expected:** Validation prevents

**Success Criteria:**
- Only valid emails accepted
- Clear error message
- Backend validates too

### Test 7.3: Date Formats
**Steps:**
1. Check user join dates
2. Check enrollment dates
3. Check completion dates
4. **Expected:** Consistent ISO 8601 format

**Success Criteria:**
- All dates in UTC
- Consistent timezone handling
- Display formatted for locale

---

## Quick Smoke Test (5 minutes)

Run this for a quick verification:

1. **2FA**: Send code → Get code in WhatsApp → Verify code → Login
2. **Admin**: Dashboard loads → Stats display → Click Users → See users
3. **Course**: View course → Complete module → Check progress saved
4. **Logout**: Click logout → Redirected to login

**If all 4 pass:** System is working

---

## Debugging Tips

### Enable Debug Logging
- Set `DEBUG=*` in `.env`
- Watch console for `[v0]` prefixed logs
- Check network tab in DevTools for API calls

### Common Issues

| Issue | Solution |
|-------|----------|
| 2FA codes not arriving | Check CallMeBot credentials |
| Admin stats showing 0 | Verify Supabase tables have data |
| Progress not saving | Check enrollments table exists |
| Courses not loading | Verify courses table populated |
| Users page blank | Check profiles table has users |

---

## Sign-Off Checklist

- [ ] 2FA sends and receives codes in 1-3 minutes
- [ ] 2FA codes valid for 18 minutes (not 10)
- [ ] Admin dashboard shows real stats
- [ ] User list populated from database
- [ ] Placeholder users removed
- [ ] Course progress persists after refresh
- [ ] All pages load without errors
- [ ] Mobile responsive
- [ ] Logout works everywhere
- [ ] No hardcoded test data visible
