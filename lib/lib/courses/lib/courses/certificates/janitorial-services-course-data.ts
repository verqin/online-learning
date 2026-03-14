// Janitorial Services (Certificate) - Complete Course Data
export const janitorialServicesCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "janitorial-services-certificate",
  title: "Janitorial Services (Certificate)",
  description: "Learn essential cleaning techniques, safety protocols, and facility maintenance skills for professional janitorial work. Master the fundamentals of maintaining clean, safe, and healthy environments.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🧹",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Introduction to Professional Cleaning",
      completed: false,
      content: `# Module 1: Introduction to Professional Cleaning

## Welcome to Professional Janitorial Services
This module introduces you to the world of professional cleaning. You will learn what makes janitorial work important and how it contributes to healthy environments.

### The Role of a Professional Cleaner
Professional cleaners perform essential services that maintain clean, safe, and healthy spaces. Every cleaner has three primary responsibilities: maintaining cleanliness, ensuring safety, and using proper techniques. These duties help prevent illness and create pleasant environments for everyone.

Cleaners work with various tools including mops, brooms, vacuum cleaners, and cleaning carts. Each tool serves a specific purpose in the cleaning process. The cleaning cart is especially important as it organizes all supplies and equipment for efficient work.

### Understanding Cleaning Standards
Professional cleaning follows specific standards to ensure quality results. There are four key cleaning standards: visual cleanliness, sanitary conditions, odor control, and surface protection. Visual cleanliness means surfaces look clean to the eye. Sanitary conditions mean germs and bacteria are removed. Odor control ensures spaces smell fresh. Surface protection prevents damage during cleaning.

Cleaning frequency depends on space usage. High-traffic areas require daily cleaning, while low-use areas may need weekly attention. Restrooms always need daily cleaning due to health considerations.

### Safety First in Cleaning
Safety is the most important aspect of professional cleaning. Every cleaner must follow safety protocols to prevent accidents. Proper footwear prevents slips, gloves protect hands from chemicals, and masks prevent inhalation of dust or fumes.

Chemical safety involves three rules: always read labels, never mix chemicals, and store properly. Reading labels ensures you understand proper usage and dangers. Mixing chemicals can create dangerous gases. Proper storage prevents accidents and chemical degradation.

Emergency procedures include knowing exit routes, first aid kit locations, and reporting procedures for accidents or spills. Every cleaner should be prepared for unexpected situations.

### Equipment Basics
Basic cleaning equipment includes manual tools and machines. Manual tools are brooms, mops, dustpans, and scrub brushes. Machines include vacuum cleaners, floor buffers, and carpet extractors.

Equipment maintenance involves regular cleaning, proper storage, and timely repairs. Cleaning equipment after use prevents cross-contamination. Proper storage extends equipment life. Reporting needed repairs prevents accidents and maintains efficiency.

Supply management means having enough cleaning products, trash bags, and paper products. Running out of supplies disrupts cleaning schedules and affects service quality.`,
      
      quiz: [
        {
          id: 1,
          question: "What are the three primary responsibilities of a professional cleaner?",
          options: [
            "Cleaning, organizing, and decorating",
            "Maintaining cleanliness, ensuring safety, and using proper techniques",
            "Scheduling, inventory, and customer service",
            "Sweeping, mopping, and vacuuming"
          ],
          correctAnswer: 1,
          explanation: "Professional cleaners must maintain cleanliness for health, ensure safety to prevent accidents, and use proper techniques for effective results."
        },
        {
          id: 2,
          question: "How many key cleaning standards are mentioned in the module?",
          options: [
            "Two standards",
            "Three standards",
            "Four standards",
            "Five standards"
          ],
          correctAnswer: 2,
          explanation: "The four key cleaning standards are visual cleanliness, sanitary conditions, odor control, and surface protection."
        },
        {
          id: 3,
          question: "What should a cleaner always do with chemicals according to safety rules?",
          options: [
            "Mix them for better cleaning power",
            "Store them in unlocked cabinets",
            "Read labels before use",
            "Use without protective gear"
          ],
          correctAnswer: 2,
          explanation: "Always reading labels ensures understanding of proper usage, dangers, and first aid measures for chemicals."
        },
        {
          id: 4,
          question: "Which areas typically require daily cleaning?",
          options: [
            "Storage rooms only",
            "Low-traffic corridors",
            "Restrooms and high-traffic areas",
            "Executive offices only"
          ],
          correctAnswer: 2,
          explanation: "Restrooms require daily cleaning for health reasons, and high-traffic areas need daily attention to maintain cleanliness."
        },
        {
          id: 5,
          question: "What is the purpose of a cleaning cart?",
          options: [
            "To transport personal items",
            "To organize all supplies and equipment",
            "To serve as a mobile workstation",
            "Both organizing supplies and serving as mobile workstation"
          ],
          correctAnswer: 3,
          explanation: "The cleaning cart organizes supplies for efficiency and serves as a mobile workstation during cleaning tasks."
        },
        {
          id: 6,
          question: "What does visual cleanliness mean?",
          options: [
            "Surfaces are completely sterile",
            "Spaces smell completely fresh",
            "Surfaces look clean to the eye",
            "All germs are eliminated"
          ],
          correctAnswer: 2,
          explanation: "Visual cleanliness means surfaces appear clean and free of visible dirt, dust, or stains."
        },
        {
          id: 7,
          question: "Why should chemicals never be mixed?",
          options: [
            "It reduces cleaning effectiveness",
            "It creates dangerous gases",
            "It wastes money",
            "It changes colors"
          ],
          correctAnswer: 1,
          explanation: "Mixing certain chemicals can create dangerous gases that are harmful to breathe."
        },
        {
          id: 8,
          question: "What type of equipment maintenance extends equipment life?",
          options: [
            "Using equipment until it breaks",
            "Proper storage after use",
            "Ignoring small issues",
            "Using wrong attachments"
          ],
          correctAnswer: 1,
          explanation: "Proper storage protects equipment from damage and extends its usable life."
        },
        {
          id: 9,
          question: "What are the two main categories of cleaning equipment?",
          options: [
            "New and old equipment",
            "Expensive and cheap equipment",
            "Manual tools and machines",
            "Wet and dry equipment"
          ],
          correctAnswer: 2,
          explanation: "Cleaning equipment divides into manual tools (brooms, mops) and machines (vacuums, buffers)."
        },
        {
          id: 10,
          question: "What disrupts cleaning schedules and affects service quality?",
          options: [
            "Taking breaks",
            "Running out of supplies",
            "Cleaning too quickly",
            "Working alone"
          ],
          correctAnswer: 1,
          explanation: "Running out of cleaning supplies prevents completion of tasks and affects overall service quality."
        },
        {
          id: 11,
          question: "What protective equipment prevents inhalation of dust?",
          options: [
            "Gloves only",
            "Masks or respirators",
            "Safety glasses",
            "Aprons"
          ],
          correctAnswer: 1,
          explanation: "Masks or respirators protect cleaners from inhaling dust, fumes, or other airborne particles."
        },
        {
          id: 12,
          question: "What is the most important aspect of professional cleaning?",
          options: [
            "Speed of cleaning",
            "Cost of supplies",
            "Safety protocols",
            "Customer compliments"
          ],
          correctAnswer: 2,
          explanation: "Safety is always the most important aspect to prevent accidents and injuries."
        },
        {
          id: 13,
          question: "What does supply management involve?",
          options: [
            "Only ordering paper products",
            "Having enough cleaning products and supplies",
            "Using whatever is available",
            "Borrowing from other cleaners"
          ],
          correctAnswer: 1,
          explanation: "Supply management ensures sufficient cleaning products, trash bags, and paper products are available."
        },
        {
          id: 14,
          question: "What should every cleaner know for emergency situations?",
          options: [
            "Only first aid procedures",
            "Exit routes and reporting procedures",
            "Only chemical spill procedures",
            "Only fire extinguisher locations"
          ],
          correctAnswer: 1,
          explanation: "Cleaners should know exit routes, first aid kit locations, and procedures for reporting accidents or spills."
        },
        {
          id: 15,
          question: "What does sanitary conditions mean in cleaning standards?",
          options: [
            "Surfaces look shiny",
            "Germs and bacteria are removed",
            "Floors are completely dry",
            "Windows are streak-free"
          ],
          correctAnswer: 1,
          explanation: "Sanitary conditions mean reducing or eliminating germs and bacteria that can cause illness."
        },
        {
          id: 16,
          question: "What prevents cross-contamination of equipment?",
          options: [
            "Using equipment for multiple areas",
            "Cleaning equipment after use",
            "Storing equipment dirty",
            "Sharing equipment between cleaners"
          ],
          correctAnswer: 1,
          explanation: "Cleaning equipment after use prevents spreading dirt or germs from one area to another."
        },
        {
          id: 17,
          question: "What determines cleaning frequency for different areas?",
          options: [
            "The color of the floor",
            "The space usage and traffic",
            "The time of day",
            "The weather outside"
          ],
          correctAnswer: 1,
          explanation: "Space usage and traffic levels determine how often an area needs cleaning."
        },
        {
          id: 18,
          question: "What are examples of manual cleaning tools?",
          options: [
            "Vacuum cleaners and buffers",
            "Brooms, mops, and scrub brushes",
            "Only power washers",
            "Only floor machines"
          ],
          correctAnswer: 1,
          explanation: "Manual tools include brooms, mops, dustpans, and scrub brushes that don't require power."
        },
        {
          id: 19,
          question: "What does proper footwear prevent?",
          options: [
            "Only cold feet",
            "Slips and falls",
            "Only tired feet",
            "Only wet feet"
          ],
          correctAnswer: 1,
          explanation: "Proper non-slip footwear prevents slips and falls on wet or polished surfaces."
        },
        {
          id: 20,
          question: "What is included in emergency procedures knowledge?",
          options: [
            "Only knowing where exits are",
            "Exit routes, first aid, and reporting procedures",
            "Only knowing fire extinguisher use",
            "Only chemical spill cleanup"
          ],
          correctAnswer: 1,
          explanation: "Complete emergency knowledge includes exit routes, first aid locations, and proper reporting procedures."
        }
      ]
    },
    {
      id: 2,
      title: "Cleaning Chemicals and Solutions",
      completed: false,
      content: `# Module 2: Cleaning Chemicals and Solutions

## Understanding Cleaning Products
This module teaches you about different cleaning chemicals and how to use them safely and effectively. You will learn to choose the right product for each cleaning task.

### Types of Cleaning Chemicals
Cleaning chemicals fall into four main categories: disinfectants, degreasers, glass cleaners, and floor cleaners. Each category serves specific purposes and has different safety requirements.

Disinfectants kill germs and bacteria on surfaces. They require proper dilution and dwell time (the time the chemical must stay wet on the surface). Common dwell times range from 30 seconds to 10 minutes depending on the product.

Degreasers break down oil, grease, and grime. They work well in kitchens, garages, and industrial areas. Always use degreasers in well-ventilated areas because fumes can be strong.

### Proper Dilution and Mixing
Correct dilution ensures effectiveness and safety. Three problems occur with wrong dilution: wasted money, ineffective cleaning, and safety hazards. Too concentrated wastes product and can damage surfaces. Too diluted doesn't clean properly.

Use measuring cups or pumps for accurate dilution. Never guess amounts. Follow manufacturer instructions exactly. Label all diluted solutions with contents and date. This prevents confusion and ensures fresh solutions.

Mixing procedures involve adding chemicals to water, never water to chemicals. This prevents splashing and dangerous reactions. Always add the chemical to a partially filled container, then add remaining water.

### Chemical Safety and Storage
Chemical safety involves proper handling, storage, and disposal. Always wear appropriate personal protective equipment (PPE) when handling chemicals. Basic PPE includes gloves, goggles, and sometimes masks or aprons.

Storage requirements include three rules: keep in original containers, store in cool dry places, and separate incompatible chemicals. Never transfer chemicals to food containers. This prevents accidental ingestion.

Disposal must follow local regulations. Never pour chemicals down drains unless approved. Some chemicals require special disposal procedures. Always check safety data sheets for proper disposal methods.

### Reading Labels and Safety Data Sheets
Every chemical container has important information on its label. Labels show product name, manufacturer, hazards, first aid, and instructions. Understanding symbols like flame (flammable), skull (poison), and corrosion (caustic) is essential.

Safety Data Sheets (SDS) provide detailed information about chemicals. SDS have sixteen sections covering identification, hazards, composition, first aid, firefighting, accidental release, handling, storage, exposure controls, physical properties, stability, toxicology, ecological, disposal, transport, and regulatory information.

Cleaners should know how to find and read SDS for all chemicals they use. SDS are usually kept in a binder or accessible digital format in the workplace.

### Environmental Considerations
Green cleaning products are becoming more popular. These products have lower environmental impact and often fewer health risks. Look for certifications like Green Seal or EcoLogo when choosing environmentally friendly products.

Water conservation matters in cleaning. Techniques include using spray bottles instead of buckets, turning off water when not in use, and using microfiber cloths that require less water. Every gallon saved helps the environment and reduces costs.

Proper waste management includes recycling containers when empty and disposing of rags properly. Some cleaning rags can be laundered and reused, reducing waste.`,
      
      quiz: [
        {
          id: 1,
          question: "What are the four main categories of cleaning chemicals?",
          options: [
            "Soaps, detergents, bleaches, acids",
            "Disinfectants, degreasers, glass cleaners, floor cleaners",
            "Liquids, powders, sprays, gels",
            "Green, blue, yellow, red chemicals"
          ],
          correctAnswer: 1,
          explanation: "The four main categories are disinfectants (kill germs), degreasers (break down grease), glass cleaners (streak-free), and floor cleaners (surface-specific)."
        },
        {
          id: 2,
          question: "What is dwell time for disinfectants?",
          options: [
            "Time to purchase the chemical",
            "Time the chemical must stay wet on surface",
            "Time to dilute the chemical",
            "Time between cleaning different areas"
          ],
          correctAnswer: 1,
          explanation: "Dwell time is how long a disinfectant must remain wet on a surface to effectively kill germs, typically 30 seconds to 10 minutes."
        },
        {
          id: 3,
          question: "What are three problems with wrong chemical dilution?",
          options: [
            "Color changes, smell changes, texture changes",
            "Wasted money, ineffective cleaning, safety hazards",
            "Slow drying, fast evaporation, no foam",
            "Container damage, label fading, cap issues"
          ],
          correctAnswer: 1,
          explanation: "Wrong dilution wastes money (too concentrated), doesn't clean (too diluted), or creates hazards (improper mixing)."
        },
        {
          id: 4,
          question: "How should you always add chemicals when mixing?",
          options: [
            "Water to chemicals",
            "Chemicals to water",
            "Simultaneously",
            "Through a funnel only"
          ],
          correctAnswer: 1,
          explanation: "Always add chemicals to water to prevent dangerous reactions, splashing, or overheating."
        },
        {
          id: 5,
          question: "What should labels on diluted solutions include?",
          options: [
            "Only the chemical name",
            "Contents and date mixed",
            "Only the diluter's name",
            "Only hazard symbols"
          ],
          correctAnswer: 1,
          explanation: "Labels should show contents (what chemical) and date mixed to ensure freshness and prevent confusion."
        },
        {
          id: 6,
          question: "What does basic PPE for chemical handling include?",
          options: [
            "Hat, shoes, watch",
            "Gloves, goggles, sometimes masks",
            "Uniform only",
            "No special equipment needed"
          ],
          correctAnswer: 1,
          explanation: "Basic personal protective equipment includes gloves (skin protection), goggles (eye protection), and sometimes masks (respiratory protection)."
        },
        {
          id: 7,
          question: "What are the three storage rules for chemicals?",
          options: [
            "Keep open, store warm, mix often",
            "Original containers, cool dry places, separate incompatibles",
            "Near food, in sunlight, easy access",
            "Color-coded, unlabeled, shared containers"
          ],
          correctAnswer: 1,
          explanation: "Store in original containers (prevents confusion), cool dry places (prevents degradation), and separate incompatible chemicals (prevents reactions)."
        },
        {
          id: 8,
          question: "What should you never do with chemical containers?",
          options: [
            "Store them properly",
            "Transfer to food containers",
            "Keep them labeled",
            "Close them tightly"
          ],
          correctAnswer: 1,
          explanation: "Never transfer chemicals to food containers as this could lead to accidental ingestion thinking it's food or drink."
        },
        {
          id: 9,
          question: "How many sections does a Safety Data Sheet have?",
          options: [
            "5 sections",
            "10 sections",
            "16 sections",
            "20 sections"
          ],
          correctAnswer: 2,
          explanation: "Safety Data Sheets have 16 standardized sections covering all aspects of chemical safety and handling."
        },
        {
          id: 10,
          question: "What does the skull symbol on a label indicate?",
          options: [
            "Flammable material",
            "Poison or toxic substance",
            "Corrosive material",
            "Environmental hazard"
          ],
          correctAnswer: 1,
          explanation: "The skull and crossbones symbol indicates poison or toxic substances that can cause serious health effects."
        },
        {
          id: 11,
          question: "Where should SDS information be kept?",
          options: [
            "Only with management",
            "In a binder or accessible digital format",
            "Memorized by cleaners",
            "Only with chemical supplier"
          ],
          correctAnswer: 1,
          explanation: "SDS should be readily accessible to all workers, typically in a binder or digital system at the workplace."
        },
        {
          id: 12,
          question: "What are green cleaning products?",
          options: [
            "Only green-colored products",
            "Products with lower environmental impact",
            "Cheaper products",
            "Stronger products"
          ],
          correctAnswer: 1,
          explanation: "Green cleaning products have lower environmental impact, often made from renewable resources with fewer harmful chemicals."
        },
        {
          id: 13,
          question: "What certifications indicate environmentally friendly products?",
          options: [
            "FDA and USDA",
            "Green Seal or EcoLogo",
            "ISO only",
            "CE mark only"
          ],
          correctAnswer: 1,
          explanation: "Green Seal and EcoLogo are common certifications for environmentally preferable cleaning products."
        },
        {
          id: 14,
          question: "How can cleaners conserve water?",
          options: [
            "Use buckets instead of spray bottles",
            "Leave water running during breaks",
            "Use spray bottles instead of buckets",
            "Use more water for better cleaning"
          ],
          correctAnswer: 2,
          explanation: "Using spray bottles applies water directly where needed, using less than filling buckets repeatedly."
        },
        {
          id: 15,
          question: "What should you do with empty chemical containers?",
          options: [
            "Throw in regular trash",
            "Burn them",
            "Recycle when possible",
            "Bury them"
          ],
          correctAnswer: 2,
          explanation: "Recycle empty containers when possible, following local recycling guidelines and rinsing if required."
        },
        {
          id: 16,
          question: "Why use degreasers in well-ventilated areas?",
          options: [
            "To dry faster",
            "Fumes can be strong",
            "To work more effectively",
            "To prevent spills"
          ],
          correctAnswer: 1,
          explanation: "Degreasers often contain strong solvents with fumes that can be harmful if inhaled in enclosed spaces."
        },
        {
          id: 17,
          question: "What does proper waste management include for cleaning?",
          options: [
            "Only throwing everything away",
            "Recycling containers and proper rag disposal",
            "Burning all waste",
            "Dumping down drains"
          ],
          correctAnswer: 1,
          explanation: "Proper waste management includes recycling containers and disposing of or laundering rags appropriately."
        },
        {
          id: 18,
          question: "What should you use for accurate chemical dilution?",
          options: [
            "Eyeball estimation",
            "Measuring cups or pumps",
            "Any available container",
            "Hand measurements"
          ],
          correctAnswer: 1,
          explanation: "Measuring cups, pumps, or calibrated containers ensure accurate dilution for safety and effectiveness."
        },
        {
          id: 19,
          question: "What information do chemical labels provide?",
          options: [
            "Only the price",
            "Product name, hazards, first aid, instructions",
            "Only the manufacturer",
            "Only the color"
          ],
          correctAnswer: 1,
          explanation: "Labels provide essential information including product identification, hazards, first aid measures, and usage instructions."
        },
        {
          id: 20,
          question: "What reduces waste in cleaning operations?",
          options: [
            "Using disposable everything",
            "Laundering and reusing rags",
            "Throwing away slightly used items",
            "Using more products"
          ],
          correctAnswer: 1,
          explanation: "Laundering and reusing cleaning rags reduces waste and saves money compared to disposable wipes."
        }
      ]
    },
    {
      id: 3,
      title: "Floor Care and Maintenance",
      completed: false,
      content: `# Module 3: Floor Care and Maintenance

## Mastering Floor Cleaning Techniques
This module covers different floor types and proper cleaning methods. You will learn to identify floor surfaces and choose appropriate cleaning techniques for each.

### Types of Flooring Materials
Common flooring materials include vinyl, ceramic tile, hardwood, laminate, concrete, and carpet. Each material requires specific care to avoid damage.

Vinyl flooring is durable and water-resistant but can be scratched by abrasive pads. Use mild cleaners and avoid wax buildup. Ceramic tile has grout lines that trap dirt and need special attention.

Hardwood floors require gentle cleaning to prevent water damage. Never soak hardwood floors. Use slightly damp mops and specific hardwood cleaners. Laminate flooring resembles wood but is more water-resistant.

### Daily Floor Maintenance
Daily floor maintenance involves sweeping, vacuuming, and spot cleaning. Sweeping removes loose dirt before mopping. Always use appropriate brooms—soft bristles for smooth floors, stiff bristles for rough surfaces.

Vacuuming techniques differ by floor type. Use bare floor settings on hard surfaces to prevent scattering dirt. Use carpet settings with beater bars for carpets to lift dirt. Empty vacuum bags or containers when half full for best suction.

Spot cleaning addresses spills immediately. Blot liquids, don't rub. Use appropriate cleaners for different spills. For oily spills, use degreaser. For food spills, use general cleaner. For unknown substances, start with mild soap and water.

### Mopping Procedures
Proper mopping has three steps: preparation, washing, and drying. Preparation involves sweeping first and preparing cleaning solution. Use two buckets for mopping—one for cleaning solution, one for rinse water.

Washing technique uses figure-eight motions for even coverage. Start from farthest corner and work toward exit. Change water when it becomes dirty. For large areas, divide into sections.

Drying is crucial to prevent slips. Use "wet floor" signs during and after mopping. Speed drying with squeegees or dry mops. Ensure floors are completely dry before removing signs.

### Carpet Care Basics
Carpet maintenance includes vacuuming, spot cleaning, and periodic deep cleaning. Vacuum high-traffic areas daily, other areas weekly. Use criss-cross patterns for thorough cleaning.

Spot cleaning techniques vary by stain type. General steps: blot excess, apply cleaner, blot, rinse, blot dry. Never rub stains as this pushes them deeper. Use carpet cleaning solutions, not regular cleaners.

Deep cleaning methods include steam cleaning, shampooing, and dry cleaning. Steam cleaning uses hot water extraction and is most effective. Frequency depends on traffic—every 6-12 months for most carpets.

### Floor Stripping and Refinishing
Stripping removes old wax and finish buildup. Process involves: applying stripper, letting it dwell, scrubbing, and removing residue. Use proper ventilation and PPE during stripping.

Refinishing applies new finish for protection and shine. Apply thin, even coats. Allow proper drying between coats—usually 20-30 minutes. Three coats provide good protection for most floors.

Maintenance coating adds shine between refinishing. Use spray buffing or high-speed burnishing. These techniques remove scuffs and restore shine without complete refinishing.

### Equipment for Floor Care
Floor machines include automatic scrubbers, burnishers, and carpet extractors. Automatic scrubbers clean and dry floors in one pass. Burnishers create high shine on finished floors. Carpet extractors deep clean carpets.

Machine safety involves: checking cords for damage, using proper attachments, and following manufacturer instructions. Never leave machines unattended while running.

Tool maintenance includes: cleaning after use, storing properly, and reporting needed repairs. Clean squeegees and mop heads after each use. Store mops head-up to dry and prevent mildew.`,
      
      quiz: [
        {
          id: 1,
          question: "What are common flooring materials mentioned?",
          options: [
            "Only carpet and tile",
            "Vinyl, ceramic tile, hardwood, laminate, concrete, carpet",
            "Only wood and concrete",
            "Marble, granite, sandstone"
          ],
          correctAnswer: 1,
          explanation: "Common flooring includes vinyl, ceramic tile, hardwood, laminate, concrete, and carpet—each requiring specific care."
        },
        {
          id: 2,
          question: "What should you avoid with vinyl flooring?",
          options: [
            "All cleaning",
            "Wax buildup and abrasive pads",
            "Only water",
            "Only vacuuming"
          ],
          correctAnswer: 1,
          explanation: "Avoid abrasive pads that scratch vinyl and wax buildup that creates dull, slippery surfaces."
        },
        {
          id: 3,
          question: "How should you clean hardwood floors?",
          options: [
            "Soak with water",
            "Use slightly damp mops and specific cleaners",
            "Scrub with abrasive pads",
            "Use any floor cleaner"
          ],
          correctAnswer: 1,
          explanation: "Hardwood requires gentle cleaning with slightly damp mops and pH-neutral hardwood cleaners to prevent water damage."
        },
        {
          id: 4,
          question: "What does daily floor maintenance include?",
          options: [
            "Only mopping",
            "Sweeping, vacuuming, and spot cleaning",
            "Only stripping and waxing",
            "Only carpet cleaning"
          ],
          correctAnswer: 1,
          explanation: "Daily maintenance involves sweeping (remove loose dirt), vacuuming (deeper cleaning), and spot cleaning (immediate spills)."
        },
        {
          id: 5,
          question: "When should you empty vacuum containers?",
          options: [
            "When completely full",
            "When half full for best suction",
            "Once a month",
            "Never, they're self-cleaning"
          ],
          correctAnswer: 1,
          explanation: "Empty when half full maintains strong suction; full containers reduce vacuum effectiveness significantly."
        },
        {
          id: 6,
          question: "How should you address liquid spills?",
          options: [
            "Rub vigorously",
            "Blot, don't rub",
            "Ignore small spills",
            "Cover with paper"
          ],
          correctAnswer: 1,
          explanation: "Blotting absorbs liquid without spreading; rubbing pushes liquid deeper into surfaces or spreads stains."
        },
        {
          id: 7,
          question: "What are the three steps of proper mopping?",
          options: [
            "Mix, mop, leave",
            "Preparation, washing, drying",
            "Wet, dry, polish",
            "Start, finish, clean up"
          ],
          correctAnswer: 1,
          explanation: "Preparation (sweep, mix solution), washing (actual mopping), and drying (prevent slips) ensure proper cleaning."
        },
        {
          id: 8,
          question: "Why use two buckets for mopping?",
          options: [
            "To work faster",
            "One for solution, one for rinse water",
            "In case one breaks",
            "For different cleaners"
          ],
          correctAnswer: 1,
          explanation: "One bucket holds cleaning solution, the other rinse water to prevent reapplying dirty water to floors."
        },
        {
          id: 9,
          question: "When should 'wet floor' signs be removed?",
          options: [
            "Immediately after mopping",
            "When floors are completely dry",
            "After 5 minutes",
            "When someone complains"
          ],
          correctAnswer: 1,
          explanation: "Signs should remain until floors are completely dry to prevent slip-and-fall accidents."
        },
        {
          id: 10,
          question: "How often vacuum high-traffic carpet areas?",
          options: [
            "Monthly",
            "Daily",
            "Weekly",
            "Yearly"
          ],
          correctAnswer: 1,
          explanation: "High-traffic areas collect dirt quickly and require daily vacuuming to maintain appearance and extend carpet life."
        },
        {
          id: 11,
          question: "What should you never do with carpet stains?",
          options: [
            "Blot them",
            "Rub them vigorously",
            "Apply cleaner",
            "Use cold water"
          ],
          correctAnswer: 1,
          explanation: "Rubbing pushes stains deeper into carpet fibers, making them harder or impossible to remove."
        },
        {
          id: 12,
          question: "What is the most effective carpet deep cleaning method?",
          options: [
            "Only vacuuming",
            "Steam cleaning (hot water extraction)",
            "Only spot cleaning",
            "Beating carpets"
          ],
          correctAnswer: 1,
          explanation: "Steam cleaning uses hot water extraction to deeply clean carpets, removing embedded dirt and allergens."
        },
        {
          id: 13,
          question: "What does floor stripping remove?",
          options: [
            "Only dirt",
            "Old wax and finish buildup",
            "Only stains",
            "The floor surface"
          ],
          correctAnswer: 1,
          explanation: "Stripping removes old, discolored wax and finish layers to prepare floors for new protective coating."
        },
        {
          id: 14,
          question: "How many coats of finish provide good protection?",
          options: [
            "One thin coat",
            "Three coats",
            "Ten coats",
            "No coats needed"
          ],
          correctAnswer: 1,
          explanation: "Three thin, even coats provide good protection and appearance; too few coats wear quickly, too many peel."
        },
        {
          id: 15,
          question: "What does maintenance coating do?",
          options: [
            "Strips floors completely",
            "Adds shine between refinishing",
            "Replaces daily cleaning",
            "Only for carpets"
          ],
          correctAnswer: 1,
          explanation: "Maintenance coating (spray buffing) restores shine without complete refinishing, extending time between stripping."
        },
        {
          id: 16,
          question: "What type of floor machine cleans and dries in one pass?",
          options: [
            "Vacuum only",
            "Automatic scrubber",
            "Burnisher only",
            "Carpet extractor"
          ],
          correctAnswer: 1,
          explanation: "Automatic scrubbers apply solution, scrub, and vacuum dry in continuous operation for efficient cleaning."
        },
        {
          id: 17,
          question: "What is machine safety practice?",
          options: [
            "Leave running unattended",
            "Check cords for damage before use",
            "Use damaged equipment",
            "No safety measures needed"
          ],
          correctAnswer: 1,
          explanation: "Checking cords prevents electrical hazards; damaged cords can cause shocks or fires during operation."
        },
        {
          id: 18,
          question: "How should mops be stored?",
          options: [
            "In closed containers wet",
            "Head-up to dry and prevent mildew",
            "On the floor",
            "Outside in sun"
          ],
          correctAnswer: 1,
          explanation: "Storing mops head-up allows drying, preventing mildew growth and unpleasant odors in storage areas."
        },
        {
          id: 19,
          question: "What special attention does ceramic tile need?",
          options: [
            "No special care",
            "Grout lines trap dirt",
            "Only sweeping",
            "Daily stripping"
          ],
          correctAnswer: 1,
          explanation: "Grout lines between tiles trap dirt and require brushing or steam cleaning for proper maintenance."
        },
        {
          id: 20,
          question: "What drying technique prevents slips after mopping?",
          options: [
            "Leaving floors wet",
            "Using squeegees or dry mops",
            "Running fans only",
            "Closing the area permanently"
          ],
          correctAnswer: 1,
          explanation: "Squeegees remove excess water quickly; dry mops absorb remaining moisture for faster, safer drying."
        }
      ]
    },
    {
      id: 4,
      title: "Restroom and Kitchen Sanitation",
      completed: false,
      content: `# Module 4: Restroom and Kitchen Sanitation

## High-Standard Sanitation Practices
This module focuses on areas requiring special attention: restrooms and kitchens. You will learn protocols for maintaining hygienic conditions in these critical spaces.

### Restroom Cleaning Protocol
Restroom cleaning follows a specific sequence: gather supplies, pre-clean, disinfect, restock, and final check. Always start with gathering all needed supplies to avoid leaving during cleaning.

Pre-cleaning removes visible soil before disinfecting. This includes emptying trash, wiping surfaces, and sweeping floors. Never skip pre-cleaning as dirt reduces disinfectant effectiveness.

Disinfecting kills germs on high-touch surfaces. High-touch areas include faucet handles, toilet flush handles, door knobs, and light switches. Apply disinfectant and allow proper dwell time according to product instructions.

### Toilet and Urinal Cleaning
Toilet cleaning procedure: apply bowl cleaner under rim, let sit, scrub with bowl brush, flush. Use separate brushes for toilets and urinals to prevent cross-contamination.

Urinal cleaning includes: applying cleaner, scrubbing, flushing, and wiping exterior. Address urinal screens or blocks regularly. Replace deodorizer blocks as needed.

Exterior surfaces need daily wiping: toilet seats, lids, tanks, and bases. Use disinfectant wipes or cloths with disinfectant spray. Pay attention to hinges and hard-to-reach areas.

### Sink and Counter Areas
Sink cleaning involves: removing debris from drain, applying cleaner, scrubbing basin, rinsing, and polishing fixtures. Clean overflow holes regularly as they collect grime.

Counter and vanity surfaces need disinfection. Wipe in one direction for even coverage. Clean mirrors with glass cleaner using vertical then horizontal strokes for streak-free finish.

Soap dispensers and paper towel holders require regular cleaning. Empty, clean, and refill soap dispensers. Wipe paper towel dispensers to prevent grime buildup.

### Kitchen Sanitation Standards
Kitchen cleaning differs from other areas due to food safety concerns. Always use food-safe cleaners in kitchen areas. Separate cleaning tools for kitchen use only.

Food contact surfaces require special attention. These include countertops, cutting boards, prep tables, and appliance surfaces. Use sanitizers approved for food contact surfaces.

Non-food contact surfaces include floors, walls, storage shelves, and equipment exteriors. These still require regular cleaning but with different standards than food contact areas.

### Appliance Cleaning
Refrigerator cleaning: remove all items, wash shelves and drawers with mild detergent, wipe interior, clean exterior including handles and seals. Check expiration dates during cleaning.

Oven and stove cleaning: remove burners and grates, soak if needed, scrub with appropriate cleaner, wipe control panels carefully. Never spray cleaner directly into control panels.

Microwave cleaning: heat bowl of water to create steam, wipe interior with mild cleaner. Pay attention to ceiling where splatters accumulate.

### Safety in Sanitation Areas
Restroom safety includes: using "cleaning in progress" signs, wearing gloves always, and being aware of slip hazards. Never block exits with equipment.

Kitchen safety includes: unplugging appliances before cleaning, being aware of hot surfaces, and proper chemical storage away from food areas.

Cross-contamination prevention requires: color-coded cloths for different areas, proper tool storage, and hand washing between tasks. Red cloths for toilets, blue for general surfaces, green for kitchen surfaces is a common system.

### Waste Management
Restroom waste: empty trash daily, line with fresh bags, dispose of sanitary products properly. Use foot-operated trash cans in public restrooms.

Kitchen waste: separate food waste, recyclables, and general trash. Clean trash cans regularly to prevent odors and pests. Use liners appropriate for food waste.

Recycling procedures: know what materials are recycled locally. Rinse containers before recycling. Keep recycling bins clean to encourage proper use.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the restroom cleaning sequence?",
          options: [
            "Disinfect first, then clean",
            "Gather supplies, pre-clean, disinfect, restock, final check",
            "Only empty trash and leave",
            "Clean floors only"
          ],
          correctAnswer: 1,
          explanation: "Proper sequence: gather supplies (efficiency), pre-clean (remove soil), disinfect (kill germs), restock (supplies), final check (quality)."
        },
        {
          id: 2,
          question: "Why should you never skip pre-cleaning?",
          options: [
            "It's optional",
            "Dirt reduces disinfectant effectiveness",
            "It saves time",
            "Disinfectant cleans everything"
          ],
          correctAnswer: 1,
          explanation: "Dirt and organic matter can neutralize disinfectants or create barriers preventing proper germ contact and kill."
        },
        {
          id: 3,
          question: "What are high-touch surfaces in restrooms?",
          options: [
            "Only floors",
            "Faucet handles, toilet handles, door knobs, light switches",
            "Only walls",
            "Only ceilings"
          ],
          correctAnswer: 1,
          explanation: "High-touch surfaces are frequently contacted areas that spread germs quickly and need regular disinfection."
        },
        {
          id: 4,
          question: "How should you apply toilet bowl cleaner?",
          options: [
            "Directly into water",
            "Under the rim for maximum contact time",
            "On toilet seat only",
            "On floor around toilet"
          ],
          correctAnswer: 1,
          explanation: "Applying under the rim allows cleaner to coat bowl surfaces as it flows down, maximizing cleaning effectiveness."
        },
        {
          id: 5,
          question: "Why use separate brushes for toilets and urinals?",
          options: [
            "To save money",
            "Prevent cross-contamination",
            "Only for color coding",
            "No reason"
          ],
          correctAnswer: 1,
          explanation: "Separate brushes prevent transferring bacteria between different fixtures, maintaining higher sanitation standards."
        },
        {
          id: 6,
          question: "What should be cleaned regularly on sinks?",
          options: [
            "Only the basin",
            "Overflow holes that collect grime",
            "Only faucet",
            "Only counter around sink"
          ],
          correctAnswer: 1,
          explanation: "Overflow holes accumulate toothpaste, soap residue, and bacteria, requiring regular cleaning for proper hygiene."
        },
        {
          id: 7,
          question: "How clean mirrors for streak-free finish?",
          options: [
            "Circular motions",
            "Vertical then horizontal strokes",
            "Any direction",
            "Only once"
          ],
          correctAnswer: 1,
          explanation: "Vertical then horizontal strokes (or opposite) ensures complete coverage and reveals any missed streaks clearly."
        },
        {
          id: 8,
          question: "What cleaners should be used in kitchens?",
          options: [
            "Any available cleaner",
            "Food-safe cleaners only",
            "Strong industrial cleaners",
            "Only disinfectants"
          ],
          correctAnswer: 1,
          explanation: "Food-safe cleaners won't contaminate food or food surfaces, ensuring kitchen safety and regulatory compliance."
        },
        {
          id: 9,
          question: "What are food contact surfaces?",
          options: [
            "Only floors",
            "Countertops, cutting boards, prep tables",
            "Only walls",
            "Only trash cans"
          ],
          correctAnswer: 1,
          explanation: "Food contact surfaces directly touch food and require higher sanitation standards using approved sanitizers."
        },
        {
          id: 10,
          question: "How clean a microwave effectively?",
          options: [
            "With abrasive scrubbers",
            "Heat water to create steam, then wipe",
            "Spray cleaner and leave",
            "Ignore splatters"
          ],
          correctAnswer: 1,
          explanation: "Steam loosens baked-on food particles making them easier to wipe clean without harsh scrubbing that can damage surfaces."
        },
        {
          id: 11,
          question: "What safety sign should restroom cleaning use?",
          options: [
            "No sign needed",
            "'Cleaning in progress' sign",
            "'Open for business' sign",
            "'Sale' sign"
          ],
          correctAnswer: 1,
          explanation: "'Cleaning in progress' alerts users to wet floors, closed stalls, and maintains cleaner safety and privacy."
        },
        {
          id: 12,
          question: "What should you always do before cleaning kitchen appliances?",
          options: [
            "Turn on all appliances",
            "Unplug appliances when possible",
            "Use them first",
            "Ignore electrical safety"
          ],
          correctAnswer: 1,
          explanation: "Unplugging prevents electrical shocks, especially when using liquids for cleaning around electrical components."
        },
        {
          id: 13,
          question: "What does color-coded cloth system prevent?",
          options: [
            "Only organization issues",
            "Cross-contamination between areas",
            "Only laundry mixing",
            "Only color confusion"
          ],
          correctAnswer: 1,
          explanation: "Different colors for different areas (red=toilets, blue=general, green=kitchen) prevents spreading germs between areas."
        },
        {
          id: 14,
          question: "How often empty restroom trash?",
          options: [
            "Weekly",
            "Daily",
            "When overflowing",
            "Monthly"
          ],
          correctAnswer: 1,
          explanation: "Daily emptying prevents overflow, controls odors, and reduces pest attraction in high-use restroom areas."
        },
        {
          id: 15,
          question: "What type of trash cans in public restrooms?",
          options: [
            "Open top cans",
            "Foot-operated cans",
            "No cans needed",
            "Small decorative cans"
          ],
          correctAnswer: 1,
          explanation: "Foot-operated cans minimize hand contact with potentially contaminated surfaces, improving hygiene."
        },
        {
          id: 16,
          question: "What should be done with kitchen waste?",
          options: [
            "Mix all together",
            "Separate food waste, recyclables, general trash",
            "Leave in open containers",
            "Store near food"
          ],
          correctAnswer: 1,
          explanation: "Proper separation reduces landfill waste, facilitates recycling, and controls odors and pests in kitchen areas."
        },
        {
          id: 17,
          question: "Why clean trash cans regularly?",
          options: [
            "Only for appearance",
            "Prevent odors and pests",
            "Waste of time",
            "Only when new"
          ],
          correctAnswer: 1,
          explanation: "Regular cleaning prevents bacterial growth, controls odors, and removes food residues that attract insects and rodents."
        },
        {
          id: 18,
          question: "What should be done with containers before recycling?",
          options: [
            "Leave food in them",
            "Rinse them out",
            "Crush them dirty",
            "Store them wet"
          ],
          correctAnswer: 1,
          explanation: "Rinsing removes food residues that attract pests and cause odors during storage before recycling pickup."
        },
        {
          id: 19,
          question: "What cleaning practice maintains hygiene between tasks?",
          options: [
            "Never wash hands",
            "Hand washing between tasks",
            "Use same gloves always",
            "Ignore hand hygiene"
          ],
          correctAnswer: 1,
          explanation: "Hand washing between different cleaning tasks prevents spreading germs from contaminated areas to cleaner ones."
        },
        {
          id: 20,
          question: "What should you never do with restroom cleaning equipment?",
          options: [
            "Store it properly",
            "Block exits with equipment",
            "Clean it after use",
            "Use color coding"
          ],
          correctAnswer: 1,
          explanation: "Blocking exits creates safety hazards in case of emergency; equipment should be positioned to allow clear exit paths."
        }
      ]
    },
    {
      id: 5,
      title: "Waste Management and Recycling",
      completed: false,
      content: `# Module 5: Waste Management and Recycling

## Efficient Waste Handling Systems
This module teaches proper waste collection, segregation, and disposal methods. You will learn to handle waste efficiently while following environmental guidelines.

### Waste Collection Procedures
Waste collection involves regular rounds, proper bagging, and timely removal. Collection frequency depends on area type: offices daily, kitchens multiple times daily, restrooms daily, common areas as needed.

Bagging techniques: tie bags securely, don't overfill, use appropriate bag strength. Overfilled bags tear easily creating messes. Double-bag liquids or sharp objects.

Collection routes should be efficient: start farthest from disposal area and work backward. This prevents tracking dirt through cleaned areas. Use service elevators or designated routes when available.

### Waste Segregation Systems
Three-stream segregation is common: recyclables, compostables, and landfill waste. Some facilities use more streams for specific recyclables like paper, plastic, glass, and metals.

Recyclables include: paper, cardboard, plastic bottles, aluminum cans, and glass containers. Know local recycling rules—what numbers of plastic are accepted, whether glass is separated by color.

Compostables include: food waste, yard waste, and compostable paper products. These go to composting facilities, not landfills. Use compostable bags for collection.

Landfill waste includes: mixed materials, contaminated items, and non-recyclable plastics. Minimize this stream through proper segregation at source.

### Special Waste Handling
Hazardous waste includes: batteries, light bulbs, electronics, and chemicals. Never put these in regular trash. Follow facility procedures for hazardous waste collection.

Sharps disposal requires special containers for needles, blades, or broken glass. Use puncture-proof containers clearly marked "sharps." Never reach into sharps containers.

Medical waste in healthcare settings requires specific protocols. This includes red bag waste, pharmaceutical waste, and pathological waste. Follow OSHA and facility guidelines strictly.

### Recycling Best Practices
Source separation means users sort waste at point of disposal. Provide clear, labeled bins with pictures. Consistent bin colors help: blue for recycling, green for compost, black for landfill.

Contamination prevention: food in recycling ruins paper recycling, liquids in paper make pulping difficult. Educate users about clean, dry recyclables.

Collection optimization: empty recycling before full to encourage use, keep areas clean to show importance, place recycling next to trash for convenience.

### Composting Basics
Composting turns organic waste into nutrient-rich soil amendment. Successful composting needs: proper mix of greens (food waste) and browns (paper, leaves), moisture control, and aeration.

Commercial composting uses large-scale systems. Janitors collect food waste separately using compostable liners. Keep compost bins clean to prevent odors and pests.

Vermicomposting uses worms to break down waste. This works for smaller amounts of food waste. Requires proper moisture and temperature control.

### Waste Reduction Strategies
Reduce waste at source: encourage double-sided printing, reusable containers, and digital documents. Every pound not created doesn't need disposal.

Reuse materials: use refillable soap dispensers, rechargeable batteries, and durable cleaning cloths instead of disposable wipes. This reduces purchasing and disposal costs.

Right-sizing trash cans: smaller cans in offices encourage recycling, appropriately sized liners prevent waste. Match can size to typical waste generation.

### Equipment for Waste Handling
Waste carts come in various sizes: 20-gallon for offices, 32-gallon for common areas, 64-gallon for kitchen areas. Use wheels for mobility, lids for odor control.

Compactors reduce waste volume for disposal. Follow safety procedures: never compact hazardous materials, keep hands clear, lock out during maintenance.

Balers create dense bales of recyclables for transport. Cardboard balers are common in facilities. Wear cut-resistant gloves when handling bales.

### Documentation and Reporting
Waste audits track amounts and types of waste generated. Measure by weight or volume weekly or monthly. Identify opportunities for improvement.

Reporting includes: amounts diverted from landfill, contamination rates, cost savings from recycling. Share positive results to encourage participation.

Regulatory compliance: maintain records for hazardous waste, track recycling rates if required by local ordinances, report as needed to authorities.`,
      
      quiz: [
        {
          id: 1,
          question: "How often should office waste typically be collected?",
          options: [
            "Weekly",
            "Daily",
            "Monthly",
            "When overflowing"
          ],
          correctAnswer: 1,
          explanation: "Daily collection prevents overflow, controls odors, and maintains professional appearance in office environments."
        },
        {
          id: 2,
          question: "What are problems with overfilled trash bags?",
          options: [
            "They look neat",
            "They tear easily creating messes",
            "They save money",
            "They are lighter"
          ],
          correctAnswer: 1,
          explanation: "Overfilled bags strain seams, tear during handling, and spill contents creating additional cleanup work."
        },
        {
          id: 3,
          question: "Why start waste collection farthest from disposal?",
          options: [
            "It's traditional",
            "Prevents tracking dirt through cleaned areas",
            "It's easier",
            "No particular reason"
          ],
          correctAnswer: 1,
          explanation: "Working from farthest point back prevents walking through cleaned areas with full trash bags or carts."
        },
        {
          id: 4,
          question: "What is three-stream waste segregation?",
          options: [
            "Only landfill waste",
            "Recyclables, compostables, landfill waste",
            "Paper, plastic, metal only",
            "Wet, dry, hazardous"
          ],
          correctAnswer: 1,
          explanation: "Three-stream divides waste into recyclables (blue), compostables (green), and landfill (black) for efficient processing."
        },
        {
          id: 5,
          question: "What are common recyclables mentioned?",
          options: [
            "Food waste only",
            "Paper, cardboard, plastic bottles, aluminum, glass",
            "Only electronics",
            "Only clothing"
          ],
          correctAnswer: 1,
          explanation: "Commonly recycled materials include paper products, specific plastics, aluminum cans, and glass containers."
        },
        {
          id: 6,
          question: "Where should food waste go in proper segregation?",
          options: [
            "Landfill waste",
            "Compost stream",
            "Recycling stream",
            "Down drain"
          ],
          correctAnswer: 1,
          explanation: "Food waste belongs in compost stream where it becomes soil amendment instead of landfill methane producer."
        },
        {
          id: 7,
          question: "What should never go in regular trash?",
          options: [
            "Only paper",
            "Batteries, light bulbs, electronics, chemicals",
            "Only plastic",
            "Only glass"
          ],
          correctAnswer: 1,
          explanation: "Hazardous materials like batteries and chemicals require special handling to prevent environmental contamination."
        },
        {
          id: 8,
          question: "What containers are needed for sharps?",
          options: [
            "Regular plastic bags",
            "Puncture-proof containers marked 'sharps'",
            "Cardboard boxes",
            "Glass jars"
          ],
          correctAnswer: 1,
          explanation: "Puncture-proof containers prevent needle sticks and injuries from blades or broken glass during handling."
        },
        {
          id: 9,
          question: "What is source separation?",
          options: [
            "Janitors sort everything",
            "Users sort waste at point of disposal",
            "Mixed waste collection",
            "No separation"
          ],
          correctAnswer: 1,
          explanation: "Source separation at bins by users produces cleaner recyclables and higher participation rates."
        },
        {
          id: 10,
          question: "What common bin colors help segregation?",
          options: [
            "All same color",
            "Blue recycling, green compost, black landfill",
            "Red for all waste",
            "Yellow only"
          ],
          correctAnswer: 1,
          explanation: "Consistent color coding (blue=recycle, green=compost, black=landfill) helps users sort correctly without reading labels."
        },
        {
          id: 11,
          question: "What ruins paper recycling?",
          options: [
            "Clean paper only",
            "Food contamination",
            "Dry paper",
            "Sorted paper"
          ],
          correctAnswer: 1,
          explanation: "Food grease and residues contaminate paper fibers making them unrecyclable in standard paper recycling processes."
        },
        {
          id: 12,
          question: "What does successful composting need?",
          options: [
            "Only food waste",
            "Proper mix of greens and browns, moisture, aeration",
            "Only dry materials",
            "Only wet materials"
          ],
          correctAnswer: 1,
          explanation: "Greens (nitrogen) and browns (carbon) in proper ratio with moisture and air create efficient composting."
        },
        {
          id: 13,
          question: "What is vermicomposting?",
          options: [
            "Using chemicals",
            "Using worms to break down waste",
            "Burning waste",
            "Landfilling"
          ],
          correctAnswer: 1,
          explanation: "Vermicomposting uses specific worm species to consume organic waste, producing nutrient-rich castings."
        },
        {
          id: 14,
          question: "How reduce waste at source?",
          options: [
            "Use more disposables",
            "Double-sided printing, reusable containers",
            "More packaging",
            "Single-use everything"
          ],
          correctAnswer: 1,
          explanation: "Reducing consumption through practices like double-sided printing prevents waste generation needing disposal."
        },
        {
          id: 15,
          question: "Why use refillable soap dispensers?",
          options: [
            "They cost more",
            "Reduce plastic bottle waste",
            "Create more waste",
            "No benefit"
          ],
          correctAnswer: 1,
          explanation: "Refillable dispensers use bulk containers reducing individual plastic bottle waste by 90% or more."
        },
        {
          id: 16,
          question: "What size waste cart for kitchen areas?",
          options: [
            "20-gallon",
            "64-gallon",
            "5-gallon",
            "100-gallon"
          ],
          correctAnswer: 1,
          explanation: "Kitchens generate more waste requiring larger 64-gallon carts for efficient collection without frequent emptying."
        },
        {
          id: 17,
          question: "What safety rule for compactors?",
          options: [
            "Compact everything",
            "Never compact hazardous materials",
            "Reach in while running",
            "No safety needed"
          ],
          correctAnswer: 1,
          explanation: "Hazardous materials in compactors can cause fires, explosions, or contaminate entire waste loads."
        },
        {
          id: 18,
          question: "What protective equipment for baler handling?",
          options: [
            "No protection needed",
            "Cut-resistant gloves",
            "Only safety glasses",
            "Only hard hat"
          ],
          correctAnswer: 1,
          explanation: "Cut-resistant gloves protect hands from sharp edges of baled materials like cardboard or metal."
        },
        {
          id: 19,
          question: "What do waste audits track?",
          options: [
            "Only costs",
            "Amounts and types of waste generated",
            "Only recycling",
            "Only employee satisfaction"
          ],
          correctAnswer: 1,
          explanation: "Waste audits measure what's being thrown away to identify reduction, reuse, and recycling opportunities."
        },
        {
          id: 20,
          question: "Why share positive waste diversion results?",
          options: [
            "Keep secret",
            "Encourage participation through success",
            "No reason",
            "Only report problems"
          ],
          correctAnswer: 1,
          explanation: "Sharing success stories (tons diverted, cost savings) motivates continued participation in waste reduction programs."
        }
      ]
    },
    {
      id: 6,
      title: "Professional Practices and Customer Service",
      completed: false,
      content: `# Module 6: Professional Practices and Customer Service

## Excellence in Janitorial Services
This final module covers professional conduct, communication skills, and quality assurance. You will learn to provide excellent service while maintaining professionalism.

### Professional Appearance and Conduct
Professional appearance includes: clean uniform, proper footwear, name badge, and neat grooming. Uniforms should be clean and in good repair daily. This creates positive first impressions.

Conduct expectations: arrive on time, follow schedules, respect property, maintain confidentiality. Never open drawers or cabinets unrelated to cleaning. Respect personal spaces in offices.

Work ethic principles: complete assigned tasks, maintain consistency, take initiative for noticed issues, and follow through on commitments. Quality work builds trust with clients.

### Communication Skills
Verbal communication: speak clearly, use appropriate language, ask clarifying questions. Greet building occupants politely. Listen actively when receiving instructions or feedback.

Written communication: complete checklists legibly, report issues clearly, document incidents accurately. Use proper grammar and spelling in any written communications.

Non-verbal communication: maintain eye contact, use positive body language, respect personal space. Smiles and nods show attentiveness and friendliness.

### Customer Service Principles
Service mindset: view building occupants as customers. Anticipate needs, respond promptly to requests, and exceed expectations when possible. Every interaction represents the cleaning service.

Problem resolution: listen completely before responding, apologize for inconveniences, offer solutions, follow up to ensure satisfaction. Document customer interactions appropriately.

Special requests handling: assess if request is within scope, communicate timelines clearly, deliver as promised. If unable to fulfill, explain politely and suggest alternatives.

### Time Management and Efficiency
Planning work: review assigned areas, gather supplies efficiently, sequence tasks logically. Group similar tasks together (all dusting, then all vacuuming).

Efficiency techniques: carry supplies efficiently, minimize trips to supply areas, clean systematically (top to bottom, inside to outside). Use tools properly to avoid rework.

Pacing work: maintain steady pace, avoid rushing that compromises quality, complete within allotted time. Adjust methods if consistently unable to complete on time.

### Quality Assurance
Inspection standards: check your own work before leaving area, use checklist if provided, address any deficiencies immediately. Common issues: missed spots, streaks, odors.

Self-assessment questions: Are surfaces clean? Is trash emptied? Are supplies stocked? Are safety hazards addressed? Would I be satisfied if this were my space?

Continuous improvement: learn from feedback, adopt better methods, share ideas with team. Attend training opportunities to enhance skills.

### Safety and Incident Reporting
Proactive safety: identify hazards before they cause incidents, report maintenance issues promptly, use equipment properly. Prevent slips, trips, and falls through vigilance.

Incident response: secure area if safe, assist injured if trained, notify supervisor immediately, complete incident report accurately. Never admit fault or make promises about outcomes.

Near-miss reporting: report close calls even without injury. These provide learning opportunities to prevent future incidents. Document what happened and suggested preventive measures.

### Teamwork and Collaboration
Working with colleagues: communicate about shared areas, coordinate schedules, help when needed, share supplies responsibly. Support team members during absences or heavy workloads.

Cooperating with other departments: respect maintenance, security, and administrative staff. Coordinate with maintenance for repair needs. Follow building security protocols.

Contributing to team meetings: share observations, suggest improvements, listen to others, participate in training. Team success depends on everyone's contribution.

### Career Development
Skill development: master basic skills first, then learn specialized areas (carpet care, floor finishing, window cleaning). Cross-training increases value and opportunities.

Professional certifications: consider IICRC, BSCAI, or other industry certifications. These demonstrate commitment and expertise, potentially leading to advancement.

Networking: join industry associations, attend trade shows, connect with experienced cleaners. Learning from others accelerates professional growth.

### Ethics and Integrity
Honesty: report hours accurately, use supplies appropriately, never take property. Integrity builds trust essential for building access.

Reliability: show up as scheduled, complete work consistently, communicate if issues arise. Dependability is valued in janitorial services.

Respect: treat all spaces and people with respect regardless of role or status. Professional cleaners serve everyone equally.`,
      
      quiz: [
        {
          id: 1,
          question: "What does professional appearance include?",
          options: [
            "Casual clothing",
            "Clean uniform, proper footwear, name badge",
            "Work clothes only",
            "No specific requirements"
          ],
          correctAnswer: 1,
          explanation: "Professional appearance: clean uniform (brand representation), proper footwear (safety), name badge (identification) for positive impression."
        },
        {
          id: 2,
          question: "What should you never do regarding property?",
          options: [
            "Clean thoroughly",
            "Open drawers unrelated to cleaning",
            "Report damage",
            "Use supplies properly"
          ],
          correctAnswer: 1,
          explanation: "Opening unrelated drawers violates privacy and trust; cleaners should only access areas necessary for cleaning tasks."
        },
        {
          id: 3,
          question: "What builds trust with clients?",
          options: [
            "Only low prices",
            "Quality work and follow-through",
            "Only fast work",
            "Only friendly attitude"
          ],
          correctAnswer: 1,
          explanation: "Consistent quality work and following through on commitments demonstrate reliability that builds long-term client trust."
        },
        {
          id: 4,
          question: "How should you greet building occupants?",
          options: [
            "Ignore them",
            "Politely and professionally",
            "Only if they speak first",
            "Casually like friends"
          ],
          correctAnswer: 1,
          explanation: "Polite, professional greetings show respect and establish positive relationships with building users."
        },
        {
          id: 5,
          question: "What should written communications include?",
          options: [
            "Illegible notes",
            "Clear, accurate documentation",
            "Only abbreviations",
            "Personal opinions"
          ],
          correctAnswer: 1,
          explanation: "Clear, accurate written documentation ensures proper understanding and provides records for quality assurance."
        },
        {
          id: 6,
          question: "What shows attentiveness in communication?",
          options: [
            "Looking away",
            "Eye contact and positive body language",
            "Interrupting others",
            "Checking phone"
          ],
          correctAnswer: 1,
          explanation: "Eye contact and positive body language (nods, smiles) demonstrate active listening and engagement."
        },
        {
          id: 7,
          question: "What is a service mindset?",
          options: [
            "Do minimum required",
            "View occupants as customers to serve",
            "Ignore requests",
            "Work only when watched"
          ],
          correctAnswer: 1,
          explanation: "Service mindset treats building users as customers whose satisfaction matters for continued business."
        },
        {
          id: 8,
          question: "What are problem resolution steps?",
          options: [
            "Ignore problems",
            "Listen, apologize, offer solutions, follow up",
            "Blame others",
            "Make promises you can't keep"
          ],
          correctAnswer: 1,
          explanation: "Effective resolution: listen completely, apologize for inconvenience, offer realistic solutions, follow up to ensure satisfaction."
        },
        {
          id: 9,
          question: "How handle special requests?",
          options: [
            "Refuse all requests",
            "Assess scope, communicate timeline, deliver",
            "Promise anything",
            "Ignore them"
          ],
          correctAnswer: 1,
          explanation: "Evaluate if request fits service scope, communicate realistic timeline clearly, then deliver as promised to build trust."
        },
        {
          id: 10,
          question: "How plan work efficiently?",
          options: [
            "Start anywhere",
            "Review areas, gather supplies, sequence tasks",
            "Wing it daily",
            "Only follow strict routine"
          ],
          correctAnswer: 1,
          explanation: "Planning: review assignments, gather all needed supplies, sequence tasks logically (group similar tasks) for efficiency."
        },
        {
          id: 11,
          question: "What efficiency technique minimizes trips?",
          options: [
            "Carry all supplies from start",
            "Go back for each item",
            "Work without supplies",
            "Skip needed items"
          ],
          correctAnswer: 0,
          explanation: "Carrying all needed supplies on cart minimizes time wasted returning to storage areas during cleaning."
        },
        {
          id: 12,
          question: "What should you check before leaving an area?",
          options: [
            "Only time",
            "Your own work quality",
            "Only supplies left",
            "Only trash collected"
          ],
          correctAnswer: 1,
          explanation: "Self-inspection before leaving ensures quality, catches missed spots, and prevents callback for deficiencies."
        },
        {
          id: 13,
          question: "What is a key self-assessment question?",
          options: [
            "Was it fast enough?",
            "Would I be satisfied if this were my space?",
            "Did anyone see me?",
            "Is it quitting time?"
          ],
          correctAnswer: 1,
          explanation: "Considering if you'd accept the quality in your own space ensures applying personal standards to professional work."
        },
        {
          id: 14,
          question: "What should you report even without injury?",
          options: [
            "Only actual injuries",
            "Near-miss incidents",
            "Nothing",
            "Only major issues"
          ],
          correctAnswer: 1,
          explanation: "Near-miss reports provide learning opportunities to prevent future incidents before injuries occur."
        },
        {
          id: 15,
          question: "What should incident reports include?",
          options: [
            "Opinions about fault",
            "Accurate facts only",
            "Promises about outcomes",
            "Guesses about causes"
          ],
          correctAnswer: 1,
          explanation: "Incident reports should contain factual observations without speculation about fault or promises about resolutions."
        },
        {
          id: 16,
          question: "How support team members?",
          options: [
            "Ignore their struggles",
            "Help during absences or heavy workloads",
            "Criticize their methods",
            "Take their supplies"
          ],
          correctAnswer: 1,
          explanation: "Helping colleagues during challenges builds team cohesion and ensures overall service quality during difficult periods."
        },
        {
          id: 17,
          question: "Who should you coordinate with for repairs?",
          options: [
            "No one",
            "Maintenance department",
            "Only supervisors",
            "Building occupants"
          ],
          correctAnswer: 1,
          explanation: "Coordinating with maintenance ensures repairs are addressed properly by trained personnel, not attempted by cleaners."
        },
        {
          id: 18,
          question: "What increases professional value?",
          options: [
            "Only doing basics",
            "Cross-training in specialized areas",
            "Avoiding new skills",
            "Only working alone"
          ],
          correctAnswer: 1,
          explanation: "Cross-training in carpet care, floor finishing, or window cleaning increases versatility and value to employers."
        },
        {
          id: 19,
          question: "What demonstrates professional commitment?",
          options: [
            "Only showing up",
            "Industry certifications",
            "Avoiding training",
            "Minimum work only"
          ],
          correctAnswer: 1,
          explanation: "Certifications like IICRC demonstrate commitment to professional standards and ongoing skill development."
        },
        {
          id: 20,
          question: "What is essential for building access?",
          options: [
            "Only skill",
            "Integrity and trust",
            "Only speed",
            "Only low cost"
          ],
          correctAnswer: 1,
          explanation: "Integrity in reporting, property respect, and reliability builds trust necessary for after-hours building access privileges."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: [
    {
      id: 1,
      question: "What are the three primary responsibilities of a professional cleaner?",
      options: [
        "Speed, cost, appearance",
        "Maintaining cleanliness, ensuring safety, using proper techniques",
        "Customer service only",
        "Equipment maintenance only"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Cleaners must maintain cleanliness (health), ensure safety (prevent accidents), and use proper techniques (effective results).",
      module: 1
    },
    {
      id: 2,
      question: "What should you always do with chemicals according to safety rules?",
      options: [
        "Mix them for strength",
        "Read labels before use",
        "Store in food containers",
        "Use without protection"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Always read labels to understand proper usage, dangers, and first aid measures.",
      module: 1
    },
    {
      id: 3,
      question: "What are the four main categories of cleaning chemicals?",
      options: [
        "Disinfectants, degreasers, glass cleaners, floor cleaners",
        "Only soaps and detergents",
        "Liquids, powders, sprays, gels",
        "Green, blue, yellow, red"
      ],
      correctAnswer: 0,
      explanation: "From Module 2: Four categories are disinfectants (germ kill), degreasers (grease breakdown), glass cleaners (streak-free), floor cleaners (surface-specific).",
      module: 2
    },
    {
      id: 4,
      question: "What is dwell time for disinfectants?",
      options: [
        "Time to purchase chemical",
        "Time chemical must stay wet on surface",
        "Time between uses",
        "Shelf life"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Dwell time is how long disinfectant must remain wet to effectively kill germs, typically 30 seconds to 10 minutes.",
      module: 2
    },
    {
      id: 5,
      question: "What should you never do with vinyl flooring?",
      options: [
        "Vacuum it",
        "Use abrasive pads that scratch",
        "Damp mop it",
        "Sweep it"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Abrasive pads scratch vinyl surfaces; use appropriate pads or soft cloths instead.",
      module: 3
    },
    {
      id: 6,
      question: "How should you clean hardwood floors?",
      options: [
        "Soak with water",
        "Use slightly damp mops and specific cleaners",
        "Scrub with abrasive pads",
        "Use any floor cleaner"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Hardwood requires gentle cleaning with slightly damp mops and pH-neutral cleaners to prevent water damage.",
      module: 3
    },
    {
      id: 7,
      question: "What is the restroom cleaning sequence?",
      options: [
        "Disinfect first, then clean",
        "Gather supplies, pre-clean, disinfect, restock, final check",
        "Only empty trash",
        "Clean floors only"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Proper sequence ensures efficiency and effectiveness in restroom sanitation.",
      module: 4
    },
    {
      id: 8,
      question: "What are high-touch surfaces in restrooms?",
      options: [
        "Only floors",
        "Faucet handles, toilet handles, door knobs, light switches",
        "Only walls",
        "Only ceilings"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: High-touch surfaces spread germs quickly and need regular disinfection.",
      module: 4
    },
    {
      id: 9,
      question: "How often should office waste typically be collected?",
      options: [
        "Weekly",
        "Daily",
        "Monthly",
        "When overflowing"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Daily collection prevents overflow, controls odors, and maintains professional appearance.",
      module: 5
    },
    {
      id: 10,
      question: "What is three-stream waste segregation?",
      options: [
        "Only landfill waste",
        "Recyclables, compostables, landfill waste",
        "Paper, plastic, metal only",
        "Wet, dry, hazardous"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Three-stream divides waste for efficient processing and environmental responsibility.",
      module: 5
    },
    {
      id: 11,
      question: "What does professional appearance include?",
      options: [
        "Casual clothing",
        "Clean uniform, proper footwear, name badge",
        "Work clothes only",
        "No specific requirements"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Professional appearance creates positive first impressions and represents service quality.",
      module: 6
    },
    {
      id: 12,
      question: "What builds trust with clients?",
      options: [
        "Only low prices",
        "Quality work and follow-through",
        "Only fast work",
        "Only friendly attitude"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Consistent quality and reliability build long-term client relationships and trust.",
      module: 6
    },
    {
      id: 13,
      question: "What are the key cleaning standards?",
      options: [
        "Only visual cleanliness",
        "Visual, sanitary, odor control, surface protection",
        "Only speed",
        "Only cost"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Four standards ensure comprehensive cleaning addressing appearance, health, and safety.",
      module: 1
    },
    {
      id: 14,
      question: "What problems occur with wrong chemical dilution?",
      options: [
        "Better cleaning",
        "Wasted money, ineffective cleaning, safety hazards",
        "No problems",
        "Only color changes"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Wrong concentration wastes product, doesn't clean properly, or creates hazards.",
      module: 2
    },
    {
      id: 15,
      question: "What does daily floor maintenance include?",
      options: [
        "Only mopping",
        "Sweeping, vacuuming, spot cleaning",
        "Only stripping and waxing",
        "Only carpet cleaning"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Daily tasks address different cleaning needs for maintained appearance and safety.",
      module: 3
    },
    {
      id: 16,
      question: "Why never skip pre-cleaning before disinfecting?",
      options: [
        "Saves time",
        "Dirt reduces disinfectant effectiveness",
        "Disinfectant cleans everything",
        "Optional step"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Dirt creates barriers preventing disinfectant contact with surfaces and germs.",
      module: 4
    },
    {
      id: 17,
      question: "What should never go in regular trash?",
      options: [
        "Only paper",
        "Batteries, light bulbs, electronics, chemicals",
        "Only plastic",
        "Only glass"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Hazardous materials require special handling to prevent environmental contamination.",
      module: 5
    },
    {
      id: 18,
      question: "What is a service mindset?",
      options: [
        "Do minimum required",
        "View occupants as customers to serve",
        "Ignore requests",
        "Work only when watched"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Service orientation focuses on meeting and exceeding user expectations.",
      module: 6
    },
    {
      id: 19,
      question: "What are examples of manual cleaning tools?",
      options: [
        "Vacuum cleaners",
        "Brooms, mops, scrub brushes",
        "Floor buffers",
        "Carpet extractors"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Manual tools don't require power and include basic implements for various tasks.",
      module: 1
    },
    {
      id: 20,
      question: "How should you always add chemicals when mixing?",
      options: [
        "Water to chemicals",
        "Chemicals to water",
        "Simultaneously",
        "Doesn't matter"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Adding chemicals to water prevents dangerous reactions and splashing.",
      module: 2
    },
    {
      id: 21,
      question: "When should you empty vacuum containers?",
      options: [
        "When completely full",
        "When half full for best suction",
        "Once a month",
        "Never"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Half-full maintains strong suction; full containers significantly reduce effectiveness.",
      module: 3
    },
    {
      id: 22,
      question: "How apply toilet bowl cleaner?",
      options: [
        "Directly into water",
        "Under rim for maximum contact",
        "On seat only",
        "On floor"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Under rim allows cleaner to coat bowl surfaces as it flows down for effectiveness.",
      module: 4
    },
    {
      id: 23,
      question: "What is source separation?",
      options: [
        "Janitors sort everything",
        "Users sort waste at disposal point",
        "Mixed waste collection",
        "No separation"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: User sorting at bins produces cleaner recyclables and higher participation.",
      module: 5
    },
    {
      id: 24,
      question: "How handle special requests?",
      options: [
        "Refuse all",
        "Assess scope, communicate timeline, deliver",
        "Promise anything",
        "Ignore"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Professional handling of requests builds client relationships and service reputation.",
      module: 6
    },
    {
      id: 25,
      question: "What does visual cleanliness mean?",
      options: [
        "Complete sterility",
        "Surfaces look clean to eye",
        "No germs present",
        "Perfect shine"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Visual standard means absence of visible dirt, dust, or stains.",
      module: 1
    },
    {
      id: 26,
      question: "What does basic PPE for chemicals include?",
      options: [
        "Hat, shoes, watch",
        "Gloves, goggles, sometimes masks",
        "Uniform only",
        "Nothing special"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Basic protection includes skin, eye, and sometimes respiratory protection.",
      module: 2
    },
    {
      id: 27,
      question: "What are the three mopping steps?",
      options: [
        "Mix, mop, leave",
        "Preparation, washing, drying",
        "Wet, dry, polish",
        "Start, finish, clean"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Three-step process ensures thorough cleaning and safety from slips.",
      module: 3
    },
    {
      id: 28,
      question: "What cleaners for kitchens?",
      options: [
        "Any available",
        "Food-safe cleaners only",
        "Strong industrial",
        "Only disinfectants"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Food-safe products prevent chemical contamination of food preparation areas.",
      module: 4
    },
    {
      id: 29,
      question: "What ruins paper recycling?",
      options: [
        "Clean paper",
        "Food contamination",
        "Dry paper",
        "Sorted paper"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Food residues make paper unrecyclable in standard processes.",
      module: 5
    },
    {
      id: 30,
      question: "What should you check before leaving area?",
      options: [
        "Only time",
        "Your own work quality",
        "Only supplies",
        "Only trash"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Self-inspection ensures quality and prevents callback for deficiencies.",
      module: 6
    },
    {
      id: 31,
      question: "Why use separate toilet and urinal brushes?",
      options: [
        "Save money",
        "Prevent cross-contamination",
        "Color coding only",
        "No reason"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Separate tools prevent bacteria transfer between different fixtures.",
      module: 4
    },
    {
      id: 32,
      question: "What are common recyclables?",
      options: [
        "Food waste only",
        "Paper, cardboard, plastic bottles, aluminum, glass",
        "Only electronics",
        "Only clothing"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: These materials have established recycling markets and processes.",
      module: 5
    },
    {
      id: 33,
      question: "What is proper waste collection route?",
      options: [
        "Start near disposal",
        "Start farthest, work backward",
        "Random pattern",
        "Shortest first"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Farthest-first prevents tracking through cleaned areas with full carts.",
      module: 5
    },
    {
      id: 34,
      question: "What should incident reports include?",
      options: [
        "Opinions about fault",
        "Accurate facts only",
        "Promises about outcomes",
        "Guesses about causes"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Factual reports provide basis for proper response and prevention.",
      module: 6
    },
    {
      id: 35,
      question: "What does chemical storage require?",
      options: [
        "Keep open",
        "Original containers, cool dry places, separate incompatibles",
        "Near food",
        "Color-coded only"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Proper storage prevents accidents, degradation, and dangerous reactions.",
      module: 2
    },
    {
      id: 36,
      question: "How often vacuum high-traffic carpets?",
      options: [
        "Monthly",
        "Daily",
        "Weekly",
        "Yearly"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: High traffic collects dirt quickly requiring daily attention.",
      module: 3
    },
    {
      id: 37,
      question: "What should you report even without injury?",
      options: [
        "Only actual injuries",
        "Near-miss incidents",
        "Nothing",
        "Only major issues"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Near-miss reporting prevents future incidents through proactive measures.",
      module: 6
    },
    {
      id: 38,
      question: "What is professional conduct expectation?",
      options: [
        "Open all drawers",
        "Respect property and confidentiality",
        "Ignore schedules",
        "Arrive late"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Professional conduct builds trust necessary for building access.",
      module: 6
    },
    {
      id: 39,
      question: "What does successful composting need?",
      options: [
        "Only food waste",
        "Proper mix of greens and browns, moisture, aeration",
        "Only dry materials",
        "Only wet materials"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Proper balance creates efficient decomposition without odors.",
      module: 5
    },
    {
      id: 40,
      question: "What increases professional value?",
      options: [
        "Only doing basics",
        "Cross-training in specialized areas",
        "Avoiding new skills",
        "Only working alone"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Versatility through additional skills increases value to employers and clients.",
      module: 6
    }
  ]
};
