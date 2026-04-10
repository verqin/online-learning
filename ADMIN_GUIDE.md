# Admin Guide - Certificate & Diploma Payment System

## Quick Navigation

- **Payment Dashboard:** `/admin/payments`
- **Main Dashboard:** `/user-dashboard`
- **Home:** `/`

## Dashboard Overview

The Payment Management dashboard displays:

### Key Metrics
- **Total Payments:** All payments received
- **Pending Review:** Payments waiting for verification
- **Reviewed:** Payments marked as verified
- **Sent:** Certificates/diplomas sent to students

### Payment Status Flow

```
Pending Review → Reviewed → Certificate Sent
```

## Processing Payments Step-by-Step

### Step 1: Review Payment
1. Go to `/admin/payments`
2. Look for payments with status "Pending Review" (Yellow badge)
3. Click the eye icon to view full payment details
4. Verify:
   - Student name matches
   - Email is correct
   - Course and credential type
   - PayPal Order ID (for verification)
   - Payment amount ($12 for Certificate, $18 for Diploma)

### Step 2: Mark as Noted
1. After verifying, click "Mark Noted" button
2. Payment status changes to "Reviewed" (Blue badge)
3. You can now proceed to generate the certificate

### Step 3: Send Certificate
1. Click "Mark Sent" button (Green)
2. This indicates certificate PDF has been generated and sent to student
3. Payment is now complete

## Understanding Payment Details

When you click the eye icon for a payment, you'll see:

### Certificate ID
- Format: `CERT-{timestamp}-{random}`
- Unique identifier for this certificate
- Used for certificate verification

### PayPal Order ID
- PayPal's transaction ID
- Can be used to verify payment in PayPal
- Links to actual payment in PayPal system

### Date Paid
- When the student completed payment
- Helps track processing time

## Processing Tips

### Quick Processing
1. Review all "Pending Review" payments daily
2. Mark as noted after verification
3. Generate and send certificates in bulk

### Verification Checklist
- [ ] Student name spelled correctly
- [ ] Email address is valid
- [ ] Course completed (100% progress)
- [ ] Correct credential type selected
- [ ] Payment amount matches credential type
- [ ] PayPal Order ID exists

### Common Issues

**Payment shows but not verifying?**
- Check student email is correct
- Verify course ID in system
- Confirm PayPal transaction completed

**Student not receiving certificate?**
- Ensure you marked as "Certificate Sent"
- Check student's spam folder
- Verify email address in payment record

**Duplicate payment?**
- System prevents paying twice for same course
- If issue persists, check PayPal for refund

## Daily Workflow

### Morning
1. Check dashboard for new pending payments
2. Review and mark as noted
3. Generate certificates for reviewed payments

### Afternoon
1. Follow up on any processing issues
2. Send certificates to students
3. Update payment statuses

### Evening
1. Generate report of day's payments
2. Archive processed certificates
3. Prepare for next day

## Payment Statistics

### Dashboard Shows:
- Total payment count
- Revenue breakdown (certificates vs diplomas)
- Processing rate
- Pending items

### Manual Calculation:
```
Total Revenue = (Certificates × $12) + (Diplomas × $18)

Example:
- 10 certificates = 10 × $12 = $120
- 5 diplomas = 5 × $18 = $90
- Total = $210
```

## WhatsApp Notifications

When a payment is received, the system automatically sends a WhatsApp notification to the admin with:
- Student name
- Course name
- Payment amount
- Link to check dashboard

**Note:** Requires `CALLMEBOT_API_KEY` and `ADMIN_WHATSAPP_PHONE` to be configured

## Certificate Generation

### Current Process:
1. Admin marks payment as "Noted"
2. Admin marks payment as "Certificate Sent"
3. Email is sent with PDF attachment

### Future Enhancements:
- Automatic PDF generation
- Email scheduling
- Batch processing

## Accessing the Admin Dashboard

### Requirements:
- Must be logged in with Supabase account
- Must have appropriate permissions
- Admin credentials needed

### URL: `/admin/payments`

### If You Can't Access:
1. Verify you're logged in
2. Check user email is in admin list
3. Contact system administrator

## Filtering and Sorting

### Current Filters:
- Status: Pending, Reviewed, Sent

### Sorting Options:
- By date (newest first)
- By student name
- By amount

### Wishlist Features:
- Search by student name
- Filter by date range
- Filter by course
- Export to CSV

## Common Actions

### View Payment Details
```
Click Eye Icon → View all information → Click Close
```

### Mark Payment as Verified
```
Click "Mark Noted" → Status changes to "Reviewed"
```

### Send Certificate
```
Click "Mark Sent" → Status changes to "Sent"
```

### Process Multiple Payments
```
1. View first payment
2. Mark as noted
3. Move to next
4. Repeat
```

## Troubleshooting

### Dashboard Not Loading?
- Refresh the page
- Clear browser cache
- Try different browser
- Check internet connection

### Can't Update Payment Status?
- Verify you're logged in
- Check if payment is already processed
- Refresh page and try again
- Check browser console for errors

### Missing Payments?
- Check date range
- Verify status filter
- Refresh dashboard
- Check database in Supabase

## Security

### Best Practices:
- ✅ Log out after use
- ✅ Don't share login credentials
- ✅ Verify payments before processing
- ✅ Keep admin URL secret
- ✅ Report suspicious activity

### DO NOT:
- ❌ Share admin credentials
- ❌ Process unverified payments
- ❌ Refund without PayPal confirmation
- ❌ Share student information publicly

## Database Info

### Payment Record Fields:
- student_name: Student's full name
- email: Contact email
- course_name: Course taken
- certificate_type: Certificate or Diploma
- amount: Payment amount
- payment_status: Current status
- created_at: Payment date
- certificate_id: Unique credential ID

## Support

### For Technical Issues:
- Check the Payment System Setup guide
- Review error messages in browser
- Check Vercel logs
- Check Supabase database status

### For Process Questions:
- Review this guide
- Check system documentation
- Contact system administrator
- Check implementation checklist

## Monthly Tasks

- [ ] Reconcile with PayPal statements
- [ ] Back up certificate records
- [ ] Review processing efficiency
- [ ] Plan for improvements
- [ ] Archive old payments (if applicable)
- [ ] Generate revenue report
- [ ] Review student feedback

## Performance Tips

- Process payments daily to reduce backlog
- Use filters to find specific payments quickly
- Mark as noted immediately after verifying
- Generate and send certificates without delay
- Keep track of processing time per payment

---

**Admin Guide Version:** 1.0  
**Last Updated:** 2025  
**For Admins Only**
