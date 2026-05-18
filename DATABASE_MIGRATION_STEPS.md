# Edusanna Database Setup - Step by Step Guide

## CRITICAL: Schema Files Explanation

You have **TWO** database schema files. Here's what each does:

### File 1: `scripts/001_edusanna_schema.sql` ✓ ALREADY RAN SUCCESSFULLY
- **Status**: COMPLETED - This is your main database schema
- **Contains**: All tables, indexes, RLS policies, and initial setup
- **Tables created**: profiles, courses, enrollments, certificates, payments, 2FA codes, notifications, error logs, etc.
- **Action needed**: NONE - This already ran successfully

### File 2: `scripts/05-migrate-courses-to-supabase.sql` - RUN THIS NEXT
- **Status**: PENDING - This loads sample course data
- **Contains**: 30+ sample courses (A-Z categories)
- **Tables modified**: Inserts into the `courses` table
- **Action needed**: YES - Run this in Supabase SQL Editor AFTER the schema file

---

## Complete Setup Checklist

### Step 1: Verify Schema is Installed ✓ DONE
You already confirmed `001_edusanna_schema.sql` ran successfully!

To verify all tables exist in Supabase:
1. Go to Supabase Dashboard → Table Editor
2. You should see these tables:
   - profiles
   - courses
   - enrollments
   - certificates
   - payments
   - two_fa_codes
   - notifications
   - completion_notifications
   - user_feedback
   - storage_stats
   - admin_audit_log
   - error_logs
   - performance_logs

### Step 2: Migrate Courses Data (5 minutes)
**File**: `scripts/05-migrate-courses-to-supabase.sql`

1. Open Supabase Dashboard
2. Navigate to SQL Editor
3. Click "+ New Query"
4. Copy the entire content of `/scripts/05-migrate-courses-to-supabase.sql`
5. Paste into SQL Editor
6. Click "RUN"
7. Wait for completion message: "30 rows inserted"

**What happens**: Inserts 30+ sample courses including:
- Accounting, Artificial Intelligence, Agriculture, Android Development, etc.
- Business Management, Blockchain, Biotechnology, etc.
- Civil Engineering, Cybersecurity, Culinary Arts, Cloud Computing, etc.

### Step 3: Verify Courses Were Inserted
In Supabase SQL Editor, run:
```sql
SELECT COUNT(*) as total_courses FROM courses;
SELECT * FROM courses LIMIT 5;
```

Should show 30+ courses.

### Step 4: Set Admin User in Database
In Supabase SQL Editor, run:
```sql
-- Set the admin user (use your actual admin email)
UPDATE profiles 
SET is_admin = TRUE 
WHERE email = 'tinasheleev@gmail.com';

-- Verify admin was set
SELECT email, is_admin FROM profiles WHERE email = 'tinasheleev@gmail.com';
```

---

## What Each Table Does

| Table | Purpose |
|-------|---------|
| **profiles** | User account information (name, email, school_name, signup_type, etc.) |
| **courses** | All available courses (title, category, level, etc.) |
| **enrollments** | Tracks which users are enrolled in which courses |
| **certificates** | Issued certificates and diplomas with verification codes |
| **payments** | Payment transaction records (PayPal, etc.) |
| **two_fa_codes** | 2FA authentication codes for admin login |
| **notifications** | User notifications (course started, certificate issued, etc.) |
| **completion_notifications** | Records when users complete courses |
| **user_feedback** | Course feedback and ratings from users |
| **storage_stats** | Platform statistics (total users, courses, etc.) |
| **admin_audit_log** | Logs of all admin actions |
| **error_logs** | Application error tracking |
| **performance_logs** | Performance monitoring data |

---

## Environment Variables Required

Ensure these are set in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
ADMIN_EMAIL=tinasheleev@gmail.com
ADMIN_PASSWORD=<your-admin-password>
ADMIN_WHATSAPP_NUMBER=<your-whatsapp-number>
```

---

## Troubleshooting

### Error: "column does not exist"
**Solution**: This means you ran the wrong schema file first. The file `00-supabase-complete-schema.sql` has been DELETED - do NOT use it.
- Use ONLY: `001_edusanna_schema.sql` (already ran)
- Then run: `05-migrate-courses-to-supabase.sql`

### Error: "permission denied"
**Solution**: 
1. Make sure you're logged in as Supabase project owner
2. Check RLS policies in Supabase Settings → Security

### No courses showing after migration
**Solution**: 
1. Verify courses were inserted: `SELECT COUNT(*) FROM courses;`
2. Check courses table in Supabase Table Editor
3. Redeploy your Vercel app

---

## Next Steps After Database Setup

1. ✓ Run `001_edusanna_schema.sql` (DONE)
2. Run `05-migrate-courses-to-supabase.sql` (NEXT)
3. Test Admin Dashboard access
4. Test Certificate generation
5. Test User signup and course enrollment

---

## Support Resources

- Supabase Docs: https://supabase.com/docs
- Check `/SETUP_AND_DEPLOYMENT_GUIDE.md` for complete system setup
- Check `/QUICK_REFERENCE.md` for quick admin access guide
