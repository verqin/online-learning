# Admin Dashboard Login Guide

## Quick Access

**Admin Dashboard URL:** `https://yourdomain.com/admin/dashboard`

## Admin Credentials

Your admin credentials are securely stored as environment variables in Vercel:

### Email
```
tinasheleev@gmail.com
```

### Password
The password is set in your Vercel environment variables as `ADMIN_PASSWORD`

To find your password:
1. Go to Vercel Dashboard → Your Project
2. Click "Settings" button
3. Navigate to "Environment Variables"
4. Look for `ADMIN_PASSWORD` variable
5. Use the value shown there

## Two-Factor Authentication (2FA)

After successfully entering your email and password, the system will request a **6-digit code**.

This code is sent to your **WhatsApp number** which is configured as `ADMIN_WHATSAPP_NUMBER` in environment variables.

### To Complete 2FA Login:
1. Check your WhatsApp for the 6-digit code
2. Enter it in the 2FA verification page
3. You'll be logged into the admin dashboard

## Admin Dashboard Features

Once logged in, you can access:

### 1. **Dashboard** (Main Hub)
- View platform statistics
- See user count and engagement metrics
- Monitor recent activities

### 2. **Users Management**
- View all registered users
- See user details (email, signup date, status)
- Manage user accounts

### 3. **Certificates Management**
- View all issued certificates
- Track certificate status
- Manage diploma vs certificate approvals

### 4. **Payments Tracking**
- Monitor all payments received
- View transaction history
- Track revenue

### 5. **Analytics**
- Detailed platform analytics
- Course popularity metrics
- User engagement statistics

### 6. **Sample Certificate Generator**
- Create sample certificates for previewing
- Edit certificate details in real-time
- Download PDF samples
- Send certificates to users via email (manual Gmail send)

### 7. **Settings**
- Configure system settings
- Manage platform preferences

## Troubleshooting

### Can't Login?
- Verify email is exactly: `tinasheleev@gmail.com`
- Check that password matches `ADMIN_PASSWORD` env var
- Ensure WhatsApp number is correct for 2FA code

### No 2FA Code Received?
- Check your WhatsApp for any messages
- Verify `ADMIN_WHATSAPP_NUMBER` env var is correct
- Wait a few seconds, code may be delayed

### Lost Access?
- Contact Vercel support to reset environment variables
- Regenerate new `ADMIN_PASSWORD` and `ADMIN_WHATSAPP_NUMBER`

## Security Notes

- Keep your password and WhatsApp number confidential
- Never share admin credentials with unauthorized users
- All admin actions are logged and auditable
- Sessions automatically expire after inactivity for security

## Accessing Admin Dashboard

**Step 1:** Navigate to `/admin/dashboard`
```
https://yourdomain.com/admin/dashboard
```

**Step 2:** Login with credentials
```
Email: tinasheleev@gmail.com
Password: [Your admin password from env vars]
```

**Step 3:** Enter 2FA code
```
6-digit code sent to your WhatsApp
```

**Step 4:** Access admin features
You're now logged in and can manage the platform!

---

**Note:** All credentials are environment variables stored securely in Vercel. They are NOT hardcoded in the application.
