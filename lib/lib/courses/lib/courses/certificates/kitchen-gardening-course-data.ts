// Kitchen Gardening (Certificate) - Complete Course Data
// File: kitchen-gardening-certificate.ts

export const kitchenGardeningCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "kitchen-gardening-certificate",
  title: "Kitchen Gardening (Certificate)",
  description: "Learn how to grow fresh vegetables, herbs, and fruits right in your own kitchen or small balcony space. Perfect for beginners with no gardening experience.",
  duration: "6 weeks",
  timeCommitment: "3-4 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌱",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE - 6 Modules
  modules: [
    {
      id: 1,
      title: "Getting Started with Kitchen Gardening",
      completed: false,
      content: `# Module 1: Getting Started with Kitchen Gardening

Welcome to your kitchen gardening journey! This module will help you understand what kitchen gardening is and how to begin your own garden in any small space.

## **What is Kitchen Gardening?**
Kitchen gardening is the practice of growing edible plants in small spaces near your kitchen. It focuses on fresh herbs, vegetables, and small fruits that you can use daily in cooking.

**Key Benefits:**
- Fresh ingredients right at your fingertips
- No chemicals or pesticides
- Saves money on grocery bills
- Therapeutic and stress-relieving activity

## **Three Essential Requirements**
Every kitchen garden needs these three basics:

1. **Sunlight**
   - Plants need at least 4-6 hours of direct sunlight daily
   - South-facing windows are ideal
   - Use reflective surfaces to increase light
   - Rotate plants weekly for even growth

2. **Containers**
   - Any container with drainage holes works
   - Common options: pots, boxes, buckets, or recycled containers
   - Size depends on plant type
   - Material can be clay, plastic, or wood

3. **Growing Medium**
   - Never use garden soil indoors
   - Use potting mix or soilless mixtures
   - These provide good drainage and aeration
   - They're sterilized to prevent diseases

## **Planning Your First Garden**
Start simple with these steps:

**Choose Your Location:**
- Kitchen windowsills get morning sun
- Balconies offer more space
- Countertops under grow lights work well
- Consider convenience for daily care

**Select Easy Starter Plants:**
- Herbs: Basil, Mint, Cilantro
- Leafy greens: Lettuce, Spinach
- Cherry tomatoes
- Green onions from scraps

**Gather Basic Tools:**
- Small trowel or spoon
- Watering can with narrow spout
- Pruning scissors
- Spray bottle for misting

**Set Realistic Expectations:**
- Start with 3-5 plants
- Learn one plant at a time
- Expect some trial and error
- Celebrate small successes

Remember: Every expert gardener started as a beginner. Your first garden doesn't need to be perfect—it just needs to get started!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the minimum hours of direct sunlight most kitchen garden plants need daily?",
          options: ["1-2 hours", "4-6 hours", "8-10 hours", "12 hours continuous"],
          correctAnswer: 1,
          explanation: "Most kitchen garden plants need 4-6 hours of direct sunlight daily to grow properly. South-facing windows typically provide this amount."
        },
        {
          id: 2,
          question: "Which type of soil should you NEVER use for indoor kitchen gardening?",
          options: ["Potting mix", "Soilless mixture", "Garden soil", "Coconut coir"],
          correctAnswer: 2,
          explanation: "Never use garden soil indoors because it may contain pests, diseases, and doesn't drain well in containers."
        },
        {
          id: 3,
          question: "What is the main benefit of having a kitchen garden?",
          options: ["It decorates the kitchen", "Provides fresh ingredients at home", "It's expensive to maintain", "Requires large outdoor space"],
          correctAnswer: 1,
          explanation: "The main benefit is having fresh, chemical-free ingredients right at your fingertips for daily cooking."
        },
        {
          id: 4,
          question: "Which direction-facing window is ideal for kitchen gardening?",
          options: ["North-facing", "East-facing", "South-facing", "West-facing"],
          correctAnswer: 2,
          explanation: "South-facing windows receive the most consistent sunlight throughout the day, making them ideal for plants."
        },
        {
          id: 5,
          question: "What should every container have for proper plant growth?",
          options: ["Decoration", "Drainage holes", "Bright colors", "Matching saucers"],
          correctAnswer: 1,
          explanation: "Drainage holes prevent water from pooling at the bottom, which can cause root rot and kill plants."
        },
        {
          id: 6,
          question: "Which herb is mentioned as an easy starter plant?",
          options: ["Rosemary", "Basil", "Thyme", "Oregano"],
          correctAnswer: 1,
          explanation: "Basil is specifically mentioned as an easy starter herb for beginners in kitchen gardening."
        },
        {
          id: 7,
          question: "What is a good number of plants to start with for beginners?",
          options: ["10-15 plants", "3-5 plants", "20-25 plants", "Just one plant"],
          correctAnswer: 1,
          explanation: "Starting with 3-5 plants allows beginners to learn without becoming overwhelmed by too many care requirements."
        },
        {
          id: 8,
          question: "Which tool is specifically mentioned for precise watering?",
          options: ["Hose pipe", "Watering can with narrow spout", "Bucket", "Spray bottle only"],
          correctAnswer: 1,
          explanation: "A watering can with a narrow spout helps control water flow and directs water to the soil, not the leaves."
        },
        {
          id: 9,
          question: "What can you use to increase light for plants in low-light areas?",
          options: ["Reflective surfaces", "Dark curtains", "More water", "Larger pots"],
          correctAnswer: 0,
          explanation: "Reflective surfaces like aluminum foil or mirrors can help bounce light onto plants in areas with limited sunlight."
        },
        {
          id: 10,
          question: "Which leafy green is suggested as a beginner-friendly plant?",
          options: ["Kale", "Spinach", "Arugula", "Swiss chard"],
          correctAnswer: 1,
          explanation: "Spinach is mentioned as an easy leafy green to start with in kitchen gardening."
        },
        {
          id: 11,
          question: "What is the therapeutic benefit of kitchen gardening mentioned?",
          options: ["It's expensive", "It's time-consuming", "Stress-relieving activity", "Requires special skills"],
          correctAnswer: 2,
          explanation: "Kitchen gardening is described as a therapeutic and stress-relieving activity."
        },
        {
          id: 12,
          question: "How often should you rotate plants for even growth?",
          options: ["Daily", "Weekly", "Monthly", "Never"],
          correctAnswer: 1,
          explanation: "Rotating plants weekly ensures all sides receive equal sunlight, preventing lopsided growth."
        },
        {
          id: 13,
          question: "What can you use green onion scraps for?",
          options: ["Compost only", "Growing new green onions", "Pest control", "Decorations"],
          correctAnswer: 1,
          explanation: "Green onions can be regrown from their roots, making them perfect for kitchen gardening."
        },
        {
          id: 14,
          question: "What type of tomatoes are recommended for beginners?",
          options: ["Beefsteak tomatoes", "Cherry tomatoes", "Roma tomatoes", "Heirloom tomatoes"],
          correctAnswer: 1,
          explanation: "Cherry tomatoes are smaller, grow faster, and are more forgiving for beginners than larger varieties."
        },
        {
          id: 15,
          question: "What is the purpose of a spray bottle in kitchen gardening?",
          options: ["Watering large plants", "Misting plants", "Cleaning containers", "Pest spraying only"],
          correctAnswer: 1,
          explanation: "A spray bottle is useful for misting plants that prefer higher humidity or for delicate seedlings."
        },
        {
          id: 16,
          question: "Which material is NOT mentioned as suitable for containers?",
          options: ["Clay", "Plastic", "Wood", "Glass"],
          correctAnswer: 3,
          explanation: "Glass containers are not mentioned because they typically don't have drainage holes and can overheat roots."
        },
        {
          id: 17,
          question: "What should beginners expect from their first garden?",
          options: ["Perfection immediately", "Some trial and error", "No challenges", "Professional results"],
          correctAnswer: 1,
          explanation: "Beginners should expect some trial and error as they learn what works best in their specific environment."
        },
        {
          id: 18,
          question: "What is a key factor when choosing a garden location?",
          options: ["Proximity to neighbors", "Convenience for daily care", "Floor color", "Wall decoration"],
          correctAnswer: 1,
          explanation: "Convenience for daily care ensures you'll remember to water and check on your plants regularly."
        },
        {
          id: 19,
          question: "What type of cilantro is mentioned as a starter herb?",
          options: ["Regular Cilantro", "Vietnamese Cilantro", "No cilantro mentioned", "All types"],
          correctAnswer: 0,
          explanation: "Regular cilantro (also called coriander) is mentioned as an easy starter herb."
        },
        {
          id: 20,
          question: "What is the most important mindset for beginners?",
          options: ["Achieving perfection", "Celebrating small successes", "Comparing with others", "Following strict rules"],
          correctAnswer: 1,
          explanation: "Celebrating small successes keeps beginners motivated and makes the learning process enjoyable."
        }
      ]
    },
    {
      id: 2,
      title: "Choosing the Right Plants",
      completed: false,
      content: `# Module 2: Choosing the Right Plants

Selecting the right plants is crucial for kitchen gardening success. This module helps you choose plants that will thrive in your specific conditions.

## **Understanding Plant Categories**
Kitchen garden plants fall into three main categories:

1. **Herbs** - Fast-growing and forgiving
   - Grow from seeds or cuttings
   - Need regular harvesting
   - Most prefer moderate water
   - Examples: Basil, Mint, Parsley

2. **Leafy Greens** - Quick harvest cycles
   - Can be harvested multiple times
   - Prefer cooler temperatures
   - Need consistent moisture
   - Examples: Lettuce, Spinach, Kale

3. **Fruiting Plants** - Require more care
   - Need pollination (sometimes manual)
   - Require more sunlight
   - Take longer to produce
   - Examples: Tomatoes, Peppers, Strawberries

## **Factors for Plant Selection**
Consider these four factors when choosing plants:

**Light Availability:**
- Full sun plants: 6+ hours direct light
- Partial sun plants: 4-6 hours light
- Low light plants: 2-4 hours light
- Supplement with grow lights if needed

**Space Requirements:**
- Compact plants for small spaces
- Vertical growing options
- Root depth considerations
- Spacing between plants

**Time to Harvest:**
- Quick crops: 30-45 days
- Medium crops: 60-90 days
- Long crops: 90+ days
- Succession planting for continuous harvest

**Skill Level:**
- Beginner: Forgiving plants
- Intermediate: Some special needs
- Advanced: Specific requirements
- Start with beginner plants

## **Top 10 Beginner-Friendly Plants**
Here are the easiest plants to start with:

1. **Basil** - Grows quickly, many varieties
2. **Mint** - Very hardy, spreads easily
3. **Green Onions** - Regrow from kitchen scraps
4. **Lettuce** - Fast-growing, cut-and-come-again
5. **Cherry Tomatoes** - Small, productive, sweet
6. **Spinach** - Cool-weather tolerant
7. **Radishes** - Very fast harvest (30 days)
8. **Chives** - Perennial, flowers edible too
9. **Microgreens** - Harvest in 7-14 days
10. **Beans** - Bush varieties for containers

## **Plant Selection Checklist**
Use this checklist when choosing plants:

☐ **Light match** - Plant needs match your light
☐ **Space appropriate** - Fits your container size
☐ **Harvest time** - Matches your patience level
☐ **Water needs** - Match your schedule
☐ **Purpose** - You'll actually use it in cooking
☐ **Season** - Right plant for current season
☐ **Companions** - Plants that grow well together
☐ **Avoid** - Plants known to be difficult indoors

**Pro Tip:** Start with plants you regularly buy at the grocery store. This ensures you'll use your harvest and appreciate the savings!`,
      
      quiz: [
        {
          id: 1,
          question: "Which plant category includes basil, mint, and parsley?",
          options: ["Leafy Greens", "Fruiting Plants", "Root Vegetables", "Herbs"],
          correctAnswer: 3,
          explanation: "Basil, mint, and parsley are all herbs - fast-growing plants used primarily for flavoring food."
        },
        {
          id: 2,
          question: "How many hours of direct light do 'full sun' plants need?",
          options: ["2-4 hours", "4-6 hours", "6+ hours", "Only morning light"],
          correctAnswer: 2,
          explanation: "Full sun plants require 6 or more hours of direct sunlight daily to thrive and produce well."
        },
        {
          id: 3,
          question: "Which plant can be regrown from kitchen scraps?",
          options: ["Tomatoes", "Green onions", "Spinach", "Basil"],
          correctAnswer: 1,
          explanation: "Green onions can be regrown from the white root ends that are typically discarded."
        },
        {
          id: 4,
          question: "What is 'cut-and-come-again' harvesting?",
          options: ["Harvesting entire plant", "Taking only leaves", "Harvesting once", "Uprooting plant"],
          correctAnswer: 1,
          explanation: "Cut-and-come-again means harvesting leaves while leaving the plant to regrow, common with lettuce."
        },
        {
          id: 5,
          question: "Which plant is mentioned as having a 30-day harvest time?",
          options: ["Tomatoes", "Radishes", "Basil", "Spinach"],
          correctAnswer: 1,
          explanation: "Radishes are very fast-growing and can be harvested in as little as 30 days from planting."
        },
        {
          id: 6,
          question: "What type of beans are recommended for containers?",
          options: ["Pole beans", "Bush varieties", "Runner beans", "All beans"],
          correctAnswer: 1,
          explanation: "Bush varieties of beans are more compact and better suited for container gardening than pole beans."
        },
        {
          id: 7,
          question: "What do fruiting plants often require that herbs don't?",
          options: ["More water", "Pollination", "Less light", "Smaller pots"],
          correctAnswer: 1,
          explanation: "Fruiting plants like tomatoes often require pollination to produce fruit, which may need to be done manually indoors."
        },
        {
          id: 8,
          question: "How long do microgreens typically take to harvest?",
          options: ["30-45 days", "60-90 days", "7-14 days", "120 days"],
          correctAnswer: 2,
          explanation: "Microgreens are harvested at the seedling stage, typically 7-14 days after planting."
        },
        {
          id: 9,
          question: "Which factor is NOT mentioned in the plant selection checklist?",
          options: ["Light match", "Space appropriate", "Flower color", "Water needs"],
          correctAnswer: 2,
          explanation: "Flower color is not mentioned as a practical consideration in the plant selection checklist."
        },
        {
          id: 10,
          question: "What type of tomatoes are recommended for beginners?",
          options: ["Beefsteak", "Cherry tomatoes", "Heirloom", "Roma"],
          correctAnswer: 1,
          explanation: "Cherry tomatoes are smaller, more productive in containers, and generally easier for beginners."
        },
        {
          id: 11,
          question: "What does 'succession planting' mean?",
          options: ["Planting in rows", "Planting at intervals", "Planting once", "Planting in succession"],
          correctAnswer: 1,
          explanation: "Succession planting means planting new seeds at intervals to ensure continuous harvest throughout the season."
        },
        {
          id: 12,
          question: "Which plant is described as 'very hardy' and spreads easily?",
          options: ["Basil", "Mint", "Parsley", "Cilantro"],
          correctAnswer: 1,
          explanation: "Mint is very hardy and spreads rapidly, making it almost impossible to kill but needing containment."
        },
        {
          id: 13,
          question: "What are chives classified as in the module?",
          options: ["Annual", "Biennial", "Perennial", "Seasonal"],
          correctAnswer: 2,
          explanation: "Chives are described as perennial plants, meaning they live for several years with proper care."
        },
        {
          id: 14,
          question: "Which leafy green is mentioned as cool-weather tolerant?",
          options: ["Lettuce", "Spinach", "Kale", "All of these"],
          correctAnswer: 1,
          explanation: "Spinach is specifically mentioned as cool-weather tolerant, making it good for certain conditions."
        },
        {
          id: 15,
          question: "What is the pro tip about selecting plants?",
          options: ["Choose exotic plants", "Start with grocery store favorites", "Only grow flowers", "Avoid common herbs"],
          correctAnswer: 1,
          explanation: "The pro tip suggests starting with plants you regularly buy at the grocery store to ensure you'll use them."
        },
        {
          id: 16,
          question: "How many main plant categories are described?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Three main categories are described: Herbs, Leafy Greens, and Fruiting Plants."
        },
        {
          id: 17,
          question: "What does 'partial sun' mean for plants?",
          options: ["Morning sun only", "4-6 hours of light", "Indirect light only", "Sun through window"],
          correctAnswer: 1,
          explanation: "Partial sun plants need 4-6 hours of direct sunlight, which is typical for many kitchen garden plants."
        },
        {
          id: 18,
          question: "Which plant has edible flowers mentioned?",
          options: ["Tomatoes", "Chives", "Basil", "Spinach"],
          correctAnswer: 1,
          explanation: "Chives are mentioned as having edible flowers in addition to their leaves."
        },
        {
          id: 19,
          question: "What should you consider about plant spacing?",
          options: ["Color coordination", "Space between plants", "Pot decoration", "Watering schedule"],
          correctAnswer: 1,
          explanation: "Proper spacing between plants ensures adequate air circulation and prevents competition for nutrients."
        },
        {
          id: 20,
          question: "What type of plants are 'forgiving' for beginners?",
          options: ["All plants", "Only fruiting plants", "Beginner-level plants", "Advanced plants"],
          correctAnswer: 2,
          explanation: "Beginner-level plants are described as 'forgiving' meaning they tolerate some mistakes in care."
        }
      ]
    },
    {
      id: 3,
      title: "Soil and Planting Techniques",
      completed: false,
      content: `# Module 3: Soil and Planting Techniques

The right soil and planting methods make all the difference in kitchen gardening. This module covers everything you need to know about preparing for planting.

## **Understanding Growing Mediums**
Never use regular garden soil in containers. Here's why and what to use instead:

**Problems with Garden Soil:**
- Too dense for containers
- May contain pests and diseases
- Drains poorly in pots
- Compacts over time

**Best Growing Mediums:**
1. **Potting Mix** - Specifically for containers
   - Light and fluffy texture
   - Good water retention
   - Contains perlite or vermiculite
   - Pre-mixed and ready to use

2. **Soilless Mix** - Alternative to soil
   - Coconut coir or peat moss base
   - Excellent drainage
   - Sterile (no diseases)
   - Needs regular fertilizing

3. **Specialty Mixes** - For specific plants
   - Cactus mix for herbs
   - Seed starting mix
   - Vegetable garden mix
   - Organic options available

## **Container Preparation Steps**
Follow these steps for perfect planting conditions:

**Step 1: Choose Right-Sized Container**
- Small herbs: 6-8 inch pots
- Leafy greens: 8-12 inch pots
- Tomatoes: 12-18 inch pots
- Always ensure drainage holes

**Step 2: Create Drainage Layer**
- Add stones or broken pottery
- 1-2 inch layer at bottom
- Prevents soil from washing out
- Improves air circulation

**Step 3: Fill with Growing Medium**
- Leave 1-2 inches from top
- Gently firm, don't compact
- Water before planting
- Let excess water drain

**Step 4: Planting Techniques**
Different plants need different methods:

**Seeds:**
- Plant at correct depth (check packet)
- Space according to instructions
- Keep moist until germination
- Thin seedlings as needed

**Seedlings/Transplants:**
- Handle by leaves, not stems
- Plant at same depth as before
- Water immediately after planting
- Provide shade for 2-3 days

**Cuttings/Scraps:**
- Herbs from grocery store stems
- Green onion roots
- Lettuce bottoms
- Change water regularly

## **Watering Fundamentals**
Proper watering is crucial for success:

**When to Water:**
- Check soil daily
- Finger test: Dry 1 inch down = water
- Lift pot: Light = needs water
- Wilting = urgent need

**How to Water:**
- Water thoroughly until drainage
- Never let pots sit in water
- Water in morning
- Avoid wetting leaves

**Signs of Problems:**
- Yellow leaves = overwatering
- Dry, crispy leaves = underwatering
- Mold on soil = too wet
- Drooping = check immediately

## **Fertilizer Basics**
Container plants need regular feeding:

**Types of Fertilizers:**
1. **Liquid fertilizer** - Easy to use
2. **Granular fertilizer** - Slow release
3. **Organic options** - Worm castings, compost tea
4. **Specialty fertilizers** - Tomato food, etc.

**Application Rules:**
- Start 2-3 weeks after planting
- Follow package instructions
- Less is better than more
- Stop before harvesting

**Natural Alternatives:**
- Compost tea
- Banana peel water
- Eggshell powder
- Coffee grounds

Remember: Healthy soil means healthy plants. Take time to prepare properly!`,
      
      quiz: [
        {
          id: 1,
          question: "Why should you never use garden soil in containers?",
          options: ["It's too expensive", "Too dense and may contain pests", "It's too colorful", "Plants prefer it"],
          correctAnswer: 1,
          explanation: "Garden soil is too dense for containers, doesn't drain well, and may contain pests or diseases."
        },
        {
          id: 2,
          question: "What is a key ingredient in potting mix for drainage?",
          options: ["Sand", "Perlite or vermiculite", "Clay", "Rocks"],
          correctAnswer: 1,
          explanation: "Perlite or vermiculite are added to potting mix to create air pockets and improve drainage."
        },
        {
          id: 3,
          question: "How much space should you leave at the top of a container when filling with soil?",
          options: ["Fill to the brim", "1-2 inches", "4-5 inches", "Half empty"],
          correctAnswer: 1,
          explanation: "Leave 1-2 inches from the top to allow space for watering without overflow."
        },
        {
          id: 4,
          question: "What is the 'finger test' for watering?",
          options: ["Taste the soil", "Check if dry 1 inch down", "Feel leaf texture", "Check pot weight"],
          correctAnswer: 1,
          explanation: "Insert finger 1 inch into soil; if dry, it's time to water. If moist, wait."
        },
        {
          id: 5,
          question: "When is the best time of day to water plants?",
          options: ["Evening", "Morning", "Midnight", "Afternoon"],
          correctAnswer: 1,
          explanation: "Morning watering allows leaves to dry during day, reducing disease risk."
        },
        {
          id: 6,
          question: "What does yellow leaves typically indicate?",
          options: ["Underwatering", "Overwatering", "Perfect health", "Too much sun"],
          correctAnswer: 1,
          explanation: "Yellow leaves often indicate overwatering, which causes root rot and nutrient issues."
        },
        {
          id: 7,
          question: "How do you handle seedlings when transplanting?",
          options: ["By the stems", "By the leaves", "By the roots", "With tweezers"],
          correctAnswer: 1,
          explanation: "Handle seedlings by their leaves to avoid damaging the delicate stems."
        },
        {
          id: 8,
          question: "What is the purpose of a drainage layer in containers?",
          options: ["Decoration", "Prevents soil washing out", "Adds weight", "Improves color"],
          correctAnswer: 1,
          explanation: "A drainage layer of stones or broken pottery prevents soil from washing out while allowing water to drain."
        },
        {
          id: 9,
          question: "When should you start fertilizing after planting?",
          options: ["Immediately", "2-3 weeks after", "After first harvest", "Never"],
          correctAnswer: 1,
          explanation: "Wait 2-3 weeks after planting to allow plants to establish before fertilizing."
        },
        {
          id: 10,
          question: "What natural fertilizer is made from banana peels?",
          options: ["Banana peel water", "Banana soil", "Peel powder", "Fruit tea"],
          correctAnswer: 0,
          explanation: "Banana peel water is made by soaking peels in water, providing potassium to plants."
        },
        {
          id: 11,
          question: "What size pot is recommended for small herbs?",
          options: ["2-4 inch pots", "6-8 inch pots", "12-14 inch pots", "18+ inch pots"],
          correctAnswer: 1,
          explanation: "Small herbs typically do well in 6-8 inch pots, providing enough room for root growth."
        },
        {
          id: 12,
          question: "What should you do if pots sit in water after watering?",
          options: ["Leave it", "Empty the saucer", "Add more water", "Move to sun"],
          correctAnswer: 1,
          explanation: "Always empty saucers after watering to prevent root rot from waterlogged soil."
        },
        {
          id: 13,
          question: "What is coconut coir used for?",
          options: ["Decorative mulch", "Soilless mix base", "Pest control", "Container material"],
          correctAnswer: 1,
          explanation: "Coconut coir is a sustainable alternative to peat moss in soilless growing mixes."
        },
        {
          id: 14,
          question: "How can you tell if a plant needs water by lifting the pot?",
          options: ["If it's heavy", "If it's light", "If it's warm", "If it's cold"],
          correctAnswer: 1,
          explanation: "A light pot indicates dry soil, while a heavy pot suggests there's still moisture."
        },
        {
          id: 15,
          question: "What does wilting indicate in plants?",
          options: ["Too much fertilizer", "Urgent need for water", "Perfect health", "Too much sun"],
          correctAnswer: 1,
          explanation: "Wilting is a sign of water stress and indicates an urgent need for watering."
        },
        {
          id: 16,
          question: "What is compost tea?",
          options: ["Tea for gardeners", "Liquid fertilizer from compost", "Herbal tea", "Pest spray"],
          correctAnswer: 1,
          explanation: "Compost tea is made by steeping compost in water, creating a nutrient-rich liquid fertilizer."
        },
        {
          id: 17,
          question: "Why should you avoid wetting leaves when watering?",
          options: ["Wastes water", "Can cause disease", "Stains leaves", "Attracts insects"],
          correctAnswer: 1,
          explanation: "Wet leaves, especially overnight, can lead to fungal diseases like powdery mildew."
        },
        {
          id: 18,
          question: "What is seed starting mix specially designed for?",
          options: ["Large plants", "Seed germination", "Flowering plants", "Herbs only"],
          correctAnswer: 1,
          explanation: "Seed starting mix is fine-textured and sterile, ideal for germinating seeds."
        },
        {
          id: 19,
          question: "How do you know when to thin seedlings?",
          options: ["When they flower", "When crowded", "After harvesting", "Never thin them"],
          correctAnswer: 1,
          explanation: "Thin seedlings when they become crowded to prevent competition for light and nutrients."
        },
        {
          id: 20,
          question: "What is a benefit of granular fertilizer?",
          options: ["Immediate effect", "Slow release", "No watering needed", "Colorful"],
          correctAnswer: 1,
          explanation: "Granular fertilizers release nutrients slowly over time, providing steady feeding."
        }
      ]
    },
    {
      id: 4,
      title: "Daily Care and Maintenance",
      completed: false,
      content: `# Module 4: Daily Care and Maintenance

Consistent daily care keeps your kitchen garden healthy and productive. This module covers the routines and observations that lead to gardening success.

## **Daily Check Routine**
Establish this simple 5-minute daily routine:

**Morning Check (2 minutes):**
1. **Visual Inspection**
   - Look for new growth
   - Check for pests
   - Note any changes
   - Enjoy your plants!

2. **Soil Moisture Check**
   - Finger test each pot
   - Note which need water
   - Check saucers for water
   - Adjust as needed

3. **Light Assessment**
   - Observe sunlight patterns
   - Rotate pots if needed
   - Check for shadows
   - Consider supplemental light

**Weekly Tasks (15-20 minutes):**
- **Monday:** Deep watering check
- **Wednesday:** Fertilizer application
- **Friday:** Pest inspection
- **Sunday:** Plant rotation

## **Pest Management**
Indoor gardens can still get pests. Here's how to manage them:

**Common Indoor Pests:**
1. **Aphids** - Small green/black bugs
2. **Fungus Gnats** - Tiny flying insects
3. **Spider Mites** - Almost invisible webs
4. **Whiteflies** - White flying insects

**Natural Prevention Methods:**
- **Good air circulation** - Use small fan
- **Clean leaves** - Wipe with damp cloth
- **Healthy plants** - Strong plants resist pests
- **Regular inspection** - Catch problems early

**Organic Control Methods:**
- **Neem oil spray** - Weekly application
- **Insecticidal soap** - For active infestations
- **Diatomaceous earth** - For soil pests
- **Yellow sticky traps** - For flying insects

**When to Act:**
- First sign of pests = immediate action
- Isolate affected plants
- Treat all plants preventatively
- Repeat treatments as needed

## **Pruning and Harvesting**
Proper cutting techniques encourage growth:

**Herb Pruning Rules:**
- Always cut above leaf nodes
- Never remove more than 1/3
- Regular pruning = bushier plants
- Pinch flower buds on basil

**Leafy Greens Harvesting:**
- Outer leaves first
- Cut-and-come-again method
- Leave center to grow
- Harvest in morning

**Fruiting Plants:**
- Support with stakes
- Remove yellow leaves
- Pinch suckers on tomatoes
- Harvest when fully colored

**General Pruning Tips:**
- Use clean, sharp scissors
- Make clean cuts
- Don't tear plants
- Dispose of diseased material

## **Troubleshooting Common Problems**
Quick reference guide for common issues:

**Problem: Yellow Leaves**
- **Cause:** Overwatering or nutrient deficiency
- **Solution:** Check watering, apply fertilizer
- **Prevention:** Proper drainage, regular feeding

**Problem: Leggy Growth**
- **Cause:** Insufficient light
- **Solution:** Move to brighter location
- **Prevention:** Rotate plants, use grow lights

**Problem: No Flowers/Fruit**
- **Cause:** Lack of pollination or too much nitrogen
- **Solution:** Hand pollinate, adjust fertilizer
- **Prevention:** Choose self-pollinating varieties

**Problem: Mold on Soil**
- **Cause:** Overwatering, poor air circulation
- **Solution:** Reduce watering, increase air flow
- **Prevention:** Water only when needed, use fan

**Problem: Slow Growth**
- **Cause:** Low temperatures or poor soil
- **Solution:** Move to warmer spot, fertilize
- **Prevention:** Maintain 65-75°F, use quality soil

## **Seasonal Adjustments**
Adjust care with changing seasons:

**Winter Care:**
- Reduce watering frequency
- Move from cold windows at night
- Supplement with grow lights
- Expect slower growth

**Summer Care:**
- Water more frequently
- Protect from extreme heat
- Watch for pests
- Consider afternoon shade

**Spring/Fall:**
- Ideal growing conditions
- Start new plants
- Take cuttings
- Refresh soil if needed

Consistency is key! A little daily attention prevents big problems later.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the first step in the morning check routine?",
          options: ["Water all plants", "Visual inspection", "Apply fertilizer", "Rotate pots"],
          correctAnswer: 1,
          explanation: "Visual inspection comes first to observe new growth, pests, and overall plant health."
        },
        {
          id: 2,
          question: "What day is recommended for pest inspection in the weekly routine?",
          options: ["Monday", "Wednesday", "Friday", "Sunday"],
          correctAnswer: 2,
          explanation: "Friday is designated for thorough pest inspection in the suggested weekly routine."
        },
        {
          id: 3,
          question: "What are aphids?",
          options: ["Fungi", "Small green/black bugs", "Soil amendments", "Plant diseases"],
          correctAnswer: 1,
          explanation: "Aphids are small sap-sucking insects that can be green, black, or other colors."
        },
        {
          id: 4,
          question: "What natural method prevents pests by improving air movement?",
          options: ["Using a small fan", "Closing windows", "Watering more", "Adding sand"],
          correctAnswer: 0,
          explanation: "A small fan improves air circulation, making conditions less favorable for many pests."
        },
        {
          id: 5,
          question: "How much of a plant should you never remove when pruning?",
          options: ["More than 1/3", "More than 1/2", "More than 2/3", "Any amount is fine"],
          correctAnswer: 0,
          explanation: "Never remove more than 1/3 of a plant at once to avoid stressing it."
        },
        {
          id: 6,
          question: "What should you do with flower buds on basil plants?",
          options: ["Leave them", "Pinch them off", "Water them more", "Fertilize them"],
          correctAnswer: 1,
          explanation: "Pinching off flower buds on basil encourages more leaf growth and better flavor."
        },
        {
          id: 7,
          question: "When is the best time to harvest leafy greens?",
          options: ["Afternoon", "Evening", "Morning", "Midnight"],
          correctAnswer: 2,
          explanation: "Morning harvest ensures leaves are crisp and full of moisture before heat of day."
        },
        {
          id: 8,
          question: "What causes leggy growth in plants?",
          options: ["Too much water", "Insufficient light", "Too much fertilizer", "Cold temperatures"],
          correctAnswer: 1,
          explanation: "Leggy growth with long stems between leaves indicates insufficient light."
        },
        {
          id: 9,
          question: "What temperature range is ideal for most kitchen garden plants?",
          options: ["55-60°F", "65-75°F", "80-85°F", "90-95°F"],
          correctAnswer: 1,
          explanation: "65-75°F is the ideal temperature range for most indoor edible plants."
        },
        {
          id: 10,
          question: "What should you do at the first sign of pests?",
          options: ["Wait and see", "Take immediate action", "Water more", "Add fertilizer"],
          correctAnswer: 1,
          explanation: "Immediate action prevents small pest problems from becoming major infestations."
        },
        {
          id: 11,
          question: "What are yellow sticky traps used for?",
          options: ["Decorations", "Catching flying insects", "Soil improvement", "Water retention"],
          correctAnswer: 1,
          explanation: "Yellow sticky traps attract and catch flying insects like fungus gnats and whiteflies."
        },
        {
          id: 12,
          question: "What is the 'cut-and-come-again' method?",
          options: ["Harvesting entire plant", "Harvesting outer leaves only", "Uprooting plants", "Pruning roots"],
          correctAnswer: 1,
          explanation: "Cut-and-come-again means harvesting outer leaves while leaving center to continue growing."
        },
        {
          id: 13,
          question: "What causes mold on soil surface?",
          options: ["Underwatering", "Overwatering and poor air circulation", "Too much light", "Cold temperatures"],
          correctAnswer: 1,
          explanation: "Mold on soil is usually caused by overwatering and insufficient air circulation."
        },
        {
          id: 14,
          question: "What should you do with affected plants when pests are found?",
          options: ["Throw them away", "Isolate them", "Water them more", "Put in sunlight"],
          correctAnswer: 1,
          explanation: "Isolating affected plants prevents pests from spreading to other plants."
        },
        {
          id: 15,
          question: "What are 'suckers' on tomato plants?",
          options: ["Fruits", "Small shoots between stems", "Roots", "Flowers"],
          correctAnswer: 1,
          explanation: "Suckers are small shoots that grow between main stem and branches, often removed to focus energy."
        },
        {
          id: 16,
          question: "How often should neem oil be applied preventatively?",
          options: ["Daily", "Weekly", "Monthly", "Never"],
          correctAnswer: 1,
          explanation: "Weekly neem oil application helps prevent pest problems before they start."
        },
        {
          id: 17,
          question: "What should you do with diseased plant material?",
          options: ["Compost it", "Dispose of it", "Bury it", "Burn it"],
          correctAnswer: 1,
          explanation: "Diseased plant material should be disposed of, not composted, to prevent spreading disease."
        },
        {
          id: 18,
          question: "What adjustment is needed for winter care?",
          options: ["Water more", "Reduce watering frequency", "Increase fertilizer", "Move outdoors"],
          correctAnswer: 1,
          explanation: "Reduce watering frequency in winter as plants grow more slowly and need less water."
        },
        {
          id: 19,
          question: "What tool should be used for clean pruning cuts?",
          options: ["Fingers", "Dull scissors", "Clean, sharp scissors", "Knife"],
          correctAnswer: 2,
          explanation: "Clean, sharp scissors make clean cuts that heal quickly and reduce disease risk."
        },
        {
          id: 20,
          question: "What is diatomaceous earth used for?",
          options: ["Fertilizer", "Soil pests control", "Water retention", "Leaf polishing"],
          correctAnswer: 1,
          explanation: "Diatomaceous earth is a natural powder that controls soil-dwelling pests."
        }
      ]
    },
    {
      id: 5,
      title: "Growing from Kitchen Scraps",
      completed: false,
      content: `# Module 5: Growing from Kitchen Scraps

One of the most rewarding aspects of kitchen gardening is growing new plants from kitchen waste. This module teaches you how to regrow common vegetables and herbs.

## **The Magic of Regrowth**
Many vegetables can regrow from parts you normally discard. This practice:
- Reduces food waste
- Saves money
- Provides instant plants
- Educational for families

## **Easy Regrowing Plants**
Here are the easiest plants to regrow from scraps:

### **1. Green Onions (Spring Onions)**
**Method:**
- Save 1-2 inches of white root end
- Place in glass with water covering roots
- Change water every 2 days
- Harvest green tops as needed
- Can transplant to soil after roots develop

**Tips:**
- Will regrow 3-4 times
- Grow faster in water than soil initially
- Best flavor when harvested young

### **2. Lettuce and Cabbage**
**Method:**
- Save the base (where leaves were attached)
- Place in shallow dish with ½ inch water
- Keep center moist
- New leaves appear in 3-7 days
- Transplant to soil when roots appear

**Tips:**
- Romaine lettuce works best
- Won't grow full head, just leaves
- Harvest outer leaves regularly

### **3. Celery**
**Method:**
- Save 2-inch base
- Place in shallow water, cut side up
- Change water every other day
- New leaves sprout from center
- Plant in soil after 1-2 weeks

**Tips:**
- Grows slowly but steadily
- Better flavor when grown in soil
- Can harvest stalks individually

### **4. Herbs from Cuttings**
**Method:**
- Take 4-6 inch cuttings from grocery store herbs
- Remove lower leaves
- Place in water
- Change water every 2-3 days
- Roots appear in 1-3 weeks
- Plant in soil when roots are 1-2 inches

**Herbs that root easily:**
- Mint (fastest)
- Basil
- Oregano
- Thyme
- Rosemary (slowest)

### **5. Ginger and Turmeric**
**Method:**
- Select plump pieces with 'eyes' (buds)
- Soak overnight in water
- Plant in soil with eyes facing up
- Keep moist and warm
- Shoots appear in 2-3 weeks

**Tips:**
- Harvest after 8-10 months
- Can harvest pieces without killing plant
- Needs warm temperatures

### **6. Potato and Sweet Potato**
**Method:**
- Let potatoes develop 'eyes' (sprouts)
- Cut into pieces with 1-2 eyes each
- Let cut pieces dry for 1-2 days
- Plant in deep container
- Harvest when plants die back

**Tips:**
- Sweet potatoes grow vines (ornamental)
- Regular potatoes need deep containers
- Don't eat green potatoes

## **Water vs Soil Regrowing**
**Water Method Advantages:**
- Watch roots develop
- No soil mess
- Faster initial growth
- Educational visibility

**Soil Method Advantages:**
- Stronger long-term growth
- Better nutrient availability
- Larger harvests
- More stable plants

**Transition Tips:**
- Move from water to soil gradually
- Keep soil extra moist for first week
- Protect from direct sun during transition
- Expect some wilting (normal)

## **Success Factors for Regrowing**
**Light Requirements:**
- Bright, indirect light for water method
- Direct sun for soil-grown plants
- Rotate regularly for even growth

**Water Quality:**
- Use room temperature water
- Change water regularly
- Rainwater or filtered water best
- Avoid chlorinated water if possible

**Temperature:**
- Most regrow best at 65-75°F
- Warmer temperatures speed growth
- Avoid cold drafts

**Patience:**
- Some plants regrow quickly (herbs)
- Others take months (ginger)
- Don't give up too soon
- Multiple attempts are okay

## **Common Regrowing Problems**
**Problem: Rotting in Water**
- **Cause:** Not changing water regularly
- **Solution:** Change water every 2-3 days
- **Prevention:** Clean container between changes

**Problem: No Root Development**
- **Cause:** Wrong season or unhealthy scrap
- **Solution:** Try different piece or wait for season
- **Prevention:** Use fresh, healthy scraps

**Problem: Weak Growth After Transplant**
- **Cause:** Shock from water to soil transition
- **Solution:** Keep soil moist, provide humidity
- **Prevention:** Transplant when roots are established

**Problem: Mold on Water Surface**
- **Cause:** Organic matter decomposing
- **Solution:** Change water, clean container
- **Prevention:** Remove any floating debris

Remember: Not every scrap will regrow. Success rates improve with practice!`,
      
      quiz: [
        {
          id: 1,
          question: "What part of green onions do you save for regrowing?",
          options: ["Green tops", "1-2 inches of white root end", "Middle section", "Flowers"],
          correctAnswer: 1,
          explanation: "Save 1-2 inches of the white root end with roots attached for regrowing green onions."
        },
        {
          id: 2,
          question: "How often should you change water for regrowing plants in water?",
          options: ["Weekly", "Every 2 days", "Monthly", "Never"],
          correctAnswer: 1,
          explanation: "Change water every 2 days to prevent bacterial growth and provide oxygen to developing roots."
        },
        {
          id: 3,
          question: "Which lettuce type is mentioned as best for regrowing?",
          options: ["Iceberg", "Romaine", "Butterhead", "All types equally"],
          correctAnswer: 1,
          explanation: "Romaine lettuce is specifically mentioned as working best for regrowing from scraps."
        },
        {
          id: 4,
          question: "What appears on ginger pieces that indicates they can regrow?",
          options: ["Roots", "'Eyes' or buds", "Leaves", "Flowers"],
          correctAnswer: 1,
          explanation: "'Eyes' or buds on ginger pieces are the growth points from which new shoots will emerge."
        },
        {
          id: 5,
          question: "Which herb is mentioned as rooting fastest from cuttings?",
          options: ["Basil", "Mint", "Rosemary", "Thyme"],
          correctAnswer: 1,
          explanation: "Mint is described as the fastest rooting herb from cuttings in water."
        },
        {
          id: 6,
          question: "How long does ginger typically take to produce harvestable rhizomes?",
          options: ["2-3 months", "8-10 months", "1-2 years", "4-6 weeks"],
          correctAnswer: 1,
          explanation: "Ginger takes 8-10 months to develop harvestable rhizomes when grown from scraps."
        },
        {
          id: 7,
          question: "What should you do with potato pieces before planting?",
          options: ["Plant immediately", "Let cut pieces dry 1-2 days", "Soak in water", "Freeze first"],
          correctAnswer: 1,
          explanation: "Let potato pieces dry for 1-2 days before planting to prevent rotting."
        },
        {
          id: 8,
          question: "What is an advantage of regrowing in water versus soil?",
          options: ["Better nutrients", "Watch roots develop", "Larger harvests", "Stronger growth"],
          correctAnswer: 1,
          explanation: "Water method allows you to watch roots develop, which is educational and interesting."
        },
        {
          id: 9,
          question: "What temperature is best for most regrowing plants?",
          options: ["55-60°F", "65-75°F", "80-85°F", "90-95°F"],
          correctAnswer: 1,
          explanation: "65-75°F is the ideal temperature range for regrowing most kitchen scraps."
        },
        {
          id: 10,
          question: "What causes rotting in water regrowing?",
          options: ["Too much light", "Not changing water regularly", "Too much air", "Cold water"],
          correctAnswer: 1,
          explanation: "Not changing water regularly allows bacteria to build up, causing scraps to rot."
        },
        {
          id: 11,
          question: "How many times can green onions typically be regrown?",
          options: ["Once", "3-4 times", "10+ times", "Indefinitely"],
          correctAnswer: 1,
          explanation: "Green onions can typically be regrown 3-4 times before they become too weak."
        },
        {
          id: 12,
          question: "What should you remove from herb cuttings before placing in water?",
          options: ["All leaves", "Lower leaves", "Stem", "Roots"],
          correctAnswer: 1,
          explanation: "Remove lower leaves from herb cuttings to prevent them from rotting in the water."
        },
        {
          id: 13,
          question: "What type of potatoes should you never eat?",
          options: ["All potatoes", "Green potatoes", "Small potatoes", "Organic potatoes"],
          correctAnswer: 1,
          explanation: "Never eat green potatoes as they contain solanine, which can be toxic."
        },
        {
          id: 14,
          question: "What is a benefit of the soil method for regrowing?",
          options: ["Educational visibility", "Stronger long-term growth", "No watering needed", "Faster initial growth"],
          correctAnswer: 1,
          explanation: "Soil method provides stronger long-term growth and better nutrient availability."
        },
        {
          id: 15,
          question: "How much water should be in the dish for lettuce regrowing?",
          options: ["Full to top", "½ inch water", "2 inches water", "Just damp cloth"],
          correctAnswer: 1,
          explanation: "Use about ½ inch of water in a shallow dish for regrowing lettuce bases."
        },
        {
          id: 16,
          question: "Which herb is mentioned as slowest to root from cuttings?",
          options: ["Mint", "Basil", "Rosemary", "Parsley"],
          correctAnswer: 2,
          explanation: "Rosemary is described as the slowest rooting herb from cuttings."
        },
        {
          id: 17,
          question: "What should you do with celery base when starting regrowth?",
          options: ["Bury completely", "Place cut side up in water", "Plant directly in soil", "Freeze first"],
          correctAnswer: 1,
          explanation: "Place celery base cut side up in shallow water to begin regrowth process."
        },
        {
          id: 18,
          question: "What is a common problem when transitioning from water to soil?",
          options: ["Too fast growth", "Shock causing wilting", "Too many flowers", "No roots"],
          correctAnswer: 1,
          explanation: "Plants often experience shock and some wilting when transitioning from water to soil."
        },
        {
          id: 19,
          question: "What type of water is best for regrowing plants?",
          options: ["Hot water", "Chlorinated tap water", "Room temperature water", "Iced water"],
          correctAnswer: 2,
          explanation: "Room temperature water is best as cold water can shock the plant tissues."
        },
        {
          id: 20,
          question: "What do sweet potatoes grow that can be ornamental?",
          options: ["Flowers", "Vines", "Thorns", "Berries"],
          correctAnswer: 1,
          explanation: "Sweet potatoes grow attractive vines that can be ornamental in addition to producing tubers."
        }
      ]
    },
    {
      id: 6,
      title: "Expanding Your Kitchen Garden",
      completed: false,
      content: `# Module 6: Expanding Your Kitchen Garden

Now that you've mastered the basics, it's time to expand your skills and garden. This module covers advanced techniques and creative ideas for taking your kitchen gardening to the next level.

## **Vertical Gardening Solutions**
When floor space is limited, grow upward!

**Wall-mounted Systems:**
- Pocket planters on walls
- Hanging baskets
- Wall-mounted shelves
- DIY pallet gardens

**Tiered Systems:**
- Stair-step planters
- Ladder gardens
- Stacking pots
- Multi-level stands

**Hanging Systems:**
- Ceiling hooks for pots
- Window box exteriors
- Hanging herb gardens
- Macramé plant hangers

**Benefits of Vertical Gardening:**
- Maximizes small spaces
- Better air circulation
- Easier harvesting access
- Decorative display

## **Companion Planting Indoors**
Some plants grow better together:

**Beneficial Combinations:**
- Tomatoes with basil (improves flavor)
- Carrots with chives (pest protection)
- Lettuce with mint (shade benefit)
- Beans with spinach (nitrogen sharing)

**Plants to Keep Separate:**
- Mint with other herbs (invasive)
- Fennel with most plants (allelopathic)
- Same family plants together (disease risk)

**Companion Planting Principles:**
- Tall plants provide shade for shorter ones
- Herbs can repel specific pests
- Different root depths don't compete
- Flowering herbs attract pollinators if windows open

## **Season Extension Techniques**
Grow year-round with these methods:

**Winter Gardening:**
- Use grow lights on timers
- Choose cold-tolerant varieties
- Insulate windows at night
- Group plants for humidity

**Summer Protection:**
- Sheer curtains for intense sun
- Move from hot windowsills
- Increase watering frequency
- Use pebble trays for humidity

**Succession Planting:**
- Start new seeds every 2-4 weeks
- Have seedlings ready to replace harvested plants
- Maintain continuous harvest
- Rotate plant families

## **Creative Container Ideas**
Think beyond traditional pots:

**Upcycled Containers:**
- Mason jars for herbs
- Tin cans (with drainage holes)
- Old tea tins
- Wooden crates lined with plastic

**Specialty Containers:**
- Self-watering pots
- Window box planters
- Hanging gutter gardens
- Fabric grow bags

**Container Requirements:**
- Must have drainage
- Food-safe materials
- Appropriate size for plant
- Stable and secure

## **Advanced Growing Methods**

**Hydroponic Basics:**
- Water-based growing without soil
- Nutrient solutions feed plants
- Faster growth rates
- Cleaner than soil gardening

**Kratky Method (Simple Hydroponics):**
- Static water system
- No pumps or electricity
- Great for lettuce and herbs
- Low maintenance

**Aeroponic Systems:**
- Mist roots with nutrient solution
- Very fast growth
- Commercial systems available
- DIY options possible

**Wicking Beds:**
- Self-watering containers
- Reservoir at bottom
- Fabric wick draws water up
- Reduces watering frequency

## **Creating a Kitchen Garden Ecosystem**

**Pollination Assistance:**
- Hand pollinate tomatoes with electric toothbrush
- Use small paintbrush for peppers
- Open windows on warm days
- Grow flowering herbs to attract if possible

**Beneficial Insects:**
- Ladybugs for aphid control (if available)
- Keep plants healthy to resist pests
- Maintain clean environment
- Isolate new plants initially

**Natural Fertilizer Production:**
- Compost tea from kitchen scraps
- Worm castings from small worm bin
- Fermented plant juices
- Bokashi composting

## **Recording and Learning**

**Garden Journal:**
- Track planting dates
- Record successes and failures
- Note pest problems
- Document harvest amounts

**Photographic Records:**
- Weekly progress photos
- Problem documentation
- Before/after pruning
- Harvest records

**Experimentation:**
- Try one new plant each season
- Test different containers
- Experiment with locations
- Compare growing methods

**Community Sharing:**
- Share excess harvest with neighbors
- Swap seeds or cuttings
- Join online gardening groups
- Teach others what you've learned

## **Troubleshooting Expansion Problems**

**Problem: Limited Space**
- **Solution:** Vertical gardening, smaller varieties
- **Prevention:** Plan before planting, measure space

**Problem: Insufficient Light**
- **Solution:** Grow lights, reflective surfaces
- **Prevention:** Light assessment before expansion

**Problem: Watering Overload**
- **Solution:** Self-watering containers, wicking systems
- **Prevention:** Start small, add plants gradually

**Problem: Pest Management Complexity**
- **Solution:** Companion planting, regular inspection
- **Prevention:** Quarantine new plants, maintain cleanliness

Remember: Expansion should be gradual. Add one new technique or system at a time to avoid overwhelm!`,
      
      quiz: [
        {
          id: 1,
          question: "What is a benefit of vertical gardening mentioned?",
          options: ["More watering needed", "Maximizes small spaces", "Harder to harvest", "More expensive"],
          correctAnswer: 1,
          explanation: "Vertical gardening maximizes small spaces by growing upward instead of outward."
        },
        {
          id: 2,
          question: "Which plant combination improves tomato flavor according to companion planting?",
          options: ["Tomatoes with mint", "Tomatoes with basil", "Tomatoes with fennel", "Tomatoes alone"],
          correctAnswer: 1,
          explanation: "Tomatoes grown with basil are said to have improved flavor according to companion planting principles."
        },
        {
          id: 3,
          question: "What is succession planting?",
          options: ["Planting in succession", "Starting new seeds every 2-4 weeks", "Planting once yearly", "Only planting in succession"],
          correctAnswer: 1,
          explanation: "Succession planting means starting new seeds every 2-4 weeks to maintain continuous harvest."
        },
        {
          id: 4,
          question: "What is the Kratky method?",
          options: ["Soil gardening", "Simple hydroponics without pumps", "Aeroponic system", "Composting method"],
          correctAnswer: 1,
          explanation: "The Kratky method is a simple hydroponic system that uses static water without pumps or electricity."
        },
        {
          id: 5,
          question: "How can you hand pollinate tomatoes indoors?",
          options: ["With water spray", "With electric toothbrush", "With fan", "By shaking leaves"],
          correctAnswer: 1,
          explanation: "Gently vibrating tomato flowers with an electric toothbrush simulates bee pollination."
        },
        {
          id: 6,
          question: "What should you keep mint separate from in companion planting?",
          options: ["All plants", "Other herbs", "Only vegetables", "Nothing, it's fine"],
          correctAnswer: 1,
          explanation: "Mint should be kept separate from other herbs as it's invasive and can take over containers."
        },
        {
          id: 7,
          question: "What is a wicking bed?",
          options: ["Bed for sleeping", "Self-watering container", "Type of fertilizer", "Pest control method"],
          correctAnswer: 1,
          explanation: "A wicking bed is a self-watering container with a reservoir that draws water up through a wick."
        },
        {
          id: 8,
          question: "What should you do with new plants before adding to your garden?",
          options: ["Water immediately", "Quarantine initially", "Prune heavily", "Fertilize"],
          correctAnswer: 1,
          explanation: "Quarantine new plants initially to ensure they don't introduce pests to your existing garden."
        },
        {
          id: 9,
          question: "What is a garden journal used for?",
          options: ["Drawing pictures", "Tracking planting dates and progress", "Storing seeds", "Watering schedule only"],
          correctAnswer: 1,
          explanation: "A garden journal helps track planting dates, successes, failures, and learning from each season."
        },
        {
          id: 10,
          question: "What type of containers are NOT recommended for edible plants?",
          options: ["Non-food-safe materials", "All containers work", "Only clay pots", "Only plastic pots"],
          correctAnswer: 0,
          explanation: "Avoid containers made from non-food-safe materials that could leach chemicals into edible plants."
        },
        {
          id: 11,
          question: "What can you use to insulate plants from cold windows at night?",
          options: ["Move plants away", "Insulating materials", "Hot water", "Blankets"],
          correctAnswer: 1,
          explanation: "Insulating materials or simply moving plants away from cold windows at night protects them."
        },
        {
          id: 12,
          question: "What does allelopathic mean in companion planting?",
          options: ["Helps growth", "Inhibits other plants' growth", "Attracts pests", "Improves flavor"],
          correctAnswer: 1,
          explanation: "Allelopathic plants release chemicals that inhibit the growth of other plants nearby."
        },
        {
          id: 13,
          question: "What is a benefit of fabric grow bags?",
          options: ["They're decorative", "They prevent root circling", "They never need water", "They're permanent"],
          correctAnswer: 1,
          explanation: "Fabric grow bags prevent root circling and promote healthier root systems through air pruning."
        },
        {
          id: 14,
          question: "What is bokashi composting?",
          options: ["Watering method", "Fermentation composting", "Soil type", "Pest control"],
          correctAnswer: 1,
          explanation: "Bokashi is a fermentation-based composting method that works well in small spaces."
        },
        {
          id: 15,
          question: "What should expansion of your garden be?",
          options: ["Rapid", "Gradual", "All at once", "Only horizontal"],
          correctAnswer: 1,
          explanation: "Garden expansion should be gradual, adding one new technique or system at a time."
        },
        {
          id: 16,
          question: "What can you use to create a vertical garden from pallets?",
          options: ["Only new pallets", "Food-safe treated pallets", "Any pallets", "Pallets are not recommended"],
          correctAnswer: 1,
          explanation: "Use only food-safe treated pallets or line with plastic when creating pallet gardens for edibles."
        },
        {
          id: 17,
          question: "What is an advantage of aeroponic systems?",
          options: ["Very fast growth", "No water needed", "No maintenance", "Cheapest method"],
          correctAnswer: 0,
          explanation: "Aeroponic systems provide very fast growth rates by misting roots with nutrient solution."
        },
        {
          id: 18,
          question: "What should you do with excess harvest?",
          options: ["Throw away", "Share with neighbors", "Compost only", "Freeze all"],
          correctAnswer: 1,
          explanation: "Sharing excess harvest with neighbors builds community and reduces waste."
        },
        {
          id: 19,
          question: "What is a pebble tray used for?",
          options: ["Decoration", "Increasing humidity", "Watering plants", "Pest control"],
          correctAnswer: 1,
          explanation: "A pebble tray with water increases humidity around plants, beneficial in dry indoor air."
        },
        {
          id: 20,
          question: "What is the key to successful garden expansion?",
          options: ["Buying everything new", "Avoiding all problems", "Gradual addition and learning", "Following all advice"],
          correctAnswer: 2,
          explanation: "Successful expansion comes from gradual addition of new elements and continuous learning from experience."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    id: "kitchen-gardening-certificate-exam",
    title: "Kitchen Gardening Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. 40 questions to test your knowledge.",
    passingScore: 70,
    timeLimit: 60, // minutes
    
    questions: [
      {
        id: 1,
        module: 1,
        question: "What is the minimum hours of direct sunlight needed for most kitchen garden plants?",
        options: ["1-2 hours", "4-6 hours", "8-10 hours", "12 hours"],
        correctAnswer: 1,
        explanation: "Module 1 states most plants need 4-6 hours of direct sunlight daily."
      },
      {
        id: 2,
        module: 1,
        question: "Why should you never use garden soil in containers?",
        options: ["Too expensive", "May contain pests and diseases", "Too colorful", "Plants prefer it"],
        correctAnswer: 1,
        explanation: "Module 1 explains garden soil may contain pests and doesn't drain well in containers."
      },
      {
        id: 3,
        module: 2,
        question: "Which plant category includes basil and mint?",
        options: ["Leafy Greens", "Fruiting Plants", "Root Vegetables", "Herbs"],
        correctAnswer: 3,
        explanation: "Module 2 categorizes basil and mint as herbs - fast-growing flavor plants."
      },
      {
        id: 4,
        module: 2,
        question: "What can be regrown from kitchen scraps?",
        options: ["Tomatoes", "Green onions", "Spinach seeds", "Basil flowers"],
        correctAnswer: 1,
        explanation: "Module 2 mentions green onions can be regrown from root ends."
      },
      {
        id: 5,
        module: 3,
        question: "What should you add to containers for proper drainage?",
        options: ["More soil", "Drainage holes", "Rocks only", "Fertilizer"],
        correctAnswer: 1,
        explanation: "Module 3 emphasizes drainage holes are essential to prevent waterlogging."
      },
      {
        id: 6,
        module: 3,
        question: "When is the best time to water plants?",
        options: ["Evening", "Morning", "Afternoon", "Night"],
        correctAnswer: 1,
        explanation: "Module 3 recommends morning watering so leaves dry during day."
      },
      {
        id: 7,
        module: 4,
        question: "What does yellow leaves typically indicate?",
        options: ["Underwatering", "Overwatering", "Perfect health", "Too much sun"],
        correctAnswer: 1,
        explanation: "Module 4 troubleshooting lists yellow leaves as sign of overwatering."
      },
      {
        id: 8,
        module: 4,
        question: "How much of a plant should you never remove when pruning?",
        options: ["More than 1/3", "More than 1/2", "More than 2/3", "Any amount"],
        correctAnswer: 0,
        explanation: "Module 4 pruning rules state never remove more than 1/3 of plant."
      },
      {
        id: 9,
        module: 5,
        question: "How often should water be changed for regrowing plants?",
        options: ["Weekly", "Every 2 days", "Monthly", "Never"],
        correctAnswer: 1,
        explanation: "Module 5 recommends changing water every 2 days for regrowing."
      },
      {
        id: 10,
        module: 5,
        question: "Which herb roots fastest from cuttings?",
        options: ["Basil", "Mint", "Rosemary", "Thyme"],
        correctAnswer: 1,
        explanation: "Module 5 states mint roots fastest from cuttings."
      },
      {
        id: 11,
        module: 6,
        question: "What is vertical gardening's main benefit?",
        options: ["More watering", "Maximizes small spaces", "Harder harvest", "More expensive"],
        correctAnswer: 1,
        explanation: "Module 6 says vertical gardening maximizes small spaces."
      },
      {
        id: 12,
        module: 6,
        question: "What improves tomato flavor in companion planting?",
        options: ["Mint nearby", "Basil nearby", "Fennel nearby", "Alone"],
        correctAnswer: 1,
        explanation: "Module 6 companion planting says basil improves tomato flavor."
      },
      {
        id: 13,
        module: 1,
        question: "Which direction-facing window is ideal?",
        options: ["North", "East", "South", "West"],
        correctAnswer: 2,
        explanation: "Module 1 states south-facing windows get most consistent sunlight."
      },
      {
        id: 14,
        module: 1,
        question: "What is a good number of plants for beginners?",
        options: ["10-15", "3-5", "20-25", "1"],
        correctAnswer: 1,
        explanation: "Module 1 recommends starting with 3-5 plants for beginners."
      },
      {
        id: 15,
        module: 2,
        question: "What do fruiting plants often need that herbs don't?",
        options: ["More water", "Pollination", "Less light", "Small pots"],
        correctAnswer: 1,
        explanation: "Module 2 says fruiting plants often need pollination."
      },
      {
        id: 16,
        module: 2,
        question: "How long do microgreens take to harvest?",
        options: ["30 days", "60 days", "7-14 days", "120 days"],
        correctAnswer: 2,
        explanation: "Module 2 states microgreens harvest in 7-14 days."
      },
      {
        id: 17,
        module: 3,
        question: "What is the 'finger test' for watering?",
        options: ["Taste soil", "Check 1 inch down", "Feel leaves", "Lift pot"],
        correctAnswer: 1,
        explanation: "Module 3 describes finger test as checking if soil is dry 1 inch down."
      },
      {
        id: 18,
        module: 3,
        question: "When should fertilizing begin after planting?",
        options: ["Immediately", "2-3 weeks after", "After harvest", "Never"],
        correctAnswer: 1,
        explanation: "Module 3 says wait 2-3 weeks after planting before fertilizing."
      },
      {
        id: 19,
        module: 4,
        question: "What causes leggy plant growth?",
        options: ["Overwatering", "Insufficient light", "Too much fertilizer", "Cold"],
        correctAnswer: 1,
        explanation: "Module 4 troubleshooting says leggy growth means insufficient light."
      },
      {
        id: 20,
        module: 4,
        question: "What temperature range is ideal for most plants?",
        options: ["55-60°F", "65-75°F", "80-85°F", "90-95°F"],
        correctAnswer: 1,
        explanation: "Module 4 states 65-75°F is ideal temperature range."
      },
      {
        id: 21,
        module: 5,
        question: "What part of lettuce is saved for regrowing?",
        options: ["Leaves", "The base", "Seeds", "Flowers"],
        correctAnswer: 1,
        explanation: "Module 5 says save the base where leaves were attached."
      },
      {
        id: 22,
        module: 5,
        question: "How long does ginger take to become harvestable?",
        options: ["2-3 months", "8-10 months", "1-2 years", "4-6 weeks"],
        correctAnswer: 1,
        explanation: "Module 5 states ginger takes 8-10 months to harvest."
      },
      {
        id: 23,
        module: 6,
        question: "What is succession planting?",
        options: ["Planting once", "Starting seeds every 2-4 weeks", "Only in succession", "Planting rows"],
        correctAnswer: 1,
        explanation: "Module 6 defines succession as starting seeds every 2-4 weeks."
      },
      {
        id: 24,
        module: 6,
        question: "What is the Kratky method?",
        options: ["Soil gardening", "Simple hydroponics", "Aeroponics", "Composting"],
        correctAnswer: 1,
        explanation: "Module 6 describes Kratky as simple hydroponics without pumps."
      },
      {
        id: 25,
        module: 1,
        question: "What tool helps control water flow to soil?",
        options: ["Hose", "Watering can with narrow spout", "Bucket", "Spray only"],
        correctAnswer: 1,
        explanation: "Module 1 mentions watering can with narrow spout for precise watering."
      },
      {
        id: 26,
        module: 1,
        question: "What is the therapeutic benefit mentioned?",
        options: ["Expensive hobby", "Time-consuming", "Stress-relieving", "Requires skill"],
        correctAnswer: 2,
        explanation: "Module 1 lists stress-relieving as a therapeutic benefit."
      },
      {
        id: 27,
        module: 2,
        question: "What are bush beans recommended for?",
        options: ["Large gardens", "Containers", "Flower beds", "Indoors only"],
        correctAnswer: 1,
        explanation: "Module 2 recommends bush bean varieties for containers."
      },
      {
        id: 28,
        module: 2,
        question: "What should plant selection match?",
        options: ["Wall color", "Your cooking use", "Flooring", "Curtains"],
        correctAnswer: 1,
        explanation: "Module 2 says choose plants you'll actually use in cooking."
      },
      {
        id: 29,
        module: 3,
        question: "What is coconut coir used for?",
        options: ["Mulch", "Soilless mix base", "Pest control", "Container"],
        correctAnswer: 1,
        explanation: "Module 3 mentions coconut coir as soilless mix base."
      },
      {
        id: 30,
        module: 3,
        question: "What does wilting indicate?",
        options: ["Too much fertilizer", "Urgent water need", "Perfect health", "Too much sun"],
        correctAnswer: 1,
        explanation: "Module 3 says wilting indicates urgent need for water."
      },
      {
        id: 31,
        module: 4,
        question: "What should you do at first pest sign?",
        options: ["Wait", "Immediate action", "Water more", "Fertilize"],
        correctAnswer: 1,
        explanation: "Module 4 says take immediate action at first pest sign."
      },
      {
        id: 32,
        module: 4,
        question: "What are yellow sticky traps for?",
        options: ["Decoration", "Flying insects", "Soil improvement", "Watering"],
        correctAnswer: 1,
        explanation: "Module 4 says yellow traps catch flying insects."
      },
      {
        id: 33,
        module: 5,
        question: "What are 'eyes' on ginger?",
        options: ["Roots", "Buds for growth", "Leaves", "Flowers"],
        correctAnswer: 1,
        explanation: "Module 5 describes 'eyes' as buds for new growth."
      },
      {
        id: 34,
        module: 5,
        question: "What causes rotting in water regrowing?",
        options: ["Too much light", "Not changing water", "Too much air", "Cold"],
        correctAnswer: 1,
        explanation: "Module 5 says not changing water causes rotting."
      },
      {
        id: 35,
        module: 6,
        question: "How can you hand pollinate tomatoes?",
        options: ["Water spray", "Electric toothbrush", "Fan", "Shake leaves"],
        correctAnswer: 1,
        explanation: "Module 6 suggests electric toothbrush for tomato pollination."
      },
      {
        id: 36,
        module: 6,
        question: "What should you do with new plants initially?",
        options: ["Water", "Quarantine", "Prune", "Fertilize"],
        correctAnswer: 1,
        explanation: "Module 6 recommends quarantining new plants initially."
      },
      {
        id: 37,
        module: 1,
        question: "What can increase light for plants?",
        options: ["Reflective surfaces", "Dark curtains", "More water", "Larger pots"],
        correctAnswer: 0,
        explanation: "Module 1 mentions reflective surfaces can increase light."
      },
      {
        id: 38,
        module: 2,
        question: "What is 'cut-and-come-again'?",
        options: ["Harvest whole plant", "Take leaves only", "Harvest once", "Uproot"],
        correctAnswer: 1,
        explanation: "Module 2 describes cut-and-come-again as taking leaves only."
      },
      {
        id: 39,
        module: 3,
        question: "What is compost tea?",
        options: ["Gardener's drink", "Liquid fertilizer", "Herbal tea", "Pest spray"],
        correctAnswer: 1,
        explanation: "Module 3 describes compost tea as liquid fertilizer."
      },
      {
        id: 40,
        module: 4,
        question: "What adjustment for winter care?",
        options: ["Water more", "Reduce watering", "More fertilizer", "Move outdoors"],
        correctAnswer: 1,
        explanation: "Module 4 says reduce watering frequency in winter."
      }
    ]
  }
};

export default kitchenGardeningCertificate;
