# Environment Variables Setup Guide for EDUSANNA ONLINE LEARNING

## Overview
This guide explains all environment variables needed for EDUSANNA ONLINE LEARNING and how to configure them in Vercel.

---

## How to Set Environment Variables in Vercel

### Method 1: Vercel Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your **EDUSANNA** project
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)
5. Click **Add New**
6. Enter the variable name and value from tables below
7. Select which environments (Production, Preview, Development)
8. Click **Save**

### Method 2: Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Add environment variable
vercel env add VARIABLE_NAME

# Deploy with new variables
vercel --prod
```

---

## Required Environment Variables

### CallMeBot Integration (For Admin WhatsApp 2FA & Notifications)

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `CALLMEBOT_PHONE` | `263712345678` | Admin's phone number in CallMeBot format (country code + number, no + symbol) |
| `CALLMEBOT_APIKEY` | `4372827` | Your CallMeBot API key (get from https://www.callmebot.com/blog/free-api/) |

**How to get CallMeBot credentials:**
1. Go to [CallMeBot](https://www.callmebot.com/blog/free-api/)
2. Follow their instructions to get your phone number and API key
3. Copy both values to Vercel environment variables

**Usage:** These are used when:
- Admin attempts login and needs 2FA code
- New payment notifications sent to admin
- Course completion notifications
- Certificate ready notifications

---

### Admin Authentication

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `ADMIN_EMAIL` | `tinasheleev@gmail.com` | Admin's email address for login |
| `ADMIN_PASSWORD` | `SecurePassword123!` | Admin's password (use strong password) |

**Usage:** Admin dashboard login at `/admin/dashboard`

---

### Supabase (Database)

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGc...` | Supabase anonymous key (safe for frontend) |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` | Supabase service role key (secret, backend only) |

**How to get Supabase credentials:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click your project
3. Click **Settings** → **API**
4. Copy the URL and keys listed under "Project API keys"

---

### Optional Environment Variables

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `NEXT_PUBLIC_APP_URL` | `https://edusanna.vercel.app` | Your application's public URL |
| `NODE_ENV` | `production` | Should be automatically set by Vercel |

---

## Step-by-Step Configuration

### Step 1: Get CallMeBot Credentials (5 minutes)
1. Visit [CallMeBot Free API](https://www.callmebot.com/blog/free-api/)
2. Follow the setup instructions
3. Note your **Phone Number** and **API Key**

### Step 2: Add to Vercel
1. Open Vercel Dashboard
2. Select your EDUSANNA project
3. Go to Settings → Environment Variables
4. Add:
   - `CALLMEBOT_PHONE` = Your phone number
   - `CALLMEBOT_APIKEY` = Your API key

### Step 3: Verify Admin Credentials Exist
These should already be set, but verify:
- `ADMIN_EMAIL` = tinasheleev@gmail.com
- `ADMIN_PASSWORD` = Your secure password

### Step 4: Verify Supabase Credentials
These should already be set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Step 5: Redeploy
1. Go to Deployments tab in Vercel
2. Click the menu (three dots) on latest deployment
3. Click **Redeploy**
4. Wait for build to complete

---

## Testing Your Configuration

### Test CallMeBot
1. Go to admin login: `/admin/dashboard`
2. Enter email: `tinasheleev@gmail.com`
3. Enter password (from ADMIN_PASSWORD)
4. Click "Send Code"
5. You should receive a WhatsApp message with "EDUSANNA ONLINE LEARNING" branding
6. Enter the 6-digit code to complete login

### Test Course Completion Notifications
1. Complete a course quiz (100% score)
2. Admin should receive WhatsApp message with course completion details

### Test Certificate Notifications
1. Admin generates certificate for a user
2. User should receive WhatsApp notification that certificate is ready

---

## Troubleshooting

### "WhatsApp code not arriving"
- Verify `CALLMEBOT_PHONE` format: should be like `263712345678` (no +, no spaces)
- Verify `CALLMEBOT_APIKEY` is correct
- Check that phone number has WhatsApp installed

### "Admin login fails"
- Verify `ADMIN_EMAIL` matches exactly (case-sensitive)
- Verify `ADMIN_PASSWORD` is correct
- Clear browser cache and try again

### "Messages say 'EDUSANNA ONLINE LEARNING' not appearing"
- Redeploy: Deployments → Latest → Redeploy (to reload code)
- Wait 5 minutes for deployment to complete

### Build fails after adding env vars
- Go back to Vercel and verify all env var names are correct
- No typos in variable names
- Redeploy after fixing

---

## Security Best Practices

1. **Never share your credentials** - Keep `CALLMEBOT_APIKEY` and `ADMIN_PASSWORD` private
2. **Use strong admin password** - At least 12 characters with mixed case, numbers, symbols
3. **Restrict Vercel access** - Use Vercel's team settings to control who can edit env vars
4. **Rotate credentials regularly** - Change ADMIN_PASSWORD every 90 days
5. **Use Production env vars** - Don't use same credentials for development

---

## Summary

**For Admin WhatsApp 2FA to work:**
1. Add `CALLMEBOT_PHONE` (your phone number)
2. Add `CALLMEBOT_APIKEY` (from CallMeBot)
3. Redeploy your app
4. Test by logging into admin dashboard

**All messages will automatically include "EDUSANNA ONLINE LEARNING" branding.**

---

Last Updated: 2026
For support, contact admin@edusanna.com
