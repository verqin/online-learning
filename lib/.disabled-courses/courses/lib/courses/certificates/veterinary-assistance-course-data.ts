// Veterinary Assistance (Certificate) Course Data
// Complete course with 6 modules and final exam

export const veterinaryAssistanceCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "veterinary-assistance-certificate",
  title: "Veterinary Assistance (Certificate)",
  description: "Learn essential skills to assist veterinarians in animal care, clinic operations, and basic medical procedures. Perfect for animal lovers starting their veterinary career.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🐾",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Introduction to Veterinary Care",
      content: `# Welcome to Veterinary Assistance

This module introduces you to the world of animal healthcare. You'll learn what veterinary assistants do and the basic principles of animal care.

## What Veterinary Assistants Do
Veterinary assistants are important team members in animal clinics. They help veterinarians with daily tasks and ensure animals receive proper care. Their main duties include:
- Preparing examination rooms for animal check-ups
- Restraining animals safely during procedures
- Cleaning and sterilizing medical equipment
- Feeding and exercising hospitalized animals
- Assisting with basic laboratory tests

## Animal Care Fundamentals
Understanding animals begins with recognizing their basic needs. All animals require:
- **Proper nutrition** - balanced diet specific to their species
- **Clean water** - fresh water available at all times
- **Safe shelter** - protection from weather and hazards
- **Regular exercise** - movement for physical health
- **Mental stimulation** - activities to prevent boredom
- **Social interaction** - companionship with own species or humans

## Clinic Safety Practices
Working with animals requires following safety rules. These protect you, the animals, and your coworkers:
- Always wash hands before and after handling each animal
- Wear protective clothing like lab coats and gloves
- Use proper restraint techniques for different animals
- Keep work areas clean and organized
- Know location of emergency equipment like fire extinguishers
- Report any injuries or accidents immediately

## Common Animal Types in Clinics
Veterinary clinics typically care for these animal groups:
1. **Companion animals** - dogs, cats, rabbits, and small mammals
2. **Birds** - parrots, canaries, and other pet birds
3. **Reptiles** - snakes, lizards, and turtles
4. **Farm animals** - sometimes treated in rural clinics

Each animal type has specific handling requirements and medical needs that you will learn throughout this course.

## Basic Animal Behavior Signs
Recognizing animal behavior helps you provide better care:
- **Relaxed animals** have loose bodies and normal breathing
- **Stressed animals** may pant, tremble, or try to hide
- **Aggressive animals** show teeth, growl, or have raised fur
- **Painful animals** may whimper, limp, or protect sore areas

## Your Role in Animal Welfare
As a veterinary assistant, you become an advocate for animal health. Your observations help veterinarians make better treatment decisions. Always report changes in animal behavior or appetite to the veterinarian.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is one main duty of veterinary assistants mentioned in the content?",
          options: [
            "Performing surgery on animals",
            "Preparing examination rooms for check-ups",
            "Prescribing medications to pets",
            "Managing clinic finances"
          ],
          correctAnswer: 1,
          explanation: "Veterinary assistants prepare examination rooms for animal check-ups, which is one of their important daily duties."
        },
        {
          id: 2,
          question: "How many basic needs of animals are listed in the content?",
          options: [
            "Four needs",
            "Five needs",
            "Six needs",
            "Seven needs"
          ],
          correctAnswer: 2,
          explanation: "The content lists six basic animal needs: proper nutrition, clean water, safe shelter, regular exercise, mental stimulation, and social interaction."
        },
        {
          id: 3,
          question: "What should you always do before and after handling each animal?",
          options: [
            "Take a coffee break",
            "Wash your hands",
            "Update medical records",
            "Clean the entire clinic"
          ],
          correctAnswer: 1,
          explanation: "You should always wash hands before and after handling each animal to prevent disease transmission."
        },
        {
          id: 4,
          question: "Which animal type is NOT mentioned as commonly seen in clinics?",
          options: [
            "Companion animals",
            "Birds",
            "Reptiles",
            "Wild tigers"
          ],
          correctAnswer: 3,
          explanation: "Wild tigers are not mentioned; the common types listed are companion animals, birds, reptiles, and sometimes farm animals."
        },
        {
          id: 5,
          question: "What might a stressed animal do according to the behavior signs?",
          options: [
            "Show relaxed body posture",
            "Pant, tremble, or try to hide",
            "Eat enthusiastically",
            "Play with toys"
          ],
          correctAnswer: 1,
          explanation: "Stressed animals may pant, tremble, or try to hide, which are signs of anxiety or fear."
        },
        {
          id: 6,
          question: "What protective clothing should veterinary assistants wear?",
          options: [
            "Swimsuits and flip-flops",
            "Formal business suits",
            "Lab coats and gloves",
            "Sports team jerseys"
          ],
          correctAnswer: 2,
          explanation: "Veterinary assistants should wear protective clothing like lab coats and gloves for safety and hygiene."
        },
        {
          id: 7,
          question: "Why is clean water important for animals?",
          options: [
            "It makes them look prettier",
            "It should be available at all times",
            "It's only needed once a week",
            "It's less important than food"
          ],
          correctAnswer: 1,
          explanation: "Clean water should be fresh and available at all times for proper animal hydration and health."
        },
        {
          id: 8,
          question: "What should you do if you notice a change in an animal's behavior?",
          options: [
            "Ignore it as unimportant",
            "Report it to the veterinarian",
            "Tell other animals about it",
            "Wait a week to see if it continues"
          ],
          correctAnswer: 1,
          explanation: "Always report changes in animal behavior or appetite to the veterinarian, as these observations help with treatment decisions."
        },
        {
          id: 9,
          question: "What does proper animal restraint help ensure?",
          options: [
            "Animals escape more easily",
            "Safety for everyone during procedures",
            "Animals become more aggressive",
            "Procedures take longer"
          ],
          correctAnswer: 1,
          explanation: "Using proper restraint techniques ensures safety for you, the animals, and your coworkers during medical procedures."
        },
        {
          id: 10,
          question: "Which of these is a sign of a relaxed animal?",
          options: [
            "Tight muscles and fast breathing",
            "Loose body and normal breathing",
            "Growling and showing teeth",
            "Hiding in the corner"
          ],
          correctAnswer: 1,
          explanation: "Relaxed animals have loose bodies and normal breathing, indicating they feel comfortable and safe."
        },
        {
          id: 11,
          question: "What is the purpose of mental stimulation for animals?",
          options: [
            "To make them tired",
            "To prevent boredom",
            "To increase food costs",
            "To make them sleep more"
          ],
          correctAnswer: 1,
          explanation: "Mental stimulation provides activities to prevent boredom and promote psychological well-being in animals."
        },
        {
          id: 12,
          question: "Where should you know the location of emergency equipment?",
          options: [
            "Only in the break room",
            "At your home",
            "Throughout the clinic",
            "Only in the veterinarian's office"
          ],
          correctAnswer: 2,
          explanation: "You should know the location of emergency equipment like fire extinguishers throughout the clinic for safety preparedness."
        },
        {
          id: 13,
          question: "What kind of diet do animals need according to the content?",
          options: [
            "Any food that's available",
            "Human food only",
            "Balanced diet specific to their species",
            "Only treats and snacks"
          ],
          correctAnswer: 2,
          explanation: "Animals require proper nutrition through a balanced diet specific to their species for optimal health."
        },
        {
          id: 14,
          question: "What should you do with medical equipment after use?",
          options: [
            "Leave it for someone else to clean",
            "Clean and sterilize it",
            "Throw it in the regular trash",
            "Take it home as souvenirs"
          ],
          correctAnswer: 1,
          explanation: "Cleaning and sterilizing medical equipment is an important duty to prevent infection spread."
        },
        {
          id: 15,
          question: "How many animal groups are listed as commonly seen in clinics?",
          options: [
            "Two groups",
            "Three groups",
            "Four groups",
            "Five groups"
          ],
          correctAnswer: 2,
          explanation: "Four animal groups are mentioned: companion animals, birds, reptiles, and sometimes farm animals."
        },
        {
          id: 16,
          question: "What might an animal in pain do?",
          options: [
            "Play actively with toys",
            "Whimper, limp, or protect sore areas",
            "Eat more than usual",
            "Seek more social interaction"
          ],
          correctAnswer: 1,
          explanation: "Animals in pain may whimper, limp, or protect sore areas, indicating discomfort or injury."
        },
        {
          id: 17,
          question: "What is the purpose of social interaction for animals?",
          options: [
            "To make them more independent",
            "Companionship with own species or humans",
            "To reduce their exercise needs",
            "To make them less friendly"
          ],
          correctAnswer: 1,
          explanation: "Social interaction provides companionship with their own species or humans, which is important for emotional well-being."
        },
        {
          id: 18,
          question: "When should you report injuries or accidents?",
          options: [
            "At the end of the month",
            "Only if they're serious",
            "Immediately when they occur",
            "Never report them"
          ],
          correctAnswer: 2,
          explanation: "You should report any injuries or accidents immediately for prompt attention and documentation."
        },
        {
          id: 19,
          question: "What does regular exercise provide for animals?",
          options: [
            "Increased food consumption",
            "Movement for physical health",
            "More time sleeping",
            "Less need for water"
          ],
          correctAnswer: 1,
          explanation: "Regular exercise provides movement for physical health and helps maintain proper body condition."
        },
        {
          id: 20,
          question: "What is the veterinary assistant's role in animal welfare?",
          options: [
            "Only to clean cages",
            "To become an advocate for animal health",
            "To manage business operations",
            "To perform complex surgeries"
          ],
          correctAnswer: 1,
          explanation: "Veterinary assistants become advocates for animal health through their observations and care activities."
        }
      ]
    },
    {
      id: 2,
      title: "Animal Handling and Restraint",
      content: `# Safe Animal Handling Techniques

