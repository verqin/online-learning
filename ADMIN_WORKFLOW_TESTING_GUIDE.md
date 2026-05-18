# Complete Admin Dashboard Testing Guide

## System Overview

The Edusanna Admin Dashboard is a comprehensive platform management interface with the following modules:
- User Management
- Certificate & Diploma Management
- Payment Processing
- Analytics & Reporting
- System Settings
- Security (2FA)

---

## Prerequisites for Testing

Before testing, ensure:

1. **Database Setup Complete**:
   - `001_edusanna_schema.sql` - Already run successfully
   - `05-migrate-courses-to-supabase.sql` - Must be run in Supabase SQL Editor
   
2. **Environment Variables Set** (in Vercel):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_EMAIL=tinasheleev@gmail.com`
   - `ADMIN_PASSWORD=<your-password>`
   - `ADMIN_WHATSAPP_NUMBER=<your-number>`
   - `SMTP_HOST=smtp.gmail.com` (for emails)
   - `SMTP_FROM_EMAIL=<your-email>`
   - `SMTP_PASSWORD=<your-app-password>`

3. **App Deployed**: Latest version pushed to Vercel

---

## Test Plan A: Admin Login & Authentication

### Test A1: Admin 2FA Login
**Goal**: Verify admin can login with two-factor authentication

**Steps**:
1. Go to `https://yourdomain.com/login`
2. Enter email: `tinasheleev@gmail.com`
3. Enter admin password
4. Click Login
5. Should redirect to `/admin/verify-2fa`
6. Check WhatsApp for 6-digit code
7. Enter code in the verification page
8. Should redirect to `/admin/dashboard`

**Expected Result**: ✓ Admin logged in, dashboard displays
**Actual Result**: ___________

---

### Test A2: Admin Session Persistence
**Goal**: Verify admin stays logged in across page refreshes

**Steps**:
1. Login as admin (see Test A1)
2. Navigate to different admin pages
3. Refresh the page (F5)
4. Go back to dashboard

**Expected Result**: ✓ Still logged in, no redirect to login
**Actual Result**: ___________

---

### Test A3: Inactivity Timeout
**Goal**: Verify automatic logout after 30 minutes of inactivity

**Steps**:
1. Login as admin
2. Don't interact with the page for 30 minutes
3. Try to navigate or interact

**Expected Result**: ✓ Automatic logout, redirect to login page
**Actual Result**: ___________

---

## Test Plan B: Admin Dashboard Home

### Test B1: Dashboard Stats Display
**Goal**: Verify all stats display correctly

**Steps**:
1. Go to `/admin/dashboard`
2. Check the stat cards: Total Users, Payments, Certificates, Revenue

**Expected Result**: ✓ All stats visible and properly formatted
**Actual Result**: ___________

---

### Test B2: Navigation Menu
**Goal**: Verify all menu items are accessible

**Steps**:
1. From dashboard, click each navigation item:
   - Users
   - Certificates
   - Payments
   - Analytics
   - Settings

**Expected Result**: ✓ All pages load without errors
**Actual Result**: ___________

---

## Test Plan C: Certificate Management

### Test C1: Sample Certificate Generation
**Goal**: Create and edit certificate in real-time

**Steps**:
1. Go to `/admin/sample-certificate`
2. Edit form fields:
   - Student Name: "Test Student"
   - Student Email: "test@example.com"
   - Course Name: "React Advanced"
   - Certificate Type: Select "Certificate"
   - Completion Date: Today's date
3. Click "Preview" button
4. Certificate preview should display

**Expected Result**: ✓ Preview generated successfully
**Actual Result**: ___________

---

### Test C2: Certificate Download
**Goal**: Download certificate as PDF

**Steps**:
1. From Test C1, preview is visible
2. Click "Download PDF" button
3. Check browser downloads folder
4. Open the PDF file

**Expected Result**: ✓ PDF downloaded and opens correctly
**Actual Result**: ___________

---

### Test C3: Certificate Email Sending
**Goal**: Send certificate via email

**Steps**:
1. From `/admin/sample-certificate`
2. Fill all fields (see Test C1)
3. Generate preview
4. Click "Send Certificate via Email"
5. Check your email inbox
6. Verify email received

**Expected Result**: ✓ Email sent successfully with certificate details
**Actual Result**: ___________

---

### Test C4: View Issued Certificates
**Goal**: List and manage all issued certificates

**Steps**:
1. Go to `/admin/certificates`
2. Should see list of issued certificates
3. Use search to find a certificate
4. Click action buttons

**Expected Result**: ✓ Certificate list displays with search functionality
**Actual Result**: ___________

---

## Test Plan D: User Management

### Test D1: View All Users
**Goal**: See all registered users

**Steps**:
1. Go to `/admin/users`
2. Should display user list with: Name, Email, Join Date, Courses Enrolled

**Expected Result**: ✓ User list displays correctly
**Actual Result**: ___________

---

### Test D2: Search Users
**Goal**: Find specific user by name or email

**Steps**:
1. From `/admin/users`
2. Enter search term (name or email)
3. List should filter in real-time

**Expected Result**: ✓ Search filters users correctly
**Actual Result**: ___________

---

## Test Plan E: Payment Management

### Test E1: View Pending Payments
**Goal**: See payments awaiting admin action

**Steps**:
1. Go to `/admin/payments`
2. Should display list of pending payments
3. Columns: Student Name, Course, Amount, Status, Date

