// nutrition-certificate-course.ts
// Complete Nutrition Certificate Course with 6 Modules + Final Exam
// All content is text-only with integrated quizzes

export const nutritionCertificateCourse = {
  // COURSE METADATA
  id: "nutrition-certificate",
  title: "Nutrition (Certificate)",
  description: "Learn the fundamentals of nutrition, understand food science, and discover how to make healthy eating choices for everyday life. This certificate provides essential knowledge about nutrients, balanced diets, and practical meal planning.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🥗",
  badge: "Certificate",
  difficulty: "Beginner",
  
  // MODULES ARRAY
  modules: [
    {
      id: 1,
      title: "Foundations of Nutrition",
      content: `
# Module 1: Foundations of Nutrition

Welcome to your nutrition journey! This module introduces the basic building blocks of nutrition that everyone should know.

## What Are Nutrients?
Nutrients are substances in food that our bodies need to function properly. They provide energy, help build and repair tissues, and regulate body processes. There are six main types of nutrients that every person needs:

**Macronutrients** (needed in larger amounts):
1. **Carbohydrates** - Your body's main energy source
2. **Proteins** - Building blocks for muscles and tissues
3. **Fats** - Energy storage and vitamin absorption

**Micronutrients** (needed in smaller amounts):
4. **Vitamins** - Support various body functions
5. **Minerals** - Build strong bones and teeth
6. **Water** - Essential for every body function

## The Energy Equation
Food gives us energy measured in calories. One calorie is the amount of energy needed to raise the temperature of one gram of water by one degree Celsius. Different nutrients provide different amounts of energy:
- Carbohydrates: 4 calories per gram
- Protein: 4 calories per gram
- Fat: 9 calories per gram
- Alcohol: 7 calories per gram (not a nutrient but provides energy)

Your body needs energy for three main purposes:
1. **Basal Metabolic Rate (BMR)** - Energy for basic body functions like breathing and heartbeat
2. **Physical Activity** - Energy for movement and exercise
3. **Thermic Effect of Food** - Energy used to digest and process food

## Understanding Food Labels
Reading food labels helps you make better choices. Here's what to look for:
- **Serving Size** - All information is based on this amount
- **Calories** - Total energy in one serving
- **% Daily Value** - Shows how much a nutrient contributes to daily needs
- **Ingredients List** - Listed from highest to lowest amount

**Simple Tip**: Choose foods with shorter ingredient lists and ingredients you recognize.

## Why Nutrition Matters
Good nutrition helps you:
- Have more energy throughout the day
- Maintain a healthy weight
- Reduce risk of chronic diseases
- Improve mental clarity and mood
- Support immune function
- Promote better sleep

**Remember**: Nutrition isn't about perfection. It's about making better choices most of the time.

## Putting It All Together
Start by noticing what you eat. Keep a simple food journal for three days. Don't judge yourself - just observe. This awareness is your first step toward better nutrition.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many main types of nutrients does your body need?",
          options: ["Three", "Six", "Nine", "Twelve"],
          correctAnswer: 1,
          explanation: "There are six main types of nutrients: carbohydrates, proteins, fats, vitamins, minerals, and water."
        },
        {
          id: 2,
          question: "Which nutrient provides 9 calories per gram?",
          options: ["Carbohydrates", "Protein", "Fat", "Vitamins"],
          correctAnswer: 2,
          explanation: "Fat provides 9 calories per gram, while carbohydrates and protein provide 4 calories per gram each."
        },
        {
          id: 3,
          question: "What does BMR stand for?",
          options: ["Basic Metabolic Rate", "Basal Metabolic Rate", "Body Mass Ratio", "Basic Mineral Requirement"],
          correctAnswer: 1,
          explanation: "BMR stands for Basal Metabolic Rate - the energy your body needs for basic functions like breathing."
        },
        {
          id: 4,
          question: "Which of these is NOT a macronutrient?",
          options: ["Carbohydrates", "Proteins", "Vitamins", "Fats"],
          correctAnswer: 2,
          explanation: "Vitamins are micronutrients, not macronutrients. Macronutrients are needed in larger amounts."
        },
        {
          id: 5,
          question: "What should you look at first on a food label?",
          options: ["Calories", "Serving Size", "Ingredients List", "% Daily Value"],
          correctAnswer: 1,
          explanation: "Always check the serving size first because all other information on the label is based on this amount."
        },
        {
          id: 6,
          question: "How many calories does protein provide per gram?",
          options: ["2", "4", "7", "9"],
          correctAnswer: 1,
          explanation: "Protein provides 4 calories per gram, the same as carbohydrates."
        },
        {
          id: 7,
          question: "Which of these is a benefit of good nutrition?",
          options: ["More energy", "Better sleep", "Improved mood", "All of the above"],
          correctAnswer: 3,
          explanation: "Good nutrition provides all these benefits: more energy, better sleep, and improved mood."
        },
        {
          id: 8,
          question: "What type of nutrient is water?",
          options: ["Macronutrient", "Micronutrient", "Energy nutrient", "Non-essential nutrient"],
          correctAnswer: 0,
          explanation: "Water is considered a macronutrient because your body needs it in large amounts."
        },
        {
          id: 9,
          question: "What does the thermic effect of food refer to?",
          options: ["Food temperature", "Energy used to digest food", "How food affects body heat", "Cooking methods"],
          correctAnswer: 1,
          explanation: "The thermic effect of food is the energy your body uses to digest, absorb, and process food."
        },
        {
          id: 10,
          question: "Which list shows ingredients from highest to lowest amount?",
          options: ["Nutrition Facts", "Allergen Statement", "Ingredients List", "Supplement Facts"],
          correctAnswer: 2,
          explanation: "The Ingredients List shows ingredients in descending order by weight."
        },
        {
          id: 11,
          question: "How many calories does alcohol provide per gram?",
          options: ["4", "7", "9", "0"],
          correctAnswer: 1,
          explanation: "Alcohol provides 7 calories per gram, even though it's not considered a nutrient."
        },
        {
          id: 12,
          question: "What is the first step recommended for improving nutrition?",
          options: ["Counting calories", "Eliminating sugar", "Keeping a food journal", "Taking supplements"],
          correctAnswer: 2,
          explanation: "Keeping a simple food journal helps build awareness of current eating habits."
        },
        {
          id: 13,
          question: "Which nutrient is your body's main energy source?",
          options: ["Protein", "Fat", "Carbohydrates", "Vitamins"],
          correctAnswer: 2,
          explanation: "Carbohydrates are your body's preferred and main source of energy."
        },
        {
          id: 14,
          question: "What does % Daily Value on food labels tell you?",
          options: ["Food cost percentage", "How much nutrient is in one serving", "Expiration date code", "Recommended daily intake"],
          correctAnswer: 1,
          explanation: "% Daily Value shows how much a nutrient in one serving contributes to your total daily needs."
        },
        {
          id: 15,
          question: "Which of these is NOT one of the three main purposes your body needs energy for?",
          options: ["BMR", "Physical activity", "Food digestion", "Thinking complex thoughts"],
          correctAnswer: 3,
          explanation: "While thinking uses energy, the three main purposes are BMR, physical activity, and food digestion."
        },
        {
          id: 16,
          question: "What should you choose according to the simple tip in the module?",
          options: ["Foods with long ingredient lists", "Foods with ingredients you recognize", "Only organic foods", "Low-fat everything"],
          correctAnswer: 1,
          explanation: "Choose foods with shorter ingredient lists and ingredients you recognize."
        },
        {
          id: 17,
          question: "How many days should you keep a food journal initially?",
          options: ["1 day", "3 days", "7 days", "30 days"],
          correctAnswer: 1,
          explanation: "Start with a simple food journal for three days to build awareness."
        },
        {
          id: 18,
          question: "What is nutrition mainly about according to the module?",
          options: ["Perfect eating", "Counting every calorie", "Making better choices most of the time", "Following strict diets"],
          correctAnswer: 2,
          explanation: "Nutrition is about making better choices most of the time, not about perfection."
        },
        {
          id: 19,
          question: "Which nutrient helps build and repair tissues?",
          options: ["Carbohydrates", "Protein", "Fat", "Water"],
          correctAnswer: 1,
          explanation: "Protein is essential for building and repairing body tissues like muscles."
        },
        {
          id: 20,
          question: "What measurement is used for food energy?",
          options: ["Pounds", "Grams", "Calories", "Ounces"],
          correctAnswer: 2,
          explanation: "Calories are the measurement used for the energy content of food."
        }
      ]
    },
    {
      id: 2,
      title: "Understanding Macronutrients",
      content: `
# Module 2: Understanding Macronutrients

Now let's dive deeper into the three macronutrients: carbohydrates, proteins, and fats. These are the nutrients your body needs in the largest amounts.

## Carbohydrates: Your Energy Source
Carbohydrates are your body's preferred fuel source. They break down into glucose, which powers your brain and muscles.

**Types of Carbohydrates:**
1. **Simple Carbs** - Quick energy
   - Found in fruits, milk, sugar, honey
   - Break down quickly in your body
   - Provide fast but short-lasting energy

2. **Complex Carbs** - Sustained energy
   - Found in whole grains, beans, vegetables
   - Take longer to digest
   - Provide steady, long-lasting energy
   - Usually contain more fiber

**Fiber** is a special type of complex carbohydrate that your body can't digest. It helps with:
- Digestive health
- Blood sugar control
- Feeling full longer
- Heart health

**Good Sources**: Whole grains, fruits, vegetables, beans, nuts

## Proteins: Your Building Blocks
Proteins are made of amino acids - think of them as building blocks for your body.

**Why Proteins Matter:**
- Build and repair muscles
- Make enzymes and hormones
- Support immune function
- Maintain healthy hair, skin, and nails

**Complete vs. Incomplete Proteins:**
- **Complete proteins** contain all essential amino acids
  - Animal sources: meat, fish, eggs, dairy
  - Plant sources: quinoa, soy, buckwheat
- **Incomplete proteins** lack some essential amino acids
  - Most plant sources: beans, rice, nuts
  - Can be combined to make complete proteins

**Protein Combining Tip**: Beans + rice or peanut butter + whole wheat bread create complete proteins.

## Fats: More Than Just Calories
Fats are essential for health, despite what you might have heard!

**Types of Fats:**
1. **Unsaturated Fats** (Healthy)
   - Liquid at room temperature
   - Found in plants and fish
   - Types: monounsaturated and polyunsaturated
   - Examples: olive oil, avocados, nuts, salmon

2. **Saturated Fats** (Limit these)
   - Solid at room temperature
   - Found mostly in animal products
   - Examples: butter, cheese, red meat

3. **Trans Fats** (Avoid these)
   - Artificial fats created by processing
   - Found in fried foods and baked goods
   - Harmful to heart health

**Why You Need Healthy Fats:**
- Absorb vitamins A, D, E, and K
- Protect your organs
- Keep you warm
- Support brain health
- Make hormones

## Balancing Your Macronutrients
Everyone's needs are different, but a good starting point is:
- **45-65%** of calories from carbohydrates
- **10-35%** of calories from protein
- **20-35%** of calories from fat

**Simple Rule**: Fill half your plate with vegetables and fruits, one quarter with protein, and one quarter with whole grains.

## Practical Tips for Today
1. Choose whole grains over refined grains
2. Include a protein source at each meal
3. Use healthy oils for cooking
4. Read labels to check for trans fats
5. Don't fear fats - choose the right kinds

**Remember**: All macronutrients are important. Balance is key!
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three macronutrients?",
          options: ["Vitamins, minerals, water", "Carbohydrates, proteins, fats", "Sugar, salt, fat", "Calcium, iron, potassium"],
          correctAnswer: 1,
          explanation: "The three macronutrients are carbohydrates, proteins, and fats."
        },
        {
          id: 2,
          question: "Which type of carbohydrate provides quick energy?",
          options: ["Complex carbs", "Simple carbs", "Fiber", "Starch"],
          correctAnswer: 1,
          explanation: "Simple carbohydrates break down quickly and provide fast energy."
        },
        {
          id: 3,
          question: "What is fiber?",
          options: ["A type of protein", "A digestible carbohydrate", "An indigestible carbohydrate", "A type of fat"],
          correctAnswer: 2,
          explanation: "Fiber is a type of complex carbohydrate that your body cannot digest."
        },
        {
          id: 4,
          question: "What are proteins made of?",
          options: ["Fatty acids", "Amino acids", "Simple sugars", "Vitamins"],
          correctAnswer: 1,
          explanation: "Proteins are made up of building blocks called amino acids."
        },
        {
          id: 5,
          question: "Which of these is a complete protein source?",
          options: ["Rice alone", "Beans alone", "Quinoa", "Corn"],
          correctAnswer: 2,
          explanation: "Quinoa is a plant source that contains all essential amino acids, making it a complete protein."
        },
        {
          id: 6,
          question: "Which type of fat is liquid at room temperature?",
          options: ["Saturated fat", "Trans fat", "Unsaturated fat", "All fats"],
          correctAnswer: 2,
          explanation: "Unsaturated fats are typically liquid at room temperature."
        },
        {
          id: 7,
          question: "Which fats should you avoid?",
          options: ["Unsaturated fats", "Saturated fats", "Trans fats", "All fats"],
          correctAnswer: 2,
          explanation: "Trans fats are artificial fats that are harmful to heart health and should be avoided."
        },
        {
          id: 8,
          question: "What percentage of calories should come from carbohydrates?",
          options: ["10-20%", "20-35%", "45-65%", "70-80%"],
          correctAnswer: 2,
          explanation: "Carbohydrates should provide 45-65% of your total calories."
        },
        {
          id: 9,
          question: "Which vitamins need fat for absorption?",
          options: ["B vitamins", "Vitamin C", "Vitamins A, D, E, K", "All vitamins"],
          correctAnswer: 2,
          explanation: "Fat-soluble vitamins A, D, E, and K need fat to be absorbed properly."
        },
        {
          id: 10,
          question: "What is the 'simple rule' for balancing your plate?",
          options: ["Half protein, half carbs", "All vegetables", "Half vegetables/fruits, quarter protein, quarter grains", "Avoid carbs completely"],
          correctAnswer: 2,
          explanation: "Fill half your plate with vegetables/fruits, one quarter with protein, and one quarter with whole grains."
        },
        {
          id: 11,
          question: "Where are complex carbohydrates found?",
          options: ["Sugar and honey", "Whole grains and beans", "Fruit juice", "Table sugar"],
          correctAnswer: 1,
          explanation: "Complex carbohydrates are found in whole grains, beans, and vegetables."
        },
        {
          id: 12,
          question: "What do proteins help build and repair?",
          options: ["Only muscles", "Muscles and tissues", "Only bones", "Only skin"],
          correctAnswer: 1,
          explanation: "Proteins help build and repair muscles and various body tissues."
        },
        {
          id: 13,
          question: "Which food combination creates a complete protein?",
          options: ["Beans + rice", "Bread + butter", "Rice + vegetables", "Fruit + yogurt"],
          correctAnswer: 0,
          explanation: "Beans and rice together provide all essential amino acids, creating a complete protein."
        },
        {
          id: 14,
          question: "Where are saturated fats mostly found?",
          options: ["Plants and fish", "Animal products", "All plant oils", "Fruits"],
          correctAnswer: 1,
          explanation: "Saturated fats are found mostly in animal products like butter, cheese, and red meat."
        },
        {
          id: 15,
          question: "What percentage of calories should come from protein?",
          options: ["5-10%", "10-35%", "40-50%", "60-70%"],
          correctAnswer: 1,
          explanation: "Protein should provide 10-35% of your total calories."
        },
        {
          id: 16,
          question: "What breaks down into glucose to power your brain?",
          options: ["Proteins", "Fats", "Carbohydrates", "Vitamins"],
          correctAnswer: 2,
          explanation: "Carbohydrates break down into glucose, which is the primary fuel for your brain."
        },
        {
          id: 17,
          question: "Which of these is NOT a function of healthy fats?",
          options: ["Vitamin absorption", "Organ protection", "Brain health", "Quick energy"],
          correctAnswer: 3,
          explanation: "Fats provide sustained energy, not quick energy. Carbohydrates provide quick energy."
        },
        {
          id: 18,
          question: "What should you choose according to practical tip #1?",
          options: ["Refined grains", "Whole grains", "White bread", "Sugary cereals"],
          correctAnswer: 1,
          explanation: "Choose whole grains over refined grains for better nutrition."
        },
        {
          id: 19,
          question: "How does fiber help you feel?",
          options: ["Hungry sooner", "Full longer", "Tired", "Energetic immediately"],
          correctAnswer: 1,
          explanation: "Fiber helps you feel full longer because it takes longer to digest."
        },
        {
          id: 20,
          question: "What is the key message about macronutrients?",
          options: ["Avoid carbohydrates", "Eat only protein", "Balance is key", "Fats are bad"],
          correctAnswer: 2,
          explanation: "All macronutrients are important, and balance is key to good nutrition."
        }
      ]
    },
    {
      id: 3,
      title: "Micronutrients and Hydration",
      content: `
# Module 3: Micronutrients and Hydration

Now let's explore the smaller but equally important nutrients: vitamins, minerals, and the most essential of all - water.

## Vitamins: Your Body's Helpers
Vitamins are organic compounds that help your body work properly. They don't provide energy, but they help release energy from food.

**Two Main Types of Vitamins:**
1. **Water-Soluble Vitamins** (Dissolve in water)
   - Not stored in your body
   - Need to be consumed regularly
   - Include: Vitamin C and B vitamins
   - Found in: Fruits, vegetables, whole grains

2. **Fat-Soluble Vitamins** (Dissolve in fat)
   - Stored in your body's fat
   - Can build up if taken in excess
   - Include: Vitamins A, D, E, K
   - Found in: Oily fish, eggs, dairy, leafy greens

**Key Vitamins and Their Functions:**
- **Vitamin A**: Good for vision and immune system
- **B Vitamins**: Help with energy production
- **Vitamin C**: Supports immune system and skin health
- **Vitamin D**: Important for bone health
- **Vitamin E**: Acts as an antioxidant
- **Vitamin K**: Helps blood clot properly

**Simple Tip**: Eat a variety of colorful fruits and vegetables to get different vitamins.

## Minerals: Building Strong Bodies
Minerals come from the earth and are absorbed by plants. We get them by eating plants or animals that ate plants.

**Major Minerals** (Needed in larger amounts):
- Calcium: Builds strong bones and teeth
- Magnesium: Supports muscle and nerve function
- Potassium: Helps control blood pressure
- Sodium: Maintains fluid balance
- Phosphorus: Works with calcium for bones

**Trace Minerals** (Needed in smaller amounts):
- Iron: Carries oxygen in blood
- Zinc: Supports immune function
- Selenium: Acts as antioxidant
- Iodine: Needed for thyroid function

**Mineral-Rich Foods**: Dairy for calcium, bananas for potassium, red meat for iron, seafood for iodine.

## Water: The Most Essential Nutrient
Water makes up about 60% of your body weight and is involved in every single body function.

**Why Water is Crucial:**
- Regulates body temperature
- Transports nutrients and oxygen
- Removes waste products
- Lubricates joints
- Protects organs and tissues

**How Much Water Do You Need?**
A simple guideline: Drink about 8 glasses (2 liters) per day. But your needs depend on:
- Your activity level
- The weather
- Your health status
- If you're pregnant or breastfeeding

**Signs You Need More Water:**
- Feeling thirsty
- Dark yellow urine
- Dry mouth
- Tiredness
- Headaches

**Good Sources of Water**:
- Plain water (best choice)
- Herbal tea
- Fruits and vegetables
- Milk
- Soup

## Antioxidants: Your Body's Protectors
Antioxidants protect your cells from damage. They're found in many vitamins and minerals.

**Top Antioxidant Sources**:
- Vitamin C: Citrus fruits, berries, bell peppers
- Vitamin E: Nuts, seeds, leafy greens
- Beta-carotene: Carrots, sweet potatoes, spinach
- Selenium: Brazil nuts, seafood, whole grains

**Color Guide**: Different colored foods provide different antioxidants:
- Red: Lycopene (tomatoes)
- Orange: Beta-carotene (carrots)
- Green: Lutein (leafy greens)
- Blue/Purple: Anthocyanins (berries)

## Putting It All Together
To get all your micronutrients:
1. **Eat the rainbow** - Include different colored fruits and vegetables
2. **Choose whole foods** - Processed foods often lose micronutrients
3. **Cook wisely** - Some cooking methods preserve nutrients better
4. **Stay hydrated** - Drink water throughout the day

**Remember**: Supplements can help, but whole foods provide nutrients in the best form for your body to use.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the two main types of vitamins?",
          options: ["Simple and complex", "Plant and animal", "Water-soluble and fat-soluble", "Major and trace"],
          correctAnswer: 2,
          explanation: "Vitamins are classified as either water-soluble or fat-soluble."
        },
        {
          id: 2,
          question: "Which vitamins are water-soluble?",
          options: ["Vitamins A, D, E, K", "Vitamin C and B vitamins", "All vitamins", "Only mineral vitamins"],
          correctAnswer: 1,
          explanation: "Vitamin C and B vitamins are water-soluble and need to be consumed regularly."
        },
        {
          id: 3,
          question: "What percentage of your body weight is water?",
          options: ["30%", "45%", "60%", "75%"],
          correctAnswer: 2,
          explanation: "Water makes up about 60% of an adult's body weight."
        },
        {
          id: 4,
          question: "Which mineral builds strong bones and teeth?",
          options: ["Iron", "Calcium", "Potassium", "Sodium"],
          correctAnswer: 1,
          explanation: "Calcium is essential for building and maintaining strong bones and teeth."
        },
        {
          id: 5,
          question: "What is the simple guideline for daily water intake?",
          options: ["4 glasses", "6 glasses", "8 glasses", "10 glasses"],
          correctAnswer: 2,
          explanation: "A common guideline is to drink about 8 glasses (2 liters) of water per day."
        },
        {
          id: 6,
          question: "Which vitamin is good for vision?",
          options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
          correctAnswer: 0,
          explanation: "Vitamin A is important for good vision and eye health."
        },
        {
          id: 7,
          question: "What do antioxidants protect your cells from?",
          options: ["Water", "Damage", "Growth", "Energy"],
          correctAnswer: 1,
          explanation: "Antioxidants protect your cells from damage caused by free radicals."
        },
        {
          id: 8,
          question: "Which mineral helps control blood pressure?",
          options: ["Calcium", "Iron", "Potassium", "Zinc"],
          correctAnswer: 2,
          explanation: "Potassium helps regulate fluid balance and control blood pressure."
        },
        {
          id: 9,
          question: "What color fruits/vegetables contain lycopene?",
          options: ["Red", "Orange", "Green", "Blue"],
          correctAnswer: 0,
          explanation: "Red foods like tomatoes contain the antioxidant lycopene."
        },
        {
          id: 10,
          question: "Where are minerals originally from?",
          options: ["Animals", "The earth", "Factory processing", "The air"],
          correctAnswer: 1,
          explanation: "Minerals come from the earth and are absorbed by plants."
        },
        {
          id: 11,
          question: "Which vitamins are stored in your body's fat?",
          options: ["Water-soluble vitamins", "Fat-soluble vitamins", "All vitamins", "No vitamins are stored"],
          correctAnswer: 1,
          explanation: "Fat-soluble vitamins (A, D, E, K) are stored in your body's fat tissues."
        },
        {
          id: 12,
          question: "What is a sign you need more water?",
          options: ["Clear urine", "Feeling energetic", "Dark yellow urine", "Normal thirst"],
          correctAnswer: 2,
          explanation: "Dark yellow urine is a sign that you may need to drink more water."
        },
        {
          id: 13,
          question: "Which mineral carries oxygen in your blood?",
          options: ["Calcium", "Iron", "Sodium", "Magnesium"],
          correctAnswer: 1,
          explanation: "Iron is essential for carrying oxygen in your red blood cells."
        },
        {
          id: 14,
          question: "What does 'eat the rainbow' mean?",
          options: ["Eat colorful candy", "Include different colored fruits/vegetables", "Only eat bright foods", "Avoid white foods"],
          correctAnswer: 1,
          explanation: "'Eat the rainbow' means including fruits and vegetables of different colors to get various nutrients."
        },
        {
          id: 15,
          question: "Which vitamin is important for bone health?",
          options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
          correctAnswer: 2,
          explanation: "Vitamin D helps your body absorb calcium and is crucial for bone health."
        },
        {
          id: 16,
          question: "What are trace minerals?",
          options: ["Minerals you can trace", "Minerals needed in smaller amounts", "The most important minerals", "Artificial minerals"],
          correctAnswer: 1,
          explanation: "Trace minerals are needed by your body in smaller amounts than major minerals."
        },
        {
          id: 17,
          question: "Which is NOT a good source of water?",
          options: ["Plain water", "Soda", "Fruits", "Herbal tea"],
          correctAnswer: 1,
          explanation: "While soda contains water, it's not a good source due to added sugar and other ingredients."
        },
        {
          id: 18,
          question: "What do B vitamins help with?",
          options: ["Vision improvement", "Energy production", "Blood clotting", "Bone building"],
          correctAnswer: 1,
          explanation: "B vitamins play a key role in helping your body produce energy from food."
        },
        {
          id: 19,
          question: "Which food is rich in calcium?",
          options: ["Bananas", "Dairy products", "Red meat", "Whole grains"],
          correctAnswer: 1,
          explanation: "Dairy products like milk, cheese, and yogurt are excellent sources of calcium."
        },
        {
          id: 20,
          question: "What should you choose over supplements when possible?",
          options: ["More supplements", "Whole foods", "Processed foods", "Energy drinks"],
          correctAnswer: 1,
          explanation: "Whole foods provide nutrients in the best form for your body to use."
        }
      ]
    },
    {
      id: 4,
      title: "Building a Balanced Diet",
      content: `
# Module 4: Building a Balanced Diet

Now that you understand nutrients, let's learn how to put them together into a balanced diet that works for you.

## What is a Balanced Diet?
A balanced diet provides all the nutrients your body needs in the right amounts. It's not about perfection - it's about consistency and variety.

**Key Principles of a Balanced Diet:**
1. **Variety** - Eat different types of foods
2. **Moderation** - Appropriate portion sizes
3. **Balance** - Right mix of nutrients
4. **Adequacy** - Meeting your nutritional needs

## The Plate Method: A Simple Guide
This visual method makes balanced eating easy:

**Your Plate Should Look Like This:**
1. **½ Plate: Fruits and Vegetables**
   - Choose a variety of colors
   - Fresh, frozen, or canned (in water)
   - Limit fruit juices (they lack fiber)

2. **¼ Plate: Protein Foods**
   - Lean meats, poultry, fish
   - Eggs, beans, lentils, tofu
   - Nuts and seeds

3. **¼ Plate: Whole Grains**
   - Brown rice, quinoa, oats
   - Whole wheat bread/pasta
   - Barley, bulgur

**Plus:**
- **Dairy or Alternatives** on the side
- **Healthy Fats** in moderation
- **Water** as your main drink

## Portion Control: Size Matters
You can eat healthy foods but still overeat. Learning portion control helps manage weight and digestion.

**Simple Portion Guides:**
- **Protein** (meat/fish): Size of your palm
- **Carbohydrates** (rice/pasta): Size of your fist
- **Cheese**: Size of your thumb
- **Nuts**: One handful
- **Butter/oil**: Size of your thumb tip

**Helpful Tips:**
- Use smaller plates and bowls
- Serve food in the kitchen, not at the table
- Eat slowly and pay attention to hunger cues
- Drink water before meals

## Meal Planning Made Easy
Planning ahead helps you make better choices and saves time and money.

**Simple 5-Step Meal Planning:**
1. **Check your schedule** - Plan quick meals for busy days
2. **Check your pantry** - Use what you already have
3. **Make a list** - Based on planned meals
4. **Prep ahead** - Wash veggies, cook grains in advance
5. **Have backups** - Keep easy options for unexpected days

**Sample Balanced Day:**
- **Breakfast**: Oatmeal with berries and nuts
- **Lunch**: Salad with grilled chicken and avocado
- **Snack**: Apple with peanut butter
- **Dinner**: Salmon with quinoa and roasted vegetables

## Understanding Food Groups
Foods are often grouped by their main nutrients:

1. **Fruits and Vegetables**
   - Provide vitamins, minerals, fiber
   - Low in calories
   - Help prevent diseases

2. **Grains**
   - Provide carbohydrates for energy
   - Whole grains have more fiber and nutrients
   - Choose whole grains at least half the time

3. **Protein Foods**
   - Build and repair tissues
   - Include plant and animal sources
   - Choose lean options

4. **Dairy/Alternatives**
   - Provide calcium for bones
   - Choose low-fat or fat-free versions
   - Alternatives: fortified soy, almond, oat milk

5. **Fats and Oils**
   - Provide essential fatty acids
   - Use in small amounts
   - Choose unsaturated fats

## Special Considerations
**Vegetarian/Vegan Diets:**
- Can be healthy with proper planning
- Need to combine plant proteins
- May need supplements (B12, iron, calcium)
- Include a variety of plant foods

**Food Allergies/Intolerances:**
- Read labels carefully
- Learn alternative ingredients
- Plan meals around safe foods
- Consult a doctor or dietitian

**Eating on a Budget:**
- Buy in-season produce
- Choose frozen fruits/vegetables
- Buy generic brands
- Cook at home more often
- Plan meals around sales

## Making It Work for You
The best diet is one you can maintain long-term. Consider:
- Your food preferences
- Your cooking skills
- Your schedule
- Your budget
- Your health goals

**Remember**: Small, consistent changes are better than drastic overhauls you can't maintain.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four key principles of a balanced diet?",
          options: ["Cheap, fast, tasty, easy", "Variety, moderation, balance, adequacy", "Organic, local, fresh, homemade", "High-protein, low-carb, fat-free, sugar-free"],
          correctAnswer: 1,
          explanation: "The four principles are variety, moderation, balance, and adequacy."
        },
        {
          id: 2,
          question: "How much of your plate should be fruits and vegetables?",
          options: ["One quarter", "One third", "One half", "Three quarters"],
          correctAnswer: 2,
          explanation: "Half your plate should be filled with fruits and vegetables."
        },
        {
          id: 3,
          question: "What size should a protein portion be?",
          options: ["Size of your palm", "Size of your fist", "Size of your thumb", "Two handfuls"],
          correctAnswer: 0,
          explanation: "A protein portion should be about the size of your palm."
        },
        {
          id: 4,
          question: "What is the first step in simple meal planning?",
          options: ["Go grocery shopping", "Check your schedule", "Cook all meals", "Buy new containers"],
          correctAnswer: 1,
          explanation: "First check your schedule to plan appropriate meals for busy vs. relaxed days."
        },
        {
          id: 5,
          question: "Which food group provides carbohydrates for energy?",
          options: ["Fruits and vegetables", "Grains", "Protein foods", "Dairy"],
          correctAnswer: 1,
          explanation: "Grains are the main food group that provides carbohydrates for energy."
        },
        {
          id: 6,
          question: "What should you choose at least half the time from the grains group?",
          options: ["White bread", "Whole grains", "Refined grains", "Sweet cereals"],
          correctAnswer: 1,
          explanation: "Choose whole grains at least half the time for more fiber and nutrients."
        },
        {
          id: 7,
          question: "What is a helpful tip for portion control?",
          options: ["Use larger plates", "Serve food at the table", "Use smaller plates", "Eat as fast as possible"],
          correctAnswer: 2,
          explanation: "Using smaller plates can help with portion control by making servings look larger."
        },
        {
          id: 8,
          question: "What might vegetarians need to supplement?",
          options: ["Vitamin C", "Vitamin B12", "Vitamin A", "All vitamins"],
          correctAnswer: 1,
          explanation: "Vegetarians, especially vegans, may need to supplement vitamin B12 as it's mainly found in animal products."
        },
        {
          id: 9,
          question: "What is the size guide for a cheese portion?",
          options: ["Size of your palm", "Size of your fist", "Size of your thumb", "Size of your hand"],
          correctAnswer: 2,
          explanation: "A cheese portion should be about the size of your thumb."
        },
        {
          id: 10,
          question: "What should be your main drink according to the plate method?",
          options: ["Soda", "Fruit juice", "Water", "Coffee"],
          correctAnswer: 2,
          explanation: "Water should be your main beverage choice with meals."
        },
        {
          id: 11,
          question: "What does the plate method recommend for whole grains?",
          options: ["No grains", "One quarter plate", "Half plate", "Whole plate"],
          correctAnswer: 1,
          explanation: "The plate method recommends one quarter of your plate be whole grains."
        },
        {
          id: 12,
          question: "What is a budget-friendly tip for eating healthy?",
          options: ["Buy pre-cut vegetables", "Eat out daily", "Buy frozen fruits/vegetables", "Buy only organic"],
          correctAnswer: 2,
          explanation: "Frozen fruits and vegetables are often more affordable and just as nutritious."
        },
        {
          id: 13,
          question: "What should you do before meals to help with portion control?",
          options: ["Skip meals", "Drink water", "Eat a snack", "Exercise heavily"],
          correctAnswer: 1,
          explanation: "Drinking water before meals can help you feel fuller and eat less."
        },
        {
          id: 14,
          question: "Which food group provides calcium for bones?",
          options: ["Grains", "Protein", "Dairy/alternatives", "Fruits"],
          correctAnswer: 2,
          explanation: "Dairy products and their alternatives are the main source of calcium for bone health."
        },
        {
          id: 15,
          question: "What is the best diet according to the module?",
          options: ["The strictest diet", "The one you can maintain", "The most expensive diet", "The celebrity-endorsed diet"],
          correctAnswer: 1,
          explanation: "The best diet is one you can maintain long-term, not a temporary strict diet."
        },
        {
          id: 16,
          question: "How much of your plate should be protein foods?",
          options: ["One eighth", "One quarter", "One third", "One half"],
          correctAnswer: 1,
          explanation: "Protein foods should take up one quarter of your plate."
        },
        {
          id: 17,
          question: "What should you limit from the fruits and vegetables group?",
          options: ["All vegetables", "Fruit juices", "Fresh fruits", "Leafy greens"],
          correctAnswer: 1,
          explanation: "Limit fruit juices as they lack fiber and can be high in sugar."
        },
        {
          id: 18,
          question: "What is a sample balanced breakfast?",
          options: ["Donut and coffee", "Oatmeal with berries and nuts", "Bacon and eggs only", "Cereal with sugar"],
          correctAnswer: 1,
          explanation: "Oatmeal with berries and nuts provides balanced nutrients for breakfast."
        },
        {
          id: 19,
          question: "What should you have for unexpected days in meal planning?",
          options: ["No food", "Takeout menus", "Easy backups", "Skip eating"],
          correctAnswer: 2,
          explanation: "Having easy backup options helps you stay on track when plans change."
        },
        {
          id: 20,
          question: "What is better than drastic diet changes?",
          options: ["No changes", "Small consistent changes", "Changing daily", "Following trends"],
          correctAnswer: 1,
          explanation: "Small, consistent changes are more sustainable than drastic overhauls."
        }
      ]
    },
    {
      id: 5,
      title: "Nutrition Through Life Stages",
      content: `
# Module 5: Nutrition Through Life Stages

Nutrition needs change throughout life. This module explores how to eat well at different ages and stages.

## Children (Ages 2-12)
Growing bodies need proper fuel for development and learning.

**Key Nutritional Needs:**
- **Protein**: For growth and development
- **Calcium and Vitamin D**: For strong bones
- **Iron**: For brain development
- **Healthy Fats**: For brain growth

**Feeding Children Well:**
- Offer a variety of foods
- Make meals colorful and fun
- Establish regular meal and snack times
- Be a role model - eat healthy yourself
- Involve children in food preparation

**Common Challenges:**
- Picky eating
- Food jags (wanting only one food)
- Slow growth spurts
- Peer influence on food choices

**Tips**: Keep trying with rejected foods - it can take 10-15 exposures before a child accepts a new food.

## Teenagers (Ages 13-19)
Rapid growth and busy schedules make nutrition particularly important.

**Increased Needs:**
- **Calories**: For growth and activity
- **Calcium**: For peak bone mass
- **Iron**: Especially important for girls
- **Protein**: For muscle development

**Special Considerations:**
- Growth spurts increase appetite
- Sports nutrition becomes important
- Body image concerns may arise
- Independence in food choices grows

**Healthy Teen Habits:**
- Don't skip breakfast
- Pack healthy snacks
- Stay hydrated, especially during sports
- Limit sugary drinks and fast food

## Adults (Ages 20-64)
Maintaining health and preventing disease become priorities.

**Focus Areas:**
- **Weight management**: Metabolism slows with age
- **Heart health**: Choose heart-healthy fats
- **Bone health**: Continue calcium and vitamin D
- **Muscle maintenance**: Adequate protein

**Lifestyle Factors:**
- Busy schedules may lead to convenience foods
- Stress can affect eating patterns
- Social eating and alcohol consumption
- Changing activity levels

**Prevention Through Nutrition:**
- Fiber for digestive health
- Antioxidants to combat aging
- Omega-3s for brain and heart health
- Probiotics for gut health

## Older Adults (65+)
Nutrition supports independence and quality of life.

**Changing Needs:**
- **Fewer calories**: Less activity, slower metabolism
- **More nutrients**: Need same or more vitamins/minerals
- **Protein**: To prevent muscle loss
- **Fiber**: For digestive regularity

**Common Challenges:**
- Decreased appetite
- Dental problems
- Medication interactions
- Difficulty shopping or cooking
- Changed sense of taste/smell

**Practical Solutions:**
- Smaller, more frequent meals
- Softer, easy-to-chew foods
- Flavor enhancement without salt
- Community meal programs
- Home delivery services

## Pregnancy and Breastfeeding
Nutrition supports both mother and baby.

**Increased Needs:**
- **Calories**: About 300 extra per day when pregnant
- **Protein**: For baby's growth
- **Folate**: Prevents birth defects
- **Iron**: Supports increased blood volume
- **Calcium**: For baby's bones

**Foods to Avoid:**
- Raw or undercooked meats/eggs
- Unpasteurized dairy
- High-mercury fish
- Alcohol
- Excess caffeine

**Breastfeeding Nutrition:**
- Need extra calories and fluids
- Continue prenatal vitamins
- Some foods may affect baby
- Stay well-hydrated

## Special Health Conditions
Certain conditions require specific nutritional approaches:

**Diabetes:**
- Consistent carbohydrate intake
- Focus on fiber-rich foods
- Regular meal timing
- Limit added sugars

**Heart Disease:**
- Reduce sodium
- Choose unsaturated fats
- Increase fiber
- Limit saturated and trans fats

**Digestive Issues:**
- Identify trigger foods
- Increase fiber gradually
- Stay hydrated
- Consider probiotic foods

## Making Transitions Smooth
When moving between life stages:
- Gradual changes work best
- Consult healthcare providers
- Listen to your body's signals
- Be patient with adjustments

**Remember**: Good nutrition at every stage helps you feel your best and live well.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What nutrient is especially important for children's brain development?",
          options: ["Calcium", "Iron", "Vitamin C", "Fiber"],
          correctAnswer: 1,
          explanation: "Iron is crucial for brain development in growing children."
        },
        {
          id: 2,
          question: "How many exposures might a child need before accepting a new food?",
          options: ["1-2", "3-5", "10-15", "20+"],
          correctAnswer: 2,
          explanation: "It can take 10-15 exposures to a new food before a child accepts it."
        },
        {
          id: 3,
          question: "What becomes especially important for teenagers in sports?",
          options: ["Skipping meals", "Hydration", "Energy drinks", "Large meals before games"],
          correctAnswer: 1,
          explanation: "Proper hydration is crucial for teenagers participating in sports."
        },
        {
          id: 4,
          question: "What slows down in adults that affects weight management?",
          options: ["Height", "Metabolism", "Taste buds", "Bone growth"],
          correctAnswer: 1,
          explanation: "Metabolism naturally slows with age, making weight management more challenging."
        },
        {
          id: 5,
          question: "What do older adults need fewer of but more nutrients?",
          options: ["Calories", "Water", "Protein", "Fiber"],
          correctAnswer: 0,
          explanation: "Older adults need fewer calories but the same or more nutrients."
        },
        {
          id: 6,
          question: "How many extra calories per day are needed during pregnancy?",
          options: ["100", "300", "500", "1000"],
          correctAnswer: 1,
          explanation: "Pregnant women need about 300 extra calories per day."
        },
        {
          id: 7,
          question: "Which vitamin prevents birth defects when taken before and during pregnancy?",
          options: ["Vitamin A", "Folate", "Vitamin C", "Vitamin D"],
          correctAnswer: 1,
          explanation: "Folate (folic acid) helps prevent neural tube birth defects."
        },
        {
          id: 8,
          question: "What should people with diabetes focus on for meal planning?",
          options: ["Irregular eating", "Consistent carbohydrate intake", "High-sugar snacks", "Skipping meals"],
          correctAnswer: 1,
          explanation: "Consistent carbohydrate intake helps manage blood sugar levels in diabetes."
        },
        {
          id: 9,
          question: "What is a common challenge for older adults' nutrition?",
          options: ["Too much appetite", "Perfect dental health", "Decreased appetite", "No cooking difficulties"],
          correctAnswer: 2,
          explanation: "Decreased appetite is a common challenge for older adults."
        },
        {
          id: 10,
          question: "What should breastfeeding mothers pay attention to?",
          options: ["Hydration", "Skipping meals", "Dieting", "Caffeine only"],
          correctAnswer: 0,
          explanation: "Breastfeeding mothers need to stay well-hydrated to support milk production."
        },
        {
          id: 11,
          question: "What should you be for children regarding healthy eating?",
          options: ["Strict enforcer", "Role model", "Never eat with them", "Give only treats"],
          correctAnswer: 1,
          explanation: "Being a healthy eating role model is one of the best ways to teach children."
        },
        {
          id: 12,
          question: "What becomes a priority for adults' nutrition?",
          options: ["Only weight loss", "Disease prevention", "Extreme dieting", "Eating whatever they want"],
          correctAnswer: 1,
          explanation: "Disease prevention becomes a priority in adult nutrition."
        },
        {
          id: 13,
          question: "What should be limited for heart health?",
          options: ["Fiber", "Unsaturated fats", "Sodium", "Vegetables"],
          correctAnswer: 2,
          explanation: "Sodium should be limited to support heart health."
        },
        {
          id: 14,
          question: "What helps with digestive issues?",
          options: ["Identifying trigger foods", "Eating anything", "Skipping fiber", "Drinking less water"],
          correctAnswer: 0,
          explanation: "Identifying and avoiding trigger foods can help manage digestive issues."
        },
        {
          id: 15,
          question: "What is important for teenagers dealing with body image concerns?",
          options: ["Encouraging dieting", "Healthy eating without fixation", "Ignoring the issue", "Comparing to others"],
          correctAnswer: 1,
          explanation: "Promoting healthy eating without fixation on weight is important for teens."
        },
        {
          id: 16,
          question: "What can help older adults with decreased appetite?",
          options: ["Large meals twice daily", "Smaller, more frequent meals", "Skipping meals", "Only liquid diets"],
          correctAnswer: 1,
          explanation: "Smaller, more frequent meals can help older adults meet nutritional needs."
        },
        {
          id: 17,
          question: "What should pregnant women avoid?",
          options: ["All fish", "Raw or undercooked meats", "All dairy", "All fruits"],
          correctAnswer: 1,
          explanation: "Pregnant women should avoid raw or undercooked meats due to infection risk."
        },
        {
          id: 18,
          question: "What is a good approach when transitioning between life stages?",
          options: ["Drastic changes", "Gradual changes", "No changes", "Following fads"],
          correctAnswer: 1,
          explanation: "Gradual changes work best when transitioning between life stages."
        },
        {
          id: 19,
          question: "What do teenagers need for peak bone mass?",
          options: ["Less calcium", "More calcium", "No calcium", "Calcium only from supplements"],
          correctAnswer: 1,
          explanation: "Teenagers need adequate calcium to build peak bone mass for life."
        },
        {
          id: 20,
          question: "What should you do when dealing with special health conditions?",
          options: ["Self-treat only", "Consult healthcare providers", "Ignore medical advice", "Try every new trend"],
          correctAnswer: 1,
          explanation: "Always consult healthcare providers when managing nutrition for health conditions."
        }
      ]
    },
    {
      id: 6,
      title: "Practical Nutrition Skills",
      content: `
# Module 6: Practical Nutrition Skills

This final module gives you practical skills to apply your nutrition knowledge in daily life.

## Smart Grocery Shopping
What you buy determines what you eat. Smart shopping sets you up for success.

**Before You Shop:**
1. **Make a list** - Based on your meal plan
2. **Eat first** - Never shop hungry
3. **Check sales** - But only buy what you'll use
4. **Set a budget** - And stick to it

**Navigating the Store:**
- **Shop the perimeter** - Fresh foods are usually here
- **Read labels carefully** - Don't be fooled by marketing
- **Compare unit prices** - Larger isn't always cheaper
- **Choose seasonal produce** - Better flavor and price

**Label Reading Skills:**
- Check serving size first
- Look at ingredients list
- Watch for added sugars
- Compare similar products
- Be skeptical of health claims

**Shopping Lists by Section:**
- **Produce**: Fresh fruits and vegetables
- **Protein**: Meat, fish, eggs, beans
- **Dairy**: Milk, yogurt, cheese
- **Grains**: Whole grain bread, rice, pasta
- **Pantry**: Canned goods, oils, spices

## Cooking Techniques That Preserve Nutrients
How you cook affects nutrition value.

**Best Methods:**
1. **Steaming** - Preserves vitamins in vegetables
2. **Grilling/Broiling** - Lets fat drip away from meat
3. **Stir-frying** - Quick cooking preserves nutrients
4. **Baking/Roasting** - No added water means less nutrient loss
5. **Microwaving** - Quick cooking with little water

**Methods to Use Less:**
- Deep frying (adds unhealthy fats)
- Boiling (nutrients leach into water)
- Overcooking (destroys nutrients)

**Tips for Nutrient Preservation:**
- Cook vegetables until just tender
- Use cooking water in soups or sauces
- Don't peel vegetables unnecessarily
- Store produce properly

## Eating Well When Dining Out
You can make healthy choices even when not cooking at home.

**Before You Go:**
- Check the menu online
- Eat a small healthy snack
- Decide what you'll order

**At the Restaurant:**
- Ask how dishes are prepared
- Request sauces/dressings on the side
- Choose grilled, baked, or steamed options
- Ask for substitutions (salad instead of fries)
- Share large portions

**Menu Decoder:**
- **Choose more**: Grilled, baked, steamed, roasted
- **Choose less**: Fried, crispy, creamy, breaded, buttery
- **Watch portion sizes** - Restaurant servings are often large
- **Box half immediately** for another meal

## Healthy Snacking Strategies
Smart snacking helps maintain energy and prevents overeating at meals.

**Good Snack Qualities:**
- Contains protein or fiber
- Portion-controlled
- Minimally processed
- Satisfying

**Smart Snack Ideas:**
- Apple with peanut butter
- Greek yogurt with berries
- Handful of nuts
- Vegetable sticks with hummus
- Hard-boiled egg
- Whole grain crackers with cheese

**Timing Matters:**
- Snack when genuinely hungry
- Don't snack out of boredom
- Plan snacks 2-3 hours between meals
- Drink water first - thirst can feel like hunger

## Reading and Understanding Research
Nutrition information is everywhere. Learn to evaluate it critically.

**Questions to Ask:**
- Who is sharing this information?
- What are their qualifications?
- Is there research to support claims?
- Who funded the research?
- Is this a single study or consistent findings?

**Red Flags in Nutrition Claims:**
- "Miracle cure" or "secret"
- "Detox" or "cleanse" promises
- Quick fixes or extreme results
- Fear-mongering about foods
- Selling expensive supplements

**Reliable Sources:**
- Registered dietitians
- Government health agencies
- Academic institutions
- Peer-reviewed journals

## Creating Sustainable Habits
Lasting change comes from small, consistent habits.

**Habit-Forming Tips:**
1. **Start small** - One change at a time
2. **Be specific** - "Eat vegetables at lunch" not "Eat healthier"
3. **Track progress** - Use a simple journal
4. **Celebrate successes** - Non-food rewards
5. **Be patient** - Habits take time to form

**Common Pitfalls to Avoid:**
- All-or-nothing thinking
- Comparing yourself to others
- Trying to change everything at once
- Giving up after setbacks

**Building a Support System:**
- Share goals with supportive people
- Find an accountability partner
- Join a healthy cooking class
- Follow inspiring but realistic social media

## Putting It All Together
Your nutrition journey continues beyond this course. Remember:

**Key Takeaways:**
1. Nutrition is about nourishment, not deprivation
2. All foods can fit in a balanced diet
3. Progress matters more than perfection
4. Your needs will change over time
5. You have the knowledge to make informed choices

**Next Steps:**
- Review areas where you want to improve
- Set one or two specific goals
- Practice your new skills regularly
- Continue learning and adjusting

**Final Thought**: Good nutrition is a journey, not a destination. Enjoy the process of learning and improving!
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you do before grocery shopping?",
          options: ["Shop hungry", "Make a list", "Buy everything on sale", "Skip planning"],
          correctAnswer: 1,
          explanation: "Always make a shopping list based on your meal plan before going to the store."
        },
        {
          id: 2,
          question: "Where are fresh foods usually located in grocery stores?",
          options: ["Only in frozen section", "The perimeter", "Middle aisles only", "Near checkout"],
          correctAnswer: 1,
          explanation: "Fresh foods like produce, meat, and dairy are typically located around the store's perimeter."
        },
        {
          id: 3,
          question: "Which cooking method best preserves vitamins in vegetables?",
          options: ["Boiling", "Deep frying", "Steaming", "Overcooking"],
          correctAnswer: 2,
          explanation: "Steaming preserves vitamins better than methods that use water or high heat for long periods."
        },
        {
          id: 4,
          question: "What should you request at restaurants to control portions?",
          options: ["Extra-large portions", "Sauces/dressings on the side", "Double everything", "No substitutions"],
          correctAnswer: 1,
          explanation: "Requesting sauces and dressings on the side helps you control how much you use."
        },
        {
          id: 5,
          question: "What makes a good snack?",
          options: ["Only chocolate", "Contains protein or fiber", "Large portions", "Always sweet"],
          correctAnswer: 1,
          explanation: "Good snacks contain protein or fiber to help you feel satisfied until your next meal."
        },
        {
          id: 6,
          question: "What is a red flag in nutrition claims?",
          options: ["Peer-reviewed research", "Miracle cure promises", "Registered dietitian advice", "Government recommendations"],
          correctAnswer: 1,
          explanation: "'Miracle cure' promises are red flags - real nutrition doesn't work that way."
        },
        {
          id: 7,
          question: "What is a good habit-forming tip?",
          options: ["Change everything at once", "Start small", "Compare to others", "Expect instant results"],
          correctAnswer: 1,
          explanation: "Starting with small changes makes new habits more sustainable."
        },
        {
          id: 8,
          question: "What should you check first on food labels?",
          options: ["Marketing claims", "Serving size", "Expiration date", "Brand name"],
          correctAnswer: 1,
          explanation: "Always check serving size first because all other information is based on it."
        },
        {
          id: 9,
          question: "What cooking method should you use less?",
          options: ["Steaming", "Deep frying", "Grilling", "Stir-frying"],
          correctAnswer: 1,
          explanation: "Deep frying adds unhealthy fats and should be used less frequently."
        },
        {
          id: 10,
          question: "What should you do with large restaurant portions?",
          options: ["Eat everything", "Box half immediately", "Take a little bite", "Share with no one"],
          correctAnswer: 1,
          explanation: "Boxing half immediately helps with portion control and provides another meal."
        },
        {
          id: 11,
          question: "When should you snack?",
          options: ["Constantly", "When genuinely hungry", "Only at night", "Instead of meals"],
          correctAnswer: 1,
          explanation: "Snack when you're genuinely hungry, not out of boredom or habit."
        },
        {
          id: 12,
          question: "Who are reliable sources of nutrition information?",
          options: ["Celebrity endorsements", "Registered dietitians", "Social media influencers", "Magazine ads"],
          correctAnswer: 1,
          explanation: "Registered dietitians are qualified professionals who provide evidence-based nutrition information."
        },
        {
          id: 13,
          question: "What should you avoid in habit formation?",
          options: ["All-or-nothing thinking", "Small steps", "Tracking progress", "Celebrating successes"],
          correctAnswer: 0,
          explanation: "All-or-nothing thinking can derail progress - focus on consistency instead."
        },
        {
          id: 14,
          question: "What should you compare when shopping?",
          options: ["Only prices", "Unit prices", "Package colors", "Brand popularity"],
          correctAnswer: 1,
          explanation: "Comparing unit prices (price per ounce/gram) helps you find the best value."
        },
        {
          id: 15,
          question: "What cooking tip preserves nutrients?",
          options: ["Overcook vegetables", "Cook vegetables until just tender", "Peel all vegetables", "Boil for long time"],
          correctAnswer: 1,
          explanation: "Cooking vegetables until just tender-crisp preserves more nutrients."
        },
        {
          id: 16,
          question: "What should you do before dining out?",
          options: ["Starve all day", "Check menu online", "Don't think about it", "Eat a huge meal"],
          correctAnswer: 1,
          explanation: "Checking the menu online helps you make healthier choices in advance."
        },
        {
          id: 17,
          question: "How can you tell if you're thirsty instead of hungry?",
          options: ["Ignore both", "Drink water first", "Eat first", "Wait an hour"],
          correctAnswer: 1,
          explanation: "Drink water first - sometimes thirst feels like hunger."
        },
        {
          id: 18,
          question: "What should you be skeptical of on food packages?",
          options: ["Nutrition facts", "Ingredients list", "Health claims", "Serving size"],
          correctAnswer: 2,
          explanation: "Be skeptical of marketing health claims - always check the actual nutrition information."
        },
        {
          id: 19,
          question: "What is a good support system strategy?",
          options: ["Keep goals secret", "Find accountability partner", "Go it alone", "Listen only to critics"],
          correctAnswer: 1,
          explanation: "An accountability partner can provide support and motivation for your goals."
        },
        {
          id: 20,
          question: "What is nutrition mainly about according to the final module?",
          options: ["Deprivation", "Nourishment", "Perfection", "Following strict rules"],
          correctAnswer: 1,
          explanation: "Nutrition is about nourishing your body, not depriving it of foods you enjoy."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Nutrition Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Nutrition Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "How many main types of nutrients does your body need?",
        options: ["Three", "Six", "Nine", "Twelve"],
        correctAnswer: 1,
        explanation: "There are six main types of nutrients: carbohydrates, proteins, fats, vitamins, minerals, and water.",
        module: 1
      },
      {
        id: 2,
        question: "Which nutrient provides 9 calories per gram?",
        options: ["Carbohydrates", "Protein", "Fat", "Vitamins"],
        correctAnswer: 2,
        explanation: "Fat provides 9 calories per gram, more than twice the calories of carbohydrates or protein.",
        module: 1
      },
      {
        id: 3,
        question: "What are the three macronutrients?",
        options: ["Vitamins, minerals, water", "Carbohydrates, proteins, fats", "Sugar, salt, fat", "Calcium, iron, potassium"],
        correctAnswer: 1,
        explanation: "The three macronutrients are carbohydrates, proteins, and fats.",
        module: 2
      },
      {
        id: 4,
        question: "Which type of carbohydrate provides quick energy?",
        options: ["Complex carbs", "Simple carbs", "Fiber", "Starch"],
        correctAnswer: 1,
        explanation: "Simple carbohydrates break down quickly and provide fast energy.",
        module: 2
      },
      {
        id: 5,
        question: "What are the two main types of vitamins?",
        options: ["Simple and complex", "Plant and animal", "Water-soluble and fat-soluble", "Major and trace"],
        correctAnswer: 2,
        explanation: "Vitamins are classified as either water-soluble or fat-soluble.",
        module: 3
      },
      {
        id: 6,
        question: "What percentage of your body weight is water?",
        options: ["30%", "45%", "60%", "75%"],
        correctAnswer: 2,
        explanation: "Water makes up about 60% of an adult's body weight.",
        module: 3
      },
      {
        id: 7,
        question: "What are the four key principles of a balanced diet?",
        options: ["Cheap, fast, tasty, easy", "Variety, moderation, balance, adequacy", "Organic, local, fresh, homemade", "High-protein, low-carb, fat-free, sugar-free"],
        correctAnswer: 1,
        explanation: "The four principles are variety, moderation, balance, and adequacy.",
        module: 4
      },
      {
        id: 8,
        question: "How much of your plate should be fruits and vegetables?",
        options: ["One quarter", "One third", "One half", "Three quarters"],
        correctAnswer: 2,
        explanation: "Half your plate should be filled with fruits and vegetables.",
        module: 4
      },
      {
        id: 9,
        question: "What nutrient is especially important for children's brain development?",
        options: ["Calcium", "Iron", "Vitamin C", "Fiber"],
        correctAnswer: 1,
        explanation: "Iron is crucial for brain development in growing children.",
        module: 5
      },
      {
        id: 10,
        question: "How many extra calories per day are needed during pregnancy?",
        options: ["100", "300", "500", "1000"],
        correctAnswer: 1,
        explanation: "Pregnant women need about 300 extra calories per day.",
        module: 5
      },
      {
        id: 11,
        question: "What should you do before grocery shopping?",
        options: ["Shop hungry", "Make a list", "Buy everything on sale", "Skip planning"],
        correctAnswer: 1,
        explanation: "Always make a shopping list based on your meal plan before going to the store.",
        module: 6
      },
      {
        id: 12,
        question: "Which cooking method best preserves vitamins in vegetables?",
        options: ["Boiling", "Deep frying", "Steaming", "Overcooking"],
        correctAnswer: 2,
        explanation: "Steaming preserves vitamins better than methods that use water or high heat.",
        module: 6
      },
      {
        id: 13,
        question: "What does BMR stand for?",
        options: ["Basic Metabolic Rate", "Basal Metabolic Rate", "Body Mass Ratio", "Basic Mineral Requirement"],
        correctAnswer: 1,
        explanation: "BMR stands for Basal Metabolic Rate - energy for basic body functions.",
        module: 1
      },
      {
        id: 14,
        question: "What is fiber?",
        options: ["A type of protein", "A digestible carbohydrate", "An indigestible carbohydrate", "A type of fat"],
        correctAnswer: 2,
        explanation: "Fiber is a type of complex carbohydrate that your body cannot digest.",
        module: 2
      },
      {
        id: 15,
        question: "Which mineral builds strong bones and teeth?",
        options: ["Iron", "Calcium", "Potassium", "Sodium"],
        correctAnswer: 1,
        explanation: "Calcium is essential for building and maintaining strong bones and teeth.",
        module: 3
      },
      {
        id: 16,
        question: "What size should a protein portion be?",
        options: ["Size of your palm", "Size of your fist", "Size of your thumb", "Two handfuls"],
        correctAnswer: 0,
        explanation: "A protein portion should be about the size of your palm.",
        module: 4
      },
      {
        id: 17,
        question: "What slows down in adults that affects weight management?",
        options: ["Height", "Metabolism", "Taste buds", "Bone growth"],
        correctAnswer: 1,
        explanation: "Metabolism naturally slows with age, affecting weight management.",
        module: 5
      },
      {
        id: 18,
        question: "What should you request at restaurants to control portions?",
        options: ["Extra-large portions", "Sauces/dressings on the side", "Double everything", "No substitutions"],
        correctAnswer: 1,
        explanation: "Requesting sauces on the side helps control how much you use.",
        module: 6
      },
      {
        id: 19,
        question: "Which vitamins need fat for absorption?",
        options: ["B vitamins", "Vitamin C", "Vitamins A, D, E, K", "All vitamins"],
        correctAnswer: 2,
        explanation: "Fat-soluble vitamins A, D, E, and K need fat to be absorbed properly.",
        module: 2
      },
      {
        id: 20,
        question: "What is the simple guideline for daily water intake?",
        options: ["4 glasses", "6 glasses", "8 glasses", "10 glasses"],
        correctAnswer: 2,
        explanation: "A common guideline is to drink about 8 glasses (2 liters) of water per day.",
        module: 3
      },
      {
        id: 21,
        question: "What is the first step in simple meal planning?",
        options: ["Go grocery shopping", "Check your schedule", "Cook all meals", "Buy new containers"],
        correctAnswer: 1,
        explanation: "First check your schedule to plan appropriate meals.",
        module: 4
      },
      {
        id: 22,
        question: "How many exposures might a child need before accepting a new food?",
        options: ["1-2", "3-5", "10-15", "20+"],
        correctAnswer: 2,
        explanation: "It can take 10-15 exposures to a new food before a child accepts it.",
        module: 5
      },
      {
        id: 23,
        question: "What makes a good snack?",
        options: ["Only chocolate", "Contains protein or fiber", "Large portions", "Always sweet"],
        correctAnswer: 1,
        explanation: "Good snacks contain protein or fiber to help you feel satisfied.",
        module: 6
      },
      {
        id: 24,
        question: "What should you look at first on a food label?",
        options: ["Calories", "Serving Size", "Ingredients List", "% Daily Value"],
        correctAnswer: 1,
        explanation: "Always check serving size first because all other information is based on it.",
        module: 1
      },
      {
        id: 25,
        question: "Which fats should you avoid?",
        options: ["Unsaturated fats", "Saturated fats", "Trans fats", "All fats"],
        correctAnswer: 2,
        explanation: "Trans fats are artificial and harmful to heart health.",
        module: 2
      },
      {
        id: 26,
        question: "What do antioxidants protect your cells from?",
        options: ["Water", "Damage", "Growth", "Energy"],
        correctAnswer: 1,
        explanation: "Antioxidants protect cells from damage caused by free radicals.",
        module: 3
      },
      {
        id: 27,
        question: "What should you choose at least half the time from grains?",
        options: ["White bread", "Whole grains", "Refined grains", "Sweet cereals"],
        correctAnswer: 1,
        explanation: "Choose whole grains at least half the time for more fiber.",
        module: 4
      },
      {
        id: 28,
        question: "What is a common challenge for older adults' nutrition?",
        options: ["Too much appetite", "Perfect dental health", "Decreased appetite", "No cooking difficulties"],
        correctAnswer: 2,
        explanation: "Decreased appetite is common in older adults.",
        module: 5
      },
      {
        id: 29,
        question: "What is a red flag in nutrition claims?",
        options: ["Peer-reviewed research", "Miracle cure promises", "Registered dietitian advice", "Government recommendations"],
        correctAnswer: 1,
        explanation: "'Miracle cure' promises are red flags in nutrition claims.",
        module: 6
      },
      {
        id: 30,
        question: "How many calories does protein provide per gram?",
        options: ["2", "4", "7", "9"],
        correctAnswer: 1,
        explanation: "Protein provides 4 calories per gram.",
        module: 1
      },
      {
        id: 31,
        question: "What percentage of calories should come from carbohydrates?",
        options: ["10-20%", "20-35%", "45-65%", "70-80%"],
        correctAnswer: 2,
        explanation: "Carbs should provide 45-65% of total calories.",
        module: 2
      },
      {
        id: 32,
        question: "What is a sign you need more water?",
        options: ["Clear urine", "Feeling energetic", "Dark yellow urine", "Normal thirst"],
        correctAnswer: 2,
        explanation: "Dark yellow urine indicates possible dehydration.",
        module: 3
      },
      {
        id: 33,
        question: "What should be your main drink according to plate method?",
        options: ["Soda", "Fruit juice", "Water", "Coffee"],
        correctAnswer: 2,
        explanation: "Water should be your main beverage choice.",
        module: 4
      },
      {
        id: 34,
        question: "What should pregnant women avoid?",
        options: ["All fish", "Raw or undercooked meats", "All dairy", "All fruits"],
        correctAnswer: 1,
        explanation: "Pregnant women should avoid raw meats due to infection risk.",
        module: 5
      },
      {
        id: 35,
        question: "What is a good habit-forming tip?",
        options: ["Change everything at once", "Start small", "Compare to others", "Expect instant results"],
        correctAnswer: 1,
        explanation: "Starting with small changes makes habits more sustainable.",
        module: 6
      },
      {
        id: 36,
        question: "What is nutrition mainly about?",
        options: ["Deprivation", "Nourishment", "Perfection", "Following strict rules"],
        correctAnswer: 1,
        explanation: "Nutrition is about nourishing your body, not depriving it.",
        module: 6
      },
      {
        id: 37,
        question: "What do older adults need fewer of?",
        options: ["Calories", "Water", "Protein", "Fiber"],
        correctAnswer: 0,
        explanation: "Older adults need fewer calories but same or more nutrients.",
        module: 5
      },
      {
        id: 38,
        question: "What should you check first on food labels?",
        options: ["Marketing claims", "Serving size", "Expiration date", "Brand name"],
        correctAnswer: 1,
        explanation: "Always check serving size first on food labels.",
        module: 6
      },
      {
        id: 39,
        question: "What is the key to macronutrients?",
        options: ["Avoid carbohydrates", "Eat only protein", "Balance is key", "Fats are bad"],
        correctAnswer: 2,
        explanation: "Balance is key with all macronutrients.",
        module: 2
      },
      {
        id: 40,
        question: "What is the best diet for long-term success?",
        options: ["The strictest diet", "The one you can maintain", "The most expensive", "The celebrity-endorsed"],
        correctAnswer: 1,
        explanation: "The best diet is one you can maintain long-term.",
        module: 4
      }
    ]
  }
};

export default nutritionCertificateCourse;
