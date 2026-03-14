// Irrigation Systems (Certificate) - Complete Course Data
export const irrigationSystemsCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "irrigation-systems-certificate",
  title: "Irrigation Systems (Certificate)",
  description: "Learn the fundamentals of irrigation systems for gardens, farms, and landscapes. Master water-efficient irrigation techniques, basic system design, and practical installation methods.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "💧",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Introduction to Irrigation Systems",
      completed: false,
      content: `
## Understanding Irrigation Basics

Irrigation is the artificial application of water to land to help grow plants. This module introduces you to the fundamental concepts and importance of proper irrigation.

### Why Irrigation Matters

Plants need water to grow, but nature doesn't always provide the right amount at the right time. Irrigation helps us:
- **Support plant growth** during dry periods
- **Increase crop yields** for better harvests
- **Maintain beautiful landscapes** and gardens
- **Conserve water** by applying it efficiently
- **Prevent plant stress** from too little or too much water

### Basic Irrigation Components

Every irrigation system has these basic parts:

**Water Source**: Where water comes from (tap, well, pond, or rainwater tank)

**Piping**: Tubes that carry water through the system

**Valves**: Control devices that turn water on and off

**Sprinklers/Drippers**: Devices that distribute water to plants

**Controller/Timer**: Brain of the system that automates watering

**Filters**: Remove debris that could clog the system

### Types of Irrigation Systems

**Surface Irrigation**: Water flows over the soil surface (oldest method, like flood irrigation)

**Sprinkler Irrigation**: Water sprayed through the air like rain

**Drip Irrigation**: Water drips slowly directly to plant roots

**Subsurface Irrigation**: Water applied below the soil surface

**Manual Irrigation**: Watering by hand with hose or watering can

### Water Conservation Principles

Good irrigation isn't just about applying water—it's about applying the RIGHT amount:

**Right Amount**: Give plants what they need, not more

**Right Time**: Water when plants need it most (usually early morning)

**Right Place**: Apply water where roots can use it

**Right Method**: Choose the most efficient irrigation type for your plants

### Getting Started with Irrigation

Before designing any system, ask these questions:
1. **What plants** are you watering? (Different plants have different needs)
2. **What's your water source**? (Pressure and availability matter)
3. **What's your soil type**? (Sandy, clay, or loam?)
4. **What's your climate**? (Hot/dry vs cool/wet affects water needs)
5. **What's your budget**? (Simple vs complex systems have different costs)
`,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of irrigation?",
          options: ["To waste water", "To artificially apply water to help plants grow", "To create mud", "To increase water bills"],
          correctAnswer: 1,
          explanation: "Irrigation artificially applies water to land to support plant growth when natural rainfall is insufficient."
        },
        {
          id: 2,
          question: "What carries water through an irrigation system?",
          options: ["Valves", "Piping", "Controllers", "Filters"],
          correctAnswer: 1,
          explanation: "Piping (tubes or pipes) carries water from the source to where it's needed in the system."
        },
        {
          id: 3,
          question: "What turns water on and off in the system?",
          options: ["Pipes", "Valves", "Sprinklers", "Timers"],
          correctAnswer: 1,
          explanation: "Valves are control devices that regulate water flow by opening and closing."
        },
        {
          id: 4,
          question: "What sprays water through the air like rain?",
          options: ["Drip irrigation", "Sprinkler irrigation", "Surface irrigation", "Manual irrigation"],
          correctAnswer: 1,
          explanation: "Sprinkler irrigation distributes water through the air, similar to natural rainfall."
        },
        {
          id: 5,
          question: "What drips water slowly to plant roots?",
          options: ["Sprinkler irrigation", "Drip irrigation", "Flood irrigation", "Hand watering"],
          correctAnswer: 1,
          explanation: "Drip irrigation delivers water slowly and directly to the soil near plant roots."
        },
        {
          id: 6,
          question: "What is the brain of an automated system?",
          options: ["Pipe", "Valve", "Controller/Timer", "Sprinkler head"],
          correctAnswer: 2,
          explanation: "The controller or timer automates when and how long the system waters."
        },
        {
          id: 7,
          question: "What removes debris from water?",
          options: ["Valves", "Filters", "Controllers", "Sprinklers"],
          correctAnswer: 1,
          explanation: "Filters remove particles and debris that could clog irrigation components."
        },
        {
          id: 8,
          question: "What is the oldest irrigation method?",
          options: ["Drip irrigation", "Sprinkler irrigation", "Surface irrigation", "Subsurface irrigation"],
          correctAnswer: 2,
          explanation: "Surface irrigation (like flood irrigation) is the oldest and simplest method."
        },
        {
          id: 9,
          question: "When is usually the best time to water?",
          options: ["Midday", "Late afternoon", "Early morning", "Middle of the night"],
          correctAnswer: 2,
          explanation: "Early morning watering reduces evaporation and allows plants to use water throughout the day."
        },
        {
          id: 10,
          question: "What should you apply water to for best results?",
          options: ["Plant leaves", "Where roots can use it", "Entire garden surface", "Only walkways"],
          correctAnswer: 1,
          explanation: "Water should be applied where plant roots can access it for maximum efficiency."
        },
        {
          id: 11,
          question: "What increases crop yields?",
          options: ["Less water", "Proper irrigation", "No irrigation", "Random watering"],
          correctAnswer: 1,
          explanation: "Proper irrigation provides consistent moisture that increases crop yields and quality."
        },
        {
          id: 12,
          question: "What prevents plant stress?",
          options: ["Too much water", "Proper irrigation", "No water", "Irregular watering"],
          correctAnswer: 1,
          explanation: "Consistent, appropriate irrigation prevents stress from too much or too little water."
        },
        {
          id: 13,
          question: "What applies water below soil surface?",
          options: ["Sprinkler", "Drip", "Subsurface irrigation", "Surface irrigation"],
          correctAnswer: 2,
          explanation: "Subsurface irrigation delivers water below the soil surface directly to root zones."
        },
        {
          id: 14,
          question: "What is watering by hand called?",
          options: ["Automatic irrigation", "Manual irrigation", "Sprinkler irrigation", "Drip irrigation"],
          correctAnswer: 1,
          explanation: "Manual irrigation involves watering plants by hand using hoses or watering cans."
        },
        {
          id: 15,
          question: "What should you ask before designing a system?",
          options: ["Only about cost", "Only about plants", "Multiple questions about plants, water, soil, climate", "No questions needed"],
          correctAnswer: 2,
          explanation: "Good system design considers plants, water source, soil type, climate, and budget."
        },
        {
          id: 16,
          question: "What affects how much water plants need?",
          options: ["Only plant type", "Only soil type", "Plant type, soil, and climate", "Nothing matters"],
          correctAnswer: 2,
          explanation: "Water needs depend on plant type, soil characteristics, and climate conditions."
        },
        {
          id: 17,
          question: "What is water conservation about?",
          options: ["Using as much as possible", "Using the right amount at right time and place", "Never watering", "Only watering expensive plants"],
          correctAnswer: 1,
          explanation: "Water conservation means applying the right amount at the right time and place."
        },
        {
          id: 18,
          question: "What helps maintain beautiful landscapes?",
          options: ["No watering", "Proper irrigation", "Only natural rain", "Watering only in winter"],
          correctAnswer: 1,
          explanation: "Proper irrigation keeps landscapes healthy and beautiful throughout the year."
        },
        {
          id: 19,
          question: "What is an example of water source?",
          options: ["Only municipal tap", "Tap, well, pond, or rainwater tank", "Only river", "Only ocean"],
          correctAnswer: 1,
          explanation: "Water sources can include municipal taps, wells, ponds, rivers, or rainwater collection tanks."
        },
        {
          id: 20,
          question: "What should you consider in system design?",
          options: ["Only what looks nice", "Efficiency and plant needs", "Only lowest cost", "Only what's easiest"],
          correctAnswer: 1,
          explanation: "Good design balances efficiency, plant needs, cost, and ease of use."
        }
      ]
    },
    {
      id: 2,
      title: "Sprinkler Irrigation Systems",
      completed: false,
      content: `
## Understanding Sprinkler Irrigation

Sprinkler systems mimic natural rainfall by spraying water through the air. This module covers different types of sprinklers and how to use them effectively.

### Types of Sprinklers

**Rotary Sprinklers**: Rotate to cover circular areas. Good for large lawns and fields.

**Spray Sprinklers**: Fixed spray patterns. Good for small, regular-shaped areas.

**Impact Sprinklers**: Make clicking sounds as they rotate. Good for large areas and tough conditions.

**Pop-up Sprinklers**: Retract into ground when not in use. Good for lawns where mowing occurs.

**Oscillating Sprinklers**: Move back and forth in a rectangular pattern. Good for rectangular lawns.

### Sprinkler Performance Factors

**Water Pressure**: Force pushing water through the system. Affects how far sprinklers throw water.

**Flow Rate**: How much water comes out per minute. Measured in gallons per minute (GPM) or liters per minute.

**Coverage Pattern**: Shape of area watered (full circle, half circle, quarter circle, etc.).

**Throw Distance**: How far water is sprayed from the sprinkler.

**Precipitation Rate**: How much water is applied per hour (like rainfall measurement).

### Designing a Sprinkler System

**Step 1: Measure Area**: Draw your garden/lawn and measure dimensions.

**Step 2: Choose Sprinklers**: Select appropriate types for different areas.

**Step 3: Create Zones**: Group sprinklers with similar water needs together.

**Step 4: Calculate Water Needs**: Ensure water source can supply all sprinklers.

**Step 5: Plan Layout**: Position sprinklers for good coverage without waste.

### Coverage Patterns and Spacing

**Head-to-Head Coverage**: Sprinklers should be spaced so water from one reaches the next sprinkler. This ensures even coverage.

**Pattern Selection**: Use full circles for center of areas, half circles for edges, quarter circles for corners.

**Avoid Overlap Problems**: Too much overlap wastes water, too little creates dry spots.

**Wind Considerations**: In windy areas, space sprinklers closer together or water when wind is calm.

### Common Sprinkler Problems

**Dry Spots**: Areas not getting enough water. Fix by adjusting sprinkler position or adding more sprinklers.

**Overwatering**: Areas getting too much water. Adjust sprinkler pattern or reduce watering time.

**Misting**: Water breaking into fine mist (wastes water, increases evaporation). Usually caused by too high pressure.

**Runoff**: Water flowing off surface before soaking in. Usually means applying water too fast for soil to absorb.
`,
      quiz: [
        {
          id: 1,
          question: "What mimics natural rainfall?",
          options: ["Drip irrigation", "Sprinkler irrigation", "Surface irrigation", "Hand watering"],
          correctAnswer: 1,
          explanation: "Sprinkler irrigation sprays water through the air like natural rainfall."
        },
        {
          id: 2,
          question: "What rotates to cover circular areas?",
          options: ["Spray sprinklers", "Rotary sprinklers", "Pop-up sprinklers", "Drip emitters"],
          correctAnswer: 1,
          explanation: "Rotary sprinklers rotate in circles to cover circular or part-circular areas."
        },
        {
          id: 3,
          question: "What retracts into ground when not in use?",
          options: ["Impact sprinklers", "Pop-up sprinklers", "Oscillating sprinklers", "Spray heads"],
          correctAnswer: 1,
          explanation: "Pop-up sprinklers retract to ground level to avoid damage during lawn mowing."
        },
        {
          id: 4,
          question: "What moves back and forth in rectangular pattern?",
          options: ["Rotary", "Oscillating", "Impact", "Pop-up"],
          correctAnswer: 1,
          explanation: "Oscillating sprinklers move back and forth to cover rectangular areas."
        },
        {
          id: 5,
          question: "What affects how far sprinklers throw water?",
          options: ["Color of sprinkler", "Water pressure", "Time of day", "Plant type"],
          correctAnswer: 1,
          explanation: "Water pressure determines the force pushing water through sprinklers, affecting throw distance."
        },
        {
          id: 6,
          question: "What is measured in gallons per minute?",
          options: ["Pressure", "Flow rate", "Coverage pattern", "Throw distance"],
          correctAnswer: 1,
          explanation: "Flow rate measures how much water comes out per minute (GPM or LPM)."
        },
        {
          id: 7,
          question: "What is the first step in designing a system?",
          options: ["Buy sprinklers", "Measure area", "Turn on water", "Dig trenches"],
          correctAnswer: 1,
          explanation: "Always start by measuring and drawing your irrigation area."
        },
        {
          id: 8,
          question: "What should be grouped together?",
          options: ["All sprinklers", "Sprinklers with similar water needs", "Different types randomly", "Only expensive sprinklers"],
          correctAnswer: 1,
          explanation: "Group sprinklers with similar water requirements into the same watering zone."
        },
        {
          id: 9,
          question: "What ensures even coverage?",
          options: ["Head-to-head coverage", "Random spacing", "No overlap", "Far apart spacing"],
          correctAnswer: 0,
          explanation: "Head-to-head coverage means sprinklers are spaced so water from one reaches the next."
        },
        {
          id: 10,
          question: "What pattern for area edges?",
          options: ["Full circle", "Half circle", "Quarter circle", "No pattern"],
          correctAnswer: 1,
          explanation: "Half-circle patterns are ideal for edges of lawns or garden beds."
        },
        {
          id: 11,
          question: "What causes dry spots?",
          options: ["Too much overlap", "Insufficient coverage", "Proper spacing", "Good design"],
          correctAnswer: 1,
          explanation: "Dry spots occur when areas don't receive enough water from sprinkler coverage."
        },
        {
          id: 12,
          question: "What causes misting?",
          options: ["Low pressure", "High pressure", "Proper pressure", "No pressure"],
          correctAnswer: 1,
          explanation: "Misting (water breaking into fine spray) is usually caused by excessive water pressure."
        },
        {
          id: 13,
          question: "What is runoff?",
          options: ["Water soaking in", "Water flowing off surface", "Proper absorption", "No water application"],
          correctAnswer: 1,
          explanation: "Runoff occurs when water application rate exceeds soil absorption rate."
        },
        {
          id: 14,
          question: "What makes clicking sounds as it rotates?",
          options: ["Spray sprinkler", "Impact sprinkler", "Pop-up sprinkler", "Drip emitter"],
          correctAnswer: 1,
          explanation: "Impact sprinklers make distinctive clicking sounds as their arms hit stops during rotation."
        },
        {
          id: 15,
          question: "What is good for large lawns?",
          options: ["Small spray heads", "Rotary sprinklers", "Drip only", "Hand watering"],
          correctAnswer: 1,
          explanation: "Rotary sprinklers are efficient for covering large lawn areas."
        },
        {
          id: 16,
          question: "What is precipitation rate?",
          options: ["Water pressure", "How much water applied per hour", "Flow rate", "Throw distance"],
          correctAnswer: 1,
          explanation: "Precipitation rate measures how much water is applied per hour, similar to rainfall measurement."
        },
        {
          id: 17,
          question: "What should you consider in windy areas?",
          options: ["Space sprinklers farther", "Space sprinklers closer", "Ignore wind", "Only water at night"],
          correctAnswer: 1,
          explanation: "In windy conditions, space sprinklers closer together for better coverage."
        },
        {
          id: 18,
          question: "What is good for small, regular-shaped areas?",
          options: ["Impact sprinklers", "Spray sprinklers", "Large rotors", "Drip for everything"],
          correctAnswer: 1,
          explanation: "Spray sprinklers work well for small, regularly shaped garden beds or lawn sections."
        },
        {
          id: 19,
          question: "What should you ensure water source can do?",
          options: ["Look pretty", "Supply all sprinklers' needs", "Be expensive", "Be complicated"],
          correctAnswer: 1,
          explanation: "Always verify your water source can provide enough flow and pressure for your planned system."
        },
        {
          id: 20,
          question: "What is too much overlap?",
          options: ["Good efficiency", "Water waste", "Perfect design", "Required for all systems"],
          correctAnswer: 1,
          explanation: "Excessive sprinkler overlap wastes water and can lead to overwatering in those areas."
        }
      ]
    },
    {
      id: 3,
      title: "Drip Irrigation Systems",
      completed: false,
      content: `
## Efficient Water Delivery with Drip Irrigation

Drip irrigation delivers water slowly and directly to plant roots. This is the most water-efficient method available, saving 30-50% compared to sprinklers.

### How Drip Irrigation Works

**Slow Application**: Water drips or trickles slowly into soil.

**Direct to Roots**: Applied at base of plants where roots are.

**Low Pressure Operation**: Works at much lower pressure than sprinklers.

**Minimal Evaporation**: Little water exposed to air, so less evaporation loss.

**Reduced Weed Growth**: Only target plants get water, so fewer weeds grow.

### Drip System Components

**Tubing**: Flexible pipes that carry water through system.

**Emitters**: Devices that release water at controlled rate (drippers).

**Micro-sprayers**: Small sprinklers for closely spaced plants.

**Soaker Hoses**: Porous hoses that seep water along their length.

**Pressure Regulators**: Reduce and stabilize water pressure.

**Filters**: Essential for drip systems to prevent clogging.

### Types of Emitters

**Point-Source Emitters**: Individual drippers placed at each plant.

**Inline Emitters**: Built into tubing at regular intervals.

**Adjustable Flow Emitters**: Can change flow rate as needed.

**Pressure-Compensating Emitters**: Maintain constant flow even with pressure changes.

**Self-Cleaning Emitters**: Designed to flush out debris automatically.

### Designing a Drip System

**Step 1: Plant Inventory**: List all plants and their water needs.

**Step 2: Group Plants**: Group plants with similar water requirements together.

**Step 3: Calculate Water Needs**: Determine total flow requirements.

**Step 4: Choose Components**: Select appropriate emitters and tubing.

**Step 5: Plan Layout**: Design tubing runs and emitter placement.

### Advantages of Drip Irrigation

**Water Efficiency**: Up to 90% efficiency (compared to 65-75% for sprinklers).

**Reduced Disease**: Leaves stay dry, reducing fungal diseases.

**Flexibility**: Easy to modify as garden changes.

**Works with Low Pressure**: Can operate from rainwater tanks or low-pressure sources.

**Fertilizer Efficiency**: Can inject fertilizer directly to roots (fertigation).

### Maintenance Requirements

**Regular Flushing**: Flush system periodically to remove debris.

**Filter Cleaning**: Clean filters regularly (more often than sprinkler systems).

**Emitter Checking**: Inspect emitters for clogs or damage.

**Winterization**: Drain system in freezing climates to prevent damage.

**Pressure Monitoring**: Check pressure regularly to ensure proper operation.
`,
      quiz: [
        {
          id: 1,
          question: "What is the most water-efficient irrigation method?",
          options: ["Sprinkler", "Drip", "Surface", "Manual"],
          correctAnswer: 1,
          explanation: "Drip irrigation is 85-90% efficient, compared to 65-75% for sprinklers."
        },
        {
          id: 2,
          question: "Where does drip irrigation apply water?",
          options: ["On leaves", "In the air", "At plant roots", "Everywhere"],
          correctAnswer: 2,
          explanation: "Drip irrigation applies water slowly and directly at the base of plants where roots are."
        },
        {
          id: 3,
          question: "What carries water in drip systems?",
          options: ["Rigid pipes", "Flexible tubing", "Only emitters", "No tubing needed"],
          correctAnswer: 1,
          explanation: "Flexible tubing carries water through drip irrigation systems."
        },
        {
          id: 4,
          question: "What releases water at controlled rate?",
          options: ["Valves", "Controllers", "Emitters", "Filters"],
          correctAnswer: 2,
          explanation: "Emitters (drippers) control and release water at specific flow rates."
        },
        {
          id: 5,
          question: "What reduces pressure for drip systems?",
          options: ["Filters", "Pressure regulators", "Emitters", "Tubing"],
          correctAnswer: 1,
          explanation: "Pressure regulators reduce and stabilize water pressure for drip systems."
        },
        {
          id: 6,
          question: "What is essential for drip systems to prevent clogging?",
          options: ["Valves", "Filters", "Controllers", "Sprinklers"],
          correctAnswer: 1,
          explanation: "Filters are critical in drip systems to remove particles that could clog small emitter openings."
        },
        {
          id: 7,
          question: "What are individual drippers called?",
          options: ["Inline emitters", "Point-source emitters", "Micro-sprayers", "Soaker hoses"],
          correctAnswer: 1,
          explanation: "Point-source emitters are individual drippers placed at specific plant locations."
        },
        {
          id: 8,
          question: "What maintains constant flow with pressure changes?",
          options: ["Adjustable emitters", "Pressure-compensating emitters", "Regular emitters", "All emitters"],
          correctAnswer: 1,
          explanation: "Pressure-compensating emitters maintain consistent flow regardless of pressure variations."
        },
        {
          id: 9,
          question: "What is the first step in drip system design?",
          options: ["Buy tubing", "List plants and water needs", "Dig trenches", "Turn on water"],
          correctAnswer: 1,
          explanation: "Start by inventorying all plants and determining their individual water requirements."
        },
        {
          id: 10,
          question: "What should be grouped together?",
          options: ["All plants", "Plants with similar water needs", "Random plants", "Only expensive plants"],
          correctAnswer: 1,
          explanation: "Group plants with similar water requirements on the same drip irrigation zone."
        },
        {
          id: 11,
          question: "How much water can drip save compared to sprinklers?",
          options: ["10-20%", "30-50%", "No savings", "More water used"],
          correctAnswer: 1,
          explanation: "Drip irrigation typically saves 30-50% of water compared to sprinkler systems."
        },
        {
          id: 12,
          question: "What reduces with drip irrigation?",
          options: ["Water efficiency", "Fungal diseases", "Plant growth", "Root development"],
          correctAnswer: 1,
          explanation: "Since leaves stay dry, drip irrigation reduces fungal diseases that thrive on wet foliage."
        },
        {
          id: 13,
          question: "What can work with low-pressure water sources?",
          options: ["Only sprinklers", "Drip systems", "Neither", "Both equally"],
          correctAnswer: 1,
          explanation: "Drip systems can operate effectively with low-pressure sources like rainwater tanks."
        },
        {
          id: 14,
          question: "What is injecting fertilizer through irrigation called?",
          options: ["Fertigation", "Watering", "Spraying", "Mixing"],
          correctAnswer: 0,
          explanation: "Fertigation is applying fertilizer through irrigation water, especially effective with drip systems."
        },
        {
          id: 15,
          question: "What should be done periodically to drip systems?",
          options: ["Ignore them", "Regular flushing", "Never maintain", "Replace everything yearly"],
          correctAnswer: 1,
          explanation: "Regular flushing removes accumulated debris from drip system tubing."
        },
        {
          id: 16,
          question: "What needs frequent cleaning in drip systems?",
          options: ["Tubing", "Filters", "Emitters only", "Nothing"],
          correctAnswer: 1,
          explanation: "Filters in drip systems require more frequent cleaning than in sprinkler systems."
        },
        {
          id: 17,
          question: "What should be inspected for clogs?",
          options: ["Only tubing", "Emitters", "Only filters", "Everything but emitters"],
          correctAnswer: 1,
          explanation: "Regularly inspect emitters for clogs or reduced flow."
        },
        {
          id: 18,
          question: "What is needed in freezing climates?",
          options: ["More watering", "Winterization", "Ignore freezing", "Heat system"],
          correctAnswer: 1,
          explanation: "Winterization (draining the system) prevents freeze damage in cold climates."
        },
        {
          id: 19,
          question: "What seeps water along its length?",
          options: ["Drip tubing", "Soaker hose", "Emitter line", "PVC pipe"],
          correctAnswer: 1,
          explanation: "Soaker hoses are porous hoses that seep water along their entire length."
        },
        {
          id: 20,
          question: "What are small sprinklers for closely spaced plants?",
          options: ["Rotary sprinklers", "Micro-sprayers", "Impact sprinklers", "Pop-up sprinklers"],
          correctAnswer: 1,
          explanation: "Micro-sprayers are small sprinkler heads used in drip systems for closely planted areas."
        }
      ]
    },
    {
      id: 4,
      title: "Irrigation Controllers and Automation",
      completed: false,
      content: `
## Smart Watering with Controllers

Irrigation controllers (timers) automate when and how long your system waters. Modern controllers can save water and make gardening easier.

### Types of Controllers

**Basic Timers**: Simple clock-based controllers with limited programming.

**Digital Controllers**: More features, multiple programs, easier to use.

**Smart Controllers**: Connect to weather data or soil moisture sensors.

**Hybrid Controllers**: Combine timer functions with smart features.

**Battery vs Plug-in**: Battery-operated for areas without power, plug-in for permanent installation.

### Controller Programming Basics

**Start Times**: When watering begins each day.

**Run Times**: How long each zone waters.

**Days Between Watering**: How often to water (daily, every other day, specific days).

**Multiple Programs**: Different schedules for different plant types or seasons.

**Manual Operation**: Ability to run system manually for testing or special watering.

### Smart Controller Features

**Weather-Based**: Adjusts watering based on local weather conditions.

**Soil Moisture Sensors**: Water only when soil is dry.

**Rain Sensors**: Skip watering when it rains.

**Evapotranspiration (ET) Controllers**: Calculate water needs based on weather data.

**Remote Access**: Control and monitor from smartphone or computer.

**Water Usage Tracking**: Monitor how much water your system uses.

### Sensor Integration

**Rain Sensors**: Prevent watering during or after rainfall.

**Freeze Sensors**: Prevent watering when temperatures could cause ice.

**Wind Sensors**: Delay watering during windy conditions.

**Soil Moisture Sensors**: Measure actual soil moisture at root zone.

**Flow Sensors**: Detect leaks or broken pipes by monitoring water flow.

### Watering Schedule Guidelines

**Seasonal Adjustments**: Water more in summer, less in spring and fall.

**Plant Type Considerations**: Different plants have different watering needs.

**Soil Type Adjustments**: Sandy soil needs more frequent watering, clay less frequent.

**New vs Established Plants**: New plants need more frequent watering until established.

**Morning Watering**: Best time is early morning (reduces evaporation, allows leaves to dry).

### Maintenance and Troubleshooting

**Battery Replacement**: For battery-operated controllers.

**Program Review**: Review and adjust programs seasonally.

**Sensor Testing**: Test sensors periodically to ensure they work.

**Backup Power**: Consider battery backup for power outages.

**Manual Override Testing**: Test manual operation features regularly.
`,
      quiz: [
        {
          id: 1,
          question: "What automates irrigation systems?",
          options: ["Sprinklers", "Controllers/Timers", "Pipes", "Valves"],
          correctAnswer: 1,
          explanation: "Controllers or timers automate when and how long irrigation systems operate."
        },
        {
          id: 2,
          question: "What has limited programming features?",
          options: ["Smart controllers", "Basic timers", "Digital controllers", "Hybrid controllers"],
          correctAnswer: 1,
          explanation: "Basic timers have simple clock-based programming with limited options."
        },
        {
          id: 3,
          question: "What connects to weather data?",
          options: ["Basic timers", "Smart controllers", "Manual valves", "Sprinklers only"],
          correctAnswer: 1,
          explanation: "Smart controllers can connect to weather stations or online weather data."
        },
        {
          id: 4,
          question: "What is needed for areas without power?",
          options: ["Plug-in only", "Battery-operated controllers", "No controllers", "Solar only"],
          correctAnswer: 1,
          explanation: "Battery-operated controllers work where electrical outlets aren't available."
        },
        {
          id: 5,
          question: "What determines when watering begins?",
          options: ["Run times", "Start times", "Days between", "Zone settings"],
          correctAnswer: 1,
          explanation: "Start times program when each watering cycle begins."
        },
        {
          id: 6,
          question: "What programs how long zones water?",
          options: ["Start times", "Run times", "Days between", "Program selection"],
          correctAnswer: 1,
          explanation: "Run times determine how many minutes each irrigation zone operates."
        },
        {
          id: 7,
          question: "What adjusts watering based on weather?",
          options: ["Basic timers", "Weather-based controllers", "Manual controllers", "No controllers"],
          correctAnswer: 1,
          explanation: "Weather-based controllers adjust schedules based on actual weather conditions."
        },
        {
          id: 8,
          question: "What skips watering when soil is moist?",
          options: ["Timer only", "Soil moisture sensors", "Rain sensors", "Wind sensors"],
          correctAnswer: 1,
          explanation: "Soil moisture sensors measure soil wetness and prevent watering when sufficient moisture exists."
        },
        {
          id: 9,
          question: "What prevents watering during rain?",
          options: ["Timer override", "Rain sensors", "Soil sensors", "Wind sensors"],
          correctAnswer: 1,
          explanation: "Rain sensors detect rainfall and interrupt scheduled irrigation."
        },
        {
          id: 10,
          question: "What calculates water needs from weather data?",
          options: ["Basic timers", "ET controllers", "Manual calculation", "Guesswork"],
          correctAnswer: 1,
          explanation: "Evapotranspiration (ET) controllers calculate water requirements from weather data."
        },
        {
          id: 11,
          question: "When is the best time to water?",
          options: ["Midday", "Early morning", "Late evening", "Anytime"],
          correctAnswer: 1,
          explanation: "Early morning watering reduces evaporation and allows foliage to dry before night."
        },
        {
          id: 12,
          question: "What needs more frequent watering?",
          options: ["Sandy soil", "Clay soil", "All equal", "No soil needs water"],
          correctAnswer: 0,
          explanation: "Sandy soil drains quickly and typically needs more frequent, shorter watering."
        },
        {
          id: 13,
          question: "What needs less frequent watering?",
          options: ["Sandy soil", "Clay soil", "All equal", "All need same"],
          correctAnswer: 1,
          explanation: "Clay soil holds water longer and needs less frequent but longer watering."
        },
        {
          id: 14,
          question: "What prevents watering in freezing temperatures?",
          options: ["Rain sensors", "Freeze sensors", "Soil sensors", "Wind sensors"],
          correctAnswer: 1,
          explanation: "Freeze sensors prevent irrigation when temperatures could cause ice formation."
        },
        {
          id: 15,
          question: "What detects leaks in system?",
          options: ["Rain sensors", "Flow sensors", "Soil sensors", "Wind sensors"],
          correctAnswer: 1,
          explanation: "Flow sensors monitor water usage and can detect unusual flows indicating leaks."
        },
        {
          id: 16,
          question: "What should be done seasonally?",
          options: ["Ignore controller", "Review and adjust programs", "Never change", "Replace controller"],
          correctAnswer: 1,
          explanation: "Irrigation schedules should be reviewed and adjusted with changing seasons."
        },
        {
          id: 17,
          question: "What should be tested periodically?",
          options: ["Only sprinklers", "Sensors", "Nothing", "Everything but sensors"],
          correctAnswer: 1,
          explanation: "Regularly test all sensors to ensure they're working correctly."
        },
        {
          id: 18,
          question: "What is good for power outages?",
          options: ["No backup needed", "Battery backup", "Ignore outages", "Manual watering only"],
          correctAnswer: 1,
          explanation: "Battery backup maintains controller programming during power outages."
        },
        {
          id: 19,
          question: "What is different for new plants?",
          options: ["Same as established", "More frequent watering", "Less water", "No water"],
          correctAnswer: 1,
          explanation: "Newly planted vegetation needs more frequent watering until roots establish."
        },
        {
          id: 20,
          question: "What allows control from smartphone?",
          options: ["Basic timers", "Remote access", "Manual only", "No controllers"],
          correctAnswer: 1,
          explanation: "Modern smart controllers often offer remote access via smartphone apps."
        }
      ]
    },
    {
      id: 5,
      title: "Water Sources and System Pressure",
      completed: false,
      content: `
## Understanding Your Water Supply

Different water sources have different characteristics that affect irrigation system design and operation. This module covers water sources and pressure management.

### Common Water Sources

**Municipal Water**: Treated water from city/county systems. Consistent pressure and quality.

**Well Water**: Groundwater from private wells. May have minerals or need pumping.

**Surface Water**: Rivers, lakes, ponds. May need filtration and pumping.

**Rainwater Harvesting**: Collected rainwater. Environmentally friendly but supply varies.

**Recycled Water**: Treated wastewater. Often used for landscape irrigation.

### Water Pressure Basics

**What is Pressure?**: Force pushing water through pipes. Measured in PSI (pounds per square inch).

**Normal Ranges**: Most irrigation systems need 30-50 PSI.

**Low Pressure Problems**: Poor sprinkler performance, uneven coverage.

**High Pressure Problems**: Misting, fogging, erosion, component damage.

**Static Pressure**: Pressure when no water is flowing.

**Dynamic Pressure**: Pressure when water is flowing (always lower than static).

### Pressure Measurement and Adjustment

**Pressure Gauges**: Tools to measure water pressure.

**Pressure Regulators**: Devices that reduce high pressure to desired level.

**Booster Pumps**: Increase low pressure to adequate level.

**Pressure Loss Calculations**: Accounting for pressure loss through pipes and fittings.

### Flow Rate Considerations

**What is Flow Rate?**: Volume of water moving per minute (GPM or LPM).

**Maximum Available Flow**: How much water your source can provide.

**System Demand**: How much water your irrigation system needs.

**Matching Supply and Demand**: Design system to not exceed available flow.

### Water Quality Issues

**Hard Water**: High mineral content can clog emitters and sprinklers.

**Sediment/Debris**: Particles that can clog system components.

**pH Levels**: Acidity/alkalinity that can affect plants and system components.

**Chlorine**: In municipal water, can affect some plants.

**Filtration Needs**: Different sources need different filtration levels.

### System Design for Your Water Source

**Municipal System Design**: Consider pressure regulators if pressure is too high.

**Well System Design**: May need pressure tanks and additional filtration.

**Rainwater System Design**: Needs storage tanks and possibly pumps.

**Low-Flow Source Design**: May need to water zones sequentially rather than simultaneously.

### Conservation and Efficiency

**Catch Can Test**: Measure actual water application to ensure proper amounts.

**Pressure Regulation**: Proper pressure saves water and improves performance.

**Flow Control**: Matching application rate to soil absorption rate.

**Regular Maintenance**: Keeping system efficient through maintenance.

**Water Audits**: Periodically check system for leaks and inefficiencies.
`,
      quiz: [
        {
          id: 1,
          question: "What is treated water from city systems?",
          options: ["Well water", "Municipal water", "Surface water", "Rainwater"],
          correctAnswer: 1,
          explanation: "Municipal water comes from city or county treatment and distribution systems."
        },
        {
          id: 2,
          question: "What is groundwater from private sources?",
          options: ["Municipal", "Well water", "Surface water", "Recycled"],
          correctAnswer: 1,
          explanation: "Well water is groundwater accessed through private wells."
        },
        {
          id: 3,
          question: "What is collected rainfall?",
          options: ["Municipal", "Well", "Rainwater harvesting", "Recycled"],
          correctAnswer: 2,
          explanation: "Rainwater harvesting collects and stores rainfall for later use."
        },
        {
          id: 4,
          question: "What measures force pushing water?",
          options: ["Flow rate", "Pressure", "Volume", "Temperature"],
          correctAnswer: 1,
          explanation: "Pressure is the force pushing water through pipes, measured in PSI."
        },
        {
          id: 5,
          question: "What pressure range do most systems need?",
          options: ["10-20 PSI", "30-50 PSI", "60-80 PSI", "90-100 PSI"],
          correctAnswer: 1,
          explanation: "Most irrigation systems operate best at 30-50 pounds per square inch."
        },
        {
          id: 6,
          question: "What causes poor sprinkler performance?",
          options: ["High pressure", "Low pressure", "Proper pressure", "No pressure"],
          correctAnswer: 1,
          explanation: "Low pressure results in poor sprinkler throw distance and uneven coverage."
        },
        {
          id: 7,
          question: "What causes misting and fogging?",
          options: ["Low pressure", "High pressure", "Proper pressure", "No pressure"],
          correctAnswer: 1,
          explanation: "Excessive pressure causes water to break into fine mist, increasing evaporation."
        },
        {
          id: 8,
          question: "What measures water pressure?",
          options: ["Flow meter", "Pressure gauge", "Timer", "Filter"],
          correctAnswer: 1,
          explanation: "Pressure gauges are tools specifically for measuring water pressure."
        },
        {
          id: 9,
          question: "What reduces high pressure?",
          options: ["Booster pump", "Pressure regulator", "Larger pipes", "Smaller pipes"],
          correctAnswer: 1,
          explanation: "Pressure regulators reduce incoming pressure to a safe, usable level."
        },
        {
          id: 10,
          question: "What increases low pressure?",
          options: ["Pressure regulator", "Booster pump", "Smaller pipes", "No solution"],
          correctAnswer: 1,
          explanation: "Booster pumps increase water pressure when source pressure is too low."
        },
        {
          id: 11,
          question: "What measures water volume per minute?",
          options: ["Pressure", "Flow rate", "Temperature", "pH"],
          correctAnswer: 1,
          explanation: "Flow rate measures gallons or liters per minute moving through system."
        },
        {
          id: 12,
          question: "What should system not exceed?",
          options: ["Available flow", "Pressure limits", "Both flow and pressure", "Nothing matters"],
          correctAnswer: 2,
          explanation: "Irrigation system design must consider both available flow and pressure limits."
        },
        {
          id: 13,
          question: "What can clog emitters?",
          options: ["Pure water", "Hard water minerals", "Low pressure", "Proper filtration"],
          correctAnswer: 1,
          explanation: "Hard water contains minerals that can precipitate and clog small emitter openings."
        },
        {
          id: 14,
          question: "What removes particles from water?",
          options: ["Pressure regulators", "Filtration", "Pumps", "Controllers"],
          correctAnswer: 1,
          explanation: "Filtration systems remove sediment and debris that could clog irrigation components."
        },
        {
          id: 15,
          question: "What may need pressure tanks?",
          options: ["Municipal systems", "Well systems", "Rainwater systems", "All systems"],
          correctAnswer: 1,
          explanation: "Well systems often require pressure tanks to maintain consistent pressure."
        },
        {
          id: 16,
          question: "What needs storage tanks?",
          options: ["Municipal", "Well", "Rainwater systems", "All systems"],
          correctAnswer: 2,
          explanation: "Rainwater harvesting requires storage tanks to collect and hold rainfall."
        },
        {
          id: 17,
          question: "What measures actual water application?",
          options: ["Guesswork", "Catch can test", "No measurement", "Visual estimate"],
          correctAnswer: 1,
          explanation: "Catch can tests use containers to measure actual water applied by irrigation."
        },
        {
          id: 18,
          question: "What is pressure when no water flows?",
          options: ["Dynamic pressure", "Static pressure", "No pressure", "Working pressure"],
          correctAnswer: 1,
          explanation: "Static pressure is measured when no water is flowing through system."
        },
        {
          id: 19,
          question: "What is treated wastewater for irrigation?",
          options: ["Potable water", "Recycled water", "Well water", "Rainwater"],
          correctAnswer: 1,
          explanation: "Recycled water is treated wastewater approved for landscape irrigation."
        },
        {
          id: 20,
          question: "What should be done periodically?",
          options: ["Ignore system", "Water audits", "Never check", "Assume perfect"],
          correctAnswer: 1,
          explanation: "Regular water audits check for leaks, inefficiencies, and proper operation."
        }
      ]
    },
    {
      id: 6,
      title: "Installation and Maintenance Basics",
      completed: false,
      content: `
## Practical Irrigation System Care

Proper installation and regular maintenance keep irrigation systems working efficiently and save water. This module covers hands-on skills for system care.

### Basic Installation Steps

**Planning Phase**: Design system on paper before any digging.

**Gathering Materials**: Get all components before starting.

**Marking Layout**: Use spray paint or flags to mark where pipes and heads will go.

**Digging Trenches**: Dig to proper depth (usually 6-12 inches for main lines).

**Assembling System**: Connect pipes, install valves and sprinklers.

**Testing System**: Test for leaks and proper operation before covering.

**Backfilling**: Carefully fill trenches, avoiding damage to pipes.

### Essential Tools

**Trenching Shovel**: For digging trenches for pipes.

**Pipe Cutter**: Cuts PVC or polyethylene pipe cleanly.

**Teflon Tape**: Seals threaded connections.

**PVC Primer and Cement**: For gluing PVC pipe connections.

**Screwdrivers and Pliers**: For various adjustments and connections.

**Pressure Gauge**: For testing water pressure.

**Flow Meter**: Optional but useful for measuring water usage.

### Common Installation Mistakes

**Wrong Pipe Size**: Too small reduces flow, too large wastes money.

**Incorrect Depth**: Too shallow risks damage, too deep is unnecessary work.

**Poor Slope**: Pipes should slope slightly for drainage in freezing climates.

**Inadequate Support**: Long pipe runs may need support to prevent sagging.

**Rushing Testing**: Not testing thoroughly before covering up work.

### Routine Maintenance Tasks

**Seasonal Startup**: In spring, check system after winter.

**Seasonal Shutdown**: In fall, prepare system for winter in freezing climates.

**Monthly Checks**: Inspect for leaks, broken heads, or misaligned sprinklers.

**Filter Cleaning**: Clean filters regularly (frequency depends on water quality).

**Head Adjustment**: Adjust sprinkler heads as plants grow or landscape changes.

### Troubleshooting Common Problems

**Low Pressure**: Check for clogged filters, partially closed valves, or leaks.

**Dry Spots**: Adjust or add sprinklers, check for clogged nozzles.

**Overwatering**: Reduce run times, adjust sprinkler patterns.

**Leaks**: Listen for hissing sounds, look for wet spots, use leak detection dye.

**Controller Problems**: Check power, batteries, programming, and wiring connections.

### Watering Schedule Optimization

**Observe Plants**: Watch for signs of over or under watering.

**Adjust for Weather**: Water less during cool, cloudy periods; more during hot, dry spells.

**Consider Soil Type**: Adjust frequency and duration for your soil.

**Group Plants Properly**: Ensure plants with similar needs are on same zones.

**Use Multiple Start Times**: For clay soils, use multiple short cycles instead of one long one.

### Winterization in Cold Climates

**Blow Out Method**: Use compressed air to remove water from pipes.

**Manual Drain Method**: Open drain valves and let gravity empty system.

**Insulation**: Insulate above-ground components in marginal climates.

**Controller Settings**: Set controller to "rain" or "off" position.

**Record Keeping**: Document what was done for next spring's startup.
`,
      quiz: [
        {
          id: 1,
          question: "What should be done before any digging?",
          options: ["Start digging", "Design system on paper", "Buy random parts", "Call for help"],
          correctAnswer: 1,
          explanation: "Always plan and design your system on paper before beginning installation."
        },
        {
          id: 2,
          question: "What marks where pipes will go?",
          options: ["Guesswork", "Spray paint or flags", "No marking", "Memory only"],
          correctAnswer: 1,
          explanation: "Use spray paint or flags to mark pipe and sprinkler locations before digging."
        },
        {
          id: 3,
          question: "What depth for main irrigation lines?",
          options: ["2-3 inches", "6-12 inches", "24-36 inches", "On surface only"],
          correctAnswer: 1,
          explanation: "Main irrigation lines are typically buried 6-12 inches deep."
        },
        {
          id: 4,
          question: "What should be done before covering pipes?",
          options: ["Cover immediately", "Test system thoroughly", "Ignore testing", "Wait for rain"],
          correctAnswer: 1,
          explanation: "Always test for leaks and proper operation before backfilling trenches."
        },
        {
          id: 5,
          question: "What cuts pipe cleanly?",
          options: ["Hammer", "Pipe cutter", "Saw randomly", "Teeth"],
          correctAnswer: 1,
          explanation: "Pipe cutters provide clean, square cuts for proper pipe connections."
        },
        {
          id: 6,
          question: "What seals threaded connections?",
          options: ["Glue", "Teflon tape", "Nothing needed", "Dirt"],
          correctAnswer: 1,
          explanation: "Teflon tape creates watertight seals on threaded pipe connections."
        },
        {
          id: 7,
          question: "What glues PVC pipes?",
          options: ["Tape only", "PVC primer and cement", "Nothing", "Super glue"],
          correctAnswer: 1,
          explanation: "PVC primer and cement chemically weld PVC pipes together permanently."
        },
        {
          id: 8,
          question: "What is wrong pipe size problem?",
          options: ["No problem", "Too small reduces flow", "Only cost issue", "Only looks bad"],
          correctAnswer: 1,
          explanation: "Oversized pipes waste money, undersized pipes restrict water flow."
        },
        {
          id: 9,
          question: "What should pipes have in freezing climates?",
          options: ["No slope", "Slight slope for drainage", "Steep slope", "Level only"],
          correctAnswer: 1,
          explanation: "In freezing areas, pipes should slope slightly to allow complete drainage."
        },
        {
          id: 10,
          question: "What is done in spring?",
          options: ["Ignore system", "Seasonal startup check", "Only look at it", "Replace everything"],
          correctAnswer: 1,
          explanation: "Spring startup involves checking system after winter and making needed repairs."
        },
        {
          id: 11,
          question: "What is done in fall in cold climates?",
          options: ["Nothing", "Seasonal shutdown", "Water more", "Ignore weather"],
          correctAnswer: 1,
          explanation: "Fall shutdown prepares irrigation systems to survive freezing temperatures."
        },
        {
          id: 12,
          question: "How often inspect for leaks?",
          options: ["Never", "Monthly", "Yearly", "Only when broken"],
          correctAnswer: 1,
          explanation: "Monthly inspections catch small problems before they become big ones."
        },
        {
          id: 13,
          question: "What adjusts as plants grow?",
          options: ["Pipes", "Sprinkler heads", "Controllers only", "Nothing"],
          correctAnswer: 1,
          explanation: "Sprinkler heads may need adjustment as plants grow and block spray patterns."
        },
        {
          id: 14,
          question: "What causes low pressure?",
          options: ["Only source problem", "Clogged filters, closed valves, or leaks", "Always normal", "Never a problem"],
          correctAnswer: 1,
          explanation: "Low pressure can result from clogged filters, partially closed valves, or system leaks."
        },
        {
          id: 15,
          question: "What fixes dry spots?",
          options: ["Ignore them", "Adjust or add sprinklers", "Water more everywhere", "Remove plants"],
          correctAnswer: 1,
          explanation: "Dry spots may require sprinkler adjustment, nozzle cleaning, or additional sprinklers."
        },
        {
          id: 16,
          question: "What indicates overwatering?",
          options: ["Dry soil", "Yellow leaves, fungus, runoff", "No signs", "Only cost increase"],
          correctAnswer: 1,
          explanation: "Overwatering signs include yellow leaves, fungal growth, and water runoff."
        },
        {
          id: 17,
          question: "What should be watched for watering clues?",
          options: ["Only soil", "Plant signs", "Only weather", "Nothing"],
          correctAnswer: 1,
          explanation: "Plants show visible signs when they're getting too much or too little water."
        },
        {
          id: 18,
          question: "What helps clay soil absorption?",
          options: ["One long watering", "Multiple short cycles", "No watering", "Only at night"],
          correctAnswer: 1,
          explanation: "Clay soils absorb water slowly, so multiple short cycles prevent runoff."
        },
        {
          id: 19,
          question: "What removes water for winter?",
          options: ["Leave water in", "Blow out with compressed air", "Hope it drains", "Heat pipes"],
          correctAnswer: 1,
          explanation: "Compressed air blow-out removes water from pipes to prevent freeze damage."
        },
        {
          id: 20,
          question: "What should be documented?",
          options: ["Nothing", "Maintenance and repairs", "Only costs", "Only problems"],
          correctAnswer: 1,
          explanation: "Keeping records helps track maintenance and repairs over time."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Irrigation Systems Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Irrigation Systems Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is artificial water application to land?",
        options: ["Drainage", "Irrigation", "Evaporation", "Condensation"],
        correctAnswer: 1,
        explanation: "Irrigation is the artificial application of water to land to support plant growth."
      },
      {
        id: 2,
        question: "What carries water through irrigation systems?",
        options: ["Valves", "Piping", "Controllers", "Filters"],
        correctAnswer: 1,
        explanation: "Piping (tubes or pipes) carries water from source to distribution points."
      },
      {
        id: 3,
        question: "What sprays water through air like rain?",
        options: ["Drip", "Sprinkler", "Surface", "Manual"],
        correctAnswer: 1,
        explanation: "Sprinkler irrigation distributes water through the air similar to rainfall."
      },
      {
        id: 4,
        question: "What drips water to plant roots?",
        options: ["Sprinkler", "Drip", "Flood", "Hand"],
        correctAnswer: 1,
        explanation: "Drip irrigation applies water slowly and directly to soil near roots."
      },
      {
        id: 5,
        question: "What rotates to cover circular areas?",
        options: ["Spray", "Rotary", "Pop-up", "Drip"],
        correctAnswer: 1,
        explanation: "Rotary sprinklers rotate to cover circular or part-circular areas."
      },
      {
        id: 6,
        question: "What retracts into ground?",
        options: ["Impact", "Pop-up", "Oscillating", "Spray"],
        correctAnswer: 1,
        explanation: "Pop-up sprinklers retract to ground level when not watering."
      },
      {
        id: 7,
        question: "What affects sprinkler throw distance?",
        options: ["Color", "Water pressure", "Time", "Plant type"],
        correctAnswer: 1,
        explanation: "Water pressure determines how far sprinklers throw water."
      },
      {
        id: 8,
        question: "What ensures even coverage?",
        options: ["Random spacing", "Head-to-head coverage", "No overlap", "Far apart"],
        correctAnswer: 1,
        explanation: "Head-to-head coverage means sprinkler sprays reach adjacent sprinklers."
      },
      {
        id: 9,
        question: "What is most water-efficient method?",
        options: ["Sprinkler", "Drip", "Surface", "Manual"],
        correctAnswer: 1,
        explanation: "Drip irrigation is 85-90% efficient compared to sprinklers at 65-75%."
      },
      {
        id: 10,
        question: "What releases water at controlled rate?",
        options: ["Valves", "Controllers", "Emitters", "Filters"],
        correctAnswer: 2,
        explanation: "Emitters control and release water at specific flow rates in drip systems."
      },
      {
        id: 11,
        question: "What reduces pressure for drip?",
        options: ["Filters", "Pressure regulators", "Emitters", "Tubing"],
        correctAnswer: 1,
        explanation: "Pressure regulators reduce water pressure for drip system operation."
      },
      {
        id: 12,
        question: "What prevents drip clogging?",
        options: ["Valves", "Filters", "Controllers", "Sprinklers"],
        correctAnswer: 1,
        explanation: "Filters are essential in drip systems to prevent emitter clogging."
      },
      {
        id: 13,
        question: "What automates irrigation timing?",
        options: ["Sprinklers", "Controllers", "Pipes", "Valves"],
        correctAnswer: 1,
        explanation: "Controllers or timers automate when and how long systems water."
      },
      {
        id: 14,
        question: "What adjusts based on weather?",
        options: ["Basic timers", "Smart controllers", "Manual", "None"],
        correctAnswer: 1,
        explanation: "Smart controllers adjust watering based on weather conditions."
      },
      {
        id: 15,
        question: "What prevents watering when raining?",
        options: ["Timer", "Rain sensor", "Soil sensor", "Wind sensor"],
        correctAnswer: 1,
        explanation: "Rain sensors detect rainfall and interrupt scheduled irrigation."
      },
      {
        id: 16,
        question: "When is best watering time?",
        options: ["Midday", "Early morning", "Late evening", "Anytime"],
        correctAnswer: 1,
        explanation: "Early morning watering reduces evaporation and allows leaves to dry."
      },
      {
        id: 17,
        question: "What is municipal water?",
        options: ["Well", "City treated", "Surface", "Rain"],
        correctAnswer: 1,
        explanation: "Municipal water comes from city/county treatment systems."
      },
      {
        id: 18,
        question: "What is collected rainfall?",
        options: ["Municipal", "Well", "Rainwater harvesting", "Recycled"],
        correctAnswer: 2,
        explanation: "Rainwater harvesting collects and stores rainfall for irrigation."
      },
      {
        id: 19,
        question: "What measures water force?",
        options: ["Flow rate", "Pressure", "Volume", "Temperature"],
        correctAnswer: 1,
        explanation: "Pressure measures force pushing water, in PSI."
      },
      {
        id: 20,
        question: "What pressure range needed?",
        options: ["10-20 PSI", "30-50 PSI", "60-80 PSI", "90-100 PSI"],
        correctAnswer: 1,
        explanation: "Most irrigation systems operate best at 30-50 PSI."
      },
      {
        id: 21,
        question: "What reduces high pressure?",
        options: ["Booster", "Pressure regulator", "Larger pipes", "Smaller"],
        correctAnswer: 1,
        explanation: "Pressure regulators reduce incoming pressure to usable level."
      },
      {
        id: 22,
        question: "What increases low pressure?",
        options: ["Regulator", "Booster pump", "Smaller pipes", "None"],
        correctAnswer: 1,
        explanation: "Booster pumps increase water pressure when source pressure is low."
      },
      {
        id: 23,
        question: "What measures water per minute?",
        options: ["Pressure", "Flow rate", "Temperature", "pH"],
        correctAnswer: 1,
        explanation: "Flow rate measures gallons/liters per minute."
      },
      {
        id: 24,
        question: "What clogs from minerals?",
        options: ["Pure water", "Hard water", "Low pressure", "Filtered"],
        correctAnswer: 1,
        explanation: "Hard water minerals can precipitate and clog irrigation components."
      },
      {
        id: 25,
        question: "What should be done before digging?",
        options: ["Dig", "Design on paper", "Buy parts", "Call help"],
        correctAnswer: 1,
        explanation: "Always design system on paper before beginning installation."
      },
      {
        id: 26,
        question: "What depth for main lines?",
        options: ["2-3 inches", "6-12 inches", "24-36 inches", "Surface"],
        correctAnswer: 1,
        explanation: "Main irrigation lines typically buried 6-12 inches deep."
      },
      {
        id: 27,
        question: "What before covering pipes?",
        options: ["Cover", "Test thoroughly", "Ignore", "Wait rain"],
        correctAnswer: 1,
        explanation: "Test system for leaks and operation before backfilling."
      },
      {
        id: 28,
        question: "What seals threaded connections?",
        options: ["Glue", "Teflon tape", "Nothing", "Dirt"],
        correctAnswer: 1,
        explanation: "Teflon tape creates watertight seals on threaded connections."
      },
      {
        id: 29,
        question: "What in spring?",
        options: ["Ignore", "Startup check", "Only look", "Replace all"],
        correctAnswer: 1,
        explanation: "Spring startup involves checking system after winter."
      },
      {
        id: 30,
        question: "What in fall cold climates?",
        options: ["Nothing", "Shutdown", "Water more", "Ignore weather"],
        correctAnswer: 1,
        explanation: "Fall shutdown prepares system for freezing temperatures."
      },
      {
        id: 31,
        question: "What indicates overwatering?",
        options: ["Dry soil", "Yellow leaves/fungus", "No signs", "Cost"],
        correctAnswer: 1,
        explanation: "Overwatering signs include yellow leaves and fungal growth."
      },
      {
        id: 32,
        question: "What helps clay soil?",
        options: ["Long watering", "Multiple short cycles", "No water", "Night only"],
        correctAnswer: 1,
        explanation: "Multiple short cycles help clay soils absorb water without runoff."
      },
      {
        id: 33,
        question: "What for winter freeze protection?",
        options: ["Leave water", "Blow out", "Hope drains", "Heat pipes"],
        correctAnswer: 1,
        explanation: "Compressed air blow-out removes water to prevent freeze damage."
      },
      {
        id: 34,
        question: "What moves back and forth rectangular?",
        options: ["Rotary", "Oscillating", "Impact", "Pop-up"],
        correctAnswer: 1,
        explanation: "Oscillating sprinklers move back and forth for rectangular coverage."
      },
      {
        id: 35,
        question: "What maintains constant flow?",
        options: ["Adjustable", "Pressure-compensating", "Regular", "All"],
        correctAnswer: 1,
        explanation: "Pressure-compensating emitters maintain flow despite pressure changes."
      },
      {
        id: 36,
        question: "What measures soil moisture?",
        options: ["Rain sensor", "Soil sensor", "Wind sensor", "Freeze sensor"],
        correctAnswer: 1,
        explanation: "Soil moisture sensors measure actual soil wetness at root zone."
      },
      {
        id: 37,
        question: "What detects leaks?",
        options: ["Rain", "Flow sensor", "Soil", "Wind"],
        correctAnswer: 1,
        explanation: "Flow sensors monitor water usage and can detect leaks."
      },
      {
        id: 38,
        question: "What needs more frequent watering?",
        options: ["Sandy soil", "Clay soil", "All equal", "None"],
        correctAnswer: 0,
        explanation: "Sandy soil drains quickly and needs more frequent watering."
      },
      {
        id: 39,
        question: "What needs storage tanks?",
        options: ["Municipal", "Well", "Rainwater", "All"],
        correctAnswer: 2,
        explanation: "Rainwater systems need storage tanks to collect and hold rainfall."
      },
      {
        id: 40,
        question: "What should be documented?",
        options: ["Nothing", "Maintenance records", "Only costs", "Only problems"],
        correctAnswer: 1,
        explanation: "Keeping maintenance and repair records helps track system history."
      }
    ]
  }
};

export default irrigationSystemsCertificate;
