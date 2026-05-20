// quarry-operations-certificate.ts

export const quarryOperationsCertificate = {
  // COURSE METADATA & IDENTIFICATION
  id: "quarry-operations-certificate",
  title: "Quarry Operations (Certificate)",
  description: "Learn essential quarry operations including extraction methods, safety procedures, equipment handling, and environmental management for safe and efficient quarry operations.",
  duration: "6 weeks",
  timeCommitment: "5-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⛏️",
  badge: "Certificate",
  prerequisites: [],
  learningOutcomes: [
    "Understand quarry planning and site preparation",
    "Master basic extraction methods and techniques",
    "Operate quarry equipment safely",
    "Implement safety procedures and hazard identification",
    "Manage environmental impacts and compliance",
    "Apply basic quarry maintenance principles"
  ],

  // MODULE ARCHITECTURE - 6 COMPREHENSIVE MODULES
  modules: [
    {
      id: 1,
      title: "Introduction to Quarry Operations",
      content: `
## Understanding Quarry Basics

A quarry is a type of open-pit mine where rocks, sand, gravel, or minerals are extracted from the earth. Quarry operations involve systematic extraction of materials for construction, road building, and other industrial uses.

### Types of Quarries

Different quarries extract different materials:
- **Stone Quarries**: Extract dimensional stone like granite, marble, limestone
- **Sand and Gravel Pits**: Extract loose materials for construction
- **Aggregate Quarries**: Produce crushed stone for concrete and asphalt
- **Dimension Stone Quarries**: Produce blocks for building and monuments
- **Industrial Mineral Quarries**: Extract minerals for industrial processes

Each type has specific extraction methods and equipment requirements.

### Quarry Life Cycle

Quarries follow a systematic development process:
1. **Exploration**: Finding suitable deposits through geological surveys
2. **Planning**: Designing the quarry layout and extraction sequence
3. **Development**: Preparing the site for operations
4. **Operation**: Active extraction of materials
5. **Reclamation**: Restoring the site after operations end

Understanding this cycle helps in planning efficient operations.

### Basic Quarry Layout

A typical quarry has several key areas:
- **Extraction Face**: Where material is removed from the ground
- **Processing Area**: Where extracted material is crushed and sorted
- **Stockpiles**: Storage areas for different material grades
- **Access Roads**: Roads for equipment and transportation
- **Office and Maintenance**: Administrative and equipment care areas

Proper layout ensures safe and efficient operations.

### Importance of Quarry Operations

Quarry materials are essential for:
- **Construction**: Concrete, asphalt, and building materials
- **Infrastructure**: Roads, bridges, and foundations
- **Manufacturing**: Industrial processes and products
- **Agriculture**: Lime for soil treatment
- **Environmental**: Water filtration and erosion control

Understanding this importance highlights the value of proper operations.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a quarry?",
          options: [
            "A deep underground mine",
            "An open-pit mine for extracting materials",
            "A manufacturing plant",
            "A construction site"
          ],
          correctAnswer: 1,
          explanation: "A quarry is a type of open-pit mine where rocks and minerals are extracted from the earth's surface."
        },
        {
          id: 2,
          question: "Which quarry extracts granite and marble?",
          options: [
            "Sand and Gravel Pit",
            "Stone Quarry",
            "Aggregate Quarry",
            "Industrial Mineral Quarry"
          ],
          correctAnswer: 1,
          explanation: "Stone quarries extract dimensional stone like granite, marble, and limestone for building and decoration."
        },
        {
          id: 3,
          question: "What is the first stage of quarry development?",
          options: [
            "Planning",
            "Exploration",
            "Operation",
            "Reclamation"
          ],
          correctAnswer: 1,
          explanation: "Exploration involves finding suitable deposits through geological surveys before any development begins."
        },
        {
          id: 4,
          question: "Where is material removed from the ground in a quarry?",
          options: [
            "Processing Area",
            "Extraction Face",
            "Stockpiles",
            "Access Roads"
          ],
          correctAnswer: 1,
          explanation: "The extraction face is where material is actually removed from the ground using various methods."
        },
        {
          id: 5,
          question: "What area stores different material grades?",
          options: [
            "Extraction Face",
            "Stockpiles",
            "Processing Area",
            "Office Area"
          ],
          correctAnswer: 1,
          explanation: "Stockpiles are designated areas where extracted materials are stored according to size and quality."
        },
        {
          id: 6,
          question: "Which quarry produces crushed stone for concrete?",
          options: [
            "Dimension Stone Quarry",
            "Aggregate Quarry",
            "Sand Pit",
            "Industrial Quarry"
          ],
          correctAnswer: 1,
          explanation: "Aggregate quarries produce crushed stone that is used in concrete, asphalt, and construction."
        },
        {
          id: 7,
          question: "What is the final stage of quarry development?",
          options: [
            "Operation",
            "Development",
            "Reclamation",
            "Exploration"
          ],
          correctAnswer: 2,
          explanation: "Reclamation involves restoring the site to a stable, productive condition after operations end."
        },
        {
          id: 8,
          question: "What area crushes and sorts extracted material?",
          options: [
            "Extraction Face",
            "Processing Area",
            "Stockpiles",
            "Access Roads"
          ],
          correctAnswer: 1,
          explanation: "The processing area is where extracted material is crushed, sorted, and prepared for use."
        },
        {
          id: 9,
          question: "How many stages are in the quarry life cycle?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five stages: exploration, planning, development, operation, and reclamation."
        },
        {
          id: 10,
          question: "What type of quarry extracts loose materials for construction?",
          options: [
            "Stone Quarry",
            "Sand and Gravel Pit",
            "Dimension Stone Quarry",
            "Industrial Quarry"
          ],
          correctAnswer: 1,
          explanation: "Sand and gravel pits extract loose materials that are used directly in construction without crushing."
        },
        {
          id: 11,
          question: "What is designed during the planning stage?",
          options: [
            "Equipment purchases",
            "Quarry layout and extraction sequence",
            "Employee schedules",
            "Market prices"
          ],
          correctAnswer: 1,
          explanation: "Planning involves designing how the quarry will be laid out and in what sequence materials will be extracted."
        },
        {
          id: 12,
          question: "Where are roads for equipment located?",
          options: [
            "Processing Area",
            "Access Roads",
            "Stockpiles",
            "Extraction Face"
          ],
          correctAnswer: 1,
          explanation: "Access roads allow equipment to move safely around the quarry site."
        },
        {
          id: 13,
          question: "What uses quarry materials for road building?",
          options: [
            "Construction",
            "Infrastructure",
            "Manufacturing",
            "Agriculture"
          ],
          correctAnswer: 1,
          explanation: "Infrastructure projects like roads and bridges use large quantities of quarry materials."
        },
        {
          id: 14,
          question: "Which quarry produces blocks for buildings?",
          options: [
            "Aggregate Quarry",
            "Dimension Stone Quarry",
            "Sand Pit",
            "Industrial Quarry"
          ],
          correctAnswer: 1,
          explanation: "Dimension stone quarries produce large blocks that are cut and finished for buildings and monuments."
        },
        {
          id: 15,
          question: "What stage involves active material extraction?",
          options: [
            "Development",
            "Operation",
            "Planning",
            "Reclamation"
          ],
          correctAnswer: 1,
          explanation: "Operation is when the quarry is actively extracting materials on a regular basis."
        },
        {
          id: 16,
          question: "What area includes administrative functions?",
          options: [
            "Extraction Face",
            "Office Area",
            "Processing Area",
            "Stockpiles"
          ],
          correctAnswer: 1,
          explanation: "The office area handles administrative tasks, safety management, and operational planning."
        },
        {
          id: 17,
          question: "How many types of quarries were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five types: stone quarries, sand and gravel pits, aggregate quarries, dimension stone quarries, industrial mineral quarries."
        },
        {
          id: 18,
          question: "What uses lime from quarries for soil treatment?",
          options: [
            "Construction",
            "Agriculture",
            "Manufacturing",
            "Environmental"
          ],
          correctAnswer: 1,
          explanation: "Agriculture uses lime from quarries to adjust soil pH and improve crop growth."
        },
        {
          id: 19,
          question: "What prepares the site for operations?",
          options: [
            "Exploration",
            "Development",
            "Operation",
            "Reclamation"
          ],
          correctAnswer: 1,
          explanation: "Development involves preparing the site by clearing vegetation, building access, and setting up facilities."
        },
        {
          id: 20,
          question: "What is essential for concrete production?",
          options: [
            "Quarry materials",
            "Manufactured plastics",
            "Agricultural products",
            "Recycled paper"
          ],
          correctAnswer: 0,
          explanation: "Quarry materials like aggregate and sand are essential components of concrete."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Extraction Methods",
      content: `
## Material Extraction Techniques

Extraction methods vary depending on the material type, geology, and quarry design. Understanding basic methods ensures efficient and safe material recovery.

### Drilling and Blasting

The most common method for hard rock quarries:
- **Drill Holes**: Holes are drilled in patterns in the rock face
- **Explosives Placement**: Explosives are placed in drilled holes
- **Blasting**: Controlled explosions break rock into manageable pieces
- **Fragmentation**: Rock breaks into sizes suitable for handling
- **Safety Zones**: Areas cleared before blasting for safety

Proper drilling and blasting requires careful planning and execution.

### Mechanical Extraction

Methods without explosives for softer materials:
- **Ripping**: Using heavy equipment to break up material
- **Digging**: Direct excavation with excavators and loaders
- **Scraping**: Using scrapers to remove surface materials
- **Dredging**: Extracting materials from underwater deposits
- **Continuous Mining**: Using specialized machines for constant extraction

Mechanical methods are often used where blasting isn't suitable.

### Bench Mining

Systematic extraction in horizontal layers:
- **Benches**: Horizontal steps cut into the quarry face
- **Bench Height**: Vertical distance between benches
- **Bench Width**: Working space on each bench
- **Berms**: Safety ledges at bench edges
- **Haul Roads**: Roads on benches for equipment access

Bench mining provides stability and safe working conditions.

### Material Handling Basics

Moving extracted materials efficiently:
- **Loading**: Using loaders to pick up broken material
- **Hauling**: Transporting material within the quarry
- **Dumping**: Placing material at processing or stockpile areas
- **Stockpiling**: Organized storage of different material types
- **Rehandling**: Moving material between stockpiles as needed

Efficient handling reduces costs and improves productivity.

### Extraction Planning

Planning for efficient material recovery:
- **Face Advancement**: How the extraction face moves forward
- **Sequence Planning**: Order of extracting different areas
- **Grade Control**: Separating different quality materials
- **Waste Management**: Handling non-valuable materials
- **Production Scheduling**: Planning extraction rates and timing

Good planning maximizes recovery and minimizes waste.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common method for hard rock quarries?",
          options: [
            "Ripping",
            "Drilling and Blasting",
            "Digging",
            "Dredging"
          ],
          correctAnswer: 1,
          explanation: "Drilling and blasting is the primary method for breaking hard rock in quarries."
        },
        {
          id: 2,
          question: "What are drilled in patterns before blasting?",
          options: [
            "Tunnels",
            "Drill Holes",
            "Drainage Channels",
            "Access Roads"
          ],
          correctAnswer: 1,
          explanation: "Drill holes are made in specific patterns to control how the rock will break during blasting."
        },
        {
          id: 3,
          question: "What method uses heavy equipment to break up material?",
          options: [
            "Blasting",
            "Ripping",
            "Dredging",
            "Bench Mining"
          ],
          correctAnswer: 1,
          explanation: "Ripping uses specialized equipment with teeth to break up softer rock without explosives."
        },
        {
          id: 4,
          question: "What extracts materials from underwater deposits?",
          options: [
            "Ripping",
            "Dredging",
            "Digging",
            "Scraping"
          ],
          correctAnswer: 1,
          explanation: "Dredging involves removing material from underwater using floating equipment."
        },
        {
          id: 5,
          question: "What are horizontal steps cut into the quarry face?",
          options: [
            "Haul Roads",
            "Benches",
            "Berms",
            "Stockpiles"
          ],
          correctAnswer: 1,
          explanation: "Benches are horizontal working levels that provide stability and safe access."
        },
        {
          id: 6,
          question: "What is the vertical distance between benches?",
          options: [
            "Bench Width",
            "Bench Height",
            "Berm Width",
            "Face Angle"
          ],
          correctAnswer: 1,
          explanation: "Bench height is carefully planned based on equipment capabilities and safety requirements."
        },
        {
          id: 7,
          question: "What are safety ledges at bench edges?",
          options: [
            "Haul Roads",
            "Berms",
            "Stockpiles",
            "Access Points"
          ],
          correctAnswer: 1,
          explanation: "Berms are safety features that prevent equipment from accidentally driving over bench edges."
        },
        {
          id: 8,
          question: "What uses loaders to pick up broken material?",
          options: [
            "Hauling",
            "Loading",
            "Dumping",
            "Stockpiling"
          ],
          correctAnswer: 1,
          explanation: "Loading involves using front-end loaders or excavators to load broken material into trucks."
        },
        {
          id: 9,
          question: "What transports material within the quarry?",
          options: [
            "Loading",
            "Hauling",
            "Dumping",
            "Rehandling"
          ],
          correctAnswer: 1,
          explanation: "Hauling moves material from extraction faces to processing areas or stockpiles."
        },
        {
          id: 10,
          question: "What involves organized storage of materials?",
          options: [
            "Hauling",
            "Stockpiling",
            "Loading",
            "Dumping"
          ],
          correctAnswer: 1,
          explanation: "Stockpiling organizes materials by type and quality for efficient management and dispatch."
        },
        {
          id: 11,
          question: "How does the extraction face move forward?",
          options: [
            "Sequence Planning",
            "Face Advancement",
            "Grade Control",
            "Production Scheduling"
          ],
          correctAnswer: 1,
          explanation: "Face advancement plans how the working face will progress through the deposit."
        },
        {
          id: 12,
          question: "What separates different quality materials?",
          options: [
            "Waste Management",
            "Grade Control",
            "Face Advancement",
            "Sequence Planning"
          ],
          correctAnswer: 1,
          explanation: "Grade control ensures different quality materials are kept separate for optimal use."
        },
        {
          id: 13,
          question: "What handles non-valuable materials?",
          options: [
            "Grade Control",
            "Waste Management",
            "Production Scheduling",
            "Face Advancement"
          ],
          correctAnswer: 1,
          explanation: "Waste management deals with materials that are not economically valuable."
        },
        {
          id: 14,
          question: "What plans extraction rates and timing?",
          options: [
            "Waste Management",
            "Production Scheduling",
            "Grade Control",
            "Sequence Planning"
          ],
          correctAnswer: 1,
          explanation: "Production scheduling plans how much material will be extracted and when."
        },
        {
          id: 15,
          question: "What method uses direct excavation with excavators?",
          options: [
            "Ripping",
            "Digging",
            "Scraping",
            "Dredging"
          ],
          correctAnswer: 1,
          explanation: "Digging involves direct excavation using hydraulic excavators or similar equipment."
        },
        {
          id: 16,
          question: "What uses scrapers to remove surface materials?",
          options: [
            "Digging",
            "Scraping",
            "Dredging",
            "Ripping"
          ],
          correctAnswer: 1,
          explanation: "Scraping uses earth-moving equipment to scrape and collect surface materials."
        },
        {
          id: 17,
          question: "What is the working space on each bench?",
          options: [
            "Bench Height",
            "Bench Width",
            "Berm Width",
            "Face Length"
          ],
          correctAnswer: 1,
          explanation: "Bench width must be sufficient for safe equipment operation and material handling."
        },
        {
          id: 18,
          question: "What places material at processing areas?",
          options: [
            "Loading",
            "Dumping",
            "Hauling",
            "Stockpiling"
          ],
          correctAnswer: 1,
          explanation: "Dumping involves placing material at designated areas for processing or storage."
        },
        {
          id: 19,
          question: "What moves material between stockpiles?",
          options: [
            "Loading",
            "Rehandling",
            "Hauling",
            "Dumping"
          ],
          correctAnswer: 1,
          explanation: "Rehandling moves materials between different storage locations as needed."
        },
        {
          id: 20,
          question: "How many basic extraction methods were specifically discussed?",
          options: [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "Three main methods: drilling and blasting, mechanical extraction, and bench mining."
        }
      ]
    },
    {
      id: 3,
      title: "Quarry Equipment Basics",
      content: `
## Essential Quarry Machinery

Understanding basic quarry equipment is essential for safe and efficient operations. Each piece of equipment has specific purposes and operating requirements.

### Drilling Equipment

Machines used to create holes for blasting:
- **Drill Rigs**: Mount drilling equipment on platforms
- **Drill Bits**: Cutting tools that make holes in rock
- **Compressors**: Provide air for drilling operations
- **Drill Rods**: Connect drill bits to drilling machinery
- **Dust Control**: Systems to manage drilling dust

Proper drilling equipment ensures accurate hole placement and efficient blasting.

### Loading Equipment

Machines that load broken material:
- **Front-end Loaders**: Wheeled machines with front buckets
- **Hydraulic Excavators**: Tracked machines with digging arms
- **Backhoe Loaders**: Combined digging and loading capability
- **Wheel Loaders**: Similar to front-end loaders but larger
- **Shovels**: Very large loading equipment for big operations

Loading equipment must match material characteristics and production needs.

### Hauling Equipment

Vehicles that transport materials:
- **Dump Trucks**: Off-road trucks for quarry hauling
- **Articulated Trucks**: Flexible trucks for rough terrain
- **Conveyors**: Belt systems for continuous transport
- **Haul Roads**: Specially designed roads for haul trucks
- **Truck Scales**: Weigh materials for production tracking

Efficient hauling reduces cycle times and increases productivity.

### Processing Equipment

Machines that prepare materials for use:
- **Primary Crushers**: First stage of size reduction
- **Secondary Crushers**: Further reduce material size
- **Screens**: Separate materials by size
- **Conveyors**: Move materials between processing stages
- **Washing Plants**: Clean materials when needed

Processing equipment transforms raw material into usable products.

### Support Equipment

Equipment that supports quarry operations:
- **Dozers**: Clear areas and maintain haul roads
- **Graders**: Level and maintain road surfaces
- **Water Trucks**: Control dust on roads and work areas
- **Service Trucks**: Provide maintenance and repairs
- **Survey Equipment**: Measure quarry dimensions and volumes

Support equipment maintains safe and efficient operations.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What mounts drilling equipment on platforms?",
          options: [
            "Drill Bits",
            "Drill Rigs",
            "Compressors",
            "Drill Rods"
          ],
          correctAnswer: 1,
          explanation: "Drill rigs provide stable platforms for drilling equipment to operate effectively."
        },
        {
          id: 2,
          question: "What are cutting tools that make holes in rock?",
          options: [
            "Drill Rigs",
            "Drill Bits",
            "Drill Rods",
            "Compressors"
          ],
          correctAnswer: 1,
          explanation: "Drill bits are the cutting components that actually penetrate and break the rock."
        },
        {
          id: 3,
          question: "What provides air for drilling operations?",
          options: [
            "Drill Bits",
            "Compressors",
            "Dust Control",
            "Drill Rods"
          ],
          correctAnswer: 1,
          explanation: "Compressors provide compressed air that powers drilling and removes drill cuttings."
        },
        {
          id: 4,
          question: "What are wheeled machines with front buckets?",
          options: [
            "Hydraulic Excavators",
            "Front-end Loaders",
            "Backhoe Loaders",
            "Wheel Loaders"
          ],
          correctAnswer: 1,
          explanation: "Front-end loaders are versatile machines for loading and material handling."
        },
        {
          id: 5,
          question: "What are tracked machines with digging arms?",
          options: [
            "Front-end Loaders",
            "Hydraulic Excavators",
            "Shovels",
            "Backhoe Loaders"
          ],
          correctAnswer: 1,
          explanation: "Hydraulic excavators provide powerful digging and loading capabilities on tracks for stability."
        },
        {
          id: 6,
          question: "What are off-road trucks for quarry hauling?",
          options: [
            "Articulated Trucks",
            "Dump Trucks",
            "Conveyors",
            "Service Trucks"
          ],
          correctAnswer: 1,
          explanation: "Dump trucks are heavy-duty vehicles designed for hauling large loads in quarry conditions."
        },
        {
          id: 7,
          question: "What are flexible trucks for rough terrain?",
          options: [
            "Dump Trucks",
            "Articulated Trucks",
            "Water Trucks",
            "Service Trucks"
          ],
          correctAnswer: 1,
          explanation: "Articulated trucks have flexible joints that allow better maneuverability on uneven ground."
        },
        {
          id: 8,
          question: "What are belt systems for continuous transport?",
          options: [
            "Haul Roads",
            "Conveyors",
            "Truck Scales",
            "Dump Trucks"
          ],
          correctAnswer: 1,
          explanation: "Conveyors provide continuous material transport, often more efficient than trucks for fixed routes."
        },
        {
          id: 9,
          question: "What is the first stage of size reduction?",
          options: [
            "Secondary Crushers",
            "Primary Crushers",
            "Screens",
            "Washing Plants"
          ],
          correctAnswer: 1,
          explanation: "Primary crushers handle the initial reduction of large quarry-run material."
        },
        {
          id: 10,
          question: "What further reduces material size?",
          options: [
            "Primary Crushers",
            "Secondary Crushers",
            "Conveyors",
            "Screens"
          ],
          correctAnswer: 1,
          explanation: "Secondary crushers further reduce material size after primary crushing."
        },
        {
          id: 11,
          question: "What separates materials by size?",
          options: [
            "Crushers",
            "Screens",
            "Conveyors",
            "Washing Plants"
          ],
          correctAnswer: 1,
          explanation: "Screens sort crushed material into different size categories for various uses."
        },
        {
          id: 12,
          question: "What clears areas and maintains haul roads?",
          options: [
            "Graders",
            "Dozers",
            "Water Trucks",
            "Service Trucks"
          ],
          correctAnswer: 1,
          explanation: "Dozers are powerful machines for clearing, leveling, and maintaining quarry areas."
        },
        {
          id: 13,
          question: "What levels and maintains road surfaces?",
          options: [
            "Dozers",
            "Graders",
            "Water Trucks",
            "Excavators"
          ],
          correctAnswer: 1,
          explanation: "Graders create smooth, properly sloped road surfaces for safe haul truck operation."
        },
        {
          id: 14,
          question: "What controls dust on roads and work areas?",
          options: [
            "Service Trucks",
            "Water Trucks",
            "Dozers",
            "Graders"
          ],
          correctAnswer: 1,
          explanation: "Water trucks spray water to control dust, improving visibility and air quality."
        },
        {
          id: 15,
          question: "What provides maintenance and repairs?",
          options: [
            "Water Trucks",
            "Service Trucks",
            "Dump Trucks",
            "Loaders"
          ],
          correctAnswer: 1,
          explanation: "Service trucks carry tools, parts, and mechanics to maintain equipment on site."
        },
        {
          id: 16,
          question: "What connects drill bits to drilling machinery?",
          options: [
            "Compressors",
            "Drill Rods",
            "Drill Rigs",
            "Dust Control"
          ],
          correctAnswer: 1,
          explanation: "Drill rods transmit power from the drill rig to the drill bit at the bottom of the hole."
        },
        {
          id: 17,
          question: "What manages drilling dust?",
          options: [
            "Drill Rods",
            "Dust Control",
            "Compressors",
            "Drill Rigs"
          ],
          correctAnswer: 1,
          explanation: "Dust control systems protect workers and equipment from harmful drilling dust."
        },
        {
          id: 18,
          question: "What cleans materials when needed?",
          options: [
            "Screens",
            "Washing Plants",
            "Crushers",
            "Conveyors"
          ],
          correctAnswer: 1,
          explanation: "Washing plants remove clay, dirt, and other contaminants from quarry materials."
        },
        {
          id: 19,
          question: "What measures quarry dimensions and volumes?",
          options: [
            "Processing Equipment",
            "Survey Equipment",
            "Loading Equipment",
            "Hauling Equipment"
          ],
          correctAnswer: 1,
          explanation: "Survey equipment measures quarry progress, volumes extracted, and ensures proper design."
        },
        {
          id: 20,
          question: "How many equipment categories were specifically discussed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five categories: drilling, loading, hauling, processing, and support equipment."
        }
      ]
    },
    {
      id: 4,
      title: "Safety Fundamentals",
      content: `
## Quarry Safety Essentials

Safety is the most important aspect of quarry operations. Understanding and implementing safety fundamentals protects workers, equipment, and the environment.

### Personal Protective Equipment

Basic safety gear for all quarry workers:
- **Hard Hats**: Protect against falling objects
- **Safety Glasses**: Protect eyes from flying particles
- **Hearing Protection**: Prevent hearing damage from noise
- **High-Visibility Vests**: Make workers visible to equipment operators
- **Safety Boots**: Protect feet from heavy objects

Proper PPE is the first line of defense against workplace hazards.

### Hazard Identification

Recognizing potential dangers in quarries:
- **Falling Hazards**: From high walls or equipment
- **Slip and Trip Hazards**: Uneven ground or loose materials
- **Equipment Hazards**: Moving machinery and vehicles
- **Noise Hazards**: From drilling, crushing, and other operations
- **Dust Hazards**: From drilling, crushing, and material handling

Identifying hazards allows for proper control measures.

### Equipment Safety

Safe operation of quarry machinery:
- **Pre-start Checks**: Inspect equipment before operation
- **Safe Operating Procedures**: Follow manufacturer guidelines
- **Visibility Aids**: Use cameras, mirrors, and spotters
- **Communication Systems**: Radios and signals for coordination
- **Lock-out/Tag-out**: Secure equipment during maintenance

Equipment safety prevents accidents during operation and maintenance.

### Blasting Safety

Special safety considerations for blasting operations:
- **Exclusion Zones**: Areas cleared before blasting
- **Warning Signals**: Audible and visual warnings before blasts
- **Blast Timing**: Careful timing to ensure safety
- **Post-blast Inspection**: Check area before re-entry
- **Fly Rock Control**: Measures to prevent rock flying beyond quarry

Blasting requires strict safety protocols due to explosive materials.

### Emergency Procedures

Responding to accidents and emergencies:
- **First Aid Kits**: Readily available medical supplies
- **Emergency Communication**: Systems to call for help
- **Evacuation Routes**: Clear paths to safe areas
- **Fire Safety**: Equipment and procedures for fires
- **Rescue Equipment**: For confined space or height rescues

Being prepared for emergencies minimizes their impact.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What protects against falling objects?",
          options: [
            "Safety Glasses",
            "Hard Hats",
            "Hearing Protection",
            "Safety Boots"
          ],
          correctAnswer: 1,
          explanation: "Hard hats are essential for protecting heads from falling rocks or tools."
        },
        {
          id: 2,
          question: "What protects eyes from flying particles?",
          options: [
            "Hard Hats",
            "Safety Glasses",
            "High-Visibility Vests",
            "Safety Boots"
          ],
          correctAnswer: 1,
          explanation: "Safety glasses prevent eye injuries from dust, chips, and other flying particles."
        },
        {
          id: 3,
          question: "What prevents hearing damage from noise?",
          options: [
            "Safety Glasses",
            "Hearing Protection",
            "Hard Hats",
            "Safety Boots"
          ],
          correctAnswer: 1,
          explanation: "Hearing protection is crucial in noisy quarry environments to prevent permanent hearing loss."
        },
        {
          id: 4,
          question: "What makes workers visible to equipment operators?",
          options: [
            "Hearing Protection",
            "High-Visibility Vests",
            "Safety Boots",
            "Hard Hats"
          ],
          correctAnswer: 1,
          explanation: "High-visibility vests ensure workers are easily seen by equipment operators."
        },
        {
          id: 5,
          question: "What protects feet from heavy objects?",
          options: [
            "High-Visibility Vests",
            "Safety Boots",
            "Hard Hats",
            "Safety Glasses"
          ],
          correctAnswer: 1,
          explanation: "Safety boots with steel toes protect feet from crushing injuries."
        },
        {
          id: 6,
          question: "What are hazards from high walls or equipment?",
          options: [
            "Slip and Trip Hazards",
            "Falling Hazards",
            "Equipment Hazards",
            "Noise Hazards"
          ],
          correctAnswer: 1,
          explanation: "Falling hazards include rock falls from faces or objects dropped from equipment."
        },
        {
          id: 7,
          question: "What are hazards from uneven ground?",
          options: [
            "Falling Hazards",
            "Slip and Trip Hazards",
            "Dust Hazards",
            "Equipment Hazards"
          ],
          correctAnswer: 1,
          explanation: "Slip and trip hazards come from uneven surfaces, loose materials, or obstacles."
        },
        {
          id: 8,
          question: "What inspect equipment before operation?",
          options: [
            "Safe Operating Procedures",
            "Pre-start Checks",
            "Visibility Aids",
            "Communication Systems"
          ],
          correctAnswer: 1,
          explanation: "Pre-start checks identify equipment problems before they cause accidents."
        },
        {
          id: 9,
          question: "What follow manufacturer guidelines?",
          options: [
            "Pre-start Checks",
            "Safe Operating Procedures",
            "Lock-out/Tag-out",
            "Visibility Aids"
          ],
          correctAnswer: 1,
          explanation: "Safe operating procedures ensure equipment is used correctly and safely."
        },
        {
          id: 10,
          question: "What are areas cleared before blasting?",
          options: [
            "Warning Signals",
            "Exclusion Zones",
            "Blast Timing",
            "Post-blast Inspection"
          ],
          correctAnswer: 1,
          explanation: "Exclusion zones ensure no people or equipment are in danger during blasting."
        },
        {
          id: 11,
          question: "What provide audible and visual warnings?",
          options: [
            "Exclusion Zones",
            "Warning Signals",
            "Fly Rock Control",
            "Blast Timing"
          ],
          correctAnswer: 1,
          explanation: "Warning signals alert everyone that blasting is about to occur."
        },
        {
          id: 12,
          question: "What are readily available medical supplies?",
          options: [
            "Emergency Communication",
            "First Aid Kits",
            "Evacuation Routes",
            "Rescue Equipment"
          ],
          correctAnswer: 1,
          explanation: "First aid kits provide immediate medical care for injuries until professional help arrives."
        },
        {
          id: 13,
          question: "What are systems to call for help?",
          options: [
            "First Aid Kits",
            "Emergency Communication",
            "Fire Safety",
            "Evacuation Routes"
          ],
          correctAnswer: 1,
          explanation: "Emergency communication ensures quick response to accidents or emergencies."
        },
        {
          id: 14,
          question: "What are clear paths to safe areas?",
          options: [
            "Emergency Communication",
            "Evacuation Routes",
            "Rescue Equipment",
            "First Aid Kits"
          ],
          correctAnswer: 1,
          explanation: "Evacuation routes must be clearly marked and kept clear at all times."
        },
        {
          id: 15,
          question: "What are hazards from moving machinery?",
          options: [
            "Noise Hazards",
            "Equipment Hazards",
            "Dust Hazards",
            "Falling Hazards"
          ],
          correctAnswer: 1,
          explanation: "Equipment hazards include being struck by or caught in moving machinery."
        },
        {
          id: 16,
          question: "What use cameras, mirrors, and spotters?",
          options: [
            "Communication Systems",
            "Visibility Aids",
            "Lock-out/Tag-out",
            "Pre-start Checks"
          ],
          correctAnswer: 1,
          explanation: "Visibility aids help equipment operators see blind spots and avoid accidents."
        },
        {
          id: 17,
          question: "What secure equipment during maintenance?",
          options: [
            "Visibility Aids",
            "Lock-out/Tag-out",
            "Communication Systems",
            "Safe Operating Procedures"
          ],
          correctAnswer: 1,
          explanation: "Lock-out/tag-out procedures prevent accidental startup during maintenance."
        },
        {
          id: 18,
          question: "What check area before re-entry after blasting?",
          options: [
            "Warning Signals",
            "Post-blast Inspection",
            "Exclusion Zones",
            "Blast Timing"
          ],
          correctAnswer: 1,
          explanation: "Post-blast inspections ensure the area is safe before allowing workers to return."
        },
        {
          id: 19,
          question: "How many PPE items were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five PPE items: hard hats, safety glasses, hearing protection, high-visibility vests, safety boots."
        },
        {
          id: 20,
          question: "How many hazard types were specifically identified?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five hazard types: falling, slip/trip, equipment, noise, and dust hazards."
        }
      ]
    },
    {
      id: 5,
      title: "Environmental Considerations",
      content: `
## Sustainable Quarry Operations

Quarries must operate in an environmentally responsible manner. Understanding environmental considerations ensures operations minimize impacts and comply with regulations.

### Dust Management

Controlling dust from quarry operations:
- **Water Spraying**: Using water to suppress dust
- **Vegetation Barriers**: Planting trees to filter dust
- **Enclosures**: Covering processing areas
- **Speed Limits**: Reducing vehicle speeds to limit dust
- **Surface Treatment**: Treating roads and stockpiles

Effective dust management protects air quality and neighboring communities.

### Noise Control

Reducing noise impacts from operations:
- **Equipment Maintenance**: Keeping equipment quiet
- **Noise Barriers**: Building walls to block sound
- **Operating Hours**: Limiting noisy operations to certain times
- **Equipment Selection**: Choosing quieter equipment
- **Monitoring**: Regularly measuring noise levels

Noise control minimizes disturbance to nearby residents and wildlife.

### Water Management

Managing water use and quality:
- **Sediment Control**: Preventing soil from entering waterways
- **Water Recycling**: Reusing water in processing
- **Drainage Systems**: Proper drainage to prevent erosion
- **Spill Prevention**: Preventing fuel and oil spills
- **Water Treatment**: Treating water before discharge

Proper water management protects aquatic ecosystems and water resources.

### Biodiversity Protection

Protecting plants and animals around quarries:
- **Habitat Preservation**: Protecting sensitive areas
- **Species Surveys**: Identifying important species
- **Buffer Zones**: Creating protected areas around operations
- **Revegetation**: Planting native species during reclamation
- **Wildlife Corridors**: Maintaining animal movement paths

Biodiversity protection maintains ecological balance around quarry sites.

### Waste Management

Handling waste materials responsibly:
- **Reduce**: Minimizing waste generation
- **Reuse**: Finding uses for waste materials
- **Recycle**: Processing materials for other uses
- **Proper Disposal**: Safe disposal of hazardous materials
- **Record Keeping**: Tracking waste generation and disposal

Good waste management reduces environmental impacts and costs.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What uses water to suppress dust?",
          options: [
            "Vegetation Barriers",
            "Water Spraying",
            "Enclosures",
            "Speed Limits"
          ],
          correctAnswer: 1,
          explanation: "Water spraying is a common method to control dust from roads and work areas."
        },
        {
          id: 2,
          question: "What plants trees to filter dust?",
          options: [
            "Water Spraying",
            "Vegetation Barriers",
            "Surface Treatment",
            "Enclosures"
          ],
          correctAnswer: 1,
          explanation: "Vegetation barriers use trees and plants to capture dust particles from the air."
        },
        {
          id: 3,
          question: "What covers processing areas?",
          options: [
            "Vegetation Barriers",
            "Enclosures",
            "Speed Limits",
            "Surface Treatment"
          ],
          correctAnswer: 1,
          explanation: "Enclosures contain dust at source points like crushers and screens."
        },
        {
          id: 4,
          question: "What keeps equipment quiet?",
          options: [
            "Noise Barriers",
            "Equipment Maintenance",
            "Operating Hours",
            "Monitoring"
          ],
          correctAnswer: 1,
          explanation: "Regular maintenance keeps equipment operating quietly and efficiently."
        },
        {
          id: 5,
          question: "What builds walls to block sound?",
          options: [
            "Equipment Maintenance",
            "Noise Barriers",
            "Equipment Selection",
            "Monitoring"
          ],
          correctAnswer: 1,
          explanation: "Noise barriers physically block sound from traveling to sensitive areas."
        },
        {
          id: 6,
          question: "What prevents soil from entering waterways?",
          options: [
            "Water Recycling",
            "Sediment Control",
            "Drainage Systems",
            "Spill Prevention"
          ],
          correctAnswer: 1,
          explanation: "Sediment control measures prevent erosion and protect water quality."
        },
        {
          id: 7,
          question: "What reuses water in processing?",
          options: [
            "Sediment Control",
            "Water Recycling",
            "Water Treatment",
            "Drainage Systems"
          ],
          correctAnswer: 1,
          explanation: "Water recycling reduces fresh water use and minimizes discharge."
        },
        {
          id: 8,
          question: "What protects sensitive areas?",
          options: [
            "Species Surveys",
            "Habitat Preservation",
            "Buffer Zones",
            "Revegetation"
          ],
          correctAnswer: 1,
          explanation: "Habitat preservation avoids disturbing important ecological areas."
        },
        {
          id: 9,
          question: "What identifies important species?",
          options: [
            "Habitat Preservation",
            "Species Surveys",
            "Wildlife Corridors",
            "Buffer Zones"
          ],
          correctAnswer: 1,
          explanation: "Species surveys identify which plants and animals need special protection."
        },
        {
          id: 10,
          question: "What minimizes waste generation?",
          options: [
            "Reuse",
            "Reduce",
            "Recycle",
            "Proper Disposal"
          ],
          correctAnswer: 1,
          explanation: "Reducing waste at source is the most effective waste management strategy."
        },
        {
          id: 11,
          question: "What finds uses for waste materials?",
          options: [
            "Reduce",
            "Reuse",
            "Recycle",
            "Record Keeping"
          ],
          correctAnswer: 1,
          explanation: "Reusing materials avoids waste and can create additional value."
        },
        {
          id: 12,
          question: "What processes materials for other uses?",
          options: [
            "Reuse",
            "Recycle",
            "Proper Disposal",
            "Reduce"
          ],
          correctAnswer: 1,
          explanation: "Recycling processes waste materials into useful products."
        },
        {
          id: 13,
          question: "What reduces vehicle speeds to limit dust?",
          options: [
            "Enclosures",
            "Speed Limits",
            "Surface Treatment",
            "Water Spraying"
          ],
          correctAnswer: 1,
          explanation: "Speed limits on haul roads significantly reduce dust generation."
        },
        {
          id: 14,
          question: "What treats roads and stockpiles?",
          options: [
            "Speed Limits",
            "Surface Treatment",
            "Vegetation Barriers",
            "Enclosures"
          ],
          correctAnswer: 1,
          explanation: "Surface treatment with dust suppressants helps control dust from exposed areas."
        },
        {
          id: 15,
          question: "What limits noisy operations to certain times?",
          options: [
            "Noise Barriers",
            "Operating Hours",
            "Equipment Selection",
            "Monitoring"
          ],
          correctAnswer: 1,
          explanation: "Restricting noisy operations to daytime hours minimizes disturbance."
        },
        {
          id: 16,
          question: "What chooses quieter equipment?",
          options: [
            "Operating Hours",
            "Equipment Selection",
            "Monitoring",
            "Equipment Maintenance"
          ],
          correctAnswer: 1,
          explanation: "Selecting inherently quieter equipment reduces noise impacts."
        },
        {
          id: 17,
          question: "What creates protected areas around operations?",
          options: [
            "Habitat Preservation",
            "Buffer Zones",
            "Revegetation",
            "Wildlife Corridors"
          ],
          correctAnswer: 1,
          explanation: "Buffer zones separate quarry operations from sensitive environments."
        },
        {
          id: 18,
          question: "What plants native species during reclamation?",
          options: [
            "Buffer Zones",
            "Revegetation",
            "Wildlife Corridors",
            "Species Surveys"
          ],
          correctAnswer: 1,
          explanation: "Revegetation restores ecological function to disturbed areas."
        },
        {
          id: 19,
          question: "How many environmental management areas were discussed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five areas: dust management, noise control, water management, biodiversity protection, waste management."
        },
        {
          id: 20,
          question: "What is the first step in waste management hierarchy?",
          options: [
            "Reuse",
            "Reduce",
            "Recycle",
            "Dispose"
          ],
          correctAnswer: 1,
          explanation: "Reduce is the most preferred option in the waste management hierarchy."
        }
      ]
    },
    {
      id: 6,
      title: "Basic Maintenance Principles",
      content: `
## Equipment Care and Maintenance

Proper maintenance ensures equipment reliability, safety, and longevity. Basic maintenance principles help prevent breakdowns and extend equipment life.

### Preventive Maintenance

Scheduled maintenance to prevent failures:
- **Regular Inspections**: Checking equipment regularly
- **Scheduled Servicing**: Following manufacturer schedules
- **Lubrication**: Proper lubrication of moving parts
- **Filter Changes**: Replacing air, oil, and fuel filters
- **Component Checks**: Checking wear items regularly

Preventive maintenance catches problems before they cause breakdowns.

### Cleaning and Housekeeping

Keeping equipment and work areas clean:
- **Daily Cleaning**: Removing dirt and debris
- **Fluid Management**: Cleaning up spills immediately
- **Tool Organization**: Keeping tools in proper places
- **Debris Removal**: Clearing work areas regularly
- **Equipment Washing**: Regular washing to prevent corrosion

Good housekeeping improves safety and equipment performance.

### Basic Troubleshooting

Identifying and addressing common problems:
- **Unusual Sounds**: Listening for abnormal noises
- **Visual Inspections**: Looking for leaks or damage
- **Performance Issues**: Noticing changes in operation
- **Warning Lights**: Responding to equipment warnings
- **Operator Feedback**: Listening to operator concerns

Early problem identification prevents major repairs.

### Record Keeping

Documenting maintenance activities:
- **Service Records**: Recording all maintenance work
- **Parts Usage**: Tracking parts used in repairs
- **Hours Tracking**: Monitoring equipment operating hours
- **Problem History**: Documenting recurring issues
- **Warranty Information**: Keeping warranty documentation

Good records support efficient maintenance planning.

### Safety During Maintenance

Safe practices during maintenance work:
- **Lock-out/Tag-out**: Securing equipment before work
- **Proper Tools**: Using correct tools for each job
- **Personal Protection**: Wearing appropriate PPE
- **Clean Work Areas**: Maintaining tidy work spaces
- **Authorized Personnel**: Only trained personnel doing repairs

Safety during maintenance prevents accidents and injuries.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What checks equipment regularly?",
          options: [
            "Scheduled Servicing",
            "Regular Inspections",
            "Lubrication",
            "Filter Changes"
          ],
          correctAnswer: 1,
          explanation: "Regular inspections identify potential problems before they become serious."
        },
        {
          id: 2,
          question: "What follows manufacturer schedules?",
          options: [
            "Regular Inspections",
            "Scheduled Servicing",
            "Component Checks",
            "Lubrication"
          ],
          correctAnswer: 1,
          explanation: "Following manufacturer service schedules ensures equipment operates as designed."
        },
        {
          id: 3,
          question: "What provides proper lubrication of moving parts?",
          options: [
            "Scheduled Servicing",
            "Lubrication",
            "Filter Changes",
            "Component Checks"
          ],
          correctAnswer: 1,
          explanation: "Proper lubrication reduces wear and prevents equipment failures."
        },
        {
          id: 4,
          question: "What removes dirt and debris daily?",
          options: [
            "Fluid Management",
            "Daily Cleaning",
            "Tool Organization",
            "Equipment Washing"
          ],
          correctAnswer: 1,
          explanation: "Daily cleaning prevents buildup that can cause equipment problems."
        },
        {
          id: 5,
          question: "What cleans up spills immediately?",
          options: [
            "Daily Cleaning",
            "Fluid Management",
            "Debris Removal",
            "Tool Organization"
          ],
          correctAnswer: 1,
          explanation: "Immediate spill cleanup prevents safety hazards and equipment damage."
        },
        {
          id: 6,
          question: "What listens for abnormal noises?",
          options: [
            "Visual Inspections",
            "Unusual Sounds",
            "Performance Issues",
            "Warning Lights"
          ],
          correctAnswer: 1,
          explanation: "Unusual sounds often indicate developing mechanical problems."
        },
        {
          id: 7,
          question: "What looks for leaks or damage?",
          options: [
            "Unusual Sounds",
            "Visual Inspections",
            "Operator Feedback",
            "Performance Issues"
          ],
          correctAnswer: 1,
          explanation: "Visual inspections can identify problems before they cause equipment failure."
        },
        {
          id: 8,
          question: "What records all maintenance work?",
          options: [
            "Parts Usage",
            "Service Records",
            "Hours Tracking",
            "Problem History"
          ],
          correctAnswer: 1,
          explanation: "Service records provide history for future maintenance decisions."
        },
        {
          id: 9,
          question: "What tracks parts used in repairs?",
          options: [
            "Service Records",
            "Parts Usage",
            "Warranty Information",
            "Hours Tracking"
          ],
          correctAnswer: 1,
          explanation: "Tracking parts usage helps with inventory management and cost control."
        },
        {
          id: 10,
          question: "What secures equipment before work?",
          options: [
            "Proper Tools",
            "Lock-out/Tag-out",
            "Personal Protection",
            "Clean Work Areas"
          ],
          correctAnswer: 1,
          explanation: "Lock-out/tag-out prevents accidental startup during maintenance."
        },
        {
          id: 11,
          question: "What uses correct tools for each job?",
          options: [
            "Lock-out/Tag-out",
            "Proper Tools",
            "Authorized Personnel",
            "Clean Work Areas"
          ],
          correctAnswer: 1,
          explanation: "Using proper tools prevents equipment damage and personal injury."
        },
        {
          id: 12,
          question: "What replaces air, oil, and fuel filters?",
          options: [
            "Lubrication",
            "Filter Changes",
            "Component Checks",
            "Regular Inspections"
          ],
          correctAnswer: 1,
          explanation: "Regular filter changes protect equipment from contamination."
        },
        {
          id: 13,
          question: "What checks wear items regularly?",
          options: [
            "Filter Changes",
            "Component Checks",
            "Lubrication",
            "Scheduled Servicing"
          ],
          correctAnswer: 1,
          explanation: "Checking wear items prevents unexpected equipment failures."
        },
        {
          id: 14,
          question: "What keeps tools in proper places?",
          options: [
            "Daily Cleaning",
            "Tool Organization",
            "Debris Removal",
            "Equipment Washing"
          ],
          correctAnswer: 1,
          explanation: "Tool organization improves efficiency and prevents lost tools."
        },
        {
          id: 15,
          question: "What clears work areas regularly?",
          options: [
            "Tool Organization",
            "Debris Removal",
            "Equipment Washing",
            "Fluid Management"
          ],
          correctAnswer: 1,
          explanation: "Removing debris prevents accidents and improves work efficiency."
        },
        {
          id: 16,
          question: "What notices changes in operation?",
          options: [
            "Unusual Sounds",
            "Performance Issues",
            "Warning Lights",
            "Visual Inspections"
          ],
          correctAnswer: 1,
          explanation: "Performance changes often indicate developing equipment problems."
        },
        {
          id: 17,
          question: "What responds to equipment warnings?",
          options: [
            "Performance Issues",
            "Warning Lights",
            "Operator Feedback",
            "Unusual Sounds"
          ],
          correctAnswer: 1,
          explanation: "Warning lights indicate specific problems that need immediate attention."
        },
        {
          id: 18,
          question: "What monitors equipment operating hours?",
          options: [
            "Service Records",
            "Hours Tracking",
            "Problem History",
            "Parts Usage"
          ],
          correctAnswer: 1,
          explanation: "Tracking operating hours helps schedule maintenance at proper intervals."
        },
        {
          id: 19,
          question: "How many preventive maintenance activities were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five activities: regular inspections, scheduled servicing, lubrication, filter changes, component checks."
        },
        {
          id: 20,
          question: "What is essential before starting any maintenance work?",
          options: [
            "Cleaning the equipment",
            "Lock-out/Tag-out",
            "Checking the weather",
            "Getting supervisor approval"
          ],
          correctAnswer: 1,
          explanation: "Lock-out/tag-out is the critical first step for safe maintenance work."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: {
    id: "quarry-operations-certificate-exam",
    title: "Quarry Operations Certificate Final Exam",
    description: "Comprehensive examination covering all 6 modules of the Quarry Operations Certificate course.",
    passingScore: 70,
    timeLimit: 60, // minutes
    questions: [
      {
        id: 1,
        question: "What is a quarry?",
        options: [
          "A deep underground mine",
          "An open-pit mine for extracting materials",
          "A manufacturing plant",
          "A construction site"
        ],
        correctAnswer: 1,
        explanation: "A quarry is a type of open-pit mine where rocks and minerals are extracted from the earth's surface.",
        module: 1
      },
      {
        id: 2,
        question: "What is the most common method for hard rock quarries?",
        options: [
          "Ripping",
          "Drilling and Blasting",
          "Digging",
          "Dredging"
        ],
        correctAnswer: 1,
        explanation: "Drilling and blasting is the primary method for breaking hard rock in quarries.",
        module: 2
      },
      {
        id: 3,
        question: "What mounts drilling equipment on platforms?",
        options: [
          "Drill Bits",
          "Drill Rigs",
          "Compressors",
          "Drill Rods"
        ],
        correctAnswer: 1,
        explanation: "Drill rigs provide stable platforms for drilling equipment to operate effectively.",
        module: 3
      },
      {
        id: 4,
        question: "What protects against falling objects?",
        options: [
          "Safety Glasses",
          "Hard Hats",
          "Hearing Protection",
          "Safety Boots"
        ],
        correctAnswer: 1,
        explanation: "Hard hats are essential for protecting heads from falling rocks or tools.",
        module: 4
      },
      {
        id: 5,
        question: "What uses water to suppress dust?",
        options: [
          "Vegetation Barriers",
          "Water Spraying",
          "Enclosures",
          "Speed Limits"
        ],
        correctAnswer: 1,
        explanation: "Water spraying is a common method to control dust from roads and work areas.",
        module: 5
      },
      {
        id: 6,
        question: "What checks equipment regularly?",
        options: [
          "Scheduled Servicing",
          "Regular Inspections",
          "Lubrication",
          "Filter Changes"
        ],
        correctAnswer: 1,
        explanation: "Regular inspections identify potential problems before they become serious.",
        module: 6
      },
      {
        id: 7,
        question: "Which quarry extracts granite and marble?",
        options: [
          "Sand and Gravel Pit",
          "Stone Quarry",
          "Aggregate Quarry",
          "Industrial Mineral Quarry"
        ],
        correctAnswer: 1,
        explanation: "Stone quarries extract dimensional stone like granite, marble, and limestone.",
        module: 1
      },
      {
        id: 8,
        question: "What are drilled in patterns before blasting?",
        options: [
          "Tunnels",
          "Drill Holes",
          "Drainage Channels",
          "Access Roads"
        ],
        correctAnswer: 1,
        explanation: "Drill holes are made in specific patterns to control rock breakage during blasting.",
        module: 2
      },
      {
        id: 9,
        question: "What are cutting tools that make holes in rock?",
        options: [
          "Drill Rigs",
          "Drill Bits",
          "Drill Rods",
          "Compressors"
        ],
        correctAnswer: 1,
        explanation: "Drill bits are the cutting components that actually penetrate and break the rock.",
        module: 3
      },
      {
        id: 10,
        question: "What protects eyes from flying particles?",
        options: [
          "Hard Hats",
          "Safety Glasses",
          "High-Visibility Vests",
          "Safety Boots"
        ],
        correctAnswer: 1,
        explanation: "Safety glasses prevent eye injuries from dust, chips, and other flying particles.",
        module: 4
      },
      {
        id: 11,
        question: "What plants trees to filter dust?",
        options: [
          "Water Spraying",
          "Vegetation Barriers",
          "Surface Treatment",
          "Enclosures"
        ],
        correctAnswer: 1,
        explanation: "Vegetation barriers use trees and plants to capture dust particles from the air.",
        module: 5
      },
      {
        id: 12,
        question: "What follows manufacturer schedules?",
        options: [
          "Regular Inspections",
          "Scheduled Servicing",
          "Component Checks",
          "Lubrication"
        ],
        correctAnswer: 1,
        explanation: "Following manufacturer service schedules ensures equipment operates as designed.",
        module: 6
      },
      {
        id: 13,
        question: "What is the first stage of quarry development?",
        options: [
          "Planning",
          "Exploration",
          "Operation",
          "Reclamation"
        ],
        correctAnswer: 1,
        explanation: "Exploration involves finding suitable deposits through geological surveys.",
        module: 1
      },
      {
        id: 14,
        question: "What method uses heavy equipment to break up material?",
        options: [
          "Blasting",
          "Ripping",
          "Dredging",
          "Bench Mining"
        ],
        correctAnswer: 1,
        explanation: "Ripping uses specialized equipment with teeth to break up softer rock.",
        module: 2
      },
      {
        id: 15,
        question: "What provides air for drilling operations?",
        options: [
          "Drill Bits",
          "Compressors",
          "Dust Control",
          "Drill Rods"
        ],
        correctAnswer: 1,
        explanation: "Compressors provide compressed air that powers drilling and removes cuttings.",
        module: 3
      },
      {
        id: 16,
        question: "What prevents hearing damage from noise?",
        options: [
          "Safety Glasses",
          "Hearing Protection",
          "Hard Hats",
          "Safety Boots"
        ],
        correctAnswer: 1,
        explanation: "Hearing protection is crucial in noisy quarry environments.",
        module: 4
      },
      {
        id: 17,
        question: "What covers processing areas?",
        options: [
          "Vegetation Barriers",
          "Enclosures",
          "Speed Limits",
          "Surface Treatment"
        ],
        correctAnswer: 1,
        explanation: "Enclosures contain dust at source points like crushers and screens.",
        module: 5
      },
      {
        id: 18,
        question: "What provides proper lubrication of moving parts?",
        options: [
          "Scheduled Servicing",
          "Lubrication",
          "Filter Changes",
          "Component Checks"
        ],
        correctAnswer: 1,
        explanation: "Proper lubrication reduces wear and prevents equipment failures.",
        module: 6
      },
      {
        id: 19,
        question: "Where is material removed from the ground in a quarry?",
        options: [
          "Processing Area",
          "Extraction Face",
          "Stockpiles",
          "Access Roads"
        ],
        correctAnswer: 1,
        explanation: "The extraction face is where material is actually removed from the ground.",
        module: 1
      },
      {
        id: 20,
        question: "What are horizontal steps cut into the quarry face?",
        options: [
          "Haul Roads",
          "Benches",
          "Berms",
          "Stockpiles"
        ],
        correctAnswer: 1,
        explanation: "Benches are horizontal working levels that provide stability and safe access.",
        module: 2
      },
      {
        id: 21,
        question: "What are wheeled machines with front buckets?",
        options: [
          "Hydraulic Excavators",
          "Front-end Loaders",
          "Backhoe Loaders",
          "Wheel Loaders"
        ],
        correctAnswer: 1,
        explanation: "Front-end loaders are versatile machines for loading and material handling.",
        module: 3
      },
      {
        id: 22,
        question: "What makes workers visible to equipment operators?",
        options: [
          "Hearing Protection",
          "High-Visibility Vests",
          "Safety Boots",
          "Hard Hats"
        ],
        correctAnswer: 1,
        explanation: "High-visibility vests ensure workers are easily seen by equipment operators.",
        module: 4
      },
      {
        id: 23,
        question: "What keeps equipment quiet?",
        options: [
          "Noise Barriers",
          "Equipment Maintenance",
          "Operating Hours",
          "Monitoring"
        ],
        correctAnswer: 1,
        explanation: "Regular maintenance keeps equipment operating quietly and efficiently.",
        module: 5
      },
      {
        id: 24,
        question: "What removes dirt and debris daily?",
        options: [
          "Fluid Management",
          "Daily Cleaning",
          "Tool Organization",
          "Equipment Washing"
        ],
        correctAnswer: 1,
        explanation: "Daily cleaning prevents buildup that can cause equipment problems.",
        module: 6
      },
      {
        id: 25,
        question: "What area stores different material grades?",
        options: [
          "Extraction Face",
          "Stockpiles",
          "Processing Area",
          "Office Area"
        ],
        correctAnswer: 1,
        explanation: "Stockpiles are designated areas where materials are stored by size and quality.",
        module: 1
      },
      {
        id: 26,
        question: "What is the vertical distance between benches?",
        options: [
          "Bench Width",
          "Bench Height",
          "Berm Width",
          "Face Angle"
        ],
        correctAnswer: 1,
        explanation: "Bench height is carefully planned based on equipment and safety requirements.",
        module: 2
      },
      {
        id: 27,
        question: "What are off-road trucks for quarry hauling?",
        options: [
          "Articulated Trucks",
          "Dump Trucks",
          "Conveyors",
          "Service Trucks"
        ],
        correctAnswer: 1,
        explanation: "Dump trucks are heavy-duty vehicles designed for hauling large loads.",
        module: 3
      },
      {
        id: 28,
        question: "What protects feet from heavy objects?",
        options: [
          "High-Visibility Vests",
          "Safety Boots",
          "Hard Hats",
          "Safety Glasses"
        ],
        correctAnswer: 1,
        explanation: "Safety boots with steel toes protect feet from crushing injuries.",
        module: 4
      },
      {
        id: 29,
        question: "What prevents soil from entering waterways?",
        options: [
          "Water Recycling",
          "Sediment Control",
          "Drainage Systems",
          "Spill Prevention"
        ],
        correctAnswer: 1,
        explanation: "Sediment control measures prevent erosion and protect water quality.",
        module: 5
      },
      {
        id: 30,
        question: "What listens for abnormal noises?",
        options: [
          "Visual Inspections",
          "Unusual Sounds",
          "Performance Issues",
          "Warning Lights"
        ],
        correctAnswer: 1,
        explanation: "Unusual sounds often indicate developing mechanical problems.",
        module: 6
      },
      {
        id: 31,
        question: "Which quarry produces crushed stone for concrete?",
        options: [
          "Dimension Stone Quarry",
          "Aggregate Quarry",
          "Sand Pit",
          "Industrial Quarry"
        ],
        correctAnswer: 1,
        explanation: "Aggregate quarries produce crushed stone used in concrete and construction.",
        module: 1
      },
      {
        id: 32,
        question: "What are safety ledges at bench edges?",
        options: [
          "Haul Roads",
          "Berms",
          "Stockpiles",
          "Access Points"
        ],
        correctAnswer: 1,
        explanation: "Berms are safety features that prevent equipment from driving over edges.",
        module: 2
      },
      {
        id: 33,
        question: "What is the first stage of size reduction?",
        options: [
          "Secondary Crushers",
          "Primary Crushers",
          "Screens",
          "Washing Plants"
        ],
        correctAnswer: 1,
        explanation: "Primary crushers handle initial reduction of large quarry-run material.",
        module: 3
      },
      {
        id: 34,
        question: "What are areas cleared before blasting?",
        options: [
          "Warning Signals",
          "Exclusion Zones",
          "Blast Timing",
          "Post-blast Inspection"
        ],
        correctAnswer: 1,
        explanation: "Exclusion zones ensure no people or equipment are in danger during blasting.",
        module: 4
      },
      {
        id: 35,
        question: "What reuses water in processing?",
        options: [
          "Sediment Control",
          "Water Recycling",
          "Water Treatment",
          "Drainage Systems"
        ],
        correctAnswer: 1,
        explanation: "Water recycling reduces fresh water use and minimizes discharge.",
        module: 5
      },
      {
        id: 36,
        question: "What records all maintenance work?",
        options: [
          "Parts Usage",
          "Service Records",
          "Hours Tracking",
          "Problem History"
        ],
        correctAnswer: 1,
        explanation: "Service records provide history for future maintenance decisions.",
        module: 6
      },
      {
        id: 37,
        question: "What is the final stage of quarry development?",
        options: [
          "Operation",
          "Development",
          "Reclamation",
          "Exploration"
        ],
        correctAnswer: 2,
        explanation: "Reclamation involves restoring the site after operations end.",
        module: 1
      },
      {
        id: 38,
        question: "What uses loaders to pick up broken material?",
        options: [
          "Hauling",
          "Loading",
          "Dumping",
          "Stockpiling"
        ],
        correctAnswer: 1,
        explanation: "Loading involves using loaders to load broken material into trucks.",
        module: 2
      },
      {
        id: 39,
        question: "What secures equipment before maintenance?",
        options: [
          "Proper Tools",
          "Lock-out/Tag-out",
          "Personal Protection",
          "Clean Work Areas"
        ],
        correctAnswer: 1,
        explanation: "Lock-out/tag-out prevents accidental startup during maintenance.",
        module: 4
      },
      {
        id: 40,
        question: "What minimizes waste generation?",
        options: [
          "Reuse",
          "Reduce",
          "Recycle",
          "Proper Disposal"
        ],
        correctAnswer: 1,
        explanation: "Reducing waste at source is the most effective waste management strategy.",
        module: 5
      }
    ]
  }
};

export default quarryOperationsCertificate;
