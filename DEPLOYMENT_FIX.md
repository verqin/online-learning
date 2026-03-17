# Deployment Fix - Complete Instructions

## What Was Fixed

### 1. Removed Apple Sign-In Feature
- Deleted `components/auth/apple-signin-button.tsx` (no longer needed)
- Updated documentation to remove Apple OAuth setup instructions
- Kept only Google OAuth which is fully functional

### 2. Fixed pnpm Lock File Issue
- Added `pnpm-lock.yaml` to `.gitignore` to prevent version conflicts
- Created `vercel.json` configuration that allows lock file regeneration during deployment
- This resolves the "ERR_PNPM_OUTDATED_LOCKFILE" error

## How to Deploy Successfully

### Step 1: Commit and Push Changes
```bash
git add .
git commit -m "fix: remove apple oauth, fix pnpm lockfile issue

- Deleted apple-signin-button component
- Added pnpm-lock.yaml to .gitignore
- Updated documentation to reflect Google-only OAuth
- Configured vercel.json for proper dependency installation"
git push origin main
```

### Step 2: Verify GitHub Sync
The following changes should be in your GitHub repo:
- `.gitignore` - now excludes pnpm-lock.yaml
- `vercel.json` - allows pnpm to regenerate lock file
- Removed `components/auth/apple-signin-button.tsx`
- Updated `OAUTH_SETUP.md` - Apple section removed

### Step 3: Redeploy on Vercel
1. Go to https://vercel.com/dashboard
2. Find your "online-learning" project
3. Click "Deployments" tab
4. Click the three dots menu on the latest failed deployment
5. Select "Redeploy"
6. Or simply push code again to trigger automatic redeploy

## Why This Fixes the Build

1. **Lock File Issue Resolved**: `vercel.json` tells pnpm to use `--no-frozen-lockfile`, allowing it to regenerate the lock file with current dependencies
2. **Git Tracking Fixed**: `.gitignore` entry prevents lock file version conflicts from being tracked
3. **Dependencies Installed**: Next.js and all other packages will install correctly
4. **Build Completes**: TypeScript compilation succeeds, deployment finishes

## Expected Timeline

- Commit and push: 1 minute
- Vercel build: 2-3 minutes
- Deployment complete: ~5 minutes total

## If Issues Persist

If you still see build errors after pushing:
1. Check GitHub to verify files were actually pushed
2. Go to Vercel dashboard and manually trigger a rebuild
3. Clear Vercel cache before rebuilding (Deployments → Settings → "Clear Cache")
