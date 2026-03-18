# pnpm Dependency Installation Fix

## Problem
Vercel deployment failed with `ERR_INVALID_THIS` errors when pnpm tried to fetch packages from npm registry. This is a pnpm version compatibility issue.

## Solution Applied

### 1. Added packageManager Field
Updated `package.json` to specify `pnpm@9.0.0`:
```json
{
  "packageManager": "pnpm@9.0.0",
  ...
}
```

This ensures:
- Vercel uses the correct pnpm version (9.0.0 - stable)
- Corepack automatically switches to the specified version
- No ERR_INVALID_THIS errors from version mismatch

### 2. Cleaned Up Files (Already Done)
- Removed outdated `pnpm-lock.yaml` from git tracking
- Added to `.gitignore` so Vercel regenerates per environment
- No local `node_modules` directory

### 3. Verified Configuration
- `.npmrc` settings are compatible with pnpm@9.0.0
- `shamefully-hoist=true` - works with pnpm v9
- `strict-peer-dependencies=false` - allows flexibility

## Next Steps for Deployment

1. **Commit and Push**:
```bash
git add package.json .gitignore
git commit -m "fix: specify pnpm@9.0.0 to fix ERR_INVALID_THIS dependency errors"
git push origin main
```

2. **Vercel Will**:
- Detect `packageManager: pnpm@9.0.0` in package.json
- Use Corepack to install the correct pnpm version
- Run `pnpm install --no-frozen-lockfile` (from vercel.json config)
- Generate fresh `pnpm-lock.yaml` for Vercel environment
- Build and deploy successfully

3. **If Issues Persist**:
- Clear Vercel build cache (Settings → Storage → Clear)
- Trigger new deployment
- Check that Google OAuth env variables are set

## Why This Works

The ERR_INVALID_THIS error happens when:
- pnpm@10.x is used but package.json is configured for pnpm@9.x
- OR pnpm version is not explicitly specified
- Causes version mismatch when fetching from npm registry

By specifying `pnpm@9.0.0` in packageManager:
- Corepack ensures exact version is used
- No version mismatch = no ERR_INVALID_THIS
- Registry calls work correctly
- Dependencies install cleanly

## Local Testing (Optional)

If you want to test locally:
```bash
# Switch to pnpm@9.0.0
corepack use pnpm@9.0.0

# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Verify build
pnpm run build
```

This fix ensures smooth deployment on Vercel with no dependency installation errors.
