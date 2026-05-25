# Quick Start - 5 Minute Setup

## Step 1: Set Admin Credentials (2 minutes)
Create or edit `.env.local` in your project root:

```
ADMIN_EMAIL=admin@edusanna.com
ADMIN_PASSWORD=MySecurePassword123!
```

## Step 2: Start Dev Server (1 minute)
```bash
cd /vercel/share/v0-project
pnpm dev
```

Wait for:
```
✓ Compiled successfully
Ready in 1234ms
```

## Step 3: Login as Admin (1 minute)
1. Open: http://localhost:3000/login
2. Email: admin@edusanna.com
3. Password: MySecurePassword123!
4. Click **Sign In**

## Step 4: Verify (1 minute)
✅ Should see admin dashboard with stats
✅ Click "Courses" in sidebar
✅ Browse courses and click one
✅ See learning modules

---

## That's It! 🎉

Your platform is working:
- ✅ Admin login (NO 2FA!)
- ✅ NO session timeout
- ✅ Courses page
- ✅ Course details
- ✅ Learning interface

---

## Optional: Add Database Support

When ready to enable user registration, progress tracking, etc:

### In Supabase Dashboard:

**SQL Editor → New Query → Copy/Paste/Run:**

**Query 1:** `/scripts/001_edusanna_schema.sql`
```
Expected: 13 tables created ✅
```

**Query 2:** `/scripts/02-insert-courses.sql`
```
Expected: 35 rows inserted ✅
```

### In `.env.local` - Add:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

Then: `pnpm dev` (restart server)

---

## Login URLs

**Admin**: http://localhost:3000/login  
**Learner**: http://localhost:3000/login (same page)  
**Courses**: http://localhost:3000/courses  
**Dashboard**: http://localhost:3000/dashboard  

---

## Common Issues

| Issue | Fix |
|-------|-----|
| "Invalid email or password" | Check `.env.local` values match exactly |
| Blank admin dashboard | Restart server after .env changes |
| Courses show generic content | Normal! Run SQL scripts for real content |
| Can't create learner account | Setup Supabase (optional step above) |

---

## What Changed From Old Version?

| Feature | Before | Now |
|---------|--------|-----|
| 2FA | ⏳ 18 min wait | ✅ REMOVED! |
| Admin timeout | 😤 18 mins | ✅ NO TIMEOUT! |
| Course loading | ❌ Blank if no DB | ✅ Fallback content |
| Learner login | ❌ Broken | ✅ Works with Supabase |
| Setup time | 🎯 Complex | ✅ 5 minutes |

---

## Documentation

For detailed information, see:
- **DATABASE_AND_SETUP_GUIDE.md** - Full setup & troubleshooting
- **FIXES_APPLIED_TODAY.md** - What was changed & why
- **IMPLEMENTATION_SUMMARY.md** - Technical details

---

**Ready to start? Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local, then `pnpm dev`!** 🚀
