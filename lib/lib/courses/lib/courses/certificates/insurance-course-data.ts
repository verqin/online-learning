export const insuranceCertificateCourse = {
  // ==================== COURSE METADATA ====================
  id: "insurance-certificate",
  title: "Insurance (Certificate)",
  description: "Master the fundamentals of insurance principles, policies, and risk management. Learn how insurance works, different types of coverage, and how to apply basic insurance concepts in real-world situations. Perfect for beginners entering the insurance industry or individuals wanting to understand personal insurance needs.",
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
      title: "Introduction to Insurance",
      content: `
## **Welcome to Insurance Fundamentals**

Insurance is a way to manage risk. When you buy insurance, you transfer the cost of a potential loss to the insurance company in exchange for a payment called a premium. Insurance companies collect premiums from many people to pay for losses that a few might experience.

### **1. What is Insurance?**
- **Insurance** is a contract where one party agrees to compensate another party for specific losses
- The **insured** is the person who buys the insurance
- The **insurer** is the company that provides the insurance
- A **policy** is the written contract of insurance
- **Premium** is the amount paid for insurance coverage

### **2. Why Insurance Matters**
- **Risk Transfer**: Moves financial risk from individual to company
- **Financial Protection**: Prevents large unexpected expenses from causing financial hardship
- **Peace of Mind**: Knowing you're protected against major losses
- **Legal Requirements**: Some types (like car insurance) are required by law
- **Business Continuity**: Helps businesses survive major losses

### **3. Basic Insurance Principles**
- **Utmost Good Faith**: Both parties must be completely honest with each other
- **Insurable Interest**: You must have financial interest in what you're insuring
- **Indemnity**: Insurance restores you to your financial position before the loss
- **Contribution**: If you have multiple policies, companies share the payment
- **Subrogation**: Insurer can pursue third parties who caused the loss

### **Real-World Application**
When you buy car insurance, you're practicing **risk transfer**. You pay a monthly premium so that if you have an accident, the insurance company pays for repairs instead of you paying thousands of dollars from your savings.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the name for the amount paid for insurance coverage?",
          options: ["Deductible", "Premium", "Claim", "Policy"],
          correctAnswer: 1,
          explanation: "Premium is the regular payment made to keep insurance coverage active."
        },
        {
          id: 2,
          question: "What principle requires complete honesty between insurer and insured?",
          options: ["Indemnity", "Utmost Good Faith", "Subrogation", "Contribution"],
          correctAnswer: 1,
          explanation: "Utmost Good Faith means both parties must disclose all relevant information honestly."
        },
        {
          id: 3,
          question: "What does 'insurable interest' mean?",
          options: [
            "You must like what you're insuring",
            "You must have financial interest in what you're insuring",
            "The insurance company must be interested in your business",
            "You must have multiple insurance policies"
          ],
          correctAnswer: 1,
          explanation: "Insurable interest means you would suffer financially if the insured item were damaged or lost."
        },
        {
          id: 4,
          question: "What is the written contract of insurance called?",
          options: ["Agreement", "Policy", "Certificate", "Contract"],
          correctAnswer: 1,
          explanation: "The policy is the formal written document that outlines the terms of insurance coverage."
        },
        {
          id: 5,
          question: "Who is the person who buys insurance?",
          options: ["Insurer", "Agent", "Insured", "Broker"],
          correctAnswer: 2,
          explanation: "The insured is the person or entity protected by the insurance policy."
        },
        {
          id: 6,
          question: "What does 'indemnity' mean in insurance?",
          options: [
            "Making profit from insurance",
            "Punishing the party at fault",
            "Restoring to financial position before loss",
            "Increasing coverage over time"
          ],
          correctAnswer: 2,
          explanation: "Indemnity means putting the insured back in the same financial position they were in before the loss occurred."
        },
        {
          id: 7,
          question: "What is risk transfer?",
          options: [
            "Moving financial risk from individual to company",
            "Changing insurance companies",
            "Increasing your deductible",
            "Sharing risk with friends"
          ],
          correctAnswer: 0,
          explanation: "Risk transfer means the financial burden of potential loss moves from you to the insurance company."
        },
        {
          id: 8,
          question: "Which principle allows insurers to pursue third parties who caused loss?",
          options: ["Contribution", "Subrogation", "Indemnity", "Good Faith"],
          correctAnswer: 1,
          explanation: "Subrogation gives the insurer the right to recover costs from whoever caused the loss."
        },
        {
          id: 9,
          question: "Why is some insurance legally required?",
          options: [
            "To make insurance companies rich",
            "To protect other people from your actions",
            "Because governments own insurance companies",
            "It's never legally required"
          ],
          correctAnswer: 1,
          explanation: "Required insurance (like auto liability) protects others who might be harmed by your actions."
        },
        {
          id: 10,
          question: "What provides peace of mind in insurance?",
          options: [
            "Paying high premiums",
            "Having complicated policies",
            "Knowing you're protected against major losses",
            "Dealing with many different agents"
          ],
          correctAnswer: 2,
          explanation: "Peace of mind comes from knowing that unexpected large expenses won't cause financial disaster."
        },
        {
          id: 11,
          question: "What is collected from many to pay for losses of a few?",
          options: ["Taxes", "Premiums", "Fines", "Donations"],
          correctAnswer: 1,
          explanation: "Insurance companies collect premiums from many policyholders to create a pool that pays claims."
        },
        {
          id: 12,
          question: "What helps businesses survive major losses?",
          options: ["Insurance", "Bank loans", "Government bailouts", "Customer donations"],
          correctAnswer: 0,
          explanation: "Proper insurance coverage provides funds to repair damage and continue operations after a loss."
        },
        {
          id: 13,
          question: "What principle involves sharing payment among multiple policies?",
          options: ["Subrogation", "Contribution", "Indemnity", "Good Faith"],
          correctAnswer: 1,
          explanation: "Contribution means if you have multiple insurance policies, they share the cost of a claim."
        },
        {
          id: 14,
          question: "What is NOT a reason insurance matters?",
          options: [
            "Risk transfer",
            "Making guaranteed profits",
            "Financial protection",
            "Peace of mind"
          ],
          correctAnswer: 1,
          explanation: "Insurance is for protection, not for making profits. It's about managing risk, not creating wealth."
        },
        {
          id: 15,
          question: "What must you have in something to insure it?",
          options: [
            "Emotional attachment",
            "Insurable interest",
            "Physical possession",
            "Complete ownership"
          ],
          correctAnswer: 1,
          explanation: "Insurable interest means you would suffer financially if the insured item were damaged or lost."
        },
        {
          id: 16,
          question: "What type of insurance is often required by law?",
          options: [
            "Life insurance",
            "Pet insurance",
            "Car insurance",
            "Jewelry insurance"
          ],
          correctAnswer: 2,
          explanation: "Auto liability insurance is required in most places to protect others from your driving."
        },
        {
          id: 17,
          question: "What does the insurer provide?",
          options: [
            "The item being insured",
            "The insurance coverage",
            "The risk",
            "The loss"
          ],
          correctAnswer: 1,
          explanation: "The insurer (insurance company) provides the coverage and pays valid claims."
        },
        {
          id: 18,
          question: "What prevents large unexpected expenses?",
          options: [
            "Financial protection",
            "Premium increases",
            "Policy cancellations",
            "Deductible decreases"
          ],
          correctAnswer: 0,
          explanation: "Financial protection means insurance pays for major losses instead of you paying out of pocket."
        },
        {
          id: 19,
          question: "How does insurance help with business continuity?",
          options: [
            "By providing free advertising",
            "By paying salaries indefinitely",
            "By funding expansion",
            "By covering repair costs after loss"
          ],
          correctAnswer: 3,
          explanation: "Insurance provides funds to repair damage so businesses can reopen after disasters."
        },
        {
          id: 20,
          question: "What is the core purpose of insurance?",
          options: [
            "To make everyone rich",
            "To manage and transfer risk",
            "To eliminate all risks",
            "To replace saving money"
          ],
          correctAnswer: 1,
          explanation: "Insurance manages risk by transferring financial consequences of potential losses to an insurance company."
        }
      ]
    },

    // ==================== MODULE 2 ====================
    {
      id: 2,
      title: "Types of Insurance",
      content: `
## **Understanding Different Insurance Categories**

Insurance comes in many forms, each designed for specific types of risk. Knowing the different categories helps you choose the right protection for your needs.

### **1. Personal Insurance**
- **Life Insurance**: Pays money when the insured person dies
- **Health Insurance**: Covers medical expenses and treatments
- **Auto Insurance**: Protects against vehicle-related losses
- **Homeowners Insurance**: Covers damage to your home and belongings
- **Renters Insurance**: Protects personal property in rented homes

### **2. Property Insurance**
- **Covers physical items** like buildings, vehicles, and personal belongings
- **Perils covered** include fire, theft, vandalism, and weather damage
- **Replacement cost** pays for new equivalent items
- **Actual cash value** pays for depreciated value
- **Deductible** is the amount you pay before insurance pays

### **3. Liability Insurance**
- **Protects against lawsuits** when you're responsible for harming others
- **Bodily injury** covers medical costs if someone is hurt
- **Property damage** covers repairs if you damage others' property
- **Personal liability** in homeowners policies
- **Professional liability** for mistakes in professional services

### **Real-World Application**
A typical family might have auto insurance for their cars, homeowners insurance for their house, health insurance for medical needs, and life insurance to protect their family's future. Each policy addresses different risks they face daily.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which insurance pays when the insured person dies?",
          options: ["Health Insurance", "Life Insurance", "Auto Insurance", "Property Insurance"],
          correctAnswer: 1,
          explanation: "Life insurance provides a death benefit to beneficiaries when the insured person passes away."
        },
        {
          id: 2,
          question: "What type of insurance covers medical expenses?",
          options: ["Life Insurance", "Health Insurance", "Auto Insurance", "Property Insurance"],
          correctAnswer: 1,
          explanation: "Health insurance pays for medical treatments, doctor visits, and hospital stays."
        },
        {
          id: 3,
          question: "What does homeowners insurance cover?",
          options: [
            "Only the building structure",
            "Only personal belongings",
            "Damage to home and belongings",
            "Only natural disasters"
          ],
          correctAnswer: 2,
          explanation: "Homeowners insurance typically covers both the physical structure and personal property inside."
        },
        {
          id: 4,
          question: "What protects against lawsuits for harming others?",
          options: ["Life Insurance", "Health Insurance", "Liability Insurance", "Property Insurance"],
          correctAnswer: 2,
          explanation: "Liability insurance covers legal costs and damages if you're found responsible for injuring someone or damaging their property."
        },
        {
          id: 5,
          question: "What is the amount you pay before insurance pays?",
          options: ["Premium", "Claim", "Deductible", "Benefit"],
          correctAnswer: 2,
          explanation: "The deductible is your out-of-pocket expense before insurance coverage begins."
        },
        {
          id: 6,
          question: "Which insurance is for people who rent their home?",
          options: ["Homeowners Insurance", "Renters Insurance", "Landlord Insurance", "Mortgage Insurance"],
          correctAnswer: 1,
          explanation: "Renters insurance protects personal property and provides liability coverage for people who rent."
        },
        {
          id: 7,
          question: "What covers vehicle-related losses?",
          options: ["Life Insurance", "Health Insurance", "Auto Insurance", "Disability Insurance"],
          correctAnswer: 2,
          explanation: "Auto insurance covers accidents, theft, and damage involving vehicles."
        },
        {
          id: 8,
          question: "What type of liability covers professional mistakes?",
          options: [
            "Personal Liability",
            "Professional Liability",
            "General Liability",
            "Commercial Liability"
          ],
          correctAnswer: 1,
          explanation: "Professional liability insurance protects against claims of errors or negligence in professional services."
        },
        {
          id: 9,
          question: "What pays for new equivalent items after loss?",
          options: ["Actual Cash Value", "Market Value", "Replacement Cost", "Depreciated Value"],
          correctAnswer: 2,
          explanation: "Replacement cost coverage pays what it would cost to buy new items equivalent to what was lost."
        },
        {
          id: 10,
          question: "What covers damage to others' property you cause?",
          options: [
            "Bodily Injury Liability",
            "Property Damage Liability",
            "Personal Injury Protection",
            "Collision Coverage"
          ],
          correctAnswer: 1,
          explanation: "Property damage liability covers repairs or replacement of others' property that you damage."
        },
        {
          id: 11,
          question: "Which is NOT a type of personal insurance?",
          options: ["Life Insurance", "Health Insurance", "Business Insurance", "Auto Insurance"],
          correctAnswer: 2,
          explanation: "Business insurance is commercial coverage, not personal insurance for individuals and families."
        },
        {
          id: 12,
          question: "What does actual cash value consider?",
          options: [
            "Only original purchase price",
            "Depreciation of the item",
            "Future value of the item",
            "Emotional value of the item"
          ],
          correctAnswer: 1,
          explanation: "Actual cash value pays the replacement cost minus depreciation based on the item's age and condition."
        },
        {
          id: 13,
          question: "What type of insurance do most drivers legally need?",
          options: ["Life Insurance", "Health Insurance", "Auto Insurance", "Disability Insurance"],
          correctAnswer: 2,
          explanation: "Auto liability insurance is legally required in most jurisdictions to drive a vehicle."
        },
        {
          id: 14,
          question: "What covers personal property in a rented home?",
          options: ["Homeowners Insurance", "Renters Insurance", "Flood Insurance", "Title Insurance"],
          correctAnswer: 1,
          explanation: "Renters insurance specifically covers personal belongings and liability for people who rent."
        },
        {
          id: 15,
          question: "What does bodily injury liability cover?",
          options: [
            "Your own medical bills",
            "Medical costs for others you injure",
            "Property damage you cause",
            "Your lost income after accident"
          ],
          correctAnswer: 1,
          explanation: "Bodily injury liability covers medical expenses, lost wages, and pain/suffering of people you injure."
        },
        {
          id: 16,
          question: "What are perils in property insurance?",
          options: [
            "Insurance company profits",
            "Covered causes of loss",
            "Policy exclusions",
            "Premium payment methods"
          ],
          correctAnswer: 1,
          explanation: "Perils are specific causes of loss that are covered by the insurance policy, like fire or theft."
        },
        {
          id: 17,
          question: "Which insurance protects personal belongings?",
          options: [
            "Only homeowners insurance",
            "Only renters insurance",
            "Both homeowners and renters insurance",
            "Neither homeowners nor renters insurance"
          ],
          correctAnswer: 2,
          explanation: "Both homeowners and renters insurance include coverage for personal property."
        },
        {
          id: 18,
          question: "What is NOT typically covered by basic auto insurance?",
          options: [
            "Damage to other cars",
            "Your medical bills from accident",
            "Routine maintenance",
            "Theft of your car"
          ],
          correctAnswer: 2,
          explanation: "Auto insurance covers accidents and unexpected events, not routine maintenance like oil changes."
        },
        {
          id: 19,
          question: "What does personal liability in homeowners cover?",
          options: [
            "Damage to your own home",
            "Injuries to guests on your property",
            "Your car accidents",
            "Your health expenses"
          ],
          correctAnswer: 1,
          explanation: "Personal liability coverage in homeowners insurance protects if someone is injured on your property."
        },
        {
          id: 20,
          question: "What should a family typically have for complete protection?",
          options: [
            "Only life insurance",
            "Only auto insurance",
            "Multiple types of insurance",
            "Only the cheapest insurance"
          ],
          correctAnswer: 2,
          explanation: "Families typically need multiple insurance types to address different risks like health, auto, home, and life."
        }
      ]
    },

    // ==================== MODULE 3 ====================
    {
      id: 3,
      title: "How Insurance Works",
      content: `
## **The Mechanics of Insurance Operations**

Understanding how insurance companies operate helps you make better decisions about coverage and recognize good value.

### **1. The Insurance Process**
- **Application**: You provide information about what you want to insure
- **Underwriting**: Company assesses risk and sets premium
- **Policy Issuance**: Contract is created and coverage begins
- **Premium Payment**: Regular payments keep coverage active
- **Claims Process**: Reporting and handling losses

### **2. Risk Assessment Factors**
- **Age**: Younger drivers pay more for auto insurance
- **Location**: Areas with more crime or disasters have higher premiums
- **Claims History**: Previous claims can increase your rates
- **Credit Score**: Better credit often means lower premiums
- **Type of Coverage**: More coverage costs more money

### **3. The Claims Process**
- **Report Loss**: Notify insurance company immediately
- **Claim Investigation**: Company verifies what happened
- **Damage Assessment**: Determining repair or replacement costs
- **Payment**: Company pays for covered losses
- **Resolution**: Claim is closed once settled

### **Real-World Application**
When you apply for auto insurance, the company looks at your driving record, age, location, and the car you drive. Based on this risk assessment, they calculate your premium. If you have an accident, you file a claim, and if it's covered, they pay for repairs minus your deductible.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in getting insurance?",
          options: ["Paying premium", "Filing claim", "Application", "Policy cancellation"],
          correctAnswer: 2,
          explanation: "The application process starts by providing information about what you want to insure."
        },
        {
          id: 2,
          question: "What does underwriting involve?",
          options: [
            "Paying claims",
            "Assessing risk and setting premium",
            "Marketing insurance",
            "Repairing damaged items"
          ],
          correctAnswer: 1,
          explanation: "Underwriting is when the insurance company evaluates risk to determine if they'll insure you and at what price."
        },
        {
          id: 3,
          question: "What happens during policy issuance?",
          options: [
            "Premium is refunded",
            "Claim is paid",
            "Contract is created",
            "Risk is eliminated"
          ],
          correctAnswer: 2,
          explanation: "Policy issuance is when the insurance company creates the formal contract and coverage begins."
        },
        {
          id: 4,
          question: "What keeps insurance coverage active?",
          options: ["Regular premium payment", "Frequent claims", "Policy reviews", "Credit checks"],
          correctAnswer: 0,
          explanation: "Making regular premium payments as required keeps your insurance policy in force."
        },
        {
          id: 5,
          question: "Why do younger drivers often pay more?",
          options: [
            "They drive better cars",
            "They have more experience",
            "They are higher risk",
            "They make more claims"
          ],
          correctAnswer: 2,
          explanation: "Younger drivers statistically have more accidents, so they're considered higher risk."
        },
        {
          id: 6,
          question: "What should you do immediately after a loss?",
          options: [
            "Wait to see if it gets worse",
            "Notify insurance company",
            "Fix it yourself",
            "Buy new insurance"
          ],
          correctAnswer: 1,
          explanation: "You should report losses to your insurance company as soon as possible after they occur."
        },
        {
          id: 7,
          question: "What does claims investigation verify?",
          options: [
            "Only who was at fault",
            "What happened and if it's covered",
            "Only the repair costs",
            "Only the policy limits"
          ],
          correctAnswer: 1,
          explanation: "Claims investigation determines if the loss is covered and verifies the details of what happened."
        },
        {
          id: 8,
          question: "What affects auto insurance premiums?",
          options: [
            "Only the car color",
            "Driving record, age, location",
            "Only the car model",
            "Only your income"
          ],
          correctAnswer: 1,
          explanation: "Multiple factors including driving history, age, location, and vehicle type affect auto premiums."
        },
        {
          id: 9,
          question: "What is damage assessment?",
          options: [
            "Determining repair costs",
            "Finding who to blame",
            "Setting premium rates",
            "Marketing insurance"
          ],
          correctAnswer: 0,
          explanation: "Damage assessment determines how much it will cost to repair or replace damaged property."
        },
        {
          id: 10,
          question: "What happens when a claim is resolved?",
          options: [
            "Premium increases automatically",
            "Policy is cancelled",
            "Claim is closed",
            "New coverage is added"
          ],
          correctAnswer: 2,
          explanation: "Once a claim is settled and paid, it is closed in the insurance company's system."
        },
        {
          id: 11,
          question: "What location factor affects premiums?",
          options: [
            "Number of restaurants nearby",
            "Crime or disaster rates",
            "School district quality",
            "Public transportation access"
          ],
          correctAnswer: 1,
          explanation: "Areas with higher crime, accidents, or natural disasters typically have higher insurance premiums."
        },
        {
          id: 12,
          question: "What can previous claims affect?",
          options: [
            "Only future claim handling",
            "Your premium rates",
            "Only your deductible",
            "Nothing - claims don't matter"
          ],
          correctAnswer: 1,
          explanation: "A history of previous claims can lead to higher premiums since it suggests higher risk."
        },
        {
          id: 13,
          question: "What does better credit often mean for premiums?",
          options: [
            "Higher premiums",
            "Lower premiums",
            "No effect on premiums",
            "Automatic denials"
          ],
          correctAnswer: 1,
          explanation: "People with better credit scores often get lower insurance premiums because they're seen as lower risk."
        },
        {
          id: 14,
          question: "What is the final step in claims process?",
          options: ["Reporting loss", "Investigation", "Payment", "Resolution"],
          correctAnswer: 3,
          explanation: "Resolution is when the claim is fully settled and closed after all steps are completed."
        },
        {
          id: 15,
          question: "What does more coverage typically mean?",
          options: [
            "Lower premiums",
            "Higher premiums",
            "Same premiums",
            "No premiums needed"
          ],
          correctAnswer: 1,
          explanation: "More extensive coverage or higher limits typically cost more in premium payments."
        },
        {
          id: 16,
          question: "When does coverage begin?",
          options: [
            "When you think about insurance",
            "After policy issuance",
            "Only after first claim",
            "After multiple premium payments"
          ],
          correctAnswer: 1,
          explanation: "Coverage begins when the policy is officially issued by the insurance company."
        },
        {
          id: 17,
          question: "What happens during premium payment?",
          options: [
            "Coverage is reduced",
            "Policy is reviewed",
            "Coverage is maintained",
            "Claim is automatically filed"
          ],
          correctAnswer: 2,
          explanation: "Paying premiums keeps your coverage active according to the policy terms."
        },
        {
          id: 18,
          question: "What is verified in claims investigation?",
          options: [
            "Only the policy number",
            "If loss is covered by policy",
            "Only the repair shop",
            "Only the deductible amount"
          ],
          correctAnswer: 1,
          explanation: "The investigation verifies if the specific loss is covered under the policy terms."
        },
        {
          id: 19,
          question: "What does payment in claims process involve?",
          options: [
            "You paying the insurance company",
            "Company paying for covered losses",
            "Government paying everyone",
            "No money changes hands"
          ],
          correctAnswer: 1,
          explanation: "The insurance company pays for covered losses after the claim is approved."
        },
        {
          id: 20,
          question: "What is the purpose of risk assessment?",
          options: [
            "To deny all applications",
            "To set appropriate premiums",
            "To eliminate all risks",
            "To make insurance free"
          ],
          correctAnswer: 1,
          explanation: "Risk assessment helps insurance companies set premiums that match the level of risk they're accepting."
        }
      ]
    },

    // ==================== MODULE 4 ====================
    {
      id: 4,
      title: "Key Insurance Terms",
      content: `
## **Essential Insurance Vocabulary**

Mastering insurance terminology helps you understand policies, make better decisions, and communicate effectively with insurance professionals.

### **1. Policy Components**
- **Declarations Page**: Summary of your policy details
- **Insuring Agreement**: What the insurer promises to cover
- **Exclusions**: What is NOT covered by the policy
- **Conditions**: Rules both parties must follow
- **Endorsements**: Changes or additions to standard policy

### **2. Financial Terms**
- **Premium**: Amount paid for insurance coverage
- **Deductible**: Amount you pay before insurance pays
- **Limit**: Maximum amount insurance will pay
- **Co-payment**: Fixed amount you pay for certain services
- **Co-insurance**: Percentage you pay after deductible

### **3. Coverage Terms**
- **Peril**: Cause of loss (fire, theft, accident)
- **Hazard**: Condition that increases chance of loss
- **Loss**: Reduction in value of insured property
- **Claim**: Request for payment under insurance policy
- **Beneficiary**: Person who receives insurance benefits

### **Real-World Application**
When reviewing your auto policy, you'll see the declarations page with your personal information, the insuring agreement explaining what's covered, exclusions listing what's not covered (like intentional damage), and conditions outlining responsibilities like reporting accidents promptly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the summary of policy details called?",
          options: ["Exclusions Page", "Declarations Page", "Conditions Page", "Endorsements Page"],
          correctAnswer: 1,
          explanation: "The declarations page summarizes key policy information like coverage amounts and premium."
        },
        {
          id: 2,
          question: "What does the insuring agreement describe?",
          options: [
            "What is NOT covered",
            "Rules to follow",
            "What the insurer promises to cover",
            "Policy changes"
          ],
          correctAnswer: 2,
          explanation: "The insuring agreement outlines what risks are covered and what the insurer will pay for."
        },
        {
          id: 3,
          question: "What are exclusions?",
          options: [
            "What IS covered",
            "What is NOT covered",
            "Policy rules",
            "Premium amounts"
          ],
          correctAnswer: 1,
          explanation: "Exclusions specifically list what the policy does not cover."
        },
        {
          id: 4,
          question: "What is the amount you pay before insurance pays?",
          options: ["Premium", "Deductible", "Limit", "Co-payment"],
          correctAnswer: 1,
          explanation: "The deductible is your out-of-pocket expense before insurance coverage begins."
        },
        {
          id: 5,
          question: "What is the maximum amount insurance will pay?",
          options: ["Premium", "Deductible", "Limit", "Co-payment"],
          correctAnswer: 2,
          explanation: "The limit is the maximum amount the insurance company will pay for a covered loss."
        },
        {
          id: 6,
          question: "What are perils?",
          options: [
            "Insurance company profits",
            "Causes of loss",
            "Policy discounts",
            "Payment methods"
          ],
          correctAnswer: 1,
          explanation: "Perils are the specific causes of loss that are covered, like fire, theft, or collision."
        },
        {
          id: 7,
          question: "What are conditions in a policy?",
          options: [
            "Rules both parties must follow",
            "Only rules for the insured",
            "Only rules for the insurer",
            "Suggestions for better coverage"
          ],
          correctAnswer: 0,
          explanation: "Conditions outline responsibilities and rules that both the insured and insurer must follow."
        },
        {
          id: 8,
          question: "What are endorsements?",
          options: [
            "Policy cancellations",
            "Changes or additions to policy",
            "Automatic renewals",
            "Premium increases"
          ],
          correctAnswer: 1,
          explanation: "Endorsements modify the standard policy by adding, removing, or changing coverage."
        },
        {
          id: 9,
          question: "What is a hazard?",
          options: [
            "The insurance company",
            "Condition increasing chance of loss",
            "The premium amount",
            "The policy document"
          ],
          correctAnswer: 1,
          explanation: "A hazard is any condition that increases the likelihood or severity of a loss."
        },
        {
          id: 10,
          question: "Who receives insurance benefits?",
          options: ["Insurer", "Agent", "Beneficiary", "Underwriter"],
          correctAnswer: 2,
          explanation: "The beneficiary is the person or entity designated to receive insurance benefits."
        },
        {
          id: 11,
          question: "What is a co-payment?",
          options: [
            "Fixed amount you pay for services",
            "Percentage of total cost",
            "The entire medical bill",
            "The insurance company's profit"
          ],
          correctAnswer: 0,
          explanation: "A co-payment is a fixed dollar amount you pay for specific services, like doctor visits."
        },
        {
          id: 12,
          question: "What is a loss in insurance terms?",
          options: [
            "Insurance company bankruptcy",
            "Reduction in value of insured property",
            "Premium decrease",
            "Policy cancellation"
          ],
          correctAnswer: 1,
          explanation: "A loss is the reduction in value of insured property or an insured event that triggers coverage."
        },
        {
          id: 13,
          question: "What is co-insurance?",
          options: [
            "Fixed amount per service",
            "Percentage you pay after deductible",
            "The entire deductible",
            "The premium amount"
          ],
          correctAnswer: 1,
          explanation: "Co-insurance is the percentage of costs you pay after meeting your deductible."
        },
        {
          id: 14,
          question: "What is a claim?",
          options: [
            "Insurance application",
            "Request for payment under policy",
            "Premium payment",
            "Policy review"
          ],
          correctAnswer: 1,
          explanation: "A claim is a formal request to the insurance company for payment of a covered loss."
        },
        {
          id: 15,
          question: "What does NOT describe exclusions?",
          options: [
            "What the policy doesn't cover",
            "Specific limitations",
            "What the insurer promises to cover",
            "Items not included"
          ],
          correctAnswer: 2,
          explanation: "Exclusions describe what is NOT covered, not what the insurer promises to cover."
        },
        {
          id: 16,
          question: "What is typically on the declarations page?",
          options: [
            "Only the premium amount",
            "Summary of key policy details",
            "Complete list of exclusions",
            "Only the policy number"
          ],
          correctAnswer: 1,
          explanation: "The declarations page summarizes essential information like coverage, limits, and premium."
        },
        {
          id: 17,
          question: "What do conditions outline?",
          options: [
            "Only premium due dates",
            "Responsibilities of both parties",
            "Only claim procedures",
            "Only coverage details"
          ],
          correctAnswer: 1,
          explanation: "Conditions specify the duties and responsibilities of both the insured and the insurer."
        },
        {
          id: 18,
          question: "What is an example of a peril?",
          options: ["Premium", "Fire", "Deductible", "Policy"],
          correctAnswer: 1,
          explanation: "Fire is an example of a peril - a specific cause of loss that might be covered."
        },
        {
          id: 19,
          question: "What do endorsements do?",
          options: [
            "Cancel the policy",
            "Modify the standard policy",
            "Increase premiums automatically",
            "File claims automatically"
          ],
          correctAnswer: 1,
          explanation: "Endorsements are written amendments that change the terms of the original policy."
        },
        {
          id: 20,
          question: "What is NOT a financial term?",
          options: ["Premium", "Deductible", "Peril", "Co-payment"],
          correctAnswer: 2,
          explanation: "Peril is a coverage term describing causes of loss, not a financial term about payments."
        }
      ]
    },

    // ==================== MODULE 5 ====================
    {
      id: 5,
      title: "Choosing Insurance",
      content: `
## **Making Smart Insurance Decisions**

Learn how to evaluate your insurance needs, compare options, and select appropriate coverage for your situation.

### **1. Assessing Your Needs**
- **Identify Risks**: What could you lose financially?
- **Value Your Assets**: How much are your possessions worth?
- **Consider Liabilities**: What could you be sued for?
- **Evaluate Dependents**: Who relies on your income?
- **Review Legal Requirements**: What insurance is mandatory?

### **2. Comparing Policies**
- **Coverage**: What exactly is covered?
- **Exclusions**: What is NOT covered?
- **Limits**: Maximum amounts the policy pays
- **Deductibles**: Your out-of-pocket costs
- **Premiums**: What you'll pay regularly

### **3. Cost-Saving Strategies**
- **Higher Deductibles**: Lower premiums but more out-of-pocket
- **Bundling**: Multiple policies with same company
- **Discounts**: Safe driver, security systems, good grades
- **Regular Reviews**: Update coverage as needs change
- **Shop Around**: Compare multiple insurance companies

### **Real-World Application**
When choosing auto insurance, you'd consider: How much can you afford for deductible? What coverage limits protect your assets? Does the policy cover rental cars? What discounts apply? By comparing 3-4 companies, you can find the best combination of coverage and price for your specific situation.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in assessing insurance needs?",
          options: [
            "Buy the cheapest policy",
            "Identify potential financial losses",
            "Call every insurance company",
            "Ask friends what they have"
          ],
          correctAnswer: 1,
          explanation: "Start by identifying what risks could cause you financial loss that insurance could cover."
        },
        {
          id: 2,
          question: "What should you consider about your possessions?",
          options: [
            "Only their color",
            "How much they're worth",
            "Where you bought them",
            "How old they are"
          ],
          correctAnswer: 1,
          explanation: "Knowing the value of your assets helps determine how much insurance coverage you need."
        },
        {
          id: 3,
          question: "What is a liability consideration?",
          options: [
            "What you could be sued for",
            "What you want to buy",
            "Your monthly expenses",
            "Your retirement plans"
          ],
          correctAnswer: 0,
          explanation: "Consider what situations might make you legally responsible for harming others or their property."
        },
        {
          id: 4,
          question: "When comparing policies, what should you check?",
          options: [
            "Only the premium amount",
            "Only the company name",
            "Coverage, exclusions, limits",
            "Only the deductible"
          ],
          correctAnswer: 2,
          explanation: "Compare what's covered, what's excluded, and the maximum amounts the policy will pay."
        },
        {
          id: 5,
          question: "How can higher deductibles affect premiums?",
          options: [
            "Increase premiums",
            "Lower premiums",
            "No effect on premiums",
            "Eliminate premiums"
          ],
          correctAnswer: 1,
          explanation: "Choosing a higher deductible typically lowers your premium because you're accepting more risk."
        },
        {
          id: 6,
          question: "What is bundling?",
          options: [
            "Having multiple policies with same company",
            "Buying all possible coverage",
            "Sharing policies with family",
            "Canceling old policies"
          ],
          correctAnswer: 0,
          explanation: "Bundling means purchasing multiple insurance policies from the same company, often for discounts."
        },
        {
          id: 7,
          question: "What should you review regularly?",
          options: [
            "Only when you have a claim",
            "Coverage as needs change",
            "Only premium amounts",
            "Only the policy number"
          ],
          correctAnswer: 1,
          explanation: "Regularly review your coverage to ensure it still matches your current situation and needs."
        },
        {
          id: 8,
          question: "What is a good comparison strategy?",
          options: [
            "Only check one company",
            "Compare multiple companies",
            "Always choose the cheapest",
            "Never compare - it's confusing"
          ],
          correctAnswer: 1,
          explanation: "Comparing several companies helps you find the best value for your specific needs."
        },
        {
          id: 9,
          question: "What should you evaluate about dependents?",
          options: [
            "Only their ages",
            "Who relies on your income",
            "Only their health",
            "Only their education"
          ],
          correctAnswer: 1,
          explanation: "Consider who depends on your income to determine how much life or disability insurance you might need."
        },
        {
          id: 10,
          question: "What are common discounts?",
          options: [
            "Safe driver, security systems",
            "Only for new customers",
            "Only for wealthy people",
            "Only for young people"
          ],
          correctAnswer: 0,
          explanation: "Common discounts include safe driving records, home security systems, and good student discounts."
        },
        {
          id: 11,
          question: "What should you know about legal requirements?",
          options: [
            "What insurance is mandatory",
            "Only tax requirements",
            "Only federal laws",
            "Nothing - insurance is optional"
          ],
          correctAnswer: 0,
          explanation: "Know what types of insurance (like auto liability) are legally required where you live."
        },
        {
          id: 12,
          question: "What do limits determine?",
          options: [
            "Only the premium",
            "Maximum amounts policy pays",
            "Only the deductible",
            "Only the policy duration"
          ],
          correctAnswer: 1,
          explanation: "Policy limits determine the maximum amount the insurance company will pay for a covered loss."
        },
        {
          id: 13,
          question: "What is NOT a good cost-saving strategy?",
          options: [
            "Higher deductibles",
            "Bundling policies",
            "Getting all possible discounts",
            "Buying inadequate coverage"
          ],
          correctAnswer: 3,
          explanation: "Buying inadequate coverage to save money leaves you underinsured and financially vulnerable."
        },
        {
          id: 14,
          question: "Why shop around?",
          options: [
            "To confuse yourself",
            "To find best coverage and price",
            "To make agents compete",
            "To waste time"
          ],
          correctAnswer: 1,
          explanation: "Shopping around helps you find the best combination of coverage and price for your needs."
        },
        {
          id: 15,
          question: "What should you value when assessing needs?",
          options: [
            "Only your car",
            "All significant assets",
            "Only your home",
            "Only expensive items"
          ],
          correctAnswer: 1,
          explanation: "Consider the value of all significant assets that would be costly to replace if lost or damaged."
        },
        {
          id: 16,
          question: "What do exclusions tell you?",
          options: [
            "What the policy covers",
            "What is NOT covered",
            "The premium amount",
            "The company history"
          ],
          correctAnswer: 1,
          explanation: "Exclusions specifically list situations or items that are not covered by the policy."
        },
        {
          id: 17,
          question: "What affects how much coverage you need?",
          options: [
            "Only your income",
            "Your assets and liabilities",
            "Only your age",
            "Only where you live"
          ],
          correctAnswer: 1,
          explanation: "The value of your assets and potential liabilities determine how much insurance coverage you need."
        },
        {
          id: 18,
          question: "When should you update coverage?",
          options: [
            "Never - set it and forget it",
            "Only at renewal time",
            "As your needs change",
            "Only when required by law"
          ],
          correctAnswer: 2,
          explanation: "Update your coverage when life changes occur, like buying a home, having children, or changing jobs."
        },
        {
          id: 19,
          question: "What is a deductible?",
          options: [
            "Your out-of-pocket cost",
            "The insurance company's profit",
            "The total coverage amount",
            "The premium payment"
          ],
          correctAnswer: 0,
          explanation: "The deductible is the amount you must pay out-of-pocket before insurance coverage begins."
        },
        {
          id: 20,
          question: "What is the goal of choosing insurance wisely?",
          options: [
            "To pay as little as possible",
            "To have adequate protection at reasonable cost",
            "To have the most coverage",
            "To impress others"
          ],
          correctAnswer: 1,
          explanation: "The goal is to obtain adequate protection against significant risks at a reasonable cost."
        }
      ]
    },

    // ==================== MODULE 6 ====================
    {
      id: 6,
      title: "Claims and Responsibilities",
      content: `
## **Navigating the Claims Process**

Understanding how to file claims properly and knowing your responsibilities helps ensure you receive the benefits you're entitled to.

### **1. Filing a Claim**
- **Immediate Notification**: Contact insurer as soon as possible
- **Provide Details**: What happened, when, where, and how
- **Document Everything**: Photos, receipts, police reports
- **Prevent Further Damage**: Take reasonable steps to protect property
- **Cooperate Fully**: Provide requested information promptly

### **2. Your Responsibilities**
- **Pay Premiums**: Keep coverage active
- **Report Changes**: Inform insurer of significant changes
- **Mitigate Losses**: Prevent further damage after loss
- **Be Truthful**: Provide accurate information
- **Understand Policy**: Know what your coverage includes

### **3. Avoiding Problems**
- **Read Your Policy**: Know coverage details before you need them
- **Keep Records**: Maintain inventory of valuable items
- **Ask Questions**: Clarify anything you don't understand
- **Meet Deadlines**: Submit documents and payments on time
- **Review Annually**: Ensure coverage still meets your needs

### **Real-World Application**
After a car accident, you should: 1) Check for injuries and call police if needed, 2) Exchange information with other driver, 3) Take photos of damage and scene, 4) Contact your insurance company promptly, 5) Follow their instructions for estimates and repairs. Keeping good records helps the process go smoothly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "When should you contact your insurer after a loss?",
          options: [
            "As soon as possible",
            "Only if it's a big loss",
            "After you fix everything",
            "At your next renewal"
          ],
          correctAnswer: 0,
          explanation: "Notify your insurance company immediately after a loss occurs to start the claims process."
        },
        {
          id: 2,
          question: "What details should you provide when filing a claim?",
          options: [
            "Only your name",
            "What happened, when, where, how",
            "Only the damage amount",
            "Only the policy number"
          ],
          correctAnswer: 1,
          explanation: "Provide complete details about what happened, including when, where, and how the loss occurred."
        },
        {
          id: 3,
          question: "What should you document after a loss?",
          options: [
            "Only your feelings",
            "Photos, receipts, reports",
            "Only the weather",
            "Only other people involved"
          ],
          correctAnswer: 1,
          explanation: "Document everything with photos, receipts, police reports, and any other relevant evidence."
        },
        {
          id: 4,
          question: "What should you do to prevent further damage?",
          options: [
            "Nothing - wait for insurance",
            "Take reasonable protective steps",
            "Fix everything yourself",
            "Ignore it and hope for best"
          ],
          correctAnswer: 1,
          explanation: "Take reasonable steps to prevent additional damage, like covering broken windows or stopping leaks."
        },
        {
          id: 5,
          question: "What is a key policyholder responsibility?",
          options: [
            "Pay premiums on time",
            "Set premium amounts",
            "Handle all repairs personally",
            "Determine claim payments"
          ],
          correctAnswer: 0,
          explanation: "Paying premiums keeps your coverage active and is a fundamental policyholder responsibility."
        },
        {
          id: 6,
          question: "When should you report changes to your insurer?",
          options: [
            "Never - they'll find out",
            "Only at annual renewal",
            "When significant changes occur",
            "Only if you want to"
          ],
          correctAnswer: 2,
          explanation: "Report significant changes like moving, major purchases, or lifestyle changes that affect your risk."
        },
        {
          id: 7,
          question: "What does mitigating losses mean?",
          options: [
            "Ignoring small losses",
            "Preventing further damage",
            "Denying the loss happened",
            "Blaming someone else"
          ],
          correctAnswer: 1,
          explanation: "Mitigating losses means taking reasonable steps to prevent additional damage after a loss occurs."
        },
        {
          id: 8,
          question: "Why should you read your policy?",
          options: [
            "To find hidden fees",
            "To know coverage details before needing them",
            "Only to check the premium",
            "Only when filing a claim"
          ],
          correctAnswer: 1,
          explanation: "Understanding your coverage before you need it helps you know what's protected and what to expect."
        },
        {
          id: 9,
          question: "What records should you keep?",
          options: [
            "Only premium payments",
            "Inventory of valuable items",
            "Only old policies",
            "Only claim denials"
          ],
          correctAnswer: 1,
          explanation: "Maintain an inventory of valuable items with descriptions, photos, and receipts for insurance purposes."
        },
        {
          id: 10,
          question: "How often should you review coverage?",
          options: [
            "Never",
            "Only when forced to",
            "Annually or when life changes",
            "Only when premium increases"
          ],
          correctAnswer: 2,
          explanation: "Review your insurance coverage at least annually or when significant life changes occur."
        },
        {
          id: 11,
          question: "What should you do if you don't understand something?",
          options: [
            "Guess what it means",
            "Ignore it",
            "Ask questions for clarification",
            "Assume it's not important"
          ],
          correctAnswer: 2,
          explanation: "Always ask your insurance agent or company to clarify anything you don't understand in your policy."
        },
        {
          id: 12,
          question: "Why meet deadlines in claims process?",
          options: [
            "To avoid policy cancellation",
            "To ensure timely claim handling",
            "Because insurers are strict",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Meeting deadlines helps ensure your claim is processed promptly and avoids potential problems."
        },
        {
          id: 13,
          question: "What does cooperation in claims mean?",
          options: [
            "Doing whatever the insurer says",
            "Providing requested information promptly",
            "Agreeing with everything",
            "Never questioning anything"
          ],
          correctAnswer: 1,
          explanation: "Cooperation means providing the information and documentation the insurer reasonably requests."
        },
        {
          id: 14,
          question: "What is being truthful important?",
          options: [
            "It's not important",
            "To avoid claim denial for misrepresentation",
            "Only for big claims",
            "Only at application time"
          ],
          correctAnswer: 1,
          explanation: "Providing false or misleading information can lead to claim denial or policy cancellation."
        },
        {
          id: 15,
          question: "What should you do after a car accident?",
          options: [
            "Drive away quickly",
            "Check injuries, call police if needed, exchange info",
            "Only exchange insurance info",
            "Wait for someone else to handle it"
          ],
          correctAnswer: 1,
          explanation: "Check for injuries, call emergency services if needed, and exchange information with other parties."
        },
        {
          id: 16,
          question: "What helps claims process go smoothly?",
          options: [
            "Keeping good records",
            "Hiding information",
            "Delaying reporting",
            "Fixing everything first"
          ],
          correctAnswer: 0,
          explanation: "Good documentation and timely reporting make the claims process more efficient and effective."
        },
        {
          id: 17,
          question: "What changes should you report?",
          options: [
            "Only address changes",
            "Significant changes affecting risk",
            "Only vehicle changes",
            "Only when buying new coverage"
          ],
          correctAnswer: 1,
          explanation: "Report any significant changes that affect your risk profile or coverage needs."
        },
        {
          id: 18,
          question: "What is NOT a good claims practice?",
          options: [
            "Immediate notification",
            "Thorough documentation",
            "Preventing further damage",
            "Delaying claim reporting"
          ],
          correctAnswer: 3,
          explanation: "Delaying claim reporting can complicate the process and potentially affect coverage."
        },
        {
          id: 19,
          question: "Why maintain asset inventory?",
          options: [
            "For tax purposes only",
            "To prove ownership and value for claims",
            "To show off to friends",
            "Because insurers require it monthly"
          ],
          correctAnswer: 1,
          explanation: "An inventory helps prove what you owned and its value if you need to make a claim."
        },
        {
          id: 20,
          question: "What is the most important claims responsibility?",
          options: [
            "Being completely honest",
            "Paying the adjuster",
            "Finding the cheapest repair",
            "Waiting as long as possible"
          ],
          correctAnswer: 0,
          explanation: "Complete honesty in all communications with your insurance company is essential for proper claim handling."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    title: "Insurance Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. Pass with 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        question: "What is the regular payment made to keep insurance coverage active?",
        options: ["Deductible", "Premium", "Claim", "Benefit"],
        correctAnswer: 1,
        explanation: "Premium is the amount paid periodically to maintain insurance coverage.",
        module: 1
      },
      {
        id: 2,
        question: "Which principle requires complete honesty between insurer and insured?",
        options: ["Indemnity", "Utmost Good Faith", "Subrogation", "Contribution"],
        correctAnswer: 1,
        explanation: "Utmost Good Faith means both parties must disclose all relevant information honestly.",
        module: 1
      },
      {
        id: 3,
        question: "What does insurance primarily help with?",
        options: ["Making profits", "Risk management", "Avoiding all losses", "Eliminating savings need"],
        correctAnswer: 1,
        explanation: "Insurance helps manage risk by transferring financial consequences of potential losses.",
        module: 1
      },
      {
        id: 4,
        question: "What must you have to insure something?",
        options: ["Complete ownership", "Insurable interest", "Emotional attachment", "Physical possession"],
        correctAnswer: 1,
        explanation: "Insurable interest means you would suffer financially if the insured item were damaged or lost.",
        module: 1
      },

      // Module 2 Questions
      {
        id: 5,
        question: "Which insurance pays when the insured person dies?",
        options: ["Health Insurance", "Life Insurance", "Auto Insurance", "Disability Insurance"],
        correctAnswer: 1,
        explanation: "Life insurance provides a death benefit to beneficiaries when the insured person passes away.",
        module: 2
      },
      {
        id: 6,
        question: "What type of insurance covers medical expenses?",
        options: ["Life Insurance", "Health Insurance", "Property Insurance", "Liability Insurance"],
        correctAnswer: 1,
        explanation: "Health insurance pays for medical treatments, doctor visits, and hospital stays.",
        module: 2
      },
      {
        id: 7,
        question: "What protects against lawsuits for harming others?",
        options: ["Life Insurance", "Health Insurance", "Liability Insurance", "Property Insurance"],
        correctAnswer: 2,
        explanation: "Liability insurance covers legal costs and damages if you're responsible for injuring someone.",
        module: 2
      },
      {
        id: 8,
        question: "What is the amount you pay before insurance pays called?",
        options: ["Premium", "Benefit", "Deductible", "Limit"],
        correctAnswer: 2,
        explanation: "The deductible is your out-of-pocket expense before insurance coverage begins.",
        module: 2
      },

      // Module 3 Questions
      {
        id: 9,
        question: "What is the first step in getting insurance?",
        options: ["Paying premium", "Filing claim", "Application", "Policy cancellation"],
        correctAnswer: 2,
        explanation: "The application process starts by providing information about what you want to insure.",
        module: 3
      },
      {
        id: 10,
        question: "What does underwriting involve?",
        options: ["Paying claims", "Assessing risk", "Marketing", "Repairing damage"],
        correctAnswer: 1,
        explanation: "Underwriting evaluates risk to determine if the company will insure you and at what price.",
        module: 3
      },
      {
        id: 11,
        question: "Why do younger drivers often pay more for auto insurance?",
        options: ["Better cars", "More experience", "Higher risk", "More claims"],
        correctAnswer: 2,
        explanation: "Younger drivers statistically have more accidents, so they're considered higher risk.",
        module: 3
      },
      {
        id: 12,
        question: "What should you do immediately after a loss?",
        options: ["Wait and see", "Notify insurer", "Fix yourself", "Buy new insurance"],
        correctAnswer: 1,
        explanation: "Report losses to your insurance company as soon as possible after they occur.",
        module: 3
      },

      // Module 4 Questions
      {
        id: 13,
        question: "What is the summary of policy details called?",
        options: ["Exclusions Page", "Declarations Page", "Conditions Page", "Endorsements Page"],
        correctAnswer: 1,
        explanation: "The declarations page summarizes key policy information like coverage amounts and premium.",
        module: 4
      },
      {
        id: 14,
        question: "What does the insuring agreement describe?",
        options: ["What is NOT covered", "Rules to follow", "What insurer promises", "Policy changes"],
        correctAnswer: 2,
        explanation: "The insuring agreement outlines what risks are covered and what the insurer will pay for.",
        module: 4
      },
      {
        id: 15,
        question: "What are exclusions?",
        options: ["What IS covered", "What is NOT covered", "Policy rules", "Premium amounts"],
        correctAnswer: 1,
        explanation: "Exclusions specifically list what the policy does not cover.",
        module: 4
      },
      {
        id: 16,
        question: "What is the maximum amount insurance will pay?",
        options: ["Premium", "Deductible", "Limit", "Co-payment"],
        correctAnswer: 2,
        explanation: "The limit is the maximum amount the insurance company will pay for a covered loss.",
        module: 4
      },

      // Module 5 Questions
      {
        id: 17,
        question: "What is the first step in assessing insurance needs?",
        options: ["Buy cheapest", "Identify risks", "Call companies", "Ask friends"],
        correctAnswer: 1,
        explanation: "Start by identifying what risks could cause financial loss that insurance could cover.",
        module: 5
      },
      {
        id: 18,
        question: "How can higher deductibles affect premiums?",
        options: ["Increase premiums", "Lower premiums", "No effect", "Eliminate premiums"],
        correctAnswer: 1,
        explanation: "Higher deductibles typically lower premiums because you're accepting more risk.",
        module: 5
      },
      {
        id: 19,
        question: "What is bundling?",
        options: ["Multiple policies with same company", "All possible coverage", "Sharing policies", "Canceling policies"],
        correctAnswer: 0,
        explanation: "Bundling means purchasing multiple insurance policies from the same company.",
        module: 5
      },
      {
        id: 20,
        question: "Why shop around for insurance?",
        options: ["To confuse yourself", "Find best value", "Make agents compete", "Waste time"],
        correctAnswer: 1,
        explanation: "Comparing companies helps find the best combination of coverage and price.",
        module: 5
      },

      // Module 6 Questions
      {
        id: 21,
        question: "When should you contact insurer after loss?",
        options: ["As soon as possible", "Only if big loss", "After fixing", "At renewal"],
        correctAnswer: 0,
        explanation: "Notify your insurance company immediately after a loss to start the claims process.",
        module: 6
      },
      {
        id: 22,
        question: "What should you document after loss?",
        options: ["Only feelings", "Photos and receipts", "Only weather", "Only others involved"],
        correctAnswer: 1,
        explanation: "Document everything with photos, receipts, police reports, and other evidence.",
        module: 6
      },
      {
        id: 23,
        question: "What is a key policyholder responsibility?",
        options: ["Pay premiums", "Set premiums", "Handle repairs", "Determine payments"],
        correctAnswer: 0,
        explanation: "Paying premiums keeps your coverage active and is a fundamental responsibility.",
        module: 6
      },
      {
        id: 24,
        question: "Why read your policy before needing it?",
        options: ["Find hidden fees", "Know coverage details", "Check premium", "When filing claim"],
        correctAnswer: 1,
        explanation: "Understanding coverage before you need it helps you know what's protected.",
        module: 6
      },

      // Additional Comprehensive Questions
      {
        id: 25,
        question: "What principle restores you to financial position before loss?",
        options: ["Utmost Good Faith", "Indemnity", "Subrogation", "Contribution"],
        correctAnswer: 1,
        explanation: "Indemnity means putting the insured back in the same financial position before the loss.",
        module: 1
      },
      {
        id: 26,
        question: "Which insurance is often legally required?",
        options: ["Life Insurance", "Pet Insurance", "Auto Insurance", "Jewelry Insurance"],
        correctAnswer: 2,
        explanation: "Auto liability insurance is required in most places to protect others from your driving.",
        module: 2
      },
      {
        id: 27,
        question: "What does claims investigation determine?",
        options: ["Only fault", "If loss is covered", "Only costs", "Only limits"],
        correctAnswer: 1,
        explanation: "Claims investigation determines if the loss is covered under the policy terms.",
        module: 3
      },
      {
        id: 28,
        question: "What are perils in insurance?",
        options: ["Company profits", "Causes of loss", "Policy discounts", "Payment methods"],
        correctAnswer: 1,
        explanation: "Perils are specific causes of loss that are covered, like fire, theft, or collision.",
        module: 4
      },
      {
        id: 29,
        question: "What should you consider about dependents?",
        options: ["Only ages", "Who relies on income", "Only health", "Only education"],
        correctAnswer: 1,
        explanation: "Consider who depends on your income for life or disability insurance needs.",
        module: 5
      },
      {
        id: 30,
        question: "What does mitigating losses mean?",
        options: ["Ignoring losses", "Preventing further damage", "Denying loss", "Blaming others"],
        correctAnswer: 1,
        explanation: "Mitigating losses means taking steps to prevent additional damage after a loss.",
        module: 6
      },
      {
        id: 31,
        question: "What allows insurer to pursue third parties?",
        options: ["Contribution", "Subrogation", "Indemnity", "Good Faith"],
        correctAnswer: 1,
        explanation: "Subrogation gives insurer right to recover costs from whoever caused the loss.",
        module: 1
      },
      {
        id: 32,
        question: "What covers personal property in rented home?",
        options: ["Homeowners Insurance", "Renters Insurance", "Flood Insurance", "Title Insurance"],
        correctAnswer: 1,
        explanation: "Renters insurance covers personal belongings and liability for people who rent.",
        module: 2
      },
      {
        id: 33,
        question: "What affects auto insurance premiums?",
        options: ["Only car color", "Multiple factors", "Only car model", "Only income"],
        correctAnswer: 1,
        explanation: "Multiple factors including driving history, age, and location affect premiums.",
        module: 3
      },
      {
        id: 34,
        question: "What are endorsements?",
        options: ["Cancellations", "Policy changes", "Automatic renewals", "Premium increases"],
        correctAnswer: 1,
        explanation: "Endorsements modify the standard policy by adding, removing, or changing coverage.",
        module: 4
      },
      {
        id: 35,
        question: "What should you review regularly?",
        options: ["Only at claims", "Coverage as needs change", "Only premium", "Only policy number"],
        correctAnswer: 1,
        explanation: "Regularly review coverage to ensure it matches your current situation and needs.",
        module: 5
      },
      {
        id: 36,
        question: "Why keep asset inventory?",
        options: ["For taxes only", "Prove ownership for claims", "Show off", "Monthly requirement"],
        correctAnswer: 1,
        explanation: "Inventory helps prove what you owned and its value if you need to make a claim.",
        module: 6
      },
      {
        id: 37,
        question: "What is risk transfer?",
        options: ["Moving risk to company", "Changing companies", "Increasing deductible", "Sharing risk"],
        correctAnswer: 0,
        explanation: "Risk transfer means financial burden moves from you to the insurance company.",
        module: 1
      },
      {
        id: 38,
        question: "What does replacement cost pay?",
        options: ["Depreciated value", "New equivalent items", "Market value", "Original price"],
        correctAnswer: 1,
        explanation: "Replacement cost pays what it costs to buy new items equivalent to what was lost.",
        module: 2
      },
      {
        id: 39,
        question: "What is the core purpose of insurance?",
        options: ["Make everyone rich", "Manage and transfer risk", "Eliminate risks", "Replace savings"],
        correctAnswer: 1,
        explanation: "Insurance manages risk by transferring financial consequences to an insurance company.",
        module: 3
      },
      {
        id: 40,
        question: "What is the goal of choosing insurance wisely?",
        options: ["Pay little", "Adequate protection at reasonable cost", "Most coverage", "Impress others"],
        correctAnswer: 1,
        explanation: "The goal is adequate protection against significant risks at reasonable cost.",
        module: 5
      }
    ]
  }
};

export default insuranceCertificateCourse;
