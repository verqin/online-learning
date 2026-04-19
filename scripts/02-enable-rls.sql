-- Edusanna Platform - Row Level Security (RLS) Policies
-- Enable RLS on all tables and create security policies

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;

-- ===== USERS TABLE POLICIES =====
-- Anyone can read public user profiles
CREATE POLICY "Users can read own profile" 
ON users FOR SELECT 
USING (auth.uid()::text = id::text);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON users FOR UPDATE 
USING (auth.uid()::text = id::text)
WITH CHECK (auth.uid()::text = id::text);

-- Admins can read all users
CREATE POLICY "Admins can read all users" 
ON users FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- ===== COURSES TABLE POLICIES =====
-- Anyone can read active courses
CREATE POLICY "Everyone can read active courses" 
ON courses FOR SELECT 
USING (is_active = true);

-- Only admins can create courses
CREATE POLICY "Admins can create courses" 
ON courses FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- Only admins can update courses
CREATE POLICY "Admins can update courses" 
ON courses FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- ===== ENROLLMENTS TABLE POLICIES =====
-- Users can see their own enrollments
CREATE POLICY "Users can read own enrollments" 
ON enrollments FOR SELECT 
USING (user_id = auth.uid()::uuid);

-- Users can create their own enrollments
CREATE POLICY "Users can create own enrollments" 
ON enrollments FOR INSERT 
WITH CHECK (user_id = auth.uid()::uuid);

-- Users can update their own enrollments
CREATE POLICY "Users can update own enrollments" 
ON enrollments FOR UPDATE 
USING (user_id = auth.uid()::uuid)
WITH CHECK (user_id = auth.uid()::uuid);

-- Admins can read all enrollments
CREATE POLICY "Admins can read all enrollments" 
ON enrollments FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- ===== MODULE_PROGRESS TABLE POLICIES =====
-- Users can see progress for their enrollments
CREATE POLICY "Users can read own module progress" 
ON module_progress FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM enrollments 
  WHERE id = enrollment_id AND user_id = auth.uid()::uuid
));

-- Users can update their own progress
CREATE POLICY "Users can update own module progress" 
ON module_progress FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM enrollments 
  WHERE id = enrollment_id AND user_id = auth.uid()::uuid
))
WITH CHECK (EXISTS (
  SELECT 1 FROM enrollments 
  WHERE id = enrollment_id AND user_id = auth.uid()::uuid
));

-- ===== CERTIFICATES TABLE POLICIES =====
-- Users can view their own certificates
CREATE POLICY "Users can read own certificates" 
ON certificates FOR SELECT 
USING (user_id = auth.uid()::uuid);

-- Only system can create certificates (via admin/automated)
CREATE POLICY "System can create certificates" 
ON certificates FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- Anyone can verify certificates publicly
CREATE POLICY "Everyone can verify certificates" 
ON certificates FOR SELECT 
USING (is_verified = true);

-- ===== PAYMENTS TABLE POLICIES =====
-- Users can see their own payments
CREATE POLICY "Users can read own payments" 
ON payments FOR SELECT 
USING (user_id = auth.uid()::uuid);

-- Users can create payment records
CREATE POLICY "Users can create payments" 
ON payments FOR INSERT 
WITH CHECK (user_id = auth.uid()::uuid);

-- Admins can read all payments
CREATE POLICY "Admins can read all payments" 
ON payments FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- Only admins can update payment status
CREATE POLICY "Admins can update payments" 
ON payments FOR UPDATE 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- ===== USER_AGREEMENTS TABLE POLICIES =====
-- Users can see their own agreements
CREATE POLICY "Users can read own agreements" 
ON user_agreements FOR SELECT 
USING (user_id = auth.uid()::uuid);

-- Users can create agreement records
CREATE POLICY "Users can create agreements" 
ON user_agreements FOR INSERT 
WITH CHECK (user_id = auth.uid()::uuid);

-- ===== ADMIN_LOGS TABLE POLICIES =====
-- Only admins can read admin logs
CREATE POLICY "Admins can read logs" 
ON admin_logs FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));

-- System can create logs
CREATE POLICY "System can create logs" 
ON admin_logs FOR INSERT 
WITH CHECK (EXISTS (
  SELECT 1 FROM users WHERE id = auth.uid()::uuid AND is_admin = true
));
