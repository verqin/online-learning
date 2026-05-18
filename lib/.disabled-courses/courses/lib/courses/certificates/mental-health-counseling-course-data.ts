export const mentalHealthCounselingCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "mental-health-counseling-certificate",
  title: "Mental Health Counseling (Certificate)",
  description: "Foundational course covering basic counseling skills, communication techniques, and understanding common mental health concerns. Learn to provide supportive listening and basic guidance.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🧠",
  badge: "Certificate",
  prerequisites: [],
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Foundations of Mental Health",
      content: `
# Module 1: Foundations of Mental Health

## Understanding Mental Health Basics
Mental health is about our emotional, psychological, and social well-being. It affects how we think, feel, and act. Good mental health isn't just the absence of problems—it's having positive characteristics like resilience, good relationships, and life satisfaction.

## What Counseling Means
Counseling is a helping relationship where one person supports another through listening, understanding, and guiding. It's not about giving advice or solving problems for people. Instead, it helps people find their own solutions.

## Common Misunderstandings
**Myth:** Only people with severe problems need counseling.
**Fact:** Counseling can help anyone facing life challenges, big or small.

**Myth:** Counselors just tell people what to do.
**Fact:** Good counselors help people explore their own thoughts and feelings to find their best path.

**Myth:** Talking about problems makes them worse.
**Fact:** Expressing feelings in a safe space often brings relief and clarity.

## Basic Counseling Goals
The main goals in basic counseling are:
1. Provide a safe, confidential space for sharing
2. Help people feel heard and understood
3. Support self-exploration and insight
4. Encourage healthy coping strategies
5. Build hope and resilience

## Ethical Foundations
Basic ethical principles include:
- **Confidentiality:** Keeping what's shared private
- **Respect:** Treating everyone with dignity
- **Boundaries:** Maintaining appropriate professional limits
- **Self-awareness:** Knowing your own limits and biases

## When to Refer
An important skill is recognizing when someone needs more help than you can provide. Signs include severe symptoms, safety concerns, or specialized needs beyond basic support.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is mental health about?",
          options: [
            "Only avoiding problems",
            "Emotional, psychological, and social well-being",
            "Only thinking clearly",
            "Only medication management"
          ],
          correctAnswer: 1,
          explanation: "Mental health involves emotional, psychological, and social well-being—how we think, feel, and act."
        },
        {
          id: 2,
          question: "What is counseling?",
          options: [
            "Giving advice to people",
            "A helping relationship through listening and guiding",
            "Solving people's problems for them",
            "Medical treatment only"
          ],
          correctAnswer: 1,
          explanation: "Counseling is a helping relationship where support comes through listening, understanding, and guiding."
        },
        {
          id: 3,
          question: "What is a myth about counseling?",
          options: [
            "Counseling can help with life challenges",
            "Only severe problems need counseling",
            "Counseling provides confidential space",
            "Counseling supports self-exploration"
          ],
          correctAnswer: 1,
          explanation: "A common myth is that only people with severe problems need counseling, but it can help anyone."
        },
        {
          id: 4,
          question: "What do good counselors help people do?",
          options: [
            "Avoid their feelings",
            "Explore their own thoughts and feelings",
            "Follow specific instructions",
            "Forget their problems"
          ],
          correctAnswer: 1,
          explanation: "Good counselors help people explore their own thoughts and feelings to find their best solutions."
        },
        {
          id: 5,
          question: "What is the first basic counseling goal?",
          options: [
            "Solve people's problems",
            "Provide safe, confidential space",
            "Make people happy",
            "Give medical advice"
          ],
          correctAnswer: 1,
          explanation: "The first goal is providing a safe, confidential space where people can share openly."
        },
        {
          id: 6,
          question: "What does confidentiality mean?",
          options: [
            "Sharing information with family",
            "Keeping what's shared private",
            "Only writing things down",
            "Telling supervisors everything"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality means keeping what people share in counseling private and protected."
        },
        {
          id: 7,
          question: "What is NOT a basic counseling goal?",
          options: [
            "Help people feel heard",
            "Solve all problems immediately",
            "Support self-exploration",
            "Build hope and resilience"
          ],
          correctAnswer: 1,
          explanation: "Counseling doesn't aim to solve all problems immediately but to support the process."
        },
        {
          id: 8,
          question: "What does respect in counseling involve?",
          options: [
            "Only agreeing with people",
            "Treating everyone with dignity",
            "Being friends with clients",
            "Avoiding difficult topics"
          ],
          correctAnswer: 1,
          explanation: "Respect means treating every person with dignity regardless of their situation or views."
        },
        {
          id: 9,
          question: "What is self-awareness for counselors?",
          options: [
            "Only knowing counseling techniques",
            "Knowing your own limits and biases",
            "Always feeling confident",
            "Never making mistakes"
          ],
          correctAnswer: 1,
          explanation: "Self-awareness involves understanding your own limitations, biases, and reactions."
        },
        {
          id: 10,
          question: "When should you consider referring someone?",
          options: [
            "When they're making progress",
            "When they need more help than you can provide",
            "When they ask many questions",
            "When they're happy"
          ],
          correctAnswer: 1,
          explanation: "Refer when someone needs specialized help or has concerns beyond basic supportive counseling."
        },
        {
          id: 11,
          question: "What is a fact about expressing feelings?",
          options: [
            "It always makes things worse",
            "In safe space, it brings relief",
            "People should keep feelings inside",
            "Only positive feelings matter"
          ],
          correctAnswer: 1,
          explanation: "Expressing feelings in a safe, supportive space often brings relief and clarity."
        },
        {
          id: 12,
          question: "What do boundaries help maintain?",
          options: [
            "Close friendships",
            "Appropriate professional limits",
            "Complete openness",
            "Emotional distance always"
          ],
          correctAnswer: 1,
          explanation: "Boundaries help maintain appropriate professional limits in the counseling relationship."
        },
        {
          id: 13,
          question: "What does good mental health include?",
          options: [
            "Only no problems",
            "Resilience and good relationships",
            "Constant happiness",
            "Never feeling sad"
          ],
          correctAnswer: 1,
          explanation: "Good mental health includes positive characteristics like resilience and healthy relationships."
        },
        {
          id: 14,
          question: "What is counseling NOT about?",
          options: [
            "Supporting people",
            "Giving advice or solving problems for people",
            "Listening carefully",
            "Providing safe space"
          ],
          correctAnswer: 1,
          explanation: "Counseling is not about giving advice or solving problems for people but helping them find their own way."
        },
        {
          id: 15,
          question: "What helps people find solutions?",
          options: [
            "Following counselor's advice exactly",
            "Exploring their own thoughts and feelings",
            "Avoiding difficult topics",
            "Quick decisions"
          ],
          correctAnswer: 1,
          explanation: "People often find the best solutions by exploring their own thoughts and feelings with guidance."
        },
        {
          id: 16,
          question: "What is an ethical principle?",
          options: [
            "Sharing interesting stories",
            "Keeping confidentiality",
            "Being friends first",
            "Always agreeing"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality is a fundamental ethical principle in counseling relationships."
        },
        {
          id: 17,
          question: "What might indicate need for referral?",
          options: [
            "Normal stress",
            "Severe symptoms or safety concerns",
            "Asking questions",
            "Wanting to talk"
          ],
          correctAnswer: 1,
          explanation: "Severe symptoms or safety concerns may indicate need for specialized professional help."
        },
        {
          id: 18,
          question: "What does resilience mean?",
          options: [
            "Never having problems",
            "Bouncing back from difficulties",
            "Always being strong",
            "Avoiding challenges"
          ],
          correctAnswer: 1,
          explanation: "Resilience is the ability to recover or bounce back from difficulties and challenges."
        },
        {
          id: 19,
          question: "What is NOT a counseling goal?",
          options: [
            "Providing safe space",
            "Making all decisions for people",
            "Supporting self-exploration",
            "Building hope"
          ],
          correctAnswer: 1,
          explanation: "Counseling doesn't involve making decisions for people but supporting their own process."
        },
        {
          id: 20,
          question: "Why is self-awareness important?",
          options: [
            "To impress clients",
            "To recognize your own limits",
            "To never need help",
            "To know everything"
          ],
          correctAnswer: 1,
          explanation: "Self-awareness helps counselors recognize their own limits and when they need support."
        }
      ]
    },
    {
      id: 2,
      title: "Active Listening Skills",
      content: `
