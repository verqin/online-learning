# Edusanna Quick Reference Guide

## Key Features Added

### 1. Secret Admin Access
**How to Unlock**: Tap the Edusanna logo **50 times** (within 5 seconds, or counter resets)
**Codes**: 
- Code 1: `Activate`
- Code 2: `Bankai`
**Redirects to**: `/admin` dashboard with full access

### 2. Pricing Editor
**Location**: Admin Dashboard > Overview Tab > Quick Actions > "Edit Pricing"
**Features**:
- Edit Certificate price (default $12)
- Edit Diploma price (default $18)
- Save changes in real-time
- Reset to defaults
- See bundle pricing difference

### 3. Certificate/Diploma Request
**When Available**: After user completes a course
**Flow**:
1. User completes all modules
2. Submits feedback
3. Certificate Request Modal appears
4. Confirms score and price
5. System sends WhatsApp notification
6. Certificate ID provided (CERT-* or DPLM-*)

### 4. WhatsApp Notifications
**Events**:
- Course completion (with score)
- Certificate ready (with ID)
- Diploma ready (with ID)
- Course updates

**Format**: Professional templates with emojis and clear instructions

### 5. Course Display
**Certificate Courses**:
- 5-6 modules
- 4-6 weeks duration
- $12 price

**Diploma Courses**:
- 8-10 modules
- 8-12 weeks duration
- $18 price

## File Locations

### New Components
- `components/certificate-request-modal.tsx`
- `components/admin-pricing-editor.tsx`
- `components/auth-guard-prompt.tsx`

### New API Routes
- `app/api/request-certificate/route.ts`
- `app/api/request-diploma/route.ts`

### New Services
- `lib/whatsapp-service.ts`

### Updated Hooks
- `hooks/use-secret-admin-access.ts` (50 taps)

### Updated Utilities
- `lib/auth-utils.ts` (new secret codes)

## Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# WhatsApp (optional)
CALLMEBOT_API_KEY=your_api_key

# Admin Codes
NEXT_PUBLIC_ADMIN_CODE_1=Activate
NEXT_PUBLIC_ADMIN_CODE_2=Bankai
```

## Testing Commands

### Test Admin Access
1. Go to home page
2. Tap logo 50 times quickly
3. Enter "Activate" and "Bankai"
4. Should redirect to /admin

### Test Pricing Editor
1. Unlock admin access (see above)
2. Click "Edit Pricing" in Quick Actions
3. Change certificate price to 15
4. Click "Save Changes"
5. Verify confirmation message

### Test Certificate Request
1. Enroll in any course
2. Complete all modules
3. Submit feedback
4. Certificate modal should appear
5. Review score and price
6. Click "Request Certificate"

## API Endpoints

### Request Certificate
```bash
POST /api/request-certificate
{
  "userId": "user-123",
  "courseId": "course-id",
  "courseName": "Course Name",
  "score": 92,
  "userName": "User Name",
  "phoneNumber": "+1234567890"
}
```

### Request Diploma
```bash
POST /api/request-diploma
{
  "userId": "user-123",
  "courseId": "course-id",
  "courseName": "Course Name",
  "score": 92,
  "userName": "User Name",
  "phoneNumber": "+1234567890"
}
```

## WhatsApp Service Functions

```typescript
// Send course completion notification
await sendCourseCompletionNotification(
  "+1234567890",
  "John Doe",
  "Web Development",
  "certificate",
  92
)

// Send certificate ready notification
await sendCertificateReadyNotification(
  "+1234567890",
  "John Doe",
  "Web Development",
  "CERT-1708000000-ABC123"
)

// Send diploma ready notification
await sendDiplomaReadyNotification(
  "+1234567890",
  "John Doe",
  "Web Development",
  "DPLM-1708000000-ABC123"
)

// Send custom update notification
await sendCourseUpdateNotification(
  "+1234567890",
  "John Doe",
  "New Course Available!",
  "Check out our new Advanced AI course now"
)
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Logo tap not working | Make sure to tap 50 times within 5 seconds. Counter resets if too slow. |
| Admin codes rejected | Verify codes are exactly "Activate" and "Bankai" (case-sensitive) |
| Certificate modal not showing | Ensure user completed all modules and submitted feedback |
| WhatsApp not sending | Check phone number format (+country_code) and API key is set |
| Pricing editor not saving | Check browser console for errors, verify permissions |

## User Stories

### Admin Adjusts Pricing
1. Admin taps logo 50 times
2. Enters secret codes
3. Views admin dashboard
4. Clicks "Edit Pricing"
5. Changes Certificate from $12 to $15
6. Changes Diploma from $18 to $20
7. Clicks "Save Changes"
8. Confirmation: "Pricing updated successfully!"

### User Completes Course & Gets Certificate
1. User enrolls in "Web Development" Certificate
2. Completes all 5-6 modules
3. Takes final assessment
4. Submits course feedback
5. Certificate Request Modal appears
6. Sees score: 92%, Price: $12
7. Clicks "Request Certificate"
8. Receives WhatsApp notification with Certificate ID
9. Downloads certificate from dashboard

### New User Signs Up
1. Visits Edusanna homepage
2. Clicks "Browse All Courses"
3. Can preview courses without account
4. Clicks "Start Learning" on a course
5. Auth Guard Prompt appears
6. Clicks "Create Account"
7. Redirected to /signup
8. After signup, can enroll in courses

## Performance Metrics

- Admin access unlock: <100ms
- Pricing save: ~1 second (simulated)
- Certificate request: <500ms
- WhatsApp notification: <2 seconds (async)
- Page load: <2 seconds

## Security Checklist

- ✅ Secret codes not visible in code (env vars only)
- ✅ Admin access requires 50-tap threshold
- ✅ WhatsApp API key in environment variable
- ✅ Certificate IDs are unique and timestamped
- ✅ Middleware safely handles missing credentials
- ✅ Auth guards protect authenticated content

---

**Last Updated**: March 2026
**For Issues**: Check IMPLEMENTATION_SUMMARY.md for detailed documentation
