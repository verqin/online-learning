// speech-therapy-certificate.ts
export const speechTherapyCertificate = {
  id: "speech-therapy-certificate",
  title: "Speech Therapy (Certificate)",
  description: "Learn foundational speech therapy concepts including language development, assessment techniques, and basic intervention strategies for common speech disorders.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🗣️",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Speech and Language",
      completed: false,
      content: `
## **Module 1: Introduction to Speech and Language**

Welcome to your first module in speech therapy! This foundation will help you understand what speech therapy is and why it matters.

### **What is Speech Therapy?**
Speech therapy is the professional practice of helping people develop, improve, or regain communication skills. Speech therapists (also called speech-language pathologists) work with people who have difficulties with:
- Speaking clearly and being understood
- Understanding what others say
- Using words and sentences correctly
- Reading and writing
- Swallowing food and drink safely

The goal of speech therapy is to help people communicate as effectively as possible in their daily lives.

### **The Difference Between Speech and Language**
Many people use "speech" and "language" as if they mean the same thing, but they're different:

**Speech** refers to the physical act of talking. It involves:
- How we make sounds with our mouth, lips, and tongue
- Our voice quality (loud, soft, hoarse)
- How smoothly we speak (fluency)
- How clearly we pronounce words

**Language** refers to the system of words and rules we use to express ideas. It involves:
- Understanding what words mean
- Putting words together to make sentences
- Knowing how to start and maintain conversations
- Using language appropriately in different situations

Think of it this way: Speech is HOW we say something, while Language is WHAT we say and HOW we understand it.

### **Basic Communication Components**
All human communication involves three main components:

1. **Expressive Language** - How we express our thoughts and ideas
   - Using words and sentences
   - Gesturing or writing
   - Asking questions or making comments

2. **Receptive Language** - How we understand what others communicate
   - Following directions
   - Understanding questions
   - Recognizing the meaning of words and sentences

3. **Social Communication** - How we use language in social situations
   - Taking turns in conversation
   - Understanding nonverbal cues
   - Adjusting language for different listeners

These three components work together to create effective communication. When someone has difficulty with one or more of these areas, speech therapy can help.

Remember: Good communication is a combination of clear speech and effective language skills working together!
`,
      quiz: [
        {
          id: 1,
          question: "What is the main goal of speech therapy?",
          options: [
            "To help people communicate as effectively as possible",
            "To teach people to speak multiple languages",
            "To make everyone speak perfectly",
            "To eliminate all speech differences"
          ],
          correctAnswer: 0,
          explanation: "Speech therapy aims to help people communicate as effectively as possible in their daily lives, not to achieve perfection or eliminate differences."
        },
        {
          id: 2,
          question: "Which of these describes SPEECH?",
          options: [
            "The physical act of making sounds with the mouth",
            "Understanding what words mean",
            "Knowing how to start conversations",
            "The system of words and rules we use"
          ],
          correctAnswer: 0,
          explanation: "Speech specifically refers to the physical act of talking - how we make sounds with our mouth, lips, and tongue."
        },
        {
          id: 3,
          question: "Which of these describes LANGUAGE?",
          options: [
            "The system of words and rules to express ideas",
            "How loudly or softly someone speaks",
            "The smoothness of someone's talking",
            "How clearly words are pronounced"
          ],
          correctAnswer: 0,
          explanation: "Language refers to the system of words and rules we use to express ideas and understand others."
        },
        {
          id: 4,
          question: "What is expressive language?",
          options: [
            "How we express our thoughts and ideas",
            "How we understand what others say",
            "How we use language in social situations",
            "How clearly we pronounce words"
          ],
          correctAnswer: 0,
          explanation: "Expressive language is how we express our thoughts and ideas through words, gestures, or writing."
        },
        {
          id: 5,
          question: "What is receptive language?",
          options: [
            "How we understand what others communicate",
            "How we express our thoughts and ideas",
            "How we use language in social situations",
            "How smoothly we speak"
          ],
          correctAnswer: 0,
          explanation: "Receptive language is how we understand what others communicate through words, gestures, or writing."
        },
        {
          id: 6,
          question: "What is social communication?",
          options: [
            "How we use language in social situations",
            "How we understand what words mean",
            "How clearly we pronounce words",
            "How we express our thoughts and ideas"
          ],
          correctAnswer: 0,
          explanation: "Social communication involves using language appropriately in social situations, including taking turns and understanding nonverbal cues."
        },
        {
          id: 7,
          question: "How many main components does human communication involve?",
          options: [
            "Three",
            "Two",
            "Four",
            "Five"
          ],
          correctAnswer: 0,
          explanation: "Human communication involves three main components: expressive language, receptive language, and social communication."
        },
        {
          id: 8,
          question: "What do speech therapists help with?",
          options: [
            "Speaking clearly and being understood",
            "Teaching foreign languages",
            "Improving singing skills",
            "Writing business documents"
          ],
          correctAnswer: 0,
          explanation: "Speech therapists help with speaking clearly and being understood, among other communication skills."
        },
        {
          id: 9,
          question: "Which component involves following directions?",
          options: [
            "Receptive language",
            "Expressive language",
            "Social communication",
            "Speech production"
          ],
          correctAnswer: 0,
          explanation: "Following directions is part of receptive language - understanding what others communicate."
        },
        {
          id: 10,
          question: "Which component involves asking questions?",
          options: [
            "Expressive language",
            "Receptive language",
            "Social communication",
            "Speech clarity"
          ],
          correctAnswer: 0,
          explanation: "Asking questions is part of expressive language - expressing thoughts and ideas."
        },
        {
          id: 11,
          question: "What does speech specifically involve?",
          options: [
            "How we make sounds with our mouth",
            "Understanding sentence structure",
            "Knowing conversation rules",
            "Understanding word meanings"
          ],
          correctAnswer: 0,
          explanation: "Speech involves the physical aspects: how we make sounds with our mouth, lips, and tongue."
        },
        {
          id: 12,
          question: "What does language specifically involve?",
          options: [
            "Putting words together to make sentences",
            "Voice quality and loudness",
            "Smoothness of speaking",
            "Pronunciation clarity"
          ],
          correctAnswer: 0,
          explanation: "Language involves the system of words and rules, including putting words together to make sentences."
        },
        {
          id: 13,
          question: "Which is NOT typically addressed by speech therapy?",
          options: [
            "Teaching foreign languages",
            "Helping with word finding",
            "Improving sentence structure",
            "Working on speech clarity"
          ],
          correctAnswer: 0,
          explanation: "Speech therapy focuses on communication disorders, not typically on teaching foreign languages."
        },
        {
          id: 14,
          question: "What is the relationship between speech and language?",
          options: [
            "Speech is HOW we say, Language is WHAT we say",
            "They are exactly the same thing",
            "Language is HOW we say, Speech is WHAT we say",
            "They are completely unrelated"
          ],
          correctAnswer: 0,
          explanation: "Speech is HOW we say something, while Language is WHAT we say and HOW we understand it."
        },
        {
          id: 15,
          question: "Which involves understanding nonverbal cues?",
          options: [
            "Social communication",
            "Expressive language",
            "Receptive language",
            "Speech production"
          ],
          correctAnswer: 0,
          explanation: "Understanding nonverbal cues is part of social communication."
        },
        {
          id: 16,
          question: "What do speech therapists also help with besides talking?",
          options: [
            "Swallowing food and drink safely",
            "Improving athletic performance",
            "Teaching musical instruments",
            "Developing computer skills"
          ],
          correctAnswer: 0,
          explanation: "Speech therapists also work on swallowing safety (dysphagia) in addition to communication skills."
        },
        {
          id: 17,
          question: "Which component involves adjusting language for different listeners?",
          options: [
            "Social communication",
            "Expressive language",
            "Receptive language",
            "Speech clarity"
          ],
          correctAnswer: 0,
          explanation: "Adjusting language for different listeners is part of social communication skills."
        },
        {
          id: 18,
          question: "What is involved in the physical act of talking?",
          options: [
            "Making sounds with mouth, lips, and tongue",
            "Understanding word meanings",
            "Knowing grammar rules",
            "Using appropriate social language"
          ],
          correctAnswer: 0,
          explanation: "The physical act of talking involves making sounds with the mouth, lips, and tongue."
        },
        {
          id: 19,
          question: "Which involves using gestures to communicate?",
          options: [
            "Expressive language",
            "Receptive language",
            "Social communication",
            "Speech production"
          ],
          correctAnswer: 0,
          explanation: "Using gestures is part of expressive language - expressing thoughts and ideas."
        },
        {
          id: 20,
          question: "Good communication requires:",
          options: [
            "Clear speech and effective language skills",
            "Only perfect pronunciation",
            "Speaking multiple languages",
            "Using complex vocabulary"
          ],
          correctAnswer: 0,
          explanation: "Good communication is a combination of clear speech and effective language skills working together."
        }
      ]
    },
    {
      id: 2,
      title: "Language Development in Children",
      completed: false,
      content: `
## **Module 2: Language Development in Children**

Understanding how children typically learn language helps us identify when someone might need help. This module covers the amazing journey of language development from birth through childhood.

### **Typical Language Milestones**
Children develop language skills in a predictable sequence, though the exact timing varies. Here are the key milestones:

**By 12 months (1 year old):**
- Understands simple words like "no" and "bye-bye"
- Responds to their name
- Uses gestures like waving and pointing
- May say "mama" or "dada" with meaning

**By 18 months (1½ years old):**
- Says several single words
- Follows simple one-step directions ("Get the ball")
- Points to body parts when asked
- Uses more gestures to communicate

**By 2 years old:**
- Puts two words together ("more milk," "mommy go")
- Has about 50 words they can say
- Points to pictures in books when named
- Follows two-step directions ("Get the ball and give it to me")

**By 3 years old:**
- Uses three-word sentences
- Asks simple questions
- Most speech is understood by family members
- Understands basic concepts like "big" and "little"

**By 4 years old:**
- Tells simple stories
- Asks many questions including "why" and "how"
- Speech is understood by most people
- Knows some basic grammar rules

**By 5 years old:**
- Tells longer stories with clear sequence
- Uses adult-like grammar most of the time
- Understands most of what is said at home and school
- Can have conversations with adults and peers

These milestones provide a general guide. Some children develop faster or slower and still fall within normal development.

### **Understanding Language Delays**
A language delay means a child is developing language skills slower than expected. There are two main types:

**Expressive Language Delay:**
- Child understands language but has trouble using it
- May have limited vocabulary for their age
- May use shorter sentences than expected
- Might struggle to find the right words

**Receptive Language Delay:**
- Child has trouble understanding language
- May not follow directions appropriate for their age
- May have difficulty answering questions
- Might seem to not listen or pay attention

Some children have delays in both areas. Early identification and support can make a big difference in helping children catch up.

### **Supporting Language Development**
Parents and caregivers play a crucial role in supporting language development. Here are simple, effective strategies:

**Talk Throughout the Day:**
- Describe what you're doing ("I'm cutting the carrots")
- Talk about what your child is doing ("You're building a tall tower!")
- Use simple, clear language
- Give your child time to respond

**Read Together Daily:**
- Point to pictures and name them
- Ask simple questions about the story
- Let your child turn the pages
- Read the same books repeatedly - children learn through repetition

**Follow Your Child's Lead:**
- Talk about what interests your child
- Expand on what your child says (Child: "Dog!" Adult: "Yes, big dog!")
- Imitate your child's sounds and words
- Play with your child at their level

**Create Communication Opportunities:**
- Put favorite toys just out of reach to encourage asking
- Offer choices ("Do you want apple or banana?")
- Wait expectantly for your child to communicate
- Respond to all communication attempts, even if not perfect

Remember: The most important thing is to create a language-rich environment where communication is fun and rewarding!
`,
      quiz: [
        {
          id: 1,
          question: "What should a child typically do by 12 months?",
          options: [
            "Understand simple words and respond to name",
            "Speak in full sentences",
            "Read simple books",
            "Have conversations with peers"
          ],
          correctAnswer: 0,
          explanation: "By 12 months, children typically understand simple words like 'no' and respond to their name."
        },
        {
          id: 2,
          question: "What is a typical 2-year-old language skill?",
          options: [
            "Putting two words together",
            "Telling complex stories",
            "Using perfect grammar",
            "Reading independently"
          ],
          correctAnswer: 0,
          explanation: "By 2 years old, children typically put two words together like 'more milk' or 'mommy go'."
        },
        {
          id: 3,
          question: "What is expressive language delay?",
          options: [
            "Child understands but has trouble using language",
            "Child cannot hear properly",
            "Child speaks too quickly",
            "Child uses complex vocabulary"
          ],
          correctAnswer: 0,
          explanation: "Expressive language delay means a child understands language but has trouble using it to communicate."
        },
        {
          id: 4,
          question: "What is receptive language delay?",
          options: [
            "Child has trouble understanding language",
            "Child speaks perfectly but quietly",
            "Child uses advanced vocabulary",
            "Child tells long stories"
          ],
          correctAnswer: 0,
          explanation: "Receptive language delay means a child has trouble understanding what others say."
        },
        {
          id: 5,
          question: "What should a child typically do by 3 years old?",
          options: [
            "Use three-word sentences and ask questions",
            "Read chapter books",
            "Give public speeches",
            "Write complete sentences"
          ],
          correctAnswer: 0,
          explanation: "By 3 years old, children typically use three-word sentences and ask simple questions."
        },
        {
          id: 6,
          question: "How can parents support language development?",
          options: [
            "Talk throughout the day about daily activities",
            "Only use complex vocabulary",
            "Correct every mistake immediately",
            "Avoid repeating books or songs"
          ],
          correctAnswer: 0,
          explanation: "Parents can support language by talking throughout the day about what they and their child are doing."
        },
        {
          id: 7,
          question: "By what age is speech typically understood by most people?",
          options: [
            "4 years old",
            "1 year old",
            "2 years old",
            "6 months old"
          ],
          correctAnswer: 0,
          explanation: "By 4 years old, children's speech is typically understood by most people, not just family members."
        },
        {
          id: 8,
          question: "What is a simple strategy to encourage communication?",
          options: [
            "Put favorite toys just out of reach",
            "Give everything immediately without waiting",
            "Talk only about adult topics",
            "Avoid asking questions"
          ],
          correctAnswer: 0,
          explanation: "Putting favorite toys just out of reach encourages children to communicate by asking or gesturing."
        },
        {
          id: 9,
          question: "By 18 months, what should a child typically do?",
          options: [
            "Follow simple one-step directions",
            "Read simple words",
            "Write their name",
            "Have phone conversations"
          ],
          correctAnswer: 0,
          explanation: "By 18 months, children typically follow simple one-step directions like 'Get the ball.'"
        },
        {
          id: 10,
          question: "What does 'follow your child's lead' mean?",
          options: [
            "Talk about what interests your child",
            "Make your child talk about your interests",
            "Ignore your child's interests",
            "Only talk about educational topics"
          ],
          correctAnswer: 0,
          explanation: "Following your child's lead means talking about what interests your child at that moment."
        },
        {
          id: 11,
          question: "By 5 years old, what language skill is typical?",
          options: [
            "Telling longer stories with clear sequence",
            "Writing novels",
            "Giving formal presentations",
            "Learning multiple foreign languages"
          ],
          correctAnswer: 0,
          explanation: "By 5 years old, children typically tell longer stories with clear beginning, middle, and end."
        },
        {
          id: 12,
          question: "How can reading support language development?",
          options: [
            "Pointing to pictures and naming them",
            "Making children read silently only",
            "Only reading very difficult books",
            "Avoiding repetition of books"
          ],
          correctAnswer: 0,
          explanation: "Pointing to pictures and naming them during reading helps build vocabulary and language skills."
        },
        {
          id: 13,
          question: "What does 'expand on what your child says' mean?",
          options: [
            "Add words to make a longer sentence",
            "Correct every grammatical error",
            "Change the topic completely",
            "Use much more complex vocabulary"
          ],
          correctAnswer: 0,
          explanation: "Expanding means adding words to make a longer, more complete sentence (Child: 'Dog!' Adult: 'Yes, big dog!')."
        },
        {
          id: 14,
          question: "What is a language-rich environment?",
          options: [
            "Where communication is fun and rewarding",
            "Where children are always quiet",
            "Where only educational TV is allowed",
            "Where adults do all the talking"
          ],
          correctAnswer: 0,
          explanation: "A language-rich environment is one where communication is encouraged, fun, and rewarding for the child."
        },
        {
          id: 15,
          question: "By what age do children typically ask 'why' questions?",
          options: [
            "4 years old",
            "1 year old",
            "2 years old",
            "6 years old"
          ],
          correctAnswer: 0,
          explanation: "By 4 years old, children typically ask many questions including 'why' and 'how' questions."
        },
        {
          id: 16,
          question: "What does 'give your child time to respond' mean?",
          options: [
            "Wait expectantly after asking or saying something",
            "Answer immediately for your child",
            "Only ask one question per day",
            "Talk continuously without pauses"
          ],
          correctAnswer: 0,
          explanation: "Giving time means waiting expectantly after asking a question or making a comment, allowing the child time to process and respond."
        },
        {
          id: 17,
          question: "What is a good way to offer choices?",
          options: [
            "'Do you want apple or banana?'",
            "'You must eat fruit now'",
            "'What should we have for dinner?'",
            "'Tell me all the fruits you know'"
          ],
          correctAnswer: 0,
          explanation: "Offering simple choices like 'Do you want apple or banana?' encourages communication and decision-making."
        },
        {
          id: 18,
          question: "Why is repetition important in language learning?",
          options: [
            "Children learn through repeated exposure",
            "It prevents boredom",
            "It makes parents happy",
            "It's required by schools"
          ],
          correctAnswer: 0,
          explanation: "Children learn language through repeated exposure to words, phrases, and stories."
        },
        {
          id: 19,
          question: "By 2 years old, about how many words do children typically say?",
          options: [
            "About 50 words",
            "About 500 words",
            "About 5 words",
            "About 1000 words"
          ],
          correctAnswer: 0,
          explanation: "By 2 years old, children typically have about 50 words they can say."
        },
        {
          id: 20,
          question: "What should parents do with communication attempts?",
          options: [
            "Respond to all attempts, even if not perfect",
            "Only respond to perfect speech",
            "Ignore imperfect attempts",
            "Correct every attempt immediately"
          ],
          correctAnswer: 0,
          explanation: "Responding to all communication attempts encourages children to keep trying, even if their speech isn't perfect."
        }
      ]
    },
    {
      id: 3,
      title: "Common Speech Sounds and Articulation",
      completed: false,
      content: `
## **Module 3: Common Speech Sounds and Articulation**

This module explores how we make speech sounds and common difficulties people have with pronunciation. Understanding articulation helps us identify and support clear speech.

### **How We Make Speech Sounds**
Speech sounds are made by shaping airflow from our lungs using different parts of our mouth and throat. Here are the main components:

**Voicing:**
- **Voiced sounds:** Our vocal cords vibrate (like /b/, /d/, /g/, /v/, /z/)
- **Voiceless sounds:** Our vocal cords don't vibrate (like /p/, /t/, /k/, /f/, /s/)

Try this: Put your fingers on your throat and say "ssss" (voiceless), then "zzzz" (voiced). Feel the difference!

**Place of Articulation (Where sounds are made):**
- **Lips:** /p/, /b/, /m/ (try saying "pop" - feel your lips)
- **Teeth and lips:** /f/, /v/ (say "fan" - lower lip touches upper teeth)
- **Tongue tip and ridge:** /t/, /d/, /n/ (say "top" - tongue taps behind teeth)
- **Back of tongue and throat:** /k/, /g/ (say "go" - feel back of tongue rise)
- **Various tongue positions:** Many other sounds have specific tongue placements

**Manner of Articulation (How sounds are made):**
- **Stops:** Complete blockage then release (/p/, /b/, /t/, /d/, /k/, /g/)
- **Fricatives:** Narrow passage creating friction (/f/, /v/, /s/, /z/, /sh/)
- **Nasals:** Air through nose (/m/, /n/, /ng/)
- **Glides:** Smooth movement (/w/, /y/)

Understanding these components helps us describe and work on specific speech sounds.

### **Typical Sound Development**
Children learn speech sounds in a predictable order. Here's when sounds typically develop:

**Early sounds (by 3 years old):**
- /p/, /b/, /m/, /w/, /h/, /n/
- These are usually the first sounds children master

**Middle sounds (by 4-5 years old):**
- /t/, /d/, /k/, /g/, /f/, /v/, /y/
- Most children have these sounds by kindergarten

**Later sounds (by 6-7 years old):**
- /sh/, /ch/, /j/, /th/, /s/, /z/, /l/, /r/
- These often take longer to develop fully

**Note:** Sounds like /th/ (as in "think" and "that") and /r/ are typically the last to develop, often not mastered until age 7 or 8.

### **Common Articulation Difficulties**
Articulation difficulties occur when someone has trouble producing specific speech sounds correctly. Here are common patterns:

**Sound Substitutions:**
- Saying "wabbit" for "rabbit" (/w/ for /r/)
- Saying "tum" for "come" (/t/ for /k/)
- Saying "fumb" for "thumb" (/f/ for /th/)

**Sound Omissions:**
- Saying "ca-" for "cat" (omitting final sounds)
- Saying "-at" for "bat" (omitting initial sounds)
- Saying "bu-" for "bus" (omitting final consonants)

**Sound Distortions:**
- A "slushy" or lispy /s/ sound
- A "gurgly" /r/ sound
- Nasal sounding non-nasal sounds

**Developmental vs. Persistent Errors:**
- **Developmental errors:** Typical for a child's age (like a 3-year-old saying "wabbit")
- **Persistent errors:** Still present past the expected age (like an 8-year-old saying "wabbit")

Most children outgrow developmental errors naturally. Persistent errors may benefit from speech therapy.

### **Supporting Clear Speech**
Here are simple ways to support clear speech development:

**Model, Don't Correct:**
- Instead of "Say it right," simply repeat the word correctly
- Child: "I see a wabbit!" Adult: "Yes, I see the rabbit too!"
- This provides a good model without making the child feel criticized

**Focus on One Sound at a Time:**
- Choose one sound the child is working on
- Play games with that sound ("Let's find things that start with /k/")
- Practice when the child is relaxed and having fun

**Use Multi-Sensory Cues:**
- **Visual:** Show how your mouth looks when making the sound
- **Tactile:** Have the child feel their throat for voicing
- **Verbal:** Describe how to make the sound ("Put your tongue up for /l/")

**Make it Fun and Functional:**
- Practice sounds during natural activities
- Use the target sound in important words (child's name, favorite things)
- Keep practice sessions short and positive

Remember: Clear speech develops over time. Patience and positive support are key!
`,
      quiz: [
        {
          id: 1,
          question: "What are voiced sounds?",
          options: [
            "Sounds where vocal cords vibrate",
            "Sounds made only with lips",
            "Sounds that are always loud",
            "Sounds made without using air"
          ],
          correctAnswer: 0,
          explanation: "Voiced sounds are those where our vocal cords vibrate, like /b/, /d/, /g/, /v/, /z/."
        },
        {
          id: 2,
          question: "What are voiceless sounds?",
          options: [
            "Sounds where vocal cords don't vibrate",
            "Sounds that are always quiet",
            "Sounds made only with nose",
            "Sounds that don't use the mouth"
          ],
          correctAnswer: 0,
          explanation: "Voiceless sounds are those where our vocal cords don't vibrate, like /p/, /t/, /k/, /f/, /s/."
        },
        {
          id: 3,
          question: "Which sounds are typically early developing?",
          options: [
            "/p/, /b/, /m/, /w/",
            "/th/, /r/, /s/, /z/",
            "/sh/, /ch/, /j/",
            "All sounds develop at once"
          ],
          correctAnswer: 0,
          explanation: "Early developing sounds (by age 3) include /p/, /b/, /m/, /w/, /h/, /n/."
        },
        {
          id: 4,
          question: "Which sounds are typically later developing?",
          options: [
            "/th/, /r/, /s/, /z/",
            "/p/, /b/, /m/",
            "/t/, /d/, /k/",
            "/f/, /v/, /y/"
          ],
          correctAnswer: 0,
          explanation: "Later developing sounds (by age 6-7) include /th/, /r/, /s/, /z/, /l/, /sh/, /ch/, /j/."
        },
        {
          id: 5,
          question: "What is a sound substitution?",
          options: [
            "Saying one sound for another",
            "Omitting a sound completely",
            "Making a sound distorted",
            "Adding extra sounds"
          ],
          correctAnswer: 0,
          explanation: "Sound substitution means saying one sound instead of another, like 'wabbit' for 'rabbit' (/w/ for /r/)."
        },
        {
          id: 6,
          question: "What is a sound omission?",
          options: [
            "Leaving out a sound completely",
            "Saying one sound for another",
            "Making a sound distorted",
            "Saying sounds in wrong order"
          ],
          correctAnswer: 0,
          explanation: "Sound omission means leaving out a sound completely, like saying 'ca-' for 'cat' (omitting final /t/)."
        },
        {
          id: 7,
          question: "What is the best way to correct speech errors?",
          options: [
            "Model the correct production naturally",
            "Say 'That's wrong' immediately",
            "Make them repeat until perfect",
            "Ignore all errors"
          ],
          correctAnswer: 0,
          explanation: "The best approach is to model the correct production naturally without directly correcting the child."
        },
        {
          id: 8,
          question: "What are stops in speech production?",
          options: [
            "Complete blockage then release of air",
            "Continuous airflow with friction",
            "Air flowing through the nose",
            "Smooth movement between sounds"
          ],
          correctAnswer: 0,
          explanation: "Stops involve complete blockage of airflow then sudden release, like /p/, /b/, /t/, /d/, /k/, /g/."
        },
        {
          id: 9,
          question: "What are fricatives?",
          options: [
            "Narrow passage creating friction sound",
            "Complete blockage then release",
            "Air through the nose only",
            "Two sounds blended together"
          ],
          correctAnswer: 0,
          explanation: "Fricatives involve a narrow passage creating friction, like /f/, /v/, /s/, /z/, /sh/."
        },
        {
          id: 10,
          question: "When do most children master /r/ sound?",
          options: [
            "Around 6-7 years old",
            "By 2 years old",
            "By 3 years old",
            "Not until teenage years"
          ],
          correctAnswer: 0,
          explanation: "The /r/ sound is typically mastered around 6-7 years old, often one of the last sounds to develop."
        },
        {
          id: 11,
          question: "What does 'place of articulation' mean?",
          options: [
            "Where in the mouth sounds are made",
            "How loud a sound is",
            "How long a sound lasts",
            "The meaning of the sound"
          ],
          correctAnswer: 0,
          explanation: "Place of articulation refers to where in the mouth sounds are made, like lips, teeth, tongue positions."
        },
        {
          id: 12,
          question: "What does 'manner of articulation' mean?",
          options: [
            "How the sound is produced",
            "Where the sound is made",
            "How loud the sound is",
            "What the sound means"
          ],
          correctAnswer: 0,
          explanation: "Manner of articulation refers to how the sound is produced, like stops, fricatives, nasals, glides."
        },
        {
          id: 13,
          question: "What is a developmental error?",
          options: [
            "Typical for a child's age",
            "Always needs therapy",
            "Never goes away on its own",
            "Only in adults"
          ],
          correctAnswer: 0,
          explanation: "A developmental error is typical for a child's age and often resolves naturally as they grow."
        },
        {
          id: 14,
          question: "What is a persistent error?",
          options: [
            "Still present past expected age",
            "Brand new error",
            "Error that changes daily",
            "Error only in certain words"
          ],
          correctAnswer: 0,
          explanation: "A persistent error is still present past the expected age for mastery of that sound."
        },
        {
          id: 15,
          question: "How can you help a child feel voicing?",
          options: [
            "Have them feel their throat while speaking",
            "Have them cover their ears",
            "Have them hold their nose",
            "Have them watch in a mirror"
          ],
          correctAnswer: 0,
          explanation: "Having a child feel their throat while speaking helps them feel the vibration of voiced sounds."
        },
        {
          id: 16,
          question: "What sounds are made with lips?",
          options: [
            "/p/, /b/, /m/",
            "/k/, /g/, /ng/",
            "/th/, /s/, /z/",
            "/r/, /l/, /y/"
          ],
          correctAnswer: 0,
          explanation: "Sounds made primarily with the lips include /p/, /b/, /m/ (bilabial sounds)."
        },
        {
          id: 17,
          question: "What is a good practice strategy?",
          options: [
            "Focus on one sound at a time",
            "Practice all errors at once",
            "Only practice difficult words",
            "Practice only in therapy sessions"
          ],
          correctAnswer: 0,
          explanation: "Focusing on one sound at a time is most effective for speech sound practice."
        },
        {
          id: 18,
          question: "What are multi-sensory cues?",
          options: [
            "Using visual, tactile, and verbal cues",
            "Only using verbal instructions",
            "Only showing pictures",
            "Only correcting errors"
          ],
          correctAnswer: 0,
          explanation: "Multi-sensory cues involve using visual (seeing), tactile (feeling), and verbal (hearing) cues together."
        },
        {
          id: 19,
          question: "What should practice sessions be like?",
          options: [
            "Short and positive",
            "Long and intensive",
            "Only when child makes errors",
            "Very serious and formal"
          ],
          correctAnswer: 0,
          explanation: "Practice sessions should be short, positive, and fun to maintain motivation."
        },
        {
          id: 20,
          question: "What are nasals?",
          options: [
            "Sounds with air through nose",
            "Sounds with friction",
            "Sounds with complete blockage",
            "Smooth movement sounds"
          ],
          correctAnswer: 0,
          explanation: "Nasals are sounds where air flows through the nose, like /m/, /n/, /ng/."
        }
      ]
    },
    {
      id: 4,
      title: "Basic Assessment Techniques",
      completed: false,
      content: `
## **Module 4: Basic Assessment Techniques**

Assessment helps us understand a person's communication strengths and needs. This module covers simple observation and screening techniques that anyone can use to identify potential speech and language concerns.

### **Observation Skills for Communication**
Good observation is the first step in understanding communication skills. Here's what to look for:

**During Conversation, Observe:**
- **Does the person understand what you say?** (receptive language)
- **Can they express their ideas clearly?** (expressive language)
- **How do they participate in conversation?** (social communication)
- **Is their speech clear and easy to understand?** (articulation)

**Specifically Watch For:**
- Following directions appropriate for their age
- Answering questions appropriately
- Taking turns in conversation
- Staying on topic
- Using gestures or facial expressions to communicate
- Eye contact and attention during conversation

**Listen For:**
- Clear pronunciation of age-appropriate sounds
- Smooth, fluent speech (not too many repetitions or blocks)
- Appropriate voice quality (not too hoarse, loud, or soft)
- Grammar and sentence structure appropriate for age

Observation should happen during natural activities - play, meals, daily routines - not just formal testing situations.

### **Simple Screening Questions**
These questions can help identify if further assessment might be needed:

**For Young Children (2-5 years):**
1. Can you understand most of what your child says?
2. Does your child use words and sentences similar to other children their age?
3. Does your child follow simple directions?
4. Does your child ask questions and show curiosity about the world?
5. Does your child play and talk with other children?

**For School-Age Children (6-12 years):**
1. Can teachers and classmates understand your child easily?
2. Does your child participate in class discussions?
3. Does your child have friends and playdates?
4. Does your child understand school instructions?
5. Is your child keeping up with reading and writing tasks?

**For Any Age:**
1. Does the person seem frustrated when trying to communicate?
2. Do they avoid talking in certain situations?
3. Has anyone else expressed concern about their communication?
4. Are there family history of speech or language difficulties?
5. Has there been any significant change in communication skills?

If you answer "no" to several of these questions, it might be worth seeking a professional opinion.

### **Informal Assessment Activities**
These simple activities can give you valuable information about communication skills:

**For Language Skills:**
- **Following Directions:** Give 1, 2, or 3-step directions and observe if followed correctly
- **Vocabulary Check:** Ask "What is this?" for common objects
- **Sentence Length:** Have a conversation and note the longest sentences used
- **Story Telling:** Ask "What did you do today?" or "Tell me about this picture"

**For Speech Sounds:**
- **Sound Inventory:** Note which sounds are used correctly and which are difficult
- **Word Repetition:** Have them repeat words with target sounds
- **Connected Speech:** Listen during natural conversation for sound production
- **Sound Positions:** Check if sounds are correct at beginning, middle, and end of words

**For Social Communication:**
- **Conversation Sample:** Have a 5-minute conversation and observe turn-taking
- **Social Scenario:** "What would you do if..." questions
- **Nonverbal Cues:** See if they understand gestures and facial expressions
- **Topic Maintenance:** Observe if they stay on topic during conversation

### **Documenting Your Observations**
Good documentation helps track progress and share information with professionals. Include:

**What to Record:**
1. **Date and setting** (when and where observation occurred)
2. **Specific examples** of what was said or done
3. **Context** (what was happening at the time)
4. **Strengths observed** (what they did well)
5. **Concerns noted** (what was difficult)
6. **Comparison** to typical development for their age

**Sample Documentation:**
"October 15 - During play with cars. Child said 'Car go fast!' when pushing car. Could not answer 'Where is the car going?' Used pointing instead of words to show what he wanted. Played beside but not with other children."

**When to Seek Professional Help:**
- If you have ongoing concerns after several observations
- If the person is significantly behind same-age peers
- If communication difficulties affect daily life or learning
- If there's frustration or avoidance of communication
- If you're unsure but want peace of mind

Remember: Informal assessment helps identify concerns, but formal diagnosis should come from qualified professionals like speech-language pathologists.
`,
      quiz: [
        {
          id: 1,
          question: "What is the first step in understanding communication skills?",
          options: [
            "Good observation",
            "Formal testing",
            "Reading reports",
            "Asking other professionals"
          ],
          correctAnswer: 0,
          explanation: "Good observation is the first step in understanding someone's communication skills."
        },
        {
          id: 2,
          question: "What should you observe during conversation?",
          options: [
            "If they understand what you say",
            "Only their pronunciation",
            "Only their vocabulary",
            "Only their grammar"
          ],
          correctAnswer: 0,
          explanation: "During conversation, observe if they understand what you say (receptive language)."
        },
        {
          id: 3,
          question: "When should observation happen?",
          options: [
            "During natural activities",
            "Only during formal testing",
            "Only in quiet rooms",
            "Only with familiar people"
          ],
          correctAnswer: 0,
          explanation: "Observation should happen during natural activities like play, meals, and daily routines."
        },
        {
          id: 4,
          question: "What is a good screening question for young children?",
          options: [
            "Can you understand most of what your child says?",
            "Does your child read chapter books?",
            "Does your child speak multiple languages?",
            "Is your child always quiet?"
          ],
          correctAnswer: 0,
          explanation: "A good screening question is whether you can understand most of what your child says."
        },
        {
          id: 5,
          question: "What should you listen for in speech?",
          options: [
            "Clear pronunciation of age-appropriate sounds",
            "Perfect pronunciation of all sounds",
            "Complex vocabulary use",
            "Formal language only"
          ],
          correctAnswer: 0,
          explanation: "Listen for clear pronunciation of sounds appropriate for their age, not perfection."
        },
        {
          id: 6,
          question: "What is an informal assessment activity for language?",
          options: [
            "Following directions activity",
            "Written grammar test",
            "Reading comprehension test",
            "Spelling test"
          ],
          correctAnswer: 0,
          explanation: "A following directions activity is an informal way to assess language understanding."
        },
        {
          id: 7,
          question: "What should you document about observations?",
          options: [
            "Date, setting, and specific examples",
            "Only your opinions",
            "Only what was wrong",
            "Comparison to adults"
          ],
          correctAnswer: 0,
          explanation: "Document the date, setting, and specific examples of what you observed."
        },
        {
          id: 8,
          question: "What is a screening question for school-age children?",
          options: [
            "Can teachers and classmates understand your child?",
            "Does your child always get top grades?",
            "Is your child the class speaker?",
            "Does your child never make mistakes?"
          ],
          correctAnswer: 0,
          explanation: "For school-age children, ask if teachers and classmates can understand them easily."
        },
        {
          id: 9,
          question: "What should you watch for in social communication?",
          options: [
            "Taking turns in conversation",
            "Only vocabulary size",
            "Only pronunciation",
            "Only grammar use"
          ],
          correctAnswer: 0,
          explanation: "In social communication, watch for turn-taking in conversation."
        },
        {
          id: 10,
          question: "What is an activity to check speech sounds?",
          options: [
            "Have them repeat words with target sounds",
            "Give them a written test",
            "Have them read a book aloud",
            "Record them for hours"
          ],
          correctAnswer: 0,
          explanation: "Having them repeat words with target sounds is a simple way to check speech production."
        },
        {
          id: 11,
          question: "What should you include when documenting strengths?",
          options: [
            "What they did well",
            "Only what needs improvement",
            "Comparison to genius level",
            "What they should do better"
          ],
          correctAnswer: 0,
          explanation: "Always document what they did well (strengths) along with areas of concern."
        },
        {
          id: 12,
          question: "When should you seek professional help?",
          options: [
            "If concerns continue after several observations",
            "After one minor observation",
            "Only if school complains",
            "Only if family insists"
          ],
          correctAnswer: 0,
          explanation: "Seek professional help if concerns continue after several observations in different situations."
        },
        {
          id: 13,
          question: "What does observing 'context' mean?",
          options: [
            "What was happening at the time",
            "Only what was said",
            "Only who was present",
            "Only the time of day"
          ],
          correctAnswer: 0,
          explanation: "Context means what was happening at the time of observation - the situation and activities."
        },
        {
          id: 14,
          question: "What is a good activity to assess storytelling?",
          options: [
            "Ask 'What did you do today?'",
            "Have them write a story",
            "Give them a story to memorize",
            "Test them on story grammar"
          ],
          correctAnswer: 0,
          explanation: "Asking 'What did you do today?' is a natural way to assess storytelling skills."
        },
        {
          id: 15,
          question: "What should you compare observations to?",
          options: [
            "Typical development for their age",
            "Adult communication skills",
            "Perfect communication",
            "The best speaker you know"
          ],
          correctAnswer: 0,
          explanation: "Compare observations to typical development for their age, not to perfection or adult skills."
        },
        {
          id: 16,
          question: "What is important to note about voice quality?",
          options: [
            "If it's appropriate (not too hoarse, loud, or soft)",
            "If it's always loud enough",
            "If it's musical sounding",
            "If it's deep like an adult's"
          ],
          correctAnswer: 0,
          explanation: "Note if voice quality is appropriate - not too hoarse, too loud, or too soft for the situation."
        },
        {
          id: 17,
          question: "What should you observe about attention?",
          options: [
            "Eye contact and attention during conversation",
            "If they can sit still for hours",
            "If they never look away",
            "If they always focus perfectly"
          ],
          correctAnswer: 0,
          explanation: "Observe eye contact and attention during conversation as part of social communication."
        },
        {
          id: 18,
          question: "What is a screening question about frustration?",
          options: [
            "Do they seem frustrated when trying to communicate?",
            "Do they always communicate perfectly?",
            "Do they never get frustrated?",
            "Do they avoid all communication?"
          ],
          correctAnswer: 0,
          explanation: "Ask if they seem frustrated when trying to communicate - this can indicate communication difficulties."
        },
        {
          id: 19,
          question: "What should you document about the setting?",
          options: [
            "When and where observation occurred",
            "Only the time of day",
            "Only who was present",
            "Only the activity name"
          ],
          correctAnswer: 0,
          explanation: "Document both when (date/time) and where (location/setting) the observation occurred."
        },
        {
          id: 20,
          question: "Who should provide formal diagnosis?",
          options: [
            "Qualified professionals like speech-language pathologists",
            "Teachers only",
            "Parents only",
            "Anyone who observes"
          ],
          correctAnswer: 0,
          explanation: "Formal diagnosis should come from qualified professionals like speech-language pathologists."
        }
      ]
    },
    {
      id: 5,
      title: "Simple Intervention Strategies",
      completed: false,
      content: `
## **Module 5: Simple Intervention Strategies**

This module provides practical, evidence-based strategies that can support communication development. These techniques can be used by parents, teachers, and caregivers in everyday situations.

### **Language Facilitation Techniques**
These techniques help encourage language development naturally throughout the day:

**Self-Talk:**
- Talk about what YOU are doing
- "I'm washing the dishes. The water is warm."
- "I'm looking for my keys. Where did I put them?"
- This models language without demanding a response

**Parallel Talk:**
- Talk about what THE CHILD is doing
- "You're building a tower! It's getting tall!"
- "You chose the red crayon. You're drawing a circle."
- This connects language directly to the child's experience

**Expansion:**
- Add words to what the child says
- Child: "Dog!" Adult: "Yes, big dog!"
- Child: "Car go." Adult: "The car goes fast!"
- This models more complete language naturally

**Extension:**
- Add new information to what the child says
- Child: "Dog!" Adult: "Yes, the dog is brown."
- Child: "Car go." Adult: "The car goes to the store."
- This builds vocabulary and concepts

**Modeling:**
- Provide correct examples without correction
- Child: "Him running." Adult: "He is running fast!"
- Child: "I goed park." Adult: "You went to the park yesterday!"
- This teaches through positive examples

**Choice Questions:**
- Offer two acceptable choices
- "Do you want milk or juice?"
- "Should we read this book or that book?"
- This encourages communication and decision-making

**Wait Time:**
- Pause and look expectantly after speaking
- Count silently to 10 before speaking again
- This gives processing time and encourages response

**Sabotage:**
- Create situations that require communication
- Give a little bit of something so they need to ask for more
- "Forget" to give them something they need
- Put favorite toys in clear containers they can't open

### **Speech Sound Support Strategies**
These techniques can help with clear speech development:

**Auditory Bombardment:**
- Provide lots of examples of the target sound
- Read books with many words containing the sound
- Play "I Spy" with the target sound
- Sing songs emphasizing the target sound

**Sound Awareness Activities:**
- Help the child hear the difference between sounds
- "Listen: top...cop...top...cop"
- "Which one is different: sat, sat, cat?"
- "Find things that start with /k/"

**Place and Manner Cues:**
- Help the child feel how sounds are made
- "Watch my lips for /p/" (visual cue)
- "Feel your throat for /g/" (tactile cue)
- "Put your tongue up for /l/" (verbal cue)

**Minimal Pairs Practice:**
- Practice words that differ by one sound
- "Say 'key'...now say 'tea'"
- "Say 'fan'...now say 'van'"
- This highlights the importance of the target sound

**Functional Word Practice:**
- Practice sounds in important, frequently used words
- Child's name, favorite activities, family names
- Words they need for daily communication
- This increases motivation and carryover

### **Creating Communication Opportunities**
Set up the environment to encourage communication:

**During Play:**
- Sit at the child's level
- Follow the child's lead in play
- Imitate the child's actions and sounds
- Add language to the play ("The car goes vroom!")

**During Meals:**
- Offer small portions to encourage requesting more
- Offer choices between foods
- Talk about textures, tastes, and smells
- Model appropriate mealtime language

**During Reading:**
- Let the child choose the book
- Point to pictures and name them
- Ask simple questions about the story
- Pause and let the child fill in familiar words

**During Daily Routines:**
- Describe each step of routines
- Use consistent language for routines
- Create predictable sequences
- Wait for communication during transitions

### **Building Confidence and Reducing Pressure**
Communication should be positive and rewarding:

**Focus on the Message, Not Perfect Speech:**
- Respond to what the child says, not how they say it
- Show you understand their message
- Keep communication flowing naturally

**Reduce Communication Pressure:**
- Don't demand speech in stressful situations
- Accept all communication attempts (words, gestures, sounds)
- Create low-pressure communication situations

**Celebrate Communication Attempts:**
- Respond positively to all communication
- Show excitement when they communicate
- Value the effort, not just perfection

**Make Communication Fun:**
- Use games, songs, and play
- Keep interactions light and enjoyable
- Follow the child's interests
- End activities while they're still enjoying them

Remember: The goal is successful communication, not perfect speech. Every interaction is an opportunity to support communication development!
`,
      quiz: [
        {
          id: 1,
          question: "What is self-talk?",
          options: [
            "Talking about what you are doing",
            "Talking about what the child is doing",
            "Correcting the child's speech",
            "Having the child talk to themselves"
          ],
          correctAnswer: 0,
          explanation: "Self-talk means talking about what YOU are doing, modeling language naturally."
        },
        {
          id: 2,
          question: "What is parallel talk?",
          options: [
            "Talking about what the child is doing",
            "Talking about what you are doing",
            "Having two conversations at once",
            "Correcting errors immediately"
          ],
          correctAnswer: 0,
          explanation: "Parallel talk means talking about what THE CHILD is doing, connecting language to their experience."
        },
        {
          id: 3,
          question: "What is expansion?",
          options: [
            "Adding words to what the child says",
            "Correcting grammar errors",
            "Asking many questions",
            "Changing the topic completely"
          ],
          correctAnswer: 0,
          explanation: "Expansion means adding words to make a more complete sentence (Child: 'Dog!' Adult: 'Yes, big dog!')."
        },
        {
          id: 4,
          question: "What is extension?",
          options: [
            "Adding new information to what the child says",
            "Making sentences longer unnecessarily",
            "Correcting pronunciation",
            "Asking unrelated questions"
          ],
          correctAnswer: 0,
          explanation: "Extension means adding new information (Child: 'Dog!' Adult: 'Yes, the dog is brown.')."
        },
        {
          id: 5,
          question: "What is modeling?",
          options: [
            "Providing correct examples without correction",
            "Making the child repeat perfectly",
            "Showing how to write words",
            "Using complex vocabulary"
          ],
          correctAnswer: 0,
          explanation: "Modeling means providing correct examples naturally without directly correcting errors."
        },
        {
          id: 6,
          question: "What are choice questions?",
          options: [
            "Offering two acceptable choices",
            "Asking trick questions",
            "Giving unlimited choices",
            "Asking rhetorical questions"
          ],
          correctAnswer: 0,
          explanation: "Choice questions offer two acceptable options ('Do you want milk or juice?')."
        },
        {
          id: 7,
          question: "What is wait time?",
          options: [
            "Pausing and looking expectantly after speaking",
            "Waiting until child is perfect",
            "Not responding at all",
            "Talking slowly only"
          ],
          correctAnswer: 0,
          explanation: "Wait time means pausing and looking expectantly to give processing time and encourage response."
        },
        {
          id: 8,
          question: "What is sabotage?",
          options: [
            "Creating situations that require communication",
            "Breaking toys intentionally",
            "Making communication difficult",
            "Ignoring the child"
          ],
          correctAnswer: 0,
          explanation: "Sabotage means creating situations that require communication, like giving small portions."
        },
        {
          id: 9,
          question: "What is auditory bombardment?",
          options: [
            "Providing lots of examples of target sound",
            "Speaking very loudly",
            "Repeating corrections many times",
            "Playing loud background music"
          ],
          correctAnswer: 0,
          explanation: "Auditory bombardment means providing many examples of the target sound in different contexts."
        },
        {
          id: 10,
          question: "What are minimal pairs?",
          options: [
            "Words that differ by one sound",
            "Words that mean the same",
            "Very small word lists",
            "Words that are easy to say"
          ],
          correctAnswer: 0,
          explanation: "Minimal pairs are words that differ by only one sound (key/tea, fan/van)."
        },
        {
          id: 11,
          question: "What are functional words?",
          options: [
            "Important, frequently used words",
            "Complex technical terms",
            "Words from foreign languages",
            "Rare vocabulary words"
          ],
          correctAnswer: 0,
          explanation: "Functional words are important, frequently used words like names, favorite things, daily needs."
        },
        {
          id: 12,
          question: "How should you position yourself during play?",
          options: [
            "Sit at the child's level",
            "Stand above the child",
            "Sit far away",
            "Move around constantly"
          ],
          correctAnswer: 0,
          explanation: "Sitting at the child's level during play helps engagement and communication."
        },
        {
          id: 13,
          question: "What should you focus on during communication?",
          options: [
            "The message, not perfect speech",
            "Perfect pronunciation only",
            "Complex vocabulary use",
            "Grammatical perfection"
          ],
          correctAnswer: 0,
          explanation: "Focus on understanding and responding to the message, not achieving perfect speech."
        },
        {
          id: 14,
          question: "How can you reduce communication pressure?",
          options: [
            "Don't demand speech in stressful situations",
            "Make them talk in all situations",
            "Correct every error immediately",
            "Set high expectations always"
          ],
          correctAnswer: 0,
          explanation: "Reduce pressure by not demanding speech in stressful or high-pressure situations."
        },
        {
          id: 15,
          question: "What should you celebrate?",
          options: [
            "All communication attempts",
            "Only perfect speech",
            "Only complex sentences",
            "Only when initiated by child"
          ],
          correctAnswer: 0,
          explanation: "Celebrate all communication attempts - words, gestures, sounds - to encourage more communication."
        },
        {
          id: 16,
          question: "What is sound awareness?",
          options: [
            "Helping child hear differences between sounds",
            "Making child aware of all errors",
            "Pointing out every mistake",
            "Testing all sounds daily"
          ],
          correctAnswer: 0,
          explanation: "Sound awareness activities help the child hear differences between sounds (top/cop, fan/van)."
        },
        {
          id: 17,
          question: "What are place and manner cues?",
          options: [
            "Helping child feel how sounds are made",
            "Showing where sounds are written",
            "Teaching sound spelling rules",
            "Grading sound production"
          ],
          correctAnswer: 0,
          explanation: "Place and manner cues help the child feel how sounds are made (visual, tactile, verbal cues)."
        },
        {
          id: 18,
          question: "How can you create communication opportunities during meals?",
          options: [
            "Offer small portions to encourage requesting",
            "Give everything without asking",
            "Serve meals in silence",
            "Only talk about food"
          ],
          correctAnswer: 0,
          explanation: "Offering small portions encourages the child to request more, creating communication opportunities."
        },
        {
          id: 19,
          question: "What should communication be?",
          options: [
            "Fun and rewarding",
            "Serious work only",
            "Formal and structured",
            "Quiet and reserved"
          ],
          correctAnswer: 0,
          explanation: "Communication should be fun, rewarding, and enjoyable to encourage more interaction."
        },
        {
          id: 20,
          question: "When should you end activities?",
          options: [
            "While the child is still enjoying them",
            "After a set time always",
            "When the child gets bored",
            "When you get tired"
          ],
          correctAnswer: 0,
          explanation: "End activities while the child is still enjoying them to keep communication positive."
        }
      ]
    },
    {
      id: 6,
      title: "Working with Different Age Groups",
      completed: false,
      content: `
## **Module 6: Working with Different Age Groups**

Effective communication support varies across different ages and stages. This module explores how to adapt your approach for infants, toddlers, preschoolers, school-age children, and adults.

### **Supporting Infants (0-12 months)**
Early communication begins from birth. Here's how to support it:

**Respond to All Communication:**
- Respond to cries, coos, and babbles
- Imitate the baby's sounds
- Make eye contact during feeding and diaper changes
- Talk in a warm, responsive voice

**Create Communication Routines:**
- Use consistent language during daily care
- Sing simple songs during routines
- Play peek-a-boo and patty-cake
- Read board books with simple pictures

**Focus on Foundations:**
- Turn-taking (you make a sound, wait for baby to respond)
- Joint attention (looking at things together)
- Early gestures (waving, pointing, reaching)
- Sound play (making different sounds together)

**Key Activities:**
- Face-to-face interaction during awake times
- Simple back-and-forth sound games
- Exploring different textures and sounds
- Gentle movement songs and rhymes

### **Supporting Toddlers (1-3 years)**
Toddlers are exploding with language development. Support them by:

**Following Their Lead:**
- Talk about what interests them
- Join in their play at their level
- Use simple, clear language
- Expand on their single words

**Create Language-Rich Play:**
- Pretend play with dolls, cars, kitchen
- Building with blocks while describing
- Simple puzzles with naming pieces
- Outdoor exploration with describing words

**Support Emerging Speech:**
- Accept all communication attempts
- Model correct production naturally
- Play with sounds and words
- Read simple, repetitive books

**Key Activities:**
- Dressing and feeding with language
- Simple household "helping" tasks
- Music and movement with words
- Water and sand play with describing

### **Supporting Preschoolers (3-5 years)**
Preschoolers are developing complex language skills. Support them by:

**Encouraging Conversations:**
- Ask open-ended questions
- Listen to their stories and ideas
- Have back-and-forth conversations
- Talk about past and future events

**Building Pre-Literacy Skills:**
- Notice sounds in words (rhyming)
- Play with syllables (clapping names)
- Talk about print in the environment
- Develop narrative skills (story telling)

**Expanding Social Communication:**
- Practice turn-taking in games
- Role-play social situations
- Talk about feelings and perspectives
- Practice problem-solving with words

**Key Activities:**
- Arts and crafts with describing
- Cooking with step-by-step language
- Nature walks with observation language
- Board games with social language

### **Supporting School-Age Children (6-12 years)**
School-age children need support with academic and social language:

**Academic Language Support:**
- Help with homework vocabulary
- Talk about classroom expectations
- Develop study and organization language
- Support reading comprehension

**Social Communication Development:**
- Discuss friendship skills
- Practice conversation skills
- Role-play problem situations
- Develop perspective-taking

**Metacognitive Skills:**
- Talk about thinking and learning
- Develop self-advocacy skills
- Practice explaining their thinking
- Learn to ask for help appropriately

**Key Activities:**
- Projects with planning language
- Games with complex rules
- Book discussions
- Technology use with supervision

### **Supporting Adolescents and Adults**
Older individuals may need support with different communication challenges:

**Life Skills Communication:**
- Job interview skills
- Social situation navigation
- Workplace communication
- Community participation

**Compensatory Strategies:**
- Using technology to support communication
- Developing self-advocacy skills
- Creating communication supports
- Building confidence in communication

**Specific Need Areas:**
- Accent modification if desired
- Professional communication skills
- Public speaking confidence
- Social communication in new contexts

**Key Approaches:**
- Goal-oriented therapy
- Real-life practice situations
- Technology integration
- Self-monitoring development

### **General Principles Across All Ages**
Regardless of age, these principles apply:

**Individualize Your Approach:**
- Consider personality, interests, and learning style
- Respect cultural and linguistic background
- Build on strengths while addressing needs
- Set realistic, meaningful goals

**Make it Functional:**
- Work on skills needed for daily life
- Practice in natural contexts
- Ensure skills generalize to real situations
- Measure progress in real-world terms

**Build Confidence:**
- Focus on successes, not just challenges
- Create positive communication experiences
- Develop self-advocacy skills
- Celebrate progress, no matter how small

**Collaborate with Others:**
- Work with family members
- Coordinate with teachers or employers
- Share strategies across settings
- Build supportive communication environments

Remember: Effective communication support meets people where they are and helps them reach where they want to go!
`,
      quiz: [
        {
          id: 1,
          question: "How should you respond to infant communication?",
          options: [
            "Respond to all cries, coos, and babbles",
            "Only respond to words",
            "Ignore early sounds",
            "Correct all sounds immediately"
          ],
          correctAnswer: 0,
          explanation: "Respond to all infant communication - cries, coos, and babbles - to encourage more communication."
        },
        {
          id: 2,
          question: "What is important for infant communication?",
          options: [
            "Turn-taking and joint attention",
            "Perfect pronunciation",
            "Complex vocabulary",
            "Reading skills"
          ],
          correctAnswer: 0,
          explanation: "For infants, focus on turn-taking, joint attention, early gestures, and sound play."
        },
        {
          id: 3,
          question: "How should you interact with toddlers?",
          options: [
            "Follow their lead in play and conversation",
            "Direct all their activities",
            "Only do educational activities",
            "Correct every error immediately"
          ],
          correctAnswer: 0,
          explanation: "With toddlers, follow their lead - talk about what interests them and join their play at their level."
        },
        {
          id: 4,
          question: "What should you do with toddler communication attempts?",
          options: [
            "Accept all attempts and expand on them",
            "Only accept perfect speech",
            "Correct every attempt",
            "Ignore imperfect attempts"
          ],
          correctAnswer: 0,
          explanation: "Accept all toddler communication attempts and expand on them to model more complete language."
        },
        {
          id: 5,
          question: "What should you encourage with preschoolers?",
          options: [
            "Conversations and storytelling",
            "Silent independent work",
            "Memorization of facts",
            "Perfect handwriting"
          ],
          correctAnswer: 0,
          explanation: "With preschoolers, encourage conversations, storytelling, and developing narrative skills."
        },
        {
          id: 6,
          question: "What pre-literacy skills are important for preschoolers?",
          options: [
            "Noticing sounds in words and rhyming",
            "Reading chapter books",
            "Writing essays",
            "Spelling complex words"
          ],
          correctAnswer: 0,
          explanation: "Preschool pre-literacy skills include noticing sounds in words, rhyming, and syllable awareness."
        },
        {
          id: 7,
          question: "What do school-age children need support with?",
          options: [
            "Academic and social language",
            "Basic crying and cooing",
            "First words only",
            "Simple play skills"
          ],
          correctAnswer: 0,
          explanation: "School-age children need support with academic language for learning and social language for friendships."
        },
        {
          id: 8,
          question: "What are metacognitive skills?",
          options: [
            "Thinking about thinking and learning",
            "Memorization techniques",
            "Physical coordination",
            "Artistic abilities"
          ],
          correctAnswer: 0,
          explanation: "Metacognitive skills involve thinking about one's own thinking and learning processes."
        },
        {
          id: 9,
          question: "What might adolescents need support with?",
          options: [
            "Job interview and workplace communication",
            "Basic crying responses",
            "First word development",
            "Simple play skills"
          ],
          correctAnswer: 0,
          explanation: "Adolescents may need support with job interviews, workplace communication, and social navigation."
        },
        {
          id: 10,
          question: "What are compensatory strategies?",
          options: [
            "Using technology to support communication",
            "Avoiding communication",
            "Speaking perfectly always",
            "Memorizing scripts"
          ],
          correctAnswer: 0,
          explanation: "Compensatory strategies are ways to support communication, like using technology or visual aids."
        },
        {
          id: 11,
          question: "What should you do across all ages?",
          options: [
            "Individualize your approach",
            "Use exactly the same methods",
            "Only focus on speech sounds",
            "Ignore personality differences"
          ],
          correctAnswer: 0,
          explanation: "Always individualize your approach based on personality, interests, and learning style."
        },
        {
          id: 12,
          question: "What does 'make it functional' mean?",
          options: [
            "Work on skills needed for daily life",
            "Only do therapy exercises",
            "Focus on theoretical knowledge",
            "Practice in isolation only"
          ],
          correctAnswer: 0,
          explanation: "Making it functional means working on skills the person actually needs in their daily life."
        },
        {
          id: 13,
          question: "How can you build confidence?",
          options: [
            "Focus on successes and celebrate progress",
            "Point out all errors",
            "Set impossible goals",
            "Compare to others negatively"
          ],
          correctAnswer: 0,
          explanation: "Build confidence by focusing on successes, creating positive experiences, and celebrating progress."
        },
        {
          id: 14,
          question: "Why collaborate with others?",
          options: [
            "To share strategies across settings",
            "To prove you're right",
            "To avoid responsibility",
            "To criticize others' approaches"
          ],
          correctAnswer: 0,
          explanation: "Collaborate to share effective strategies across different settings (home, school, community)."
        },
        {
          id: 15,
          question: "What are key activities for infants?",
          options: [
            "Face-to-face interaction and sound games",
            "Homework and studying",
            "Public speaking practice",
            "Job interview practice"
          ],
          correctAnswer: 0,
          explanation: "Key infant activities include face-to-face interaction, sound games, and exploring textures."
        },
        {
          id: 16,
          question: "What should toddler play include?",
          options: [
            "Pretend play and simple puzzles",
            "Complex board games",
            "Silent reading time",
            "Written homework"
          ],
          correctAnswer: 0,
          explanation: "Toddler play should include pretend play, simple puzzles, blocks, and outdoor exploration."
        },
        {
          id: 17,
          question: "What should preschool activities develop?",
          options: [
            "Narrative skills and social communication",
            "Corporate presentation skills",
            "Advanced writing skills",
            "Foreign language fluency"
          ],
          correctAnswer: 0,
          explanation: "Preschool activities should develop narrative skills, social communication, and pre-literacy skills."
        },
        {
          id: 18,
          question: "What do school-age activities involve?",
          options: [
            "Projects with planning and book discussions",
            "Only therapy worksheets",
            "Isolated sound practice only",
            "Memorization drills"
          ],
          correctAnswer: 0,
          explanation: "School-age activities involve projects, book discussions, games with rules, and real-life practice."
        },
        {
          id: 19,
          question: "What is a general principle for all ages?",
          options: [
            "Build on strengths while addressing needs",
            "Focus only on weaknesses",
            "Ignore individual differences",
            "Use one-size-fits-all approach"
          ],
          correctAnswer: 0,
          explanation: "Always build on strengths while addressing needs, considering the whole person."
        },
        {
          id: 20,
          question: "What should communication support help people do?",
          options: [
            "Reach where they want to go",
            "Become perfect communicators",
            "Sound exactly like everyone else",
            "Never make mistakes"
          ],
          correctAnswer: 0,
          explanation: "Communication support should help people reach their personal communication goals, not achieve perfection."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What is the main goal of speech therapy?",
      options: [
        "To help people communicate as effectively as possible",
        "To make everyone speak perfectly",
        "To eliminate all speech differences",
        "To teach foreign languages"
      ],
      correctAnswer: 0,
      explanation: "Speech therapy aims to help people communicate effectively in daily life, not achieve perfection.",
      module: 1
    },
    {
      id: 2,
      question: "What is the difference between speech and language?",
      options: [
        "Speech is HOW we say, Language is WHAT we say",
        "They are exactly the same thing",
        "Language is HOW we say, Speech is WHAT we say",
        "Speech is only for adults, Language for children"
      ],
      correctAnswer: 0,
      explanation: "Speech is the physical act of talking, while Language is the system of words and rules.",
      module: 1
    },
    {
      id: 3,
      question: "By what age do children typically put two words together?",
      options: [
        "2 years old",
        "6 months old",
        "4 years old",
        "1 year old"
      ],
      correctAnswer: 0,
      explanation: "Children typically start putting two words together around 2 years old.",
      module: 2
    },
    {
      id: 4,
      question: "What is expressive language delay?",
      options: [
        "Child understands but has trouble using language",
        "Child cannot hear properly",
        "Child speaks too quickly",
        "Child uses complex vocabulary"
      ],
      correctAnswer: 0,
      explanation: "Expressive language delay means difficulty using language to communicate.",
      module: 2
    },
    {
      id: 5,
      question: "What are voiced sounds?",
      options: [
        "Sounds where vocal cords vibrate",
        "Sounds made only with lips",
        "Sounds that are always loud",
        "Sounds made without air"
      ],
      correctAnswer: 0,
      explanation: "Voiced sounds involve vocal cord vibration, like /b/, /d/, /g/.",
      module: 3
    },
    {
      id: 6,
      question: "Which sounds develop early (by age 3)?",
      options: [
        "/p/, /b/, /m/, /w/",
        "/th/, /r/, /s/, /z/",
        "/sh/, /ch/, /j/",
        "All sounds develop together"
      ],
      correctAnswer: 0,
      explanation: "Early sounds include /p/, /b/, /m/, /w/, /h/, /n/.",
      module: 3
    },
    {
      id: 7,
      question: "What is the first step in understanding communication skills?",
      options: [
        "Good observation",
        "Formal testing",
        "Reading reports",
        "Asking other professionals"
      ],
      correctAnswer: 0,
      explanation: "Observation during natural activities is the first step in assessment.",
      module: 4
    },
    {
      id: 8,
      question: "What should you document during observations?",
      options: [
        "Date, setting, and specific examples",
        "Only your opinions",
        "Only what was wrong",
        "Comparison to adults"
      ],
      correctAnswer: 0,
      explanation: "Document date, setting, specific examples, and context of observations.",
      module: 4
    },
    {
      id: 9,
      question: "What is self-talk?",
      options: [
        "Talking about what you are doing",
        "Talking about what the child is doing",
        "Correcting the child's speech",
        "Having the child talk to themselves"
      ],
      correctAnswer: 0,
      explanation: "Self-talk models language by describing your own actions.",
      module: 5
    },
    {
      id: 10,
      question: "What is expansion?",
      options: [
        "Adding words to what the child says",
        "Correcting grammar errors",
        "Asking many questions",
        "Changing the topic"
      ],
      correctAnswer: 0,
      explanation: "Expansion adds words to make more complete sentences.",
      module: 5
    },
    {
      id: 11,
      question: "How should you respond to infant communication?",
      options: [
        "Respond to all cries, coos, and babbles",
        "Only respond to words",
        "Ignore early sounds",
        "Correct all sounds"
      ],
      correctAnswer: 0,
      explanation: "Respond to all infant communication to encourage development.",
      module: 6
    },
    {
      id: 12,
      question: "What should you do with toddlers?",
      options: [
        "Follow their lead in play",
        "Direct all activities",
        "Only do educational activities",
        "Correct every error"
      ],
      correctAnswer: 0,
      explanation: "Following toddlers' lead encourages engagement and learning.",
      module: 6
    },
    {
      id: 13,
      question: "What are the three main communication components?",
      options: [
        "Expressive, Receptive, and Social communication",
        "Speech, Hearing, and Writing",
        "Talking, Listening, and Reading",
        "Verbal, Nonverbal, and Written"
      ],
      correctAnswer: 0,
      explanation: "The three components are Expressive, Receptive, and Social communication.",
      module: 1
    },
    {
      id: 14,
      question: "By what age is speech typically understood by most people?",
      options: [
        "4 years old",
        "1 year old",
        "2 years old",
        "6 months old"
      ],
      correctAnswer: 0,
      explanation: "By age 4, most children's speech is understood by unfamiliar listeners.",
      module: 2
    },
    {
      id: 15,
      question: "What is a sound substitution?",
      options: [
        "Saying one sound for another",
        "Omitting a sound completely",
        "Making a sound distorted",
        "Adding extra sounds"
      ],
      correctAnswer: 0,
      explanation: "Substitution means using one sound instead of another.",
      module: 3
    },
    {
      id: 16,
      question: "When should you seek professional help?",
      options: [
        "If concerns continue after several observations",
        "After one minor observation",
        "Only if school complains",
        "Only if family insists"
      ],
      correctAnswer: 0,
      explanation: "Seek help if concerns persist across different situations and times.",
      module: 4
    },
    {
      id: 17,
      question: "What is parallel talk?",
      options: [
        "Talking about what the child is doing",
        "Talking about what you are doing",
        "Having two conversations",
        "Correcting errors"
      ],
      correctAnswer: 0,
      explanation: "Parallel talk describes the child's actions and experiences.",
      module: 5
    },
    {
      id: 18,
      question: "What should preschool activities develop?",
      options: [
        "Narrative skills and social communication",
        "Corporate presentation skills",
        "Advanced writing skills",
        "Foreign language fluency"
      ],
      correctAnswer: 0,
      explanation: "Preschoolers need narrative and social communication development.",
      module: 6
    },
    {
      id: 19,
      question: "What does receptive language involve?",
      options: [
        "Understanding what others communicate",
        "Expressing thoughts and ideas",
        "Using language socially",
        "Producing clear speech"
      ],
      correctAnswer: 0,
      explanation: "Receptive language is understanding language from others.",
      module: 1
    },
    {
      id: 20,
      question: "How can parents support language development?",
      options: [
        "Talk throughout the day about daily activities",
        "Only use complex vocabulary",
        "Correct every mistake immediately",
        "Avoid repeating books"
      ],
      correctAnswer: 0,
      explanation: "Talking about daily activities provides natural language learning opportunities.",
      module: 2
    },
    {
      id: 21,
      question: "What are voiceless sounds?",
      options: [
        "Sounds where vocal cords don't vibrate",
        "Sounds that are always quiet",
        "Sounds made only with nose",
        "Sounds that don't use mouth"
      ],
      correctAnswer: 0,
      explanation: "Voiceless sounds like /p/, /t/, /k/ have no vocal cord vibration.",
      module: 3
    },
    {
      id: 22,
      question: "What should you observe during conversation?",
      options: [
        "If they understand what you say",
        "Only their pronunciation",
        "Only their vocabulary",
        "Only their grammar"
      ],
      correctAnswer: 0,
      explanation: "Observe understanding, expression, and participation in conversation.",
      module: 4
    },
    {
      id: 23,
      question: "What is modeling?",
      options: [
        "Providing correct examples without correction",
        "Making child repeat perfectly",
        "Showing how to write words",
        "Using complex vocabulary"
      ],
      correctAnswer: 0,
      explanation: "Modeling gives correct examples naturally.",
      module: 5
    },
    {
      id: 24,
      question: "What do school-age children need support with?",
      options: [
        "Academic and social language",
        "Basic crying and cooing",
        "First words only",
        "Simple play skills"
      ],
      correctAnswer: 0,
      explanation: "School-age children need academic and social language support.",
      module: 6
    },
    {
      id: 25,
      question: "What is social communication?",
      options: [
        "Using language appropriately in social situations",
        "Speaking loudly in groups",
        "Using formal language only",
        "Avoiding conversation"
      ],
      correctAnswer: 0,
      explanation: "Social communication involves appropriate language use in social contexts.",
      module: 1
    },
    {
      id: 26,
      question: "What is a good way to offer choices?",
      options: [
        "'Do you want apple or banana?'",
        "'You must eat fruit now'",
        "'What should we have for dinner?'",
        "'Tell me all fruits you know'"
      ],
      correctAnswer: 0,
      explanation: "Simple either/or choices encourage communication.",
      module: 2
    },
    {
      id: 27,
      question: "When do most children master /r/ sound?",
      options: [
        "Around 6-7 years old",
        "By 2 years old",
        "By 3 years old",
        "Not until teenage years"
      ],
      correctAnswer: 0,
      explanation: "/r/ is typically mastered around 6-7 years old.",
      module: 3
    },
    {
      id: 28,
      question: "What is an informal assessment activity for language?",
      options: [
        "Following directions activity",
        "Written grammar test",
        "Reading comprehension test",
        "Spelling test"
      ],
      correctAnswer: 0,
      explanation: "Following directions assesses understanding naturally.",
      module: 4
    },
    {
      id: 29,
      question: "What are choice questions?",
      options: [
        "Offering two acceptable choices",
        "Asking trick questions",
        "Giving unlimited choices",
        "Asking rhetorical questions"
      ],
      correctAnswer: 0,
      explanation: "Choice questions give limited, acceptable options.",
      module: 5
    },
    {
      id: 30,
      question: "What should you do across all ages?",
      options: [
        "Individualize your approach",
        "Use exactly the same methods",
        "Only focus on speech sounds",
        "Ignore personality differences"
      ],
      correctAnswer: 0,
      explanation: "Always consider individual differences and needs.",
      module: 6
    },
    {
      id: 31,
      question: "What do speech therapists also help with besides talking?",
      options: [
        "Swallowing food and drink safely",
        "Improving athletic performance",
        "Teaching musical instruments",
        "Developing computer skills"
      ],
      correctAnswer: 0,
      explanation: "Speech therapists also address swallowing difficulties.",
      module: 1
    },
    {
      id: 32,
      question: "What does 'follow your child's lead' mean?",
      options: [
        "Talk about what interests your child",
        "Make your child talk about your interests",
        "Ignore your child's interests",
        "Only talk about educational topics"
      ],
      correctAnswer: 0,
      explanation: "Following the child's interests increases engagement.",
      module: 2
    },
    {
      id: 33,
      question: "What is a developmental error?",
      options: [
        "Typical for a child's age",
        "Always needs therapy",
        "Never goes away on its own",
        "Only in adults"
      ],
      correctAnswer: 0,
      explanation: "Developmental errors are normal for the child's age.",
      module: 3
    },
    {
      id: 34,
      question: "What should you compare observations to?",
      options: [
        "Typical development for their age",
        "Adult communication skills",
        "Perfect communication",
        "The best speaker you know"
      ],
      correctAnswer: 0,
      explanation: "Compare to typical development, not perfection.",
      module: 4
    },
    {
      id: 35,
      question: "What is wait time?",
      options: [
        "Pausing and looking expectantly after speaking",
        "Waiting until child is perfect",
        "Not responding at all",
        "Talking slowly only"
      ],
      correctAnswer: 0,
      explanation: "Wait time gives processing and response time.",
      module: 5
    },
    {
      id: 36,
      question: "What are key activities for infants?",
      options: [
        "Face-to-face interaction and sound games",
        "Homework and studying",
        "Public speaking practice",
        "Job interview practice"
      ],
      correctAnswer: 0,
      explanation: "Infants need interactive, sensory-rich activities.",
      module: 6
    },
    {
      id: 37,
      question: "Good communication requires:",
      options: [
        "Clear speech and effective language skills",
        "Only perfect pronunciation",
        "Speaking multiple languages",
        "Using complex vocabulary"
      ],
      correctAnswer: 0,
      explanation: "Effective communication combines speech and language skills.",
      module: 1
    },
    {
      id: 38,
      question: "What should parents do with communication attempts?",
      options: [
        "Respond to all attempts, even if not perfect",
        "Only respond to perfect speech",
        "Ignore imperfect attempts",
        "Correct every attempt"
      ],
      correctAnswer: 0,
      explanation: "Responding to all attempts encourages more communication.",
      module: 2
    },
    {
      id: 39,
      question: "What is the best way to correct speech errors?",
      options: [
        "Model the correct production naturally",
        "Say 'That's wrong' immediately",
        "Make them repeat until perfect",
        "Ignore all errors"
      ],
      correctAnswer: 0,
      explanation: "Modeling correct production is more effective than direct correction.",
      module: 3
    },
    {
      id: 40,
      question: "Who should provide formal diagnosis?",
      options: [
        "Qualified professionals like speech-language pathologists",
        "Teachers only",
        "Parents only",
        "Anyone who observes"
      ],
      correctAnswer: 0,
      explanation: "Formal diagnosis requires professional training and assessment.",
      module: 4
    }
  ]
};
