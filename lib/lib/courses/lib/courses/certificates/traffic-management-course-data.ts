// Traffic Management (Certificate) Course Data
// Complete with 6 modules and final exam

export const trafficManagementCertificate = {
  // COURSE METADATA
  id: "traffic-management-certificate",
  title: "Traffic Management (Certificate)",
  description: "Learn essential traffic management principles, flow control techniques, and urban mobility solutions for safer and more efficient transportation systems.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🚦",
  badge: "Certificate",
  
  // MODULE 1: Foundations of Traffic Management
  modules: [
    {
      id: 1,
      title: "Introduction to Traffic Systems",
      completed: false,
      content: `
## **Understanding Traffic Management**

Traffic management is about organizing how people and vehicles move on roads. It helps prevent congestion and makes travel safer for everyone.

### **Key Components of Traffic Systems**

**Traffic Flow** refers to the movement of vehicles on roads. Good traffic flow means vehicles move smoothly without unnecessary stops.

**Road Capacity** is how many vehicles a road can handle safely. Different roads have different capacities based on their design.

**Traffic Signals** are lights that control who goes and who stops. They help prevent accidents at busy intersections.

**Pedestrian Safety** protects people walking. Crosswalks, sidewalks, and pedestrian signals are all part of traffic management.

### **Basic Traffic Principles**

Traffic moves in lanes - marked spaces on the road for vehicles to travel in. Most roads have at least two lanes, one for each direction.

Right-of-way rules decide which vehicle goes first. Generally, the vehicle arriving first at an intersection goes first. Emergency vehicles always have right-of-way.

Speed limits are maximum safe speeds for different roads. Residential areas have lower limits than highways.

Traffic signs provide important information. Stop signs mean complete stop. Yield signs mean slow down and be ready to stop.

### **Why Traffic Management Matters**

Good traffic management reduces accidents by organizing vehicle movement clearly. It decreases travel time by keeping traffic flowing smoothly. It improves air quality by reducing time vehicles spend idling. It makes roads safer for all users including cyclists and walkers.

Traffic management considers all road users - drivers, passengers, cyclists, and pedestrians. Everyone benefits from well-managed traffic systems.
`,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of traffic management?",
          options: [
            "To organize how people and vehicles move on roads",
            "To build more roads in cities",
            "To sell traffic equipment",
            "To reduce the number of vehicles"
          ],
          correctAnswer: 0,
          explanation: "Traffic management organizes movement of people and vehicles to prevent congestion and improve safety."
        },
        {
          id: 2,
          question: "What does traffic flow refer to?",
          options: [
            "Movement of vehicles on roads",
            "Number of traffic lights",
            "Width of roads",
            "Color of road signs"
          ],
          correctAnswer: 0,
          explanation: "Traffic flow is the movement of vehicles on roads, aiming for smooth movement without unnecessary stops."
        },
        {
          id: 3,
          question: "What is road capacity?",
          options: [
            "How many vehicles a road can handle safely",
            "How long a road is",
            "How many lanes a road has",
            "How fast vehicles can travel"
          ],
          correctAnswer: 0,
          explanation: "Road capacity refers to the maximum number of vehicles a road can accommodate safely under normal conditions."
        },
        {
          id: 4,
          question: "What do traffic signals help prevent?",
          options: [
            "Accidents at busy intersections",
            "People from walking",
            "Road construction",
            "Vehicle manufacturing"
          ],
          correctAnswer: 0,
          explanation: "Traffic signals control vehicle and pedestrian movement to prevent accidents at intersections."
        },
        {
          id: 5,
          question: "Which vehicle always has right-of-way?",
          options: [
            "Emergency vehicles",
            "Large trucks",
            "Expensive cars",
            "Red colored vehicles"
          ],
          correctAnswer: 0,
          explanation: "Emergency vehicles with sirens and lights always have right-of-way for safety reasons."
        },
        {
          id: 6,
          question: "What does a stop sign require?",
          options: [
            "Complete stop before proceeding",
            "Slowing down only",
            "Honking horn before going",
            "Waving to other drivers"
          ],
          correctAnswer: 0,
          explanation: "Stop signs require vehicles to come to a complete stop before proceeding safely."
        },
        {
          id: 7,
          question: "What benefit comes from reduced idling time?",
          options: [
            "Improved air quality",
            "More road noise",
            "Higher fuel costs",
            "Longer travel times"
          ],
          correctAnswer: 0,
          explanation: "Reduced idling time decreases emissions, leading to improved air quality."
        },
        {
          id: 8,
          question: "What do marked spaces on roads for vehicles called?",
          options: [
            "Lanes",
            "Blocks",
            "Zones",
            "Sections"
          ],
          correctAnswer: 0,
          explanation: "Lanes are marked spaces on roads designated for vehicles to travel in specific directions."
        },
        {
          id: 9,
          question: "Who does traffic management consider?",
          options: [
            "All road users",
            "Only car drivers",
            "Only government officials",
            "Only traffic police"
          ],
          correctAnswer: 0,
          explanation: "Good traffic management considers all road users including drivers, cyclists, and pedestrians."
        },
        {
          id: 10,
          question: "What do right-of-way rules determine?",
          options: [
            "Which vehicle goes first",
            "Which road is widest",
            "Which driver is oldest",
            "Which car is newest"
          ],
          correctAnswer: 0,
          explanation: "Right-of-way rules establish which vehicle has priority to proceed first at intersections."
        },
        {
          id: 11,
          question: "What is pedestrian safety designed to protect?",
          options: [
            "People walking",
            "Traffic officers",
            "Road workers",
            "Parked vehicles"
          ],
          correctAnswer: 0,
          explanation: "Pedestrian safety measures protect people who are walking or crossing roads."
        },
        {
          id: 12,
          question: "What do speed limits indicate?",
          options: [
            "Maximum safe speeds",
            "Minimum required speeds",
            "Average vehicle speeds",
            "Suggested travel speeds"
          ],
          correctAnswer: 0,
          explanation: "Speed limits indicate the maximum safe speed for vehicles on specific road sections."
        },
        {
          id: 13,
          question: "What is a key benefit of good traffic management?",
          options: [
            "Reduced travel time",
            "More traffic jams",
            "Higher accident rates",
            "Increased pollution"
          ],
          correctAnswer: 0,
          explanation: "Good traffic management reduces travel time by maintaining smooth traffic flow."
        },
        {
          id: 14,
          question: "What do traffic signs provide?",
          options: [
            "Important information",
            "Road decorations",
            "Advertising space",
            "Light reflection"
          ],
          correctAnswer: 0,
          explanation: "Traffic signs provide crucial information for safe and organized road use."
        },
        {
          id: 15,
          question: "What does a yield sign mean?",
          options: [
            "Slow down and be ready to stop",
            "Speed up quickly",
            "Stop completely always",
            "Ignore other vehicles"
          ],
          correctAnswer: 0,
          explanation: "Yield signs require drivers to slow down and be prepared to stop if necessary."
        },
        {
          id: 16,
          question: "What are crosswalks designed for?",
          options: [
            "Safe pedestrian crossing",
            "Vehicle parking",
            "Road maintenance",
            "Traffic light installation"
          ],
          correctAnswer: 0,
          explanation: "Crosswalks are marked areas designed specifically for pedestrians to cross roads safely."
        },
        {
          id: 17,
          question: "What does reduced congestion help with?",
          options: [
            "Decreasing accidents",
            "Increasing fuel use",
            "Creating more traffic",
            "Making roads narrower"
          ],
          correctAnswer: 0,
          explanation: "Reduced congestion decreases accidents by providing better visibility and reaction time."
        },
        {
          id: 18,
          question: "What is the general right-of-way rule at intersections?",
          options: [
            "Vehicle arriving first goes first",
            "Largest vehicle goes first",
            "Fastest vehicle goes first",
            "Most expensive car goes first"
          ],
          correctAnswer: 0,
          explanation: "Generally, the vehicle that arrives first at an intersection has right-of-way to proceed first."
        },
        {
          id: 19,
          question: "What do residential areas typically have?",
          options: [
            "Lower speed limits",
            "Higher speed limits",
            "No speed limits",
            "Variable speed limits"
          ],
          correctAnswer: 0,
          explanation: "Residential areas typically have lower speed limits to protect residents and children."
        },
        {
          id: 20,
          question: "What makes roads safer for all users?",
          options: [
            "Well-managed traffic systems",
            "More vehicles",
            "Fewer signs",
            "Higher speeds"
          ],
          correctAnswer: 0,
          explanation: "Well-managed traffic systems organize movement to make roads safer for everyone."
        }
      ]
    },

    // MODULE 2: Traffic Control Devices
    {
      id: 2,
      title: "Traffic Control Devices",
      completed: false,
      content: `
## **Understanding Traffic Control Devices**

Traffic control devices are tools that guide and regulate traffic. They include signs, signals, and pavement markings.

### **Traffic Signs**

**Regulatory Signs** tell drivers what they must or must not do. Stop signs, yield signs, and speed limit signs are regulatory signs. They are usually white, black, and red.

**Warning Signs** alert drivers to potential hazards ahead. Curve warnings, pedestrian crossings, and animal crossings are warning signs. They are usually yellow and diamond-shaped.

**Guide Signs** provide information about routes, destinations, and services. Street names, highway numbers, and distance markers are guide signs. They are usually green, blue, or brown.

**Construction Signs** indicate temporary changes due to road work. They are orange with black symbols or text.

### **Traffic Signals**

**Three-color Signals** have red, yellow, and green lights. Red means stop. Yellow means prepare to stop. Green means go if clear.

**Pedestrian Signals** have walking person and raised hand symbols. Walking person means cross. Flashing or steady raised hand means don't start crossing.

**Arrow Signals** control turning movements. Green arrow means turn is protected. Yellow arrow means protection ending. Red arrow means no turn allowed.

**Flashing Signals** get extra attention. Flashing red acts like stop sign. Flashing yellow means caution.

### **Pavement Markings**

**Lane Lines** separate traffic moving in same direction. Broken lines mean lane changing allowed. Solid lines mean no lane changing.

**Center Lines** separate traffic moving in opposite directions. Yellow lines mark center. Double solid yellow means no passing.

**Edge Lines** mark road edges. White lines usually mark right edge. They help drivers stay on road at night.

**Crosswalk Markings** show where pedestrians should cross. They are usually white parallel lines or zebra stripes.

**Stop Lines** show where to stop at intersections. They are thick white lines before crosswalks.

### **Installation and Maintenance**

Signs must be visible day and night. They use reflective materials. Proper placement ensures drivers see them in time.

Signs must be clean and unobstructed. Regular maintenance keeps them effective. Damaged signs must be replaced quickly.

Signal timing must match traffic patterns. Proper timing reduces delays. Adjustments may be needed for different times of day.

All devices must follow national standards. Consistent designs help drivers understand quickly. Uniformity is important for safety.
`,
      quiz: [
        {
          id: 1,
          question: "What do regulatory signs tell drivers?",
          options: [
            "What they must or must not do",
            "About scenic areas",
            "Historical information",
            "Advertising messages"
          ],
          correctAnswer: 0,
          explanation: "Regulatory signs inform drivers of laws and regulations they must follow."
        },
        {
          id: 2,
          question: "What color are warning signs usually?",
          options: [
            "Yellow and diamond-shaped",
            "Red and round",
            "Green and rectangular",
            "Blue and square"
          ],
          correctAnswer: 0,
          explanation: "Warning signs are typically yellow with black symbols or text and diamond-shaped."
        },
        {
          id: 3,
          question: "What does a red traffic light mean?",
          options: [
            "Stop",
            "Go quickly",
            "Slow down only",
            "Prepare to stop"
          ],
          correctAnswer: 0,
          explanation: "Red traffic lights require vehicles to come to a complete stop."
        },
        {
          id: 4,
          question: "What do broken lane lines mean?",
          options: [
            "Lane changing allowed",
            "No lane changing",
            "Road ends ahead",
            "Construction zone"
          ],
          correctAnswer: 0,
          explanation: "Broken white lines indicate that lane changing is permitted when safe."
        },
        {
          id: 5,
          question: "What are guide signs for?",
          options: [
            "Providing route information",
            "Giving warnings",
            "Issuing commands",
            "Marking construction"
          ],
          correctAnswer: 0,
          explanation: "Guide signs provide information about routes, destinations, and services."
        },
        {
          id: 6,
          question: "What color are construction signs?",
          options: [
            "Orange with black",
            "Yellow with red",
            "Green with white",
            "Blue with yellow"
          ],
          correctAnswer: 0,
          explanation: "Construction signs are orange with black symbols or text to indicate temporary conditions."
        },
        {
          id: 7,
          question: "What does a green arrow signal mean?",
          options: [
            "Turn is protected",
            "No turning allowed",
            "Prepare to stop",
            "Speed up quickly"
          ],
          correctAnswer: 0,
          explanation: "Green arrow signals indicate protected turning movements with right-of-way."
        },
        {
          id: 8,
          question: "What do double solid yellow lines mean?",
          options: [
            "No passing allowed",
            "Passing allowed",
            "Lane ends soon",
            "Merge ahead"
          ],
          correctAnswer: 0,
          explanation: "Double solid yellow lines indicate no passing in either direction."
        },
        {
          id: 9,
          question: "What do edge lines help with?",
          options: [
            "Staying on road at night",
            "Finding parking spots",
            "Making U-turns",
            "Increasing speed"
          ],
          correctAnswer: 0,
          explanation: "Edge lines help drivers identify road boundaries, especially important at night."
        },
        {
          id: 10,
          question: "What does flashing red signal mean?",
          options: [
            "Acts like stop sign",
            "Proceed with caution",
            "Speed up quickly",
            "Road closed ahead"
          ],
          correctAnswer: 0,
          explanation: "Flashing red signals require drivers to stop completely, then proceed when safe."
        },
        {
          id: 11,
          question: "What are crosswalk markings for?",
          options: [
            "Showing pedestrian crossing areas",
            "Marking bus stops",
            "Indicating parking zones",
            "Showing loading areas"
          ],
          correctAnswer: 0,
          explanation: "Crosswalk markings indicate designated areas where pedestrians should cross roads."
        },
        {
          id: 12,
          question: "What materials help signs be visible at night?",
          options: [
            "Reflective materials",
            "Wood materials",
            "Paper materials",
            "Cloth materials"
          ],
          correctAnswer: 0,
          explanation: "Reflective materials on signs make them visible when illuminated by vehicle headlights at night."
        },
        {
          id: 13,
          question: "What does a yellow traffic light mean?",
          options: [
            "Prepare to stop",
            "Speed up quickly",
            "Stop immediately",
            "Proceed normally"
          ],
          correctAnswer: 0,
          explanation: "Yellow lights warn that the signal is about to turn red, so prepare to stop."
        },
        {
          id: 14,
          question: "What are stop lines for?",
          options: [
            "Showing where to stop at intersections",
            "Marking parking areas",
            "Indicating speed changes",
            "Showing school zones"
          ],
          correctAnswer: 0,
          explanation: "Stop lines indicate where vehicles should stop at intersections with stop signs or signals."
        },
        {
          id: 15,
          question: "What does proper signal timing reduce?",
          options: [
            "Traffic delays",
            "Road width",
            "Number of lanes",
            "Pedestrian access"
          ],
          correctAnswer: 0,
          explanation: "Properly timed signals reduce delays by matching green times to traffic demand."
        },
        {
          id: 16,
          question: "What does flashing yellow signal mean?",
          options: [
            "Proceed with caution",
            "Stop immediately",
            "Speed limit changes",
            "Road ends ahead"
          ],
          correctAnswer: 0,
          explanation: "Flashing yellow signals advise drivers to proceed with caution."
        },
        {
          id: 17,
          question: "What color are guide signs usually?",
          options: [
            "Green, blue, or brown",
            "Red and white",
            "Yellow and black",
            "Orange only"
          ],
          correctAnswer: 0,
          explanation: "Guide signs are typically green for destinations, blue for services, and brown for recreational areas."
        },
        {
          id: 18,
          question: "What do solid lane lines mean?",
          options: [
            "No lane changing",
            "Lane changing encouraged",
            "Merge ahead",
            "Passing zone"
          ],
          correctAnswer: 0,
          explanation: "Solid white lines between lanes indicate that lane changing is discouraged or prohibited."
        },
        {
          id: 19,
          question: "Why is uniformity important for signs?",
          options: [
            "Helps drivers understand quickly",
            "Makes roads look nicer",
            "Reduces manufacturing cost",
            "Allows more advertising"
          ],
          correctAnswer: 0,
          explanation: "Uniform sign designs help drivers recognize and understand them quickly for safety."
        },
        {
          id: 20,
          question: "What do pedestrian signals show?",
          options: [
            "Walking person and raised hand",
            "Red and green lights only",
            "Arrow symbols",
            "Numbers counting down"
          ],
          correctAnswer: 0,
          explanation: "Pedestrian signals use walking person and raised hand symbols to indicate when to cross."
        }
      ]
    },

    // MODULE 3: Intersection Management
    {
      id: 3,
      title: "Intersection Management",
      completed: false,
      content: `
## **Managing Intersections Safely**

Intersections are where roads meet. They need special management because this is where conflicts between vehicles happen.

### **Types of Intersections**

**Four-way Intersections** have four approaches. They can be signalized or have stop signs. Some use all-way stop control.

**T-intersections** have three approaches. One road ends at another road. Right-of-way usually goes to through traffic.

**Roundabouts** are circular intersections. Traffic flows counterclockwise around central island. Vehicles yield to traffic already in roundabout.

**Traffic Circles** are larger than roundabouts. They may have traffic signals inside. Speeds are higher than roundabouts.

**Channelized Intersections** use islands to guide traffic. They separate turning movements. They improve safety and capacity.

### **Right-of-Way Rules**

At stop signs, first vehicle to stop goes first. If vehicles stop together, vehicle on right goes first.

At traffic signals, green means go if clear. Turning vehicles must yield to pedestrians and oncoming traffic.

Emergency vehicles always have right-of-way. All vehicles must clear path when emergency vehicles approach.

Pedestrians have right-of-way in crosswalks. Drivers must yield to pedestrians at marked and unmarked crosswalks.

### **Turning Movements**

**Left turns** are most difficult. They cross oncoming traffic. Protected left turns have green arrow. Permissive left turns have green circle.

**Right turns** are easier. They usually don't cross traffic. Right turn on red is allowed after stop unless prohibited.

**U-turns** reverse direction. They may be prohibited at busy intersections. Signs indicate where U-turns are allowed.

**Slip lanes** allow right turns without stopping. They separate turning traffic. They improve traffic flow.

### **Signal Timing**

**Cycle length** is total time for all movements. Typical cycles are 60-120 seconds. Shorter cycles work better for light traffic.

**Split time** is green time for each movement. It should match traffic demand. Busier approaches get more green time.

**Offset** coordinates signals along corridor. Good offset creates green wave. Vehicles can travel several signals without stopping.

**Detection** uses sensors to adjust timing. Vehicles trigger green extension. This reduces unnecessary waiting time.

### **Safety Measures**

**Clear sight lines** help drivers see other vehicles. Vegetation should be trimmed. Signs should not block view.

**Adequate lighting** improves nighttime visibility. Well-lit intersections have fewer crashes.

**Pedestrian refuges** are islands in middle of wide roads. They allow crossing in two stages. They help slower pedestrians.

**Advance warning signs** alert drivers to intersections ahead. They are especially important for hidden intersections.
`,
      quiz: [
        {
          id: 1,
          question: "What are intersections?",
          options: [
            "Where roads meet",
            "Where roads begin",
            "Where roads end",
            "Where roads curve"
          ],
          correctAnswer: 0,
          explanation: "Intersections are locations where two or more roads meet or cross each other."
        },
        {
          id: 2,
          question: "How many approaches does a four-way intersection have?",
          options: [
            "Four approaches",
            "Three approaches",
            "Two approaches",
            "Five approaches"
          ],
          correctAnswer: 0,
          explanation: "Four-way intersections have four roads meeting, with vehicles approaching from all directions."
        },
        {
          id: 3,
          question: "What do vehicles do at roundabouts?",
          options: [
            "Yield to traffic already in roundabout",
            "Speed up to enter quickly",
            "Stop completely before entering",
            "Honk before entering"
          ],
          correctAnswer: 0,
          explanation: "At roundabouts, approaching vehicles must yield to traffic already circulating in the roundabout."
        },
        {
          id: 4,
          question: "Who has right-of-way at stop signs if vehicles arrive together?",
          options: [
            "Vehicle on the right",
            "Vehicle on the left",
            "Larger vehicle",
            "Faster vehicle"
          ],
          correctAnswer: 0,
          explanation: "When vehicles arrive at a four-way stop simultaneously, the vehicle on the right has right-of-way."
        },
        {
          id: 5,
          question: "What must turning vehicles yield to?",
          options: [
            "Pedestrians and oncoming traffic",
            "Only other turning vehicles",
            "Parked cars",
            "Road signs"
          ],
          correctAnswer: 0,
          explanation: "Turning vehicles must yield to pedestrians in crosswalks and oncoming traffic when making turns."
        },
        {
          id: 6,
          question: "What are protected left turns?",
          options: [
            "Turns with green arrow",
            "Turns with red light",
            "Turns with no signal",
            "Turns with yellow light"
          ],
          correctAnswer: 0,
          explanation: "Protected left turns occur when a green arrow signal gives exclusive right-of-way for left turns."
        },
        {
          id: 7,
          question: "What is cycle length?",
          options: [
            "Total time for all signal movements",
            "Time for green light only",
            "Time for red light only",
            "Time for pedestrian crossing"
          ],
          correctAnswer: 0,
          explanation: "Cycle length is the total time for a complete sequence of all signal indications."
        },
        {
          id: 8,
          question: "What do slip lanes allow?",
          options: [
            "Right turns without stopping",
            "Left turns without yielding",
            "U-turns at high speed",
            "Parking at intersections"
          ],
          correctAnswer: 0,
          explanation: "Slip lanes allow right-turning vehicles to bypass the main intersection without stopping."
        },
        {
          id: 9,
          question: "What is offset in signal timing?",
          options: [
            "Coordination along a corridor",
            "Height of traffic lights",
            "Color of signals",
            "Size of intersection"
          ],
          correctAnswer: 0,
          explanation: "Offset is the time relationship between signals at adjacent intersections along a road."
        },
        {
          id: 10,
          question: "What are pedestrian refuges?",
          options: [
            "Islands in middle of wide roads",
            "Underground tunnels",
            "Overhead bridges",
            "Parking areas"
          ],
          correctAnswer: 0,
          explanation: "Pedestrian refuges are raised islands that allow pedestrians to cross wide roads in two stages."
        },
        {
          id: 11,
          question: "What do T-intersections have?",
          options: [
            "Three approaches",
            "Four approaches",
            "Five approaches",
            "Circular design"
          ],
          correctAnswer: 0,
          explanation: "T-intersections have three road approaches, with one road ending at another road."
        },
        {
          id: 12,
          question: "What must all vehicles do for emergency vehicles?",
          options: [
            "Clear the path",
            "Speed up ahead",
            "Stop in place",
            "Change lanes quickly"
          ],
          correctAnswer: 0,
          explanation: "All vehicles must yield right-of-way and clear a path for approaching emergency vehicles."
        },
        {
          id: 13,
          question: "When is right turn on red allowed?",
          options: [
            "After complete stop, unless prohibited",
            "Without stopping",
            "Only at night",
            "Only for trucks"
          ],
          correctAnswer: 0,
          explanation: "Right turn on red is permitted after coming to a complete stop and yielding, unless signs prohibit it."
        },
        {
          id: 14,
          question: "What does good offset create?",
          options: [
            "Green wave progression",
            "More red lights",
            "Longer cycles",
            "Faster turns"
          ],
          correctAnswer: 0,
          explanation: "Proper signal offset can create green wave progression, allowing continuous movement along a corridor."
        },
        {
          id: 15,
          question: "What improves nighttime intersection safety?",
          options: [
            "Adequate lighting",
            "Fewer lanes",
            "More signs",
            "Lower speed limits"
          ],
          correctAnswer: 0,
          explanation: "Adequate lighting at intersections improves visibility and reduces nighttime crashes."
        },
        {
          id: 16,
          question: "What are channelized intersections?",
          options: [
            "Intersections with guiding islands",
            "Intersections with no signs",
            "Intersections on hills",
            "Intersections in tunnels"
          ],
          correctAnswer: 0,
          explanation: "Channelized intersections use islands to separate and guide traffic movements for better organization."
        },
        {
          id: 17,
          question: "Who has right-of-way in crosswalks?",
          options: [
            "Pedestrians",
            "Turning vehicles",
            "Through traffic",
            "Bicycles"
          ],
          correctAnswer: 0,
          explanation: "Pedestrians legally have right-of-way when crossing at marked or unmarked crosswalks."
        },
        {
          id: 18,
          question: "What do permissive left turns have?",
          options: [
            "Green circle signal",
            "Red arrow signal",
            "Flashing yellow arrow",
            "No signal at all"
          ],
          correctAnswer: 0,
          explanation: "Permissive left turns occur under a circular green signal, requiring drivers to yield to oncoming traffic."
        },
        {
          id: 19,
          question: "What do advance warning signs do?",
          options: [
            "Alert to intersections ahead",
            "Show current speed",
            "Indicate parking areas",
            "Mark bus stops"
          ],
          correctAnswer: 0,
          explanation: "Advance warning signs alert drivers to upcoming intersections, especially important for hidden ones."
        },
        {
          id: 20,
          question: "What should not block intersection sight lines?",
          options: [
            "Vegetation and signs",
            "Pedestrians only",
            "Parked vehicles only",
            "Traffic lights"
          ],
          correctAnswer: 0,
          explanation: "Vegetation and improperly placed signs should not block drivers' views of intersections."
        }
      ]
    },

    // MODULE 4: Traffic Flow and Capacity
    {
      id: 4,
      title: "Traffic Flow and Capacity",
      completed: false,
      content: `
## **Understanding Traffic Flow**

Traffic flow describes how vehicles move on roads. Good flow means steady movement. Poor flow means stop-and-go conditions.

### **Basic Flow Concepts**

**Volume** is number of vehicles passing a point in time. Usually measured in vehicles per hour. Peak hours have highest volumes.

**Density** is number of vehicles on a road section. Measured in vehicles per mile or kilometer. High density means crowded conditions.

**Speed** is how fast vehicles travel. Average speed is total distance divided by total time. Free-flow speed is speed with no congestion.

**Flow Rate** is volume divided by time period. It shows how many vehicles pass per hour. Maximum flow rate is road capacity.

### **Road Capacity Factors**

**Number of Lanes** affects capacity directly. More lanes mean more capacity. Adding lanes increases capacity but not always proportionally.

**Lane Width** influences driver comfort. Wider lanes feel safer. Standard lanes are 12 feet wide. Narrow lanes reduce speeds.

**Shoulder Width** provides recovery area. Wide shoulders improve safety. They allow disabled vehicles to clear travel lanes.

**Horizontal Alignment** refers to curves. Sharp curves reduce speeds. Gentle curves allow higher speeds.

**Vertical Alignment** refers to hills. Steep grades reduce speeds especially for heavy vehicles.

**Access Points** are driveways and intersections. More access points reduce capacity. They cause vehicles to slow down or stop.

### **Level of Service**

**Level A** is free flow. Vehicles have complete freedom. Speeds at free-flow level. Low density.

**Level B** is reasonably free flow. Speeds beginning to restrict. Drivers have reasonable freedom.

**Level C** is stable flow. Speeds and maneuverability restricted. Most drivers uncomfortable.

**Level D** is approaching unstable flow. Speeds declining slightly. Small incidents cause serious delays.

**Level E** is unstable flow. Operations at capacity. Stop-and-go waves. Long delays.

**Level F** is forced flow. Breakdown conditions. Extremely low speeds. Long queues forming.

### **Improving Traffic Flow**

**Signal coordination** links adjacent signals. Vehicles encounter green lights in sequence. This reduces stops.

**Lane management** optimizes lane use. Reversible lanes change direction with time of day. Turn lanes separate turning vehicles.

**Incident management** quickly clears crashes. Quick clearance prevents secondary crashes. Tow trucks on standby help.

**Ramp metering** controls freeway entry. Vehicles enter one at a time. This prevents mainline breakdown.

**Variable message signs** provide real-time information. They alert drivers to congestion ahead. They suggest alternate routes.

### **Measuring Performance**

**Travel Time** measures how long trips take. Longer times indicate congestion. Reliable travel time is important.

**Delay** is extra time beyond free-flow time. It measures congestion impact. Reduced delay is a key goal.

**Queue Length** measures waiting vehicles. Long queues indicate problems. Queue management improves flow.

**Throughput** is vehicles served over time. Higher throughput is better. Maximizing throughput is objective.
`,
      quiz: [
        {
          id: 1,
          question: "What is traffic volume?",
          options: [
            "Number of vehicles passing a point",
            "Speed of vehicles",
            "Width of roads",
            "Height of vehicles"
          ],
          correctAnswer: 0,
          explanation: "Traffic volume is the number of vehicles passing a specific point during a given time period."
        },
        {
          id: 2,
          question: "What does good traffic flow mean?",
          options: [
            "Steady vehicle movement",
            "Frequent stopping",
            "High accident rates",
            "Empty roads"
          ],
          correctAnswer: 0,
          explanation: "Good traffic flow means vehicles move steadily without unnecessary stops or delays."
        },
        {
          id: 3,
          question: "What is traffic density?",
          options: [
            "Vehicles per road section",
            "Speed measurement",
            "Road width",
            "Signal timing"
          ],
          correctAnswer: 0,
          explanation: "Traffic density measures how many vehicles occupy a given length of road at one time."
        },
        {
          id: 4,
          question: "What increases road capacity directly?",
          options: [
            "More lanes",
            "More signs",
            "Narrower lanes",
            "Fewer lights"
          ],
          correctAnswer: 0,
          explanation: "Adding more lanes to a road directly increases its vehicle-carrying capacity."
        },
        {
          id: 5,
          question: "What is free-flow speed?",
          options: [
            "Speed with no congestion",
            "Speed limit",
            "Minimum speed",
            "Average speed"
          ],
          correctAnswer: 0,
          explanation: "Free-flow speed is the speed vehicles travel when there is no congestion or restrictions."
        },
        {
          id: 6,
          question: "What do wide shoulders provide?",
          options: [
            "Recovery area for vehicles",
            "Extra travel lanes",
            "Parking spaces",
            "Bike lanes"
          ],
          correctAnswer: 0,
          explanation: "Wide shoulders provide recovery area for disabled vehicles and improve overall safety."
        },
        {
          id: 7,
          question: "What is Level A service?",
          options: [
            "Free flow conditions",
            "Complete breakdown",
            "Stop-and-go traffic",
            "Moderate congestion"
          ],
          correctAnswer: 0,
          explanation: "Level of Service A represents free flow conditions with complete driver freedom."
        },
        {
          id: 8,
          question: "What does signal coordination do?",
          options: [
            "Links adjacent signals",
            "Changes signal colors",
            "Adds more signals",
            "Removes signals"
          ],
          correctAnswer: 0,
          explanation: "Signal coordination links timing of adjacent signals to create progressive movement."
        },
        {
          id: 9,
          question: "What are reversible lanes?",
          options: [
            "Lanes that change direction with time",
            "Lanes that are always closed",
            "Lanes for parking only",
            "Lanes for buses only"
          ],
          correctAnswer: 0,
          explanation: "Reversible lanes change direction to accommodate peak traffic flows in different directions."
        },
        {
          id: 10,
          question: "What does incident management do?",
          options: [
            "Quickly clears crashes",
            "Prevents all accidents",
            "Builds new roads",
            "Changes speed limits"
          ],
          correctAnswer: 0,
          explanation: "Incident management focuses on quickly detecting and clearing traffic incidents to restore flow."
        },
        {
          id: 11,
          question: "What is flow rate?",
          options: [
            "Volume divided by time",
            "Speed times density",
            "Road length times width",
            "Number of signals"
          ],
          correctAnswer: 0,
          explanation: "Flow rate is the number of vehicles passing a point per unit of time, usually vehicles per hour."
        },
        {
          id: 12,
          question: "What do sharp curves do to speeds?",
          options: [
            "Reduce speeds",
            "Increase speeds",
            "Have no effect",
            "Only affect trucks"
          ],
          correctAnswer: 0,
          explanation: "Sharp horizontal curves force drivers to reduce speeds for safety and comfort."
        },
        {
          id: 13,
          question: "What is Level F service?",
          options: [
            "Forced flow breakdown",
            "Perfect conditions",
            "Moderate flow",
            "Free flow"
          ],
          correctAnswer: 0,
          explanation: "Level of Service F represents forced flow conditions with breakdowns and extremely low speeds."
        },
        {
          id: 14,
          question: "What does ramp metering control?",
          options: [
            "Freeway entry",
            "Parking access",
            "Pedestrian crossing",
            "Bicycle lanes"
          ],
          correctAnswer: 0,
          explanation: "Ramp metering controls the rate at which vehicles enter freeways to prevent mainline congestion."
        },
        {
          id: 15,
          question: "What measures congestion impact?",
          options: [
            "Delay",
            "Road width",
            "Number of lanes",
            "Signal colors"
          ],
          correctAnswer: 0,
          explanation: "Delay measures the extra travel time caused by congestion compared to free-flow conditions."
        },
        {
          id: 16,
          question: "What do access points cause?",
          options: [
            "Vehicles to slow or stop",
            "Higher speeds",
            "Fewer accidents",
            "More lanes"
          ],
          correctAnswer: 0,
          explanation: "Frequent access points like driveways and intersections cause vehicles to slow down or stop."
        },
        {
          id: 17,
          question: "What is throughput?",
          options: [
            "Vehicles served over time",
            "Road length",
            "Signal timing",
            "Number of signs"
          ],
          correctAnswer: 0,
          explanation: "Throughput is the number of vehicles that pass through a road section over a given time period."
        },
        {
          id: 18,
          question: "What do variable message signs provide?",
          options: [
            "Real-time information",
            "Advertising",
            "Historical facts",
            "Road names only"
          ],
          correctAnswer: 0,
          explanation: "Variable message signs provide real-time traffic information and alternate route suggestions."
        },
        {
          id: 19,
          question: "What is queue length?",
          options: [
            "Number of waiting vehicles",
            "Road length",
            "Signal height",
            "Lane width"
          ],
          correctAnswer: 0,
          explanation: "Queue length measures how many vehicles are waiting in line at signals or congestion points."
        },
        {
          id: 20,
          question: "What do turn lanes do?",
          options: [
            "Separate turning vehicles",
            "Increase through traffic",
            "Reduce road width",
            "Eliminate signals"
          ],
          correctAnswer: 0,
          explanation: "Turn lanes separate turning vehicles from through traffic, improving safety and capacity."
        }
      ]
    },

    // MODULE 5: Pedestrian and Bicycle Facilities
    {
      id: 5,
      title: "Pedestrian and Bicycle Facilities",
      completed: false,
      content: `
## **Managing Non-Motorized Transportation**

Pedestrians and cyclists need safe facilities. Good design protects vulnerable road users.

### **Pedestrian Facilities**

**Sidewalks** are paths beside roads for pedestrians. They should be continuous without gaps. Minimum width is 5 feet for two people.

**Crosswalks** mark where pedestrians should cross. Marked crosswalks have painted lines. Unmarked crosswalks exist at all intersections.

**Pedestrian Signals** tell when to cross. Countdown timers show seconds remaining. Accessible signals have audible tones.

**Curb Ramps** help wheelchair users. They provide smooth transition from sidewalk to street. They must be at all crossings.

**Pedestrian Refuge Islands** are in middle of wide streets. They allow crossing in two stages. They protect slower pedestrians.

### **Bicycle Facilities**

**Bike Lanes** are marked lanes for bicycles. They are usually on roadway. They provide dedicated space.

**Shared Lane Markings** show bicycles may use full lane. They remind drivers to share road. Also called sharrows.

**Multi-use Paths** are separate from roads. They serve bicycles and pedestrians. Often called greenways or trails.

**Protected Bike Lanes** have physical separation from traffic. Use curbs, planters, or parked cars as barriers.

**Bike Boxes** are advance stopping areas at signals. Bicycles wait in front of cars. Improve visibility and safety.

### **Safety Features**

**Visibility** is crucial for safety. Pedestrians and cyclists need to be seen. Reflective materials help at night.

**Lighting** improves nighttime safety. Well-lit areas have fewer crashes. Paths should be illuminated.

**Clear Zones** keep areas near paths free of obstacles. Vegetation trimmed back. Signs placed carefully.

**Surface Quality** affects safety. Smooth surfaces prevent trips and falls. Regular maintenance needed.

**Drainage** prevents puddles. Standing water creates hazards. Proper grading directs water away.

### **Design Principles**

**Direct Routes** are preferred. Pedestrians take shortest path. Facilities should follow desire lines.

**Continuous Network** avoids gaps. Broken networks discourage use. Complete streets serve all users.

**Universal Design** serves all abilities. Accommodates children, elderly, disabled. Everyone can use facilities.

**Clear Signing** helps navigation. Wayfinding signs show directions. Regulatory signs establish rules.

**Separation** reduces conflicts. Pedestrians and cyclists separated where possible. Different speeds need separation.

### **Integration with Traffic**

**Crossing Treatments** help cross busy streets. Raised crosswalks slow vehicles. Signals give pedestrian priority.

**Traffic Calming** reduces vehicle speeds. Speed humps, narrow lanes, curb extensions. Safer for non-motorized users.

**Access Management** limits driveway crossings. Fewer conflicts with pedestrians. Improved safety.

**Transit Connections** link to bus stops and stations. Pedestrian access to transit important. Bike parking at transit.

**Parking Management** affects sidewalk space. Cars should not block paths. Clear zones maintained.
`,
      quiz: [
        {
          id: 1,
          question: "What are sidewalks for?",
          options: [
            "Paths for pedestrians beside roads",
            "Roads for vehicles",
            "Parking areas",
            "Bike storage"
          ],
          correctAnswer: 0,
          explanation: "Sidewalks are designated paths alongside roads specifically for pedestrian use."
        },
        {
          id: 2,
          question: "What do marked crosswalks have?",
          options: [
            "Painted lines",
            "No markings",
            "Speed bumps",
            "Parking spaces"
          ],
          correctAnswer: 0,
          explanation: "Marked crosswalks have painted lines or other markings showing where pedestrians should cross."
        },
        {
          id: 3,
          question: "What are bike lanes?",
          options: [
            "Marked lanes for bicycles",
            "Lanes for motorcycles",
            "Parking lanes",
            "Bus lanes"
          ],
          correctAnswer: 0,
          explanation: "Bike lanes are roadway lanes marked specifically for bicycle use."
        },
        {
          id: 4,
          question: "What do curb ramps help?",
          options: [
            "Wheelchair users",
            "Car drivers only",
            "Bicycles only",
            "Truck drivers"
          ],
          correctAnswer: 0,
          explanation: "Curb ramps provide smooth transitions from sidewalks to streets, assisting wheelchair users."
        },
        {
          id: 5,
          question: "What are sharrows?",
          options: [
            "Shared lane markings",
            "Separated bike lanes",
            "Pedestrian paths",
            "Bus stops"
          ],
          correctAnswer: 0,
          explanation: "Sharrows (shared lane markings) indicate that bicycles may use the full lane and remind drivers to share."
        },
        {
          id: 6,
          question: "What do pedestrian refuge islands allow?",
          options: [
            "Crossing in two stages",
            "Vehicle parking",
            "Road widening",
            "Signal installation"
          ],
          correctAnswer: 0,
          explanation: "Pedestrian refuge islands allow crossing wide roads in two stages with a safe waiting area in the middle."
        },
        {
          id: 7,
          question: "What improves nighttime visibility?",
          options: [
            "Reflective materials",
            "Darker colors",
            "Smaller signs",
            "Fewer lights"
          ],
          correctAnswer: 0,
          explanation: "Reflective materials on clothing and facilities improve visibility of pedestrians and cyclists at night."
        },
        {
          id: 8,
          question: "What are multi-use paths?",
          options: [
            "Separate paths for bikes and pedestrians",
            "Roads for cars only",
            "Parking lots",
            "Delivery zones"
          ],
          correctAnswer: 0,
          explanation: "Multi-use paths are separated from roads and accommodate both bicycles and pedestrians."
        },
        {
          id: 9,
          question: "What do countdown timers show?",
          options: [
            "Seconds remaining to cross",
            "Number of pedestrians",
            "Vehicle speed",
            "Time of day"
          ],
          correctAnswer: 0,
          explanation: "Pedestrian signal countdown timers display how many seconds remain to complete crossing."
        },
        {
          id: 10,
          question: "What do bike boxes provide?",
          options: [
            "Advance stopping areas at signals",
            "Bicycle parking only",
            "Bike repair stations",
            "Bicycle sales areas"
          ],
          correctAnswer: 0,
          explanation: "Bike boxes are marked areas at intersections where bicycles can wait in front of vehicles at red lights."
        },
        {
          id: 11,
          question: "What is universal design?",
          options: [
            "Design serving all abilities",
            "Design for cars only",
            "Expensive design",
            "Temporary design"
          ],
          correctAnswer: 0,
          explanation: "Universal design accommodates people of all ages and abilities, including children, elderly, and disabled."
        },
        {
          id: 12,
          question: "What do accessible signals have?",
          options: [
            "Audible tones",
            "Bright colors only",
            "Large size only",
            "Moving parts"
          ],
          correctAnswer: 0,
          explanation: "Accessible pedestrian signals provide audible tones or verbal messages for visually impaired users."
        },
        {
          id: 13,
          question: "What are protected bike lanes?",
          options: [
            "Lanes with physical separation",
            "Lanes with paint only",
            "Road shoulders",
            "Parking lanes"
          ],
          correctAnswer: 0,
          explanation: "Protected bike lanes have physical barriers separating bicycles from motor vehicle traffic."
        },
        {
          id: 14,
          question: "What does traffic calming do?",
          options: [
            "Reduces vehicle speeds",
            "Increases traffic volume",
            "Widens roads",
            "Removes sidewalks"
          ],
          correctAnswer: 0,
          explanation: "Traffic calming uses physical design measures to reduce vehicle speeds for improved safety."
        },
        {
          id: 15,
          question: "Why are clear zones important?",
          options: [
            "Keep paths free of obstacles",
            "Provide parking space",
            "Allow faster driving",
            "Reduce maintenance"
          ],
          correctAnswer: 0,
          explanation: "Clear zones keep pedestrian and bicycle paths free of obstacles that could cause trips or falls."
        },
        {
          id: 16,
          question: "What do pedestrians prefer?",
          options: [
            "Direct routes",
            "Longer paths",
            "Unmarked areas",
            "Busy roads"
          ],
          correctAnswer: 0,
          explanation: "Pedestrians naturally prefer the most direct route between their origin and destination."
        },
        {
          id: 17,
          question: "What does good drainage prevent?",
          options: [
            "Puddles and standing water",
            "Sunlight",
                            "Vegetation growth",
            "Path usage"
          ],
          correctAnswer: 0,
          explanation: "Proper drainage prevents puddles and standing water that create slipping hazards on paths."
        },
        {
          id: 18,
          question: "What is a complete street?",
          options: [
            "Street serving all users",
            "Street for cars only",
            "Closed street",
            "Private street"
          ],
          correctAnswer: 0,
          explanation: "Complete streets are designed and operated to enable safe access for all users of all ages and abilities."
        },
        {
          id: 19,
          question: "What do raised crosswalks do?",
          options: [
            "Slow vehicles",
            "Speed up vehicles",
            "Remove pedestrians",
            "Add parking"
          ],
          correctAnswer: 0,
          explanation: "Raised crosswalks act as speed humps, slowing vehicles while providing pedestrian crossing points."
        },
        {
          id: 20,
          question: "What should cars not block?",
          options: [
            "Sidewalks and paths",
            "Driveways only",
            "Other cars only",
            "Road signs"
          ],
          correctAnswer: 0,
          explanation: "Cars should not block sidewalks, crosswalks, or bicycle paths when parking."
        }
      ]
    },

    // MODULE 6: Traffic Safety and Enforcement
    {
      id: 6,
      title: "Traffic Safety and Enforcement",
      completed: false,
      content: `
## **Improving Road Safety**

Traffic safety saves lives and prevents injuries. Good management reduces crashes.

### **Common Crash Types**

**Rear-end Collisions** occur when following too closely. Most common at signals. Distracted driving increases risk.

**Angle Collisions** happen at intersections. Usually from running red lights or stop signs. Often serious.

**Side-swipe Collisions** occur during lane changes. Failure to check blind spots. Improper merging.

**Single Vehicle Crashes** involve hitting fixed objects. Often from speeding or loss of control. Run-off-road crashes.

**Pedestrian Crashes** involve people walking. Often at crossings or mid-block. Speed major factor in severity.

**Bicycle Crashes** involve cyclists. Often at intersections or driveways. Visibility issues common.

### **Speed Management**

**Speed Limits** set maximum safe speeds. Based on road design and use. Posted limits should be reasonable.

**Speed Enforcement** encourages compliance. Radar, cameras, officer presence. Consistent enforcement works best.

**Traffic Calming** uses design to reduce speeds. Speed humps, chicanes, narrow lanes. Self-enforcing measures.

**Speed Feedback Signs** show drivers their speed. Raise awareness. Often reduce speeds temporarily.

### **Behavior Issues**

**Distracted Driving** includes phone use, eating, adjusting radio. Takes attention from road. Major crash cause.

**Impaired Driving** includes alcohol, drugs, fatigue. Reduces reaction time. Very dangerous.

**Aggressive Driving** includes speeding, tailgating, frequent lane changes. Increases crash risk.

**Seat Belt Use** reduces injury severity. Primary enforcement saves lives. Education and enforcement needed.

**Child Restraints** protect young passengers. Proper installation crucial. Age and size appropriate.

### **Engineering Solutions**

**Road Design** influences safety. Clear sight lines, proper signage, good pavement. Forgiving roadsides.

**Intersection Design** reduces conflict points. Roundabouts often safer than signals. Channelization helps.

**Lighting** improves visibility. Well-lit areas have fewer night crashes. Important at intersections and crossings.

**Sign Maintenance** keeps messages clear. Faded signs don't communicate. Regular replacement needed.

**Pavement Markings** guide drivers. Visible markings important in rain and at night. Reflectivity helps.

### **Enforcement Strategies**

**Visible Presence** deters violations. Police patrols influence behavior. Random deployment effective.

**Selective Enforcement** targets problem areas. High-crash locations get extra attention. Data-driven approach.

**Automated Enforcement** uses cameras. Red light cameras, speed cameras. Operate continuously.

**Public Awareness** supports enforcement. Media campaigns explain why. Community involvement helps.

**Graduated Penalties** increase with repeat offenses. Points systems, license suspensions. Encourage compliance.

### **Education Programs**

**Driver Education** teaches skills and knowledge. New drivers need training. Refresher courses help.

**Public Campaigns** raise awareness. Focus on specific issues like seat belts, speeding, drunk driving.

**School Programs** teach children safety. Pedestrian and bicycle safety. Life-long habits formed early.

**Community Engagement** involves residents. Local safety concerns addressed. Neighborhood support gained.

**Employer Programs** reach commuters. Workplace safety initiatives. Fleet driver training.
`,
      quiz: [
        {
          id: 1,
          question: "What are rear-end collisions often caused by?",
          options: [
            "Following too closely",
            "Running red lights",
            "Proper braking",
            "Slow speeds"
          ],
          correctAnswer: 0,
          explanation: "Rear-end collisions typically occur when drivers follow too closely and cannot stop in time."
        },
        {
          id: 2,
          question: "Where do angle collisions usually happen?",
          options: [
            "At intersections",
            "On straight roads",
            "In parking lots",
            "On highways"
          ],
          correctAnswer: 0,
          explanation: "Angle collisions most often occur at intersections when vehicles fail to yield right-of-way."
        },
        {
          id: 3,
          question: "What does speed enforcement encourage?",
          options: [
            "Compliance with limits",
            "Faster driving",
            "More accidents",
            "Road construction"
          ],
          correctAnswer: 0,
          explanation: "Speed enforcement encourages drivers to comply with posted speed limits for safety."
        },
        {
          id: 4,
          question: "What is distracted driving?",
          options: [
            "Attention taken from road",
            "Focus on driving only",
            "Proper observation",
            "Safe following"
          ],
          correctAnswer: 0,
          explanation: "Distracted driving occurs when drivers' attention is diverted from the driving task."
        },
        {
          id: 5,
          question: "What do speed limits set?",
          options: [
            "Maximum safe speeds",
            "Minimum speeds",
            "Average speeds",
            "Racing speeds"
          ],
          correctAnswer: 0,
          explanation: "Speed limits establish the maximum safe speed for vehicles on specific road sections."
        },
        {
          id: 6,
          question: "What reduces injury severity in crashes?",
          options: [
            "Seat belt use",
            "Loud music",
            "Dark windows",
            "Fast acceleration"
          ],
          correctAnswer: 0,
          explanation: "Seat belts significantly reduce injury severity by restraining occupants during crashes."
        },
        {
          id: 7,
          question: "What are traffic calming measures?",
          options: [
            "Design features that reduce speeds",
            "Methods to increase traffic",
            "Ways to widen roads",
            "Systems to remove signals"
          ],
          correctAnswer: 0,
          explanation: "Traffic calming uses physical design elements to naturally reduce vehicle speeds."
        },
        {
          id: 8,
          question: "What do speed feedback signs show?",
          options: [
            "Drivers their current speed",
            "Speed limits only",
            "Time of day",
            "Temperature"
          ],
          correctAnswer: 0,
          explanation: "Speed feedback signs display drivers' actual speed to raise awareness and encourage compliance."
        },
        {
          id: 9,
          question: "What is impaired driving?",
          options: [
            "Driving affected by alcohol or drugs",
            "Driving with seat belt",
            "Driving at speed limit",
            "Driving with focus"
          ],
          correctAnswer: 0,
          explanation: "Impaired driving occurs when drivers' abilities are compromised by alcohol, drugs, or fatigue."
        },
        {
          id: 10,
          question: "What do forgiving roadsides have?",
          options: [
            "Clear zones without obstacles",
            "Many trees close to road",
            "Steep slopes",
            "Concrete walls"
          ],
          correctAnswer: 0,
          explanation: "Forgiving roadsides have clear recovery areas without fixed objects that can cause severe crashes."
        },
        {
          id: 11,
          question: "What are side-swipe collisions?",
          options: [
            "Collisions during lane changes",
            "Head-on collisions",
            "Rear-end collisions",
            "Parking collisions"
          ],
          correctAnswer: 0,
          explanation: "Side-swipe collisions occur when vehicles traveling parallel make contact during lane changes."
        },
        {
          id: 12,
          question: "What is aggressive driving?",
          options: [
            "Speeding and tailgating",
            "Driving at speed limit",
            "Using turn signals",
            "Checking mirrors"
          ],
          correctAnswer: 0,
          explanation: "Aggressive driving includes behaviors like speeding, tailgating, and frequent unsafe lane changes."
        },
        {
          id: 13,
          question: "What do child restraints protect?",
          options: [
            "Young passengers",
            "Adult drivers only",
            "Vehicle exterior",
                            "Road surface"
          ],
          correctAnswer: 0,
          explanation: "Child restraints (car seats) are specifically designed to protect young passengers in crashes."
        },
        {
          id: 14,
          question: "What is selective enforcement?",
          options: [
            "Targeting problem areas",
            "Enforcing all laws equally",
            "No enforcement",
            "Random enforcement only"
          ],
          correctAnswer: 0,
          explanation: "Selective enforcement focuses on high-crash locations or specific violation types based on data."
        },
        {
          id: 15,
          question: "What do red light cameras do?",
          options: [
            "Automate intersection enforcement",
            "Control traffic signals",
            "Provide lighting",
            "Count vehicles"
          ],
          correctAnswer: 0,
          explanation: "Red light cameras automatically photograph vehicles that enter intersections after signals turn red."
        },
        {
          id: 16,
          question: "What is a major factor in pedestrian crash severity?",
          options: [
            "Vehicle speed",
            "Pedestrian age",
            "Time of day",
            "Road width"
          ],
          correctAnswer: 0,
          explanation: "Vehicle speed at impact is a major factor determining injury severity in pedestrian crashes."
        },
        {
          id: 17,
          question: "What do public awareness campaigns do?",
          options: [
            "Explain safety issues",
            "Advertise products",
            "Sell vehicles",
            "Promote speeding"
          ],
          correctAnswer: 0,
          explanation: "Public awareness campaigns educate the public about traffic safety issues and laws."
        },
        {
          id: 18,
          question: "What are graduated penalties?",
          options: [
            "Increasing with repeat offenses",
            "Same for all offenses",
            "Lower for repeat offenses",
            "No penalties"
          ],
          correctAnswer: 0,
          explanation: "Graduated penalty systems impose stronger consequences for repeat traffic violations."
        },
        {
          id: 19,
          question: "What do school programs teach?",
          options: [
            "Pedestrian and bicycle safety",
            "Driving skills",
            "Road construction",
            "Vehicle repair"
          ],
          correctAnswer: 0,
          explanation: "School safety programs teach children important pedestrian and bicycle safety skills."
        },
        {
          id: 20,
          question: "What does visible police presence do?",
          options: [
            "Deters violations",
            "Causes accidents",
            "Slows traffic too much",
            "Increases speeding"
          ],
          correctAnswer: 0,
          explanation: "Visible police presence deters traffic violations by reminding drivers that enforcement is active."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What is the main purpose of traffic management?",
      options: [
        "Organize movement of people and vehicles",
        "Build more parking lots",
        "Increase vehicle sales",
        "Reduce road maintenance"
      ],
      correctAnswer: 0,
      explanation: "Traffic management organizes how people and vehicles move to prevent congestion and improve safety."
    },
    {
      id: 2,
      question: "What do regulatory signs tell drivers?",
      options: [
        "What they must or must not do",
        "About nearby restaurants",
        "Historical information",
        "Weather forecasts"
      ],
      correctAnswer: 0,
      explanation: "Regulatory signs inform drivers of laws and regulations they must follow for safety."
    },
    {
      id: 3,
      question: "What must vehicles do at roundabouts?",
      options: [
        "Yield to traffic already in roundabout",
        "Speed up to enter first",
        "Stop completely before entering",
        "Honk continuously while entering"
      ],
      correctAnswer: 0,
      explanation: "At roundabouts, approaching vehicles must yield to traffic already circulating in the roundabout."
    },
    {
      id: 4,
      question: "What is traffic volume?",
      options: [
        "Number of vehicles passing a point",
        "Speed of fastest vehicle",
        "Width of the road",
        "Height of vehicles"
      ],
      correctAnswer: 0,
      explanation: "Traffic volume measures how many vehicles pass a specific point during a given time period."
    },
    {
      id: 5,
      question: "What are sidewalks designed for?",
      options: [
        "Pedestrian paths beside roads",
        "Bicycle lanes",
        "Car parking",
        "Road expansion"
      ],
      correctAnswer: 0,
      explanation: "Sidewalks are designated paths alongside roads specifically for pedestrian use."
    },
    {
      id: 6,
      question: "What often causes rear-end collisions?",
      options: [
        "Following too closely",
        "Using turn signals",
        "Driving at speed limit",
        "Checking mirrors"
      ],
      correctAnswer: 0,
      explanation: "Rear-end collisions typically occur when drivers follow too closely and cannot stop in time."
    },
    {
      id: 7,
      question: "What does a red traffic light mean?",
      options: [
        "Stop completely",
        "Slow down only",
        "Speed up quickly",
        "Proceed with caution"
      ],
      correctAnswer: 0,
      explanation: "Red traffic lights require vehicles to come to a complete stop before the intersection."
    },
    {
      id: 8,
      question: "What are warning signs usually?",
      options: [
        "Yellow and diamond-shaped",
        "Red and round",
        "Green and rectangular",
        "Blue and square"
      ],
      correctAnswer: 0,
      explanation: "Warning signs are typically yellow with black symbols and diamond-shaped to alert of hazards."
    },
    {
      id: 9,
      question: "Who has right-of-way at four-way stops if arriving together?",
      options: [
        "Vehicle on the right",
        "Vehicle on the left",
        "Larger vehicle",
        "Faster vehicle"
      ],
      correctAnswer: 0,
      explanation: "When vehicles arrive simultaneously at a four-way stop, the vehicle on the right proceeds first."
    },
    {
      id: 10,
      question: "What increases road capacity directly?",
      options: [
        "Adding more lanes",
        "Adding more signs",
        "Painting lines brighter",
        "Increasing speed limits"
      ],
      correctAnswer: 0,
      explanation: "Adding more travel lanes to a road directly increases its vehicle-carrying capacity."
    },
    {
      id: 11,
      question: "What do bike lanes provide?",
      options: [
        "Dedicated space for bicycles",
        "Extra parking",
        "Wider roads for cars",
        "Bus stops"
      ],
      correctAnswer: 0,
      explanation: "Bike lanes are roadway lanes marked specifically for bicycle use, providing dedicated space."
    },
    {
      id: 12,
      question: "What does speed enforcement encourage?",
      options: [
        "Compliance with speed limits",
        "Faster driving",
        "More lane changes",
        "Tailgating"
      ],
      correctAnswer: 0,
      explanation: "Speed enforcement encourages drivers to comply with posted speed limits for safety."
    },
    {
      id: 13,
      question: "What is traffic flow?",
      options: [
        "Movement of vehicles on roads",
        "Number of traffic lights",
        "Width of highways",
        "Height of bridges"
      ],
      correctAnswer: 0,
      explanation: "Traffic flow refers to how vehicles move on roads, aiming for smooth, continuous movement."
    },
    {
      id: 14,
      question: "What color are construction signs?",
      options: [
        "Orange with black",
        "Yellow with red",
        "Green with white",
        "Blue with yellow"
      ],
      correctAnswer: 0,
      explanation: "Construction signs are orange with black symbols to indicate temporary road conditions."
    },
    {
      id: 15,
      question: "What is a protected left turn?",
      options: [
        "Turn with green arrow signal",
        "Turn with red light",
        "Turn without signaling",
        "Turn at high speed"
      ],
      correctAnswer: 0,
      explanation: "Protected left turns occur when a green arrow signal gives exclusive right-of-way for turning."
    },
    {
      id: 16,
      question: "What is free-flow speed?",
      options: [
        "Speed with no congestion",
        "Maximum speed limit",
        "Minimum speed required",
        "Average vehicle age"
      ],
      correctAnswer: 0,
      explanation: "Free-flow speed is what vehicles travel when there's no congestion or restrictions."
    },
    {
      id: 17,
      question: "What do curb ramps help?",
      options: [
        "Wheelchair users",
        "Sports cars only",
        "Truck drivers",
        "Motorcyclists"
      ],
      correctAnswer: 0,
      explanation: "Curb ramps provide smooth transitions from sidewalks to streets for wheelchair users."
    },
    {
      id: 18,
      question: "What is distracted driving?",
      options: [
        "Attention taken from road",
        "Focus on driving",
        "Proper observation",
        "Safe following distance"
      ],
      correctAnswer: 0,
      explanation: "Distracted driving occurs when drivers' attention is diverted from the driving task."
    },
    {
      id: 19,
      question: "What do broken lane lines mean?",
      options: [
        "Lane changing allowed",
        "No lane changing",
        "Road ends ahead",
        "Construction zone"
      ],
      correctAnswer: 0,
      explanation: "Broken white lines indicate that lane changing is permitted when safe to do so."
    },
    {
      id: 20,
      question: "What do roundabouts feature?",
      options: [
        "Circular design with yield entry",
        "Four-way stop control",
        "Traffic signals inside",
        "Straight-through design"
      ],
      correctAnswer: 0,
      explanation: "Roundabouts are circular intersections where entering vehicles yield to circulating traffic."
    },
    {
      id: 21,
      question: "What is traffic density?",
      options: [
        "Vehicles per road section",
        "Speed measurement",
        "Road construction cost",
        "Signal timing method"
      ],
      correctAnswer: 0,
      explanation: "Traffic density measures how many vehicles occupy a given length of road at one time."
    },
    {
      id: 22,
      question: "What are sharrows?",
      options: [
        "Shared lane markings",
        "Separated bike lanes",
        "Pedestrian crosswalks",
        "Bus lanes"
      ],
      correctAnswer: 0,
      explanation: "Sharrows (shared lane markings) indicate that bicycles may use the full lane."
    },
    {
      id: 23,
      question: "What do speed limits set?",
      options: [
        "Maximum safe speeds",
        "Minimum speeds",
        "Racing speeds",
        "Parking times"
      ],
      correctAnswer: 0,
      explanation: "Speed limits establish the maximum safe speed for specific road sections."
    },
    {
      id: 24,
      question: "What is signal coordination?",
      options: [
        "Linking adjacent signals",
        "Changing signal colors",
        "Adding more signals",
        "Removing signals"
      ],
      correctAnswer: 0,
      explanation: "Signal coordination links timing of adjacent signals to create progressive movement."
    },
    {
      id: 25,
      question: "What do pedestrian refuge islands allow?",
      options: [
        "Crossing in two stages",
        "Vehicle parking",
        "Road widening",
        "Signal installation"
      ],
      correctAnswer: 0,
      explanation: "Pedestrian refuge islands allow crossing wide roads in two stages with safe waiting areas."
    },
    {
      id: 26,
      question: "What is aggressive driving?",
      options: [
        "Speeding and tailgating",
        "Driving at limit",
        "Using signals",
        "Checking mirrors"
      ],
      correctAnswer: 0,
      explanation: "Aggressive driving includes behaviors like speeding, tailgating, and unsafe lane changes."
    },
    {
      id: 27,
      question: "What are guide signs for?",
      options: [
        "Providing route information",
        "Issuing commands",
        "Giving warnings",
        "Marking construction"
      ],
      correctAnswer: 0,
      explanation: "Guide signs provide information about routes, destinations, and services."
    },
    {
      id: 28,
      question: "What must turning vehicles yield to?",
      options: [
        "Pedestrians and oncoming traffic",
        "Only other turning vehicles",
        "Parked cars",
        "Road signs"
      ],
      correctAnswer: 0,
      explanation: "Turning vehicles must yield to pedestrians in crosswalks and oncoming traffic."
    },
    {
      id: 29,
      question: "What is Level A service?",
      options: [
        "Free flow conditions",
        "Complete breakdown",
        "Stop-and-go traffic",
        "Moderate congestion"
      ],
      correctAnswer: 0,
      explanation: "Level of Service A represents free flow conditions with complete driver freedom."
    },
    {
      id: 30,
      question: "What do multi-use paths serve?",
      options: [
        "Bicycles and pedestrians",
        "Cars only",
        "Trucks only",
        "Buses only"
      ],
      correctAnswer: 0,
      explanation: "Multi-use paths are separated from roads and accommodate both bicycles and pedestrians."
    },
    {
      id: 31,
      question: "What does seat belt use reduce?",
      options: [
        "Injury severity in crashes",
        "Fuel consumption",
        "Travel time",
        "Vehicle cost"
      ],
      correctAnswer: 0,
      explanation: "Seat belts significantly reduce injury severity by restraining occupants during crashes."
    },
    {
      id: 32,
      question: "What do green arrow signals mean?",
      options: [
        "Protected turn movement",
        "No turning allowed",
        "Prepare to stop",
        "Speed up quickly"
      ],
      correctAnswer: 0,
      explanation: "Green arrow signals indicate protected turning movements with exclusive right-of-way."
    },
    {
      id: 33,
      question: "What is offset in signal timing?",
      options: [
        "Coordination along corridor",
        "Signal height",
        "Light brightness",
        "Pole color"
      ],
      correctAnswer: 0,
      explanation: "Offset is the time relationship between signals at adjacent intersections."
    },
    {
      id: 34,
      question: "What is universal design?",
      options: [
        "Design serving all abilities",
        "Design for cars only",
        "Expensive design",
        "Temporary design"
      ],
      correctAnswer: 0,
      explanation: "Universal design accommodates people of all ages and abilities."
    },
    {
      id: 35,
      question: "What are traffic calming measures?",
      options: [
        "Design features reducing speeds",
        "Methods increasing traffic",
        "Ways widening roads",
        "Systems removing signals"
      ],
      correctAnswer: 0,
      explanation: "Traffic calming uses physical design to naturally reduce vehicle speeds."
    },
    {
      id: 36,
      question: "What do double solid yellow lines mean?",
      options: [
        "No passing allowed",
        "Passing allowed",
        "Lane ends soon",
        "Merge ahead"
      ],
      correctAnswer: 0,
      explanation: "Double solid yellow lines indicate no passing in either direction."
    },
    {
      id: 37,
      question: "What do slip lanes allow?",
      options: [
        "Right turns without stopping",
        "Left turns without yielding",
        "U-turns at speed",
        "Parking at corners"
      ],
      correctAnswer: 0,
      explanation: "Slip lanes allow right-turning vehicles to bypass main intersections without stopping."
    },
    {
      id: 38,
      question: "What are countdown timers for?",
      options: [
        "Showing crossing time remaining",
        "Counting vehicles",
        "Timing traffic lights",
        "Measuring speed"
      ],
      correctAnswer: 0,
      explanation: "Pedestrian signal countdown timers display seconds remaining to complete crossing."
    },
    {
      id: 39,
      question: "What is selective enforcement?",
      options: [
        "Targeting problem areas",
        "Enforcing all laws equally",
        "No enforcement",
        "Random only"
      ],
      correctAnswer: 0,
      explanation: "Selective enforcement focuses on high-crash locations based on data."
    },
    {
      id: 40,
      question: "What do red light cameras automate?",
      options: [
        "Intersection enforcement",
        "Signal control",
        "Lighting systems",
        "Vehicle counting"
      ],
      correctAnswer: 0,
      explanation: "Red light cameras automatically photograph vehicles entering intersections after red."
    }
  ]
};

export default trafficManagementCertificate;
