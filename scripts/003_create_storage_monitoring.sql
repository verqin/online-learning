-- Create storage usage monitoring table
CREATE TABLE IF NOT EXISTS public.storage_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users INTEGER DEFAULT 0,
  total_courses INTEGER DEFAULT 0,
  total_enrollments INTEGER DEFAULT 0,
  total_feedbacks INTEGER DEFAULT 0,
  storage_used_mb DECIMAL(10,2) DEFAULT 0,
  storage_limit_mb DECIMAL(10,2) DEFAULT 1000,
  percentage_used DECIMAL(5,2) DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user monitoring table
CREATE TABLE IF NOT EXISTS public.user_monitoring (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_users INTEGER DEFAULT 0,
  active_users INTEGER DEFAULT 0,
  new_users_today INTEGER DEFAULT 0,
  users_by_role JSONB,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.storage_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_monitoring ENABLE ROW LEVEL SECURITY;

-- RLS Policies (admins only)
CREATE POLICY "admins_select_storage_usage" ON public.storage_usage FOR SELECT USING (
  (SELECT role FROM public.user_profiles WHERE id = auth.uid()) = 'admin'
);
CREATE POLICY "system_update_storage_usage" ON public.storage_usage FOR UPDATE WITH CHECK (true);
CREATE POLICY "system_insert_storage_usage" ON public.storage_usage FOR INSERT WITH CHECK (true);

CREATE POLICY "admins_select_user_monitoring" ON public.user_monitoring FOR SELECT USING (
  (SELECT role FROM public.user_profiles WHERE id = auth.uid()) = 'admin'
);
CREATE POLICY "system_update_user_monitoring" ON public.user_monitoring FOR UPDATE WITH CHECK (true);
CREATE POLICY "system_insert_user_monitoring" ON public.user_monitoring FOR INSERT WITH CHECK (true);
