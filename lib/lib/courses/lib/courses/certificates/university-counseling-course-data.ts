// University Counseling (Certificate) - Complete Course Data
// File: university-counseling-certificate.ts

export const universityCounselingCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "university-counseling-certificate",
  title: "University Counseling (Certificate)",
  description: "Learn essential skills to guide students through university selection, application processes, and educational planning. Master the fundamentals of academic advising and student support.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🎓",
  badge: "Certificate",
  prerequisites: "No prior experience required",
  learningOutcomes: [
    "Understand university admissions processes",
    "Learn student assessment techniques",
    "Master application timeline planning",
    "Develop academic advising skills",
    "Create personalized education plans"
  ],

  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Foundations of Educational Counseling",
      content: `# Module 1: Foundations of Educational Counseling

## Introduction to University Counseling
Educational counseling helps students navigate their academic journeys. A counselor's primary role is to support students in making informed decisions about their education. This module covers the basic principles every counselor should know.

### Core Counseling Principles
- **Active Listening**: Pay full attention to students without interruption
- **Empathy Development**: Understand student perspectives and feelings
- **Confidentiality**: Maintain student privacy and trust
- **Professional Boundaries**: Establish appropriate counselor-student relationships
- **Cultural Sensitivity**: Respect diverse backgrounds and experiences

### University Systems Understanding
Educational systems vary across regions. Counselors must understand different types of institutions:
- Public universities (government-funded)
- Private colleges (independently funded)
- Community colleges (two-year programs)
- Technical institutes (vocational training)
- Online universities (distance learning)

### Student Assessment Basics
Effective counseling begins with understanding student needs:
- Academic strengths and weaknesses
- Learning style preferences
- Career interests and goals
- Personal circumstances and challenges
- Support system availability

### Essential Counseling Tools
Basic tools every counselor should master:
- Interest inventory questionnaires
- Academic record analysis
- Goal-setting worksheets
- Progress tracking systems
- Communication logs

### Common Counseling Scenarios
Typical situations counselors encounter:
- First-generation college applicants
- Transfer student guidance
- Academic difficulty interventions
- Career path uncertainty
- Financial aid navigation

**Key Takeaway**: Successful counseling starts with building trust and understanding each student's unique situation.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary role of a university counselor?",
          options: [
            "To grade student applications",
            "To support students in making informed education decisions",
            "To teach academic subjects",
            "To manage university finances"
          ],
          correctAnswer: 1,
          explanation: "The counselor's main role is supporting students through informed decision-making about their educational paths."
        },
        {
          id: 2,
          question: "Which principle involves maintaining student privacy?",
          options: [
            "Active Listening",
            "Confidentiality",
            "Empathy Development",
            "Cultural Sensitivity"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality ensures student information remains private and builds trust in the counseling relationship."
        },
        {
          id: 3,
          question: "What type of institution typically offers two-year programs?",
          options: [
            "Public universities",
            "Technical institutes",
            "Community colleges",
            "Private colleges"
          ],
          correctAnswer: 2,
          explanation: "Community colleges primarily offer two-year associate degree programs and certificate programs."
        },
        {
          id: 4,
          question: "What should counseling begin with understanding?",
          options: [
            "University budgets",
            "Student needs",
            "Government policies",
            "Faculty preferences"
          ],
          correctAnswer: 1,
          explanation: "Effective counseling starts by understanding each student's unique needs, strengths, and circumstances."
        },
        {
          id: 5,
          question: "Which tool helps identify student preferences?",
          options: [
            "Communication logs",
            "Interest inventory questionnaires",
            "Progress tracking systems",
            "Academic record analysis"
          ],
          correctAnswer: 1,
          explanation: "Interest inventory questionnaires help identify students' preferences, interests, and potential career paths."
        },
        {
          id: 6,
          question: "What does active listening require?",
          options: [
            "Frequent interruptions for clarification",
            "Full attention without interruption",
            "Taking detailed notes only",
            "Offering immediate solutions"
          ],
          correctAnswer: 1,
          explanation: "Active listening means giving students full attention without interrupting, allowing them to express themselves completely."
        },
        {
          id: 7,
          question: "Which scenario involves first-generation college applicants?",
          options: [
            "Transfer student guidance",
            "Academic difficulty interventions",
            "Students whose parents didn't attend college",
            "Career path uncertainty"
          ],
          correctAnswer: 2,
          explanation: "First-generation college applicants are students whose parents or guardians did not complete a college degree."
        },
        {
          id: 8,
          question: "What helps counselors respect diverse backgrounds?",
          options: [
            "Professional Boundaries",
            "Cultural Sensitivity",
            "Confidentiality",
            "Active Listening"
          ],
          correctAnswer: 1,
          explanation: "Cultural sensitivity involves understanding and respecting students' diverse backgrounds, experiences, and perspectives."
        },
        {
          id: 9,
          question: "What do progress tracking systems monitor?",
          options: [
            "University finances",
            "Student application progress",
            "Faculty meetings",
            "Building maintenance"
          ],
          correctAnswer: 1,
          explanation: "Progress tracking systems help counselors monitor students' application progress and academic development."
        },
        {
          id: 10,
          question: "Which institution is government-funded?",
          options: [
            "Private colleges",
            "Public universities",
            "Technical institutes",
            "Online universities"
          ],
          correctAnswer: 1,
          explanation: "Public universities receive funding from government sources and often have lower tuition for in-state residents."
        },
        {
          id: 11,
          question: "What establishes appropriate relationships?",
          options: [
            "Empathy Development",
            "Professional Boundaries",
            "Active Listening",
            "Cultural Sensitivity"
          ],
          correctAnswer: 1,
          explanation: "Professional boundaries help maintain appropriate, ethical relationships between counselors and students."
        },
        {
          id: 12,
          question: "What analyzes past academic performance?",
          options: [
            "Goal-setting worksheets",
            "Interest inventory questionnaires",
            "Academic record analysis",
            "Communication logs"
          ],
          correctAnswer: 2,
          explanation: "Academic record analysis examines students' past performance to identify strengths and areas needing improvement."
        },
        {
          id: 13,
          question: "Which situation involves changing schools?",
          options: [
            "First-generation applicants",
            "Transfer student guidance",
            "Financial aid navigation",
            "Career path uncertainty"
          ],
          correctAnswer: 1,
          explanation: "Transfer student guidance involves helping students who want to move from one institution to another."
        },
        {
          id: 14,
          question: "What helps understand student feelings?",
          options: [
            "Confidentiality",
            "Empathy Development",
            "Professional Boundaries",
            "Active Listening"
          ],
          correctAnswer: 1,
          explanation: "Empathy development helps counselors understand and appreciate students' feelings and perspectives."
        },
        {
          id: 15,
          question: "What type of learning happens remotely?",
          options: [
            "Community college programs",
            "Online university courses",
            "Technical institute training",
            "Private college classes"
          ],
          correctAnswer: 1,
          explanation: "Online universities specialize in distance learning where students complete coursework remotely."
        },
        {
          id: 16,
          question: "What documents counselor-student conversations?",
          options: [
            "Progress tracking systems",
            "Communication logs",
            "Interest inventories",
            "Goal-setting worksheets"
          ],
          correctAnswer: 1,
          explanation: "Communication logs document conversations, meetings, and important discussions with students."
        },
        {
          id: 17,
          question: "What focuses on vocational skills?",
          options: [
            "Public universities",
            "Technical institutes",
            "Community colleges",
            "Online universities"
          ],
          correctAnswer: 1,
          explanation: "Technical institutes specialize in vocational and technical skills training for specific careers."
        },
        {
          id: 18,
          question: "What helps plan future objectives?",
          options: [
            "Academic record analysis",
            "Goal-setting worksheets",
            "Interest inventories",
            "Communication logs"
          ],
          correctAnswer: 1,
          explanation: "Goal-setting worksheets help students define and plan their academic and career objectives."
        },
        {
          id: 19,
          question: "Which scenario addresses poor grades?",
          options: [
            "Financial aid navigation",
            "Academic difficulty interventions",
            "Transfer student guidance",
            "First-generation applicants"
          ],
          correctAnswer: 1,
          explanation: "Academic difficulty interventions help students who are struggling with their coursework or grades."
        },
        {
          id: 20,
          question: "Where are private colleges primarily funded from?",
          options: [
            "Government sources",
            "Independent sources",
            "Student tuition only",
            "Corporate donations"
          ],
          correctAnswer: 1,
          explanation: "Private colleges are independently funded through tuition, donations, and endowments rather than government funding."
        }
      ]
    },

    {
      id: 2,
      title: "University Selection Process",
      content: `# Module 2: University Selection Process