This module teaches you how to handle different animals safely and humanely. Proper restraint prevents injuries to both animals and handlers.

## Basic Handling Principles
Always approach animals calmly and confidently. Sudden movements can frighten them. Follow these guidelines:
- **Move slowly** - quick movements startle animals
- **Speak softly** - use calm, reassuring tones
- **Observe first** - watch the animal's behavior before touching
- **Respect boundaries** - don't force interaction if animal seems fearful

## Common Restraint Methods
Different animals require different restraint techniques:

**For Dogs:**
- Use slip leashes for control during walks
- Apply gentle pressure with your body for standing restraint
- Use towel wraps for small or nervous dogs
- Implement muzzle training for aggressive dogs

**For Cats:**
- Use towel wraps for safe handling
- Apply scruffing technique for brief procedures
- Use cat bags for more secure restraint
- Implement plastic cones to prevent biting

**For Small Mammals:**
- Scoop rabbits and guinea pigs from below
- Support entire body during handling
- Use towel wraps for nervous animals
- Handle near the ground to prevent fall injuries

## Safety Equipment
Proper equipment makes handling safer:
- **Leashes and collars** for dog control
- **Muzzles** for bite prevention
- **Towels and blankets** for wrapping
- **Gloves** for protection from scratches
- **Carriers** for safe transport

## Reading Animal Body Language
Understanding animal signals helps prevent problems:

**Dog Signals:**
- Relaxed: loose body, wagging tail
- Anxious: yawning, lip licking, turning head away
- Aggressive: stiff body, raised fur, growling
- Fearful: crouched position, tail tucked

**Cat Signals:**
- Relaxed: purring, slow blinking, kneading
- Anxious: dilated pupils, twitching tail
- Aggressive: hissing, ears flattened, arched back
- Fearful: hiding, tense body, wide eyes

## Handling Do's and Don'ts
**Always Do:**
- Wash hands between animals
- Use appropriate restraint for each species
- Monitor animal breathing during restraint
- Release pressure if animal struggles excessively
- Praise animals for calm behavior

**Never Do:**
- Lift animals by their limbs
- Restrain animals longer than necessary
- Use excessive force
- Leave restrained animals unattended
- Restrain animals facing each other if aggressive

## Special Situations
Some animals need extra care:
- **Elderly animals** may have arthritis - handle gently
- **Pregnant animals** need abdominal support
- **Injured animals** require minimal movement
- **Aggressive animals** need professional handling
- **Exotic pets** have species-specific requirements

## Transporting Animals
Safe transport prevents stress and injury:
- Use proper carriers with secure latches
- Line carriers with absorbent bedding
- Cover carriers to reduce visual stress
- Secure carriers in vehicles
- Provide ventilation during transport

## Building Animal Trust
Animals respond to consistent, gentle handling:
- Offer treats for positive reinforcement
- Use the same handlers when possible
- Maintain predictable routines
- Respect animal preferences and limits
- Create positive associations with handling`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How should you approach animals according to basic handling principles?",
          options: [
            "Quickly and loudly",
            "Calmly and confidently",
            "While running toward them",
            "With sudden movements"
          ],
          correctAnswer: 1,
          explanation: "Always approach animals calmly and confidently, as sudden movements can frighten them."
        },
        {
          id: 2,
          question: "What is one method mentioned for restraining dogs?",
          options: [
            "Using plastic cones",
            "Applying scruffing technique",
            "Using slip leashes for control",
            "Scooping from below"
          ],
          correctAnswer: 2,
          explanation: "Using slip leashes for control during walks is one method mentioned for dog restraint."
        },
        {
          id: 3,
          question: "What technique is mentioned for brief procedures on cats?",
          options: [
            "Muzzle training",
            "Towel wraps",
            "Scruffing technique",
            "Scooping from below"
          ],
          correctAnswer: 2,
          explanation: "Applying scruffing technique for brief procedures is mentioned for cat handling."
        },
        {
          id: 4,
          question: "How should you handle rabbits and guinea pigs?",
          options: [
            "Lift them by their ears",
            "Scoop them from below",
            "Grab them by the tail",
            "Pick them up quickly"
          ],
          correctAnswer: 1,
          explanation: "You should scoop rabbits and guinea pigs from below and support their entire body during handling."
        },
        {
          id: 5,
          question: "What equipment is mentioned for bite prevention?",
          options: [
            "Leashes",
            "Muzzles",
            "Towels",
            "Carriers"
          ],
          correctAnswer: 1,
          explanation: "Muzzles are mentioned as equipment for bite prevention during animal handling."
        },
        {
          id: 6,
          question: "What does a relaxed dog typically display?",
          options: [
            "Stiff body and raised fur",
            "Loose body and wagging tail",
            "Crouched position with tucked tail",
            "Dilated pupils and twitching tail"
          ],
          correctAnswer: 1,
          explanation: "A relaxed dog typically has a loose body and wagging tail according to the body language signals."
        },
        {
          id: 7,
          question: "What is a sign of an anxious cat?",
          options: [
            "Purring and kneading",
            "Dilated pupils and twitching tail",
            "Hissing and flattened ears",
            "Slow blinking and relaxed posture"
          ],
          correctAnswer: 1,
          explanation: "Dilated pupils and twitching tail are mentioned as signs of an anxious cat."
        },
        {
          id: 8,
          question: "What should you always do between handling different animals?",
          options: [
            "Take a coffee break",
            "Wash your hands",
            "Change your shoes",
            "Update your social media"
          ],
          correctAnswer: 1,
          explanation: "You should always wash hands between animals to prevent disease transmission."
        },
        {
          id: 9,
          question: "What should you never do when handling animals?",
          options: [
            "Praise animals for calm behavior",
            "Lift animals by their limbs",
            "Monitor animal breathing",
            "Use appropriate restraint"
          ],
          correctAnswer: 1,
          explanation: "You should never lift animals by their limbs as this can cause injury."
        },
        {
          id: 10,
          question: "How should elderly animals be handled?",
          options: [
            "With extra force",
            "Quickly to minimize stress",
            "Gently due to possible arthritis",
            "The same as young animals"
          ],
          correctAnswer: 2,
          explanation: "Elderly animals may have arthritis and should be handled gently according to special situation guidelines."
        },
        {
          id: 11,
          question: "What should pregnant animals need during handling?",
          options: [
            "Abdominal support",
            "Extra restraint",
            "Less monitoring",
            "Quick movements"
          ],
          correctAnswer: 0,
          explanation: "Pregnant animals need abdominal support during handling to ensure their safety and comfort."
        },
        {
          id: 12,
          question: "What should line animal carriers for transport?",
          options: [
            "Newspaper only",
            "Absorbent bedding",
            "Plastic sheets",
            "Nothing is needed"
          ],
          correctAnswer: 1,
          explanation: "Carriers should be lined with absorbent bedding for safe animal transport."
        },
        {
          id: 13,
          question: "How can you reduce visual stress during transport?",
          options: [
            "Play loud music",
            "Cover carriers",
            "Use bright lights",
            "Talk constantly"
          ],
          correctAnswer: 1,
          explanation: "Covering carriers can reduce visual stress for animals during transport."
        },
        {
          id: 14,
          question: "What helps build animal trust according to the content?",
          options: [
            "Inconsistent handling",
            "Offering treats for positive reinforcement",
            "Changing routines frequently",
            "Ignoring animal preferences"
          ],
          correctAnswer: 1,
          explanation: "Offering treats for positive reinforcement helps build animal trust through positive associations."
        },
        {
          id: 15,
          question: "What should you do if an animal struggles excessively during restraint?",
          options: [
            "Apply more force",
            "Release pressure",
            "Yell at the animal",
            "Restrain longer"
          ],
          correctAnswer: 1,
          explanation: "You should release pressure if an animal struggles excessively during restraint to prevent injury."
        },
        {
          id: 16,
          question: "Why should you not leave restrained animals unattended?",
          options: [
            "They might escape",
            "They could injure themselves",
            "They need constant supervision",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Restrained animals should never be left unattended as they might escape, injure themselves, or need supervision."
        },
        {
          id: 17,
          question: "What is one way to create positive associations with handling?",
          options: [
            "Using force consistently",
            "Maintaining predictable routines",
            "Changing handlers frequently",
            "Handling only when necessary"
          ],
          correctAnswer: 1,
          explanation: "Maintaining predictable routines helps create positive associations with handling for animals."
        },
        {
          id: 18,
          question: "What should you observe before touching an animal?",
          options: [
            "Your watch for the time",
            "The animal's behavior",
            "What's on television",
            "Other staff members"
          ],
          correctAnswer: 1,
          explanation: "You should observe the animal's behavior before touching to assess their mood and readiness for handling."
        },
        {
          id: 19,
          question: "What type of voice should you use with animals?",
          options: [
            "Loud and commanding",
            "Calm and reassuring",
            "High-pitched and excited",
            "Monotone and boring"
          ],
          correctAnswer: 1,
          explanation: "You should speak softly using calm, reassuring tones when interacting with animals."
        },
        {
          id: 20,
          question: "What should you do with carriers in vehicles?",
          options: [
            "Leave them unsecured",
            "Secure them properly",
            "Put them in the trunk",
            "Hold them on your lap"
          ],
          correctAnswer: 1,
          explanation: "Carriers should be secured in vehicles to prevent movement and ensure animal safety during transport."
        }
      ]
    },
    {
      id: 3,
      title: "Clinical Procedures and Support",
      content: `# Assisting with Medical Procedures

This module covers how veterinary assistants support veterinarians during examinations and treatments. You'll learn about common clinical tasks and procedures.

## Examination Room Preparation
A well-prepared exam room ensures efficient visits:
- **Clean surfaces** - disinfect tables and counters
- **Organize equipment** - have tools ready and accessible
- **Check supplies** - restock gloves, gauze, and other items
- **Set up restraints** - prepare leashes, towels, or muzzles
- **Update records** - have patient file ready for veterinarian