**Expected Result**: ✓ Payment list visible with status
**Actual Result**: ___________

---

### Test E2: Update Payment Status
**Goal**: Mark payment as processed

**Steps**:
1. From `/admin/payments`
2. Click on a payment
3. Click "Mark as Sent" or "Update Status"
4. Confirm action

**Expected Result**: ✓ Payment status updated
**Actual Result**: ___________

---

## Test Plan F: Analytics & Reporting

### Test F1: View Analytics Dashboard
**Goal**: See platform metrics

**Steps**:
1. Go to `/admin/analytics`
2. Should display:
   - Total Users metric
   - Total Payments metric
   - Total Revenue metric
   - Certificates Issued metric
   - Performance metrics

**Expected Result**: ✓ All analytics visible
**Actual Result**: ___________

---

## Test Plan G: Security Features

### Test G1: Input Sanitization
**Goal**: Verify malicious input is blocked

**Steps**:
1. Go to `/admin/sample-certificate`
2. Try entering: `'; DROP TABLE users; --` in student name
3. Try entering SQL injection in email field
4. Click Preview

**Expected Result**: ✓ Input sanitized, no SQL injection possible
**Actual Result**: ___________

---

### Test G2: XSS Protection
**Goal**: Verify script injection is prevented

**Steps**:
1. From certificate form
2. Enter: `<script>alert('XSS')</script>` in a text field
3. Click Preview
4. Check if JavaScript executes

**Expected Result**: ✓ Script is escaped, not executed
**Actual Result**: ___________

---

## Test Plan H: Integration Testing

### Test H1: User Signup and Enrollment
**Goal**: New user signs up and enrolls in course

**Steps**:
1. Go to `/signup`
2. Select plan (Standard or Academia)
3. Fill signup form completely
4. Submit
5. Should auto-login
6. Go to `/courses`
7. Find a course
8. Click "Start Learning"
9. Check `/admin/users` - new user should appear

**Expected Result**: ✓ User created, enrolled, visible in admin panel
**Actual Result**: ___________

---

### Test H2: End-to-End Certificate Workflow
**Goal**: Complete workflow from course completion to certificate issuance

**Steps**:
1. User completes course (mark enrollment as complete)
2. Admin goes to `/admin/sample-certificate`
3. Admin fills in user details
4. Admin generates and downloads PDF
5. Admin sends certificate via email
6. User receives email with certificate
7. Admin can view issued certificate in `/admin/certificates`

**Expected Result**: ✓ Complete workflow works end-to-end
**Actual Result**: ___________

---

## Test Plan I: Error Handling

### Test I1: Network Error Recovery
**Goal**: App handles network errors gracefully

**Steps**:
1. Go to `/admin/certificates`
2. Disconnect internet (or use DevTools)
3. Try to perform an action
4. Should show error message
5. Reconnect and retry

**Expected Result**: ✓ Error message displayed, can retry
**Actual Result**: ___________

---

## Test Plan J: Performance

### Test J1: Dashboard Load Time
**Goal**: Admin dashboard loads quickly

**Steps**:
1. Open DevTools (F12)
2. Go to `/admin/dashboard`
3. Check Network tab for load time

**Expected Result**: ✓ Loads in < 2 seconds
**Actual Result**: ___________

---

## Test Plan K: Mobile Responsiveness

### Test K1: Admin Dashboard on Mobile
**Goal**: Dashboard works on mobile devices

**Steps**:
1. Open DevTools
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone 12 or similar
4. Navigate admin pages
5. Check layout and functionality

**Expected Result**: ✓ All features work on mobile
**Actual Result**: ___________

---

## Summary Checklist

- [ ] A1: Admin 2FA Login works
- [ ] A2: Session persistence works
- [ ] A3: Inactivity timeout works
- [ ] B1: Dashboard stats display
- [ ] B2: Navigation menu works
- [ ] C1: Certificate generation works
- [ ] C2: Certificate download works
- [ ] C3: Certificate email sending works
- [ ] C4: Certificate list displays
- [ ] D1: User list displays
- [ ] D2: User search works
- [ ] E1: Payment list displays
- [ ] E2: Payment status update works
- [ ] F1: Analytics display
- [ ] G1: SQL injection prevented
- [ ] G2: XSS prevention works
- [ ] H1: User signup integration works
- [ ] H2: End-to-end certificate workflow works
- [ ] I1: Error handling works
- [ ] J1: Performance acceptable
- [ ] K1: Mobile responsive

---

## Issues Found During Testing

| Issue | Severity | Steps to Reproduce | Expected Behavior | Actual Behavior | Fix Applied |
|-------|----------|------------------|-------------------|-----------------|-------------|
|       |          |                   |                   |                 |             |
|       |          |                   |                   |                 |             |

---

## Sign-Off

**Tester Name**: ___________
**Date**: ___________
**Overall Status**: _____ PASS / _____ FAIL

**Comments**:
___________________________________________________________________________

---

## Deployment Checklist Before Production

- [ ] All critical tests passed (A, C, H, G)
- [ ] No blocking issues found
- [ ] SMTP configured for email sending
- [ ] Supabase security policies verified
- [ ] Admin user verified in database
- [ ] Database backups configured
- [ ] Error logging configured
- [ ] Performance monitoring enabled
- [ ] SSL certificate valid
- [ ] All env vars set in Vercel