## Understanding Institutional Differences
Choosing the right university requires understanding various factors that make institutions unique. Each university has distinct characteristics that affect student success and satisfaction.

### Key Selection Factors
Consider these essential elements when advising students:
- **Academic Programs**: Available majors and program quality
- **Location Considerations**: Urban, suburban, or rural settings
- **Campus Size**: Student population and physical campus size
- **Cost and Financial Aid**: Tuition, fees, and available assistance
- **Campus Culture**: Social environment and student life
- **Support Services**: Academic support and student resources
- **Career Outcomes**: Graduation rates and employment statistics
- **Admission Requirements**: Entry criteria and selectivity

### Program Quality Assessment
Evaluate academic programs using multiple criteria:
- Faculty qualifications and experience
- Accreditation status and duration
- Facilities and resources available
- Industry connections and partnerships
- Alumni success stories and networks
- Research opportunities for students
- Internship and co-op program availability
- Graduation and retention rates

### Location Impact Analysis
Geographic location affects student experience:
- Climate and weather patterns
- Cost of living in the area
- Transportation accessibility
- Local employment opportunities
- Cultural and recreational activities
- Distance from home and family
- Safety and security considerations
- Community size and diversity

### Financial Considerations
Help students understand costs and funding:
- Tuition structure (per credit or flat rate)
- Mandatory fees (technology, activity, health)
- Room and board expenses
- Textbook and supply costs
- Transportation expenses
- Personal spending estimates
- Financial aid packages available
- Scholarship opportunities

### Student Support Evaluation
Assess institutional support systems:
- Academic advising availability
- Tutoring and writing centers
- Mental health services
- Disability accommodations
- Career counseling services
- International student support
- First-year experience programs
- Peer mentoring availability

