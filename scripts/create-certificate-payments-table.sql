-- Create certificate_payments table
CREATE TABLE IF NOT EXISTS certificate_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  course_id TEXT NOT NULL,
  course_name TEXT NOT NULL,
  certificate_type VARCHAR(20) NOT NULL CHECK (certificate_type IN ('certificate', 'diploma')),
  amount DECIMAL(10, 2) NOT NULL,
  payment_status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'noted', 'certificate_sent')),
  paypal_order_id TEXT UNIQUE,
  certificate_id TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, course_id, certificate_type)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_certificate_payments_user_id ON certificate_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_status ON certificate_payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_certificate_id ON certificate_payments(certificate_id);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_paypal_order_id ON certificate_payments(paypal_order_id);

-- Enable RLS
ALTER TABLE certificate_payments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own payments
CREATE POLICY "Users can view their own payments" ON certificate_payments
  FOR SELECT USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = 'africanedusanna@gmail.com');

-- Policy: Admin can view all payments
CREATE POLICY "Admin can view all payments" ON certificate_payments
  FOR SELECT USING (auth.jwt() ->> 'email' = 'africanedusanna@gmail.com');

-- Policy: Admin can update payments
CREATE POLICY "Admin can update payments" ON certificate_payments
  FOR UPDATE USING (auth.jwt() ->> 'email' = 'africanedusanna@gmail.com')
  WITH CHECK (auth.jwt() ->> 'email' = 'africanedusanna@gmail.com');

-- Policy: System can insert payments (via API)
CREATE POLICY "System can insert payments" ON certificate_payments
  FOR INSERT WITH CHECK (true);
