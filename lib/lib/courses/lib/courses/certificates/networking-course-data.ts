// Networking (Certificate) Course Content
// File: networking-certificate.ts

export const networkingCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "networking-certificate",
  title: "Networking (Certificate)",
  description: "Foundational course covering essential networking concepts, devices, protocols, and basic network setup. Perfect for beginners starting their IT networking journey.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🌐",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Networking Basics",
      content: `# Module 1: Introduction to Networking Basics

## What is Computer Networking?
Computer networking is the practice of connecting computers and other devices to share resources and communicate. Networks allow devices to exchange information, share files, and access the internet.

## Types of Networks
There are several types of networks based on size and purpose:
1. **Personal Area Network (PAN)** - Very small network for personal devices
2. **Local Area Network (LAN)** - Network in a small area like a home or office
3. **Wide Area Network (WAN)** - Network covering large geographical areas
4. **Wireless Local Area Network (WLAN)** - Wireless network in limited area

## Basic Network Components
Every network needs these essential components:
- **Devices** - Computers, phones, printers that connect to network
- **Media** - Cables or wireless signals that carry data
- **Protocols** - Rules that govern how devices communicate
- **Services** - Functions the network provides to users

## Network Benefits
Networks provide important advantages:
- **Resource Sharing** - Share printers, files, and internet access
- **Communication** - Email, messaging, and video calls
- **Information Access** - Reach databases and online resources
- **Cost Savings** - Reduce need for duplicate equipment

## Network Models
Two main models describe how networks work:
- **Peer-to-Peer** - All devices are equal and share directly
- **Client-Server** - Central server provides services to clients

## Basic Network Terminology
Important terms to understand:
- **Bandwidth** - Amount of data that can travel on network
- **Throughput** - Actual data transfer rate achieved
- **Latency** - Time delay in data transmission
- **Packet** - Small unit of data sent over network

## Simple Network Setup
Basic steps to create small network:
1. Connect devices with cables or wireless
2. Configure devices with network settings
3. Test connections between devices
4. Share resources as needed

## Network Safety Basics
Important security concepts:
- **Passwords** - Protect access to network resources
- **Updates** - Keep software current for security
- **Awareness** - Recognize potential security threats
- **Backups** - Regular copies of important data`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is computer networking?",
          options: [
            "Programming computers",
            "Connecting devices to share resources and communicate",
            "Building computer hardware",
            "Creating software applications"
          ],
          correctAnswer: 1,
          explanation: "Computer networking involves connecting computers and devices to share resources, exchange information, and communicate."
        },
        {
          id: 2,
          question: "What type of network is used in a home or small office?",
          options: [
            "Wide Area Network (WAN)",
            "Local Area Network (LAN)",
            "Personal Area Network (PAN)",
            "Metropolitan Area Network (MAN)"
          ],
          correctAnswer: 1,
          explanation: "A Local Area Network (LAN) covers a small area like a home, office, or building."
        },
        {
          id: 3,
          question: "What are the four basic network components?",
          options: [
            "Router, switch, firewall, server",
            "Devices, media, protocols, services",
            "Cables, wireless, internet, cloud",
            "Hardware, software, users, data"
          ],
          correctAnswer: 1,
          explanation: "The four basic network components are devices, media (cables/wireless), protocols (rules), and services (functions)."
        },
        {
          id: 4,
          question: "What can networks help share to save costs?",
          options: [
            "Only internet access",
            "Printers, files, and internet access",
            "Only software licenses",
            "Only employee time"
          ],
          correctAnswer: 1,
          explanation: "Networks allow sharing of printers, files, and internet access, reducing the need for duplicate equipment."
        },
        {
          id: 5,
          question: "What is bandwidth?",
          options: [
            "Speed of individual packets",
            "Amount of data that can travel on network",
            "Number of devices connected",
            "Physical width of network cables"
          ],
          correctAnswer: 1,
          explanation: "Bandwidth refers to the maximum amount of data that can be transmitted over a network connection in a given time."
        },
        {
          id: 6,
          question: "What does a client-server network have?",
          options: [
            "All equal devices",
            "Central server providing services to clients",
            "No central control",
            "Only wireless connections"
          ],
          correctAnswer: 1,
          explanation: "In client-server networks, a central server provides services, and client devices request and use those services."
        },
        {
          id: 7,
          question: "What is a packet?",
          options: [
            "Large file sent all at once",
            "Small unit of data sent over network",
            "Complete email message",
            "Network configuration file"
          ],
          correctAnswer: 1,
          explanation: "A packet is a small unit of data that is transmitted over a network, containing both data and addressing information."
        },
        {
          id: 8,
          question: "What is the first step in simple network setup?",
          options: [
            "Configure security settings",
            "Connect devices with cables or wireless",
            "Install server software",
            "Purchase expensive equipment"
          ],
          correctAnswer: 1,
          explanation: "The first step in setting up a basic network is physically connecting the devices using cables or establishing wireless connections."
        },
        {
          id: 9,
          question: "What does WLAN stand for?",
          options: [
            "Wide Local Area Network",
            "Wireless Local Area Network",
            "Wired Local Access Network",
            "Worldwide Local Area Network"
          ],
          correctAnswer: 1,
          explanation: "WLAN stands for Wireless Local Area Network, which uses wireless signals instead of cables for connections."
        },
        {
          id: 10,
          question: "What is latency?",
          options: [
            "Data transfer speed",
            "Time delay in data transmission",
            "Network cable length",
            "Number of connected devices"
          ],
          correctAnswer: 1,
          explanation: "Latency is the time delay between when data is sent and when it is received on a network."
        },
        {
          id: 11,
          question: "What type of network connects devices in very close proximity?",
          options: [
            "WAN",
            "PAN",
            "LAN",
            "MAN"
          ],
          correctAnswer: 1,
          explanation: "A Personal Area Network (PAN) connects devices in very close proximity, typically within a few meters."
        },
        {
          id: 12,
          question: "What is throughput?",
          options: [
            "Maximum possible data rate",
            "Actual data transfer rate achieved",
            "Network design theory",
            "Cable carrying capacity"
          ],
          correctAnswer: 1,
          explanation: "Throughput is the actual rate of successful data transfer over a network connection."
        },
        {
          id: 13,
          question: "What network model has all equal devices?",
          options: [
            "Client-Server",
            "Peer-to-Peer",
            "Centralized",
            "Distributed"
          ],
          correctAnswer: 1,
          explanation: "In peer-to-peer networks, all devices are equal and can share resources directly with each other."
        },
        {
          id: 14,
          question: "Why are passwords important for network safety?",
          options: [
            "They make networks faster",
            "They protect access to network resources",
            "They increase bandwidth",
            "They reduce cable costs"
          ],
          correctAnswer: 1,
          explanation: "Passwords protect network resources by preventing unauthorized access to devices, files, and services."
        },
        {
          id: 15,
          question: "What covers large geographical areas?",
          options: [
            "LAN",
            "WAN",
            "PAN",
            "WLAN"
          ],
          correctAnswer: 1,
          explanation: "A Wide Area Network (WAN) covers large geographical areas, often connecting multiple LANs across cities or countries."
        },
        {
          id: 16,
          question: "What does WAN stand for?",
          options: [
            "Wireless Area Network",
            "Wide Area Network",
            "Wired Access Network",
            "Worldwide Access Network"
          ],
          correctAnswer: 1,
          explanation: "WAN stands for Wide Area Network, covering large geographical areas."
        },
        {
          id: 17,
          question: "What is a basic network security practice?",
          options: [
            "Using simple passwords",
            "Keeping software updated",
            "Sharing passwords freely",
            "Ignoring security alerts"
          ],
          correctAnswer: 1,
          explanation: "Keeping software updated is crucial for security as updates often fix vulnerabilities that could be exploited."
        },
        {
          id: 18,
          question: "What does LAN stand for?",
          options: [
            "Large Area Network",
            "Local Area Network",
            "Linked Access Network",
            "Limited Area Network"
          ],
          correctAnswer: 1,
          explanation: "LAN stands for Local Area Network, covering a small geographical area."
        },
        {
          id: 19,
          question: "Why make regular backups?",
          options: [
            "To increase network speed",
            "To protect important data from loss",
            "To reduce internet costs",
            "To make networks look professional"
          ],
          correctAnswer: 1,
          explanation: "Regular backups protect important data from loss due to hardware failure, accidents, or security incidents."
        },
        {
          id: 20,
          question: "What do protocols provide in networking?",
          options: [
            "Physical cables",
            "Rules for device communication",
            "Internet service",
            "Wireless signals"
          ],
          correctAnswer: 1,
          explanation: "Protocols are rules and standards that govern how devices communicate and exchange data on a network."
        }
      ]
    },
    {
      id: 2,
      title: "Network Devices and Cables",
      content: `# Module 2: Network Devices and Cables

## Common Network Devices
Different devices perform specific functions in networks:

### Router
- **Purpose**: Connects different networks together
- **Function**: Directs data between networks (like home network to internet)
- **Location**: Usually where network meets internet

### Switch
- **Purpose**: Connects devices within same network
- **Function**: Smart device that sends data only to intended device
- **Benefit**: Reduces network congestion

### Hub (Older Technology)
- **Purpose**: Basic device to connect network devices
- **Function**: Sends data to all connected devices
- **Limitation**: Creates more network traffic

### Wireless Access Point (WAP)
- **Purpose**: Allows wireless devices to connect to wired network
- **Function**: Creates wireless network area
- **Common Use**: Wi-Fi in homes and offices

### Modem
- **Purpose**: Connects to internet service provider
- **Function**: Converts data for transmission over phone or cable lines
- **Combination**: Often combined with router

## Network Cables and Connectors
Different cables for different needs:

### Ethernet Cable (Most Common)
- **Type**: Twisted pair copper cable
- **Categories**: Cat5, Cat5e, Cat6, Cat6a, Cat7
- **Connector**: RJ-45 (looks like large phone jack)
- **Maximum Length**: 100 meters (328 feet)

### Fiber Optic Cable
- **Material**: Glass or plastic fibers
- **Advantages**: Very high speed, long distance, immune to interference
- **Types**: Single-mode (long distance) and multi-mode (shorter distance)
- **Use**: Internet backbones, large networks

### Coaxial Cable
- **Use**: Cable internet and television
- **Connector**: BNC or F-type
- **Advantage**: Good shielding against interference

## Cable Selection Factors
Consider these when choosing cables:
- **Speed Requirements** - How fast data needs to travel
- **Distance** - How far devices are apart
- **Environment** - Indoor, outdoor, industrial conditions
- **Cost** - Budget limitations
- **Future Needs** - Planning for growth

## Wireless Technologies
Different wireless standards:
- **Wi-Fi (802.11)** - Most common wireless networking
- **Bluetooth** - Short-range device connections
- **Cellular** - Mobile device internet access
- **Infrared** - Line-of-sight connections (less common)

## Device Placement Considerations
Where to place network devices:
- **Central Location** - For best wireless coverage
- **Ventilation** - Devices need airflow to prevent overheating
- **Accessibility** - For maintenance and troubleshooting
- **Security** - Physical protection from unauthorized access

## Basic Device Configuration
Simple setup steps:
1. **Connect Cables** - Properly plug in all connections
2. **Power On** - Turn on devices in correct order
3. **Access Interface** - Use web browser or software to configure
4. **Set Basic Settings** - Network name, passwords, IP addresses
5. **Test Connection** - Verify devices can communicate

## Device Maintenance
Keeping devices working properly:
- **Firmware Updates** - Keep device software current
- **Physical Cleaning** - Remove dust from vents
- **Reboot Periodically** - Fix minor issues by restarting
- **Monitor Indicators** - Watch for warning lights`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What device connects different networks together?",
          options: [
            "Switch",
            "Router",
            "Hub",
            "Access Point"
          ],
          correctAnswer: 1,
          explanation: "A router connects different networks together, such as a home network to the internet."
        },
        {
          id: 2,
          question: "What is the main function of a switch?",
          options: [
            "Connect to internet provider",
            "Connect devices within same network smartly",
            "Create wireless networks",
            "Convert data for cable lines"
          ],
          correctAnswer: 1,
          explanation: "A switch connects devices within the same network and sends data only to the intended device, reducing congestion."
        },
        {
          id: 3,
          question: "What is the most common network cable type?",
          options: [
            "Fiber optic",
            "Ethernet (twisted pair)",
            "Coaxial",
            "USB"
          ],
          correctAnswer: 1,
          explanation: "Ethernet cable (twisted pair) is the most common type for connecting devices in local networks."
        },
        {
          id: 4,
          question: "What connector does Ethernet cable use?",
          options: [
            "USB-C",
            "RJ-45",
            "HDMI",
            "BNC"
          ],
          correctAnswer: 1,
          explanation: "Ethernet cables use RJ-45 connectors, which look like large telephone jacks."
        },
        {
          id: 5,
          question: "What creates wireless network areas?",
          options: [
            "Router",
            "Wireless Access Point",
            "Switch",
            "Modem"
          ],
          correctAnswer: 1,
          explanation: "A Wireless Access Point (WAP) creates wireless network areas allowing Wi-Fi devices to connect."
        },
        {
          id: 6,
          question: "What is the maximum length for Ethernet cable?",
          options: [
            "50 meters",
            "100 meters",
            "200 meters",
            "500 meters"
          ],
          correctAnswer: 1,
          explanation: "Ethernet cable has a maximum recommended length of 100 meters (328 feet) for reliable performance."
        },
        {
          id: 7,
          question: "What does a modem do?",
          options: [
            "Connects devices within network",
            "Connects to internet service provider",
            "Creates wireless network",
            "Protects from viruses"
          ],
          correctAnswer: 1,
          explanation: "A modem connects to an internet service provider and converts data for transmission over phone or cable lines."
        },
        {
          id: 8,
          question: "What type of cable uses glass fibers?",
          options: [
            "Ethernet",
            "Fiber optic",
            "Coaxial",
            "USB"
          ],
          correctAnswer: 1,
          explanation: "Fiber optic cable uses glass or plastic fibers to transmit data as light signals."
        },
        {
          id: 9,
          question: "What is an advantage of fiber optic cable?",
          options: [
            "Lowest cost",
            "Very high speed and long distance",
            "Easiest to install",
            "Works without power"
          ],
          correctAnswer: 1,
          explanation: "Fiber optic cable offers very high speeds, long transmission distances, and immunity to electrical interference."
        },
        {
          id: 10,
          question: "What wireless technology is most common for networking?",
          options: [
            "Bluetooth",
            "Wi-Fi (802.11)",
            "Cellular",
            "Infrared"
          ],
          correctAnswer: 1,
          explanation: "Wi-Fi (based on 802.11 standards) is the most common wireless networking technology."
        },
        {
          id: 11,
          question: "What device is often combined with a router?",
          options: [
            "Switch",
            "Modem",
            "Access Point",
            "Hub"
          ],
          correctAnswer: 1,
          explanation: "Modems are often combined with routers in a single device called a modem-router combo."
        },
        {
          id: 12,
          question: "What does Cat6 refer to?",
          options: [
            "Computer model",
            "Ethernet cable category",
            "Router brand",
            "Wireless standard"
          ],
          correctAnswer: 1,
          explanation: "Cat6 refers to Category 6 Ethernet cable, which supports higher speeds than older categories."
        },
        {
          id: 13,
          question: "Why place network devices centrally?",
          options: [
            "For best wireless coverage",
            "To save on cable costs",
            "Because it looks neat",
            "To hide from view"
          ],
          correctAnswer: 0,
          explanation: "Central placement provides the best wireless coverage throughout the area."
        },
        {
          id: 14,
          question: "What is the first step in basic device configuration?",
          options: [
            "Set passwords",
            "Connect cables properly",
            "Update firmware",
            "Run speed tests"
          ],
          correctAnswer: 1,
          explanation: "The first step is physically connecting all cables correctly before powering on devices."
        },
        {
          id: 15,
          question: "What type of cable is used for cable internet?",
          options: [
            "Ethernet",
            "Coaxial",
            "Fiber optic",
            "Phone line"
          ],
          correctAnswer: 1,
          explanation: "Coaxial cable is commonly used for cable internet and television services."
        },
        {
          id: 16,
          question: "What does WAP stand for?",
          options: [
            "Wireless Access Point",
            "Wide Area Protocol",
            "Wired Access Port",
            "Wireless Application Protocol"
          ],
          correctAnswer: 0,
          explanation: "WAP stands for Wireless Access Point, which creates wireless network areas."
        },
        {
          id: 17,
          question: "Why do devices need ventilation?",
          options: [
            "To look professional",
            "To prevent overheating",
            "To reduce noise",
            "To save energy"
          ],
          correctAnswer: 1,
          explanation: "Proper ventilation prevents overheating, which can damage electronic components."
        },
        {
          id: 18,
          question: "What is a basic maintenance task for network devices?",
          options: [
            "Painting them regularly",
            "Updating firmware",
            "Changing locations daily",
            "Adding more antennas"
          ],
          correctAnswer: 1,
          explanation: "Updating firmware keeps device software current with bug fixes and security patches."
        },
        {
          id: 19,
          question: "What does an older hub do with data?",
          options: [
            "Sends only to intended device",
            "Sends to all connected devices",
            "Stores for later use",
            "Encrypts for security"
          ],
          correctAnswer: 1,
          explanation: "Hubs are basic devices that send data to all connected devices, creating more network traffic."
        },
        {
          id: 20,
          question: "What should you monitor on devices?",
          options: [
            "Color of casing",
            "Indicator lights",
            "Brand labels",
            "Serial numbers"
          ],
          correctAnswer: 1,
          explanation: "Indicator lights provide important information about device status and potential problems."
        }
      ]
    },
    {
      id: 3,
      title: "IP Addressing and Protocols",
      content: `# Module 3: IP Addressing and Protocols

## What is an IP Address?
An IP (Internet Protocol) address is a unique identifier for devices on a network. Like a home address for mail, it tells data where to go.

## IP Address Format
IP addresses come in two main versions:

### IPv4 Addresses
- **Format**: Four numbers separated by dots
- **Example**: 192.168.1.1
- **Range**: Each number is 0-255
- **Total**: About 4.3 billion possible addresses

### IPv6 Addresses
- **Format**: Eight groups of hexadecimal numbers separated by colons
- **Example**: 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- **Purpose**: Many more addresses than IPv4
- **Adoption**: Gradually replacing IPv4

## Public vs Private IP Addresses

### Public IP Addresses
- **Assigned by**: Internet Service Provider (ISP)
- **Unique**: No duplicate on entire internet
- **Visible to**: Anyone on internet
- **Purpose**: Identifies your network to outside world

### Private IP Addresses
- **Common Ranges**: 
  - 192.168.0.0 to 192.168.255.255
  - 10.0.0.0 to 10.255.255.255
  - 172.16.0.0 to 172.31.255.255
- **Used for**: Internal network devices
- **Not unique**: Same addresses used in many private networks

## Subnet Masks
Subnet masks define which part of IP address is network and which is device:
- **Example**: 255.255.255.0
- **Purpose**: Helps routers deliver data correctly
- **Simple Rule**: 255s show network part, 0s show device part

## DHCP - Automatic Address Assignment
DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses:
- **Server Role**: DHCP server gives addresses to devices
- **Client Role**: Devices request addresses automatically
- **Benefits**: No manual configuration needed
- **Common Use**: Most home and business networks

## DNS - Name Resolution
DNS (Domain Name System) translates names to IP addresses:
- **Function**: Converts www.example.com to 192.0.2.1
- **Importance**: Makes internet easier to use
- **Process**: Your device asks DNS server for address translation

## Basic Protocols

### TCP (Transmission Control Protocol)
- **Reliability**: Ensures data arrives complete and in order
- **Use**: Web browsing, email, file transfers
- **Method**: Establishes connection before sending data

### UDP (User Datagram Protocol)
- **Speed**: Faster but less reliable than TCP
- **Use**: Video streaming, online gaming, voice calls
- **Method**: Sends data without checking if received

## Ping and Traceroute
Basic network testing tools:

### Ping
- **Purpose**: Tests if device is reachable
- **Method**: Sends small packet and waits for reply
- **Result**: Shows response time and success rate

### Traceroute
- **Purpose**: Shows path data takes through network
- **Method**: Traces route to destination
- **Use**: Troubleshooting connection problems

## Basic Network Configuration
Simple setup steps for devices:
1. **Obtain IP Address**: Automatic (DHCP) or manual
2. **Set Subnet Mask**: Usually provided with IP address
3. **Configure Gateway**: Router's IP address
4. **Set DNS Server**: ISP's or public DNS server address`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is an IP address?",
          options: [
            "Internet password",
            "Unique identifier for devices on network",
            "Network cable type",
            "Wireless signal strength"
          ],
          correctAnswer: 1,
          explanation: "An IP address is a unique identifier assigned to each device on a network, similar to a mailing address."
        },
        {
          id: 2,
          question: "What is the format of an IPv4 address?",
          options: [
            "Eight groups of hexadecimal numbers",
            "Four numbers separated by dots",
            "Two letters and six numbers",
            "Ten-digit number"
          ],
          correctAnswer: 1,
          explanation: "IPv4 addresses consist of four numbers (0-255) separated by dots, like 192.168.1.1."
        },
        {
          id: 3,
          question: "Who assigns public IP addresses?",
          options: [
            "Device manufacturer",
            "Internet Service Provider",
            "Computer user",
            "Router automatically"
          ],
          correctAnswer: 1,
          explanation: "Internet Service Providers (ISPs) assign public IP addresses to their customers."
        },
        {
          id: 4,
          question: "What is a common private IP address range?",
          options: [
            "100.100.0.0 to 100.100.255.255",
            "192.168.0.0 to 192.168.255.255",
            "200.200.0.0 to 200.200.255.255",
            "300.168.0.0 to 300.168.255.255"
          ],
          correctAnswer: 1,
          explanation: "192.168.0.0 to 192.168.255.255 is one of the common ranges reserved for private networks."
        },
        {
          id: 5,
          question: "What does DHCP do?",
          options: [
            "Protects from viruses",
            "Automatically assigns IP addresses",
            "Increases internet speed",
            "Creates wireless networks"
          ],
          correctAnswer: 1,
          explanation: "DHCP automatically assigns IP addresses to devices on a network, eliminating manual configuration."
        },
        {
          id: 6,
          question: "What does DNS translate?",
          options: [
            "Languages on websites",
            "Domain names to IP addresses",
            "Wireless to wired signals",
            "Analog to digital signals"
          ],
          correctAnswer: 1,
          explanation: "DNS translates human-readable domain names (like www.example.com) to IP addresses that computers use."
        },
        {
          id: 7,
          question: "What protocol ensures reliable data delivery?",
          options: [
            "UDP",
            "TCP",
            "HTTP",
            "FTP"
          ],
          correctAnswer: 1,
          explanation: "TCP ensures reliable data delivery by establishing connections and verifying data arrives complete and in order."
        },
        {
          id: 8,
          question: "What does ping test?",
          options: [
            "Internet download speed",
            "If device is reachable on network",
            "Wireless signal strength",
            "Router configuration"
          ],
          correctAnswer: 1,
          explanation: "Ping tests whether a device is reachable on the network and measures response time."
        },
        {
          id: 9,
          question: "What is the purpose of a subnet mask?",
          options: [
            "Hide IP addresses",
            "Define network and device parts of IP address",
            "Increase internet speed",
            "Encrypt network data"
          ],
          correctAnswer: 1,
          explanation: "A subnet mask defines which portion of an IP address identifies the network and which identifies the device."
        },
        {
          id: 10,
          question: "What protocol is faster but less reliable than TCP?",
          options: [
            "HTTP",
            "UDP",
            "FTP",
            "SMTP"
          ],
          correctAnswer: 1,
          explanation: "UDP is faster than TCP because it doesn't establish connections or verify delivery, making it less reliable."
        },
        {
          id: 11,
          question: "What does IPv6 provide more of than IPv4?",
          options: [
            "Speed",
            "Addresses",
            "Security",
            "Compatibility"
          ],
          correctAnswer: 1,
          explanation: "IPv6 provides vastly more addresses than IPv4 to accommodate the growing number of internet-connected devices."
        },
        {
          id: 12,
          question: "What shows the path data takes through network?",
          options: [
            "Ping",
            "Traceroute",
            "DNS",
            "DHCP"
          ],
          correctAnswer: 1,
          explanation: "Traceroute shows the path (route) that data packets take from source to destination through the network."
        },
        {
          id: 13,
          question: "What is the gateway in network configuration?",
          options: [
            "Firewall device",
            "Router's IP address",
            "Internet speed",
            "Wireless password"
          ],
          correctAnswer: 1,
          explanation: "The gateway is typically the router's IP address, which devices use to send data outside their local network."
        },
        {
          id: 14,
          question: "What range can each number in IPv4 address have?",
          options: [
            "0-100",
            "0-255",
            "1-999",
            "0-1024"
          ],
          correctAnswer: 1,
          explanation: "Each number in an IPv4 address can range from 0 to 255, representing 8 bits of data."
        },
        {
          id: 15,
          question: "What is automatic IP address assignment called?",
          options: [
            "DNS",
            "DHCP",
            "TCP",
            "UDP"
          ],
          correctAnswer: 1,
          explanation: "DHCP (Dynamic Host Configuration Protocol) provides automatic IP address assignment."
        },
        {
          id: 16,
          question: "What does a device request from DHCP server?",
          options: [
            "Internet content",
            "IP address and configuration",
            "Software updates",
            "Security certificates"
          ],
          correctAnswer: 1,
          explanation: "Devices request IP addresses and network configuration information from DHCP servers."
        },
        {
          id: 17,
          question: "Why are private IP addresses not unique globally?",
          options: [
            "They are randomly generated",
            "Same ranges used in many private networks",
            "They change every minute",
            "They are encrypted differently"
          ],
          correctAnswer: 1,
          explanation: "Private IP address ranges are reused in many separate private networks since they don't need to be unique globally."
        },
        {
          id: 18,
          question: "What does TCP establish before sending data?",
          options: [
            "Security encryption",
            "Connection between devices",
            "Wireless channel",
            "User account"
          ],
          correctAnswer: 1,
          explanation: "TCP establishes a connection between devices before sending data to ensure reliable communication."
        },
        {
          id: 19,
          question: "What uses UDP for better performance?",
          options: [
            "Email",
            "Video streaming",
            "Web browsing",
            "File downloads"
          ],
          correctAnswer: 1,
          explanation: "Video streaming uses UDP because speed and continuous flow are more important than perfect reliability."
        },
        {
          id: 20,
          question: "What is the first configuration step for network device?",
          options: [
            "Set DNS server",
            "Obtain IP address",
            "Configure firewall",
            "Update software"
          ],
          correctAnswer: 1,
          explanation: "The first step is obtaining an IP address, either automatically through DHCP or manually."
        }
      ]
    },
    {
      id: 4,
      title: "Wireless Networking",
      content: `# Module 4: Wireless Networking

## Understanding Wireless Networks
Wireless networks use radio waves instead of cables to connect devices. This provides mobility and flexibility but requires different considerations than wired networks.

## Wi-Fi Standards
Different Wi-Fi standards offer different speeds and features:

### Common Wi-Fi Standards
- **802.11b** - Older, slower (11 Mbps)
- **802.11g** - Improved speed (54 Mbps)
- **802.11n** (Wi-Fi 4) - Faster, better range (150-600 Mbps)
- **802.11ac** (Wi-Fi 5) - Current common standard (up to 1.3 Gbps)
- **802.11ax** (Wi-Fi 6) - Latest standard, best performance

## Frequency Bands
Wi-Fi operates on different frequency bands:

### 2.4 GHz Band
- **Range**: Better at penetrating walls and obstacles
- **Speed**: Generally slower than 5 GHz
- **Congestion**: More devices use this band (microwaves, Bluetooth)
- **Channels**: 11-14 channels (varies by country)

### 5 GHz Band
- **Range**: Shorter range, more affected by obstacles
- **Speed**: Generally faster than 2.4 GHz
- **Congestion**: Fewer devices, less interference
- **Channels**: More available channels

## Wireless Security
Protecting wireless networks is essential:

### Security Protocols
- **WEP** - Old, weak, not recommended
- **WPA** - Better than WEP but outdated
- **WPA2** - Current standard, strong security
- **WPA3** - Latest standard, strongest security

### Basic Security Practices
1. **Strong Password** - Use complex wireless password
2. **Change Defaults** - Modify router admin credentials
3. **Network Name** - Consider not broadcasting SSID
4. **Firmware Updates** - Keep router software current
5. **Guest Network** - Separate network for visitors

## Wireless Access Point Setup
Basic steps to set up wireless network:

### Physical Setup
1. **Placement** - Central location, elevated position
2. **Antennas** - Position properly (usually vertical)
3. **Interference** - Away from microwave ovens, cordless phones
4. **Power** - Connect to power source

### Configuration Steps
1. **Access Router** - Use web browser to access settings
2. **Set SSID** - Choose network name
3. **Select Security** - Choose WPA2 or WPA3
4. **Set Password** - Create strong wireless password
5. **Save Settings** - Apply and restart if needed

## Signal Strength and Coverage
Factors affecting wireless performance:

### Signal Strength Factors
- **Distance** - Signal weakens with distance
- **Obstacles** - Walls, floors, furniture reduce signal
- **Interference** - Other devices using same frequencies
- **Antenna Type** - Different antennas have different patterns

### Improving Coverage
- **Central Placement** - Position access point centrally
- **Elevate Device** - Place on shelf or wall mount
- **Reduce Obstacles** - Minimize walls and metal between devices
- **Add Access Points** - Additional units for large areas

## Connecting Wireless Devices
Steps to connect devices to wireless network:

### Connection Process
1. **Enable Wi-Fi** - Turn on wireless on device
2. **Scan Networks** - View available wireless networks
3. **Select Network** - Choose your network by name (SSID)
4. **Enter Password** - Type wireless security password
5. **Test Connection** - Verify internet access works

### Troubleshooting Connections
- **Check Password** - Ensure correct password entered
- **Restart Device** - Turn Wi-Fi off and on
- **Restart Router** - Power cycle wireless router
- **Check Distance** - Move closer to access point
- **Update Drivers** - Update device wireless drivers

## Mobile Hotspots
Using smartphones as wireless access points:

### Hotspot Features
- **Portable Internet** - Internet access anywhere with cellular signal
- **Device Sharing** - Multiple devices can connect
- **Security Options** - Password protection available
- **Data Limits** - Subject to cellular data plans

### Setting Up Hotspot
1. **Enable Feature** - Turn on mobile hotspot in settings
2. **Configure Settings** - Set network name and password
3. **Connect Devices** - Other devices connect like regular Wi-Fi
4. **Monitor Usage** - Watch data consumption

## Basic Wireless Troubleshooting
Common problems and solutions:

### No Connection
- **Check Power** - Ensure router is powered on
- **Verify Settings** - Confirm correct network name and password
- **Check Service** - Verify internet service is working

### Slow Speed
- **Test Wired Speed** - Compare with wired connection
- **Check Interference** - Move away from interfering devices
- **Change Channel** - Switch to less crowded channel
- **Update Equipment** - Older equipment may limit speed

### Intermittent Connection
- **Update Firmware** - Install latest router updates
- **Check for Overheating** - Ensure router has proper ventilation
- **Reduce Connected Devices** - Too many devices can strain network`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do wireless networks use instead of cables?",
          options: [
            "Sound waves",
            "Radio waves",
            "Light beams",
            "Electric currents"
          ],
          correctAnswer: 1,
          explanation: "Wireless networks use radio waves to transmit data between devices without physical cables."
        },
        {
          id: 2,
          question: "What is the current common Wi-Fi standard?",
          options: [
            "802.11b",
            "802.11ac (Wi-Fi 5)",
            "802.11g",
            "802.11a"
          ],
          correctAnswer: 1,
          explanation: "802.11ac (marketed as Wi-Fi 5) is the current common standard offering good speed and performance."
        },
        {
          id: 3,
          question: "Which frequency band has better wall penetration?",
          options: [
            "5 GHz",
            "2.4 GHz",
            "900 MHz",
            "60 GHz"
          ],
          correctAnswer: 1,
          explanation: "The 2.4 GHz band has better penetration through walls and obstacles compared to 5 GHz."
        },
        {
          id: 4,
          question: "What wireless security protocol is currently recommended?",
          options: [
            "WEP",
            "WPA2 or WPA3",
            "No security",
            "WPA"
          ],
          correctAnswer: 1,
          explanation: "WPA2 is the current standard, and WPA3 is the latest and most secure wireless security protocol."
        },
        {
          id: 5,
          question: "What does SSID refer to?",
          options: [
            "Signal strength",
            "Wireless network name",
            "Security protocol",
            "Router model"
          ],
          correctAnswer: 1,
          explanation: "SSID (Service Set Identifier) is the name of a wireless network that devices see when scanning."
        },
        {
          id: 6,
          question: "Where should a wireless router be placed?",
          options: [
            "In a closed cabinet",
            "Central location, elevated position",
            "Basement corner",
            "Behind metal furniture"
          ],
          correctAnswer: 1,
          explanation: "Central, elevated placement provides the best wireless coverage throughout the area."
        },
        {
          id: 7,
          question: "What weakens wireless signal?",
          options: [
            "Open spaces",
            "Walls and obstacles",
            "Being close to router",
            "Small network size"
          ],
          correctAnswer: 1,
          explanation: "Walls, floors, and other obstacles weaken wireless signals as they pass through materials."
        },
        {
          id: 8,
          question: "What is the first step to connect to wireless network?",
          options: [
            "Enter password",
            "Enable Wi-Fi on device",
            "Restart device",
            "Update software"
          ],
          correctAnswer: 1,
          explanation: "First, enable Wi-Fi on the device to begin scanning for available networks."
        },
        {
          id: 9,
          question: "What can create a mobile hotspot?",
          options: [
            "Desktop computer",
            "Smartphone",
            "Printer",
            "Monitor"
          ],
          correctAnswer: 1,
          explanation: "Smartphones can create mobile hotspots to share cellular internet with other devices via Wi-Fi."
        },
        {
          id: 10,
          question: "What is a basic wireless security practice?",
          options: [
            "Use simple password",
            "Change default router credentials",
            "Broadcast SSID loudly",
            "Use WEP security"
          ],
          correctAnswer: 1,
          explanation: "Changing default router credentials prevents unauthorized access to router settings."
        },
        {
          id: 11,
          question: "Which band generally offers faster speeds?",
          options: [
            "2.4 GHz",
            "5 GHz",
            "Both are equal",
            "Neither has speed"
          ],
          correctAnswer: 1,
          explanation: "The 5 GHz band generally offers faster data speeds than the 2.4 GHz band."
        },
        {
          id: 12,
          question: "What should you do if wireless connection is slow?",
          options: [
            "Buy new internet plan",
            "Check for interference and change channel",
            "Use longer password",
            "Turn off all devices"
          ],
          correctAnswer: 1,
          explanation: "Checking for interference from other devices and changing to a less crowded channel can improve speed."
        },
        {
          id: 13,
          question: "What does WPA stand for?",
          options: [
            "Wireless Protected Access",
            "Wi-Fi Protected Access",
            "Wireless Privacy Agreement",
            "Wi-Fi Public Access"
          ],
          correctAnswer: 1,
          explanation: "WPA stands for Wi-Fi Protected Access, a security protocol for wireless networks."
        },
        {
          id: 14,
          question: "Why use guest network feature?",
          options: [
            "To increase speed",
            "Separate visitors from main network",
            "To hide network completely",
            "To save electricity"
          ],
          correctAnswer: 1,
          explanation: "Guest networks provide internet access to visitors while keeping them separate from your main network and devices."
        },
        {
          id: 15,
          question: "What can interfere with 2.4 GHz Wi-Fi?",
          options: [
            "Sunlight",
            "Microwave ovens",
            "LED lights",
            "Bookshelves"
          ],
          correctAnswer: 1,
          explanation: "Microwave ovens operate at 2.4 GHz and can interfere with Wi-Fi signals on the same frequency."
        },
        {
          id: 16,
          question: "What is Wi-Fi 6?",
          options: [
            "802.11ac",
            "802.11ax",
            "802.11n",
            "802.11g"
          ],
          correctAnswer: 1,
          explanation: "Wi-Fi 6 is the marketing name for the 802.11ax wireless standard, the latest generation."
        },
        {
          id: 17,
          question: "How can you improve wireless coverage?",
          options: [
            "Place router in corner",
            "Add additional access points",
            "Use shorter passwords",
            "Turn off security"
          ],
          correctAnswer: 1,
          explanation: "Adding additional access points (extenders or additional routers) can improve coverage in large areas."
        },
        {
          id: 18,
          question: "What should you check if no devices can connect?",
          options: [
            "Device batteries",
            "Router power and service",
            "Monitor resolution",
            "Keyboard connections"
          ],
          correctAnswer: 1,
          explanation: "Check that the router has power and that internet service is working from the provider."
        },
        {
          id: 19,
          question: "What is benefit of not broadcasting SSID?",
          options: [
            "Faster speeds",
            "Network less visible to casual scanners",
            "Better range",
            "Automatic connections"
          ],
          correctAnswer: 1,
          explanation: "Not broadcasting the SSID makes the network less visible to people casually scanning for Wi-Fi networks."
        },
        {
          id: 20,
          question: "What to do for intermittent connections?",
          options: [
            "Ignore the problem",
            "Update router firmware",
            "Buy new devices",
            "Use wired connection only"
          ],
          correctAnswer: 1,
          explanation: "Updating router firmware can fix bugs and improve stability for intermittent connections."
        }
      ]
    },
    {
      id: 5,
      title: "Network Troubleshooting Basics",
      content: `# Module 5: Network Troubleshooting Basics

## Understanding Network Problems
Network issues can range from simple connection problems to complex configuration errors. Systematic troubleshooting helps identify and fix problems efficiently.

## Troubleshooting Methodology
Follow these steps for effective troubleshooting:

### Step 1: Identify the Problem
- **Gather Information** - What exactly isn't working?
- **Determine Scope** - Is it one device or all devices?
- **Note Symptoms** - Error messages, lights, behavior changes
- **Reproduce Issue** - Can you make problem happen again?

### Step 2: Establish Theory
- **Consider Common Causes** - Start with most likely issues
- **Check Basics First** - Power, connections, simple settings
- **Divide and Conquer** - Test different parts separately

### Step 3: Test Theory
- **Make One Change** - Change only one thing at a time
- **Test After Each Change** - See if problem is fixed
- **Document Results** - Keep notes of what you tried

### Step 4: Implement Solution
- **Apply Fix** - Make the change that solved problem
- **Verify Resolution** - Confirm problem is completely fixed
- **Prevent Recurrence** - Address underlying cause if possible

### Step 5: Document Everything
- **Record Problem** - What was the issue?
- **Document Solution** - How was it fixed?
- **Note Time Taken** - How long did troubleshooting take?
- **Share Knowledge** - Help others with similar problems

## Common Network Problems

### No Internet Access
- **Check Router** - Is router powered on and working?
- **Verify Service** - Is internet service active from provider?
- **Test Direct Connection** - Connect computer directly to modem
- **Check Account Status** - Is bill paid? Any service outages?

### Slow Internet Speed
- **Test Wired Speed** - Compare with wireless speed
- **Check Multiple Devices** - Is problem with one device or all?
- **Test Different Times** - Compare speeds at different times
- **Contact Provider** - Check for service issues in area

### Intermittent Connections
- **Check Cables** - Are cables securely connected?
- **Test Different Ports** - Try different router ports
- **Monitor Signal Strength** - For wireless issues
- **Check for Interference** - Other devices causing problems

### Device Cannot Connect
- **Verify Credentials** - Correct network name and password?
- **Check IP Address** - Does device have valid IP address?
- **Test Other Networks** - Can device connect elsewhere?
- **Update Drivers** - Are network drivers current?

## Basic Troubleshooting Tools

### Ping
- **Purpose**: Test connectivity to another device
- **Command**: ping [IP address or hostname]
- **Interpretation**: Reply shows connection is working
- **No Reply**: Indicates connectivity problem

### Ipconfig (Windows) / ifconfig (Mac/Linux)
- **Purpose**: Show network configuration
- **Information**: IP address, subnet mask, gateway, DNS
- **Use**: Verify device has correct network settings
- **Release/Renew**: Get new IP address from DHCP

### Tracert (Windows) / Traceroute (Mac/Linux)
- **Purpose**: Trace path to destination
- **Use**: Identify where connection fails
- **Information**: Shows each hop and response time
- **Analysis**: Long delays indicate problem points

### Network Status Lights
- **Router Lights**: Show power, internet, wireless status
- **Device Lights**: Show network adapter activity
- **Pattern Recognition**: Learn normal vs problem light patterns
- **Documentation**: Check device manuals for light meanings

## Physical Connection Checks

### Cable Inspection
- **Visual Check**: Look for damage, bends, cuts
- **Connection Check**: Ensure cables fully inserted
- **Swap Test**: Try different cable if available
- **Port Test**: Try different port on router/switch

### Power Checks
- **Power Lights**: Are devices receiving power?
- **Power Cycle**: Turn off, wait 30 seconds, turn on
- **Power Source**: Check power outlets and cables
- **Overheating**: Feel devices for excessive heat

## Configuration Issues

### IP Address Problems
- **No IP Address**: Device not getting address from DHCP
- **Wrong IP Range**: Address not in correct network range
- **IP Conflict**: Two devices with same IP address
- **Solution**: Renew DHCP or set manual address

### DNS Issues
- **Cannot Resolve Names**: DNS not working
- **Slow Resolution**: DNS server problems
- **Solution**: Change DNS server address
- **Test**: Try accessing by IP address instead of name

## When to Seek Help
Recognize when problem needs professional assistance:

### Signs You Need Help
- **Complex Configuration**: Beyond basic setup
- **Hardware Failure**: Physical damage to equipment
- **Service Provider Issues**: Problems with internet service
- **Security Breach**: Suspected unauthorized access
- **Time Constraints**: Problem taking too long to solve

### Information to Gather Before Calling
- **Account Details**: Service provider account information
- **Equipment Details**: Make and model of devices
- **Problem Description**: What happens, error messages
- **Troubleshooting Steps**: What you've already tried
- **Timing Information**: When problem started, frequency`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in troubleshooting?",
          options: [
            "Implement solution",
            "Identify the problem",
            "Call for help",
            "Replace equipment"
          ],
          correctAnswer: 1,
          explanation: "The first step is identifying exactly what problem is occurring, when it happens, and what devices are affected."
        },
        {
          id: 2,
          question: "What should you change when testing theories?",
          options: [
            "Everything at once",
            "One thing at a time",
            "Nothing, just observe",
            "Only hardware components"
          ],
          correctAnswer: 1,
          explanation: "Change only one thing at a time so you can identify exactly what fixes the problem."
        },
        {
          id: 3,
          question: "What tool tests connectivity to another device?",
          options: [
            "Ipconfig",
            "Ping",
            "Traceroute",
            "Netstat"
          ],
          correctAnswer: 1,
          explanation: "Ping tests connectivity by sending small packets to another device and waiting for replies."
        },
        {
          id: 4,
          question: "What is power cycling?",
          options: [
            "Changing power source",
            "Turning off, waiting, turning on",
            "Upgrading power supply",
            "Measuring power consumption"
          ],
          correctAnswer: 1,
          explanation: "Power cycling means turning a device off, waiting about 30 seconds, then turning it back on to clear temporary issues."
        },
        {
          id: 5,
          question: "What should you check first for no internet access?",
          options: [
            "Computer operating system",
            "Router power and status",
            "Website coding",
            "User passwords"
          ],
          correctAnswer: 1,
          explanation: "First check if the router is powered on and has normal status lights before investigating other issues."
        },
        {
          id: 6,
          question: "What command shows network configuration?",
          options: [
            "ping",
            "ipconfig or ifconfig",
            "tracert",
            "netstat"
          ],
          correctAnswer: 1,
          explanation: "ipconfig (Windows) or ifconfig (Mac/Linux) shows current network configuration including IP address."
        },
        {
          id: 7,
          question: "What does intermittent connection mean?",
          options: [
            "Very fast connection",
            "Connection that works sometimes, not others",
            "Connection to multiple networks",
            "Wireless only connection"
          ],
          correctAnswer: 1,
          explanation: "Intermittent connections work sometimes but disconnect or fail at other times unpredictably."
        },
        {
          id: 8,
          question: "Why document troubleshooting steps?",
          options: [
            "To fill time",
            "To track what was tried and share knowledge",
            "Because supervisor requires it",
            "To make notes look professional"
          ],
          correctAnswer: 1,
          explanation: "Documentation helps track what was tried, prevents repeating steps, and shares knowledge for future issues."
        },
        {
          id: 9,
          question: "What tool traces path to destination?",
          options: [
            "Ping",
            "Traceroute or tracert",
            "Ipconfig",
            "Nslookup"
          ],
          correctAnswer: 1,
          explanation: "Traceroute (tracert on Windows) shows the path data takes through the network to reach a destination."
        },
        {
          id: 10,
          question: "What should you check for slow internet?",
          options: [
            "Only computer speed",
            "Wired vs wireless comparison",
            "Monitor resolution",
            "Keyboard response"
          ],
          correctAnswer: 1,
          explanation: "Comparing wired and wireless speeds helps determine if the problem is with the internet service or the wireless connection."
        },
        {
          id: 11,
          question: "What is an IP conflict?",
          options: [
            "Two networks with same name",
            "Two devices with same IP address",
            "IP address doesn't match subnet",
            "No IP address assigned"
          ],
          correctAnswer: 1,
          explanation: "An IP conflict occurs when two devices on the same network have been assigned the same IP address."
        },
        {
          id: 12,
          question: "What might DNS issues cause?",
          options: [
            "No power to devices",
            "Cannot resolve website names",
            "Slow typing speed",
            "Monitor flickering"
          ],
          correctAnswer: 1,
          explanation: "DNS issues prevent devices from translating domain names (like www.example.com) to IP addresses."
        },
        {
          id: 13,
          question: "When should you seek professional help?",
          options: [
            "For any problem",
            "When problem is beyond basic troubleshooting",
            "Never, always fix yourself",
            "Only for hardware purchases"
          ],
          correctAnswer: 1,
          explanation: "Seek help when problems are complex, involve hardware failure, or when basic troubleshooting hasn't worked."
        },
        {
          id: 14,
          question: "What to check for device connection problems?",
          options: [
            "Monitor brightness",
            "Network credentials and IP address",
            "Mouse battery",
            "Desktop background"
          ],
          correctAnswer: 1,
          explanation: "Check that the device has correct network name, password, and a valid IP address when connection problems occur."
        },
        {
          id: 15,
          question: "What information helps when calling for help?",
          options: [
            "Favorite color",
            "Account details and problem description",
            "Computer game scores",
            "Screen saver choice"
          ],
          correctAnswer: 1,
          explanation: "Having account details, equipment information, and a clear problem description helps support personnel assist you."
        },
        {
          id: 16,
          question: "What does 'divide and conquer' mean in troubleshooting?",
          options: [
            "Give up on problem",
            "Test different parts separately",
            "Break equipment apart",
            "Share problem with many people"
          ],
          correctAnswer: 1,
          explanation: "Divide and conquer means testing different components or sections separately to isolate where the problem lies."
        },
        {
          id: 17,
          question: "What might cause intermittent wireless?",
          options: [
            "Strong password",
            "Interference from other devices",
            "Wired connection",
            "Small network size"
          ],
          correctAnswer: 1,
          explanation: "Interference from other wireless devices, microwaves, or cordless phones can cause intermittent wireless connections."
        },
        {
          id: 18,
          question: "How test if problem is with one device or all?",
          options: [
            "Restart all devices",
            "Check multiple devices",
            "Buy new equipment",
            "Ignore the problem"
          ],
          correctAnswer: 1,
          explanation: "Testing with multiple devices helps determine if the problem affects just one device or the entire network."
        },
        {
          id: 19,
          question: "What do network status lights indicate?",
          options: [
            "Time of day",
            "Device status and activity",
            "Internet speed",
            "Data usage amount"
          ],
          correctAnswer: 1,
          explanation: "Status lights on network devices show power, connectivity, activity, and other status information."
        },
        {
          id: 20,
          question: "What is final troubleshooting step?",
          options: [
            "Forget the problem",
            "Document everything",
            "Celebrate immediately",
            "Change all settings"
          ],
          correctAnswer: 1,
          explanation: "Documenting the problem and solution completes the troubleshooting process and helps with future issues."
        }
      ]
    },
    {
      id: 6,
      title: "Network Security Fundamentals",
      content: `# Module 6: Network Security Fundamentals

## Understanding Network Security
Network security protects data, devices, and network resources from unauthorized access, misuse, or attacks. Basic security practices are essential for all networks.

## Common Security Threats

### Malware
- **Viruses** - Programs that infect and damage systems
- **Worms** - Self-replicating malware spreading through networks
- **Trojan Horses** - Malicious software disguised as legitimate
- **Ransomware** - Locks systems until payment is made

### Unauthorized Access
- **Hacking** - Gaining unauthorized network access
- **Eavesdropping** - Intercepting network communications
- **Physical Access** - Physical tampering with equipment
- **Social Engineering** - Tricking people into revealing information

### Denial of Service (DoS)
- **Flood Attacks** - Overwhelming network with traffic
- **Resource Exhaustion** - Consuming all available resources
- **Impact**: Makes network unavailable to legitimate users

## Basic Security Principles

### CIA Triad
- **Confidentiality** - Keeping data private and secure
- **Integrity** - Ensuring data is accurate and unchanged
- **Availability** - Making sure data and systems are accessible when needed

### Defense in Depth
- **Multiple Layers** - Several security measures working together
- **Not Relying on One** - If one layer fails, others provide protection
- **Examples**: Firewall, antivirus, user training, physical security

## Essential Security Measures

### Strong Passwords
- **Length** - At least 12 characters minimum
- **Complexity** - Mix of letters, numbers, symbols
- **Uniqueness** - Different passwords for different accounts
- **Management** - Use password manager if needed

### Software Updates
- **Operating Systems** - Regular security updates
- **Applications** - Update all software regularly
- **Firmware** - Update router and device firmware
- **Automatic Updates** - Enable when possible

### Firewall Protection
- **Hardware Firewall** - Built into router or separate device
- **Software Firewall** - On individual computers
- **Function** - Controls incoming and outgoing traffic
- **Default Rule** - Block all, allow only what's needed

### Antivirus/Antimalware
- **Real-time Protection** - Continuous monitoring
- **Regular Scans** - Scheduled full system scans
- **Updates** - Keep virus definitions current
- **Multiple Layers** - Consider additional malware protection

## Wireless Security

### Encryption Standards
- **WPA3** - Latest, most secure (use if available)
- **WPA2** - Current standard, secure
- **Avoid**: WEP and WPA (outdated and insecure)

### Secure Configuration
- **Strong Password** - Complex wireless network password
- **Network Name** - Consider not broadcasting SSID
- **Guest Network** - Separate network for visitors
- **MAC Filtering** - Restrict which devices can connect

## Physical Security

### Device Protection
- **Secure Location** - Keep equipment in locked areas when possible
- **Cable Locks** - Prevent theft of portable devices
- **Access Control** - Limit who can physically access equipment
- **Surveillance** - Consider cameras for critical areas

### Portable Device Security
- **Encryption** - Encrypt laptop and mobile device storage
- **Remote Wipe** - Ability to erase data if device lost/stolen
- **Screen Locks** - Password/PIN to access devices
- **Tracking Software** - Help locate lost devices

## User Awareness and Training

### Social Engineering Protection
- **Phishing Awareness** - Recognize suspicious emails
- **Verification** - Verify requests for sensitive information
- **Skepticism** - Question unexpected requests
- **Reporting** - Know how to report suspicious activity

### Safe Browsing Habits
- **HTTPS** - Look for secure website connections
- **Download Caution** - Only from trusted sources
- **Pop-up Awareness** - Don't click suspicious pop-ups
- **Public Wi-Fi Caution** - Be careful on open networks

## Backup and Recovery

### Regular Backups
- **Frequency** - Regular schedule (daily/weekly)
- **Multiple Copies** - Different locations/media
- **Test Restores** - Periodically verify backups work
- **Automation** - Use automated backup tools

### Disaster Recovery
- **Plan Development** - What to do if security incident occurs
- **Contact Information** - Who to notify for different issues
- **Recovery Steps** - How to restore systems and data
- **Practice Drills** - Test recovery procedures

## Basic Monitoring

### What to Monitor
- **Unauthorized Access Attempts** - Failed login attempts
- **Unusual Activity** - Strange network traffic patterns
- **System Logs** - Review security-related logs
- **Physical Access** - Monitor equipment access

### Response Planning
- **Incident Response** - Steps to take if breach occurs
- **Containment** - Isolate affected systems
- **Investigation** - Determine what happened
- **Recovery** - Restore normal operations
- **Improvement** - Learn and improve security`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does network security protect?",
          options: [
            "Only internet speed",
            "Data, devices, and network resources",
            "Only physical cables",
            "Only wireless signals"
          ],
          correctAnswer: 1,
          explanation: "Network security protects data confidentiality, device integrity, and network availability from various threats."
        },
        {
          id: 2,
          question: "What is malware that locks systems until payment?",
          options: [
            "Virus",
            "Ransomware",
            "Worm",
            "Trojan Horse"
          ],
          correctAnswer: 1,
          explanation: "Ransomware encrypts or locks systems and demands payment to restore access."
        },
        {
          id: 3,
          question: "What does CIA in security stand for?",
          options: [
            "Central Intelligence Agency",
            "Confidentiality, Integrity, Availability",
            "Computer Internet Access",
            "Cyber Investigation Agency"
          ],
          correctAnswer: 1,
          explanation: "In security, CIA stands for Confidentiality (privacy), Integrity (accuracy), and Availability (accessibility)."
        },
        {
          id: 4,
          question: "What is defense in depth?",
          options: [
            "Single strong password",
            "Multiple security layers working together",
            "Very deep firewall settings",
            "Hidden network equipment"
          ],
          correctAnswer: 1,
          explanation: "Defense in depth uses multiple security measures so if one fails, others still provide protection."
        },
        {
          id: 5,
          question: "What is minimum recommended password length?",
          options: [
            "6 characters",
            "12 characters",
            "8 characters",
            "4 characters"
          ],
          correctAnswer: 1,
          explanation: "Modern security recommendations suggest passwords of at least 12 characters for better security."
        },
        {
          id: 6,
          question: "Why are software updates important?",
          options: [
            "Make software look newer",
            "Fix security vulnerabilities",
            "Increase program speed only",
            "Change user interface"
          ],
          correctAnswer: 1,
          explanation: "Software updates often include security patches that fix vulnerabilities discovered since the last version."
        },
        {
          id: 7,
          question: "What does a firewall do?",
          options: [
            "Increase internet speed",
            "Control network traffic flow",
            "Store backup files",
            "Manage user passwords"
          ],
          correctAnswer: 1,
          explanation: "A firewall controls incoming and outgoing network traffic based on security rules."
        },
        {
          id: 8,
          question: "What wireless encryption should you use?",
          options: [
            "WEP",
            "WPA2 or WPA3",
            "No encryption",
            "WPA"
          ],
          correctAnswer: 1,
          explanation: "WPA2 is the current standard, and WPA3 is the latest and most secure wireless encryption."
        },
        {
          id: 9,
          question: "What is social engineering?",
          options: [
            "Building social networks",
            "Tricking people to reveal information",
            "Engineering social media",
            "Designing network layouts"
          ],
          correctAnswer: 1,
          explanation: "Social engineering manipulates people into revealing confidential information or performing actions."
        },
        {
          id: 10,
          question: "Why make regular backups?",
          options: [
            "To save disk space",
            "To protect against data loss",
            "To increase computer speed",
            "To organize files better"
          ],
          correctAnswer: 1,
          explanation: "Regular backups protect against data loss from hardware failure, malware, accidents, or other problems."
        },
        {
          id: 11,
          question: "What is a DoS attack?",
          options: [
            "Stealing data",
            "Making network unavailable",
            "Installing malware",
            "Changing passwords"
          ],
          correctAnswer: 1,
          explanation: "Denial of Service (DoS) attacks overwhelm networks or systems to make them unavailable to legitimate users."
        },
        {
          id: 12,
          question: "What should you enable for public Wi-Fi?",
          options: [
            "File sharing",
            "Extra caution and VPN if possible",
            "Automatic connections",
            "Remote access"
          ],
          correctAnswer: 1,
          explanation: "Public Wi-Fi requires extra caution, and using a VPN can provide additional security for your data."
        },
        {
          id: 13,
          question: "What does antivirus software need?",
          options: [
            "Regular definition updates",
            "Large screen display",
            "Fast processor only",
            "Lots of memory"
          ],
          correctAnswer: 0,
          explanation: "Antivirus software needs regular updates to its virus definitions to recognize new threats."
        },
        {
          id: 14,
          question: "What is phishing?",
          options: [
            "Fishing for compliments",
            "Fraudulent attempts to get sensitive information",
            "Testing network speed",
            "Physical security check"
          ],
          correctAnswer: 1,
          explanation: "Phishing uses fraudulent emails or messages that appear legitimate to trick people into revealing sensitive information."
        },
        {
          id: 15,
          question: "Why use guest network feature?",
          options: [
            "For faster internet",
            "To separate visitors from main network",
            "To hide main network",
            "To save electricity"
          ],
          correctAnswer: 1,
          explanation: "Guest networks keep visitors separated from your main network and connected devices for security."
        },
        {
          id: 16,
          question: "What should you test periodically?",
          options: [
            "Internet speed only",
            "Backup restores",
            "Monitor colors",
            "Keyboard response"
          ],
          correctAnswer: 1,
          explanation: "Periodically testing backup restores ensures your backups actually work when needed."
        },
        {
          id: 17,
          question: "What is physical security for devices?",
          options: [
            "Strong passwords",
            "Locking equipment in secure locations",
            "Firewall settings",
            "Antivirus software"
          ],
          correctAnswer: 1,
          explanation: "Physical security includes locking equipment in secure areas to prevent unauthorized physical access."
        },
        {
          id: 18,
          question: "What does HTTPS indicate?",
          options: [
            "Fast website",
            "Secure website connection",
            "High traffic site",
            "Official government site"
          ],
          correctAnswer: 1,
          explanation: "HTTPS indicates a secure, encrypted connection between your browser and the website."
        },
        {
          id: 19,
          question: "What should incident response include?",
          options: [
            "Ignoring the problem",
            "Containment, investigation, recovery",
            "Only calling police",
            "Shutting down everything"
          ],
          correctAnswer: 1,
          explanation: "Incident response should include containing the problem, investigating what happened, and recovering systems."
        },
        {
          id: 20,
          question: "Why monitor network activity?",
          options: [
            "To spy on users",
            "To detect unusual or unauthorized activity",
            "To increase internet speed",
            "To reduce costs"
          ],
          correctAnswer: 1,
          explanation: "Monitoring helps detect unusual patterns that might indicate security problems or unauthorized access attempts."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all 6 modules)
  finalExam: {
    title: "Networking Certificate Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Networking Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is computer networking?",
        options: [
          "Programming computers",
          "Connecting devices to share resources",
          "Building computer hardware",
          "Creating software applications"
        ],
        correctAnswer: 1,
        explanation: "Computer networking involves connecting devices to share resources, exchange information, and communicate."
      },
      {
        id: 2,
        question: "What device connects different networks?",
        options: [
          "Switch",
          "Router",
          "Hub",
          "Access Point"
        ],
        correctAnswer: 1,
        explanation: "A router connects different networks together, such as a home network to the internet."
      },
      {
        id: 3,
        question: "What is an IP address?",
        options: [
          "Internet password",
          "Unique identifier for network devices",
          "Network cable type",
          "Wireless signal strength"
        ],
        correctAnswer: 1,
        explanation: "An IP address is a unique identifier assigned to each device on a network."
      },
      {
        id: 4,
        question: "What wireless encryption should you use?",
        options: [
          "WEP",
          "WPA2 or WPA3",
          "No encryption",
          "WPA"
        ],
        correctAnswer: 1,
        explanation: "WPA2 is the current standard, and WPA3 is the latest and most secure wireless encryption."
      },
      {
        id: 5,
        question: "What is first troubleshooting step?",
        options: [
          "Implement solution",
          "Identify the problem",
          "Call for help",
          "Replace equipment"
        ],
        correctAnswer: 1,
        explanation: "The first step is identifying exactly what problem is occurring and what devices are affected."
      },
      {
        id: 6,
        question: "What does CIA in security stand for?",
        options: [
          "Central Intelligence Agency",
          "Confidentiality, Integrity, Availability",
          "Computer Internet Access",
          "Cyber Investigation Agency"
        ],
        correctAnswer: 1,
        explanation: "In security, CIA stands for Confidentiality, Integrity, and Availability."
      },
      {
        id: 7,
        question: "What type of network is used in homes?",
        options: [
          "WAN",
          "LAN",
          "PAN",
          "MAN"
        ],
        correctAnswer: 1,
        explanation: "A Local Area Network (LAN) covers small areas like homes, offices, or buildings."
      },
      {
        id: 8,
        question: "What is the most common network cable?",
        options: [
          "Fiber optic",
          "Ethernet (twisted pair)",
          "Coaxial",
          "USB"
        ],
        correctAnswer: 1,
        explanation: "Ethernet cable (twisted pair) is the most common type for connecting devices in local networks."
      },
      {
        id: 9,
        question: "What does DHCP do?",
        options: [
          "Protects from viruses",
          "Automatically assigns IP addresses",
          "Increases internet speed",
          "Creates wireless networks"
        ],
        correctAnswer: 1,
        explanation: "DHCP automatically assigns IP addresses to devices on a network."
      },
      {
        id: 10,
        question: "Which Wi-Fi band has better wall penetration?",
        options: [
          "5 GHz",
          "2.4 GHz",
          "900 MHz",
          "60 GHz"
        ],
        correctAnswer: 1,
        explanation: "The 2.4 GHz band has better penetration through walls and obstacles."
      },
      {
        id: 11,
        question: "What tool tests connectivity?",
        options: [
          "Ipconfig",
          "Ping",
          "Traceroute",
          "Netstat"
        ],
        correctAnswer: 1,
        explanation: "Ping tests connectivity by sending packets and waiting for replies."
      },
      {
        id: 12,
        question: "What is ransomware?",
        options: [
          "Virus",
          "Malware that locks systems for payment",
          "Worm",
          "Trojan Horse"
        ],
        correctAnswer: 1,
        explanation: "Ransomware encrypts or locks systems and demands payment to restore access."
      },
      {
        id: 13,
        question: "What are the four network components?",
        options: [
          "Router, switch, firewall, server",
          "Devices, media, protocols, services",
          "Cables, wireless, internet, cloud",
          "Hardware, software, users, data"
        ],
        correctAnswer: 1,
        explanation: "The four basic network components are devices, media, protocols, and services."
      },
      {
        id: 14,
        question: "What creates wireless network areas?",
        options: [
          "Router",
          "Wireless Access Point",
          "Switch",
          "Modem"
        ],
        correctAnswer: 1,
        explanation: "A Wireless Access Point creates wireless network areas allowing Wi-Fi connections."
      },
      {
        id: 15,
        question: "What is IPv4 address format?",
        options: [
          "Eight groups of hexadecimal",
          "Four numbers separated by dots",
          "Two letters and six numbers",
          "Ten-digit number"
        ],
        correctAnswer: 1,
        explanation: "IPv4 addresses consist of four numbers (0-255) separated by dots."
      },
      {
        id: 16,
        question: "What does SSID refer to?",
        options: [
          "Signal strength",
          "Wireless network name",
          "Security protocol",
          "Router model"
        ],
        correctAnswer: 1,
        explanation: "SSID is the name of a wireless network that devices see when scanning."
      },
      {
        id: 17,
        question: "What should you change one at a time?",
        options: [
          "Everything",
          "One thing when testing theories",
          "Nothing",
          "Only hardware"
        ],
        correctAnswer: 1,
        explanation: "Change only one thing at a time when troubleshooting to identify what fixes the problem."
      },
      {
        id: 18,
        question: "What is defense in depth?",
        options: [
          "Single strong password",
          "Multiple security layers",
          "Very deep firewall",
          "Hidden equipment"
        ],
        correctAnswer: 1,
        explanation: "Defense in depth uses multiple security measures for layered protection."
      },
      {
        id: 19,
        question: "What is bandwidth?",
        options: [
          "Speed of packets",
          "Amount of data network can carry",
          "Number of devices",
          "Cable width"
        ],
        correctAnswer: 1,
        explanation: "Bandwidth is the maximum data transfer rate of a network connection."
      },
      {
        id: 20,
        question: "What is maximum Ethernet cable length?",
        options: [
          "50 meters",
          "100 meters",
          "200 meters",
          "500 meters"
        ],
        correctAnswer: 1,
        explanation: "Ethernet cable has maximum recommended length of 100 meters."
      },
      {
        id: 21,
        question: "Who assigns public IP addresses?",
        options: [
          "Device manufacturer",
          "Internet Service Provider",
          "Computer user",
          "Router automatically"
        ],
        correctAnswer: 1,
        explanation: "Internet Service Providers assign public IP addresses to customers."
      },
      {
        id: 22,
        question: "Where should wireless router be placed?",
        options: [
          "Closed cabinet",
          "Central, elevated location",
          "Basement corner",
          "Behind metal furniture"
        ],
        correctAnswer: 1,
        explanation: "Central, elevated placement provides best wireless coverage."
      },
      {
        id: 23,
        question: "What is power cycling?",
        options: [
          "Changing power source",
          "Turning off, waiting, turning on",
          "Upgrading power supply",
          "Measuring power use"
        ],
        correctAnswer: 1,
        explanation: "Power cycling means turning device off, waiting, then on to clear issues."
      },
      {
        id: 24,
        question: "Why are software updates important?",
        options: [
          "Make software look newer",
          "Fix security vulnerabilities",
          "Increase speed only",
          "Change interface"
        ],
        correctAnswer: 1,
        explanation: "Software updates include security patches that fix vulnerabilities."
      },
      {
        id: 25,
        question: "What does a switch do?",
        options: [
          "Connect to internet",
          "Connect devices within network smartly",
          "Create wireless networks",
          "Convert data for cables"
        ],
        correctAnswer: 1,
        explanation: "A switch connects devices within same network and sends data only to intended device."
      },
      {
        id: 26,
        question: "What connector does Ethernet use?",
        options: [
          "USB-C",
          "RJ-45",
          "HDMI",
          "BNC"
        ],
        correctAnswer: 1,
        explanation: "Ethernet cables use RJ-45 connectors."
      },
      {
        id: 27,
        question: "What is a common private IP range?",
        options: [
          "100.100.0.0-100.100.255.255",
          "192.168.0.0-192.168.255.255",
          "200.200.0.0-200.200.255.255",
          "300.168.0.0-300.168.255.255"
        ],
        correctAnswer: 1,
        explanation: "192.168.0.0-192.168.255.255 is common private IP range."
      },
      {
        id: 28,
        question: "What weakens wireless signal?",
        options: [
          "Open spaces",
          "Walls and obstacles",
          "Being close to router",
          "Small network"
        ],
        correctAnswer: 1,
        explanation: "Walls and obstacles weaken wireless signals."
      },
      {
        id: 29,
        question: "What command shows network configuration?",
        options: [
          "ping",
          "ipconfig or ifconfig",
          "tracert",
          "netstat"
        ],
        correctAnswer: 1,
        explanation: "ipconfig (Windows) or ifconfig (Mac/Linux) shows network configuration."
      },
      {
        id: 30,
        question: "What is social engineering?",
        options: [
          "Building social networks",
          "Tricking people for information",
          "Engineering social media",
          "Designing networks"
        ],
        correctAnswer: 1,
        explanation: "Social engineering manipulates people to reveal confidential information."
      },
      {
        id: 31,
        question: "What is a packet?",
        options: [
          "Large file",
          "Small unit of network data",
          "Complete email",
          "Configuration file"
        ],
        correctAnswer: 1,
        explanation: "A packet is a small unit of data transmitted over network."
      },
      {
        id: 32,
        question: "What does a modem do?",
        options: [
          "Connect devices within network",
          "Connect to internet provider",
          "Create wireless network",
          "Protect from viruses"
        ],
        correctAnswer: 1,
        explanation: "A modem connects to internet service provider."
      },
      {
        id: 33,
        question: "What does DNS translate?",
        options: [
          "Languages",
          "Domain names to IP addresses",
          "Wireless to wired",
          "Analog to digital"
        ],
        correctAnswer: 1,
        explanation: "DNS translates domain names to IP addresses."
      },
      {
        id: 34,
        question: "What is first step to connect to wireless?",
        options: [
          "Enter password",
          "Enable Wi-Fi on device",
          "Restart device",
          "Update software"
        ],
        correctAnswer: 1,
        explanation: "First enable Wi-Fi on device to scan for networks."
      },
      {
        id: 35,
        question: "What does intermittent connection mean?",
        options: [
          "Very fast",
          "Works sometimes, not others",
          "Multiple networks",
          "Wireless only"
        ],
        correctAnswer: 1,
        explanation: "Intermittent connections work unpredictably."
      },
      {
        id: 36,
        question: "Why make regular backups?",
        options: [
          "Save disk space",
          "Protect against data loss",
          "Increase speed",
          "Organize files"
        ],
        correctAnswer: 1,
        explanation: "Regular backups protect against data loss."
      },
      {
        id: 37,
        question: "What is client-server network?",
        options: [
          "All equal devices",
          "Central server provides services",
          "No central control",
          "Only wireless"
        ],
        correctAnswer: 1,
        explanation: "Client-server has central server providing services to clients."
      },
      {
        id: 38,
        question: "What is advantage of fiber optic?",
        options: [
          "Lowest cost",
          "High speed and distance",
          "Easiest install",
          "Works without power"
        ],
        correctAnswer: 1,
        explanation: "Fiber optic offers high speeds and long distances."
      },
      {
        id: 39,
        question: "What does ping test?",
        options: [
          "Internet speed",
          "If device reachable",
          "Wireless strength",
          "Router config"
        ],
        correctAnswer: 1,
        explanation: "Ping tests if device is reachable on network."
      },
      {
        id: 40,
        question: "What is minimum password length?",
        options: [
          "6 characters",
          "12 characters",
          "8 characters",
          "4 characters"
        ],
        correctAnswer: 1,
        explanation: "Modern recommendations suggest at least 12 characters for passwords."
      }
    ]
  }
};

export default networkingCertificateCourse;
