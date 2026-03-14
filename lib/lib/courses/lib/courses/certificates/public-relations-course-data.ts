export const publicRelationsCertificate = {
  // COURSE METADATA
  id: "public-relations-certificate",
  title: "Public Relations (Certificate)",
  description: "Learn essential public relations skills including media relations, crisis communication, stakeholder engagement, and brand reputation management. Build practical skills for creating effective PR campaigns and managing organizational communication.",
  duration: "6 weeks",
  timeCommitment: "5-7 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📢",
  badge: "Certificate",
  prerequisites: [],

  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Foundations of Public Relations",
      completed: false,
      content: `
# Foundations of Public Relations

## Introduction to Public Relations
Welcome to the world of public relations! This module introduces the core concepts and purpose of PR in today's communication landscape. You'll learn what PR really is and how it differs from related fields.

### What Public Relations Is
- **Relationship building**: Creating and maintaining positive relationships with publics
- **Reputation management**: Shaping how organizations are perceived
- **Strategic communication**: Planned, deliberate communication efforts
- **Mutual understanding**: Creating understanding between organizations and their publics

### PR vs Related Fields
- **Marketing**: PR builds relationships, marketing sells products
- **Advertising**: PR earns media coverage, advertising pays for space
- **Journalism**: PR represents organizations, journalism reports news objectively
- **Social media management**: PR includes social media but is broader in scope

### Key PR Principles
- **Two-way communication**: Listening as much as speaking
- **Transparency**: Being open and honest in communications
- **Consistency**: Maintaining unified messaging across channels
- **Ethical practice**: Following professional codes of conduct

### Types of Public Relations
- **Media relations**: Working with journalists and media outlets
- **Community relations**: Building relationships with local communities
- **Employee relations**: Communicating with internal staff
- **Government relations**: Interacting with political entities

### The PR Process
1. **Research**: Understanding situation and audiences
2. **Planning**: Developing strategy and objectives
3. **Implementation**: Executing communication activities
4. **Evaluation**: Measuring results and making improvements

### Ethics in PR
- **Truthfulness**: Never lying or deceiving the public
- **Disclosure**: Revealing who you represent
- **Confidentiality**: Protecting sensitive information
- **Conflict avoidance**: Managing competing interests ethically
`,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of public relations?",
          options: [
            "Building relationships and managing reputation",
            "Only selling products and services",
            "Creating advertisements for TV",
            "Reporting news objectively"
          ],
          correctAnswer: 0,
          explanation: "PR focuses on building relationships and managing how organizations are perceived."
        },
        {
          id: 2,
          question: "How does PR differ from advertising?",
          options: [
            "PR earns coverage, advertising pays for space",
            "PR is always free, advertising costs money",
            "PR is only digital, advertising is traditional",
            "PR is unethical, advertising is ethical"
          ],
          correctAnswer: 0,
          explanation: "PR works to earn media coverage through relationships, while advertising pays for placement."
        },
        {
          id: 3,
          question: "What does two-way communication mean in PR?",
          options: [
            "Listening as much as speaking",
            "Communicating in two languages",
            "Using two media channels",
            "Having two spokespeople"
          ],
          correctAnswer: 0,
          explanation: "Two-way communication involves both sending messages and listening to feedback."
        },
        {
          id: 4,
          question: "What is media relations?",
          options: [
            "Working with journalists and media outlets",
            "Only managing social media",
            "Creating TV commercials",
            "Writing newspaper articles as a reporter"
          ],
          correctAnswer: 0,
          explanation: "Media relations involves building relationships with journalists and securing media coverage."
        },
        {
          id: 5,
          question: "What is the first step in the PR process?",
          options: [
            "Research and understanding",
            "Writing press releases",
            "Planning events",
            "Measuring results"
          ],
          correctAnswer: 0,
          explanation: "Research comes first to understand the situation, audiences, and context."
        },
        {
          id: 6,
          question: "What does transparency mean in PR?",
          options: [
            "Being open and honest in communications",
            "Using clear language only",
            "Making everything public",
            "Ignoring confidential information"
          ],
          correctAnswer: 0,
          explanation: "Transparency means being truthful and not hiding important information."
        },
        {
          id: 7,
          question: "What is community relations?",
          options: [
            "Building relationships with local communities",
            "Only online community management",
            "Family relationship counseling",
            "International diplomacy"
          ],
          correctAnswer: 0,
          explanation: "Community relations focuses on an organization's relationship with its local community."
        },
        {
          id: 8,
          question: "Why is consistency important in PR?",
          options: [
            "It maintains unified messaging",
            "It makes communication boring",
            "It prevents any changes",
            "It's only important for large organizations"
          ],
          correctAnswer: 0,
          explanation: "Consistent messaging builds trust and prevents confusion."
        },
        {
          id: 9,
          question: "What are employee relations?",
          options: [
            "Communicating with internal staff",
            "Only HR department work",
            "Personal employee friendships",
            "Union negotiation only"
          ],
          correctAnswer: 0,
          explanation: "Employee relations involves communicating with and engaging an organization's staff."
        },
        {
          id: 10,
          question: "What does ethical PR practice require?",
          options: [
            "Following professional codes of conduct",
            "Doing whatever clients want",
            "Only telling positive stories",
            "Ignoring negative feedback"
          ],
          correctAnswer: 0,
          explanation: "Ethical PR follows established professional standards and principles."
        },
        {
          id: 11,
          question: "What is strategic communication?",
          options: [
            "Planned, deliberate communication efforts",
            "Random communication activities",
            "Only crisis communication",
            "Social media posting only"
          ],
          correctAnswer: 0,
          explanation: "Strategic communication is intentional and planned to achieve specific objectives."
        },
        {
          id: 12,
          question: "What is reputation management?",
          options: [
            "Shaping how organizations are perceived",
            "Only handling bad news",
            "Creating false images",
            "Ignoring public opinion"
          ],
          correctAnswer: 0,
          explanation: "Reputation management involves influencing how people view an organization."
        },
        {
          id: 13,
          question: "What is government relations?",
          options: [
            "Interacting with political entities",
            "Only national government work",
            "Political campaigning",
            "International treaty negotiations"
          ],
          correctAnswer: 0,
          explanation: "Government relations involves communicating with government officials and agencies."
        },
        {
          id: 14,
          question: "Why is evaluation important in PR?",
          options: [
            "It measures results and guides improvements",
            "It proves PR is working",
            "It's only for annual reports",
            "It replaces planning"
          ],
          correctAnswer: 0,
          explanation: "Evaluation assesses effectiveness and informs future strategies."
        },
        {
          id: 15,
          question: "What does mutual understanding mean?",
          options: [
            "Creating understanding between organizations and publics",
            "Only agreeing with everyone",
            "Forcing others to understand",
            "Ignoring differences"
          ],
          correctAnswer: 0,
          explanation: "Mutual understanding involves both parties comprehending each other's perspectives."
        },
        {
          id: 16,
          question: "What is truthfulness in PR ethics?",
          options: [
            "Never lying or deceiving the public",
            "Telling partial truths only",
            "Only when caught",
            "What clients define as truth"
          ],
          correctAnswer: 0,
          explanation: "Truthfulness means being honest and not misleading the public."
        },
        {
          id: 17,
          question: "What is disclosure in PR ethics?",
          options: [
            "Revealing who you represent",
            "Sharing all information",
            "Only when required by law",
            "Never revealing sources"
          ],
          correctAnswer: 0,
          explanation: "Disclosure means being transparent about who you're representing."
        },
        {
          id: 18,
          question: "What is confidentiality in PR?",
          options: [
            "Protecting sensitive information",
            "Keeping all information secret",
            "Never speaking to media",
            "Hiding bad news"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality involves protecting information that shouldn't be publicly shared."
        },
        {
          id: 19,
          question: "How does PR differ from journalism?",
          options: [
            "PR represents organizations, journalism reports objectively",
            "PR is always biased, journalism is always fair",
            "PR writes news, journalism creates ads",
            "PR is free, journalism costs money"
          ],
          correctAnswer: 0,
          explanation: "PR advocates for organizations while journalism aims for objective reporting."
        },
        {
          id: 20,
          question: "What is the planning step in PR?",
          options: [
            "Developing strategy and objectives",
            "Only budgeting for activities",
            "Random idea generation",
            "Implementing tactics immediately"
          ],
          correctAnswer: 0,
          explanation: "Planning involves creating a strategic approach to achieve communication goals."
        }
      ]
    },
    {
      id: 2,
      title: "Media Relations and Press Materials",
      completed: false,
      content: `
# Media Relations and Press Materials

## Working with the Media
This module covers how to build relationships with journalists and create effective press materials that get attention and coverage.

### Building Media Relationships
- **Research journalists**: Know who covers your industry
- **Personalized pitches**: Tailor communications to each journalist
- **Timeliness**: Respect journalists' deadlines and schedules
- **Helpfulness**: Provide value beyond just your own needs

### Effective Press Releases
- **Newsworthiness**: Why your story matters to readers
- **Clear structure**: Inverted pyramid style (most important first)
- **Quotable content**: Including compelling quotes
- **Contact information**: Easy ways for journalists to reach you

### Press Release Structure
1. **Headline**: Clear, attention-grabbing title
2. **Dateline**: Date and location
3. **Lead paragraph**: Who, what, when, where, why
4. **Body**: Supporting details and quotes
5. **Boilerplate**: About the organization
6. **Contact details**: Media contact information

### Media Kits and Backgrounders
- **Fact sheets**: Quick reference information
- **Backgrounders**: Detailed context and history
- **Biographies**: Information about key people
- **High-quality visuals**: Photos, logos, graphics

### Pitching to Media
- **Email pitches**: Concise, compelling messages
- **Phone pitches**: Brief, respectful conversations
- **Story angles**: What makes your story interesting
- **Follow-up**: Appropriate timing and persistence

### Media Interviews
- **Preparation**: Key messages and anticipated questions
- **Spokesperson training**: Effective communication skills
- **Bridging techniques**: Moving to your key messages
- **Follow-up**: Providing additional information if needed

### Working with Different Media
- **Print journalists**: Newspapers and magazines
- **Broadcast media**: TV and radio
- **Online media**: Websites and digital publications
- **Bloggers and influencers**: Social media content creators
`,
      quiz: [
        {
          id: 1,
          question: "What should you research about journalists?",
          options: [
            "Who covers your industry",
            "Their personal life details",
            "Only their email addresses",
            "What they had for breakfast"
          ],
          correctAnswer: 0,
          explanation: "Knowing which journalists cover your topic helps you pitch relevant stories."
        },
        {
          id: 2,
          question: "What makes a story newsworthy?",
          options: [
            "Why it matters to readers",
            "Only if it's about your company",
            "If it's long and detailed",
            "If it uses complex language"
          ],
          correctAnswer: 0,
          explanation: "Newsworthiness means the story has importance or interest to the audience."
        },
        {
          id: 3,
          question: "What is the inverted pyramid style?",
          options: [
            "Most important information first",
            "Starting with background information",
            "Ending with the main point",
            "Equal importance to all details"
          ],
          correctAnswer: 0,
          explanation: "Inverted pyramid puts crucial information at the beginning."
        },
        {
          id: 4,
          question: "What should a headline do?",
          options: [
            "Grab attention clearly",
            "Be as long as possible",
            "Use technical jargon",
            "Hide the main point"
          ],
          correctAnswer: 0,
          explanation: "Headlines should immediately capture interest and indicate the topic."
        },
        {
          id: 5,
          question: "What are personalized pitches?",
          options: [
            "Tailored to each journalist",
            "Same email to everyone",
            "Mass distribution emails",
            "Generic template messages"
          ],
          correctAnswer: 0,
          explanation: "Personalized pitches show you understand the journalist's interests."
        },
        {
          id: 6,
          question: "What is a dateline?",
          options: [
            "Date and location of news",
            "Journalist's deadline",
            "Email sent date",
            "Meeting time only"
          ],
          correctAnswer: 0,
          explanation: "The dateline shows when and where the news is happening."
        },
        {
          id: 7,
          question: "What are quotable quotes?",
          options: [
            "Compelling statements from sources",
            "Long technical explanations",
            "Boring factual statements",
            "Quotes from competitors"
          ],
          correctAnswer: 0,
          explanation: "Quotable quotes are interesting statements journalists might use."
        },
        {
          id: 8,
          question: "Why include contact information?",
          options: [
            "So journalists can reach you easily",
            "To show you have many contacts",
            "For legal requirements only",
            "To fill space in the release"
          ],
          correctAnswer: 0,
          explanation: "Contact information enables journalists to get more information."
        },
        {
          id: 9,
          question: "What are fact sheets?",
          options: [
            "Quick reference information",
            "Long detailed reports",
            "Financial statements only",
            "Employee personal files"
          ],
          correctAnswer: 0,
          explanation: "Fact sheets provide key information in an easy-to-read format."
        },
        {
          id: 10,
          question: "What does timeliness mean with journalists?",
          options: [
            "Respecting their deadlines",
            "Sending pitches at midnight",
            "Always being in a hurry",
            "Only morning communications"
          ],
          correctAnswer: 0,
          explanation: "Timeliness means being aware of and respectful toward journalists' schedules."
        },
        {
          id: 11,
          question: "What is a boilerplate?",
          options: [
            "Standard about the organization section",
            "Technical equipment description",
            "Legal disclaimer only",
            "Employee list"
          ],
          correctAnswer: 0,
          explanation: "The boilerplate provides standard background about the organization."
        },
        {
          id: 12,
          question: "What should email pitches be?",
          options: [
            "Concise and compelling",
            "Long and detailed",
            "Vague and mysterious",
            "Funny and entertaining only"
          ],
          correctAnswer: 0,
          explanation: "Email pitches should be brief but interesting enough to get attention."
        },
        {
          id: 13,
          question: "What are backgrounders?",
          options: [
            "Detailed context and history",
            "Employee background checks",
            "Office location maps",
            "Competitor information"
          ],
          correctAnswer: 0,
          explanation: "Backgrounders provide deeper information for journalists who want more detail."
        },
        {
          id: 14,
          question: "What is spokesperson training?",
          options: [
            "Effective communication skills preparation",
            "Learning to avoid questions",
            "Only media appearance training",
            "Legal defense preparation"
          ],
          correctAnswer: 0,
          explanation: "Spokesperson training prepares people to communicate effectively with media."
        },
        {
          id: 15,
          question: "What is the lead paragraph?",
          options: [
            "Who, what, when, where, why",
            "Only the organization name",
            "Background information first",
            "Contact details summary"
          ],
          correctAnswer: 0,
          explanation: "The lead paragraph summarizes the most important information."
        },
        {
          id: 16,
          question: "What are bridging techniques?",
          options: [
            "Moving to your key messages",
            "Building physical bridges",
            "Changing subjects completely",
            "Avoiding all questions"
          ],
          correctAnswer: 0,
          explanation: "Bridging helps redirect to your main points during interviews."
        },
        {
          id: 17,
          question: "What are high-quality visuals?",
          options: [
            "Photos, logos, graphics",
            "Only professional photos",
            "Expensive video productions",
            "Complex infographics only"
          ],
          correctAnswer: 0,
          explanation: "Visuals help tell your story and make it more appealing."
        },
        {
          id: 18,
          question: "How should follow-up be done?",
          options: [
            "With appropriate timing",
            "Immediately after sending",
            "Every hour until response",
            "Never following up"
          ],
          correctAnswer: 0,
          explanation: "Follow-up should be timely but not excessive or annoying."
        },
        {
          id: 19,
          question: "What are story angles?",
          options: [
            "What makes your story interesting",
            "Physical angles for photos",
            "Journalists' viewpoints",
            "Competitors' perspectives"
          ],
          correctAnswer: 0,
          explanation: "Story angles are the interesting aspects that make news worth covering."
        },
        {
          id: 20,
          question: "Why be helpful to journalists?",
          options: [
            "Provide value beyond your own needs",
            "They might return favors",
            "It's required by law",
            "To control their reporting"
          ],
          correctAnswer: 0,
          explanation: "Being helpful builds better long-term relationships with journalists."
        }
      ]
    },
    {
      id: 3,
      title: "Crisis Communication Management",
      completed: false,
      content: `
# Crisis Communication Management

## Preparing for and Managing Crises
This module covers how to handle communication during difficult situations when an organization's reputation is at risk.

### Understanding Crises
- **Types of crises**: Operational, financial, personnel, reputational
- **Crisis stages**: Warning, acute, chronic, resolution
- **Stakeholder impact**: Who is affected and how
- **Speed of response**: Importance of timely communication

### Crisis Planning
- **Crisis team**: Designated people with clear roles
- **Contact lists**: Key stakeholders and media contacts
- **Message templates**: Prepared statements for various scenarios
- **Spokesperson designation**: Who will speak publicly

### Initial Response Principles
- **Acknowledge quickly**: Show you're aware of the situation
- **Express concern**: Demonstrate empathy for those affected
- **Provide facts**: Share what you know is true
- **Promise updates**: Commit to ongoing communication

### Crisis Communication Strategies
- **One voice**: Consistent messaging across channels
- **Transparency**: Being open about what you know
- **Accuracy**: Double-checking all information before sharing
- **Accessibility**: Making information easy to find

### Media Relations During Crisis
- **Regular updates**: Keeping media informed consistently
- **Press conferences**: Organized briefings for multiple media
- **Q&A preparation**: Anticipating difficult questions
- **Monitoring coverage**: Tracking what's being reported

### Internal Communication
- **Employee updates**: Keeping staff informed first
- **Talking points**: Consistent messaging for all employees
- **Internal channels**: Company email, meetings, intranet
- **Leadership visibility**: Leaders showing they're in charge

### Recovery Communication
- **Lessons learned**: Sharing what will change
- **Rebuilding trust**: Actions to restore confidence
- **Positive stories**: Highlighting recovery efforts
- **Long-term monitoring**: Watching for ongoing issues

### Social Media Crisis Management
- **Monitoring mentions**: Tracking what's being said online
- **Rapid response**: Addressing misinformation quickly
- **Designated responders**: Trained social media team
- **Platform appropriateness**: Using right channels for message
`,
      quiz: [
        {
          id: 1,
          question: "What are types of organizational crises?",
          options: [
            "Operational, financial, personnel, reputational",
            "Only natural disasters",
            "Small and large crises",
            "Media-created and real crises"
          ],
          correctAnswer: 0,
          explanation: "Crises can involve operations, finances, personnel issues, or reputation damage."
        },
        {
          id: 2,
          question: "What is the first crisis response principle?",
          options: [
            "Acknowledge quickly",
            "Wait for all facts",
            "Blame others first",
            "Ignore minor crises"
          ],
          correctAnswer: 0,
          explanation: "Quick acknowledgement shows you're aware and addressing the situation."
        },
        {
          id: 3,
          question: "What does 'one voice' mean in crisis communication?",
          options: [
            "Consistent messaging across channels",
            "Only one person speaks",
            "Using one communication channel",
            "Speaking at same volume"
          ],
          correctAnswer: 0,
          explanation: "'One voice' means everyone shares the same key messages."
        },
        {
          id: 4,
          question: "Why is a crisis team important?",
          options: [
            "Designated people with clear roles",
            "Only leadership handles crises",
            "Everyone responds individually",
            "External consultants only"
          ],
          correctAnswer: 0,
          explanation: "A crisis team ensures organized, coordinated response efforts."
        },
        {
          id: 5,
          question: "What should initial response include?",
          options: [
            "Expression of concern for affected",
            "Detailed technical explanations",
            "Blame assignment",
            "Future plans only"
          ],
          correctAnswer: 0,
          explanation: "Expressing concern shows empathy and human connection."
        },
        {
          id: 6,
          question: "What are crisis stages?",
          options: [
            "Warning, acute, chronic, resolution",
            "Only beginning and end",
            "Random unpredictable stages",
            "Media, public, internal stages"
          ],
          correctAnswer: 0,
          explanation: "Crises typically progress through identifiable stages."
        },
        {
          id: 7,
          question: "Why provide regular updates?",
          options: [
            "Keeping media informed consistently",
            "Filling silence with noise",
            "Repeating same information",
            "Controlling all narratives"
          ],
          correctAnswer: 0,
          explanation: "Regular updates prevent information vacuum and speculation."
        },
        {
          id: 8,
          question: "What are message templates?",
          options: [
            "Prepared statements for various scenarios",
            "Exact scripts to read",
            "Only legal statements",
            "Social media posts only"
          ],
          correctAnswer: 0,
          explanation: "Templates provide starting points that can be adapted quickly."
        },
        {
          id: 9,
          question: "What does transparency mean in crisis?",
          options: [
            "Being open about what you know",
            "Revealing everything immediately",
            "Only positive information",
            "What lawyers allow"
          ],
          correctAnswer: 0,
          explanation: "Transparency means sharing appropriate information honestly."
        },
        {
          id: 10,
          question: "Why keep employees informed first?",
          options: [
            "They shouldn't hear news from media",
            "They will leak information",
            "They don't matter externally",
            "It's easier than media"
          ],
          correctAnswer: 0,
          explanation: "Employees should hear important news from their organization first."
        },
        {
          id: 11,
          question: "What is spokesperson designation?",
          options: [
            "Who will speak publicly",
            "Training all employees",
            "Hiring external speakers",
            "Using automated messages"
          ],
          correctAnswer: 0,
          explanation: "Designated spokespeople ensure consistent, authorized communication."
        },
        {
          id: 12,
          question: "What should you promise in initial response?",
          options: [
            "Ongoing updates and communication",
            "Immediate solutions",
            "Perfect outcomes",
            "No further problems"
          ],
          correctAnswer: 0,
          explanation: "Promising updates shows commitment to keeping people informed."
        },
        {
          id: 13,
          question: "What are contact lists for?",
          options: [
            "Key stakeholders and media contacts",
            "Employee personal numbers",
            "Competitor information",
            "Social media followers"
          ],
          correctAnswer: 0,
          explanation: "Contact lists ensure you can reach important people quickly."
        },
        {
          id: 14,
          question: "Why is accuracy important?",
          options: [
            "Wrong information damages credibility",
            "It's legally required",
            "Journalists prefer it",
            "It's easier than being fast"
          ],
          correctAnswer: 0,
          explanation: "Accuracy maintains credibility; corrections damage trust."
        },
        {
          id: 15,
          question: "What is recovery communication?",
          options: [
            "Rebuilding after crisis resolution",
            "Only saying crisis is over",
            "Forgetting the crisis happened",
            "Blaming others completely"
          ],
          correctAnswer: 0,
          explanation: "Recovery communication focuses on rebuilding trust and moving forward."
        },
        {
          id: 16,
          question: "What does leadership visibility show?",
          options: [
            "Leaders are in charge and responsible",
            "Leaders are hiding",
            "Only PR handles crises",
            "Leadership doesn't care"
          ],
          correctAnswer: 0,
          explanation: "Visible leadership demonstrates accountability and concern."
        },
        {
          id: 17,
          question: "Why monitor social media during crisis?",
          options: [
            "Tracking what's being said online",
            "Finding new customers",
            "Normal marketing activities",
            "Ignoring criticism"
          ],
          correctAnswer: 0,
          explanation: "Monitoring helps identify issues and respond to misinformation."
        },
        {
          id: 18,
          question: "What are talking points for employees?",
          options: [
            "Consistent messaging for all staff",
            "Secret information",
            "Only for managers",
            "Legal documents"
          ],
          correctAnswer: 0,
          explanation: "Talking points help employees communicate consistently if asked."
        },
        {
          id: 19,
          question: "What does 'speed of response' mean?",
          options: [
            "Importance of timely communication",
            "Speaking quickly in interviews",
            "Fast typing of releases",
            "Immediate perfect answers"
          ],
          correctAnswer: 0,
          explanation: "Timely response prevents others from controlling the narrative."
        },
        {
          id: 20,
          question: "What are lessons learned in recovery?",
          options: [
            "Sharing what will change",
            "Listing who made mistakes",
            "Technical failure reports",
            "Only positive changes"
          ],
          correctAnswer: 0,
          explanation: "Sharing lessons demonstrates learning and commitment to improvement."
        }
      ]
    },
    {
      id: 4,
      title: "Stakeholder Engagement and Community Relations",
      completed: false,
      content: `
# Stakeholder Engagement and Community Relations

## Building Relationships with Key Groups
This module covers how to identify, understand, and engage with the various groups that have interest in or are affected by an organization.

### Identifying Stakeholders
- **Primary stakeholders**: Directly affected by organization (employees, customers)
- **Secondary stakeholders**: Indirectly affected (media, community groups)
- **Internal stakeholders**: Within the organization
- **External stakeholders**: Outside the organization

### Stakeholder Analysis
- **Power and influence**: Who can affect the organization
- **Interest level**: How much they care about issues
- **Needs assessment**: What each group wants or needs
- **Communication preferences**: How they prefer to receive information

### Community Relations Strategies
- **Community needs assessment**: Understanding local concerns
- **Partnership building**: Working with community organizations
- **Volunteer programs**: Employee community involvement
- **Local economic support**: Supporting community businesses

### Employee Communication
- **Internal newsletters**: Regular updates for staff
- **Town hall meetings**: Open forums with leadership
- **Intranet platforms**: Digital internal communication
- **Recognition programs**: Celebrating employee achievements

### Customer Relations
- **Feedback channels**: Ways customers can share opinions
- **Loyalty programs**: Rewarding repeat customers
- **Issue resolution**: Addressing complaints effectively
- **Customer education**: Helping customers use products/services

### Investor Relations Basics
- **Financial reporting**: Sharing performance information
- **Annual meetings**: Gathering with shareholders
- **Investor communications**: Updates for financial stakeholders
- **Transparency**: Openness about financial matters

### Government and Regulatory Relations
- **Compliance communication**: Following rules and regulations
- **Policy advocacy**: Supporting favorable policies
- **Relationship building**: With government officials
- **Public affairs**: Managing political relationships

### Building Trust with Stakeholders
- **Consistency**: Reliable communication and actions
- **Responsiveness**: Answering questions and concerns
- **Accountability**: Taking responsibility for actions
- **Long-term thinking**: Building relationships over time
`,
      quiz: [
        {
          id: 1,
          question: "Who are primary stakeholders?",
          options: [
            "Directly affected by organization",
            "Only shareholders",
            "Government agencies",
            "General public only"
          ],
          correctAnswer: 0,
          explanation: "Primary stakeholders are directly impacted by organizational decisions."
        },
        {
          id: 2,
          question: "What is stakeholder analysis?",
          options: [
            "Understanding power, interest, and needs",
            "Only listing names",
            "Financial analysis only",
            "Social media following"
          ],
          correctAnswer: 0,
          explanation: "Analysis helps understand stakeholders' influence and concerns."
        },
        {
          id: 3,
          question: "What are community relations strategies?",
          options: [
            "Building relationships with local community",
            "Only charity donations",
            "Marketing to community",
            "Ignoring community concerns"
          ],
          correctAnswer: 0,
          explanation: "Community relations involves mutually beneficial local relationships."
        },
        {
          id: 4,
          question: "What is a community needs assessment?",
          options: [
            "Understanding local concerns and needs",
            "Market research for sales",
            "Government requirement only",
            "Employee satisfaction survey"
          ],
          correctAnswer: 0,
          explanation: "Needs assessment identifies what matters to the local community."
        },
        {
          id: 5,
          question: "Who are internal stakeholders?",
          options: [
            "People within the organization",
            "Only company owners",
            "External partners",
            "Government regulators"
          ],
          correctAnswer: 0,
          explanation: "Internal stakeholders include employees, managers, and owners."
        },
        {
          id: 6,
          question: "What are employee communication methods?",
          options: [
            "Newsletters, meetings, intranet",
            "Only pay slips",
            "Social media only",
            "Public announcements"
          ],
          correctAnswer: 0,
          explanation: "Multiple channels ensure employees receive important information."
        },
        {
          id: 7,
          question: "What is partnership building?",
          options: [
            "Working with community organizations",
            "Only business partnerships",
            "Mergers and acquisitions",
            "Competitor collaborations"
          ],
          correctAnswer: 0,
          explanation: "Partnerships create collaborative relationships with community groups."
        },
        {
          id: 8,
          question: "What are feedback channels for customers?",
          options: [
            "Ways customers can share opinions",
            "Only complaint departments",
            "Social media complaints only",
            "Anonymous suggestion boxes"
          ],
          correctAnswer: 0,
          explanation: "Multiple channels make it easy for customers to provide feedback."
        },
        {
          id: 9,
          question: "Who are secondary stakeholders?",
          options: [
            "Indirectly affected by organization",
            "Most important stakeholders",
            "Only government agencies",
            "People who don't matter"
          ],
          correctAnswer: 0,
          explanation: "Secondary stakeholders have indirect interest or influence."
        },
        {
          id: 10,
          question: "What are volunteer programs?",
          options: [
            "Employee community involvement",
            "Only mandatory community service",
            "Student internship programs",
            "Free labor for organization"
          ],
          correctAnswer: 0,
          explanation: "Volunteer programs support community while engaging employees."
        },
        {
          id: 11,
          question: "What is investor relations?",
          options: [
            "Communicating with financial stakeholders",
            "Only annual reports",
            "Stock market manipulation",
            "Employee investment advice"
          ],
          correctAnswer: 0,
          explanation: "Investor relations manages communication with shareholders and investors."
        },
        {
          id: 12,
          question: "What are town hall meetings?",
          options: [
            "Open forums with leadership",
            "Only for town residents",
            "Political campaign events",
            "External public events"
          ],
          correctAnswer: 0,
          explanation: "Town halls allow employees to ask questions and hear from leaders."
        },
        {
          id: 13,
          question: "What is compliance communication?",
          options: [
            "Following rules and regulations",
            "Only legal requirements",
            "Government lobbying",
            "Policy development"
          ],
          correctAnswer: 0,
          explanation: "Compliance communication ensures understanding of legal requirements."
        },
        {
          id: 14,
          question: "What are recognition programs?",
          options: [
            "Celebrating employee achievements",
            "Only monetary rewards",
            "Annual awards only",
            "Public shaming of failures"
          ],
          correctAnswer: 0,
          explanation: "Recognition motivates employees and shows appreciation."
        },
        {
          id: 15,
          question: "What is issue resolution for customers?",
          options: [
            "Addressing complaints effectively",
            "Ignoring minor complaints",
            "Only refunds given",
            "Legal dispute resolution"
          ],
          correctAnswer: 0,
          explanation: "Effective issue resolution turns unhappy customers into loyal ones."
        },
        {
          id: 16,
          question: "What are communication preferences?",
          options: [
            "How stakeholders prefer to receive information",
            "What stakeholders want to hear",
            "Only email preferences",
            "Language preferences only"
          ],
          correctAnswer: 0,
          explanation: "Different stakeholders prefer different communication channels."
        },
        {
          id: 17,
          question: "What is policy advocacy?",
          options: [
            "Supporting favorable policies",
            "Political campaigning",
            "Only illegal lobbying",
            "Ignoring all policies"
          ],
          correctAnswer: 0,
          explanation: "Advocacy involves supporting policies that help the organization."
        },
        {
          id: 18,
          question: "What does building trust require?",
          options: [
            "Consistency and accountability",
            "Only positive news",
            "Large donations",
            "Social media popularity"
          ],
          correctAnswer: 0,
          explanation: "Trust is built through reliable actions and taking responsibility."
        },
        {
          id: 19,
          question: "What is customer education?",
          options: [
            "Helping customers use products/services",
            "Only user manuals",
            "Academic education",
            "Sales training"
          ],
          correctAnswer: 0,
          explanation: "Education helps customers get more value from products/services."
        },
        {
          id: 20,
          question: "What is long-term thinking in relationships?",
          options: [
            "Building relationships over time",
            "Only quarterly results",
            "Immediate benefits only",
            "Forgetting past interactions"
          ],
          correctAnswer: 0,
          explanation: "Long-term thinking values sustained relationships over quick wins."
        }
      ]
    },
    {
      id: 5,
      title: "Digital PR and Social Media",
      completed: false,
      content: `
# Digital PR and Social Media

## Online Reputation Management
This module covers how to manage public relations in digital spaces, including social media, websites, and online platforms.

### Digital PR Strategy
- **Integrated approach**: Connecting online and offline efforts
- **Content creation**: Developing digital materials
- **Online monitoring**: Tracking digital conversations
- **Engagement tactics**: Interacting with online audiences

### Social Media Platforms
- **Platform selection**: Choosing right channels for audience
- **Content adaptation**: Tailoring messages for each platform
- **Community management**: Building online communities
- **Platform guidelines**: Following each platform's rules

### Content Creation for Digital
- **Blog posts**: Articles that provide value
- **Infographics**: Visual information sharing
- **Video content**: Engaging visual storytelling
- **Podcasts**: Audio content for on-the-go audiences

### Online Reputation Management
- **Review monitoring**: Tracking online reviews
- **Response strategies**: How to respond to feedback
- **Crisis prevention**: Avoiding online reputation issues
- **Positive content creation**: Building positive online presence

### Influencer Relations
- **Influencer identification**: Finding relevant influencers
- **Relationship building**: Developing genuine connections
- **Campaign collaboration**: Working together on projects
- **Measurement**: Evaluating influencer campaign success

### Website PR
- **Press room**: Online media resources
- **News section**: Company news updates
- **Leadership bios**: Information about key people
- **Media contact page**: Easy way for media to connect

### Email Newsletters
- **Audience segmentation**: Sending relevant content
- **Content planning**: Valuable information for subscribers
- **Design considerations**: Readable and attractive layout
- **Analytics tracking**: Measuring open and click rates

### Analytics and Measurement
- **Engagement metrics**: Likes, shares, comments
- **Reach metrics**: How many people see content
- **Conversion tracking**: Actions taken from PR efforts
- **ROI calculation**: Return on investment from digital PR
`,
      quiz: [
        {
          id: 1,
          question: "What is digital PR strategy?",
          options: [
            "Integrated online and offline approach",
            "Only social media posting",
            "Website development only",
            "Email marketing campaigns"
          ],
          correctAnswer: 0,
          explanation: "Digital PR integrates online efforts with overall PR strategy."
        },
        {
          id: 2,
          question: "Why select specific social media platforms?",
          options: [
            "Different platforms have different audiences",
            "To be on all platforms always",
            "Only popular platforms matter",
            "Platforms don't differ much"
          ],
          correctAnswer: 0,
          explanation: "Platform selection ensures you reach your target audience effectively."
        },
        {
          id: 3,
          question: "What are blog posts for in digital PR?",
          options: [
            "Articles that provide value to readers",
            "Only company announcements",
            "Advertising products directly",
            "Competitor criticism"
          ],
          correctAnswer: 0,
          explanation: "Blog posts establish expertise and provide useful information."
        },
        {
          id: 4,
          question: "What is online reputation management?",
          options: [
            "Managing how organization appears online",
            "Only removing negative content",
            "Buying positive reviews",
            "Ignoring online conversations"
          ],
          correctAnswer: 0,
          explanation: "Online reputation management involves monitoring and influencing digital perception."
        },
        {
          id: 5,
          question: "What is content adaptation?",
          options: [
            "Tailoring messages for each platform",
            "Copying same content everywhere",
            "Changing messages randomly",
            "Only using text content"
          ],
          correctAnswer: 0,
          explanation: "Different platforms work best with different content formats and styles."
        },
        {
          id: 6,
          question: "What are infographics?",
          options: [
            "Visual information sharing tools",
            "Only statistical charts",
            "Complex data presentations",
            "Website background images"
          ],
          correctAnswer: 0,
          explanation: "Infographics make complex information visually appealing and understandable."
        },
        {
          id: 7,
          question: "Why monitor online reviews?",
          options: [
            "Tracking customer feedback and sentiment",
            "Only responding to positive reviews",
            "Finding negative reviews to delete",
            "Checking competitor reviews only"
          ],
          correctAnswer: 0,
          explanation: "Review monitoring helps understand customer experiences and address issues."
        },
        {
          id: 8,
          question: "What is influencer identification?",
          options: [
            "Finding relevant influencers for your industry",
            "Only celebrities with many followers",
            "Anyone with social media accounts",
            "Competitors' brand ambassadors"
          ],
          correctAnswer: 0,
          explanation: "Relevant influencers have audiences interested in your topic or industry."
        },
        {
          id: 9,
          question: "What is community management?",
          options: [
            "Building and engaging online communities",
            "Only deleting negative comments",
            "Creating multiple fake accounts",
            "Ignoring community interactions"
          ],
          correctAnswer: 0,
          explanation: "Community management involves nurturing relationships with online followers."
        },
        {
          id: 10,
          question: "What is a press room on website?",
          options: [
            "Online media resources section",
            "Only contact information",
            "Employee break room info",
            "Physical room location"
          ],
          correctAnswer: 0,
          explanation: "Online press rooms make it easy for journalists to find information."
        },
        {
          id: 11,
          question: "What are engagement tactics?",
          options: [
            "Interacting with online audiences",
            "Only posting content",
            "Buying followers",
            "Automated responses only"
          ],
          correctAnswer: 0,
          explanation: "Engagement tactics encourage interaction and build relationships."
        },
        {
          id: 12,
          question: "Why create video content?",
          options: [
            "Engaging visual storytelling",
            "Because everyone else does",
            "Only for product demonstrations",
            "It's cheaper than writing"
          ],
          correctAnswer: 0,
          explanation: "Video is highly engaging and effective for storytelling."
        },
        {
          id: 13,
          question: "What are response strategies for reviews?",
          options: [
            "How to respond to feedback professionally",
            "Only thanking for positive reviews",
            "Arguing with negative reviewers",
            "Ignoring all reviews"
          ],
          correctAnswer: 0,
          explanation: "Professional responses show you value feedback and address concerns."
        },
        {
          id: 14,
          question: "What is influencer relationship building?",
          options: [
            "Developing genuine connections with influencers",
            "Only paying for posts",
            "Threatening negative influencers",
            "Ignoring influencer preferences"
          ],
          correctAnswer: 0,
          explanation: "Genuine relationships lead to more authentic influencer partnerships."
        },
        {
          id: 15,
          question: "What is audience segmentation for newsletters?",
          options: [
            "Sending relevant content to different groups",
            "Only dividing by location",
            "Random audience division",
            "Sending everything to everyone"
          ],
          correctAnswer: 0,
          explanation: "Segmentation ensures subscribers receive content relevant to their interests."
        },
        {
          id: 16,
          question: "What are engagement metrics?",
          options: [
            "Likes, shares, comments measurements",
            "Only follower counts",
            "Website traffic only",
            "Sales numbers"
          ],
          correctAnswer: 0,
          explanation: "Engagement metrics show how people interact with your content."
        },
        {
          id: 17,
          question: "What is crisis prevention online?",
          options: [
            "Avoiding online reputation issues",
            "Only handling crises after they happen",
            "Deleting all negative comments",
            "Ignoring potential problems"
          ],
          correctAnswer: 0,
          explanation: "Prevention involves monitoring and addressing issues before they escalate."
        },
        {
          id: 18,
          question: "What are platform guidelines?",
          options: [
            "Rules each social platform has",
            "Only legal requirements",
            "Personal preferences",
            "Competitor strategies"
          ],
          correctAnswer: 0,
          explanation: "Following platform guidelines prevents account suspension or penalties."
        },
        {
          id: 19,
          question: "What is positive content creation?",
          options: [
            "Building positive online presence",
            "Only happy news",
            "Fake positive stories",
            "Ignoring negative topics"
          ],
          correctAnswer: 0,
          explanation: "Positive content helps balance and shape online perception."
        },
        {
          id: 20,
          question: "What is ROI calculation for digital PR?",
          options: [
            "Return on investment measurement",
            "Only counting social media likes",
            "Guessing about value",
            "Ignoring costs completely"
          ],
          correctAnswer: 0,
          explanation: "ROI helps demonstrate the value of digital PR efforts."
        }
      ]
    },
    {
      id: 6,
      title: "PR Campaign Planning and Measurement",
      completed: false,
      content: `
# PR Campaign Planning and Measurement

## Creating and Evaluating PR Campaigns
This final module covers how to plan, implement, and measure public relations campaigns effectively.

### Campaign Planning Process
- **Situation analysis**: Understanding current position
- **Goal setting**: Defining what you want to achieve
- **Objective development**: Specific, measurable targets
- **Strategy creation**: Overall approach to reach goals

### SMART Objectives
- **Specific**: Clear and precise
- **Measurable**: Can be quantified
- **Achievable**: Realistic to accomplish
- **Relevant**: Aligned with goals
- **Time-bound**: With specific deadlines

### Target Audience Identification
- **Demographic analysis**: Age, gender, location
- **Psychographic understanding**: Values, interests, lifestyle
- **Media consumption**: Where audience gets information
- **Influence mapping**: Who influences the audience

### Message Development
- **Key messages**: Core ideas to communicate
- **Message adaptation**: Tailoring for different audiences
- **Proof points**: Evidence supporting messages
- **Call to action**: What you want audience to do

### Tactical Planning
- **Media relations activities**: Press releases, interviews
- **Events and sponsorships**: In-person engagements
- **Content creation**: Articles, videos, social media
- **Partnerships**: Collaborations with other organizations

### Budgeting for PR
- **Resource allocation**: Where to spend money
- **Cost estimation**: Predicting expenses
- **Contingency planning**: Budget for unexpected
- **ROI consideration**: Value for money spent

### Implementation Timeline
- **Project planning**: Sequencing activities
- **Milestone setting**: Key achievement points
- **Deadline management**: Keeping on schedule
- **Flexibility**: Adapting to changes

### Measurement and Evaluation
- **Output measurement**: Activities completed
- **Outcome measurement**: Effects of activities
- **ROI analysis**: Return on investment
- **Reporting**: Sharing results with stakeholders

### Campaign Adjustment
- **Performance monitoring**: Tracking during campaign
- **Mid-course corrections**: Making changes as needed
- **Lesson documentation**: Recording what worked
- **Future planning**: Applying lessons to next campaign
`,
      quiz: [
        {
          id: 1,
          question: "What is situation analysis in campaign planning?",
          options: [
            "Understanding current position and context",
            "Only competitor analysis",
            "Financial situation only",
            "Employee satisfaction"
          ],
          correctAnswer: 0,
          explanation: "Situation analysis examines current circumstances before planning."
        },
        {
          id: 2,
          question: "What does SMART stand for in objectives?",
          options: [
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Smart, Meaningful, Actionable, Realistic, Timely",
            "Strategic, Managed, Achievable, Relevant, Targeted",
            "Simple, Measurable, Attainable, Reasonable, Timed"
          ],
          correctAnswer: 0,
          explanation: "SMART objectives are Specific, Measurable, Achievable, Relevant, Time-bound."
        },
        {
          id: 3,
          question: "What is target audience identification?",
          options: [
            "Defining who you want to reach",
            "Only demographic information",
            "Guessing who might listen",
            "Everyone in the world"
          ],
          correctAnswer: 0,
          explanation: "Identifying target audience ensures messages reach the right people."
        },
        {
          id: 4,
          question: "What are key messages?",
          options: [
            "Core ideas to communicate",
            "Only headlines",
            "Complete speeches",
            "Social media tags"
          ],
          correctAnswer: 0,
          explanation: "Key messages are the main points you want audiences to remember."
        },
        {
          id: 5,
          question: "What are tactical plans?",
          options: [
            "Specific activities to implement strategy",
            "Only big picture ideas",
            "Competitor tactics to copy",
            "Future distant plans"
          ],
          correctAnswer: 0,
          explanation: "Tactics are the specific actions that execute the strategy."
        },
        {
          id: 6,
          question: "What does 'specific' mean in SMART objectives?",
          options: [
            "Clear and precise objectives",
            "General good intentions",
            "Only number-based goals",
            "Complex detailed plans"
          ],
          correctAnswer: 0,
          explanation: "Specific objectives are well-defined and unambiguous."
        },
        {
          id: 7,
          question: "What is demographic analysis?",
          options: [
            "Understanding age, gender, location of audience",
            "Only income levels",
            "Political affiliations",
            "Personality traits"
          ],
          correctAnswer: 0,
          explanation: "Demographics provide basic information about audience characteristics."
        },
        {
          id: 8,
          question: "What is message adaptation?",
          options: [
            "Tailoring messages for different audiences",
            "Changing messages randomly",
            "Using different languages only",
            "Simplifying all messages"
          ],
          correctAnswer: 0,
          explanation: "Adaptation ensures messages resonate with different audience groups."
        },
        {
          id: 9,
          question: "What are media relations activities?",
          options: [
            "Press releases, interviews, media events",
            "Only social media posts",
            "Advertising purchases",
            "Employee newsletters"
          ],
          correctAnswer: 0,
          explanation: "Media relations activities engage journalists and secure coverage."
        },
        {
          id: 10,
          question: "What is resource allocation in budgeting?",
          options: [
            "Where to spend money effectively",
            "Only cutting costs",
            "Spending all budget",
            "Ignoring budget limits"
          ],
          correctAnswer: 0,
          explanation: "Resource allocation ensures money supports priority activities."
        },
        {
          id: 11,
          question: "What does 'measurable' mean in SMART objectives?",
          options: [
            "Can be quantified or assessed",
            "Only counting money",
            "Guessing results",
            "Feeling successful"
          ],
          correctAnswer: 0,
          explanation: "Measurable objectives can be tracked and evaluated."
        },
        {
          id: 12,
          question: "What are psychographics?",
          options: [
            "Values, interests, lifestyle of audience",
            "Only psychological disorders",
            "Educational levels",
            "Job titles only"
          ],
          correctAnswer: 0,
          explanation: "Psychographics help understand audience attitudes and motivations."
        },
        {
          id: 13,
          question: "What are proof points?",
          options: [
            "Evidence supporting messages",
            "Only statistical data",
            "Legal proof requirements",
            "Competitor weaknesses"
          ],
          correctAnswer: 0,
          explanation: "Proof points provide credibility and support for key messages."
        },
        {
          id: 14,
          question: "What are events and sponsorships?",
          options: [
            "In-person engagement opportunities",
            "Only large conferences",
            "Charity donations only",
            "Internal company parties"
          ],
          correctAnswer: 0,
          explanation: "Events and sponsorships provide direct audience engagement."
        },
        {
          id: 15,
          question: "What is contingency planning in budgeting?",
          options: [
            "Budget for unexpected expenses",
            "Only emergency funds",
            "Planning to fail",
            "Ignoring budget overruns"
          ],
          correctAnswer: 0,
          explanation: "Contingency planning prepares for unforeseen costs or changes."
        },
        {
          id: 16,
          question: "What are milestones in implementation?",
          options: [
            "Key achievement points in timeline",
            "Only final deadline",
            "Random checkpoints",
            "Employee birthdays"
          ],
          correctAnswer: 0,
          explanation: "Milestones mark important progress points in the campaign."
        },
        {
          id: 17,
          question: "What is output measurement?",
          options: [
            "Counting activities completed",
            "Only final results",
            "Employee hours worked",
            "Money spent"
          ],
          correctAnswer: 0,
          explanation: "Output measurement tracks what was done (activities completed)."
        },
        {
          id: 18,
          question: "What is outcome measurement?",
          options: [
            "Effects and results of activities",
            "Only activity completion",
            "Competitor reactions",
            "Media mentions count"
          ],
          correctAnswer: 0,
          explanation: "Outcome measurement assesses the impact and results achieved."
        },
        {
          id: 19,
          question: "What are mid-course corrections?",
          options: [
            "Making changes during campaign",
            "Only after campaign ends",
            "Major strategy changes",
            "Giving up on campaign"
          ],
          correctAnswer: 0,
          explanation: "Mid-course adjustments improve campaigns based on early results."
        },
        {
          id: 20,
          question: "What is lesson documentation?",
          options: [
            "Recording what worked for future use",
            "Only listing failures",
            "Employee performance reviews",
            "Competitor analysis"
          ],
          correctAnswer: 0,
          explanation: "Documenting lessons helps improve future campaigns."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "public-relations-certificate-exam",
    title: "Public Relations Certificate Final Examination",
    description: "Comprehensive examination covering all six modules of the Public Relations Certificate program. This exam tests your knowledge of PR foundations, media relations, crisis communication, stakeholder engagement, digital PR, and campaign planning.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      {
        id: 1,
        question: "What is the main purpose of public relations?",
        options: [
          "Building relationships and managing reputation",
          "Only selling products and services",
          "Creating advertisements for TV",
          "Reporting news objectively"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: PR focuses on building relationships and reputation management.",
        module: 1
      },
      {
        id: 2,
        question: "What should you research about journalists?",
        options: [
          "Who covers your industry",
          "Their personal life details",
          "Only their email addresses",
          "What they had for breakfast"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Knowing which journalists cover your topic helps pitch relevant stories.",
        module: 2
      },
      {
        id: 3,
        question: "What are types of organizational crises?",
        options: [
          "Operational, financial, personnel, reputational",
          "Only natural disasters",
          "Small and large crises",
          "Media-created and real crises"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Crises can involve operations, finances, personnel, or reputation.",
        module: 3
      },
      {
        id: 4,
        question: "Who are primary stakeholders?",
        options: [
          "Directly affected by organization",
          "Only shareholders",
          "Government agencies",
          "General public only"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Primary stakeholders are directly impacted by decisions.",
        module: 4
      },
      {
        id: 5,
        question: "What is digital PR strategy?",
        options: [
          "Integrated online and offline approach",
          "Only social media posting",
          "Website development only",
          "Email marketing campaigns"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Digital PR integrates online efforts with overall strategy.",
        module: 5
      },
      {
        id: 6,
        question: "What is situation analysis in campaign planning?",
        options: [
          "Understanding current position and context",
          "Only competitor analysis",
          "Financial situation only",
          "Employee satisfaction"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Situation analysis examines circumstances before planning.",
        module: 6
      },
      {
        id: 7,
        question: "How does PR differ from advertising?",
        options: [
          "PR earns coverage, advertising pays for space",
          "PR is always free, advertising costs money",
          "PR is only digital, advertising is traditional",
          "PR is unethical, advertising is ethical"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: PR earns media coverage through relationships.",
        module: 1
      },
      {
        id: 8,
        question: "What makes a story newsworthy?",
        options: [
          "Why it matters to readers",
          "Only if it's about your company",
          "If it's long and detailed",
          "If it uses complex language"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Newsworthiness means story has importance to audience.",
        module: 2
      },
      {
        id: 9,
        question: "What is the first crisis response principle?",
        options: [
          "Acknowledge quickly",
          "Wait for all facts",
          "Blame others first",
          "Ignore minor crises"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Quick acknowledgement shows you're addressing situation.",
        module: 3
      },
      {
        id: 10,
        question: "What is stakeholder analysis?",
        options: [
          "Understanding power, interest, and needs",
          "Only listing names",
          "Financial analysis only",
          "Social media following"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Analysis helps understand stakeholders' influence.",
        module: 4
      },
      {
        id: 11,
        question: "Why select specific social media platforms?",
        options: [
          "Different platforms have different audiences",
          "To be on all platforms always",
          "Only popular platforms matter",
          "Platforms don't differ much"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Platform selection ensures reaching target audience.",
        module: 5
      },
      {
        id: 12,
        question: "What does SMART stand for in objectives?",
        options: [
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Smart, Meaningful, Actionable, Realistic, Timely",
          "Strategic, Managed, Achievable, Relevant, Targeted",
          "Simple, Measurable, Attainable, Reasonable, Timed"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: SMART objectives are Specific, Measurable, etc.",
        module: 6
      },
      {
        id: 13,
        question: "What does two-way communication mean in PR?",
        options: [
          "Listening as much as speaking",
          "Communicating in two languages",
          "Using two media channels",
          "Having two spokespeople"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Two-way communication involves both sending and listening.",
        module: 1
      },
      {
        id: 14,
        question: "What is the inverted pyramid style?",
        options: [
          "Most important information first",
          "Starting with background information",
          "Ending with the main point",
          "Equal importance to all details"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Inverted pyramid puts crucial information first.",
        module: 2
      },
      {
        id: 15,
        question: "What does 'one voice' mean in crisis communication?",
        options: [
          "Consistent messaging across channels",
          "Only one person speaks",
          "Using one communication channel",
          "Speaking at same volume"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: 'One voice' means everyone shares same messages.",
        module: 3
      },
      {
        id: 16,
        question: "What are community relations strategies?",
        options: [
          "Building relationships with local community",
          "Only charity donations",
          "Marketing to community",
          "Ignoring community concerns"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Community relations involves local relationships.",
        module: 4
      },
      {
        id: 17,
        question: "What are blog posts for in digital PR?",
        options: [
          "Articles that provide value to readers",
          "Only company announcements",
          "Advertising products directly",
          "Competitor criticism"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Blog posts establish expertise and provide value.",
        module: 5
      },
      {
        id: 18,
        question: "What is target audience identification?",
        options: [
          "Defining who you want to reach",
          "Only demographic information",
          "Guessing who might listen",
          "Everyone in the world"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Identifying audience ensures reaching right people.",
        module: 6
      },
      {
        id: 19,
        question: "What is media relations?",
        options: [
          "Working with journalists and media outlets",
          "Only managing social media",
          "Creating TV commercials",
          "Writing newspaper articles as reporter"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Media relations involves building journalist relationships.",
        module: 1
      },
      {
        id: 20,
        question: "What should a headline do?",
        options: [
          "Grab attention clearly",
          "Be as long as possible",
          "Use technical jargon",
          "Hide the main point"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Headlines should capture interest immediately.",
        module: 2
      },
      {
        id: 21,
        question: "Why is a crisis team important?",
        options: [
          "Designated people with clear roles",
          "Only leadership handles crises",
          "Everyone responds individually",
          "External consultants only"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Crisis team ensures organized response efforts.",
        module: 3
      },
      {
        id: 22,
        question: "What is a community needs assessment?",
        options: [
          "Understanding local concerns and needs",
          "Market research for sales",
          "Government requirement only",
          "Employee satisfaction survey"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Needs assessment identifies community concerns.",
        module: 4
      },
      {
        id: 23,
        question: "What is online reputation management?",
        options: [
          "Managing how organization appears online",
          "Only removing negative content",
          "Buying positive reviews",
          "Ignoring online conversations"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: It involves monitoring and influencing digital perception.",
        module: 5
      },
      {
        id: 24,
        question: "What are key messages?",
        options: [
          "Core ideas to communicate",
          "Only headlines",
          "Complete speeches",
          "Social media tags"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Key messages are main points audiences should remember.",
        module: 6
      },
      {
        id: 25,
        question: "What is the first step in the PR process?",
        options: [
          "Research and understanding",
          "Writing press releases",
          "Planning events",
          "Measuring results"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Research comes first to understand situation.",
        module: 1
      },
      {
        id: 26,
        question: "What are personalized pitches?",
        options: [
          "Tailored to each journalist",
          "Same email to everyone",
          "Mass distribution emails",
          "Generic template messages"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Personalized pitches show understanding of journalist interests.",
        module: 2
      },
      {
        id: 27,
        question: "What should initial response include?",
        options: [
          "Expression of concern for affected",
          "Detailed technical explanations",
          "Blame assignment",
          "Future plans only"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Expressing concern shows empathy and connection.",
        module: 3
      },
      {
        id: 28,
        question: "Who are internal stakeholders?",
        options: [
          "People within the organization",
          "Only company owners",
          "External partners",
          "Government regulators"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Internal stakeholders include employees and managers.",
        module: 4
      },
      {
        id: 29,
        question: "What is content adaptation?",
        options: [
          "Tailoring messages for each platform",
          "Copying same content everywhere",
          "Changing messages randomly",
          "Only using text content"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Different platforms need different content formats.",
        module: 5
      },
      {
        id: 30,
        question: "What are tactical plans?",
        options: [
          "Specific activities to implement strategy",
          "Only big picture ideas",
          "Competitor tactics to copy",
          "Future distant plans"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Tactics are specific actions that execute strategy.",
        module: 6
      },
      {
        id: 31,
        question: "What does transparency mean in PR?",
        options: [
          "Being open and honest in communications",
          "Using clear language only",
          "Making everything public",
          "Ignoring confidential information"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Transparency means being truthful and not hiding information.",
        module: 1
      },
      {
        id: 32,
        question: "What are quotable quotes?",
        options: [
          "Compelling statements from sources",
          "Long technical explanations",
          "Boring factual statements",
          "Quotes from competitors"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Quotable quotes are interesting statements journalists might use.",
        module: 2
      },
      {
        id: 33,
        question: "What are message templates?",
        options: [
          "Prepared statements for various scenarios",
          "Exact scripts to read",
          "Only legal statements",
          "Social media posts only"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Templates provide starting points that can be adapted.",
        module: 3
      },
      {
        id: 34,
        question: "What are employee communication methods?",
        options: [
          "Newsletters, meetings, intranet",
          "Only pay slips",
          "Social media only",
          "Public announcements"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Multiple channels ensure employees receive information.",
        module: 4
      },
      {
        id: 35,
        question: "Why monitor online reviews?",
        options: [
          "Tracking customer feedback and sentiment",
          "Only responding to positive reviews",
          "Finding negative reviews to delete",
          "Checking competitor reviews only"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Review monitoring helps understand customer experiences.",
        module: 5
      },
      {
        id: 36,
        question: "What does 'specific' mean in SMART objectives?",
        options: [
          "Clear and precise objectives",
          "General good intentions",
          "Only number-based goals",
          "Complex detailed plans"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Specific objectives are well-defined and unambiguous.",
        module: 6
      },
      {
        id: 37,
        question: "What is community relations?",
        options: [
          "Building relationships with local communities",
          "Only online community management",
          "Family relationship counseling",
          "International diplomacy"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Community relations focuses on local community relationships.",
        module: 1
      },
      {
        id: 38,
        question: "Why include contact information?",
        options: [
          "So journalists can reach you easily",
          "To show you have many contacts",
          "For legal requirements only",
          "To fill space in the release"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Contact information enables journalists to get more information.",
        module: 2
      },
      {
        id: 39,
        question: "What does transparency mean in crisis?",
        options: [
          "Being open about what you know",
          "Revealing everything immediately",
          "Only positive information",
          "What lawyers allow"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Transparency means sharing appropriate information honestly.",
        module: 3
      },
      {
        id: 40,
        question: "What are partnership building activities?",
        options: [
          "Working with community organizations",
          "Only business partnerships",
          "Mergers and acquisitions",
          "Competitor collaborations"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Partnerships create collaborative community relationships.",
        module: 4
      }
    ]
  }
};
