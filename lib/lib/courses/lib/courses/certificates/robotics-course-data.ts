This makes the robot go straight for 5 seconds!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do actuators do for robots?",
          options: ["Make robots move and do work", "Help robots think", "Give robots power", "Make robots sense things"],
          correctAnswer: 0,
          explanation: "Actuators are the parts that create movement and physical action in robots."
        },
        {
          id: 2,
          question: "What is the most common type of robot actuator?",
          options: ["Electric motors", "Springs", "Rubber bands", "Wind-up keys"],
          correctAnswer: 0,
          explanation: "Electric motors are the most widely used actuators in robotics."
        },
        {
          id: 3,
          question: "What are servo motors good for?",
          options: ["Precise position control", "Very fast spinning", "Making loud noises", "Changing colors"],
          correctAnswer: 0,
          explanation: "Servo motors can move to and hold specific positions accurately."
        },
        {
          id: 4,
          question: "What type of robot uses wheels?",
          options: ["Wheeled robots", "Flying robots", "Swimming robots", "Digging robots"],
          correctAnswer: 0,
          explanation: "Wheeled robots are the most common and use wheels for movement."
        },
        {
          id: 5,
          question: "What do tracked robots use for movement?",
          options: ["Tracks like tanks", "Wings", "Fins", "Springs"],
          correctAnswer: 0,
          explanation: "Tracked robots use continuous tracks, similar to tanks or bulldozers."
        },
        {
          id: 6,
          question: "What are stepper motors good for?",
          options: ["Very accurate positioning", "Very high speed", "Very loud operation", "Very colorful display"],
          correctAnswer: 0,
          explanation: "Stepper motors move in precise steps, allowing accurate positioning."
        },
        {
          id: 7,
          question: "What do linear actuators do?",
          options: ["Move in straight lines", "Spin in circles", "Change temperature", "Make sounds"],
          correctAnswer: 0,
          explanation: "Linear actuators create pushing and pulling motions in straight lines."
        },
        {
          id: 8,
          question: "Why might a robot use tracks instead of wheels?",
          options: ["For rough or uneven ground", "To go faster", "To use less battery", "To be quieter"],
          correctAnswer: 0,
          explanation: "Tracks work better on rough, soft, or uneven surfaces than wheels."
        },
        {
          id: 9,
          question: "What control makes robots turn?",
          options: ["Making wheels spin at different speeds", "Making wheels spin same speed", "Turning off all motors", "Reversing battery"],
          correctAnswer: 0,
          explanation: "Turning happens when left and right wheels spin at different speeds."
        },
        {
          id: 10,
          question: "What would 'Set motor speed = 100' do?",
          options: ["Make motor go at full speed", "Make motor stop", "Make motor go backward", "Make motor get hot"],
          correctAnswer: 0,
          explanation: "Setting speed to 100 typically means maximum or full speed."
        },
        {
          id: 11,
          question: "What type of robot can go on uneven ground?",
          options: ["Walking robots", "Wheeled robots", "Swimming robots", "Flying robots"],
          correctAnswer: 0,
          explanation: "Walking robots with legs can handle uneven terrain better than wheeled ones."
        },
        {
          id: 12,
          question: "What do servo motors often control in robots?",
          options: ["Robot arms and steering", "Battery charging", "Sensor reading", "Program storage"],
          correctAnswer: 0,
          explanation: "Servo motors are commonly used for precise arm movements and steering."
        },
        {
          id: 13,
          question: "What happens if both wheels spin same speed?",
          options: ["Robot goes straight", "Robot turns left", "Robot turns right", "Robot spins in place"],
          correctAnswer: 0,
          explanation: "Equal wheel speeds make the robot move straight forward or backward."
        },
        {
          id: 14,
          question: "Where might linear actuators be used?",
          options: ["In lifting mechanisms", "In spinning wheels", "In making sounds", "In displaying lights"],
          correctAnswer: 0,
          explanation: "Linear actuators are good for lifting, extending, or pushing motions."
        },
        {
          id: 15,
          question: "What makes walking robots more complex?",
          options: ["They need coordination of multiple legs", "They need brighter lights", "They need louder speakers", "They need bigger batteries"],
          correctAnswer: 0,
          explanation: "Walking robots require complex programming to coordinate multiple legs."
        },
        {
          id: 16,
          question: "What does 'Wait 5 seconds' do in a program?",
          options: ["Pauses the program for 5 seconds", "Speeds up for 5 seconds", "Reverses direction for 5 seconds", "Changes color for 5 seconds"],
          correctAnswer: 0,
          explanation: "Wait commands pause program execution for a specified time."
        },
        {
          id: 17,
          question: "What type of motor moves in small steps?",
          options: ["Stepper motor", "Servo motor", "DC motor", "AC motor"],
          correctAnswer: 0,
          explanation: "Stepper motors move in discrete, precise steps rather than continuous rotation."
        },
        {
          id: 18,
          question: "Why are wheeled robots common for beginners?",
          options: ["They are easier to build and program", "They are more expensive", "They are harder to break", "They are faster"],
          correctAnswer: 0,
          explanation: "Wheeled robots are simpler to construct and program than other types."
        },
        {
          id: 19,
          question: "What controls how fast a robot goes?",
          options: ["Motor speed control", "Sensor type", "Battery color", "Controller size"],
          correctAnswer: 0,
          explanation: "The speed at which motors spin determines how fast the robot moves."
        },
        {
          id: 20,
          question: "What might a robot arm use for precise movements?",
          options: ["Servo motors", "Car engines", "Wind turbines", "Water pumps"],
          correctAnswer: 0,
          explanation: "Servo motors provide the precise position control needed for robot arms."
        }
      ]
    },
    {
      id: 5,
      title: "Building Simple Robots",
      content: `# Making Your First Robot

Building robots is easier than you think! Let's look at how to create simple robots step by step.

## Basic Robot Parts You Need

Every robot needs these basic components:

### 1. **Frame/Body**
- The robot's physical structure
- Can be made from plastic, metal, or even cardboard
- Holds all other parts together
- Determines robot shape and size

### 2. **Power Source**
- Usually batteries
- Provides electricity to all parts
- Common types: AA batteries, rechargeable packs
- Size depends on robot needs

### 3. **Controller Board**
- The robot's brain
- Examples: Arduino, Raspberry Pi, LEGO Mindstorms
- Runs the programs
- Connects to sensors and motors

### 4. **Sensors and Actuators**
- Based on what you want the robot to do
- Choose sensors that match the task
- Choose motors that provide needed movement
- Connect everything to the controller

## Simple Robot Projects to Try

### 1. **Line-Following Robot**
- Follows black lines on white surfaces
- Needs light sensors on the bottom
- Simple two-motor drive
- Great first project

### 2. **Obstacle-Avoiding Robot**
- Moves around without hitting things
- Needs distance sensors in front
- Changes direction when near obstacles
- Fun and useful

### 3. **Light-Seeking Robot**
- Moves toward light sources
- Needs light sensors facing forward
- Compares left and right light levels
- Simple but interesting behavior

## Building Steps

Follow these steps for any robot project:

1. **Plan Your Robot**
   - Decide what it should do
   - Sketch the design
   - List needed parts

2. **Build the Body**
   - Assemble the frame
   - Mount the controller
   - Attach wheels or legs

3. **Add Electronics**
   - Connect motors
   - Add sensors
   - Wire power supply

4. **Program the Behavior**
   - Write simple programs
   - Test each part
   - Adjust as needed

5. **Test and Improve**
   - See how it works
   - Fix problems
   - Make it better

## Safety Tips

- Always turn off power when building
- Be careful with small parts
- Don't short-circuit batteries
- Ask for help if unsure`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the frame or body of a robot?",
          options: ["The physical structure that holds parts", "The robot's brain", "The power source", "The wheels"],
          correctAnswer: 0,
          explanation: "The frame is the physical structure that holds all robot components together."
        },
        {
          id: 2,
          question: "What is a common power source for small robots?",
          options: ["Batteries", "Solar panels only", "Wind power", "Gasoline engines"],
          correctAnswer: 0,
          explanation: "Most small robots use batteries as their power source."
        },
        {
          id: 3,
          question: "What does a line-following robot need on its bottom?",
          options: ["Light sensors", "Distance sensors", "Sound sensors", "Temperature sensors"],
          correctAnswer: 0,
          explanation: "Line-following robots need downward-facing light sensors to see lines."
        },
        {
          id: 4,
          question: "What is the first step in building a robot?",
          options: ["Plan what it should do", "Buy expensive parts", "Start programming", "Paint it"],
          correctAnswer: 0,
          explanation: "Planning what the robot should do is the important first step."
        },
        {
          id: 5,
          question: "What does an obstacle-avoiding robot use?",
          options: ["Distance sensors", "Light sensors", "Sound sensors", "Smell sensors"],
          correctAnswer: 0,
          explanation: "Obstacle-avoiding robots use distance sensors to detect objects."
        },
        {
          id: 6,
          question: "What might a light-seeking robot do?",
          options: ["Move toward light sources", "Avoid all light", "Change color in light", "Make sounds in light"],
          correctAnswer: 0,
          explanation: "Light-seeking robots move toward brighter areas."
        },
        {
          id: 7,
          question: "What is a controller board?",
          options: ["The robot's brain", "The robot's body", "The robot's wheels", "The robot's battery"],
          correctAnswer: 0,
          explanation: "The controller board is the computer that runs the robot's programs."
        },
        {
          id: 8,
          question: "Why should you turn off power when building?",
          options: ["For safety", "To save battery", "To work faster", "To see better"],
          correctAnswer: 0,
          explanation: "Turning off power prevents electrical shocks and short circuits."
        },
        {
          id: 9,
          question: "What does sketching your design help with?",
          options: ["Planning the robot build", "Making the robot faster", "Charging the battery", "Programming the robot"],
          correctAnswer: 0,
          explanation: "Sketching helps visualize and plan the robot before building."
        },
        {
          id: 10,
          question: "What should you do after building the body?",
          options: ["Add electronics", "Throw it away", "Paint it immediately", "Show it to friends"],
          correctAnswer: 0,
          explanation: "After the frame, you add motors, sensors, and electronics."
        },
        {
          id: 11,
          question: "What can robot frames be made from?",
          options: ["Plastic, metal, or cardboard", "Only expensive materials", "Only transparent materials", "Only flexible materials"],
          correctAnswer: 0,
          explanation: "Robot frames can be made from many materials, even simple ones like cardboard."
        },
        {
          id: 12,
          question: "What is testing and improving about?",
          options: ["Making the robot work better", "Making the robot more expensive", "Making the robot heavier", "Making the robot prettier"],
          correctAnswer: 0,
          explanation: "Testing helps find problems, and improving makes the robot work better."
        },
        {
          id: 13,
          question: "What might a simple two-motor drive have?",
          options: ["Two wheels with separate motors", "Four wheels with one motor", "No wheels", "Flying capability"],
          correctAnswer: 0,
          explanation: "Simple robots often have two separately controlled wheels for movement."
        },
        {
          id: 14,
          question: "Why list needed parts before building?",
          options: ["To make sure you have everything", "To make the robot more complex", "To increase the cost", "To delay building"],
          correctAnswer: 0,
          explanation: "Listing parts ensures you have everything needed before starting."
        },
        {
          id: 15,
          question: "What does comparing left and right light levels help with?",
          options: ["Making turning decisions", "Charging batteries", "Changing colors", "Making sounds"],
          correctAnswer: 0,
          explanation: "Comparing light levels helps robots decide which way to turn toward light."
        },
        {
          id: 16,
          question: "What should you do if unsure about building?",
          options: ["Ask for help", "Give up", "Keep it secret", "Build anyway"],
          correctAnswer: 0,
          explanation: "Asking for help is smart and safe when you're not sure."
        },
        {
          id: 17,
          question: "What is mounting the controller?",
          options: ["Attaching the brain to the frame", "Programming the brain", "Charging the brain", "Painting the brain"],
          correctAnswer: 0,
          explanation: "Mounting means physically attaching the controller board to the robot frame."
        },
        {
          id: 18,
          question: "What does wiring power supply mean?",
          options: ["Connecting batteries to components", "Programming the robot", "Painting the robot", "Naming the robot"],
          correctAnswer: 0,
          explanation: "Wiring means connecting batteries to provide power to all parts."
        },
        {
          id: 19,
          question: "What is adjusting programs as needed?",
          options: ["Fixing problems in the code", "Changing battery type", "Repainting the robot", "Renaming the robot"],
          correctAnswer: 0,
          explanation: "Adjusting programs means changing code to fix issues or improve behavior."
        },
        {
          id: 20,
          question: "What might you use to hold robot parts together?",
          options: ["Screws, glue, or tape", "Only welding", "Only magic", "Only thoughts"],
          correctAnswer: 0,
          explanation: "Robot parts can be assembled using simple methods like screws, glue, or tape."
        }
      ]
    },
    {
      id: 6,
      title: "Robot Applications and Future",
      content: `# Robots in Our World

Robots are already helping us in many ways, and they'll do even more in the future!

## Current Robot Applications

### 1. **Home Robots**
- **Vacuum cleaners** that clean floors automatically
- **Lawn mowers** that cut grass by themselves
- **Window cleaners** for high buildings
- **Companion robots** for entertainment and help

### 2. **Medical Robots**
- **Surgical assistants** that help doctors operate
- **Rehabilitation robots** that help patients exercise
- **Delivery robots** that move supplies in hospitals
- **Prosthetic limbs** that replace missing arms or legs

### 3. **Industrial Robots**
- **Assembly robots** that build cars and electronics
- **Painting robots** that paint cars evenly
- **Welding robots** that join metal parts
- **Packaging robots** that prepare products for shipping

### 4. **Service Robots**
- **Restaurant robots** that serve food
- **Hotel robots** that deliver items to rooms
- **Retail robots** that check store inventory
- **Security robots** that patrol areas

## Future Robot Possibilities

What might robots do tomorrow?

### 1. **Personal Assistant Robots**
- Help elderly people live independently
- Remind about medications
- Fetch items around the house
- Provide companionship

### 2. **Educational Robots**
- Help teach children
- Make learning fun and interactive
- Provide personalized lessons
- Help with homework

### 3. **Environmental Robots**
- Clean oceans and rivers
- Plant trees automatically
- Monitor wildlife
- Fight forest fires

### 4. **Space Exploration Robots**
- Build bases on other planets
- Mine resources from asteroids
- Explore distant moons
- Search for extraterrestrial life

## Getting Involved with Robotics

You can start learning robotics today:

1. **Begin with simple projects** - Start with basic kits
2. **Learn programming** - Try visual programming first
3. **Join robotics clubs** - Learn with others
4. **Participate in competitions** - Test your skills
5. **Keep learning** - Robotics keeps advancing

## Ethical Considerations

As robots become more common:
- They should help people, not replace them
- They need to be safe around humans
- Privacy should be protected
- Everyone should benefit from robotics

The future of robotics is exciting, and you can be part of it!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a common home robot?",
          options: ["Vacuum cleaner robot", "Car manufacturing robot", "Surgical robot", "Space exploration robot"],
          correctAnswer: 0,
          explanation: "Vacuum cleaner robots are common home robots that clean floors automatically."
        },
        {
          id: 2,
          question: "How do medical robots help in surgery?",
          options: ["As assistants to doctors", "As replacements for doctors", "As cleaners after surgery", "As entertainers during surgery"],
          correctAnswer: 0,
          explanation: "Surgical robots assist doctors with precise movements during operations."
        },
        {
          id: 3,
          question: "What do industrial robots often build?",
          options: ["Cars and electronics", "Houses and buildings", "Food and drinks", "Clothes and shoes"],
          correctAnswer: 0,
          explanation: "Industrial robots commonly work in car factories and electronics assembly."
        },
        {
          id: 4,
          question: "What might future personal assistant robots do?",
          options: ["Help elderly people live independently", "Replace all human workers", "Cook gourmet meals", "Drive flying cars"],
          correctAnswer: 0,
          explanation: "Personal assistant robots could help elderly people with daily tasks."
        },
        {
          id: 5,
          question: "What could educational robots help with?",
          options: ["Making learning fun and interactive", "Replacing all teachers", "Grading papers only", "Cleaning classrooms"],
          correctAnswer: 0,
          explanation: "Educational robots can make learning more engaging through interaction."
        },
        {
          id: 6,
          question: "How might environmental robots help?",
          options: ["Clean oceans and plant trees", "Build more factories", "Increase pollution", "Cut down forests"],
          correctAnswer: 0,
          explanation: "Environmental robots could help clean and restore natural environments."
        },
        {
          id: 7,
          question: "What is a good way to start learning robotics?",
          options: ["Begin with simple projects", "Build a humanoid robot first", "Only read books", "Wait until college"],
          correctAnswer: 0,
          explanation: "Starting with simple projects helps build confidence and skills gradually."
        },
        {
          id: 8,
          question: "What should robots do ethically?",
          options: ["Help people, not replace them", "Take all human jobs", "Work 24 hours without rest", "Make decisions without humans"],
          correctAnswer: 0,
          explanation: "Robots should assist and help people rather than completely replacing human roles."
        },
        {
          id: 9,
          question: "What do service robots in hotels often do?",
          options: ["Deliver items to rooms", "Cook all the meals", "Manage the hotel finances", "Entertain guests with shows"],
          correctAnswer: 0,
          explanation: "Hotel robots commonly deliver towels, toiletries, or room service to guests."
        },
        {
          id: 10,
          question: "What might space exploration robots do?",
          options: ["Build bases on other planets", "Bring aliens to Earth", "Change other planets' weather", "Create new stars"],
          correctAnswer: 0,
          explanation: "Space robots could help establish human presence on other planets."
        },
        {
          id: 11,
          question: "What do rehabilitation robots help with?",
          options: ["Helping patients exercise", "Replacing damaged organs", "Diagnosing diseases", "Prescribing medications"],
          correctAnswer: 0,
          explanation: "Rehabilitation robots assist patients in recovering movement through exercise."
        },
        {
          id: 12,
          question: "Why join robotics clubs?",
          options: ["To learn with others", "To get free robots", "To avoid studying", "To become famous"],
          correctAnswer: 0,
          explanation: "Robotics clubs provide opportunities to learn from and with other enthusiasts."
        },
        {
          id: 13,
          question: "What do prosthetic limb robots do?",
          options: ["Replace missing arms or legs", "Make people super strong", "Change people's appearance", "Control people's thoughts"],
          correctAnswer: 0,
          explanation: "Robotic prosthetics replace lost limbs and restore some functionality."
        },
        {
          id: 14,
          question: "What should robot safety include?",
          options: ["Being safe around humans", "Being invisible", "Being very fast", "Being very cheap"],
          correctAnswer: 0,
          explanation: "Robots must be designed to operate safely when around people."
        },
        {
          id: 15,
          question: "What do packaging robots do?",
          options: ["Prepare products for shipping", "Design product packaging", "Sell products in stores", "Advertise products online"],
          correctAnswer: 0,
          explanation: "Packaging robots wrap, box, and prepare items for distribution."
        },
        {
          id: 16,
          question: "What is visual programming?",
          options: ["Programming with blocks or pictures", "Programming with thoughts", "Programming with sounds", "Programming without computers"],
          correctAnswer: 0,
          explanation: "Visual programming uses graphical blocks instead of text code, making it easier to start."
        },
        {
          id: 17,
          question: "What might retail robots check?",
          options: ["Store inventory", "Customer credit scores", "Weather forecasts", "Stock market prices"],
          correctAnswer: 0,
          explanation: "Retail robots can scan shelves to check what products are in stock."
        },
        {
          id: 18,
          question: "Why participate in robotics competitions?",
          options: ["To test your skills", "To win lots of money", "To avoid schoolwork", "To get free food"],
          correctAnswer: 0,
          explanation: "Competitions provide practical experience and test your robotics knowledge."
        },
        {
          id: 19,
          question: "What privacy consideration is important for robots?",
          options: ["Protecting personal information", "Sharing all data publicly", "Recording everything always", "Ignoring privacy concerns"],
          correctAnswer: 0,
          explanation: "Robots that collect data should protect people's privacy appropriately."
        },
        {
          id: 20,
          question: "What is exciting about robotics future?",
          options: ["New possibilities to help people", "Robots taking over the world", "Robots becoming human", "Robots replacing all animals"],
          correctAnswer: 0,
          explanation: "The future holds many positive possibilities for robots to assist humanity."
        }
      ]
    }
  ],
  
  exam: {
    title: "Robotics Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of Robotics Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three main parts of every robot?",
        options: ["Battery, Motor, Wire", "Sensors, Controller, Actuators", "Wheels, Brain, Arms", "Display, Keyboard, Speaker"],
        correctAnswer: 1,
        explanation: "All robots have sensors to sense, controllers to think, and actuators to act."
      },
      {
        id: 2,
        question: "What does the controller do in a robot?",
        options: ["It's the robot's brain", "It makes the robot move", "It senses the environment", "It provides power"],
        correctAnswer: 0,
        explanation: "The controller processes information and makes decisions, functioning as the brain."
      },
      {
        id: 3,
        question: "What type of sensor helps robots avoid walls?",
        options: ["Distance sensor", "Light sensor", "Sound sensor", "Temperature sensor"],
        correctAnswer: 0,
        explanation: "Distance sensors measure how far objects are to help avoid collisions."
      },
      {
        id: 4,
        question: "What are actuators responsible for?",
        options: ["Making robots move", "Thinking and deciding", "Sensing the environment", "Storing programs"],
        correctAnswer: 0,
        explanation: "Actuators create physical movement and actions in robots."
      },
      {
        id: 5,
        question: "What is the sense-think-act process?",
        options: ["How robots continuously operate", "How robots get painted", "How robots are manufactured", "How robots are sold"],
        correctAnswer: 0,
        explanation: "This three-step process describes how robots sense, process, and respond to their environment."
      },
      {
        id: 6,
        question: "What does programming do for robots?",
        options: ["Gives them instructions", "Builds their bodies", "Paints their surfaces", "Charges their batteries"],
        correctAnswer: 0,
        explanation: "Programming provides step-by-step instructions that tell robots what to do."
      },
      {
        id: 7,
        question: "What might a light sensor detect?",
        options: ["Dark and light areas", "Loud and quiet sounds", "Hot and cold temperatures", "Sweet and sour tastes"],
        correctAnswer: 0,
        explanation: "Light sensors detect variations in light intensity and sometimes color."
      },
      {
        id: 8,
        question: "What are servo motors good for?",
        options: ["Precise position control", "Very high speed", "Making loud noises", "Changing colors"],
        correctAnswer: 0,
        explanation: "Servo motors can move to and hold specific positions accurately."
      },
      {
        id: 9,
        question: "What do wheeled robots need to work well?",
        options: ["Relatively flat surfaces", "Water environments", "Mountain climbing", "Flying space"],
        correctAnswer: 0,
        explanation: "Wheeled robots work best on flat, smooth surfaces."
      },
      {
        id: 10,
        question: "What is the frame of a robot?",
        options: ["The physical structure holding parts", "The computer program", "The electrical power", "The wireless connection"],
        correctAnswer: 0,
        explanation: "The frame is the physical body that holds all components together."
      },
      {
        id: 11,
        question: "What does a line-following robot use?",
        options: ["Light sensors facing down", "Distance sensors facing forward", "Sound sensors all around", "Temperature sensors inside"],
        correctAnswer: 0,
        explanation: "Line-following robots use downward-facing light sensors to see lines on the ground."
      },
      {
        id: 12,
        question: "What should you do first when building a robot?",
        options: ["Plan what it should do", "Buy the most expensive parts", "Start programming immediately", "Paint it bright colors"],
        correctAnswer: 0,
        explanation: "Planning the robot's purpose and design is the essential first step."
      },
      {
        id: 13,
        question: "What is a common home robot application?",
        options: ["Vacuum cleaning", "Car manufacturing", "Heart surgery", "Space exploration"],
        correctAnswer: 0,
        explanation: "Robotic vacuum cleaners are common in homes for automatic floor cleaning."
      },
      {
        id: 14,
        question: "How do medical robots assist surgeons?",
        options: ["With precise movements", "By replacing surgeons", "By diagnosing diseases", "By prescribing medicine"],
        correctAnswer: 0,
        explanation: "Surgical robots provide steady, precise movements that assist human surgeons."
      },
      {
        id: 15,
        question: "What do IF-THEN rules help robots with?",
        options: ["Making decisions", "Moving faster", "Saving battery", "Looking nicer"],
        correctAnswer: 0,
        explanation: "IF-THEN programming constructs help robots make decisions based on conditions."
      },
      {
        id: 16,
        question: "What might an obstacle-avoiding robot use?",
        options: ["Distance sensors", "Light sensors only", "Sound sensors only", "Smell sensors"],
        correctAnswer: 0,
        explanation: "Obstacle avoidance requires sensors that can detect objects in the robot's path."
      },
      {
        id: 17,
        question: "What does turning off power during building prevent?",
        options: ["Electrical shocks", "Faster building", "Better programming", "Nicer appearance"],
        correctAnswer: 0,
        explanation: "Turning off power prevents accidental electrical shocks or short circuits."
      },
      {
        id: 18,
        question: "What could future educational robots do?",
        options: ["Make learning interactive", "Replace all teachers", "Grade papers only", "Clean schools only"],
        correctAnswer: 0,
        explanation: "Educational robots could make learning more engaging through interactive experiences."
      },
      {
        id: 19,
        question: "What should robots do ethically?",
        options: ["Help and assist people", "Replace all human workers", "Make all decisions", "Work without breaks"],
        correctAnswer: 0,
        explanation: "Robots should be designed to assist and augment human capabilities, not simply replace people."
      },
      {
        id: 20,
        question: "What is a good starting point for learning robotics?",
        options: ["Simple project kits", "Building humanoid robots", "Only theoretical study", "Waiting for college"],
        correctAnswer: 0,
        explanation: "Simple kits provide hands-on experience without overwhelming complexity."
      },
      {
        id: 21,
        question: "What do touch sensors help robots feel?",
        options: ["Physical contact", "Light levels", "Sound volumes", "Air pressure"],
        correctAnswer: 0,
        explanation: "Touch sensors detect when the robot makes physical contact with objects."
      },
      {
        id: 22,
        question: "What makes walking robots more complex than wheeled ones?",
        options: ["Leg coordination", "Battery size", "Color options", "Sound systems"],
        correctAnswer: 0,
        explanation: "Walking robots require complex programming to coordinate multiple legs for stable movement."
      },
      {
        id: 23,
        question: "What does 'Wait' command do in programming?",
        options: ["Pauses program execution", "Speeds up the robot", "Changes direction", "Makes sounds"],
        correctAnswer: 0,
        explanation: "Wait commands pause program execution for a specified time period."
      },
      {
        id: 24,
        question: "What might environmental robots help with in the future?",
        options: ["Cleaning pollution", "Creating pollution", "Ignoring environment", "Studying only space"],
        correctAnswer: 0,
        explanation: "Environmental robots could help clean and restore natural environments."
      },
      {
        id: 25,
        question: "Why join a robotics club?",
        options: ["To learn with others", "To get free robots", "To avoid homework", "To become famous"],
        correctAnswer: 0,
        explanation: "Clubs provide community support and shared learning experiences."
      },
      {
        id: 26,
        question: "What do stepper motors provide?",
        options: ["Precise step movements", "Very high speed", "Loud operation", "Color changes"],
        correctAnswer: 0,
        explanation: "Stepper motors move in discrete, precise steps for accurate positioning."
      },
      {
        id: 27,
        question: "What is visual programming?",
        options: ["Programming with blocks or icons", "Programming with thoughts", "Programming blindfolded", "Programming without computers"],
        correctAnswer: 0,
        explanation: "Visual programming uses graphical elements instead of text, making it more accessible."
      },
      {
        id: 28,
        question: "What might a light-seeking robot compare?",
        options: ["Left and right light levels", "Front and back temperatures", "Up and down sounds", "Different color paints"],
        correctAnswer: 0,
        explanation: "Light-seeking robots compare light intensity on different sides to decide direction."
      },
      {
        id: 29,
        question: "What should you do if unsure while building?",
        options: ["Ask for help", "Give up completely", "Hide the problem", "Keep it secret"],
        correctAnswer: 0,
        explanation: "Asking for help is the safe and smart approach when uncertain."
      },
      {
        id: 30,
        question: "What do prosthetic robots replace?",
        options: ["Missing limbs", "Human workers", "Pet animals", "Household appliances"],
        correctAnswer: 0,
        explanation: "Robotic prosthetics replace lost arms or legs with artificial, functional versions."
      },
      {
        id: 31,
        question: "What makes robots different from regular machines?",
        options: ["They can sense, think, and act automatically", "They are always made of metal", "They are more expensive", "They use more electricity"],
        correctAnswer: 0,
        explanation: "The ability to sense, process, and act autonomously distinguishes robots from simple machines."
      },
      {
        id: 32,
        question: "What does a microcontroller do?",
        options: ["Acts as a simple robot brain", "Provides robot power", "Makes robot move", "Senses environment"],
        correctAnswer: 0,
        explanation: "Microcontrollers are small computers that serve as basic controllers for robots."
      },
      {
        id: 33,
        question: "Where should line-following sensors be placed?",
        options: ["Facing downward", "Facing forward", "Facing upward", "Facing backward"],
        correctAnswer: 0,
        explanation: "Line-following sensors need to face down to detect lines on the ground."
      },
      {
        id: 34,
        question: "What do tracked robots handle well?",
        options: ["Rough terrain", "Smooth floors only", "Water surfaces", "Air travel"],
        correctAnswer: 0,
        explanation: "Tracked robots with continuous treads work well on uneven or soft surfaces."
      },
      {
        id: 35,
        question: "What is sketching a design helpful for?",
        options: ["Visual planning", "Making robot faster", "Programming robot", "Charging battery"],
        correctAnswer: 0,
        explanation: "Sketching helps visualize the robot design before construction begins."
      },
      {
        id: 36,
        question: "What do industrial assembly robots commonly build?",
        options: ["Automobiles", "Wooden furniture", "Concrete buildings", "Textile clothing"],
        correctAnswer: 0,
        explanation: "Industrial robots are extensively used in automotive manufacturing."
      },
      {
        id: 37,
        question: "What might space robots help establish?",
        options: ["Planetary bases", "Earth weather control", "Ocean currents", "Forest growth"],
        correctAnswer: 0,
        explanation: "Space robots could assist in building habitats on other planets or moons."
      },
      {
        id: 38,
        question: "What do rehabilitation robots assist with?",
        options: ["Physical therapy exercises", "Mental health counseling", "Financial planning", "Legal advice"],
        correctAnswer: 0,
        explanation: "Rehabilitation robots help patients recover physical movement through guided exercises."
      },
      {
        id: 39,
        question: "What should robot safety considerations include?",
        options: ["Human interaction safety", "Only robot durability", "Only appearance", "Only cost"],
        correctAnswer: 0,
        explanation: "Safety around humans is a critical consideration in robot design."
      },
      {
        id: 40,
        question: "Why is robotics an exciting field?",
        options: ["Constant innovation and new applications", "Guaranteed high salaries", "Easy work with no challenges", "Already fully developed"],
        correctAnswer: 0,
        explanation: "Robotics continues to evolve with new technologies and applications emerging regularly."
      }
    ]
  }
};

export default roboticsCertificateCourse;
