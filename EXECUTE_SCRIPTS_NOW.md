# EXECUTE THESE SCRIPTS NOW - Step by Step

## You Have 2 Scripts - Run Them in Order

### STEP 1: Create Database Tables
**File**: `scripts/001_edusanna_schema.sql`

1. Go to Supabase Dashboard
2. Click: **SQL Editor**
3. Click: **New Query**
4. Copy ENTIRE content from: `scripts/001_edusanna_schema.sql`
5. Paste into editor
6. Click: **RUN**
7. Wait for: ✅ **Success** message

**Expected**: 13 tables created, 0 errors

---

### STEP 2: Insert Course Data
**File**: `scripts/02-insert-courses.sql`

1. Click: **New Query** (in SQL Editor)
2. Copy ENTIRE content from: `scripts/02-insert-courses.sql`
3. Paste into editor
4. Click: **RUN**
5. Wait for: ✅ **35 rows inserted** message

**Expected**: 35 courses added, 0 errors

---

## That's It!

Your database is now complete with:
- ✅ 13 tables
- ✅ 35 courses
- ✅ Security (RLS policies)
- ✅ Performance (indexes)
- ✅ Ready for production

No additional steps needed. Your platform is ready to use!
