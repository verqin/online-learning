// Mechanical Engineering (Certificate) - Complete Course Data
// File: mechanical-engineering-certificate.ts

export const mechanicalEngineeringCertificate = {
  // COURSE METADATA
  id: "mechanical-engineering-certificate",
  title: "Mechanical Engineering (Certificate)",
  description: "Master the fundamentals of mechanical engineering with practical applications. Learn about materials, forces, energy systems, and mechanical design principles through easy-to-understand concepts and real-world examples.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "⚙️",
  badge: "Certificate",
  prerequisite: null,
  
  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Mechanical Engineering",
      content: `# Module 1: Introduction to Mechanical Engineering

## What is Mechanical Engineering?
Mechanical engineering is the branch of engineering that deals with the design, analysis, manufacturing, and maintenance of mechanical systems. It applies principles of physics and materials science to create machines and systems that make our lives easier.

### Core Areas of Mechanical Engineering
**Thermodynamics** - The study of heat and energy transfer in systems
**Mechanics** - Understanding how forces affect materials and structures
**Materials Science** - Learning about different materials and their properties
**Manufacturing Processes** - How things are made in factories and workshops

### Real-World Applications
Mechanical engineers work on:
- Automotive systems like engines and transmissions
- Heating and cooling systems for buildings
- Manufacturing equipment and production lines
- Energy generation systems including turbines
- Robotics and automation systems

### Engineering Design Process
The standard design process follows these steps:
1. Identify the problem or need
2. Research existing solutions
3. Develop possible designs
4. Select the best design option
5. Build a prototype
6. Test and improve the design
7. Finalize for production

### Important Engineering Concepts
**Force** - A push or pull on an object
**Energy** - The ability to do work
**Motion** - How objects move through space
**Materials** - What things are made from
**Efficiency** - Getting more output from less input

### Safety in Engineering
Always consider safety when designing mechanical systems. This includes:
- Protecting operators from moving parts
- Preventing system failures
- Considering environmental impacts
- Planning for proper maintenance access

### Tools of the Trade
Mechanical engineers use various tools including:
- Computer-Aided Design software
- Measurement instruments
- Testing equipment
- Analysis software for calculations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main focus of mechanical engineering?",
          options: [
            "Designing websites and apps",
            "Creating chemical formulas",
            "Designing and analyzing mechanical systems",
            "Studying human biology"
          ],
          correctAnswer: 2,
          explanation: "Mechanical engineering primarily deals with the design, analysis, manufacturing, and maintenance of mechanical systems."
        },
        {
          id: 2,
          question: "Which area studies heat and energy transfer?",
          options: [
            "Mechanics",
            "Thermodynamics",
            "Materials Science",
            "Manufacturing"
          ],
          correctAnswer: 1,
          explanation: "Thermodynamics is specifically concerned with heat, energy transfer, and how energy transforms in mechanical systems."
        },
        {
          id: 3,
          question: "What is the first step in the engineering design process?",
          options: [
            "Build a prototype",
            "Identify the problem or need",
            "Test the design",
            "Research existing solutions"
          ],
          correctAnswer: 1,
          explanation: "The design process always begins with clearly identifying what problem needs to be solved or what need must be addressed."
        },
        {
          id: 4,
          question: "Which of these is NOT typically a mechanical engineering application?",
          options: [
            "Automotive systems",
            "Building heating systems",
            "Energy generation turbines",
            "Writing computer code for websites"
          ],
          correctAnswer: 3,
          explanation: "While mechanical engineers might use programming, writing website code is typically software engineering, not mechanical engineering."
        },
        {
          id: 5,
          question: "What does 'efficiency' mean in engineering?",
          options: [
            "Working very quickly",
            "Getting more output from less input",
            "Using expensive materials",
            "Making things very large"
          ],
          correctAnswer: 1,
          explanation: "Efficiency measures how well a system converts input (like fuel) into useful output (like motion) with minimal waste."
        },
        {
          id: 6,
          question: "Which concept describes a push or pull on an object?",
          options: [
            "Energy",
            "Motion",
            "Force",
            "Materials"
          ],
          correctAnswer: 2,
          explanation: "Force is defined as any push or pull acting upon an object, measured in units called Newtons."
        },
        {
          id: 7,
          question: "What should always be considered in mechanical design?",
          options: [
            "Making things look pretty",
            "Using the cheapest materials",
            "Safety of operators and users",
            "Working as quickly as possible"
          ],
          correctAnswer: 2,
          explanation: "Safety is a fundamental consideration in all engineering designs to protect people who use or maintain the systems."
        },
        {
          id: 8,
          question: "What does CAD stand for?",
          options: [
            "Computer-Aided Design",
            "Computer Analysis Device",
            "Calculated Automatic Drawing",
            "Complex Assembly Diagram"
          ],
          correctAnswer: 0,
          explanation: "CAD stands for Computer-Aided Design, software used by engineers to create precise drawings and models."
        },
        {
          id: 9,
          question: "Which area focuses on understanding forces on materials?",
          options: [
            "Thermodynamics",
            "Manufacturing",
            "Mechanics",
            "Materials Science"
          ],
          correctAnswer: 2,
          explanation: "Mechanics specifically studies how forces affect materials and structures, including stress and strain."
        },
        {
          id: 10,
          question: "What is energy in simple terms?",
          options: [
            "How fast something moves",
            "The ability to do work",
            "The weight of an object",
            "The temperature of a system"
          ],
          correctAnswer: 1,
          explanation: "Energy is defined as the capacity to do work or cause change in a system."
        },
        {
          id: 11,
          question: "Which of these is part of the engineering design process?",
          options: [
            "Ignore existing solutions",
            "Build without planning",
            "Create multiple design options",
            "Skip testing to save time"
          ],
          correctAnswer: 2,
          explanation: "Developing multiple possible designs allows engineers to choose the best solution for the problem."
        },
        {
          id: 12,
          question: "What do mechanical engineers analyze?",
          options: [
            "Only how things look",
            "Only the cost of materials",
            "How systems perform and fail",
            "Only mathematical equations"
          ],
          correctAnswer: 2,
          explanation: "Mechanical engineers analyze system performance, efficiency, reliability, and potential failure modes."
        },
        {
          id: 13,
          question: "What is motion in mechanical terms?",
          options: [
            "The color of an object",
            "How objects move through space",
            "The temperature change",
            "The material type"
          ],
          correctAnswer: 1,
          explanation: "Motion describes how objects change position over time, including speed, direction, and acceleration."
        },
        {
          id: 14,
          question: "Which tool helps create precise engineering drawings?",
          options: [
            "Word processor",
            "Spreadsheet software",
            "CAD software",
            "Email program"
          ],
          correctAnswer: 2,
          explanation: "CAD (Computer-Aided Design) software creates precise technical drawings and 3D models for engineering."
        },
        {
          id: 15,
          question: "Why is research important in the design process?",
          options: [
            "To copy others' work",
            "To avoid understanding the problem",
            "To learn from existing solutions",
            "To make the process longer"
          ],
          correctAnswer: 2,
          explanation: "Researching existing solutions helps engineers understand what works, what doesn't, and how to improve designs."
        },
        {
          id: 16,
          question: "What does materials science study?",
          options: [
            "Only metal properties",
            "Different materials and their properties",
            "Only plastic materials",
            "Chemical reactions only"
          ],
          correctAnswer: 1,
          explanation: "Materials science examines all types of materials - metals, plastics, ceramics, composites - and their properties."
        },
        {
          id: 17,
          question: "What is a prototype?",
          options: [
            "The final product",
            "A working model for testing",
            "The engineering drawing",
            "The cost estimate"
          ],
          correctAnswer: 1,
          explanation: "A prototype is a working model built to test a design before full-scale production begins."
        },
        {
          id: 18,
          question: "Which is NOT a core area of mechanical engineering?",
          options: [
            "Thermodynamics",
            "Mechanics",
            "Gardening techniques",
            "Materials Science"
          ],
          correctAnswer: 2,
          explanation: "Gardening techniques are not a core area of mechanical engineering, though engineers might design gardening tools."
        },
        {
          id: 19,
          question: "What should designs consider for maintenance?",
          options: [
            "Make maintenance impossible",
            "Hide all access points",
            "Provide proper maintenance access",
            "Use non-standard tools only"
          ],
          correctAnswer: 2,
          explanation: "Good engineering design includes planning for how systems will be maintained and repaired during their lifetime."
        },
        {
          id: 20,
          question: "What is the purpose of testing in design?",
          options: [
            "To prove the design is perfect",
            "To find and fix problems",
            "To make the product more expensive",
            "To delay production"
          ],
          correctAnswer: 1,
          explanation: "Testing identifies problems, weaknesses, and areas for improvement before final production begins."
        }
      ]
    },
    {
      id: 2,
      title: "Forces and Materials",
      content: `# Module 2: Forces and Materials

## Understanding Forces
Forces are pushes or pulls that cause objects to accelerate, slow down, change direction, or deform. Understanding forces is essential for designing strong and safe structures.

### Types of Forces
**Compression** - Forces that squeeze or push materials together
**Tension** - Forces that stretch or pull materials apart
**Shear** - Forces that cause sliding or cutting between layers
**Bending** - Combination forces that cause curving
**Torsion** - Twisting forces applied to materials

### Material Properties
Different materials respond differently to forces. Key properties include:
**Strength** - How much force a material can withstand before breaking
**Stiffness** - How much a material resists bending or stretching
**Ductility** - How much a material can stretch without breaking
**Brittleness** - Tendency to break without significant stretching
**Hardness** - Resistance to scratching or indentation

### Common Engineering Materials
**Metals** - Steel, aluminum, copper (strong, conductive, durable)
**Plastics** - Polyethylene, PVC, nylon (lightweight, moldable)
**Ceramics** - Porcelain, brick, glass (hard, heat-resistant)
**Composites** - Fiberglass, carbon fiber (combination materials)
**Wood** - Natural material with good strength-to-weight ratio

### Stress and Strain
**Stress** - Force applied per unit area (measured in Pascals)
**Strain** - How much a material deforms under stress
**Elastic Deformation** - Temporary stretching that returns to original shape
**Plastic Deformation** - Permanent stretching that doesn't return
**Failure Point** - Where material breaks under excessive stress

### Safety Factors
Engineers use safety factors to ensure designs can handle more force than expected:
- Typical safety factors range from 2 to 10 times expected loads
- Higher safety factors for critical applications like bridges
- Lower safety factors for non-critical applications
- Accounts for material variations and unexpected loads

### Load Types
**Static Loads** - Constant, unchanging forces (like building weight)
**Dynamic Loads** - Changing forces (like moving vehicles)
**Impact Loads** - Sudden, short-duration forces (like hammer blows)
**Cyclic Loads** - Repeated loading and unloading (causes fatigue)

### Material Selection Process
Choosing the right material involves considering:
1. Required strength and stiffness
2. Weight limitations
3. Environmental conditions
4. Manufacturing methods available
5. Cost and availability
6. Expected lifespan

### Force Calculations
Basic force calculations involve:
- Identifying all forces acting on an object
- Determining their directions
- Calculating resultant forces
- Checking if materials can handle the stresses
- Applying appropriate safety factors

### Real-World Applications
Understanding forces helps design:
- Bridges that support vehicle weights
- Aircraft wings that withstand air pressure
- Machine parts that don't break under load
- Building frames that resist wind forces
- Tools that handle applied forces safely`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of force squeezes materials together?",
          options: [
            "Tension",
            "Compression",
            "Shear",
            "Torsion"
          ],
          correctAnswer: 1,
          explanation: "Compression forces push materials together, like the weight of a building on its foundation."
        },
        {
          id: 2,
          question: "Which force causes stretching or pulling apart?",
          options: [
            "Bending",
            "Torsion",
            "Tension",
            "Compression"
          ],
          correctAnswer: 2,
          explanation: "Tension forces pull materials apart, like a rope being pulled from both ends."
        },
        {
          id: 3,
          question: "What is the measure of force per unit area?",
          options: [
            "Strain",
            "Hardness",
            "Stress",
            "Ductility"
          ],
          correctAnswer: 2,
          explanation: "Stress measures how much force is applied to a specific area of material."
        },
        {
          id: 4,
          question: "Which material property describes stretching without breaking?",
          options: [
            "Brittleness",
            "Ductility",
            "Hardness",
            "Stiffness"
          ],
          correctAnswer: 1,
          explanation: "Ductile materials can stretch significantly before breaking, like copper wire."
        },
        {
          id: 5,
          question: "What type of load involves repeated forces?",
          options: [
            "Static Load",
            "Impact Load",
            "Cyclic Load",
            "Dynamic Load"
          ],
          correctAnswer: 2,
          explanation: "Cyclic loads repeatedly apply and remove forces, which can cause material fatigue over time."
        },
        {
          id: 6,
          question: "Which material is known for being lightweight and moldable?",
          options: [
            "Steel",
            "Ceramics",
            "Plastics",
            "Concrete"
          ],
          correctAnswer: 2,
          explanation: "Plastics are lightweight and can be molded into complex shapes through various manufacturing processes."
        },
        {
          id: 7,
          question: "What does a safety factor account for?",
          options: [
            "Only the exact expected load",
            "Material variations and unexpected loads",
            "Making designs less expensive",
            "Reducing material strength"
          ],
          correctAnswer: 1,
          explanation: "Safety factors ensure designs can handle more than expected loads, accounting for uncertainties and variations."
        },
        {
          id: 8,
          question: "What causes twisting in materials?",
          options: [
            "Compression forces",
            "Tension forces",
            "Torsion forces",
            "Shear forces"
          ],
          correctAnswer: 2,
          explanation: "Torsion forces create twisting motion, like when turning a screwdriver."
        },
        {
          id: 9,
          question: "Which property measures resistance to scratching?",
          options: [
            "Strength",
            "Hardness",
            "Stiffness",
            "Ductility"
          ],
          correctAnswer: 1,
          explanation: "Hardness specifically measures a material's resistance to scratching, indentation, or penetration."
        },
        {
          id: 10,
          question: "What type of deformation is permanent?",
          options: [
            "Elastic deformation",
            "Temporary deformation",
            "Plastic deformation",
            "Reversible deformation"
          ],
          correctAnswer: 2,
          explanation: "Plastic deformation causes permanent changes to a material's shape that don't recover when force is removed."
        },
        {
          id: 11,
          question: "Which material category includes fiberglass?",
          options: [
            "Metals",
            "Ceramics",
            "Composites",
            "Plastics"
          ],
          correctAnswer: 2,
          explanation: "Fiberglass is a composite material made from glass fibers embedded in plastic resin."
        },
        {
          id: 12,
          question: "What do engineers calculate to check material suitability?",
          options: [
            "Only the color of materials",
            "Only the cost of materials",
            "Stresses from applied forces",
            "The popularity of materials"
          ],
          correctAnswer: 2,
          explanation: "Engineers calculate stresses to ensure materials can handle expected forces without failing."
        },
        {
          id: 13,
          question: "Which force causes sliding between layers?",
          options: [
            "Tension",
            "Compression",
            "Shear",
            "Bending"
          ],
          correctAnswer: 2,
          explanation: "Shear forces cause adjacent layers of material to slide past each other."
        },
        {
          id: 14,
          question: "What is strain?",
          options: [
            "Force applied to material",
            "Material deformation under stress",
            "Material breaking point",
            "Safety factor calculation"
          ],
          correctAnswer: 1,
          explanation: "Strain measures how much a material deforms or stretches when stress is applied."
        },
        {
          id: 15,
          question: "Which load type is constant and unchanging?",
          options: [
            "Dynamic load",
            "Impact load",
            "Cyclic load",
            "Static load"
          ],
          correctAnswer: 3,
          explanation: "Static loads remain constant over time, like the weight of a building on its foundation."
        },
        {
          id: 16,
          question: "What property describes resistance to bending?",
          options: [
            "Ductility",
            "Stiffness",
            "Hardness",
            "Brittleness"
          ],
          correctAnswer: 1,
          explanation: "Stiffness measures how much a material resists bending or deformation when force is applied."
        },
        {
          id: 17,
          question: "When selecting materials, what must engineers consider?",
          options: [
            "Only the material color",
            "Strength, weight, cost, and environment",
            "Only the manufacturer's name",
            "Only the material's popularity"
          ],
          correctAnswer: 1,
          explanation: "Material selection involves multiple factors including strength, weight, cost, manufacturing methods, and environmental conditions."
        },
        {
          id: 18,
          question: "What causes bending in materials?",
          options: [
            "Pure tension force",
            "Pure compression force",
            "Combination of forces",
            "Only twisting force"
          ],
          correctAnswer: 2,
          explanation: "Bending occurs when different parts of a material experience different forces, creating curvature."
        },
        {
          id: 19,
          question: "Which material tends to break without stretching?",
          options: [
            "Ductile materials",
            "Brittle materials",
            "Elastic materials",
            "Plastic materials"
          ],
          correctAnswer: 1,
          explanation: "Brittle materials like glass or ceramics break suddenly with little stretching or warning."
        },
        {
          id: 20,
          question: "Why do engineers consider environmental conditions?",
          options: [
            "Only for decoration",
            "Materials behave differently in different environments",
            "To make designs more expensive",
            "It's not important for material selection"
          ],
          correctAnswer: 1,
          explanation: "Temperature, moisture, chemicals, and other environmental factors affect how materials perform over time."
        }
      ]
    },
    {
      id: 3,
      title: "Basic Mechanics and Motion",
      content: `# Module 3: Basic Mechanics and Motion

## Introduction to Mechanics
Mechanics is the branch of physics that studies motion and the forces that cause motion. It's essential for understanding how machines work and designing moving parts.

### Types of Motion
**Linear Motion** - Movement in a straight line
**Rotational Motion** - Spinning or turning around an axis
**Oscillatory Motion** - Back-and-forth or repeating motion
**Curvilinear Motion** - Movement along a curved path
**Reciprocating Motion** - Repeated back-and-forth linear motion

### Newton's Laws of Motion
**First Law (Inertia)** - Objects at rest stay at rest, and objects in motion stay in motion unless acted upon by a force
**Second Law (F=ma)** - Force equals mass times acceleration
**Third Law (Action-Reaction)** - For every action, there's an equal and opposite reaction

### Basic Mechanical Concepts
**Velocity** - Speed in a specific direction
**Acceleration** - Rate of change of velocity
**Mass** - Amount of matter in an object
**Weight** - Force of gravity on an object's mass
**Momentum** - Mass times velocity (tendency to keep moving)

### Simple Machines
Six basic simple machines make work easier:
**Lever** - A rigid bar that pivots on a fulcrum
**Wheel and Axle** - A wheel attached to a rod (axle)
**Pulley** - A wheel with a groove for a rope
**Inclined Plane** - A sloping surface
**Wedge** - Two inclined planes back-to-back
**Screw** - An inclined plane wrapped around a cylinder

### Mechanical Advantage
**Mechanical Advantage** - How much a machine multiplies force
**Ideal Mechanical Advantage** - Theoretical advantage without friction
**Actual Mechanical Advantage** - Real advantage with friction
**Efficiency** - Ratio of output work to input work

### Energy in Mechanical Systems
**Kinetic Energy** - Energy of motion
**Potential Energy** - Stored energy (height or position)
**Work** - Force applied over a distance
**Power** - Rate of doing work
**Conservation of Energy** - Energy cannot be created or destroyed, only converted

### Friction and Lubrication
**Friction** - Resistance to motion between surfaces
**Static Friction** - When surfaces aren't moving relative to each other
**Kinetic Friction** - When surfaces are sliding past each other
**Lubrication** - Using fluids to reduce friction
**Bearings** - Devices that reduce friction in rotating parts

### Gear Systems
**Gears** - Toothed wheels that transmit motion
**Gear Ratio** - Relationship between input and output speeds
**Speed Increase** - Output spins faster than input
**Torque Increase** - Output has more turning force than input
**Direction Change** - Gears can reverse rotation direction

### Motion Transmission Methods
**Direct Drive** - Straight connection between components
**Belt and Pulley** - Flexible belt connecting wheels
**Chain and Sprocket** - Metal chain connecting toothed wheels
**Shaft Couplings** - Connecting rotating shafts together
**Universal Joints** - Allow transmission at angles

### Real-World Applications
- **Automobiles** - Use gears, levers, and rotating parts
- **Bicycles** - Demonstrate chain and sprocket systems
- **Cranes** - Use pulleys to lift heavy loads
- **Doorknobs** - Simple wheel and axle systems
- **Ramps** - Inclined planes for loading`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which law states that objects in motion stay in motion?",
          options: [
            "Newton's Second Law",
            "Newton's Third Law",
            "Newton's First Law",
            "Law of Conservation of Energy"
          ],
          correctAnswer: 2,
          explanation: "Newton's First Law, also called the Law of Inertia, describes how objects resist changes to their motion."
        },
        {
          id: 2,
          question: "What type of motion involves spinning around an axis?",
          options: [
            "Linear Motion",
            "Oscillatory Motion",
            "Rotational Motion",
            "Reciprocating Motion"
          ],
          correctAnswer: 2,
          explanation: "Rotational motion occurs when an object spins or turns around a central axis."
        },
        {
          id: 3,
          question: "Which simple machine is a rigid bar that pivots?",
          options: [
            "Pulley",
            "Wheel and Axle",
            "Lever",
            "Screw"
          ],
          correctAnswer: 2,
          explanation: "A lever consists of a rigid bar that rotates around a fixed point called a fulcrum."
        },
        {
          id: 4,
          question: "What is the formula for Newton's Second Law?",
          options: [
            "E=mc²",
            "F=ma",
            "P=IV",
            "V=IR"
          ],
          correctAnswer: 1,
          explanation: "Newton's Second Law states that Force (F) equals mass (m) times acceleration (a)."
        },
        {
          id: 5,
          question: "What measures speed in a specific direction?",
          options: [
            "Acceleration",
            "Momentum",
            "Velocity",
            "Force"
          ],
          correctAnswer: 2,
          explanation: "Velocity includes both how fast something moves (speed) and the direction of movement."
        },
        {
          id: 6,
          question: "Which simple machine is an inclined plane wrapped around a cylinder?",
          options: [
            "Wedge",
            "Screw",
            "Pulley",
            "Lever"
          ],
          correctAnswer: 1,
          explanation: "A screw is essentially an inclined plane (ramp) wrapped around a cylindrical shaft."
        },
        {
          id: 7,
          question: "What type of energy does a moving object have?",
          options: [
            "Potential Energy",
            "Kinetic Energy",
            "Thermal Energy",
            "Chemical Energy"
          ],
          correctAnswer: 1,
          explanation: "Kinetic energy is the energy of motion - any object that's moving has kinetic energy."
        },
        {
          id: 8,
          question: "What reduces friction between moving parts?",
          options: [
            "Increasing surface roughness",
            "Lubrication",
            "Adding more weight",
            "Using brittle materials"
          ],
          correctAnswer: 1,
          explanation: "Lubricants like oil or grease create a slippery layer between surfaces to reduce friction."
        },
        {
          id: 9,
          question: "Which motion type is back-and-forth repeating movement?",
          options: [
            "Linear Motion",
            "Rotational Motion",
            "Oscillatory Motion",
            "Curvilinear Motion"
          ],
          correctAnswer: 2,
          explanation: "Oscillatory motion involves regular back-and-forth movement, like a pendulum or spring."
        },
        {
          id: 10,
          question: "What do gears primarily transmit?",
          options: [
            "Electricity",
            "Heat",
            "Motion and power",
            "Light"
          ],
          correctAnswer: 2,
          explanation: "Gears transmit rotational motion and mechanical power from one shaft to another."
        },
        {
          id: 11,
          question: "What is mechanical advantage?",
          options: [
            "How expensive a machine is",
            "How much a machine multiplies force",
            "How fast a machine operates",
            "How large a machine is"
          ],
          correctAnswer: 1,
          explanation: "Mechanical advantage measures how many times a machine multiplies the input force."
        },
        {
          id: 12,
          question: "Which law involves action and reaction pairs?",
          options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Conservation of Mass"
          ],
          correctAnswer: 2,
          explanation: "Newton's Third Law states that forces always occur in equal and opposite pairs."
        },
        {
          id: 13,
          question: "What type of friction occurs when surfaces are sliding?",
          options: [
            "Static Friction",
            "Kinetic Friction",
            "Rolling Friction",
            "Fluid Friction"
          ],
          correctAnswer: 1,
          explanation: "Kinetic friction (also called sliding friction) occurs when surfaces move relative to each other."
        },
        {
          id: 14,
          question: "Which simple machine uses a wheel with a rope?",
          options: [
            "Lever",
            "Inclined Plane",
            "Pulley",
            "Wedge"
          ],
          correctAnswer: 2,
          explanation: "A pulley consists of a wheel with a grooved rim that a rope or cable runs through."
        },
        {
          id: 15,
          question: "What is the rate of doing work called?",
          options: [
            "Energy",
            "Force",
            "Power",
            "Efficiency"
          ],
          correctAnswer: 2,
          explanation: "Power measures how quickly work is done or energy is transferred."
        },
        {
          id: 16,
          question: "Which device reduces friction in rotating parts?",
          options: [
            "Gears",
            "Bearings",
            "Brakes",
            "Clutches"
          ],
          correctAnswer: 1,
          explanation: "Bearings allow smooth rotation by reducing friction between moving parts and stationary supports."
        },
        {
          id: 17,
          question: "What type of motion does a bicycle chain create?",
          options: [
            "Linear to rotational conversion",
            "Electrical to mechanical conversion",
            "Thermal to kinetic conversion",
            "Potential to kinetic conversion"
          ],
          correctAnswer: 0,
          explanation: "Bicycle chains convert the linear pedaling motion into rotational motion at the wheels."
        },
        {
          id: 18,
          question: "What does the gear ratio affect?",
          options: [
            "Only the color of gears",
            "Only the noise level",
            "Speed and torque relationship",
            "Only the cost"
          ],
          correctAnswer: 2,
          explanation: "Gear ratio determines the relationship between input and output speeds and torques."
        },
        {
          id: 19,
          question: "Which simple machine are stairs an example of?",
          options: [
            "Lever",
            "Wheel and Axle",
            "Inclined Plane",
            "Screw"
          ],
          correctAnswer: 2,
          explanation: "Stairs are essentially a series of inclined planes that make climbing easier than going straight up."
        },
        {
          id: 20,
          question: "What principle states energy cannot be created or destroyed?",
          options: [
            "Newton's First Law",
            "Law of Conservation of Energy",
            "Ohm's Law",
            "Pascal's Principle"
          ],
          correctAnswer: 1,
          explanation: "The Law of Conservation of Energy states that energy only changes form, never disappears or appears from nothing."
        }
      ]
    },
    {
      id: 4,
      title: "Energy and Thermodynamics Basics",
      content: `# Module 4: Energy and Thermodynamics Basics

## Understanding Energy
Energy is the ability to do work or cause change. In mechanical systems, energy transforms between different forms to make things happen.

### Forms of Energy
**Mechanical Energy** - Energy of motion or position
**Thermal Energy** - Heat energy from molecular motion
**Chemical Energy** - Energy stored in chemical bonds
**Electrical Energy** - Energy from moving electrons
**Nuclear Energy** - Energy from atomic nuclei

### Laws of Thermodynamics
**Zeroth Law** - If two systems are each in thermal equilibrium with a third, they're in equilibrium with each other
**First Law** - Energy cannot be created or destroyed, only converted
**Second Law** - Heat flows naturally from hot to cold, not reverse
**Third Law** - Absolute zero cannot be reached

### Heat Transfer Methods
**Conduction** - Heat transfer through direct contact
**Convection** - Heat transfer through fluid movement
**Radiation** - Heat transfer through electromagnetic waves
**Insulation** - Materials that reduce heat transfer

### Temperature vs Heat
**Temperature** - Measure of how hot or cold something is
**Heat** - Thermal energy transferred between objects
**Specific Heat** - How much heat a material can store
**Thermal Expansion** - Materials expand when heated

### Energy Conversion Systems
**Heat Engines** - Convert heat into mechanical work
**Refrigerators** - Move heat from cold to hot areas
**Heat Pumps** - Transfer heat for heating or cooling
**Power Plants** - Convert various energies to electricity

### Efficiency in Energy Systems
**Thermal Efficiency** - Ratio of useful work to heat input
**Carnot Efficiency** - Maximum possible efficiency
**Real Efficiency** - Actual system performance
**Energy Losses** - Where energy goes besides useful work

### Common Thermodynamic Processes
**Isothermal** - Constant temperature process
**Adiabatic** - No heat transfer process
**Isobaric** - Constant pressure process
**Isochoric** - Constant volume process

### Heat Exchangers
Devices that transfer heat between fluids:
**Shell and Tube** - One fluid flows through tubes, another around them
**Plate Heat Exchanger** - Stacked plates with alternating fluids
**Finned Tube** - Tubes with fins to increase surface area
**Cooling Towers** - Use evaporation to remove heat

### Phase Changes
**Melting** - Solid to liquid
**Freezing** - Liquid to solid
**Evaporation** - Liquid to gas
**Condensation** - Gas to liquid
**Sublimation** - Solid directly to gas
**Latent Heat** - Energy for phase changes without temperature change

### Practical Applications
- **Engines** - Convert fuel energy to motion
- **Air Conditioners** - Remove heat from spaces
- **Refrigerators** - Keep food cold by removing heat
- **Power Generation** - Create electricity from various sources
- **Building HVAC** - Heating, Ventilation, and Air Conditioning`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the ability to do work or cause change?",
          options: [
            "Force",
            "Power",
            "Energy",
            "Momentum"
          ],
          correctAnswer: 2,
          explanation: "Energy is defined as the capacity to do work or bring about change in a system."
        },
        {
          id: 2,
          question: "Which law says energy cannot be created or destroyed?",
          options: [
            "Zeroth Law of Thermodynamics",
            "First Law of Thermodynamics",
            "Second Law of Thermodynamics",
            "Third Law of Thermodynamics"
          ],
          correctAnswer: 1,
          explanation: "The First Law of Thermodynamics is the conservation of energy principle."
        },
        {
          id: 3,
          question: "How does heat transfer through direct contact?",
          options: [
            "Convection",
            "Radiation",
            "Conduction",
            "Insulation"
          ],
          correctAnswer: 2,
          explanation: "Conduction occurs when heat moves through materials or between touching objects."
        },
        {
          id: 4,
          question: "What is the measure of how hot or cold something is?",
          options: [
            "Heat",
            "Temperature",
            "Thermal Energy",
            "Specific Heat"
          ],
          correctAnswer: 1,
          explanation: "Temperature measures the average kinetic energy of particles in a substance."
        },
        {
          id: 5,
          question: "What do heat engines convert into mechanical work?",
          options: [
            "Electrical energy",
            "Chemical energy",
            "Heat energy",
            "Nuclear energy"
          ],
          correctAnswer: 2,
          explanation: "Heat engines like car engines convert thermal energy (heat) into mechanical motion."
        },
        {
          id: 6,
          question: "Which law says heat flows naturally from hot to cold?",
          options: [
            "First Law",
            "Second Law",
            "Third Law",
            "Zeroth Law"
          ],
          correctAnswer: 1,
          explanation: "The Second Law of Thermodynamics describes the natural direction of heat flow."
        },
        {
          id: 7,
          question: "What type of heat transfer uses fluid movement?",
          options: [
            "Conduction",
            "Radiation",
            "Convection",
            "Insulation"
          ],
          correctAnswer: 2,
          explanation: "Convection involves heat transfer through the movement of liquids or gases."
        },
        {
          id: 8,
          question: "What happens to most materials when heated?",
          options: [
            "They contract",
            "They expand",
            "They change color",
            "They become magnetic"
          ],
          correctAnswer: 1,
          explanation: "Thermal expansion causes materials to increase in size when temperature increases."
        },
        {
          id: 9,
          question: "What is thermal efficiency?",
          options: [
            "How expensive a system is",
            "How large a system is",
            "Ratio of useful work to heat input",
            "How fast a system operates"
          ],
          correctAnswer: 2,
          explanation: "Thermal efficiency measures how well a system converts heat input into useful work output."
        },
        {
          id: 10,
          question: "Which process has constant temperature?",
          options: [
            "Adiabatic process",
            "Isothermal process",
            "Isobaric process",
            "Isochoric process"
          ],
          correctAnswer: 1,
          explanation: "Isothermal processes maintain constant temperature throughout."
        },
        {
          id: 11,
          question: "What do refrigerators move from cold to hot areas?",
          options: [
            "Electricity",
            "Sound",
            "Light",
            "Heat"
          ],
          correctAnswer: 3,
          explanation: "Refrigerators use energy to move heat from inside (cold area) to outside (hot area)."
        },
        {
          id: 12,
          question: "What transfers heat between fluids without mixing them?",
          options: [
            "Motor",
            "Generator",
            "Heat exchanger",
            "Compressor"
          ],
          correctAnswer: 2,
          explanation: "Heat exchangers allow heat transfer between fluids while keeping them separate."
        },
        {
          id: 13,
          question: "What is the change from liquid to gas called?",
          options: [
            "Melting",
            "Freezing",
            "Evaporation",
            "Condensation"
          ],
          correctAnswer: 2,
          explanation: "Evaporation occurs when liquid molecules gain enough energy to become gas."
        },
        {
          id: 14,
          question: "Which law involves thermal equilibrium?",
          options: [
            "First Law",
            "Second Law",
            "Third Law",
            "Zeroth Law"
          ],
          correctAnswer: 3,
          explanation: "The Zeroth Law defines temperature through thermal equilibrium relationships."
        },
        {
          id: 15,
          question: "What type of heat transfer uses electromagnetic waves?",
          options: [
            "Conduction",
            "Convection",
            "Radiation",
            "Insulation"
          ],
          correctAnswer: 2,
          explanation: "Radiation transfers heat through electromagnetic waves, like sunlight warming Earth."
        },
        {
          id: 16,
          question: "What measures how much heat a material can store?",
          options: [
            "Thermal conductivity",
            "Specific heat",
            "Thermal expansion",
            "Heat capacity"
          ],
          correctAnswer: 1,
          explanation: "Specific heat measures how much heat energy is needed to raise a material's temperature."
        },
        {
          id: 17,
          question: "Which process has no heat transfer?",
          options: [
            "Isothermal",
            "Adiabatic",
            "Isobaric",
            "Isochoric"
          ],
          correctAnswer: 1,
          explanation: "Adiabatic processes occur without any heat entering or leaving the system."
        },
        {
          id: 18,
          question: "What is the maximum possible efficiency called?",
          options: [
            "Real efficiency",
            "Carnot efficiency",
            "Practical efficiency",
            "Manufacturer's efficiency"
          ],
          correctAnswer: 1,
          explanation: "Carnot efficiency represents the theoretical maximum efficiency for heat engines."
        },
        {
          id: 19,
          question: "What phase change is solid to liquid?",
          options: [
            "Freezing",
            "Melting",
            "Evaporation",
            "Condensation"
          ],
          correctAnswer: 1,
          explanation: "Melting occurs when solids absorb enough heat to become liquids."
        },
        {
          id: 20,
          question: "What do materials that reduce heat transfer provide?",
          options: [
            "Conduction",
            "Insulation",
            "Radiation",
            "Convection"
          ],
          correctAnswer: 1,
          explanation: "Insulating materials slow down heat transfer, keeping hot things hot and cold things cold."
        }
      ]
    },
    {
      id: 5,
      title: "Manufacturing Processes",
      content: `# Module 5: Manufacturing Processes

## Introduction to Manufacturing
Manufacturing transforms raw materials into finished products through various processes. Understanding these processes helps engineers design parts that can be made efficiently.

### Types of Manufacturing
**Forming Processes** - Shape materials without removing material
**Cutting Processes** - Remove material to create shapes
**Joining Processes** - Connect parts together
**Finishing Processes** - Improve surface quality
**Assembly Processes** - Put components together into products

### Casting Processes
Pouring liquid material into molds:
**Sand Casting** - Using sand molds for metal parts
**Die Casting** - Forcing metal into metal molds
**Investment Casting** - Using wax patterns for detailed parts
**Casting Advantages** - Complex shapes, various metals
**Casting Limitations** - Surface finish, size limitations

### Forming Processes
Shaping solid materials using force:
**Forging** - Hammering or pressing hot metal
**Rolling** - Passing metal through rollers
**Extrusion** - Pushing material through a die
**Stamping** - Pressing sheet metal into shapes
**Drawing** - Pulling material through a die

### Machining Processes
Removing material with cutting tools:
**Turning** - Rotating workpiece against cutting tool
**Milling** - Moving workpiece past rotating cutter
**Drilling** - Creating holes with rotating drills
**Grinding** - Using abrasive wheels for precision
**CNC Machining** - Computer-controlled precision machining

### Joining Processes
**Welding** - Melting materials to fuse them
**Brazing** - Using filler metal with lower melting point
**Soldering** - Similar to brazing at lower temperatures
**Adhesive Bonding** - Using glues or epoxies
**Mechanical Fastening** - Screws, bolts, rivets

### Additive Manufacturing
Building parts layer by layer:
**3D Printing** - General term for additive processes
**FDM** - Fused Deposition Modeling (plastic filament)
**SLA** - Stereolithography (liquid resin curing)
**SLS** - Selective Laser Sintering (powder fusion)
**Additive Advantages** - Complex geometries, minimal waste

### Quality Control
**Dimensional Checking** - Ensuring correct sizes
**Surface Inspection** - Checking finish quality
**Material Testing** - Verifying material properties
**Non-Destructive Testing** - Checking without damaging
**Statistical Process Control** - Monitoring production quality

### Production Systems
**Job Production** - One-off or small batches
**Batch Production** - Medium quantities in groups
**Mass Production** - Large quantities continuously
**Lean Manufacturing** - Minimizing waste
**Just-In-Time** - Producing only what's needed when needed

### Manufacturing Considerations
**Design for Manufacturing** - Designing parts that are easy to make
**Tolerances** - Allowable variations in dimensions
**Surface Finish** - Required smoothness of surfaces
**Material Selection** - Choosing materials suitable for processes
**Cost Considerations** - Balancing quality with production costs

### Modern Manufacturing Trends
**Automation** - Using machines instead of manual labor
**Robotics** - Programmable machines for various tasks
**Smart Factories** - Connected, data-driven manufacturing
**Sustainable Manufacturing** - Reducing environmental impact
**Digital Twins** - Virtual models of physical systems`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What process pours liquid material into molds?",
          options: [
            "Forging",
            "Casting",
            "Machining",
            "Welding"
          ],
          correctAnswer: 1,
          explanation: "Casting involves pouring molten material into molds where it solidifies into the desired shape."
        },
        {
          id: 2,
          question: "Which process removes material with cutting tools?",
          options: [
            "Forming",
            "Joining",
            "Machining",
            "Casting"
          ],
          correctAnswer: 2,
          explanation: "Machining processes like milling and turning remove material to achieve precise shapes."
        },
        {
          id: 3,
          question: "What is forging?",
          options: [
            "Pouring metal into molds",
            "Hammering or pressing hot metal",
            "Using glue to join parts",
            "Building parts layer by layer"
          ],
          correctAnswer: 1,
          explanation: "Forging shapes metal by applying compressive forces, usually while the metal is hot."
        },
        {
          id: 4,
          question: "Which process builds parts layer by layer?",
          options: [
            "Casting",
            "Machining",
            "Additive manufacturing",
            "Forging"
          ],
          correctAnswer: 2,
          explanation: "Additive manufacturing, including 3D printing, builds objects one layer at a time."
        },
        {
          id: 5,
          question: "What type of welding melts materials to fuse them?",
          options: [
            "Brazing",
            "Soldering",
            "Arc welding",
            "Adhesive bonding"
          ],
          correctAnswer: 2,
          explanation: "Welding involves melting the base materials to create a permanent joint."
        },
        {
          id: 6,
          question: "What does CNC stand for in machining?",
          options: [
            "Computer Numerical Control",
            "Complex Number Calculation",
            "Continuous Nodal Coordination",
            "Central Network Command"
          ],
          correctAnswer: 0,
          explanation: "CNC means Computer Numerical Control - using computers to control machine tools precisely."
        },
        {
          id: 7,
          question: "Which process uses sand molds?",
          options: [
            "Die casting",
            "Investment casting",
            "Sand casting",
            "Extrusion"
          ],
          correctAnswer: 2,
          explanation: "Sand casting uses molds made from packed sand to form metal parts."
        },
        {
          id: 8,
          question: "What is extrusion?",
          options: [
            "Cutting material away",
            "Pushing material through a die",
            "Melting and pouring",
            "Hammering into shape"
          ],
          correctAnswer: 1,
          explanation: "Extrusion forces material through a shaped opening (die) to create long products with consistent cross-sections."
        },
        {
          id: 9,
          question: "Which joining method uses screws or bolts?",
          options: [
            "Welding",
            "Brazing",
            "Mechanical fastening",
            "Adhesive bonding"
          ],
          correctAnswer: 2,
          explanation: "Mechanical fastening uses physical devices like screws, bolts, or rivets to hold parts together."
        },
        {
          id: 10,
          question: "What checks quality without damaging parts?",
          options: [
            "Destructive testing",
            "Non-destructive testing",
            "Complete destruction testing",
            "Partial damage testing"
          ],
          correctAnswer: 1,
          explanation: "Non-destructive testing methods like ultrasound or X-ray inspection check quality without harming parts."
        },
        {
          id: 11,
          question: "Which manufacturing type makes one-off products?",
          options: [
            "Mass production",
            "Batch production",
            "Job production",
            "Continuous production"
          ],
          correctAnswer: 2,
          explanation: "Job production creates individual items or very small batches, often customized."
        },
        {
          id: 12,
          question: "What is turning in machining?",
          options: [
            "Moving cutter past workpiece",
            "Rotating workpiece against cutter",
            "Pushing material through die",
            "Hammering hot metal"
          ],
          correctAnswer: 1,
          explanation: "Turning rotates the workpiece while a stationary cutting tool removes material to create cylindrical parts."
        },
        {
          id: 13,
          question: "Which process uses wax patterns?",
          options: [
            "Sand casting",
            "Die casting",
            "Investment casting",
            "Forging"
          ],
          correctAnswer: 2,
          explanation: "Investment casting creates wax patterns that are coated to form molds, then melted out before casting."
        },
        {
          id: 14,
          question: "What does FDM stand for in 3D printing?",
          options: [
            "Fused Deposition Modeling",
            "Formed Digital Manufacturing",
            "Fabricated Direct Method",
            "Fast Design Modeling"
          ],
          correctAnswer: 0,
          explanation: "FDM is Fused Deposition Modeling, where plastic filament is melted and extruded layer by layer."
        },
        {
          id: 15,
          question: "What minimizes waste in manufacturing?",
          options: [
            "Lean manufacturing",
            "Mass production",
            "Job production",
            "Traditional manufacturing"
          ],
          correctAnswer: 0,
          explanation: "Lean manufacturing focuses on eliminating waste and improving efficiency throughout production."
        },
        {
          id: 16,
          question: "Which process creates holes?",
          options: [
            "Milling",
            "Turning",
            "Drilling",
            "Grinding"
          ],
          correctAnswer: 2,
          explanation: "Drilling specifically creates round holes using rotating cutting tools called drill bits."
        },
        {
          id: 17,
          question: "What are allowable variations in dimensions called?",
          options: [
            "Surface finish",
            "Tolerances",
            "Material properties",
            "Production rates"
          ],
          correctAnswer: 1,
          explanation: "Tolerances specify how much a dimension can vary from the exact specified size."
        },
        {
          id: 18,
          question: "Which process uses abrasive wheels?",
          options: [
            "Turning",
            "Milling",
            "Grinding",
            "Drilling"
          ],
          correctAnswer: 2,
          explanation: "Grinding uses rotating wheels with abrasive particles to achieve very fine surface finishes."
        },
        {
          id: 19,
          question: "What is just-in-time manufacturing?",
          options: [
            "Producing large stockpiles",
            "Making parts only when needed",
            "Working around the clock",
            "Using the fastest methods only"
          ],
          correctAnswer: 1,
          explanation: "Just-in-time manufacturing produces items only as they're needed, reducing inventory costs."
        },
        {
          id: 20,
          question: "What checks surface quality?",
          options: [
            "Dimensional checking",
            "Material testing",
            "Surface inspection",
            "Non-destructive testing"
          ],
          correctAnswer: 2,
          explanation: "Surface inspection examines the finish quality, smoothness, and appearance of manufactured parts."
        }
      ]
    },
    {
      id: 6,
      title: "Mechanical Design Principles",
      content: `# Module 6: Mechanical Design Principles

## Introduction to Mechanical Design
Mechanical design is the process of creating plans for mechanical systems and components. Good design balances function, reliability, manufacturability, and cost.

### Design Process Steps
1. **Define Requirements** - What must the design accomplish?
2. **Research** - Study existing solutions and constraints
3. **Concept Development** - Generate multiple design ideas
4. **Evaluation** - Compare concepts against requirements
5. **Detailed Design** - Create complete specifications
6. **Prototyping** - Build and test physical models
7. **Testing** - Verify performance and safety
8. **Production** - Finalize for manufacturing

### Design Considerations
**Functionality** - Does it work as intended?
**Reliability** - Will it work consistently over time?
**Manufacturability** - Can it be made efficiently?
**Cost** - Is it affordable to produce?
**Maintainability** - Can it be easily repaired?
**Safety** - Is it safe to use and maintain?
**Aesthetics** - Does it look appropriate?

### Design for Assembly
**Minimize Parts** - Fewer parts mean simpler assembly
**Standard Components** - Use readily available parts
**Self-Locating Features** - Parts align themselves
**Easy Access** - Allow tools to reach fasteners
**Modular Design** - Build from pre-assembled modules

### Material Selection in Design
**Strength Requirements** - Based on expected loads
**Environmental Conditions** - Temperature, moisture, chemicals
**Manufacturing Method** - Compatible with production process
**Cost Constraints** - Budget limitations
**Weight Considerations** - Especially for moving parts

### Tolerance and Fit
**Clearance Fit** - Parts have space between them
**Interference Fit** - Parts press together tightly
**Transition Fit** - Between clearance and interference
**Tolerance Stack-up** - Cumulative effect of multiple tolerances
**Geometric Dimensioning** - Specifying shapes and positions

### Failure Prevention
**Stress Analysis** - Calculate stresses in components
**Fatigue Consideration** - Account for repeated loading
**Wear Reduction** - Design to minimize surface damage
**Corrosion Protection** - Choose materials or coatings
**Factor of Safety** - Design stronger than minimum needed

### Standard Components
**Fasteners** - Bolts, screws, nuts, rivets
**Bearings** - Support rotating shafts
**Seals** - Prevent leakage of fluids
**Springs** - Store and release energy
**Gears** - Transmit motion and power

### Ergonomics in Design
**Human Factors** - Consider how people interact
**Controls Layout** - Place for easy operation
**Display Design** - Information presentation
**Accessibility** - Accommodate different users
**Comfort** - Reduce user fatigue

### Sustainability in Design
**Material Selection** - Choose recyclable materials
**Energy Efficiency** - Minimize energy consumption
**Longevity** - Design for long service life
**Disassembly** - Design for easy recycling
**Environmental Impact** - Consider full lifecycle

### Documentation
**Engineering Drawings** - Detailed part specifications
**Assembly Instructions** - How to put parts together
**Bill of Materials** - List of all components
**Maintenance Manuals** - How to service the design
**Specification Sheets** - Performance requirements

### Design Tools
**CAD Software** - For creating digital models
**Simulation Tools** - Testing designs virtually
**Prototyping Equipment** - For physical models
**Measurement Instruments** - For testing and verification
**Calculation Software** - For engineering calculations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in the design process?",
          options: [
            "Build a prototype",
            "Define requirements",
            "Create detailed drawings",
            "Test the design"
          ],
          correctAnswer: 1,
          explanation: "Clearly defining what the design must accomplish is the essential first step."
        },
        {
          id: 2,
          question: "Which consideration asks if it can be made efficiently?",
          options: [
            "Functionality",
            "Reliability",
            "Manufacturability",
            "Aesthetics"
          ],
          correctAnswer: 2,
          explanation: "Manufacturability considers how easily and cost-effectively a design can be produced."
        },
        {
          id: 3,
          question: "What does DFA stand for?",
          options: [
            "Digital Fabrication Analysis",
            "Design for Assembly",
            "Detailed Functional Assessment",
            "Dynamic Force Application"
          ],
          correctAnswer: 1,
          explanation: "DFA means Design for Assembly - designing products that are easy to put together."
        },
        {
          id: 4,
          question: "Which fit has space between parts?",
          options: [
            "Interference fit",
            "Clearance fit",
            "Transition fit",
            "Press fit"
          ],
          correctAnswer: 1,
          explanation: "Clearance fits allow parts to move freely relative to each other with space between them."
        },
        {
          id: 5,
          question: "What is factor of safety?",
          options: [
            "Making designs more expensive",
            "Designing stronger than minimum needed",
            "Using extra materials for decoration",
            "Making everything very large"
          ],
          correctAnswer: 1,
          explanation: "Factor of safety provides extra strength beyond calculated minimum requirements for reliability."
        },
        {
          id: 6,
          question: "What supports rotating shafts?",
          options: [
            "Fasteners",
            "Bearings",
            "Seals",
            "Springs"
          ],
          correctAnswer: 1,
          explanation: "Bearings allow smooth rotation by supporting shafts and reducing friction."
        },
        {
          id: 7,
          question: "What does ergonomics consider?",
          options: [
            "Only the cost",
            "Only the strength",
            "How people interact with designs",
            "Only manufacturing methods"
          ],
          correctAnswer: 2,
          explanation: "Ergonomics focuses on designing for human use, considering comfort, safety, and efficiency."
        },
        {
          id: 8,
          question: "Which design principle minimizes parts?",
          options: [
            "Making everything modular",
            "Using standard components",
            "Simplifying assembly",
            "Reducing part count"
          ],
          correctAnswer: 3,
          explanation: "Fewer parts generally mean simpler, faster, and less expensive assembly."
        },
        {
          id: 9,
          question: "What prevents fluid leakage?",
          options: [
            "Bearings",
            "Fasteners",
            "Seals",
            "Gears"
          ],
          correctAnswer: 2,
          explanation: "Seals create barriers to prevent liquids or gases from leaking between components."
        },
        {
          id: 10,
          question: "What is sustainable design concerned with?",
          options: [
            "Only initial cost",
            "Environmental impact and lifecycle",
            "Only appearance",
            "Only strength"
          ],
          correctAnswer: 1,
          explanation: "Sustainable design considers environmental impact, energy use, and full product lifecycle."
        },
        {
          id: 11,
          question: "Which tool creates digital models?",
          options: [
            "Prototyping equipment",
            "CAD software",
            "Measurement instruments",
            "Calculation software"
          ],
          correctAnswer: 1,
          explanation: "CAD (Computer-Aided Design) software creates precise digital models of designs."
        },
        {
          id: 12,
          question: "What is reliability in design?",
          options: [
            "How cheap something is",
            "How pretty something looks",
            "Consistent performance over time",
            "How fast something works"
          ],
          correctAnswer: 2,
          explanation: "Reliability measures how consistently a product performs its function over its lifespan."
        },
        {
          id: 13,
          question: "Which component stores and releases energy?",
          options: [
            "Bearings",
            "Fasteners",
            "Springs",
            "Seals"
          ],
          correctAnswer: 2,
          explanation: "Springs absorb, store, and release mechanical energy through elastic deformation."
        },
        {
          id: 14,
          question: "What does modular design use?",
          options: [
            "One solid piece",
            "Pre-assembled modules",
            "Only handmade parts",
            "No standard components"
          ],
          correctAnswer: 1,
          explanation: "Modular design builds products from interchangeable, pre-assembled units or modules."
        },
        {
          id: 15,
          question: "What considers repeated loading effects?",
          options: [
            "Stress analysis",
            "Fatigue consideration",
            "Wear reduction",
            "Corrosion protection"
          ],
          correctAnswer: 1,
          explanation: "Fatigue analysis considers how repeated stress cycles can cause failure over time."
        },
        {
          id: 16,
          question: "What lists all components needed?",
          options: [
            "Engineering drawings",
            "Assembly instructions",
            "Bill of materials",
            "Maintenance manuals"
          ],
          correctAnswer: 2,
          explanation: "A bill of materials (BOM) lists every part, material, and component needed to build a product."
        },
        {
          id: 17,
          question: "What makes parts align themselves during assembly?",
          options: [
            "Complex instructions",
            "Self-locating features",
            "Extra workers",
            "Special tools only"
          ],
          correctAnswer: 1,
          explanation: "Self-locating features like pins, tabs, or chamfers help parts align correctly during assembly."
        },
        {
          id: 18,
          question: "Which design aspect reduces user fatigue?",
          options: [
            "Cost reduction",
            "Aesthetics",
            "Comfort",
            "Manufacturability"
          ],
          correctAnswer: 2,
          explanation: "Comfort considerations in ergonomic design help reduce physical strain and fatigue for users."
        },
        {
          id: 19,
          question: "What specifies shapes and positions precisely?",
          options: [
            "Basic dimensions",
            "Geometric dimensioning",
            "Rough sketches",
            "Verbal descriptions"
          ],
          correctAnswer: 1,
          explanation: "Geometric dimensioning and tolerancing (GD&T) precisely specifies form, orientation, and location."
        },
        {
          id: 20,
          question: "What is maintenance manual used for?",
          options: [
            "Initial assembly only",
            "How to service and repair",
            "Marketing the product",
            "Initial design concepts"
          ],
          correctAnswer: 1,
          explanation: "Maintenance manuals provide instructions for servicing, repairing, and maintaining products."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "mech-eng-cert-exam",
    title: "Mechanical Engineering Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score at least 70% to pass.",
    passingScore: 70,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        module: 1,
        question: "What is the main focus of mechanical engineering?",
        options: [
          "Designing chemical processes",
          "Creating electrical circuits",
          "Designing and analyzing mechanical systems",
          "Studying biological systems"
        ],
        correctAnswer: 2,
        explanation: "Mechanical engineering deals with mechanical systems - their design, analysis, manufacturing, and maintenance."
      },
      {
        id: 2,
        module: 1,
        question: "Which is the first step in the engineering design process?",
        options: [
          "Build a prototype",
          "Identify the problem or need",
          "Test the design",
          "Create detailed drawings"
        ],
        correctAnswer: 1,
        explanation: "All engineering starts with understanding what problem needs to be solved or what need must be met."
      },
      // Module 2 Questions
      {
        id: 3,
        module: 2,
        question: "What type of force squeezes materials together?",
        options: [
          "Tension",
          "Compression",
          "Shear",
          "Torsion"
        ],
        correctAnswer: 1,
        explanation: "Compression forces push materials together, like a column supporting weight."
      },
      {
        id: 4,
        module: 2,
        question: "What measures force per unit area?",
        options: [
          "Strain",
          "Stress",
          "Hardness",
          "Ductility"
        ],
        correctAnswer: 1,
        explanation: "Stress calculates how much force is applied to a specific area of material."
      },
      // Module 3 Questions
      {
        id: 5,
        module: 3,
        question: "Which law states objects in motion stay in motion?",
        options: [
          "Newton's Second Law",
          "Newton's Third Law",
          "Newton's First Law",
          "Law of Conservation of Energy"
        ],
        correctAnswer: 2,
        explanation: "Newton's First Law describes inertia - objects resist changes to their motion."
      },
      {
        id: 6,
        module: 3,
        question: "What simple machine is a rigid bar that pivots?",
        options: [
          "Pulley",
          "Wheel and Axle",
          "Lever",
          "Screw"
        ],
        correctAnswer: 2,
        explanation: "Levers use a rigid bar rotating around a fulcrum to multiply force."
      },
      // Module 4 Questions
      {
        id: 7,
        module: 4,
        question: "Which law says energy cannot be created or destroyed?",
        options: [
          "First Law of Thermodynamics",
          "Second Law of Thermodynamics",
          "Third Law of Thermodynamics",
          "Zeroth Law of Thermodynamics"
        ],
        correctAnswer: 0,
        explanation: "The First Law is the conservation of energy principle."
      },
      {
        id: 8,
        module: 4,
        question: "How does heat transfer through direct contact?",
        options: [
          "Convection",
          "Radiation",
          "Conduction",
          "Insulation"
        ],
        correctAnswer: 2,
        explanation: "Conduction occurs when heat moves through materials or between touching objects."
      },
      // Module 5 Questions
      {
        id: 9,
        module: 5,
        question: "What process pours liquid material into molds?",
        options: [
          "Forging",
          "Casting",
          "Machining",
          "Welding"
        ],
        correctAnswer: 1,
        explanation: "Casting involves pouring molten material into molds where it solidifies."
      },
      {
        id: 10,
        module: 5,
        question: "Which manufacturing type builds parts layer by layer?",
        options: [
          "Casting",
          "Machining",
          "Additive manufacturing",
          "Forging"
        ],
        correctAnswer: 2,
        explanation: "Additive manufacturing, including 3D printing, builds objects one layer at a time."
      },
      // Module 6 Questions
      {
        id: 11,
        module: 6,
        question: "What is the first design process step?",
        options: [
          "Build prototype",
          "Define requirements",
          "Create drawings",
          "Test design"
        ],
        correctAnswer: 1,
        explanation: "Clearly defining requirements is the essential first step in any design process."
      },
      {
        id: 12,
        module: 6,
        question: "What does DFA stand for?",
        options: [
          "Digital Fabrication Analysis",
          "Design for Assembly",
          "Detailed Functional Assessment",
          "Dynamic Force Application"
        ],
        correctAnswer: 1,
        explanation: "DFA means Design for Assembly - designing products that are easy to put together."
      },
      // Additional mixed questions from all modules
      {
        id: 13,
        module: 2,
        question: "Which material property describes stretching without breaking?",
        options: [
          "Brittleness",
          "Ductility",
          "Hardness",
          "Stiffness"
        ],
        correctAnswer: 1,
        explanation: "Ductile materials can stretch significantly before breaking."
      },
      {
        id: 14,
        module: 3,
        question: "What is mechanical advantage?",
        options: [
          "How expensive a machine is",
          "How much a machine multiplies force",
          "How fast a machine operates",
          "How large a machine is"
        ],
        correctAnswer: 1,
        explanation: "Mechanical advantage measures force multiplication in machines."
      },
      {
        id: 15,
        module: 4,
        question: "What do heat engines convert into work?",
        options: [
          "Electrical energy",
          "Chemical energy",
          "Heat energy",
          "Nuclear energy"
        ],
        correctAnswer: 2,
        explanation: "Heat engines convert thermal energy (heat) into mechanical work."
      },
      {
        id: 16,
        module: 5,
        question: "What does CNC stand for?",
        options: [
          "Computer Numerical Control",
          "Complex Number Calculation",
          "Continuous Nodal Coordination",
          "Central Network Command"
        ],
        correctAnswer: 0,
        explanation: "CNC means Computer Numerical Control of machine tools."
      },
      {
        id: 17,
        module: 6,
        question: "Which fit has space between parts?",
        options: [
          "Interference fit",
          "Clearance fit",
          "Transition fit",
          "Press fit"
        ],
        correctAnswer: 1,
        explanation: "Clearance fits allow movement between parts."
      },
      {
        id: 18,
        module: 1,
        question: "What does CAD software help create?",
        options: [
          "Marketing plans",
          "Precise engineering drawings",
          "Financial reports",
          "Training videos"
        ],
        correctAnswer: 1,
        explanation: "CAD creates precise technical drawings and 3D models for engineering."
      },
      {
        id: 19,
        module: 2,
        question: "What is strain?",
        options: [
          "Force applied to material",
          "Material deformation under stress",
          "Material breaking point",
          "Safety factor calculation"
        ],
        correctAnswer: 1,
        explanation: "Strain measures deformation when stress is applied."
      },
      {
        id: 20,
        module: 3,
        question: "Which motion type involves spinning?",
        options: [
          "Linear Motion",
          "Rotational Motion",
          "Oscillatory Motion",
          "Reciprocating Motion"
        ],
        correctAnswer: 1,
        explanation: "Rotational motion involves spinning around an axis."
      },
      {
        id: 21,
        module: 4,
        question: "What is temperature?",
        options: [
          "Heat content",
          "Measure of hotness/coldness",
          "Thermal energy",
          "Specific heat"
        ],
        correctAnswer: 1,
        explanation: "Temperature measures average kinetic energy of particles."
      },
      {
        id: 22,
        module: 5,
        question: "What process shapes hot metal with force?",
        options: [
          "Casting",
          "Machining",
          "Forging",
          "3D printing"
        ],
        correctAnswer: 2,
        explanation: "Forging shapes hot metal using compressive forces."
      },
      {
        id: 23,
        module: 6,
        question: "What is factor of safety?",
        options: [
          "Extra decoration",
          "Designing stronger than minimum",
          "Using cheapest materials",
          "Making everything large"
        ],
        correctAnswer: 1,
        explanation: "Factor of safety provides extra strength beyond calculated minimums."
      },
      {
        id: 24,
        module: 1,
        question: "What area studies materials and properties?",
        options: [
          "Thermodynamics",
          "Mechanics",
          "Materials Science",
          "Manufacturing"
        ],
        correctAnswer: 2,
        explanation: "Materials science examines material properties and behaviors."
      },
      {
        id: 25,
        module: 2,
        question: "What type of load involves repeated forces?",
        options: [
          "Static Load",
          "Impact Load",
          "Cyclic Load",
          "Dynamic Load"
        ],
        correctAnswer: 2,
        explanation: "Cyclic loads repeat and can cause fatigue failure."
      },
      {
        id: 26,
        module: 3,
        question: "What simple machine uses a wheel with rope?",
        options: [
          "Lever",
          "Inclined Plane",
          "Pulley",
          "Wedge"
        ],
        correctAnswer: 2,
        explanation: "Pulleys use wheels with ropes to lift loads."
      },
      {
        id: 27,
        module: 4,
        question: "Which law says heat flows hot to cold?",
        options: [
          "First Law",
          "Second Law",
          "Third Law",
          "Zeroth Law"
        ],
        correctAnswer: 1,
        explanation: "Second Law describes natural heat flow direction."
      },
      {
        id: 28,
        module: 5,
        question: "What checks quality without damage?",
        options: [
          "Destructive testing",
          "Non-destructive testing",
          "Complete testing",
          "Partial testing"
        ],
        correctAnswer: 1,
        explanation: "Non-destructive testing checks quality without harming parts."
      },
      {
        id: 29,
        module: 6,
        question: "What supports rotating shafts?",
        options: [
          "Fasteners",
          "Bearings",
          "Seals",
          "Springs"
        ],
        correctAnswer: 1,
        explanation: "Bearings support shafts and reduce friction."
      },
      {
        id: 30,
        module: 1,
        question: "Why is safety important in design?",
        options: [
          "To make things pretty",
          "To protect users and operators",
          "To reduce costs only",
          "To work faster"
        ],
        correctAnswer: 1,
        explanation: "Safety protects people who use, maintain, or are near mechanical systems."
      },
      {
        id: 31,
        module: 2,
        question: "Which force causes twisting?",
        options: [
          "Compression",
          "Tension",
          "Torsion",
          "Shear"
        ],
        correctAnswer: 2,
        explanation: "Torsion forces create twisting motion."
      },
      {
        id: 32,
        module: 3,
        question: "What is velocity?",
        options: [
          "Speed only",
          "Speed with direction",
          "Force applied",
          "Mass times speed"
        ],
        correctAnswer: 1,
        explanation: "Velocity includes both speed and direction of motion."
      },
      {
        id: 33,
        module: 4,
        question: "What do refrigerators move?",
        options: [
          "Electricity",
          "Sound",
          "Light",
          "Heat"
        ],
        correctAnswer: 3,
        explanation: "Refrigerators move heat from inside to outside."
      },
      {
        id: 34,
        module: 5,
        question: "What manufacturing minimizes waste?",
        options: [
          "Lean manufacturing",
          "Mass production",
          "Job production",
          "Traditional"
        ],
        correctAnswer: 0,
        explanation: "Lean manufacturing focuses on eliminating waste."
      },
      {
        id: 35,
        module: 6,
        question: "What does ergonomics consider?",
        options: [
          "Only cost",
          "Human interaction",
          "Only strength",
          "Only manufacturing"
        ],
        correctAnswer: 1,
        explanation: "Ergonomics designs for human use and comfort."
      },
      {
        id: 36,
        module: 1,
        question: "What is energy?",
        options: [
          "How fast something moves",
          "Ability to do work",
          "Weight of object",
          "Temperature"
        ],
        correctAnswer: 1,
        explanation: "Energy is capacity to do work or cause change."
      },
      {
        id: 37,
        module: 2,
        question: "Which material is lightweight and moldable?",
        options: [
          "Steel",
          "Ceramics",
          "Plastics",
          "Concrete"
        ],
        correctAnswer: 2,
        explanation: "Plastics are lightweight and can be molded."
      },
      {
        id: 38,
        module: 3,
        question: "Which law is F=ma?",
        options: [
          "First Law",
          "Second Law",
          "Third Law",
          "No Law"
        ],
        correctAnswer: 1,
        explanation: "Newton's Second Law: Force = mass × acceleration."
      },
      {
        id: 39,
        module: 4,
        question: "What expands when heated?",
        options: [
          "Most materials",
          "Only metals",
          "Only liquids",
          "Nothing"
        ],
        correctAnswer: 0,
        explanation: "Thermal expansion affects most materials when heated."
      },
      {
        id: 40,
        module: 5,
        question: "What is turning in machining?",
        options: [
          "Moving cutter past workpiece",
          "Rotating workpiece against cutter",
          "Pushing through die",
          "Hammering"
        ],
        correctAnswer: 1,
        explanation: "Turning rotates workpiece while stationary tool cuts."
      }
    ]
  }
};

export default mechanicalEngineeringCertificate;