# Module 2: Active Listening Skills

## What is Active Listening?
Active listening is fully focusing on what someone is saying, understanding their message, and showing you're engaged. It's not just hearing words—it's understanding feelings and meanings behind them.

## Key Components of Active Listening
**Full Attention:** Put aside distractions. Make eye contact (when appropriate), nod, and use open body language.

**No Interrupting:** Let people finish their thoughts before responding. Silence can be powerful.

**Reflecting:** Repeat back what you heard in your own words. "It sounds like you're feeling..." or "What I'm hearing is..."

**Asking Open Questions:** Use questions that can't be answered with just "yes" or "no." "How did that make you feel?" or "What was that experience like for you?"

**Noticing Non-Verbal Cues:** Pay attention to tone of voice, facial expressions, and body language.

## Common Listening Barriers
**Planning Your Response:** Thinking about what you'll say instead of listening.

**Judging:** Forming opinions about what's being shared.

**Problem-Solving:** Jumping to solutions before fully understanding.

**Distractions:** Letting your mind wander or getting distracted by surroundings.

## The Power of Silence
Silence gives people space to think and feel. It shows you're not rushing them. Comfort with silence is a valuable counseling skill. Count to five silently before responding to allow processing time.

## Reflective Responses
Reflective responses show you're listening and help clarify understanding:
- "You seem frustrated about that situation."
- "That sounds really challenging for you."
- "I'm hearing that you feel torn between those options."

Avoid parroting exact words. Instead, reflect the essence and feelings.

## Validating Feelings
Validation acknowledges that feelings make sense given the situation:
- "Anyone in your situation would feel that way."
- "It's completely understandable to feel that."
- "Your feelings are valid."

