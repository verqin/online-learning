export const marketingCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "marketing-certificate",
  title: "Marketing (Certificate)",
  description: "Learn essential marketing concepts, strategies, and practical skills to understand customer needs, create effective campaigns, and build brand awareness. No prior experience required.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📈",
  badge: "Certificate",
  prerequisites: [],
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Marketing Foundations",
      content: `
# Module 1: Marketing Foundations

## Welcome to Marketing
Marketing is about understanding what people need and want, then creating value for them. It's not just selling - it's building relationships.

## What Marketing Really Means
Marketing has four main purposes:
- Understanding customer needs and wants
- Creating products or services that provide value
- Communicating that value effectively
- Building lasting customer relationships

The marketing process starts with understanding the market. A market is simply a group of people who might want what you're offering.

## Core Marketing Concepts
**Value Proposition** is what makes your offering special. It's the reason customers should choose you over others. For example, a value proposition could be "fresh bread delivered daily" or "24-hour customer support."

**Target Audience** is the specific group of people you want to reach. Instead of trying to sell to everyone, successful marketers focus on particular groups who are most likely to be interested.

**Marketing Mix** consists of the Four Ps:
1. **Product** - What you're selling
2. **Price** - What you charge
3. **Place** - Where people can get it
4. **Promotion** - How people learn about it

These work together like ingredients in a recipe.

## Real-World Application
Every business uses marketing, from small shops to large companies. A local bakery markets by displaying fresh bread in the window (product), setting fair prices (price), being in a convenient location (place), and having friendly staff who remember regular customers (promotion).

Marketing success comes from consistency. Your message, look, and customer experience should match across all touchpoints.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of marketing according to this module?",
          options: [
            "Just selling products at any cost",
            "Understanding needs and creating value",
            "Only making advertisements",
            "Reducing product prices"
          ],
          correctAnswer: 1,
          explanation: "Marketing's main purpose is understanding customer needs and wants, then creating value for them - it's about building relationships, not just selling."
        },
        {
          id: 2,
          question: "What are the Four Ps of the marketing mix?",
          options: [
            "Product, Price, Place, Promotion",
            "People, Process, Physical evidence, Price",
            "Product, People, Place, Performance",
            "Price, Promotion, People, Process"
          ],
          correctAnswer: 0,
          explanation: "The Four Ps are Product (what you sell), Price (what you charge), Place (where it's available), and Promotion (how people learn about it)."
        },
        {
          id: 3,
          question: "What is a Value Proposition?",
          options: [
            "The price of a product",
            "What makes your offering special",
            "A list of product features",
            "The target audience's age"
          ],
          correctAnswer: 1,
          explanation: "A Value Proposition is what makes your offering special and gives customers a reason to choose you over others."
        },
        {
          id: 4,
          question: "Who is the Target Audience?",
          options: [
            "Everyone in the world",
            "Only people who have bought before",
            "The specific group you want to reach",
            "Your company's employees"
          ],
          correctAnswer: 2,
          explanation: "The Target Audience is the specific group of people most likely to be interested in what you're offering."
        },
        {
          id: 5,
          question: "In the bakery example, what represents 'Place' in the marketing mix?",
          options: [
            "The fresh bread in the window",
            "The fair prices set",
            "The convenient location",
            "The friendly staff"
          ],
          correctAnswer: 2,
          explanation: "In the example, 'Place' is represented by being in a convenient location where customers can easily access the bakery."
        },
        {
          id: 6,
          question: "What should be consistent across all marketing touchpoints?",
          options: [
            "Only the logo",
            "Only the prices",
            "Message, look, and customer experience",
            "Only the product packaging"
          ],
          correctAnswer: 2,
          explanation: "For marketing success, your message, look, and customer experience should match across all touchpoints."
        },
        {
          id: 7,
          question: "What does marketing start with?",
          options: [
            "Creating advertisements",
            "Setting prices",
            "Understanding the market",
            "Hiring salespeople"
          ],
          correctAnswer: 2,
          explanation: "The marketing process starts with understanding the market - the group of people who might want what you're offering."
        },
        {
          id: 8,
          question: "What is NOT one of the four main purposes of marketing mentioned?",
          options: [
            "Understanding customer needs",
            "Creating products with value",
            "Building customer relationships",
            "Reducing production costs"
          ],
          correctAnswer: 3,
          explanation: "Reducing production costs is not listed as one of the four main purposes of marketing in this module."
        },
        {
          id: 9,
          question: "How should successful marketers approach their audience?",
          options: [
            "Try to sell to everyone",
            "Focus on specific interested groups",
            "Only target wealthy customers",
            "Ignore customer feedback"
          ],
          correctAnswer: 1,
          explanation: "Successful marketers focus on particular groups who are most likely to be interested, rather than trying to sell to everyone."
        },
        {
          id: 10,
          question: "What do the Four Ps work together like?",
          options: [
            "Separate departments",
            "Ingredients in a recipe",
            "Competing priorities",
            "Different companies"
          ],
          correctAnswer: 1,
          explanation: "The Four Ps work together like ingredients in a recipe - they need to be balanced and coordinated."
        },
        {
          id: 11,
          question: "What example of Promotion was given in the bakery story?",
          options: [
            "Fresh bread in the window",
            "Friendly staff remembering customers",
            "Low prices",
            "Online advertising"
          ],
          correctAnswer: 1,
          explanation: "In the bakery example, Promotion is represented by friendly staff who remember regular customers."
        },
        {
          id: 12,
          question: "What is a 'market' in simple terms?",
          options: [
            "A physical store location",
            "A stock trading place",
            "A group of potential customers",
            "A product display area"
          ],
          correctAnswer: 2,
          explanation: "A market is simply a group of people who might want what you're offering."
        },
        {
          id: 13,
          question: "Which of these is part of building customer relationships?",
          options: [
            "Only during sales",
            "Creating lasting connections",
            "Ignoring complaints",
            "Changing products weekly"
          ],
          correctAnswer: 1,
          explanation: "Building lasting customer relationships is one of the main purposes of marketing mentioned in the module."
        },
        {
          id: 14,
          question: "What does Product represent in the marketing mix?",
          options: [
            "The advertising method",
            "The store location",
            "What you're selling",
            "The customer service"
          ],
          correctAnswer: 2,
          explanation: "Product represents what you're selling in the marketing mix."
        },
        {
          id: 15,
          question: "Why is consistency important in marketing?",
          options: [
            "It reduces costs",
            "It builds trust and recognition",
            "It makes advertising easier",
            "It allows frequent changes"
          ],
          correctAnswer: 1,
          explanation: "Consistency builds trust and helps customers recognize and remember your brand."
        },
        {
          id: 16,
          question: "What is the first step in the marketing process?",
          options: [
            "Creating advertisements",
            "Understanding customer needs",
            "Setting prices",
            "Choosing a location"
          ],
          correctAnswer: 1,
          explanation: "The marketing process starts with understanding customer needs and wants."
        },
        {
          id: 17,
          question: "How many main purposes of marketing were listed?",
          options: [
            "Three",
            "Four",
            "Five",
            "Six"
          ],
          correctAnswer: 1,
          explanation: "The module lists four main purposes of marketing."
        },
        {
          id: 18,
          question: "What does Price represent in the marketing mix?",
          options: [
            "The product quality",
            "What you charge customers",
            "The store appearance",
            "The delivery speed"
          ],
          correctAnswer: 1,
          explanation: "Price represents what you charge for your product or service."
        },
        {
          id: 19,
          question: "What kind of businesses use marketing?",
          options: [
            "Only large corporations",
            "Only online businesses",
            "Every business, big or small",
            "Only manufacturing companies"
          ],
          correctAnswer: 2,
          explanation: "Every business uses marketing, from small shops to large companies."
        },
        {
          id: 20,
          question: "What is marketing NOT just about?",
          options: [
            "Building relationships",
            "Understanding needs",
            "Creating value",
            "Only selling products"
          ],
          correctAnswer: 3,
          explanation: "Marketing is not just about selling - it's about understanding needs, creating value, and building relationships."
        }
      ]
    },
    {
      id: 2,
      title: "Understanding Your Customer",
      content: `
