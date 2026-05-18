-- Edusanna Platform Database Schema

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
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
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create courses table
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  level TEXT NOT NULL, -- 'certificate' or 'diploma'
  category TEXT,
  modules JSONB DEFAULT '[]',
  exam_questions JSONB DEFAULT '[]',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create enrollments table
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT now(),
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  progress FLOAT DEFAULT 0,
  exam_score FLOAT,
  status TEXT DEFAULT 'in-progress' -- 'in-progress', 'completed'
);

-- Create completion notifications table
CREATE TABLE IF NOT EXISTS public.completion_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  enrollment_id UUID NOT NULL REFERENCES public.enrollments(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  country TEXT,
  city TEXT,
  whatsapp_number TEXT,
  course_title TEXT,
  level TEXT,
  exam_score FLOAT,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT now(),
  read_by_admin BOOLEAN DEFAULT FALSE
);

-- Create user feedback table
CREATE TABLE IF NOT EXISTS public.user_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  feedback_text TEXT,
  can_edit BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Create storage stats table for monitoring
CREATE TABLE IF NOT EXISTS public.storage_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users INT DEFAULT 0,
  total_courses INT DEFAULT 0,
  total_enrollments INT DEFAULT 0,
  total_completions INT DEFAULT 0,
  storage_used_mb FLOAT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT now()
);

-- Create admin audit log
CREATE TABLE IF NOT EXISTS public.admin_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  details JSONB,
  timestamp TIMESTAMP DEFAULT now()
);

-- Create certificates table
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

-- Create payments table
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

-- Create 2FA codes table
CREATE TABLE IF NOT EXISTS public.two_fa_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  code TEXT NOT NULL,
  purpose TEXT DEFAULT 'login', -- 'login', 'verification', etc
  is_used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Create notifications table
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

-- Create error logs table
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

-- Create system performance logs table
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

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.completion_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.storage_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.two_fa_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.performance_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "users_view_own_profile" ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "users_update_own_profile" ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "users_insert_own_profile" ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "admin_view_all_profiles" ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for courses
CREATE POLICY "anyone_view_courses" ON public.courses FOR SELECT
  USING (TRUE);

CREATE POLICY "admin_manage_courses" ON public.courses FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for enrollments
CREATE POLICY "users_view_own_enrollments" ON public.enrollments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_create_enrollments" ON public.enrollments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users_update_own_enrollments" ON public.enrollments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "admin_view_all_enrollments" ON public.enrollments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for completion notifications
CREATE POLICY "admin_view_notifications" ON public.completion_notifications FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_notifications" ON public.completion_notifications FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for user feedback
CREATE POLICY "users_view_own_feedback" ON public.user_feedback FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_manage_own_feedback" ON public.user_feedback FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "admin_view_all_feedback" ON public.user_feedback FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for storage stats
CREATE POLICY "admin_view_stats" ON public.storage_stats FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "admin_manage_stats" ON public.storage_stats FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for audit log
CREATE POLICY "admin_view_audit_log" ON public.admin_audit_log FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for certificates
CREATE POLICY "users_view_own_certificates" ON public.certificates FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "admin_manage_certificates" ON public.certificates FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

-- RLS Policies for payments
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

-- RLS Policies for 2FA codes
CREATE POLICY "users_view_own_2fa" ON public.two_fa_codes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "system_manage_2fa" ON public.two_fa_codes FOR ALL
  USING (TRUE);

-- RLS Policies for notifications
CREATE POLICY "users_view_own_notifications" ON public.notifications FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users_update_own_notifications" ON public.notifications FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "system_create_notifications" ON public.notifications FOR INSERT
  WITH CHECK (TRUE);

-- RLS Policies for error logs
CREATE POLICY "admin_view_error_logs" ON public.error_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "system_create_error_logs" ON public.error_logs FOR INSERT
  WITH CHECK (TRUE);

-- RLS Policies for performance logs
CREATE POLICY "admin_view_performance_logs" ON public.performance_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles WHERE id = auth.uid() AND is_admin = TRUE
    )
  );

CREATE POLICY "system_create_performance_logs" ON public.performance_logs FOR INSERT
  WITH CHECK (TRUE);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_is_admin ON public.profiles(is_admin);
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
CREATE INDEX IF NOT EXISTS idx_error_logs_created_at ON public.error_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_performance_logs_created_at ON public.performance_logs(created_at);

-- Insert initial admin user (you'll need to set user ID after creating auth user)
-- UPDATE public.profiles SET is_admin = TRUE WHERE email = 'tinasheleev@gmail.com';
-- INSERT INTO public.storage_stats (total_users, total_courses) VALUES (0, 0);
