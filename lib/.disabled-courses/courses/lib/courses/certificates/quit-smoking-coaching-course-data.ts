// quit-smoking-coaching-certificate.ts
export const quitSmokingCoachingCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "quit-smoking-coaching-certificate",
  title: "Quit Smoking Coaching (Certificate)",
  description: "Learn practical coaching techniques to help clients overcome nicotine addiction through behavioral change, support strategies, and relapse prevention methods.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🚭",
  badge: "Certificate",
  modulesCompleted: 0,
  totalModules: 6,

  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Understanding Nicotine Addiction",
      content: `
# Module 1: Understanding Nicotine Addiction

**Welcome to your journey as a quit smoking coach!** In this first module, we'll explore what nicotine addiction really is and why it's so challenging to overcome.

## What is Nicotine Addiction?

Nicotine addiction is when someone becomes physically and psychologically dependent on nicotine from tobacco products. When someone smokes, nicotine reaches their brain within seconds, creating a temporary feeling of pleasure or relaxation. Over time, the brain starts craving this feeling, leading to addiction.

**Key characteristics of nicotine addiction include:**
- Craving tobacco regularly
- Continuing to smoke despite health problems
- Experiencing withdrawal symptoms when trying to quit
- Giving up social or recreational activities to smoke

## How Addiction Works in the Brain

Your brain has special receptors that nicotine attaches to. When this happens, your brain releases dopamine, a chemical that makes you feel good. With repeated smoking:
- Your brain creates more nicotine receptors
- It becomes less sensitive to dopamine
- You need more nicotine to feel the same effect
- Without nicotine, you feel anxious or irritable

## Three Types of Smoking Triggers

People smoke for different reasons, and understanding these helps in coaching:

**1. Physical Triggers**
- Morning coffee or meals
- Alcohol consumption
- Work breaks
- Driving in the car

**2. Emotional Triggers**
- Stress or anxiety
- Boredom
- Social situations
- Celebration or relaxation

**3. Habitual Triggers**
- Specific times of day
- Certain locations
- Particular activities
- Social groups

## Common Withdrawal Symptoms

When someone quits smoking, they may experience:
- Nicotine cravings (strong urges to smoke)
- Irritability or anger
- Anxiety or depression
- Restlessness or difficulty concentrating
- Increased appetite
- Sleep disturbances

## The Coach's Role in Understanding Addiction

As a quit smoking coach, your first job is to understand addiction from your client's perspective. This means:
- Listening without judgment
- Recognizing each person's unique experience
- Understanding their personal smoking triggers
- Acknowledging the real difficulty of quitting

Remember: Every smoker's journey is different. Some have smoked for decades, others for just a few years. Some smoke heavily, others occasionally. Your understanding and empathy will be crucial to your success as a coach.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What chemical in the brain creates feelings of pleasure when nicotine is consumed?",
          options: ["Serotonin", "Dopamine", "Adrenaline", "Endorphins"],
          correctAnswer: 1,
          explanation: "Dopamine is released when nicotine reaches the brain, creating temporary feelings of pleasure or relaxation that lead to addiction."
        },
        {
          id: 2,
          question: "Which of these is considered a physical smoking trigger?",
          options: ["Morning coffee", "Feeling bored", "Celebrating with friends", "Watching TV"],
          correctAnswer: 0,
          explanation: "Morning coffee is a common physical trigger where the routine of coffee and cigarette becomes strongly associated."
        },
        {
          id: 3,
          question: "What happens in the brain when someone smokes repeatedly over time?",
          options: ["Fewer nicotine receptors develop", "Brain becomes more sensitive to dopamine", "Brain creates more nicotine receptors", "Dopamine production stops"],
          correctAnswer: 2,
          explanation: "With repeated smoking, the brain creates more nicotine receptors and becomes less sensitive to dopamine, requiring more nicotine for the same effect."
        },
        {
          id: 4,
          question: "Which symptom is NOT typically part of nicotine withdrawal?",
          options: ["Increased appetite", "Improved concentration", "Irritability", "Sleep disturbances"],
          correctAnswer: 1,
          explanation: "Difficulty concentrating is common during withdrawal, not improved concentration."
        },
        {
          id: 5,
          question: "What are the three types of smoking triggers mentioned?",
          options: ["Physical, Emotional, Habitual", "Morning, Afternoon, Evening", "Home, Work, Social", "Light, Medium, Heavy"],
          correctAnswer: 0,
          explanation: "The three types are Physical (like coffee breaks), Emotional (like stress), and Habitual (like specific times)."
        },
        {
          id: 6,
          question: "How quickly does nicotine reach the brain after smoking?",
          options: ["Within seconds", "After 5 minutes", "After 30 minutes", "After 1 hour"],
          correctAnswer: 0,
          explanation: "Nicotine reaches the brain within seconds, creating almost immediate effects."
        },
        {
          id: 7,
          question: "What is the coach's first job in understanding addiction?",
          options: ["Give advice immediately", "Understand from client's perspective", "Set quit dates", "Prescribe medications"],
          correctAnswer: 1,
          explanation: "The coach should first understand addiction from the client's perspective through listening without judgment."
        },
        {
          id: 8,
          question: "Which emotional trigger might lead someone to smoke?",
          options: ["Feeling stressed", "Driving a car", "Drinking water", "Morning routine"],
          correctAnswer: 0,
          explanation: "Stress is a common emotional trigger for smoking."
        },
        {
          id: 9,
          question: "What happens to dopamine sensitivity with nicotine addiction?",
          options: ["It increases", "It decreases", "It stays the same", "It disappears"],
          correctAnswer: 1,
          explanation: "The brain becomes less sensitive to dopamine, requiring more nicotine to feel the same effect."
        },
        {
          id: 10,
          question: "Which is a habitual smoking trigger?",
          options: ["Specific times of day", "Feeling anxious", "Drinking alcohol", "Eating meals"],
          correctAnswer: 0,
          explanation: "Specific times of day (like 10 AM break) become habitual triggers."
        },
        {
          id: 11,
          question: "What do people continue doing despite nicotine addiction?",
          options: ["Smoking despite health problems", "Avoiding all social situations", "Exercising regularly", "Eating healthy foods"],
          correctAnswer: 0,
          explanation: "Continuing to smoke despite knowing health problems is a characteristic of addiction."
        },
        {
          id: 12,
          question: "What is released less effectively as addiction progresses?",
          options: ["Nicotine receptors", "Dopamine naturally", "Stress hormones", "Blood cells"],
          correctAnswer: 1,
          explanation: "Natural dopamine release becomes less effective, making the person rely on nicotine for pleasure."
        },
        {
          id: 13,
          question: "Which is NOT a physical withdrawal symptom?",
          options: ["Nicotine cravings", "Restlessness", "Feeling overly energetic", "Increased appetite"],
          correctAnswer: 2,
          explanation: "Fatigue, not extra energy, is more common during withdrawal."
        },
        {
          id: 14,
          question: "What should coaches recognize about each smoker?",
          options: ["They all need the same approach", "Their unique experience", "They don't really want to quit", "It's easy for everyone"],
          correctAnswer: 1,
          explanation: "Each person has a unique smoking history and experience that must be recognized."
        },
        {
          id: 15,
          question: "What type of trigger is 'boredom'?",
          options: ["Physical trigger", "Emotional trigger", "Habitual trigger", "Social trigger"],
          correctAnswer: 1,
          explanation: "Boredom is an emotional trigger for smoking."
        },
        {
          id: 16,
          question: "How does the brain change with repeated nicotine use?",
          options: ["It needs less nicotine over time", "It creates more dopamine naturally", "It creates more nicotine receptors", "It stops responding to nicotine"],
          correctAnswer: 2,
          explanation: "The brain adapts by creating more nicotine receptors."
        },
        {
          id: 17,
          question: "What should a coach do when learning about a client's addiction?",
          options: ["Listen without judgment", "Tell them to just stop", "Compare to other clients", "Minimize their struggle"],
          correctAnswer: 0,
          explanation: "Listening without judgment is crucial for understanding the client's experience."
        },
        {
          id: 18,
          question: "Which is an example of a habitual trigger?",
          options: ["After meals", "When feeling sad", "When drinking coffee", "During work stress"],
          correctAnswer: 0,
          explanation: "After meals becomes a habitual trigger through repetition."
        },
        {
          id: 19,
          question: "What do cravings refer to in withdrawal?",
          options: ["Strong urges to smoke", "Desire to eat sweets", "Need to sleep more", "Wanting to exercise"],
          correctAnswer: 0,
          explanation: "Cravings are strong, sometimes intense urges to smoke."
        },
        {
          id: 20,
          question: "Why is understanding triggers important for coaching?",
          options: ["To punish clients for triggers", "To help avoid or manage triggers", "To ignore trigger situations", "To create more triggers"],
          correctAnswer: 1,
          explanation: "Understanding triggers helps develop strategies to avoid or manage them."
        }
      ]
    },
    {
      id: 2,
      title: "Effective Communication for Coaches",
      content: `
