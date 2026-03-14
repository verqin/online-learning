export const landscapingCertificateCourse = {
  id: "landscaping-certificate",
  title: "Landscaping (Certificate)",
  description: "Learn the fundamentals of landscape design, plant selection, and garden maintenance. Perfect for beginners wanting to create beautiful outdoor spaces.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌿",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Landscaping",
      content: `
# Introduction to Landscaping

Welcome to the world of landscaping! This module will introduce you to the basic concepts and principles that form the foundation of landscape design.

## What is Landscaping?

Landscaping is the art and science of modifying outdoor spaces for both beauty and function. It combines creative design with practical knowledge about plants, soil, and outdoor living. A well-designed landscape enhances property value, creates enjoyable spaces, and supports local ecosystems.

## Key Principles of Good Design

Every great landscape follows three main principles:

**Unity** - All elements should work together to create a cohesive look
**Balance** - Visual weight should be distributed evenly across the space
**Focal Points** - Specific features that draw attention and create interest

When planning a landscape, always consider how different elements relate to each other. Plants should complement hardscape features like paths and patios. Color schemes should be harmonious. Textures should create visual interest without overwhelming the space.

## Understanding Your Space

Before designing anything, you need to understand your site. Start by observing these factors:

**Sun Exposure** - Track where sunlight falls throughout the day
**Soil Type** - Is it sandy, clay, or loam?
**Existing Features** - Note trees, structures, and drainage patterns
**Client Needs** - How will the space be used?

A simple site analysis involves walking the property at different times of day. Take notes about what you see. Draw a basic map showing important features. This understanding forms the basis of your design decisions.

## Design Process Basics

The landscape design process follows these steps:
1. Initial consultation and site analysis
2. Concept development and rough sketches
3. Detailed design with plant selections
4. Implementation planning
5. Installation guidance

Remember that good design solves problems. A slope becomes a terraced garden. A bare wall becomes a living green space. Hot areas get shade trees. Wet areas get appropriate plants. Always think about how design can improve both function and beauty.

## Environmental Considerations

Sustainable landscaping practices protect our environment while creating beautiful spaces. Consider native plants that require less water and support local wildlife. Think about water conservation through proper irrigation planning. Remember that healthy soil supports healthy plants.

Landscaping isn't just about making things look pretty - it's about creating spaces that work well, last long, and respect the natural environment.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the definition of landscaping?",
          options: [
            "Only planting flowers in a garden",
            "The art and science of modifying outdoor spaces",
            "Just mowing lawns and trimming hedges",
            "Building structures in backyards"
          ],
          correctAnswer: 1,
          explanation: "Landscaping combines creative design with practical knowledge about plants, soil, and outdoor living."
        },
        {
          id: 2,
          question: "Which principle refers to all elements working together?",
          options: ["Balance", "Focal Points", "Unity", "Color Scheme"],
          correctAnswer: 2,
          explanation: "Unity means all landscape elements should work together to create a cohesive look."
        },
        {
          id: 3,
          question: "What should you track to understand sun exposure?",
          options: [
            "Where moonlight falls at night",
            "Where sunlight falls throughout the day",
            "Temperature at noon only",
            "Cloud patterns in the morning"
          ],
          correctAnswer: 1,
          explanation: "Tracking where sunlight falls throughout the day helps you understand sun exposure patterns."
        },
        {
          id: 4,
          question: "What is the first step in the design process?",
          options: [
            "Buying plants",
            "Initial consultation and site analysis",
            "Drawing final plans",
            "Installing hardscape"
          ],
          correctAnswer: 1,
          explanation: "The first step is always initial consultation and site analysis to understand the space."
        },
        {
          id: 5,
          question: "What type of plants typically require less water?",
          options: ["Tropical plants", "Native plants", "Desert cacti only", "Annual flowers"],
          correctAnswer: 1,
          explanation: "Native plants are adapted to local conditions and typically require less water."
        },
        {
          id: 6,
          question: "What does good design solve?",
          options: ["Only aesthetic problems", "Only functional problems", "Both function and beauty problems", "Budget problems only"],
          correctAnswer: 2,
          explanation: "Good design solves both functional and aesthetic problems in a landscape."
        },
        {
          id: 7,
          question: "What should you note during site analysis?",
          options: ["Only tree locations", "Sun exposure, soil type, existing features, and client needs", "Just the property boundaries", "Only where to place flowers"],
          correctAnswer: 1,
          explanation: "Comprehensive site analysis includes sun exposure, soil type, existing features, and client needs."
        },
        {
          id: 8,
          question: "What principle involves distributing visual weight evenly?",
          options: ["Unity", "Focal Points", "Balance", "Proportion"],
          correctAnswer: 2,
          explanation: "Balance refers to distributing visual weight evenly across the space."
        },
        {
          id: 9,
          question: "What creates specific features that draw attention?",
          options: ["Unity elements", "Focal points", "Background plants", "Lawn areas"],
          correctAnswer: 1,
          explanation: "Focal points are specific features designed to draw attention and create interest."
        },
        {
          id: 10,
          question: "What should plants complement in a design?",
          options: ["Only other plants", "Hardscape features like paths and patios", "Just the house color", "Neighbor's garden"],
          correctAnswer: 1,
          explanation: "Plants should complement hardscape features like paths and patios for a cohesive design."
        },
        {
          id: 11,
          question: "What should color schemes be in landscaping?",
          options: ["Always bright", "Harmonious", "Contrasting only", "Monochromatic"],
          correctAnswer: 1,
          explanation: "Color schemes should be harmonious, creating a pleasant visual experience."
        },
        {
          id: 12,
          question: "What creates visual interest without overwhelming space?",
          options: ["Loud colors", "Textures", "Large statues only", "Bright lighting"],
          correctAnswer: 1,
          explanation: "Textures create visual interest without overwhelming the space when used properly."
        },
        {
          id: 13,
          question: "What becomes a terraced garden in problem-solving design?",
          options: ["Flat area", "Slope", "Wet area", "Shady spot"],
          correctAnswer: 1,
          explanation: "A slope can be transformed into a beautiful terraced garden through good design."
        },
        {
          id: 14,
          question: "What becomes a living green space in creative design?",
          options: ["Bare wall", "Existing lawn", "Garden shed", "Driveway"],
          correctAnswer: 0,
          explanation: "A bare wall can become a living green space with vertical gardening techniques."
        },
        {
          id: 15,
          question: "What do hot areas typically need?",
          options: ["More concrete", "Shade trees", "Bright flowers", "Water features only"],
          correctAnswer: 1,
          explanation: "Hot areas benefit from shade trees to create cooler microclimates."
        },
        {
          id: 16,
          question: "What gets appropriate plants in wet areas?",
          options: ["Dry areas", "Wet areas", "Sunny spots", "Windy corners"],
          correctAnswer: 1,
          explanation: "Wet areas should get plants that thrive in moist conditions."
        },
        {
          id: 17,
          question: "What supports healthy plants?",
          options: ["Healthy soil", "Frequent watering", "Constant fertilizing", "Daily pruning"],
          correctAnswer: 0,
          explanation: "Healthy soil provides nutrients and proper structure for healthy plant growth."
        },
        {
          id: 18,
          question: "What should you think about for water conservation?",
          options: ["Only using hoses", "Proper irrigation planning", "Watering at noon", "Using any plants"],
          correctAnswer: 1,
          explanation: "Proper irrigation planning is crucial for water conservation in landscaping."
        },
        {
          id: 19,
          question: "What does landscaping enhance besides beauty?",
          options: ["Only plant growth", "Property value and enjoyable spaces", "Only insect habitats", "Just lawn health"],
          correctAnswer: 1,
          explanation: "Landscaping enhances property value and creates enjoyable outdoor spaces."
        },
        {
          id: 20,
          question: "What does sustainable landscaping protect?",
          options: ["Only the plants", "Our environment", "Just the design", "Only the budget"],
          correctAnswer: 1,
          explanation: "Sustainable landscaping practices protect our environment while creating beautiful spaces."
        }
      ]
    },
    {
      id: 2,
      title: "Plant Selection and Care",
      content: `
# Plant Selection and Care

Choosing the right plants and knowing how to care for them is essential for successful landscaping. This module covers plant types, selection criteria, and basic care requirements.

## Understanding Plant Types

Plants are generally categorized into three main groups:

**Trees** - Woody plants with a single main stem (trunk)
**Shrubs** - Woody plants with multiple stems from the base
**Perennials** - Plants that live for multiple years, flowering each season

Each type serves different purposes in the landscape. Trees provide shade and structure. Shrubs create borders and screening. Perennials offer seasonal color and interest. Understanding these categories helps you create layered, interesting designs.

## Selection Criteria for Plants

When choosing plants, consider these five factors:

**Climate Zone** - Will the plant survive your local weather?
**Sun Requirements** - Does it need full sun, partial shade, or full shade?
**Soil Preferences** - What type of soil does it prefer?
**Mature Size** - How big will it grow?
**Maintenance Needs** - How much care does it require?

Always match plants to their preferred conditions. A sun-loving plant in shade will struggle. A water-loving plant in dry soil will suffer. Research each plant's needs before purchasing. This saves time, money, and frustration later.

## Planting Basics

Proper planting ensures healthy establishment. Follow these steps:

1. **Dig the hole** - Twice as wide as the root ball, same depth
2. **Prepare the plant** - Loosen roots if pot-bound
3. **Position properly** - Place at correct depth (not too deep!)
4. **Backfill with soil** - Use native soil mixed with compost
5. **Water thoroughly** - Soak the root zone completely
6. **Apply mulch** - 2-3 inches around base (not touching stem)

The right planting time depends on your climate and plant type. Generally, spring and fall are best when temperatures are moderate. Avoid planting during extreme heat or when frost is expected.

## Watering Techniques

Different plants have different water needs. Follow these guidelines:

**New plantings** - Water daily for first two weeks
**Established plants** - Water deeply but less frequently
**Container plants** - Check moisture daily (they dry out faster)
**Lawns** - Water early morning to reduce evaporation

Signs of overwatering include yellow leaves and mold. Signs of underwatering include wilted leaves and dry soil. Learn to read your plants' signals. Finger-test the soil - if it's dry 1-2 inches down, it's time to water.

## Fertilizing Fundamentals

Plants need nutrients to thrive. The three main nutrients are:

**Nitrogen (N)** - Promotes leaf and stem growth (green growth)
**Phosphorus (P)** - Supports root development and flowering
**Potassium (K)** - Improves overall health and disease resistance

Use balanced fertilizers for general maintenance. Specialty fertilizers address specific needs. Always follow package instructions. Over-fertilizing can burn plants and pollute waterways. Organic options like compost provide slow-release nutrients.

## Pruning Basics

Pruning maintains plant health and shape. Basic principles include:

**When to prune** - Depends on plant type and flowering time
**How to make cuts** - Just above buds at 45-degree angle
**What to remove** - Dead, diseased, or crossing branches
**Tools needed** - Sharp, clean pruners for different branch sizes

Spring-flowering plants bloom on old wood - prune after flowering. Summer-flowering plants bloom on new growth - prune in late winter. Always sanitize tools between plants to prevent disease spread.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three main plant categories?",
          options: [
            "Flowers, vegetables, and fruits",
            "Trees, shrubs, and perennials",
            "Indoor, outdoor, and aquatic plants",
            "Annuals, biennials, and tropicals"
          ],
          correctAnswer: 1,
          explanation: "Plants are generally categorized as trees (single trunk), shrubs (multiple stems), and perennials (live multiple years)."
        },
        {
          id: 2,
          question: "What do trees primarily provide in a landscape?",
          options: ["Seasonal color only", "Shade and structure", "Ground cover", "Quick screening"],
          correctAnswer: 1,
          explanation: "Trees provide shade, structure, and height to landscape designs."
        },
        {
          id: 3,
          question: "What factor determines if a plant survives local weather?",
          options: ["Flower color", "Climate zone", "Container size", "Fertilizer type"],
          correctAnswer: 1,
          explanation: "Climate zone compatibility determines whether a plant can survive local temperature extremes."
        },
        {
          id: 4,
          question: "How wide should a planting hole be compared to the root ball?",
          options: ["Same width", "Half as wide", "Twice as wide", "Three times as wide"],
          correctAnswer: 2,
          explanation: "Dig the hole twice as wide as the root ball to allow roots to spread easily."
        },
        {
          id: 5,
          question: "What depth should the planting hole be?",
          options: [
            "Deeper than the root ball",
            "Same depth as the root ball",
            "Shallower than the root ball",
            "Depth doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "The hole should be the same depth as the root ball to prevent planting too deep."
        },
        {
          id: 6,
          question: "When is generally the best time to plant?",
          options: ["Mid-summer heat", "Spring and fall", "Winter freeze", "During droughts"],
          correctAnswer: 1,
          explanation: "Spring and fall offer moderate temperatures that help plants establish without stress."
        },
        {
          id: 7,
          question: "How often should new plantings be watered initially?",
          options: ["Weekly", "Monthly", "Daily for first two weeks", "Only when it rains"],
          correctAnswer: 2,
          explanation: "New plantings need daily watering for the first two weeks to establish roots."
        },
        {
          id: 8,
          question: "When is the best time to water lawns?",
          options: ["Midday", "Late afternoon", "Early morning", "Night time"],
          correctAnswer: 2,
          explanation: "Water early morning to reduce evaporation and allow grass to dry before evening."
        },
        {
          id: 9,
          question: "What indicates overwatering?",
          options: ["Dry soil", "Yellow leaves and mold", "Wilted leaves", "Fast growth"],
          correctAnswer: 1,
          explanation: "Yellow leaves and mold growth are common signs of overwatering."
        },
        {
          id: 10,
          question: "Which nutrient promotes leaf and stem growth?",
          options: ["Phosphorus", "Potassium", "Nitrogen", "Calcium"],
          correctAnswer: 2,
          explanation: "Nitrogen (N) promotes green, leafy growth in plants."
        },
        {
          id: 11,
          question: "What supports root development and flowering?",
          options: ["Nitrogen", "Phosphorus", "Potassium", "Magnesium"],
          correctAnswer: 1,
          explanation: "Phosphorus (P) is essential for root development and flower production."
        },
        {
          id: 12,
          question: "What improves overall health and disease resistance?",
          options: ["Nitrogen", "Phosphorus", "Potassium", "Iron"],
          correctAnswer: 2,
          explanation: "Potassium (K) improves overall plant health and disease resistance."
        },
        {
          id: 13,
          question: "What should you use for general plant maintenance?",
          options: ["High-nitrogen only", "Balanced fertilizers", "No fertilizer", "Specialty mixes only"],
          correctAnswer: 1,
          explanation: "Balanced fertilizers provide all three main nutrients for general maintenance."
        },
        {
          id: 14,
          question: "When should spring-flowering plants be pruned?",
          options: ["Before flowering", "During flowering", "After flowering", "In late winter"],
          correctAnswer: 2,
          explanation: "Spring-flowering plants bloom on old wood, so prune after they finish flowering."
        },
        {
          id: 15,
          question: "When should summer-flowering plants be pruned?",
          options: ["After flowering", "In spring", "In late winter", "During summer"],
          correctAnswer: 2,
          explanation: "Summer-flowering plants bloom on new growth, so prune in late winter."
        },
        {
          id: 16,
          question: "What should always be removed when pruning?",
          options: ["All leaves", "Dead, diseased, or crossing branches", "Only large branches", "Flower buds"],
          correctAnswer: 1,
          explanation: "Always remove dead, diseased, or crossing branches to maintain plant health."
        },
        {
          id: 17,
          question: "What angle should pruning cuts be made at?",
          options: ["90-degree", "45-degree", "Straight across", "Curved"],
          correctAnswer: 1,
          explanation: "Make pruning cuts at a 45-degree angle just above buds."
        },
        {
          id: 18,
          question: "What should you do with tools between plants?",
          options: ["Nothing", "Sanitize them", "Sharpen them", "Oil them"],
          correctAnswer: 1,
          explanation: "Sanitize tools between plants to prevent disease spread."
        },
        {
          id: 19,
          question: "What do perennials offer in landscape design?",
          options: ["Permanent height", "Seasonal color and interest", "Instant screening", "Shade provision"],
          correctAnswer: 1,
          explanation: "Perennials offer changing seasonal color and interest year after year."
        },
        {
          id: 20,
          question: "What creates borders and screening in landscapes?",
          options: ["Trees", "Shrubs", "Perennials", "Annuals"],
          correctAnswer: 1,
          explanation: "Shrubs are ideal for creating borders, hedges, and screening in landscape designs."
        }
      ]
    },
    {
      id: 3,
      title: "Soil and Site Preparation",
      content: `
# Soil and Site Preparation

Healthy soil is the foundation of any successful landscape. This module teaches you how to assess, improve, and prepare soil for planting, along with essential site preparation techniques.

## Understanding Soil Types

Soil is generally classified into three main types based on particle size:

**Sandy Soil** - Large particles, drains quickly but holds few nutrients
**Clay Soil** - Tiny particles, holds water and nutrients but drains poorly
**Loam Soil** - Balanced mixture, ideal for most plants (the "gold standard")

You can identify your soil type with a simple test: Take a handful of moist soil and squeeze it. Sandy soil falls apart. Clay soil forms a tight ball. Loam holds together loosely but breaks when poked.

## Soil Testing Basics

Before planting, test your soil for these key factors:

**pH Level** - Measures acidity or alkalinity (most plants prefer 6.0-7.0)
**Nutrient Levels** - Nitrogen, phosphorus, potassium availability
**Texture** - Sand, silt, and clay proportions
**Organic Matter** - Percentage of decomposed material

Home test kits provide basic information. Laboratory tests offer detailed analysis. Testing helps you make informed decisions about soil amendments. It prevents problems and saves money on unnecessary treatments.

## Improving Soil Quality

Most soils benefit from adding organic matter. Here's how to improve different soil types:

**For sandy soil** - Add compost to increase water and nutrient retention
**For clay soil** - Add organic matter and coarse sand to improve drainage
**For all soils** - Regular compost addition improves structure and fertility

Compost is decomposed organic material that improves soil in multiple ways. It helps sandy soil retain moisture. It helps clay soil drain better. It feeds soil organisms that plants need. It's nature's perfect soil amendment.

## Site Clearing and Preparation

Proper site preparation ensures long-term success. Follow these steps:

1. **Clear the area** - Remove debris, weeds, and unwanted plants
2. **Test the soil** - As discussed above
3. **Till or loosen soil** - Break up compacted areas (but don't over-till!)
4. **Grade the site** - Ensure proper drainage away from structures
5. **Add amendments** - Mix in compost based on soil test results
6. **Let it settle** - Wait a week before planting if possible

Remove weeds completely, including roots. Consider solarization for heavily weeded areas (cover with clear plastic for 4-6 weeks in summer). This kills weeds and seeds naturally.

## Drainage Considerations

Poor drainage kills more plants than any other factor. Check drainage by:

**Digging a test hole** - 12 inches deep, fill with water
**Timing drainage** - Should drain within 2-4 hours
**Observing after rain** - Watch where water pools

Solutions for drainage problems include:
- **French drains** - Gravel-filled trenches with perforated pipes
- **Dry creek beds** - Decorative stone channels that direct water
- **Raised beds** - Elevate planting areas above wet soil
- **Swales** - Gentle ditches that redirect water flow

## Mulching Benefits and Techniques

Mulch is material spread over soil surface. Benefits include:

**Moisture retention** - Reduces water evaporation
**Weed suppression** - Blocks light from weed seeds
**Temperature moderation** - Keeps soil cooler in summer, warmer in winter
**Soil improvement** - Organic mulches decompose into nutrients

Apply 2-3 inches of mulch around plants. Keep it away from tree trunks and plant stems. Replenish as it decomposes. Organic options include wood chips, straw, and leaves. Inorganic options include stone and rubber mulch.

## Creating Planting Beds

Well-prepared beds make maintenance easier. Consider these bed types:

**Raised beds** - Contained areas with improved soil (great for poor native soil)
**Island beds** - Freestanding beds accessible from all sides
**Border beds** - Along fences, walls, or property lines
**Container gardens** - Pots and planters for flexibility

Edge beds clearly to separate from lawn areas. This prevents grass from invading and makes mowing easier. Use materials that match your landscape style - metal, plastic, stone, or brick edging all work well.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three main soil types?",
          options: [
            "Red, brown, and black soil",
            "Topsoil, subsoil, and bedrock",
            "Sandy, clay, and loam soil",
            "Wet, dry, and average soil"
          ],
          correctAnswer: 2,
          explanation: "Soil is classified by particle size: sandy (large), clay (tiny), and loam (balanced mixture)."
        },
        {
          id: 2,
          question: "What is considered the 'gold standard' for most plants?",
          options: ["Sandy soil", "Clay soil", "Loam soil", "Rocky soil"],
          correctAnswer: 2,
          explanation: "Loam soil is the ideal balance of sand, silt, and clay that most plants prefer."
        },
        {
          id: 3,
          question: "How does sandy soil behave when squeezed?",
          options: [
            "Forms a tight ball",
            "Holds together loosely",
            "Falls apart",
            "Stays in perfect shape"
          ],
          correctAnswer: 2,
          explanation: "Sandy soil falls apart when squeezed because the large particles don't stick together."
        },
        {
          id: 4,
          question: "What pH range do most plants prefer?",
          options: ["4.0-5.0", "5.0-6.0", "6.0-7.0", "7.0-8.0"],
          correctAnswer: 2,
          explanation: "Most plants thrive in slightly acidic to neutral soil with pH 6.0-7.0."
        },
        {
          id: 5,
          question: "What should you add to sandy soil to improve it?",
          options: ["More sand", "Compost", "Clay", "Gravel"],
          correctAnswer: 1,
          explanation: "Add compost to sandy soil to increase water and nutrient retention."
        },
        {
          id: 6,
          question: "What helps clay soil drain better?",
          options: ["More water", "Organic matter and coarse sand", "Compacting it", "Plastic lining"],
          correctAnswer: 1,
          explanation: "Organic matter and coarse sand improve clay soil drainage by creating air spaces."
        },
        {
          id: 7,
          question: "What is nature's perfect soil amendment?",
          options: ["Chemical fertilizer", "Compost", "Sand", "Lime"],
          correctAnswer: 1,
          explanation: "Compost is decomposed organic material that improves all soil types naturally."
        },
        {
          id: 8,
          question: "What should you remove completely during site clearing?",
          options: ["Only weed leaves", "Debris, weeds, and unwanted plants", "All insects", "Every rock"],
          correctAnswer: 1,
          explanation: "Clear all debris, weeds (including roots), and unwanted plants for proper site preparation."
        },
        {
          id: 9,
          question: "What natural method kills weeds using plastic?",
          options: ["Mulching", "Solarization", "Tilling", "Watering"],
          correctAnswer: 1,
          explanation: "Solarization uses clear plastic to trap heat and kill weeds and seeds naturally."
        },
        {
          id: 10,
          question: "How long should water drain from a test hole?",
          options: ["Immediately", "2-4 hours", "12 hours", "24 hours"],
          correctAnswer: 1,
          explanation: "Properly draining soil should empty a test hole within 2-4 hours."
        },
        {
          id: 11,
          question: "What are gravel-filled trenches with pipes called?",
          options: ["Swales", "French drains", "Dry creek beds", "Raised beds"],
          correctAnswer: 1,
          explanation: "French drains are gravel-filled trenches with perforated pipes that redirect water."
        },
        {
          id: 12,
          question: "What are decorative stone channels that direct water?",
          options: ["French drains", "Dry creek beds", "Swales", "Ponds"],
          correctAnswer: 1,
          explanation: "Dry creek beds are decorative stone channels that handle drainage while adding beauty."
        },
        {
          id: 13,
          question: "How much mulch should you apply around plants?",
          options: ["1 inch", "2-3 inches", "6 inches", "Just a dusting"],
          correctAnswer: 1,
          explanation: "Apply 2-3 inches of mulch for optimal moisture retention and weed suppression."
        },
        {
          id: 14,
          question: "Where should you keep mulch away from?",
          options: ["Soil surface", "Tree trunks and plant stems", "Garden edges", "Pathways"],
          correctAnswer: 1,
          explanation: "Keep mulch away from tree trunks and plant stems to prevent rot and disease."
        },
        {
          id: 15,
          question: "What moderates soil temperature in summer and winter?",
          options: ["Watering", "Mulch", "Fertilizer", "Shade cloth"],
          correctAnswer: 1,
          explanation: "Mulch moderates soil temperature, keeping it cooler in summer and warmer in winter."
        },
        {
          id: 16,
          question: "What type of bed is great for poor native soil?",
          options: ["Island beds", "Raised beds", "Border beds", "Container gardens"],
          correctAnswer: 1,
          explanation: "Raised beds allow you to create ideal soil conditions above poor native soil."
        },
        {
          id: 17,
          question: "What are freestanding beds accessible from all sides?",
          options: ["Raised beds", "Island beds", "Border beds", "Container gardens"],
          correctAnswer: 1,
          explanation: "Island beds are freestanding planting areas that can be accessed from all sides."
        },
        {
          id: 18,
          question: "What prevents grass from invading planting beds?",
          options: ["More watering", "Clear edging", "Tall plants", "Heavy mulch"],
          correctAnswer: 1,
          explanation: "Clear edging separates beds from lawns, preventing grass invasion and easing mowing."
        },
        {
          id: 19,
          question: "What kills more plants than any other factor?",
          options: ["Too much sun", "Poor drainage", "Not enough fertilizer", "Wrong plant color"],
          correctAnswer: 1,
          explanation: "Poor drainage causes root rot and oxygen deprivation, killing more plants than other factors."
        },
        {
          id: 20,
          question: "What should you wait for before planting after preparation?",
          options: ["Next season", "A week if possible", "Immediately", "First rain"],
          correctAnswer: 1,
          explanation: "Let prepared soil settle for a week before planting to allow amendments to integrate."
        }
      ]
    },
    {
      id: 4,
      title: "Basic Design Principles",
      content: `
# Basic Design Principles

Good landscape design follows fundamental principles that create beautiful, functional spaces. This module covers essential design concepts and how to apply them effectively.

## The Design Elements

All landscapes combine these basic elements:

**Line** - Creates movement and directs the eye (paths, bed edges)
**Form** - The shape of plants and structures (round, columnar, weeping)
**Texture** - Surface quality (fine, medium, coarse)
**Color** - Creates mood and interest (warm, cool, neutral)

Lines can be straight (formal) or curved (informal). Forms should be balanced throughout the design. Textures add depth - combine fine and coarse textures for interest. Color schemes can be monochromatic, analogous, or complementary.

## Creating Unity and Harmony

Unity means all parts work together. Achieve unity through:

**Repetition** - Using similar elements throughout the design
**Grouping** - Planting in clusters rather than singly
**Consistency** - Maintaining a consistent style
**Simplicity** - Avoiding too many different elements

Repeat key plants, colors, or materials. Group plants in odd numbers (3, 5, 7) for natural look. Choose a consistent style - formal, cottage, modern, etc. Keep designs simple rather than complicated. A unified design feels intentional and complete.

## Establishing Balance

Balance creates visual stability. Two main types:

**Symmetrical balance** - Mirror image on either side (formal)
**Asymmetrical balance** - Different elements with equal visual weight (informal)

Formal gardens use symmetrical balance for elegance. Informal gardens use asymmetrical balance for natural feel. Visual weight depends on size, color, and texture. Large, dark, or coarse elements feel heavier. Balance these throughout your design.

## Creating Focal Points

Focal points draw attention and create interest. Common focal points include:

**Specimen plants** - Unique or striking plants
**Water features** - Fountains, ponds, or birdbaths
**Structures** - Arbors, gazebos, or benches
**Art pieces** - Sculptures or decorative elements

Place focal points where you want attention. Use them to lead the eye through the space. Don't overdo it - one or two strong focal points per view. Frame focal points with plants or structures to enhance them.

## Scale and Proportion

Scale refers to size relationships. Proportion refers to parts relative to whole. Guidelines:

**Match scale to space** - Large plants in large spaces, small plants in small spaces
**Consider mature size** - Plant for how big things will be, not how small they start
**Human scale** - Design for human use and comfort
**House relationship** - Landscape should complement building scale

A common mistake is planting too many small plants that grow into crowded messes. Another is using oversized features that overwhelm the space. Always think about how everything will look at maturity.

## Rhythm and Sequence

Rhythm creates visual movement. Achieve it through:

**Repetition** - Repeating elements at intervals
**Progression** - Gradual change in size, color, or texture
**Transition** - Smooth change from one area to another

Create rhythm by repeating key plants along a path. Use progression by arranging plants from short to tall. Design transitions between different garden areas. Rhythm makes a design feel dynamic rather than static.

## Practical Application Steps

Apply design principles through this process:

1. **Site analysis** - Understand existing conditions (from Module 1)
2. **Needs assessment** - Determine how space will be used
3. **Concept development** - Create rough ideas based on principles
4. **Plant selection** - Choose plants that fulfill design goals
5. **Hardscape integration** - Incorporate paths, patios, etc.
6. **Implementation plan** - Create installation sequence

Start with bubble diagrams showing activity areas. Refine into more detailed sketches. Consider views from inside the house. Think about seasonal changes. Remember that good design solves problems beautifully.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What creates movement and directs the eye in design?",
          options: ["Form", "Line", "Texture", "Color"],
          correctAnswer: 1,
          explanation: "Line creates visual movement and directs attention through paths, bed edges, and arrangements."
        },
        {
          id: 2,
          question: "What are the shapes of plants and structures called?",
          options: ["Line", "Form", "Texture", "Color"],
          correctAnswer: 1,
          explanation: "Form refers to the three-dimensional shape of elements - round, columnar, weeping, etc."
        },
        {
          id: 3,
          question: "What adds depth when combining fine and coarse varieties?",
          options: ["Line", "Form", "Texture", "Color"],
          correctAnswer: 2,
          explanation: "Texture adds visual depth when you combine fine-textured and coarse-textured plants."
        },
        {
          id: 4,
          question: "What creates mood and interest through warm or cool schemes?",
          options: ["Line", "Form", "Texture", "Color"],
          correctAnswer: 3,
          explanation: "Color creates emotional response and visual interest through coordinated schemes."
        },
        {
          id: 5,
          question: "What means all parts work together in a design?",
          options: ["Balance", "Unity", "Focal Points", "Scale"],
          correctAnswer: 1,
          explanation: "Unity means all design elements work together to create a cohesive whole."
        },
        {
          id: 6,
          question: "How should you plant for a natural look?",
          options: ["In straight lines", "In even numbers", "In odd-numbered clusters", "Singly throughout"],
          correctAnswer: 2,
          explanation: "Plant in odd-numbered clusters (3, 5, 7) for a natural, pleasing arrangement."
        },
        {
          id: 7,
          question: "What creates mirror images on either side?",
          options: [
            "Asymmetrical balance",
            "Symmetrical balance",
            "Informal balance",
            "Natural balance"
          ],
          correctAnswer: 1,
          explanation: "Symmetrical balance creates formal, mirror-image designs on either side of a center line."
        },
        {
          id: 8,
          question: "What uses different elements with equal visual weight?",
          options: [
            "Symmetrical balance",
            "Asymmetrical balance",
            "Formal balance",
            "Perfect balance"
          ],
          correctAnswer: 1,
          explanation: "Asymmetrical balance uses different elements that have equal visual weight for informal designs."
        },
        {
          id: 9,
          question: "What feels visually heavier in design?",
          options: [
            "Small, light, fine elements",
            "Large, dark, coarse elements",
            "Brightly colored elements",
            "Invisible elements"
          ],
          correctAnswer: 1,
          explanation: "Large size, dark colors, and coarse textures create more visual weight in design."
        },
        {
          id: 10,
          question: "What draws attention and creates interest?",
          options: ["Unity elements", "Focal points", "Background plants", "Lawn areas"],
          correctAnswer: 1,
          explanation: "Focal points are designed features that draw attention and create visual interest."
        },
        {
          id: 11,
          question: "How many strong focal points should you have per view?",
          options: ["As many as possible", "One or two", "Exactly three", "None"],
          correctAnswer: 1,
          explanation: "Limit to one or two strong focal points per view to avoid visual confusion."
        },
        {
          id: 12,
          question: "What refers to size relationships in design?",
          options: ["Proportion", "Scale", "Balance", "Rhythm"],
          correctAnswer: 1,
          explanation: "Scale refers to the size relationship between different elements in the design."
        },
        {
          id: 13,
          question: "What refers to parts relative to the whole?",
          options: ["Scale", "Proportion", "Balance", "Unity"],
          correctAnswer: 1,
          explanation: "Proportion refers to how parts relate to each other and to the whole design."
        },
        {
          id: 14,
          question: "What should you always consider when planting?",
          options: [
            "Only initial size",
            "Mature size",
            "Container size at purchase",
            "Neighbor's plants"
          ],
          correctAnswer: 1,
          explanation: "Always plant considering mature size to avoid overcrowding and maintenance issues."
        },
        {
          id: 15,
          question: "What creates visual movement through repetition?",
          options: ["Balance", "Unity", "Rhythm", "Scale"],
          correctAnswer: 2,
          explanation: "Rhythm creates visual movement through repetition, progression, and transition of elements."
        },
        {
          id: 16,
          question: "What should you arrange from short to tall?",
          options: ["Colors", "Textures", "Plants", "Paths"],
          correctAnswer: 2,
          explanation: "Arrange plants in progression from short to tall for layered, rhythmic design."
        },
        {
          id: 17,
          question: "What is the first step in practical application?",
          options: [
            "Buying plants",
            "Site analysis",
            "Drawing final plans",
            "Installing hardscape"
          ],
          correctAnswer: 1,
          explanation: "Site analysis (understanding existing conditions) is always the first practical step."
        },
        {
          id: 18,
          question: "What should you start design with?",
          options: ["Plant lists", "Bubble diagrams", "Final drawings", "Material orders"],
          correctAnswer: 1,
          explanation: "Start with bubble diagrams showing activity areas before creating detailed designs."
        },
        {
          id: 19,
          question: "What should you consider from inside the house?",
          options: ["Neighbor's opinion", "Views", "Property taxes", "Future owners"],
          correctAnswer: 1,
          explanation: "Consider views from inside the house when placing focal points and designing spaces."
        },
        {
          id: 20,
          question: "What solves problems beautifully?",
          options: ["Any design", "Expensive design", "Good design", "Trendy design"],
          correctAnswer: 2,
          explanation: "Good design solves functional problems while creating beautiful, intentional spaces."
        }
      ]
    },
    {
      id: 5,
      title: "Hardscape Elements",
      content: `
# Hardscape Elements

Hardscape refers to the non-living, structural elements in landscaping. This module covers common hardscape features, their functions, and how to integrate them with plants for complete designs.

## Paths and Walkways

Paths guide movement through the landscape. Consider these aspects:

**Function** - Where do people need to walk?
**Width** - Main paths: 3-4 feet, Secondary: 2 feet
**Materials** - Pavers, flagstone, gravel, brick, or concrete
**Style** - Straight for formal, curved for informal

Ensure paths are stable and slip-resistant. Include lighting for night use. Consider drainage - paths should slope slightly to shed water. Edging keeps materials contained and maintains clean lines.

## Patios and Sitting Areas

Patios extend living spaces outdoors. Design considerations:

**Location** - Convenient to house, consider sun/shade patterns
**Size** - Allow at least 25 square feet per person for seating
**Materials** - Stone, pavers, concrete, or decking
**Privacy** - Use screens, plants, or grading for intimacy

Place patios where they'll be used most - near kitchen for dining, in shade for afternoon use. Include space for furniture movement. Consider accessibility for all users. Proper base preparation prevents settling and uneven surfaces.

## Walls and Retaining Structures

Walls serve both practical and aesthetic purposes:

**Retaining walls** - Hold back soil on slopes
**Garden walls** - Define spaces and create planting opportunities
**Seating walls** - Provide casual seating at patio edges

Materials include stone, brick, concrete blocks, or timber. Always consider drainage behind retaining walls to prevent pressure buildup. Local regulations may require engineering for walls over certain heights. Safety first!

## Steps and Stairs

Steps change elevation safely and attractively. Guidelines:

**Riser height** - 4-6 inches (consistent throughout!)
**Tread depth** - 12-18 inches
**Width** - Match path width or wider
**Materials** - Should match or complement adjacent hardscape

Include handrails for steep or long stairways. Light steps for night safety. Non-slip surfaces are essential. Consider including landing areas on long stair runs for rest stops.

## Water Features

Water adds movement, sound, and wildlife attraction. Options include:

**Fountains** - Recirculating water with pumps
**Ponds** - Still water ecosystems
**Streams** - Moving water channels
**Birdbaths** - Simple water sources for wildlife

Consider maintenance requirements. Pumps need electricity. Ponds need balancing to prevent algae. All water features need occasional cleaning. Safety is crucial if children are present - depth restrictions or barriers may be needed.

## Outdoor Lighting

Lighting extends garden enjoyment into evening hours. Types include:

**Path lights** - Low-level lighting for safety
**Spotlights** - Highlight features or plants
**Deck/step lights** - Built-in for safety areas
**Ambient lighting** - Creates overall illumination

Use LED for energy efficiency. Consider solar options for easy installation. Aim lights carefully to avoid glare. Create layers of light for interest. Include timers or sensors for convenience and security.

## Integration with Plants

Hardscape and softscape (plants) should work together. Strategies:

**Softening edges** - Let plants spill over or frame hardscape
**Repeating materials** - Use similar stone in walls and paths
**Considering scale** - Match hardscape size to plant size
**Creating unity** - Consistent style throughout

Plant pockets in walls add greenery. Vines can cover fences or structures. Container plants on patios add flexibility. Always leave planting space near hardscape - don't pave everything!

## Material Selection Guide

Choose materials based on:

**Style compatibility** - Match your overall design theme
**Durability** - Consider weather and wear resistance
**Maintenance** - How much upkeep will it need?
**Cost** - Initial cost versus long-term value
**Local availability** - Reduces cost and environmental impact

Natural stone offers beauty but can be expensive. Concrete is affordable and versatile. Wood adds warmth but requires maintenance. Composite materials offer low maintenance. Always see samples in your space before deciding.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What refers to non-living, structural landscape elements?",
          options: ["Softscape", "Hardscape", "Plantscape", "Greenscape"],
          correctAnswer: 1,
          explanation: "Hardscape includes all non-living elements like paths, walls, and patios in landscaping."
        },
        {
          id: 2,
          question: "What guides movement through the landscape?",
          options: ["Walls", "Paths", "Lighting", "Water features"],
          correctAnswer: 1,
          explanation: "Paths and walkways guide people through the landscape safely and intentionally."
        },
        {
          id: 3,
          question: "How wide should main paths typically be?",
          options: ["1 foot", "2 feet", "3-4 feet", "6 feet"],
          correctAnswer: 2,
          explanation: "Main paths should be 3-4 feet wide to allow comfortable passage for two people."
        },
        {
          id: 4,
          question: "What extends living spaces outdoors?",
          options: ["Paths", "Patios", "Walls", "Lighting"],
          correctAnswer: 1,
          explanation: "Patios create outdoor rooms that extend living and entertainment spaces."
        },
        {
          id: 5,
          question: "How much space should you allow per person on patios?",
          options: ["10 sq ft", "15 sq ft", "25 sq ft", "50 sq ft"],
          correctAnswer: 2,
          explanation: "Allow at least 25 square feet per person for comfortable patio seating with furniture."
        },
        {
          id: 6,
          question: "What holds back soil on slopes?",
          options: ["Garden walls", "Retaining walls", "Seating walls", "Privacy walls"],
          correctAnswer: 1,
          explanation: "Retaining walls are specifically designed to hold back soil and prevent erosion on slopes."
        },
        {
          id: 7,
          question: "What should you always consider behind retaining walls?",
          options: ["Lighting", "Drainage", "Planting", "Decoration"],
          correctAnswer: 1,
          explanation: "Proper drainage behind retaining walls prevents water pressure buildup and failure."
        },
        {
          id: 8,
          question: "What is the ideal riser height for steps?",
          options: ["2-3 inches", "4-6 inches", "8-10 inches", "12 inches"],
          correctAnswer: 1,
          explanation: "4-6 inch riser height is comfortable and safe for most people using landscape steps."
        },
        {
          id: 9,
          question: "What should tread depth be on steps?",
          options: ["6-8 inches", "12-18 inches", "24 inches", "36 inches"],
          correctAnswer: 1,
          explanation: "12-18 inch tread depth provides secure footing on landscape steps."
        },
        {
          id: 10,
          question: "What adds movement, sound, and wildlife attraction?",
          options: ["Lighting", "Walls", "Water features", "Paths"],
          correctAnswer: 2,
          explanation: "Water features add visual movement, pleasant sounds, and attract birds and wildlife."
        },
        {
          id: 11,
          question: "What do all water features need occasionally?",
          options: ["Replacement", "Cleaning", "Painting", "Moving"],
          correctAnswer: 1,
          explanation: "All water features need occasional cleaning to maintain appearance and water quality."
        },
        {
          id: 12,
          question: "What extends garden enjoyment into evening hours?",
          options: ["Larger plants", "Outdoor lighting", "More seating", "Bright colors"],
          correctAnswer: 1,
          explanation: "Outdoor lighting allows safe use and enjoyment of landscapes after dark."
        },
        {
          id: 13,
          question: "What type of lighting is best for energy efficiency?",
          options: ["Incandescent", "Halogen", "LED", "Fluorescent"],
          correctAnswer: 2,
          explanation: "LED lighting offers the best energy efficiency and longevity for outdoor use."
        },
        {
          id: 14,
          question: "What should work together in complete designs?",
          options: [
            "Only different plants",
            "Hardscape and softscape",
            "Only hardscape elements",
            "Neighboring properties"
          ],
          correctAnswer: 1,
          explanation: "Complete designs integrate hardscape (structures) and softscape (plants) harmoniously."
        },
        {
          id: 15,
          question: "What strategy lets plants spill over hardscape edges?",
          options: ["Hiding plants", "Softening edges", "Removing plants", "Paving over plants"],
          correctAnswer: 1,
          explanation: "Letting plants spill over or frame hardscape softens edges and integrates elements."
        },
        {
          id: 16,
          question: "What adds flexibility with movable greenery?",
          options: ["Tree planting", "Container plants", "Lawn areas", "Wildflower meadows"],
          correctAnswer: 1,
          explanation: "Container plants on patios and hardscape add flexible, movable greenery."
        },
        {
          id: 17,
          question: "What should you always leave near hardscape?",
          options: ["Planting space", "Empty space", "Parking space", "Storage space"],
          correctAnswer: 0,
          explanation: "Always leave planting space near hardscape to integrate greenery and soften structures."
        },
        {
          id: 18,
          question: "What should you match to your overall design theme?",
          options: [
            "Only plant colors",
            "Hardscape materials",
            "Neighbor's choices",
            "Current trends only"
          ],
          correctAnswer: 1,
          explanation: "Choose hardscape materials that match your overall design style and theme."
        },
        {
          id: 19,
          question: "What offers beauty but can be expensive?",
          options: ["Concrete", "Natural stone", "Composite materials", "Gravel"],
          correctAnswer: 1,
          explanation: "Natural stone offers timeless beauty but often comes with higher cost."
        },
        {
          id: 20,
          question: "What should you do before deciding on materials?",
          options: [
            "See samples in your space",
            "Ask everyone you know",
            "Choose the cheapest",
            "Copy your neighbor"
          ],
          correctAnswer: 0,
          explanation: "Always see material samples in your actual space before making final decisions."
        }
      ]
    },
    {
      id: 6,
      title: "Maintenance and Seasonal Care",
      content: `
# Maintenance and Seasonal Care

Regular maintenance keeps landscapes healthy and beautiful year-round. This module covers essential care tasks organized by season, plus troubleshooting common problems.

## Spring Care Tasks

Spring is renewal time. Key tasks include:

**Cleanup** - Remove winter debris, cut back dead perennial foliage
**Soil preparation** - Test and amend soil as needed
**Pruning** - Shape spring-flowering shrubs after they bloom
**Planting** - Install new plants as weather warms
**Fertilizing** - Apply balanced fertilizer as growth begins
**Weeding** - Remove weeds early before they spread

Divide and transplant perennials that have become overcrowded. Edge beds to maintain clean lines. Check irrigation systems after winter - repair leaks, adjust heads. Apply fresh mulch where needed.

## Summer Maintenance

Summer focuses on sustaining growth through heat. Essential tasks:

**Watering** - Deep, infrequent watering rather than daily sprinkles
**Mowing** - Keep lawn at proper height (don't cut too short!)
**Deadheading** - Remove spent flowers to encourage more blooms
**Pest monitoring** - Watch for insects and diseases
**Weeding** - Continue regular weeding

Water early morning to reduce evaporation. Adjust mower height higher during heat stress. Check plants for signs of stress - wilting, discoloration. Provide shade for sensitive plants if needed. Harvest vegetables and herbs regularly.

## Autumn Preparations

Autumn prepares landscapes for winter. Important activities:

**Leaf management** - Rake or mulch fallen leaves
**Planting** - Ideal time for trees, shrubs, perennials, and bulbs
**Cleanup** - Remove annuals, cut back perennials (or leave for winter interest)
**Fertilizing** - Apply fall fertilizer to lawns
**Winter preparation** - Protect tender plants, drain irrigation systems

Leave some seed heads for birds. Plant spring-blooming bulbs. Apply winter mulch after ground freezes. Clean and store tools. Take notes about what worked and didn't this year.

## Winter Care

Winter is planning and protection time. Focus on:

**Protection** - Shield plants from frost, wind, and heavy snow
**Planning** - Design next year's garden, order seeds and plants
**Tool maintenance** - Clean, sharpen, and repair tools
**Structure checks** - Inspect fences, trellises, and hardscape
**Indoor gardening** - Care for houseplants, start seeds if desired

Knock heavy snow off branches to prevent breakage. Use burlap screens for wind protection. Avoid walking on frozen lawns. Monitor stored bulbs and tubers. Enjoy garden catalogs and plan improvements.

## Lawn Care Basics

Healthy lawns require seasonal attention:

**Mowing** - Never remove more than 1/3 of blade height at once
**Watering** - 1 inch per week including rainfall
**Fertilizing** - Spring and fall applications for most grasses
**Aeration** - Relieve compaction annually or biannually
**Overseeding** - Fill thin areas in fall

Mow when grass is dry. Keep mower blades sharp. Leave clippings on lawn (they return nutrients). Choose grass type suited to your climate. Consider reducing lawn area with groundcovers or planting beds.

## Pest and Disease Management

Integrated Pest Management (IPM) approach:

**Prevention** - Choose resistant plants, maintain plant health
**Monitoring** - Regular inspection for early detection
**Identification** - Know what problem you're dealing with
**Intervention** - Start with least toxic methods first

Healthy plants resist problems better. Encourage beneficial insects. Use physical barriers when possible. Rotate plant families in vegetable gardens. Remove and destroy seriously infected plants. Consult local extension services for regional advice.

## Irrigation System Maintenance

Efficient watering saves time and resources. Maintenance tasks:

**Seasonal startup/shutdown** - Proper winterization prevents freeze damage
**Regular inspection** - Check for leaks, broken heads, clogs
**Timer adjustment** - Change schedules with seasons and weather
**Head alignment** - Ensure water lands on plants, not pavement
**Filter cleaning** - Clean filters in drip systems regularly

Consider smart controllers that adjust based on weather. Group plants with similar water needs together (hydrozoning). Use drip irrigation for beds and trees. Water deeply to encourage deep roots.

## Tool Care and Safety

Proper tools make work easier and safer. Maintenance includes:

**Cleaning** - Remove soil and sap after each use
**Sharpening** - Keep blades sharp for clean cuts
**Oiling** - Lubricate moving parts
**Storage** - Keep in dry, organized location
**Safety** - Use appropriate protective gear

Invest in quality tools that feel comfortable. Use right tool for each job. Store tools off ground to prevent rust. Wear gloves, eye protection, and sturdy shoes. Learn proper techniques to prevent injury.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is spring primarily considered in landscaping?",
          options: ["Resting time", "Renewal time", "Harvest time", "Planning time"],
          correctAnswer: 1,
          explanation: "Spring is renewal time when plants wake up and gardens come back to life."
        },
        {
          id: 2,
          question: "What should you do with spring-flowering shrubs?",
          options: [
            "Prune before flowering",
            "Prune after they bloom",
            "Never prune them",
            "Prune in winter"
          ],
          correctAnswer: 1,
          explanation: "Prune spring-flowering shrubs after they bloom since they flower on old wood."
        },
        {
          id: 3,
          question: "What should you check after winter?",
          options: ["Only plants", "Irrigation systems", "Garden decorations", "Neighbor's yard"],
          correctAnswer: 1,
          explanation: "Check irrigation systems for leaks and damage after winter freeze-thaw cycles."
        },
        {
          id: 4,
          question: "How should you water in summer?",
          options: [
            "Daily light sprinkles",
            "Deep, infrequent watering",
            "Only when plants wilt",
            "At noon daily"
          ],
          correctAnswer: 1,
          explanation: "Deep, infrequent watering encourages deep roots that withstand drought better."
        },
        {
          id: 5,
          question: "What removes spent flowers to encourage more blooms?",
          options: ["Pruning", "Deadheading", "Fertilizing", "Watering"],
          correctAnswer: 1,
          explanation: "Deadheading removes faded flowers so plants put energy into new blooms rather than seeds."
        },
        {
          id: 6,
          question: "When is ideal for planting trees and shrubs?",
          options: ["Mid-summer", "Autumn", "Winter", "Only spring"],
          correctAnswer: 1,
          explanation: "Autumn planting allows roots to establish in cool soil before spring growth."
        },
        {
          id: 7,
          question: "What should you apply to lawns in fall?",
          options: [
            "Spring fertilizer",
            "Fall fertilizer",
            "No fertilizer",
            "Only weed killer"
          ],
          correctAnswer: 1,
          explanation: "Fall fertilizer strengthens roots for winter and prepares grass for spring green-up."
        },
        {
          id: 8,
          question: "When should you apply winter mulch?",
          options: [
            "Early autumn",
            "After ground freezes",
            "Mid-summer",
            "Never use winter mulch"
          ],
          correctAnswer: 1,
          explanation: "Apply winter mulch after ground freezes to prevent temperature fluctuations that heave plants."
        },
        {
          id: 9,
          question: "What should you do with heavy snow on branches?",
          options: [
            "Leave it alone",
            "Knock it off gently",
            "Pour hot water on it",
            "Shake the whole tree"
          ],
          correctAnswer: 1,
          explanation: "Gently knock heavy snow off branches to prevent breakage under the weight."
        },
        {
          id: 10,
          question: "What should you avoid on frozen lawns?",
          options: ["Watering", "Walking", "Looking at them", "Thinking about them"],
          correctAnswer: 1,
          explanation: "Avoid walking on frozen lawns as it can damage grass crowns and cause brown patches."
        },
        {
          id: 11,
          question: "How much grass blade should you remove at once when mowing?",
          options: ["As much as you want", "No more than 1/3", "Exactly half", "All of it"],
          correctAnswer: 1,
          explanation: "Never remove more than 1/3 of grass blade height at once to avoid stressing the lawn."
        },
        {
          id: 12,
          question: "How much water do lawns typically need weekly?",
          options: ["No water", "1/4 inch", "1 inch", "3 inches"],
          correctAnswer: 2,
          explanation: "Most lawns need about 1 inch of water per week including rainfall for healthy growth."
        },
        {
          id: 13,
          question: "What is the first step in pest management?",
          options: ["Spray chemicals", "Prevention", "Call professionals", "Remove all plants"],
          correctAnswer: 1,
          explanation: "Prevention through plant selection and health maintenance is the first IPM step."
        },
        {
          id: 14,
          question: "What should you start with for pest intervention?",
          options: [
            "Strongest chemicals",
            "Least toxic methods",
            "Removing all plants",
            "Doing nothing"
          ],
          correctAnswer: 1,
          explanation: "Start with least toxic methods like hand-picking or water sprays before using chemicals."
        },
        {
          id: 15,
          question: "What prevents freeze damage to irrigation systems?",
          options: [
            "Leaving them on",
            "Proper winterization",
            "Covering with leaves",
            "Running hot water through"
          ],
          correctAnswer: 1,
          explanation: "Proper winterization (draining systems) prevents freezing and pipe damage."
        },
        {
          id: 16,
          question: "What adjusts watering based on weather?",
          options: [
            "Manual timers",
            "Smart controllers",
            "Guessing",
            "Neighbor's schedule"
          ],
          correctAnswer: 1,
          explanation: "Smart controllers adjust irrigation based on weather data to prevent overwatering."
        },
        {
          id: 17,
          question: "What should you do after each tool use?",
          options: [
            "Throw them away",
            "Clean them",
            "Leave them outside",
            "Loan to neighbors"
          ],
          correctAnswer: 1,
          explanation: "Clean tools after each use to prevent disease spread and maintain their condition."
        },
        {
          id: 18,
          question: "What makes work easier and safer?",
          options: [
            "Improper tools",
            "Proper tools",
            "No tools",
            "Borrowed tools"
          ],
          correctAnswer: 1,
          explanation: "Proper, well-maintained tools make landscaping work more efficient and safer."
        },
        {
          id: 19,
          question: "What should you wear for safety?",
          options: [
            "Sandals and shorts",
            "Gloves, eye protection, sturdy shoes",
            "Party clothes",
            "Pajamas"
          ],
          correctAnswer: 1,
          explanation: "Wear appropriate protective gear including gloves, eye protection, and sturdy footwear."
        },
        {
          id: 20,
          question: "What helps prevent injury in landscaping?",
          options: [
            "Rushing through work",
            "Learning proper techniques",
            "Ignoring safety",
            "Working when tired"
          ],
          correctAnswer: 1,
          explanation: "Learning and using proper techniques prevents strains, cuts, and other injuries."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What is the definition of landscaping?",
      options: [
        "Only planting flowers",
        "The art and science of modifying outdoor spaces",
        "Just lawn maintenance",
        "Building structures only"
      ],
      correctAnswer: 1,
      explanation: "Landscaping combines creative design with practical knowledge about plants, soil, and outdoor living."
    },
    {
      id: 2,
      question: "What principle means all elements work together?",
      options: ["Balance", "Focal Points", "Unity", "Color"],
      correctAnswer: 2,
      explanation: "Unity creates cohesive designs where all elements work together harmoniously."
    },
    {
      id: 3,
      question: "What are the three main plant categories?",
      options: [
        "Annuals, perennials, biennials",
        "Trees, shrubs, perennials",
        "Vegetables, fruits, herbs",
        "Indoor, outdoor, aquatic"
      ],
      correctAnswer: 1,
      explanation: "Plants are categorized as trees (single trunk), shrubs (multiple stems), and perennials (live multiple years)."
    },
    {
      id: 4,
      question: "What nutrient promotes leaf and stem growth?",
      options: ["Phosphorus", "Potassium", "Nitrogen", "Calcium"],
      correctAnswer: 2,
      explanation: "Nitrogen (N) promotes green, leafy growth in plants."
    },
    {
      id: 5,
      question: "How wide should planting holes be compared to root balls?",
      options: ["Same width", "Half as wide", "Twice as wide", "Three times as wide"],
      correctAnswer: 2,
      explanation: "Dig holes twice as wide as root balls to allow roots to spread easily into surrounding soil."
    },
    {
      id: 6,
      question: "What is the 'gold standard' soil for most plants?",
      options: ["Sandy soil", "Clay soil", "Loam soil", "Rocky soil"],
      correctAnswer: 2,
      explanation: "Loam soil has balanced sand, silt, and clay particles that most plants prefer."
    },
    {
      id: 7,
      question: "What pH range do most plants prefer?",
      options: ["4.0-5.0", "5.0-6.0", "6.0-7.0", "7.0-8.0"],
      correctAnswer: 2,
      explanation: "Most plants thrive in slightly acidic to neutral soil with pH 6.0-7.0."
    },
    {
      id: 8,
      question: "What should you add to improve all soil types?",
      options: ["Sand only", "Compost", "Clay only", "Gravel"],
      correctAnswer: 1,
      explanation: "Compost improves sandy soil's retention, clay soil's drainage, and all soils' fertility."
    },
    {
      id: 9,
      question: "How much mulch should you apply around plants?",
      options: ["1 inch", "2-3 inches", "6 inches", "Just a dusting"],
      correctAnswer: 1,
      explanation: "Apply 2-3 inches of mulch for optimal moisture retention and weed suppression."
    },
    {
      id: 10,
      question: "What creates visual movement in design?",
      options: ["Balance", "Unity", "Rhythm", "Scale"],
      correctAnswer: 2,
      explanation: "Rhythm creates visual movement through repetition, progression, and transition."
    },
    {
      id: 11,
      question: "How should you plant for natural look?",
      options: ["In straight lines", "In even numbers", "In odd-numbered clusters", "Singly"],
      correctAnswer: 2,
      explanation: "Plant in odd-numbered clusters (3, 5, 7) for natural, pleasing arrangements."
    },
    {
      id: 12,
      question: "What refers to non-living landscape elements?",
      options: ["Softscape", "Hardscape", "Plantscape", "Greenscape"],
      correctAnswer: 1,
      explanation: "Hardscape includes paths, walls, patios, and other structural elements."
    },
    {
      id: 13,
      question: "How wide should main paths be?",
      options: ["1 foot", "2 feet", "3-4 feet", "6 feet"],
      correctAnswer: 2,
      explanation: "Main paths should be 3-4 feet wide for comfortable two-person passage."
    },
    {
      id: 14,
      question: "What holds back soil on slopes?",
      options: ["Garden walls", "Retaining walls", "Seating walls", "Privacy walls"],
      correctAnswer: 1,
      explanation: "Retaining walls are engineered to hold back soil and prevent erosion."
    },
    {
      id: 15,
      question: "What is ideal riser height for steps?",
      options: ["2-3 inches", "4-6 inches", "8-10 inches", "12 inches"],
      correctAnswer: 1,
      explanation: "4-6 inch riser height is comfortable and safe for landscape steps."
    },
    {
      id: 16,
      question: "When should you prune spring-flowering shrubs?",
      options: ["Before flowering", "After flowering", "In winter", "In summer"],
      correctAnswer: 1,
      explanation: "Prune spring-flowering shrubs after they bloom since they flower on old wood."
    },
    {
      id: 17,
      question: "How should you water in summer?",
      options: [
        "Daily light sprinkles",
        "Deep, infrequent watering",
        "Only when wilted",
        "At noon daily"
      ],
      correctAnswer: 1,
      explanation: "Deep, infrequent watering encourages deep roots that withstand drought."
    },
    {
      id: 18,
      question: "When is ideal for planting trees and shrubs?",
      options: ["Mid-summer", "Autumn", "Winter", "Only spring"],
      correctAnswer: 1,
      explanation: "Autumn planting allows root establishment before spring growth."
    },
    {
      id: 19,
      question: "How much grass blade should you remove when mowing?",
      options: ["As much as you want", "No more than 1/3", "Exactly half", "All of it"],
      correctAnswer: 1,
      explanation: "Never remove more than 1/3 of grass height to avoid stressing the lawn."
    },
    {
      id: 20,
      question: "What is the first pest management step?",
      options: ["Spray chemicals", "Prevention", "Remove plants", "Do nothing"],
      correctAnswer: 1,
      explanation: "Prevention through plant health and selection is the first IPM step."
    },
    {
      id: 21,
      question: "What should you track to understand sun exposure?",
      options: [
        "Moonlight patterns",
        "Sunlight throughout the day",
        "Temperature at noon",
        "Cloud types"
      ],
      correctAnswer: 1,
      explanation: "Track where sunlight falls throughout the day to understand exposure patterns."
    },
    {
      id: 22,
      question: "What do perennials offer in landscapes?",
      options: [
        "Permanent height only",
        "Seasonal color and interest",
        "Instant screening",
        "Only shade"
      ],
      correctAnswer: 1,
      explanation: "Perennials offer changing seasonal color and interest year after year."
    },
    {
      id: 23,
      question: "What should you keep mulch away from?",
      options: ["Soil", "Tree trunks and stems", "Garden edges", "Paths"],
      correctAnswer: 1,
      explanation: "Keep mulch away from tree trunks and plant stems to prevent rot."
    },
    {
      id: 24,
      question: "What creates mirror-image designs?",
      options: [
        "Asymmetrical balance",
        "Symmetrical balance",
        "Informal balance",
        "Natural balance"
      ],
      correctAnswer: 1,
      explanation: "Symmetrical balance creates formal, mirror-image designs."
    },
    {
      id: 25,
      question: "What draws attention in design?",
      options: ["Unity elements", "Focal points", "Background plants", "Lawn areas"],
      correctAnswer: 1,
      explanation: "Focal points are designed features that draw attention and create interest."
    },
    {
      id: 26,
      question: "What extends living spaces outdoors?",
      options: ["Paths", "Patios", "Walls", "Lighting"],
      correctAnswer: 1,
      explanation: "Patios create outdoor rooms for living and entertainment."
    },
    {
      id: 27,
      question: "What adds movement and sound to gardens?",
      options: ["Lighting", "Walls", "Water features", "Paths"],
      correctAnswer: 2,
      explanation: "Water features add visual movement and pleasant sounds to landscapes."
    },
    {
      id: 28,
      question: "What type of lighting is most energy efficient?",
      options: ["Incandescent", "Halogen", "LED", "Fluorescent"],
      correctAnswer: 2,
      explanation: "LED lighting offers best energy efficiency for outdoor use."
    },
    {
      id: 29,
      question: "What should you do with tools after each use?",
      options: ["Throw away", "Clean them", "Leave outside", "Loan out"],
      correctAnswer: 1,
      explanation: "Clean tools after each use to prevent disease spread."
    },
    {
      id: 30,
      question: "What prevents freeze damage to irrigation?",
      options: [
        "Leaving on",
        "Proper winterization",
        "Covering with leaves",
        "Hot water"
      ],
      correctAnswer: 1,
      explanation: "Proper winterization (draining) prevents freezing and pipe damage."
    },
    {
      id: 31,
      question: "What kills more plants than any other factor?",
      options: ["Too much sun", "Poor drainage", "Not enough fertilizer", "Wrong color"],
      correctAnswer: 1,
      explanation: "Poor drainage causes root rot and oxygen deprivation in plants."
    },
    {
      id: 32,
      question: "What should you consider from inside the house?",
      options: ["Neighbor's opinion", "Views", "Property taxes", "Future owners"],
      correctAnswer: 1,
      explanation: "Consider views from inside when placing focal points."
    },
    {
      id: 33,
      question: "What solves problems beautifully?",
      options: ["Any design", "Expensive design", "Good design", "Trendy design"],
      correctAnswer: 2,
      explanation: "Good design solves functional problems while creating beauty."
    },
    {
      id: 34,
      question: "What should you always leave near hardscape?",
      options: ["Planting space", "Empty space", "Parking space", "Storage space"],
      correctAnswer: 0,
      explanation: "Always leave planting space to integrate greenery with hardscape."
    },
    {
      id: 35,
      question: "What should you see before choosing materials?",
      options: [
        "Samples in your space",
        "Everyone's opinion",
        "Cheapest option",
        "Neighbor's choice"
      ],
      correctAnswer: 0,
      explanation: "See material samples in your actual space before deciding."
    },
    {
      id: 36,
      question: "What is spring considered in landscaping?",
      options: ["Resting time", "Renewal time", "Harvest time", "Planning time"],
      correctAnswer: 1,
      explanation: "Spring is renewal time when gardens come back to life."
    },
    {
      id: 37,
      question: "What removes spent flowers for more blooms?",
      options: ["Pruning", "Deadheading", "Fertilizing", "Watering"],
      correctAnswer: 1,
      explanation: "Deadheading removes faded flowers to encourage new blooms."
    },
    {
      id: 38,
      question: "What should you apply to lawns in fall?",
      options: [
        "Spring fertilizer",
        "Fall fertilizer",
        "No fertilizer",
        "Only weed killer"
      ],
      correctAnswer: 1,
      explanation: "Fall fertilizer strengthens roots for winter and spring green-up."
    },
    {
      id: 39,
      question: "What helps prevent injury in landscaping?",
      options: [
        "Rushing through work",
        "Learning proper techniques",
        "Ignoring safety",
        "Working when tired"
      ],
      correctAnswer: 1,
      explanation: "Learning proper techniques prevents strains, cuts, and other injuries."
    },
    {
      id: 40,
      question: "What do healthy plants resist better?",
      options: ["Pests and diseases", "Beautiful views", "Watering", "Fertilizing"],
      correctAnswer: 0,
      explanation: "Healthy, well-maintained plants naturally resist pests and diseases better."
    }
  ]
};
