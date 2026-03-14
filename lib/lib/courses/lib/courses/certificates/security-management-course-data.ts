// security-management-certificate.ts
export const securityManagementCertificate = {
  id: "security-management-certificate",
  title: "Security Management (Certificate)",
  description: "Learn fundamental security management principles including risk assessment, physical security, personnel security, and basic emergency response procedures for organizational protection.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🛡️",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Security Management",
      completed: false,
      content: `
## **Module 1: Introduction to Security Management**

### **What is Security Management?**
Security management is the process of identifying an organization's assets and developing strategies to protect them. It involves planning, implementing, and monitoring security measures to safeguard people, property, and information.

**Key Goals of Security Management:**
1. **Protect People:** Ensure safety of employees, customers, and visitors
2. **Secure Assets:** Protect physical property, equipment, and facilities
3. **Safeguard Information:** Protect sensitive data and intellectual property
4. **Maintain Operations:** Ensure business continuity during security incidents
5. **Comply with Laws:** Meet legal and regulatory requirements

### **Types of Security**
Security management covers different areas that work together to provide comprehensive protection:

**Physical Security:**
- Protecting buildings, equipment, and physical assets
- Using barriers, locks, alarms, and surveillance
- Controlling access to facilities and sensitive areas
- Securing perimeters and entry points

**Personnel Security:**
- Screening and vetting employees
- Managing access privileges and permissions
- Training staff on security procedures
- Monitoring employee activities when necessary

**Information Security:**
- Protecting digital data and systems
- Managing passwords and access controls
- Securing networks and communications
- Preventing data breaches and cyber attacks

**Operational Security:**
- Protecting daily business operations
- Securing supply chains and logistics
- Managing vendor and contractor security
- Ensuring safe work practices

### **The Security Management Cycle**
Effective security follows a continuous cycle of improvement:

**Assessment Phase:**
- Identify what needs protection
- Recognize potential threats and vulnerabilities
- Evaluate current security measures
- Determine risk levels

**Planning Phase:**
- Develop security policies and procedures
- Design protection strategies
- Allocate resources and budget
- Assign responsibilities

**Implementation Phase:**
- Install security systems and equipment
- Train personnel on procedures
- Establish monitoring processes
- Test security measures

**Review Phase:**
- Monitor security performance
- Investigate incidents and near-misses
- Update procedures based on lessons learned
- Adapt to changing threats and needs

### **Basic Security Principles**
These fundamental concepts guide all security management decisions:

**Defense in Depth:**
- Using multiple layers of security
- If one layer fails, others provide protection
- Example: Fence, guard, lock, alarm system
- Creates redundancy for better protection

**Risk Management:**
- Identifying what could go wrong
- Determining how likely problems are
- Understanding potential impacts
- Deciding which risks to address first

**Least Privilege:**
- People get only the access they need
- Limits damage if credentials are compromised
- Reduces insider threat potential
- Easy to implement and monitor

**Security Awareness:**
- Everyone understands security importance
- Employees know their security responsibilities
- Regular training keeps knowledge fresh
- Creates security-conscious culture

### **Security Roles and Responsibilities**
Different people play important roles in organizational security:

**Security Manager:**
- Develops overall security strategy
- Manages security team and budget
- Coordinates with other departments
- Reports to senior management

**Security Officers:**
- Patrol facilities and monitor systems
- Respond to incidents and alarms
- Control access to secure areas
- Document security events

**All Employees:**
- Follow security policies and procedures
- Report suspicious activities
- Protect access credentials
- Participate in security training

**Management Support:**
- Provides resources for security
- Enforces security policies
- Sets security priorities
- Leads by example

Understanding these basic concepts provides the foundation for more specific security management topics in later modules.
`,
      quiz: [
        {
          id: 1,
          question: "What is the main goal of security management?",
          options: [
            "To protect people, assets, and information",
            "To make everything perfectly secure",
            "Only to protect computers",
            "Only to prevent theft"
          ],
          correctAnswer: 0,
          explanation: "Security management aims to protect people, physical assets, information, and maintain operations."
        },
        {
          id: 2,
          question: "What does physical security protect?",
          options: [
            "Buildings, equipment, and physical assets",
            "Only digital information",
            "Only employee information",
            "Only financial data"
          ],
          correctAnswer: 0,
          explanation: "Physical security focuses on protecting tangible assets like buildings, equipment, and facilities."
        },
        {
          id: 3,
          question: "What is information security?",
          options: [
            "Protecting digital data and systems",
            "Only protecting paper documents",
            "Only building security",
            "Only employee screening"
          ],
          correctAnswer: 0,
          explanation: "Information security involves protecting digital data, systems, networks, and communications."
        },
        {
          id: 4,
          question: "What is the first phase in the security management cycle?",
          options: [
            "Assessment phase",
            "Planning phase",
            "Implementation phase",
            "Review phase"
          ],
          correctAnswer: 0,
          explanation: "The assessment phase comes first - identifying what needs protection and evaluating current measures."
        },
        {
          id: 5,
          question: "What is defense in depth?",
          options: [
            "Using multiple layers of security",
            "Having only one strong security measure",
            "Protecting only important areas",
            "Hiding security measures"
          ],
          correctAnswer: 0,
          explanation: "Defense in depth uses multiple security layers so if one fails, others still provide protection."
        },
        {
          id: 6,
          question: "What does risk management involve?",
          options: [
            "Identifying what could go wrong and planning for it",
            "Eliminating all risks completely",
            "Ignoring small risks",
            "Only focusing on big risks"
          ],
          correctAnswer: 0,
          explanation: "Risk management involves identifying potential problems, assessing likelihood and impact, and planning responses."
        },
        {
          id: 7,
          question: "What is the least privilege principle?",
          options: [
            "People get only the access they need",
            "Everyone gets full access",
            "Only managers get access",
            "Access changes daily"
          ],
          correctAnswer: 0,
          explanation: "Least privilege means giving people only the minimum access necessary to perform their jobs."
        },
        {
          id: 8,
          question: "What is security awareness?",
          options: [
            "Everyone understands security importance",
            "Only security staff know about security",
            "Security is kept secret",
            "Only managers need security knowledge"
          ],
          correctAnswer: 0,
          explanation: "Security awareness means all employees understand security importance and their responsibilities."
        },
        {
          id: 9,
          question: "What does a security manager do?",
          options: [
            "Develops overall security strategy",
            "Only patrols buildings",
            "Only monitors cameras",
            "Only checks identification"
          ],
          correctAnswer: 0,
          explanation: "Security managers develop strategy, manage teams and budgets, and coordinate security efforts."
        },
        {
          id: 10,
          question: "What is personnel security?",
          options: [
            "Screening and managing employee access",
            "Only protecting buildings",
            "Only securing computers",
            "Only emergency response"
          ],
          correctAnswer: 0,
          explanation: "Personnel security involves screening employees, managing access, and ensuring staff follow security procedures."
        },
        {
          id: 11,
          question: "What is operational security?",
          options: [
            "Protecting daily business operations",
            "Only protecting computers",
            "Only building security",
            "Only employee training"
          ],
          correctAnswer: 0,
          explanation: "Operational security focuses on protecting ongoing business activities and processes."
        },
        {
          id: 12,
          question: "What happens in the planning phase?",
          options: [
            "Developing security policies and procedures",
            "Installing security equipment",
            "Investigating incidents",
            "Training employees"
          ],
          correctAnswer: 0,
          explanation: "The planning phase involves developing policies, designing strategies, and allocating resources."
        },
        {
          id: 13,
          question: "What do security officers typically do?",
          options: [
            "Patrol facilities and respond to incidents",
            "Develop security policies",
            "Manage security budgets",
            "Only work at desks"
          ],
          correctAnswer: 0,
          explanation: "Security officers patrol, monitor systems, respond to incidents, and control access."
        },
        {
          id: 14,
          question: "What is the review phase?",
          options: [
            "Monitoring performance and updating procedures",
            "Only installing equipment",
            "Only hiring staff",
            "Only creating policies"
          ],
          correctAnswer: 0,
          explanation: "The review phase involves monitoring, investigating incidents, and improving security measures."
        },
        {
          id: 15,
          question: "What should all employees do for security?",
          options: [
            "Follow procedures and report suspicious activities",
            "Only security staff handle security",
            "Ignore security rules",
            "Only protect their own area"
          ],
          correctAnswer: 0,
          explanation: "All employees should follow security procedures, report concerns, and protect access credentials."
        },
        {
          id: 16,
          question: "What does management support involve?",
          options: [
            "Providing resources and enforcing policies",
            "Only doing security work",
            "Ignoring security issues",
            "Only during emergencies"
          ],
          correctAnswer: 0,
          explanation: "Management support includes providing resources, enforcing policies, and setting security priorities."
        },
        {
          id: 17,
          question: "Why use multiple security layers?",
          options: [
            "If one fails, others still protect",
            "It looks more impressive",
            "It's required by law",
            "It's cheaper"
          ],
          correctAnswer: 0,
          explanation: "Multiple layers provide backup protection if any single security measure fails."
        },
        {
          id: 18,
          question: "What is assessed during the assessment phase?",
          options: [
            "What needs protection and current measures",
            "Only employee performance",
            "Only financial costs",
            "Only equipment condition"
          ],
          correctAnswer: 0,
          explanation: "Assessment identifies assets, threats, vulnerabilities, and evaluates current security measures."
        },
        {
          id: 19,
          question: "What happens in implementation phase?",
          options: [
            "Installing systems and training personnel",
            "Only planning strategies",
            "Only investigating incidents",
            "Only writing reports"
          ],
          correctAnswer: 0,
          explanation: "Implementation involves installing equipment, training staff, and establishing monitoring processes."
        },
        {
          id: 20,
          question: "Why is security awareness important?",
          options: [
            "Creates security-conscious culture",
            "Only for security staff",
            "Makes work harder",
            "Only for managers"
          ],
          correctAnswer: 0,
          explanation: "Security awareness helps create a culture where everyone understands and practices good security habits."
        }
      ]
    },
    {
      id: 2,
      title: "Risk Assessment and Analysis",
      completed: false,
      content: `
## **Module 2: Risk Assessment and Analysis**

### **Understanding Risk in Security**
Risk is the possibility of something bad happening that could harm your organization. Risk assessment helps you make smart decisions about where to focus your security efforts.

**Basic Risk Formula:**
Risk = Threat × Vulnerability × Impact

- **Threat:** Something that could cause harm
- **Vulnerability:** Weakness that could be exploited
- **Impact:** How bad the damage would be

### **Identifying Assets**
Before you can protect anything, you need to know what's valuable to your organization.

**Types of Assets to Protect:**
1. **People:** Employees, customers, visitors
2. **Property:** Buildings, equipment, vehicles
3. **Information:** Customer data, trade secrets, financial records
4. **Reputation:** Public trust, brand image
5. **Operations:** Business processes, supply chains

**Asset Value Considerations:**
- Replacement cost if damaged or stolen
- Importance to daily operations
- Sensitivity of information
- Legal requirements for protection
- Impact on reputation if compromised

### **Recognizing Threats**
Threats are potential sources of harm. They can come from different places and have different motivations.

**Common Threat Sources:**
- **External Threats:** People outside the organization
- **Internal Threats:** Current or former employees
- **Natural Threats:** Weather, fires, earthquakes
- **Accidental Threats:** Mistakes, equipment failures
- **Intentional Threats:** Deliberate harmful actions

**Threat Categories:**
1. **Theft:** Stealing property or information
2. **Vandalism:** Damaging property intentionally
3. **Violence:** Physical harm to people
4. **Espionage:** Stealing secrets for competitors
5. **Sabotage:** Disrupting operations
6. **Fraud:** Deception for financial gain

### **Finding Vulnerabilities**
Vulnerabilities are weaknesses that threats could exploit. Finding them before attackers do is crucial.

**Common Physical Vulnerabilities:**
- Unlocked doors or windows
- Poor lighting in parking areas
- Broken fences or gates
- Lack of security cameras
- Easy access to sensitive areas

**Common Procedural Vulnerabilities:**
- Employees sharing passwords
- Visitors not escorted properly
- Lack of employee training
- Poor access control systems
- Inadequate emergency plans

**Common Technical Vulnerabilities:**
- Outdated software or systems
- Weak passwords being used
- Unsecured wireless networks
- Lack of data backups
- No antivirus protection

### **Risk Analysis Methods**
These simple methods help you understand and prioritize risks:

**Risk Matrix Method:**
Create a grid with two factors:
1. **Likelihood:** How probable the risk is (Low/Medium/High)
2. **Impact:** How severe the consequences would be (Low/Medium/High)

**Example Risk Matrix:**
- High Likelihood + High Impact = Top Priority
- Low Likelihood + Low Impact = Lower Priority
- Medium scores need professional judgment

**Qualitative Risk Assessment:**
- Uses descriptive ratings (High/Medium/Low)
- Based on experience and judgment
- Good for quick assessments
- Easy for teams to understand

**Semi-Quantitative Assessment:**
- Uses simple numbers (1-5 scale)
- Combines experience with basic scoring
- Helps compare different risks
- More consistent than pure qualitative

### **Risk Treatment Options**
Once you identify risks, you need to decide what to do about them:

**Risk Avoidance:**
- Stop doing the risky activity
- Example: Don't store sensitive data on laptops
- Most effective but not always practical
- Consider business needs before choosing

**Risk Reduction:**
- Implement security controls
- Example: Install alarms, train staff
- Most common approach
- Reduces likelihood or impact

**Risk Transfer:**
- Move risk to someone else
- Example: Buy insurance
- Doesn't eliminate risk
- Helps with financial recovery

**Risk Acceptance:**
- Decide to live with the risk
- For low-probability, low-impact risks
- Must be conscious decision
- Document the reasoning

### **Creating a Risk Register**
A risk register helps you track and manage identified risks:

**Basic Risk Register Components:**
1. **Risk Description:** What could happen
2. **Risk Category:** Type of risk (theft, violence, etc.)
3. **Likelihood Rating:** How probable (High/Medium/Low)
4. **Impact Rating:** How severe (High/Medium/Low)
5. **Risk Level:** Combined score (High/Medium/Low)
6. **Treatment Plan:** What you'll do about it
7. **Responsible Person:** Who handles it
8. **Review Date:** When to check progress

**Keeping Your Risk Register Useful:**
- Update regularly (at least annually)
- Review after security incidents
- Include new risks as they emerge
- Remove resolved risks
- Share with relevant staff

### **Simple Risk Assessment Steps**
Follow these basic steps for effective risk assessment:

**Step 1: Identify Assets**
- List everything valuable
- Consider different asset types
- Prioritize by importance

**Step 2: Identify Threats**
- Think about what could go wrong
- Consider different threat sources
- Research common threats in your industry

**Step 3: Identify Vulnerabilities**
- Look for weaknesses
- Check physical, procedural, technical areas
- Consider how threats could exploit weaknesses

**Step 4: Analyze Risks**
- Use risk matrix or simple scoring
- Consider likelihood and impact
- Prioritize risks for attention

**Step 5: Plan Treatments**
- Choose appropriate responses
- Assign responsibilities
- Set timelines and budgets

**Step 6: Document Everything**
- Create risk register
- Keep records for reference
- Update as things change

Regular risk assessment helps you stay ahead of potential problems and use your security resources wisely.
`,
      quiz: [
        {
          id: 1,
          question: "What is risk in security terms?",
          options: [
            "Possibility of something bad happening",
            "Certainty of problems",
            "Only theft concerns",
            "Only natural disasters"
          ],
          correctAnswer: 0,
          explanation: "Risk is the potential for harm or loss that could affect an organization's assets or operations."
        },
        {
          id: 2,
          question: "What are the three components of risk?",
          options: [
            "Threat, Vulnerability, Impact",
            "Only threat and vulnerability",
            "Only cost and benefit",
            "Only likelihood and impact"
          ],
          correctAnswer: 0,
          explanation: "Risk combines threat (source of harm), vulnerability (weakness), and impact (consequences)."
        },
        {
          id: 3,
          question: "What is a threat?",
          options: [
            "Something that could cause harm",
            "Only natural disasters",
            "Only employee mistakes",
            "Only equipment failures"
          ],
          correctAnswer: 0,
          explanation: "A threat is any potential source of harm, whether from people, nature, accidents, or systems."
        },
        {
          id: 4,
          question: "What is a vulnerability?",
          options: [
            "Weakness that could be exploited",
            "Only broken equipment",
            "Only employee errors",
            "Only natural weaknesses"
          ],
          correctAnswer: 0,
          explanation: "A vulnerability is any weakness that a threat could use to cause harm to an asset."
        },
        {
          id: 5,
          question: "What are examples of assets?",
          options: [
            "People, property, information, reputation",
            "Only buildings",
            "Only computers",
            "Only money"
          ],
          correctAnswer: 0,
          explanation: "Assets include people, physical property, information, reputation, and business operations."
        },
        {
          id: 6,
          question: "What is an external threat?",
          options: [
            "People outside the organization",
            "Only current employees",
            "Only former employees",
            "Only equipment failures"
          ],
          correctAnswer: 0,
          explanation: "External threats come from outside the organization, such as strangers, competitors, or criminals."
        },
        {
          id: 7,
          question: "What is an internal threat?",
          options: [
            "Current or former employees",
            "Only natural disasters",
            "Only competitors",
            "Only equipment failures"
          ],
          correctAnswer: 0,
          explanation: "Internal threats come from people inside the organization, including employees or contractors."
        },
        {
          id: 8,
          question: "What is risk avoidance?",
          options: [
            "Stop doing the risky activity",
            "Buy insurance",
            "Install security measures",
            "Accept the risk"
          ],
          correctAnswer: 0,
          explanation: "Risk avoidance means eliminating the risk by stopping the activity that creates it."
        },
        {
          id: 9,
          question: "What is risk reduction?",
          options: [
            "Implement security controls",
            "Stop the activity",
            "Buy insurance",
            "Ignore the risk"
          ],
          correctAnswer: 0,
          explanation: "Risk reduction involves implementing measures to decrease likelihood or impact of risks."
        },
        {
          id: 10,
          question: "What is risk transfer?",
          options: [
            "Move risk to someone else (like insurance)",
            "Eliminate the risk completely",
            "Reduce the risk slightly",
            "Accept the risk as-is"
          ],
          correctAnswer: 0,
          explanation: "Risk transfer shifts the financial burden of risk to another party, typically through insurance."
        },
        {
          id: 11,
          question: "What is risk acceptance?",
          options: [
            "Decide to live with the risk",
            "Eliminate the risk",
            "Reduce the risk",
            "Transfer the risk"
          ],
          correctAnswer: 0,
          explanation: "Risk acceptance means consciously deciding not to address a risk because it's low priority."
        },
        {
          id: 12,
          question: "What is a risk register?",
          options: [
            "Document that tracks identified risks",
            "Only insurance document",
            "Only employee records",
            "Only equipment list"
          ],
          correctAnswer: 0,
          explanation: "A risk register is a document that lists identified risks, their analysis, and treatment plans."
        },
        {
          id: 13,
          question: "What does likelihood mean in risk assessment?",
          options: [
            "How probable the risk is",
            "How severe the damage would be",
            "How much it would cost",
            "How often it happens"
          ],
          correctAnswer: 0,
          explanation: "Likelihood refers to the probability or chance that a risk will actually occur."
        },
        {
          id: 14,
          question: "What does impact mean in risk assessment?",
          options: [
            "How severe the consequences would be",
            "How likely it is to happen",
            "How much prevention costs",
            "How many people are affected"
          ],
          correctAnswer: 0,
          explanation: "Impact refers to the severity of consequences if a risk actually occurs."
        },
        {
          id: 15,
          question: "What is the first step in risk assessment?",
          options: [
            "Identify assets",
            "Identify threats",
            "Analyze risks",
            "Plan treatments"
          ],
          correctAnswer: 0,
          explanation: "The first step is identifying what needs protection - the organization's valuable assets."
        },
        {
          id: 16,
          question: "What is a common physical vulnerability?",
          options: [
            "Unlocked doors or windows",
            "Strong passwords",
            "Good lighting",
            "Security cameras"
          ],
          correctAnswer: 0,
          explanation: "Physical vulnerabilities include unlocked access points, poor lighting, or broken barriers."
        },
        {
          id: 17,
          question: "What is a common procedural vulnerability?",
          options: [
            "Employees sharing passwords",
            "Locked doors",
            "Security cameras",
            "Strong fences"
          ],
          correctAnswer: 0,
          explanation: "Procedural vulnerabilities involve poor practices like password sharing or inadequate training."
        },
        {
          id: 18,
          question: "What does qualitative risk assessment use?",
          options: [
            "Descriptive ratings (High/Medium/Low)",
            "Exact dollar amounts",
            "Complex calculations",
            "Only expert opinions"
          ],
          correctAnswer: 0,
          explanation: "Qualitative assessment uses descriptive ratings rather than precise numerical measurements."
        },
        {
          id: 19,
          question: "When should you update your risk register?",
          options: [
            "Regularly and after incidents",
            "Only once per year",
            "Only when forced to",
            "Never after creating it"
          ],
          correctAnswer: 0,
          explanation: "Risk registers should be updated regularly and whenever new risks emerge or circumstances change."
        },
        {
          id: 20,
          question: "What helps prioritize risks in a matrix?",
          options: [
            "Combining likelihood and impact scores",
            "Only considering cost",
            "Only manager opinions",
            "Only past incidents"
          ],
          correctAnswer: 0,
          explanation: "Risk matrices combine likelihood and impact assessments to determine priority levels."
        }
      ]
    },
    {
      id: 3,
      title: "Physical Security Fundamentals",
      completed: false,
      content: `
## **Module 3: Physical Security Fundamentals**

### **Understanding Physical Security**
Physical security protects people, property, and assets from physical actions that could cause harm. It's about creating barriers and controls to prevent unauthorized access or damage.

**Three Main Goals:**
1. **Deter:** Make attackers think twice
2. **Detect:** Discover attempts quickly
3. **Delay:** Slow down intruders

### **Layers of Physical Security**
Think of physical security like an onion with multiple layers:

**Perimeter Security (Outer Layer):**
- Fences, walls, and gates
- Lighting around boundaries
- Clear zone outside fence line
- Signage indicating private property

**Building Exterior (Middle Layer):**
- Doors, windows, and walls
- Locks and access controls
- Exterior lighting
- Surveillance of entry points

**Interior Security (Inner Layer):**
- Internal doors and partitions
- Secure rooms and cabinets
- Movement controls inside
- Monitoring sensitive areas

**Asset Protection (Core Layer):**
- Safes and secure containers
- Individual item security
- Special protection for high-value items
- Final layer of defense

### **Access Control Systems**
Access control determines who can enter where and when. It's about managing movement through your facilities.

**Three Types of Access Control:**
1. **Mechanical:** Traditional locks and keys
2. **Electronic:** Keycards, codes, biometrics
3. **Procedural:** Security checks, escorts, sign-in

**Basic Access Control Principles:**
- **Who:** Which people are allowed
- **Where:** Which areas they can enter
- **When:** What times access is permitted
- **Why:** Purpose for needing access
- **How:** Method of access granted

**Common Access Control Methods:**
- **Key and Lock Systems:** Simple but limited control
- **Card Access Systems:** Easy to manage, trackable
- **Biometric Systems:** Fingerprint, facial recognition
- **Combination Locks:** No keys needed, codes can be shared
- **Manual Control:** Security guard checks

### **Security Lighting**
Good lighting is one of the simplest and most effective security measures. It helps people see and be seen.

**Types of Security Lighting:**
- **Continuous Lighting:** Always on in key areas
- **Standby Lighting:** Turns on when needed
- **Movable Lighting:** Portable or adjustable
- **Emergency Lighting:** Backup during power failures

**Lighting Placement Considerations:**
- Entry and exit points
- Parking areas and walkways
- Blind spots and hidden areas
- Perimeter fences and gates
- Building exteriors and signs

**Lighting Effectiveness Tips:**
- Eliminate shadows where people could hide
- Ensure consistent coverage without gaps
- Use appropriate brightness for each area
- Maintain lights regularly (replace burned-out bulbs)
- Consider energy efficiency and costs

### **Locks and Barriers**
Physical barriers create obstacles that slow down or stop unauthorized entry.

**Types of Locks:**
- **Padlocks:** Portable, various security levels
- **Deadbolts:** Strong door protection
- **Mortise Locks:** Built into door structure
- **Electronic Locks:** Keyless entry options
- **Combination Locks:** No keys required

**Door Security Considerations:**
- Door material and construction
- Hinge type and placement
- Frame strength and attachment
- Glass panels (if any)
- Door closers and stops

**Window Security:**
- Glass type and thickness
- Window locks and bars
- Film to strengthen glass
- Alarm contacts on openings
- External shutters or grilles

### **Surveillance Systems**
Surveillance helps you monitor what's happening and provides evidence if needed.

**Basic Surveillance Components:**
1. **Cameras:** Capture video footage
2. **Monitors:** View live or recorded video
3. **Recorders:** Store video evidence
4. **Control Systems:** Manage camera functions

**Camera Types and Uses:**
- **Fixed Cameras:** Watch specific areas
- **Pan-Tilt-Zoom (PTZ):** Can move and zoom
- **Dome Cameras:** Discreet, hard to tell where pointed
- **Bullet Cameras:** Visible deterrent effect
- **Hidden Cameras:** Covert surveillance

**Camera Placement Strategies:**
- Cover all entry and exit points
- Monitor cash handling areas
- Watch high-value inventory
- Cover parking and exterior areas
- Ensure overlapping coverage

### **Alarm Systems**
Alarms alert you when security is breached and can scare off intruders.

**Types of Alarm Sensors:**
- **Door/Window Contacts:** Detect opening
- **Motion Detectors:** Sense movement
- **Glass Break Sensors:** Hear breaking glass
- **Vibration Sensors:** Feel forced entry attempts
- **Pressure Mats:** Feel footsteps

**Alarm Response Options:**
- **Local Alarm:** Sounds on-site only
- **Monitored Alarm:** Alerts security company
- **Silent Alarm:** Alerts without alerting intruder
- **Combination:** Multiple response types

**Alarm System Considerations:**
- False alarm prevention
- Backup power supply
- Regular testing schedule
- Staff training on use
- Maintenance requirements

### **Security Patrols and Guards**
Human presence adds an important layer to physical security.

**Types of Security Presence:**
- **Stationary Guards:** Fixed posts
- **Roving Patrols:** Moving through areas
- **Reception Security:** Front desk control
- **Mobile Patrols:** Vehicle-based coverage
- **Remote Monitoring:** Camera monitoring centers

**Guard Responsibilities:**
- Observe and report suspicious activity
- Control access to facilities
- Respond to alarms and incidents
- Provide customer service
- Maintain security logs

**Effective Patrol Strategies:**
- Vary patrol routes and times
- Check all designated points
- Test doors and windows
- Look for maintenance issues
- Document all observations

### **Security Signage**
Signs communicate security expectations and warnings.

**Types of Security Signs:**
- **Warning Signs:** "No Trespassing"
- **Informational Signs:** "All Visitors Must Sign In"
- **Directional Signs:** "Security Office →"
- **Emergency Signs:** "Emergency Exit Only"
- **Procedural Signs:** "Show ID Badge"

**Effective Sign Placement:**
- At all entry points
- In parking areas
- Near sensitive locations
- Along perimeter boundaries
- Where policies apply

**Sign Design Considerations:**
- Clear, simple language
- Easy-to-read fonts
- Appropriate size for distance
- Weather-resistant materials
- Consistent design scheme

### **Integrating Physical Security Measures**
The best physical security combines multiple measures that work together.

**Integration Principles:**
- Each layer supports the others
- Systems should communicate if possible
- People and technology complement each other
- Regular testing ensures everything works
- Updates keep pace with changing needs

**Common Integration Examples:**
- Cameras recording at access control points
- Alarms triggering camera recording
- Guards responding to alarm activations
- Lighting enhancing camera effectiveness
- Signs reinforcing access control rules

Remember: Physical security should be visible enough to deter, comprehensive enough to protect, and flexible enough to adapt to changing situations.
`,
      quiz: [
        {
          id: 1,
          question: "What are the three main goals of physical security?",
          options: [
            "Deter, Detect, Delay",
            "Only prevent theft",
            "Only catch criminals",
            "Only protect property"
          ],
          correctAnswer: 0,
          explanation: "Physical security aims to deter attackers, detect attempts, and delay intruders until help arrives."
        },
        {
          id: 2,
          question: "What is perimeter security?",
          options: [
            "Outer layer with fences and gates",
            "Only interior doors",
            "Only alarm systems",
            "Only camera systems"
          ],
          correctAnswer: 0,
          explanation: "Perimeter security is the outermost layer, including fences, gates, and boundary controls."
        },
        {
          id: 3,
          question: "What does access control determine?",
          options: [
            "Who can enter where and when",
            "Only who can use computers",
            "Only who can park",
            "Only employee schedules"
          ],
          correctAnswer: 0,
          explanation: "Access control manages which people can enter which areas at what times for what purposes."
        },
        {
          id: 4,
          question: "Why is security lighting important?",
          options: [
            "Helps people see and eliminates hiding spots",
            "Only for appearance",
            "Only to save energy",
            "Only during daytime"
          ],
          correctAnswer: 0,
          explanation: "Good lighting helps detection, eliminates hiding places, and makes people feel safer."
        },
        {
          id: 5,
          question: "What are mechanical access controls?",
          options: [
            "Traditional locks and keys",
            "Only keycard systems",
            "Only biometric systems",
            "Only security guards"
          ],
          correctAnswer: 0,
          explanation: "Mechanical controls include traditional locks, keys, and physical barriers without electronics."
        },
        {
          id: 6,
          question: "What do surveillance cameras provide?",
          options: [
            "Monitoring capability and evidence",
            "Only decoration",
            "Only light",
            "Only access control"
          ],
          correctAnswer: 0,
          explanation: "Cameras allow monitoring of areas and provide video evidence if incidents occur."
        },
        {
          id: 7,
          question: "What do alarm systems do?",
          options: [
            "Alert when security is breached",
            "Only control access",
            "Only provide lighting",
            "Only monitor employees"
          ],
          correctAnswer: 0,
          explanation: "Alarms detect security breaches and provide alerts through sound, lights, or notifications."
        },
        {
          id: 8,
          question: "What is continuous lighting?",
          options: [
            "Always on in key areas",
            "Only during emergencies",
            "Only when motion detected",
            "Only during nighttime"
          ],
          correctAnswer: 0,
          explanation: "Continuous lighting remains on constantly in areas that need constant illumination."
        },
        {
          id: 9,
          question: "What do security guards typically do?",
          options: [
            "Observe, control access, respond to incidents",
            "Only sit at desks",
            "Only monitor cameras",
            "Only write reports"
          ],
          correctAnswer: 0,
          explanation: "Guards observe activity, control access points, and respond to security incidents."
        },
        {
          id: 10,
          question: "What is interior security?",
          options: [
            "Inner layer protecting inside areas",
            "Only outside fences",
            "Only parking lots",
            "Only building exterior"
          ],
          correctAnswer: 0,
          explanation: "Interior security protects spaces inside buildings through internal controls and monitoring."
        },
        {
          id: 11,
          question: "What are electronic access controls?",
          options: [
            "Keycards, codes, biometric systems",
            "Only traditional locks",
            "Only security guards",
            "Only warning signs"
          ],
          correctAnswer: 0,
          explanation: "Electronic controls use technology like keycards, keypads, or biometric readers for access."
        },
        {
          id: 12,
          question: "What do door/window contacts detect?",
          options: [
            "Opening of doors or windows",
            "Only motion inside",
            "Only glass breaking",
            "Only vibration"
          ],
          correctAnswer: 0,
          explanation: "These contacts detect when protected doors or windows are opened, triggering alarms if armed."
        },
        {
          id: 13,
          question: "Why vary patrol routes and times?",
          options: [
            "Prevents predictability",
            "Only saves time",
            "Only reduces walking",
            "Only for exercise"
          ],
          correctAnswer: 0,
          explanation: "Varying patrol patterns prevents potential intruders from predicting security movements."
        },
        {
          id: 14,
          question: "What is asset protection layer?",
          options: [
            "Core layer protecting individual items",
            "Only perimeter fence",
            "Only building doors",
            "Only parking areas"
          ],
          correctAnswer: 0,
          explanation: "This innermost layer provides direct protection for valuable items through safes or secure storage."
        },
        {
          id: 15,
          question: "What are motion detectors?",
          options: [
            "Sensors that detect movement",
            "Only door opening sensors",
            "Only glass break sensors",
            "Only vibration sensors"
          ],
          correctAnswer: 0,
          explanation: "Motion detectors sense movement within their coverage area and can trigger alarms or cameras."
        },
        {
          id: 16,
          question: "What do security signs communicate?",
          options: [
            "Expectations and warnings",
            "Only employee names",
            "Only room numbers",
            "Only decoration"
          ],
          correctAnswer: 0,
          explanation: "Signs inform people about security rules, warn about consequences, and provide directions."
        },
        {
          id: 17,
          question: "What is monitored alarm response?",
          options: [
            "Alerts security company for response",
            "Only sounds locally",
            "Only notifies intruder",
            "Only turns on lights"
          ],
          correctAnswer: 0,
          explanation: "Monitored alarms notify a security company who can dispatch help or contact authorities."
        },
        {
          id: 18,
          question: "What are fixed cameras?",
          options: [
            "Watch specific areas without moving",
            "Can move and zoom",
            "Are hidden from view",
            "Only record audio"
          ],
          correctAnswer: 0,
          explanation: "Fixed cameras point at one specific area and don't move, providing constant coverage of that spot."
        },
        {
          id: 19,
          question: "Why integrate security measures?",
          options: [
            "Creates stronger overall protection",
            "Only increases cost",
            "Only complicates systems",
            "Only for appearance"
          ],
          correctAnswer: 0,
          explanation: "Integrated systems work together, creating stronger protection than individual measures alone."
        },
        {
          id: 20,
          question: "What is building exterior security?",
          options: [
            "Middle layer protecting building shell",
            "Only interior rooms",
            "Only perimeter fence",
            "Only asset storage"
          ],
          correctAnswer: 0,
          explanation: "This middle layer protects the building itself through doors, windows, walls, and exterior lighting."
        }
      ]
    },
    {
      id: 4,
      title: "Personnel Security Basics",
      completed: false,
      content: `
## **Module 4: Personnel Security Basics**

### **Understanding Personnel Security**
Personnel security focuses on the people within an organization - ensuring they are trustworthy, properly trained, and following security procedures. People can be your greatest asset or your biggest vulnerability.

**Key Personnel Security Goals:**
1. **Hire Trustworthy People:** Screen applicants properly
2. **Train Employees Well:** Ensure security knowledge
3. **Manage Access Appropriately:** Give needed access only
4. **Monitor When Necessary:** Watch for problems
5. **Handle Departures Safely:** Secure when people leave

### **Pre-Employment Screening**
Screening happens before hiring to ensure candidates are suitable and trustworthy.

**Basic Screening Elements:**
- **Application Review:** Check for honesty and completeness
- **Interview Assessment:** Evaluate attitudes and fit
- **Reference Checks:** Contact previous employers
- **Background Checks:** Verify education and history
- **Identity Verification:** Confirm who they are

**What to Look For:**
- Honesty on applications and in interviews
- Relevant skills and experience
- Good judgment and reliability
- Positive work history
- Appropriate qualifications

**Legal Considerations:**
- Follow equal opportunity laws
- Get consent for background checks
- Protect applicant privacy
- Use only job-relevant information
- Document screening decisions

### **Security Training and Awareness**
Once hired, employees need ongoing security education.

**New Employee Orientation:**
- Basic security policies and rules
- Emergency procedures
- Access control systems
- Reporting responsibilities
- Security contact information

**Regular Security Training:**
- Updates on new threats
- Reminders of existing policies
- Procedure reviews
- Scenario practice
- Question and answer sessions

**Specialized Training:**
- For employees with special access
- Handling sensitive information
- Operating security equipment
- Responding to specific threats
- Supervisory responsibilities

**Keeping Training Effective:**
- Make it relevant to job roles
- Use different formats (videos, hands-on)
- Test understanding periodically
- Provide refreshers regularly
- Get feedback for improvement

### **Access Management**
Controlling what employees can access based on their roles and needs.

**Principles of Access Management:**
- **Need-to-Know:** Access only what's required for job
- **Least Privilege:** Minimum access needed
- **Separation of Duties:** Critical tasks need multiple people
- **Regular Review:** Periodically check access needs

**Types of Access to Manage:**
- **Physical Access:** Buildings, rooms, areas
- **Information Access:** Files, data, systems
- **System Access:** Computers, networks, software
- **Asset Access:** Equipment, vehicles, tools

**Access Control Methods:**
- **Badges/ID Cards:** Visual identification
- **Keys/Combinations:** Physical access
- **Passwords/Codes:** System access
- **Biometrics:** Unique physical traits
- **Procedural:** Manual checks and logs

### **Monitoring and Supervision**
Reasonable monitoring helps ensure security compliance.

**Types of Monitoring:**
- **Direct Supervision:** Managers observing work
- **Activity Logs:** Records of actions taken
- **System Monitoring:** Tracking computer use
- **Camera Surveillance:** Visual observation
- **Performance Reviews:** Regular evaluations

**Monitoring Guidelines:**
- Be transparent about monitoring
- Only monitor job-related activities
- Protect employee privacy rights
- Use information appropriately
- Follow legal requirements

**Signs of Potential Problems:**
- Unexplained wealth or spending
- Working unusual hours unnecessarily
- Taking home sensitive materials
- Refusing vacations (might hide activities)
- Showing unusual stress or behavior changes

### **Managing Employee Departures**
When employees leave, secure access and information.

**Voluntary Departures (Resignation):**
- Conduct exit interview
- Collect all access items (keys, badges)
- Disable system access immediately
- Retrieve company property
- Provide final instructions on obligations

**Involuntary Departures (Termination):**
- Plan termination carefully
- Have security present if needed
- Collect access items during meeting
- Escort from premises if appropriate
- Notify relevant staff about access changes

**Exit Procedures Checklist:**
- Return keys, badges, access cards
- Disable computer accounts and passwords
- Collect company equipment and materials
- Review confidentiality agreements
- Update access control systems
- Inform security and reception staff

### **Visitor and Contractor Management**
People who aren't employees also need security management.

**Visitor Procedures:**
- All visitors must sign in
- Issue temporary badges
- Escort visitors in sensitive areas
- Log visit purpose and contacts
- Collect badge upon departure

**Contractor Management:**
- Verify contractor identities
- Check contractor company security
- Limit access to work areas only
- Monitor contractor activities
- Review contractor employee screening

**Delivery and Service Personnel:**
- Designate receiving areas
- Escort in sensitive locations
- Monitor while on premises
- Verify delivery contents
- Log all entries and exits

### **Security Culture Development**
Creating an environment where security is valued by everyone.

**Elements of Strong Security Culture:**
- Leadership sets good example
- Security is everyone's responsibility
- Open communication about concerns
- Positive reinforcement for good practices
- Continuous improvement mindset

**Building Security Culture:**
- Regular security communications
- Recognition for security contributions
- Involving employees in planning
- Addressing concerns promptly
- Making security part of daily routines

**Overcoming Resistance:**
- Explain "why" behind rules
- Make security convenient when possible
- Listen to employee feedback
- Show benefits of compliance
- Address legitimate concerns

### **Handling Security Violations**
When employees break security rules, handle it appropriately.

**Minor Violations:**
- Provide additional training
- Give clear warnings
- Document the incident
- Follow progressive discipline
- Offer support for improvement

**Serious Violations:**
- Immediate investigation
- Preserve evidence
- Involve appropriate management
- Consider suspension during investigation
- Follow legal and policy requirements

**Investigation Principles:**
- Be fair and objective
- Maintain confidentiality
- Document everything
- Follow established procedures
- Consider all perspectives

### **Confidentiality and Non-Disclosure**
Protecting sensitive information employees learn.

**Confidentiality Agreements:**
- Signed upon hiring
- Define what information is protected
- Explain obligations
- Specify duration of obligations
- Outline consequences for violations

**Protecting Sensitive Information:**
- Mark documents appropriately
- Control distribution
- Secure storage requirements
- Proper disposal methods
- Need-to-know access only

**Reminding Employees:**
- Regular confidentiality training
- Updates when handling sensitive projects
- Exit interview reminders
- Ongoing awareness communications
- Reinforcement of legal obligations

Personnel security is about building trust while maintaining appropriate controls. When done well, it protects the organization while respecting employees' rights and dignity.
`,
      quiz: [
        {
          id: 1,
          question: "What is personnel security?",
          options: [
            "Focus on people within organization",
            "Only building security",
            "Only computer security",
            "Only emergency response"
          ],
          correctAnswer: 0,
          explanation: "Personnel security manages human factors in security - hiring, training, monitoring, and managing people."
        },
        {
          id: 2,
          question: "What is pre-employment screening?",
          options: [
            "Checking candidates before hiring",
            "Only training employees",
            "Only monitoring current staff",
            "Only firing procedures"
          ],
          correctAnswer: 0,
          explanation: "Screening evaluates job applicants to ensure they are suitable and trustworthy before hiring."
        },
        {
          id: 3,
          question: "What should new employee orientation include?",
          options: [
            "Basic security policies and emergency procedures",
            "Only job skills training",
            "Only computer training",
            "Only social activities"
          ],
          correctAnswer: 0,
          explanation: "Orientation should cover security rules, emergency responses, access systems, and reporting duties."
        },
        {
          id: 4,
          question: "What is the 'need-to-know' principle?",
          options: [
            "Access only what's required for job",
            "Everyone knows everything",
            "Only managers know",
            "Information is secret"
          ],
          correctAnswer: 0,
          explanation: "Need-to-know limits access to information necessary for performing specific job responsibilities."
        },
        {
          id: 5,
          question: "What is 'least privilege' in access management?",
          options: [
            "Minimum access needed for job",
            "Maximum access for all",
            "No access restrictions",
            "Access based on seniority"
          ],
          correctAnswer: 0,
          explanation: "Least privilege gives employees the minimum access necessary to perform their work effectively."
        },
        {
          id: 6,
          question: "What should exit procedures include?",
          options: [
            "Collecting access items and disabling accounts",
            "Only saying goodbye",
            "Only final paycheck",
            "Only exit interview"
          ],
          correctAnswer: 0,
          explanation: "Exit procedures should secure all access methods and return company property before departure."
        },
        {
          id: 7,
          question: "How should visitors be managed?",
          options: [
            "Sign in, badge, escort in sensitive areas",
            "Free access everywhere",
            "No management needed",
            "Only if staying long"
          ],
          correctAnswer: 0,
          explanation: "Visitors should sign in, wear identification, and be escorted in areas requiring protection."
        },
        {
          id: 8,
          question: "What builds strong security culture?",
          options: [
            "Leadership example and everyone's responsibility",
            "Only security staff involvement",
            "Only written policies",
            "Only punishment for violations"
          ],
          correctAnswer: 0,
          explanation: "Strong culture requires leadership example, shared responsibility, and positive reinforcement."
        },
        {
          id: 9,
          question: "What is separation of duties?",
          options: [
            "Critical tasks need multiple people",
            "One person does everything",
            "Only managers do important tasks",
            "Tasks divided by department"
          ],
          correctAnswer: 0,
          explanation: "Separation of duties requires multiple people for critical processes to prevent fraud or errors."
        },
        {
          id: 10,
          question: "What should reference checks verify?",
          options: [
            "Previous employment and performance",
            "Only education",
            "Only personal life",
            "Only criminal history"
          ],
          correctAnswer: 0,
          explanation: "Reference checks should confirm employment history, job performance, and relevant experience."
        },
        {
          id: 11,
          question: "What is regular access review?",
          options: [
            "Periodically checking access needs",
            "Only when hired",
            "Only when fired",
            "Never checking access"
          ],
          correctAnswer: 0,
          explanation: "Regular reviews ensure employees still need their current access levels as roles change."
        },
        {
          id: 12,
          question: "How handle minor security violations?",
          options: [
            "Additional training and clear warnings",
            "Immediate termination",
            "Ignore them",
            "Only written warning"
          ],
          correctAnswer: 0,
          explanation: "Minor violations typically require education, clear communication, and documentation first."
        },
        {
          id: 13,
          question: "What do confidentiality agreements do?",
          options: [
            "Protect sensitive information",
            "Only protect company property",
            "Only control work hours",
            "Only specify job duties"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality agreements legally protect sensitive information employees learn during employment."
        },
        {
          id: 14,
          question: "What should contractor management include?",
          options: [
            "Verify identities and limit access",
            "Same as regular employees",
            "No management needed",
            "Only payment management"
          ],
          correctAnswer: 0,
          explanation: "Contractors need identity verification, access limits, and monitoring like other non-employees."
        },
        {
          id: 15,
          question: "What is monitoring in personnel security?",
          options: [
            "Reasonable observation for compliance",
            "Constant surveillance",
            "Only after incidents",
            "Never done"
          ],
          correctAnswer: 0,
          explanation: "Monitoring involves appropriate observation to ensure security procedures are followed."
        },
        {
          id: 16,
          question: "What signs might indicate potential problems?",
          options: [
            "Unexplained wealth or unusual behavior",
            "Only perfect attendance",
            "Only good performance",
            "Only normal behavior"
          ],
          correctAnswer: 0,
          explanation: "Warning signs include financial changes, unusual work patterns, or behavioral shifts."
        },
        {
          id: 17,
          question: "What should exit interviews cover?",
          options: [
            "Return of property and confidentiality reminders",
            "Only social conversation",
            "Only future plans",
            "Only complaints"
          ],
          correctAnswer: 0,
          explanation: "Exit interviews should secure property and reinforce ongoing confidentiality obligations."
        },
        {
          id: 18,
          question: "What is security culture?",
          options: [
            "Environment where security is valued",
            "Only security department",
            "Only written rules",
            "Only during emergencies"
          ],
          correctAnswer: 0,
          explanation: "Security culture is when everyone values and practices good security as part of daily work."
        },
        {
          id: 19,
          question: "What should investigations be?",
          options: [
            "Fair, objective, and documented",
            "Only quick judgments",
            "Only based on rumors",
            "Only manager opinions"
          ],
          correctAnswer: 0,
          explanation: "Investigations should be impartial, thorough, and properly documented for fairness."
        },
        {
          id: 20,
          question: "Why train employees regularly?",
          options: [
            "Keep security knowledge fresh and updated",
            "Only when hired",
            "Only after mistakes",
            "Only for managers"
          ],
          correctAnswer: 0,
          explanation: "Regular training maintains awareness, updates on new threats, and reinforces good practices."
        }
      ]
    },
    {
      id: 5,
      title: "Emergency Response Planning",
      completed: false,
      content: `
## **Module 5: Emergency Response Planning**

### **Understanding Emergency Response**
Emergency response planning prepares your organization to handle unexpected events that could threaten people or operations. Being prepared saves lives and reduces damage.

**Types of Emergencies to Plan For:**
1. **Natural Disasters:** Storms, earthquakes, floods
2. **Medical Emergencies:** Injuries, heart attacks, illnesses
3. **Security Incidents:** Intruders, violence, theft
4. **Technical Failures:** Power outages, system crashes
5. **Human-Caused Events:** Fires, accidents, hazardous spills

### **Emergency Response Team**
A designated team coordinates response efforts during emergencies.

**Team Roles and Responsibilities:**
- **Emergency Coordinator:** Overall command and decisions
- **First Aid Team:** Medical response and care
- **Evacuation Team:** Guides people to safety
- **Communication Team:** Manages information flow
- **Security Team:** Controls access and protects

**Team Selection Criteria:**
- Willingness to serve in emergency role
- Appropriate skills and training
- Availability during emergencies
- Calm under pressure
- Good communication abilities

**Team Training Requirements:**
- Regular emergency drills
- First aid and CPR certification
- Use of emergency equipment
- Communication procedures
- Role-specific responsibilities

### **Emergency Communication Plans**
Clear communication is critical during emergencies.

**Internal Communication Methods:**
- Public address systems
- Two-way radios
- Phone trees or call lists
- Messaging systems
- Runners for verbal messages

**External Communication Needs:**
- Emergency services contact (911)
- Family notification procedures
- Media communication plan
- Neighbor or partner notifications
- Regulatory reporting requirements

**Communication Principles During Emergencies:**
- One official source of information
- Clear, calm, and simple messages
- Regular updates as situation changes
- Designated spokesperson
- Accurate information only

### **Evacuation Planning**
Getting people out safely is often the first priority.

**Evacuation Routes:**
- Primary and alternate routes
- Clearly marked and well-lit
- Free of obstructions
- Wide enough for traffic flow
- Lead to safe assembly areas

**Assembly Areas:**
- Safe distance from building
- Protected from hazards
- Large enough for all people
- Easy for emergency services to access
- Sheltered if possible

**Special Evacuation Considerations:**
- People with disabilities or special needs
- Visitors unfamiliar with building
- Employees working alone
- Hazardous materials areas
- High-rise building challenges

**Evacuation Procedures:**
- Sound evacuation alarm
- Designated personnel check areas
- Guide people to exits
- Assist those needing help
- Account for everyone at assembly area

### **Shelter-in-Place Planning**
Sometimes staying inside is safer than evacuating.

**When to Shelter-in-Place:**
- Severe weather warnings
- Hazardous material releases
- Active shooter situations
- When evacuation would create danger
- When instructed by authorities

**Shelter Areas:**
- Interior rooms without windows
- Protected from external hazards
- With emergency supplies
- Communication capability
- Restroom access if possible

**Shelter Procedures:**
- Close and lock doors/windows
- Turn off ventilation systems
- Monitor emergency information
- Stay until "all clear" given
- Account for all people in shelter

### **Medical Emergency Response**
Quick medical response can save lives.

**First Aid Supplies:**
- Well-stocked first aid kits
- Automated External Defibrillator (AED)
- Emergency oxygen if trained
- Burn treatment supplies
- Personal protective equipment

**First Aid Team Responsibilities:**
- Assess situation and call for help
- Provide immediate care within training
- Document treatment provided
- Prepare for emergency services arrival
- Support patient until help arrives

**Common Emergency Responses:**
- **Heart Attack:** Call 911, start CPR if needed, use AED
- **Severe Bleeding:** Apply direct pressure, elevate if possible
- **Choking:** Use Heimlich maneuver
- **Burns:** Cool with water, cover loosely
- **Fractures:** Immobilize, don't move unnecessarily

### **Fire Safety and Response**
Fire is a common emergency that requires specific planning.

**Fire Prevention Measures:**
- Regular inspection of electrical systems
- Proper storage of flammable materials
- Clear exit paths and doors
- Working smoke detectors and alarms
- Employee fire safety training

**Fire Response Procedures:**
- Sound fire alarm immediately
- Call fire department (911)
- Attempt to extinguish small fires if safe
- Evacuate following established routes
- Never use elevators during fire

**Fire Extinguisher Training (PASS method):**
- **P:** Pull the pin
- **A:** Aim at base of fire
- **S:** Squeeze the handle
- **S:** Sweep side to side

### **Severe Weather Preparedness**
Different weather emergencies require different responses.

**Thunderstorm Safety:**
- Move indoors away from windows
- Avoid electrical equipment and plumbing
- Stay informed about warnings
- Prepare for possible power loss
- Secure outdoor items

**Tornado Response:**
- Go to designated shelter area
- Lowest level, interior room
- Protect head and neck
- Stay away from windows
- Monitor weather radio

**Winter Storm Preparation:**
- Emergency heating alternatives
- Extra blankets and warm clothing
- Non-perishable food and water
- Emergency power sources
- Communication backup plans

### **Active Threat Response**
Violent incidents require specific response strategies.

**Run-Hide-Fight Principles:**
- **Run:** Escape if possible and safe
- **Hide:** Find secure hiding place if can't escape
- **Fight:** As last resort, incapacitate attacker

**Lockdown Procedures:**
- Lock doors and barricade if possible
- Turn off lights and silence phones
- Hide out of view from doors/windows
- Stay quiet and wait for police
- Follow police instructions precisely

**Communication During Active Threat:**
- Call 911 when safe to do so
- Provide location and description
- Follow police instructions
- Use emergency notification systems
- Account for people if possible

### **Business Continuity Planning**
Emergency planning should include keeping the business running.

**Essential Operations Identification:**
- What must continue during disruption
- Minimum staffing requirements
- Critical equipment and systems
- Key customer and supplier contacts
- Legal and regulatory obligations

**Backup and Recovery:**
- Data backup systems and procedures
- Alternate work location plans
- Equipment replacement strategies
- Supply chain alternatives
- Financial reserve considerations

**Recovery Planning:**
- Damage assessment procedures
- Cleanup and restoration plans
- Employee support and counseling
- Business resumption timeline
- Lessons learned documentation

### **Drill and Exercise Planning**
Practice makes perfect in emergency response.

**Types of Exercises:**
- **Tabletop Exercises:** Discussion-based planning
- **Walk-through Drills:** Practice procedures physically
- **Functional Exercises:** Simulate specific scenarios
- **Full-scale Exercises:** Realistic simulation with resources

**Exercise Planning Steps:**
1. Define objectives and scenarios
2. Develop exercise materials
3. Conduct the exercise
4. Evaluate performance
5. Improve plans based on lessons

**After-Action Review:**
- What worked well during exercise
- What needs improvement
- Specific corrective actions
- Responsibility assignments
- Follow-up timeline

Emergency response planning isn't about expecting the worst—it's about being prepared to protect what matters most when unexpected events occur.
`,
      quiz: [
        {
          id: 1,
          question: "What is emergency response planning?",
          options: [
            "Preparing for unexpected events",
            "Only for natural disasters",
            "Only for medical emergencies",
            "Only government responsibility"
          ],
          correctAnswer: 0,
          explanation: "Emergency planning prepares organizations to handle various unexpected threats to people and operations."
        },
        {
          id: 2,
          question: "What does an emergency response team do?",
          options: [
            "Coordinates response efforts during emergencies",
            "Only calls 911",
            "Only evacuates buildings",
            "Only writes plans"
          ],
          correctAnswer: 0,
          explanation: "The emergency team coordinates medical response, evacuation, communication, and security during incidents."
        },
        {
          id: 3,
          question: "What is important in emergency communication?",
          options: [
            "One official source of clear information",
            "Multiple conflicting messages",
            "Only rumors",
            "No communication needed"
          ],
          correctAnswer: 0,
          explanation: "Clear, consistent communication from one official source prevents confusion during emergencies."
        },
        {
          id: 4,
          question: "What should evacuation routes be?",
          options: [
            "Clearly marked and free of obstructions",
            "Hidden and secret",
            "Only for managers",
            "Not marked at all"
          ],
          correctAnswer: 0,
          explanation: "Evacuation routes must be clearly marked, unobstructed, and lead to safe assembly areas."
        },
        {
          id: 5,
          question: "When should you shelter-in-place?",
          options: [
            "When evacuation would create more danger",
            "Always during emergencies",
            "Never during emergencies",
            "Only during fire drills"
          ],
          correctAnswer: 0,
          explanation: "Shelter-in-place is appropriate when going outside would expose people to greater danger."
        },
        {
          id: 6,
          question: "What is the PASS method for?",
          options: [
            "Using fire extinguishers properly",
            "Only CPR procedures",
            "Only evacuation procedures",
            "Only first aid"
          ],
          correctAnswer: 0,
          explanation: "PASS (Pull, Aim, Squeeze, Sweep) is the correct method for operating fire extinguishers."
        },
        {
          id: 7,
          question: "What are assembly areas?",
          options: [
            "Safe locations away from building",
            "Inside the building",
            "Parking lots only",
            "Not needed"
          ],
          correctAnswer: 0,
          explanation: "Assembly areas are designated safe locations where people gather after evacuation for accountability."
        },
        {
          id: 8,
          question: "What is business continuity planning?",
          options: [
            "Keeping essential operations running during disruption",
            "Only emergency response",
            "Only financial planning",
            "Only for large companies"
          ],
          correctAnswer: 0,
          explanation: "Business continuity focuses on maintaining critical operations during and after emergencies."
        },
        {
          id: 9,
          question: "What does the emergency coordinator do?",
          options: [
            "Overall command and decision-making",
            "Only first aid",
            "Only evacuation",
            "Only communications"
          ],
          correctAnswer: 0,
          explanation: "The emergency coordinator makes overall decisions and coordinates all response activities."
        },
        {
          id: 10,
          question: "What is the Run-Hide-Fight principle for?",
          options: [
            "Active threat response",
            "Only fire emergencies",
            "Only medical emergencies",
            "Only natural disasters"
          ],
          correctAnswer: 0,
          explanation: "Run-Hide-Fight provides guidance for responding to violent incidents like active shooters."
        },
        {
          id: 11,
          question: "Why conduct emergency drills?",
          options: [
            "Practice makes response more effective",
            "Only to meet requirements",
            "Only for new employees",
            "Not really necessary"
          ],
          correctAnswer: 0,
          explanation: "Regular drills help people respond automatically and identify areas needing improvement in plans."
        },
        {
          id: 12,
          question: "What should first aid teams do?",
          options: [
            "Provide care within their training level",
            "Only call 911",
            "Only give advice",
            "Only for minor injuries"
          ],
          correctAnswer: 0,
          explanation: "First aid teams provide immediate care according to their training while waiting for professional help."
        },
        {
          id: 13,
          question: "What are tabletop exercises?",
          options: [
            "Discussion-based planning exercises",
            "Physical practice drills",
            "Only for managers",
            "Real emergencies"
          ],
          correctAnswer: 0,
          explanation: "Tabletop exercises involve discussing scenarios and responses without physical movement."
        },
        {
          id: 14,
          question: "What is important for severe weather preparedness?",
          options: [
            "Monitoring warnings and having shelter plans",
            "Only during tornadoes",
            "Only government responsibility",
            "Not needed indoors"
          ],
          correctAnswer: 0,
          explanation: "Weather preparedness requires monitoring alerts and having appropriate shelter plans for different threats."
        },
        {
          id: 15,
          question: "What should lockdown procedures include?",
          options: [
            "Lock doors, hide, silence devices",
            "Only call 911",
            "Only evacuate",
            "Only fight back"
          ],
          correctAnswer: 0,
          explanation: "Lockdown involves securing locations, hiding from view, and remaining quiet until police arrive."
        },
        {
          id: 16,
          question: "What is after-action review?",
          options: [
            "Evaluating what worked and needs improvement",
            "Only criticizing mistakes",
            "Only praising success",
            "Not necessary after drills"
          ],
          correctAnswer: 0,
          explanation: "After-action reviews identify strengths and weaknesses to improve future emergency response."
        },
        {
          id: 17,
          question: "What should fire prevention include?",
          options: [
            "Regular electrical inspections and clear exits",
            "Only fire extinguishers",
            "Only sprinkler systems",
            "Only during construction"
          ],
          correctAnswer: 0,
          explanation: "Fire prevention involves regular inspections, proper storage, clear exits, and working alarms."
        },
        {
          id: 18,
          question: "What are essential operations?",
          options: [
            "Business functions that must continue",
            "Only accounting functions",
            "Only management functions",
            "Everything must continue"
          ],
          correctAnswer: 0,
          explanation: "Essential operations are critical functions that must be maintained during disruptions."
        },
        {
          id: 19,
          question: "What should evacuation teams do?",
          options: [
            "Guide people to exits and check areas",
            "Only sound alarms",
            "Only call 911",
            "Only help managers"
          ],
          correctAnswer: 0,
          explanation: "Evacuation teams assist people exiting, check areas for stragglers, and ensure complete evacuation."
        },
        {
          id: 20,
          question: "Why plan for different emergency types?",
          options: [
            "Different threats require different responses",
            "Only plan for most likely",
            "Only natural disasters matter",
            "One plan fits all"
          ],
          correctAnswer: 0,
          explanation: "Different emergencies (fire, weather, violence) require specific response strategies for effectiveness."
        }
      ]
    },
    {
      id: 6,
      title: "Security Policies and Procedures",
      completed: false,
      content: `
## **Module 6: Security Policies and Procedures**

### **Understanding Security Policies**
Security policies are formal rules that guide how an organization protects itself. They provide clear expectations for everyone and help ensure consistent security practices.

**Why Policies Are Important:**
- Set clear expectations for behavior
- Ensure consistent security practices
- Provide legal protection for organization
- Support training and awareness efforts
- Guide decision-making during incidents

### **Policy Development Process**
Creating effective policies requires careful planning and involvement.

**Steps in Policy Development:**
1. **Identify Need:** What problem or risk needs addressing
2. **Research:** What do laws, standards, and best practices say
3. **Draft:** Write clear, specific policy language
4. **Review:** Get input from stakeholders and legal counsel
5. **Approve:** Formal adoption by management
6. **Implement:** Communicate and train on the policy
7. **Maintain:** Regular review and updates

**Who Should Be Involved:**
- Senior management for approval
- Security professionals for expertise
- Legal counsel for compliance
- Human Resources for personnel aspects
- Department representatives for practicality
- Employees for real-world perspective

### **Essential Security Policies**
Every organization needs certain basic security policies.

**Acceptable Use Policy:**
- Defines proper use of company resources
- Covers computers, internet, email, phones
- Explains prohibited activities
- Describes monitoring practices
- Outlines consequences for violations

**Access Control Policy:**
- Who can access what resources
- How access is granted and removed
- Password requirements
- Remote access rules
- Visitor and contractor access

**Physical Security Policy:**
- Building access hours and controls
- Key and badge management
- Visitor procedures
- Asset protection requirements
- Security equipment use

**Information Protection Policy:**
- Classifying information sensitivity
- Storage and transmission rules
- Sharing and disclosure limits
- Retention and disposal procedures
- Protection from unauthorized access

**Incident Response Policy:**
- What constitutes a security incident
- Reporting requirements and procedures
- Initial response actions
- Investigation processes
- Recovery and improvement steps

### **Writing Effective Policies**
Good policies are clear, practical, and enforceable.

**Characteristics of Effective Policies:**
- **Clear:** Easy to understand language
- **Concise:** Gets to the point without fluff
- **Consistent:** Doesn't contradict other policies
- **Complete:** Covers all important aspects
- **Current:** Updated regularly for relevance

**Policy Structure Elements:**
- **Purpose:** Why the policy exists
- **Scope:** Who and what it applies to
- **Policy Statement:** The actual rules
- **Responsibilities:** Who does what
- **Procedures:** How to implement
- **Enforcement:** Consequences for violations
- **Review Date:** When policy will be reviewed

**Language Tips for Policies:**
- Use simple, direct language
- Define technical terms
- Use "must" for requirements
- Use "should" for recommendations
- Avoid ambiguous words like "usually" or "normally"

### **Procedures and Work Instructions**
Procedures turn policies into actionable steps.

**Difference Between Policies and Procedures:**
- **Policies:** Rules and principles (WHAT and WHY)
- **Procedures:** Specific steps to follow (HOW)
- **Work Instructions:** Detailed task guidance

**Creating Effective Procedures:**
1. Identify the task or process
2. Break into logical steps
3. Write clear instructions for each step
4. Include safety and security considerations
5. Test with actual users
6. Revise based on feedback

**Procedure Format Options:**
- Numbered step-by-step lists
- Flowcharts for decision processes
- Checklists for complex tasks
- Forms for standardized documentation
- Combination approaches

### **Policy Implementation Strategies**
Getting policies adopted requires planning and effort.

**Communication Plan:**
- Announce policy introduction
- Explain reasons and benefits
- Provide multiple ways to access policy
- Answer questions promptly
- Reinforce through multiple channels

**Training Requirements:**
- Initial training for all affected
- Regular refresher training
- Special training for specific roles
- New employee orientation inclusion
- Testing to verify understanding

**Implementation Timeline:**
- Phase in complex policies gradually
- Allow time for training and adjustment
- Set clear effective dates
- Provide grace period for compliance
- Monitor adoption progress

### **Monitoring and Enforcement**
Policies only work if people follow them.

**Monitoring Methods:**
- Regular audits and inspections
- System logs and activity monitoring
- Manager observations
- Employee feedback mechanisms
- Incident report analysis

**Enforcement Principles:**
- Consistent application for everyone
- Progressive discipline for violations
- Documentation of all enforcement actions
- Fair consideration of circumstances
- Legal compliance in all actions

**Handling Policy Violations:**
- Investigate facts thoroughly
- Apply policy consequences consistently
- Consider intent and history
- Document actions taken
- Use as learning opportunities when appropriate

### **Policy Review and Maintenance**
Policies need regular updating to stay relevant.

**Review Schedule:**
- Annual review for all policies
- Immediate review after major incidents
- Review when laws or regulations change
- Review when technology or threats change
- Review based on user feedback

**Review Process:**
- Gather feedback from users
- Analyze incident and violation data
- Consider changes in environment
- Update language for clarity
- Obtain necessary approvals

**Version Control:**
- Number policy versions clearly
- Date all policy documents
- Archive previous versions
- Track changes between versions
- Ensure only current version is used

### **Policy Documentation and Distribution**
Making policies accessible ensures they're used.

**Document Storage Options:**
- Employee handbook inclusion
- Intranet or shared network location
- Printed copies in key areas
- Mobile app accessibility
- Combination for maximum access

**Distribution Methods:**
- Email announcements with links
- Posted notices in common areas
- Team meeting discussions
- Training session handouts
- New employee orientation packets

**Access Considerations:**
- Available during and after hours
- Accessible to all affected personnel
- Searchable for easy reference
- Printable for those who prefer paper
- Available in needed languages

### **Special Policy Considerations**
Some situations require additional policy attention.

**Remote Work Policies:**
- Home office security requirements
- Equipment use and protection
- Network access rules
- Work hours and availability
- Performance monitoring approaches

**Bring Your Own Device (BYOD):**
- Which devices are allowed
- Security software requirements
- Data separation rules
- Company access to personal devices
- Support and liability limitations

**Social Media Policies:**
- Representation of company online
- Confidential information protection
- Professional conduct expectations
- Personal vs. professional account separation
- Consequences for policy violations

**Vendor and Contractor Policies:**
- Security requirements for third parties
- Access limitations and monitoring
- Contractual security obligations
- Incident reporting requirements
- Compliance verification methods

### **Creating a Policy Culture**
When policies become part of organizational culture, security improves.

**Building Policy Acceptance:**
- Explain the "why" behind policies
- Involve employees in development
- Recognize compliance and improvements
- Address legitimate concerns
- Lead by example at all levels

**Measuring Policy Effectiveness:**
- Compliance rate monitoring
- Incident frequency tracking
- Employee survey feedback
- Audit results analysis
- Cost-benefit evaluation

**Continuous Improvement:**
- Regular policy review cycles
- Learning from incidents and near-misses
- Benchmarking against industry standards
- Incorporating new best practices
- Adapting to changing environments

Well-crafted security policies provide the framework for effective protection while supporting business operations and respecting employee needs.
`,
      quiz: [
        {
          id: 1,
          question: "What are security policies?",
          options: [
            "Formal rules for organizational protection",
            "Only suggestions for security",
            "Only for security staff",
            "Only during emergencies"
          ],
          correctAnswer: 0,
          explanation: "Security policies are formal rules that guide how an organization protects its people, assets, and information."
        },
        {
          id: 2,
          question: "What is the first step in policy development?",
          options: [
            "Identify need for the policy",
            "Write the policy language",
            "Get management approval",
            "Train employees"
          ],
          correctAnswer: 0,
          explanation: "The first step is identifying what problem or risk the policy needs to address."
        },
        {
          id: 3,
          question: "What does an acceptable use policy cover?",
          options: [
            "Proper use of company resources",
            "Only building access",
            "Only emergency procedures",
            "Only visitor policies"
          ],
          correctAnswer: 0,
          explanation: "Acceptable use policies define proper use of computers, internet, email, and other company resources."
        },
        {
          id: 4,
          question: "What is the difference between policies and procedures?",
          options: [
            "Policies are rules, procedures are steps",
            "They are the same thing",
            "Only policies matter",
            "Only procedures matter"
          ],
          correctAnswer: 0,
          explanation: "Policies state rules and principles, while procedures provide specific steps for implementation."
        },
        {
          id: 5,
          question: "What should policy language be?",
          options: [
            "Clear, concise, and easy to understand",
            "Complex and technical",
            "Vague and flexible",
            "Only legal language"
          ],
          correctAnswer: 0,
          explanation: "Policy language should be clear and straightforward so everyone can understand their responsibilities."
        },
        {
          id: 6,
          question: "What is included in policy implementation?",
          options: [
            "Communication, training, and monitoring",
            "Only writing the policy",
            "Only management approval",
            "Only filing the policy"
          ],
          correctAnswer: 0,
          explanation: "Implementation requires communicating the policy, training affected personnel, and monitoring compliance."
        },
        {
          id: 7,
          question: "How often should policies be reviewed?",
          options: [
            "At least annually and after incidents",
            "Only when problems occur",
            "Only every five years",
            "Never after creation"
          ],
          correctAnswer: 0,
          explanation: "Policies should be reviewed regularly (at least annually) and whenever circumstances change significantly."
        },
        {
          id: 8,
          question: "What is version control for policies?",
          options: [
            "Numbering and dating policy documents",
            "Only electronic storage",
            "Only paper copies",
            "Only for large companies"
          ],
          correctAnswer: 0,
          explanation: "Version control involves clearly numbering and dating policies to track updates and ensure current versions are used."
        },
        {
          id: 9,
          question: "What does an incident response policy cover?",
          options: [
            "How to handle security incidents",
            "Only major disasters",
            "Only computer problems",
            "Only employee violations"
          ],
          correctAnswer: 0,
          explanation: "Incident response policies define how to report, investigate, and recover from security incidents."
        },
        {
          id: 10,
          question: "What is progressive discipline?",
          options: [
            "Increasing consequences for repeated violations",
            "Only immediate termination",
            "Only warnings",
            "No consequences"
          ],
          correctAnswer: 0,
          explanation: "Progressive discipline applies increasingly serious consequences for repeated or serious policy violations."
        },
        {
          id: 11,
          question: "What should policy distribution include?",
          options: [
            "Multiple methods for accessibility",
            "Only to managers",
            "Only paper copies",
            "Only during hiring"
          ],
          correctAnswer: 0,
          explanation: "Policies should be distributed through multiple channels to ensure all affected personnel can access them."
        },
        {
          id: 12,
          question: "What are remote work policies?",
          options: [
            "Rules for working outside office",
            "Only for vacation time",
            "Only for managers",
            "Not needed"
          ],
          correctAnswer: 0,
          explanation: "Remote work policies establish security requirements for employees working from home or other locations."
        },
        {
          id: 13,
          question: "What is BYOD policy?",
          options: [
            "Rules for using personal devices for work",
            "Only company devices",
            "Only computer use",
            "Only phone use"
          ],
          correctAnswer: 0,
          explanation: "BYOD (Bring Your Own Device) policies govern using personal phones, tablets, or computers for work purposes."
        },
        {
          id: 14,
          question: "Why involve employees in policy development?",
          options: [
            "Improves acceptance and practicality",
            "Only management decides",
            "Takes too much time",
            "Creates confusion"
          ],
          correctAnswer: 0,
          explanation: "Employee involvement increases policy acceptance and ensures policies are practical for daily work."
        },
        {
          id: 15,
          question: "What is policy scope?",
          options: [
            "Who and what the policy applies to",
            "Only the length",
            "Only the purpose",
            "Only enforcement"
          ],
          correctAnswer: 0,
          explanation: "Scope defines which people, departments, locations, or situations the policy covers."
        },
        {
          id: 16,
          question: "What should monitoring of policies include?",
          options: [
            "Audits, observations, and feedback",
            "Only after violations",
            "Only manager opinions",
            "Only annual review"
          ],
          correctAnswer: 0,
          explanation: "Monitoring should use multiple methods to assess policy compliance and effectiveness regularly."
        },
        {
          id: 17,
          question: "What are social media policies?",
          options: [
            "Rules for online conduct representing company",
            "Only personal use",
            "Only for marketing",
            "Not needed today"
          ],
          correctAnswer: 0,
          explanation: "Social media policies govern how employees represent the organization and protect information online."
        },
        {
          id: 18,
          question: "What is a policy culture?",
          options: [
            "When policies become part of organizational culture",
            "Only written rules",
            "Only for security staff",
            "Only during audits"
          ],
          correctAnswer: 0,
          explanation: "Policy culture exists when following security policies becomes natural behavior throughout the organization."
        },
        {
          id: 19,
          question: "What should vendor policies include?",
          options: [
            "Security requirements for third parties",
            "Only payment terms",
            "Only delivery schedules",
            "Only contract length"
          ],
          correctAnswer: 0,
          explanation: "Vendor policies establish security expectations for contractors, suppliers, and other third parties."
        },
        {
          id: 20,
          question: "Why measure policy effectiveness?",
          options: [
            "To improve and demonstrate value",
            "Only for reporting",
            "Only when required",
            "Not necessary"
          ],
          correctAnswer: 0,
          explanation: "Measuring effectiveness helps improve policies, allocate resources wisely, and demonstrate security value."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What is the main goal of security management?",
      options: [
        "To protect people, assets, and information",
        "To make everything perfectly secure",
        "Only to protect computers",
        "Only to prevent theft"
      ],
      correctAnswer: 0,
      explanation: "Security management aims to protect people, physical assets, information, and maintain operations.",
      module: 1
    },
    {
      id: 2,
      question: "What are the three components of risk?",
      options: [
        "Threat, Vulnerability, Impact",
        "Only threat and vulnerability",
        "Only cost and benefit",
        "Only likelihood and impact"
      ],
      correctAnswer: 0,
      explanation: "Risk combines threat (source of harm), vulnerability (weakness), and impact (consequences).",
      module: 2
    },
    {
      id: 3,
      question: "What are the three main goals of physical security?",
      options: [
        "Deter, Detect, Delay",
        "Only prevent theft",
        "Only catch criminals",
        "Only protect property"
      ],
      correctAnswer: 0,
      explanation: "Physical security aims to deter attackers, detect attempts, and delay intruders until help arrives.",
      module: 3
    },
    {
      id: 4,
      question: "What is pre-employment screening?",
      options: [
        "Checking candidates before hiring",
        "Only training employees",
        "Only monitoring current staff",
        "Only firing procedures"
      ],
      correctAnswer: 0,
      explanation: "Screening evaluates job applicants to ensure they are suitable and trustworthy before hiring.",
      module: 4
    },
    {
      id: 5,
      question: "What does an emergency response team do?",
      options: [
        "Coordinates response efforts during emergencies",
        "Only calls 911",
        "Only evacuates buildings",
        "Only writes plans"
      ],
      correctAnswer: 0,
      explanation: "The emergency team coordinates medical response, evacuation, communication, and security during incidents.",
      module: 5
    },
    {
      id: 6,
      question: "What are security policies?",
      options: [
        "Formal rules for organizational protection",
        "Only suggestions for security",
        "Only for security staff",
        "Only during emergencies"
      ],
      correctAnswer: 0,
      explanation: "Security policies are formal rules that guide how an organization protects its people, assets, and information.",
      module: 6
    },
    {
      id: 7,
      question: "What is defense in depth?",
      options: [
        "Using multiple layers of security",
        "Having only one strong security measure",
        "Protecting only important areas",
        "Hiding security measures"
      ],
      correctAnswer: 0,
      explanation: "Defense in depth uses multiple security layers so if one fails, others still provide protection.",
      module: 1
    },
    {
      id: 8,
      question: "What is risk avoidance?",
      options: [
        "Stop doing the risky activity",
        "Buy insurance",
        "Install security measures",
        "Accept the risk"
      ],
      correctAnswer: 0,
      explanation: "Risk avoidance means eliminating the risk by stopping the activity that creates it.",
      module: 2
    },
    {
      id: 9,
      question: "What does access control determine?",
      options: [
        "Who can enter where and when",
        "Only who can use computers",
        "Only who can park",
        "Only employee schedules"
      ],
      correctAnswer: 0,
      explanation: "Access control manages which people can enter which areas at what times for what purposes.",
      module: 3
    },
    {
      id: 10,
      question: "What is the 'need-to-know' principle?",
      options: [
        "Access only what's required for job",
        "Everyone knows everything",
        "Only managers know",
        "Information is secret"
      ],
      correctAnswer: 0,
      explanation: "Need-to-know limits access to information necessary for performing specific job responsibilities.",
      module: 4
    },
    {
      id: 11,
      question: "What should evacuation routes be?",
      options: [
        "Clearly marked and free of obstructions",
        "Hidden and secret",
        "Only for managers",
        "Not marked at all"
      ],
      correctAnswer: 0,
      explanation: "Evacuation routes must be clearly marked, unobstructed, and lead to safe assembly areas.",
      module: 5
    },
    {
      id: 12,
      question: "What is the first step in policy development?",
      options: [
        "Identify need for the policy",
        "Write the policy language",
        "Get management approval",
        "Train employees"
      ],
      correctAnswer: 0,
      explanation: "The first step is identifying what problem or risk the policy needs to address.",
      module: 6
    },
    {
      id: 13,
      question: "What is personnel security?",
      options: [
        "Focus on people within organization",
        "Only building security",
        "Only computer security",
        "Only emergency response"
      ],
      correctAnswer: 0,
      explanation: "Personnel security manages human factors in security - hiring, training, monitoring, and managing people.",
      module: 4
    },
    {
      id: 14,
      question: "What is emergency response planning?",
      options: [
        "Preparing for unexpected events",
        "Only for natural disasters",
        "Only for medical emergencies",
        "Only government responsibility"
      ],
      correctAnswer: 0,
      explanation: "Emergency planning prepares organizations to handle various unexpected threats to people and operations.",
      module: 5
    },
    {
      id: 15,
      question: "What does an acceptable use policy cover?",
      options: [
        "Proper use of company resources",
        "Only building access",
        "Only emergency procedures",
        "Only visitor policies"
      ],
      correctAnswer: 0,
      explanation: "Acceptable use policies define proper use of computers, internet, email, and other company resources.",
      module: 6
    },
    {
      id: 16,
      question: "What is physical security?",
      options: [
        "Protecting buildings, equipment, and physical assets",
        "Only digital information",
        "Only employee information",
        "Only financial data"
      ],
      correctAnswer: 0,
      explanation: "Physical security focuses on protecting tangible assets like buildings, equipment, and facilities.",
      module: 1
    },
    {
      id: 17,
      question: "What is a risk register?",
      options: [
        "Document that tracks identified risks",
        "Only insurance document",
        "Only employee records",
        "Only equipment list"
      ],
      correctAnswer: 0,
      explanation: "A risk register is a document that lists identified risks, their analysis, and treatment plans.",
      module: 2
    },
    {
      id: 18,
      question: "Why is security lighting important?",
      options: [
        "Helps people see and eliminates hiding spots",
        "Only for appearance",
        "Only to save energy",
        "Only during daytime"
      ],
      correctAnswer: 0,
      explanation: "Good lighting helps detection, eliminates hiding places, and makes people feel safer.",
      module: 3
    },
    {
      id: 19,
      question: "What is 'least privilege' in access management?",
      options: [
        "Minimum access needed for job",
        "Maximum access for all",
        "No access restrictions",
        "Access based on seniority"
      ],
      correctAnswer: 0,
      explanation: "Least privilege gives employees the minimum access necessary to perform their work effectively.",
      module: 4
    },
    {
      id: 20,
      question: "What is the PASS method for?",
      options: [
        "Using fire extinguishers properly",
        "Only CPR procedures",
        "Only evacuation procedures",
        "Only first aid"
      ],
      correctAnswer: 0,
      explanation: "PASS (Pull, Aim, Squeeze, Sweep) is the correct method for operating fire extinguishers.",
      module: 5
    },
    {
      id: 21,
      question: "What is the difference between policies and procedures?",
      options: [
        "Policies are rules, procedures are steps",
        "They are the same thing",
        "Only policies matter",
        "Only procedures matter"
      ],
      correctAnswer: 0,
      explanation: "Policies state rules and principles, while procedures provide specific steps for implementation.",
      module: 6
    },
    {
      id: 22,
      question: "What is information security?",
      options: [
        "Protecting digital data and systems",
        "Only protecting paper documents",
        "Only building security",
        "Only employee screening"
      ],
      correctAnswer: 0,
      explanation: "Information security involves protecting digital data, systems, networks, and communications.",
      module: 1
    },
    {
      id: 23,
      question: "What is risk reduction?",
      options: [
        "Implement security controls",
        "Stop the activity",
        "Buy insurance",
        "Ignore the risk"
      ],
      correctAnswer: 0,
      explanation: "Risk reduction involves implementing measures to decrease likelihood or impact of risks.",
      module: 2
    },
    {
      id: 24,
      question: "What do surveillance cameras provide?",
      options: [
        "Monitoring capability and evidence",
        "Only decoration",
        "Only light",
        "Only access control"
      ],
      correctAnswer: 0,
      explanation: "Cameras allow monitoring of areas and provide video evidence if incidents occur.",
      module: 3
    },
    {
      id: 25,
      question: "What should exit procedures include?",
      options: [
        "Collecting access items and disabling accounts",
        "Only saying goodbye",
        "Only final paycheck",
        "Only exit interview"
      ],
      correctAnswer: 0,
      explanation: "Exit procedures should secure all access methods and return company property before departure.",
      module: 4
    },
    {
      id: 26,
      question: "What are assembly areas?",
      options: [
        "Safe locations away from building",
        "Inside the building",
        "Parking lots only",
        "Not needed"
      ],
      correctAnswer: 0,
      explanation: "Assembly areas are designated safe locations where people gather after evacuation for accountability.",
      module: 5
    },
    {
      id: 27,
      question: "How often should policies be reviewed?",
      options: [
        "At least annually and after incidents",
        "Only when problems occur",
        "Only every five years",
        "Never after creation"
      ],
      correctAnswer: 0,
      explanation: "Policies should be reviewed regularly (at least annually) and whenever circumstances change significantly.",
      module: 6
    },
    {
      id: 28,
      question: "What is the security management cycle?",
      options: [
        "Assessment, Planning, Implementation, Review",
        "Only installation",
        "Only monitoring",
        "Only response"
      ],
      correctAnswer: 0,
      explanation: "The security cycle includes assessing needs, planning solutions, implementing measures, and reviewing effectiveness.",
      module: 1
    },
    {
      id: 29,
      question: "What is qualitative risk assessment?",
      options: [
        "Uses descriptive ratings (High/Medium/Low)",
        "Only exact numbers",
        "Only expert opinions",
        "Only computer analysis"
      ],
      correctAnswer: 0,
      explanation: "Qualitative assessment uses descriptive ratings rather than precise numerical measurements.",
      module: 2
    },
    {
      id: 30,
      question: "What do alarm systems do?",
      options: [
        "Alert when security is breached",
        "Only control access",
        "Only provide lighting",
        "Only monitor employees"
      ],
      correctAnswer: 0,
      explanation: "Alarms detect security breaches and provide alerts through sound, lights, or notifications.",
      module: 3
    },
    {
      id: 31,
      question: "How should visitors be managed?",
      options: [
        "Sign in, badge, escort in sensitive areas",
        "Free access everywhere",
        "No management needed",
        "Only if staying long"
      ],
      correctAnswer: 0,
      explanation: "Visitors should sign in, wear identification, and be escorted in areas requiring protection.",
      module: 4
    },
    {
      id: 32,
      question: "What is business continuity planning?",
      options: [
        "Keeping essential operations running during disruption",
        "Only emergency response",
        "Only financial planning",
        "Only for large companies"
      ],
      correctAnswer: 0,
      explanation: "Business continuity focuses on maintaining critical operations during and after emergencies.",
      module: 5
    },
    {
      id: 33,
      question: "What is progressive discipline?",
      options: [
        "Increasing consequences for repeated violations",
        "Only immediate termination",
        "Only warnings",
        "No consequences"
      ],
      correctAnswer: 0,
      explanation: "Progressive discipline applies increasingly serious consequences for repeated or serious policy violations.",
      module: 6
    },
    {
      id: 34,
      question: "What is security awareness?",
      options: [
        "Everyone understands security importance",
        "Only security staff know about security",
        "Security is kept secret",
        "Only managers need security knowledge"
      ],
      correctAnswer: 0,
      explanation: "Security awareness means all employees understand security importance and their responsibilities.",
      module: 1
    },
    {
      id: 35,
      question: "What are common physical vulnerabilities?",
      options: [
        "Unlocked doors or windows",
        "Strong passwords",
        "Good lighting",
        "Security cameras"
      ],
      correctAnswer: 0,
      explanation: "Physical vulnerabilities include unlocked access points, poor lighting, or broken barriers.",
      module: 2
    },
    {
      id: 36,
      question: "What do security guards typically do?",
      options: [
        "Observe, control access, respond to incidents",
        "Only sit at desks",
        "Only monitor cameras",
        "Only write reports"
      ],
      correctAnswer: 0,
      explanation: "Guards observe activity, control access points, and respond to security incidents.",
      module: 3
    },
    {
      id: 37,
      question: "What builds strong security culture?",
      options: [
        "Leadership example and everyone's responsibility",
        "Only security staff involvement",
        "Only written policies",
        "Only punishment for violations"
      ],
      correctAnswer: 0,
      explanation: "Strong culture requires leadership example, shared responsibility, and positive reinforcement.",
      module: 4
    },
    {
      id: 38,
      question: "Why conduct emergency drills?",
      options: [
        "Practice makes response more effective",
        "Only to meet requirements",
        "Only for new employees",
        "Not really necessary"
      ],
      correctAnswer: 0,
      explanation: "Regular drills help people respond automatically and identify areas needing improvement in plans.",
      module: 5
    },
    {
      id: 39,
      question: "What should policy language be?",
      options: [
        "Clear, concise, and easy to understand",
        "Complex and technical",
        "Vague and flexible",
        "Only legal language"
      ],
      correctAnswer: 0,
      explanation: "Policy language should be clear and straightforward so everyone can understand their responsibilities.",
      module: 6
    },
    {
      id: 40,
      question: "What is least privilege principle?",
      options: [
        "People get only the access they need",
        "Everyone gets full access",
        "Only managers get access",
        "Access changes daily"
      ],
      correctAnswer: 0,
      explanation: "Least privilege means giving people only the minimum access necessary to perform their jobs.",
      module: 1
    }
  ]
};