# Module 2: Understanding Your Customer

## The Importance of Knowing Your Customer
Customers are the heart of marketing. Without understanding them, marketing efforts are like throwing darts in the dark. This module shows you how to see through your customers' eyes.

## Customer Needs and Wants
A **need** is something necessary for living or functioning. A **want** is a desire for something specific. For example, people need food (a need), but they want pizza (a want).

Successful marketers understand both needs and wants. They ask questions like:
- What problem does the customer have?
- What would make their life easier?
- What do they dream about having?

## Customer Research Methods
There are simple ways to understand customers:

**Observation** means watching how people behave. Notice what products they look at, what they buy, and how they use things.

**Conversations** involve talking with customers. Ask open questions like "What do you like about this?" or "What could be better?"

**Feedback** comes from reviews, comments, and suggestions. Read what customers say about your product and similar products.

## Creating Customer Personas
A **customer persona** is a fictional representation of your ideal customer. It includes:
- Basic demographics (age, location, job)
- Interests and hobbies
- Challenges they face
- What they value most

For example: "Sarah, age 28, urban professional, values convenience, struggles with time management, looks for quick healthy meals."

## The Customer Journey
Customers go through stages when interacting with your brand:

1. **Awareness** - They discover you exist
2. **Consideration** - They compare you with options
3. **Decision** - They choose to buy
4. **Loyalty** - They become repeat customers
5. **Advocacy** - They recommend you to others

