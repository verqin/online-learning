export const yieldManagementCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "yield-management-certificate",
  title: "Yield Management (Certificate)",
  description: "Learn the fundamentals of yield management and revenue optimization. This course covers basic pricing strategies, demand forecasting, and inventory control for maximizing revenue in service industries.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📈",
  badge: "Certificate",
  prerequisites: "No prior experience required",
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Modules
  modules: [
    {
      id: 1,
      title: "Introduction to Yield Management",
      content: `# Introduction to Yield Management

## What is Yield Management?
Yield management is a pricing strategy that helps businesses sell the right product to the right customer at the right time for the right price. It's about maximizing revenue from fixed, perishable inventory like hotel rooms, airline seats, or event tickets.

**Three Core Concepts of Yield Management:**
1. **Perishable Inventory** - Products that lose value over time
2. **Variable Demand** - Customer demand that changes regularly
3. **Market Segmentation** - Different customer groups with different needs

### Why Yield Management Matters
Businesses use yield management because:

**Key Benefits:**
- **Increased Revenue** - Making more money from the same resources
- **Better Customer Service** - Meeting different customer needs
- **Competitive Advantage** - Staying ahead of other businesses
- **Efficient Resource Use** - Reducing waste and empty capacity

### Where Yield Management is Used
Many industries use yield management:

**Common Applications:**
1. **Hotels and Resorts** - Room pricing and booking management
2. **Airlines** - Ticket pricing and seat allocation
3. **Car Rental Companies** - Vehicle pricing and availability
4. **Restaurants** - Table reservations and pricing
5. **Event Venues** - Ticket pricing and sales

### Basic Yield Management Tools
Simple tools used in yield management:

**Pricing Strategies:**
- **Dynamic Pricing** - Changing prices based on demand
- **Discount Management** - Offering deals at strategic times
- **Package Pricing** - Combining products for better value
- **Last-Minute Pricing** - Special prices for unsold inventory

**Demand Forecasting:**
- **Historical Data Analysis** - Looking at past patterns
- **Seasonal Trends** - Understanding yearly patterns
- **Event Impact** - How special events affect demand
- **Competitor Monitoring** - Watching what others are doing

### The Yield Management Process
A simple four-step process:

**Step 1: Data Collection**
Gather information about:
- Past sales and prices
- Customer behavior
- Market conditions
- Competitor activities

**Step 2: Demand Forecasting**
Predict future demand using:
- Historical patterns
- Current bookings
- Market trends
- Special events

**Step 3: Pricing Strategy**
Set prices based on:
- Forecasted demand
- Inventory availability
- Customer segments
- Business goals

**Step 4: Implementation and Review**
Put the plan into action and:
- Monitor results
- Make adjustments
- Learn from outcomes
- Improve future decisions

### Key Success Factors
What makes yield management work:

**Important Elements:**
- **Accurate Data** - Good information for good decisions
- **Flexible Systems** - Ability to change quickly
- **Market Knowledge** - Understanding customer behavior
- **Management Support** - Leadership commitment to the process

This foundation will help you understand the basic principles of yield management and how they apply to real business situations.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three core concepts of yield management?",
          options: [
            "Perishable Inventory, Variable Demand, Market Segmentation",
            "Price, Product, Promotion",
            "Cost, Revenue, Profit",
            "Supply, Demand, Equilibrium"
          ],
          correctAnswer: 0,
          explanation: "The three core concepts are Perishable Inventory, Variable Demand, and Market Segmentation."
        },
        {
          id: 2,
          question: "What type of inventory loses value over time?",
          options: [
            "Perishable Inventory",
            "Durable Inventory",
            "Fixed Inventory",
            "Seasonal Inventory"
          ],
          correctAnswer: 0,
          explanation: "Perishable Inventory loses value over time, like hotel rooms or airline seats."
        },
        {
          id: 3,
          question: "Which industry commonly uses yield management?",
          options: [
            "Hotels and Resorts",
            "Grocery Stores",
            "Clothing Retail",
            "Book Publishing"
          ],
          correctAnswer: 0,
          explanation: "Hotels and Resorts commonly use yield management for room pricing."
        },
        {
          id: 4,
          question: "What is changing prices based on demand called?",
          options: [
            "Dynamic Pricing",
            "Fixed Pricing",
            "Cost-Plus Pricing",
            "Competitive Pricing"
          ],
          correctAnswer: 0,
          explanation: "Dynamic Pricing changes prices based on current demand levels."
        },
        {
          id: 5,
          question: "What is the first step in the yield management process?",
          options: [
            "Data Collection",
            "Demand Forecasting",
            "Pricing Strategy",
            "Implementation"
          ],
          correctAnswer: 0,
          explanation: "Data Collection is the first step, gathering information for decisions."
        },
        {
          id: 6,
          question: "What do businesses increase through yield management?",
          options: [
            "Revenue",
            "Costs",
            "Inventory",
            "Employees"
          ],
          correctAnswer: 0,
          explanation: "Businesses increase Revenue through effective yield management."
        },
        {
          id: 7,
          question: "What type of demand changes regularly?",
          options: [
            "Variable Demand",
            "Constant Demand",
            "Predictable Demand",
            "Stable Demand"
          ],
          correctAnswer: 0,
          explanation: "Variable Demand changes regularly based on various factors."
        },
        {
          id: 8,
          question: "Which industry uses yield management for tickets?",
          options: [
            "Airlines",
            "Supermarkets",
            "Hardware Stores",
            "Pharmaceuticals"
          ],
          correctAnswer: 0,
          explanation: "Airlines use yield management for ticket pricing and seat allocation."
        },
        {
          id: 9,
          question: "What looks at past sales patterns?",
          options: [
            "Historical Data Analysis",
            "Future Prediction",
            "Competitor Analysis",
            "Market Research"
          ],
          correctAnswer: 0,
          explanation: "Historical Data Analysis looks at past sales and pricing patterns."
        },
        {
          id: 10,
          question: "What is the fourth step in the process?",
          options: [
            "Implementation and Review",
            "Data Collection",
            "Demand Forecasting",
            "Pricing Strategy"
          ],
          correctAnswer: 0,
          explanation: "Implementation and Review is the fourth and final step."
        },
        {
          id: 11,
          question: "What differentiates customer groups?",
          options: [
            "Market Segmentation",
            "Price Discrimination",
            "Product Differentiation",
            "Service Variation"
          ],
          correctAnswer: 0,
          explanation: "Market Segmentation identifies different customer groups with different needs."
        },
        {
          id: 12,
          question: "What uses special prices for unsold inventory?",
          options: [
            "Last-Minute Pricing",
            "Premium Pricing",
            "Bundle Pricing",
            "Penetration Pricing"
          ],
          correctAnswer: 0,
          explanation: "Last-Minute Pricing offers special prices for inventory that might otherwise go unsold."
        },
        {
          id: 13,
          question: "What predicts future customer demand?",
          options: [
            "Demand Forecasting",
            "Sales Reporting",
            "Inventory Counting",
            "Market Surveying"
          ],
          correctAnswer: 0,
          explanation: "Demand Forecasting predicts future customer demand using various methods."
        },
        {
          id: 14,
          question: "What watches what competitors are doing?",
          options: [
            "Competitor Monitoring",
            "Market Analysis",
            "Customer Feedback",
            "Sales Tracking"
          ],
          correctAnswer: 0,
          explanation: "Competitor Monitoring watches competitor pricing and strategies."
        },
        {
          id: 15,
          question: "What combines products for better value?",
          options: [
            "Package Pricing",
            "Dynamic Pricing",
            "Discount Pricing",
            "Premium Pricing"
          ],
          correctAnswer: 0,
          explanation: "Package Pricing combines multiple products or services for better value."
        },
        {
          id: 16,
          question: "What is needed for good decisions?",
          options: [
            "Accurate Data",
            "Lots of Employees",
            "Large Budget",
            "Fancy Software"
          ],
          correctAnswer: 0,
          explanation: "Accurate Data is essential for making good yield management decisions."
        },
        {
          id: 17,
          question: "What uses yearly patterns?",
          options: [
            "Seasonal Trends",
            "Daily Patterns",
            "Weekly Cycles",
            "Monthly Variations"
          ],
          correctAnswer: 0,
          explanation: "Seasonal Trends use yearly patterns in demand and pricing."
        },
        {
          id: 18,
          question: "What is step three in the process?",
          options: [
            "Pricing Strategy",
            "Data Collection",
            "Demand Forecasting",
            "Implementation"
          ],
          correctAnswer: 0,
          explanation: "Pricing Strategy is the third step in the yield management process."
        },
        {
          id: 19,
          question: "What affects how special events impact business?",
          options: [
            "Event Impact Analysis",
            "Competitor Monitoring",
            "Historical Analysis",
            "Market Research"
          ],
          correctAnswer: 0,
          explanation: "Event Impact Analysis studies how special events affect demand."
        },
        {
          id: 20,
          question: "What is the second step in the process?",
          options: [
            "Demand Forecasting",
            "Data Collection",
            "Pricing Strategy",
            "Implementation"
          ],
          correctAnswer: 0,
          explanation: "Demand Forecasting is the second step in the yield management process."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Pricing Strategies",
      content: `# Basic Pricing Strategies

## Understanding Pricing Basics
Pricing is how businesses set prices for their products or services. In yield management, pricing is dynamic and changes based on many factors to maximize revenue.

**Four Basic Pricing Approaches:**
1. **Cost-Based Pricing** - Adding markup to costs
2. **Competition-Based Pricing** - Following competitor prices
3. **Value-Based Pricing** - Based on customer perceived value
4. **Demand-Based Pricing** - Changing prices with demand

### Cost-Based Pricing Methods
Simple ways to set prices based on costs:

**Cost-Plus Pricing:**
- **Formula**: Cost + Markup = Price
- **Markup Percentage**: Usually 20-50% above cost
- **Simple Calculation**: Easy to understand and use
- **Risk Management**: Ensures costs are covered

**Break-Even Pricing:**
- **Goal**: Cover all fixed and variable costs
- **Calculation**: Total costs ÷ Number of units
- **Safety Margin**: Adding profit above break-even
- **Volume Consideration**: Based on expected sales volume

### Competition-Based Pricing
Setting prices relative to competitors:

**Price Matching:**
- **Strategy**: Setting same prices as competitors
- **Market Position**: Staying competitive in the market
- **Customer Perception**: Seen as fair pricing
- **Risk Reduction**: Avoiding price wars

**Price Leadership:**
- **Strategy**: Setting market price standards
- **Market Position**: Being the price leader
- **Competitive Advantage**: Others follow your prices
- **Responsibility**: Must make good pricing decisions

### Value-Based Pricing
Pricing based on customer perception:

**Customer Value Assessment:**
- **Perceived Benefits**: What customers think they're getting
- **Willingness to Pay**: Maximum price customers will accept
- **Value Communication**: Explaining why price is justified
- **Differentiation**: Showing why product is worth more

**Tiered Pricing:**
- **Multiple Options**: Different prices for different versions
- **Customer Choice**: Letting customers select their price point
- **Upsell Opportunities**: Encouraging upgrades to higher tiers
- **Market Coverage**: Reaching different customer segments

### Demand-Based Pricing
Changing prices with demand changes:

**High Demand Pricing:**
- **Strategy**: Higher prices when demand is high
- **Timing**: Peak seasons, holidays, weekends
- **Customer Acceptance**: Customers expect higher prices
- **Revenue Maximization**: Capturing maximum value

**Low Demand Pricing:**
- **Strategy**: Lower prices when demand is low
- **Timing**: Off-peak periods, weekdays, slow seasons
- **Goal**: Filling empty capacity
- **Customer Attraction**: Bringing in price-sensitive customers

### Discount Strategies
Using discounts effectively:

**Early Bird Discounts:**
- **Timing**: Offered well in advance
- **Purpose**: Encouraging early bookings
- **Benefit**: Better demand forecasting
- **Customer Incentive**: Reward for planning ahead

**Last-Minute Discounts:**
- **Timing**: Offered close to consumption time
- **Purpose**: Filling remaining capacity
- **Risk**: May train customers to wait
- **Benefit**: Better than empty inventory

**Volume Discounts:**
- **Quantity**: Lower prices for larger purchases
- **Purpose**: Encouraging bulk buying
- **Customer Benefit**: Savings for larger orders
- **Business Benefit**: Guaranteed larger sales

### Simple Price Optimization
Basic methods to find best prices:

**Price Testing:**
- **Method**: Trying different prices to see what works
- **Small Changes**: Testing with small price adjustments
- **Customer Response**: Measuring how sales change
- **Learning**: Understanding price sensitivity

**Price Points:**
- **Psychological Pricing**: Using $9.99 instead of $10.00
- **Round Numbers**: Using $100, $200 for premium products
- **Customer Perception**: How prices appear to customers
- **Industry Standards**: Following common pricing patterns

**Price Bundling:**
- **Combination**: Selling multiple items together
- **Value Perception**: Better deal than buying separately
- **Inventory Management**: Moving slower items with faster ones
- **Customer Convenience**: One purchase for multiple needs

### Price Communication
How to present prices to customers:

**Transparency:**
- **Clear Display**: Easy to understand pricing
- **No Hidden Fees**: All costs shown upfront
- **Customer Trust**: Building confidence in pricing
- **Reduced Complaints**: Fewer pricing misunderstandings

**Value Justification:**
- **Feature Highlighting**: Showing what customers get
- **Comparison**: Demonstrating better value than alternatives
- **Testimonials**: Using customer stories to justify price
- **Guarantees**: Offering assurances of value

Understanding these basic pricing strategies is essential for effective yield management and revenue optimization.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four basic pricing approaches?",
          options: [
            "Cost-Based, Competition-Based, Value-Based, Demand-Based",
            "High, Medium, Low, Free",
            "Premium, Regular, Discount, Bundle",
            "Fixed, Variable, Seasonal, Event"
          ],
          correctAnswer: 0,
          explanation: "The four basic approaches are Cost-Based, Competition-Based, Value-Based, and Demand-Based pricing."
        },
        {
          id: 2,
          question: "What is cost plus markup called?",
          options: [
            "Cost-Plus Pricing",
            "Break-Even Pricing",
            "Value Pricing",
            "Competitive Pricing"
          ],
          correctAnswer: 0,
          explanation: "Cost-Plus Pricing adds a markup percentage to the cost."
        },
        {
          id: 3,
          question: "What sets same prices as competitors?",
          options: [
            "Price Matching",
            "Price Leadership",
            "Premium Pricing",
            "Value Pricing"
          ],
          correctAnswer: 0,
          explanation: "Price Matching sets the same prices as competitors."
        },
        {
          id: 4,
          question: "What prices based on customer perception?",
          options: [
            "Value-Based Pricing",
            "Cost-Based Pricing",
            "Competition-Based Pricing",
            "Demand-Based Pricing"
          ],
          correctAnswer: 0,
          explanation: "Value-Based Pricing is based on customer perceived value."
        },
        {
          id: 5,
          question: "What changes prices with demand?",
          options: [
            "Demand-Based Pricing",
            "Cost-Based Pricing",
            "Competition-Based Pricing",
            "Value-Based Pricing"
          ],
          correctAnswer: 0,
          explanation: "Demand-Based Pricing changes prices based on demand levels."
        },
        {
          id: 6,
          question: "What covers all costs with no profit?",
          options: [
            "Break-Even Pricing",
            "Cost-Plus Pricing",
            "Premium Pricing",
            "Discount Pricing"
          ],
          correctAnswer: 0,
          explanation: "Break-Even Pricing sets prices to cover all costs with zero profit."
        },
        {
          id: 7,
          question: "What sets market price standards?",
          options: [
            "Price Leadership",
            "Price Matching",
            "Price Following",
            "Price Copying"
          ],
          correctAnswer: 0,
          explanation: "Price Leadership sets market price standards that others follow."
        },
        {
          id: 8,
          question: "What offers different price versions?",
          options: [
            "Tiered Pricing",
            "Uniform Pricing",
            "Single Pricing",
            "Flat Pricing"
          ],
          correctAnswer: 0,
          explanation: "Tiered Pricing offers different prices for different product versions."
        },
        {
          id: 9,
          question: "What offers lower prices in advance?",
          options: [
            "Early Bird Discounts",
            "Last-Minute Discounts",
            "Volume Discounts",
            "Loyalty Discounts"
          ],
          correctAnswer: 0,
          explanation: "Early Bird Discounts offer lower prices for early bookings."
        },
        {
          id: 10,
          question: "What uses $9.99 instead of $10.00?",
          options: [
            "Psychological Pricing",
            "Round Number Pricing",
            "Exact Pricing",
            "Simple Pricing"
          ],
          correctAnswer: 0,
          explanation: "Psychological Pricing uses prices like $9.99 to influence perception."
        },
        {
          id: 11,
          question: "What tries different prices to see what works?",
          options: [
            "Price Testing",
            "Price Setting",
            "Price Fixing",
            "Price Guessing"
          ],
          correctAnswer: 0,
          explanation: "Price Testing involves trying different prices to measure customer response."
        },
        {
          id: 12,
          question: "What sells multiple items together?",
          options: [
            "Price Bundling",
            "Price Separating",
            "Price Stacking",
            "Price Grouping"
          ],
          correctAnswer: 0,
          explanation: "Price Bundling sells multiple items together as a package."
        },
        {
          id: 13,
          question: "What offers lower prices for bulk purchases?",
          options: [
            "Volume Discounts",
            "Early Bird Discounts",
            "Last-Minute Discounts",
            "Member Discounts"
          ],
          correctAnswer: 0,
          explanation: "Volume Discounts offer lower prices for larger quantity purchases."
        },
        {
          id: 14,
          question: "What uses round numbers for premium products?",
          options: [
            "Round Number Pricing",
            "Psychological Pricing",
            "Decimal Pricing",
            "Fractional Pricing"
          ],
          correctAnswer: 0,
          explanation: "Round Number Pricing uses $100, $200 for premium positioning."
        },
        {
          id: 15,
          question: "What shows all costs upfront?",
          options: [
            "Transparent Pricing",
            "Hidden Pricing",
            "Complex Pricing",
            "Confusing Pricing"
          ],
          correctAnswer: 0,
          explanation: "Transparent Pricing shows all costs clearly with no hidden fees."
        },
        {
          id: 16,
          question: "What justifies price with customer stories?",
          options: [
            "Testimonials",
            "Cost Analysis",
            "Competitor Comparison",
            "Feature Lists"
          ],
          correctAnswer: 0,
          explanation: "Testimonials use customer stories to justify price and value."
        },
        {
          id: 17,
          question: "What offers deals close to consumption time?",
          options: [
            "Last-Minute Discounts",
            "Early Bird Discounts",
            "Volume Discounts",
            "Annual Discounts"
          ],
          correctAnswer: 0,
          explanation: "Last-Minute Discounts are offered close to the time of consumption."
        },
        {
          id: 18,
          question: "What measures customer response to price changes?",
          options: [
            "Price Sensitivity Testing",
            "Price Setting",
            "Price Recording",
            "Price Reporting"
          ],
          correctAnswer: 0,
          explanation: "Price Sensitivity Testing measures how sales change with price changes."
        },
        {
          id: 19,
          question: "What uses industry common pricing patterns?",
          options: [
            "Industry Standards",
            "Custom Pricing",
            "Unique Pricing",
            "Experimental Pricing"
          ],
          correctAnswer: 0,
          explanation: "Following Industry Standards means using common pricing patterns in the industry."
        },
        {
          id: 20,
          question: "What offers assurances of value?",
          options: [
            "Guarantees",
            "Promises",
            "Suggestions",
            "Recommendations"
          ],
          correctAnswer: 0,
          explanation: "Guarantees offer assurances that customers will receive the promised value."
        }
      ]
    },
    {
      id: 3,
      title: "Demand Forecasting Fundamentals",
      content: `# Demand Forecasting Fundamentals

## Understanding Demand Patterns
Demand forecasting is predicting how many customers will want to buy your product or service in the future. Accurate forecasting is essential for good yield management decisions.

**Three Types of Demand Patterns:**
1. **Trend Patterns** - Long-term upward or downward movements
2. **Seasonal Patterns** - Regular yearly fluctuations
3. **Random Patterns** - Unexpected variations without pattern

### Basic Forecasting Methods
Simple ways to predict future demand:

**Historical Average Method:**
- **Calculation**: Average of past sales data
- **Simple Use**: Easy to calculate and understand
- **Best For**: Stable demand patterns
- **Limitation**: Doesn't account for changes

**Moving Average Method:**
- **Calculation**: Average of recent periods only
- **Time Frame**: Last 3, 4, or 6 periods
- **Responsiveness**: More sensitive to recent changes
- **Application**: When patterns change gradually

**Seasonal Adjustment Method:**
- **Pattern Recognition**: Identifying seasonal cycles
- **Adjustment Factor**: Applying seasonal multipliers
- **Accuracy**: Better for seasonal businesses
- **Examples**: Holidays, weather patterns, school terms

### Data Collection for Forecasting
What information to gather:

**Historical Sales Data:**
- **Volume Information**: Number of units sold
- **Price Points**: Prices at which sales occurred
- **Timing Data**: When sales happened
- **Customer Types**: Who made the purchases

**Market Information:**
- **Competitor Activity**: What competitors are doing
- **Economic Conditions**: Overall market health
- **Industry Trends**: Changes in the industry
- **Regulatory Changes**: New rules or laws

**Event Information:**
- **Local Events**: Concerts, sports, conferences
- **Holidays**: Public and school holidays
- **Weather Forecasts**: Expected weather conditions
- **Special Promotions**: Your own marketing events

### Simple Forecasting Tools
Easy-to-use forecasting tools:

**Calendar Analysis:**
- **Date Tracking**: Marking important dates
- **Pattern Observation**: Seeing what happens when
- **Year-over-Year Comparison**: Comparing same periods
- **Event Impact Recording**: How events affect sales

**Booking Curve Analysis:**
- **Reservation Patterns**: How far in advance people book
- **Lead Time Tracking**: Time between booking and consumption
- **Pickup Rate Monitoring**: How bookings increase over time
- **Cancellation Patterns**: When and why cancellations occur

**Market Intelligence:**
- **Competitor Monitoring**: Watching competitor prices and offers
- **Customer Surveys**: Asking customers about future plans
- **Industry Reports**: Reading market analysis reports
- **Social Media Listening**: Monitoring online conversations

### Forecasting Accuracy Improvement
Making forecasts more reliable:

**Data Quality:**
- **Accuracy**: Correct and precise data
- **Completeness**: All necessary information
- **Timeliness**: Recent and relevant data
- **Consistency**: Same format and measurement

**Regular Updates:**
- **Frequency**: Updating forecasts regularly
- **Trigger Events**: Updating when something changes
- **Performance Review**: Checking forecast accuracy
- **Adjustment Process**: Making corrections as needed

**Multiple Methods:**
- **Comparison**: Using different methods together
- **Cross-Checking**: Verifying one forecast with another
- **Weighted Average**: Combining multiple forecasts
- **Best Method Selection**: Choosing most accurate method

### Common Forecasting Challenges
Problems to watch for:

**Unexpected Events:**
- **Sudden Changes**: Quick market shifts
- **External Shocks**: Economic or natural events
- **Competitor Actions**: Unexpected moves by competitors
- **Regulatory Changes**: New rules affecting business

**Data Limitations:**
- **Insufficient History**: Not enough past data
- **Changing Patterns**: Old patterns no longer apply
- **New Products**: No historical data available
- **Market Changes**: New competitors or technologies

**Human Factors:**
- **Over-Optimism**: Being too positive about future
- **Conservatism**: Being too cautious
- **Anchoring**: Sticking to initial estimates too long
- **Group Think**: Everyone agreeing without challenge

### Simple Forecasting Implementation
Putting forecasts into practice:

**Forecast Communication:**
- **Clear Presentation**: Easy-to-understand formats
- **Regular Distribution**: Sharing with relevant people
- **Assumption Explanation**: Stating what forecasts assume
- **Confidence Levels**: Showing how certain forecasts are

**Action Planning:**
- **Pricing Decisions**: Setting prices based on forecasts
- **Inventory Management**: Preparing right amount of stock
- **Staff Scheduling**: Planning employee coverage
- **Marketing Planning**: Timing promotions effectively

**Performance Tracking:**
- **Actual vs Forecast**: Comparing what happened to predictions
- **Error Measurement**: Calculating how far off forecasts were
- **Learning Process**: Understanding why forecasts were wrong
- **Improvement Planning**: Making better forecasts next time

Good demand forecasting helps make better pricing and inventory decisions, leading to higher revenue and better customer service.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three types of demand patterns?",
          options: [
            "Trend Patterns, Seasonal Patterns, Random Patterns",
            "High Patterns, Medium Patterns, Low Patterns",
            "Daily Patterns, Weekly Patterns, Monthly Patterns",
            "Customer Patterns, Market Patterns, Industry Patterns"
          ],
          correctAnswer: 0,
          explanation: "The three types are Trend Patterns (long-term movements), Seasonal Patterns (yearly fluctuations), and Random Patterns (unexpected variations)."
        },
        {
          id: 2,
          question: "What is average of past sales data called?",
          options: [
            "Historical Average Method",
            "Moving Average Method",
            "Seasonal Adjustment Method",
            "Trend Analysis Method"
          ],
          correctAnswer: 0,
          explanation: "Historical Average Method uses the average of past sales data."
        },
        {
          id: 3,
          question: "What uses average of recent periods only?",
          options: [
            "Moving Average Method",
            "Historical Average Method",
            "Seasonal Adjustment Method",
            "Simple Average Method"
          ],
          correctAnswer: 0,
          explanation: "Moving Average Method uses average of recent periods, not all historical data."
        },
        {
          id: 4,
          question: "What identifies seasonal cycles?",
          options: [
            "Seasonal Adjustment Method",
            "Historical Average Method",
            "Moving Average Method",
            "Trend Analysis Method"
          ],
          correctAnswer: 0,
          explanation: "Seasonal Adjustment Method identifies and adjusts for seasonal cycles."
        },
        {
          id: 5,
          question: "What tracks how far in advance people book?",
          options: [
            "Lead Time Tracking",
            "Sales Tracking",
            "Price Tracking",
            "Customer Tracking"
          ],
          correctAnswer: 0,
          explanation: "Lead Time Tracking measures time between booking and consumption."
        },
        {
          id: 6,
          question: "What compares same periods year to year?",
          options: [
            "Year-over-Year Comparison",
            "Month-over-Month Comparison",
            "Week-over-Week Comparison",
            "Day-over-Day Comparison"
          ],
          correctAnswer: 0,
          explanation: "Year-over-Year Comparison compares the same period in different years."
        },
        {
          id: 7,
          question: "What watches competitor prices and offers?",
          options: [
            "Competitor Monitoring",
            "Customer Monitoring",
            "Market Monitoring",
            "Price Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Competitor Monitoring watches what competitors are doing with pricing and offers."
        },
        {
          id: 8,
          question: "What measures time between booking and use?",
          options: [
            "Lead Time",
            "Booking Time",
            "Sales Time",
            "Service Time"
          ],
          correctAnswer: 0,
          explanation: "Lead Time is the time between when a booking is made and when the service is used."
        },
        {
          id: 9,
          question: "What are regular yearly fluctuations?",
          options: [
            "Seasonal Patterns",
            "Trend Patterns",
            "Random Patterns",
            "Cyclical Patterns"
          ],
          correctAnswer: 0,
          explanation: "Seasonal Patterns are regular yearly fluctuations in demand."
        },
        {
          id: 10,
          question: "What are unexpected variations without pattern?",
          options: [
            "Random Patterns",
            "Trend Patterns",
            "Seasonal Patterns",
            "Predictable Patterns"
          ],
          correctAnswer: 0,
          explanation: "Random Patterns are unexpected variations that don't follow a clear pattern."
        },
        {
          id: 11,
          question: "What uses last 3, 4, or 6 periods average?",
          options: [
            "Moving Average Method",
            "Historical Average Method",
            "Seasonal Adjustment Method",
            "Weighted Average Method"
          ],
          correctAnswer: 0,
          explanation: "Moving Average Method typically uses the last 3, 4, or 6 periods for calculation."
        },
        {
          id: 12,
          question: "What applies seasonal multipliers?",
          options: [
            "Seasonal Adjustment Method",
            "Historical Average Method",
            "Moving Average Method",
            "Simple Average Method"
          ],
          correctAnswer: 0,
          explanation: "Seasonal Adjustment Method applies multipliers to adjust for seasonal effects."
        },
        {
          id: 13,
          question: "What marks important dates for analysis?",
          options: [
            "Calendar Analysis",
            "Sales Analysis",
            "Customer Analysis",
            "Market Analysis"
          ],
          correctAnswer: 0,
          explanation: "Calendar Analysis marks important dates to understand their impact on demand."
        },
        {
          id: 14,
          question: "What tracks how bookings increase over time?",
          options: [
            "Pickup Rate Monitoring",
            "Sales Rate Monitoring",
            "Booking Rate Monitoring",
            "Customer Rate Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Pickup Rate Monitoring tracks how bookings increase as the consumption date approaches."
        },
        {
          id: 15,
          question: "What monitors online conversations?",
          options: [
            "Social Media Listening",
            "Customer Surveys",
            "Market Research",
            "Competitor Analysis"
          ],
          correctAnswer: 0,
          explanation: "Social Media Listening monitors online conversations about your business or industry."
        },
        {
          id: 16,
          question: "What are long-term upward or downward movements?",
          options: [
            "Trend Patterns",
            "Seasonal Patterns",
            "Random Patterns",
            "Cyclical Patterns"
          ],
          correctAnswer: 0,
          explanation: "Trend Patterns are long-term upward or downward movements in demand."
        },
        {
          id: 17,
          question: "What checks forecast accuracy regularly?",
          options: [
            "Performance Review",
            "Data Collection",
            "Forecast Creation",
            "Market Analysis"
          ],
          correctAnswer: 0,
          explanation: "Performance Review checks how accurate forecasts were compared to actual results."
        },
        {
          id: 18,
          question: "What combines multiple forecasts?",
          options: [
            "Weighted Average",
            "Simple Average",
            "Moving Average",
            "Historical Average"
          ],
          correctAnswer: 0,
          explanation: "Weighted Average combines multiple forecasts with different weights."
        },
        {
          id: 19,
          question: "What are quick market shifts?",
          options: [
            "Sudden Changes",
            "Gradual Changes",
            "Predictable Changes",
            "Seasonal Changes"
          ],
          correctAnswer: 0,
          explanation: "Sudden Changes are quick market shifts that are hard to predict."
        },
        {
          id: 20,
          question: "What compares actual results to predictions?",
          options: [
            "Actual vs Forecast Comparison",
            "Price vs Cost Comparison",
            "Demand vs Supply Comparison",
            "Revenue vs Expense Comparison"
          ],
          correctAnswer: 0,
          explanation: "Actual vs Forecast Comparison measures how accurate predictions were."
        }
      ]
    },
    {
      id: 4,
      title: "Inventory Management Basics",
      content: `# Inventory Management Basics

## Understanding Inventory in Yield Management
Inventory management in yield management is about controlling perishable inventory to maximize revenue. Unlike physical goods inventory, yield management inventory (like hotel rooms or airline seats) cannot be stored for future use.

**Three Key Inventory Concepts:**
1. **Perishable Nature** - Inventory value disappears if not sold
2. **Fixed Capacity** - Limited number of units available
3. **Time Sensitivity** - Value changes over time

### Inventory Types in Service Industries
Different kinds of service inventory:

**Fixed Inventory:**
- **Hotel Rooms** - Available rooms for specific nights
- **Airline Seats** - Seats on specific flights
- **Restaurant Tables** - Tables at specific meal times
- **Event Tickets** - Seats for specific performances

**Time-Based Inventory:**
- **Rental Equipment** - Available for specific time periods
- **Service Appointments** - Time slots for services
- **Parking Spaces** - Available for specific hours
- **Conference Rooms** - Available for specific meetings

### Basic Inventory Control Methods
Simple ways to manage inventory:

**Capacity Management:**
- **Total Units**: Maximum number available
- **Available Units**: Current unsold inventory
- **Sold Units**: Already booked inventory
- **Holdback Units**: Reserved for special purposes

**Inventory Allocation:**
- **Market Segments**: Assigning inventory to different customer groups
- **Distribution Channels**: Allocating to different sales channels
- **Time Periods**: Dividing inventory across different time slots
- **Price Categories**: Assigning to different price levels

### Overbooking Strategies
Managing no-shows and cancellations:

**Overbooking Calculation:**
- **Historical No-Show Rate**: Past percentage of no-shows
- **Cancellation Rate**: How often bookings are cancelled
- **Overbooking Level**: How much to overbook
- **Risk Management**: Balancing revenue vs customer service

**Overbooking Management:**
- **Customer Communication**: Informing about overbooking policies
- **Compensation Planning**: What to offer if overbooked
- **Alternative Arrangements**: Backup options for customers
- **Legal Compliance**: Following regulations about overbooking

### Inventory Protection
Saving inventory for high-value opportunities:

**Minimum Stay Requirements:**
- **Night Minimums**: Requiring multiple night stays
- **Time Blocks**: Minimum rental periods
- **Package Requirements**: Must buy complete packages
- **Advance Booking Rules**: Must book certain time in advance

**Rate Fences:**
- **Time Fences**: Different prices at different times
- **Advance Purchase Fences**: Prices based on booking time
- **Customer Type Fences**: Different prices for different customers
- **Flexibility Fences**: Prices based on change/cancel rules

**Inventory Bucketing:**
- **Price Categories**: Dividing inventory into price buckets
- **Allocation Rules**: How much inventory for each bucket
- **Movement Rules**: When to move inventory between buckets
- **Closing Rules**: When to close buckets to sales

### Simple Inventory Optimization
Basic ways to maximize inventory value:

**Best Available Rate (BAR):**
- **Dynamic Pricing**: Changing prices based on availability
- **Demand Response**: Lower prices when demand is low, higher when demand is high
- **Competitive Positioning**: Watching competitor prices
- **Market Conditions**: Responding to market changes

**Length of Stay Optimization:**
- **Stay Pattern Analysis**: Understanding booking patterns
- **Minimum Stay Setting**: Requiring optimal stay lengths
- **Arrival/Departure Control**: Managing check-in/check-out patterns
- **Package Creation**: Bundling multiple nights or services

**Channel Management:**
- **Direct Sales**: Selling through your own website or phone
- **Online Travel Agencies**: Using third-party booking sites
- **Travel Agents**: Working with professional agents
- **Corporate Accounts**: Business-to-business sales

### Inventory Reporting and Analysis
Tracking inventory performance:

**Basic Reports:**
- **Occupancy Report**: Percentage of inventory sold
- **Revenue Report**: Total revenue from inventory
- **Price Analysis**: Average prices achieved
- **Channel Performance**: Sales by distribution channel

**Performance Metrics:**
- **Occupancy Rate**: Percentage of inventory sold
- **Average Daily Rate (ADR)**: Average price per unit
- **Revenue Per Available Unit**: Total revenue divided by total units
- **Market Share**: Your sales compared to competitors

**Inventory Health Indicators:**
- **Booking Pace**: How quickly inventory is selling
- **Pickup Rate**: Increase in bookings over time
- **Cancellation Rate**: Percentage of cancelled bookings
- **No-Show Rate**: Percentage of no-shows

### Inventory Management Challenges
Common problems and solutions:

**Demand Uncertainty:**
- **Flexible Systems**: Ability to change quickly
- **Multiple Scenarios**: Planning for different outcomes
- **Regular Updates**: Frequently reviewing inventory status
- **Contingency Plans**: Backup plans for unexpected situations

**Competitive Pressure:**
- **Market Monitoring**: Watching competitor actions
- **Differentiation**: Offering unique value
- **Relationship Building**: Building customer loyalty
- **Flexible Response**: Ability to respond quickly to competitors

**System Limitations:**
- **Manual Processes**: When automation isn't available
- **Data Quality**: Ensuring accurate information
- **Staff Training**: Teaching employees inventory management
- **Technology Support**: Using available tools effectively

Effective inventory management helps maximize revenue from limited, perishable resources while maintaining good customer relationships.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three key inventory concepts?",
          options: [
            "Perishable Nature, Fixed Capacity, Time Sensitivity",
            "High Value, Medium Value, Low Value",
            "Large Inventory, Medium Inventory, Small Inventory",
            "Daily Inventory, Weekly Inventory, Monthly Inventory"
          ],
          correctAnswer: 0,
          explanation: "The three key concepts are Perishable Nature (value disappears if not sold), Fixed Capacity (limited units), and Time Sensitivity (value changes over time)."
        },
        {
          id: 2,
          question: "What cannot be stored for future use?",
          options: [
            "Perishable Inventory",
            "Durable Inventory",
            "Storable Inventory",
            "Physical Inventory"
          ],
          correctAnswer: 0,
          explanation: "Perishable Inventory like hotel rooms or airline seats cannot be stored for future use."
        },
        {
          id: 3,
          question: "What is limited number of units available?",
          options: [
            "Fixed Capacity",
            "Variable Capacity",
            "Flexible Capacity",
            "Unlimited Capacity"
          ],
          correctAnswer: 0,
          explanation: "Fixed Capacity means there's a limited number of units available."
        },
        {
          id: 4,
          question: "What manages no-shows and cancellations?",
          options: [
            "Overbooking Strategies",
            "Underbooking Strategies",
            "Exact Booking Strategies",
            "Random Booking Strategies"
          ],
          correctAnswer: 0,
          explanation: "Overbooking Strategies manage the risk of no-shows and cancellations."
        },
        {
          id: 5,
          question: "What saves inventory for high-value opportunities?",
          options: [
            "Inventory Protection",
            "Inventory Release",
            "Inventory Sale",
            "Inventory Discount"
          ],
          correctAnswer: 0,
          explanation: "Inventory Protection saves inventory for potentially higher-value sales."
        },
        {
          id: 6,
          question: "What requires multiple night stays?",
          options: [
            "Minimum Stay Requirements",
            "Maximum Stay Requirements",
            "Flexible Stay Requirements",
            "No Stay Requirements"
          ],
          correctAnswer: 0,
          explanation: "Minimum Stay Requirements ask customers to book multiple nights."
        },
        {
          id: 7,
          question: "What creates different prices for different times?",
          options: [
            "Rate Fences",
            "Price Walls",
            "Cost Barriers",
            "Value Gates"
          ],
          correctAnswer: 0,
          explanation: "Rate Fences create different prices based on various conditions like time or booking method."
        },
        {
          id: 8,
          question: "What changes prices based on availability?",
          options: [
            "Best Available Rate (BAR)",
            "Fixed Rate",
            "Standard Rate",
            "Discount Rate"
          ],
          correctAnswer: 0,
          explanation: "Best Available Rate (BAR) changes prices based on current availability and demand."
        },
        {
          id: 9,
          question: "What is percentage of inventory sold?",
          options: [
            "Occupancy Rate",
            "Sales Rate",
            "Booking Rate",
            "Revenue Rate"
          ],
          correctAnswer: 0,
          explanation: "Occupancy Rate is the percentage of available inventory that has been sold."
        },
        {
          id: 10,
          question: "What is average price per unit?",
          options: [
            "Average Daily Rate (ADR)",
            "Total Revenue",
            "Unit Cost",
            "Price Average"
          ],
          correctAnswer: 0,
          explanation: "Average Daily Rate (ADR) is the average price achieved per unit sold."
        },
        {
          id: 11,
          question: "What divides inventory into price categories?",
          options: [
            "Inventory Bucketing",
            "Inventory Splitting",
            "Inventory Grouping",
            "Inventory Categorizing"
          ],
          correctAnswer: 0,
          explanation: "Inventory Bucketing divides available inventory into different price categories."
        },
        {
          id: 12,
          question: "What manages check-in/check-out patterns?",
          options: [
            "Arrival/Departure Control",
            "Customer Control",
            "Time Control",
            "Booking Control"
          ],
          correctAnswer: 0,
          explanation: "Arrival/Departure Control manages when customers can check in and check out."
        },
        {
          id: 13,
          question: "What sells through your own website?",
          options: [
            "Direct Sales",
            "Indirect Sales",
            "Third-Party Sales",
            "Agent Sales"
          ],
          correctAnswer: 0,
          explanation: "Direct Sales are made through your own website, phone, or front desk."
        },
        {
          id: 14,
          question: "What is total revenue divided by total units?",
          options: [
            "Revenue Per Available Unit",
            "Cost Per Unit",
            "Profit Per Unit",
            "Value Per Unit"
          ],
          correctAnswer: 0,
          explanation: "Revenue Per Available Unit measures total revenue divided by total available units."
        },
        {
          id: 15,
          question: "What watches competitor actions?",
          options: [
            "Market Monitoring",
            "Customer Monitoring",
            "Price Monitoring",
            "Sales Monitoring"
          ],
          correctAnswer: 0,
          explanation: "Market Monitoring involves watching what competitors are doing."
        },
        {
          id: 16,
          question: "What are prices based on booking time?",
          options: [
            "Advance Purchase Fences",
            "Time Fences",
            "Customer Fences",
            "Flexibility Fences"
          ],
          correctAnswer: 0,
          explanation: "Advance Purchase Fences offer different prices based on how far in advance the booking is made."
        },
        {
          id: 17,
          question: "What measures how quickly inventory sells?",
          options: [
            "Booking Pace",
            "Sales Speed",
            "Inventory Turnover",
            "Revenue Flow"
          ],
          correctAnswer: 0,
          explanation: "Booking Pace measures how quickly inventory is being sold over time."
        },
        {
          id: 18,
          question: "What uses third-party booking sites?",
          options: [
            "Online Travel Agencies",
            "Direct Booking",
            "Phone Booking",
            "Walk-in Booking"
          ],
          correctAnswer: 0,
          explanation: "Online Travel Agencies are third-party websites that sell inventory for you."
        },
        {
          id: 19,
          question: "What are backup plans for unexpected situations?",
          options: [
            "Contingency Plans",
            "Main Plans",
            "Primary Plans",
            "Standard Plans"
          ],
          correctAnswer: 0,
          explanation: "Contingency Plans are backup plans for when unexpected situations occur."
        },
        {
          id: 20,
          question: "What is your sales compared to competitors?",
          options: [
            "Market Share",
            "Sales Volume",
            "Revenue Share",
            "Customer Share"
          ],
          correctAnswer: 0,
          explanation: "Market Share compares your sales to total market sales or competitor sales."
        }
      ]
    },
    {
      id: 5,
      title: "Customer Segmentation Basics",
      content: `# Customer Segmentation Basics

## Understanding Different Customer Groups
Customer segmentation is dividing customers into groups based on similar characteristics, needs, or behaviors. This helps create targeted pricing and marketing strategies for maximum revenue.

**Three Basic Segmentation Approaches:**
1. **Demographic Segmentation** - Based on customer characteristics
2. **Behavioral Segmentation** - Based on customer actions
3. **Value-Based Segmentation** - Based on customer worth

### Demographic Segmentation
Grouping by customer characteristics:

**Age Groups:**
- **Young Travelers** - Students, backpackers, young professionals
- **Family Travelers** - Parents with children
- **Senior Travelers** - Retirees, empty nesters
- **Business Travelers** - Working professionals on business trips

**Income Levels:**
- **Budget Customers** - Price-sensitive, limited spending
- **Mid-Market Customers** - Moderate spending, value-conscious
- **Premium Customers** - Higher spending, quality-focused
- **Luxury Customers** - Highest spending, exclusive experiences

**Travel Purpose:**
- **Business Travel** - Work-related, often expense account
- **Leisure Travel** - Vacation, personal time
- **Group Travel** - Family reunions, weddings, tours
- **Special Event Travel** - Concerts, sports, festivals

### Behavioral Segmentation
Grouping by customer actions:

**Booking Patterns:**
- **Early Bookers** - Plan well in advance
- **Last-Minute Bookers** - Book close to travel date
- **Regular Bookers** - Book same time each year
- **Spontaneous Bookers** - No set pattern

**Purchase Behavior:**
- **Price-Sensitive** - Always looking for lowest price
- **Value-Seekers** - Want good quality for reasonable price
- **Convenience-Focused** - Willing to pay more for ease
- **Loyal Customers** - Return repeatedly to same provider

**Usage Patterns:**
- **Weekend Users** - Primarily use services on weekends
- **Weekday Users** - Primarily use services on weekdays
- **Seasonal Users** - Only use during specific seasons
- **Occasional Users** - Use services infrequently

### Value-Based Segmentation
Grouping by customer worth:

**Revenue Contribution:**
- **High-Value Customers** - Generate most revenue
- **Medium-Value Customers** - Generate moderate revenue
- **Low-Value Customers** - Generate little revenue
- **Negative-Value Customers** - Cost more than they bring

**Profitability Levels:**
- **High-Profit Customers** - High margin, low cost to serve
- **Medium-Profit Customers** - Moderate margin and cost
- **Low-Profit Customers** - Low margin, may be high cost
- **Loss-Making Customers** - Actually cost money to serve

**Customer Lifetime Value:**
- **Long-Term High Value** - Valuable over many years
- **Short-Term High Value** - Valuable but brief relationship
- **Potential High Value** - Could become valuable with nurturing
- **Limited Value** - Always low value relationship

### Simple Segmentation Implementation
Putting segmentation into practice:

**Data Collection:**
- **Booking Information** - How and when customers book
- **Stay Information** - What they purchase and when
- **Payment Information** - How much they spend
- **Feedback Information** - What they say about experience

**Segment Identification:**
- **Pattern Recognition** - Seeing common characteristics
- **Group Creation** - Forming logical customer groups
- **Size Assessment** - How large each segment is
- **Value Calculation** - How much each segment is worth

**Strategy Development:**
- **Pricing Strategies** - Different prices for different segments
- **Product Offers** - Different packages for different segments
- **Marketing Messages** - Different communication for different segments
- **Service Levels** - Different service for different segments

### Rate Fencing Techniques
Creating barriers between segments:

**Physical Fences:**
- **Room Types** - Different room categories
- **Location Differences** - Better locations for higher prices
- **Amenity Access** - Access to special facilities
- **View Quality** - Better views command higher prices

**Time-Based Fences:**
- **Booking Time** - Prices based on when booked
- **Stay Duration** - Minimum or maximum stay requirements
- **Day of Week** - Different prices weekdays vs weekends
- **Seasonal Timing** - Different prices by season

**Transaction Fences:**
- **Payment Terms** - Different rules for different segments
- **Cancellation Policies** - Stricter rules for discount bookings
- **Change Flexibility** - More flexibility for higher prices
- **Advance Purchase** - Requirements for lower prices

### Customer Communication Strategies
Talking to different segments differently:

**Marketing Channels:**
- **Email Marketing** - Targeted messages to different groups
- **Social Media** - Different content for different audiences
- **Direct Mail** - Physical mail to specific segments
- **Advertising** - Different ads for different segments

**Message Customization:**
- **Value Proposition** - Different benefits highlighted
- **Price Presentation** - Different ways to show prices
- **Urgency Creation** - Different urgency for different segments
- **Trust Building** - Different trust elements emphasized

**Relationship Building:**
- **Loyalty Programs** - Rewards for repeat business
- **Personal Recognition** - Remembering customer preferences
- **Special Treatment** - Extra services for valuable customers
- **Feedback Collection** - Asking for input from different segments

### Simple Segmentation Benefits
Why segmentation helps yield management:

**Revenue Benefits:**
- **Price Optimization** - Right prices for right customers
- **Demand Management** - Balancing different customer flows
- **Revenue Protection** - Saving inventory for high-value customers
- **Upsell Opportunities** - Moving customers to higher segments

**Customer Benefits:**
- **Better Fit** - Customers get what they really want
- **Fair Pricing** - Different prices for different needs
- **Improved Service** - Service matched to expectations
- **Enhanced Experience** - More satisfying customer journey

**Operational Benefits:**
- **Efficient Resource Use** - Matching capacity to demand patterns
- **Predictable Demand** - Better forecasting with segment data
- **Staff Planning** - Right staff for different customer types
- **Inventory Management** - Better control of perishable inventory

Understanding customer segmentation helps create targeted strategies that maximize revenue while satisfying different customer needs.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three basic segmentation approaches?",
          options: [
            "Demographic, Behavioral, Value-Based",
            "Age, Income, Location",
            "Price, Product, Service",
            "High, Medium, Low"
          ],
          correctAnswer: 0,
          explanation: "The three basic approaches are Demographic (characteristics), Behavioral (actions), and Value-Based (customer worth)."
        },
        {
          id: 2,
          question: "What segments by customer characteristics?",
          options: [
            "Demographic Segmentation",
            "Behavioral Segmentation",
            "Value-Based Segmentation",
            "Price Segmentation"
          ],
          correctAnswer: 0,
          explanation: "Demographic Segmentation groups customers by characteristics like age, income, or purpose."
        },
        {
          id: 3,
          question: "What segments by customer actions?",
          options: [
            "Behavioral Segmentation",
            "Demographic Segmentation",
            "Value-Based Segmentation",
            "Market Segmentation"
          ],
          correctAnswer: 0,
          explanation: "Behavioral Segmentation groups customers by their actions and patterns."
        },
        {
          id: 4,
          question: "What segments by customer worth?",
          options: [
            "Value-Based Segmentation",
            "Demographic Segmentation",
            "Behavioral Segmentation",
            "Price Segmentation"
          ],
          correctAnswer: 0,
          explanation: "Value-Based Segmentation groups customers by how much revenue or profit they generate."
        },
        {
          id: 5,
          question: "What are parents with children called?",
          options: [
            "Family Travelers",
            "Business Travelers",
            "Senior Travelers",
            "Young Travelers"
          ],
          correctAnswer: 0,
          explanation: "Family Travelers are typically parents traveling with children."
        },
        {
          id: 6,
          question: "What are price-sensitive customers?",
          options: [
            "Budget Customers",
            "Premium Customers",
            "Luxury Customers",
            "Value Customers"
          ],
          correctAnswer: 0,
          explanation: "Budget Customers are very price-sensitive and look for the lowest prices."
        },
        {
          id: 7,
          question: "What plan well in advance?",
          options: [
            "Early Bookers",
            "Last-Minute Bookers",
            "Spontaneous Bookers",
            "Regular Bookers"
          ],
          correctAnswer: 0,
          explanation: "Early Bookers make their reservations well before the travel date."
        },
        {
          id: 8,
          question: "What generate most revenue?",
          options: [
            "High-Value Customers",
            "Medium-Value Customers",
            "Low-Value Customers",
            "Negative-Value Customers"
          ],
          correctAnswer: 0,
          explanation: "High-Value Customers generate the most revenue for the business."
        },
        {
          id: 9,
          question: "What are different room categories?",
          options: [
            "Physical Fences",
            "Time-Based Fences",
            "Transaction Fences",
            "Price Fences"
          ],
          correctAnswer: 0,
          explanation: "Physical Fences include different room types or categories."
        },
        {
          id: 10,
          question: "What are prices based on when booked?",
          options: [
            "Booking Time Fences",
            "Stay Duration Fences",
            "Seasonal Fences",
            "Day of Week Fences"
          ],
          correctAnswer: 0,
          explanation: "Booking Time Fences offer different prices based on how far in advance the booking is made."
        },
        {
          id: 11,
          question: "What are working professionals on trips?",
          options: [
            "Business Travelers",
            "Leisure Travelers",
            "Group Travelers",
            "Event Travelers"
          ],
          correctAnswer: 0,
          explanation: "Business Travelers are professionals traveling for work purposes."
        },
        {
          id: 12,
          question: "What are vacation travelers?",
          options: [
            "Leisure Travelers",
            "Business Travelers",
            "Group Travelers",
            "Event Travelers"
          ],
          correctAnswer: 0,
          explanation: "Leisure Travelers are on vacation or personal trips."
        },
        {
          id: 13,
          question: "What book close to travel date?",
          options: [
            "Last-Minute Bookers",
            "Early Bookers",
            "Regular Bookers",
            "Spontaneous Bookers"
          ],
          correctAnswer: 0,
          explanation: "Last-Minute Bookers make reservations close to the consumption date."
        },
        {
          id: 14,
          question: "What return repeatedly?",
          options: [
            "Loyal Customers",
            "New Customers",
            "One-Time Customers",
            "Random Customers"
          ],
          correctAnswer: 0,
          explanation: "Loyal Customers return to the same provider repeatedly."
        },
        {
          id: 15,
          question: "What have high margin, low cost to serve?",
          options: [
            "High-Profit Customers",
            "Medium-Profit Customers",
            "Low-Profit Customers",
            "Loss-Making Customers"
          ],
          correctAnswer: 0,
          explanation: "High-Profit Customers generate high margins with low service costs."
        },
        {
          id: 16,
          question: "What are different rules for different segments?",
          options: [
            "Transaction Fences",
            "Physical Fences",
            "Time-Based Fences",
            "Value Fences"
          ],
          correctAnswer: 0,
          explanation: "Transaction Fences create different payment or cancellation rules for different segments."
        },
        {
          id: 17,
          question: "What are rewards for repeat business?",
          options: [
            "Loyalty Programs",
            "Discount Programs",
            "Referral Programs",
            "New Customer Programs"
          ],
          correctAnswer: 0,
          explanation: "Loyalty Programs reward customers for repeat business."
        },
        {
          id: 18,
          question: "What are customers worth over many years?",
          options: [
            "Long-Term High Value",
            "Short-Term High Value",
            "Potential High Value",
            "Limited Value"
          ],
          correctAnswer: 0,
          explanation: "Long-Term High Value customers provide significant value over many years."
        },
        {
          id: 19,
          question: "What use services infrequently?",
          options: [
            "Occasional Users",
            "Frequent Users",
            "Regular Users",
            "Constant Users"
          ],
          correctAnswer: 0,
          explanation: "Occasional Users use services only occasionally or infrequently."
        },
        {
          id: 20,
          question: "What are different prices weekdays vs weekends?",
          options: [
            "Day of Week Fences",
            "Seasonal Fences",
            "Booking Time Fences",
            "Stay Duration Fences"
          ],
          correctAnswer: 0,
          explanation: "Day of Week Fences offer different prices for weekdays versus weekends."
        }
      ]
    },
    {
      id: 6,
      title: "Basic Yield Management Implementation",
      content: `# Basic Yield Management Implementation

## Putting Theory into Practice
This module brings together all the concepts from previous modules to show how to implement a basic yield management system. We'll focus on practical steps that can be implemented even with limited resources.

**Four Implementation Steps:**
1. **System Setup** - Creating basic tools and processes
2. **Data Management** - Collecting and using information
3. **Decision Making** - Using data to make pricing decisions
4. **Performance Review** - Measuring results and improving

### Simple System Setup
Creating basic yield management tools:

**Basic Tools Needed:**
- **Calendar System** - For tracking dates and events
- **Spreadsheet Program** - For data analysis and forecasting
- **Booking System** - For tracking reservations
- **Competitor Monitoring** - Simple way to watch competitors

**Process Documentation:**
- **Pricing Rules** - Clear rules for when to change prices
- **Decision Calendar** - When to review and adjust prices
- **Responsibility Chart** - Who makes which decisions
- **Communication Plan** - How to inform staff and customers

**Staff Training:**
- **Basic Concepts** - Teaching yield management fundamentals
- **System Use** - How to use available tools
- **Decision Guidelines** - When and how to make pricing decisions
- **Customer Communication** - How to explain pricing to customers

### Practical Data Management
Collecting and using information effectively:

**Essential Data Points:**
- **Historical Bookings** - Past reservation patterns
- **Current Bookings** - Current reservation status
- **Competitor Prices** - What competitors are charging
- **Market Events** - Upcoming events affecting demand

**Simple Data Collection Methods:**
- **Manual Recording** - Writing down important information
- **Regular Checks** - Daily or weekly data collection
- **Competitor Websites** - Checking competitor prices online
- **Event Calendars** - Tracking local events and holidays

**Basic Data Analysis:**
- **Trend Identification** - Spotting patterns in the data
- **Comparison Analysis** - Comparing current to past performance
- **Competitor Analysis** - Understanding competitor positioning
- **Demand Signals** - Recognizing signs of changing demand

### Daily Decision Making
Practical pricing decisions:

**Daily Review Process:**
- **Morning Check** - Review previous day's performance
- **Current Status** - Check current booking levels
- **Market Check** - Review competitor prices and market conditions
- **Decision Making** - Decide if price changes are needed

**Price Change Triggers:**
- **High Demand** - When bookings are stronger than expected
- **Low Demand** - When bookings are weaker than expected
- **Competitor Changes** - When competitors change prices
- **Special Events** - When events affect demand patterns

**Simple Decision Rules:**
- **If-Then Rules** - Clear rules for common situations
- **Price Ranges** - Minimum and maximum price points
- **Timing Rules** - When to implement price changes
- **Exception Handling** - What to do in unusual situations

### Communication and Coordination
Keeping everyone informed:

**Internal Communication:**
- **Daily Briefings** - Quick meetings to share information
- **Written Updates** - Simple reports or emails
- **Visual Displays** - Charts or boards showing current status
- **Training Updates** - Regular reminders of processes

**External Communication:**
- **Website Updates** - Keeping online prices current
- **Staff Training** - Teaching front-line staff about pricing
- **Customer Explanation** - Simple ways to explain pricing to customers
- **Marketing Coordination** - Aligning pricing with promotions

**Channel Management:**
- **Consistent Pricing** - Keeping prices consistent across channels
- **Channel Prioritization** - Which channels get inventory first
- **Channel Performance** - Tracking which channels perform best
- **Channel Communication** - Informing channels about price changes

### Simple Performance Measurement
Tracking results and success:

**Basic Metrics to Track:**
- **Occupancy Rate** - Percentage of inventory sold
- **Average Price** - Average price achieved
- **Total Revenue** - Total money collected
- **Market Comparison** - How you compare to competitors

**Regular Performance Review:**
- **Weekly Review** - Looking at the past week's performance
- **Monthly Review** - Analyzing monthly trends
- **Quarterly Review** - Checking longer-term patterns
- **Annual Review** - Year-end performance analysis

**Success Measurement:**
- **Goal Comparison** - Comparing results to targets
- **Improvement Tracking** - Measuring progress over time
- **Problem Identification** - Spotting areas needing improvement
- **Success Celebration** - Recognizing and rewarding good results

### Common Implementation Challenges
Problems you might face and solutions:

**Resistance to Change:**
- **Staff Concerns** - Employees worried about new systems
- **Customer Pushback** - Customers complaining about pricing
- **Management Doubts** - Leaders unsure about new approaches
- **Solution**: Clear communication, training, and demonstrating benefits

**Data Quality Issues:**
- **Incomplete Data** - Missing important information
- **Inaccurate Data** - Wrong or outdated information
- **Inconsistent Data** - Data in different formats
- **Solution**: Regular data cleaning and validation processes

**System Limitations:**
- **Manual Processes** - Too much manual work
- **Limited Technology** - Not enough automation
- **Time Constraints** - Not enough time for analysis
- **Solution**: Start simple, focus on most important areas first

### Continuous Improvement
Making your system better over time:

**Learning from Experience:**
- **Success Analysis** - Understanding what worked well
- **Mistake Review** - Learning from what didn't work
- **Customer Feedback** - Listening to customer comments
- **Market Changes** - Adapting to changing conditions

**Process Refinement:**
- **Rule Improvement** - Making decision rules better
- **Tool Enhancement** - Improving your tools and systems
- **Training Updates** - Keeping staff training current
- **Communication Improvement** - Better information sharing

**Growth Planning:**
- **System Scaling** - Preparing for more complex systems
- **Staff Development** - Training staff for more responsibility
- **Technology Investment** - Planning for better tools
- **Market Expansion** - Preparing for new markets or products

### Simple Implementation Checklist
Getting started with yield management:

**Week 1-2: Setup Phase**
- Create basic calendar of important dates
- Set up simple spreadsheet for tracking
- Establish daily check-in process
- Train key staff on basic concepts

**Week 3-4: Data Collection**
- Start recording daily bookings and prices
- Begin tracking competitor prices
- Collect information on local events
- Review historical booking patterns

**Week 5-6: Implementation**
- Start making small pricing adjustments
- Monitor results of price changes
- Refine decision rules based on experience
- Share initial results with team

**Ongoing: Continuous Improvement**
- Regular performance reviews
- Process refinement based on learning
- Staff training updates
- System enhancements as needed

Remember: The goal is not perfection but continuous improvement. Even simple yield management practices can significantly improve revenue when consistently applied.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four implementation steps?",
          options: [
            "System Setup, Data Management, Decision Making, Performance Review",
            "Planning, Execution, Monitoring, Reporting",
            "Data Collection, Analysis, Pricing, Sales",
            "Setup, Training, Implementation, Evaluation"
          ],
          correctAnswer: 0,
          explanation: "The four implementation steps are System Setup, Data Management, Decision Making, and Performance Review."
        },
        {
          id: 2,
          question: "What is for tracking dates and events?",
          options: [
            "Calendar System",
            "Spreadsheet Program",
            "Booking System",
            "Monitoring System"
          ],
          correctAnswer: 0,
          explanation: "A Calendar System helps track important dates, events, and patterns."
        },
        {
          id: 3,
          question: "What are clear rules for when to change prices?",
          options: [
            "Pricing Rules",
            "Decision Calendar",
            "Responsibility Chart",
            "Communication Plan"
          ],
          correctAnswer: 0,
          explanation: "Pricing Rules provide clear guidelines for when and how to change prices."
        },
        {
          id: 4,
          question: "What is checking competitor prices online?",
          options: [
            "Competitor Websites Check",
            "Manual Recording",
            "Regular Checks",
            "Event Calendar Review"
          ],
          correctAnswer: 0,
          explanation: "Checking Competitor Websites is a simple way to monitor competitor prices."
        },
        {
          id: 5,
          question: "What is reviewing previous day's performance?",
          options: [
            "Morning Check",
            "Current Status Check",
            "Market Check",
            "Decision Making"
          ],
          correctAnswer: 0,
          explanation: "Morning Check involves reviewing the previous day's performance as part of daily review."
        },
        {
          id: 6,
          question: "What triggers price changes when bookings are strong?",
          options: [
            "High Demand",
            "Low Demand",
            "Competitor Changes",
            "Special Events"
          ],
          correctAnswer: 0,
          explanation: "High Demand triggers price changes when bookings are stronger than expected."
        },
        {
          id: 7,
          question: "What are clear rules for common situations?",
          options: [
            "If-Then Rules",
            "Price Ranges",
            "Timing Rules",
            "Exception Handling"
          ],
          correctAnswer: 0,
          explanation: "If-Then Rules provide clear guidance for common pricing situations."
        },
        {
          id: 8,
          question: "What are quick meetings to share information?",
          options: [
            "Daily Briefings",
            "Written Updates",
            "Visual Displays",
            "Training Updates"
          ],
          correctAnswer: 0,
          explanation: "Daily Briefings are quick meetings to share current information with staff."
        },
        {
          id: 9,
          question: "What is percentage of inventory sold?",
          options: [
            "Occupancy Rate",
            "Average Price",
            "Total Revenue",
            "Market Comparison"
          ],
          correctAnswer: 0,
          explanation: "Occupancy Rate measures the percentage of available inventory that has been sold."
        },
        {
          id: 10,
          question: "What looks at the past week's performance?",
          options: [
            "Weekly Review",
            "Monthly Review",
            "Quarterly Review",
            "Annual Review"
          ],
          correctAnswer: 0,
          explanation: "Weekly Review analyzes performance over the past week."
        },
        {
          id: 11,
          question: "What is for data analysis and forecasting?",
          options: [
            "Spreadsheet Program",
            "Calendar System",
            "Booking System",
            "Monitoring System"
          ],
          correctAnswer: 0,
          explanation: "A Spreadsheet Program helps with data analysis, forecasting, and tracking."
        },
        {
          id: 12,
          question: "What is teaching yield management fundamentals?",
          options: [
            "Basic Concepts Training",
            "System Use Training",
            "Decision Guidelines Training",
            "Customer Communication Training"
          ],
          correctAnswer: 0,
          explanation: "Basic Concepts Training teaches staff the fundamentals of yield management."
        },
        {
          id: 13,
          question: "What are past reservation patterns?",
          options: [
            "Historical Bookings",
            "Current Bookings",
            "Competitor Prices",
            "Market Events"
          ],
          correctAnswer: 0,
          explanation: "Historical Bookings data shows past reservation patterns and trends."
        },
        {
          id: 14,
          question: "What checks current booking levels?",
          options: [
            "Current Status Check",
            "Morning Check",
            "Market Check",
            "Decision Making"
          ],
          correctAnswer: 0,
          explanation: "Current Status Check involves reviewing current booking levels and inventory status."
        },
        {
          id: 15,
          question: "What triggers when competitors change prices?",
          options: [
            "Competitor Changes",
            "High Demand",
            "Low Demand",
            "Special Events"
          ],
          correctAnswer: 0,
          explanation: "Competitor Changes trigger price reviews when competitors adjust their prices."
        },
        {
          id: 16,
          question: "What are minimum and maximum price points?",
          options: [
            "Price Ranges",
            "If-Then Rules",
            "Timing Rules",
            "Exception Handling"
          ],
          correctAnswer: 0,
          explanation: "Price Ranges establish minimum and maximum acceptable price points."
        },
        {
          id: 17,
          question: "What are charts showing current status?",
          options: [
            "Visual Displays",
            "Daily Briefings",
            "Written Updates",
            "Training Updates"
          ],
          correctAnswer: 0,
          explanation: "Visual Displays use charts or boards to show current status information."
        },
        {
          id: 18,
          question: "What is average price achieved?",
          options: [
            "Average Price",
            "Occupancy Rate",
            "Total Revenue",
            "Market Comparison"
          ],
          correctAnswer: 0,
          explanation: "Average Price measures the average price achieved for sold inventory."
        },
        {
          id: 19,
          question: "What analyzes monthly trends?",
          options: [
            "Monthly Review",
            "Weekly Review",
            "Quarterly Review",
            "Annual Review"
          ],
          correctAnswer: 0,
          explanation: "Monthly Review analyzes performance trends over the past month."
        },
        {
          id: 20,
          question: "What is comparing results to targets?",
          options: [
            "Goal Comparison",
            "Improvement Tracking",
            "Problem Identification",
            "Success Celebration"
          ],
          correctAnswer: 0,
          explanation: "Goal Comparison involves comparing actual results to established targets or goals."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM - 40 Questions covering all modules
  finalExam: {
    title: "Yield Management Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need 70% to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        module: 1,
        question: "What are the three core concepts of yield management?",
        options: [
          "Perishable Inventory, Variable Demand, Market Segmentation",
          "Price, Product, Promotion",
          "Cost, Revenue, Profit",
          "Supply, Demand, Equilibrium"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: The three core concepts are Perishable Inventory, Variable Demand, and Market Segmentation."
      },
      {
        id: 2,
        module: 1,
        question: "What type of inventory loses value over time?",
        options: [
          "Perishable Inventory",
          "Durable Inventory",
          "Fixed Inventory",
          "Seasonal Inventory"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Perishable Inventory like hotel rooms loses value if not sold."
      },
      {
        id: 3,
        module: 1,
        question: "Which industry commonly uses yield management?",
        options: [
          "Hotels and Resorts",
          "Grocery Stores",
          "Clothing Retail",
          "Book Publishing"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Hotels and Resorts commonly use yield management for room pricing."
      },
      {
        id: 4,
        module: 1,
        question: "What is changing prices based on demand called?",
        options: [
          "Dynamic Pricing",
          "Fixed Pricing",
          "Cost-Plus Pricing",
          "Competitive Pricing"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Dynamic Pricing changes prices based on current demand levels."
      },
      {
        id: 5,
        module: 1,
        question: "What is the first step in yield management process?",
        options: [
          "Data Collection",
          "Demand Forecasting",
          "Pricing Strategy",
          "Implementation"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Data Collection is the first step in the yield management process."
      },
      {
        id: 6,
        module: 1,
        question: "What do businesses increase through yield management?",
        options: [
          "Revenue",
          "Costs",
          "Inventory",
          "Employees"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Businesses increase Revenue through effective yield management."
      },
      {
        id: 7,
        module: 1,
        question: "What is the fourth step in the process?",
        options: [
          "Implementation and Review",
          "Data Collection",
          "Demand Forecasting",
          "Pricing Strategy"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Implementation and Review is the fourth and final step."
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        module: 2,
        question: "What are the four basic pricing approaches?",
        options: [
          "Cost-Based, Competition-Based, Value-Based, Demand-Based",
          "High, Medium, Low, Free",
          "Premium, Regular, Discount, Bundle",
          "Fixed, Variable, Seasonal, Event"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: The four basic approaches are Cost-Based, Competition-Based, Value-Based, and Demand-Based pricing."
      },
      {
        id: 9,
        module: 2,
        question: "What is cost plus markup called?",
        options: [
          "Cost-Plus Pricing",
          "Break-Even Pricing",
          "Value Pricing",
          "Competitive Pricing"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Cost-Plus Pricing adds a markup percentage to the cost."
      },
      {
        id: 10,
        module: 2,
        question: "What sets same prices as competitors?",
        options: [
          "Price Matching",
          "Price Leadership",
          "Premium Pricing",
          "Value Pricing"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Price Matching sets the same prices as competitors."
      },
      {
        id: 11,
        module: 2,
        question: "What prices based on customer perception?",
        options: [
          "Value-Based Pricing",
          "Cost-Based Pricing",
          "Competition-Based Pricing",
          "Demand-Based Pricing"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Value-Based Pricing is based on customer perceived value."
      },
      {
        id: 12,
        module: 2,
        question: "What offers lower prices in advance?",
        options: [
          "Early Bird Discounts",
          "Last-Minute Discounts",
          "Volume Discounts",
          "Loyalty Discounts"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Early Bird Discounts offer lower prices for early bookings."
      },
      {
        id: 13,
        module: 2,
        question: "What uses $9.99 instead of $10.00?",
        options: [
          "Psychological Pricing",
          "Round Number Pricing",
          "Exact Pricing",
          "Simple Pricing"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Psychological Pricing uses prices like $9.99 to influence perception."
      },
      {
        id: 14,
        module: 2,
        question: "What sells multiple items together?",
        options: [
          "Price Bundling",
          "Price Separating",
          "Price Stacking",
          "Price Grouping"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Price Bundling sells multiple items together as a package."
      },
      
      // Module 3 Questions (7 questions)
      {
        id: 15,
        module: 3,
        question: "What are the three types of demand patterns?",
        options: [
          "Trend Patterns, Seasonal Patterns, Random Patterns",
          "High Patterns, Medium Patterns, Low Patterns",
          "Daily Patterns, Weekly Patterns, Monthly Patterns",
          "Customer Patterns, Market Patterns, Industry Patterns"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: The three types are Trend Patterns, Seasonal Patterns, and Random Patterns."
      },
      {
        id: 16,
        module: 3,
        question: "What is average of past sales data called?",
        options: [
          "Historical Average Method",
          "Moving Average Method",
          "Seasonal Adjustment Method",
          "Trend Analysis Method"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Historical Average Method uses average of past sales data."
      },
      {
        id: 17,
        module: 3,
        question: "What uses average of recent periods only?",
        options: [
          "Moving Average Method",
          "Historical Average Method",
          "Seasonal Adjustment Method",
          "Simple Average Method"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Moving Average Method uses average of recent periods only."
      },
      {
        id: 18,
        module: 3,
        question: "What compares same periods year to year?",
        options: [
          "Year-over-Year Comparison",
          "Month-over-Month Comparison",
          "Week-over-Week Comparison",
          "Day-over-Day Comparison"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Year-over-Year Comparison compares same periods in different years."
      },
      {
        id: 19,
        module: 3,
        question: "What watches competitor prices and offers?",
        options: [
          "Competitor Monitoring",
          "Customer Monitoring",
          "Market Monitoring",
          "Price Monitoring"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Competitor Monitoring watches competitor prices and strategies."
      },
      {
        id: 20,
        module: 3,
        question: "What measures time between booking and use?",
        options: [
          "Lead Time",
          "Booking Time",
          "Sales Time",
          "Service Time"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Lead Time is time between booking and consumption."
      },
      {
        id: 21,
        module: 3,
        question: "What are regular yearly fluctuations?",
        options: [
          "Seasonal Patterns",
          "Trend Patterns",
          "Random Patterns",
          "Cyclical Patterns"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Seasonal Patterns are regular yearly fluctuations."
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 22,
        module: 4,
        question: "What are the three key inventory concepts?",
        options: [
          "Perishable Nature, Fixed Capacity, Time Sensitivity",
          "High Value, Medium Value, Low Value",
          "Large Inventory, Medium Inventory, Small Inventory",
          "Daily Inventory, Weekly Inventory, Monthly Inventory"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: The three key concepts are Perishable Nature, Fixed Capacity, and Time Sensitivity."
      },
      {
        id: 23,
        module: 4,
        question: "What cannot be stored for future use?",
        options: [
          "Perishable Inventory",
          "Durable Inventory",
          "Storable Inventory",
          "Physical Inventory"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Perishable Inventory like hotel rooms cannot be stored."
      },
      {
        id: 24,
        module: 4,
        question: "What manages no-shows and cancellations?",
        options: [
          "Overbooking Strategies",
          "Underbooking Strategies",
          "Exact Booking Strategies",
          "Random Booking Strategies"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Overbooking Strategies manage no-shows and cancellations."
      },
      {
        id: 25,
        module: 4,
        question: "What requires multiple night stays?",
        options: [
          "Minimum Stay Requirements",
          "Maximum Stay Requirements",
          "Flexible Stay Requirements",
          "No Stay Requirements"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Minimum Stay Requirements ask for multiple night bookings."
      },
      {
        id: 26,
        module: 4,
        question: "What changes prices based on availability?",
        options: [
          "Best Available Rate (BAR)",
          "Fixed Rate",
          "Standard Rate",
          "Discount Rate"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Best Available Rate (BAR) changes prices based on availability."
      },
      {
        id: 27,
        module: 4,
        question: "What is percentage of inventory sold?",
        options: [
          "Occupancy Rate",
          "Sales Rate",
          "Booking Rate",
          "Revenue Rate"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Occupancy Rate is percentage of inventory sold."
      },
      
      // Module 5 Questions (6 questions)
      {
        id: 28,
        module: 5,
        question: "What are the three basic segmentation approaches?",
        options: [
          "Demographic, Behavioral, Value-Based",
          "Age, Income, Location",
          "Price, Product, Service",
          "High, Medium, Low"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: The three approaches are Demographic, Behavioral, and Value-Based segmentation."
      },
      {
        id: 29,
        module: 5,
        question: "What segments by customer characteristics?",
        options: [
          "Demographic Segmentation",
          "Behavioral Segmentation",
          "Value-Based Segmentation",
          "Price Segmentation"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Demographic Segmentation groups by characteristics like age or income."
      },
      {
        id: 30,
        module: 5,
        question: "What are parents with children called?",
        options: [
          "Family Travelers",
          "Business Travelers",
          "Senior Travelers",
          "Young Travelers"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Family Travelers are typically parents with children."
      },
      {
        id: 31,
        module: 5,
        question: "What are price-sensitive customers?",
        options: [
          "Budget Customers",
          "Premium Customers",
          "Luxury Customers",
          "Value Customers"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Budget Customers are very price-sensitive."
      },
      {
        id: 32,
        module: 5,
        question: "What plan well in advance?",
        options: [
          "Early Bookers",
          "Last-Minute Bookers",
          "Spontaneous Bookers",
          "Regular Bookers"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Early Bookers make reservations well in advance."
      },
      {
        id: 33,
        module: 5,
        question: "What are different room categories?",
        options: [
          "Physical Fences",
          "Time-Based Fences",
          "Transaction Fences",
          "Price Fences"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Physical Fences include different room types or categories."
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        module: 6,
        question: "What are the four implementation steps?",
        options: [
          "System Setup, Data Management, Decision Making, Performance Review",
          "Planning, Execution, Monitoring, Reporting",
          "Data Collection, Analysis, Pricing, Sales",
          "Setup, Training, Implementation, Evaluation"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: The four steps are System Setup, Data Management, Decision Making, and Performance Review."
      },
      {
        id: 35,
        module: 6,
        question: "What is for tracking dates and events?",
        options: [
          "Calendar System",
          "Spreadsheet Program",
          "Booking System",
          "Monitoring System"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: A Calendar System tracks important dates and events."
      },
      {
        id: 36,
        module: 6,
        question: "What are clear rules for when to change prices?",
        options: [
          "Pricing Rules",
          "Decision Calendar",
          "Responsibility Chart",
          "Communication Plan"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Pricing Rules provide guidelines for price changes."
      },
      {
        id: 37,
        module: 6,
        question: "What is checking competitor prices online?",
        options: [
          "Competitor Websites Check",
          "Manual Recording",
          "Regular Checks",
          "Event Calendar Review"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Checking Competitor Websites monitors competitor prices."
      },
      {
        id: 38,
        module: 6,
        question: "What is reviewing previous day's performance?",
        options: [
          "Morning Check",
          "Current Status Check",
          "Market Check",
          "Decision Making"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Morning Check reviews previous day's performance."
      },
      {
        id: 39,
        module: 6,
        question: "What triggers price changes when bookings are strong?",
        options: [
          "High Demand",
          "Low Demand",
          "Competitor Changes",
          "Special Events"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: High Demand triggers price changes when bookings are strong."
      },
      {
        id: 40,
        module: 6,
        question: "What is percentage of inventory sold?",
        options: [
          "Occupancy Rate",
          "Average Price",
          "Total Revenue",
          "Market Comparison"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Occupancy Rate measures percentage of inventory sold."
      }
    ]
  }
};

export type YieldManagementCertificateType = typeof yieldManagementCertificate;
