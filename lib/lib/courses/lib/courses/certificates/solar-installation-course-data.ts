export const solarInstallationCertificateCourse = {
  id: "solar-installation-certificate",
  title: "Solar Installation (Certificate)",
  description: "Learn the fundamentals of solar energy systems installation. This course covers basic solar concepts, safety procedures, system components, installation techniques, and maintenance practices for residential and small commercial systems.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "☀️",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Solar Energy Fundamentals",
      content: `
# Understanding Solar Power Basics

Solar energy comes from the sun and can be converted into electricity we can use in our homes and businesses. Think of it like having your own personal power plant on your roof that runs on sunlight instead of fuel.

## How Solar Energy Works

Solar panels work through a simple process:
1. **Sunlight hits the panels** - Solar cells absorb sunlight
2. **Energy conversion happens** - Sunlight energy becomes electrical energy
3. **Electricity flows** - Power moves through wires to your home
4. **Excess power storage** - Extra electricity can be stored or sent back to the grid

## Types of Solar Systems

Different solar setups for different needs:
- **Grid-Tied Systems** - Connected to the main power grid
- **Off-Grid Systems** - Completely independent from the grid
- **Hybrid Systems** - Combine solar with battery storage and grid connection
- **Solar Water Heating** - Uses sun to heat water directly

## Basic Solar Components

Every solar system has these main parts:
- **Solar Panels** - Capture sunlight and make electricity
- **Inverter** - Changes solar electricity to usable home electricity
- **Mounting System** - Holds panels securely in place
- **Wiring and Connectors** - Moves electricity safely
- **Monitoring System** - Shows how much power you're making

## Solar Energy Benefits

Why people choose solar power:
- **Cost Savings** - Reduces electricity bills
- **Clean Energy** - No pollution from energy production
- **Energy Independence** - Less reliance on utility companies
- **Property Value** - Can increase home value
- **Reliable Power** - Works during grid outages (with batteries)

## Understanding Sun Exposure

Solar panels need good sun access:
- **South-facing** - Best direction in northern hemisphere
- **Tilt Angle** - Should match your latitude for best year-round performance
- **Shading Avoidance** - Keep panels free from tree or building shadows
- **Roof Condition** - Roof should be in good shape before installation
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is solar energy?",
          options: [
            "Energy from wind",
            "Energy from the sun",
            "Energy from water",
            "Energy from coal"
          ],
          correctAnswer: 1,
          explanation: "Solar energy comes directly from sunlight that reaches the Earth."
        },
        {
          id: 2,
          question: "What is the first step in how solar panels work?",
          options: [
            "Electricity flows to home",
            "Sunlight hits the panels",
            "Energy conversion happens",
            "Excess power is stored"
          ],
          correctAnswer: 1,
          explanation: "The process begins when sunlight reaches and is absorbed by the solar panels."
        },
        {
          id: 3,
          question: "How many main types of solar systems are there?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four main types: Grid-tied, off-grid, hybrid, and solar water heating systems."
        },
        {
          id: 4,
          question: "What system is connected to the main power grid?",
          options: [
            "Off-Grid System",
            "Grid-Tied System",
            "Hybrid System",
            "Water Heating System"
          ],
          correctAnswer: 1,
          explanation: "Grid-tied systems connect to the utility power grid for backup and net metering."
        },
        {
          id: 5,
          question: "What part captures sunlight and makes electricity?",
          options: ["Inverter", "Solar Panels", "Mounting System", "Wiring"],
          correctAnswer: 1,
          explanation: "Solar panels contain cells that convert sunlight directly into electrical energy."
        },
        {
          id: 6,
          question: "What changes solar electricity to home electricity?",
          options: ["Solar Panels", "Inverter", "Mounting", "Monitoring"],
          correctAnswer: 1,
          explanation: "The inverter converts DC electricity from panels to AC electricity for home use."
        },
        {
          id: 7,
          question: "What is a benefit of solar energy?",
          options: [
            "Higher electricity bills",
            "Cost savings on electricity",
            "More pollution",
            "Less reliable power"
          ],
          correctAnswer: 1,
          explanation: "Solar energy reduces electricity costs by generating free power from sunlight."
        },
        {
          id: 8,
          question: "What direction is best for solar panels in northern hemisphere?",
          options: ["North", "South", "East", "West"],
          correctAnswer: 1,
          explanation: "South-facing orientation captures the most sunlight throughout the day in northern locations."
        },
        {
          id: 9,
          question: "What shows how much power you're making?",
          options: ["Inverter", "Mounting System", "Monitoring System", "Wiring"],
          correctAnswer: 2,
          explanation: "Monitoring systems track and display solar energy production in real time."
        },
        {
          id: 10,
          question: "What type of system is completely independent?",
          options: [
            "Grid-Tied System",
            "Off-Grid System",
            "Hybrid System",
            "Water Heating System"
          ],
          correctAnswer: 1,
          explanation: "Off-grid systems operate independently without connection to utility power."
        },
        {
          id: 11,
          question: "What holds panels securely in place?",
          options: ["Inverter", "Solar Panels", "Mounting System", "Monitoring"],
          correctAnswer: 2,
          explanation: "Mounting systems provide secure attachment to roofs or ground structures."
        },
        {
          id: 12,
          question: "What benefit means less reliance on utilities?",
          options: [
            "Cost Savings",
            "Clean Energy",
            "Energy Independence",
            "Property Value"
          ],
          correctAnswer: 2,
          explanation: "Energy independence reduces dependence on utility companies for power."
        },
        {
          id: 13,
          question: "What should panels be free from?",
          options: [
            "Rain",
            "Wind",
            "Shadows from trees or buildings",
            "Birds"
          ],
          correctAnswer: 2,
          explanation: "Shading significantly reduces solar panel efficiency and should be avoided."
        },
        {
          id: 14,
          question: "What type combines solar with battery storage?",
          options: [
            "Grid-Tied System",
            "Off-Grid System",
            "Hybrid System",
            "Water Heating System"
          ],
          correctAnswer: 2,
          explanation: "Hybrid systems include solar panels, batteries, and often grid connection."
        },
        {
          id: 15,
          question: "What moves electricity safely?",
          options: ["Solar Panels", "Inverter", "Wiring and Connectors", "Mounting"],
          correctAnswer: 2,
          explanation: "Proper wiring and connectors safely conduct electricity from panels to home."
        },
        {
          id: 16,
          question: "What benefit means no pollution from energy?",
          options: [
            "Cost Savings",
            "Clean Energy",
            "Energy Independence",
            "Reliable Power"
          ],
          correctAnswer: 1,
          explanation: "Clean energy production doesn't create air pollution or greenhouse gases."
        },
        {
          id: 17,
          question: "What should match your latitude?",
          options: [
            "Panel color",
            "Tilt angle",
            "Wiring size",
            "Inverter type"
          ],
          correctAnswer: 1,
          explanation: "Optimal tilt angle generally matches the location's latitude for year-round performance."
        },
        {
          id: 18,
          question: "What should be in good condition before installation?",
          options: [
            "Neighbor's house",
            "Your roof",
            "Utility poles",
            "Street"
          ],
          correctAnswer: 1,
          explanation: "The roof should be structurally sound and not need replacement soon."
        },
        {
          id: 19,
          question: "What system uses sun to heat water directly?",
          options: [
            "Grid-Tied System",
            "Off-Grid System",
            "Hybrid System",
            "Solar Water Heating"
          ],
          correctAnswer: 3,
          explanation: "Solar water heating systems use sunlight to directly heat water for home use."
        },
        {
          id: 20,
          question: "What can increase with solar installation?",
          options: [
            "Electricity bills",
            "Property value",
            "Maintenance costs",
            "Insurance costs"
          ],
          correctAnswer: 1,
          explanation: "Solar installations can increase home value by reducing future energy costs."
        }
      ]
    },
    {
      id: 2,
      title: "Solar System Components",
      content: `
# Understanding Solar Equipment

Solar installation requires specific equipment that works together to capture, convert, and deliver solar energy. Each component has an important role in the complete system.

## Solar Panels (Modules)

Panels are the most visible part of any solar system:
- **Monocrystalline Panels** - Most efficient, made from single silicon crystals
- **Polycrystalline Panels** - Good efficiency, made from multiple silicon fragments
- **Thin-Film Panels** - Flexible and lightweight but less efficient
- **Panel Ratings** - Measured in watts (W) indicating power output
- **Panel Dimensions** - Standard sizes for residential installation

## Inverters

Inverters convert solar electricity for home use:
- **String Inverters** - One inverter for multiple panels in series
- **Microinverters** - Small inverter on each individual panel
- **Power Optimizers** - Combine benefits of string and micro systems
- **Hybrid Inverters** - Work with both solar and battery storage
- **Inverter Capacity** - Should match or exceed system power rating

## Mounting Systems

Secure attachment is critical for safety and performance:
- **Roof Mounts** - Attach directly to roof structure
- **Ground Mounts** - Install on poles or frames in yards
- **Ballasted Systems** - Weighted systems that don't penetrate roofs
- **Tracking Mounts** - Move to follow the sun (less common for homes)
- **Flashing and Seals** - Prevent roof leaks at attachment points

## Electrical Components

Proper electrical equipment ensures safety:
- **Conduit and Wiring** - Protects and routes electrical cables
- **Disconnect Switches** - Allow safe system shutdown
- **Circuit Breakers** - Protect against electrical overloads
- **Grounding Equipment** - Prevents electrical shock hazards
- **Junction Boxes** - Protect wire connections from weather

## Monitoring and Control

Tracking system performance:
- **Production Meters** - Measure energy generated by solar
- **Consumption Meters** - Track home energy use
- **Monitoring Apps** - Smartphone access to system data
- **Display Screens** - On-site energy production displays
- **Remote Access** - Monitor system from anywhere

## Additional System Parts

Other important components:
- **Combiner Boxes** - Bring multiple panel strings together
- **Surge Protectors** - Guard against lightning and power surges
- **Labels and Signs** - Required safety warnings
- **Mounting Hardware** - Bolts, brackets, and rails
- **Weatherproofing** - Materials that protect against elements
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the most efficient type of solar panels?",
          options: [
            "Polycrystalline Panels",
            "Monocrystalline Panels",
            "Thin-Film Panels",
            "Flexible Panels"
          ],
          correctAnswer: 1,
          explanation: "Monocrystalline panels have the highest efficiency due to pure silicon structure."
        },
        {
          id: 2,
          question: "How many main types of solar panels are there?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 1,
          explanation: "Three main types: Monocrystalline, polycrystalline, and thin-film panels."
        },
        {
          id: 3,
          question: "What converts solar electricity for home use?",
          options: ["Solar Panels", "Inverter", "Mounting System", "Wiring"],
          correctAnswer: 1,
          explanation: "Inverters change DC electricity from panels to AC electricity for appliances."
        },
        {
          id: 4,
          question: "What type of inverter has one unit for multiple panels?",
          options: [
            "Microinverters",
            "String Inverters",
            "Power Optimizers",
            "Hybrid Inverters"
          ],
          correctAnswer: 1,
          explanation: "String inverters handle electricity from multiple panels connected in series."
        },
        {
          id: 5,
          question: "What attaches panels directly to roof structure?",
          options: [
            "Ground Mounts",
            "Roof Mounts",
            "Ballasted Systems",
            "Tracking Mounts"
          ],
          correctAnswer: 1,
          explanation: "Roof mounts secure panels directly to the roof framing members."
        },
        {
          id: 6,
          question: "What prevents roof leaks at attachment points?",
          options: ["Bolts", "Flashing and Seals", "Adhesive", "Screws"],
          correctAnswer: 1,
          explanation: "Flashing and seals create watertight barriers around roof penetrations."
        },
        {
          id: 7,
          question: "What protects and routes electrical cables?",
          options: [
            "Disconnect Switches",
            "Conduit and Wiring",
            "Circuit Breakers",
            "Junction Boxes"
          ],
          correctAnswer: 1,
          explanation: "Conduit protects wires from damage and weather exposure."
        },
        {
          id: 8,
          question: "What allows safe system shutdown?",
          options: [
            "Conduit",
            "Disconnect Switches",
            "Circuit Breakers",
            "Grounding Equipment"
          ],
          correctAnswer: 1,
          explanation: "Disconnect switches allow technicians to safely de-energize the system."
        },
        {
          id: 9,
          question: "What measures energy generated by solar?",
          options: [
            "Consumption Meters",
            "Production Meters",
            "Monitoring Apps",
            "Display Screens"
          ],
          correctAnswer: 1,
          explanation: "Production meters specifically track how much electricity the solar system generates."
        },
        {
          id: 10,
          question: "What type of panels are flexible and lightweight?",
          options: [
            "Monocrystalline",
            "Polycrystalline",
            "Thin-Film",
            "All panels"
          ],
          correctAnswer: 2,
          explanation: "Thin-film panels are flexible and lightweight but generally less efficient."
        },
        {
          id: 11,
          question: "What has small inverter on each panel?",
          options: [
            "String Inverters",
            "Microinverters",
            "Power Optimizers",
            "Hybrid Inverters"
          ],
          correctAnswer: 1,
          explanation: "Microinverters are installed on each individual solar panel."
        },
        {
          id: 12,
          question: "What installs on poles in yards?",
          options: [
            "Roof Mounts",
            "Ground Mounts",
            "Ballasted Systems",
            "Tracking Mounts"
          ],
          correctAnswer: 1,
          explanation: "Ground mounts use poles or frames installed in yards or open areas."
        },
        {
          id: 13,
          question: "What protects against electrical overloads?",
          options: [
            "Conduit",
            "Disconnect Switches",
            "Circuit Breakers",
            "Junction Boxes"
          ],
          correctAnswer: 2,
          explanation: "Circuit breakers automatically shut off power during overload conditions."
        },
        {
          id: 14,
          question: "What tracks home energy use?",
          options: [
            "Production Meters",
            "Consumption Meters",
            "Monitoring Apps",
            "Remote Access"
          ],
          correctAnswer: 1,
          explanation: "Consumption meters measure how much electricity the home is using."
        },
        {
          id: 15,
          question: "What brings multiple panel strings together?",
          options: [
            "Surge Protectors",
            "Combiner Boxes",
            "Labels and Signs",
            "Mounting Hardware"
          ],
          correctAnswer: 1,
          explanation: "Combiner boxes combine electrical output from multiple panel strings."
        },
        {
          id: 16,
          question: "What type of inverter works with batteries?",
          options: [
            "String Inverters",
            "Microinverters",
            "Power Optimizers",
            "Hybrid Inverters"
          ],
          correctAnswer: 3,
          explanation: "Hybrid inverters can manage both solar panels and battery storage systems."
        },
        {
          id: 17,
          question: "What moves to follow the sun?",
          options: [
            "Roof Mounts",
            "Ground Mounts",
            "Ballasted Systems",
            "Tracking Mounts"
          ],
          correctAnswer: 3,
          explanation: "Tracking mounts adjust panel angles to follow the sun's path across the sky."
        },
        {
          id: 18,
          question: "What prevents electrical shock hazards?",
          options: [
            "Conduit",
            "Disconnect Switches",
            "Circuit Breakers",
            "Grounding Equipment"
          ],
          correctAnswer: 3,
          explanation: "Proper grounding prevents dangerous electrical shock situations."
        },
        {
          id: 19,
          question: "What provides smartphone access to system data?",
          options: [
            "Production Meters",
            "Consumption Meters",
            "Monitoring Apps",
            "Display Screens"
          ],
          correctAnswer: 2,
          explanation: "Monitoring apps allow homeowners to check system performance from phones."
        },
        {
          id: 20,
          question: "What guards against lightning strikes?",
          options: [
            "Combiner Boxes",
            "Surge Protectors",
            "Labels and Signs",
            "Weatherproofing"
          ],
          correctAnswer: 1,
          explanation: "Surge protectors divert dangerous voltage spikes from lightning or grid issues."
        }
      ]
    },
    {
      id: 3,
      title: "Site Assessment and Planning",
      content: `
# Evaluating Solar Installation Sites

Proper site assessment ensures solar systems work efficiently and safely. This involves checking the location, structure, and conditions before installation begins.

## Roof Assessment

Checking the roof is the first step:
- **Roof Material** - Different materials require different mounting methods
- **Roof Condition** - Should be in good repair with years of life remaining
- **Roof Age** - Older roofs may need replacement before solar installation
- **Roof Structure** - Must be strong enough to support panel weight
- **Roof Orientation** - South-facing is best in northern hemisphere
- **Roof Pitch** - Angle affects panel mounting and performance

## Shading Analysis

Sun access is critical for performance:
- **Tree Shadows** - Nearby trees can block sunlight
- **Building Shadows** - Neighboring structures may cause shading
- **Chimney/Vent Shadows** - Roof features can create shadows
- **Seasonal Changes** - Sun angles change throughout the year
- **Time-of-Day Analysis** - Different shading at morning, noon, and afternoon
- **Solar Path Tools** - Software that predicts shading patterns

## Electrical System Check

Home electrical capacity must support solar:
- **Main Service Panel** - Must have space for solar breaker
- **Panel Capacity** - Electrical panel should have sufficient capacity
- **Wire Size** - Existing wiring may need upgrading
- **Grounding System** - Must meet current electrical codes
- **Utility Connection** - Grid-tied systems need utility approval
- **Meter Location** - Should be accessible for inspection

## Structural Evaluation

Safety and load considerations:
- **Roof Framing** - Rafters or trusses must support added weight
- **Load Calculations** - Panels, snow, wind, and installer weight
- **Attachment Points** - Secure connection to structural members
- **Wind Load Rating** - Must withstand local wind conditions
- **Snow Load Rating** - Must support snow accumulation
- **Seismic Considerations** - Earthquake resistance in some areas

## Permitting Requirements

Legal and regulatory compliance:
- **Building Permits** - Required for structural changes
- **Electrical Permits** - Required for electrical work
- **Utility Interconnection** - Permission to connect to grid
- **Historic District Rules** - Special restrictions may apply
- **Homeowner Association** - May have design guidelines
- **Local Zoning** - Height and setback requirements

## Safety Considerations

Protecting people and property:
- **Fall Protection** - Safe working practices on roofs
- **Electrical Safety** - Working with live electrical systems
- **Weather Conditions** - Avoiding installation in bad weather
- **Material Handling** - Safe lifting and carrying of panels
- **Tool Safety** - Proper use of installation tools
- **Site Security** - Protecting materials from theft
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in site assessment?",
          options: [
            "Shading analysis",
            "Roof assessment",
            "Electrical check",
            "Permit research"
          ],
          correctAnswer: 1,
          explanation: "Checking the roof condition and suitability is typically the first assessment step."
        },
        {
          id: 2,
          question: "What should be in good repair before installation?",
          options: [
            "Neighbor's roof",
            "Your roof",
            "Street pavement",
            "Utility poles"
          ],
          correctAnswer: 1,
          explanation: "The roof should be in good condition with years of life remaining."
        },
        {
          id: 3,
          question: "What can block sunlight on panels?",
          options: [
            "Rain",
            "Wind",
            "Tree shadows",
            "Birds"
          ],
          correctAnswer: 2,
          explanation: "Shadows from trees significantly reduce solar panel performance."
        },
        {
          id: 4,
          question: "What must have space for solar breaker?",
          options: [
            "Utility meter",
            "Main service panel",
            "Inverter",
            "Monitoring system"
          ],
          correctAnswer: 1,
          explanation: "The main electrical panel needs space for a dedicated solar circuit breaker."
        },
        {
          id: 5,
          question: "What must support panel weight?",
          options: [
            "Roof material",
            "Roof framing",
            "Paint color",
            "Gutters"
          ],
          correctAnswer: 1,
          explanation: "Roof framing (rafters or trusses) must be strong enough for added weight."
        },
        {
          id: 6,
          question: "What is required for structural changes?",
          options: [
            "Electrical permits",
            "Building permits",
            "Utility permission",
            "HOA approval"
          ],
          correctAnswer: 1,
          explanation: "Building permits are required when making structural modifications."
        },
        {
          id: 7,
          question: "What is best orientation in northern hemisphere?",
          options: ["North", "South", "East", "West"],
          correctAnswer: 1,
          explanation: "South-facing roofs capture the most sunlight throughout the day."
        },
        {
          id: 8,
          question: "What may need upgrading for solar?",
          options: [
            "Roof color",
            "Existing wiring",
            "Window frames",
            "Door handles"
          ],
          correctAnswer: 1,
          explanation: "Older electrical wiring may need upgrading to handle solar system requirements."
        },
        {
          id: 9,
          question: "What must withstand local wind conditions?",
          options: [
            "Load calculations",
            "Wind load rating",
            "Snow load rating",
            "Seismic considerations"
          ],
          correctAnswer: 1,
          explanation: "The installation must be rated for local maximum wind speeds."
        },
        {
          id: 10,
          question: "What is required for electrical work?",
          options: [
            "Building permits",
            "Electrical permits",
            "Utility interconnection",
            "Zoning approval"
          ],
          correctAnswer: 1,
          explanation: "Electrical permits are specifically required for wiring and electrical installations."
        },
        {
          id: 11,
          question: "What affects panel mounting and performance?",
          options: [
            "Roof material",
            "Roof pitch (angle)",
            "Roof color",
            "Roof age"
          ],
          correctAnswer: 1,
          explanation: "The roof's angle affects how panels are mounted and their sun exposure."
        },
        {
          id: 12,
          question: "What can create shadows from roof features?",
          options: [
            "Tree shadows",
            "Building shadows",
            "Chimney/vent shadows",
            "Cloud shadows"
          ],
          correctAnswer: 2,
          explanation: "Roof features like chimneys and vents can cast shadows on panels."
        },
        {
          id: 13,
          question: "What should meet current electrical codes?",
          options: [
            "Panel capacity",
            "Grounding system",
            "Wire size",
            "Meter location"
          ],
          correctAnswer: 1,
          explanation: "The grounding system must comply with current electrical safety codes."
        },
        {
          id: 14,
          question: "What includes panels, snow, and wind weight?",
          options: [
            "Attachment points",
            "Load calculations",
            "Wind load rating",
            "Structural evaluation"
          ],
          correctAnswer: 1,
          explanation: "Load calculations consider all weight factors including panels, snow, and wind forces."
        },
        {
          id: 15,
          question: "What is permission to connect to grid called?",
          options: [
            "Building permit",
            "Electrical permit",
            "Utility interconnection",
            "Zoning approval"
          ],
          correctAnswer: 2,
          explanation: "Utility interconnection approval allows the system to connect to the power grid."
        },
        {
          id: 16,
          question: "What involves safe working on roofs?",
          options: [
            "Electrical safety",
            "Fall protection",
            "Weather conditions",
            "Material handling"
          ],
          correctAnswer: 1,
          explanation: "Fall protection systems prevent injuries when working at roof height."
        },
        {
          id: 17,
          question: "What changes throughout the year?",
          options: [
            "Tree height",
            "Sun angles",
            "Roof color",
            "Panel efficiency"
          ],
          correctAnswer: 1,
          explanation: "The sun's path and angles change with seasons, affecting shading patterns."
        },
        {
          id: 18,
          question: "What should be accessible for inspection?",
          options: [
            "Main panel",
            "Meter location",
            "Inverter",
            "Monitoring display"
          ],
          correctAnswer: 1,
          explanation: "The utility meter should be easily accessible for reading and inspection."
        },
        {
          id: 19,
          question: "What must support snow accumulation?",
          options: [
            "Load calculations",
            "Wind load rating",
            "Snow load rating",
            "Seismic considerations"
          ],
          correctAnswer: 2,
          explanation: "The installation must be rated for local snow accumulation weights."
        },
        {
          id: 20,
          question: "What involves working with live electrical systems?",
          options: [
            "Fall protection",
            "Electrical safety",
            "Weather conditions",
            "Tool safety"
          ],
          correctAnswer: 1,
          explanation: "Electrical safety procedures protect against shock when working with energized systems."
        }
      ]
    },
    {
      id: 4,
      title: "Installation Safety and Tools",
      content: `
# Safe Solar Installation Practices

Safety is the most important aspect of solar installation. Proper safety practices, personal protective equipment, and correct tool use prevent accidents and ensure quality work.

## Personal Protective Equipment (PPE)

Essential safety gear for installers:
- **Hard Hats** - Protect from falling objects
- **Safety Glasses** - Shield eyes from debris and UV light
- **Work Gloves** - Protect hands from cuts and abrasions
- **Harnesses and Lanyards** - Fall protection for roof work
- **Safety Shoes** - Steel-toe boots for foot protection
- **High-Visibility Vests** - Make workers visible on site
- **Hearing Protection** - For noisy tools and environments
- **Respirators** - When working with dust or chemicals

## Electrical Safety

Critical precautions when working with electricity:
- **Lockout/Tagout** - Secure electrical sources before working
- **Voltage Testers** - Always verify circuits are de-energized
- **Insulated Tools** - Protect against electrical shock
- **Ground Fault Protection** - Use GFCI outlets and cords
- **Proper Grounding** - Ensure all equipment is properly grounded
- **Circuit Identification** - Clearly label all circuits
- **Weather Awareness** - Avoid electrical work in wet conditions
- **Qualified Personnel** - Only trained people should do electrical work

## Fall Protection

Preventing falls from height:
- **Anchor Points** - Secure attachment points on roof
- **Harness Systems** - Full body harnesses with lanyards
- **Guardrails** - Temporary edge protection
- **Safety Nets** - Additional fall protection
- **Ladder Safety** - Proper ladder setup and use
- **Roof Access** - Safe methods for getting on/off roof
- **Weather Considerations** - Avoid slippery roof conditions
- **Buddy System** - Never work alone at height

## Tool Safety

Proper use and maintenance:
- **Power Tool Safety** - Follow manufacturer instructions
- **Tool Inspection** - Check tools before each use
- **Proper Storage** - Keep tools organized and secure
- **Battery Safety** - Handle lithium batteries carefully
- **Sharp Tool Care** - Keep cutting tools sharp and guarded
- **Extension Cord Safety** - Use appropriate gauge and condition
- **Lifting Equipment** - Use mechanical aids for heavy items
- **Clean Workspace** - Keep area free of trip hazards

## Material Handling

Safe moving and placement of components:
- **Panel Handling** - Solar panels are fragile and heavy
- **Lifting Techniques** - Proper body mechanics to prevent injury
- **Mechanical Aids** - Use dollies, hoists, or multiple people
- **Storage Safety** - Secure materials from wind and theft
- **Unloading Procedures** - Safe methods for offloading trucks
- **Roof Material Transport** - Safe ways to get materials to roof
- **Waste Management** - Proper disposal of packaging and scrap
- **Site Organization** - Keep materials organized and accessible

## Emergency Procedures

Preparedness for accidents:
- **First Aid Kits** - Well-stocked and accessible
- **Emergency Contacts** - Posted at job site
- **Communication Devices** - Reliable method to call for help
- **Fire Extinguishers** - Appropriate type for electrical fires
- **Evacuation Routes** - Clear paths to exit work areas
- **Incident Reporting** - Procedures for reporting accidents
- **Weather Emergency Plans** - Response to severe weather
- **Utility Contact Information** - Quick access to utility emergency numbers
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What protects from falling objects?",
          options: [
            "Safety glasses",
            "Hard hats",
            "Work gloves",
            "Safety shoes"
          ],
          correctAnswer: 1,
          explanation: "Hard hats provide head protection against falling tools or materials."
        },
        {
          id: 2,
          question: "How many essential PPE items are listed?",
          options: ["Six", "Seven", "Eight", "Nine"],
          correctAnswer: 2,
          explanation: "Eight essential PPE items: Hard hats, glasses, gloves, harnesses, shoes, vests, hearing protection, and respirators."
        },
        {
          id: 3,
          question: "What secures electrical sources before working?",
          options: [
            "Voltage testers",
            "Lockout/Tagout",
            "Insulated tools",
            "Ground fault protection"
          ],
          correctAnswer: 1,
          explanation: "Lockout/Tagout procedures ensure electrical sources cannot be accidentally energized."
        },
        {
          id: 4,
          question: "What should always verify circuits are de-energized?",
          options: [
            "Lockout devices",
            "Voltage testers",
            "Insulated tools",
            "Circuit labels"
          ],
          correctAnswer: 1,
          explanation: "Voltage testers confirm that electrical circuits are safe to work on."
        },
        {
          id: 5,
          question: "What provides fall protection for roof work?",
          options: [
            "Guardrails",
            "Safety nets",
            "Harnesses and lanyards",
            "Ladder safety"
          ],
          correctAnswer: 2,
          explanation: "Harness systems with secure lanyards prevent falls from roof heights."
        },
        {
          id: 6,
          question: "What should be checked before each tool use?",
          options: [
            "Tool price",
            "Tool inspection",
            "Tool color",
            "Tool brand"
          ],
          correctAnswer: 1,
          explanation: "Regular tool inspection ensures equipment is in safe working condition."
        },
        {
          id: 7,
          question: "What protects eyes from debris?",
          options: ["Hard hats", "Safety glasses", "Work gloves", "Respirators"],
          correctAnswer: 1,
          explanation: "Safety glasses shield eyes from flying debris, dust, and UV exposure."
        },
        {
          id: 8,
          question: "What protects against electrical shock?",
          options: [
            "Lockout procedures",
            "Insulated tools",
            "Voltage testers",
            "Circuit identification"
          ],
          correctAnswer: 1,
          explanation: "Insulated tools prevent electrical current from reaching the user."
        },
        {
          id: 9,
          question: "What provides temporary edge protection?",
          options: [
            "Anchor points",
            "Guardrails",
            "Safety nets",
            "Ladder safety"
          ],
          correctAnswer: 1,
          explanation: "Temporary guardrails prevent workers from accidentally stepping off roof edges."
        },
        {
          id: 10,
          question: "What should follow manufacturer instructions?",
          options: [
            "All safety practices",
            "Power tool safety",
            "Material handling",
            "Emergency procedures"
          ],
          correctAnswer: 1,
          explanation: "Power tools should always be used according to manufacturer safety guidelines."
        },
        {
          id: 11,
          question: "What protects hands from cuts?",
          options: ["Hard hats", "Safety glasses", "Work gloves", "Safety shoes"],
          correctAnswer: 2,
          explanation: "Work gloves protect hands from sharp edges, abrasions, and cuts."
        },
        {
          id: 12,
          question: "What uses GFCI outlets and cords?",
          options: [
            "Lockout/Tagout",
            "Ground fault protection",
            "Proper grounding",
            "Weather awareness"
          ],
          correctAnswer: 1,
          explanation: "Ground Fault Circuit Interrupters quickly shut off power if current leakage is detected."
        },
        {
          id: 13,
          question: "What provides additional fall protection?",
          options: [
            "Anchor points",
            "Guardrails",
            "Safety nets",
            "Harness systems"
          ],
          correctAnswer: 2,
          explanation: "Safety nets provide secondary protection in case other fall systems fail."
        },
        {
          id: 14,
          question: "What should be kept organized and secure?",
          options: [
            "Tool inspection",
            "Proper storage",
            "Battery safety",
            "Sharp tool care"
          ],
          correctAnswer: 1,
          explanation: "Proper tool storage prevents accidents and keeps tools in good condition."
        },
        {
          id: 15,
          question: "What are solar panels described as?",
          options: [
            "Light and durable",
            "Fragile and heavy",
            "Flexible and cheap",
            "Small and simple"
          ],
          correctAnswer: 1,
          explanation: "Solar panels are both fragile (glass surfaces) and surprisingly heavy."
        },
        {
          id: 16,
          question: "What protects feet on job site?",
          options: ["Hard hats", "Safety glasses", "Work gloves", "Safety shoes"],
          correctAnswer: 3,
          explanation: "Safety shoes with steel toes protect feet from falling objects and punctures."
        },
        {
          id: 17,
          question: "What ensures all equipment is safely connected to earth?",
          options: [
            "Lockout/Tagout",
            "Ground fault protection",
            "Proper grounding",
            "Circuit identification"
          ],
          correctAnswer: 2,
          explanation: "Proper grounding provides a safe path for electrical faults to dissipate."
        },
        {
          id: 18,
          question: "What involves proper ladder setup?",
          options: [
            "Fall protection",
            "Ladder safety",
            "Roof access",
            "Buddy system"
          ],
          correctAnswer: 1,
          explanation: "Ladder safety includes proper angle, securing, and climbing techniques."
        },
        {
          id: 19,
          question: "What should be kept sharp and guarded?",
          options: [
            "Power tools",
            "Sharp tools",
            "Batteries",
            "Extension cords"
          ],
          correctAnswer: 1,
          explanation: "Sharp cutting tools work better and are actually safer when properly maintained."
        },
        {
          id: 20,
          question: "What should be well-stocked and accessible?",
          options: [
            "Emergency contacts",
            "First aid kits",
            "Communication devices",
            "Fire extinguishers"
          ],
          correctAnswer: 1,
          explanation: "First aid kits must be complete and easily accessible in case of injury."
        }
      ]
    },
    {
      id: 5,
      title: "Installation Procedures",
      content: `
# Step-by-Step Solar Installation

Proper installation procedures ensure systems work safely and efficiently. Following a systematic approach makes the installation process organized and reduces errors.

## Pre-Installation Preparation

Getting ready before starting work:
- **Site Setup** - Establish work areas and material staging
- **Safety Review** - Conduct safety meeting with all workers
- **Tool and Material Check** - Verify all items are on site
- **Permit Display** - Post required permits at job site
- **Utility Notification** - Inform utility company of work schedule
- **Neighbor Notification** - Inform neighbors about installation activities
- **Weather Check** - Confirm suitable weather conditions
- **Plan Review** - Go over installation plans with team

## Roof Preparation

Preparing the roof for installation:
- **Roof Protection** - Lay protective mats or boards
- **Measurement and Layout** - Mark panel locations accurately
- **Flashing Installation** - Install waterproof flashing at attachment points
- **Rail System Installation** - Mount rails according to layout marks
- **Rail Alignment** - Ensure rails are straight and level
- **Attachment Verification** - Confirm all attachments are secure
- **Grounding Start** - Begin grounding system installation
- **Cleanup** - Remove debris from roof surface

## Panel Installation

Mounting solar panels safely:
- **Panel Handling** - Use proper lifting techniques and equipment
- **Panel Placement** - Set panels on rails carefully
- **Clamp Installation** - Secure panels with appropriate clamps
- **Panel Alignment** - Ensure panels are straight and evenly spaced
- **Electrical Connection** - Connect panels in proper series/parallel configuration
- **Combiner Box Installation** - Install and wire combiner boxes
- **Labeling** - Label all circuits and connections
- **Visual Inspection** - Check entire array for proper installation

## Electrical Installation

Wiring the system safely:
- **Conduit Runs** - Install conduit from array to electrical equipment
- **Wire Pulling** - Pull appropriate gauge wires through conduit
- **Inverter Installation** - Mount inverter in suitable location
- **Inverter Wiring** - Connect DC and AC sides properly
- **Disconnect Installation** - Install required disconnect switches
- **Breaker Installation** - Add solar breaker to main panel
- **Grounding Completion** - Complete all grounding connections
- **Meter Installation** - Install production meter if required

## System Testing and Commissioning

Verifying proper operation:
- **Visual Inspection** - Final check of all components
- **Continuity Testing** - Check electrical continuity of circuits
- **Insulation Testing** - Verify proper insulation resistance
- **Polarity Verification** - Confirm correct positive/negative connections
- **Voltage Testing** - Check voltages at various points
- **Ground Testing** - Verify proper grounding resistance
- **Inverter Startup** - Follow manufacturer startup procedure
- **System Performance Check** - Verify system is producing power

## Final Steps and Documentation

Completing the installation:
- **Clean Job Site** - Remove all tools, materials, and debris
- **Customer Walkthrough** - Show customer how system works
- **Monitoring Setup** - Set up monitoring system and apps
- **Documentation Completion** - Fill out all required paperwork
- **Permit Sign-off** - Schedule final inspections
- **Utility Notification** - Inform utility system is ready for interconnection
- **Warranty Registration** - Register system warranties
- **Maintenance Instructions** - Provide customer with maintenance guidance
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first preparation step?",
          options: [
            "Safety review",
            "Site setup",
            "Tool check",
            "Permit display"
          ],
          correctAnswer: 1,
          explanation: "Setting up the work area and staging materials comes first."
        },
        {
          id: 2,
          question: "How many pre-installation steps are listed?",
          options: ["Six", "Seven", "Eight", "Nine"],
          correctAnswer: 2,
          explanation: "Eight preparation steps: Site setup, safety review, tool check, permit display, utility notification, neighbor notification, weather check, and plan review."
        },
        {
          id: 3,
          question: "What involves laying protective mats?",
          options: [
            "Measurement",
            "Roof protection",
            "Flashing installation",
            "Rail system"
          ],
          correctAnswer: 1,
          explanation: "Roof protection prevents damage to roofing materials during installation."
        },
        {
          id: 4,
          question: "What marks panel locations accurately?",
          options: [
            "Roof protection",
            "Measurement and layout",
            "Flashing installation",
            "Rail alignment"
          ],
          correctAnswer: 1,
          explanation: "Precise measurement ensures panels are positioned correctly for optimal performance."
        },
        {
          id: 5,
          question: "What uses proper lifting techniques?",
          options: [
            "Panel handling",
            "Panel placement",
            "Clamp installation",
            "Panel alignment"
          ],
          correctAnswer: 0,
          explanation: "Proper panel handling prevents injuries and panel damage."
        },
        {
          id: 6,
          question: "What secures panels with appropriate clamps?",
          options: [
            "Panel handling",
            "Panel placement",
            "Clamp installation",
            "Electrical connection"
          ],
          correctAnswer: 2,
          explanation: "Proper clamps hold panels securely to mounting rails."
        },
        {
          id: 7,
          question: "What installs conduit from array to equipment?",
          options: [
            "Wire pulling",
            "Conduit runs",
            "Inverter installation",
            "Disconnect installation"
          ],
          correctAnswer: 1,
          explanation: "Conduit protects wires from weather and physical damage."
        },
        {
          id: 8,
          question: "What mounts inverter in suitable location?",
          options: [
            "Conduit runs",
            "Wire pulling",
            "Inverter installation",
            "Inverter wiring"
          ],
          correctAnswer: 2,
          explanation: "Inverter should be mounted in a well-ventilated, accessible location."
        },
        {
          id: 9,
          question: "What is the final check of all components?",
          options: [
            "Continuity testing",
            "Visual inspection",
            "Insulation testing",
            "Polarity verification"
          ],
          correctAnswer: 1,
          explanation: "Visual inspection catches any obvious installation issues."
        },
        {
          id: 10,
          question: "What checks electrical continuity?",
          options: [
            "Visual inspection",
            "Continuity testing",
            "Insulation testing",
            "Voltage testing"
          ],
          correctAnswer: 1,
          explanation: "Continuity testing ensures electrical connections are complete and unbroken."
        },
        {
          id: 11,
          question: "What involves conducting safety meeting?",
          options: [
            "Site setup",
            "Safety review",
            "Tool check",
            "Plan review"
          ],
          correctAnswer: 1,
          explanation: "Safety meetings ensure all workers understand hazards and procedures."
        },
        {
          id: 12,
          question: "What installs waterproof flashing?",
          options: [
            "Roof protection",
            "Measurement",
            "Flashing installation",
            "Rail system"
          ],
          correctAnswer: 2,
          explanation: "Flashing creates watertight seals around roof penetrations."
        },
        {
          id: 13,
          question: "What sets panels on rails carefully?",
          options: [
            "Panel handling",
            "Panel placement",
            "Clamp installation",
            "Panel alignment"
          ],
          correctAnswer: 1,
          explanation: "Careful placement prevents panel damage and ensures proper positioning."
        },
        {
          id: 14,
          question: "What connects panels in proper configuration?",
          options: [
            "Panel placement",
            "Clamp installation",
            "Electrical connection",
            "Combiner box"
          ],
          correctAnswer: 2,
          explanation: "Correct electrical configuration ensures proper system voltage and current."
        },
        {
          id: 15,
          question: "What pulls wires through conduit?",
          options: [
            "Conduit runs",
            "Wire pulling",
            "Inverter installation",
            "Breaker installation"
          ],
          correctAnswer: 1,
          explanation: "Wire pulling installs conductors through protective conduit."
        },
        {
          id: 16,
          question: "What adds solar breaker to main panel?",
          options: [
            "Inverter wiring",
            "Disconnect installation",
            "Breaker installation",
            "Grounding completion"
          ],
          correctAnswer: 2,
          explanation: "Solar breakers protect the circuit and allow disconnection if needed."
        },
        {
          id: 17,
          question: "What verifies proper insulation resistance?",
          options: [
            "Continuity testing",
            "Insulation testing",
            "Polarity verification",
            "Ground testing"
          ],
          correctAnswer: 1,
          explanation: "Insulation testing checks that wires are properly insulated and safe."
        },
        {
          id: 18,
          question: "What shows customer how system works?",
          options: [
            "Clean job site",
            "Customer walkthrough",
            "Monitoring setup",
            "Documentation"
          ],
          correctAnswer: 1,
          explanation: "Customer education ensures they understand system operation and monitoring."
        },
        {
          id: 19,
          question: "What follows manufacturer startup procedure?",
          options: [
            "Voltage testing",
            "Ground testing",
            "Inverter startup",
            "Performance check"
          ],
          correctAnswer: 2,
          explanation: "Manufacturer-specific startup procedures ensure safe inverter operation."
        },
        {
          id: 20,
          question: "What schedules final inspections?",
          options: [
            "Documentation completion",
            "Permit sign-off",
            "Utility notification",
            "Warranty registration"
          ],
          correctAnswer: 1,
          explanation: "Final inspections verify the installation meets all code requirements."
        }
      ]
    },
    {
      id: 6,
      title: "System Maintenance and Troubleshooting",
      content: `
# Keeping Solar Systems Working Well

Regular maintenance ensures solar systems continue producing energy efficiently and safely. Basic troubleshooting helps identify and resolve common issues.

## Regular Maintenance Tasks

Routine checks to keep systems working:
- **Visual Inspections** - Regular checks for visible damage or issues
- **Panel Cleaning** - Removing dirt, leaves, and debris
- **Vegetation Management** - Trimming trees that create shading
- **Electrical Connection Checks** - Ensuring tight, corrosion-free connections
- **Monitoring System Review** - Checking performance data regularly
- **Inspection Scheduling** - Planning professional inspections
- **Record Keeping** - Maintaining system performance records
- **Warranty Tracking** - Keeping track of warranty periods

## Cleaning Procedures

Proper panel cleaning methods:
- **Cleaning Frequency** - How often to clean based on location
- **Cleaning Tools** - Soft brushes, squeegees, and mild cleaners
- **Water Source** - Using deionized or softened water when possible
- **Cleaning Timing** - Early morning or evening when panels are cool
- **Safety During Cleaning** - Safe access and electrical awareness
- **Stain Removal** - Dealing with bird droppings and hard water stains
- **Snow Removal** - Safe methods for snow removal if needed
- **Professional Cleaning** - When to hire cleaning services

## Performance Monitoring

Tracking system output:
- **Daily Production Checks** - Quick daily performance review
- **Monthly Performance Reports** - Comparing monthly output
- **Seasonal Variations** - Understanding seasonal production changes
- **Benchmark Comparisons** - Comparing to expected production
- **Alert Settings** - Setting up performance alerts
- **Data Analysis** - Looking for patterns in production data
- **Reporting Issues** - When and how to report problems
- **Monitoring System Maintenance** - Keeping monitoring equipment working

## Common Issues and Solutions

Troubleshooting typical problems:
- **Reduced Production** - Identifying causes of lower output
- **Inverter Error Codes** - Understanding common error messages
- **Tripped Breakers** - Reasons breakers might trip
- **Monitoring System Offline** - Getting monitoring back online
- **Physical Damage** - Dealing with panel or component damage
- **Animal Issues** - Preventing and addressing animal damage
- **Weather Damage** - Assessing and repairing storm damage
- **Connection Problems** - Fixing loose or corroded connections

## Safety During Maintenance

Staying safe while maintaining systems:
- **Electrical Safety** - Working safely with energized systems
- **Roof Access Safety** - Safe methods for roof access
- **Weather Considerations** - Avoiding maintenance in bad weather
- **Tool Safety** - Using tools properly during maintenance
- **Personal Protective Equipment** - Wearing appropriate safety gear
- **Working Alone** - Safety considerations when working solo
- **Emergency Procedures** - Knowing what to do in emergencies
- **Professional Help** - When to call professionals instead of DIY

## When to Call Professionals

Situations requiring expert help:
- **Electrical Issues** - Any complex electrical problems
- **Structural Concerns** - Roof or mounting system issues
- **Warranty Work** - Repairs covered by manufacturer warranties
- **System Upgrades** - Adding components or expanding system
- **Code Compliance** - Ensuring work meets current codes
- **Insurance Claims** - Damage requiring insurance involvement
- **Performance Problems** - Persistent low production issues
- **End-of-Life Decisions** - System replacement or major repairs

## Seasonal Considerations

Maintenance through the seasons:
- **Spring Preparation** - Post-winter inspection and cleaning
- **Summer Performance** - Monitoring peak production periods
- **Fall Preparation** - Getting ready for winter conditions
- **Winter Considerations** - Snow, ice, and reduced production
- **Storm Season** - Pre- and post-storm inspections
- **High Wind Periods** - Checking mounts after high winds
- **Extreme Heat** - Monitoring performance in very hot weather
- **Changing Seasons** - Adjusting expectations with season changes
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves regular checks for visible damage?",
          options: [
            "Panel cleaning",
            "Visual inspections",
            "Vegetation management",
            "Connection checks"
          ],
          correctAnswer: 1,
          explanation: "Visual inspections catch physical damage or issues early."
        },
        {
          id: 2,
          question: "How many regular maintenance tasks are listed?",
          options: ["Six", "Seven", "Eight", "Nine"],
          correctAnswer: 2,
          explanation: "Eight maintenance tasks: Visual inspections, cleaning, vegetation management, connection checks, monitoring review, inspection scheduling, record keeping, and warranty tracking."
        },
        {
          id: 3,
          question: "What removes dirt and debris from panels?",
          options: [
            "Visual inspections",
            "Panel cleaning",
            "Vegetation management",
            "Monitoring review"
          ],
          correctAnswer: 1,
          explanation: "Clean panels produce more electricity by allowing maximum sunlight through."
        },
        {
          id: 4,
          question: "What tools are used for cleaning?",
          options: [
            "Hard brushes and strong cleaners",
            "Soft brushes and mild cleaners",
            "Pressure washers",
            "Abrasive scrubbers"
          ],
          correctAnswer: 1,
          explanation: "Soft materials prevent scratching panel surfaces while mild cleaners avoid damage."
        },
        {
          id: 5,
          question: "What involves quick daily performance review?",
          options: [
            "Monthly reports",
            "Daily production checks",
            "Seasonal variations",
            "Benchmark comparisons"
          ],
          correctAnswer: 1,
          explanation: "Daily checks quickly identify if the system stops working."
        },
        {
          id: 6,
          question: "What identifies causes of lower output?",
          options: [
            "Inverter error codes",
            "Reduced production troubleshooting",
            "Tripped breakers",
            "Monitoring offline"
          ],
          correctAnswer: 1,
          explanation: "Identifying why production is low helps determine the right solution."
        },
        {
          id: 7,
          question: "What should be worn during maintenance?",
          options: [
            "Regular clothes",
            "Personal protective equipment",
            "Comfortable shoes only",
            "No special gear needed"
          ],
          correctAnswer: 1,
          explanation: "PPE protects against electrical, fall, and other maintenance hazards."
        },
        {
          id: 8,
          question: "What trims trees that create shading?",
          options: [
            "Visual inspections",
            "Panel cleaning",
            "Vegetation management",
            "Connection checks"
          ],
          correctAnswer: 2,
          explanation: "Tree trimming maintains good sun exposure as plants grow."
        },
        {
          id: 9,
          question: "When should panels be cleaned?",
          options: [
            "Midday when hottest",
            "Early morning or evening when cool",
            "Any time",
            "Only when dirty"
          ],
          correctAnswer: 1,
          explanation: "Cool panels prevent water from evaporating quickly and causing stains."
        },
        {
          id: 10,
          question: "What compares monthly output?",
          options: [
            "Daily checks",
            "Monthly performance reports",
            "Seasonal variations",
            "Alert settings"
          ],
          correctAnswer: 1,
          explanation: "Monthly comparisons show production trends over time."
        },
        {
          id: 11,
          question: "What helps understand common error messages?",
          options: [
            "Reduced production",
            "Inverter error codes",
            "Tripped breakers",
            "Physical damage"
          ],
          correctAnswer: 1,
          explanation: "Understanding error codes helps diagnose inverter issues."
        },
        {
          id: 12,
          question: "What involves working safely with energized systems?",
          options: [
            "Roof access safety",
            "Electrical safety",
            "Weather considerations",
            "Tool safety"
          ],
          correctAnswer: 1,
          explanation: "Electrical safety prevents shock when working on live systems."
        },
        {
          id: 13,
          question: "What ensures tight, corrosion-free connections?",
          options: [
            "Visual inspections",
            "Electrical connection checks",
            "Monitoring system review",
            "Record keeping"
          ],
          correctAnswer: 1,
          explanation: "Secure electrical connections ensure efficient power transfer and safety."
        },
        {
          id: 14,
          question: "What uses deionized or softened water?",
          options: [
            "Cleaning frequency",
            "Water source",
            "Cleaning timing",
            "Safety during cleaning"
          ],
          correctAnswer: 1,
          explanation: "Soft water prevents mineral deposits that can reduce panel efficiency."
        },
        {
          id: 15,
          question: "What understands seasonal production changes?",
          options: [
            "Daily checks",
            "Monthly reports",
            "Seasonal variations",
            "Benchmark comparisons"
          ],
          correctAnswer: 2,
          explanation: "Understanding normal seasonal changes helps identify abnormal performance."
        },
        {
          id: 16,
          question: "What deals with reasons breakers might trip?",
          options: [
            "Reduced production",
            "Inverter error codes",
            "Tripped breakers",
            "Monitoring offline"
          ],
          correctAnswer: 2,
          explanation: "Understanding why breakers trip helps prevent recurrence and ensures safety."
        },
        {
          id: 17,
          question: "What avoids maintenance in bad weather?",
          options: [
            "Electrical safety",
            "Roof access safety",
            "Weather considerations",
            "Working alone"
          ],
          correctAnswer: 2,
          explanation: "Bad weather creates slippery conditions and electrical hazards."
        },
        {
          id: 18,
          question: "What checks performance data regularly?",
          options: [
            "Visual inspections",
            "Connection checks",
            "Monitoring system review",
            "Inspection scheduling"
          ],
          correctAnswer: 2,
          explanation: "Regular monitoring review catches performance issues early."
        },
        {
          id: 19,
          question: "What sets up performance alerts?",
          options: [
            "Monthly reports",
            "Seasonal variations",
            "Alert settings",
            "Data analysis"
          ],
          correctAnswer: 2,
          explanation: "Alerts notify owners immediately if system performance drops significantly."
        },
        {
          id: 20,
          question: "What knows what to do in emergencies?",
          options: [
            "Tool safety",
            "Personal protective equipment",
            "Working alone",
            "Emergency procedures"
          ],
          correctAnswer: 3,
          explanation: "Knowing emergency procedures ensures quick, appropriate response to accidents."
        }
      ]
    }
  ],

  finalExam: {
    title: "Solar Installation Certificate Final Exam",
    description: "Comprehensive examination covering all solar installation fundamentals from 6 modules. Successful completion demonstrates basic competency in solar system understanding and safety.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is solar energy?",
        options: [
          "Energy from wind",
          "Energy from the sun",
          "Energy from water",
          "Energy from fossil fuels"
        ],
        correctAnswer: 1,
        explanation: "Solar energy is power derived from sunlight that reaches the Earth."
      },
      {
        id: 2,
        question: "What converts solar electricity for home use?",
        options: ["Solar Panels", "Inverter", "Mounting System", "Monitoring"],
        correctAnswer: 1,
        explanation: "Inverters change DC electricity from panels to AC electricity for appliances."
      },
      {
        id: 3,
        question: "What should be in good condition before installation?",
        options: [
          "Neighbor's house",
          "Your roof",
          "Street lights",
          "Utility poles"
        ],
        correctAnswer: 1,
        explanation: "The roof must be structurally sound and not need immediate replacement."
      },
      {
        id: 4,
        question: "What protects from falling objects?",
        options: [
          "Safety glasses",
          "Hard hats",
          "Work gloves",
          "Safety shoes"
        ],
        correctAnswer: 1,
        explanation: "Hard hats provide essential head protection on construction sites."
      },
      {
        id: 5,
        question: "What is the first preparation step before installation?",
        options: [
          "Safety review",
          "Site setup",
          "Tool check",
          "Permit display"
        ],
        correctAnswer: 1,
        explanation: "Setting up work areas and staging materials comes first."
      },
      {
        id: 6,
        question: "What involves regular checks for visible damage?",
        options: [
          "Panel cleaning",
          "Visual inspections",
          "Vegetation management",
          "Connection checks"
        ],
        correctAnswer: 1,
        explanation: "Visual inspections catch physical issues before they become serious problems."
      },
      {
        id: 7,
        question: "What system is connected to the main power grid?",
        options: [
          "Off-Grid System",
          "Grid-Tied System",
          "Hybrid System",
          "Water Heating System"
        ],
        correctAnswer: 1,
        explanation: "Grid-tied systems connect to utility power for backup and net metering."
      },
      {
        id: 8,
        question: "What are the most efficient solar panels?",
        options: [
          "Polycrystalline",
          "Monocrystalline",
          "Thin-Film",
          "Flexible"
        ],
        correctAnswer: 1,
        explanation: "Monocrystalline panels have highest efficiency due to pure silicon structure."
      },
      {
        id: 9,
        question: "What can block sunlight on panels?",
        options: [
          "Rain",
          "Wind",
          "Tree shadows",
          "Birds"
        ],
        correctAnswer: 2,
        explanation: "Shading from trees significantly reduces solar panel performance."
      },
      {
        id: 10,
        question: "What secures electrical sources before working?",
        options: [
          "Voltage testers",
          "Lockout/Tagout",
          "Insulated tools",
          "Ground fault protection"
        ],
        correctAnswer: 1,
        explanation: "Lockout/Tagout ensures electrical sources cannot be accidentally energized."
      },
      {
        id: 11,
        question: "What involves laying protective mats on roof?",
        options: [
          "Measurement",
          "Roof protection",
          "Flashing installation",
          "Rail system"
        ],
        correctAnswer: 1,
        explanation: "Roof protection prevents damage during installation work."
      },
      {
        id: 12,
        question: "What removes dirt and debris from panels?",
        options: [
          "Visual inspections",
          "Panel cleaning",
          "Vegetation management",
          "Monitoring review"
        ],
        correctAnswer: 1,
        explanation: "Clean panels allow maximum sunlight penetration for electricity production."
      },
      {
        id: 13,
        question: "What holds panels securely in place?",
        options: ["Inverter", "Solar Panels", "Mounting System", "Wiring"],
        correctAnswer: 2,
        explanation: "Mounting systems provide secure attachment to roofs or ground structures."
      },
      {
        id: 14,
        question: "What type of inverter has one unit for multiple panels?",
        options: [
          "Microinverters",
          "String Inverters",
          "Power Optimizers",
          "Hybrid Inverters"
        ],
        correctAnswer: 1,
        explanation: "String inverters handle electricity from multiple panels connected together."
      },
      {
        id: 15,
        question: "What must have space for solar breaker?",
        options: [
          "Utility meter",
          "Main service panel",
          "Inverter",
          "Monitoring system"
        ],
        correctAnswer: 1,
        explanation: "The main electrical panel needs space for dedicated solar circuit protection."
      },
      {
        id: 16,
        question: "What provides fall protection for roof work?",
        options: [
          "Guardrails",
          "Safety nets",
          "Harnesses and lanyards",
          "Ladder safety"
        ],
        correctAnswer: 2,
        explanation: "Harness systems prevent serious injury from falls at height."
      },
      {
        id: 17,
        question: "What marks panel locations accurately?",
        options: [
          "Roof protection",
          "Measurement and layout",
          "Flashing installation",
          "Rail alignment"
        ],
        correctAnswer: 1,
        explanation: "Precise measurement ensures optimal panel positioning for sun exposure."
      },
      {
        id: 18,
        question: "What involves quick daily performance review?",
        options: [
          "Monthly reports",
          "Daily production checks",
          "Seasonal variations",
          "Benchmark comparisons"
        ],
        correctAnswer: 1,
        explanation: "Daily checks quickly identify if system stops working."
      },
      {
        id: 19,
        question: "What benefit means less reliance on utilities?",
        options: [
          "Cost Savings",
          "Clean Energy",
          "Energy Independence",
          "Property Value"
        ],
        correctAnswer: 2,
        explanation: "Energy independence reduces dependence on utility companies."
      },
      {
        id: 20,
        question: "What attaches panels directly to roof structure?",
        options: [
          "Ground Mounts",
          "Roof Mounts",
          "Ballasted Systems",
          "Tracking Mounts"
        ],
        correctAnswer: 1,
        explanation: "Roof mounts secure panels directly to roof framing members."
      },
      {
        id: 21,
        question: "What is required for structural changes?",
        options: [
          "Electrical permits",
          "Building permits",
          "Utility permission",
          "HOA approval"
        ],
        correctAnswer: 1,
        explanation: "Building permits are required when making structural modifications."
      },
      {
        id: 22,
        question: "What should always verify circuits are de-energized?",
        options: [
          "Lockout devices",
          "Voltage testers",
          "Insulated tools",
          "Circuit labels"
        ],
        correctAnswer: 1,
        explanation: "Voltage testers confirm electrical circuits are safe to work on."
      },
      {
        id: 23,
        question: "What uses proper lifting techniques?",
        options: [
          "Panel handling",
          "Panel placement",
          "Clamp installation",
          "Panel alignment"
        ],
        correctAnswer: 0,
        explanation: "Proper panel handling prevents injuries and panel damage."
      },
      {
        id: 24,
        question: "What identifies causes of lower output?",
        options: [
          "Inverter error codes",
          "Reduced production troubleshooting",
          "Tripped breakers",
          "Monitoring offline"
        ],
        correctAnswer: 1,
        explanation: "Understanding why production is low helps find the right solution."
      },
      {
        id: 25,
        question: "What shows how much power you're making?",
        options: ["Inverter", "Mounting System", "Monitoring System", "Wiring"],
        correctAnswer: 2,
        explanation: "Monitoring systems track and display solar energy production."
      },
      {
        id: 26,
        question: "What type of panels are flexible and lightweight?",
        options: [
          "Monocrystalline",
          "Polycrystalline",
          "Thin-Film",
          "All panels"
        ],
        correctAnswer: 2,
        explanation: "Thin-film panels are flexible but generally less efficient."
      },
      {
        id: 27,
        question: "What must support panel weight?",
        options: [
          "Roof material",
          "Roof framing",
          "Paint color",
          "Gutters"
        ],
        correctAnswer: 1,
        explanation: "Roof framing must be strong enough for added panel weight."
      },
      {
        id: 28,
        question: "What should be checked before each tool use?",
        options: [
          "Tool price",
          "Tool inspection",
          "Tool color",
          "Tool brand"
        ],
        correctAnswer: 1,
        explanation: "Regular tool inspection ensures equipment is in safe condition."
      },
      {
        id: 29,
        question: "What secures panels with appropriate clamps?",
        options: [
          "Panel handling",
          "Panel placement",
          "Clamp installation",
          "Electrical connection"
        ],
        correctAnswer: 2,
        explanation: "Proper clamps hold panels securely to mounting rails."
      },
      {
        id: 30,
        question: "What should be worn during maintenance?",
        options: [
          "Regular clothes",
          "Personal protective equipment",
          "Comfortable shoes only",
          "No special gear needed"
        ],
        correctAnswer: 1,
        explanation: "PPE protects against maintenance hazards."
      },
      {
        id: 31,
        question: "What direction is best in northern hemisphere?",
        options: ["North", "South", "East", "West"],
        correctAnswer: 1,
        explanation: "South-facing captures most sunlight throughout the day."
      },
      {
        id: 32,
        question: "What protects and routes electrical cables?",
        options: [
          "Disconnect Switches",
          "Conduit and Wiring",
          "Circuit Breakers",
          "Junction Boxes"
        ],
        correctAnswer: 1,
        explanation: "Conduit protects wires from damage and weather."
      },
      {
        id: 33,
        question: "What must withstand local wind conditions?",
        options: [
          "Load calculations",
          "Wind load rating",
          "Snow load rating",
          "Seismic considerations"
        ],
        correctAnswer: 1,
        explanation: "Installation must be rated for local maximum wind speeds."
      },
      {
        id: 34,
        question: "What protects against electrical shock?",
        options: [
          "Lockout procedures",
          "Insulated tools",
          "Voltage testers",
          "Circuit identification"
        ],
        correctAnswer: 1,
        explanation: "Insulated tools prevent electrical current from reaching users."
      },
      {
        id: 35,
        question: "What installs conduit from array to equipment?",
        options: [
          "Wire pulling",
          "Conduit runs",
          "Inverter installation",
          "Disconnect installation"
        ],
        correctAnswer: 1,
        explanation: "Conduit protects wires between panels and electrical equipment."
      },
      {
        id: 36,
        question: "What trims trees that create shading?",
        options: [
          "Visual inspections",
          "Panel cleaning",
          "Vegetation management",
          "Connection checks"
        ],
        correctAnswer: 2,
        explanation: "Tree trimming maintains good sun exposure as plants grow."
      },
      {
        id: 37,
        question: "What measures energy generated by solar?",
        options: [
          "Consumption Meters",
          "Production Meters",
          "Monitoring Apps",
          "Display Screens"
        ],
        correctAnswer: 1,
        explanation: "Production meters track electricity generated by the solar system."
      },
      {
        id: 38,
        question: "What is required for electrical work?",
        options: [
          "Building permits",
          "Electrical permits",
          "Utility interconnection",
          "Zoning approval"
        ],
        correctAnswer: 1,
        explanation: "Electrical permits are specifically required for wiring work."
      },
      {
        id: 39,
        question: "What provides temporary edge protection?",
        options: [
          "Anchor points",
          "Guardrails",
          "Safety nets",
          "Ladder safety"
        ],
        correctAnswer: 1,
        explanation: "Temporary guardrails prevent falls from roof edges."
      },
      {
        id: 40,
        question: "What is final check of all components?",
        options: [
          "Continuity testing",
          "Visual inspection",
          "Insulation testing",
          "Polarity verification"
        ],
        correctAnswer: 1,
        explanation: "Visual inspection catches obvious issues before system activation."
      }
    ]
  }
};
