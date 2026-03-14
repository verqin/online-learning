// Telecommunications (Certificate) - Complete Course Data
// All modules, content, quizzes, and exam in one file

export const telecommunicationsCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "telecommunications-certificate",
  title: "Telecommunications (Certificate)",
  description: "Learn the fundamentals of telecommunications including basic networks, communication technologies, transmission methods, mobile systems, and emerging technologies. Perfect for beginners entering the telecommunications field.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📡",
  badge: "Certificate",
  category: "Technology & Networking",
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    // MODULE 1: INTRODUCTION TO TELECOMMUNICATIONS
    {
      id: 1,
      title: "What is Telecommunications?",
      content: `# Understanding Telecommunications

## Welcome to Telecommunications
Telecommunications is the transmission of information over distances using technology. It allows people to communicate across cities, countries, and even continents through various devices and systems.

## Basic Communication Model
All telecommunications follow this simple process:
1. **Source** - Where information originates (person, computer, device)
2. **Transmitter** - Converts information into signals
3. **Transmission Medium** - Path the signals travel through (wires, air, fiber)
4. **Receiver** - Receives and converts signals back to information
5. **Destination** - Where information arrives and is used

## Types of Telecommunications
There are several main types of communication:

**Voice Communication**
- Traditional telephone systems
- Mobile phone calls
- Voice over Internet Protocol (VoIP)
- Radio communication

**Data Communication**
- Internet connections
- Computer networks
- Text messaging
- File transfers

**Video Communication**
- Video conferencing
- Streaming services
- Television broadcasts
- Video calls

## Importance of Telecommunications
Telecommunications is essential because:
- Connects people globally for personal communication
- Enables business operations and commerce
- Supports emergency services and public safety
- Provides access to information and entertainment
- Drives economic growth and development

## Key Telecommunications Terms
- **Signal**: Information converted for transmission
- **Bandwidth**: Capacity of a communication channel
- **Network**: Connected devices that can communicate
- **Protocol**: Rules for communication between devices
- **Infrastructure**: Physical equipment and facilities

Telecommunications makes modern life possible by keeping us connected and informed.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is telecommunications?",
          options: [
            "Transmission of information over distances using technology",
            "Only face-to-face conversations",
            "Writing letters by hand",
            "Transportation of physical goods"
          ],
          correctAnswer: 0,
          explanation: "Telecommunications involves sending information electronically over distances."
        },
        {
          id: 2,
          question: "What is the source in communication?",
          options: [
            "Where information originates",
            "The transmission path",
            "The receiving device",
            "The communication rules"
          ],
          correctAnswer: 0,
          explanation: "The source creates or provides the information being communicated."
        },
        {
          id: 3,
          question: "What type of communication uses traditional telephones?",
          options: [
            "Voice communication",
            "Data communication only",
            "Video communication only",
            "Written communication"
          ],
          correctAnswer: 0,
          explanation: "Telephones are primarily for voice communication."
        },
        {
          id: 4,
          question: "What is a network in telecommunications?",
          options: [
            "Connected devices that can communicate",
            "A single computer alone",
            "Only wireless connections",
            "Physical cables only"
          ],
          correctAnswer: 0,
          explanation: "A network allows multiple devices to exchange information."
        },
        {
          id: 5,
          question: "What does bandwidth measure?",
          options: [
            "Capacity of a communication channel",
            "Length of cables",
            "Number of users",
            "Cost of service"
          ],
          correctAnswer: 0,
          explanation: "Bandwidth determines how much information can be transmitted."
        },
        {
          id: 6,
          question: "What is the transmission medium?",
          options: [
            "Path signals travel through",
            "The information source",
            "The receiving device",
            "Communication software"
          ],
          correctAnswer: 0,
          explanation: "The medium carries signals from transmitter to receiver."
        },
        {
          id: 7,
          question: "What type of communication is the Internet?",
          options: [
            "Data communication",
            "Only voice communication",
            "Only video communication",
            "Physical mail"
          ],
          correctAnswer: 0,
          explanation: "The Internet primarily carries data between computers."
        },
        {
          id: 8,
          question: "What is a protocol?",
          options: [
            "Rules for communication between devices",
            "A type of cable",
            "A wireless frequency",
            "A service provider"
          ],
          correctAnswer: 0,
          explanation: "Protocols ensure devices understand each other's communications."
        },
        {
          id: 9,
          question: "What is video communication?",
          options: [
            "Transmission of moving images",
            "Only voice calls",
            "Text messaging",
            "Email services"
          ],
          correctAnswer: 0,
          explanation: "Video communication includes visual information transmission."
        },
        {
          id: 10,
          question: "Why is telecommunications important?",
          options: [
            "Connects people globally",
            "Only for entertainment",
            "Replaces all travel",
            "Eliminates face-to-face communication"
          ],
          correctAnswer: 0,
          explanation: "Telecommunications enables global connections and information sharing."
        },
        {
          id: 11,
          question: "What is a signal?",
          options: [
            "Information converted for transmission",
            "A physical object",
            "A written document",
            "A person's voice"
          ],
          correctAnswer: 0,
          explanation: "Signals are electrical or electromagnetic representations of information."
        },
        {
          id: 12,
          question: "What type of communication is streaming?",
          options: [
            "Video communication",
            "Voice communication only",
            "Data communication only",
            "Radio communication only"
          ],
          correctAnswer: 0,
          explanation: "Streaming delivers continuous video and audio content."
        },
        {
          id: 13,
          question: "What is infrastructure?",
          options: [
            "Physical equipment and facilities",
            "Only software programs",
            "User interfaces",
            "Service plans"
          ],
          correctAnswer: 0,
          explanation: "Infrastructure includes towers, cables, and equipment needed for telecommunications."
        },
        {
          id: 14,
          question: "What is VoIP?",
          options: [
            "Voice over Internet Protocol",
            "Video over Internet Protocol",
            "Very old telephone",
            "Voice only protocol"
          ],
          correctAnswer: 0,
          explanation: "VoIP delivers voice communication over Internet networks."
        },
        {
          id: 15,
          question: "What does the receiver do?",
          options: [
            "Receives and converts signals back to information",
            "Creates information",
            "Transmits signals",
            "Stores information"
          ],
          correctAnswer: 0,
          explanation: "The receiver processes incoming signals for the destination."
        },
        {
          id: 16,
          question: "What is mobile communication?",
          options: [
            "Wireless voice and data services",
            "Only landline phones",
            "Cable television",
            "Satellite radio only"
          ],
          correctAnswer: 0,
          explanation: "Mobile communication allows wireless connectivity while moving."
        },
        {
          id: 17,
          question: "What does telecommunications enable for businesses?",
          options: [
            "Operations and commerce",
            "Only entertainment",
            "Physical transportation",
            "Manual record keeping"
          ],
          correctAnswer: 0,
          explanation: "Businesses rely on telecommunications for operations and customer service."
        },
        {
          id: 18,
          question: "What is text messaging?",
          options: [
            "Data communication of written messages",
            "Voice communication",
            "Video transmission",
            "Radio broadcasting"
          ],
          correctAnswer: 0,
          explanation: "Text messages are data packets containing written content."
        },
        {
          id: 19,
          question: "What supports emergency services?",
          options: [
            "Telecommunications systems",
            "Only physical transportation",
            "Manual communication",
            "Printed maps"
          ],
          correctAnswer: 0,
          explanation: "Emergency services depend on reliable telecommunications."
        },
        {
          id: 20,
          question: "What is the destination in communication?",
          options: [
            "Where information arrives and is used",
            "The starting point",
            "The transmission path",
            "The signal converter"
          ],
          correctAnswer: 0,
          explanation: "The destination receives and uses the communicated information."
        }
      ]
    },

    // MODULE 2: BASIC NETWORK CONCEPTS
    {
      id: 2,
      title: "Understanding Networks",
      content: `# How Networks Connect Devices

## What is a Network?
A network is a collection of devices connected together to share resources and communicate. Networks can be small (like a home network) or large (like the Internet).

## Network Types by Size

**Local Area Network (LAN)**
- Covers a small geographic area
- Examples: Home network, office network, school network
- Usually uses cables or Wi-Fi
- Fast communication within the network

**Wide Area Network (WAN)**
- Covers large geographic areas
- Examples: Internet, corporate networks across cities
- Uses various technologies including fiber optics
- Connects multiple LANs together

**Personal Area Network (PAN)**
- Very small network around a person
- Examples: Bluetooth connections, wearable devices
- Short-range communication
- Personal device connectivity

## Network Components

**Devices on Networks**
- **Computers** - Process and store information
- **Routers** - Connect different networks together
- **Switches** - Connect devices within a network
- **Modems** - Convert signals for transmission
- **Access Points** - Provide wireless connectivity

**Transmission Media**
- **Wired** - Copper cables, fiber optic cables
- **Wireless** - Radio waves, microwaves, infrared
- **Satellite** - Space-based transmission

## Network Topologies
How devices are arranged in a network:

**Star Topology**
- All devices connect to a central point
- Easy to manage and troubleshoot
- Common in home and office networks

**Bus Topology**
- All devices connect to a single cable
- Simple but less reliable
- Used in some older networks

**Ring Topology**
- Devices form a circular connection
- Data travels in one direction
- Used in some specialized networks

## Basic Network Protocols

**TCP/IP** - Foundation of Internet communication
**HTTP** - For web browsing
**SMTP** - For email sending
**FTP** - For file transfers

Networks make communication possible by connecting devices in organized ways.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a network?",
          options: [
            "Connected devices that share resources",
            "A single computer alone",
            "Only wireless connections",
            "A type of software"
          ],
          correctAnswer: 0,
          explanation: "Networks enable multiple devices to communicate and share resources."
        },
        {
          id: 2,
          question: "What does LAN stand for?",
          options: [
            "Local Area Network",
            "Large Area Network",
            "Long Area Network",
            "Limited Area Network"
          ],
          correctAnswer: 0,
          explanation: "LAN covers small areas like homes or offices."
        },
        {
          id: 3,
          question: "What connects different networks together?",
          options: [
            "Routers",
            "Computers only",
            "Cables only",
            "Software applications"
          ],
          correctAnswer: 0,
          explanation: "Routers direct traffic between different networks."
        },
        {
          id: 4,
          question: "What is a WAN?",
          options: [
            "Wide Area Network covering large areas",
            "Wireless Area Network",
            "Wired Area Network",
            "World Area Network"
          ],
          correctAnswer: 0,
          explanation: "WANs connect networks across cities or countries."
        },
        {
          id: 5,
          question: "What is star topology?",
          options: [
            "All devices connect to a central point",
            "Devices in a straight line",
            "Devices in a circle",
            "All devices connect to each other"
          ],
          correctAnswer: 0,
          explanation: "Star topology uses a central connection point for all devices."
        },
        {
          id: 6,
          question: "What is a PAN?",
          options: [
            "Personal Area Network around a person",
            "Public Area Network",
            "Professional Area Network",
            "Permanent Area Network"
          ],
          correctAnswer: 0,
          explanation: "PAN connects personal devices like phones and wearables."
        },
        {
          id: 7,
          question: "What do switches do?",
          options: [
            "Connect devices within a network",
            "Convert signals for transmission",
            "Provide wireless access",
            "Store network data"
          ],
          correctAnswer: 0,
          explanation: "Switches manage communication between devices on the same network."
        },
        {
          id: 8,
          question: "What is wired transmission media?",
          options: [
            "Physical cables like copper or fiber",
            "Radio waves only",
            "Satellite signals",
            "Infrared light"
          ],
          correctAnswer: 0,
          explanation: "Wired media uses physical cables to transmit signals."
        },
        {
          id: 9,
          question: "What does TCP/IP provide?",
          options: [
            "Foundation for Internet communication",
            "Only web browsing",
            "Only email service",
            "Only file transfers"
          ],
          correctAnswer: 0,
          explanation: "TCP/IP is the basic protocol suite for Internet communication."
        },
        {
          id: 10,
          question: "What is bus topology?",
          options: [
            "All devices connect to a single cable",
            "Star-shaped connections",
            "Circular connections",
            "Mesh connections"
          ],
          correctAnswer: 0,
          explanation: "Bus topology uses one main cable connecting all devices."
        },
        {
          id: 11,
          question: "What do modems do?",
          options: [
            "Convert signals for transmission",
            "Connect networks together",
            "Provide wireless access",
            "Store network information"
          ],
          correctAnswer: 0,
          explanation: "Modems convert digital signals to analog for transmission."
        },
        {
          id: 12,
          question: "What is wireless transmission?",
          options: [
            "Using radio waves or microwaves",
            "Only fiber optic cables",
            "Only copper wires",
            "Physical cable connections"
          ],
          correctAnswer: 0,
          explanation: "Wireless transmission uses electromagnetic waves through air."
        },
        {
          id: 13,
          question: "What is HTTP used for?",
          options: [
            "Web browsing",
            "Email sending",
            "File transfers",
            "Voice calls"
          ],
          correctAnswer: 0,
          explanation: "HTTP enables web page requests and responses."
        },
        {
          id: 14,
          question: "What is ring topology?",
          options: [
            "Devices form a circular connection",
            "Star-shaped network",
            "Linear cable connection",
            "Full mesh connection"
          ],
          correctAnswer: 0,
          explanation: "Ring topology connects devices in a closed loop."
        },
        {
          id: 15,
          question: "What do access points provide?",
          options: [
            "Wireless connectivity",
            "Network storage",
            "Signal conversion",
            "Internet routing"
          ],
          correctAnswer: 0,
          explanation: "Access points create wireless network coverage areas."
        },
        {
          id: 16,
          question: "What is satellite transmission?",
          options: [
            "Space-based communication",
            "Underground cables",
            "Fiber optic networks",
            "Local wireless"
          ],
          correctAnswer: 0,
          explanation: "Satellites relay signals between ground stations."
        },
        {
          id: 17,
          question: "What does SMTP handle?",
          options: [
            "Email sending",
            "Web browsing",
            "File transfers",
            "Voice communication"
          ],
          correctAnswer: 0,
          explanation: "SMTP manages outgoing email messages."
        },
        {
          id: 18,
          question: "What topology is common in homes?",
          options: [
            "Star topology",
            "Bus topology",
            "Ring topology",
            "Mesh topology"
          ],
          correctAnswer: 0,
          explanation: "Home networks typically use star topology with a central router."
        },
        {
          id: 19,
          question: "What is fiber optic cable?",
          options: [
            "Glass fibers transmitting light signals",
            "Copper wire for electricity",
            "Plastic coating only",
            "Wireless antenna"
          ],
          correctAnswer: 0,
          explanation: "Fiber optics use light pulses for high-speed data transmission."
        },
        {
          id: 20,
          question: "What does FTP enable?",
          options: [
            "File transfers between computers",
            "Web page viewing",
            "Email communication",
            "Video streaming"
          ],
          correctAnswer: 0,
          explanation: "FTP specifically handles file uploads and downloads."
        }
      ]
    },

    // MODULE 3: TRANSMISSION TECHNOLOGIES
    {
      id: 3,
      title: "Signal Transmission Methods",
      content: `# How Information Travels

## Understanding Signal Transmission
Signals carry information through various media using different technologies. The choice of transmission method affects speed, distance, and reliability.

## Wired Transmission Methods

**Copper Cable Transmission**
- Uses electrical signals through copper wires
- Common types: Twisted pair, coaxial cable
- Good for short to medium distances
- Used in telephone lines and Ethernet networks

**Fiber Optic Transmission**
- Uses light signals through glass fibers
- Extremely high speed and capacity
- Long distance with minimal signal loss
- Immune to electromagnetic interference

**Power Line Communication**
- Uses existing electrical wiring
- Transmits data alongside electricity
- Convenient for home networking
- Limited speed and distance

## Wireless Transmission Methods

**Radio Frequency (RF) Transmission**
- Uses radio waves through air
- Includes Wi-Fi, Bluetooth, cellular
- Different frequencies for different uses
- Affected by obstacles and interference

**Microwave Transmission**
- High-frequency radio waves
- Point-to-point communication
- Used for long-distance links
- Requires line-of-sight between antennas

**Satellite Communication**
- Signals travel to space and back
- Global coverage possible
- High latency (delay) due to distance
- Used for TV, GPS, and remote areas

**Infrared Transmission**
- Uses invisible light beams
- Very short range
- Requires direct line-of-sight
- Used in remote controls

## Signal Characteristics

**Analog vs Digital Signals**
- **Analog**: Continuous wave patterns
- **Digital**: Discrete on/off pulses
- Modern systems use digital for better quality

**Signal Strength and Quality**
- **Attenuation**: Signal weakening over distance
- **Noise**: Unwanted interference
- **Amplification**: Boosting weak signals
- **Regeneration**: Cleaning and repeating digital signals

## Transmission Speed Measures
- **Bits per second (bps)** - Basic speed unit
- **Kilobits per second (Kbps)** - Thousands of bits
- **Megabits per second (Mbps)** - Millions of bits
- **Gigabits per second (Gbps)** - Billions of bits

Choosing the right transmission method depends on distance, speed needs, and environment.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What uses electrical signals through copper?",
          options: [
            "Copper cable transmission",
            "Fiber optic transmission",
            "Satellite transmission",
            "Infrared transmission"
          ],
          correctAnswer: 0,
          explanation: "Copper cables carry electrical current representing information."
        },
        {
          id: 2,
          question: "What does fiber optic use?",
          options: [
            "Light signals through glass fibers",
            "Electrical signals through copper",
            "Radio waves through air",
            "Sound waves through air"
          ],
          correctAnswer: 0,
          explanation: "Fiber optics transmit data as pulses of light."
        },
        {
          id: 3,
          question: "What is RF transmission?",
          options: [
            "Radio Frequency wireless transmission",
            "Fiber optic transmission",
            "Copper cable transmission",
            "Power line transmission"
          ],
          correctAnswer: 0,
          explanation: "RF uses radio waves for wireless communication."
        },
        {
          id: 4,
          question: "What are analog signals?",
          options: [
            "Continuous wave patterns",
            "Discrete on/off pulses",
            "Only digital data",
            "Computer binary code"
          ],
          correctAnswer: 0,
          explanation: "Analog signals vary continuously like sound waves."
        },
        {
          id: 5,
          question: "What is microwave transmission?",
          options: [
            "High-frequency point-to-point communication",
            "Fiber optic communication",
            "Power line communication",
            "Infrared communication"
          ],
          correctAnswer: 0,
          explanation: "Microwaves provide directional wireless links."
        },
        {
          id: 6,
          question: "What are digital signals?",
          options: [
            "Discrete on/off pulses",
            "Continuous wave patterns",
            "Analog variations",
            "Sound vibrations"
          ],
          correctAnswer: 0,
          explanation: "Digital signals use binary code (0s and 1s)."
        },
        {
          id: 7,
          question: "What is power line communication?",
          options: [
            "Using electrical wiring for data",
            "Fiber optic transmission",
            "Satellite communication",
            "Microwave links"
          ],
          correctAnswer: 0,
          explanation: "Power lines can carry data signals alongside electricity."
        },
        {
          id: 8,
          question: "What does satellite communication use?",
          options: [
            "Space-based relay stations",
            "Underground cables",
            "Power lines only",
            "Fiber optics only"
          ],
          correctAnswer: 0,
          explanation: "Satellites orbit Earth to relay signals between locations."
        },
        {
          id: 9,
          question: "What is attenuation?",
          options: [
            "Signal weakening over distance",
            "Signal amplification",
            "Signal conversion",
            "Signal generation"
          ],
          correctAnswer: 0,
          explanation: "All signals lose strength as they travel through media."
        },
        {
          id: 10,
          question: "What is infrared transmission?",
          options: [
            "Short-range light beam communication",
            "Long-distance radio communication",
            "Fiber optic transmission",
            "Satellite communication"
          ],
          correctAnswer: 0,
          explanation: "Infrared uses invisible light for close-range communication."
        },
        {
          id: 11,
          question: "What measures transmission speed?",
          options: [
            "Bits per second",
            "Meters per second",
            "Volts per second",
            "Watts per second"
          ],
          correctAnswer: 0,
          explanation: "Bits per second quantifies data transmission rate."
        },
        {
          id: 12,
          question: "What is noise in signals?",
          options: [
            "Unwanted interference",
            "Signal strength",
            "Transmission speed",
            "Signal frequency"
          ],
          correctAnswer: 0,
          explanation: "Noise disrupts signal quality and accuracy."
        },
        {
          id: 13,
          question: "What requires line-of-sight?",
          options: [
            "Microwave and infrared transmission",
            "Fiber optic transmission",
            "Copper cable transmission",
            "Power line communication"
          ],
          correctAnswer: 0,
          explanation: "Some wireless technologies need clear paths between devices."
        },
        {
          id: 14,
          question: "What is amplification?",
          options: [
            "Boosting weak signals",
            "Converting signal types",
            "Generating new signals",
            "Storing signals"
          ],
          correctAnswer: 0,
          explanation: "Amplifiers increase signal strength for longer travel."
        },
        {
          id: 15,
          question: "What is Mbps?",
          options: [
            "Megabits per second",
            "Millibits per second",
            "Microbits per second",
            "Meters per second"
          ],
          correctAnswer: 0,
          explanation: "Mbps measures millions of bits transmitted per second."
        },
        {
          id: 16,
          question: "What is immune to electromagnetic interference?",
          options: [
            "Fiber optic transmission",
            "Copper cable transmission",
            "RF transmission",
            "Power line transmission"
          ],
          correctAnswer: 0,
          explanation: "Light signals in fiber aren't affected by electrical interference."
        },
        {
          id: 17,
          question: "What is regeneration?",
          options: [
            "Cleaning and repeating digital signals",
            "Creating new signals",
            "Amplifying analog signals",
            "Converting signal types"
          ],
          correctAnswer: 0,
          explanation: "Regeneration restores digital signals to their original form."
        },
        {
          id: 18,
          question: "What uses existing home wiring?",
          options: [
            "Power line communication",
            "Fiber optic networks",
            "Satellite systems",
            "Microwave links"
          ],
          correctAnswer: 0,
          explanation: "Power line networking adapts electrical outlets for data."
        },
        {
          id: 19,
          question: "What has high latency?",
          options: [
            "Satellite communication",
            "Fiber optic communication",
            "Copper cable communication",
            "Infrared communication"
          ],
          correctAnswer: 0,
          explanation: "Satellite signals travel long distances to space and back."
        },
        {
          id: 20,
          question: "What measures billions of bits per second?",
          options: [
            "Gbps (Gigabits per second)",
            "Kbps (Kilobits per second)",
            "Mbps (Megabits per second)",
            "Tbps (Terabits per second)"
          ],
          correctAnswer: 0,
          explanation: "Gbps represents very high-speed data transmission."
        }
      ]
    },

    // MODULE 4: MOBILE COMMUNICATION
    {
      id: 4,
      title: "Mobile and Wireless Systems",
      content: `# Understanding Mobile Networks

## Evolution of Mobile Communication
Mobile technology has evolved through generations, each offering improved capabilities and services.

## Mobile Network Generations

**1G - First Generation**
- Analog voice calls only
- Large mobile phones
- Basic coverage areas
- No data services

**2G - Second Generation**
- Digital voice calls
- Text messaging (SMS)
- Better security
- Limited data services

**3G - Third Generation**
- Mobile Internet access
- Video calling capability
- Faster data speeds
- Smartphone support

**4G - Fourth Generation**
- High-speed mobile broadband
- HD video streaming
- Low latency for real-time apps
- Advanced smartphone features

**5G - Fifth Generation**
- Very high speeds and capacity
- Internet of Things (IoT) support
- Ultra-low latency
- Enhanced mobile experiences

## Cellular Network Components

**Cell Towers**
- Transmit and receive signals
- Cover specific geographic areas (cells)
- Hand off calls between cells as users move
- Connected to network backbone

**Mobile Devices**
- Smartphones, tablets, modems
- Contain SIM cards for identification
- Multiple radios for different bands
- Support various applications

**Network Core**
- Central switching and routing
- User authentication and billing
- Connection to other networks
- Service management systems

## Key Mobile Technologies

**SIM Cards**
- Store user identity and information
- Enable device switching
- Provide security features
- Store contacts and messages

**Roaming**
- Using mobile services outside home network
- Agreements between operators
- Additional charges may apply
- Automatic network selection

**Mobile Data Services**
- Internet access on mobile devices
- Different speed tiers available
- Data usage tracking and limits
- Various pricing plans

## Wireless Standards

**Wi-Fi (Wireless Fidelity)**
- Local wireless networking
- Uses unlicensed frequency bands
- Common in homes and businesses
- Different versions (Wi-Fi 4, 5, 6, etc.)

**Bluetooth**
- Short-range personal connectivity
- Used for accessories and peripherals
- Low power consumption
- Simple pairing process

Mobile communication enables connectivity anywhere, anytime.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What did 1G provide?",
          options: [
            "Analog voice calls only",
            "Mobile Internet access",
            "HD video streaming",
            "Text messaging"
          ],
          correctAnswer: 0,
          explanation: "First generation mobile was analog voice only."
        },
        {
          id: 2,
          question: "What introduced text messaging?",
          options: [
            "2G networks",
            "1G networks",
            "3G networks",
            "4G networks"
          ],
          correctAnswer: 0,
          explanation: "2G brought digital services including SMS texting."
        },
        {
          id: 3,
          question: "What do cell towers do?",
          options: [
            "Transmit and receive signals in cells",
            "Store user data",
            "Process billing information",
            "Manufacture mobile devices"
          ],
          correctAnswer: 0,
          explanation: "Cell towers provide radio coverage in specific areas."
        },
        {
          id: 4,
          question: "What is 4G known for?",
          options: [
            "High-speed mobile broadband",
            "Analog voice calls",
            "Basic text messaging",
            "Limited Internet access"
          ],
          correctAnswer: 0,
          explanation: "4G provides fast mobile Internet for advanced applications."
        },
        {
          id: 5,
          question: "What is a SIM card?",
          options: [
            "Stores user identity and information",
            "A type of mobile tower",
            "Network core equipment",
            "Mobile application software"
          ],
          correctAnswer: 0,
          explanation: "SIM cards identify users and enable service access."
        },
        {
          id: 6,
          question: "What does 5G offer?",
          options: [
            "Very high speeds and IoT support",
            "Only voice calls",
            "Basic text messaging",
            "Slow Internet access"
          ],
          correctAnswer: 0,
          explanation: "5G enables advanced applications with high performance."
        },
        {
          id: 7,
          question: "What is roaming?",
          options: [
            "Using services outside home network",
            "Walking while talking",
            "Changing SIM cards",
            "Upgrading mobile devices"
          ],
          correctAnswer: 0,
          explanation: "Roaming allows service use in different operator areas."
        },
        {
          id: 8,
          question: "What did 3G introduce?",
          options: [
            "Mobile Internet access",
            "Analog voice only",
            "Text messaging only",
            "Fiber optic backhaul"
          ],
          correctAnswer: 0,
          explanation: "3G made practical mobile Internet possible."
        },
        {
          id: 9,
          question: "What is Wi-Fi?",
          options: [
            "Local wireless networking",
            "Mobile cellular network",
            "Satellite communication",
            "Fiber optic network"
          ],
          correctAnswer: 0,
          explanation: "Wi-Fi provides wireless local area network access."
        },
        {
          id: 10,
          question: "What is the network core?",
          options: [
            "Central switching and routing system",
            "Cell tower equipment",
            "Mobile device hardware",
            "SIM card storage"
          ],
          correctAnswer: 0,
          explanation: "The core manages all network operations and connections."
        },
        {
          id: 11,
          question: "What is Bluetooth for?",
          options: [
            "Short-range personal connectivity",
            "Long-distance communication",
            "Satellite linking",
            "Fiber optic transmission"
          ],
          correctAnswer: 0,
          explanation: "Bluetooth connects nearby devices like headphones and keyboards."
        },
        {
          id: 12,
          question: "What does handoff mean?",
          options: [
            "Transferring calls between cells",
            "Changing mobile devices",
            "Switching SIM cards",
            "Upgrading network plans"
          ],
          correctAnswer: 0,
          explanation: "Handoff maintains calls while users move between coverage areas."
        },
        {
          id: 13,
          question: "What is mobile data?",
          options: [
            "Internet access on mobile devices",
            "Voice call minutes",
            "Text message storage",
            "Device battery power"
          ],
          correctAnswer: 0,
          explanation: "Mobile data enables Internet connectivity on the go."
        },
        {
          id: 14,
          question: "What stores contacts?",
          options: [
            "SIM cards and device memory",
            "Cell towers only",
            "Network core only",
            "Mobile applications only"
          ],
          correctAnswer: 0,
          explanation: "Contact information can be stored on SIM cards or devices."
        },
        {
          id: 15,
          question: "What is IoT support?",
          options: [
            "Connecting smart devices and sensors",
            "Only smartphone connections",
            "Traditional voice calls",
            "Text messaging services"
          ],
          correctAnswer: 0,
          explanation: "IoT enables various devices to connect and communicate."
        },
        {
          id: 16,
          question: "What uses unlicensed bands?",
          options: [
            "Wi-Fi networks",
            "Cellular networks",
            "Satellite systems",
            "Fiber optic networks"
          ],
          correctAnswer: 0,
          explanation: "Wi-Fi operates in frequency bands available for public use."
        },
        {
          id: 17,
          question: "What does authentication verify?",
          options: [
            "User identity for network access",
            "Device manufacturing date",
            "Network coverage area",
            "Signal strength levels"
          ],
          correctAnswer: 0,
          explanation: "Authentication ensures only authorized users access services."
        },
        {
          id: 18,
          question: "What is low latency important for?",
          options: [
            "Real-time applications and gaming",
            "Email delivery",
            "File downloads",
            "Web browsing"
          ],
          correctAnswer: 0,
          explanation: "Low latency means minimal delay for time-sensitive applications."
        },
        {
          id: 19,
          question: "What enables device switching?",
          options: [
            "SIM card portability",
            "Network tower placement",
            "Core system design",
            "Mobile application stores"
          ],
          correctAnswer: 0,
          explanation: "SIM cards can be moved between compatible devices."
        },
        {
          id: 20,
          question: "What is HD video streaming?",
          options: [
            "High-definition video over networks",
            "Basic text communication",
            "Voice-only calls",
            "Email services"
          ],
          correctAnswer: 0,
          explanation: "HD streaming requires sufficient bandwidth and speed."
        }
      ]
    },

    // MODULE 5: INTERNET AND DATA SERVICES
    {
      id: 5,
      title: "Internet Connectivity",
      content: `# How the Internet Works

## Understanding Internet Basics
The Internet is a global network connecting millions of computers and devices. It enables information sharing, communication, and services worldwide.

## Internet Service Types

**Broadband Internet**
- High-speed always-on connection
- Types: DSL, cable, fiber, satellite, wireless
- Suitable for multiple devices
- Supports video streaming and downloads

**Dial-up Internet**
- Uses telephone lines
- Slow speed by modern standards
- Cannot use phone while online
- Mostly historical now

**Mobile Internet**
- Wireless connectivity through cellular networks
- Available anywhere with coverage
- Speed depends on network generation
- Data limits often apply

## Internet Connection Technologies

**DSL (Digital Subscriber Line)**
- Uses existing telephone lines
- Simultaneous phone and Internet
- Speed depends on distance from exchange
- Common in residential areas

**Cable Internet**
- Uses cable television infrastructure
- Shared bandwidth in neighborhoods
- Generally faster than DSL
- Available where cable TV exists

**Fiber Optic Internet**
- Uses light signals through glass fibers
- Highest speeds available
- Symmetrical upload and download
- Expanding in urban areas

**Satellite Internet**
- Space-based connectivity
- Available in remote areas
- Higher latency than terrestrial options
- Affected by weather conditions

## Internet Components

**Internet Service Providers (ISPs)**
- Companies providing Internet access
- Maintain network infrastructure
- Offer various plans and speeds
- Provide customer support

**Routers and Modems**
- **Modem**: Connects to ISP network
- **Router**: Creates local network
- **Combination devices**: Both functions
- **Wireless routers**: Include Wi-Fi

**Web Browsers**
- Software for accessing websites
- Examples: Chrome, Firefox, Safari
- Interpret web page code
- Store browsing history and cookies

## Basic Internet Concepts

**IP Addresses**
- Unique identifier for devices
- IPv4: Older format (e.g., 192.168.1.1)
- IPv6: Newer format with more addresses
- Assigned by ISPs or networks

**Domain Names**
- Human-readable website addresses
- Converted to IP addresses by DNS
- Examples: google.com, facebook.com
- Registered through domain registrars

**Bandwidth vs Speed**
- **Bandwidth**: Maximum capacity
- **Speed**: Actual transfer rate
- Affected by network congestion
- Measured in Mbps or Gbps

The Internet connects the world through various technologies and services.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the Internet?",
          options: [
            "Global network connecting devices",
            "A single computer network",
            "Only email system",
            "Telephone network only"
          ],
          correctAnswer: 0,
          explanation: "The Internet connects millions of networks worldwide."
        },
        {
          id: 2,
          question: "What is broadband?",
          options: [
            "High-speed always-on Internet",
            "Slow dial-up connection",
            "Mobile text messaging",
            "Telephone voice service"
          ],
          correctAnswer: 0,
          explanation: "Broadband provides fast, continuous Internet access."
        },
        {
          id: 3,
          question: "What does DSL use?",
          options: [
            "Existing telephone lines",
            "Cable TV lines",
            "Fiber optic cables",
            "Satellite links"
          ],
          correctAnswer: 0,
          explanation: "DSL transmits data over standard phone lines."
        },
        {
          id: 4,
          question: "What is an ISP?",
          options: [
            "Internet Service Provider",
            "Internet Security Protocol",
            "International Service Provider",
            "Internet Speed Processor"
          ],
          correctAnswer: 0,
          explanation: "ISPs provide customers with Internet access services."
        },
        {
          id: 5,
          question: "What is an IP address?",
          options: [
            "Unique identifier for devices",
            "Website domain name",
            "Internet speed rating",
            "Browser software name"
          ],
          correctAnswer: 0,
          explanation: "IP addresses identify devices on networks."
        },
        {
          id: 6,
          question: "What uses cable TV infrastructure?",
          options: [
            "Cable Internet",
            "DSL Internet",
            "Fiber Internet",
            "Dial-up Internet"
          ],
          correctAnswer: 0,
          explanation: "Cable Internet shares infrastructure with television service."
        },
        {
          id: 7,
          question: "What is a domain name?",
          options: [
            "Human-readable website address",
            "Device IP address",
            "Network password",
            "Browser setting"
          ],
          correctAnswer: 0,
          explanation: "Domain names make websites easy to remember and access."
        },
        {
          id: 8,
          question: "What is fiber optic Internet?",
          options: [
            "Highest speed using light signals",
            "Slow telephone line Internet",
            "Satellite-based Internet",
            "Mobile cellular Internet"
          ],
          correctAnswer: 0,
          explanation: "Fiber optics provide the fastest residential Internet speeds."
        },
        {
          id: 9,
          question: "What does a modem do?",
          options: [
            "Connects to ISP network",
            "Creates local Wi-Fi network",
            "Stores web pages",
            "Protects from viruses"
          ],
          correctAnswer: 0,
          explanation: "Modems interface between home networks and ISP networks."
        },
        {
          id: 10,
          question: "What is satellite Internet for?",
          options: [
            "Remote area connectivity",
            "Highest speed in cities",
            "Lowest cost option",
            "Temporary mobile use"
          ],
          correctAnswer: 0,
          explanation: "Satellite reaches areas without terrestrial infrastructure."
        },
        {
          id: 11,
          question: "What is a web browser?",
          options: [
            "Software for accessing websites",
            "Internet connection device",
            "Network security tool",
            "Email program"
          ],
          correctAnswer: 0,
          explanation: "Browsers display web pages and navigate the Internet."
        },
        {
          id: 12,
          question: "What is bandwidth?",
          options: [
            "Maximum capacity of connection",
            "Actual download speed",
            "Network security level",
            "Data usage limit"
          ],
          correctAnswer: 0,
          explanation: "Bandwidth determines potential maximum speed."
        },
        {
          id: 13,
          question: "What is dial-up Internet?",
          options: [
            "Uses telephone lines with modems",
            "High-speed fiber connection",
            "Wireless mobile Internet",
            "Cable television Internet"
          ],
          correctAnswer: 0,
          explanation: "Dial-up was the original home Internet technology."
        },
        {
          id: 14,
          question: "What does a router do?",
          options: [
            "Creates local network",
            "Connects to ISP",
            "Stores website data",
            "Filters Internet content"
          ],
          correctAnswer: 0,
          explanation: "Routers manage traffic between local devices and the Internet."
        },
        {
          id: 15,
          question: "What is mobile Internet?",
          options: [
            "Wireless through cellular networks",
            "Home broadband service",
            "Office network connection",
            "Public Wi-Fi access"
          ],
          correctAnswer: 0,
          explanation: "Mobile Internet uses cellular data networks."
        },
        {
          id: 16,
          question: "What converts domains to IP addresses?",
          options: [
            "DNS (Domain Name System)",
            "ISP routers",
            "Web browsers",
            "Modem settings"
          ],
          correctAnswer: 0,
          explanation: "DNS translates human-readable names to numerical addresses."
        },
        {
          id: 17,
          question: "What is IPv6?",
          options: [
            "Newer IP address format",
            "Internet speed standard",
            "Web browser version",
            "Network security protocol"
          ],
          correctAnswer: 0,
          explanation: "IPv6 provides more addresses than older IPv4."
        },
        {
          id: 18,
          question: "What is symmetrical speed?",
          options: [
            "Equal upload and download speeds",
            "Fast download only",
            "Slow upload only",
            "Variable speeds"
          ],
          correctAnswer: 0,
          explanation: "Symmetrical connections benefit video calls and uploading."
        },
        {
          id: 19,
          question: "What are combination devices?",
          options: [
            "Modem and router in one unit",
            "Computer and monitor together",
            "Phone and tablet combined",
            "TV and Internet separate"
          ],
          correctAnswer: 0,
          explanation: "Combination devices simplify home network setup."
        },
        {
          id: 20,
          question: "What affects actual Internet speed?",
          options: [
            "Network congestion and distance",
            "Only ISP plan purchased",
            "Device brand only",
            "Time of day only"
          ],
          correctAnswer: 0,
          explanation: "Many factors influence real-world Internet performance."
        }
      ]
    },

    // MODULE 6: EMERGING TECHNOLOGIES
    {
      id: 6,
      title: "Future Telecommunications",
      content: `# Next-Generation Communication

## Evolution of Telecommunications
Telecommunications continues to advance with new technologies that offer faster speeds, greater reliability, and innovative services.

## 5G and Beyond

**5G Technology Features**
- Enhanced mobile broadband
- Massive machine-type communications
- Ultra-reliable low-latency communications
- Network slicing for different needs

**5G Use Cases**
- Enhanced mobile experiences
- Fixed wireless Internet
- Industrial automation
- Smart city applications
- Remote healthcare

**6G Research**
- Even higher speeds (terabits per second)
- Integrated satellite-terrestrial networks
- Advanced AI integration
- Holographic communications
- Expected around 2030

## Internet of Things (IoT)

**What is IoT?**
- Network of connected physical devices
- Sensors, appliances, vehicles, wearables
- Collect and exchange data
- Automated decision-making

**IoT Communication Methods**
- Cellular IoT (NB-IoT, LTE-M)
- Low-power wide-area networks (LoRaWAN)
- Short-range technologies (Bluetooth, Zigbee)
- Satellite IoT for global coverage

**IoT Applications**
- Smart homes and buildings
- Industrial monitoring
- Agricultural sensors
- Healthcare devices
- Environmental monitoring

## Satellite Innovations

**Low Earth Orbit (LEO) Satellites**
- Closer to Earth than traditional satellites
- Lower latency communication
- Constellations of many satellites
- Global broadband coverage

**Satellite Internet Advancements**
- Faster speeds through new technologies
- Reduced latency with LEO constellations
- Smaller user terminals
- Competitive with terrestrial broadband

## Artificial Intelligence in Telecom

**Network Optimization**
- Predictive maintenance
- Traffic management
- Resource allocation
- Fault detection

**Customer Service**
- Chatbots and virtual assistants
- Personalized recommendations
- Automated troubleshooting
- Usage pattern analysis

**Security Enhancement**
- Threat detection
- Fraud prevention
- Anomaly identification
- Automated responses

## Future Trends

**Quantum Communication**
- Ultra-secure transmission
- Quantum key distribution
- Currently in research phase
- Future-proof security

**Integrated Networks**
- Seamless switching between technologies
- Combined terrestrial and satellite
- Unified management systems
- Consistent user experience

**Sustainability Focus**
- Energy-efficient networks
- Renewable power sources
- Reduced electronic waste
- Green technology adoption

Telecommunications will continue evolving to connect people and devices in smarter, faster ways.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does 5G offer beyond speed?",
          options: [
            "Low latency and massive connectivity",
            "Only faster downloads",
            "Basic voice calls only",
            "Text messaging improvements"
          ],
          correctAnswer: 0,
          explanation: "5G provides low delay and connects many devices simultaneously."
        },
        {
          id: 2,
          question: "What is IoT?",
          options: [
            "Network of connected physical devices",
            "Only smartphones and computers",
            "Traditional telephone network",
            "Satellite television system"
          ],
          correctAnswer: 0,
          explanation: "IoT includes various smart devices beyond traditional computers."
        },
        {
          id: 3,
          question: "What are LEO satellites?",
          options: [
            "Low Earth Orbit satellites closer to Earth",
            "Geostationary far orbit satellites",
            "Weather monitoring only satellites",
            "Television broadcast satellites"
          ],
          correctAnswer: 0,
          explanation: "LEO satellites orbit closer for lower latency communication."
        },
        {
          id: 4,
          question: "What is network slicing?",
          options: [
            "Creating virtual networks for different needs",
            "Dividing physical cables",
            "Splitting satellite signals",
            "Separating user devices"
          ],
          correctAnswer: 0,
          explanation: "Network slicing customizes networks for specific applications."
        },
        {
          id: 5,
          question: "What is cellular IoT?",
          options: [
            "IoT devices using cellular networks",
            "Only Wi-Fi connected devices",
            "Bluetooth-only devices",
            "Wired Internet devices"
          ],
          correctAnswer: 0,
          explanation: "Cellular IoT provides wide-area connectivity for devices."
        },
        {
          id: 6,
          question: "What does AI optimize in telecom?",
          options: [
            "Network performance and maintenance",
            "Only customer billing",
            "Device manufacturing",
            "Satellite launching"
          ],
          correctAnswer: 0,
          explanation: "AI improves network efficiency and reliability."
        },
        {
          id: 7,
          question: "What is massive machine-type communications?",
          options: [
            "Connecting many IoT devices",
            "Only human voice calls",
            "Text messaging between people",
            "Video streaming services"
          ],
          correctAnswer: 0,
          explanation: "This 5G feature supports large numbers of connected devices."
        },
        {
          id: 8,
          question: "What are smart city applications?",
          options: [
            "Urban infrastructure using connected technology",
            "Only residential Internet",
            "Traditional telephones",
            "Manual city management"
          ],
          correctAnswer: 0,
          explanation: "Smart cities use technology to improve urban services."
        },
        {
          id: 9,
          question: "What is quantum communication?",
          options: [
            "Ultra-secure transmission technology",
            "Very fast Internet only",
            "Mobile voice calls",
            "Satellite television"
          ],
          correctAnswer: 0,
          explanation: "Quantum technology offers fundamentally secure communication."
        },
        {
          id: 10,
          question: "What is fixed wireless Internet?",
          options: [
            "Wireless broadband to fixed locations",
            "Mobile cellular data",
            "Satellite television",
            "Fiber optic cable"
          ],
          correctAnswer: 0,
          explanation: "Fixed wireless provides home Internet without cables."
        },
        {
          id: 11,
          question: "What is NB-IoT?",
          options: [
            "Narrowband IoT for low-power devices",
            "New broadband Internet",
            "Network backup Internet",
            "National broadband initiative"
          ],
          correctAnswer: 0,
          explanation: "NB-IoT is designed for simple, low-power IoT devices."
        },
        {
          id: 12,
          question: "What are constellations of satellites?",
          options: [
            "Groups working together for coverage",
            "Single satellites alone",
            "Weather satellites only",
            "Television satellites"
          ],
          correctAnswer: 0,
          explanation: "Constellations provide continuous global coverage."
        },
        {
          id: 13,
          question: "What does ultra-reliable mean in 5G?",
          options: [
            "Highly dependable communication",
            "Occasionally working",
            "Basic reliability only",
            "Unreliable connections"
          ],
          correctAnswer: 0,
          explanation: "Ultra-reliable communication is critical for applications like remote surgery."
        },
        {
          id: 14,
          question: "What is LoRaWAN?",
          options: [
            "Low-power wide-area network for IoT",
            "Local radio network",
            "Long-range audio network",
            "Loud radio network"
          ],
          correctAnswer: 0,
          explanation: "LoRaWAN connects IoT devices over long distances with low power."
        },
        {
          id: 15,
          question: "What is predictive maintenance?",
          options: [
            "Fixing issues before they occur",
            "Only repairing after failure",
            "Regular scheduled maintenance",
            "Ignoring maintenance needs"
          ],
          correctAnswer: 0,
          explanation: "AI predicts equipment failures before they happen."
        },
        {
          id: 16,
          question: "What is 6G expected to offer?",
          options: [
            "Terabit speeds and holographic communication",
            "Same as 5G",
            "Less than 5G capabilities",
            "Only voice improvements"
          ],
          correctAnswer: 0,
          explanation: "6G research aims for dramatically higher performance."
        },
        {
          id: 17,
          question: "What are smart homes?",
          options: [
            "Homes with connected devices and automation",
            "Only basic electricity",
            "Traditional appliances only",
            "Manual control everything"
          ],
          correctAnswer: 0,
          explanation: "Smart homes use technology for convenience and efficiency."
        },
        {
          id: 18,
          question: "What is integrated networks?",
          options: [
            "Seamless switching between technologies",
            "Only one technology used",
            "Separate networks always",
            "Manual network switching"
          ],
          correctAnswer: 0,
          explanation: "Integration provides consistent connectivity across different systems."
        },
        {
          id: 19,
          question: "What is remote healthcare enabled by?",
          options: [
            "Reliable telecommunications",
            "Only in-person visits",
            "Traditional mail",
            "Manual record keeping"
          ],
          correctAnswer: 0,
          explanation: "Telecommunications enables telemedicine and remote monitoring."
        },
        {
          id: 20,
          question: "What focuses on energy efficiency?",
          options: [
            "Sustainable telecommunications",
            "Maximum power consumption",
            "Ignoring energy use",
            "Traditional inefficient systems"
          ],
          correctAnswer: 0,
          explanation: "Future networks prioritize environmental sustainability."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: {
    id: "telecommunications-certificate-exam",
    title: "Telecommunications Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules. You need to answer 40 questions to complete your certificate.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        moduleId: 1,
        question: "What is telecommunications?",
        options: [
          "Transmission of information over distances using technology",
          "Only face-to-face conversations",
          "Writing letters by hand",
          "Transportation of physical goods"
        ],
        correctAnswer: 0,
        explanation: "Telecommunications involves electronic information transmission."
      },
      {
        id: 2,
        moduleId: 1,
        question: "What is the source in communication?",
        options: [
          "Where information originates",
          "The transmission path",
          "The receiving device",
          "The communication rules"
        ],
        correctAnswer: 0,
        explanation: "The source creates the information being sent."
      },
      {
        id: 3,
        moduleId: 1,
        question: "What type of communication uses traditional telephones?",
        options: [
          "Voice communication",
          "Data communication only",
          "Video communication only",
          "Written communication"
        ],
        correctAnswer: 0,
        explanation: "Telephones are primarily for voice communication."
      },
      {
        id: 4,
        moduleId: 1,
        question: "What is a network in telecommunications?",
        options: [
          "Connected devices that can communicate",
          "A single computer alone",
          "Only wireless connections",
          "Physical cables only"
        ],
        correctAnswer: 0,
        explanation: "Networks enable device communication and resource sharing."
      },
      {
        id: 5,
        moduleId: 1,
        question: "What does bandwidth measure?",
        options: [
          "Capacity of a communication channel",
          "Length of cables",
          "Number of users",
          "Cost of service"
        ],
        correctAnswer: 0,
        explanation: "Bandwidth determines information transmission capacity."
      },
      {
        id: 6,
        moduleId: 1,
        question: "What is the transmission medium?",
        options: [
          "Path signals travel through",
          "The information source",
          "The receiving device",
          "Communication software"
        ],
        correctAnswer: 0,
        explanation: "The medium carries signals between devices."
      },

      // Questions from Module 2
      {
        id: 7,
        moduleId: 2,
        question: "What does LAN stand for?",
        options: [
          "Local Area Network",
          "Large Area Network",
          "Long Area Network",
          "Limited Area Network"
        ],
        correctAnswer: 0,
        explanation: "LAN covers small areas like homes or offices."
      },
      {
        id: 8,
        moduleId: 2,
        question: "What connects different networks together?",
        options: [
          "Routers",
          "Computers only",
          "Cables only",
          "Software applications"
        ],
        correctAnswer: 0,
        explanation: "Routers direct traffic between networks."
      },
      {
        id: 9,
        moduleId: 2,
        question: "What is a WAN?",
        options: [
          "Wide Area Network covering large areas",
          "Wireless Area Network",
          "Wired Area Network",
          "World Area Network"
        ],
        correctAnswer: 0,
        explanation: "WANs connect networks across cities or countries."
      },
      {
        id: 10,
        moduleId: 2,
        question: "What is star topology?",
        options: [
          "All devices connect to a central point",
          "Devices in a straight line",
          "Devices in a circle",
          "All devices connect to each other"
        ],
        correctAnswer: 0,
        explanation: "Star topology uses central connection points."
      },
      {
        id: 11,
        moduleId: 2,
        question: "What do switches do?",
        options: [
          "Connect devices within a network",
          "Convert signals for transmission",
          "Provide wireless access",
          "Store network data"
        ],
        correctAnswer: 0,
        explanation: "Switches manage communication within networks."
      },
      {
        id: 12,
        moduleId: 2,
        question: "What does TCP/IP provide?",
        options: [
          "Foundation for Internet communication",
          "Only web browsing",
          "Only email service",
          "Only file transfers"
        ],
        correctAnswer: 0,
        explanation: "TCP/IP is the basic protocol suite for Internet."
      },

      // Questions from Module 3
      {
        id: 13,
        moduleId: 3,
        question: "What uses electrical signals through copper?",
        options: [
          "Copper cable transmission",
          "Fiber optic transmission",
          "Satellite transmission",
          "Infrared transmission"
        ],
        correctAnswer: 0,
        explanation: "Copper cables carry electrical signals."
      },
      {
        id: 14,
        moduleId: 3,
        question: "What does fiber optic use?",
        options: [
          "Light signals through glass fibers",
          "Electrical signals through copper",
          "Radio waves through air",
          "Sound waves through air"
        ],
        correctAnswer: 0,
        explanation: "Fiber optics transmit light pulses."
      },
      {
        id: 15,
        moduleId: 3,
        question: "What is RF transmission?",
        options: [
          "Radio Frequency wireless transmission",
          "Fiber optic transmission",
          "Copper cable transmission",
          "Power line transmission"
        ],
        correctAnswer: 0,
        explanation: "RF uses radio waves for wireless communication."
      },
      {
        id: 16,
        moduleId: 3,
        question: "What are analog signals?",
        options: [
          "Continuous wave patterns",
          "Discrete on/off pulses",
          "Only digital data",
          "Computer binary code"
        ],
        correctAnswer: 0,
        explanation: "Analog signals vary continuously."
      },
      {
        id: 17,
        moduleId: 3,
        question: "What is microwave transmission?",
        options: [
          "High-frequency point-to-point communication",
          "Fiber optic communication",
          "Power line communication",
          "Infrared communication"
        ],
        correctAnswer: 0,
        explanation: "Microwaves provide directional wireless links."
      },
      {
        id: 18,
        moduleId: 3,
        question: "What are digital signals?",
        options: [
          "Discrete on/off pulses",
          "Continuous wave patterns",
          "Analog variations",
          "Sound vibrations"
        ],
        correctAnswer: 0,
        explanation: "Digital signals use binary code."
      },

      // Questions from Module 4
      {
        id: 19,
        moduleId: 4,
        question: "What did 1G provide?",
        options: [
          "Analog voice calls only",
          "Mobile Internet access",
          "HD video streaming",
          "Text messaging"
        ],
        correctAnswer: 0,
        explanation: "First generation mobile was analog voice only."
      },
      {
        id: 20,
        moduleId: 4,
        question: "What introduced text messaging?",
        options: [
          "2G networks",
          "1G networks",
          "3G networks",
          "4G networks"
        ],
        correctAnswer: 0,
        explanation: "2G brought digital services including SMS."
      },
      {
        id: 21,
        moduleId: 4,
        question: "What do cell towers do?",
        options: [
          "Transmit and receive signals in cells",
          "Store user data",
          "Process billing information",
          "Manufacture mobile devices"
        ],
        correctAnswer: 0,
        explanation: "Cell towers provide radio coverage areas."
      },
      {
        id: 22,
        moduleId: 4,
        question: "What is 4G known for?",
        options: [
          "High-speed mobile broadband",
          "Analog voice calls",
          "Basic text messaging",
          "Limited Internet access"
        ],
        correctAnswer: 0,
        explanation: "4G provides fast mobile Internet."
      },
      {
        id: 23,
        moduleId: 4,
        question: "What is a SIM card?",
        options: [
          "Stores user identity and information",
          "A type of mobile tower",
          "Network core equipment",
          "Mobile application software"
        ],
        correctAnswer: 0,
        explanation: "SIM cards identify users for network access."
      },
      {
        id: 24,
        moduleId: 4,
        question: "What does 5G offer?",
        options: [
          "Very high speeds and IoT support",
          "Only voice calls",
          "Basic text messaging",
          "Slow Internet access"
        ],
        correctAnswer: 0,
        explanation: "5G enables advanced applications."
      },

      // Questions from Module 5
      {
        id: 25,
        moduleId: 5,
        question: "What is broadband?",
        options: [
          "High-speed always-on Internet",
          "Slow dial-up connection",
          "Mobile text messaging",
          "Telephone voice service"
        ],
        correctAnswer: 0,
        explanation: "Broadband provides fast, continuous Internet."
      },
      {
        id: 26,
        moduleId: 5,
        question: "What does DSL use?",
        options: [
          "Existing telephone lines",
          "Cable TV lines",
          "Fiber optic cables",
          "Satellite links"
        ],
        correctAnswer: 0,
        explanation: "DSL transmits data over phone lines."
      },
      {
        id: 27,
        moduleId: 5,
        question: "What is an ISP?",
        options: [
          "Internet Service Provider",
          "Internet Security Protocol",
          "International Service Provider",
          "Internet Speed Processor"
        ],
        correctAnswer: 0,
        explanation: "ISPs provide Internet access services."
      },
      {
        id: 28,
        moduleId: 5,
        question: "What is an IP address?",
        options: [
          "Unique identifier for devices",
          "Website domain name",
          "Internet speed rating",
          "Browser software name"
        ],
        correctAnswer: 0,
        explanation: "IP addresses identify devices on networks."
      },
      {
        id: 29,
        moduleId: 5,
        question: "What uses cable TV infrastructure?",
        options: [
          "Cable Internet",
          "DSL Internet",
          "Fiber Internet",
          "Dial-up Internet"
        ],
        correctAnswer: 0,
        explanation: "Cable Internet shares TV infrastructure."
      },
      {
        id: 30,
        moduleId: 5,
        question: "What is a domain name?",
        options: [
          "Human-readable website address",
          "Device IP address",
          "Network password",
          "Browser setting"
        ],
        correctAnswer: 0,
        explanation: "Domain names make websites easy to remember."
      },

      // Questions from Module 6
      {
        id: 31,
        moduleId: 6,
        question: "What does 5G offer beyond speed?",
        options: [
          "Low latency and massive connectivity",
          "Only faster downloads",
          "Basic voice calls only",
          "Text messaging improvements"
        ],
        correctAnswer: 0,
        explanation: "5G provides low delay and connects many devices."
      },
      {
        id: 32,
        moduleId: 6,
        question: "What is IoT?",
        options: [
          "Network of connected physical devices",
          "Only smartphones and computers",
          "Traditional telephone network",
          "Satellite television system"
        ],
        correctAnswer: 0,
        explanation: "IoT includes various smart devices."
      },
      {
        id: 33,
        moduleId: 6,
        question: "What are LEO satellites?",
        options: [
          "Low Earth Orbit satellites closer to Earth",
          "Geostationary far orbit satellites",
          "Weather monitoring only satellites",
          "Television broadcast satellites"
        ],
        correctAnswer: 0,
        explanation: "LEO satellites orbit closer for lower latency."
      },
      {
        id: 34,
        moduleId: 6,
        question: "What is network slicing?",
        options: [
          "Creating virtual networks for different needs",
          "Dividing physical cables",
          "Splitting satellite signals",
          "Separating user devices"
        ],
        correctAnswer: 0,
        explanation: "Network slicing customizes for applications."
      },
      {
        id: 35,
        moduleId: 6,
        question: "What is cellular IoT?",
        options: [
          "IoT devices using cellular networks",
          "Only Wi-Fi connected devices",
          "Bluetooth-only devices",
          "Wired Internet devices"
        ],
        correctAnswer: 0,
        explanation: "Cellular IoT provides wide-area connectivity."
      },
      {
        id: 36,
        moduleId: 6,
        question: "What does AI optimize in telecom?",
        options: [
          "Network performance and maintenance",
          "Only customer billing",
          "Device manufacturing",
          "Satellite launching"
        ],
        correctAnswer: 0,
        explanation: "AI improves network efficiency."
      },
      {
        id: 37,
        moduleId: 6,
        question: "What is massive machine-type communications?",
        options: [
          "Connecting many IoT devices",
          "Only human voice calls",
          "Text messaging between people",
          "Video streaming services"
        ],
        correctAnswer: 0,
        explanation: "This supports large numbers of connected devices."
      },
      {
        id: 38,
        moduleId: 6,
        question: "What is quantum communication?",
        options: [
          "Ultra-secure transmission technology",
          "Very fast Internet only",
          "Mobile voice calls",
          "Satellite television"
        ],
        correctAnswer: 0,
        explanation: "Quantum technology offers secure communication."
      },
      {
        id: 39,
        moduleId: 6,
        question: "What is fixed wireless Internet?",
        options: [
          "Wireless broadband to fixed locations",
          "Mobile cellular data",
          "Satellite television",
          "Fiber optic cable"
        ],
        correctAnswer: 0,
        explanation: "Fixed wireless provides home Internet wirelessly."
      },
      {
        id: 40,
        moduleId: 6,
        question: "What is NB-IoT?",
        options: [
          "Narrowband IoT for low-power devices",
          "New broadband Internet",
          "Network backup Internet",
          "National broadband initiative"
        ],
        correctAnswer: 0,
        explanation: "NB-IoT is for simple, low-power IoT devices."
      }
    ]
  },

  // 4. COURSE COMPLETION CERTIFICATE DATA
  certificate: {
    title: "Telecommunications Certificate of Completion",
    issuingOrganization: "Edusanna Academy",
    description: "This certifies successful completion of the Telecommunications Certificate course, demonstrating foundational knowledge in telecommunications principles, network basics, transmission technologies, mobile systems, Internet connectivity, and emerging technologies.",
    competencies: [
      "Understanding telecommunications fundamentals",
      "Basic network concepts and topologies",
      "Transmission methods and technologies",
      "Mobile communication systems",
      "Internet connectivity and services",
      "Emerging telecommunications trends"
    ],
    issueDate: new Date().toISOString().split('T')[0]
  }
};

export default telecommunicationsCertificateCourse;
