export const lifeCoachingCertificate = {
  id: "life-coaching-certificate",
  title: "Life Coaching (Certificate)",
  description: "A comprehensive introduction to life coaching fundamentals, teaching you how to help others achieve personal goals, overcome obstacles, and create positive life changes through proven coaching techniques.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🎯",
  badge: "Certificate",
  prerequisites: [],
  level: "Beginner",
  
  modules: [
    {
      id: 1,
      title: "What is Life Coaching?",
      content: `# Module 1: What is Life Coaching?

## Understanding the Coaching Profession

Life coaching is a collaborative partnership between coach and client. Unlike therapy which focuses on healing past wounds, coaching is future-oriented and action-focused. The coach helps clients clarify their vision, set meaningful goals, and create actionable plans.

**Key differences from other professions:**
- Therapy: Healing past issues and mental health treatment
- Consulting: Providing expert advice and solutions
- Mentoring: Sharing experience and guidance in specific fields
- Coaching: Facilitating client's own discovery and growth

## Three Core Coaching Principles

**1. The Client is Resourceful**
Coaches believe clients have their own answers. The coach's role is to ask powerful questions that help clients discover these answers themselves. This builds confidence and self-reliance.

**2. Coaching is About Action**
Every coaching session should lead to specific, manageable actions. Clients commit to taking steps between sessions, creating momentum and measurable progress.

**3. Focus on the Present and Future**
While acknowledging the past, coaching emphasizes what clients want to create going forward. This forward-looking approach empowers change.

## Common Coaching Niches

Life coaches often specialize in areas like:
- Career transitions and professional development
- Relationship and communication skills
- Health and wellness goals
- Time management and productivity
- Confidence building and mindset
- Life purpose and meaning

## The Coaching Conversation Structure

A typical coaching session follows this flow:
1. **Check-in**: How has the client been since last session?
2. **Topic selection**: What does the client want to work on today?
3. **Exploration**: Understanding the current situation and desired outcome
4. **Action planning**: Creating specific steps to move forward
5. **Accountability**: How will the client stay committed?
6. **Closing**: Summarizing insights and next actions

**Remember**: Coaching is not about giving advice. It's about helping clients find their own path forward through thoughtful questioning and active listening.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary focus of life coaching compared to therapy?",
          options: [
            "Healing past emotional wounds",
            "Providing expert medical advice",
            "Future-oriented goal achievement",
            "Diagnosing mental health conditions"
          ],
          correctAnswer: 2,
          explanation: "Life coaching is future-oriented and focuses on goal achievement, while therapy often addresses healing past issues."
        },
        {
          id: 2,
          question: "What is one of the three core coaching principles mentioned?",
          options: [
            "The coach has all the answers",
            "The client is resourceful",
            "Coaching should be free of charge",
            "All sessions must be 60 minutes"
          ],
          correctAnswer: 1,
          explanation: "The principle 'The Client is Resourceful' means coaches believe clients have their own answers within them."
        },
        {
          id: 3,
          question: "Which of these is NOT typically a coaching niche?",
          options: [
            "Career transitions",
            "Prescribing medication",
            "Time management",
            "Relationship skills"
          ],
          correctAnswer: 1,
          explanation: "Coaches do not prescribe medication - that falls under medical professionals' scope of practice."
        },
        {
          id: 4,
          question: "What happens during the 'Exploration' phase of a coaching conversation?",
          options: [
            "The coach gives direct advice",
            "Understanding current situation and desired outcome",
            "Setting the coaching fees",
            "The client listens passively"
          ],
          correctAnswer: 1,
          explanation: "The exploration phase involves understanding where the client is now and where they want to be."
        },
        {
          id: 5,
          question: "How is coaching different from consulting?",
          options: [
            "Coaching is always longer term",
            "Consultants provide expert solutions while coaches facilitate client discovery",
            "Coaching requires a medical degree",
            "Consulting is free while coaching is paid"
          ],
          correctAnswer: 1,
          explanation: "Consultants provide expert advice and solutions, while coaches help clients discover their own answers."
        },
        {
          id: 6,
          question: "What is the belief behind 'The Client is Resourceful' principle?",
          options: [
            "Clients need to be told what to do",
            "Clients have their own answers within them",
            "Only wealthy clients can be resourceful",
            "Resourcefulness cannot be developed"
          ],
          correctAnswer: 1,
          explanation: "This principle means clients have the capability and answers within themselves; the coach helps uncover them."
        },
        {
          id: 7,
          question: "What should every coaching session lead to?",
          options: [
            "A detailed psychological assessment",
            "Specific, manageable actions",
            "A certificate of completion",
            "Medical referral if needed"
          ],
          correctAnswer: 1,
          explanation: "Coaching is action-oriented, so each session should result in concrete steps the client will take."
        },
        {
          id: 8,
          question: "What is emphasized in coaching regarding time perspective?",
          options: [
            "Only analyzing past mistakes",
            "Present and future orientation",
            "Historical family patterns only",
            "Past successes exclusively"
          ],
          correctAnswer: 1,
          explanation: "Coaching focuses on the present situation and creating a better future, while acknowledging but not dwelling on the past."
        },
        {
          id: 9,
          question: "What does 'coaching niche' refer to?",
          options: [
            "The physical location of coaching",
            "Specialized areas coaches focus on",
            "The price range for coaching services",
            "Type of chair used in sessions"
          ],
          correctAnswer: 1,
          explanation: "A coaching niche is a specialized area or topic that a coach focuses their practice on."
        },
        {
          id: 10,
          question: "During which conversation phase does topic selection occur?",
          options: [
            "Check-in",
            "Topic selection",
            "Action planning",
            "Closing"
          ],
          correctAnswer: 1,
          explanation: "Topic selection is explicitly the second phase where the client chooses what to work on in that session."
        },
        {
          id: 11,
          question: "What is NOT the coach's role according to the content?",
          options: [
            "Asking powerful questions",
            "Giving direct advice",
            "Facilitating discovery",
            "Active listening"
          ],
          correctAnswer: 1,
          explanation: "Coaches facilitate rather than advise - they help clients find their own solutions through questioning."
        },
        {
          id: 12,
          question: "What builds confidence and self-reliance in clients?",
          options: [
            "The coach making all decisions",
            "Clients discovering their own answers",
            "Following strict rules",
            "Avoiding all challenges"
          ],
          correctAnswer: 1,
          explanation: "When clients discover their own answers through coaching, it builds their confidence and self-reliance."
        },
        {
          id: 13,
          question: "What creates momentum in coaching?",
          options: [
            "Long theoretical discussions",
            "Taking steps between sessions",
            "Weekly payments",
            "Social media followers"
          ],
          correctAnswer: 1,
          explanation: "Action between sessions creates momentum and measurable progress toward goals."
        },
        {
          id: 14,
          question: "What type of approach empowers change according to the module?",
          options: [
            "Backward-looking analysis",
            "Forward-looking approach",
            "Neutral observation only",
            "Critical evaluation"
          ],
          correctAnswer: 1,
          explanation: "The forward-looking approach of coaching empowers clients to create change in their lives."
        },
        {
          id: 15,
          question: "What might a health and wellness coach focus on?",
          options: [
            "Corporate mergers",
            "Exercise and nutrition goals",
            "Real estate investing",
            "Software programming"
          ],
          correctAnswer: 1,
          explanation: "Health and wellness coaches help clients with exercise, nutrition, and overall wellbeing goals."
        },
        {
          id: 16,
          question: "What is the collaborative relationship in coaching called?",
          options: [
            "Teacher-student dynamic",
            "Doctor-patient relationship",
            "Partnership",
            "Employer-employee contract"
          ],
          correctAnswer: 2,
          explanation: "Coaching is described as a collaborative partnership between equals working toward the client's goals."
        },
        {
          id: 17,
          question: "What happens during the check-in phase?",
          options: [
            "The coach assesses client's appearance",
            "Discussing progress since last session",
            "Setting long-term life goals",
            "Payment collection"
          ],
          correctAnswer: 1,
          explanation: "Check-in involves seeing how the client has been and what progress they've made since the last session."
        },
        {
          id: 18,
          question: "What does 'action planning' create?",
          options: [
            "Detailed psychological profiles",
            "Specific steps to move forward",
            "Legal contracts",
            "Financial investment plans"
          ],
          correctAnswer: 1,
          explanation: "Action planning results in concrete, specific steps the client will take before the next session."
        },
        {
          id: 19,
          question: "What is the purpose of the closing phase?",
          options: [
            "To collect payment immediately",
            "Summarizing insights and next actions",
            "Scheduling next year's sessions",
            "Giving homework assignments"
          ],
          correctAnswer: 1,
          explanation: "Closing summarizes what was discussed and clarifies the next steps the client will take."
        },
        {
          id: 20,
          question: "What is coaching primarily about?",
          options: [
            "Healing childhood trauma",
            "Facilitating client's own discovery",
            "Providing financial advice",
            "Medical treatment planning"
          ],
          correctAnswer: 1,
          explanation: "Coaching is fundamentally about facilitating the client's own discovery and growth, not providing solutions."
        }
      ]
    },
    {
      id: 2,
      title: "Core Coaching Skills",
      content: `# Module 2: Core Coaching Skills

## Active Listening

Active listening is the foundation of effective coaching. It involves fully concentrating on what the client is saying, understanding their message, and responding thoughtfully.

**Four levels of listening:**
1. **Internal listening**: Thinking about your own thoughts and responses
2. **Focused listening**: Paying attention to the client's words
3. **Global listening**: Noticing tone, pace, emotion, and body language
4. **Intuitive listening**: Sensing what's not being said

**Active listening techniques:**
- Maintain eye contact (in person or virtually)
- Use verbal nods ("I see," "Go on")
- Paraphrase to show understanding
- Ask for clarification when needed
- Avoid interrupting

## Powerful Questioning

Great coaches ask questions that make clients think deeply. These questions open up new possibilities and perspectives.

**Characteristics of powerful questions:**
- Open-ended (cannot be answered with yes/no)
- Begin with "what," "how," or "tell me about"
- Are concise and clear
- Come from genuine curiosity
- Challenge assumptions gently

**Examples of powerful questions:**
- "What would you do if you knew you couldn't fail?"
- "How will you know when you've achieved this goal?"
- "What's one small step you could take this week?"
- "What values are important to you in this situation?"
- "How does this align with what you really want?"

## Giving Effective Feedback

Feedback in coaching helps clients gain self-awareness. It should be descriptive, specific, and focused on behavior.

**Feedback guidelines:**
1. **Be specific**: "I noticed you smiled when talking about..." 
2. **Be timely**: Give feedback soon after the behavior
3. **Focus on behavior, not personality**: "When you interrupted..." not "You're rude"
4. **Balance positive and developmental**: Note what's working and what could improve
5. **Check for understanding**: "Does that resonate with you?"

**The SBI feedback model:**
- **Situation**: When and where it happened
- **Behavior**: The specific action observed
- **Impact**: How it affected you or the situation

## Creating Accountability

Accountability helps clients follow through on their commitments. It's not about punishment, but about support and encouragement.

**Ways to build accountability:**
- Have clients state their commitments aloud
- Use specific, measurable actions
- Check progress at next session
- Celebrate small wins
- Explore obstacles without judgment

**Remember**: The goal of accountability is to help clients build self-discipline and honor their own commitments.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the foundation of effective coaching?",
          options: [
            "Giving expert advice",
            "Active listening",
            "Having all the answers",
            "Taking detailed notes"
          ],
          correctAnswer: 1,
          explanation: "Active listening is described as the foundation because it builds understanding and trust."
        },
        {
          id: 2,
          question: "Which level of listening involves noticing tone and body language?",
          options: [
            "Internal listening",
            "Focused listening",
            "Global listening",
            "Intuitive listening"
          ],
          correctAnswer: 2,
          explanation: "Global listening includes noticing nonverbal cues like tone, pace, emotion, and body language."
        },
        {
          id: 3,
          question: "What type of questions do powerful questions avoid?",
          options: [
            "Questions about the future",
            "Yes/no questions",
            "Questions about values",
            "Questions starting with 'what'"
          ],
          correctAnswer: 1,
          explanation: "Powerful questions are open-ended and avoid yes/no answers that limit exploration."
        },
        {
          id: 4,
          question: "What should feedback focus on according to the guidelines?",
          options: [
            "Personality traits",
            "Specific behaviors",
            "Family background",
            "Financial status"
          ],
          correctAnswer: 1,
          explanation: "Feedback should focus on observable behaviors rather than personality characteristics."
        },
        {
          id: 5,
          question: "What does 'S' stand for in the SBI feedback model?",
          options: [
            "Solution",
            "Situation",
            "Suggestion",
            "Strength"
          ],
          correctAnswer: 1,
          explanation: "In SBI, 'S' stands for Situation - describing when and where something happened."
        },
        {
          id: 6,
          question: "What is NOT an active listening technique mentioned?",
          options: [
            "Maintaining eye contact",
            "Using verbal nods",
            "Interrupting to share similar experiences",
            "Paraphrasing to show understanding"
          ],
          correctAnswer: 2,
          explanation: "Interrupting is specifically mentioned as something to avoid in active listening."
        },
        {
          id: 7,
          question: "Which words typically start powerful questions?",
          options: [
            "Why, who, when",
            "What, how, tell me about",
            "Do you, are you, will you",
            "Always, never, everyone"
          ],
          correctAnswer: 1,
          explanation: "Powerful questions often begin with 'what,' 'how,' or 'tell me about' to encourage exploration."
        },
        {
          id: 8,
          question: "What should feedback be balanced with?",
          options: [
            "Positive and developmental aspects",
            "Past and future mistakes",
            "Personal opinions and facts",
            "Professional and personal life"
          ],
          correctAnswer: 0,
          explanation: "Effective feedback balances positive observations with developmental opportunities."
        },
        {
          id: 9,
          question: "What is the purpose of accountability in coaching?",
          options: [
            "To punish clients for not following through",
            "To support clients in honoring commitments",
            "To create dependency on the coach",
            "To increase coaching fees"
          ],
          correctAnswer: 1,
          explanation: "Accountability is about support and encouragement, not punishment or control."
        },
        {
          id: 10,
          question: "What does intuitive listening involve?",
          options: [
            "Thinking about your response",
            "Sensing what's not being said",
            "Taking detailed notes",
            "Planning the next question"
          ],
          correctAnswer: 1,
          explanation: "Intuitive listening involves sensing the unspoken thoughts, feelings, or meanings."
        },
        {
          id: 11,
          question: "What is an example of a verbal nod?",
          options: [
            "I see, Go on",
            "You should, You must",
            "That's wrong, That's right",
            "Next topic, Moving on"
          ],
          correctAnswer: 0,
          explanation: "Verbal nods like 'I see' and 'Go on' show you're listening without interrupting the flow."
        },
        {
          id: 12,
          question: "What makes a question 'powerful'?",
          options: [
            "It comes from genuine curiosity",
            "It has a predetermined answer",
            "It's complex and confusing",
            "It requires research to answer"
          ],
          correctAnswer: 0,
          explanation: "Powerful questions come from genuine curiosity about the client's experience and perspective."
        },
        {
          id: 13,
          question: "When should feedback ideally be given?",
          options: [
            "At the end of the coaching relationship",
            "Soon after the behavior occurs",
            "Only when the client asks for it",
            "During the first session only"
          ],
          correctAnswer: 1,
          explanation: "Timely feedback given soon after the behavior is most effective and relevant."
        },
        {
          id: 14,
          question: "What does 'B' stand for in the SBI model?",
          options: [
            "Belief",
            "Behavior",
            "Background",
            "Benefit"
          ],
          correctAnswer: 1,
          explanation: "In SBI, 'B' stands for Behavior - the specific action that was observed."
        },
        {
          id: 15,
          question: "How can coaches build accountability?",
          options: [
            "By having clients state commitments aloud",
            "By punishing missed deadlines",
            "By doing the work for clients",
            "By lowering expectations"
          ],
          correctAnswer: 0,
          explanation: "Having clients verbally state their commitments increases their sense of responsibility."
        },
        {
          id: 16,
          question: "What is internal listening focused on?",
          options: [
            "The client's nonverbal cues",
            "The coach's own thoughts and responses",
            "Environmental distractions",
            "Future session planning"
          ],
          correctAnswer: 1,
          explanation: "Internal listening is when the listener is focused on their own thoughts rather than fully on the speaker."
        },
        {
          id: 17,
          question: "What type of question is 'What would you do if you knew you couldn't fail?'",
          options: [
            "A limiting question",
            "A powerful question",
            "A closed question",
            "A leading question"
          ],
          correctAnswer: 1,
          explanation: "This is an example of a powerful question that opens up possibilities and creative thinking."
        },
        {
          id: 18,
          question: "What should feedback check for?",
          options: [
            "Understanding and resonance",
            "Agreement and compliance",
            "Speed of implementation",
            "Cost effectiveness"
          ],
          correctAnswer: 0,
          explanation: "Checking if the feedback resonates and is understood ensures it's helpful to the client."
        },
        {
          id: 19,
          question: "What is the goal of accountability?",
          options: [
            "Building client self-discipline",
            "Making the coach feel useful",
            "Increasing session frequency",
            "Creating more homework"
          ],
          correctAnswer: 0,
          explanation: "Accountability helps clients develop self-discipline to honor their own commitments."
        },
        {
          id: 20,
          question: "What does focused listening involve?",
          options: [
            "Paying attention to the client's words",
            "Multitasking during the session",
            "Thinking about the next appointment",
            "Judging the client's choices"
          ],
          correctAnswer: 0,
          explanation: "Focused listening means concentrating on the client's actual words and message."
        }
      ]
    },
    {
      id: 3,
      title: "Goal Setting Framework",
      content: `# Module 3: Goal Setting Framework

## SMART Goals

The SMART framework helps create clear, achievable goals. Each letter represents a quality that effective goals should have.

**SMART stands for:**
- **S**pecific: Clear and well-defined
- **M**easurable: Can track progress
- **A**chievable: Realistic and attainable
- **R**elevant: Aligns with values and bigger picture
- **T**ime-bound: Has a deadline

**Examples of SMART goals:**
- **Not SMART**: "Get healthier"
- **SMART**: "Walk 30 minutes daily for the next month"
- **Not SMART**: "Be better at work"
- **SMART**: "Complete project management training by December"

**Creating SMART goals with clients:**
1. Help them get specific about what they want
2. Identify how they'll measure progress
3. Ensure the goal is challenging but possible
4. Connect it to their values and larger goals
5. Set a realistic timeline

## Vision and Values Alignment

Goals are more motivating when they connect to a client's deeper vision and values.

**Helping clients identify values:**
- Ask: "What's truly important to you in life?"
- Explore peak experiences: "When have you felt most alive?"
- Use values cards or lists for sorting
- Notice what they spend time and energy on

**Connecting goals to vision:**
- "How does this goal support your larger life vision?"
- "What will achieving this allow you to do/be/have?"
- "Who will you become by pursuing this goal?"

## Breaking Down Big Goals

Large goals can feel overwhelming. Coaches help clients break them into manageable steps.

**The chunking technique:**
1. Start with the big goal
2. Break into quarterly milestones
3. Divide into monthly objectives
4. Create weekly action steps
5. Identify daily habits

**Example of chunking:**
- Big goal: Run a marathon
- Quarterly: Build to 10km, then half marathon
- Monthly: Increase distance by 10% each week
- Weekly: Specific training schedule
- Daily: Today's run and recovery

## Overcoming Obstacles

Identifying potential obstacles helps clients prepare and problem-solve.

**Common obstacles include:**
- Time constraints
- Lack of resources
- Fear of failure
- Perfectionism
- Competing priorities

**Strategies for overcoming obstacles:**
- "What's one small step you could take anyway?"
- "How could you work with this constraint?"
- "What support do you need?"
- "What's the cost of NOT pursuing this goal?"

## Celebrating Progress

Acknowledging progress maintains motivation and builds confidence.

**Ways to celebrate:**
- Track progress visually (charts, journals)
- Share successes with supportive people
- Reward milestones (small treats or experiences)
- Practice gratitude for effort and growth
- Reflect on lessons learned

**Remember**: The journey toward goals is as important as achieving them. Each step forward builds capability and confidence.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the 'S' in SMART stand for?",
          options: [
            "Simple",
            "Specific",
            "Significant",
            "Structured"
          ],
          correctAnswer: 1,
          explanation: "In SMART goals, 'S' stands for Specific - goals should be clear and well-defined."
        },
        {
          id: 2,
          question: "What does 'M' represent in SMART goals?",
          options: [
            "Motivational",
            "Measurable",
            "Manageable",
            "Meaningful"
          ],
          correctAnswer: 1,
          explanation: "'M' stands for Measurable - there should be a way to track progress toward the goal."
        },
        {
          id: 3,
          question: "What makes goals more motivating according to the module?",
          options: [
            "Having many goals at once",
            "Keeping goals secret",
            "Connecting to values and vision",
            "Making them extremely difficult"
          ],
          correctAnswer: 2,
          explanation: "Goals connected to personal values and larger vision are more meaningful and motivating."
        },
        {
          id: 4,
          question: "What is the 'chunking technique' used for?",
          options: [
            "Making goals more complex",
            "Breaking big goals into steps",
            "Comparing goals with others",
            "Simplifying goal language"
          ],
          correctAnswer: 1,
          explanation: "Chunking breaks large, overwhelming goals into smaller, manageable steps."
        },
        {
          id: 5,
          question: "What is NOT listed as a common obstacle to goals?",
          options: [
            "Time constraints",
            "Fear of failure",
            "Having too much free time",
            "Perfectionism"
          ],
          correctAnswer: 2,
          explanation: "Having too much free time is not mentioned as a common obstacle; lack of time is mentioned."
        },
        {
          id: 6,
          question: "What does the 'A' in SMART represent?",
          options: [
            "Ambitious",
            "Achievable",
            "Actionable",
            "Awesome"
          ],
          correctAnswer: 1,
          explanation: "'A' stands for Achievable - goals should be realistic and attainable."
        },
        {
          id: 7,
          question: "What does 'R' stand for in SMART goals?",
          options: [
            "Rapid",
            "Relevant",
            "Remarkable",
            "Required"
          ],
          correctAnswer: 1,
          explanation: "'R' stands for Relevant - goals should align with values and bigger priorities."
        },
        {
          id: 8,
          question: "What is an example of a SMART goal from the module?",
          options: [
            "Get healthier",
            "Be better at work",
            "Walk 30 minutes daily for a month",
            "Try to exercise sometimes"
          ],
          correctAnswer: 2,
          explanation: "'Walk 30 minutes daily for the next month' is specific, measurable, achievable, relevant, and time-bound."
        },
        {
          id: 9,
          question: "What helps identify client values?",
          options: [
            "Asking about financial goals only",
            "Exploring peak experiences",
            "Comparing with others' values",
            "Following trending topics"
          ],
          correctAnswer: 1,
          explanation: "Exploring peak experiences (when they felt most alive) helps uncover true values."
        },
        {
          id: 10,
          question: "What is the final 'T' in SMART?",
          options: [
            "Thoughtful",
            "Time-bound",
            "Thorough",
            "Tested"
          ],
          correctAnswer: 1,
          explanation: "'T' stands for Time-bound - goals should have a deadline or timeline."
        },
        {
          id: 11,
          question: "What question connects goals to vision?",
          options: [
            "How much will this cost?",
            "Who else is doing this?",
            "How does this support your larger vision?",
            "Is this goal popular?"
          ],
          correctAnswer: 2,
          explanation: "Asking how a goal supports the larger vision creates meaningful connection."
        },
        {
          id: 12,
          question: "What does chunking start with?",
          options: [
            "Daily habits",
            "The big goal",
            "Other people's goals",
            "Random actions"
          ],
          correctAnswer: 1,
          explanation: "Chunking starts with the big goal, then breaks it down progressively."
        },
        {
          id: 13,
          question: "What strategy helps overcome obstacles?",
          options: [
            "Ignoring them completely",
            "Identifying needed support",
            "Giving up immediately",
            "Blaming circumstances"
          ],
          correctAnswer: 1,
          explanation: "Identifying what support is needed helps clients problem-solve obstacles."
        },
        {
          id: 14,
          question: "Why celebrate progress according to the module?",
          options: [
            "To maintain motivation",
            "To impress others",
            "To complete goals faster",
            "To avoid hard work"
          ],
          correctAnswer: 0,
          explanation: "Celebrating progress maintains motivation and acknowledges effort."
        },
        {
          id: 15,
          question: "What is an example of breaking down a marathon goal?",
          options: [
            "Start with daily habits",
            "Begin with quarterly milestones",
            "Focus only on the finish line",
            "Train randomly without plan"
          ],
          correctAnswer: 1,
          explanation: "The example shows starting with quarterly milestones like building to 10km first."
        },
        {
          id: 16,
          question: "What should goals be aligned with?",
          options: [
            "Latest trends",
            "Values and bigger picture",
            "What others expect",
            "Easiest options"
          ],
          correctAnswer: 1,
          explanation: "Goals should be relevant and aligned with personal values and larger life direction."
        },
        {
          id: 17,
          question: "What question helps with specificity in goals?",
          options: [
            "What do you sort of want?",
            "Could you maybe try something?",
            "What exactly do you want?",
            "Does anyone else want this?"
          ],
          correctAnswer: 2,
          explanation: "Helping clients get specific about what they exactly want creates clearer goals."
        },
        {
          id: 18,
          question: "How can progress be tracked visually?",
          options: [
            "Through charts or journals",
            "By keeping it all in memory",
            "Asking friends to remember",
            "Taking photos randomly"
          ],
          correctAnswer: 0,
          explanation: "Visual tracking with charts or journals makes progress concrete and motivating."
        },
        {
          id: 19,
          question: "What maintains motivation during the goal journey?",
          options: [
            "Only focusing on the end result",
            "Acknowledging each step forward",
            "Comparing with others' progress",
            "Setting impossible deadlines"
          ],
          correctAnswer: 1,
          explanation: "Acknowledging each step forward builds momentum and maintains motivation."
        },
        {
          id: 20,
          question: "What is as important as achieving goals?",
          options: [
            "The journey toward them",
            "The money spent",
            "Others' opinions",
            "Starting new goals immediately"
          ],
          correctAnswer: 0,
          explanation: "The journey builds capability and confidence, making it as valuable as the achievement."
        }
      ]
    },
    {
      id: 4,
      title: "Coaching Conversations",
      content: `# Module 4: Coaching Conversations

## Structuring Sessions

Effective coaching sessions follow a consistent structure that provides safety and direction.

**The 6-phase coaching conversation:**
1. **Opening**: Establish focus and presence (5 minutes)
2. **Check-in**: Review progress and current state (10 minutes)
3. **Agenda Setting**: Choose focus for today's session (5 minutes)
4. **Exploration**: Deep dive into the topic (30 minutes)
5. **Action Planning**: Create next steps (10 minutes)
6. **Closing**: Summarize and confirm commitment (5 minutes)

**Session preparation tips:**
- Review previous notes before session
- Clear your mind and be fully present
- Have materials ready (pen, paper, water)
- Ensure privacy and minimize distractions
- Set positive intention for the session

## Building Rapport

Rapport creates trust and safety for open conversation.

**Rapport-building techniques:**
- Match energy level appropriately
- Use similar language patterns
- Show genuine interest and curiosity
- Respect personal boundaries
- Be consistent and reliable

**Verbal rapport builders:**
- "I appreciate you sharing that"
- "That makes sense"
- "Tell me more about that"
- "I'm here with you in this"

**Nonverbal rapport signals:**
- Appropriate eye contact
- Open body posture
- Nodding to show understanding
- Mirroring posture naturally (not mimicking)

## Deepening the Conversation

Moving beyond surface discussions to meaningful exploration.

**Techniques for deepening:**
- **Silence**: Allow thinking space after questions
- **Reflection**: "What I'm hearing is..."
- **Challenging gently**: "What if the opposite were true?"
- **Exploring emotions**: "How does that feel?"
- **Connecting patterns**: "I notice when you talk about X, you also mention Y"

**Avoiding common pitfalls:**
- Don't rush to solve problems
- Resist giving advice
- Avoid judgmental language
- Don't make it about yourself
- Stay client-focused

## Handling Difficult Moments

Coaches need skills for challenging conversations.

**When clients are stuck:**
- "What's one tiny step you could take?"
- "What would you advise a friend in this situation?"
- "What part of this feels most challenging?"
- "How could we look at this differently?"

**When clients are emotional:**
- Acknowledge the emotion: "I can see this is really important"
- Normalize: "It makes sense you'd feel that way"
- Provide space: "Take your time"
- Check in: "How are you feeling now?"

**When clients resist:**
- Explore the resistance: "What concerns you about moving forward?"
- Respect their pace: "We can stay with this as long as needed"
- Reframe: "What if we looked at this as an experiment?"
- Reconnect to motivation: "What originally drew you to this goal?"

## Closing Effectively

How you end sessions impacts continued progress.

**Effective closing includes:**
- Summary of key insights
- Clear action commitments
- Confirmation of accountability
- Positive encouragement
- Scheduling next session

**Closing questions:**
- "What's your main takeaway from today?"
- "What are you committing to before we meet again?"
- "How will you remember these insights?"
- "What support do you need to follow through?"

**Remember**: Every conversation is an opportunity for growth - both for the client and for your development as a coach.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first phase of a coaching conversation?",
          options: [
            "Check-in",
            "Opening",
            "Exploration",
            "Action Planning"
          ],
          correctAnswer: 1,
          explanation: "Opening is the first phase where focus and presence are established."
        },
        {
          id: 2,
          question: "How long does check-in typically take in the structure?",
          options: [
            "5 minutes",
            "10 minutes",
            "30 minutes",
            "1 minute"
          ],
          correctAnswer: 1,
          explanation: "Check-in is allocated 10 minutes to review progress and current state."
        },
        {
          id: 3,
          question: "What creates trust and safety in conversations?",
          options: [
            "Complex theories",
            "Rapport",
            "Long sessions",
            "Many questions"
          ],
          correctAnswer: 1,
          explanation: "Rapport builds the trust and safety needed for open, honest conversation."
        },
        {
          id: 4,
          question: "What is a verbal rapport builder?",
          options: [
            "I appreciate you sharing that",
            "You should do this",
            "That's wrong",
            "Moving on now"
          ],
          correctAnswer: 0,
          explanation: "'I appreciate you sharing that' shows respect and builds connection."
        },
        {
          id: 5,
          question: "What technique involves allowing thinking space?",
          options: [
            "Rushing",
            "Silence",
            "Interrupting",
            "Advising"
          ],
          correctAnswer: 1,
          explanation: "Silence gives clients space to think deeply after questions."
        },
        {
          id: 6,
          question: "What is agenda setting used for?",
          options: [
            "Setting coaching fees",
            "Choosing today's focus",
            "Planning next year's sessions",
            "Discussing other clients"
          ],
          correctAnswer: 1,
          explanation: "Agenda setting determines what the client wants to focus on in that session."
        },
        {
          id: 7,
          question: "What should be reviewed before a session?",
          options: [
            "Previous notes",
            "Social media",
            "Personal emails",
            "News headlines"
          ],
          correctAnswer: 0,
          explanation: "Reviewing previous notes helps continue the client's journey effectively."
        },
        {
          id: 8,
          question: "What is an example of reflection?",
          options: [
            "What I'm hearing is...",
            "You must feel...",
            "Everyone thinks...",
            "The solution is..."
          ],
          correctAnswer: 0,
          explanation: "Reflection involves paraphrasing what you're hearing to show understanding."
        },
        {
          id: 9,
          question: "What should coaches avoid giving?",
          options: [
            "Questions",
            "Advice",
            "Attention",
            "Time"
          ],
          correctAnswer: 1,
          explanation: "Coaches facilitate rather than advise, helping clients find their own solutions."
        },
        {
          id: 10,
          question: "How to handle emotional clients?",
          options: [
            "Change topic quickly",
            "Acknowledge the emotion",
            "Tell them to calm down",
            "Ignore the emotion"
          ],
          correctAnswer: 1,
          explanation: "Acknowledging emotions validates the client's experience and builds trust."
        },
        {
          id: 11,
          question: "What is included in effective closing?",
          options: [
            "Summary of key insights",
            "New topic introduction",
            "Criticism of progress",
            "Random suggestions"
          ],
          correctAnswer: 0,
          explanation: "Closing should summarize key insights to reinforce learning."
        },
        {
          id: 12,
          question: "What phase takes the most time typically?",
          options: [
            "Opening",
            "Exploration",
            "Check-in",
            "Closing"
          ],
          correctAnswer: 1,
          explanation: "Exploration is the deepest phase, typically taking 30 minutes."
        },
        {
          id: 13,
          question: "What builds nonverbal rapport?",
          options: [
            "Appropriate eye contact",
            "Looking at phone",
            "Crossing arms tightly",
            "Turning away"
          ],
          correctAnswer: 0,
          explanation: "Appropriate eye contact shows attention and builds connection."
        },
        {
          id: 14,
          question: "What technique challenges gently?",
          options: [
            "What if the opposite were true?",
            "You're completely wrong",
            "That makes no sense",
            "Just do what I say"
          ],
          correctAnswer: 0,
          explanation: "'What if the opposite were true?' gently challenges assumptions without confrontation."
        },
        {
          id: 15,
          question: "What to do when clients resist?",
          options: [
            "Push harder",
            "Explore the resistance",
            "Give up completely",
            "Get frustrated"
          ],
          correctAnswer: 1,
          explanation: "Exploring resistance helps understand concerns and find ways forward."
        },
        {
          id: 16,
          question: "What is a closing question example?",
          options: [
            "What's your main takeaway?",
            "Did you pay your bill?",
            "Who was right?",
            "What's next year's plan?"
          ],
          correctAnswer: 0,
          explanation: "'What's your main takeaway?' helps consolidate learning from the session."
        },
        {
          id: 17,
          question: "What should be minimized for sessions?",
          options: [
            "Distractions",
            "Client speaking time",
            "Note taking",
            "Positive feedback"
          ],
          correctAnswer: 0,
          explanation: "Minimizing distractions helps maintain focus and presence."
        },
        {
          id: 18,
          question: "What does 'normalize' mean with emotions?",
          options: [
            "Make them seem wrong",
            "Show they make sense",
            "Ignore them completely",
            "Amplify them dramatically"
          ],
          correctAnswer: 1,
          explanation: "Normalizing shows the client their emotions are understandable and human."
        },
        {
          id: 19,
          question: "What should action planning create?",
          options: [
            "Complex theories",
            "Clear next steps",
            "Vague intentions",
            "Future worries"
          ],
          correctAnswer: 1,
          explanation: "Action planning creates concrete, clear steps for between sessions."
        },
        {
          id: 20,
          question: "What is an opportunity in every conversation?",
          options: [
            "Growth for client and coach",
            "Making more money",
            "Proving who is smarter",
            "Ending quickly"
          ],
          correctAnswer: 0,
          explanation: "Each conversation offers growth opportunities for both people involved."
        }
      ]
    },
    {
      id: 5,
      title: "Ethics and Professionalism",
      content: `# Module 5: Ethics and Professionalism

## Ethical Foundations

Ethical practice protects both clients and coaches while ensuring quality service.

**Core ethical principles:**
1. **Confidentiality**: Protecting client information
2. **Competence**: Working within your training and skills
3. **Integrity**: Honesty and transparency in all dealings
4. **Respect**: Honoring client autonomy and dignity
5. **Responsibility**: Prioritizing client wellbeing

**Confidentiality guidelines:**
- What's said in sessions stays in sessions
- Exceptions: Risk of harm to self or others, legal requirements
- Get permission before sharing any information
- Secure storage of notes and records
- Clear policies about confidentiality

## Setting Boundaries

Clear boundaries create safe, professional relationships.

**Types of boundaries to establish:**
- **Time boundaries**: Session length, availability hours
- **Financial boundaries**: Clear fees, payment policies
- **Relationship boundaries**: Professional vs. personal
- **Scope boundaries**: What coaching does and doesn't include
- **Communication boundaries**: Response times, contact methods

**Boundary-setting tips:**
- Be clear and consistent
- Discuss boundaries early in relationship
- Model respect for your own boundaries
- Review boundaries periodically
- Handle boundary crossings promptly and professionally

## Professional Standards

Maintaining professionalism builds credibility and trust.

**Professional conduct includes:**
- Being punctual and prepared
- Dressing appropriately for your context
- Maintaining professional workspace (virtual or physical)
- Continuing education and skill development
- Honoring commitments and agreements

**Documentation best practices:**
- Keep brief, factual session notes
- Store securely with client privacy
- Note goals, progress, and actions
- Include any important decisions or insights
- Regular review of client progress

## Recognizing Limits

Knowing when to refer clients to other professionals is ethical practice.

**Signs referral may be needed:**
- Client needs therapy or counseling
- Medical or mental health concerns arise
- Legal or financial advice is needed
- Client isn't making progress with coaching
- Issues outside coach's expertise emerge

**How to refer professionally:**
- "I've noticed this might benefit from..."
- "I know a great professional who specializes in..."
- "Would you be open to exploring additional support?"
- Provide 2-3 options when possible
- Follow up appropriately (with permission)

## Self-Care for Coaches

Taking care of yourself ensures you can effectively help others.

**Self-care strategies:**
- Regular supervision or peer consultation
- Maintaining your own support network
- Setting realistic workload limits
- Continuing your personal development
- Regular breaks and time off

**Signs of coach burnout:**
- Dreading coaching sessions
- Feeling emotionally drained
- Losing empathy for clients
- Making more errors or oversights
- Physical symptoms (fatigue, illness)

**Remember**: Ethical, professional practice isn't just rules to follow - it's the foundation of effective, sustainable coaching that truly helps clients.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a core ethical principle?",
          options: [
            "Confidentiality",
            "Popularity",
            "Profitability",
            "Speed"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality is a fundamental ethical principle protecting client privacy."
        },
        {
          id: 2,
          question: "What are exceptions to confidentiality?",
          options: [
            "Sharing with friends",
            "Risk of harm to self or others",
            "Interesting stories",
            "Social media posts"
          ],
          correctAnswer: 1,
          explanation: "Risk of harm is a legitimate exception where confidentiality may need to be broken."
        },
        {
          id: 3,
          question: "What type of boundary involves session length?",
          options: [
            "Financial boundaries",
            "Time boundaries",
            "Relationship boundaries",
            "Scope boundaries"
          ],
          correctAnswer: 1,
          explanation: "Time boundaries include session duration and availability hours."
        },
        {
          id: 4,
          question: "What should be discussed early in coaching?",
          options: [
            "Coach's personal problems",
            "Boundaries",
            "Other clients",
            "Political views"
          ],
          correctAnswer: 1,
          explanation: "Boundaries should be established early for clear professional relationships."
        },
        {
          id: 5,
          question: "What does professional conduct include?",
          options: [
            "Being punctual",
            "Being fashionably late",
            "Sharing client stories publicly",
            "Working while tired"
          ],
          correctAnswer: 0,
          explanation: "Punctuality is part of professional conduct showing respect for client time."
        },
        {
          id: 6,
          question: "What is integrity in ethics?",
          options: [
            "Making the most money",
            "Honesty and transparency",
            "Having many clients",
            "Being always agreeable"
          ],
          correctAnswer: 1,
          explanation: "Integrity involves honesty and transparency in all professional dealings."
        },
        {
          id: 7,
          question: "What should session notes be?",
          options: [
            "Brief and factual",
            "Long and detailed",
            "Emotional and subjective",
            "Shared publicly"
          ],
          correctAnswer: 0,
          explanation: "Notes should be brief, factual records focusing on goals and progress."
        },
        {
          id: 8,
          question: "When might referral be needed?",
          options: [
            "Client needs therapy",
            "Client pays on time",
            "Session goes well",
            "Goals are being met"
          ],
          correctAnswer: 0,
          explanation: "When clients need therapy or counseling, referral to appropriate professionals is ethical."
        },
        {
          id: 9,
          question: "What is a self-care strategy?",
          options: [
            "Working constantly",
            "Regular supervision",
            "Ignoring personal needs",
            "Taking on more clients"
          ],
          correctAnswer: 1,
          explanation: "Regular supervision or peer consultation supports coach wellbeing and development."
        },
        {
          id: 10,
          question: "What principle honors client autonomy?",
          options: [
            "Respect",
            "Control",
            "Direction",
            "Authority"
          ],
          correctAnswer: 0,
          explanation: "Respect involves honoring the client's right to make their own choices."
        },
        {
          id: 11,
          question: "What should be secured?",
          options: [
            "Client notes and records",
            "Office decorations",
            "Personal social media",
            "Family photos"
          ],
          correctAnswer: 0,
          explanation: "Client information must be stored securely to protect confidentiality."
        },
        {
          id: 12,
          question: "What boundary involves clear fees?",
          options: [
            "Time boundaries",
            "Financial boundaries",
            "Scope boundaries",
            "Communication boundaries"
          ],
          correctAnswer: 1,
          explanation: "Financial boundaries include clear pricing and payment policies."
        },
        {
          id: 13,
          question: "What builds credibility and trust?",
          options: [
            "Professionalism",
            "Casual attitude",
            "Flexible ethics",
            "Minimal effort"
          ],
          correctAnswer: 0,
          explanation: "Professional conduct builds the credibility and trust essential for coaching."
        },
        {
          id: 14,
          question: "How to refer professionally?",
          options: [
            "Fire the client abruptly",
            "Provide 2-3 options when possible",
            "Criticize their needs",
            "Ignore the issue"
          ],
          correctAnswer: 1,
          explanation: "Providing options shows care and helps clients find appropriate support."
        },
        {
          id: 15,
          question: "What is a sign of coach burnout?",
          options: [
            "Feeling energized",
            "Dreading sessions",
            "Making good progress",
            "Enjoying work"
          ],
          correctAnswer: 1,
          explanation: "Dreading sessions can indicate burnout and the need for self-care."
        },
        {
          id: 16,
          question: "What does competence mean?",
          options: [
            "Knowing everything",
            "Working within your training",
            "Taking all clients",
            "Never making mistakes"
          ],
          correctAnswer: 1,
          explanation: "Competence means working within your actual skills and training."
        },
        {
          id: 17,
          question: "What should boundaries be?",
          options: [
            "Clear and consistent",
            "Vague and flexible",
            "Secret and hidden",
            "Changing frequently"
          ],
          correctAnswer: 0,
          explanation: "Clear, consistent boundaries create safety and predictability."
        },
        {
          id: 18,
          question: "What is professional workspace maintenance?",
          options: [
            "Keeping it clean and appropriate",
            "Having expensive furniture",
            "Showing off awards",
            "Impressing clients with luxury"
          ],
          correctAnswer: 0,
          explanation: "A professional workspace should be clean and appropriate for the work context."
        },
        {
          id: 19,
          question: "What does continuing education support?",
          options: [
            "Higher fees only",
            "Skill development",
            "Social status",
            "Competition with others"
          ],
          correctAnswer: 1,
          explanation: "Continuing education develops skills and maintains professional competence."
        },
        {
          id: 20,
          question: "What is the foundation of effective coaching?",
          options: [
            "Ethical, professional practice",
            "Marketing skills",
            "Office location",
            "Social media presence"
          ],
          correctAnswer: 0,
          explanation: "Ethical practice forms the foundation for sustainable, effective coaching."
        }
      ]
    },
    {
      id: 6,
      title: "Building Your Coaching Practice",
      content: `# Module 6: Building Your Coaching Practice

## Defining Your Niche

A clear niche helps you stand out and attract ideal clients.

**Steps to define your niche:**
1. **Identify your passion**: What topics energize you?
2. **Recognize your strengths**: What are you naturally good at?
3. **Consider your experience**: What unique background do you have?
4. **Research the market**: What needs are not being met?
5. **Test your idea**: Get feedback from potential clients

**Niche statement formula**: "I help [target audience] achieve [specific outcome] through [your unique approach]"

**Examples of niche statements:**
- "I help new managers transition confidently into leadership roles"
- "I support creative professionals overcoming creative blocks"
- "I guide parents creating work-life balance while raising children"

## Marketing Basics

Simple marketing attracts clients without being overwhelming.

**Low-cost marketing strategies:**
- **Networking**: Attend relevant events (in-person or virtual)
- **Content creation**: Blog posts, social media, free resources
- **Speaking opportunities**: Workshops, webinars, podcasts
- **Referral systems**: Ask happy clients for referrals
- **Partnerships**: Collaborate with complementary professionals

**Creating a simple marketing plan:**
1. Define your ideal client
2. Choose 2-3 marketing methods
3. Set aside regular time for marketing
4. Track what works
5. Adjust based on results

## Setting Your Fees

Pricing reflects your value and supports sustainable practice.

**Pricing considerations:**
- Your experience and training
- Local market rates
- Client demographic
- Type of coaching (individual, group, corporate)
- Package options vs. single sessions

**Common pricing models:**
- **Hourly rate**: Charge per session
- **Package pricing**: Set number of sessions for fixed price
- **Monthly retainer**: Ongoing support for regular fee
- **Group coaching**: Lower per-person rate with multiple clients
- **Sliding scale**: Adjust rates based on client ability to pay

**Tips for discussing fees:**
- Be clear and confident about your value
- Have written agreements
- Discuss payment terms upfront
- Offer different options when possible
- Stand by your pricing while being flexible when appropriate

## Client Management Systems

Simple systems make your practice run smoothly.

**Essential systems:**
- **Scheduling**: Online calendar or booking system
- **Payment processing**: Easy payment methods
- **Client records**: Secure storage of notes and agreements
- **Communication**: Clear response time expectations
- **Follow-up**: Systems for checking in and maintaining relationships

**Tools to consider:**
- Calendar apps (Google Calendar, Calendly)
- Payment processors (PayPal, Stripe)
- Note-taking apps (Evernote, Notion)
- Video conferencing (Zoom, Google Meet)
- Email management (professional email address, templates)

## Continuing Development

Great coaches keep learning and growing.

**Development opportunities:**
- **Supervision**: Regular sessions with experienced coach
- **Peer groups**: Learning with other coaches
- **Training**: Additional certifications and courses
- **Reading**: Books and articles on coaching and related fields
- **Conferences**: Events for networking and learning

**Self-reflection practices:**
- Regular journaling about coaching experiences
- Seeking client feedback
- Reviewing session recordings (with permission)
- Setting your own development goals
- Celebrating your growth and successes

**Remember**: Building a coaching practice is a journey. Start where you are, use what you have, and take consistent small steps forward. Your authentic approach and commitment to helping others will attract the right clients and create a fulfilling practice.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What helps coaches stand out?",
          options: [
            "Being generalists",
            "Having a clear niche",
            "Lowest prices",
            "Working with everyone"
          ],
          correctAnswer: 1,
          explanation: "A clear niche helps differentiate you in the marketplace."
        },
        {
          id: 2,
          question: "What is the first step in defining a niche?",
          options: [
            "Research competitors",
            "Identify your passion",
            "Copy others' niches",
            "Set high prices"
          ],
          correctAnswer: 1,
          explanation: "Starting with your passion ensures you work in areas that energize you."
        },
        {
          id: 3,
          question: "What is a low-cost marketing strategy?",
          options: [
            "TV commercials",
            "Billboard advertising",
            "Networking",
            "Celebrity endorsements"
          ],
          correctAnswer: 2,
          explanation: "Networking is an effective, low-cost way to build connections and find clients."
        },
        {
          id: 4,
          question: "What should a niche statement include?",
          options: [
            "Target audience, specific outcome, unique approach",
            "Personal biography only",
            "List of all services",
            "Competitor criticism"
          ],
          correctAnswer: 0,
          explanation: "A good niche statement specifies who you help, what you help them achieve, and how."
        },
        {
          id: 5,
          question: "What influences pricing?",
          options: [
            "Your experience and training",
            "Random numbers",
            "What others charge only",
            "Current mood"
          ],
          correctAnswer: 0,
          explanation: "Your qualifications and experience should be reflected in your pricing."
        },
        {
          id: 6,
          question: "What is package pricing?",
          options: [
            "Set number of sessions for fixed price",
            "Charging by the minute",
            "Free sessions only",
            "Payment after results"
          ],
          correctAnswer: 0,
          explanation: "Package pricing offers a set number of sessions at a predetermined price."
        },
        {
          id: 7,
          question: "What is an essential system for practice?",
          options: [
            "Scheduling",
            "Social media scrolling",
            "Personal shopping",
            "Entertainment streaming"
          ],
          correctAnswer: 0,
          explanation: "A reliable scheduling system is essential for managing client appointments."
        },
        {
          id: 8,
          question: "What should be in a simple marketing plan?",
          options: [
            "100 marketing methods",
            "2-3 marketing methods",
            "No marketing activities",
            "Only free methods"
          ],
          correctAnswer: 1,
          explanation: "Starting with 2-3 methods is manageable and allows you to see what works."
        },
        {
          id: 9,
          question: "What is a development opportunity?",
          options: [
            "Stopping all learning",
            "Regular supervision",
            "Working in isolation",
            "Avoiding feedback"
          ],
          correctAnswer: 1,
          explanation: "Supervision with experienced coaches supports ongoing development."
        },
        {
          id: 10,
          question: "What is the niche statement formula?",
          options: [
            "I help [target] achieve [outcome] through [approach]",
            "I am the best coach",
            "I charge [amount] per hour",
            "I work on [days of week]"
          ],
          correctAnswer: 0,
          explanation: "This formula creates clear, compelling niche statements."
        },
        {
          id: 11,
          question: "What is content creation in marketing?",
          options: [
            "Blog posts and social media",
            "Only paid advertising",
            "Telemarketing calls",
            "Junk mail"
          ],
          correctAnswer: 0,
          explanation: "Content creation involves sharing valuable information through various channels."
        },
        {
          id: 12,
          question: "What should you track in marketing?",
          options: [
            "Everything competitors do",
            "What works for you",
            "Only failures",
            "Nothing"
          ],
          correctAnswer: 1,
          explanation: "Tracking what works helps you focus efforts effectively."
        },
        {
          id: 13,
          question: "What is sliding scale pricing?",
          options: [
            "Same price for everyone",
            "Adjusting rates based on ability to pay",
            "Increasing prices weekly",
            "Charging extra for everything"
          ],
          correctAnswer: 1,
          explanation: "Sliding scale adjusts fees based on clients' financial circumstances."
        },
        {
          id: 14,
          question: "What is an essential client record practice?",
          options: [
            "Secure storage",
            "Public posting",
            "Sharing with friends",
            "Keeping in memory only"
          ],
          correctAnswer: 0,
          explanation: "Secure storage protects client privacy and maintains professionalism."
        },
        {
          id: 15,
          question: "What is a self-reflection practice?",
          options: [
            "Regular journaling",
            "Ignoring experiences",
            "Blaming clients",
            "Avoiding review"
          ],
          correctAnswer: 0,
          explanation: "Journaling about coaching experiences supports learning and growth."
        },
        {
          id: 16,
          question: "What should you consider in niche research?",
          options: [
            "What needs are not being met",
            "Only what's popular",
            "What's easiest",
            "Others' opinions only"
          ],
          correctAnswer: 0,
          explanation: "Identifying unmet needs can reveal valuable niche opportunities."
        },
        {
          id: 17,
          question: "What is a speaking opportunity?",
          options: [
            "Workshops or webinars",
            "Private conversations only",
            "Social media arguments",
            "Family gatherings only"
          ],
          correctAnswer: 0,
          explanation: "Speaking engagements showcase your expertise and attract potential clients."
        },
        {
          id: 18,
          question: "How to discuss fees?",
          options: [
            "Be clear and confident",
            "Apologize for charging",
            "Hide the true cost",
            "Change prices frequently"
          ],
          correctAnswer: 0,
          explanation: "Clear, confident fee discussions establish professional boundaries."
        },
        {
          id: 19,
          question: "What tool helps with scheduling?",
          options: [
            "Online calendar",
            "Paper only",
            "Memory only",
            "Guessing"
          ],
          correctAnswer: 0,
          explanation: "Online calendars provide efficient scheduling and reminders."
        },
        {
          id: 20,
          question: "What is building a coaching practice?",
          options: [
            "A quick process",
            "A journey with small steps",
            "An impossible task",
            "Only about money"
          ],
          correctAnswer: 1,
          explanation: "Building a practice is a gradual journey requiring consistent effort."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Life Coaching Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. 40 questions testing your understanding of life coaching fundamentals.",
    passingScore: 70,
    timeLimit: 60,
    
    questions: [
      {
        id: 1,
        question: "What is the primary focus of life coaching?",
        options: [
          "Healing past trauma",
          "Future-oriented goal achievement",
          "Medical diagnosis",
          "Financial planning"
        ],
        correctAnswer: 1,
        explanation: "Life coaching focuses on future goals and action, not past healing or medical issues."
      },
      {
        id: 2,
        question: "What principle believes clients have their own answers?",
        options: [
          "Coach knows best",
          "Client is resourceful",
          "Advice giving",
          "Directive approach"
        ],
        correctAnswer: 1,
        explanation: "The 'client is resourceful' principle is fundamental to coaching philosophy."
      },
      {
        id: 3,
        question: "What level of listening notices tone and body language?",
        options: [
          "Internal listening",
          "Focused listening",
          "Global listening",
          "Intuitive listening"
        ],
        correctAnswer: 2,
        explanation: "Global listening includes nonverbal cues like tone, pace, and body language."
      },
      {
        id: 4,
        question: "What makes questions 'powerful' in coaching?",
        options: [
          "They have yes/no answers",
          "They come from genuine curiosity",
          "They are complex and confusing",
          "They test client knowledge"
        ],
        correctAnswer: 1,
        explanation: "Powerful questions come from genuine curiosity and help clients explore deeply."
      },
      {
        id: 5,
        question: "What does 'S' stand for in SMART goals?",
        options: [
          "Simple",
          "Specific",
          "Significant",
          "Structured"
        ],
        correctAnswer: 1,
        explanation: "In SMART goals, 'S' stands for Specific - clear and well-defined."
      },
      {
        id: 6,
        question: "What technique breaks big goals into steps?",
        options: [
          "Chunking",
          "Ignoring",
          "Complicating",
          "Rushing"
        ],
        correctAnswer: 0,
        explanation: "Chunking breaks overwhelming goals into manageable pieces."
      },
      {
        id: 7,
        question: "What is the first phase of a coaching conversation?",
        options: [
          "Check-in",
          "Opening",
          "Exploration",
          "Action Planning"
        ],
        correctAnswer: 1,
        explanation: "Opening establishes focus and presence at the start."
      },
      {
        id: 8,
        question: "What builds trust and safety in conversations?",
        options: [
          "Complex theories",
          "Rapport",
          "Many questions",
          "Long sessions"
        ],
        correctAnswer: 1,
        explanation: "Rapport creates the trust needed for open, honest sharing."
      },
      {
        id: 9,
        question: "What is a core ethical principle?",
        options: [
          "Popularity",
          "Confidentiality",
          "Profitability",
          "Speed"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality protects client privacy and is fundamental."
      },
      {
        id: 10,
        question: "When might referral be needed?",
        options: [
          "Client needs therapy",
          "Session goes well",
          "Goals are being met",
          "Client pays on time"
        ],
        correctAnswer: 0,
        explanation: "Referring to therapy when needed is ethical practice."
      },
      {
        id: 11,
        question: "What helps coaches stand out in the market?",
        options: [
          "Being generalists",
          "Clear niche",
          "Lowest prices",
          "Working with everyone"
        ],
        correctAnswer: 1,
        explanation: "A clear niche differentiates you and attracts ideal clients."
      },
      {
        id: 12,
        question: "What is a low-cost marketing strategy?",
        options: [
          "TV commercials",
          "Networking",
          "Billboard ads",
          "Celebrity endorsements"
        ],
        correctAnswer: 1,
        explanation: "Networking builds connections without large financial investment."
      },
      {
        id: 13,
        question: "How is coaching different from therapy?",
        options: [
          "Coaching requires medical degree",
          "Therapy is future-focused",
          "Coaching is future-focused",
          "They are identical"
        ],
        correctAnswer: 2,
        explanation: "Coaching focuses on future goals while therapy often addresses past issues."
      },
      {
        id: 14,
        question: "What should feedback focus on?",
        options: [
          "Personality traits",
          "Specific behaviors",
          "Family background",
          "Appearance"
        ],
        correctAnswer: 1,
        explanation: "Feedback should address observable behaviors, not personal characteristics."
      },
      {
        id: 15,
        question: "What does 'M' stand for in SMART goals?",
        options: [
          "Motivational",
          "Measurable",
          "Manageable",
          "Meaningful"
        ],
        correctAnswer: 1,
        explanation: "'M' means Measurable - progress can be tracked."
      },
      {
        id: 16,
        question: "What makes goals more motivating?",
        options: [
          "Keeping them secret",
          "Connecting to values",
          "Making them easy",
          "Having many at once"
        ],
        correctAnswer: 1,
        explanation: "Values connection creates deeper motivation."
      },
      {
        id: 17,
        question: "What phase takes most session time?",
        options: [
          "Opening",
          "Exploration",
          "Check-in",
          "Closing"
        ],
        correctAnswer: 1,
        explanation: "Exploration is the deep work phase, typically longest."
      },
      {
        id: 18,
        question: "What technique allows thinking space?",
        options: [
          "Rushing",
          "Silence",
          "Interrupting",
          "Advising"
        ],
        correctAnswer: 1,
        explanation: "Silence gives clients space to think deeply."
      },
      {
        id: 19,
        question: "What are exceptions to confidentiality?",
        options: [
          "Interesting stories",
          "Risk of harm",
          "Social media",
          "Sharing with friends"
        ],
        correctAnswer: 1,
        explanation: "Risk of harm is a legitimate confidentiality exception."
      },
      {
        id: 20,
        question: "What boundary involves session length?",
        options: [
          "Financial",
          "Time",
          "Relationship",
          "Scope"
        ],
        correctAnswer: 1,
        explanation: "Time boundaries include session duration."
      },
      {
        id: 21,
        question: "What is the first step in defining a niche?",
        options: [
          "Copy others",
          "Identify passion",
          "Research competitors only",
          "Set high prices"
        ],
        correctAnswer: 1,
        explanation: "Starting with passion ensures work alignment."
      },
      {
        id: 22,
        question: "What influences pricing?",
        options: [
          "Random numbers",
          "Experience and training",
          "Current mood",
          "What others charge only"
        ],
        correctAnswer: 1,
        explanation: "Qualifications should be reflected in pricing."
      },
      {
        id: 23,
        question: "What principle honors client autonomy?",
        options: [
          "Control",
          "Respect",
          "Direction",
          "Authority"
        ],
        correctAnswer: 1,
        explanation: "Respect involves honoring client choice."
      },
      {
        id: 24,
        question: "What should be secured?",
        options: [
          "Client records",
          "Office decorations",
          "Personal social media",
          "Family photos"
        ],
        correctAnswer: 0,
        explanation: "Client information requires secure storage."
      },
      {
        id: 25,
        question: "What builds credibility?",
        options: [
          "Professionalism",
          "Casual attitude",
          "Flexible ethics",
          "Minimal effort"
        ],
        correctAnswer: 0,
        explanation: "Professional conduct builds trust and credibility."
      },
      {
        id: 26,
        question: "What is a sign of coach burnout?",
        options: [
          "Feeling energized",
          "Dreading sessions",
          "Making good progress",
          "Enjoying work"
        ],
        correctAnswer: 1,
        explanation: "Dreading work can indicate burnout."
      },
      {
        id: 27,
        question: "What does competence mean?",
        options: [
          "Knowing everything",
          "Working within training",
          "Taking all clients",
          "Never making mistakes"
        ],
        correctAnswer: 1,
        explanation: "Competence means staying within your actual skills."
      },
      {
        id: 28,
        question: "What is a development opportunity?",
        options: [
          "Stopping learning",
          "Regular supervision",
          "Working in isolation",
          "Avoiding feedback"
        ],
        correctAnswer: 1,
        explanation: "Supervision supports ongoing growth."
      },
      {
        id: 29,
        question: "What is package pricing?",
        options: [
          "Set sessions for fixed price",
          "Charging by minute",
          "Free only",
          "Payment after results"
        ],
        correctAnswer: 0,
        explanation: "Package pricing offers predetermined sessions."
      },
      {
        id: 30,
        question: "What is an essential system?",
        options: [
          "Scheduling",
          "Social media scrolling",
          "Personal shopping",
          "Entertainment"
        ],
        correctAnswer: 0,
        explanation: "Scheduling manages appointments effectively."
      },
      {
        id: 31,
        question: "What should be in a marketing plan?",
        options: [
          "100 methods",
          "2-3 methods",
          "No marketing",
          "Only free methods"
        ],
        correctAnswer: 1,
        explanation: "Start with manageable 2-3 methods."
      },
      {
        id: 32,
        question: "What is the niche statement formula?",
        options: [
          "I help [target] achieve [outcome] through [approach]",
          "I am the best",
          "I charge [amount]",
          "I work [days]"
        ],
        correctAnswer: 0,
        explanation: "This formula creates clear niche statements."
      },
      {
        id: 33,
        question: "What does 'A' stand for in SMART?",
        options: [
          "Ambitious",
          "Achievable",
          "Actionable",
          "Awesome"
        ],
        correctAnswer: 1,
        explanation: "'A' means Achievable - realistic goals."
      },
      {
        id: 34,
        question: "What does 'R' stand for in SMART?",
        options: [
          "Rapid",
          "Relevant",
          "Remarkable",
          "Required"
        ],
        correctAnswer: 1,
        explanation: "'R' means Relevant - aligned with values."
      },
      {
        id: 35,
        question: "What does 'T' stand for in SMART?",
        options: [
          "Thoughtful",
          "Time-bound",
          "Thorough",
          "Tested"
        ],
        correctAnswer: 1,
        explanation: "'T' means Time-bound - has deadline."
      },
      {
        id: 36,
        question: "What is a verbal rapport builder?",
        options: [
          "I appreciate you sharing",
          "You should",
          "That's wrong",
          "Moving on"
        ],
        correctAnswer: 0,
        explanation: "Appreciation statements build connection."
      },
      {
        id: 37,
        question: "What is an example of reflection?",
        options: [
          "What I'm hearing is",
          "You must feel",
          "Everyone thinks",
          "The solution is"
        ],
        correctAnswer: 0,
        explanation: "Reflection paraphrases to show understanding."
      },
      {
        id: 38,
        question: "How to handle emotional clients?",
        options: [
          "Change topic",
          "Acknowledge emotion",
          "Tell to calm down",
          "Ignore emotion"
        ],
        correctAnswer: 1,
        explanation: "Acknowledgment validates experience."
      },
      {
        id: 39,
        question: "What is building a practice?",
        options: [
          "Quick process",
          "Journey with small steps",
          "Impossible task",
          "Only about money"
        ],
        correctAnswer: 1,
        explanation: "It's a gradual journey requiring consistency."
      },
      {
        id: 40,
        question: "What is the foundation of effective coaching?",
        options: [
          "Ethical practice",
          "Marketing skills",
          "Office location",
          "Social media"
        ],
        correctAnswer: 0,
        explanation: "Ethics form the foundation for quality coaching."
      }
    ]
  }
};

export default lifeCoachingCertificate;
