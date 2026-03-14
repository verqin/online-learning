// Zoology (Certificate) Course Content
// All content is text-only, easy to learn, with integrated quizzes

export const zoologyCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "zoology-certificate",
  title: "Zoology (Certificate)",
  description: "An introduction to the study of animals, their classification, behavior, anatomy, and ecology. Learn fundamental zoological concepts through easy-to-understand explanations and real-world examples.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🦁",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE (6 Modules + Exam)
  modules: [
    {
      id: 1,
      title: "Introduction to Animal Life",
      content: `# Module 1: Introduction to Animal Life

## What is Zoology?
Welcome to zoology! This is the scientific study of animals. Zoologists explore everything about animals - how they're built, how they behave, where they live, and how they relate to each other.

Animals are all around us, from pets in our homes to wildlife in forests and oceans. Studying animals helps us understand life on Earth and our place in nature.

## Characteristics of Animals
All animals share certain features that make them different from plants, fungi, and other living things:

**Animals are multicellular** - they have many cells working together
**Animals are eukaryotic** - their cells have nuclei
**Animals are heterotrophic** - they eat other organisms for food
**Animals can move** - at least at some stage of their life
**Animals reproduce** - they make more of their own kind

These features help us recognize animals wherever we find them.

## Animal Classification Basics
Scientists group animals to make them easier to study. The main groups are:

**Vertebrates** - animals with backbones (like mammals, birds, fish)
**Invertebrates** - animals without backbones (like insects, worms, jellyfish)

There are many more invertebrates than vertebrates - about 97% of all animal species!

## Major Animal Groups
Let's look at some familiar animal groups:

**Mammals:** Have hair or fur, feed milk to their young (dogs, cats, humans)
**Birds:** Have feathers, lay eggs, most can fly (robins, eagles, penguins)
**Fish:** Live in water, breathe through gills, have scales (goldfish, sharks, salmon)
**Reptiles:** Have dry scales, lay eggs on land (snakes, lizards, turtles)
**Amphibians:** Start life in water, develop lungs (frogs, salamanders)
**Insects:** Have six legs, three body parts, often wings (butterflies, ants, beetles)
**Arachnids:** Have eight legs, two body parts (spiders, scorpions)

## Animal Habitats
Animals live in many different places called habitats:

**Terrestrial habitats** - on land (forests, deserts, grasslands)
**Aquatic habitats** - in water (oceans, rivers, lakes)
**Aerial habitats** - in the air (though most only visit to travel or hunt)

Each habitat has special features that animals adapt to.

## Why Study Animals?
Learning about animals is important for many reasons:

**Scientific understanding** - Animals help us learn about biology
**Conservation** - We need to protect endangered species
**Medicine** - Animal research helps human health
**Agriculture** - We depend on animals for food and products
**Companionship** - Pets improve our lives
**Inspiration** - Animals amaze and inspire us

Zoology connects us to the living world around us.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does zoology study?",
          options: ["Only plants", "Animals and their characteristics", "Rocks and minerals", "Weather patterns"],
          correctAnswer: 1,
          explanation: "Zoology is the scientific study of animals - their structure, behavior, classification, and ecology."
        },
        {
          id: 2,
          question: "What does 'heterotrophic' mean for animals?",
          options: ["They make their own food", "They eat other organisms for food", "They don't need food", "They only eat plants"],
          correctAnswer: 1,
          explanation: "Heterotrophic means animals must consume other living things for energy and nutrients."
        },
        {
          id: 3,
          question: "What percentage of animal species are invertebrates?",
          options: ["About 50%", "About 97%", "About 25%", "About 10%"],
          correctAnswer: 1,
          explanation: "Approximately 97% of all animal species are invertebrates - animals without backbones."
        },
        {
          id: 4,
          question: "Which animal group has feathers?",
          options: ["Mammals", "Birds", "Reptiles", "Fish"],
          correctAnswer: 1,
          explanation: "Birds are the only animal group that has feathers, which help with flight and insulation."
        },
        {
          id: 5,
          question: "What is a terrestrial habitat?",
          options: ["In water", "On land", "In the air", "Underground only"],
          correctAnswer: 1,
          explanation: "Terrestrial habitats are land-based environments like forests, deserts, and grasslands."
        },
        {
          id: 6,
          question: "Which characteristic do all animals share?",
          options: ["They have backbones", "They are multicellular", "They can photosynthesize", "They live only on land"],
          correctAnswer: 1,
          explanation: "All animals are multicellular, meaning they consist of many cells working together."
        },
        {
          id: 7,
          question: "What do mammals feed their young?",
          options: ["Only solid food", "Milk from mammary glands", "Only water", "Regurgitated food"],
          correctAnswer: 1,
          explanation: "Mammals produce milk from mammary glands to feed their babies."
        },
        {
          id: 8,
          question: "Where do amphibians typically start their lives?",
          options: ["On dry land", "In water", "In trees", "In burrows"],
          correctAnswer: 1,
          explanation: "Most amphibians begin life as aquatic larvae (like tadpoles) before developing into land-dwelling adults."
        },
        {
          id: 9,
          question: "How many legs do insects have?",
          options: ["Four legs", "Six legs", "Eight legs", "Ten legs"],
          correctAnswer: 1,
          explanation: "All insects have six legs, which is one of their defining characteristics."
        },
        {
          id: 10,
          question: "What type of scales do reptiles have?",
          options: ["Wet, slimy scales", "Dry, waterproof scales", "No scales", "Feather-like scales"],
          correctAnswer: 1,
          explanation: "Reptiles have dry, waterproof scales that help prevent water loss on land."
        },
        {
          id: 11,
          question: "What do fish use to breathe underwater?",
          options: ["Lungs", "Gills", "Their skin", "No breathing needed"],
          correctAnswer: 1,
          explanation: "Fish extract oxygen from water using specialized organs called gills."
        },
        {
          id: 12,
          question: "What does 'eukaryotic' mean for animal cells?",
          options: ["Cells have no nucleus", "Cells have a nucleus", "Cells are very small", "Cells can change shape"],
          correctAnswer: 1,
          explanation: "Eukaryotic cells have a nucleus that contains their genetic material (DNA)."
        },
        {
          id: 13,
          question: "Which group includes spiders and scorpions?",
          options: ["Insects", "Arachnids", "Mammals", "Reptiles"],
          correctAnswer: 1,
          explanation: "Arachnids include spiders, scorpions, ticks, and mites - all with eight legs."
        },
        {
          id: 14,
          question: "What is an aquatic habitat?",
          options: ["In trees", "In water", "In caves", "On mountains"],
          correctAnswer: 1,
          explanation: "Aquatic habitats are water environments like oceans, rivers, lakes, and ponds."
        },
        {
          id: 15,
          question: "Why is animal conservation important?",
          options: ["Only for zoos", "To protect endangered species and ecosystems", "Only for hunting", "Only for pets"],
          correctAnswer: 1,
          explanation: "Conservation protects biodiversity, maintains ecosystems, and preserves species for future generations."
        },
        {
          id: 16,
          question: "What can animals do that plants cannot?",
          options: ["Photosynthesize", "Move voluntarily", "Grow toward light", "Produce oxygen"],
          correctAnswer: 1,
          explanation: "Animals can move voluntarily at some stage of their life, while plants are generally stationary."
        },
        {
          id: 17,
          question: "What do all vertebrates have?",
          options: ["Wings", "Backbones", "Six legs", "Scales"],
          correctAnswer: 1,
          explanation: "Vertebrates are defined by having a backbone or spinal column."
        },
        {
          id: 18,
          question: "Where do most birds lay their eggs?",
          options: ["In water", "On land", "Only in nests", "They give live birth"],
          correctAnswer: 1,
          explanation: "Birds lay eggs with hard shells, typically in nests or protected areas on land."
        },
        {
          id: 19,
          question: "What is one reason we study animals for medicine?",
          options: ["They never get sick", "Animal research helps understand human diseases", "Animals don't need medicine", "Only for veterinary medicine"],
          correctAnswer: 1,
          explanation: "Studying animals helps us understand biological processes and develop treatments for human diseases."
        },
        {
          id: 20,
          question: "What do animals need from their habitat?",
          options: ["Only food", "Food, water, shelter, and space", "Only shelter", "Only other animals"],
          correctAnswer: 1,
          explanation: "Animals require food, water, shelter, and adequate space to survive and thrive in their habitats."
        }
      ]
    },
    {
      id: 2,
      title: "Animal Classification Systems",
      content: `# Module 2: Animal Classification Systems

## Why Classify Animals?
Scientists classify animals to organize the millions of species and understand how they're related. Classification helps us study, communicate about, and protect animals more effectively.

Think of classification like organizing a library - it helps us find information and see connections between different books (or animals).

## The Taxonomic Hierarchy
Animals are classified using a system with seven main levels:

**Kingdom** - The broadest category (all animals are in Kingdom Animalia)
**Phylum** - Major groups within the kingdom
**Class** - Groups within phyla
**Order** - Groups within classes
**Family** - Groups within orders
**Genus** - Groups within families
**Species** - The most specific category

We use scientific names that include genus and species (like Panthera leo for lions).

## Major Animal Phyla
Let's look at some important animal phyla:

**Porifera** - Sponges (simple, filter-feeding animals)
**Cnidaria** - Jellyfish, corals, sea anemones (have stinging cells)
**Platyhelminthes** - Flatworms (simple, flattened bodies)
**Nematoda** - Roundworms (cylindrical, unsegmented bodies)
**Annelida** - Segmented worms (like earthworms)
**Arthropoda** - Insects, spiders, crustaceans (jointed legs, exoskeleton)
**Mollusca** - Snails, clams, octopuses (soft bodies, often with shells)
**Echinodermata** - Starfish, sea urchins (spiny skin, radial symmetry)
**Chordata** - Animals with backbones or similar features

## Vertebrate Classes
Within Chordata, these are the main vertebrate classes:

**Agnatha** - Jawless fish (lampreys, hagfish)
**Chondrichthyes** - Cartilaginous fish (sharks, rays)
**Osteichthyes** - Bony fish (most common fish)
**Amphibia** - Amphibians (frogs, salamanders)
**Reptilia** - Reptiles (snakes, lizards, turtles)
**Aves** - Birds (all bird species)
**Mammalia** - Mammals (animals with hair and mammary glands)

## Dichotomous Keys
Scientists use tools called dichotomous keys to identify animals. These are like choose-your-own-adventure books:

You answer pairs of questions (dichotomous means "divided in two")
Each answer leads to another pair of questions
Eventually you identify the animal

Example: Does it have feathers? If yes → bird. If no → go to next question.

## Scientific Naming System
Every animal has a scientific name with two parts:

**Genus name** - Capitalized, like a last name
**Species name** - Lowercase, like a first name

Example: Canis familiaris (domestic dog)
Canis is the genus (includes wolves and coyotes too)
familiaris is the species (specific to domestic dogs)

Scientific names are Latin or Greek and understood worldwide.

## Classification Characteristics
Animals are classified based on shared characteristics:

**Body symmetry** - Radial (like a pie) or bilateral (like a human)
**Body cavities** - Presence and type of body spaces
**Digestive system** - Complete or incomplete
**Skeletal type** - Endoskeleton, exoskeleton, or hydrostatic
**Reproduction** - Sexual or asexual methods
**Development** - Direct or with larval stages

These features show evolutionary relationships.

## Modern Classification Methods
Today, scientists also use:
**DNA analysis** - Comparing genetic material
**Molecular clocks** - Estimating evolutionary timing
**Computer models** - Analyzing large datasets

These methods help us understand how animals evolved and are related.

Classification is constantly updated as we learn more!`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many main levels are in the taxonomic hierarchy?",
          options: ["Three levels", "Five levels", "Seven levels", "Ten levels"],
          correctAnswer: 2,
          explanation: "The traditional taxonomic hierarchy has seven main levels: Kingdom, Phylum, Class, Order, Family, Genus, Species."
        },
        {
          id: 2,
          question: "Which phylum includes animals with stinging cells?",
          options: ["Porifera", "Cnidaria", "Annelida", "Mollusca"],
          correctAnswer: 1,
          explanation: "Cnidarians (jellyfish, corals) have specialized stinging cells called cnidocytes for defense and capturing prey."
        },
        {
          id: 3,
          question: "What is the broadest classification category?",
          options: ["Species", "Genus", "Kingdom", "Family"],
          correctAnswer: 2,
          explanation: "Kingdom is the broadest category, grouping all animals together before dividing into more specific groups."
        },
        {
          id: 4,
          question: "Which class includes sharks and rays?",
          options: ["Osteichthyes", "Chondrichthyes", "Agnatha", "Mammalia"],
          correctAnswer: 1,
          explanation: "Chondrichthyes are cartilaginous fish whose skeletons are made of cartilage rather than bone."
        },
        {
          id: 5,
          question: "What tool uses paired questions to identify animals?",
          options: ["Microscope", "Dichotomous key", "DNA sequencer", "Field guide only"],
          correctAnswer: 1,
          explanation: "Dichotomous keys present pairs of contrasting questions that lead to identification through a series of choices."
        },
        {
          id: 6,
          question: "What language are scientific names usually based on?",
          options: ["English", "Latin or Greek", "French", "German"],
          correctAnswer: 1,
          explanation: "Scientific names use Latin or Greek roots so they can be understood internationally by scientists."
        },
        {
          id: 7,
          question: "Which phylum has the most species?",
          options: ["Chordata", "Arthropoda", "Mollusca", "Annelida"],
          correctAnswer: 1,
          explanation: "Arthropoda includes insects, spiders, and crustaceans - the largest phylum with over a million described species."
        },
        {
          id: 8,
          question: "What type of symmetry do most animals have?",
          options: ["Radial symmetry", "Bilateral symmetry", "Asymmetry", "Spherical symmetry"],
          correctAnswer: 1,
          explanation: "Most animals have bilateral symmetry where the body can be divided into matching left and right halves."
        },
        {
          id: 9,
          question: "What does the genus name in scientific naming indicate?",
          options: ["The specific individual", "A group of closely related species", "The habitat type", "The country of origin"],
          correctAnswer: 1,
          explanation: "The genus represents a group of closely related species that share common characteristics."
        },
        {
          id: 10,
          question: "Which vertebrate class is characterized by having hair?",
          options: ["Aves", "Reptilia", "Mammalia", "Amphibia"],
          correctAnswer: 2,
          explanation: "Mammals are distinguished by having hair or fur at some stage of their life."
        },
        {
          id: 11,
          question: "What is the most specific classification level?",
          options: ["Kingdom", "Phylum", "Species", "Order"],
          correctAnswer: 2,
          explanation: "Species is the most specific level, referring to a single type of organism that can interbreed."
        },
        {
          id: 12,
          question: "Which phylum includes animals with spiny skin?",
          options: ["Echinodermata", "Porifera", "Nematoda", "Platyhelminthes"],
          correctAnswer: 0,
          explanation: "Echinoderms (starfish, sea urchins) have spiny skin and often radial symmetry as adults."
        },
        {
          id: 13,
          question: "What modern method compares genetic material?",
          options: ["DNA analysis", "Only physical examination", "Behavior observation", "Habitat mapping"],
          correctAnswer: 0,
          explanation: "DNA analysis compares genetic sequences to determine evolutionary relationships between species."
        },
        {
          id: 14,
          question: "Which class includes jawless fish?",
          options: ["Chondrichthyes", "Osteichthyes", "Agnatha", "Amphibia"],
          correctAnswer: 2,
          explanation: "Agnatha are primitive jawless fish like lampreys and hagfish."
        },
        {
          id: 15,
          question: "What is a complete digestive system?",
          options: ["Only one opening", "Two openings (mouth and anus)", "No digestive system", "External digestion only"],
          correctAnswer: 1,
          explanation: "A complete digestive system has separate openings for food intake (mouth) and waste elimination (anus)."
        },
        {
          id: 16,
          question: "Which phylum includes segmented worms?",
          options: ["Nematoda", "Annelida", "Platyhelminthes", "Porifera"],
          correctAnswer: 1,
          explanation: "Annelids like earthworms have bodies divided into repeating segments."
        },
        {
          id: 17,
          question: "What does 'bilateral' symmetry mean?",
          options: ["Symmetrical around a central point", "Symmetrical along one plane", "No symmetry", "Changing symmetry"],
          correctAnswer: 1,
          explanation: "Bilateral symmetry means the body can be divided into mirror-image halves along one plane."
        },
        {
          id: 18,
          question: "Which class name means 'birds'?",
          options: ["Mammalia", "Aves", "Reptilia", "Amphibia"],
          correctAnswer: 1,
          explanation: "Aves is the scientific class name for all bird species."
        },
        {
          id: 19,
          question: "Why is classification constantly updated?",
          options: ["Because names are arbitrary", "New discoveries change our understanding", "To confuse students", "Only when scientists disagree"],
          correctAnswer: 1,
          explanation: "New fossil discoveries, DNA evidence, and research findings continually refine our understanding of animal relationships."
        },
        {
          id: 20,
          question: "What is an exoskeleton?",
          options: ["Internal skeleton", "External protective covering", "No skeleton", "Fluid-filled skeleton"],
          correctAnswer: 1,
          explanation: "An exoskeleton is a hard external covering that supports and protects the animal's body, like in insects and crabs."
        }
      ]
    },
    {
      id: 3,
      title: "Animal Anatomy and Physiology",
      content: `# Module 3: Animal Anatomy and Physiology

## Understanding Animal Bodies
Anatomy studies animal structure - what parts they have and how they're arranged. Physiology studies how those parts work. Together, they explain how animals live and function.

All animals need certain body systems to survive, though these systems work differently in different animals.

## Basic Body Plans
Animals have different body organization levels:

**Cellular level** - Simple animals like sponges where cells work somewhat independently
**Tissue level** - Cells organized into tissues (like jellyfish)
**Organ level** - Tissues form organs with specific functions
**Organ system level** - Organs work together in systems

More complex animals have higher levels of organization.

## Major Body Systems
Let's explore key systems animals need:

**Digestive system** - Breaks down food for energy and nutrients
**Circulatory system** - Moves materials around the body
**Respiratory system** - Exchanges gases (oxygen in, carbon dioxide out)
**Nervous system** - Controls body functions and responds to environment
**Muscular system** - Enables movement
**Skeletal system** - Provides support and protection
**Reproductive system** - Produces offspring

Different animals have different versions of these systems.

## Digestion and Nutrition
Animals get energy and nutrients from food:

**Herbivores** eat plants (cows, rabbits)
**Carnivores** eat other animals (lions, hawks)
**Omnivores** eat both plants and animals (bears, humans)
**Detritivores** eat dead organic matter (earthworms, vultures)

Digestive systems break food into molecules the body can use.

## Circulation and Respiration
Animals need to move materials through their bodies:

**Open circulatory systems** - Blood flows freely in body cavities (insects)
**Closed circulatory systems** - Blood stays in vessels (vertebrates)
**Simple diffusion** - Small animals exchange materials directly with environment
**Specialized organs** - Larger animals need gills, lungs, or tracheae

Larger animals need more efficient systems.

## Nervous Systems and Senses
Animals sense their environment and respond:

**Nerve nets** - Simple networks of nerve cells (jellyfish)
**Ganglia** - Clusters of nerve cells (worms, insects)
**Brains** - Complex nerve centers (vertebrates)

**Animal senses include:**
- Vision (eyes)
- Hearing (ears)
- Smell (nose or antennae)
- Touch (skin or specialized hairs)
- Taste (mouthparts)
- Special senses like echolocation in bats

## Movement and Support
Animals move in different ways:

**Hydrostatic skeletons** - Fluid-filled chambers (worms)
**Exoskeletons** - External hard coverings (insects, crabs)
**Endoskeletons** - Internal bones (vertebrates)

Muscles work against these skeletons to create movement.

## Reproduction Strategies
Animals reproduce to continue their species:

**Asexual reproduction** - One parent produces identical offspring
**Sexual reproduction** - Two parents produce genetically unique offspring
**External fertilization** - Eggs and sperm meet outside body (many fish)
**Internal fertilization** - Sperm deposited inside female (most land animals)

Different strategies work in different environments.

## Temperature Regulation
Animals handle body temperature differently:

**Ectotherms** - Get heat from environment (reptiles, fish)
**Endotherms** - Generate own body heat (mammals, birds)
**Poikilotherms** - Body temperature varies with environment
**Homeotherms** - Maintain constant body temperature

Each strategy has advantages for different lifestyles.

## Adaptation to Environment
Animal bodies are adapted to their habitats:

**Aquatic adaptations** - Streamlined bodies, gills, fins
**Terrestrial adaptations** - Limbs for walking, lungs, waterproof skin
**Aerial adaptations** - Wings, lightweight bones, keen vision
**Desert adaptations** - Water conservation, temperature tolerance
**Arctic adaptations** - Insulation, heat conservation

Form follows function in animal design.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does anatomy study?",
          options: ["Animal behavior", "Animal structure and parts", "Animal evolution", "Animal habitats"],
          correctAnswer: 1,
          explanation: "Anatomy focuses on the structure of animals - what parts they have and how they're arranged."
        },
        {
          id: 2,
          question: "Which body organization level do sponges primarily have?",
          options: ["Organ level", "Tissue level", "Cellular level", "Organ system level"],
          correctAnswer: 2,
          explanation: "Sponges have cellular-level organization where cells function somewhat independently."
        },
        {
          id: 3,
          question: "What system breaks down food for energy?",
          options: ["Circulatory system", "Digestive system", "Nervous system", "Respiratory system"],
          correctAnswer: 1,
          explanation: "The digestive system processes food into nutrients the body can use for energy and growth."
        },
        {
          id: 4,
          question: "What type of animal eats both plants and animals?",
          options: ["Herbivore", "Carnivore", "Omnivore", "Detritivore"],
          correctAnswer: 2,
          explanation: "Omnivores have diets that include both plant and animal material."
        },
        {
          id: 5,
          question: "What type of circulatory system do insects have?",
          options: ["Closed system", "Open system", "No circulatory system", "Double circulatory system"],
          correctAnswer: 1,
          explanation: "Insects have open circulatory systems where blood flows freely in body cavities."
        },
        {
          id: 6,
          question: "What do animals with nerve nets have?",
          options: ["Complex brains", "Simple nerve networks", "No nervous system", "Only spinal cords"],
          correctAnswer: 1,
          explanation: "Nerve nets are simple networks of interconnected nerve cells found in animals like jellyfish."
        },
        {
          id: 7,
          question: "What is an endoskeleton?",
          options: ["External shell", "Fluid-filled chambers", "Internal bones", "No skeleton"],
          correctAnswer: 2,
          explanation: "An endoskeleton is an internal supporting structure, like the bones in vertebrates."
        },
        {
          id: 8,
          question: "What is asexual reproduction?",
          options: ["Two parents needed", "One parent produces identical offspring", "No reproduction", "Only in mammals"],
          correctAnswer: 1,
          explanation: "Asexual reproduction involves one parent producing genetically identical offspring."
        },
        {
          id: 9,
          question: "What are ectotherms?",
          options: ["Generate own body heat", "Get heat from environment", "Have constant temperature", "Only live in hot places"],
          correctAnswer: 1,
          explanation: "Ectotherms rely on external heat sources to regulate their body temperature."
        },
        {
          id: 10,
          question: "What adaptation helps aquatic animals move efficiently?",
          options: ["Wings", "Streamlined bodies", "Long legs", "Thick fur"],
          correctAnswer: 1,
          explanation: "Streamlined, tapered bodies reduce water resistance for efficient swimming."
        },
        {
          id: 11,
          question: "What does physiology study?",
          options: ["Animal classification", "How body parts function", "Animal distribution", "Fossil records"],
          correctAnswer: 1,
          explanation: "Physiology examines how animal body parts work and function together."
        },
        {
          id: 12,
          question: "What system exchanges gases with the environment?",
          options: ["Digestive system", "Respiratory system", "Nervous system", "Muscular system"],
          correctAnswer: 1,
          explanation: "The respiratory system handles oxygen intake and carbon dioxide removal."
        },
        {
          id: 13,
          question: "What do carnivores primarily eat?",
          options: ["Plants", "Other animals", "Both plants and animals", "Dead matter"],
          correctAnswer: 1,
          explanation: "Carnivores are meat-eaters that consume other animals."
        },
        {
          id: 14,
          question: "What type of circulatory system do vertebrates have?",
          options: ["Open system", "Closed system", "No system", "Simple diffusion"],
          correctAnswer: 1,
          explanation: "Vertebrates have closed circulatory systems with blood confined to vessels."
        },
        {
          id: 15,
          question: "What are ganglia?",
          options: ["Complex brains", "Clusters of nerve cells", "Nerve nets", "Only in humans"],
          correctAnswer: 1,
          explanation: "Ganglia are clusters of nerve cell bodies that serve as simple processing centers."
        },
        {
          id: 16,
          question: "What is a hydrostatic skeleton?",
          options: ["Hard external shell", "Fluid-filled chambers", "Internal bones", "No support system"],
          correctAnswer: 1,
          explanation: "Hydrostatic skeletons use fluid pressure in body chambers to provide support."
        },
        {
          id: 17,
          question: "What is sexual reproduction?",
          options: ["One parent only", "Two parents produce unique offspring", "No genetic variation", "Only in simple animals"],
          correctAnswer: 1,
          explanation: "Sexual reproduction involves two parents contributing genetic material to create unique offspring."
        },
        {
          id: 18,
          question: "What are endotherms?",
          options: ["Depend on environment for heat", "Generate own body heat", "Have variable temperature", "Only cold-blooded"],
          correctAnswer: 1,
          explanation: "Endotherms produce metabolic heat to maintain their body temperature."
        },
        {
          id: 19,
          question: "What adaptation helps desert animals conserve water?",
          options: ["Thin skin", "Water production", "Water conservation mechanisms", "Drinking constantly"],
          correctAnswer: 2,
          explanation: "Desert animals have adaptations like concentrated urine and efficient water reabsorption."
        },
        {
          id: 20,
          question: "What principle says 'form follows function'?",
          options: ["Animals change shape randomly", "Body structure relates to what it does", "All animals look alike", "Function doesn't matter"],
          correctAnswer: 1,
          explanation: "This principle means animal body structures are shaped by what they need to do to survive."
        }
      ]
    },
    {
      id: 4,
      title: "Animal Behavior",
      content: `# Module 4: Animal Behavior

## Understanding What Animals Do
Animal behavior includes all the things animals do - how they find food, avoid danger, communicate, reproduce, and interact with each other and their environment.

Studying behavior helps us understand animals better and can teach us about our own behavior too.

## Types of Behavior
Animal behaviors can be grouped into categories:

**Feeding behavior** - How animals find and eat food
**Defensive behavior** - How animals protect themselves
**Reproductive behavior** - How animals find mates and raise young
**Social behavior** - How animals interact with others of their species
**Communication** - How animals send and receive information
**Migration** - How animals move between habitats seasonally
**Habitat selection** - How animals choose where to live

## Innate vs. Learned Behavior
Animals show both types of behavior:

**Innate behaviors** - Born knowing how to do (also called instinctive)
Examples: Spiders spinning webs, birds building nests, suckling in mammals
These don't require learning or experience

**Learned behaviors** - Acquired through experience
Examples: Birds learning songs, animals learning food locations
These develop through practice, observation, or teaching

Most animals use both innate and learned behaviors.

## Feeding Strategies
Different animals have different feeding behaviors:

**Foraging** - Searching for food
**Hunting** - Actively pursuing prey
**Grazing** - Eating plants over large areas
**Filter feeding** - Straining food from water
**Scavenging** - Eating dead animals
**Storing food** - Saving food for later use

Each strategy suits different animals and environments.

## Defense Mechanisms
Animals protect themselves in various ways:

**Camouflage** - Blending with environment
**Mimicry** - Looking like something else
**Warning coloration** - Bright colors signaling danger
**Armor** - Hard shells or plates
**Chemical defenses** - Poisons or bad smells
**Flight** - Running or flying away
**Fight** - Using teeth, claws, or horns

Many animals use multiple defenses.

## Reproductive Behaviors
Animals have fascinating mating behaviors:

**Courtship displays** - Special behaviors to attract mates
**Mating rituals** - Series of behaviors leading to mating
**Parental care** - Protecting and feeding young
**Territorial defense** - Protecting breeding areas
**Mate selection** - Choosing the best partners

These behaviors help ensure successful reproduction.

## Social Behavior
Many animals live in groups with complex social interactions:

**Social hierarchies** - Rank orders within groups
**Cooperation** - Working together for mutual benefit
**Altruism** - Helping others at personal cost
**Aggression** - Fighting or threatening behaviors
**Play behavior** - Practice for adult skills

Social animals often have better survival chances.

## Communication Methods
Animals communicate in many ways:

**Visual signals** - Body postures, colors, movements
**Auditory signals** - Sounds, calls, songs
**Chemical signals** - Smells, pheromones
**Tactile signals** - Touch, grooming
**Electrical signals** - Used by some fish

Different signals work best in different situations.

## Migration and Movement
Some animals make remarkable journeys:

**Migration** - Regular, long-distance movements
**Hibernation** - Winter dormancy to conserve energy
**Estivation** - Summer dormancy in hot, dry conditions
**Dispersal** - Young animals leaving birthplace
**Nomadic movements** - Irregular wandering for resources

These movements help animals survive changing conditions.

## Studying Animal Behavior
Scientists study behavior through:
**Observation** - Watching animals in natural habitats
**Experiments** - Testing responses to different situations
**Tracking** - Following animal movements
**Recording** - Documenting sounds and behaviors

Understanding behavior helps with conservation and animal welfare.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is animal behavior?",
          options: ["Only what animals eat", "All things animals do", "Only mating activities", "Only aggressive actions"],
          correctAnswer: 1,
          explanation: "Animal behavior encompasses all actions animals take - feeding, mating, communicating, moving, and more."
        },
        {
          id: 2,
          question: "What type of behavior are animals born knowing?",
          options: ["Learned behavior", "Innate behavior", "Social behavior", "Complex behavior only"],
          correctAnswer: 1,
          explanation: "Innate (instinctive) behaviors are genetically programmed and don't require learning."
        },
        {
          id: 3,
          question: "What is foraging behavior?",
          options: ["Sleeping", "Searching for food", "Mating", "Fighting"],
          correctAnswer: 1,
          explanation: "Foraging involves searching for and obtaining food resources."
        },
        {
          id: 4,
          question: "What defense involves blending with surroundings?",
          options: ["Mimicry", "Camouflage", "Warning colors", "Chemical defense"],
          correctAnswer: 1,
          explanation: "Camouflage allows animals to hide by matching their background colors and patterns."
        },
        {
          id: 5,
          question: "What are courtship displays?",
          options: ["Fighting behaviors", "Special behaviors to attract mates", "Feeding behaviors", "Sleeping patterns"],
          correctAnswer: 1,
          explanation: "Courtship displays are specific behaviors animals use to attract and select mates."
        },
        {
          id: 6,
          question: "What is a social hierarchy?",
          options: ["All animals equal", "Rank order within a group", "No social structure", "Only in humans"],
          correctAnswer: 1,
          explanation: "Social hierarchies establish ranked relationships where some animals dominate others."
        },
        {
          id: 7,
          question: "What is an example of auditory communication?",
          options: ["Body posture", "Bird songs", "Color patterns", "Chemical scents"],
          correctAnswer: 1,
          explanation: "Auditory communication uses sounds like calls, songs, or other vocalizations."
        },
        {
          id: 8,
          question: "What is migration?",
          options: ["Staying in one place", "Regular long-distance movements", "Short daily movements", "No movement"],
          correctAnswer: 1,
          explanation: "Migration involves regular, seasonal movements between different geographic areas."
        },
        {
          id: 9,
          question: "How do scientists primarily study behavior?",
          options: ["Only in laboratories", "Through observation", "By guessing", "From books only"],
          correctAnswer: 1,
          explanation: "Observation of animals in natural or controlled settings is fundamental to behavior study."
        },
        {
          id: 10,
          question: "What is learned behavior?",
          options: ["Genetic programming", "Acquired through experience", "Present at birth", "Only in mammals"],
          correctAnswer: 1,
          explanation: "Learned behaviors develop through experience, practice, or observation."
        },
        {
          id: 11,
          question: "What is scavenging?",
          options: ["Hunting live prey", "Eating dead animals", "Growing food", "Storing food"],
          correctAnswer: 1,
          explanation: "Scavengers feed on dead animals they find rather than hunting live prey."
        },
        {
          id: 12,
          question: "What defense involves looking like something dangerous?",
          options: ["Camouflage", "Mimicry", "Armor", "Flight"],
          correctAnswer: 1,
          explanation: "Mimicry involves resembling another animal or object to deter predators."
        },
        {
          id: 13,
          question: "What is parental care?",
          options: ["Ignoring offspring", "Protecting and feeding young", "Only mating", "Competing with young"],
          correctAnswer: 1,
          explanation: "Parental care includes behaviors that protect, feed, and teach offspring."
        },
        {
          id: 14,
          question: "What is altruism in animals?",
          options: ["Helping others at personal cost", "Only helping oneself", "No social interaction", "Only in humans"],
          correctAnswer: 0,
          explanation: "Altruistic behavior benefits others while potentially costing the helper."
        },
        {
          id: 15,
          question: "What are pheromones?",
          options: ["Visual signals", "Chemical signals", "Sound signals", "Touch signals"],
          correctAnswer: 1,
          explanation: "Pheromones are chemical signals used for communication between animals of the same species."
        },
        {
          id: 16,
          question: "What is hibernation?",
          options: ["Summer dormancy", "Winter dormancy", "Constant activity", "Migration"],
          correctAnswer: 1,
          explanation: "Hibernation is a state of reduced metabolic activity during winter to conserve energy."
        },
        {
          id: 17,
          question: "What is an example of innate behavior?",
          options: ["Birds learning songs", "Spiders spinning webs", "Animals learning tricks", "Social learning"],
          correctAnswer: 1,
          explanation: "Web-spinning in spiders is instinctive - they don't need to learn how to do it."
        },
        {
          id: 18,
          question: "What are warning colors?",
          options: ["Camouflage colors", "Bright colors signaling danger", "Dull colors", "Changing colors"],
          correctAnswer: 1,
          explanation: "Warning coloration advertises that an animal is dangerous, poisonous, or tastes bad."
        },
        {
          id: 19,
          question: "What is play behavior often practice for?",
          options: ["Nothing important", "Adult skills and social interactions", "Only wasting energy", "Random actions"],
          correctAnswer: 1,
          explanation: "Play helps young animals practice skills they'll need as adults, like hunting or social interactions."
        },
        {
          id: 20,
          question: "Why study animal behavior?",
          options: ["Only for entertainment", "To understand animals and aid conservation", "To control animals", "Only for zoos"],
          correctAnswer: 1,
          explanation: "Understanding behavior helps with conservation, animal welfare, and ecological management."
        }
      ]
    },
    {
      id: 5,
      title: "Animal Ecology and Habitats",
      content: `# Module 5: Animal Ecology and Habitats

## Animals in Their Environments
Ecology studies how animals interact with each other and their environment. This module explores where animals live, how they survive there, and their relationships with other living things.

Every animal has a specific role and place in nature's web.

## Ecosystems and Habitats
Key ecological concepts:

**Ecosystem** - A community of living things plus their physical environment
**Habitat** - The specific place where an animal lives
**Niche** - An animal's role in its ecosystem (what it eats, where it lives, how it behaves)
**Population** - All individuals of one species in an area
**Community** - All populations living together in an area
**Biome** - Large areas with similar climate and organisms (like deserts or rainforests)

## Major World Biomes
Earth has several major biomes where animals live:

**Tropical rainforest** - Hot, wet, incredibly diverse (monkeys, parrots, insects)
**Temperate forest** - Moderate climate, deciduous trees (deer, squirrels, birds)
**Grassland** - Open areas with grasses (bison, zebras, prairie dogs)
**Desert** - Dry, extreme temperatures (camels, snakes, lizards)
**Tundra** - Cold, frozen ground (caribou, polar bears, arctic foxes)
**Taiga** - Northern forests (moose, wolves, bears)
**Freshwater** - Rivers, lakes, ponds (fish, frogs, water birds)
**Marine** - Oceans and seas (whales, fish, corals, sharks)

Each biome has specially adapted animals.

## Animal Adaptations to Habitats
Animals have features that help them survive in specific habitats:

**Desert adaptations:**
- Water conservation (concentrated urine)
- Heat tolerance (light colors reflect heat)
- Burrowing to escape heat
- Nocturnal activity (active at night)

**Arctic adaptations:**
- Insulation (thick fur, fat layers)
- Compact bodies (reduce heat loss)
- White coloration (camouflage in snow)
- Specialized feet (for walking on ice)

**Rainforest adaptations:**
- Bright colors (communication in dense vegetation)
- Prehensile tails (grasping branches)
- Loud calls (communication over distance)
- Camouflage (hiding in dense foliage)

## Food Chains and Webs
Animals are connected through feeding relationships:

**Food chain** - Linear sequence of who eats whom
Example: Grass → Grasshopper → Frog → Snake → Hawk

**Food web** - Complex network of interconnected food chains
Shows how energy flows through an ecosystem

**Trophic levels:**
- Producers (plants that make food)
- Primary consumers (herbivores that eat plants)
- Secondary consumers (carnivores that eat herbivores)
- Tertiary consumers (top predators)
- Decomposers (break down dead material)

## Symbiotic Relationships
Animals often have close relationships with other species:

**Mutualism** - Both species benefit
Example: Clownfish and sea anemones protect each other

**Commensalism** - One benefits, other unaffected
Example: Birds nesting in trees

**Parasitism** - One benefits, other is harmed
Example: Ticks feeding on mammals

**Predation** - One kills and eats another
Example: Lions hunting zebras

These relationships shape ecosystems.

## Population Dynamics
Animal populations change over time due to:

**Birth rate** - New individuals added
**Death rate** - Individuals dying
**Immigration** - Individuals moving in
**Emigration** - Individuals moving out

**Carrying capacity** - Maximum population an area can support
Limited by food, water, space, and other resources

## Animal Migrations
Some animals make amazing journeys:

**Seasonal migrations** - Moving between breeding and feeding areas
**Altitudinal migrations** - Moving up and down mountains
**Latitudinal migrations** - Moving north and south
**Vertical migrations** - Moving up and down in water columns

Migration requires navigation skills and energy reserves.

## Human Impacts on Animal Habitats
People affect animal habitats in many ways:

**Habitat destruction** - Clearing land for agriculture or development
**Pollution** - Contaminating air, water, and soil
**Climate change** - Altering temperatures and weather patterns
**Overexploitation** - Hunting or fishing too many animals
**Invasive species** - Introducing non-native animals that disrupt ecosystems

Conservation efforts help protect animals and habitats.

## Studying Animal Ecology
Ecologists use various methods:
**Field observations** - Watching animals in nature
**Tracking** - Following animal movements
**Population surveys** - Counting animals
**Habitat analysis** - Studying environmental conditions
**Experiments** - Testing ecological relationships

Understanding ecology helps protect biodiversity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does ecology study?",
          options: ["Only animal anatomy", "Animal interactions with environment", "Only animal classification", "Only animal behavior"],
          correctAnswer: 1,
          explanation: "Ecology examines relationships between organisms and their physical and biological environments."
        },
        {
          id: 2,
          question: "What is a habitat?",
          options: ["An animal's role", "Where an animal lives", "All animals in area", "Climate pattern"],
          correctAnswer: 1,
          explanation: "A habitat is the specific environment where an animal lives, finds food, and reproduces."
        },
        {
          id: 3,
          question: "Which biome is hot and wet with high biodiversity?",
          options: ["Desert", "Tundra", "Tropical rainforest", "Grassland"],
          correctAnswer: 2,
          explanation: "Tropical rainforests near the equator have constant warmth, high rainfall, and incredible species diversity."
        },
        {
          id: 4,
          question: "What adaptation helps desert animals conserve water?",
          options: ["Drinking constantly", "Concentrated urine", "Thin skin", "Active during day"],
          correctAnswer: 1,
          explanation: "Producing concentrated urine minimizes water loss in dry environments."
        },
        {
          id: 5,
          question: "What shows linear feeding relationships?",
          options: ["Food web", "Food chain", "Ecosystem", "Habitat"],
          correctAnswer: 1,
          explanation: "A food chain shows a simple, linear sequence of what eats what in an ecosystem."
        },
        {
          id: 6,
          question: "What relationship benefits both species?",
          options: ["Parasitism", "Mutualism", "Commensalism", "Predation"],
          correctAnswer: 1,
          explanation: "Mutualism involves both species deriving benefits from their interaction."
        },
        {
          id: 7,
          question: "What is carrying capacity?",
          options: ["Animal weight", "Maximum population an area can support", "Migration distance", "Reproduction rate"],
          correctAnswer: 1,
          explanation: "Carrying capacity is the maximum number of individuals an environment can sustain long-term."
        },
        {
          id: 8,
          question: "What do seasonal migrations involve?",
          options: ["Staying in one place", "Moving between breeding and feeding areas", "Random wandering", "Only vertical movement"],
          correctAnswer: 1,
          explanation: "Seasonal migrations are regular movements between different areas for breeding, feeding, or climate."
        },
        {
          id: 9,
          question: "What is a major human impact on habitats?",
          options: ["Habitat destruction", "Making more habitats", "Improving all habitats", "No impact"],
          correctAnswer: 0,
          explanation: "Habitat destruction through development, agriculture, and deforestation is a major threat to wildlife."
        },
        {
          id: 10,
          question: "What is a niche?",
          options: ["Where animal lives", "Animal's role in ecosystem", "Animal population size", "Animal migration route"],
          correctAnswer: 1,
          explanation: "A niche includes what an animal eats, where it lives, how it behaves, and its interactions."
        },
        {
          id: 11,
          question: "What biome has frozen ground and caribou?",
          options: ["Desert", "Tundra", "Rainforest", "Grassland"],
          correctAnswer: 1,
          explanation: "Tundra has permanently frozen subsoil (permafrost) and animals adapted to extreme cold."
        },
        {
          id: 12,
          question: "What adaptation helps arctic animals retain heat?",
          options: ["Thin fur", "Thick insulation", "Large ears", "Light colors only"],
          correctAnswer: 1,
          explanation: "Thick fur, fat layers, and compact bodies minimize heat loss in cold environments."
        },
        {
          id: 13,
          question: "What shows complex feeding relationships?",
          options: ["Food chain", "Food web", "Single relationship", "Only plants"],
          correctAnswer: 1,
          explanation: "Food webs show interconnected feeding relationships within an ecosystem."
        },
        {
          id: 14,
          question: "What relationship harms one species?",
          options: ["Mutualism", "Commensalism", "Parasitism", "No relationship"],
          correctAnswer: 2,
          explanation: "Parasitism benefits one organism while harming its host."
        },
        {
          id: 15,
          question: "What limits carrying capacity?",
          options: ["Only space", "Food, water, space, and resources", "Only temperature", "Nothing limits it"],
          correctAnswer: 1,
          explanation: "Multiple factors including food availability, water, shelter, and space determine carrying capacity."
        },
        {
          id: 16,
          question: "Why do animals migrate?",
          options: ["For fun", "To find resources and suitable conditions", "Random movement", "Only following leaders"],
          correctAnswer: 1,
          explanation: "Migration allows animals to access seasonal resources, breeding sites, or avoid harsh conditions."
        },
        {
          id: 17,
          question: "What is an invasive species?",
          options: ["Native species", "Non-native species that disrupts ecosystem", "Endangered species", "Domesticated species"],
          correctAnswer: 1,
          explanation: "Invasive species are introduced organisms that spread and cause ecological or economic harm."
        },
        {
          id: 18,
          question: "What is a population?",
          options: ["One individual", "All individuals of one species in area", "All species in area", "Global total"],
          correctAnswer: 1,
          explanation: "A population consists of all individuals of a particular species living in a specific area."
        },
        {
          id: 19,
          question: "What are decomposers?",
          options: ["Top predators", "Break down dead material", "Only plants", "Primary consumers"],
          correctAnswer: 1,
          explanation: "Decomposers like bacteria and fungi break down dead organisms, returning nutrients to the ecosystem."
        },
        {
          id: 20,
          question: "Why study animal ecology?",
          options: ["Only for curiosity", "To protect biodiversity and ecosystems", "To control nature", "Only for hunting"],
          correctAnswer: 1,
          explanation: "Ecological understanding helps conserve species, manage ecosystems, and maintain biodiversity."
        }
      ]
    },
    {
      id: 6,
      title: "Animal Conservation",
      content: `# Module 6: Animal Conservation

## Protecting Our Animal Heritage
Conservation is about protecting animals and their habitats for future generations. This module explores why animals need protection, threats they face, and how we can help.

Every species has value and plays a role in healthy ecosystems.

## Why Conserve Animals?
Animals are important for many reasons:

**Ecological value** - Each species has a role in ecosystems
**Economic value** - Animals support tourism, fishing, and other industries
**Scientific value** - Animals help us understand biology and medicine
**Cultural value** - Animals feature in art, stories, and traditions
**Aesthetic value** - Animals bring beauty and wonder to our world
**Ethical value** - Animals have intrinsic right to exist

Losing species diminishes our world in all these ways.

## Threats to Animals
Animals face many threats worldwide:

**Habitat loss** - Destruction of forests, wetlands, and other habitats
**Pollution** - Contamination of air, water, and soil
**Climate change** - Changing temperatures and weather patterns
**Overexploitation** - Hunting, fishing, or collecting too many animals
**Invasive species** - Non-native species outcompeting natives
**Disease** - Spread of pathogens in animal populations
**Human-wildlife conflict** - Animals coming into conflict with people

Most species face multiple threats simultaneously.

## Endangered Species Categories
Conservationists use specific terms:

**Extinct** - No individuals remain anywhere
**Extinct in the wild** - Only survives in captivity
**Critically endangered** - Extremely high risk of extinction
**Endangered** - Very high risk of extinction
**Vulnerable** - High risk of extinction
**Near threatened** - Close to qualifying as threatened
**Least concern** - Widespread and abundant

The IUCN Red List tracks species conservation status worldwide.

## Conservation Strategies
Different approaches protect animals:

**Protected areas** - National parks, wildlife reserves, marine sanctuaries
**Habitat restoration** - Repairing damaged ecosystems
**Captive breeding** - Breeding animals in controlled settings
**Reintroduction programs** - Releasing captive-bred animals to wild
**Legal protection** - Laws against hunting or trade
**Sustainable use** - Managing resources for long-term availability
**Community involvement** - Engaging local people in conservation

Effective conservation often uses multiple strategies.

## Success Stories
Conservation efforts have saved many species:

**Bald eagle** - Recovered from DDT pesticide effects
**American bison** - Brought back from near extinction
**Gray wolf** - Successfully reintroduced to several areas
**California condor** - Captive breeding saved from extinction
**Giant panda** - Population increasing due to protection efforts

These successes show conservation can work with effort and resources.

## Individual Conservation Actions
Everyone can help protect animals:

**Reduce, reuse, recycle** - Minimize waste and resource use
**Choose sustainable products** - Support wildlife-friendly agriculture and fishing
**Support conservation organizations** - Donate or volunteer
**Create wildlife-friendly spaces** - Plant native plants, provide water
**Educate others** - Share knowledge about conservation
**Responsible tourism** - Choose eco-friendly wildlife viewing
**Reduce carbon footprint** - Help address climate change

Small actions add up to make a difference.

## Zoos and Aquariums in Conservation
Modern zoological institutions contribute to conservation:

**Captive breeding programs** - Breeding endangered species
**Research** - Studying animal biology and behavior
**Education** - Teaching visitors about animals and conservation
**Field conservation** - Supporting projects in natural habitats
**Rescue and rehabilitation** - Helping injured or orphaned wildlife

Reputable institutions prioritize animal welfare and conservation.

## Wildlife Laws and Treaties
International agreements protect animals:

**CITES** - Convention on International Trade in Endangered Species
**Migratory Bird Treaty Act** - Protects migratory birds
**Endangered Species Act** - US law protecting threatened species
**Marine Mammal Protection Act** - Protects marine mammals
**International Whaling Commission** - Regulates whaling

Laws provide legal frameworks for protection.

## Future Conservation Challenges
Looking ahead, conservation faces:

**Climate change impacts** - Changing habitats and species distributions
**Human population growth** - Increasing pressure on natural resources
**Habitat fragmentation** - Isolating populations in small areas
**Emerging diseases** - New threats to wildlife health
**Funding limitations** - Never enough resources for all needs

Creative solutions and international cooperation will be essential.

Conservation is about hope and action for a shared future with wildlife.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is animal conservation?",
          options: ["Only keeping animals in zoos", "Protecting animals and habitats", "Only stopping hunting", "Controlling animal populations"],
          correctAnswer: 1,
          explanation: "Conservation involves protecting animal species, their habitats, and ecological processes for future generations."
        },
        {
          id: 2,
          question: "What is the biggest threat to most animals?",
          options: ["Only climate change", "Habitat loss and destruction", "Only hunting", "Only pollution"],
          correctAnswer: 1,
          explanation: "Habitat destruction through development, agriculture, and deforestation threatens more species than any other single factor."
        },
        {
          id: 3,
          question: "What does 'endangered' mean?",
          options: ["Very high risk of extinction", "No risk of extinction", "Only in captivity", "Common everywhere"],
          correctAnswer: 0,
          explanation: "Endangered species face a very high risk of extinction in the wild."
        },
        {
          id: 4,
          question: "What are protected areas?",
          options: ["Only zoos", "National parks and wildlife reserves", "Private lands only", "Cities"],
          correctAnswer: 1,
          explanation: "Protected areas like national parks and wildlife reserves conserve habitats and species within defined boundaries."
        },
        {
          id: 5,
          question: "Which bird recovered from DDT pesticide effects?",
          options: ["Penguin", "Bald eagle", "Sparrow", "Ostrich"],
          correctAnswer: 1,
          explanation: "Bald eagles suffered from DDT causing eggshell thinning but recovered after the pesticide was banned."
        },
        {
          id: 6,
          question: "How can individuals help conservation?",
          options: ["Do nothing", "Reduce, reuse, recycle", "Ignore the problem", "Only donate money"],
          correctAnswer: 1,
          explanation: "Simple actions like reducing waste, choosing sustainable products, and conserving resources help protect wildlife."
        },
        {
          id: 7,
          question: "What do modern zoos contribute to conservation?",
          options: ["Only entertainment", "Captive breeding, research, education", "Only displaying animals", "No contribution"],
          correctAnswer: 1,
          explanation: "Reputable zoos participate in breeding programs, research, education, and field conservation projects."
        },
        {
          id: 8,
          question: "What does CITES regulate?",
          options: ["Animal behavior", "International trade in endangered species", "Zoo standards", "Pet ownership"],
          correctAnswer: 1,
          explanation: "CITES (Convention on International Trade in Endangered Species) controls cross-border trade in threatened wildlife."
        },
        {
          id: 9,
          question: "What is a future conservation challenge?",
          options: ["Too many animals", "Climate change impacts", "No challenges", "Only funding"],
          correctAnswer: 1,
          explanation: "Climate change alters habitats, affects species distributions, and creates new conservation challenges."
        },
        {
          id: 10,
          question: "Why do animals have ecological value?",
          options: ["Only for humans", "They play roles in healthy ecosystems", "Only for beauty", "No particular value"],
          correctAnswer: 1,
          explanation: "Each species contributes to ecosystem functioning through its relationships with other organisms and the environment."
        },
        {
          id: 11,
          question: "What is overexploitation?",
          options: ["Too much habitat", "Taking too many animals through hunting/fishing", "Too much protection", "Studying animals too much"],
          correctAnswer: 1,
          explanation: "Overexploitation occurs when animals are harvested faster than their populations can recover."
        },
        {
          id: 12,
          question: "What does 'extinct in the wild' mean?",
          options: ["Completely gone", "Only survives in captivity", "Very common", "Newly discovered"],
          correctAnswer: 1,
          explanation: "Species extinct in the wild no longer exist in natural habitats but may survive in zoos or breeding facilities."
        },
        {
          id: 13,
          question: "What is habitat restoration?",
          options: ["Destroying habitat", "Repairing damaged ecosystems", "Building cities", "Only planting trees"],
          correctAnswer: 1,
          explanation: "Habitat restoration involves repairing ecosystems damaged by human activities to support native species."
        },
        {
          id: 14,
          question: "What animal was successfully reintroduced to several areas?",
          options: ["Dinosaur", "Gray wolf", "House cat", "Goldfish"],
          correctAnswer: 1,
          explanation: "Gray wolves have been successfully reintroduced to Yellowstone and other areas where they were previously eliminated."
        },
        {
          id: 15,
          question: "What does sustainable use mean?",
          options: ["Using all resources now", "Managing resources for long-term availability", "No use allowed", "Only commercial use"],
          correctAnswer: 1,
          explanation: "Sustainable use manages natural resources so they can be used without being depleted for future generations."
        },
        {
          id: 16,
          question: "What tracks species conservation status worldwide?",
          options: ["Weather reports", "IUCN Red List", "Phone books", "Social media"],
          correctAnswer: 1,
          explanation: "The IUCN Red List assesses and tracks the conservation status of species globally."
        },
        {
          id: 17,
          question: "What is human-wildlife conflict?",
          options: ["Animals fighting each other", "Animals coming into conflict with people", "Only in zoos", "Not a real problem"],
          correctAnswer: 1,
          explanation: "Human-wildlife conflict occurs when animals damage crops, livestock, or property, or threaten human safety."
        },
        {
          id: 18,
          question: "What does captive breeding involve?",
          options: ["Wild reproduction", "Breeding animals in controlled settings", "No breeding", "Only natural selection"],
          correctAnswer: 1,
          explanation: "Captive breeding programs manage reproduction of endangered species in zoos, aquariums, or breeding centers."
        },
        {
          id: 19,
          question: "What is the ethical reason for conservation?",
          options: ["Only human benefit", "Animals' intrinsic right to exist", "Only economic value", "No ethical reason"],
          correctAnswer: 1,
          explanation: "Many believe species have inherent value and right to exist independent of their usefulness to humans."
        },
        {
          id: 20,
          question: "What does conservation ultimately require?",
          options: ["Only money", "Hope and sustained action", "Giving up", "Ignoring problems"],
          correctAnswer: 1,
          explanation: "Successful conservation requires optimism, persistence, and continuous effort from many people and organizations."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "zoology-certificate-final-exam",
    title: "Zoology Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Zoology Certificate course.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What does zoology study?",
        options: ["Plants", "Animals", "Rocks", "Weather"],
        correctAnswer: 1,
        explanation: "Module 1: Zoology is the scientific study of animals."
      },
      {
        id: 2,
        question: "What percentage of animals are invertebrates?",
        options: ["50%", "97%", "25%", "10%"],
        correctAnswer: 1,
        explanation: "Module 1: Most animal species (about 97%) lack backbones."
      },
      {
        id: 3,
        question: "How many main taxonomic levels are there?",
        options: ["3", "5", "7", "10"],
        correctAnswer: 2,
        explanation: "Module 2: Kingdom, Phylum, Class, Order, Family, Genus, Species."
      },
      {
        id: 4,
        question: "Which phylum has stinging cells?",
        options: ["Porifera", "Cnidaria", "Annelida", "Mollusca"],
        correctAnswer: 1,
        explanation: "Module 2: Cnidarians like jellyfish use cnidocytes for defense."
      },
      {
        id: 5,
        question: "What does anatomy study?",
        options: ["Behavior", "Structure", "Evolution", "Habitats"],
        correctAnswer: 1,
        explanation: "Module 3: Anatomy focuses on animal structure and parts."
      },
      {
        id: 6,
        question: "What type of animal eats both plants and animals?",
        options: ["Herbivore", "Carnivore", "Omnivore", "Detritivore"],
        correctAnswer: 2,
        explanation: "Module 3: Omnivores have mixed plant and animal diets."
      },
      {
        id: 7,
        question: "What are innate behaviors?",
        options: ["Learned", "Born knowing", "Social", "Complex only"],
        correctAnswer: 1,
        explanation: "Module 4: Innate behaviors are instinctive, not learned."
      },
      {
        id: 8,
        question: "What defense uses camouflage?",
        options: ["Mimicry", "Blending", "Warning colors", "Chemicals"],
        correctAnswer: 1,
        explanation: "Module 4: Camouflage helps animals hide by matching surroundings."
      },
      {
        id: 9,
        question: "What does ecology study?",
        options: ["Only anatomy", "Interactions with environment", "Only classification", "Only behavior"],
        correctAnswer: 1,
        explanation: "Module 5: Ecology examines organism-environment relationships."
      },
      {
        id: 10,
        question: "What is a habitat?",
        options: ["Animal's role", "Where it lives", "All animals", "Climate"],
        correctAnswer: 1,
        explanation: "Module 5: Habitat is where an animal lives and finds resources."
      },
      {
        id: 11,
        question: "What is conservation?",
        options: ["Only zoos", "Protecting animals", "Only stopping hunting", "Controlling"],
        correctAnswer: 1,
        explanation: "Module 6: Conservation protects species and habitats."
      },
      {
        id: 12,
        question: "What is biggest threat to animals?",
        options: ["Climate only", "Habitat loss", "Hunting only", "Pollution only"],
        correctAnswer: 1,
        explanation: "Module 6: Habitat destruction threatens most species."
      },
      {
        id: 13,
        question: "What does 'heterotrophic' mean?",
        options: ["Self-feeding", "Eats others", "No food needed", "Only plants"],
        correctAnswer: 1,
        explanation: "Module 1: Animals consume other organisms for nutrition."
      },
      {
        id: 14,
        question: "What is bilateral symmetry?",
        options: ["Radial", "Mirror halves", "No symmetry", "Spherical"],
        correctAnswer: 1,
        explanation: "Module 2: Body can be divided into matching left and right halves."
      },
      {
        id: 15,
        question: "What system exchanges gases?",
        options: ["Digestive", "Respiratory", "Nervous", "Muscular"],
        correctAnswer: 1,
        explanation: "Module 3: Respiratory system handles oxygen and carbon dioxide."
      },
      {
        id: 16,
        question: "What is migration?",
        options: ["Staying", "Regular long movements", "Short daily", "No movement"],
        correctAnswer: 1,
        explanation: "Module 4: Seasonal movements between areas."
      },
      {
        id: 17,
        question: "What biome is hot/wet with high diversity?",
        options: ["Desert", "Tundra", "Rainforest", "Grassland"],
        correctAnswer: 2,
        explanation: "Module 5: Tropical rainforests have constant warmth and moisture."
      },
      {
        id: 18,
        question: "What does 'endangered' mean?",
        options: ["High extinction risk", "No risk", "Only captivity", "Common"],
        correctAnswer: 0,
        explanation: "Module 6: Very high risk of extinction in wild."
      },
      {
        id: 19,
        question: "Which group has feathers?",
        options: ["Mammals", "Birds", "Reptiles", "Fish"],
        correctAnswer: 1,
        explanation: "Module 1: Birds are uniquely characterized by feathers."
      },
      {
        id: 20,
        question: "What is scientific naming system?",
        options: ["Common names", "Genus and species", "Only genus", "Only species"],
        correctAnswer: 1,
        explanation: "Module 2: Binomial nomenclature uses genus and species names."
      },
      {
        id: 21,
        question: "What are ectotherms?",
        options: ["Generate heat", "Environmental heat", "Constant temp", "Only warm"],
        correctAnswer: 1,
        explanation: "Module 3: Rely on external heat sources."
      },
      {
        id: 22,
        question: "What is mutualism?",
        options: ["One benefits", "Both benefit", "One harmed", "No effect"],
        correctAnswer: 1,
        explanation: "Module 4: Both species benefit from relationship."
      },
      {
        id: 23,
        question: "What is carrying capacity?",
        options: ["Animal weight", "Max population", "Migration", "Reproduction"],
        correctAnswer: 1,
        explanation: "Module 5: Maximum sustainable population size."
      },
      {
        id: 24,
        question: "What do protected areas include?",
        options: ["Only zoos", "Parks/reserves", "Private land", "Cities"],
        correctAnswer: 1,
        explanation: "Module 6: National parks, wildlife reserves, etc."
      },
      {
        id: 25,
        question: "What do fish breathe with?",
        options: ["Lungs", "Gills", "Skin", "No breathing"],
        correctAnswer: 1,
        explanation: "Module 1: Gills extract oxygen from water."
      },
      {
        id: 26,
        question: "What tool uses paired questions?",
        options: ["Microscope", "Dichotomous key", "DNA", "Field guide"],
        correctAnswer: 1,
        explanation: "Module 2: Dichotomous keys for identification."
      },
      {
        id: 27,
        question: "What is learned behavior?",
        options: ["Genetic", "From experience", "At birth", "Only mammals"],
        correctAnswer: 1,
        explanation: "Module 3: Acquired through experience."
      },
      {
        id: 28,
        question: "What is food chain?",
        options: ["Complex web", "Linear sequence", "Only plants", "No sequence"],
        correctAnswer: 1,
        explanation: "Module 4: Simple linear feeding relationship."
      },
      {
        id: 29,
        question: "What is niche?",
        options: ["Where lives", "Ecological role", "Population", "Migration"],
        correctAnswer: 1,
        explanation: "Module 5: Animal's role in ecosystem."
      },
      {
        id: 30,
        question: "What does CITES regulate?",
        options: ["Behavior", "International trade", "Zoos", "Pets"],
        correctAnswer: 1,
        explanation: "Module 6: Trade in endangered species."
      },
      {
        id: 31,
        question: "What are invertebrates?",
        options: ["With backbones", "Without backbones", "Only insects", "Only worms"],
        correctAnswer: 1,
        explanation: "Module 1: Animals lacking vertebral columns."
      },
      {
        id: 32,
        question: "Which phylum is largest?",
        options: ["Chordata", "Arthropoda", "Mollusca", "Annelida"],
        correctAnswer: 1,
        explanation: "Module 2: Arthropoda has most species."
      },
      {
        id: 33,
        question: "What is endoskeleton?",
        options: ["External", "Internal bones", "Fluid", "No skeleton"],
        correctAnswer: 1,
        explanation: "Module 3: Internal supporting structure."
      },
      {
        id: 34,
        question: "What is foraging?",
        options: ["Sleeping", "Food searching", "Mating", "Fighting"],
        correctAnswer: 1,
        explanation: "Module 4: Searching for food resources."
      },
      {
        id: 35,
        question: "What is parasitism?",
        options: ["Both benefit", "One benefits/harmed", "No effect", "Both harmed"],
        correctAnswer: 1,
        explanation: "Module 5: One benefits at other's expense."
      },
      {
        id: 36,
        question: "What is sustainable use?",
        options: ["Use all now", "Long-term management", "No use", "Commercial"],
        correctAnswer: 1,
        explanation: "Module 6: Resource use that doesn't deplete."
      },
      {
        id: 37,
        question: "What do mammals feed young?",
        options: ["Solid food", "Milk", "Water", "Regurgitated"],
        correctAnswer: 1,
        explanation: "Module 1: Mammary gland milk production."
      },
      {
        id: 38,
        question: "What language for scientific names?",
        options: ["English", "Latin/Greek", "French", "German"],
        correctAnswer: 1,
        explanation: "Module 2: International scientific language."
      },
      {
        id: 39,
        question: "What is hibernation?",
        options: ["Summer dormancy", "Winter dormancy", "Migration", "Active"],
        correctAnswer: 1,
        explanation: "Module 4: Winter metabolic slowdown."
      },
      {
        id: 40,
        question: "Why conserve animals?",
        options: ["Only humans", "Ecological value", "Only beauty", "No reason"],
        correctAnswer: 1,
        explanation: "Module 6: Species have ecological, scientific, cultural value."
      }
    ]
  }
};

export default zoologyCertificate;