# Module 2: Effective Communication for Coaches

**Great coaches are great communicators.** This module teaches you how to communicate effectively with clients who want to quit smoking. You'll learn listening skills, questioning techniques, and how to build trust.

## The Foundation: Active Listening

Active listening means fully concentrating on what your client is saying, rather than just passively hearing them. It involves:

**Key elements of active listening:**
- Making eye contact (or attentive posture on calls)
- Nodding and using verbal cues ("I see," "Go on")
- Not interrupting
- Reflecting back what you've heard
- Asking clarifying questions

**Why active listening matters:**
- Builds trust and rapport
- Helps you understand the real issues
- Makes clients feel heard and valued
- Uncovers hidden challenges or fears

## Asking Powerful Questions

The right questions can help clients discover their own motivation and solutions:

**Open-ended questions** (start with What, How, When, Where, Why):
- "What concerns you most about quitting?"
- "How has smoking affected your life?"
- "When do you find smoking most satisfying?"
- "Where do you usually smoke?"
- "Why do you want to quit now?"

**Avoid judgmental questions:**
- Instead of "Why haven't you quit before?" try "What has made quitting challenging in the past?"
- Instead of "Don't you know smoking is bad?" try "What do you know about smoking's effects?"

## The Three Levels of Listening

**Level 1: Internal Listening**
- You're focused on your own thoughts
- Planning what to say next
- Relating everything to your own experience
- This is the least effective level for coaching

**Level 2: Focused Listening**
- Fully focused on the client
- Hearing their words, tone, and pace
- Noticing what they're not saying
- This is where effective coaching happens

**Level 3: Global Listening**
- Hearing the words plus sensing emotions
- Noticing body language (if in person)
- Sensing energy shifts
- Understanding context and environment

## Building Rapport and Trust

Trust is essential for coaching success. Build it through:

**Consistency:** Show up prepared and on time
**Confidentiality:** Keep all conversations private
**Empathy:** Show understanding of their struggle
**Honesty:** Be clear about what you can and can't do
**Respect:** Honor their pace and decisions

**Verbal techniques for building rapport:**
- Match their speaking pace
- Use similar language (not jargon)
- Acknowledge their feelings ("That sounds frustrating")
- Validate their experience ("Many people feel that way")

## Dealing with Resistance

Clients may resist change even when they want to quit. Here's how to handle it:

**Signs of resistance:**
- Frequently missing appointments
- "Yes, but..." responses
- Changing the subject
- Defensiveness about smoking

**Responses to resistance:**
- Explore it: "Tell me more about that concern"
- Normalize it: "Many people feel uncertain at this stage"
- Reflect it: "So part of you wants to quit, and part is worried"
- Be curious, not confrontational

## The GROW Model for Conversations

A simple framework for coaching conversations:

**G - Goal:** What do you want to achieve?
**R - Reality:** What's happening now?
**O - Options:** What could you do?
**W - Will:** What will you do?

Example conversation using GROW:
- "What's your goal for our work together?" (Goal)
- "How many cigarettes do you smoke now?" (Reality)
- "What options have you considered for cutting down?" (Options)
- "What specific step will you take this week?" (Will)

## Giving Feedback Effectively

When clients need correction or guidance:

**Use the SBI model:**
**S - Situation:** "During our last session..."
**B - Behavior:** "...when you said you hadn't reduced smoking..."
**I - Impact:** "...I felt concerned about your progress."

**Keep feedback:**
- Specific (not vague)
- Timely (soon after the event)
- Balanced (positive and constructive)
- Focused on behavior (not personality)

