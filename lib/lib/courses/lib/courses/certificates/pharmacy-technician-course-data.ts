export const pharmacyTechnicianCertificate = {
  // COURSE METADATA
  id: "pharmacy-technician-certificate",
  title: "Pharmacy Technician (Certificate)",
  description: "Comprehensive training for pharmacy technicians covering medication dispensing, pharmacy operations, and patient care fundamentals.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "💊",
  badge: "Certificate",
  prerequisites: [],
  
  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Pharmacy Practice",
      content: `# Introduction to Pharmacy Practice

Welcome to the pharmacy technician profession! This module introduces the world of pharmacy and the important role technicians play in healthcare.

## **Pharmacy Technician Role**
Pharmacy technicians assist pharmacists in preparing and dispensing medications. They work under the supervision of licensed pharmacists. Technicians help ensure patients receive correct medications safely. They perform important tasks in different pharmacy settings. Their work supports the entire medication process.

**Key Responsibilities:**
Receiving prescription orders from patients and providers. Counting, measuring, and preparing medications. Labeling medication containers correctly. Managing pharmacy inventory and supplies. Processing insurance claims and payments.

**Work Settings:**
Community pharmacies serve the general public. Hospital pharmacies serve patients in healthcare facilities. Long-term care pharmacies serve nursing homes. Mail-order pharmacies ship medications to patients. Specialty pharmacies handle complex medications.

**Professional Requirements:**
Most states require certification or registration. Continuing education maintains knowledge and skills. Ethical behavior ensures patient safety. Attention to detail prevents medication errors. Good communication helps patients and team members.

## **Pharmacy Types and Services**
Retail pharmacies are found in drug stores and supermarkets. They fill prescriptions for walk-in patients. Hospital pharmacies serve inpatients and outpatients. They prepare sterile medications and IV solutions. Institutional pharmacies serve facilities like nursing homes.

**Specialized Pharmacy Services:**
Compounding pharmacies create custom medications. Nuclear pharmacies handle radioactive medications. Oncology pharmacies specialize in cancer treatments. Veterinary pharmacies serve animal patients. Home infusion pharmacies provide IV therapies at home.

**Pharmacy Services:**
Medication dispensing provides prescribed drugs. Patient counseling educates about medications. Immunization services provide vaccinations. Health screenings check blood pressure or glucose. Medication therapy management optimizes treatments.

## **Healthcare Team Collaboration**
Pharmacists oversee all pharmacy operations. Pharmacy technicians assist with medication preparation. Physicians prescribe medications for patients. Nurses administer medications in facilities. Patients are the ultimate recipients of care.

**Communication Skills:**
Clear communication with pharmacists is essential. Professional interaction with patients builds trust. Respectful collaboration with healthcare providers. Accurate documentation of all activities. Active listening to understand patient needs.

**Legal and Ethical Foundations:**
Laws regulate pharmacy practice at state and federal levels. Ethics guide professional decision-making. Patient confidentiality protects personal health information. Professional boundaries maintain appropriate relationships. Reporting obligations address safety concerns.

**Safety First Approach:**
Patient safety is the top priority in pharmacy. Medication errors must be prevented. Clean work areas prevent contamination. Proper handling protects technicians and patients. Double-checking ensures accuracy in all tasks.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who do pharmacy technicians assist?",
          options: [
            "Licensed pharmacists",
            "Only patients",
            "Physicians only",
            "Nurses"
          ],
          correctAnswer: 0,
          explanation: "Pharmacy technicians work under the supervision of licensed pharmacists."
        },
        {
          id: 2,
          question: "What is a key responsibility of pharmacy technicians?",
          options: [
            "Counting and preparing medications",
            "Diagnosing patients",
            "Prescribing medications",
            "Managing hospital wards"
          ],
          correctAnswer: 0,
          explanation: "Counting, measuring, and preparing medications are core technician responsibilities."
        },
        {
          id: 3,
          question: "What type of pharmacy serves the general public?",
          options: [
            "Community pharmacy",
            "Hospital pharmacy",
            "Nuclear pharmacy",
            "Oncology pharmacy"
          ],
          correctAnswer: 0,
          explanation: "Community pharmacies serve walk-in patients from the general public."
        },
        {
          id: 4,
          question: "What do hospital pharmacies prepare?",
          options: [
            "Sterile medications and IV solutions",
            "Only oral medications",
            "Veterinary medications",
            "Mail-order prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Hospital pharmacies prepare sterile medications including IV solutions for patients."
        },
        {
          id: 5,
          question: "What is the top priority in pharmacy practice?",
          options: [
            "Patient safety",
            "Fast service",
            "Low costs",
            "Convenience"
          ],
          correctAnswer: 0,
          explanation: "Patient safety must always be the top priority in all pharmacy activities."
        },
        {
          id: 6,
          question: "What do compounding pharmacies create?",
          options: [
            "Custom medications",
            "Only standard medications",
            "Over-the-counter drugs",
            "Vaccines only"
          ],
          correctAnswer: 0,
          explanation: "Compounding pharmacies create custom medications tailored to individual patient needs."
        },
        {
          id: 7,
          question: "What must be prevented in pharmacy practice?",
          options: [
            "Medication errors",
            "All patient questions",
            "Insurance claims",
            "Inventory management"
          ],
          correctAnswer: 0,
          explanation: "Preventing medication errors is crucial for patient safety in pharmacy practice."
        },
        {
          id: 8,
          question: "What protects personal health information?",
          options: [
            "Patient confidentiality",
            "Public sharing",
            "Team discussions",
            "Open records"
          ],
          correctAnswer: 0,
          explanation: "Patient confidentiality protects personal health information from unauthorized disclosure."
        },
        {
          id: 9,
          question: "What do mail-order pharmacies do?",
          options: [
            "Ship medications to patients",
            "Only serve walk-in patients",
            "Prepare IV solutions",
            "Handle radioactive drugs"
          ],
          correctAnswer: 0,
          explanation: "Mail-order pharmacies ship medications directly to patients' homes."
        },
        {
          id: 10,
          question: "What ensures accuracy in pharmacy tasks?",
          options: [
            "Double-checking",
            "Rushing through work",
            "Assuming correctness",
            "Skipping steps"
          ],
          correctAnswer: 0,
          explanation: "Double-checking medications and labels helps ensure accuracy and prevent errors."
        },
        {
          id: 11,
          question: "What type of pharmacy serves nursing homes?",
          options: [
            "Long-term care pharmacy",
            "Retail pharmacy",
            "Compounding pharmacy",
            "Veterinary pharmacy"
          ],
          correctAnswer: 0,
          explanation: "Long-term care pharmacies serve patients in nursing homes and similar facilities."
        },
        {
          id: 12,
          question: "What guides professional decision-making?",
          options: [
            "Ethics",
            "Personal preferences",
            "Convenience",
            "Speed"
          ],
          correctAnswer: 0,
          explanation: "Ethical principles guide professional decision-making in pharmacy practice."
        },
        {
          id: 13,
          question: "What do specialty pharmacies handle?",
          options: [
            "Complex medications",
            "Only common drugs",
            "First aid supplies",
            "Medical equipment"
          ],
          correctAnswer: 0,
          explanation: "Specialty pharmacies handle complex medications for serious health conditions."
        },
        {
          id: 14,
          question: "What builds trust with patients?",
          options: [
            "Professional interaction",
            "Ignoring questions",
            "Rushing conversations",
            "Being informal"
          ],
          correctAnswer: 0,
          explanation: "Professional, respectful interactions with patients help build trust and rapport."
        },
        {
          id: 15,
          question: "What do nuclear pharmacies handle?",
          options: [
            "Radioactive medications",
            "Only oral drugs",
            "Topical creams",
            "Herbal supplements"
          ],
          correctAnswer: 0,
          explanation: "Nuclear pharmacies handle radioactive medications used in diagnostic imaging and treatments."
        },
        {
          id: 16,
          question: "What prevents contamination in the pharmacy?",
          options: [
            "Clean work areas",
            "Crowded spaces",
            "Cluttered counters",
            "Shared equipment"
          ],
          correctAnswer: 0,
          explanation: "Maintaining clean work areas helps prevent contamination of medications."
        },
        {
          id: 17,
          question: "What do oncology pharmacies specialize in?",
          options: [
            "Cancer treatments",
            "Common cold medicines",
            "First aid supplies",
            "Vitamins only"
          ],
          correctAnswer: 0,
          explanation: "Oncology pharmacies specialize in medications for cancer treatment."
        },
        {
          id: 18,
          question: "What maintains knowledge and skills?",
          options: [
            "Continuing education",
            "Only initial training",
            "Work experience alone",
            "Observation"
          ],
          correctAnswer: 0,
          explanation: "Continuing education helps pharmacy technicians maintain and update their knowledge."
        },
        {
          id: 19,
          question: "What helps understand patient needs?",
          options: [
            "Active listening",
            "Talking only",
            "Assuming needs",
            "Ignoring concerns"
          ],
          correctAnswer: 0,
          explanation: "Active listening helps pharmacy technicians understand patient needs and concerns."
        },
        {
          id: 20,
          question: "What do veterinary pharmacies serve?",
          options: [
            "Animal patients",
            "Only human patients",
            "Hospital patients",
            "Nursing home residents"
          ],
          correctAnswer: 0,
          explanation: "Veterinary pharmacies prepare medications for animal patients."
        }
      ]
    },
    {
      id: 2,
      title: "Medication Fundamentals and Classification",
      content: `# Medication Fundamentals and Classification

Learn about different types of medications, how they work, and how they are organized in pharmacy practice.

## **Medication Categories**
Prescription medications require a doctor's authorization. Over-the-counter medications can be purchased without prescription. Controlled substances have special regulations. Generic medications have the same active ingredients as brand names. Brand name medications are marketed under specific names.

**Prescription Requirements:**
Written prescriptions from healthcare providers. Electronic prescriptions sent directly to pharmacy. Verbal prescriptions in emergency situations. Refill authorizations for ongoing medications. Transfer prescriptions from other pharmacies.

**Controlled Substance Schedules:**
Schedule I: High abuse potential, no medical use. Schedule II: High abuse potential, accepted medical use. Schedule III: Moderate abuse potential. Schedule IV: Low abuse potential. Schedule V: Lowest abuse potential.

## **Medication Classifications**
Analgesics relieve pain for patients. Antibiotics fight bacterial infections. Antihypertensives lower blood pressure. Antidiabetics manage blood sugar levels. Psychiatric medications treat mental health conditions.

**Common Medication Classes:**
Cardiovascular medications for heart conditions. Respiratory medications for breathing problems. Gastrointestinal medications for digestive issues. Endocrine medications for hormone disorders. Neurological medications for nerve conditions.

**Routes of Administration:**
Oral medications are taken by mouth. Topical medications are applied to skin. Inhalation medications are breathed into lungs. Injection medications are given by needle. Rectal medications are inserted into rectum.

## **Medication Forms and Dosages**
Tablets are solid oral dosage forms. Capsules contain medication in gelatin shells. Liquids are measured in milliliters. Creams and ointments are for topical use. Suppositories are for rectal or vaginal use.

**Dosage Considerations:**
Dose is the amount of medication given. Frequency is how often medication is taken. Duration is how long treatment continues. Strength indicates medication concentration. Form determines how medication is administered.

**Measurement Systems:**
Metric system uses grams and milliliters. Household system uses teaspoons and tablespoons. Apothecary system uses grains and drams. International units measure biological activity. Milliequivalents measure electrolyte activity.

**Common Abbreviations:**
PO means by mouth (oral). PR means by rectum. IM means intramuscular injection. IV means intravenous injection. QD means once daily.

**Drug Names:**
Chemical name describes molecular structure. Generic name is official non-proprietary name. Brand name is manufacturer's trademark name. Each medication has one generic name. Each medication may have multiple brand names.

**Storage Requirements:**
Room temperature storage for most medications. Refrigeration for temperature-sensitive drugs. Protection from light for photosensitive medications. Protection from moisture for some drugs. Secure storage for controlled substances.

**Expiration Dates:**
Expiration dates indicate medication stability. Medications should not be used after expiration. Proper storage affects shelf life. Outdated medications must be disposed properly. Inventory rotation uses oldest stock first.

**Patient Considerations:**
Allergies to medications or ingredients. Age affects dosage calculations. Weight influences medication dosing. Kidney or liver function affects drug clearance. Pregnancy or breastfeeding requires special caution.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What requires a doctor's authorization?",
          options: [
            "Prescription medications",
            "Over-the-counter medications",
            "Herbal supplements",
            "Vitamins"
          ],
          correctAnswer: 0,
          explanation: "Prescription medications require authorization from a licensed healthcare provider."
        },
        {
          id: 2,
          question: "What has the same active ingredients as brand names?",
          options: [
            "Generic medications",
            "Different medications",
            "Placebo medications",
            "Experimental drugs"
          ],
          correctAnswer: 0,
          explanation: "Generic medications contain the same active ingredients as brand name equivalents."
        },
        {
          id: 3,
          question: "What relieve pain for patients?",
          options: [
            "Analgesics",
            "Antibiotics",
            "Antihypertensives",
            "Antidiabetics"
          ],
          correctAnswer: 0,
          explanation: "Analgesics are medications that relieve pain."
        },
        {
          id: 4,
          question: "What are taken by mouth?",
          options: [
            "Oral medications",
            "Topical medications",
            "Inhalation medications",
            "Injection medications"
          ],
          correctAnswer: 0,
          explanation: "Oral medications are taken by mouth, usually as tablets, capsules, or liquids."
        },
        {
          id: 5,
          question: "What have special regulations?",
          options: [
            "Controlled substances",
            "All medications",
            "Only antibiotics",
            "Vitamins"
          ],
          correctAnswer: 0,
          explanation: "Controlled substances have special regulations due to their abuse potential."
        },
        {
          id: 6,
          question: "What fight bacterial infections?",
          options: [
            "Antibiotics",
            "Analgesics",
            "Antihypertensives",
            "Antidiabetics"
          ],
          correctAnswer: 0,
          explanation: "Antibiotics are medications that fight bacterial infections."
        },
        {
          id: 7,
          question: "What are applied to skin?",
          options: [
            "Topical medications",
            "Oral medications",
            "Inhalation medications",
            "Injection medications"
          ],
          correctAnswer: 0,
          explanation: "Topical medications are applied directly to the skin."
        },
        {
          id: 8,
          question: "What can be purchased without prescription?",
          options: [
            "Over-the-counter medications",
            "Controlled substances",
            "Prescription drugs",
            "Narcotics"
          ],
          correctAnswer: 0,
          explanation: "Over-the-counter medications can be purchased without a prescription."
        },
        {
          id: 9,
          question: "What lower blood pressure?",
          options: [
            "Antihypertensives",
            "Analgesics",
            "Antibiotics",
            "Antidiabetics"
          ],
          correctAnswer: 0,
          explanation: "Antihypertensives are medications that lower blood pressure."
        },
        {
          id: 10,
          question: "What are breathed into lungs?",
          options: [
            "Inhalation medications",
            "Oral medications",
            "Topical medications",
            "Rectal medications"
          ],
          correctAnswer: 0,
          explanation: "Inhalation medications are breathed into the lungs through inhalers or nebulizers."
        },
        {
          id: 11,
          question: "What is Schedule II classification?",
          options: [
            "High abuse potential, accepted medical use",
            "No medical use",
            "Low abuse potential",
            "Over-the-counter"
          ],
          correctAnswer: 0,
          explanation: "Schedule II controlled substances have high abuse potential but accepted medical uses."
        },
        {
          id: 12,
          question: "What manage blood sugar levels?",
          options: [
            "Antidiabetics",
            "Analgesics",
            "Antibiotics",
            "Antihypertensives"
          ],
          correctAnswer: 0,
          explanation: "Antidiabetic medications help manage blood sugar levels in diabetes."
        },
        {
          id: 13,
          question: "What are given by needle?",
          options: [
            "Injection medications",
            "Oral medications",
            "Topical medications",
            "Inhalation medications"
          ],
          correctAnswer: 0,
          explanation: "Injection medications are administered using a needle and syringe."
        },
        {
          id: 14,
          question: "What are marketed under specific names?",
          options: [
            "Brand name medications",
            "Generic medications",
            "Experimental drugs",
            "Compounded medications"
          ],
          correctAnswer: 0,
          explanation: "Brand name medications are marketed under specific trademarked names."
        },
        {
          id: 15,
          question: "What treat mental health conditions?",
          options: [
            "Psychiatric medications",
            "Cardiovascular medications",
            "Respiratory medications",
            "Gastrointestinal medications"
          ],
          correctAnswer: 0,
          explanation: "Psychiatric medications are used to treat mental health conditions."
        },
        {
          id: 16,
          question: "What are inserted into rectum?",
          options: [
            "Rectal medications",
            "Oral medications",
            "Topical medications",
            "Inhalation medications"
          ],
          correctAnswer: 0,
          explanation: "Rectal medications (suppositories) are inserted into the rectum."
        },
        {
          id: 17,
          question: "What uses grams and milliliters?",
          options: [
            "Metric system",
            "Household system",
            "Apothecary system",
            "Traditional system"
          ],
          correctAnswer: 0,
          explanation: "The metric system uses grams for weight and milliliters for volume measurements."
        },
        {
          id: 18,
          question: "What describes molecular structure?",
          options: [
            "Chemical name",
            "Generic name",
            "Brand name",
            "Common name"
          ],
          correctAnswer: 0,
          explanation: "The chemical name describes the medication's molecular structure."
        },
        {
          id: 19,
          question: "What indicates medication stability?",
          options: [
            "Expiration dates",
            "Manufacture dates",
            "Purchase dates",
            "Prescription dates"
          ],
          correctAnswer: 0,
          explanation: "Expiration dates indicate how long medications remain stable and effective."
        },
        {
          id: 20,
          question: "What means by mouth?",
          options: [
            "PO",
            "PR",
            "IM",
            "IV"
          ],
          correctAnswer: 0,
          explanation: "PO is the abbreviation for per os, meaning by mouth or oral administration."
        }
      ]
    },
    {
      id: 3,
      title: "Prescription Processing and Dispensing",
      content: `# Prescription Processing and Dispensing

Learn the step-by-step process for receiving, preparing, and dispensing medications accurately and safely.

## **Receiving Prescriptions**
Prescriptions arrive through different methods. Written prescriptions are brought by patients. Electronic prescriptions come directly from providers. Verbal prescriptions are given by phone in emergencies. Fax prescriptions are sent from medical offices.

**Prescription Components:**
Patient information includes name and date of birth. Prescriber information includes name and contact details. Medication name, strength, and dosage form. Directions for use (sig). Refill authorization and quantity.

**Verifying Prescriptions:**
Check for completeness of all required elements. Verify patient identity matches prescription. Confirm prescriber is licensed and authorized. Clarify unclear or ambiguous instructions. Contact prescriber for missing information.

## **Prescription Entry**
Enter prescription information into pharmacy software. Select correct medication from database. Input exact strength and dosage form. Enter precise directions for use. Include special instructions or warnings.

**Insurance Processing:**
Submit claim to patient's insurance plan. Verify patient eligibility and coverage. Determine copayment or coinsurance amount. Resolve rejected claims promptly. Document payment and coverage details.

**Safety Checks:**
Check for allergies to prescribed medication. Review current medications for interactions. Verify appropriate dose for patient age. Confirm proper dosage for patient weight. Check for contraindications or precautions.

## **Medication Preparation**
Count solid medications using counting trays. Measure liquid medications with graduated cylinders. Compound medications when necessary. Prepare unit-dose packages for facilities. Package medications in appropriate containers.

**Counting Techniques:**
Use counting tray for tablets and capsules. Count by fives or tens for efficiency. Double-count controlled substances. Verify count accuracy before labeling. Maintain clean counting area.

**Liquid Measurements:**
Use oral syringes for precise measurements. Read meniscus at eye level for accuracy. Measure over counter to catch spills. Use appropriate size graduated cylinder. Convert between measurement units correctly.

## **Labeling Requirements**
Primary label contains essential information. Auxiliary labels provide additional instructions. Barcode for inventory tracking. Expiration date of dispensed medication. Lot number for recall tracking.

**Required Label Information:**
Patient name and other identifiers. Prescription number for tracking. Medication name, strength, and form. Directions for use in clear language. Prescriber name and pharmacy information.

**Auxiliary Labels:**
Shake well for suspensions. Refrigerate for temperature-sensitive drugs. Take with food for gastrointestinal protection. May cause drowsiness for sedating medications. For external use only for topical products.

## **Final Verification**
Pharmacist reviews completed prescription. Check medication against original order. Verify accuracy of counting or measuring. Confirm proper labeling information. Ensure appropriate packaging and storage.

**Patient Counseling Points:**
How to take medication correctly. What to expect from treatment. Possible side effects to watch for. What to do if dose is missed. When to contact healthcare provider.

**Dispensing Process:**
Hand medication directly to patient. Verify patient identity at pickup. Provide counseling or offer to pharmacist. Collect payment for prescription. Document dispensing in records.

**Record Keeping:**
Maintain complete prescription records. Document all dispensing activities. Keep controlled substance logs accurate. Store records for required time period. Protect patient confidentiality.

**Quality Assurance:**
Double-check all calculations. Verify measurements and counts. Confirm label accuracy. Review for potential errors. Maintain clean and organized workspace.

**Error Prevention:**
Focus on one task at a time. Avoid interruptions during critical steps. Use standardized processes consistently. Ask questions when uncertain. Report near-misses for improvement.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What arrives directly from providers?",
          options: [
            "Electronic prescriptions",
            "Written prescriptions",
            "Verbal prescriptions",
            "Old prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Electronic prescriptions are sent directly from healthcare providers to the pharmacy."
        },
        {
          id: 2,
          question: "What includes name and date of birth?",
          options: [
            "Patient information",
            "Prescriber information",
            "Medication information",
            "Insurance information"
          ],
          correctAnswer: 0,
          explanation: "Patient information on prescriptions includes name, date of birth, and other identifiers."
        },
        {
          id: 3,
          question: "What is entered into pharmacy software?",
          options: [
            "Prescription information",
            "Only patient name",
            "Just medication name",
            "Insurance details only"
          ],
          correctAnswer: 0,
          explanation: "All prescription information must be accurately entered into pharmacy software systems."
        },
        {
          id: 4,
          question: "What uses counting trays?",
          options: [
            "Counting solid medications",
            "Measuring liquids",
            "Compounding creams",
            "Labeling containers"
          ],
          correctAnswer: 0,
          explanation: "Counting trays are used to count tablets and capsules accurately and efficiently."
        },
        {
          id: 5,
          question: "What contains essential information?",
          options: [
            "Primary label",
            "Auxiliary label",
            "Shipping label",
            "Inventory label"
          ],
          correctAnswer: 0,
          explanation: "The primary label contains essential medication information for the patient."
        },
        {
          id: 6,
          question: "What are given by phone in emergencies?",
          options: [
            "Verbal prescriptions",
            "Written prescriptions",
            "Electronic prescriptions",
            "Fax prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Verbal prescriptions may be given by phone in emergency situations."
        },
        {
          id: 7,
          question: "What includes directions for use?",
          options: [
            "Prescription components",
            "Only medication name",
            "Just patient name",
            "Insurance details"
          ],
          correctAnswer: 0,
          explanation: "Prescription components include directions for use (sig) telling how to take the medication."
        },
        {
          id: 8,
          question: "What determines copayment amount?",
          options: [
            "Insurance processing",
            "Medication counting",
            "Label printing",
            "Patient counseling"
          ],
          correctAnswer: 0,
          explanation: "Insurance processing determines the patient's copayment or coinsurance amount."
        },
        {
          id: 9,
          question: "What uses graduated cylinders?",
          options: [
            "Measuring liquid medications",
            "Counting tablets",
            "Printing labels",
            "Entering data"
          ],
          correctAnswer: 0,
          explanation: "Graduated cylinders are used to measure liquid medications accurately."
        },
        {
          id: 10,
          question: "What provides additional instructions?",
          options: [
            "Auxiliary labels",
            "Primary labels",
            "Shipping labels",
            "Inventory labels"
          ],
          correctAnswer: 0,
          explanation: "Auxiliary labels provide additional instructions like 'shake well' or 'refrigerate'."
        },
        {
          id: 11,
          question: "What are brought by patients?",
          options: [
            "Written prescriptions",
            "Electronic prescriptions",
            "Verbal prescriptions",
            "Fax prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Written prescriptions are physical prescriptions brought to the pharmacy by patients."
        },
        {
          id: 12,
          question: "What checks for completeness?",
          options: [
            "Verifying prescriptions",
            "Counting medications",
            "Measuring liquids",
            "Printing labels"
          ],
          correctAnswer: 0,
          explanation: "Verifying prescriptions includes checking for completeness of all required elements."
        },
        {
          id: 13,
          question: "What checks for allergies?",
          options: [
            "Safety checks",
            "Counting accuracy",
            "Label printing",
            "Insurance billing"
          ],
          correctAnswer: 0,
          explanation: "Safety checks include verifying the patient doesn't have allergies to the prescribed medication."
        },
        {
          id: 14,
          question: "What are counted by fives or tens?",
          options: [
            "Tablets and capsules",
            "Liquid milliliters",
            "Labels printed",
            "Prescriptions entered"
          ],
          correctAnswer: 0,
          explanation: "Tablets and capsules are often counted in groups of five or ten for efficiency."
        },
        {
          id: 15,
          question: "What contains patient name?",
          options: [
            "Required label information",
            "Only medication name",
            "Just pharmacy name",
            "Insurance details"
          ],
          correctAnswer: 0,
          explanation: "Required label information includes the patient's name and other identifiers."
        },
        {
          id: 16,
          question: "What are sent from medical offices?",
          options: [
            "Fax prescriptions",
            "Electronic prescriptions",
            "Verbal prescriptions",
            "Written prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Fax prescriptions are sent from medical offices to the pharmacy."
        },
        {
          id: 17,
          question: "What verifies patient identity matches?",
          options: [
            "Prescription verification",
            "Medication counting",
            "Label printing",
            "Insurance billing"
          ],
          correctAnswer: 0,
          explanation: "Prescription verification includes confirming patient identity matches the prescription."
        },
        {
          id: 18,
          question: "What submits claim to insurance?",
          options: [
            "Insurance processing",
            "Medication preparation",
            "Patient counseling",
            "Inventory management"
          ],
          correctAnswer: 0,
          explanation: "Insurance processing involves submitting claims to the patient's insurance plan."
        },
        {
          id: 19,
          question: "What uses oral syringes?",
          options: [
            "Precise liquid measurements",
            "Counting tablets",
            "Printing labels",
            "Entering data"
          ],
          correctAnswer: 0,
          explanation: "Oral syringes are used for precise measurement of liquid medications."
        },
        {
          id: 20,
          question: "What says 'shake well'?",
          options: [
            "Auxiliary label",
            "Primary label",
            "Shipping label",
            "Inventory label"
          ],
          correctAnswer: 0,
          explanation: "An auxiliary label might say 'shake well' for suspensions that need mixing."
        }
      ]
    },
    {
      id: 4,
      title: "Pharmacy Calculations and Measurements",
      content: `# Pharmacy Calculations and Measurements

Master essential math skills needed for accurate medication preparation and dosing in pharmacy practice.

## **Measurement Systems**
Metric system is used for most pharmacy calculations. Household system is used for patient instructions. Apothecary system is older but still referenced. International units measure biological activity. Milliequivalents measure electrolyte activity.

**Metric System Basics:**
Grams measure weight of solid medications. Milliliters measure volume of liquid medications. Micrograms are very small weight units. Liters are large volume units. Conversions between metric units use decimal movement.

**Household Measurements:**
Teaspoons equal approximately 5 milliliters. Tablespoons equal approximately 15 milliliters. Cups equal approximately 240 milliliters. Ounces equal approximately 30 milliliters. Drops vary in size based on device.

**Conversion Factors:**
1 kilogram equals 1000 grams. 1 gram equals 1000 milligrams. 1 milligram equals 1000 micrograms. 1 liter equals 1000 milliliters. 1 milliliter equals 1 cubic centimeter.

## **Dosage Calculations**
Basic formula: Dose = (Desired/Have) × Quantity. Desired dose is what the patient needs. Have dose is strength available. Quantity is amount containing the have dose. Calculate accurately to prevent errors.

**Weight-Based Dosing:**
Some medications are dosed by patient weight. Calculate milligrams per kilogram of body weight. Convert patient weight to correct units. Multiply weight by dose per weight unit. Verify calculation with second method.

**Pediatric Dosing:**
Children often need adjusted doses. Use weight-based calculations for accuracy. Consider age and developmental factors. Use special pediatric formulations when available. Double-check all pediatric calculations.

**Geriatric Considerations:**
Older adults may need dose adjustments. Consider kidney and liver function changes. Account for multiple medications. Use lower starting doses when appropriate. Monitor for side effects carefully.

## **Compounding Calculations**
Alligation method mixes different strengths. Ratio and proportion for concentration changes. Percentage calculations for solution strengths. Aliquot method for very small quantities. Temperature conversions when needed.

**Percentage Calculations:**
Percent weight/volume for solutions. Percent volume/volume for liquid mixtures. Percent weight/weight for solid mixtures. Convert percentages to decimal form. Calculate amounts needed for desired strength.

**Solution Preparation:**
Calculate amount of solute needed. Calculate amount of solvent needed. Consider total volume of final product. Account for displacement volume of solids. Label with exact concentration.

## **Business Mathematics**
Calculate selling price from cost. Determine profit margins. Calculate discounts and sales tax. Inventory valuation methods. Prescription pricing calculations.

**Inventory Calculations:**
Calculate days of supply on hand. Determine reorder points for medications. Calculate turnover rates. Monitor expiration dates. Track controlled substance counts.

**Insurance Calculations:**
Calculate patient copayments. Determine coinsurance amounts. Calculate deductibles. Process manufacturer coupons. Handle prior authorization requirements.

## **Safety in Calculations**
Always double-check calculations. Use calculator for complex math. Have second person verify critical calculations. Estimate answer first to check reasonableness. Document calculations in records.

**Common Calculation Errors:**
Decimal point placement errors. Unit conversion mistakes. Confusing similar-sounding units. Incorrect formula application. Transcription errors from source.

**Prevention Strategies:**
Use standardized calculation methods. Write out all steps clearly. Circle final answers prominently. Check work against known standards. Ask for help when uncertain.

**Practice Problems:**
Calculate doses for common medications. Convert between measurement systems. Prepare solutions of specified strengths. Calculate days supply for prescriptions. Determine patient charges.

**Technology Assistance:**
Pharmacy software performs many calculations. Verify computer calculations manually. Understand algorithms used by systems. Report software calculation concerns. Maintain manual calculation skills.

**Continuing Education:**
Regular practice maintains calculation skills. Attend calculation workshops. Use calculation reference materials. Stay updated on new medications. Review error reports for learning.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What system is used for most pharmacy calculations?",
          options: [
            "Metric system",
            "Household system",
            "Apothecary system",
            "Imperial system"
          ],
          correctAnswer: 0,
          explanation: "The metric system is used for most professional pharmacy calculations."
        },
        {
          id: 2,
          question: "What measures weight of solid medications?",
          options: [
            "Grams",
            "Milliliters",
            "Liters",
            "Cubic centimeters"
          ],
          correctAnswer: 0,
          explanation: "Grams measure the weight of solid medications in the metric system."
        },
        {
          id: 3,
          question: "What equals approximately 5 milliliters?",
          options: [
            "Teaspoon",
            "Tablespoon",
            "Cup",
            "Ounce"
          ],
          correctAnswer: 0,
          explanation: "One teaspoon equals approximately 5 milliliters in household measurements."
        },
        {
          id: 4,
          question: "What is the basic dosage formula?",
          options: [
            "Dose = (Desired/Have) × Quantity",
            "Dose = Desired + Have",
            "Dose = Desired × Have",
            "Dose = Desired - Have"
          ],
          correctAnswer: 0,
          explanation: "The basic dosage formula is Dose = (Desired/Have) × Quantity."
        },
        {
          id: 5,
          question: "What measures volume of liquid medications?",
          options: [
            "Milliliters",
            "Grams",
            "Micrograms",
            "Milligrams"
          ],
          correctAnswer: 0,
          explanation: "Milliliters measure the volume of liquid medications in the metric system."
        },
        {
          id: 6,
          question: "What equals approximately 15 milliliters?",
          options: [
            "Tablespoon",
            "Teaspoon",
            "Cup",
            "Ounce"
          ],
          correctAnswer: 0,
          explanation: "One tablespoon equals approximately 15 milliliters in household measurements."
        },
        {
          id: 7,
          question: "What is dosed by patient weight?",
          options: [
            "Some medications",
            "All medications",
            "No medications",
            "Only vitamins"
          ],
          correctAnswer: 0,
          explanation: "Some medications are dosed based on the patient's body weight."
        },
        {
          id: 8,
          question: "What mixes different strengths?",
          options: [
            "Alligation method",
            "Basic formula",
            "Ratio method",
            "Simple addition"
          ],
          correctAnswer: 0,
          explanation: "The alligation method is used to mix medications of different strengths."
        },
        {
          id: 9,
          question: "What equals 1000 grams?",
          options: [
            "1 kilogram",
            "1 milligram",
            "1 microgram",
            "1 liter"
          ],
          correctAnswer: 0,
          explanation: "One kilogram equals 1000 grams in the metric system."
        },
        {
          id: 10,
          question: "What equals approximately 240 milliliters?",
          options: [
            "Cup",
            "Teaspoon",
            "Tablespoon",
            "Ounce"
          ],
          correctAnswer: 0,
          explanation: "One cup equals approximately 240 milliliters in household measurements."
        },
        {
          id: 11,
          question: "What is what the patient needs?",
          options: [
            "Desired dose",
            "Have dose",
            "Quantity",
            "Strength"
          ],
          correctAnswer: 0,
          explanation: "The desired dose is the amount of medication the patient needs."
        },
        {
          id: 12,
          question: "What are very small weight units?",
          options: [
            "Micrograms",
            "Milliliters",
            "Liters",
            "Grams"
          ],
          correctAnswer: 0,
          explanation: "Micrograms are very small units used to measure weight in the metric system."
        },
        {
          id: 13,
          question: "What equals approximately 30 milliliters?",
          options: [
            "Ounce",
            "Teaspoon",
            "Tablespoon",
            "Cup"
          ],
          correctAnswer: 0,
          explanation: "One ounce equals approximately 30 milliliters in household measurements."
        },
        {
          id: 14,
          question: "What is strength available?",
          options: [
            "Have dose",
            "Desired dose",
            "Quantity",
            "Total dose"
          ],
          correctAnswer: 0,
          explanation: "The have dose is the strength of medication that is available."
        },
        {
          id: 15,
          question: "What equals 1000 milligrams?",
          options: [
            "1 gram",
            "1 kilogram",
            "1 microgram",
            "1 milliliter"
          ],
          correctAnswer: 0,
          explanation: "One gram equals 1000 milligrams in the metric system."
        },
        {
          id: 16,
          question: "What vary in size based on device?",
          options: [
            "Drops",
            "Milliliters",
            "Teaspoons",
            "Tablespoons"
          ],
          correctAnswer: 0,
          explanation: "Drops vary in size depending on the dropper or device being used."
        },
        {
          id: 17,
          question: "What is amount containing the have dose?",
          options: [
            "Quantity",
            "Desired dose",
            "Have dose",
            "Strength"
          ],
          correctAnswer: 0,
          explanation: "Quantity is the amount that contains the have dose strength."
        },
        {
          id: 18,
          question: "What equals 1000 milliliters?",
          options: [
            "1 liter",
            "1 gram",
            "1 milligram",
            "1 kilogram"
          ],
          correctAnswer: 0,
          explanation: "One liter equals 1000 milliliters in the metric system."
        },
        {
          id: 19,
          question: "What should always be done with calculations?",
          options: [
            "Double-check",
            "Rush through",
            "Assume correct",
            "Ignore"
          ],
          correctAnswer: 0,
          explanation: "All pharmacy calculations should be double-checked for accuracy."
        },
        {
          id: 20,
          question: "What equals 1 cubic centimeter?",
          options: [
            "1 milliliter",
            "1 gram",
            "1 milligram",
            "1 liter"
          ],
          correctAnswer: 0,
          explanation: "One milliliter equals one cubic centimeter in volume measurement."
        }
      ]
    },
    {
      id: 5,
      title: "Pharmacy Law and Ethics",
      content: `# Pharmacy Law and Ethics

Understand the legal requirements and ethical principles that govern pharmacy practice and protect patients.

## **Federal Pharmacy Laws**
Controlled Substances Act regulates addictive medications. Food, Drug, and Cosmetic Act ensures medication safety. Poison Prevention Packaging Act requires child-resistant containers. Health Insurance Portability and Accountability Act protects privacy. Drug Supply Chain Security Act tracks medications.

**Controlled Substances Act:**
Classifies medications into five schedules. Requires special records for controlled substances. Mandates secure storage for certain medications. Limits refills for Schedule II medications. Requires inventory every two years.

**HIPAA Requirements:**
Protects patient health information privacy. Requires confidentiality safeguards. Limits disclosure without patient authorization. Provides patients access to their records. Mandates training for pharmacy staff.

## **State Pharmacy Regulations**
State boards of pharmacy license pharmacists. State regulations control technician registration. Each state has its own pharmacy practice act. States set requirements for pharmacy supervision. States establish continuing education requirements.

**Technician Regulation:**
Registration with state board of pharmacy. Certification requirements vary by state. Criminal background checks may be required. Training and education specifications. Scope of practice limitations.

**Pharmacy Supervision:**
Pharmacist must supervise technician activities. Ratio of technicians to pharmacists specified. Pharmacist verification required for dispensing. Specific tasks may be delegated. Supervision levels defined by state law.

## **Prescription Requirements**
Valid prescriptions must contain specific elements. Prescriber must be authorized in that state. Patient identification must be verified. Expired prescriptions cannot be filled. Certain prescriptions have additional requirements.

**Controlled Substance Prescriptions:**
Schedule II requires written prescription with exceptions. Partial filling allowed in specific situations. Emergency quantities limited to 72 hours. Transfer between pharmacies restricted. Must include DEA number of prescriber.

**Prescription Refills:**
Authorized refills specified on prescription. Maximum of five refills within six months. No refills allowed for Schedule II medications. Refill authorization may be obtained. Records must document all refills.

## **Record Keeping Requirements**
Prescription records must be maintained. Controlled substance records have special requirements. Patient profiles document medication history. Records must be kept for specified time periods. Records must be available for inspection.

**Patient Profiles:**
Document all medications dispensed. Record patient allergies and conditions. Note therapeutic problems identified. Document interventions made. Maintain current patient information.

**Inventory Records:**
Track all medications received and dispensed. Conduct regular controlled substance counts. Document medication returns and destructions. Record medication transfers between pharmacies. Maintain purchase records for audits.

## **Ethical Principles**
Respect for patient autonomy and decisions. Beneficence means doing good for patients. Non-maleficence means avoiding harm. Justice means fair treatment for all. Veracity means truthfulness in all interactions.

**Patient Confidentiality:**
Protect all patient health information. Discuss medications only in private areas. Secure paper and electronic records. Obtain consent before sharing information. Report breaches appropriately.

**Professional Boundaries:**
Maintain professional relationships with patients. Avoid personal relationships that affect care. Decline inappropriate gifts or favors. Manage conflicts of interest appropriately. Seek guidance when boundaries unclear.

**Ethical Decision Making:**
Identify the ethical issue clearly. Gather relevant facts and information. Consider all possible options. Evaluate options against ethical principles. Choose and implement best course of action.

## **Professional Conduct**
Display professional appearance and behavior. Communicate respectfully with everyone. Take responsibility for own actions. Report errors or concerns appropriately. Participate in continuous quality improvement.

**Error Reporting:**
Report medication errors promptly. Document errors completely and accurately. Participate in error analysis for prevention. Maintain confidentiality in error reporting. Learn from errors to improve practice.

**Quality Assurance:**
Participate in pharmacy quality programs. Follow established policies and procedures. Suggest improvements to processes. Monitor personal performance regularly. Seek feedback for professional growth.

**Continuing Competence:**
Engage in ongoing education and training. Stay current with pharmacy developments. Maintain required certifications and registrations. Develop new skills as needed. Mentor less experienced technicians.

**Patient Advocacy:**
Protect patient rights and welfare. Help patients access needed medications. Educate patients about their medications. Report concerns about patient safety. Support patients in healthcare decisions.

**Legal Compliance:**
Follow all applicable laws and regulations. Understand legal responsibilities. Seek clarification when uncertain. Report illegal activities appropriately. Maintain personal licensure in good standing.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What regulates addictive medications?",
          options: [
            "Controlled Substances Act",
            "HIPAA",
            "Poison Prevention Act",
            "Drug Supply Chain Act"
          ],
          correctAnswer: 0,
          explanation: "The Controlled Substances Act regulates medications with abuse potential."
        },
        {
          id: 2,
          question: "What protects patient health information?",
          options: [
            "HIPAA",
            "Controlled Substances Act",
            "Food and Drug Act",
            "Poison Prevention Act"
          ],
          correctAnswer: 0,
          explanation: "HIPAA protects the privacy and security of patient health information."
        },
        {
          id: 3,
          question: "What licenses pharmacists?",
          options: [
            "State boards of pharmacy",
            "Federal government",
            "Pharmacy schools",
            "Hospitals"
          ],
          correctAnswer: 0,
          explanation: "State boards of pharmacy license pharmacists to practice in their state."
        },
        {
          id: 4,
          question: "What means doing good for patients?",
          options: [
            "Beneficence",
            "Non-maleficence",
            "Justice",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Beneficence is the ethical principle of doing good for patients."
        },
        {
          id: 5,
          question: "What requires child-resistant containers?",
          options: [
            "Poison Prevention Packaging Act",
            "Controlled Substances Act",
            "HIPAA",
            "Drug Supply Chain Act"
          ],
          correctAnswer: 0,
          explanation: "The Poison Prevention Packaging Act requires child-resistant packaging for certain medications."
        },
        {
          id: 6,
          question: "What controls technician registration?",
          options: [
            "State regulations",
            "Federal laws only",
            "Pharmacy owners",
            "Patient requests"
          ],
          correctAnswer: 0,
          explanation: "State regulations control the registration and requirements for pharmacy technicians."
        },
        {
          id: 7,
          question: "What must contain specific elements?",
          options: [
            "Valid prescriptions",
            "All medication orders",
            "Only controlled substances",
            "Just refill requests"
          ],
          correctAnswer: 0,
          explanation: "Valid prescriptions must contain specific required elements to be legally valid."
        },
        {
          id: 8,
          question: "What means avoiding harm?",
          options: [
            "Non-maleficence",
            "Beneficence",
            "Justice",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Non-maleficence is the ethical principle of avoiding harm to patients."
        },
        {
          id: 9,
          question: "What ensures medication safety?",
          options: [
            "Food, Drug, and Cosmetic Act",
            "Controlled Substances Act",
            "HIPAA",
            "Poison Prevention Act"
          ],
          correctAnswer: 0,
          explanation: "The Food, Drug, and Cosmetic Act ensures the safety of medications and medical devices."
        },
        {
          id: 10,
          question: "Who must supervise technician activities?",
          options: [
            "Pharmacist",
            "Pharmacy owner",
            "Head technician",
            "Physician"
          ],
          correctAnswer: 0,
          explanation: "A licensed pharmacist must supervise all pharmacy technician activities."
        },
        {
          id: 11,
          question: "What requires written prescription with exceptions?",
          options: [
            "Schedule II controlled substances",
            "All medications",
            "Only antibiotics",
            "Over-the-counter drugs"
          ],
          correctAnswer: 0,
          explanation: "Schedule II controlled substances generally require a written prescription with few exceptions."
        },
        {
          id: 12,
          question: "What means fair treatment for all?",
          options: [
            "Justice",
            "Beneficence",
            "Non-maleficence",
            "Veracity"
          ],
          correctAnswer: 0,
          explanation: "Justice is the ethical principle of fair treatment for all patients."
        },
        {
          id: 13,
          question: "What tracks medications through supply chain?",
          options: [
            "Drug Supply Chain Security Act",
            "Controlled Substances Act",
            "HIPAA",
            "Poison Prevention Act"
          ],
          correctAnswer: 0,
          explanation: "The Drug Supply Chain Security Act tracks medications through the distribution system."
        },
        {
          id: 14,
          question: "What varies by state?",
          options: [
            "Technician certification requirements",
            "Federal laws",
            "Medication ingredients",
            "Patient needs"
          ],
          correctAnswer: 0,
          explanation: "Technician certification requirements vary from state to state."
        },
        {
          id: 15,
          question: "What cannot be filled?",
          options: [
            "Expired prescriptions",
            "Valid prescriptions",
            "Emergency prescriptions",
            "Refill requests"
          ],
          correctAnswer: 0,
          explanation: "Expired prescriptions cannot be filled and require a new prescription."
        },
        {
          id: 16,
          question: "What means truthfulness?",
          options: [
            "Veracity",
            "Beneficence",
            "Non-maleficence",
            "Justice"
          ],
          correctAnswer: 0,
          explanation: "Veracity is the ethical principle of truthfulness in all interactions."
        },
        {
          id: 17,
          question: "What classifies medications into five schedules?",
          options: [
            "Controlled Substances Act",
            "HIPAA",
            "Food and Drug Act",
            "Poison Prevention Act"
          ],
          correctAnswer: 0,
          explanation: "The Controlled Substances Act classifies medications into five schedules based on abuse potential."
        },
        {
          id: 18,
          question: "What sets ratio of technicians to pharmacists?",
          options: [
            "State regulations",
            "Federal law",
            "Pharmacy policy",
            "Patient demand"
          ],
          correctAnswer: 0,
          explanation: "State regulations set the allowed ratio of pharmacy technicians to pharmacists."
        },
        {
          id: 19,
          question: "What has maximum of five refills within six months?",
          options: [
            "Prescription refills",
            "All medications",
            "Controlled substances",
            "Emergency supplies"
          ],
          correctAnswer: 0,
          explanation: "Non-controlled prescriptions generally have a maximum of five refills within six months."
        },
        {
          id: 20,
          question: "What protects all patient health information?",
          options: [
            "Patient confidentiality",
            "Only some information",
            "Just medication names",
            "Public records"
          ],
          correctAnswer: 0,
          explanation: "Patient confidentiality protects all patient health information from unauthorized disclosure."
        }
      ]
    },
    {
      id: 6,
      title: "Patient Communication and Safety",
      content: `# Patient Communication and Safety

Develop effective communication skills and learn safety practices to provide excellent patient care in pharmacy settings.

## **Effective Patient Communication**
Clear communication helps patients understand medications. Use language the patient can understand. Speak clearly and at appropriate pace. Listen actively to patient concerns. Confirm patient understanding of information.

**Communication Barriers:**
Language differences may require interpreter. Hearing impairments need clear speech. Vision impairments require large print. Cognitive limitations need simple explanations. Cultural differences affect communication styles.

**Communication Techniques:**
Use open-ended questions to gather information. Repeat back important information for confirmation. Provide written information to reinforce verbal. Use teach-back method to verify understanding. Show empathy and respect in all interactions.

## **Patient Counseling Points**
How to take medication correctly. What the medication is for. What to expect from treatment. Possible side effects to watch for. What to do if dose is missed.

**Special Instructions:**
Take with food or on empty stomach. Avoid certain foods or beverages. Store medication properly. Dispose of unused medication safely. Watch for specific warning signs.

**Device Demonstrations:**
Show how to use inhalers correctly. Demonstrate insulin pen injection technique. Explain how to use topical medications. Train on blood glucose monitoring. Instruct on proper use of medical devices.

## **Medication Safety Practices**
Check patient identity before dispensing. Verify medication accuracy at each step. Use tall man lettering for look-alike names. Separate sound-alike medications on shelves. Implement barcode scanning when available.

**Error Prevention:**
Focus on one task at a time. Minimize interruptions during dispensing. Double-check all calculations. Verify measurements visually. Have second person check high-risk medications.

**High-Alert Medications:**
Insulin requires careful dose verification. Anticoagulants need precise dosing. Chemotherapy drugs have special handling. Opioids require extra safeguards. Pediatric medications need weight-based verification.

## **Infection Control**
Wash hands frequently and properly. Use gloves when handling medications. Clean work surfaces regularly. Follow proper aseptic techniques. Dispose of contaminated materials safely.

**Hand Hygiene:**
Wash with soap and water when visibly soiled. Use alcohol-based sanitizer for routine cleaning. Wash before and after patient contact. Clean hands after removing gloves. Keep nails clean and short.

**Personal Protective Equipment:**
Wear gloves when handling hazardous drugs. Use masks during compounding activities. Wear gowns when appropriate. Use eye protection for splash risk. Follow facility-specific PPE protocols.

## **Emergency Preparedness**
Know location of emergency equipment. Understand emergency response procedures. Participate in emergency drills. Maintain first aid certification. Report safety hazards promptly.

**Emergency Equipment:**
Know location of fire extinguishers. Understand how to use emergency eyewash. Locate first aid supplies. Identify emergency exits. Know emergency contact numbers.

**Emergency Situations:**
Respond to allergic reactions appropriately. Handle medication overdose situations. Manage diabetic emergencies. Address seizure episodes. Provide basic life support if trained.

## **Patient Education Materials**
Provide written information with medications. Use visual aids for better understanding. Offer medication information sheets. Provide disease education materials. Recommend reliable health resources.

**Health Literacy Considerations:**
Use simple language instead of medical jargon. Break information into small pieces. Use pictures or diagrams when helpful. Check understanding regularly. Encourage questions from patients.

**Cultural Competence:**
Respect cultural beliefs about medications. Understand traditional healing practices. Accommodate dietary restrictions. Respect privacy and modesty concerns. Use appropriate communication styles.

## **Quality Improvement**
Report medication errors and near misses. Participate in root cause analysis. Suggest process improvements. Follow up on implemented changes. Share lessons learned with team.

**Performance Monitoring:**
Track personal accuracy rates. Monitor customer satisfaction feedback. Participate in quality audits. Complete required competency assessments. Seek constructive feedback.

**Professional Development:**
Attend continuing education programs. Participate in staff training sessions. Read pharmacy journals and updates. Join professional organizations. Pursue advanced certifications.

**Team Collaboration:**
Communicate effectively with pharmacists. Work cooperatively with other technicians. Share information with healthcare providers. Coordinate with pharmacy support staff. Participate in team meetings.

**Customer Service:**
Greet patients warmly and professionally. Address patient concerns promptly. Maintain patient privacy and confidentiality. Provide accurate wait time estimates. Follow up on patient requests.

**Stress Management:**
Manage workload efficiently. Take breaks when needed. Practice deep breathing techniques. Maintain work-life balance. Seek support when overwhelmed.

**Professional Appearance:**
Wear clean, appropriate attire. Maintain good personal hygiene. Display professional identification badge. Keep work area neat and organized. Represent pharmacy positively.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What helps patients understand medications?",
          options: [
            "Clear communication",
            "Technical jargon",
            "Rushed explanations",
            "Complex language"
          ],
          correctAnswer: 0,
          explanation: "Clear, simple communication helps patients understand their medications."
        },
        {
          id: 2,
          question: "What may require interpreter?",
          options: [
            "Language differences",
            "All patients",
            "Only new patients",
            "Regular customers"
          ],
          correctAnswer: 0,
          explanation: "Language differences may require an interpreter for effective communication."
        },
        {
          id: 3,
          question: "What should be checked before dispensing?",
          options: [
            "Patient identity",
            "Only medication name",
            "Just prescription number",
            "Insurance details"
          ],
          correctAnswer: 0,
          explanation: "Patient identity must be verified before dispensing any medication."
        },
        {
          id: 4,
          question: "What should be done frequently and properly?",
          options: [
            "Hand washing",
            "Only at start of day",
            "When visibly dirty",
            "Once per shift"
          ],
          correctAnswer: 0,
          explanation: "Hands should be washed frequently and properly to prevent infection spread."
        },
        {
          id: 5,
          question: "What uses open-ended questions?",
          options: [
            "Communication techniques",
            "Only closed questions",
            "Technical language",
            "Medical terminology"
          ],
          correctAnswer: 0,
          explanation: "Open-ended questions help gather more complete information from patients."
        },
        {
          id: 6,
          question: "What needs clear speech?",
          options: [
            "Hearing impairments",
            "All patients",
            "Only elderly patients",
            "New prescriptions"
          ],
          correctAnswer: 0,
          explanation: "Patients with hearing impairments need clear, well-articulated speech."
        },
        {
          id: 7,
          question: "What should be verified at each step?",
          options: [
            "Medication accuracy",
            "Only at final step",
            "Just patient name",
            "Insurance coverage"
          ],
          correctAnswer: 0,
          explanation: "Medication accuracy should be verified at each step of the dispensing process."
        },
        {
          id: 8,
          question: "What should be used when handling medications?",
          options: [
            "Gloves",
            "Bare hands",
            "Only for liquids",
            "Just for pills"
          ],
          correctAnswer: 0,
          explanation: "Gloves should be worn when handling medications to prevent contamination."
        },
        {
          id: 9,
          question: "What repeats back important information?",
          options: [
            "Communication techniques",
            "Only patients",
            "Pharmacists only",
            "Doctors"
          ],
          correctAnswer: 0,
          explanation: "Repeating back important information helps confirm patient understanding."
        },
        {
          id: 10,
          question: "What requires large print?",
          options: [
            "Vision impairments",
            "All patients",
            "Only children",
            "New medications"
          ],
          correctAnswer: 0,
          explanation: "Patients with vision impairments may need large print instructions."
        },
        {
          id: 11,
          question: "What uses tall man lettering?",
          options: [
            "Look-alike medication names",
            "All medications",
            "Only controlled substances",
            "New drugs"
          ],
          correctAnswer: 0,
          explanation: "Tall man lettering helps distinguish between look-alike medication names."
        },
        {
          id: 12,
          question: "What should be cleaned regularly?",
          options: [
            "Work surfaces",
            "Only at closing",
            "When visibly dirty",
            "Once weekly"
          ],
          correctAnswer: 0,
          explanation: "Work surfaces should be cleaned regularly to maintain cleanliness."
        },
        {
          id: 13,
          question: "What provides written information?",
          options: [
            "Communication techniques",
            "Only verbal instructions",
            "Technical explanations",
            "Medical charts"
          ],
          correctAnswer: 0,
          explanation: "Providing written information reinforces verbal instructions for patients."
        },
        {
          id: 14,
          question: "What needs simple explanations?",
          options: [
            "Cognitive limitations",
            "All patients",
            "Only adults",
            "Healthcare workers"
          ],
          correctAnswer: 0,
          explanation: "Patients with cognitive limitations need simple, clear explanations."
        },
        {
          id: 15,
          question: "What separates sound-alike medications?",
          options: [
            "Shelf organization",
            "Only in storage",
            "Just in refrigerator",
            "During counting"
          ],
          correctAnswer: 0,
          explanation: "Separating sound-alike medications on shelves helps prevent dispensing errors."
        },
        {
          id: 16,
          question: "What should be followed?",
          options: [
            "Aseptic techniques",
            "Only when convenient",
            "Sometimes",
            "For sterile products only"
          ],
          correctAnswer: 0,
          explanation: "Proper aseptic techniques should be followed to prevent contamination."
        },
        {
          id: 17,
          question: "What uses teach-back method?",
          options: [
            "Verifying understanding",
            "Only teaching children",
            "New employees",
            "Pharmacist training"
          ],
          correctAnswer: 0,
          explanation: "The teach-back method verifies patient understanding by having them repeat instructions."
        },
        {
          id: 18,
          question: "What affects communication styles?",
          options: [
            "Cultural differences",
            "Only language",
            "Medication type",
            "Pharmacy size"
          ],
          correctAnswer: 0,
          explanation: "Cultural differences can affect communication styles and preferences."
        },
        {
          id: 19,
          question: "What implements barcode scanning?",
          options: [
            "Medication safety practices",
            "Only inventory",
            "Patient records",
            "Insurance claims"
          ],
          correctAnswer: 0,
          explanation: "Barcode scanning helps verify medication accuracy during dispensing."
        },
        {
          id: 20,
          question: "What disposes of contaminated materials?",
          options: [
            "Safety practices",
            "Regular trash",
            "Recycling bins",
            "Patient returns"
          ],
          correctAnswer: 0,
          explanation: "Contaminated materials must be disposed of safely according to protocols."
        }
      ]
    }
  ],
  
  // FINAL EXAM
  finalExam: {
    title: "Pharmacy Technician Certificate Final Examination",
    description: "Comprehensive examination covering all six modules of the Pharmacy Technician Certificate program.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "Who do pharmacy technicians assist?",
        options: [
          "Licensed pharmacists",
          "Only patients",
          "Physicians only",
          "Nurses"
        ],
        correctAnswer: 0,
        explanation: "Pharmacy technicians work under the supervision of licensed pharmacists."
      },
      {
        id: 2,
        question: "What requires a doctor's authorization?",
        options: [
          "Prescription medications",
          "Over-the-counter medications",
          "Herbal supplements",
          "Vitamins"
        ],
        correctAnswer: 0,
        explanation: "Prescription medications require authorization from a licensed healthcare provider."
      },
      {
        id: 3,
        question: "What arrives directly from providers?",
        options: [
          "Electronic prescriptions",
          "Written prescriptions",
          "Verbal prescriptions",
          "Old prescriptions"
        ],
        correctAnswer: 0,
        explanation: "Electronic prescriptions are sent directly from healthcare providers to the pharmacy."
      },
      {
        id: 4,
        question: "What system is used for most pharmacy calculations?",
        options: [
          "Metric system",
          "Household system",
          "Apothecary system",
          "Imperial system"
        ],
        correctAnswer: 0,
        explanation: "The metric system is used for most professional pharmacy calculations."
      },
      {
        id: 5,
        question: "What regulates addictive medications?",
        options: [
          "Controlled Substances Act",
          "HIPAA",
          "Poison Prevention Act",
          "Drug Supply Chain Act"
        ],
        correctAnswer: 0,
        explanation: "The Controlled Substances Act regulates medications with abuse potential."
      },
      {
        id: 6,
        question: "What helps patients understand medications?",
        options: [
          "Clear communication",
          "Technical jargon",
          "Rushed explanations",
          "Complex language"
        ],
        correctAnswer: 0,
        explanation: "Clear, simple communication helps patients understand their medications."
      },
      {
        id: 7,
        question: "What is a key responsibility of pharmacy technicians?",
        options: [
          "Counting and preparing medications",
          "Diagnosing patients",
          "Prescribing medications",
          "Managing hospital wards"
        ],
        correctAnswer: 0,
        explanation: "Counting, measuring, and preparing medications are core technician responsibilities."
      },
      {
        id: 8,
        question: "What has the same active ingredients as brand names?",
        options: [
          "Generic medications",
          "Different medications",
          "Placebo medications",
          "Experimental drugs"
        ],
        correctAnswer: 0,
        explanation: "Generic medications contain the same active ingredients as brand name equivalents."
      },
      {
        id: 9,
        question: "What includes name and date of birth?",
        options: [
          "Patient information",
          "Prescriber information",
          "Medication information",
          "Insurance information"
        ],
        correctAnswer: 0,
        explanation: "Patient information on prescriptions includes name, date of birth, and other identifiers."
      },
      {
        id: 10,
        question: "What measures weight of solid medications?",
        options: [
          "Grams",
          "Milliliters",
          "Liters",
          "Cubic centimeters"
        ],
        correctAnswer: 0,
        explanation: "Grams measure the weight of solid medications in the metric system."
      },
      {
        id: 11,
        question: "What protects patient health information?",
        options: [
          "HIPAA",
          "Controlled Substances Act",
          "Food and Drug Act",
          "Poison Prevention Act"
        ],
        correctAnswer: 0,
        explanation: "HIPAA protects the privacy and security of patient health information."
      },
      {
        id: 12,
        question: "What may require interpreter?",
        options: [
          "Language differences",
          "All patients",
          "Only new patients",
          "Regular customers"
        ],
        correctAnswer: 0,
        explanation: "Language differences may require an interpreter for effective communication."
      },
      {
        id: 13,
        question: "What type of pharmacy serves the general public?",
        options: [
          "Community pharmacy",
          "Hospital pharmacy",
          "Nuclear pharmacy",
          "Oncology pharmacy"
        ],
        correctAnswer: 0,
        explanation: "Community pharmacies serve walk-in patients from the general public."
      },
      {
        id: 14,
        question: "What relieve pain for patients?",
        options: [
          "Analgesics",
          "Antibiotics",
          "Antihypertensives",
          "Antidiabetics"
        ],
        correctAnswer: 0,
        explanation: "Analgesics are medications that relieve pain."
      },
      {
        id: 15,
        question: "What is entered into pharmacy software?",
        options: [
          "Prescription information",
          "Only patient name",
          "Just medication name",
          "Insurance details only"
        ],
        correctAnswer: 0,
        explanation: "All prescription information must be accurately entered into pharmacy software systems."
      },
      {
        id: 16,
        question: "What equals approximately 5 milliliters?",
        options: [
          "Teaspoon",
          "Tablespoon",
          "Cup",
          "Ounce"
        ],
        correctAnswer: 0,
        explanation: "One teaspoon equals approximately 5 milliliters in household measurements."
      },
      {
        id: 17,
        question: "What licenses pharmacists?",
        options: [
          "State boards of pharmacy",
          "Federal government",
          "Pharmacy schools",
          "Hospitals"
        ],
        correctAnswer: 0,
        explanation: "State boards of pharmacy license pharmacists to practice in their state."
      },
      {
        id: 18,
        question: "What should be checked before dispensing?",
        options: [
          "Patient identity",
          "Only medication name",
          "Just prescription number",
          "Insurance details"
        ],
        correctAnswer: 0,
        explanation: "Patient identity must be verified before dispensing any medication."
      },
      {
        id: 19,
        question: "What is the top priority in pharmacy practice?",
        options: [
          "Patient safety",
          "Fast service",
          "Low costs",
          "Convenience"
        ],
        correctAnswer: 0,
        explanation: "Patient safety must always be the top priority in all pharmacy activities."
      },
      {
        id: 20,
        question: "What are taken by mouth?",
        options: [
          "Oral medications",
          "Topical medications",
          "Inhalation medications",
          "Injection medications"
        ],
        correctAnswer: 0,
        explanation: "Oral medications are taken by mouth, usually as tablets, capsules, or liquids."
      },
      {
        id: 21,
        question: "What uses counting trays?",
        options: [
          "Counting solid medications",
          "Measuring liquids",
          "Compounding creams",
          "Labeling containers"
        ],
        correctAnswer: 0,
        explanation: "Counting trays are used to count tablets and capsules accurately and efficiently."
      },
      {
        id: 22,
        question: "What is the basic dosage formula?",
        options: [
          "Dose = (Desired/Have) × Quantity",
          "Dose = Desired + Have",
          "Dose = Desired × Have",
          "Dose = Desired - Have"
        ],
        correctAnswer: 0,
        explanation: "The basic dosage formula is Dose = (Desired/Have) × Quantity."
      },
      {
        id: 23,
        question: "What means doing good for patients?",
        options: [
          "Beneficence",
          "Non-maleficence",
          "Justice",
          "Veracity"
        ],
        correctAnswer: 0,
        explanation: "Beneficence is the ethical principle of doing good for patients."
      },
      {
        id: 24,
        question: "What should be done frequently and properly?",
        options: [
          "Hand washing",
          "Only at start of day",
          "When visibly dirty",
          "Once per shift"
        ],
        correctAnswer: 0,
        explanation: "Hands should be washed frequently and properly to prevent infection spread."
      },
      {
        id: 25,
        question: "What do compounding pharmacies create?",
        options: [
          "Custom medications",
          "Only standard medications",
          "Over-the-counter drugs",
          "Vaccines only"
        ],
        correctAnswer: 0,
        explanation: "Compounding pharmacies create custom medications tailored to individual patient needs."
      },
      {
        id: 26,
        question: "What fight bacterial infections?",
        options: [
          "Antibiotics",
          "Analgesics",
          "Antihypertensives",
          "Antidiabetics"
        ],
        correctAnswer: 0,
        explanation: "Antibiotics are medications that fight bacterial infections."
      },
      {
        id: 27,
        question: "What contains essential information?",
        options: [
          "Primary label",
          "Auxiliary label",
          "Shipping label",
          "Inventory label"
        ],
        correctAnswer: 0,
        explanation: "The primary label contains essential medication information for the patient."
      },
      {
        id: 28,
        question: "What measures volume of liquid medications?",
        options: [
          "Milliliters",
          "Grams",
          "Micrograms",
          "Milligrams"
        ],
        correctAnswer: 0,
        explanation: "Milliliters measure the volume of liquid medications in the metric system."
      },
      {
        id: 29,
        question: "What controls technician registration?",
        options: [
          "State regulations",
          "Federal laws only",
          "Pharmacy owners",
          "Patient requests"
        ],
        correctAnswer: 0,
        explanation: "State regulations control the registration and requirements for pharmacy technicians."
      },
      {
        id: 30,
        question: "What uses open-ended questions?",
        options: [
          "Communication techniques",
          "Only closed questions",
          "Technical language",
          "Medical terminology"
        ],
        correctAnswer: 0,
        explanation: "Open-ended questions help gather more complete information from patients."
      },
      {
        id: 31,
        question: "What must be prevented in pharmacy practice?",
        options: [
          "Medication errors",
          "All patient questions",
          "Insurance claims",
          "Inventory management"
        ],
        correctAnswer: 0,
        explanation: "Preventing medication errors is crucial for patient safety in pharmacy practice."
      },
      {
        id: 32,
        question: "What are applied to skin?",
        options: [
          "Topical medications",
          "Oral medications",
          "Inhalation medications",
          "Injection medications"
        ],
        correctAnswer: 0,
        explanation: "Topical medications are applied directly to the skin."
      },
      {
        id: 33,
        question: "What determines copayment amount?",
        options: [
          "Insurance processing",
          "Medication counting",
          "Label printing",
          "Patient counseling"
        ],
        correctAnswer: 0,
        explanation: "Insurance processing determines the patient's copayment or coinsurance amount."
      },
      {
        id: 34,
        question: "What equals approximately 15 milliliters?",
        options: [
          "Tablespoon",
          "Teaspoon",
          "Cup",
          "Ounce"
        ],
        correctAnswer: 0,
        explanation: "One tablespoon equals approximately 15 milliliters in household measurements."
      },
      {
        id: 35,
        question: "What must contain specific elements?",
        options: [
          "Valid prescriptions",
          "All medication orders",
          "Only controlled substances",
          "Just refill requests"
        ],
        correctAnswer: 0,
        explanation: "Valid prescriptions must contain specific required elements to be legally valid."
      },
      {
        id: 36,
        question: "What needs clear speech?",
        options: [
          "Hearing impairments",
          "All patients",
          "Only elderly patients",
          "New prescriptions"
        ],
        correctAnswer: 0,
        explanation: "Patients with hearing impairments need clear, well-articulated speech."
      },
      {
        id: 37,
        question: "What protects personal health information?",
        options: [
          "Patient confidentiality",
          "Public sharing",
          "Team discussions",
          "Open records"
        ],
        correctAnswer: 0,
        explanation: "Patient confidentiality protects personal health information from unauthorized disclosure."
      },
      {
        id: 38,
        question: "What can be purchased without prescription?",
        options: [
          "Over-the-counter medications",
          "Controlled substances",
          "Prescription drugs",
          "Narcotics"
        ],
        correctAnswer: 0,
        explanation: "Over-the-counter medications can be purchased without a prescription."
      },
      {
        id: 39,
        question: "What uses graduated cylinders?",
        options: [
          "Measuring liquid medications",
          "Counting tablets",
          "Printing labels",
          "Entering data"
        ],
        correctAnswer: 0,
        explanation: "Graduated cylinders are used to measure liquid medications accurately."
      },
      {
        id: 40,
        question: "What should be verified at each step?",
        options: [
          "Medication accuracy",
          "Only at final step",
          "Just patient name",
          "Insurance coverage"
        ],
        correctAnswer: 0,
        explanation: "Medication accuracy should be verified at each step of the dispensing process."
      }
    ]
  }
};
