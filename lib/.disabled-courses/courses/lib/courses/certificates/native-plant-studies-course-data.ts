// Native Plant Studies (Certificate) - Complete Course Data
// All modules and exam in one file for easy implementation

export const nativePlantStudiesCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "native-plant-studies-certificate",
  title: "Native Plant Studies (Certificate)",
  description: "An introductory course exploring local plant species, their identification, ecological roles, and conservation importance. Learn to recognize common native plants and understand their relationship with local ecosystems.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌿",
  badge: "Certificate",
  prerequisites: [],
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Modules
  modules: [
    {
      id: 1,
      title: "Introduction to Native Plants",
      completed: false,
      content: `# Module 1: Introduction to Native Plants

## Welcome to Native Plant Studies!
This module introduces you to the wonderful world of native plants. You'll learn what makes a plant "native," why these plants are important, and how they form the foundation of healthy ecosystems.

### What Are Native Plants?
Native plants are species that have evolved naturally in a specific region over thousands of years. They have developed natural relationships with local wildlife, climate, and soil conditions. Unlike introduced plants, native species don't require special care or excessive watering once established.

**Key characteristics of native plants:**
- Adapted to local climate and soil
- Support local wildlife
- Require less maintenance
- Help prevent soil erosion
- Beautiful and diverse

### Why Native Plants Matter
Native plants are essential for several important reasons. They provide food and shelter for birds, butterflies, and other wildlife. They help maintain healthy soil and clean water systems. Native plants also preserve the natural beauty and character of your local area.

**Three main benefits:**
1. **Ecological Benefits**: Support pollinators and wildlife
2. **Practical Benefits**: Require less water and care
3. **Cultural Benefits**: Preserve local natural heritage

### Getting Started with Plant Observation
Begin your journey by learning basic observation skills. Notice plant shapes, leaf patterns, and growth habits. Start with common plants you see every day. Keep a simple notebook to record your observations.

**Observation Tips:**
- Look at leaf shapes and arrangements
- Notice flower colors and patterns
- Observe where plants grow naturally
- Pay attention to seasonal changes

---

## Key Learning Points
- Native plants are naturally adapted to local conditions
- They support local ecosystems and wildlife
- Observing plants helps build identification skills
- Native plants contribute to environmental health

Ready to start identifying plants? Let's begin with some common native species in the next module!`,
      
      quiz: [
        {
          id: 1,
          question: "What defines a plant as 'native' to a region?",
          options: [
            "It has evolved naturally in that area over thousands of years",
            "It was planted there by people recently",
            "It can survive anywhere in the world",
            "It only grows in botanical gardens"
          ],
          correctAnswer: 0,
          explanation: "Native plants are species that have evolved naturally in a specific region over thousands of years, developing relationships with local conditions."
        },
        {
          id: 2,
          question: "Which benefit is NOT typically associated with native plants?",
          options: [
            "They require excessive watering and fertilizers",
            "They support local wildlife and pollinators",
            "They help prevent soil erosion",
            "They preserve natural local beauty"
          ],
          correctAnswer: 0,
          explanation: "Native plants actually require LESS water and care than non-native species once established."
        },
        {
          id: 3,
          question: "What is one of the three main benefits of native plants mentioned in the content?",
          options: [
            "Ecological benefits supporting pollinators",
            "Making gardening more expensive",
            "Requiring chemical fertilizers",
            "Growing faster than all other plants"
          ],
          correctAnswer: 0,
          explanation: "Ecological benefits, including supporting pollinators and wildlife, are one of the three main benefits discussed."
        },
        {
          id: 4,
          question: "What should you observe first when learning about plants?",
          options: [
            "Leaf shapes and arrangements",
            "The plant's scientific name only",
            "How much it costs at nurseries",
            "Whether it's popular on social media"
          ],
          correctAnswer: 0,
          explanation: "Start with basic observation of leaf shapes, arrangements, and other visible characteristics."
        },
        {
          id: 5,
          question: "How are native plants different from introduced plants?",
          options: [
            "They have natural relationships with local ecosystems",
            "They always have brightly colored flowers",
            "They cannot survive without human care",
            "They grow much taller than other plants"
          ],
          correctAnswer: 0,
          explanation: "Native plants have developed natural relationships with local wildlife, climate, and soil over time."
        },
        {
          id: 6,
          question: "What is one practical benefit of native plants?",
          options: [
            "They require less water once established",
            "They need daily attention and care",
            "They only grow in perfect conditions",
            "They must be replaced every year"
          ],
          correctAnswer: 0,
          explanation: "Native plants are adapted to local conditions and typically require less water than non-native species."
        },
        {
          id: 7,
          question: "Why do native plants support local wildlife better?",
          options: [
            "They have co-evolved with local animals",
            "They have brighter colors than other plants",
            "They grow food that only humans eat",
            "They are always flowering year-round"
          ],
          correctAnswer: 0,
          explanation: "Native plants and local wildlife have evolved together, creating natural relationships."
        },
        {
          id: 8,
          question: "What should you use to record your plant observations?",
          options: [
            "A simple notebook",
            "Only your memory",
            "Expensive camera equipment",
            "Social media posts only"
          ],
          correctAnswer: 0,
          explanation: "Keeping a notebook helps track observations and learning progress."
        },
        {
          id: 9,
          question: "What do native plants help prevent?",
          options: [
            "Soil erosion",
            "Rain from falling",
            "Sunshine from reaching the ground",
            "All insects from coming near"
          ],
          correctAnswer: 0,
          explanation: "Native plant roots help hold soil in place, preventing erosion."
        },
        {
          id: 10,
          question: "When are native plants considered established?",
          options: [
            "After their root systems develop in their new location",
            "When they produce their first flower",
            "As soon as they are planted",
            "Only after several years of artificial care"
          ],
          correctAnswer: 0,
          explanation: "Native plants become established when their root systems develop in their new location."
        },
        {
          id: 11,
          question: "What is a cultural benefit of native plants?",
          options: [
            "Preserving local natural heritage",
            "Making gardens look like other countries",
            "Replacing all traditional gardening",
            "Being available in every store"
          ],
          correctAnswer: 0,
          explanation: "Native plants preserve the natural beauty and character of local areas."
        },
        {
          id: 12,
          question: "What should you pay attention to regarding seasonal changes?",
          options: [
            "How plants change through the seasons",
            "Only spring flowering times",
            "When stores put plants on sale",
            "What celebrities plant each season"
          ],
          correctAnswer: 0,
          explanation: "Observing seasonal changes helps understand plant life cycles."
        },
        {
          id: 13,
          question: "What type of relationships do native plants have with local conditions?",
          options: [
            "Natural, evolved relationships",
            "Random, accidental relationships",
            "Only human-created relationships",
            "Temporary, changing relationships"
          ],
          correctAnswer: 0,
          explanation: "These relationships have developed naturally over thousands of years."
        },
        {
          id: 14,
          question: "What do native plants help maintain?",
          options: [
            "Healthy soil and clean water systems",
            "Constant temperature in gardens",
            "Complete absence of insects",
            "Only colorful flower displays"
          ],
          correctAnswer: 0,
          explanation: "Native plants contribute to overall environmental health."
        },
        {
          id: 15,
          question: "How long does it take for plants to become native to an area?",
          options: [
            "Thousands of years of natural evolution",
            "Just one growing season",
            "When someone gives them a local name",
            "After being sold in local nurseries"
          ],
          correctAnswer: 0,
          explanation: "Native status comes from natural evolution over long periods."
        },
        {
          id: 16,
          question: "What is the first step in plant observation?",
          options: [
            "Noticing plant shapes and leaf patterns",
            "Buying expensive identification books",
            "Taking professional photographs",
            "Asking experts to identify everything"
          ],
          correctAnswer: 0,
          explanation: "Start with basic observation of visible characteristics."
        },
        {
          id: 17,
          question: "What do native plants provide for birds and butterflies?",
          options: [
            "Food and shelter",
            "Only decorative value",
            "Protection from all predators",
            "Constant temperature control"
          ],
          correctAnswer: 0,
          explanation: "Native plants naturally support local wildlife."
        },
        {
          id: 18,
          question: "Why do native plants need less care?",
          options: [
            "They are adapted to local climate and soil",
            "They don't grow as much as other plants",
            "They have special protective coatings",
            "They only grow with human intervention"
          ],
          correctAnswer: 0,
          explanation: "Their natural adaptation reduces maintenance needs."
        },
        {
          id: 19,
          question: "What should you start observing in your area?",
          options: [
            "Common plants you see every day",
            "Only rare and exotic plants",
            "Plants from other countries",
            "Only plants in botanical gardens"
          ],
          correctAnswer: 0,
          explanation: "Begin with familiar plants to build confidence."
        },
        {
          id: 20,
          question: "What forms the foundation of healthy ecosystems?",
          options: [
            "Native plants",
            "Imported decorative plants",
            "Artificial landscaping",
            "Only trees and large shrubs"
          ],
          correctAnswer: 0,
          explanation: "Native plants create the basis for balanced ecosystems."
        }
      ]
    },
    
    {
      id: 2,
      title: "Basic Plant Identification",
      completed: false,
      content: `# Module 2: Basic Plant Identification

## Learning to Recognize Plants
This module teaches you fundamental plant identification skills. You'll learn to distinguish plants by their leaves, stems, flowers, and growth patterns. These skills will help you recognize common native species in your area.

### Understanding Plant Parts
Every plant has basic parts that help with identification. Leaves come in different shapes and arrangements. Stems can be woody or herbaceous. Flowers have specific patterns and structures.

**Key identification features:**
- **Leaf shape**: Oval, lance-shaped, heart-shaped, or needle-like
- **Leaf arrangement**: Alternate, opposite, or whorled
- **Flower type**: Single flowers, clusters, or spikes
- **Growth habit**: Upright, spreading, or climbing

### Common Native Plant Families
Plants are grouped into families with similar characteristics. Recognizing plant families makes identification easier. Some common native families include the sunflower family, pea family, and mint family.

**Three important families:**
1. **Sunflower Family**: Flowers with ray and disk florets
2. **Pea Family**: Flowers with distinctive pea-like shape
3. **Mint Family**: Square stems and opposite leaves

### Simple Identification Tools
You don't need expensive equipment to start identifying plants. A basic field guide for your region is helpful. A hand lens magnifies small details. A notebook records your observations.

**Essential tools for beginners:**
- Regional field guide
- Hand lens (10x magnification)
- Notebook and pencil
- Simple camera or smartphone

---

## Key Learning Points
- Plants can be identified by leaves, stems, and flowers
- Recognizing plant families simplifies identification
- Basic tools help with accurate identification
- Practice improves recognition skills

Now you're ready to start identifying specific native plants!`,
      
      quiz: [
        {
          id: 1,
          question: "What is one way leaves can be arranged on a stem?",
          options: [
            "Alternate, opposite, or whorled",
            "Only in perfect circles",
            "Randomly without pattern",
            "Always in pairs of three"
          ],
          correctAnswer: 0,
          explanation: "Leaves can be arranged alternately, oppositely, or in whorls around the stem."
        },
        {
          id: 2,
          question: "Which plant family has square stems and opposite leaves?",
          options: [
            "Mint family",
            "Sunflower family",
            "Pea family",
            "Rose family"
          ],
          correctAnswer: 0,
          explanation: "The mint family is characterized by square stems and opposite leaves."
        },
        {
          id: 3,
          question: "What type of magnification is recommended for a beginner's hand lens?",
          options: [
            "10x magnification",
            "100x magnification",
            "No magnification needed",
            "50x magnification minimum"
          ],
          correctAnswer: 0,
          explanation: "A 10x hand lens is sufficient for most basic plant observation."
        },
        {
          id: 4,
          question: "What are the two types of florets in sunflower family flowers?",
          options: [
            "Ray and disk florets",
            "Male and female florets",
            "Large and small florets",
            "Sweet and bitter florets"
          ],
          correctAnswer: 0,
          explanation: "Sunflower family flowers typically have both ray and disk florets."
        },
        {
          id: 5,
          question: "What is a plant's growth habit?",
          options: [
            "How it grows (upright, spreading, climbing)",
            "How fast it grows each day",
            "What time of year it grows",
            "How much water it drinks"
          ],
          correctAnswer: 0,
          explanation: "Growth habit describes the plant's overall growth pattern and shape."
        },
        {
          id: 6,
          question: "What is one common leaf shape mentioned?",
          options: [
            "Heart-shaped",
            "Star-shaped",
            "Cloud-shaped",
            "Wave-shaped"
          ],
          correctAnswer: 0,
          explanation: "Heart-shaped is one of the common leaf shapes mentioned."
        },
        {
          id: 7,
          question: "What distinctive feature do pea family flowers have?",
          options: [
            "Pea-like shape",
            "Always yellow color",
            "No scent at all",
            "Thorny protection"
          ],
          correctAnswer: 0,
          explanation: "Pea family flowers have a characteristic pea-like shape."
        },
        {
          id: 8,
          question: "What is NOT an essential tool for beginner plant identification?",
          options: [
            "Expensive laboratory microscope",
            "Regional field guide",
            "Notebook and pencil",
            "Hand lens"
          ],
          correctAnswer: 0,
          explanation: "A laboratory microscope is not necessary for basic field identification."
        },
        {
          id: 9,
          question: "What can stems be classified as?",
          options: [
            "Woody or herbaceous",
            "Only green or brown",
            "Sweet or bitter",
            "Smooth or rough only"
          ],
          correctAnswer: 0,
          explanation: "Stems are generally woody (like trees) or herbaceous (soft, like most flowers)."
        },
        {
          id: 10,
          question: "What does recognizing plant families help with?",
          options: [
            "Making identification easier",
            "Making plants grow faster",
            "Changing their natural habitat",
            "Making them produce more flowers"
          ],
          correctAnswer: 0,
          explanation: "Family recognition simplifies the identification process."
        },
        {
          id: 11,
          question: "What type of flower arrangement is a cluster?",
          options: [
            "Multiple flowers growing together",
            "Single flower alone",
            "Flowers arranged in straight lines",
            "Flowers that change color daily"
          ],
          correctAnswer: 0,
          explanation: "Clusters are groups of flowers growing together."
        },
        {
          id: 12,
          question: "What is one benefit of using a field guide?",
          options: [
            "It's specific to your region's plants",
            "It makes plants grow better",
            "It changes plant colors",
            "It attracts more insects"
          ],
          correctAnswer: 0,
          explanation: "Regional field guides focus on plants likely to be found in your area."
        },
        {
          id: 13,
          question: "What do you record in your notebook?",
          options: [
            "Plant observations and findings",
            "Only scientific names",
            "What plants cost at stores",
            "Other people's opinions only"
          ],
          correctAnswer: 0,
          explanation: "Your personal observations are valuable learning tools."
        },
        {
          id: 14,
          question: "What is an example of a climbing growth habit?",
          options: [
            "Vines that grow up supports",
            "Plants that stay very short",
            "Trees that grow straight up",
            "Plants that spread horizontally"
          ],
          correctAnswer: 0,
          explanation: "Climbing plants like vines grow upward using supports."
        },
        {
          id: 15,
          question: "What helps improve plant recognition skills?",
          options: [
            "Practice and experience",
            "Only reading books",
            "Buying many plants",
            "Waiting for plants to identify themselves"
          ],
          correctAnswer: 0,
          explanation: "Regular practice builds confidence and skill."
        },
        {
          id: 16,
          question: "What are flower spikes?",
          options: [
            "Flowers arranged along a central stem",
            "Flowers with sharp thorns",
            "Flowers that spike in popularity",
            "Flowers that only open at night"
          ],
          correctAnswer: 0,
          explanation: "Spikes are a type of flower arrangement."
        },
        {
          id: 17,
          question: "What is a hand lens used for?",
          options: [
            "Magnifying small plant details",
            "Measuring plant height",
            "Watering small plants",
            "Digging in the soil"
          ],
          correctAnswer: 0,
          explanation: "Magnification helps see small identification features."
        },
        {
          id: 18,
          question: "What type of leaf is needle-like?",
          options: [
            "Long, thin leaves like pine needles",
            "Leaves with needle-sharp edges",
            "Leaves that feel like needles",
            "Leaves that are always green"
          ],
          correctAnswer: 0,
          explanation: "Needle-like leaves are long and thin, like conifer needles."
        },
        {
          id: 19,
          question: "What is an upright growth habit?",
          options: [
            "Growing vertically upward",
            "Spreading along the ground",
            "Growing in circles",
            "Drooping downward"
          ],
          correctAnswer: 0,
          explanation: "Upright plants grow vertically rather than spreading."
        },
        {
          id: 20,
          question: "Why is a simple camera useful?",
          options: [
            "To photograph plants for later reference",
            "To make plants grow better",
            "To scare away insects",
            "To measure exact plant sizes"
          ],
          correctAnswer: 0,
          explanation: "Photographs help with identification and record-keeping."
        }
      ]
    },
    
    {
      id: 3,
      title: "Native Plant Habitats",
      completed: false,
      content: `# Module 3: Native Plant Habitats

## Where Plants Grow Naturally
This module explores different habitats where native plants thrive. You'll learn about forest environments, grassland areas, wetland ecosystems, and how plants adapt to specific growing conditions.

### Forest and Woodland Habitats
Forests are complex ecosystems with multiple layers. The canopy includes tall trees. The understory has smaller trees and shrubs. The forest floor hosts ferns, wildflowers, and mosses.

**Forest habitat characteristics:**
- Filtered sunlight reaching the forest floor
- Rich, moist soil with decaying leaves
- Specific plants adapted to shade
- Seasonal changes in light availability

### Grassland and Meadow Habitats
Grasslands are open areas dominated by grasses and wildflowers. These habitats receive full sunlight. They support plants adapted to drier conditions and seasonal changes.

**Grassland features:**
- Full sun exposure
- Well-drained soils
- Plants with deep root systems
- Adaptations to survive dry periods

### Wetland and Riparian Habitats
Wetlands include marshes, swamps, and stream banks. These areas have moist or saturated soil. Plants here have special adaptations for wet conditions.

**Wetland plant adaptations:**
- Ability to grow in standing water
- Specialized root systems for wet soil
- Tolerance to seasonal flooding
- Unique pollination strategies

---

## Key Learning Points
- Different habitats support different native plants
- Plants adapt to specific environmental conditions
- Understanding habitats helps predict what plants you'll find
- Conservation requires protecting diverse habitats

Understanding habitats helps you know where to look for specific native plants!`,
      
      quiz: [
        {
          id: 1,
          question: "What are the layers found in forest habitats?",
          options: [
            "Canopy, understory, and forest floor",
            "Only tall trees and nothing else",
            "Just flowers and grasses",
            "Water layer and soil layer only"
          ],
          correctAnswer: 0,
          explanation: "Forests typically have canopy (tall trees), understory (smaller plants), and forest floor layers."
        },
        {
          id: 2,
          question: "What type of light reaches the forest floor?",
          options: [
            "Filtered sunlight",
            "Complete darkness always",
            "Direct sunlight all day",
            "Only artificial light"
          ],
          correctAnswer: 0,
          explanation: "Tall trees filter the sunlight that reaches lower levels."
        },
        {
          id: 3,
          question: "What dominates grassland habitats?",
          options: [
            "Grasses and wildflowers",
            "Only tall trees",
            "Cacti and succulents only",
            "Water plants exclusively"
          ],
          correctAnswer: 0,
          explanation: "Grasslands are characterized by grasses and various flowering plants."
        },
        {
          id: 4,
          question: "What do grassland plants often have?",
          options: [
            "Deep root systems",
            "No roots at all",
            "Only surface roots",
            "Roots that avoid soil"
          ],
          correctAnswer: 0,
          explanation: "Deep roots help grassland plants access water during dry periods."
        },
        {
          id: 5,
          question: "What are examples of wetland habitats?",
          options: [
            "Marshes, swamps, and stream banks",
            "Only dry desert areas",
            "Mountain tops only",
            "City parks exclusively"
          ],
          correctAnswer: 0,
          explanation: "Wetlands include various water-influenced environments."
        },
        {
          id: 6,
          question: "What adaptation do wetland plants need?",
          options: [
            "Ability to grow in standing water",
            "Avoiding all water contact",
            "Only growing in dry soil",
            "Needing daily watering by people"
          ],
          correctAnswer: 0,
          explanation: "Wetland plants are adapted to wet or saturated conditions."
        },
        {
          id: 7,
          question: "What type of soil do forests typically have?",
          options: [
            "Rich, moist soil with decaying leaves",
            "Dry, sandy soil only",
            "Rocky soil without organic matter",
            "Artificial potting mix"
          ],
          correctAnswer: 0,
          explanation: "Forest soil is enriched by decaying plant material."
        },
        {
          id: 8,
          question: "What do grassland habitats receive?",
          options: [
            "Full sun exposure",
            "Complete shade always",
            "Only morning sun",
            "Light through water only"
          ],
          correctAnswer: 0,
          explanation: "Grasslands are open areas with direct sunlight."
        },
        {
          id: 9,
          question: "What is the understory in a forest?",
          options: [
            "Smaller trees and shrubs below the canopy",
            "The deepest part of the soil",
            "The top of the tallest trees",
            "Only the fallen leaves layer"
          ],
          correctAnswer: 0,
          explanation: "The understory consists of plants growing beneath the main canopy."
        },
        {
          id: 10,
          question: "What do plants in seasonal habitats need?",
          options: [
            "Adaptations to survive dry periods",
            "Constant watering by humans",
            "Artificial heating systems",
            "Daily fertilizer applications"
          ],
          correctAnswer: 0,
          explanation: "Seasonal habitats experience changing conditions through the year."
        },
        {
          id: 11,
          question: "What grows on the forest floor?",
          options: [
            "Ferns, wildflowers, and mosses",
            "Only large trees",
            "Just grass and nothing else",
            "Artificial decorations"
          ],
          correctAnswer: 0,
          explanation: "The forest floor supports shade-tolerant plants."
        },
        {
          id: 12,
          question: "What type of soil drainage do grasslands have?",
          options: [
            "Well-drained soils",
            "Always waterlogged soil",
            "No soil at all",
            "Only clay soil that holds water"
          ],
          correctAnswer: 0,
          explanation: "Good drainage is characteristic of grassland soils."
        },
        {
          id: 13,
          question: "What is a riparian habitat?",
          options: [
            "Areas along streams and rivers",
            "Desert areas far from water",
            "Mountain peaks only",
            "Urban parking lots"
          ],
          correctAnswer: 0,
          explanation: "Riparian refers to stream and river bank environments."
        },
        {
          id: 14,
          question: "What do wetland plants tolerate?",
          options: [
            "Seasonal flooding",
            "Only perfectly dry conditions",
            "Constant direct sun without water",
            "Being moved frequently"
          ],
          correctAnswer: 0,
          explanation: "Wetland plants are adapted to periodic flooding."
        },
        {
          id: 15,
          question: "Why do forest plants adapt to shade?",
          options: [
            "Because sunlight is filtered by taller trees",
            "Because they don't like sunlight",
            "Because they only grow at night",
            "Because they prefer darkness"
          ],
          correctAnswer: 0,
          explanation: "Forest understory plants receive limited sunlight."
        },
        {
          id: 16,
          question: "What helps predict where you'll find specific plants?",
          options: [
            "Understanding their preferred habitats",
            "Guessing randomly",
            "Asking everyone you meet",
            "Looking only in gardens"
          ],
          correctAnswer: 0,
          explanation: "Plants grow where conditions meet their needs."
        },
        {
          id: 17,
          question: "What do decaying leaves create in forests?",
          options: [
            "Rich, moist soil",
            "Dry, barren soil",
            "Artificial fertilizer",
            "Toxic conditions for plants"
          ],
          correctAnswer: 0,
          explanation: "Decomposing leaves enrich forest soil naturally."
        },
        {
          id: 18,
          question: "What do wetland plants need for pollination?",
          options: [
            "Unique pollination strategies",
            "Only human assistance",
            "Wind pollination exclusively",
            "No pollination at all"
          ],
          correctAnswer: 0,
          explanation: "Wetland environments require specific pollination adaptations."
        },
        {
          id: 19,
          question: "What protects diverse plant habitats?",
          options: [
            "Conservation efforts",
            "Building more houses everywhere",
            "Removing all plants regularly",
            "Planting only one species"
          ],
          correctAnswer: 0,
          explanation: "Conservation helps maintain habitat diversity."
        },
        {
          id: 20,
          question: "What do plants in different habitats show?",
          options: [
            "Adaptations to specific conditions",
            "All looking exactly the same",
            "No relationship to their environment",
            "Random growth patterns"
          ],
          correctAnswer: 0,
          explanation: "Plants evolve features suited to their particular habitats."
        }
      ]
    },
    
    {
      id: 4,
      title: "Seasonal Changes and Plant Life Cycles",
      completed: false,
      content: `# Module 4: Seasonal Changes and Plant Life Cycles

## Plants Through the Seasons
This module explores how native plants change with the seasons. You'll learn about plant life cycles, seasonal adaptations, and how to observe plants throughout the year.

### Understanding Plant Life Cycles
Plants have different life cycle types. Annual plants complete their life in one year. Biennials take two years. Perennials live for multiple years, often dying back seasonally.

**Life cycle types:**
- **Annuals**: Germinate, flower, set seed, and die in one year
- **Biennials**: Grow leaves first year, flower second year, then die
- **Perennials**: Live multiple years, often with seasonal dormancy

### Seasonal Growth Patterns
Plants respond to seasonal cues like temperature and day length. Spring brings new growth and flowering. Summer sees active growth and seed development. Autumn brings seed dispersal and preparation for winter.

**Seasonal responses:**
- Spring: New growth, flowering, leaf development
- Summer: Full growth, fruiting, seed production
- Autumn: Seed dispersal, preparation for dormancy
- Winter: Dormancy or reduced activity

### Observing Seasonal Changes
Regular observation helps you understand plant timing. Notice when leaves emerge. Record flowering times. Watch for fruit development. Observe dormancy patterns.

**Observation calendar:**
- Early spring: First green shoots appear
- Late spring: Peak flowering for many species
- Summer: Fruit development and seed formation
- Autumn: Color changes and seed dispersal
- Winter: Dormancy signs and structure visibility

---

## Key Learning Points
- Plants have different life cycle durations
- Seasonal changes trigger plant responses
- Regular observation reveals seasonal patterns
- Understanding cycles helps with plant identification

Observing seasonal changes deepens your understanding of native plants!`,
      
      quiz: [
        {
          id: 1,
          question: "How long do annual plants complete their life cycle?",
          options: [
            "One year",
            "Two years",
            "Multiple years",
            "Only one season"
          ],
          correctAnswer: 0,
          explanation: "Annuals germinate, grow, flower, set seed, and die within one year."
        },
        {
          id: 2,
          question: "What do biennial plants do in their first year?",
          options: [
            "Grow leaves and store energy",
            "Flower immediately",
            "Produce seeds right away",
            "Die without growing"
          ],
          correctAnswer: 0,
          explanation: "Biennials typically grow vegetatively (leaves) in their first year."
        },
        {
          id: 3,
          question: "What characterizes perennial plants?",
          options: [
            "Living multiple years with seasonal dormancy",
            "Dying after one flowering",
            "Never flowering at all",
            "Growing only in winter"
          ],
          correctAnswer: 0,
          explanation: "Perennials live for several years, often going dormant seasonally."
        },
        {
          id: 4,
          question: "What seasonal cues do plants respond to?",
          options: [
            "Temperature and day length",
            "Only human gardening schedules",
            "Random chance only",
            "Moon phases exclusively"
          ],
          correctAnswer: 0,
          explanation: "Plants use environmental cues like temperature and daylight."
        },
        {
          id: 5,
          question: "What happens to many plants in spring?",
          options: [
            "New growth and flowering",
            "Immediate death",
            "Complete dormancy",
            "Seed dispersal only"
          ],
          correctAnswer: 0,
          explanation: "Spring typically brings renewed growth after winter."
        },
        {
          id: 6,
          question: "What is summer typically for plants?",
          options: [
            "Active growth and seed development",
            "Complete inactivity",
            "Only flowering with no growth",
            "Preparation for dormancy only"
          ],
          correctAnswer: 0,
          explanation: "Summer is usually the main growing season."
        },
        {
          id: 7,
          question: "What do plants do in autumn?",
          options: [
            "Prepare for dormancy and disperse seeds",
            "Start new growth immediately",
            "Flower for the first time",
            "Become completely inactive"
          ],
          correctAnswer: 0,
          explanation: "Autumn is often a transition to winter conditions."
        },
        {
          id: 8,
          question: "What might you see in early spring?",
          options: [
            "First green shoots appearing",
            "Full summer flowers",
            "Autumn leaf colors",
            "Complete snow cover"
          ],
          correctAnswer: 0,
          explanation: "Early spring shows the beginning of new growth."
        },
        {
          id: 9,
          question: "When do many plants peak in flowering?",
          options: [
            "Late spring",
            "Middle of winter",
            "Only at night",
            "After they die"
          ],
          correctAnswer: 0,
          explanation: "Late spring is often peak flowering time for many species."
        },
        {
          id: 10,
          question: "What develops in summer?",
          options: [
            "Fruit and seeds",
            "Only new leaves",
            "Just roots underground",
            "Flower buds for next year"
          ],
          correctAnswer: 0,
          explanation: "Summer sees the development of reproductive structures."
        },
        {
          id: 11,
          question: "What happens in autumn regarding seeds?",
          options: [
            "Seed dispersal",
            "Seed formation begins",
            "Seeds immediately sprout",
            "Seeds disappear completely"
          ],
          correctAnswer: 0,
          explanation: "Many plants disperse seeds in autumn."
        },
        {
          id: 12,
          question: "What is winter for many plants?",
          options: [
            "A period of dormancy",
            "The main growing season",
            "When they flower most",
            "When they produce fruit"
          ],
          correctAnswer: 0,
          explanation: "Winter is often a resting period for plants."
        },
        {
          id: 13,
          question: "What should you record about flowering?",
          options: [
            "Flowering times",
            "Only flower colors",
            "What bees visit them",
            "How much they cost"
          ],
          correctAnswer: 0,
          explanation: "Timing helps understand plant life cycles."
        },
        {
          id: 14,
          question: "What becomes more visible in winter?",
          options: [
            "Plant structure and form",
            "Flower colors",
            "Leaf patterns",
            "Fruit sweetness"
          ],
          correctAnswer: 0,
          explanation: "Without leaves, plant structure is more apparent."
        },
        {
          id: 15,
          question: "What type of plants die back seasonally?",
          options: [
            "Many perennials",
            "Only annual plants",
            "All plants equally",
            "No plants do this"
          ],
          correctAnswer: 0,
          explanation: "Perennials often die back to the ground seasonally."
        },
        {
          id: 16,
          question: "What helps with plant identification?",
          options: [
            "Understanding life cycles",
            "Only looking at flowers",
            "Guessing based on color",
            "Ascribing human traits to plants"
          ],
          correctAnswer: 0,
          explanation: "Life cycle knowledge aids accurate identification."
        },
        {
          id: 17,
          question: "What do biennials do in their second year?",
          options: [
            "Flower, set seed, then die",
            "Grow more leaves only",
            "Become perennial",
            "Disappear completely"
          ],
          correctAnswer: 0,
          explanation: "Second year is when biennials complete reproduction."
        },
        {
          id: 18,
          question: "What triggers dormancy in plants?",
          options: [
            "Seasonal environmental changes",
            "Human decisions",
            "Random timing",
            "Lack of human attention"
          ],
          correctAnswer: 0,
          explanation: "Environmental factors like cold trigger dormancy."
        },
        {
          id: 19,
          question: "What can you observe in dormancy patterns?",
          options: [
            "How plants survive winter",
            "Only plant death",
            "Constant growth",
            "Immediate spring growth"
          ],
          correctAnswer: 0,
          explanation: "Dormancy patterns show plant adaptation strategies."
        },
        {
          id: 20,
          question: "Why observe plants throughout the year?",
          options: [
            "To understand complete life cycles",
            "Only to see flowers",
            "To find the perfect plant",
            "To avoid seeing winter"
          ],
          correctAnswer: 0,
          explanation: "Year-round observation reveals the full plant story."
        }
      ]
    },
    
    {
      id: 5,
      title: "Plant Ecology and Relationships",
      completed: false,
      content: `# Module 5: Plant Ecology and Relationships

## Plants in Their Ecological Context
This module explores how native plants interact with their environment and other organisms. You'll learn about pollination relationships, plant-animal interactions, and the role of plants in ecosystems.

### Pollination Partnerships
Plants and pollinators have evolved together. Different flowers attract different pollinators. Some plants rely on specific pollinators for reproduction.

**Pollinator types and their flowers:**
- **Bees**: Attracted to blue, purple, yellow flowers with landing platforms
- **Butterflies**: Prefer red, orange, pink flowers with flat surfaces
- **Hummingbirds**: Drawn to red, tubular flowers
- **Wind**: Pollinates plants with small, inconspicuous flowers

### Plant-Animal Relationships
Animals depend on plants for food and shelter. Plants provide berries, seeds, and foliage. In return, animals help with seed dispersal and pollination.

**Mutual benefits:**
- Birds eat berries and disperse seeds
- Insects find food and shelter in plants
- Animals use plants for nesting materials
- Plants get help with reproduction and dispersal

### Ecological Roles of Plants
Plants play fundamental roles in ecosystems. They produce oxygen through photosynthesis. They form the base of food chains. They create habitats for other organisms.

**Key ecological functions:**
- Primary production (creating food energy from sunlight)
- Soil formation and stabilization
- Water cycle regulation
- Climate moderation

---

## Key Learning Points
- Plants and pollinators have specialized relationships
- Animals and plants benefit each other
- Plants perform essential ecological functions
- Understanding relationships shows plant importance

Seeing plants as part of ecological networks deepens appreciation!`,
      
      quiz: [
        {
          id: 1,
          question: "What have plants and pollinators done over time?",
          options: [
            "Evolved together",
            "Avoided each other completely",
            "Stayed exactly the same",
            "Changed randomly without relationship"
          ],
          correctAnswer: 0,
          explanation: "Plants and their pollinators have co-evolved mutual adaptations."
        },
        {
          id: 2,
          question: "What color flowers typically attract bees?",
          options: [
            "Blue, purple, yellow",
            "Only pure white",
            "Black and gray only",
            "All colors equally"
          ],
          correctAnswer: 0,
          explanation: "Bees are particularly attracted to these colors."
        },
        {
          id: 3,
          question: "What type of flowers do hummingbirds prefer?",
          options: [
            "Red, tubular flowers",
            "Flat white flowers",
            "Small green flowers",
            "Flowers without nectar"
          ],
          correctAnswer: 0,
          explanation: "Hummingbirds are drawn to red, tubular flowers suited to their feeding."
        },
        {
          id: 4,
          question: "What pollinates plants with small, inconspicuous flowers?",
          options: [
            "Wind",
            "Only large bees",
            "Just butterflies",
            "Human intervention only"
          ],
          correctAnswer: 0,
          explanation: "Wind-pollinated plants don't need showy flowers."
        },
        {
          id: 5,
          question: "How do birds help plants?",
          options: [
            "By dispersing seeds",
            "By eating all the leaves",
            "By building nests in roots",
            "By singing to them"
          ],
          correctAnswer: 0,
          explanation: "Birds eat fruits and disperse seeds through their droppings."
        },
        {
          id: 6,
          question: "What do plants provide for insects?",
          options: [
            "Food and shelter",
            "Only pollen",
            "Just water",
            "Protection from all predators"
          ],
          correctAnswer: 0,
          explanation: "Plants offer multiple resources for insects."
        },
        {
          id: 7,
          question: "What is primary production?",
          options: [
            "Creating food energy from sunlight",
            "Making soil from rocks",
            "Producing water from air",
            "Creating animals from plants"
          ],
          correctAnswer: 0,
          explanation: "Photosynthesis converts sunlight into usable energy."
        },
        {
          id: 8,
          question: "What flower shape do butterflies prefer?",
          options: [
            "Flat surfaces for landing",
            "Deep tubes only",
            "No particular shape",
            "Spiky shapes only"
          ],
          correctAnswer: 0,
          explanation: "Butterflies need landing platforms to feed."
        },
        {
          id: 9,
          question: "What do plants help stabilize?",
          options: [
            "Soil",
            "Air temperature only",
            "Animal populations only",
            "Wind patterns"
          ],
          correctAnswer: 0,
          explanation: "Plant roots hold soil in place, preventing erosion."
        },
        {
          id: 10,
          question: "What is a mutual benefit relationship?",
          options: [
            "Both organisms help each other",
            "One benefits at the other's expense",
            "Neither benefits at all",
            "Only humans benefit"
          ],
          correctAnswer: 0,
          explanation: "Mutualism benefits both participating species."
        },
        {
          id: 11,
          question: "What do plants regulate in ecosystems?",
          options: [
            "Water cycles",
            "Only animal behavior",
            "Sunlight intensity",
            "Soil color"
          ],
          correctAnswer: 0,
          explanation: "Plants influence water movement through environments."
        },
        {
          id: 12,
          question: "What do some plants rely on for reproduction?",
          options: [
            "Specific pollinators",
            "Only human gardeners",
            "Random chance",
            "Other plants flowering"
          ],
          correctAnswer: 0,
          explanation: "Some plants have specialized pollinator relationships."
        },
        {
          id: 13,
          question: "What do plants create for other organisms?",
          options: [
            "Habitats",
            "Only food",
            "Just shelter",
            "Predators"
          ],
          correctAnswer: 0,
          explanation: "Plants form the physical structure of many habitats."
        },
        {
          id: 14,
          question: "What process do plants use to produce oxygen?",
          options: [
            "Photosynthesis",
            "Respiration only",
            "Decomposition",
            "Transpiration"
          ],
          correctAnswer: 0,
          explanation: "Photosynthesis converts carbon dioxide to oxygen."
        },
        {
          id: 15,
          question: "What do animals use plants for?",
          options: [
            "Nesting materials",
            "Only as toys",
            "As weapons",
            "To hide from all dangers"
          ],
          correctAnswer: 0,
          explanation: "Many animals incorporate plant materials into nests."
        },
        {
          id: 16,
          question: "What forms the base of food chains?",
          options: [
            "Plants",
            "Large animals",
            "Insects only",
            "Decomposers"
          ],
          correctAnswer: 0,
          explanation: "Plants are primary producers that support other life."
        },
        {
          id: 17,
          question: "What do plants help moderate?",
          options: [
            "Climate",
            "Only plant growth",
            "Animal intelligence",
            "Soil composition only"
          ],
          correctAnswer: 0,
          explanation: "Plants influence local temperature and humidity."
        },
        {
          id: 18,
          question: "What do flat flower surfaces provide?",
          options: [
            "Landing platforms for pollinators",
            "Water collection only",
            "Sunlight reflection",
            "Seed storage"
          ],
          correctAnswer: 0,
          explanation: "Flat surfaces allow insects to land and feed."
        },
        {
          id: 19,
          question: "What shows plant importance in ecosystems?",
          options: [
            "Understanding their relationships",
            "Only counting them",
            "Measuring their height",
            "Pricing their value"
          ],
          correctAnswer: 0,
          explanation: "Ecological relationships reveal plant roles."
        },
        {
          id: 20,
          question: "What do specialized relationships demonstrate?",
          options: [
            "Evolutionary adaptation",
            "Random occurrences",
            "Human influence only",
            "Plant intelligence"
          ],
          correctAnswer: 0,
          explanation: "Specialization shows long-term evolutionary processes."
        }
      ]
    },
    
    {
      id: 6,
      title: "Conservation and Practical Applications",
      completed: false,
      content: `# Module 6: Conservation and Practical Applications

## Applying Your Knowledge
This final module focuses on practical applications of native plant knowledge. You'll learn about conservation efforts, gardening with natives, and how to contribute to plant preservation.

### Native Plant Conservation
Many native plants face threats from habitat loss and invasive species. Conservation efforts help protect these important plants. You can contribute to conservation in various ways.

**Conservation approaches:**
- Protecting natural habitats
- Removing invasive plant species
- Supporting native plant nurseries
- Participating in citizen science projects

### Gardening with Native Plants
Using native plants in gardens benefits both people and wildlife. Native gardens require less maintenance. They support local ecosystems. They preserve regional plant diversity.

**Gardening benefits:**
- Reduced water needs
- Less need for fertilizers and pesticides
- Attraction of beneficial wildlife
- Preservation of local plant heritage

### Citizen Science and Education
You can contribute to native plant knowledge. Record your observations. Participate in local plant surveys. Share knowledge with others. Support educational programs.

**Ways to contribute:**
- Keep records of flowering times
- Report rare plant sightings
- Volunteer with conservation groups
- Teach others about native plants

---

## Key Learning Points
- Native plants need conservation efforts
- Gardening with natives has multiple benefits
- Everyone can contribute to plant knowledge
- Practical application makes learning meaningful

You're now ready to apply your native plant knowledge in the real world!`,
      
      quiz: [
        {
          id: 1,
          question: "What threatens many native plants?",
          options: [
            "Habitat loss and invasive species",
            "Too much conservation",
            "Not enough sunlight",
            "Only natural predators"
          ],
          correctAnswer: 0,
          explanation: "Human activities and non-native species threaten natives."
        },
        {
          id: 2,
          question: "What is one conservation approach?",
          options: [
            "Protecting natural habitats",
            "Removing all plants",
            "Planting only non-natives",
            "Ignoring plant needs"
          ],
          correctAnswer: 0,
          explanation: "Habitat protection is fundamental to conservation."
        },
        {
          id: 3,
          question: "What do native gardens typically need less of?",
          options: [
            "Water",
            "Sunlight",
            "Space",
            "Color variety"
          ],
          correctAnswer: 0,
          explanation: "Native plants are adapted to local rainfall patterns."
        },
        {
          id: 4,
          question: "What do native gardens support?",
          options: [
            "Local ecosystems",
            "Only human enjoyment",
            "Invasive species",
            "Chemical use"
          ],
          correctAnswer: 0,
          explanation: "Native gardens provide habitat for local wildlife."
        },
        {
          id: 5,
          question: "What is citizen science?",
          options: [
            "Public participation in scientific research",
            "Only professional science",
            "Science for citizens only",
            "Political science"
          ],
          correctAnswer: 0,
          explanation: "Citizen science involves public contributions to research."
        },
        {
          id: 6,
          question: "What should you remove to help natives?",
          options: [
            "Invasive plant species",
            "All plants periodically",
            "Only native plants",
            "Soil and rocks"
          ],
          correctAnswer: 0,
          explanation: "Invasives compete with native plants."
        },
        {
          id: 7,
          question: "What do native gardens preserve?",
          options: [
            "Regional plant diversity",
            "Only flower colors",
            "Garden furniture",
            "Water features"
          ],
          correctAnswer: 0,
          explanation: "Using natives helps maintain local plant varieties."
        },
        {
          id: 8,
          question: "What can you record for citizen science?",
          options: [
            "Flowering times",
            "Only plant prices",
            "Garden sizes",
            "Fertilizer brands"
          ],
          correctAnswer: 0,
          explanation: "Phenology records (timing of events) are valuable data."
        },
        {
          id: 9,
          question: "What requires less fertilizer and pesticides?",
          options: [
            "Native gardens",
            "Only vegetable gardens",
            "All gardens equally",
            "Non-native gardens"
          ],
          correctAnswer: 0,
          explanation: "Natives are adapted to local soil and pest conditions."
        },
        {
          id: 10,
          question: "What should you report if you see it?",
          options: [
            "Rare plant sightings",
            "Only common weeds",
            "Garden decorations",
            "Soil types"
          ],
          correctAnswer: 0,
          explanation: "Rare plant reports help conservation efforts."
        },
        {
          id: 11,
          question: "Who can you volunteer with?",
          options: [
            "Conservation groups",
            "Only garden stores",
            "Plant breeders only",
            "Fertilizer companies"
          ],
          correctAnswer: 0,
          explanation: "Many organizations need volunteer help."
        },
        {
          id: 12,
          question: "What do native gardens attract?",
          options: [
            "Beneficial wildlife",
            "Only pests",
            "Just human visitors",
            "Bad weather"
          ],
          correctAnswer: 0,
          explanation: "Native plants naturally attract appropriate wildlife."
        },
        {
          id: 13,
          question: "What can you support to help natives?",
          options: [
            "Native plant nurseries",
            "Only large garden chains",
            "Artificial plant makers",
            "Chemical companies"
          ],
          correctAnswer: 0,
          explanation: "Supporting native nurseries encourages their availability."
        },
        {
          id: 14,
          question: "What can you teach others about?",
          options: [
            "Native plants",
            "Only plant prices",
            "Garden design trends",
            "Chemical formulas"
          ],
          correctAnswer: 0,
          explanation: "Sharing knowledge spreads conservation awareness."
        },
        {
          id: 15,
          question: "What makes learning meaningful?",
          options: [
            "Practical application",
            "Only passing tests",
            "Memorizing names",
            "Collecting certificates"
          ],
          correctAnswer: 0,
          explanation: "Applying knowledge gives it purpose and value."
        },
        {
          id: 16,
          question: "What do conservation efforts help?",
          options: [
            "Protect important plants",
            "Only increase plant prices",
            "Make gardening harder",
            "Remove all wildlife"
          ],
          correctAnswer: 0,
          explanation: "Conservation maintains plant diversity and health."
        },
        {
          id: 17,
          question: "What do native gardens require?",
          options: [
            "Less maintenance",
            "More daily care",
            "Constant attention",
            "Professional help"
          ],
          correctAnswer: 0,
          explanation: "Their adaptation reduces maintenance needs."
        },
        {
          id: 18,
          question: "What can you participate in locally?",
          options: [
            "Plant surveys",
            "Only garden parties",
            "Plant sales only",
            "Soil testing only"
          ],
          correctAnswer: 0,
          explanation: "Local surveys document plant populations."
        },
        {
          id: 19,
          question: "What do educational programs need?",
          options: [
            "Support from community",
            "Only government funding",
            "Expensive equipment",
            "Large facilities"
          ],
          explanation: "Community involvement strengthens education."
        },
        {
          id: 20,
          question: "What are you ready to do now?",
          options: [
            "Apply knowledge in real world",
            "Forget everything learned",
            "Only study more theory",
            "Stop learning about plants"
          ],
          correctAnswer: 0,
          explanation: "Practical application is the goal of learning."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Native Plant Studies Final Examination",
    description: "Comprehensive exam covering all 6 modules. Test your knowledge of native plant identification, ecology, habitats, life cycles, relationships, and conservation.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What defines a plant as native to a region?",
        options: [
          "It evolved naturally there over thousands of years",
          "It was recently planted by people",
          "It can survive anywhere in the world",
          "It only grows in botanical gardens"
        ],
        correctAnswer: 0,
        explanation: "Native status comes from natural evolution in the region.",
        module: 1
      },
      {
        id: 2,
        question: "Which benefit is NOT associated with native plants?",
        options: [
          "They require excessive watering and fertilizers",
          "They support local wildlife",
          "They help prevent soil erosion",
          "They preserve natural beauty"
        ],
        correctAnswer: 0,
        explanation: "Natives actually need LESS water and care.",
        module: 1
      },
      {
        id: 3,
        question: "What should you observe first when learning plants?",
        options: [
          "Leaf shapes and arrangements",
          "Scientific names only",
          "Nursery prices",
          "Social media popularity"
        ],
        correctAnswer: 0,
        explanation: "Start with visible characteristics.",
        module: 1
      },
      {
        id: 4,
        question: "What plant family has square stems?",
        options: [
          "Mint family",
          "Sunflower family",
          "Pea family",
          "Rose family"
        ],
        correctAnswer: 0,
        explanation: "Square stems characterize mint family.",
        module: 2
      },
      {
        id: 5,
        question: "What magnification is good for beginners?",
        options: [
          "10x hand lens",
          "100x microscope",
          "No magnification",
          "50x minimum"
        ],
        correctAnswer: 0,
        explanation: "10x is sufficient for field observation.",
        module: 2
      },
      {
        id: 6,
        question: "What are forest layers?",
        options: [
          "Canopy, understory, forest floor",
          "Only tall trees",
          "Just flowers",
          "Water and soil only"
        ],
        correctAnswer: 0,
        explanation: "Forests have distinct vertical layers.",
        module: 3
      },
      {
        id: 7,
        question: "What dominates grasslands?",
        options: [
          "Grasses and wildflowers",
          "Only trees",
          "Cacti only",
          "Water plants"
        ],
        correctAnswer: 0,
        explanation: "Grasses characterize grassland habitats.",
        module: 3
      },
      {
        id: 8,
        question: "How long do annuals live?",
        options: [
          "One year",
          "Two years",
          "Multiple years",
          "One season"
        ],
        correctAnswer: 0,
        explanation: "Annuals complete life cycle in one year.",
        module: 4
      },
      {
        id: 9,
        question: "What do biennials do first year?",
        options: [
          "Grow leaves and store energy",
          "Flower immediately",
          "Produce seeds",
          "Die without growing"
        ],
        correctAnswer: 0,
        explanation: "First year is vegetative growth for biennials.",
        module: 4
      },
      {
        id: 10,
        question: "What flower colors attract bees?",
        options: [
          "Blue, purple, yellow",
          "Only white",
          "Black and gray",
          "All colors equally"
        ],
        correctAnswer: 0,
        explanation: "Bees see these colors well.",
        module: 5
      },
      {
        id: 11,
        question: "What pollinates inconspicuous flowers?",
        options: [
          "Wind",
          "Large bees",
          "Butterflies",
          "Humans only"
        ],
        correctAnswer: 0,
        explanation: "Wind doesn't need showy flowers.",
        module: 5
      },
      {
        id: 12,
        question: "What threatens native plants?",
        options: [
          "Habitat loss and invasives",
          "Too much conservation",
          "Not enough sun",
          "Natural predators only"
        ],
        correctAnswer: 0,
        explanation: "Human impacts are major threats.",
        module: 6
      },
      {
        id: 13,
        question: "What needs less water?",
        options: [
          "Native gardens",
          "All gardens equally",
          "Non-native gardens",
          "Only vegetable gardens"
        ],
        correctAnswer: 0,
        explanation: "Natives are adapted to local rainfall.",
        module: 6
      },
      {
        id: 14,
        question: "What can you record for science?",
        options: [
          "Flowering times",
          "Only plant prices",
          "Garden sizes",
          "Fertilizer brands"
        ],
        correctAnswer: 0,
        explanation: "Phenology data is valuable.",
        module: 6
      },
      {
        id: 15,
        question: "What is citizen science?",
        options: [
          "Public participation in research",
          "Only professional science",
          "Science for citizens",
          "Political science"
        ],
        correctAnswer: 0,
        explanation: "Public contributes to scientific knowledge.",
        module: 6
      },
      {
        id: 16,
        question: "What do native plants provide wildlife?",
        options: [
          "Food and shelter",
          "Only pollen",
          "Just water",
          "Complete protection"
        ],
        correctAnswer: 0,
        explanation: "Plants are fundamental to wildlife support.",
        module: 5
      },
      {
        id: 17,
        question: "What is primary production?",
        options: [
          "Creating food from sunlight",
          "Making soil from rocks",
          "Producing water",
          "Creating animals"
        ],
        correctAnswer: 0,
        explanation: "Photosynthesis is primary production.",
        module: 5
      },
      {
        id: 18,
        question: "What do perennials do?",
        options: [
          "Live multiple years with dormancy",
          "Die after one flowering",
          "Never flower",
          "Grow only in winter"
        ],
        correctAnswer: 0,
        explanation: "Perennials live several years.",
        module: 4
      },
      {
        id: 19,
        question: "What happens in spring?",
        options: [
          "New growth and flowering",
          "Immediate death",
          "Complete dormancy",
          "Seed dispersal only"
        ],
        correctAnswer: 0,
        explanation: "Spring brings renewed growth.",
        module: 4
      },
      {
        id: 20,
        question: "What are wetland examples?",
        options: [
          "Marshes, swamps, streams",
          "Only deserts",
          "Mountain tops",
          "City parks"
        ],
        correctAnswer: 0,
        explanation: "Wetlands are water-influenced areas.",
        module: 3
      },
      {
        id: 21,
        question: "What adaptation do wetland plants need?",
        options: [
          "Grow in standing water",
          "Avoid all water",
          "Only dry soil",
          "Daily human watering"
        ],
        correctAnswer: 0,
        explanation: "Wetland plants tolerate wet conditions.",
        module: 3
      },
      {
        id: 22,
        question: "What leaf arrangement exists?",
        options: [
          "Alternate, opposite, whorled",
          "Only perfect circles",
          "Random patterns",
          "Pairs of three only"
        ],
        correctAnswer: 0,
        explanation: "These are common leaf arrangements.",
        module: 2
      },
      {
        id: 23,
        question: "What helps identification?",
        options: [
          "Recognizing plant families",
          "Only flower color",
          "Plant height only",
          "Scientific names only"
        ],
        correctAnswer: 0,
        explanation: "Family recognition simplifies identification.",
        module: 2
      },
      {
        id: 24,
        question: "What do native plants require?",
        options: [
          "Less maintenance",
          "More daily care",
          "Constant attention",
          "Professional help"
        ],
        correctAnswer: 0,
        explanation: "Adaptation reduces maintenance needs.",
        module: 1
      },
      {
        id: 25,
        question: "What do plants help prevent?",
        options: [
          "Soil erosion",
          "Rain from falling",
          "Sunshine",
          "All insects"
        ],
        correctAnswer: 0,
        explanation: "Roots stabilize soil.",
        module: 1
      },
      {
        id: 26,
        question: "What flower shape for butterflies?",
        options: [
          "Flat landing surfaces",
          "Deep tubes only",
          "No preference",
          "Spiky shapes"
        ],
        correctAnswer: 0,
        explanation: "Butterflies need platforms to land.",
        module: 5
      },
      {
        id: 27,
        question: "What do plants help regulate?",
        options: [
          "Water cycles",
          "Only animal behavior",
          "Sunlight",
          "Soil color"
        ],
        correctAnswer: 0,
        explanation: "Plants influence water movement.",
        module: 5
      },
      {
        id: 28,
        question: "What develops in summer?",
        options: [
          "Fruit and seeds",
          "Only new leaves",
          "Just roots",
          "Next year's buds"
        ],
        correctAnswer: 0,
        explanation: "Summer is reproductive time.",
        module: 4
      },
      {
        id: 29,
        question: "What happens in autumn?",
        options: [
          "Seed dispersal",
          "New growth",
          "First flowering",
          "Complete inactivity"
        ],
        correctAnswer: 0,
        explanation: "Autumn is seed dispersal time.",
        module: 4
      },
      {
        id: 30,
        question: "What is forest soil like?",
        options: [
          "Rich with decaying leaves",
          "Dry and sandy only",
          "Rocky without organic matter",
          "Artificial mix"
        ],
        correctAnswer: 0,
        explanation: "Decomposition enriches forest soil.",
        module: 3
      },
      {
        id: 31,
        question: "What do grassland habitats receive?",
        options: [
          "Full sun",
          "Complete shade",
          "Only morning sun",
          "Light through water"
        ],
        correctAnswer: 0,
        explanation: "Grasslands are open, sunny areas.",
        module: 3
      },
      {
        id: 32,
        question: "What tool helps beginners?",
        options: [
          "Regional field guide",
          "Expensive microscope",
          "Only memory",
          "Social media"
        ],
        correctAnswer: 0,
        explanation: "Field guides focus on local plants.",
        module: 2
      },
      {
        id: 33,
        question: "What should you record?",
        options: [
          "Personal observations",
          "Only scientific names",
          "Plant costs",
          "Others' opinions"
        ],
        correctAnswer: 0,
        explanation: "Your observations build knowledge.",
        module: 2
      },
      {
        id: 34,
          question: "What is a cultural benefit?",
          options: [
            "Preserving local heritage",
            "Looking like other countries",
            "Replacing tradition",
            "Being in every store"
          ],
          correctAnswer: 0,
          explanation: "Natives preserve local character.",
          module: 1
        },
        {
          id: 35,
          question: "What improves recognition?",
          options: [
            "Practice and experience",
            "Only reading books",
            "Buying many plants",
            "Waiting passively"
          ],
          correctAnswer: 0,
          explanation: "Active practice builds skills.",
          module: 2
        },
        {
          id: 36,
          question: "What can you remove to help?",
          options: [
            "Invasive species",
            "All plants",
            "Only natives",
            "Soil and rocks"
          ],
          correctAnswer: 0,
          explanation: "Removing invasives helps natives.",
          module: 6
        },
        {
          id: 37,
          question: "What do native gardens preserve?",
          options: [
            "Regional diversity",
            "Only flower colors",
            "Garden furniture",
            "Water features"
          ],
          correctAnswer: 0,
          explanation: "Using natives maintains diversity.",
          module: 6
        },
        {
          id: 38,
          question: "What should you report?",
          options: [
            "Rare plant sightings",
            "Only common weeds",
            "Decorations",
            "Soil types"
          ],
          correctAnswer: 0,
          explanation: "Rare plant reports aid conservation.",
          module: 6
        },
        {
          id: 39,
          question: "What can you volunteer with?",
          options: [
            "Conservation groups",
            "Only garden stores",
            "Plant breeders",
            "Chemical companies"
          ],
          correctAnswer: 0,
          explanation: "Many groups need volunteers.",
          module: 6
        },
        {
          id: 40,
          question: "What makes learning meaningful?",
          options: [
            "Practical application",
            "Only passing tests",
            "Memorizing names",
            "Collecting certificates"
          ],
          correctAnswer: 0,
          explanation: "Application gives purpose to learning.",
          module: 6
        }
      ]
    }
  };
  
  // Export for use in your application
  export default nativePlantStudiesCertificate;
