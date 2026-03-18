export const diplomaCourseSkills: Record<string, string[]> = {
  "stress-management": [
    "Advanced Stress Management Techniques",
    "Emotional Intelligence & Self-Awareness",
    "Mindfulness & Meditation Mastery",
    "Workplace Wellness Implementation",
    "Crisis Coping & Resilience Building"
  ],
  "leadership-excellence": [
    "Strategic Team Leadership",
    "Emotional Intelligence in Management",
    "Conflict Resolution & Negotiation",
    "Organizational Change Management",
    "Executive Decision-Making"
  ],
  "advanced-psychology": [
    "Behavioral Psychology Principles",
    "Cognitive Therapy Techniques",
    "Human Motivation & Persuasion",
    "Neuroscience of Learning",
    "Psychological Assessment Methods"
  ],
  "business-management": [
    "Strategic Business Planning",
    "Financial Management & Analysis",
    "Operations & Process Optimization",
    "Human Resources Management",
    "Entrepreneurial Innovation"
  ],
  "digital-marketing-pro": [
    "Advanced SEO & SEM Strategies",
    "Social Media Analytics & Growth",
    "Content Marketing Mastery",
    "Email Marketing Automation",
    "Data-Driven Campaign Optimization"
  ],
  "web-development-diploma": [
    "Full-Stack Web Application Development",
    "Modern Frontend Frameworks & Libraries",
    "Backend Server Architecture & Databases",
    "API Design & Integration",
    "Web Security & Performance Optimization"
  ],
  "data-science-diploma": [
    "Statistical Analysis & Modeling",
    "Machine Learning Algorithms",
    "Data Visualization & Interpretation",
    "Big Data Processing & Analytics",
    "Predictive Analytics & AI Integration"
  ],
  "cloud-computing-diploma": [
    "Cloud Infrastructure & Architecture",
    "Containerization & Kubernetes",
    "Microservices Development",
    "Cloud Security & Compliance",
    "DevOps & Continuous Integration"
  ],
  "financial-planning-diploma": [
    "Investment Portfolio Management",
    "Tax Planning & Optimization",
    "Retirement & Wealth Planning",
    "Risk Assessment & Insurance",
    "Financial Forecasting & Analysis"
  ],
  "public-speaking-diploma": [
    "Presentation Design & Delivery",
    "Audience Engagement Mastery",
    "Persuasive Communication Techniques",
    "Stage Presence & Confidence Building",
    "Crisis Communication Management"
  ]
};

export function getDiplomaSkills(courseId: string): string[] {
  // Map various course names to skills
  const skillsKey = courseId.toLowerCase().replace(/\s+/g, "-");
  
  // Check exact match first
  if (diplomaCourseSkills[skillsKey]) {
    return diplomaCourseSkills[skillsKey];
  }

  // Check for partial matches
  const matchedKey = Object.keys(diplomaCourseSkills).find(key => 
    skillsKey.includes(key) || key.includes(skillsKey)
  );

  if (matchedKey) {
    return diplomaCourseSkills[matchedKey];
  }

  // Default skills for any diploma course
  return [
    "Professional Expertise Development",
    "Advanced Technical Skills",
    "Leadership & Management Abilities",
    "Critical Problem-Solving",
    "Industry-Ready Competencies"
  ];
}
