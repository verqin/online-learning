# OAuth Setup Guide

This guide explains how to set up Google OAuth for the Edusanna online learning platform.

## Google OAuth Setup

### Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown and select "NEW PROJECT"
3. Enter a project name (e.g., "Edusanna") and click "CREATE"
4. Wait for the project to be created

### Step 2: Enable Google+ API
1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and select "ENABLE"

### Step 3: Create OAuth 2.0 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. If prompted, configure the OAuth consent screen first:
   - Select "External" user type
   - Fill in required fields (app name, user support email, developer contact)
   - Add Google+ API scope
   - Add test users (optional)
4. For Application type, select "Web application"
5. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for local development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
6. Click "CREATE"
7. Copy your Client ID and Client Secret

### Step 4: Add Credentials to Environment
1. Open `.env.local` in your project root
2. Add the following:
```
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

## NextAuth Configuration

### Required Environment Variables
Create a `.env.local` file in your project root with:

```
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000  # or your production URL
NEXTAUTH_SECRET=your-secret-key-here  # Generate with: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Generate NEXTAUTH_SECRET
Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

## Testing OAuth Locally

1. Start your development server: `npm run dev`
2. Navigate to `/login` or `/signup`
3. Click "Continue with Google"
4. You'll be redirected to Google's login page
5. After authentication, you'll be redirected back to your app

## Troubleshooting

### "Invalid redirect_uri" Error
- Ensure the redirect URL in your code matches exactly with the one configured in Google Cloud Console
- Check that `NEXTAUTH_URL` is correctly set in your environment

### Session Not Persisting
- Verify `NEXTAUTH_SECRET` is set in `.env.local`
- Check that the SessionProvider is wrapping your app in the layout

### Provider Not Found
- Ensure NextAuth is properly installed: `npm install next-auth`
- Verify the auth route is at `/app/api/auth/[...nextauth]/route.ts`

## Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [NextAuth Google Provider Docs](https://next-auth.js.org/providers/google)
- [Google Cloud OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
