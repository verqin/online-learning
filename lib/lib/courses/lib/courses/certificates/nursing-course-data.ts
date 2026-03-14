// Nursing (Certificate) Course Content
// File: nursing-certificate.ts

export const nursingCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "nursing-certificate",
  title: "Nursing (Certificate)",
  description: "Foundational nursing course covering essential patient care skills, medical terminology, and healthcare basics. Perfect for aspiring healthcare professionals starting their journey.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🩺",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Nursing Fundamentals",
      content: `# Module 1: Introduction to Nursing Fundamentals

## Welcome to Nursing
Nursing is a caring profession focused on helping people maintain or recover their health. Nurses work in many settings including hospitals, clinics, and community centers. The main goal is to provide quality care to patients of all ages.

## Three Core Nursing Principles
1. **Patient-Centered Care** - Always putting the patient's needs first
2. **Safety First** - Preventing harm to patients and yourself
3. **Professional Behavior** - Acting with honesty and respect

## Basic Nursing Roles
- **Assessment** - Observing and recording patient information
- **Planning** - Creating care plans for patient needs
- **Implementation** - Carrying out care activities
- **Evaluation** - Checking if care is working well

## Healthcare Team Members
Nurses work with doctors, therapists, and other healthcare professionals. Teamwork is essential for good patient care. Clear communication between team members prevents errors and improves outcomes.

## Nursing Ethics
All nurses must follow ethical guidelines. These include protecting patient privacy, telling the truth, and treating everyone fairly. Ethical behavior builds trust between nurses and patients.

## Personal Protective Equipment
Nurses use gloves, masks, and gowns to protect themselves and patients from infection. Proper use of protective equipment is a basic nursing skill that everyone must learn.

## Documentation Basics
Accurate record-keeping is vital in nursing. Nurses write down observations, care given, and patient responses. Good documentation helps the whole healthcare team provide consistent care.

## Self-Care for Nurses
Taking care of yourself helps you take better care of others. Proper rest, nutrition, and stress management are important for nurses to maintain their own health while caring for patients.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main goal of nursing?",
          options: [
            "To provide quality care to patients",
            "To manage hospital finances",
            "To conduct medical research",
            "To train new doctors"
          ],
          correctAnswer: 0,
          explanation: "The main goal of nursing is to provide quality care to patients of all ages, helping them maintain or recover their health."
        },
        {
          id: 2,
          question: "Which nursing principle means always putting the patient's needs first?",
          options: [
            "Professional Behavior",
            "Safety First",
            "Patient-Centered Care",
            "Quick Response"
          ],
          correctAnswer: 2,
          explanation: "Patient-Centered Care means always considering and prioritizing the patient's needs in all nursing decisions and actions."
        },
        {
          id: 3,
          question: "What does assessment involve in nursing?",
          options: [
            "Giving medications to patients",
            "Observing and recording patient information",
            "Cleaning hospital rooms",
            "Scheduling doctor appointments"
          ],
          correctAnswer: 1,
          explanation: "Assessment is the nursing process of observing, measuring, and recording patient information to understand their health status."
        },
        {
          id: 4,
          question: "Why is teamwork important in nursing?",
          options: [
            "It makes the work day shorter",
            "It prevents errors and improves patient outcomes",
            "It reduces the need for documentation",
            "It allows nurses to take more breaks"
          ],
          correctAnswer: 1,
          explanation: "Teamwork between nurses, doctors, and other healthcare professionals prevents errors and ensures coordinated care for better patient outcomes."
        },
        {
          id: 5,
          question: "What must all nurses follow in their professional behavior?",
          options: [
            "Hospital visiting hours",
            "Ethical guidelines",
            "Doctor's personal preferences",
            "Insurance company rules"
          ],
          correctAnswer: 1,
          explanation: "Nurses must follow ethical guidelines which include protecting patient privacy, honesty, and fair treatment of all patients."
        },
        {
          id: 6,
          question: "What does PPE stand for in nursing?",
          options: [
            "Patient Protection Equipment",
            "Personal Protective Equipment",
            "Professional Practice Essentials",
            "Primary Patient Examination"
          ],
          correctAnswer: 1,
          explanation: "PPE stands for Personal Protective Equipment, which includes gloves, masks, and gowns used to prevent infection transmission."
        },
        {
          id: 7,
          question: "Why is accurate documentation important?",
          options: [
            "It helps with hospital budgeting",
            "It provides consistent care information for the healthcare team",
            "It reduces the need for patient interaction",
            "It makes nursing reports look professional"
          ],
          correctAnswer: 1,
          explanation: "Accurate documentation ensures all healthcare team members have consistent information about patient care, leading to better coordinated treatment."
        },
        {
          id: 8,
          question: "What is an important aspect of self-care for nurses?",
          options: [
            "Working extra shifts for more pay",
            "Proper rest and stress management",
            "Avoiding interaction with difficult patients",
            "Focusing only on technical skills"
          ],
          correctAnswer: 1,
          explanation: "Proper rest, nutrition, and stress management help nurses maintain their own health, which enables them to provide better patient care."
        },
        {
          id: 9,
          question: "Which is NOT a core nursing principle mentioned?",
          options: [
            "Patient-Centered Care",
            "Safety First",
            "Professional Behavior",
            "Maximum Efficiency"
          ],
          correctAnswer: 3,
          explanation: "Maximum Efficiency was not mentioned as a core nursing principle. The three core principles are Patient-Centered Care, Safety First, and Professional Behavior."
        },
        {
          id: 10,
          question: "What builds trust between nurses and patients?",
          options: [
            "Fast service",
            "Modern equipment",
            "Ethical behavior",
            "Fancy uniforms"
          ],
          correctAnswer: 2,
          explanation: "Ethical behavior including honesty, privacy protection, and fair treatment builds trust between nurses and their patients."
        },
        {
          id: 11,
          question: "Where do nurses commonly work?",
          options: [
            "Only in hospital emergency rooms",
            "Only in doctor's offices",
            "Hospitals, clinics, and community centers",
            "Only in surgical units"
          ],
          correctAnswer: 2,
          explanation: "Nurses work in diverse settings including hospitals, clinics, community health centers, schools, and patients' homes."
        },
        {
          id: 12,
          question: "What is the planning phase in nursing?",
          options: [
            "Creating care plans for patient needs",
            "Scheduling staff shifts",
            "Ordering medical supplies",
            "Designing hospital buildings"
          ],
          correctAnswer: 0,
          explanation: "The planning phase involves creating individualized care plans based on patient assessment to address specific health needs."
        },
        {
          id: 13,
          question: "What does implementation mean in nursing?",
          options: [
            "Developing new hospital policies",
            "Carrying out care activities",
            "Training new nursing students",
            "Purchasing medical equipment"
          ],
          correctAnswer: 1,
          explanation: "Implementation refers to the actual carrying out of planned nursing care activities for patients."
        },
        {
          id: 14,
          question: "What is evaluation in the nursing process?",
          options: [
            "Checking if care is working well",
            "Rating hospital services",
            "Testing medical equipment",
            "Reviewing staff performance"
          ],
          correctAnswer: 0,
          explanation: "Evaluation involves checking whether the nursing care provided is effective and making adjustments if needed."
        },
        {
          id: 15,
          question: "Why do nurses use gloves?",
          options: [
            "To keep hands warm",
            "To look more professional",
            "To protect from infection",
            "To improve grip on equipment"
          ],
          correctAnswer: 2,
          explanation: "Gloves are worn to protect both the nurse and patient from infection transmission during care activities."
        },
        {
          id: 16,
          question: "What should nurses document?",
          options: [
            "Only medication given",
            "Observations, care given, and patient responses",
            "Only vital signs",
            "Only doctor's orders"
          ],
          correctAnswer: 1,
          explanation: "Nurses should document observations, care provided, patient responses, and any changes in condition for comprehensive records."
        },
        {
          id: 17,
          question: "Who do nurses work with as part of the healthcare team?",
          options: [
            "Only other nurses",
            "Doctors, therapists, and other professionals",
            "Only hospital administrators",
            "Only patient family members"
          ],
          correctAnswer: 1,
          explanation: "Nurses collaborate with doctors, physical therapists, pharmacists, social workers, and other healthcare professionals."
        },
        {
          id: 18,
          question: "What does ethical behavior in nursing include?",
          options: [
            "Protecting patient privacy",
            "Working the fastest pace",
            "Following all doctor orders without question",
            "Avoiding difficult patients"
          ],
          correctAnswer: 0,
          explanation: "Ethical behavior includes protecting patient confidentiality, being truthful, and advocating for patient rights."
        },
        {
          id: 19,
          question: "What helps nurses provide better patient care?",
          options: [
            "Ignoring their own needs",
            "Taking care of their own health",
            "Working longer hours",
            "Avoiding emotional connections"
          ],
          correctAnswer: 1,
          explanation: "When nurses take care of their own physical and mental health through proper rest and stress management, they can provide better patient care."
        },
        {
          id: 20,
          question: "What is a key element of professional behavior?",
          options: [
            "Acting with honesty and respect",
            "Always agreeing with doctors",
            "Working only day shifts",
            "Wearing expensive uniforms"
          ],
          correctAnswer: 0,
          explanation: "Professional behavior includes acting with honesty, respect for all individuals, and maintaining appropriate boundaries."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Patient Care Skills",
      content: `# Module 2: Basic Patient Care Skills

