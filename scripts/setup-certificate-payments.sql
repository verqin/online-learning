-- Create certificate_payments table for storing payment records
CREATE TABLE IF NOT EXISTS certificate_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  student_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  course_id UUID NOT NULL,
  course_name VARCHAR(255) NOT NULL,
  certificate_type VARCHAR(50) NOT NULL CHECK (certificate_type IN ('certificate', 'diploma')),
  amount DECIMAL(10, 2) NOT NULL,
  paypal_order_id VARCHAR(255) NOT NULL UNIQUE,
  certificate_id VARCHAR(255) NOT NULL UNIQUE,
  payment_status VARCHAR(50) NOT NULL DEFAULT 'paid_pending_admin' CHECK (
    payment_status IN ('pending', 'paid_pending_admin', 'noted', 'certificate_sent')
  ),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT
);

-- Create indexes for common queries
CREATE INDEX IF NOT EXISTS idx_certificate_payments_user_id ON certificate_payments(user_id);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_status ON certificate_payments(payment_status);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_course ON certificate_payments(course_id);
CREATE INDEX IF NOT EXISTS idx_certificate_payments_created ON certificate_payments(created_at DESC);

-- Enable Row Level Security
ALTER TABLE certificate_payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Allow users to read their own payments
CREATE POLICY "Users can read their own payments" ON certificate_payments
  FOR SELECT
  USING (auth.uid() = user_id);

-- Allow authenticated users to insert their own payments
CREATE POLICY "Users can insert their own payments" ON certificate_payments
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Allow service role to update payments (for admin operations)
CREATE POLICY "Service role can update all payments" ON certificate_payments
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Allow service role to read all payments (for admin)
CREATE POLICY "Service role can read all payments" ON certificate_payments
  FOR SELECT
  USING (true);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_certificate_payments_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER certificate_payments_update_timestamp
  BEFORE UPDATE ON certificate_payments
  FOR EACH ROW
  EXECUTE FUNCTION update_certificate_payments_timestamp();