**Key Takeaway**: The best university matches student goals, learning style, and personal circumstances. Never recommend based on prestige alone.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should be considered about campus environment?",
          options: [
            "Only the academic programs",
            "Campus culture and student life",
            "Just the tuition costs",
            "Only the location"
          ],
          correctAnswer: 1,
          explanation: "Campus culture significantly impacts student happiness and success, so it's crucial to consider."
        },
        {
          id: 2,
          question: "What indicates program quality?",
          options: [
            "Only the cost of tuition",
            "Faculty qualifications and experience",
            "The campus sports teams",
            "The dormitory colors"
          ],
          correctAnswer: 1,
          explanation: "Faculty qualifications directly affect educational quality and student learning outcomes."
        },
        {
          id: 3,
          question: "What affects cost of living?",
          options: [
            "Geographic location",
            "Only tuition rates",
            "Campus building age",
            "University mascot"
          ],
          correctAnswer: 0,
          explanation: "Geographic location determines housing costs, food prices, and general living expenses."
        },
        {
          id: 4,
          question: "What helps evaluate career outcomes?",
          options: [
            "Graduation rates and employment statistics",
            "Campus food quality",
            "Dormitory room sizes",
            "Sports team rankings"
          ],
          correctAnswer: 0,
          explanation: "Graduation and employment rates show how well the institution prepares students for success."
        },
        {
          id: 5,
          question: "What considers urban vs rural settings?",
          options: [
            "Location considerations",
            "Academic programs only",
            "Tuition costs",
            "Campus size"
          ],
          correctAnswer: 0,
          explanation: "Location considerations include whether the campus is in an urban, suburban, or rural area."
        },
        {
          id: 6,
          question: "What shows industry connections?",
          options: [
            "Internship program availability",
            "Library book count",
            "Campus square footage",
            "Student organization numbers"
          ],
          correctAnswer: 0,
          explanation: "Internship availability often indicates strong industry partnerships and practical learning opportunities."
        },
        {
          id: 7,
          question: "What affects transportation needs?",
          options: [
            "Geographic location",
            "Academic major choice",
            "Student's favorite color",
            "Dormitory style"
          ],
          correctAnswer: 0,
          explanation: "Location determines whether students need cars, can use public transit, or can walk everywhere."
        },
        {
          id: 8,
          question: "What indicates institutional support?",
          options: [
            "Tutoring center availability",
            "Campus parking spaces",
            "Football stadium size",
            "Cafeteria menu variety"
          ],
          correctAnswer: 0,
          explanation: "Tutoring centers show commitment to academic support and student success."
        },
        {
          id: 9,
          question: "What helps with academic success?",
          options: [
            "Academic advising availability",
            "Campus gym equipment",
            "Student newspaper quality",
            "Dormitory furniture"
          ],
          correctAnswer: 0,
          explanation: "Academic advising helps students choose appropriate courses and stay on track for graduation."
        },
        {
          id: 10,
          question: "What shows program recognition?",
          options: [
            "Accreditation status",
            "Campus age",
            "Student population",
            "Tuition price"
          ],
          correctAnswer: 0,
          explanation: "Accreditation indicates the program meets quality standards recognized by educational authorities."
        },
        {
          id: 11,
          question: "What affects personal expenses?",
          options: [
            "Cost of living in the area",
            "University founding date",
            "Campus tree types",
            "Library hours"
          ],
          correctAnswer: 0,
          explanation: "Local cost of living determines expenses for food, entertainment, and daily necessities."
        },
        {
          id: 12,
          question: "What helps international students?",
          options: [
            "Specialized support services",
            "Campus tour guides",
            "Football game tickets",
            "Dormitory roommates"
          ],
          correctAnswer: 0,
          explanation: "International student support addresses unique needs like visas, culture adjustment, and language help."
        },
        {
          id: 13,
          question: "What indicates research opportunities?",
          options: [
            "Faculty research projects",
            "Campus building names",
            "Student club count",
            "Cafeteria food brands"
          ],
          correctAnswer: 0,
          explanation: "Faculty research involvement often creates undergraduate research opportunities for students."
        },
        {
          id: 14,
          question: "What affects student safety?",
          options: [
            "Campus security measures",
            "Academic program ranking",
            "Sports team success",
            "Library book collection"
          ],
          correctAnswer: 0,
          explanation: "Security measures and campus safety protocols protect student well-being."
        },
        {
          id: 15,
          question: "What shows alumni network strength?",
          options: [
            "Alumni success stories",
            "Campus flower gardens",
            "Dormitory architecture",
            "Cafeteria seating"
          ],
          correctAnswer: 0,
          explanation: "Successful alumni often create strong networks and mentoring opportunities for current students."
        },
        {
          id: 16,
          question: "What helps first-year students?",
          options: [
            "First-year experience programs",
            "Graduation ceremony planning",
            "Alumni reunion scheduling",
            "Faculty retirement parties"
          ],
          correctAnswer: 0,
          explanation: "First-year programs help new students adjust to college life and academic expectations."
        },
        {
          id: 17,
          question: "What indicates practical learning?",
          options: [
            "Co-op program availability",
            "Campus fountain design",
            "Student ID card color",
            "Parking permit cost"
          ],
          correctAnswer: 0,
          explanation: "Co-op programs provide paid work experience related to students' academic fields."
        },
        {
          id: 18,
          question: "What affects academic performance?",
          options: [
            "Academic support services",
            "Campus party schedule",
            "Sports event timing",
            "Dormitory paint colors"
          ],
          correctAnswer: 0,
          explanation: "Support services like tutoring directly impact student academic performance and success."
        },
        {
          id: 19,
          question: "What shows student satisfaction?",
          options: [
            "Retention rates",
            "Campus building height",
            "Sidewalk width",
            "Tree species variety"
          ],
          correctAnswer: 0,
          explanation: "High retention rates often indicate student satisfaction and successful adjustment to campus life."
        },
        {
          id: 20,
          question: "What determines entry requirements?",
          options: [
            "Admission criteria",
            "Campus tour availability",
            "Football game prices",
            "Dormitory floor plans"
          ],
          correctAnswer: 0,
          explanation: "Admission requirements define the academic and personal qualifications needed for acceptance."
        }
      ]
    },

    {
      id: 3,
      title: "Application Process Management",
      content: `# Module 3: Application Process Management

## Navigating University Applications
The application process involves multiple steps and requirements. Counselors help students organize and complete applications effectively and on time.

### Application Components
Understand all required application elements:
- **Personal Information**: Basic student details and contact information
- **Academic History**: Transcripts and course records
- **Standardized Tests**: Required exam scores and dates
- **Essays and Personal Statements**: Written components showcasing personality
- **Recommendation Letters**: Support from teachers or mentors
- **Activities and Achievements**: Extracurricular involvement and honors
- **Application Fees**: Payment requirements and waivers
- **Supplementary Materials**: Portfolios, auditions, or additional requirements

### Timeline Development
Create realistic application schedules:
- Research phase (6-12 months before deadlines)
- Test preparation and registration (4-8 months before)
- Essay drafting and revision (3-6 months before)
- Recommendation letter requests (2-4 months before)
- Final application review (1 month before deadlines)
- Submission deadlines (varies by institution)
- Follow-up and confirmation (after submission)
- Decision timelines (response waiting periods)

### Essay Guidance Strategies
Help students craft compelling essays:
- Brainstorming personal experiences and values
- Identifying unique stories and perspectives
- Structuring essays with clear introductions and conclusions
- Showing rather than telling through examples
- Editing for clarity, grammar, and impact
- Aligning essays with university values and programs
- Avoiding common clichés and generic statements
- Ensuring authenticity and personal voice

### Recommendation Coordination
Manage recommendation requests effectively:
- Selecting appropriate recommenders
- Providing recommenders with necessary information
- Giving sufficient notice and deadlines
- Following up politely and professionally
- Waiving access rights appropriately
- Ensuring submission confirmations
- Thanking recommenders for their support
- Addressing any issues or delays

### Application Review Process
Final checks before submission:
- Completeness verification (all sections filled)
- Accuracy confirmation (correct information)
- Essay proofreading (multiple reviews)
- Document matching (consistent information)
- Fee payment confirmation
- Submission receipt tracking
- Copy retention for records
- Follow-up communication planning

**Key Takeaway**: Organization and attention to detail prevent application errors. Start early and maintain consistent progress.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What showcases student personality?",
          options: [
            "Essays and personal statements",
            "Application fees",
            "Transcript copies",
            "Test registration numbers"
          ],
          correctAnswer: 0,
          explanation: "Essays allow students to share their personality, experiences, and unique perspectives."
        },
        {
          id: 2,
          question: "When should research typically begin?",
          options: [
            "6-12 months before deadlines",
            "1 week before deadlines",
            "After acceptance",
            "During senior year only"
          ],
          correctAnswer: 0,
          explanation: "Starting research 6-12 months before allows thorough exploration of options and requirements."
        },
        {
          id: 3,
          question: "What provides academic background?",
          options: [
            "Transcripts and course records",
            "Personal essays",
            "Recommendation letters",
            "Activity lists"
          ],
          correctAnswer: 0,
          explanation: "Transcripts document academic history, performance, and course completion."
        },
        {
          id: 4,
          question: "What involves test preparation?",
          options: [
            "4-8 months before deadlines",
            "The night before tests",
            "After application submission",
            "During college orientation"
          ],
          correctAnswer: 0,
          explanation: "Proper test preparation requires months of study and practice for best results."
        },
        {
          id: 5,
          question: "What shows extracurricular involvement?",
          options: [
            "Activities and achievements lists",
            "Application fee payments",
            "Personal information forms",
            "Test score reports"
          ],
          correctAnswer: 0,
          explanation: "Activities lists demonstrate interests, commitments, and leadership outside academics."
        },
        {
          id: 6,
          question: "What helps essay development?",
          options: [
            "Brainstorming personal experiences",
            "Copying sample essays",
            "Using only big words",
            "Writing at the last minute"
          ],
          correctAnswer: 0,
          explanation: "Brainstorming helps identify meaningful experiences and authentic stories to share."
        },
        {
          id: 7,
          question: "When request recommendation letters?",
          options: [
            "2-4 months before deadlines",
            "The day before deadlines",
            "After acceptance",
            "Never request them"
          ],
          correctAnswer: 0,
          explanation: "Requesting 2-4 months ahead gives recommenders ample time to write thoughtful letters."
        },
        {
          id: 8,
          question: "What requires payment or waiver?",
          options: [
            "Application fees",
            "Essays",
            "Transcripts",
            "Test scores"
          ],
          correctAnswer: 0,
          explanation: "Most applications require fees, though waivers are available for qualifying students."
        },
        {
          id: 9,
          question: "What ensures essay quality?",
          options: [
            "Multiple editing reviews",
            "Writing in one draft only",
            "Using complex sentences always",
            "Making it as long as possible"
          ],
          correctAnswer: 0,
          explanation: "Multiple edits improve clarity, grammar, and overall impact of essays."
        },
        {
          id: 10,
          question: "What provides mentor support?",
          options: [
            "Recommendation letters",
            "Application fees",
            "Personal information",
            "Test registration"
          ],
          correctAnswer: 0,
          explanation: "Recommendation letters offer third-party perspectives on student abilities and character."
        },
        {
          id: 11,
          question: "When finalize applications?",
          options: [
            "1 month before deadlines",
            "On deadline day",
            "After decisions release",
            "During summer break"
          ],
          correctAnswer: 0,
          explanation: "Completing applications one month early allows time for final reviews and corrections."
        },
        {
          id: 12,
          question: "What needs consistency checks?",
          options: [
            "All application documents",
            "Only the essay",
            "Just test scores",
            "Only personal information"
          ],
          correctAnswer: 0,
          explanation: "All documents should present consistent, accurate information about the student."
        },
        {
          id: 13,
          question: "What shows artistic ability?",
          options: [
            "Portfolios or auditions",
            "Standardized test scores",
            "Application fees",
            "Recommendation letters"
          ],
          correctAnswer: 0,
          explanation: "Portfolios and auditions demonstrate skills for arts, music, or performance programs."
        },
        {
          id: 14,
          question: "What tracks submission?",
          options: [
            "Submission receipts",
            "Essay rough drafts",
            "Brainstorming notes",
            "Recommender contact lists"
          ],
          correctAnswer: 0,
          explanation: "Submission receipts confirm applications were received and are being processed."
        },
        {
          id: 15,
          question: "When draft essays?",
          options: [
            "3-6 months before deadlines",
            "After acceptance",
            "During graduation",
            "Never write drafts"
          ],
          correctAnswer: 0,
          explanation: "Starting essays 3-6 months early allows time for multiple revisions and improvements."
        },
        {
          id: 16,
          question: "What requires follow-up?",
          options: [
            "Recommendation submissions",
            "High school graduation",
            "College orientation",
            "Family vacations"
          ],
          correctAnswer: 0,
          explanation: "Following up ensures recommenders submit their letters before deadlines."
        },
        {
          id: 17,
          question: "What checks completeness?",
          options: [
            "Verifying all sections are filled",
            "Counting essay words only",
            "Checking application color",
            "Reviewing fee amount only"
          ],
          correctAnswer: 0,
          explanation: "Completeness verification ensures no required sections are left blank or incomplete."
        },
        {
          id: 18,
          question: "What involves waiting periods?",
          options: [
            "Decision timelines",
            "Essay writing",
            "Test taking",
            "Fee paying"
          ],
          correctAnswer: 0,
          explanation: "Decision timelines are the periods between application submission and admission decisions."
        },
        {
          id: 19,
          question: "What retains copies?",
          options: [
            "Keeping application records",
            "Throwing everything away",
            "Sharing with everyone",
            "Posting online publicly"
          ],
          correctAnswer: 0,
          explanation: "Keeping copies allows reference during interviews and follow-up communications."
        },
        {
          id: 20,
          question: "What prevents errors?",
          options: [
            "Organization and attention to detail",
            "Rushing through quickly",
            "Working alone always",
            "Ignoring instructions"
          ],
          correctAnswer: 0,
          explanation: "Careful organization and attention to detail minimize mistakes in applications."
        }
      ]
    },

    {
      id: 4,
      title: "Financial Aid Navigation",
      content: `# Module 4: Financial Aid Navigation

## Understanding Education Financing
Financial aid makes higher education accessible. Counselors help students identify, apply for, and secure funding for their education.

### Types of Financial Aid
Different funding sources serve different needs:
- **Grants**: Need-based funds that don't require repayment
- **Scholarships**: Merit-based or special criteria funds
- **Loans**: Borrowed funds requiring repayment with interest
- **Work-Study**: Campus employment programs
- **Tuition Waivers**: Special discounts or exemptions
- **Assistantships**: Graduate-level teaching or research positions
- **Employer Benefits**: Workplace education assistance
- **Military Benefits**: Education support for service members

### FAFSA Completion Guide
The Free Application for Federal Student Aid (FAFSA) is essential:
- Required information and documents
- Timeline and priority deadlines
- Dependency status determination
- Income and asset reporting
- School code selection process
- Signature and submission requirements
- Correction procedures
- Renewal process for subsequent years

### Scholarship Search Strategies
Finding appropriate scholarship opportunities:
- Institutional scholarships (from universities)
- Private organization scholarships
- Community-based awards
- Corporate sponsorship programs
- Special interest group funding
- Talent-based awards (arts, athletics)
- Demographic-specific opportunities
- Essay contest scholarships

### Loan Education
Understanding student loan implications:
- Federal vs. private loan differences
- Interest rates and terms
- Repayment options and plans
- Deferment and forbearance possibilities
- Loan forgiveness programs
- Cosigner requirements and responsibilities
- Default consequences and prevention
- Responsible borrowing principles

### Financial Package Evaluation
Comparing and understanding aid offers:
- Cost of attendance calculations
- Gift aid vs. self-help aid
- Net price determination
- Renewability of awards
- Conditions and requirements
- Appeal processes for inadequate packages
- Gap funding strategies
- Acceptance and decline procedures

**Key Takeaway**: Never assume students can't afford college. Multiple funding options exist, and early planning maximizes opportunities.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of aid doesn't require repayment?",
          options: [
            "Grants and scholarships",
            "Loans",
            "Work-study earnings",
            "Private loans"
          ],
          correctAnswer: 0,
          explanation: "Grants and scholarships are gift aid that students don't need to repay."
        },
        {
          id: 2,
          question: "What is FAFSA used for?",
          options: [
            "Federal financial aid application",
            "College admission application",
            "Scholarship essay writing",
            "Loan repayment only"
          ],
          correctAnswer: 0,
          explanation: "FAFSA is the Free Application for Federal Student Aid required for federal assistance."
        },
        {
          id: 3,
          question: "What are merit-based awards?",
          options: [
            "Scholarships",
            "Grants",
            "Loans",
            "Work-study"
          ],
          correctAnswer: 0,
          explanation: "Scholarships are typically awarded based on merit, talent, or specific criteria."
        },
        {
          id: 4,
          question: "What requires repayment with interest?",
          options: [
            "Loans",
            "Grants",
            "Scholarships",
            "Tuition waivers"
          ],
          correctAnswer: 0,
          explanation: "Loans must be repaid with interest, unlike grants or scholarships."
        },
        {
          id: 5,
          question: "What provides campus employment?",
          options: [
            "Work-study programs",
            "Scholarships",
            "Grants",
            "Private loans"
          ],
          correctAnswer: 0,
          explanation: "Work-study programs offer part-time jobs to help students earn education funds."
        },
        {
          id: 6,
          question: "What determines dependency status?",
          options: [
            "FAFSA questions",
            "Student age only",
            "Parent income only",
            "High school grades"
          ],
          correctAnswer: 0,
          explanation: "FAFSA includes specific questions that determine if students are dependent or independent."
        },
        {
          id: 7,
          question: "What are institutional awards?",
          options: [
            "University-provided scholarships",
            "Federal grants",
            "Private loans",
            "Work-study jobs"
          ],
          correctAnswer: 0,
          explanation: "Institutional scholarships come directly from colleges or universities."
        },
        {
          id: 8,
          question: "What has different repayment plans?",
          options: [
            "Federal student loans",
            "Scholarships",
            "Grants",
            "Tuition waivers"
          ],
          correctAnswer: 0,
          explanation: "Federal loans offer various repayment options based on income and circumstances."
        },
        {
          id: 9,
          question: "What requires priority deadlines?",
          options: [
            "FAFSA submission",
            "College applications only",
            "Scholarship essays",
            "Loan repayment"
          ],
          correctAnswer: 0,
          explanation: "FAFSA has priority deadlines for maximum aid consideration at many institutions."
        },
        {
          id: 10,
          question: "What are corporate sponsorships?",
          options: [
            "Company-provided scholarships",
            "Federal grants",
            "Work-study jobs",
            "Private loans"
          ],
          correctAnswer: 0,
          explanation: "Corporations often offer scholarships to employees' children or community members."
        },
        {
          id: 11,
          question: "What offers forgiveness programs?",
          options: [
            "Certain federal loans",
            "All scholarships",
            "Private grants",
            "Work-study earnings"
          ],
          correctAnswer: 0,
          explanation: "Some federal loans offer forgiveness for public service or specific careers."
        },
        {
          id: 12,
          question: "What involves talent recognition?",
          options: [
            "Arts or athletics scholarships",
            "Need-based grants",
            "Federal loans",
            "Work-study"
          ],
          correctAnswer: 0,
          explanation: "Talent-based scholarships recognize abilities in areas like music, art, or sports."
        },
        {
          id: 13,
          question: "What calculates actual cost?",
          options: [
            "Net price determination",
            "Tuition sticker price",
            "Room cost only",
            "Book prices alone"
          ],
          correctAnswer: 0,
          explanation: "Net price is the actual cost after subtracting grants and scholarships."
        },
        {
          id: 14,
          question: "What are demographic-specific opportunities?",
          options: [
            "Awards for specific groups",
            "General scholarships",
            "Federal grants",
            "All student loans"
          ],
          correctAnswer: 0,
          explanation: "Some scholarships target specific demographics like ethnicity, gender, or background."
        },
        {
          id: 15,
          question: "What requires annual renewal?",
          options: [
            "FAFSA for continuing students",
            "College admission",
            "High school diploma",
            "Scholarship essays"
          ],
          correctAnswer: 0,
          explanation: "Students must complete FAFSA each year to maintain financial aid eligibility."
        },
        {
          id: 16,
          question: "What are essay contest awards?",
          options: [
            "Scholarships for writing",
            "Federal grants",
            "Work-study jobs",
            "Loan programs"
          ],
          correctAnswer: 0,
          explanation: "Some scholarships are awarded through essay writing competitions."
        },
        {
          id: 17,
          question: "What determines award renewability?",
          options: [
            "Scholarship terms and conditions",
            "Student's mood",
            "Weather patterns",
            "Sports team wins"
          ],
          correctAnswer: 0,
          explanation: "Each scholarship has specific requirements for maintaining eligibility each year."
        },
        {
          id: 18,
          question: "What helps service members?",
          options: [
            "Military education benefits",
            "Regular scholarships",
            "Private loans",
            "Work-study"
          ],
          correctAnswer: 0,
          explanation: "Military benefits provide education funding for service members and veterans."
        },
        {
          id: 19,
          question: "What allows package appeals?",
          options: [
            "Financial aid office processes",
            "Admissions office",
            "High school counselors",
            "Scholarship donors"
          ],
          correctAnswer: 0,
          explanation: "Students can appeal to financial aid offices if their packages are inadequate."
        },
        {
          id: 20,
          question: "What prevents loan default?",
          options: [
            "Responsible borrowing education",
            "Ignoring loan statements",
            "Borrowing maximum amounts",
            "Missing payments regularly"
          ],
          correctAnswer: 0,
          explanation: "Understanding loan terms and repayment options helps prevent default."
        }
      ]
    },

    {
      id: 5,
      title: "Student Support Strategies",
      content: `# Module 5: Student Support Strategies

## Holistic Student Development
Effective counseling extends beyond academics to support students' overall well-being and success throughout their educational journey.

### Academic Support Systems
Implement strategies for academic success:
- **Time Management**: Scheduling and prioritization techniques
- **Study Skills**: Effective learning and retention methods
- **Note-Taking Systems**: Organized information capture
- **Test Preparation**: Exam strategy development
- **Resource Utilization**: Library and academic support services
- **Course Selection**: Appropriate class choices and sequencing
- **Major Exploration**: Field investigation and confirmation
- **Academic Recovery**: Strategies for improving performance

### Personal Development Support
Address non-academic student needs:
- **Stress Management**: Coping strategies for academic pressure
- **Health and Wellness**: Physical and mental health maintenance
- **Relationship Building**: Social skills and network development
- **Identity Exploration**: Personal values and goal clarification
- **Life Skills**: Practical abilities for independent living
- **Crisis Intervention**: Support during personal emergencies
- **Transition Support**: Adaptation to new environments
- **Self-Advocacy**: Learning to seek needed assistance

### Career Development Integration
Connect education to future goals:
- **Career Exploration**: Investigating potential professions
- **Skills Assessment**: Identifying strengths and abilities
- **Experience Building**: Internships and relevant activities
- **Network Development**: Professional connection creation
- **Resume Building**: Documenting achievements and skills
- **Interview Preparation**: Communication and presentation skills
- **Job Search Strategies**: Effective employment seeking
- **Professional Development**: Continuing education planning

### Special Population Considerations
Address unique student needs:
- **First-Generation Students**: Additional guidance and support
- **International Students**: Cultural adjustment assistance
- **Students with Disabilities**: Accommodation coordination
- **Non-Traditional Students**: Adult learner considerations
- **Underrepresented Groups**: Diversity and inclusion support
- **Athlete Students**: Balancing sports and academics
- **Artistic Students**: Portfolio and audition preparation
- **Transfer Students**: Credit evaluation and transition

### Progress Monitoring Techniques
Track and support student development:
- Regular check-in schedules and formats
- Progress documentation and record keeping
- Goal setting and adjustment processes
- Intervention timing and approaches
- Family communication guidelines
- Resource referral procedures
- Success celebration practices
- Continuous improvement methods

**Key Takeaway**: Student success requires addressing academic, personal, and developmental needs together. Support must be comprehensive and individualized.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What helps with scheduling?",
          options: [
            "Time management techniques",
            "Only attending classes",
            "Avoiding all planning",
            "Following others' schedules"
          ],
          correctAnswer: 0,
          explanation: "Time management helps students organize their schedules and prioritize tasks effectively."
        },
        {
          id: 2,
          question: "What supports learning retention?",
          options: [
            "Effective study skills",
            "Cramming only",
            "Skipping classes",
            "Avoiding textbooks"
          ],
          correctAnswer: 0,
          explanation: "Proper study skills improve information retention and academic performance."
        },
        {
          id: 3,
          question: "What addresses academic pressure?",
          options: [
            "Stress management strategies",
            "Ignoring deadlines",
            "Avoiding all challenges",
            "Working constantly"
          ],
          correctAnswer: 0,
          explanation: "Stress management helps students cope with academic pressures and maintain balance."
        },
        {
          id: 4,
          question: "What investigates future professions?",
          options: [
            "Career exploration activities",
            "Only taking required courses",
            "Avoiding career thoughts",
            "Following parental choices"
          ],
          correctAnswer: 0,
          explanation: "Career exploration helps students understand different professions and requirements."
        },
        {
          id: 5,
          question: "What captures information effectively?",
          options: [
            "Organized note-taking systems",
            "Writing everything down",
            "Recording all lectures",
            "Never taking notes"
          ],
          correctAnswer: 0,
          explanation: "Effective note-taking systems help students organize and retain important information."
        },
        {
          id: 6,
          question: "What maintains student health?",
          options: [
            "Wellness practices",
            "Only academic focus",
            "Ignoring physical needs",
            "Staying up all night"
          ],
          correctAnswer: 0,
          explanation: "Wellness practices support both physical and mental health for overall success."
        },
        {
          id: 7,
          question: "What identifies student strengths?",
          options: [
            "Skills assessment processes",
            "Comparing to others",
            "Guessing abilities",
            "Ignoring talents"
          ],
          correctAnswer: 0,
          explanation: "Skills assessment helps students recognize their strengths and development areas."
        },
        {
          id: 8,
          question: "What develops exam strategies?",
          options: [
            "Test preparation methods",
            "Last-minute studying",
            "Avoiding all tests",
            "Guessing on exams"
          ],
          correctAnswer: 0,
          explanation: "Test preparation includes developing effective strategies for different exam types."
        },
        {
          id: 9,
          question: "What builds social networks?",
          options: [
            "Relationship development",
            "Isolating completely",
            "Only online interactions",
            "Avoiding all people"
          ],
          correctAnswer: 0,
          explanation: "Relationship building helps students develop supportive social networks."
        },
        {
          id: 10,
          question: "What gains work experience?",
          options: [
            "Internship participation",
            "Only classroom learning",
            "Avoiding all work",
            "Parent connections only"
          ],
          correctAnswer: 0,
          explanation: "Internships provide valuable work experience related to academic interests."
        },
        {
          id: 11,
          question: "What clarifies personal values?",
          options: [
            "Identity exploration",
            "Following trends only",
            "Ignoring personal growth",
            "Mimicking celebrities"
          ],
          correctAnswer: 0,
          explanation: "Identity exploration helps students understand their values, interests, and goals."
        },
        {
          id: 12,
          question: "What documents achievements?",
          options: [
            "Resume development",
            "Keeping secrets",
            "Forgetting accomplishments",
            "Only verbal sharing"
          ],
          correctAnswer: 0,
          explanation: "Resumes document skills, experiences, and achievements for future opportunities."
        },
        {
          id: 13,
          question: "What supports independent living?",
          options: [
            "Life skills development",
            "Complete dependence",
            "Avoiding responsibility",
            "Parental management only"
          ],
          correctAnswer: 0,
          explanation: "Life skills prepare students for independent living and self-sufficiency."
        },
        {
          id: 14,
          question: "What builds professional connections?",
          options: [
            "Network development",
            "Isolating professionally",
            "Avoiding all events",
            "Online presence only"
          ],
          correctAnswer: 0,
          explanation: "Network development creates professional connections for career opportunities."
        },
        {
          id: 15,
          question: "What assists during emergencies?",
          options: [
            "Crisis intervention support",
            "Ignoring problems",
            "Delaying help",
            "Handling alone always"
          ],
          correctAnswer: 0,
          explanation: "Crisis intervention provides immediate support during personal emergencies."
        },
        {
          id: 16,
          question: "What prepares for interviews?",
          options: [
            "Communication practice",
            "Winging all interviews",
            "Avoiding preparation",
            "Memorizing scripts only"
          ],
          correctAnswer: 0,
          explanation: "Interview preparation includes practicing communication and presentation skills."
        },
        {
          id: 17,
          question: "What helps with new environments?",
          options: [
            "Transition support",
            "Resisting all change",
            "Avoiding adjustments",
            "Complaining constantly"
          ],
          correctAnswer: 0,
          explanation: "Transition support helps students adapt to new academic or living environments."
        },
        {
          id: 18,
          question: "What finds employment effectively?",
          options: [
            "Job search strategies",
            "Random applications",
            "Waiting for offers",
            "Networking avoidance"
          ],
          correctAnswer: 0,
          explanation: "Effective job search strategies increase employment opportunities after graduation."
        },
        {
          id: 19,
          question: "What seeks needed assistance?",
          options: [
            "Self-advocacy skills",
            "Silent suffering",
            "Avoiding all help",
            "Expecting mind reading"
          ],
          correctAnswer: 0,
          explanation: "Self-advocacy teaches students to appropriately seek needed support and accommodations."
        },
        {
          id: 20,
          question: "What tracks development?",
          options: [
            "Progress monitoring",
            "Ignoring progress",
            "Assuming success",
            "No tracking needed"
          ],
          correctAnswer: 0,
          explanation: "Progress monitoring helps counselors track student development and intervene when needed."
        }
      ]
    },

    {
      id: 6,
      title: "Professional Practice & Ethics",
      content: `# Module 6: Professional Practice & Ethics

## Ethical Counseling Standards
Professional counselors adhere to ethical guidelines that protect students and maintain professional integrity. Understanding and applying these standards is essential for effective practice.

### Ethical Principles
Core ethical guidelines for educational counseling:
- **Beneficence**: Acting in students' best interests
- **Non-Maleficence**: Avoiding harm to students
- **Autonomy**: Respecting students' right to self-determination
- **Justice**: Treating all students fairly and equally
- **Fidelity**: Being trustworthy and keeping promises
- **Veracity**: Being honest and truthful in all communications
- **Confidentiality**: Protecting student privacy appropriately
- **Competence**: Maintaining professional skills and knowledge

### Confidentiality Management
Handling sensitive student information:
- What information must remain confidential
- Legal exceptions to confidentiality
- Parent communication guidelines
- Information sharing between professionals
- Record keeping and storage requirements
- Digital privacy considerations
- Breach prevention strategies
- Informed consent procedures

### Professional Boundaries
Maintaining appropriate counselor-student relationships:
- Relationship limits and expectations
- Dual relationship avoidance
- Gift and favor policies
- Social media guidelines
- Physical contact standards
- Communication outside sessions
- Personal disclosure appropriateness
- Termination procedures

### Legal Responsibilities
Understanding legal requirements:
- Mandatory reporting obligations
- Educational rights laws (FERPA)
- Disability accommodation laws
- Anti-discrimination regulations
- Child protection requirements
- Contract and agreement understanding
- Liability considerations
- Documentation requirements

### Professional Development
Continuous improvement practices:
- Ongoing education requirements
- Supervision and consultation
- Professional organization membership
- Current research engagement
- Peer collaboration and networking
- Self-assessment and reflection
- Skill development planning
- Ethical decision-making practice

### Crisis Response Protocols
Handling emergency situations:
- Suicide risk assessment and response
- Violence threat management
- Abuse and neglect reporting
- Mental health emergency procedures
- Academic integrity violations
- Family emergency protocols
- Institutional policy compliance
- Community resource coordination

**Key Takeaway**: Ethical practice protects both students and counselors. When in doubt, consult colleagues or supervisors before acting.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What means acting in students' best interests?",
          options: [
            "Beneficence",
            "Autonomy",
            "Justice",
            "Fidelity"
          ],
          correctAnswer: 0,
          explanation: "Beneficence requires counselors to act in ways that benefit their students."
        },
        {
          id: 2,
          question: "What protects student privacy?",
          options: [
            "Confidentiality",
            "Autonomy",
            "Justice",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality ensures student information remains private unless exceptions apply."
        },
        {
          id: 3,
          question: "What avoids harming students?",
          options: [
            "Non-maleficence",
            "Beneficence",
            "Fidelity",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Non-maleficence means avoiding actions that could harm students."
        },
        {
          id: 4,
          question: "What respects student self-determination?",
          options: [
            "Autonomy",
            "Justice",
            "Fidelity",
            "Competence"
          ],
          correctAnswer: 0,
          explanation: "Autonomy respects students' rights to make their own decisions about their education."
        },
        {
          id: 5,
          question: "What requires honest communication?",
          options: [
            "Veracity",
            "Beneficence",
            "Non-maleficence",
            "Justice"
          ],
          correctAnswer: 0,
          explanation: "Veracity means being truthful and honest in all professional communications."
        },
        {
          id: 6,
          question: "What are legal exceptions to confidentiality?",
          options: [
            "Mandatory reporting situations",
            "All parent requests",
            "Any teacher inquiry",
            "All administrative requests"
          ],
          correctAnswer: 0,
          explanation: "Certain situations like abuse reporting legally require breaking confidentiality."
        },
        {
          id: 7,
          question: "What means treating students equally?",
          options: [
            "Justice",
            "Autonomy",
            "Fidelity",
            "Competence"
          ],
          correctAnswer: 0,
          explanation: "Justice requires fair and equal treatment of all students regardless of background."
        },
        {
          id: 8,
          question: "What avoids dual relationships?",
          options: [
            "Professional boundaries",
            "Confidentiality only",
            "Autonomy respect",
            "Justice application"
          ],
          correctAnswer: 0,
          explanation: "Professional boundaries prevent counselors from having multiple roles with students."
        },
        {
          id: 9,
          question: "What means being trustworthy?",
          options: [
            "Fidelity",
            "Veracity",
            "Beneficence",
            "Non-maleficence"
          ],
          correctAnswer: 0,
          explanation: "Fidelity involves being reliable, trustworthy, and keeping commitments to students."
        },
        {
          id: 10,
          question: "What governs educational records?",
          options: [
            "FERPA regulations",
            "Social media policies",
            "School colors",
            "Sports schedules"
          ],
          correctAnswer: 0,
          explanation: "FERPA (Family Educational Rights and Privacy Act) protects student educational records."
        },
        {
          id: 11,
          question: "What maintains professional skills?",
          options: [
            "Competence",
            "Autonomy",
            "Justice",
            "Fidelity"
          ],
          correctAnswer: 0,
          explanation: "Competence requires maintaining up-to-date professional knowledge and skills."
        },
        {
          id: 12,
          question: "What guides parent communication?",
          options: [
            "Confidentiality policies",
            "Student preferences only",
            "Teacher requests",
            "Administrative convenience"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality policies determine what student information can be shared with parents."
        },
        {
          id: 13,
          question: "What prevents relationship conflicts?",
          options: [
            "Boundary maintenance",
            "Extra counseling sessions",
            "Personal friendships",
            "Social media connections"
          ],
          correctAnswer: 0,
          explanation: "Maintaining boundaries prevents conflicts of interest in counselor-student relationships."
        },
        {
          id: 14,
          question: "What requires ongoing education?",
          options: [
            "Professional development",
            "Only initial training",
            "Student requests",
            "Parent demands"
          ],
          correctAnswer: 0,
          explanation: "Professional development ensures counselors stay current with best practices."
        },
        {
          id: 15,
          question: "What assesses suicide risk?",
          options: [
            "Crisis response protocols",
            "Regular counseling",
            "Academic advising",
            "Career counseling"
          ],
          correctAnswer: 0,
          explanation: "Crisis protocols include procedures for assessing and responding to suicide risk."
        },
        {
          id: 16,
          question: "What involves peer consultation?",
          options: [
            "Ethical decision-making",
            "Only individual work",
            "Avoiding colleagues",
            "Student-led decisions"
          ],
          correctAnswer: 0,
          explanation: "Consulting with peers helps counselors make better ethical decisions."
        },
        {
          id: 17,
          question: "What prevents privacy breaches?",
          options: [
            "Secure record storage",
            "Public discussions",
            "Emailing all information",
            "Sharing with friends"
          ],
          correctAnswer: 0,
          explanation: "Secure storage and handling prevent unauthorized access to confidential information."
        },
        {
          id: 18,
          question: "What guides social media use?",
          options: [
            "Professional policies",
            "Personal preferences",
            "Student requests",
            "Trend following"
          ],
          correctAnswer: 0,
          explanation: "Professional policies establish appropriate social media boundaries with students."
        },
        {
          id: 19,
          question: "What requires abuse reporting?",
          options: [
            "Legal responsibilities",
            "Student permission",
            "Parent approval",
            "Administrative discretion"
          ],
          correctAnswer: 0,
          explanation: "Laws require professionals to report suspected abuse or neglect of minors."
        },
        {
          id: 20,
          question: "What should counselors do when uncertain?",
          options: [
            "Consult supervisors",
            "Guess randomly",
            "Ignore the situation",
            "Ask students to decide"
          ],
          correctAnswer: 0,
          explanation: "When ethical questions arise, counselors should consult supervisors or colleagues."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Comprehensive)
  finalExam: {
    id: "university-counseling-final-exam",
    title: "University Counseling Certificate Final Examination",
    description: "Comprehensive assessment covering all six modules. Complete this exam to earn your certificate.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        question: "What is the counselor's primary role with students?",
        options: [
          "Making decisions for students",
          "Supporting informed education decisions",
          "Teaching academic subjects",
          "Managing university admissions"
        ],
        correctAnswer: 1,
        explanation: "Counselors support students in making their own informed decisions about education paths.",
        module: 1
      },
      {
        id: 2,
        question: "Which principle maintains student privacy?",
        options: [
          "Active Listening",
          "Confidentiality",
          "Empathy Development",
          "Cultural Sensitivity"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality ensures student information remains private to build trust.",
        module: 1
      },
      {
        id: 3,
        question: "What type of institution offers two-year programs?",
        options: [
          "Public universities",
          "Technical institutes",
          "Community colleges",
          "Private colleges"
        ],
        correctAnswer: 2,
        explanation: "Community colleges specialize in two-year associate degree programs.",
        module: 1
      },
      {
        id: 4,
        question: "What helps identify student preferences?",
        options: [
          "Interest inventory questionnaires",
          "Academic transcripts only",
          "Parent interviews",
          "Test scores alone"
        ],
        correctAnswer: 0,
        explanation: "Interest inventories help identify student preferences for career and educational planning.",
        module: 1
      },
      {
        id: 5,
        question: "What does active listening require?",
        options: [
          "Frequent interruptions",
          "Full attention without interruption",
          "Taking notes only",
          "Offering immediate advice"
        ],
        correctAnswer: 1,
        explanation: "Active listening means giving complete attention without interrupting the speaker.",
        module: 1
      },
      {
        id: 6,
        question: "Who are first-generation college applicants?",
        options: [
          "International students",
          "Students whose parents didn't attend college",
          "Transfer students",
          "Graduate school applicants"
        ],
        correctAnswer: 1,
        explanation: "First-generation students are those whose parents did not complete a college degree.",
        module: 1
      },
      {
        id: 7,
        question: "What helps respect diverse backgrounds?",
        options: [
          "Cultural Sensitivity",
          "Professional Boundaries",
          "Active Listening",
          "Confidentiality"
        ],
        correctAnswer: 0,
        explanation: "Cultural sensitivity involves understanding and respecting different backgrounds and experiences.",
        module: 1
      },

      // Module 2 Questions (7)
      {
        id: 8,
        question: "What should be considered about campus environment?",
        options: [
          "Only academic programs",
          "Campus culture and student life",
          "Just tuition costs",
          "Only location"
        ],
        correctAnswer: 1,
        explanation: "Campus culture significantly impacts student happiness and success.",
        module: 2
      },
      {
        id: 9,
        question: "What indicates program quality?",
        options: [
          "Faculty qualifications",
          "Campus sports teams",
          "Dormitory colors",
          "Tuition cost only"
        ],
        correctAnswer: 0,
        explanation: "Faculty qualifications directly affect educational quality and outcomes.",
        module: 2
      },
      {
        id: 10,
        question: "What affects cost of living?",
        options: [
          "Geographic location",
          "University mascot",
          "Campus building age",
          "Student population"
        ],
        correctAnswer: 0,
        explanation: "Location determines housing costs, food prices, and general living expenses.",
        module: 2
      },
      {
        id: 11,
        question: "What helps evaluate career outcomes?",
        options: [
          "Graduation and employment rates",
          "Campus food quality",
          "Sports team rankings",
          "Dormitory room sizes"
        ],
        correctAnswer: 0,
        explanation: "Graduation and employment rates show institutional effectiveness.",
        module: 2
      },
      {
        id: 12,
        question: "What indicates industry connections?",
        options: [
          "Internship availability",
          "Library book count",
          "Student organization numbers",
          "Campus square footage"
        ],
        correctAnswer: 0,
        explanation: "Internship programs often indicate strong industry partnerships.",
        module: 2
      },
      {
        id: 13,
        question: "What shows institutional support?",
        options: [
          "Tutoring center availability",
          "Campus parking spaces",
          "Football stadium size",
          "Cafeteria menu variety"
        ],
        correctAnswer: 0,
        explanation: "Tutoring centers demonstrate commitment to academic support.",
        module: 2
      },
      {
        id: 14,
        question: "What indicates program recognition?",
        options: [
          "Accreditation status",
          "Campus age",
          "Student population",
          "Tuition price"
        ],
        correctAnswer: 0,
        explanation: "Accreditation shows the program meets recognized quality standards.",
        module: 2
      },

      // Module 3 Questions (7)
      {
        id: 15,
        question: "What showcases student personality in applications?",
        options: [
          "Essays and personal statements",
          "Application fees",
          "Transcript copies",
          "Test registration numbers"
        ],
        correctAnswer: 0,
        explanation: "Essays allow students to share personality, experiences, and perspectives.",
        module: 3
      },
      {
        id: 16,
        question: "When should university research typically begin?",
        options: [
          "6-12 months before deadlines",
          "1 week before deadlines",
          "After acceptance",
          "During senior year only"
        ],
        correctAnswer: 0,
        explanation: "Starting research early allows thorough exploration of options.",
        module: 3
      },
      {
        id: 17,
        question: "What demonstrates extracurricular involvement?",
        options: [
          "Activities and achievements lists",
          "Application fee payments",
          "Personal information forms",
          "Test score reports"
        ],
        correctAnswer: 0,
        explanation: "Activities lists show interests and commitments outside academics.",
        module: 3
      },
      {
        id: 18,
        question: "When should recommendation letters be requested?",
        options: [
          "2-4 months before deadlines",
          "The day before deadlines",
          "After acceptance",
          "Never request them"
        ],
        correctAnswer: 0,
        explanation: "Requesting early gives recommenders ample time to write thoughtful letters.",
        module: 3
      },
      {
        id: 19,
        question: "What ensures essay quality?",
        options: [
          "Multiple editing reviews",
          "Writing in one draft only",
          "Using complex sentences always",
          "Making it as long as possible"
        ],
        correctAnswer: 0,
        explanation: "Multiple edits improve clarity, grammar, and overall impact.",
        module: 3
      },
      {
        id: 20,
        question: "What tracks application submission?",
        options: [
          "Submission receipts",
          "Essay rough drafts",
          "Brainstorming notes",
          "Recommender contact lists"
        ],
        correctAnswer: 0,
        explanation: "Submission receipts confirm applications were received.",
        module: 3
      },
      {
        id: 21,
        question: "What prevents application errors?",
        options: [
          "Organization and attention to detail",
          "Rushing through quickly",
          "Working alone always",
          "Ignoring instructions"
        ],
        correctAnswer: 0,
        explanation: "Careful organization minimizes mistakes in applications.",
        module: 3
      },

      // Module 4 Questions (7)
      {
        id: 22,
        question: "What type of aid doesn't require repayment?",
        options: [
          "Grants and scholarships",
          "Loans",
          "Work-study earnings",
          "Private loans"
        ],
        correctAnswer: 0,
        explanation: "Grants and scholarships are gift aid that doesn't require repayment.",
        module: 4
      },
      {
        id: 23,
        question: "What is FAFSA used for?",
        options: [
          "Federal financial aid application",
          "College admission application",
          "Scholarship essay writing",
          "Loan repayment only"
        ],
        correctAnswer: 0,
        explanation: "FAFSA is required for federal student financial assistance.",
        module: 4
      },
      {
        id: 24,
        question: "What are merit-based awards?",
        options: [
          "Scholarships",
          "Grants",
          "Loans",
          "Work-study"
        ],
        correctAnswer: 0,
        explanation: "Scholarships are typically awarded based on merit or specific criteria.",
        module: 4
      },
      {
        id: 25,
        question: "What provides campus employment opportunities?",
        options: [
          "Work-study programs",
          "Scholarships",
          "Grants",
          "Private loans"
        ],
        correctAnswer: 0,
        explanation: "Work-study offers part-time jobs to help students earn education funds.",
        module: 4
      },
      {
        id: 26,
        question: "What are institutional awards?",
        options: [
          "University-provided scholarships",
          "Federal grants",
          "Private loans",
          "Work-study jobs"
        ],
        correctAnswer: 0,
        explanation: "Institutional scholarships come directly from colleges or universities.",
        module: 4
      },
      {
        id: 27,
        question: "What involves talent recognition?",
        options: [
          "Arts or athletics scholarships",
          "Need-based grants",
          "Federal loans",
          "Work-study"
        ],
        correctAnswer: 0,
        explanation: "Talent-based scholarships recognize abilities in specific areas.",
        module: 4
      },
      {
        id: 28,
        question: "What prevents loan default?",
        options: [
          "Responsible borrowing education",
          "Ignoring loan statements",
          "Borrowing maximum amounts",
          "Missing payments regularly"
        ],
        correctAnswer: 0,
        explanation: "Understanding loan terms helps prevent default situations.",
        module: 4
      },

      // Module 5 Questions (6)
      {
        id: 29,
        question: "What helps with scheduling and prioritization?",
        options: [
          "Time management techniques",
          "Only attending classes",
          "Avoiding all planning",
          "Following others' schedules"
        ],
        correctAnswer: 0,
        explanation: "Time management helps students organize schedules and prioritize effectively.",
        module: 5
      },
      {
        id: 30,
        question: "What supports learning retention?",
        options: [
          "Effective study skills",
          "Cramming only",
          "Skipping classes",
          "Avoiding textbooks"
        ],
        correctAnswer: 0,
        explanation: "Proper study skills improve information retention and performance.",
        module: 5
      },
      {
        id: 31,
        question: "What investigates future professions?",
        options: [
          "Career exploration activities",
          "Only taking required courses",
          "Avoiding career thoughts",
          "Following parental choices"
        ],
        correctAnswer: 0,
        explanation: "Career exploration helps students understand different professions.",
        module: 5
      },
      {
        id: 32,
        question: "What gains relevant work experience?",
        options: [
          "Internship participation",
          "Only classroom learning",
          "Avoiding all work",
          "Parent connections only"
        ],
        correctAnswer: 0,
        explanation: "Internships provide valuable work experience related to academic fields.",
        module: 5
      },
      {
        id: 33,
        question: "What documents skills and achievements?",
        options: [
          "Resume development",
          "Keeping secrets",
          "Forgetting accomplishments",
          "Only verbal sharing"
        ],
        correctAnswer: 0,
        explanation: "Resumes document skills, experiences, and achievements.",
        module: 5
      },
      {
        id: 34,
        question: "What seeks needed assistance appropriately?",
        options: [
          "Self-advocacy skills",
          "Silent suffering",
          "Avoiding all help",
          "Expecting mind reading"
        ],
        correctAnswer: 0,
        explanation: "Self-advocacy teaches students to seek needed support appropriately.",
        module: 5
      },

      // Module 6 Questions (6)
      {
        id: 35,
        question: "What means acting in students' best interests?",
        options: [
          "Beneficence",
          "Autonomy",
          "Justice",
          "Fidelity"
        ],
        correctAnswer: 0,
        explanation: "Beneficence requires acting in ways that benefit students.",
        module: 6
      },
      {
        id: 36,
        question: "What protects student privacy?",
        options: [
          "Confidentiality",
          "Autonomy",
          "Justice",
          "Veracity"
        ],
        correctAnswer: 0,
        explanation: "Confidentiality ensures student information remains private.",
        module: 6
      },
      {
        id: 37,
        question: "What respects student self-determination?",
        options: [
          "Autonomy",
          "Justice",
          "Fidelity",
          "Competence"
        ],
        correctAnswer: 0,
        explanation: "Autonomy respects students' rights to make their own decisions.",
        module: 6
      },
      {
        id: 38,
        question: "What avoids dual relationships?",
        options: [
          "Professional boundaries",
          "Confidentiality only",
          "Autonomy respect",
          "Justice application"
        ],
        correctAnswer: 0,
        explanation: "Professional boundaries prevent multiple roles with students.",
        module: 6
      },
      {
        id: 39,
        question: "What governs educational records privacy?",
        options: [
          "FERPA regulations",
          "Social media policies",
          "School traditions",
          "Sports schedules"
        ],
        correctAnswer: 0,
        explanation: "FERPA protects student educational records privacy.",
        module: 6
      },
      {
        id: 40,
        question: "What should counselors do with ethical uncertainties?",
        options: [
          "Consult supervisors",
          "Guess randomly",
          "Ignore the situation",
          "Ask students to decide"
        ],
        correctAnswer: 0,
        explanation: "Consulting supervisors helps resolve ethical questions appropriately.",
        module: 6
      }
    ]
  }
};

export default universityCounselingCertificate;
