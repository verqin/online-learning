// Weight Management (Certificate) Course Data
// Complete with 6 modules, quizzes, and final exam

export const weightManagementCertificate = {
  // COURSE METADATA
  id: "weight-management-certificate",
  title: "Weight Management (Certificate)",
  description: "Learn practical strategies for healthy weight management through nutrition, exercise, behavior change, and sustainable lifestyle habits. Understand the science behind weight loss and maintenance.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⚖️",
  badge: "Certificate",
  category: "Health & Wellness",
  
  // MODULES ARRAY
  modules: [
    {
      id: 1,
      title: "Understanding Weight Management Basics",
      completed: false,
      content: `# Module 1: Understanding Weight Management Basics

## Welcome to Your Weight Management Journey

This module introduces you to the fundamental concepts of weight management. You'll learn what weight management really means and why it's important for your health and well-being.

### What is Weight Management?

**Weight management** is the process of adopting long-term lifestyle strategies to achieve and maintain a healthy weight. It's not about quick fixes or extreme diets, but about:

**Balanced Approach** that includes:
- Healthy eating patterns you can maintain
- Regular physical activity you enjoy
- Positive behavior changes
- Sustainable habits for life

**Realistic Goals** that are:
- Specific and measurable
- Achievable and reasonable
- Time-bound but flexible
- Focused on health, not just numbers

### Understanding Body Weight

Your body weight is influenced by many factors:

**Energy Balance** is the key concept:
- Calories in (from food and drinks)
- Calories out (through metabolism and activity)
- When calories in equal calories out = weight maintenance
- When calories in exceed calories out = weight gain
- When calories out exceed calories in = weight loss

**Metabolism Basics:**
- Basal metabolic rate (BMR): Calories your body needs at rest
- Physical activity: Calories burned through movement
- Thermic effect of food: Calories burned digesting food
- Non-exercise activity thermogenesis (NEAT): Daily movement calories

### Healthy Weight Ranges

Understanding what's healthy for you:

**Body Mass Index (BMI)** is a screening tool that:
- Calculates weight relative to height
- Provides general weight categories
- Has limitations (doesn't measure body fat directly)
- Should be considered with other factors

**BMI Categories:**
- Underweight: Below 18.5
- Healthy weight: 18.5 to 24.9
- Overweight: 25 to 29.9
- Obese: 30 and above

**Waist Circumference** matters because:
- Belly fat increases health risks
- Measure at narrowest point between ribs and hips
- Healthy is less than 35 inches for women, 40 for men
- Combined with BMI gives better picture

### Why Weight Management Matters

Maintaining healthy weight helps prevent:

**Health Problems** like:
- Type 2 diabetes
- High blood pressure
- Heart disease
- Certain cancers
- Sleep apnea

**Quality of Life** improvements:
- More energy and stamina
- Better mobility and flexibility
- Improved mood and mental health
- Increased confidence and self-esteem

### Common Weight Management Myths

Let's clear up misunderstandings:

**Myth: Carbs make you fat**
Truth: Excess calories from any source can lead to weight gain. Healthy carbs are important for energy.

**Myth: You must exercise intensely to lose weight**
Truth: Moderate activity combined with diet changes works well for most people.

**Myth: All calories are equal**
Truth: While calorie balance matters, food quality affects hunger, metabolism, and health.

**Myth: Weight loss should be rapid**
Truth: Slow, steady weight loss (1-2 pounds per week) is more sustainable.

### Setting Yourself Up for Success

Create a supportive environment:

**Mindset Matters:**
- Focus on health, not perfection
- Celebrate non-scale victories
- Be patient with yourself
- View setbacks as learning opportunities

**Support Systems:**
- Share goals with supportive people
- Consider joining a group or finding a buddy
- Seek professional guidance if needed
- Use positive self-talk

**Environment Preparation:**
- Stock healthy foods at home
- Remove temptation triggers if helpful
- Create spaces for physical activity
- Establish routines that support your goals

### Tracking Your Progress

Monitor changes effectively:

**Measurements Beyond Weight:**
- How clothes fit
- Energy levels
- Sleep quality
- Mood improvements
- Physical abilities

**Journaling Benefits:**
- Track food intake and activity
- Record feelings and challenges
- Identify patterns and triggers
- Celebrate successes

**Regular Check-ins:**
- Weekly weigh-ins if helpful
- Monthly measurements
- Quarterly health markers
- Adjust goals as needed

### Sustainable Approach

Think long-term:

**Lifestyle, Not Diet:**
- Choose changes you can maintain
- Allow for flexibility
- Include foods you enjoy
- Balance nutrition and pleasure

**Gradual Changes:**
- Start with one or two changes
- Build on successes
- Add new habits slowly
- Be consistent rather than perfect

**Self-Compassion:**
- Everyone has challenging days
- Progress isn't always linear
- Focus on overall direction
- Be kind to yourself

### Your Starting Point

Begin with assessment:

**Current Habits Review:**
- What eating patterns work well?
- What physical activities do you enjoy?
- What challenges do you face?
- What support do you have?

**Readiness Check:**
- Are you ready to make changes?
- What's your motivation?
- What concerns do you have?
- What resources do you need?

**First Small Steps:**
- Choose one healthy habit to start
- Set a specific, achievable goal
- Plan for potential obstacles
- Decide how to track progress

Remember: Weight management is a journey, not a destination. Every positive choice you make contributes to better health and well-being. Start where you are, use what you have, and do what you can.`,
      
      quiz: [
        {
          id: 1,
          question: "What is weight management?",
          options: [
            "Adopting long-term lifestyle strategies for healthy weight",
            "Quick fixes and extreme dieting",
            "Only counting calories strictly",
            "Exercising intensely every day"
          ],
          correctAnswer: 0,
          explanation: "Weight management involves sustainable lifestyle strategies including balanced eating, regular activity, and behavior changes."
        },
        {
          id: 2,
          question: "What is energy balance in weight management?",
          options: [
            "Relationship between calories consumed and calories burned",
            "Eating equal amounts of all food groups",
            "Balancing work and exercise time",
            "Equalizing protein and carbohydrate intake"
          ],
          correctAnswer: 0,
          explanation: "Energy balance compares calories from food/drinks (calories in) with calories burned through metabolism/activity (calories out)."
        },
        {
          id: 3,
          question: "What is basal metabolic rate (BMR)?",
          options: [
            "Calories your body needs at complete rest",
            "Calories burned during intense exercise",
            "Energy used to digest food",
            "Calories from daily movement"
          ],
          correctAnswer: 0,
          explanation: "BMR is the calories your body needs to maintain basic functions like breathing and circulation while at rest."
        },
        {
          id: 4,
          question: "What BMI range is considered healthy weight?",
          options: [
            "18.5 to 24.9",
            "Below 18.5",
            "25 to 29.9",
            "30 and above"
          ],
          correctAnswer: 0,
          explanation: "BMI of 18.5 to 24.9 is considered healthy weight range for most adults."
        },
        {
          id: 5,
          question: "Why is waist circumference important?",
          options: [
            "Belly fat increases health risks independent of weight",
            "It determines clothing size accurately",
            "It shows muscle mass better than weight",
            "It's the only measurement that matters"
          ],
          correctAnswer: 0,
          explanation: "Waist circumference measures abdominal fat, which increases risk for heart disease and diabetes regardless of total weight."
        },
        {
          id: 6,
          question: "What is a sustainable rate of weight loss?",
          options: [
            "1-2 pounds per week",
            "5-10 pounds per week",
            "As fast as possible",
            "Weight shouldn't change weekly"
          ],
          correctAnswer: 0,
          explanation: "Slow, steady weight loss of 1-2 pounds per week is more sustainable and healthier than rapid loss."
        },
        {
          id: 7,
          question: "What mindset supports successful weight management?",
          options: [
            "Focus on health, not perfection",
            "Achieve perfect eating every day",
            "Never allow any treats",
            "Exercise intensely daily"
          ],
          correctAnswer: 0,
          explanation: "Focusing on overall health rather than perfection allows flexibility and sustainability in weight management."
        },
        {
          id: 8,
          question: "What should you track besides weight?",
          options: [
            "How clothes fit and energy levels",
            "Only daily calorie intake",
            "Exactly how many steps taken",
            "Perfect food diary completion"
          ],
          correctAnswer: 0,
          explanation: "Tracking how clothes fit, energy levels, mood, and physical abilities provides a fuller picture of progress."
        },
        {
          id: 9,
          question: "What approach is most sustainable?",
          options: [
            "Lifestyle changes you can maintain long-term",
            "Strict diet until goal weight",
            "Eliminating all favorite foods",
            "Intense daily workouts only"
          ],
          correctAnswer: 0,
          explanation: "Sustainable weight management involves lifestyle changes that can be maintained, not temporary restrictions."
        },
        {
          id: 10,
          question: "What is a good first step in weight management?",
          options: [
            "Choose one healthy habit to start with",
            "Completely overhaul your diet",
            "Join expensive gym immediately",
            "Buy all new workout clothes"
          ],
          correctAnswer: 0,
          explanation: "Starting with one small, achievable change builds confidence and establishes foundation for additional changes."
        },
        {
          id: 11,
          question: "What happens when calories in exceed calories out?",
          options: [
            "Weight gain occurs",
            "Weight loss occurs",
            "Weight stays the same",
            "Metabolism speeds up"
          ],
          correctAnswer: 0,
          explanation: "When you consume more calories than you burn, the excess is stored as fat, leading to weight gain."
        },
        {
          id: 12,
          question: "What does NEAT stand for?",
          options: [
            "Non-exercise activity thermogenesis",
            "Nutritional energy assessment tool",
            "New exercise adaptation technique",
            "Natural eating awareness training"
          ],
          correctAnswer: 0,
          explanation: "NEAT refers to calories burned through daily movements like walking, fidgeting, and household chores."
        },
        {
          id: 13,
          question: "What health problem can weight management help prevent?",
          options: [
            "Type 2 diabetes",
            "Common cold",
            "Broken bones",
            "Seasonal allergies"
          ],
          correctAnswer: 0,
          explanation: "Maintaining healthy weight reduces risk for type 2 diabetes, along with heart disease and other conditions."
        },
        {
          id: 14,
          question: "What is true about carbohydrates and weight?",
          options: [
            "Excess calories from any source can cause weight gain",
            "All carbs automatically make you gain weight",
            "You must eliminate carbs to lose weight",
            "Carbs have no effect on weight"
          ],
          correctAnswer: 0,
          explanation: "Excess calories, whether from carbs, protein, or fat, can lead to weight gain. Healthy carbs are important for energy."
        },
        {
          id: 15,
          question: "What helps create a supportive environment?",
          options: [
            "Stocking healthy foods at home",
            "Keeping junk food visible",
            "Avoiding all social events",
            "Eating only pre-packaged meals"
          ],
          correctAnswer: 0,
          explanation: "Keeping healthy foods available and removing temptation triggers helps support weight management goals."
        },
        {
          id: 16,
          question: "What does journaling help with?",
          options: [
            "Identifying patterns and triggers",
            "Perfect record keeping only",
            "Counting every single calorie",
            "Measuring exact portion sizes"
          ],
          correctAnswer: 0,
          explanation: "Journaling helps identify eating patterns, emotional triggers, and progress beyond just numbers."
        },
        {
          id: 17,
          question: "What is self-compassion in weight management?",
          options: [
            "Being kind to yourself during challenges",
            "Giving up after small setbacks",
            "Never holding yourself accountable",
            "Making excuses for all behaviors"
          ],
          correctAnswer: 0,
          explanation: "Self-compassion means treating yourself with kindness during challenges while maintaining commitment to goals."
        },
        {
          id: 18,
          question: "What should realistic goals be?",
          options: [
            "Specific, measurable, achievable, and time-bound",
            "Vague and general intentions",
            "Extremely challenging to motivate you",
            "Based only on others' achievements"
          ],
          correctAnswer: 0,
          explanation: "Effective goals are specific, measurable, achievable, relevant, and time-bound (SMART)."
        },
        {
          id: 19,
          question: "What is the thermic effect of food?",
          options: [
            "Calories burned digesting and processing food",
            "Heat generated during cooking",
            "Energy from spicy foods",
            "Temperature of food when eaten"
          ],
          correctAnswer: 0,
          explanation: "Thermic effect of food is the energy used to digest, absorb, and process nutrients from food."
        },
        {
          id: 20,
          question: "What does readiness for change involve?",
          options: [
            "Assessing motivation and identifying resources needed",
            "Waiting until you feel perfectly ready",
            "Only starting when everything is ideal",
            "Following others' timing for you"
          ],
          correctAnswer: 0,
          explanation: "Readiness involves assessing your motivation, identifying potential challenges, and gathering needed resources."
        }
      ]
    },
    {
      id: 2,
      title: "Nutrition Fundamentals for Weight Management",
      completed: false,
      content: `# Module 2: Nutrition Fundamentals for Weight Management

## Building Healthy Eating Habits

This module covers essential nutrition knowledge for effective weight management. You'll learn how to make informed food choices that support your weight goals while providing proper nourishment.

### Understanding Macronutrients

**Carbohydrates** provide energy:
- Simple carbs: Sugars (fruit, milk, sweets)
- Complex carbs: Starches and fiber (grains, vegetables)
- Choose whole grains, fruits, vegetables
- Limit added sugars and refined grains

**Proteins** build and repair:
- Animal sources: Meat, poultry, fish, eggs, dairy
- Plant sources: Beans, lentils, nuts, seeds, tofu
- Include lean protein at each meal
- Supports muscle mass and satiety

**Fats** support many functions:
- Healthy fats: Olive oil, avocado, nuts, seeds
- Limit saturated fats: Fatty meats, full-fat dairy
- Avoid trans fats: Processed foods, fried foods
- Essential for hormone production and nutrient absorption

### Portion Control Strategies

**Visual Cues for Portions:**
- Protein: Deck of cards or palm of hand
- Carbohydrates: Computer mouse or clenched fist
- Vegetables: Baseball or two hands cupped
- Fats: Thumb tip or dice

**Plate Method** for balanced meals:
- Half plate: Non-starchy vegetables
- Quarter plate: Lean protein
- Quarter plate: Whole grains or starchy vegetables
- Small serving of healthy fats

**Mindful Serving Tips:**
- Use smaller plates and bowls
- Serve food in kitchen, not at table
- Measure portions until eye-trained
- Eat slowly and pause between bites

### Nutrient-Dense Food Choices

**Choose Whole Foods:**
- Fruits and vegetables in variety of colors
- Whole grains: Brown rice, quinoa, oats
- Lean proteins: Chicken, fish, legumes
- Healthy fats: Avocado, nuts, olive oil

**Limit Processed Foods:**
- High in added sugars and unhealthy fats
- Low in fiber and nutrients
- Often high in sodium
- Can be calorie-dense

**Read Food Labels:**
- Check serving size first
- Limit added sugars and saturated fat
- Look for higher fiber content
- Watch sodium levels

### Meal Timing and Frequency

**Regular Eating Patterns:**
- Most people benefit from regular meals
- Prevents extreme hunger and overeating
- Supports stable energy levels
- Choose what works for your schedule

**Breakfast Importance:**
- Can help control hunger throughout day
- Provides energy for morning activities
- Should include protein and fiber
- Even small breakfast helps

**Evening Eating Considerations:**
- Focus on lighter evening meals
- Allow 2-3 hours before bedtime
- Choose easily digestible foods
- Avoid large, rich meals late

**Snacking Smartly:**
- Plan healthy snacks if needed
- Include protein and fiber
- Pre-portion to avoid overeating
- Listen to true hunger cues

### Hydration for Weight Management

**Water Benefits:**
- Helps control appetite
- Supports metabolism
- Aids digestion
- Replaces high-calorie drinks

**How Much to Drink:**
- General guideline: 8 cups daily
- More if active or in heat
- Include water-rich foods
- Drink when thirsty

**Reduce Sugary Drinks:**
- Soda, juice, sweetened coffee/tea
- High in calories, low in nutrition
- Can increase hunger
- Choose water or unsweetened options

**Alcohol Considerations:**
- Contains empty calories
- Can lower inhibitions around food
- May stimulate appetite
- Limit if weight loss is goal

### Practical Meal Planning

**Weekly Planning Steps:**
1. Check schedule and plan meals accordingly
2. Make grocery list based on plan
3. Prep ingredients ahead when possible
4. Have healthy backups for busy days

**Batch Cooking Benefits:**
- Saves time during week
- Ensures healthy meals available
- Reduces reliance on takeout
- Portion and freeze extras

**Eating Out Strategies:**
- Check menu online beforehand
- Ask for dressings/sauces on side
- Choose grilled, baked, or steamed
- Box half before eating

**Grocery Shopping Tips:**
- Shop with list and after eating
- Stick to perimeter for fresh foods
- Read labels on packaged items
- Buy seasonal produce for value

### Special Dietary Considerations

**Vegetarian/Vegan Options:**
- Ensure adequate protein intake
- Include variety of plant proteins
- Watch for complete amino acids
- Consider B12 and iron sources

**Food Sensitivities:**
- Identify true intolerances
- Find suitable alternatives
- Read labels carefully
- Plan meals around restrictions

**Cultural Food Traditions:**
- Adapt traditional recipes healthfully
- Use cooking methods that reduce fat
- Adjust portion sizes
- Honor cultural foods in moderation

**Budget-Friendly Eating:**
- Buy in-season produce
- Use frozen fruits and vegetables
- Choose less expensive proteins
- Cook at home more often

### Emotional Eating Awareness

**Recognize Triggers:**
- Stress, boredom, fatigue
- Emotions like sadness or anxiety
- Social situations
- Environmental cues

**Alternative Coping Strategies:**
- Take walk or do quick exercise
- Call a friend
- Practice deep breathing
- Engage in hobby

**Mindful Eating Practices:**
- Eat without distractions
- Notice flavors and textures
- Check hunger/fullness regularly
- Appreciate food nourishment

**Building New Habits:**
- Replace emotional eating gradually
- Be patient with yourself
- Seek support if needed
- Celebrate small successes

### Sustainable Nutrition Habits

**Flexible Approach:**
- Allow for favorite foods in moderation
- No foods are completely off-limits
- Balance nutrition and enjoyment
- Aim for progress, not perfection

**Long-Term Perspective:**
- Focus on overall dietary pattern
- One meal doesn't make or break
- Regular healthy choices add up
- Consistency matters most

**Adapt to Life Changes:**
- Adjust eating with schedule changes
- Plan for holidays and special events
- Travel with healthy snacks
- Modify during different life stages

**Enjoyment Factor:**
- Food should be pleasurable
- Experiment with new healthy recipes
- Share meals with others
- Savor eating experiences

Remember: Good nutrition for weight management is about balance, variety, and moderation. It's not about deprivation but about making informed choices that support your health and weight goals while still enjoying food.`,
      
      quiz: [
        {
          id: 1,
          question: "What are complex carbohydrates?",
          options: [
            "Starches and fiber found in whole grains and vegetables",
            "Only sugars in fruits and milk",
            "Added sugars in processed foods",
            "Simple sugars for quick energy"
          ],
          correctAnswer: 0,
          explanation: "Complex carbs include starches and fiber from whole grains, vegetables, and legumes that provide sustained energy."
        },
        {
          id: 2,
          question: "What visual cue represents a protein portion?",
          options: [
            "Deck of cards or palm of hand",
            "Computer mouse or clenched fist",
            "Baseball or two hands cupped",
            "Thumb tip or dice"
          ],
          correctAnswer: 0,
          explanation: "A serving of protein should be about the size of a deck of cards or the palm of your hand."
        },
        {
          id: 3,
          question: "What does the plate method recommend for vegetables?",
          options: [
            "Half the plate should be non-starchy vegetables",
            "Quarter plate of vegetables only",
            "Small side dish of vegetables",
            "Vegetables are optional on the plate"
          ],
          correctAnswer: 0,
          explanation: "The plate method suggests filling half your plate with non-starchy vegetables for balanced nutrition."
        },
        {
          id: 4,
          question: "What are nutrient-dense foods?",
          options: [
            "Foods high in nutrients relative to their calories",
            "Only vitamin supplements",
            "High-calorie processed foods",
            "Foods that are expensive"
          ],
          correctAnswer: 0,
          explanation: "Nutrient-dense foods provide vitamins, minerals, and other beneficial compounds with relatively few calories."
        },
        {
          id: 5,
          question: "Why is breakfast important for weight management?",
          options: [
            "Helps control hunger and provides morning energy",
            "Must be the largest meal of the day",
            "Should be skipped to save calories",
            "Only matters if you exercise first thing"
          ],
          correctAnswer: 0,
          explanation: "Breakfast can help prevent overeating later and provides energy for morning activities."
        },
        {
          id: 6,
          question: "How does water support weight management?",
          options: [
            "Helps control appetite and supports metabolism",
            "Directly burns fat cells",
            "Eliminates all calories consumed",
            "Replaces need for all other beverages"
          ],
          correctAnswer: 0,
          explanation: "Water can help you feel full, supports metabolic processes, and replaces higher-calorie beverages."
        },
        {
          id: 7,
          question: "What should you do first when reading food labels?",
          options: [
            "Check the serving size",
            "Look at calorie count only",
            "Read marketing claims first",
            "Check expiration date"
          ],
          correctAnswer: 0,
          explanation: "Always check serving size first, as all other information on the label is based on that amount."
        },
        {
          id: 8,
          question: "What is batch cooking?",
          options: [
            "Preparing multiple meals at once to save time",
            "Cooking very large single portions",
            "Using only one cooking method",
            "Making all meals identical"
          ],
          correctAnswer: 0,
          explanation: "Batch cooking involves preparing larger quantities of food to have meals ready for busy days."
        },
        {
          id: 9,
          question: "What strategy helps when eating out?",
          options: [
            "Check menu online and plan choices beforehand",
            "Always order salads only",
            "Avoid restaurants completely",
            "Eat very little all day before going out"
          ],
          correctAnswer: 0,
          explanation: "Checking menus beforehand helps you make informed choices and avoid impulsive decisions."
        },
        {
          id: 10,
          question: "What is emotional eating?",
          options: [
            "Eating in response to feelings rather than hunger",
            "Only eating when extremely happy",
            "Enjoying food with emotions",
            "Crying while eating healthy foods"
          ],
          correctAnswer: 0,
          explanation: "Emotional eating is using food to cope with emotions like stress, boredom, or sadness rather than physical hunger."
        },
        {
          id: 11,
          question: "What are healthy fat sources?",
          options: [
            "Avocado, nuts, seeds, and olive oil",
            "Only butter and cream",
            "Fried foods and processed snacks",
            "Margarine and shortening"
          ],
          correctAnswer: 0,
          explanation: "Healthy fats come from plant sources like avocado, nuts, seeds, and olive oil, and support overall health."
        },
        {
          id: 12,
          question: "What visual cue represents a carbohydrate portion?",
          options: [
            "Computer mouse or clenched fist",
            "Deck of cards or palm",
            "Baseball or two hands",
            "Thumb tip or dice"
          ],
          correctAnswer: 0,
          explanation: "A serving of carbohydrates should be about the size of a computer mouse or your clenched fist."
        },
        {
          id: 13,
          question: "Why limit processed foods?",
          options: [
            "Often high in added sugars, unhealthy fats, and sodium",
            "They are always more expensive",
            "They have no flavor at all",
            "They cannot be stored long"
          ],
          correctAnswer: 0,
          explanation: "Processed foods often contain added sugars, unhealthy fats, and high sodium while being low in nutrients."
        },
        {
          id: 14,
          question: "What does mindful eating involve?",
          options: [
            "Eating without distractions and noticing flavors",
            "Counting every single calorie consumed",
            "Eating only at specific times",
            "Following strict food rules"
          ],
          correctAnswer: 0,
          explanation: "Mindful eating means paying attention to the eating experience, noticing flavors, and eating without distractions."
        },
        {
          id: 15,
          question: "What should healthy snacks include?",
          options: [
            "Protein and fiber for staying power",
            "Only raw vegetables",
            "High sugar for energy",
            "Large quantities of any food"
          ],
          correctAnswer: 0,
          explanation: "Healthy snacks combining protein and fiber help you feel satisfied until your next meal."
        },
        {
          id: 16,
          question: "Why reduce sugary drinks?",
          options: [
            "High in calories but low in nutrients and satiety",
            "They cause immediate weight gain",
            "They are always expensive",
            "They have no flavor options"
          ],
          correctAnswer: 0,
          explanation: "Sugary drinks provide many calories but little nutrition and don't make you feel full."
        },
        {
          id: 17,
          question: "What is a flexible approach to nutrition?",
          options: [
            "Allowing favorite foods in moderation",
            "Eating whatever you want always",
            "Strict rules with no exceptions",
            "Following fad diets strictly"
          ],
          correctAnswer: 0,
          explanation: "Flexibility means including favorite foods occasionally while mostly choosing nutrient-dense options."
        },
        {
          id: 18,
          question: "What helps with grocery shopping?",
          options: [
            "Shopping with a list and after eating",
            "Going when hungry for inspiration",
            "Buying only sale items regardless of health",
            "Shopping daily for maximum freshness"
          ],
          correctAnswer: 0,
          explanation: "Shopping with a list after eating helps you stick to planned purchases and avoid impulse buys."
        },
        {
          id: 19,
          question: "What are alternative coping strategies to emotional eating?",
          options: [
            "Taking a walk or calling a friend",
            "Eating smaller portions of junk food",
            "Only emotional eating is effective",
            "Ignoring feelings completely"
          ],
          correctAnswer: 0,
          explanation: "Alternative strategies like physical activity or social connection can address emotions without using food."
        },
        {
          id: 20,
          question: "What is most important for sustainable nutrition?",
          options: [
            "Consistency with overall healthy patterns",
            "Perfect eating every single day",
            "Following the latest diet trend",
            "Eliminating all favorite foods"
          ],
          correctAnswer: 0,
          explanation: "Consistency with generally healthy eating patterns matters more than occasional indulgences."
        }
      ]
    },
    {
      id: 3,
      title: "Physical Activity for Weight Management",
      completed: false,
      content: `# Module 3: Physical Activity for Weight Management

## Moving Your Way to Better Health

This module explores how physical activity supports weight management. You'll learn about different types of exercise and how to incorporate movement into your daily life in sustainable ways.

### Benefits of Physical Activity

**Weight Management Support:**
- Burns calories for energy balance
- Helps maintain muscle mass during weight loss
- Can reduce abdominal fat specifically
- Increases metabolism temporarily after exercise

**Health Improvements:**
- Strengthens heart and lungs
- Improves blood pressure and cholesterol
- Reduces risk of chronic diseases
- Enhances mood and reduces stress

**Quality of Life Benefits:**
- Increases energy and stamina
- Improves sleep quality
- Enhances mobility and flexibility
- Boosts confidence and body image

### Types of Physical Activity

**Aerobic Exercise** (cardio):
- Uses large muscle groups continuously
- Increases heart rate and breathing
- Examples: Walking, swimming, cycling
- Benefits cardiovascular health and burns calories

**Strength Training** (resistance):
- Builds and maintains muscle mass
- Increases metabolism at rest
- Examples: Weight lifting, resistance bands
- Helps prevent muscle loss during weight loss

**Flexibility Exercises:**
- Improves range of motion
- Reduces injury risk
- Examples: Stretching, yoga, tai chi
- Enhances overall movement quality

**Balance Training:**
- Improves stability and coordination
- Reduces fall risk especially as we age
- Examples: Standing on one foot, balance exercises
- Often combined with strength training

### Getting Started Safely

**Medical Clearance:**
- Consult healthcare provider if new to exercise
- Discuss any health conditions or concerns
- Get guidance on appropriate activities
- Address any pain or limitations

**Start Slowly:**
- Begin with manageable duration and intensity
- Gradually increase over weeks
- Listen to your body's signals
- Allow for recovery between sessions

**Proper Equipment:**
- Supportive footwear for your activity
- Comfortable, breathable clothing
- Safety gear as needed (helmets, etc.)
- Any necessary equipment in good condition

**Warm-up and Cool-down:**
- 5-10 minutes light activity to warm up
- Dynamic stretches before exercise
- Cool down with gentle movement
- Static stretching after exercise

### Creating Your Activity Plan

**Setting Realistic Goals:**
- Start with time-based goals (minutes per day)
- Progress to frequency goals (days per week)
- Consider intensity goals gradually
- Include variety for comprehensive fitness

**Current Recommendations:**
- 150 minutes moderate or 75 minutes vigorous aerobic weekly
- Strength training 2+ days per week
- Include flexibility and balance work
- More activity provides additional benefits

**Building Consistency:**
- Schedule exercise like important appointments
- Find activities you enjoy
- Start with manageable commitment
- Build habit before increasing intensity

**Overcoming Barriers:**
- Identify personal obstacles
- Problem-solve specific challenges
- Have backup plans for bad weather
- Adjust for schedule changes

### Everyday Movement Opportunities

**Non-Exercise Activity Thermogenesis (NEAT):**
- Calories burned through daily movement
- Includes walking, standing, fidgeting
- Can significantly impact energy balance
- Easy to increase throughout day

**Increasing Daily Steps:**
- Park farther from destinations
- Take stairs instead of elevator
- Walk during phone calls
- Take walking breaks at work

**Active Transportation:**
- Walk or bike for short trips
- Get off transit stop early
- Choose active commuting when possible
- Combine errands with walking

**Household Activities:**
- Gardening and yard work
- Cleaning and organizing
- Playing actively with children/pets
- DIY projects and home maintenance

### Making Exercise Enjoyable

**Finding Activities You Like:**
- Try different types of exercise
- Consider social versus solo activities
- Indoor versus outdoor preferences
- Competitive versus non-competitive options

**Social Support:**
- Exercise with friends or family
- Join group classes or clubs
- Find workout buddies
- Share goals and progress

**Entertainment During Exercise:**
- Listen to music, podcasts, or audiobooks
- Watch TV or videos while exercising
- Exercise in pleasant environments
- Vary routes and scenery

**Tracking Progress:**
- Use apps or devices if helpful
- Keep simple activity log
- Celebrate milestones
- Adjust based on results

### Adapting for Different Situations

**Weather Considerations:**
- Have indoor alternatives ready
- Dress appropriately for conditions
- Adjust intensity for heat or cold
- Consider seasonal activities

**Travel and Vacations:**
- Pack portable exercise equipment
- Use hotel fitness facilities
- Explore new locations actively
- Maintain some activity routine

**Busy Periods:**
- Short, intense workouts when time-limited
- Break activity into smaller chunks
- Prioritize most efficient exercises
- Remember something is better than nothing

**Physical Limitations:**
- Adapt exercises as needed
- Focus on what you CAN do
- Seek professional guidance if needed
- Celebrate all movement

### Preventing and Managing Injuries

**Common Prevention Strategies:**
- Progress gradually in intensity/duration
- Use proper form and technique
- Include rest and recovery days
- Cross-train to avoid overuse

**Listening to Your Body:**
- Distinguish discomfort from pain
- Address niggles before they become injuries
- Rest when needed
- Seek help for persistent pain

**Returning After Break:**
- Start back at reduced level
- Be patient with yourself
- Rebuild gradually
- Celebrate restarting

**Professional Guidance:**
- Consider trainer for technique
- Physical therapy if needed
- Medical advice for injuries
- Adapted programs for conditions

### Long-Term Sustainability

**Lifelong Perspective:**
- View activity as permanent lifestyle component
- Adapt to changing abilities and interests
- Find activities for different life stages
- Maintain focus on health benefits

**Avoiding Burnout:**
- Vary activities to prevent boredom
- Allow flexibility in routine
- Take planned breaks when needed
- Focus on enjoyment, not just results

**Integrating with Life:**
- Combine activity with social time
- Make active choices throughout day
- Involve family in active pursuits
- Choose active hobbies

**Mindset for Success:**
- Celebrate all movement as positive
- Focus on how exercise makes you feel
- Be patient with progress
- Remember why you started

Remember: The best physical activity for weight management is the one you'll do consistently. Find movements you enjoy, start where you are, and gradually build from there. Every bit of activity contributes to your health and weight management goals.`,
      
      quiz: [
        {
          id: 1,
          question: "What does aerobic exercise primarily improve?",
          options: [
            "Cardiovascular health and burns calories",
            "Only muscle strength and size",
            "Flexibility without calorie burn",
            "Balance but not fitness"
          ],
          correctAnswer: 0,
          explanation: "Aerobic exercise strengthens heart and lungs while burning calories through continuous movement."
        },
        {
          id: 2,
          question: "Why is strength training important for weight management?",
          options: [
            "Helps maintain muscle mass which supports metabolism",
            "Only builds big muscles for appearance",
            "Burns most calories during the workout",
            "Is easier than cardio for everyone"
          ],
          correctAnswer: 0,
          explanation: "Strength training preserves muscle during weight loss, and muscle tissue burns more calories at rest than fat."
        },
        {
          id: 3,
          question: "What are current activity recommendations for adults?",
          options: [
            "150 minutes moderate or 75 minutes vigorous aerobic weekly",
            "60 minutes intense exercise daily",
            "Only weekend activities count",
            "No specific recommendations exist"
          ],
          correctAnswer: 0,
          explanation: "Guidelines recommend 150 minutes moderate or 75 minutes vigorous aerobic activity weekly, plus strength training."
        },
        {
          id: 4,
          question: "What does NEAT stand for?",
          options: [
            "Non-exercise activity thermogenesis",
            "New exercise adaptation technique",
            "Nutritional energy assessment tool",
            "Natural exercise awareness training"
          ],
          correctAnswer: 0,
          explanation: "NEAT refers to calories burned through daily movements like walking, standing, and fidgeting."
        },
        {
          id: 5,
          question: "What should you do before starting new exercise?",
          options: [
            "Consult healthcare provider if new or with health concerns",
            "Buy expensive equipment first",
            "Start intense program immediately",
            "Only exercise if already fit"
          ],
          correctAnswer: 0,
          explanation: "Medical clearance is wise when starting new exercise, especially with health conditions or after long inactivity."
        },
        {
          id: 6,
          question: "How can you increase daily steps?",
          options: [
            "Park farther away and take stairs",
            "Only through formal exercise",
            "Buying a treadmill for home",
            "Tracking steps perfectly daily"
          ],
          correctAnswer: 0,
          explanation: "Simple choices like parking farther, taking stairs, and walking breaks add significant daily movement."
        },
        {
          id: 7,
          question: "What makes exercise more enjoyable?",
          options: [
            "Choosing activities you actually like",
            "Only doing what burns most calories",
            "Following strict routines always",
            "Exercising alone always"
          ],
          correctAnswer: 0,
          explanation: "Enjoyment comes from activities you like, which increases likelihood you'll continue them long-term."
        },
        {
          id: 8,
          question: "How should you start after an exercise break?",
          options: [
            "Begin at reduced level and rebuild gradually",
            "Return to previous intensity immediately",
            "Wait until you can match previous level",
            "Avoid exercise to prevent injury"
          ],
          correctAnswer: 0,
          explanation: "After breaks, start easier than your previous level and gradually rebuild to avoid injury and frustration."
        },
        {
          id: 9,
          question: "What is cross-training?",
          options: [
            "Doing different types of exercise to prevent overuse",
            "Only competitive sports training",
            "Training to cross finish lines",
            "Exercising across international borders"
          ],
          correctAnswer: 0,
          explanation: "Cross-training involves varying activities to work different muscles and prevent overuse injuries."
        },
        {
          id: 10,
          question: "What mindset supports long-term activity?",
          options: [
            "Viewing activity as permanent lifestyle component",
            "Only exercising for quick weight loss",
            "Following latest fitness trends strictly",
            "Exercising only when motivated"
          ],
          correctAnswer: 0,
          explanation: "Seeing activity as lifelong health practice, not temporary weight loss tool, supports consistency."
        },
        {
          id: 11,
          question: "What does flexibility exercise improve?",
          options: [
            "Range of motion and reduces injury risk",
            "Only calorie burning capacity",
            "Muscle size and strength",
            "Cardiovascular endurance only"
          ],
          correctAnswer: 0,
          explanation: "Flexibility work improves joint mobility, reduces injury risk, and enhances movement quality."
        },
        {
          id: 12,
          question: "What is the purpose of warm-up?",
          options: [
            "Prepare body gradually for more intense activity",
            "Only to fill time before exercise",
            "Burn extra calories quickly",
            "Replace the main workout"
          ],
          correctAnswer: 0,
          explanation: "Warm-up gradually increases heart rate, blood flow to muscles, and prepares joints for activity."
        },
        {
          id: 13,
          question: "How can you fit exercise into busy days?",
          options: [
            "Break activity into smaller chunks throughout day",
            "Only exercise on completely free days",
            "Wake up hours earlier always",
            "Skip other responsibilities"
          ],
          correctAnswer: 0,
          explanation: "Multiple short activity sessions can be as beneficial as one long session and fit busy schedules."
        },
        {
          id: 14,
          question: "What is active transportation?",
          options: [
            "Using walking or cycling for travel when possible",
            "Only driving to gym for exercise",
            "Taking fastest transport always",
            "Using motorized vehicles exclusively"
          ],
          correctAnswer: 0,
          explanation: "Active transportation incorporates movement into daily travel through walking, cycling, or similar."
        },
        {
          id: 15,
          question: "Why include rest days?",
          options: [
            "Allow muscles to recover and prevent overtraining",
            "Only for people who exercise too much",
            "To avoid becoming too fit",
            "Because exercise is not important daily"
          ],
          correctAnswer: 0,
          explanation: "Rest days allow muscle repair, prevent burnout, and are essential for progress and injury prevention."
        },
        {
          id: 16,
          question: "What helps overcome exercise barriers?",
          options: [
            "Identifying obstacles and problem-solving specific solutions",
            "Ignoring barriers and pushing through",
            "Only exercising when barriers disappear",
            "Following others' solutions exactly"
          ],
          correctAnswer: 0,
          explanation: "Identifying personal barriers and creating specific strategies to address them increases success."
        },
        {
          id: 17,
          question: "How does exercise affect mood?",
          options: [
            "Releases endorphins that improve mood and reduce stress",
            "Always makes people tired and grumpy",
            "Has no effect on emotions",
            "Only improves mood if you reach goals"
          ],
          correctAnswer: 0,
          explanation: "Physical activity releases endorphins, natural mood elevators that reduce stress and improve wellbeing."
        },
        {
          id: 18,
          question: "What should you focus on during exercise?",
          options: [
            "Proper form to prevent injury and maximize benefits",
            "Only how many calories you're burning",
            "What others in gym are doing",
            "How much time is left"
          ],
          correctAnswer: 0,
          explanation: "Proper form ensures safety, effectiveness, and reduces injury risk during exercise."
        },
        {
          id: 19,
          question: "How can you make exercise social?",
          options: [
            "Exercise with friends or join group classes",
            "Only exercise completely alone",
            "Post all workouts on social media",
            "Compare yourself to others constantly"
          ],
          correctAnswer: 0,
          explanation: "Social exercise through friends, groups, or classes can increase enjoyment and accountability."
        },
        {
          id: 20,
          question: "What is most important for exercise success?",
          options: [
            "Consistency with activities you enjoy",
            "Having perfect equipment and location",
            "Following latest celebrity workouts",
            "Exercising intensely every single day"
          ],
          correctAnswer: 0,
          explanation: "Consistency with enjoyable activities matters more than perfection, intensity, or following trends."
        }
      ]
    },
    {
      id: 4,
      title: "Behavior Change Strategies",
      completed: false,
      content: `# Module 4: Behavior Change Strategies

## Changing Habits for Lasting Success

This module focuses on the psychology of behavior change and practical strategies for developing sustainable weight management habits. You'll learn how to overcome common challenges and build lasting change.

### Understanding Behavior Change

**Stages of Change Model:**
- Precontemplation: Not considering change
- Contemplation: Thinking about changing
- Preparation: Planning to change soon
- Action: Making changes
- Maintenance: Sustaining changes
- Relapse: Returning to old behaviors (normal part of process)

**Readiness Assessment:**
- Evaluate your current stage
- Identify barriers to moving forward
- Build motivation for change
- Create appropriate strategies for your stage

**Self-Efficacy Belief:**
- Confidence in your ability to change
- Builds with small successes
- Affects commitment and persistence
- Can be developed through practice

### Goal Setting Strategies

**SMART Goals Framework:**
- Specific: Clear and well-defined
- Measurable: Can track progress
- Achievable: Realistic and attainable
- Relevant: Matters to you personally
- Time-bound: Has deadline or timeline

**Process vs. Outcome Goals:**
- Outcome goals: Results you want (lose 10 pounds)
- Process goals: Actions you'll take (walk 30 minutes daily)
- Both are important
- Process goals often more controllable

**Setting Appropriate Goals:**
- Start with small, manageable goals
- Build on successes
- Adjust as you learn what works
- Celebrate all progress

**Goal Review and Adjustment:**
- Regularly assess goal progress
- Modify if not working
- Celebrate achieved goals
- Set new goals to continue progress

### Building Healthy Habits

**Habit Formation Process:**
- Cue: Trigger that starts behavior
- Routine: The behavior itself
- Reward: Benefit from the behavior
- Repeat: Consistency strengthens habit

**Creating Effective Cues:**
- Link new habits to existing routines
- Use environmental cues (place fruit on counter)
- Set reminders or alarms
- Prepare in advance (lay out workout clothes)

**Making Routines Manageable:**
- Start with small, easy actions
- Build up gradually
- Make it as easy as possible
- Focus on consistency over perfection

**Identifying Rewards:**
- Intrinsic: Feeling better, more energy
- Extrinsic: Treat yourself (non-food rewards)
- Immediate: Enjoyment during/after activity
- Long-term: Health benefits, confidence

### Overcoming Common Barriers

**Time Management:**
- Identify time wasters
- Schedule priorities first
- Use small time pockets effectively
- Combine activities when possible

**Motivation Fluctuations:**
- Accept that motivation varies
- Rely on routines when motivation low
- Remember your reasons for change
- Seek inspiration from success stories

**Social Situations:**
- Plan ahead for gatherings
- Practice polite refusal skills
- Bring healthy dish to share
- Focus on socializing, not just food

**Emotional Challenges:**
- Develop alternative coping strategies
- Practice stress management techniques
- Seek support when needed
- Be compassionate with yourself

### Self-Monitoring Techniques

**Food and Activity Tracking:**
- Increases awareness of patterns
- Helps identify problem areas
- Provides accountability
- Can use apps, journals, or simple notes

**Mindful Monitoring:**
- Notice without judgment
- Identify triggers and patterns
- Recognize progress and challenges
- Adjust based on observations

**Regular Check-ins:**
- Daily quick reviews
- Weekly assessments
- Monthly evaluations
- Adjust strategies as needed

**Balanced Approach:**
- Monitor enough to be helpful
- Avoid obsessive tracking
- Focus on overall patterns
- Adjust monitoring as habits develop

### Cognitive Restructuring

**Identifying Unhelpful Thoughts:**
- All-or-nothing thinking
- Catastrophizing
- Overgeneralization
- Negative self-talk

**Challenging Cognitive Distortions:**
- Examine evidence for thoughts
- Consider alternative perspectives
- Use balanced thinking
- Practice self-compassion

**Developing Positive Self-Talk:**
- Notice negative thoughts
- Challenge unhelpful patterns
- Replace with realistic, supportive thoughts
- Practice regularly

**Growth Mindset Cultivation:**
- View challenges as opportunities
- See effort as path to mastery
- Learn from setbacks
- Believe abilities can develop

### Stress Management

**Stress-Weight Connection:**
- Stress can increase appetite
- May lead to emotional eating
- Can affect food choices
- Impacts sleep and energy

**Healthy Stress Reduction:**
- Physical activity
- Relaxation techniques
- Social connection
- Time in nature

**Mindfulness Practices:**
- Meditation and deep breathing
- Present moment awareness
- Non-judgmental observation
- Regular practice builds skills

**Work-Life Balance:**
- Set boundaries
- Prioritize self-care
- Schedule downtime
- Learn to say no when needed

### Social Support Systems

**Types of Support:**
- Emotional: Listening, encouragement
- Informational: Advice, information sharing
- Instrumental: Practical help
- Appraisal: Feedback, reality checking

**Building Support Network:**
- Identify supportive people
- Communicate your needs clearly
- Offer reciprocal support
- Appreciate support received

**Handling Unsupportive People:**
- Set clear boundaries
- Communicate your needs calmly
- Limit time with negative influences
- Focus on your goals

**Professional Support:**
- Healthcare providers
- Registered dietitians
- Fitness professionals
- Mental health professionals if needed

### Relapse Prevention

**Understanding Relapse:**
- Common in behavior change
- Often triggered by specific situations
- Not failure but learning opportunity
- Can be planned for and managed

**Identifying High-Risk Situations:**
- Emotional states
- Social situations
- Environmental cues
- Times of stress or change

**Coping Strategies Development:**
- Plan responses to high-risk situations
- Practice coping skills in advance
- Have backup plans ready
- Build resilience through practice

**Recovery from Setbacks:**
- Be compassionate with yourself
- Analyze what happened
- Learn from the experience
- Recommit to your goals

### Maintaining Motivation

**Connecting to Values:**
- Identify your core values
- Link goals to what matters most
- Remind yourself regularly
- Use values as guide during challenges

**Celebrating Successes:**
- Acknowledge all progress
- Celebrate non-scale victories
- Reward yourself appropriately
- Share successes with supporters

**Visualizing Success:**
- Imagine achieving your goals
- Visualize handling challenges well
- Create vision board if helpful
- Use positive imagery regularly

**Continuous Learning:**
- Stay curious about what works for you
- Adjust strategies as needed
- Learn from both successes and setbacks
- View journey as ongoing process

### Creating Supportive Environment

**Home Environment:**
- Stock healthy foods
- Remove temptation triggers if helpful
- Create spaces for healthy activities
- Make healthy choices easy

**Work Environment:**
- Keep healthy snacks available
- Take activity breaks
- Manage stress effectively
- Set boundaries around work hours

**Social Environment:**
- Spend time with supportive people
- Suggest active social activities
- Share your journey selectively
- Find communities with similar goals

**Digital Environment:**
- Follow inspiring accounts
- Use helpful apps mindfully
- Limit exposure to negative influences
- Create positive online spaces

Remember: Behavior change is a skill that develops with practice. Be patient with yourself, learn from both successes and challenges, and focus on progress rather than perfection. Every step forward, no matter how small, moves you toward your goals.`,
      
      quiz: [
        {
          id: 1,
          question: "What are the stages in the Stages of Change model?",
          options: [
            "Precontemplation, contemplation, preparation, action, maintenance",
            "Only starting and finishing stages",
            "Planning, doing, reviewing",
            "Motivation, action, completion"
          ],
          correctAnswer: 0,
          explanation: "The model includes precontemplation, contemplation, preparation, action, and maintenance stages, with relapse as normal part."
        },
        {
          id: 2,
          question: "What does SMART stand for in goal setting?",
          options: [
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Simple, Moderate, Active, Realistic, Timely",
            "Strong, Meaningful, Active, Responsible, Targeted",
            "Specific, Manageable, Attainable, Reasonable, Timed"
          ],
          correctAnswer: 0,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound for effectiveness."
        },
        {
          id: 3,
          question: "What is the difference between process and outcome goals?",
          options: [
            "Process goals are actions, outcome goals are results",
            "Process goals are less important",
            "Only outcome goals matter",
            "They are the same thing"
          ],
          correctAnswer: 0,
          explanation: "Process goals focus on actions you control (exercise daily), while outcome goals focus on results (lose weight)."
        },
        {
          id: 4,
          question: "What are the three components of habit formation?",
          options: [
            "Cue, routine, reward",
            "Plan, action, review",
            "Want, need, do",
            "Start, continue, finish"
          ],
          correctAnswer: 0,
          explanation: "Habits form through cue (trigger), routine (behavior), and reward (benefit), repeated consistently."
        },
        {
          id: 5,
          question: "How can you create effective cues for new habits?",
          options: [
            "Link new habits to existing routines",
            "Only rely on willpower alone",
            "Wait for perfect conditions",
            "Make cues complicated"
          ],
          correctAnswer: 0,
          explanation: "Linking new habits to established routines (like brushing teeth) creates natural cues for behavior."
        },
        {
          id: 6,
          question: "What is self-monitoring in behavior change?",
          options: [
            "Tracking behaviors to increase awareness",
            "Only weighing yourself daily",
            "Criticizing yourself constantly",
            "Comparing yourself to others"
          ],
          correctAnswer: 0,
          explanation: "Self-monitoring involves tracking behaviors like food intake or activity to identify patterns and progress."
        },
        {
          id: 7,
          question: "What is cognitive restructuring?",
          options: [
            "Changing unhelpful thought patterns",
            "Only thinking positive thoughts always",
            "Ignoring all negative thoughts",
            "Memorizing affirmations"
          ],
          correctAnswer: 0,
          explanation: "Cognitive restructuring identifies and challenges unhelpful thoughts, replacing them with more balanced thinking."
        },
        {
          id: 8,
          question: "How does stress affect weight management?",
          options: [
            "Can increase appetite and emotional eating",
            "Always causes weight loss",
            "Has no effect on eating behaviors",
            "Only affects exercise motivation"
          ],
          correctAnswer: 0,
          explanation: "Stress can increase cortisol, which may increase appetite, particularly for high-calorie foods, and lead to emotional eating."
        },
        {
          id: 9,
          question: "What type of support involves practical help?",
          options: [
            "Instrumental support",
            "Only emotional support",
            "Informational support",
            "Appraisal support"
          ],
          correctAnswer: 0,
          explanation: "Instrumental support includes practical help like exercising together or helping with meal preparation."
        },
        {
          id: 10,
          question: "How should you view relapse in behavior change?",
          options: [
            "As learning opportunity, not failure",
            "As complete failure always",
            "As reason to give up entirely",
            "As proof change is impossible"
          ],
          correctAnswer: 0,
          explanation: "Relapse is common in behavior change and provides valuable information for improving strategies."
        },
        {
          id: 11,
          question: "What is self-efficacy in behavior change?",
          options: [
            "Confidence in your ability to change",
            "Only physical fitness level",
            "How others perceive you",
            "Genetic predisposition"
          ],
          correctAnswer: 0,
          explanation: "Self-efficacy is belief in your capability to execute behaviors needed to achieve specific goals."
        },
        {
          id: 12,
          question: "What makes a goal achievable?",
          options: [
            "Realistic given your resources and constraints",
            "Extremely challenging to motivate you",
            "Based on others' expectations",
            "The same as everyone else's goals"
          ],
          correctAnswer: 0,
          explanation: "Achievable goals consider your current situation, resources, and constraints realistically."
        },
        {
          id: 13,
          question: "What is a growth mindset?",
          options: [
            "Belief abilities can develop through effort",
            "Thinking you're born with fixed abilities",
            "Only focusing on natural talents",
            "Avoiding challenges to prevent failure"
          ],
          correctAnswer: 0,
          explanation: "Growth mindset views abilities as developable through effort, learning, and persistence."
        },
        {
          id: 14,
          question: "What is mindful monitoring?",
          options: [
            "Observing without judgment to identify patterns",
            "Critically analyzing every action",
            "Only tracking perfect days",
            "Ignoring all data"
          ],
          correctAnswer: 0,
          explanation: "Mindful monitoring involves non-judgmental observation to understand behaviors and patterns."
        },
        {
          id: 15,
          question: "How can you handle unsupportive people?",
          options: [
            "Set clear boundaries and focus on your goals",
            "Change yourself to please them",
            "Argue constantly about your choices",
            "Give up on your goals"
          ],
          correctAnswer: 0,
          explanation: "Setting boundaries, communicating needs calmly, and limiting negative influences protects your progress."
        },
        {
          id: 16,
          question: "What are high-risk situations for relapse?",
          options: [
            "Emotional states, social situations, stress times",
            "Only when traveling",
            "When following plan perfectly",
            "During routine daily life"
          ],
          correctAnswer: 0,
          explanation: "High-risk situations often involve emotional states, social pressures, or times of stress or change."
        },
        {
          id: 17,
          question: "How does connecting to values help motivation?",
          options: [
            "Links goals to what matters most to you",
            "Makes goals more complicated",
            "Only works for spiritual people",
            "Has no effect on motivation"
          ],
          correctAnswer: 0,
          explanation: "When goals align with core values (health, family, etc.), motivation becomes more meaningful and sustainable."
        },
        {
          id: 18,
          question: "What is visualization in behavior change?",
          options: [
            "Imagining success and handling challenges",
            "Only seeing physical results",
            "Watching others succeed",
            "Dreaming without action"
          ],
          correctAnswer: 0,
          explanation: "Visualization involves mentally rehearsing success and effective responses to challenges."
        },
        {
          id: 19,
          question: "How can you create supportive home environment?",
          options: [
            "Stock healthy foods and remove temptation triggers",
            "Keep junk food visible for willpower testing",
            "Make healthy choices difficult",
            "Only eat out to avoid home food"
          ],
          correctAnswer: 0,
          explanation: "Making healthy choices easy and temptation less accessible supports behavior change efforts."
        },
        {
          id: 20,
          question: "What is most important in maintaining behavior change?",
          options: [
            "Consistency and learning from experiences",
            "Perfection in following plans",
            "Never having setbacks",
            "Comparing progress to others"
          ],
          correctAnswer: 0,
          explanation: "Consistency with flexibility to adapt and learn from all experiences supports long-term success."
        }
      ]
    },
    {
      id: 5,
      title: "Mindful Eating Practices",
      completed: false,
      content: `# Module 5: Mindful Eating Practices

## Eating with Awareness and Intention

This module teaches mindful eating techniques to help you develop a healthier relationship with food. You'll learn how to eat with awareness, recognize true hunger and fullness, and enjoy food more fully.

### What is Mindful Eating?

**Mindful Eating Definition:**
- Paying full attention to the eating experience
- Noticing flavors, textures, and aromas
- Recognizing hunger and fullness cues
- Eating without judgment or distraction

**Difference from Dieting:**
- Focus on how you eat, not just what you eat
- No forbidden foods or strict rules
- Emphasizes internal wisdom about hunger
- Promotes enjoyment and satisfaction

**Benefits of Mindful Eating:**
- Better recognition of hunger and fullness
- Reduced emotional eating
- Greater satisfaction with meals
- Improved digestion
- Healthier relationship with food

### Understanding Hunger and Fullness

**Physical Hunger Signs:**
- Stomach growling or emptiness
- Low energy or lightheadedness
- Difficulty concentrating
- Irritability (hanger)

**Emotional Hunger Signs:**
- Sudden, urgent craving
- Specific food desires (usually comfort foods)
- Eating when not physically hungry
- Continuing after physically full

**Fullness Scale Concept:**
- 1: Ravenously hungry
- 5: Comfortably satisfied
- 10: Uncomfortably full
- Aim to eat to about 6-7 on scale

**Tuning into Body Signals:**
- Pause before eating to assess hunger
- Check in during meal
- Stop when comfortably full
- Notice how you feel after eating

### Creating Mindful Eating Environment

**Minimize Distractions:**
- Turn off TV, phone, computer
- Eat at table without screens
- Focus on eating experience
- Notice how this affects satisfaction

**Set the Scene:**
- Use pleasant dishes and setting
- Arrange food attractively
- Create calm atmosphere
- Sit down for all meals and snacks

**Eating Pace Management:**
- Put utensils down between bites
- Chew thoroughly
- Sip water during meal
- Take at least 20 minutes for meals

**Appreciation Practice:**
- Notice food appearance and aroma
- Acknowledge effort to prepare food
- Consider food's journey to your plate
- Express gratitude if meaningful

### Sensory Eating Experience

**Engaging All Senses:**
- Sight: Notice colors and presentation
- Smell: Inhale aromas before eating
- Touch: Feel textures in mouth
- Sound: Listen to chewing sounds
- Taste: Identify different flavors

**Taste Exploration:**
- Identify basic tastes: Sweet, sour, salty, bitter, umami
- Notice flavor combinations
- Detect subtle seasoning notes
- Appreciate complexity in simple foods

**Texture Awareness:**
- Crunchy, creamy, chewy, crispy
- Temperature variations
- Moisture levels
- How texture changes during chewing

**Flavor Satisfaction:**
- Notice when flavors become less intense
- Recognize point of diminishing enjoyment
- Stop when food loses appeal
- Avoid eating just because food is there

### Emotional Eating Awareness

**Identifying Triggers:**
- Stress, anxiety, or worry
- Boredom or loneliness
- Fatigue or exhaustion
- Habit or environmental cues

**Alternative Responses:**
- Take 5-minute pause before eating
- Drink glass of water
- Practice deep breathing
- Engage in brief activity

**Emotional Nourishment Needs:**
- Comfort: Warm bath, soft blanket
- Distraction: Book, hobby, walk
- Connection: Call friend, pet interaction
- Relaxation: Meditation, gentle music

**Compassionate Response:**
- Accept emotional eating happens sometimes
- Learn from experience without judgment
- Return to mindful eating at next meal
- Practice self-kindness

### Portion Awareness

**Visual Cues Review:**
- Protein: Palm-sized
- Carbs: Fist-sized
- Vegetables: Two fist-sized
- Fats: Thumb-sized

**Serving vs. Portion:**
- Serving: Standard measured amount
- Portion: Amount you choose to eat
- Can be same or different
- Awareness helps balance

**Mindful Serving:**
- Serve reasonable amount initially
- Pause before seconds
- Check hunger level
- Decide if more needed

**Leftovers Mindset:**
- It's okay to leave food on plate
- Save for another meal
- Avoid "clean plate club" pressure
- Value fullness over finishing

### Social Eating Mindfulness

**Gatherings Preparation:**
- Scan options before filling plate
- Choose foods you truly want
- Take small portions of many items
- Focus on socializing, not just food

**Eating Pace in Company:**
- Match conversation pace, not others' eating
- Put down utensils while talking
- Sip water between bites
- Be last to finish if needed

**Polite Refusal Skills:**
- "Everything looks wonderful, I'll start with this"
- "I'm saving room for later"
- "I'll have a taste, thank you"
- Simple "no, thank you" with smile

**Enjoyment Balance:**
- Savor special occasion foods
- Eat mindfully even when indulging
- Notice when enjoyment peaks
- Stop when satisfied, not stuffed

### Mindful Shopping and Preparation

**Grocery Shopping Awareness:**
- Shop with list but stay open to freshness
- Notice food appearances and smells
- Consider how foods will nourish you
- Avoid shopping when hungry

**Meal Planning Mindfully:**
- Consider what sounds appealing
- Plan variety of flavors and textures
- Include foods you enjoy
- Balance nutrition and pleasure

**Cooking with Presence:**
- Notice ingredients' colors and textures
- Smell aromas as you cook
- Appreciate transformation process
- Find joy in preparation

**Setting Eating Intention:**
- Before meal, set intention to eat mindfully
- Remind yourself to check hunger/fullness
- Commit to eating without distractions
- Plan to enjoy the experience

### Overcoming Common Challenges

**Busy Schedule Adaptation:**
- Even 5 minutes of mindful eating helps
- Choose one meal daily for full practice
- Take mindful bites between tasks
- Pack mindful lunches for work

**Family Meal Dynamics:**
- Model mindful eating for family
- Create distraction-free zones
- Encourage conversation about food experience
- Respect different eating paces

**Old Habits Interference:**
- Notice automatic eating patterns
- Gently redirect to mindfulness
- Practice patience with yourself
- Celebrate mindful moments

**Perfectionism Pressure:**
- Aim for progress, not perfection
- Some mindful eating is better than none
- Each meal is new opportunity
- Be kind when you forget

### Long-Term Mindful Eating Practice

**Daily Integration:**
- Start with one mindful meal daily
- Gradually add more mindful moments
- Practice with snacks and beverages
- Make mindfulness habitual

**Seasonal Adaptation:**
- Notice changing food preferences
- Adjust eating with seasons
- Enjoy seasonal produce mindfully
- Adapt routines as needed

**Travel and Eating Out:**
- Use mindfulness in all settings
- Savor new food experiences
- Adapt to different eating environments
- Maintain connection to hunger cues

**Lifelong Practice View:**
- Mindful eating is ongoing practice
- Skills deepen over time
- Continual learning about yourself
- Flexible adaptation through life changes

### Mindful Eating and Weight Management

**Natural Portion Control:**
- Eating slowly allows fullness signals to register
- Increased satisfaction with smaller portions
- Better recognition of true hunger
- Reduced likelihood of overeating

**Emotional Regulation:**
- Decreased emotional eating episodes
- Alternative coping strategies development
- Reduced stress-related eating
- Improved mood and self-awareness

**Food Relationship Healing:**
- Reduced guilt around eating
- Increased food enjoyment
- Balanced approach to all foods
- Freedom from diet mentality

**Sustainable Approach:**
- No strict rules to rebel against
- Adaptable to all situations
- Focuses on internal wisdom
- Supports long-term health

Remember: Mindful eating is not another diet or set of rules. It's a practice of bringing awareness and compassion to your eating experiences. Start where you are, be patient with yourself, and notice how this approach transforms your relationship with food and your body over time.`,
      
      quiz: [
        {
          id: 1,
          question: "What is mindful eating?",
          options: [
            "Paying full attention to the eating experience with awareness",
            "Only eating healthy foods exclusively",
            "Counting every calorie consumed",
            "Following strict meal timing rules"
          ],
          correctAnswer: 0,
          explanation: "Mindful eating involves paying attention to the eating experience, noticing flavors, and recognizing hunger/fullness cues."
        },
        {
          id: 2,
          question: "What distinguishes physical hunger from emotional hunger?",
          options: [
            "Physical hunger builds gradually, emotional is sudden and specific",
            "Only physical hunger involves stomach signals",
            "Emotional hunger is always stronger",
            "They feel exactly the same"
          ],
          correctAnswer: 0,
          explanation: "Physical hunger develops gradually with bodily signals, while emotional hunger often appears suddenly with specific cravings."
        },
        {
          id: 3,
          question: "What number on the fullness scale represents comfortably satisfied?",
          options: [
            "5-6",
            "1-2",
            "8-9",
            "Exactly 10"
          ],
          correctAnswer: 0,
          explanation: "On a 1-10 scale with 1 being ravenous and 10 being painfully full, 5-6 represents comfortably satisfied."
        },
        {
          id: 4,
          question: "Why minimize distractions during eating?",
          options: [
            "Helps recognize hunger/fullness cues and increases satisfaction",
            "Makes eating boring and unpleasant",
            "Is only important for formal meals",
            "Has no effect on eating experience"
          ],
          correctAnswer: 0,
          explanation: "Eating without distractions allows you to tune into body signals and fully experience food, increasing satisfaction."
        },
        {
          id: 5,
          question: "How long should meals ideally take?",
          options: [
            "At least 20 minutes for fullness signals to register",
            "As quickly as possible to save time",
            "Exactly 30 minutes always",
            "However long others take to eat"
          ],
          correctAnswer: 0,
          explanation: "Taking at least 20 minutes allows time for fullness signals from your stomach to reach your brain."
        },
        {
          id: 6,
          question: "What senses are involved in mindful eating?",
          options: [
            "All five senses: sight, smell, touch, sound, taste",
            "Only taste matters",
            "Sight and taste only",
            "Smell is most important"
          ],
          correctAnswer: 0,
          explanation: "Mindful eating engages all senses to fully experience food, including appearance, aroma, texture, sounds, and flavors."
        },
        {
          id: 7,
          question: "What is an alternative response to emotional eating urges?",
          options: [
            "Take 5-minute pause and drink water before deciding",
            "Eat quickly to get it over with",
            "Only eat healthy foods when emotional",
            "Ignore emotions completely"
          ],
          correctAnswer: 0,
          explanation: "Pausing and drinking water creates space to choose response rather than automatically eating from emotion."
        },
        {
          id: 8,
          question: "What is the 'clean plate club' mentality?",
          options: [
            "Feeling compelled to finish all food served regardless of fullness",
            "Only eating from perfectly clean plates",
            "Washing dishes immediately after eating",
            "Eating only spotless, perfect foods"
          ],
          correctAnswer: 0,
          explanation: "This mentality pressures people to finish all food served, often overriding natural fullness signals."
        },
        {
          id: 9,
          question: "How can you eat mindfully at social gatherings?",
          options: [
            "Scan options first and focus on socializing",
            "Only eat before going to avoid temptation",
            "Eat quickly to get eating over with",
            "Avoid all special occasion foods"
          ],
          correctAnswer: 0,
          explanation: "Scanning options helps intentional choosing, and focusing on socializing reduces mindless eating."
        },
        {
          id: 10,
          question: "What should you do before eating to set intention?",
          options: [
            "Pause to assess hunger and commit to eating mindfully",
            "Only check calorie content of food",
            "Weigh yourself first",
            "Plan exact next meal"
          ],
          correctAnswer: 0,
          explanation: "Brief pause to check hunger and set mindful eating intention increases awareness during the meal."
        },
        {
          id: 11,
          question: "What is a serving versus a portion?",
          options: [
            "Serving is standard amount, portion is what you choose to eat",
            "They mean exactly the same thing",
            "Portion is always larger than serving",
            "Serving refers only to restaurant food"
          ],
          correctAnswer: 0,
          explanation: "A serving is a standardized measured amount, while a portion is the amount you actually choose to eat."
        },
        {
          id: 12,
          question: "What visual cue represents a vegetable portion?",
          options: [
            "Two fists cupped together",
            "Deck of cards",
            "Computer mouse",
            "Thumb tip"
          ],
          correctAnswer: 0,
          explanation: "A portion of vegetables should be about the size of two fists cupped together for most meals."
        },
        {
          id: 13,
          question: "How does eating pace affect fullness?",
          options: [
            "Slower eating allows time for fullness signals to register",
            "Faster eating makes you feel fuller",
            "Pace has no effect on fullness",
            "Only very fast eating stops overeating"
          ],
          correctAnswer: 0,
          explanation: "Eating slowly gives your brain time (about 20 minutes) to receive fullness signals from your stomach."
        },
        {
          id: 14,
          question: "What is sensory-specific satiety?",
          options: [
            "Decreased enjoyment of a food as you eat more of it",
            "Increased hunger from smelling food",
            "Fullness from only one type of food",
            "Satisfaction from all foods equally"
          ],
          correctAnswer: 0,
          explanation: "This refers to declining pleasure from eating the same food, encouraging variety and stopping when satisfied."
        },
        {
          id: 15,
          question: "How can you handle food pushers politely?",
          options: [
            "\"Everything looks wonderful, I'll start with this\"",
            "\"Your food will make me fat\"",
            "\"I'm on a strict diet\"",
            "Ignore them completely"
          ],
          correctAnswer: 0,
          explanation: "Polite but firm responses that acknowledge the offer while maintaining your boundaries work best."
        },
        {
          id: 16,
          question: "What should you do when you notice emotional eating?",
          options: [
            "Notice without judgment and learn from the experience",
            "Criticize yourself harshly",
            "Give up on mindful eating",
            "Restrict food severely afterwards"
          ],
          correctAnswer: 0,
          explanation: "Non-judgmental observation of emotional eating provides valuable information for future choices."
        },
        {
          id: 17,
          question: "How does mindful eating support weight management?",
          options: [
            "Helps recognize true hunger/fullness and reduces overeating",
            "Guarantees specific weight loss amount",
            "Only works if combined with strict diet",
            "Has no effect on weight"
          ],
          correctAnswer: 0,
          explanation: "By increasing awareness of hunger/fullness and eating pace, mindful eating naturally supports appropriate portions."
        },
        {
          id: 18,
          question: "What is perfectionism pressure in mindful eating?",
          options: [
            "Feeling you must eat perfectly mindfully always",
            "Only eating perfect-looking foods",
            "Requiring perfect cooking results",
            "Expecting perfect weight loss"
          ],
          correctAnswer: 0,
          explanation: "This is the unrealistic expectation of perfect mindfulness at every meal, which can create stress."
        },
        {
          id: 19,
          question: "How can you practice mindful eating with a busy schedule?",
          options: [
            "Choose one meal daily for full mindful practice",
            "Only practice on weekends",
            "Give up because you're too busy",
            "Eat faster to save time for mindfulness"
          ],
          correctAnswer: 0,
          explanation: "Starting with one mindful meal daily makes practice manageable even with busy schedules."
        },
        {
          id: 20,
          question: "What is the most important aspect of mindful eating practice?",
          options: [
            "Gentle, non-judgmental awareness of eating experiences",
            "Perfect following of all guidelines",
            "Never eating emotionally again",
            "Always eating without any distractions"
          ],
          correctAnswer: 0,
          explanation: "The core of mindful eating is bringing kind, curious awareness to eating without self-criticism."
        }
      ]
    },
    {
      id: 6,
      title: "Sustainable Weight Maintenance",
      completed: false,
      content: `# Module 6: Sustainable Weight Maintenance

## Maintaining Your Success Long-Term

This final module focuses on strategies for maintaining weight loss and healthy habits over the long term. You'll learn how to transition from weight loss to maintenance and build a sustainable healthy lifestyle.

### Transitioning to Maintenance

**Understanding Maintenance Phase:**
- Different mindset from weight loss phase
- Focus shifts to sustaining new habits
- May require different strategies
- Often more challenging than initial loss

**Setting Maintenance Goals:**
- Weight range rather than single number
- Focus on habit consistency
- Include health markers beyond weight
- Regular assessment and adjustment

**Adjusting Calorie Intake:**
- Gradually increase calories to maintenance level
- Add approximately 200-300 calories daily
- Monitor weight response
- Adjust based on results

**Psychological Shift:**
- Celebrate achieving weight loss goals
- Acknowledge maintenance as new phase
- Prepare for different challenges
- Maintain motivation for health

### Maintenance Strategies

**Regular Monitoring:**
- Weekly weigh-ins for most people
- Monthly measurements
- Regular health check-ups
- Habit tracking as needed

**Flexible Boundaries:**
- Allow more variety in food choices
- Include occasional treats mindfully
- Adjust for special occasions
- Return to baseline after deviations

**Problem-Solving Skills:**
- Identify potential challenges in advance
- Develop strategies for common situations
- Practice coping skills regularly
- Learn from maintenance setbacks

**Support System Maintenance:**
- Continue with supportive relationships
- Consider maintenance-focused groups
- Share maintenance challenges and successes
- Seek help when needed

### Preventing Weight Regain

**Common Regain Patterns:**
- Gradual creep over months or years
- Often starts with small deviations
- Can follow life changes or stress
- Usually involves returning to old habits

**Early Warning Signs:**
- Clothes fitting tighter
- Skipping exercise regularly
- Mindless eating returning
- Avoiding weighing or tracking

**Intervention Strategies:**
- Return to tracking if helpful
- Revisit initial successful strategies
- Increase activity level
- Seek support early

**Rapid Response Plan:**
- Identify trigger weight (3-5 pounds above goal)
- Have specific plan to address regain
- Implement immediately when reached
- Prevent small regain becoming large

### Lifestyle Integration

**Making Health Permanent Priority:**
- View healthy habits as non-negotiable
- Schedule self-care like other priorities
- Build health into identity
- Make choices aligned with health values

**Routine Establishment:**
- Consistent meal patterns
- Regular activity schedule
- Sleep and stress management routines
- Self-monitoring habits

**Environmental Maintenance:**
- Keep home environment supportive
- Maintain work environment supports
- Regular review of temptations
- Update systems as needed

**Social Integration:**
- Maintain social connections that support health
- Develop friendships around active interests
- Share healthy meals with others
- Balance social life with health goals

### Adapting to Life Changes

**Major Life Transitions:**
- Marriage, divorce, or relationship changes
- Career changes or job loss
- Moving to new home
- Family changes (children, aging parents)

**Strategies for Transitions:**
- Plan ahead when possible
- Identify potential challenges
- Maintain core habits during change
- Be patient with adjustment periods

**Seasonal Adjustments:**
- Activity changes with weather
- Holiday eating strategies
- Seasonal produce enjoyment
- Vacation and travel planning

**Aging Considerations:**
- Metabolism changes over time
- Activity adaptations as needed
- Nutritional needs adjustment
- Realistic goal adjustments

### Mindset for Long-Term Success

**Growth Mindset Application:**
- View challenges as learning opportunities
- See maintenance as ongoing process
- Believe in ability to problem-solve
- Embrace flexibility and adaptation

**Self-Compassion Practice:**
- Kindness during setbacks
- Understanding perfection isn't possible
- Learning from all experiences
- Maintaining motivation through self-care

**Identity Integration:**
- "I am someone who takes care of my health"
- Health behaviors become natural
- No longer "on a diet" but living healthily
- Maintenance as expression of self-care

**Celebrating Non-Scale Victories:**
- Energy levels and stamina
- Health marker improvements
- Clothing fit and comfort
- Physical abilities and fitness

### Nutrition Maintenance

**Balanced Approach Continuation:**
- Mostly nutrient-dense foods
- Appropriate portions for maintenance
- Regular meal patterns
- Mindful eating practices

**Flexibility Development:**
- Include favorite foods regularly
- Adapt to social situations
- Handle holidays and celebrations
- Travel and eating out strategies

**Hunger and Fullness Trust:**
- Continued attention to body signals
- Eating when physically hungry
- Stopping when comfortably full
- Distinguishing hunger from cravings

**Alcohol and Treat Management:**
- Mindful consumption if chosen
- Planning for special occasions
- Balancing with other choices
- Enjoying without guilt

### Activity Maintenance

**Sustainable Activity Patterns:**
- Activities you enjoy and will continue
- Realistic time commitments
- Variety to prevent boredom
- Social components if helpful

**Adapting Over Time:**
- Modify activities as abilities change
- Try new activities periodically
- Adjust for injuries or limitations
- Balance challenge and enjoyment

**Everyday Movement Integration:**
- Continued focus on NEAT
- Active transportation choices
- Household activity maintenance
- Standing and moving breaks

**Exercise Motivation Maintenance:**
- Remember benefits beyond weight
- Schedule like important appointments
- Find new challenges periodically
- Exercise with others for accountability

### Stress and Sleep Management

**Stress Reduction Continuation:**
- Regular stress management practice
- Healthy coping strategies
- Work-life balance maintenance
- Saying no when needed

**Sleep Quality Priority:**
- Consistent sleep schedule
- Sleep environment optimization
- Wind-down routines
- Addressing sleep problems

**Emotional Well-being:**
- Regular self-check-ins
- Emotional awareness development
- Healthy expression of feelings
- Seeking help when struggling

**Work-Life Balance:**
- Setting boundaries
- Prioritizing self-care
- Managing time effectively
- Regular relaxation and fun

### Social and Professional Support

**Maintaining Support Networks:**
- Regular contact with supportive people
- Participation in maintenance groups
- Professional support as needed
- Mutual support relationships

**Handling Unsupportive Situations:**
- Continued boundary setting
- Selective sharing of journey
- Focusing on own goals
- Limiting negative influences

**Professional Resources:**
- Regular healthcare check-ups
- Dietitian consultations if helpful
- Fitness professional guidance
- Mental health support when needed

**Community Involvement:**
- Participating in health events
- Volunteering for health causes
- Sharing experiences to help others
- Being role model for health

### Planning for Setbacks

**Normalizing Setbacks:**
- Accepting that slips happen to everyone
- Viewing as part of process, not failure
- Learning from each experience
- Quick return to healthy habits

**Emergency Plan Creation:**
- Identify personal high-risk situations
- Have specific strategies ready
- Know when to seek extra help
- Quick response protocols

**Self-Forgiveness Practice:**
- Letting go of guilt quickly
- Focusing on next right choice
- Maintaining self-respect
- Avoiding perfectionism

**Rapid Recovery Strategies:**
- Immediate return to tracking if helpful
- Extra activity if appropriate
- Support system contact
- Review of what triggered setback

### Celebrating Maintenance Success

**Regular Acknowledgment:**
- Monthly review of maintenance success
- Celebration of maintenance milestones
- Recognition of habit consistency
- Appreciation of health benefits

**Rewarding Yourself:**
- Non-food rewards for maintenance
- Treats aligned with health values
- Experiences rather than things
- Sharing successes with others

**Sharing Your Journey:**
- Inspiring others if comfortable
- Participating in maintenance communities
- Offering support to others
- Continuing learning through teaching

**Continuous Improvement:**
- Regular goal review and updating
- Trying new healthy habits
- Learning about nutrition and health
- Staying current with evidence

### Your Maintenance Plan

**Personalized Strategy Development:**
- Based on what worked during loss
- Adapted for long-term sustainability
- Includes flexibility for life changes
- Regular review and adjustment

**Written Plan Components:**
- Target weight range
- Maintenance calorie estimate
- Activity plan
- Monitoring schedule
- Problem-solving strategies

**Regular Review Schedule:**
- Monthly habit assessment
- Quarterly weight and measurement review
- Annual health marker evaluation
- Lifestyle adjustment as needed

**Lifelong Perspective:**
- Viewing maintenance as permanent
- Adapting through life stages
- Embracing health as journey
- Finding joy in healthy living

Remember: Weight maintenance is an ongoing process that requires attention and adaptation. By developing sustainable habits, maintaining supportive environments, and cultivating a flexible, compassionate mindset, you can successfully maintain your health achievements for life. You've learned the skills—now trust yourself to use them consistently while adapting to life's changes.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the main focus during weight maintenance phase?",
          options: [
            "Sustaining new habits and preventing regain",
            "Continuing rapid weight loss",
            "Trying new extreme diets",
            "Only maintaining current exercise"
          ],
          correctAnswer: 0,
          explanation: "Maintenance focuses on sustaining healthy habits developed during weight loss to prevent regain."
        },
        {
          id: 2,
          question: "How should maintenance weight goals be set?",
          options: [
            "As a range rather than single number",
            "Exactly at lowest achieved weight",
            "Below initial goal for safety",
            "The same for everyone"
          ],
          correctAnswer: 0,
          explanation: "A weight range (like 5-pound range) allows natural fluctuations while maintaining overall success."
        },
        {
          id: 3,
          question: "How do calories typically change in maintenance?",
          options: [
            "Gradually increase to maintenance level",
            "Stay at weight loss level forever",
            "Decrease further for more loss",
            "Vary randomly without pattern"
          ],
          correctAnswer: 0,
          explanation: "Calories increase gradually from weight loss level to maintenance level to sustain weight."
        },
        {
          id: 4,
          question: "What are early warning signs of potential regain?",
          options: [
            "Clothes fitting tighter and skipping exercise regularly",
            "Only scale weight increase",
            "Perfect adherence to all habits",
            "Increased energy levels"
          ],
          correctAnswer: 0,
          explanation: "Early signs include clothes tightening, returning to old habits, and avoiding monitoring."
        },
        {
          id: 5,
          question: "What is a trigger weight in maintenance?",
          options: [
            "Specific weight above goal that triggers intervention",
            "Lowest weight ever achieved",
            "Weight when starting maintenance",
            "Ideal weight from charts"
          ],
          correctAnswer: 0,
          explanation: "A trigger weight (typically 3-5 pounds above goal) signals need for immediate intervention."
        },
        {
          id: 6,
          question: "How can health behaviors become permanent?",
          options: [
            "View them as non-negotiable parts of life",
            "Only practice them when motivated",
            "Follow them perfectly always",
            "Change them frequently for variety"
          ],
          correctAnswer: 0,
          explanation: "When health behaviors become integrated into identity and viewed as essential, they're more sustainable."
        },
        {
          id: 7,
          question: "What helps during major life transitions?",
          options: [
            "Maintaining core habits and planning ahead",
            "Abandoning all habits during change",
            "Waiting until life stabilizes",
            "Only focusing on the transition"
          ],
          correctAnswer: 0,
          explanation: "Keeping basic healthy routines during transitions provides stability and prevents major setbacks."
        },
        {
          id: 8,
          question: "What is identity integration in maintenance?",
          options: [
            "Health behaviors become natural expression of who you are",
            "Hiding health behaviors from others",
            "Only identifying as former dieter",
            "Changing identity completely"
          ],
          correctAnswer: 0,
          explanation: "When healthy behaviors align with self-concept ("I'm a healthy person"), they become more automatic."
        },
        {
          id: 9,
          question: "What is a balanced approach to nutrition in maintenance?",
          options: [
            "Mostly nutrient-dense foods with flexibility",
            "Only eating perfect foods always",
            "Eliminating all treat foods forever",
            "Eating whatever you want freely"
          ],
          correctAnswer: 0,
          explanation: "Balance means mostly healthy choices with planned flexibility for enjoyment and social situations."
        },
        {
          id: 10,
          question: "How should setbacks be viewed in maintenance?",
          options: [
            "As normal part of process and learning opportunities",
            "As complete failures requiring restart",
            "As proof maintenance is impossible",
            "As reasons to give up entirely"
          ],
          correctAnswer: 0,
          explanation: "Setbacks are normal and provide valuable information for improving maintenance strategies."
        },
        {
          id: 11,
          question: "What is a growth mindset in maintenance?",
          options: [
            "Viewing challenges as opportunities to learn and adapt",
            "Believing abilities are fixed and unchangeable",
            "Only focusing on past successes",
            "Avoiding all challenges"
          ],
          correctAnswer: 0,
          explanation: "Growth mindset sees maintenance as ongoing learning process requiring adaptation and problem-solving."
        },
        {
          id: 12,
          question: "What are non-scale victories?",
          options: [
            "Health improvements not related to weight number",
            "Only weight loss achievements",
            "Winning competitions against others",
            "Scale numbers going down rapidly"
          ],
          correctAnswer: 0,
          explanation: "Non-scale victories include improved energy, better health markers, clothing fit, and physical abilities."
        },
        {
          id: 13,
          question: "Why continue regular monitoring in maintenance?",
          options: [
            "Catches small regains early when easier to address",
            "Only necessary during weight loss",
            "Causes unnecessary stress",
            "Is obsessive and unhealthy"
          ],
          correctAnswer: 0,
          explanation: "Regular monitoring helps detect small changes early, allowing quick correction before major regain."
        },
        {
          id: 14,
          question: "How can you maintain exercise motivation long-term?",
          options: [
            "Remember benefits beyond weight and schedule consistently",
            "Only exercise when perfectly motivated",
            "Change activities constantly",
            "Exercise only for weight control"
          ],
          correctAnswer: 0,
          explanation: "Focusing on multiple benefits (mood, energy, health) and treating exercise as appointment supports consistency."
        },
        {
          id: 15,
          question: "What should an emergency plan for setbacks include?",
          options: [
            "Specific strategies for high-risk situations",
            "Only general good intentions",
            "Waiting until crisis passes",
            "Starting over completely"
          ],
          correctAnswer: 0,
          explanation: "Effective plans identify personal triggers and have specific, practiced responses ready."
        },
        {
          id: 16,
          question: "What is self-forgiveness in maintenance?",
          options: [
            "Letting go of guilt quickly after slips",
            "Making excuses for all behaviors",
            "Never holding yourself accountable",
            "Ignoring all mistakes"
          ],
          correctAnswer: 0,
          explanation: "Self-forgiveness means releasing guilt while maintaining responsibility and commitment to goals."
        },
        {
          id: 17,
          question: "How should maintenance be celebrated?",
          options: [
            "Regular acknowledgment of successes and non-food rewards",
            "Only when reaching perfect weight",
            "With large food-based celebrations",
            "By comparing to others' success"
          ],
          correctAnswer: 0,
          explanation: "Regular celebration of maintenance milestones with non-food rewards reinforces positive behaviors."
        },
        {
          id: 18,
          question: "What is a written maintenance plan?",
          options: [
            "Personalized strategy including target range and monitoring schedule",
            "Only calorie counting details",
            "Strict diet rules to follow",
            "Exercise regimen only"
          ],
          correctAnswer: 0,
          explanation: "A comprehensive written plan includes target range, strategies, monitoring, and problem-solving approaches."
        },
        {
          id: 19,
          question: "What is the lifelong perspective on maintenance?",
          options: [
            "Viewing health as ongoing journey requiring adaptation",
            "Seeing maintenance as temporary phase",
            "Only focusing on immediate present",
            "Believing maintenance gets easier automatically"
          ],
          correctAnswer: 0,
          explanation: "Lifelong perspective accepts that maintenance requires ongoing attention and adaptation through life stages."
        },
        {
          id: 20,
          question: "What is most important for long-term maintenance success?",
          options: [
            "Sustainable habits, flexible mindset, and regular monitoring",
            "Perfect adherence to initial plan",
            "Following latest diet trends",
            "Extreme restriction and exercise"
          ],
          correctAnswer: 0,
          explanation: "Sustainable habits, adaptability, self-compassion, and consistent monitoring support long-term maintenance."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What is weight management?",
      options: [
        "Adopting long-term lifestyle strategies for healthy weight",
        "Quick fixes and extreme dieting",
        "Only counting calories strictly",
        "Exercising intensely every day"
      ],
      correctAnswer: 0,
      explanation: "Weight management involves sustainable lifestyle strategies including balanced eating, regular activity, and behavior changes."
    },
    {
      id: 2,
      question: "What is energy balance?",
      options: [
        "Relationship between calories consumed and calories burned",
        "Eating equal amounts of all food groups",
        "Balancing work and exercise time",
        "Equalizing protein and carbohydrate intake"
      ],
      correctAnswer: 0,
      explanation: "Energy balance compares calories from food/drinks (calories in) with calories burned through metabolism/activity (calories out)."
    },
    {
      id: 3,
      question: "What BMI range is considered healthy weight?",
      options: [
        "18.5 to 24.9",
        "Below 18.5",
        "25 to 29.9",
        "30 and above"
      ],
      correctAnswer: 0,
      explanation: "BMI of 18.5 to 24.9 is considered healthy weight range for most adults."
    },
    {
      id: 4,
      question: "What are complex carbohydrates?",
      options: [
        "Starches and fiber found in whole grains and vegetables",
        "Only sugars in fruits and milk",
        "Added sugars in processed foods",
        "Simple sugars for quick energy"
      ],
      correctAnswer: 0,
      explanation: "Complex carbs include starches and fiber from whole grains, vegetables, and legumes that provide sustained energy."
    },
    {
      id: 5,
      question: "What does the plate method recommend for vegetables?",
      options: [
        "Half the plate should be non-starchy vegetables",
        "Quarter plate of vegetables only",
        "Small side dish of vegetables",
        "Vegetables are optional on the plate"
      ],
      correctAnswer: 0,
      explanation: "The plate method suggests filling half your plate with non-starchy vegetables for balanced nutrition."
    },
    {
      id: 6,
      question: "Why is breakfast important for weight management?",
      options: [
        "Helps control hunger and provides morning energy",
        "Must be the largest meal of the day",
        "Should be skipped to save calories",
        "Only matters if you exercise first thing"
      ],
      correctAnswer: 0,
      explanation: "Breakfast can help prevent overeating later and provides energy for morning activities."
    },
    {
      id: 7,
      question: "What does aerobic exercise primarily improve?",
      options: [
        "Cardiovascular health and burns calories",
        "Only muscle strength and size",
        "Flexibility without calorie burn",
        "Balance but not fitness"
      ],
      correctAnswer: 0,
      explanation: "Aerobic exercise strengthens heart and lungs while burning calories through continuous movement."
    },
    {
      id: 8,
      question: "Why is strength training important for weight management?",
      options: [
        "Helps maintain muscle mass which supports metabolism",
        "Only builds big muscles for appearance",
        "Burns most calories during the workout",
        "Is easier than cardio for everyone"
      ],
      correctAnswer: 0,
      explanation: "Strength training preserves muscle during weight loss, and muscle tissue burns more calories at rest than fat."
    },
    {
      id: 9,
      question: "What are current activity recommendations for adults?",
      options: [
        "150 minutes moderate or 75 minutes vigorous aerobic weekly",
        "60 minutes intense exercise daily",
        "Only weekend activities count",
        "No specific recommendations exist"
      ],
      correctAnswer: 0,
      explanation: "Guidelines recommend 150 minutes moderate or 75 minutes vigorous aerobic activity weekly, plus strength training."
    },
    {
      id: 10,
      question: "What are the stages in the Stages of Change model?",
      options: [
        "Precontemplation, contemplation, preparation, action, maintenance",
        "Only starting and finishing stages",
        "Planning, doing, reviewing",
        "Motivation, action, completion"
      ],
      correctAnswer: 0,
      explanation: "The model includes precontemplation, contemplation, preparation, action, and maintenance stages."
    },
    {
      id: 11,
      question: "What does SMART stand for in goal setting?",
      options: [
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Simple, Moderate, Active, Realistic, Timely",
        "Strong, Meaningful, Active, Responsible, Targeted",
        "Specific, Manageable, Attainable, Reasonable, Timed"
      ],
      correctAnswer: 0,
      explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound for effectiveness."
    },
    {
      id: 12,
      question: "What are the three components of habit formation?",
      options: [
        "Cue, routine, reward",
        "Plan, action, review",
        "Want, need, do",
        "Start, continue, finish"
      ],
      correctAnswer: 0,
      explanation: "Habits form through cue (trigger), routine (behavior), and reward (benefit), repeated consistently."
    },
    {
      id: 13,
      question: "What is mindful eating?",
      options: [
        "Paying full attention to the eating experience with awareness",
        "Only eating healthy foods exclusively",
        "Counting every calorie consumed",
        "Following strict meal timing rules"
      ],
      correctAnswer: 0,
      explanation: "Mindful eating involves paying attention to the eating experience, noticing flavors, and recognizing hunger/fullness cues."
    },
    {
      id: 14,
      question: "What distinguishes physical hunger from emotional hunger?",
      options: [
        "Physical hunger builds gradually, emotional is sudden and specific",
        "Only physical hunger involves stomach signals",
        "Emotional hunger is always stronger",
        "They feel exactly the same"
      ],
      correctAnswer: 0,
      explanation: "Physical hunger develops gradually with bodily signals, while emotional hunger often appears suddenly with specific cravings."
    },
    {
      id: 15,
      question: "Why minimize distractions during eating?",
      options: [
        "Helps recognize hunger/fullness cues and increases satisfaction",
        "Makes eating boring and unpleasant",
        "Is only important for formal meals",
        "Has no effect on eating experience"
      ],
      correctAnswer: 0,
      explanation: "Eating without distractions allows you to tune into body signals and fully experience food, increasing satisfaction."
    },
    {
      id: 16,
      question: "What is the main focus during weight maintenance phase?",
      options: [
        "Sustaining new habits and preventing regain",
        "Continuing rapid weight loss",
        "Trying new extreme diets",
        "Only maintaining current exercise"
      ],
      correctAnswer: 0,
      explanation: "Maintenance focuses on sustaining healthy habits developed during weight loss to prevent regain."
    },
    {
      id: 17,
      question: "How should maintenance weight goals be set?",
      options: [
        "As a range rather than single number",
        "Exactly at lowest achieved weight",
        "Below initial goal for safety",
        "The same for everyone"
      ],
      correctAnswer: 0,
      explanation: "A weight range (like 5-pound range) allows natural fluctuations while maintaining overall success."
    },
    {
      id: 18,
      question: "What are early warning signs of potential regain?",
      options: [
        "Clothes fitting tighter and skipping exercise regularly",
        "Only scale weight increase",
        "Perfect adherence to all habits",
        "Increased energy levels"
      ],
      correctAnswer: 0,
      explanation: "Early signs include clothes tightening, returning to old habits, and avoiding monitoring."
    },
    {
      id: 19,
      question: "What is basal metabolic rate (BMR)?",
      options: [
        "Calories your body needs at complete rest",
        "Calories burned during intense exercise",
        "Energy used to digest food",
        "Calories from daily movement"
      ],
      correctAnswer: 0,
      explanation: "BMR is the calories your body needs to maintain basic functions like breathing and circulation while at rest."
    },
    {
      id: 20,
      question: "What is a sustainable rate of weight loss?",
      options: [
        "1-2 pounds per week",
        "5-10 pounds per week",
        "As fast as possible",
        "Weight shouldn't change weekly"
      ],
      correctAnswer: 0,
      explanation: "Slow, steady weight loss of 1-2 pounds per week is more sustainable and healthier than rapid loss."
    },
    {
      id: 21,
      question: "What visual cue represents a protein portion?",
      options: [
        "Deck of cards or palm of hand",
        "Computer mouse or clenched fist",
        "Baseball or two hands cupped",
        "Thumb tip or dice"
      ],
      correctAnswer: 0,
      explanation: "A serving of protein should be about the size of a deck of cards or the palm of your hand."
    },
    {
      id: 22,
      question: "How does water support weight management?",
      options: [
        "Helps control appetite and supports metabolism",
        "Directly burns fat cells",
        "Eliminates all calories consumed",
        "Replaces need for all other beverages"
      ],
      correctAnswer: 0,
      explanation: "Water can help you feel full, supports metabolic processes, and replaces higher-calorie beverages."
    },
    {
      id: 23,
      question: "What does NEAT stand for?",
      options: [
        "Non-exercise activity thermogenesis",
        "New exercise adaptation technique",
        "Nutritional energy assessment tool",
        "Natural exercise awareness training"
      ],
      correctAnswer: 0,
      explanation: "NEAT refers to calories burned through daily movements like walking, standing, and fidgeting."
    },
    {
      id: 24,
      question: "How can you increase daily steps?",
      options: [
        "Park farther away and take stairs",
        "Only through formal exercise",
        "Buying a treadmill for home",
        "Tracking steps perfectly daily"
      ],
      correctAnswer: 0,
      explanation: "Simple choices like parking farther, taking stairs, and walking breaks add significant daily movement."
    },
    {
      id: 25,
      question: "What is the difference between process and outcome goals?",
      options: [
        "Process goals are actions, outcome goals are results",
        "Process goals are less important",
        "Only outcome goals matter",
        "They are the same thing"
      ],
      correctAnswer: 0,
      explanation: "Process goals focus on actions you control (exercise daily), while outcome goals focus on results (lose weight)."
    },
    {
      id: 26,
      question: "What is cognitive restructuring?",
      options: [
        "Changing unhelpful thought patterns",
        "Only thinking positive thoughts always",
        "Ignoring all negative thoughts",
        "Memorizing affirmations"
      ],
      correctAnswer: 0,
      explanation: "Cognitive restructuring identifies and challenges unhelpful thoughts, replacing them with more balanced thinking."
    },
    {
      id: 27,
      question: "What number on the fullness scale represents comfortably satisfied?",
      options: [
        "5-6",
        "1-2",
        "8-9",
        "Exactly 10"
      ],
      correctAnswer: 0,
      explanation: "On a 1-10 scale with 1 being ravenous and 10 being painfully full, 5-6 represents comfortably satisfied."
    },
    {
      id: 28,
      question: "How long should meals ideally take?",
      options: [
        "At least 20 minutes for fullness signals to register",
        "As quickly as possible to save time",
        "Exactly 30 minutes always",
        "However long others take to eat"
      ],
      correctAnswer: 0,
      explanation: "Taking at least 20 minutes allows time for fullness signals from your stomach to reach your brain."
    },
    {
      id: 29,
      question: "How do calories typically change in maintenance?",
      options: [
        "Gradually increase to maintenance level",
        "Stay at weight loss level forever",
        "Decrease further for more loss",
        "Vary randomly without pattern"
      ],
      correctAnswer: 0,
      explanation: "Calories increase gradually from weight loss level to maintenance level to sustain weight."
    },
    {
      id: 30,
      question: "What is a trigger weight in maintenance?",
      options: [
        "Specific weight above goal that triggers intervention",
        "Lowest weight ever achieved",
        "Weight when starting maintenance",
        "Ideal weight from charts"
      ],
      correctAnswer: 0,
      explanation: "A trigger weight (typically 3-5 pounds above goal) signals need for immediate intervention."
    },
    {
      id: 31,
      question: "What happens when calories in exceed calories out?",
      options: [
        "Weight gain occurs",
        "Weight loss occurs",
        "Weight stays the same",
        "Metabolism speeds up"
      ],
      correctAnswer: 0,
      explanation: "When you consume more calories than you burn, the excess is stored as fat, leading to weight gain."
    },
    {
      id: 32,
      question: "What are healthy fat sources?",
      options: [
        "Avocado, nuts, seeds, and olive oil",
        "Only butter and cream",
        "Fried foods and processed snacks",
        "Margarine and shortening"
      ],
      correctAnswer: 0,
      explanation: "Healthy fats come from plant sources like avocado, nuts, seeds, and olive oil, and support overall health."
    },
    {
      id: 33,
      question: "What should you do before starting new exercise?",
      options: [
        "Consult healthcare provider if new or with health concerns",
        "Buy expensive equipment first",
        "Start intense program immediately",
        "Only exercise if already fit"
      ],
      correctAnswer: 0,
      explanation: "Medical clearance is wise when starting new exercise, especially with health conditions or after long inactivity."
    },
    {
      id: 34,
      question: "What makes exercise more enjoyable?",
      options: [
        "Choosing activities you actually like",
        "Only doing what burns most calories",
        "Following strict routines always",
        "Exercising alone always"
      ],
      correctAnswer: 0,
      explanation: "Enjoyment comes from activities you like, which increases likelihood you'll continue them long-term."
    },
    {
      id: 35,
      question: "How can you create effective cues for new habits?",
      options: [
        "Link new habits to existing routines",
        "Only rely on willpower alone",
        "Wait for perfect conditions",
        "Make cues complicated"
      ],
      correctAnswer: 0,
      explanation: "Linking new habits to established routines (like brushing teeth) creates natural cues for behavior."
    },
    {
      id: 36,
      question: "How does stress affect weight management?",
      options: [
        "Can increase appetite and emotional eating",
        "Always causes weight loss",
        "Has no effect on eating behaviors",
        "Only affects exercise motivation"
      ],
      correctAnswer: 0,
      explanation: "Stress can increase cortisol, which may increase appetite, particularly for high-calorie foods, and lead to emotional eating."
    },
    {
      id: 37,
      question: "What senses are involved in mindful eating?",
      options: [
        "All five senses: sight, smell, touch, sound, taste",
        "Only taste matters",
        "Sight and taste only",
        "Smell is most important"
      ],
      correctAnswer: 0,
      explanation: "Mindful eating engages all senses to fully experience food, including appearance, aroma, texture, sounds, and flavors."
    },
    {
      id: 38,
      question: "How should setbacks be viewed in maintenance?",
      options: [
        "As normal part of process and learning opportunities",
        "As complete failures requiring restart",
        "As proof maintenance is impossible",
        "As reasons to give up entirely"
      ],
      correctAnswer: 0,
      explanation: "Setbacks are normal and provide valuable information for improving maintenance strategies."
    },
    {
      id: 39,
      question: "What is a growth mindset in maintenance?",
      options: [
        "Viewing challenges as opportunities to learn and adapt",
        "Believing abilities are fixed and unchangeable",
        "Only focusing on past successes",
        "Avoiding all challenges"
      ],
      correctAnswer: 0,
      explanation: "Growth mindset sees maintenance as ongoing learning process requiring adaptation and problem-solving."
    },
    {
      id: 40,
      question: "What is most important for long-term maintenance success?",
      options: [
        "Sustainable habits, flexible mindset, and regular monitoring",
        "Perfect adherence to initial plan",
        "Following latest diet trends",
        "Extreme restriction and exercise"
      ],
      correctAnswer: 0,
      explanation: "Sustainable habits, adaptability, self-compassion, and consistent monitoring support long-term maintenance."
    }
  ]
};

export default weightManagementCertificate;
