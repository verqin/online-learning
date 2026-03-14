-- Edusanna Platform Database Schema

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  country TEXT,
  city TEXT,
  whatsapp_number TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
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

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.completion_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.storage_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

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

-- Insert initial admin user (you'll need to set user ID after creating auth user)
-- INSERT INTO public.storage_stats (total_users, total_courses) VALUES (0, 0);