## Vital Signs Measurement
Assistants often measure these basic vital signs:

**Body Temperature:**
- Use digital rectal thermometers
- Lubricate thermometer tip before use
- Normal ranges vary by species
- Dogs: 101-102.5°F (38.3-39.2°C)
- Cats: 100.5-102.5°F (38.1-39.2°C)
- Record readings accurately in charts

**Heart Rate:**
- Feel pulse at femoral artery (inner thigh)
- Count beats for 15 seconds, multiply by 4
- Normal ranges by size and species
- Small dogs: 100-140 beats per minute
- Large dogs: 60-100 beats per minute
- Cats: 140-220 beats per minute

**Respiratory Rate:**
- Watch chest movements for one minute
- Count inhale-exhale as one breath
- Normal ranges vary with activity
- Dogs: 10-30 breaths per minute
- Cats: 20-30 breaths per minute
- Note any abnormal breathing patterns

## Sample Collection Assistance
Help collect these common samples:

**Blood Samples:**
- Restrain animal properly during draw
- Apply pressure after needle removal
- Label tubes immediately with patient information
- Store samples as directed (room temp or chilled)

**Urine Samples:**
- Use clean collection containers
- Mid-stream samples are most accurate
- Process samples quickly for accurate results
- Note color, clarity, and volume

**Fecal Samples:**
- Collect fresh samples when possible
- Use sealed containers for transport
- Note consistency and any abnormalities
- Process according to laboratory protocols

## Medication Administration
Assistants help with these medication types:

**Oral Medications:**
- Use pill pockets or food to hide pills
- Position animal's head upward for liquid meds
- Ensure animal swallows medication
- Record administration time and dose

**Topical Medications:**
- Clean area before application
- Apply thin, even layers
- Prevent animal from licking medication
- Use protective collars if necessary

**Eye and Ear Medications:**
- Hold droppers close but not touching
- Apply prescribed number of drops
- Massage area gently after application
- Wipe away excess medication

## Bandage and Wound Care
Basic wound management skills:

**Cleaning Wounds:**
- Use sterile saline or prescribed solutions
- Clean from center outward in circular motion
- Remove debris and dead tissue
- Pat dry with sterile gauze

**Applying Bandages:**
- Start with non-stick pad over wound
- Add absorbent padding layer
- Apply outer wrap for protection
- Check bandage tightness regularly

**Bandage Monitoring:**
- Check for swelling above or below bandage
- Look for moisture or odor
- Ensure bandage stays clean and dry
- Change as directed by veterinarian

## Laboratory Support
Basic laboratory tasks for assistants:

**Microscope Use:**
- Prepare slides with proper technique
- Focus objectives from low to high power
- Identify common parasites in samples
- Clean lenses after each use

**Centrifuge Operation:**
- Balance tubes opposite each other
- Set correct speed and time
- Wait for complete stop before opening
- Handle separated samples carefully

**Test Kits:**
- Follow manufacturer instructions exactly
- Note expiration dates on kits
- Record results immediately
- Report abnormal findings to veterinarian

## Surgical Preparation
Assisting with surgical procedures:

**Pre-Surgical Setup:**
- Sterilize instruments as directed
- Prepare surgical packs with needed tools
- Set up monitoring equipment
- Ensure emergency drugs are available

**Patient Preparation:**
- Assist with surgical site clipping
- Help with surgical scrubbing
- Position patient on surgical table
- Connect monitoring devices

**Post-Surgical Care:**
- Monitor recovery from anesthesia
- Keep patient warm during recovery
- Check incision sites regularly
- Prevent patient from disturbing wounds

## Record Keeping
Accurate records are essential:
- Document all observations clearly
- Use standardized abbreviations
- Record medications and treatments given
- Note any changes in condition
- Sign and date all entries`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you do to examination room surfaces before use?",
          options: [
            "Decorate them with flowers",
            "Disinfect tables and counters",
            "Cover them with newspaper",
            "Leave them as they are"
          ],
          correctAnswer: 1,
          explanation: "You should clean surfaces by disinfecting tables and counters in examination rooms."
        },
        {
          id: 2,
          question: "What is the normal temperature range for dogs?",
          options: [
            "98-99°F (36.7-37.2°C)",
            "101-102.5°F (38.3-39.2°C)",
            "103-104°F (39.4-40°C)",
            "95-97°F (35-36.1°C)"
          ],
          correctAnswer: 1,
          explanation: "The normal temperature range for dogs is 101-102.5°F (38.3-39.2°C)."
        },
        {
          id: 3,
          question: "Where do you typically feel for a dog's pulse?",
          options: [
            "On their nose",
            "At the femoral artery (inner thigh)",
            "On their back",
            "At their tail base"
          ],
          correctAnswer: 1,
          explanation: "You feel for pulse at the femoral artery located on the inner thigh of dogs."
        },
        {
          id: 4,
          question: "What is the normal respiratory rate range for cats?",
          options: [
            "5-10 breaths per minute",
            "20-30 breaths per minute",
            "40-50 breaths per minute",
            "60-70 breaths per minute"
          ],
          correctAnswer: 1,
          explanation: "The normal respiratory rate for cats is 20-30 breaths per minute."
        },
        {
          id: 5,
          question: "What should you do immediately after blood draw?",
          options: [
            "Let the animal run free",
            "Apply pressure after needle removal",
            "Give the animal a treat first",
            "Take a photograph"
          ],
          correctAnswer: 1,
          explanation: "You should apply pressure after needle removal to help stop bleeding from the blood draw site."
        },
        {
          id: 6,
          question: "What type of urine sample is most accurate?",
          options: [
            "First morning sample",
            "Mid-stream sample",
            "Last drop sample",
            "Any random sample"
          ],
          correctAnswer: 1,
          explanation: "Mid-stream urine samples are most accurate for testing as they're less likely to be contaminated."
        },
        {
          id: 7,
          question: "How can you help give oral medications to animals?",
          options: [
            "Force pills down their throat",
            "Use pill pockets or food to hide pills",
            "Mix with coffee or tea",
            "Crush all medications together"
          ],
          correctAnswer: 1,
          explanation: "Using pill pockets or food to hide pills can help animals take oral medications more easily."
        },
        {
          id: 8,
          question: "How should you clean wounds?",
          options: [
            "From outside inward",
            "From center outward in circular motion",
            "With soap and water only",
            "With alcohol directly on wound"
          ],
          correctAnswer: 1,
          explanation: "Clean wounds from center outward in circular motion to avoid pushing contamination into the wound."
        },
        {
          id: 9,
          question: "What is the first layer applied in bandaging?",
          options: [
            "Outer waterproof wrap",
            "Non-stick pad over wound",
            "Absorbent padding",
            "Adhesive tape"
          ],
          correctAnswer: 1,
          explanation: "The first layer should be a non-stick pad placed directly over the wound to prevent sticking."
        },
        {
          id: 10,
          question: "What should you check for in bandage monitoring?",
          options: [
            "Color coordination with animal's fur",
            "Swelling above or below bandage",
            "How fashionable it looks",
            "If it matches other bandages"
          ],
          correctAnswer: 1,
          explanation: "Check for swelling above or below the bandage, which could indicate it's too tight."
        },
        {
          id: 11,
          question: "How should you focus a microscope?",
          options: [
            "Start with high power objective",
            "Focus objectives from low to high power",
            "Use only the middle power",
            "Never change the focus"
          ],
          correctAnswer: 1,
          explanation: "Focus microscope objectives from low to high power to properly locate and examine specimens."
        },
        {
          id: 12,
          question: "What is important when using a centrifuge?",
          options: [
            "Balance tubes opposite each other",
            "Put all tubes on one side",
            "Run it with lid open",
            "Use maximum speed always"
          ],
          correctAnswer: 0,
          explanation: "You must balance tubes opposite each other in the centrifuge for safe operation."
        },
        {
          id: 13,
          question: "What should you do before using test kits?",
          options: [
            "Guess the results first",
            "Follow manufacturer instructions exactly",
            "Modify the procedure",
            "Use expired kits to save money"
          ],
          correctAnswer: 1,
          explanation: "Always follow manufacturer instructions exactly when using test kits for accurate results."
        },
        {
          id: 14,
          question: "What is part of pre-surgical setup?",
          options: [
            "Sterilize instruments as directed",
            "Play music for the animal",
            "Feed the animal a large meal",
            "Take the animal for a walk"
          ],
          correctAnswer: 0,
          explanation: "Sterilizing instruments as directed is an important part of pre-surgical setup."
        },
        {
          id: 15,
          question: "What should you do during post-surgical care?",
          options: [
            "Let the animal play immediately",
            "Monitor recovery from anesthesia",
            "Remove all bandages right away",
            "Give the animal regular food immediately"
          ],
          correctAnswer: 1,
          explanation: "Monitoring recovery from anesthesia is crucial during post-surgical care."
        },
        {
          id: 16,
          question: "How should patient records be documented?",
          options: [
            "With vague descriptions",
            "Clearly with all observations",
            "Only when you remember",
            "On scraps of paper"
          ],
          correctAnswer: 1,
          explanation: "Document all observations clearly in patient records for accurate medical history."
        },
        {
          id: 17,
          question: "What should you note about fecal samples?",
          options: [
            "Only the color",
            "Consistency and any abnormalities",
            "How much it weighs",
            "What it smells like compared to food"
          ],
          correctAnswer: 1,
          explanation: "Note consistency and any abnormalities in fecal samples for proper assessment."
        },
        {
          id: 18,
          question: "What is important when applying topical medications?",
          options: [
            "Apply thick layers",
            "Prevent animal from licking medication",
            "Rub it in vigorously",
            "Use on large areas only"
          ],
          correctAnswer: 1,
          explanation: "Prevent animal from licking topical medications to ensure they remain effective and aren't ingested."
        },
        {
          id: 19,
          question: "How should eye medications be applied?",
          options: [
            "Squirt from a distance",
            "Hold droppers close but not touching",
            "Pour directly from bottle",
            "Use your finger to apply"
          ],
          correctAnswer: 1,
          explanation: "Hold droppers close to but not touching the eye to prevent contamination and injury."
        },
        {
          id: 20,
          question: "What should you do with separated samples from centrifuge?",
          options: [
            "Mix them back together",
            "Handle them carefully",
            "Throw them away immediately",
            "Show them to the animal"
          ],
          correctAnswer: 1,
          explanation: "Handle separated samples carefully to maintain their integrity for testing."
        }
      ]
    },
    {
      id: 4,
      title: "Animal Nutrition and Feeding",
      content: `# Understanding Animal Dietary Needs

