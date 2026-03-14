export const livestockManagementCertificate = {
  id: "livestock-management-certificate",
  title: "Livestock Management (Certificate)",
  description: "Learn essential skills for caring for farm animals, understanding animal behavior, and managing livestock operations effectively and humanely.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🐄",
  badge: "Certificate",
  prerequisites: [],
  level: "Beginner",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Livestock Management",
      content: `# Module 1: Introduction to Livestock Management

## What is Livestock Management?

Livestock management is the practice of caring for farm animals to keep them healthy, productive, and comfortable. This includes feeding, housing, breeding, and health care. Good management helps animals grow well and produce quality products like milk, meat, and wool.

**Key goals of livestock management:**
1. Keep animals healthy and free from disease
2. Provide proper nutrition for growth and production
3. Create comfortable living conditions
4. Handle animals gently and respectfully
5. Maintain good records of animal care

## Common Livestock Animals

Different animals have different needs. Here are the main types of livestock:

**Cattle (Cows and Bulls):**
- Raised for milk (dairy) or meat (beef)
- Need lots of space and fresh water
- Social animals that prefer groups
- Require regular health checks

**Sheep:**
- Raised for wool, meat (lamb/mutton), and sometimes milk
- Graze on grass and need pasture
- Flock animals that stay together
- Need protection from predators

**Goats:**
- Raised for milk, meat, and fiber
- Excellent climbers and browsers
- Curious and intelligent animals
- Need secure fencing

**Pigs:**
- Raised primarily for pork meat
- Intelligent and social animals
- Need clean, dry bedding
- Require temperature control

**Poultry (Chickens, Turkeys, Ducks):**
- Raised for eggs and meat
- Need protection from weather and predators
- Require proper roosting space
- Need balanced feed for egg production

**Horses:**
- Used for work, riding, or companionship
- Need regular exercise and grooming
- Require specialized feeding
- Need hoof care every 6-8 weeks

## Basic Animal Needs

All livestock have five basic needs that must be met:

**1. Proper Nutrition:**
- Access to fresh, clean water at all times
- Appropriate feed for their age and purpose
- Minerals and vitamins as needed
- Regular feeding schedule

**2. Comfortable Shelter:**
- Protection from extreme weather
- Dry, clean resting areas
- Adequate space to move
- Proper ventilation

**3. Good Health Care:**
- Regular health checks
- Vaccinations as needed
- Parasite control
- Prompt treatment of illness

**4. Gentle Handling:**
- Calm, patient approach
- Proper restraint when needed
- Understanding animal behavior
- Building trust with animals

**5. Appropriate Social Environment:**
- Company of their own kind (for social animals)
- Protection from predators
- Space to express natural behaviors
- Minimizing stress

## Starting with Livestock

If you're new to livestock, start small and learn gradually:

**Beginner-friendly animals:**
- **Chickens**: Easy to care for, provide eggs
- **Goats**: Good for small properties, provide milk
- **Sheep**: Gentle, good for wool and meat
- **Rabbits**: Small, easy to handle, good for meat

**Things to consider before starting:**
- How much time can you spend daily?
- Do you have proper housing and fencing?
- What is your budget for feed and care?
- Do you have access to a veterinarian?
- What are local regulations about livestock?

**Remember**: Good livestock management starts with understanding that animals are living creatures with needs and feelings. Your care directly affects their wellbeing and productivity. Always prioritize animal welfare in your management decisions.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is livestock management?",
          options: [
            "Only feeding animals",
            "Caring for farm animals to keep them healthy",
            "Just selling animal products",
            "Building fences only"
          ],
          correctAnswer: 1,
          explanation: "Livestock management involves comprehensive care including feeding, housing, health, and handling."
        },
        {
          id: 2,
          question: "What are cattle raised for?",
          options: [
            "Only for riding",
            "Milk (dairy) or meat (beef)",
            "Only wool production",
            "Egg production only"
          ],
          correctAnswer: 1,
          explanation: "Cattle are primarily raised for dairy products or beef meat."
        },
        {
          id: 3,
          question: "What do sheep need protection from?",
          options: [
            "Only from rain",
            "Predators",
            "Other sheep only",
            "Their own wool"
          ],
          correctAnswer: 1,
          explanation: "Sheep need protection from predators like coyotes, dogs, and foxes."
        },
        {
          id: 4,
          question: "What is a key characteristic of goats?",
          options: [
            "They hate climbing",
            "Excellent climbers and browsers",
            "They cannot jump",
            "They prefer to be alone"
          ],
          correctAnswer: 1,
          explanation: "Goats are natural climbers and enjoy browsing on various plants."
        },
        {
          id: 5,
          question: "What do pigs need for bedding?",
          options: [
            "Wet, muddy areas",
            "Clean, dry bedding",
            "No bedding needed",
            "Only concrete floors"
          ],
          correctAnswer: 1,
          explanation: "Pigs need clean, dry bedding to stay healthy and comfortable."
        },
        {
          id: 6,
          question: "What is poultry raised for?",
          options: [
            "Only as pets",
            "Eggs and meat",
            "Milk production",
            "Wool production"
          ],
          correctAnswer: 1,
          explanation: "Poultry like chickens are raised primarily for eggs and meat."
        },
        {
          id: 7,
          question: "How often do horses need hoof care?",
          options: [
            "Never",
            "Every 6-8 weeks",
            "Once a year",
            "Only when limping"
          ],
          correctAnswer: 1,
          explanation: "Horses need regular hoof trimming or shoeing every 6-8 weeks."
        },
        {
          id: 8,
          question: "What is the first basic animal need?",
          options: [
            "Proper nutrition",
            "Entertainment",
            "Music",
            "Television"
          ],
          correctAnswer: 0,
          explanation: "Proper nutrition including clean water and appropriate feed is fundamental."
        },
        {
          id: 9,
          question: "What should shelter provide?",
          options: [
            "Only shade",
            "Protection from extreme weather",
            "Complete darkness",
            "No ventilation"
          ],
          correctAnswer: 1,
          explanation: "Shelter should protect animals from heat, cold, rain, and wind."
        },
        {
          id: 10,
          question: "What does good health care include?",
          options: [
            "Only emergency treatment",
            "Regular health checks and vaccinations",
            "Ignoring small problems",
            "No veterinarian needed"
          ],
          correctAnswer: 1,
          explanation: "Preventive care including regular checks and vaccinations is essential."
        },
        {
          id: 11,
          question: "How should animals be handled?",
          options: [
            "With loud noises",
            "Gently and patiently",
            "Quickly and roughly",
            "Only when necessary"
          ],
          correctAnswer: 1,
          explanation: "Gentle, patient handling reduces stress and builds trust."
        },
        {
          id: 12,
          question: "What do social animals need?",
          options: [
            "Complete isolation",
            "Company of their own kind",
            "Only human company",
            "No social contact"
          ],
          correctAnswer: 1,
          explanation: "Social animals like sheep and cattle need companionship."
        },
        {
          id: 13,
          question: "What is a beginner-friendly animal?",
          options: [
            "Elephants",
            "Chickens",
            "Bison",
            "Alligators"
          ],
          correctAnswer: 1,
          explanation: "Chickens are relatively easy to care for and good for beginners."
        },
        {
          id: 14,
          question: "What should you consider before getting livestock?",
          options: [
            "Only your favorite animal",
            "Time, space, budget, and regulations",
            "Just the cuteness factor",
            "What neighbors think"
          ],
          correctAnswer: 1,
          explanation: "Practical considerations are crucial for successful livestock keeping."
        },
        {
          id: 15,
          question: "What should always be available to animals?",
          options: [
            "Fresh, clean water",
            "Soda drinks",
            "Only morning water",
            "Water every other day"
          ],
          correctAnswer: 0,
          explanation: "Clean water must be available at all times for all livestock."
        },
        {
          id: 16,
          question: "What type of animals are cattle?",
          options: [
            "Solitary animals",
            "Social animals",
            "Nocturnal animals",
            "Aquatic animals"
          ],
          correctAnswer: 1,
          explanation: "Cattle are herd animals that prefer to be in groups."
        },
        {
          id: 17,
          question: "What do goats need due to their climbing ability?",
          options: [
            "Low fences",
            "Secure fencing",
            "No fencing",
            "Electric fences only"
          ],
          correctAnswer: 1,
          explanation: "Goats need secure fencing because they are excellent climbers and escape artists."
        },
        {
          id: 18,
          question: "What do pigs require for temperature control?",
          options: [
            "No temperature control",
            "Proper heating or cooling",
            "Only cold temperatures",
            "Only hot temperatures"
          ],
          correctAnswer: 1,
          explanation: "Pigs are sensitive to temperature extremes and need proper control."
        },
        {
          id: 19,
          question: "What do poultry need for egg production?",
          options: [
            "Only water",
            "Balanced feed",
            "Any leftover food",
            "No special feed"
          ],
          correctAnswer: 1,
          explanation: "Laying hens need balanced feed with proper nutrients for egg production."
        },
        {
          id: 20,
          question: "What should livestock management prioritize?",
          options: [
            "Only profit",
            "Animal welfare",
            "Minimal effort",
            "Appearance only"
          ],
          correctAnswer: 1,
          explanation: "Animal welfare should always be the priority in livestock management."
        }
      ]
    },
    {
      id: 2,
      title: "Animal Housing and Facilities",
      content: `# Module 2: Animal Housing and Facilities

## Planning Animal Housing

Good housing keeps animals safe, comfortable, and healthy. Planning starts with understanding what each animal needs.

**Key considerations for housing:**

**Space requirements:**
- Enough room to stand, lie down, and turn around
- Space for feeding and watering areas
- Room for exercise and movement
- Additional space for pregnant or nursing animals

**Location factors:**
- Good drainage to prevent mud and flooding
- Protection from prevailing winds
- Access to clean water sources
- Convenient for daily care and monitoring
- Separate from living areas for disease control

**Orientation:**
- Windows or openings facing south for winter sun
- Protection from hot afternoon sun in summer
- Good air circulation without drafts
- Easy access for cleaning and maintenance

## Types of Animal Housing

Different animals need different types of housing:

**Barns and Stables:**
- **For**: Cattle, horses, sheep, goats
- **Features**: Solid walls, proper ventilation, stall dividers
- **Benefits**: Complete weather protection, secure storage
- **Considerations**: Regular cleaning needed, good drainage essential

**Poultry Houses (Coops):**
- **For**: Chickens, ducks, turkeys
- **Features**: Roosting bars, nesting boxes, predator-proof
- **Benefits**: Protection from weather and predators
- **Considerations**: Easy cleaning, good ventilation, lighting

**Pig Pens and Houses:**
- **For**: Pigs of all ages
- **Features**: Solid floors, proper drainage, temperature control
- **Benefits**: Easy feeding and cleaning, disease control
- **Considerations**: Separation by age groups, waste management

**Shelters and Run-in Sheds:**
- **For**: All livestock in pasture systems
- **Features**: Three walls, open side, good roof
- **Benefits**: Protection from sun, rain, wind
- **Considerations**: Placement in pasture, size for herd

**Special Housing Needs:**

**Calving/Lambing/Kidding Pens:**
- Separate areas for birthing
- Clean, dry bedding
- Privacy for mother and newborns
- Easy observation access

**Quarantine Areas:**
- Separate from main herd
- For new animals or sick animals
- Prevent disease spread
- Easy to clean and disinfect

**Handling Facilities:**
- Chutes for moving animals
- Head gates for restraint
- Loading ramps for transport
- Work areas for health procedures

## Bedding and Flooring

Proper bedding and flooring prevent injuries and keep animals clean.

**Common bedding materials:**

**Straw:**
- **Best for**: Cattle, horses, sheep
- **Benefits**: Absorbent, comfortable, inexpensive
- **Considerations**: Regular changing needed, can mold if wet

**Wood Shavings:**
- **Best for**: Poultry, goats, pigs
- **Benefits**: Very absorbent, controls odor
- **Considerations**: Avoid cedar for some animals, can be dusty

**Sand:**
- **Best for**: Horses, dairy cattle
- **Benefits**: Excellent drainage, reduces leg problems
- **Considerations**: Heavy to move, can be eaten (impaction risk)

**Sawdust:**
- **Best for**: Poultry, pigs
- **Benefits**: Highly absorbent, inexpensive
- **Considerations**: Can be too fine (respiratory issues), may need frequent changing

**Flooring types:**

**Dirt or Clay Floors:**
- Natural, inexpensive
- Need regular leveling
- Can become muddy

**Concrete Floors:**
- Easy to clean
- Hard on animal legs
- Need bedding for comfort

**Rubber Mats:**
- Comfortable for animals
- Reduce bedding use
- More expensive initially

**Slatted Floors:**
- Good for waste removal
- Used in some pig and poultry houses
- Need proper design to prevent injury

## Water Systems

Clean water is essential for all livestock.

**Water delivery methods:**

**Automatic Waterers:**
- Constant fresh water supply
- Reduce labor
- Need regular cleaning
- Frost protection in winter

**Troughs and Tanks:**
- Hold larger water volumes
- Easy to monitor consumption
- Need regular cleaning
- Can be heated in winter

**Buckets and Pails:**
- Simple, inexpensive
- Good for small numbers
- Labor intensive
- Easy to clean

**Natural Water Sources:**
- Streams or ponds
- Need protection from contamination
- May need fencing to prevent erosion
- Regular water quality testing

**Water system considerations:**
- All animals should reach water easily
- Keep water away from feeding areas to prevent contamination
- Clean containers regularly to prevent algae and bacteria
- Provide multiple water sources in large pastures
- Consider winter freezing in cold climates

## Fencing and Pasture Management

Good fencing keeps animals safe and where they belong.

**Fencing types:**

**Barbed Wire:**
- **Good for**: Cattle, sometimes horses
- **Not for**: Sheep, goats (can get tangled)
- **Considerations**: Can cause injury, needs tight strands

**Woven Wire:**
- **Good for**: Sheep, goats, pigs
- **Benefits**: Keeps small animals in, predators out
- **Considerations**: More expensive, needs proper installation

**Electric Fence:**
- **Good for**: All livestock with training
- **Benefits**: Psychological barrier, movable
- **Considerations**: Needs maintenance, animals must be trained

**Board Fence:**
- **Good for**: Horses, show animals
- **Benefits**: Safe, attractive, durable
- **Considerations**: Expensive, needs painting/maintenance

**High-tensile Wire:**
- **Good for**: Large pastures, all livestock
- **Benefits**: Long-lasting, low maintenance
- **Considerations**: Needs proper tension, visible to animals

**Pasture management basics:**
- Rotate animals between pastures
- Don't overgraze - leave grass height
- Control weeds and poisonous plants
- Provide minerals in pasture
- Manage manure distribution

**Remember**: Good facilities make animal care easier and safer for both animals and caretakers. Plan facilities based on your specific animals, climate, and management style. Always prioritize animal safety and comfort in facility design.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should housing provide for animals?",
          options: [
            "Only shelter from rain",
            "Space to stand, lie down, and turn around",
            "Complete darkness",
            "No movement space"
          ],
          correctAnswer: 1,
          explanation: "Animals need adequate space for basic movements and comfort."
        },
        {
          id: 2,
          question: "Where should housing openings ideally face?",
          options: [
            "North only",
            "South for winter sun",
            "Always east",
            "West for sunsets"
          ],
          correctAnswer: 1,
          explanation: "South-facing openings provide winter sunlight and warmth."
        },
        {
          id: 3,
          question: "What are barns best for?",
          options: [
            "Only storage",
            "Cattle, horses, sheep, goats",
            "Only poultry",
            "Wild animals"
          ],
          correctAnswer: 1,
          explanation: "Barns provide complete protection for larger livestock."
        },
        {
          id: 4,
          question: "What do poultry houses need?",
          options: [
            "No protection needed",
            "Roosting bars and nesting boxes",
            "Only feeding areas",
            "No lighting"
          ],
          correctAnswer: 1,
          explanation: "Poultry need specific features like roosts and nests."
        },
        {
          id: 5,
          question: "What are pig pens designed for?",
          options: [
            "Only sleeping",
            "Easy cleaning and temperature control",
            "No waste management",
            "Open air only"
          ],
          correctAnswer: 1,
          explanation: "Pig housing needs easy cleaning and climate control."
        },
        {
          id: 6,
          question: "What are run-in sheds?",
          options: [
            "Closed buildings",
            "Three-walled shelters in pastures",
            "Underground shelters",
            "Movable tents"
          ],
          correctAnswer: 1,
          explanation: "Run-in sheds provide basic shelter with one open side."
        },
        {
          id: 7,
          question: "Why are separate birthing pens needed?",
          options: [
            "For decoration",
            "Privacy and cleanliness for mothers",
            "To isolate animals permanently",
            "No reason needed"
          ],
          correctAnswer: 1,
          explanation: "Birthing areas need privacy and cleanliness for safety."
        },
        {
          id: 8,
          question: "What is straw bedding good for?",
          options: [
            "Only decoration",
            "Cattle, horses, sheep",
            "Aquatic animals",
            "No animals"
          ],
          correctAnswer: 1,
          explanation: "Straw provides comfortable, absorbent bedding for many livestock."
        },
        {
          id: 9,
          question: "What is a concern with wood shavings?",
          options: [
            "Too expensive always",
            "Can be dusty",
            "Never absorbs moisture",
            "Animals won't use it"
          ],
          correctAnswer: 1,
          explanation: "Fine wood shavings can create dust that causes respiratory issues."
        },
        {
          id: 10,
          question: "Why is sand used for some animals?",
          options: [
            "It's pretty",
            "Excellent drainage and reduces leg problems",
            "It's the cheapest",
            "Animals eat it for nutrition"
          ],
          correctAnswer: 1,
          explanation: "Sand provides good drainage and is gentle on animal legs."
        },
        {
          id: 11,
          question: "What is a disadvantage of concrete floors?",
          options: [
            "Too soft",
            "Hard on animal legs",
            "Too expensive",
            "Animals can't walk on them"
          ],
          correctAnswer: 1,
          explanation: "Concrete is hard and can cause leg problems without proper bedding."
        },
        {
          id: 12,
          question: "What do automatic waterers provide?",
          options: [
            "Only occasional water",
            "Constant fresh water supply",
            "Flavored water",
            "Warm water only"
          ],
          correctAnswer: 1,
          explanation: "Automatic systems ensure continuous access to fresh water."
        },
        {
          id: 13,
          question: "Why are buckets labor intensive?",
          options: [
            "They break easily",
            "Need frequent filling and cleaning",
            "Animals tip them over",
            "They're too small"
          ],
          correctAnswer: 1,
          explanation: "Buckets require manual filling and regular cleaning."
        },
        {
          id: 14,
          question: "What should water be kept away from?",
          options: [
            "All shelter",
            "Feeding areas to prevent contamination",
            "Other animals",
            "Sunlight"
          ],
          correctAnswer: 1,
          explanation: "Separating water from feed reduces contamination risk."
        },
        {
          id: 15,
          question: "What is barbed wire not good for?",
          options: [
            "Any animals",
            "Sheep and goats (can get tangled)",
            "Only wild animals",
            "All animals love it"
          ],
          correctAnswer: 1,
          explanation: "Barbed wire can injure or trap sheep and goats."
        },
        {
          id: 16,
          question: "What is woven wire good for?",
          options: [
            "Only decoration",
            "Sheep, goats, pigs",
            "Large animals only",
            "No animals"
          ],
          correctAnswer: 1,
          explanation: "Woven wire contains small animals and excludes predators."
        },
        {
          id: 17,
          question: "What do animals need with electric fences?",
          options: [
            "No training",
            "Training to understand the barrier",
            "Special food",
            "Daily shocks"
          ],
          correctAnswer: 1,
          explanation: "Animals must learn that electric fences are barriers."
        },
        {
          id: 18,
          question: "What are board fences good for?",
          options: [
            "Only looks",
            "Horses and show animals",
            "All farm animals",
            "Wildlife only"
          ],
          correctAnswer: 1,
          explanation: "Board fences are safe and attractive for visible areas."
        },
        {
          id: 19,
          question: "Why rotate pastures?",
          options: [
            "To confuse animals",
            "Prevent overgrazing and parasite buildup",
            "No reason",
            "Only for exercise"
          ],
          correctAnswer: 1,
          explanation: "Rotation maintains pasture health and reduces parasites."
        },
        {
          id: 20,
          question: "What should facility design prioritize?",
          options: [
            "Only cost savings",
            "Animal safety and comfort",
            "Minimal effort",
            "Appearance only"
          ],
          correctAnswer: 1,
          explanation: "Animal needs should guide all facility planning."
        }
      ]
    },
    {
      id: 3,
      title: "Animal Nutrition Basics",
      content: `# Module 3: Animal Nutrition Basics

## Understanding Animal Diets

Different animals have different nutritional needs based on their species, age, and purpose.

**Basic nutritional requirements:**

**Water:**
- Most important nutrient
- Needed for digestion, temperature control, and all body functions
- Clean, fresh water should always be available
- Animals drink 2-3 times more water than they eat feed

**Energy:**
- Comes from carbohydrates and fats
- Needed for movement, growth, and body maintenance
- Measured in calories or megajoules
- Too little energy = poor growth and production
- Too much energy = obesity and health problems

**Protein:**
- Builds muscles, organs, and products (milk, eggs, wool)
- Made of amino acids (building blocks)
- Young animals need more protein for growth
- Milk-producing animals need extra protein

**Vitamins:**
- Needed in small amounts
- Support various body functions
- Fat-soluble (A, D, E, K) stored in body
- Water-soluble (B, C) need daily supply

**Minerals:**
- Build bones and teeth
- Support nerve and muscle function
- Major minerals: calcium, phosphorus, magnesium
- Trace minerals: iron, zinc, copper, selenium

**Fiber:**
- Important for ruminants (cattle, sheep, goats)
- Helps proper digestion
- Found in hay, grass, and forage
- Not needed by non-ruminants in large amounts

## Types of Animal Feed

**Roughages (Forages):**
- High in fiber, lower in energy
- **Hay**: Dried grasses or legumes (alfalfa, timothy)
- **Silage**: Fermented green forage (corn, grass)
- **Pasture**: Fresh growing plants
- **Straw**: Low nutritional value, mainly for bedding

**Concentrates:**
- High in energy and/or protein
- **Grains**: Corn, oats, barley, wheat
- **Protein supplements**: Soybean meal, cottonseed meal
- **By-products**: Brewer's grains, beet pulp

**Complete Feeds:**
- Balanced mix of all needed nutrients
- Convenient and consistent
- More expensive than mixing yourself
- Good for beginners or specific needs

**Supplements:**
- Provide specific missing nutrients
- **Mineral blocks**: Lick blocks with minerals
- **Salt blocks**: Provide sodium and chloride
- **Vitamin supplements**: Added to feed or water

## Feeding Different Animals

**Cattle:**
- **Dairy cows**: Need high-energy feed for milk production
- **Beef cattle**: Different needs for growing vs. finishing
- **Always need**: Good quality forage, clean water, mineral supplement
- **Special need**: Rumen needs fiber to function properly

**Sheep:**
- Excellent at using pasture and forage
- Need copper in careful amounts (toxic if too much)
- **Ewes**: Extra nutrition during pregnancy and lactation
- **Lambs**: Need higher protein for growth

**Goats:**
- Natural browsers (eat shrubs, trees)
- Need variety in diet
- Require higher copper than sheep
- Good at converting poor quality forage

**Pigs:**
- Single-stomach animals (like humans)
- Need balanced grain-based diets
- Can't digest large amounts of fiber
- Require specific amino acids in feed

**Poultry:**
- **Layers**: Need calcium for eggshells
- **Broilers**: Need high protein for fast growth
- **All poultry**: Need grit for digestion (small stones)
- **Chick starter**: Higher protein for young birds

**Horses:**
- Need frequent small meals (not large meals)
- Require high-quality forage
- Need specific calcium:phosphorus ratio
- Require salt supplementation

## Feeding Management

**How much to feed:**
- Based on animal's weight and needs
- Growing animals need more per pound
- Pregnant/lactating animals need extra
- Adjust for weather (cold needs more energy)
- Monitor body condition and adjust

**When to feed:**
- Consistent schedule reduces stress
- Most animals do well with twice daily feeding
- Free-choice feeding for forage
- Measured amounts for concentrates

**How to feed:**
- Separate feeding areas reduce competition
- Clean feeders regularly
- Store feed properly to prevent spoilage
- Provide adequate feeder space for all animals

**Body condition scoring:**
- System to assess if animals are too thin, ideal, or too fat
- Feel ribs and backbone
- Look at overall shape
- Adjust feeding based on score

**Common feeding problems:**

**Overfeeding:**
- Causes obesity and health issues
- Wastes money on excess feed
- Can cause digestive problems
- Solution: Measure feed amounts

**Underfeeding:**
- Poor growth and production
- Weak immune system
- Reproductive problems
- Solution: Increase feed quantity/quality

**Imbalanced diet:**
- Missing important nutrients
- Can cause specific deficiencies
- Affects health and productivity
- Solution: Use balanced feeds or supplements

**Feed spoilage:**
- Moldy feed can make animals sick
- Rodents contaminate feed
- Nutrients degrade over time
- Solution: Proper storage and rotation

**Remember**: Good nutrition is the foundation of animal health and productivity. Learn to recognize what normal, healthy animals look like and adjust feeding accordingly. When in doubt, consult with a veterinarian or animal nutritionist.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most important nutrient?",
          options: [
            "Protein",
            "Water",
            "Vitamins",
            "Fiber"
          ],
          correctAnswer: 1,
          explanation: "Water is essential for all body functions and must always be available."
        },
        {
          id: 2,
          question: "What provides energy for animals?",
          options: [
            "Only protein",
            "Carbohydrates and fats",
            "Only vitamins",
            "Minerals only"
          ],
          correctAnswer: 1,
          explanation: "Energy comes primarily from carbohydrates and fats in feed."
        },
        {
          id: 3,
          question: "What does protein build?",
          options: [
            "Only bones",
            "Muscles, organs, and products",
            "Only fat",
            "Water content"
          ],
          correctAnswer: 1,
          explanation: "Protein is essential for growth, repair, and production."
        },
        {
          id: 4,
          question: "What animals need more protein?",
          options: [
            "Only old animals",
            "Young animals for growth",
            "All animals equally",
            "Only male animals"
          ],
          correctAnswer: 1,
          explanation: "Growing animals need more protein for tissue development."
        },
        {
          id: 5,
          question: "What are fat-soluble vitamins?",
          options: [
            "B and C",
            "A, D, E, K",
            "All vitamins",
            "No vitamins"
          ],
          correctAnswer: 1,
          explanation: "Vitamins A, D, E, and K are stored in body fat."
        },
        {
          id: 6,
          question: "What is fiber important for?",
          options: [
            "All animals equally",
            "Ruminants like cattle and sheep",
            "Only pigs",
            "No animals need fiber"
          ],
          correctAnswer: 1,
          explanation: "Ruminants need fiber for proper digestive system function."
        },
        {
          id: 7,
          question: "What is hay?",
          options: [
            "Fresh grass",
            "Dried grasses or legumes",
            "Only alfalfa plants",
            "Grain mixture"
          ],
          correctAnswer: 1,
          explanation: "Hay is forage that has been cut and dried for storage."
        },
        {
          id: 8,
          question: "What are concentrates high in?",
          options: [
            "Only water",
            "Energy and/or protein",
            "Only fiber",
            "No nutrients"
          ],
          correctAnswer: 1,
          explanation: "Concentrates provide concentrated nutrition in small amounts."
        },
        {
          id: 9,
          question: "What do dairy cows need for milk production?",
          options: [
            "Less feed",
            "High-energy feed",
            "Only water",
            "No special needs"
          ],
          correctAnswer: 1,
          explanation: "Milk production requires substantial energy from feed."
        },
        {
          id: 10,
          question: "What mineral do sheep need carefully?",
          options: [
            "Calcium only",
            "Copper (toxic if too much)",
            "Any mineral",
            "No minerals"
          ],
          correctAnswer: 1,
          explanation: "Sheep are very sensitive to copper levels in their diet."
        },
        {
          id: 11,
          question: "What are goats naturally?",
          options: [
            "Grain eaters",
            "Browsers (eat shrubs, trees)",
            "Meat eaters only",
            "Water plants only"
          ],
          correctAnswer: 1,
          explanation: "Goats prefer browsing on bushes and trees rather than grazing grass."
        },
        {
          id: 12,
          question: "What can't pigs digest well?",
          options: [
            "Any food",
            "Large amounts of fiber",
            "Grains",
            "Protein"
          ],
          correctAnswer: 1,
          explanation: "Pigs have simple stomachs not designed for high-fiber diets."
        },
        {
          id: 13,
          question: "What do laying hens need for eggshells?",
          options: [
            "Extra protein",
            "Calcium",
            "Only water",
            "Vitamins only"
          ],
          correctAnswer: 1,
          explanation: "Calcium is essential for strong eggshell formation."
        },
        {
          id: 14,
          question: "How should horses be fed?",
          options: [
            "One large meal daily",
            "Frequent small meals",
            "Only at night",
            "When hungry only"
          ],
          correctAnswer: 1,
          explanation: "Horses' digestive systems work best with frequent, small feedings."
        },
        {
          id: 15,
          question: "What affects how much to feed?",
          options: [
            "Only animal type",
            "Weight, age, and needs",
            "Day of week",
            "Farmer's schedule"
          ],
          correctAnswer: 1,
          explanation: "Multiple factors determine individual feeding requirements."
        },
        {
          id: 16,
          question: "Why consistent feeding schedule?",
          options: [
            "No reason",
            "Reduces animal stress",
            "Only for convenience",
            "Saves money"
          ],
          correctAnswer: 1,
          explanation: "Regular routines help animals feel secure and reduce anxiety."
        },
        {
          id: 17,
          question: "What is body condition scoring?",
          options: [
            "Weighing animals",
            "Assessing if too thin, ideal, or too fat",
            "Measuring height",
            "Counting animals"
          ],
          correctAnswer: 1,
          explanation: "Condition scoring evaluates nutritional status through observation and touch."
        },
        {
          id: 18,
          question: "What does overfeeding cause?",
          options: [
            "Better health",
            "Obesity and health issues",
            "No problems",
            "Happier animals"
          ],
          correctAnswer: 1,
          explanation: "Excess feed leads to weight problems and related health issues."
        },
        {
          id: 19,
          question: "What causes underfeeding problems?",
          options: [
            "Stronger animals",
            "Poor growth and weak immunity",
            "Better digestion",
            "Cost savings"
          ],
          correctAnswer: 1,
          explanation: "Insufficient nutrition compromises health and productivity."
        },
        {
          id: 20,
          question: "What is feed spoilage risk?",
          options: [
            "Better nutrition",
            "Mold making animals sick",
            "No risk",
            "Animals prefer it"
          ],
          correctAnswer: 1,
          explanation: "Spoiled feed can contain toxins that harm animal health."
        }
      ]
    },
    {
      id: 4,
      title: "Animal Health and Disease Prevention",
      content: `# Module 4: Animal Health and Disease Prevention

## Recognizing Healthy Animals

Knowing what normal looks like helps you spot problems early.

**Signs of healthy animals:**

**Appearance:**
- Bright, clear eyes
- Shiny coat or feathers
- Clean nose and mouth
- Good body condition (not too thin or fat)
- Alert and interested in surroundings

**Behavior:**
- Normal appetite and thirst
- Regular movement and posture
- Social with herd/flock mates
- Normal resting and activity patterns
- Appropriate responses to handling

**Production:**
- Normal growth rates
- Good milk production (if dairy)
- Regular egg production (if poultry)
- Healthy offspring (if breeding)
- Good wool/hair quality (if fiber animals)

**Elimination:**
- Normal manure consistency for species
- Regular urination
- No straining or discomfort
- Appropriate color and amount

## Common Health Problems

**Digestive problems:**
- **Bloat**: Swollen left side (ruminants), emergency!
- **Diarrhea**: Watery manure, can cause dehydration
- **Constipation**: Hard, dry manure, straining
- **Off feed**: Not eating normally

**Respiratory problems:**
- **Coughing**: Dry or wet cough
- **Nasal discharge**: Clear, white, yellow, or green
- **Rapid breathing**: Especially at rest
- **Noisy breathing**: Wheezing or rasping

**Lameness and leg problems:**
- **Limping**: Favoring one leg
- **Swollen joints**: Hot, painful swelling
- **Hoof problems**: Overgrown, cracked, infected
- **Reluctance to move**: Standing still, not wanting to walk

**Skin and coat problems:**
- **Hair loss**: Patches of missing hair
- **Itching**: Scratching, rubbing
- **Lesions**: Sores, scabs, wounds
- **Parasites**: Visible ticks, lice, mites

**Reproductive problems:**
- **Difficulty birthing**: Straining without progress
- **Mastitis**: Swollen, painful udder, abnormal milk
- **Not cycling**: Females not coming into heat
- **Poor conception**: Repeated breeding without pregnancy

## Disease Prevention Strategies

**Biosecurity basics:**

**Keep new animals separate:**
- Quarantine new arrivals for 2-4 weeks
- Observe for signs of illness
- Treat for parasites if needed
- Introduce gradually to existing herd/flock

**Limit visitor access:**
- Provide clean boots or boot covers
- Wash hands before and after contact
- Keep vehicles away from animals
- Control access to feed and water areas

**Clean and disinfect:**
- Regular cleaning of housing
- Proper manure management
- Disinfection of equipment
- Rodent and pest control

**Vaccination programs:**

**Core vaccines** (recommended for all):
- **Clostridial diseases** (tetanus, blackleg)
- **Respiratory diseases** (for relevant species)
- **Reproductive diseases** (if breeding)

**Risk-based vaccines** (based on location/management):
- **Rabies** (if in endemic areas)
- **Leptospirosis** (if water contamination risk)
- **Other local disease threats**

**Vaccination timing:**
- Follow veterinarian recommendations
- Give boosters as needed
- Record all vaccinations
- Consider pregnancy status

**Parasite control:**

**Internal parasites** (worms):
- Regular fecal testing
- Strategic deworming
- Pasture rotation
- Multi-species grazing

**External parasites** (ticks, lice, mites):
- Regular inspections
- Appropriate treatments
- Environmental control
- Preventative measures

**Record keeping:**

**What to record:**
- Animal identification
- Health treatments and dates
- Vaccination history
- Breeding and birth dates
- Weight and growth data
- Any health problems

**Why records matter:**
- Track animal health over time
- Make informed management decisions
- Meet regulatory requirements
- Improve breeding programs
- Monitor treatment effectiveness

## Basic First Aid and Treatment

**First aid kit essentials:**
- Thermometer (livestock rectal)
- Sterile gauze and bandages
- Antiseptic solution
- Scissors and tweezers
- Lubricant for thermometer
- Flashlight
- Contact numbers for veterinarian

**Taking vital signs:**

**Temperature** (normal ranges):
- Cattle: 101.0-102.5°F
- Sheep/Goats: 102.0-103.5°F
- Pigs: 102.0-103.5°F
- Horses: 99.5-101.5°F
- Poultry: 105.0-107.0°F

**Heart rate** (beats per minute):
- Cattle: 60-80
- Sheep/Goats: 70-90
- Pigs: 70-120
- Horses: 28-44
- Varies by size and age

**Respiration rate** (breaths per minute):
- Cattle: 20-30
- Sheep/Goats: 20-30
- Pigs: 15-20
- Horses: 8-16
- Count when animal is calm

**When to call the veterinarian:**

**Emergency situations:**
- Difficulty breathing
- Severe bleeding
- Sudden collapse
- Prolonged labor (over 2 hours active pushing)
- Suspected poisoning
- High fever (over 104°F)

**Urgent situations:**
- Not eating for 24 hours
- Lameness preventing walking
- Eye injuries
- Moderate wounds
- Diarrhea with dehydration signs
- Abnormal behavior lasting hours

**Routine care needs:**
- Vaccinations
- Dehorning or castration
- Hoof trimming
- Dental care
- Pregnancy checks
- General health exams

**Remember**: Prevention is always better than treatment. Good management, nutrition, and housing prevent most health problems. Develop a relationship with a veterinarian before you have emergencies. Learn basic health monitoring skills for your specific animals.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What indicates healthy eyes?",
          options: [
            "Cloudy and dull",
            "Bright and clear",
            "Always closed",
            "Watering constantly"
          ],
          correctAnswer: 1,
          explanation: "Clear, bright eyes show good health and alertness."
        },
        {
          id: 2,
          question: "What is normal animal behavior?",
          options: [
            "Hiding constantly",
            "Normal appetite and social interaction",
            "Aggression to all",
            "No movement"
          ],
          correctAnswer: 1,
          explanation: "Healthy animals eat normally and interact appropriately with others."
        },
        {
          id: 3,
          question: "What is bloat?",
          options: [
            "Skin condition",
            "Swollen left side in ruminants",
            "Eye infection",
            "Hoof problem"
          ],
          correctAnswer: 1,
          explanation: "Bloat is gas accumulation in rumen, causing left side swelling."
        },
        {
          id: 4,
          question: "What does diarrhea cause risk of?",
          options: [
            "Weight gain",
            "Dehydration",
            "Stronger bones",
            "Better appetite"
          ],
          correctAnswer: 1,
          explanation: "Diarrhea causes fluid loss leading to dehydration."
        },
        {
          id: 5,
          question: "What indicates respiratory problem?",
          options: [
            "Normal breathing",
            "Coughing or nasal discharge",
            "Good appetite",
            "Normal activity"
          ],
          correctAnswer: 1,
          explanation: "Coughing and discharge suggest respiratory issues."
        },
        {
          id: 6,
          question: "What is lameness?",
          options: [
            "Normal walking",
            "Limping or favoring one leg",
            "Running fast",
            "Lying down"
          ],
          correctAnswer: 1,
          explanation: "Lameness indicates pain or injury in legs or feet."
        },
        {
          id: 7,
          question: "What is mastitis?",
          options: [
            "Foot problem",
            "Udder inflammation",
            "Eye infection",
            "Skin rash"
          ],
          correctAnswer: 1,
          explanation: "Mastitis is udder infection common in dairy animals."
        },
        {
          id: 8,
          question: "How long to quarantine new animals?",
          options: [
            "No quarantine needed",
            "2-4 weeks",
            "One day only",
            "6 months"
          ],
          correctAnswer: 1,
          explanation: "Quarantine prevents disease spread to existing animals."
        },
        {
          id: 9,
          question: "What is biosecurity?",
          options: [
            "Only cleaning",
            "Disease prevention measures",
            "Animal breeding",
            "Feeding schedule"
          ],
          correctAnswer: 1,
          explanation: "Biosecurity includes all practices that prevent disease introduction."
        },
        {
          id: 10,
          question: "What are core vaccines?",
          options: [
            "Optional vaccines",
            "Recommended for all animals",
            "Only for sick animals",
            "Never needed"
          ],
          correctAnswer: 1,
          explanation: "Core vaccines protect against common, serious diseases."
        },
        {
          id: 11,
          question: "What controls internal parasites?",
          options: [
            "Only medication",
            "Fecal testing and pasture rotation",
            "No control possible",
            "Extra feeding"
          ],
          correctAnswer: 1,
          explanation: "Multiple strategies including testing and management control worms."
        },
        {
          id: 12,
          question: "What should health records include?",
          options: [
            "Only names",
            "Treatments, vaccinations, problems",
            "Favorite foods",
            "Color preferences"
          ],
          correctAnswer: 1,
          explanation: "Complete records track health history for better care."
        },
        {
          id: 13,
          question: "What is essential in first aid kit?",
          options: [
            "Only bandages",
            "Thermometer and antiseptic",
            "No equipment needed",
            "Only medications"
          ],
          correctAnswer: 1,
          explanation: "Basic supplies allow initial assessment and care."
        },
        {
          id: 14,
          question: "What is normal cattle temperature?",
          options: [
            "98.6°F only",
            "101.0-102.5°F",
            "104-105°F",
            "No normal range"
          ],
          correctAnswer: 1,
          explanation: "Cattle normally run warmer temperatures than humans."
        },
        {
          id: 15,
          question: "When to call vet for emergency?",
          options: [
            "For routine care",
            "Difficulty breathing or severe bleeding",
            "Any small issue",
            "Never call vet"
          ],
          correctAnswer: 1,
          explanation: "Some situations require immediate professional help."
        },
        {
          id: 16,
          question: "What is 'off feed'?",
          options: [
            "Eating normally",
            "Not eating normally",
            "Extra hungry",
            "Drinking only"
          ],
          correctAnswer: 1,
          explanation: "Reduced appetite often indicates health problems."
        },
        {
          id: 17,
          question: "What limits disease spread?",
          options: [
            "Sharing equipment",
            "Cleaning and disinfecting",
            "Ignoring problems",
            "More animals together"
          ],
          correctAnswer: 1,
          explanation: "Cleanliness reduces pathogen transmission."
        },
        {
          id: 18,
          question: "What do risk-based vaccines depend on?",
          options: [
            "Only animal color",
            "Location and management risks",
            "Farmer's preference",
            "Day of week"
          ],
          correctAnswer: 1,
          explanation: "Some vaccines are needed only in specific situations."
        },
        {
          id: 19,
          question: "What controls external parasites?",
          options: [
            "Only ignoring them",
            "Regular inspections and treatments",
            "No control needed",
            "Extra feeding"
          ],
          correctAnswer: 1,
          explanation: "Active monitoring and treatment prevent parasite problems."
        },
        {
          id: 20,
          question: "What is better than treatment?",
          options: [
            "Waiting longer",
            "Prevention",
            "More treatment",
            "Ignoring issues"
          ],
          correctAnswer: 1,
          explanation: "Good management prevents most health problems before they start."
        }
      ]
    },
    {
      id: 5,
      title: "Animal Behavior and Handling",
      content: `# Module 5: Animal Behavior and Handling

## Understanding Animal Behavior

Animals communicate through behavior. Understanding their signals makes handling safer and less stressful.

**Natural behaviors by species:**

**Cattle behavior:**
- **Herd animals**: Prefer to be in groups
- **Flight zone**: Personal space around animal
- **Point of balance**: At shoulder - move forward from behind, backward from front
- **Vision**: Wide-angle, poor depth perception
- **Hearing**: Sensitive to loud noises

**Sheep behavior:**
- **Flock instinct**: Strong urge to stay together
- **Follow the leader**: Will follow moving sheep
- **Easily frightened**: Startle at sudden movements
- **Good memory**: Remember handling experiences
- **Vision**: Wide field, recognize faces

**Goat behavior:**
- **Curious and intelligent**: Explore new things
- **Independent**: Less flock-oriented than sheep
- **Climbers**: Jump on objects, need secure fencing
- **Vocal**: Communicate with bleats
- **Social hierarchy**: Establish pecking order

**Pig behavior:**
- **Intelligent and social**: Form strong social bonds
- **Rooting instinct**: Use snout to dig and explore
- **Clean animals**: Designate separate areas for sleeping, eating, eliminating
- **Temperature sensitive**: Need wallows or misters in heat
- **Vocal**: Wide range of sounds

**Poultry behavior:**
- **Pecking order**: Strict social hierarchy
- **Dust bathing**: Clean feathers and control parasites
- **Roosting**: Perch off ground at night
- **Foraging**: Scratch ground looking for food
- **Vocal communication**: Different sounds for different situations

**Horse behavior:**
- **Prey animals**: Naturally cautious, startle easily
- **Herd animals**: Need companionship
- **Body language**: Ears, eyes, tail position communicate
- **Flight response**: Run first, think later
- **Memory**: Remember good and bad experiences

## Safe Handling Principles

**General handling rules:**

**Stay calm and patient:**
- Animals sense nervousness
- Move slowly and deliberately
- Avoid sudden movements or loud noises
- Speak in calm, reassuring tone

**Understand flight zones:**
- **Pressure zone**: Where animal notices you
- **Flight zone**: Where animal moves away
- **Balance point**: At shoulder - controls direction
- **Blind spot**: Directly behind animal

**Use proper facilities:**
- Well-designed handling areas
- Non-slip flooring
- Adequate lighting
- Proper gates and restraints
- Escape routes for handlers

**Work with natural behaviors:**
- Use animals' tendencies to your advantage
- Move small groups rather than individuals
- Work from animals' preferred sides
- Allow animals to see where they're going

**Know when to get help:**
- Don't handle dangerous animals alone
- Ask for help with difficult procedures
- Use proper restraint equipment
- Recognize your own limitations

## Handling Different Animals

**Cattle handling tips:**
- Work in small groups (3-6 animals)
- Use calm, steady pressure
- Avoid eye contact (can be threatening)
- Move at walking speed
- Use sorting sticks to guide movement

**Sheep handling tips:**
- Move as a flock whenever possible
- Use a leader sheep to guide others
- Avoid separating individuals
- Work in circular patterns
- Use panels to create flow

**Goat handling tips:**
- May need more individual attention
- Use food rewards for cooperation
- Secure all gates (they test latches)
- Provide platforms for climbing enrichment
- Handle kids gently for future ease

**Pig handling tips:**
- Use boards or panels to guide
- Never grab ears or tails
- Work with their desire to move forward
- Use food motivation
- Keep handling areas dry and clean

**Poultry handling tips:**
- Catch birds in evening when calmer
- Support body fully when carrying
- Hold wings gently against body
- Move slowly to prevent flapping
- Work in dim light to calm birds

**Horse handling tips:**
- Always approach from front-left (near side)
- Speak before touching
- Move slowly around horses
- Never walk directly behind
- Use proper halter and lead rope

## Low-Stress Handling Techniques

**Benefits of low-stress handling:**
- Safer for animals and people
- Better meat quality (reduces stress hormones)
- Improved growth and production
- Easier future handling
- Better animal welfare

**Pressure and release method:**
1. Apply gentle pressure to move animal
2. Release pressure immediately when animal moves correctly
3. Reward with rest or release
4. Repeat as needed
5. Animals learn to respond to light pressure

**Reading animal signals:**

**Relaxed signals:**
- Normal breathing rate
- Ears in neutral position
- Soft eyes
- Loose muscles
- Normal tail position

**Stressed signals:**
- Rapid breathing
- Ears pinned back
- Wide eyes showing white
- Tense muscles
- Tail clamped or swishing

**Fearful signals:**
- Attempts to escape
- Trembling or shaking
- Vocalizing in distress
- Defecating/urinating
- Refusing to move

**Building trust with animals:**
- Consistent, gentle handling
- Positive experiences with food
- Respect individual personalities
- Avoid negative experiences when possible
- Spend calm time with animals

## Special Handling Situations

**Handling young animals:**
- Be extra gentle
- Support body fully
- Keep with mother when possible
- Handle regularly for future ease
- Watch for mother's protective behavior

**Handling pregnant animals:**
- Avoid stress which can cause abortion
- Provide extra space
- Move slowly and calmly
- Avoid slippery surfaces
- Watch for signs of labor

**Handling sick or injured animals:**
- Extra patience needed
- May need different restraint methods
- Watch for pain responses
- Work with veterinarian guidance
- Consider animal's comfort first

**Transport handling:**
- Load calmly without rushing
- Provide proper ventilation
- Avoid mixing unfamiliar animals
- Check animals frequently during transport
- Unload carefully at destination

**Emergency handling:**
- Stay calm and assess situation
- Get help if needed
- Use proper restraint equipment
- Prioritize human safety
- Have emergency plan prepared

**Remember**: Good handling starts with understanding and respect. Animals that trust their handlers are easier to care for and produce better. Always prioritize safety - both yours and the animals'. Practice handling skills regularly to improve your technique and confidence.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of animals are cattle?",
          options: [
            "Solitary animals",
            "Herd animals",
            "Nocturnal animals",
            "Aquatic animals"
          ],
          correctAnswer: 1,
          explanation: "Cattle naturally live and prefer to move in groups."
        },
        {
          id: 2,
          question: "What is a flight zone?",
          options: [
            "Airport area",
            "Personal space around animal",
            "Running track",
            "Feeding area"
          ],
          correctAnswer: 1,
          explanation: "Flight zone is the distance at which an animal moves away from pressure."
        },
        {
          id: 3,
          question: "What is strong in sheep?",
          options: [
            "Individualism",
            "Flock instinct",
            "Climbing ability",
            "Swimming skill"
          ],
          correctAnswer: 1,
          explanation: "Sheep have strong instinct to stay together as a flock."
        },
        {
          id: 4,
          question: "What are goats known for?",
          options: [
            "Fear of heights",
            "Curiosity and intelligence",
            "Avoiding exploration",
            "Quiet nature"
          ],
          correctAnswer: 1,
          explanation: "Goats are naturally curious and intelligent animals."
        },
        {
          id: 5,
          question: "What is pig rooting instinct?",
          options: [
            "Sleeping deeply",
            "Using snout to dig and explore",
            "Climbing trees",
            "Swimming only"
          ],
          correctAnswer: 1,
          explanation: "Pigs naturally root with their snouts to find food."
        },
        {
          id: 6,
          question: "What is poultry pecking order?",
          options: [
            "Eating schedule",
            "Social hierarchy",
            "Sleeping arrangement",
            "Egg laying order"
          ],
          correctAnswer: 1,
          explanation: "Pecking order is the social ranking system in poultry groups."
        },
        {
          id: 7,
          question: "How should handlers stay?",
          options: [
            "Nervous and quick",
            "Calm and patient",
            "Loud and forceful",
            "Invisible to animals"
          ],
          correctAnswer: 1,
          explanation: "Calm handling reduces animal stress and improves safety."
        },
        {
          id: 8,
          question: "Where is cattle balance point?",
          options: [
            "At tail",
            "At shoulder",
            "At head",
            "At hip"
          ],
          correctAnswer: 1,
          explanation: "Shoulder is balance point - move forward from behind it."
        },
        {
          id: 9,
          question: "How many cattle to move together?",
          options: [
            "Always one",
            "Small groups (3-6)",
            "Whole herd always",
            "No specific number"
          ],
          correctAnswer: 1,
          explanation: "Small groups are easier to handle than individuals or large herds."
        },
        {
          id: 10,
          question: "How to guide sheep movement?",
          options: [
            "Chase individually",
            "Use a leader sheep",
            "Carry them",
            "Use loud noises"
          ],
          correctAnswer: 1,
          explanation: "Sheep naturally follow a leader, making flock movement easier."
        },
        {
          id: 11,
          question: "What motivates goats well?",
          options: [
            "Yelling",
            "Food rewards",
            "Ignoring them",
            "Loud music"
          ],
          correctAnswer: 1,
          explanation: "Goats respond well to positive reinforcement with food."
        },
        {
          id: 12,
          question: "How to never handle pigs?",
          options: [
            "Gently",
            "Grabbing ears or tails",
            "With care",
            "Using food"
          ],
          correctAnswer: 1,
          explanation: "Grabbing ears or tails causes pain and distress."
        },
        {
          id: 13,
          question: "When to catch poultry?",
          options: [
            "Midday",
            "Evening when calmer",
            "Early morning",
            "When running"
          ],
          correctAnswer: 1,
          explanation: "Birds are calmer in evening and easier to handle."
        },
        {
          id: 14,
          question: "How to approach horses?",
          options: [
            "From behind",
            "Front-left (near side)",
            "Right side only",
            "Running toward them"
          ],
          correctAnswer: 1,
          explanation: "Horses are traditionally handled from the left (near) side."
        },
        {
          id: 15,
          question: "What benefits low-stress handling?",
          options: [
            "More work",
            "Better meat quality",
            "No benefits",
            "Slower work"
          ],
          correctAnswer: 1,
          explanation: "Reduced stress improves meat quality and animal welfare."
        },
        {
          id: 16,
          question: "What is pressure and release method?",
          options: [
            "Constant pressure",
            "Apply pressure, release when animal responds",
            "No pressure ever",
            "Only release"
          ],
          correctAnswer: 1,
          explanation: "This method teaches animals to respond to gentle cues."
        },
        {
          id: 17,
          question: "What indicates stressed animal?",
          options: [
            "Relaxed muscles",
            "Rapid breathing and tense muscles",
            "Normal breathing",
            "Soft eyes"
          ],
          correctAnswer: 1,
          explanation: "Physical signs indicate stress level in animals."
        },
        {
          id: 18,
          question: "How to build trust with animals?",
          options: [
            "Inconsistent handling",
            "Consistent, gentle handling",
            "Loud handling",
            "Rare handling"
          ],
          correctAnswer: 1,
          explanation: "Consistency and gentleness build animal trust over time."
        },
        {
          id: 19,
          question: "How to handle pregnant animals?",
          options: [
            "With extra stress",
            "Avoid stress to prevent abortion",
            "Same as all animals",
            "Only handle when necessary"
          ],
          correctAnswer: 1,
          explanation: "Stress can cause pregnancy loss in livestock."
        },
        {
          id: 20,
          question: "What should handling prioritize?",
          options: [
            "Speed only",
            "Safety for animals and people",
            "Convenience only",
            "Lowest cost"
          ],
          correctAnswer: 1,
          explanation: "Safety must always come first in animal handling."
        }
      ]
    },
    {
      id: 6,
      title: "Breeding and Reproduction Basics",
      content: `# Module 6: Breeding and Reproduction Basics

## Understanding Animal Reproduction

Successful breeding requires understanding the reproductive cycles of different species.

**Reproductive terms:**

**Estrus (Heat):**
- Time when female is receptive to breeding
- Shows behavioral and physical signs
- Occurs in cycles specific to each species
- Optimal time for breeding

**Gestation:**
- Pregnancy period from conception to birth
- Varies by species
- Proper nutrition crucial during this time

**Parturition:**
- Act of giving birth
- Different names by species: calving (cattle), lambing (sheep), kidding (goats), farrowing (pigs)
- Requires preparation and monitoring

**Weaning:**
- Separating young from mother
- Transition to solid food
- Stressful time needing careful management

## Reproductive Cycles by Species

**Cattle reproduction:**
- **Estrus cycle**: 21 days
- **Estrus duration**: 12-18 hours
- **Gestation**: 283 days (9 months)
- **Signs of heat**: Standing to be mounted, mucus discharge, restlessness
- **Breeding age**: 12-15 months (when reaching proper size)

**Sheep reproduction:**
- **Seasonal breeders**: Usually fall breeders
- **Estrus cycle**: 16-17 days
- **Estrus duration**: 24-36 hours
- **Gestation**: 147-150 days (5 months)
- **Signs of heat**: Seeking ram, tail wagging
- **Breeding age**: 7-12 months

**Goat reproduction:**
- **Seasonal breeders**: Fall, some breeds year-round
- **Estrus cycle**: 18-24 days
- **Estrus duration**: 12-48 hours
- **Gestation**: 150 days (5 months)
- **Signs of heat**: Tail wagging, vocalizing, swollen vulva
- **Breeding age**: 7-12 months

**Pig reproduction:**
- **Estrus cycle**: 21 days
- **Estrus duration**: 48-72 hours
- **Gestation**: 114 days (3 months, 3 weeks, 3 days)
- **Signs of heat**: Standing still when pressure applied to back, swollen vulva
- **Breeding age**: 6-8 months

**Horse reproduction:**
- **Seasonal breeders**: Spring/summer
- **Estrus cycle**: 21 days
- **Estrus duration**: 5-7 days
- **Gestation**: 340 days (11 months)
- **Signs of heat**: Frequent urination, winking vulva, seeking stallion
- **Breeding age**: 2-3 years

## Breeding Methods

**Natural breeding:**
- **Pasture breeding**: Male runs with females
- **Hand mating**: Controlled introduction of specific pairs
- **Advantages**: Natural, less equipment needed
- **Disadvantages**: Less control, disease risk, can't use superior males widely

**Artificial insemination (AI):**
- Semen collected and placed in female reproductive tract
- **Advantages**: Use superior genetics, disease control, no need to keep males
- **Disadvantages**: Requires skill and timing, equipment needed
- **Best for**: Dairy cattle, swine, some sheep and goats

**Embryo transfer:**
- Embryos collected from superior female, transferred to recipient
- **Advantages**: Maximize genetics from valuable females
- **Disadvantages**: Expensive, requires veterinary expertise
- **Used in**: High-value breeding programs

**Choosing breeding stock:**

**Selecting females:**
- Good health and conformation
- Proven production (milk, growth, mothering ability)
- Appropriate age and size
- Good temperament
- Free from genetic defects

**Selecting males:**
- Excellent conformation for the breed
- Good health and fertility
- Desirable traits to pass to offspring
- Appropriate temperament
- Free from genetic defects

## Pregnancy Management

**Confirming pregnancy:**
- **Non-return to estrus**: If not coming back in heat
- **Ultrasound**: Visual confirmation, can determine multiples
- **Blood tests**: Detect pregnancy-specific hormones
- **Veterinary palpation**: Manual examination by vet

**Pregnancy nutrition:**
- First two-thirds: Maintenance needs plus slight increase
- Last third: Significant increase for fetal growth
- Protein and mineral needs increase
- Watch body condition - not too fat or thin

**Preparing for birth:**

**Calculate due dates:**
- Cattle: Breeding date + 283 days
- Sheep/Goats: Breeding date + 150 days
- Pigs: Breeding date + 114 days
- Mark calendar and prepare 2 weeks before due date

**Prepare birthing area:**
- Clean, dry, and disinfected
- Separate from other animals
- Adequate bedding
- Good lighting for observation
- Necessary supplies ready

**Birth supplies checklist:**
- Clean towels
- Disinfectant for navels
- Iodine for navel dipping
- Lubricant for assistance
- Colostrum supplement if needed
- Veterinarian contact information

## Caring for Newborns

**Immediate care after birth:**
- Clear membranes from nose and mouth
- Dry with clean towels if mother doesn't
- Dip navel in iodine to prevent infection
- Ensure colostrum intake within first 2 hours
- Keep warm and dry

**Colostrum importance:**
- First milk produced by mother
- Rich in antibodies for disease protection
- Must be consumed within first 24 hours
- Critical for newborn immunity
- Store extra colostrum if available

**Monitoring newborns:**
- Should stand within 1-2 hours
- Should nurse within 2-4 hours
- Should pass meconium (first manure) within 24 hours
- Should be active and responsive
- Temperature should be normal for species

**Common newborn problems:**

**Weak or chilled newborns:**
- Provide supplemental heat
- Help with nursing if needed
- May need colostrum supplementation
- Monitor closely for improvement

**Failure of maternal bonding:**
- Some mothers reject offspring
- May need to restrain for nursing
- Consider fostering to another mother
- In extreme cases, hand-raising

**Infections:**
- Navel ill from unclean environment
- Scours (diarrhea) from various causes
- Pneumonia from chilling or poor ventilation
- Prevent with clean environment and colostrum

**Weaning process:**

**Gradual weaning:**
- Separate for increasing periods
- Provide high-quality starter feed
- Ensure water availability
- Reduce stress as much as possible

**Age to wean:**
- Calves: 6-8 months (beef), younger for dairy
- Lambs: 2-4 months
- Kids: 2-3 months
- Piglets: 3-8 weeks
- Foals: 4-6 months

**Weaning stress reduction:**
- Keep weaned animals in familiar groups
- Provide excellent nutrition
- Minimize other changes at same time
- Watch for signs of stress or illness

**Record keeping for breeding:**
- Breeding dates and methods used
- Due dates calculated
- Birth dates and details
- Identification of offspring
- Any problems or interventions

**Remember**: Successful breeding requires planning, observation, and timely action. Learn the normal signs for your species so you can recognize problems early. Always have a veterinarian available for emergencies. Good breeding management leads to healthy offspring and sustainable livestock operations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is estrus?",
          options: [
            "Pregnancy period",
            "Time female is receptive to breeding",
            "Birth process",
            "Weaning time"
          ],
          correctAnswer: 1,
          explanation: "Estrus or heat is when females will accept mating."
        },
        {
          id: 2,
          question: "What is gestation?",
          options: [
            "Breeding time",
            "Pregnancy period",
            "Weaning period",
            "Growth period"
          ],
          correctAnswer: 1,
          explanation: "Gestation is the time from conception to birth."
        },
        {
          id: 3,
          question: "What is cattle gestation length?",
          options: [
            "5 months",
            "9 months (283 days)",
            "12 months",
            "3 months"
          ],
          correctAnswer: 1,
          explanation: "Cattle pregnancy lasts approximately 9 months."
        },
        {
          id: 4,
          question: "What are seasonal breeders?",
          options: [
            "Breed year-round",
            "Breed in specific seasons",
            "Never breed",
            "Breed monthly"
          ],
          correctAnswer: 1,
          explanation: "Some species only breed during certain times of year."
        },
        {
          id: 5,
          question: "What is sheep gestation?",
          options: [
            "9 months",
            "5 months (150 days)",
            "3 months",
            "12 months"
          ],
          correctAnswer: 1,
          explanation: "Sheep pregnancy lasts about 5 months."
        },
        {
          id: 6,
          question: "What is pig gestation?",
          options: [
            "9 months",
            "3 months, 3 weeks, 3 days",
            "6 months",
            "1 year"
          ],
          correctAnswer: 1,
          explanation: "Pig pregnancy is often remembered as 3-3-3 (months, weeks, days)."
        },
        {
          id: 7,
          question: "What is natural breeding advantage?",
          options: [
            "More control",
            "Natural, less equipment",
            "Disease prevention",
            "Superior genetics use"
          ],
          correctAnswer: 1,
          explanation: "Natural breeding requires less management and equipment."
        },
        {
          id: 8,
          question: "What is AI advantage?",
          options: [
            "No skill needed",
            "Use superior genetics",
            "Always natural",
            "Less disease control"
          ],
          correctAnswer: 1,
          explanation: "AI allows using genetics from superior males without keeping them."
        },
        {
          id: 9,
          question: "What to select in breeding females?",
          options: [
            "Only color",
            "Good health and production",
            "Only age",
            "No criteria"
          ],
          correctAnswer: 1,
          explanation: "Females should have proven health and productivity."
        },
        {
          id: 10,
          question: "How to confirm pregnancy?",
          options: [
            "Only guessing",
            "Ultrasound or blood tests",
            "No methods",
            "Only by size"
          ],
          correctAnswer: 1,
          explanation: "Several reliable methods exist for pregnancy confirmation."
        },
        {
          id: 11,
          question: "When does nutrition need increase most?",
          options: [
            "First month",
            "Last third of pregnancy",
            "Never increases",
            "After birth only"
          ],
          correctAnswer: 1,
          explanation: "Fetal growth accelerates in final pregnancy stage."
        },
        {
          id: 12,
          question: "What to prepare before birth?",
          options: [
            "Nothing needed",
            "Clean birthing area and supplies",
            "Only food",
            "Only water"
          ],
          correctAnswer: 1,
          explanation: "Preparation ensures safe birth and newborn care."
        },
        {
          id: 13,
          question: "What is first care for newborn?",
          options: [
            "Feed grain",
            "Clear nose/mouth, ensure colostrum",
            "Wean immediately",
            "Give vaccinations"
          ],
          correctAnswer: 1,
          explanation: "Immediate care focuses on breathing and colostrum intake."
        },
        {
          id: 14,
          question: "What is colostrum?",
          options: [
            "Regular milk",
            "First milk with antibodies",
            "Water substitute",
            "Medication"
          ],
          correctAnswer: 1,
          explanation: "Colostrum provides essential immunity to newborns."
        },
        {
          id: 15,
          question: "When should newborns stand?",
          options: [
            "Within 1-2 hours",
            "Next day",
            "Week later",
            "Never need to stand"
          ],
          correctAnswer: 0,
          explanation: "Healthy newborns typically stand within hours of birth."
        },
        {
          id: 16,
          question: "What is navel dipping for?",
          options: [
            "Decoration",
            "Prevent infection",
            "No purpose",
            "Identification"
          ],
          correctAnswer: 1,
          explanation: "Iodine dipping prevents bacterial infection through navel."
        },
        {
          id: 17,
          question: "What helps weak newborns?",
          options: [
            "Ignore them",
            "Supplemental heat and help nursing",
            "Separate from mother",
            "No help possible"
          ],
          correctAnswer: 1,
          explanation: "Weak newborns need assistance with warmth and feeding."
        },
        {
          id: 18,
          question: "What is gradual weaning?",
          options: [
            "Immediate separation",
            "Increasing separation periods",
            "Never separating",
            "Same as birth"
          ],
          correctAnswer: 1,
          explanation: "Gradual weaning reduces stress on mothers and young."
        },
        {
          id: 19,
          question: "When to wean beef calves?",
          options: [
            "At birth",
            "6-8 months",
            "2 years",
            "Never wean"
          ],
          correctAnswer: 1,
          explanation: "Beef calves typically wean at 6-8 months of age."
        },
        {
          id: 20,
          question: "What does successful breeding require?",
          options: [
            "Only luck",
            "Planning and observation",
            "No preparation",
            "Only equipment"
          ],
          correctAnswer: 1,
          explanation: "Careful management throughout the breeding process ensures success."
        }
      ]
    }
  ],
  
  finalExam: {
    title: "Livestock Management Certificate Final Exam",
    description: "Comprehensive assessment covering all 6 modules of livestock management fundamentals.",
    passingScore: 70,
    timeLimit: 60,
    
    questions: [
      {
        id: 1,
        question: "What is livestock management?",
        options: [
          "Only feeding animals",
          "Caring for farm animals to keep them healthy",
          "Just selling products",
          "Building fences"
        ],
        correctAnswer: 1,
        explanation: "Comprehensive care including all aspects of animal wellbeing."
      },
      {
        id: 2,
        question: "What are cattle raised for?",
        options: [
          "Only riding",
          "Milk or meat",
          "Only wool",
          "Eggs only"
        ],
        correctAnswer: 1,
        explanation: "Cattle provide dairy products or beef meat."
      },
      {
        id: 3,
        question: "What do sheep need protection from?",
        options: [
          "Only rain",
          "Predators",
          "Other sheep",
          "Their wool"
        ],
        correctAnswer: 1,
        explanation: "Sheep are vulnerable to predator attacks."
      },
      {
        id: 4,
        question: "What is most important nutrient?",
        options: [
          "Protein",
          "Water",
          "Vitamins",
          "Fiber"
        ],
        correctAnswer: 1,
        explanation: "Water is essential for all body functions."
      },
      {
        id: 5,
        question: "What does protein build?",
        options: [
          "Only bones",
          "Muscles and organs",
          "Only fat",
          "Water content"
        ],
        correctAnswer: 1,
        explanation: "Protein is essential for growth and repair."
      },
      {
        id: 6,
        question: "What indicates healthy eyes?",
        options: [
          "Cloudy",
          "Bright and clear",
          "Always closed",
          "Watering"
        ],
        correctAnswer: 1,
        explanation: "Clear eyes show good health and alertness."
      },
      {
        id: 7,
        question: "What is bloat?",
        options: [
          "Skin condition",
          "Swollen left side in ruminants",
          "Eye infection",
          "Hoof problem"
        ],
        correctAnswer: 1,
        explanation: "Bloat is dangerous gas accumulation."
      },
      {
        id: 8,
        question: "How long to quarantine new animals?",
        options: [
          "No quarantine",
          "2-4 weeks",
          "One day",
          "6 months"
        ],
        correctAnswer: 1,
        explanation: "Quarantine prevents disease spread."
      },
      {
        id: 9,
        question: "What type of animals are cattle?",
        options: [
          "Solitary",
          "Herd animals",
          "Nocturnal",
          "Aquatic"
        ],
        correctAnswer: 1,
        explanation: "Cattle naturally live in groups."
      },
      {
        id: 10,
        question: "What is flight zone?",
        options: [
          "Airport area",
          "Personal space around animal",
          "Running track",
          "Feeding area"
        ],
        correctAnswer: 1,
        explanation: "Space where animal moves away from pressure."
      },
      {
        id: 11,
        question: "What is estrus?",
        options: [
          "Pregnancy",
          "Time female is receptive to breeding",
          "Birth process",
          "Weaning"
        ],
        correctAnswer: 1,
        explanation: "Estrus is breeding receptivity period."
      },
      {
        id: 12,
        question: "What is gestation?",
        options: [
          "Breeding time",
          "Pregnancy period",
          "Weaning",
          "Growth"
        ],
        correctAnswer: 1,
        explanation: "Gestation is pregnancy duration."
      },
      {
        id: 13,
        question: "What should housing provide?",
        options: [
          "Only rain shelter",
          "Space to stand and lie down",
          "Darkness",
          "No movement"
        ],
        correctAnswer: 1,
        explanation: "Adequate space for basic movements."
      },
      {
        id: 14,
        question: "What are barns best for?",
        options: [
          "Only storage",
          "Cattle, horses, sheep",
          "Only poultry",
          "Wild animals"
        ],
        correctAnswer: 1,
        explanation: "Barns protect larger livestock."
      },
      {
        id: 15,
        question: "What is hay?",
        options: [
          "Fresh grass",
          "Dried grasses or legumes",
          "Only alfalfa",
          "Grain mix"
        ],
        correctAnswer: 1,
        explanation: "Hay is dried forage for feeding."
      },
      {
        id: 16,
        question: "What do dairy cows need?",
        options: [
          "Less feed",
          "High-energy feed",
          "Only water",
          "No special needs"
        ],
        correctAnswer: 1,
        explanation: "Milk production requires substantial energy."
      },
      {
        id: 17,
        question: "What does diarrhea cause risk of?",
        options: [
          "Weight gain",
          "Dehydration",
          "Strong bones",
          "Better appetite"
        ],
        correctAnswer: 1,
        explanation: "Fluid loss leads to dehydration."
      },
      {
        id: 18,
        question: "What are core vaccines?",
        options: [
          "Optional",
          "Recommended for all",
          "Only for sick",
          "Never needed"
        ],
        correctAnswer: 1,
        explanation: "Core vaccines protect against common serious diseases."
      },
      {
        id: 19,
        question: "What is strong in sheep?",
        options: [
          "Individualism",
          "Flock instinct",
          "Climbing",
          "Swimming"
        ],
        correctAnswer: 1,
        explanation: "Sheep strongly prefer staying together."
      },
      {
        id: 20,
        question: "How should handlers stay?",
        options: [
          "Nervous",
          "Calm and patient",
          "Loud",
          "Invisible"
        ],
        correctAnswer: 1,
        explanation: "Calm handling reduces stress."
      },
      {
        id: 21,
        question: "What is cattle gestation?",
        options: [
          "5 months",
          "9 months",
          "12 months",
          "3 months"
        ],
        correctAnswer: 1,
        explanation: "Cattle pregnancy lasts 9 months."
      },
      {
        id: 22,
        question: "What is natural breeding advantage?",
        options: [
          "More control",
          "Natural, less equipment",
          "Disease prevention",
          "Superior genetics"
        ],
        correctAnswer: 1,
        explanation: "Requires less management and equipment."
      },
      {
        id: 23,
        question: "What is colostrum?",
        options: [
          "Regular milk",
          "First milk with antibodies",
          "Water substitute",
          "Medication"
        ],
        correctAnswer: 1,
        explanation: "Provides essential immunity to newborns."
      },
      {
        id: 24,
        question: "What energy sources?",
        options: [
          "Only protein",
          "Carbohydrates and fats",
          "Only vitamins",
          "Minerals"
        ],
        correctAnswer: 1,
        explanation: "Energy comes from carbs and fats."
      },
      {
        id: 25,
        question: "What animals need fiber?",
        options: [
          "All equally",
          "Ruminants like cattle",
          "Only pigs",
          "No animals"
        ],
        correctAnswer: 1,
        explanation: "Ruminants need fiber for digestion."
      },
      {
        id: 26,
        question: "What mineral careful for sheep?",
        options: [
          "Calcium",
          "Copper",
          "Any mineral",
          "No minerals"
        ],
        correctAnswer: 1,
        explanation: "Sheep are sensitive to copper levels."
      },
      {
        id: 27,
        question: "What can't pigs digest well?",
        options: [
          "Any food",
          "Large fiber amounts",
          "Grains",
          "Protein"
        ],
        correctAnswer: 1,
        explanation: "Pigs have simple stomachs."
      },
      {
        id: 28,
        question: "What do layers need for eggs?",
        options: [
          "Extra protein",
          "Calcium",
          "Only water",
          "Vitamins"
        ],
        correctAnswer: 1,
        explanation: "Calcium is essential for eggshells."
      },
      {
        id: 29,
        question: "What indicates respiratory problem?",
        options: [
          "Normal breathing",
          "Coughing or discharge",
          "Good appetite",
          "Normal activity"
        ],
        correctAnswer: 1,
        explanation: "Coughing suggests respiratory issues."
      },
      {
        id: 30,
        question: "What is lameness?",
        options: [
          "Normal walking",
          "Limping or favoring leg",
          "Running fast",
          "Lying down"
        ],
        correctAnswer: 1,
        explanation: "Lameness indicates leg/foot problems."
      },
      {
        id: 31,
        question: "What is mastitis?",
        options: [
          "Foot problem",
          "Udder inflammation",
          "Eye infection",
          "Skin rash"
        ],
        correctAnswer: 1,
        explanation: "Mastitis is udder infection."
      },
      {
        id: 32,
        question: "What is biosecurity?",
        options: [
          "Only cleaning",
          "Disease prevention",
          "Animal breeding",
          "Feeding schedule"
        ],
        correctAnswer: 1,
        explanation: "All practices preventing disease."
      },
      {
        id: 33,
        question: "What to record for health?",
        options: [
          "Only names",
          "Treatments and vaccinations",
          "Favorite foods",
          "Color preferences"
        ],
        correctAnswer: 1,
        explanation: "Complete records track health history."
      },
      {
        id: 34,
        question: "When call vet emergency?",
        options: [
          "Routine care",
          "Difficulty breathing",
          "Any small issue",
          "Never call"
        ],
        correctAnswer: 1,
        explanation: "Some situations need immediate help."
      },
      {
        id: 35,
        question: "What are goats known for?",
        options: [
          "Fear of heights",
          "Curiosity and intelligence",
          "Avoiding exploration",
          "Quiet nature"
        ],
        correctAnswer: 1,
        explanation: "Goats are naturally curious."
      },
      {
        id: 36,
        question: "What is pig rooting?",
        options: [
          "Sleeping",
          "Using snout to dig",
          "Climbing trees",
          "Swimming"
        ],
        correctAnswer: 1,
        explanation: "Pigs naturally root with snouts."
      },
      {
        id: 37,
        question: "What is pecking order?",
        options: [
          "Eating schedule",
          "Social hierarchy",
          "Sleeping arrangement",
          "Egg laying"
        ],
        correctAnswer: 1,
        explanation: "Social ranking in poultry groups."
      },
      {
        id: 38,
        question: "How many cattle to move?",
        options: [
          "Always one",
          "Small groups (3-6)",
          "Whole herd",
          "No specific"
        ],
        correctAnswer: 1,
        explanation: "Small groups are easier to handle."
      },
      {
        id: 39,
        question: "What benefits low-stress handling?",
        options: [
          "More work",
          "Better meat quality",
          "No benefits",
          "Slower work"
        ],
        correctAnswer: 1,
        explanation: "Reduces stress hormones in meat."
      },
      {
        id: 40,
        question: "What does successful breeding require?",
        options: [
          "Only luck",
          "Planning and observation",
          "No preparation",
          "Only equipment"
        ],
        correctAnswer: 1,
        explanation: "Careful management ensures success."
      }
    ]
  }
};

export default livestockManagementCertificate;
