export const libraryScienceCertificateCourse = {
  id: "library-science-certificate",
  title: "Library Science (Certificate)",
  description: "Learn the fundamentals of library operations, information organization, and patron services. Perfect for those starting careers in libraries or wanting to understand information management.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📚",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Introduction to Libraries",
      content: `
# Introduction to Libraries

Welcome to the world of library science! This module introduces you to the basic concepts and purposes of libraries in society.

## What is a Library?

A library is an organized collection of information resources made accessible to a community for reference or borrowing. Libraries serve three main purposes:

**Preservation** - Protecting and maintaining information over time
**Access** - Making information available to users
**Education** - Helping people learn and develop skills

Modern libraries include public libraries, school libraries, academic libraries, and special libraries. Each type serves different communities with specific needs. All libraries share the common goal of connecting people with information.

## Types of Libraries

There are four main types of libraries you should know:

**Public Libraries** - Serve everyone in a community, funded by public money
**School Libraries** - Support students and teachers in educational settings
**Academic Libraries** - Serve college and university students and faculty
**Special Libraries** - Focus on specific subjects for specialized groups

Public libraries offer books, programs, and services for all ages. School libraries support curriculum and reading development. Academic libraries provide research materials for higher education. Special libraries might serve hospitals, law firms, or museums.

## Library Organization Basics

Libraries organize materials so users can find them easily. Basic organization includes:

**Physical Arrangement** - Books arranged by classification systems on shelves
**Catalog Systems** - Electronic or card systems that list all materials
**Service Desks** - Help areas where staff assist patrons
**Collection Areas** - Different sections for different types of materials

Most libraries use either the Dewey Decimal System or Library of Congress Classification. Catalogs help users search for materials by title, author, or subject. Service desks are where borrowing, returning, and questions happen. Collection areas separate fiction from nonfiction, children's materials from adults'.

## Library Staff Roles

Different staff members have different responsibilities:

**Librarians** - Professionals with master's degrees in library science
**Library Assistants** - Support staff who help with daily operations
**Pages/Shelvers** - Staff who return books to shelves
**Volunteers** - Community members who help with special tasks

Librarians plan programs, select materials, and provide research help. Library assistants check materials in and out, answer basic questions, and process new items. Pages ensure materials are correctly shelved and in good condition. Volunteers support special events and programs.

## Basic Library Services

All libraries provide core services to their users:

**Material Lending** - Borrowing books, DVDs, and other resources
**Reference Help** - Assistance finding information
**Computer Access** - Public computers and internet access
**Programs and Events** - Educational and cultural activities

Material lending allows people to take resources home. Reference help guides users to needed information. Computer access bridges digital divides. Programs like storytimes and workshops build community skills. These services make libraries valuable community centers.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a library's organized collection made accessible to a community?",
          options: [
            "Only books for sale",
            "Information resources for reference or borrowing",
            "Private archives for staff only",
            "Only digital materials"
          ],
          correctAnswer: 1,
          explanation: "A library organizes information resources and makes them accessible to community members."
        },
        {
          id: 2,
          question: "What is one of the three main purposes of libraries?",
          options: ["Making money", "Preserving information", "Selling books", "Replacing schools"],
          correctAnswer: 1,
          explanation: "Libraries preserve information, provide access to it, and help educate people."
        },
        {
          id: 3,
          question: "What type of library serves everyone in a community?",
          options: ["School Library", "Public Library", "Academic Library", "Special Library"],
          correctAnswer: 1,
          explanation: "Public libraries serve all community members regardless of age or background."
        },
        {
          id: 4,
          question: "What type of library supports students and teachers?",
          options: ["Public Library", "School Library", "Academic Library", "Special Library"],
          correctAnswer: 1,
          explanation: "School libraries support educational activities in primary and secondary schools."
        },
        {
          id: 5,
          question: "What type of library serves college students and faculty?",
          options: ["Public Library", "School Library", "Academic Library", "Special Library"],
          correctAnswer: 2,
          explanation: "Academic libraries support higher education institutions like colleges and universities."
        },
        {
          id: 6,
          question: "How do libraries organize materials for easy finding?",
          options: [
            "By color only",
            "By publication date only",
            "By classification systems on shelves",
            "Randomly"
          ],
          correctAnswer: 2,
          explanation: "Libraries use classification systems to arrange materials logically on shelves."
        },
        {
          id: 7,
          question: "What helps users search for materials by title, author, or subject?",
          options: ["Shelves", "Catalogs", "Staff memory", "Guessing"],
          correctAnswer: 1,
          explanation: "Catalogs provide searchable databases of library materials."
        },
        {
          id: 8,
          question: "What are help areas where staff assist patrons?",
          options: ["Stacks", "Service Desks", "Back rooms", "Parking lots"],
          correctAnswer: 1,
          explanation: "Service desks are designated areas where library staff help users."
        },
        {
          id: 9,
          question: "Who are professionals with master's degrees in library science?",
          options: ["Volunteers", "Librarians", "Pages", "Assistants"],
          correctAnswer: 1,
          explanation: "Librarians typically have advanced degrees in library and information science."
        },
        {
          id: 10,
          question: "Who are support staff who help with daily operations?",
          options: ["Librarians", "Library Assistants", "Volunteers", "Patrons"],
          correctAnswer: 1,
          explanation: "Library assistants perform essential daily tasks under librarian supervision."
        },
        {
          id: 11,
          question: "Who return books to shelves in proper order?",
          options: ["Librarians", "Assistants", "Pages/Shelvers", "Volunteers"],
          correctAnswer: 2,
          explanation: "Pages or shelvers ensure materials are returned to correct locations on shelves."
        },
        {
          id: 12,
          question: "What service allows people to take resources home?",
          options: [
            "Reference Help",
            "Material Lending",
            "Computer Access",
            "Programs and Events"
          ],
          correctAnswer: 1,
          explanation: "Material lending allows patrons to borrow library resources for temporary use."
        },
        {
          id: 13,
          question: "What service guides users to needed information?",
          options: [
            "Material Lending",
            "Reference Help",
            "Computer Access",
            "Programs and Events"
          ],
          correctAnswer: 1,
          explanation: "Reference help assists users in finding specific information or materials."
        },
        {
          id: 14,
          question: "What service provides public computers and internet access?",
          options: [
            "Material Lending",
            "Reference Help",
            "Computer Access",
            "Programs and Events"
          ],
          correctAnswer: 2,
          explanation: "Computer access gives community members technology resources they might not have at home."
        },
        {
          id: 15,
          question: "What builds community skills through activities?",
          options: [
            "Material Lending",
            "Reference Help",
            "Computer Access",
            "Programs and Events"
          ],
          correctAnswer: 3,
          explanation: "Programs and events offer educational and cultural opportunities for all ages."
        },
        {
          id: 16,
          question: "What separates fiction from nonfiction in libraries?",
          options: ["Service Desks", "Collection Areas", "Catalogs", "Staff offices"],
          correctAnswer: 1,
          explanation: "Collection areas organize different types of materials in separate sections."
        },
        {
          id: 17,
          question: "What are two common classification systems?",
          options: [
            "Color System and Size System",
            "Dewey Decimal and Library of Congress",
            "Alphabetical and Numerical Only",
            "New and Old Systems"
          ],
          correctAnswer: 1,
          explanation: "Most libraries use Dewey Decimal Classification or Library of Congress Classification."
        },
        {
          id: 18,
          question: "What do special libraries focus on?",
          options: [
            "Everything for everyone",
            "Specific subjects for specialized groups",
            "Only children's materials",
            "Only digital resources"
          ],
          correctAnswer: 1,
          explanation: "Special libraries serve specific professional groups with focused collections."
        },
        {
          id: 19,
          question: "Who helps with special events and programs?",
          options: ["Librarians only", "Library Assistants only", "Volunteers", "No one"],
          correctAnswer: 2,
          explanation: "Volunteers often support libraries by helping with special programs and events."
        },
        {
          id: 20,
          question: "What makes libraries valuable community centers?",
          options: [
            "Their large buildings",
            "Their core services to users",
            "Their expensive equipment",
            "Their quiet spaces only"
          ],
          correctAnswer: 1,
          explanation: "Core services like lending, reference help, computer access, and programs make libraries community hubs."
        }
      ]
    },
    {
      id: 2,
      title: "Classification Systems",
      content: `
# Classification Systems

Classification systems organize library materials so users can find them easily. This module covers the main systems used in libraries today.

## Dewey Decimal System

The Dewey Decimal System organizes knowledge into ten main classes:

**000-099** - Computer science, information, general works
**100-199** - Philosophy and psychology
**200-299** - Religion
**300-399** - Social sciences
**400-499** - Language
**500-599** - Science
**600-699** - Technology
**700-799** - Arts and recreation
**800-899** - Literature
**900-999** - History and geography

Each main class divides into ten divisions. Each division divides into ten sections. Numbers can have decimals for more specificity. This system is used mainly in public and school libraries.

## Library of Congress Classification

The Library of Congress system uses letters and numbers:

**A** - General works
**B** - Philosophy, psychology, religion
**C** - Auxiliary sciences of history
**D** - World history and history of Europe, Asia, Africa, Australia, New Zealand, etc.
**E-F** - American history
**G** - Geography, anthropology, recreation
**H** - Social sciences
**J** - Political science
**K** - Law
**L** - Education
**M** - Music
**N** - Fine arts
**P** - Language and literature
**Q** - Science
**R** - Medicine
**S** - Agriculture
**T** - Technology
**U** - Military science
**V** - Naval science
**Z** - Bibliography, library science

This system allows for more expansion and is used mainly in academic and research libraries.

## Understanding Call Numbers

Call numbers are addresses for library materials. They include:

**Classification Number** - The main number from the classification system
**Cutter Number** - Letters and numbers representing the author's name
**Publication Year** - Sometimes included to distinguish editions
**Copy or Volume Information** - For multiple copies or multi-volume works

Call numbers appear on spine labels. They are read line by line. Materials are shelved in call number order. Understanding call numbers helps locate materials quickly.

## Shelving Rules

Proper shelving follows specific rules:

**Read left to right, top to bottom** - Just like reading text
**Whole numbers before decimals** - 500 comes before 500.1
**Letter-by-letter alphabetizing** - "New" comes before "Newark"
**Nothing before something** - "Art" comes before "Art history"

Shelvers must pay attention to every part of the call number. Materials should be upright and not too tight on shelves. Bookends keep sections organized. Regular shelf-reading maintains order.

## Fiction Organization

Fiction materials often have special organization:

**Alphabetical by author's last name** - All books by one author together
**Sometimes by genre** - Mystery, science fiction, romance sections
**Young adult and children's separate** - Age-appropriate sections
**Graphic novels and large print** - Special format sections

Fiction A comes before Fiction B. Within an author, books may be alphabetical by title. Some libraries separate paperback and hardcover fiction. Series books are usually kept together in order.

## Nonfiction Organization

Nonfiction follows classification systems strictly:

**Dewey or LC numbers determine location**
**Biographies often separate** - Usually in 921 or B sections
**Reference materials non-circulating** - Stay in library for everyone's use
**Oversize books separate** - Too large for regular shelves

Biographies may be alphabetical by subject's last name. Reference materials have special location codes. Oversize books have "Q" or "F" prefixes. Audiovisual materials often have separate sections.

## Special Collections

Some materials need special handling:

**Rare books** - Valuable or fragile items
**Local history** - Materials about the community
**Archives** - Original documents and records
**Theses and dissertations** - Academic research works

These collections may have restricted access. They often require special request to view. Preservation conditions are carefully controlled. Special catalogs may describe these materials.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the Dewey Decimal System organize knowledge into?",
          options: [
            "Five main classes",
            "Ten main classes",
            "Twenty-six letters",
            "Color categories"
          ],
          correctAnswer: 1,
          explanation: "The Dewey Decimal System divides all knowledge into ten main classes from 000-999."
        },
        {
          id: 2,
          question: "What Dewey range covers philosophy and psychology?",
          options: ["000-099", "100-199", "200-299", "300-399"],
          correctAnswer: 1,
          explanation: "The 100-199 range in Dewey covers philosophy, psychology, and related topics."
        },
        {
          id: 3,
          question: "What Dewey range covers science?",
          options: ["400-499", "500-599", "600-699", "700-799"],
          correctAnswer: 1,
          explanation: "Science materials are classified in the 500-599 range of the Dewey system."
        },
        {
          id: 4,
          question: "What Dewey range covers literature?",
          options: ["600-699", "700-799", "800-899", "900-999"],
          correctAnswer: 2,
          explanation: "Literature is found in the 800-899 range of the Dewey Decimal System."
        },
        {
          id: 5,
          question: "What letter does the Library of Congress use for general works?",
          options: ["A", "B", "C", "D"],
          correctAnswer: 0,
          explanation: "The Library of Congress Classification uses A for general works and reference materials."
        },
        {
          id: 6,
          question: "What LC letter covers language and literature?",
          options: ["M", "N", "P", "Q"],
          correctAnswer: 2,
          explanation: "The letter P in LC classification covers language, linguistics, and literature."
        },
        {
          id: 7,
          question: "What LC letter covers science?",
          options: ["P", "Q", "R", "S"],
          correctAnswer: 1,
          explanation: "Science materials are classified under Q in the Library of Congress system."
        },
        {
          id: 8,
          question: "What are addresses for library materials on spine labels?",
          options: ["ISBN numbers", "Call numbers", "Barcode numbers", "Price tags"],
          correctAnswer: 1,
          explanation: "Call numbers serve as addresses that show where materials belong on shelves."
        },
        {
          id: 9,
          question: "What part represents the author's name in call numbers?",
          options: [
            "Classification Number",
            "Cutter Number",
            "Publication Year",
            "Volume Information"
          ],
          correctAnswer: 1,
          explanation: "Cutter numbers translate author names into alphanumeric codes for shelving."
        },
        {
          id: 10,
          question: "How should you read call numbers on shelves?",
          options: [
            "Right to left",
            "Left to right, top to bottom",
            "Bottom to top",
            "Random order"
          ],
          correctAnswer: 1,
          explanation: "Read call numbers like text: left to right on each line, top line to bottom line."
        },
        {
          id: 11,
          question: "What comes first: 500 or 500.1?",
          options: ["500.1", "500", "They're equal", "Depends on author"],
          correctAnswer: 1,
          explanation: "Whole numbers come before decimals in classification number order."
        },
        {
          id: 12,
          question: "What comes first: 'New' or 'Newark'?",
          options: ["Newark", "New", "Same place", "Alphabetical doesn't matter"],
          correctAnswer: 1,
          explanation: "In letter-by-letter alphabetizing, 'New' comes before 'Newark' because nothing comes before something."
        },
        {
          id: 13,
          question: "How is fiction usually organized by author?",
          options: [
            "By first name",
            "By last name",
            "By book title",
            "By publication date"
          ],
          correctAnswer: 1,
          explanation: "Fiction is typically organized alphabetically by the author's last name."
        },
        {
          id: 14,
          question: "What sections might separate mystery or science fiction?",
          options: ["Author sections", "Genre sections", "Color sections", "Size sections"],
          correctAnswer: 1,
          explanation: "Some libraries organize fiction by genre to help readers find their preferred types."
        },
        {
          id: 15,
          question: "Where are young adult books usually located?",
          options: [
            "Mixed with adult fiction",
            "Separate age-appropriate sections",
            "Only in schools",
            "Nowhere special"
          ],
          correctAnswer: 1,
          explanation: "Young adult materials are usually in separate sections for teen readers."
        },
        {
          id: 16,
          question: "What follows classification systems strictly?",
          options: ["Fiction", "Nonfiction", "Magazines", "Newspapers"],
          correctAnswer: 1,
          explanation: "Nonfiction materials are organized by subject using classification numbers."
        },
        {
          id: 17,
          question: "Where are biographies often placed?",
          options: [
            "With regular nonfiction",
            "Separate biography sections",
            "In fiction",
            "In reference only"
          ],
          correctAnswer: 1,
          explanation: "Biographies are often in separate sections, either 921 in Dewey or B in LC."
        },
        {
          id: 18,
          question: "What materials stay in the library for everyone's use?",
          options: [
            "All materials",
            "Reference materials",
            "Fiction only",
            "Children's books"
          ],
          correctAnswer: 1,
          explanation: "Reference materials typically do not circulate so they're always available in the library."
        },
        {
          id: 19,
          question: "What prefix might oversize books have?",
          options: ["R", "Q or F", "X", "Z"],
          correctAnswer: 1,
          explanation: "Oversize books often have Q (for quarto) or F (for folio) prefixes in their call numbers."
        },
        {
          id: 20,
          question: "What are valuable or fragile items that need special handling?",
          options: [
            "All new books",
            "Rare books",
            "Paperbacks",
            "Magazines"
          ],
          correctAnswer: 1,
          explanation: "Rare books require special preservation conditions and handling procedures."
        }
      ]
    },
    {
      id: 3,
      title: "Cataloging Basics",
      content: `
# Cataloging Basics

Cataloging creates records that help users find library materials. This module covers basic cataloging concepts and practices.

## What is Cataloging?

Cataloging is the process of creating records for library materials. These records include:

**Descriptive Information** - Title, author, publication details
**Subject Headings** - What the material is about
**Classification Numbers** - Where it goes on shelves
**Access Points** - How users can search for it

Good cataloging makes materials findable. Consistent rules ensure everyone uses the same terms. Complete records help users decide if materials meet their needs. Accurate information prevents confusion.

## Bibliographic Records

Bibliographic records contain information about materials. Key elements include:

**Title and Statement of Responsibility** - Title plus authors, editors, etc.
**Edition** - Which version or edition
**Publication Information** - Where, when, and by whom published
**Physical Description** - Number of pages, size, accompanying materials
**Series Information** - If part of a series

Title proper is the main title. Statement of responsibility lists creators. Edition indicates revisions or versions. Publication info helps identify specific printings. Physical description tells users about format.

## Subject Headings

Subject headings describe what materials are about. Important aspects:

**Controlled Vocabulary** - Everyone uses the same terms
**Hierarchical Structure** - Broader and narrower terms
**Cross References** - "See" and "See also" references
**Specificity** - As specific as the material warrants

Controlled vocabulary ensures consistency. Hierarchical structure shows relationships between topics. Cross references guide users to preferred terms. Specific headings help users find exactly what they need.

## Access Points

Access points are how users find materials. Main types include:

**Author Access** - Searches by personal or corporate authors
**Title Access** - Searches by title words
**Subject Access** - Searches by subject headings
**Keyword Access** - Searches any words in the record

Author access includes all creators. Title access includes main titles and variations. Subject access uses controlled vocabulary. Keyword searches entire records for any term.

## Cataloging Rules and Standards

Cataloging follows established standards:

**RDA (Resource Description and Access)** - Current international standard
**AACR2 (Anglo-American Cataloguing Rules)** - Previous standard still used
**MARC (Machine-Readable Cataloging)** - Format for computer records
**ISBD (International Standard Bibliographic Description)** - Punctuation standard

RDA focuses on user needs and relationships. AACR2 was the previous comprehensive standard. MARC is the data format for library systems. ISBD provides punctuation for display.

## Copy Cataloging

Copy cataloging uses existing records. Steps include:

**Searching databases** - Finding matching records
**Verifying match** - Ensuring record matches item
**Editing as needed** - Making local modifications
**Adding local information** - Call numbers, barcodes, etc.

OCLC WorldCat is a major source of records. Verification ensures accuracy. Editing adapts records for local needs. Local information customizes for specific library.

## Original Cataloging

Original cataloging creates new records when needed:

**For unique materials** - No existing record found
**Following standards** - Applying cataloging rules
**Creating all access points** - Authors, titles, subjects
**Adding classification** - Determining call number

Local publications often need original cataloging. Standards ensure consistency. Complete access points make materials findable. Appropriate classification enables proper shelving.

## Catalog Maintenance

Catalogs need ongoing maintenance:

**Updating records** - Correcting errors or adding information
**Deleting withdrawn items** - Removing records for discarded materials
**Adding new access points** - As user needs change
**Authority control** - Maintaining consistency in headings

Regular updates keep catalogs accurate. Withdrawal deletion prevents confusion. New access points improve findability. Authority control maintains quality over time.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the process of creating records for library materials?",
          options: ["Shelving", "Cataloging", "Circulating", "Purchasing"],
          correctAnswer: 1,
          explanation: "Cataloging creates descriptive records that help users find and identify materials."
        },
        {
          id: 2,
          question: "What includes title, author, and publication details?",
          options: [
            "Subject Headings",
            "Descriptive Information",
            "Classification Numbers",
            "Access Points"
          ],
          correctAnswer: 1,
          explanation: "Descriptive information identifies and describes the physical item."
        },
        {
          id: 3,
          question: "What describes what the material is about?",
          options: [
            "Descriptive Information",
            "Subject Headings",
            "Classification Numbers",
            "Access Points"
          ],
          correctAnswer: 1,
          explanation: "Subject headings describe the content topics of library materials."
        },
        {
          id: 4,
          question: "What shows where material goes on shelves?",
          options: [
            "Descriptive Information",
            "Subject Headings",
            "Classification Numbers",
            "Access Points"
          ],
          correctAnswer: 2,
          explanation: "Classification numbers determine physical location in the library."
        },
        {
          id: 5,
          question: "What lists authors, editors, and other creators?",
          options: [
            "Edition",
            "Title and Statement of Responsibility",
            "Publication Information",
            "Physical Description"
          ],
          correctAnswer: 1,
          explanation: "Statement of responsibility identifies everyone who contributed to creating the work."
        },
        {
          id: 6,
          question: "What indicates which version or edition?",
          options: [
            "Title and Statement of Responsibility",
            "Edition",
            "Publication Information",
            "Physical Description"
          ],
          correctAnswer: 1,
          explanation: "Edition information distinguishes between different versions of the same work."
        },
        {
          id: 7,
          question: "What tells where, when, and by whom published?",
          options: [
            "Title and Statement of Responsibility",
            "Edition",
            "Publication Information",
            "Physical Description"
          ],
          correctAnswer: 2,
          explanation: "Publication information identifies the publisher, place, and date of publication."
        },
        {
          id: 8,
          question: "What ensures everyone uses the same terms for subjects?",
          options: [
            "Hierarchical Structure",
            "Controlled Vocabulary",
            "Cross References",
            "Specificity"
          ],
          correctAnswer: 1,
          explanation: "Controlled vocabulary standardizes terminology across the catalog."
        },
        {
          id: 9,
          question: "What shows broader and narrower term relationships?",
          options: [
            "Controlled Vocabulary",
            "Hierarchical Structure",
            "Cross References",
            "Specificity"
          ],
          correctAnswer: 1,
          explanation: "Hierarchical structure organizes subjects from general to specific."
        },
        {
          id: 10,
          question: "What searches by personal or corporate authors?",
          options: [
            "Title Access",
            "Author Access",
            "Subject Access",
            "Keyword Access"
          ],
          correctAnswer: 1,
          explanation: "Author access points allow searching by creators' names."
        },
        {
          id: 11,
          question: "What searches by controlled vocabulary terms?",
          options: [
            "Author Access",
            "Title Access",
            "Subject Access",
            "Keyword Access"
          ],
          correctAnswer: 2,
          explanation: "Subject access uses standardized subject headings for searching."
        },
        {
          id: 12,
          question: "What is the current international cataloging standard?",
          options: ["AACR2", "RDA", "MARC", "ISBD"],
          correctAnswer: 1,
          explanation: "RDA (Resource Description and Access) is the current international standard."
        },
        {
          id: 13,
          question: "What is the format for computer catalog records?",
          options: ["RDA", "AACR2", "MARC", "ISBD"],
          correctAnswer: 2,
          explanation: "MARC (Machine-Readable Cataloging) is the standard format for library data."
        },
        {
          id: 14,
          question: "What uses existing records from databases?",
          options: [
            "Original Cataloging",
            "Copy Cataloging",
            "Descriptive Cataloging",
            "Subject Cataloging"
          ],
          correctAnswer: 1,
          explanation: "Copy cataloging adapts existing records rather than creating new ones."
        },
        {
          id: 15,
          question: "What is a major source of catalog records?",
          options: [
            "Local memory",
            "OCLC WorldCat",
            "Google searches",
            "Publisher websites"
          ],
          correctAnswer: 1,
          explanation: "OCLC WorldCat is a global database of library catalog records."
        },
        {
          id: 16,
          question: "What creates new records when no existing record is found?",
          options: [
            "Copy Cataloging",
            "Original Cataloging",
            "Quick Cataloging",
            "Partial Cataloging"
          ],
          correctAnswer: 1,
          explanation: "Original cataloging creates complete new records following established rules."
        },
        {
          id: 17,
          question: "What often needs original cataloging?",
          options: [
            "Best-selling novels",
            "Local publications",
            "Classic literature",
            "Popular magazines"
          ],
          correctAnswer: 1,
          explanation: "Local or unique publications often lack existing catalog records."
        },
        {
          id: 18,
          question: "What needs ongoing maintenance in catalogs?",
          options: [
            "Only new records",
            "Updating records and deleting withdrawn items",
            "Nothing needs maintenance",
            "Only subject headings"
          ],
          correctAnswer: 1,
          explanation: "Catalogs require regular updates, corrections, and withdrawals to stay accurate."
        },
        {
          id: 19,
          question: "What maintains consistency in name and subject headings?",
          options: [
            "Record deletion",
            "Authority control",
            "Classification only",
            "Barcode assignment"
          ],
          correctAnswer: 1,
          explanation: "Authority control ensures consistent forms of names and subjects across the catalog."
        },
        {
          id: 20,
          question: "What makes materials findable for users?",
          options: [
            "Good cataloging",
            "Beautiful covers",
            "Low prices",
            "Small size"
          ],
          correctAnswer: 0,
          explanation: "Good cataloging with complete, accurate records helps users find what they need."
        }
      ]
    },
    {
      id: 4,
      title: "Reference Services",
      content: `
# Reference Services

Reference services help users find information and answer questions. This module covers basic reference skills and resources.

## What is Reference Service?

Reference service involves helping users find information. Key aspects include:

**Answering Questions** - Responding to user inquiries
**Finding Resources** - Locating relevant materials
**Teaching Skills** - Showing users how to find information themselves
**Providing Access** - Connecting users with needed information

Reference can be in person, by phone, email, or chat. It includes ready reference (quick answers) and research assistance (in-depth help). Good reference service meets users at their point of need.

## Reference Interview

The reference interview discovers what users really need. Steps include:

**Welcoming Approach** - Making users feel comfortable asking
**Open Questions** - "What would you like to find today?"
**Listening Actively** - Hearing both stated and unstated needs
**Clarifying** - Making sure you understand the request
**Following Up** - Checking if the answer was helpful

Open questions encourage users to explain fully. Active listening catches important details. Clarification prevents misunderstandings. Follow-up ensures satisfaction and offers further help.

## Ready Reference Sources

Ready reference sources provide quick answers. Common types:

**Dictionaries** - Word definitions, spellings, pronunciations
**Encyclopedias** - Overviews of topics
**Almanacs** - Current facts and statistics
**Directories** - Contact information for people or organizations
**Handbooks** - Practical information on specific subjects

Print reference sources are still valuable. Online sources offer current information. Knowing which source to use saves time. Some questions need multiple sources for complete answers.

## Online Reference Tools

Digital tools enhance reference service:

**Library Databases** - Subscription resources with quality information
**Search Engines** - Google, Bing for general searching
**Government Websites** - Official statistics and information
**Subject Gateways** - Curated links to quality websites
**Digital Reference Collections** - E-books and online encyclopedias

Databases provide vetted information not freely available. Search engines find recent or obscure information. Government sites offer official data. Subject gateways save evaluation time. Digital collections provide 24/7 access.

## Readers' Advisory

Readers' advisory helps users find enjoyable reading materials. Techniques include:

**Asking About Preferences** - What they've enjoyed before
**Considering Mood and Time** - What fits their current situation
**Knowing the Collection** - Being familiar with available materials
**Using Tools** - Lists, reviews, recommendation databases
**Making Multiple Suggestions** - Offering several options

Understanding reading preferences leads to better suggestions. Different moods call for different books. Collection knowledge enables personalized recommendations. Tools supplement personal knowledge. Multiple options increase success chances.

## Information Literacy Instruction

Teaching information skills empowers users. Basic concepts include:

**Evaluating Sources** - Determining credibility and relevance
**Search Strategies** - Effective database and internet searching
**Citation Understanding** - How to credit sources properly
**Research Process** - Steps in finding and using information
**Ethical Use** - Copyright and plagiarism awareness

Evaluation skills combat misinformation. Search strategies save time and improve results. Citation knowledge supports academic work. Research process understanding builds confidence. Ethical awareness promotes responsible information use.

## Specialized Reference Areas

Different user groups have different needs:

**Children's Reference** - Age-appropriate materials and approaches
**Young Adult Services** - Materials and help for teenagers
**Genealogy Assistance** - Family history research help
**Business Reference** - Company and industry information
**Legal Reference** - Basic legal information (not legal advice)

Children need simpler language and different topics. Teens want respect and relevant materials. Genealogy requires specific resources and techniques. Business questions need current data. Legal help must distinguish information from advice.

## Reference Ethics

Reference service follows ethical guidelines:

**Confidentiality** - Protecting user privacy
**Accuracy** - Providing correct information
**Impartiality** - Serving all users equally
**Professional Boundaries** - Not giving personal opinions as facts
**Referral** - Knowing when to refer to other experts

Confidentiality builds trust. Accuracy maintains credibility. Impartiality ensures fair service. Boundaries maintain professionalism. Referral recognizes when others can better help.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves helping users find information and answer questions?",
          options: [
            "Circulation Services",
            "Reference Service",
            "Technical Services",
            "Administration"
          ],
          correctAnswer: 1,
          explanation: "Reference service focuses on connecting users with needed information."
        },
        {
          id: 2,
          question: "What responds to user inquiries?",
          options: [
            "Finding Resources",
            "Answering Questions",
            "Teaching Skills",
            "Providing Access"
          ],
          correctAnswer: 1,
          explanation: "Answering questions is a core function of reference service."
        },
        {
          id: 3,
          question: "What shows users how to find information themselves?",
          options: [
            "Answering Questions",
            "Finding Resources",
            "Teaching Skills",
            "Providing Access"
          ],
          correctAnswer: 2,
          explanation: "Teaching information skills empowers users for future needs."
        },
        {
          id: 4,
          question: "What discovers what users really need?",
          options: [
            "Reference collection",
            "Reference interview",
            "Reference desk",
            "Reference book"
          ],
          correctAnswer: 1,
          explanation: "The reference interview clarifies user needs through conversation."
        },
        {
          id: 5,
          question: "What type of question encourages users to explain fully?",
          options: [
            "Closed questions",
            "Open questions",
            "Leading questions",
            "Multiple choice questions"
          ],
          correctAnswer: 1,
          explanation: "Open questions like 'What would you like to find?' invite detailed responses."
        },
        {
          id: 6,
          question: "What ensures you understand the user's request?",
          options: ["Welcoming", "Listening", "Clarifying", "Following up"],
          correctAnswer: 2,
          explanation: "Clarification confirms understanding before searching for answers."
        },
        {
          id: 7,
          question: "What provides word definitions and spellings?",
          options: ["Encyclopedias", "Dictionaries", "Almanacs", "Directories"],
          correctAnswer: 1,
          explanation: "Dictionaries provide definitions, spellings, and pronunciations."
        },
        {
          id: 8,
          question: "What provides overviews of topics?",
          options: ["Dictionaries", "Encyclopedias", "Almanacs", "Directories"],
          correctAnswer: 1,
          explanation: "Encyclopedias offer summary information on a wide range of subjects."
        },
        {
          id: 9,
          question: "What provides current facts and statistics?",
          options: ["Dictionaries", "Encyclopedias", "Almanacs", "Directories"],
          correctAnswer: 2,
          explanation: "Almanacs contain current statistical and factual information."
        },
        {
          id: 10,
          question: "What are subscription resources with quality information?",
          options: [
            "Search Engines",
            "Library Databases",
            "Government Websites",
            "Subject Gateways"
          ],
          correctAnswer: 1,
          explanation: "Library databases provide vetted information through subscriptions."
        },
        {
          id: 11,
          question: "What helps users find enjoyable reading materials?",
          options: [
            "Reference Interview",
            "Readers' Advisory",
            "Information Literacy",
            "Collection Development"
          ],
          correctAnswer: 1,
          explanation: "Readers' advisory helps users discover books they'll enjoy reading."
        },
        {
          id: 12,
          question: "What should you ask about to understand reading preferences?",
          options: [
            "Only the last book read",
            "What they've enjoyed before",
            "Their favorite color",
            "Their age only"
          ],
          correctAnswer: 1,
          explanation: "Asking about previously enjoyed books reveals reading tastes and preferences."
        },
        {
          id: 13,
          question: "What empowers users by teaching information skills?",
          options: [
            "Ready Reference",
            "Information Literacy Instruction",
            "Readers' Advisory",
            "Collection Management"
          ],
          correctAnswer: 1,
          explanation: "Information literacy instruction teaches users to find and evaluate information themselves."
        },
        {
          id: 14,
          question: "What determines credibility and relevance of sources?",
          options: [
            "Search Strategies",
            "Evaluating Sources",
            "Citation Understanding",
            "Research Process"
          ],
          correctAnswer: 1,
          explanation: "Evaluation skills help users identify reliable, appropriate information sources."
        },
        {
          id: 15,
          question: "What needs age-appropriate materials and approaches?",
          options: [
            "Business Reference",
            "Children's Reference",
            "Legal Reference",
            "Genealogy Assistance"
          ],
          correctAnswer: 1,
          explanation: "Children's reference requires simpler language and developmentally appropriate materials."
        },
        {
          id: 16,
          question: "What helps with family history research?",
          options: [
            "Children's Reference",
            "Young Adult Services",
            "Genealogy Assistance",
            "Business Reference"
          ],
          correctAnswer: 2,
          explanation: "Genealogy assistance helps users research family history using specific resources."
        },
        {
          id: 17,
          question: "What protects user privacy in reference interactions?",
          options: ["Accuracy", "Confidentiality", "Impartiality", "Referral"],
          correctAnswer: 1,
          explanation: "Confidentiality ensures user questions and information remain private."
        },
        {
          id: 18,
          question: "What means serving all users equally?",
          options: ["Confidentiality", "Accuracy", "Impartiality", "Professional Boundaries"],
          correctAnswer: 2,
          explanation: "Impartiality ensures every user receives equal help regardless of background or question."
        },
        {
          id: 19,
          question: "What recognizes when others can better help?",
          options: ["Confidentiality", "Accuracy", "Impartiality", "Referral"],
          correctAnswer: 3,
          explanation: "Referral involves directing users to more appropriate sources of help when needed."
        },
        {
          id: 20,
          question: "What checks if the answer was helpful to the user?",
          options: ["Welcoming", "Listening", "Clarifying", "Following up"],
          correctAnswer: 3,
          explanation: "Follow-up questions ensure the user's need was met and offer further assistance."
        }
      ]
    },
    {
      id: 5,
      title: "Collection Development",
      content: `
# Collection Development

Collection development involves selecting, acquiring, and maintaining library materials. This module covers basic principles and practices.

## What is Collection Development?

Collection development builds library collections to meet user needs. It includes:

**Selection** - Choosing which materials to add
**Acquisition** - Obtaining selected materials
**Evaluation** - Assessing collection quality and use
**Weeding** - Removing outdated or unused materials

Good collections reflect community needs. Balanced collections include diverse viewpoints. Current collections remain relevant. Well-maintained collections serve users effectively.

## Selection Principles

Selection follows established criteria:

**Community Needs** - What users want and need
**Quality** - Well-produced, accurate materials
**Diversity** - Multiple perspectives and voices
**Balance** - Different formats, levels, viewpoints
**Budget** - Within available funds

Needs assessment informs selection. Quality ensures reliable information. Diversity represents various experiences. Balance meets different user preferences. Budget constraints require careful choices.

## Selection Tools

Various tools help with selection:

**Review Sources** - Professional journals and websites
**Publisher Catalogs** - Information about new materials
**Award Lists** - Recognized quality materials
**User Requests** - Suggestions from library patrons
**Vendor Services** - Automatic selection assistance

Review sources provide expert opinions. Publisher catalogs announce new titles. Award lists highlight exceptional works. User requests indicate community interests. Vendor services can streamline selection.

## Acquisition Methods

Different methods obtain materials:

**Purchasing** - Buying materials from vendors
**Gifts** - Donations from individuals or organizations
**Exchanges** - Trading with other libraries
**Licensing** - Obtaining digital access rights
**Government Documents** - Free publications from agencies

Purchasing is the most common method. Gifts can supplement budgets but require evaluation. Exchanges build relationships with other libraries. Licensing provides digital content access. Government documents offer free information.

## Budget Management

Effective budgeting ensures good use of funds:

**Allocation** - Dividing funds among material types
**Tracking** - Monitoring spending against budget
**Prioritizing** - Funding most important needs first
**Planning** - Anticipating future costs and needs
**Reporting** - Documenting how funds were used

Allocation balances different collection areas. Tracking prevents overspending. Prioritizing addresses critical needs. Planning prepares for price increases. Reporting demonstrates responsible stewardship.

## Weeding Guidelines

Weeding removes materials no longer needed. Reasons include:

**Condition** - Damaged or worn materials
**Accuracy** - Outdated or incorrect information
**Use** - Materials no longer borrowed
**Space** - Making room for new materials
**Currency** - Superseded by newer editions

Condition weeding removes unusable items. Accuracy weeding eliminates misinformation. Use statistics show what's not being used. Space constraints require removal for addition. Currency ensures current information.

## Collection Evaluation

Evaluation assesses collection effectiveness. Methods include:

**Usage Statistics** - How often materials circulate
**User Surveys** - What patrons think about the collection
**Comparison** - How collection compares to standards
**Direct Examination** - Physically checking the collection
**Focus Groups** - Detailed discussions with users

Usage statistics reveal what's popular. User surveys gather satisfaction data. Comparison against standards identifies gaps. Direct examination assesses physical condition. Focus groups provide in-depth feedback.

## Challenges and Trends

Collection development faces ongoing challenges:

**Digital Content** - E-books, databases, streaming media
**Budget Pressures** - Rising costs with limited funds
**Censorship** - Community challenges to materials
**Space Limitations** - Physical storage constraints
**Changing Formats** - Evolution from print to digital

Digital content requires new acquisition models. Budget pressures demand creative solutions. Censorship challenges require policy adherence. Space limitations force difficult choices. Format changes require ongoing adaptation.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves selecting, acquiring, and maintaining library materials?",
          options: [
            "Reference Services",
            "Collection Development",
            "Cataloging",
            "Circulation"
          ],
          correctAnswer: 1,
          explanation: "Collection development builds and maintains library collections to serve users."
        },
        {
          id: 2,
          question: "What chooses which materials to add to the collection?",
          options: ["Selection", "Acquisition", "Evaluation", "Weeding"],
          correctAnswer: 0,
          explanation: "Selection involves deciding which materials to include in the library collection."
        },
        {
          id: 3,
          question: "What obtains selected materials for the library?",
          options: ["Selection", "Acquisition", "Evaluation", "Weeding"],
          correctAnswer: 1,
          explanation: "Acquisition is the process of obtaining materials after they've been selected."
        },
        {
          id: 4,
          question: "What assesses collection quality and use?",
          options: ["Selection", "Acquisition", "Evaluation", "Weeding"],
          correctAnswer: 2,
          explanation: "Evaluation examines how well the collection meets user needs."
        },
        {
          id: 5,
          question: "What criteria considers what users want and need?",
          options: ["Quality", "Community Needs", "Diversity", "Balance"],
          correctAnswer: 1,
          explanation: "Community needs should drive collection development decisions."
        },
        {
          id: 6,
          question: "What criteria includes multiple perspectives and voices?",
          options: ["Community Needs", "Quality", "Diversity", "Balance"],
          correctAnswer: 2,
          explanation: "Diversity ensures collections represent various experiences and viewpoints."
        },
        {
          id: 7,
          question: "What are professional journals and websites that help selection?",
          options: [
            "Publisher Catalogs",
            "Review Sources",
            "Award Lists",
            "User Requests"
          ],
          correctAnswer: 1,
          explanation: "Review sources provide professional evaluations of new materials."
        },
        {
          id: 8,
          question: "What are suggestions from library patrons?",
          options: [
            "Review Sources",
            "Publisher Catalogs",
            "Award Lists",
            "User Requests"
          ],
          correctAnswer: 3,
          explanation: "User requests indicate community interests and should inform selection."
        },
        {
          id: 9,
          question: "What is the most common method of obtaining materials?",
          options: ["Gifts", "Purchasing", "Exchanges", "Licensing"],
          correctAnswer: 1,
          explanation: "Purchasing materials from vendors is the primary acquisition method."
        },
        {
          id: 10,
          question: "What are donations from individuals or organizations?",
          options: ["Purchasing", "Gifts", "Exchanges", "Licensing"],
          correctAnswer: 1,
          explanation: "Gifts can supplement collections but require careful evaluation."
        },
        {
          id: 11,
          question: "What divides funds among different material types?",
          options: ["Tracking", "Allocation", "Prioritizing", "Planning"],
          correctAnswer: 1,
          explanation: "Allocation determines how much money goes to each collection area."
        },
        {
          id: 12,
          question: "What monitors spending against the budget?",
          options: ["Allocation", "Tracking", "Prioritizing", "Planning"],
          correctAnswer: 1,
          explanation: "Tracking ensures spending stays within budget limits."
        },
        {
          id: 13,
          question: "What removes damaged or worn materials?",
          options: ["Condition", "Accuracy", "Use", "Space"],
          correctAnswer: 0,
          explanation: "Condition weeding removes materials that are physically unusable."
        },
        {
          id: 14,
          question: "What removes outdated or incorrect information?",
          options: ["Condition", "Accuracy", "Use", "Space"],
          correctAnswer: 1,
          explanation: "Accuracy weeding ensures collections contain current, correct information."
        },
        {
          id: 15,
          question: "What makes room for new materials?",
          options: ["Condition", "Accuracy", "Use", "Space"],
          correctAnswer: 3,
          explanation: "Space considerations sometimes require removing materials to add new ones."
        },
        {
          id: 16,
          question: "What shows how often materials circulate?",
          options: [
            "User Surveys",
            "Usage Statistics",
            "Comparison",
            "Direct Examination"
          ],
          correctAnswer: 1,
          explanation: "Usage statistics indicate which materials are popular with users."
        },
        {
          id: 17,
          question: "What gathers satisfaction data from patrons?",
          options: [
            "Usage Statistics",
            "User Surveys",
            "Comparison",
            "Direct Examination"
          ],
          correctAnswer: 1,
          explanation: "User surveys collect feedback about collection satisfaction."
        },
        {
          id: 18,
          question: "What assesses physical condition of materials?",
          options: [
            "Usage Statistics",
            "User Surveys",
            "Comparison",
            "Direct Examination"
          ],
          correctAnswer: 3,
          explanation: "Direct examination involves physically checking materials in the collection."
        },
        {
          id: 19,
          question: "What includes e-books, databases, and streaming media?",
          options: [
            "Budget Pressures",
            "Digital Content",
            "Censorship",
            "Space Limitations"
          ],
          correctAnswer: 1,
          explanation: "Digital content presents new acquisition and access challenges."
        },
        {
          id: 20,
          question: "What requires adherence to library policies when materials are challenged?",
          options: [
            "Digital Content",
            "Budget Pressures",
            "Censorship",
            "Space Limitations"
          ],
          correctAnswer: 2,
          explanation: "Censorship challenges require following established reconsideration policies."
        }
      ]
    },
    {
      id: 6,
      title: "Library Technology Basics",
      content: `
# Library Technology Basics

Modern libraries use various technologies to serve users. This module covers basic library technologies and their applications.

## Integrated Library Systems

Integrated Library Systems (ILS) manage library operations. Core functions include:

**Catalog Module** - Searchable database of library materials
**Circulation Module** - Check in/out, renewals, holds
**Acquisitions Module** - Ordering and receiving materials
**Serials Module** - Managing magazines and journals
**OPAC** - Online Public Access Catalog for users

The catalog module stores bibliographic records. Circulation tracks item loans and due dates. Acquisitions handles purchasing workflows. Serials manages periodical subscriptions. OPAC allows public searching of the catalog.

## Barcode Systems

Barcodes identify library items and users. Uses include:

**Item Identification** - Unique barcode on each material
**Patron Cards** - User identification barcodes
**Checkout Process** - Scanning items and user cards
**Inventory** - Counting materials with scanners
**Security** - Linking to electronic article surveillance

Item barcodes connect physical items to catalog records. Patron barcodes identify users in the system. Scanning speeds checkout and reduces errors. Inventory scanners count collections quickly. Security systems use barcodes for theft prevention.

## RFID Technology

Radio Frequency Identification offers advantages:

**Self-Checkout** - Users check out materials themselves
**Inventory Management** - Faster shelf reading
**Security** - Integrated theft detection
**Sorting** - Automated return sorting systems
**Multiple Item Scanning** - Several items at once

Self-checkout increases privacy and reduces staff workload. RFID inventory wand reads shelves quickly. Security gates detect unpaid items. Automated sorters route returns to proper areas. Bulk scanning saves time during check-in.

## Digital Resources Management

Libraries provide access to digital materials:

**E-book Platforms** - Digital book lending systems
**Database Subscriptions** - Online research resources
**Streaming Media** - Video and audio content
**Digital Magazines** - Online periodical access
**Institutional Repositories** - Local digital collections

E-book platforms like OverDrive or Libby. Databases provide articles and reference content. Streaming services offer films and music. Digital magazines replicate print editions. Repositories preserve local digital materials.

## Public Access Computers

Public computers serve community needs:

**Internet Access** - Bridging digital divides
**Productivity Software** - Word processing, spreadsheets
**Printing Services** - Public printing facilities
**Assistive Technology** - Tools for users with disabilities
**Time Management** - Session limits and reservations

Internet access helps those without home connectivity. Productivity software supports job searching and schoolwork. Printing enables document production. Assistive technology ensures accessibility. Time management allows fair access for all.

## Library Websites

Library websites provide virtual services:

**Online Catalog Access** - Search collections from anywhere
**Account Management** - Renewals, holds, fines payment
**Digital Resources** - Links to e-books and databases
**Event Registration** - Sign up for programs online
**Ask a Librarian** - Virtual reference services

Online catalog access extends library reach. Account management offers user convenience. Digital resource access happens remotely. Event registration streamlines program attendance. Virtual reference provides help outside library hours.

## Basic Troubleshooting

Library staff handle common tech issues:

**Printer Problems** - Paper jams, toner, connectivity
**Computer Issues** - Slow performance, software problems
**Wi-Fi Connectivity** - Connection drops or failures
**Database Access** - Login or search problems
**Equipment Operation** - Scanners, copiers, other devices

Printer troubleshooting clears jams and reloads supplies. Computer issues may require restarts or staff assistance. Wi-Fi problems need router checks or password help. Database access issues require authentication verification. Equipment operation assistance helps users succeed.

## Emerging Technologies

Libraries adopt new technologies:

**3D Printing** - Creating physical objects from digital files
**Makerspaces** - Creative spaces with various technologies
**Virtual Reality** - Immersive learning experiences
**Mobile Apps** - Library services on smartphones
**Self-Service Kiosks** - Automated service points

3D printing supports STEM education and creativity. Makerspaces provide tools for community creation. Virtual reality offers unique educational experiences. Mobile apps extend library access. Self-service kiosks expand service hours.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What manages library operations including catalog and circulation?",
          options: [
            "Barcode Systems",
            "Integrated Library Systems",
            "RFID Technology",
            "Digital Resources"
          ],
          correctAnswer: 1,
          explanation: "Integrated Library Systems (ILS) handle core library functions in one system."
        },
        {
          id: 2,
          question: "What is the searchable database of library materials?",
          options: [
            "Circulation Module",
            "Catalog Module",
            "Acquisitions Module",
            "Serials Module"
          ],
          correctAnswer: 1,
          explanation: "The catalog module contains bibliographic records of all library materials."
        },
        {
          id: 3,
          question: "What handles check in/out, renewals, and holds?",
          options: [
            "Catalog Module",
            "Circulation Module",
            "Acquisitions Module",
            "Serials Module"
          ],
          correctAnswer: 1,
          explanation: "The circulation module manages loan transactions and user accounts."
        },
        {
          id: 4,
          question: "What allows public searching of the library catalog?",
          options: ["ILS", "RFID", "OPAC", "Barcode"],
          correctAnswer: 2,
          explanation: "OPAC (Online Public Access Catalog) lets users search collections online."
        },
        {
          id: 5,
          question: "What identifies each library material uniquely?",
          options: [
            "Call number only",
            "Item barcode",
            "Title only",
            "Color coding"
          ],
          correctAnswer: 1,
          explanation: "Item barcodes provide unique identification linking physical items to catalog records."
        },
        {
          id: 6,
          question: "What identifies users in the library system?",
          options: [
            "Item barcodes",
            "Patron card barcodes",
            "Social security numbers",
            "Phone numbers"
          ],
          correctAnswer: 1,
          explanation: "Patron card barcodes identify users during checkout and account access."
        },
        {
          id: 7,
          question: "What allows users to check out materials themselves?",
          options: [
            "Barcode scanning",
            "RFID self-checkout",
            "Manual writing",
            "Staff only checkout"
          ],
          correctAnswer: 1,
          explanation: "RFID technology enables self-checkout stations for user convenience."
        },
        {
          id: 8,
          question: "What allows faster shelf reading with wands?",
          options: [
            "Barcode inventory",
            "RFID inventory management",
            "Visual inspection",
            "Manual counting"
          ],
          correctAnswer: 1,
          explanation: "RFID wands can read multiple items quickly during inventory."
        },
        {
          id: 9,
          question: "What are digital book lending systems?",
          options: [
            "Database Subscriptions",
            "E-book Platforms",
            "Streaming Media",
            "Digital Magazines"
          ],
          correctAnswer: 1,
          explanation: "E-book platforms like OverDrive provide digital book lending services."
        },
        {
          id: 10,
          question: "What provide online research resources?",
          options: [
            "E-book Platforms",
            "Database Subscriptions",
            "Streaming Media",
            "Digital Magazines"
          ],
          correctAnswer: 1,
          explanation: "Databases offer articles, reference content, and research materials."
        },
        {
          id: 11,
          question: "What helps bridge digital divides in communities?",
          options: [
            "Productivity Software",
            "Internet Access",
            "Printing Services",
            "Assistive Technology"
          ],
          correctAnswer: 1,
          explanation: "Public internet access helps those without home connectivity."
        },
        {
          id: 12,
          question: "What supports job searching and schoolwork?",
          options: [
            "Internet Access",
            "Productivity Software",
            "Printing Services",
            "Assistive Technology"
          ],
          correctAnswer: 1,
          explanation: "Word processing and spreadsheet software help with resumes and assignments."
        },
        {
          id: 13,
          question: "What allows searching collections from anywhere?",
          options: [
            "Account Management",
            "Online Catalog Access",
            "Digital Resources",
            "Event Registration"
          ],
          correctAnswer: 1,
          explanation: "Online catalog access extends library services beyond physical building hours."
        },
        {
          id: 14,
          question: "What allows renewals, holds, and fines payment online?",
          options: [
            "Online Catalog Access",
            "Account Management",
            "Digital Resources",
            "Event Registration"
          ],
          correctAnswer: 1,
          explanation: "Online account management offers user convenience for common transactions."
        },
        {
          id: 15,
          question: "What clears paper jams and reloads supplies?",
          options: [
            "Computer troubleshooting",
            "Printer troubleshooting",
            "Wi-Fi troubleshooting",
            "Database troubleshooting"
          ],
          correctAnswer: 1,
          explanation: "Printer troubleshooting involves physical maintenance like clearing jams."
        },
        {
          id: 16,
          question: "What may require restarts or staff assistance?",
          options: [
            "Printer issues",
            "Computer issues",
            "Wi-Fi issues",
            "Database issues"
          ],
          correctAnswer: 1,
          explanation: "Computer problems sometimes need restarting or professional help."
        },
        {
          id: 17,
          question: "What creates physical objects from digital files?",
          options: [
            "Makerspaces",
            "3D Printing",
            "Virtual Reality",
            "Mobile Apps"
          ],
          correctAnswer: 1,
          explanation: "3D printing builds physical objects layer by layer from digital designs."
        },
        {
          id: 18,
          question: "What are creative spaces with various technologies?",
          options: [
            "3D Printing",
            "Makerspaces",
            "Virtual Reality",
            "Mobile Apps"
          ],
          correctAnswer: 1,
          explanation: "Makerspaces provide tools and space for community creativity and learning."
        },
        {
          id: 19,
          question: "What offers immersive learning experiences?",
          options: [
            "3D Printing",
            "Makerspaces",
            "Virtual Reality",
            "Mobile Apps"
          ],
          correctAnswer: 2,
          explanation: "Virtual reality creates simulated environments for education and experience."
        },
        {
          id: 20,
          question: "What extends library services to smartphones?",
          options: [
            "3D Printing",
            "Makerspaces",
            "Virtual Reality",
            "Mobile Apps"
          ],
          correctAnswer: 3,
          explanation: "Mobile apps bring library catalogs and services to users' phones."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What is an organized collection of information resources made accessible to a community?",
      options: [
        "Bookstore",
        "Library",
        "Archive",
        "Museum"
      ],
      correctAnswer: 1,
      explanation: "A library organizes and provides access to information resources for community use."
    },
    {
      id: 2,
      question: "What type of library serves everyone in a community?",
      options: ["School Library", "Public Library", "Academic Library", "Special Library"],
      correctAnswer: 1,
      explanation: "Public libraries serve all community members regardless of age or background."
    },
    {
      id: 3,
      question: "What are addresses for library materials on spine labels?",
      options: ["ISBN numbers", "Call numbers", "Barcode numbers", "Price tags"],
      correctAnswer: 1,
      explanation: "Call numbers show where materials belong on library shelves."
    },
    {
      id: 4,
      question: "What Dewey range covers science?",
      options: ["400-499", "500-599", "600-699", "700-799"],
      correctAnswer: 1,
      explanation: "Science materials are in the 500-599 range of the Dewey Decimal System."
    },
    {
      id: 5,
      question: "How is fiction usually organized by author?",
      options: [
        "By first name",
        "By last name",
        "By book title",
        "By publication date"
      ],
      correctAnswer: 1,
      explanation: "Fiction is typically organized alphabetically by the author's last name."
    },
    {
      id: 6,
      question: "What is the process of creating records for library materials?",
      options: ["Shelving", "Cataloging", "Circulating", "Purchasing"],
      correctAnswer: 1,
      explanation: "Cataloging creates descriptive records that help users find materials."
    },
    {
      id: 7,
      question: "What describes what the material is about?",
      options: [
        "Descriptive Information",
        "Subject Headings",
        "Classification Numbers",
        "Access Points"
      ],
      correctAnswer: 1,
      explanation: "Subject headings describe the content topics of library materials."
    },
    {
      id: 8,
      question: "What is the current international cataloging standard?",
      options: ["AACR2", "RDA", "MARC", "ISBD"],
      correctAnswer: 1,
      explanation: "RDA (Resource Description and Access) is the current international standard."
    },
    {
      id: 9,
      question: "What involves helping users find information and answer questions?",
      options: [
        "Circulation Services",
        "Reference Service",
        "Technical Services",
        "Administration"
      ],
      correctAnswer: 1,
      explanation: "Reference service focuses on connecting users with needed information."
    },
    {
      id: 10,
      question: "What discovers what users really need through conversation?",
      options: [
        "Reference collection",
        "Reference interview",
        "Reference desk",
        "Reference book"
      ],
      correctAnswer: 1,
      explanation: "The reference interview clarifies user needs through questioning and listening."
    },
    {
      id: 11,
      question: "What provides word definitions and spellings?",
      options: ["Encyclopedias", "Dictionaries", "Almanacs", "Directories"],
      correctAnswer: 1,
      explanation: "Dictionaries provide definitions, spellings, and pronunciations of words."
    },
    {
      id: 12,
      question: "What helps users find enjoyable reading materials?",
      options: [
        "Reference Interview",
        "Readers' Advisory",
        "Information Literacy",
        "Collection Development"
      ],
      correctAnswer: 1,
      explanation: "Readers' advisory helps users discover books they'll enjoy reading."
    },
    {
      id: 13,
      question: "What involves selecting, acquiring, and maintaining library materials?",
      options: [
        "Reference Services",
        "Collection Development",
        "Cataloging",
        "Circulation"
      ],
      correctAnswer: 1,
      explanation: "Collection development builds and maintains library collections."
    },
    {
      id: 14,
      question: "What chooses which materials to add to the collection?",
      options: ["Selection", "Acquisition", "Evaluation", "Weeding"],
      correctAnswer: 0,
      explanation: "Selection involves deciding which materials to include in the library."
    },
    {
      id: 15,
      question: "What removes damaged or worn materials?",
      options: ["Condition", "Accuracy", "Use", "Space"],
      correctAnswer: 0,
      explanation: "Condition weeding removes materials that are physically unusable."
    },
    {
      id: 16,
      question: "What manages library operations including catalog and circulation?",
      options: [
        "Barcode Systems",
        "Integrated Library Systems",
        "RFID Technology",
        "Digital Resources"
      ],
      correctAnswer: 1,
      explanation: "Integrated Library Systems (ILS) handle core library functions."
    },
    {
      id: 17,
      question: "What handles check in/out, renewals, and holds?",
      options: [
        "Catalog Module",
        "Circulation Module",
        "Acquisitions Module",
        "Serials Module"
      ],
      correctAnswer: 1,
      explanation: "The circulation module manages loan transactions."
    },
    {
      id: 18,
      question: "What identifies each library material uniquely?",
      options: [
        "Call number only",
        "Item barcode",
        "Title only",
        "Color coding"
      ],
      correctAnswer: 1,
      explanation: "Item barcodes provide unique identification for library materials."
    },
    {
      id: 19,
      question: "What are digital book lending systems?",
      options: [
        "Database Subscriptions",
        "E-book Platforms",
        "Streaming Media",
        "Digital Magazines"
      ],
      correctAnswer: 1,
      explanation: "E-book platforms provide digital book lending services."
    },
    {
      id: 20,
      question: "What helps bridge digital divides in communities?",
      options: [
        "Productivity Software",
        "Internet Access",
        "Printing Services",
        "Assistive Technology"
      ],
      correctAnswer: 1,
      explanation: "Public internet access helps those without home connectivity."
    },
    {
      id: 21,
      question: "What are professionals with master's degrees in library science?",
      options: ["Volunteers", "Librarians", "Pages", "Assistants"],
      correctAnswer: 1,
      explanation: "Librarians typically have advanced degrees in library science."
    },
    {
      id: 22,
      question: "What service allows people to take resources home?",
      options: [
        "Reference Help",
        "Material Lending",
        "Computer Access",
        "Programs and Events"
      ],
      correctAnswer: 1,
      explanation: "Material lending allows patrons to borrow library resources."
    },
    {
      id: 23,
      question: "What Dewey range covers literature?",
      options: ["600-699", "700-799", "800-899", "900-999"],
      correctAnswer: 2,
      explanation: "Literature is in the 800-899 range of the Dewey Decimal System."
    },
    {
      id: 24,
      question: "What LC letter covers language and literature?",
      options: ["M", "N", "P", "Q"],
      correctAnswer: 2,
      explanation: "The letter P in LC classification covers language and literature."
    },
    {
      id: 25,
      question: "How should you read call numbers on shelves?",
      options: [
        "Right to left",
        "Left to right, top to bottom",
        "Bottom to top",
        "Random order"
      ],
      correctAnswer: 1,
      explanation: "Read call numbers left to right on each line, top to bottom."
    },
    {
      id: 26,
      question: "What includes title, author, and publication details?",
      options: [
        "Subject Headings",
        "Descriptive Information",
        "Classification Numbers",
        "Access Points"
      ],
      correctAnswer: 1,
      explanation: "Descriptive information identifies and describes library materials."
    },
    {
      id: 27,
      question: "What searches by personal or corporate authors?",
      options: [
        "Title Access",
        "Author Access",
        "Subject Access",
        "Keyword Access"
      ],
      correctAnswer: 1,
      explanation: "Author access allows searching by creators' names."
    },
    {
      id: 28,
      question: "What uses existing records from databases?",
      options: [
        "Original Cataloging",
        "Copy Cataloging",
        "Descriptive Cataloging",
        "Subject Cataloging"
      ],
      correctAnswer: 1,
      explanation: "Copy cataloging adapts existing records rather than creating new ones."
    },
    {
      id: 29,
      question: "What responds to user inquiries?",
      options: [
        "Finding Resources",
        "Answering Questions",
        "Teaching Skills",
        "Providing Access"
      ],
      correctAnswer: 1,
      explanation: "Answering questions is a core function of reference service."
    },
    {
      id: 30,
      question: "What provides overviews of topics?",
      options: ["Dictionaries", "Encyclopedias", "Almanacs", "Directories"],
      correctAnswer: 1,
      explanation: "Encyclopedias offer summary information on various subjects."
    },
    {
      id: 31,
      question: "What determines credibility and relevance of sources?",
      options: [
        "Search Strategies",
        "Evaluating Sources",
        "Citation Understanding",
        "Research Process"
      ],
      correctAnswer: 1,
      explanation: "Evaluation skills help identify reliable information sources."
    },
    {
      id: 32,
      question: "What protects user privacy in reference interactions?",
      options: ["Accuracy", "Confidentiality", "Impartiality", "Referral"],
      correctAnswer: 1,
      explanation: "Confidentiality ensures user questions remain private."
    },
    {
      id: 33,
      question: "What criteria includes multiple perspectives and voices?",
      options: ["Community Needs", "Quality", "Diversity", "Balance"],
      correctAnswer: 2,
      explanation: "Diversity ensures collections represent various experiences."
    },
    {
      id: 34,
      question: "What is the most common method of obtaining materials?",
      options: ["Gifts", "Purchasing", "Exchanges", "Licensing"],
      correctAnswer: 1,
      explanation: "Purchasing materials is the primary acquisition method."
    },
    {
      id: 35,
      question: "What removes outdated or incorrect information?",
      options: ["Condition", "Accuracy", "Use", "Space"],
      correctAnswer: 1,
      explanation: "Accuracy weeding ensures collections contain current information."
    },
    {
      id: 36,
      question: "What shows how often materials circulate?",
      options: [
        "User Surveys",
        "Usage Statistics",
        "Comparison",
        "Direct Examination"
      ],
      correctAnswer: 1,
      explanation: "Usage statistics indicate which materials are popular."
    },
    {
      id: 37,
      question: "What is the searchable database of library materials?",
      options: [
        "Circulation Module",
        "Catalog Module",
        "Acquisitions Module",
        "Serials Module"
      ],
      correctAnswer: 1,
      explanation: "The catalog module contains bibliographic records."
    },
    {
      id: 38,
      question: "What allows users to check out materials themselves?",
      options: [
        "Barcode scanning",
        "RFID self-checkout",
        "Manual writing",
        "Staff only checkout"
      ],
      correctAnswer: 1,
      explanation: "RFID technology enables self-checkout stations."
    },
    {
      id: 39,
      question: "What provide online research resources?",
      options: [
        "E-book Platforms",
        "Database Subscriptions",
        "Streaming Media",
        "Digital Magazines"
      ],
      correctAnswer: 1,
      explanation: "Databases offer articles and research materials."
    },
    {
      id: 40,
      question: "What creates physical objects from digital files?",
      options: [
        "Makerspaces",
        "3D Printing",
        "Virtual Reality",
        "Mobile Apps"
      ],
      correctAnswer: 1,
      explanation: "3D printing builds objects from digital designs."
    }
  ]
};
