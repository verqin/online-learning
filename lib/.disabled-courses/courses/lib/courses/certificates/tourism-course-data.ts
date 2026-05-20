// Tourism (Certificate) - Complete Course Data
// All modules, content, quizzes, and exam in one file

export const tourismCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "tourism-certificate",
  title: "Tourism (Certificate)",
  description: "Learn the essentials of tourism including destination management, customer service, cultural awareness, and sustainable travel practices. Perfect for beginners entering the tourism industry.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏖️",
  badge: "Certificate",
  category: "Tourism & Travel",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    // MODULE 1: INTRODUCTION TO TOURISM
    {
      id: 1,
      title: "What is Tourism?",
      content: `# Understanding Tourism

## Welcome to the World of Tourism
Tourism is the activity of people traveling to places outside their usual environment for leisure, business, or other purposes. It's one of the largest industries in the world, creating jobs and opportunities everywhere.

## Three Main Types of Tourism
1. **Leisure Tourism** - People traveling for vacation, relaxation, and enjoyment
2. **Business Tourism** - Travel for work, conferences, and meetings
3. **Special Interest Tourism** - Travel focused on specific activities like sports, education, or health

## Why Tourism Matters
Tourism brings many benefits:
- Creates employment opportunities in hotels, restaurants, and attractions
- Helps local economies by bringing in visitors who spend money
- Promotes cultural exchange between different people
- Supports conservation of natural and historical sites

## Key Tourism Terms You Should Know
- **Visitor**: Someone traveling to a place outside their usual environment
- **Destination**: A place people travel to visit
- **Hospitality**: The friendly reception and treatment of guests
- **Tourist**: A person traveling for pleasure
- **Excursion**: A short trip usually taken for pleasure

Tourism connects people, cultures, and places. It's about creating memorable experiences for travelers while respecting local communities and environments.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main activity of tourism?",
          options: [
            "People traveling to places outside their usual environment",
            "Working in an office",
            "Studying at home",
            "Shopping in local stores"
          ],
          correctAnswer: 0,
          explanation: "Tourism involves people traveling to places outside their usual environment for various purposes."
        },
        {
          id: 2,
          question: "Which is NOT one of the three main types of tourism?",
          options: [
            "Leisure Tourism",
            "Business Tourism",
            "Shopping Tourism",
            "Special Interest Tourism"
          ],
          correctAnswer: 2,
          explanation: "The three main types are Leisure, Business, and Special Interest Tourism."
        },
        {
          id: 3,
          question: "What does hospitality mean in tourism?",
          options: [
            "The friendly reception and treatment of guests",
            "A type of hospital for tourists",
            "Building hotels only",
            "Cooking food for travelers"
          ],
          correctAnswer: 0,
          explanation: "Hospitality refers to welcoming and taking good care of visitors."
        },
        {
          id: 4,
          question: "Who is a tourist?",
          options: [
            "A person traveling for pleasure",
            "Someone who never travels",
            "A local resident",
            "A transportation worker"
          ],
          correctAnswer: 0,
          explanation: "A tourist is specifically someone traveling for pleasure or leisure."
        },
        {
          id: 5,
          question: "What benefit does tourism bring to local communities?",
          options: [
            "Creates employment opportunities",
            "Reduces local population",
            "Closes local businesses",
            "Limits cultural activities"
          ],
          correctAnswer: 0,
          explanation: "Tourism creates jobs in hotels, restaurants, attractions, and related services."
        },
        {
          id: 6,
          question: "What is a destination in tourism?",
          options: [
            "A place people travel to visit",
            "The starting point of a journey",
            "A type of transportation",
            "A travel document"
          ],
          correctAnswer: 0,
          explanation: "A destination is the place where travelers go to visit."
        },
        {
          id: 7,
          question: "What is business tourism?",
          options: [
            "Travel for work, conferences, and meetings",
            "Vacation with business partners",
            "Shopping for business supplies",
            "Studying business while traveling"
          ],
          correctAnswer: 0,
          explanation: "Business tourism involves travel related to work activities."
        },
        {
          id: 8,
          question: "What is an excursion?",
          options: [
            "A short trip usually taken for pleasure",
            "A long-term vacation",
            "A business meeting",
            "A permanent move"
          ],
          correctAnswer: 0,
          explanation: "An excursion is typically a brief trip for enjoyment."
        },
        {
          id: 9,
          question: "What does tourism help conserve?",
          options: [
            "Natural and historical sites",
            "Only modern buildings",
            "Industrial factories",
            "Private homes"
          ],
          correctAnswer: 0,
          explanation: "Tourism often supports the preservation of important natural and cultural sites."
        },
        {
          id: 10,
          question: "What is special interest tourism?",
          options: [
            "Travel focused on specific activities",
            "Travel for general sightseeing",
            "Business travel only",
            "Emergency travel"
          ],
          correctAnswer: 0,
          explanation: "Special interest tourism has a specific focus like sports, education, or health."
        },
        {
          id: 11,
          question: "Who is considered a visitor in tourism?",
          options: [
            "Someone traveling outside their usual environment",
            "Only foreign travelers",
            "Local residents",
            "Government officials"
          ],
          correctAnswer: 0,
          explanation: "A visitor is anyone traveling outside their normal living area."
        },
        {
          id: 12,
          question: "What does tourism promote between different people?",
          options: [
            "Cultural exchange",
            "Isolation",
            "Conflict",
            "Competition"
          ],
          correctAnswer: 0,
          explanation: "Tourism helps people learn about and appreciate different cultures."
        },
        {
          id: 13,
          question: "What type of tourism involves conferences?",
          options: [
            "Business Tourism",
            "Leisure Tourism",
            "Medical Tourism",
            "Adventure Tourism"
          ],
          correctAnswer: 0,
          explanation: "Business tourism includes attending conferences and meetings."
        },
        {
          id: 14,
          question: "What is leisure tourism primarily for?",
          options: [
            "Vacation, relaxation, and enjoyment",
            "Work assignments",
            "Medical treatment",
            "Family emergencies"
          ],
          correctAnswer: 0,
          explanation: "Leisure tourism focuses on relaxation and enjoyment."
        },
        {
          id: 15,
          question: "How does tourism help local economies?",
          options: [
            "Visitors spend money locally",
            "Tourists take money away",
            "It increases taxes only",
            "It reduces local spending"
          ],
          correctAnswer: 0,
          explanation: "Tourists spend money on accommodations, food, souvenirs, and activities."
        },
        {
          id: 16,
          question: "What is NOT a key tourism term?",
          options: [
            "Commuter",
            "Visitor",
            "Destination",
            "Tourist"
          ],
          correctAnswer: 0,
          explanation: "Commuter is not specifically a tourism term, though some commuters might be visitors."
        },
        {
          id: 17,
          question: "What is the purpose of special interest tourism?",
          options: [
            "Focus on specific activities or themes",
            "General vacationing",
            "Routine business travel",
            "Emergency travel only"
          ],
          correctAnswer: 0,
          explanation: "It targets specific interests like photography, bird watching, or cooking classes."
        },
        {
          id: 18,
          question: "What does tourism create for local people?",
          options: [
            "Job opportunities",
            "Only traffic problems",
            "Higher rents only",
            "Language barriers"
          ],
          correctAnswer: 0,
          explanation: "Tourism creates diverse employment in service industries."
        },
        {
          id: 19,
          question: "What is the difference between a tourist and a visitor?",
          options: [
            "Tourist travels for pleasure, visitor is broader",
            "There is no difference",
            "Visitor is only for business",
            "Tourist stays longer"
          ],
          correctAnswer: 0,
          explanation: "Visitor includes all travelers, while tourist specifically refers to pleasure travelers."
        },
        {
          id: 20,
          question: "Why is tourism considered a large industry?",
          options: [
            "It involves millions of travelers worldwide",
            "It only affects few countries",
            "It's a small niche market",
            "It's declining globally"
          ],
          correctAnswer: 0,
          explanation: "Tourism involves massive numbers of people traveling globally every year."
        }
      ]
    },

    // MODULE 2: TRAVEL SERVICES
    {
      id: 2,
      title: "Travel Services and Accommodation",
      content: `# Travel Services and Where to Stay

## Transportation for Tourists
Travelers need ways to get to their destinations and move around. There are several transportation options:

**Air Travel** - Fastest for long distances, airports connect cities worldwide
**Rail Travel** - Comfortable for seeing landscapes, popular in many countries
**Road Travel** - Cars, buses, and coaches offer flexibility
**Water Travel** - Cruises, ferries, and boats for coastal and island destinations

## Types of Accommodation
Where travelers stay greatly affects their experience:

**Hotels** - Range from budget to luxury, offer various services
**Resorts** - All-inclusive properties with many activities on site
**Hostels** - Budget-friendly, often with shared facilities
**Vacation Rentals** - Homes or apartments rented for short stays
**Bed & Breakfasts** - Small, personal accommodations with morning meals

## Travel Agencies and Services
These businesses help plan and book travel:

**Travel Agencies** - Experts who arrange trips, flights, and hotels
**Tour Operators** - Create package tours with multiple services included
**Online Booking Platforms** - Websites and apps for self-booking
**Visitor Information Centers** - Provide local maps, advice, and assistance

## Key Service Standards
Good tourism services share these qualities:
- **Cleanliness** - All facilities should be clean and well-maintained
- **Safety** - Protecting guests from harm or danger
- **Friendliness** - Warm, welcoming staff who want to help
- **Reliability** - Services delivered as promised
- **Information** - Clear details about services and local attractions

Understanding these services helps tourism professionals provide better experiences for visitors.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the fastest transportation for long distances?",
          options: [
            "Air travel",
            "Car travel",
            "Train travel",
            "Bus travel"
          ],
          correctAnswer: 0,
          explanation: "Airplanes are the fastest way to cover long distances."
        },
        {
          id: 2,
          question: "What type of accommodation offers all-inclusive services?",
          options: [
            "Resorts",
            "Hostels",
            "Camping sites",
            "University dorms"
          ],
          correctAnswer: 0,
          explanation: "Resorts often include meals, activities, and amenities in one price."
        },
        {
          id: 3,
          question: "Who creates package tours with multiple services?",
          options: [
            "Tour operators",
            "Hotel managers",
            "Airline pilots",
            "Restaurant chefs"
          ],
          correctAnswer: 0,
          explanation: "Tour operators put together complete travel packages."
        },
        {
          id: 4,
          question: "What is a key service standard in tourism?",
          options: [
            "Cleanliness",
            "Complexity",
            "Expensiveness",
            "Exclusivity"
          ],
          correctAnswer: 0,
          explanation: "Clean facilities are essential for guest satisfaction."
        },
        {
          id: 5,
          question: "What type of accommodation is most budget-friendly?",
          options: [
            "Hostels",
            "Luxury hotels",
            "Private villas",
            "Five-star resorts"
          ],
          correctAnswer: 0,
          explanation: "Hostels offer affordable lodging, often with shared facilities."
        },
        {
          id: 6,
          question: "What does a travel agency do?",
          options: [
            "Arranges trips, flights, and hotels",
            "Only books flights",
            "Manages restaurants",
            "Builds hotels"
          ],
          correctAnswer: 0,
          explanation: "Travel agencies help plan and book complete travel arrangements."
        },
        {
          id: 7,
          question: "What transportation is comfortable for seeing landscapes?",
          options: [
            "Rail travel",
            "Air travel",
            "Walking only",
            "Subway"
          ],
          correctAnswer: 0,
          explanation: "Trains offer comfortable views of passing scenery."
        },
        {
          id: 8,
          question: "What do online booking platforms provide?",
          options: [
            "Self-booking options",
            "Only flight information",
            "Hotel construction",
            "Travel insurance only"
          ],
          correctAnswer: 0,
          explanation: "These platforms let travelers book their own arrangements online."
        },
        {
          id: 9,
          question: "What is a bed & breakfast?",
          options: [
            "Small accommodation with morning meals",
            "A large hotel chain",
            "A camping site",
            "A cruise ship"
          ],
          correctAnswer: 0,
          explanation: "B&Bs are typically small, personal lodgings that include breakfast."
        },
        {
          id: 10,
          question: "Why is safety important in tourism services?",
          options: [
            "To protect guests from harm",
            "To increase prices",
            "To limit guest numbers",
            "To reduce staff"
          ],
          correctAnswer: 0,
          explanation: "Guest safety is a fundamental responsibility in tourism."
        },
        {
          id: 11,
          question: "What transportation offers the most flexibility?",
          options: [
            "Road travel",
            "Air travel",
            "Cruise ships",
            "High-speed trains"
          ],
          correctAnswer: 0,
          explanation: "Cars and buses can go many places at the traveler's schedule."
        },
        {
          id: 12,
          question: "What do visitor information centers provide?",
          options: [
            "Local maps and advice",
            "Hotel reservations only",
            "Flight tickets",
            "Travel visas"
          ],
          correctAnswer: 0,
          explanation: "These centers help visitors navigate and enjoy the destination."
        },
        {
          id: 13,
          question: "What is a vacation rental?",
          options: [
            "A home or apartment rented short-term",
            "A hotel room",
            "A timeshare property",
            "A camping tent"
          ],
          correctAnswer: 0,
          explanation: "Vacation rentals are private properties available for temporary stay."
        },
        {
          id: 14,
          question: "What does reliability mean in tourism services?",
          options: [
            "Services delivered as promised",
            "The most expensive service",
            "24-hour service",
            "International service"
          ],
          correctAnswer: 0,
          explanation: "Reliability means keeping promises and meeting expectations."
        },
        {
          id: 15,
          question: "What water transportation is popular for leisure?",
          options: [
            "Cruises",
            "Cargo ships",
            "Fishing boats",
            "Speed boats only"
          ],
          correctAnswer: 0,
          explanation: "Cruises are designed for vacation travel with entertainment."
        },
        {
          id: 16,
          question: "What is NOT a type of accommodation?",
          options: [
            "Grocery store",
            "Hotel",
            "Resort",
            "Hostel"
          ],
          correctAnswer: 0,
          explanation: "Grocery stores are retail, not accommodation."
        },
        {
          id: 17,
          question: "Why is friendliness important in tourism?",
          options: [
            "Creates welcoming atmosphere for guests",
            "Reduces costs",
            "Increases room size",
            "Shortens stays"
          ],
          correctAnswer: 0,
          explanation: "Friendly staff make visitors feel welcome and valued."
        },
        {
          id: 18,
          question: "What transportation connects islands?",
          options: [
            "Ferries and boats",
            "Only airplanes",
            "Trains",
            "Buses"
          ],
          correctAnswer: 0,
          explanation: "Water transportation is essential for island destinations."
        },
        {
          id: 19,
          question: "What should tourism services provide about local attractions?",
          options: [
            "Clear information",
            "Only prices",
            "Negative reviews",
            "Outdated details"
          ],
          correctAnswer: 0,
          explanation: "Accurate information helps visitors make good choices."
        },
        {
          id: 20,
          question: "What range do hotels typically offer?",
          options: [
            "From budget to luxury",
            "Only luxury options",
            "Only budget options",
            "Only mid-range"
          ],
          correctAnswer: 0,
          explanation: "Hotels serve different market segments with varied price points."
        }
      ]
    },

    // MODULE 3: CUSTOMER SERVICE IN TOURISM
    {
      id: 3,
      title: "Excellent Customer Service",
      content: `# Creating Great Experiences for Visitors

## The Importance of Customer Service
In tourism, customer service makes the difference between a good trip and a great one. Happy visitors return and recommend destinations to others.

## Key Customer Service Skills

**Communication Skills**
- Listen carefully to understand what visitors need
- Speak clearly and politely
- Use positive language
- Explain things patiently

**Problem-Solving Skills**
- Stay calm when issues arise
- Find solutions rather than excuses
- Know when to ask for help
- Follow up to ensure satisfaction

**Cultural Awareness**
- Respect different customs and traditions
- Learn basic greetings in common languages
- Understand different expectations
- Avoid stereotypes and assumptions

## Service Excellence Principles

**The 5-Star Service Approach**
1. **Greet warmly** - First impressions matter
2. **Listen actively** - Understand real needs
3. **Respond helpfully** - Provide useful assistance
4. **Exceed expectations** - Go the extra mile
5. **Thank sincerely** - End interactions positively

**Handling Difficult Situations**
- Stay calm and professional
- Listen without interrupting
- Apologize for any inconvenience
- Offer practical solutions
- Follow up to ensure resolution

## Creating Memorable Experiences
Tourism is about creating positive memories. Small touches make big differences:
- Remembering repeat guests' names
- Providing local recommendations
- Offering unexpected kindness
- Ensuring comfort and convenience

Great service turns visitors into ambassadors who share their positive experiences with others.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Why is customer service important in tourism?",
          options: [
            "Happy visitors return and recommend",
            "It reduces costs",
            "It's required by law",
            "It limits visitor numbers"
          ],
          correctAnswer: 0,
          explanation: "Excellent service encourages repeat visits and positive word-of-mouth."
        },
        {
          id: 2,
          question: "What is a key communication skill?",
          options: [
            "Listen carefully",
            "Talk continuously",
            "Use complex language",
            "Avoid eye contact"
          ],
          correctAnswer: 0,
          explanation: "Listening helps understand visitors' real needs."
        },
        {
          id: 3,
          question: "What should you do first in the 5-star service approach?",
          options: [
            "Greet warmly",
            "Offer discounts",
            "Check identification",
            "Ask for payment"
          ],
          correctAnswer: 0,
          explanation: "A warm greeting creates a positive first impression."
        },
        {
          id: 4,
          question: "How should you handle difficult situations?",
          options: [
            "Stay calm and professional",
            "Raise your voice",
            "Ignore the problem",
            "Blame the visitor"
          ],
          correctAnswer: 0,
          explanation: "Professional calmness helps resolve issues effectively."
        },
        {
          id: 5,
          question: "What does cultural awareness involve?",
          options: [
            "Respecting different customs",
            "Forcing local customs",
            "Ignoring differences",
            "Making assumptions"
          ],
          correctAnswer: 0,
          explanation: "Respecting diversity improves service for all visitors."
        },
        {
          id: 6,
          question: "What is problem-solving in customer service?",
          options: [
            "Finding solutions rather than excuses",
            "Avoiding problems",
            "Transferring all problems",
            "Delaying responses"
          ],
          correctAnswer: 0,
          explanation: "Effective problem-solving focuses on solutions."
        },
        {
          id: 7,
          question: "What should you do after helping a visitor?",
          options: [
            "Thank sincerely",
            "Ask for tips",
            "Quickly leave",
            "Give them work"
          ],
          correctAnswer: 0,
          explanation: "Sincere thanks complete service interactions positively."
        },
        {
          id: 8,
          question: "What creates memorable experiences?",
          options: [
            "Small thoughtful touches",
            "Only expensive gifts",
            "Complex procedures",
            "Formal language only"
          ],
          correctAnswer: 0,
          explanation: "Thoughtful gestures often matter more than grand gestures."
        },
        {
          id: 9,
          question: "What should you do when you don't know an answer?",
          options: [
            "Know when to ask for help",
            "Make up an answer",
            "Ignore the question",
            "Change the subject"
          ],
          correctAnswer: 0,
          explanation: "Asking for help ensures visitors get accurate information."
        },
        {
          id: 10,
          question: "What is exceeding expectations?",
          options: [
            "Going the extra mile",
            "Doing the minimum",
            "Meeting basic standards",
            "Following rules only"
          ],
          correctAnswer: 0,
          explanation: "Exceeding expectations creates exceptional experiences."
        },
        {
          id: 11,
          question: "Why should you learn basic greetings in other languages?",
          options: [
            "Shows respect for visitors",
            "It's required by law",
            "To show off",
            "To confuse visitors"
          ],
          correctAnswer: 0,
          explanation: "Simple greetings in a visitor's language show welcome and respect."
        },
        {
          id: 12,
          question: "What should you do when a visitor has a complaint?",
          options: [
            "Listen without interrupting",
            "Argue your point",
            "Tell them they're wrong",
            "Walk away"
          ],
          correctAnswer: 0,
          explanation: "Listening fully helps understand and address concerns."
        },
        {
          id: 13,
          question: "What turns visitors into ambassadors?",
          options: [
            "Great service experiences",
            "Cheap prices only",
            "Luxury accommodations",
            "Free gifts"
          ],
          correctAnswer: 0,
          explanation: "Positive experiences motivate people to share recommendations."
        },
        {
          id: 14,
          question: "What is using positive language?",
          options: [
            "Focusing on what you can do",
            "Saying no frequently",
            "Using technical terms",
            "Speaking quickly"
          ],
          correctAnswer: 0,
          explanation: "Positive language focuses on solutions and possibilities."
        },
        {
          id: 15,
          question: "What should you apologize for?",
          options: [
            "Any inconvenience experienced",
            "Everything that happens",
            "Nothing",
            "Only major errors"
          ],
          correctAnswer: 0,
          explanation: "Apologizing for inconvenience shows empathy and responsibility."
        },
        {
          id: 16,
          question: "What does following up ensure?",
          options: [
            "Satisfaction with solutions",
            "More complaints",
            "Higher costs",
            "Longer stays"
          ],
          correctAnswer: 0,
          explanation: "Follow-up confirms that issues were resolved satisfactorily."
        },
        {
          id: 17,
          question: "What should you avoid with cultural differences?",
          options: [
            "Stereotypes and assumptions",
            "Learning about cultures",
            "Being respectful",
            "Adapting service"
          ],
          correctAnswer: 0,
          explanation: "Avoiding stereotypes ensures fair treatment of all visitors."
        },
        {
          id: 18,
          question: "What is active listening?",
          options: [
            "Understanding real needs",
            "Hearing words only",
            "Planning your response",
            "Multitasking while listening"
          ],
          correctAnswer: 0,
          explanation: "Active listening involves full attention and understanding."
        },
        {
          id: 19,
          question: "What kind of experiences does tourism create?",
          options: [
            "Positive memories",
            "Only transportation",
            "Shopping opportunities",
            "Business meetings"
          ],
          correctAnswer: 0,
          explanation: "Tourism aims to create enjoyable, memorable experiences."
        },
        {
          id: 20,
          question: "What is providing local recommendations?",
          options: [
            "Sharing insider knowledge",
            "Only recommending expensive places",
            "Keeping information secret",
            "Directing everyone to same place"
          ],
          correctAnswer: 0,
          explanation: "Personalized recommendations enhance visitor experiences."
        }
      ]
    },

    // MODULE 4: DESTINATION MANAGEMENT
    {
      id: 4,
      title: "Managing Tourist Destinations",
      content: `# Creating and Maintaining Great Places to Visit

## What is Destination Management?
Destination management involves planning, developing, and maintaining places that attract visitors while ensuring positive experiences for both tourists and local communities.

## Key Elements of Successful Destinations

**Attractions**
- Natural features (beaches, mountains, forests)
- Cultural sites (museums, historical places, festivals)
- Entertainment (theme parks, shows, events)
- Activities (hiking, shopping, dining)

**Accessibility**
- Easy transportation to and within the destination
- Clear signage and information
- Facilities for different needs and abilities
- Multiple travel options available

**Amenities**
- Quality accommodation options
- Food and beverage services
- Shopping opportunities
- Public facilities (restrooms, information centers)

**Community Involvement**
- Local residents benefit from tourism
- Cultural preservation and respect
- Fair distribution of tourism benefits
- Local ownership and employment opportunities

## Sustainable Destination Practices

**Environmental Protection**
- Limit damage to natural areas
- Manage waste properly
- Conserve water and energy
- Protect wildlife habitats

**Seasonal Management**
- Spread visitors throughout the year
- Develop off-season attractions
- Manage peak season crowds
- Balance economic and environmental needs

**Carrying Capacity**
- Understand how many visitors a place can handle
- Prevent overcrowding
- Maintain quality experiences
- Protect infrastructure from overuse

Good destination management creates places people want to visit repeatedly while protecting what makes them special.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does destination management involve?",
          options: [
            "Planning, developing, and maintaining places",
            "Only building hotels",
            "Just advertising",
            "Only transportation"
          ],
          correctAnswer: 0,
          explanation: "It's comprehensive management of all destination aspects."
        },
        {
          id: 2,
          question: "What is a natural attraction?",
          options: [
            "Beaches, mountains, or forests",
            "Shopping malls",
            "Office buildings",
            "Factories"
          ],
          correctAnswer: 0,
          explanation: "Natural attractions are features created by nature."
        },
        {
          id: 3,
          question: "What does accessibility mean for destinations?",
          options: [
            "Easy transportation to and within",
            "Only for local residents",
            "High costs for access",
            "Limited entry points"
          ],
          correctAnswer: 0,
          explanation: "Accessibility means visitors can reach and move around easily."
        },
        {
          id: 4,
          question: "What is carrying capacity?",
          options: [
            "How many visitors a place can handle",
            "Number of hotels",
            "Amount of souvenirs",
            "Tourist spending capacity"
          ],
          correctAnswer: 0,
          explanation: "Carrying capacity prevents overcrowding and maintains quality."
        },
        {
          id: 5,
          question: "Why is community involvement important?",
          options: [
            "Local residents benefit from tourism",
            "Tourists take over communities",
            "Only businesses benefit",
            "It increases local taxes only"
          ],
          correctAnswer: 0,
          explanation: "Involving communities ensures tourism benefits are shared."
        },
        {
          id: 6,
          question: "What is a cultural attraction?",
          options: [
            "Museums, historical places, festivals",
            "Only natural parks",
            "Shopping centers",
            "Transport hubs"
          ],
          correctAnswer: 0,
          explanation: "Cultural attractions showcase human creativity and history."
        },
        {
          id: 7,
          question: "What does environmental protection involve?",
          options: [
            "Limiting damage to natural areas",
            "Building more facilities",
            "Increasing visitor numbers",
            "Reducing local access"
          ],
          correctAnswer: 0,
          explanation: "Protecting environments ensures destinations remain attractive."
        },
        {
          id: 8,
          question: "What are amenities?",
          options: [
            "Services like food and shopping",
            "Only natural features",
            "Government offices",
            "Industrial areas"
          ],
          correctAnswer: 0,
          explanation: "Amenities are services that support visitor experiences."
        },
        {
          id: 9,
          question: "Why manage seasonal tourism?",
          options: [
            "Spread visitors throughout the year",
            "Only focus on peak season",
            "Close in off-season",
            "Increase prices always"
          ],
          correctAnswer: 0,
          explanation: "Seasonal management creates more stable tourism economies."
        },
        {
          id: 10,
          question: "What prevents overcrowding?",
          options: [
            "Understanding carrying capacity",
            "Building more hotels",
            "Reducing prices",
            "Limiting marketing"
          ],
          correctAnswer: 0,
          explanation: "Managing within capacity limits maintains quality experiences."
        },
        {
          id: 11,
          question: "What is clear signage important for?",
          options: [
            "Helping visitors navigate",
            "Advertising only",
            "Increasing costs",
            "Limiting access"
          ],
          correctAnswer: 0,
          explanation: "Good signage helps visitors find their way independently."
        },
        {
          id: 12,
          question: "What does sustainable tourism protect?",
          options: [
            "What makes destinations special",
            "Only business profits",
            "Tourist numbers",
            "Hotel construction"
          ],
          correctAnswer: 0,
          explanation: "Sustainability protects the unique qualities that attract visitors."
        },
        {
          id: 13,
          question: "What are entertainment attractions?",
          options: [
            "Theme parks, shows, events",
            "Only natural parks",
            "Residential areas",
            "Industrial sites"
          ],
          correctAnswer: 0,
          explanation: "Entertainment provides fun and recreation for visitors."
        },
        {
          id: 14,
          question: "Why manage waste properly?",
          options: [
            "Protects environment and health",
            "Increases tourism",
            "Reduces costs only",
            "Creates more jobs"
          ],
          correctAnswer: 0,
          explanation: "Proper waste management keeps destinations clean and healthy."
        },
        {
          id: 15,
          question: "What does fair distribution of benefits mean?",
          options: [
            "Local communities share in tourism success",
            "Only hotel owners benefit",
            "Government takes all profits",
            "Tourists get everything free"
          ],
          correctAnswer: 0,
          explanation: "Fair distribution creates community support for tourism."
        },
        {
          id: 16,
          question: "What are activity attractions?",
          options: [
            "Hiking, shopping, dining",
            "Only sleeping",
            "Working",
            "Commuting"
          ],
          correctAnswer: 0,
          explanation: "Activities give visitors things to do and experience."
        },
        {
          id: 17,
          question: "Why conserve water and energy?",
          options: [
            "Sustainability and cost savings",
            "Increase tourist numbers",
            "Make places less accessible",
            "Reduce local employment"
          ],
          correctAnswer: 0,
          explanation: "Conservation protects resources and reduces operating costs."
        },
        {
          id: 18,
          question: "What is local ownership important?",
          options: [
            "Keeps tourism benefits in community",
            "Increases foreign control",
            "Reduces quality",
            "Limits innovation"
          ],
          correctAnswer: 0,
          explanation: "Local ownership ensures community investment in tourism success."
        },
        {
          id: 19,
          question: "What does peak season crowd management do?",
          options: [
            "Maintains quality during busy times",
            "Eliminates all visitors",
            "Increases all prices",
            "Closes attractions"
          ],
          correctAnswer: 0,
          explanation: "Crowd management prevents overwhelming popular destinations."
        },
        {
          id: 20,
          question: "What protects infrastructure from overuse?",
          options: [
            "Managing carrying capacity",
            "Building more constantly",
            "Ignoring maintenance",
            "Reducing quality standards"
          ],
          correctAnswer: 0,
          explanation: "Proper management extends the life of tourism infrastructure."
        }
      ]
    },

    // MODULE 5: CULTURAL AWARENESS
    {
      id: 5,
      title: "Understanding Cultural Differences",
      content: `# Respecting Diversity in Tourism

## Why Culture Matters in Tourism
Tourism brings together people from different backgrounds. Understanding and respecting cultural differences creates better experiences for everyone.

## Key Cultural Differences to Understand

**Communication Styles**
- Direct vs indirect communication
- Formal vs informal language
- Non-verbal cues and gestures
- Personal space preferences

**Social Customs**
- Greetings and introductions
- Dining etiquette and table manners
- Gift-giving traditions
- Dress codes and modesty

**Time Perception**
- Punctuality expectations
- Planning vs spontaneous approaches
- Business hours and siesta traditions
- Festival and holiday calendars

**Values and Beliefs**
- Religious practices and holy days
- Family and community importance
- Attitudes toward authority
- Concepts of hospitality

## Being a Culturally Sensitive Host

**Do's for Tourism Professionals**
- Learn basic greetings in visitors' languages
- Research major cultural norms of frequent visitors
- Ask politely when unsure about customs
- Adapt services to meet different needs
- Train staff in cultural awareness

**Don'ts to Avoid**
- Don't make assumptions based on appearance
- Don't force your customs on visitors
- Don't mock or criticize different practices
- Don't ignore religious or dietary needs
- Don't use stereotypes in marketing

## Cultural Exchange Benefits
When handled respectfully, cultural exchange:
- Broadens understanding between people
- Preserves and shares cultural heritage
- Creates unique travel experiences
- Builds international friendships
- Promotes peace through understanding

Respecting cultural differences makes tourism enriching for both visitors and hosts.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Why does culture matter in tourism?",
          options: [
            "Creates better experiences for everyone",
            "Only affects local residents",
            "Is irrelevant to tourism",
            "Makes travel more expensive"
          ],
          correctAnswer: 0,
          explanation: "Cultural understanding improves experiences for visitors and hosts."
        },
        {
          id: 2,
          question: "What are communication style differences?",
          options: [
            "Direct vs indirect communication",
            "Only language differences",
            "Just volume of speech",
            "Writing styles only"
          ],
          correctAnswer: 0,
          explanation: "Communication styles vary in directness and formality."
        },
        {
          id: 3,
          question: "What should tourism professionals learn?",
          options: [
            "Basic greetings in visitors' languages",
            "Every language completely",
            "Only local language",
            "No language skills needed"
          ],
          correctAnswer: 0,
          explanation: "Basic greetings show respect and welcome."
        },
        {
          id: 4,
          question: "What is a social custom?",
          options: [
            "Greetings and introductions",
            "Only business transactions",
            "Transportation methods",
            "Hotel check-in times"
          ],
          correctAnswer: 0,
          explanation: "Social customs guide interpersonal interactions."
        },
        {
          id: 5,
          question: "What should you avoid with cultural differences?",
          options: [
            "Making assumptions based on appearance",
            "Learning about cultures",
            "Being respectful",
            "Adapting services"
          ],
          correctAnswer: 0,
          explanation: "Assumptions can lead to misunderstandings and offense."
        },
        {
          id: 6,
          question: "What are non-verbal cues?",
          options: [
            "Gestures and body language",
            "Only spoken words",
            "Written messages",
            "Hotel signage"
          ],
          correctAnswer: 0,
          explanation: "Non-verbal communication varies across cultures."
        },
        {
          id: 7,
          question: "What is dining etiquette?",
          options: [
            "Table manners and eating customs",
            "Only food quality",
            "Restaurant prices",
            "Menu design"
          ],
          correctAnswer: 0,
          explanation: "Dining customs differ significantly between cultures."
        },
        {
          id: 8,
          question: "What does cultural exchange do?",
          options: [
            "Broadens understanding between people",
            "Creates conflict only",
            "Eliminates differences",
            "Makes everyone the same"
          ],
          correctAnswer: 0,
          explanation: "Exchange helps people appreciate diversity."
        },
        {
          id: 9,
          question: "What are time perception differences?",
          options: [
            "Punctuality expectations",
            "Only clock types",
            "Time zone differences",
            "Travel duration"
          ],
          correctAnswer: 0,
          explanation: "Different cultures value punctuality differently."
        },
        {
          id: 10,
          question: "What should you do when unsure about customs?",
          options: [
            "Ask politely",
            "Guess and proceed",
            "Ignore the situation",
            "Do what you prefer"
          ],
          correctAnswer: 0,
          explanation: "Polite inquiry shows respect and avoids mistakes."
        },
        {
          id: 11,
          question: "What are gift-giving traditions?",
          options: [
            "Customs around presenting gifts",
            "Only buying souvenirs",
            "Shopping hours",
            "Price negotiations"
          ],
          correctAnswer: 0,
          explanation: "Gift customs vary in timing, wrapping, and appropriateness."
        },
        {
          id: 12,
          question: "What benefits does cultural preservation bring?",
          options: [
            "Shares cultural heritage",
            "Eliminates traditions",
            "Modernizes everything",
            "Reduces tourism"
          ],
          correctAnswer: 0,
          explanation: "Preservation maintains unique cultural attractions."
        },
        {
          id: 13,
          question: "What is dress code awareness?",
          options: [
            "Understanding modesty expectations",
            "Only fashion trends",
            "Uniform requirements",
            "Laundry services"
          ],
          correctAnswer: 0,
          explanation: "Appropriate dress shows respect for local norms."
        },
        {
          id: 14,
          question: "What should staff be trained in?",
          options: [
            "Cultural awareness",
            "Only technical skills",
            "Sales techniques only",
            "Building maintenance"
          ],
          correctAnswer: 0,
          explanation: "Cultural training improves service for diverse visitors."
        },
        {
          id: 15,
          question: "What are religious considerations?",
          options: [
            "Practices and holy days",
            "Only building design",
            "Food prices",
            "Transport schedules"
          ],
          correctAnswer: 0,
          explanation: "Religious customs affect many aspects of travel."
        },
        {
          id: 16,
          question: "What promotes peace through tourism?",
          options: [
            "Understanding between people",
            "Only economic benefits",
            "Competition between destinations",
            "Standardized experiences"
          ],
          correctAnswer: 0,
          explanation: "Personal connections build international goodwill."
        },
        {
          id: 17,
          question: "What are festival calendars important for?",
          options: [
            "Planning around local holidays",
            "Only hotel pricing",
            "Transportation strikes",
            "Business meetings"
          ],
          correctAnswer: 0,
          explanation: "Festivals affect availability and experiences."
        },
        {
          id: 18,
          question: "What does adapting services mean?",
          options: [
            "Meeting different cultural needs",
            "Lowering all standards",
            "Ignoring local regulations",
            "Increasing all prices"
          ],
          correctAnswer: 0,
          explanation: "Adaptation shows responsiveness to visitor diversity."
        },
        {
          id: 19,
          question: "What are concepts of hospitality?",
          options: [
            "Different expectations of service",
            "Only hotel standards",
            "Restaurant ratings",
            "Tour guide licenses"
          ],
          correctAnswer: 0,
          explanation: "Hospitality expectations vary across cultures."
        },
        {
          id: 20,
          question: "What builds international friendships?",
          options: [
            "Respectful cultural exchange",
            "Only business transactions",
            "Competitive pricing",
            "Standardized services"
          ],
          correctAnswer: 0,
          explanation: "Positive personal interactions create lasting connections."
        }
      ]
    },

    // MODULE 6: SUSTAINABLE TOURISM
    {
      id: 6,
      title: "Sustainable Tourism Practices",
      content: `# Tourism That Lasts

## What is Sustainable Tourism?
Sustainable tourism meets the needs of present tourists and host communities while protecting and enhancing opportunities for the future.

## Three Pillars of Sustainability

**Environmental Sustainability**
- Minimize negative impacts on nature
- Conserve biodiversity and ecosystems
- Reduce pollution and waste
- Use resources efficiently

**Social Sustainability**
- Respect local cultures and traditions
- Involve communities in decisions
- Provide fair employment opportunities
- Maintain quality of life for residents

**Economic Sustainability**
- Generate stable income for communities
- Support local businesses and products
- Create year-round employment
- Ensure fair distribution of benefits

## Practical Sustainable Practices

**For Tourism Businesses**
- Reduce energy and water consumption
- Minimize single-use plastics
- Source locally produced goods
- Train staff in sustainability
- Support conservation projects

**For Tourists**
- Choose eco-friendly accommodations
- Use public transportation when possible
- Respect wildlife and natural areas
- Buy local products and crafts
- Learn about local cultures respectfully

**For Destinations**
- Set carrying capacity limits
- Invest in sustainable infrastructure
- Educate visitors about responsible behavior
- Monitor environmental impacts
- Plan for long-term preservation

## Benefits of Sustainable Tourism
- Preserves natural and cultural attractions
- Creates more stable local economies
- Improves community well-being
- Enhances visitor experiences
- Ensures tourism can continue for future generations

Sustainable tourism is not just good practice—it's essential for the future of travel and the places people love to visit.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does sustainable tourism do?",
          options: [
            "Meets present needs while protecting future opportunities",
            "Only focuses on profits today",
            "Ignores environmental concerns",
            "Limits tourism growth completely"
          ],
          correctAnswer: 0,
          explanation: "Sustainability balances present benefits with future preservation."
        },
        {
          id: 2,
          question: "What are the three pillars of sustainability?",
          options: [
            "Environmental, Social, Economic",
            "Hotels, Transport, Food",
            "Summer, Winter, Spring",
            "Local, National, International"
          ],
          correctAnswer: 0,
          explanation: "These three aspects must all be addressed for true sustainability."
        },
        {
          id: 3,
          question: "What does environmental sustainability involve?",
          options: [
            "Minimizing negative impacts on nature",
            "Only building more facilities",
            "Increasing tourist numbers",
            "Reducing local access"
          ],
          correctAnswer: 0,
          explanation: "Environmental protection preserves natural attractions."
        },
        {
          id: 4,
          question: "What should tourism businesses reduce?",
          options: [
            "Energy and water consumption",
            "Only employee numbers",
            "Visitor satisfaction",
            "Local partnerships"
          ],
          correctAnswer: 0,
          explanation: "Resource conservation reduces costs and environmental impact."
        },
        {
          id: 5,
          question: "What is social sustainability?",
          options: [
            "Respecting local cultures and traditions",
            "Only tourist enjoyment",
            "Business profits",
            "Government control"
          ],
          correctAnswer: 0,
          explanation: "Social sustainability considers community well-being."
        },
        {
          id: 6,
          question: "What should tourists choose?",
          options: [
            "Eco-friendly accommodations",
            "Only the cheapest options",
            "Largest hotels always",
            "International chains only"
          ],
          correctAnswer: 0,
          explanation: "Eco-friendly choices support sustainable practices."
        },
        {
          id: 7,
          question: "What does economic sustainability create?",
          options: [
            "Stable income for communities",
            "Only seasonal work",
            "Foreign ownership",
            "Temporary benefits"
          ],
          correctAnswer: 0,
          explanation: "Economic stability supports long-term community development."
        },
        {
          id: 8,
          question: "What should businesses minimize?",
          options: [
            "Single-use plastics",
            "Customer service",
            "Local hiring",
            "Quality standards"
          ],
          correctAnswer: 0,
          explanation: "Reducing plastic waste protects environments."
        },
        {
          id: 9,
          question: "What is biodiversity conservation?",
          options: [
            "Protecting variety of plants and animals",
            "Only planting trees",
            "Building zoos",
            "Hunting management"
          ],
          correctAnswer: 0,
          explanation: "Biodiversity makes natural areas attractive and healthy."
        },
        {
          id: 10,
          question: "What should tourists use when possible?",
          options: [
            "Public transportation",
            "Only private cars",
            "Air travel always",
            "Expensive taxis"
          ],
          correctAnswer: 0,
          explanation: "Public transport reduces traffic and pollution."
        },
        {
          id: 11,
          question: "What involves communities in decisions?",
          options: [
            "Social sustainability practices",
            "Only government control",
            "Foreign investors",
            "Tour operators only"
          ],
          correctAnswer: 0,
          explanation: "Community involvement ensures local needs are met."
        },
        {
          id: 12,
          question: "What should businesses source locally?",
          options: [
            "Goods and products",
            "Only managers",
            "Marketing ideas",
            "Construction materials only"
          ],
          correctAnswer: 0,
          explanation: "Local sourcing supports community economies."
        },
        {
          id: 13,
          question: "What preserves natural attractions?",
          options: [
            "Environmental sustainability",
            "Only building more",
            "Increasing visitors",
            "Changing landscapes"
          ],
          correctAnswer: 0,
          explanation: "Preservation ensures attractions remain for future visitors."
        },
        {
          id: 14,
          question: "What should tourists respect?",
          options: [
            "Wildlife and natural areas",
            "Only hotel rules",
            "Their schedule only",
            "Budget constraints"
          ],
          correctAnswer: 0,
          explanation: "Respecting nature protects destinations for all."
        },
        {
          id: 15,
          question: "What creates year-round employment?",
          options: [
            "Economic sustainability",
            "Only peak season hiring",
            "Temporary contracts",
            "Foreign workers only"
          ],
          correctAnswer: 0,
          explanation: "Year-round work provides stable community income."
        },
        {
          id: 16,
          question: "What should staff be trained in?",
          options: [
            "Sustainability practices",
            "Only sales techniques",
            "Cost cutting",
            "Competitive strategies"
          ],
          correctAnswer: 0,
          explanation: "Sustainability training ensures consistent implementation."
        },
        {
          id: 17,
          question: "What do local products support?",
          options: [
            "Community economies",
            "Only large corporations",
            "Foreign imports",
            "Online retailers"
          ],
          correctAnswer: 0,
          explanation: "Buying local keeps tourism benefits in the community."
        },
        {
          id: 18,
          question: "What ensures fair benefit distribution?",
          options: [
            "Economic sustainability",
            "Only profit maximization",
            "Owner control",
            "Government taxes"
          ],
          correctAnswer: 0,
          explanation: "Fair distribution builds community support for tourism."
        },
        {
          id: 19,
          question: "What should destinations set?",
          options: [
            "Carrying capacity limits",
            "Only price increases",
            "Visitor quotas randomly",
            "Unlimited growth targets"
          ],
          correctAnswer: 0,
          explanation: "Capacity limits prevent overcrowding and damage."
        },
        {
          id: 20,
          question: "What enhances visitor experiences?",
          options: [
            "Sustainable tourism practices",
            "Only lower prices",
            "More crowds",
            "Standardized experiences"
          ],
          correctAnswer: 0,
          explanation: "Well-preserved destinations offer better experiences."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: {
    id: "tourism-certificate-exam",
    title: "Tourism Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. You need to answer 40 questions to complete your certificate.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        moduleId: 1,
        question: "What is the main activity of tourism?",
        options: [
          "People traveling to places outside their usual environment",
          "Working in an office",
          "Studying at home",
          "Shopping in local stores"
        ],
        correctAnswer: 0,
        explanation: "Tourism involves travel outside one's normal environment."
      },
      {
        id: 2,
        moduleId: 1,
        question: "Which is NOT one of the three main types of tourism?",
        options: [
          "Leisure Tourism",
          "Business Tourism",
          "Shopping Tourism",
          "Special Interest Tourism"
        ],
        correctAnswer: 2,
        explanation: "Shopping tourism is not a main category."
      },
      {
        id: 3,
        moduleId: 1,
        question: "What does hospitality mean in tourism?",
        options: [
          "The friendly reception and treatment of guests",
          "A type of hospital for tourists",
          "Building hotels only",
          "Cooking food for travelers"
        ],
        correctAnswer: 0,
        explanation: "Hospitality is about welcoming and caring for visitors."
      },
      {
        id: 4,
        moduleId: 1,
        question: "Who is a tourist?",
        options: [
          "A person traveling for pleasure",
          "Someone who never travels",
          "A local resident",
          "A transportation worker"
        ],
        correctAnswer: 0,
        explanation: "Tourists travel specifically for leisure purposes."
      },
      {
        id: 5,
        moduleId: 1,
        question: "What benefit does tourism bring to local communities?",
        options: [
          "Creates employment opportunities",
          "Reduces local population",
          "Closes local businesses",
          "Limits cultural activities"
        ],
        correctAnswer: 0,
        explanation: "Tourism creates diverse job opportunities."
      },
      {
        id: 6,
        moduleId: 1,
        question: "What is a destination in tourism?",
        options: [
          "A place people travel to visit",
          "The starting point of a journey",
          "A type of transportation",
          "A travel document"
        ],
        correctAnswer: 0,
        explanation: "Destinations are the places tourists go to visit."
      },

      // Questions from Module 2
      {
        id: 7,
        moduleId: 2,
        question: "What is the fastest transportation for long distances?",
        options: [
          "Air travel",
          "Car travel",
          "Train travel",
          "Bus travel"
        ],
        correctAnswer: 0,
        explanation: "Airplanes cover long distances fastest."
      },
      {
        id: 8,
        moduleId: 2,
        question: "What type of accommodation offers all-inclusive services?",
        options: [
          "Resorts",
          "Hostels",
          "Camping sites",
          "University dorms"
        ],
        correctAnswer: 0,
        explanation: "Resorts often include everything in one price."
      },
      {
        id: 9,
        moduleId: 2,
        question: "Who creates package tours with multiple services?",
        options: [
          "Tour operators",
          "Hotel managers",
          "Airline pilots",
          "Restaurant chefs"
        ],
        correctAnswer: 0,
        explanation: "Tour operators design complete travel packages."
      },
      {
        id: 10,
        moduleId: 2,
        question: "What is a key service standard in tourism?",
        options: [
          "Cleanliness",
          "Complexity",
          "Expensiveness",
          "Exclusivity"
        ],
        correctAnswer: 0,
        explanation: "Clean facilities are essential for all tourism services."
      },
      {
        id: 11,
        moduleId: 2,
        question: "What type of accommodation is most budget-friendly?",
        options: [
          "Hostels",
          "Luxury hotels",
          "Private villas",
          "Five-star resorts"
        ],
        correctAnswer: 0,
        explanation: "Hostels provide affordable lodging options."
      },
      {
        id: 12,
        moduleId: 2,
        question: "What does a travel agency do?",
        options: [
          "Arranges trips, flights, and hotels",
          "Only books flights",
          "Manages restaurants",
          "Builds hotels"
        ],
        correctAnswer: 0,
        explanation: "Travel agencies coordinate complete travel plans."
      },

      // Questions from Module 3
      {
        id: 13,
        moduleId: 3,
        question: "Why is customer service important in tourism?",
        options: [
          "Happy visitors return and recommend",
          "It reduces costs",
          "It's required by law",
          "It limits visitor numbers"
        ],
        correctAnswer: 0,
        explanation: "Good service creates repeat business and referrals."
      },
      {
        id: 14,
        moduleId: 3,
        question: "What is a key communication skill?",
        options: [
          "Listen carefully",
          "Talk continuously",
          "Use complex language",
          "Avoid eye contact"
        ],
        correctAnswer: 0,
        explanation: "Listening helps understand visitor needs."
      },
      {
        id: 15,
        moduleId: 3,
        question: "What should you do first in the 5-star service approach?",
        options: [
          "Greet warmly",
          "Offer discounts",
          "Check identification",
          "Ask for payment"
        ],
        correctAnswer: 0,
        explanation: "A warm greeting sets a positive tone."
      },
      {
        id: 16,
        moduleId: 3,
        question: "How should you handle difficult situations?",
        options: [
          "Stay calm and professional",
          "Raise your voice",
          "Ignore the problem",
          "Blame the visitor"
        ],
        correctAnswer: 0,
        explanation: "Professional calmness resolves issues effectively."
      },
      {
        id: 17,
        moduleId: 3,
        question: "What does cultural awareness involve?",
        options: [
          "Respecting different customs",
          "Forcing local customs",
          "Ignoring differences",
          "Making assumptions"
        ],
        correctAnswer: 0,
        explanation: "Cultural respect improves service for all."
      },
      {
        id: 18,
        moduleId: 3,
        question: "What is problem-solving in customer service?",
        options: [
          "Finding solutions rather than excuses",
          "Avoiding problems",
          "Transferring all problems",
          "Delaying responses"
        ],
        correctAnswer: 0,
        explanation: "Solution-focused approaches satisfy visitors."
      },

      // Questions from Module 4
      {
        id: 19,
        moduleId: 4,
        question: "What does destination management involve?",
        options: [
          "Planning, developing, and maintaining places",
          "Only building hotels",
          "Just advertising",
          "Only transportation"
        ],
        correctAnswer: 0,
        explanation: "Comprehensive management of all destination aspects."
      },
      {
        id: 20,
        moduleId: 4,
        question: "What is a natural attraction?",
        options: [
          "Beaches, mountains, or forests",
          "Shopping malls",
          "Office buildings",
          "Factories"
        ],
        correctAnswer: 0,
        explanation: "Natural features created by nature."
      },
      {
        id: 21,
        moduleId: 4,
        question: "What does accessibility mean for destinations?",
        options: [
          "Easy transportation to and within",
          "Only for local residents",
          "High costs for access",
          "Limited entry points"
        ],
        correctAnswer: 0,
        explanation: "Accessibility helps visitors reach and enjoy destinations."
      },
      {
        id: 22,
        moduleId: 4,
        question: "What is carrying capacity?",
        options: [
          "How many visitors a place can handle",
          "Number of hotels",
          "Amount of souvenirs",
          "Tourist spending capacity"
        ],
        correctAnswer: 0,
        explanation: "Capacity management prevents overcrowding."
      },
      {
        id: 23,
        moduleId: 4,
        question: "Why is community involvement important?",
        options: [
          "Local residents benefit from tourism",
          "Tourists take over communities",
          "Only businesses benefit",
          "It increases local taxes only"
        ],
        correctAnswer: 0,
        explanation: "Community benefits create local support for tourism."
      },
      {
        id: 24,
        moduleId: 4,
        question: "What is a cultural attraction?",
        options: [
          "Museums, historical places, festivals",
          "Only natural parks",
          "Shopping centers",
          "Transport hubs"
        ],
        correctAnswer: 0,
        explanation: "Cultural attractions showcase human heritage."
      },

      // Questions from Module 5
      {
        id: 25,
        moduleId: 5,
        question: "Why does culture matter in tourism?",
        options: [
          "Creates better experiences for everyone",
          "Only affects local residents",
          "Is irrelevant to tourism",
          "Makes travel more expensive"
        ],
        correctAnswer: 0,
        explanation: "Cultural understanding enhances all tourism experiences."
      },
      {
        id: 26,
        moduleId: 5,
        question: "What are communication style differences?",
        options: [
          "Direct vs indirect communication",
          "Only language differences",
          "Just volume of speech",
          "Writing styles only"
        ],
        correctAnswer: 0,
        explanation: "Communication varies in directness across cultures."
      },
      {
        id: 27,
        moduleId: 5,
        question: "What should tourism professionals learn?",
        options: [
          "Basic greetings in visitors' languages",
          "Every language completely",
          "Only local language",
          "No language skills needed"
        ],
        correctAnswer: 0,
        explanation: "Basic greetings show respect and welcome."
      },
      {
        id: 28,
        moduleId: 5,
        question: "What is a social custom?",
        options: [
          "Greetings and introductions",
          "Only business transactions",
          "Transportation methods",
          "Hotel check-in times"
        ],
        correctAnswer: 0,
        explanation: "Social customs guide interpersonal interactions."
      },
      {
        id: 29,
        moduleId: 5,
        question: "What should you avoid with cultural differences?",
        options: [
          "Making assumptions based on appearance",
          "Learning about cultures",
          "Being respectful",
          "Adapting services"
        ],
        correctAnswer: 0,
        explanation: "Assumptions can lead to misunderstandings."
      },
      {
        id: 30,
        moduleId: 5,
        question: "What are non-verbal cues?",
        options: [
          "Gestures and body language",
          "Only spoken words",
          "Written messages",
          "Hotel signage"
        ],
        correctAnswer: 0,
        explanation: "Non-verbal communication varies culturally."
      },

      // Questions from Module 6
      {
        id: 31,
        moduleId: 6,
        question: "What does sustainable tourism do?",
        options: [
          "Meets present needs while protecting future opportunities",
          "Only focuses on profits today",
          "Ignores environmental concerns",
          "Limits tourism growth completely"
        ],
        correctAnswer: 0,
        explanation: "Sustainability balances present and future needs."
      },
      {
        id: 32,
        moduleId: 6,
        question: "What are the three pillars of sustainability?",
        options: [
          "Environmental, Social, Economic",
          "Hotels, Transport, Food",
          "Summer, Winter, Spring",
          "Local, National, International"
        ],
        correctAnswer: 0,
        explanation: "These three aspects must all be addressed."
      },
      {
        id: 33,
        moduleId: 6,
        question: "What does environmental sustainability involve?",
        options: [
          "Minimizing negative impacts on nature",
          "Only building more facilities",
          "Increasing tourist numbers",
          "Reducing local access"
        ],
        correctAnswer: 0,
        explanation: "Environmental protection preserves attractions."
      },
      {
        id: 34,
        moduleId: 6,
        question: "What should tourism businesses reduce?",
        options: [
          "Energy and water consumption",
          "Only employee numbers",
          "Visitor satisfaction",
          "Local partnerships"
        ],
        correctAnswer: 0,
        explanation: "Resource conservation is environmentally responsible."
      },
      {
        id: 35,
        moduleId: 6,
        question: "What is social sustainability?",
        options: [
          "Respecting local cultures and traditions",
          "Only tourist enjoyment",
          "Business profits",
          "Government control"
        ],
        correctAnswer: 0,
        explanation: "Social sustainability considers community well-being."
      },
      {
        id: 36,
        moduleId: 6,
        question: "What should tourists choose?",
        options: [
          "Eco-friendly accommodations",
          "Only the cheapest options",
          "Largest hotels always",
          "International chains only"
        ],
        correctAnswer: 0,
        explanation: "Eco-friendly choices support sustainability."
      },
      {
        id: 37,
        moduleId: 6,
        question: "What does economic sustainability create?",
        options: [
          "Stable income for communities",
          "Only seasonal work",
          "Foreign ownership",
          "Temporary benefits"
        ],
        correctAnswer: 0,
        explanation: "Economic stability supports communities long-term."
      },
      {
        id: 38,
        moduleId: 6,
        question: "What should businesses minimize?",
        options: [
          "Single-use plastics",
          "Customer service",
          "Local hiring",
          "Quality standards"
        ],
        correctAnswer: 0,
        explanation: "Reducing plastic protects environments."
      },
      {
        id: 39,
        moduleId: 6,
        question: "What is biodiversity conservation?",
        options: [
          "Protecting variety of plants and animals",
          "Only planting trees",
          "Building zoos",
          "Hunting management"
        ],
        correctAnswer: 0,
        explanation: "Biodiversity makes natural areas healthy and attractive."
      },
      {
        id: 40,
        moduleId: 6,
        question: "What should tourists use when possible?",
        options: [
          "Public transportation",
          "Only private cars",
          "Air travel always",
          "Expensive taxis"
        ],
        correctAnswer: 0,
        explanation: "Public transport reduces environmental impact."
      }
    ]
  },

  // 4. COURSE COMPLETION CERTIFICATE DATA
  certificate: {
    title: "Tourism Certificate of Completion",
    issuingOrganization: "Edusanna Academy",
    description: "This certifies successful completion of the Tourism Certificate course, demonstrating foundational knowledge in tourism principles, customer service, destination management, cultural awareness, and sustainable practices.",
    competencies: [
      "Understanding tourism types and industry basics",
      "Knowledge of travel services and accommodation",
      "Customer service excellence skills",
      "Destination management principles",
      "Cultural awareness and sensitivity",
      "Sustainable tourism practices"
    ],
    issueDate: new Date().toISOString().split('T')[0]
  }
};

export default tourismCertificateCourse;
