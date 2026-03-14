export const industrialSafetyCertificateCourse = {
  // ==================== COURSE METADATA ====================
  id: "industrial-safety-certificate",
  title: "Industrial Safety (Certificate)",
  description: "Learn essential workplace safety principles, hazard identification, and accident prevention techniques for industrial environments. Gain practical skills to create safer workplaces and comply with basic safety regulations.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🛡️",
  badge: "Certificate",
  
  // ==================== MODULE STRUCTURE ====================
  modules: [
    // ==================== MODULE 1 ====================
    {
      id: 1,
      title: "Introduction to Workplace Safety",
      content: `
## **Fundamentals of Industrial Safety**

Safety in industrial workplaces protects workers from harm and creates productive work environments. Understanding basic safety principles is the first step toward preventing accidents and injuries.

### **1. What is Industrial Safety?**
- **Industrial safety** prevents accidents and injuries in workplaces
- **Accidents** are unplanned events that cause harm or damage
- **Hazards** are conditions that could cause accidents
- **Risks** measure how likely accidents will happen
- **Safety culture** is how seriously everyone takes safety

### **2. Why Safety Matters**
- **Protects workers** from injury and illness
- **Saves money** by reducing accident costs
- **Increases productivity** with fewer work interruptions
- **Legal requirement** in most countries and industries
- **Moral responsibility** to protect human life and health

### **3. Basic Safety Principles**
- **Prevention is better than cure**: Stop accidents before they happen
- **Everyone is responsible**: Safety is not just management's job
- **Training is essential**: Workers need to know safety procedures
- **Regular inspections** find problems before they cause accidents
- **Reporting systems** help learn from near-misses and incidents

### **Real-World Application**
A manufacturing plant that focuses on safety has fewer accidents, lower insurance costs, and happier workers. Safety signs, regular training, and proper equipment maintenance are visible signs of good safety practices.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does industrial safety prevent?",
          options: ["Only big accidents", "Accidents and injuries", "Only equipment damage", "Only management problems"],
          correctAnswer: 1,
          explanation: "Industrial safety aims to prevent all accidents and injuries in the workplace."
        },
        {
          id: 2,
          question: "What are hazards?",
          options: ["Completed accidents", "Conditions that could cause accidents", "Safety equipment", "Trained workers"],
          correctAnswer: 1,
          explanation: "Hazards are conditions or situations that could potentially cause accidents or injuries."
        },
        {
          id: 3,
          question: "What measures how likely accidents will happen?",
          options: ["Hazards", "Risks", "Accidents", "Safety rules"],
          correctAnswer: 1,
          explanation: "Risks measure the probability that accidents will occur from existing hazards."
        },
        {
          id: 4,
          question: "What is safety culture?",
          options: ["Only written rules", "How seriously everyone takes safety", "Only management's attitude", "Government regulations"],
          correctAnswer: 1,
          explanation: "Safety culture reflects how seriously all workers and management prioritize safety."
        },
        {
          id: 5,
          question: "How does safety help businesses save money?",
          options: ["By ignoring small accidents", "By reducing accident costs", "By eliminating all training", "By cutting safety equipment"],
          correctAnswer: 1,
          explanation: "Preventing accidents reduces costs for medical care, repairs, and lost work time."
        },
        {
          id: 6,
          question: "What increases with good safety practices?",
          options: ["Accidents", "Productivity", "Insurance costs", "Worker injuries"],
          correctAnswer: 1,
          explanation: "Good safety practices increase productivity by reducing work interruptions from accidents."
        },
        {
          id: 7,
          question: "Why is safety a legal requirement?",
          options: ["To make work harder", "To protect workers by law", "To increase profits", "To create paperwork"],
          correctAnswer: 1,
          explanation: "Laws require employers to provide safe working conditions for all workers."
        },
        {
          id: 8,
          question: "What principle says 'stop accidents before they happen'?",
          options: ["Everyone is responsible", "Prevention is better than cure", "Training is essential", "Report everything"],
          correctAnswer: 1,
          explanation: "The prevention principle focuses on stopping accidents before they occur."
        },
        {
          id: 9,
          question: "Who is responsible for safety?",
          options: ["Only management", "Only safety officers", "Everyone", "Only experienced workers"],
          correctAnswer: 2,
          explanation: "Safety is everyone's responsibility, from management to newest workers."
        },
        {
          id: 10,
          question: "What helps learn from near-misses?",
          options: ["Ignoring them", "Reporting systems", "Hiding information", "Blaming workers"],
          correctAnswer: 1,
          explanation: "Reporting systems help identify problems before they cause serious accidents."
        },
        {
          id: 11,
          question: "What are unplanned events that cause harm?",
          options: ["Hazards", "Accidents", "Risks", "Procedures"],
          correctAnswer: 1,
          explanation: "Accidents are unexpected events that result in injury, illness, or damage."
        },
        {
          id: 12,
          question: "What is NOT a benefit of good safety?",
          options: ["Protects workers", "Increases productivity", "Increases accidents", "Saves money"],
          correctAnswer: 2,
          explanation: "Good safety practices reduce accidents, not increase them."
        },
        {
          id: 13,
          question: "Why is training essential?",
          options: ["To create paperwork", "Workers need to know safety procedures", "To fill time", "Because it's free"],
          correctAnswer: 1,
          explanation: "Training ensures workers know how to work safely and respond to emergencies."
        },
        {
          id: 14,
          question: "What do regular inspections find?",
          options: ["Only big problems", "Problems before they cause accidents", "Who to blame", "Nothing useful"],
          correctAnswer: 1,
          explanation: "Regular inspections identify potential problems before they lead to accidents."
        },
        {
          id: 15,
          question: "What are visible signs of good safety practices?",
          options: ["Dirty floors", "Safety signs and training", "Broken equipment", "No safety equipment"],
          correctAnswer: 1,
          explanation: "Safety signs, training sessions, and maintained equipment show good safety practices."
        },
        {
          id: 16,
          question: "What is a moral responsibility in safety?",
          options: ["Making profits", "Protecting human life and health", "Following trends", "Creating jobs"],
          correctAnswer: 1,
          explanation: "Employers have a moral duty to protect workers' health and safety."
        },
        {
          id: 17,
          question: "What happens in plants with good safety?",
          options: ["More accidents", "Fewer accidents and happier workers", "More injuries", "Less productivity"],
          correctAnswer: 1,
          explanation: "Good safety practices lead to fewer accidents and more satisfied workers."
        },
        {
          id: 18,
          question: "What is NOT part of basic safety principles?",
          options: ["Prevention first", "Everyone responsible", "Ignoring small issues", "Regular inspections"],
          correctAnswer: 2,
          explanation: "Ignoring safety issues contradicts good safety principles."
        },
        {
          id: 19,
          question: "What do reporting systems help with?",
          options: ["Blaming workers", "Learning from incidents", "Increasing paperwork", "Hiding problems"],
          correctAnswer: 1,
          explanation: "Reporting systems help organizations learn and improve from incidents."
        },
        {
          id: 20,
          question: "What creates productive work environments?",
          options: ["Ignoring safety", "Good safety practices", "Cutting corners", "Rushing work"],
          correctAnswer: 1,
          explanation: "Safe workplaces are more productive with fewer disruptions from accidents."
        }
      ]
    },

    // ==================== MODULE 2 ====================
    {
      id: 2,
      title: "Common Workplace Hazards",
      content: `
## **Identifying Potential Dangers**

Recognizing different types of hazards is essential for preventing accidents. This module covers the most common hazards found in industrial workplaces.

### **1. Physical Hazards**
- **Falls**: From heights or on same level
- **Struck-by**: Hit by moving objects or equipment
- **Caught-in/between**: Caught in machinery or between objects
- **Electrical**: Shock, burns, or electrocution
- **Noise**: Hearing damage from loud environments
- **Vibration**: Hand-arm or whole-body vibration

### **2. Chemical Hazards**
- **Toxic substances**: Poisons that harm health
- **Corrosives**: Chemicals that damage skin or eyes
- **Flammables**: Materials that easily catch fire
- **Explosives**: Materials that can explode
- **Dusts**: Fine particles that can burn or cause illness
- **Fumes**: Gases from heating or chemical reactions

### **3. Ergonomic Hazards**
- **Heavy lifting**: Back injuries from improper lifting
- **Repetitive motions**: Strain injuries from repeated movements
- **Poor posture**: Injuries from awkward positions
- **Improper workstation setup**: Strain from poorly arranged work areas
- **Vibration tools**: Nerve damage from constant vibration

### **Real-World Application**
In a warehouse, physical hazards include falls from ladders, chemical hazards from cleaning supplies, and ergonomic hazards from lifting heavy boxes. Recognizing these allows workers to take proper precautions like using safety harnesses, wearing gloves, and practicing proper lifting techniques.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of hazard involves falls?",
          options: ["Chemical", "Physical", "Ergonomic", "Biological"],
          correctAnswer: 1,
          explanation: "Falls are physical hazards involving gravity and height dangers."
        },
        {
          id: 2,
          question: "What hazard involves being hit by objects?",
          options: ["Struck-by", "Caught-in", "Electrical", "Chemical"],
          correctAnswer: 0,
          explanation: "Struck-by hazards involve being hit by moving objects or equipment."
        },
        {
          id: 3,
          question: "What type of hazard involves toxic substances?",
          options: ["Physical", "Chemical", "Ergonomic", "Noise"],
          correctAnswer: 1,
          explanation: "Toxic substances are chemical hazards that can poison or harm health."
        },
        {
          id: 4,
          question: "What hazard involves getting caught in machinery?",
          options: ["Struck-by", "Caught-in/between", "Electrical", "Fall"],
          correctAnswer: 1,
          explanation: "Caught-in/between hazards involve being trapped in equipment or between objects."
        },
        {
          id: 5,
          question: "What type of hazard causes hearing damage?",
          options: ["Chemical", "Noise", "Ergonomic", "Vibration"],
          correctAnswer: 1,
          explanation: "Noise hazards can cause permanent hearing loss over time."
        },
        {
          id: 6,
          question: "What are materials that easily catch fire?",
          options: ["Toxic", "Corrosives", "Flammables", "Dusts"],
          correctAnswer: 2,
          explanation: "Flammable materials ignite easily and burn rapidly."
        },
        {
          id: 7,
          question: "What type of hazard involves heavy lifting?",
          options: ["Physical", "Chemical", "Ergonomic", "Electrical"],
          correctAnswer: 2,
          explanation: "Heavy lifting is an ergonomic hazard that can cause back injuries."
        },
        {
          id: 8,
          question: "What hazard involves chemicals that damage skin?",
          options: ["Toxic", "Corrosives", "Flammables", "Explosives"],
          correctAnswer: 1,
          explanation: "Corrosive chemicals burn or damage skin, eyes, and other tissues."
        },
        {
          id: 9,
          question: "What hazard causes strain from repeated movements?",
          options: ["Falls", "Repetitive motions", "Electrical", "Chemical"],
          correctAnswer: 1,
          explanation: "Repetitive motions can cause strain injuries over time."
        },
        {
          id: 10,
          question: "What are fine particles that can burn or cause illness?",
          options: ["Fumes", "Dusts", "Gases", "Liquids"],
          correctAnswer: 1,
          explanation: "Dust hazards include flammable dust explosions and lung diseases."
        },
        {
          id: 11,
          question: "What hazard involves shock or electrocution?",
          options: ["Fall", "Electrical", "Chemical", "Noise"],
          correctAnswer: 1,
          explanation: "Electrical hazards can cause shock, burns, or fatal electrocution."
        },
        {
          id: 12,
          question: "What are materials that can explode?",
          options: ["Toxic", "Corrosives", "Explosives", "Dusts"],
          correctAnswer: 2,
          explanation: "Explosive materials can detonate or explode under certain conditions."
        },
        {
          id: 13,
          question: "What hazard involves poor posture?",
          options: ["Physical", "Chemical", "Ergonomic", "Noise"],
          correctAnswer: 2,
          explanation: "Poor posture is an ergonomic hazard that can cause muscle and joint problems."
        },
        {
          id: 14,
          question: "What are gases from heating or reactions?",
          options: ["Dusts", "Fumes", "Liquids", "Solids"],
          correctAnswer: 1,
          explanation: "Fumes are hazardous gases produced by heating or chemical processes."
        },
        {
          id: 15,
          question: "What hazard causes nerve damage from tools?",
          options: ["Noise", "Vibration", "Chemical", "Electrical"],
          correctAnswer: 1,
          explanation: "Vibration from power tools can cause nerve damage in hands and arms."
        },
        {
          id: 16,
          question: "What is NOT a physical hazard?",
          options: ["Falls", "Electrical", "Heavy lifting", "Struck-by"],
          correctAnswer: 2,
          explanation: "Heavy lifting is an ergonomic hazard, not a physical hazard."
        },
        {
          id: 17,
          question: "What prevents falls in warehouses?",
          options: ["Safety harnesses", "Nothing", "Rushing", "Ignoring height"],
          correctAnswer: 0,
          explanation: "Safety harnesses protect workers from falls when working at heights."
        },
        {
          id: 18,
          question: "What protects from chemical hazards?",
          options: ["Wearing gloves", "Ignoring labels", "No protection", "Working fast"],
          correctAnswer: 0,
          explanation: "Proper gloves protect skin from chemical exposure and damage."
        },
        {
          id: 19,
          question: "What prevents lifting injuries?",
          options: ["Proper lifting techniques", "Lifting quickly", "Bending back", "Twisting while lifting"],
          correctAnswer: 0,
          explanation: "Proper lifting techniques using legs, not back, prevent injuries."
        },
        {
          id: 20,
          question: "Why recognize hazards?",
          options: ["To ignore them", "To take proper precautions", "To blame others", "To work faster"],
          correctAnswer: 1,
          explanation: "Recognizing hazards allows workers to take appropriate safety precautions."
        }
      ]
    },

    // ==================== MODULE 3 ====================
    {
      id: 3,
      title: "Personal Protective Equipment",
      content: `
## **Using Safety Equipment Properly**

Personal Protective Equipment (PPE) is the last line of defense against workplace hazards. Knowing when and how to use PPE correctly saves lives and prevents injuries.

### **1. Head Protection**
- **Hard hats**: Protect from falling objects and bumps
- **Bump caps**: Light protection for low ceilings
- **Hair nets**: Keep hair away from machinery
- **Face shields**: Additional face protection
- **Inspection**: Check for cracks or damage before use
- **Proper fit**: Must fit securely without being too tight

### **2. Eye and Face Protection**
- **Safety glasses**: Basic impact protection
- **Goggles**: Seal around eyes for chemical or dust protection
- **Face shields**: Full face protection from splashes
- **Welding helmets**: Special protection for welding
- **Lens types**: Clear, tinted, or shaded for different work
- **Cleaning**: Keep clean for clear vision

### **3. Hand and Body Protection**
- **Gloves**: Different types for different hazards
- **Chemical-resistant**: For handling chemicals
- **Cut-resistant**: For sharp objects or blades
- **Heat-resistant**: For hot materials or surfaces
- **High-visibility vests**: Make workers visible
- **Aprons and coveralls**: Full body protection

### **Real-World Application**
A construction worker wears a hard hat to protect from falling objects, safety glasses for eye protection, gloves for hand protection, and steel-toed boots for foot protection. Each piece of PPE addresses specific hazards on the job site.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the last line of defense against hazards?",
          options: ["Safety training", "PPE", "Good luck", "Working fast"],
          correctAnswer: 1,
          explanation: "PPE is the final protection when other controls aren't enough."
        },
        {
          id: 2,
          question: "What protects from falling objects?",
          options: ["Safety glasses", "Hard hats", "Gloves", "Boots"],
          correctAnswer: 1,
          explanation: "Hard hats protect heads from falling objects and impacts."
        },
        {
          id: 3,
          question: "What provides basic eye impact protection?",
          options: ["Face shields", "Safety glasses", "Goggles", "Welding helmets"],
          correctAnswer: 1,
          explanation: "Safety glasses provide basic protection from flying particles."
        },
        {
          id: 4,
          question: "What seals around eyes for chemical protection?",
          options: ["Safety glasses", "Goggles", "Face shields", "Hard hats"],
          correctAnswer: 1,
          explanation: "Goggles create a seal to protect eyes from chemicals and dust."
        },
        {
          id: 5,
          question: "What are different glove types for?",
          options: ["Fashion", "Different hazards", "Cost savings", "Color coding"],
          correctAnswer: 1,
          explanation: "Different gloves protect against specific hazards like chemicals or cuts."
        },
        {
          id: 6,
          question: "What should you check before using PPE?",
          options: ["Its color", "For damage or defects", "Its cost", "Its brand"],
          correctAnswer: 1,
          explanation: "Always inspect PPE for damage before use to ensure it will protect properly."
        },
        {
          id: 7,
          question: "What keeps hair away from machinery?",
          options: ["Hard hats", "Hair nets", "Face shields", "Gloves"],
          correctAnswer: 1,
          explanation: "Hair nets prevent hair from getting caught in moving machinery."
        },
        {
          id: 8,
          question: "What provides full face protection from splashes?",
          options: ["Safety glasses", "Goggles", "Face shields", "Hard hats"],
          correctAnswer: 2,
          explanation: "Face shields protect the entire face from chemical splashes or flying particles."
        },
        {
          id: 9,
          question: "What protects hands from chemicals?",
          options: ["Cut-resistant gloves", "Chemical-resistant gloves", "Leather gloves", "Cotton gloves"],
          correctAnswer: 1,
          explanation: "Chemical-resistant gloves prevent chemicals from contacting skin."
        },
        {
          id: 10,
          question: "What makes workers visible?",
          options: ["Hard hats", "High-visibility vests", "Gloves", "Safety glasses"],
          correctAnswer: 1,
          explanation: "High-visibility clothing makes workers easy to see, preventing accidents."
        },
        {
          id: 11,
          question: "What is light head protection for low ceilings?",
          options: ["Hard hats", "Bump caps", "Hair nets", "Face shields"],
          correctAnswer: 1,
          explanation: "Bump caps provide light protection against bumps in tight spaces."
        },
        {
          id: 12,
          question: "What is special protection for welding?",
          options: ["Safety glasses", "Goggles", "Welding helmets", "Face shields"],
          correctAnswer: 2,
          explanation: "Welding helmets protect eyes and face from intense light and sparks."
        },
        {
          id: 13,
          question: "What protects hands from sharp objects?",
          options: ["Chemical-resistant gloves", "Cut-resistant gloves", "Heat-resistant gloves", "Leather gloves"],
          correctAnswer: 1,
          explanation: "Cut-resistant gloves protect against cuts from sharp edges or blades."
        },
        {
          id: 14,
          question: "Why keep safety glasses clean?",
          options: ["For fashion", "For clear vision", "To save money", "To impress others"],
          correctAnswer: 1,
          explanation: "Clean safety glasses provide clear vision, which is essential for safety."
        },
        {
          id: 15,
          question: "What must PPE have for proper protection?",
          options: ["High cost", "Proper fit", "Bright colors", "Famous brand"],
          correctAnswer: 1,
          explanation: "PPE must fit properly to provide adequate protection."
        },
        {
          id: 16,
          question: "What protects feet on construction sites?",
          options: ["Sandals", "Steel-toed boots", "Running shoes", "Bare feet"],
          correctAnswer: 1,
          explanation: "Steel-toed boots protect feet from falling objects and crushing hazards."
        },
        {
          id: 17,
          question: "What protects from hot materials?",
          options: ["Chemical gloves", "Cut-resistant gloves", "Heat-resistant gloves", "Cotton gloves"],
          correctAnswer: 2,
          explanation: "Heat-resistant gloves protect hands from burns when handling hot items."
        },
        {
          id: 18,
          question: "What provides full body protection?",
          options: ["Gloves only", "Aprons and coveralls", "Hard hats only", "Safety glasses only"],
          correctAnswer: 1,
          explanation: "Aprons and coveralls protect clothing and skin from hazards."
        },
        {
          id: 19,
          question: "What do construction workers need for eye protection?",
          options: ["Nothing", "Safety glasses", "Sunglasses", "Regular glasses"],
          correctAnswer: 1,
          explanation: "Construction workers need safety glasses to protect from flying debris."
        },
        {
          id: 20,
          question: "What is essential for PPE to work?",
          options: ["Being expensive", "Proper use and fit", "Being new", "Color matching"],
          correctAnswer: 1,
          explanation: "PPE only protects when worn correctly and fits properly."
        }
      ]
    },

    // ==================== MODULE 4 ====================
    {
      id: 4,
      title: "Safety Procedures & Emergency Response",
      content: `
## **Following Rules & Handling Emergencies**

Knowing and following safety procedures prevents accidents, while emergency response knowledge saves lives when accidents do happen.

### **1. Basic Safety Procedures**
- **Lockout/tagout**: Safe energy control for equipment maintenance
- **Work permits**: Authorization for hazardous work
- **Housekeeping**: Keeping work areas clean and organized
- **Machine guarding**: Physical barriers on dangerous equipment
- **Safe work methods**: Step-by-step safe procedures
- **Communication**: Clear instructions and warnings

### **2. Emergency Preparedness**
- **Emergency plans**: Written procedures for different emergencies
- **Evacuation routes**: Clear paths to exit buildings
- **Assembly points**: Safe gathering places after evacuation
- **Emergency equipment**: Locations of fire extinguishers, first aid
- **Alarm systems**: Recognizing different alarm sounds
- **Emergency contacts**: Who to call for help

### **3. First Response Actions**
- **Assess situation**: Check for dangers before acting
- **Call for help**: Alert emergency services immediately
- **Provide first aid**: Basic care until professionals arrive
- **Control hazards**: Stop ongoing dangers if safe to do so
- **Evacuate if needed**: Leave area if situation is dangerous
- **Report incidents**: Document what happened for learning

### **Real-World Application**
When a chemical spill occurs, workers follow spill procedures: evacuate the area, contain the spill if trained and safe to do so, call for help, and report the incident. Regular drills ensure everyone knows their role in emergencies.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is safe energy control for maintenance?",
          options: ["Work permits", "Lockout/tagout", "Housekeeping", "Machine guarding"],
          correctAnswer: 1,
          explanation: "Lockout/tagout ensures equipment is safely shut off during maintenance."
        },
        {
          id: 2,
          question: "What keeps work areas clean and organized?",
          options: ["Lockout", "Housekeeping", "Work permits", "Machine guarding"],
          correctAnswer: 1,
          explanation: "Good housekeeping prevents slips, trips, and other accidents."
        },
        {
          id: 3,
          question: "What are written procedures for emergencies?",
          options: ["Work permits", "Emergency plans", "Safety rules", "Training manuals"],
          correctAnswer: 1,
          explanation: "Emergency plans outline specific actions for different emergency situations."
        },
        {
          id: 4,
          question: "What are clear paths to exit buildings?",
          options: ["Assembly points", "Evacuation routes", "Work areas", "Storage areas"],
          correctAnswer: 1,
          explanation: "Evacuation routes provide safe ways to exit buildings during emergencies."
        },
        {
          id: 5,
          question: "What should you do first in an emergency?",
          options: ["Run away", "Assess the situation", "Take photos", "Wait for others"],
          correctAnswer: 1,
          explanation: "First assess if it's safe to help or if you should evacuate immediately."
        },
        {
          id: 6,
          question: "What authorization is needed for hazardous work?",
          options: ["Lockout", "Work permits", "Housekeeping", "Machine guarding"],
          correctAnswer: 1,
          explanation: "Work permits authorize and control especially hazardous tasks."
        },
        {
          id: 7,
          question: "What are physical barriers on dangerous equipment?",
          options: ["Lockout devices", "Machine guarding", "Work permits", "Safety signs"],
          correctAnswer: 1,
          explanation: "Machine guards prevent contact with moving parts of equipment."
        },
        {
          id: 8,
          question: "What are safe gathering places after evacuation?",
          options: ["Evacuation routes", "Assembly points", "Work stations", "Parking lots"],
          correctAnswer: 1,
          explanation: "Assembly points ensure everyone is accounted for after evacuation."
        },
        {
          id: 9,
          question: "What should you do immediately in serious emergencies?",
          options: ["Wait and see", "Call for help", "Clean up", "Continue working"],
          correctAnswer: 1,
          explanation: "Immediately call emergency services for serious incidents."
        },
        {
          id: 10,
          question: "What provides basic care until professionals arrive?",
          options: ["Evacuation", "First aid", "Lockout", "Housekeeping"],
          correctAnswer: 1,
          explanation: "First aid provides immediate care for injuries until medical help arrives."
        },
        {
          id: 11,
          question: "What are step-by-step safe procedures?",
          options: ["Safe work methods", "Emergency plans", "Work permits", "Lockout procedures"],
          correctAnswer: 0,
          explanation: "Safe work methods provide specific steps to complete tasks safely."
        },
        {
          id: 12,
          question: "Where are fire extinguishers located?",
          options: ["Hidden away", "Marked emergency equipment locations", "Only in offices", "Nowhere special"],
          correctAnswer: 1,
          explanation: "Emergency equipment should be in clearly marked, accessible locations."
        },
        {
          id: 13,
          question: "What should you do if safe in an emergency?",
          options: ["Control hazards", "Take breaks", "Ignore it", "Take photos"],
          correctAnswer: 0,
          explanation: "If safe, control hazards like turning off equipment or containing spills."
        },
        {
          id: 14,
          question: "Why recognize different alarm sounds?",
          options: ["For entertainment", "To know what type of emergency", "To ignore them", "To complain"],
          correctAnswer: 1,
          explanation: "Different alarms indicate different emergencies requiring different responses."
        },
        {
          id: 15,
          question: "What should you do if a situation is dangerous?",
          options: ["Stay and watch", "Evacuate if needed", "Try to fix it", "Wait for instructions"],
          correctAnswer: 1,
          explanation: "Evacuate immediately if the situation poses immediate danger."
        },
        {
          id: 16,
          question: "What ensures clear instructions and warnings?",
          options: ["Good communication", "Silence", "Complex language", "Private messages"],
          correctAnswer: 0,
          explanation: "Clear communication ensures everyone understands safety information."
        },
        {
          id: 17,
          question: "Why report incidents after emergencies?",
          options: ["To blame people", "For learning and prevention", "To create paperwork", "To punish workers"],
          correctAnswer: 1,
          explanation: "Incident reports help organizations learn and prevent future occurrences."
        },
        {
          id: 18,
          question: "What do workers do during chemical spills?",
          options: ["Ignore it", "Follow spill procedures", "Continue working", "Take photos"],
          correctAnswer: 1,
          explanation: "Following established spill procedures ensures safe and proper response."
        },
        {
          id: 19,
          question: "Why have regular emergency drills?",
          options: ["To waste time", "To ensure everyone knows their role", "To scare people", "To stop work"],
          correctAnswer: 1,
          explanation: "Drills ensure everyone knows what to do during real emergencies."
        },
        {
          id: 20,
          question: "Who to call for emergency help?",
          options: ["Friends", "Emergency contacts/services", "Family", "Coworkers only"],
          correctAnswer: 1,
          explanation: "Know and use proper emergency contact numbers for quick response."
        }
      ]
    },

    // ==================== MODULE 5 ====================
    {
      id: 5,
      title: "Safety Inspections & Reporting",
      content: `
## **Finding & Fixing Safety Problems**

Regular safety inspections identify hazards before they cause accidents, while proper reporting systems help track and solve safety issues.

### **1. Types of Safety Inspections**
- **Daily checks**: Quick inspections by workers
- **Weekly inspections**: More detailed area inspections
- **Monthly audits**: Comprehensive facility reviews
- **Equipment inspections**: Checking machinery and tools
- **Pre-shift inspections**: Checking work areas before starting
- **Special inspections**: For new equipment or processes

### **2. What to Look For**
- **Housekeeping issues**: Messy or cluttered areas
- **Equipment problems**: Broken or damaged tools
- **PPE condition**: Damaged or missing safety equipment
- **Chemical storage**: Improperly stored hazardous materials
- **Electrical hazards**: Damaged cords or unsafe wiring
- **Fire safety**: Blocked exits or missing extinguishers

### **3. Reporting Systems**
- **Hazard reports**: Documenting unsafe conditions
- **Incident reports**: Recording accidents or near-misses
- **Corrective actions**: Tracking how problems were fixed
- **Follow-up**: Checking that fixes are working
- **Trend analysis**: Identifying recurring problems
- **Management review**: Leadership oversight of safety issues

### **Real-World Application**
A maintenance technician doing daily equipment checks finds a frayed electrical cord, reports it through the hazard reporting system, and the cord is replaced before it can cause an electrical shock. The follow-up confirms the repair was completed properly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do safety inspections identify?",
          options: ["Only big accidents", "Hazards before accidents", "Who to blame", "Nothing useful"],
          correctAnswer: 1,
          explanation: "Inspections find hazards so they can be fixed before causing accidents."
        },
        {
          id: 2,
          question: "What are quick inspections by workers?",
          options: ["Monthly audits", "Daily checks", "Special inspections", "Equipment inspections"],
          correctAnswer: 1,
          explanation: "Daily checks are quick visual inspections workers do regularly."
        },
        {
          id: 3,
          question: "What checks work areas before starting?",
          options: ["Weekly inspections", "Pre-shift inspections", "Monthly audits", "Special inspections"],
          correctAnswer: 1,
          explanation: "Pre-shift inspections ensure work areas are safe before work begins."
        },
        {
          id: 4,
          question: "What looks for messy or cluttered areas?",
          options: ["Equipment problems", "Housekeeping issues", "PPE condition", "Electrical hazards"],
          correctAnswer: 1,
          explanation: "Housekeeping issues include clutter that could cause trips or falls."
        },
        {
          id: 5,
          question: "What documents unsafe conditions?",
          options: ["Incident reports", "Hazard reports", "Corrective actions", "Trend analysis"],
          correctAnswer: 1,
          explanation: "Hazard reports document unsafe conditions that need correction."
        },
        {
          id: 6,
          question: "What are comprehensive facility reviews?",
          options: ["Daily checks", "Weekly inspections", "Monthly audits", "Pre-shift inspections"],
          correctAnswer: 2,
          explanation: "Monthly audits are thorough reviews of the entire facility's safety."
        },
        {
          id: 7,
          question: "What checks machinery and tools?",
          options: ["Daily checks", "Equipment inspections", "Housekeeping checks", "Special inspections"],
          correctAnswer: 1,
          explanation: "Equipment inspections specifically examine tools and machinery safety."
        },
        {
          id: 8,
          question: "What looks for broken or damaged tools?",
          options: ["Chemical storage", "Equipment problems", "Fire safety", "PPE condition"],
          correctAnswer: 1,
          explanation: "Equipment problems include damaged tools that could fail or cause injury."
        },
        {
          id: 9,
          question: "What records accidents or near-misses?",
          options: ["Hazard reports", "Incident reports", "Corrective actions", "Follow-up reports"],
          correctAnswer: 1,
          explanation: "Incident reports document what happened in accidents or close calls."
        },
        {
          id: 10,
          question: "What tracks how problems were fixed?",
          options: ["Hazard reports", "Incident reports", "Corrective actions", "Trend analysis"],
          correctAnswer: 2,
          explanation: "Corrective actions track what was done to fix identified problems."
        },
        {
          id: 11,
          question: "What are for new equipment or processes?",
          options: ["Daily checks", "Weekly inspections", "Special inspections", "Monthly audits"],
          correctAnswer: 2,
          explanation: "Special inspections check new items or processes for safety."
        },
        {
          id: 12,
          question: "What looks for damaged safety equipment?",
          options: ["Housekeeping issues", "PPE condition", "Chemical storage", "Electrical hazards"],
          correctAnswer: 1,
          explanation: "PPE condition inspections check if safety equipment is damaged or missing."
        },
        {
          id: 13,
          question: "What checks that fixes are working?",
          options: ["Hazard reporting", "Follow-up", "Trend analysis", "Management review"],
          correctAnswer: 1,
          explanation: "Follow-up ensures that corrective actions actually solved the problems."
        },
        {
          id: 14,
          question: "What looks for improperly stored chemicals?",
          options: ["Equipment problems", "Chemical storage issues", "Fire safety", "PPE condition"],
          correctAnswer: 1,
          explanation: "Chemical storage inspections ensure hazardous materials are stored safely."
        },
        {
          id: 15,
          question: "What identifies recurring problems?",
          options: ["Hazard reports", "Trend analysis", "Corrective actions", "Follow-up"],
          correctAnswer: 1,
          explanation: "Trend analysis finds patterns in safety issues that need addressing."
        },
        {
          id: 16,
          question: "What looks for damaged electrical cords?",
          options: ["Housekeeping", "Electrical hazards", "Chemical storage", "Fire safety"],
          correctAnswer: 1,
          explanation: "Electrical hazards include damaged cords that could cause shocks or fires."
        },
        {
          id: 17,
          question: "What provides leadership oversight?",
          options: ["Daily checks", "Management review", "Pre-shift inspections", "Equipment inspections"],
          correctAnswer: 1,
          explanation: "Management review ensures leadership is involved in safety improvements."
        },
        {
          id: 18,
          question: "What should a worker do with a frayed cord?",
          options: ["Ignore it", "Report it immediately", "Use it carefully", "Hide it"],
          correctAnswer: 1,
          explanation: "Report electrical hazards immediately so they can be fixed safely."
        },
        {
          id: 19,
          question: "What looks for blocked exits?",
          options: ["Equipment problems", "Fire safety issues", "Chemical storage", "PPE condition"],
          correctAnswer: 1,
          explanation: "Fire safety inspections check that exits are clear and accessible."
        },
        {
          id: 20,
          question: "Why track how problems were fixed?",
          options: ["To create paperwork", "To ensure proper repairs", "To blame workers", "To ignore later"],
          correctAnswer: 1,
          explanation: "Tracking ensures repairs are done correctly and completely."
        }
      ]
    },

    // ==================== MODULE 6 ====================
    {
      id: 6,
      title: "Creating a Safety Culture",
      content: `
## **Building Safe Work Environments**

A strong safety culture means safety is valued by everyone in the organization. This module covers how to build and maintain positive safety attitudes and behaviors.

### **1. Elements of Safety Culture**
- **Management commitment**: Leaders show safety is important
- **Worker involvement**: Everyone participates in safety
- **Open communication**: People feel safe reporting concerns
- **Continuous learning**: Always improving safety knowledge
- **Accountability**: Everyone takes responsibility for safety
- **Recognition**: Praising good safety practices

### **2. Building Positive Attitudes**
- **Lead by example**: Managers follow safety rules too
- **Positive reinforcement**: Reward safe behaviors
- **Clear expectations**: Everyone knows safety requirements
- **Fair treatment**: Consistent safety rule enforcement
- **Respect**: Valuing everyone's safety contributions
- **Trust**: Believing safety concerns will be addressed

### **3. Safety Communication Methods**
- **Safety meetings**: Regular discussions about safety
- **Safety bulletins**: Written safety updates and reminders
- **Visual aids**: Posters and signs reinforcing safety
- **Training sessions**: Regular safety education
- **Feedback systems**: Ways to suggest safety improvements
- **Celebrations**: Recognizing safety achievements

### **Real-World Application**
A company with strong safety culture has managers who wear PPE, workers who report near-misses without fear, regular safety meetings where everyone participates, and celebrations when safety milestones are reached. This creates an environment where safety is naturally part of daily work.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does safety culture mean?",
          options: ["Only rules on paper", "Safety valued by everyone", "Only management's concern", "Government requirements only"],
          correctAnswer: 1,
          explanation: "Safety culture means safety is genuinely important to everyone in the organization."
        },
        {
          id: 2,
          question: "What shows leaders value safety?",
          options: ["Only saying it", "Management commitment", "Ignoring rules", "Cutting safety costs"],
          correctAnswer: 1,
          explanation: "Management commitment is shown through actions, not just words."
        },
        {
          id: 3,
          question: "What means everyone participates in safety?",
          options: ["Management only", "Worker involvement", "Safety officers only", "Government inspectors"],
          correctAnswer: 1,
          explanation: "Worker involvement means all employees participate in safety activities."
        },
        {
          id: 4,
          question: "What helps people report concerns?",
          options: ["Threats", "Open communication", "Secrecy", "Ignoring reports"],
          correctAnswer: 1,
          explanation: "Open communication makes people comfortable reporting safety issues."
        },
        {
          id: 5,
          question: "What is always improving safety knowledge?",
          options: ["One-time training", "Continuous learning", "Reading manuals", "Watching videos"],
          correctAnswer: 1,
          explanation: "Continuous learning means constantly updating and improving safety knowledge."
        },
        {
          id: 6,
          question: "How do managers lead by example?",
          options: ["By breaking rules", "By following safety rules too", "By staying in office", "By ignoring safety"],
          correctAnswer: 1,
          explanation: "Managers lead by example when they follow the same safety rules as workers."
        },
        {
          id: 7,
          question: "What rewards safe behaviors?",
          options: ["Punishment", "Positive reinforcement", "Ignoring them", "Only money"],
          correctAnswer: 1,
          explanation: "Positive reinforcement rewards and encourages continued safe behaviors."
        },
        {
          id: 8,
          question: "What are regular safety discussions?",
          options: ["Safety bulletins", "Safety meetings", "Visual aids", "Training sessions"],
          correctAnswer: 1,
          explanation: "Safety meetings provide regular opportunities to discuss safety issues."
        },
        {
          id: 9,
          question: "What means everyone takes responsibility?",
          options: ["Blame culture", "Accountability", "Ignoring problems", "Passing responsibility"],
          correctAnswer: 1,
          explanation: "Accountability means everyone accepts responsibility for safety."
        },
        {
          id: 10,
          question: "What praises good safety practices?",
          options: ["Criticism", "Recognition", "Ignoring", "Punishment"],
          correctAnswer: 1,
          explanation: "Recognition acknowledges and praises good safety practices and achievements."
        },
        {
          id: 11,
          question: "What ensures everyone knows safety requirements?",
          options: ["Secrecy", "Clear expectations", "Complex rules", "Hidden instructions"],
          correctAnswer: 1,
          explanation: "Clear expectations ensure everyone understands safety requirements."
        },
        {
          id: 12,
          question: "What are written safety updates?",
          options: ["Safety meetings", "Safety bulletins", "Visual aids", "Feedback systems"],
          correctAnswer: 1,
          explanation: "Safety bulletins provide written updates and reminders about safety."
        },
        {
          id: 13,
          question: "What is consistent safety rule enforcement?",
          options: ["Favoritism", "Fair treatment", "Random enforcement", "No enforcement"],
          correctAnswer: 1,
          explanation: "Fair treatment means safety rules are enforced consistently for everyone."
        },
        {
          id: 14,
          question: "What are posters and signs reinforcing safety?",
          options: ["Safety meetings", "Bulletins", "Visual aids", "Training sessions"],
          correctAnswer: 2,
          explanation: "Visual aids like posters constantly remind workers about safety."
        },
        {
          id: 15,
          question: "What values everyone's safety contributions?",
          options: ["Disrespect", "Respect", "Ignoring", "Criticizing"],
          correctAnswer: 1,
          explanation: "Respect means valuing all contributions to safety, regardless of position."
        },
        {
          id: 16,
          question: "What are regular safety education sessions?",
          options: ["Meetings", "Bulletins", "Training sessions", "Visual aids"],
          correctAnswer: 2,
          explanation: "Training sessions provide structured safety education for workers."
        },
        {
          id: 17,
          question: "What believes concerns will be addressed?",
          options: ["Distrust", "Trust", "Cynicism", "Hopelessness"],
          correctAnswer: 1,
          explanation: "Trust means workers believe safety concerns will be taken seriously."
        },
        {
          id: 18,
          question: "What are ways to suggest improvements?",
          options: ["Closed systems", "Feedback systems", "No systems", "Complaint boxes only"],
          correctAnswer: 1,
          explanation: "Feedback systems allow workers to suggest safety improvements."
        },
        {
          id: 19,
          question: "What recognizes safety achievements?",
          options: ["Ignoring milestones", "Celebrations", "Criticism", "Punishment"],
          correctAnswer: 1,
          explanation: "Celebrations recognize and encourage continued safety achievements."
        },
        {
          id: 20,
          question: "What creates natural safety in daily work?",
          options: ["Forced compliance", "Strong safety culture", "Only rules", "Threats"],
          correctAnswer: 1,
          explanation: "Strong safety culture makes safety a natural part of how work is done."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    title: "Industrial Safety Certificate Final Exam",
    description: "Comprehensive assessment covering all 6 modules of industrial safety fundamentals. Pass with 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        question: "What does industrial safety prevent?",
        options: ["Only equipment damage", "Accidents and injuries", "Only management problems", "Only big accidents"],
        correctAnswer: 1,
        explanation: "Industrial safety aims to prevent workplace accidents and injuries.",
        module: 1
      },
      {
        id: 2,
        question: "What are conditions that could cause accidents?",
        options: ["Accidents", "Hazards", "Risks", "Safety rules"],
        correctAnswer: 1,
        explanation: "Hazards are conditions that could potentially cause accidents.",
        module: 1
      },
      {
        id: 3,
        question: "How does safety help businesses?",
        options: ["Increases accidents", "Saves money by reducing costs", "Makes work slower", "Creates more paperwork"],
        correctAnswer: 1,
        explanation: "Safety saves money by reducing accident-related costs.",
        module: 1
      },
      {
        id: 4,
        question: "Who is responsible for safety?",
        options: ["Only management", "Only safety officers", "Everyone", "Only experienced workers"],
        correctAnswer: 2,
        explanation: "Safety is everyone's responsibility in the workplace.",
        module: 1
      },

      // Module 2 Questions
      {
        id: 5,
        question: "What type of hazard involves falls?",
        options: ["Chemical", "Physical", "Ergonomic", "Biological"],
        correctAnswer: 1,
        explanation: "Falls are physical hazards involving gravity dangers.",
        module: 2
      },
      {
        id: 6,
        question: "What hazard involves toxic substances?",
        options: ["Physical", "Chemical", "Ergonomic", "Noise"],
        correctAnswer: 1,
        explanation: "Toxic substances are chemical hazards.",
        module: 2
      },
      {
        id: 7,
        question: "What hazard involves heavy lifting?",
        options: ["Physical", "Chemical", "Ergonomic", "Electrical"],
        correctAnswer: 2,
        explanation: "Heavy lifting is an ergonomic hazard.",
        module: 2
      },
      {
        id: 8,
        question: "What prevents falls when working at heights?",
        options: ["Nothing", "Safety harnesses", "Working fast", "Ignoring height"],
        correctAnswer: 1,
        explanation: "Safety harnesses protect workers from falls.",
        module: 2
      },

      // Module 3 Questions
      {
        id: 9,
        question: "What is the last line of defense?",
        options: ["Safety training", "PPE", "Good luck", "Working fast"],
        correctAnswer: 1,
        explanation: "PPE is the final protection against hazards.",
        module: 3
      },
      {
        id: 10,
        question: "What protects from falling objects?",
        options: ["Safety glasses", "Hard hats", "Gloves", "Boots"],
        correctAnswer: 1,
        explanation: "Hard hats protect heads from impacts.",
        module: 3
      },
      {
        id: 11,
        question: "What provides basic eye protection?",
        options: ["Face shields", "Safety glasses", "Goggles", "Welding helmets"],
        correctAnswer: 1,
        explanation: "Safety glasses provide basic impact protection.",
        module: 3
      },
      {
        id: 12,
        question: "What should you check before using PPE?",
        options: ["Color", "For damage", "Cost", "Brand"],
        correctAnswer: 1,
        explanation: "Always inspect PPE for damage before use.",
        module: 3
      },

      // Module 4 Questions
      {
        id: 13,
        question: "What is safe energy control for maintenance?",
        options: ["Work permits", "Lockout/tagout", "Housekeeping", "Machine guarding"],
        correctAnswer: 1,
        explanation: "Lockout/tagout ensures safe equipment maintenance.",
        module: 4
      },
      {
        id: 14,
        question: "What keeps work areas clean?",
        options: ["Lockout", "Housekeeping", "Work permits", "Machine guarding"],
        correctAnswer: 1,
        explanation: "Housekeeping prevents accidents from clutter.",
        module: 4
      },
      {
        id: 15,
        question: "What should you do first in emergencies?",
        options: ["Run", "Assess situation", "Take photos", "Wait"],
        correctAnswer: 1,
        explanation: "First assess if it's safe to help or evacuate.",
        module: 4
      },
      {
        id: 16,
        question: "Why report incidents?",
        options: ["To blame", "For learning and prevention", "For paperwork", "To punish"],
        correctAnswer: 1,
        explanation: "Incident reports help prevent future accidents.",
        module: 4
      },

      // Module 5 Questions
      {
        id: 17,
        question: "What do safety inspections identify?",
        options: ["Only accidents", "Hazards before accidents", "Who to blame", "Nothing"],
        correctAnswer: 1,
        explanation: "Inspections find hazards before they cause harm.",
        module: 5
      },
      {
        id: 18,
        question: "What are quick worker inspections?",
        options: ["Monthly audits", "Daily checks", "Special inspections", "Equipment inspections"],
        correctAnswer: 1,
        explanation: "Daily checks are quick visual inspections.",
        module: 5
      },
      {
        id: 19,
        question: "What documents unsafe conditions?",
        options: ["Incident reports", "Hazard reports", "Corrective actions", "Trend analysis"],
        correctAnswer: 1,
        explanation: "Hazard reports document unsafe conditions.",
        module: 5
      },
      {
        id: 20,
        question: "What should you do with damaged equipment?",
        options: ["Ignore", "Report immediately", "Use carefully", "Hide"],
        correctAnswer: 1,
        explanation: "Report damaged equipment immediately for repair.",
        module: 5
      },

      // Module 6 Questions
      {
        id: 21,
        question: "What does safety culture mean?",
        options: ["Only rules", "Safety valued by everyone", "Only management", "Government only"],
        correctAnswer: 1,
        explanation: "Safety culture means safety matters to everyone.",
        module: 6
      },
      {
        id: 22,
        question: "What shows leaders value safety?",
        options: ["Only saying", "Management commitment", "Ignoring rules", "Cutting costs"],
        correctAnswer: 1,
        explanation: "Management commitment shows through actions.",
        module: 6
      },
      {
        id: 23,
        question: "How do managers lead by example?",
        options: ["Breaking rules", "Following rules too", "Staying in office", "Ignoring safety"],
        correctAnswer: 1,
        explanation: "Managers lead by following safety rules themselves.",
        module: 6
      },
      {
        id: 24,
        question: "What rewards safe behaviors?",
        options: ["Punishment", "Positive reinforcement", "Ignoring", "Only money"],
        correctAnswer: 1,
        explanation: "Positive reinforcement encourages safe behaviors.",
        module: 6
      },

      // Additional Comprehensive Questions
      {
        id: 25,
        question: "What measures accident likelihood?",
        options: ["Hazards", "Risks", "Accidents", "Safety rules"],
        correctAnswer: 1,
        explanation: "Risks measure probability of accidents.",
        module: 1
      },
      {
        id: 26,
        question: "What hazard involves caught in machinery?",
        options: ["Struck-by", "Caught-in/between", "Electrical", "Fall"],
        correctAnswer: 1,
        explanation: "Caught-in/between hazards involve machinery entrapment.",
        module: 2
      },
      {
        id: 27,
        question: "What seals eyes for chemical protection?",
        options: ["Safety glasses", "Goggles", "Face shields", "Hard hats"],
        correctAnswer: 1,
        explanation: "Goggles seal around eyes for chemical protection.",
        module: 3
      },
      {
        id: 28,
        question: "What are clear exit paths?",
        options: ["Assembly points", "Evacuation routes", "Work areas", "Storage areas"],
        correctAnswer: 1,
        explanation: "Evacuation routes provide safe building exits.",
        module: 4
      },
      {
        id: 29,
        question: "What checks work areas before starting?",
        options: ["Weekly", "Pre-shift inspections", "Monthly", "Special"],
        correctAnswer: 1,
        explanation: "Pre-shift inspections ensure safe start conditions.",
        module: 5
      },
      {
        id: 30,
        question: "What means everyone participates?",
        options: ["Management only", "Worker involvement", "Safety officers", "Inspectors"],
        correctAnswer: 1,
        explanation: "Worker involvement means all participate in safety.",
        module: 6
      },
      {
        id: 31,
        question: "What increases with good safety?",
        options: ["Accidents", "Productivity", "Costs", "Injuries"],
        correctAnswer: 1,
        explanation: "Good safety increases productivity.",
        module: 1
      },
      {
        id: 32,
        question: "What protects from chemicals?",
        options: ["Cut-resistant gloves", "Chemical-resistant gloves", "Leather gloves", "Cotton gloves"],
        correctAnswer: 1,
        explanation: "Chemical-resistant gloves protect from chemicals.",
        module: 3
      },
      {
        id: 33,
        question: "What provides basic emergency care?",
        options: ["Evacuation", "First aid", "Lockout", "Housekeeping"],
        correctAnswer: 1,
        explanation: "First aid provides basic emergency care.",
        module: 4
      },
      {
        id: 34,
        question: "What tracks problem fixes?",
        options: ["Hazard reports", "Incident reports", "Corrective actions", "Trend analysis"],
        correctAnswer: 2,
        explanation: "Corrective actions track how problems were fixed.",
        module: 5
      },
      {
        id: 35,
        question: "What are regular safety discussions?",
        options: ["Bulletins", "Safety meetings", "Visual aids", "Training"],
        correctAnswer: 1,
        explanation: "Safety meetings provide regular safety discussions.",
        module: 6
      },
      {
        id: 36,
        question: "What is a moral safety responsibility?",
        options: ["Profits", "Protecting life and health", "Trends", "Jobs"],
        correctAnswer: 1,
        explanation: "Protecting workers is a moral responsibility.",
        module: 1
      },
      {
        id: 37,
        question: "What makes workers visible?",
        options: ["Hard hats", "High-visibility vests", "Gloves", "Safety glasses"],
        correctAnswer: 1,
        explanation: "High-visibility clothing makes workers visible.",
        module: 3
      },
      {
        id: 38,
        question: "What ensures equipment is off for maintenance?",
        options: ["Work permits", "Lockout/tagout", "Housekeeping", "Machine guarding"],
        correctAnswer: 1,
        explanation: "Lockout/tagout ensures safe equipment shutdown.",
        module: 4
      },
      {
        id: 39,
        question: "What identifies recurring problems?",
        options: ["Hazard reports", "Trend analysis", "Corrective actions", "Follow-up"],
        correctAnswer: 1,
        explanation: "Trend analysis finds recurring safety problems.",
        module: 5
      },
      {
        id: 40,
        question: "What creates natural safety in work?",
        options: ["Forced compliance", "Strong safety culture", "Only rules", "Threats"],
        correctAnswer: 1,
        explanation: "Strong safety culture integrates safety naturally.",
        module: 6
      }
    ]
  }
};

export default industrialSafetyCertificateCourse;
