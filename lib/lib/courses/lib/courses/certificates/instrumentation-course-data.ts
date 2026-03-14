// Instrumentation (Certificate) - Complete Course Data
export const instrumentationCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "instrumentation-certificate",
  title: "Instrumentation (Certificate)",
  description: "Learn the fundamentals of measurement and control systems used in industries. This course covers basic principles, common instruments, and simple control systems for beginners.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📡",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Introduction to Instrumentation",
      completed: false,
      content: `
## Welcome to Instrumentation Fundamentals

Instrumentation is the art and science of measurement and control. Think of it as giving machines the ability to "sense" their environment and make decisions. This module introduces you to the basic ideas that make modern industries work smoothly.

### What is Instrumentation?

Instrumentation involves devices that measure physical quantities like temperature, pressure, flow, and level. These devices are the "eyes and ears" of industrial processes. Without proper instrumentation, factories, power plants, and water treatment facilities couldn't operate safely or efficiently.

**Key terms to remember:**
- **Sensor**: A device that detects changes in physical conditions
- **Transmitter**: A device that sends measurement signals to other equipment
- **Controller**: A device that makes decisions based on measurements
- **Actuator**: A device that makes physical changes based on controller commands

### Basic Measurement Principles

All instruments work on simple principles. A temperature sensor feels heat. A pressure sensor feels force. A flow meter counts how much liquid passes through. The secret is that instruments convert physical changes into signals we can understand.

**Three common signal types:**
1. **Electrical signals** (like voltage or current)
2. **Pneumatic signals** (using air pressure)
3. **Digital signals** (computer-readable codes)

### Where Instrumentation is Used

You'll find instrumentation everywhere in modern life. It controls the temperature in your refrigerator, monitors water pressure in cities, ensures car engines run properly, and even helps bake bread in factories. Every automated process you see uses instrumentation principles.

**Real-world examples:**
- Home thermostat controlling your heater
- Car speedometer showing your speed
- Supermarket scales weighing produce
- Traffic lights changing based on sensors
`,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of instrumentation?",
          options: ["To measure and control physical quantities", "To repair broken machines", "To design new buildings", "To write computer programs"],
          correctAnswer: 0,
          explanation: "Instrumentation focuses on measuring physical quantities like temperature and pressure, then using those measurements to control processes."
        },
        {
          id: 2,
          question: "Which device detects changes in physical conditions?",
          options: ["Controller", "Sensor", "Actuator", "Transmitter"],
          correctAnswer: 1,
          explanation: "A sensor is specifically designed to detect and respond to physical changes in its environment."
        },
        {
          id: 3,
          question: "What does an actuator do?",
          options: ["Sends signals to other equipment", "Makes physical changes based on commands", "Converts signals between formats", "Stores measurement data"],
          correctAnswer: 1,
          explanation: "Actuators receive commands from controllers and cause physical changes, like opening a valve or starting a motor."
        },
        {
          id: 4,
          question: "Which of these is NOT a common signal type in instrumentation?",
          options: ["Electrical signals", "Pneumatic signals", "Digital signals", "Magnetic signals"],
          correctAnswer: 3,
          explanation: "Electrical, pneumatic, and digital signals are common in instrumentation, while magnetic signals are not typically used as primary signal types."
        },
        {
          id: 5,
          question: "What converts physical changes into understandable signals?",
          options: ["Instruments", "Operators", "Computers", "Manuals"],
          correctAnswer: 0,
          explanation: "Instruments are specifically designed to convert physical changes into signals that can be read, recorded, or used for control."
        },
        {
          id: 6,
          question: "Where might you find instrumentation in daily life?",
          options: ["Only in factories", "Only in laboratories", "In home appliances and vehicles", "Only in large industrial plants"],
          correctAnswer: 2,
          explanation: "Instrumentation is everywhere - from home thermostats to car systems to supermarket equipment."
        },
        {
          id: 7,
          question: "What type of signal uses air pressure?",
          options: ["Electrical signal", "Digital signal", "Pneumatic signal", "Hydraulic signal"],
          correctAnswer: 2,
          explanation: "Pneumatic signals use compressed air to transmit information and power in control systems."
        },
        {
          id: 8,
          question: "What is the role of a transmitter?",
          options: ["To make control decisions", "To send measurement signals", "To cause physical movement", "To display readings locally"],
          correctAnswer: 1,
          explanation: "Transmitters take measurements from sensors and send them to controllers or display units."
        },
        {
          id: 9,
          question: "Which instrument might measure how fast a car is going?",
          options: ["Thermometer", "Speedometer", "Barometer", "Flow meter"],
          correctAnswer: 1,
          explanation: "A speedometer specifically measures and displays vehicle speed."
        },
        {
          id: 10,
          question: "What makes decisions based on measurements?",
          options: ["Sensor", "Transmitter", "Controller", "Actuator"],
          correctAnswer: 2,
          explanation: "Controllers receive measurements and make decisions about what actions need to be taken."
        },
        {
          id: 11,
          question: "What principle do all instruments work on?",
          options: ["Converting physical changes into signals", "Creating energy from nothing", "Predicting future measurements", "Storing physical quantities"],
          correctAnswer: 0,
          explanation: "The fundamental principle of instrumentation is converting physical quantities into readable or usable signals."
        },
        {
          id: 12,
          question: "What controls the temperature in a refrigerator?",
          options: ["A flow sensor", "A pressure gauge", "A thermostat", "A level switch"],
          correctAnswer: 2,
          explanation: "A thermostat measures temperature and controls cooling equipment to maintain desired temperature."
        },
        {
          id: 13,
          question: "Which term describes computer-readable codes in instrumentation?",
          options: ["Analog signals", "Pneumatic signals", "Digital signals", "Manual signals"],
          correctAnswer: 2,
          explanation: "Digital signals consist of binary codes that computers can process and understand."
        },
        {
          id: 14,
          question: "What does a traffic light use to change signals?",
          options: ["Timers only", "Sensors and controllers", "Manual operators", "Random generators"],
          correctAnswer: 1,
          explanation: "Modern traffic lights use sensors to detect vehicles and controllers to decide when to change signals."
        },
        {
          id: 15,
          question: "What is the simplest way to think about instrumentation?",
          options: ["Giving machines senses and decision-making", "Repairing electronic equipment", "Programming computers", "Building structures"],
          correctAnswer: 0,
          explanation: "Instrumentation gives machines the ability to sense their environment and make control decisions."
        },
        {
          id: 16,
          question: "Which device would measure water pressure in a city system?",
          options: ["Temperature sensor", "Pressure sensor", "Flow meter", "Level indicator"],
          correctAnswer: 1,
          explanation: "Pressure sensors specifically measure force per unit area in liquids and gases."
        },
        {
          id: 17,
          question: "What type of instrument might weigh produce in a supermarket?",
          options: ["Scale", "Thermometer", "Pressure gauge", "Speed sensor"],
          correctAnswer: 0,
          explanation: "Scales measure weight, which is commonly used in supermarkets for pricing produce."
        },
        {
          id: 18,
          question: "What helps bake bread consistently in factories?",
          options: ["Manual timing", "Instrumentation systems", "Random chance", "Visual inspection"],
          correctAnswer: 1,
          explanation: "Instrumentation systems control temperature, timing, and other factors for consistent baking."
        },
        {
          id: 19,
          question: "What is converted into signals we can understand?",
          options: ["Physical changes", "Thoughts", "Sounds", "Colors"],
          correctAnswer: 0,
          explanation: "Instruments convert physical changes like temperature or pressure into readable signals."
        },
        {
          id: 20,
          question: "What controls an industrial process safely?",
          options: ["Instrumentation", "Guessing", "Random adjustments", "Visual estimates"],
          correctAnswer: 0,
          explanation: "Proper instrumentation allows for safe, controlled operation of industrial processes."
        }
      ]
    },
    {
      id: 2,
      title: "Basic Measurement Instruments",
      completed: false,
      content: `
## Understanding Common Measuring Instruments

This module explores the most common instruments used in everyday applications. You'll learn how different instruments work and where they're used.

### Temperature Measurement

Temperature instruments tell us how hot or cold something is. The most basic is the thermometer, which you've probably used when you're sick. Industrial thermometers work on similar principles but are more robust.

**Common temperature instruments:**
- **Thermocouples**: Two different metals joined together that create voltage when heated
- **RTDs (Resistance Temperature Detectors**: Metal wires whose resistance changes with temperature
- **Thermistors**: Special resistors that change resistance dramatically with temperature
- **Infrared thermometers**: Measure temperature without touching the object

### Pressure Measurement

Pressure instruments measure force applied over an area. Think of a tire pressure gauge - that's a simple pressure instrument. In industry, pressure measurement keeps systems safe and efficient.

**Types of pressure instruments:**
1. **Bourdon tube gauges**: Curved tubes that straighten under pressure
2. **Diaphragm gauges**: Flexible membranes that move with pressure changes
3. **Bellows gauges**: Accordion-like elements that expand and contract
4. **Digital pressure sensors**: Electronic devices with digital readouts

### Level Measurement

Level instruments answer the question: "How full is it?" From your car's fuel gauge to industrial storage tanks, level measurement is everywhere.

**Simple level measurement methods:**
- **Sight glasses**: Transparent tubes showing liquid level directly
- **Float switches**: Floating devices that turn on/off at certain levels
- **Pressure-based level**: Measures pressure at bottom to calculate level
- **Ultrasonic level**: Uses sound waves to measure distance to liquid surface

### Flow Measurement

Flow instruments measure how much fluid (liquid or gas) is moving through a pipe. Your home water meter is a flow measurement device.

**Basic flow measurement types:**
- **Differential pressure flowmeters**: Measure pressure drop across a restriction
- **Positive displacement flowmeters**: Count fixed volumes of fluid
- **Turbine flowmeters**: Measure speed of a spinning turbine in the flow
- **Ultrasonic flowmeters**: Use sound waves to measure flow speed
`,
      quiz: [
        {
          id: 1,
          question: "What does a thermocouple create when heated?",
          options: ["Light", "Sound", "Voltage", "Magnetic field"],
          correctAnswer: 2,
          explanation: "Thermocouples generate a small voltage when heated, which can be measured to determine temperature."
        },
        {
          id: 2,
          question: "What changes in an RTD when temperature changes?",
          options: ["Color", "Size", "Resistance", "Shape"],
          correctAnswer: 2,
          explanation: "RTDs work on the principle that electrical resistance of metals changes predictably with temperature."
        },
        {
          id: 3,
          question: "Which instrument measures temperature without touching?",
          options: ["Thermistor", "RTD", "Infrared thermometer", "Thermocouple"],
          correctAnswer: 2,
          explanation: "Infrared thermometers detect thermal radiation to measure temperature from a distance."
        },
        {
          id: 4,
          question: "What type of gauge uses a curved tube that straightens?",
          options: ["Diaphragm gauge", "Bellows gauge", "Bourdon tube gauge", "Digital gauge"],
          correctAnswer: 2,
          explanation: "Bourdon tube gauges use a curved tube that tries to straighten when pressure is applied."
        },
        {
          id: 5,
          question: "What does a sight glass show directly?",
          options: ["Temperature", "Pressure", "Liquid level", "Flow rate"],
          correctAnswer: 2,
          explanation: "Sight glasses are transparent tubes or windows that allow direct visual observation of liquid level."
        },
        {
          id: 6,
          question: "What turns on/off at certain liquid levels?",
          options: ["Thermocouple", "Float switch", "Bourdon tube", "RTD"],
          correctAnswer: 1,
          explanation: "Float switches use a floating device that rises and falls with liquid level, triggering switches at set points."
        },
        {
          id: 7,
          question: "What measures pressure drop across a restriction?",
          options: ["Turbine flowmeter", "Positive displacement flowmeter", "Differential pressure flowmeter", "Ultrasonic flowmeter"],
          correctAnswer: 2,
          explanation: "Differential pressure flowmeters measure the pressure difference created by a restriction in the pipe."
        },
        {
          id: 8,
          question: "Which flowmeter counts fixed volumes of fluid?",
          options: ["Differential pressure", "Positive displacement", "Turbine", "Ultrasonic"],
          correctAnswer: 1,
          explanation: "Positive displacement flowmeters trap and count specific volumes of fluid as they pass through."
        },
        {
          id: 9,
          question: "What uses sound waves to measure flow speed?",
          options: ["Differential pressure flowmeter", "Positive displacement flowmeter", "Turbine flowmeter", "Ultrasonic flowmeter"],
          correctAnswer: 3,
          explanation: "Ultrasonic flowmeters measure the time it takes sound waves to travel with and against the flow."
        },
        {
          id: 10,
          question: "What measures force applied over an area?",
          options: ["Temperature instrument", "Pressure instrument", "Level instrument", "Flow instrument"],
          correctAnswer: 1,
          explanation: "Pressure is defined as force per unit area, so pressure instruments measure this quantity."
        },
        {
          id: 11,
          question: "Which temperature device changes resistance dramatically?",
          options: ["Thermocouple", "RTD", "Thermistor", "Infrared thermometer"],
          correctAnswer: 2,
          explanation: "Thermistors are designed to have large changes in resistance with small temperature changes."
        },
        {
          id: 12,
          question: "What type of gauge has a flexible membrane?",
          options: ["Bourdon tube", "Diaphragm", "Bellows", "Digital"],
          correctAnswer: 1,
          explanation: "Diaphragm gauges use a flexible membrane that deflects under pressure."
        },
        {
          id: 13,
          question: "What uses an accordion-like element?",
          options: ["Bourdon tube gauge", "Diaphragm gauge", "Bellows gauge", "Digital gauge"],
          correctAnswer: 2,
          explanation: "Bellows gauges use expandable accordion-like elements to measure pressure."
        },
        {
          id: 14,
          question: "What measures how full a container is?",
          options: ["Temperature measurement", "Pressure measurement", "Level measurement", "Flow measurement"],
          correctAnswer: 2,
          explanation: "Level measurement specifically determines the height or volume of material in a container."
        },
        {
          id: 15,
          question: "Which instrument might be in your car's dashboard?",
          options: ["Fuel level gauge", "Turbine flowmeter", "Bourdon tube", "Thermocouple"],
          correctAnswer: 0,
          explanation: "Fuel level gauges in cars are common examples of level measurement instruments."
        },
        {
          id: 16,
          question: "What does a turbine flowmeter measure?",
          options: ["Temperature", "Pressure", "Rotation speed", "Electrical resistance"],
          correctAnswer: 2,
          explanation: "Turbine flowmeters measure the speed at which a turbine spins in the fluid flow."
        },
        {
          id: 17,
          question: "What is a simple example of flow measurement at home?",
          options: ["Thermostat", "Water meter", "Oven thermometer", "Barometer"],
          correctAnswer: 1,
          explanation: "Home water meters measure how much water flows through your pipes, just like industrial flowmeters."
        },
        {
          id: 18,
          question: "Which pressure measurement is most like a tire gauge?",
          options: ["Industrial pressure gauge", "Level sensor", "Flow meter", "Temperature sensor"],
          correctAnswer: 0,
          explanation: "Industrial pressure gauges work on similar principles to simple tire pressure gauges."
        },
        {
          id: 19,
          question: "What measures how much fluid is moving through a pipe?",
          options: ["Temperature instrument", "Pressure instrument", "Level instrument", "Flow instrument"],
          correctAnswer: 3,
          explanation: "Flow instruments specifically measure the rate at which fluid moves through a system."
        },
        {
          id: 20,
          question: "What uses pressure at the bottom to calculate level?",
          options: ["Sight glass", "Float switch", "Pressure-based level", "Ultrasonic level"],
          correctAnswer: 2,
          explanation: "Pressure-based level measurement calculates liquid height based on pressure at the container bottom."
        }
      ]
    },
    {
      id: 3,
      title: "Control Systems Basics",
      completed: false,
      content: `
## Introduction to Control Systems

Control systems are what make instrumentation useful. They take measurements and use them to make things happen automatically. This module introduces the simple ideas behind control systems.

### What is a Control System?

A control system maintains a desired condition automatically. Think of a home heating system: You set a temperature, and the system keeps your house at that temperature by turning the heater on and off as needed.

**Basic control system components:**
1. **Sensor**: Measures the current condition
2. **Controller**: Decides what action to take
3. **Actuator**: Performs the physical action
4. **Process**: The thing being controlled

### Open Loop vs Closed Loop Control

There are two main types of control systems: open loop and closed loop.

**Open loop control** works without checking results. Like a toaster - you set the time, and it toasts for that time regardless of how dark the toast gets.

**Closed loop control** (also called feedback control) checks results and adjusts. Like a shower - you feel the water temperature and adjust the knobs until it's just right.

### Simple Control Actions

Controllers can take different types of actions based on measurements:

**On/Off Control**: The simplest type. Like a home thermostat - heater is either fully ON or fully OFF.

**Proportional Control**: Adjusts output in proportion to how far you are from the desired value. Like cruise control in a car - the farther from the set speed, the more it adjusts the throttle.

**Integral Control**: Eliminates small errors that persist over time. It looks at the history of errors.

**Derivative Control**: Anticipates future errors based on how quickly things are changing.

### Common Control System Examples

**Home Thermostat**: Measures temperature, turns heater on/off to maintain set temperature.

**Cruise Control**: Measures car speed, adjusts throttle to maintain set speed.

**Refrigerator**: Measures internal temperature, turns compressor on/off to keep food cold.

**Water Level Control**: Measures tank level, opens/closes valves to maintain proper level.
`,
      quiz: [
        {
          id: 1,
          question: "What maintains a desired condition automatically?",
          options: ["Sensor", "Control system", "Actuator", "Transmitter"],
          correctAnswer: 1,
          explanation: "A control system automatically maintains desired conditions by making adjustments based on measurements."
        },
        {
          id: 2,
          question: "Which component makes decisions in a control system?",
          options: ["Sensor", "Controller", "Actuator", "Process"],
          correctAnswer: 1,
          explanation: "The controller receives measurements and decides what actions need to be taken."
        },
        {
          id: 3,
          question: "What performs physical actions in a control system?",
          options: ["Sensor", "Controller", "Actuator", "Process"],
          correctAnswer: 2,
          explanation: "Actuators are the components that physically change something, like opening a valve or starting a motor."
        },
        {
          id: 4,
          question: "What type of control works without checking results?",
          options: ["Closed loop", "Open loop", "Feedback control", "Automatic control"],
          correctAnswer: 1,
          explanation: "Open loop control systems operate without monitoring their results or making adjustments based on outcomes."
        },
        {
          id: 5,
          question: "Which control type checks results and adjusts?",
          options: ["Open loop", "Closed loop", "Manual control", "Random control"],
          correctAnswer: 1,
          explanation: "Closed loop control systems measure results and adjust their actions to achieve desired outcomes."
        },
        {
          id: 6,
          question: "What is the simplest type of control action?",
          options: ["Proportional", "Integral", "Derivative", "On/Off"],
          correctAnswer: 3,
          explanation: "On/Off control is the simplest - devices are either completely on or completely off."
        },
        {
          id: 7,
          question: "Which control adjusts output proportionally to error?",
          options: ["On/Off", "Proportional", "Integral", "Derivative"],
          correctAnswer: 1,
          explanation: "Proportional control adjusts the output in direct proportion to how far the system is from the desired value."
        },
        {
          id: 8,
          question: "What eliminates small persistent errors over time?",
          options: ["On/Off control", "Proportional control", "Integral control", "Derivative control"],
          correctAnswer: 2,
          explanation: "Integral control looks at the accumulated error over time and makes adjustments to eliminate it."
        },
        {
          id: 9,
          question: "Which control anticipates future errors?",
          options: ["On/Off", "Proportional", "Integral", "Derivative"],
          correctAnswer: 3,
          explanation: "Derivative control looks at how quickly the error is changing and anticipates what will happen next."
        },
        {
          id: 10,
          question: "What is being controlled in a control system?",
          options: ["Sensor", "Controller", "Actuator", "Process"],
          correctAnswer: 3,
          explanation: "The process is what's being controlled - like temperature in a room or level in a tank."
        },
        {
          id: 11,
          question: "What type of control is a home thermostat?",
          options: ["Open loop", "Manual", "Closed loop", "Random"],
          correctAnswer: 2,
          explanation: "Home thermostats use closed loop control - they measure temperature and adjust heating/cooling to maintain setpoint."
        },
        {
          id: 12,
          question: "What measures current conditions in a control system?",
          options: ["Sensor", "Controller", "Actuator", "Process"],
          correctAnswer: 0,
          explanation: "Sensors are specifically designed to measure current conditions and provide this information to the controller."
        },
        {
          id: 13,
          question: "Which is an example of open loop control?",
          options: ["Home thermostat", "Cruise control", "Toaster", "Refrigerator"],
          correctAnswer: 2,
          explanation: "A toaster typically uses open loop control - it toasts for a set time regardless of how dark the toast gets."
        },
        {
          id: 14,
          question: "What type of control is cruise control in a car?",
          options: ["Open loop", "Closed loop", "Manual", "Random"],
          correctAnswer: 1,
          explanation: "Cruise control measures actual speed and adjusts throttle to maintain desired speed - classic closed loop control."
        },
        {
          id: 15,
          question: "What controls refrigerator temperature?",
          options: ["Open loop system", "Closed loop system", "Manual adjustment", "No control"],
          correctAnswer: 1,
          explanation: "Refrigerators use closed loop control to maintain consistent internal temperatures."
        },
        {
          id: 16,
          question: "What maintains proper water level in a tank?",
          options: ["Temperature control", "Pressure control", "Level control", "Flow control"],
          correctAnswer: 2,
          explanation: "Water level control systems measure tank level and adjust valves or pumps to maintain proper levels."
        },
        {
          id: 17,
          question: "Which component would open a valve?",
          options: ["Sensor", "Controller", "Actuator", "Process"],
          correctAnswer: 2,
          explanation: "Actuators perform physical actions like opening or closing valves based on controller commands."
        },
        {
          id: 18,
          question: "What type of control is either fully on or fully off?",
          options: ["Proportional", "On/Off", "Integral", "Derivative"],
          correctAnswer: 1,
          explanation: "On/Off control provides only two states: completely on or completely off."
        },
        {
          id: 19,
          question: "What looks at error history to make adjustments?",
          options: ["Proportional control", "Integral control", "Derivative control", "On/Off control"],
          correctAnswer: 1,
          explanation: "Integral control considers the accumulated error over time when making adjustments."
        },
        {
          id: 20,
          question: "What predicts errors based on rate of change?",
          options: ["Proportional control", "Integral control", "Derivative control", "On/Off control"],
          correctAnswer: 2,
          explanation: "Derivative control uses the rate at which the error is changing to anticipate future conditions."
        }
      ]
    },
    {
      id: 4,
      title: "Instrumentation Signals and Communication",
      completed: false,
      content: `
## How Instruments Talk to Each Other

Instruments need to communicate measurements and commands. This module covers how signals travel between instruments and control systems in simple terms.

### Types of Instrument Signals

Instruments use different types of signals to communicate information. The three main types are electrical, pneumatic, and digital signals.

**Electrical Signals**: These use electricity to carry information. The most common electrical signal in instrumentation is 4-20 mA (milliamps).

**Pneumatic Signals**: These use air pressure to carry information. The standard pneumatic signal is 3-15 psi (pounds per square inch).

**Digital Signals**: These use binary codes (ones and zeros) that computers understand. Digital signals are becoming more common in modern systems.

### The 4-20 mA Standard

The 4-20 mA current loop is the most common electrical signal in industrial instrumentation. Here's why it's so popular:

**Why 4-20 mA?**
- 4 mA represents the lowest measurement value (like empty tank or coldest temperature)
- 20 mA represents the highest measurement value (like full tank or hottest temperature)
- If the signal is 0 mA, you know there's a problem (broken wire or failed instrument)
- The signal can travel long distances without significant loss

### Pneumatic Signal Basics

Pneumatic signals use compressed air to transmit information. They're especially useful in hazardous areas where electrical sparks could be dangerous.

**How pneumatic signals work:**
- 3 psi air pressure might mean "valve fully closed"
- 15 psi air pressure might mean "valve fully open"
- 9 psi air pressure might mean "valve 50% open"
- Like 4-20 mA, but with air pressure instead of electricity

### Digital Communication

Modern instruments often use digital communication. This allows more information to be sent and allows two-way communication.

**Benefits of digital communication:**
- Can send multiple measurements on one wire
- Can send configuration information to instruments
- Can diagnose instrument problems remotely
- More accurate than analog signals

### Signal Conversion

Sometimes you need to convert between signal types. For example, you might need to convert a 4-20 mA signal to a 3-15 psi signal.

**Common converters:**
- **I/P converter**: Converts electrical current (I) to pneumatic pressure (P)
- **P/I converter**: Converts pneumatic pressure to electrical current
- **A/D converter**: Converts analog signals to digital
- **D/A converter**: Converts digital signals to analog
`,
      quiz: [
        {
          id: 1,
          question: "What are the three main types of instrument signals?",
          options: ["Electrical, magnetic, thermal", "Electrical, pneumatic, digital", "Pneumatic, hydraulic, mechanical", "Digital, analog, binary"],
          correctAnswer: 1,
          explanation: "The three primary signal types in instrumentation are electrical, pneumatic, and digital."
        },
        {
          id: 2,
          question: "What is the most common electrical signal in instrumentation?",
          options: ["0-10 V", "1-5 V", "4-20 mA", "0-20 mA"],
          correctAnswer: 2,
          explanation: "The 4-20 mA current loop is the most widely used electrical signal in industrial instrumentation."
        },
        {
          id: 3,
          question: "What does 4 mA typically represent?",
          options: ["Highest measurement", "Lowest measurement", "Instrument failure", "Normal operation"],
          correctAnswer: 1,
          explanation: "In a 4-20 mA system, 4 mA usually represents the lowest measurement value in the range."
        },
        {
          id: 4,
          question: "What does 0 mA indicate in a 4-20 mA system?",
          options: ["Normal operation", "Highest measurement", "Instrument failure", "Lowest measurement"],
          correctAnswer: 2,
          explanation: "0 mA in a 4-20 mA system indicates a problem like a broken wire or failed instrument."
        },
        {
          id: 5,
          question: "What is the standard pneumatic signal range?",
          options: ["0-15 psi", "3-15 psi", "4-20 psi", "0-20 psi"],
          correctAnswer: 1,
          explanation: "3-15 psi is the standard range for pneumatic instrumentation signals."
        },
        {
          id: 6,
          question: "Where are pneumatic signals especially useful?",
          options: ["Computer rooms", "Hazardous areas", "Outdoor locations", "Office buildings"],
          correctAnswer: 1,
          explanation: "Pneumatic signals are safe in hazardous areas where electrical sparks could cause explosions."
        },
        {
          id: 7,
          question: "What might 9 psi represent in a 3-15 psi system?",
          options: ["Valve fully closed", "Valve fully open", "Valve 50% open", "System failure"],
          correctAnswer: 2,
          explanation: "In a 3-15 psi system, 9 psi is typically the midpoint, representing 50% opening."
        },
        {
          id: 8,
          question: "What uses binary codes to communicate?",
          options: ["Electrical signals", "Pneumatic signals", "Digital signals", "Analog signals"],
          correctAnswer: 2,
          explanation: "Digital signals use binary codes (sequences of ones and zeros) to represent information."
        },
        {
          id: 9,
          question: "What can digital communication do that analog cannot?",
          options: ["Carry information", "Work over wires", "Send multiple measurements on one wire", "Be measured"],
          correctAnswer: 2,
          explanation: "Digital communication can multiplex multiple measurements and data types on a single communication line."
        },
        {
          id: 10,
          question: "What converts electrical current to pneumatic pressure?",
          options: ["P/I converter", "I/P converter", "A/D converter", "D/A converter"],
          correctAnswer: 1,
          explanation: "I/P converters convert electrical current (I) signals to pneumatic pressure (P) signals."
        },
        {
          id: 11,
          question: "What converts pneumatic pressure to electrical current?",
          options: ["I/P converter", "P/I converter", "A/D converter", "D/A converter"],
          correctAnswer: 1,
          explanation: "P/I converters convert pneumatic pressure signals to electrical current signals."
        },
        {
          id: 12,
          question: "What converts analog signals to digital?",
          options: ["I/P converter", "P/I converter", "A/D converter", "D/A converter"],
          correctAnswer: 2,
          explanation: "A/D (Analog to Digital) converters change continuous analog signals into discrete digital values."
        },
        {
          id: 13,
          question: "What converts digital signals to analog?",
          options: ["I/P converter", "P/I converter", "A/D converter", "D/A converter"],
          correctAnswer: 3,
          explanation: "D/A (Digital to Analog) converters change digital values back into continuous analog signals."
        },
        {
          id: 14,
          question: "Why is 4-20 mA popular for long distances?",
          options: ["It's colorful", "It doesn't lose strength easily", "It's the cheapest", "It's the newest"],
          correctAnswer: 1,
          explanation: "Current signals like 4-20 mA can travel long distances without significant signal loss or degradation."
        },
        {
          id: 15,
          question: "What might 15 psi represent in a pneumatic system?",
          options: ["Valve fully closed", "Valve fully open", "System failure", "Calibration needed"],
          correctAnswer: 1,
          explanation: "In a 3-15 psi system, 15 psi typically represents the maximum, like a valve fully open."
        },
        {
          id: 16,
          question: "What can diagnose instrument problems remotely?",
          options: ["Pneumatic systems", "Digital communication", "4-20 mA signals", "Manual inspection"],
          correctAnswer: 1,
          explanation: "Digital communication protocols often include diagnostic capabilities that can report instrument health."
        },
        {
          id: 17,
          question: "What is more accurate than analog signals?",
          options: ["Pneumatic signals", "Digital signals", "Both are equal", "Neither is accurate"],
          correctAnswer: 1,
          explanation: "Digital signals are generally more accurate as they're not subject to the same noise and degradation as analog signals."
        },
        {
          id: 18,
          question: "What uses air pressure to carry information?",
          options: ["Electrical signals", "Pneumatic signals", "Digital signals", "Hydraulic signals"],
          correctAnswer: 1,
          explanation: "Pneumatic signals specifically use compressed air pressure to transmit information."
        },
        {
          id: 19,
          question: "What might 3 psi represent in a pneumatic system?",
          options: ["Valve fully open", "Valve fully closed", "Valve 50% open", "System normal"],
          correctAnswer: 1,
          explanation: "In a 3-15 psi system, 3 psi typically represents the minimum, like a valve fully closed."
        },
        {
          id: 20,
          question: "What allows two-way communication with instruments?",
          options: ["4-20 mA signals", "Pneumatic signals", "Digital communication", "Manual adjustment"],
          correctAnswer: 2,
          explanation: "Digital communication protocols typically support two-way communication for both reading and configuring instruments."
        }
      ]
    },
    {
      id: 5,
      title: "Instrument Installation and Maintenance Basics",
      completed: false,
      content: `
## Installing and Caring for Instruments

Proper installation and basic maintenance keep instruments working accurately. This module covers simple practices for instrument care.

### Basic Installation Principles

Installing instruments correctly is crucial for accurate measurements. Here are some fundamental principles:

**Location Matters**: Install instruments where they can measure what you actually want to measure. For example, a temperature sensor should be in the fluid stream, not on the pipe surface.

**Accessibility**: Install instruments where you can reach them for calibration and maintenance. Don't hide them behind other equipment.

**Environmental Protection**: Protect instruments from harsh conditions like extreme temperatures, vibration, moisture, or corrosive chemicals.

### Common Installation Errors

Many instrument problems come from simple installation mistakes:

**Impulse Line Problems**: Small tubes connecting process to instruments can get blocked, leak, or trap air.

**Electrical Issues**: Loose connections, wrong wiring, or poor grounding can cause erratic readings.

**Mechanical Stress**: Pipes moving or vibrating can damage instruments over time.

**Environmental Damage**: Moisture, heat, or chemicals can degrade instrument performance.

### Basic Maintenance Practices

Regular maintenance keeps instruments accurate and reliable:

**Visual Inspection**: Regularly look for obvious problems like leaks, corrosion, or physical damage.

**Calibration Checks**: Compare instrument readings against known standards periodically.

**Cleaning**: Keep instruments clean from dirt, dust, or process buildup.

**Function Testing**: Test that instruments respond properly to changes in the process.

### Simple Troubleshooting

When instruments give wrong readings, follow these basic steps:

1. **Check Power**: Is the instrument getting proper power supply?
2. **Check Connections**: Are all wires and tubes connected properly?
3. **Check Environment**: Are there environmental factors affecting the instrument?
4. **Compare Readings**: Compare with other instruments or manual measurements.
5. **Check Configuration**: Are instrument settings correct?

### Safety First

Always consider safety when working with instruments:

**Lockout/Tagout**: Ensure equipment is safely isolated before working on it.

**Personal Protective Equipment**: Wear appropriate safety gear for the environment.

**Follow Procedures**: Always follow established safety procedures and manufacturer instructions.

**Know Hazards**: Understand what hazards the process materials might present.
`,
      quiz: [
        {
          id: 1,
          question: "Where should a temperature sensor be installed?",
          options: ["On the pipe surface", "In the fluid stream", "Next to the pipe", "Above the pipe"],
          correctAnswer: 1,
          explanation: "Temperature sensors should be in the fluid stream to measure the actual fluid temperature, not the pipe temperature."
        },
        {
          id: 2,
          question: "Why should instruments be accessible?",
          options: ["To look pretty", "For calibration and maintenance", "To save space", "To hide them"],
          correctAnswer: 1,
          explanation: "Instruments need to be accessible for regular calibration, maintenance, and troubleshooting."
        },
        {
          id: 3,
          question: "What should instruments be protected from?",
          options: ["Only sunlight", "Only rain", "Harsh environmental conditions", "Nothing - they're tough"],
          correctAnswer: 2,
          explanation: "Instruments should be protected from all harsh conditions like extreme temperatures, moisture, vibration, and chemicals."
        },
        {
          id: 4,
          question: "What are small tubes connecting process to instruments called?",
          options: ["Power lines", "Impulse lines", "Signal cables", "Communication links"],
          correctAnswer: 1,
          explanation: "Impulse lines are the small tubes or pipes that connect the process to measuring instruments."
        },
        {
          id: 5,
          question: "What can cause erratic readings in electrical instruments?",
          options: ["Loose connections", "Bright colors", "Being new", "Proper installation"],
          correctAnswer: 0,
          explanation: "Loose electrical connections can cause intermittent or erratic readings in instruments."
        },
        {
          id: 6,
          question: "What can damage instruments over time?",
          options: ["Proper installation", "Pipe vibration", "Clean environment", "Regular maintenance"],
          correctAnswer: 1,
          explanation: "Vibration from pipes or equipment can cause mechanical stress and damage instruments over time."
        },
        {
          id: 7,
          question: "What is the first step in basic maintenance?",
          options: ["Replace instrument", "Visual inspection", "Call manufacturer", "Ignore problem"],
          correctAnswer: 1,
          explanation: "Visual inspection is often the first step - looking for obvious problems like leaks or damage."
        },
        {
          id: 8,
          question: "What compares instrument readings against known standards?",
          options: ["Cleaning", "Calibration", "Painting", "Programming"],
          correctAnswer: 1,
          explanation: "Calibration involves comparing instrument readings against known reference standards to ensure accuracy."
        },
        {
          id: 9,
          question: "Why keep instruments clean?",
          options: ["For appearance", "To prevent dirt buildup affecting readings", "To sell them", "No reason"],
          correctAnswer: 1,
          explanation: "Dirt, dust, or process buildup can affect instrument performance and accuracy."
        },
        {
          id: 10,
          question: "What tests instrument response to process changes?",
          options: ["Visual inspection", "Function testing", "Cleaning", "Painting"],
          correctAnswer: 1,
          explanation: "Function testing involves checking that instruments respond properly to actual or simulated process changes."
        },
        {
          id: 11,
          question: "What should you check first when troubleshooting?",
          options: ["Instrument color", "Power supply", "Manufacturer's name", "Installation date"],
          correctAnswer: 1,
          explanation: "Checking power supply is often the first troubleshooting step - instruments need proper power to work."
        },
        {
          id: 12,
          question: "What should you compare instrument readings with?",
          options: ["Other instruments or manual measurements", "Guesses", "Old readings", "Nothing"],
          correctAnswer: 0,
          explanation: "Comparing with other instruments or manual measurements helps identify if a specific instrument is reading incorrectly."
        },
        {
          id: 13,
          question: "What ensures equipment is safely isolated?",
          options: ["Lockout/Tagout", "Quick look", "Assuming it's safe", "Asking a coworker"],
          correctAnswer: 0,
          explanation: "Lockout/Tagout procedures ensure equipment is safely isolated from energy sources before maintenance."
        },
        {
          id: 14,
          question: "What should you wear for safety?",
          options: ["Regular clothes", "Appropriate PPE", "Fancy clothes", "Nothing special"],
          correctAnswer: 1,
          explanation: "Personal Protective Equipment (PPE) appropriate for the environment should always be worn for safety."
        },
        {
          id: 15,
          question: "What should you always follow?",
          options: ["Your instincts", "Established safety procedures", "Random choices", "Other workers"],
          correctAnswer: 1,
          explanation: "Always follow established safety procedures and manufacturer instructions to work safely."
        },
        {
          id: 16,
          question: "What should you understand about process materials?",
          options: ["Their cost", "Their color", "Their hazards", "Their taste"],
          correctAnswer: 2,
          explanation: "Understanding the hazards of process materials is crucial for working safely with instrumentation."
        },
        {
          id: 17,
          question: "What can block impulse lines?",
          options: ["Air, dirt, or process material", "Electricity", "Light", "Sound"],
          correctAnswer: 0,
          explanation: "Impulse lines can become blocked by trapped air, dirt, or solidified process material."
        },
        {
          id: 18,
          question: "What causes mechanical stress on instruments?",
          options: ["Proper support", "Pipe movement", "Clean environment", "Regular calibration"],
          correctAnswer: 1,
          explanation: "Movement or vibration of pipes can transmit mechanical stress to instruments, potentially damaging them."
        },
        {
          id: 19,
          question: "What can degrade instrument performance?",
          options: ["Moisture, heat, or chemicals", "Proper installation", "Regular maintenance", "Good calibration"],
          correctAnswer: 0,
          explanation: "Environmental factors like moisture, extreme heat, or corrosive chemicals can degrade instrument materials and performance."
        },
        {
          id: 20,
          question: "What is part of simple troubleshooting?",
          options: ["Checking instrument configuration", "Replacing immediately", "Ignoring problems", "Guessing solutions"],
          correctAnswer: 0,
          explanation: "Checking that instrument settings and configurations are correct is an important troubleshooting step."
        }
      ]
    },
    {
      id: 6,
      title: "Simple Applications and Case Studies",
      completed: false,
      content: `
## Real-World Instrumentation Applications

This module shows how basic instrumentation principles apply in everyday situations and simple industrial applications.

### Home Applications

Your home is full of simple instrumentation systems:

**Home Heating System**: Thermostat measures temperature, turns furnace on/off to maintain comfort.

**Refrigerator**: Temperature sensor controls compressor to keep food cold.

**Water Heater**: Thermostat maintains water temperature, safety valve prevents overheating.

**Smoke Detector**: Senses smoke particles, sounds alarm when detected.

### Automotive Applications

Modern cars use many instrumentation systems:

**Engine Temperature**: Sensor monitors coolant temperature, dashboard gauge shows reading.

**Fuel Level**: Float in tank measures fuel level, gauge on dashboard displays it.

**Tire Pressure**: Sensors in wheels monitor pressure, warning light alerts if low.

**Speedometer**: Measures wheel rotation speed, converts to speed display.

### Simple Industrial Examples

**Water Tank Level Control**: Float switch turns pump on when tank is low, off when full.

**Oven Temperature Control**: Thermocouple measures temperature, controller adjusts heating elements.

**Conveyor Belt System**: Photo-eye detects packages, counts items passing by.

**Liquid Mixing System**: Flow meters measure ingredients, valves control amounts.

### Case Study: Home Aquarium

A home aquarium uses simple instrumentation:

**Temperature Control**: Heater with thermostat maintains water temperature for fish.

**Water Level**: Simple visual check or automatic top-up system.

**Filter Monitoring**: Pressure gauge might show if filter is clogged.

**Lighting Control**: Timer turns lights on/off for proper day/night cycle.

### Case Study: Garden Irrigation

An automated garden watering system:

**Soil Moisture Sensor**: Measures how dry soil is.

**Timer/Controller**: Decides when to water based on moisture or time.

**Solenoid Valves**: Open to allow water flow to sprinklers.

**Rain Sensor**: Prevents watering if it's raining.

### Basic Principles in Action

All these applications use the same basic principles:

1. **Measurement**: Something is measured (temperature, level, pressure, etc.)
2. **Decision**: Controller decides what action to take
3. **Action**: Something happens (valve opens, heater turns on, etc.)
4. **Verification**: System checks if the action had the desired effect

### Starting Simple

When learning instrumentation, start with simple applications you can understand:

- Home thermostat
- Car fuel gauge
- Refrigerator temperature control
- Simple timer-based systems

These help you understand the basic concepts before moving to more complex industrial systems.
`,
      quiz: [
        {
          id: 1,
          question: "What measures temperature in a home heating system?",
          options: ["Pressure sensor", "Thermostat", "Flow meter", "Level switch"],
          correctAnswer: 1,
          explanation: "A thermostat measures temperature and controls the heating system to maintain desired temperature."
        },
        {
          id: 2,
          question: "What keeps refrigerator food cold?",
          options: ["Temperature sensor controlling compressor", "Manual adjustment", "Constant running", "No control"],
          correctAnswer: 0,
          explanation: "Refrigerators use temperature sensors to control compressors, cycling them on/off to maintain temperature."
        },
        {
          id: 3,
          question: "What prevents water heater overheating?",
          options: ["Thermostat", "Safety valve", "Pressure gauge", "Flow meter"],
          correctAnswer: 1,
          explanation: "Safety valves on water heaters open to release pressure if temperature gets too high."
        },
        {
          id: 4,
          question: "What senses smoke particles?",
          options: ["Thermostat", "Smoke detector", "Pressure sensor", "Flow meter"],
          correctAnswer: 1,
          explanation: "Smoke detectors contain sensors that detect smoke particles in the air."
        },
        {
          id: 5,
          question: "What monitors coolant temperature in a car?",
          options: ["Fuel level sensor", "Engine temperature sensor", "Tire pressure sensor", "Speed sensor"],
          correctAnswer: 1,
          explanation: "Engine temperature sensors monitor coolant temperature to prevent overheating."
        },
        {
          id: 6,
          question: "What measures fuel level in a car?",
          options: ["Float in tank", "Pressure sensor", "Temperature sensor", "Flow meter"],
          correctAnswer: 0,
          explanation: "Most cars use a float device in the fuel tank that moves with fuel level."
        },
        {
          id: 7,
          question: "What alerts if tire pressure is low?",
          options: ["Temperature warning", "Pressure sensors and warning light", "Fuel gauge", "Speedometer"],
          correctAnswer: 1,
          explanation: "Modern cars have tire pressure monitoring systems with sensors in each wheel."
        },
        {
          id: 8,
          question: "What measures wheel rotation for speed?",
          options: ["Speedometer sensor", "Fuel sensor", "Temperature sensor", "Pressure sensor"],
          correctAnswer: 0,
          explanation: "Speedometers typically measure wheel or transmission rotation speed to calculate vehicle speed."
        },
        {
          id: 9,
          question: "What controls a water tank pump?",
          options: ["Float switch", "Temperature sensor", "Pressure gauge", "Flow meter"],
          correctAnswer: 0,
          explanation: "Float switches rise and fall with water level, turning pumps on/off at set levels."
        },
        {
          id: 10,
          question: "What measures oven temperature?",
          options: ["Thermocouple", "Pressure sensor", "Level switch", "Flow meter"],
          correctAnswer: 0,
          explanation: "Ovens typically use thermocouples or other temperature sensors to measure internal temperature."
        },
        {
          id: 11,
          question: "What detects packages on a conveyor?",
          options: ["Photo-eye", "Temperature sensor", "Pressure gauge", "Level switch"],
          correctAnswer: 0,
          explanation: "Photo-eyes use light beams to detect when objects break the beam, useful for counting or positioning."
        },
        {
          id: 12,
          question: "What measures ingredients in mixing?",
          options: ["Flow meters", "Temperature sensors", "Pressure gauges", "Level switches"],
          correctAnswer: 0,
          explanation: "Flow meters measure how much of each ingredient is added to a mixing process."
        },
        {
          id: 13,
          question: "What maintains aquarium temperature?",
          options: ["Heater with thermostat", "Manual adjustment", "Room temperature", "No control"],
          correctAnswer: 0,
          explanation: "Aquarium heaters with built-in thermostats maintain proper water temperature for fish."
        },
        {
          id: 14,
          question: "What shows if a filter is clogged?",
          options: ["Pressure gauge", "Temperature sensor", "Flow meter", "Level switch"],
          correctAnswer: 0,
          explanation: "Pressure gauges on filter systems show increasing pressure as filters become clogged."
        },
        {
          id: 15,
          question: "What controls garden watering?",
          options: ["Timer/controller", "Manual only", "Random chance", "Constant flow"],
          correctAnswer: 0,
          explanation: "Timer/controller units decide when to water based on time schedules or sensor inputs."
        },
        {
          id: 16,
          question: "What measures soil dryness?",
          options: ["Soil moisture sensor", "Temperature sensor", "Pressure gauge", "Flow meter"],
          correctAnswer: 0,
          explanation: "Soil moisture sensors measure how dry or wet soil is to determine watering needs."
        },
        {
          id: 17,
          question: "What opens for garden sprinklers?",
          options: ["Solenoid valves", "Manual valves", "Check valves", "Pressure valves"],
          correctAnswer: 0,
          explanation: "Solenoid valves are electrically operated valves that open to allow water to sprinklers."
        },
        {
          id: 18,
          question: "What prevents watering in rain?",
          options: ["Rain sensor", "Temperature sensor", "Pressure gauge", "Flow meter"],
          correctAnswer: 0,
          explanation: "Rain sensors detect rainfall and prevent irrigation systems from watering unnecessarily."
        },
        {
          id: 19,
          question: "What is the first step in all applications?",
          options: ["Measurement", "Action", "Decision", "Verification"],
          correctAnswer: 0,
          explanation: "All control applications start with measurement - you need to know current conditions before taking action."
        },
        {
          id: 20,
          question: "Where should you start learning instrumentation?",
          options: ["Complex industrial systems", "Simple home applications", "Advanced theory", "Computer programming"],
          correctAnswer: 1,
          explanation: "Starting with simple home applications helps understand basic concepts before tackling complex systems."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Instrumentation Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Instrumentation Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the main purpose of instrumentation?",
        options: ["To repair machines", "To measure and control physical quantities", "To design buildings", "To write software"],
        correctAnswer: 1,
        explanation: "Instrumentation focuses on measuring physical quantities and using those measurements for control."
      },
      {
        id: 2,
        question: "Which device detects physical changes?",
        options: ["Controller", "Sensor", "Actuator", "Transmitter"],
        correctAnswer: 1,
        explanation: "Sensors are specifically designed to detect and respond to physical changes."
      },
      {
        id: 3,
        question: "What does an actuator do?",
        options: ["Sends signals", "Makes physical changes", "Converts signals", "Stores data"],
        correctAnswer: 1,
        explanation: "Actuators receive commands and cause physical changes like opening valves."
      },
      {
        id: 4,
        question: "What creates voltage when heated?",
        options: ["RTD", "Thermistor", "Thermocouple", "Infrared sensor"],
        correctAnswer: 2,
        explanation: "Thermocouples generate voltage when heated due to two different metals joined together."
      },
      {
        id: 5,
        question: "What changes resistance with temperature?",
        options: ["Thermocouple", "RTD", "Infrared thermometer", "Bourdon tube"],
        correctAnswer: 1,
        explanation: "RTDs change electrical resistance predictably with temperature changes."
      },
      {
        id: 6,
        question: "What measures without touching?",
        options: ["Thermistor", "RTD", "Infrared thermometer", "Thermocouple"],
        correctAnswer: 2,
        explanation: "Infrared thermometers measure temperature from a distance using thermal radiation."
      },
      {
        id: 7,
        question: "What type of control checks results?",
        options: ["Open loop", "Closed loop", "Manual", "Random"],
        correctAnswer: 1,
        explanation: "Closed loop control measures results and adjusts to achieve desired outcomes."
      },
      {
        id: 8,
        question: "What is simplest control action?",
        options: ["Proportional", "Integral", "Derivative", "On/Off"],
        correctAnswer: 3,
        explanation: "On/Off control is simplest - devices are either completely on or off."
      },
      {
        id: 9,
        question: "What is most common electrical signal?",
        options: ["0-10 V", "1-5 V", "4-20 mA", "0-20 mA"],
        correctAnswer: 2,
        explanation: "4-20 mA current loop is the most widely used electrical signal in industry."
      },
      {
        id: 10,
        question: "What does 4 mA represent?",
        options: ["Highest value", "Lowest value", "Failure", "Normal"],
        correctAnswer: 1,
        explanation: "In 4-20 mA systems, 4 mA represents the lowest measurement value."
      },
      {
        id: 11,
        question: "What is standard pneumatic signal?",
        options: ["0-15 psi", "3-15 psi", "4-20 psi", "0-20 psi"],
        correctAnswer: 1,
        explanation: "3-15 psi is the standard range for pneumatic instrumentation signals."
      },
      {
        id: 12,
        question: "What converts current to pressure?",
        options: ["P/I converter", "I/P converter", "A/D converter", "D/A converter"],
        correctAnswer: 1,
        explanation: "I/P converters convert electrical current (I) to pneumatic pressure (P)."
      },
      {
        id: 13,
        question: "Where install temperature sensor?",
        options: ["Pipe surface", "Fluid stream", "Next to pipe", "Above pipe"],
        correctAnswer: 1,
        explanation: "Temperature sensors should be in the fluid stream to measure actual fluid temperature."
      },
      {
        id: 14,
        question: "Why keep instruments accessible?",
        options: ["Appearance", "Maintenance access", "Space saving", "Hiding"],
        correctAnswer: 1,
        explanation: "Instruments need accessibility for calibration, maintenance, and troubleshooting."
      },
      {
        id: 15,
        question: "What compares to known standards?",
        options: ["Cleaning", "Calibration", "Painting", "Programming"],
        correctAnswer: 1,
        explanation: "Calibration compares instrument readings against known reference standards."
      },
      {
        id: 16,
        question: "What tests response to changes?",
        options: ["Visual inspection", "Function testing", "Cleaning", "Painting"],
        correctAnswer: 1,
        explanation: "Function testing checks that instruments respond properly to process changes."
      },
      {
        id: 17,
        question: "What checks first in troubleshooting?",
        options: ["Color", "Power supply", "Name", "Date"],
        correctAnswer: 1,
        explanation: "Checking power supply is often the first troubleshooting step."
      },
      {
        id: 18,
        question: "What ensures safe isolation?",
        options: ["Lockout/Tagout", "Quick look", "Assumption", "Asking"],
        correctAnswer: 0,
        explanation: "Lockout/Tagout procedures ensure equipment is safely isolated."
      },
      {
        id: 19,
        question: "What measures in home heating?",
        options: ["Pressure sensor", "Thermostat", "Flow meter", "Level switch"],
        correctAnswer: 1,
        explanation: "Thermostats measure temperature and control heating systems."
      },
      {
        id: 20,
        question: "What keeps refrigerator cold?",
        options: ["Temperature control", "Manual", "Constant run", "No control"],
        correctAnswer: 0,
        explanation: "Temperature sensors control compressors to maintain refrigerator temperature."
      },
      {
        id: 21,
        question: "What measures car coolant temperature?",
        options: ["Fuel sensor", "Temperature sensor", "Pressure sensor", "Speed sensor"],
        correctAnswer: 1,
        explanation: "Engine temperature sensors monitor coolant temperature."
      },
      {
        id: 22,
        question: "What measures fuel level?",
        options: ["Float", "Pressure sensor", "Temperature sensor", "Flow meter"],
        correctAnswer: 0,
        explanation: "Most cars use float devices in fuel tanks to measure level."
      },
      {
        id: 23,
        question: "What controls water tank pump?",
        options: ["Float switch", "Temperature sensor", "Pressure gauge", "Flow meter"],
        correctAnswer: 0,
        explanation: "Float switches control pumps based on water level."
      },
      {
        id: 24,
        question: "What measures oven temperature?",
        options: ["Thermocouple", "Pressure sensor", "Level switch", "Flow meter"],
        correctAnswer: 0,
        explanation: "Ovens typically use thermocouples to measure temperature."
      },
      {
        id: 25,
        question: "What detects conveyor packages?",
        options: ["Photo-eye", "Temperature sensor", "Pressure gauge", "Level switch"],
        correctAnswer: 0,
        explanation: "Photo-eyes use light beams to detect objects on conveyors."
      },
      {
        id: 26,
        question: "What maintains aquarium temperature?",
        options: ["Heater with thermostat", "Manual", "Room temp", "No control"],
        correctAnswer: 0,
        explanation: "Aquarium heaters with thermostats maintain water temperature."
      },
      {
        id: 27,
        question: "What controls garden watering?",
        options: ["Timer/controller", "Manual only", "Random", "Constant"],
        correctAnswer: 0,
        explanation: "Timer/controller units decide when to water gardens."
      },
      {
        id: 28,
        question: "What measures soil moisture?",
        options: ["Moisture sensor", "Temperature sensor", "Pressure gauge", "Flow meter"],
        correctAnswer: 0,
        explanation: "Soil moisture sensors measure how dry or wet soil is."
      },
      {
        id: 29,
        question: "What opens sprinkler valves?",
        options: ["Solenoid valves", "Manual valves", "Check valves", "Pressure valves"],
        correctAnswer: 0,
        explanation: "Solenoid valves are electrically operated valves for irrigation."
      },
      {
        id: 30,
        question: "What prevents watering in rain?",
        options: ["Rain sensor", "Temperature sensor", "Pressure gauge", "Flow meter"],
        correctAnswer: 0,
        explanation: "Rain sensors detect rainfall and prevent unnecessary watering."
      },
      {
        id: 31,
        question: "What uses air pressure signals?",
        options: ["Electrical systems", "Pneumatic systems", "Digital systems", "Hydraulic systems"],
        correctAnswer: 1,
        explanation: "Pneumatic systems use air pressure to transmit signals."
      },
      {
        id: 32,
        question: "What indicates 0 mA in 4-20 mA?",
        options: ["Normal", "High value", "Failure", "Low value"],
        correctAnswer: 2,
        explanation: "0 mA in a 4-20 mA system indicates a problem like broken wire."
      },
      {
        id: 33,
        question: "What eliminates persistent errors?",
        options: ["Proportional control", "Integral control", "Derivative control", "On/Off control"],
        correctAnswer: 1,
        explanation: "Integral control looks at accumulated error over time to eliminate it."
      },
      {
        id: 34,
        question: "What anticipates future errors?",
        options: ["Proportional", "Integral", "Derivative", "On/Off"],
        correctAnswer: 2,
        explanation: "Derivative control uses rate of error change to anticipate future errors."
      },
      {
        id: 35,
        question: "What converts analog to digital?",
        options: ["I/P converter", "P/I converter", "A/D converter", "D/A converter"],
        correctAnswer: 2,
        explanation: "A/D converters change analog signals to digital values."
      },
      {
        id: 36,
        question: "What protects from harsh conditions?",
        options: ["Nothing needed", "Proper housing", "Painting", "Labeling"],
        correctAnswer: 1,
        explanation: "Proper housing protects instruments from harsh environmental conditions."
      },
      {
        id: 37,
        question: "What checks for obvious problems?",
        options: ["Visual inspection", "Calibration", "Replacement", "Ignoring"],
        correctAnswer: 0,
        explanation: "Visual inspection looks for obvious problems like leaks or damage."
      },
      {
        id: 38,
        question: "What should you wear for safety?",
        options: ["Regular clothes", "Appropriate PPE", "Fancy clothes", "Nothing special"],
        correctAnswer: 1,
        explanation: "Always wear appropriate Personal Protective Equipment for safety."
      },
      {
        id: 39,
        question: "What is first in all applications?",
        options: ["Measurement", "Action", "Decision", "Verification"],
        correctAnswer: 0,
        explanation: "All control starts with measurement of current conditions."
      },
      {
        id: 40,
        question: "Where start learning instrumentation?",
        options: ["Complex systems", "Simple applications", "Advanced theory", "Programming"],
        correctAnswer: 1,
        explanation: "Start with simple applications to understand basic concepts first."
      }
    ]
  }
};

export default instrumentationCertificate;
