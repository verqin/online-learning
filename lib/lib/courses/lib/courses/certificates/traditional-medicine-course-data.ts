// Traditional Medicine (Certificate) Course Data
// Complete with 6 modules and final exam

export const traditionalMedicineCertificate = {
  // COURSE METADATA
  id: "traditional-medicine-certificate",
  title: "Traditional Medicine (Certificate)",
  description: "Learn the fundamentals of traditional healing systems, herbal remedies, and holistic wellness practices from various cultural traditions around the world.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌿",
  badge: "Certificate",
  
  // MODULE 1: Introduction to Traditional Medicine
  modules: [
    {
      id: 1,
      title: "Foundations of Traditional Healing",
      completed: false,
      content: `
## **Understanding Traditional Medicine**

Traditional medicine refers to health practices, approaches, knowledge, and beliefs that incorporate plant, animal, and mineral-based medicines, spiritual therapies, and manual techniques applied singularly or in combination to maintain well-being and treat illnesses.

### **Core Principles**

**Holistic Approach** views the person as a whole being - body, mind, and spirit are interconnected. Traditional medicine treats the whole person, not just the symptoms.

**Natural Healing** believes the body has innate healing abilities. Traditional practices aim to support and enhance the body's natural healing processes.

**Prevention Focus** emphasizes maintaining health and preventing illness before it occurs. Daily practices, diet, and lifestyle are considered essential for wellness.

**Balance and Harmony** seeks to restore balance within the body and between the individual and their environment. Illness is often seen as imbalance.

**Cultural Context** recognizes that healing practices are deeply rooted in cultural beliefs, traditions, and knowledge passed down through generations.

### **Major Systems Overview**

**Traditional Chinese Medicine** from China includes acupuncture, herbal medicine, and qigong. It focuses on balancing qi (energy) flow.

**Ayurveda** from India emphasizes balance among three doshas (body types) through diet, herbs, yoga, and meditation.

**Native American Medicine** includes herbal knowledge, sweat lodges, and ceremonial healing practices connected to nature and community.

**African Traditional Medicine** uses herbs, spiritual rituals, and bone setting. It often involves healers who diagnose through spiritual means.

**European Herbalism** has roots in Greek, Roman, and Celtic traditions using local plants for healing, often combined with folk wisdom.

### **Key Concepts**

**Energy Systems** appear in many traditions - called qi in Chinese medicine, prana in Ayurveda, or life force in various systems.

**Constitution Types** categorize people based on physical and emotional characteristics to guide treatment. Ayurveda uses vata, pitta, kapha types.

**Seasonal Awareness** recognizes that health needs change with seasons. Different foods, herbs, and practices are recommended for different times of year.

**Mind-Body Connection** acknowledges that emotional and mental states affect physical health. Many traditions include practices for emotional balance.

**Community Healing** often involves family and community in the healing process, recognizing social connections as part of wellness.

### **Modern Integration**

**Complementary Medicine** uses traditional practices alongside conventional medicine. Many people combine both approaches for comprehensive care.

**Evidence-Based Research** is growing to understand how traditional remedies work and validate their effectiveness through scientific study.

**Cultural Preservation** efforts work to protect traditional knowledge from being lost as elders pass away and lifestyles change.

**Sustainable Harvesting** ensures medicinal plants are collected responsibly to protect species and ecosystems for future generations.

**Quality Standards** are being developed for traditional remedies to ensure safety, purity, and consistent potency.
`,
      quiz: [
        {
          id: 1,
          question: "What does traditional medicine incorporate?",
          options: [
            "Plant, animal, and mineral-based medicines",
            "Only pharmaceutical drugs",
            "Surgery techniques only",
            "Laboratory equipment"
          ],
          correctAnswer: 0,
          explanation: "Traditional medicine incorporates natural substances, spiritual therapies, and manual techniques from various cultures."
        },
        {
          id: 2,
          question: "What does holistic approach mean?",
          options: [
            "Treating body, mind, and spirit as interconnected",
            "Focusing only on physical symptoms",
            "Using only one treatment method",
            "Ignoring emotional health"
          ],
          correctAnswer: 0,
          explanation: "Holistic approach views the person as a whole being with interconnected physical, mental, and spiritual aspects."
        },
        {
          id: 3,
          question: "What does traditional medicine emphasize about the body?",
          options: [
            "Natural healing abilities",
            "Dependence on drugs only",
            "Inability to heal itself",
            "Need for constant intervention"
          ],
          correctAnswer: 0,
          explanation: "Traditional medicine believes the body has innate healing abilities that practices aim to support."
        },
        {
          id: 4,
          question: "Where does Ayurveda originate?",
          options: [
            "India",
            "China",
            "Africa",
            "Europe"
          ],
          correctAnswer: 0,
          explanation: "Ayurveda is the traditional healing system of India, dating back thousands of years."
        },
        {
          id: 5,
          question: "What does balance and harmony seek to restore?",
          options: [
            "Balance within body and with environment",
            "Only financial balance",
            "Social status only",
            "Physical strength alone"
          ],
          correctAnswer: 0,
          explanation: "Balance and harmony refer to restoring equilibrium within the body and between the individual and their surroundings."
        },
        {
          id: 6,
          question: "What is qi in Chinese medicine?",
          options: [
            "Life energy or vital force",
            "A type of herb",
            "A breathing technique",
            "A meditation practice"
          ],
          correctAnswer: 0,
          explanation: "Qi is the vital energy or life force that flows through the body in Traditional Chinese Medicine."
        },
        {
          id: 7,
          question: "What does prevention focus mean?",
          options: [
            "Maintaining health before illness occurs",
            "Only treating serious diseases",
            "Ignoring early symptoms",
            "Waiting until sick to act"
          ],
          correctAnswer: 0,
          explanation: "Prevention focus emphasizes daily practices and lifestyle choices to maintain health and prevent illness."
        },
        {
          id: 8,
          question: "What are doshas in Ayurveda?",
          options: [
            "Body type classifications",
            "Meditation techniques",
            "Herbal formulas",
            "Breathing exercises"
          ],
          correctAnswer: 0,
          explanation: "Doshas are the three body types (vata, pitta, kapha) in Ayurvedic medicine that guide treatment."
        },
        {
          id: 9,
          question: "What does cultural context recognize?",
          options: [
            "Roots in cultural beliefs and traditions",
            "Only scientific validation matters",
            "One system works for everyone",
            "Modern medicine is always superior"
          ],
          correctAnswer: 0,
          explanation: "Cultural context recognizes that healing practices develop within specific cultural frameworks and traditions."
        },
        {
          id: 10,
          question: "What is complementary medicine?",
          options: [
            "Using traditional practices with conventional medicine",
            "Replacing all conventional treatments",
            "Only using traditional methods",
            "Ignoring modern medicine completely"
          ],
          correctAnswer: 0,
          explanation: "Complementary medicine integrates traditional practices with conventional medical treatments."
        },
        {
          id: 11,
          question: "What does mind-body connection acknowledge?",
          options: [
            "Emotional states affect physical health",
            "Only physical factors matter",
            "Mind and body are separate",
            "Emotions don't impact health"
          ],
          correctAnswer: 0,
          explanation: "Mind-body connection recognizes that emotional and mental states influence physical health and healing."
        },
        {
          id: 12,
          question: "What are Native American sweat lodges?",
          options: [
            "Ceremonial healing structures",
            "Storage buildings for herbs",
            "Living quarters for healers",
            "Cooking facilities"
          ],
          correctAnswer: 0,
          explanation: "Sweat lodges are ceremonial structures used for purification and healing in Native American traditions."
        },
        {
          id: 13,
          question: "What does seasonal awareness recognize?",
          options: [
            "Health needs change with seasons",
            "Same treatments work year-round",
            "Only summer matters for health",
            "Winter requires no special care"
          ],
          correctAnswer: 0,
          explanation: "Seasonal awareness recognizes that different seasons affect health differently and require different approaches."
        },
        {
          id: 14,
          question: "What is prana in Ayurveda?",
          options: [
            "Life force or vital energy",
            "A type of massage",
            "A dietary restriction",
            "A meditation posture"
          ],
          correctAnswer: 0,
          explanation: "Prana is the vital life force or energy in Ayurvedic and yogic traditions."
        },
        {
          id: 15,
          question: "What does community healing involve?",
          options: [
            "Family and community in healing process",
            "Only individual treatment",
            "Isolation from others",
            "Medical professionals only"
          ],
          correctAnswer: 0,
          explanation: "Community healing recognizes that social connections and community support are important for wellness."
        },
        {
          id: 16,
          question: "What is European herbalism based on?",
          options: [
            "Greek, Roman, and Celtic traditions",
            "Only modern science",
            "Asian practices only",
            "African rituals"
          ],
          correctAnswer: 0,
          explanation: "European herbalism has roots in ancient Greek, Roman, and Celtic healing traditions using local plants."
        },
        {
          id: 17,
          question: "What does evidence-based research do?",
          options: [
            "Validates traditional remedies scientifically",
            "Discards all traditional knowledge",
            "Only accepts ancient texts",
            "Ignores modern methods"
          ],
          correctAnswer: 0,
          explanation: "Evidence-based research studies traditional remedies using scientific methods to understand their effectiveness."
        },
        {
          id: 18,
          question: "What does sustainable harvesting ensure?",
          options: [
            "Medicinal plants are collected responsibly",
            "Maximum profit from plants",
            "Quick collection methods",
            "Using all plants immediately"
          ],
          correctAnswer: 0,
          explanation: "Sustainable harvesting ensures medicinal plants are collected in ways that protect species and ecosystems."
        },
        {
          id: 19,
          question: "What are constitution types for?",
          options: [
            "Guiding personalized treatment",
            "Labeling people permanently",
            "Determining social status",
            "Choosing careers only"
          ],
          correctAnswer: 0,
          explanation: "Constitution types help guide personalized treatment approaches based on individual characteristics."
        },
        {
          id: 20,
          question: "What does cultural preservation aim to protect?",
          options: [
            "Traditional knowledge from being lost",
            "Only modern medical advances",
            "Pharmaceutical patents",
            "Hospital buildings"
          ],
          correctAnswer: 0,
          explanation: "Cultural preservation aims to protect traditional healing knowledge as elders pass away and lifestyles change."
        }
      ]
    },

    // MODULE 2: Herbal Medicine Fundamentals
    {
      id: 2,
      title: "Herbal Medicine Basics",
      completed: false,
      content: `
## **Introduction to Herbal Medicine**

Herbal medicine uses plants or plant extracts for healing. It is the foundation of most traditional medicine systems worldwide.

### **Plant Parts Used**

**Leaves** are often used fresh or dried for teas, poultices, or extracts. Examples include mint, basil, and sage leaves.

**Roots** and rhizomes are typically dried and powdered or made into decoctions. Examples include ginger, turmeric, and ginseng roots.

**Bark** from trees is harvested sustainably and used for teas or tinctures. Examples include cinnamon bark and willow bark.

**Flowers** are collected when in bloom for gentle remedies. Examples include chamomile, lavender, and calendula flowers.

**Seeds** and berries are used whole, crushed, or extracted. Examples include fennel seeds, juniper berries, and black pepper.

**Resins** are sticky plant secretions with strong medicinal properties. Examples include frankincense and myrrh resins.

### **Preparation Methods**

**Teas** are made by steeping herbs in hot water. Infusions use delicate parts like leaves and flowers. Decoctions boil tougher parts like roots and bark.

**Tinctures** are alcohol extracts that preserve herbs for long periods. They concentrate medicinal properties for easy dosing.

**Poultices** apply crushed fresh herbs directly to the skin. They are used for wounds, bruises, or localized pain.

**Salves** and ointments combine herbs with oils and beeswax for topical application. They soothe skin conditions and muscle aches.

**Capsules** contain dried, powdered herbs for convenient oral administration without taste concerns.

**Essential Oils** are concentrated plant oils extracted through distillation. They are used in aromatherapy and diluted topical applications.

### **Safety Guidelines**

**Proper Identification** is crucial to avoid poisonous plants. Learn from experienced herbalists or use reliable guides.

**Correct Dosing** follows traditional recommendations and considers individual factors like age, health status, and body weight.

**Quality Sources** ensure herbs are grown without pesticides, harvested at right time, and stored properly to maintain potency.

**Allergy Awareness** requires testing small amounts first, especially with new herbs or sensitive individuals.

**Drug Interactions** must be considered when using herbs with pharmaceutical medications. Some combinations can be dangerous.

**Pregnancy Caution** requires special care as some herbs can affect pregnancy. Consult knowledgeable practitioners.

### **Common Medicinal Herbs**

**Chamomile** is calming for nerves and digestive issues. It makes a gentle tea for relaxation and sleep support.

**Ginger** aids digestion, reduces nausea, and has anti-inflammatory properties. Used fresh, dried, or as tea.

**Garlic** has antimicrobial properties and supports cardiovascular health. Used fresh in food or as supplements.

**Turmeric** contains curcumin with strong anti-inflammatory effects. Used in cooking or as supplements.

**Peppermint** soothes digestive discomfort and headaches. Used as tea or inhaled for respiratory issues.

**Echinacea** supports immune system during cold season. Used at first signs of illness.

**Lavender** promotes relaxation and sleep. Used in teas, baths, or as essential oil.

### **Harvesting Ethics**

**Sustainable Practices** take only what is needed and leave enough plants for regeneration and wildlife.

**Respectful Harvesting** asks permission from plants in some traditions and gives thanks for their gifts.

**Proper Timing** harvests plants when medicinal compounds are most potent - often specific seasons or times of day.

**Legal Considerations** follow regulations about protected species and harvesting on public or private lands.

**Cultural Protocols** respect traditional harvesting rules and sacred sites in indigenous traditions.
`,
      quiz: [
        {
          id: 1,
          question: "What does herbal medicine use for healing?",
          options: [
            "Plants or plant extracts",
            "Only synthetic chemicals",
            "Animal products only",
            "Minerals exclusively"
          ],
          correctAnswer: 0,
          explanation: "Herbal medicine uses various parts of plants for medicinal purposes in different preparations."
        },
        {
          id: 2,
          question: "What plant part is typically used for teas?",
          options: [
            "Leaves and flowers",
            "Only roots",
            "Just bark",
            "Only seeds"
          ],
          correctAnswer: 0,
          explanation: "Leaves and flowers are commonly used to make herbal teas through steeping in hot water."
        },
        {
          id: 3,
          question: "What are tinctures?",
          options: [
            "Alcohol extracts of herbs",
            "Fresh herb salads",
            "Dried flower arrangements",
            "Powdered root snacks"
          ],
          correctAnswer: 0,
          explanation: "Tinctures are concentrated alcohol extracts that preserve herbal medicines for long periods."
        },
        {
          id: 4,
          question: "Why is proper plant identification crucial?",
          options: [
            "To avoid poisonous plants",
            "For aesthetic purposes only",
            "To count plant species",
            "For gardening contests"
          ],
          correctAnswer: 0,
          explanation: "Proper identification is essential because some plants have poisonous look-alikes."
        },
        {
          id: 5,
          question: "What does chamomile help with?",
          options: [
            "Calming nerves and digestion",
            "Increasing energy only",
            "Building muscle",
            "Lowering blood pressure only"
          ],
          correctAnswer: 0,
          explanation: "Chamomile is known for its calming effects on the nervous system and digestive tract."
        },
        {
          id: 6,
          question: "What are poultices used for?",
          options: [
            "Direct skin application for wounds",
            "Internal consumption only",
            "Room decoration",
            "Insect repellent"
          ],
          correctAnswer: 0,
          explanation: "Poultices apply crushed fresh herbs directly to skin for localized treatment of wounds or pain."
        },
        {
          id: 7,
          question: "What does ginger commonly help?",
          options: [
            "Digestion and nausea",
            "Only skin conditions",
            "Hair growth",
            "Bone strength"
          ],
          correctAnswer: 0,
          explanation: "Ginger is widely used for digestive issues, nausea relief, and its anti-inflammatory properties."
        },
        {
          id: 8,
          question: "What are essential oils?",
          options: [
            "Concentrated plant oils from distillation",
            "Cooking vegetable oils",
            "Mineral oils for machinery",
            "Synthetic fragrance oils"
          ],
          correctAnswer: 0,
          explanation: "Essential oils are highly concentrated plant oils extracted through steam distillation or cold pressing."
        },
        {
          id: 9,
          question: "Why consider drug interactions with herbs?",
          options: [
            "Some combinations can be dangerous",
            "Herbs have no interactions",
            "Only prescription drugs matter",
            "Interactions are always positive"
          ],
          correctAnswer: 0,
          explanation: "Some herbs can interact with pharmaceutical drugs, potentially causing adverse effects."
        },
        {
          id: 10,
          question: "What does sustainable harvesting mean?",
          options: [
            "Taking only what is needed for regeneration",
            "Harvesting everything available",
            "Only using cultivated plants",
            "Ignoring plant populations"
          ],
          correctAnswer: 0,
          explanation: "Sustainable harvesting ensures enough plants remain for regeneration and ecosystem health."
        },
        {
          id: 11,
          question: "What are salves and ointments?",
          options: [
            "Herbal preparations for skin application",
            "Internal medicines only",
            "Aromatherapy diffusers",
            "Herbal teas"
          ],
          correctAnswer: 0,
          explanation: "Salves and ointments combine herbs with oils and waxes for topical skin applications."
        },
        {
          id: 12,
          question: "What does garlic support?",
          options: [
            "Cardiovascular health",
            "Only respiratory system",
            "Just bone health",
            "Eye health exclusively"
          ],
          correctAnswer: 0,
          explanation: "Garlic is known for supporting cardiovascular health and having antimicrobial properties."
        },
        {
          id: 13,
          question: "What is decoction?",
          options: [
            "Boiling tough plant parts like roots",
            "Steeping delicate flowers",
            "Freezing herbs",
            "Fermenting plants"
          ],
          correctAnswer: 0,
          explanation: "Decoction involves boiling tougher plant parts like roots and bark to extract medicinal compounds."
        },
        {
          id: 14,
          question: "What does echinacea support?",
          options: [
            "Immune system during colds",
            "Only digestive system",
            "Just skin health",
            "Bone density exclusively"
          ],
          correctAnswer: 0,
          explanation: "Echinacea is commonly used to support immune function, especially at cold onset."
        },
        {
          id: 15,
          question: "Why harvest at proper timing?",
          options: [
            "Medicinal compounds are most potent",
            "Plants look prettier",
            "Easier to find plants",
            "Better for photography"
          ],
          correctAnswer: 0,
          explanation: "Proper timing ensures maximum medicinal potency when plant compounds are at their peak."
        },
        {
          id: 16,
          question: "What are capsules for?",
          options: [
            "Convenient oral herb administration",
            "Only topical application",
            "Plant storage",
            "Seed planting"
          ],
          correctAnswer: 0,
          explanation: "Capsules contain powdered herbs for convenient oral consumption without taste concerns."
        },
        {
          id: 17,
          question: "What does turmeric contain?",
          options: [
            "Curcumin with anti-inflammatory effects",
            "Only coloring agents",
            "Just flavor compounds",
            "Toxic substances"
          ],
          correctAnswer: 0,
          explanation: "Turmeric contains curcumin, which has strong anti-inflammatory and antioxidant properties."
        },
        {
          id: 18,
          question: "What is respectful harvesting?",
          options: [
            "Asking permission and giving thanks",
            "Taking whatever you want",
            "Harvesting secretly",
            "Ignoring plant needs"
          ],
          correctAnswer: 0,
          explanation: "Respectful harvesting involves acknowledging plants as living beings and expressing gratitude."
        },
        {
          id: 19,
          question: "What does peppermint soothe?",
          options: [
            "Digestive discomfort and headaches",
            "Only joint pain",
            "Just skin rashes",
            "Eye strain exclusively"
          ],
          correctAnswer: 0,
          explanation: "Peppermint is known for soothing digestive issues, headaches, and respiratory congestion."
        },
        {
          id: 20,
          question: "Why consider pregnancy with herbs?",
          options: [
            "Some herbs can affect pregnancy",
            "All herbs are safe in pregnancy",
            "Pregnancy doesn't matter",
            "Only prescription drugs affect pregnancy"
          ],
          correctAnswer: 0,
          explanation: "Some herbs can affect pregnancy, so special caution and professional guidance are needed."
        }
      ]
    },

    // MODULE 3: Traditional Chinese Medicine
    {
      id: 3,
      title: "Traditional Chinese Medicine Principles",
      completed: false,
      content: `
## **Fundamentals of Chinese Medicine**

Traditional Chinese Medicine (TCM) is a complete medical system that has been practiced for over 2,500 years. It views health as harmony within the body and with the environment.

### **Core Concepts**

**Qi (Chi)** is the vital life energy that flows through the body. Good health requires smooth, balanced qi flow. Blockages or deficiencies cause illness.

**Yin and Yang** are complementary opposites that must balance. Yin is cool, moist, and passive. Yang is warm, dry, and active. Health requires yin-yang balance.

**Five Elements** (Wood, Fire, Earth, Metal, Water) correspond to organs, seasons, emotions, and colors. They interact in generating and controlling cycles.

**Meridians** are energy channels through which qi flows. There are 12 main meridians connected to specific organs.

**Zang-Fu Organs** include both solid (zang) and hollow (fu) organs that have broader functions than Western anatomical definitions.

### **Diagnostic Methods**

**Observation** examines tongue color, coating, shape, and moisture. Different areas correspond to different organs.

**Listening and Smelling** notices voice quality, breathing sounds, and body odors that indicate internal conditions.

**Questioning** explores symptoms, emotions, appetite, sleep, and preferences for hot or cold.

**Palpation** includes pulse diagnosis at three positions on each wrist, each position corresponding to different organs.

**Abdominal Diagnosis** palpates different abdominal areas to assess organ conditions and energy flow.

### **Treatment Modalities**

**Acupuncture** inserts fine needles at specific points to regulate qi flow. Points lie along meridians and affect corresponding organs.

**Herbal Medicine** uses complex formulas with multiple herbs that work together. Formulas are customized for each person's pattern.

**Moxibustion** burns mugwort near acupuncture points to warm and stimulate qi flow. Especially good for cold conditions.

**Cupping** uses suction cups on skin to improve circulation, relieve pain, and remove stagnation.

**Tui Na Massage** is therapeutic massage that follows meridian pathways to move qi and blood.

**Qigong and Tai Chi** are movement practices that cultivate and balance qi through gentle exercises, breathing, and meditation.

### **Pattern Identification**

**Eight Principles** differentiate conditions as interior/exterior, hot/cold, excess/deficiency, yin/yang.

**Qi Disorders** include qi deficiency (fatigue), qi stagnation (pain), qi sinking (prolapse), or rebellious qi (nausea).

**Blood Disorders** involve blood deficiency (pale complexion), blood stagnation (sharp pain), or blood heat (bleeding).

**Fluid Disorders** include phlegm (congestion) or dampness (heaviness, swelling).

**Organ Patterns** identify which organ systems are affected, such as liver qi stagnation or kidney yang deficiency.

### **Common Formulas**

**Gui Pi Tang** nourishes heart and spleen for insomnia, anxiety, and fatigue from overthinking.

**Xiao Yao San** spreads liver qi for stress, irritability, and menstrual irregularities.

**Bu Zhong Yi Qi Tang** raises qi for fatigue, prolapse, and weak digestion.

**Liu Wei Di Huang Wan** nourishes kidney yin for dizziness, tinnitus, and night sweats.

**Yin Qiao San** releases exterior wind-heat for early stage colds with sore throat and fever.
`,
      quiz: [
        {
          id: 1,
          question: "What is qi in Chinese medicine?",
          options: [
            "Vital life energy",
            "A type of herb",
            "Breathing technique",
            "Massage method"
          ],
          correctAnswer: 0,
          explanation: "Qi is the vital life energy that flows through the body in Traditional Chinese Medicine."
        },
        {
          id: 2,
          question: "What must balance for health in TCM?",
          options: [
            "Yin and yang",
            "Only physical strength",
            "Just emotions",
            "Diet alone"
          ],
          correctAnswer: 0,
          explanation: "Balance between yin (cool, moist) and yang (warm, dry) is essential for health in TCM."
        },
        {
          id: 3,
          question: "What does acupuncture regulate?",
          options: [
            "Qi flow through meridians",
            "Only blood pressure",
            "Just muscle tension",
            "Brain waves only"
          ],
          correctAnswer: 0,
          explanation: "Acupuncture regulates the flow of qi through meridian pathways using fine needles at specific points."
        },
        {
          id: 4,
          question: "What are the Five Elements?",
          options: [
            "Wood, Fire, Earth, Metal, Water",
            "Air, Water, Fire, Earth, Ether",
            "Hot, Cold, Dry, Wet, Neutral",
            "Sweet, Sour, Bitter, Salty, Spicy"
          ],
          correctAnswer: 0,
          explanation: "The Five Elements in TCM are Wood, Fire, Earth, Metal, and Water, each corresponding to different aspects."
        },
        {
          id: 5,
          question: "What does tongue observation examine?",
          options: [
            "Color, coating, shape, moisture",
            "Only taste buds",
            "Just tongue length",
            "Speech patterns only"
          ],
          correctAnswer: 0,
          explanation: "Tongue diagnosis examines color, coating, shape, and moisture, with different areas corresponding to organs."
        },
        {
          id: 6,
          question: "What is moxibustion?",
          options: [
            "Burning mugwort to warm points",
            "Needle insertion only",
            "Herbal tea drinking",
            "Skin scraping"
          ],
          correctAnswer: 0,
          explanation: "Moxibustion involves burning mugwort near acupuncture points to warm and stimulate qi flow."
        },
        {
          id: 7,
          question: "What are meridians?",
          options: [
            "Energy channels for qi flow",
            "Blood vessels only",
            "Nerve pathways",
            "Lymphatic vessels"
          ],
          correctAnswer: 0,
          explanation: "Meridians are the energy channels through which qi flows, connecting to specific organs."
        },
        {
          id: 8,
          question: "What does pulse diagnosis assess?",
          options: [
            "Organ conditions and qi flow",
            "Only heart rate",
            "Just blood pressure",
            "Circulation speed only"
          ],
          correctAnswer: 0,
          explanation: "Pulse diagnosis at three wrist positions assesses conditions of different organs and qi flow."
        },
        {
          id: 9,
          question: "What are zang-fu organs?",
          options: [
            "Solid and hollow organs with broad functions",
            "Only digestive organs",
            "Just the five senses",
            "External body parts"
          ],
          correctAnswer: 0,
          explanation: "Zang-fu organs include both solid (zang) and hollow (fu) organs with functions beyond Western anatomy."
        },
        {
          id: 10,
          question: "What does cupping improve?",
          options: [
            "Circulation and removes stagnation",
            "Only muscle size",
            "Just skin appearance",
            "Bone density"
          ],
          correctAnswer: 0,
          explanation: "Cupping uses suction to improve circulation, relieve pain, and remove stagnation from tissues."
        },
        {
          id: 11,
          question: "What are the Eight Principles?",
          options: [
            "Interior/exterior, hot/cold, excess/deficiency, yin/yang",
            "Only yin and yang",
            "Just hot and cold",
            "Emotional states only"
          ],
          correctAnswer: 0,
          explanation: "The Eight Principles differentiate conditions as interior/exterior, hot/cold, excess/deficiency, yin/yang."
        },
        {
          id: 12,
          question: "What is Tui Na?",
          options: [
            "Therapeutic massage following meridians",
            "Only foot massage",
            "Head massage only",
            "Self-massage technique"
          ],
          correctAnswer: 0,
          explanation: "Tui Na is Chinese therapeutic massage that follows meridian pathways to move qi and blood."
        },
        {
          id: 13,
          question: "What does qi deficiency cause?",
          options: [
            "Fatigue and weakness",
            "Only pain",
            "Just fever",
            "Skin rashes"
          ],
          correctAnswer: 0,
          explanation: "Qi deficiency typically causes fatigue, weakness, shortness of breath, and poor immunity."
        },
        {
          id: 14,
          question: "What are qigong and tai chi?",
          options: [
            "Movement practices cultivating qi",
            "Only fighting arts",
            "Dance forms",
            "Strength training"
          ],
          correctAnswer: 0,
          explanation: "Qigong and tai chi are gentle movement practices that cultivate and balance qi through exercise and meditation."
        },
        {
          id: 15,
          question: "What does blood stagnation cause?",
          options: [
            "Sharp, fixed pain",
            "Only bleeding",
            "Just fatigue",
            "Skin dryness"
          ],
          correctAnswer: 0,
          explanation: "Blood stagnation causes sharp, stabbing pain in fixed locations, often with dark complexion."
        },
        {
          id: 16,
          question: "How are TCM herbal formulas typically used?",
          options: [
            "Customized combinations for each person",
            "Single herbs only",
            "Standard formulas for everyone",
            "Only external applications"
          ],
          correctAnswer: 0,
          explanation: "TCM uses complex herbal formulas customized to each person's specific pattern of imbalance."
        },
        {
          id: 17,
          question: "What does phlegm refer to in TCM?",
          options: [
            "Congestion and mucus",
            "Only lung fluid",
            "Just saliva",
            "Digestive juices"
          ],
          correctAnswer: 0,
          explanation: "Phlegm in TCM refers to pathological fluid that can cause congestion, lumps, or mental fog."
        },
        {
          id: 18,
          question: "What does Xiao Yao San help?",
          options: [
            "Stress and irritability",
            "Only physical pain",
            "Just digestive issues",
            "Skin problems exclusively"
          ],
          correctAnswer: 0,
          explanation: "Xiao Yao San helps spread liver qi stagnation, addressing stress, irritability, and menstrual issues."
        },
        {
          id: 19,
          question: "What does dampness cause?",
          options: [
            "Heaviness and swelling",
            "Only dryness",
            "Just heat sensations",
            "Cold feelings only"
          ],
          correctAnswer: 0,
          explanation: "Dampness causes sensations of heaviness, swelling, sluggishness, and cloudy thinking."
        },
        {
          id: 20,
          question: "What does Yin Qiao San treat?",
          options: [
            "Early stage colds with sore throat",
            "Only chronic fatigue",
            "Just digestive disorders",
            "Skin conditions exclusively"
          ],
          correctAnswer: 0,
          explanation: "Yin Qiao San releases exterior wind-heat, treating early stage colds with sore throat and fever."
        }
      ]
    },

    // MODULE 4: Ayurvedic Medicine
    {
      id: 4,
      title: "Ayurvedic Healing System",
      completed: false,
      content: `
## **Introduction to Ayurveda**

Ayurveda is India's traditional healing system, meaning "science of life." It emphasizes balance among body, mind, and consciousness through natural approaches.

### **Fundamental Principles**

**Five Elements** (Ether, Air, Fire, Water, Earth) combine to form three doshas. Everything in the universe contains these elements.

**Three Doshas** are biological energies: Vata (air/ether), Pitta (fire/water), and Kapha (water/earth). Each person has a unique combination.

**Seven Tissues** (dhatus) form the physical body: plasma, blood, muscle, fat, bone, marrow/nerves, and reproductive tissue.

**Agni** is digestive fire that transforms food into energy and tissues. Strong agni means good digestion and immunity.

**Ama** is toxic residue from poorly digested food, emotions, or experiences. It clogs channels and causes disease.

**Srotas** are bodily channels through which nutrients, energy, and waste flow. Blocked srotas lead to illness.

### **Dosha Characteristics**

**Vata Dosha** governs movement, creativity, and nervous system. Vata types are thin, energetic, creative, and prone to anxiety when imbalanced.

**Pitta Dosha** governs metabolism, digestion, and transformation. Pitta types are medium build, focused, ambitious, and prone to anger when imbalanced.

**Kapha Dosha** governs structure, stability, and lubrication. Kapha types are solid build, calm, nurturing, and prone to attachment when imbalanced.

**Prakruti** is one's natural constitution - the balance of doshas at birth. This remains constant throughout life.

**Vikruti** is current state of dosha balance, which can deviate from prakruti due to lifestyle, diet, and environment.

### **Daily Routines (Dinacharya)**

**Morning Routine** includes waking before sunrise, tongue scraping, oil pulling, self-massage, and meditation.

**Eating Habits** emphasize eating at regular times, in calm environment, with attention to food. Lunch should be largest meal.

**Exercise** should be appropriate for dosha type and season. Yoga asanas balance all doshas when practiced mindfully.

**Sleep** should be before 10 PM for optimal rest. Sleeping on the left side aids digestion.

**Seasonal Routine** (Ritucharya) adjusts diet and activities for each season to maintain balance.

### **Ayurvedic Treatments**

**Panchakarma** is detoxification therapy including five actions: vomiting, purgation, enema, nasal administration, and blood cleansing.

**Abhyanga** is warm oil massage that calms nervous system, lubricates joints, and nourishes tissues.

**Shirodhara** pours warm oil on forehead to calm mind, improve sleep, and balance nervous system.

**Herbal Medicines** use plants like turmeric, ashwagandha, triphala, and holy basil in various preparations.

**Diet Therapy** recommends foods based on dosha balance, season, and individual needs. Six tastes should be included.

### **Diagnostic Methods**

**Pulse Diagnosis** (Nadi Pariksha) reads subtle vibrations at radial artery to assess dosha balance and organ health.

**Tongue Diagnosis** examines color, coating, shape, and markings to reveal digestive status and dosha imbalances.

**Eye Examination** observes sclera color, clarity, and vascular patterns for insights into liver and blood health.

**Urine Examination** assesses color, odor, and foam pattern to evaluate kidney function and dosha states.

**Questioning** explores digestion, sleep, emotions, preferences, and overall lifestyle patterns.
`,
      quiz: [
        {
          id: 1,
          question: "What does Ayurveda mean?",
          options: [
            "Science of life",
            "Art of healing",
            "Plant medicine",
            "Energy balance"
          ],
          correctAnswer: 0,
          explanation: "Ayurveda translates as 'science of life' from Sanskrit, emphasizing holistic living and balance."
        },
        {
          id: 2,
          question: "What are the three doshas?",
          options: [
            "Vata, Pitta, Kapha",
            "Air, Fire, Water",
            "Hot, Cold, Neutral",
            "Mind, Body, Spirit"
          ],
          correctAnswer: 0,
          explanation: "The three doshas are Vata (air/ether), Pitta (fire/water), and Kapha (water/earth)."
        },
        {
          id: 3,
          question: "What does Vata dosha govern?",
          options: [
            "Movement and nervous system",
            "Only digestion",
            "Just structure",
            "Emotions only"
          ],
          correctAnswer: 0,
          explanation: "Vata dosha governs all movement in the body including nerve impulses, circulation, and breathing."
        },
        {
          id: 4,
          question: "What is agni?",
          options: [
            "Digestive fire",
            "A type of massage",
            "Herbal formula",
            "Breathing exercise"
          ],
          correctAnswer: 0,
          explanation: "Agni is the digestive fire that transforms food into energy and nourishes tissues."
        },
        {
          id: 5,
          question: "What is prakruti?",
          options: [
            "Natural constitution at birth",
            "Current imbalance",
            "Seasonal changes",
            "Dietary preferences"
          ],
          correctAnswer: 0,
          explanation: "Prakruti is one's natural dosha balance established at conception, remaining constant through life."
        },
        {
          id: 6,
          question: "What is panchakarma?",
          options: [
            "Detoxification therapy",
            "Only massage treatment",
            "Herbal preparation",
            "Yoga practice"
          ],
          correctAnswer: 0,
          explanation: "Panchakarma is Ayurvedic detoxification involving five cleansing actions to remove toxins."
        },
        {
          id: 7,
          question: "What does Pitta dosha govern?",
          options: [
            "Metabolism and transformation",
            "Only movement",
            "Just stability",
            "Creativity only"
          ],
          correctAnswer: 0,
          explanation: "Pitta dosha governs all metabolic processes, digestion, and transformation in the body."
        },
        {
          id: 8,
          question: "What is abhyanga?",
          options: [
            "Warm oil massage",
            "Only steam therapy",
            "Herbal drink",
            "Breathing technique"
          ],
          correctAnswer: 0,
          explanation: "Abhyanga is warm oil self-massage that calms the nervous system and nourishes tissues."
        },
        {
          id: 9,
          question: "What is ama?",
          options: [
            "Toxic residue from poor digestion",
            "Digestive fire",
            "Life energy",
            "Balanced state"
          ],
          correctAnswer: 0,
          explanation: "Ama is undigested toxic material that accumulates from poor digestion of food, emotions, or experiences."
        },
        {
          id: 10,
          question: "What does Kapha dosha govern?",
          options: [
            "Structure and lubrication",
            "Only digestion",
            "Just movement",
            "Transformation only"
          ],
          correctAnswer: 0,
          explanation: "Kapha dosha governs physical structure, stability, lubrication, and fluid balance."
        },
        {
          id: 11,
          question: "What is shirodhara?",
          options: [
            "Oil poured on forehead",
            "Only foot massage",
            "Nasal cleansing",
            "Herbal paste application"
          ],
          correctAnswer: 0,
          explanation: "Shirodhara pours warm oil in a steady stream on the forehead to calm the mind and nervous system."
        },
        {
          id: 12,
          question: "What are srotas?",
          options: [
            "Bodily channels for flow",
            "Only blood vessels",
            "Digestive organs",
            "Energy centers"
          ],
          correctAnswer: 0,
          explanation: "Srotas are the microchannels in the body through which nutrients, energy, and waste products flow."
        },
        {
          id: 13,
          question: "What is dinacharya?",
          options: [
            "Daily routine for balance",
            "Only seasonal routine",
            "Weekly practices",
            "Annual celebrations"
          ],
          correctAnswer: 0,
          explanation: "Dinacharya is the Ayurvedic daily routine designed to maintain dosha balance and health."
        },
        {
          id: 14,
          question: "What does pulse diagnosis assess?",
          options: [
            "Dosha balance and organ health",
            "Only heart rate",
            "Just blood pressure",
            "Circulation speed"
          ],
          correctAnswer: 0,
          explanation: "Pulse diagnosis reads subtle vibrations to assess dosha states and organ system functions."
        },
        {
          id: 15,
          question: "What are the five elements in Ayurveda?",
          options: [
            "Ether, Air, Fire, Water, Earth",
            "Wood, Fire, Earth, Metal, Water",
            "Hot, Cold, Dry, Wet, Neutral",
            "Sweet, Sour, Salty, Bitter, Pungent"
          ],
          correctAnswer: 0,
          explanation: "Ayurveda's five elements are Ether (space), Air, Fire, Water, and Earth."
        },
        {
          id: 16,
          question: "What is vikruti?",
          options: [
            "Current dosha imbalance",
            "Natural constitution",
            "Digestive strength",
            "Seasonal adaptation"
          ],
          correctAnswer: 0,
          explanation: "Vikruti is the current state of dosha balance, which may deviate from one's natural prakruti."
        },
        {
          id: 17,
          question: "What does tongue scraping do?",
          options: [
            "Removes toxins and improves taste",
            "Only cleans teeth",
            "Strengthens tongue muscles",
            "Improves speech"
          ],
          correctAnswer: 0,
          explanation: "Tongue scraping removes accumulated toxins (ama) from the tongue, improving digestion and taste."
        },
        {
          id: 18,
          question: "What are dhatus?",
          options: [
            "Seven bodily tissues",
            "Only three doshas",
            "Digestive fires",
            "Energy channels"
          ],
          correctAnswer: 0,
          explanation: "Dhatus are the seven bodily tissues: plasma, blood, muscle, fat, bone, marrow/nerves, and reproductive tissue."
        },
        {
          id: 19,
          question: "What is ritucharya?",
          options: [
            "Seasonal routine adjustments",
            "Only daily routine",
            "Weekly cleansing",
            "Annual detox"
          ],
          correctAnswer: 0,
          explanation: "Ritucharya involves adjusting diet and lifestyle according to seasonal changes to maintain balance."
        },
        {
          id: 20,
          question: "What does triphala contain?",
          options: [
            "Three fruits for digestion",
            "Only one herb",
            "Five spices",
            "Seven minerals"
          ],
          correctAnswer: 0,
          explanation: "Triphala is a classic Ayurvedic formula containing three fruits: amalaki, bibhitaki, and haritaki."
        }
      ]
    },

    // MODULE 5: Indigenous Healing Traditions
    {
      id: 5,
      title: "Indigenous Healing Practices",
      completed: false,
      content: `
## **World Indigenous Medicine**

Indigenous healing traditions are deeply connected to land, community, and spirituality. They view health as harmony with all creation.

### **Common Principles**

**Connection to Land** recognizes that health comes from relationship with the natural world. Plants, animals, and landscapes are teachers.

**Community Focus** involves family and community in healing. Illness affects the whole community, and healing benefits everyone.

**Oral Tradition** passes knowledge through stories, songs, and ceremonies rather than written texts. Elders are knowledge keepers.

**Spiritual Dimension** addresses spiritual causes of illness through rituals, prayers, and connection with spiritual beings.

**Holistic View** sees no separation between physical, emotional, mental, and spiritual health. All aspects are treated together.

### **Native American Medicine**

**Medicine Wheel** represents cycles of life, seasons, directions, and aspects of being. It teaches balance among all relations.

**Sweat Lodge** ceremony purifies body, mind, and spirit through heat, steam, prayers, and songs. It represents rebirth.

**Sacred Plants** include tobacco for prayers, sage for cleansing, cedar for protection, and sweetgrass for attracting positive energy.

**Vision Quest** involves fasting and solitude in nature to seek guidance, purpose, and spiritual connection.

**Healing Circles** bring community together to support individuals through sharing, prayer, and collective energy.

### **African Traditional Medicine**

**Divination** methods diagnose spiritual causes of illness using bones, shells, or other objects that reveal hidden influences.

**Ancestor Connection** honors ancestors who guide and protect the living. Illness may come from displeased ancestors.

**Spirit Possession** rituals allow healing spirits to work through practitioners to diagnose and treat illnesses.

**Herbal Knowledge** uses local plants combined with spiritual practices. Each plant has spiritual properties.

**Bone Setting** techniques repair fractures using manual manipulation and herbal poultices.

### **Australian Aboriginal Medicine**

**Dreamtime** connects present to ancestral creation times. Healing involves restoring connection to Dreamtime stories.

**Bush Medicine** uses native plants like tea tree, eucalyptus, and kangaroo apple for various ailments.

**Songlines** are paths across land that hold stories and knowledge. Walking songlines can bring healing.

**Healing Touch** uses hands to remove spiritual blockages and restore energy flow, similar to energy healing.

**Ceremonial Healing** involves dances, paintings, and rituals that reconnect individuals to country and community.

### **Common Healing Practices**

**Plant Spirit Medicine** works with the spirit of plants, not just physical properties. Relationship with plant spirits brings healing.

**Energy Work** manipulates life force energy through hands, breath, or intention to restore balance.

**Storytelling Therapy** uses traditional stories to teach lessons, provide perspective, and guide healing journeys.

**Ceremonial Rituals** mark transitions, release old patterns, and invite new healing through symbolic actions.

**Dream Interpretation** views dreams as messages from spirit world offering guidance for healing.

### **Modern Challenges**

**Cultural Appropriation** occurs when outsiders take indigenous knowledge without permission, understanding, or benefit to communities.

**Knowledge Loss** happens as elders pass away and younger generations lose connection with traditional ways.

**Land Rights** issues affect access to medicinal plants and sacred sites essential for healing practices.

**Integration Issues** arise when combining traditional practices with Western medicine while respecting cultural integrity.

**Recognition Struggles** involve getting traditional healers and practices recognized and respected in mainstream healthcare.
`,
      quiz: [
        {
          id: 1,
          question: "What do indigenous traditions view health as?",
          options: [
            "Harmony with all creation",
            "Absence of disease only",
            "Physical fitness alone",
            "Wealth and prosperity"
          ],
          correctAnswer: 0,
          explanation: "Indigenous traditions view health as harmony with nature, community, and spiritual dimensions."
        },
        {
          id: 2,
          question: "What is the Medicine Wheel?",
          options: [
            "Symbol of cycles and balance",
            "Only a calendar",
            "Navigation tool",
            "Agricultural device"
          ],
          correctAnswer: 0,
          explanation: "The Medicine Wheel represents cycles of life, seasons, directions, and balance among all relations."
        },
        {
          id: 3,
          question: "What does oral tradition mean?",
          options: [
            "Knowledge passed through stories and songs",
            "Only written texts",
            "Scientific journals",
            "Online information"
          ],
          correctAnswer: 0,
          explanation: "Oral tradition passes knowledge verbally through stories, songs, ceremonies, and elder teachings."
        },
        {
          id: 4,
          question: "What is a sweat lodge?",
          options: [
            "Purification ceremony with heat and steam",
            "Only a bathing facility",
            "Storage building",
            "Cooking area"
          ],
          correctAnswer: 0,
          explanation: "Sweat lodge ceremonies use heat, steam, prayers, and songs for physical and spiritual purification."
        },
        {
          id: 5,
          question: "What is divination in African medicine?",
          options: [
            "Diagnosing spiritual causes of illness",
            "Only physical examination",
            "Laboratory testing",
            "Surgical procedure"
          ],
          correctAnswer: 0,
          explanation: "Divination methods diagnose spiritual causes using objects like bones or shells to reveal hidden influences."
        },
        {
          id: 6,
          question: "What are sacred plants in Native traditions?",
          options: [
            "Tobacco, sage, cedar, sweetgrass",
            "Only food crops",
            "Decorative flowers",
            "Timber trees"
          ],
          correctAnswer: 0,
          explanation: "Sacred plants like tobacco, sage, cedar, and sweetgrass have ceremonial and healing purposes."
        },
        {
          id: 7,
          question: "What is Dreamtime in Aboriginal culture?",
          options: [
            "Connection to ancestral creation times",
            "Only sleeping dreams",
            "Future predictions",
            "Nighttime activities"
          ],
          correctAnswer: 0,
          explanation: "Dreamtime refers to the ancestral period of creation that continues to inform present reality."
        },
        {
          id: 8,
          question: "What do healing circles do?",
          options: [
            "Bring community together for support",
            "Only individual treatment",
            "Isolate sick people",
            "Exclude family members"
          ],
          correctAnswer: 0,
          explanation: "Healing circles gather community to support individuals through sharing, prayer, and collective energy."
        },
        {
          id: 9,
          question: "What is bush medicine?",
          options: [
            "Australian native plant remedies",
            "Only Western pharmaceuticals",
            "Urban clinic medicine",
            "Imported herbal products"
          ],
          correctAnswer: 0,
          explanation: "Bush medicine refers to traditional Australian Aboriginal use of native plants for healing."
        },
        {
          id: 10,
          question: "Why honor ancestors in African medicine?",
          options: [
            "Ancestors guide and protect the living",
            "Only historical interest",
            "Genealogy records",
            "Cultural entertainment"
          ],
          correctAnswer: 0,
          explanation: "Ancestors are believed to guide, protect, and influence the living; displeased ancestors may cause illness."
        },
        {
          id: 11,
          question: "What is a vision quest?",
          options: [
            "Fasting in nature for guidance",
            "Only meditation indoors",
            "Group celebration",
            "Academic study"
          ],
          correctAnswer: 0,
          explanation: "Vision quest involves fasting and solitude in nature to seek spiritual guidance and purpose."
        },
        {
          id: 12,
          question: "What are songlines?",
          options: [
            "Paths holding stories and knowledge",
            "Only musical compositions",
            "Road maps",
            "Hiking trails"
          ],
          correctAnswer: 0,
          explanation: "Songlines are paths across the land that hold creation stories, knowledge, and spiritual significance."
        },
        {
          id: 13,
          question: "What is plant spirit medicine?",
          options: [
            "Working with plant spirits for healing",
            "Only physical plant properties",
            "Laboratory extraction",
            "Gardening techniques"
          ],
          correctAnswer: 0,
          explanation: "Plant spirit medicine involves relationship with plant spirits, not just physical plant properties."
        },
        {
          id: 14,
          question: "What is bone setting?",
          options: [
            "Manual fracture repair with herbs",
            "Only surgical procedures",
            "Bone decoration",
            "Skeletal study"
          ],
          correctAnswer: 0,
          explanation: "Traditional bone setting uses manual manipulation and herbal poultices to repair fractures."
        },
        {
          id: 15,
          question: "What does storytelling therapy use?",
          options: [
            "Traditional stories for healing",
            "Only medical textbooks",
            "Scientific papers",
            "News reports"
          ],
          correctAnswer: 0,
          explanation: "Storytelling therapy uses traditional stories to teach, provide perspective, and guide healing."
        },
        {
          id: 16,
          question: "What is cultural appropriation?",
          options: [
            "Taking indigenous knowledge without permission",
            "Cultural exchange",
            "Learning from elders",
            "Community sharing"
          ],
          correctAnswer: 0,
          explanation: "Cultural appropriation occurs when outsiders take indigenous knowledge without permission or benefit to communities."
        },
        {
          id: 17,
          question: "What are spirit possession rituals?",
          options: [
            "Healing spirits working through practitioners",
            "Only entertainment",
            "Religious conversion",
            "Psychological disorder"
          ],
          correctAnswer: 0,
          explanation: "Spirit possession rituals allow healing spirits to work through practitioners to diagnose and treat."
        },
        {
          id: 18,
          question: "What does ceremonial healing involve?",
          options: [
            "Dances, paintings, and rituals",
            "Only medication",
            "Surgery alone",
            "Laboratory tests"
          ],
          correctAnswer: 0,
          explanation: "Ceremonial healing uses dances, body paintings, and rituals to reconnect individuals to community and land."
        },
        {
          id: 19,
          question: "What is dream interpretation?",
          options: [
            "Viewing dreams as spiritual messages",
            "Only psychological analysis",
            "Entertainment value",
            "Memory processing"
          ],
          correctAnswer: 0,
          explanation: "Dream interpretation views dreams as messages from the spirit world offering healing guidance."
        },
        {
          id: 20,
          question: "What causes knowledge loss?",
          options: [
            "Elders passing away without transmission",
            "Too much documentation",
            "Overteaching youth",
            "Excessive preservation"
          ],
          correctAnswer: 0,
          explanation: "Knowledge loss occurs when elders pass away without transmitting traditional knowledge to younger generations."
        }
      ]
    },

    // MODULE 6: Integrating Traditional Medicine
    {
      id: 6,
      title: "Integrating Traditional and Modern Medicine",
      completed: false,
      content: `
## **Bridging Traditional and Modern Approaches**

Integrative medicine combines the best of traditional healing systems with modern medical science for comprehensive patient care.

### **Integration Models**

**Parallel Practice** allows patients to use both systems separately but informed about each other's treatments to avoid conflicts.

**Collaborative Care** brings traditional healers and modern practitioners together in shared spaces or referral networks.

**Integrated Clinics** offer both approaches under one roof with practitioners working as a team on treatment plans.

**Referral Systems** establish formal pathways for referring patients between traditional and modern practitioners based on needs.

**Training Exchange** programs allow practitioners to learn from each other's systems to improve cross-cultural understanding.

### **Evidence Integration**

**Research Validation** studies traditional remedies using scientific methods to understand mechanisms, safety, and effectiveness.

**Clinical Trials** test traditional treatments following modern research standards while respecting traditional knowledge.

**Traditional Knowledge Documentation** records indigenous healing practices with community consent and benefit sharing.

**Safety Monitoring** tracks adverse effects and interactions when traditional remedies are used alone or with pharmaceuticals.

**Quality Standards** develop for traditional medicines regarding purity, potency, and contamination limits.

### **Communication Strategies**

**Cross-Cultural Training** helps modern practitioners understand traditional health beliefs and communicate effectively with patients.

**Interpretation Services** provide language and cultural mediation between patients and practitioners from different backgrounds.

**Health Literacy** materials explain treatments in culturally appropriate ways using familiar concepts and examples.

**Informed Consent** processes respect patient autonomy while ensuring understanding of both traditional and modern options.

**Treatment Plans** clearly document all treatments being used to coordinate care and monitor interactions.

### **Policy and Regulation**

**Legal Recognition** of traditional healers and practices within national healthcare systems where appropriate.

**Practice Standards** establish minimum training, ethical guidelines, and scope of practice for traditional practitioners.

**Insurance Coverage** for traditional treatments when evidence supports their effectiveness and safety.

**Intellectual Property Rights** protect traditional knowledge from exploitation while allowing fair benefit sharing.

**Sustainable Harvesting Laws** regulate collection of medicinal plants to protect biodiversity and traditional access.

### **Challenges and Solutions**

**Cultural Barriers** between different healing paradigms require respectful dialogue and mutual learning.

**Safety Concerns** about herb-drug interactions or inappropriate use need education and monitoring systems.

**Quality Control** issues with traditional remedies require standardization without losing traditional preparation methods.

**Power Imbalances** between modern and traditional systems need addressing through equal respect and collaboration.

**Resource Allocation** questions about funding traditional medicine within healthcare budgets require evidence of cost-effectiveness.

### **Future Directions**

**Personalized Integration** tailors combinations of traditional and modern approaches to individual patient needs and preferences.

**Technology Applications** use mobile apps, telemedicine, and databases to support integrative practice and patient education.

**Global Exchange** platforms share knowledge about traditional medicines from different cultures for mutual learning.

**Youth Engagement** involves younger generations in preserving and innovating traditional healing knowledge.

**Climate Adaptation** considers how environmental changes affect medicinal plant availability and traditional healing practices.
`,
      quiz: [
        {
          id: 1,
          question: "What is integrative medicine?",
          options: [
            "Combining traditional and modern approaches",
            "Only traditional methods",
            "Just modern medicine",
            "Alternative medicine only"
          ],
          correctAnswer: 0,
          explanation: "Integrative medicine combines the best of traditional healing systems with modern medical science."
        },
        {
          id: 2,
          question: "What is parallel practice?",
          options: [
            "Using both systems separately but informed",
            "Only one system at a time",
            "Mixing treatments randomly",
            "Ignoring all treatments"
          ],
          correctAnswer: 0,
          explanation: "Parallel practice allows patients to use both systems while practitioners communicate to coordinate care."
        },
        {
          id: 3,
          question: "What does research validation do?",
          options: [
            "Studies traditional remedies scientifically",
            "Only accepts ancient texts",
            "Discards traditional knowledge",
            "Ignores modern science"
          ],
          correctAnswer: 0,
          explanation: "Research validation uses scientific methods to study traditional remedies for safety and effectiveness."
        },
        {
          id: 4,
          question: "What are integrated clinics?",
          options: [
            "Both approaches under one roof",
            "Only traditional healing centers",
            "Just modern hospitals",
            "Separate facilities"
          ],
          correctAnswer: 0,
          explanation: "Integrated clinics offer both traditional and modern treatments with practitioners working as a team."
        },
        {
          id: 5,
          question: "Why cross-cultural training?",
          options: [
            "Understand different health beliefs",
            "Only learn one system",
            "Ignore cultural differences",
            "Impose one view on all"
          ],
          correctAnswer: 0,
          explanation: "Cross-cultural training helps practitioners understand different health beliefs and communicate effectively."
        },
        {
          id: 6,
          question: "What do clinical trials test?",
          options: [
            "Traditional treatments with modern standards",
            "Only pharmaceuticals",
            "Just surgical procedures",
            "Laboratory equipment"
          ],
          correctAnswer: 0,
          explanation: "Clinical trials test traditional treatments using modern research standards while respecting traditional knowledge."
        },
        {
          id: 7,
          question: "What are referral systems?",
          options: [
            "Formal pathways between practitioners",
            "Only self-referral",
            "Random selection",
            "No coordination"
          ],
          correctAnswer: 0,
          explanation: "Referral systems establish formal pathways for patients between traditional and modern practitioners."
        },
        {
          id: 8,
          question: "What does safety monitoring track?",
          options: [
            "Adverse effects and interactions",
            "Only positive outcomes",
            "Patient satisfaction only",
            "Cost effectiveness"
          ],
          correctAnswer: 0,
          explanation: "Safety monitoring tracks adverse effects and interactions when traditional remedies are used."
        },
        {
          id: 9,
          question: "What are interpretation services for?",
          options: [
            "Language and cultural mediation",
            "Only medical translation",
            "Legal documentation",
            "Financial transactions"
          ],
          correctAnswer: 0,
          explanation: "Interpretation services provide language translation and cultural mediation between patients and practitioners."
        },
        {
          id: 10,
          question: "What is legal recognition?",
          options: [
            "Accepting traditional healers in healthcare",
            "Only licensing doctors",
            "Banning traditional practices",
            "Ignoring all practitioners"
          ],
          correctAnswer: 0,
          explanation: "Legal recognition includes traditional healers and practices within national healthcare systems."
        },
        {
          id: 11,
          question: "What do quality standards ensure?",
          options: [
            "Purity, potency, and safety of remedies",
            "Only low cost",
            "Quick preparation",
            "Traditional appearance only"
          ],
          correctAnswer: 0,
          explanation: "Quality standards ensure traditional remedies meet requirements for purity, potency, and safety."
        },
        {
          id: 12,
          question: "What are training exchange programs?",
          options: [
            "Practitioners learning from each other",
            "Only one-way teaching",
            "Student competitions",
            "Academic degrees only"
          ],
          correctAnswer: 0,
          explanation: "Training exchange allows practitioners from different systems to learn from each other."
        },
        {
          id: 13,
          question: "What does health literacy involve?",
          options: [
            "Culturally appropriate health information",
            "Only technical medical terms",
            "Complex explanations",
            "Foreign language materials"
          ],
          correctAnswer: 0,
          explanation: "Health literacy provides information in culturally appropriate ways using familiar concepts."
        },
        {
          id: 14,
          question: "What are practice standards for?",
          options: [
            "Minimum training and ethical guidelines",
            "Only maximum profits",
            "Quick treatment methods",
            "Traditional rituals only"
          ],
          correctAnswer: 0,
          explanation: "Practice standards establish minimum training, ethics, and scope for traditional practitioners."
        },
        {
          id: 15,
          question: "What does traditional knowledge documentation do?",
          options: [
            "Records healing practices with consent",
            "Steals indigenous knowledge",
            "Ignores community rights",
            "Patents traditional remedies"
          ],
          correctAnswer: 0,
          explanation: "Traditional knowledge documentation records indigenous practices with community consent and benefit sharing."
        },
        {
          id: 16,
          question: "What are intellectual property rights for?",
          options: [
            "Protecting traditional knowledge from exploitation",
            "Only corporate profits",
            "Preventing all sharing",
            "Creating monopolies"
          ],
          correctAnswer: 0,
          explanation: "Intellectual property rights protect traditional knowledge while allowing fair benefit sharing."
        },
        {
          id: 17,
          question: "What does informed consent respect?",
          options: [
            "Patient autonomy in choosing treatments",
            "Only doctor decisions",
            "Family preferences only",
            "Insurance company rules"
          ],
          correctAnswer: 0,
          explanation: "Informed consent respects patient autonomy while ensuring understanding of treatment options."
        },
        {
          id: 18,
          question: "What do treatment plans document?",
          options: [
            "All treatments being used",
            "Only modern medications",
            "Just traditional remedies",
            "Future possibilities"
          ],
          correctAnswer: 0,
          explanation: "Treatment plans document all treatments to coordinate care and monitor potential interactions."
        },
        {
          id: 19,
          question: "What are sustainable harvesting laws for?",
          options: [
            "Protecting medicinal plant biodiversity",
            "Maximum plant collection",
            "Commercial exploitation",
            "Plant elimination"
          ],
          correctAnswer: 0,
          explanation: "Sustainable harvesting laws regulate plant collection to protect biodiversity and traditional access."
        },
        {
          id: 20,
          question: "What is personalized integration?",
          options: [
            "Tailoring treatments to individual needs",
            "One approach for everyone",
            "Random selection",
            "Following trends only"
          ],
          correctAnswer: 0,
          explanation: "Personalized integration tailors combinations of approaches to individual patient needs and preferences."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What does traditional medicine incorporate?",
      options: [
        "Plant, animal, and mineral-based medicines",
        "Only synthetic pharmaceuticals",
        "Surgical equipment only",
        "Laboratory tests exclusively"
      ],
      correctAnswer: 0,
      explanation: "Traditional medicine incorporates natural substances, spiritual therapies, and manual techniques."
    },
    {
      id: 2,
      question: "What does holistic approach mean?",
      options: [
        "Treating body, mind, and spirit together",
        "Focusing only on physical symptoms",
        "Using single treatments only",
        "Ignoring emotional aspects"
      ],
      correctAnswer: 0,
      explanation: "Holistic approach views the person as a whole being with interconnected physical, mental, and spiritual aspects."
    },
    {
      id: 3,
      question: "What are herbal teas typically made from?",
      options: [
        "Leaves and flowers",
        "Only roots",
        "Just bark",
        "Seeds exclusively"
      ],
      correctAnswer: 0,
      explanation: "Herbal teas are commonly made by steeping leaves and flowers in hot water."
    },
    {
      id: 4,
      question: "What is qi in Chinese medicine?",
      options: [
        "Vital life energy",
        "A type of massage",
        "Herbal formula",
        "Breathing exercise"
      ],
      correctAnswer: 0,
      explanation: "Qi is the vital life energy that flows through the body in Traditional Chinese Medicine."
    },
    {
      id: 5,
      question: "What are the three doshas in Ayurveda?",
      options: [
        "Vata, Pitta, Kapha",
        "Air, Fire, Water",
        "Hot, Cold, Neutral",
        "Mind, Body, Spirit"
      ],
      correctAnswer: 0,
      explanation: "The three doshas are Vata (air/ether), Pitta (fire/water), and Kapha (water/earth)."
    },
    {
      id: 6,
      question: "What is the Medicine Wheel?",
      options: [
        "Symbol of cycles and balance",
        "Only a calendar",
        "Navigation tool",
        "Agricultural device"
      ],
      correctAnswer: 0,
      explanation: "The Medicine Wheel represents cycles of life, seasons, directions, and balance."
    },
    {
      id: 7,
      question: "What is integrative medicine?",
      options: [
        "Combining traditional and modern approaches",
        "Only traditional methods",
        "Just modern medicine",
        "Alternative medicine only"
      ],
      correctAnswer: 0,
      explanation: "Integrative medicine combines the best of traditional healing with modern medical science."
    },
    {
      id: 8,
      question: "What does balance and harmony seek to restore?",
      options: [
        "Balance within body and with environment",
        "Only financial balance",
        "Social status only",
        "Physical strength alone"
      ],
      correctAnswer: 0,
      explanation: "Balance and harmony refer to restoring equilibrium within the body and with surroundings."
    },
    {
      id: 9,
      question: "Why is proper plant identification crucial?",
      options: [
        "To avoid poisonous plants",
        "For aesthetic purposes only",
        "To count plant species",
        "For gardening contests"
      ],
      correctAnswer: 0,
      explanation: "Proper identification is essential because some plants have poisonous look-alikes."
    },
    {
      id: 10,
      question: "What must balance for health in TCM?",
      options: [
        "Yin and yang",
        "Only physical strength",
        "Just emotions",
        "Diet alone"
      ],
      correctAnswer: 0,
      explanation: "Balance between yin (cool, moist) and yang (warm, dry) is essential for health."
    },
    {
      id: 11,
      question: "What is agni in Ayurveda?",
      options: [
        "Digestive fire",
        "A type of massage",
        "Herbal formula",
        "Breathing exercise"
      ],
      correctAnswer: 0,
      explanation: "Agni is the digestive fire that transforms food into energy and nourishes tissues."
    },
    {
      id: 12,
      question: "What is a sweat lodge?",
      options: [
        "Purification ceremony with heat and steam",
        "Only a bathing facility",
        "Storage building",
        "Cooking area"
      ],
      correctAnswer: 0,
      explanation: "Sweat lodge ceremonies use heat, steam, prayers, and songs for purification."
    },
    {
      id: 13,
      question: "What is parallel practice?",
      options: [
        "Using both systems separately but informed",
        "Only one system at a time",
        "Mixing treatments randomly",
        "Ignoring all treatments"
      ],
      correctAnswer: 0,
      explanation: "Parallel practice allows patients to use both systems while practitioners communicate."
    },
    {
      id: 14,
      question: "Where does Ayurveda originate?",
      options: [
        "India",
        "China",
        "Africa",
        "Europe"
      ],
      correctAnswer: 0,
      explanation: "Ayurveda is the traditional healing system of India, dating back thousands of years."
    },
    {
      id: 15,
      question: "What are tinctures?",
      options: [
        "Alcohol extracts of herbs",
        "Fresh herb salads",
        "Dried flower arrangements",
        "Powdered root snacks"
      ],
      correctAnswer: 0,
      explanation: "Tinctures are concentrated alcohol extracts that preserve herbal medicines."
    },
    {
      id: 16,
      question: "What does acupuncture regulate?",
      options: [
        "Qi flow through meridians",
        "Only blood pressure",
        "Just muscle tension",
        "Brain waves only"
      ],
      correctAnswer: 0,
      explanation: "Acupuncture regulates the flow of qi through meridian pathways."
    },
    {
      id: 17,
      question: "What is prakruti?",
      options: [
        "Natural constitution at birth",
        "Current imbalance",
        "Seasonal changes",
        "Dietary preferences"
      ],
      correctAnswer: 0,
      explanation: "Prakruti is one's natural dosha balance established at conception."
    },
    {
      id: 18,
      question: "What does oral tradition mean?",
      options: [
        "Knowledge passed through stories and songs",
        "Only written texts",
        "Scientific journals",
        "Online information"
      ],
      correctAnswer: 0,
      explanation: "Oral tradition passes knowledge verbally through stories, songs, and elder teachings."
    },
    {
      id: 19,
      question: "What does research validation do?",
      options: [
        "Studies traditional remedies scientifically",
        "Only accepts ancient texts",
        "Discards traditional knowledge",
        "Ignores modern science"
      ],
      correctAnswer: 0,
      explanation: "Research validation uses scientific methods to study traditional remedies."
    },
    {
      id: 20,
      question: "What does chamomile help with?",
      options: [
        "Calming nerves and digestion",
        "Increasing energy only",
        "Building muscle",
        "Lowering blood pressure only"
      ],
      correctAnswer: 0,
      explanation: "Chamomile is known for its calming effects on the nervous system and digestive tract."
    },
    {
      id: 21,
      question: "What are the Five Elements in TCM?",
      options: [
        "Wood, Fire, Earth, Metal, Water",
        "Ether, Air, Fire, Water, Earth",
        "Hot, Cold, Dry, Wet, Neutral",
        "Sweet, Sour, Bitter, Salty, Spicy"
      ],
      correctAnswer: 0,
      explanation: "The Five Elements in TCM are Wood, Fire, Earth, Metal, and Water."
    },
    {
      id: 22,
      question: "What does Vata dosha govern?",
      options: [
        "Movement and nervous system",
        "Only digestion",
        "Just structure",
        "Emotions only"
      ],
      correctAnswer: 0,
      explanation: "Vata dosha governs all movement in the body including nerve impulses and circulation."
    },
    {
      id: 23,
      question: "What is divination in African medicine?",
      options: [
        "Diagnosing spiritual causes of illness",
        "Only physical examination",
        "Laboratory testing",
        "Surgical procedure"
      ],
      correctAnswer: 0,
      explanation: "Divination methods diagnose spiritual causes using objects like bones or shells."
    },
    {
      id: 24,
      question: "What are integrated clinics?",
      options: [
        "Both approaches under one roof",
        "Only traditional healing centers",
        "Just modern hospitals",
        "Separate facilities"
      ],
      correctAnswer: 0,
      explanation: "Integrated clinics offer both traditional and modern treatments together."
    },
    {
      id: 25,
      question: "What is prevention focus?",
      options: [
        "Maintaining health before illness occurs",
        "Only treating serious diseases",
        "Ignoring early symptoms",
        "Waiting until sick to act"
      ],
      correctAnswer: 0,
      explanation: "Prevention focus emphasizes daily practices to maintain health and prevent illness."
    },
    {
      id: 26,
      question: "What does ginger commonly help?",
      options: [
        "Digestion and nausea",
        "Only skin conditions",
        "Hair growth",
        "Bone strength"
      ],
      correctAnswer: 0,
      explanation: "Ginger is widely used for digestive issues, nausea relief, and anti-inflammatory properties."
    },
    {
      id: 27,
      question: "What is moxibustion?",
      options: [
        "Burning mugwort to warm points",
        "Needle insertion only",
        "Herbal tea drinking",
        "Skin scraping"
      ],
      correctAnswer: 0,
      explanation: "Moxibustion involves burning mugwort near acupuncture points to warm and stimulate qi."
    },
    {
      id: 28,
      question: "What is panchakarma?",
      options: [
        "Detoxification therapy",
        "Only massage treatment",
        "Herbal preparation",
        "Yoga practice"
      ],
      correctAnswer: 0,
      explanation: "Panchakarma is Ayurvedic detoxification involving five cleansing actions."
    },
    {
      id: 29,
      question: "What is Dreamtime in Aboriginal culture?",
      options: [
        "Connection to ancestral creation times",
        "Only sleeping dreams",
        "Future predictions",
        "Nighttime activities"
      ],
      correctAnswer: 0,
      explanation: "Dreamtime refers to the ancestral period of creation that informs present reality."
    },
    {
      id: 30,
      question: "Why cross-cultural training?",
      options: [
        "Understand different health beliefs",
        "Only learn one system",
        "Ignore cultural differences",
        "Impose one view on all"
      ],
      correctAnswer: 0,
      explanation: "Cross-cultural training helps practitioners understand different health beliefs."
    },
    {
      id: 31,
      question: "What is cultural context?",
      options: [
        "Roots in cultural beliefs and traditions",
        "Only scientific validation matters",
        "One system works for everyone",
        "Modern medicine is always superior"
      ],
      correctAnswer: 0,
      explanation: "Cultural context recognizes that healing practices develop within specific cultural frameworks."
    },
    {
      id: 32,
      question: "What are poultices used for?",
      options: [
        "Direct skin application for wounds",
        "Internal consumption only",
        "Room decoration",
        "Insect repellent"
      ],
      correctAnswer: 0,
      explanation: "Poultices apply crushed fresh herbs directly to skin for localized treatment."
    },
    {
      id: 33,
      question: "What are meridians?",
      options: [
        "Energy channels for qi flow",
        "Blood vessels only",
        "Nerve pathways",
        "Lymphatic vessels"
      ],
      correctAnswer: 0,
      explanation: "Meridians are the energy channels through which qi flows in TCM."
    },
    {
      id: 34,
      question: "What is ama?",
      options: [
        "Toxic residue from poor digestion",
        "Digestive fire",
        "Life energy",
        "Balanced state"
      ],
      correctAnswer: 0,
      explanation: "Ama is undigested toxic material that accumulates from poor digestion."
    },
    {
      id: 35,
      question: "What are sacred plants in Native traditions?",
      options: [
        "Tobacco, sage, cedar, sweetgrass",
        "Only food crops",
        "Decorative flowers",
        "Timber trees"
      ],
      correctAnswer: 0,
      explanation: "Sacred plants have ceremonial and healing purposes in Native traditions."
    },
    {
      id: 36,
      question: "What do clinical trials test?",
      options: [
        "Traditional treatments with modern standards",
        "Only pharmaceuticals",
        "Just surgical procedures",
        "Laboratory equipment"
      ],
      correctAnswer: 0,
      explanation: "Clinical trials test traditional treatments using modern research standards."
    },
    {
      id: 37,
      question: "What is complementary medicine?",
      options: [
        "Using traditional practices with conventional medicine",
        "Replacing all conventional treatments",
        "Only using traditional methods",
        "Ignoring modern medicine completely"
      ],
      correctAnswer: 0,
      explanation: "Complementary medicine integrates traditional practices with conventional treatments."
    },
    {
      id: 38,
      question: "What does sustainable harvesting mean?",
      options: [
        "Taking only what is needed for regeneration",
        "Harvesting everything available",
        "Only using cultivated plants",
        "Ignoring plant populations"
      ],
      correctAnswer: 0,
      explanation: "Sustainable harvesting ensures enough plants remain for regeneration."
    },
    {
      id: 39,
      question: "What does pulse diagnosis assess in TCM?",
      options: [
        "Organ conditions and qi flow",
        "Only heart rate",
        "Just blood pressure",
        "Circulation speed only"
      ],
      correctAnswer: 0,
      explanation: "Pulse diagnosis assesses conditions of different organs and qi flow."
    },
    {
      id: 40,
      question: "What is abhyanga?",
      options: [
        "Warm oil massage",
        "Only steam therapy",
        "Herbal drink",
        "Breathing technique"
      ],
      correctAnswer: 0,
      explanation: "Abhyanga is warm oil self-massage that calms the nervous system."
    }
  ]
};

export default traditionalMedicineCertificate;
