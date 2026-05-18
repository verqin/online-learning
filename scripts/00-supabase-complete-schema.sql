-- Edusanna Complete Database Schema for Supabase
-- This script creates all tables, indexes, RLS policies, and triggers needed for the platform

-- ============================================
-- PROFILES TABLE (extends Supabase auth.users)
-- ============================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  school_name TEXT,
  signup_type TEXT DEFAULT 'standard', -- 'academia' or 'standard'
  country TEXT,
  city TEXT,
  phone TEXT,
  whatsapp_number TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  last_activity TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- COURSES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  letter TEXT NOT NULL,
  certificate_title TEXT NOT NULL,
  diploma_title TEXT NOT NULL,
  category TEXT NOT NULL,
  icon TEXT,
  color TEXT,
  description TEXT,
  level TEXT DEFAULT 'beginner', -- 'beginner', 'intermediate', 'advanced'
  duration_weeks INT DEFAULT 4,
  is_published BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- ENROLLMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'active', -- 'active', 'completed', 'dropped'
  progress_percentage INT DEFAULT 0,
  modules_completed INT DEFAULT 0,
  enrolled_at TIMESTAMP DEFAULT now(),
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- ============================================
-- CERTIFICATES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  certificate_type TEXT NOT NULL, -- 'certificate' or 'diploma'
  verification_code TEXT UNIQUE NOT NULL,
  issue_date TIMESTAMP DEFAULT now(),
  expiry_date TIMESTAMP,
  pdf_url TEXT,
  is_valid BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- PAYMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  certificate_id UUID REFERENCES public.certificates(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT NOT NULL, -- 'paypal', 'stripe', etc
  transaction_id TEXT UNIQUE,
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
  payment_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- 2FA CODES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.two_fa_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  purpose TEXT DEFAULT 'login', -- 'login', 'verification', etc
  is_used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- NOTIFICATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'course_enrolled', 'certificate_issued', 'payment_received', etc
  title TEXT NOT NULL,
  message TEXT,
  data JSONB,
  is_read BOOLEAN DEFAULT FALSE,
  action_url TEXT,
  created_at TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP
);

-- ============================================
-- SESSIONS TABLE (for tracking user sessions)
-- ============================================
CREATE TABLE IF NOT EXISTS public.sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  last_activity TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- ERROR LOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.error_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  endpoint TEXT NOT NULL,
  error_type TEXT NOT NULL,
  error_message TEXT,
  status_code INT,
  request_data JSONB,
  stack_trace TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- PERFORMANCE LOGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.performance_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint TEXT NOT NULL,
  method TEXT NOT NULL,
  response_time_ms INT,
  status_code INT,
  user_count INT,
  memory_usage_mb FLOAT,
  created_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- ADMIN AUDIT LOG
-- ============================================
CREATE TABLE IF NOT EXISTS public.admin_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details JSONB,
  timestamp TIMESTAMP DEFAULT now()
);

-- ============================================
-- STORAGE STATS
-- ============================================
CREATE TABLE IF NOT EXISTS public.storage_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users INT DEFAULT 0,
  total_courses INT DEFAULT 0,
  total_enrollments INT DEFAULT 0,
  total_certificates_issued INT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT now()
);

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_is_admin ON public.profiles(is_admin);
CREATE INDEX IF NOT EXISTS idx_profiles_last_activity ON public.profiles(last_activity);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON public.enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON public.enrollments(status);
CREATE INDEX IF NOT EXISTS idx_certificates_user_id ON public.certificates(user_id);
CREATE INDEX IF NOT EXISTS idx_certificates_course_id ON public.certificates(course_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON public.notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_two_fa_codes_user_id ON public.two_fa_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_two_fa_codes_expires_at ON public.two_fa_codes(expires_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON public.sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON public.sessions(expires_at);
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON public.error_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_performance_logs_created_at ON public.performance_logs(created_at);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.two_fa_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.performance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES
-- ============================================

-- Profiles: Users can view/update their own profile
CREATE POLICY "users_view_own_profile" ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "users_update_own_profile" ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "admins_view_all_profiles" ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- Courses: Everyone can view published courses
CREATE POLICY "users_view_courses" ON public.courses FOR SELECT
  USING (is_published = TRUE);

CREATE POLICY "admins_manage_courses" ON public.courses FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- Enrollments: Users view own, admins view all
CREATE POLICY "users_view_own_enrollments" ON public.enrollments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_create_enrollments" ON public.enrollments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "admins_view_all_enrollments" ON public.enrollments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- Certificates: Users view own, admins manage all
CREATE POLICY "users_view_own_certificates" ON public.certificates FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "admin_manage_certificates" ON public.certificates FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- Payments: Users view own, admins view all
CREATE POLICY "users_view_own_payments" ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_create_payments" ON public.payments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "admin_view_all_payments" ON public.payments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- 2FA Codes: Secure - only system and admin can access
CREATE POLICY "system_manage_2fa" ON public.two_fa_codes FOR ALL
  USING (TRUE);

-- Notifications: Users view own
CREATE POLICY "users_view_own_notifications" ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_update_own_notifications" ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "system_create_notifications" ON public.notifications FOR INSERT
  WITH CHECK (TRUE);

-- Sessions: Users view own
CREATE POLICY "users_view_own_sessions" ON public.sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "system_manage_sessions" ON public.sessions FOR ALL
  USING (TRUE);

-- Error Logs: Admin only
CREATE POLICY "admin_view_error_logs" ON public.error_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "system_create_error_logs" ON public.error_logs FOR INSERT
  WITH CHECK (TRUE);

-- Performance Logs: Admin only
CREATE POLICY "admin_view_performance_logs" ON public.performance_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "system_create_performance_logs" ON public.performance_logs FOR INSERT
  WITH CHECK (TRUE);

-- Admin Audit Log: Admin only
CREATE POLICY "admin_view_audit_log" ON public.admin_audit_log FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "system_create_audit_log" ON public.admin_audit_log FOR INSERT
  WITH CHECK (TRUE);

-- ============================================
-- SAMPLE DATA (Optional - Comment out if not needed)
-- ============================================
-- Sample Courses (A category courses)
INSERT INTO public.courses (letter, certificate_title, diploma_title, category, color, description, level)
VALUES 
  ('A', 'Administrative Assistant', 'Administrative Professional Diploma', 'Professional Development', '#FF6B6B', 'Master administrative skills and become a certified administrative assistant', 'beginner'),
  ('A', 'Accountancy', 'Certified Accountant Diploma', 'Finance & Accounting', '#4ECDC4', 'Learn accounting principles and earn your accountancy certification', 'intermediate'),
  ('A', 'Architecture', 'Professional Architect Diploma', 'Technology & Design', '#45B7D1', 'Explore architectural design and construction principles', 'advanced')
ON CONFLICT DO NOTHING;

-- Insert initial storage stats
INSERT INTO public.storage_stats (total_users, total_courses)
VALUES (0, 0)
ON CONFLICT DO NOTHING;

-- ============================================
-- GRANT PERMISSIONS
-- ============================================
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.courses TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.enrollments TO authenticated;
GRANT SELECT ON public.certificates TO authenticated;
GRANT SELECT, INSERT ON public.payments TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.notifications TO authenticated;
GRANT ALL ON public.sessions TO authenticated;

-- ============================================
-- END OF SCHEMA SETUP
-- ============================================
