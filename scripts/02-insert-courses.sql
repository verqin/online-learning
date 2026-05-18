-- Insert Edusanna Platform Courses (A-Z Categories)
-- This script populates the courses table with all available courses

INSERT INTO public.courses (id, letter, certificate_title, diploma_title, category, icon, color) VALUES

-- A Courses
('accounting', 'A', 'Accounting Fundamentals', 'Accounting Professional', 'finance', 'Calculator', 'from-yellow-500 to-amber-500'),
('artificial-intelligence', 'A', 'Artificial Intelligence Basics', 'AI Engineering', 'technology', 'Brain', 'from-purple-500 to-indigo-500'),
('agriculture', 'A', 'Agriculture Management', 'Agribusiness Leadership', 'agriculture', 'Sprout', 'from-teal-500 to-green-500'),
('art-therapy', 'A', 'Art Therapy Basics', 'Clinical Art Therapy', 'health', 'Palette', 'from-pink-500 to-rose-500'),
('android-development', 'A', 'Android Development', 'Advanced Android Engineering', 'technology', 'Smartphone', 'from-purple-500 to-indigo-500'),
('arabic-language', 'A', 'Arabic Language Fundamentals', 'Arabic Translation Expert', 'education', 'Languages', 'from-green-500 to-emerald-500'),
('aviation-safety', 'A', 'Aviation Safety Basics', 'Aviation Management Professional', 'business', 'Plane', 'from-blue-500 to-cyan-500'),
('anthropology', 'A', 'Anthropology Essentials', 'Cultural Anthropology Specialist', 'education', 'Users', 'from-green-500 to-emerald-500'),
('apparel-design', 'A', 'Apparel Design Basics', 'Fashion Technology Expert', 'creative', 'Shirt', 'from-orange-500 to-red-500'),
('aquaculture', 'A', 'Aquaculture Basics', 'Aquaculture Manager', 'agriculture', 'Fish', 'from-teal-500 to-green-500'),

-- B Courses
('business-management', 'B', 'Business Management Fundamentals', 'Business Administration Professional', 'business', 'Briefcase', 'from-blue-500 to-cyan-500'),
('blockchain', 'B', 'Blockchain Technology Basics', 'Blockchain Developer', 'technology', 'Link', 'from-purple-500 to-indigo-500'),
('biotechnology', 'B', 'Biotechnology Introduction', 'Biotech Research Specialist', 'health', 'Microscope', 'from-pink-500 to-rose-500'),
('baking-arts', 'B', 'Baking Arts Basics', 'Professional Patisserie Chef', 'hospitality', 'Cookie', 'from-indigo-500 to-purple-500'),
('bookkeeping', 'B', 'Bookkeeping Fundamentals', 'Financial Accounting Specialist', 'finance', 'BookOpen', 'from-yellow-500 to-amber-500'),
('behavioral-psychology', 'B', 'Behavioral Psychology Basics', 'Clinical Psychology Expert', 'health', 'Brain', 'from-pink-500 to-rose-500'),
('brand-management', 'B', 'Brand Management Essentials', 'Strategic Branding Expert', 'business', 'Target', 'from-blue-500 to-cyan-500'),
('building-construction', 'B', 'Building Construction Basics', 'Construction Manager', 'trades', 'Building', 'from-red-500 to-pink-500'),
('business-analytics', 'B', 'Business Analytics Fundamentals', 'Data Science Professional', 'technology', 'BarChart', 'from-purple-500 to-indigo-500'),
('biodiversity', 'B', 'Biodiversity Conservation', 'Wildlife Management Expert', 'agriculture', 'Leaf', 'from-teal-500 to-green-500'),

-- C Courses
('civil-engineering', 'C', 'Civil Engineering Basics', 'Advanced Civil Engineer', 'trades', 'Building', 'from-red-500 to-pink-500'),
('cybersecurity', 'C', 'Cybersecurity Fundamentals', 'Cybersecurity Expert', 'technology', 'Shield', 'from-purple-500 to-indigo-500'),
('culinary-arts', 'C', 'Culinary Arts Basics', 'Professional Culinary Chef', 'hospitality', 'ChefHat', 'from-indigo-500 to-purple-500'),
('cloud-computing', 'C', 'Cloud Computing Basics', 'Cloud Architect', 'technology', 'Cloud', 'from-purple-500 to-indigo-500'),
('clinical-nutrition', 'C', 'Clinical Nutrition Basics', 'Nutritionist Certified', 'health', 'Apple', 'from-pink-500 to-rose-500'),

-- D Courses
('data-science', 'D', 'Data Science Fundamentals', 'Advanced Data Scientist', 'technology', 'BarChart', 'from-purple-500 to-indigo-500'),
('digital-marketing', 'D', 'Digital Marketing Basics', 'Marketing Strategy Expert', 'business', 'Megaphone', 'from-blue-500 to-cyan-500'),
('dentistry', 'D', 'Dental Sciences Basics', 'Advanced Dentistry Specialist', 'health', 'Smile', 'from-pink-500 to-rose-500'),
('design-thinking', 'D', 'Design Thinking Fundamentals', 'Innovation Design Expert', 'creative', 'Lightbulb', 'from-orange-500 to-red-500'),
('database-design', 'D', 'Database Design Essentials', 'Database Architecture Expert', 'technology', 'Database', 'from-purple-500 to-indigo-500'),

-- E Courses
('electrical-engineering', 'E', 'Electrical Engineering Basics', 'Advanced Electrical Engineer', 'trades', 'Zap', 'from-red-500 to-pink-500'),
('environmental-science', 'E', 'Environmental Science Basics', 'Environmental Manager', 'agriculture', 'Leaf', 'from-teal-500 to-green-500'),
('english-literature', 'E', 'English Literature Basics', 'Literary Studies Expert', 'education', 'BookOpen', 'from-green-500 to-emerald-500'),
('economics', 'E', 'Economics Fundamentals', 'Economics Specialist', 'business', 'TrendingUp', 'from-blue-500 to-cyan-500'),
('entrepreneurship', 'E', 'Entrepreneurship Essentials', 'Business Founder Expert', 'business', 'Rocket', 'from-blue-500 to-cyan-500');

-- Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_courses_letter ON public.courses(letter);
CREATE INDEX IF NOT EXISTS idx_courses_category ON public.courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_id ON public.courses(id);

-- Verify the migration was successful
SELECT COUNT(*) as total_courses FROM public.courses;