This module covers the basics of animal nutrition and feeding practices. You'll learn how to provide proper nutrition for different animals in clinical settings.

## Basic Nutritional Requirements
All animals need these essential nutrients:

**Proteins:**
- Build and repair body tissues
- Source of amino acids
- Found in meat, fish, eggs, and legumes
- Requirements vary by life stage

**Carbohydrates:**
- Provide energy for daily activities
- Include fibers for digestive health
- Found in grains, vegetables, and fruits
- Different species have different needs

**Fats:**
- Concentrated energy source
- Aid in vitamin absorption
- Maintain healthy skin and coat
- Provide essential fatty acids

**Vitamins:**
- Support various body functions
- Water-soluble (B, C) and fat-soluble (A, D, E, K)
- Found in balanced commercial foods
- Supplements needed only when prescribed

**Minerals:**
- Build bones and teeth
- Support nerve function
- Maintain fluid balance
- Calcium, phosphorus, and iron are key minerals

**Water:**
- Most critical nutrient
- Required for all body processes
- Should always be available fresh and clean
- Animals need approximately 1 ounce per pound of body weight daily

## Life Stage Nutrition
Nutritional needs change through life:

**Puppies and Kittens:**
- Need more protein for growth
- Require frequent small meals
- Need calcium for bone development
- Should eat specially formulated growth foods

**Adult Animals:**
- Need maintenance-level nutrition
- Require balanced diet for activity level
- Need portion control to prevent obesity
- Should have consistent feeding schedule

**Senior Animals:**
- May need reduced calories
- Often require joint support nutrients
- Might need softer foods for dental issues
- May need prescription diets for age-related conditions

**Pregnant/Nursing Animals:**
- Need increased calories and nutrients
- Require more frequent feeding
- Need high-quality protein sources
- Should have constant access to food

## Special Dietary Considerations
Some animals need special diets:

**Weight Management:**
- Measure food portions accurately
- Use weight management formulas
- Increase exercise when possible
- Monitor weight monthly

**Medical Conditions:**
- Renal diets for kidney disease
- Urinary diets for bladder issues
- Hypoallergenic diets for allergies
- Gastrointestinal diets for digestive problems

**Prescription Diets:**
- Only given with veterinarian approval
- Follow feeding instructions exactly
- Don't mix with other foods unless directed
- Monitor response to dietary changes

## Feeding Procedures in Clinic
Proper clinic feeding practices:

**Food Preparation:**
- Wash hands before handling food
- Use clean bowls for each animal
- Measure food according to instructions
- Note any food allergies on patient records

**Feeding Schedule:**
- Follow veterinarian's instructions
- Feed at consistent times daily
- Note how much each animal eats
- Report poor appetite immediately

**Special Feeding Methods:**
- Hand feeding for reluctant eaters
- Syringe feeding for critical patients
- Tube feeding for animals who can't eat normally
- Always follow veterinarian's specific instructions

**Food Storage:**
- Keep dry food in sealed containers
- Refrigerate opened canned food
- Check expiration dates regularly
- Store food away from cleaning supplies

## Common Feeding Problems
Recognize and address these issues:

**Obesity:**
- Most common nutritional disorder
- Caused by overfeeding and lack of exercise
- Leads to joint problems and diabetes
- Managed through portion control and diet food

**Anorexia:**
- Complete loss of appetite
- Can indicate serious illness
- Requires immediate veterinary attention
- May need assisted feeding methods

**Food Allergies:**
- Itchy skin and ear infections common signs
- Diagnosed through elimination diets
- Managed with hypoallergenic foods
- Require strict diet adherence

**Dietary Indiscretion:**
- Eating inappropriate items
- Can cause gastrointestinal upset
- Prevented by proper supervision
- Treated with veterinary guidance

## Nutritional Assessment
How to evaluate animal nutrition:

**Body Condition Scoring:**
- Visual and hands-on assessment
- Scale from 1 (emaciated) to 9 (obese)
- Ideal score is 4-5 for most pets
- Performed during each veterinary visit

**Weight Monitoring:**
- Weigh animals at each visit
- Use same scale for consistency
- Record weights accurately
- Track trends over time

**Diet History:**
- Ask about current food brand
- Note treats and table scraps
- Record feeding amounts and schedule
- Consider lifestyle and activity level

## Client Education
Help pet owners with nutrition:

**Reading Pet Food Labels:**
- Identify main protein source
- Check guaranteed analysis
- Look for AAFCO statement
- Understand ingredient list order

**Portion Control:**
- Use measuring cups, not guesswork
- Adjust for activity level and age
- Account for treats in daily calories
- Follow package guidelines as starting point

**Transitioning Foods:**
- Mix old and new food gradually
- Take 7-10 days for complete transition
- Watch for digestive upset
- Consult veterinarian if problems occur

**Treat Guidelines:**
- Treats should be less than 10% of daily calories
- Choose healthy treat options
- Avoid toxic human foods
- Use treats for training and bonding`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most critical nutrient for animals?",
          options: [
            "Proteins",
            "Carbohydrates",
            "Water",
            "Fats"
          ],
          correctAnswer: 2,
          explanation: "Water is the most critical nutrient required for all body processes and should always be available fresh and clean."
        },
        {
          id: 2,
          question: "What do proteins primarily provide for animals?",
          options: [
            "Energy for running",
            "Build and repair body tissues",
            "Healthy skin only",
            "Strong bones"
          ],
          correctAnswer: 1,
          explanation: "Proteins build and repair body tissues and are a source of essential amino acids."
        },
        {
          id: 3,
          question: "What life stage needs more protein for growth?",
          options: [
            "Senior animals",
            "Adult animals",
            "Puppies and kittens",
            "All animals equally"
          ],
          correctAnswer: 2,
          explanation: "Puppies and kittens need more protein for growth and should eat specially formulated growth foods."
        },
        {
          id: 4,
          question: "What might senior animals need in their diet?",
          options: [
            "More calories than adults",
            "Joint support nutrients",
            "Extra carbohydrates only",
            "Less water intake"
          ],
          correctAnswer: 1,
          explanation: "Senior animals often require joint support nutrients and may need reduced calories depending on their activity level."
        },
        {
          id: 5,
          question: "What should you do before handling animal food?",
          options: [
            "Wear formal clothing",
            "Wash your hands",
            "Take a break first",
            "Ask the veterinarian"
          ],
          correctAnswer: 1,
          explanation: "Always wash hands before handling animal food to maintain hygiene and prevent contamination."
        },
        {
          id: 6,
          question: "What is the most common nutritional disorder mentioned?",
          options: [
            "Anorexia",
            "Food allergies",
            "Obesity",
            "Vitamin deficiency"
          ],
          correctAnswer: 2,
          explanation: "Obesity is mentioned as the most common nutritional disorder, caused by overfeeding and lack of exercise."
        },
        {
          id: 7,
          question: "What does anorexia refer to in animals?",
          options: [
            "Eating too much",
            "Complete loss of appetite",
            "Food allergies",
            "Eating too fast"
          ],
          correctAnswer: 1,
          explanation: "Anorexia refers to complete loss of appetite and can indicate serious illness requiring immediate attention."
        },
        {
          id: 8,
          question: "What is the ideal body condition score for most pets?",
          options: [
            "1-2 (emaciated)",
            "4-5 (ideal)",
            "7-8 (overweight)",
            "9 (obese)"
          ],
          correctAnswer: 1,
          explanation: "The ideal body condition score is 4-5 for most pets, based on visual and hands-on assessment."
        },
        {
          id: 9,
          question: "What should you use to measure pet food portions?",
          options: [
            "Your hand as a guide",
            "A guessing method",
            "Measuring cups",
            "The same bowl always"
          ],
          correctAnswer: 2,
          explanation: "Use measuring cups, not guesswork, for accurate portion control when feeding animals."
        },
        {
          id: 10,
          question: "How long should food transitioning take?",
          options: [
            "1-2 days",
            "7-10 days",
            "3-4 weeks",
            "Immediately switch"
          ],
          correctAnswer: 1,
          explanation: "Transitioning between foods should take 7-10 days, mixing old and new food gradually to prevent digestive upset."
        },
        {
          id: 11,
          question: "What percentage of daily calories should treats be?",
          options: [
            "Less than 10%",
            "About 25%",
            "50% or more",
            "As much as the animal wants"
          ],
          correctAnswer: 0,
          explanation: "Treats should be less than 10% of daily calories to maintain balanced nutrition."
        },
        {
          id: 12,
          question: "What should you do with opened canned food?",
          options: [
            "Leave it at room temperature",
            "Refrigerate it",
            "Feed it to all animals",
            "Throw it away immediately"
          ],
          correctAnswer: 1,
          explanation: "Opened canned food should be refrigerated to prevent spoilage and bacterial growth."
        },
        {
          id: 13,
          question: "What do fats help with in animal nutrition?",
          options: [
            "Only provide energy",
            "Aid in vitamin absorption",
            "Build muscles only",
            "Clean teeth"
          ],
          correctAnswer: 1,
          explanation: "Fats aid in vitamin absorption and maintain healthy skin and coat in addition to providing energy."
        },
        {
          id: 14,
          question: "What should pregnant animals have access to?",
          options: [
            "Limited food amounts",
            "Constant access to food",
            "Only dry food",
            "Special treats only"
          ],
          correctAnswer: 1,
          explanation: "Pregnant and nursing animals need increased nutrition and should have constant access to food."
        },
        {
          id: 15,
          question: "What is a common sign of food allergies?",
          options: [
            "Increased appetite",
            "Itchy skin and ear infections",
            "Weight loss only",
            "Excessive sleeping"
          ],
          correctAnswer: 1,
          explanation: "Itchy skin and ear infections are common signs of food allergies in animals."
        },
        {
          id: 16,
          question: "How should you store dry pet food?",
          options: [
            "In open bags",
            "In sealed containers",
            "On the floor",
            "Near cleaning supplies"
          ],
          correctAnswer: 1,
          explanation: "Keep dry food in sealed containers to maintain freshness and prevent pest contamination."
        },
        {
          id: 17,
          question: "What should you report immediately about feeding?",
          options: [
            "That an animal ate all its food",
            "Poor appetite in an animal",
            "That food needs ordering",
            "What color the food is"
          ],
          correctAnswer: 1,
          explanation: "Report poor appetite immediately as it can indicate health problems requiring veterinary attention."
        },
        {
          id: 18,
          question: "What is dietary indiscretion?",
          options: [
            "Eating at regular times",
            "Eating inappropriate items",
            "Following a strict diet",
            "Eating only healthy foods"
          ],
          correctAnswer: 1,
          explanation: "Dietary indiscretion refers to eating inappropriate items which can cause gastrointestinal upset."
        },
        {
          id: 19,
          question: "What should you check on pet food labels?",
          options: [
            "Only the price",
            "The brand name only",
            "AAFCO statement",
            "The packaging color"
          ],
          correctAnswer: 2,
          explanation: "Check for the AAFCO statement on pet food labels which indicates the food meets nutritional standards."
        },
        {
          id: 20,
          question: "How often should animals be weighed?",
          options: [
            "Only when they look fat",
            "At each veterinary visit",
            "Once a year",
            "Never, it's not important"
          ],
          correctAnswer: 1,
          explanation: "Animals should be weighed at each veterinary visit to monitor their weight and overall health."
        }
      ]
    },
    {
      id: 5,
      title: "Clinic Maintenance and Sanitation",
      content: `# Keeping the Clinic Clean and Safe

