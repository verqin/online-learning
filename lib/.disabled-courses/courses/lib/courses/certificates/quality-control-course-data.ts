// Quality Control (Certificate) Course Data
// This course is designed to be simple, practical, and easy to learn

export const qualityControlCertificateCourse = {
  // COURSE METADATA
  id: "quality-control-certificate",
  title: "Quality Control (Certificate)",
  description: "Learn practical quality control techniques to ensure products meet standards. Master inspection methods, documentation, and basic quality tools for manufacturing and service industries.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "✅",
  badge: "Certificate",
  
  // MODULES DATA
  modules: [
    // MODULE 1: Quality Control Foundations
    {
      id: 1,
      title: "Quality Control Foundations",
      content: `# Module 1: Quality Control Foundations

Welcome to Quality Control! This module introduces the basic concepts you need to understand quality control.

## What is Quality Control?
Quality Control (QC) is the process of ensuring products or services meet specific standards and requirements. It involves checking, testing, and verifying that everything works correctly before it reaches the customer.

## Three Main Quality Concepts

### 1. Quality Standards
Quality standards are the rules and requirements that products must meet. They can be:
- Company standards (your organization's requirements)
- Industry standards (common rules for your type of business)
- Customer standards (what your specific customers expect)
- Government standards (legal and safety requirements)

### 2. The Quality Control Process
The basic quality control process has four simple steps:
1. **Set standards** - Decide what "good quality" means
2. **Measure products** - Check if products meet the standards
3. **Compare results** - See if measurements match standards
4. **Take action** - Fix problems when found

### 3. Why Quality Matters
Good quality control helps:
- Reduce waste and save money
- Make customers happy
- Build a good reputation
- Avoid returns and complaints
- Keep workers safe

## Key Quality Terms You Should Know

**Defect**: Any problem or mistake in a product
**Inspection**: The act of checking products for defects
**Sample**: A small number of products checked instead of all products
**Acceptable Quality Level (AQL)**: The maximum number of defects allowed
**Tolerance**: The amount of variation allowed in measurements

## Real-World Example
Imagine a bakery making cookies. Their quality control might check:
- Are cookies the right size?
- Do they taste good?
- Are they baked properly?
- Is the packaging clean and secure?

## Quality Control vs. Quality Assurance
Quality Control focuses on finding defects in finished products. Quality Assurance focuses on preventing defects during the production process. QC is like checking cookies after baking. QA is like following the recipe correctly while baking.

## Simple Quality Tools
You'll learn these tools in detail later:
- **Checklists**: Simple lists of things to check
- **Charts**: Visual ways to track quality over time
- **Diagrams**: Pictures that help understand problems

## Your Role in Quality Control
Everyone in a company plays a role in quality:
- Workers check their own work
- Inspectors check final products
- Managers make quality decisions
- Customers provide feedback

## Quality Mindset
Developing a quality mindset means:
- Taking pride in good work
- Paying attention to details
- Speaking up about problems
- Always looking for improvements

## Summary
Quality Control starts with understanding basic concepts and standards. It's about checking products, finding problems, and making sure customers get what they expect. Good quality saves money, makes customers happy, and helps businesses grow.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of Quality Control?",
          options: [
            "To increase production speed",
            "To ensure products meet standards",
            "To reduce employee numbers",
            "To design new products"
          ],
          correctAnswer: 1,
          explanation: "Quality Control's main purpose is to ensure products or services meet specific standards and requirements before reaching customers."
        },
        {
          id: 2,
          question: "Which of these is NOT a type of quality standard mentioned?",
          options: [
            "Company standards",
            "Weather standards",
            "Industry standards",
            "Customer standards"
          ],
          correctAnswer: 1,
          explanation: "Weather standards were not mentioned. Quality standards include company, industry, customer, and government standards."
        },
        {
          id: 3,
          question: "What is the second step in the basic quality control process?",
          options: [
            "Set standards",
            "Measure products",
            "Compare results",
            "Take action"
          ],
          correctAnswer: 1,
          explanation: "The second step is 'Measure products' - checking if products meet the standards that were set in step one."
        },
        {
          id: 4,
          question: "What does 'defect' mean in quality control?",
          options: [
            "A perfect product",
            "Any problem or mistake in a product",
            "A quality inspector",
            "A type of measurement tool"
          ],
          correctAnswer: 1,
          explanation: "A defect is any problem or mistake found in a product during quality checking."
        },
        {
          id: 5,
          question: "What does 'inspection' mean in quality control?",
          options: [
            "Designing new products",
            "Training employees",
            "Checking products for defects",
            "Shipping products to customers"
          ],
          correctAnswer: 2,
          explanation: "Inspection is the act of checking products carefully to find any defects or problems."
        },
        {
          id: 6,
          question: "What is a 'sample' in quality control?",
          options: [
            "The entire production batch",
            "A small number of products checked instead of all",
            "A quality certificate",
            "An inspection report"
          ],
          correctAnswer: 1,
          explanation: "A sample is a small selection of products that are checked instead of checking every single product."
        },
        {
          id: 7,
          question: "What does AQL stand for?",
          options: [
            "Always Quality Level",
            "Acceptable Quality Level",
            "Average Quality Limit",
            "Approved Quality List"
          ],
          correctAnswer: 1,
          explanation: "AQL stands for Acceptable Quality Level - the maximum number of defects allowed in a batch."
        },
        {
          id: 8,
          question: "What does 'tolerance' mean in measurements?",
          options: [
            "The exact measurement required",
            "The amount of variation allowed",
            "The speed of measurement",
            "The cost of measurement"
          ],
          correctAnswer: 1,
          explanation: "Tolerance is the small amount of variation allowed in measurements - how much a measurement can differ and still be acceptable."
        },
        {
          id: 9,
          question: "What is the difference between QC and QA?",
          options: [
            "QC prevents defects, QA finds defects",
            "QC finds defects, QA prevents defects",
            "There is no difference",
            "QC is for services, QA is for products"
          ],
          correctAnswer: 1,
          explanation: "Quality Control (QC) finds defects in finished products. Quality Assurance (QA) prevents defects during the production process."
        },
        {
          id: 10,
          question: "Which is a simple quality tool mentioned?",
          options: [
            "Checklists",
            "Microscopes",
            "Robots",
            "Computers"
          ],
          correctAnswer: 0,
          explanation: "Checklists are mentioned as a simple quality tool - lists of things that need to be checked."
        },
        {
          id: 11,
          question: "Who plays a role in quality control according to the module?",
          options: [
            "Only managers",
            "Only inspectors",
            "Everyone in the company",
            "Only quality department"
          ],
          correctAnswer: 2,
          explanation: "Everyone in a company plays a role in quality - workers, inspectors, managers, and even customers."
        },
        {
          id: 12,
          question: "What is a 'quality mindset'?",
          options: [
            "Focusing only on speed",
            "Taking pride in good work and attention to detail",
            "Avoiding all inspections",
            "Producing as much as possible"
          ],
          correctAnswer: 1,
          explanation: "A quality mindset means taking pride in good work, paying attention to details, and always looking for improvements."
        },
        {
          id: 13,
          question: "What does good quality control help reduce?",
          options: [
            "Employee training",
            "Waste and returns",
            "Customer numbers",
            "Product variety"
          ],
          correctAnswer: 1,
          explanation: "Good quality control helps reduce waste and product returns, which saves money."
        },
        {
          id: 14,
          question: "Which step comes after 'Compare results' in the QC process?",
          options: [
            "Set standards",
            "Measure products",
            "Take action",
            "Start over"
          ],
          correctAnswer: 2,
          explanation: "After comparing results to standards, the next step is to take action to fix any problems found."
        },
        {
          id: 15,
          question: "What type of standard might require safety features?",
          options: [
            "Company standards",
            "Government standards",
            "Customer standards",
            "Industry standards"
          ],
          correctAnswer: 1,
          explanation: "Government standards often include legal and safety requirements for products."
        },
        {
          id: 16,
          question: "In the bakery example, what was NOT checked?",
          options: [
            "Cookie size",
            "Cookie taste",
            "Baking time",
            "Delivery truck color"
          ],
          correctAnswer: 3,
          explanation: "Delivery truck color was not mentioned in the bakery quality control example."
        },
        {
          id: 17,
          question: "What is the benefit of making customers happy through quality?",
          options: [
            "It builds a good reputation",
            "It reduces product variety",
            "It increases inspection time",
            "It eliminates all standards"
          ],
          correctAnswer: 0,
          explanation: "Making customers happy through good quality helps build a good reputation for the company."
        },
        {
          id: 18,
          question: "What should workers do as part of their quality role?",
          options: [
            "Only focus on their own tasks",
            "Check their own work",
            "Ignore small defects",
            "Avoid reporting problems"
          ],
          correctAnswer: 1,
          explanation: "Workers should check their own work as part of their role in quality control."
        },
        {
          id: 19,
          question: "Which tool helps track quality over time visually?",
          options: [
            "Checklists",
            "Charts",
            "Diagrams",
            "Reports"
          ],
          correctAnswer: 1,
          explanation: "Charts are visual tools that help track quality measurements over time."
        },
        {
          id: 20,
          question: "What is the first step in the quality control process?",
          options: [
            "Measure products",
            "Set standards",
            "Compare results",
            "Take action"
          ],
          correctAnswer: 1,
          explanation: "The first step is always to set standards - deciding what 'good quality' means for the product."
        }
      ]
    },

    // MODULE 2: Inspection Methods
    {
      id: 2,
      title: "Inspection Methods",
      content: `# Module 2: Inspection Methods

Now that you understand quality foundations, let's learn how to actually inspect products. Inspection methods are the techniques used to check quality.

## Types of Inspections

### 1. Visual Inspection
This is the simplest and most common method. You use your eyes to look for problems. Examples include:
- Checking for scratches, dents, or cracks
- Looking for color differences
- Verifying labels are correct
- Ensuring packaging is clean

**Tips for good visual inspection:**
- Use good lighting
- Take your time
- Compare with a "golden sample" (perfect example)
- Check from different angles

### 2. Measurement Inspection
This involves using tools to measure physical characteristics. Common measurements include:
- **Length, width, height** - using rulers or calipers
- **Weight** - using scales
- **Temperature** - using thermometers
- **Pressure** - using pressure gauges

### 3. Functional Testing
This checks if products actually work. Examples:
- Does a light turn on?
- Does a door open and close smoothly?
- Does a calculator give correct answers?
- Does a pump move water?

## Inspection Timing

### 1. Incoming Inspection
Checking materials when they arrive from suppliers. This prevents bad materials from entering production.

### 2. In-Process Inspection
Checking products during manufacturing. This catches problems early.

### 3. Final Inspection
Checking finished products before shipping. This is the last chance to catch defects.

### 4. Random Inspection
Checking random samples instead of every product. This saves time while still maintaining quality.

## Sampling Methods

### 1. Random Sampling
Selecting products completely by chance. Like drawing numbers from a hat.

### 2. Systematic Sampling
Checking every 10th or 20th product. This creates a regular pattern.

### 3. Stratified Sampling
Checking specific groups separately. For example, checking products from each machine separately.

## Inspection Tools

### Basic Tools Everyone Should Know:

**1. Calipers** - Measure thickness or diameter
**2. Micrometers** - Very precise measurements
**3. Gauges** - Check if something fits
**4. Scales** - Measure weight
**5. Thermometers** - Measure temperature
**6. Magnifying glasses** - See small details
**7. Check sheets** - Record what you find

## Using Measurement Tools Correctly

### Important Rules:
1. **Calibrate tools regularly** - Make sure tools give correct measurements
2. **Handle tools carefully** - Dropping tools can damage them
3. **Clean tools after use** - Dirt affects measurements
4. **Store tools properly** - Keep in protective cases

## Reading Measurements

### Understanding Units:
- **Millimeters (mm)** - Small measurements (thickness of paper)
- **Centimeters (cm)** - Medium measurements (length of pencil)
- **Meters (m)** - Large measurements (room size)
- **Grams (g)** - Small weights
- **Kilograms (kg)** - Larger weights

## Inspection Documentation

### What to Record:
1. **Date and time** of inspection
2. **Inspector's name**
3. **Product details** (batch number, etc.)
4. **Number of items checked**
5. **Number of defects found**
6. **Type of defects**
7. **Action taken**

## Common Inspection Mistakes to Avoid

1. **Rushing** - Taking too little time to check properly
2. **Assuming** - Thinking "it's probably okay" without checking
3. **Distractions** - Letting noise or interruptions affect focus
4. **Poor lighting** - Not being able to see clearly
5. **Tool misuse** - Using tools incorrectly

## Developing Inspection Skills

### Practice These Skills:
1. **Attention to detail** - Notice small problems
2. **Consistency** - Check the same way every time
3. **Objectivity** - Report what you see, not what you hope to see
4. **Patience** - Quality takes time

## Practical Exercise

Imagine inspecting a batch of 100 pens. Your checklist might include:
- [ ] Ink flows smoothly
- [ ] Cap fits securely
- [ ] No cracks in plastic
- [ ] Printing on pen is clear
- [ ] Click mechanism works (for click pens)

## Quality vs. Speed Balance

Good inspectors find the right balance between:
- **Thorough checking** (finding all defects)
- **Reasonable speed** (not taking too long)
- **Consistent results** (same quality every time)

## Summary

Inspection methods are the practical techniques for checking quality. Visual inspection, measurements, and functional testing are the main approaches. Proper timing, good tools, careful documentation, and developed skills all contribute to effective inspection.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common inspection method?",
          options: [
            "X-ray inspection",
            "Visual inspection",
            "Chemical testing",
            "Sound testing"
          ],
          correctAnswer: 1,
          explanation: "Visual inspection is the simplest and most common method, using your eyes to look for problems."
        },
        {
          id: 2,
          question: "Which tool would you use to measure thickness precisely?",
          options: [
            "Thermometer",
            "Scale",
            "Calipers",
            "Magnifying glass"
          ],
          correctAnswer: 2,
          explanation: "Calipers are used to measure thickness or diameter of objects precisely."
        },
        {
          id: 3,
          question: "What type of inspection checks materials from suppliers?",
          options: [
            "Final inspection",
            "In-process inspection",
            "Incoming inspection",
            "Random inspection"
          ],
          correctAnswer: 2,
          explanation: "Incoming inspection checks materials when they arrive from suppliers, before they enter production."
        },
        {
          id: 4,
          question: "What does functional testing check?",
          options: [
            "Product color",
            "If products actually work",
            "Product weight",
            "Package design"
          ],
          correctAnswer: 1,
          explanation: "Functional testing checks if products actually work as intended, like testing if a light turns on."
        },
        {
          id: 5,
          question: "What is checking every 10th product called?",
          options: [
            "Random sampling",
            "Stratified sampling",
            "Systematic sampling",
            "Complete inspection"
          ],
          correctAnswer: 2,
          explanation: "Systematic sampling involves checking products at regular intervals, like every 10th product."
        },
        {
          id: 6,
          question: "Why should tools be calibrated regularly?",
          options: [
            "To make them look new",
            "To ensure they give correct measurements",
            "To increase their speed",
            "To reduce their cost"
          ],
          correctAnswer: 1,
          explanation: "Tools must be calibrated regularly to ensure they continue to give accurate and correct measurements."
        },
        {
          id: 7,
          question: "What should you record during inspection?",
          options: [
            "Only defects found",
            "Weather conditions",
            "Date, inspector name, and product details",
            "Customer complaints"
          ],
          correctAnswer: 2,
          explanation: "You should record date, inspector's name, product details, number checked, defects found, and action taken."
        },
        {
          id: 8,
          question: "Which is NOT a common inspection mistake?",
          options: [
            "Rushing",
            "Taking detailed notes",
            "Assuming without checking",
            "Poor lighting"
          ],
          correctAnswer: 1,
          explanation: "Taking detailed notes is good practice, not a mistake. Rushing, assuming, and poor lighting are mistakes."
        },
        {
          id: 9,
          question: "What unit is used for small weights?",
          options: [
            "Meters",
            "Grams",
            "Liters",
            "Kilograms"
          ],
          correctAnswer: 1,
          explanation: "Grams (g) are used for measuring small weights, like the weight of a pen or paperclip."
        },
        {
          id: 10,
          question: "What skill helps notice small problems?",
          options: [
            "Speed",
            "Attention to detail",
            "Strength",
            "Creativity"
          ],
          correctAnswer: 1,
          explanation: "Attention to detail is the skill that helps inspectors notice small problems that others might miss."
        },
        {
          id: 11,
          question: "When is final inspection done?",
          options: [
            "When materials arrive",
            "During production",
            "Before shipping to customers",
            "After customer receives product"
          ],
          correctAnswer: 2,
          explanation: "Final inspection is done on finished products before they are shipped to customers - the last chance to catch defects."
        },
        {
          id: 12,
          question: "What does 'calibrate' mean for tools?",
          options: [
            "Clean them",
            "Make sure they give correct measurements",
            "Paint them",
            "Use them faster"
          ],
          correctAnswer: 1,
          explanation: "Calibrating tools means checking and adjusting them to ensure they give accurate, correct measurements."
        },
        {
          id: 13,
          question: "What type of sampling selects products completely by chance?",
          options: [
            "Systematic sampling",
            "Random sampling",
            "Stratified sampling",
            "Complete sampling"
          ],
          correctAnswer: 1,
          explanation: "Random sampling means selecting products completely by chance, like drawing numbers from a hat."
        },
        {
          id: 14,
          question: "What tool helps see small details better?",
          options: [
            "Scale",
            "Thermometer",
            "Magnifying glass",
            "Pressure gauge"
          ],
          correctAnswer: 2,
          explanation: "A magnifying glass helps inspectors see small details, scratches, or imperfections more clearly."
        },
        {
          id: 15,
          question: "What should be compared during visual inspection?",
          options: [
            "With competitor's products",
            "With a 'golden sample' or perfect example",
            "With yesterday's production",
            "With customer complaints"
          ],
          correctAnswer: 1,
          explanation: "During visual inspection, products should be compared with a 'golden sample' - a perfect example of what the product should look like."
        },
        {
          id: 16,
          question: "What does in-process inspection help with?",
          options: [
            "Catching problems early",
            "Checking supplier materials",
            "Final approval",
            "Customer feedback"
          ],
          correctAnswer: 0,
          explanation: "In-process inspection catches problems during manufacturing, which allows for early correction before more products are made."
        },
        {
          id: 17,
          question: "What is a check sheet used for?",
          options: [
            "Measuring temperature",
            "Recording inspection findings",
            "Cleaning tools",
            "Shipping products"
          ],
          correctAnswer: 1,
          explanation: "A check sheet is used to record what is found during inspection - it's a simple form for tracking defects."
        },
        {
          id: 18,
          question: "What is stratified sampling?",
          options: [
            "Checking every 5th product",
            "Checking random products",
            "Checking specific groups separately",
            "Checking all products"
          ],
          correctAnswer: 2,
          explanation: "Stratified sampling means checking specific groups separately, like products from each machine or each shift."
        },
        {
          id: 19,
          question: "What does 'objective' mean for inspectors?",
          options: [
            "Report what you hope to see",
            "Report only good results",
            "Report what you actually see",
            "Report what others want"
          ],
          correctAnswer: 2,
          explanation: "Being objective means reporting exactly what you see during inspection, not what you hope to see or what others want."
        },
        {
          id: 20,
          question: "What is the last step in documentation?",
          options: [
            "Inspector's name",
            "Date and time",
            "Action taken",
            "Product color"
          ],
          correctAnswer: 2,
          explanation: "After finding defects, documenting the action taken (what was done to fix the problem) is an important final step."
        }
      ]
    },

    // MODULE 3: Quality Tools and Techniques
    {
      id: 3,
      title: "Quality Tools and Techniques",
      content: `# Module 3: Quality Tools and Techniques

Quality professionals use specific tools and techniques to identify, analyze, and solve quality problems. These tools help make quality decisions based on facts, not guesses.

## The Seven Basic Quality Tools

These are simple but powerful tools that every quality professional should know:

### 1. Checklists
Simple lists of items to check or tasks to complete. They ensure nothing is forgotten.

**Example checklist for packaging inspection:**
- [ ] Box sealed properly
- [ ] Label correct and straight
- [ ] Product secure inside
- [ ] No damage to box
- [ ] Barcode scans correctly

### 2. Pareto Charts
Bar charts that show which problems are most common. Based on the "80/20 rule" - 80% of problems come from 20% of causes.

**How to use:**
1. Collect data on all defects
2. Count how many times each defect occurs
3. Create bars from largest to smallest
4. Focus on fixing the biggest bars first

### 3. Cause and Effect Diagrams (Fishbone Diagrams)
Looks like a fish skeleton. Helps find root causes of problems by organizing possible causes into categories.

**Common categories (the 6 Ms):**
1. **Man** - People factors
2. **Machine** - Equipment problems
3. **Method** - Process issues
4. **Material** - Input problems
5. **Measurement** - Inspection issues
6. **Environment** - Workplace conditions

### 4. Histograms
Bar charts that show how often measurements fall into different ranges. Shows if production is consistent.

**Example:** Showing how many products are:
- Perfect size
- Slightly too small
- Slightly too large
- Much too small
- Much too large

### 5. Scatter Diagrams
Dots on a graph that show if two things are related. Helps answer: "When X changes, does Y change too?"

**Example:** Does machine speed affect defect rate?

### 6. Control Charts
Graphs with upper and lower limits. Shows if a process is stable or going out of control.

**Key lines on control chart:**
- **Center line** - Average measurement
- **Upper control limit** - Maximum acceptable
- **Lower control limit** - Minimum acceptable

### 7. Flow Charts
Pictures that show steps in a process. Helps understand how work flows and where problems might occur.

**Common symbols:**
- ○ Start/End
- □ Process step
- ◇ Decision point
- → Flow direction

## Problem-Solving Techniques

### 1. The 5 Whys
Ask "Why?" five times to find the root cause.

**Example:**
1. Why was product late? Machine broke.
2. Why did machine break? Belt worn out.
3. Why was belt worn out? Not replaced on schedule.
4. Why not replaced on schedule? No maintenance record.
5. Why no maintenance record? No maintenance system.
**Root cause:** Need maintenance system.

### 2. Brainstorming
Group technique to generate many ideas quickly.

**Rules for good brainstorming:**
- No criticism during idea generation
- Encourage wild ideas
- Build on others' ideas
- Aim for quantity first, quality later

### 3. Root Cause Analysis
Systematic approach to find the real cause of problems, not just symptoms.

## Data Collection Methods

### 1. Check Sheets
Simple forms for recording data as it happens.

### 2. Data Sheets
More detailed forms for specific measurements.

### 3. Automatic Data Collection
Using machines to record measurements automatically.

## Simple Statistical Concepts

### 1. Average (Mean)
Add all numbers and divide by how many numbers.

**Example:** Measurements: 10, 12, 11, 13, 14
Average = (10+12+11+13+14) ÷ 5 = 60 ÷ 5 = 12

### 2. Range
Difference between largest and smallest measurements.

**Example:** Measurements: 10, 12, 11, 13, 14
Range = 14 - 10 = 4

### 3. Variation
How much measurements differ from each other. Less variation means more consistent quality.

## Quality Improvement Cycle

### PDCA Cycle (Plan-Do-Check-Act)
1. **Plan** - Identify improvement and plan change
2. **Do** - Implement change on small scale
3. **Check** - Study results
4. **Act** - Standardize if successful, or try again

## Visual Management Tools

### 1. Andon Lights
Traffic light system:
- **Green** - Everything okay
- **Yellow** - Minor problem
- **Red** - Major problem, stop production

### 2. Quality Boards
Display boards showing:
- Current quality performance
- Problems being worked on
- Improvement projects
- Team goals

### 3. Color Coding
Using colors to show status:
- Red tags for defective items
- Green areas for good products
- Yellow for items needing rework

## Simple Quality Calculations

### 1. Defect Rate
(Number of defects ÷ Number checked) × 100

**Example:** 5 defects in 100 products
Defect rate = (5 ÷ 100) × 100 = 5%

### 2. First Time Yield
Percentage of products made correctly the first time without rework.

### 3. Cost of Quality
Money lost due to poor quality (scrap, rework, returns).

## Practical Application

**Case Study:** Cookie factory with broken cookie problem.

**Tools used:**
1. **Checklist** - Ensure all checks done
2. **Pareto Chart** - Show most common breakage causes
3. **Fishbone Diagram** - Find root causes
4. **Control Chart** - Monitor packaging machine

## Summary

Quality tools help turn quality problems into solvable puzzles. The seven basic tools provide visual ways to understand data. Problem-solving techniques like the 5 Whys help find root causes. Simple statistics help make data-based decisions. These tools work together to improve quality systematically.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which tool is a simple list of items to check?",
          options: [
            "Pareto Chart",
            "Checklist",
            "Control Chart",
            "Scatter Diagram"
          ],
          correctAnswer: 1,
          explanation: "A checklist is a simple list of items to check or tasks to complete, ensuring nothing is forgotten."
        },
        {
          id: 2,
          question: "What does the '80/20 rule' in Pareto Charts mean?",
          options: [
            "80% of time spent on 20% of work",
            "80% of problems from 20% of causes",
            "80% of products from 20% of machines",
            "80% of profit from 20% of customers"
          ],
          correctAnswer: 1,
          explanation: "The Pareto Principle (80/20 rule) suggests that 80% of problems come from 20% of the causes."
        },
        {
          id: 3,
          question: "What is another name for Cause and Effect Diagrams?",
          options: [
            "Pareto Diagrams",
            "Fishbone Diagrams",
            "Control Diagrams",
            "Flow Diagrams"
          ],
          correctAnswer: 1,
          explanation: "Cause and Effect Diagrams are often called Fishbone Diagrams because they look like a fish skeleton."
        },
        {
          id: 4,
          question: "Which is NOT one of the 6 Ms in Fishbone Diagrams?",
          options: [
            "Man",
            "Machine",
            "Method",
            "Money"
          ],
          correctAnswer: 3,
          explanation: "The 6 Ms are Man, Machine, Method, Material, Measurement, and Environment. Money is not one of them."
        },
        {
          id: 5,
          question: "What do Histograms show?",
          options: [
            "Process steps",
            "How often measurements fall in ranges",
            "Relationships between variables",
            "Problem causes"
          ],
          correctAnswer: 1,
          explanation: "Histograms are bar charts that show how often measurements fall into different ranges or categories."
        },
        {
          id: 6,
          question: "What question do Scatter Diagrams help answer?",
          options: [
            "What steps come next?",
            "When X changes, does Y change?",
            "Which problem is biggest?",
            "What is the average?"
          ],
          correctAnswer: 1,
          explanation: "Scatter Diagrams show if two variables are related - when one changes, does the other change too?"
        },
        {
          id: 7,
          question: "What do the lines on Control Charts represent?",
          options: [
            "Different products",
            "Different inspectors",
            "Control limits and average",
            "Production days"
          ],
          correctAnswer: 2,
          explanation: "Control Charts have a center line (average), upper control limit (maximum), and lower control limit (minimum)."
        },
        {
          id: 8,
          question: "What symbol represents a decision point in Flow Charts?",
          options: [
            "Circle",
            "Square",
            "Diamond",
            "Arrow"
          ],
          correctAnswer: 2,
          explanation: "In Flow Charts, a diamond shape represents a decision point where a yes/no choice must be made."
        },
        {
          id: 9,
          question: "How many times do you ask 'Why?' in the 5 Whys technique?",
          options: [
            "3 times",
            "5 times",
            "7 times",
            "Until you find root cause"
          ],
          correctAnswer: 3,
          explanation: "You ask 'Why?' repeatedly (typically about 5 times) until you find the root cause of a problem."
        },
        {
          id: 10,
          question: "What is the first rule of good brainstorming?",
          options: [
            "Only suggest perfect ideas",
            "No criticism during idea generation",
            "Only managers suggest ideas",
            "Discuss each idea immediately"
          ],
          correctAnswer: 1,
          explanation: "During brainstorming, no criticism is allowed during the idea generation phase to encourage free thinking."
        },
        {
          id: 11,
          question: "What is the average of: 5, 7, 6, 8, 9?",
          options: [
            "5",
            "6",
            "7",
            "8"
          ],
          correctAnswer: 2,
          explanation: "Average = (5+7+6+8+9) ÷ 5 = 35 ÷ 5 = 7"
        },
        {
          id: 12,
          question: "What does PDCA stand for?",
          options: [
            "Plan-Design-Check-Act",
            "Plan-Do-Check-Act",
            "Prepare-Develop-Check-Apply",
            "Plan-Develop-Check-Assess"
          ],
          correctAnswer: 1,
          explanation: "PDCA stands for Plan-Do-Check-Act, a continuous improvement cycle."
        },
        {
          id: 13,
          question: "What color Andon Light indicates a major problem?",
          options: [
            "Green",
            "Yellow",
            "Red",
            "Blue"
          ],
          correctAnswer: 2,
          explanation: "Red Andon Lights indicate major problems that require stopping production to address."
        },
        {
          id: 14,
          question: "How do you calculate defect rate?",
          options: [
            "Defects × 100",
            "(Defects ÷ Total) × 100",
            "Total ÷ Defects",
            "Defects - Total"
          ],
          correctAnswer: 1,
          explanation: "Defect rate = (Number of defects ÷ Number of products checked) × 100 to get percentage."
        },
        {
          id: 15,
          question: "What does 'First Time Yield' measure?",
          options: [
            "Production speed",
            "Products made correctly first time",
            "Customer satisfaction",
            "Inspection time"
          ],
          correctAnswer: 1,
          explanation: "First Time Yield measures the percentage of products made correctly the first time without needing rework."
        },
        {
          id: 16,
          question: "What does a Green Andon Light mean?",
          options: [
            "Minor problem",
            "Major problem",
            "Everything okay",
            "Machine starting"
          ],
          correctAnswer: 2,
          explanation: "A Green Andon Light means everything is running normally with no problems."
        },
        {
          id: 17,
          question: "What is the purpose of Root Cause Analysis?",
          options: [
            "To blame someone",
            "To find real causes, not symptoms",
            "To increase production",
            "To reduce inspection"
          ],
          correctAnswer: 1,
          explanation: "Root Cause Analysis aims to find the fundamental, underlying causes of problems rather than just addressing symptoms."
        },
        {
          id: 18,
          question: "What does 'variation' refer to in quality?",
          options: [
            "Product variety",
            "Different inspectors",
            "How much measurements differ",
            "Color changes"
          ],
          correctAnswer: 2,
          explanation: "Variation refers to how much individual measurements differ from each other. Less variation means more consistent quality."
        },
        {
          id: 19,
          question: "What is displayed on Quality Boards?",
          options: [
            "Only defects",
            "Current performance and improvement projects",
            "Employee salaries",
            "Customer names"
          ],
          correctAnswer: 1,
          explanation: "Quality Boards display current quality performance, problems being worked on, improvement projects, and team goals."
        },
        {
          id: 20,
          question: "What does the 'Check' step in PDCA involve?",
          options: [
            "Planning improvements",
            "Implementing changes",
            "Studying results",
            "Standardizing success"
          ],
          correctAnswer: 2,
          explanation: "The 'Check' step in PDCA involves studying the results of the implemented change to see if it worked."
        }
      ]
    },

    // MODULE 4: Quality Standards and Documentation
    {
      id: 4,
      title: "Quality Standards and Documentation",
      content: `# Module 4: Quality Standards and Documentation

Quality standards provide the rules for what constitutes good quality. Documentation ensures everyone follows these rules consistently and provides evidence of quality compliance.

## Understanding Quality Standards

### What Are Standards?
Standards are agreed-upon rules that define:
- What a product should be like
- How it should perform
- How it should be tested
- What safety features it needs

### Types of Standards

#### 1. International Standards
Used worldwide. Examples:
- **ISO 9001** - Quality Management Systems
- **ISO 14001** - Environmental Management
- **ISO 45001** - Occupational Health and Safety

#### 2. Industry Standards
Specific to particular industries:
- **Automotive** - IATF 16949
- **Medical devices** - ISO 13485
- **Food safety** - ISO 22000, HACCP
- **Aerospace** - AS9100

#### 3. National Standards
Set by countries:
- **ANSI** - American National Standards Institute (USA)
- **BSI** - British Standards Institution (UK)
- **DIN** - German Institute for Standardization

#### 4. Company Standards
Internal rules specific to your organization:
- Product specifications
- Process instructions
- Quality procedures

### ISO 9001 Basics
ISO 9001 is the most famous quality standard. It focuses on:
1. **Customer focus** - Meet customer requirements
2. **Leadership** - Management commitment
3. **Engagement of people** - Involve everyone
4. **Process approach** - Manage activities as processes
5. **Improvement** - Continuously get better
6. **Evidence-based decisions** - Use data
7. **Relationship management** - Work with suppliers

## Quality Documentation System

### The Four Levels of Documentation

#### Level 1: Quality Manual
The top document that describes:
- Company quality policy
- Quality objectives
- Organization structure
- How the quality system works

#### Level 2: Procedures
Documents that describe:
- Who does what
- When activities happen
- How processes work
- What records to keep

**Example procedures:**
- Inspection procedure
- Calibration procedure
- Document control procedure
- Corrective action procedure

#### Level 3: Work Instructions
Detailed instructions for specific tasks:
- How to operate a machine
- How to perform a test
- How to complete a form
- Step-by-step guides

#### Level 4: Records
Evidence that activities were done correctly:
- Inspection reports
- Calibration certificates
- Training records
- Meeting minutes

### Document Control

#### Why Control Documents?
- Ensure latest version is used
- Prevent use of outdated documents
- Control changes
- Maintain consistency

#### Document Control Elements:
1. **Unique identification** - Document number and revision
2. **Approval** - Who approved the document
3. **Distribution** - Who gets copies
4. **Changes** - How changes are made
5. **Obsolete documents** - How to remove old versions

### Common Quality Documents

#### 1. Inspection Reports
Records of what was found during inspection:
- Product identification
- Number inspected
- Number accepted/rejected
- Defects found
- Inspector signature

#### 2. Non-Conformance Reports (NCR)
Documents that record when something doesn't meet requirements:
- Description of problem
- Location found
- Severity level
- Immediate action taken
- Root cause investigation
- Corrective action planned

#### 3. Calibration Records
Proof that measurement tools are accurate:
- Tool identification
- Calibration date
- Next calibration due
- Calibration results
- Calibration agency

#### 4. Training Records
Evidence that people are trained:
- Employee name
- Training completed
- Date of training
- Trainer name
- Assessment results

## Creating Good Documentation

### Characteristics of Effective Documents:
1. **Clear** - Easy to understand
2. **Concise** - Not too long
3. **Complete** - Contains all needed information
4. **Consistent** - Same format throughout
5. **Current** - Up-to-date
6. **Controlled** - Properly managed

### Writing Tips:
- Use simple language
- Use bullet points for lists
- Include examples
- Add pictures or diagrams if helpful
- Get feedback from users

## Audits and Compliance

### What is an Audit?
Systematic examination to verify:
- Standards are being followed
- Documents are being used
- Records are being kept
- Improvements are being made

### Types of Audits:
1. **Internal Audits** - Company checks itself
2. **External Audits** - Customers or certification bodies check
3. **Supplier Audits** - Checking your suppliers

### Audit Process:
1. **Planning** - Decide what to check
2. **Preparation** - Review documents
3. **Execution** - Conduct the audit
4. **Reporting** - Document findings
5. **Follow-up** - Check corrections

## Maintaining Standards

### Key Activities:
1. **Regular reviews** - Check if standards still make sense
2. **Updates** - Incorporate improvements
3. **Training** - Ensure everyone knows the standards
4. **Monitoring** - Check compliance regularly
5. **Improvement** - Make standards better over time

## Practical Examples

### Example 1: Simple Work Instruction
**Title:** How to Check Product Weight
**Steps:**
1. Place empty container on scale
2. Press 'Tare' button to zero scale
3. Add product to container
4. Read weight on display
5. Compare to required weight (100g ± 2g)
6. Record result on check sheet

### Example 2: Inspection Report Form
**Fields to include:**
- Date: _________
- Product: _________
- Batch #: _________
- Inspector: _________
- Sample size: _________
- Defects found: _________
- Action: Accept □ Reject □ Hold □
- Signature: _________

## Benefits of Good Documentation

1. **Consistency** - Everyone works the same way
2. **Training** - New people learn faster
3. **Compliance** - Proof for customers and auditors
4. **Improvement** - Basis for making changes
5. **Knowledge retention** - Not lost when people leave

## Summary
Quality standards provide the rules, and documentation ensures those rules are followed. A good documentation system has clear levels from policy to records. Document control prevents confusion from outdated information. Good documentation supports consistency, training, compliance, and continuous improvement.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do quality standards define?",
          options: [
            "Employee salaries",
            "Rules for what good quality is",
            "Production speed",
            "Company profits"
          ],
          correctAnswer: 1,
          explanation: "Quality standards define the rules for what constitutes good quality - how products should be, perform, and be tested."
        },
        {
          id: 2,
          question: "Which is an international quality standard?",
          options: [
            "ISO 9001",
            "ANSI",
            "BSI",
            "DIN"
          ],
          correctAnswer: 0,
          explanation: "ISO 9001 is an international standard for Quality Management Systems used worldwide."
        },
        {
          id: 3,
          question: "What does ISO 9001 focus on first?",
          options: [
            "Maximum production",
            "Customer focus",
            "Lowest cost",
            "Fastest delivery"
          ],
          correctAnswer: 1,
          explanation: "ISO 9001's first quality principle is customer focus - meeting customer requirements and enhancing satisfaction."
        },
        {
          id: 4,
          question: "What is Level 1 documentation?",
          options: [
            "Work instructions",
            "Quality Manual",
            "Procedures",
            "Records"
          ],
          correctAnswer: 1,
          explanation: "Level 1 is the Quality Manual - the top document describing the company's quality policy and system."
        },
        {
          id: 5,
          question: "What are step-by-step task guides called?",
          options: [
            "Quality Manual",
            "Procedures",
            "Work Instructions",
            "Records"
          ],
          correctAnswer: 2,
          explanation: "Work Instructions (Level 3) provide detailed step-by-step guides for specific tasks."
        },
        {
          id: 6,
          question: "What is evidence that activities were done called?",
          options: [
            "Manuals",
            "Procedures",
            "Instructions",
            "Records"
          ],
          correctAnswer: 3,
          explanation: "Records (Level 4) provide evidence that activities were done correctly, like inspection reports or training records."
        },
        {
          id: 7,
          question: "Why is document control important?",
          options: [
            "To increase paper usage",
            "To ensure latest version is used",
            "To make documents secret",
            "To reduce training"
          ],
          correctAnswer: 1,
          explanation: "Document control ensures everyone uses the latest version of documents and prevents use of outdated versions."
        },
        {
          id: 8,
          question: "What does NCR stand for?",
          options: [
            "New Customer Request",
            "Non-Conformance Report",
            "National Calibration Record",
            "Next Change Required"
          ],
          correctAnswer: 1,
          explanation: "NCR stands for Non-Conformance Report - a document recording when something doesn't meet requirements."
        },
        {
          id: 9,
          question: "What do calibration records prove?",
          options: [
            "Employee attendance",
            "Measurement tools are accurate",
            "Product sales",
            "Customer satisfaction"
          ],
          correctAnswer: 1,
          explanation: "Calibration records provide proof that measurement tools are accurate and giving correct measurements."
        },
        {
          id: 10,
          question: "Which is NOT a characteristic of effective documents?",
          options: [
            "Clear",
            "Complicated",
            "Complete",
            "Current"
          ],
          correctAnswer: 1,
          explanation: "Effective documents should be clear and easy to understand, not complicated. They should also be complete, consistent, current, and controlled."
        },
        {
          id: 11,
          question: "What is a systematic examination to verify standards are followed?",
          options: [
            "Inspection",
            "Audit",
            "Measurement",
            "Testing"
          ],
          correctAnswer: 1,
          explanation: "An audit is a systematic, independent examination to verify that standards are being followed and documents are being used correctly."
        },
        {
          id: 12,
          question: "Who conducts internal audits?",
          options: [
            "Customers",
            "The company checks itself",
            "Government agencies",
            "Suppliers"
          ],
          correctAnswer: 1,
          explanation: "Internal audits are conducted by the company checking itself to ensure its own compliance with standards."
        },
        {
          id: 13,
          question: "What should work instructions use for lists?",
          options: [
            "Long paragraphs",
            "Bullet points",
            "Technical jargon",
            "Foreign languages"
          ],
          correctAnswer: 1,
          explanation: "Work instructions should use bullet points for lists to make them clear and easy to follow step-by-step."
        },
        {
          id: 14,
          question: "What is unique identification for documents?",
          options: [
            "Document number and revision",
            "Author's favorite color",
            "Printing date",
            "File cabinet location"
          ],
          correctAnswer: 0,
          explanation: "Unique identification means each document has a document number and revision level to track different versions."
        },
        {
          id: 15,
          question: "What does 'tare' mean when using a scale?",
          options: [
            "Measure weight",
            "Zero the scale with empty container",
            "Clean the scale",
            "Calibrate the scale"
          ],
          correctAnswer: 1,
          explanation: "Pressing 'tare' zeros the scale with an empty container so you measure only the product weight, not the container."
        },
        {
          id: 16,
          question: "What do training records provide evidence of?",
          options: [
            "Product quality",
            "People are trained properly",
            "Machine speed",
            "Customer orders"
          ],
          correctAnswer: 1,
          explanation: "Training records provide evidence that employees have received proper training for their jobs."
        },
        {
          id: 17,
          question: "What is the purpose of regular document reviews?",
          options: [
            "To increase paperwork",
            "To check if standards still make sense",
            "To find employee mistakes",
            "To reduce file space"
          ],
          correctAnswer: 1,
          explanation: "Regular document reviews check if standards and procedures still make sense and incorporate improvements."
        },
        {
          id: 18,
          question: "What type of audit do customers conduct?",
          options: [
            "Internal audit",
            "External audit",
            "Supplier audit",
            "Self-audit"
          ],
          correctAnswer: 1,
          explanation: "External audits are conducted by outside parties like customers or certification bodies to verify compliance."
        },
        {
          id: 19,
          question: "What should be included in an inspection report?",
          options: [
            "Inspector's home address",
            "Date, product, batch number, results",
            "Customer phone numbers",
            "Supplier prices"
          ],
          correctAnswer: 1,
          explanation: "Inspection reports should include date, product identification, batch number, inspection results, and inspector signature."
        },
        {
          id: 20,
          question: "What helps new people learn faster?",
          options: [
            "Less documentation",
            "Good documentation",
            "No training",
            "Trial and error"
          ],
          correctAnswer: 1,
          explanation: "Good documentation helps new people learn their jobs faster by providing clear instructions and procedures."
        }
      ]
    },

    // MODULE 5: Defect Management
    {
      id: 5,
      title: "Defect Management",
      content: `# Module 5: Defect Management

Defect management is the systematic approach to identifying, analyzing, prioritizing, and resolving defects found during quality control. It's about turning problems into opportunities for improvement.

## Understanding Defects

### What is a Defect?
Any non-conformance to requirements. Defects can be:
- **Critical** - Makes product unsafe or unusable
- **Major** - Significantly affects function or appearance
- **Minor** - Small issues that don't affect function

### Defect Categories

#### 1. Visual Defects
Problems you can see:
- Scratches, dents, cracks
- Wrong color or finish
- Misaligned parts
- Dirty or stained surfaces

#### 2. Dimensional Defects
Wrong measurements:
- Too long or too short
- Too thick or too thin
- Wrong angles
- Incorrect spacing

#### 3. Functional Defects
Things don't work properly:
- Parts don't move smoothly
- Electrical items don't turn on
- Mechanisms get stuck
- Performance below standard

#### 4. Material Defects
Problems with the materials used:
- Wrong material type
- Material flaws (cracks, bubbles)
- Incorrect hardness
- Poor surface quality

## The Defect Management Process

### Step 1: Defect Identification
Finding and recognizing defects:
- **Where to look**: During inspection, testing, or customer feedback
- **How to identify**: Compare with standards, samples, or specifications
- **Tools used**: Inspection equipment, testing devices, visual checks

### Step 2: Defect Documentation
Recording defect information accurately:

**Information to record:**
1. **Defect description** - What is wrong?
2. **Location found** - Where was it found?
3. **Product details** - Batch number, serial number
4. **Severity level** - Critical, Major, Minor
5. **Discovery date** - When was it found?
6. **Discoverer** - Who found it?

### Step 3: Defect Analysis
Understanding the defect:

**Questions to ask:**
- How many defects of this type?
- When do they occur?
- Where do they occur?
- What pattern do they follow?
- What might be causing them?

### Step 4: Defect Prioritization
Deciding which defects to fix first:

**Prioritization factors:**
1. **Safety risk** - Defects that could hurt someone
2. **Functional impact** - Defects that stop products working
3. **Customer impact** - Defects customers notice or complain about
4. **Frequency** - Defects that happen often
5. **Cost impact** - Defects that are expensive to fix or cause returns

### Step 5: Defect Resolution
Fixing the defects:

**Resolution options:**
1. **Repair** - Fix the defective item
2. **Rework** - Do additional work to make it right
3. **Regrade** - Sell as lower quality at lower price
4. **Reject** - Scrap the item
5. **Return to supplier** - Send back for replacement

### Step 6: Prevention Planning
Stopping defects from happening again:

**Prevention methods:**
1. **Process changes** - Improve manufacturing steps
2. **Training** - Better skills for workers
3. **Equipment maintenance** - Keep machines working properly
4. **Material checks** - Better incoming inspection
5. **Design improvements** - Change product design

## Defect Classification Systems

### 1. Severity Levels
**Level 1 - Critical**: Safety hazard or complete failure
**Level 2 - Major**: Significant function affected
**Level 3 - Minor**: Cosmetic or minor issues
**Level 4 - Trivial**: Very small issues, often acceptable

### 2. Defect Codes
Using codes to categorize defects quickly:
- **V001** - Visual defect type 1 (scratch)
- **D005** - Dimensional defect type 5 (too short)
- **F003** - Functional defect type 3 (doesn't turn on)
- **M002** - Material defect type 2 (wrong material)

## Containment Actions

### Immediate Actions (Containment)
What to do right away when defects are found:
1. **Stop production** - Prevent more defective products
2. **Isolate affected products** - Separate from good products
3. **Mark clearly** - Use red tags or separate area
4. **Assess scope** - Check how many are affected

### Root Cause Analysis
Finding why defects happened:

**Common causes:**
1. **Human error** - Mistakes by people
2. **Equipment failure** - Machines not working right
3. **Material problems** - Bad inputs
4. **Method issues** - Wrong procedures
5. **Environmental factors** - Temperature, humidity, etc.

## Defect Metrics and Tracking

### Key Measurements:
1. **Defect Rate** - Percentage of defective items
2. **First Pass Yield** - Percentage good first time
3. **Cost of Quality** - Money spent on defects
4. **Time to Resolution** - How long to fix defects
5. **Repeat Defects** - Same defect happening again

### Tracking Tools:
1. **Defect Logs** - List of all defects found
2. **Trend Charts** - Show defects over time
3. **Pareto Charts** - Show most common defects
4. **Control Charts** - Show if defect rate is stable

## Communication About Defects

### Who Needs to Know:
1. **Production team** - To stop making more defects
2. **Quality team** - To investigate and track
3. **Management** - To make decisions
4. **Suppliers** - If defects come from their materials
5. **Customers** - If defects reached them (transparency)

### How to Communicate:
1. **Be factual** - Report what you found
2. **Be timely** - Report quickly
3. **Be clear** - Use simple language
4. **Be constructive** - Focus on solutions

## Defect Prevention Strategies

### 1. Error-Proofing (Poka-Yoke)
Designing processes so mistakes are impossible or immediately obvious:
- **Physical guides** - Parts only fit one way
- **Checklists** - Ensure all steps completed
- **Automatic checks** - Machines detect problems
- **Visual signals** - Lights or sounds when wrong

### 2. Standardized Work
Everyone doing things the same correct way:
- Clear work instructions
- Consistent methods
- Regular training
- Supervisor checks

### 3. Preventive Maintenance
Keeping equipment in good condition:
- Regular cleaning
- Scheduled inspections
- Timely repairs
- Replacement before failure

### 4. Supplier Quality Management
Ensuring good inputs:
- Clear specifications
- Regular supplier audits
- Incoming inspection
- Feedback to suppliers

## Learning from Defects

### Turning Problems into Improvements:
1. **Document lessons learned** - What did we discover?
2. **Share knowledge** - Tell other teams
3. **Update procedures** - Incorporate fixes
4. **Celebrate improvements** - Recognize success

## Practical Example

**Scenario:** Finding scratches on painted products

**Defect Management Process:**
1. **Identify**: Inspector sees scratches during final inspection
2. **Document**: Records defect on Non-Conformance Report
3. **Analyze**: Finds scratches happen mostly on night shift
4. **Prioritize**: Major defect - affects appearance customers see
5. **Resolve**: Repaint affected products, improve handling
6. **Prevent**: Add protective covers, better training for night shift

## Summary
Defect management transforms problems into improvement opportunities. A systematic process from identification through prevention ensures defects are handled effectively. Proper classification, containment, root cause analysis, and prevention strategies work together to reduce defects and improve quality over time.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a defect?",
          options: [
            "A perfect product",
            "Any non-conformance to requirements",
            "A quality inspector",
            "A type of measurement"
          ],
          correctAnswer: 1,
          explanation: "A defect is any non-conformance to requirements - when a product doesn't meet the established standards."
        },
        {
          id: 2,
          question: "Which defect makes a product unsafe?",
          options: [
            "Minor defect",
            "Critical defect",
            "Major defect",
            "Trivial defect"
          ],
          correctAnswer: 1,
          explanation: "Critical defects make products unsafe or completely unusable and pose safety hazards."
        },
        {
          id: 3,
          question: "What type of defect involves wrong measurements?",
          options: [
            "Visual defect",
            "Dimensional defect",
            "Functional defect",
            "Material defect"
          ],
          correctAnswer: 1,
          explanation: "Dimensional defects involve wrong measurements - products that are too long, short, thick, thin, etc."
        },
        {
          id: 4,
          question: "What is the first step in defect management?",
          options: [
            "Documentation",
            "Identification",
            "Analysis",
            "Resolution"
          ],
          correctAnswer: 1,
          explanation: "The first step is defect identification - finding and recognizing that a defect exists."
        },
        {
          id: 5,
          question: "What should be recorded about a defect?",
          options: [
            "Only the defect type",
            "Description, location, severity, date",
            "Inspector's opinion",
            "Customer's name"
          ],
          correctAnswer: 1,
          explanation: "Record defect description, location found, product details, severity level, discovery date, and discoverer."
        },
        {
          id: 6,
          question: "Which defect should be fixed FIRST?",
          options: [
            "One that happens rarely",
            "One with safety risk",
            "One that is cheap to fix",
            "One that is hard to see"
          ],
          correctAnswer: 1,
          explanation: "Defects with safety risks should be prioritized first as they could hurt someone."
        },
        {
          id: 7,
          question: "What is 'rework'?",
          options: [
            "Scrapping the product",
            "Doing additional work to make it right",
            "Selling as lower quality",
            "Returning to supplier"
          ],
          correctAnswer: 1,
          explanation: "Rework means doing additional work on a defective product to make it meet quality standards."
        },
        {
          id: 8,
          question: "What is the goal of prevention planning?",
          options: [
            "To hide defects",
            "To stop defects happening again",
            "To blame workers",
            "To increase production speed"
          ],
          correctAnswer: 1,
          explanation: "Prevention planning aims to stop the same defects from happening again by addressing root causes."
        },
        {
          id: 9,
          question: "What does defect code 'V001' likely mean?",
          options: [
            "Visual defect type 1",
            "Very important defect",
            "Vendor defect 1",
            "Velocity defect 1"
          ],
          correctAnswer: 0,
          explanation: "Defect codes often start with letters indicating defect type - V for visual, D for dimensional, etc."
        },
        {
          id: 10,
          question: "What is the first containment action?",
          options: [
            "Celebrate finding defect",
            "Stop production",
            "Fire someone",
            "Increase speed"
          ],
          correctAnswer: 1,
          explanation: "The first containment action is often to stop production to prevent making more defective products."
        },
        {
          id: 11,
          question: "What does root cause analysis find?",
          options: [
            "Who to blame",
            "Why defects happened",
            "How many defects",
            "What defects cost"
          ],
          correctAnswer: 1,
          explanation: "Root cause analysis finds why defects happened - the underlying reasons, not just the symptoms."
        },
        {
          id: 12,
          question: "What does 'First Pass Yield' measure?",
          options: [
            "Production speed",
            "Percentage good first time",
            "Defect repair time",
            "Inspection cost"
          ],
          correctAnswer: 1,
          explanation: "First Pass Yield measures the percentage of products made correctly the first time without needing rework."
        },
        {
          id: 13,
          question: "What is error-proofing also called?",
          options: [
            "Poka-Yoke",
            "Kaizen",
            "Kanban",
            "Six Sigma"
          ],
          correctAnswer: 0,
          explanation: "Error-proofing is also called Poka-Yoke - designing processes so mistakes are impossible or immediately obvious."
        },
        {
          id: 14,
          question: "What do physical guides in error-proofing do?",
          options: [
            "Make assembly slower",
            "Make parts only fit one way",
            "Increase costs",
            "Complicate processes"
          ],
          correctAnswer: 1,
          explanation: "Physical guides in error-proofing ensure parts can only be assembled the correct way, preventing mistakes."
        },
        {
          id: 15,
          question: "What is preventive maintenance?",
          options: [
            "Fixing after breakdown",
            "Keeping equipment in good condition regularly",
            "Using equipment until failure",
            "Ignoring small problems"
          ],
          correctAnswer: 1,
          explanation: "Preventive maintenance means regularly keeping equipment in good condition to prevent breakdowns and defects."
        },
        {
          id: 16,
          question: "Who needs to know about defects?",
          options: [
            "Only management",
            "Production, quality, management, suppliers if needed",
            "Only the inspector",
            "No one else"
          ],
          correctAnswer: 1,
          explanation: "Production teams, quality teams, management, and sometimes suppliers all need to know about defects to take appropriate action."
        },
        {
          id: 17,
          question: "How should defect communication be?",
          options: [
            "Factual, timely, clear, constructive",
            "Blaming, delayed, vague, negative",
            "Secret, slow, technical, critical",
            "Optional, when convenient, complex, fault-finding"
          ],
          correctAnswer: 0,
          explanation: "Defect communication should be factual (report what was found), timely (report quickly), clear (simple language), and constructive (focus on solutions)."
        },
        {
          id: 18,
          question: "What does standardized work help prevent?",
          options: [
            "Employee creativity",
            "Defects from inconsistent methods",
            "Machine purchases",
            "Quality inspections"
          ],
          correctAnswer: 1,
          explanation: "Standardized work helps prevent defects by ensuring everyone does things the same correct way every time."
        },
        {
          id: 19,
          question: "What is the final step in learning from defects?",
          options: [
            "Forgetting about them",
            "Celebrating improvements",
            "Hiding records",
            "Blaming workers"
          ],
          correctAnswer: 1,
          explanation: "Celebrating improvements recognizes success and encourages continued focus on quality improvement."
        },
        {
          id: 20,
          question: "What should happen to isolated defective products?",
          options: [
            "Mixed with good products",
            "Marked clearly and kept separate",
            "Shipped quickly",
            "Ignored"
          ],
          correctAnswer: 1,
          explanation: "Defective products should be marked clearly (like with red tags) and kept in a separate area from good products."
        }
      ]
    },

    // MODULE 6: Continuous Improvement
    {
      id: 6,
      title: "Continuous Improvement",
      content: `# Module 6: Continuous Improvement

Continuous improvement is the ongoing effort to enhance products, services, or processes. In quality control, it means never being satisfied with "good enough" and always looking for ways to get better.

## What is Continuous Improvement?

### Basic Concept:
Making small, incremental improvements over time that add up to significant progress. It's like climbing stairs - one step at a time leads to higher levels.

### Why Continuous Improvement Matters:
1. **Staying competitive** - Others are improving too
2. **Customer expectations** - Customers want better quality over time
3. **Cost reduction** - Better quality often costs less in the long run
4. **Employee engagement** - People like working in improving organizations

## The Improvement Mindset

### Key Attitudes:
1. **Nothing is perfect** - Everything can be improved
2. **Problems are opportunities** - Each problem shows where to improve
3. **Small changes matter** - Tiny improvements add up
4. **Everyone can contribute** - Improvement ideas come from all levels

### Improvement Culture Elements:
- **Openness to change** - Willing to try new ways
- **Learning orientation** - Viewing mistakes as learning chances
- **Team collaboration** - Working together on improvements
- **Management support** - Leaders encourage and enable improvement

## The Plan-Do-Check-Act (PDCA) Cycle

### Also known as Deming Cycle or Shewhart Cycle

#### Step 1: PLAN
Identify an improvement opportunity and plan a change:
- What problem are we solving?
- What change might help?
- How will we measure success?
- What resources are needed?
- Who will be involved?

#### Step 2: DO
Implement the change on a small scale:
- Try the planned change
- Document what happens
- Train people involved
- Collect data during implementation

#### Step 3: CHECK
Study the results:
- Did the change work?
- What did the data show?
- Were there unexpected effects?
- What did we learn?

#### Step 4: ACT
Take action based on what was learned:
- If successful: Standardize the change
- If not successful: Try a different approach
- Either way: Plan next improvement cycle

## Kaizen: The Philosophy of Continuous Improvement

### Kaizen Principles:
1. **Good processes bring good results** - Focus on improving processes
2. **Go see for yourself** - Understand the actual situation
3. **Speak with data** - Base decisions on facts
4. **Take action** - Implement improvements quickly
5. **Work as a team** - Involve everyone

### Kaizen Events:
Short, focused improvement projects (typically 3-5 days):
1. **Identify area** - Choose process to improve
2. **Form team** - Cross-functional team members
3. **Current state** - Document how things are now
4. **Future state** - Design improved process
5. **Implement** - Make changes during event
6. **Standardize** - Document new method

## 5S: Workplace Organization

### The Five S's (translated from Japanese):
1. **Sort** - Remove what is not needed
2. **Set in Order** - Organize what remains
3. **Shine** - Clean the workplace
4. **Standardize** - Maintain the first three S's
5. **Sustain** - Make it a habit

### Benefits of 5S:
- **Safety** - Clean, organized workplaces are safer
- **Efficiency** - Less time searching for tools/materials
- **Quality** - Easier to spot problems
- **Morale** - People prefer clean, organized workspaces

## Quality Circles

### What are Quality Circles?
Small groups of employees who meet regularly to:
- Identify quality problems
- Analyze causes
- Develop solutions
- Implement improvements
- Present results to management

### How Quality Circles Work:
1. **Voluntary participation** - People choose to join
2. **Regular meetings** - Weekly or bi-weekly
3. **Problem selection** - Choose issues to work on
4. **Solution development** - Brainstorm and test ideas
5. **Management presentation** - Share results and get support

## Suggestion Systems

### Effective Suggestion Systems:
1. **Easy to submit** - Simple forms or boxes
2. **Quick response** - Acknowledge receipt quickly
3. **Fair evaluation** - Consider all suggestions seriously
4. **Implementation support** - Help implement good ideas
5. **Recognition** - Thank and reward contributors

### Types of Suggestions:
- **Small improvements** - Easy, quick fixes
- **Cost savings** - Ideas that reduce expenses
- **Safety improvements** - Making workplace safer
- **Quality enhancements** - Better products or processes

## Measurement for Improvement

### What to Measure:
1. **Quality metrics** - Defect rates, first pass yield
2. **Efficiency metrics** - Productivity, cycle time
3. **Cost metrics** - Cost of quality, waste reduction
4. **Customer metrics** - Satisfaction, complaints

### Displaying Metrics:
- **Visual boards** - Show current performance
- **Trend charts** - Show progress over time
- **Goal lines** - Show targets to achieve
- **Color coding** - Green (good), Yellow (warning), Red (problem)

## Overcoming Improvement Barriers

### Common Barriers:
1. **"We've always done it this way"** - Resistance to change
2. **"No time for improvement"** - Focus only on daily work
3. **"Not my job"** - Lack of ownership
4. **"Management won't support"** - Lack of leadership
5. **"Too expensive"** - Focus on short-term costs

### Solutions:
1. **Show benefits** - Demonstrate value of improvements
2. **Start small** - Quick wins build momentum
3. **Involve people** - Those affected help design changes
4. **Get management commitment** - Leaders must support improvement
5. **Calculate ROI** - Show financial benefits

## Standardization

### Why Standardize Improvements?
1. **Consistency** - Everyone does it the same better way
2. **Training** - New people learn the improved method
3. **Further improvement** - Standard becomes baseline for next improvement
4. **Sustaining gains** - Prevents slipping back to old ways

### Standardization Tools:
1. **Updated work instructions** - Document new methods
2. **Visual standards** - Photos or samples of correct way
3. **Training materials** - Teach the new standard
4. **Audit checks** - Verify standard is being followed

## Celebrating Success

### Why Celebrate:
1. **Motivation** - People like recognition
2. **Reinforcement** - Shows improvement is valued
3. **Sharing** - Others learn about successful improvements
4. **Momentum** - Builds energy for next improvement

### Celebration Ideas:
- **Recognition in meetings** - Public acknowledgment
- **Success stories** - Share in newsletter or boards
- **Small rewards** - Certificates, tokens, or treats
- **Improvement showcases** - Display improvements

## The Improvement Journey

### Continuous, Never-Ending:
1. **Current state** → **Improvement** → **New standard**
2. **New standard** → **Further improvement** → **Better standard**
3. **Repeat forever** - Always looking for next improvement

### Personal Improvement:
- **Learn new skills** - Stay current in quality methods
- **Share knowledge** - Teach others what you learn
- **Seek feedback** - Ask how you can improve
- **Reflect regularly** - Think about what went well and what could be better

## Summary
Continuous improvement turns quality control from just finding defects into actively making things better. The PDCA cycle provides a simple framework for improvement. Tools like Kaizen, 5S, and Quality Circles engage everyone in improvement. Measurement tracks progress, standardization sustains gains, and celebration motivates continued effort. Improvement is a journey, not a destination.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is continuous improvement?",
          options: [
            "One big change every year",
            "Ongoing small improvements over time",
            "Only improving when problems occur",
            "Management deciding all improvements"
          ],
          correctAnswer: 1,
          explanation: "Continuous improvement means making ongoing, incremental improvements over time that add up to significant progress."
        },
        {
          id: 2,
          question: "What is the improvement mindset about problems?",
          options: [
            "Problems should be hidden",
            "Problems are opportunities for improvement",
            "Only managers solve problems",
            "Problems mean someone failed"
          ],
          correctAnswer: 1,
          explanation: "The improvement mindset views problems as opportunities - each problem shows where improvements can be made."
        },
        {
          id: 3,
          question: "What does PDCA stand for?",
          options: [
            "Plan-Develop-Check-Apply",
            "Plan-Do-Check-Act",
            "Prepare-Design-Check-Action",
            "Problem-Define-Check-Act"
          ],
          correctAnswer: 1,
          explanation: "PDCA stands for Plan-Do-Check-Act, the continuous improvement cycle developed by Deming and Shewhart."
        },
        {
          id: 4,
          question: "What happens in the DO step of PDCA?",
          options: [
            "Plan the improvement",
            "Implement change on small scale",
            "Study results",
            "Standardize successful changes"
          ],
          correctAnswer: 1,
          explanation: "In the DO step, you implement the planned change on a small scale to test if it works."
        },
        {
          id: 5,
          question: "What is Kaizen?",
          options: [
            "A type of inspection",
            "The philosophy of continuous improvement",
            "A quality standard",
            "A measurement tool"
          ],
          correctAnswer: 1,
          explanation: "Kaizen is the Japanese philosophy of continuous improvement, meaning 'change for better'."
        },
        {
          id: 6,
          question: "What does 'Go see for yourself' mean in Kaizen?",
          options: [
            "Wait for reports",
            "Understand the actual situation firsthand",
            "Trust what others say",
            "Look at pictures only"
          ],
          correctAnswer: 1,
          explanation: "'Go see for yourself' (Gemba) means going to the actual place where work happens to understand the real situation."
        },
        {
          id: 7,
          question: "What is the first S in 5S?",
          options: [
            "Shine",
            "Sort",
            "Set in Order",
            "Standardize"
          ],
          correctAnswer: 1,
          explanation: "The first S is Sort - removing everything from the workplace that is not needed for current work."
        },
        {
          id: 8,
          question: "What does 'Set in Order' mean in 5S?",
          options: [
            "Throw everything away",
            "Organize what remains after sorting",
            "Clean everything",
            "Make rules"
          ],
          correctAnswer: 1,
          explanation: "Set in Order means organizing what remains after sorting so everything has a designated place."
        },
        {
          id: 9,
          question: "What are Quality Circles?",
          options: [
            "Management committees",
            "Small employee groups solving quality problems",
            "Customer focus groups",
            "Supplier meetings"
          ],
          correctAnswer: 1,
          explanation: "Quality Circles are small groups of employees who meet regularly to identify and solve quality problems."
        },
        {
          id: 10,
          question: "What makes suggestion systems effective?",
          options: [
            "Making submission difficult",
            "Ignoring most suggestions",
            "Easy submission and quick response",
            "Only accepting perfect ideas"
          ],
          correctAnswer: 2,
          explanation: "Effective suggestion systems make it easy to submit ideas and respond quickly to show suggestions are valued."
        },
        {
          id: 11,
          question: "What should be measured for improvement?",
          options: [
            "Only production quantity",
            "Quality, efficiency, cost, and customer metrics",
            "Only employee attendance",
            "Only machine speed"
          ],
          correctAnswer: 1,
          explanation: "Measure quality metrics (defect rates), efficiency metrics (productivity), cost metrics, and customer metrics."
        },
        {
          id: 12,
          question: "What does green typically indicate on visual metric boards?",
          options: [
            "Problem area",
            "Warning",
            "Good performance",
            "No data"
          ],
          correctAnswer: 2,
          explanation: "Color coding typically uses green for good performance, yellow for warning, and red for problem areas."
        },
        {
          id: 13,
          question: "What is a common improvement barrier?",
          options: [
            "Everyone wanting change",
            "Too many improvement ideas",
            "Resistance to change",
            "Excessive measurement"
          ],
          correctAnswer: 2,
          explanation: "Resistance to change ('We've always done it this way') is a common barrier to improvement."
        },
        {
          id: 14,
          question: "How can improvement barriers be overcome?",
          options: [
            "Ignore resistance",
            "Start with small, quick wins",
            "Force changes without explanation",
            "Only improve in secret"
          ],
          correctAnswer: 1,
          explanation: "Starting with small, quick wins builds momentum and shows the value of improvements, overcoming resistance."
        },
        {
          id: 15,
          question: "Why standardize improvements?",
          options: [
            "To make work harder",
            "To ensure everyone does it the new better way",
            "To prevent further improvements",
            "To create more paperwork"
          ],
          correctAnswer: 1,
          explanation: "Standardizing ensures everyone uses the improved method consistently and prevents slipping back to old ways."
        },
        {
          id: 16,
          question: "What is a visual standard?",
          options: [
            "Written procedure only",
            "Photos or samples showing correct way",
            "Verbal instructions",
            "Complex calculations"
          ],
          correctAnswer: 1,
          explanation: "Visual standards use photos, samples, or diagrams to show clearly what the correct standard looks like."
        },
        {
          id: 17,
          question: "Why celebrate improvement successes?",
          options: [
            "To hide failures",
            "To motivate and reinforce improvement efforts",
            "To increase competition",
            "To reduce further improvement"
          ],
          correctAnswer: 1,
          explanation: "Celebrating successes motivates people, reinforces that improvement is valued, and builds momentum for more improvement."
        },
        {
          id: 18,
          question: "What is the improvement journey?",
          options: [
            "One-time project",
            "Continuous, never-ending process",
            "Only when customers complain",
            "Management responsibility only"
          ],
          correctAnswer: 1,
          explanation: "The improvement journey is continuous and never-ending - always looking for the next opportunity to improve."
        },
        {
          id: 19,
          question: "What should you do for personal improvement?",
          options: [
            "Hide mistakes",
            "Learn new skills and seek feedback",
            "Only do your assigned tasks",
            "Avoid sharing knowledge"
          ],
          correctAnswer: 1,
          explanation: "For personal improvement, learn new skills, share knowledge with others, seek feedback, and reflect on your work."
        },
        {
          id: 20,
          question: "What happens after ACT in the PDCA cycle?",
          options: [
            "Stop improving",
            "Start new PLAN step for next improvement",
            "Forget what was learned",
            "Only maintain current level"
          ],
          correctAnswer: 1,
          explanation: "After ACT, the cycle continues with a new PLAN step for the next improvement opportunity - it's a continuous cycle."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What is the main purpose of Quality Control?",
      options: [
        "To increase production speed",
        "To ensure products meet standards",
        "To reduce employee numbers",
        "To design new products"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Quality Control's main purpose is to ensure products or services meet specific standards and requirements."
    },
    {
      id: 2,
      question: "What is the most common inspection method?",
      options: [
        "X-ray inspection",
        "Visual inspection",
        "Chemical testing",
        "Sound testing"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Visual inspection is the simplest and most common method of checking quality."
    },
    {
      id: 3,
      question: "Which tool helps identify the most common problems?",
      options: [
        "Checklist",
        "Pareto Chart",
        "Flow Chart",
        "Scatter Diagram"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Pareto Charts show which problems occur most frequently, based on the 80/20 rule."
    },
    {
      id: 4,
      question: "What does ISO 9001 focus on first?",
      options: [
        "Maximum production",
        "Customer focus",
        "Lowest cost",
        "Fastest delivery"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: ISO 9001's first principle is customer focus - meeting customer requirements."
    },
    {
      id: 5,
      question: "What should be fixed first in defect management?",
      options: [
        "Rare defects",
        "Defects with safety risk",
        "Cheap defects",
        "Hard-to-see defects"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Safety-related defects should be prioritized first as they could cause harm."
    },
    {
      id: 6,
      question: "What does PDCA stand for?",
      options: [
        "Plan-Develop-Check-Apply",
        "Plan-Do-Check-Act",
        "Prepare-Design-Check-Action",
        "Problem-Define-Check-Act"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: PDCA is the Plan-Do-Check-Act cycle for continuous improvement."
    },
    {
      id: 7,
      question: "What does 'defect' mean in quality control?",
      options: [
        "A perfect product",
        "Any problem or mistake in a product",
        "A quality inspector",
        "A type of measurement tool"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: A defect is any problem or mistake found in a product during quality checking."
    },
    {
      id: 8,
      question: "What tool measures thickness precisely?",
      options: [
        "Thermometer",
        "Scale",
        "Calipers",
        "Magnifying glass"
      ],
      correctAnswer: 2,
      explanation: "From Module 2: Calipers are used to measure thickness or diameter of objects precisely."
    },
    {
      id: 9,
      question: "What is another name for Cause and Effect Diagrams?",
      options: [
        "Pareto Diagrams",
        "Fishbone Diagrams",
        "Control Diagrams",
        "Flow Diagrams"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Cause and Effect Diagrams are often called Fishbone Diagrams due to their shape."
    },
    {
      id: 10,
      question: "What is Level 1 documentation?",
      options: [
        "Work instructions",
        "Quality Manual",
        "Procedures",
        "Records"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Level 1 is the Quality Manual describing the company's quality policy and system."
    },
    {
      id: 11,
      question: "What does NCR stand for?",
      options: [
        "New Customer Request",
        "Non-Conformance Report",
        "National Calibration Record",
        "Next Change Required"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: NCR stands for Non-Conformance Report documenting when requirements aren't met."
    },
    {
      id: 12,
      question: "What is Kaizen?",
      options: [
        "A type of inspection",
        "The philosophy of continuous improvement",
        "A quality standard",
        "A measurement tool"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Kaizen is the Japanese philosophy meaning 'continuous improvement'."
    },
    {
      id: 13,
      question: "What does AQL stand for?",
      options: [
        "Always Quality Level",
        "Acceptable Quality Level",
        "Average Quality Limit",
        "Approved Quality List"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: AQL stands for Acceptable Quality Level - maximum defects allowed."
    },
    {
      id: 14,
      question: "When is final inspection done?",
      options: [
        "When materials arrive",
        "During production",
        "Before shipping to customers",
        "After customer receives product"
      ],
      correctAnswer: 2,
      explanation: "From Module 2: Final inspection checks finished products before shipping to customers."
    },
    {
      id: 15,
      question: "What does the 80/20 rule in Pareto Charts mean?",
      options: [
        "80% of time on 20% of work",
        "80% of problems from 20% of causes",
        "80% of products from 20% of machines",
        "80% of profit from 20% of customers"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Pareto Principle suggests 80% of problems come from 20% of causes."
    },
    {
      id: 16,
      question: "What do calibration records prove?",
      options: [
        "Employee attendance",
        "Measurement tools are accurate",
        "Product sales",
        "Customer satisfaction"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Calibration records prove measurement tools are accurate and giving correct readings."
    },
    {
      id: 17,
      question: "What is 'rework'?",
      options: [
        "Scrapping the product",
        "Doing additional work to make it right",
        "Selling as lower quality",
        "Returning to supplier"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Rework means doing additional work on defective products to make them acceptable."
    },
    {
      id: 18,
      question: "What is the first S in 5S?",
      options: [
        "Shine",
        "Sort",
        "Set in Order",
        "Standardize"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: The first S is Sort - removing unneeded items from the workplace."
    },
    {
      id: 19,
      question: "What is the difference between QC and QA?",
      options: [
        "QC prevents defects, QA finds defects",
        "QC finds defects, QA prevents defects",
        "There is no difference",
        "QC is for services, QA is for products"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: QC finds defects in finished products. QA prevents defects during production."
    },
    {
      id: 20,
      question: "What type of inspection checks supplier materials?",
      options: [
        "Final inspection",
        "In-process inspection",
        "Incoming inspection",
        "Random inspection"
      ],
      correctAnswer: 2,
      explanation: "From Module 2: Incoming inspection checks materials from suppliers before they enter production."
    },
    {
      id: 21,
      question: "What tool shows if a process is stable?",
      options: [
        "Checklist",
        "Control Chart",
        "Fishbone Diagram",
        "Histogram"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Control Charts show if a process is stable or going out of control."
    },
    {
      id: 22,
      question: "What are step-by-step task guides called?",
      options: [
        "Quality Manual",
        "Procedures",
        "Work Instructions",
        "Records"
      ],
      correctAnswer: 2,
      explanation: "From Module 4: Work Instructions provide detailed step-by-step guides for specific tasks."
    },
    {
      id: 23,
      question: "What is the first step in defect management?",
      options: [
        "Documentation",
        "Identification",
        "Analysis",
        "Resolution"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: The first step is defect identification - finding and recognizing defects."
    },
    {
      id: 24,
      question: "What happens in the DO step of PDCA?",
      options: [
        "Plan the improvement",
        "Implement change on small scale",
        "Study results",
        "Standardize successful changes"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: In the DO step, implement the planned change on a small scale to test it."
    },
    {
      id: 25,
      question: "What does 'tolerance' mean in measurements?",
      options: [
        "The exact measurement required",
        "The amount of variation allowed",
        "The speed of measurement",
        "The cost of measurement"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Tolerance is the small amount of variation allowed in measurements."
    },
    {
      id: 26,
      question: "Why should tools be calibrated regularly?",
      options: [
        "To make them look new",
        "To ensure they give correct measurements",
        "To increase their speed",
        "To reduce their cost"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Tools must be calibrated regularly to ensure accurate measurements."
    },
    {
      id: 27,
      question: "What does 'First Time Yield' measure?",
      options: [
        "Production speed",
        "Products made correctly first time",
        "Customer satisfaction",
        "Inspection time"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: First Time Yield measures percentage of products made correctly without rework."
    },
    {
      id: 28,
      question: "What is a systematic examination to verify standards?",
      options: [
        "Inspection",
        "Audit",
        "Measurement",
        "Testing"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: An audit systematically examines if standards are being followed."
    },
    {
      id: 29,
      question: "What does root cause analysis find?",
      options: [
        "Who to blame",
        "Why defects happened",
        "How many defects",
        "What defects cost"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Root cause analysis finds why defects happened, not just symptoms."
    },
    {
      id: 30,
      question: "What are Quality Circles?",
      options: [
        "Management committees",
        "Small employee groups solving quality problems",
        "Customer focus groups",
        "Supplier meetings"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Quality Circles are small employee groups meeting to solve quality problems."
    },
    {
      id: 31,
      question: "What is a 'sample' in quality control?",
      options: [
        "The entire production batch",
        "A small number of products checked",
        "A quality certificate",
        "An inspection report"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: A sample is a small selection of products checked instead of all products."
    },
    {
      id: 32,
      question: "What does functional testing check?",
      options: [
        "Product color",
        "If products actually work",
        "Product weight",
        "Package design"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Functional testing checks if products actually work as intended."
    },
    {
      id: 33,
      question: "What is the average of: 5, 7, 6, 8, 9?",
      options: [
        "5",
        "6",
        "7",
        "8"
      ],
      correctAnswer: 2,
      explanation: "From Module 3: Average = (5+7+6+8+9) ÷ 5 = 35 ÷ 5 = 7"
    },
    {
      id: 34,
      question: "Why is document control important?",
      options: [
        "To increase paper usage",
        "To ensure latest version is used",
        "To make documents secret",
        "To reduce training"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Document control ensures everyone uses the latest document versions."
    },
    {
      id: 35,
      question: "What is error-proofing also called?",
      options: [
        "Poka-Yoke",
        "Kaizen",
        "Kanban",
        "Six Sigma"
      ],
      correctAnswer: 0,
      explanation: "From Module 5: Error-proofing is called Poka-Yoke - designing to prevent mistakes."
    },
    {
      id: 36,
      question: "Why celebrate improvement successes?",
      options: [
        "To hide failures",
        "To motivate and reinforce improvement",
        "To increase competition",
        "To reduce further improvement"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Celebrating motivates people and reinforces that improvement is valued."
    },
    {
      id: 37,
      question: "What skill helps notice small problems?",
      options: [
        "Speed",
        "Attention to detail",
        "Strength",
        "Creativity"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Attention to detail helps inspectors notice small problems."
    },
    {
      id: 38,
      question: "What is checking every 10th product called?",
      options: [
        "Random sampling",
        "Stratified sampling",
        "Systematic sampling",
        "Complete inspection"
      ],
      correctAnswer: 2,
      explanation: "From Module 2: Systematic sampling checks products at regular intervals."
    },
    {
      id: 39,
      question: "What does PDCA's CHECK step involve?",
      options: [
        "Planning improvements",
        "Implementing changes",
        "Studying results",
        "Standardizing success"
      ],
      correctAnswer: 2,
      explanation: "From Module 6: The CHECK step involves studying results of the implemented change."
    },
    {
      id: 40,
      question: "What is continuous improvement?",
      options: [
        "One big change yearly",
        "Ongoing small improvements",
        "Only when problems occur",
        "Management decides all"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Continuous improvement means ongoing incremental improvements over time."
    }
  ]
};

export default qualityControlCertificateCourse;
