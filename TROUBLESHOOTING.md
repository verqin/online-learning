# Troubleshooting Guide - Certificate & Diploma Payment System

## Payment Flow Issues

### "PayPal credentials not configured" Error

**Cause:** `NEXT_PUBLIC_PAYPAL_CLIENT_ID` or `PAYPAL_SECRET` not set in Vercel

**Solution:**
1. Go to Vercel Project Settings
2. Click Environment Variables
3. Add `NEXT_PUBLIC_PAYPAL_CLIENT_ID` - your PayPal Client ID
4. Add `PAYPAL_SECRET` - your PayPal Secret
5. Redeploy the project
6. Clear browser cache (Ctrl+Shift+Del)
7. Try payment again

**Verification:**
```bash
# Check in Vercel logs - should NOT see this error
[v0] PayPal credentials not configured
```

---

### "Failed to create PayPal order" Error

**Cause:** 
- Invalid PayPal credentials
- API endpoint issue
- Network connectivity problem

**Solution:**
1. Verify PayPal credentials are correct
2. Check `PAYPAL_API_BASE` is set to `https://api.paypal.com` (production)
3. For testing, use `https://api.sandbox.paypal.com`
4. Check network in browser DevTools (F12)
5. Verify API response in Network tab

**Testing:**
```
1. Open DevTools (F12)
2. Go to Network tab
3. Click "Pay Now"
4. Look for request to `/api/paypal/create-order`
5. Check response status (should be 200)
```

---

### "Payment verification failed" Error

**Cause:**
- PayPal order doesn't exist
- Payment not completed in PayPal
- Order ID mismatch

**Solution:**
1. Don't close browser during payment
2. Wait for PayPal approval
3. Ensure you click "Return to Edusanna" after payment
4. Check PayPal account for successful transaction
5. Try payment again if first attempt failed

**What's happening:**
- System verifies payment directly with PayPal
- If verification fails, payment is NOT charged
- Safe to try again

---

## Database Issues

### "You have already paid for this course certificate"

**Cause:** 
- User already has a completed payment for this course and credential type
- System prevents duplicate payments

**Solution:**
1. Verify this is not a duplicate attempt
2. Check admin dashboard at `/admin/payments`
3. Look for previous payment for this student + course combo
4. If legitimate, contact admin to remove old record
5. Can then process new payment

**Is This Safe?**
✅ Yes - system is preventing fraud/accidental double charges

---

### "Database table not found" Error

**Cause:** 
- SQL migration script not executed
- `certificate_payments` table missing

**Solution:**
1. Open your Supabase project
2. Go to SQL Editor
3. Create new query
4. Copy content from `/scripts/setup-certificate-payments.sql`
5. Execute the script
6. Verify success message
7. Refresh application

**Verification:**
```
In Supabase:
1. Go to Table Editor
2. Should see `certificate_payments` in left sidebar
3. Should have 10+ columns
```

---

### "Permission denied" When Updating Payment

**Cause:**
- RLS (Row Level Security) policies not applied
- User lacks permission to update payments

**Solution:**
1. Run SQL migration to apply RLS policies
2. Verify admin user role
3. Check user has service role in Supabase
4. Refresh browser

**Check RLS Policies:**
```
In Supabase:
1. Go to certificate_payments table
2. Click "RLS" button (top right)
3. Should see 4 policies
```

---

## Authentication Issues

### "You need to login" When Accessing Payment Page

**Cause:**
- User not logged in
- Session expired
- User not authenticated

**Solution:**
1. Go to `/login`
2. Enter email and password
3. Log in successfully
4. Navigate back to `/certificate-payment`
5. Should now see completed courses

---

### Admin Dashboard Not Loading

**Cause:**
- Admin role missing
- RLS policy blocking access
- Authentication issue

**Solution:**
1. Verify user is logged in
2. Check user has admin role in Supabase
3. Verify RLS policies are configured
4. Try clearing browser cache (Ctrl+Shift+Del)
5. Try in incognito mode

**Admin Check:**
```
Supabase:
1. Go to Authentication → Users
2. Find admin user
3. Check user_metadata for admin: true
4. If missing, update user metadata
```

---

## WhatsApp Notification Issues

### "Admin phone number not configured"

**Cause:** 
- `ADMIN_WHATSAPP_PHONE` not set in Vercel
- Missing or invalid phone format

**Solution:**
1. Add to Vercel Environment Variables:
   - Key: `ADMIN_WHATSAPP_PHONE`
   - Value: `+263712345678` (with country code)
2. Redeploy project
3. Test payment again

**Format Requirements:**
- Must start with `+`
- Must include country code
- Example: `+1234567890` (10 digits minimum after country code)

---

### "CallMeBot API key not configured"

**Cause:**
- `CALLMEBOT_API_KEY` not set in Vercel
- WhatsApp notifications disabled

**Solution:**
1. To enable notifications:
   - Get API key from CallMeBot
   - Add to Vercel: `CALLMEBOT_API_KEY`
   - Redeploy

2. To disable notifications:
   - System will skip sending if API key missing
   - Payments will still process normally