This module covers essential cleaning procedures and clinic maintenance tasks. A clean environment prevents disease spread and ensures patient safety.

## Daily Cleaning Tasks
These tasks should be completed every day:

**Examination Rooms:**
- Disinfect all surfaces after each patient
- Clean examination tables thoroughly
- Restock supplies like gloves and paper towels
- Empty trash containers regularly
- Mop floors at end of day

**Kennel Areas:**
- Remove soiled bedding immediately
- Disinfect kennels between occupants
- Scrub food and water bowls daily
- Check drainage systems for clogs
- Ensure proper ventilation

**Treatment Areas:**
- Clean surgical tables after procedures
- Disinfect countertops and work surfaces
- Organize medical equipment
- Check expiration dates on supplies
- Restock emergency kits

**Reception Area:**
- Disinfect waiting room surfaces
- Clean client contact points (door handles, pens)
- Organize reading materials
- Empty trash and recycling bins
- Maintain clean restroom facilities

## Disinfection Procedures
Proper disinfection kills harmful microorganisms:

**Choosing Disinfectants:**
- Use veterinary-approved products
- Select appropriate strength for task
- Follow manufacturer dilution instructions
- Allow proper contact time for effectiveness
- Store chemicals safely away from animals

**Cleaning Steps:**
1. Remove visible debris first
2. Wash with detergent and water
3. Rinse thoroughly with clean water
4. Apply disinfectant solution
5. Allow recommended contact time
6. Rinse if required by product
7. Allow surface to air dry

**High-Touch Areas:**
- Door handles and light switches
- Countertops and tables
- Medical equipment handles
- Computer keyboards and phones
- Restraint equipment

## Waste Management
Proper disposal prevents contamination:

**Medical Waste:**
- Place sharps in puncture-proof containers
- Dispose of biological waste properly
- Follow local regulations for hazardous waste
- Use color-coded bags for different waste types
- Keep waste containers covered

**General Waste:**
- Empty trash containers regularly
- Separate recyclables when possible
- Clean waste containers weekly
- Use liners in all waste baskets
- Keep waste storage area clean

**Laundry Procedures:**
- Wash soiled linens separately
- Use hot water and appropriate detergent
- Dry completely before reuse
- Store clean linens in closed cabinets
- Wear gloves when handling soiled laundry

## Equipment Maintenance
Regular maintenance ensures equipment functions properly:

**Autoclave Sterilization:**
- Clean chamber regularly
- Use correct cycle for load type
- Monitor temperature and pressure
- Perform weekly biological testing
- Keep maintenance records

**Centrifuge Care:**
- Clean after each use
- Balance loads properly
- Check for unusual noises
- Lubricate as manufacturer directs
- Calibrate periodically

**Microscope Maintenance:**
- Clean lenses with proper tissue
- Cover when not in use
- Store in dry location
- Check light source regularly
- Service annually by professional

## Inventory Management
Keeping track of clinic supplies:

**Stock Monitoring:**
- Check inventory levels weekly
- Reorder before supplies run out
- Track expiration dates
- Rotate stock (first in, first out)
- Maintain minimum stock levels

**Storage Organization:**
- Store items in designated areas
- Keep frequently used items accessible
- Label shelves clearly
- Store chemicals separately from food
- Maintain cool, dry storage conditions

**Ordering Procedures:**
- Use approved suppliers
- Compare prices periodically
- Check deliveries against orders
- Report damaged items immediately
- Update inventory records promptly

## Safety Protocols
Maintaining a safe clinic environment:

**Fire Safety:**
- Know location of fire extinguishers
- Understand different fire types (A, B, C)
- Practice evacuation procedures
- Keep exits clear at all times
- Test smoke detectors monthly

**Chemical Safety:**
- Read Safety Data Sheets (SDS)
- Wear appropriate protective equipment
- Store chemicals in original containers
- Never mix different chemicals
- Have spill kits readily available

**Electrical Safety:**
- Check cords for damage regularly
- Don't overload electrical outlets
- Use grounded equipment properly
- Keep electrical equipment away from water
- Report malfunctioning equipment immediately

## Zoonotic Disease Prevention
Protecting staff from animal-borne diseases:

**Personal Protection:**
- Wash hands frequently
- Wear protective clothing
- Use gloves when handling animals
- Avoid touching face during work
- Change soiled clothing promptly

**Vaccination:**
- Keep current on tetanus vaccination
- Consider rabies vaccination if handling wildlife
- Follow clinic immunization policies
- Report any animal bites immediately
- Document exposures properly

**Illness Reporting:**
- Report any work-related illnesses
- Follow clinic sick leave policies
- Don't work with certain illnesses
- Get medical attention for significant exposures
- Keep health records current

## Client Area Maintenance
Creating a welcoming, safe environment:

**Waiting Room:**
- Provide clean, comfortable seating
- Maintain appropriate temperature
- Ensure good lighting
- Keep floors clean and dry
- Display educational materials neatly

**Restroom Facilities:**
- Clean several times daily
- Restock supplies regularly
- Check for proper function
- Provide handicap accessibility
- Maintain pleasant odor control

