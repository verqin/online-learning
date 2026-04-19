-- Analytics and Error Logging Tables

-- Error Logs Table
CREATE TABLE IF NOT EXISTS error_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint TEXT NOT NULL,
  error_message TEXT NOT NULL,
  error_type TEXT,
  status_code INTEGER,
  user_id UUID REFERENCES auth.users(id),
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- System Metrics Table
CREATE TABLE IF NOT EXISTS system_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name TEXT NOT NULL,
  metric_value FLOAT NOT NULL,
  endpoint TEXT,
  response_time_ms INTEGER,
  db_queries_count INTEGER,
  api_calls_count INTEGER,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- User Session Analytics Table
CREATE TABLE IF NOT EXISTS session_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  session_start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  session_end_time TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  pages_visited TEXT[],
  events_tracked JSONB,
  country TEXT,
  device_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Conversion Funnel Tracking Table
CREATE TABLE IF NOT EXISTS conversion_funnel (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  event_type TEXT NOT NULL,
  course_id TEXT,
  course_name TEXT,
  event_timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Payment Analytics Table
CREATE TABLE IF NOT EXISTS payment_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id UUID UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  course_id TEXT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_status TEXT,
  payment_method TEXT,
  processed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Page View Analytics Table
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  page_name TEXT NOT NULL,
  page_path TEXT,
  referrer TEXT,
  view_timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Course Analytics Table
CREATE TABLE IF NOT EXISTS course_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id TEXT UNIQUE NOT NULL,
  course_name TEXT,
  total_enrollments INTEGER DEFAULT 0,
  total_completions INTEGER DEFAULT 0,
  total_revenue DECIMAL(10, 2) DEFAULT 0,
  avg_rating FLOAT,
  total_reviews INTEGER DEFAULT 0,
  instructor_name TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_error_logs_timestamp ON error_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_error_logs_endpoint ON error_logs(endpoint);
CREATE INDEX IF NOT EXISTS idx_system_metrics_timestamp ON system_metrics(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_session_analytics_user ON session_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_user ON conversion_funnel(user_id);
CREATE INDEX IF NOT EXISTS idx_conversion_funnel_event ON conversion_funnel(event_type);
CREATE INDEX IF NOT EXISTS idx_payment_analytics_user ON payment_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_payment_analytics_status ON payment_analytics(payment_status);
CREATE INDEX IF NOT EXISTS idx_page_views_user ON page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_course_analytics_enrollments ON course_analytics(total_enrollments DESC);