Remember: Your communication sets the tone for the entire coaching relationship. Good communication builds the foundation for successful quitting.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first level of listening where you're focused on your own thoughts?",
          options: ["Global Listening", "Focused Listening", "Internal Listening", "External Listening"],
          correctAnswer: 2,
          explanation: "Internal Listening is Level 1, where you're focused on your own thoughts rather than the client."
        },
        {
          id: 2,
          question: "Which type of question starts with 'What', 'How', or 'Why'?",
          options: ["Closed questions", "Judgmental questions", "Open-ended questions", "Leading questions"],
          correctAnswer: 2,
          explanation: "Open-ended questions start with these words and encourage detailed responses."
        },
        {
          id: 3,
          question: "What does the 'R' stand for in the GROW model?",
          options: ["Resources", "Reality", "Resolution", "Review"],
          correctAnswer: 1,
          explanation: "In GROW, R stands for Reality - understanding the current situation."
        },
        {
          id: 4,
          question: "Which element is NOT part of active listening?",
          options: ["Making eye contact", "Interrupting with advice", "Nodding and verbal cues", "Reflecting back what you heard"],
          correctAnswer: 1,
          explanation: "Interrupting is not part of active listening; it involves letting the client speak fully."
        },
        {
          id: 5,
          question: "What should you do when a client shows resistance?",
          options: ["Confront them immediately", "Ignore the resistance", "Explore it with curiosity", "Cancel future sessions"],
          correctAnswer: 2,
          explanation: "Explore resistance with curiosity to understand the underlying concerns."
        },
        {
          id: 6,
          question: "Which listening level involves noticing body language and sensing emotions?",
          options: ["Level 1 Listening", "Level 2 Listening", "Level 3 Listening", "Level 4 Listening"],
          correctAnswer: 2,
          explanation: "Level 3 (Global Listening) involves sensing emotions and noticing non-verbal cues."
        },
        {
          id: 7,
          question: "What does the 'B' stand for in the SBI feedback model?",
          options: ["Belief", "Behavior", "Background", "Benefit"],
          correctAnswer: 1,
          explanation: "In SBI, B stands for Behavior - describing the specific behavior observed."
        },
        {
          id: 8,
          question: "How can you build rapport through verbal techniques?",
          options: ["Using complex jargon", "Matching their speaking pace", "Talking more than listening", "Correcting their grammar"],
          correctAnswer: 1,
          explanation: "Matching speaking pace helps build connection and understanding."
        },
        {
          id: 9,
          question: "What type of question is 'What concerns you most about quitting?'",
          options: ["Closed question", "Leading question", "Open-ended question", "Judgmental question"],
          correctAnswer: 2,
          explanation: "This is an open-ended question starting with 'What' that encourages discussion."
        },
        {
          id: 10,
          question: "Which is a sign of client resistance?",
          options: ["Being early to sessions", "Frequently missing appointments", "Completing all assignments", "Sharing openly"],
          correctAnswer: 1,
          explanation: "Frequently missing appointments can indicate resistance to the process."
        },
        {
          id: 11,
          question: "What should feedback be according to the module?",
          options: ["Vague and general", "Given long after the event", "Specific and timely", "Only positive"],
          correctAnswer: 2,
          explanation: "Effective feedback is specific and given soon after the relevant event."
        },
        {
          id: 12,
          question: "Which is NOT a way to build trust with clients?",
          options: ["Keeping conversations private", "Being consistently prepared", "Sharing other clients' stories", "Showing empathy"],
          correctAnswer: 2,
          explanation: "Sharing other clients' stories violates confidentiality and trust."
        },
        {
          id: 13,
          question: "What does 'normalizing' resistance mean?",
          options: ["Telling the client they're abnormal", "Ignoring the resistance", "Making it seem common and understandable", "Punishing the resistance"],
          correctAnswer: 2,
          explanation: "Normalizing means helping the client understand their feelings are common and understandable."
        },
        {
          id: 14,
          question: "Which question is open-ended?",
          options: ["Do you want to quit smoking?", "Is smoking bad for you?", "How has smoking affected your life?", "Can you quit tomorrow?"],
          correctAnswer: 2,
          explanation: "'How' questions are open-ended and encourage detailed responses."
        },
        {
          id: 15,
          question: "What is Focused Listening (Level 2)?",
          options: ["Focusing on your own thoughts", "Fully focusing on the client", "Listening while multitasking", "Only hearing words, not meaning"],
          correctAnswer: 1,
          explanation: "Focused Listening means giving full attention to the client."
        },
        {
          id: 16,
          question: "What does the 'W' in GROW stand for?",
          options: ["Wish", "Will", "Way", "Work"],
          correctAnswer: 1,
          explanation: "W stands for Will - what the client commits to doing."
        },
        {
          id: 17,
          question: "How should you respond to 'Yes, but...' answers?",
          options: ["Argue with the client", "Explore the concern behind it", "Ignore the 'but' part", "End the conversation"],
          correctAnswer: 1,
          explanation: "'Yes, but...' often indicates underlying concerns worth exploring."
        },
        {
          id: 18,
          question: "What is reflecting in active listening?",
          options: ["Telling your own story", "Mirroring body language exactly", "Repeating what the client said in your words", "Ignoring the content"],
          correctAnswer: 2,
          explanation: "Reflecting means paraphrasing what you heard to show understanding."
        },
        {
          id: 19,
          question: "Which builds trust in coaching?",
          options: ["Being inconsistent", "Breaking confidentiality", "Showing empathy consistently", "Making promises you can't keep"],
          correctAnswer: 2,
          explanation: "Consistent empathy builds trust and rapport."
        },
        {
          id: 20,
          question: "What does the SBI model help with?",
          options: ["Setting goals", "Giving effective feedback", "Asking questions", "Building rapport"],
          correctAnswer: 1,
          explanation: "SBI (Situation-Behavior-Impact) is a framework for giving clear, constructive feedback."
        }
      ]
    },
    {
      id: 3,
      title: "Behavior Change Strategies",
      content: `
# Module 3: Behavior Change Strategies

**Changing behavior is at the heart of quitting smoking.** This module teaches you practical strategies to help clients change their smoking habits and build new, healthier behaviors.

## The Stages of Change Model

People move through different stages when changing behavior. Understanding these helps you meet clients where they are:

**Precontemplation Stage:**
- Not thinking about quitting
- May deny smoking is a problem
- Resistant to change discussions
- Your role: Raise awareness gently

**Contemplation Stage:**
- Thinking about quitting
- Weighing pros and cons
- Ambivalent about change
- Your role: Explore motivations

**Preparation Stage:**
- Planning to quit soon
- Making small changes
- Setting quit dates
- Your role: Help with planning

**Action Stage:**
- Actively quitting
- Using strategies to not smoke
- Experiencing withdrawal
- Your role: Support and encourage

**Maintenance Stage:**
- Staying quit (6+ months)
- Preventing relapse
- Building new habits
- Your role: Strengthen new patterns

## Goal Setting That Works

Effective goals motivate clients and give direction:

**SMART Goals for Quitting:**
**S - Specific:** "Reduce to 5 cigarettes daily" not "Smoke less"
**M - Measurable:** Can track progress clearly
**A - Achievable:** Realistic for this client
**R - Relevant:** Matters to their life and values
**T - Time-bound:** Has a clear timeline

**Example SMART goal:** "I will reduce from 20 to 10 cigarettes per day over the next two weeks by skipping my after-lunch cigarette and my last cigarette before bed."

## Habit Replacement Techniques

Since smoking is a strong habit, clients need to replace it with new behaviors:

**Identify-Reward-Replace Method:**
1. **Identify** the smoking trigger
2. **Recognize** the reward smoking provides
3. **Replace** with a healthier behavior that provides similar reward

**Examples of healthy replacements:**
- Instead of smoking with coffee → Sip water or herbal tea
- Instead of smoking when stressed → Take three deep breaths
- Instead of smoking when bored → Do 10 jumping jacks
- Instead of smoking after meals → Brush teeth immediately

## The 4 D's Strategy for Cravings

Teach clients this simple method for handling cravings:

**Delay:**
- Wait 10 minutes before considering smoking
- Cravings often pass within minutes
- Say "I'll decide in 10 minutes"

**Drink Water:**
- Sip cold water slowly
- Hydration helps with withdrawal
- Gives mouth something to do

**Deep Breathing:**
- Take 5 slow, deep breaths
- Increases oxygen, reduces anxiety
- Creates relaxation response

**Do Something Else:**
- Distract with activity
- Call a support person
- Go for a short walk

## Environmental Changes That Support Quitting

Help clients modify their environment to support their goals:

**Remove Smoking Reminders:**
- Clean house and car of smoke smell
- Remove lighters, ashtrays, cigarettes
- Wash all clothes and linens

**Create Non-Smoking Spaces:**
- Designate car as non-smoking
- Create pleasant smoke-free areas at home
- Avoid places where they usually smoke

**Change Routines:**
- Take different route to work
- Sit in different chair at home
- Change morning routine

## Self-Monitoring Techniques

Tracking increases awareness and accountability:

**Smoking Diary:**
- Record each cigarette: time, trigger, feeling
- Patterns become visible
- Helps identify problem times

**Progress Chart:**
- Visual display of cigarettes reduced
- Celebrate milestones
- Motivates continued effort

**Trigger Awareness Log:**
- Note situations that trigger cravings
- Plan alternative responses
- Build confidence in handling triggers

## Building Self-Efficacy

Self-efficacy is belief in one's ability to succeed. Build it through:

**Mastery Experiences:**
- Start with small, achievable goals
- Celebrate each success
- Build on small wins

**Vicarious Learning:**
- Share stories of others who quit
- Watch videos of successful quitters
- Join support groups

**Verbal Persuasion:**
- Express confidence in client
- Remind of past successes
- Encourage positive self-talk

**Emotional Regulation:**
- Teach stress management
- Help recognize emotional states
- Develop coping strategies

Remember: Behavior change takes time and practice. Your role is to guide clients through the process, celebrating progress and learning from setbacks.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "In which stage of change is someone who is 'thinking about quitting'?",
          options: ["Precontemplation", "Contemplation", "Preparation", "Action"],
          correctAnswer: 1,
          explanation: "Contemplation stage involves thinking about change and weighing pros and cons."
        },
        {
          id: 2,
          question: "What does the 'M' in SMART goals stand for?",
          options: ["Manageable", "Measurable", "Meaningful", "Motivational"],
          correctAnswer: 1,
          explanation: "In SMART goals, M stands for Measurable - able to track progress clearly."
        },
        {
          id: 3,
          question: "What is the first 'D' in the 4 D's strategy for cravings?",
          options: ["Drink water", "Deep breathe", "Delay", "Do something else"],
          correctAnswer: 2,
          explanation: "Delay is first - wait 10 minutes before considering smoking."
        },
        {
          id: 4,
          question: "Which stage involves 'actively quitting and using strategies'?",
          options: ["Preparation", "Action", "Maintenance", "Contemplation"],
          correctAnswer: 1,
          explanation: "Action stage is when someone is actively working to quit smoking."
        },
        {
          id: 5,
          question: "What should a smoking diary help identify?",
          options: ["Patterns in smoking behavior", "Favorite cigarette brands", "Cost of smoking", "Types of lighters used"],
          correctAnswer: 0,
          explanation: "A smoking diary helps identify patterns like times, triggers, and feelings associated with smoking."
        },
        {
          id: 6,
          question: "What does 'self-efficacy' mean?",
          options: ["Self-confidence", "Belief in one's ability to succeed", "Self-awareness", "Self-control"],
          correctAnswer: 1,
          explanation: "Self-efficacy is belief in one's ability to succeed at specific tasks or goals."
        },
        {
          id: 7,
          question: "Which is NOT part of the Identify-Reward-Replace method?",
          options: ["Identify the trigger", "Recognize the reward", "Replace with similar reward", "Ignore the habit"],
          correctAnswer: 3,
          explanation: "Ignoring the habit isn't part of this method; it involves actively replacing it."
        },
        {
          id: 8,
          question: "What type of goal is 'Reduce to 5 cigarettes daily'?",
          options: ["Vague goal", "Specific goal", "Long-term goal", "Unachievable goal"],
          correctAnswer: 1,
          explanation: "This is specific - clear about what and how much."
        },
        {
          id: 9,
          question: "How long should someone 'delay' when using the 4 D's?",
          options: ["1 minute", "5 minutes", "10 minutes", "30 minutes"],
          correctAnswer: 2,
          explanation: "Delaying 10 minutes often allows cravings to pass."
        },
        {
          id: 10,
          question: "What is a good replacement for smoking when stressed?",
          options: ["Take three deep breaths", "Eat a snack", "Watch TV", "Ignore the stress"],
          correctAnswer: 0,
          explanation: "Deep breathing provides similar calming effects without smoking."
        },
        {
          id: 11,
          question: "In which stage might someone be resistant to discussing change?",
          options: ["Preparation", "Action", "Precontemplation", "Maintenance"],
          correctAnswer: 2,
          explanation: "Precontemplation stage often involves resistance or denial."
        },
        {
          id: 12,
          question: "What does the 'T' in SMART stand for?",
          options: ["Timely", "Time-bound", "Thoughtful", "Trackable"],
          correctAnswer: 1,
          explanation: "T stands for Time-bound - having a clear timeline."
        },
        {
          id: 13,
          question: "Which environmental change supports quitting?",
          options: ["Keep lighters visible", "Remove ashtrays", "Smoke in different rooms", "Buy cigarettes in bulk"],
          correctAnswer: 1,
          explanation: "Removing ashtrays removes visual triggers."
        },
        {
          id: 14,
          question: "What builds self-efficacy through small successes?",
          options: ["Mastery experiences", "Vicarious learning", "Verbal persuasion", "Emotional regulation"],
          correctAnswer: 0,
          explanation: "Mastery experiences involve achieving small goals to build confidence."
        },
        {
          id: 15,
          question: "What should someone 'do' in the 4 D's after delaying?",
          options: ["Drink water", "Deep breathe", "Do something else", "All of the above"],
          correctAnswer: 3,
          explanation: "All three - Drink water, Deep breathe, and Do something else - are part of the strategy."
        },
        {
          id: 16,
          question: "What does a progress chart help with?",
          options: ["Tracking cigarette brands", "Visualizing reduction progress", "Counting money saved", "Planning social activities"],
          correctAnswer: 1,
          explanation: "Progress charts visually show reduction in smoking, which motivates continued effort."
        },
        {
          id: 17,
          question: "Which is an example of changing routines?",
          options: ["Taking same route to work", "Sitting in same chair", "Taking different route to work", "Keeping same morning routine"],
          correctAnswer: 2,
          explanation: "Changing routines, like taking a different route, breaks associations with smoking."
        },
        {
          id: 18,
          question: "What is 'vicarious learning' for building self-efficacy?",
          options: ["Learning from own mistakes", "Learning by watching others succeed", "Learning from books", "Learning through punishment"],
          correctAnswer: 1,
          explanation: "Vicarious learning means gaining confidence by seeing others succeed."
        },
        {
          id: 19,
          question: "What should be recorded in a smoking diary?",
          options: ["Time of each cigarette", "Trigger for smoking", "Feeling when smoking", "All of the above"],
          correctAnswer: 3,
          explanation: "All these details help identify patterns in smoking behavior."
        },
        {
          id: 20,
          question: "What is the role in the Preparation stage?",
          options: ["Raise awareness", "Explore motivations", "Help with planning", "Support and encourage"],
          correctAnswer: 2,
          explanation: "In Preparation stage, help clients with planning their quit attempt."
        }
      ]
    },
    {
      id: 4,
      title: "Relapse Prevention Planning",
      content: `
# Module 4: Relapse Prevention Planning

**Relapse is common in smoking cessation, but preventable with good planning.** This module teaches you how to help clients anticipate challenges and develop strong prevention strategies.

## Understanding Relapse

Relapse doesn't mean failure - it's often part of the quitting journey. Understanding it helps prevent it:

**What is Relapse?**
- Returning to smoking after quitting
- Can be one cigarette or full return
- Often triggered by specific situations
- Usually follows a predictable pattern

**The Relapse Process:**
1. **Trigger:** High-risk situation occurs
2. **Thought:** "Just one won't hurt"
3. **Emotion:** Stress, celebration, sadness
4. **Action:** Smoking happens
5. **Reaction:** Guilt, shame, or giving up

## Identifying High-Risk Situations

Help clients recognize situations where relapse risk is high:

**Common High-Risk Situations:**
- Social events with smoking friends
- Drinking alcohol
- High stress at work or home
- Arguments or conflicts
- Celebrations or holidays
- Feeling bored or lonely
- Places associated with smoking

**Personal Risk Assessment:**
Each client has unique risks. Help them identify:
- "When am I most likely to slip?"
- "Where do I feel strongest urges?"
- "Who might unintentionally encourage smoking?"
- "What emotions trigger my cravings?"

## Building a Relapse Prevention Plan

A written plan increases success rates significantly:

**Components of a Good Prevention Plan:**
1. **Personal triggers list** - Their specific high-risk situations
2. **Warning signs** - Early indicators of risk
3. **Coping strategies** - What to do in risky situations
4. **Support contacts** - Who to call for help
5. **Emergency plan** - What if they do smoke

**Sample Plan Section:**
"When I feel stressed at work (trigger), I usually want to smoke (warning sign). Instead, I will: 1) Take 5 deep breaths at my desk (coping strategy), 2) Text my support person (support contact), 3) If I still crave, go for a 10-minute walk (emergency plan)."

## Coping Strategies for High-Risk Situations

Teach clients specific ways to handle tempting situations:

**For Social Situations:**
- Practice saying "No, thanks" confidently
- Have a non-alcoholic drink in hand
- Excuse yourself temporarily if needed
- Bring a support person if possible

**For Stressful Times:**
- Use the 4 D's (Delay, Drink water, Deep breathe, Do something)
- Take short breaks for relaxation
- Use stress-reduction techniques learned
- Remember why quitting matters

**For Unexpected Cravings:**
- Carry craving-reduction items (gum, mints, water)
- Have your prevention plan accessible
- Use distraction techniques immediately
- Call your support network

## The Abstinence Violation Effect

This is when one cigarette leads to full relapse due to thoughts like "I've failed, so I might as well keep smoking."

**Preventing the Effect:**
- Normalize slips: "Many people have one cigarette"
- Reframe it: "A slip is not a failure, it's information"
- Learn from it: "What can we learn from this situation?"
- Recommit immediately: "Back on track right now"

**What to do after a slip:**
1. Don't buy more cigarettes
2. Get rid of any remaining cigarettes
3. Contact support immediately
4. Review what triggered the slip
5. Recommit to quitting

## Building a Strong Support System

Support significantly reduces relapse risk:

**Types of Support:**
- **Professional:** You as their coach, doctors, quitlines
- **Personal:** Family, friends, partner
- **Peer:** Other people quitting, support groups
- **Self:** Their own coping skills and determination

**How to Mobilize Support:**
- Ask specifically for what they need
- Share their quit date with supporters
- Provide supporters with ways to help
- Regular check-ins with support network

## Lifestyle Balance for Maintenance

Quitting is easier when life is balanced:

**Key Areas to Balance:**
- **Work:** Manage stress, take breaks
- **Relationships:** Communicate needs, seek understanding
- **Health:** Regular exercise, good nutrition
- **Leisure:** Enjoyable smoke-free activities
- **Spirituality/Values:** Connect with what matters

**Creating New Rewards:**
Since smoking provided rewards, create new ones:
- Money saved from not smoking → Special treat
- Better health → Enjoy new physical activities
- Sense of accomplishment → Celebrate milestones

## Regular Review and Adjustment

Prevention plans need updating:

**Weekly Review Questions:**
- What high-risk situations did I face?
- What coping strategies worked well?
- What needs improvement?
- What support was most helpful?
- What new triggers emerged?

**When to Adjust the Plan:**
- Life circumstances change
- New triggers appear
- Strategies stop working
- Support systems change
- Goals need updating

Remember: Relapse prevention isn't about being perfect. It's about being prepared, resilient, and committed to continuing the journey despite challenges.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in the relapse process?",
          options: ["Thinking 'just one won't hurt'", "Experiencing a trigger situation", "Feeling stressed or emotional", "Actually smoking"],
          correctAnswer: 1,
          explanation: "The relapse process typically starts with a trigger situation occurring."
        },
        {
          id: 2,
          question: "Which is NOT a common high-risk situation for relapse?",
          options: ["Social events with smoking friends", "Drinking alcohol", "High stress situations", "Reading a book quietly at home"],
          correctAnswer: 3,
          explanation: "Quiet, relaxed activities at home are typically lower risk than social or stressful situations."
        },
        {
          id: 3,
          question: "What should be included in a relapse prevention plan?",
          options: ["Personal triggers list", "Coping strategies", "Support contacts", "All of the above"],
          correctAnswer: 3,
          explanation: "A complete prevention plan includes triggers, strategies, and support contacts."
        },
        {
          id: 4,
          question: "What is the 'Abstinence Violation Effect'?",
          options: ["Celebrating success", "When one cigarette leads to full relapse", "Avoiding all risky situations", "Planning for success"],
          correctAnswer: 1,
          explanation: "This is when having one cigarette leads someone to think they've failed and smoke more."
        },
        {
          id: 5,
          question: "What should someone do immediately after having one cigarette (a slip)?",
          options: ["Buy more cigarettes", "Get rid of remaining cigarettes", "Hide it from their coach", "Give up on quitting"],
          correctAnswer: 1,
          explanation: "Getting rid of remaining cigarettes prevents further smoking and shows recommitment."
        },
        {
          id: 6,
          question: "Which type of support includes family and friends?",
          options: ["Professional support", "Personal support", "Peer support", "Self-support"],
          correctAnswer: 1,
          explanation: "Family and friends provide personal support in the quitting journey."
        },
        {
          id: 7,
          question: "What is a good coping strategy for social situations with smoking?",
          options: ["Practice saying 'No, thanks'", "Avoid all social events", "Smoke just one to fit in", "Don't tell anyone you quit"],
          correctAnswer: 0,
          explanation: "Practicing refusal skills helps handle social pressure confidently."
        },
        {
          id: 8,
          question: "How should slips be viewed according to the module?",
          options: ["As complete failures", "As learning opportunities", "As reasons to give up", "As unimportant events"],
          correctAnswer: 1,
          explanation: "Slips provide information about triggers and can strengthen future prevention."
        },
        {
          id: 9,
          question: "What lifestyle area should be balanced to prevent relapse?",
          options: ["Work stress management", "All areas: work, relationships, health, leisure", "Only work life", "Only leisure activities"],
          correctAnswer: 1,
          explanation: "All life areas need balance for successful long-term quitting."
        },
        {
          id: 10,
          question: "When should a prevention plan be adjusted?",
          options: ["Never - once written, it's set", "Only when complete relapse happens", "When life circumstances change", "Only at the coach's suggestion"],
          correctAnswer: 2,
          explanation: "Plans should be updated when circumstances, triggers, or strategies change."
        },
        {
          id: 11,
          question: "What thought often follows a trigger in the relapse process?",
          options: ["'Just one won't hurt'", "'I'm doing great'", "'I need to call my coach'", "'This too shall pass'"],
          correctAnswer: 0,
          explanation: "The thought 'just one won't hurt' often rationalizes the decision to smoke."
        },
        {
          id: 12,
          question: "What is peer support?",
          options: ["Support from family", "Support from other people quitting", "Support from professionals", "Support from pets"],
          correctAnswer: 1,
          explanation: "Peer support comes from others who are also quitting or have quit."
        },
        {
          id: 13,
          question: "What should be done with money saved from not smoking?",
          options: ["Ignore it", "Use it as a new reward", "Give it all away", "Save it indefinitely"],
          correctAnswer: 1,
          explanation: "Using saved money for rewards reinforces the benefits of quitting."
        },
        {
          id: 14,
          question: "What is the purpose of weekly plan reviews?",
          options: ["To criticize failures", "To identify what's working and needs adjustment", "To compare with others", "To set unrealistic new goals"],
          correctAnswer: 1,
          explanation: "Weekly reviews help identify effective strategies and areas needing adjustment."
        },
        {
          id: 15,
          question: "How can someone handle unexpected cravings?",
          options: ["Carry craving-reduction items", "Panic and give in", "Ignore them completely", "Always avoid going out"],
          correctAnswer: 0,
          explanation: "Having items like gum or mints available helps manage unexpected cravings."
        },
        {
          id: 16,
          question: "What does 'normalize slips' mean?",
          options: ["Make slips seem common and understandable", "Encourage occasional smoking", "Ignore slips completely", "Punish slips severely"],
          correctAnswer: 0,
          explanation: "Normalizing helps clients understand slips are common and not catastrophic failures."
        },
        {
          id: 17,
          question: "What should be part of personal risk assessment?",
          options: ["Identifying personal triggers", "Listing all cigarette brands smoked", "Counting exact days smoke-free", "Memorizing smoking statistics"],
          correctAnswer: 0,
          explanation: "Personal risk assessment focuses on individual triggers and high-risk situations."
        },
        {
          id: 18,
          question: "What is a warning sign of relapse risk?",
          options: ["Early indicators like increased cravings", "Smoking 20 cigarettes daily", "Never thinking about smoking", "Avoiding all triggers successfully"],
          correctAnswer: 0,
          explanation: "Warning signs are early indicators that risk is increasing, like stronger cravings."
        },
        {
          id: 19,
          question: "How should supporters be involved?",
          options: ["They shouldn't be told", "Given specific ways to help", "Expected to monitor constantly", "Only involved if relapse happens"],
          correctAnswer: 1,
          explanation: "Supporters are most helpful when given specific, actionable ways to support."
        },
        {
          id: 20,
          question: "What is key for lifestyle balance?",
          options: ["Focusing only on not smoking", "Balancing work, relationships, health and leisure", "Avoiding all stressful situations", "Quitting job if stressful"],
          correctAnswer: 1,
          explanation: "Balancing multiple life areas creates stability that supports quitting."
        }
      ]
    },
    {
      id: 5,
      title: "Support Tools and Resources",
      content: `
# Module 5: Support Tools and Resources

**The right tools make quitting easier.** This module introduces practical tools, resources, and support options you can recommend to clients to enhance their quitting journey.

## Digital Support Tools

Technology offers many free and low-cost quitting aids:

**Quitting Apps:**
- Track days smoke-free
- Count money saved
- Provide craving assistance
- Offer motivational messages
- Connect with support communities

**Popular App Features:**
- Craving timers (wait out urges)
- Health improvement trackers
- Badge systems for milestones
- Community forums
- Emergency craving help buttons

**Text Message Programs:**
- Daily motivational texts
- Craving coping tips
- Relapse prevention reminders
- Progress check-ins
- Available in multiple languages

## Professional Support Options

Beyond coaching, other professionals can help:

**Quitlines and Helplines:**
- Free telephone counseling
- Available 24/7 in many places
- Multilingual support
- Can provide medication advice
- Follow-up call programs

**Healthcare Providers:**
- Doctors can prescribe medications
- Dentists can discuss oral health benefits
- Pharmacists can advise on NRT products
- Mental health professionals for co-occurring issues

**Specialized Services:**
- Workplace quitting programs
- Hospital-based cessation clinics
- Community health center programs
- Insurance-covered counseling

## Nicotine Replacement Therapy (NRT)

NRT can double quitting success rates when used properly:

**Types of NRT:**
- **Patches:** Steady nicotine release
- **Gum:** Quick relief for cravings
- **Lozenges:** Dissolve in mouth
- **Inhalers:** Mimic hand-to-mouth action
- **Nasal spray:** Fastest craving relief

**How to Use NRT Effectively:**
- Start on quit day, not before
- Use enough (many under-dose)
- Use long enough (typically 8-12 weeks)
- Combine types if needed (patch + gum)
- Follow package instructions exactly

## Non-Nicotine Medications

Prescription options for those who need them:

**Common Medications:**
- **Bupropion (Zyban):** Reduces cravings and withdrawal
- **Varenicline (Chantix):** Blocks nicotine pleasure
- **Nortriptyline:** Older antidepressant that helps
- **Clonidine:** Blood pressure medication that reduces cravings

**Important Considerations:**
- Require doctor's prescription
- Have potential side effects
- Not suitable for everyone
- Often combined with behavioral support
- Need proper medical supervision

## Behavioral Tools and Aids

Simple physical tools can make a big difference:

**Craving Control Tools:**
- **Stress balls:** For hand occupation
- **Sugar-free gum/mints:** Oral fixation
- **Straws or toothpicks:** Oral substitute
- **Worry stones:** Tactile distraction
- **Fidget toys:** Keep hands busy

**Tracking and Monitoring:**
- **Quit meters:** Visual progress displays
- **Savings jars:** Physical money collection
- **Calendar cross-off:** Day-by-day tracking
- **Progress photos:** Visual health improvements
- **Journal apps:** Emotional tracking

## Social and Community Support

Connecting with others improves success:

**Support Groups:**
- In-person community groups
- Online forums and communities
- Social media quit groups
- Workplace support circles
- Faith-based cessation groups

**Accountability Systems:**
- Quit buddy system
- Family check-ins
- Online challenge groups
- Coach-client sessions
- Public commitment (social media)

**Family Education Resources:**
- How to support a quitter
- Understanding withdrawal
- Avoiding nagging
- Creating smoke-free home
- Celebrating milestones together

## Creating a Personal Quit Kit

Help clients assemble their customized support kit:

**What to Include:**
- List of personal reasons to quit
- Emergency contact numbers
- Coping strategy cards
- Distraction items
- Healthy snacks
- Water bottle
- Motivational quotes or photos

**Digital Quit Kit:**
- Saved inspirational messages
- List of craving coping strategies
- Photos of loved ones
- Health improvement tracker
- Support group links
- Emergency plan accessible on phone

## Evaluating Resource Effectiveness

Not all tools work for all people. Teach clients to assess:

**Questions to Ask:**
- Does this tool reduce my cravings?
- Do I actually use this resource?
- Is it convenient and accessible?
- Does it fit my lifestyle?
- Can I afford it long-term?

**When to Change Tools:**
- If not being used consistently
- If causing frustration
- If too expensive
- If not addressing main challenges
- If life circumstances change

## Integrating Multiple Supports

The most successful quitters often use multiple supports:

**Layered Support Approach:**
1. **Behavioral:** Coaching + self-monitoring
2. **Pharmacological:** NRT or medications
3. **Social:** Support groups + accountability
4. **Digital:** Apps + online resources
5. **Environmental:** Home + workplace changes

**Creating a Support Schedule:**
- Daily: App check-ins, water tracking
- Weekly: Support group, coach session
- Monthly: Progress review, plan adjustment
- As needed: Emergency support contacts

Remember: The best tools are the ones clients will actually use consistently. Help them find what works for their personality, lifestyle, and preferences.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What can quitting apps typically help track?",
          options: ["Days smoke-free", "Money saved", "Health improvements", "All of the above"],
          correctAnswer: 3,
          explanation: "Quitting apps often track multiple aspects including days smoke-free, money saved, and health progress."
        },
        {
          id: 2,
          question: "What does NRT stand for?",
          options: ["Nicotine Reduction Therapy", "Nicotine Replacement Therapy", "Nicotine Removal Treatment", "Nicotine Recovery Technique"],
          correctAnswer: 1,
          explanation: "NRT stands for Nicotine Replacement Therapy - providing nicotine without tobacco."
        },
        {
          id: 3,
          question: "Which is a type of Nicotine Replacement Therapy?",
          options: ["Patches", "Bupropion", "Varenicline", "Clonidine"],
          correctAnswer: 0,
          explanation: "Patches are a form of NRT that provide steady nicotine through the skin."
        },
        {
          id: 4,
          question: "What feature might a text message quitting program offer?",
          options: ["Daily motivational texts", "Craving coping tips", "Progress check-ins", "All of the above"],
          correctAnswer: 3,
          explanation: "Text programs often provide daily support, coping tips, and progress tracking."
        },
        {
          id: 5,
          question: "What is Bupropion (Zyban)?",
          options: ["A type of nicotine gum", "A prescription medication to help quit", "A type of nicotine patch", "A herbal supplement"],
          correctAnswer: 1,
          explanation: "Bupropion is a prescription medication that reduces cravings and withdrawal symptoms."
        },
        {
          id: 6,
          question: "What might be included in a personal quit kit?",
          options: ["List of reasons to quit", "Emergency contact numbers", "Healthy snacks", "All of the above"],
          correctAnswer: 3,
          explanation: "A comprehensive quit kit includes motivational items, contacts, and practical aids."
        },
        {
          id: 7,
          question: "What do quitlines typically offer?",
          options: ["Free telephone counseling", "24/7 availability in many areas", "Multilingual support", "All of the above"],
          correctAnswer: 3,
          explanation: "Quitlines often provide free, accessible, multilingual telephone support."
        },
        {
          id: 8,
          question: "What is a craving timer in quitting apps?",
          options: ["Times how long to smoke", "Helps wait out urges", "Sets smoking schedules", "Times cigarette breaks"],
          correctAnswer: 1,
          explanation: "Craving timers help users wait out urges, since cravings often pass within minutes."
        },
        {
          id: 9,
          question: "What type of support is a 'quit buddy system'?",
          options: ["Professional support", "Accountability system", "Pharmacological support", "Digital tool"],
          correctAnswer: 1,
          explanation: "Buddy systems create accountability through mutual support with another quitter."
        },
        {
          id: 10,
          question: "When should NRT typically be started?",
          options: ["Weeks before quitting", "On quit day", "After first relapse", "Only if cravings are severe"],
          correctAnswer: 1,
          explanation: "NRT is most effective when started on the quit day, not before."
        },
        {
          id: 11,
          question: "What might a digital quit kit include?",
          options: ["Saved inspirational messages", "Photos of loved ones", "Support group links", "All of the above"],
          correctAnswer: 3,
          explanation: "Digital kits can store motivational content, personal photos, and support resources."
        },
        {
          id: 12,
          question: "What is Varenicline (Chantix)?",
          options: ["A nicotine patch", "A medication that blocks nicotine pleasure", "A type of gum", "A herbal tea"],
          correctAnswer: 1,
          explanation: "Varenicline works by blocking nicotine's pleasurable effects in the brain."
        },
        {
          id: 13,
          question: "What is a layered support approach?",
          options: ["Using only one type of support", "Combining multiple support types", "Ignoring professional help", "Relying only on willpower"],
          correctAnswer: 1,
          explanation: "Layered approach combines behavioral, pharmacological, social, and other supports."
        },
        {
          id: 14,
          question: "What should clients ask about resource effectiveness?",
          options: ["Do I actually use this?", "Is it convenient?", "Does it reduce cravings?", "All of the above"],
          correctAnswer: 3,
          explanation: "Effective resources are actually used, convenient, and helpful for cravings."
        },
        {
          id: 15,
          question: "What are stress balls used for in quitting?",
          options: ["Hand occupation during cravings", "Throwing when frustrated", "Exercise equipment", "Decoration"],
          correctAnswer: 0,
          explanation: "Stress balls provide hand occupation similar to holding a cigarette."
        },
        {
          id: 16,
          question: "What do healthcare providers offer for quitting?",
          options: ["Medication prescriptions", "Medical advice", "Monitoring for side effects", "All of the above"],
          correctAnswer: 3,
          explanation: "Healthcare providers can prescribe, advise, and monitor quitting treatments."
        },
        {
          id: 17,
          question: "What is a savings jar in quitting?",
          options: ["A physical display of money saved", "A place to store cigarettes", "A type of bank account", "A decorative item"],
          correctAnswer: 0,
          explanation: "Savings jars visually represent money not spent on cigarettes, motivating continued quitting."
        },
        {
          id: 18,
          question: "When should tools be changed?",
          options: ["If not being used consistently", "If causing frustration", "If too expensive", "All of the above"],
          correctAnswer: 3,
          explanation: "Tools should be changed if impractical, frustrating, unaffordable, or unused."
        },
        {
          id: 19,
          question: "What do support groups provide?",
          options: ["Community with other quitters", "Shared experiences", "Mutual encouragement", "All of the above"],
          correctAnswer: 3,
          explanation: "Support groups offer community, shared understanding, and mutual support."
        },
        {
          id: 20,
          question: "What might be in a support schedule?",
          options: ["Daily app check-ins", "Weekly coach sessions", "Monthly progress reviews", "All of the above"],
          correctAnswer: 3,
          explanation: "A good schedule includes daily, weekly, and monthly support activities."
        }
      ]
    },
    {
      id: 6,
      title: "Coaching Ethics and Professional Practice",
      content: `
# Module 6: Coaching Ethics and Professional Practice

**Professional excellence requires ethical practice.** This final module covers the ethical standards, boundaries, and professional practices essential for effective quit smoking coaching.

## Core Ethical Principles

All coaching relationships should be built on these foundations:

**Confidentiality:**
- Protect client information
- Don't share details without permission
- Secure record keeping
- Explain confidentiality limits clearly

**Competence:**
- Work within your training limits
- Refer when needs exceed your expertise
- Continue professional development
- Be honest about qualifications

**Integrity:**
- Be honest and transparent
- Avoid conflicts of interest
- Keep promises and commitments
- Maintain professional boundaries

**Respect:**
- Honor client autonomy
- Respect cultural differences
- Value diverse perspectives
- Use inclusive language

## Setting Clear Boundaries

Professional boundaries protect both coach and client:

**Time Boundaries:**
- Start and end sessions on time
- Clear policies for between-session contact
- Reasonable response time expectations
- Vacation and availability communication

**Relationship Boundaries:**
- Professional, not personal relationships
- No dual relationships (friend, family, business)
- Appropriate physical boundaries
- Social media boundaries

**Scope of Practice Boundaries:**
- Coaching vs. therapy distinction
- Not diagnosing medical conditions
- Not prescribing medications
- Referring appropriately when needed

## Informed Consent Process

Clients should understand what they're agreeing to:

**What to Disclose:**
- Your qualifications and training
- Coaching process and methods
- Fees and payment policies
- Confidentiality limits
- Record keeping practices
- Complaint procedures

**Ongoing Consent:**
- Check understanding periodically
- Update consent if methods change
- Document consent clearly
- Allow withdrawal without penalty

## Handling Difficult Situations

Be prepared for challenging scenarios:

**When Clients Aren't Progressing:**
- Explore barriers without judgment
- Adjust approaches as needed
- Consider referral options
- Maintain hope and patience

**When Clients Relapse:**
- Respond with compassion
- Avoid blame or shame
- Use as learning opportunity
- Help re-engage with process

**When Clients Become Dependent:**
- Encourage self-efficacy
- Gradually reduce support
- Set clear ending expectations
- Provide closure appropriately

## Cultural Competence

Effective coaching respects diversity:

**Awareness of Differences:**
- Cultural attitudes toward smoking
- Family roles and influences
- Communication styles
- Health beliefs and practices

**Adapting Approaches:**
- Ask about cultural preferences
- Respect traditional healing practices
- Consider language barriers
- Accommodate religious practices

**Avoiding Assumptions:**
- Don't assume based on appearance
- Ask rather than presume
- Recognize within-group diversity
- Continuously educate yourself

## Record Keeping and Documentation

Good records protect everyone:

**What to Document:**
- Session dates and duration
- Topics discussed
- Goals and progress
- Agreements and plans
- Referrals made
- Important decisions

**Record Security:**
- Secure storage (locked or encrypted)
- Access limited to necessary persons
- Retention period compliance
- Proper disposal methods

**Client Access:**
- Policies for client record review
- Process for correcting errors
- Timely responses to requests
- Copy provision when appropriate

## Professional Development

Continuous learning maintains quality:

**Staying Current:**
- New research on smoking cessation
- Updated treatment guidelines
- Emerging tools and resources
- Legal and ethical developments

**Skill Development:**
- Advanced coaching techniques
- Specialized populations training
- Business and marketing skills
- Technology proficiency

**Supervision and Consultation:**
- Regular case consultation
- Professional supervision
- Peer support groups
- Mentorship relationships

## Business Practices

Professional coaching requires good business sense:

**Clear Policies:**
- Fee structure and payment terms
- Cancellation and rescheduling
- Late payment procedures
- Service scope and limitations

**Marketing Ethically:**
- Accurate representation of services
- Realistic outcome descriptions
- Respectful of other professionals
- Compliant with advertising regulations

**Managing Finances:**
- Separate business and personal accounts
- Proper tax documentation
- Insurance considerations
- Retirement planning

## Self-Care for Coaches

You can't pour from an empty cup:

**Recognizing Burnout Signs:**
- Chronic fatigue
- Irritability with clients
- Loss of enthusiasm
- Physical symptoms
- Decreased effectiveness

**Prevention Strategies:**
- Regular breaks and vacations
- Supervision and support
- Realistic caseload management
- Hobbies and interests outside work

**Healthy Boundaries for You:**
- Work-life balance
- Emotional detachment when appropriate
- Saying no when needed
- Prioritizing your own health

## Ending Coaching Relationships Well

Proper closure benefits everyone:

**Planning for Ending:**
- Discuss ending from beginning
- Set clear criteria for completion
- Gradual reduction if appropriate
- Celebration of achievements

**Termination Process:**
- Final progress review
- Future maintenance planning
- Resource provision for ongoing support
- Formal closure session

**Follow-up Considerations:**
- Policies for re-engagement
- Optional check-in sessions
- Referral for continued needs
- Feedback collection for improvement

Remember: Your ethical practice and professionalism not only protect your clients, but also build your reputation, prevent burnout, and ensure you can continue doing meaningful work for years to come.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the ethical principle of protecting client information?",
          options: ["Competence", "Confidentiality", "Integrity", "Respect"],
          correctAnswer: 1,
          explanation: "Confidentiality involves protecting client information and privacy."
        },
        {
          id: 2,
          question: "What should be included in informed consent?",
          options: ["Your qualifications", "Fees and policies", "Confidentiality limits", "All of the above"],
          correctAnswer: 3,
          explanation: "Informed consent should cover qualifications, fees, confidentiality, and all relevant policies."
        },
        {
          id: 3,
          question: "What is a time boundary in coaching?",
          options: ["Starting and ending sessions on time", "Becoming friends with clients", "Sharing personal problems", "Giving medical advice"],
          correctAnswer: 0,
          explanation: "Time boundaries include punctual session starts and ends, and clear contact policies."
        },
        {
          id: 4,
          question: "What should you do when a client's needs exceed your expertise?",
          options: ["Try your best anyway", "Refer to appropriate professionals", "Ignore the exceeding needs", "Charge more for extra work"],
          correctAnswer: 1,
          explanation: "Ethical practice requires referring clients when their needs exceed your competence."
        },
        {
          id: 5,
          question: "What is cultural competence in coaching?",
          options: ["Ignoring cultural differences", "Respecting and adapting to diversity", "Only working with similar clients", "Imposing your cultural views"],
          correctAnswer: 1,
          explanation: "Cultural competence involves respecting, understanding, and adapting to cultural differences."
        },
        {
          id: 6,
          question: "What should be documented in client records?",
          options: ["Session dates and topics", "Goals and progress", "Important decisions", "All of the above"],
          correctAnswer: 3,
          explanation: "Good documentation includes session details, progress, goals, and decisions."
        },
        {
          id: 7,
          question: "What is NOT appropriate in a coaching relationship?",
          options: ["Professional boundaries", "Dual relationships", "Clear agreements", "Respectful communication"],
          correctAnswer: 1,
          explanation: "Dual relationships (like also being friends or business partners) create conflicts of interest."
        },
        {
          id: 8,
          question: "How should you respond to client relapse?",
          options: ["With blame and shame", "With compassion and learning focus", "By terminating immediately", "By increasing fees"],
          correctAnswer: 1,
          explanation: "Respond to relapse with compassion and use it as a learning opportunity."
        },
        {
          id: 9,
          question: "What is important for record security?",
          options: ["Secure storage", "Limited access", "Proper disposal", "All of the above"],
          correctAnswer: 3,
          explanation: "Record security requires secure storage, access control, and proper disposal."
        },
        {
          id: 10,
          question: "What helps prevent coach burnout?",
          options: ["Regular breaks and vacations", "Taking on unlimited clients", "Working long hours consistently", "Ignoring personal needs"],
          correctAnswer: 0,
          explanation: "Regular breaks, vacations, and self-care prevent burnout in helping professions."
        },
        {
          id: 11,
          question: "What does 'scope of practice' refer to?",
          options: ["The limits of your professional role", "Your office location", "Your hourly rate", "Your marketing area"],
          correctAnswer: 0,
          explanation: "Scope of practice defines what services you're qualified and authorized to provide."
        },
        {
          id: 12,
          question: "What should be avoided in ethical marketing?",
          options: ["Accurate service descriptions", "Realistic outcome claims", "Promising guaranteed results", "Clear fee information"],
          correctAnswer: 2,
          explanation: "Ethical marketing avoids guarantees since outcomes depend on many factors."
        },
        {
          id: 13,
          question: "What is ongoing consent?",
          options: ["Consent given once at beginning", "Periodic checking of understanding and agreement", "Assuming continued consent", "Only getting written consent"],
          correctAnswer: 1,
          explanation: "Ongoing consent involves periodically checking client understanding and agreement."
        },
        {
          id: 14,
          question: "What is important for ending coaching well?",
          options: ["Abrupt termination", "Planning from the beginning", "Avoiding celebration", "No follow-up options"],
          correctAnswer: 1,
          explanation: "Good endings are planned from the start with clear completion criteria."
        },
        {
          id: 15,
          question: "What should you do with cultural differences?",
          options: ["Ignore them", "Ask about preferences and adapt", "Assume everyone is the same", "Only work with similar cultures"],
          correctAnswer: 1,
          explanation: "Ask about cultural preferences and adapt approaches respectfully."
        },
        {
          id: 16,
          question: "What is professional supervision?",
          options: ["Micromanaging clients", "Regular consultation with experienced professionals", "Watching clients constantly", "Lower level of service"],
          correctAnswer: 1,
          explanation: "Professional supervision involves regular consultation for skill development and ethical guidance."
        },
        {
          id: 17,
          question: "What should be separate in business practices?",
          options: ["Business and personal finances", "Client files and grocery lists", "Professional and casual clothing", "Work phone and personal phone"],
          correctAnswer: 0,
          explanation: "Business and personal finances should be kept separate for professionalism and accounting."
        },
        {
          id: 18,
          question: "What is a sign of coach burnout?",
          options: ["Chronic fatigue", "Increased enthusiasm", "Better client outcomes", "More energy for work"],
          correctAnswer: 0,
          explanation: "Chronic fatigue is a common sign of burnout in helping professionals."
        },
        {
          id: 19,
          question: "What should you avoid assuming about clients?",
          options: ["Based on appearance", "Based on cultural background", "Based on smoking history", "All of the above"],
          correctAnswer: 3,
          explanation: "Avoid assumptions based on appearance, culture, or any single factor."
        },
        {
          id: 20,
          question: "What is included in integrity?",
          options: ["Honesty and transparency", "Keeping promises", "Avoiding conflicts of interest", "All of the above"],
          correctAnswer: 3,
          explanation: "Integrity involves honesty, promise-keeping, and avoiding conflicts of interest."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Quit Smoking Coaching Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. 40 questions testing your understanding of quit smoking coaching principles and practices.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What chemical creates pleasure feelings when nicotine reaches the brain?",
        options: ["Serotonin", "Dopamine", "Adrenaline", "Endorphins"],
        correctAnswer: 1,
        explanation: "Dopamine release creates temporary pleasure, leading to addiction.",
        module: 1
      },
      {
        id: 2,
        question: "Which is a physical smoking trigger?",
        options: ["Morning coffee", "Boredom", "Celebration", "Stress"],
        correctAnswer: 0,
        explanation: "Morning coffee is a physical trigger through routine association.",
        module: 1
      },
      {
        id: 3,
        question: "What happens to nicotine receptors with repeated smoking?",
        options: ["They decrease", "They increase", "They disappear", "They change color"],
        correctAnswer: 1,
        explanation: "The brain creates more nicotine receptors with repeated use.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "What level of listening involves focusing on your own thoughts?",
        options: ["Global Listening", "Focused Listening", "Internal Listening", "Active Listening"],
        correctAnswer: 2,
        explanation: "Internal Listening (Level 1) is self-focused rather than client-focused.",
        module: 2
      },
      {
        id: 5,
        question: "What does the 'R' stand for in the GROW model?",
        options: ["Resources", "Reality", "Resolution", "Review"],
        correctAnswer: 1,
        explanation: "R stands for Reality - understanding current situation.",
        module: 2
      },
      {
        id: 6,
        question: "Which question is open-ended?",
        options: ["Do you want to quit?", "How has smoking affected you?", "Is smoking bad?", "Can you quit tomorrow?"],
        correctAnswer: 1,
        explanation: "'How' questions encourage detailed, open responses.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "In which stage is someone 'thinking about quitting'?",
        options: ["Precontemplation", "Contemplation", "Preparation", "Action"],
        correctAnswer: 1,
        explanation: "Contemplation involves thinking about change.",
        module: 3
      },
      {
        id: 8,
        question: "What is the first 'D' in the 4 D's strategy?",
        options: ["Drink water", "Deep breathe", "Delay", "Do something"],
        correctAnswer: 2,
        explanation: "Delay first - wait 10 minutes before considering smoking.",
        module: 3
      },
      {
        id: 9,
        question: "What does 'self-efficacy' mean?",
        options: ["Self-confidence", "Belief in ability to succeed", "Self-awareness", "Willpower"],
        correctAnswer: 1,
        explanation: "Self-efficacy is belief in one's ability to achieve specific goals.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "What is the first step in relapse process?",
        options: ["Thinking about smoking", "Trigger situation", "Feeling stressed", "Actually smoking"],
        correctAnswer: 1,
        explanation: "Relapse typically starts with a high-risk trigger situation.",
        module: 4
      },
      {
        id: 11,
        question: "What should be done immediately after a slip?",
        options: ["Buy more cigarettes", "Get rid of remaining cigarettes", "Hide it", "Give up"],
        correctAnswer: 1,
        explanation: "Remove remaining cigarettes to prevent further smoking.",
        module: 4
      },
      {
        id: 12,
        question: "What does 'normalize slips' mean?",
        options: ["Make them seem common", "Encourage them", "Ignore them", "Punish them"],
        correctAnswer: 0,
        explanation: "Normalizing helps clients see slips as common, not catastrophic.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "What does NRT stand for?",
        options: ["Nicotine Reduction Therapy", "Nicotine Replacement Therapy", "Nicotine Removal Treatment", "Nicotine Recovery Technique"],
        correctAnswer: 1,
        explanation: "NRT provides nicotine without tobacco to ease withdrawal.",
        module: 5
      },
      {
        id: 14,
        question: "When should NRT typically start?",
        options: ["Before quit day", "On quit day", "After relapse", "Only if cravings severe"],
        correctAnswer: 1,
        explanation: "Start NRT on quit day for maximum effectiveness.",
        module: 5
      },
      {
        id: 15,
        question: "What might a quit kit include?",
        options: ["Reasons to quit list", "Emergency contacts", "Healthy snacks", "All of above"],
        correctAnswer: 3,
        explanation: "Comprehensive quit kits include motivational and practical items.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What ethical principle protects client information?",
        options: ["Competence", "Confidentiality", "Integrity", "Respect"],
        correctAnswer: 1,
        explanation: "Confidentiality involves protecting client privacy.",
        module: 6
      },
      {
        id: 17,
        question: "What should you do when needs exceed expertise?",
        options: ["Try anyway", "Refer appropriately", "Ignore needs", "Charge more"],
        correctAnswer: 1,
        explanation: "Ethical practice requires appropriate referral.",
        module: 6
      },
      {
        id: 18,
        question: "What helps prevent coach burnout?",
        options: ["Regular breaks", "Unlimited clients", "Long hours", "Ignoring self"],
        correctAnswer: 0,
        explanation: "Regular breaks and self-care prevent burnout.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What are the three types of smoking triggers?",
        options: ["Physical, Emotional, Habitual", "Morning, Noon, Night", "Home, Work, Social", "Light, Medium, Heavy"],
        correctAnswer: 0,
        explanation: "Physical, emotional, and habitual triggers cover most smoking situations.",
        module: 1
      },
      {
        id: 20,
        question: "What is Level 2 Listening?",
        options: ["Internal focus", "Focused on client", "Global awareness", "Passive hearing"],
        correctAnswer: 1,
        explanation: "Level 2 is Focused Listening - fully attentive to client.",
        module: 2
      },
      {
        id: 21,
        question: "What does SMART goal 'T' stand for?",
        options: ["Timely", "Time-bound", "Thoughtful", "Trackable"],
        correctAnswer: 1,
        explanation: "Time-bound means having a clear timeline.",
        module: 3
      },
      {
        id: 22,
        question: "What is peer support?",
        options: ["Family support", "Support from other quitters", "Professional support", "Self-support"],
        correctAnswer: 1,
        explanation: "Peer support comes from others going through similar experiences.",
        module: 4
      },
      {
        id: 23,
        question: "What might quitting apps track?",
        options: ["Days smoke-free", "Money saved", "Health improvements", "All of above"],
        correctAnswer: 3,
        explanation: "Apps often track multiple progress measures.",
        module: 5
      },
      {
        id: 24,
        question: "What should be in informed consent?",
        options: ["Qualifications", "Fees", "Confidentiality", "All of above"],
        correctAnswer: 3,
        explanation: "Complete informed consent covers all important policies.",
        module: 6
      },
      {
        id: 25,
        question: "How quickly does nicotine reach brain?",
        options: ["Seconds", "Minutes", "Hours", "Varies"],
        correctAnswer: 0,
        explanation: "Nicotine reaches brain within seconds of inhalation.",
        module: 1
      },
      {
        id: 26,
        question: "What is good for social smoking situations?",
        options: ["Practice refusal skills", "Avoid all events", "Smoke to fit in", "Don't tell"],
        correctAnswer: 0,
        explanation: "Practicing refusal skills builds confidence in social situations.",
        module: 4
      },
      {
        id: 27,
        question: "What builds self-efficacy through small wins?",
        options: ["Mastery experiences", "Vicarious learning", "Verbal persuasion", "Emotion regulation"],
        correctAnswer: 0,
        explanation: "Mastery experiences involve achieving small, progressive goals.",
        module: 3
      },
      {
        id: 28,
        question: "What is cultural competence?",
        options: ["Ignoring differences", "Respecting diversity", "Only similar clients", "Imposing views"],
        correctAnswer: 1,
        explanation: "Cultural competence involves respecting and adapting to differences.",
        module: 6
      },
      {
        id: 29,
        question: "What is a smoking diary for?",
        options: ["Identifying patterns", "Tracking brands", "Counting lighters", "Social media"],
        correctAnswer: 0,
        explanation: "Diaries help identify patterns in smoking behavior.",
        module: 3
      },
      {
        id: 30,
        question: "What is Bupropion?",
        options: ["Nicotine gum", "Prescription medication", "Herbal supplement", "Type of patch"],
        correctAnswer: 1,
        explanation: "Bupropion is a prescription medication that helps reduce cravings.",
        module: 5
      },
      {
        id: 31,
        question: "What should documentation include?",
        options: ["Session details", "Progress notes", "Important decisions", "All of above"],
        correctAnswer: 3,
        explanation: "Good documentation is comprehensive and accurate.",
        module: 6
      },
      {
        id: 32,
        question: "What is the GROW model for?",
        options: ["Structuring conversations", "Building rapport", "Setting fees", "Marketing"],
        correctAnswer: 0,
        explanation: "GROW provides structure for effective coaching conversations.",
        module: 2
      },
      {
        id: 33,
        question: "What is abstinence violation effect?",
        options: ["Celebrating success", "One cigarette leads to more", "Avoiding triggers", "Planning"],
        correctAnswer: 1,
        explanation: "Thinking one cigarette means failure, leading to more smoking.",
        module: 4
      },
      {
        id: 34,
        question: "What do quitlines offer?",
        options: ["Free counseling", "24/7 support", "Multilingual help", "All of above"],
        correctAnswer: 3,
        explanation: "Quitlines often provide comprehensive telephone support.",
        module: 5
      },
      {
        id: 35,
        question: "What are withdrawal symptoms?",
        options: ["Cravings", "Irritability", "Sleep issues", "All of above"],
        correctAnswer: 3,
        explanation: "Withdrawal includes various physical and emotional symptoms.",
        module: 1
      },
      {
        id: 36,
        question: "What is good feedback?",
        options: ["Specific and timely", "Vague and delayed", "Only positive", "Only negative"],
        correctAnswer: 0,
        explanation: "Effective feedback is specific and given soon after relevant events.",
        module: 2
      },
      {
        id: 37,
        question: "What is preparation stage?",
        options: ["Not thinking of quitting", "Planning to quit", "Actively quitting", "Maintaining"],
        correctAnswer: 1,
        explanation: "Preparation involves planning and preparing to quit.",
        module: 3
      },
      {
        id: 38,
        question: "What should prevention plans include?",
        options: ["Triggers list", "Coping strategies", "Support contacts", "All of above"],
        correctAnswer: 3,
        explanation: "Comprehensive plans address all aspects of prevention.",
        module: 4
      },
      {
        id: 39,
        question: "What is scope of practice?",
        options: ["Service limits", "Office location", "Hourly rate", "Marketing area"],
        correctAnswer: 0,
        explanation: "Defines what services you're qualified to provide.",
        module: 6
      },
      {
        id: 40,
        question: "What is most important for coaching success?",
        options: ["Ethical practice", "Building trust", "Good communication", "All of above"],
        correctAnswer: 3,
        explanation: "All these elements combine for effective coaching relationships.",
        module: "All"
      }
    ]
  }
};
