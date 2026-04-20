-- Migrate courses from code to Supabase
-- This script inserts all A-Z courses into the courses table

INSERT INTO courses (id, letter, certificate_title, diploma_title, category, icon, color, created_at) VALUES
-- A Courses
('accounting', 'A', 'Accounting Fundamentals', 'Accounting Professional', 'finance', 'Calculator', 'from-yellow-500 to-amber-500', NOW()),
('artificial-intelligence', 'A', 'Artificial Intelligence Basics', 'AI Engineering', 'technology', 'Brain', 'from-purple-500 to-indigo-500', NOW()),
('agriculture', 'A', 'Agriculture Management', 'Agribusiness Leadership', 'agriculture', 'Sprout', 'from-teal-500 to-green-500', NOW()),
('art-therapy', 'A', 'Art Therapy', 'Clinical Art Therapy', 'health', 'Palette', 'from-pink-500 to-rose-500', NOW()),
('android-development', 'A', 'Android Development', 'Advanced Android Engineering', 'technology', 'Smartphone', 'from-purple-500 to-indigo-500', NOW()),
('arabic-language', 'A', 'Arabic Language', 'Arabic Translation', 'education', 'Languages', 'from-green-500 to-emerald-500', NOW()),
('aviation-safety', 'A', 'Aviation Safety', 'Aviation Management', 'business', 'Plane', 'from-blue-500 to-cyan-500', NOW()),
('anthropology', 'A', 'Anthropology', 'Cultural Anthropology', 'education', 'Users', 'from-green-500 to-emerald-500', NOW()),
('apparel-design', 'A', 'Apparel Design', 'Fashion Technology', 'creative', 'Shirt', 'from-orange-500 to-red-500', NOW()),
('aquaculture', 'A', 'Aquaculture', 'Aquaculture Management', 'agriculture', 'Fish', 'from-teal-500 to-green-500', NOW()),

-- B Courses
('business-management', 'B', 'Business Management', 'Business Administration', 'business', 'Briefcase', 'from-blue-500 to-cyan-500', NOW()),
('blockchain', 'B', 'Blockchain Technology', 'Blockchain Development', 'technology', 'Link', 'from-purple-500 to-indigo-500', NOW()),
('biotechnology', 'B', 'Biotechnology', 'Biotech Research', 'health', 'Microscope', 'from-pink-500 to-rose-500', NOW()),
('baking-arts', 'B', 'Baking Arts', 'Professional Patisserie', 'hospitality', 'Cookie', 'from-indigo-500 to-purple-500', NOW()),
('bookkeeping', 'B', 'Bookkeeping', 'Financial Accounting', 'finance', 'BookOpen', 'from-yellow-500 to-amber-500', NOW()),
('behavioral-psychology', 'B', 'Behavioral Psychology', 'Clinical Psychology', 'health', 'Brain', 'from-pink-500 to-rose-500', NOW()),
('brand-management', 'B', 'Brand Management', 'Strategic Branding', 'business', 'Target', 'from-blue-500 to-cyan-500', NOW()),
('building-construction', 'B', 'Building Construction', 'Construction Management', 'trades', 'Building', 'from-red-500 to-pink-500', NOW()),
('business-analytics', 'B', 'Business Analytics', 'Data Science', 'technology', 'BarChart', 'from-purple-500 to-indigo-500', NOW()),
('biodiversity', 'B', 'Biodiversity Conservation', 'Wildlife Management', 'agriculture', 'Leaf', 'from-teal-500 to-green-500', NOW()),

-- C Courses (sample - add more as needed)
('civil-engineering', 'C', 'Civil Engineering', 'Advanced Civil Engineering', 'trades', 'Building', 'from-red-500 to-pink-500', NOW()),
('cybersecurity', 'C', 'Cybersecurity Fundamentals', 'Cybersecurity Expert', 'technology', 'Shield', 'from-purple-500 to-indigo-500', NOW()),
('culinary-arts', 'C', 'Culinary Arts', 'Professional Culinary Management', 'hospitality', 'ChefHat', 'from-indigo-500 to-purple-500', NOW()),
('cloud-computing', 'C', 'Cloud Computing Basics', 'Cloud Architecture', 'technology', 'Cloud', 'from-purple-500 to-indigo-500', NOW()),
('clinical-nutrition', 'C', 'Clinical Nutrition', 'Nutritionist Certification', 'health', 'Apple', 'from-pink-500 to-rose-500', NOW()),

-- D Courses (sample)
('data-science', 'D', 'Data Science Fundamentals', 'Advanced Data Science', 'technology', 'BarChart', 'from-purple-500 to-indigo-500', NOW()),
('digital-marketing', 'D', 'Digital Marketing', 'Marketing Strategy', 'business', 'Megaphone', 'from-blue-500 to-cyan-500', NOW()),
('dentistry', 'D', 'Dental Sciences', 'Advanced Dentistry', 'health', 'Smile', 'from-pink-500 to-rose-500', NOW()),

-- E Courses (sample)
('electrical-engineering', 'E', 'Electrical Engineering', 'Advanced Electrical Engineering', 'trades', 'Zap', 'from-red-500 to-pink-500', NOW()),
('environmental-science', 'E', 'Environmental Science', 'Environmental Management', 'agriculture', 'Leaf', 'from-teal-500 to-green-500', NOW()),
('english-literature', 'E', 'English Literature', 'Literary Studies', 'education', 'BookOpen', 'from-green-500 to-emerald-500', NOW()),

-- Add more course categories as needed...
-- You can extend this script to include all A-Z courses

-- Create index on category and letter for faster filtering
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_letter ON courses(letter);
CREATE INDEX IF NOT EXISTS idx_courses_id ON courses(id);

-- Verify migration
SELECT COUNT(*) as total_courses FROM courses;
