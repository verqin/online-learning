// Microbiology (Certificate) - Complete Course Data
// File: microbiology-certificate.ts

export const microbiologyCertificate = {
  // COURSE METADATA
  id: "microbiology-certificate",
  title: "Microbiology (Certificate)",
  description: "Introduction to the fascinating world of microorganisms. Learn about bacteria, viruses, fungi, and other microbes, their structure, functions, and importance in health, environment, and industry.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🔬",
  badge: "Certificate",
  prerequisite: null,
  
  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Microbiology",
      content: `# Module 1: Introduction to Microbiology

## What is Microbiology?
Microbiology is the study of microscopic organisms, including bacteria, viruses, fungi, algae, and protozoa. These tiny life forms, invisible to the naked eye, play crucial roles in our world.

### Major Groups of Microorganisms
**Bacteria** - Single-celled organisms without nuclei
**Viruses** - Non-living particles that infect cells
**Fungi** - Includes yeasts and molds
**Protozoa** - Single-celled animals
**Algae** - Photosynthetic microorganisms
**Archaea** - Ancient microorganisms living in extreme environments

### Historical Milestones in Microbiology
**Antonie van Leeuwenhoek** - First to observe microorganisms (1670s)
**Louis Pasteur** - Disproved spontaneous generation (1860s)
**Robert Koch** - Established germ theory of disease (1880s)
**Alexander Fleming** - Discovered penicillin (1928)
**Modern Developments** - Genetic engineering, microbiome research

### Importance of Microorganisms
**Beneficial Roles**:
- Decomposition and nutrient cycling
- Food production (cheese, yogurt, bread)
- Medicine production (antibiotics, vaccines)
- Environmental cleanup (bioremediation)
- Human health (gut microbiome)

**Harmful Roles**:
- Disease causing (pathogens)
- Food spoilage
- Biofilm formation on surfaces
- Agricultural plant diseases

### Basic Microscopy
**Light Microscope** - Uses visible light to magnify specimens
**Electron Microscope** - Uses electron beams for higher magnification
**Magnification** - How much larger an object appears
**Resolution** - Ability to distinguish between two points
**Staining Techniques** - Adding color to make microbes visible

### Microbial Size Ranges
**Viruses** - 20-400 nanometers (smallest)
**Bacteria** - 0.5-5 micrometers
**Fungi** - 2-10 micrometers (yeasts), larger for molds
**Protozoa** - 10-100 micrometers
**Comparison** - About 1000 bacteria could fit across a pinhead

### Microbial Habitats
**Everywhere on Earth** - Microbes live in all environments
**Extreme Environments** - Hot springs, deep sea vents, polar ice
**Human Body** - Skin, mouth, gut, respiratory tract
**Soil and Water** - Rich microbial communities
**Air** - Microbes can travel through air

### Careers in Microbiology
**Medical Microbiology** - Studying disease-causing microbes
**Environmental Microbiology** - Studying microbes in ecosystems
**Industrial Microbiology** - Using microbes in manufacturing
**Food Microbiology** - Ensuring food safety and quality
**Research Microbiology** - Discovering new microbial knowledge

### Laboratory Safety
**Personal Protective Equipment** - Lab coats, gloves, goggles
**Aseptic Technique** - Preventing contamination
**Biohazard Disposal** - Proper disposal of microbial materials
**Sterilization Methods** - Killing all microorganisms
**Emergency Procedures** - Handling accidents and spills

### Basic Laboratory Equipment
**Microscopes** - For observing microorganisms
**Incubators** - For growing microbes at specific temperatures
**Autoclaves** - For sterilizing equipment
**Petri Dishes** - For growing microbial cultures
**Culture Media** - Nutrients for microbial growth`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is microbiology the study of?",
          options: [
            "Large animals",
            "Microscopic organisms",
            "Plant biology",
            "Human anatomy"
          ],
          correctAnswer: 1,
          explanation: "Microbiology specifically studies microscopic organisms like bacteria, viruses, and fungi."
        },
        {
          id: 2,
          question: "Which microorganisms are single-celled without nuclei?",
          options: [
            "Viruses",
            "Bacteria",
            "Fungi",
            "Protozoa"
          ],
          correctAnswer: 1,
          explanation: "Bacteria are prokaryotic cells lacking membrane-bound nuclei."
        },
        {
          id: 3,
          question: "Who first observed microorganisms with a microscope?",
          options: [
            "Louis Pasteur",
            "Robert Koch",
            "Antonie van Leeuwenhoek",
            "Alexander Fleming"
          ],
          correctAnswer: 2,
          explanation: "Leeuwenhoek made simple microscopes and first observed microorganisms in the 1670s."
        },
        {
          id: 4,
          question: "What are non-living particles that infect cells?",
          options: [
            "Bacteria",
            "Viruses",
            "Fungi",
            "Protozoa"
          ],
          correctAnswer: 1,
          explanation: "Viruses are not considered living organisms; they require host cells to reproduce."
        },
        {
          id: 5,
          question: "Which microscope uses electron beams?",
          options: [
            "Light microscope",
            "Electron microscope",
            "Simple microscope",
            "Compound microscope"
          ],
          correctAnswer: 1,
          explanation: "Electron microscopes use beams of electrons instead of light for much higher magnification."
        },
        {
          id: 6,
          question: "What is the size range for most bacteria?",
          options: [
            "20-400 nanometers",
            "0.5-5 micrometers",
            "10-100 micrometers",
            "1-10 millimeters"
          ],
          correctAnswer: 1,
          explanation: "Most bacteria range from 0.5 to 5 micrometers in size."
        },
        {
          id: 7,
          question: "Which microorganism group includes yeasts and molds?",
          options: [
            "Bacteria",
            "Viruses",
            "Fungi",
            "Protozoa"
          ],
          correctAnswer: 2,
          explanation: "Fungi include both single-celled yeasts and multicellular molds."
        },
        {
          id: 8,
          question: "Who discovered penicillin?",
          options: [
            "Louis Pasteur",
            "Robert Koch",
            "Antonie van Leeuwenhoek",
            "Alexander Fleming"
          ],
          correctAnswer: 3,
          explanation: "Alexander Fleming discovered the antibiotic penicillin in 1928."
        },
        {
          id: 9,
          question: "What technique prevents contamination in microbiology labs?",
          options: [
            "Magnification",
            "Aseptic technique",
            "Staining",
            "Incubation"
          ],
          correctAnswer: 1,
          explanation: "Aseptic technique prevents unwanted microorganisms from contaminating cultures."
        },
        {
          id: 10,
          question: "Where do microbes NOT typically live?",
          options: [
            "Human gut",
            "Hot springs",
            "Deep sea vents",
            "Completely sterile environments"
          ],
          correctAnswer: 3,
          explanation: "Microbes are found virtually everywhere except specially created sterile environments."
        },
        {
          id: 11,
          question: "What is used to grow microbial cultures?",
          options: [
            "Microscopes",
            "Petri dishes",
            "Autoclaves",
            "Centrifuges"
          ],
          correctAnswer: 1,
          explanation: "Petri dishes contain culture media for growing microorganisms."
        },
        {
          id: 12,
          question: "Which microorganisms perform photosynthesis?",
          options: [
            "Bacteria",
            "Viruses",
            "Algae",
            "Fungi"
          ],
          correctAnswer: 2,
          explanation: "Algae are photosynthetic microorganisms that produce oxygen."
        },
        {
          id: 13,
          question: "What is bioremediation?",
          options: [
            "Causing diseases",
            "Cleaning environments using microbes",
            "Making food products",
            "Studying microbes in labs"
          ],
          correctAnswer: 1,
          explanation: "Bioremediation uses microorganisms to clean up polluted environments."
        },
        {
          id: 14,
          question: "What equipment sterilizes using steam and pressure?",
          options: [
            "Microscope",
            "Incubator",
            "Autoclave",
            "Centrifuge"
          ],
          correctAnswer: 2,
          explanation: "Autoclaves use steam under pressure to sterilize equipment and media."
        },
        {
          id: 15,
          question: "Which microorganisms are considered 'ancient'?",
          options: [
            "Bacteria",
            "Archaea",
            "Viruses",
            "Protozoa"
          ],
          correctAnswer: 1,
          explanation: "Archaea are ancient microorganisms often found in extreme environments."
        },
        {
          id: 16,
          question: "What measures how much larger an object appears?",
          options: [
            "Resolution",
            "Magnification",
            "Staining",
            "Focus"
          ],
          correctAnswer: 1,
          explanation: "Magnification refers to how much larger a specimen appears through a microscope."
        },
        {
          id: 17,
          question: "Which career studies disease-causing microbes?",
          options: [
            "Environmental microbiology",
            "Medical microbiology",
            "Industrial microbiology",
            "Food microbiology"
          ],
          correctAnswer: 1,
          explanation: "Medical microbiologists study pathogens and infectious diseases."
        },
        {
          id: 18,
          question: "What are single-celled animals called?",
          options: [
            "Bacteria",
            "Viruses",
            "Protozoa",
            "Fungi"
          ],
          correctAnswer: 2,
          explanation: "Protozoa are single-celled eukaryotic organisms often classified as animals."
        },
        {
          id: 19,
          question: "What is the gut microbiome?",
          options: [
            "Microbes in the digestive system",
            "Microbes on the skin",
            "Microbes in soil",
            "Microbes in water"
          ],
          correctAnswer: 0,
          explanation: "The gut microbiome consists of microorganisms living in our digestive tract."
        },
        {
          id: 20,
          question: "What adds color to make microbes visible under microscopes?",
          options: [
            "Magnification",
            "Resolution",
            "Staining",
            "Incubation"
          ],
          correctAnswer: 2,
          explanation: "Staining techniques use dyes to color microorganisms for better visibility."
        }
      ]
    },
    {
      id: 2,
      title: "Bacterial Structure and Function",
      content: `# Module 2: Bacterial Structure and Function

## Bacterial Cell Structure
Bacteria are prokaryotic cells with distinct structures that enable their survival and function. Understanding these structures helps us understand how bacteria live and cause disease.

### Basic Bacterial Shapes
**Coccus** - Spherical or round-shaped bacteria
**Bacillus** - Rod-shaped bacteria
**Spirillum** - Spiral-shaped bacteria
**Vibrio** - Comma-shaped bacteria
**Spirochete** - Flexible spiral bacteria

### Bacterial Cell Wall
**Peptidoglycan** - Main structural component of bacterial cell walls
**Gram Stain Classification**:
- **Gram-positive** - Thick peptidoglycan layer, retains crystal violet stain (purple)
- **Gram-negative** - Thin peptidoglycan layer, outer membrane, stains pink/red
**Importance** - Provides shape and protection, target for antibiotics

### Cell Membrane
**Phospholipid Bilayer** - Controls what enters and leaves the cell
**Proteins** - For transport and signaling
**Selective Permeability** - Allows some substances through but not others
**Energy Production** - Site of electron transport chain in some bacteria

### Cytoplasm and Contents
**Cytosol** - Gel-like substance inside the cell
**Ribosomes** - Sites of protein synthesis
**Nucleoid** - Region containing bacterial chromosome (DNA)
**Plasmids** - Small circular DNA pieces, often carry antibiotic resistance
**Inclusions** - Storage granules for nutrients

### External Structures
**Capsule** - Sticky outer layer for protection and attachment
**Flagella** - Whip-like structures for movement
**Pili** - Hair-like structures for attachment and DNA transfer
**Fimbriae** - Short pili for attachment to surfaces
**Glycocalyx** - General term for external polysaccharide layer

### Bacterial Reproduction
**Binary Fission** - Asexual reproduction where one cell divides into two
**Generation Time** - Time required for population to double
**Growth Curve** - Lag, log, stationary, and death phases
**Bacterial Colonies** - Visible masses of bacteria growing together
**Biofilms** - Complex communities of bacteria on surfaces

### Bacterial Metabolism
**Energy Sources**:
- **Phototrophs** - Use light energy
- **Chemotrophs** - Use chemical energy
**Carbon Sources**:
- **Autotrophs** - Use carbon dioxide
- **Heterotrophs** - Use organic compounds
**Oxygen Requirements**:
- **Aerobes** - Require oxygen
- **Anaerobes** - Grow without oxygen
- **Facultative** - Can grow with or without oxygen

### Bacterial Genetics
**Chromosome** - Single circular DNA molecule
**Gene Transfer Methods**:
- **Transformation** - Uptake of free DNA from environment
- **Transduction** - Transfer by viruses (bacteriophages)
- **Conjugation** - Direct cell-to-cell transfer via pili
**Mutation** - Changes in DNA sequence
**Antibiotic Resistance** - Often acquired through plasmids

### Bacterial Spores
**Endospores** - Highly resistant structures formed by some bacteria
**Sporulation** - Process of spore formation
**Germination** - Process of spore returning to active state
**Resistance Properties** - Heat, radiation, chemical resistant
**Examples** - Bacillus and Clostridium species

### Bacterial Identification
**Microscopic Examination** - Shape and staining characteristics
**Cultural Characteristics** - How bacteria grow on different media
**Biochemical Tests** - Testing metabolic capabilities
**Genetic Methods** - DNA sequencing for precise identification
**Antibiotic Sensitivity** - Testing which antibiotics work against bacteria

### Beneficial Bacteria
**Digestive Bacteria** - Help break down food in intestines
**Environmental Bacteria** - Decompose organic matter, fix nitrogen
**Industrial Bacteria** - Produce antibiotics, enzymes, chemicals
**Food Production** - Make yogurt, cheese, vinegar
**Probiotics** - Beneficial bacteria taken as supplements

### Pathogenic Bacteria
**Mechanisms of Disease**:
- **Toxin Production** - Release harmful chemicals
- **Invasion** - Enter and damage tissues
- **Immune Evasion** - Avoid detection by immune system
**Common Bacterial Diseases** - Tuberculosis, pneumonia, food poisoning, strep throat
**Treatment** - Antibiotics, supportive care`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are spherical-shaped bacteria called?",
          options: [
            "Bacillus",
            "Coccus",
            "Spirillum",
            "Vibrio"
          ],
          correctAnswer: 1,
          explanation: "Coccus refers to spherical or round-shaped bacteria."
        },
        {
          id: 2,
          question: "What is the main component of bacterial cell walls?",
          options: [
            "Cellulose",
            "Chitin",
            "Peptidoglycan",
            "Phospholipid"
          ],
          correctAnswer: 2,
          explanation: "Peptidoglycan is the primary structural component of bacterial cell walls."
        },
        {
          id: 3,
          question: "What color do Gram-positive bacteria stain?",
          options: [
            "Pink/red",
            "Purple",
            "Green",
            "Blue"
          ],
          correctAnswer: 1,
          explanation: "Gram-positive bacteria retain crystal violet stain and appear purple."
        },
        {
          id: 4,
          question: "What is bacterial asexual reproduction called?",
          options: [
            "Mitosis",
            "Meiosis",
            "Binary fission",
            "Budding"
          ],
          correctAnswer: 2,
          explanation: "Binary fission is the process where one bacterial cell divides into two identical cells."
        },
        {
          id: 5,
          question: "What are whip-like structures for bacterial movement?",
          options: [
            "Pili",
            "Flagella",
            "Fimbriae",
            "Capsule"
          ],
          correctAnswer: 1,
          explanation: "Flagella are long, whip-like appendages that enable bacterial movement."
        },
        {
          id: 6,
          question: "What are small circular DNA pieces in bacteria?",
          options: [
            "Chromosomes",
            "Ribosomes",
            "Plasmids",
            "Nucleoids"
          ],
          correctAnswer: 2,
          explanation: "Plasmids are small, circular DNA molecules separate from the main chromosome."
        },
        {
          id: 7,
          question: "What do bacteria that require oxygen called?",
          options: [
            "Anaerobes",
            "Aerobes",
            "Facultative",
            "Microaerophiles"
          ],
          correctAnswer: 1,
          explanation: "Aerobes require oxygen for growth and metabolism."
        },
        {
          id: 8,
          question: "What are highly resistant bacterial structures?",
          options: [
            "Capsules",
            "Endospores",
            "Plasmids",
            "Ribosomes"
          ],
          correctAnswer: 1,
          explanation: "Endospores are highly resistant structures formed by some bacteria under stress."
        },
        {
          id: 9,
          question: "What is the region containing bacterial DNA called?",
          options: [
            "Nucleus",
            "Nucleoid",
            "Cytoplasm",
            "Ribosome"
          ],
          correctAnswer: 1,
          explanation: "The nucleoid is the region in bacterial cells where the chromosome is located."
        },
        {
          id: 10,
          question: "What are hair-like structures for attachment?",
          options: [
            "Flagella",
            "Pili",
            "Capsules",
            "Membranes"
          ],
          correctAnswer: 1,
          explanation: "Pili are hair-like structures used for attachment to surfaces and other cells."
        },
        {
          id: 11,
          question: "What is the sticky outer layer of some bacteria?",
          options: [
            "Cell wall",
            "Capsule",
            "Membrane",
            "Cytoplasm"
          ],
          correctAnswer: 1,
          explanation: "The capsule is a sticky, gelatinous layer outside the cell wall that provides protection."
        },
        {
          id: 12,
          question: "What are bacteria that use light energy called?",
          options: [
            "Chemotrophs",
            "Phototrophs",
            "Autotrophs",
            "Heterotrophs"
          ],
          correctAnswer: 1,
          explanation: "Phototrophic bacteria use light as their energy source for metabolism."
        },
        {
          id: 13,
          question: "What is gene transfer by viruses called?",
          options: [
            "Transformation",
            "Transduction",
            "Conjugation",
            "Mutation"
          ],
          correctAnswer: 1,
          explanation: "Transduction is gene transfer mediated by bacteriophages (viruses that infect bacteria)."
        },
        {
          id: 14,
          question: "What are complex bacterial communities on surfaces?",
          options: [
            "Colonies",
            "Biofilms",
            "Cultures",
            "Swarms"
          ],
          correctAnswer: 1,
          explanation: "Biofilms are complex communities of bacteria embedded in a protective matrix on surfaces."
        },
        {
          id: 15,
          question: "What do Gram-negative bacteria have that Gram-positive lack?",
          options: [
            "Thick peptidoglycan",
            "Outer membrane",
            "Capsules",
            "Endospores"
          ],
          correctAnswer: 1,
          explanation: "Gram-negative bacteria have an outer membrane outside their thin peptidoglycan layer."
        },
        {
          id: 16,
          question: "What is the site of protein synthesis in bacteria?",
          options: [
            "Nucleoid",
            "Ribosomes",
            "Plasmids",
            "Membrane"
          ],
          correctAnswer: 1,
          explanation: "Ribosomes are cellular structures where proteins are synthesized."
        },
        {
          id: 17,
          question: "What are bacteria that can grow with or without oxygen?",
          options: [
            "Strict aerobes",
            "Strict anaerobes",
            "Facultative anaerobes",
            "Microaerophiles"
          ],
          correctAnswer: 2,
          explanation: "Facultative anaerobes can grow in both oxygenated and oxygen-free environments."
        },
        {
          id: 18,
          question: "What is direct cell-to-cell DNA transfer called?",
          options: [
            "Transformation",
            "Transduction",
            "Conjugation",
            "Transfection"
          ],
          correctAnswer: 2,
          explanation: "Conjugation involves direct contact between bacterial cells for DNA transfer."
        },
        {
          id: 19,
          question: "What are rod-shaped bacteria called?",
          options: [
            "Coccus",
            "Bacillus",
            "Spirillum",
            "Vibrio"
          ],
          correctAnswer: 1,
          explanation: "Bacillus refers to rod-shaped bacteria."
        },
        {
          id: 20,
          question: "What controls what enters and leaves bacterial cells?",
          options: [
            "Cell wall",
            "Cell membrane",
            "Capsule",
            "Cytoplasm"
          ],
          correctAnswer: 1,
          explanation: "The cell membrane is selectively permeable and controls substance movement."
        }
      ]
    },
    {
      id: 3,
      title: "Viruses and Viral Diseases",
      content: `# Module 3: Viruses and Viral Diseases

## Understanding Viruses
Viruses are unique entities that exist at the boundary between living and non-living. They are much smaller than bacteria and can only reproduce inside host cells.

### Viral Characteristics
**Non-living Particles** - Not considered true living organisms
**Obligate Intracellular Parasites** - Must infect living cells to reproduce
**Simple Structure** - Genetic material surrounded by protein coat
**Extremely Small** - 20-400 nanometers in size
**Specific Host Range** - Each virus infects specific types of cells

### Viral Structure
**Genetic Material** - Either DNA or RNA (never both)
**Capsid** - Protein coat surrounding genetic material
**Capsomeres** - Protein subunits that make up capsid
**Envelope** - Lipid membrane from host cell (some viruses)
**Spikes** - Glycoproteins for attachment to host cells

### Virus Classification
**By Genetic Material**:
- **DNA viruses** - Use DNA as genetic material
- **RNA viruses** - Use RNA as genetic material
**By Shape**:
- **Helical** - Spiral-shaped
- **Icosahedral** - 20-sided spherical
- **Complex** - Irregular shapes
**By Presence of Envelope**:
- **Enveloped viruses** - Have lipid membrane
- **Non-enveloped viruses** - No outer membrane

### Viral Replication Cycle
**1. Attachment** - Virus attaches to specific host cell receptors
**2. Penetration** - Virus enters the host cell
**3. Uncoating** - Viral genetic material is released
**4. Replication** - Viral components are made using host machinery
**5. Assembly** - New virus particles are put together
**6. Release** - New viruses leave the cell to infect others

### Bacteriophages
**Viruses that Infect Bacteria** - "Bacteria eaters"
**Structure** - Head containing DNA, tail for attachment
**Two Life Cycles**:
- **Lytic cycle** - Destroys host cell immediately
- **Lysogenic cycle** - Viral DNA integrates into host chromosome
**Importance** - Used in genetic engineering, possible antibiotic alternatives

### Common Viral Diseases
**Respiratory Viruses**:
- Influenza (flu) viruses
- Common cold viruses (rhinoviruses, coronaviruses)
- SARS-CoV-2 (COVID-19)
**Skin and Mucous Membrane Viruses**:
- Herpes viruses (cold sores, chickenpox)
- Human papillomavirus (HPV)
- Measles, mumps, rubella
**Systemic Viruses**:
- HIV (causes AIDS)
- Hepatitis viruses (liver infection)
- Ebola virus

### Virus Transmission Methods
**Airborne Transmission** - Through coughs, sneezes
**Direct Contact** - Skin-to-skin contact
**Indirect Contact** - Touching contaminated surfaces
**Vector-borne** - Through insects (mosquitoes, ticks)
**Food and Water** - Contaminated food or water
**Blood and Body Fluids** - Through transfusions, needles, sexual contact

### Host Defenses Against Viruses
**Physical Barriers** - Skin, mucous membranes
**Innate Immunity** - Immediate, non-specific defenses
**Adaptive Immunity** - Specific immune response with memory
**Interferons** - Proteins that interfere with viral replication
**Antibodies** - Proteins that neutralize viruses

### Viral Detection and Diagnosis
**Symptoms Observation** - Characteristic signs of viral infection
**Microscopy** - Electron microscopy for visualization
**Cell Culture** - Growing viruses in lab cells
**Genetic Tests** - Detecting viral DNA or RNA
**Antibody Tests** - Detecting immune response to virus
**Antigen Tests** - Detecting viral proteins

### Treatment and Prevention
**Antiviral Drugs** - Medications that inhibit viral replication
**Vaccines** - Prepare immune system to recognize viruses
**Supportive Care** - Treating symptoms while immune system fights virus
**Infection Control** - Hand washing, masks, isolation
**Public Health Measures** - Surveillance, contact tracing, quarantine

### Emerging Viruses
**Zoonotic Viruses** - Jump from animals to humans
**Factors in Emergence**:
- Deforestation and habitat loss
- Climate change
- Global travel and trade
- Agricultural practices
**Recent Examples** - Ebola, Zika, SARS, MERS, COVID-19

### Beneficial Uses of Viruses
**Gene Therapy** - Using viruses to deliver therapeutic genes
**Vaccine Development** - Using weakened viruses as vaccines
**Cancer Treatment** - Oncolytic viruses that kill cancer cells
**Research Tools** - Understanding cell biology and genetics
**Phage Therapy** - Using bacteriophages to treat bacterial infections

### Virus Evolution
**High Mutation Rates** - Especially in RNA viruses
**Genetic Reassortment** - Mixing genes from different virus strains
**Antigenic Drift** - Small changes in viral proteins
**Antigenic Shift** - Major changes creating new subtypes
**Evolutionary Pressure** - Driven by host immune responses and treatments

### Pandemic vs Epidemic
**Epidemic** - Sudden increase in cases in a specific area
**Pandemic** - Worldwide spread of a new disease
**Endemic** - Constant presence in a specific population
**Outbreak** - Similar to epidemic but often more localized
**Factors in Pandemic Spread** - Global travel, population density, lack of immunity`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are viruses considered to be?",
          options: [
            "Living organisms",
            "Non-living particles",
            "Simple bacteria",
            "Fungal spores"
          ],
          correctAnswer: 1,
          explanation: "Viruses are not considered living organisms because they cannot reproduce independently."
        },
        {
          id: 2,
          question: "What is the protein coat surrounding viral genetic material?",
          options: [
            "Envelope",
            "Capsid",
            "Membrane",
            "Cortex"
          ],
          correctAnswer: 1,
          explanation: "The capsid is the protein shell that encloses the viral genetic material."
        },
        {
          id: 3,
          question: "What must viruses do to reproduce?",
          options: [
            "Photosynthesize",
            "Infect living cells",
            "Eat bacteria",
            "Form spores"
          ],
          correctAnswer: 1,
          explanation: "Viruses are obligate intracellular parasites that must infect host cells to replicate."
        },
        {
          id: 4,
          question: "What are viruses that infect bacteria called?",
          options: [
            "Retroviruses",
            "Bacteriophages",
            "Adenoviruses",
            "Coronaviruses"
          ],
          correctAnswer: 1,
          explanation: "Bacteriophages are viruses that specifically infect bacterial cells."
        },
        {
          id: 5,
          question: "What is the first step in viral replication?",
          options: [
            "Replication",
            "Attachment",
            "Release",
            "Assembly"
          ],
          correctAnswer: 1,
          explanation: "Attachment is the first step where the virus binds to specific receptors on the host cell."
        },
        {
          id: 6,
          question: "Which virus causes AIDS?",
          options: [
            "Influenza virus",
            "HIV",
            "Herpes virus",
            "Hepatitis B virus"
          ],
          correctAnswer: 1,
          explanation: "HIV (Human Immunodeficiency Virus) is the virus that causes AIDS."
        },
        {
          id: 7,
          question: "What are glycoproteins on viral surfaces for attachment?",
          options: [
            "Capsomeres",
            "Spikes",
            "Envelopes",
            "Capsids"
          ],
          correctAnswer: 1,
          explanation: "Spikes are glycoprotein projections that help viruses attach to host cells."
        },
        {
          id: 8,
          question: "What life cycle immediately destroys bacterial cells?",
          options: [
            "Lysogenic cycle",
            "Lytic cycle",
            "Latent cycle",
            "Persistent cycle"
          ],
          correctAnswer: 1,
          explanation: "In the lytic cycle, bacteriophages immediately replicate and destroy the host cell."
        },
        {
          id: 9,
          question: "What type of viruses have a lipid membrane?",
          options: [
            "Non-enveloped viruses",
            "Enveloped viruses",
            "Naked viruses",
            "Simple viruses"
          ],
          correctAnswer: 1,
          explanation: "Enveloped viruses have a lipid membrane derived from the host cell membrane."
        },
        {
          id: 10,
          question: "What prevents viral infections by preparing the immune system?",
          options: [
            "Antibiotics",
            "Vaccines",
            "Antifungals",
            "Antipyretics"
          ],
          correctAnswer: 1,
          explanation: "Vaccines expose the immune system to harmless versions of viruses to develop immunity."
        },
        {
          id: 11,
          question: "What is the size range of most viruses?",
          options: [
            "0.5-5 micrometers",
            "20-400 nanometers",
            "10-100 micrometers",
            "1-10 millimeters"
          ],
          correctAnswer: 1,
          explanation: "Viruses are extremely small, typically ranging from 20 to 400 nanometers."
        },
        {
          id: 12,
          question: "What are proteins that interfere with viral replication?",
          options: [
            "Antibodies",
            "Interferons",
            "Antigens",
            "Cytokines"
          ],
          correctAnswer: 1,
          explanation: "Interferons are signaling proteins released by infected cells that help protect nearby cells."
        },
        {
          id: 13,
          question: "What is worldwide spread of a disease called?",
          options: [
            "Epidemic",
            "Pandemic",
            "Endemic",
            "Outbreak"
          ],
          correctAnswer: 1,
          explanation: "A pandemic is an epidemic that has spread across multiple countries or continents."
        },
        {
          id: 14,
          question: "What type of genetic material do viruses have?",
          options: [
            "Only DNA",
            "Only RNA",
            "Either DNA or RNA",
            "Both DNA and RNA"
          ],
          correctAnswer: 2,
          explanation: "Viruses have either DNA or RNA as their genetic material, but never both."
        },
        {
          id: 15,
          question: "What is used to deliver therapeutic genes in gene therapy?",
          options: [
            "Bacteria",
            "Viruses",
            "Fungi",
            "Protozoa"
          ],
          correctAnswer: 1,
          explanation: "Viruses are engineered to deliver therapeutic genes to cells in gene therapy."
        },
        {
          id: 16,
          question: "What are small changes in viral proteins over time?",
          options: [
            "Antigenic shift",
            "Antigenic drift",
            "Genetic reassortment",
            "Mutation explosion"
          ],
          correctAnswer: 1,
          explanation: "Antigenic drift refers to small, gradual changes in viral surface proteins."
        },
        {
          id: 17,
          question: "What is the 20-sided spherical shape called?",
          options: [
            "Helical",
            "Icosahedral",
            "Complex",
            "Spherical"
          ],
          correctAnswer: 1,
          explanation: "Icosahedral is a common viral structure with 20 triangular faces."
        },
        {
          id: 18,
          question: "What cycle integrates viral DNA into host chromosome?",
          options: [
            "Lytic cycle",
            "Lysogenic cycle",
            "Replicative cycle",
            "Productive cycle"
          ],
          correctAnswer: 1,
          explanation: "In the lysogenic cycle, viral DNA integrates into the host chromosome and replicates with it."
        },
        {
          id: 19,
          question: "What viruses jump from animals to humans?",
          options: [
            "Endemic viruses",
            "Zoonotic viruses",
            "Human-specific viruses",
            "Plant viruses"
          ],
          correctAnswer: 1,
          explanation: "Zoonotic viruses originate in animals and can infect humans."
        },
        {
          id: 20,
          question: "What are antiviral drugs designed to do?",
          options: [
            "Kill viruses directly",
            "Inhibit viral replication",
            "Boost bacterial growth",
            "Stimulate fungal growth"
          ],
          correctAnswer: 1,
          explanation: "Antiviral drugs interfere with specific steps in viral replication without necessarily killing viruses."
        }
      ]
    },
    {
      id: 4,
      title: "Fungi and Parasitic Microorganisms",
      content: `# Module 4: Fungi and Parasitic Microorganisms

## Introduction to Fungi
Fungi are eukaryotic organisms that include yeasts, molds, and mushrooms. They play essential roles in ecosystems as decomposers and have important relationships with other organisms.

### Fungal Characteristics
**Eukaryotic Cells** - Have membrane-bound nuclei and organelles
**Cell Walls** - Contain chitin (different from plant cellulose)
**Heterotrophic** - Obtain nutrients by absorption
**Reproduction** - Both sexual and asexual methods
**Ecological Roles** - Decomposers, symbionts, pathogens

### Types of Fungi
**Yeasts** - Single-celled fungi that reproduce by budding
**Molds** - Multicellular fungi forming fuzzy colonies
**Mushrooms** - Fruiting bodies of some fungi
**Dimorphic Fungi** - Can exist as both yeast and mold forms
**Microscopic Fungi** - Visible only with magnification

### Fungal Structure
**Hyphae** - Thread-like filaments that make up fungal bodies
**Mycelium** - Mass of hyphae forming the fungal body
**Septate Hyphae** - Have cross-walls dividing cells
**Coenocytic Hyphae** - Lack cross-walls, multinucleated
**Reproductive Structures** - Produce spores for reproduction

### Fungal Reproduction
**Asexual Reproduction**:
- **Budding** - Yeast cells form buds that detach
- **Spore Formation** - Produced on specialized structures
- **Fragmentation** - Pieces break off and grow
**Sexual Reproduction**:
- Involves fusion of specialized cells
- Produces genetic diversity
- Often involves complex life cycles

### Beneficial Fungi
**Decomposers** - Break down dead organic matter
**Food Production** - Yeast for bread, mushrooms for food
**Medicines** - Penicillin and other antibiotics
**Industrial Uses** - Enzymes, organic acids, fermentation
**Symbiotic Relationships** - Mycorrhizae with plant roots

### Fungal Diseases
**Mycoses** - Fungal infections in humans and animals
**Types of Mycoses**:
- **Superficial** - Affect skin, hair, nails
- **Subcutaneous** - Beneath the skin
- **Systemic** - Affect internal organs
**Common Fungal Infections**:
- Athlete's foot, ringworm, yeast infections
- Histoplasmosis, coccidioidomycosis
- Candidiasis (thrush)

### Parasitic Protozoa
**Characteristics**:
- Single-celled eukaryotes
- Motile using various structures
- Complex life cycles often involving multiple hosts
- Can cause serious diseases
**Major Groups**:
- **Amoebas** - Move using pseudopodia
- **Flagellates** - Move using flagella
- **Ciliates** - Move using cilia
- **Sporozoans** - Non-motile, form spores

### Important Protozoan Diseases
**Malaria** - Caused by Plasmodium species, transmitted by mosquitoes
**Amoebic Dysentery** - Caused by Entamoeba histolytica
**Giardiasis** - Caused by Giardia lamblia, waterborne
**Toxoplasmosis** - Caused by Toxoplasma gondii
**African Sleeping Sickness** - Caused by Trypanosoma species

### Parasitic Helminths
**Parasitic Worms** - Multicellular animals that live as parasites
**Major Groups**:
- **Nematodes** - Roundworms
- **Cestodes** - Tapeworms
- **Trematodes** - Flukes
**Characteristics**:
- Complex life cycles
- Often require intermediate hosts
- Can cause chronic infections

### Common Helminth Infections
**Roundworm Infections**:
- Ascariasis (large roundworm)
- Hookworm infections
- Pinworm infections
**Tapeworm Infections**:
- Beef and pork tapeworms
- Fish tapeworms
**Fluke Infections**:
- Schistosomiasis (blood flukes)
- Liver flukes

### Arthropod Vectors
**Disease Transmitters** - Insects and arachnids that carry pathogens
**Mosquitoes** - Transmit malaria, dengue, Zika, West Nile virus
**Ticks** - Transmit Lyme disease, Rocky Mountain spotted fever
**Fleas** - Transmit plague, typhus
**Lice** - Transmit typhus, trench fever
**Control Methods** - Insecticides, bed nets, repellents, environmental management

### Host-Parasite Relationships
**Parasitism** - One organism benefits at expense of another
**Definitive Host** - Where parasite reaches maturity and reproduces
**Intermediate Host** - Required for parasite development
**Reservoir Host** - Maintains parasite in nature
**Accidental Host** - Not normally part of parasite life cycle

### Laboratory Diagnosis
**Microscopic Examination** - Looking for parasites in samples
**Stool Examination** - For intestinal parasites
**Blood Smears** - For blood parasites like malaria
**Serological Tests** - Detecting antibodies to parasites
**Molecular Methods** - PCR to detect parasite DNA/RNA

### Prevention and Control
**Sanitation** - Proper waste disposal, clean water
**Personal Protection** - Bed nets, repellents, protective clothing
**Food Safety** - Proper cooking, avoiding contaminated food/water
**Vector Control** - Eliminating breeding sites, insecticides
**Mass Drug Administration** - Treating populations in endemic areas

### Emerging Parasitic Diseases
**Factors in Emergence**:
- Climate change affecting vector distribution
- Deforestation and habitat change
- Global travel and trade
- Drug resistance development
**Recent Concerns**:
- Drug-resistant malaria
- Changing distribution of vector-borne diseases
- Newly recognized parasitic infections

### Symbiotic Relationships
**Mutualism** - Both organisms benefit
- **Mycorrhizae** - Fungi and plant roots
- **Gut microbiota** - Microbes and digestive health
**Commensalism** - One benefits, other unaffected
- Skin bacteria on humans
**Parasitism** - One benefits, other harmed
- Disease-causing parasites`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main component of fungal cell walls?",
          options: [
            "Cellulose",
            "Peptidoglycan",
            "Chitin",
            "Silica"
          ],
          correctAnswer: 2,
          explanation: "Fungal cell walls contain chitin, a strong, flexible polysaccharide."
        },
        {
          id: 2,
          question: "What are single-celled fungi called?",
          options: [
            "Molds",
            "Yeasts",
            "Mushrooms",
            "Hyphae"
          ],
          correctAnswer: 1,
          explanation: "Yeasts are single-celled fungi that typically reproduce by budding."
        },
        {
          id: 3,
          question: "What are thread-like fungal filaments?",
          options: [
            "Spores",
            "Hyphae",
            "Mycelium",
            "Bud cells"
          ],
          correctAnswer: 1,
          explanation: "Hyphae are the thread-like filaments that make up the body of most fungi."
        },
        {
          id: 4,
          question: "What fungal infection affects skin, hair, or nails?",
          options: [
            "Systemic mycosis",
            "Subcutaneous mycosis",
            "Superficial mycosis",
            "Opportunistic mycosis"
          ],
          correctAnswer: 2,
          explanation: "Superficial mycoses affect only the outer layers of skin, hair, or nails."
        },
        {
          id: 5,
          question: "What protozoan disease is transmitted by mosquitoes?",
          options: [
            "Giardiasis",
            "Malaria",
            "Amoebic dysentery",
            "Toxoplasmosis"
          ],
          correctAnswer: 1,
          explanation: "Malaria is caused by Plasmodium parasites transmitted through mosquito bites."
        },
        {
          id: 6,
          question: "What are parasitic worms called?",
          options: [
            "Protozoa",
            "Helminths",
            "Fungi",
            "Bacteria"
          ],
          correctAnswer: 1,
          explanation: "Helminths are parasitic worms including roundworms, tapeworms, and flukes."
        },
        {
          id: 7,
          question: "What is a mass of fungal hyphae called?",
          options: [
            "Spore",
            "Mycelium",
            "Yeast colony",
            "Mushroom cap"
          ],
          correctAnswer: 1,
          explanation: "Mycelium is the vegetative part of a fungus consisting of a network of hyphae."
        },
        {
          id: 8,
          question: "Which fungi can exist as both yeast and mold?",
          options: [
            "Yeasts only",
            "Molds only",
            "Dimorphic fungi",
            "Mushrooms"
          ],
          correctAnswer: 2,
          explanation: "Dimorphic fungi can switch between yeast and mold forms depending on conditions."
        },
        {
          id: 9,
          question: "What parasite causes African sleeping sickness?",
          options: [
            "Plasmodium",
            "Trypanosoma",
            "Giardia",
            "Entamoeba"
          ],
          correctAnswer: 1,
          explanation: "Trypanosoma parasites cause African sleeping sickness, transmitted by tsetse flies."
        },
        {
          id: 10,
          question: "What are tapeworms classified as?",
          options: [
            "Nematodes",
            "Cestodes",
            "Trematodes",
            "Protozoa"
          ],
          correctAnswer: 1,
          explanation: "Tapeworms belong to the class Cestoda within the helminths."
        },
        {
          id: 11,
          question: "What fungal antibiotic was discovered by Alexander Fleming?",
          options: [
            "Streptomycin",
            "Penicillin",
            "Tetracycline",
            "Erythromycin"
          ],
          correctAnswer: 1,
          explanation: "Penicillin was discovered from the fungus Penicillium by Alexander Fleming."
        },
        {
          id: 12,
          question: "What protozoan moves using pseudopodia?",
          options: [
            "Flagellate",
            "Amoeba",
            "Ciliate",
            "Sporozoan"
          ],
          correctAnswer: 1,
          explanation: "Amoebas move and feed using temporary extensions called pseudopodia."
        },
        {
          id: 13,
          question: "What is athlete's foot caused by?",
          options: [
            "Bacteria",
            "Virus",
            "Fungus",
            "Protozoan"
          ],
          correctAnswer: 2,
          explanation: "Athlete's foot is a fungal infection typically caused by dermatophyte fungi."
        },
        {
          id: 14,
          question: "What host is needed for parasite reproduction?",
          options: [
            "Intermediate host",
            "Definitive host",
            "Reservoir host",
            "Accidental host"
          ],
          correctAnswer: 1,
          explanation: "The definitive host is where the parasite reaches sexual maturity and reproduces."
        },
        {
          id: 15,
          question: "What insects transmit malaria?",
          options: [
            "Ticks",
            "Fleas",
            "Mosquitoes",
            "Lice"
          ],
          correctAnswer: 2,
          explanation: "Female Anopheles mosquitoes transmit malaria parasites through their bites."
        },
        {
          id: 16,
          question: "What do fungi use to obtain nutrients?",
          options: [
            "Photosynthesis",
            "Ingestion",
            "Absorption",
            "Chemosynthesis"
          ],
          correctAnswer: 2,
          explanation: "Fungi are heterotrophs that absorb nutrients from their environment through their hyphae."
        },
        {
          id: 17,
          question: "What are roundworms classified as?",
          options: [
            "Cestodes",
            "Nematodes",
            "Trematodes",
            "Platyhelminths"
          ],
          correctAnswer: 1,
          explanation: "Roundworms belong to the phylum Nematoda."
        },
        {
          id: 18,
          question: "What is a symbiotic relationship where both benefit?",
          options: [
            "Parasitism",
            "Commensalism",
            "Mutualism",
            "Competition"
          ],
          correctAnswer: 2,
          explanation: "Mutualism is a symbiotic relationship where both organisms benefit."
        },
        {
          id: 19,
          question: "What fungal structure produces spores?",
          options: [
            "Hyphae",
            "Mycelium",
            "Reproductive structure",
            "Cell wall"
          ],
          correctAnswer: 2,
          explanation: "Specialized reproductive structures in fungi produce spores for reproduction."
        },
        {
          id: 20,
          question: "What is schistosomiasis caused by?",
          options: [
            "Roundworms",
            "Tapeworms",
            "Flukes",
            "Protozoa"
          ],
          correctAnswer: 2,
          explanation: "Schistosomiasis is caused by blood flukes (trematodes) of the genus Schistosoma."
        }
      ]
    },
    {
      id: 5,
      title: "Microbial Growth and Control",
      content: `# Module 5: Microbial Growth and Control

## Microbial Growth Requirements
Microorganisms require specific conditions to grow and reproduce. Understanding these requirements helps us control microbial growth for various applications.

### Nutritional Requirements
**Macronutrients**:
- **Carbon** - For building organic molecules
- **Nitrogen** - For proteins and nucleic acids
- **Phosphorus** - For nucleic acids and ATP
- **Sulfur** - For some amino acids and vitamins
**Micronutrients**:
- **Trace elements** - Iron, zinc, copper, etc.
- **Growth factors** - Vitamins, amino acids some microbes can't make

### Physical Requirements for Growth
**Temperature**:
- **Psychrophiles** - Grow at cold temperatures (0-20°C)
- **Mesophiles** - Grow at moderate temperatures (20-45°C)
- **Thermophiles** - Grow at hot temperatures (45-80°C)
- **Hyperthermophiles** - Grow at very hot temperatures (>80°C)
**pH**:
- **Acidophiles** - Grow at low pH (acidic conditions)
- **Neutrophiles** - Grow at neutral pH (6.5-7.5)
- **Alkaliphiles** - Grow at high pH (alkaline conditions)

### Oxygen Requirements
**Obligate Aerobes** - Require oxygen for growth
**Obligate Anaerobes** - Cannot grow in presence of oxygen
**Facultative Anaerobes** - Can grow with or without oxygen
**Microaerophiles** - Require low oxygen levels
**Aerotolerant Anaerobes** - Don't use oxygen but tolerate it

### Other Growth Requirements
**Water Activity** - Availability of water for microbial processes
**Osmotic Pressure** - Salt and sugar concentrations affecting water availability
**Light** - Required by photosynthetic microorganisms
**Pressure** - Some microbes thrive under high pressure (deep sea)

### Microbial Growth Measurement
**Direct Methods**:
- **Plate counts** - Counting colonies on agar plates
- **Microscopic counts** - Using counting chambers
- **Membrane filtration** - Filtering and counting colonies
**Indirect Methods**:
- **Turbidity** - Measuring cloudiness of liquid cultures
- **Metabolic activity** - Measuring products or substrates used
- **Dry weight** - Measuring cell mass

### Bacterial Growth Curve
**Lag Phase** - Period of adjustment, no cell division
**Log (Exponential) Phase** - Rapid cell division, population doubles regularly
**Stationary Phase** - Growth rate equals death rate
**Death Phase** - Death rate exceeds growth rate
**Generation Time** - Time required for population to double

### Culture Media
**Types of Media**:
- **Chemically defined** - Exact chemical composition known
- **Complex** - Contain extracts of unknown composition
- **Selective** - Favor growth of certain microbes
- **Differential** - Distinguish between different microbes
- **Enrichment** - Encourage growth of specific microbes
**Physical States**:
- **Liquid (broth)** - For growing large quantities
- **Solid (agar)** - For isolating pure cultures
- **Semi-solid** - For motility testing

### Controlling Microbial Growth
**Sterilization** - Complete elimination of all microorganisms
**Disinfection** - Reducing microorganisms to safe levels
**Antisepsis** - Disinfection of living tissue
**Sanitization** - Reducing microorganisms to safe public health levels
**Degerming** - Mechanical removal of microbes from surfaces

### Physical Control Methods
**Heat**:
- **Moist heat** - Boiling, autoclaving (steam under pressure)
- **Dry heat** - Incineration, hot air ovens
**Radiation**:
- **Ionizing radiation** - Gamma rays, X-rays
- **Non-ionizing radiation** - UV light
**Filtration** - Passing liquids or air through filters
**Low Temperature** - Refrigeration, freezing (slows growth)

### Chemical Control Methods
**Disinfectants** - Used on inanimate objects
**Antiseptics** - Used on living tissue
**Chemicals Used**:
- **Alcohols** - Denature proteins, dissolve lipids
- **Halogens** - Chlorine, iodine (oxidize cellular components)
- **Phenolics** - Disrupt cell membranes
- **Quaternary ammonium compounds** - Disrupt cell membranes
- **Aldehydes** - Cross-link proteins and nucleic acids

### Antibiotics and Antimicrobial Drugs
**Definition** - Chemicals produced by microorganisms that inhibit or kill other microorganisms
**Spectrum of Activity**:
- **Broad-spectrum** - Effective against many types
- **Narrow-spectrum** - Effective against specific types
**Mechanisms of Action**:
- **Inhibit cell wall synthesis** - Penicillins, cephalosporins
- **Inhibit protein synthesis** - Tetracyclines, macrolides
- **Inhibit nucleic acid synthesis** - Quinolones, rifampin
- **Damage cell membranes** - Polymyxins
- **Inhibit metabolic pathways** - Sulfonamides, trimethoprim

### Antibiotic Resistance
**Mechanisms of Resistance**:
- **Enzyme production** - Break down antibiotics
- **Altered target sites** - Antibiotics can't bind
- **Reduced permeability** - Prevent antibiotic entry
- **Efflux pumps** - Pump antibiotics out of cell
**Causes of Resistance**:
- Overuse and misuse of antibiotics
- Incomplete treatment courses
- Agricultural use of antibiotics
- Horizontal gene transfer

### Food Preservation Methods
**Temperature Control**:
- **Refrigeration** - Slows microbial growth
- **Freezing** - Stops microbial growth
- **Canning** - Heat treatment to kill microbes
**Chemical Preservation**:
- **Salting** - Reduces water availability
- **Sugaring** - Similar to salting
- **Acidification** - Low pH inhibits many microbes
- **Chemical preservatives** - Sorbates, benzoates, nitrites
**Other Methods**:
- **Drying/dehydration** - Removes water needed for growth
- **Irradiation** - Kills microbes with radiation
- **Fermentation** - Produces acids that inhibit pathogens

### Water Treatment
**Purpose** - Making water safe for drinking and use
**Processes**:
- **Filtration** - Removes particles and some microbes
- **Disinfection** - Kills remaining microorganisms
- **Chlorination** - Most common disinfection method
- **UV treatment** - Alternative disinfection method
- **Ozonation** - Using ozone for disinfection
**Wastewater Treatment** - Using microbes to treat sewage

### Hospital Infection Control
**Importance** - Preventing healthcare-associated infections
**Methods**:
- **Hand hygiene** - Most important infection control measure
- **Personal protective equipment** - Gloves, gowns, masks
- **Sterile technique** - For invasive procedures
- **Environmental cleaning** - Regular disinfection of surfaces
- **Isolation precautions** - For patients with infectious diseases
**Surveillance** - Monitoring infection rates and patterns`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are microbes that grow at moderate temperatures called?",
          options: [
            "Psychrophiles",
            "Mesophiles",
            "Thermophiles",
            "Hyperthermophiles"
          ],
          correctAnswer: 1,
          explanation: "Mesophiles grow best at moderate temperatures, typically between 20-45°C."
        },
        {
          id: 2,
          question: "What is the phase of rapid bacterial growth called?",
          options: [
            "Lag phase",
            "Log phase",
            "Stationary phase",
            "Death phase"
          ],
          correctAnswer: 1,
          explanation: "Log phase (exponential phase) is when bacteria divide at their maximum rate."
        },
        {
          id: 3,
          question: "What is complete elimination of all microorganisms called?",
          options: [
            "Disinfection",
            "Sterilization",
            "Sanitization",
            "Antisepsis"
          ],
          correctAnswer: 1,
          explanation: "Sterilization destroys or removes all microbial life, including spores."
        },
        {
          id: 4,
          question: "What microbes require oxygen for growth?",
          options: [
            "Obligate anaerobes",
            "Obligate aerobes",
            "Facultative anaerobes",
            "Aerotolerant anaerobes"
          ],
          correctAnswer: 1,
          explanation: "Obligate aerobes require oxygen for cellular respiration and growth."
        },
        {
          id: 5,
          question: "What method uses steam under pressure for sterilization?",
          options: [
            "Boiling",
            "Autoclaving",
            "Pasteurization",
            "Incineration"
          ],
          correctAnswer: 1,
          explanation: "Autoclaves use steam under pressure to achieve temperatures above boiling for sterilization."
        },
        {
          id: 6,
          question: "What antibiotics inhibit cell wall synthesis?",
          options: [
            "Tetracyclines",
            "Penicillins",
            "Quinolones",
            "Sulfonamides"
          ],
          correctAnswer: 1,
          explanation: "Penicillins and related antibiotics inhibit bacterial cell wall synthesis."
        },
        {
          id: 7,
          question: "What media favor growth of specific microbes?",
          options: [
            "Differential media",
            "Selective media",
            "Complex media",
            "Defined media"
          ],
          correctAnswer: 1,
          explanation: "Selective media contain substances that inhibit unwanted microbes while allowing desired ones to grow."
        },
        {
          id: 8,
          question: "What microbes grow at cold temperatures?",
          options: [
            "Thermophiles",
            "Psychrophiles",
            "Mesophiles",
            "Neutrophiles"
          ],
          correctAnswer: 1,
          explanation: "Psychrophiles grow best at cold temperatures, typically below 20°C."
        },
        {
          id: 9,
          question: "What pumps antibiotics out of bacterial cells?",
          options: [
            "Altered target sites",
            "Enzyme production",
            "Efflux pumps",
            "Reduced permeability"
          ],
          correctAnswer: 2,
          explanation: "Efflux pumps actively transport antibiotics out of bacterial cells, reducing their effectiveness."
        },
        {
          id: 10,
          question: "What measures microbial growth by cloudiness?",
          options: [
            "Plate count",
            "Turbidity",
            "Dry weight",
            "Microscopic count"
          ],
          correctAnswer: 1,
          explanation: "Turbidity measures the cloudiness of a liquid culture, which increases with microbial growth."
        },
        {
          id: 11,
          question: "What is disinfection of living tissue called?",
          options: [
            "Sterilization",
            "Antisepsis",
            "Sanitization",
            "Degerming"
          ],
          correctAnswer: 1,
          explanation: "Antisepsis refers to using antimicrobial chemicals on living tissue to reduce microbial numbers."
        },
        {
          id: 12,
          question: "What microbes cannot grow in presence of oxygen?",
          options: [
            "Obligate aerobes",
            "Obligate anaerobes",
            "Facultative anaerobes",
            "Microaerophiles"
          ],
          correctAnswer: 1,
          explanation: "Obligate anaerobes are killed or inhibited by oxygen and require oxygen-free conditions."
        },
        {
          id: 13,
          question: "What uses UV light for microbial control?",
          options: [
            "Ionizing radiation",
            "Non-ionizing radiation",
            "Heat treatment",
            "Filtration"
          ],
          correctAnswer: 1,
          explanation: "UV light is non-ionizing radiation that damages microbial DNA, preventing replication."
        },
        {
          id: 14,
          question: "What is time for bacterial population to double called?",
          options: [
            "Growth rate",
            "Generation time",
            "Division time",
            "Reproduction period"
          ],
          correctAnswer: 1,
          explanation: "Generation time is the time required for a bacterial population to double in number."
        },
        {
          id: 15,
          question: "What antibiotics inhibit protein synthesis?",
          options: [
            "Penicillins",
            "Tetracyclines",
            "Sulfonamides",
            "Quinolones"
          ],
          correctAnswer: 1,
          explanation: "Tetracyclines and similar antibiotics bind to bacterial ribosomes, inhibiting protein synthesis."
        },
        {
          id: 16,
          question: "What media distinguish between different microbes?",
          options: [
            "Selective media",
            "Differential media",
            "Enrichment media",
            "Complex media"
          ],
          correctAnswer: 1,
          explanation: "Differential media contain indicators that show differences between microbial species."
        },
        {
          id: 17,
          question: "What food preservation method removes water?",
          options: [
            "Refrigeration",
            "Drying",
            "Canning",
            "Fermentation"
          ],
          correctAnswer: 1,
          explanation: "Drying or dehydration removes water that microorganisms need for growth."
        },
        {
          id: 18,
          question: "What microbes grow at high pH?",
          options: [
            "Acidophiles",
            "Neutrophiles",
            "Alkaliphiles",
            "Halophiles"
          ],
          correctAnswer: 2,
          explanation: "Alkaliphiles grow best at high pH (alkaline) conditions."
        },
        {
          id: 19,
          question: "What is most important for hospital infection control?",
          options: [
            "Wearing gowns",
            "Hand hygiene",
            "Using masks",
            "Environmental cleaning"
          ],
          correctAnswer: 1,
          explanation: "Hand hygiene is the single most important measure for preventing healthcare-associated infections."
        },
        {
          id: 20,
          question: "What method counts colonies on agar plates?",
          options: [
            "Turbidity measurement",
            "Plate count",
            "Microscopic count",
            "Dry weight measurement"
          ],
          correctAnswer: 1,
          explanation: "Plate counts involve spreading diluted samples on agar plates and counting the colonies that grow."
        }
      ]
    },
    {
      id: 6,
      title: "Applied Microbiology",
      content: `# Module 6: Applied Microbiology

## Introduction to Applied Microbiology
Applied microbiology uses microorganisms for practical purposes in various fields including medicine, industry, agriculture, and environmental management.

### Medical Microbiology
**Diagnostic Microbiology**:
- Identifying pathogens from patient samples
- Antibiotic susceptibility testing
- Rapid diagnostic tests
**Clinical Applications**:
- Developing vaccines
- Producing antibiotics and other medicines
- Probiotic development for gut health
**Public Health**:
- Disease surveillance and epidemiology
- Outbreak investigation
- Water and food safety testing

### Industrial Microbiology
**Fermentation Products**:
- **Alcoholic beverages** - Beer, wine, spirits
- **Dairy products** - Yogurt, cheese, kefir
- **Baked goods** - Bread, pastries (using yeast)
- **Fermented foods** - Sauerkraut, kimchi, soy sauce
**Chemical Production**:
- **Organic acids** - Citric acid, acetic acid
- **Amino acids** - Glutamic acid (MSG), lysine
- **Enzymes** - For detergents, food processing
- **Vitamins** - B12, riboflavin

### Pharmaceutical Microbiology
**Antibiotic Production**:
- Penicillin from Penicillium fungi
- Streptomycin from Streptomyces bacteria
- Many other antibiotics from soil microorganisms
**Vaccine Production**:
- Using weakened or killed microorganisms
- Recombinant DNA technology for vaccine development
- mRNA vaccine technology
**Other Pharmaceutical Products**:
- Insulin from genetically modified bacteria
- Human growth hormone
- Blood clotting factors

### Food Microbiology
**Food Safety**:
- Testing for foodborne pathogens
- Developing preservation methods
- Setting safety standards and regulations
**Food Quality**:
- Monitoring spoilage organisms
- Ensuring proper fermentation
- Maintaining nutritional quality
**Foodborne Diseases**:
- Common pathogens: Salmonella, E. coli, Listeria
- Prevention through proper handling and cooking
- Surveillance and recall systems

### Environmental Microbiology
**Bioremediation**:
- Using microbes to clean up oil spills
- Degrading pesticides and industrial chemicals
- Treating contaminated soil and groundwater
**Waste Treatment**:
- Sewage treatment using microbial digestion
- Composting organic waste
- Biogas production from waste
**Environmental Monitoring**:
- Testing water quality
- Monitoring air for pathogens
- Studying microbial communities in ecosystems

### Agricultural Microbiology
**Soil Microbiology**:
- Nitrogen-fixing bacteria (Rhizobium with legumes)
- Mycorrhizal fungi helping plant nutrient uptake
- Decomposers recycling organic matter
**Plant Protection**:
- Biological control using beneficial microbes
- Developing microbial pesticides
- Protecting crops from plant pathogens
**Animal Health**:
- Probiotics for livestock
- Developing vaccines for animal diseases
- Studying animal microbiomes

### Biotechnology Applications
**Genetic Engineering**:
- Inserting genes into microorganisms
- Producing recombinant proteins
- Developing genetically modified organisms
**Synthetic Biology**:
- Designing new biological systems
- Creating microorganisms with novel functions
- Engineering metabolic pathways
**Biomaterial Production**:
- Bioplastics from microbial fermentation
- Biofuels (ethanol, biodiesel)
- Biopolymers for medical and industrial use

### Water and Wastewater Microbiology
**Drinking Water Treatment**:
- Removing pathogens through filtration and disinfection
- Monitoring for indicator organisms
- Ensuring water safety standards
**Wastewater Treatment**:
- Primary treatment: Physical removal of solids
- Secondary treatment: Biological degradation by microbes
- Tertiary treatment: Advanced purification
**Recreational Water**:
- Testing beaches and pools for safety
- Monitoring for harmful algal blooms
- Preventing waterborne disease outbreaks

### Forensic Microbiology
**Applications**:
- Identifying microorganisms in criminal investigations
- Tracking sources of biological weapons
- Analyzing microbial evidence at crime scenes
**Techniques**:
- DNA fingerprinting of microorganisms
- Microbial source tracking
- Bioinformatics analysis of microbial data
**Bioterrorism Defense**:
- Detecting and identifying biological threats
- Developing rapid diagnostic methods
- Creating response plans and countermeasures

### Space Microbiology
**Astrobiology**:
- Searching for microbial life on other planets
- Studying extremophiles as analogs for extraterrestrial life
- Developing life detection instruments
**Spacecraft Microbiology**:
- Preventing contamination of other planets (planetary protection)
- Monitoring microbial growth on spacecraft
- Studying microbes in space environments
**Life Support Systems**:
- Using microbes for air and water recycling
- Developing biological life support for long missions
- Studying microbial behavior in microgravity

### Emerging Technologies
**Microbiome Research**:
- Studying human gut, skin, and oral microbiomes
- Linking microbiomes to health and disease
- Developing microbiome-based therapies
**Phage Therapy**:
- Using bacteriophages to treat bacterial infections
- Alternative to antibiotics for resistant infections
- Targeted therapy with minimal side effects
**Microbial Fuel Cells**:
- Generating electricity from microbial metabolism
- Waste treatment with energy recovery
- Sustainable energy technology

### Career Opportunities
**Research Positions**:
- Academic research at universities
- Government research laboratories
- Industry research and development
**Clinical Positions**:
- Clinical microbiologists in hospitals
- Public health laboratory scientists
- Infection control practitioners
**Industrial Positions**:
- Quality control in food and pharmaceutical industries
- Production supervision in fermentation industries
- Environmental monitoring and consulting
**Regulatory Positions**:
- Government regulatory agencies
- Quality assurance and compliance
- Safety and standards development

### Future Directions
**Personalized Medicine**:
- Using microbiome analysis for personalized treatments
- Developing targeted antimicrobial therapies
- Integrating microbiology with precision medicine
**Sustainable Solutions**:
- Developing biodegradable materials
- Creating sustainable agricultural practices
- Addressing climate change through microbial processes
**Global Health**:
- Combating antimicrobial resistance
- Preparing for emerging infectious diseases
- Improving water and sanitation worldwide`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What uses microorganisms to clean up pollution?",
          options: [
            "Fermentation",
            "Bioremediation",
            "Vaccination",
            "Pasteurization"
          ],
          correctAnswer: 1,
          explanation: "Bioremediation uses microorganisms to degrade or detoxify pollutants in the environment."
        },
        {
          id: 2,
          question: "What bacteria fix nitrogen in legume roots?",
          options: [
            "E. coli",
            "Rhizobium",
            "Salmonella",
            "Streptomyces"
          ],
          correctAnswer: 1,
          explanation: "Rhizobium bacteria form symbiotic relationships with legume plants, fixing atmospheric nitrogen."
        },
        {
          id: 3,
          question: "What is produced by fermentation using yeast?",
          options: [
            "Yogurt",
            "Bread",
            "Cheese",
            "Sauerkraut"
          ],
          correctAnswer: 1,
          explanation: "Yeast fermentation produces carbon dioxide that causes bread to rise."
        },
        {
          id: 4,
          question: "What field studies human-associated microbial communities?",
          options: [
            "Virology",
            "Mycology",
            "Microbiome research",
            "Parasitology"
          ],
          correctAnswer: 2,
          explanation: "Microbiome research studies the communities of microorganisms living in and on the human body."
        },
        {
          id: 5,
          question: "What uses bacteriophages to treat infections?",
          options: [
            "Antibiotic therapy",
            "Phage therapy",
            "Vaccination",
            "Probiotic therapy"
          ],
          correctAnswer: 1,
          explanation: "Phage therapy uses viruses that infect bacteria to treat bacterial infections."
        },
        {
          id: 6,
          question: "What fungus produces penicillin?",
          options: [
            "Aspergillus",
            "Penicillium",
            "Candida",
            "Saccharomyces"
          ],
          correctAnswer: 1,
          explanation: "Penicillin is produced by fungi of the genus Penicillium."
        },
        {
          id: 7,
          question: "What treats sewage using microbial digestion?",
          options: [
            "Primary treatment",
            "Secondary treatment",
            "Tertiary treatment",
            "Quaternary treatment"
          ],
          correctAnswer: 1,
          explanation: "Secondary wastewater treatment uses microorganisms to digest organic matter in sewage."
        },
        {
          id: 8,
          question: "What field searches for microbial life on other planets?",
          options: [
            "Epidemiology",
            "Astrobiology",
            "Forensic microbiology",
            "Clinical microbiology"
          ],
          correctAnswer: 1,
          explanation: "Astrobiology includes the search for microbial life on other planets and moons."
        },
        {
          id: 9,
          question: "What bacteria produce human insulin through genetic engineering?",
          options: [
            "E. coli",
            "Streptococcus",
            "Mycobacterium",
            "Pseudomonas"
          ],
          correctAnswer: 0,
          explanation: "E. coli bacteria are commonly genetically engineered to produce human insulin."
        },
        {
          id: 10,
          question: "What tests food for pathogens?",
          options: [
            "Industrial microbiology",
            "Food microbiology",
            "Medical microbiology",
            "Environmental microbiology"
          ],
          correctAnswer: 1,
          explanation: "Food microbiology includes testing food products for safety and quality, including pathogen detection."
        },
        {
          id: 11,
          question: "What generates electricity from microbial metabolism?",
          options: [
            "Solar cells",
            "Microbial fuel cells",
            "Batteries",
            "Generators"
          ],
          correctAnswer: 1,
          explanation: "Microbial fuel cells use bacteria to generate electricity from organic matter."
        },
        {
          id: 12,
          question: "What studies disease outbreaks in populations?",
          options: [
            "Pathology",
            "Epidemiology",
            "Toxicology",
            "Pharmacology"
          ],
          correctAnswer: 1,
          explanation: "Epidemiology studies the patterns, causes, and effects of health and disease conditions in populations."
        },
        {
          id: 13,
          question: "What uses fungi to help plant nutrient uptake?",
          options: [
            "Nitrogen fixation",
            "Mycorrhizae",
            "Photosynthesis",
            "Transpiration"
          ],
          correctAnswer: 1,
          explanation: "Mycorrhizal fungi form symbiotic relationships with plant roots, enhancing nutrient and water uptake."
        },
        {
          id: 14,
          question: "What field develops rapid diagnostic tests?",
          options: [
            "Industrial microbiology",
            "Medical microbiology",
            "Agricultural microbiology",
            "Space microbiology"
          ],
          correctAnswer: 1,
          explanation: "Medical microbiology includes developing diagnostic tests for infectious diseases."
        },
        {
          id: 15,
          question: "What produces citric acid using microorganisms?",
          options: [
            "Antibiotic production",
            "Organic acid production",
            "Enzyme production",
            "Vitamin production"
          ],
          correctAnswer: 1,
          explanation: "Citric acid is produced industrially by fermentation using the fungus Aspergillus niger."
        },
        {
          id: 16,
          question: "What prevents spacecraft from contaminating other planets?",
          options: [
            "Sterilization protocols",
            "Planetary protection",
            "Space hygiene",
            "Astro-cleaning"
          ],
          correctAnswer: 1,
          explanation: "Planetary protection involves measures to prevent biological contamination of other celestial bodies."
        },
        {
          id: 17,
          question: "What develops biological control agents for pests?",
          options: [
            "Medical microbiology",
            "Agricultural microbiology",
            "Food microbiology",
            "Industrial microbiology"
          ],
          correctAnswer: 1,
          explanation: "Agricultural microbiology includes developing microbial pesticides and biological control agents."
        },
        {
          id: 18,
          question: "What studies microbial evidence in criminal investigations?",
          options: [
            "Clinical microbiology",
            "Forensic microbiology",
            "Environmental microbiology",
            "Industrial microbiology"
          ],
          correctAnswer: 1,
          explanation: "Forensic microbiology applies microbiological techniques to criminal investigations."
        },
        {
          id: 19,
          question: "What produces biodegradable plastics from microbes?",
          options: [
            "Biomaterial production",
            "Antibiotic production",
            "Vaccine production",
            "Enzyme production"
          ],
          correctAnswer: 0,
          explanation: "Biomaterial production includes creating biodegradable plastics through microbial fermentation."
        },
        {
          id: 20,
          question: "What tests recreational water for safety?",
          options: [
            "Food microbiology",
            "Water microbiology",
            "Medical microbiology",
            "Industrial microbiology"
          ],
          correctAnswer: 1,
          explanation: "Water microbiology includes testing recreational water (pools, beaches) for microbial safety."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "microbiology-cert-exam",
    title: "Microbiology Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score at least 70% to pass.",
    passingScore: 70,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        module: 1,
        question: "What is microbiology the study of?",
        options: [
          "Large animals",
          "Microscopic organisms",
          "Plant biology",
          "Human anatomy"
        ],
        correctAnswer: 1,
        explanation: "Microbiology specifically studies microscopic organisms like bacteria, viruses, and fungi."
      },
      {
        id: 2,
        module: 1,
        question: "Who first observed microorganisms?",
        options: [
          "Louis Pasteur",
          "Robert Koch",
          "Antonie van Leeuwenhoek",
          "Alexander Fleming"
        ],
        correctAnswer: 2,
        explanation: "Leeuwenhoek made the first observations of microorganisms in the 1670s."
      },
      // Module 2 Questions
      {
        id: 3,
        module: 2,
        question: "What are spherical bacteria called?",
        options: [
          "Bacillus",
          "Coccus",
          "Spirillum",
          "Vibrio"
        ],
        correctAnswer: 1,
        explanation: "Coccus refers to spherical-shaped bacteria."
      },
      {
        id: 4,
        module: 2,
        question: "What is bacterial asexual reproduction called?",
        options: [
          "Mitosis",
          "Meiosis",
          "Binary fission",
          "Budding"
        ],
        correctAnswer: 2,
        explanation: "Binary fission is when one bacterial cell divides into two identical cells."
      },
      // Module 3 Questions
      {
        id: 5,
        module: 3,
        question: "What are non-living particles that infect cells?",
        options: [
          "Bacteria",
          "Viruses",
          "Fungi",
          "Protozoa"
        ],
        correctAnswer: 1,
        explanation: "Viruses are not considered living organisms and must infect cells to replicate."
      },
      {
        id: 6,
        module: 3,
        question: "What is the protein coat of viruses called?",
        options: [
          "Envelope",
          "Capsid",
          "Membrane",
          "Cortex"
        ],
        correctAnswer: 1,
        explanation: "The capsid is the protein shell surrounding viral genetic material."
      },
      // Module 4 Questions
      {
        id: 7,
        module: 4,
        question: "What is the main component of fungal cell walls?",
        options: [
          "Cellulose",
          "Peptidoglycan",
          "Chitin",
          "Silica"
        ],
        correctAnswer: 2,
        explanation: "Fungal cell walls contain chitin, a strong polysaccharide."
      },
      {
        id: 8,
        module: 4,
        question: "What protozoan disease is transmitted by mosquitoes?",
        options: [
          "Giardiasis",
          "Malaria",
          "Amoebic dysentery",
          "Toxoplasmosis"
        ],
        correctAnswer: 1,
        explanation: "Malaria is caused by Plasmodium parasites transmitted by mosquitoes."
      },
      // Module 5 Questions
      {
        id: 9,
        module: 5,
        question: "What are microbes that grow at moderate temperatures?",
        options: [
          "Psychrophiles",
          "Mesophiles",
          "Thermophiles",
          "Hyperthermophiles"
        ],
        correctAnswer: 1,
        explanation: "Mesophiles grow best at moderate temperatures (20-45°C)."
      },
      {
        id: 10,
        module: 5,
        question: "What is complete elimination of all microorganisms?",
        options: [
          "Disinfection",
          "Sterilization",
          "Sanitization",
          "Antisepsis"
        ],
        correctAnswer: 1,
        explanation: "Sterilization destroys all microbial life, including spores."
      },
      // Module 6 Questions
      {
        id: 11,
        module: 6,
        question: "What uses microorganisms to clean up pollution?",
        options: [
          "Fermentation",
          "Bioremediation",
          "Vaccination",
          "Pasteurization"
        ],
        correctAnswer: 1,
        explanation: "Bioremediation uses microbes to degrade environmental pollutants."
      },
      {
        id: 12,
        module: 6,
        question: "What bacteria fix nitrogen in legume roots?",
        options: [
          "E. coli",
          "Rhizobium",
          "Salmonella",
          "Streptomyces"
        ],
        correctAnswer: 1,
        explanation: "Rhizobium bacteria form symbiotic nitrogen-fixing relationships with legumes."
      },
      // Additional mixed questions from all modules
      {
        id: 13,
        module: 2,
        question: "What color do Gram-positive bacteria stain?",
        options: [
          "Pink/red",
          "Purple",
          "Green",
          "Blue"
        ],
        correctAnswer: 1,
        explanation: "Gram-positive bacteria retain crystal violet stain and appear purple."
      },
      {
        id: 14,
        module: 3,
        question: "What must viruses do to reproduce?",
        options: [
          "Photosynthesize",
          "Infect living cells",
          "Eat bacteria",
          "Form spores"
        ],
        correctAnswer: 1,
        explanation: "Viruses are obligate intracellular parasites that require host cells."
      },
      {
        id: 15,
        module: 4,
        question: "What are single-celled fungi called?",
        options: [
          "Molds",
          "Yeasts",
          "Mushrooms",
          "Hyphae"
        ],
        correctAnswer: 1,
        explanation: "Yeasts are single-celled fungi that reproduce by budding."
      },
      {
        id: 16,
        module: 5,
        question: "What is the rapid growth phase called?",
        options: [
          "Lag phase",
          "Log phase",
          "Stationary phase",
          "Death phase"
        ],
        correctAnswer: 1,
        explanation: "Log phase is when bacteria divide at their maximum rate."
      },
      {
        id: 17,
        module: 6,
        question: "What fungus produces penicillin?",
        options: [
          "Aspergillus",
          "Penicillium",
          "Candida",
          "Saccharomyces"
        ],
        correctAnswer: 1,
        explanation: "Penicillin is produced by Penicillium fungi."
      },
      {
        id: 18,
        module: 1,
        question: "What microscope uses electron beams?",
        options: [
          "Light microscope",
          "Electron microscope",
          "Simple microscope",
          "Compound microscope"
        ],
        correctAnswer: 1,
        explanation: "Electron microscopes use electron beams for much higher magnification."
      },
      {
        id: 19,
        module: 2,
        question: "What are whip-like structures for movement?",
        options: [
          "Pili",
          "Flagella",
          "Fimbriae",
          "Capsule"
        ],
        correctAnswer: 1,
        explanation: "Flagella enable bacterial movement through whip-like motions."
      },
      {
        id: 20,
        module: 3,
        question: "What viruses infect bacteria?",
        options: [
          "Retroviruses",
          "Bacteriophages",
          "Adenoviruses",
          "Coronaviruses"
        ],
        correctAnswer: 1,
        explanation: "Bacteriophages are viruses that specifically infect bacterial cells."
      },
      {
        id: 21,
        module: 4,
        question: "What are thread-like fungal filaments?",
        options: [
          "Spores",
          "Hyphae",
          "Mycelium",
          "Bud cells"
        ],
        correctAnswer: 1,
        explanation: "Hyphae are the thread-like filaments that make up fungal bodies."
      },
      {
        id: 22,
        module: 5,
        question: "What microbes require oxygen for growth?",
        options: [
          "Obligate anaerobes",
          "Obligate aerobes",
          "Facultative anaerobes",
          "Aerotolerant anaerobes"
        ],
        correctAnswer: 1,
        explanation: "Obligate aerobes require oxygen for cellular respiration."
      },
      {
        id: 23,
        module: 6,
        question: "What uses bacteriophages to treat infections?",
        options: [
          "Antibiotic therapy",
          "Phage therapy",
          "Vaccination",
          "Probiotic therapy"
        ],
        correctAnswer: 1,
        explanation: "Phage therapy uses viruses that infect bacteria to treat bacterial infections."
      },
      {
        id: 24,
        module: 1,
        question: "Who discovered penicillin?",
        options: [
          "Louis Pasteur",
          "Robert Koch",
          "Antonie van Leeuwenhoek",
          "Alexander Fleming"
        ],
        correctAnswer: 3,
        explanation: "Alexander Fleming discovered the antibiotic penicillin in 1928."
      },
      {
        id: 25,
        module: 2,
        question: "What are highly resistant bacterial structures?",
        options: [
          "Capsules",
          "Endospores",
          "Plasmids",
          "Ribosomes"
        ],
        correctAnswer: 1,
        explanation: "Endospores are highly resistant structures formed by some bacteria."
      },
      {
        id: 26,
        module: 3,
        question: "What cycle destroys host cells immediately?",
        options: [
          "Lysogenic cycle",
          "Lytic cycle",
          "Latent cycle",
          "Persistent cycle"
        ],
        correctAnswer: 1,
        explanation: "In the lytic cycle, viruses immediately replicate and destroy host cells."
      },
      {
        id: 27,
        module: 4,
        question: "What are parasitic worms called?",
        options: [
          "Protozoa",
          "Helminths",
          "Fungi",
          "Bacteria"
        ],
        correctAnswer: 1,
        explanation: "Helminths are parasitic worms including roundworms and tapeworms."
      },
      {
        id: 28,
        module: 5,
        question: "What method uses steam under pressure?",
        options: [
          "Boiling",
          "Autoclaving",
          "Pasteurization",
          "Incineration"
        ],
        correctAnswer: 1,
        explanation: "Autoclaves use steam under pressure for sterilization."
      },
      {
        id: 29,
        module: 6,
        question: "What tests food for pathogens?",
        options: [
          "Industrial microbiology",
          "Food microbiology",
          "Medical microbiology",
          "Environmental microbiology"
        ],
        correctAnswer: 1,
        explanation: "Food microbiology includes testing food for safety and pathogens."
      },
      {
        id: 30,
        module: 1,
        question: "What are single-celled animals?",
        options: [
          "Bacteria",
          "Viruses",
          "Protozoa",
          "Fungi"
        ],
        correctAnswer: 2,
        explanation: "Protozoa are single-celled eukaryotic organisms often classified as animals."
      },
      {
        id: 31,
        module: 2,
        question: "What are small circular DNA pieces?",
        options: [
          "Chromosomes",
          "Ribosomes",
          "Plasmids",
          "Nucleoids"
        ],
        correctAnswer: 2,
        explanation: "Plasmids are small, circular DNA molecules in bacteria."
      },
      {
        id: 32,
        module: 3,
        question: "What prevents viral infections?",
        options: [
          "Antibiotics",
          "Vaccines",
          "Antifungals",
          "Antipyretics"
        ],
        correctAnswer: 1,
        explanation: "Vaccines prepare the immune system to recognize and fight viruses."
      },
      {
        id: 33,
        module: 4,
        question: "What fungal infection affects skin?",
        options: [
          "Systemic mycosis",
          "Subcutaneous mycosis",
          "Superficial mycosis",
          "Opportunistic mycosis"
        ],
        correctAnswer: 2,
        explanation: "Superficial mycoses affect skin, hair, or nails."
      },
      {
        id: 34,
        module: 5,
        question: "What antibiotics inhibit cell wall synthesis?",
        options: [
          "Tetracyclines",
          "Penicillins",
          "Quinolones",
          "Sulfonamides"
        ],
        correctAnswer: 1,
        explanation: "Penicillins inhibit bacterial cell wall synthesis."
      },
      {
        id: 35,
        module: 6,
        question: "What produces biodegradable plastics?",
        options: [
          "Biomaterial production",
          "Antibiotic production",
          "Vaccine production",
          "Enzyme production"
        ],
        correctAnswer: 0,
        explanation: "Biomaterial production includes creating biodegradable plastics from microbes."
      },
      {
        id: 36,
        module: 1,
        question: "What is the gut microbiome?",
        options: [
          "Microbes in digestive system",
          "Microbes on skin",
          "Microbes in soil",
          "Microbes in water"
        ],
        correctAnswer: 0,
        explanation: "The gut microbiome consists of microorganisms in our digestive tract."
      },
      {
        id: 37,
        module: 2,
        question: "What bacteria use light energy?",
        options: [
          "Chemotrophs",
          "Phototrophs",
          "Autotrophs",
          "Heterotrophs"
        ],
        correctAnswer: 1,
        explanation: "Phototrophic bacteria use light as their energy source."
      },
      {
        id: 38,
        module: 3,
        question: "What is worldwide disease spread called?",
        options: [
          "Epidemic",
          "Pandemic",
          "Endemic",
          "Outbreak"
        ],
        correctAnswer: 1,
        explanation: "A pandemic is an epidemic that has spread worldwide."
      },
      {
        id: 39,
        module: 4,
        question: "What host is needed for parasite reproduction?",
        options: [
          "Intermediate host",
          "Definitive host",
          "Reservoir host",
          "Accidental host"
        ],
        correctAnswer: 1,
        explanation: "The definitive host is where parasites reach maturity and reproduce."
      },
      {
        id: 40,
        module: 5,
        question: "What measures microbial growth by cloudiness?",
        options: [
          "Plate count",
          "Turbidity",
          "Dry weight",
          "Microscopic count"
        ],
        correctAnswer: 1,
        explanation: "Turbidity measures the cloudiness of liquid cultures, indicating growth."
      }
    ]
  }
};

export default microbiologyCertificate;
