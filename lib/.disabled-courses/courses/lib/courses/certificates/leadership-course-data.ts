// leadership-certificate.ts
export const leadershipCertificateCourse = {
  id: "leadership-certificate",
  title: "Leadership (Certificate)",
  description: "Master essential leadership skills through practical frameworks and real-world applications. Learn how to inspire teams, make better decisions, and create positive work environments.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "👑",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Foundations of Leadership",
      content: `# What is Leadership?

**Leadership** is the art of guiding people toward shared goals. Unlike management which focuses on systems and processes, leadership focuses on people and possibilities.

## Three Core Elements of Leadership

1. **Vision** - Creating a clear picture of where you're going
2. **Influence** - Getting others to follow willingly
3. **Service** - Putting others' needs alongside organizational goals

## Leadership vs Management

- **Managers** maintain systems and ensure efficiency
- **Leaders** create change and inspire people
- The best organizations need both roles working together

## Your Natural Leadership Style

Everyone has natural leadership tendencies. Some people lead by example, others through encouragement, and some through clear direction. Discovering your natural style is the first step to becoming effective.

## Why Leadership Matters Today

Modern workplaces need leaders who can adapt to change, support team wellbeing, and navigate uncertainty. Good leadership creates workplaces where people want to do their best work.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three core elements of leadership?",
          options: [
            "Power, control, and authority",
            "Vision, influence, and service",
            "Planning, organizing, and directing",
            "Communication, delegation, and evaluation"
          ],
          correctAnswer: 1,
          explanation: "The three core elements are vision (clear direction), influence (getting people to follow), and service (caring for others' needs)."
        },
        {
          id: 2,
          question: "What is the main difference between leadership and management?",
          options: [
            "Leadership pays more than management",
            "Leaders focus on people, managers focus on systems",
            "Management is more important than leadership",
            "Leaders work less hours than managers"
          ],
          correctAnswer: 1,
          explanation: "Leaders focus on inspiring people and creating change, while managers focus on maintaining systems and ensuring efficiency."
        },
        {
          id: 3,
          question: "Which element involves creating a clear picture of where you're going?",
          options: [
            "Influence",
            "Service",
            "Vision",
            "Management"
          ],
          correctAnswer: 2,
          explanation: "Vision is about creating and communicating a clear picture of the future direction."
        },
        {
          id: 4,
          question: "What does the service element of leadership emphasize?",
          options: [
            "Making others serve your needs",
            "Putting others' needs alongside organizational goals",
            "Serving only senior management",
            "Avoiding service tasks"
          ],
          correctAnswer: 1,
          explanation: "Service means caring about and supporting the needs of your team members while pursuing organizational goals."
        },
        {
          id: 5,
          question: "Why is discovering your natural leadership style important?",
          options: [
            "It determines your salary level",
            "It's the first step to becoming effective",
            "It guarantees promotion",
            "It's required by most companies"
          ],
          correctAnswer: 1,
          explanation: "Understanding your natural tendencies helps you build on your strengths and develop where needed."
        },
        {
          id: 6,
          question: "What do modern workplaces need from leaders?",
          options: [
            "Strict rules and punishments",
            "Ability to adapt to change and support wellbeing",
            "Focus only on profits",
            "Long working hours from everyone"
          ],
          correctAnswer: 1,
          explanation: "Today's leaders need to adapt to change, support team wellbeing, and navigate uncertain situations."
        },
        {
          id: 7,
          question: "What creates workplaces where people want to do their best work?",
          options: [
            "High salaries only",
            "Good leadership",
            "Lots of meetings",
            "Strict deadlines"
          ],
          correctAnswer: 1,
          explanation: "Good leadership creates positive environments where people feel motivated to contribute their best."
        },
        {
          id: 8,
          question: "How do leaders get others to follow them?",
          options: [
            "Through threats and punishments",
            "By offering bribes",
            "Through willing influence",
            "By ignoring their opinions"
          ],
          correctAnswer: 2,
          explanation: "True leadership involves influence that makes people want to follow willingly, not because they have to."
        },
        {
          id: 9,
          question: "What should the best organizations have?",
          options: [
            "Only leaders, no managers",
            "Only managers, no leaders",
            "Both leadership and management working together",
            "Neither leaders nor managers"
          ],
          correctAnswer: 2,
          explanation: "Effective organizations need both leadership (for inspiration and change) and management (for systems and efficiency)."
        },
        {
          id: 10,
          question: "What is the art of guiding people toward shared goals called?",
          options: [
            "Management",
            "Supervision",
            "Leadership",
            "Administration"
          ],
          correctAnswer: 2,
          explanation: "Leadership is specifically about guiding people toward achieving common objectives."
        },
        {
          id: 11,
          question: "Which leadership element focuses on getting others to follow willingly?",
          options: [
            "Vision",
            "Authority",
            "Influence",
            "Power"
          ],
          correctAnswer: 2,
          explanation: "Influence is about earning voluntary followership through respect and inspiration."
        },
        {
          id: 12,
          question: "What do leaders create that managers maintain?",
          options: [
            "Budgets and reports",
            "Change and inspiration",
            "Rules and policies",
            "Schedules and timelines"
          ],
          correctAnswer: 1,
          explanation: "Leaders create change and inspire people, while managers maintain existing systems."
        },
        {
          id: 13,
          question: "What is the first step in becoming an effective leader?",
          options: [
            "Getting a leadership title",
            "Discovering your natural leadership style",
            "Taking advanced management courses",
            "Managing a large team"
          ],
          correctAnswer: 1,
          explanation: "Understanding your natural leadership tendencies helps you build on your strengths."
        },
        {
          id: 14,
          question: "How do some people naturally lead?",
          options: [
            "Only through giving orders",
            "By example, encouragement, or clear direction",
            "By working alone",
            "Through financial incentives only"
          ],
          correctAnswer: 1,
          explanation: "Different people have different natural styles including leading by example, through encouragement, or by providing clear direction."
        },
        {
          id: 15,
          question: "What does good leadership help organizations navigate?",
          options: [
            "Only profitable situations",
            "Certainty and stability",
            "Uncertainty and change",
            "Simple routine tasks"
          ],
          correctAnswer: 2,
          explanation: "Modern leaders need to guide teams through uncertain and changing circumstances."
        },
        {
          id: 16,
          question: "What aspect of leadership involves putting others' needs alongside goals?",
          options: [
            "The service element",
            "The vision element",
            "The influence element",
            "The management element"
          ],
          correctAnswer: 0,
          explanation: "Service means considering and supporting team members' needs while pursuing objectives."
        },
        {
          id: 17,
          question: "What do leaders focus on that's different from managers?",
          options: [
            "Systems and processes",
            "People and possibilities",
            "Rules and regulations",
            "Budgets and expenses"
          ],
          correctAnswer: 1,
          explanation: "Leaders focus on people (their growth and motivation) and possibilities (future opportunities)."
        },
        {
          id: 18,
          question: "What creates a clear picture of future direction?",
          options: [
            "Detailed budget plans",
            "A compelling vision",
            "Strict rules",
            "Complex reports"
          ],
          correctAnswer: 1,
          explanation: "Vision provides the clear picture of where the organization or team should be heading."
        },
        {
          id: 19,
          question: "How can leadership style be described?",
          options: [
            "As fixed and unchangeable",
            "As natural tendencies that can be developed",
            "As only effective in large organizations",
            "As unrelated to personal characteristics"
          ],
          correctAnswer: 1,
          explanation: "Everyone has natural leadership tendencies that can be recognized and developed further."
        },
        {
          id: 20,
          question: "What does leadership help create in the workplace?",
          options: [
            "More paperwork and procedures",
            "Environments where people want to do their best",
            "Strict hierarchical structures",
            "Competition between team members"
          ],
          correctAnswer: 1,
          explanation: "Good leadership fosters positive environments that bring out people's best contributions."
        }
      ]
    },
    {
      id: 2,
      title: "Communication Skills for Leaders",
      content: `# The Language of Leadership

**Communication** is the bridge between ideas and action. Leaders who communicate well build trust, clarify direction, and create alignment.

## Active Listening Skills

1. **Give full attention** - Put away distractions and focus completely
2. **Listen to understand** - Not just to reply or correct
3. **Ask clarifying questions** - "What do you mean when you say...?"
4. **Paraphrase and reflect** - "So what I'm hearing is..."

## Clear Message Delivery

- **Be concise** - Get to the point without unnecessary details
- **Use simple language** - Avoid jargon and complex terms
- **Structure your thoughts** - Start with main points, then add details
- **Check for understanding** - "Does this make sense?" or "What questions do you have?"

## Non-Verbal Communication

Your body language, tone, and facial expressions often speak louder than words:

- **Eye contact** - Shows engagement and sincerity
- **Posture** - Open stance invites communication
- **Tone of voice** - Warmth and confidence build connection
- **Facial expressions** - Match your words with appropriate expressions

## Feedback That Helps People Grow

Effective feedback focuses on behavior, not personality:

- **Be specific** - "I noticed you handled that customer concern well by..."
- **Be timely** - Give feedback close to the event
- **Balance positive and constructive** - Start with what's working
- **Make it actionable** - Suggest what can be done differently

## Difficult Conversations Framework

Use this simple structure for challenging talks:
1. **Prepare** - Know what you want to say and achieve
2. **Create safety** - Start with good intentions
3. **Share facts** - Stick to observable behaviors
4. **Listen actively** - Understand their perspective
5. **Find solutions** - Work together on next steps`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the bridge between ideas and action?",
          options: [
            "Management",
            "Communication",
            "Budgeting",
            "Planning"
          ],
          correctAnswer: 1,
          explanation: "Communication connects ideas (what we think) with action (what we do)."
        },
        {
          id: 2,
          question: "What should you do when practicing active listening?",
          options: [
            "Plan your reply while they're talking",
            "Give full attention and focus completely",
            "Interrupt to show you understand",
            "Check your phone for messages"
          ],
          correctAnswer: 1,
          explanation: "Active listening requires giving your full, undivided attention to the speaker."
        },
        {
          id: 3,
          question: "What type of questions help with understanding?",
          options: [
            "Leading questions",
            "Clarifying questions",
            "Rhetorical questions",
            "Closed questions"
          ],
          correctAnswer: 1,
          explanation: "Clarifying questions like 'What do you mean when you say...?' help ensure understanding."
        },
        {
          id: 4,
          question: "What should you do to check if your message was understood?",
          options: [
            "Assume everyone understood",
            "Ask 'Does this make sense?'",
            "Repeat yourself three times",
            "Send a follow-up email"
          ],
          correctAnswer: 1,
          explanation: "Directly asking if your message makes sense invites questions and confirms understanding."
        },
        {
          id: 5,
          question: "What does open posture communicate?",
          options: [
            "Disinterest and boredom",
            "Defensiveness and resistance",
            "Invitation to communicate",
            "Superiority and authority"
          ],
          correctAnswer: 2,
          explanation: "An open, relaxed posture makes others feel welcome to share and communicate."
        },
        {
          id: 6,
          question: "What should effective feedback focus on?",
          options: [
            "Personality traits",
            "Observable behavior",
            "Personal preferences",
            "Past mistakes"
          ],
          correctAnswer: 1,
          explanation: "Feedback should focus on specific, observable behaviors that can be changed."
        },
        {
          id: 7,
          question: "When should you give feedback?",
          options: [
            "Only during annual reviews",
            "Close to when the event happened",
            "When you're angry about something",
            "In front of the whole team"
          ],
          correctAnswer: 1,
          explanation: "Timely feedback given close to the event is most effective for learning."
        },
        {
          id: 8,
          question: "What is the first step in difficult conversations?",
          options: [
            "Start with criticism",
            "Prepare what you want to say",
            "Get straight to the point",
            "Ask someone else to do it"
          ],
          correctAnswer: 1,
          explanation: "Preparation helps you approach difficult conversations with clarity and purpose."
        },
        {
          id: 9,
          question: "What should you stick to when sharing concerns?",
          options: [
            "Your feelings and emotions",
            "Observable facts and behaviors",
            "Other people's opinions",
            "General complaints"
          ],
          correctAnswer: 1,
          explanation: "Focusing on observable facts keeps conversations objective and constructive."
        },
        {
          id: 10,
          question: "What does good communication help leaders build?",
          options: [
            "More complicated processes",
            "Trust and alignment",
            "Longer meetings",
            "Strict hierarchies"
          ],
          correctAnswer: 1,
          explanation: "Clear communication builds trust and helps everyone move in the same direction."
        },
        {
          id: 11,
          question: "What should you avoid in your message delivery?",
          options: [
            "Simple language",
            "Jargon and complex terms",
            "Clear structure",
            "Main points first"
          ],
          correctAnswer: 1,
          explanation: "Jargon and complex language can confuse listeners and hinder understanding."
        },
        {
          id: 12,
          question: "What does paraphrasing help with?",
          options: [
            "Showing you're smarter",
            "Confirming your understanding",
            "Finishing conversations faster",
            "Correcting the speaker"
          ],
          correctAnswer: 1,
          explanation: "Paraphrasing shows you're listening and helps confirm you understood correctly."
        },
        {
          id: 13,
          question: "What should your facial expressions do?",
          options: [
            "Hide your true feelings",
            "Match your words appropriately",
            "Always be serious",
            "Show indifference"
          ],
          correctAnswer: 1,
          explanation: "Matching facial expressions with your words creates authenticity and trust."
        },
        {
          id: 14,
          question: "How should you start feedback conversations?",
          options: [
            "With what's working well",
            "With the biggest problem",
            "With a warning",
            "With comparisons to others"
          ],
          correctAnswer: 0,
          explanation: "Starting with positive observations creates openness for constructive feedback."
        },
        {
          id: 15,
          question: "What creates safety in difficult conversations?",
          options: [
            "Threatening consequences",
            "Starting with good intentions",
            "Having witnesses present",
            "Using formal language"
          ],
          correctAnswer: 1,
          explanation: "Beginning with good intentions and care for the person creates psychological safety."
        },
        {
          id: 16,
          question: "What does tone of voice communicate?",
          options: [
            "Only the words you say",
            "Warmth, confidence, and attitude",
            "Nothing important",
            "Your educational level"
          ],
          correctAnswer: 1,
          explanation: "Tone carries emotional content and affects how your message is received."
        },
        {
          id: 17,
          question: "What should feedback help people do?",
          options: [
            "Feel criticized",
            "Grow and improve",
            "Defend themselves",
            "Avoid future conversations"
          ],
          correctAnswer: 1,
          explanation: "Constructive feedback should support growth and development."
        },
        {
          id: 18,
          question: "What is the final step in difficult conversations?",
          options: [
            "Assign blame",
            "Find solutions together",
            "Issue punishments",
            "End abruptly"
          ],
          correctAnswer: 1,
          explanation: "Working together on solutions creates ownership and positive outcomes."
        },
        {
          id: 19,
          question: "What does eye contact show during communication?",
          options: [
            "Aggression and challenge",
            "Engagement and sincerity",
            "Impatience and hurry",
            "Superiority and dominance"
          ],
          correctAnswer: 1,
          explanation: "Appropriate eye contact demonstrates engagement and genuine interest."
        },
        {
          id: 20,
          question: "Why should you listen to understand?",
          options: [
            "To find flaws in their argument",
            "To prepare your counterpoints",
            "To genuinely comprehend their perspective",
            "To interrupt with better ideas"
          ],
          correctAnswer: 2,
          explanation: "Listening to understand builds connection and helps you respond appropriately."
        }
      ]
    },
    {
      id: 3,
      title: "Building and Leading Teams",
      content: `# Creating High-Performing Teams

**Team leadership** transforms individuals into a cohesive unit that achieves more together than separately.

## Stages of Team Development

Teams evolve through predictable stages:

1. **Forming** - People are polite, uncertain about roles
2. **Storming** - Differences emerge, conflicts may arise
3. **Norming** - Agreements form, trust builds
4. **Performing** - Team works efficiently toward goals
5. **Adjourning** - Team completes its work (for project teams)

Your role as leader changes at each stage:
- **Forming**: Provide clear direction and structure
- **Storming**: Facilitate healthy conflict resolution
- **Norming**: Support relationship building
- **Performing**: Empower and get out of the way
- **Adjourning**: Celebrate achievements and learnings

## Creating Psychological Safety

People do their best work when they feel safe to:

- **Ask questions** without feeling stupid
- **Admit mistakes** without fear of punishment
- **Suggest ideas** without being dismissed
- **Challenge norms** without being labeled difficult

Build safety by:
- Admitting your own mistakes first
- Responding positively to questions
- Treating failures as learning opportunities
- Encouraging diverse perspectives

## Delegation That Develops People

Effective delegation involves more than just assigning tasks:

- **Match tasks to development needs** - What will help this person grow?
- **Provide clear expectations** - What does success look like?
- **Grant appropriate authority** - What decisions can they make?
- **Offer support without taking over** - How can you be available without micromanaging?

## Conflict Resolution Framework

Healthy conflict leads to better decisions. Use this approach:

1. **Address issues early** - Don't let problems fester
2. **Focus on interests, not positions** - Understand underlying needs
3. **Generate multiple options** - Brainstorm solutions together
4. **Use objective criteria** - Agree on how to evaluate options
5. **Build relationships** - Strengthen connections through resolution

## Celebrating Team Success

Recognition reinforces positive behaviors:

- **Be specific** - "Great job on completing the project ahead of schedule because..."
- **Be timely** - Celebrate soon after achievements
- **Be authentic** - Mean what you say
- **Mix public and private** - Some recognition public, some personal`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first stage of team development?",
          options: [
            "Storming",
            "Norming",
            "Forming",
            "Performing"
          ],
          correctAnswer: 2,
          explanation: "Forming is when team members first come together and are typically polite and uncertain."
        },
        {
          id: 2,
          question: "What happens during the storming stage?",
          options: [
            "Team works at peak efficiency",
            "Differences emerge and conflicts may arise",
            "Team celebrates completion",
            "Trust is fully established"
          ],
          correctAnswer: 1,
          explanation: "Storming is when team members' differences surface, potentially causing conflict."
        },
        {
          id: 3,
          question: "What should leaders do during the forming stage?",
          options: [
            "Step back completely",
            "Provide clear direction and structure",
            "Focus only on social activities",
            "Let conflicts resolve themselves"
          ],
          correctAnswer: 1,
          explanation: "In forming, teams need clear direction and structure as they're just starting."
        },
        {
          id: 4,
          question: "What is psychological safety?",
          options: [
            "Physical workplace security",
            "Feeling safe to ask questions and admit mistakes",
            "Guaranteed job security",
            "Having all answers in advance"
          ],
          correctAnswer: 1,
          explanation: "Psychological safety means feeling secure enough to be vulnerable without fear."
        },
        {
          id: 5,
          question: "How can leaders build psychological safety?",
          options: [
            "By never admitting mistakes",
            "By admitting their own mistakes first",
            "By punishing all errors",
            "By having all the answers"
          ],
          correctAnswer: 1,
          explanation: "Leaders modeling vulnerability by admitting mistakes encourages others to do the same."
        },
        {
          id: 6,
          question: "What should effective delegation consider?",
          options: [
            "Only what's fastest for completion",
            "Matching tasks to development needs",
            "Keeping all important tasks for yourself",
            "Delegating only boring tasks"
          ],
          correctAnswer: 1,
          explanation: "Good delegation considers what tasks will help team members grow and develop."
        },
        {
          id: 7,
          question: "What should you provide when delegating?",
          options: [
            "Vague instructions to encourage creativity",
            "Clear expectations of what success looks like",
            "No supervision or check-ins",
            "Complete autonomy from the start"
          ],
          correctAnswer: 1,
          explanation: "Clear expectations help people understand what they need to achieve."
        },
        {
          id: 8,
          question: "When should conflicts be addressed?",
          options: [
            "Only during annual reviews",
            "After they become major problems",
            "Early, before they fester",
            "Never - they resolve themselves"
          ],
          correctAnswer: 2,
          explanation: "Addressing conflicts early prevents them from growing into larger issues."
        },
        {
          id: 9,
          question: "What should conflict resolution focus on?",
          options: [
            "Who is right and who is wrong",
            "Underlying interests and needs",
            "Proving your point",
            "Avoiding the issue"
          ],
          correctAnswer: 1,
          explanation: "Focusing on interests (needs) rather than positions (demands) leads to better solutions."
        },
        {
          id: 10,
          question: "What should recognition be?",
          options: [
            "Generic and vague",
            "Specific and timely",
            "Saved for annual events",
            "Only about final outcomes"
          ],
          correctAnswer: 1,
          explanation: "Specific recognition that comes soon after achievements is most meaningful."
        },
        {
          id: 11,
          question: "What happens during the norming stage?",
          options: [
            "Team disbands",
            "Agreements form and trust builds",
            "Major conflicts erupt",
            "Productivity declines"
          ],
          correctAnswer: 1,
          explanation: "Norming is when teams establish working agreements and build trust."
        },
        {
          id: 12,
          question: "What does performing stage look like?",
          options: [
            "Team works efficiently toward goals",
            "Constant supervision needed",
            "High conflict and tension",
            "Minimal communication"
          ],
          correctAnswer: 0,
          explanation: "Performing teams work effectively with minimal supervision toward shared goals."
        },
        {
          id: 13,
          question: "How should leaders act during performing stage?",
          options: [
            "Micromanage all tasks",
            "Empower and get out of the way",
            "Create more rules",
            "Focus on finding problems"
          ],
          correctAnswer: 1,
          explanation: "High-performing teams need empowerment rather than micromanagement."
        },
        {
          id: 14,
          question: "What helps build psychological safety?",
          options: [
            "Punishing all mistakes",
            "Treating failures as learning opportunities",
            "Expecting perfection",
            "Criticizing publicly"
          ],
          correctAnswer: 1,
          explanation: "Viewing failures as chances to learn encourages risk-taking and innovation."
        },
        {
          id: 15,
          question: "What should delegation include?",
          options: [
            "Taking back tasks at first difficulty",
            "Granting appropriate authority",
            "Checking every small decision",
            "Completing the task for them"
          ],
          correctAnswer: 1,
          explanation: "Delegation should include the authority needed to complete the task successfully."
        },
        {
          id: 16,
          question: "What should you do when delegating?",
          options: [
            "Offer support without taking over",
            "Do the task alongside them",
            "Ignore them completely",
            "Take over at first mistake"
          ],
          correctAnswer: 0,
          explanation: "Being available for support without taking over builds confidence and capability."
        },
        {
          id: 17,
          question: "What leads to better decisions?",
          options: [
            "Avoiding all conflict",
            "Healthy, well-managed conflict",
            "One person deciding everything",
            "Ignoring different opinions"
          ],
          correctAnswer: 1,
          explanation: "Healthy conflict considering diverse views typically leads to better decisions."
        },
        {
          id: 18,
          question: "What should solutions be based on?",
          options: [
            "Who argues best",
            "Objective criteria everyone agrees on",
            "The leader's preference",
            "What's been done before"
          ],
          correctAnswer: 1,
          explanation: "Using objective criteria helps make decisions fair and acceptable to all."
        },
        {
          id: 19,
          question: "How should recognition be given?",
          options: [
            "Only in private",
            "Only in public",
            "Mixed between public and private",
            "Only written, never spoken"
          ],
          correctAnswer: 2,
          explanation: "Different people appreciate recognition differently, so a mix works best."
        },
        {
          id: 20,
          question: "What makes recognition authentic?",
          options: [
            "Using formal language",
            "Meaning what you say",
            "Following a schedule",
            "Comparing to others"
          ],
          correctAnswer: 1,
          explanation: "Authentic recognition comes from genuine appreciation, not just obligation."
        }
      ]
    },
    {
      id: 4,
      title: "Decision Making and Problem Solving",
      content: `# Leading Through Decisions

**Decision-making** is a core leadership responsibility. Good decisions move organizations forward while building team confidence.

## The Decision-Making Process

Follow these steps for better decisions:

1. **Define the problem clearly** - What exactly needs deciding?
2. **Gather relevant information** - What do we need to know?
3. **Identify alternatives** - What are our possible choices?
4. **Evaluate options** - What are pros and cons of each?
5. **Choose the best alternative** - Which option best meets our criteria?
6. **Take action** - Implement the decision
7. **Review results** - What can we learn from the outcome?

## When to Involve Your Team

Different decisions need different approaches:

- **Autocratic decisions** - You decide alone (for urgent or confidential matters)
- **Consultative decisions** - You gather input, then decide
- **Collaborative decisions** - You decide together with the team
- **Delegated decisions** - Team members decide within guidelines

Consider:
- **Time available** - How urgent is the decision?
- **Team expertise** - Who has relevant knowledge?
- **Implementation needs** - Who will carry out the decision?
- **Development goals** - Who needs this decision-making experience?

## Avoiding Common Decision Traps

Watch out for these thinking errors:

- **Confirmation bias** - Only seeing information that supports your existing view
- **Anchoring** - Being overly influenced by the first information received
- **Overconfidence** - Thinking you know more than you actually do
- **Groupthink** - Going along with the group without critical thinking

## Problem-Solving Framework

Use this structured approach for complex problems:

1. **Identify the real problem** - Look beyond symptoms to root causes
2. **Break it into parts** - What are the components of this problem?
3. **Generate multiple solutions** - Brainstorm without judging ideas first
4. **Evaluate and select** - Which solutions address root causes?
5. **Create action plan** - Who will do what by when?
6. **Implement and monitor** - Put solution into action and track progress

## Risk Assessment for Decisions

Before committing to a decision, consider:

- **What could go wrong?** - Identify potential negative outcomes
- **How likely are these risks?** - Estimate probability
- **How severe would impacts be?** - Assess consequences
- **How can we mitigate risks?** - Plan to reduce negative possibilities

## Learning from Decisions

Every decision offers learning opportunities:

- **Review outcomes objectively** - What actually happened?
- **Separate process from outcome** - Good process can still lead to poor results
- **Document lessons learned** - What would we do differently next time?
- **Share insights** - Help others learn from your experience`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in decision-making?",
          options: [
            "Choose the best alternative",
            "Define the problem clearly",
            "Gather information",
            "Take action"
          ],
          correctAnswer: 1,
          explanation: "Clearly defining what needs deciding sets the foundation for good decisions."
        },
        {
          id: 2,
          question: "What should you do after gathering information?",
          options: [
            "Immediately choose a solution",
            "Identify possible alternatives",
            "Implement the first idea",
            "Delegate to someone else"
          ],
          correctAnswer: 1,
          explanation: "Generating multiple alternatives before choosing leads to better decisions."
        },
        {
          id: 3,
          question: "When should you make autocratic decisions?",
          options: [
            "For all decisions",
            "For urgent or confidential matters",
            "When you want to develop your team",
            "When the team disagrees"
          ],
          correctAnswer: 1,
          explanation: "Autocratic decisions (made alone) are appropriate for urgent situations or confidential matters."
        },
        {
          id: 4,
          question: "What is consultative decision-making?",
          options: [
            "Team decides completely independently",
            "You gather input, then decide yourself",
            "Everyone must agree completely",
            "Decisions are made by outside experts"
          ],
          correctAnswer: 1,
          explanation: "Consultative approach involves seeking input but the leader makes the final decision."
        },
        {
          id: 5,
          question: "What is confirmation bias?",
          options: [
            "Seeking diverse opinions",
            "Only seeing information that supports your existing view",
            "Changing your mind too easily",
            "Considering all options equally"
          ],
          correctAnswer: 1,
          explanation: "Confirmation bias is favoring information that confirms what you already believe."
        },
        {
          id: 6,
          question: "What is anchoring in decision-making?",
          options: [
            "Being firmly committed to goals",
            "Being overly influenced by first information received",
            "Considering all perspectives",
            "Making decisions slowly"
          ],
          correctAnswer: 1,
          explanation: "Anchoring happens when initial information disproportionately influences your thinking."
        },
        {
          id: 7,
          question: "What is groupthink?",
          options: [
            "Healthy team discussion",
            "Going along with the group without critical thinking",
            "Individual decision making",
            "Systematic analysis"
          ],
          correctAnswer: 1,
          explanation: "Groupthink occurs when people conform to group opinions rather than thinking independently."
        },
        {
          id: 8,
          question: "What is the first step in problem-solving?",
          options: [
            "Generate solutions immediately",
            "Identify the real problem (root causes)",
            "Assign someone to fix it",
            "Look for quick fixes"
          ],
          correctAnswer: 1,
          explanation: "Finding the underlying root cause, not just symptoms, is crucial for effective problem-solving."
        },
        {
          id: 9,
          question: "What should you do when brainstorming solutions?",
          options: [
            "Critique each idea immediately",
            "Generate ideas without judging first",
            "Only consider proven solutions",
            "Limit to three options maximum"
          ],
          correctAnswer: 1,
          explanation: "Brainstorming works best when you generate many ideas first, then evaluate them later."
        },
        {
          id: 10,
          question: "What should risk assessment consider?",
          options: [
            "Only positive outcomes",
            "What could go wrong and how likely",
            "Ignoring all risks",
            "Only immediate consequences"
          ],
          correctAnswer: 1,
          explanation: "Good risk assessment looks at potential negatives, their likelihood, and severity."
        },
        {
          id: 11,
          question: "What is the final step in decision-making?",
          options: [
            "Forget about it and move on",
            "Review results and learn from them",
            "Blame others if it goes wrong",
            "Celebrate immediately"
          ],
          correctAnswer: 1,
          explanation: "Reviewing outcomes provides valuable learning for future decisions."
        },
        {
          id: 12,
          question: "What should you consider when deciding how to decide?",
          options: [
            "Only your personal preference",
            "Time available and team expertise",
            "What's easiest for you",
            "Avoiding all responsibility"
          ],
          correctAnswer: 1,
          explanation: "The decision-making approach should fit the situation's urgency and available expertise."
        },
        {
          id: 13,
          question: "What is collaborative decision-making?",
          options: [
            "Leader decides alone",
            "Team decides together with leader",
            "Outsider makes the decision",
            "No one takes responsibility"
          ],
          correctAnswer: 1,
          explanation: "Collaborative decisions involve the team working together with the leader to decide."
        },
        {
          id: 14,
          question: "What is overconfidence in decision-making?",
          options: [
            "Having appropriate confidence",
            "Thinking you know more than you actually do",
            "Being uncertain about everything",
            "Seeking too much advice"
          ],
          correctAnswer: 1,
          explanation: "Overconfidence means being more certain than the available information justifies."
        },
        {
          id: 15,
          question: "Why break problems into parts?",
          options: [
            "To make them seem bigger",
            "To understand components better",
            "To avoid solving them",
            "To assign blame more easily"
          ],
          correctAnswer: 1,
          explanation: "Breaking complex problems into smaller parts makes them more manageable and understandable."
        },
        {
          id: 16,
          question: "What should action plans include?",
          options: [
            "Vague intentions only",
            "Who will do what by when",
            "Only long-term goals",
            "Multiple conflicting directions"
          ],
          correctAnswer: 1,
          explanation: "Clear action plans specify responsibilities, actions, and timelines."
        },
        {
          id: 17,
          question: "What does risk mitigation mean?",
          options: [
            "Ignoring all risks",
            "Planning to reduce negative possibilities",
            "Only choosing risk-free options",
            "Transferring all risk to others"
          ],
          correctAnswer: 1,
          explanation: "Risk mitigation involves taking actions to lessen potential negative impacts."
        },
        {
          id: 18,
          question: "What should you separate when reviewing decisions?",
          options: [
            "Your feelings from facts",
            "Process from outcome",
            "Success from failure",
            "Your role from others' roles"
          ],
          correctAnswer: 1,
          explanation: "Good process can sometimes lead to poor outcomes, and vice versa."
        },
        {
          id: 19,
          question: "Why document lessons learned?",
          options: [
            "To blame people later",
            "To do better next time",
            "To create more paperwork",
            "To prove you were right"
          ],
          correctAnswer: 1,
          explanation: "Documenting lessons helps avoid repeating mistakes and builds organizational learning."
        },
        {
          id: 20,
          question: "What builds team confidence?",
          options: [
            "Only successful outcomes",
            "Good decision-making processes",
            "Avoiding all decisions",
            "Letting others decide everything"
          ],
          correctAnswer: 1,
          explanation: "Even when outcomes aren't perfect, good decision processes build trust and confidence."
        }
      ]
    },
    {
      id: 5,
      title: "Motivation and Influence",
      content: `# Inspiring Peak Performance

**Motivation** is the internal drive that leads to action. Leaders don't motivate people directly but create conditions where people motivate themselves.

## Understanding What Drives People

People are motivated by different factors:

- **Autonomy** - Desire to direct our own lives
- **Mastery** - Urge to get better at things that matter
- **Purpose** - Yearning to do something meaningful
- **Connection** - Need to belong and contribute to something larger
- **Recognition** - Want to be appreciated for contributions

## Creating Motivating Environments

Build workplaces where people want to do their best:

1. **Clarify purpose** - Connect daily work to meaningful goals
2. **Provide autonomy** - Give people control over how they work
3. **Enable mastery** - Create opportunities to learn and grow
4. **Build community** - Foster positive relationships and teamwork
5. **Ensure fairness** - Treat everyone with respect and equity

## The Art of Influence Without Authority

You can lead even without formal authority by:

- **Building relationships** - People support those they know and trust
- **Developing expertise** - Knowledge earns respect and credibility
- **Finding common ground** - Connect your goals to others' interests
- **Listening first** - Understand others before seeking to be understood
- **Giving before asking** - Help others succeed, and they'll help you

## Recognition That Really Motivates

Effective recognition:

- **Is specific** - "Great job on the client presentation because..."
- **Is timely** - Given soon after the achievement
- **Fits the person** - Some prefer public praise, others private thanks
- **Focuses on effort and growth** - Not just natural talent
- **Comes from authentic appreciation** - Not just obligation

## Dealing with Demotivation

When team members lose motivation:

1. **Listen without judging** - Understand their perspective
2. **Identify root causes** - Is it the work, relationships, environment, or personal factors?
3. **Explore solutions together** - What would make things better?
4. **Start with small changes** - Even small improvements can rebuild momentum
5. **Check in regularly** - Monitor progress and adjust as needed

## Building a Positive Team Culture

Culture is "how we do things around here." Shape it by:

- **Modeling desired behaviors** - Your actions speak loudest
- **Reinforcing positive actions** - Catch people doing things right
- **Addressing negative patterns** - Don't ignore behaviors that harm the culture
- **Creating rituals and traditions** - Regular positive practices build culture
- **Telling stories** - Share examples of living your values

## Sustainable Motivation Strategies

Avoid motivation that burns out quickly:

- **Focus on intrinsic motivators** - Internal drives last longer than external rewards
- **Balance challenge and support** - Enough challenge to engage, enough support to succeed
- **Celebrate progress, not just perfection** - Recognize steps forward
- **Connect to personal values** - Help people see how work aligns with what matters to them
- **Maintain energy balance** - Prevent burnout with reasonable demands`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do leaders actually do regarding motivation?",
          options: [
            "Directly motivate people",
            "Create conditions where people motivate themselves",
            "Force people to work harder",
            "Use only financial incentives"
          ],
          correctAnswer: 1,
          explanation: "Leaders create environments where people find their own motivation to excel."
        },
        {
          id: 2,
          question: "What is autonomy in motivation?",
          options: [
            "Following strict rules",
            "Desire to direct our own lives",
            "Working completely alone",
            "Avoiding all supervision"
          ],
          correctAnswer: 1,
          explanation: "Autonomy is the human need to have control over our own actions and decisions."
        },
        {
          id: 3,
          question: "What is mastery as a motivator?",
          options: [
            "Being the boss",
            "Urge to get better at things that matter",
            "Controlling others",
            "Earning more money"
          ],
          correctAnswer: 1,
          explanation: "Mastery is the desire to improve at skills and work that are important to us."
        },
        {
          id: 4,
          question: "What should leaders clarify to create purpose?",
          options: [
            "Only daily tasks",
            "How daily work connects to meaningful goals",
            "Complex procedures",
            "All the rules and policies"
          ],
          correctAnswer: 1,
          explanation: "People are motivated when they see how their work contributes to something meaningful."
        },
        {
          id: 5,
          question: "How can you influence without formal authority?",
          options: [
            "By threatening people",
            "By building relationships and trust",
            "By ignoring others' opinions",
            "By demanding compliance"
          ],
          correctAnswer: 1,
          explanation: "Building genuine relationships creates influence regardless of formal position."
        },
        {
          id: 6,
          question: "What builds credibility for influence?",
          options: [
            "Having a fancy title",
            "Developing expertise and knowledge",
            "Being friends with the boss",
            "Working the longest hours"
          ],
          correctAnswer: 1,
          explanation: "Expertise and competence earn respect that creates influence."
        },
        {
          id: 7,
          question: "What should effective recognition be?",
          options: [
            "General and vague",
            "Specific and timely",
            "Saved for annual reviews",
            "Only about final outcomes"
          ],
          correctAnswer: 1,
          explanation: "Specific recognition given soon after achievements has the most impact."
        },
        {
          id: 8,
          question: "What should you do first with demotivated team members?",
          options: [
            "Give them a warning",
            "Listen without judging to understand",
            "Assign more work",
            "Ignore the problem"
          ],
          correctAnswer: 1,
          explanation: "Listening without judgment helps understand the real issues behind demotivation."
        },
        {
          id: 9,
          question: "What is team culture?",
          options: [
            "The office decoration",
            "How we do things around here",
            "The company logo",
            "The organizational chart"
          ],
          correctAnswer: 1,
          explanation: "Culture encompasses the shared behaviors, values, and practices of a group."
        },
        {
          id: 10,
          question: "How do leaders shape culture most effectively?",
          options: [
            "Through written policies only",
            "By modeling desired behaviors themselves",
            "By punishing wrong behaviors",
            "Through frequent meetings"
          ],
          correctAnswer: 1,
          explanation: "Leaders' own actions demonstrate what's truly valued more than any written words."
        },
        {
          id: 11,
          question: "What is purpose as a motivator?",
          options: [
            "Making more money",
            "Yearning to do something meaningful",
            "Getting promoted",
            "Having power over others"
          ],
          correctAnswer: 1,
          explanation: "Purpose is the human need to contribute to something larger than ourselves."
        },
        {
          id: 12,
          question: "How do you provide autonomy?",
          options: [
            "By giving people control over how they work",
            "By removing all guidance",
            "By checking every detail",
            "By making all decisions for them"
          ],
          correctAnswer: 0,
          explanation: "Autonomy means giving people choices about how to accomplish their work."
        },
        {
          id: 13,
          question: "What is a key to influencing others?",
          options: [
            "Talking more than listening",
            "Finding common ground and shared interests",
            "Being the most dominant person",
            "Never compromising"
          ],
          correctAnswer: 1,
          explanation: "Connecting your goals to what matters to others builds willing support."
        },
        {
          id: 14,
          question: "What helps with influence?",
          options: [
            "Asking for help immediately",
            "Giving help before asking for it",
            "Keeping score of favors",
            "Helping only when asked"
          ],
          correctAnswer: 1,
          explanation: "Helping others succeed creates goodwill that makes them more willing to support you."
        },
        {
          id: 15,
          question: "What should recognition focus on?",
          options: [
            "Only natural talent",
            "Effort and growth demonstrated",
            "Comparing to others",
            "Future potential only"
          ],
          correctAnswer: 1,
          explanation: "Recognizing effort and improvement encourages continued growth and engagement."
        },
        {
          id: 16,
          question: "What should you explore with demotivated team members?",
          options: [
            "Who to blame",
            "Solutions together",
            "Their personal life details",
            "Their weaknesses"
          ],
          correctAnswer: 1,
          explanation: "Collaborative problem-solving builds ownership of solutions."
        },
        {
          id: 17,
          question: "How do you reinforce positive culture?",
          options: [
            "By catching people doing things right",
            "By only noticing problems",
            "By changing rules frequently",
            "By being unpredictable"
          ],
          correctAnswer: 0,
          explanation: "Noticing and acknowledging positive behaviors encourages more of them."
        },
        {
          id: 18,
          question: "What creates sustainable motivation?",
          options: [
            "Only external rewards",
            "Focusing on intrinsic motivators",
            "Constant pressure",
            "Fear of consequences"
          ],
          correctAnswer: 1,
          explanation: "Intrinsic motivation (internal drives) lasts longer than extrinsic rewards."
        },
        {
          id: 19,
          question: "What should be balanced for sustainable motivation?",
          options: [
            "Work and personal life completely separate",
            "Challenge and support appropriately",
            "Allowing complete freedom",
            "Constant easy tasks"
          ],
          correctAnswer: 1,
          explanation: "Enough challenge engages people, while enough support helps them succeed."
        },
        {
          id: 20,
          question: "What helps prevent burnout?",
          options: [
            "Working longer hours",
            "Maintaining reasonable energy balance",
            "Ignoring tiredness",
            "Taking work home daily"
          ],
          correctAnswer: 1,
          explanation: "Sustainable performance requires balancing energy expenditure with recovery."
        }
      ]
    },
    {
      id: 6,
      title: "Ethical Leadership and Personal Growth",
      content: `# Leading with Integrity

**Ethical leadership** means doing the right thing, even when no one is watching. It builds trust that enables everything else.

## Core Ethical Principles for Leaders

1. **Honesty** - Telling the truth consistently
2. **Integrity** - Actions matching words
3. **Fairness** - Treating people equitably
4. **Respect** - Valuing every person's dignity
5. **Responsibility** - Taking ownership of decisions and impacts
6. **Courage** - Doing what's right despite difficulty

## Making Ethical Decisions

When facing ethical dilemmas:

1. **Gather facts** - What do we know for certain?
2. **Identify stakeholders** - Who is affected by this decision?
3. **Consider alternatives** - What options do we have?
4. **Evaluate against principles** - Which option aligns with our values?
5. **Make and implement decision** - Choose and act with conviction
6. **Reflect and learn** - What can we learn from this situation?

## Building Trust as a Leader

Trust develops through consistent behavior:

- **Do what you say you'll do** - Keep promises and commitments
- **Be transparent** - Share information appropriately
- **Admit mistakes** - Take responsibility when wrong
- **Be consistent** - Treat similar situations similarly
- **Show concern for others** - Demonstrate genuine care

## Continuous Self-Development

Great leaders never stop growing:

- **Seek feedback regularly** - Ask "How can I improve?"
- **Reflect on experiences** - What worked? What would I do differently?
- **Learn from others** - Observe both good and bad leadership examples
- **Read and study** - Continuously expand your knowledge
- **Practice new skills** - Try different approaches in safe situations

## Resilience and Self-Care

Leadership can be demanding. Maintain your effectiveness by:

- **Setting boundaries** - Know when to work and when to rest
- **Managing energy, not just time** - Notice what drains and renews you
- **Building support networks** - Connect with other leaders
- **Practicing self-compassion** - Be as kind to yourself as to others
- **Maintaining perspective** - Remember what truly matters

## Creating Your Leadership Philosophy

Articulate what you stand for:

- **What are your core values?** - What principles guide your decisions?
- **What is your leadership purpose?** - Why do you want to lead?
- **How do you want people to feel?** - What experience do you want to create?
- **What legacy do you want to leave?** - How do you want to be remembered?
- **How will you continue growing?** - What's your development plan?

## Leading Through Change and Uncertainty

When things are unclear:

- **Provide stability** - Be a calm, steady presence
- **Communicate frequently** - Share what you know and what you don't
- **Involve your team** - Collaborate on navigating challenges
- **Focus on what you can control** - Don't waste energy on what you can't change
- **Maintain optimism** - Believe in your team's ability to adapt

## Your Leadership Journey Ahead

Remember that leadership development is ongoing:

- **Start where you are** - Use what you have, where you are
- **Take small steps** - Consistent small improvements add up
- **Learn from setbacks** - Mistakes are tuition for learning
- **Celebrate progress** - Notice how far you've come
- **Keep growing** - The best leaders are always learning`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is ethical leadership?",
          options: [
            "Following all rules exactly",
            "Doing the right thing even when no one is watching",
            "Making the most profitable decisions",
            "Always putting the organization first"
          ],
          correctAnswer: 1,
          explanation: "Ethical leadership means choosing right actions based on principles, not just rules or convenience."
        },
        {
          id: 2,
          question: "What does integrity mean?",
          options: [
            "Being popular with everyone",
            "Actions matching words consistently",
            "Never making mistakes",
            "Always agreeing with others"
          ],
          correctAnswer: 1,
          explanation: "Integrity is alignment between what you say and what you do."
        },
        {
          id: 3,
          question: "What is the first step in ethical decision-making?",
          options: [
            "Choose the easiest option",
            "Gather facts about the situation",
            "Ask what your boss would do",
            "Consider only profits"
          ],
          correctAnswer: 1,
          explanation: "Good ethical decisions start with understanding what's actually happening."
        },
        {
          id: 4,
          question: "Who should you consider in ethical decisions?",
          options: [
            "Only shareholders",
            "All affected stakeholders",
            "Only yourself",
            "Only senior management"
          ],
          correctAnswer: 1,
          explanation: "Ethical decisions consider impacts on all people affected by the decision."
        },
        {
          id: 5,
          question: "How is trust built?",
          options: [
            "Through dramatic gestures",
            "Through consistent behavior over time",
            "Through perfect performance",
            "Through personal friendships"
          ],
          correctAnswer: 1,
          explanation: "Trust develops gradually through reliable, predictable actions."
        },
        {
          id: 6,
          question: "What demonstrates transparency?",
          options: [
            "Keeping all information secret",
            "Sharing information appropriately",
            "Revealing confidential details",
            "Hiding mistakes"
          ],
          correctAnswer: 1,
          explanation: "Transparency means being open about information that others need or deserve to know."
        },
        {
          id: 7,
          question: "How should leaders approach self-development?",
          options: [
            "Think they already know enough",
            "Seek feedback regularly for improvement",
            "Only learn from successes",
            "Copy others exactly"
          ],
          correctAnswer: 1,
          explanation: "Continuous improvement requires actively seeking input on how to get better."
        },
        {
          id: 8,
          question: "What helps with resilience?",
          options: [
            "Working constantly without breaks",
            "Setting appropriate boundaries",
            "Ignoring personal needs",
            "Taking on all responsibilities"
          ],
          correctAnswer: 1,
          explanation: "Boundaries help maintain energy and prevent burnout."
        },
        {
          id: 9,
          question: "What should a leadership philosophy include?",
          options: [
            "Only business goals",
            "Core values and purpose",
            "Detailed procedures",
            "Financial targets only"
          ],
          correctAnswer: 1,
          explanation: "A leadership philosophy articulates your guiding principles and reasons for leading."
        },
        {
          id: 10,
          question: "How should leaders act during uncertainty?",
          options: [
            "Hide all concerns",
            "Provide stability and calm presence",
            "Create more uncertainty",
            "Avoid making decisions"
          ],
          correctAnswer: 1,
          explanation: "In uncertain times, leaders provide psychological stability for their teams."
        },
        {
          id: 11,
          question: "What does fairness in leadership mean?",
          options: [
            "Treating everyone exactly the same",
            "Treating people equitably according to needs",
            "Giving favorites better treatment",
            "Ignoring individual circumstances"
          ],
          correctAnswer: 1,
          explanation: "Fairness considers what's just and appropriate in each situation."
        },
        {
          id: 12,
          question: "What demonstrates responsibility?",
          options: [
            "Blaming others for problems",
            "Taking ownership of decisions and impacts",
            "Avoiding difficult decisions",
            "Delegating all accountability"
          ],
          correctAnswer: 1,
          explanation: "Responsibility means accepting consequences for your choices and actions."
        },
        {
          id: 13,
          question: "What should ethical decisions align with?",
          options: [
            "Only legal requirements",
            "Your values and principles",
            "Whatever is popular",
            "Short-term gains"
          ],
          correctAnswer: 1,
          explanation: "Ethical decisions should reflect your core values, not just external pressures."
        },
        {
          id: 14,
          question: "What builds trust through consistency?",
          options: [
            "Treating similar situations completely differently",
            "Treating similar situations similarly",
            "Changing standards frequently",
            "Making exceptions for favorites"
          ],
          correctAnswer: 1,
          explanation: "Consistent treatment creates predictability that builds trust."
        },
        {
          id: 15,
          question: "How can leaders learn from experiences?",
          options: [
            "By repeating the same actions",
            "By reflecting on what worked and what didn't",
            "By forgetting past mistakes",
            "By blaming circumstances"
          ],
          correctAnswer: 1,
          explanation: "Reflection turns experiences into learning opportunities."
        },
        {
          id: 16,
          question: "What helps manage energy?",
          options: [
            "Ignoring tiredness signals",
            "Noticing what drains and renews you",
            "Working through exhaustion",
            "Drinking more caffeine"
          ],
          correctAnswer: 1,
          explanation: "Energy management involves understanding and respecting your natural rhythms."
        },
        {
          id: 17,
          question: "What does leadership legacy refer to?",
          options: [
            "Financial success only",
            "How you want to be remembered",
            "Number of promotions received",
            "Size of team managed"
          ],
          correctAnswer: 1,
          explanation: "Legacy is the lasting impact and memory of your leadership."
        },
        {
          id: 18,
          question: "How should you communicate during change?",
          options: [
            "Only when everything is certain",
            "Frequently about what you know and don't know",
            "Only positive information",
            "Through formal channels only"
          ],
          correctAnswer: 1,
          explanation: "During change, frequent communication reduces uncertainty and anxiety."
        },
        {
          id: 19,
          question: "What helps in navigating uncertainty?",
          options: [
            "Trying to control everything",
            "Focusing on what you can control",
            "Worrying about all possibilities",
            "Waiting for complete certainty"
          ],
          correctAnswer: 1,
          explanation: "Focusing energy on controllable factors is more productive than worrying about uncontrollables."
        },
        {
          id: 20,
          question: "How should leadership development continue?",
          options: [
            "Stop after reaching a certain position",
            "As an ongoing journey of learning",
            "Only through formal education",
            "By copying one successful leader"
          ],
          correctAnswer: 1,
          explanation: "Effective leadership requires continuous learning and adaptation throughout your career."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Leadership Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of leadership fundamentals",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three core elements of leadership?",
        options: [
          "Planning, organizing, controlling",
          "Vision, influence, and service",
          "Authority, power, and control",
          "Communication, delegation, evaluation"
        ],
        correctAnswer: 1,
        explanation: "Module 1: Vision (direction), influence (willing followership), and service (caring for others) are the core elements."
      },
      {
        id: 2,
        question: "What is the main difference between leadership and management?",
        options: [
          "Leaders earn more money",
          "Leaders focus on people, managers on systems",
          "Management is more important",
          "Leaders don't need technical skills"
        ],
        correctAnswer: 1,
        explanation: "Module 1: Leaders inspire people and create change, while managers maintain systems and ensure efficiency."
      },
      {
        id: 3,
        question: "What should you do when practicing active listening?",
        options: [
          "Plan your reply while they talk",
          "Give full attention and focus completely",
          "Finish their sentences",
          "Check your phone occasionally"
        ],
        correctAnswer: 1,
        explanation: "Module 2: Active listening requires complete focus on the speaker without distractions."
      },
      {
        id: 4,
        question: "What should effective feedback focus on?",
        options: [
          "Personality traits",
          "Observable behaviors",
          "Past mistakes only",
          "Comparisons to others"
        ],
        correctAnswer: 1,
        explanation: "Module 2: Feedback should address specific, observable behaviors that can be changed."
      },
      {
        id: 5,
        question: "What is the first stage of team development?",
        options: [
          "Storming",
          "Norming",
          "Forming",
          "Performing"
        ],
        correctAnswer: 2,
        explanation: "Module 3: Forming is when team members first come together and are typically polite and uncertain."
      },
      {
        id: 6,
        question: "What is psychological safety?",
        options: [
          "Physical security at work",
          "Feeling safe to ask questions and admit mistakes",
          "Guaranteed employment",
          "Having insurance coverage"
        ],
        correctAnswer: 1,
        explanation: "Module 3: Psychological safety means feeling secure enough to be vulnerable without negative consequences."
      },
      {
        id: 7,
        question: "What is the first step in decision-making?",
        options: [
          "Choose immediately",
          "Define the problem clearly",
          "Ask for opinions",
          "Consider costs"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Clearly defining what needs deciding is crucial for good decision-making."
      },
      {
        id: 8,
        question: "What is confirmation bias?",
        options: [
          "Seeking diverse opinions",
          "Only seeing information that supports your existing view",
          "Changing your mind frequently",
          "Being uncertain about everything"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Confirmation bias is favoring information that confirms what you already believe."
      },
      {
        id: 9,
        question: "What do leaders actually do regarding motivation?",
        options: [
          "Directly motivate people",
          "Create conditions where people motivate themselves",
          "Use only financial incentives",
          "Force people to work harder"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Leaders create environments where people find their own internal motivation."
      },
      {
        id: 10,
        question: "What is autonomy as a motivator?",
        options: [
          "Following strict rules",
          "Desire to direct our own lives",
          "Working completely alone",
          "Avoiding teamwork"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Autonomy is the human need to have control over our own actions and decisions."
      },
      {
        id: 11,
        question: "What is ethical leadership?",
        options: [
          "Following all laws exactly",
          "Doing the right thing even when no one is watching",
          "Always maximizing profits",
          "Doing what your boss says"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Ethical leadership means choosing right actions based on principles."
      },
      {
        id: 12,
        question: "How is trust primarily built?",
        options: [
          "Through dramatic speeches",
          "Through consistent behavior over time",
          "Through perfect performance",
          "Through personal friendships"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Trust develops gradually through reliable, predictable actions."
      },
      {
        id: 13,
        question: "What should leaders provide during uncertainty?",
        options: [
          "Complete certainty",
          "Stability and calm presence",
          "Constant change",
          "Avoidance of decisions"
        ],
        correctAnswer: 1,
        explanation: "Module 6: In uncertain times, leaders provide psychological stability."
      },
      {
        id: 14,
        question: "What should you do when delegating effectively?",
        options: [
          "Take over at first difficulty",
          "Provide clear expectations",
          "Check every small decision",
          "Complete the task for them"
        ],
        correctAnswer: 1,
        explanation: "Module 3: Clear expectations help people understand what success looks like."
      },
      {
        id: 15,
        question: "What is the performing stage of team development?",
        options: [
          "Team works efficiently toward goals",
          "Constant conflict occurs",
          "Team is just forming",
          "Team is ending"
        ],
        correctAnswer: 0,
        explanation: "Module 3: Performing teams work effectively with minimal supervision."
      },
      {
        id: 16,
        question: "When should you make autocratic decisions?",
        options: [
          "For all decisions",
          "For urgent or confidential matters",
          "To develop your team",
          "When team disagrees"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Autocratic decisions are appropriate for urgent situations."
      },
      {
        id: 17,
        question: "What is groupthink?",
        options: [
          "Healthy team discussion",
          "Going along with the group without critical thinking",
          "Individual decision making",
          "Systematic analysis"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Groupthink occurs when people conform rather than think independently."
      },
      {
        id: 18,
        question: "How can you influence without formal authority?",
        options: [
          "By threatening people",
          "By building relationships and trust",
          "By ignoring others",
          "By demanding compliance"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Building genuine relationships creates influence."
      },
      {
        id: 19,
        question: "What should recognition focus on?",
        options: [
          "Only natural talent",
          "Effort and growth demonstrated",
          "Comparing to others",
          "Future potential only"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Recognizing effort encourages continued growth."
      },
      {
        id: 20,
        question: "What does integrity mean?",
        options: [
          "Being popular",
          "Actions matching words consistently",
          "Never making mistakes",
          "Always agreeing"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Integrity is alignment between what you say and do."
      },
      {
        id: 21,
        question: "What should you do first with demotivated team members?",
        options: [
          "Give warning",
          "Listen without judging",
          "Assign more work",
          "Ignore problem"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Listening helps understand real issues behind demotivation."
      },
      {
        id: 22,
        question: "What is team culture?",
        options: [
          "Office decoration",
          "How we do things around here",
          "Company logo",
          "Organizational chart"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Culture encompasses shared behaviors and values."
      },
      {
        id: 23,
        question: "What is the storming stage of team development?",
        options: [
          "Team works efficiently",
          "Differences emerge and conflicts may arise",
          "Team celebrates completion",
          "Trust is fully established"
        ],
        correctAnswer: 1,
        explanation: "Module 3: Storming is when differences surface, potentially causing conflict."
      },
      {
        id: 24,
        question: "What should conflict resolution focus on?",
        options: [
          "Who is right",
          "Underlying interests and needs",
          "Proving your point",
          "Avoiding the issue"
        ],
        correctAnswer: 1,
        explanation: "Module 3: Focusing on interests leads to better solutions."
      },
      {
        id: 25,
        question: "What is mastery as a motivator?",
        options: [
          "Being the boss",
          "Urge to get better at things that matter",
          "Controlling others",
          "Earning money"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Mastery is desire to improve at important skills."
      },
      {
        id: 26,
        question: "What builds credibility for influence?",
        options: [
          "Fancy title",
          "Developing expertise",
          "Being friends with boss",
          "Longest hours"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Expertise earns respect that creates influence."
      },
      {
        id: 27,
        question: "What is the first step in ethical decision-making?",
        options: [
          "Choose easiest option",
          "Gather facts",
          "Ask what boss would do",
          "Consider only profits"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Good decisions start with understanding the situation."
      },
      {
        id: 28,
        question: "How should leaders approach self-development?",
        options: [
          "Think they know enough",
          "Seek feedback regularly",
          "Only learn from successes",
          "Copy others exactly"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Continuous improvement requires seeking input."
      },
      {
        id: 29,
        question: "What helps with resilience?",
        options: [
          "Working without breaks",
          "Setting boundaries",
          "Ignoring needs",
          "Taking on everything"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Boundaries help maintain energy."
      },
      {
        id: 30,
        question: "What does fairness in leadership mean?",
        options: [
          "Treating everyone exactly same",
          "Treating equitably according to needs",
          "Giving favorites better treatment",
          "Ignoring circumstances"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Fairness considers what's just in each situation."
      },
      {
        id: 31,
        question: "What should be done after gathering decision information?",
        options: [
          "Choose immediately",
          "Identify alternatives",
          "Implement first idea",
          "Delegate to someone"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Generating alternatives before choosing leads to better decisions."
      },
      {
        id: 32,
        question: "What is consultative decision-making?",
        options: [
          "Team decides independently",
          "Gather input, then decide yourself",
          "Everyone must agree",
          "Outside experts decide"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Consultative approach involves seeking input but leader decides."
      },
      {
        id: 33,
        question: "What is anchoring in decision-making?",
        options: [
          "Being committed to goals",
          "Overly influenced by first information",
          "Considering all perspectives",
          "Making decisions slowly"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Anchoring happens when initial information disproportionately influences thinking."
      },
      {
        id: 34,
        question: "What is the first step in problem-solving?",
        options: [
          "Generate solutions",
          "Identify real problem",
          "Assign someone",
          "Look for quick fixes"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Finding root causes is crucial for effective problem-solving."
      },
      {
        id: 35,
        question: "What should action plans include?",
        options: [
          "Vague intentions",
          "Who will do what by when",
          "Only long-term goals",
          "Conflicting directions"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Clear action plans specify responsibilities and timelines."
      },
      {
        id: 36,
        question: "What does risk mitigation mean?",
        options: [
          "Ignoring all risks",
          "Planning to reduce negatives",
          "Only risk-free options",
          "Transferring all risk"
        ],
        correctAnswer: 1,
        explanation: "Module 4: Risk mitigation involves actions to lessen potential negative impacts."
      },
      {
        id: 37,
        question: "What creates sustainable motivation?",
        options: [
          "Only external rewards",
          "Focusing on intrinsic motivators",
          "Constant pressure",
          "Fear of consequences"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Intrinsic motivation lasts longer than extrinsic rewards."
      },
      {
        id: 38,
        question: "What helps prevent burnout?",
        options: [
          "Working longer hours",
          "Maintaining energy balance",
          "Ignoring tiredness",
          "Taking work home"
        ],
        correctAnswer: 1,
        explanation: "Module 5: Sustainable performance requires balancing energy."
      },
      {
        id: 39,
        question: "What does leadership legacy refer to?",
        options: [
          "Financial success",
          "How you want to be remembered",
          "Number of promotions",
          "Size of team"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Legacy is the lasting impact of your leadership."
      },
      {
        id: 40,
        question: "How should leadership development continue?",
        options: [
          "Stop after certain position",
          "As ongoing journey",
          "Only formal education",
          "Copying one leader"
        ],
        correctAnswer: 1,
        explanation: "Module 6: Effective leadership requires continuous learning."
      }
    ]
  }
};

export default leadershipCertificateCourse;v
