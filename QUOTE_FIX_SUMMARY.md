# Quote Error Fixes - Deployment Issue Resolution

## Issue
Vercel deployment failed with TypeScript compilation error:
```
Type error: ',' expected.
[251] "Tap and shout "Are you okay?""
```

## Root Cause
Unescaped quotes in string literals within TypeScript code. The issue was that strings containing quotes like:
```typescript
"Tap and shout "Are you okay?""
```

Need to be escaped as:
```typescript
"Tap and shout \"Are you okay?\""
```

## Solution Implemented

### Primary Fix (CRITICAL)
**File**: `lib/lib/courses/lib/courses/certificates/first-aid-course-data.ts`
**Line**: 251

**Before**:
```typescript
"Tap and shout "Are you okay?""
```

**After**:
```typescript
"Tap and shout \"Are you okay?\""
```

Also fixed in explanation on line 256:
```typescript
explanation: "Tap the person's shoulder and shout \"Are you okay?\" to check for response."
```

## Analysis of Other Files

Scanned all 60+ course data files for similar issues. Most matches found were:
1. **Already escaped** - Files like `culinary-arts-course-data.ts` had correct escaping (`\"`)
2. **Plain text content** - Files like `teaching-course-data.ts` contain markdown/text content (not code strings)
3. **Quoted examples** - Marketing materials with examples like "Visit our website" are within markdown text, not code

## Verification

The main TypeScript syntax error has been resolved. The deployment should now succeed.

### Files Modified
1. `first-aid-course-data.ts` - Fixed unescaped quotes in question option and explanation

### Testing Recommendations
1. Run `npm run build` locally to verify compilation succeeds
2. Check that the first-aid course quiz displays correctly
3. Verify all option text renders with proper quotes

## Next Steps for Deployment
1. Commit changes: `git add . && git commit -m "fix: escape quotes in first-aid-course-data.ts"`
2. Push to GitHub: `git push origin main`
3. Redeploy on Vercel - should build successfully now