Understanding this journey helps you provide the right information at each stage.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a customer 'need'?",
          options: [
            "A desire for something specific",
            "Something necessary for living",
            "A luxury item",
            "A brand preference"
          ],
          correctAnswer: 1,
          explanation: "A need is something necessary for living or functioning, like food, shelter, or transportation."
        },
        {
          id: 2,
          question: "What is a customer 'want'?",
          options: [
            "A basic requirement",
            "A desire for something specific",
            "Something they already have",
            "A company's offering"
          ],
          correctAnswer: 1,
          explanation: "A want is a desire for something specific, like wanting pizza instead of just any food."
        },
        {
          id: 3,
          question: "What is customer observation?",
          options: [
            "Asking direct questions",
            "Reading online reviews",
            "Watching how people behave",
            "Creating surveys"
          ],
          correctAnswer: 2,
          explanation: "Observation means watching how people behave, what they look at, buy, and use."
        },
        {
          id: 4,
          question: "What is a customer persona?",
          options: [
            "A real customer's name",
            "A company employee",
            "A fictional ideal customer",
            "A marketing manager"
          ],
          correctAnswer: 2,
          explanation: "A customer persona is a fictional representation of your ideal customer with detailed characteristics."
        },
        {
          id: 5,
          question: "What stage comes first in the customer journey?",
          options: [
            "Decision",
            "Awareness",
            "Loyalty",
            "Consideration"
          ],
          correctAnswer: 1,
          explanation: "Awareness is the first stage where customers discover your brand exists."
        },
        {
          id: 6,
          question: "What should you ask to understand customer wants?",
          options: [
            "What is your budget?",
            "What problem do you have?",
            "Where do you work?",
            "What's your age?"
          ],
          correctAnswer: 1,
          explanation: "Asking about problems helps understand what customers want to solve or improve."
        },
        {
          id: 7,
          question: "What does 'feedback' include?",
          options: [
            "Only complaints",
            "Reviews, comments, and suggestions",
            "Only positive comments",
            "Sales numbers only"
          ],
          correctAnswer: 1,
          explanation: "Feedback includes reviews, comments, suggestions, and any input from customers."
        },
        {
          id: 8,
          question: "What is included in a customer persona?",
          options: [
            "Only age and location",
            "Basic demographics and interests",
            "Only purchase history",
            "Only income level"
          ],
          correctAnswer: 1,
          explanation: "A persona includes basic demographics, interests, challenges, and values."
        },
        {
          id: 9,
          question: "What stage involves comparing options?",
          options: [
            "Awareness",
            "Consideration",
            "Decision",
            "Advocacy"
          ],
          correctAnswer: 1,
          explanation: "Consideration is when customers compare different options before making a decision."
        },
        {
          id: 10,
          question: "What type of questions help understand customers?",
          options: [
            "Yes/No questions only",
            "Open-ended questions",
            "Technical questions",
            "Leading questions"
          ],
          correctAnswer: 1,
          explanation: "Open questions like 'What could be better?' provide deeper understanding than yes/no questions."
        },
        {
          id: 11,
          question: "What does the example persona 'Sarah' value most?",
          options: [
            "Low prices",
            "Convenience",
            "Brand names",
            "Luxury items"
          ],
          correctAnswer: 1,
          explanation: "In the example, Sarah values convenience according to her persona description."
        },
        {
          id: 12,
          question: "What is the final stage of the customer journey?",
          options: [
            "Decision",
            "Loyalty",
            "Consideration",
            "Advocacy"
          ],
          correctAnswer: 3,
          explanation: "Advocacy is when customers recommend you to others, the final stage of the journey."
        },
        {
          id: 13,
          question: "Why is understanding customers compared to 'throwing darts'?",
          options: [
            "Marketing is a game",
            "It's easy to hit targets",
            "Without understanding, efforts are random",
            "Customers move quickly"
          ],
          correctAnswer: 2,
          explanation: "Without understanding customers, marketing efforts are random like throwing darts in the dark."
        },
        {
          id: 14,
          question: "What should you notice during observation?",
          options: [
            "Only what people buy",
            "What they look at and how they use things",
            "Only their clothing",
            "Only their companions"
          ],
          correctAnswer: 1,
          explanation: "Notice what products people look at, what they buy, and how they use things."
        },
        {
          id: 15,
          question: "What question helps understand customer dreams?",
          options: [
            "What do you currently own?",
            "What would make life easier?",
            "What is your job?",
            "Where do you live?"
          ],
          correctAnswer: 1,
          explanation: "Asking what would make life easier helps understand customer dreams and desires."
        },
        {
          id: 16,
          question: "When do customers become repeat buyers?",
          options: [
            "Awareness stage",
            "Loyalty stage",
            "Consideration stage",
            "Decision stage"
          ],
          correctAnswer: 1,
          explanation: "Customers become repeat buyers during the Loyalty stage of the journey."
        },
        {
          id: 17,
          question: "What is NOT a simple research method mentioned?",
          options: [
            "Observation",
            "Conversations",
            "Feedback",
            "Laboratory testing"
          ],
          correctAnswer: 3,
          explanation: "Laboratory testing was not mentioned as a simple customer research method."
        },
        {
          id: 18,
          question: "What example need was given?",
          options: [
            "Pizza",
            "Designer clothes",
            "Food",
            "Entertainment"
          ],
          correctAnswer: 2,
          explanation: "Food was given as an example of a need (while pizza was the want)."
        },
        {
          id: 19,
          question: "How many stages are in the customer journey?",
          options: [
            "Three",
            "Four",
            "Five",
            "Six"
          ],
          correctAnswer: 2,
          explanation: "Five stages were listed: Awareness, Consideration, Decision, Loyalty, and Advocacy."
        },
        {
          id: 20,
          question: "What should you provide at each journey stage?",
          options: [
            "The same information",
            "The right information for that stage",
            "Only price information",
            "Technical specifications"
          ],
          correctAnswer: 1,
          explanation: "Understanding the journey helps provide the right information at each specific stage."
        }
      ]
    },
    {
      id: 3,
      title: "Creating Your Message",
      content: `
# Module 3: Creating Your Message

## The Power of Clear Communication
Your marketing message is what you say to customers. A clear message helps people understand why they should care about your offering. Think of it as telling a story that connects with your audience.

## Elements of a Strong Message
A good marketing message has three key parts:

**Clarity** means being easy to understand. Use simple words and short sentences. Avoid technical jargon that might confuse people.

**Relevance** means speaking to customer interests. Address their problems, desires, or aspirations. Show how you can help them.

**Consistency** means saying the same thing across all platforms. Your website, social media, and advertisements should all tell the same story.

## Crafting Your Value Proposition
Your value proposition answers: "Why should customers choose you?"

It should include:
- What you offer (product/service)
- Who it's for (target customer)
- How it helps (benefits)
- What makes it special (unique features)

Example: "Fresh, organic vegetables delivered to your door weekly, saving busy families time while ensuring healthy meals."

## Storytelling in Marketing
People remember stories better than facts. A good marketing story has:
- A relatable character (your customer)
- A problem they face
- A solution (your product)
- A positive outcome

For instance: "Maria struggled to find time to shop. With our grocery delivery, she now has fresh food without leaving home, giving her more family time."

## Call to Action
Every message needs a clear next step. A **call to action** tells people what to do:
- "Learn more on our website"
- "Visit our store today"
- "Call for a free consultation"
- "Download our guide"

Make it easy and obvious. Use action words like get, try, discover, or join.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a marketing message?",
          options: [
            "The product price",
            "What you say to customers",
            "The store location",
            "Customer feedback"
          ],
          correctAnswer: 1,
          explanation: "Your marketing message is what you communicate to customers about your offering."
        },
        {
          id: 2,
          question: "What does clarity in messaging mean?",
          options: [
            "Using complex technical terms",
            "Being easy to understand",
            "Having many details",
            "Using long sentences"
          ],
          correctAnswer: 1,
          explanation: "Clarity means being easy to understand with simple words and short sentences."
        },
        {
          id: 3,
          question: "What does relevance mean in messaging?",
          options: [
            "Speaking to customer interests",
            "Using fancy language",
            "Being technically accurate",
            "Following trends"
          ],
          correctAnswer: 0,
          explanation: "Relevance means speaking to customer problems, desires, or aspirations."
        },
        {
          id: 4,
          question: "What is a value proposition?",
          options: [
            "The product cost",
            "Why customers should choose you",
            "The company history",
            "Employee benefits"
          ],
          correctAnswer: 1,
          explanation: "A value proposition answers why customers should choose your offering over others."
        },
        {
          id: 5,
          question: "What should a value proposition include?",
          options: [
            "Only the price",
            "What you offer and how it helps",
            "Only the product name",
            "Competitor information"
          ],
          correctAnswer: 1,
          explanation: "It should include what you offer, who it's for, how it helps, and what makes it special."
        },
        {
          id: 6,
          question: "Why use storytelling in marketing?",
          options: [
            "To make ads longer",
            "People remember stories better than facts",
            "To hide product flaws",
            "To sound more professional"
          ],
          correctAnswer: 1,
          explanation: "People remember and connect with stories better than with plain facts or data."
        },
        {
          id: 7,
          question: "What is a call to action?",
          options: [
            "Customer complaints",
            "The next step you want people to take",
            "Product instructions",
            "Company policies"
          ],
          correctAnswer: 1,
          explanation: "A call to action tells people what specific step to take next."
        },
        {
          id: 8,
          question: "What does consistency in messaging mean?",
          options: [
            "Changing messages frequently",
            "Saying the same thing everywhere",
            "Using different stories",
            "Adapting to each person"
          ],
          correctAnswer: 1,
          explanation: "Consistency means your message is the same across website, social media, ads, etc."
        },
        {
          id: 9,
          question: "What action words work well in calls to action?",
          options: [
            "Think, consider, ponder",
            "Get, try, discover, join",
            "Avoid, stop, don't",
            "Maybe, possibly, perhaps"
          ],
          correctAnswer: 1,
          explanation: "Action words like get, try, discover, and join encourage people to take steps."
        },
        {
          id: 10,
          question: "What should you avoid for clarity?",
          options: [
            "Simple words",
            "Technical jargon",
            "Short sentences",
            "Customer benefits"
          ],
          correctAnswer: 1,
          explanation: "Avoid technical jargon that might confuse people who aren't experts."
        },
        {
          id: 11,
          question: "In the example, what does the vegetable delivery save?",
          options: [
            "Money only",
            "Time for busy families",
            "Storage space",
            "Cooking effort"
          ],
          correctAnswer: 1,
          explanation: "The example says it saves busy families time while ensuring healthy meals."
        },
        {
          id: 12,
          question: "What makes a good marketing story?",
          options: [
            "Complex plot twists",
            "A relatable character with a problem and solution",
            "Famous celebrities",
            "Technical specifications"
          ],
          correctAnswer: 1,
          explanation: "A good story has a relatable character, their problem, your solution, and positive outcome."
        },
        {
          id: 13,
          question: "How many key parts does a good message have?",
          options: [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "Three key parts: Clarity, Relevance, and Consistency."
        },
        {
          id: 14,
          question: "What does the Maria story demonstrate?",
          options: [
            "Complex logistics",
            "How a product solves a problem",
            "Manufacturing process",
            "Company history"
          ],
          correctAnswer: 1,
          explanation: "The Maria story shows how grocery delivery solves her time problem."
        },
        {
          id: 15,
          question: "What should a call to action be?",
          options: [
            "Vague and open-ended",
            "Clear and obvious",
            "Hidden in text",
            "Technical and detailed"
          ],
          correctAnswer: 1,
          explanation: "A call to action should be clear, obvious, and tell people exactly what to do."
        },
        {
          id: 16,
          question: "What platforms should have consistent messages?",
          options: [
            "Only the website",
            "Website, social media, and ads",
            "Only printed materials",
            "Only email communications"
          ],
          correctAnswer: 1,
          explanation: "Your message should be consistent across website, social media, advertisements, and all platforms."
        },
        {
          id: 17,
          question: "What question does a value proposition answer?",
          options: [
            "How much does it cost?",
            "Why choose you?",
            "Where is it made?",
            "Who are your employees?"
          ],
          correctAnswer: 1,
          explanation: "The value proposition specifically answers why customers should choose you."
        },
        {
          id: 18,
          question: "What type of words should you use for clarity?",
          options: [
            "Complex academic words",
            "Simple, everyday words",
            "Industry slang",
            "Foreign language terms"
          ],
          correctAnswer: 1,
          explanation: "Use simple, everyday words that most people understand easily."
        },
        {
          id: 19,
          question: "What does relevance address?",
          options: [
            "Company profits",
            "Customer problems and desires",
            "Manufacturing costs",
            "Employee satisfaction"
          ],
          correctAnswer: 1,
          explanation: "Relevance addresses customer problems, desires, or aspirations."
        },
        {
          id: 20,
          question: "What is messaging compared to in the module?",
          options: [
            "A sales contract",
            "Telling a story",
            "A scientific report",
            "A legal document"
          ],
          correctAnswer: 1,
          explanation: "Messaging is compared to telling a story that connects with your audience."
        }
      ]
    },
    {
      id: 4,
      title: "Marketing Channels Basics",
      content: `
# Module 4: Marketing Channels Basics

## What Are Marketing Channels?
Marketing channels are the ways you reach customers. Think of them as paths that connect your message to your audience. Different channels work for different purposes and audiences.

## Common Marketing Channels

**Social Media** includes platforms like Facebook, Instagram, or LinkedIn. Each platform attracts different types of people. Instagram is visual, LinkedIn is professional, Facebook is community-focused.

**Email Marketing** means sending messages directly to people's inboxes. It's personal and direct. People who give you their email are already interested.

**Website/Blog** is your online home. It's where people learn more about you. A good website clearly shows what you offer and how to get it.

**In-Person** includes stores, events, or meetings. Some businesses succeed through face-to-face interactions and local presence.

## Choosing the Right Channels
Select channels based on:
- Where your customers spend time
- What you're trying to achieve
- Your available resources
- The type of message you're sharing

For example, a fashion brand might use Instagram (visual), while a consulting business might use LinkedIn (professional).

## Channel Integration
Your channels should work together. Someone might see your social media post, visit your website, then sign up for emails. This creates a seamless experience.

**Cross-promotion** means mentioning one channel on another. "Follow us on Instagram for daily tips" on your website, or "Visit our store" in your emails.

## Simple Channel Management
Start with one or two channels you can manage well. It's better to do one channel excellently than several poorly.

Regular posting keeps you visible. Create a simple schedule, like posting on social media three times a week or sending a monthly email newsletter.

Track what works. Notice which posts get more attention or which emails get opened. Do more of what works and adjust what doesn't.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are marketing channels?",
          options: [
            "Product distribution paths",
            "Ways to reach customers",
            "Payment methods",
            "Manufacturing processes"
          ],
          correctAnswer: 1,
          explanation: "Marketing channels are the ways or paths you use to reach customers with your message."
        },
        {
          id: 2,
          question: "What is social media marketing?",
          options: [
            "Only Facebook advertising",
            "Using platforms like Instagram or LinkedIn",
            "Television commercials",
            "Newspaper ads"
          ],
          correctAnswer: 1,
          explanation: "Social media marketing uses platforms like Facebook, Instagram, or LinkedIn to reach people."
        },
        {
          id: 3,
          question: "What is email marketing?",
          options: [
            "Sending physical letters",
            "Messages to people's inboxes",
            "Text messages",
            "Phone calls"
          ],
          correctAnswer: 1,
          explanation: "Email marketing means sending messages directly to people's email inboxes."
        },
        {
          id: 4,
          question: "What does a website represent?",
          options: [
            "Your physical store",
            "Your online home",
            "Your social media",
            "Your email list"
          ],
          correctAnswer: 1,
          explanation: "A website is your online home where people learn more about you and your offerings."
        },
        {
          id: 5,
          question: "What should you base channel choice on?",
          options: [
            "Only what's trendy",
            "Where customers spend time",
            "What competitors avoid",
            "The cheapest options"
          ],
          correctAnswer: 1,
          explanation: "Choose channels based on where your customers actually spend their time."
        },
        {
          id: 6,
          question: "What is channel integration?",
          options: [
            "Using only one channel",
            "Channels working together",
            "Changing channels weekly",
            "Hiding some channels"
          ],
          correctAnswer: 1,
          explanation: "Channel integration means your different marketing channels work together smoothly."
        },
        {
          id: 7,
          question: "What is cross-promotion?",
          options: [
            "Competing with yourself",
            "Mentioning one channel on another",
            "Reducing marketing efforts",
            "Increasing prices"
          ],
          correctAnswer: 1,
          explanation: "Cross-promotion means mentioning one marketing channel on another platform."
        },
        {
          id: 8,
          question: "How many channels should you start with?",
          options: [
            "As many as possible",
            "One or two you can manage well",
            "Only the most expensive",
            "All available channels"
          ],
          correctAnswer: 1,
          explanation: "Start with one or two channels you can manage well rather than many done poorly."
        },
        {
          id: 9,
          question: "What does regular posting do?",
          options: [
            "Increases costs",
            "Keeps you visible",
            "Confuses customers",
            "Reduces quality"
          ],
          correctAnswer: 1,
          explanation: "Regular posting keeps your brand visible and top-of-mind for customers."
        },
        {
          id: 10,
          question: "What should you track?",
          options: [
            "Only sales numbers",
            "What works and what doesn't",
            "Competitor employees",
            "Industry trends only"
          ],
          correctAnswer: 1,
          explanation: "Track which posts get attention and which emails get opened to understand what works."
        },
        {
          id: 11,
          question: "What type of platform is Instagram?",
          options: [
            "Audio-focused",
            "Visual platform",
            "Professional network",
            "Text-only"
          ],
          correctAnswer: 1,
          explanation: "Instagram is primarily a visual platform for photos and videos."
        },
        {
          id: 12,
          question: "Who gives you their email address?",
          options: [
            "Random people",
            "People already interested",
            "Only existing customers",
            "Competitors"
          ],
          correctAnswer: 1,
          explanation: "People who give you their email are showing interest in what you offer."
        },
        {
          id: 13,
          question: "What might a fashion brand use?",
          options: [
            "Only LinkedIn",
            "Instagram for visual appeal",
            "Only email",
            "Only in-person"
          ],
          correctAnswer: 1,
          explanation: "A fashion brand might use Instagram because it's visual and showcases products well."
        },
        {
          id: 14,
          question: "What creates a seamless experience?",
          options: [
            "Using only one channel",
            "Channels working together",
            "Different messages everywhere",
            "No online presence"
          ],
          correctAnswer: 1,
          explanation: "When channels work together, customers get a seamless experience moving between them."
        },
        {
          id: 15,
          question: "What is better than many channels done poorly?",
          options: [
            "No channels",
            "One channel done excellently",
            "Expensive channels only",
            "Copying competitors"
          ],
          correctAnswer: 1,
          explanation: "It's better to excel at one channel than to do many channels poorly."
        },
        {
          id: 16,
          question: "What should a good website show?",
          options: [
            "Only company history",
            "What you offer and how to get it",
            "Employee profiles",
            "Technical specifications"
          ],
          correctAnswer: 1,
          explanation: "A good website clearly shows what you offer and how people can get it."
        },
        {
          id: 17,
          question: "What is an example schedule mentioned?",
          options: [
            "Posting hourly",
            "Three times a week",
            "Once a month",
            "Only on holidays"
          ],
          correctAnswer: 1,
          explanation: "A simple schedule could be posting on social media three times a week."
        },
        {
          id: 18,
          question: "What does LinkedIn attract?",
          options: [
            "Only students",
            "Professional audiences",
            "Only job seekers",
            "Young teenagers"
          ],
          correctAnswer: 1,
          explanation: "LinkedIn attracts professional audiences and business connections."
        },
        {
          id: 19,
          question: "What is in-person marketing?",
          options: [
            "Only television",
            "Stores, events, meetings",
            "Only billboards",
            "Radio ads"
          ],
          correctAnswer: 1,
          explanation: "In-person marketing includes physical stores, events, or face-to-face meetings."
        },
        {
          id: 20,
          question: "What should you adjust?",
          options: [
            "Only prices",
            "What doesn't work well",
            "Everything weekly",
            "Nothing - stay consistent"
          ],
          correctAnswer: 1,
          explanation: "Adjust approaches that aren't working based on what you track and observe."
        }
      ]
    },
    {
      id: 5,
      title: "Simple Campaign Planning",
      content: `
# Module 5: Simple Campaign Planning

## What is a Marketing Campaign?
A marketing campaign is a coordinated effort to achieve a specific goal. Think of it as a project with a clear purpose, like introducing a new product or increasing holiday sales.

## Campaign Planning Steps
Planning a campaign involves simple steps:

**Set a Clear Goal** - What do you want to achieve? Examples: "Get 50 new email subscribers" or "Sell 100 units of our new product."

**Define Your Audience** - Who are you talking to? Use what you learned about customer personas.

**Choose Your Message** - What will you say? Create content that speaks to your audience and supports your goal.

**Select Channels** - Where will you share your message? Pick the channels your audience uses.

**Set a Timeline** - When will it happen? Campaigns work best with start and end dates.

**Measure Results** - How will you know if it worked? Decide what success looks like.

## Campaign Example: Product Launch
Goal: Introduce new eco-friendly water bottles
Audience: Environmentally-conscious students and professionals
Message: "Stay hydrated sustainably with our reusable bottles"
Channels: Instagram, campus events, local coffee shops
Timeline: Two-week campaign before school semester
Measurement: Bottles sold during campaign period

## Budget Considerations
Even simple campaigns need budget thinking. Consider:
- Time needed to create content
- Costs for materials or ads
- Any fees for events or spaces

Start small. A simple social media campaign might just need your time to create posts.

## Adjusting During Campaigns
Watch how your campaign performs. If something isn't working, you can make small changes:
- Try different message wording
- Post at different times
- Use different images or examples

Learning from each campaign makes the next one better.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a marketing campaign?",
          options: [
            "A single advertisement",
            "A coordinated effort for a goal",
            "Random marketing activities",
            "Only social media posts"
          ],
          correctAnswer: 1,
          explanation: "A campaign is a coordinated effort to achieve a specific marketing goal."
        },
        {
          id: 2,
          question: "What is the first step in campaign planning?",
          options: [
            "Choosing channels",
            "Setting a clear goal",
            "Creating content",
            "Setting a budget"
          ],
          correctAnswer: 1,
          explanation: "The first step is setting a clear, specific goal for what you want to achieve."
        },
        {
          id: 3,
          question: "What should you define about your audience?",
          options: [
            "Their exact income",
            "Who you are talking to",
            "Their political views",
            "Their family size"
          ],
          correctAnswer: 1,
          explanation: "Define who your target audience is for this specific campaign."
        },
        {
          id: 4,
          question: "What should you choose for your message?",
          options: [
            "Anything trending",
            "Content that speaks to your audience",
            "Technical specifications",
            "Competitor comparisons"
          ],
          correctAnswer: 1,
          explanation: "Choose a message that speaks to your specific audience and supports your goal."
        },
        {
          id: 5,
          question: "How should you select channels?",
          options: [
            "Use all available channels",
            "Pick channels your audience uses",
            "Only use free channels",
            "Copy what competitors use"
          ],
          correctAnswer: 1,
          explanation: "Select channels based on where your target audience actually spends time."
        },
        {
          id: 6,
          question: "Why set a timeline?",
          options: [
            "To create urgency for yourself",
            "Campaigns work with start/end dates",
            "To make planning harder",
            "To confuse competitors"
          ],
          correctAnswer: 1,
          explanation: "Campaigns work best with clear start and end dates for focus and measurement."
        },
        {
          id: 7,
          question: "Why measure results?",
          options: [
            "To fill reports",
            "To know if it worked",
            "To show investors",
            "To get more budget"
          ],
          correctAnswer: 1,
          explanation: "Measurement tells you if your campaign achieved its goal and what you learned."
        },
        {
          id: 8,
          question: "What was the example campaign goal?",
          options: [
            "Increase website traffic",
            "Introduce eco-friendly bottles",
            "Reduce costs",
            "Hire new employees"
          ],
          correctAnswer: 1,
          explanation: "The example goal was introducing new eco-friendly water bottles."
        },
        {
          id: 9,
          question: "What budget consideration was mentioned?",
          options: [
            "Only advertising costs",
            "Time to create content",
            "Employee salaries",
            "Office rent"
          ],
          correctAnswer: 1,
          explanation: "Time needed to create content is an important budget consideration."
        },
        {
          id: 10,
          question: "What can you adjust during a campaign?",
          options: [
            "The original goal",
            "Message wording or timing",
            "The target audience",
            "The product itself"
          ],
          correctAnswer: 1,
          explanation: "You can adjust message wording, posting times, or images if something isn't working."
        },
        {
          id: 11,
          question: "What was the example audience?",
          options: [
            "Senior citizens",
            "Environmentally-conscious students",
            "Young children",
            "Construction workers"
          ],
          correctAnswer: 1,
          explanation: "The example audience was environmentally-conscious students and professionals."
        },
        {
          id: 12,
          question: "What was the example message?",
          options: [
            "Buy now, limited stock",
            "Stay hydrated sustainably",
            "Lowest prices guaranteed",
            "New technology breakthrough"
          ],
          correctAnswer: 1,
          explanation: "The example message was 'Stay hydrated sustainably with our reusable bottles.'"
        },
        {
          id: 13,
          question: "What example channels were used?",
          options: [
            "Television and radio",
            "Instagram and campus events",
            "Only newspaper",
            "Only email"
          ],
          correctAnswer: 1,
          explanation: "Example channels were Instagram, campus events, and local coffee shops."
        },
        {
          id: 14,
          question: "How long was the example timeline?",
          options: [
            "One day",
            "Two weeks",
            "Three months",
            "One year"
          ],
          correctAnswer: 1,
          explanation: "The example campaign ran for two weeks before the school semester."
        },
        {
          id: 15,
          question: "What should you start with for budget?",
          options: [
            "Large investments",
            "Small, manageable amounts",
            "No budget at all",
            "Maximum possible spending"
          ],
          correctAnswer: 1,
          explanation: "Start with small, manageable budgets to learn what works before investing more."
        },
        {
          id: 16,
          question: "What makes the next campaign better?",
          options: [
            "More budget",
            "Learning from previous campaigns",
            "Hiring more people",
            "Following trends blindly"
          ],
          correctAnswer: 1,
          explanation: "Learning from each campaign experience makes your future campaigns more effective."
        },
        {
          id: 17,
          question: "What is an example goal format?",
          options: [
            "Be successful",
            "Get 50 new email subscribers",
            "Make money",
            "Be popular"
          ],
          correctAnswer: 1,
          explanation: "Specific goals like 'Get 50 new email subscribers' are clearer than vague goals."
        },
        {
          id: 18,
          question: "What should success look like?",
          options: [
            "Vague improvement",
            "Decided before the campaign",
            "Whatever happens",
            "Better than competitors"
          ],
          correctAnswer: 1,
          explanation: "Decide what success looks like before starting so you can measure it."
        },
        {
          id: 19,
          question: "What might a simple campaign need?",
          options: [
            "Large team",
            "Just your time for posts",
            "Expensive software",
            "Celebrity endorsement"
          ],
          correctAnswer: 1,
          explanation: "A simple social media campaign might only need your time to create content."
        },
        {
          id: 20,
          question: "What can you try if something isn't working?",
          options: [
            "Give up immediately",
            "Different posting times",
            "Change everything completely",
            "Blame the audience"
          ],
          correctAnswer: 1,
          explanation: "Try small adjustments like different posting times before making big changes."
        }
      ]
    },
    {
      id: 6,
      title: "Measuring Success Simply",
      content: `
# Module 6: Measuring Success Simply

## Why Measure Marketing?
Measurement tells you what's working. Without it, you're guessing. Simple measurements help you make better decisions and use your resources wisely.

## What to Measure
Focus on a few key things rather than trying to track everything:

**Awareness** - Are people learning about you? Signs: website visits, social media followers, brand mentions.

**Engagement** - Are people interacting? Signs: likes, comments, shares, email opens.

**Action** - Are people doing what you want? Signs: purchases, sign-ups, downloads, inquiries.

## Simple Measurement Tools

**Website Analytics** tools (like simple counters) show how many people visit your site and which pages they view.

**Social Media Insights** show which posts get the most attention and when your audience is most active.

**Email Reports** show how many people open your emails and click links.

**Sales Records** show what products sell and when.

## Setting Simple Targets
Instead of complex goals, set simple targets:
- "Increase website visitors by 10% this month"
- "Get 5 more email subscribers per week"
- "Sell 3 more units per day"

These are clear and achievable.

## Learning from Measurements
Look for patterns:
- What days/times get best response?
- Which messages get most engagement?
- What offers drive most action?

Use these patterns to improve. Do more of what works and less of what doesn't.

## The Improvement Cycle
Marketing improvement is a cycle:
1. Try something
2. Measure results
3. Learn from what happened
4. Apply learning to next effort
5. Repeat

This continuous learning makes your marketing better over time.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Why measure marketing efforts?",
          options: [
            "To create reports",
            "To know what's working",
            "To impress managers",
            "To follow trends"
          ],
          correctAnswer: 1,
          explanation: "Measurement tells you what's actually working so you can make better decisions."
        },
        {
          id: 2,
          question: "What should you focus on measuring?",
          options: [
            "Everything possible",
            "A few key things",
            "Only sales numbers",
            "Only costs"
          ],
          correctAnswer: 1,
          explanation: "Focus on a few key measurements rather than trying to track everything."
        },
        {
          id: 3,
          question: "What does awareness measurement show?",
          options: [
            "Purchase amounts",
            "People learning about you",
            "Customer satisfaction",
            "Production costs"
          ],
          correctAnswer: 1,
          explanation: "Awareness shows whether people are learning about your brand or offerings."
        },
        {
          id: 4,
          question: "What are signs of engagement?",
          options: [
            "Website visits only",
            "Likes, comments, shares",
            "Only purchases",
            "Production speed"
          ],
          correctAnswer: 1,
          explanation: "Engagement includes interactions like likes, comments, shares, and email opens."
        },
        {
          id: 5,
          question: "What does action measurement track?",
          options: [
            "Only brand mentions",
            "Purchases, sign-ups, downloads",
            "Only social media followers",
            "Only website design"
          ],
          correctAnswer: 1,
          explanation: "Action tracks whether people take desired steps like purchases or sign-ups."
        },
        {
          id: 6,
          question: "What do website analytics show?",
          options: [
            "Only sales numbers",
            "Visitors and page views",
            "Customer emotions",
            "Competitor prices"
          ],
          correctAnswer: 1,
          explanation: "Website analytics show how many people visit and which pages they view."
        },
        {
          id: 7,
          question: "What do social media insights show?",
          options: [
            "Only follower count",
            "Which posts get attention",
            "Only ad costs",
            "Competitor strategies"
          ],
          correctAnswer: 1,
          explanation: "Social media insights show which posts perform best and audience activity patterns."
        },
        {
          id: 8,
          question: "What do email reports show?",
          options: [
            "Only who unsubscribes",
            "Opens and link clicks",
            "Only sender information",
            "Only delivery times"
          ],
          correctAnswer: 1,
          explanation: "Email reports show how many people open emails and click on links inside."
        },
        {
          id: 9,
          question: "What kind of targets should you set?",
          options: [
            "Vague goals",
            "Simple and achievable",
            "Impossible challenges",
            "Same as competitors"
          ],
          correctAnswer: 1,
          explanation: "Set simple, clear targets that are achievable and measurable."
        },
        {
          id: 10,
          question: "What should you look for in measurements?",
          options: [
            "Random occurrences",
            "Patterns and trends",
            "Only failures",
            "Only successes"
          ],
          correctAnswer: 1,
          explanation: "Look for patterns in what works well and when it works best."
        },
        {
          id: 11,
          question: "What is an example simple target?",
          options: [
            "Become market leader",
            "Increase visitors by 10%",
            "Double everything",
            "Beat all competitors"
          ],
          correctAnswer: 1,
          explanation: "'Increase website visitors by 10% this month' is a simple, measurable target."
        },
        {
          id: 12,
          question: "What patterns might you find?",
          options: [
            "Best days/times for response",
            "Customer favorite colors",
            "Competitor salaries",
            "Manufacturing defects"
          ],
          correctAnswer: 0,
          explanation: "Patterns could include which days/times get best response from your audience."
        },
        {
          id: 13,
          question: "What should you do with what works?",
          options: [
            "Stop doing it",
            "Do more of it",
            "Change it completely",
            "Hide it from competitors"
          ],
          correctAnswer: 1,
          explanation: "Do more of what works well based on your measurements."
        },
        {
          id: 14,
          question: "What is the improvement cycle?",
          options: [
            "One-time effort",
            "Try, measure, learn, apply",
            "Copy, paste, repeat",
            "Spend, hope, wait"
          ],
          correctAnswer: 1,
          explanation: "The cycle is: Try something, measure results, learn, apply learning, repeat."
        },
        {
          id: 15,
          question: "What do sales records show?",
          options: [
            "Only total revenue",
            "What sells and when",
            "Customer birthdays",
            "Employee performance"
          ],
          correctAnswer: 1,
          explanation: "Sales records show which products sell and patterns in sales timing."
        },
        {
          id: 16,
          question: "What happens without measurement?",
          options: [
            "Guessing what works",
            "Automatic success",
            "Lower costs",
            "Faster decisions"
          ],
          correctAnswer: 0,
          explanation: "Without measurement, you're just guessing about what's working."
        },
        {
          id: 17,
          question: "What is a sign of awareness?",
          options: [
            "Product returns",
            "Website visits",
            "Production delays",
            "Employee turnover"
          ],
          correctAnswer: 1,
          explanation: "Website visits are one sign that people are becoming aware of your brand."
        },
        {
          id: 18,
          question: "What makes targets achievable?",
          options: [
            "Being extremely difficult",
            "Being clear and specific",
            "Being secret",
            "Being the same as last year"
          ],
          correctAnswer: 1,
          explanation: "Clear, specific targets are more achievable than vague ones."
        },
        {
          id: 19,
          question: "What does continuous learning do?",
          options: [
            "Increases costs",
            "Makes marketing better",
            "Creates confusion",
            "Slows down work"
          ],
          correctAnswer: 1,
          explanation: "Continuous learning from measurements makes your marketing efforts better over time."
        },
        {
          id: 20,
          question: "How many steps are in the improvement cycle?",
          options: [
            "Three",
            "Four",
            "Five",
            "Six"
          ],
          correctAnswer: 2,
          explanation: "Five steps: Try, measure, learn, apply, repeat."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "marketing-certificate-exam",
    title: "Marketing Certificate Final Exam",
    description: "Comprehensive exam covering all six modules. Pass with 70% or higher to earn your certificate.",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        question: "What are the Four Ps of the marketing mix?",
        options: [
          "Product, Price, Place, Promotion",
          "People, Process, Physical evidence, Price",
          "Product, People, Place, Performance",
          "Price, Promotion, People, Process"
        ],
        correctAnswer: 0,
        explanation: "The Four Ps are Product (what you sell), Price (what you charge), Place (where it's available), and Promotion (how people learn about it).",
        module: 1
      },
      {
        id: 2,
        question: "What is a Value Proposition?",
        options: [
          "The price of a product",
          "What makes your offering special",
          "A list of product features",
          "The target audience's age"
        ],
        correctAnswer: 1,
        explanation: "A Value Proposition is what makes your offering special and gives customers a reason to choose you.",
        module: 1
      },
      {
        id: 3,
        question: "Who is the Target Audience?",
        options: [
          "Everyone in the world",
          "Only people who have bought before",
          "The specific group you want to reach",
          "Your company's employees"
        ],
        correctAnswer: 2,
        explanation: "The Target Audience is the specific group of people most likely to be interested in your offering.",
        module: 1
      },
      {
        id: 4,
        question: "What should be consistent across marketing touchpoints?",
        options: [
          "Only the logo",
          "Only the prices",
          "Message, look, and customer experience",
          "Only the product packaging"
        ],
        correctAnswer: 2,
        explanation: "For success, your message, look, and customer experience should match across all touchpoints.",
        module: 1
      },
      {
        id: 5,
        question: "What does marketing start with?",
        options: [
          "Creating advertisements",
          "Setting prices",
          "Understanding the market",
          "Hiring salespeople"
        ],
        correctAnswer: 2,
        explanation: "The marketing process starts with understanding the market - potential customers.",
        module: 1
      },
      {
        id: 6,
        question: "How should successful marketers approach their audience?",
        options: [
          "Try to sell to everyone",
          "Focus on specific interested groups",
          "Only target wealthy customers",
          "Ignore customer feedback"
        ],
        correctAnswer: 1,
        explanation: "Successful marketers focus on specific groups most likely to be interested.",
        module: 1
      },
      {
        id: 7,
        question: "What is marketing NOT just about?",
        options: [
          "Building relationships",
          "Understanding needs",
          "Creating value",
          "Only selling products"
        ],
        correctAnswer: 3,
        explanation: "Marketing is about needs, value, and relationships - not just selling.",
        module: 1
      },
      
      // Module 2 Questions (7)
      {
        id: 8,
        question: "What is a customer 'need'?",
        options: [
          "A desire for something specific",
          "Something necessary for living",
          "A luxury item",
          "A brand preference"
        ],
        correctAnswer: 1,
        explanation: "A need is something necessary for living or functioning.",
        module: 2
      },
      {
        id: 9,
        question: "What is a customer 'want'?",
        options: [
          "A basic requirement",
          "A desire for something specific",
          "Something they already have",
          "A company's offering"
        ],
        correctAnswer: 1,
        explanation: "A want is a desire for something specific.",
        module: 2
      },
      {
        id: 10,
        question: "What is customer observation?",
        options: [
          "Asking direct questions",
          "Reading online reviews",
          "Watching how people behave",
          "Creating surveys"
        ],
        correctAnswer: 2,
        explanation: "Observation means watching how people behave with products.",
        module: 2
      },
      {
        id: 11,
        question: "What is a customer persona?",
        options: [
          "A real customer's name",
          "A company employee",
          "A fictional ideal customer",
          "A marketing manager"
        ],
        correctAnswer: 2,
        explanation: "A persona is a fictional representation of your ideal customer.",
        module: 2
      },
      {
        id: 12,
        question: "What stage comes first in the customer journey?",
        options: [
          "Decision",
          "Awareness",
          "Loyalty",
          "Consideration"
        ],
        correctAnswer: 1,
        explanation: "Awareness is when customers first discover your brand.",
        module: 2
      },
      {
        id: 13,
        question: "What does 'feedback' include?",
        options: [
          "Only complaints",
          "Reviews, comments, and suggestions",
          "Only positive comments",
          "Sales numbers only"
        ],
        correctAnswer: 1,
        explanation: "Feedback includes all customer input like reviews and suggestions.",
        module: 2
      },
      {
        id: 14,
        question: "What is the final stage of the customer journey?",
        options: [
          "Decision",
          "Loyalty",
          "Consideration",
          "Advocacy"
        ],
        correctAnswer: 3,
        explanation: "Advocacy is when customers recommend you to others.",
        module: 2
      },
      
      // Module 3 Questions (6)
      {
        id: 15,
        question: "What does clarity in messaging mean?",
        options: [
          "Using complex technical terms",
          "Being easy to understand",
          "Having many details",
          "Using long sentences"
        ],
        correctAnswer: 1,
        explanation: "Clarity means using simple words that are easy to understand.",
        module: 3
      },
      {
        id: 16,
        question: "What does relevance mean in messaging?",
        options: [
          "Speaking to customer interests",
          "Using fancy language",
          "Being technically accurate",
          "Following trends"
        ],
        correctAnswer: 0,
        explanation: "Relevance means addressing customer problems or desires.",
        module: 3
      },
      {
        id: 17,
        question: "What is a value proposition?",
        options: [
          "The product cost",
          "Why customers should choose you",
          "The company history",
          "Employee benefits"
        ],
        correctAnswer: 1,
        explanation: "A value proposition explains why customers should choose you.",
        module: 3
      },
      {
        id: 18,
        question: "Why use storytelling in marketing?",
        options: [
          "To make ads longer",
          "People remember stories better than facts",
          "To hide product flaws",
          "To sound more professional"
        ],
        correctAnswer: 1,
        explanation: "Stories are more memorable and engaging than plain facts.",
        module: 3
      },
      {
        id: 19,
        question: "What is a call to action?",
        options: [
          "Customer complaints",
          "The next step you want people to take",
          "Product instructions",
          "Company policies"
        ],
        correctAnswer: 1,
        explanation: "A call to action tells people what specific step to take.",
        module: 3
      },
      {
        id: 20,
        question: "What should you avoid for clarity?",
        options: [
          "Simple words",
          "Technical jargon",
          "Short sentences",
          "Customer benefits"
        ],
        correctAnswer: 1,
        explanation: "Avoid technical jargon that might confuse people.",
        module: 3
      },
      
      // Module 4 Questions (6)
      {
        id: 21,
        question: "What are marketing channels?",
        options: [
          "Product distribution paths",
          "Ways to reach customers",
          "Payment methods",
          "Manufacturing processes"
        ],
        correctAnswer: 1,
        explanation: "Channels are the ways you reach customers with your message.",
        module: 4
      },
      {
        id: 22,
        question: "What is email marketing?",
        options: [
          "Sending physical letters",
          "Messages to people's inboxes",
          "Text messages",
          "Phone calls"
        ],
        correctAnswer: 1,
        explanation: "Email marketing means sending messages to email inboxes.",
        module: 4
      },
      {
        id: 23,
        question: "What does a website represent?",
        options: [
          "Your physical store",
          "Your online home",
          "Your social media",
          "Your email list"
        ],
        correctAnswer: 1,
        explanation: "A website is your online home base.",
        module: 4
      },
      {
        id: 24,
        question: "What should you base channel choice on?",
        options: [
          "Only what's trendy",
          "Where customers spend time",
          "What competitors avoid",
          "The cheapest options"
        ],
        correctAnswer: 1,
        explanation: "Choose channels where your customers actually spend time.",
        module: 4
      },
      {
        id: 25,
        question: "What is channel integration?",
        options: [
          "Using only one channel",
          "Channels working together",
          "Changing channels weekly",
          "Hiding some channels"
        ],
        correctAnswer: 1,
        explanation: "Integration means channels work together smoothly.",
        module: 4
      },
      {
        id: 26,
        question: "How many channels should you start with?",
        options: [
          "As many as possible",
          "One or two you can manage well",
          "Only the most expensive",
          "All available channels"
        ],
        correctAnswer: 1,
        explanation: "Start with one or two channels you can manage well.",
        module: 4
      },
      
      // Module 5 Questions (7)
      {
        id: 27,
        question: "What is a marketing campaign?",
        options: [
          "A single advertisement",
          "A coordinated effort for a goal",
          "Random marketing activities",
          "Only social media posts"
        ],
        correctAnswer: 1,
        explanation: "A campaign is a coordinated effort to achieve a specific goal.",
        module: 5
      },
      {
        id: 28,
        question: "What is the first step in campaign planning?",
        options: [
          "Choosing channels",
          "Setting a clear goal",
          "Creating content",
          "Setting a budget"
        ],
        correctAnswer: 1,
        explanation: "First, set a clear, specific goal for the campaign.",
        module: 5
      },
      {
        id: 29,
        question: "What should you define about your audience?",
        options: [
          "Their exact income",
          "Who you are talking to",
          "Their political views",
          "Their family size"
        ],
        correctAnswer: 1,
        explanation: "Define who your target audience is for this campaign.",
        module: 5
      },
      {
        id: 30,
        question: "How should you select channels?",
        options: [
          "Use all available channels",
          "Pick channels your audience uses",
          "Only use free channels",
          "Copy what competitors use"
        ],
        correctAnswer: 1,
        explanation: "Select channels based on where your audience spends time.",
        module: 5
      },
      {
        id: 31,
        question: "Why set a timeline?",
        options: [
          "To create urgency for yourself",
          "Campaigns work with start/end dates",
          "To make planning harder",
          "To confuse competitors"
        ],
        correctAnswer: 1,
        explanation: "Campaigns need clear start and end dates for focus.",
        module: 5
      },
      {
        id: 32,
        question: "Why measure results?",
        options: [
          "To fill reports",
          "To know if it worked",
          "To show investors",
          "To get more budget"
        ],
        correctAnswer: 1,
        explanation: "Measurement tells you if the campaign achieved its goal.",
        module: 5
      },
      {
        id: 33,
        question: "What can you adjust during a campaign?",
        options: [
          "The original goal",
          "Message wording or timing",
          "The target audience",
          "The product itself"
        ],
        correctAnswer: 1,
        explanation: "Adjust message wording or timing if something isn't working.",
        module: 5
      },
      
      // Module 6 Questions (7)
      {
        id: 34,
        question: "Why measure marketing efforts?",
        options: [
          "To create reports",
          "To know what's working",
          "To impress managers",
          "To follow trends"
        ],
        correctAnswer: 1,
        explanation: "Measurement tells you what's actually working.",
        module: 6
      },
      {
        id: 35,
        question: "What should you focus on measuring?",
        options: [
          "Everything possible",
          "A few key things",
          "Only sales numbers",
          "Only costs"
        ],
        correctAnswer: 1,
        explanation: "Focus on a few key measurements rather than everything.",
        module: 6
      },
      {
        id: 36,
        question: "What does awareness measurement show?",
        options: [
          "Purchase amounts",
          "People learning about you",
          "Customer satisfaction",
          "Production costs"
        ],
        correctAnswer: 1,
        explanation: "Awareness shows if people are learning about your brand.",
        module: 6
      },
      {
        id: 37,
        question: "What are signs of engagement?",
        options: [
          "Website visits only",
          "Likes, comments, shares",
          "Only purchases",
          "Production speed"
        ],
        correctAnswer: 1,
        explanation: "Engagement includes interactions like likes and comments.",
        module: 6
      },
      {
        id: 38,
        question: "What do website analytics show?",
        options: [
          "Only sales numbers",
          "Visitors and page views",
          "Customer emotions",
          "Competitor prices"
        ],
        correctAnswer: 1,
        explanation: "Analytics show visitor numbers and page views.",
        module: 6
      },
      {
        id: 39,
        question: "What kind of targets should you set?",
        options: [
          "Vague goals",
          "Simple and achievable",
          "Impossible challenges",
          "Same as competitors"
        ],
        correctAnswer: 1,
        explanation: "Set simple, achievable targets that are measurable.",
        module: 6
      },
      {
        id: 40,
        question: "What is the improvement cycle?",
        options: [
          "One-time effort",
          "Try, measure, learn, apply",
          "Copy, paste, repeat",
          "Spend, hope, wait"
        ],
        correctAnswer: 1,
        explanation: "The cycle is: Try, measure, learn, apply, repeat.",
        module: 6
      }
    ]
  }
};
