export const kinesiologyCertificate = {
  // COURSE METADATA
  id: "kinesiology-certificate",
  title: "Kinesiology (Certificate)",
  description: "Learn the fundamentals of human movement, exercise science, and body mechanics in an easy-to-understand format. Perfect for fitness enthusiasts and aspiring health professionals.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏃‍♂️",
  badge: "Certificate",
  
  // MODULES STRUCTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Human Movement",
      content: `# Module 1: Introduction to Human Movement

## Understanding How Your Body Moves
Welcome to the fascinating world of kinesiology! In this first module, we'll explore the basic principles of how your body moves and functions.

### What is Kinesiology?
Kinesiology is the study of human movement. It looks at how muscles, bones, and joints work together to create motion. Think of it as understanding the body's own engineering system.

### Basic Body Planes and Directions
To understand movement, we use special terms to describe directions:

1. **Sagittal Plane** - Divides the body into left and right halves. Movements in this plane include forward and backward motions like walking or bending your elbow.

2. **Frontal Plane** - Divides the body into front and back halves. Movements here include side-to-side motions like jumping jacks or leaning sideways.

3. **Transverse Plane** - Divides the body into top and bottom halves. Movements include rotation, like turning your head or twisting your torso.

### Types of Body Movements
Your body can move in several basic ways:

- **Flexion** - Decreasing the angle between two body parts, like bending your elbow or knee.
- **Extension** - Increasing the angle between two body parts, like straightening your arm or leg.
- **Abduction** - Moving a body part away from the midline of your body, like lifting your arm out to the side.
- **Adduction** - Moving a body part toward the midline of your body, like lowering your arm back to your side.
- **Rotation** - Turning a body part around its long axis, like turning your head left or right.

### Major Bones and Their Functions
Your skeleton provides structure and support. Key bones include:

1. **Skull** - Protects your brain
2. **Spine (Vertebral Column)** - Supports your body and protects your spinal cord
3. **Ribs** - Protect your heart and lungs
4. **Pelvis** - Connects your spine to your legs
5. **Femur (Thigh Bone)** - Longest and strongest bone in your body
6. **Tibia and Fibula** - The two bones in your lower leg

### Joint Types and Their Movements
Joints are where two bones meet. Different joints allow different movements:

- **Hinge Joints** - Like your elbow and knee, they allow movement in one direction only (like a door hinge).
- **Ball-and-Socket Joints** - Like your shoulder and hip, they allow movement in many directions.
- **Pivot Joints** - Like in your neck, they allow rotation.
- **Gliding Joints** - Like in your wrist and ankle, they allow bones to slide past each other.

### Basic Muscle Functions
Muscles create movement by contracting (shortening) and relaxing (lengthening):

1. **Agonist (Prime Mover)** - The main muscle creating a movement.
2. **Antagonist** - The muscle that opposes the agonist's action.
3. **Synergist** - Muscles that help the agonist work more efficiently.
4. **Stabilizer** - Muscles that hold body parts stable while other parts move.

## Applying What You've Learned
Understanding these basic concepts helps you move better, exercise smarter, and prevent injuries. Remember that all movement starts with your brain sending signals to your muscles, which then pull on your bones at your joints. This simple sequence creates all the amazing movements your body can perform!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is kinesiology?",
          options: [
            "The study of human movement",
            "The study of brain function",
            "The study of nutrition",
            "The study of sleep patterns"
          ],
          correctAnswer: 0,
          explanation: "Kinesiology is specifically the study of human movement and how the body creates motion."
        },
        {
          id: 2,
          question: "Which plane divides the body into left and right halves?",
          options: [
            "Sagittal Plane",
            "Frontal Plane",
            "Transverse Plane",
            "Horizontal Plane"
          ],
          correctAnswer: 0,
          explanation: "The sagittal plane divides the body into left and right halves."
        },
        {
          id: 3,
          question: "What movement decreases the angle between two body parts?",
          options: [
            "Flexion",
            "Extension",
            "Abduction",
            "Rotation"
          ],
          correctAnswer: 0,
          explanation: "Flexion decreases the angle between body parts, like bending your elbow."
        },
        {
          id: 4,
          question: "Which joint allows movement in many directions like a shoulder?",
          options: [
            "Ball-and-Socket Joint",
            "Hinge Joint",
            "Pivot Joint",
            "Gliding Joint"
          ],
          correctAnswer: 0,
          explanation: "Ball-and-socket joints like shoulders allow movement in many directions."
        },
        {
          id: 5,
          question: "What is the main muscle creating a movement called?",
          options: [
            "Agonist",
            "Antagonist",
            "Synergist",
            "Stabilizer"
          ],
          correctAnswer: 0,
          explanation: "The agonist (or prime mover) is the main muscle creating a movement."
        },
        {
          id: 6,
          question: "Which plane involves rotational movements?",
          options: [
            "Transverse Plane",
            "Sagittal Plane",
            "Frontal Plane",
            "Vertical Plane"
          ],
          correctAnswer: 0,
          explanation: "The transverse plane involves rotational movements like twisting."
        },
        {
          id: 7,
          question: "What movement increases the angle between body parts?",
          options: [
            "Extension",
            "Flexion",
            "Abduction",
            "Adduction"
          ],
          correctAnswer: 0,
          explanation: "Extension increases the angle, like straightening your arm."
        },
        {
          id: 8,
          question: "Which bone is the longest in the human body?",
          options: [
            "Femur",
            "Tibia",
            "Humerus",
            "Pelvis"
          ],
          correctAnswer: 0,
          explanation: "The femur (thigh bone) is the longest and strongest bone in the body."
        },
        {
          id: 9,
          question: "What type of joint is your elbow?",
          options: [
            "Hinge Joint",
            "Ball-and-Socket Joint",
            "Pivot Joint",
            "Gliding Joint"
          ],
          correctAnswer: 0,
          explanation: "The elbow is a hinge joint that allows movement in one direction."
        },
        {
          id: 10,
          question: "What movement brings a body part toward the midline?",
          options: [
            "Adduction",
            "Abduction",
            "Flexion",
            "Extension"
          ],
          correctAnswer: 0,
          explanation: "Adduction moves body parts toward the midline of the body."
        },
        {
          id: 11,
          question: "Which plane involves side-to-side movements?",
          options: [
            "Frontal Plane",
            "Sagittal Plane",
            "Transverse Plane",
            "Diagonal Plane"
          ],
          correctAnswer: 0,
          explanation: "The frontal plane involves side-to-side movements like jumping jacks."
        },
        {
          id: 12,
          question: "What protects your heart and lungs?",
          options: [
            "Ribs",
            "Skull",
            "Pelvis",
            "Spine"
          ],
          correctAnswer: 0,
          explanation: "The rib cage protects your heart and lungs."
        },
        {
          id: 13,
          question: "What is the muscle that opposes the agonist called?",
          options: [
            "Antagonist",
            "Synergist",
            "Stabilizer",
            "Helper"
          ],
          correctAnswer: 0,
          explanation: "The antagonist muscle opposes the action of the agonist muscle."
        },
        {
          id: 14,
          question: "What movement moves a body part away from the midline?",
          options: [
            "Abduction",
            "Adduction",
            "Rotation",
            "Flexion"
          ],
          correctAnswer: 0,
          explanation: "Abduction moves body parts away from the midline."
        },
        {
          id: 15,
          question: "What type of joint allows rotation like in your neck?",
          options: [
            "Pivot Joint",
            "Hinge Joint",
            "Ball-and-Socket Joint",
            "Gliding Joint"
          ],
          correctAnswer: 0,
          explanation: "Pivot joints allow rotation, like turning your head."
        },
        {
          id: 16,
          question: "What supports your body and protects your spinal cord?",
          options: [
            "Spine",
            "Ribs",
            "Pelvis",
            "Skull"
          ],
          correctAnswer: 0,
          explanation: "The spine (vertebral column) supports the body and protects the spinal cord."
        },
        {
          id: 17,
          question: "What are muscles that help the agonist work better called?",
          options: [
            "Synergists",
            "Antagonists",
            "Stabilizers",
            "Primary muscles"
          ],
          correctAnswer: 0,
          explanation: "Synergist muscles help the agonist work more efficiently."
        },
        {
          id: 18,
          question: "What is the turning movement around a long axis called?",
          options: [
            "Rotation",
            "Flexion",
            "Extension",
            "Abduction"
          ],
          correctAnswer: 0,
          explanation: "Rotation is turning a body part around its long axis."
        },
        {
          id: 19,
          question: "What connects your spine to your legs?",
          options: [
            "Pelvis",
            "Femur",
            "Ribs",
            "Skull"
          ],
          correctAnswer: 0,
          explanation: "The pelvis connects your spine to your legs."
        },
        {
          id: 20,
          question: "What holds body parts stable while other parts move?",
          options: [
            "Stabilizer muscles",
            "Agonist muscles",
            "Antagonist muscles",
            "Synergist muscles"
          ],
          correctAnswer: 0,
          explanation: "Stabilizer muscles hold body parts stable during movement."
        }
      ]
    },
    {
      id: 2,
      title: "Major Muscle Groups and Functions",
      content: `# Module 2: Major Muscle Groups and Functions

## Understanding Your Body's Muscles
Now that you understand basic movement, let's explore the major muscle groups that make movement possible.

### Upper Body Muscles
These muscles control movements of your arms, shoulders, and upper back:

1. **Pectoralis Major (Chest)** - Moves your arms across your body and helps with pushing movements.

2. **Deltoids (Shoulders)** - Lift your arms to the front, side, and back. They give your shoulders their rounded shape.

3. **Biceps Brachii (Front of Upper Arm)** - Bend your elbow and rotate your forearm.

4. **Triceps Brachii (Back of Upper Arm)** - Straighten your elbow. This is the muscle that extends your arm.

5. **Latissimus Dorsi (Back)** - Pull your arms down and back, like in a pulling motion.

6. **Trapezius (Upper Back and Neck)** - Moves your shoulder blades and supports your neck.

### Core Muscles
These muscles stabilize your spine and support your torso:

- **Rectus Abdominis (Front Abs)** - Flexes your spine forward (like in a crunch).

- **Obliques (Side Abs)** - Help you bend sideways and rotate your torso.

- **Transverse Abdominis (Deep Abs)** - Acts like a natural weight belt, stabilizing your spine.

- **Erector Spinae (Back Muscles)** - Keep your spine straight and help you stand up tall.

### Lower Body Muscles
These powerful muscles move your hips, legs, and feet:

1. **Gluteus Maximus (Buttocks)** - Extends your hip (moves your leg backward) and helps you stand up from sitting.

2. **Quadriceps (Front of Thigh)** - Straighten your knee and help flex your hip.

3. **Hamstrings (Back of Thigh)** - Bend your knee and extend your hip.

4. **Calves (Back of Lower Leg)** - Point your toes downward and help you push off when walking or running.

5. **Hip Flexors (Front of Hip)** - Lift your knee toward your chest.

### Muscle Functions in Daily Activities
Understanding how muscles work in everyday movements:

- **Walking** - Uses calves to push off, quadriceps to straighten knees, and glutes to extend hips.

- **Sitting to Standing** - Primarily uses quadriceps and glutes.

- **Lifting Objects** - Uses back muscles, legs, and core for stabilization.

- **Reaching Overhead** - Uses shoulder muscles and stabilizers.

### Muscle Pairs and Their Relationships
Most muscles work in pairs:

1. **Biceps and Triceps** - When biceps contract to bend your elbow, triceps relax. When triceps contract to straighten your elbow, biceps relax.

2. **Quadriceps and Hamstrings** - Work together to control knee movement.

3. **Chest and Back** - Work in opposition for pushing and pulling movements.

### Muscle Attachment Points
Muscles attach to bones at two points:

- **Origin** - The attachment point that doesn't move much during contraction.

- **Insertion** - The attachment point that moves during contraction.

For example, your biceps origin is at your shoulder, and its insertion is on your forearm bone. When it contracts, your forearm moves toward your shoulder.

### Muscle Fiber Types
Your muscles contain different types of fibers:

- **Slow-Twitch Fibers** - Good for endurance activities like long-distance running.

- **Fast-Twitch Fibers** - Good for power activities like jumping or sprinting.

Most people have a mix of both types, which determines their natural abilities in different sports.

## Practical Application
Knowing your major muscle groups helps you exercise effectively and understand how your body works during daily activities. When you lift a grocery bag, you're using your biceps. When you walk up stairs, you're using your quadriceps and glutes. Every movement involves specific muscles working together in coordination.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which muscle is on the front of your upper arm?",
          options: [
            "Biceps",
            "Triceps",
            "Deltoids",
            "Pectoralis"
          ],
          correctAnswer: 0,
          explanation: "The biceps brachii is on the front of your upper arm."
        },
        {
          id: 2,
          question: "What muscle extends your elbow?",
          options: [
            "Triceps",
            "Biceps",
            "Deltoids",
            "Pectoralis"
          ],
          correctAnswer: 0,
          explanation: "The triceps brachii on the back of your arm extends (straightens) your elbow."
        },
        {
          id: 3,
          question: "Which muscle gives your shoulders their rounded shape?",
          options: [
            "Deltoids",
            "Pectoralis",
            "Latissimus Dorsi",
            "Trapezius"
          ],
          correctAnswer: 0,
          explanation: "The deltoid muscles give shoulders their rounded appearance."
        },
        {
          id: 4,
          question: "What is your largest buttock muscle?",
          options: [
            "Gluteus Maximus",
            "Quadriceps",
            "Hamstrings",
            "Calves"
          ],
          correctAnswer: 0,
          explanation: "The gluteus maximus is the largest muscle in your buttocks."
        },
        {
          id: 5,
          question: "Which muscles straighten your knee?",
          options: [
            "Quadriceps",
            "Hamstrings",
            "Calves",
            "Hip Flexors"
          ],
          correctAnswer: 0,
          explanation: "The quadriceps on the front of your thigh straighten your knee."
        },
        {
          id: 6,
          question: "What muscle moves your arms across your body?",
          options: [
            "Pectoralis Major",
            "Latissimus Dorsi",
            "Deltoids",
            "Trapezius"
          ],
          correctAnswer: 0,
          explanation: "The pectoralis major (chest muscle) moves arms across the body."
        },
        {
          id: 7,
          question: "Which muscle bends your knee?",
          options: [
            "Hamstrings",
            "Quadriceps",
            "Glutes",
            "Calves"
          ],
          correctAnswer: 0,
          explanation: "The hamstrings on the back of your thigh bend your knee."
        },
        {
          id: 8,
          question: "What acts like a natural weight belt in your core?",
          options: [
            "Transverse Abdominis",
            "Rectus Abdominis",
            "Obliques",
            "Erector Spinae"
          ],
          correctAnswer: 0,
          explanation: "The transverse abdominis acts like a natural weight belt, stabilizing your spine."
        },
        {
          id: 9,
          question: "Which back muscle helps with pulling movements?",
          options: [
            "Latissimus Dorsi",
            "Trapezius",
            "Erector Spinae",
            "Deltoids"
          ],
          correctAnswer: 0,
          explanation: "The latissimus dorsi helps pull arms down and back."
        },
        {
          id: 10,
          question: "What helps you push off when walking?",
          options: [
            "Calves",
            "Quadriceps",
            "Hamstrings",
            "Hip Flexors"
          ],
          correctAnswer: 0,
          explanation: "Your calf muscles help you push off the ground when walking or running."
        },
        {
          id: 11,
          question: "Which muscle flexes your spine forward?",
          options: [
            "Rectus Abdominis",
            "Obliques",
            "Transverse Abdominis",
            "Erector Spinae"
          ],
          correctAnswer: 0,
          explanation: "The rectus abdominis (front abs) flexes your spine forward."
        },
        {
          id: 12,
          question: "What lifts your knee toward your chest?",
          options: [
            "Hip Flexors",
            "Glutes",
            "Quadriceps",
            "Hamstrings"
          ],
          correctAnswer: 0,
          explanation: "Hip flexors lift your knee toward your chest."
        },
        {
          id: 13,
          question: "Which muscle moves your shoulder blades?",
          options: [
            "Trapezius",
            "Latissimus Dorsi",
            "Deltoids",
            "Pectoralis"
          ],
          correctAnswer: 0,
          explanation: "The trapezius moves your shoulder blades and supports your neck."
        },
        {
          id: 14,
          question: "What keeps your spine straight?",
          options: [
            "Erector Spinae",
            "Rectus Abdominis",
            "Obliques",
            "Transverse Abdominis"
          ],
          correctAnswer: 0,
          explanation: "The erector spinae muscles keep your spine straight."
        },
        {
          id: 15,
          question: "Which muscles help you bend sideways?",
          options: [
            "Obliques",
            "Rectus Abdominis",
            "Transverse Abdominis",
            "Erector Spinae"
          ],
          correctAnswer: 0,
          explanation: "The oblique muscles help you bend sideways and rotate your torso."
        },
        {
          id: 16,
          question: "What muscle extends your hip?",
          options: [
            "Gluteus Maximus",
            "Hip Flexors",
            "Quadriceps",
            "Hamstrings"
          ],
          correctAnswer: 0,
          explanation: "The gluteus maximus extends your hip (moves leg backward)."
        },
        {
          id: 17,
          question: "Which are good for endurance activities?",
          options: [
            "Slow-Twitch Fibers",
            "Fast-Twitch Fibers",
            "Medium Fibers",
            "Quick Fibers"
          ],
          correctAnswer: 0,
          explanation: "Slow-twitch muscle fibers are good for endurance activities."
        },
        {
          id: 18,
          question: "What is the moving attachment point of a muscle called?",
          options: [
            "Insertion",
            "Origin",
            "Attachment",
            "Connection"
          ],
          correctAnswer: 0,
          explanation: "The insertion is the attachment point that moves during muscle contraction."
        },
        {
          id: 19,
          question: "Which muscles work with biceps to control elbow movement?",
          options: [
            "Triceps",
            "Deltoids",
            "Pectoralis",
            "Forearm muscles"
          ],
          correctAnswer: 0,
          explanation: "Biceps and triceps work together to control elbow movement."
        },
        {
          id: 20,
          question: "What are good for power activities like jumping?",
          options: [
            "Fast-Twitch Fibers",
            "Slow-Twitch Fibers",
            "Mixed Fibers",
            "Endurance Fibers"
          ],
          correctAnswer: 0,
          explanation: "Fast-twitch muscle fibers are good for power activities like jumping."
        }
      ]
    },
    {
      id: 3,
      title: "Basic Exercise Principles",
      content: `# Module 3: Basic Exercise Principles

## How Exercise Works in Your Body
Understanding exercise principles helps you work out effectively and safely. This module covers the fundamentals of how exercise affects your body.

### The Overload Principle
To improve fitness, you must challenge your body beyond what it's used to:

1. **Gradual Increase** - Slowly increase exercise intensity, duration, or frequency.
2. **Listen to Your Body** - Push yourself but avoid pain or extreme discomfort.
3. **Rest and Recovery** - Your body improves during rest, not during exercise.

### Specificity Principle
Your body adapts specifically to the type of exercise you do:

- **Strength Training** - Builds muscle strength
- **Cardiovascular Training** - Improves heart and lung endurance
- **Flexibility Training** - Improves range of motion
- **Balance Training** - Improves stability and coordination

### Progressive Overload
How to safely increase exercise demands:

1. **Increase Weight** - Lift slightly heavier weights over time.
2. **Increase Repetitions** - Do more repetitions with the same weight.
3. **Increase Sets** - Do more sets of the same exercise.
4. **Decrease Rest Time** - Shorten rest periods between exercises.
5. **Increase Frequency** - Exercise more often each week.

### FITT Principle
This simple formula helps plan exercise:

- **Frequency** - How often you exercise (e.g., 3 times per week)
- **Intensity** - How hard you exercise (e.g., moderate or vigorous)
- **Time** - How long you exercise (e.g., 30 minutes per session)
- **Type** - What kind of exercise you do (e.g., walking, strength training)

### Warm-Up and Cool-Down Importance
Never skip these important parts of your workout:

**Warm-Up (5-10 minutes):**
- Increases blood flow to muscles
- Raises body temperature
- Prepares joints for movement
- Reduces injury risk

**Cool-Down (5-10 minutes):**
- Gradually lowers heart rate
- Helps remove waste products from muscles
- Reduces muscle soreness
- Improves flexibility

### Breathing During Exercise
Proper breathing helps performance:

- **Strength Training** - Exhale during the hardest part of the movement.
- **Cardio Exercise** - Find a natural breathing rhythm that matches your pace.
- **Never Hold Your Breath** - This can raise blood pressure dangerously.

### Exercise Form and Technique
Good form prevents injuries and makes exercise more effective:

1. **Maintain Neutral Spine** - Keep your back in its natural curve.
2. **Control Movements** - Move smoothly, not jerky.
3. **Full Range of Motion** - Use your joints through their complete movement.
4. **Engage Core Muscles** - Keep your abdominal muscles slightly tightened.

### Rest and Recovery
Your body needs time to adapt and improve:

- **Between Sets** - 30-90 seconds rest for most exercises.
- **Between Workouts** - 24-48 hours rest for the same muscle groups.
- **Sleep** - 7-9 hours per night for optimal recovery.
- **Active Recovery** - Light activity on rest days promotes blood flow.

### Listening to Your Body
Learn to recognize different signals:

- **Good Pain** - Muscle burn during exercise, mild soreness afterward.
- **Bad Pain** - Sharp pain, joint pain, or pain that doesn't go away.
- **Fatigue** - Normal tiredness from exercise.
- **Exhaustion** - Extreme fatigue that affects daily activities.

### Exercise Adaptations
What happens when you exercise regularly:

1. **Muscular Adaptations** - Muscles become stronger and more efficient.
2. **Cardiovascular Adaptations** - Heart becomes stronger, lungs work better.
3. **Bone Adaptations** - Bones become denser and stronger.
4. **Metabolic Adaptations** - Body becomes better at using energy.

## Practical Application
These principles work together to help you create effective, safe exercise routines. Remember that consistency is more important than perfection. Regular exercise using these principles will help you improve your fitness safely over time.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What principle says you must challenge your body to improve?",
          options: [
            "Overload Principle",
            "Specificity Principle",
            "Recovery Principle",
            "Balance Principle"
          ],
          correctAnswer: 0,
          explanation: "The overload principle states you must challenge your body beyond its normal demands."
        },
        {
          id: 2,
          question: "What does the FITT principle stand for?",
          options: [
            "Frequency, Intensity, Time, Type",
            "Flexibility, Intensity, Time, Technique",
            "Frequency, Interval, Time, Type",
            "Force, Intensity, Time, Type"
          ],
          correctAnswer: 0,
          explanation: "FITT stands for Frequency, Intensity, Time, and Type of exercise."
        },
        {
          id: 3,
          question: "How long should a typical warm-up last?",
          options: [
            "5-10 minutes",
            "1-2 minutes",
            "15-20 minutes",
            "Only if you feel cold"
          ],
          correctAnswer: 0,
          explanation: "A proper warm-up should last 5-10 minutes."
        },
        {
          id: 4,
          question: "What should you exhale during in strength training?",
          options: [
            "The hardest part of the movement",
            "The easiest part",
            "When holding weight",
            "Never during exercise"
          ],
          correctAnswer: 0,
          explanation: "Exhale during the hardest part (concentric phase) of strength exercises."
        },
        {
          id: 5,
          question: "What principle says your body adapts to specific exercise types?",
          options: [
            "Specificity Principle",
            "Overload Principle",
            "Progressive Principle",
            "Adaptation Principle"
          ],
          correctAnswer: 0,
          explanation: "The specificity principle says adaptations are specific to the type of exercise."
        },
        {
          id: 6,
          question: "How can you apply progressive overload?",
          options: [
            "Increase weight or repetitions",
            "Exercise less frequently",
            "Skip warm-ups",
            "Only do easy exercises"
          ],
          correctAnswer: 0,
          explanation: "Progressive overload can be achieved by increasing weight, reps, or sets."
        },
        {
          id: 7,
          question: "What should you never do with your breath during exercise?",
          options: [
            "Hold your breath",
            "Breathe normally",
            "Exhale during effort",
            "Inhale deeply"
          ],
          correctAnswer: 0,
          explanation: "Never hold your breath during exercise as it can raise blood pressure."
        },
        {
          id: 8,
          question: "How much rest between workouts for the same muscles?",
          options: [
            "24-48 hours",
            "2-3 hours",
            "One week",
            "No rest needed"
          ],
          correctAnswer: 0,
          explanation: "Allow 24-48 hours rest for the same muscle groups between workouts."
        },
        {
          id: 9,
          question: "What does a warm-up increase to muscles?",
          options: [
            "Blood flow",
            "Muscle size",
            "Fatigue",
            "Pain"
          ],
          correctAnswer: 0,
          explanation: "Warm-ups increase blood flow to muscles, preparing them for exercise."
        },
        {
          id: 10,
          question: "What kind of pain is normal after exercise?",
          options: [
            "Mild muscle soreness",
            "Sharp joint pain",
            "Constant pain",
            "Pain that worsens"
          ],
          correctAnswer: 0,
          explanation: "Mild muscle soreness (DOMS) is normal, but sharp or joint pain is not."
        },
        {
          id: 11,
          question: "What improves during rest, not during exercise?",
          options: [
            "Your body's adaptations",
            "Your exercise ability",
            "Your breathing",
            "Your heart rate"
          ],
          correctAnswer: 0,
          explanation: "Your body adapts and improves during rest periods after exercise."
        },
        {
          id: 12,
          question: "What should you maintain during exercise?",
          options: [
            "Neutral spine position",
            "Hunched back",
            "Locked joints",
            "Held breath"
          ],
          correctAnswer: 0,
          explanation: "Maintain a neutral spine position to protect your back during exercise."
        },
        {
          id: 13,
          question: "What does cardiovascular training specifically improve?",
          options: [
            "Heart and lung endurance",
            "Muscle strength",
            "Flexibility",
            "Balance"
          ],
          correctAnswer: 0,
          explanation: "Cardiovascular training specifically improves heart and lung endurance."
        },
        {
          id: 14,
          question: "What is active recovery?",
          options: [
            "Light activity on rest days",
            "No activity at all",
            "Hard exercise every day",
            "Only stretching"
          ],
          correctAnswer: 0,
          explanation: "Active recovery involves light activity that promotes blood flow on rest days."
        },
        {
          id: 15,
          question: "How many hours of sleep for optimal recovery?",
          options: [
            "7-9 hours",
            "4-5 hours",
            "10-12 hours",
            "Whenever you can"
          ],
          correctAnswer: 0,
          explanation: "7-9 hours of sleep per night supports optimal exercise recovery."
        },
        {
          id: 16,
          question: "What should you move through completely during exercises?",
          options: [
            "Full range of motion",
            "Only half the movement",
            "Quick jerky motions",
            "Whatever feels easy"
          ],
          correctAnswer: 0,
          explanation: "Use full range of motion for best results and joint health."
        },
        {
          id: 17,
          question: "What gradually lowers heart rate after exercise?",
          options: [
            "Cool-down",
            "Warm-up",
            "Sitting immediately",
            "Drinking water"
          ],
          correctAnswer: 0,
          explanation: "A cool-down gradually lowers heart rate after exercise."
        },
        {
          id: 18,
          question: "What becomes denser with regular exercise?",
          options: [
            "Bones",
            "Muscle fat",
            "Joint fluid",
            "Skin"
          ],
          correctAnswer: 0,
          explanation: "Bones become denser and stronger with regular weight-bearing exercise."
        },
        {
          id: 19,
          question: "What is more important than perfection in exercise?",
          options: [
            "Consistency",
            "Maximum weight",
            "Perfect form always",
            "Daily workouts"
          ],
          correctAnswer: 0,
          explanation: "Consistency in exercise is more important than perfection."
        },
        {
          id: 20,
          question: "What should you keep slightly tightened during exercise?",
          options: [
            "Core muscles",
            "Fists",
            "Jaw",
            "Shoulders"
          ],
          correctAnswer: 0,
          explanation: "Keep core muscles slightly tightened to support your spine during exercise."
        }
      ]
    },
    {
      id: 4,
      title: "Posture and Body Alignment",
      content: `# Module 4: Posture and Body Alignment

## Standing and Moving with Proper Alignment
Good posture reduces strain on your body and helps prevent pain. This module teaches you how to maintain proper alignment in daily activities.

### What is Good Posture?
Posture is how you hold your body while standing, sitting, or moving. Good posture:

1. **Minimizes Strain** - Places least stress on muscles and joints.
2. **Promotes Efficiency** - Allows muscles to work optimally.
3. **Supports Breathing** - Allows full expansion of lungs.
4. **Projects Confidence** - Makes you look and feel more confident.

### Standing Posture Basics
How to stand with good alignment:

- **Feet** - Shoulder-width apart, weight evenly distributed.
- **Knees** - Slightly bent, not locked.
- **Hips** - Level, not tilted forward or back.
- **Spine** - In its natural curves (not perfectly straight).
- **Shoulders** - Relaxed, not hunched forward.
- **Head** - Balanced directly over shoulders, chin parallel to floor.

### Sitting Posture Essentials
Proper sitting reduces back and neck strain:

1. **Chair Support** - Use a chair that supports your lower back.
2. **Feet Flat** - Feet should rest flat on floor or footrest.
3. **Hips and Knees** - Hips slightly higher than knees.
4. **Back Support** - Use backrest or a small pillow behind lower back.
5. **Screen Position** - Computer screen at eye level, about arm's length away.

### Common Posture Problems
Recognizing and correcting these issues:

**Forward Head Position:**
- Problem: Head juts forward from shoulders
- Correction: Tuck chin slightly, align ears over shoulders

**Rounded Shoulders:**
- Problem: Shoulders roll forward
- Correction: Squeeze shoulder blades together gently

**Anterior Pelvic Tilt:**
- Problem: Lower back arches excessively
- Correction: Engage core muscles, tilt pelvis slightly

**Posterior Pelvic Tilt:**
- Problem: Lower back flattens
- Correction: Maintain natural spinal curve

### Posture During Movement
Maintaining alignment while moving:

- **Walking** - Stand tall, swing arms naturally, take comfortable strides.
- **Lifting** - Bend knees, keep back straight, hold object close to body.
- **Reaching** - Move whole body close to object rather than over-reaching.
- **Carrying** - Distribute weight evenly between both sides of body.

### Posture and Breathing Connection
How posture affects your breathing:

1. **Good Posture** - Allows diaphragm to move freely for deep breathing.
2. **Poor Posture** - Compresses lungs, leading to shallow breathing.
3. **Rib Cage Position** - Proper alignment allows full rib cage expansion.
4. **Diaphragm Function** - Upright posture supports optimal diaphragm movement.

### Posture Assessment Tips
How to check your own posture:

1. **Wall Test** - Stand with back against wall. Heels, buttocks, shoulders, and head should touch wall.
2. **Mirror Check** - Look at yourself sideways in mirror. Ear, shoulder, hip, knee, and ankle should align.
3. **Photograph Analysis** - Take side-view photos to assess alignment.
4. **Professional Assessment** - Consider seeing a physical therapist for detailed assessment.

### Posture Throughout the Day
Maintaining good posture in different situations:

- **Driving** - Sit close enough to reach pedals comfortably, use lumbar support.
- **Sleeping** - Use supportive pillow, consider sleeping on back or side rather than stomach.
- **Using Phone** - Hold phone at eye level rather than looking down.
- **Working at Desk** - Take regular breaks to stand and stretch.

### Posture Improvement Exercises
Simple exercises to improve alignment:

1. **Chin Tucks** - Gently tuck chin without tilting head.
2. **Shoulder Blade Squeezes** - Squeeze shoulder blades together gently.
3. **Pelvic Tilts** - Rock pelvis forward and back to find neutral position.
4. **Wall Angels** - Slide arms up and down wall while maintaining contact.

### Benefits of Good Posture
Why posture matters for your health:

- **Reduces Pain** - Less strain on muscles and joints.
- **Improves Breathing** - Better oxygen intake.
- **Enhances Digestion** - Organs have proper space to function.
- **Increases Energy** - Muscles work more efficiently.
- **Boosts Confidence** - Appear and feel more self-assured.

## Practical Application
Good posture is a habit, not a position. Focus on checking your alignment throughout the day rather than holding one position constantly. Remember that the best posture is your next posture - regular movement and position changes are healthier than staying in any one position for too long.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is posture?",
          options: [
            "How you hold your body while standing, sitting, or moving",
            "Only how you stand",
            "Your exercise form",
            "Your walking speed"
          ],
          correctAnswer: 0,
          explanation: "Posture refers to how you hold your body in any position or during movement."
        },
        {
          id: 2,
          question: "How should feet be positioned in good standing posture?",
          options: [
            "Shoulder-width apart, weight evenly distributed",
            "Together tightly",
            "One in front of the other",
            "Whatever feels comfortable"
          ],
          correctAnswer: 0,
          explanation: "Feet should be shoulder-width apart with weight evenly distributed."
        },
        {
          id: 3,
          question: "Where should computer screen be positioned?",
          options: [
            "At eye level, arm's length away",
            "Below eye level",
            "Very close to face",
            "Above eye level"
          ],
          correctAnswer: 0,
          explanation: "Computer screen should be at eye level and about an arm's length away."
        },
        {
          id: 4,
          question: "What is forward head position?",
          options: [
            "Head juts forward from shoulders",
            "Head tilted back",
            "Head turned sideways",
            "Head perfectly aligned"
          ],
          correctAnswer: 0,
          explanation: "Forward head position is when the head juts forward from the shoulders."
        },
        {
          id: 5,
          question: "How should you lift objects?",
          options: [
            "Bend knees, keep back straight",
            "Bend at waist only",
            "Lift with arms only",
            "Twist while lifting"
          ],
          correctAnswer: 0,
          explanation: "Bend your knees and keep your back straight when lifting objects."
        },
        {
          id: 6,
          question: "What does good posture allow for breathing?",
          options: [
            "Diaphragm to move freely",
            "Shallow breathing only",
            "Holding breath easier",
            "Faster breathing"
          ],
          correctAnswer: 0,
          explanation: "Good posture allows the diaphragm to move freely for deep breathing."
        },
        {
          id: 7,
          question: "What is the wall test for posture?",
          options: [
            "Stand with heels, buttocks, shoulders, and head touching wall",
            "Lean against wall sideways",
            "Touch toes while against wall",
            "Squat against wall"
          ],
          correctAnswer: 0,
          explanation: "The wall test checks if heels, buttocks, shoulders, and head touch wall."
        },
        {
          id: 8,
          question: "What should be higher when sitting?",
          options: [
            "Hips slightly higher than knees",
            "Knees higher than hips",
            "They should be level",
            "It doesn't matter"
          ],
          correctAnswer: 0,
          explanation: "Hips should be slightly higher than knees when sitting."
        },
        {
          id: 9,
          question: "What are rounded shoulders?",
          options: [
            "Shoulders roll forward",
            "Shoulders pulled back too far",
            "One shoulder higher",
            "Shoulders perfectly aligned"
          ],
          correctAnswer: 0,
          explanation: "Rounded shoulders occur when shoulders roll forward."
        },
        {
          id: 10,
          question: "How should you hold your phone for better posture?",
          options: [
            "At eye level",
            "Looking down at it",
            "Very close to face",
            "With one hand only"
          ],
          correctAnswer: 0,
          explanation: "Hold your phone at eye level to avoid forward head position."
        },
        {
          id: 11,
          question: "What is anterior pelvic tilt?",
          options: [
            "Lower back arches excessively",
            "Lower back flattens",
            "Hips are level",
            "Pelvis rotates sideways"
          ],
          correctAnswer: 0,
          explanation: "Anterior pelvic tilt is excessive arching of the lower back."
        },
        {
          id: 12,
          question: "What exercise helps with forward head position?",
          options: [
            "Chin tucks",
            "Shoulder shrugs",
            "Neck circles",
            "Head rolls"
          ],
          correctAnswer: 0,
          explanation: "Chin tucks help correct forward head position."
        },
        {
          id: 13,
          question: "What should align in side-view posture check?",
          options: [
            "Ear, shoulder, hip, knee, ankle",
            "Only head and shoulders",
            "Hips and knees only",
            "Shoulders and hips only"
          ],
          correctAnswer: 0,
          explanation: "Ear, shoulder, hip, knee, and ankle should align in good posture."
        },
        {
          id: 14,
          question: "What is the best sleeping position for posture?",
          options: [
            "Back or side",
            "Stomach",
            "Curled in ball",
            "Whatever feels comfortable"
          ],
          correctAnswer: 0,
          explanation: "Sleeping on back or side is generally better for posture than stomach sleeping."
        },
        {
          id: 15,
          question: "What exercise helps with rounded shoulders?",
          options: [
            "Shoulder blade squeezes",
            "Chin tucks",
            "Pelvic tilts",
            "Neck stretches"
          ],
          correctAnswer: 0,
          explanation: "Shoulder blade squeezes help correct rounded shoulders."
        },
        {
          id: 16,
          question: "What does good posture reduce?",
          options: [
            "Strain on muscles and joints",
            "Energy levels",
            "Breathing capacity",
            "Confidence"
          ],
          correctAnswer: 0,
          explanation: "Good posture reduces strain on muscles and joints."
        },
        {
          id: 17,
          question: "How should knees be in standing posture?",
          options: [
            "Slightly bent, not locked",
            "Completely straight",
            "Very bent",
            "Turned inward"
          ],
          correctAnswer: 0,
          explanation: "Keep knees slightly bent, not locked, in standing posture."
        },
        {
          id: 18,
          question: "What is posterior pelvic tilt?",
          options: [
            "Lower back flattens",
            "Lower back arches",
            "Hips tilt sideways",
            "Normal pelvic position"
          ],
          correctAnswer: 0,
          explanation: "Posterior pelvic tilt is flattening of the lower back."
        },
        {
          id: 19,
          question: "What is the best posture?",
          options: [
            "Your next posture (regular movement)",
            "One perfect position",
            "Military attention",
            "Complete relaxation"
          ],
          correctAnswer: 0,
          explanation: "The best posture involves regular movement and position changes."
        },
        {
          id: 20,
          question: "What should you use behind your lower back when sitting?",
          options: [
            "Backrest or small pillow",
            "Nothing",
            "Very thick cushion",
            "Heating pad"
          ],
          correctAnswer: 0,
          explanation: "Use a backrest or small pillow to support your lower back when sitting."
        }
      ]
    },
    {
      id: 5,
      title: "Common Movement Patterns",
      content: `# Module 5: Common Movement Patterns

## Fundamental Movements Your Body Performs
Understanding basic movement patterns helps you exercise effectively and move safely in daily life. This module covers the essential ways your body moves.

### Squat Pattern
The squat is a fundamental movement for sitting and standing:

**Key Points:**
- Feet shoulder-width apart
- Bend knees and hips simultaneously
- Keep chest up, back straight
- Lower until thighs are parallel to floor (or as comfortable)

**Daily Applications:**
- Sitting in and rising from chairs
- Picking up objects from floor
- Using toilet
- Gardening or playing with children

### Hinge Pattern
The hinge involves bending at your hips while keeping your back straight:

**Key Points:**
- Push hips back first
- Keep back flat, not rounded
- Bend knees slightly
- Maintain neutral spine

**Daily Applications:**
- Picking up objects properly
- Making beds
- Loading dishwasher
- Tying shoes

### Lunge Pattern
The lunge involves stepping forward or backward with one leg:

**Key Points:**
- Step forward with one foot
- Lower until both knees are bent about 90 degrees
- Keep front knee over ankle
- Maintain upright torso

**Daily Applications:**
- Walking upstairs
- Getting out of cars
- Reaching for low objects
- Sports activities

### Push Pattern
Pushing movements involve moving objects away from your body:

**Key Points:**
- Engage core muscles
- Use chest, shoulder, and arm muscles
- Maintain stable base
- Control the movement

**Daily Applications:**
- Pushing doors open
- Moving furniture
- Pushing shopping cart
- Getting up from floor

### Pull Pattern
Pulling movements involve bringing objects toward your body:

**Key Points:**
- Squeeze shoulder blades together
- Use back and arm muscles
- Keep elbows close to body
- Maintain good posture

**Daily Applications:**
- Opening doors
- Pulling drawers open
- Rowing motions
- Climbing

### Carry Pattern
Carrying involves moving objects while walking or standing:

**Key Points:**
- Hold object close to body
- Distribute weight evenly
- Maintain good posture
- Engage core muscles

**Daily Applications:**
- Carrying groceries
- Holding children
- Carrying luggage
- Moving boxes

### Rotation Pattern
Rotation involves turning your torso while keeping hips stable:

**Key Points:**
- Rotate from torso, not just arms
- Keep hips facing forward
- Move within comfortable range
- Control the movement

**Daily Applications:**
- Looking over shoulder while driving
- Reaching for seatbelt
- Swinging in sports
- Turning to talk to someone

### Gait Pattern (Walking)
Walking is your most common movement pattern:

**Key Points:**
- Heel strikes ground first
- Roll through foot to toes
- Swing arms naturally
- Maintain upright posture

**Daily Applications:**
- All walking activities
- Hiking
- Moving around home
- Exercise walking

### Movement Pattern Integration
How patterns work together in daily life:

**Example: Picking Up Grocery Bag**
1. Squat to lower yourself
2. Hinge slightly to reach bag
3. Pull bag toward you
4. Carry bag while standing
5. Walk to car

**Example: Making Bed**
1. Lunge to reach corners
2. Pull sheets tight
3. Push pillows into place
4. Carry bedding if needed

### Movement Pattern Quality
Focus on quality over quantity:

1. **Control** - Move smoothly, not jerky
2. **Alignment** - Maintain proper joint positions
3. **Range** - Use full, comfortable range of motion
4. **Breathing** - Breathe naturally throughout movement
5. **Stability** - Keep core engaged for support

### Common Pattern Errors
What to watch out for:

- **Squat Errors** - Knees collapsing inward, heels lifting
- **Hinge Errors** - Rounding back, bending knees too much
- **Lunge Errors** - Front knee going past toes, leaning forward
- **Push/Pull Errors** - Using momentum instead of muscle control

### Pattern Progression
Start simple and progress:

1. **Body Weight Only** - Master pattern without added weight
2. **Light Resistance** - Add light weights or resistance bands
3. **Increased Load** - Gradually increase weight or difficulty
4. **Complex Variations** - Combine patterns or add instability

## Practical Application
These movement patterns form the foundation of all your daily activities. By practicing them with good form, you'll move more efficiently and reduce injury risk. Remember that quality movement patterns become automatic with practice, making your daily activities easier and safer.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What movement pattern is used for sitting and standing?",
          options: [
            "Squat",
            "Hinge",
            "Lunge",
            "Push"
          ],
          correctAnswer: 0,
          explanation: "The squat pattern is fundamental for sitting and standing movements."
        },
        {
          id: 2,
          question: "What does the hinge pattern involve?",
          options: [
            "Bending at hips while keeping back straight",
            "Bending knees deeply",
            "Rounding the back completely",
            "Only arm movement"
          ],
          correctAnswer: 0,
          explanation: "The hinge involves bending at hips while maintaining a straight back."
        },
        {
          id: 3,
          question: "What pattern involves stepping forward with one leg?",
          options: [
            "Lunge",
            "Squat",
            "Hinge",
            "Carry"
          ],
          correctAnswer: 0,
          explanation: "The lunge pattern involves stepping forward or backward with one leg."
        },
        {
          id: 4,
          question: "What movement involves moving objects away from your body?",
          options: [
            "Push",
            "Pull",
            "Carry",
            "Rotate"
          ],
          correctAnswer: 0,
          explanation: "Pushing movements move objects away from your body."
        },
        {
          id: 5,
          question: "What should you do first in a proper squat?",
          options: [
            "Bend knees and hips simultaneously",
            "Only bend knees",
            "Only bend at waist",
            "Jump first"
          ],
          correctAnswer: 0,
          explanation: "In a squat, bend knees and hips simultaneously while keeping chest up."
        },
        {
          id: 6,
          question: "What pattern is used for opening doors?",
          options: [
            "Pull",
            "Push",
            "Squat",
            "Lunge"
          ],
          correctAnswer: 0,
          explanation: "Opening doors typically uses the pull movement pattern."
        },
        {
          id: 7,
          question: "What should you keep close to body when carrying?",
          options: [
            "The object being carried",
            "Your elbows",
            "Your knees",
            "Your head"
          ],
          correctAnswer: 0,
          explanation: "Hold objects close to your body when carrying to reduce strain."
        },
        {
          id: 8,
          question: "What pattern involves turning your torso?",
          options: [
            "Rotation",
            "Squat",
            "Hinge",
            "Lunge"
          ],
          correctAnswer: 0,
          explanation: "Rotation involves turning your torso while keeping hips stable."
        },
        {
          id: 9,
          question: "What is the most common movement pattern?",
          options: [
            "Walking (Gait)",
            "Squatting",
            "Pushing",
            "Pulling"
          ],
          correctAnswer: 0,
          explanation: "Walking (gait pattern) is your most frequently used movement."
        },
        {
          id: 10,
          question: "What should you push back first in a hinge?",
          options: [
            "Hips",
            "Shoulders",
            "Head",
            "Knees"
          ],
          correctAnswer: 0,
          explanation: "In a hinge, push your hips back first while keeping back straight."
        },
        {
          id: 11,
          question: "What should front knee do in a lunge?",
          options: [
            "Stay over ankle",
            "Go far past toes",
            "Turn inward",
            "Lock straight"
          ],
          correctAnswer: 0,
          explanation: "In a lunge, keep front knee over ankle, not past toes."
        },
        {
          id: 12,
          question: "What should you squeeze in pulling movements?",
          options: [
            "Shoulder blades together",
            "Fists tightly",
            "Glute muscles",
            "Jaw muscles"
          ],
          correctAnswer: 0,
          explanation: "Squeeze shoulder blades together during pulling movements."
        },
        {
          id: 13,
          question: "What touches ground first in walking?",
          options: [
            "Heel",
            "Toes",
            "Whole foot",
            "Ball of foot"
          ],
          correctAnswer: 0,
          explanation: "In normal walking, your heel touches ground first."
        },
        {
          id: 14,
          question: "What should you maintain during all movement patterns?",
          options: [
            "Good posture and alignment",
            "Maximum speed",
            "Held breath",
            "Complete relaxation"
          ],
          correctAnswer: 0,
          explanation: "Maintain good posture and alignment during all movement patterns."
        },
        {
          id: 15,
          question: "What pattern is used for pushing doors open?",
          options: [
            "Push",
            "Pull",
            "Squat",
            "Hinge"
          ],
          correctAnswer: 0,
          explanation: "Pushing doors open uses the push movement pattern."
        },
        {
          id: 16,
          question: "What should you do before adding weight to patterns?",
          options: [
            "Master pattern with body weight only",
            "Use maximum weight immediately",
            "Only do patterns quickly",
            "Skip pattern practice"
          ],
          correctAnswer: 0,
          explanation: "Master movement patterns with body weight before adding resistance."
        },
        {
          id: 17,
          question: "What pattern combines with others in daily activities?",
          options: [
            "All patterns work together",
            "Only squat pattern",
            "Only push pattern",
            "Only carry pattern"
          ],
          correctAnswer: 0,
          explanation: "Movement patterns typically work together in daily activities."
        },
        {
          id: 18,
          question: "What is a common squat error?",
          options: [
            "Knees collapsing inward",
            "Keeping chest up",
            "Bending hips and knees",
            "Moving slowly"
          ],
          correctAnswer: 0,
          explanation: "Knees collapsing inward is a common squat error to avoid."
        },
        {
          id: 19,
          question: "What should you rotate from in rotation pattern?",
          options: [
            "Torso, not just arms",
            "Only arms",
            "Only hips",
            "Only neck"
          ],
          correctAnswer: 0,
          explanation: "Rotate from your torso, not just moving your arms."
        },
        {
          id: 20,
          question: "What becomes automatic with practice?",
          options: [
            "Quality movement patterns",
            "Only exercise movements",
            "Sports skills only",
            "Nothing becomes automatic"
          ],
          correctAnswer: 0,
          explanation: "Quality movement patterns become automatic with consistent practice."
        }
      ]
    },
    {
      id: 6,
      title: "Basic Injury Prevention",
      content: `# Module 6: Basic Injury Prevention

## Keeping Your Body Safe During Movement
Preventing injuries is easier than treating them. This module covers basic principles for staying safe during exercise and daily activities.

### Common Causes of Movement Injuries
Understanding why injuries happen helps prevent them:

1. **Overuse** - Doing too much, too soon, too often
2. **Poor Form** - Using incorrect movement patterns
3. **Insufficient Warm-Up** - Starting intense activity cold
4. **Fatigue** - Continuing when overly tired
5. **Environmental Factors** - Slippery surfaces, poor equipment

### Warm-Up Importance Revisited
A proper warm-up is your first defense against injury:

**Dynamic Warm-Up Examples:**
- Arm circles (forward and backward)
- Leg swings (front-to-back and side-to-side)
- Torso twists
- Ankle circles
- Light walking or jogging in place

**Warm-Up Duration:** 5-10 minutes until you feel warm and loose

### Cool-Down Benefits
Cooling down helps recovery and prevents stiffness:

**Static Stretching Examples (hold 15-30 seconds each):**
- Quadriceps stretch (standing, pulling heel toward buttock)
- Hamstring stretch (sitting, reaching toward toes)
- Calf stretch (leaning against wall)
- Chest stretch (clasping hands behind back)
- Shoulder stretch (pulling arm across chest)

### Listening to Pain Signals
Learn to distinguish different types of pain:

**Good Pain (Usually Safe to Continue):**
- Muscle burn during exercise
- Mild muscle soreness 24-48 hours after exercise
- Feeling of muscle fatigue

**Bad Pain (Stop Immediately):**
- Sharp, stabbing pain
- Joint pain (especially knee, shoulder, elbow)
- Pain that doesn't go away with rest
- Pain that worsens during activity
- Numbness or tingling

### Progressive Loading Principle
How to increase activity safely:

1. **10% Rule** - Increase activity level by no more than 10% per week
2. **Alternate Intensity** - Mix hard and easy days
3. **Cross-Train** - Do different types of exercise to avoid overuse
4. **Scheduled Rest** - Plan regular rest days each week

### Proper Equipment and Environment
Setting yourself up for safety:

- **Footwear** - Wear appropriate shoes for your activity
- **Clothing** - Dress for weather and movement freedom
- **Surfaces** - Exercise on even, non-slip surfaces
- **Equipment** - Use well-maintained equipment
- **Hydration** - Drink water before, during, and after activity

### Recovery Strategies
Help your body repair and strengthen:

1. **Sleep** - 7-9 hours per night for optimal recovery
2. **Nutrition** - Eat balanced meals with protein for muscle repair
3. **Hydration** - Drink enough water throughout day
4. **Active Recovery** - Light movement on rest days
5. **Self-Massage** - Gentle foam rolling or massage

### Common Injury Prevention Tips
Specific advice for different activities:

**Walking/Running:**
- Start on flat surfaces
- Increase distance gradually
- Replace shoes regularly
- Vary your routes

**Strength Training:**
- Use proper form before increasing weight
- Control movements, don't use momentum
- Breathe consistently
- Use spotters for heavy lifts

**Sports Activities:**
- Learn proper techniques
- Use appropriate protective gear
- Condition specifically for your sport
- Warm up sport-specific movements

### Early Warning Signs
Recognizing problems before they become injuries:

- **Persistent Soreness** - Lasting more than 72 hours
- **Decreased Performance** - Can't do what you could previously
- **Morning Stiffness** - Lasting more than 30 minutes
- **Swelling** - In joints or muscles
- **Reduced Range of Motion** - Can't move as freely as before

### When to Seek Professional Help
Know when to consult experts:

- **Persistent Pain** - Lasting more than 2 weeks
- **Severe Pain** - Preventing normal activities
- **Joint Instability** - Feeling like joint might give way
- **Visible Deformity** - Obvious changes in appearance
- **Loss of Function** - Can't perform normal movements

### Injury Prevention Mindset
Developing safe habits:

1. **Patience** - Progress gradually, not rapidly
2. **Consistency** - Regular moderate activity beats occasional intense sessions
3. **Awareness** - Pay attention to how your body feels
4. **Adaptability** - Modify activities when needed
5. **Balance** - Include different types of movement

## Practical Application
Injury prevention is about smart choices every day. Start slowly, listen to your body, and make adjustments as needed. Remember that taking care of small issues early prevents bigger problems later. Your body is designed to move, and with proper care, you can enjoy movement safely for years to come.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a common cause of movement injuries?",
          options: [
            "Overuse (doing too much too soon)",
            "Exercising regularly",
            "Drinking water",
            "Warming up properly"
          ],
          correctAnswer: 0,
          explanation: "Overuse is a common cause of injuries from doing too much too soon."
        },
        {
          id: 2,
          question: "How long should a warm-up typically last?",
          options: [
            "5-10 minutes",
            "1-2 minutes",
            "20-30 minutes",
            "Only if cold outside"
          ],
          correctAnswer: 0,
          explanation: "A proper warm-up should last 5-10 minutes."
        },
        {
          id: 3,
          question: "What type of pain should make you stop immediately?",
          options: [
            "Sharp, stabbing pain",
            "Mild muscle soreness",
            "Muscle burn during exercise",
            "Feeling tired"
          ],
          correctAnswer: 0,
          explanation: "Sharp, stabbing pain is a warning sign to stop immediately."
        },
        {
          id: 4,
          question: "What is the 10% rule?",
          options: [
            "Increase activity by no more than 10% per week",
            "Exercise 10% of your day",
            "Use 10% of maximum weight",
            "Rest 10 minutes per hour"
          ],
          correctAnswer: 0,
          explanation: "The 10% rule says to increase activity level by no more than 10% weekly."
        },
        {
          id: 5,
          question: "What should you wear for injury prevention?",
          options: [
            "Appropriate shoes for your activity",
            "Any comfortable shoes",
            "Barefoot whenever possible",
            "Fashionable footwear"
          ],
          correctAnswer: 0,
          explanation: "Wear appropriate shoes for your specific activity to prevent injuries."
        },
        {
          id: 6,
          question: "How much sleep aids recovery?",
          options: [
            "7-9 hours per night",
            "4-5 hours per night",
            "10-12 hours per night",
            "Whenever you can"
          ],
          correctAnswer: 0,
          explanation: "7-9 hours of sleep per night supports optimal recovery."
        },
        {
          id: 7,
          question: "What is active recovery?",
          options: [
            "Light movement on rest days",
            "Complete rest with no movement",
            "Hard exercise every day",
            "Only stretching"
          ],
          correctAnswer: 0,
          explanation: "Active recovery involves light movement on rest days."
        },
        {
          id: 8,
          question: "What should you do before increasing weight in strength training?",
          options: [
            "Use proper form first",
            "Always use maximum weight",
            "Only train with light weights",
            "Skip form practice"
          ],
          correctAnswer: 0,
          explanation: "Master proper form before increasing weight in strength training."
        },
        {
          id: 9,
          question: "What is a dynamic warm-up?",
          options: [
            "Moving stretches like arm circles",
            "Holding stretches for long periods",
            "Sitting stretches only",
            "No movement stretches"
          ],
          correctAnswer: 0,
          explanation: "Dynamic warm-ups involve moving stretches to prepare the body."
        },
        {
          id: 10,
          question: "When should you seek professional help for pain?",
          options: [
            "When it persists more than 2 weeks",
            "Only if severe from start",
            "Never, it will go away",
            "After 6 months"
          ],
          correctAnswer: 0,
          explanation: "Seek help for pain persisting more than 2 weeks."
        },
        {
          id: 11,
          question: "What helps prevent overuse injuries?",
          options: [
            "Cross-training with different activities",
            "Doing the same thing daily",
            "Only resting when injured",
            "Ignoring minor pains"
          ],
          correctAnswer: 0,
          explanation: "Cross-training with different activities helps prevent overuse injuries."
        },
        {
          id: 12,
          question: "What should you drink for hydration?",
          options: [
            "Water before, during, and after activity",
            "Only sports drinks",
            "Only when thirsty",
            "Soda for energy"
          ],
          correctAnswer: 0,
          explanation: "Drink water before, during, and after physical activity."
        },
        {
          id: 13,
          question: "What is a warning sign of potential injury?",
          options: [
            "Morning stiffness lasting over 30 minutes",
            "Feeling energized",
            "Mild post-exercise soreness",
            "Good sleep"
          ],
          correctAnswer: 0,
          explanation: "Morning stiffness lasting over 30 minutes can be an early warning sign."
        },
        {
          id: 14,
          question: "What should you include in a cool-down?",
          options: [
            "Static stretching",
            "Maximum effort exercises",
            "Competitive activities",
            "No specific activities"
          ],
          correctAnswer: 0,
          explanation: "Include static stretching in your cool-down routine."
        },
        {
          id: 15,
          question: "What mindset helps prevent injuries?",
          options: [
            "Patience and gradual progress",
            "Pushing through all pain",
            "Rapid improvement goals",
            "Ignoring body signals"
          ],
          correctAnswer: 0,
          explanation: "Patience and gradual progress help prevent injuries."
        },
        {
          id: 16,
          question: "What should you replace regularly for walking/running?",
          options: [
            "Shoes",
            "Socks only",
            "Clothing style",
            "Walking route"
          ],
          correctAnswer: 0,
          explanation: "Replace walking/running shoes regularly to maintain support."
        },
        {
          id: 17,
          question: "What helps muscle repair after exercise?",
          options: [
            "Balanced nutrition with protein",
            "Only carbohydrates",
            "Skipping meals",
            "Eating only after exercise"
          ],
          correctAnswer: 0,
          explanation: "Balanced nutrition with protein supports muscle repair."
        },
        {
          id: 18,
          question: "What should you do on hard exercise days?",
          options: [
            "Follow with easier days",
            "Exercise harder next day",
            "Take complete week off",
            "Only do hard days"
          ],
          correctAnswer: 0,
          explanation: "Alternate hard exercise days with easier days for recovery."
        },
        {
          id: 19,
          question: "What is self-massage for recovery?",
          options: [
            "Gentle foam rolling",
            "Deep tissue massage only",
            "Ignoring sore areas",
            "Only professional massage"
          ],
          correctAnswer: 0,
          explanation: "Gentle foam rolling is a form of self-massage for recovery."
        },
        {
          id: 20,
          question: "What prevents bigger problems later?",
          options: [
            "Taking care of small issues early",
            "Ignoring all discomfort",
            "Only treating major injuries",
            "Exercising through pain"
          ],
          correctAnswer: 0,
          explanation: "Addressing small issues early prevents them from becoming bigger problems."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Kinesiology Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need 70% (28 correct answers) to pass.",
    passingScore: 28,
    questions: [
      {
        id: 1,
        module: 1,
        question: "What is kinesiology?",
        options: [
          "The study of human movement",
          "The study of brain function",
          "The study of nutrition",
          "The study of sleep patterns"
        ],
        correctAnswer: 0,
        explanation: "Kinesiology is specifically the study of human movement."
      },
      {
        id: 2,
        module: 2,
        question: "Which muscle is on the front of your upper arm?",
        options: [
          "Biceps",
          "Triceps",
          "Deltoids",
          "Pectoralis"
        ],
        correctAnswer: 0,
        explanation: "The biceps brachii is on the front of your upper arm."
      },
      {
        id: 3,
        module: 3,
        question: "What principle says you must challenge your body to improve?",
        options: [
          "Overload Principle",
          "Specificity Principle",
          "Recovery Principle",
          "Balance Principle"
        ],
        correctAnswer: 0,
        explanation: "The overload principle states you must challenge your body."
      },
      {
        id: 4,
        module: 4,
        question: "What is posture?",
        options: [
          "How you hold your body while standing, sitting, or moving",
          "Only how you stand",
          "Your exercise form",
          "Your walking speed"
        ],
        correctAnswer: 0,
        explanation: "Posture refers to how you hold your body in any position."
      },
      {
        id: 5,
        module: 5,
        question: "What movement pattern is used for sitting and standing?",
        options: [
          "Squat",
          "Hinge",
          "Lunge",
          "Push"
        ],
        correctAnswer: 0,
        explanation: "The squat pattern is fundamental for sitting and standing."
      },
      {
        id: 6,
        module: 6,
        question: "What is a common cause of movement injuries?",
        options: [
          "Overuse (doing too much too soon)",
          "Exercising regularly",
          "Drinking water",
          "Warming up properly"
        ],
        correctAnswer: 0,
        explanation: "Overuse is a common cause of injuries."
      },
      {
        id: 7,
        module: 1,
        question: "Which plane divides the body into left and right halves?",
        options: [
          "Sagittal Plane",
          "Frontal Plane",
          "Transverse Plane",
          "Horizontal Plane"
        ],
        correctAnswer: 0,
        explanation: "The sagittal plane divides left and right."
      },
      {
        id: 8,
        module: 2,
        question: "What muscle extends your elbow?",
        options: [
          "Triceps",
          "Biceps",
          "Deltoids",
          "Pectoralis"
        ],
        correctAnswer: 0,
        explanation: "Triceps extend (straighten) your elbow."
      },
      {
        id: 9,
        module: 3,
        question: "What does the FITT principle stand for?",
        options: [
          "Frequency, Intensity, Time, Type",
          "Flexibility, Intensity, Time, Technique",
          "Frequency, Interval, Time, Type",
          "Force, Intensity, Time, Type"
        ],
        correctAnswer: 0,
        explanation: "FITT stands for Frequency, Intensity, Time, Type."
      },
      {
        id: 10,
        module: 4,
        question: "How should feet be positioned in good standing posture?",
        options: [
          "Shoulder-width apart, weight evenly distributed",
          "Together tightly",
          "One in front of the other",
          "Whatever feels comfortable"
        ],
        correctAnswer: 0,
        explanation: "Feet shoulder-width apart with even weight distribution."
      },
      {
        id: 11,
        module: 5,
        question: "What does the hinge pattern involve?",
        options: [
          "Bending at hips while keeping back straight",
          "Bending knees deeply",
          "Rounding the back completely",
          "Only arm movement"
        ],
        correctAnswer: 0,
        explanation: "Hinge involves bending at hips with straight back."
      },
      {
        id: 12,
        module: 6,
        question: "How long should a warm-up typically last?",
        options: [
          "5-10 minutes",
          "1-2 minutes",
          "20-30 minutes",
          "Only if cold outside"
        ],
        correctAnswer: 0,
        explanation: "A proper warm-up lasts 5-10 minutes."
      },
      {
        id: 13,
        module: 1,
        question: "What movement decreases the angle between two body parts?",
        options: [
          "Flexion",
          "Extension",
          "Abduction",
          "Rotation"
        ],
        correctAnswer: 0,
        explanation: "Flexion decreases angle between body parts."
      },
      {
        id: 14,
        module: 2,
        question: "Which muscle gives your shoulders their rounded shape?",
        options: [
          "Deltoids",
          "Pectoralis",
          "Latissimus Dorsi",
          "Trapezius"
        ],
        correctAnswer: 0,
        explanation: "Deltoids give shoulders rounded shape."
      },
      {
        id: 15,
        module: 3,
        question: "How long should a typical warm-up last?",
        options: [
          "5-10 minutes",
          "1-2 minutes",
          "15-20 minutes",
          "Only if you feel cold"
        ],
        correctAnswer: 0,
        explanation: "Warm-up should last 5-10 minutes."
      },
      {
        id: 16,
        module: 4,
        question: "Where should computer screen be positioned?",
        options: [
          "At eye level, arm's length away",
          "Below eye level",
          "Very close to face",
          "Above eye level"
        ],
        correctAnswer: 0,
        explanation: "Computer screen at eye level, arm's length away."
      },
      {
        id: 17,
        module: 5,
        question: "What pattern involves stepping forward with one leg?",
        options: [
          "Lunge",
          "Squat",
          "Hinge",
          "Carry"
        ],
        correctAnswer: 0,
        explanation: "Lunge involves stepping forward with one leg."
      },
      {
        id: 18,
        module: 6,
        question: "What type of pain should make you stop immediately?",
        options: [
          "Sharp, stabbing pain",
          "Mild muscle soreness",
          "Muscle burn during exercise",
          "Feeling tired"
        ],
        correctAnswer: 0,
        explanation: "Sharp, stabbing pain means stop immediately."
      },
      {
        id: 19,
        module: 1,
        question: "Which joint allows movement in many directions like a shoulder?",
        options: [
          "Ball-and-Socket Joint",
          "Hinge Joint",
          "Pivot Joint",
          "Gliding Joint"
        ],
        correctAnswer: 0,
        explanation: "Ball-and-socket joints allow movement in many directions."
      },
      {
        id: 20,
        module: 2,
        question: "What is your largest buttock muscle?",
        options: [
          "Gluteus Maximus",
          "Quadriceps",
          "Hamstrings",
          "Calves"
        ],
        correctAnswer: 0,
        explanation: "Gluteus maximus is the largest buttock muscle."
      },
      {
        id: 21,
        module: 3,
        question: "What should you exhale during in strength training?",
        options: [
          "The hardest part of the movement",
          "The easiest part",
          "When holding weight",
          "Never during exercise"
        ],
        correctAnswer: 0,
        explanation: "Exhale during hardest part of strength exercises."
      },
      {
        id: 22,
        module: 4,
        question: "What is forward head position?",
        options: [
          "Head juts forward from shoulders",
          "Head tilted back",
          "Head turned sideways",
          "Head perfectly aligned"
        ],
        correctAnswer: 0,
        explanation: "Forward head position is head jutting forward."
      },
      {
        id: 23,
        module: 5,
        question: "What movement involves moving objects away from your body?",
        options: [
          "Push",
          "Pull",
          "Carry",
          "Rotate"
        ],
        correctAnswer: 0,
        explanation: "Pushing moves objects away from body."
      },
      {
        id: 24,
        module: 6,
        question: "What is the 10% rule?",
        options: [
          "Increase activity by no more than 10% per week",
          "Exercise 10% of your day",
          "Use 10% of maximum weight",
          "Rest 10 minutes per hour"
        ],
        correctAnswer: 0,
        explanation: "Increase activity by no more than 10% weekly."
      },
      {
        id: 25,
        module: 1,
        question: "What is the main muscle creating a movement called?",
        options: [
          "Agonist",
          "Antagonist",
          "Synergist",
          "Stabilizer"
        ],
        correctAnswer: 0,
        explanation: "Agonist is main muscle creating movement."
      },
      {
        id: 26,
        module: 2,
        question: "Which muscles straighten your knee?",
        options: [
          "Quadriceps",
          "Hamstrings",
          "Calves",
          "Hip Flexors"
        ],
        correctAnswer: 0,
        explanation: "Quadriceps straighten your knee."
      },
      {
        id: 27,
        module: 3,
        question: "What principle says your body adapts to specific exercise types?",
        options: [
          "Specificity Principle",
          "Overload Principle",
          "Progressive Principle",
          "Adaptation Principle"
        ],
        correctAnswer: 0,
        explanation: "Specificity principle says adaptations are specific."
      },
      {
        id: 28,
        module: 4,
        question: "How should you lift objects?",
        options: [
          "Bend knees, keep back straight",
          "Bend at waist only",
          "Lift with arms only",
          "Twist while lifting"
        ],
        correctAnswer: 0,
        explanation: "Bend knees and keep back straight when lifting."
      },
      {
        id: 29,
        module: 5,
        question: "What should you do first in a proper squat?",
        options: [
          "Bend knees and hips simultaneously",
          "Only bend knees",
          "Only bend at waist",
          "Jump first"
        ],
        correctAnswer: 0,
        explanation: "Bend knees and hips simultaneously in squat."
      },
      {
        id: 30,
        module: 6,
        question: "What should you wear for injury prevention?",
        options: [
          "Appropriate shoes for your activity",
          "Any comfortable shoes",
          "Barefoot whenever possible",
          "Fashionable footwear"
        ],
        correctAnswer: 0,
        explanation: "Wear appropriate shoes for your activity."
      },
      {
        id: 31,
        module: 1,
        question: "Which plane involves rotational movements?",
        options: [
          "Transverse Plane",
          "Sagittal Plane",
          "Frontal Plane",
          "Vertical Plane"
        ],
        correctAnswer: 0,
        explanation: "Transverse plane involves rotational movements."
      },
      {
        id: 32,
        module: 2,
        question: "What muscle moves your arms across your body?",
        options: [
          "Pectoralis Major",
          "Latissimus Dorsi",
          "Deltoids",
          "Trapezius"
        ],
        correctAnswer: 0,
        explanation: "Pectoralis major moves arms across body."
      },
      {
        id: 33,
        module: 3,
        question: "How can you apply progressive overload?",
        options: [
          "Increase weight or repetitions",
          "Exercise less frequently",
          "Skip warm-ups",
          "Only do easy exercises"
        ],
        correctAnswer: 0,
        explanation: "Increase weight or reps for progressive overload."
      },
      {
        id: 34,
        module: 4,
        question: "What does good posture allow for breathing?",
        options: [
          "Diaphragm to move freely",
          "Shallow breathing only",
          "Holding breath easier",
          "Faster breathing"
        ],
        correctAnswer: 0,
        explanation: "Good posture allows diaphragm to move freely."
      },
      {
        id: 35,
        module: 5,
        question: "What pattern is used for opening doors?",
        options: [
          "Pull",
          "Push",
          "Squat",
          "Lunge"
        ],
        correctAnswer: 0,
        explanation: "Opening doors uses pull pattern."
      },
      {
        id: 36,
        module: 6,
        question: "How much sleep aids recovery?",
        options: [
          "7-9 hours per night",
          "4-5 hours per night",
          "10-12 hours per night",
          "Whenever you can"
        ],
        correctAnswer: 0,
        explanation: "7-9 hours of sleep supports recovery."
      },
      {
        id: 37,
        module: 1,
        question: "What movement increases the angle between body parts?",
        options: [
          "Extension",
          "Flexion",
          "Abduction",
          "Adduction"
        ],
        correctAnswer: 0,
        explanation: "Extension increases angle between body parts."
      },
      {
        id: 38,
        module: 2,
        question: "Which muscle bends your knee?",
        options: [
          "Hamstrings",
          "Quadriceps",
          "Glutes",
          "Calves"
        ],
        correctAnswer: 0,
        explanation: "Hamstrings bend your knee."
      },
      {
        id: 39,
        module: 3,
        question: "What should you never do with your breath during exercise?",
        options: [
          "Hold your breath",
          "Breathe normally",
          "Exhale during effort",
          "Inhale deeply"
        ],
        correctAnswer: 0,
        explanation: "Never hold breath during exercise."
      },
      {
        id: 40,
        module: 4,
        question: "What is the wall test for posture?",
        options: [
          "Stand with heels, buttocks, shoulders, and head touching wall",
          "Lean against wall sideways",
          "Touch toes while against wall",
          "Squat against wall"
        ],
        correctAnswer: 0,
        explanation: "Wall test checks multiple points touching wall."
      }
    ]
  }
};

export default kinesiologyCertificate;
