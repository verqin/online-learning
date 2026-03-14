// IT Support (Certificate) Course Content
// Complete with 6 modules, quizzes, and final exam

export const itSupportCertificate = {
  id: "it-support-certificate",
  title: "IT Support (Certificate)",
  description: "Learn essential IT support skills including troubleshooting, hardware basics, software support, networking fundamentals, and customer service. Perfect for beginners starting a career in IT support.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "💻",
  badge: "Certificate",
  
  // Learning Path
  learningPath: {
    certificate: "IT Support Fundamentals",
    diploma: "IT Management (Advanced)",
    progression: [
      "Certificate: Core Support Skills",
      "Diploma: Advanced IT Administration",
      "Diploma: Network Management",
      "Diploma: System Architecture"
    ]
  },
  
  // Course Modules
  modules: [
    {
      id: 1,
      title: "Introduction to IT Support",
      completed: false,
      content: `
# Module 1: Introduction to IT Support

Welcome to the world of IT support! This module will introduce you to the essential concepts and responsibilities of an IT support professional. IT support is about helping people solve technology problems, from simple password resets to complex network issues.

## What is IT Support?
IT support involves assisting users with their technology needs. This includes troubleshooting problems, setting up equipment, installing software, and answering questions about how technology works. The goal is to keep technology running smoothly so people can do their work without interruptions.

IT support roles exist in almost every organization. Schools need IT support for their computer labs. Hospitals need IT support for their medical records systems. Businesses need IT support for their office computers and networks. Even small shops need IT support for their point-of-sale systems.

## Key Responsibilities
IT support professionals have several important responsibilities:
- **Troubleshooting**: Figuring out what's wrong when technology stops working
- **Installation**: Setting up new computers, printers, and software
- **Maintenance**: Keeping systems updated and running properly
- **User Assistance**: Helping people understand how to use technology
- **Documentation**: Recording problems and solutions for future reference

## Essential Skills
Successful IT support requires both technical and people skills:
- **Technical Knowledge**: Understanding how computers and networks work
- **Problem-Solving**: Thinking through problems step by step
- **Communication**: Explaining technical concepts in simple terms
- **Patience**: Working calmly with frustrated users
- **Continuous Learning**: Keeping up with new technology trends

## Common Tools
IT support professionals use various tools:
- **Ticketing Systems**: To track and manage support requests
- **Remote Access Software**: To connect to user computers remotely
- **Diagnostic Tools**: To test hardware and software problems
- **Knowledge Bases**: Collections of solutions to common problems

## Career Path
Starting in IT support can lead to many opportunities:
- **Help Desk Technician**: First point of contact for users
- **Desktop Support**: Working directly with computer hardware
- **Field Technician**: Visiting different locations to fix problems
- **Specialist Roles**: Focusing on specific areas like networking or security

Remember: Good IT support is not just about fixing machines—it's about helping people. Every problem you solve helps someone complete their work, learn something new, or connect with others.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the main goal of IT support?",
          options: [
            "To keep technology running smoothly for users",
            "To create new software applications",
            "To design computer hardware",
            "To sell technology products"
          ],
          correctAnswer: 0,
          explanation: "The primary goal is to keep technology running smoothly so people can work without interruptions."
        },
        {
          id: 2,
          question: "Which of these is NOT a key responsibility of IT support?",
          options: [
            "Troubleshooting problems",
            "Designing marketing campaigns",
            "Installing software",
            "Helping users understand technology"
          ],
          correctAnswer: 1,
          explanation: "Designing marketing campaigns is not part of IT support responsibilities."
        },
        {
          id: 3,
          question: "What type of skill is explaining technical concepts in simple terms?",
          options: [
            "Communication skill",
            "Technical skill",
            "Mathematical skill",
            "Artistic skill"
          ],
          correctAnswer: 0,
          explanation: "Explaining technical concepts simply is a communication skill."
        },
        {
          id: 4,
          question: "What do ticketing systems help IT support professionals do?",
          options: [
            "Track and manage support requests",
            "Design computer networks",
            "Create software programs",
            "Sell computer equipment"
          ],
          correctAnswer: 0,
          explanation: "Ticketing systems help track and manage support requests from users."
        },
        {
          id: 5,
          question: "Which role involves visiting different locations to fix problems?",
          options: [
            "Field Technician",
            "Help Desk Technician",
            "Software Developer",
            "Network Designer"
          ],
          correctAnswer: 0,
          explanation: "Field technicians visit different locations to resolve technical issues."
        },
        {
          id: 6,
          question: "Why is patience important in IT support?",
          options: [
            "To work calmly with frustrated users",
            "To wait for computers to load slowly",
            "To spend long hours fixing problems",
            "To handle many requests at once"
          ],
          correctAnswer: 0,
          explanation: "Patience helps IT professionals work calmly with users who may be frustrated."
        },
        {
          id: 7,
          question: "What does remote access software allow IT support to do?",
          options: [
            "Connect to user computers remotely",
            "Control office lights from home",
            "Access building security systems",
            "Monitor employee work hours"
          ],
          correctAnswer: 0,
          explanation: "Remote access software allows connection to user computers to troubleshoot issues."
        },
        {
          id: 8,
          question: "What is a knowledge base used for in IT support?",
          options: [
            "Storing solutions to common problems",
            "Keeping user passwords",
            "Tracking employee attendance",
            "Managing office supplies"
          ],
          correctAnswer: 0,
          explanation: "Knowledge bases store documented solutions to common technical problems."
        },
        {
          id: 9,
          question: "Which organization is least likely to need IT support?",
          options: [
            "A single person living alone with no technology",
            "A school with computer labs",
            "A hospital with medical records systems",
            "A business with office computers"
          ],
          correctAnswer: 0,
          explanation: "A person with no technology wouldn't need IT support services."
        },
        {
          id: 10,
          question: "What does continuous learning refer to in IT support?",
          options: [
            "Keeping up with new technology trends",
            "Going back to school for another degree",
            "Learning how to fix every possible problem",
            "Teaching others about technology"
          ],
          correctAnswer: 0,
          explanation: "Continuous learning means staying updated with new technology developments."
        },
        {
          id: 11,
          question: "What is troubleshooting in IT support?",
          options: [
            "Figuring out what's wrong with technology",
            "Preventing problems before they happen",
            "Selling new equipment to users",
            "Training users on software features"
          ],
          correctAnswer: 0,
          explanation: "Troubleshooting is the process of identifying and solving technical problems."
        },
        {
          id: 12,
          question: "Which tool helps test hardware and software problems?",
          options: [
            "Diagnostic tools",
            "Ticketing systems",
            "Remote access software",
            "Knowledge bases"
          ],
          correctAnswer: 0,
          explanation: "Diagnostic tools are used to test and identify hardware and software issues."
        },
        {
          id: 13,
          question: "What type of support is Help Desk Technician known for?",
          options: [
            "First point of contact for users",
            "Designing complex networks",
            "Creating new software applications",
            "Managing large data centers"
          ],
          correctAnswer: 0,
          explanation: "Help Desk Technicians are typically the first people users contact for support."
        },
        {
          id: 14,
          question: "Why is documentation important in IT support?",
          options: [
            "To record problems and solutions for future reference",
            "To track how many calls are made each day",
            "To calculate employee salaries",
            "To monitor internet usage"
          ],
          correctAnswer: 0,
          explanation: "Documentation creates a record of problems and solutions that can help with future issues."
        },
        {
          id: 15,
          question: "What does Desktop Support primarily work with?",
          options: [
            "Computer hardware and user workstations",
            "Network routers and switches",
            "Database servers",
            "Website development"
          ],
          correctAnswer: 0,
          explanation: "Desktop Support focuses on computer hardware and user workstations."
        },
        {
          id: 16,
          question: "Which skill involves thinking through problems step by step?",
          options: [
            "Problem-solving",
            "Communication",
            "Technical knowledge",
            "Patience"
          ],
          correctAnswer: 0,
          explanation: "Problem-solving involves logical, step-by-step thinking to resolve issues."
        },
        {
          id: 17,
          question: "What is maintenance in IT support?",
          options: [
            "Keeping systems updated and running properly",
            "Cleaning computer hardware physically",
            "Replacing old equipment with new",
            "Training new employees"
          ],
          correctAnswer: 0,
          explanation: "Maintenance involves regular updates and checks to keep systems functioning well."
        },
        {
          id: 18,
          question: "Which of these is a people skill needed in IT support?",
          options: [
            "Working calmly with frustrated users",
            "Programming in multiple languages",
            "Designing network architecture",
            "Configuring servers"
          ],
          correctAnswer: 0,
          explanation: "Working calmly with frustrated users is a crucial people skill in IT support."
        },
        {
          id: 19,
          question: "What do specialist roles in IT support focus on?",
          options: [
            "Specific areas like networking or security",
            "General support for all issues",
            "Only hardware problems",
            "Only software problems"
          ],
          correctAnswer: 0,
          explanation: "Specialist roles focus on specific technical areas like networking, security, or databases."
        },
        {
          id: 20,
          question: "What is the ultimate purpose of IT support according to the module?",
          options: [
            "Helping people complete their work or connect with others",
            "Making technology as complex as possible",
            "Replacing all old equipment regularly",
            "Creating work for IT professionals"
          ],
          correctAnswer: 0,
          explanation: "IT support ultimately helps people accomplish their tasks and connect with others through technology."
        }
      ]
    },
    {
      id: 2,
      title: "Computer Hardware Basics",
      completed: false,
      content: `
# Module 2: Computer Hardware Basics

Understanding computer hardware is essential for IT support. This module covers the basic components that make up a computer system and how they work together. You'll learn to identify common hardware parts and understand their functions.

## Central Processing Unit (CPU)
The CPU is often called the "brain" of the computer. It processes instructions and performs calculations. When you click on a program or type on the keyboard, the CPU processes these actions. Modern CPUs have multiple cores, which allows them to handle several tasks at once. The speed of a CPU is measured in gigahertz (GHz).

CPUs generate heat when working, so they need cooling systems. Most computers have fans and heat sinks to keep the CPU at a safe temperature. Some high-performance systems use liquid cooling for better temperature control.

## Memory (RAM)
Random Access Memory (RAM) is the computer's short-term memory. It stores data that the computer is actively using. When you open a program or file, it loads into RAM for quick access. More RAM allows you to run more programs simultaneously without slowing down.

RAM is volatile memory, which means it loses all data when the computer turns off. This is different from storage devices that keep data permanently. Most modern computers have between 8GB and 32GB of RAM, depending on their intended use.

## Storage Devices
Computers need storage to keep data permanently. There are two main types:
- **Hard Disk Drives (HDD)**: Use spinning disks to store data. They offer large storage capacity at lower cost but are slower than SSDs.
- **Solid State Drives (SSD)**: Use flash memory with no moving parts. They are faster, more durable, and use less power than HDDs.

Many modern computers use both types: an SSD for the operating system and frequently used programs, and an HDD for storing large files like videos and photos.

## Motherboard
The motherboard is the main circuit board that connects all components. It contains slots for the CPU, RAM, expansion cards, and connectors for storage devices and peripherals. The motherboard also includes chips that manage basic functions like starting up the computer.

Different motherboards support different types of CPUs and RAM, so compatibility is important when upgrading components. The size of the motherboard (ATX, microATX, mini-ITX) determines what size case you need.

## Power Supply
The power supply converts electricity from the wall outlet to the voltages needed by computer components. It provides power to the motherboard, storage devices, and other components. Power supplies are rated by wattage, with typical desktop computers needing 500-750 watts.

A good power supply includes protection against power surges and stable voltage output. Never open a power supply unit—capacitors inside can hold dangerous electrical charges even when unplugged.

## Common Peripherals
Peripherals are devices connected to the computer:
- **Monitors**: Display visual output. Common types include LCD, LED, and OLED.
- **Keyboards and Mice**: Input devices for typing and navigation.
- **Printers**: Create physical copies of documents. Types include inkjet and laser.
- **External Drives**: Portable storage devices like USB flash drives and external hard drives.

Understanding these basics helps you troubleshoot hardware problems and communicate effectively with users about their computer issues.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the CPU often called?",
          options: [
            "The brain of the computer",
            "The memory of the computer",
            "The heart of the computer",
            "The skeleton of the computer"
          ],
          correctAnswer: 0,
          explanation: "The CPU is often called the brain because it processes instructions and performs calculations."
        },
        {
          id: 2,
          question: "What does RAM stand for?",
          options: [
            "Random Access Memory",
            "Readily Available Memory",
            "Rapid Access Module",
            "Random Allocation Memory"
          ],
          correctAnswer: 0,
          explanation: "RAM stands for Random Access Memory, the computer's short-term memory."
        },
        {
          id: 3,
          question: "What happens to RAM when the computer turns off?",
          options: [
            "It loses all data",
            "It saves data permanently",
            "It becomes slower",
            "It needs replacement"
          ],
          correctAnswer: 0,
          explanation: "RAM is volatile memory that loses all data when power is removed."
        },
        {
          id: 4,
          question: "Which storage device has no moving parts?",
          options: [
            "Solid State Drive (SSD)",
            "Hard Disk Drive (HDD)",
            "Optical Drive",
            "Tape Drive"
          ],
          correctAnswer: 0,
          explanation: "SSDs use flash memory with no moving parts, making them faster and more durable."
        },
        {
          id: 5,
          question: "What is the main circuit board that connects all components?",
          options: [
            "Motherboard",
            "Power supply",
            "CPU",
            "Graphics card"
          ],
          correctAnswer: 0,
          explanation: "The motherboard is the main circuit board that connects all computer components."
        },
        {
          id: 6,
          question: "What does a power supply do?",
          options: [
            "Converts electricity for computer components",
            "Stores electrical power",
            "Controls computer temperature",
            "Manages internet connection"
          ],
          correctAnswer: 0,
          explanation: "The power supply converts wall outlet electricity to voltages needed by computer parts."
        },
        {
          id: 7,
          question: "Which component needs cooling because it generates heat?",
          options: [
            "CPU",
            "RAM",
            "SSD",
            "Keyboard"
          ],
          correctAnswer: 0,
          explanation: "The CPU generates heat when processing instructions and needs cooling systems."
        },
        {
          id: 8,
          question: "What is the purpose of having multiple cores in a CPU?",
          options: [
            "To handle several tasks at once",
            "To make the CPU larger",
            "To increase power consumption",
            "To make installation difficult"
          ],
          correctAnswer: 0,
          explanation: "Multiple cores allow a CPU to process multiple tasks simultaneously."
        },
        {
          id: 9,
          question: "Which storage device typically offers larger capacity at lower cost?",
          options: [
            "Hard Disk Drive (HDD)",
            "Solid State Drive (SSD)",
            "USB flash drive",
            "Memory card"
          ],
          correctAnswer: 0,
          explanation: "HDDs generally offer more storage capacity for less money than SSDs."
        },
        {
          id: 10,
          question: "What determines what size computer case you need?",
          options: [
            "The size of the motherboard",
            "The size of the monitor",
            "The number of USB ports",
            "The color of components"
          ],
          correctAnswer: 0,
          explanation: "Motherboard size (ATX, microATX, etc.) determines compatible case sizes."
        },
        {
          id: 11,
          question: "How is CPU speed measured?",
          options: [
            "Gigahertz (GHz)",
            "Megabytes (MB)",
            "Watts (W)",
            "Volts (V)"
          ],
          correctAnswer: 0,
          explanation: "CPU speed is measured in gigahertz (GHz), indicating how many cycles it can perform per second."
        },
        {
          id: 12,
          question: "What type of memory is RAM?",
          options: [
            "Volatile memory",
            "Permanent memory",
            "External memory",
            "Network memory"
          ],
          correctAnswer: 0,
          explanation: "RAM is volatile memory that only retains data while powered on."
        },
        {
          id: 13,
          question: "Why might a computer use both SSD and HDD?",
          options: [
            "SSD for speed, HDD for large file storage",
            "SSD for graphics, HDD for sound",
            "SSD for internet, HDD for printing",
            "SSD for keyboard, HDD for mouse"
          ],
          correctAnswer: 0,
          explanation: "Using SSD for OS/programs and HDD for large files balances speed and storage capacity."
        },
        {
          id: 14,
          question: "What should you never do with a power supply unit?",
          options: [
            "Open it while it might have electrical charge",
            "Plug it into a wall outlet",
            "Connect it to a motherboard",
            "Use it with a desktop computer"
          ],
          correctAnswer: 0,
          explanation: "Never open a power supply as capacitors can hold dangerous charges even when unplugged."
        },
        {
          id: 15,
          question: "What are peripherals?",
          options: [
            "Devices connected to the computer",
            "Internal computer components",
            "Software programs",
            "Network cables"
          ],
          correctAnswer: 0,
          explanation: "Peripherals are external devices connected to the computer like monitors and printers."
        },
        {
          id: 16,
          question: "What does more RAM allow a computer to do?",
          options: [
            "Run more programs simultaneously",
            "Connect to more monitors",
            "Print faster",
            "Boot up slower"
          ],
          correctAnswer: 0,
          explanation: "More RAM allows running more programs at once without performance issues."
        },
        {
          id: 17,
          question: "Which component contains slots for CPU and RAM?",
          options: [
            "Motherboard",
            "Power supply",
            "Computer case",
            "Graphics card"
          ],
          correctAnswer: 0,
          explanation: "The motherboard has specific slots and sockets for installing CPU and RAM."
        },
        {
          id: 18,
          question: "What rating indicates a power supply's capacity?",
          options: [
            "Wattage",
            "Voltage",
            "Amperage",
            "Hertz"
          ],
          correctAnswer: 0,
          explanation: "Power supplies are rated by wattage, indicating their power output capacity."
        },
        {
          id: 19,
          question: "What cooling method might high-performance systems use?",
          options: [
            "Liquid cooling",
            "Opening windows",
            "Smaller fans",
            "Turning off sometimes"
          ],
          correctAnswer: 0,
          explanation: "High-performance systems may use liquid cooling for better heat management."
        },
        {
          id: 20,
          question: "What is the advantage of SSDs over HDDs?",
          options: [
            "They are faster and more durable",
            "They are larger and heavier",
            "They make more noise",
            "They cost more for same capacity"
          ],
          correctAnswer: 0,
          explanation: "SSDs are faster, more durable, use less power, but typically cost more per gigabyte."
        }
      ]
    },
    {
      id: 3,
      title: "Software and Operating Systems",
      completed: false,
      content: `
# Module 3: Software and Operating Systems

Software makes computers useful. This module covers different types of software, how operating systems work, and common software issues you'll encounter in IT support. Understanding software helps you troubleshoot problems and assist users effectively.

## What is Software?
Software refers to the programs and applications that run on computer hardware. Unlike hardware (physical components you can touch), software consists of instructions that tell the hardware what to do. There are two main categories:
- **System Software**: Manages computer hardware and provides a platform for running applications (like operating systems)
- **Application Software**: Programs that perform specific tasks for users (like word processors or web browsers)

All software is written in programming languages and converted into machine code that the CPU can understand and execute.

## Operating Systems
The operating system (OS) is the most important software on any computer. It manages hardware resources and provides services for applications. Common desktop operating systems include:
- **Windows**: The most widely used OS for personal computers
- **macOS**: Apple's operating system for Mac computers
- **Linux**: Open-source OS popular for servers and technical users

Operating systems handle many essential functions:
- **Memory Management**: Allocating RAM to programs
- **Process Management**: Running and switching between applications
- **File Management**: Organizing files on storage devices
- **Device Management**: Communicating with peripherals
- **User Interface**: Providing ways for users to interact with the computer

## Installing Software
Software installation involves copying program files to a computer and configuring them to work with the operating system. Most software comes with an installer that guides users through the process. Important considerations during installation:
- **System Requirements**: Checking if the computer meets minimum hardware and software needs
- **Installation Location**: Choosing where to store program files
- **License Agreement**: Accepting the software's terms of use
- **Updates**: Configuring automatic or manual update settings

As IT support, you may need to help users install software, especially when they encounter errors or confusion during the process.

## Common Software Problems
Users frequently encounter these software issues:
- **Program Crashes**: Software suddenly stops working
- **Slow Performance**: Programs run slower than expected
- **Compatibility Issues**: Software doesn't work with the OS or other programs
- **Update Problems**: Issues during or after software updates
- **Installation Errors**: Problems during software installation

Basic troubleshooting steps for software problems:
1. **Restart the Program**: Close and reopen the application
2. **Check for Updates**: Install available updates
3. **Restart the Computer**: Clears temporary issues
4. **Reinstall the Software**: Remove and install fresh
5. **Check System Requirements**: Ensure computer meets needs

## Software Updates and Patches
Software companies regularly release updates to:
- **Fix Bugs**: Correct errors in the software
- **Add Features**: Include new functionality
- **Improve Security**: Protect against vulnerabilities
- **Enhance Performance**: Make software run better

Updates can be:
- **Critical/Security Updates**: Should be installed immediately
- **Feature Updates**: Add new capabilities
- **Driver Updates**: Improve hardware compatibility

IT support often manages update processes, especially in business environments where coordinated updates are important.

## Application Types
Different applications serve different purposes:
- **Productivity Software**: Word processors, spreadsheets, presentation tools
- **Communication Tools**: Email clients, messaging apps, video conferencing
- **Creative Applications**: Graphic design, video editing, music production
- **Utility Programs**: Antivirus, file compression, system cleanup tools
- **Web Browsers**: Applications for accessing websites

Understanding what different applications do helps you provide better support when users have questions or problems.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the main difference between software and hardware?",
          options: [
            "Software is instructions, hardware is physical components",
            "Software is expensive, hardware is cheap",
            "Software is inside, hardware is outside",
            "Software is for work, hardware is for games"
          ],
          correctAnswer: 0,
          explanation: "Software consists of instructions/programs, while hardware refers to physical components."
        },
        {
          id: 2,
          question: "What are the two main categories of software?",
          options: [
            "System software and application software",
            "Free software and paid software",
            "Old software and new software",
            "Simple software and complex software"
          ],
          correctAnswer: 0,
          explanation: "The two main categories are system software (like OS) and application software (like word processors)."
        },
        {
          id: 3,
          question: "What is the most important software on any computer?",
          options: [
            "Operating system",
            "Web browser",
            "Word processor",
            "Antivirus program"
          ],
          correctAnswer: 0,
          explanation: "The operating system is the most important as it manages hardware and runs other software."
        },
        {
          id: 4,
          question: "Which operating system is most widely used on personal computers?",
          options: [
            "Windows",
            "macOS",
            "Linux",
            "Chrome OS"
          ],
          correctAnswer: 0,
          explanation: "Windows is the most widely used operating system for personal computers worldwide."
        },
        {
          id: 5,
          question: "What does an operating system's memory management do?",
          options: [
            "Allocates RAM to programs",
            "Deletes old files",
            "Backs up data",
            "Speeds up internet"
          ],
          correctAnswer: 0,
          explanation: "Memory management allocates and manages RAM usage for running programs."
        },
        {
          id: 6,
          question: "What should you check before installing software?",
          options: [
            "System requirements",
            "Color of the installer",
            "Price of the software",
            "Company location"
          ],
          correctAnswer: 0,
          explanation: "Always check system requirements to ensure the computer can run the software properly."
        },
        {
          id: 7,
          question: "What is the first basic troubleshooting step for software problems?",
          options: [
            "Restart the program",
            "Reinstall the operating system",
            "Replace the hardware",
            "Call the software company"
          ],
          correctAnswer: 0,
          explanation: "Restarting the program is the simplest first step to try resolving software issues."
        },
        {
          id: 8,
          question: "Why do software companies release updates?",
          options: [
            "To fix bugs and improve security",
            "To make software more expensive",
            "To change the software name",
            "To reduce features"
          ],
          correctAnswer: 0,
          explanation: "Updates fix bugs, improve security, add features, and enhance performance."
        },
        {
          id: 9,
          question: "What type of update should be installed immediately?",
          options: [
            "Critical security updates",
            "Minor feature updates",
            "Cosmetic changes",
            "Language translations"
          ],
          correctAnswer: 0,
          explanation: "Critical security updates address vulnerabilities and should be installed promptly."
        },
        {
          id: 10,
          question: "What category does a word processor belong to?",
          options: [
            "Productivity software",
            "Communication tools",
            "Creative applications",
            "Utility programs"
          ],
          correctAnswer: 0,
          explanation: "Word processors are productivity software used for creating documents."
        },
        {
          id: 11,
          question: "What happens during software installation?",
          options: [
            "Program files are copied and configured",
            "Hardware components are replaced",
            "Internet speed is increased",
            "Computer color changes"
          ],
          correctAnswer: 0,
          explanation: "Installation copies program files to the computer and configures them to work with the OS."
        },
        {
          id: 12,
          question: "What is a common cause of software compatibility issues?",
          options: [
            "Software doesn't work with the OS",
            "Computer is too fast",
            "Monitor is too large",
            "Keyboard has wrong color"
          ],
          correctAnswer: 0,
          explanation: "Compatibility issues often occur when software isn't designed for a specific OS version."
        },
        {
          id: 13,
          question: "What does an operating system's user interface provide?",
          options: [
            "Ways for users to interact with the computer",
            "Protection from viruses",
            "Automatic file backup",
            "Internet connection sharing"
          ],
          correctAnswer: 0,
          explanation: "The user interface allows users to interact with the computer through graphical elements."
        },
        {
          id: 14,
          question: "What might cause a program to crash?",
          options: [
            "Software bugs or conflicts",
            "Clean computer case",
            "Proper installation",
            "Regular updates"
          ],
          correctAnswer: 0,
          explanation: "Programs crash due to bugs, conflicts with other software, or insufficient resources."
        },
        {
          id: 15,
          question: "What type of software is an antivirus program?",
          options: [
            "Utility program",
            "Productivity software",
            "Creative application",
            "Operating system"
          ],
          correctAnswer: 0,
          explanation: "Antivirus programs are utility software that protect against malware."
        },
        {
          id: 16,
          question: "What does process management involve in an operating system?",
          options: [
            "Running and switching between applications",
            "Cleaning temporary files",
            "Changing desktop background",
            "Setting up user accounts"
          ],
          correctAnswer: 0,
          explanation: "Process management handles running programs and switching between them efficiently."
        },
        {
          id: 17,
          question: "When might you need to reinstall software?",
          options: [
            "When basic troubleshooting doesn't fix problems",
            "Every time you use the software",
            "Only when buying new hardware",
            "When changing internet provider"
          ],
          correctAnswer: 0,
          explanation: "Reinstalling can fix corrupted files when simpler troubleshooting doesn't work."
        },
        {
          id: 18,
          question: "What are driver updates for?",
          options: [
            "Improving hardware compatibility",
            "Adding new software features",
            "Changing software colors",
            "Increasing software price"
          ],
          correctAnswer: 0,
          explanation: "Driver updates improve how software communicates with specific hardware components."
        },
        {
          id: 19,
          question: "What category do video conferencing apps belong to?",
          options: [
            "Communication tools",
            "Productivity software",
            "Creative applications",
            "Operating systems"
          ],
          correctAnswer: 0,
          explanation: "Video conferencing apps are communication tools for virtual meetings."
        },
        {
          id: 20,
          question: "What should users accept during software installation?",
          options: [
            "License agreement",
            "Hardware warranty",
            "Internet contract",
            "Service membership"
          ],
          correctAnswer: 0,
          explanation: "Users must accept the license agreement outlining terms of software use."
        }
      ]
    },
    {
      id: 4,
      title: "Networking Fundamentals",
      completed: false,
      content: `
# Module 4: Networking Fundamentals

Networking connects computers and devices to share resources and information. This module covers basic networking concepts that every IT support professional should understand. You'll learn how networks work, common networking devices, and basic troubleshooting steps.

## What is a Network?
A network is a collection of connected devices that can communicate with each other. Networks allow sharing of:
- **Files and Folders**: Access documents from different computers
- **Printers**: Multiple users printing to shared devices
- **Internet Connections**: Sharing a single internet connection
- **Applications**: Using software installed on network servers

The smallest network is two connected computers. Large networks can connect thousands of devices across multiple locations.

## Network Types
Different networks serve different purposes:
- **Local Area Network (LAN)**: Connects devices in a limited area like a home, office, or building
- **Wide Area Network (WAN)**: Connects networks over large distances, like between office branches
- **Wireless Network (Wi-Fi)**: Uses radio waves instead of cables for connections
- **Personal Area Network (PAN)**: Very small network for personal devices like smartphones and headphones

Most homes have a LAN that connects computers, phones, and smart devices. Businesses typically have more complex networks combining wired and wireless connections.

## Basic Networking Devices
Several devices help build and maintain networks:
- **Router**: Connects different networks together (like your home network to the internet)
- **Switch**: Connects devices within the same network
- **Modem**: Converts signals between your network and your internet provider
- **Access Point**: Extends wireless network coverage
- **Network Cable**: Physical connection between devices (most common is Ethernet cable)

Home networks often use a combination device called a "wireless router" that includes router, switch, and access point functions.

## IP Addresses
Every device on a network needs a unique identifier called an IP address (Internet Protocol address). There are two main types:
- **IPv4**: The traditional format with four numbers separated by dots (like 192.168.1.1)
- **IPv6**: Newer format with longer addresses to accommodate more devices

IP addresses can be:
- **Static**: Manually assigned and doesn't change
- **Dynamic**: Automatically assigned by a DHCP server and can change

Most home networks use dynamic IP addresses for simplicity.

## Internet Connectivity
Connecting to the internet requires:
1. **Internet Service Provider (ISP)**: Company that provides internet access
2. **Modem**: Device that connects to your ISP
3. **Router**: Distributes internet connection to your devices
4. **Cables or Wireless**: Physical or wireless connections to devices

Common internet connection types:
- **Broadband**: High-speed internet via cable or DSL
- **Fiber Optic**: Very fast internet using light signals through glass fibers
- **Satellite**: Internet via satellites, useful in remote areas
- **Mobile Data**: Internet through cellular networks

## Basic Network Troubleshooting
When network problems occur, try these steps:
1. **Check Physical Connections**: Ensure cables are securely plugged in
2. **Restart Devices**: Turn modem and router off for 30 seconds, then restart
3. **Check Wi-Fi Settings**: Verify device is connected to correct wireless network
4. **Test Different Devices**: See if problem affects all devices or just one
5. **Check Router Lights**: Indicator lights show connection status

Common network issues include:
- **Slow Speeds**: Caused by many users, distance from router, or ISP problems
- **Intermittent Connections**: Loose cables, interference, or overheating devices
- **No Connectivity**: Service outage, incorrect settings, or hardware failure

Understanding these basics helps you solve common networking problems and explain issues to users in simple terms.
      `,
      quiz: [
        {
          id: 1,
          question: "What is a network?",
          options: [
            "Collection of connected devices that can communicate",
            "A single computer by itself",
            "A type of software program",
            "A computer storage device"
          ],
          correctAnswer: 0,
          explanation: "A network connects multiple devices so they can share resources and communicate."
        },
        {
          id: 2,
          question: "What does LAN stand for?",
          options: [
            "Local Area Network",
            "Large Access Network",
            "Long Area Network",
            "Local Access Node"
          ],
          correctAnswer: 0,
          explanation: "LAN stands for Local Area Network, covering a limited area like a home or office."
        },
        {
          id: 3,
          question: "What device connects different networks together?",
          options: [
            "Router",
            "Switch",
            "Modem",
            "Cable"
          ],
          correctAnswer: 0,
          explanation: "A router connects different networks, such as connecting a home network to the internet."
        },
        {
          id: 4,
          question: "What is an IP address?",
          options: [
            "Unique identifier for devices on a network",
            "Internet password",
            "Software license key",
            "Computer serial number"
          ],
          correctAnswer: 0,
          explanation: "An IP address uniquely identifies each device on a network for communication."
        },
        {
          id: 5,
          question: "What converts signals between your network and internet provider?",
          options: [
            "Modem",
            "Router",
            "Switch",
            "Access point"
          ],
          correctAnswer: 0,
          explanation: "A modem converts signals between your local network and your internet service provider."
        },
        {
          id: 6,
          question: "What type of network uses radio waves instead of cables?",
          options: [
            "Wireless network (Wi-Fi)",
            "Local Area Network",
            "Wide Area Network",
            "Personal Area Network"
          ],
          correctAnswer: 0,
          explanation: "Wireless networks use radio waves to connect devices without physical cables."
        },
        {
          id: 7,
          question: "What is the smallest possible network?",
          options: [
            "Two connected computers",
            "One computer with internet",
            "Three computers in triangle",
            "Office building network"
          ],
          correctAnswer: 0,
          explanation: "The smallest network is two devices connected to share resources."
        },
        {
          id: 8,
          question: "What device connects devices within the same network?",
          options: [
            "Switch",
            "Router",
            "Modem",
            "Access point"
          ],
          correctAnswer: 0,
          explanation: "A switch connects multiple devices within the same local network."
        },
        {
          id: 9,
          question: "What does ISP stand for?",
          options: [
            "Internet Service Provider",
            "Internet System Protocol",
            "Internal Service Provider",
            "International System Provider"
          ],
          correctAnswer: 0,
          explanation: "ISP stands for Internet Service Provider, the company that provides internet access."
        },
        {
          id: 10,
          question: "What is the first step in basic network troubleshooting?",
          options: [
            "Check physical connections",
            "Replace all equipment",
            "Call the internet provider",
            "Buy new computers"
          ],
          correctAnswer: 0,
          explanation: "Always check physical connections first as loose cables are a common issue."
        },
        {
          id: 11,
          question: "What can multiple users share on a network?",
          options: [
            "Printers and files",
            "Keyboard and mouse",
            "Monitor and speakers",
            "Chair and desk"
          ],
          correctAnswer: 0,
          explanation: "Networks allow sharing resources like printers, files, and internet connections."
        },
        {
          id: 12,
          question: "What type of IP address is automatically assigned?",
          options: [
            "Dynamic IP address",
            "Static IP address",
            "Manual IP address",
            "Fixed IP address"
          ],
          correctAnswer: 0,
          explanation: "Dynamic IP addresses are automatically assigned by a DHCP server."
        },
        {
          id: 13,
          question: "What do most home networks use for simplicity?",
          options: [
            "Dynamic IP addresses",
            "Static IP addresses",
            "No IP addresses",
            "Temporary IP addresses"
          ],
          correctAnswer: 0,
          explanation: "Home networks typically use dynamic IP addresses for easy setup and management."
        },
        {
          id: 14,
          question: "What connects networks over large distances?",
          options: [
            "Wide Area Network (WAN)",
            "Local Area Network (LAN)",
            "Personal Area Network (PAN)",
            "Home network"
          ],
          correctAnswer: 0,
          explanation: "WANs connect networks across large geographical areas."
        },
        {
          id: 15,
          question: "What might cause slow network speeds?",
          options: [
            "Many users connected at once",
            "Clean computer screens",
            "New software installed",
            "Keyboard being used"
          ],
          correctAnswer: 0,
          explanation: "Slow speeds can result from many users, distance from router, or ISP issues."
        },
        {
          id: 16,
          question: "What does a wireless access point do?",
          options: [
            "Extends wireless network coverage",
            "Blocks internet access",
            "Slows down connections",
            "Changes IP addresses"
          ],
          correctAnswer: 0,
          explanation: "Access points extend the range of wireless networks."
        },
        {
          id: 17,
          question: "What is the most common network cable type?",
          options: [
            "Ethernet cable",
            "Power cable",
            "USB cable",
            "HDMI cable"
          ],
          correctAnswer: 0,
          explanation: "Ethernet cables are the standard for wired network connections."
        },
        {
          id: 18,
          question: "What should you check on a router during troubleshooting?",
          options: [
            "Indicator lights",
            "Color of the router",
            "Brand name",
            "Price tag"
          ],
          correctAnswer: 0,
          explanation: "Router lights indicate connection status and can help identify problems."
        },
        {
          id: 19,
          question: "What type of internet uses light signals through glass fibers?",
          options: [
            "Fiber optic",
            "Broadband",
            "Satellite",
            "Mobile data"
          ],
          correctAnswer: 0,
          explanation: "Fiber optic internet uses light signals through glass fibers for very fast speeds."
        },
        {
          id: 20,
          question: "What is a common combination device in home networks?",
          options: [
            "Wireless router",
            "Smartphone",
            "Gaming console",
            "Printer"
          ],
          correctAnswer: 0,
          explanation: "Wireless routers often combine router, switch, and access point functions."
        }
      ]
    },
    {
      id: 5,
      title: "Customer Service Skills",
      completed: false,
      content: `
# Module 5: Customer Service Skills

Technical knowledge alone isn't enough for IT support—excellent customer service skills are equally important. This module covers how to interact with users professionally, handle difficult situations, and provide effective support that leaves users satisfied.

## Communication Basics
Clear communication is essential in IT support. Remember:
- **Use Simple Language**: Avoid technical jargon when speaking with non-technical users
- **Listen Actively**: Pay full attention to what the user is saying
- **Confirm Understanding**: Repeat back what you heard to ensure clarity
- **Be Patient**: Allow users time to explain their problems fully

When starting a support interaction:
1. **Greet Professionally**: "Hello, how can I help you today?"
2. **Identify Yourself**: Give your name and role
3. **Show Empathy**: Acknowledge their frustration: "I understand this must be frustrating"
4. **Assure Assistance**: Let them know you'll help solve their problem

## Problem-Solving Approach
A structured approach helps solve problems efficiently:
1. **Gather Information**: Ask questions to understand the problem fully
2. **Reproduce the Issue**: Try to recreate the problem yourself if possible
3. **Identify Possible Causes**: Think about what could be causing the issue
4. **Test Solutions**: Try fixes starting with the simplest
5. **Verify Resolution**: Ensure the problem is completely solved
6. **Document Solution**: Record what worked for future reference

Use open-ended questions to gather information:
- "What were you doing when the problem started?"
- "What have you already tried to fix it?"
- "What exactly happens when you try to use the program?"

## Handling Difficult Situations
Users may be frustrated, angry, or impatient. Here's how to handle these situations:
- **Stay Calm**: Don't take frustration personally
- **Validate Feelings**: "I understand why you're upset about this"
- **Focus on Solution**: Keep the conversation on solving the problem
- **Set Realistic Expectations**: Be honest about timeframes and limitations
- **Know When to Escalate**: If you can't solve it, involve someone who can

Never say "That's not my job" or "You should have known better." Instead, say "Let me find the right person to help with this" or "Let me show you how to do that properly."

## Remote Support Best Practices
When helping users remotely:
- **Explain What You're Doing**: Tell users before taking control of their computer
- **Ask Permission**: "May I remote into your computer to see the issue?"
- **Go Slow**: Move deliberately so users can follow what you're doing
- **Explain Steps**: Describe what you're doing and why
- **Check Comfort Level**: Ensure users are comfortable with the process

Remote tools should be used respectfully. Never access a user's computer without permission, even if you're trying to help.

## Documentation and Follow-up
Good documentation helps everyone:
- **Record Details**: Note the problem, steps taken, and solution
- **Use Clear Language**: Write so others can understand your notes
- **Update Knowledge Base**: Add solutions to shared resources
- **Follow Up**: Check back with users to ensure problems stay solved

Documentation should answer:
- Who had the problem?
- What was the problem?
- When did it occur?
- How was it solved?
- Are there any related issues to watch for?

## Professional Development
Continuously improve your customer service skills:
- **Seek Feedback**: Ask users how you could provide better service
- **Learn from Others**: Observe how experienced colleagues handle situations
- **Practice Active Listening**: Focus on understanding, not just responding
- **Develop Patience**: Remember that technical problems are stressful for users
- **Stay Positive**: Maintain a helpful, solution-oriented attitude

Remember: In IT support, you're not just fixing technology—you're helping people. Good service turns frustrated users into satisfied ones and builds trust in your abilities.
      `,
      quiz: [
        {
          id: 1,
          question: "What should you avoid when speaking with non-technical users?",
          options: [
            "Technical jargon",
            "Simple explanations",
            "Polite language",
            "Clear instructions"
          ],
          correctAnswer: 0,
          explanation: "Avoid technical terms that non-technical users may not understand."
        },
        {
          id: 2,
          question: "What is the first step in a support interaction?",
          options: [
            "Greet professionally",
            "Fix the problem immediately",
            "Ask for payment",
            "Check computer specs"
          ],
          correctAnswer: 0,
          explanation: "Always start with a professional greeting to establish rapport."
        },
        {
          id: 3,
          question: "What should you do to ensure you understand the user's problem?",
          options: [
            "Repeat back what you heard",
            "Assume you know the issue",
            "Fix it without asking questions",
            "Tell them to read the manual"
          ],
          correctAnswer: 0,
          explanation: "Repeating back confirms you understand the problem correctly."
        },
        {
          id: 4,
          question: "What is the first step in problem-solving?",
          options: [
            "Gather information",
            "Restart the computer",
            "Replace hardware",
            "Call for backup"
          ],
          correctAnswer: 0,
          explanation: "Always gather complete information before attempting solutions."
        },
        {
          id: 5,
          question: "What type of questions help gather better information?",
          options: [
            "Open-ended questions",
            "Yes/no questions",
            "Technical questions",
            "Personal questions"
          ],
          correctAnswer: 0,
          explanation: "Open-ended questions encourage users to provide detailed information."
        },
        {
          id: 6,
          question: "How should you handle an angry user?",
          options: [
            "Stay calm and validate their feelings",
            "Get angry in response",
            "Ignore their emotions",
            "Tell them to calm down"
          ],
          correctAnswer: 0,
          explanation: "Staying calm and acknowledging their frustration helps de-escalate situations."
        },
        {
          id: 7,
          question: "What should you do before taking remote control of a user's computer?",
          options: [
            "Ask permission and explain what you'll do",
            "Take control immediately to save time",
            "Wait until they leave their desk",
            "Do it secretly to avoid worrying them"
          ],
          correctAnswer: 0,
          explanation: "Always ask permission and explain what you'll be doing remotely."
        },
        {
          id: 8,
          question: "Why is documentation important?",
          options: [
            "Helps with future similar problems",
            "Takes up time unnecessarily",
            "Makes work seem more important",
            "Is required by law"
          ],
          correctAnswer: 0,
          explanation: "Good documentation creates a knowledge base for solving future problems."
        },
        {
          id: 9,
          question: "What should you never say to a frustrated user?",
          options: [
            "You should have known better",
            "I understand this is frustrating",
            "Let me help you solve this",
            "I'll find the right person to help"
          ],
          correctAnswer: 0,
          explanation: "Blaming users for problems damages trust and doesn't help solve issues."
        },
        {
          id: 10,
          question: "What is active listening?",
          options: [
            "Paying full attention to understand",
            "Thinking about your response while they talk",
            "Waiting for them to stop talking",
            "Correcting their mistakes immediately"
          ],
          correctAnswer: 0,
          explanation: "Active listening means fully focusing on understanding the speaker."
        },
        {
          id: 11,
          question: "What should you do after solving a problem?",
          options: [
            "Verify the resolution is complete",
            "Immediately move to next user",
            "Assume everything is fixed",
            "Tell them to call back if more issues"
          ],
          correctAnswer: 0,
          explanation: "Always verify that the problem is completely resolved before ending support."
        },
        {
          id: 12,
          question: "When should you escalate a problem?",
          options: [
            "When you cannot solve it yourself",
            "Whenever a user gets frustrated",
            "For every technical problem",
            "Only during certain hours"
          ],
          correctAnswer: 0,
          explanation: "Escalate when the problem is beyond your expertise or authority to fix."
        },
        {
          id: 13,
          question: "What does showing empathy involve?",
          options: [
            "Acknowledging the user's frustration",
            "Telling them to be patient",
            "Ignoring their emotions",
            "Making jokes about the situation"
          ],
          correctAnswer: 0,
          explanation: "Empathy involves recognizing and acknowledging how the user feels."
        },
        {
          id: 14,
          question: "Why should you move slowly during remote support?",
          options: [
            "So users can follow what you're doing",
            "To make the job last longer",
            "Because computers are slow",
            "To avoid making mistakes"
          ],
          correctAnswer: 0,
          explanation: "Moving slowly helps users understand and learn from the troubleshooting process."
        },
        {
          id: 15,
          question: "What should documentation include?",
          options: [
            "Problem, steps taken, and solution",
            "User's personal information",
            "Your opinions about the user",
            "Unrelated technical details"
          ],
          correctAnswer: 0,
          explanation: "Documentation should clearly record the problem, solution process, and outcome."
        },
        {
          id: 16,
          question: "How can you improve customer service skills?",
          options: [
            "Seek feedback from users",
            "Avoid difficult situations",
            "Work only with technical users",
            "Rush through support calls"
          ],
          correctAnswer: 0,
          explanation: "Feedback helps identify areas for improvement in your service approach."
        },
        {
          id: 17,
          question: "What should you do when starting remote control?",
          options: [
            "Explain what you're doing",
            "Take control silently",
            "Test all functions first",
            "Change settings immediately"
          ],
          correctAnswer: 0,
          explanation: "Always explain what actions you're taking during remote support sessions."
        },
        {
          id: 18,
          question: "What is a solution-oriented attitude?",
          options: [
            "Focusing on solving the problem",
            "Finding who to blame",
            "Avoiding difficult problems",
            "Making excuses for issues"
          ],
          correctAnswer: 0,
          explanation: "A solution-oriented attitude focuses on finding fixes rather than assigning blame."
        },
        {
          id: 19,
          question: "Why follow up with users after solving problems?",
          options: [
            "To ensure problems stay solved",
            "To bill for additional time",
            "To show you remember them",
            "Because it's company policy"
          ],
          correctAnswer: 0,
          explanation: "Follow-up ensures the solution worked and builds trust through continued care."
        },
        {
          id: 20,
          question: "What builds trust in IT support?",
          options: [
            "Good service and effective help",
            "Technical knowledge alone",
            "Fancy job titles",
            "Expensive equipment"
          ],
          correctAnswer: 0,
          explanation: "Trust comes from consistently providing effective help and good service."
        }
      ]
    },
    {
      id: 6,
      title: "Security and Best Practices",
      completed: false,
      content: `
# Module 6: Security and Best Practices

Security is everyone's responsibility in IT. This module covers basic security concepts, common threats, and best practices for keeping systems and data safe. As IT support, you'll often be the first line of defense against security issues.

## Why Security Matters
Security protects:
- **Confidential Information**: Personal data, business secrets, financial records
- **System Availability**: Keeping computers and networks running
- **Data Integrity**: Ensuring information isn't altered improperly
- **User Privacy**: Protecting personal information from exposure

Security breaches can cause:
- **Financial Loss**: Stolen funds or recovery costs
- **Reputation Damage**: Loss of trust from customers or users
- **Legal Problems**: Violations of privacy laws or regulations
- **Operational Disruption**: Systems becoming unavailable for work

## Common Security Threats
Understanding threats helps prevent them:
- **Malware**: Malicious software like viruses, worms, and ransomware
- **Phishing**: Fake emails or websites tricking users into revealing information
- **Social Engineering**: Manipulating people into breaking security procedures
- **Weak Passwords**: Easy-to-guess passwords that attackers can crack
- **Unpatched Software**: Security vulnerabilities in outdated programs
- **Physical Security**: Theft or unauthorized access to devices

Malware can:
- Steal sensitive information
- Encrypt files for ransom (ransomware)
- Use your computer to attack others
- Slow down or crash systems

## Password Security
Strong passwords are essential:
- **Length Matters**: At least 12 characters long
- **Use Complexity**: Mix uppercase, lowercase, numbers, and symbols
- **Avoid Common Words**: Don't use dictionary words or personal information
- **Unique for Each Account**: Different passwords for different services
- **Consider Passphrases**: Multiple random words together (like "correct-horse-battery-staple")

Password managers can help users create and store strong passwords securely. Never share passwords through email or unsecured messages.

## Software Updates
Keeping software updated is crucial for security:
- **Operating System Updates**: Often include critical security patches
- **Application Updates**: Fix vulnerabilities in programs like browsers and office software
- **Security Software Updates**: Keep antivirus and firewall protection current
- **Firmware Updates**: Update security for routers and other devices

Enable automatic updates when possible, but understand that some business environments need controlled update schedules.

## Safe Browsing and Email Practices
Teach users safe habits:
- **Verify Websites**: Look for HTTPS and legitimate domain names
- **Don't Click Suspicious Links**: Hover over links to see real destinations
- **Check Email Senders**: Verify email addresses before responding
- **Be Wary of Attachments**: Don't open unexpected attachments
- **Use Antivirus Software**: Keep it updated and running scans regularly

Common warning signs:
- Urgent language demanding immediate action
- Requests for passwords or personal information
- Grammar and spelling mistakes in official-looking messages
- Unexpected attachments or links

## Physical Security Basics
Physical security protects devices themselves:
- **Lock Screens**: Use password or PIN protection on all devices
- **Secure Workstations**: Lock computers when stepping away
- **Control Access**: Restrict physical access to servers and networking equipment
- **Secure Storage**: Lock up backup media and sensitive documents
- **Proper Disposal**: Securely erase data before disposing of old devices

In office environments:
- Implement clean desk policies
- Secure server rooms with proper access controls
- Use cable locks for laptops in public areas
- Train staff to challenge unfamiliar people in secure areas

## Your Role in Security
As IT support, you help maintain security by:
- **Educating Users**: Teaching security best practices
- **Implementing Policies**: Following and enforcing security procedures
- **Monitoring Systems**: Watching for signs of security issues
- **Responding to Incidents**: Following proper procedures when problems occur
- **Staying Informed**: Learning about new threats and protections

Remember: Good security is a balance between protection and usability. Your job is to help implement security that protects without preventing people from doing their work.
      `,
      quiz: [
        {
          id: 1,
          question: "What does security protect?",
          options: [
            "Confidential information and system availability",
            "Only financial data",
            "Only personal photos",
            "Just internet connections"
          ],
          correctAnswer: 0,
          explanation: "Security protects confidentiality, availability, integrity, and privacy of information and systems."
        },
        {
          id: 2,
          question: "What is malware?",
          options: [
            "Malicious software like viruses and ransomware",
            "Helpful software for cleaning computers",
            "Software that makes computers faster",
            "Legal software for monitoring"
          ],
          correctAnswer: 0,
          explanation: "Malware is malicious software designed to harm or exploit computer systems."
        },
        {
          id: 3,
          question: "What is phishing?",
          options: [
            "Fake emails tricking users into revealing information",
            "A type of computer game",
            "A method for faster internet",
            "A way to organize files"
          ],
          correctAnswer: 0,
          explanation: "Phishing uses fake communications to trick people into revealing sensitive information."
        },
        {
          id: 4,
          question: "How long should strong passwords be?",
          options: [
            "At least 12 characters",
            "Exactly 8 characters",
            "No more than 6 characters",
            "As short as possible"
          ],
          correctAnswer: 0,
          explanation: "Strong passwords should be at least 12 characters long for better security."
        },
        {
          id: 5,
          question: "Why are software updates important for security?",
          options: [
            "They fix security vulnerabilities",
            "They make software more expensive",
            "They change software colors",
            "They add unnecessary features"
          ],
          correctAnswer: 0,
          explanation: "Updates often patch security vulnerabilities that attackers could exploit."
        },
        {
          id: 6,
          question: "What should you look for to verify a secure website?",
          options: [
            "HTTPS in the address",
            "Lots of advertisements",
            "Bright colors",
            "Many pop-up windows"
          ],
          correctAnswer: 0,
          explanation: "HTTPS indicates a secure, encrypted connection to a website."
        },
        {
          id: 7,
          question: "What is social engineering?",
          options: [
            "Manipulating people into breaking security procedures",
            "A type of computer engineering",
            "Designing social media websites",
            "Engineering for social networks"
          ],
          correctAnswer: 0,
          explanation: "Social engineering manipulates people rather than attacking technology directly."
        },
        {
          id: 8,
          question: "What should users do with unexpected email attachments?",
          options: [
            "Don't open them",
            "Open them immediately",
            "Forward them to friends",
            "Save them for later"
          ],
          correctAnswer: 0,
          explanation: "Unexpected attachments may contain malware and shouldn't be opened."
        },
        {
          id: 9,
          question: "What should you do when stepping away from your computer?",
          options: [
            "Lock the screen",
            "Leave it running",
            "Turn off the monitor",
            "Close all programs"
          ],
          correctAnswer: 0,
          explanation: "Always lock your computer when leaving it unattended to prevent unauthorized access."
        },
        {
          id: 10,
          question: "What can password managers help with?",
          options: [
            "Creating and storing strong passwords",
            "Remembering where you put things",
            "Managing computer memory",
            "Organizing files on desktop"
          ],
          correctAnswer: 0,
          explanation: "Password managers generate and securely store complex passwords for multiple accounts."
        },
        {
          id: 11,
          question: "What is a security breach consequence?",
          options: [
            "Financial loss and reputation damage",
            "Faster computer performance",
            "More storage space",
            "Better internet speed"
          ],
          correctAnswer: 0,
          explanation: "Breaches can cause financial losses, reputation damage, legal issues, and operational problems."
        },
        {
          id: 12,
          question: "What does ransomware do?",
          options: [
            "Encrypts files for ransom",
            "Speeds up computers",
            "Cleans up disk space",
            "Organizes files automatically"
          ],
          correctAnswer: 0,
          explanation: "Ransomware encrypts files and demands payment to restore access."
        },
        {
          id: 13,
          question: "What makes a password strong?",
          options: [
            "Mix of uppercase, lowercase, numbers, and symbols",
            "Just using your name",
            "Simple dictionary words",
            "Short and easy to remember"
          ],
          correctAnswer: 0,
          explanation: "Strong passwords use character variety and avoid predictable patterns."
        },
        {
          id: 14,
          question: "What type of updates fix router security?",
          options: [
            "Firmware updates",
            "Operating system updates",
            "Application updates",
            "Driver updates"
          ],
          correctAnswer: 0,
          explanation: "Firmware updates improve security and functionality of devices like routers."
        },
        {
          id: 15,
          question: "What is a common phishing warning sign?",
          options: [
            "Urgent language demanding immediate action",
            "Professional company logos",
            "Clear contact information",
            "Proper grammar and spelling"
          ],
          correctAnswer: 0,
          explanation: "Phishing often uses urgency to pressure victims into acting without thinking."
        },
        {
          id: 16,
          question: "What should be done before disposing of old devices?",
          options: [
            "Securely erase all data",
            "Throw them in regular trash",
            "Give them to anyone",
            "Keep them forever"
          ],
          correctAnswer: 0,
          explanation: "Always securely erase data to prevent recovery of sensitive information from old devices."
        },
        {
          id: 17,
          question: "What is the IT support role in security?",
          options: [
            "Educating users and implementing policies",
            "Ignoring security concerns",
            "Creating security vulnerabilities",
            "Only fixing broken computers"
          ],
          correctAnswer: 0,
          explanation: "IT support helps maintain security through education, policy implementation, and monitoring."
        },
        {
          id: 18,
          question: "What should you do with suspicious links in emails?",
          options: [
            "Hover over to see real destination",
            "Click immediately to check",
            "Forward to all contacts",
            "Ignore all links always"
          ],
          correctAnswer: 0,
          explanation: "Hovering shows the actual URL destination before clicking."
        },
        {
          id: 19,
          question: "What is a passphrase?",
          options: [
            "Multiple random words together",
            "A single complex word",
            "Your favorite quote",
            "A mathematical formula"
          ],
          correctAnswer: 0,
          explanation: "Passphrases use multiple random words for length and memorability."
        },
        {
          id: 20,
          question: "What balance should good security achieve?",
          options: [
            "Protection without preventing work",
            "Maximum protection always",
            "No security for easy access",
            "Security only for important files"
          ],
          correctAnswer: 0,
          explanation: "Effective security protects systems while allowing users to accomplish their work."
        }
      ]
    }
  ],
  
  // Final Exam (40 questions covering all modules)
  finalExam: {
    title: "IT Support Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score 70% or higher to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What is the primary goal of IT support?",
        options: [
          "To keep technology running smoothly for users",
          "To design new computer hardware",
          "To create software applications",
          "To manage company finances"
        ],
        correctAnswer: 0,
        explanation: "IT support aims to maintain technology functionality so users can work without interruptions.",
        module: 1
      },
      {
        id: 2,
        question: "Which tool helps IT support track and manage user requests?",
        options: [
          "Ticketing system",
          "Spreadsheet software",
          "Graphics program",
          "Accounting software"
        ],
        correctAnswer: 0,
        explanation: "Ticketing systems organize and track support requests from submission to resolution.",
        module: 1
      },
      {
        id: 3,
        question: "What skill involves explaining technical concepts in simple terms?",
        options: [
          "Communication",
          "Programming",
          "Networking",
          "Troubleshooting"
        ],
        correctAnswer: 0,
        explanation: "Clear communication makes technical information understandable to non-technical users.",
        module: 1
      },
      {
        id: 4,
        question: "What does remote access software allow IT support to do?",
        options: [
          "Connect to user computers remotely",
          "Monitor building security cameras",
          "Control office temperature",
          "Access company financial records"
        ],
        correctAnswer: 0,
        explanation: "Remote access enables troubleshooting user computers from a different location.",
        module: 1
      },
      {
        id: 5,
        question: "What type of support is Help Desk Technician known for?",
        options: [
          "First point of contact for users",
          "Designing network infrastructure",
          "Developing software applications",
          "Managing data centers"
        ],
        correctAnswer: 0,
        explanation: "Help Desk Technicians are typically the initial contact for user support requests.",
        module: 1
      },
      {
        id: 6,
        question: "Why is documentation important in IT support?",
        options: [
          "Records problems and solutions for future reference",
          "Tracks employee work hours",
          "Calculates department budgets",
          "Monitors internet usage"
        ],
        correctAnswer: 0,
        explanation: "Documentation creates a knowledge base that helps solve similar future problems.",
        module: 1
      },
      {
        id: 7,
        question: "What is the ultimate purpose of IT support according to Module 1?",
        options: [
          "Helping people complete their work or connect with others",
          "Making computers as fast as possible",
          "Replacing all equipment regularly",
          "Creating complex technology systems"
        ],
        correctAnswer: 0,
        explanation: "IT support ultimately enables people to accomplish tasks through functioning technology.",
        module: 1
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What is often called the 'brain' of the computer?",
        options: [
          "CPU",
          "RAM",
          "Hard drive",
          "Power supply"
        ],
        correctAnswer: 0,
        explanation: "The CPU (Central Processing Unit) processes instructions like a brain processes thoughts.",
        module: 2
      },
      {
        id: 9,
        question: "What does RAM stand for?",
        options: [
          "Random Access Memory",
          "Readily Available Memory",
          "Rapid Access Module",
          "Random Allocation Memory"
        ],
        correctAnswer: 0,
        explanation: "RAM stands for Random Access Memory, the computer's temporary working memory.",
        module: 2
      },
      {
        id: 10,
        question: "Which storage device has no moving parts?",
        options: [
          "Solid State Drive (SSD)",
          "Hard Disk Drive (HDD)",
          "Optical Drive",
          "Tape Drive"
        ],
        correctAnswer: 0,
        explanation: "SSDs use flash memory with no moving parts, making them faster and more durable.",
        module: 2
      },
      {
        id: 11,
        question: "What is the main circuit board that connects all components?",
        options: [
          "Motherboard",
          "Power supply",
          "Graphics card",
          "CPU"
        ],
        correctAnswer: 0,
        explanation: "The motherboard provides connections and communication between all computer components.",
        module: 2
      },
      {
        id: 12,
        question: "What does a power supply do?",
        options: [
          "Converts electricity for computer components",
          "Stores electrical power",
          "Controls computer temperature",
          "Manages internet connection"
        ],
        correctAnswer: 0,
        explanation: "Power supplies convert wall outlet power to voltages needed by computer parts.",
        module: 2
      },
      {
        id: 13,
        question: "Which component generates heat and needs cooling?",
        options: [
          "CPU",
          "RAM",
          "SSD",
          "Keyboard"
        ],
        correctAnswer: 0,
        explanation: "CPUs generate significant heat during operation and require cooling systems.",
        module: 2
      },
      {
        id: 14,
        question: "What are peripherals?",
        options: [
          "Devices connected to the computer",
          "Internal computer components",
          "Software programs",
          "Network cables"
        ],
        correctAnswer: 0,
        explanation: "Peripherals are external devices like monitors, keyboards, and printers.",
        module: 2
      },
      
      // Module 3 Questions (6 questions)
      {
        id: 15,
        question: "What is the main difference between software and hardware?",
        options: [
          "Software is instructions, hardware is physical",
          "Software is expensive, hardware is cheap",
          "Software is inside, hardware is outside",
          "Software is for work, hardware is for games"
        ],
        correctAnswer: 0,
        explanation: "Software consists of programs/instructions, while hardware refers to physical components.",
        module: 3
      },
      {
        id: 16,
        question: "What is the most important software on any computer?",
        options: [
          "Operating system",
          "Web browser",
          "Word processor",
          "Antivirus program"
        ],
        correctAnswer: 0,
        explanation: "The operating system manages hardware and enables other software to run.",
        module: 3
      },
      {
        id: 17,
        question: "Which operating system is most widely used on personal computers?",
        options: [
          "Windows",
          "macOS",
          "Linux",
          "Chrome OS"
        ],
        correctAnswer: 0,
        explanation: "Windows has the largest market share for personal computer operating systems.",
        module: 3
      },
      {
        id: 18,
        question: "What should you check before installing software?",
        options: [
          "System requirements",
          "Color of the installer",
          "Price of the software",
          "Company location"
        ],
        correctAnswer: 0,
        explanation: "System requirements ensure the computer can properly run the software.",
        module: 3
      },
      {
        id: 19,
        question: "What is the first basic troubleshooting step for software problems?",
        options: [
          "Restart the program",
          "Reinstall the operating system",
          "Replace the hardware",
          "Call the software company"
        ],
        correctAnswer: 0,
        explanation: "Restarting often resolves temporary software issues.",
        module: 3
      },
      {
        id: 20,
        question: "Why do software companies release updates?",
        options: [
          "To fix bugs and improve security",
          "To make software more expensive",
          "To change the software name",
          "To reduce features"
        ],
        correctAnswer: 0,
        explanation: "Updates address problems, add features, and enhance security.",
        module: 3
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 21,
        question: "What is a network?",
        options: [
          "Collection of connected devices that can communicate",
          "A single computer by itself",
          "A type of software program",
          "A computer storage device"
        ],
        correctAnswer: 0,
        explanation: "Networks connect devices to share resources and information.",
        module: 4
      },
      {
        id: 22,
        question: "What device connects different networks together?",
        options: [
          "Router",
          "Switch",
          "Modem",
          "Cable"
        ],
        correctAnswer: 0,
        explanation: "Routers connect networks, such as linking a home network to the internet.",
        module: 4
      },
      {
        id: 23,
        question: "What is an IP address?",
        options: [
          "Unique identifier for devices on a network",
          "Internet password",
          "Software license key",
          "Computer serial number"
        ],
        correctAnswer: 0,
        explanation: "IP addresses uniquely identify devices for network communication.",
        module: 4
      },
      {
        id: 24,
        question: "What does ISP stand for?",
        options: [
          "Internet Service Provider",
          "Internet System Protocol",
          "Internal Service Provider",
          "International System Provider"
        ],
        correctAnswer: 0,
        explanation: "ISPs provide internet access to homes and businesses.",
        module: 4
      },
      {
        id: 25,
        question: "What is the first step in basic network troubleshooting?",
        options: [
          "Check physical connections",
          "Replace all equipment",
          "Call the internet provider",
          "Buy new computers"
        ],
        correctAnswer: 0,
        explanation: "Loose or damaged cables are common network issues.",
        module: 4
      },
      {
        id: 26,
        question: "What type of IP address is automatically assigned?",
        options: [
          "Dynamic IP address",
          "Static IP address",
          "Manual IP address",
          "Fixed IP address"
        ],
        correctAnswer: 0,
        explanation: "Dynamic addresses are automatically assigned by DHCP servers.",
        module: 4
      },
      
      // Module 5 Questions (7 questions)
      {
        id: 27,
        question: "What should you avoid when speaking with non-technical users?",
        options: [
          "Technical jargon",
          "Simple explanations",
          "Polite language",
          "Clear instructions"
        ],
        correctAnswer: 0,
        explanation: "Technical terms confuse non-technical users; use simple language instead.",
        module: 5
      },
      {
        id: 28,
        question: "What is the first step in a support interaction?",
        options: [
          "Greet professionally",
          "Fix the problem immediately",
          "Ask for payment",
          "Check computer specs"
        ],
        correctAnswer: 0,
        explanation: "Professional greetings establish rapport and start interactions positively.",
        module: 5
      },
      {
        id: 29,
        question: "What is the first step in problem-solving?",
        options: [
          "Gather information",
          "Restart the computer",
          "Replace hardware",
          "Call for backup"
        ],
        correctAnswer: 0,
        explanation: "Complete information gathering enables accurate problem diagnosis.",
        module: 5
      },
      {
        id: 30,
        question: "How should you handle an angry user?",
        options: [
          "Stay calm and validate their feelings",
          "Get angry in response",
          "Ignore their emotions",
          "Tell them to calm down"
        ],
        correctAnswer: 0,
        explanation: "Calm responses and empathy help de-escalate tense situations.",
        module: 5
      },
      {
        id: 31,
        question: "What should you do before taking remote control of a user's computer?",
        options: [
          "Ask permission and explain what you'll do",
          "Take control immediately to save time",
          "Wait until they leave their desk",
          "Do it secretly to avoid worrying them"
        ],
        correctAnswer: 0,
        explanation: "Permission and explanation build trust and prevent user alarm.",
        module: 5
      },
      {
        id: 32,
        question: "Why is documentation important?",
        options: [
          "Helps with future similar problems",
          "Takes up time unnecessarily",
          "Makes work seem more important",
          "Is required by law"
        ],
        correctAnswer: 0,
        explanation: "Documentation creates institutional knowledge for solving recurring issues.",
        module: 5
      },
      {
        id: 33,
        question: "What is active listening?",
        options: [
          "Paying full attention to understand",
          "Thinking about your response while they talk",
          "Waiting for them to stop talking",
          "Correcting their mistakes immediately"
        ],
        correctAnswer: 0,
        explanation: "Active listening focuses on comprehension rather than just hearing words.",
        module: 5
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        question: "What is malware?",
        options: [
          "Malicious software like viruses and ransomware",
          "Helpful software for cleaning computers",
          "Software that makes computers faster",
          "Legal software for monitoring"
        ],
        correctAnswer: 0,
        explanation: "Malware is software designed to harm or exploit computer systems.",
        module: 6
      },
      {
        id: 35,
        question: "What is phishing?",
        options: [
          "Fake emails tricking users into revealing information",
          "A type of computer game",
          "A method for faster internet",
          "A way to organize files"
        ],
        correctAnswer: 0,
        explanation: "Phishing attempts to steal sensitive information through deception.",
        module: 6
      },
      {
        id: 36,
        question: "How long should strong passwords be?",
        options: [
          "At least 12 characters",
          "Exactly 8 characters",
          "No more than 6 characters",
          "As short as possible"
        ],
        correctAnswer: 0,
        explanation: "Longer passwords are harder for attackers to crack.",
        module: 6
      },
      {
        id: 37,
        question: "Why are software updates important for security?",
        options: [
          "They fix security vulnerabilities",
          "They make software more expensive",
          "They change software colors",
          "They add unnecessary features"
        ],
        correctAnswer: 0,
        explanation: "Updates patch security holes that attackers could exploit.",
        module: 6
      },
      {
        id: 38,
        question: "What should users do with unexpected email attachments?",
        options: [
          "Don't open them",
          "Open them immediately",
          "Forward them to friends",
          "Save them for later"
        ],
        correctAnswer: 0,
        explanation: "Unexpected attachments may contain malware.",
        module: 6
      },
      {
        id: 39,
        question: "What should you do when stepping away from your computer?",
        options: [
          "Lock the screen",
          "Leave it running",
          "Turn off the monitor",
          "Close all programs"
        ],
        correctAnswer: 0,
        explanation: "Screen locking prevents unauthorized access during absences.",
        module: 6
      },
      {
        id: 40,
        question: "What is social engineering?",
        options: [
          "Manipulating people into breaking security procedures",
          "A type of computer engineering",
          "Designing social media websites",
          "Engineering for social networks"
        ],
        correctAnswer: 0,
        explanation: "Social engineering targets human psychology rather than technical vulnerabilities.",
        module: 6
      }
    ]
  }
};
