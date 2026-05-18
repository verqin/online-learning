export const parentingCoachingCertificate = {
  // COURSE METADATA
  id: "parenting-coaching-certificate",
  title: "Parenting Coaching (Certificate)",
  description: "Learn essential coaching skills to support parents in developing confident, effective parenting approaches. This certificate program covers communication techniques, child development basics, behavior guidance strategies, and coaching frameworks.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "👨‍👩‍👧‍👦",
  badge: "Certificate",
  prerequisites: [],

  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Foundations of Parenting Coaching",
      completed: false,
      content: `
# Foundations of Parenting Coaching

## Introduction to Parenting Coaching
Welcome to the world of parenting coaching! This module introduces the core principles and philosophy behind supporting parents through coaching rather than telling or advising.

### What Parenting Coaching Is
- **Coaching approach**: Helping parents discover their own solutions
- **Not therapy**: Focus on present and future, not past traumas
- **Not advising**: Avoiding "should" and "must" statements
- **Partnership**: Collaborative relationship between coach and parent

### Core Coaching Skills
- **Active listening**: Hearing beyond words to understand feelings
- **Powerful questioning**: Asking questions that promote insight
- **Reflective practice**: Helping parents see patterns in their parenting
- **Goal setting**: Supporting parents in defining what they want

### The Coaching Mindset
- **Belief in parents**: Trusting that parents have inner wisdom
- **Non-judgmental space**: Creating safety for honest sharing
- **Curiosity over certainty**: Being interested in parent experiences
- **Present focus**: Working with current situations and possibilities

### Ethical Foundations
- **Confidentiality**: Protecting parent privacy and trust
- **Boundaries**: Clear professional limits in coaching relationships
- **Referral awareness**: Knowing when to suggest other support
- **Cultural sensitivity**: Respecting diverse parenting approaches

### Starting Coaching Relationships
- **Initial conversations**: Building rapport and understanding needs
- **Coaching agreements**: Clear expectations and commitments
- **Assessment tools**: Simple ways to understand family dynamics
- **Progress tracking**: Celebrating small wins and improvements
`,
      quiz: [
        {
          id: 1,
          question: "What is the main focus of parenting coaching?",
          options: [
            "Helping parents discover their own solutions",
            "Telling parents exactly what to do",
            "Therapy for past childhood trauma",
            "Medical advice about children"
          ],
          correctAnswer: 0,
          explanation: "Parenting coaching focuses on helping parents discover their own solutions through questioning and reflection."
        },
        {
          id: 2,
          question: "Which skill involves hearing beyond words to understand feelings?",
          options: [
            "Active listening",
            "Powerful questioning",
            "Goal setting",
            "Reflective practice"
          ],
          correctAnswer: 0,
          explanation: "Active listening means hearing not just words, but also understanding the feelings and meanings behind them."
        },
        {
          id: 3,
          question: "What does a coaching mindset include?",
          options: [
            "Belief that parents have inner wisdom",
            "Knowing all the answers for parents",
            "Directing parents step-by-step",
            "Judging parenting choices"
          ],
          correctAnswer: 0,
          explanation: "A coaching mindset trusts that parents have inner wisdom and can find their own best solutions."
        },
        {
          id: 4,
          question: "Why is confidentiality important in coaching?",
          options: [
            "It protects parent privacy and builds trust",
            "It makes coaching more expensive",
            "It limits what parents can share",
            "It's required by law for all conversations"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality creates a safe space where parents feel comfortable sharing openly without fear."
        },
        {
          id: 5,
          question: "What are coaching agreements?",
          options: [
            "Clear expectations and commitments",
            "Legal contracts for payment",
            "Rules children must follow",
            "Medical treatment plans"
          ],
          correctAnswer: 0,
          explanation: "Coaching agreements establish clear expectations about the coaching process, goals, and commitments."
        },
        {
          id: 6,
          question: "How is coaching different from therapy?",
          options: [
            "Focus on present and future, not past trauma",
            "Coaching is always longer term",
            "Therapy doesn't involve talking",
            "Coaching requires medical training"
          ],
          correctAnswer: 0,
          explanation: "Coaching focuses on current situations and future possibilities, while therapy often addresses past trauma."
        },
        {
          id: 7,
          question: "What is powerful questioning?",
          options: [
            "Asking questions that promote insight",
            "Questioning everything parents say",
            "Asking the same question repeatedly",
            "Questions with only yes/no answers"
          ],
          correctAnswer: 0,
          explanation: "Powerful questions help parents gain new perspectives and discover their own answers."
        },
        {
          id: 8,
          question: "Why are boundaries important in coaching?",
          options: [
            "They establish clear professional limits",
            "They prevent parents from asking questions",
            "They make coaching sessions shorter",
            "They are only for the coach's benefit"
          ],
          correctAnswer: 0,
          explanation: "Clear boundaries protect both coach and parent, maintaining a professional, effective relationship."
        },
        {
          id: 9,
          question: "What does reflective practice help parents do?",
          options: [
            "See patterns in their parenting",
            "Remember their childhood better",
            "Forget past mistakes",
            "Predict their child's future"
          ],
          correctAnswer: 0,
          explanation: "Reflective practice helps parents notice recurring patterns in their interactions with their children."
        },
        {
          id: 10,
          question: "What is cultural sensitivity in coaching?",
          options: [
            "Respecting diverse parenting approaches",
            "Only working with one culture",
            "Changing parents' cultural practices",
            "Ignoring cultural differences"
          ],
          correctAnswer: 0,
          explanation: "Cultural sensitivity means respecting and working with diverse parenting beliefs and practices."
        },
        {
          id: 11,
          question: "How do coaches support goal setting?",
          options: [
            "Helping parents define what they want",
            "Setting goals for the parents",
            "Only focusing on child's goals",
            "Creating complicated goal charts"
          ],
          correctAnswer: 0,
          explanation: "Coaches support parents in clarifying their own parenting goals and aspirations."
        },
        {
          id: 12,
          question: "What does 'curiosity over certainty' mean?",
          options: [
            "Being interested in parent experiences",
            "Knowing all parenting answers",
            "Questioning if coaching works",
            "Being uncertain about everything"
          ],
          correctAnswer: 0,
          explanation: "This means approaching parents with genuine interest rather than assuming you know their situation."
        },
        {
          id: 13,
          question: "What are assessment tools used for?",
          options: [
            "Understanding family dynamics",
            "Testing children's intelligence",
            "Grading parenting skills",
            "Diagnosing medical conditions"
          ],
          correctAnswer: 0,
          explanation: "Simple assessment tools help coaches understand family patterns and parenting challenges."
        },
        {
          id: 14,
          question: "Why is progress tracking important?",
          options: [
            "Celebrating small wins and improvements",
            "Proving coaching is effective",
            "Comparing different parents",
            "Creating report cards for parents"
          ],
          correctAnswer: 0,
          explanation: "Tracking progress helps parents recognize and celebrate their growth and achievements."
        },
        {
          id: 15,
          question: "What is the partnership aspect of coaching?",
          options: [
            "Collaborative relationship between coach and parent",
            "Parent doing all the work",
            "Coach making all decisions",
            "Only working with both parents present"
          ],
          correctAnswer: 0,
          explanation: "Coaching is a collaborative partnership where both coach and parent work together toward goals."
        },
        {
          id: 16,
          question: "What should coaches avoid in their language?",
          options: [
            "'Should' and 'must' statements",
            "Asking questions",
            "Using examples",
            "Sharing experiences"
          ],
          correctAnswer: 0,
          explanation: "Coaches avoid directive language like 'should' to keep ownership with the parent."
        },
        {
          id: 17,
          question: "What does referral awareness involve?",
          options: [
            "Knowing when to suggest other support",
            "Referring to coaching books only",
            "Always referring to therapists",
            "Never making any referrals"
          ],
          correctAnswer: 0,
          explanation: "Coaches recognize when issues are beyond coaching scope and suggest appropriate resources."
        },
        {
          id: 18,
          question: "How do coaches build initial rapport?",
          options: [
            "Through supportive conversations",
            "By testing parent knowledge",
            "Giving immediate advice",
            "Sharing their own parenting stories"
          ],
          correctAnswer: 0,
          explanation: "Initial conversations focus on building trust and understanding the parent's situation."
        },
        {
          id: 19,
          question: "What does 'present focus' mean in coaching?",
          options: [
            "Working with current situations",
            "Only talking about today",
            "Ignoring past experiences",
            "Forgetting future goals"
          ],
          correctAnswer: 0,
          explanation: "Present focus means working with what's happening now and future possibilities."
        },
        {
          id: 20,
          question: "What creates a non-judgmental space?",
          options: [
            "Safety for honest sharing",
            "Agreement with all parent choices",
            "No feedback given",
            "Avoiding difficult topics"
          ],
          correctAnswer: 0,
          explanation: "A non-judgmental space allows parents to share openly without fear of criticism."
        }
      ]
    },
    {
      id: 2,
      title: "Child Development Basics",
      completed: false,
      content: `
# Child Development Basics

## Understanding Developmental Stages
This module covers essential knowledge about how children grow and develop. This foundation helps coaches support parents with age-appropriate expectations.

### Major Developmental Areas
- **Physical development**: Growth, motor skills, coordination
- **Cognitive development**: Thinking, learning, problem-solving
- **Social development**: Relationships, interactions, friendships
- **Emotional development**: Feelings, self-regulation, expression

### Early Years (0-3 years)
- **Attachment**: Building secure emotional bonds
- **Communication**: From crying to first words to sentences
- **Exploration**: Learning through senses and movement
- **Independence**: Emerging sense of self and autonomy

### Preschool Years (3-5 years)
- **Imagination**: Rich pretend play and creativity
- **Social skills**: Sharing, taking turns, playing together
- **Language explosion**: Rapid vocabulary growth
- **Self-help skills**: Dressing, feeding, basic routines

### School Age (6-12 years)
- **Friendships**: More complex social relationships
- **School skills**: Learning routines and academic skills
- **Rule understanding**: Grasping fairness and consequences
- **Competence building**: Developing skills and interests

### Teen Years (13-18 years)
- **Identity formation**: Exploring who they are
- **Independence**: Separating from family
- **Peer influence**: Importance of friends and acceptance
- **Future thinking**: Planning for adulthood

### Developmental Milestones
- **Individual variation**: Each child develops at own pace
- **Cultural differences**: Development influenced by culture
- **Temperament**: Inborn personality traits affect development
- **Support strategies**: Ways to nurture healthy development
`,
      quiz: [
        {
          id: 1,
          question: "What are the four major developmental areas?",
          options: [
            "Physical, cognitive, social, emotional",
            "Academic, athletic, artistic, social",
            "Medical, psychological, educational, social",
            "Family, school, community, personal"
          ],
          correctAnswer: 0,
          explanation: "Children develop in physical, cognitive, social, and emotional areas simultaneously."
        },
        {
          id: 2,
          question: "What is attachment in early development?",
          options: [
            "Building secure emotional bonds",
            "Physical growth measurement",
            "Learning to attach objects",
            "Medical attachment theory"
          ],
          correctAnswer: 0,
          explanation: "Attachment refers to the emotional bond between child and caregiver that provides security."
        },
        {
          id: 3,
          question: "What characterizes preschool years?",
          options: [
            "Rich pretend play and creativity",
            "Complete independence",
            "Academic mastery",
            "Career planning"
          ],
          correctAnswer: 0,
          explanation: "Preschoolers engage in extensive imaginative play and show rapid language development."
        },
        {
          id: 4,
          question: "What develops during school age years?",
          options: [
            "More complex social relationships",
            "Basic walking skills",
            "First words",
            "Identity crisis"
          ],
          correctAnswer: 0,
          explanation: "School-age children develop more sophisticated friendships and social understanding."
        },
        {
          id: 5,
          question: "What is a key task of teen years?",
          options: [
            "Exploring personal identity",
            "Learning to walk",
            "First friendships",
            "Basic language skills"
          ],
          correctAnswer: 0,
          explanation: "Teens work on forming their identity and sense of self separate from family."
        },
        {
          id: 6,
          question: "What does physical development include?",
          options: [
            "Motor skills and coordination",
            "Only height and weight",
            "Academic learning",
            "Emotional expression"
          ],
          correctAnswer: 0,
          explanation: "Physical development includes both growth and the development of movement skills."
        },
        {
          id: 7,
          question: "What is cognitive development?",
          options: [
            "Thinking and problem-solving abilities",
            "Physical growth patterns",
            "Social relationship skills",
            "Emotional expression methods"
          ],
          correctAnswer: 0,
          explanation: "Cognitive development involves how children think, learn, remember, and solve problems."
        },
        {
          id: 8,
          question: "What does social development involve?",
          options: [
            "Relationship building skills",
            "Physical coordination",
            "Academic achievement",
            "Emotional self-control"
          ],
          correctAnswer: 0,
          explanation: "Social development includes learning to interact, share, cooperate, and build relationships."
        },
        {
          id: 9,
          question: "What is emotional development?",
          options: [
            "Understanding and expressing feelings",
            "Physical growth spurts",
            "Academic learning progress",
            "Social popularity"
          ],
          correctAnswer: 0,
          explanation: "Emotional development involves recognizing, understanding, and managing feelings."
        },
        {
          id: 10,
          question: "Why is individual variation important?",
          options: [
            "Each child develops at own pace",
            "All children should be the same",
            "Variation means problems",
            "It's not important at all"
          ],
          correctAnswer: 0,
          explanation: "Children reach milestones at different times while still following general patterns."
        },
        {
          id: 11,
          question: "What are developmental milestones?",
          options: [
            "Typical skills at certain ages",
            "Medical check-up dates",
            "School grade levels",
            "Parenting achievement awards"
          ],
          correctAnswer: 0,
          explanation: "Milestones are typical skills or behaviors most children demonstrate by certain ages."
        },
        {
          id: 12,
          question: "What is temperament?",
          options: [
            "Inborn personality traits",
            "Medical condition",
            "Parenting style",
            "Learning disability"
          ],
          correctAnswer: 0,
          explanation: "Temperament refers to innate personality characteristics that affect how children respond."
        },
        {
          id: 13,
          question: "How does culture influence development?",
          options: [
            "Different expectations and practices",
            "Only physical appearance",
            "Not at all",
            "Only language spoken"
          ],
          correctAnswer: 0,
          explanation: "Cultural values and practices shape parenting approaches and developmental expectations."
        },
        {
          id: 14,
          question: "What are self-help skills?",
          options: [
            "Basic routines like dressing",
            "Academic homework skills",
            "Therapy techniques",
            "Medical self-care"
          ],
          correctAnswer: 0,
          explanation: "Self-help skills include tasks like feeding, dressing, and hygiene that children learn to do themselves."
        },
        {
          id: 15,
          question: "What is peer influence in teens?",
          options: [
            "Importance of friends and acceptance",
            "Only negative peer pressure",
            "Complete independence from peers",
            "Ignoring all friends"
          ],
          correctAnswer: 0,
          explanation: "Teens are highly influenced by friends as they develop independence from family."
        },
        {
          id: 16,
          question: "What does exploration mean for young children?",
          options: [
            "Learning through senses and movement",
            "Traveling to new places",
            "Academic research",
            "Questioning authority"
          ],
          correctAnswer: 0,
          explanation: "Young children explore their world through touching, tasting, moving, and experimenting."
        },
        {
          id: 17,
          question: "What is rule understanding?",
          options: [
            "Grasping fairness and consequences",
            "Memorizing all rules",
            "Making rules for others",
            "Ignoring rules completely"
          ],
          correctAnswer: 0,
          explanation: "Children gradually understand why rules exist and the consequences of breaking them."
        },
        {
          id: 18,
          question: "What are support strategies?",
          options: [
            "Ways to nurture healthy development",
            "Only medical treatments",
            "Academic tutoring methods",
            "Discipline techniques only"
          ],
          correctAnswer: 0,
          explanation: "Support strategies are approaches that help children develop in healthy ways."
        },
        {
          id: 19,
          question: "What is future thinking in teens?",
          options: [
            "Planning for adulthood",
            "Only immediate pleasures",
            "Forgetting the past",
            "Ignoring consequences"
          ],
          correctAnswer: 0,
          explanation: "Teens begin to think about their future education, career, and life goals."
        },
        {
          id: 20,
          question: "What is competence building?",
          options: [
            "Developing skills and interests",
            "Building physical strength only",
            "Academic testing preparation",
            "Career job training"
          ],
          correctAnswer: 0,
          explanation: "Children develop competence by mastering new skills and developing interests."
        }
      ]
    },
    {
      id: 3,
      title: "Effective Communication with Parents",
      completed: false,
      content: `
# Effective Communication with Parents

## Building Trust Through Communication
This module focuses on communication techniques that build strong coaching relationships and help parents feel heard, understood, and supported.

### Listening Skills
- **Full attention**: Being completely present with parents
- **Non-verbal cues**: Eye contact, nodding, open posture
- **Paraphrasing**: Restating in your own words to show understanding
- **Emotional labeling**: Naming feelings you sense

### Questioning Techniques
- **Open questions**: Encouraging detailed responses
- **Solution-focused questions**: Looking toward positive change
- **Scaling questions**: Measuring progress or confidence
- **Miracle questions**: Imagining ideal outcomes

### Feedback Delivery
- **Strengths-based**: Starting with what's working well
- **Specific observations**: Concrete examples rather than generalizations
- **Future-focused**: How to build on current successes
- **Collaborative tone**: Working together on improvements

### Challenging Conversations
- **Difficult topics**: Addressing sensitive issues gently
- **Resistance handling**: When parents are stuck or defensive
- **Conflict navigation**: Managing disagreements productively
- **Emotional moments**: Supporting parents through strong feelings

### Communication Pitfalls
- **Advice giving**: Instead of coaching discovery
- **Judgment language**: Words that imply right/wrong
- **Assuming understanding**: Not checking what parents mean
- **Multitasking**: Divided attention during sessions

### Cultural Communication
- **Language sensitivity**: Adapting to different communication styles
- **Non-verbal awareness**: Understanding cultural differences in gestures
- **Value recognition**: Acknowledging diverse parenting values
- **Adaptation skills**: Adjusting approach for cultural fit
`,
      quiz: [
        {
          id: 1,
          question: "What does giving full attention mean?",
          options: [
            "Being completely present with parents",
            "Listening while doing other tasks",
            "Only hearing words spoken",
            "Waiting for your turn to talk"
          ],
          correctAnswer: 0,
          explanation: "Full attention means being mentally and physically present, focusing completely on the parent."
        },
        {
          id: 2,
          question: "What are open questions?",
          options: [
            "Questions encouraging detailed responses",
            "Questions with yes/no answers",
            "Questions that are vague",
            "Questions about everything"
          ],
          correctAnswer: 0,
          explanation: "Open questions invite parents to share more detail rather than simple yes/no answers."
        },
        {
          id: 3,
          question: "How should feedback start?",
          options: [
            "With what's working well",
            "With all the problems",
            "With general compliments",
            "With other parents' successes"
          ],
          correctAnswer: 0,
          explanation: "Starting with strengths builds confidence and creates positive momentum."
        },
        {
          id: 4,
          question: "What is emotional labeling?",
          options: [
            "Naming feelings you sense",
            "Judging emotions as good/bad",
            "Ignoring strong emotions",
            "Changing subject from feelings"
          ],
          correctAnswer: 0,
          explanation: "Emotional labeling helps parents feel understood by acknowledging their feelings."
        },
        {
          id: 5,
          question: "What are solution-focused questions?",
          options: [
            "Looking toward positive change",
            "Analyzing past problems only",
            "Finding who's to blame",
            "Asking about ideal childhoods"
          ],
          correctAnswer: 0,
          explanation: "Solution-focused questions help parents envision and work toward desired outcomes."
        },
        {
          id: 6,
          question: "What does paraphrasing do?",
          options: [
            "Shows understanding by restating",
            "Repeats exact words spoken",
            "Changes the subject completely",
            "Adds new information"
          ],
          correctAnswer: 0,
          explanation: "Paraphrasing demonstrates active listening and checks understanding."
        },
        {
          id: 7,
          question: "What are scaling questions?",
          options: [
            "Measuring progress or confidence",
            "Comparing different parents",
            "Rating children's behavior",
            "Grading parenting skills"
          ],
          correctAnswer: 0,
          explanation: "Scaling questions help parents quantify their experience or progress."
        },
        {
          id: 8,
          question: "How should observations be shared?",
          options: [
            "With concrete examples",
            "As general criticisms",
            "As personal opinions",
            "As absolute truths"
          ],
          correctAnswer: 0,
          explanation: "Specific examples make feedback clearer and more actionable."
        },
        {
          id: 9,
          question: "What is a miracle question?",
          options: [
            "Imagining ideal outcomes",
            "Asking about impossible things",
            "Questioning religious beliefs",
            "Wondering about magic solutions"
          ],
          correctAnswer: 0,
          explanation: "Miracle questions help parents envision their preferred future."
        },
        {
          id: 10,
          question: "What tone should feedback have?",
          options: [
            "Collaborative working together",
            "Authoritative expert advice",
            "Critical pointing out flaws",
            "Neutral without concern"
          ],
          correctAnswer: 0,
          explanation: "A collaborative tone maintains partnership and mutual respect."
        },
        {
          id: 11,
          question: "What are non-verbal cues?",
          options: [
            "Eye contact, nodding, open posture",
            "Only facial expressions",
            "Written notes only",
            "Electronic messages"
          ],
          correctAnswer: 0,
          explanation: "Non-verbal communication shows attention and understanding without words."
        },
        {
          id: 12,
          question: "How to approach difficult topics?",
          options: [
            "Gently and sensitively",
            "Directly without preparation",
            "Avoiding them completely",
            "Through written notes only"
          ],
          correctAnswer: 0,
          explanation: "Sensitive topics require gentle approach and careful timing."
        },
        {
          id: 13,
          question: "What is a communication pitfall?",
          options: [
            "Giving advice instead of coaching",
            "Asking too many questions",
            "Listening too carefully",
            "Being too supportive"
          ],
          correctAnswer: 0,
          explanation: "Advice-giving takes ownership away from parents, contrary to coaching principles."
        },
        {
          id: 14,
          question: "What does future-focused feedback do?",
          options: [
            "Builds on current successes",
            "Focuses only on past mistakes",
            "Predicts future problems",
            "Forgets present situation"
          ],
          correctAnswer: 0,
          explanation: "Future-focused feedback helps parents apply strengths to new challenges."
        },
        {
          id: 15,
          question: "How to handle resistance?",
          options: [
            "With curiosity about the stuckness",
            "With stronger arguments",
            "By ending the conversation",
            "By agreeing with resistance"
          ],
          correctAnswer: 0,
          explanation: "Curiosity about resistance can reveal underlying concerns or fears."
        },
        {
          id: 16,
          question: "What is judgment language?",
          options: [
            "Words that imply right/wrong",
            "Professional terminology",
            "Clear descriptions",
            "Questioning words"
          ],
          correctAnswer: 0,
          explanation: "Judgment language puts parents on defensive rather than encouraging exploration."
        },
        {
          id: 17,
          question: "What does cultural communication involve?",
          options: [
            "Adapting to different styles",
            "Only using one language",
            "Ignoring cultural differences",
            "Teaching your culture"
          ],
          correctAnswer: 0,
          explanation: "Cultural communication respects and adapts to diverse communication norms."
        },
        {
          id: 18,
          question: "Why check understanding?",
          options: [
            "To avoid assumptions",
            "To test parent memory",
            "To fill silence",
            "To show expertise"
          ],
          correctAnswer: 0,
          explanation: "Checking understanding prevents miscommunication and shows respect."
        },
        {
          id: 19,
          question: "What is value recognition?",
          options: [
            "Acknowledging diverse parenting values",
            "Agreeing with all values",
            "Changing parent values",
            "Ignoring value differences"
          ],
          correctAnswer: 0,
          explanation: "Recognizing values shows respect for different cultural or personal beliefs."
        },
        {
          id: 20,
          question: "What does multitasking during sessions do?",
          options: [
            "Divides attention and reduces effectiveness",
            "Saves time efficiently",
            "Shows good time management",
            "Helps remember details"
          ],
          correctAnswer: 0,
          explanation: "Multitasking signals that the parent isn't your full priority."
        }
      ]
    },
    {
      id: 4,
      title: "Behavior Guidance Strategies",
      completed: false,
      content: `
# Behavior Guidance Strategies

## Positive Approaches to Behavior
This module explores effective, respectful ways to guide children's behavior while maintaining strong relationships and teaching important life skills.

### Understanding Behavior
- **Communication**: Behavior as children's way of communicating needs
- **Developmental stage**: Age-appropriate behavior expectations
- **Triggers**: What precedes challenging behavior
- **Needs**: Underlying needs behavior might express

### Positive Discipline
- **Teaching focus**: Rather than punishing focus
- **Clear expectations**: Age-appropriate rules and limits
- **Natural consequences**: Learning from actions naturally
- **Logical consequences**: Related to the behavior

### Connection Before Correction
- **Relationship foundation**: Strong bond makes guidance effective
- **Emotional regulation**: Calm guidance models self-control
- **Repair opportunities**: Fixing mistakes strengthens relationships
- **Unconditional love**: Separating behavior from child's worth

### Practical Strategies
- **Routines and predictability**: Reducing anxiety through structure
- **Choices and autonomy**: Appropriate decision-making practice
- **Redirection**: Guiding toward acceptable alternatives
- **Time-in**: Staying connected during difficult moments

### Prevention Approaches
- **Environment design**: Setting up for success
- **Transition preparation**: Warning and preparation for changes
- **Emotional vocabulary**: Teaching words for feelings
- **Problem-solving skills**: Teaching conflict resolution

### Special Considerations
- **Temperament matching**: Strategies for different personalities
- **Developmental differences**: Adapting for special needs
- **Cultural approaches**: Respecting diverse discipline practices
- **Self-care for parents**: Managing parent stress
`,
      quiz: [
        {
          id: 1,
          question: "How can behavior be understood?",
          options: [
            "As children's way of communicating needs",
            "Only as disobedience",
            "As intentional manipulation",
            "As random actions"
          ],
          correctAnswer: 0,
          explanation: "Behavior often communicates unmet needs, feelings, or developmental stages."
        },
        {
          id: 2,
          question: "What is positive discipline?",
          options: [
            "Teaching focus rather than punishing",
            "Only positive reinforcement",
            "No rules or limits",
            "Ignoring all misbehavior"
          ],
          correctAnswer: 0,
          explanation: "Positive discipline teaches appropriate behavior while maintaining dignity."
        },
        {
          id: 3,
          question: "What does 'connection before correction' mean?",
          options: [
            "Strong bond makes guidance effective",
            "Correcting before connecting",
            "Only connecting, never correcting",
            "Correcting through connection only"
          ],
          correctAnswer: 0,
          explanation: "Children are more receptive to guidance when they feel connected and secure."
        },
        {
          id: 4,
          question: "What are natural consequences?",
          options: [
            "Learning from actions naturally",
            "Punishments parents create",
            "Random negative events",
            "Only serious consequences"
          ],
          correctAnswer: 0,
          explanation: "Natural consequences happen without parent intervention (e.g., no coat = cold)."
        },
        {
          id: 5,
          question: "How do routines help behavior?",
          options: [
            "Reduce anxiety through predictability",
            "Make children more rigid",
            "Eliminate all spontaneity",
            "Only help with bedtime"
          ],
          correctAnswer: 0,
          explanation: "Predictable routines help children feel secure and know what to expect."
        },
        {
          id: 6,
          question: "What are logical consequences?",
          options: [
            "Related to the behavior",
            "Random punishments",
            "Severe consequences",
            "Only natural outcomes"
          ],
          correctAnswer: 0,
          explanation: "Logical consequences are directly related to the behavior (e.g., drawing on wall = help clean)."
        },
        {
          id: 7,
          question: "What is redirection?",
          options: [
            "Guiding toward acceptable alternatives",
            "Ignoring bad behavior",
            "Distracting with screens",
            "Changing subject completely"
          ],
          correctAnswer: 0,
          explanation: "Redirection guides children toward appropriate activities or behaviors."
        },
        {
          id: 8,
          question: "What is a trigger?",
          options: [
            "What precedes challenging behavior",
            "A parent's angry response",
            "A toy that causes fights",
            "Only major events"
          ],
          correctAnswer: 0,
          explanation: "Triggers are events or situations that often lead to challenging behavior."
        },
        {
          id: 9,
          question: "What does environment design do?",
          options: [
            "Sets up for success",
            "Makes homes perfectly clean",
            "Requires expensive toys",
            "Limits child exploration"
          ],
          correctAnswer: 0,
          explanation: "Well-designed environments prevent problems and support positive behavior."
        },
        {
          id: 10,
          question: "What is emotional regulation modeling?",
          options: [
            "Calm guidance shows self-control",
            "Hiding all emotions",
            "Expressing anger strongly",
            "Only positive emotions shown"
          ],
          correctAnswer: 0,
          explanation: "Parents model how to manage emotions through their own calm responses."
        },
        {
          id: 11,
          question: "Why offer choices?",
          options: [
            "Practice appropriate decision-making",
            "Avoid making any decisions",
            "Test child's preferences",
            "Make parenting easier"
          ],
          correctAnswer: 0,
          explanation: "Appropriate choices help children develop decision-making skills."
        },
        {
          id: 12,
          question: "What are repair opportunities?",
          options: [
            "Fixing mistakes strengthens relationships",
            "Only for broken objects",
            "Legal reparations",
            "Medical treatments"
          ],
          correctAnswer: 0,
          explanation: "Repairing relationship ruptures teaches forgiveness and resilience."
        },
        {
          id: 13,
          question: "How to prepare for transitions?",
          options: [
            "Warning and preparation for changes",
            "Springing changes suddenly",
            "Avoiding all transitions",
            "Only verbal warnings"
          ],
          correctAnswer: 0,
          explanation: "Preparation helps children move more smoothly between activities."
        },
        {
          id: 14,
          question: "What is unconditional love?",
          options: [
            "Separating behavior from child's worth",
            "Approving all behavior",
            "No discipline ever",
            "Constant affection"
          ],
          correctAnswer: 0,
          explanation: "Children need to know they're loved even when their behavior needs correction."
        },
        {
          id: 15,
          question: "What is temperament matching?",
          options: [
            "Strategies for different personalities",
            "Making all children same temperament",
            "Ignoring temperament differences",
            "Medical temperament treatment"
          ],
          correctAnswer: 0,
          explanation: "Different approaches work better for different inherent personality styles."
        },
        {
          id: 16,
          question: "Why teach emotional vocabulary?",
          options: [
            "Children need words for feelings",
            "To sound intelligent",
            "For school tests only",
            "To hide true feelings"
          ],
          correctAnswer: 0,
          explanation: "Words help children identify and communicate feelings rather than acting them out."
        },
        {
          id: 17,
          question: "What is time-in?",
          options: [
            "Staying connected during difficult moments",
            "Timeout in a different way",
            "Ignoring while nearby",
            "Only for very young children"
          ],
          correctAnswer: 0,
          explanation: "Time-in maintains connection while helping child regulate emotions."
        },
        {
          id: 18,
          question: "What are problem-solving skills?",
          options: [
            "Teaching conflict resolution",
            "Academic math skills",
            "Fixing broken toys",
            "Parent solving all problems"
          ],
          correctAnswer: 0,
          explanation: "Children learn to resolve conflicts and solve problems with guidance."
        },
        {
          id: 19,
          question: "Why parent self-care matters?",
          options: [
            "Stressed parents struggle with guidance",
            "Parents deserve constant breaks",
            "Children should care for parents",
            "Only for mental health issues"
          ],
          correctAnswer: 0,
          explanation: "Parents need emotional resources to guide children patiently and effectively."
        },
        {
          id: 20,
          question: "What are clear expectations?",
          options: [
            "Age-appropriate rules and limits",
            "Rigid strict rules",
            "No rules at all",
            "Complicated rule systems"
          ],
          correctAnswer: 0,
          explanation: "Clear, simple expectations help children understand what's expected."
        }
      ]
    },
    {
      id: 5,
      title: "Coaching Frameworks and Tools",
      completed: false,
      content: `
# Coaching Frameworks and Tools

## Structured Approaches to Coaching
This module introduces practical frameworks and tools that give structure to coaching conversations and help parents make meaningful progress.

### GROW Model
- **Goal**: What does the parent want to achieve?
- **Reality**: What is happening now?
- **Options**: What could they do?
- **Will**: What will they commit to doing?

### Solution-Focused Approach
- **Exceptions**: Times when the problem doesn't happen
- **Scaling**: Measuring progress and confidence
- **Miracle question**: Imagining problem solved
- **Small steps**: Breaking changes into manageable pieces

### Strengths-Based Coaching
- **Asset identification**: Recognizing parent strengths
- **Resource mapping**: Identifying support systems
- **Success building**: Expanding what already works
- **Positive reframing**: Seeing challenges differently

### Practical Coaching Tools
- **Wheel of Life**: Visual balance assessment
- **Vision boards**: Visualizing desired future
- **Action planning**: Concrete step-by-step plans
- **Progress tracking**: Celebrating improvements

### Session Structure
- **Check-in**: How has week been? What's working?
- **Focus setting**: What to work on today
- **Exploration**: Deepening understanding
- **Action planning**: Concrete next steps
- **Closing**: Summary and encouragement

### Documentation and Tracking
- **Session notes**: Brief records of key points
- **Goal tracking**: Monitoring progress toward goals
- **Resource lists**: Helpful books, websites, supports
- **Success journal**: Recording achievements and insights
`,
      quiz: [
        {
          id: 1,
          question: "What does GROW stand for?",
          options: [
            "Goal, Reality, Options, Will",
            "Growth, Resources, Opportunities, Work",
            "Guidance, Reflection, Observation, Wisdom",
            "Group, Relationship, Organization, Willingness"
          ],
          correctAnswer: 0,
          explanation: "GROW is a coaching framework: Goal, Reality, Options, Will."
        },
        {
          id: 2,
          question: "What is the Goal step in GROW?",
          options: [
            "What parent wants to achieve",
            "Coach's objective for session",
            "Child's behavior goal",
            "Long-term life goals only"
          ],
          correctAnswer: 0,
          explanation: "The Goal step clarifies what the parent wants to work toward."
        },
        {
          id: 3,
          question: "What are exceptions in solution-focused approach?",
          options: [
            "Times when problem doesn't happen",
            "Special rules for behavior",
            "Unusual parenting situations",
            "Times to ignore problems"
          ],
          correctAnswer: 0,
          explanation: "Exceptions reveal when things work better, showing possibilities for change."
        },
        {
          id: 4,
          question: "What is asset identification?",
          options: [
            "Recognizing parent strengths",
            "Listing financial assets",
            "Finding child's talents only",
            "Medical asset assessment"
          ],
          correctAnswer: 0,
          explanation: "Identifying strengths helps parents build on what already works well."
        },
        {
          id: 5,
          question: "What is a Wheel of Life?",
          options: [
            "Visual balance assessment tool",
            "Child's toy for coaching",
            "Time management device",
            "Family schedule wheel"
          ],
          correctAnswer: 0,
          explanation: "The Wheel of Life helps parents assess balance in different life areas."
        },
        {
          id: 6,
          question: "What is the Reality step in GROW?",
          options: [
            "What is happening now",
            "Ideal situation",
            "Past history only",
            "Theoretical possibilities"
          ],
          correctAnswer: 0,
          explanation: "Reality explores current situation honestly and clearly."
        },
        {
          id: 7,
          question: "What does scaling measure?",
          options: [
            "Progress and confidence levels",
            "Child's height and weight",
            "Parent intelligence",
            "Family income level"
          ],
          correctAnswer: 0,
          explanation: "Scaling helps quantify subjective experiences like confidence or progress."
        },
        {
          id: 8,
          question: "What is resource mapping?",
          options: [
            "Identifying support systems",
            "Finding places on a map",
            "Internet resource search",
            "Financial resource counting"
          ],
          correctAnswer: 0,
          explanation: "Resource mapping identifies available support people and services."
        },
        {
          id: 9,
          question: "What are vision boards?",
          options: [
            "Visualizing desired future",
            "School notice boards",
            "Child's art displays",
            "Family photo collections"
          ],
          correctAnswer: 0,
          explanation: "Vision boards create visual representations of goals and aspirations."
        },
        {
          id: 10,
          question: "What happens during check-in?",
          options: [
            "Discussing week and what's working",
            "Only reviewing problems",
            "Setting entire session agenda",
            "Completing paperwork"
          ],
          correctAnswer: 0,
          explanation: "Check-in starts sessions by connecting and noticing progress."
        },
        {
          id: 11,
          question: "What is the Options step in GROW?",
          options: [
            "What parent could do",
            "Only coach's suggestions",
            "Impossible solutions",
            "Past failed attempts"
          ],
          correctAnswer: 0,
          explanation: "Options explores possible approaches without judgment."
        },
        {
          id: 12,
          question: "What is success building?",
          options: [
            "Expanding what already works",
            "Only major achievements",
            "Child's academic success",
            "Financial success planning"
          ],
          correctAnswer: 0,
          explanation: "Success building identifies and amplifies existing effective strategies."
        },
        {
          id: 13,
          question: "What is action planning?",
          options: [
            "Concrete step-by-step plans",
            "Vague good intentions",
            "Coach's action plan",
            "Child's daily schedule"
          ],
          correctAnswer: 0,
          explanation: "Action plans specify who will do what by when."
        },
        {
          id: 14,
          question: "What is focus setting?",
          options: [
            "Choosing what to work on",
            "Parent attention training",
            "Child focus improvement",
            "Only one topic forever"
          ],
          correctAnswer: 0,
          explanation: "Focus setting clarifies the session's primary topic or goal."
        },
        {
          id: 15,
          question: "What is the Will step in GROW?",
          options: [
            "What parent will commit to",
            "Coach's willpower",
            "Child's willingness",
            "Legal will documents"
          ],
          correctAnswer: 0,
          explanation: "Will translates options into specific commitments."
        },
        {
          id: 16,
          question: "What is positive reframing?",
          options: [
            "Seeing challenges differently",
            "Only positive thinking",
            "Ignoring problems",
            "False positivity"
          ],
          correctAnswer: 0,
          explanation: "Reframing finds constructive perspectives on difficult situations."
        },
        {
          id: 17,
          question: "What is progress tracking?",
          options: [
            "Celebrating improvements",
            "Only measuring setbacks",
            "Comparing to other parents",
            "Scientific measurement only"
          ],
          correctAnswer: 0,
          explanation: "Tracking progress helps parents recognize their growth."
        },
        {
          id: 18,
          question: "What happens during exploration?",
          options: [
            "Deepening understanding of topic",
            "Surface conversation only",
            "Exploring new places",
            "Child exploration activities"
          ],
          correctAnswer: 0,
          explanation: "Exploration digs deeper into the chosen focus area."
        },
        {
          id: 19,
          question: "What are session notes?",
          options: [
            "Brief records of key points",
            "Detailed transcripts",
            "Legal documents",
            "Public records"
          ],
          correctAnswer: 0,
          explanation: "Brief notes help track progress and plan future sessions."
        },
        {
          id: 20,
          question: "What is a success journal?",
          options: [
            "Recording achievements and insights",
            "Only child's successes",
            "Financial success tracking",
            "Academic achievement records"
          ],
          correctAnswer: 0,
          explanation: "Success journals help parents notice and celebrate progress."
        }
      ]
    },
    {
      id: 6,
      title: "Building Your Coaching Practice",
      completed: false,
      content: `
# Building Your Coaching Practice

## Practical Steps for Coaching Success
This final module helps you apply your coaching skills in real-world settings, whether starting your own practice or working within organizations.

### Defining Your Niche
- **Specialization areas**: Age groups or challenges you focus on
- **Unique approach**: What makes your coaching distinctive
- **Target clients**: Who you best serve
- **Service offerings**: What coaching packages you provide

### Setting Up Practice
- **Space considerations**: Where you'll coach (in-person/online)
- **Scheduling systems**: Managing appointments efficiently
- **Payment structures**: Fees, packages, payment methods
- **Initial consultations**: Free sessions to assess fit

### Marketing Basics
- **Networking**: Building professional relationships
- **Online presence**: Website and social media basics
- **Client testimonials**: Building credibility through stories
- **Referral systems**: Encouraging satisfied clients to refer others

### Professional Development
- **Continuing education**: Staying current in field
- **Supervision and mentoring**: Getting support for your work
- **Professional associations**: Joining coaching organizations
- **Ethical practice maintenance**: Regular self-reflection on ethics

### Self-Care for Coaches
- **Boundary maintenance**: Protecting your energy and time
- **Stress management**: Techniques for coaching stress
- **Support systems**: Who supports the supporter
- **Burnout prevention**: Recognizing and preventing exhaustion

### Measuring Success
- **Client outcomes**: How you track client progress
- **Business metrics**: Practical measures of practice health
- **Personal fulfillment**: Ensuring work aligns with values
- **Continuous improvement**: Always learning and growing
`,
      quiz: [
        {
          id: 1,
          question: "What is a coaching niche?",
          options: [
            "Specialization area you focus on",
            "Physical space for coaching",
            "Expensive coaching package",
            "Online coaching platform"
          ],
          correctAnswer: 0,
          explanation: "A niche is the specific area or population you specialize in serving."
        },
        {
          id: 2,
          question: "What are service offerings?",
          options: [
            "Coaching packages you provide",
            "Free advice always available",
            "Only in-person sessions",
            "Medical services offered"
          ],
          correctAnswer: 0,
          explanation: "Service offerings are the specific coaching programs or packages you provide."
        },
        {
          id: 3,
          question: "Why consider space for coaching?",
          options: [
            "Where you'll coach matters",
            "Only home offices work",
            "Space doesn't matter online",
            "Only fancy offices impress"
          ],
          correctAnswer: 0,
          explanation: "Coaching space affects comfort, confidentiality, and professionalism."
        },
        {
          id: 4,
          question: "What is networking?",
          options: [
            "Building professional relationships",
            "Only online marketing",
            "Social media following",
            "Technical computer skills"
          ],
          correctAnswer: 0,
          explanation: "Networking builds connections that can lead to referrals and collaborations."
        },
        {
          id: 5,
          question: "What is continuing education?",
          options: [
            "Staying current in field",
            "Only formal degrees",
            "Teaching others constantly",
            "Child education focus"
          ],
          correctAnswer: 0,
          explanation: "Continuing education ensures skills and knowledge stay current."
        },
        {
          id: 6,
          question: "What are target clients?",
          options: [
            "Who you best serve",
            "All parents everywhere",
            "Only wealthy parents",
            "Parents with perfect children"
          ],
          correctAnswer: 0,
          explanation: "Target clients are the specific population you're best equipped to help."
        },
        {
          id: 7,
          question: "What do scheduling systems do?",
          options: [
            "Manage appointments efficiently",
            "Only track client payments",
            "Plan child schedules",
            "Organize personal life only"
          ],
          correctAnswer: 0,
          explanation: "Good scheduling systems prevent double-booking and missed appointments."
        },
        {
          id: 8,
          question: "What is online presence?",
          options: [
            "Website and social media basics",
            "Being online constantly",
            "Only social media profiles",
            "Internet celebrity status"
          ],
          correctAnswer: 0,
          explanation: "Online presence helps potential clients find and learn about you."
        },
        {
          id: 9,
          question: "What is supervision in coaching?",
          options: [
            "Getting support for your work",
            "Monitoring clients closely",
            "Being supervised by government",
            "Supervising other coaches"
          ],
          correctAnswer: 0,
          explanation: "Supervision provides professional support and ethical guidance."
        },
        {
          id: 10,
          question: "Why are boundaries important for coaches?",
          options: [
            "Protect energy and time",
            "Make coaching more expensive",
            "Keep clients at distance",
            "Avoid all personal connection"
          ],
          correctAnswer: 0,
          explanation: "Boundaries prevent burnout and maintain professional relationships."
        },
        {
          id: 11,
          question: "What is a unique approach?",
          options: [
            "What makes your coaching distinctive",
            "Copying successful coaches",
            "Only using one method",
            "Secret techniques"
          ],
          correctAnswer: 0,
          explanation: "A unique approach helps you stand out and attract ideal clients."
        },
        {
          id: 12,
          question: "What are payment structures?",
          options: [
            "Fees, packages, payment methods",
            "Only cash payments",
            "Free services only",
            "Insurance billing systems"
          ],
          correctAnswer: 0,
          explanation: "Clear payment structures prevent misunderstandings about costs."
        },
        {
          id: 13,
          question: "What are client testimonials?",
          options: [
            "Building credibility through stories",
            "Only positive reviews",
            "Legal documents",
            "Scientific research proofs"
          ],
          correctAnswer: 0,
          explanation: "Testimonials show potential clients what it's like to work with you."
        },
        {
          id: 14,
          question: "What are professional associations?",
          options: [
            "Coaching organizations to join",
            "Only social clubs",
            "Business partnerships",
            "Family associations"
          ],
          correctAnswer: 0,
          explanation: "Professional associations provide community, training, and credibility."
        },
        {
          id: 15,
          question: "What is stress management for coaches?",
          options: [
            "Techniques for coaching stress",
            "Avoiding all stressful clients",
            "Only meditation practice",
            "Ignoring personal stress"
          ],
          correctAnswer: 0,
          explanation: "Coaches need strategies to manage the emotional demands of their work."
        },
        {
          id: 16,
          question: "What are initial consultations?",
          options: [
            "Free sessions to assess fit",
            "First paid sessions",
            "Only for uncertain clients",
            "Group information sessions"
          ],
          correctAnswer: 0,
          explanation: "Initial consultations help both coach and client decide if they want to work together."
        },
        {
          id: 17,
          question: "What are referral systems?",
          options: [
            "Encouraging clients to refer others",
            "Medical referral networks",
            "Only professional referrals",
            "Automatic referral software"
          ],
          correctAnswer: 0,
          explanation: "Referral systems turn satisfied clients into your best marketers."
        },
        {
          id: 18,
          question: "What are support systems for coaches?",
          options: [
            "Who supports the supporter",
            "Only other coaches",
            "Family members only",
            "Therapy always needed"
          ],
          correctAnswer: 0,
          explanation: "Coaches need their own support to maintain emotional health."
        },
        {
          id: 19,
          question: "What is burnout prevention?",
          options: [
            "Recognizing and preventing exhaustion",
            "Working fewer hours only",
            "Changing careers often",
            "Ignoring tiredness"
          ],
          correctAnswer: 0,
          explanation: "Burnout prevention involves recognizing early signs and taking action."
        },
        {
          id: 20,
          question: "What are client outcomes?",
          options: [
            "How you track client progress",
            "Only financial outcomes",
            "Child behavior changes only",
            "Scientific measurements"
          ],
          correctAnswer: 0,
          explanation: "Tracking outcomes helps demonstrate coaching effectiveness."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "parenting-coaching-certificate-exam",
    title: "Parenting Coaching Certificate Final Examination",
    description: "Comprehensive examination covering all six modules of the Parenting Coaching Certificate program. This exam tests your knowledge of coaching principles, child development, communication, behavior guidance, coaching tools, and practice building.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      {
        id: 1,
        question: "What is the main focus of parenting coaching?",
        options: [
          "Helping parents discover their own solutions",
          "Telling parents exactly what to do",
          "Therapy for past childhood trauma",
          "Medical advice about children"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Parenting coaching focuses on helping parents discover their own solutions.",
        module: 1
      },
      {
        id: 2,
        question: "What are the four major developmental areas?",
        options: [
          "Physical, cognitive, social, emotional",
          "Academic, athletic, artistic, social",
          "Medical, psychological, educational, social",
          "Family, school, community, personal"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Children develop in physical, cognitive, social, and emotional areas.",
        module: 2
      },
      {
        id: 3,
        question: "What does giving full attention mean?",
        options: [
          "Being completely present with parents",
          "Listening while doing other tasks",
          "Only hearing words spoken",
          "Waiting for your turn to talk"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Full attention means being mentally and physically present.",
        module: 3
      },
      {
        id: 4,
        question: "How can behavior be understood?",
        options: [
          "As children's way of communicating needs",
          "Only as disobedience",
          "As intentional manipulation",
          "As random actions"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Behavior often communicates unmet needs or feelings.",
        module: 4
      },
      {
        id: 5,
        question: "What does GROW stand for?",
        options: [
          "Goal, Reality, Options, Will",
          "Growth, Resources, Opportunities, Work",
          "Guidance, Reflection, Observation, Wisdom",
          "Group, Relationship, Organization, Willingness"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: GROW is a coaching framework: Goal, Reality, Options, Will.",
        module: 5
      },
      {
        id: 6,
        question: "What is a coaching niche?",
        options: [
          "Specialization area you focus on",
          "Physical space for coaching",
          "Expensive coaching package",
          "Online coaching platform"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: A niche is the specific area you specialize in serving.",
        module: 6
      },
      {
        id: 7,
        question: "Which skill involves hearing beyond words to understand feelings?",
        options: [
          "Active listening",
          "Powerful questioning",
          "Goal setting",
          "Reflective practice"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Active listening means hearing feelings behind words.",
        module: 1
      },
      {
        id: 8,
        question: "What is attachment in early development?",
        options: [
          "Building secure emotional bonds",
          "Physical growth measurement",
          "Learning to attach objects",
          "Medical attachment theory"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Attachment refers to emotional bond with caregiver.",
        module: 2
      },
      {
        id: 9,
        question: "What are open questions?",
        options: [
          "Questions encouraging detailed responses",
          "Questions with yes/no answers",
          "Questions that are vague",
          "Questions about everything"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Open questions invite parents to share more detail.",
        module: 3
      },
      {
        id: 10,
        question: "What is positive discipline?",
        options: [
          "Teaching focus rather than punishing",
          "Only positive reinforcement",
          "No rules or limits",
          "Ignoring all misbehavior"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Positive discipline teaches while maintaining dignity.",
        module: 4
      },
      {
        id: 11,
        question: "What is the Goal step in GROW?",
        options: [
          "What parent wants to achieve",
          "Coach's objective for session",
          "Child's behavior goal",
          "Long-term life goals only"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: The Goal step clarifies what parent wants to work toward.",
        module: 5
      },
      {
        id: 12,
        question: "What are service offerings?",
        options: [
          "Coaching packages you provide",
          "Free advice always available",
          "Only in-person sessions",
          "Medical services offered"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Service offerings are specific coaching programs.",
        module: 6
      },
      {
        id: 13,
        question: "What does a coaching mindset include?",
        options: [
          "Belief that parents have inner wisdom",
          "Knowing all the answers for parents",
          "Directing parents step-by-step",
          "Judging parenting choices"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Coaching mindset trusts parents have inner wisdom.",
        module: 1
      },
      {
        id: 14,
        question: "What characterizes preschool years?",
        options: [
          "Rich pretend play and creativity",
          "Complete independence",
          "Academic mastery",
          "Career planning"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Preschoolers engage in imaginative play.",
        module: 2
      },
      {
        id: 15,
        question: "How should feedback start?",
        options: [
          "With what's working well",
          "With all the problems",
          "With general compliments",
          "With other parents' successes"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Start feedback with strengths to build confidence.",
        module: 3
      },
      {
        id: 16,
        question: "What does 'connection before correction' mean?",
        options: [
          "Strong bond makes guidance effective",
          "Correcting before connecting",
          "Only connecting, never correcting",
          "Correcting through connection only"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Children are more receptive when connected.",
        module: 4
      },
      {
        id: 17,
        question: "What are exceptions in solution-focused approach?",
        options: [
          "Times when problem doesn't happen",
          "Special rules for behavior",
          "Unusual parenting situations",
          "Times to ignore problems"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Exceptions reveal when things work better.",
        module: 5
      },
      {
        id: 18,
        question: "Why consider space for coaching?",
        options: [
          "Where you'll coach matters",
          "Only home offices work",
          "Space doesn't matter online",
          "Only fancy offices impress"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Space affects comfort and professionalism.",
        module: 6
      },
      {
        id: 19,
        question: "Why is confidentiality important in coaching?",
        options: [
          "It protects parent privacy and builds trust",
          "It makes coaching more expensive",
          "It limits what parents can share",
          "It's required by law for all conversations"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Confidentiality creates safe sharing space.",
        module: 1
      },
      {
        id: 20,
        question: "What develops during school age years?",
        options: [
          "More complex social relationships",
          "Basic walking skills",
          "First words",
          "Identity crisis"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: School-age children develop complex friendships.",
        module: 2
      },
      {
        id: 21,
        question: "What is emotional labeling?",
        options: [
          "Naming feelings you sense",
          "Judging emotions as good/bad",
          "Ignoring strong emotions",
          "Changing subject from feelings"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Emotional labeling acknowledges parent feelings.",
        module: 3
      },
      {
        id: 22,
        question: "What are natural consequences?",
        options: [
          "Learning from actions naturally",
          "Punishments parents create",
          "Random negative events",
          "Only serious consequences"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Natural consequences happen without intervention.",
        module: 4
      },
      {
        id: 23,
        question: "What is asset identification?",
        options: [
          "Recognizing parent strengths",
          "Listing financial assets",
          "Finding child's talents only",
          "Medical asset assessment"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Identifying strengths helps build on what works.",
        module: 5
      },
      {
        id: 24,
        question: "What is networking?",
        options: [
          "Building professional relationships",
          "Only online marketing",
          "Social media following",
          "Technical computer skills"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Networking builds connections for referrals.",
        module: 6
      },
      {
        id: 25,
        question: "What are coaching agreements?",
        options: [
          "Clear expectations and commitments",
          "Legal contracts for payment",
          "Rules children must follow",
          "Medical treatment plans"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Agreements establish clear expectations.",
        module: 1
      },
      {
        id: 26,
        question: "What is a key task of teen years?",
        options: [
          "Exploring personal identity",
          "Learning to walk",
          "First friendships",
          "Basic language skills"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Teens work on forming their identity.",
        module: 2
      },
      {
        id: 27,
        question: "What are solution-focused questions?",
        options: [
          "Looking toward positive change",
          "Analyzing past problems only",
          "Finding who's to blame",
          "Asking about ideal childhoods"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Solution-focused questions help envision outcomes.",
        module: 3
      },
      {
        id: 28,
        question: "How do routines help behavior?",
        options: [
          "Reduce anxiety through predictability",
          "Make children more rigid",
          "Eliminate all spontaneity",
          "Only help with bedtime"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Predictable routines help children feel secure.",
        module: 4
      },
      {
        id: 29,
        question: "What is a Wheel of Life?",
        options: [
          "Visual balance assessment tool",
          "Child's toy for coaching",
          "Time management device",
          "Family schedule wheel"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Wheel of Life assesses life balance.",
        module: 5
      },
      {
        id: 30,
        question: "What is continuing education?",
        options: [
          "Staying current in field",
          "Only formal degrees",
          "Teaching others constantly",
          "Child education focus"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Continuing education ensures current knowledge.",
        module: 6
      },
      {
        id: 31,
        question: "How is coaching different from therapy?",
        options: [
          "Focus on present and future, not past trauma",
          "Coaching is always longer term",
          "Therapy doesn't involve talking",
          "Coaching requires medical training"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Coaching focuses on present/future, therapy on past.",
        module: 1
      },
      {
        id: 32,
        question: "Why is individual variation important?",
        options: [
          "Each child develops at own pace",
          "All children should be the same",
          "Variation means problems",
          "It's not important at all"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Children reach milestones at different times.",
        module: 2
      },
      {
        id: 33,
        question: "What does paraphrasing do?",
        options: [
          "Shows understanding by restating",
          "Repeats exact words spoken",
          "Changes the subject completely",
          "Adds new information"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Paraphrasing demonstrates active listening.",
        module: 3
      },
      {
        id: 34,
        question: "What are logical consequences?",
        options: [
          "Related to the behavior",
          "Random punishments",
          "Severe consequences",
          "Only natural outcomes"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Logical consequences relate to behavior.",
        module: 4
      },
      {
        id: 35,
        question: "What is the Reality step in GROW?",
        options: [
          "What is happening now",
          "Ideal situation",
          "Past history only",
          "Theoretical possibilities"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Reality explores current situation.",
        module: 5
      },
      {
        id: 36,
        question: "What are target clients?",
        options: [
          "Who you best serve",
          "All parents everywhere",
          "Only wealthy parents",
          "Parents with perfect children"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Target clients are population you best help.",
        module: 6
      },
      {
        id: 37,
        question: "What is cultural sensitivity in coaching?",
        options: [
          "Respecting diverse parenting approaches",
          "Only working with one culture",
          "Changing parents' cultural practices",
          "Ignoring cultural differences"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Cultural sensitivity respects diverse practices.",
        module: 1
      },
      {
        id: 38,
        question: "What does cognitive development involve?",
        options: [
          "Thinking and problem-solving abilities",
          "Physical growth patterns",
          "Social relationship skills",
          "Emotional expression methods"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Cognitive development involves thinking skills.",
        module: 2
      },
      {
        id: 39,
        question: "How should observations be shared?",
        options: [
          "With concrete examples",
          "As general criticisms",
          "As personal opinions",
          "As absolute truths"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Specific examples make feedback actionable.",
        module: 3
      },
      {
        id: 40,
        question: "What is redirection?",
        options: [
          "Guiding toward acceptable alternatives",
          "Ignoring bad behavior",
          "Distracting with screens",
          "Changing subject completely"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Redirection guides toward appropriate activities.",
        module: 4
      }
    ]
  }
};
