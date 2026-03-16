# Edusanna Deployment Checklist

## Pre-Deployment Validation (Required)

This checklist ensures no TypeScript compilation errors occur during Vercel deployment.

### Step 1: Fix Nested Quotes
```bash
# Automatically scans all 273 course data files for nested quote issues
npm run fix-quotes
```

Expected output:
```
[v0] Starting nested quotes fixer...
[v0] Found XXX course data files to process
[v0] Processing complete!
[v0] Files with issues: X
```

### Step 2: Validate with Build
```bash
# Runs the quote fixer AND performs a full TypeScript build
npm run validate
```

This is equivalent to:
```bash
npm run fix-quotes && npm run build
```

### Step 3: Manual Verification
- [ ] No TypeScript errors in build output
- [ ] All course data files are valid (check NESTED_QUOTES_FIX_SUMMARY.md for details)
- [ ] Check the build output for any warnings

### Step 4: Review Changes (if any fixes were applied)
If `npm run fix-quotes` made changes, review them:
```bash
git diff lib/lib/courses/
```

Ensure changes only involved:
- Removing unescaped nested quotes
- Replacing double quotes with apostrophes
- No other content modifications

## Adding New Course Data

When adding new course data files (certificates or diplomas):

### 1. Follow Quote Rules
Always use **single quotes for outer strings** in explanations and questions:
```typescript
// ✅ BEST - Single quotes for outer, double inside if needed
{
  id: 1,
  question: 'What is the primary purpose of "event planning"?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 1,
  explanation: 'Event planning involves organizing "key elements" of an event.'
}
```

### 2. Validation Before Commit
```bash
# Run validation to catch any issues early
npm run validate
```

### 3. Pre-Commit Hook (Optional but Recommended)
Add this to `.git/hooks/pre-commit` to automatically validate:
```bash
#!/bin/bash
npm run fix-quotes
npm run lint
```

## Vercel Deployment

### Before Pushing to GitHub

1. Run full validation:
```bash
npm run validate
```

2. Ensure no errors:
```
✓ Nested quotes fixed
✓ Next.js build successful
```

3. Commit any fixes:
```bash
git add .
git commit -m "chore: fix nested quotes in course data"
git push origin branch-name
```

### Vercel Will Automatically

1. Run `pnpm run build` (defined in package.json)
2. Deploy if build succeeds

## Troubleshooting Deployment Errors

### Error: "The left-hand side of an arithmetic operation must be..."
- **Cause**: Unescaped nested quotes in explanation strings
- **Fix**: Run `npm run fix-quotes` and commit changes

### Error: "Type error: xxx is not defined"
- **Cause**: Missing import or syntax error in quiz data
- **Fix**: Check the file listed in error message, verify types match interface

### Error: "Expected expression, got '+'"
- **Cause**: Unescaped arithmetic operators or quotes in strings
- **Fix**: Review the line number, fix quote/operator handling

## Validation Utilities

### Automated Fixer
```bash
npm run fix-quotes
```
**What it does:**
- Scans all 273 course data files
- Detects unescaped nested quotes
- Automatically fixes issues
- Reports findings

### TypeScript Validation
```bash
npm run lint
```
**What it does:**
- ESLint validation
- TypeScript type checking
- Identifies code quality issues

### Full Build Test
```bash
npm run build
```
**What it does:**
- Next.js compilation
- TypeScript strict mode checking
- Asset bundling
- Optimization

## Quote Handling Reference

### ✅ Correct Patterns
```typescript
// Single quotes for outer
explanation: 'This is "quoted text" inside.'

// Double quotes without inner quotes
explanation: "This text has no inner quotes."

// Apostrophes instead of quotes
explanation: "This is 'quoted text' inside."
```

### ❌ Incorrect Patterns
```typescript
// Unescaped nested double quotes
explanation: "This is "quoted text" inside."

// Bare arithmetic symbols
explanation: "365 ÷ 8 = 45.6 days"

// Wrong separator type
explanation: "Option "A" is correct" (double quotes around A)
```

## Key Files for Reference

- **QUIZ_DATA_GUIDELINES.md** - Detailed rules for all quiz data
- **NESTED_QUOTES_FIX_SUMMARY.md** - Technical details of the fix
- **lib/types/quiz.ts** - TypeScript interfaces and validation functions
- **scripts/fix-nested-quotes.js** - Automated fixer script
- **package.json** - Build and validation scripts

## Deployment Success Criteria

✅ `npm run validate` exits with code 0 (success)
✅ No TypeScript compilation errors
✅ No warning about unescaped quotes
✅ Build completes in under 2 minutes
✅ Vercel deployment succeeds without errors

---

**Last Updated**: 2026-03-16
**Version**: 1.0
**Scope**: All 273 course data files (certificates and diplomas)