## Understanding Patient Care
Basic patient care involves assisting with daily activities that patients cannot do for themselves. These skills form the foundation of nursing practice and help maintain patient comfort and dignity.

## Vital Signs Measurement
Vital signs are basic measurements that show how the body is functioning. The four main vital signs are:
1. **Temperature** - Body warmth measured in degrees
2. **Pulse** - Heartbeat rate and rhythm
3. **Respiration** - Breathing rate and pattern
4. **Blood Pressure** - Force of blood against artery walls

## Personal Hygiene Assistance
Helping patients with personal hygiene maintains health and prevents infection. This includes:
- **Bathing** - Using proper techniques for bed baths or assisted baths
- **Oral Care** - Cleaning teeth and mouth, especially for patients who cannot do it themselves
- **Hair Care** - Brushing and washing hair to maintain comfort
- **Nail Care** - Keeping nails clean and trimmed safely

## Mobility Assistance
Helping patients move safely prevents complications like pressure sores and blood clots. Techniques include:
- **Turning and Repositioning** - Changing patient position every two hours
- **Assisted Walking** - Supporting patients during movement
- **Proper Lifting** - Using body mechanics to prevent nurse injury

## Nutrition and Hydration Support
Proper nutrition and fluids are essential for healing. Nursing responsibilities include:
- **Meal Assistance** - Helping patients eat when needed
- **Fluid Monitoring** - Tracking intake and output
- **Special Diets** - Understanding dietary restrictions

## Comfort Measures
Creating a comfortable environment helps healing. This includes:
- **Pain Management** - Recognizing and reporting pain
- **Positioning** - Using pillows for support
- **Environmental Control** - Adjusting light, noise, and temperature

## Infection Prevention
Basic infection control practices protect everyone. Key practices include:
- **Hand Hygiene** - Washing hands properly and frequently
- **Clean Technique** - Keeping supplies and environment clean
- **Isolation Precautions** - Following special procedures when needed