Validation doesn't mean agreeing with everything, but acknowledging the reality of feelings.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is active listening?",
          options: [
            "Just hearing words",
            "Fully focusing and understanding message",
            "Thinking about responses",
            "Taking notes only"
          ],
          correctAnswer: 1,
          explanation: "Active listening involves fully focusing on, understanding, and engaging with what someone is saying."
        },
        {
          id: 2,
          question: "What is full attention in listening?",
          options: [
            "Multitasking while listening",
            "Putting aside distractions and focusing",
            "Only listening to words",
            "Planning your response"
          ],
          correctAnswer: 1,
          explanation: "Full attention means putting aside distractions and fully focusing on the speaker."
        },
        {
          id: 3,
          question: "What should you avoid during listening?",
          options: [
            "Eye contact",
            "Interrupting people",
            "Nodding occasionally",
            "Facing the person"
          ],
          correctAnswer: 1,
          explanation: "Avoid interrupting—let people finish their thoughts before responding."
        },
        {
          id: 4,
          question: "What is reflecting?",
          options: [
            "Giving advice",
            "Repeating back what you heard",
            "Telling your own story",
            "Asking many questions"
          ],
          correctAnswer: 1,
          explanation: "Reflecting means repeating back what you heard in your own words to show understanding."
        },
        {
          id: 5,
          question: "What are open questions?",
          options: [
            "Yes/no questions",
            "Questions requiring more than yes/no",
            "Leading questions",
            "Rhetorical questions"
          ],
          correctAnswer: 1,
          explanation: "Open questions can't be answered with just yes/no—they encourage elaboration."
        },
        {
          id: 6,
          question: "What is a listening barrier?",
          options: [
            "Giving full attention",
            "Planning your response while listening",
            "Using open body language",
            "Making eye contact"
          ],
          correctAnswer: 1,
          explanation: "Planning your response while someone is talking prevents full listening."
        },
        {
          id: 7,
          question: "What does silence provide?",
          options: [
            "Awkwardness only",
            "Space to think and feel",
            "Pressure to speak",
            "Confusion"
          ],
          correctAnswer: 1,
          explanation: "Silence gives people space to process thoughts and feelings without pressure."
        },
        {
          id: 8,
          question: "What is a reflective response?",
          options: [
            "Giving advice",
            "Showing you heard and understood",
            "Changing the subject",
            "Telling what to do"
          ],
          correctAnswer: 1,
          explanation: "Reflective responses show you're listening and help clarify understanding."
        },
        {
          id: 9,
          question: "What does validation do?",
          options: [
            "Disagrees with feelings",
            "Acknowledges feelings make sense",
            "Minimizes concerns",
            "Gives solutions"
          ],
          correctAnswer: 1,
          explanation: "Validation acknowledges that feelings are understandable given the situation."
        },
        {
          id: 10,
          question: "What should you notice beyond words?",
          options: [
            "Only the facts",
            "Tone, facial expressions, body language",
            "Only what's said",
            "Only your thoughts"
          ],
          correctAnswer: 1,
          explanation: "Notice non-verbal cues like tone, facial expressions, and body language."
        },
        {
          id: 11,
          question: "What is judging while listening?",
          options: [
            "Being neutral",
            "Forming opinions about what's shared",
            "Understanding feelings",
            "Being open-minded"
          ],
          correctAnswer: 1,
          explanation: "Judging means forming opinions rather than staying open to understanding."
        },
        {
          id: 12,
          question: "What is problem-solving too quickly?",
          options: [
            "Listening fully first",
            "Jumping to solutions early",
            "Asking about feelings",
            "Reflecting understanding"
          ],
          correctAnswer: 1,
          explanation: "Jumping to solutions before fully understanding is a common listening barrier."
        },
        {
          id: 13,
          question: "How long should you wait before responding?",
          options: [
            "Respond immediately",
            "Count to five silently",
            "Wait one minute",
            "Never respond"
          ],
          correctAnswer: 1,
          explanation: "Counting to five silently before responding gives processing time."
        },
        {
          id: 14,
          question: "What should you avoid in reflecting?",
          options: [
            "Using your own words",
            "Parroting exact words",
            "Noting feelings",
            "Summarizing essence"
          ],
          correctAnswer: 1,
          explanation: "Avoid parroting exact words—instead reflect the essence and feelings."
        },
        {
          id: 15,
          question: "What does validation NOT mean?",
          options: [
            "Feelings make sense",
            "Agreeing with everything",
            "Understanding situation",
            "Acknowledging reality"
          ],
          correctAnswer: 1,
          explanation: "Validation acknowledges feelings make sense without necessarily agreeing with everything."
        },
        {
          id: 16,
          question: "What shows you're engaged?",
          options: [
            "Looking away",
            "Open body language and eye contact",
            "Checking phone",
            "Interrupting"
          ],
          correctAnswer: 1,
          explanation: "Open body language and appropriate eye contact show engagement in listening."
        },
        {
          id: 17,
          question: "What is an example open question?",
          options: [
            "Are you sad?",
            "How did that make you feel?",
            "Do you like your job?",
            "Is that true?"
          ],
          correctAnswer: 1,
          explanation: "'How did that make you feel?' is open—it can't be answered with just yes/no."
        },
        {
          id: 18,
          question: "What is a distraction barrier?",
          options: [
            "Full focus",
            "Letting mind wander",
            "Noticing non-verbals",
            "Reflecting back"
          ],
          correctAnswer: 1,
          explanation: "Letting your mind wander or getting distracted prevents active listening."
        },
        {
          id: 19,
          question: "What does comfort with silence show?",
          options: [
            "Lack of ideas",
            "Not rushing people",
            "Discomfort",
            "Boredom"
          ],
          correctAnswer: 1,
          explanation: "Comfort with silence shows you're not rushing people and allow processing time."
        },
        {
          id: 20,
          question: "What is an example reflective response?",
          options: [
            "You should do this...",
            "You seem frustrated about that",
            "That's not a big deal",
            "I know how you feel"
          ],
          correctAnswer: 1,
          explanation: "'You seem frustrated about that' reflects understanding of feelings."
        }
      ]
    },
    {
      id: 3,
      title: "Basic Communication Techniques",
      content: `
# Module 3: Basic Communication Techniques

## Effective Communication in Counseling
Good communication in counseling creates connection and understanding. It's a two-way process where both people feel heard. The counselor's words, tone, and body language all send messages.

## Using Open-Ended Questions
Open-ended questions encourage sharing and exploration. They typically begin with:
- "How..." (How did that affect you?)
- "What..." (What was that like for you?)
- "Tell me about..." (Tell me about that experience)
- "Describe..." (Describe how you felt)

Avoid "why" questions early on, as they can sound accusing. Instead of "Why did you do that?" try "What led you to that decision?"

## Summarizing and Paraphrasing
**Summarizing** pulls together main points: "So what I'm hearing is that work stress and family responsibilities are both feeling overwhelming right now."

**Paraphrasing** rephrases what was said: "You're saying the constant pressure is making it hard to relax."

Both show you're following and help clarify understanding.

## Empathic Responses
Empathy means understanding and sharing feelings. Empathic responses show this understanding:
- "That sounds really painful."
- "I can imagine how confusing that must feel."
- "It makes sense you'd feel disappointed after that."

Empathy is different from sympathy. Sympathy is feeling sorry for someone ("That's too bad"). Empathy is understanding their experience ("I understand why that hurts").

## Avoiding Common Pitfalls
**Giving Advice:** "You should..." or "What I would do is..."
**Minimizing:** "It's not that bad" or "Others have it worse"
**Judging:** "That was wrong" or "You shouldn't feel that way"
**Storytelling:** "That reminds me of when I..."

## Building Rapport
Rapport is the connection and trust in the counseling relationship. Build it through:
- **Genuine interest:** Show real curiosity about the person's experience
- **Consistency:** Be reliable and predictable in your approach
- **Warmth:** Use warm tone and facial expressions
- **Authenticity:** Be real while maintaining professionalism

## Checking Understanding
Regularly check if you're understanding correctly:
- "Am I hearing you correctly that...?"
- "Let me make sure I understand..."
- "Is this what you're saying...?"

This prevents misunderstandings and shows you value accuracy.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does good communication create?",
          options: [
            "Only information exchange",
            "Connection and understanding",
            "Quick solutions",
            "Professional distance"
          ],
          correctAnswer: 1,
          explanation: "Good communication creates connection and mutual understanding in counseling."
        },
        {
          id: 2,
          question: "What do open-ended questions do?",
          options: [
            "Get yes/no answers",
            "Encourage sharing and exploration",
            "Close down conversation",
            "Make assumptions"
          ],
          correctAnswer: 1,
          explanation: "Open-ended questions encourage people to share more and explore their experiences."
        },
        {
          id: 3,
          question: "What do open questions often begin with?",
          options: [
            "Do you...",
            "How... or What...",
            "Are you...",
            "Would you..."
          ],
          correctAnswer: 1,
          explanation: "Open questions often begin with 'How,' 'What,' 'Tell me about,' or 'Describe.'"
        },
        {
          id: 4,
          question: "What should you avoid early with 'why' questions?",
          options: [
            "They're always good",
            "They can sound accusing",
            "They get best answers",
            "They save time"
          ],
          correctAnswer: 1,
          explanation: "'Why' questions can sound accusing early on—better to use 'what' or 'how.'"
        },
        {
          id: 5,
          question: "What is summarizing?",
          options: [
            "Asking new questions",
            "Pulling together main points",
            "Giving advice",
            "Telling your opinion"
          ],
          correctAnswer: 1,
          explanation: "Summarizing pulls together the main points of what someone has shared."
        },
        {
          id: 6,
          question: "What is paraphrasing?",
          options: [
            "Exact repeating",
            "Rephrasing what was said",
            "Adding your ideas",
            "Changing the subject"
          ],
          correctAnswer: 1,
          explanation: "Paraphrasing means rephrasing what someone said in your own words."
        },
        {
          id: 7,
          question: "What is empathy?",
          options: [
            "Feeling sorry for someone",
            "Understanding and sharing feelings",
            "Giving solutions",
            "Agreeing with everything"
          ],
          correctAnswer: 1,
          explanation: "Empathy means understanding and sharing someone's emotional experience."
        },
        {
          id: 8,
          question: "What is an empathic response?",
          options: [
            "That's too bad",
            "That sounds really painful",
            "You'll be fine",
            "Don't worry"
          ],
          correctAnswer: 1,
          explanation: "'That sounds really painful' shows understanding of someone's emotional experience."
        },
        {
          id: 9,
          question: "What should you avoid in counseling?",
          options: [
            "Listening",
            "Giving advice",
            "Asking questions",
            "Reflecting"
          ],
          correctAnswer: 1,
          explanation: "Avoid giving advice—instead help people explore their own solutions."
        },
        {
          id: 10,
          question: "What is minimizing?",
          options: [
            "Understanding fully",
            "Saying 'it's not that bad'",
            "Validating feelings",
            "Showing empathy"
          ],
          correctAnswer: 1,
          explanation: "Minimizing makes light of someone's concerns, like saying 'it's not that bad.'"
        },
        {
          id: 11,
          question: "What is rapport?",
          options: [
            "Professional distance",
            "Connection and trust",
            "Formal relationship",
            "Business transaction"
          ],
          correctAnswer: 1,
          explanation: "Rapport is the connection and trust that develops in the counseling relationship."
        },
        {
          id: 12,
          question: "How do you build rapport?",
          options: [
            "Being inconsistent",
            "Showing genuine interest",
            "Keeping distant",
            "Being formal always"
          ],
          correctAnswer: 1,
          explanation: "Showing genuine interest in someone's experience helps build rapport."
        },
        {
          id: 13,
          question: "What does consistency help with?",
          options: [
            "Creating confusion",
            "Building trust through predictability",
            "Making things exciting",
            "Keeping people guessing"
          ],
          correctAnswer: 1,
          explanation: "Consistency in your approach helps build trust through predictability."
        },
        {
          id: 14,
          question: "Why check understanding?",
          options: [
            "To show you're smart",
            "Prevent misunderstandings",
            "Fill silence",
            "Change topics"
          ],
          correctAnswer: 1,
          explanation: "Checking understanding prevents misunderstandings and shows you value accuracy."
        },
        {
          id: 15,
          question: "What is storytelling pitfall?",
          options: [
            "Listening to stories",
            "Telling your own stories instead of listening",
            "Asking about stories",
            "Understanding stories"
          ],
          correctAnswer: 1,
          explanation: "Storytelling means shifting focus to your own experiences instead of listening."
        },
        {
          id: 16,
          question: "What is sympathy vs empathy?",
          options: [
            "Same thing",
            "Sympathy feels sorry, empathy understands",
            "Both are bad",
            "Both give advice"
          ],
          correctAnswer: 1,
          explanation: "Sympathy feels sorry for someone; empathy understands their experience."
        },
        {
          id: 17,
          question: "What does warmth involve?",
          options: [
            "Cold tone",
            "Warm tone and facial expressions",
            "Professional distance only",
            "Formal language"
          ],
          correctAnswer: 1,
          explanation: "Warmth involves using warm tone and facial expressions to create comfort."
        },
        {
          id: 18,
          question: "What is authenticity?",
          options: [
            "Faking interest",
            "Being real while professional",
            "Always agreeing",
            "Hiding feelings"
          ],
          correctAnswer: 1,
          explanation: "Authenticity means being genuine while maintaining professional boundaries."
        },
        {
          id: 19,
          question: "What question checks understanding?",
          options: [
            "You're wrong",
            "Am I hearing you correctly that...?",
            "Let me tell you...",
            "That's not important"
          ],
          correctAnswer: 1,
          explanation: "'Am I hearing you correctly that...?' checks if your understanding is accurate."
        },
        {
          id: 20,
          question: "Instead of 'why,' what could you ask?",
          options: [
            "Why did you do that?",
            "What led you to that decision?",
            "Why would you?",
            "Why not?"
          ],
          correctAnswer: 1,
          explanation: "Instead of 'why,' ask 'what led you to that decision?' to sound less accusing."
        }
      ]
    },
    {
      id: 4,
      title: "Understanding Common Concerns",
      content: `
# Module 4: Understanding Common Concerns

## Normal Stress vs. Concerning Symptoms
Everyone experiences stress, but sometimes it becomes overwhelming. Normal stress comes and goes with situations. Concerning symptoms persist and interfere with daily life. The key question: "Is this getting in the way of living the life you want?"

## Common Mental Health Concerns
**Anxiety:** Excessive worry, restlessness, difficulty concentrating, physical symptoms like rapid heartbeat. Everyone feels anxious sometimes, but anxiety becomes concerning when it's frequent, intense, or out of proportion to situations.

**Low Mood/Sadness:** Everyone feels sad sometimes. Concerning signs include persistent sadness, loss of interest in activities, changes in sleep or appetite, feelings of hopelessness.

**Stress Reactions:** Normal response to pressure. Concerning when stress causes significant distress or impairment in functioning.

**Relationship Difficulties:** Common life challenge. Concerning when patterns cause ongoing distress or harm.

## Normalizing and Validating
Many people feel alone in their struggles. Normalizing helps: "Many people experience similar feelings when..." This reduces shame without minimizing: "And that doesn't make it any easier for you."

## Basic Support Strategies
**Emotional Support:** Listening, validating, showing care.

**Practical Support:** Helping identify coping strategies, problem-solving steps, or resources.

**Hope-Building:** Reminding people of their strengths and past successes.

**Connection:** Encouraging healthy social connections.

## When Concerns May Need Professional Help
Consider suggesting professional help when:
- Symptoms are severe or persistent
- There's risk of harm to self or others
- Daily functioning is significantly impaired
- Basic support hasn't helped after reasonable time
- There are specific issues needing specialized expertise

## Self-Care for Supporters
Supporting others can be draining. Basic self-care includes:
- Setting boundaries on your time and energy
- Seeking your own support when needed
- Taking breaks and engaging in activities you enjoy
- Recognizing your own limits

## Cultural Considerations
Different cultures express distress differently. Some may focus on physical symptoms rather than emotional ones. Some may prefer family involvement. Being open and asking about preferences shows respect.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What distinguishes concerning symptoms?",
          options: [
            "Coming and going",
            "Persisting and interfering with life",
            "Being mild",
            "Being temporary"
          ],
          correctAnswer: 1,
          explanation: "Concerning symptoms persist over time and interfere with daily functioning."
        },
        {
          id: 2,
          question: "What is a key question about concerns?",
          options: [
            "Is it normal?",
            "Is it getting in way of living wanted life?",
            "Is it severe?",
            "Is it medical?"
          ],
          correctAnswer: 1,
          explanation: "A key question is whether concerns interfere with living the life someone wants."
        },
        {
          id: 3,
          question: "What is anxiety?",
          options: [
            "Never worrying",
            "Excessive worry and physical symptoms",
            "Normal stress only",
            "Always calm"
          ],
          correctAnswer: 1,
          explanation: "Anxiety involves excessive worry, restlessness, and sometimes physical symptoms."
        },
        {
          id: 4,
          question: "When does anxiety become concerning?",
          options: [
            "When it's occasional",
            "When frequent, intense, or disproportionate",
            "When mild",
            "When brief"
          ],
          correctAnswer: 1,
          explanation: "Anxiety becomes concerning when frequent, intense, or out of proportion to situations."
        },
        {
          id: 5,
          question: "What are concerning signs of low mood?",
          options: [
            "Brief sadness",
            "Persistent sadness, sleep changes",
            "Normal grief",
            "Temporary disappointment"
          ],
          correctAnswer: 1,
          explanation: "Concerning signs include persistent sadness and changes in sleep or appetite."
        },
        {
          id: 6,
          question: "What does normalizing do?",
          options: [
            "Minimizes problems",
            "Reduces shame by showing others experience similar",
            "Makes people feel unique",
            "Diagnoses people"
          ],
          correctAnswer: 1,
          explanation: "Normalizing reduces shame by showing others have similar experiences."
        },
        {
          id: 7,
          question: "What is emotional support?",
          options: [
            "Giving money",
            "Listening and validating",
            "Solving problems",
            "Giving advice"
          ],
          correctAnswer: 1,
          explanation: "Emotional support involves listening, validating feelings, and showing care."
        },
        {
          id: 8,
          question: "What is practical support?",
          options: [
            "Only listening",
            "Helping identify coping strategies",
            "Just agreeing",
            "Avoiding action"
          ],
          correctAnswer: 1,
          explanation: "Practical support helps identify coping strategies or problem-solving steps."
        },
        {
          id: 9,
          question: "When consider professional help?",
          options: [
            "For any concern",
            "When symptoms severe or persistent",
            "Only if person asks",
            "Never suggest it"
          ],
          correctAnswer: 1,
          explanation: "Consider suggesting professional help when symptoms are severe or persistent."
        },
        {
          id: 10,
          question: "What is basic self-care for supporters?",
          options: [
            "Always available",
            "Setting boundaries on time/energy",
            "Never taking breaks",
            "Ignoring own needs"
          ],
          correctAnswer: 1,
          explanation: "Self-care includes setting boundaries on your time and energy as a supporter."
        },
        {
          id: 11,
          question: "What is hope-building?",
          options: [
            "Making false promises",
            "Reminding of strengths and past successes",
            "Only focusing on problems",
            "Ignoring difficulties"
          ],
          correctAnswer: 1,
          explanation: "Hope-building reminds people of their strengths and past successes."
        },
        {
          id: 12,
          question: "What is normal stress?",
          options: [
            "Always overwhelming",
            "Comes and goes with situations",
            "Constant",
            "Never happens"
          ],
          correctAnswer: 1,
          explanation: "Normal stress comes and goes with life situations and challenges."
        },
        {
          id: 13,
          question: "What does connection support encourage?",
          options: [
            "Isolation",
            "Healthy social connections",
            "Only online contact",
            "Avoiding people"
          ],
          correctAnswer: 1,
          explanation: "Connection support encourages maintaining healthy social relationships."
        },
        {
          id: 14,
          question: "Why seek your own support as helper?",
          options: [
            "Weakness",
            "Supporting others can be draining",
            "Only if paid",
            "Never needed"
          ],
          correctAnswer: 1,
          explanation: "Supporting others can be emotionally draining, so helpers need support too."
        },
        {
          id: 15,
          question: "What are cultural considerations?",
          options: [
            "Ignore cultural differences",
            "Different expressions of distress",
            "Everyone same",
            "Only Western ways matter"
          ],
          correctAnswer: 1,
          explanation: "Different cultures may express distress differently or have different preferences."
        },
        {
          id: 16,
          question: "What risk indicates need for professional help?",
          options: [
            "Normal stress",
            "Risk of harm to self or others",
            "Minor worries",
            "Temporary sadness"
          ],
          correctAnswer: 1,
          explanation: "Risk of harm to self or others definitely indicates need for professional help."
        },
        {
          id: 17,
          question: "How ask about cultural preferences?",
          options: [
            "Assume you know",
            "Being open and asking",
            "Ignore differences",
            "Tell them your way"
          ],
          correctAnswer: 1,
          explanation: "Being open and asking about preferences shows respect for cultural differences."
        },
        {
          id: 18,
          question: "What does normalizing NOT do?",
          options: [
            "Reduce shame",
            "Make problems seem trivial",
            "Show common experience",
            "Reduce isolation"
          ],
          correctAnswer: 1,
          explanation: "When done well, normalizing doesn't minimize but shows others have similar experiences."
        },
        {
          id: 19,
          question: "What is relationship difficulty?",
          options: [
            "Never having conflicts",
            "Common life challenge",
            "Always serious",
            "Easy to solve"
          ],
          correctAnswer: 1,
          explanation: "Relationship difficulties are common life challenges everyone faces sometimes."
        },
        {
          id: 20,
          question: "What should supporters recognize?",
          options: [
            "No limits",
            "Their own limits",
            "Only others' limits",
            "Everything possible"
          ],
          correctAnswer: 1,
          explanation: "Supporters should recognize their own limits and when they need to refer or get support."
        }
      ]
    },
    {
      id: 5,
      title: "Setting Boundaries and Self-Care",
      content: `
# Module 5: Setting Boundaries and Self-Care

## Why Boundaries Matter
Boundaries protect both the person being supported and the supporter. They create a safe, professional framework for helping relationships. Good boundaries prevent burnout and maintain relationship health.

## Types of Boundaries
**Time Boundaries:** Set clear start and end times for conversations. "We have about 30 minutes today."

**Emotional Boundaries:** Maintain appropriate emotional distance. You can care without taking on others' emotions as your own.

**Role Boundaries:** Clarify what your role is (and isn't). "I'm here to listen and support, not to make decisions for you."

**Physical Boundaries:** Maintain appropriate physical space and contact based on setting and relationship.

## Setting Clear Limits
Be clear and consistent about limits:
- "I'm available to talk during these hours..."
- "I can listen for about 20 minutes now..."
- "That's beyond what I can help with, but I can suggest..."

It's okay to say no or set limits. In fact, clear limits often make people feel safer.

## Recognizing Burnout Signs
Burnout happens when supporters give too much without replenishing. Signs include:
- Feeling tired or drained often
- Becoming impatient or irritable
- Feeling ineffective or hopeless
- Difficulty concentrating
- Physical symptoms like headaches or sleep problems

## Basic Self-Care Practices
**Regular Breaks:** Take short breaks during helping sessions if possible.

**Stress Management:** Use simple techniques like deep breathing or brief walks.

**Support Systems:** Have your own people to talk to about the challenges of supporting others.

**Realistic Expectations:** You can't solve everyone's problems or make everyone happy.

**Enjoyable Activities:** Regularly engage in activities you find refreshing or enjoyable.

## Saying No Respectfully
It's possible to set limits while still being caring:
- "I care about you, but I don't have capacity to help with that right now."
- "I want to give this the attention it deserves, and I can't do that today."
- "Let me suggest someone who might be better able to help with this."

## Maintaining Professionalism
Even in informal helping roles, maintaining some professionalism helps:
- Keep conversations confidential
- Avoid dual relationships (like becoming close friends with someone you're supporting)
- Stay focused on the other person's needs during support time
- Know when to step back or refer to others

## Monitoring Your Own Well-being
Regularly check in with yourself:
- How am I feeling after supporting someone?
- Do I need a break or some self-care?
- Am I taking on too much?
- Do I need to talk to someone about my own feelings?

Your well-being matters too.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Why do boundaries matter?",
          options: [
            "Create distance only",
            "Protect both people and prevent burnout",
            "Make relationships formal",
            "Avoid helping"
          ],
          correctAnswer: 1,
          explanation: "Boundaries protect both people in the relationship and prevent supporter burnout."
        },
        {
          id: 2,
          question: "What are time boundaries?",
          options: [
            "Always available",
            "Clear start and end times",
            "No time limits",
            "Unpredictable timing"
          ],
          correctAnswer: 1,
          explanation: "Time boundaries involve setting clear start and end times for conversations."
        },
        {
          id: 3,
          question: "What are emotional boundaries?",
          options: [
            "Taking on others' emotions",
            "Caring without taking on emotions as own",
            "No emotions involved",
            "Sharing all feelings"
          ],
          correctAnswer: 1,
          explanation: "Emotional boundaries mean caring without taking on others' emotions as your own."
        },
        {
          id: 4,
          question: "What are role boundaries?",
          options: [
            "Doing everything",
            "Clarifying what your role is",
            "No defined role",
            "Being everything to someone"
          ],
          correctAnswer: 1,
          explanation: "Role boundaries clarify what your supportive role includes and doesn't include."
        },
        {
          id: 5,
          question: "How set clear limits?",
          options: [
            "Vague statements",
            "Clear and consistent communication",
            "Never saying no",
            "Avoiding the topic"
          ],
          correctAnswer: 1,
          explanation: "Set limits through clear, consistent communication about what you can offer."
        },
        {
          id: 6,
          question: "What is burnout?",
          options: [
            "Normal tiredness",
            "Giving too much without replenishing",
            "Brief stress",
            "Enjoying helping"
          ],
          correctAnswer: 1,
          explanation: "Burnout happens when supporters give continuously without replenishing their own resources."
        },
        {
          id: 7,
          question: "What are burnout signs?",
          options: [
            "High energy",
            "Feeling tired often, irritability",
            "Feeling effective",
            "Good concentration"
          ],
          correctAnswer: 1,
          explanation: "Burnout signs include frequent tiredness, irritability, and feeling ineffective."
        },
        {
          id: 8,
          question: "What are basic self-care practices?",
          options: [
            "Never taking breaks",
            "Taking regular breaks",
            "Always available",
            "Ignoring own needs"
          ],
          correctAnswer: 1,
          explanation: "Basic self-care includes taking regular breaks from helping others."
        },
        {
          id: 9,
          question: "What is stress management?",
          options: [
            "Ignoring stress",
            "Using techniques like deep breathing",
            "Working more",
            "Avoiding help"
          ],
          correctAnswer: 1,
          explanation: "Stress management involves using techniques to reduce stress, like deep breathing."
        },
        {
          id: 10,
          question: "Why have support systems?",
          options: [
            "Never need help",
            "Have people to talk to about challenges",
            "Only give help",
            "Isolate yourself"
          ],
          correctAnswer: 1,
          explanation: "Supporters need their own people to talk to about the challenges of helping others."
        },
        {
          id: 11,
          question: "How say no respectfully?",
          options: [
            "Just ignore",
            "With care while being clear",
            "Angrily",
            "With lies"
          ],
          correctAnswer: 1,
          explanation: "Say no with care and clarity about your limits while showing you still care."
        },
        {
          id: 12,
          question: "What is realistic expectations?",
          options: [
            "Solving all problems",
            "You can't solve everyone's problems",
            "Making everyone happy",
            "Always helping perfectly"
          ],
          correctAnswer: 1,
          explanation: "Realistic expectations recognize you can't solve all problems or make everyone happy."
        },
        {
          id: 13,
          question: "What maintains professionalism?",
          options: [
            "Sharing everything",
            "Keeping conversations confidential",
            "Becoming close friends",
            "Mixing roles"
          ],
          correctAnswer: 1,
          explanation: "Professionalism includes keeping conversations confidential and maintaining appropriate roles."
        },
        {
          id: 14,
          question: "What are dual relationships?",
          options: [
            "Clear roles",
            "Becoming friends while supporting",
            "Professional only",
            "Brief contact"
          ],
          correctAnswer: 1,
          explanation: "Dual relationships mix roles, like becoming friends with someone you're supporting."
        },
        {
          id: 15,
          question: "Why monitor your well-being?",
          options: [
            "Only others matter",
            "Your well-being matters too",
            "Never check",
            "Only at year end"
          ],
          correctAnswer: 1,
          explanation: "Monitoring your own well-being is important because your health matters too."
        },
        {
          id: 16,
          question: "What do clear limits often create?",
          options: [
            "Confusion",
            "Safety feelings",
            "Anger",
            "Distance only"
          ],
          correctAnswer: 1,
          explanation: "Clear, consistent limits often make people feel safer in the relationship."
        },
        {
          id: 17,
          question: "What are physical boundaries?",
          options: [
            "No contact ever",
            "Appropriate space based on relationship",
            "Always close",
            "Ignoring space"
          ],
          correctAnswer: 1,
          explanation: "Physical boundaries maintain appropriate personal space based on the relationship."
        },
        {
          id: 18,
          question: "What question to ask yourself?",
          options: [
            "Never reflect",
            "How am I feeling after supporting?",
            "Only others' feelings",
            "Am I perfect?"
          ],
          correctAnswer: 1,
          explanation: "Regularly ask yourself how you're feeling after supporting someone."
        },
        {
          id: 19,
          question: "What are enjoyable activities?",
          options: [
            "Only work",
            "Activities you find refreshing",
            "Only helping others",
            "Avoiding fun"
          ],
          correctAnswer: 1,
          explanation: "Engage regularly in activities you personally find enjoyable or refreshing."
        },
        {
          id: 20,
          question: "What does knowing when to refer show?",
          options: [
            "Weakness",
            "Professionalism and self-awareness",
            "Avoiding work",
            "Not caring"
          ],
          correctAnswer: 1,
          explanation: "Knowing when to refer someone shows professionalism and awareness of your limits."
        }
      ]
    },
    {
      id: 6,
      title: "Basic Crisis Response",
      content: `
# Module 6: Basic Crisis Response

## What is a Mental Health Crisis?
A crisis is when someone experiences overwhelming distress or difficulty coping. It feels urgent and may involve risk of harm. Crises can include severe emotional distress, thoughts of self-harm, or inability to function.

## Basic Crisis Response Principles
**Stay Calm:** Your calmness can help calm the other person. Breathe slowly and speak calmly.

**Ensure Safety:** First priority is preventing harm. Ask directly about safety if concerned.

**Listen Actively:** Give full attention. Crisis responses need more listening than talking.

**Provide Comfort:** Simple comfort can help. "I'm here with you." "You're not alone."

**Connect to Help:** Know basic resources and how to connect people to them.

## Asking About Safety
If you're concerned about safety, ask directly but compassionately:
- "Are you having thoughts of harming yourself?"
- "Do you feel safe right now?"
- "Have you thought about how you might hurt yourself?"

Asking about suicidal thoughts doesn't put the idea in someone's head. It shows you care and opens conversation.

## Immediate Response Steps
1. **Listen without judgment**
2. **Ask about safety directly if concerned**
3. **Stay with the person if they're unsafe**
4. **Help connect to professional support**
5. **Follow up if appropriate**

## Basic De-escalation Techniques
**Lower Your Voice:** Speak softly and slowly.

**Give Space:** Allow physical space if someone is agitated.

**Offer Choices:** "Would you like to sit here or there?" "Do you want water?"

**Focus on Present:** Bring attention to current moment. "Let's take a deep breath together."

**Validate Feelings:** "It makes sense you feel overwhelmed right now."

## When to Get Immediate Help
Get immediate professional help when:
- Someone is actively harming themselves
- They have a plan and means to harm themselves
- They're harming others or threatening to
- They're unable to care for basic needs
- They're experiencing psychosis (losing touch with reality)

## Basic Resources to Know
Know how to access:
- Crisis hotlines (like 988 in US)
- Local mental health emergency services
- Basic first aid if physical injury occurs
- How to call emergency services in your area

## Your Role vs. Professional Role
Your role in crisis is to:
- Provide immediate support and comfort
- Ensure safety as best you can
- Connect to professional help
- Follow up appropriately

You're not expected to resolve crises alone. Your job is to bridge to professional care.

## Self-Care After Crisis Response
Supporting someone in crisis can be draining. Afterward:
- Take time to decompress
- Talk to someone about your experience if needed
- Engage in calming activities
- Recognize you did what you could
- Seek support if you feel overwhelmed
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a mental health crisis?",
          options: [
            "Minor stress",
            "Overwhelming distress or coping difficulty",
            "Daily worries",
            "Normal sadness"
          ],
          correctAnswer: 1,
          explanation: "A crisis involves overwhelming distress or difficulty coping that feels urgent."
        },
        {
          id: 2,
          question: "What is first priority in crisis?",
          options: [
            "Solving problems",
            "Ensuring safety",
            "Giving advice",
            "Making diagnoses"
          ],
          correctAnswer: 1,
          explanation: "First priority is ensuring safety and preventing harm."
        },
        {
          id: 3,
          question: "Why stay calm in crisis?",
          options: [
            "Ignore seriousness",
            "Your calmness can help calm others",
            "Show no emotion",
            "Appear professional only"
          ],
          correctAnswer: 1,
          explanation: "Your calmness can help calm the person in crisis through emotional contagion."
        },
        {
          id: 4,
          question: "How ask about safety?",
          options: [
            "Never ask",
            "Directly but compassionately",
            "Only hint",
            "Assume safety"
          ],
          correctAnswer: 1,
          explanation: "Ask about safety directly but with compassion if you have concerns."
        },
        {
          id: 5,
          question: "What does asking about suicide do?",
          options: [
            "Puts idea in head",
            "Shows care and opens conversation",
            "Makes it worse",
            "Solves problem"
          ],
          correctAnswer: 1,
          explanation: "Asking about suicidal thoughts shows you care and opens important conversation."
        },
        {
          id: 6,
          question: "What is first response step?",
          options: [
            "Give advice",
            "Listen without judgment",
            "Solve problem",
            "Change subject"
          ],
          correctAnswer: 1,
          explanation: "First, listen without judgment to understand the crisis situation."
        },
        {
          id: 7,
          question: "What do if someone is unsafe?",
          options: [
            "Leave them alone",
            "Stay with them if possible",
            "Ignore it",
            "Tell them to fix it"
          ],
          correctAnswer: 1,
          explanation: "If someone is unsafe, stay with them if possible while getting help."
        },
        {
          id: 8,
          question: "What is a de-escalation technique?",
          options: [
            "Yelling",
            "Lowering your voice",
            "Getting closer",
            "Demanding calm"
          ],
          correctAnswer: 1,
          explanation: "Lowering your voice can help de-escalate tense situations."
        },
        {
          id: 9,
          question: "What does giving space do?",
          options: [
            "Shows rejection",
            "Reduces feeling trapped if agitated",
            "Shows fear",
            "Ends conversation"
          ],
          correctAnswer: 1,
          explanation: "Giving physical space can reduce feeling trapped if someone is agitated."
        },
        {
          id: 10,
          question: "When get immediate professional help?",
          options: [
            "For any concern",
            "Active self-harm or harm to others",
            "Only if person asks",
            "Never"
          ],
          correctAnswer: 1,
          explanation: "Get immediate help for active self-harm, harm to others, or serious safety risks."
        },
        {
          id: 11,
          question: "What should you know about resources?",
          options: [
            "Nothing needed",
            "Crisis hotlines and emergency services",
            "Only your phone",
            "Only friends' numbers"
          ],
          correctAnswer: 1,
          explanation: "Know basic resources like crisis hotlines and local emergency services."
        },
        {
          id: 12,
          question: "What is your role in crisis?",
          options: [
            "Resolve alone",
            "Provide support and connect to help",
            "Diagnose problem",
            "Treat medically"
          ],
          correctAnswer: 1,
          explanation: "Your role is to provide support and connect the person to professional help."
        },
        {
          id: 13,
          question: "What does focusing on present help?",
          options: [
            "Avoids problem",
            "Brings attention to current moment",
            "Ignores feelings",
            "Changes subject"
          ],
          correctAnswer: 1,
          explanation: "Focusing on the present moment can help ground someone in crisis."
        },
        {
          id: 14,
          question: "What is psychosis?",
          options: [
            "Normal stress",
            "Losing touch with reality",
            "Sadness",
            "Worry"
          ],
          correctAnswer: 1,
          explanation: "Psychosis involves losing touch with reality and needs professional help."
        },
        {
          id: 15,
          question: "What is providing comfort?",
          options: [
            "Solving problems",
            "Saying 'I'm here with you'",
            "Giving false hope",
            "Minimizing"
          ],
          correctAnswer: 1,
          explanation: "Simple comfort like 'I'm here with you' can help someone feel less alone."
        },
        {
          id: 16,
          question: "What to do after crisis response?",
          options: [
            "Ignore your feelings",
            "Take time to decompress",
            "Jump to next task",
            "Forget it happened"
          ],
          correctAnswer: 1,
          explanation: "After crisis response, take time to decompress and process your experience."
        },
        {
          id: 17,
          question: "What does offering choices do?",
          options: [
            "Confuses",
            "Gives sense of control",
            "Overwhelms",
            "Delays help"
          ],
          correctAnswer: 1,
          explanation: "Offering simple choices can give someone in crisis a sense of control."
        },
        {
          id: 18,
          question: "Why know how to call emergency services?",
          options: [
            "Never needed",
            "For immediate danger situations",
            "Only for medical doctors",
            "Too dramatic"
          ],
          correctAnswer: 1,
          explanation: "Know how to call emergency services for immediate danger situations."
        },
        {
          id: 19,
          question: "What is your job regarding professional care?",
          options: [
            "Replace it",
            "Bridge to it",
            "Avoid it",
            "Criticize it"
          ],
          correctAnswer: 1,
          explanation: "Your job is to bridge the person to professional care, not replace it."
        },
        {
          id: 20,
          question: "Why seek support after crisis?",
          options: [
            "Weakness",
            "Crisis response can be draining",
            "Never needed",
            "Only for professionals"
          ],
          correctAnswer: 1,
          explanation: "Crisis response can be emotionally draining, so supporters may need support too."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "mental-health-counseling-certificate-exam",
    title: "Mental Health Counseling Certificate Final Exam",
    description: "Comprehensive exam covering all six modules. Pass with 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        question: "What is mental health about?",
        options: [
          "Only avoiding problems",
          "Emotional, psychological, and social well-being",
          "Only thinking clearly",
          "Only medication management"
        ],
        correctAnswer: 1,
        explanation: "Mental health involves emotional, psychological, and social well-being.",
        module: 1
      },
      {
        id: 2,
        question: "What is counseling?",
        options: [
          "Giving advice to people",
          "A helping relationship through listening and guiding",
          "Solving people's problems for them",
          "Medical treatment only"
        ],
        correctAnswer: 1,
        explanation: "Counseling is a helping relationship through listening, understanding, and guiding.",
        module: 1
      },
      {
        id: 3,
        question: "What do good counselors help people do?",
        options: [
          "Avoid their feelings",
          "Explore their own thoughts and feelings",
          "Follow specific instructions",
          "Forget their problems"
        ],
        correctAnswer: 1,
        explanation: "Good counselors help people explore their own thoughts and feelings.",
        module: 1
      },
      {
        id: 4,
        question: "What is the first basic counseling goal?",
        options: [
          "Solve people's problems",
          "Provide safe, confidential space",
          "Make people happy",
          "Give medical advice"
        ],
        correctAnswer: 1,
        explanation: "First goal is providing a safe, confidential space for sharing.",
        module: 1
      },
      {
        id: 5,
        question: "What does confidentiality mean?",
        options: [
          "Sharing information with family",
          "Keeping what's shared private",
          "Only writing things down",
          "Telling supervisors everything"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality means keeping shared information private.",
        module: 1
      },
      {
        id: 6,
        question: "What does respect in counseling involve?",
        options: [
          "Only agreeing with people",
          "Treating everyone with dignity",
          "Being friends with clients",
          "Avoiding difficult topics"
        ],
        correctAnswer: 1,
        explanation: "Respect means treating every person with dignity.",
        module: 1
      },
      {
        id: 7,
        question: "When should you consider referring someone?",
        options: [
          "When they're making progress",
          "When they need more help than you can provide",
          "When they ask many questions",
          "When they're happy"
        ],
        correctAnswer: 1,
        explanation: "Refer when someone needs more help than basic support can provide.",
        module: 1
      },
      
      // Module 2 Questions (7)
      {
        id: 8,
        question: "What is active listening?",
        options: [
          "Just hearing words",
          "Fully focusing and understanding message",
          "Thinking about responses",
          "Taking notes only"
        ],
        correctAnswer: 1,
        explanation: "Active listening involves fully focusing on and understanding what's said.",
        module: 2
      },
      {
        id: 9,
        question: "What should you avoid during listening?",
        options: [
          "Eye contact",
          "Interrupting people",
          "Nodding occasionally",
          "Facing the person"
        ],
        correctAnswer: 1,
        explanation: "Avoid interrupting—let people finish their thoughts.",
        module: 2
      },
      {
        id: 10,
        question: "What is reflecting?",
        options: [
          "Giving advice",
          "Repeating back what you heard",
          "Telling your own story",
          "Asking many questions"
        ],
        correctAnswer: 1,
        explanation: "Reflecting means repeating back what you heard in your own words.",
        module: 2
      },
      {
        id: 11,
        question: "What are open questions?",
        options: [
          "Yes/no questions",
          "Questions requiring more than yes/no",
          "Leading questions",
          "Rhetorical questions"
        ],
        correctAnswer: 1,
        explanation: "Open questions can't be answered with just yes/no.",
        module: 2
      },
      {
        id: 12,
        question: "What is a listening barrier?",
        options: [
          "Giving full attention",
          "Planning your response while listening",
          "Using open body language",
          "Making eye contact"
        ],
        correctAnswer: 1,
        explanation: "Planning your response prevents full listening.",
        module: 2
      },
      {
        id: 13,
        question: "What does silence provide?",
        options: [
          "Awkwardness only",
          "Space to think and feel",
          "Pressure to speak",
          "Confusion"
        ],
        correctAnswer: 1,
        explanation: "Silence gives people space to process thoughts and feelings.",
        module: 2
      },
      {
        id: 14,
        question: "What does validation do?",
        options: [
          "Disagrees with feelings",
          "Acknowledges feelings make sense",
          "Minimizes concerns",
          "Gives solutions"
        ],
        correctAnswer: 1,
        explanation: "Validation acknowledges that feelings are understandable.",
        module: 2
      },
      
      // Module 3 Questions (6)
      {
        id: 15,
        question: "What do open-ended questions do?",
        options: [
          "Get yes/no answers",
          "Encourage sharing and exploration",
          "Close down conversation",
          "Make assumptions"
        ],
        correctAnswer: 1,
        explanation: "Open-ended questions encourage sharing and exploration.",
        module: 3
      },
      {
        id: 16,
        question: "What is summarizing?",
        options: [
          "Asking new questions",
          "Pulling together main points",
          "Giving advice",
          "Telling your opinion"
        ],
        correctAnswer: 1,
        explanation: "Summarizing pulls together main points of what was shared.",
        module: 3
      },
      {
        id: 17,
        question: "What is empathy?",
        options: [
          "Feeling sorry for someone",
          "Understanding and sharing feelings",
          "Giving solutions",
          "Agreeing with everything"
        ],
        correctAnswer: 1,
        explanation: "Empathy means understanding and sharing someone's feelings.",
        module: 3
      },
      {
        id: 18,
        question: "What should you avoid in counseling?",
        options: [
          "Listening",
          "Giving advice",
          "Asking questions",
          "Reflecting"
        ],
        correctAnswer: 1,
        explanation: "Avoid giving advice—help people find their own solutions.",
        module: 3
      },
      {
        id: 19,
        question: "What is rapport?",
        options: [
          "Professional distance",
          "Connection and trust",
          "Formal relationship",
          "Business transaction"
        ],
        correctAnswer: 1,
        explanation: "Rapport is the connection and trust in counseling relationship.",
        module: 3
      },
      {
        id: 20,
        question: "Why check understanding?",
        options: [
          "To show you're smart",
          "Prevent misunderstandings",
          "Fill silence",
          "Change topics"
        ],
        correctAnswer: 1,
        explanation: "Checking understanding prevents misunderstandings.",
        module: 3
      },
      
      // Module 4 Questions (6)
      {
        id: 21,
        question: "What distinguishes concerning symptoms?",
        options: [
          "Coming and going",
          "Persisting and interfering with life",
          "Being mild",
          "Being temporary"
        ],
        correctAnswer: 1,
        explanation: "Concerning symptoms persist and interfere with daily life.",
        module: 4
      },
      {
        id: 22,
        question: "What is anxiety?",
        options: [
          "Never worrying",
          "Excessive worry and physical symptoms",
          "Normal stress only",
          "Always calm"
        ],
        correctAnswer: 1,
        explanation: "Anxiety involves excessive worry and sometimes physical symptoms.",
        module: 4
      },
      {
        id: 23,
        question: "What does normalizing do?",
        options: [
          "Minimizes problems",
          "Reduces shame by showing others experience similar",
          "Makes people feel unique",
          "Diagnoses people"
        ],
        correctAnswer: 1,
        explanation: "Normalizing reduces shame by showing common experiences.",
        module: 4
      },
      {
        id: 24,
        question: "What is emotional support?",
        options: [
          "Giving money",
          "Listening and validating",
          "Solving problems",
          "Giving advice"
        ],
        correctAnswer: 1,
        explanation: "Emotional support involves listening and validating feelings.",
        module: 4
      },
      {
        id: 25,
        question: "When consider professional help?",
        options: [
          "For any concern",
          "When symptoms severe or persistent",
          "Only if person asks",
          "Never suggest it"
        ],
        correctAnswer: 1,
        explanation: "Consider professional help when symptoms are severe or persistent.",
        module: 4
      },
      {
        id: 26,
        question: "What is basic self-care for supporters?",
        options: [
          "Always available",
          "Setting boundaries on time/energy",
          "Never taking breaks",
          "Ignoring own needs"
        ],
        correctAnswer: 1,
        explanation: "Self-care includes setting boundaries on time and energy.",
        module: 4
      },
      
      // Module 5 Questions (7)
      {
        id: 27,
        question: "Why do boundaries matter?",
        options: [
          "Create distance only",
          "Protect both people and prevent burnout",
          "Make relationships formal",
          "Avoid helping"
        ],
        correctAnswer: 1,
        explanation: "Boundaries protect both people and prevent burnout.",
        module: 5
      },
      {
        id: 28,
        question: "What are time boundaries?",
        options: [
          "Always available",
          "Clear start and end times",
          "No time limits",
          "Unpredictable timing"
        ],
        correctAnswer: 1,
        explanation: "Time boundaries involve clear start and end times.",
        module: 5
      },
      {
        id: 29,
        question: "What is burnout?",
        options: [
          "Normal tiredness",
          "Giving too much without replenishing",
          "Brief stress",
          "Enjoying helping"
        ],
        correctAnswer: 1,
        explanation: "Burnout happens from giving continuously without replenishing.",
        module: 5
      },
      {
        id: 30,
        question: "What are basic self-care practices?",
        options: [
          "Never taking breaks",
          "Taking regular breaks",
          "Always available",
          "Ignoring own needs"
        ],
        correctAnswer: 1,
        explanation: "Self-care includes taking regular breaks.",
        module: 5
      },
      {
        id: 31,
        question: "How say no respectfully?",
        options: [
          "Just ignore",
          "With care while being clear",
          "Angrily",
          "With lies"
        ],
        correctAnswer: 1,
        explanation: "Say no with care and clarity while showing you still care.",
        module: 5
      },
      {
        id: 32,
        question: "What maintains professionalism?",
        options: [
          "Sharing everything",
          "Keeping conversations confidential",
          "Becoming close friends",
          "Mixing roles"
        ],
        correctAnswer: 1,
        explanation: "Professionalism includes keeping conversations confidential.",
        module: 5
      },
      {
        id: 33,
        question: "Why monitor your well-being?",
        options: [
          "Only others matter",
          "Your well-being matters too",
          "Never check",
          "Only at year end"
        ],
        correctAnswer: 1,
        explanation: "Monitoring your well-being is important because you matter too.",
        module: 5
      },
      
      // Module 6 Questions (7)
      {
        id: 34,
        question: "What is a mental health crisis?",
        options: [
          "Minor stress",
          "Overwhelming distress or coping difficulty",
          "Daily worries",
          "Normal sadness"
        ],
        correctAnswer: 1,
        explanation: "A crisis involves overwhelming distress or coping difficulty.",
        module: 6
      },
      {
        id: 35,
        question: "What is first priority in crisis?",
        options: [
          "Solving problems",
          "Ensuring safety",
          "Giving advice",
          "Making diagnoses"
        ],
        correctAnswer: 1,
        explanation: "First priority is ensuring safety and preventing harm.",
        module: 6
      },
      {
        id: 36,
        question: "How ask about safety?",
        options: [
          "Never ask",
          "Directly but compassionately",
          "Only hint",
          "Assume safety"
        ],
        correctAnswer: 1,
        explanation: "Ask about safety directly but with compassion.",
        module: 6
      },
      {
        id: 37,
        question: "What is first response step?",
        options: [
          "Give advice",
          "Listen without judgment",
          "Solve problem",
          "Change subject"
        ],
        correctAnswer: 1,
        explanation: "First, listen without judgment to understand the situation.",
        module: 6
      },
      {
        id: 38,
        question: "When get immediate professional help?",
        options: [
          "For any concern",
          "Active self-harm or harm to others",
          "Only if person asks",
          "Never"
        ],
        correctAnswer: 1,
        explanation: "Get immediate help for active self-harm or harm to others.",
        module: 6
      },
      {
        id: 39,
        question: "What should you know about resources?",
        options: [
          "Nothing needed",
          "Crisis hotlines and emergency services",
          "Only your phone",
          "Only friends' numbers"
        ],
        correctAnswer: 1,
        explanation: "Know basic resources like crisis hotlines and emergency services.",
        module: 6
      },
      {
        id: 40,
        question: "What is your role in crisis?",
        options: [
          "Resolve alone",
          "Provide support and connect to help",
          "Diagnose problem",
          "Treat medically"
        ],
        correctAnswer: 1,
        explanation: "Your role is to provide support and connect to professional help.",
        module: 6
      }
    ]
  }
};
