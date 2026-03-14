// Youth Sports Coaching (Certificate) Course Content
// All content is text-only, easy to learn, with integrated quizzes

export const youthSportsCoachingCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "youth-sports-coaching-certificate",
  title: "Youth Sports Coaching (Certificate)",
  description: "Learn the fundamentals of coaching young athletes. This course covers basic coaching principles, child development in sports, safety protocols, and how to create positive sporting experiences for children aged 6-16.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⚽",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules + Exam)
  modules: [
    {
      id: 1,
      title: "Foundations of Youth Coaching",
      content: `# Module 1: Foundations of Youth Coaching

## Introduction to Youth Sports Coaching
Welcome to youth sports coaching! This module introduces you to the essential principles of coaching young athletes. You'll learn why youth coaching is unique and how to create positive sporting experiences for children.

## The Role of a Youth Coach
A youth coach wears many hats: teacher, mentor, motivator, and role model. Your primary role is to create a safe, positive environment where children can learn, grow, and enjoy sports.

**Key responsibilities include:**
- Ensuring physical and emotional safety
- Teaching fundamental skills
- Promoting sportsmanship and fair play
- Making sports fun and engaging
- Communicating effectively with children and parents

## Understanding Child Development
Children are not miniature adults. Their bodies, minds, and emotions develop in predictable stages that affect how they learn sports.

**Key developmental stages:**
- **Ages 6-8:** Short attention spans, learn through play, focus on basic movement skills
- **Ages 9-12:** Better coordination, can understand simple strategies, begin to compete
- **Ages 13-16:** Physical changes, social awareness, can handle complex training

## Creating a Positive Environment
The environment you create determines whether children will love or leave sports. A positive environment has three key elements: safety, fun, and learning.

**Safety comes first** - always check equipment, playing surfaces, and weather conditions before each session.

**Fun keeps them coming back** - include games, challenges, and variety in every practice.

**Learning happens through repetition** - break skills into small steps and celebrate progress.

## Basic Communication Skills
How you communicate with young athletes makes all the difference. Use simple, clear language and demonstrate what you want them to do.

**Effective communication tips:**
- Get down to their eye level
- Use positive reinforcement
- Give one instruction at a time
- Show them what you mean
- Listen as much as you talk

## Your Coaching Philosophy
By the end of this module, you should begin developing your coaching philosophy. Ask yourself: Why am I coaching? What do I want my athletes to learn beyond sports skills?

Remember: Youth sports should help children develop confidence, resilience, teamwork, and a lifelong love of physical activity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three key elements of a positive youth sports environment?",
          options: ["Winning, skills, discipline", "Safety, fun, learning", "Training, competition, awards", "Rules, uniforms, equipment"],
          correctAnswer: 1,
          explanation: "A positive youth sports environment prioritizes safety first, makes sure sports are fun, and focuses on continuous learning rather than just winning."
        },
        {
          id: 2,
          question: "Which age group typically has the shortest attention span for sports instruction?",
          options: ["Ages 13-16", "Ages 9-12", "Ages 6-8", "All age groups have similar attention spans"],
          correctAnswer: 2,
          explanation: "Children aged 6-8 have the shortest attention spans and learn best through play-based activities and frequent changes in activity."
        },
        {
          id: 3,
          question: "What should be your first priority as a youth sports coach?",
          options: ["Winning games", "Teaching advanced skills", "Ensuring safety", "Developing star athletes"],
          correctAnswer: 2,
          explanation: "Safety must always come first - checking equipment, playing surfaces, and weather conditions before each session is essential."
        },
        {
          id: 4,
          question: "How should you communicate complex skills to young athletes?",
          options: ["Use technical terminology", "Break them into small steps", "Write them on a board", "Have them watch professional videos"],
          correctAnswer: 1,
          explanation: "Break complex skills into small, manageable steps that children can master one at a time before putting them together."
        },
        {
          id: 5,
          question: "Which of these is NOT a key responsibility of a youth sports coach?",
          options: ["Teaching fundamental skills", "Ensuring emotional safety", "Making sports fun", "Guaranteeing scholarships"],
          correctAnswer: 3,
          explanation: "While coaches should help athletes develop, guaranteeing scholarships or professional careers is not a realistic or appropriate responsibility."
        },
        {
          id: 6,
          question: "What developmental change occurs around ages 13-16 that affects sports participation?",
          options: ["Loss of interest in sports", "Major physical changes", "Inability to learn new skills", "Decreased social awareness"],
          correctAnswer: 1,
          explanation: "Around ages 13-16, adolescents experience significant physical changes and increased social awareness that affect how they approach sports."
        },
        {
          id: 7,
          question: "How can you make practice sessions more engaging for young children?",
          options: ["Long lectures about strategy", "Including games and challenges", "Only focusing on competition", "Eliminating all breaks"],
          correctAnswer: 1,
          explanation: "Including games, challenges, and variety keeps practice sessions engaging and fun for young children with short attention spans."
        },
        {
          id: 8,
          question: "What should a youth coaching philosophy emphasize beyond sports skills?",
          options: ["Only winning records", "Developing professional athletes", "Confidence and teamwork", "Beating rival teams"],
          correctAnswer: 2,
          explanation: "A good youth coaching philosophy emphasizes developing life skills like confidence, resilience, and teamwork, not just sports skills."
        },
        {
          id: 9,
          question: "Why is it important to get down to a child's eye level when communicating?",
          options: ["It makes you look taller later", "It shows authority", "It creates better connection", "It's required by sports rules"],
          correctAnswer: 2,
          explanation: "Getting down to a child's eye level creates better connection, reduces intimidation, and helps them focus on your message."
        },
        {
          id: 10,
          question: "What is the best approach to giving instructions to young athletes?",
          options: ["Multiple instructions at once", "One instruction at a time", "Only written instructions", "Instructions through parents"],
          correctAnswer: 1,
          explanation: "Give one clear instruction at a time to avoid overwhelming young athletes and ensure they understand what to do."
        },
        {
          id: 11,
          question: "Which element determines whether children will continue participating in sports?",
          options: ["How many trophies they win", "If sports are fun", "Parental pressure", "Professional coaching"],
          correctAnswer: 1,
          explanation: "Children continue sports when they're having fun. Making sports enjoyable is key to long-term participation."
        },
        {
          id: 12,
          question: "What should you do before every practice session regarding safety?",
          options: ["Check equipment and playing surfaces", "Review winning strategies", "Plan post-game celebrations", "Interview parents"],
          correctAnswer: 0,
          explanation: "Always check equipment, playing surfaces, and weather conditions before each session to ensure physical safety."
        },
        {
          id: 13,
          question: "How do children aged 9-12 typically differ from younger children in sports learning?",
          options: ["They can't follow any instructions", "They understand simple strategies", "They prefer only individual sports", "They dislike all team activities"],
          correctAnswer: 1,
          explanation: "Children aged 9-12 have better cognitive development and can understand and apply simple strategies in sports."
        },
        {
          id: 14,
          question: "What percentage of communication should be listening when coaching youth?",
          options: ["Listen as much as you talk", "Talk 90%, listen 10%", "Only talk, no listening needed", "Let assistants do all listening"],
          correctAnswer: 0,
          explanation: "Good coaches listen as much as they talk to understand athletes' concerns, questions, and feedback."
        },
        {
          id: 15,
          question: "Which coaching approach is most effective for teaching new skills?",
          options: ["Demonstrate then explain", "Explain then demonstrate", "Only verbal explanation", "Have them figure it out alone"],
          correctAnswer: 1,
          explanation: "Show children what to do first, then explain why. Visual demonstration is more effective than verbal instruction alone."
        },
        {
          id: 16,
          question: "What is the primary goal of youth sports according to this module?",
          options: ["Creating professional athletes", "Developing lifelong physical activity habits", "Winning championships", "Getting college scholarships"],
          correctAnswer: 1,
          explanation: "The primary goal should be developing a lifelong love of physical activity and healthy habits, not just competitive success."
        },
        {
          id: 17,
          question: "How can you promote sportsmanship in young athletes?",
          options: ["Ignore poor behavior", "Model and teach fair play", "Only punish losers", "Focus only on winning"],
          correctAnswer: 1,
          explanation: "Model good sportsmanship yourself and explicitly teach and reinforce fair play principles during practices and games."
        },
        {
          id: 18,
          question: "What should you consider when planning activities for different age groups?",
          options: ["Only their athletic ability", "Their developmental stage", "What professional teams do", "What's on television"],
          correctAnswer: 1,
          explanation: "Always consider children's developmental stage - their physical, cognitive, and emotional capabilities at different ages."
        },
        {
          id: 19,
          question: "Why is positive reinforcement important in youth coaching?",
          options: ["It makes coaching easier", "It builds confidence and motivation", "Parents expect it", "It's required by leagues"],
          correctAnswer: 1,
          explanation: "Positive reinforcement builds children's confidence, increases motivation, and helps them associate sports with positive experiences."
        },
        {
          id: 20,
          question: "What is the coach's role in communicating with parents?",
          options: ["Avoid all communication", "Only communicate about problems", "Regular, positive communication", "Let athletes handle all communication"],
          correctAnswer: 2,
          explanation: "Maintain regular, positive communication with parents about their child's progress, schedule changes, and team information."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Skills Development",
      content: `# Module 2: Basic Skills Development

## Teaching Fundamental Movement Skills
This module focuses on how to teach basic sports skills effectively. You'll learn progression methods, error correction techniques, and how to make skill development fun for young athletes.

## The Skill Development Pyramid
All sports skills build on fundamental movement patterns. Think of skill development as a pyramid:

**Level 1: Basic Movement Skills** - running, jumping, throwing, catching, balancing
**Level 2: Sport-Specific Foundations** - dribbling, kicking, striking, passing
**Level 3: Advanced Techniques** - complex combinations, strategies, tactics

Most youth coaching focuses on Levels 1 and 2. Master the fundamentals before advancing.

## The Four-Step Teaching Method
Use this simple method to teach any new skill:

**Step 1: Demonstrate** - Show the complete skill at normal speed
**Step 2: Explain** - Break it down into key points using simple language
**Step 3: Practice** - Let them try with guidance and corrections
**Step 4: Apply** - Use the skill in games or modified play

Repeat this cycle, building from simple to complex.

## Creating Effective Drills
Good drills have three characteristics: they're purposeful, progressive, and engaging.

**Purposeful drills** directly relate to game situations
**Progressive drills** start easy and increase difficulty
**Engaging drills** keep athletes active and interested

Avoid lines and waiting - maximize activity time for every athlete.

## Error Detection and Correction
Young athletes will make mistakes - that's how they learn. Your job is to identify and correct errors effectively.

**Common correction principles:**
- Fix one error at a time
- Start with major errors that affect safety
- Use positive correction language
- Show them what to do differently

Remember: Praise effort, correct technique.

## Age-Appropriate Skill Progressions
Different ages need different approaches to skill development:

**Ages 6-8:** Focus on exploration and basic patterns
**Ages 9-12:** Introduce technical correctness
**Ages 13-16:** Refine technique and add complexity

Never rush progression - mastery takes time and repetition.

## Making Practice Fun
Skill development doesn't have to be boring. Use games, challenges, and variety to keep athletes engaged.

**Fun practice ideas:**
- Turn drills into competitions
- Use colorful equipment
- Create imaginative scenarios
- Include partner activities
- Celebrate small improvements

When athletes are having fun, they practice longer and learn better.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three levels of the skill development pyramid?",
          options: ["Beginner, Intermediate, Advanced", "Basic movement, Sport-specific, Advanced techniques", "Warm-up, Practice, Cool-down", "Individual, Partner, Team"],
          correctAnswer: 1,
          explanation: "The pyramid progresses from basic movement skills to sport-specific foundations to advanced techniques."
        },
        {
          id: 2,
          question: "What is the first step in the four-step teaching method?",
          options: ["Explain the skill", "Let them practice", "Demonstrate the skill", "Apply in game situation"],
          correctAnswer: 2,
          explanation: "Always demonstrate the complete skill first so athletes have a visual model of what they're trying to achieve."
        },
        {
          id: 3,
          question: "What should you focus on when creating drills for young athletes?",
          options: ["Minimizing activity time", "Maximizing standing in lines", "Keeping them active and engaged", "Making them as difficult as possible"],
          correctAnswer: 2,
          explanation: "Good drills maximize activity time and keep all athletes engaged rather than standing in lines waiting for turns."
        },
        {
          id: 4,
          question: "How many errors should you try to correct at one time?",
          options: ["As many as possible", "Only major errors", "One error at a time", "Wait for parents to correct errors"],
          correctAnswer: 2,
          explanation: "Correct one error at a time to avoid overwhelming young athletes. Start with errors that affect safety or fundamental technique."
        },
        {
          id: 5,
          question: "What type of skills should you focus on with children aged 6-8?",
          options: ["Complex strategies", "Basic movement patterns", "Advanced techniques", "Professional-level skills"],
          correctAnswer: 1,
          explanation: "Children aged 6-8 should focus on exploring and mastering basic movement patterns like running, jumping, and throwing."
        },
        {
          id: 6,
          question: "What makes a drill 'purposeful'?",
          options: ["It takes a long time", "It relates to game situations", "It uses expensive equipment", "It's very complicated"],
          correctAnswer: 1,
          explanation: "Purposeful drills directly relate to skills and situations athletes will encounter in actual games."
        },
        {
          id: 7,
          question: "What is the correct order of the four-step teaching method?",
          options: ["Practice, Explain, Demonstrate, Apply", "Demonstrate, Explain, Practice, Apply", "Explain, Practice, Apply, Demonstrate", "Apply, Practice, Explain, Demonstrate"],
          correctAnswer: 1,
          explanation: "The correct order is: Demonstrate the skill, Explain key points, let them Practice with guidance, then Apply in game-like situations."
        },
        {
          id: 8,
          question: "What should you praise when athletes are learning new skills?",
          options: ["Only perfect performance", "Their effort and improvement", "Comparing them to professionals", "How they look in uniform"],
          correctAnswer: 1,
          explanation: "Praise effort, improvement, and correct attempts - not just perfect performance. This builds confidence and motivation."
        },
        {
          id: 9,
          question: "What characteristic should progressive drills have?",
          options: ["Start difficult, get easier", "Start easy, increase difficulty", "Stay the same difficulty", "Be randomly difficult"],
          correctAnswer: 1,
          explanation: "Progressive drills start at an achievable difficulty level and gradually increase challenge as athletes improve."
        },
        {
          id: 10,
          question: "When should you introduce technical correctness in skill development?",
          options: ["Ages 6-8", "Ages 9-12", "Only for professional athletes", "Never - let them develop naturally"],
          correctAnswer: 1,
          explanation: "Around ages 9-12, children have the cognitive and physical development to start focusing on technical correctness."
        },
        {
          id: 11,
          question: "What is a key principle for making practice fun?",
          options: ["Eliminate all games", "Use variety and imagination", "Only serious repetition", "Focus only on conditioning"],
          correctAnswer: 1,
          explanation: "Using variety, games, imaginative scenarios, and challenges makes practice fun and keeps athletes engaged."
        },
        {
          id: 12,
          question: "What type of errors should you correct first?",
          options: ["Minor style issues", "Errors that affect safety", "What looks bad to parents", "Everything equally"],
          correctAnswer: 1,
          explanation: "Always correct errors that affect safety first, then move to errors that prevent skill development."
        },
        {
          id: 13,
          question: "How can you turn drills into engaging activities?",
          options: ["Make them into competitions", "Make them longer and harder", "Eliminate all talking", "Have athletes work alone"],
          correctAnswer: 0,
          explanation: "Turning drills into friendly competitions or challenges increases engagement and motivation."
        },
        {
          id: 14,
          question: "What is the foundation of all sports skills?",
          options: ["Professional coaching", "Expensive equipment", "Fundamental movement patterns", "Natural talent only"],
          correctAnswer: 2,
          explanation: "All sports skills build on fundamental movement patterns like running, jumping, throwing, and balancing."
        },
        {
          id: 15,
          question: "What should you do after demonstrating a skill?",
          options: ["Have them compete immediately", "Break it down and explain", "Move to a different skill", "Take a long break"],
          correctAnswer: 1,
          explanation: "After demonstrating, break the skill down into key points using simple, clear language."
        },
        {
          id: 16,
          question: "Why is repetition important in skill development?",
          options: ["It's boring but necessary", "It leads to mastery", "Parents expect it", "It fills practice time"],
          correctAnswer: 1,
          explanation: "Repetition with proper technique leads to muscle memory and mastery of skills."
        },
        {
          id: 17,
          question: "What should engaging drills minimize?",
          options: ["Activity time", "Waiting in lines", "Skill development", "Coach involvement"],
          correctAnswer: 1,
          explanation: "Engaging drills minimize waiting time and keep all athletes actively participating."
        },
        {
          id: 18,
          question: "How should you use language when explaining skills to children?",
          options: ["Technical terminology", "Complex explanations", "Simple, clear language", "As few words as possible"],
          correctAnswer: 2,
          explanation: "Use simple, clear language that children can understand. Avoid technical jargon."
        },
        {
          id: 19,
          question: "What is the benefit of using imaginative scenarios in practice?",
          options: ["Makes practice longer", "Increases engagement and fun", "Confuses athletes", "Wastes valuable time"],
          correctAnswer: 1,
          explanation: "Imaginative scenarios (like 'dribble through the forest' or 'escape the monster') make practice more engaging and fun."
        },
        {
          id: 20,
          question: "When should you advance to more complex skills?",
          options: ["After mastering fundamentals", "Immediately to challenge them", "When parents request it", "Never - keep it simple"],
          correctAnswer: 0,
          explanation: "Only advance to more complex skills after athletes have mastered the fundamental movements and techniques."
        }
      ]
    },
    {
      id: 3,
      title: "Safety and Injury Prevention",
      content: `# Module 3: Safety and Injury Prevention

## Creating a Safe Sports Environment
Safety is your most important responsibility as a youth coach. This module covers injury prevention, emergency procedures, and creating safe practices and games.

## Pre-Activity Safety Checks
Before every practice or game, conduct these essential safety checks:

**Equipment check:** Inspect all equipment for damage or wear
**Facility check:** Look for hazards on playing surfaces
**Weather check:** Consider temperature, humidity, and air quality
**Athlete check:** Ensure athletes are properly dressed and hydrated

Never skip these checks - they prevent most common injuries.

## Common Youth Sports Injuries
Understanding common injuries helps you prevent and recognize them:

**Acute injuries:** Sprains, strains, fractures from sudden trauma
**Overuse injuries:** Stress fractures, tendonitis from repetition
**Heat-related illnesses:** Dehydration, heat exhaustion, heat stroke
**Concussions:** Brain injuries from blows to head or body

Most youth sports injuries are preventable with proper supervision and preparation.

## Warm-Up and Cool-Down Protocols
Proper warm-ups and cool-downs significantly reduce injury risk:

**Dynamic Warm-Up (10-15 minutes before activity):**
- Light jogging or skipping
- Dynamic stretches (leg swings, arm circles)
- Sport-specific movements gradually increasing intensity

**Cool-Down (5-10 minutes after activity):**
- Light activity to lower heart rate
- Static stretching (hold each stretch 20-30 seconds)
- Hydration and recovery discussion

Never allow athletes to go from rest to intense activity without proper warm-up.

## Hydration and Nutrition Guidelines
Young athletes have special hydration and nutrition needs:

**Hydration rules:**
- Drink water before, during, and after activity
- Weigh before and after activity to monitor fluid loss
- Avoid sugary drinks and caffeine
- Recognize signs of dehydration (dark urine, fatigue, dizziness)

**Basic nutrition:**
- Eat a balanced meal 2-3 hours before activity
- Have a light snack 30-60 minutes before if needed
- Replenish with protein and carbs after activity

## Emergency Action Plans
Every coach must have an emergency action plan:

**Key components:**
- Location of first aid kit and AED
- Emergency contact information for all athletes
- Knowledge of nearest medical facility
- Designated person to call 911
- CPR and first aid certified staff

Practice your emergency plan annually and update as needed.

## Concussion Recognition and Response
Concussions are serious brain injuries requiring immediate attention:

**Recognize symptoms:**
- Headache or pressure in head
- Nausea or vomiting
- Balance problems or dizziness
- Confusion or memory problems
- Sensitivity to light or noise

**Response protocol:**
1. Remove athlete from play immediately
2. Inform parents/guardians
3. Seek medical evaluation
4. Follow return-to-play guidelines

When in doubt, sit them out.

## Weather Safety Considerations
Environmental conditions affect athlete safety:

**Heat safety:** Adjust activity for high temperatures and humidity
**Cold safety:** Layer clothing and monitor for hypothermia
**Lightning safety:** Clear fields immediately at first sign of lightning
**Air quality:** Modify activity during poor air quality days

Your priority is athlete safety, not completing the planned activity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you check before every practice or game?",
          options: ["Only the scoreboard", "Equipment, facility, weather, and athletes", "What other teams are doing", "Social media updates"],
          correctAnswer: 1,
          explanation: "Conduct comprehensive safety checks of equipment, playing surfaces, weather conditions, and athlete preparedness before every activity."
        },
        {
          id: 2,
          question: "What are the two main categories of sports injuries?",
          options: ["Big and small injuries", "Acute and overuse injuries", "Visible and invisible injuries", "Treatable and untreatable injuries"],
          correctAnswer: 1,
          explanation: "Acute injuries happen suddenly from trauma, while overuse injuries develop gradually from repetitive stress."
        },
        {
          id: 3,
          question: "How long should a proper warm-up last before activity?",
          options: ["1-2 minutes", "10-15 minutes", "30-45 minutes", "No warm-up needed"],
          correctAnswer: 1,
          explanation: "A proper dynamic warm-up should last 10-15 minutes to gradually prepare the body for activity."
        },
        {
          id: 4,
          question: "What is the first sign of dehydration in young athletes?",
          options: ["Dark yellow urine", "Increased energy", "Better performance", "No thirst"],
          correctAnswer: 0,
          explanation: "Dark yellow urine is an early sign of dehydration. Clear or light yellow urine indicates proper hydration."
        },
        {
          id: 5,
          question: "What should you do if you suspect an athlete has a concussion?",
          options: ["Let them continue playing", "Remove them from play immediately", "Wait and see if symptoms improve", "Give them water and continue"],
          correctAnswer: 1,
          explanation: "If you suspect a concussion, remove the athlete from play immediately and seek medical evaluation."
        },
        {
          id: 6,
          question: "What type of stretching is best during warm-up?",
          options: ["Static stretching", "Dynamic stretching", "No stretching", "Only partner stretching"],
          correctAnswer: 1,
          explanation: "Dynamic stretching (moving while stretching) is best during warm-up. Save static stretching for cool-down."
        },
        {
          id: 7,
          question: "When should athletes drink water during sports activities?",
          options: ["Only when thirsty", "Before, during, and after activity", "Only after activity", "Never during activity"],
          correctAnswer: 1,
          explanation: "Athletes should drink water before, during breaks in, and after activity to maintain proper hydration."
        },
        {
          id: 8,
          question: "What is included in an emergency action plan?",
          options: ["Only first aid kit location", "Location of kit, emergency contacts, medical facility info", "Game strategies only", "Team roster and schedule"],
          correctAnswer: 1,
          explanation: "An emergency action plan includes first aid kit/AED location, emergency contacts, nearest medical facility, and designated emergency responders."
        },
        {
          id: 9,
          question: "What should you do at the first sign of lightning?",
          options: ["Continue playing", "Clear the field immediately", "Wait for thunder", "Only move if it gets closer"],
          correctAnswer: 1,
          explanation: "Clear all athletes from the field immediately at the first sign of lightning. Don't wait for thunder or closer strikes."
        },
        {
          id: 10,
          question: "How long should static stretches be held during cool-down?",
          options: ["5-10 seconds", "20-30 seconds", "1-2 minutes", "Until it hurts"],
          correctAnswer: 1,
          explanation: "Hold static stretches for 20-30 seconds during cool-down to properly lengthen muscles and improve flexibility."
        },
        {
          id: 11,
          question: "What is a common overuse injury in youth sports?",
          options: ["Sudden fracture", "Stress fracture", "Concussion", "Sprained ankle"],
          correctAnswer: 1,
          explanation: "Stress fractures are common overuse injuries from repetitive stress without adequate rest and recovery."
        },
        {
          id: 12,
          question: "What should athletes consume after activity for recovery?",
          options: ["Only water", "Protein and carbohydrates", "Sugary drinks", "Nothing for several hours"],
          correctAnswer: 1,
          explanation: "After activity, athletes should consume a combination of protein and carbohydrates to aid muscle recovery and replenish energy."
        },
        {
          id: 13,
          question: "What temperature condition requires activity modification?",
          options: ["Only extreme cold", "Only extreme heat", "Both extreme heat and cold", "Temperature doesn't matter"],
          correctAnswer: 2,
          explanation: "Both extreme heat and cold require activity modification to ensure athlete safety and prevent related illnesses."
        },
        {
          id: 14,
          question: "What should you do if an athlete shows signs of heat exhaustion?",
          options: ["Push them to continue", "Move them to shade and cool them", "Give them energy drinks", "Ignore it - they're just tired"],
          correctAnswer: 1,
          explanation: "Move them to a shaded area, remove excess clothing, cool with wet cloths, and provide water. Seek medical help if symptoms persist."
        },
        {
          id: 15,
          question: "How often should you practice your emergency action plan?",
          options: ["Never - just have it written", "Once a year", "Every practice", "Only before big games"],
          correctAnswer: 1,
          explanation: "Practice and review your emergency action plan at least once a year to ensure everyone knows their role."
        },
        {
          id: 16,
          question: "What is the purpose of a cool-down?",
          options: ["Waste time after practice", "Gradually lower heart rate and stretch", "Give coaches time to talk", "Make practice longer"],
          correctAnswer: 1,
          explanation: "Cool-downs gradually lower heart rate, help remove metabolic waste, and improve flexibility through stretching."
        },
        {
          id: 17,
          question: "What equipment should be regularly inspected for safety?",
          options: ["Only balls and nets", "All equipment used in activities", "Only what looks old", "Only expensive equipment"],
          correctAnswer: 1,
          explanation: "Regularly inspect all equipment - protective gear, balls, nets, goals, etc. - for damage or wear that could cause injury."
        },
        {
          id: 18,
          question: "When should athletes eat before activity?",
          options: ["Right before starting", "2-3 hours before activity", "Not at all before activity", "During activity"],
          correctAnswer: 1,
          explanation: "A balanced meal 2-3 hours before activity provides energy without causing digestive discomfort during exercise."
        },
        {
          id: 19,
          question: "What is a key symptom of concussion?",
          options: ["Increased appetite", "Headache or pressure in head", "Better coordination", "Increased energy"],
          correctAnswer: 1,
          explanation: "Headache or pressure in the head is a common symptom of concussion that requires immediate attention."
        },
        {
          id: 20,
          question: "What is your priority when weather conditions become dangerous?",
          options: ["Completing the planned activity", "Athlete safety", "Parent expectations", "League requirements"],
          correctAnswer: 1,
          explanation: "Athlete safety is always the top priority, even if it means canceling or modifying planned activities."
        }
      ]
    },
    {
      id: 4,
      title: "Age-Appropriate Coaching",
      content: `# Module 4: Age-Appropriate Coaching

## Understanding Developmental Stages
This module teaches you how to tailor your coaching approach to different age groups. You'll learn what to expect from athletes at various ages and how to maximize their development and enjoyment.

## Coaching Children (Ages 6-8)
This age group is all about exploration and fun. They're developing basic movement skills and learning to enjoy physical activity.

**Characteristics:**
- Short attention spans (8-12 minutes)
- Learn through play and imagination
- Developing fundamental movement patterns
- Need constant activity and variety
- Focus on individual skills rather than team play

**Coaching strategies:**
- Use imaginative games and stories
- Keep instructions short and simple
- Demonstrate everything
- Focus on one skill at a time
- Praise effort and participation

**Practice structure:**
- 5-10 minute activity segments
- Frequent changes and breaks
- Lots of individual activities
- Simple, fun games
- Minimal competition

## Coaching Pre-Teens (Ages 9-12)
This age group can handle more structure and begin to understand teamwork and simple strategies.

**Characteristics:**
- Longer attention spans (15-20 minutes)
- Can understand rules and strategies
- Developing sport-specific skills
- Beginning to value teamwork
- Starting to compare themselves to peers

**Coaching strategies:**
- Teach basic rules and sportsmanship
- Introduce simple team strategies
- Provide specific technical feedback
- Encourage effort and improvement
- Balance individual and team activities

**Practice structure:**
- 15-20 minute activity segments
- Skill development followed by application
- Modified small-sided games
- Basic tactical discussions
- Positive competition

## Coaching Adolescents (Ages 13-16)
This age group can handle complex training and understand advanced concepts, but they're also dealing with significant physical and emotional changes.

**Characteristics:**
- Can focus for 30+ minutes
- Physical changes affect coordination
- Social dynamics become important
- Can understand complex strategies
- May specialize in specific sports

**Coaching strategies:**
- Explain the 'why' behind training
- Address physical changes sensitively
- Incorporate peer leadership
- Teach advanced techniques
- Balance training with recovery

**Practice structure:**
- 20-30 minute focused segments
- Technical and tactical training
- Conditioning appropriate for age
- More complex game situations
- Leadership opportunities

## Communication for Different Ages
Your communication style must adapt to each age group:

**Ages 6-8:** Simple, visual, enthusiastic
**Ages 9-12:** Clear, specific, encouraging
**Ages 13-16:** Respectful, explanatory, collaborative

Always consider: Can they understand what I'm saying? Are they engaged? Do they feel respected?

## Motivation and Feedback
Different ages respond to different types of motivation:

**Ages 6-8:** External rewards (stickers, praise)
**Ages 9-12:** Skill improvement and peer acceptance
**Ages 13-16:** Personal goals and achievement

Adjust your feedback to match what motivates each age group.

## Managing Parent Expectations
Parents have different expectations at different ages:

**Younger children:** Fun, safety, basic skills
**Middle years:** Skill development, sportsmanship
**Older youth:** Competition, advancement, college potential

Communicate regularly with parents about your coaching philosophy and their child's progress.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the typical attention span for children aged 6-8?",
          options: ["30+ minutes", "15-20 minutes", "8-12 minutes", "45-60 minutes"],
          correctAnswer: 2,
          explanation: "Children aged 6-8 typically have attention spans of 8-12 minutes, requiring frequent activity changes."
        },
        {
          id: 2,
          question: "How do children aged 6-8 learn best?",
          options: ["Through lectures", "Through play and imagination", "Through written instructions", "Through watching professionals"],
          correctAnswer: 1,
          explanation: "Young children learn best through play, imagination, and hands-on activities rather than verbal instruction alone."
        },
        {
          id: 3,
          question: "What can children aged 9-12 begin to understand?",
          options: ["Complex professional strategies", "Simple rules and team strategies", "Nothing beyond basic skills", "Only individual performance"],
          correctAnswer: 1,
          explanation: "Children aged 9-12 can understand and apply simple rules, strategies, and begin to appreciate teamwork."
        },
        {
          id: 4,
          question: "What becomes important for adolescents aged 13-16?",
          options: ["Only winning games", "Social dynamics and peer relationships", "Ignoring all social aspects", "Skipping all team activities"],
          correctAnswer: 1,
          explanation: "Social dynamics, peer relationships, and acceptance become increasingly important during adolescence."
        },
        {
          id: 5,
          question: "What should practice segments be for children aged 6-8?",
          options: ["30-45 minutes long", "5-10 minutes long", "1-2 hours long", "Same as professional practices"],
          correctAnswer: 1,
          explanation: "Keep practice segments short (5-10 minutes) for young children to match their attention spans."
        },
        {
          id: 6,
          question: "What type of games work best with children aged 6-8?",
          options: ["Full regulation games", "Complex strategic games", "Simple, fun games with imagination", "Only competitive games"],
          correctAnswer: 2,
          explanation: "Simple, fun games that incorporate imagination and minimal rules work best with young children."
        },
        {
          id: 7,
          question: "What can you introduce to children aged 9-12?",
          options: ["Professional training regimens", "Simple team strategies", "Only individual skill work", "No tactical information"],
          correctAnswer: 1,
          explanation: "This age group can begin to understand and apply simple team strategies and basic tactics."
        },
        {
          id: 8,
          question: "What affects coordination in adolescents aged 13-16?",
          options: ["Only lack of practice", "Rapid physical growth and changes", "Not listening to coaches", "Poor equipment"],
          correctAnswer: 1,
          explanation: "Rapid physical growth during adolescence can temporarily affect coordination and skill execution."
        },
        {
          id: 9,
          question: "How should you communicate with children aged 6-8?",
          options: ["Complex technical terms", "Simple, visual, enthusiastic", "Only written instructions", "Through parents only"],
          correctAnswer: 1,
          explanation: "Use simple language, visual demonstrations, and enthusiastic communication with young children."
        },
        {
          id: 10,
          question: "What motivates children aged 6-8?",
          options: ["College scholarships", "External rewards and praise", "Professional contracts", "Complex strategies"],
          correctAnswer: 1,
          explanation: "Young children are motivated by external rewards like stickers, praise, and simple recognition."
        },
        {
          id: 11,
          question: "What practice structure works for ages 9-12?",
          options: ["Same as professional athletes", "15-20 minute activity segments", "No structure needed", "Only free play"],
          correctAnswer: 1,
          explanation: "15-20 minute activity segments work well for this age group, balancing skill work with application."
        },
        {
          id: 12,
          question: "What should you explain to adolescents aged 13-16?",
          options: ["Nothing - just tell them what to do", "The 'why' behind training", "Only game results matter", "Parents' expectations only"],
          correctAnswer: 1,
          explanation: "Adolescents respond better when they understand the purpose and reasoning behind training methods."
        },
        {
          id: 13,
          question: "What type of feedback works for ages 9-12?",
          options: ["Only criticism", "Specific technical feedback", "No feedback needed", "Compare to professionals"],
          correctAnswer: 1,
          explanation: "Provide specific, technical feedback that helps them understand how to improve their skills."
        },
        {
          id: 14,
          question: "What becomes possible for some adolescents aged 13-16?",
          options: ["Sport specialization", "Only multi-sport participation", "No skill improvement", "Avoiding all competition"],
          correctAnswer: 0,
          explanation: "Some adolescents may begin to specialize in specific sports during these years as skills and interests develop."
        },
        {
          id: 15,
          question: "How should you communicate with adolescents?",
          options: ["Like small children", "Respectfully and collaboratively", "Only through punishment", "Ignore them completely"],
          correctAnswer: 1,
          explanation: "Communicate with adolescents respectfully, explain your reasoning, and involve them in decision-making when appropriate."
        },
        {
          id: 16,
          question: "What do parents of younger children typically expect?",
          options: ["College scholarships", "Fun, safety, basic skills", "Professional training", "Winning above all"],
          correctAnswer: 1,
          explanation: "Parents of young children typically prioritize fun, safety, and basic skill development over competition."
        },
        {
          id: 17,
          question: "What should you incorporate for adolescents?",
          options: ["Only individual training", "Peer leadership opportunities", "No social interaction", "Isolation from teammates"],
          correctAnswer: 1,
          explanation: "Incorporate peer leadership opportunities as adolescents develop social skills and responsibility."
        },
        {
          id: 18,
          question: "What type of competition is appropriate for ages 9-12?",
          options: ["Highly competitive tournaments", "Positive, balanced competition", "No competition ever", "Only against professionals"],
          correctAnswer: 1,
          explanation: "Positive, balanced competition that emphasizes effort and improvement over winning is appropriate."
        },
        {
          id: 19,
          question: "What should you balance for adolescents?",
          options: ["Only training, no recovery", "Training with adequate recovery", "Only games, no practice", "Social time only"],
          correctAnswer: 1,
          explanation: "Balance appropriate training with adequate recovery time as adolescents' bodies are still developing."
        },
        {
          id: 20,
          question: "How should you handle physical changes with adolescents?",
          options: ["Ignore them completely", "Address them sensitively", "Mock or tease athletes", "Focus only on performance"],
          correctAnswer: 1,
          explanation: "Address physical changes and development sensitively, recognizing they can affect performance and confidence."
        }
      ]
    },
    {
      id: 5,
      title: "Practice Planning and Organization",
      content: `# Module 5: Practice Planning and Organization

## Effective Practice Planning
This module teaches you how to plan and organize effective practices that maximize learning and enjoyment while making the best use of your time and resources.

## The Practice Planning Formula
Every effective practice follows this basic structure:

**1. Introduction (5 minutes):** Welcome, review objectives, set expectations
**2. Warm-Up (10-15 minutes):** Dynamic activities to prepare body and mind
**3. Skill Development (20-30 minutes):** Teach and practice new or existing skills
**4. Game Application (20-30 minutes):** Apply skills in game-like situations
**5. Cool-Down (5-10 minutes):** Lower intensity, stretching, review
**6. Conclusion (5 minutes):** Praise, preview next practice, answer questions

Total practice time: 60-90 minutes for most age groups.

## Setting Practice Objectives
Each practice should have 2-3 clear objectives. Objectives should be:
- **Specific:** Exactly what you want to accomplish
- **Achievable:** Realistic for your athletes' level
- **Measurable:** You can assess if they were met
- **Relevant:** Connect to overall season goals

Example: "By the end of practice, athletes will be able to execute proper throwing technique with 70% accuracy."

## Activity Selection and Progression
Choose activities that progress logically:
1. **Isolated skill practice:** Master the skill alone
2. **Partner practice:** Add cooperative elements
3. **Small group practice:** Add limited pressure
4. **Modified game practice:** Apply in game-like situations
5. **Full game application:** Use in actual competition

This progression builds confidence and competence.

## Time Management Strategies
Maximize activity time and minimize waiting:

**Strategies to increase activity time:**
- Use multiple stations or groups
- Have plenty of equipment available
- Keep explanations short and demonstrations clear
- Use active rest (light activity while waiting)
- Plan transitions between activities

Aim for at least 70% of practice time in actual activity.

## Adapting to Different Group Sizes
Your practice plan must adapt to your number of athletes:

**Small groups (6-10 athletes):**
- More individual attention
- Can practice as one group
- Easier to monitor everyone

**Medium groups (11-20 athletes):**
- Use station rotations
- Need assistant coaches or peer leaders
- More organization required

**Large groups (21+ athletes):**
- Multiple simultaneous activities
- Clear division of space
- Several coaches or helpers needed

## Equipment and Space Organization
Proper organization prevents chaos:

**Equipment tips:**
- Have all equipment ready before practice
- Use color-coding for different groups
- Store frequently used items accessibly
- Assign equipment managers from older athletes

**Space management:**
- Define clear boundaries for activities
- Use cones or markers to separate areas
- Consider safety spacing between groups
- Have a designated meeting area

## Dealing with Common Challenges
Be prepared to handle these common situations:

**Weather changes:** Have indoor alternatives ready
**Missing equipment:** Adapt activities to available resources
**Unexpected absences:** Adjust teams and groups flexibly
**Behavior issues:** Have clear behavior expectations and consequences
**Injuries:** Follow emergency protocols immediately

Flexibility is key to successful coaching.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the basic structure of an effective practice?",
          options: ["Only games, no skill work", "Introduction, Warm-up, Skill Development, Game Application, Cool-down, Conclusion", "Just let athletes do what they want", "Only conditioning exercises"],
          correctAnswer: 1,
          explanation: "Effective practices follow: Introduction, Warm-up, Skill Development, Game Application, Cool-down, and Conclusion."
        },
        {
          id: 2,
          question: "How many clear objectives should each practice have?",
          options: ["No objectives needed", "10-15 objectives", "2-3 clear objectives", "Only one broad objective"],
          correctAnswer: 2,
          explanation: "Each practice should have 2-3 clear, specific objectives that guide your activity selection and focus."
        },
        {
          id: 3,
          question: "What percentage of practice time should be actual activity?",
          options: ["30-40%", "At least 70%", "10-20%", "100% - no breaks"],
          correctAnswer: 1,
          explanation: "Aim for at least 70% of practice time in actual physical activity, minimizing standing and waiting."
        },
        {
          id: 4,
          question: "What is the first step in activity progression?",
          options: ["Full game competition", "Isolated skill practice", "Partner practice", "Watch professional videos"],
          correctAnswer: 1,
          explanation: "Start with isolated skill practice where athletes can focus on technique without pressure."
        },
        {
          id: 5,
          question: "How long should a typical youth sports practice last?",
          options: ["3-4 hours", "60-90 minutes", "20-30 minutes", "As long as athletes want"],
          correctAnswer: 1,
          explanation: "Most youth sports practices should last 60-90 minutes, depending on age and attention spans."
        },
        {
          id: 6,
          question: "What should practice objectives be?",
          options: ["Vague and general", "Specific, achievable, measurable, relevant", "Only about winning", "Whatever parents request"],
          correctAnswer: 1,
          explanation: "Objectives should be Specific, Achievable, Measurable, and Relevant to guide effective practice planning."
        },
        {
          id: 7,
          question: "What strategy increases activity time during practice?",
          options: ["Long lectures", "Using multiple stations", "Only individual work", "Eliminating all breaks"],
          correctAnswer: 1,
          explanation: "Using multiple stations or groups allows more athletes to be active simultaneously, increasing overall activity time."
        },
        {
          id: 8,
          question: "How should you handle large groups of athletes?",
          options: ["Treat them as one small group", "Use multiple simultaneous activities", "Only work with a few at a time", "Cancel practice if too many come"],
          correctAnswer: 1,
          explanation: "With large groups, use multiple simultaneous activities with clear space divisions and sufficient supervision."
        },
        {
          id: 9,
          question: "What should you do with equipment before practice?",
          options: ["Figure it out during practice", "Have everything ready beforehand", "Use only what athletes bring", "Borrow from other teams"],
          correctAnswer: 1,
          explanation: "Have all equipment organized and ready before practice begins to maximize activity time and minimize confusion."
        },
        {
          id: 10,
          question: "What comes after isolated skill practice in progression?",
          options: ["Professional competition", "Partner practice", "End of practice", "Only individual conditioning"],
          correctAnswer: 1,
          explanation: "After isolated skill practice, add cooperative elements through partner practice before advancing to group activities."
        },
        {
          id: 11,
          question: "What is the purpose of the introduction segment?",
          options: ["Waste time", "Welcome, review objectives, set expectations", "Only take attendance", "Give long speeches"],
          correctAnswer: 1,
          explanation: "The introduction welcomes athletes, reviews practice objectives, and sets expectations for the session."
        },
        {
          id: 12,
          question: "How can you minimize waiting time during practice?",
          options: ["Have plenty of equipment available", "Make lines longer", "Only work with some athletes", "Eliminate all skill work"],
          correctAnswer: 0,
          explanation: "Having sufficient equipment available allows more athletes to participate simultaneously, reducing waiting time."
        },
        {
          id: 13,
          question: "What should you do if weather forces practice changes?",
          options: ["Cancel completely", "Have indoor alternatives ready", "Practice in dangerous conditions", "Only work with dedicated athletes"],
          correctAnswer: 1,
          explanation: "Always have indoor or alternative activities ready in case weather conditions prevent your planned practice."
        },
        {
          id: 14,
          question: "What is modified game practice?",
          options: ["Professional rules only", "Applying skills in game-like situations with modifications", "No rules at all", "Only individual skills"],
          correctAnswer: 1,
          explanation: "Modified game practice applies skills in game-like situations with rule or space modifications to focus on specific skills."
        },
        {
          id: 15,
          question: "How should you organize practice space?",
          options: ["No organization needed", "Define clear boundaries and separations", "Let athletes choose spaces", "Use only half the available space"],
          correctAnswer: 1,
          explanation: "Use cones, markers, or natural boundaries to define clear activity areas and ensure safety spacing."
        },
        {
          id: 16,
          question: "What is key to handling unexpected situations?",
          options: ["Rigid adherence to plan", "Flexibility and adaptability", "Only following written plans", "Canceling practice immediately"],
          correctAnswer: 1,
          explanation: "Flexibility allows you to adapt to unexpected situations while still achieving your practice objectives."
        },
        {
          id: 17,
          question: "What should cool-down include?",
          options: ["Maximum effort exercises", "Lower intensity, stretching, review", "Only sitting and resting", "More competitive games"],
          correctAnswer: 1,
          explanation: "Cool-down should include lower intensity activity, stretching, and reviewing what was learned."
        },
        {
          id: 18,
          question: "How can you help athletes remember practice content?",
          options: ["Give complex homework", "Review and preview during conclusion", "Only test them", "Assume they'll remember everything"],
          correctAnswer: 1,
          explanation: "Use the conclusion to review what was learned and preview what's coming next to reinforce learning."
        },
        {
          id: 19,
          question: "What should you do with frequently used equipment?",
          options: ["Lock it away securely", "Store it accessibly for quick use", "Make athletes bring their own", "Use it only for special occasions"],
          correctAnswer: 1,
          explanation: "Store frequently used equipment where it's easily accessible to minimize setup time and maximize activity time."
        },
        {
          id: 20,
          question: "What is the final step in practice planning progression?",
          options: ["Isolated skill work", "Full game application", "Only conditioning", "Watching videos"],
          correctAnswer: 1,
          explanation: "The final progression step is applying skills in full game situations, though this may not happen in every practice."
        }
      ]
    },
    {
      id: 6,
      title: "Game Day Management",
      content: `# Module 6: Game Day Management

## Preparing for Game Day
This final module covers everything you need to know about managing games successfully. You'll learn how to prepare athletes, handle game situations, and ensure positive experiences for everyone involved.

## Pre-Game Preparation
Successful game days start with thorough preparation:

**Day before the game:**
- Confirm game time, location, and opponent
- Check weather forecast and plan accordingly
- Ensure all equipment is ready and packed
- Review game rules and any special regulations
- Communicate with parents about logistics

**Game day morning:**
- Send reminder to parents/athletes
- Pack first aid kit and emergency information
- Charge communication devices
- Review your game plan and objectives

## Pre-Game Routines
Establish consistent pre-game routines that help athletes prepare mentally and physically:

**Arrival routine (60 minutes before game):**
- Check in athletes and confirm attendance
- Distribute uniforms/equipment if needed
- Designate team area and parent seating

**Pre-game meeting (45 minutes before):**
- Review game objectives and expectations
- Discuss sportsmanship and behavior
- Assign positions and roles
- Answer questions and address concerns

**Warm-up routine (30 minutes before):**
- Dynamic stretching and movement
- Skill-specific warm-up activities
- Team building exercises
- Final instructions and encouragement

## During the Game
Your role during the game includes coaching, supporting, and ensuring safety:

**Coaching during play:**
- Provide clear, concise instructions
- Make substitutions fairly and strategically
- Manage timeouts effectively
- Stay positive and encouraging

**Player management:**
- Ensure equal participation when possible
- Rotate positions to develop versatility
- Monitor for fatigue or injury
- Manage emotions and behavior

**Officials interaction:**
- Treat officials with respect
- Ask questions politely during appropriate times
- Never argue calls or show disrespect
- Model good sportsmanship for your athletes

## Sideline Behavior and Communication
How you behave on the sideline sets the tone for everyone:

**Positive sideline behaviors:**
- Stay calm and composed
- Focus on teaching moments
- Encourage all athletes
- Celebrate good plays by both teams

**Effective communication:**
- Use predetermined signals for common instructions
- Keep messages simple and positive
- Make eye contact when giving instructions
- Listen to athletes' concerns

**Parent/spectator management:**
- Establish clear behavior expectations
- Designate a team parent if helpful
- Address concerns privately after the game
- Focus on creating positive environment

## Half-Time and Breaks
Use breaks effectively to reinforce learning:

**Half-time routine:**
- Allow hydration and brief rest first
- Provide specific, constructive feedback
- Adjust strategy if needed
- Stay positive and encouraging
- Set objectives for second half

**Time-out management:**
- Have predetermined time-out plans
- Address one specific issue per time-out
- Keep messages brief and clear
- Ensure athletes understand adjustments

## Post-Game Procedures
How you end the game impacts future participation:

**Immediately after game:**
- Thank officials and opposing coaches
- Gather team for brief meeting
- Acknowledge effort and sportsmanship
- Provide initial feedback

**Team meeting (5-10 minutes after game):**
- Review what went well
- Identify areas for improvement
- Emphasize learning over winning
- Thank athletes for their effort
- Announce next practice/game

**Post-game communication:**
- Update parents on schedule changes
- Send positive summary to parents
- Address any concerns individually
- Plan adjustments for next practice

## Handling Different Game Situations
Be prepared for various game scenarios:

**Winning comfortably:**
- Play all athletes equally
- Focus on skill execution rather than score
- Demonstrate good sportsmanship
- Avoid running up score unnecessarily

**Losing significantly:**
- Focus on small improvements
- Maintain positive attitude
- Ensure all athletes participate
- Emphasize effort and learning

**Close/competitive games:**
- Stick to your game plan
- Make strategic adjustments
- Manage time and substitutions wisely
- Keep athletes focused and calm

Remember: The goal is development, not just winning.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "When should you confirm game details with opponents?",
          options: ["During the game", "The day before the game", "After the game", "Never - assume they know"],
          correctAnswer: 1,
          explanation: "Confirm game time, location, and any special details the day before to avoid confusion on game day."
        },
        {
          id: 2,
          question: "What should you do 60 minutes before game time?",
          options: ["Start playing immediately", "Check in athletes and set up team area", "Give long strategic lectures", "Only worry about star players"],
          correctAnswer: 1,
          explanation: "Arrive early to check in athletes, distribute equipment if needed, and establish your team area."
        },
        {
          id: 3,
          question: "How should you interact with game officials?",
          options: ["Argue every call", "Treat them with respect", "Ignore them completely", "Only speak through assistants"],
          correctAnswer: 1,
          explanation: "Always treat officials with respect, ask questions politely when appropriate, and model good sportsmanship."
        },
        {
          id: 4,
          question: "What should be your focus during the game?",
          options: ["Only winning at all costs", "Teaching moments and development", "Yelling constantly", "Only professional strategies"],
          correctAnswer: 1,
          explanation: "Focus on teaching moments, skill development, and positive experiences rather than just the final score."
        },
        {
          id: 5,
          question: "What should you do during half-time?",
          options: ["Only criticize mistakes", "Allow hydration, then give constructive feedback", "Make major strategic overhauls", "Ignore the team completely"],
          correctAnswer: 1,
          explanation: "First allow athletes to hydrate and rest briefly, then provide specific, constructive feedback and adjustments."
        },
        {
          id: 6,
          question: "What should you do immediately after the game?",
          options: ["Leave immediately", "Thank officials and gather your team", "Only talk to star players", "Critique every mistake publicly"],
          correctAnswer: 1,
          explanation: "Thank officials and opposing coaches, then gather your team for a brief post-game meeting."
        },
        {
          id: 7,
          question: "How should you manage substitutions?",
          options: ["Only play your best athletes", "Ensure equal participation when possible", "Let athletes decide when to play", "Make random substitutions"],
          correctAnswer: 1,
          explanation: "When possible and appropriate, ensure all athletes get meaningful participation time."
        },
        {
          id: 8,
          question: "What should your sideline behavior demonstrate?",
          options: ["Anger and frustration", "Calmness and positive coaching", "Only focus on winning", "Ignoring your athletes"],
          correctAnswer: 1,
          explanation: "Model calm, positive behavior on the sideline that focuses on teaching and encouragement."
        },
        {
          id: 9,
          question: "What should you emphasize when losing significantly?",
          options: ["How bad the team is", "Small improvements and continued effort", "Blaming officials", "Giving up on the game"],
          correctAnswer: 1,
          explanation: "Focus on small improvements, maintaining positive effort, and learning opportunities rather than the score."
        },
        {
          id: 10,
          question: "How should you use time-outs?",
          options: ["Save them all for the end", "Address one specific issue per time-out", "Give long complicated instructions", "Use them only when losing"],
          correctAnswer: 1,
          explanation: "Address one specific issue or adjustment per time-out to keep messages clear and actionable."
        },
        {
          id: 11,
          question: "What should you pack on game day morning?",
          options: ["Only game equipment", "First aid kit and emergency information", "Nothing - hope for the best", "Only personal items"],
          correctAnswer: 1,
          explanation: "Always pack your first aid kit and emergency contact information along with game equipment."
        },
        {
          id: 12,
          question: "What should pre-game warm-up include?",
          options: ["Only sitting and resting", "Dynamic stretching and skill activities", "Maximum intensity immediately", "Only strategy discussion"],
          correctAnswer: 1,
          explanation: "Include dynamic stretching, sport-specific skill warm-up, and team building exercises."
        },
        {
          id: 13,
          question: "How should you communicate with athletes during games?",
          options: ["Complex strategic terms", "Clear, concise instructions", "Only written notes", "Through parents only"],
          correctAnswer: 1,
          explanation: "Use clear, concise instructions that athletes can understand and execute quickly during game action."
        },
        {
          id: 14,
          question: "What should you do when winning comfortably?",
          options: ["Run up the score", "Play all athletes and focus on execution", "Mock the opposing team", "Stop coaching entirely"],
          correctAnswer: 1,
          explanation: "Ensure all athletes participate, focus on proper skill execution, and demonstrate good sportsmanship."
        },
        {
          id: 15,
          question: "How long should the post-game team meeting last?",
          options: ["30-45 minutes", "5-10 minutes", "1-2 hours", "Skip it entirely"],
          correctAnswer: 1,
          explanation: "Keep post-game meetings brief (5-10 minutes) to review key points while attention is still focused."
        },
        {
          id: 16,
          question: "What should you establish for parent behavior?",
          options: ["No expectations", "Clear behavior expectations", "Let parents do whatever they want", "Only focus on athlete behavior"],
          correctAnswer: 1,
          explanation: "Establish and communicate clear behavior expectations for parents to ensure positive sideline environment."
        },
        {
          id: 17,
          question: "What should you review in pre-game meeting?",
          options: ["Only winning strategies", "Objectives, sportsmanship, positions", "Professional athlete salaries", "Next season's schedule"],
          correctAnswer: 1,
          explanation: "Review game objectives, sportsmanship expectations, position assignments, and answer any questions."
        },
        {
          id: 18,
          question: "How should you handle close, competitive games?",
          options: ["Panic and yell more", "Stick to your game plan and stay calm", "Make constant major changes", "Ignore the score completely"],
          correctAnswer: 1,
          explanation: "Stay calm, stick to your prepared game plan, and make strategic adjustments while keeping athletes focused."
        },
        {
          id: 19,
          question: "What should you send to parents after the game?",
          options: ["Only criticism", "Positive summary and schedule updates", "Detailed performance statistics", "Comparisons to other athletes"],
          correctAnswer: 1,
          explanation: "Send a positive summary highlighting team efforts and any schedule updates or reminders."
        },
        {
          id: 20,
          question: "What is the ultimate goal of game day?",
          options: ["Winning at all costs", "Athlete development and positive experience", "Impress college scouts", "Entertainment for parents"],
          correctAnswer: 1,
          explanation: "The ultimate goal is athlete development, skill application, and creating positive sporting experiences."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "youth-sports-coaching-final-exam",
    title: "Youth Sports Coaching Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Youth Sports Coaching Certificate course.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three key elements of a positive youth sports environment?",
        options: ["Winning, skills, discipline", "Safety, fun, learning", "Training, competition, awards", "Rules, uniforms, equipment"],
        correctAnswer: 1,
        explanation: "Module 1: A positive environment prioritizes safety, ensures sports are fun, and focuses on continuous learning."
      },
      {
        id: 2,
        question: "What is the first step in the four-step teaching method for skills?",
        options: ["Explain the skill", "Let them practice", "Demonstrate the skill", "Apply in game situation"],
        correctAnswer: 2,
        explanation: "Module 2: Always demonstrate the complete skill first so athletes have a visual model."
      },
      {
        id: 3,
        question: "What should you do if you suspect an athlete has a concussion?",
        options: ["Let them continue playing", "Remove them from play immediately", "Wait and see if symptoms improve", "Give them water and continue"],
        correctAnswer: 1,
        explanation: "Module 3: Immediate removal from play is essential for suspected concussions."
      },
      {
        id: 4,
        question: "What is the typical attention span for children aged 6-8?",
        options: ["30+ minutes", "15-20 minutes", "8-12 minutes", "45-60 minutes"],
        correctAnswer: 2,
        explanation: "Module 4: Young children have short attention spans requiring frequent activity changes."
      },
      {
        id: 5,
        question: "What percentage of practice time should be actual activity?",
        options: ["30-40%", "At least 70%", "10-20%", "100% - no breaks"],
        correctAnswer: 1,
        explanation: "Module 5: Aim for high activity time to maximize learning and minimize waiting."
      },
      {
        id: 6,
        question: "When should you confirm game details with opponents?",
        options: ["During the game", "The day before the game", "After the game", "Never - assume they know"],
        correctAnswer: 1,
        explanation: "Module 6: Confirm all details the day before to avoid game day confusion."
      },
      {
        id: 7,
        question: "Which age group can begin to understand simple team strategies?",
        options: ["Ages 6-8", "Ages 9-12", "Ages 13-16", "Only adults"],
        correctAnswer: 1,
        explanation: "Module 4: Children aged 9-12 can understand and apply simple strategies."
      },
      {
        id: 8,
        question: "What should be checked before every practice for safety?",
        options: ["Only the scoreboard", "Equipment, facility, weather, athletes", "Social media", "Professional game schedules"],
        correctAnswer: 1,
        explanation: "Module 3: Comprehensive safety checks prevent most common injuries."
      },
      {
        id: 9,
        question: "What makes a drill 'purposeful'?",
        options: ["It takes a long time", "It relates to game situations", "It uses expensive equipment", "It's very complicated"],
        correctAnswer: 1,
        explanation: "Module 2: Purposeful drills directly relate to actual game situations athletes will encounter."
      },
      {
        id: 10,
        question: "What should your coaching philosophy emphasize beyond sports skills?",
        options: ["Only winning records", "Developing professional athletes", "Confidence and teamwork", "Beating rival teams"],
        correctAnswer: 2,
        explanation: "Module 1: Emphasize life skills development like confidence, resilience, and teamwork."
      },
      {
        id: 11,
        question: "How long should a proper warm-up last before activity?",
        options: ["1-2 minutes", "10-15 minutes", "30-45 minutes", "No warm-up needed"],
        correctAnswer: 1,
        explanation: "Module 3: 10-15 minutes of dynamic warm-up properly prepares the body."
      },
      {
        id: 12,
        question: "What should practice objectives be?",
        options: ["Vague and general", "Specific, achievable, measurable, relevant", "Only about winning", "Whatever parents request"],
        correctAnswer: 1,
        explanation: "Module 5: SMART objectives guide effective practice planning."
      },
      {
        id: 13,
        question: "How should you interact with game officials?",
        options: ["Argue every call", "Treat them with respect", "Ignore them completely", "Only speak through assistants"],
        correctAnswer: 1,
        explanation: "Module 6: Respectful interaction with officials models good sportsmanship."
      },
      {
        id: 14,
        question: "What motivates children aged 6-8?",
        options: ["College scholarships", "External rewards and praise", "Professional contracts", "Complex strategies"],
        correctAnswer: 1,
        explanation: "Module 4: Young children respond well to external rewards and positive reinforcement."
      },
      {
        id: 15,
        question: "How many errors should you correct at one time?",
        options: ["As many as possible", "Only major errors", "One error at a time", "Wait for parents to correct errors"],
        correctAnswer: 2,
        explanation: "Module 2: Correct one error at a time to avoid overwhelming young athletes."
      },
      {
        id: 16,
        question: "What should you do at the first sign of lightning?",
        options: ["Continue playing", "Clear the field immediately", "Wait for thunder", "Only move if it gets closer"],
        correctAnswer: 1,
        explanation: "Module 3: Immediate clearance is essential for lightning safety."
      },
      {
        id: 17,
        question: "What is the basic structure of an effective practice?",
        options: ["Only games", "Introduction, Warm-up, Skill Development, Game Application, Cool-down", "Just conditioning", "Whatever athletes want"],
        correctAnswer: 1,
        explanation: "Module 5: This structure provides balanced skill development and application."
      },
      {
        id: 18,
        question: "What should you do immediately after the game?",
        options: ["Leave immediately", "Thank officials and gather your team", "Only talk to star players", "Critique publicly"],
        correctAnswer: 1,
        explanation: "Module 6: Proper post-game procedures reinforce learning and sportsmanship."
      },
      {
        id: 19,
        question: "How do children aged 6-8 learn best?",
        options: ["Through lectures", "Through play and imagination", "Through written instructions", "Through watching professionals"],
        correctAnswer: 1,
        explanation: "Module 4: Play-based learning matches their developmental stage."
      },
      {
        id: 20,
        question: "What should cool-down include?",
        options: ["Maximum effort", "Lower intensity, stretching, review", "Only sitting", "More competition"],
        correctAnswer: 1,
        explanation: "Module 5: Proper cool-down aids recovery and reinforces learning."
      },
      {
        id: 21,
        question: "What is the first sign of dehydration?",
        options: ["Dark yellow urine", "Increased energy", "Better performance", "No thirst"],
        correctAnswer: 0,
        explanation: "Module 3: Dark urine indicates inadequate hydration."
      },
      {
        id: 22,
        question: "How should you communicate with adolescents?",
        options: ["Like small children", "Respectfully and collaboratively", "Only through punishment", "Ignore them"],
        correctAnswer: 1,
        explanation: "Module 4: Respectful, explanatory communication works best with adolescents."
      },
      {
        id: 23,
        question: "What strategy increases activity time during practice?",
        options: ["Long lectures", "Using multiple stations", "Only individual work", "Eliminating breaks"],
        correctAnswer: 1,
        explanation: "Module 5: Stations allow more simultaneous activity."
      },
      {
        id: 24,
        question: "What should you emphasize when losing significantly?",
        options: ["How bad the team is", "Small improvements and effort", "Blaming officials", "Giving up"],
        correctAnswer: 1,
        explanation: "Module 6: Focus on continuous improvement rather than score."
      },
      {
        id: 25,
        question: "What are the two main injury categories?",
        options: ["Big and small", "Acute and overuse", "Visible and invisible", "Treatable and untreatable"],
        correctAnswer: 1,
        explanation: "Module 3: Understanding injury types helps prevention."
      },
      {
        id: 26,
        question: "What practice structure works for ages 9-12?",
        options: ["Same as professionals", "15-20 minute segments", "No structure", "Only free play"],
        correctAnswer: 1,
        explanation: "Module 4: Age-appropriate segments match attention spans."
      },
      {
        id: 27,
        question: "How should you handle equipment before practice?",
        options: ["Figure it out during", "Have everything ready", "Use only what athletes bring", "Borrow from others"],
        correctAnswer: 1,
        explanation: "Module 5: Preparation maximizes activity time."
      },
      {
        id: 28,
        question: "What should you do during half-time?",
        options: ["Only criticize", "Hydrate then constructive feedback", "Major overhauls", "Ignore team"],
        correctAnswer: 1,
        explanation: "Module 6: Balanced half-time routine maintains focus."
      },
      {
        id: 29,
        question: "What affects adolescent coordination?",
        options: ["Only lack of practice", "Rapid physical growth", "Not listening", "Poor equipment"],
        correctAnswer: 1,
        explanation: "Module 4: Growth spurts temporarily affect coordination."
      },
      {
        id: 30,
        question: "What is included in emergency plans?",
        options: ["Only first aid kit", "Kit location, contacts, facility info", "Game strategies", "Team roster"],
        correctAnswer: 1,
        explanation: "Module 3: Comprehensive plans ensure proper emergency response."
      },
      {
        id: 31,
        question: "What is the skill development progression?",
        options: ["Complex to simple", "Isolated, partner, group, game", "Only games", "Only individual work"],
        correctAnswer: 1,
        explanation: "Module 2: Logical progression builds confidence."
      },
      {
        id: 32,
        question: "How should you manage substitutions?",
        options: ["Only best athletes", "Equal participation when possible", "Athletes decide", "Randomly"],
        correctAnswer: 1,
        explanation: "Module 6: Fair participation develops all athletes."
      },
      {
        id: 33,
        question: "What should pre-game warm-up include?",
        options: ["Only resting", "Dynamic stretching and skills", "Maximum intensity", "Only strategy"],
        correctAnswer: 1,
        explanation: "Module 6: Proper warm-up prevents injuries."
      },
      {
        id: 34,
        question: "What do parents of young children expect?",
        options: ["College scholarships", "Fun, safety, basic skills", "Professional training", "Winning above all"],
        correctAnswer: 1,
        explanation: "Module 4: Understanding parent expectations improves communication."
      },
      {
        id: 35,
        question: "How long should static stretches be held?",
        options: ["5-10 seconds", "20-30 seconds", "1-2 minutes", "Until it hurts"],
        correctAnswer: 1,
        explanation: "Module 3: Proper duration improves flexibility."
      },
      {
        id: 36,
        question: "What should you establish for parent behavior?",
        options: ["No expectations", "Clear behavior expectations", "Whatever they want", "Only athlete behavior"],
        correctAnswer: 1,
        explanation: "Module 6: Clear expectations create positive environment."
      },
      {
        id: 37,
        question: "What comes after skill demonstration?",
        options: ["Immediate competition", "Break down and explain", "Different skill", "Long break"],
        correctAnswer: 1,
        explanation: "Module 2: Explanation follows demonstration."
      },
      {
        id: 38,
        question: "How should you handle close games?",
        options: ["Panic and yell", "Stick to plan and stay calm", "Constant changes", "Ignore score"],
        correctAnswer: 1,
        explanation: "Module 6: Calm leadership during pressure situations."
      },
      {
        id: 39,
        question: "What should you balance for adolescents?",
        options: ["Only training", "Training with recovery", "Only games", "Social time only"],
        correctAnswer: 1,
        explanation: "Module 4: Balanced approach supports development."
      },
      {
        id: 40,
        question: "What is the ultimate game day goal?",
        options: ["Winning at all costs", "Athlete development and positive experience", "Impress scouts", "Parent entertainment"],
        correctAnswer: 1,
        explanation: "Module 6: Development and positive experiences are primary goals."
      }
    ]
  }
};

export default youthSportsCoachingCertificate;