## Communication During Care
Talking with patients during care maintains dignity. Always explain what you are doing and why. Listen to patient concerns and preferences. Good communication makes care more effective.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four main vital signs?",
          options: [
            "Temperature, pulse, respiration, blood pressure",
            "Height, weight, vision, hearing",
            "Pain level, appetite, sleep, mood",
            "Skin color, hair texture, nail condition, posture"
          ],
          correctAnswer: 0,
          explanation: "The four main vital signs are temperature, pulse (heart rate), respiration (breathing rate), and blood pressure."
        },
        {
          id: 2,
          question: "Why is personal hygiene assistance important?",
          options: [
            "It makes the hospital look better",
            "It maintains health and prevents infection",
            "It reduces nursing workload",
            "It is required by hospital policy"
          ],
          correctAnswer: 1,
          explanation: "Helping patients with personal hygiene maintains their health, prevents skin breakdown and infections, and promotes comfort."
        },
        {
          id: 3,
          question: "How often should bedridden patients be repositioned?",
          options: [
            "Every 30 minutes",
            "Every 2 hours",
            "Once per shift",
            "Only when they complain"
          ],
          correctAnswer: 1,
          explanation: "Bedridden patients should be turned and repositioned at least every 2 hours to prevent pressure sores and promote circulation."
        },
        {
          id: 4,
          question: "What does fluid monitoring involve?",
          options: [
            "Only giving patients water",
            "Tracking intake and output of all fluids",
            "Measuring blood thickness",
            "Checking urine color only"
          ],
          correctAnswer: 1,
          explanation: "Fluid monitoring involves tracking all fluids taken in (drinks, IV fluids) and all fluids released (urine, vomit, drainage) to maintain proper balance."
        },
        {
          id: 5,
          question: "What is the most important infection prevention practice?",
          options: [
            "Wearing gloves at all times",
            "Proper hand hygiene",
            "Using expensive disinfectants",
            "Keeping windows closed"
          ],
          correctAnswer: 1,
          explanation: "Proper hand hygiene (washing hands correctly and frequently) is the single most effective way to prevent infection transmission."
        },
        {
          id: 6,
          question: "Why should nurses explain care procedures to patients?",
          options: [
            "To fill time during care",
            "To maintain patient dignity and reduce anxiety",
            "To practice teaching skills",
            "To follow hospital protocol"
          ],
          correctAnswer: 1,
          explanation: "Explaining procedures maintains patient dignity, reduces anxiety, and helps patients participate in their own care when possible."
        },
        {
          id: 7,
          question: "What does oral care prevent in bedridden patients?",
          options: [
            "Only bad breath",
            "Pneumonia and mouth infections",
            "Tooth decay only",
            "Gum disease only"
          ],
          correctAnswer: 1,
          explanation: "Regular oral care prevents pneumonia (from bacteria aspiration), mouth infections, and maintains overall oral health."
        },
        {
          id: 8,
          question: "What helps prevent nurse injuries during patient movement?",
          options: [
            "Asking doctors to help",
            "Using proper body mechanics",
            "Avoiding heavy patients",
            "Using quick movements"
          ],
          correctAnswer: 1,
          explanation: "Using proper body mechanics (bending knees, keeping back straight, using leg muscles) helps prevent nurse back and muscle injuries."
        },
        {
          id: 9,
          question: "What is included in comfort measures?",
          options: [
            "Only pain medication",
            "Pain management, positioning, and environmental control",
            "Only adjusting room temperature",
            "Only providing extra pillows"
          ],
          correctAnswer: 1,
          explanation: "Comfort measures include pain management, proper positioning with support, and controlling environment (light, noise, temperature)."
        },
        {
          id: 10,
          question: "Why track both nutrition and hydration?",
          options: [
            "For hospital billing purposes",
            "Both are essential for healing and body function",
            "To compare patients with each other",
            "To reduce food waste"
          ],
          correctAnswer: 1,
          explanation: "Proper nutrition provides energy and building blocks for healing, while hydration maintains organ function and medication effectiveness."
        },
        {
          id: 11,
          question: "What does clean technique mean?",
          options: [
            "Using only new supplies",
            "Keeping supplies and environment free from contamination",
            "Washing hands once daily",
            "Using strong disinfectants"
          ],
          correctAnswer: 1,
          explanation: "Clean technique involves keeping supplies, surfaces, and environment free from contamination to prevent infection spread."
        },
        {
          id: 12,
          question: "What should nurses do before assisting with personal hygiene?",
          options: [
            "Check doctor's orders",
            "Assess what help the patient needs",
            "Prepare all supplies in advance",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Nurses should check orders, assess patient needs and abilities, and prepare all necessary supplies before beginning hygiene care."
        },
        {
          id: 13,
          question: "What does blood pressure measure?",
          options: [
            "Only heart rate",
            "Force of blood against artery walls",
            "Oxygen in blood",
            "Blood thickness"
          ],
          correctAnswer: 1,
          explanation: "Blood pressure measures the force exerted by blood against the walls of arteries as the heart pumps."
        },
        {
          id: 14,
          question: "When should hand hygiene be performed?",
          options: [
            "Only before sterile procedures",
            "Before and after patient contact, after touching surfaces, when hands are visibly dirty",
            "Only at the beginning and end of shift",
            "Only after removing gloves"
          ],
          correctAnswer: 1,
          explanation: "Hand hygiene should be performed before and after patient contact, after touching surfaces in patient areas, and whenever hands are visibly dirty."
        },
        {
          id: 15,
          question: "What is assisted walking?",
          options: [
            "Patients walking alone",
            "Nurse supporting patient during movement",
            "Using wheelchairs only",
            "Walking without any help"
          ],
          correctAnswer: 1,
          explanation: "Assisted walking involves the nurse providing physical support and guidance to help patients walk safely."
        },
        {
          id: 16,
          question: "Why monitor pulse rhythm?",
          options: [
            "To check heart regularity",
            "To measure blood flow speed",
            "To determine oxygen levels",
            "To assess lung function"
          ],
          correctAnswer: 0,
          explanation: "Monitoring pulse rhythm checks whether the heart beats regularly or has irregular patterns that might need medical attention."
        },
        {
          id: 17,
          question: "What should be included in oral care for dependent patients?",
          options: [
            "Only brushing teeth",
            "Brushing teeth, cleaning tongue, and moistening mouth",
            "Only using mouthwash",
            "Only checking for cavities"
          ],
          correctAnswer: 1,
          explanation: "Oral care for dependent patients includes brushing teeth, cleaning the tongue, and moistening mouth tissues to prevent dryness."
        },
        {
          id: 18,
          question: "What does intake and output monitoring help detect?",
          options: [
            "Only dehydration",
            "Fluid imbalances and kidney function",
            "Only heart problems",
            "Only infection signs"
          ],
          correctAnswer: 1,
          explanation: "Monitoring intake and output helps detect fluid imbalances, assess kidney function, and guide treatment decisions."
        },
        {
          id: 19,
          question: "When should isolation precautions be used?",
          options: [
            "For all patients",
            "When patients have contagious infections",
            "Only in intensive care",
            "When family requests it"
          ],
          correctAnswer: 1,
          explanation: "Isolation precautions are used when patients have infections that can spread to others, requiring special protective measures."
        },
        {
          id: 20,
          question: "What is proper communication during patient care?",
          options: [
            "Talking only to other staff",
            "Explaining procedures and listening to patient concerns",
            "Using medical terms to sound professional",
            "Minimizing conversation to save time"
          ],
          correctAnswer: 1,
          explanation: "Proper communication includes explaining what you're doing, using understandable language, and listening to patient concerns and preferences."
        }
      ]
    },
    {
      id: 3,
      title: "Medical Terminology and Documentation",
      content: `# Module 3: Medical Terminology and Documentation

## Introduction to Medical Language
Medical terminology is a special language healthcare professionals use to communicate precisely. Learning basic terms helps nurses understand information and document care accurately.

## Common Prefixes and Suffixes
Medical words are often built from word parts:
- **Prefixes** come at the beginning (like "hyper-" meaning high)
- **Roots** are the main part (like "cardio" meaning heart)
- **Suffixes** come at the end (like "-itis" meaning inflammation)

## Body System Terminology
Each body system has specific terms:
- **Cardiovascular** - Heart and blood vessels
- **Respiratory** - Lungs and breathing
- **Gastrointestinal** - Stomach and intestines
- **Musculoskeletal** - Muscles and bones
- **Neurological** - Brain and nerves

## Common Medical Abbreviations
Healthcare uses standard abbreviations to save time. Important ones include:
- **BP** - Blood Pressure
- **HR** - Heart Rate
- **RR** - Respiratory Rate
- **T** - Temperature
- **PRN** - As needed

## Accurate Documentation Principles
Good documentation follows these rules:
1. **Factual** - Only write what you see, hear, or measure
2. **Complete** - Include all necessary information
3. **Timely** - Document soon after care is given
4. **Organized** - Follow a logical format
5. **Confidential** - Protect patient privacy

## SOAP Note Format
SOAP is a common documentation format:
- **S** - Subjective (what the patient says)
- **O** - Objective (what you observe and measure)
- **A** - Assessment (your professional judgment)
- **P** - Plan (what will be done)

## Medication Documentation
When giving medications, document:
- **Drug name** and dose given
- **Time** administered
- **Route** (how given - oral, injection, etc.)
- **Patient response**

## Legal Aspects of Documentation
Medical records are legal documents. They must be:
- **Accurate** - Errors can lead to poor care
- **Legible** - Others must be able to read it
- **Unchanged** - Never erase or use correction fluid
- **Signed** - Include your name and credentials

## Common Documentation Errors to Avoid
- **Blank spaces** - Draw line through unused space
- **Late entries** - Document as close to event as possible
- **Vague terms** - Use specific descriptions
- **Opinions** - Stick to facts and observations

## Electronic Health Records
Many facilities use computer systems for documentation. Nurses must learn to:
- **Navigate** the system efficiently
- **Enter data** accurately
- **Protect passwords** and security
- **Print** records when needed`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the prefix 'hyper-' mean in medical terms?",
          options: [
            "Low or below normal",
            "High or above normal",
            "Equal or same",
            "Around or surrounding"
          ],
          correctAnswer: 1,
          explanation: "The prefix 'hyper-' means high or above normal, as in hypertension (high blood pressure)."
        },
        {
          id: 2,
          question: "What does the suffix '-itis' indicate?",
          options: [
            "Removal of something",
            "Inflammation of something",
            "Study of something",
            "Disease of something"
          ],
          correctAnswer: 1,
          explanation: "The suffix '-itis' indicates inflammation, as in arthritis (inflammation of joints) or gastritis (inflammation of stomach)."
        },
        {
          id: 3,
          question: "What does 'cardiovascular' refer to?",
          options: [
            "Lungs and breathing system",
            "Heart and blood vessels",
            "Brain and nerves",
            "Stomach and intestines"
          ],
          correctAnswer: 1,
          explanation: "Cardiovascular refers to the heart (cardio) and blood vessels (vascular) system."
        },
        {
          id: 4,
          question: "What does the abbreviation 'BP' stand for?",
          options: [
            "Blood Pulse",
            "Blood Pressure",
            "Body Position",
            "Breathing Pattern"
          ],
          correctAnswer: 1,
          explanation: "BP stands for Blood Pressure, a vital sign measuring force of blood against artery walls."
        },
        {
          id: 5,
          question: "What does 'PRN' mean in medication orders?",
          options: [
            "Every morning",
            "As needed",
            "With food",
            "Before bed"
          ],
          correctAnswer: 1,
          explanation: "PRN means 'as needed' - medications given only when specific symptoms occur."
        },
        {
          id: 6,
          question: "What is factual documentation?",
          options: [
            "Writing what you think might be happening",
            "Only writing positive observations",
            "Writing only what you see, hear, or measure",
            "Using impressive medical terms"
          ],
          correctAnswer: 2,
          explanation: "Factual documentation means recording only observable, measurable information, not assumptions or opinions."
        },
        {
          id: 7,
          question: "What does the 'S' in SOAP notes stand for?",
          options: [
            "Systematic",
            "Subjective",
            "Specific",
            "Summary"
          ],
          correctAnswer: 1,
          explanation: "In SOAP notes, 'S' stands for Subjective - information the patient reports about their condition."
        },
        {
          id: 8,
          question: "What should medication documentation include?",
          options: [
            "Only drug name and dose",
            "Drug name, dose, time, route, and patient response",
            "Only the time given",
            "Only the nurse's signature"
          ],
          correctAnswer: 1,
          explanation: "Complete medication documentation includes drug name, dose, time administered, route of administration, and patient response."
        },
        {
          id: 9,
          question: "Why must medical records be legible?",
          options: [
            "To look professional",
            "So others can read and understand them",
            "For billing purposes only",
            "Because it's hospital policy"
          ],
          correctAnswer: 1,
          explanation: "Legible records ensure other healthcare providers can read and understand the information for safe patient care."
        },
        {
          id: 10,
          question: "What should you do with blank spaces in documentation?",
          options: [
            "Leave them empty for others to fill",
            "Draw a line through them",
            "Write 'N/A' in them",
            "Fill them with unrelated notes"
          ],
          correctAnswer: 1,
          explanation: "Drawing a line through blank spaces prevents others from adding unauthorized information later."
        },
        {
          id: 11,
          question: "What does 'respiratory' refer to?",
          options: [
            "Heart and circulation",
            "Lungs and breathing",
            "Kidneys and urine production",
            "Skin and temperature regulation"
          ],
          correctAnswer: 1,
          explanation: "Respiratory refers to the lungs and breathing system responsible for oxygen and carbon dioxide exchange."
        },
        {
          id: 12,
          question: "What does 'HR' abbreviation mean?",
          options: [
            "Hospital Room",
            "Heart Rate",
            "Health Record",
            "High Risk"
          ],
          correctAnswer: 1,
          explanation: "HR stands for Heart Rate, measuring how many times the heart beats per minute."
        },
        {
          id: 13,
          question: "What is timely documentation?",
          options: [
            "Documenting at the end of the shift",
            "Documenting soon after care is given",
            "Documenting only important events",
            "Documenting when you have free time"
          ],
          correctAnswer: 1,
          explanation: "Timely documentation means recording information soon after care is provided while details are fresh."
        },
        {
          id: 14,
          question: "What does the 'O' in SOAP notes represent?",
          options: [
            "Opinion",
            "Objective",
            "Observation",
            "Order"
          ],
          correctAnswer: 1,
          explanation: "In SOAP notes, 'O' stands for Objective - measurable data and observations made by healthcare providers."
        },
        {
          id: 15,
          question: "Why is patient response documented after medication?",
          options: [
            "To track medication costs",
            "To monitor effectiveness and side effects",
            "To prove the nurse gave the medication",
            "To compare with other patients"
          ],
          correctAnswer: 1,
          explanation: "Documenting patient response helps monitor medication effectiveness and identify any adverse reactions or side effects."
        },
        {
          id: 16,
          question: "What should never be used to correct documentation errors?",
          options: [
            "Pen",
            "Pencil",
            "Correction fluid or erasers",
            "Different colored ink"
          ],
          correctAnswer: 2,
          explanation: "Correction fluid and erasers should never be used; instead, draw a single line through errors and initial them."
        },
        {
          id: 17,
          question: "What does 'gastrointestinal' refer to?",
          options: [
            "Brain and nervous system",
            "Stomach and intestines",
            "Muscles and bones",
            "Skin and hair"
          ],
          correctAnswer: 1,
          explanation: "Gastrointestinal refers to the stomach and intestines, the system responsible for digestion and nutrient absorption."
        },
        {
          id: 18,
          question: "What does 'RR' abbreviation mean?",
          options: [
            "Room Rate",
            "Respiratory Rate",
            "Risk Rating",
            "Recovery Room"
          ],
          correctAnswer: 1,
          explanation: "RR stands for Respiratory Rate, measuring how many breaths a person takes per minute."
        },
        {
          id: 19,
          question: "What does organized documentation mean?",
          options: [
            "Using fancy headings",
            "Following a logical format",
            "Writing in complete sentences",
            "Including lots of details"
          ],
          correctAnswer: 1,
          explanation: "Organized documentation follows a logical format (like chronological order or body systems) so information is easy to find."
        },
        {
          id: 20,
          question: "What is important about electronic health record passwords?",
          options: [
            "Share them with trusted colleagues",
            "Protect them and never share",
            "Write them down near the computer",
            "Use simple easy-to-remember words"
          ],
          correctAnswer: 1,
          explanation: "Passwords must be protected and never shared to maintain patient confidentiality and system security."
        }
      ]
    },
    {
      id: 4,
      title: "Infection Control and Safety",
      content: `# Module 4: Infection Control and Safety

## Understanding Infection Prevention
Infection control prevents the spread of diseases in healthcare settings. Nurses play a key role in protecting patients, visitors, and themselves from infections.

## Chain of Infection
Infections spread through six links in a chain:
1. **Infectious Agent** - Germ causing disease
2. **Reservoir** - Where germ lives
3. **Portal of Exit** - How germ leaves reservoir
4. **Mode of Transmission** - How germ travels
5. **Portal of Entry** - How germ enters new host
6. **Susceptible Host** - Person who can get infected

## Breaking the Chain
Nurses break the infection chain by:
- **Hand hygiene** - Most effective method
- **Cleaning and disinfection** - Removing germs from surfaces
- **Sterile technique** - Preventing contamination during procedures
- **Isolation precautions** - Special measures for contagious patients

## Standard Precautions
Standard precautions are used with ALL patients:
- **Hand hygiene** before and after patient contact
- **Personal protective equipment** when contact with body fluids is possible
- **Safe injection practices** - Never reuse needles
- **Proper handling of contaminated equipment**

## Transmission-Based Precautions
Additional precautions for known infections:
- **Contact Precautions** - For infections spread by touch
- **Droplet Precautions** - For infections spread through coughs
- **Airborne Precautions** - For infections spread through air

## Hand Hygiene Techniques
Proper hand cleaning methods:
- **Soap and water** - When hands are visibly dirty
- **Alcohol-based rub** - When hands are not visibly dirty
- **Duration** - Rub hands for at least 20 seconds
- **All surfaces** - Clean between fingers, under nails, wrists

## Personal Protective Equipment (PPE)
Using PPE correctly:
- **Gloves** - For contact with body fluids or contaminated items
- **Gowns** - When clothing may contact patient or environment
- **Masks/Eye protection** - When splashes or sprays are possible
- **Sequence** - Put on in correct order, remove carefully

## Environmental Cleaning
Keeping healthcare environment safe:
- **Regular cleaning** - Surfaces and equipment
- **Spill management** - Proper cleanup of body fluids
- **Linens handling** - Don't shake contaminated linens
- **Waste separation** - Proper disposal methods

## Patient Safety Measures
Preventing patient harm:
- **Patient identification** - Always check two identifiers
- **Fall prevention** - Assess risk and use precautions
- **Medication safety** - Right patient, drug, dose, time, route
- **Communication** - Clear handoffs between staff

## Nurse Safety
Protecting yourself while caring for others:
- **Body mechanics** - Prevent back injuries
- **Needle safety** - Never recap used needles
- **Stress management** - Recognize and address burnout
- **Incident reporting** - Report accidents and near misses`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many links are in the chain of infection?",
          options: [
            "Three links",
            "Six links",
            "Eight links",
            "Ten links"
          ],
          correctAnswer: 1,
          explanation: "There are six links in the chain of infection: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host."
        },
        {
          id: 2,
          question: "What is the most effective way to break the infection chain?",
          options: [
            "Wearing gloves always",
            "Proper hand hygiene",
            "Using expensive disinfectants",
            "Keeping rooms very cold"
          ],
          correctAnswer: 1,
          explanation: "Proper hand hygiene is the single most effective method for breaking the chain of infection and preventing disease spread."
        },
        {
          id: 3,
          question: "When are standard precautions used?",
          options: [
            "Only with infectious patients",
            "With all patients all the time",
            "Only during procedures",
            "Only in emergency rooms"
          ],
          correctAnswer: 1,
          explanation: "Standard precautions are used with ALL patients, regardless of diagnosis, to prevent transmission of infections."
        },
        {
          id: 4,
          question: "What type of precaution is used for infections spread through coughs?",
          options: [
            "Contact Precautions",
            "Droplet Precautions",
            "Airborne Precautions",
            "Standard Precautions only"
          ],
          correctAnswer: 1,
          explanation: "Droplet Precautions are used for infections spread through respiratory droplets from coughing, sneezing, or talking."
        },
        {
          id: 5,
          question: "How long should hand rubbing with alcohol-based rub take?",
          options: [
            "5 seconds",
            "At least 20 seconds",
            "1 minute",
            "Until hands feel dry"
          ],
          correctAnswer: 1,
          explanation: "Hand rubbing with alcohol-based products should take at least 20 seconds to ensure all surfaces are covered and germs are killed."
        },
        {
          id: 6,
          question: "When should gloves be worn?",
          options: [
            "At all times in patient rooms",
            "When contact with body fluids is possible",
            "Only when touching patients directly",
            "Only during sterile procedures"
          ],
          correctAnswer: 1,
          explanation: "Gloves should be worn when contact with blood, body fluids, secretions, excretions, or contaminated items is anticipated."
        },
        {
          id: 7,
          question: "What is the first link in the infection chain?",
          options: [
            "Susceptible host",
            "Infectious agent",
            "Mode of transmission",
            "Portal of entry"
          ],
          correctAnswer: 1,
          explanation: "The infectious agent (germ causing disease) is the first link in the chain of infection."
        },
        {
          id: 8,
          question: "What should you do with contaminated linens?",
          options: [
            "Shake them out before washing",
            "Place directly in leak-proof bag without shaking",
            "Leave them on the floor",
            "Rinse them in the sink first"
          ],
          correctAnswer: 1,
          explanation: "Contaminated linens should be placed directly in leak-proof bags without shaking to prevent spreading microorganisms into the air."
        },
        {
          id: 9,
          question: "How should needles be handled after use?",
          options: [
            "Recap carefully with two hands",
            "Place immediately in sharps container",
            "Leave on bedside table for collection",
            "Break before disposal"
          ],
          correctAnswer: 1,
          explanation: "Used needles should be placed immediately in puncture-resistant sharps containers without recapping to prevent needle-stick injuries."
        },
        {
          id: 10,
          question: "What are two patient identifiers nurses should check?",
          options: [
            "Room number and bed number",
            "Patient's name and date of birth",
            "Doctor's name and diagnosis",
            "Insurance information and address"
          ],
          correctAnswer: 1,
          explanation: "Two patient identifiers (typically name and date of birth) should be checked before any procedure or medication administration."
        },
        {
          id: 11,
          question: "What does 'reservoir' mean in infection chain?",
          options: [
            "The germ itself",
            "Where the germ lives and grows",
            "How the germ spreads",
            "The person who gets infected"
          ],
          correctAnswer: 1,
          explanation: "The reservoir is where infectious agents live and multiply, such as humans, animals, soil, water, or medical equipment."
        },
        {
          id: 12,
          question: "When should soap and water be used instead of alcohol rub?",
          options: [
            "Always, it's better than alcohol rub",
            "When hands are visibly dirty",
            "Only at the beginning of shift",
            "After removing gloves"
          ],
          correctAnswer: 1,
          explanation: "Soap and water should be used when hands are visibly dirty, soiled with blood or body fluids, or after using the toilet."
        },
        {
          id: 13,
          question: "What precaution is needed for tuberculosis patients?",
          options: [
            "Contact Precautions",
            "Airborne Precautions",
            "Droplet Precautions",
            "Standard Precautions only"
          ],
          correctAnswer: 1,
          explanation: "Airborne Precautions are required for tuberculosis because the bacteria can remain suspended in air and travel long distances."
        },
        {
          id: 14,
          question: "What is the correct PPE removal sequence?",
          options: [
            "Gloves, gown, mask, eye protection",
            "Gloves, gown, eye protection, mask",
            "Gown, gloves, mask, eye protection",
            "Mask, eye protection, gloves, gown"
          ],
          correctAnswer: 1,
          explanation: "PPE should be removed in this order: gloves, gown, eye protection, mask to prevent self-contamination."
        },
        {
          id: 15,
          question: "Why is regular environmental cleaning important?",
          options: [
            "To make the hospital look nice",
            "To remove germs from surfaces",
            "To reduce cleaning costs",
            "To impress visitors"
          ],
          correctAnswer: 1,
          explanation: "Regular cleaning removes germs from surfaces that could transmit infections to patients, staff, and visitors."
        },
        {
          id: 16,
          question: "What is 'portal of exit' in infection chain?",
          options: [
            "How germs enter new hosts",
            "How germs leave the reservoir",
            "How germs travel between hosts",
            "Where germs multiply"
          ],
          correctAnswer: 1,
          explanation: "Portal of exit is how infectious agents leave the reservoir, such as through respiratory tract, blood, or gastrointestinal tract."
        },
        {
          id: 17,
          question: "What should be done with used PPE?",
          options: [
            "Reused if still clean",
            "Disposed in appropriate containers",
            "Left in patient rooms",
            "Taken home for cleaning"
          ],
          correctAnswer: 1,
          explanation: "Used PPE should be disposed in appropriate waste containers immediately after use to prevent contamination."
        },
        {
          id: 18,
          question: "What helps prevent back injuries in nursing?",
          options: [
            "Working quickly",
            "Proper body mechanics",
            "Avoiding heavy patients",
            "Sitting whenever possible"
          ],
          correctAnswer: 1,
          explanation: "Proper body mechanics (bending knees, keeping back straight, using leg muscles) helps prevent back injuries when moving patients."
        },
        {
          id: 19,
          question: "What does 'susceptible host' mean?",
          options: [
            "The source of infection",
            "Person who can get infected",
            "The method of transmission",
            "Where infection enters body"
          ],
          correctAnswer: 1,
          explanation: "Susceptible host is a person at risk of infection due to factors like weak immune system, wounds, or medical devices."
        },
        {
          id: 20,
          question: "Why report incidents and near misses?",
          options: [
            "To blame someone for errors",
            "To improve systems and prevent future harm",
            "To complete paperwork requirements",
            "To track staff mistakes"
          ],
          correctAnswer: 1,
          explanation: "Reporting helps identify system problems so they can be fixed to prevent similar incidents and improve patient safety."
        }
      ]
    },
    {
      id: 5,
      title: "Communication and Professional Behavior",
      content: `# Module 5: Communication and Professional Behavior

## Importance of Communication in Nursing
Effective communication is essential for safe patient care. Nurses communicate with patients, families, and healthcare team members. Good communication prevents errors and builds trust.

## Therapeutic Communication
Therapeutic communication helps patients feel understood and supported. Techniques include:
- **Active listening** - Full attention to what patient says
- **Open-ended questions** - Encourage detailed responses
- **Reflection** - Repeat or rephrase to show understanding
- **Empathy** - Acknowledge feelings without judgment

## Barriers to Communication
Common barriers nurses should recognize:
- **Language differences** - Use interpreters when needed
- **Hearing or vision impairment** - Adjust communication methods
- **Emotional state** - Anxiety or pain affects understanding
- **Cultural differences** - Be aware of different communication styles

## Communicating with Healthcare Team
Clear team communication ensures coordinated care:
- **SBAR technique** - Situation, Background, Assessment, Recommendation
- **Handoff reports** - Complete information transfer between shifts
- **Respectful language** - Professional tone with all colleagues
- **Conflict resolution** - Address disagreements constructively

## Professional Boundaries
Maintaining appropriate relationships with patients:
- **Therapeutic relationship** - Focused on patient needs
- **Personal disclosure** - Limited and purposeful
- **Gift policies** - Follow facility guidelines
- **Social media** - Never share patient information online

## Ethical Communication
Communicating with honesty and integrity:
- **Truth-telling** - Provide accurate information
- **Confidentiality** - Protect patient privacy
- **Informed consent** - Ensure patient understanding
- **Advocacy** - Speak up for patient needs

## Difficult Conversations
Handling challenging situations professionally:
- **Breaking bad news** - Use clear, compassionate language
- **Angry patients/families** - Stay calm and listen
- **Non-compliant patients** - Understand reasons behind behavior
- **Cultural sensitivity** - Respect different beliefs and practices

## Written Communication
Effective documentation and written communication:
- **Clarity** - Use simple, direct language
- **Accuracy** - Check facts before documenting
- **Professional tone** - Avoid slang or judgmental language
- **Timeliness** - Complete documentation promptly

## Nonverbal Communication
Body language and other nonverbal cues:
- **Eye contact** - Shows attention and respect
- **Facial expressions** - Should match verbal message
- **Posture** - Open stance appears welcoming
- **Touch** - Use appropriately and respectfully

## Continuous Professional Development
Nurses should always improve communication skills:
- **Seek feedback** - Ask colleagues for input
- **Self-reflection** - Consider what works well
- **Training opportunities** - Attend communication workshops
- **Mentorship** - Learn from experienced nurses`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is therapeutic communication?",
          options: [
            "Communication that treats medical conditions",
            "Communication that helps patients feel understood and supported",
            "Communication using medical terminology",
            "Communication with doctors only"
          ],
          correctAnswer: 1,
          explanation: "Therapeutic communication uses specific techniques to help patients feel heard, understood, and supported in their healthcare journey."
        },
        {
          id: 2,
          question: "What does active listening involve?",
          options: [
            "Thinking about your response while patient talks",
            "Giving full attention to what patient says",
            "Taking notes during conversation",
            "Interrupting to ask questions"
          ],
          correctAnswer: 1,
          explanation: "Active listening involves giving full attention to the speaker, maintaining eye contact, and focusing on understanding their message."
        },
        {
          id: 3,
          question: "What should nurses do with language barriers?",
          options: [
            "Speak louder and slower",
            "Use professional interpreters",
            "Use family members as interpreters",
            "Use hand gestures only"
          ],
          correctAnswer: 1,
          explanation: "Professional interpreters should be used for language barriers to ensure accurate communication and protect patient confidentiality."
        },
        {
          id: 4,
          question: "What does SBAR stand for?",
          options: [
            "Situation, Background, Action, Result",
            "Situation, Background, Assessment, Recommendation",
            "Summary, Background, Assessment, Response",
            "Situation, Briefing, Action, Review"
          ],
          correctAnswer: 1,
          explanation: "SBAR stands for Situation, Background, Assessment, Recommendation - a structured communication tool for healthcare teams."
        },
        {
          id: 5,
          question: "What are professional boundaries?",
          options: [
            "Rules about work hours",
            "Appropriate limits in nurse-patient relationships",
            "Hospital property lines",
            "Departmental divisions"
          ],
          correctAnswer: 1,
          explanation: "Professional boundaries are appropriate limits that maintain therapeutic relationships focused on patient needs."
        },
        {
          id: 6,
          question: "What is an ethical communication practice?",
          options: [
            "Sharing interesting cases with friends",
            "Protecting patient confidentiality",
            "Using technical terms to sound professional",
            "Avoiding difficult conversations"
          ],
          correctAnswer: 1,
          explanation: "Protecting patient confidentiality is an ethical communication practice that builds trust and follows legal requirements."
        },
        {
          id: 7,
          question: "What should nurses avoid on social media?",
          options: [
            "All social media use",
            "Sharing patient information",
            "Connecting with colleagues",
            "Posting about healthcare topics"
          ],
          correctAnswer: 1,
          explanation: "Nurses should never share any patient information, including photos, details, or even vague references on social media."
        },
        {
          id: 8,
          question: "What helps with difficult conversations?",
          options: [
            "Avoiding eye contact",
            "Using clear, compassionate language",
            "Speaking quickly to finish faster",
            "Using complex medical terms"
          ],
          correctAnswer: 1,
          explanation: "Clear, compassionate language helps patients understand difficult information while feeling supported and respected."
        },
        {
          id: 9,
          question: "What is an open-ended question?",
          options: [
            "Question with yes/no answer",
            "Question that encourages detailed response",
            "Question about open wounds",
            "Question at the beginning of conversation"
          ],
          correctAnswer: 1,
          explanation: "Open-ended questions (like 'How are you feeling today?') encourage patients to share more information than yes/no questions."
        },
        {
          id: 10,
          question: "Why are handoff reports important?",
          options: [
            "To reduce paperwork",
            "To ensure complete information transfer between shifts",
            "To assign blame for problems",
            "To socialize with colleagues"
          ],
          correctAnswer: 1,
          explanation: "Handoff reports ensure continuity of care by transferring complete patient information between healthcare providers."
        },
        {
          id: 11,
          question: "What does reflection in communication mean?",
          options: [
            "Thinking after conversation ends",
            "Repeating or rephrasing to show understanding",
            "Looking at yourself while talking",
            "Remembering past conversations"
          ],
          correctAnswer: 1,
          explanation: "Reflection involves repeating or rephrasing what the patient said to confirm understanding and show you're listening."
        },
        {
          id: 12,
          question: "What should nurses do with angry patients?",
          options: [
            "Leave the room immediately",
            "Stay calm and listen to concerns",
            "Call security right away",
            "Argue back to defend yourself"
          ],
          correctAnswer: 1,
          explanation: "Staying calm and listening to concerns often helps defuse anger and identify the real issues needing attention."
        },
        {
          id: 13,
          question: "What is empathy in communication?",
          options: [
            "Feeling sorry for patients",
            "Acknowledging feelings without judgment",
            "Agreeing with everything patients say",
            "Sharing your similar experiences"
          ],
          correctAnswer: 1,
          explanation: "Empathy means acknowledging and understanding patients' feelings without judgment or necessarily sharing the same feelings."
        },
        {
          id: 14,
          question: "What is informed consent communication?",
          options: [
            "Getting permission for treatment",
            "Ensuring patient understands before consenting",
            "Having family members sign forms",
            "Using standard consent forms only"
          ],
          correctAnswer: 1,
          explanation: "Informed consent requires ensuring patients fully understand procedures, risks, and alternatives before giving permission."
        },
        {
          id: 15,
          question: "Why is nonverbal communication important?",
          options: [
            "It's more important than verbal communication",
            "It can reinforce or contradict verbal messages",
            "It replaces the need for words",
            "It's only important with hearing-impaired patients"
          ],
          correctAnswer: 1,
          explanation: "Nonverbal cues (body language, eye contact, tone) can reinforce or contradict verbal messages, affecting how communication is received."
        },
        {
          id: 16,
          question: "What is advocacy in nursing communication?",
          options: [
            "Advertising hospital services",
            "Speaking up for patient needs",
            "Promoting nursing profession",
            "Defending hospital policies"
          ],
          correctAnswer: 1,
          explanation: "Advocacy means speaking up for patients' needs, rights, and preferences within the healthcare system."
        },
        {
          id: 17,
          question: "How should personal disclosure be handled?",
          options: [
            "Never share anything personal",
            "Limited and purposeful if helps therapeutic relationship",
            "Share freely to build friendship",
            "Only share with patients similar to you"
          ],
          correctAnswer: 1,
          explanation: "Personal disclosure should be limited, purposeful, and only if it benefits the therapeutic relationship and patient care."
        },
        {
          id: 18,
          question: "What helps with cultural communication differences?",
          options: [
            "Assuming all patients want the same communication",
            "Being aware of and respecting different styles",
            "Using medical terms everyone understands",
            "Having family members interpret cultural needs"
          ],
          correctAnswer: 1,
          explanation: "Being aware of and respecting different cultural communication styles helps provide culturally competent care."
        },
        {
          id: 19,
          question: "Why seek feedback on communication skills?",
          options: [
            "To prove you're good at communication",
            "To identify areas for improvement",
            "To compare yourself with others",
            "To meet performance review requirements"
          ],
          correctAnswer: 1,
          explanation: "Seeking feedback helps identify communication strengths and areas needing improvement for professional growth."
        },
        {
          id: 20,
          question: "What is conflict resolution in team communication?",
          options: [
            "Avoiding disagreements completely",
            "Addressing disagreements constructively",
            "Letting supervisors handle all conflicts",
            "Keeping conflicts private from team"
          ],
          correctAnswer: 1,
          explanation: "Constructive conflict resolution addresses disagreements openly and respectfully to find solutions that benefit patient care."
        }
      ]
    },
    {
      id: 6,
      title: "Common Procedures and Emergency Response",
      content: `# Module 6: Common Procedures and Emergency Response

## Introduction to Basic Nursing Procedures
Nurses perform many routine procedures to monitor health and provide care. Understanding these procedures ensures safe and effective patient care.

## Vital Signs Procedure
Steps for accurate vital signs measurement:
1. **Preparation** - Clean equipment, explain procedure to patient
2. **Temperature** - Use appropriate method (oral, axillary, tympanic)
3. **Pulse** - Count for 30 seconds, multiply by 2 for rate
4. **Respiration** - Count breaths for 30 seconds without patient awareness
5. **Blood Pressure** - Proper cuff size and positioning
6. **Documentation** - Record all measurements accurately

## Wound Care Basics
Basic principles of wound care:
- **Assessment** - Size, color, drainage, surrounding skin
- **Cleaning** - Clean to dirty, center to outward
- **Dressing** - Choose appropriate dressing type
- **Documentation** - Detailed description of wound and care

## Specimen Collection
Collecting samples for laboratory testing:
- **Urine specimens** - Clean-catch midstream technique
- **Stool specimens** - Proper collection and labeling
- **Sputum specimens** - Early morning collection preferred
- **Blood glucose** - Fingerstick technique and safety

## Assisting with Elimination
Helping patients with bathroom needs:
- **Bedpan/urinal use** - Proper positioning and privacy
- **Catheter care** - Keeping area clean, monitoring output
- **Constipation prevention** - Fluids, fiber, activity
- **Incontinence care** - Skin protection and dignity

## Medication Administration Basics
Fundamental medication principles:
- **Five Rights** - Patient, drug, dose, time, route
- **Oral medications** - Proper administration techniques
- **Topical medications** - Application methods
- **Documentation** - Immediate recording after administration

## Emergency Response Preparedness
Being ready for urgent situations:
- **Emergency call systems** - Know location and how to use
- **Basic life support** - Recognize when to call for help
- **Emergency equipment** - Location of crash carts, AEDs
- **Your role** - Stay with patient, follow instructions

## Recognizing Emergencies
Identifying signs that need immediate attention:
- **Difficulty breathing** - Rapid, labored, or absent breathing
- **Chest pain** - Especially with other symptoms
- **Severe bleeding** - Uncontrolled or pulsating
- **Change in consciousness** - Confusion, unresponsiveness
- **Severe pain** - Sudden or intense pain

## Fall Prevention and Response
Preventing and managing patient falls:
- **Risk assessment** - Identify patients at high risk
- **Prevention measures** - Bed alarms, non-slip footwear
- **If fall occurs** - Stay with patient, assess injuries
- **Documentation** - Complete incident report

## Pain Assessment
Evaluating and documenting pain:
- **Location** - Where does it hurt?
- **Intensity** - Use pain scale (0-10)
- **Quality** - Describe type of pain
- **Timing** - When did it start? Constant or intermittent?
- **Documentation** - Record all assessment details

## End of Shift Procedures
Completing care before leaving:
- **Handoff preparation** - Organize information for next shift
- **Patient rounds** - Check on each patient before leaving
- **Equipment check** - Ensure needed supplies are available
- **Documentation completion** - Finish all required charting`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How long should you count pulse when measuring vital signs?",
          options: [
            "15 seconds",
            "30 seconds",
            "60 seconds",
            "10 seconds"
          ],
          correctAnswer: 1,
          explanation: "Count pulse for 30 seconds and multiply by 2 to get beats per minute, unless irregular (then count full 60 seconds)."
        },
        {
          id: 2,
          question: "What is the clean-catch midstream technique for?",
          options: [
            "Blood collection",
            "Urine specimen collection",
            "Wound cleaning",
            "Hand washing"
          ],
          correctAnswer: 1,
          explanation: "Clean-catch midstream technique collects urine specimens while minimizing contamination from skin bacteria."
        },
        {
          id: 3,
          question: "What are the Five Rights of medication administration?",
          options: [
            "Right patient, drug, dose, time, route",
            "Right room, bed, doctor, time, dose",
            "Right patient, family, drug, dose, time",
            "Right diagnosis, drug, dose, time, route"
          ],
          correctAnswer: 0,
          explanation: "The Five Rights are: Right Patient, Right Drug, Right Dose, Right Time, and Right Route."
        },
        {
          id: 4,
          question: "What should you do first if a patient falls?",
          options: [
            "Run to get help",
            "Stay with patient and assess injuries",
            "Document the fall immediately",
            "Move patient back to bed"
          ],
          correctAnswer: 1,
          explanation: "Stay with the patient, assess for injuries, and call for help if needed before moving the patient."
        },
        {
          id: 5,
          question: "How should respiration be counted?",
          options: [
            "Tell patient you're counting breaths",
            "Count without patient awareness",
            "Only count if breathing seems abnormal",
            "Count for 15 seconds only"
          ],
          correctAnswer: 1,
          explanation: "Count respirations without the patient's awareness to get an accurate rate (people may change breathing if they know you're counting)."
        },
        {
          id: 6,
          question: "What is important about wound cleaning direction?",
          options: [
            "Always clean in circles",
            "Clean from center outward",
            "Clean in straight lines",
            "Direction doesn't matter if you're thorough"
          ],
          correctAnswer: 1,
          explanation: "Clean wounds from the center outward to avoid introducing bacteria from surrounding skin into the wound."
        },
        {
          id: 7,
          question: "When is the best time to collect sputum specimens?",
          options: [
            "After meals",
            "Early morning",
            "Before bedtime",
            "Anytime is fine"
          ],
          correctAnswer: 1,
          explanation: "Early morning specimens are best because secretions accumulate overnight, providing a better sample for testing."
        },
        {
          id: 8,
          question: "What should be checked for proper blood pressure measurement?",
          options: [
            "Only the reading number",
            "Cuff size and patient positioning",
            "Time of day only",
            "Patient's age only"
          ],
          correctAnswer: 1,
          explanation: "Proper cuff size (bladder encircling 80% of arm) and correct patient positioning (arm at heart level) are essential for accurate BP measurement."
        },
        {
          id: 9,
          question: "What does AED stand for in emergency equipment?",
          options: [
            "Automated Emergency Device",
            "Automated External Defibrillator",
            "Advanced Emergency Defibrillator",
            "Automatic External Device"
          ],
          correctAnswer: 1,
          explanation: "AED stands for Automated External Defibrillator, used to treat sudden cardiac arrest."
        },
        {
          id: 10,
          question: "What should be assessed about pain?",
          options: [
            "Only intensity",
            "Location, intensity, quality, timing",
            "Only what patient says",
            "Only if patient complains"
          ],
          correctAnswer: 1,
          explanation: "Complete pain assessment includes location, intensity (using pain scale), quality (description), and timing (when it started, pattern)."
        },
        {
          id: 11,
          question: "Why document vital signs immediately?",
          options: [
            "To avoid forgetting numbers",
            "To ensure accurate records and timely response to changes",
            "Because it's hospital policy",
            "To complete paperwork quickly"
          ],
          correctAnswer: 1,
          explanation: "Immediate documentation ensures accuracy and allows quick recognition of changes needing intervention."
        },
        {
          id: 12,
          question: "What helps prevent constipation in patients?",
          options: [
            "Limited fluid intake",
            "Adequate fluids, fiber, and activity",
            "Bed rest only",
            "Medications only"
          ],
          correctAnswer: 1,
          explanation: "Adequate fluid intake, dietary fiber, and physical activity (as tolerated) help prevent constipation."
        },
        {
          id: 13,
          question: "When should you call for emergency help?",
          options: [
            "For any patient concern",
            "When patient has difficulty breathing or chest pain",
            "Only when doctor orders it",
            "At the end of your shift"
          ],
          correctAnswer: 1,
          explanation: "Call for emergency help immediately for difficulty breathing, chest pain, severe bleeding, or change in consciousness."
        },
        {
          id: 14,
          question: "What is important about catheter care?",
          options: [
            "Only doctors should touch catheters",
            "Keeping area clean and monitoring output",
            "Changing catheters daily",
            "Using antibiotic ointment always"
          ],
          correctAnswer: 1,
          explanation: "Catheter care involves keeping the insertion site clean and monitoring urine output for amount and characteristics."
        },
        {
          id: 15,
          question: "What should be done before end of shift?",
          options: [
            "Only complete documentation",
            "Check on each patient and organize handoff information",
            "Clean the nurses' station",
            "Prepare next day's assignments"
          ],
          correctAnswer: 1,
          explanation: "Before end of shift, check on each patient and organize information for a complete handoff report to the next shift."
        },
        {
          id: 16,
          question: "What is bed alarm used for?",
          options: [
            "Wake patients for medications",
            "Fall prevention by alerting staff when patient gets up",
            "Call nurses to station",
            "Monitor patient sleep patterns"
          ],
          correctAnswer: 1,
          explanation: "Bed alarms alert staff when at-risk patients attempt to get out of bed unassisted, helping prevent falls."
        },
        {
          id: 17,
          question: "How should oral medications be administered?",
          options: [
            "Mixed with any food or drink",
            "With appropriate liquid (usually water)",
            "Only with juice",
            "Without any liquid"
          ],
          correctAnswer: 1,
          explanation: "Oral medications should be given with appropriate liquid (usually water) unless specific instructions say otherwise."
        },
        {
          id: 18,
          question: "What indicates possible emergency with breathing?",
          options: [
            "Normal breathing rate",
            "Rapid, labored, or absent breathing",
            "Occasional sighing",
            "Breathing through nose"
          ],
          correctAnswer: 1,
          explanation: "Rapid breathing, labored breathing (using accessory muscles), or absent breathing are emergency signs needing immediate attention."
        },
        {
          id: 19,
          question: "Why assess wound surrounding skin?",
          options: [
            "For documentation completeness",
            "To check for redness, swelling, or breakdown",
            "To compare with other body areas",
            "To determine patient's overall skin color"
          ],
          correctAnswer: 1,
          explanation: "Assessing skin around wounds checks for signs of infection (redness, warmth), swelling, or skin breakdown from drainage."
        },
        {
          id: 20,
          question: "What is your role during a code emergency?",
          options: [
            "Take charge immediately",
            "Stay with patient and follow instructions",
            "Leave to get more help",
            "Document what happens"
          ],
          correctAnswer: 1,
          explanation: "During a code, stay with the patient, follow the team leader's instructions, and be ready to assist as directed."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Nursing Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Nursing Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three core nursing principles?",
        options: [
          "Speed, accuracy, efficiency",
          "Patient-Centered Care, Safety First, Professional Behavior",
          "Kindness, intelligence, strength",
          "Documentation, medication, procedures"
        ],
        correctAnswer: 1,
        explanation: "The three core nursing principles are Patient-Centered Care, Safety First, and Professional Behavior."
      },
      {
        id: 2,
        question: "How often should bedridden patients be repositioned?",
        options: [
          "Every 30 minutes",
          "Every 2 hours",
          "Once per shift",
          "When they complain of discomfort"
        ],
        correctAnswer: 1,
        explanation: "Bedridden patients should be turned and repositioned at least every 2 hours to prevent pressure sores."
      },
      {
        id: 3,
        question: "What does the medical prefix 'hyper-' mean?",
        options: [
          "Low or below normal",
          "High or above normal",
          "Equal or same",
          "Around or surrounding"
        ],
        correctAnswer: 1,
        explanation: "The prefix 'hyper-' means high or above normal, as in hypertension (high blood pressure)."
      },
      {
        id: 4,
        question: "What is the most effective infection prevention practice?",
        options: [
          "Wearing gloves at all times",
          "Proper hand hygiene",
          "Using expensive disinfectants",
          "Keeping windows closed"
        ],
        correctAnswer: 1,
        explanation: "Proper hand hygiene is the single most effective method for preventing infection transmission."
      },
      {
        id: 5,
        question: "What does therapeutic communication help patients feel?",
        options: [
          "Intimidated by medical knowledge",
          "Understood and supported",
          "Rushed through care",
          "Like they're in school"
        ],
        correctAnswer: 1,
        explanation: "Therapeutic communication helps patients feel understood, supported, and involved in their care."
      },
      {
        id: 6,
        question: "How long should you count pulse when measuring vital signs?",
        options: [
          "15 seconds",
          "30 seconds",
          "60 seconds",
          "10 seconds"
        ],
        correctAnswer: 1,
        explanation: "Count pulse for 30 seconds and multiply by 2, unless irregular (then count full 60 seconds)."
      },
      {
        id: 7,
        question: "What is the planning phase in nursing?",
        options: [
          "Creating care plans for patient needs",
          "Scheduling staff shifts",
          "Ordering medical supplies",
          "Designing hospital buildings"
        ],
        correctAnswer: 0,
        explanation: "The planning phase involves creating individualized care plans based on patient assessment."
      },
      {
        id: 8,
        question: "What should be included in fluid monitoring?",
        options: [
          "Only water intake",
          "Tracking intake and output of all fluids",
          "Only urine output",
          "Only IV fluids given"
        ],
        correctAnswer: 1,
        explanation: "Fluid monitoring involves tracking all fluids taken in and all fluids released from the body."
      },
      {
        id: 9,
        question: "What does the abbreviation 'PRN' mean?",
        options: [
          "Every morning",
          "As needed",
          "With food",
          "Before bed"
        ],
        correctAnswer: 1,
        explanation: "PRN means 'as needed' for medications given only when specific symptoms occur."
      },
      {
        id: 10,
        question: "How many links are in the chain of infection?",
        options: [
          "Three links",
          "Six links",
          "Eight links",
          "Ten links"
        ],
        correctAnswer: 1,
        explanation: "There are six links: infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host."
      },
      {
        id: 11,
        question: "What does SBAR stand for?",
        options: [
          "Situation, Background, Action, Result",
          "Situation, Background, Assessment, Recommendation",
          "Summary, Background, Assessment, Response",
          "Situation, Briefing, Action, Review"
        ],
        correctAnswer: 1,
        explanation: "SBAR is a communication tool: Situation, Background, Assessment, Recommendation."
      },
      {
        id: 12,
        question: "What is the clean-catch midstream technique for?",
        options: [
          "Blood collection",
          "Urine specimen collection",
          "Wound cleaning",
          "Hand washing"
        ],
        correctAnswer: 1,
        explanation: "Clean-catch midstream technique collects urine specimens while minimizing contamination."
      },
      {
        id: 13,
        question: "Why is accurate documentation important?",
        options: [
          "It helps with hospital budgeting",
          "It provides consistent care information for the healthcare team",
          "It reduces the need for patient interaction",
          "It makes nursing reports look professional"
        ],
        correctAnswer: 1,
        explanation: "Accurate documentation ensures all healthcare team members have consistent information for coordinated care."
      },
      {
        id: 14,
        question: "What should nurses do with angry patients?",
        options: [
          "Leave the room immediately",
          "Stay calm and listen to concerns",
          "Call security right away",
          "Argue back to defend yourself"
        ],
        correctAnswer: 1,
        explanation: "Staying calm and listening often helps defuse anger and identify real issues needing attention."
      },
      {
        id: 15,
        question: "What are the Five Rights of medication administration?",
        options: [
          "Right patient, drug, dose, time, route",
          "Right room, bed, doctor, time, dose",
          "Right patient, family, drug, dose, time",
          "Right diagnosis, drug, dose, time, route"
        ],
        correctAnswer: 0,
        explanation: "The Five Rights are: Right Patient, Drug, Dose, Time, and Route."
      },
      {
        id: 16,
        question: "What does ethical behavior in nursing include?",
        options: [
          "Protecting patient privacy",
          "Working the fastest pace",
          "Following all doctor orders without question",
          "Avoiding difficult patients"
        ],
        correctAnswer: 0,
        explanation: "Ethical behavior includes protecting patient confidentiality, honesty, and advocating for patient rights."
      },
      {
        id: 17,
        question: "When should soap and water be used instead of alcohol rub?",
        options: [
          "Always, it's better than alcohol rub",
          "When hands are visibly dirty",
          "Only at the beginning of shift",
          "After removing gloves"
        ],
        correctAnswer: 1,
        explanation: "Soap and water should be used when hands are visibly dirty or contaminated with body fluids."
      },
      {
        id: 18,
        question: "What is an open-ended question?",
        options: [
          "Question with yes/no answer",
          "Question that encourages detailed response",
          "Question about open wounds",
          "Question at the beginning of conversation"
        ],
        correctAnswer: 1,
        explanation: "Open-ended questions encourage patients to share more information than yes/no questions."
      },
      {
        id: 19,
        question: "What should you do first if a patient falls?",
        options: [
          "Run to get help",
          "Stay with patient and assess injuries",
          "Document the fall immediately",
          "Move patient back to bed"
        ],
        correctAnswer: 1,
        explanation: "Stay with the patient, assess for injuries, and call for help if needed before moving."
      },
      {
        id: 20,
        question: "What is the main goal of nursing?",
        options: [
          "To provide quality care to patients",
          "To manage hospital finances",
          "To conduct medical research",
          "To train new doctors"
        ],
        correctAnswer: 0,
        explanation: "The main goal of nursing is to provide quality care to patients of all ages."
      },
      {
        id: 21,
        question: "What does assessment involve in nursing?",
        options: [
          "Giving medications to patients",
          "Observing and recording patient information",
          "Cleaning hospital rooms",
          "Scheduling doctor appointments"
        ],
        correctAnswer: 1,
        explanation: "Assessment involves observing, measuring, and recording patient information."
      },
      {
        id: 22,
        question: "What helps prevent nurse injuries during patient movement?",
        options: [
          "Asking doctors to help",
          "Using proper body mechanics",
          "Avoiding heavy patients",
          "Using quick movements"
        ],
        correctAnswer: 1,
        explanation: "Proper body mechanics helps prevent back and muscle injuries when moving patients."
      },
      {
        id: 23,
        question: "What does factual documentation mean?",
        options: [
          "Writing what you think might be happening",
          "Only writing positive observations",
          "Writing only what you see, hear, or measure",
          "Using impressive medical terms"
        ],
        correctAnswer: 2,
        explanation: "Factual documentation means recording only observable, measurable information."
      },
      {
        id: 24,
        question: "What type of precaution is needed for tuberculosis?",
        options: [
          "Contact Precautions",
          "Airborne Precautions",
          "Droplet Precautions",
          "Standard Precautions only"
        ],
        correctAnswer: 1,
        explanation: "Airborne Precautions are required for tuberculosis due to airborne transmission."
      },
      {
        id: 25,
        question: "What is professional boundaries?",
        options: [
          "Rules about work hours",
          "Appropriate limits in nurse-patient relationships",
          "Hospital property lines",
          "Departmental divisions"
        ],
        correctAnswer: 1,
        explanation: "Professional boundaries maintain therapeutic relationships focused on patient needs."
      },
      {
        id: 26,
        question: "How should respiration be counted?",
        options: [
          "Tell patient you're counting breaths",
          "Count without patient awareness",
          "Only count if breathing seems abnormal",
          "Count for 15 seconds only"
        ],
        correctAnswer: 1,
        explanation: "Count respirations without patient awareness to get an accurate rate."
      },
      {
        id: 27,
        question: "What builds trust between nurses and patients?",
        options: [
          "Fast service",
          "Modern equipment",
          "Ethical behavior",
          "Fancy uniforms"
        ],
        correctAnswer: 2,
        explanation: "Ethical behavior including honesty and privacy protection builds trust."
      },
      {
        id: 28,
        question: "Why track both nutrition and hydration?",
        options: [
          "For hospital billing purposes",
          "Both are essential for healing and body function",
          "To compare patients with each other",
          "To reduce food waste"
        ],
        correctAnswer: 1,
        explanation: "Nutrition provides energy for healing, hydration maintains organ function."
      },
      {
        id: 29,
        question: "What should medication documentation include?",
        options: [
          "Only drug name and dose",
          "Drug name, dose, time, route, and patient response",
          "Only the time given",
          "Only the nurse's signature"
        ],
        correctAnswer: 1,
        explanation: "Complete medication documentation includes all Five Rights plus patient response."
      },
      {
        id: 30,
        question: "What is the correct PPE removal sequence?",
        options: [
          "Gloves, gown, mask, eye protection",
          "Gloves, gown, eye protection, mask",
          "Gown, gloves, mask, eye protection",
          "Mask, eye protection, gloves, gown"
        ],
        correctAnswer: 1,
        explanation: "PPE removal order: gloves, gown, eye protection, mask to prevent self-contamination."
      },
      {
        id: 31,
        question: "What is empathy in communication?",
        options: [
          "Feeling sorry for patients",
          "Acknowledging feelings without judgment",
          "Agreeing with everything patients say",
          "Sharing your similar experiences"
        ],
        correctAnswer: 1,
        explanation: "Empathy means acknowledging and understanding patients' feelings without judgment."
      },
      {
        id: 32,
        question: "What does AED stand for?",
        options: [
          "Automated Emergency Device",
          "Automated External Defibrillator",
          "Advanced Emergency Defibrillator",
          "Automatic External Device"
        ],
        correctAnswer: 1,
        explanation: "AED stands for Automated External Defibrillator for cardiac arrest."
      },
      {
        id: 33,
        question: "What should nurses avoid on social media?",
        options: [
          "All social media use",
          "Sharing patient information",
          "Connecting with colleagues",
          "Posting about healthcare topics"
        ],
        correctAnswer: 1,
        explanation: "Never share patient information, including photos or details, on social media."
      },
      {
        id: 34,
        question: "What helps prevent constipation in patients?",
        options: [
          "Limited fluid intake",
          "Adequate fluids, fiber, and activity",
          "Bed rest only",
          "Medications only"
        ],
        correctAnswer: 1,
        explanation: "Fluids, fiber, and activity help prevent constipation."
      },
      {
        id: 35,
        question: "Why are handoff reports important?",
        options: [
          "To reduce paperwork",
          "To ensure complete information transfer between shifts",
          "To assign blame for problems",
          "To socialize with colleagues"
        ],
        correctAnswer: 1,
        explanation: "Handoff reports ensure continuity of care by transferring complete patient information."
      },
      {
        id: 36,
        question: "What indicates possible emergency with breathing?",
        options: [
          "Normal breathing rate",
          "Rapid, labored, or absent breathing",
          "Occasional sighing",
          "Breathing through nose"
        ],
        correctAnswer: 1,
        explanation: "Rapid, labored, or absent breathing are emergency signs."
      },
      {
        id: 37,
        question: "What is advocacy in nursing communication?",
        options: [
          "Advertising hospital services",
          "Speaking up for patient needs",
          "Promoting nursing profession",
          "Defending hospital policies"
        ],
        correctAnswer: 1,
        explanation: "Advocacy means speaking up for patients' needs and rights."
      },
      {
        id: 38,
        question: "What should be checked for proper blood pressure measurement?",
        options: [
          "Only the reading number",
          "Cuff size and patient positioning",
          "Time of day only",
          "Patient's age only"
        ],
        correctAnswer: 1,
        explanation: "Proper cuff size and correct patient positioning are essential for accuracy."
      },
      {
        id: 39,
        question: "What is your role during a code emergency?",
        options: [
          "Take charge immediately",
          "Stay with patient and follow instructions",
          "Leave to get more help",
          "Document what happens"
        ],
        correctAnswer: 1,
        explanation: "During a code, stay with patient and follow team leader's instructions."
      },
      {
        id: 40,
        question: "What should be done before end of shift?",
        options: [
          "Only complete documentation",
          "Check on each patient and organize handoff information",
          "Clean the nurses' station",
          "Prepare next day's assignments"
        ],
        correctAnswer: 1,
        explanation: "Check on each patient and organize information for complete handoff report."
      }
    ]
  }
};

export default nursingCertificateCourse;