**Exterior Areas:**
- Keep entrance clean and clear
- Maintain parking area safety
- Ensure good lighting at night
- Keep landscaping tidy
- Provide waste receptacles`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you do with examination rooms after each patient?",
          options: [
            "Leave them for the next day",
            "Disinfect all surfaces",
            "Just empty the trash",
            "Close the door and leave"
          ],
          correctAnswer: 1,
          explanation: "Examination rooms should have all surfaces disinfected after each patient to prevent disease transmission."
        },
        {
          id: 2,
          question: "What should be done with soiled bedding in kennels?",
          options: [
            "Leave it until end of week",
            "Remove it immediately",
            "Cover it with clean bedding",
            "Spray it with air freshener"
          ],
          correctAnswer: 1,
          explanation: "Soiled bedding should be removed immediately from kennels to maintain cleanliness and prevent odor."
        },
        {
          id: 3,
          question: "What is the first step in proper disinfection?",
          options: [
            "Apply disinfectant",
            "Remove visible debris",
            "Let it air dry",
            "Rinse with water"
          ],
          correctAnswer: 1,
          explanation: "The first step is to remove visible debris before washing and disinfecting surfaces."
        },
        {
          id: 4,
          question: "Where should sharps be disposed?",
          options: [
            "In regular trash",
            "In puncture-proof containers",
            "Down the toilet",
            "In recycling bins"
          ],
          correctAnswer: 1,
          explanation: "Sharps should be placed in puncture-proof containers to prevent injuries and proper disposal."
        },
        {
          id: 5,
          question: "How should soiled laundry be washed?",
          options: [
            "With regular household laundry",
            "Separately with hot water",
            "In cold water only",
            "Without detergent"
          ],
          correctAnswer: 1,
          explanation: "Soiled linens should be washed separately using hot water and appropriate detergent."
        },
        {
          id: 6,
          question: "What should be done with centrifuge loads?",
          options: [
            "Put all tubes on one side",
            "Balance loads properly",
            "Fill to maximum capacity",
            "Run with lid open"
          ],
          correctAnswer: 1,
          explanation: "Centrifuge loads must be balanced properly to ensure safe operation and prevent damage."
        },
        {
          id: 7,
          question: "How often should inventory levels be checked?",
          options: [
            "Once a year",
            "Weekly",
            "When completely out",
            "Only when reminded"
          ],
          correctAnswer: 1,
          explanation: "Inventory levels should be checked weekly to ensure adequate supplies are available."
        },
        {
          id: 8,
          question: "What is the proper stock rotation method?",
          options: [
            "First in, first out",
            "Last in, first out",
            "Random selection",
            "Newest always first"
          ],
          correctAnswer: 0,
          explanation: "Use first in, first out (FIFO) rotation to use older supplies before newer ones."
        },
        {
          id: 9,
          question: "What should you know about fire extinguishers?",
          options: [
            "How to hide them",
            "Their location in clinic",
            "Their color only",
            "Who purchased them"
          ],
          correctAnswer: 1,
          explanation: "You should know the location of all fire extinguishers in the clinic for emergency preparedness."
        },
        {
          id: 10,
          question: "How should chemicals be stored?",
          options: [
            "Mixed together to save space",
            "In original containers",
            "In food containers",
            "Wherever convenient"
          ],
          correctAnswer: 1,
          explanation: "Chemicals should be stored in their original containers with labels intact for safety identification."
        },
        {
          id: 11,
          question: "What should you do with damaged electrical cords?",
          options: [
            "Use tape to repair them",
            "Report them immediately",
            "Continue using them",
            "Hide them from view"
          ],
          correctAnswer: 1,
          explanation: "Report damaged electrical cords immediately to prevent electrical hazards and fires."
        },
        {
          id: 12,
          question: "What is the most important practice for zoonotic disease prevention?",
          options: [
            "Wearing fashionable clothing",
            "Washing hands frequently",
            "Avoiding all animals",
            "Taking many breaks"
          ],
          correctAnswer: 1,
          explanation: "Washing hands frequently is the most important practice to prevent transmission of zoonotic diseases."
        },
        {
          id: 13,
          question: "What vaccination should be kept current for staff safety?",
          options: [
            "Flu shot only",
            "Tetanus vaccination",
            "Travel vaccinations",
            "No vaccinations needed"
          ],
          correctAnswer: 1,
          explanation: "Tetanus vaccination should be kept current for staff handling animals and equipment."
        },
        {
          id: 14,
          question: "What should be done with animal bites?",
          options: [
            "Ignore small bites",
            "Report them immediately",
            "Treat them yourself",
            "Only report large bites"
          ],
          correctAnswer: 1,
          explanation: "All animal bites should be reported immediately for proper documentation and medical follow-up."
        },
        {
          id: 15,
          question: "What should waiting room seating be?",
          options: [
            "Clean and comfortable",
            "Fancy and expensive",
            "Minimal and hard",
            "Color-coordinated only"
          ],
          correctAnswer: 0,
          explanation: "Waiting room seating should be clean and comfortable for clients and their pets."
        },
        {
          id: 16,
          question: "How often should restrooms be cleaned?",
          options: [
            "Once a week",
            "Several times daily",
            "When they look dirty",
            "Only in morning"
          ],
          correctAnswer: 1,
          explanation: "Restroom facilities should be cleaned several times daily to maintain hygiene."
        },
        {
          id: 17,
          question: "What should be ensured about clinic entrances?",
          options: [
            "They are always locked",
            "They are clean and clear",
            "They have expensive decor",
            "They have security guards"
          ],
          correctAnswer: 1,
          explanation: "Clinic entrances should be kept clean and clear for safe and accessible entry."
        },
        {
          id: 18,
          question: "What should you do with expired supplies?",
          options: [
            "Use them anyway",
            "Track expiration dates and remove",
            "Hide them in back",
            "Give them to clients"
          ],
          correctAnswer: 1,
          explanation: "Track expiration dates and remove expired supplies to ensure only effective products are used."
        },
        {
          id: 19,
          question: "What should be done with microscope when not in use?",
          options: [
            "Leave it uncovered",
            "Cover it for protection",
            "Take it apart",
            "Put it in sunlight"
          ],
          correctAnswer: 1,
          explanation: "Microscopes should be covered when not in use to protect lenses from dust and damage."
        },
        {
          id: 20,
          question: "What is important about storage organization?",
          options: [
            "Items stored anywhere",
            "Items in designated areas",
            "Mixing all items together",
            "No organization needed"
          ],
          correctAnswer: 1,
          explanation: "Store items in designated areas to maintain organization and ensure easy access when needed."
        }
      ]
    },
    {
      id: 6,
      title: "Client Communication and Professional Skills",
      content: `# Interacting with Pet Owners Professionally

This module covers communication skills and professional behaviors needed when working with clients in a veterinary setting.

## Effective Communication Skills
Clear communication builds trust with clients:

**Active Listening:**
- Maintain eye contact when appropriate
- Nod to show understanding
- Avoid interrupting clients
- Repeat back important points
- Ask clarifying questions

**Verbal Communication:**
- Speak clearly and at moderate pace
- Use simple, non-technical language
- Explain procedures before doing them
- Provide updates during waiting periods
- Summarize instructions at the end

**Non-Verbal Communication:**
- Maintain open body posture
- Use appropriate facial expressions
- Keep professional distance
- Smile warmly when appropriate
- Avoid crossing arms defensively

**Telephone Skills:**
- Answer promptly with clinic name
- Speak clearly and professionally
- Listen carefully to caller's needs
- Take accurate messages
- Transfer calls properly when needed

## Client Education
Helping clients understand pet care:

**Explaining Procedures:**
- Describe what will happen step by step
- Explain why procedures are necessary
- Discuss possible outcomes
- Provide written instructions when possible
- Encourage questions

**Medication Instructions:**
- Explain purpose of medication
- Demonstrate administration techniques
- Discuss potential side effects
- Provide written dosing schedule
- Review storage requirements

**Home Care Instructions:**
- Explain post-procedure care clearly
- Discuss warning signs to watch for
- Provide emergency contact information
- Review follow-up appointment needs
- Give written discharge instructions

**Preventive Care Education:**
- Discuss vaccination schedules
- Explain parasite prevention
- Review dental care importance
- Discuss nutrition and weight management
- Explain benefits of regular check-ups

## Handling Difficult Situations
Professional responses to challenges:

**Angry or Upset Clients:**
- Stay calm and professional
- Listen without interrupting
- Acknowledge their feelings
- Don't take criticism personally
- Involve veterinarian when needed

**Financial Discussions:**
- Present estimates clearly
- Explain treatment options
- Discuss payment plans if available
- Be sensitive to financial constraints
- Maintain confidentiality

**Bad News Delivery:**
- Provide privacy for difficult conversations
- Use clear, compassionate language
- Allow time for questions
- Offer support resources
- Follow clinic protocols for euthanasia discussions

**Non-Compliant Clients:**
- Explain importance of recommendations
- Explore reasons for non-compliance
- Offer alternative solutions when possible
- Document discussions in records
- Maintain non-judgmental attitude

## Professional Behavior
Maintaining clinic standards:

**Appearance and Attitude:**
- Wear clean, professional attire
- Maintain good personal hygiene
- Arrive on time for shifts
- Display positive attitude
- Show respect to all team members

**Confidentiality:**
- Protect client and patient information
- Discuss cases only in appropriate areas
- Secure records when not in use
- Follow clinic privacy policies
- Never share information on social media

**Teamwork:**
- Communicate clearly with colleagues
- Offer help when others are busy
- Respect different roles and expertise
- Participate in staff meetings
- Support clinic goals and policies

**Time Management:**
- Prioritize tasks effectively
- Complete assigned duties promptly
- Minimize distractions during work
- Keep accurate records of time
- Balance multiple responsibilities

## Client Service Excellence
Going above basic expectations:

**Creating Welcoming Environment:**
- Greet clients by name when possible
- Remember regular clients and pets
- Offer water or coffee to waiting clients
- Keep waiting area clean and comfortable
- Provide reading materials or educational videos

**Follow-Up Practices:**
- Call to check on patients after procedures
- Send reminder cards for appointments
- Follow up on test results promptly
- Update clients during hospitalization
- Thank clients for their business

**Problem Resolution:**
- Listen to client concerns completely
- Apologize for mistakes or inconveniences
- Take action to resolve issues
- Follow up to ensure satisfaction
- Learn from feedback to improve service

**Building Relationships:**
- Remember personal details about clients
- Ask about pets by name
- Celebrate pet birthdays or adoptions
- Share positive news about patient progress
- Show genuine care for pets and owners

## Administrative Tasks
Supporting clinic operations:

**Appointment Scheduling:**
- Schedule appropriate time for procedures
- Double-check contact information
- Provide preparation instructions
- Send confirmation reminders
- Manage waitlist for cancellations

**Record Keeping:**
- Update patient records accurately
- Document client communications
- File documents promptly
- Maintain organized record systems
- Follow record retention policies

**Payment Processing:**
- Handle payments accurately
- Provide clear receipts
- Explain charges when asked
- Maintain cash drawer security
- Follow clinic accounting procedures

**Inventory Support:**
- Notify when supplies are low
- Help unpack and organize deliveries
- Maintain neat storage areas
- Track client educational materials
- Assist with inventory counts

## Continuing Education
Professional growth and development:

**Learning Opportunities:**
- Attend staff training sessions
- Read veterinary journals or articles
- Participate in online courses
- Attend local veterinary meetings
- Learn from experienced colleagues

**Skill Development:**
- Practice new techniques under supervision
- Ask questions to improve understanding
- Seek feedback on performance
- Set personal learning goals
- Track your professional progress

**Certification Maintenance:**
- Keep records of continuing education
- Renew certifications on time
- Stay current on industry changes
- Learn about new products and procedures
- Maintain professional memberships

