export const theaterArtsCertificate = {
  id: "theater-arts-certificate",
  title: "Theater Arts (Certificate)",
  description: "A beginner-friendly introduction to theater arts covering acting basics, stage terminology, and performance fundamentals. Perfect for aspiring actors, directors, and theater enthusiasts.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🎭",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "The World of Theater",
      content: `# Welcome to Theater Arts!

## What is Theater?
Theater is a live performance art where actors tell stories on stage. Unlike movies, theater happens in real time with a live audience. This creates a special connection between performers and viewers.

### Three Main Theater Spaces
1. **Proscenium Stage** - The most common stage type where the audience sits in front like watching a picture frame
2. **Thrust Stage** - A stage that extends into the audience on three sides
3. **In-the-Round** - A stage completely surrounded by audience members

### Theater Jobs Explained
- **Director** - The person who guides the entire production
- **Actor** - Performs the characters in the story
- **Stage Manager** - Runs the show backstage during performances
- **Designers** - Create the visual elements (sets, costumes, lights)

### Theater Terminology You Should Know
- **House** - Where the audience sits
- **Stage Left/Right** - Directions from the actor's perspective
- **Upstage/Downstage** - Moving away from or toward the audience
- **Wings** - The hidden areas on the sides of the stage

### Why Theater Matters
Theater helps us understand different perspectives and experiences. It teaches empathy, communication, and creative thinking. Many successful public speakers and communicators started in theater!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main difference between theater and movies?",
          options: [
            "Theater uses CGI effects",
            "Theater happens in real time with a live audience",
            "Movies are always more expensive",
            "Theater doesn't need actors"
          ],
          correctAnswer: 1,
          explanation: "Theater is unique because it happens live with performers and audience sharing the same moment."
        },
        {
          id: 2,
          question: "What type of stage is completely surrounded by the audience?",
          options: [
            "Proscenium Stage",
            "Thrust Stage",
            "In-the-Round Stage",
            "Movie Theater"
          ],
          correctAnswer: 2,
          explanation: "In-the-Round stages create an intimate experience with audience on all sides."
        },
        {
          id: 3,
          question: "Who guides the entire theater production?",
          options: [
            "Actor",
            "Director",
            "Ticket Seller",
            "Light Operator"
          ],
          correctAnswer: 1,
          explanation: "The director is responsible for the overall vision and guidance of the production."
        },
        {
          id: 4,
          question: "What does 'Stage Left' mean?",
          options: [
            "The audience's left side",
            "The actor's left side",
            "The back of the theater",
            "The ticket office"
          ],
          correctAnswer: 1,
          explanation: "Stage directions are always from the actor's perspective when facing the audience."
        },
        {
          id: 5,
          question: "Where do actors wait just off stage?",
          options: [
            "The House",
            "The Wings",
            "The Lobby",
            "The Orchestra Pit"
          ],
          correctAnswer: 1,
          explanation: "Wings are the hidden areas on the sides of the stage where actors prepare."
        },
        {
          id: 6,
          question: "What is the area where audience sits called?",
          options: [
            "Stage",
            "House",
            "Backstage",
            "Green Room"
          ],
          correctAnswer: 1,
          explanation: "The House refers to the seating area where the audience watches the performance."
        },
        {
          id: 7,
          question: "What does moving 'Downstage' mean?",
          options: [
            "Moving away from audience",
            "Moving toward audience",
            "Going to the basement",
            "Exiting the theater"
          ],
          correctAnswer: 1,
          explanation: "Downstage means moving toward the audience, originating from when stages were sloped."
        },
        {
          id: 8,
          question: "Who runs the show backstage during performances?",
          options: [
            "Director",
            "Lead Actor",
            "Stage Manager",
            "Costume Designer"
          ],
          correctAnswer: 2,
          explanation: "The Stage Manager ensures everything runs smoothly backstage during the show."
        },
        {
          id: 9,
          question: "Which stage type is like a picture frame?",
          options: [
            "In-the-Round",
            "Thrust Stage",
            "Proscenium Stage",
            "Black Box"
          ],
          correctAnswer: 2,
          explanation: "Proscenium stages create a 'picture frame' effect with audience viewing from one side."
        },
        {
          id: 10,
          question: "What important skill does theater help develop?",
          options: [
            "Cooking",
            "Driving",
            "Empathy",
            "Accounting"
          ],
          correctAnswer: 2,
          explanation: "Theater helps develop empathy by experiencing different characters' perspectives."
        },
        {
          id: 11,
          question: "What is the purpose of theater designers?",
          options: [
            "Sell tickets",
            "Create visual elements",
            "Write scripts",
            "Teach acting"
          ],
          correctAnswer: 1,
          explanation: "Designers create the visual world through sets, costumes, and lighting."
        },
        {
          id: 12,
          question: "Which theater job involves performing characters?",
          options: [
            "Director",
            "Actor",
            "Stage Manager",
            "Usher"
          ],
          correctAnswer: 1,
          explanation: "Actors bring characters to life through their performances."
        },
        {
          id: 13,
          question: "What does 'Upstage' mean?",
          options: [
            "Move toward audience",
            "Move away from audience",
            "Climb a ladder",
            "Improve your acting"
          ],
          correctAnswer: 1,
          explanation: "Upstage means moving away from the audience."
        },
        {
          id: 14,
          question: "What type of stage extends into audience on three sides?",
          options: [
            "Proscenium",
            "Thrust",
            "In-the-Round",
            "Traditional"
          ],
          correctAnswer: 1,
          explanation: "Thrust stages create closeness with audience on three sides."
        },
        {
          id: 15,
          question: "Why is theater considered a 'live' art?",
          options: [
            "It uses live animals",
            "It happens in real time",
            "Actors are always lively",
            "The theater building is alive"
          ],
          correctAnswer: 1,
          explanation: "Theater is live because each performance happens in real time, never exactly the same."
        },
        {
          id: 16,
          question: "What is created between performers and audience in theater?",
          options: [
            "A contract",
            "A special connection",
            "A business deal",
            "A written agreement"
          ],
          correctAnswer: 1,
          explanation: "The shared live experience creates a unique connection between performers and audience."
        },
        {
          id: 17,
          question: "From whose perspective are stage directions given?",
          options: [
            "Audience's perspective",
            "Director's perspective",
            "Actor's perspective",
            "Critic's perspective"
          ],
          correctAnswer: 2,
          explanation: "Stage directions (left, right, up, down) are always from the actor's viewpoint."
        },
        {
          id: 18,
          question: "What do successful public speakers often learn from theater?",
          options: [
            "Cooking techniques",
            "Communication skills",
            Car repair",
            "Computer programming"
          ],
          correctAnswer: 1,
          explanation: "Theater training develops strong communication and public speaking abilities."
        },
        {
          id: 19,
          question: "What does the term 'House' refer to?",
          options: [
            "The stage area",
            "The audience seating",
            "The dressing rooms",
            "The theater building"
          ],
          correctAnswer: 1,
          explanation: "In theater terminology, 'House' specifically means the audience seating area."
        },
        {
          id: 20,
          question: "Which element is NOT typically a designer's responsibility?",
          options: [
            "Sets",
            "Costumes",
            "Ticket pricing",
            "Lighting"
          ],
          correctAnswer: 2,
          explanation: "Designers focus on visual elements, not business aspects like ticket pricing."
        }
      ]
    },
    {
      id: 2,
      title: "Acting Fundamentals",
      content: `# The Actor's Toolkit

## What is Acting?
Acting is the art of portraying a character truthfully. Good acting makes audiences believe in the character's reality. It's about being truthful in imaginary circumstances.

### The Three Building Blocks of Acting
1. **Voice** - How you use your vocal instrument
2. **Body** - How you use physical expression
3. **Imagination** - How you create and believe in the character's world

### Voice Work Basics
- **Projection** - Speaking loudly enough to be heard clearly
- **Articulation** - Pronouncing words clearly and distinctly
- **Pitch** - Using different vocal tones to express emotion
- **Pace** - Controlling the speed of your speech

### Physical Expression
- **Posture** - How you hold your body communicates character
- **Gesture** - Purposeful movements that enhance meaning
- **Facial Expressions** - Showing emotions through your face
- **Movement** - How the character walks and moves in space

### Using Your Imagination
- **Character Background** - Creating the character's history
- **Objectives** - What the character wants in each scene
- **Obstacles** - What's preventing the character from getting what they want
- **Relationships** - How the character feels about other characters

### Simple Acting Exercise: "I Want"
Try this: Say "I want a glass of water" with different objectives:
1. You're very thirsty after exercise
2. You're trying to get someone's attention
3. You're in a fancy restaurant being polite
Notice how your voice and body change with each intention!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three building blocks of acting?",
          options: [
            "Costume, Set, Lights",
            "Voice, Body, Imagination",
            "Script, Director, Stage",
            "Tickets, Program, Lobby"
          ],
          correctAnswer: 1,
          explanation: "Voice, body, and imagination are the actor's essential tools."
        },
        {
          id: 2,
          question: "What does 'projection' mean in acting?",
          options: [
            "Using a projector on stage",
            "Speaking loudly enough to be heard clearly",
            "Projecting your future career",
            "Using hand gestures"
          ],
          correctAnswer: 1,
          explanation: "Projection is about voice volume and clarity for audience understanding."
        },
        {
          id: 3,
          question: "What is articulation in voice work?",
          options: [
            "Drawing pictures",
            "Building sets",
            "Pronouncing words clearly",
            "Memorizing lines"
          ],
          correctAnswer: 2,
          explanation: "Articulation means clear pronunciation of words and sounds."
        },
        {
          id: 4,
          question: "What does posture communicate about a character?",
          options: [
            "Their favorite color",
            "Their age and personality",
            "Their script length",
            "Their ticket price"
          ],
          correctAnswer: 1,
          explanation: "Posture reveals character traits like confidence, age, and emotional state."
        },
        {
          id: 5,
          question: "What are 'objectives' in acting?",
          options: [
            "Test questions",
            "What the character wants",
            "Director's notes",
            "Script pages"
          ],
          correctAnswer: 1,
          explanation: "Objectives are what the character is trying to achieve in each moment."
        },
        {
          id: 6,
          question: "What is the purpose of gestures in acting?",
          options: [
            "To scratch an itch",
            "To enhance meaning and communication",
            "To follow the director",
            "To fill time"
          ],
          correctAnswer: 1,
          explanation: "Gestures should be purposeful and help communicate the character's intentions."
        },
        {
          id: 7,
          question: "What does 'pitch' refer to in voice work?",
          options: [
            "Baseball throwing",
            "Selling tickets",
            "Vocal tone high or low",
            "Stage angle"
          ],
          correctAnswer: 2,
          explanation: "Pitch is how high or low your voice sounds, which conveys emotion."
        },
        {
          id: 8,
          question: "What should facial expressions do in acting?",
          options: [
            "Hide emotions",
            "Show emotions truthfully",
            "Follow makeup design",
            "Look pretty"
          ],
          correctAnswer: 1,
          explanation: "Facial expressions should authentically convey the character's feelings."
        },
        {
          id: 9,
          question: "What are 'obstacles' in a scene?",
          options: [
            "Physical objects on stage",
            "Things preventing character from getting what they want",
            "Audience distractions",
            "Stage crew"
          ],
          correctAnswer: 1,
          explanation: "Obstacles create conflict and make scenes interesting."
        },
        {
          id: 10,
          question: "What does 'pace' control in speech?",
          options: [
            "Running speed",
            "Speech speed",
            "Ticket sales",
            "Scene changes"
          ],
          correctAnswer: 1,
          explanation: "Pace is how fast or slow you speak, affecting emotional impact."
        },
        {
          id: 11,
          question: "What is character background?",
          options: [
            "Set design behind character",
            "Character's created history",
            "Actor's resume",
            "Script back cover"
          ],
          correctAnswer: 1,
          explanation: "Character background helps actors understand motivations and behaviors."
        },
        {
          id: 12,
          question: "What do relationships in acting refer to?",
          options: [
            "Actor's family",
            "How character feels about others",
            "Ticket discounts",
            "Theater friendships"
          ],
          correctAnswer: 1,
          explanation: "Character relationships drive emotional connections in scenes."
        },
        {
          id: 13,
          question: "What is the 'I Want' exercise for?",
          options: [
            "Asking for things",
            "Exploring different objectives",
            "Memorization practice",
            "Voice warm-up"
          ],
          correctAnswer: 1,
          explanation: "This exercise helps actors explore how objectives change performance."
        },
        {
          id: 14,
          question: "What does movement communicate about character?",
          options: [
            "Favorite dance",
            "Energy level and personality",
            "Shoe size",
            "Age exactly"
          ],
          correctAnswer: 1,
          explanation: "Movement style reveals character traits and emotional states."
        },
        {
          id: 15,
          question: "What is good acting described as?",
          options: [
            "Being truthful in imaginary circumstances",
            "Always being loud",
            "Wearing good costumes",
            "Having good looks"
          ],
          correctAnswer: 0,
          explanation: "This famous definition emphasizes authenticity in performance."
        },
        {
          id: 16,
          question: "Why is imagination important in acting?",
          options: [
            "To make up lines",
            "To create and believe in character's world",
            "To design sets",
            "To write scripts"
          ],
          correctAnswer: 1,
          explanation: "Imagination allows actors to fully inhabit their characters."
        },
        {
          id: 17,
          question: "What should an actor's voice work achieve?",
          options: [
            "Silence",
            "Clear communication with audience",
            "Singing perfectly",
            "Whispering only"
          ],
          correctAnswer: 1,
          explanation: "Voice work ensures the audience can hear and understand the performance."
        },
        {
          id: 18,
          question: "What do physical expressions include?",
          options: [
            "Only facial expressions",
            "Posture, gesture, and movement",
            "Costume choices",
            "Set design"
          ],
          correctAnswer: 1,
          explanation: "Physical expression encompasses all body communication."
        },
        {
          id: 19,
          question: "What changes when you try the 'I Want' exercise with different intentions?",
          options: [
            "Nothing changes",
            "Your voice and body change",
            "The script changes",
            "The audience changes"
          ],
          correctAnswer: 1,
          explanation: "Different objectives naturally change how you speak and move."
        },
        {
          id: 20,
          question: "What makes audiences believe in a character?",
          options: [
            "Expensive costumes",
            "Truthful acting",
            "Loud voices",
            "Famous actors"
          ],
          correctAnswer: 1,
          explanation: "Authenticity and truthfulness create believability in performance."
        }
      ]
    },
    {
      id: 3,
      title: "Stage Movement & Blocking",
      content: `# Moving on Stage

## What is Blocking?
Blocking is the planned movement and positioning of actors on stage. The director usually decides blocking to create effective stage pictures and tell the story clearly.

### Basic Stage Positions
1. **Full Front** - Facing directly toward audience
2. **Quarter Turn** - Body angled slightly away
3. **Profile** - Body sideways to audience
4. **Three-Quarter Turn** - Mostly facing away
5. **Full Back** - Completely facing away from audience

### Movement Principles
- **Cheating Out** - Angling your body slightly toward audience while talking to another actor
- **Crosses** - Moving from one stage position to another
- **Counter-cross** - Moving in opposite direction to balance stage picture
- **Levels** - Using sitting, kneeling, or standing to create visual interest

### Creating Stage Pictures
A good stage picture:
1. **Balanced** - Not too crowded on one side
2. **Focused** - Audience attention goes to important action
3. **Varied** - Different levels and positions
4. **Meaningful** - Positions support the story

### Working with Furniture
- **Practical Pieces** - Furniture that actors actually use (chairs, tables)
- **Imaginary Walls** - Remembering where doors and windows would be
- **Sight Lines** - Making sure audience can see important actions
- **Traffic Patterns** - Creating natural movement paths

### Blocking Notation
Actors mark blocking in their scripts using symbols:
- **X** = Cross
- **→** = Move in direction
- **○** = Turn
- **↑↓** = Stand up/Sit down

### Practice Exercise
Try blocking this simple scene: Two people meet at a park bench. One enters from stage left, sits on bench. Other enters from stage right, approaches bench, they talk, then leave together stage center.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is blocking in theater?",
          options: [
            "Building sets",
            "Planned movement and positioning on stage",
            "Blocking audience view",
            "Stopping the show"
          ],
          correctAnswer: 1,
          explanation: "Blocking organizes where and how actors move during the performance."
        },
        {
          id: 2,
          question: "Who usually decides blocking?",
          options: [
            "Lead actor",
            "Director",
            "Stage manager",
            "Audience"
          ],
          correctAnswer: 1,
          explanation: "The director creates blocking to support their vision of the play."
        },
        {
          id: 3,
          question: "What is 'Full Front' position?",
          options: [
            "Facing directly toward audience",
            "Facing away from audience",
            "Sideways to audience",
            "Lying down"
          ],
          correctAnswer: 0,
          explanation: "Full front gives maximum connection with audience."
        },
        {
          id: 4,
          question: "What does 'cheating out' mean?",
          options: [
            "Breaking character",
            "Angling body toward audience while talking to another actor",
            "Stealing props",
            "Missing cues"
          ],
          correctAnswer: 1,
          explanation: "Cheating out helps audience see faces while maintaining scene reality."
        },
        {
          id: 5,
          question: "What is a 'cross' in blocking?",
          options: [
            "Religious symbol",
            "Moving from one stage position to another",
            "Angry audience member",
            "Stage direction mistake"
          ],
          correctAnswer: 1,
          explanation: "Crosses are purposeful movements across the stage."
        },
        {
          id: 6,
          question: "What creates visual interest through different heights?",
          options: [
            "Costumes",
            "Levels",
            "Voices",
            "Lights"
          ],
          correctAnswer: 1,
          explanation: "Levels (sitting, kneeling, standing) make stage pictures more dynamic."
        },
        {
          id: 7,
          question: "What should a good stage picture have?",
          options: [
            "Only standing actors",
            "Balance, focus, variety, and meaning",
            "Complete symmetry",
            "No movement"
          ],
          correctAnswer: 1,
          explanation: "These four elements create effective visual storytelling."
        },
        {
          id: 8,
          question: "What are 'practical pieces'?",
          options: [
            "Theoretical concepts",
            "Furniture actors actually use",
            "Practice props",
            "Easy scenes"
          ],
          correctAnswer: 1,
          explanation: "Practical furniture pieces are functional, not just decorative."
        },
        {
          id: 9,
          question: "What do 'sight lines' ensure?",
          options: [
            "Good vision for actors",
            "Audience can see important actions",
            "Straight lines on floor",
            "Proper lighting angles"
          ],
          correctAnswer: 1,
          explanation: "Sight lines consider what every audience seat can see."
        },
        {
          id: 10,
          question: "What symbol marks a cross in scripts?",
          options: [
            "X",
            "→",
            "○",
            "↑"
          ],
          correctAnswer: 0,
          explanation: "X is the traditional notation for movement in blocking."
        },
        {
          id: 11,
          question: "What is 'three-quarter turn' position?",
          options: [
            "Facing audience",
            "Mostly facing away from audience",
            "Spinning three times",
            "Three actors turning"
          ],
          correctAnswer: 1,
          explanation: "Three-quarter turn creates mystery or withdrawal from audience."
        },
        {
          id: 12,
          question: "What is a 'counter-cross'?",
          options: [
            "Wrong movement",
            "Moving opposite to balance stage picture",
            "Religious ceremony",
            "Counting crosses"
          ],
          correctAnswer: 1,
          explanation: "Counter-cross maintains stage balance when another actor moves."
        },
        {
          id: 13,
          question: "What do traffic patterns create?",
          options: [
            "Car sounds",
            "Natural movement paths on stage",
            "Audience entrance routes",
            "Backstage organization"
          ],
          correctAnswer: 1,
          explanation: "Natural traffic patterns make movement look realistic."
        },
        {
          id: 14,
          question: "What does 'profile' position mean?",
          options: [
            "Actor's resume",
            "Body sideways to audience",
            "Full face to audience",
            "Back to audience"
          ],
          correctAnswer: 1,
          explanation: "Profile shows both actors' faces in conversations."
        },
        {
          id: 15,
          question: "Why is varied blocking important?",
          options: [
            "To confuse audience",
            "To create visual interest",
            "To exercise actors",
            "To fill time"
          ],
          correctAnswer: 1,
          explanation: "Variety keeps stage pictures interesting and dynamic."
        },
        {
          id: 16,
          question: "What should actors remember about imaginary walls?",
          options: [
            "They're invisible",
            "Where doors and windows would be",
            "They don't exist",
            "Nothing"
          ],
          correctAnswer: 1,
          explanation: "Consistency with imaginary elements maintains scene reality."
        },
        {
          id: 17,
          question: "What does focused blocking ensure?",
          options: [
            "Actor concentration",
            "Audience attention goes to important action",
            "Bright lighting",
            "Loud voices"
          ],
          correctAnswer: 1,
          explanation: "Focus guides audience to what's most important in each moment."
        },
        {
          id: 18,
          question: "What does the arrow symbol (→) indicate?",
          options: [
            "Move in direction",
            "Turn around",
            "Speak now",
            "Enter stage"
          ],
          correctAnswer: 0,
          explanation: "Arrows show specific movement directions in blocking notes."
        },
        {
          id: 19,
          question: "What does balanced blocking prevent?",
          options: [
            "Actors falling",
            "Stage being too crowded on one side",
            "Audience sleeping",
            "Costume problems"
          ],
          correctAnswer: 1,
          explanation: "Balance creates pleasing visual composition."
        },
        {
          id: 20,
          question: "What is the purpose of blocking notation?",
          options: [
            "To remember movements",
            "To decorate scripts",
            "To confuse actors",
            "To impress director"
          ],
          correctAnswer: 0,
          explanation: "Notation helps actors remember complex blocking patterns."
        }
      ]
    },
    {
      id: 4,
      title: "Voice & Speech for Stage",
      content: `# Your Voice on Stage

## The Actor's Vocal Instrument
Your voice is your primary tool for communicating character and emotion. Stage voices need to be clear, expressive, and powerful enough to reach every audience member.

### Four Essential Vocal Qualities
1. **Clarity** - Being understood clearly
2. **Volume** - Being heard in the back row
3. **Expression** - Conveying emotion and meaning
4. **Endurance** - Maintaining vocal health through entire run

### Breathing for Performance
**Diaphragmatic Breathing** - The actor's breathing technique:
- Breathe deeply into your belly, not just chest
- Feel your diaphragm expand sideways
- Use breath to support your voice
- Practice: Lie down with book on stomach - make it rise and fall with breath

### Vocal Warm-up Routine
1. **Humming** - Gentle vibration to wake up vocal cords
2. **Lip Trills** - Loosen lips and breath control
3. **Tongue Twisters** - Improve articulation
4. **Scale Speaking** - Practice pitch variation
5. **Projection Exercises** - Call across imaginary space

### Common Tongue Twisters for Articulation
- "Red leather, yellow leather"
- "Unique New York"
- "She sells seashells by the seashore"
- "Peter Piper picked a peck of pickled peppers"

### Volume Control
- **Conversational** - Normal speaking voice
- **Stage Whisper** - Projected whisper that carries
- **Projected Speech** - Full voice to reach back row
- **Shout** - Powerful but controlled loud voice

### Protecting Your Voice
- Drink plenty of water (room temperature)
- Avoid screaming or straining
- Rest your voice when not performing
- Avoid dairy before shows (can create mucus)
- Use steam inhalation for dry throats

### Practice Exercise
Read this sentence with four different emotions: "I can't believe you did that."
1. Angry 2. Surprised 3. Hurt 4. Amused
Notice how your voice changes for each emotion!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary tool for communicating character?",
          options: [
            "Costume",
            "Voice",
            "Makeup",
            "Props"
          ],
          correctAnswer: 1,
          explanation: "Voice conveys character, emotion, and meaning most directly."
        },
        {
          id: 2,
          question: "What are the four essential vocal qualities?",
          options: [
            "Loud, Soft, Fast, Slow",
            "Clarity, Volume, Expression, Endurance",
            "High, Low, Medium, Silent",
            "Happy, Sad, Angry, Excited"
          ],
          correctAnswer: 1,
          explanation: "These four qualities ensure effective stage communication."
        },
        {
          id: 3,
          question: "What is diaphragmatic breathing?",
          options: [
            "Breathing into belly, not just chest",
            "Breathing very quickly",
            "Holding breath",
            "Only breathing through mouth"
          ],
          correctAnswer: 0,
          explanation: "This breathing technique provides better support for speaking."
        },
        {
          id: 4,
          question: "What does humming in warm-ups do?",
          options: [
            "Wake up vocal cords gently",
            "Annoy other actors",
            "Practice singing",
            "Test microphone"
          ],
          correctAnswer: 0,
          explanation: "Humming gently vibrates and warms vocal cords."
        },
        {
          id: 5,
          question: "What do tongue twisters improve?",
          options: [
            "Memory",
            "Articulation",
            "Volume",
            "Costume changes"
          ],
          correctAnswer: 1,
          explanation: "Tongue twisters train clear pronunciation of difficult sounds."
        },
        {
          id: 6,
          question: "What is a stage whisper?",
          options: [
            "Real whisper",
            "Projected whisper that carries",
            "Secret to director",
            "Quiet line"
          ],
          correctAnswer: 1,
          explanation: "Stage whispers are technically projected to reach audience."
        },
        {
          id: 7,
          question: "What should actors drink plenty of?",
          options: [
            "Coffee",
            "Room temperature water",
            "Cold soda",
            "Hot tea with honey"
          ],
          correctAnswer: 1,
          explanation: "Room temperature water is best for vocal hydration."
        },
        {
          id: 8,
          question: "What do lip trills help with?",
          options: [
            "Lipstick application",
            "Breath control and lip loosening",
            "Kissing scenes",
            "Smiling"
          ],
          correctAnswer: 1,
          explanation: "Lip trills connect breath to sound and relax facial muscles."
        },
        {
          id: 9,
          question: "What should be avoided before shows?",
          options: [
            "Water",
            "Dairy products",
            "Fruits",
            "Vegetables"
          ],
          correctAnswer: 1,
          explanation: "Dairy can create mucus that affects vocal quality."
        },
        {
          id: 10,
          question: "What does 'projected speech' mean?",
          options: [
            "Using microphone",
            "Full voice to reach back row",
            "Shouting",
            "Recording voice"
          ],
          correctAnswer: 1,
          explanation: "Projection uses breath support to carry voice through space."
        },
        {
          id: 11,
          question: "What is clarity in voice work?",
          options: [
            "Loudness",
            "Being understood clearly",
            "High pitch",
            "Fast speech"
          ],
          correctAnswer: 1,
          explanation: "Clarity ensures every word is understood by audience."
        },
        {
          id: 12,
          question: "What helps with dry throats?",
          options: [
            "Screaming",
            "Steam inhalation",
            "Cold drinks",
            "Coughing"
          ],
          correctAnswer: 1,
          explanation: "Steam moisturizes vocal cords and throat."
        },
        {
          id: 13,
          question: "What do scale speaking exercises practice?",
          options: [
            "Musical talent",
            "Pitch variation",
            "Volume only",
            "Memory"
          ],
          correctAnswer: 1,
          explanation: "Scale speaking helps actors use different vocal pitches expressively."
        },
        {
          id: 14,
          question: "What does vocal endurance refer to?",
          options: [
            "How long you can shout",
            "Maintaining vocal health through entire run",
            "Singing high notes",
            "Talking fast"
          ],
          correctAnswer: 1,
          explanation: "Endurance means keeping your voice healthy through multiple performances."
        },
        {
          id: 15,
          question: "What breathing technique supports voice best?",
          options: [
            "Shallow chest breathing",
            "Diaphragmatic breathing",
            "Holding breath",
            "Only nose breathing"
          ],
          correctAnswer: 1,
          explanation: "Diaphragmatic breathing provides strong support for projection."
        },
        {
          id: 16,
          question: "What is the purpose of projection exercises?",
          options: [
            "To be loudest",
            "To call across imaginary space",
            "To practice whispering",
            "To memorize lines"
          ],
          correctAnswer: 1,
          explanation: "These exercises train voice to carry through theater space."
        },
        {
          id: 17,
          question: "What should actors do to rest their voice?",
          options: [
            "Talk more",
            "Rest when not performing",
            "Practice constantly",
            "Sing loudly"
          ],
          correctAnswer: 1,
          explanation: "Vocal rest is essential for maintaining healthy voice."
        },
        {
          id: 18,
          question: "What does 'expression' in voice convey?",
          options: [
            "Volume level",
            "Emotion and meaning",
            "Articulation",
            "Breath control"
          ],
          correctAnswer: 1,
          explanation: "Vocal expression communicates the emotional content of lines."
        },
        {
          id: 19,
          question: "Why practice the same line with different emotions?",
          options: [
            "To waste time",
            "To explore how voice changes",
            "To confuse audience",
            "To practice volume"
          ],
          correctAnswer: 1,
          explanation: "This exercise develops vocal flexibility and emotional range."
        },
        {
          id: 20,
          question: "What does shouting in theater need to be?",
          options: [
            "As loud as possible",
            "Powerful but controlled",
            "Always angry",
            "Avoided completely"
          ],
          correctAnswer: 1,
          explanation: "Stage shouting should be powerful but technically controlled to protect voice."
        }
      ]
    },
    {
      id: 5,
      title: "Character Development",
      content: `# Creating Believable Characters

## What is a Character?
A character is more than just lines in a script. It's a complete person with history, desires, fears, and relationships. Your job as an actor is to bring this person to life.

### The Character Building Blocks
1. **Physical Life** - How the character moves and looks
2. **Psychological Life** - How the character thinks and feels
3. **Social Life** - How the character relates to others
4. **Historical Life** - The character's background and experiences

### Asking the Right Questions
To understand your character, ask:
- **What do I want?** (Objectives)
- **What's in my way?** (Obstacles)
- **What will I do to get it?** (Actions)
- **Where am I coming from?** (Previous circumstances)
- **Where am I going?** (Future intentions)

### Creating Character History
Even if not in the script, imagine:
- Where was the character born?
- What was their childhood like?
- What important events shaped them?
- What are their secret dreams?
- What are their biggest fears?

### Physical Character Choices
- **Posture** - Confident? Slumped? Rigid?
- **Walk** - Fast? Slow? Graceful? Clumsy?
- **Gestures** - Many? Few? Specific patterns?
- **Voice** - High? Low? Fast? Slow? Accent?
- **Habits** - Nervous ticks? Comfort gestures?

### Relationship Mapping
Create relationship notes for each other character:
- How long have they known each other?
- What's their history together?
- How do they really feel about each other?
- What's unspoken between them?
- How does their relationship change through the play?

### Character Arc
Most characters change during a play:
- **Beginning** - Who they are at start
- **Middle** - How events change them
- **End** - Who they become
- Track emotional journey scene by scene

### Practice Exercise
Take a simple action like "drinking coffee" and do it as:
1. A nervous job interviewer
2. A tired night shift worker
3. A fancy business executive
4. A teenager on first date
Notice how character changes how you perform the same action!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is more than just lines in a script?",
          options: [
            "Stage directions",
            "Character",
            "Set design",
            "Lighting cues"
          ],
          correctAnswer: 1,
          explanation: "A character is a complete person with full inner life."
        },
        {
          id: 2,
          question: "What are the four character building blocks?",
          options: [
            "Voice, Body, Mind, Soul",
            "Physical, Psychological, Social, Historical",
            "Past, Present, Future, Dreams",
            "Costume, Props, Set, Lights"
          ],
          correctAnswer: 1,
          explanation: "These four aspects create a fully rounded character."
        },
        {
          id: 3,
          question: "What is the first question to ask about character?",
          options: [
            "What do I want?",
            "What's my costume?",
            "How loud should I be?",
            "Where do I stand?"
          ],
          correctAnswer: 0,
          explanation: "Objectives drive all character actions and choices."
        },
        {
          id: 4,
          question: "What should you imagine about character's past?",
          options: [
            "Only what's in script",
            "Birthplace, childhood, shaping events",
            "Nothing - stay with script only",
            "Future career plans"
          ],
          correctAnswer: 1,
          explanation: "Imagined history helps understand character motivations."
        },
        {
          id: 5,
          question: "What does posture communicate?",
          options: [
            "Character's age only",
            "Character's emotional state and personality",
            "Actor's training",
            "Costume fit"
          ],
          correctAnswer: 1,
          explanation: "Posture reveals inner life through physical expression."
        },
        {
          id: 6,
          question: "What is relationship mapping?",
          options: [
            "Drawing stage positions",
            "Creating notes about connections between characters",
            "Mapping theater seating",
            "Planning rehearsal schedule"
          ],
          correctAnswer: 1,
          explanation: "Relationship mapping clarifies character interactions."
        },
        {
          id: 7,
          question: "What is a character arc?",
          options: [
            "Circle on stage",
            "How character changes during play",
            "Character's favorite shape",
            "Set design curve"
          ],
          correctAnswer: 1,
          explanation: "Character arc tracks transformation from beginning to end."
        },
        {
          id: 8,
          question: "What are 'obstacles'?",
          options: [
            "Physical objects on stage",
            "Things preventing character from getting what they want",
            "Bad actors",
            "Technical problems"
          ],
          correctAnswer: 1,
          explanation: "Obstacles create conflict and dramatic tension."
        },
        {
          id: 9,
          question: "What should you track scene by scene?",
          options: [
            "Line counts",
            "Emotional journey",
            "Costume changes",
            "Entrance times"
          ],
          correctAnswer: 1,
          explanation: "Tracking emotional journey ensures consistent character development."
        },
        {
          id: 10,
          question: "What does the coffee drinking exercise demonstrate?",
          options: [
            "How to drink coffee",
            "How character changes simple actions",
            "Best coffee brands",
            "Proper cup holding"
          ],
          correctAnswer: 1,
          explanation: "Character influences even the smallest physical actions."
        },
        {
          id: 11,
          question: "What is psychological life?",
          options: [
            "Physical health",
            "How character thinks and feels",
            "Social status",
            "Historical facts"
          ],
          correctAnswer: 1,
          explanation: "Psychological life is the character's inner world."
        },
        {
          id: 12,
          question: "What are 'actions' in character work?",
          options: [
            "Movements only",
            "What character does to get what they want",
            "Fight scenes",
            "Dance numbers"
          ],
          correctAnswer: 1,
          explanation: "Actions are the strategies characters use to achieve objectives."
        },
        {
          id: 13,
          question: "What should you consider about character's walk?",
          options: [
            "Shoe size",
            "Speed, rhythm, and style",
            "Floor surface only",
            "Director's preference"
          ],
          correctAnswer: 1,
          explanation: "Walk reveals character's energy, mood, and personality."
        },
        {
          id: 14,
          question: "What might be unspoken between characters?",
          options: [
            "Everything",
            "Hidden feelings or history",
            "Script lines",
            "Stage directions"
          ],
          correctAnswer: 1,
          explanation: "Unspoken elements often drive subtext and tension."
        },
        {
          id: 15,
          question: "Where should character work start?",
          options: [
            "With costume fitting",
            "With asking questions about character",
            "With memorizing lines",
            "With blocking"
          ],
          correctAnswer: 1,
          explanation: "Asking questions builds understanding before performance choices."
        },
        {
          id: 16,
          question: "What does social life refer to?",
          options: [
            "Actor's friends",
            "How character relates to others",
            "Party scenes",
            "Audience interaction"
          ],
          correctAnswer: 1,
          explanation: "Social life encompasses all character relationships."
        },
        {
          id: 17,
          question: "What are character habits?",
          options: [
            "Daily routines only",
            "Repeated physical behaviors or ticks",
            "Lines they repeat",
            "Costume preferences"
          ],
          correctAnswer: 1,
          explanation: "Habits add realistic detail to character portrayal."
        },
        {
          id: 18,
          question: "What is historical life?",
          options: [
            "Ancient history",
            "Character's background and experiences",
            "Theater history",
            "Play's time period"
          ],
          correctAnswer: 1,
          explanation: "Historical life includes everything that happened before the play begins."
        },
        {
          id: 19,
          question: "What drives character actions?",
          options: [
            "Director's instructions",
            "Objectives and desires",
            "Other actors",
            "Stage manager"
          ],
          correctAnswer: 1,
          explanation: "Characters act based on what they want to achieve."
        },
        {
          id: 20,
          question: "Why create character history not in script?",
          options: [
            "To change the play",
            "To understand motivations better",
            "To impress director",
            "To add time to performance"
          ],
          correctAnswer: 1,
          explanation: "Imagined history provides motivation for scripted actions."
        }
      ]
    },
    {
      id: 6,
      title: "Performance Preparation",
      content: `# Ready for the Stage

## The Performance Process
Going from rehearsal to performance involves specific preparation steps. Being well-prepared reduces anxiety and lets you focus on the art.

### Rehearsal to Performance Transition
1. **Learning Phase** - Understanding script and character
2. **Blocking Phase** - Learning movements and positions
3. **Working Phase** - Developing character and relationships
4. **Polishing Phase** - Refining details and timing
5. **Technical Rehearsals** - Adding all technical elements
6. **Dress Rehearsals** - Full performances with everything
7. **Opening Night** - First public performance

### The Actor's Pre-show Routine
Create a consistent routine:
1. **Arrive Early** - Give yourself plenty of time
2. **Physical Warm-up** - Stretch and move your body
3. **Vocal Warm-up** - Prepare your voice
4. **Character Preparation** - Get into character mindset
5. **Focus Time** - Quiet concentration before curtain

### Dealing with Performance Anxiety
Normal feelings - use them as energy:
- **Breathing Exercises** - Calm nervous system
- **Positive Self-talk** - Replace "I'm nervous" with "I'm excited"
- **Focus on Character** - Think about character, not yourself
- **Trust Preparation** - Remember all the work you've done
- **Support Castmates** - You're all in this together

### Backstage Etiquette
- **Quiet Backstage** - Respect focus of performers on stage
- **Stay in Designated Areas** - Don't wander where you shouldn't
- **Help Others** - Assist with quick changes if needed
- **Respect Props** - Handle carefully and return to proper places
- **Listen for Cues** - Pay attention to stage manager

### Quick Changes
When you have fast costume changes:
- Practice them multiple times
- Have everything laid out in order
- Get help if needed
- Know your path to and from dressing area
- Keep calm and focused

### Audience Energy
Every audience is different:
- **Matinee Crowds** - Often quieter, different energy
- **Evening Crowds** - Usually more responsive
- **Small Houses** - More intimate, can hear individuals
- **Full Houses** - Energy builds on itself
- Adjust slightly but stay true to performance

### Post-show Routine
1. **Cool Down** - Gentle vocal and physical cool down
2. **Notes Review** - If director gives notes, listen carefully
3. **Self-reflection** - What worked? What to improve?
4. **Care for Voice** - Warm tea, steam, rest
5. **Reset for Tomorrow** - Mental preparation for next show

### Practice Exercise
Create your ideal pre-show routine:
- What time will you arrive?
- What warm-ups will you do?
- How will you transition into character?
- What calming techniques will you use?
- How will you support castmates?`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first phase of rehearsal process?",
          options: [
            "Blocking Phase",
            "Learning Phase",
            "Polishing Phase",
            "Technical Rehearsals"
          ],
          correctAnswer: 1,
          explanation: "Learning phase focuses on understanding script and character."
        },
        {
          id: 2,
          question: "What should you do first in pre-show routine?",
          options: [
            "Warm up voice",
            "Arrive early",
            "Put on costume",
            "Practice lines"
          ],
          correctAnswer: 1,
          explanation: "Arriving early reduces stress and allows proper preparation."
        },
        {
          id: 3,
          question: "How should you view performance anxiety?",
          options: [
            "As a problem",
            "As energy to use",
            "As a sign to quit",
            "As unimportant"
          ],
          correctAnswer: 1,
          explanation: "Nervous energy can be channeled into passionate performance."
        },
        {
          id: 4,
          question: "What is important backstage?",
          options: [
            "Talking loudly",
            "Quiet respect for performers",
            "Playing music",
            "Practicing lines aloud"
          ],
          correctAnswer: 1,
          explanation: "Quiet backstage allows concentration for those on stage."
        },
        {
          id: 5,
          question: "What helps with quick changes?",
          options: [
            "Winging it",
            "Practicing multiple times",
            "Ignoring them",
            "Changing slowly"
          ],
          correctAnswer: 1,
          explanation: "Practice ensures smooth and timely costume changes."
        },
        {
          id: 6,
          question: "What are matinee crowds often like?",
          options: [
            "Louder",
            "Quieter with different energy",
            "More drunk",
            "Exactly the same"
          ],
          correctAnswer: 1,
          explanation: "Afternoon audiences often have different energy than evening."
        },
        {
          id: 7,
          question: "What should you do post-show?",
          options: [
            "Run away",
            "Cool down gently",
            "Shout excitedly",
            "Forget everything"
          ],
          correctAnswer: 1,
          explanation: "Cool down helps body and voice recover from performance."
        },
        {
          id: 8,
          question: "What phase adds technical elements?",
          options: [
            "Learning Phase",
            "Technical Rehearsals",
            "Blocking Phase",
            "Working Phase"
          ],
          correctAnswer: 1,
          explanation: "Technical rehearsals integrate lights, sound, and other elements."
        },
        {
          id: 9,
          question: "What replaces "I'm nervous" self-talk?",
          options: [
            "I'm terrible",
            "I'm excited",
            "I don't care",
            "I'm bored"
          ],
          correctAnswer: 1,
          explanation: "Reframing anxiety as excitement uses the same energy positively."
        },
        {
          id: 10,
          question: "Where should you stay backstage?",
          options: [
            "Anywhere",
            "Designated areas only",
            "On stage",
            "In audience"
          ],
          correctAnswer: 1,
          explanation: "Staying in designated areas prevents accidents and distractions."
        },
        {
          id: 11,
          question: "What should be laid out for quick changes?",
          options: [
            "Everything in order",
            "Randomly",
            "Only costumes",
            "Nothing"
          ],
          correctAnswer: 0,
          explanation: "Organization prevents panic during fast changes."
        },
        {
          id: 12,
          question: "What builds energy in full houses?",
          options: [
            "Air conditioning",
            "Energy builds on itself",
            "Loud music",
            "Bright lights"
          ],
          correctAnswer: 1,
          explanation: "Large audiences create collective energy that performers feel."
        },
        {
          id: 13,
          question: "What should you do with director's notes?",
          options: [
            "Ignore them",
            "Listen carefully",
            "Argue about them",
            "Forget them"
          ],
          correctAnswer: 1,
          explanation: "Notes help improve future performances."
        },
        {
          id: 14,
          question: "What does focus time before curtain help with?",
          options: [
            "Sleeping",
            "Quiet concentration",
            "Socializing",
            "Eating"
          ],
          correctAnswer: 1,
          explanation: "Focus time prepares mental state for performance."
        },
        {
          id: 15,
          question: "What should you trust when anxious?",
          options: [
            "Luck",
            "Your preparation",
            "Other actors",
            "The audience"
          ],
          correctAnswer: 1,
          explanation: "Trusting your preparation builds confidence."
        },
        {
          id: 16,
          question: "What are dress rehearsals?",
          options: [
            "Trying on costumes",
            "Full performances with everything",
            "Only costume rehearsals",
            "Audition rehearsals"
          ],
          correctAnswer: 1,
          explanation: "Dress rehearsals simulate actual performance conditions."
        },
        {
          id: 17,
          question: "How should you handle props?",
          options: [
            "Carelessly",
            "Carefully and return properly",
            "Throw them",
            "Keep them"
          ],
          correctAnswer: 1,
          explanation: "Proper prop handling ensures consistency and safety."
        },
        {
          id: 18,
          question: "What helps calm nervous system?",
          options: [
            "Running",
            "Breathing exercises",
            "Shouting",
            "Skipping"
          ],
          correctAnswer: 1,
          explanation: "Deep breathing activates relaxation response."
        },
        {
          id: 19,
          question: "What should you focus on instead of yourself?",
          options: [
            "The audience",
            "Your character",
            "The director",
            "The script"
          ],
          correctAnswer: 1,
          explanation: "Character focus takes attention away from self-consciousness."
        },
        {
          id: 20,
          question: "Why support castmates?",
          options: [
            "You're competitors",
            "You're all in this together",
            "They pay you",
            "Director says so"
          ],
          correctAnswer: 1,
          explanation: "Theater is collaborative - supporting others improves everyone's performance."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Theater Arts Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of Theater Arts Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the main difference between theater and movies?",
        options: [
          "Theater uses more actors",
          "Theater happens in real time with live audience",
          "Movies are always better",
          "Theater has no director"
        ],
        correctAnswer: 1,
        explanation: "The live connection between performers and audience defines theater.",
        module: 1
      },
      {
        id: 2,
        question: "What type of stage is completely surrounded by audience?",
        options: [
          "Proscenium",
          "Thrust",
          "In-the-Round",
          "Traditional"
        ],
        correctAnswer: 2,
        explanation: "In-the-Round creates intimate experience with audience on all sides.",
        module: 1
      },
      {
        id: 3,
        question: "What are the three building blocks of acting?",
        options: [
          "Costume, Set, Lights",
          "Voice, Body, Imagination",
          "Script, Director, Stage",
          "Tickets, Program, Lobby"
        ],
        correctAnswer: 1,
        explanation: "These are the actor's essential tools for creating character.",
        module: 2
      },
      {
        id: 4,
        question: "What does 'projection' mean in acting?",
        options: [
          "Using projector",
          "Speaking to be heard clearly",
          "Future career planning",
          "Hand gestures"
        ],
        correctAnswer: 1,
        explanation: "Projection ensures audience can hear and understand performance.",
        module: 2
      },
      {
        id: 5,
        question: "What is blocking in theater?",
        options: [
          "Building sets",
          "Planned movement on stage",
          "Stopping show",
          "Ticket sales"
        ],
        correctAnswer: 1,
        explanation: "Blocking organizes actor positions and movements.",
        module: 3
      },
      {
        id: 6,
        question: "What does 'cheating out' mean?",
        options: [
          "Breaking character",
          "Angling toward audience",
          "Stealing props",
          "Missing cues"
        ],
        correctAnswer: 1,
        explanation: "Cheating out helps audience see faces while maintaining scene reality.",
        module: 3
      },
      {
        id: 7,
        question: "What are the four essential vocal qualities?",
        options: [
          "Loud, Soft, Fast, Slow",
          "Clarity, Volume, Expression, Endurance",
          "High, Low, Medium, Silent",
          "Happy, Sad, Angry, Excited"
        ],
        correctAnswer: 1,
        explanation: "These qualities ensure effective stage communication.",
        module: 4
      },
      {
        id: 8,
        question: "What is diaphragmatic breathing?",
        options: [
          "Breathing into belly",
          "Quick breathing",
          "Holding breath",
          "Mouth only breathing"
        ],
        correctAnswer: 0,
        explanation: "This technique provides strong support for speaking.",
        module: 4
      },
      {
        id: 9,
        question: "What are the four character building blocks?",
        options: [
          "Voice, Body, Mind, Soul",
          "Physical, Psychological, Social, Historical",
          "Past, Present, Future, Dreams",
          "Costume, Props, Set, Lights"
        ],
        correctAnswer: 1,
        explanation: "These aspects create fully rounded characters.",
        module: 5
      },
      {
        id: 10,
        question: "What is the first question to ask about character?",
        options: [
          "What do I want?",
          "What's my costume?",
          "How loud should I be?",
          "Where do I stand?"
        ],
        correctAnswer: 0,
        explanation: "Objectives drive all character actions and choices.",
        module: 5
      },
      {
        id: 11,
        question: "What is the first phase of rehearsal process?",
        options: [
          "Blocking Phase",
          "Learning Phase",
          "Polishing Phase",
          "Technical Rehearsals"
        ],
        correctAnswer: 1,
        explanation: "Learning phase focuses on understanding script and character.",
        module: 6
      },
      {
        id: 12,
        question: "How should you view performance anxiety?",
        options: [
          "As a problem",
          "As energy to use",
          "As sign to quit",
          "As unimportant"
        ],
        correctAnswer: 1,
        explanation: "Nervous energy can be channeled into passionate performance.",
        module: 6
      },
      {
        id: 13,
        question: "Who guides the entire theater production?",
        options: [
          "Actor",
          "Director",
          "Ticket Seller",
          "Light Operator"
        ],
        correctAnswer: 1,
        explanation: "Director is responsible for overall vision and guidance.",
        module: 1
      },
      {
        id: 14,
        question: "What does 'Stage Left' mean?",
        options: [
          "Audience's left",
          "Actor's left",
          "Back of theater",
          "Ticket office"
        ],
        correctAnswer: 1,
        explanation: "Stage directions are from actor's perspective.",
        module: 1
      },
      {
        id: 15,
        question: "What is articulation in voice work?",
        options: [
          "Drawing",
          "Building",
          "Clear pronunciation",
          "Memorizing"
        ],
        correctAnswer: 2,
        explanation: "Articulation means clear pronunciation of words.",
        module: 2
      },
      {
        id: 16,
        question: "What are 'objectives' in acting?",
        options: [
          "Test questions",
          "What character wants",
          "Director's notes",
          "Script pages"
        ],
        correctAnswer: 1,
        explanation: "Objectives are what character tries to achieve.",
        module: 2
      },
      {
        id: 17,
        question: "What is 'Full Front' position?",
        options: [
          "Facing audience",
          "Facing away",
          "Sideways",
          "Lying down"
        ],
        correctAnswer: 0,
        explanation: "Full front gives maximum audience connection.",
        module: 3
      },
      {
        id: 18,
        question: "What creates visual interest through heights?",
        options: [
          "Costumes",
          "Levels",
          "Voices",
          "Lights"
        ],
        correctAnswer: 1,
        explanation: "Levels make stage pictures more dynamic.",
        module: 3
      },
      {
        id: 19,
        question: "What do tongue twisters improve?",
        options: [
          "Memory",
          "Articulation",
          "Volume",
          "Costume changes"
        ],
        correctAnswer: 1,
        explanation: "Tongue twisters train clear pronunciation.",
        module: 4
      },
      {
        id: 20,
        question: "What is a stage whisper?",
        options: [
          "Real whisper",
          "Projected whisper",
          "Secret to director",
          "Quiet line"
        ],
        correctAnswer: 1,
        explanation: "Stage whispers are projected to reach audience.",
        module: 4
      },
      {
        id: 21,
        question: "What does posture communicate?",
        options: [
          "Age only",
          "Emotional state",
          "Actor's training",
          "Costume fit"
        ],
        correctAnswer: 1,
        explanation: "Posture reveals inner life physically.",
        module: 5
      },
      {
        id: 22,
        question: "What is relationship mapping?",
        options: [
          "Drawing stage",
          "Character connections",
          "Theater seating",
          "Rehearsal schedule"
        ],
        correctAnswer: 1,
        explanation: "Mapping clarifies character interactions.",
        module: 5
      },
      {
        id: 23,
        question: "What should you do first pre-show?",
        options: [
          "Warm up",
          "Arrive early",
          "Costume on",
          "Practice lines"
        ],
        correctAnswer: 1,
        explanation: "Arriving early reduces stress.",
        module: 6
      },
      {
        id: 24,
        question: "What is important backstage?",
        options: [
          "Talking loud",
          "Quiet respect",
          "Playing music",
          "Practicing aloud"
        ],
        correctAnswer: 1,
        explanation: "Quiet allows concentration on stage.",
        module: 6
      },
      {
        id: 25,
        question: "Where do actors wait off stage?",
        options: [
          "House",
          "Wings",
          "Lobby",
          "Orchestra Pit"
        ],
        correctAnswer: 1,
        explanation: "Wings are hidden side areas.",
        module: 1
      },
      {
        id: 26,
        question: "What does moving 'Downstage' mean?",
        options: [
          "Away from audience",
          "Toward audience",
          "To basement",
          "Exiting"
        ],
        correctAnswer: 1,
        explanation: "Downstage means toward audience.",
        module: 1
      },
      {
        id: 27,
        question: "What are 'obstacles' in scene?",
        options: [
          "Physical objects",
          "Things preventing wants",
          "Audience distractions",
          "Stage crew"
        ],
        correctAnswer: 1,
        explanation: "Obstacles create conflict.",
        module: 2
      },
      {
        id: 28,
        question: "What does 'pace' control?",
        options: [
          "Running speed",
          "Speech speed",
          "Ticket sales",
          "Scene changes"
        ],
        correctAnswer: 1,
        explanation: "Pace is speech speed.",
        module: 2
      },
      {
        id: 29,
        question: "What are 'practical pieces'?",
        options: [
          "Theoretical concepts",
          "Furniture used",
          "Practice props",
          "Easy scenes"
        ],
        correctAnswer: 1,
        explanation: "Practical furniture is functional.",
        module: 3
      },
      {
        id: 30,
        question: "What do sight lines ensure?",
        options: [
          "Actor vision",
          "Audience can see",
          "Straight lines",
          "Lighting angles"
        ],
        correctAnswer: 1,
        explanation: "Sight lines consider all audience seats.",
        module: 3
      },
      {
        id: 31,
        question: "What should actors drink plenty of?",
        options: [
          "Coffee",
          "Room temp water",
          "Cold soda",
          "Hot tea"
        ],
        correctAnswer: 1,
        explanation: "Room temp water is best for voice.",
        module: 4
      },
      {
        id: 32,
        question: "What avoids before shows?",
        options: [
          "Water",
          "Dairy",
          "Fruits",
          "Vegetables"
        ],
        correctAnswer: 1,
        explanation: "Dairy can create mucus.",
        module: 4
      },
      {
        id: 33,
        question: "What is character arc?",
        options: [
          "Circle on stage",
          "Character change",
          "Favorite shape",
          "Set design"
        ],
        correctAnswer: 1,
        explanation: "Arc tracks transformation.",
        module: 5
      },
      {
        id: 34,
        question: "What are 'actions' in character work?",
        options: [
          "Movements only",
          "What character does",
          "Fight scenes",
          "Dance numbers"
        ],
        correctAnswer: 1,
        explanation: "Actions are strategies to achieve objectives.",
        module: 5
      },
      {
        id: 35,
        question: "What helps quick changes?",
        options: [
          "Winging it",
          "Practicing",
          "Ignoring",
          "Changing slowly"
        ],
        correctAnswer: 1,
        explanation: "Practice ensures smooth changes.",
        module: 6
      },
      {
        id: 36,
        question: "What are matinee crowds like?",
        options: [
          "Louder",
          "Quieter",
          "More drunk",
          "Same"
        ],
        correctAnswer: 1,
        explanation: "Afternoon audiences different energy.",
        module: 6
      },
      {
        id: 37,
        question: "What does theater help develop?",
        options: [
          "Cooking",
          "Driving",
          "Empathy",
          "Accounting"
        ],
        correctAnswer: 2,
        explanation: "Theater develops empathy through perspectives.",
        module: 1
      },
      {
        id: 38,
        question: "What should you trust when anxious?",
        options: [
          "Luck",
          "Preparation",
          "Other actors",
          "Audience"
        ],
        correctAnswer: 1,
        explanation: "Trusting preparation builds confidence.",
        module: 6
      },
      {
        id: 39,
        question: "What is good acting described as?",
        options: [
          "Truthful in imaginary circumstances",
          "Always loud",
          "Good costumes",
          "Good looks"
        ],
        correctAnswer: 0,
        explanation: "This emphasizes authenticity.",
        module: 2
      },
      {
        id: 40,
        question: "Why support castmates?",
        options: [
          "Competitors",
          "All in this together",
          "They pay you",
          "Director says"
        ],
        correctAnswer: 1,
        explanation: "Theater is collaborative.",
        module: 6
      }
    ]
  }
};

export default theaterArtsCertificate;