---

### "Invalid phone number format"

**Cause:**
- Phone number doesn't start with `+`
- Wrong format provided
- Missing country code

**Solution:**
1. Use format: `+{country_code}{number}`
2. Examples:
   - Zimbabwe: `+263712345678`
   - USA: `+12025551234`
   - UK: `+442071838750`
   - South Africa: `+27123456789`

**Testing:**
```
Valid:  +263712345678
Valid:  +1234567890
Invalid: 0712345678 (missing +)
Invalid: 263712345678 (missing +)
Invalid: +263 712 345 678 (has spaces)
```

---

## Course and Certificate Issues

### "No Completed Courses" Message

**Cause:**
- User hasn't completed any courses
- Course progress not marked 100%

**Solution:**
1. Complete a course first
2. Ensure progress reaches 100%
3. Go back to `/certificate-payment`
4. Courses should appear in dropdown

**Check Progress:**
```
In Dashboard:
1. Go to My Courses
2. Look for 100% progress courses
3. Only those can get certificates
```

---

### Certificate Not Downloaded After Payment

**Cause:**
- Admin hasn't marked payment as sent
- Certificate not generated
- Email not received

**Solution:**
1. Contact admin at `/admin/payments`
2. Verify payment status shows "Sent"
3. Check email spam folder
4. Wait up to 24 hours for processing
5. Check if email address is correct

---

## Network and Performance Issues

### Slow Payment Processing

**Cause:**
- Network latency
- PayPal API slow
- Supabase database slow

**Solution:**
1. Check internet connection
2. Try a different network (WiFi vs Mobile)
3. Try at different time
4. Use wired connection if possible

**Performance Check:**
```
1. Open DevTools (F12)
2. Go to Performance tab
3. Click payment flow
4. Check request times
```

---

### "Network Request Failed"

**Cause:**
- Internet disconnected
- Firewall blocking connection
- PayPal service down

**Solution:**
1. Check internet connection
2. Disable VPN if using
3. Disable browser extensions
4. Try different browser
5. Check PayPal status page

---

## Browser Issues

### PayPal Buttons Not Showing

**Cause:**
- PayPal SDK not loaded
- JavaScript disabled
- Browser compatibility issue

**Solution:**
1. Refresh page (F5)
2. Clear browser cache (Ctrl+Shift+Del)
3. Try different browser (Chrome, Firefox, Safari)
4. Enable JavaScript in settings
5. Disable ad blockers

**Test:**
```
1. Open DevTools (F12)
2. Go to Console tab
3. Should NOT see errors
4. Should see "Paypal SDK loaded" message
```

---

### Form Elements Not Responding

**Cause:**
- JavaScript error
- Browser extension interfering
- Outdated browser

**Solution:**
1. Try incognito/private mode
2. Disable browser extensions
3. Update browser to latest version
4. Try different browser
5. Clear cache and cookies

---

## Admin Specific Issues

### Can't Access Admin Dashboard

**Cause:**
- Not logged in
- Not admin user
- URL incorrect

**Solution:**
1. Verify URL is `/admin/payments` (exact)
2. Log in first
3. Check user is admin in Supabase
4. Try refreshing page
5. Check browser console for errors

---

### Payment Status Won't Update

**Cause:**
- Insufficient permissions
- RLS policy blocking update
- Database error

**Solution:**
1. Refresh page
2. Check if payment is already processed
3. Verify user is admin
4. Check database in Supabase
5. Try marking different payment

---

## Getting Help

### When Reporting Issues, Include:

1. **Error Message:** Exact text of error
2. **Browser:** Chrome, Firefox, Safari, etc.
3. **Steps to Reproduce:** How to trigger the issue
4. **Screenshots:** Of error and page state
5. **Console Errors:** From DevTools (F12)
6. **Network Logs:** From DevTools Network tab
7. **User Email:** Account attempting transaction

### Where to Check Logs:

**Client Side:**
```
1. Open DevTools (F12)
2. Go to Console tab
3. Look for error messages
4. Take screenshot
```

**Server Side:**
```
Vercel:
1. Go to project
2. Click Deployments
3. Click current deployment
4. View Logs
5. Search for error timestamp
```

**Database:**
```
Supabase:
1. Go to project
2. Click Logs
3. Search for errors
4. Check table data
```

---

## Quick Reference

### Critical Environment Variables
- [ ] `NEXT_PUBLIC_PAYPAL_CLIENT_ID` 
- [ ] `PAYPAL_SECRET`
- [ ] `PAYPAL_API_BASE` = `https://api.paypal.com`

### Critical Database Setup
- [ ] SQL migration executed
- [ ] `certificate_payments` table exists
- [ ] RLS policies enabled
- [ ] Indexes created

### Before Requesting Help
- [ ] Checked environment variables
- [ ] Checked database migration
- [ ] Checked browser console errors
- [ ] Tried clearing cache
- [ ] Tried different browser
- [ ] Read this guide

---

**Last Updated:** 2025  
**Version:** 1.0  
**Status:** Complete