**Career Advancement:**
- Express interest in learning new skills
- Take on additional responsibilities
- Mentor new team members
- Participate in clinic improvement projects
- Discuss career goals with supervisor`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is active listening?",
          options: [
            "Talking most of the time",
            "Maintaining eye contact and not interrupting",
            "Thinking about your response while client talks",
            "Finishing client's sentences for them"
          ],
          correctAnswer: 1,
          explanation: "Active listening involves maintaining eye contact, not interrupting, and showing understanding through nodding and feedback."
        },
        {
          id: 2,
          question: "What language should you use with clients?",
          options: [
            "Complex technical terms",
            "Simple, non-technical language",
            "Scientific jargon",
            "Abbreviations only"
          ],
          correctAnswer: 1,
          explanation: "Use simple, non-technical language that clients can easily understand when explaining procedures or conditions."
        },
        {
          id: 3,
          question: "How should you answer clinic telephones?",
          options: [
            "With 'Hello' only",
            "Promptly with clinic name",
            "After several rings",
            "With your personal greeting"
          ],
          correctAnswer: 1,
          explanation: "Answer telephones promptly with the clinic name for professional identification."
        },
        {
          id: 4,
          question: "What should you provide with medication instructions?",
          options: [
            "Verbal instructions only",
            "Written dosing schedule",
            "No instructions needed",
            "Just the medication bottle"
          ],
          correctAnswer: 1,
          explanation: "Provide written dosing schedule along with verbal instructions to ensure clients administer medications correctly."
        },
        {
          id: 5,
          question: "How should you respond to angry clients?",
          options: [
            "Get angry in return",
            "Stay calm and professional",
            "Ignore their complaints",
            "Transfer call immediately"
          ],
          correctAnswer: 1,
          explanation: "Stay calm and professional when dealing with angry clients, listening without interrupting and acknowledging their feelings."
        },
        {
          id: 6,
          question: "What should you wear to maintain professional appearance?",
          options: [
            "Casual weekend clothes",
            "Clean, professional attire",
            "The same clothes multiple days",
            "Whatever is comfortable"
          ],
          correctAnswer: 1,
          explanation: "Wear clean, professional attire appropriate for a veterinary clinic setting."
        },
        {
          id: 7,
          question: "What information must be kept confidential?",
          options: [
            "Only payment information",
            "Client and patient information",
            "Only serious medical conditions",
            "Information about staff members"
          ],
          correctAnswer: 1,
          explanation: "All client and patient information must be kept confidential and protected according to clinic privacy policies."
        },
        {
          id: 8,
          question: "What should you do when others are busy?",
          options: [
            "Take a break",
            "Offer help when appropriate",
            "Ignore their workload",
            "Complain about being busy too"
          ],
          correctAnswer: 1,
          explanation: "Offer help to colleagues when they are busy as part of good teamwork and clinic efficiency."
        },
        {
          id: 9,
          question: "How can you create a welcoming environment?",
          options: [
            "Greet clients by name when possible",
            "Keep clients waiting longer",
            "Talk only to pets, not owners",
            "Play loud music in waiting area"
          ],
          correctAnswer: 0,
          explanation: "Greeting clients by name when possible helps create a personal, welcoming environment."
        },
        {
          id: 10,
          question: "When should you follow up after procedures?",
          options: [
            "Never, it's not necessary",
            "Call to check on patients",
            "Only if clients complain",
            "After one month has passed"
          ],
          correctAnswer: 1,
          explanation: "Call to check on patients after procedures to show care and ensure proper recovery."
        },
        {
          id: 11,
          question: "What should you do when scheduling appointments?",
          options: [
            "Schedule quickly without details",
            "Provide preparation instructions",
            "Let clients decide everything",
            "Only schedule morning appointments"
          ],
          correctAnswer: 1,
          explanation: "Provide preparation instructions when scheduling appointments so clients know how to prepare their pets."
        },
        {
          id: 12,
          question: "How should patient records be updated?",
          options: [
            "Whenever you have time",
            "Accurately and promptly",
            "Only at end of day",
            "Only by veterinarians"
          ],
          correctAnswer: 1,
          explanation: "Update patient records accurately and promptly to maintain complete and current medical histories."
        },
        {
          id: 13,
          question: "What should you do with payments?",
          options: [
            "Handle them accurately",
            "Round amounts for convenience",
            "Only accept exact cash",
            "Process them later when convenient"
          ],
          correctAnswer: 0,
          explanation: "Handle payments accurately and provide clear receipts for all transactions."
        },
        {
          id: 14,
          question: "What should you do when supplies are low?",
          options: [
            "Wait until completely out",
            "Notify appropriate person",
            "Order yourself without approval",
            "Use alternatives without telling anyone"
          ],
          correctAnswer: 1,
          explanation: "Notify the appropriate person when supplies are low to ensure timely reordering."
        },
        {
          id: 15,
          question: "How can you participate in continuing education?",
          options: [
            "Ignore learning opportunities",
            "Attend staff training sessions",
            "Only learn from mistakes",
            "Wait for others to teach you"
          ],
          correctAnswer: 1,
          explanation: "Attend staff training sessions as one way to participate in continuing education and professional development."
        },
        {
          id: 16,
          question: "What should you practice under supervision?",
          options: [
            "Only familiar techniques",
            "New techniques to learn",
            "Nothing new to avoid mistakes",
            "Only what you already know well"
          ],
          correctAnswer: 1,
          explanation: "Practice new techniques under supervision to safely develop your skills and knowledge."
        },
        {
          id: 17,
          question: "How can you show genuine care for pets?",
          options: [
            "By rushing through procedures",
            "Remembering pets by name",
            "Only focusing on medical tasks",
            "Avoiding interaction with pets"
          ],
          correctAnswer: 1,
          explanation: "Remembering pets by name and showing interest in them demonstrates genuine care and builds client relationships."
        },
        {
          id: 18,
          question: "What should you do with client feedback?",
          options: [
            "Ignore negative feedback",
            "Learn from it to improve service",
            "Only share positive feedback",
            "Take all feedback personally"
          ],
          correctAnswer: 1,
          explanation: "Learn from client feedback to improve service and address areas needing attention."
        },
        {
          id: 19,
          question: "What is important about non-verbal communication?",
          options: [
            "It's not important",
            "Maintaining open body posture",
            "Standing very close to clients",
            "Avoiding all eye contact"
          ],
          correctAnswer: 1,
          explanation: "Maintaining open body posture and appropriate facial expressions are important aspects of non-verbal communication."
        },
        {
          id: 20,
          question: "What should you do during bad news delivery?",
          options: [
            "Be blunt and quick",
            "Provide privacy and use compassionate language",
            "Have other staff deliver news",
            "Avoid the conversation entirely"
          ],
          correctAnswer: 1,
          explanation: "Provide privacy and use clear, compassionate language when delivering bad news to clients."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "final-exam",
    title: "Veterinary Assistance Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. You must score 70% or higher to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What is one main duty of veterinary assistants?",
        options: [
          "Performing surgery independently",
          "Preparing examination rooms",
          "Prescribing medications",
          "Managing clinic finances"
        ],
        correctAnswer: 1,
        explanation: "Preparing examination rooms is a main duty of veterinary assistants.",
        module: 1
      },
      {
        id: 2,
        question: "How many basic needs of animals are listed?",
        options: ["4 needs", "5 needs", "6 needs", "7 needs"],
        correctAnswer: 2,
        explanation: "Animals have six basic needs: nutrition, water, shelter, exercise, mental stimulation, and social interaction.",
        module: 1
      },
      {
        id: 3,
        question: "What should you always do before handling each animal?",
        options: [
          "Take your break",
          "Wash your hands",
          "Check your phone",
          "Eat a snack"
        ],
        correctAnswer: 1,
        explanation: "Always wash hands before and after handling each animal to prevent disease spread.",
        module: 1
      },
      {
        id: 4,
        question: "What protective clothing should assistants wear?",
        options: [
          "Casual clothes",
          "Lab coats and gloves",
          "Sports attire",
          "Formal wear"
        ],
        correctAnswer: 1,
        explanation: "Lab coats and gloves provide protection and maintain hygiene.",
        module: 1
      },
      {
        id: 5,
        question: "What might a stressed animal do?",
        options: [
          "Play actively",
          "Pant or tremble",
          "Eat enthusiastically",
          "Sleep deeply"
        ],
        correctAnswer: 1,
        explanation: "Stressed animals may pant, tremble, or try to hide.",
        module: 1
      },
      {
        id: 6,
        question: "What does proper animal restraint ensure?",
        options: [
          "Animals escape easily",
          "Safety during procedures",
          "Longer procedure times",
          "More treats needed"
        ],
        correctAnswer: 1,
        explanation: "Proper restraint ensures safety for everyone during medical procedures.",
        module: 1
      },
      {
        id: 7,
        question: "What is the veterinary assistant's role in animal welfare?",
        options: [
          "Only clean cages",
          "Advocate for animal health",
          "Manage business operations",
          "Perform complex procedures"
        ],
        correctAnswer: 1,
        explanation: "Veterinary assistants become advocates for animal health through their observations and care.",
        module: 1
      },

      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "How should you approach animals?",
        options: [
          "Quickly and loudly",
          "Calmly and confidently",
          "Running toward them",
          "With sudden movements"
        ],
        correctAnswer: 1,
        explanation: "Always approach animals calmly and confidently to avoid frightening them.",
        module: 2
      },
      {
        id: 9,
        question: "What is used for bite prevention?",
        options: ["Leashes", "Muzzles", "Towels", "Carriers"],
        correctAnswer: 1,
        explanation: "Muzzles are used to prevent bites during handling of aggressive or fearful animals.",
        module: 2
      },
      {
        id: 10,
        question: "What does a relaxed dog typically display?",
        options: [
          "Stiff body and raised fur",
          "Loose body and wagging tail",
          "Crouched position",
          "Growling and showing teeth"
        ],
        correctAnswer: 1,
        explanation: "Relaxed dogs have loose bodies and wagging tails.",
        module: 2
      },
      {
        id: 11,
        question: "What should you never do when handling animals?",
        options: [
          "Praise calm behavior",
          "Lift by their limbs",
          "Monitor breathing",
          "Use proper restraint"
        ],
        correctAnswer: 1,
        explanation: "Never lift animals by their limbs as this can cause serious injury.",
        module: 2
      },
      {
        id: 12,
        question: "How should elderly animals be handled?",
        options: [
          "With extra force",
          "Gently due to possible arthritis",
          "Quickly to minimize stress",
          "Same as young animals"
        ],
        correctAnswer: 1,
        explanation: "Elderly animals may have arthritis and should be handled gently.",
        module: 2
      },
      {
        id: 13,
        question: "What should line animal carriers for transport?",
        options: [
          "Newspaper only",
          "Absorbent bedding",
          "Plastic sheets",
          "Nothing needed"
        ],
        correctAnswer: 1,
        explanation: "Absorbent bedding lines carriers to manage accidents and provide comfort.",
        module: 2
      },
      {
        id: 14,
        question: "What helps build animal trust?",
        options: [
          "Inconsistent handling",
          "Offering treats for positive reinforcement",
          "Changing routines frequently",
          "Ignoring preferences"
        ],
        correctAnswer: 1,
        explanation: "Offering treats for positive reinforcement helps build trust through positive associations.",
        module: 2
      },

      // Module 3 Questions (7 questions)
      {
        id: 15,
        question: "What is normal temperature range for dogs?",
        options: [
          "98-99°F",
          "101-102.5°F",
          "103-104°F",
          "95-97°F"
        ],
        correctAnswer: 1,
        explanation: "Normal dog temperature is 101-102.5°F (38.3-39.2°C).",
        module: 3
      },
      {
        id: 16,
        question: "Where do you feel for a dog's pulse?",
        options: [
          "On their nose",
          "Femoral artery (inner thigh)",
          "On their back",
          "Tail base"
        ],
        correctAnswer: 1,
        explanation: "The femoral artery on the inner thigh is where you typically check a dog's pulse.",
        module: 3
      },
      {
        id: 17,
        question: "What should you do after blood draw?",
        options: [
          "Let animal run free",
          "Apply pressure after needle removal",
          "Give treat first",
          "Take photograph"
        ],
        correctAnswer: 1,
        explanation: "Apply pressure after needle removal to help stop bleeding.",
        module: 3
      },
      {
        id: 18,
        question: "How should you clean wounds?",
        options: [
          "From outside inward",
          "Center outward in circular motion",
          "With soap only",
          "Alcohol directly on wound"
        ],
        correctAnswer: 1,
        explanation: "Clean wounds from center outward to avoid pushing contamination into the wound.",
        module: 3
      },
      {
        id: 19,
        question: "What is first layer in bandaging?",
        options: [
          "Outer waterproof wrap",
          "Non-stick pad over wound",
          "Absorbent padding",
          "Adhesive tape"
        ],
        correctAnswer: 1,
        explanation: "First apply non-stick pad directly over wound to prevent sticking.",
        module: 3
      },
      {
        id: 20,
        question: "How should you focus a microscope?",
        options: [
          "Start with high power",
          "Low to high power",
          "Use only middle power",
          "Never change focus"
        ],
        correctAnswer: 1,
        explanation: "Focus from low to high power to properly locate and examine specimens.",
        module: 3
      },
      {
        id: 21,
        question: "What should you do during post-surgical care?",
        options: [
          "Let animal play immediately",
          "Monitor recovery from anesthesia",
          "Remove all bandages",
          "Give regular food immediately"
        ],
        correctAnswer: 1,
        explanation: "Monitoring recovery from anesthesia is crucial for post-surgical care.",
        module: 3
      },

      // Module 4 Questions (7 questions)
      {
        id: 22,
        question: "What is most critical nutrient?",
        options: ["Proteins", "Carbohydrates", "Water", "Fats"],
        correctAnswer: 2,
        explanation: "Water is the most critical nutrient required for all body processes.",
        module: 4
      },
      {
        id: 23,
        question: "What life stage needs more protein?",
        options: [
          "Senior animals",
          "Adult animals",
          "Puppies and kittens",
          "All equally"
        ],
        correctAnswer: 2,
        explanation: "Puppies and kittens need more protein for growth and development.",
        module: 4
      },
      {
        id: 24,
        question: "What should you do before handling food?",
        options: [
          "Wear formal clothing",
          "Wash your hands",
          "Take break first",
          "Ask veterinarian"
        ],
        correctAnswer: 1,
        explanation: "Always wash hands before handling animal food to maintain hygiene.",
        module: 4
      },
      {
        id: 25,
        question: "What is most common nutritional disorder?",
        options: [
          "Anorexia",
          "Food allergies",
          "Obesity",
          "Vitamin deficiency"
        ],
        correctAnswer: 2,
        explanation: "Obesity is the most common nutritional disorder in pets.",
        module: 4
      },
      {
        id: 26,
        question: "What is ideal body condition score?",
        options: [
          "1-2 (emaciated)",
          "4-5 (ideal)",
          "7-8 (overweight)",
          "9 (obese)"
        ],
        correctAnswer: 1,
        explanation: "Ideal body condition score is 4-5 for most pets.",
        module: 4
      },
      {
        id: 27,
        question: "How long should food transitioning take?",
        options: ["1-2 days", "7-10 days", "3-4 weeks", "Immediately"],
        correctAnswer: 1,
        explanation: "Food transitioning should take 7-10 days to prevent digestive upset.",
        module: 4
      },
      {
        id: 28,
        question: "What should you do with opened canned food?",
        options: [
          "Leave at room temperature",
          "Refrigerate it",
          "Feed to all animals",
          "Throw away immediately"
        ],
        correctAnswer: 1,
        explanation: "Refrigerate opened canned food to prevent spoilage.",
        module: 4
      },

      // Module 5 Questions (6 questions)
      {
        id: 29,
        question: "What should you do with exam rooms after each patient?",
        options: [
          "Leave for next day",
          "Disinfect all surfaces",
          "Just empty trash",
          "Close door and leave"
        ],
        correctAnswer: 1,
        explanation: "Disinfect all surfaces in exam rooms after each patient.",
        module: 5
      },
      {
        id: 30,
        question: "Where should sharps be disposed?",
        options: [
          "Regular trash",
          "Puncture-proof containers",
          "Down toilet",
          "Recycling bins"
        ],
        correctAnswer: 1,
        explanation: "Sharps go in puncture-proof containers for safe disposal.",
        module: 5
      },
      {
        id: 31,
        question: "How often check inventory levels?",
        options: [
          "Once a year",
          "Weekly",
          "When completely out",
          "Only when reminded"
        ],
        correctAnswer: 1,
        explanation: "Check inventory levels weekly to ensure adequate supplies.",
        module: 5
      },
      {
        id: 32,
        question: "How should chemicals be stored?",
        options: [
          "Mixed together",
          "In original containers",
          "In food containers",
          "Wherever convenient"
        ],
        correctAnswer: 1,
        explanation: "Store chemicals in original containers with labels intact.",
        module: 5
      },
      {
        id: 33,
        question: "What is most important for zoonotic disease prevention?",
        options: [
          "Wearing fashionable clothes",
          "Washing hands frequently",
          "Avoiding all animals",
          "Taking many breaks"
        ],
        correctAnswer: 1,
        explanation: "Frequent hand washing prevents zoonotic disease transmission.",
        module: 5
      },
      {
        id: 34,
        question: "How often clean restrooms?",
        options: [
          "Once a week",
          "Several times daily",
          "When look dirty",
          "Only in morning"
        ],
        correctAnswer: 1,
        explanation: "Clean restroom facilities several times daily for hygiene.",
        module: 5
      },

      // Module 6 Questions (6 questions)
      {
        id: 35,
        question: "What language should you use with clients?",
        options: [
          "Complex technical terms",
          "Simple, non-technical language",
          "Scientific jargon",
          "Abbreviations only"
        ],
        correctAnswer: 1,
        explanation: "Use simple language clients can understand.",
        module: 6
      },
      {
        id: 36,
        question: "How answer clinic telephones?",
        options: [
          "With 'Hello' only",
          "Promptly with clinic name",
          "After several rings",
          "With personal greeting"
        ],
        correctAnswer: 1,
        explanation: "Answer promptly with clinic name for professional identification.",
        module: 6
      },
      {
        id: 37,
        question: "How respond to angry clients?",
        options: [
          "Get angry in return",
          "Stay calm and professional",
          "Ignore complaints",
          "Transfer immediately"
        ],
        correctAnswer: 1,
        explanation: "Stay calm and professional when dealing with angry clients.",
        module: 6
      },
      {
        id: 38,
        question: "What information must be confidential?",
        options: [
          "Only payment information",
          "Client and patient information",
          "Only serious conditions",
          "Staff information"
        ],
        correctAnswer: 1,
        explanation: "All client and patient information must be kept confidential.",
        module: 6
      },
      {
        id: 39,
        question: "How create welcoming environment?",
        options: [
          "Greet clients by name when possible",
          "Keep clients waiting longer",
          "Talk only to pets",
          "Play loud music"
        ],
        correctAnswer: 0,
        explanation: "Greeting clients by name creates personal, welcoming environment.",
        module: 6
      },
      {
        id: 40,
        question: "When follow up after procedures?",
        options: [
          "Never, not necessary",
          "Call to check on patients",
          "Only if clients complain",
          "After one month"
        ],
        correctAnswer: 1,
        explanation: "Call to check on patients after procedures shows care and ensures recovery.",
        module: 6
      }
    ]
  }
};

export default veterinaryAssistanceCourse;
