export const supplyChainCertificateCourse = {
  id: "supply-chain-certificate",
  title: "Supply Chain (Certificate)",
  description: "Master the fundamentals of supply chain management, from sourcing to delivery. Learn essential concepts, processes, and strategies used in modern logistics operations.",
  duration: "6 weeks",
  timeCommitment: "4-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🚚",
  badge: "Certificate",
  
  modules: [
    {
      id: 1,
      title: "Foundations of Supply Chain",
      content: `
# Understanding Supply Chain Basics

A supply chain is the network of organizations, people, activities, information, and resources involved in moving a product or service from supplier to customer. Think of it as the journey your morning coffee takes from the farm to your cup.

## What Makes a Supply Chain Work?

Every supply chain has five main parts that work together:
- **Suppliers** provide raw materials
- **Manufacturers** transform materials into products
- **Distributors** move products to different locations
- **Retailers** sell products to customers
- **Customers** are the final users of products

## The Three Flows in Supply Chain

Supply chains manage three important flows:
1. **Product Flow** - The physical movement of goods from suppliers to customers
2. **Information Flow** - Data and communication about orders, inventory, and delivery
3. **Money Flow** - Payments moving from customers back through the chain

## Why Supply Chain Matters

Good supply chain management makes products available when customers want them, keeps costs reasonable, and ensures quality. When supply chains work well, everyone benefits - from the farmer who grows the materials to the customer who buys the final product.

## Key Terms to Remember

**Logistics** refers to the movement and storage of goods. **Inventory** is the stock of goods a company holds. **Procurement** is the process of buying materials. **Distribution** is how products reach customers.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the definition of a supply chain?",
          options: [
            "A company's manufacturing process",
            "The network involved in moving products from supplier to customer",
            "Only the transportation of finished goods",
            "Just the retail selling process"
          ],
          correctAnswer: 1,
          explanation: "A supply chain includes all organizations, people, activities, and resources involved in moving a product from supplier to customer."
        },
        {
          id: 2,
          question: "How many main parts does every supply chain have?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Every supply chain has five main parts: suppliers, manufacturers, distributors, retailers, and customers."
        },
        {
          id: 3,
          question: "Which flow involves the physical movement of goods?",
          options: ["Money Flow", "Information Flow", "Product Flow", "Communication Flow"],
          correctAnswer: 2,
          explanation: "Product Flow refers to the physical movement of goods from suppliers to customers."
        },
        {
          id: 4,
          question: "What does logistics primarily refer to?",
          options: [
            "Financial management",
            "Marketing strategies",
            "Movement and storage of goods",
            "Product design"
          ],
          correctAnswer: 2,
          explanation: "Logistics is specifically about the movement and storage of goods within a supply chain."
        },
        {
          id: 5,
          question: "What is inventory in supply chain terms?",
          options: [
            "A list of employees",
            "The stock of goods a company holds",
            "Financial assets",
            "Customer database"
          ],
          correctAnswer: 1,
          explanation: "Inventory refers to the stock of goods or materials that a company holds for future use or sale."
        },
        {
          id: 6,
          question: "Which part of the supply chain transforms materials into products?",
          options: ["Suppliers", "Manufacturers", "Distributors", "Retailers"],
          correctAnswer: 1,
          explanation: "Manufacturers are responsible for transforming raw materials into finished products."
        },
        {
          id: 7,
          question: "What does procurement mean in supply chain?",
          options: [
            "Selling products",
            "Transporting goods",
            "The process of buying materials",
            "Warehouse management"
          ],
          correctAnswer: 2,
          explanation: "Procurement is specifically the process of purchasing or acquiring materials needed for production."
        },
        {
          id: 8,
          question: "Which flow involves data and communication about orders?",
          options: ["Product Flow", "Money Flow", "Information Flow", "Goods Flow"],
          correctAnswer: 2,
          explanation: "Information Flow includes all data and communication about orders, inventory levels, and delivery schedules."
        },
        {
          id: 9,
          question: "Who are the final users in a supply chain?",
          options: ["Suppliers", "Manufacturers", "Distributors", "Customers"],
          correctAnswer: 3,
          explanation: "Customers are the final users who purchase and consume the products in a supply chain."
        },
        {
          id: 10,
          question: "What does distribution refer to?",
          options: [
            "Manufacturing process",
            "How products reach customers",
            "Financial planning",
            "Quality control"
          ],
          correctAnswer: 1,
          explanation: "Distribution is specifically about how finished products reach end customers through various channels."
        },
        {
          id: 11,
          question: "Which of these is NOT one of the three main flows in supply chain?",
          options: ["Product Flow", "Information Flow", "Money Flow", "Material Flow"],
          correctAnswer: 3,
          explanation: "Material Flow is not one of the three main flows - the correct ones are Product Flow, Information Flow, and Money Flow."
        },
        {
          id: 12,
          question: "What benefit comes from good supply chain management?",
          options: [
            "Products available when customers want them",
            "Higher advertising costs",
            "Less communication needed",
            "Fewer suppliers required"
          ],
          correctAnswer: 0,
          explanation: "Good supply chain management ensures products are available when and where customers want them."
        },
        {
          id: 13,
          question: "Which part of the supply chain sells products to customers?",
          options: ["Suppliers", "Manufacturers", "Distributors", "Retailers"],
          correctAnswer: 3,
          explanation: "Retailers are the businesses that sell products directly to end customers."
        },
        {
          id: 14,
          question: "What moves from customers back through the supply chain?",
          options: ["Products", "Information", "Money", "Raw materials"],
          correctAnswer: 2,
          explanation: "Money flows from customers back through the supply chain as payment for goods and services."
        },
        {
          id: 15,
          question: "Who provides raw materials in a supply chain?",
          options: ["Suppliers", "Manufacturers", "Distributors", "Customers"],
          correctAnswer: 0,
          explanation: "Suppliers provide the raw materials and components needed for manufacturing."
        },
        {
          id: 16,
          question: "What does the Money Flow include?",
          options: [
            "Physical transportation",
            "Order information",
            "Payments moving through the chain",
            "Product quality data"
          ],
          correctAnswer: 2,
          explanation: "Money Flow specifically refers to payments moving from customers back through the supply chain."
        },
        {
          id: 17,
          question: "Which term describes the journey from farm to cup?",
          options: [
            "Manufacturing process",
            "Supply chain",
            "Retail operation",
            "Distribution network"
          ],
          correctAnswer: 1,
          explanation: "The coffee journey from farm to cup is a perfect example of a complete supply chain."
        },
        {
          id: 18,
          question: "What do distributors primarily do?",
          options: [
            "Grow raw materials",
            "Make products",
            "Move products to different locations",
            "Sell to final customers"
          ],
          correctAnswer: 2,
          explanation: "Distributors specialize in moving products from manufacturers to various locations for further distribution or retail."
        },
        {
          id: 19,
          question: "What type of flow includes delivery schedules?",
          options: ["Product Flow", "Information Flow", "Money Flow", "Goods Flow"],
          correctAnswer: 1,
          explanation: "Delivery schedules are part of the Information Flow in a supply chain."
        },
        {
          id: 20,
          question: "When supply chains work well, who benefits?",
          options: [
            "Only the manufacturer",
            "Only the customer",
            "Everyone from farmer to customer",
            "Only the retailers"
          ],
          correctAnswer: 2,
          explanation: "Effective supply chains benefit all participants from the initial supplier to the final customer."
        }
      ]
    },
    {
      id: 2,
      title: "Procurement and Sourcing",
      content: `
# Getting What You Need: Procurement Basics

Procurement is the process of finding and buying the materials, products, or services your business needs. Think of it as smart shopping for your company - finding the right quality at the right price from the right supplier.

## The Procurement Process Steps

Finding and buying materials follows these logical steps:
1. **Identify Needs** - Determine what materials or services you require
2. **Find Suppliers** - Look for companies that can provide what you need
3. **Compare Options** - Evaluate different suppliers based on price, quality, and reliability
4. **Make Agreement** - Create contracts or purchase orders
5. **Receive Goods** - Accept and check the delivered items
6. **Pay Supplier** - Complete the financial transaction

## Types of Procurement

Different needs require different approaches:
- **Direct Procurement** - Buying raw materials for production
- **Indirect Procurement** - Purchasing office supplies or services
- **Services Procurement** - Acquiring services like maintenance or consulting

## What Makes a Good Supplier?

Choosing the right supplier involves checking:
- **Quality** - Do they provide good products consistently?
- **Reliability** - Do they deliver on time?
- **Price** - Are their prices fair and competitive?
- **Communication** - Do they respond quickly to questions?
- **Location** - Are they conveniently located for delivery?

## Building Supplier Relationships

Good procurement isn't just about buying - it's about building partnerships. Strong supplier relationships lead to better prices, priority service during shortages, and improved quality over time. Regular communication and fair treatment help build these valuable relationships.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is procurement in simple terms?",
          options: [
            "Selling company products",
            "Smart shopping for business needs",
            "Managing inventory storage",
            "Transporting finished goods"
          ],
          correctAnswer: 1,
          explanation: "Procurement is like smart shopping for a company - finding and buying the materials or services the business needs."
        },
        {
          id: 2,
          question: "How many main steps are in the procurement process?",
          options: ["Four", "Five", "Six", "Seven"],
          correctAnswer: 2,
          explanation: "There are six main steps: Identify needs, find suppliers, compare options, make agreement, receive goods, and pay supplier."
        },
        {
          id: 3,
          question: "Which step involves determining what materials you need?",
          options: [
            "Find Suppliers",
            "Identify Needs",
            "Compare Options",
            "Make Agreement"
          ],
          correctAnswer: 1,
          explanation: "The first step is identifying what materials or services your business requires."
        },
        {
          id: 4,
          question: "What is Direct Procurement?",
          options: [
            "Buying office supplies",
            "Purchasing raw materials for production",
            "Acquiring maintenance services",
            "Hiring consultants"
          ],
          correctAnswer: 1,
          explanation: "Direct Procurement specifically involves buying raw materials that go directly into manufacturing products."
        },
        {
          id: 5,
          question: "Which is NOT a factor when choosing a good supplier?",
          options: ["Quality", "Reliability", "Price", "Supplier's favorite color"],
          correctAnswer: 3,
          explanation: "While important in other contexts, a supplier's favorite color is not a relevant factor in procurement decisions."
        },
        {
          id: 6,
          question: "What does Indirect Procurement include?",
          options: [
            "Raw materials for production",
            "Office supplies and services",
            "Components for manufacturing",
            "Packaging materials"
          ],
          correctAnswer: 1,
          explanation: "Indirect Procurement covers purchases like office supplies, maintenance services, and other non-production items."
        },
        {
          id: 7,
          question: "Which step comes after 'Compare Options'?",
          options: ["Identify Needs", "Find Suppliers", "Make Agreement", "Receive Goods"],
          correctAnswer: 2,
          explanation: "After comparing different suppliers, the next step is to make an agreement or create purchase orders."
        },
        {
          id: 8,
          question: "What should you check when receiving goods?",
          options: [
            "Only the quantity",
            "Only the quality",
            "Quantity, quality, and condition",
            "Just sign without checking"
          ],
          correctAnswer: 2,
          explanation: "When receiving goods, you should check the quantity, quality, and overall condition of the delivered items."
        },
        {
          id: 9,
          question: "What type of procurement involves services like maintenance?",
          options: [
            "Direct Procurement",
            "Indirect Procurement",
            "Services Procurement",
            "Material Procurement"
          ],
          correctAnswer: 2,
          explanation: "Services Procurement specifically refers to acquiring services such as maintenance, cleaning, or consulting."
        },
        {
          id: 10,
          question: "Why are strong supplier relationships valuable?",
          options: [
            "They increase paperwork",
            "They lead to better prices and priority service",
            "They require less communication",
            "They eliminate the need for contracts"
          ],
          correctAnswer: 1,
          explanation: "Strong relationships with suppliers can lead to better pricing, priority service during shortages, and improved cooperation."
        },
        {
          id: 11,
          question: "What is the final step in the procurement process?",
          options: ["Identify Needs", "Receive Goods", "Pay Supplier", "Make Agreement"],
          correctAnswer: 2,
          explanation: "The final step in procurement is paying the supplier for the goods or services received."
        },
        {
          id: 12,
          question: "Which factor refers to delivering on time?",
          options: ["Quality", "Reliability", "Price", "Communication"],
          correctAnswer: 1,
          explanation: "Reliability specifically refers to a supplier's ability to deliver products or services on time as promised."
        },
        {
          id: 13,
          question: "What helps build strong supplier relationships?",
          options: [
            "Ignoring their calls",
            "Regular communication and fair treatment",
            "Always paying late",
            "Constant price negotiations"
          ],
          correctAnswer: 1,
          explanation: "Regular communication, fair treatment, and timely payments help build strong, lasting supplier relationships."
        },
        {
          id: 14,
          question: "What should you evaluate when comparing suppliers?",
          options: [
            "Only the lowest price",
            "Price, quality, and reliability",
            "Just their location",
            "Only their product samples"
          ],
          correctAnswer: 1,
          explanation: "When comparing suppliers, consider multiple factors including price, quality, reliability, and communication."
        },
        {
          id: 15,
          question: "What do purchase orders represent?",
          options: [
            "Final payment receipts",
            "Formal agreements to buy goods",
            "Shipping documents",
            "Quality certificates"
          ],
          correctAnswer: 1,
          explanation: "Purchase orders are formal documents that represent an agreement to purchase specified goods or services."
        },
        {
          id: 16,
          question: "What advantage comes from supplier location consideration?",
          options: [
            "Faster delivery and lower shipping costs",
            "Better product quality",
            "Lower material costs",
            "More payment options"
          ],
          correctAnswer: 0,
          explanation: "Choosing suppliers in convenient locations can lead to faster delivery times and reduced transportation costs."
        },
        {
          id: 17,
          question: "Which procurement type involves buying components for manufacturing?",
          options: [
            "Indirect Procurement",
            "Services Procurement",
            "Direct Procurement",
            "Administrative Procurement"
          ],
          correctAnswer: 2,
          explanation: "Buying components or raw materials that go directly into manufacturing is Direct Procurement."
        },
        {
          id: 18,
          question: "What does good communication with suppliers enable?",
          options: [
            "Higher prices",
            "Quick resolution of issues",
            "Less need for contracts",
            "Automatic payments"
          ],
          correctAnswer: 1,
          explanation: "Good communication allows for quick problem resolution and better understanding of requirements."
        },
        {
          id: 19,
          question: "When might you need priority service from suppliers?",
          options: [
            "During regular operations",
            "During product shortages or high demand",
            "When prices are stable",
            "During inventory counts"
          ],
          correctAnswer: 1,
          explanation: "Priority service becomes especially valuable during shortages or periods of high demand."
        },
        {
          id: 20,
          question: "What is the purpose of comparing multiple suppliers?",
          options: [
            "To confuse the purchasing process",
            "To find the best overall value",
            "To delay procurement decisions",
            "To increase paperwork"
          ],
          correctAnswer: 1,
          explanation: "Comparing multiple suppliers helps identify which offers the best combination of price, quality, and service."
        }
      ]
    },
    {
      id: 3,
      title: "Inventory Management",
      content: `
# Managing Your Stock: Inventory Basics

Inventory management is about having the right amount of stock at the right time. Too much inventory costs money to store, while too little can lead to lost sales. It's like keeping your kitchen pantry stocked - you want enough food for meals, but not so much that things spoil.

## Types of Inventory

Different stages require different types of inventory:
- **Raw Materials** - Basic materials waiting to be used in production
- **Work-in-Progress** - Products being manufactured but not finished
- **Finished Goods** - Completed products ready for sale
- **Maintenance Supplies** - Items needed for equipment repair and maintenance

## Inventory Management Methods

Common approaches to managing stock include:
1. **Just-in-Time (JIT)** - Receive materials just before you need them
2. **Safety Stock** - Keep extra inventory to prevent shortages
3. **ABC Analysis** - Focus more attention on your most valuable items
4. **First-In-First-Out (FIFO)** - Use older inventory before newer stock

## Why Inventory Costs Matter

Holding inventory involves several costs:
- **Storage Costs** - Rent, utilities, and insurance for warehouse space
- **Handling Costs** - Labor for moving and managing inventory
- **Obsolescence Risk** - Products becoming outdated or unsellable
- **Opportunity Cost** - Money tied up in inventory that could be used elsewhere

## Finding the Balance

The goal is to maintain optimal inventory levels - enough to meet customer demand without overstocking. Regular inventory counts, good forecasting, and efficient ordering processes help achieve this balance. Modern inventory systems use technology to track stock levels in real time, making management more accurate and efficient.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is inventory management primarily about?",
          options: [
            "Only buying materials",
            "Having right stock at right time",
            "Just storing products",
            "Only counting items"
          ],
          correctAnswer: 1,
          explanation: "Inventory management focuses on having the right amount of stock available at the right time to meet demand."
        },
        {
          id: 2,
          question: "What happens with too much inventory?",
          options: [
            "Increased sales",
            "Higher storage costs",
            "Better customer service",
            "Lower operational costs"
          ],
          correctAnswer: 1,
          explanation: "Excessive inventory increases storage costs and ties up money that could be used elsewhere."
        },
        {
          id: 3,
          question: "What type of inventory includes completed products?",
          options: [
            "Raw Materials",
            "Work-in-Progress",
            "Finished Goods",
            "Maintenance Supplies"
          ],
          correctAnswer: 2,
          explanation: "Finished Goods are completed products that are ready to be sold to customers."
        },
        {
          id: 4,
          question: "What does JIT stand for in inventory management?",
          options: [
            "Just-in-Training",
            "Just-in-Time",
            "Job-in-Transit",
            "Journal-in-Trade"
          ],
          correctAnswer: 1,
          explanation: "JIT stands for Just-in-Time, an inventory method where materials arrive just before they're needed."
        },
        {
          id: 5,
          question: "What is Safety Stock?",
          options: [
            "The most expensive inventory",
            "Extra inventory to prevent shortages",
            "Inventory for safety equipment",
            "Stock that never moves"
          ],
          correctAnswer: 1,
          explanation: "Safety Stock is additional inventory kept on hand to prevent stockouts during unexpected demand or supply delays."
        },
        {
          id: 6,
          question: "Which inventory method focuses on most valuable items?",
          options: ["JIT", "Safety Stock", "ABC Analysis", "FIFO"],
          correctAnswer: 2,
          explanation: "ABC Analysis categorizes inventory by value, focusing more management attention on high-value items."
        },
        {
          id: 7,
          question: "What does FIFO mean?",
          options: [
            "First-In-First-Out",
            "Fast-Inventory-Fast-Out",
            "Financial-Inventory-Flow-Out",
            "Final-Inventory-Final-Out"
          ],
          correctAnswer: 0,
          explanation: "FIFO means First-In-First-Out, using older inventory before newer stock to prevent obsolescence."
        },
        {
          id: 8,
          question: "Which cost includes warehouse rent and utilities?",
          options: [
            "Handling Costs",
            "Storage Costs",
            "Obsolescence Risk",
            "Opportunity Cost"
          ],
          correctAnswer: 1,
          explanation: "Storage Costs include expenses like rent, utilities, insurance, and maintenance for warehouse space."
        },
        {
          id: 9,
          question: "What are Raw Materials?",
          options: [
            "Completed products",
            "Items being manufactured",
            "Basic materials for production",
            "Equipment repair items"
          ],
          correctAnswer: 2,
          explanation: "Raw Materials are the basic components or substances that will be transformed into finished products."
        },
        {
          id: 10,
          question: "What is Work-in-Progress inventory?",
          options: [
            "Materials not yet used",
            "Products being manufactured",
            "Ready-to-sell items",
            "Maintenance equipment"
          ],
          correctAnswer: 1,
          explanation: "Work-in-Progress refers to products that are currently being manufactured but are not yet complete."
        },
        {
          id: 11,
          question: "What risk involves products becoming outdated?",
          options: [
            "Storage Cost risk",
            "Handling Cost risk",
            "Obsolescence Risk",
            "Opportunity Cost risk"
          ],
          correctAnswer: 2,
          explanation: "Obsolescence Risk refers to inventory losing value or becoming unsellable due to age, style changes, or technology advances."
        },
        {
          id: 12,
          question: "What is the goal of inventory management?",
          options: [
            "Maximize storage space usage",
            "Maintain optimal inventory levels",
            "Eliminate all inventory",
            "Store as much as possible"
          ],
          correctAnswer: 1,
          explanation: "The goal is maintaining optimal levels - enough to meet demand without excessive overstocking."
        },
        {
          id: 13,
          question: "What do modern inventory systems use for tracking?",
          options: [
            "Paper notebooks only",
            "Memory only",
            "Real-time technology",
            "Monthly guesses"
          ],
          correctAnswer: 2,
          explanation: "Modern systems use technology like barcode scanners and software to track inventory levels in real time."
        },
        {
          id: 14,
          question: "What cost includes labor for moving inventory?",
          options: ["Storage Costs", "Handling Costs", "Obsolescence", "Opportunity Cost"],
          correctAnswer: 1,
          explanation: "Handling Costs include labor expenses for receiving, moving, counting, and managing inventory."
        },
        {
          id: 15,
          question: "What is Opportunity Cost in inventory?",
          options: [
            "Cost of warehouse space",
            "Money tied up that could be used elsewhere",
            "Cost of counting inventory",
            "Risk of theft"
          ],
          correctAnswer: 1,
          explanation: "Opportunity Cost refers to the potential benefits lost by having money tied up in inventory instead of other investments."
        },
        {
          id: 16,
          question: "Which helps achieve inventory balance?",
          options: [
            "Never counting inventory",
            "Regular inventory counts and good forecasting",
            "Ordering randomly",
            "Ignoring customer demand"
          ],
          correctAnswer: 1,
          explanation: "Regular counts, accurate forecasting, and efficient ordering processes help maintain optimal inventory levels."
        },
        {
          id: 17,
          question: "What are Maintenance Supplies?",
          options: [
            "Raw production materials",
            "Items for equipment repair",
            "Finished products",
            "Office stationery"
          ],
          correctAnswer: 1,
          explanation: "Maintenance Supplies are items needed to repair, maintain, or service equipment and facilities."
        },
        {
          id: 18,
          question: "What problem does too little inventory cause?",
          options: [
            "Lower storage costs",
            "Lost sales and dissatisfied customers",
            "Better cash flow",
            "Less handling required"
          ],
          correctAnswer: 1,
          explanation: "Insufficient inventory can lead to stockouts, resulting in lost sales and unhappy customers."
        },
        {
          id: 19,
          question: "What does ABC Analysis help with?",
          options: [
            "Prioritizing management of valuable items",
            "Eliminating all inventory",
            "Increasing storage space",
            "Reducing product quality"
          ],
          correctAnswer: 0,
          explanation: "ABC Analysis helps prioritize inventory management efforts on the most valuable items."
        },
        {
          id: 20,
          question: "Why is regular inventory counting important?",
          options: [
            "To create more paperwork",
            "To ensure accurate stock records",
            "To increase storage costs",
            "To slow down operations"
          ],
          correctAnswer: 1,
          explanation: "Regular inventory counts ensure records are accurate, helping prevent both overstocking and stockouts."
        }
      ]
    },
    {
      id: 4,
      title: "Warehousing and Storage",
      content: `
# Storage Solutions: Warehouse Essentials

Warehousing is about storing products efficiently and safely until they're needed. Think of a warehouse as a giant, organized closet for your business - everything has its place, and you can find what you need quickly when you need it.

## Types of Warehouses

Different products need different storage solutions:
- **Distribution Centers** - Focus on moving products quickly to customers
- **Storage Warehouses** - Hold products for longer periods
- **Cold Storage** - Keep temperature-sensitive items like food or medicine
- **Bonded Warehouses** - Store imported goods before customs clearance

## Warehouse Layout and Organization

Good warehouse design makes operations smoother:
- **Receiving Area** - Where incoming goods are checked and accepted
- **Storage Area** - Where products are kept until needed
- **Picking Area** - Where orders are prepared for shipping
- **Shipping Area** - Where packaged orders leave the warehouse
- **Office Space** - For administrative work and management

## Storage Systems and Equipment

Various tools help manage warehouse operations:
- **Pallet Racking** - Stack products on pallets for easy moving
- **Shelving Units** - Store smaller items in organized sections
- **Forklifts** - Move heavy pallets and materials
- **Conveyor Systems** - Transport items through the warehouse
- **Inventory Software** - Track what's stored and where it's located

## Warehouse Operations Flow

Products move through warehouses in a logical sequence:
1. **Receiving** - Accept and check incoming shipments
2. **Put-away** - Store items in their designated locations
3. **Storage** - Keep products safe until needed
4. **Picking** - Collect items for customer orders
5. **Packing** - Prepare items for shipment
6. **Shipping** - Send orders to customers

## Safety and Efficiency

Good warehouses prioritize both safety and speed. Clear aisles, proper lighting, safety equipment, and organized storage all contribute to efficient and safe operations. Regular maintenance and staff training ensure the warehouse functions smoothly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the main purpose of warehousing?",
          options: [
            "Only manufacturing products",
            "Storing products efficiently and safely",
            "Just selling goods",
            "Only transporting items"
          ],
          correctAnswer: 1,
          explanation: "Warehousing focuses on storing products efficiently and safely until they are needed for distribution or sale."
        },
        {
          id: 2,
          question: "Which type of warehouse focuses on quick product movement?",
          options: [
            "Storage Warehouse",
            "Distribution Center",
            "Cold Storage",
            "Bonded Warehouse"
          ],
          correctAnswer: 1,
          explanation: "Distribution Centers are designed for quickly receiving, processing, and shipping products to customers."
        },
        {
          id: 3,
          question: "What is Cold Storage used for?",
          options: [
            "Storing office supplies",
            "Keeping temperature-sensitive items",
            "Holding construction materials",
            "Storing electronic equipment"
          ],
          correctAnswer: 1,
          explanation: "Cold Storage warehouses maintain controlled temperatures for items like food, medicine, or chemicals."
        },
        {
          id: 4,
          question: "How many main areas do warehouses typically have?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Warehouses typically have five main areas: Receiving, Storage, Picking, Shipping, and Office space."
        },
        {
          id: 5,
          question: "Where are incoming goods checked and accepted?",
          options: [
            "Shipping Area",
            "Receiving Area",
            "Storage Area",
            "Picking Area"
          ],
          correctAnswer: 1,
          explanation: "The Receiving Area is where incoming shipments are inspected, counted, and accepted into the warehouse."
        },
        {
          id: 6,
          question: "What equipment moves heavy pallets?",
          options: ["Conveyor Systems", "Shelving Units", "Forklifts", "Pallet Racking"],
          correctAnswer: 2,
          explanation: "Forklifts are specifically designed to lift and move heavy pallets and materials within warehouses."
        },
        {
          id: 7,
          question: "What is Pallet Racking used for?",
          options: [
            "Office organization",
            "Stacking products for easy moving",
            "Temperature control",
            "Document storage"
          ],
          correctAnswer: 1,
          explanation: "Pallet Racking systems allow products to be stacked on pallets for efficient storage and movement."
        },
        {
          id: 8,
          question: "Which area prepares orders for shipment?",
          options: ["Receiving Area", "Storage Area", "Picking Area", "Office Space"],
          correctAnswer: 2,
          explanation: "The Picking Area is where items are collected from storage to fulfill customer orders."
        },
        {
          id: 9,
          question: "What is the first step in warehouse operations flow?",
          options: ["Put-away", "Receiving", "Storage", "Picking"],
          correctAnswer: 1,
          explanation: "Receiving is always the first step - accepting and checking incoming goods."
        },
        {
          id: 10,
          question: "What does 'Put-away' mean in warehouse operations?",
          options: [
            "Throwing items away",
            "Storing items in designated locations",
            "Packing orders",
            "Shipping products"
          ],
          correctAnswer: 1,
          explanation: "Put-away refers to the process of storing received items in their proper warehouse locations."
        },
        {
          id: 11,
          question: "What type of warehouse holds imported goods before customs?",
          options: [
            "Distribution Center",
            "Storage Warehouse",
            "Cold Storage",
            "Bonded Warehouse"
          ],
          correctAnswer: 3,
          explanation: "Bonded Warehouses store imported goods before customs duties are paid and clearance is granted."
        },
        {
          id: 12,
          question: "What transports items through the warehouse automatically?",
          options: ["Forklifts", "Conveyor Systems", "Pallet Racking", "Shelving Units"],
          correctAnswer: 1,
          explanation: "Conveyor Systems automatically move items through different areas of the warehouse."
        },
        {
          id: 13,
          question: "Where do packaged orders leave the warehouse?",
          options: ["Receiving Area", "Storage Area", "Shipping Area", "Picking Area"],
          correctAnswer: 2,
          explanation: "The Shipping Area is where packaged and labeled orders are loaded onto trucks for delivery."
        },
        {
          id: 14,
          question: "What step comes after Picking in operations flow?",
          options: ["Receiving", "Put-away", "Packing", "Shipping"],
          correctAnswer: 2,
          explanation: "After items are picked for orders, the next step is Packing them securely for shipment."
        },
        {
          id: 15,
          question: "What helps track what's stored and where?",
          options: [
            "Only memory",
            "Inventory Software",
            "Guessing",
            "Random checking"
          ],
          correctAnswer: 1,
          explanation: "Inventory Software systems track exactly what products are stored and their specific locations."
        },
        {
          id: 16,
          question: "What contributes to warehouse safety?",
          options: [
            "Cluttered aisles",
            "Poor lighting",
            "Clear aisles and proper lighting",
            "No safety equipment"
          ],
          correctAnswer: 2,
          explanation: "Clear aisles, proper lighting, and safety equipment all contribute to a safer warehouse environment."
        },
        {
          id: 17,
          question: "What are Shelving Units best for?",
          options: [
            "Storing large machinery",
            "Storing smaller items in organized sections",
            "Moving heavy pallets",
            "Controlling temperatures"
          ],
          correctAnswer: 1,
          explanation: "Shelving Units provide organized storage for smaller items that don't require pallet storage."
        },
        {
          id: 18,
          question: "What ensures smooth warehouse operations?",
          options: [
            "Ignoring maintenance",
            "No staff training",
            "Regular maintenance and staff training",
            "Random organization"
          ],
          correctAnswer: 2,
          explanation: "Regular equipment maintenance and ongoing staff training help ensure efficient and safe operations."
        },
        {
          id: 19,
          question: "What is the purpose of warehouse office space?",
          options: [
            "Product storage",
            "Administrative work and management",
            "Order picking",
            "Goods receiving"
          ],
          correctAnswer: 1,
          explanation: "Office space houses administrative staff who manage operations, inventory, and paperwork."
        },
        {
          id: 20,
          question: "Why is organized storage important?",
          options: [
            "It looks neat",
            "It allows quick finding of needed items",
            "It uses more space",
            "It requires more staff"
          ],
          correctAnswer: 1,
          explanation: "Organized storage enables workers to quickly locate and retrieve items when needed."
        }
      ]
    },
    {
      id: 5,
      title: "Transportation and Logistics",
      content: `
# Moving Goods: Transportation Fundamentals

Transportation is about moving products from one place to another efficiently. It's the physical movement part of supply chain - like the delivery trucks you see on the road bringing goods to stores or your home.

## Modes of Transportation

Different transportation methods suit different needs:
- **Road Transport** - Trucks and vans for flexible delivery
- **Rail Transport** - Trains for heavy loads over long distances
- **Air Transport** - Planes for urgent or high-value shipments
- **Sea Transport** - Ships for large volumes internationally
- **Pipeline** - For liquids like oil and gas

## Transportation Costs and Considerations

Choosing transportation involves balancing several factors:
- **Speed** - How quickly goods need to arrive
- **Cost** - Transportation expenses
- **Reliability** - Consistency of delivery times
- **Capacity** - How much can be transported at once
- **Safety** - Protection of goods during transit

## The Role of Carriers

Carriers are companies that provide transportation services:
- **Common Carriers** - Serve the general public (like postal services)
- **Contract Carriers** - Work under specific agreements with clients
- **Private Carriers** - Companies transporting their own goods

## Logistics Planning

Good transportation planning involves:
1. **Route Planning** - Finding the most efficient paths
2. **Load Optimization** - Filling vehicles efficiently
3. **Schedule Coordination** - Timing deliveries appropriately
4. **Documentation** - Managing shipping papers and records

## Tracking and Technology

Modern transportation uses technology for better management:
- **GPS Tracking** - Know where shipments are in real-time
- **Delivery Software** - Plan routes and track performance
- **Electronic Documentation** - Digital bills and shipping papers
- **Communication Systems** - Keep drivers connected with dispatchers

## Last-Mile Delivery

The final step to the customer's door is often the most challenging. Last-mile delivery focuses on getting packages from local distribution centers to individual addresses efficiently and cost-effectively.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is transportation primarily about?",
          options: [
            "Storing products",
            "Manufacturing goods",
            "Moving products from place to place",
            "Selling items"
          ],
          correctAnswer: 2,
          explanation: "Transportation focuses on the physical movement of goods from one location to another."
        },
        {
          id: 2,
          question: "Which transportation mode offers the most flexibility?",
          options: ["Rail Transport", "Air Transport", "Road Transport", "Sea Transport"],
          correctAnswer: 2,
          explanation: "Road Transport using trucks and vans offers the most flexibility for door-to-door delivery."
        },
        {
          id: 3,
          question: "What is best for heavy loads over long distances?",
          options: ["Road Transport", "Air Transport", "Rail Transport", "Pipeline"],
          correctAnswer: 2,
          explanation: "Rail Transport is excellent for moving heavy or bulky goods over long distances efficiently."
        },
        {
          id: 4,
          question: "Which mode is fastest for urgent shipments?",
          options: ["Sea Transport", "Rail Transport", "Air Transport", "Pipeline"],
          correctAnswer: 2,
          explanation: "Air Transport provides the fastest delivery for time-sensitive or high-value shipments."
        },
        {
          id: 5,
          question: "How many main transportation modes are there?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "There are five main modes: Road, Rail, Air, Sea, and Pipeline transportation."
        },
        {
          id: 6,
          question: "What factor refers to consistency of delivery times?",
          options: ["Speed", "Cost", "Reliability", "Capacity"],
          correctAnswer: 2,
          explanation: "Reliability measures how consistently transportation meets scheduled delivery times."
        },
        {
          id: 7,
          question: "What are Common Carriers?",
          options: [
            "Companies transporting only their own goods",
            "Transport services for the general public",
            "Private delivery companies",
            "Only rail transport companies"
          ],
          correctAnswer: 1,
          explanation: "Common Carriers provide transportation services to the general public, like postal or parcel services."
        },
        {
          id: 8,
          question: "What is the first step in logistics planning?",
          options: [
            "Load Optimization",
            "Route Planning",
            "Schedule Coordination",
            "Documentation"
          ],
          correctAnswer: 1,
          explanation: "Route Planning involves finding the most efficient paths for transportation."
        },
        {
          id: 9,
          question: "What does Load Optimization focus on?",
          options: [
            "Finding shortest routes",
            "Filling vehicles efficiently",
            "Creating delivery schedules",
            "Managing shipping papers"
          ],
          correctAnswer: 1,
          explanation: "Load Optimization ensures transportation vehicles are filled efficiently to maximize capacity usage."
        },
        {
          id: 10,
          question: "What technology shows shipment locations in real-time?",
          options: [
            "Delivery Software",
            "GPS Tracking",
            "Electronic Documentation",
            "Communication Systems"
          ],
          correctAnswer: 1,
          explanation: "GPS Tracking provides real-time location information for shipments in transit."
        },
        {
          id: 11,
          question: "Which transportation mode uses ships?",
          options: ["Road Transport", "Sea Transport", "Air Transport", "Pipeline"],
          correctAnswer: 1,
          explanation: "Sea Transport involves moving goods by ships across oceans, seas, or large waterways."
        },
        {
          id: 12,
          question: "What are Private Carriers?",
          options: [
            "Public transportation companies",
            "Companies transporting their own goods",
            "Contract-based transporters",
            "Government transport services"
          ],
          correctAnswer: 1,
          explanation: "Private Carriers are companies that own and operate their own transportation for moving their goods."
        },
        {
          id: 13,
          question: "What is Last-Mile Delivery?",
          options: [
            "The longest part of transportation",
            "Getting packages to individual addresses",
            "International shipping",
            "Warehouse receiving"
          ],
          correctAnswer: 1,
          explanation: "Last-Mile Delivery refers to the final step of getting packages from local centers to customer addresses."
        },
        {
          id: 14,
          question: "What does Schedule Coordination involve?",
          options: [
            "Only driver schedules",
            "Timing deliveries appropriately",
            "Route mapping only",
            "Vehicle maintenance only"
          ],
          correctAnswer: 1,
          explanation: "Schedule Coordination involves timing deliveries to meet customer requirements and optimize operations."
        },
        {
          id: 15,
          question: "What mode transports liquids like oil?",
          options: ["Road Transport", "Rail Transport", "Pipeline", "Air Transport"],
          correctAnswer: 2,
          explanation: "Pipelines are specifically designed for transporting liquids like oil, gas, or chemicals over long distances."
        },
        {
          id: 16,
          question: "What are Contract Carriers?",
          options: [
            "Public transport services",
            "Companies working under specific agreements",
            "Self-transport companies",
            "Only air freight companies"
          ],
          correctAnswer: 1,
          explanation: "Contract Carriers provide transportation services under specific contractual agreements with clients."
        },
        {
          id: 17,
          question: "What does Delivery Software help with?",
          options: [
            "Only printing labels",
            "Planning routes and tracking performance",
            "Manufacturing products",
            "Warehouse storage"
          ],
          correctAnswer: 1,
          explanation: "Delivery Software assists with route planning, performance tracking, and overall logistics management."
        },
        {
          id: 18,
          question: "What factor measures how much can be transported?",
          options: ["Speed", "Cost", "Reliability", "Capacity"],
          correctAnswer: 3,
          explanation: "Capacity refers to how much volume or weight a transportation mode can carry at one time."
        },
        {
          id: 19,
          question: "Why is Last-Mile Delivery challenging?",
          options: [
            "It's the cheapest part",
            "It involves getting to individual addresses efficiently",
            "It uses the largest vehicles",
            "It requires no planning"
          ],
          correctAnswer: 1,
          explanation: "Last-Mile Delivery is challenging because it involves multiple stops at individual addresses, which can be inefficient."
        },
        {
          id: 20,
          question: "What does Electronic Documentation replace?",
          options: [
            "Physical vehicles",
            "Paper bills and shipping documents",
            "Delivery drivers",
            "Transportation modes"
          ],
          correctAnswer: 1,
          explanation: "Electronic Documentation replaces traditional paper bills, invoices, and shipping papers with digital versions."
        }
      ]
    },
    {
      id: 6,
      title: "Supply Chain Coordination",
      content: `
# Working Together: Supply Chain Integration

Supply chain coordination means all parts work together smoothly. When procurement, inventory, warehousing, and transportation coordinate effectively, the entire supply chain becomes more efficient and responsive.

## Communication in Supply Chain

Good communication connects all supply chain partners:
- **Clear Information Sharing** - Sharing inventory levels, order status, and delivery schedules
- **Standard Processes** - Using common procedures and documentation
- **Regular Updates** - Keeping all partners informed of changes
- **Problem Resolution** - Quick communication when issues arise

## Technology for Coordination

Modern tools help supply chains coordinate better:
- **ERP Systems** - Enterprise software connecting different departments
- **Supply Chain Software** - Specialized tools for logistics management
- **EDI** - Electronic Data Interchange for standardized communication
- **Cloud Platforms** - Shared online systems for collaboration

## Benefits of Good Coordination

When supply chains coordinate well, they achieve:
- **Reduced Costs** - Less inventory, better transportation use
- **Faster Delivery** - Smoother processes mean quicker service
- **Better Customer Service** - More reliable and accurate deliveries
- **Improved Flexibility** - Ability to respond to changes quickly

## Building Partnerships

Strong relationships between supply chain partners create value:
- **Shared Goals** - Working toward common objectives
- **Trust** - Confidence in each other's commitments
- **Collaboration** - Working together to solve problems
- **Long-term Thinking** - Planning for future success together

## Continuous Improvement

Good supply chains always look for ways to improve:
- **Performance Measurement** - Tracking key metrics
- **Process Review** - Regularly examining how things work
- **Innovation Adoption** - Implementing new ideas and technologies
- **Training Development** - Improving skills throughout the chain

## The Big Picture

Remember that supply chain success comes from viewing the entire process as one connected system. When each part understands how it affects others and works toward common goals, the whole supply chain becomes stronger and more competitive.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does supply chain coordination mean?",
          options: [
            "Only managing warehouses",
            "All parts working together smoothly",
            "Just transportation planning",
            "Only inventory control"
          ],
          correctAnswer: 1,
          explanation: "Supply chain coordination means all components - procurement, inventory, warehousing, transportation - work together effectively."
        },
        {
          id: 2,
          question: "What is essential for good supply chain communication?",
          options: [
            "Keeping information secret",
            "Clear information sharing",
            "Using different procedures",
            "Minimal updates"
          ],
          correctAnswer: 1,
          explanation: "Clear information sharing about inventory, orders, and schedules is essential for good communication."
        },
        {
          id: 3,
          question: "What does ERP stand for?",
          options: [
            "Enterprise Resource Planning",
            "External Resource Program",
            "Electronic Reporting Process",
            "Efficient Routing Protocol"
          ],
          correctAnswer: 0,
          explanation: "ERP stands for Enterprise Resource Planning - software that connects different business departments."
        },
        {
          id: 4,
          question: "What benefit comes from good coordination?",
          options: [
            "Increased costs",
            "Slower delivery",
            "Reduced costs",
            "More errors"
          ],
          correctAnswer: 2,
          explanation: "Good coordination reduces costs through better inventory management and transportation efficiency."
        },
        {
          id: 5,
          question: "What does EDI stand for?",
          options: [
            "Electronic Data Interchange",
            "External Delivery Information",
            "Enterprise Documentation Interface",
            "Efficient Distribution Integration"
          ],
          correctAnswer: 0,
          explanation: "EDI stands for Electronic Data Interchange - a standard format for electronic business communication."
        },
        {
          id: 6,
          question: "What helps build strong supply chain partnerships?",
          options: [
            "Secret information",
            "Shared goals and trust",
            "Competition only",
            "Short-term thinking"
          ],
          correctAnswer: 1,
          explanation: "Shared goals, trust, collaboration, and long-term thinking build strong supply chain partnerships."
        },
        {
          id: 7,
          question: "What do Cloud Platforms provide?",
          options: [
            "Only storage space",
            "Shared online systems for collaboration",
            "Physical warehouse space",
            "Transportation vehicles"
          ],
          correctAnswer: 1,
          explanation: "Cloud Platforms provide shared online systems that enable collaboration between supply chain partners."
        },
        {
          id: 8,
          question: "How does coordination affect delivery times?",
          options: [
            "Makes delivery slower",
            "Results in faster delivery",
            "No effect on delivery",
            "Makes delivery unpredictable"
          ],
          correctAnswer: 1,
          explanation: "Good coordination leads to faster delivery by smoothing processes and reducing delays."
        },
        {
          id: 9,
          question: "What is continuous improvement?",
          options: [
            "Stopping all changes",
            "Always looking for ways to improve",
            "Keeping everything the same",
            "Ignoring problems"
          ],
          correctAnswer: 1,
          explanation: "Continuous improvement involves constantly seeking ways to enhance processes and performance."
        },
        {
          id: 10,
          question: "What should supply chain partners work toward?",
          options: [
            "Different objectives",
            "Common goals",
            "Individual success only",
            "Competing interests"
          ],
          correctAnswer: 1,
          explanation: "Supply chain partners achieve best results when working toward common objectives and shared success."
        },
        {
          id: 11,
          question: "What does good coordination improve?",
          options: [
            "Only warehouse operations",
            "Customer service reliability",
            "Only transportation costs",
            "Just inventory levels"
          ],
          correctAnswer: 1,
          explanation: "Good coordination improves overall customer service through more reliable and accurate deliveries."
        },
        {
          id: 12,
          question: "What is part of continuous improvement?",
          options: [
            "Ignoring metrics",
            "Performance measurement",
            "Avoiding innovation",
            "Reducing training"
          ],
          correctAnswer: 1,
          explanation: "Performance measurement - tracking key metrics - is essential for identifying improvement opportunities."
        },
        {
          id: 13,
          question: "What type of thinking builds strong partnerships?",
          options: [
            "Short-term only",
            "Long-term planning",
            "Immediate gains only",
            "Temporary arrangements"
          ],
          correctAnswer: 1,
          explanation: "Long-term thinking and planning for future success together build stronger partnerships."
        },
        {
          id: 14,
          question: "What helps quick problem resolution?",
          options: [
            "Delayed communication",
            "Quick communication when issues arise",
            "Ignoring problems",
            "Blaming others"
          ],
          correctAnswer: 1,
          explanation: "Quick communication when problems occur enables faster resolution and minimizes disruption."
        },
        {
          id: 15,
          question: "What does innovation adoption involve?",
          options: [
            "Rejecting new ideas",
            "Implementing new technologies",
            "Keeping old methods only",
            "Avoiding changes"
          ],
          correctAnswer: 1,
          explanation: "Innovation adoption means implementing new ideas, technologies, and methods to improve operations."
        },
        {
          id: 16,
          question: "Why use standard processes?",
          options: [
            "To create confusion",
            "For common procedures everyone understands",
            "To make communication difficult",
            "To increase errors"
          ],
          correctAnswer: 1,
          explanation: "Standard processes create common procedures that all partners understand and can follow consistently."
        },
        {
          id: 17,
          question: "What improves supply chain flexibility?",
          options: [
            "Rigid processes",
            "Ability to respond to changes quickly",
            "No communication",
            "Fixed procedures only"
          ],
          correctAnswer: 1,
          explanation: "Good coordination improves flexibility - the ability to respond quickly to changes in demand or supply."
        },
        {
          id: 18,
          question: "What should be regularly examined?",
          options: [
            "Only financial results",
            "How processes work",
            "Only employee performance",
            "Just customer complaints"
          ],
          correctAnswer: 1,
          explanation: "Regular process review - examining how things work - identifies improvement opportunities."
        },
        {
          id: 19,
          question: "What creates value in partnerships?",
          options: [
            "Working independently",
            "Collaboration to solve problems",
            "Keeping information private",
            "Competing internally"
          ],
          correctAnswer: 1,
          explanation: "Collaboration - working together to solve problems - creates value in supply chain partnerships."
        },
        {
          id: 20,
          question: "How should the supply chain be viewed?",
          options: [
            "As separate parts",
            "As one connected system",
            "Only as transportation",
            "Just as inventory"
          ],
          correctAnswer: 1,
          explanation: "The supply chain should be viewed as one connected system where each part affects the others."
        }
      ]
    }
  ],

  finalExam: {
    title: "Supply Chain Certificate Final Exam",
    description: "Comprehensive exam covering all 6 modules. Complete all 40 questions to earn your certificate.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the five main parts of every supply chain?",
        options: [
          "Suppliers, Workers, Managers, Customers, Bankers",
          "Suppliers, Manufacturers, Distributors, Retailers, Customers",
          "Buyers, Sellers, Transporters, Storers, Accountants",
          "Producers, Shippers, Stores, Consumers, Regulators"
        ],
        correctAnswer: 1,
        explanation: "Every supply chain has suppliers, manufacturers, distributors, retailers, and customers as its five main components."
      },
      {
        id: 2,
        question: "What is the process of buying materials called?",
        options: ["Distribution", "Procurement", "Logistics", "Inventory"],
        correctAnswer: 1,
        explanation: "Procurement is the specific process of purchasing or acquiring materials needed for business operations."
      },
      {
        id: 3,
        question: "Which inventory type includes products being manufactured?",
        options: ["Raw Materials", "Work-in-Progress", "Finished Goods", "Safety Stock"],
        correctAnswer: 1,
        explanation: "Work-in-Progress refers to products that are currently in the manufacturing process but not yet complete."
      },
      {
        id: 4,
        question: "Where are incoming goods checked in a warehouse?",
        options: ["Shipping Area", "Receiving Area", "Storage Area", "Picking Area"],
        correctAnswer: 1,
        explanation: "The Receiving Area is specifically designed for checking and accepting incoming shipments."
      },
      {
        id: 5,
        question: "Which transportation mode is most flexible for door-to-door delivery?",
        options: ["Rail", "Air", "Road", "Sea"],
        correctAnswer: 2,
        explanation: "Road transport using trucks and vans offers the greatest flexibility for direct deliveries."
      },
      {
        id: 6,
        question: "What does supply chain coordination achieve?",
        options: [
          "Increased isolation of departments",
          "All parts working together smoothly",
          "More paperwork",
          "Slower processes"
        ],
        correctAnswer: 1,
        explanation: "Coordination ensures all supply chain components work together effectively as one system."
      },
      {
        id: 7,
        question: "How many flows are managed in a supply chain?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: 1,
        explanation: "Supply chains manage three main flows: Product Flow, Information Flow, and Money Flow."
      },
      {
        id: 8,
        question: "What is the first step in the procurement process?",
        options: ["Find Suppliers", "Identify Needs", "Compare Options", "Make Agreement"],
        correctAnswer: 1,
        explanation: "The procurement process begins with identifying what materials or services are needed."
      },
      {
        id: 9,
        question: "What does JIT stand for in inventory management?",
        options: [
          "Just-in-Training",
          "Just-in-Time",
          "Journal-in-Trade",
          "Job-in-Transit"
        ],
        correctAnswer: 1,
        explanation: "JIT means Just-in-Time - receiving materials just before they are needed in production."
      },
      {
        id: 10,
        question: "What type of warehouse keeps temperature-sensitive items?",
        options: [
          "Distribution Center",
          "Storage Warehouse",
          "Cold Storage",
          "Bonded Warehouse"
        ],
        correctAnswer: 2,
        explanation: "Cold Storage warehouses maintain controlled temperatures for items like food or medicine."
      },
      {
        id: 11,
        question: "Which transportation mode is best for heavy loads over long distances?",
        options: ["Road", "Air", "Rail", "Pipeline"],
        correctAnswer: 2,
        explanation: "Rail transport is most efficient for moving heavy or bulky goods over long distances."
      },
      {
        id: 12,
        question: "What does ERP stand for?",
        options: [
          "External Resource Program",
          "Enterprise Resource Planning",
          "Efficient Routing Protocol",
          "Electronic Reporting Process"
        ],
        correctAnswer: 1,
        explanation: "ERP stands for Enterprise Resource Planning - software that integrates different business functions."
      },
      {
        id: 13,
        question: "What moves from customers back through the supply chain?",
        options: ["Products", "Information", "Money", "Raw Materials"],
        correctAnswer: 2,
        explanation: "Money flows from customers back through the supply chain as payment for goods and services."
      },
      {
        id: 14,
        question: "What should you evaluate when comparing suppliers?",
        options: [
          "Only the lowest price",
          "Price, quality, and reliability",
          "Just their location",
          "Only product samples"
        ],
        correctAnswer: 1,
        explanation: "Multiple factors including price, quality, reliability, and communication should be considered."
      },
      {
        id: 15,
        question: "What is Safety Stock?",
        options: [
          "The most expensive inventory",
          "Extra inventory to prevent shortages",
          "Inventory for safety equipment",
          "Stock that never moves"
        ],
        correctAnswer: 1,
        explanation: "Safety Stock is additional inventory kept to prevent stockouts during unexpected demand."
      },
      {
        id: 16,
        question: "What equipment moves heavy pallets in warehouses?",
        options: ["Conveyors", "Shelving", "Forklifts", "Pallet Racking"],
        correctAnswer: 2,
        explanation: "Forklifts are specifically designed to lift and move heavy pallets within warehouse environments."
      },
      {
        id: 17,
        question: "What is Last-Mile Delivery?",
        options: [
          "International shipping",
          "Getting packages to individual addresses",
          "Warehouse receiving",
          "The longest transportation leg"
        ],
        correctAnswer: 1,
        explanation: "Last-Mile Delivery is the final step of getting packages to customer addresses."
      },
      {
        id: 18,
        question: "What is essential for good supply chain communication?",
        options: [
          "Keeping information secret",
          "Clear information sharing",
          "Using different procedures",
          "Minimal updates"
        ],
        correctAnswer: 1,
        explanation: "Clear and timely information sharing is fundamental to effective supply chain communication."
      },
      {
        id: 19,
        question: "What does logistics refer to?",
        options: [
          "Financial management",
          "Movement and storage of goods",
          "Product design",
          "Marketing strategies"
        ],
        correctAnswer: 1,
        explanation: "Logistics specifically involves the movement and storage of goods within supply chains."
      },
      {
        id: 20,
        question: "What are the three main flows in supply chain?",
        options: [
          "Product, Information, Money",
          "Goods, Data, Cash",
          "Materials, Communication, Payments",
          "Inventory, Orders, Funds"
        ],
        correctAnswer: 0,
        explanation: "The three main flows are Product Flow, Information Flow, and Money Flow."
      },
      {
        id: 21,
        question: "What is Direct Procurement?",
        options: [
          "Buying office supplies",
          "Purchasing raw materials for production",
          "Acquiring maintenance services",
          "Hiring consultants"
        ],
        correctAnswer: 1,
        explanation: "Direct Procurement involves buying materials that go directly into manufacturing products."
      },
      {
        id: 22,
        question: "What does FIFO mean in inventory management?",
        options: [
          "First-In-First-Out",
          "Fast-Inventory-Fast-Out",
          "Financial-Inventory-Flow",
          "Final-Inventory-Final-Out"
        ],
        correctAnswer: 0,
        explanation: "FIFO means First-In-First-Out, using older inventory before newer stock."
      },
      {
        id: 23,
        question: "What is the purpose of warehouse put-away?",
        options: [
          "Throwing items away",
          "Storing items in designated locations",
          "Packing orders",
          "Shipping products"
        ],
        correctAnswer: 1,
        explanation: "Put-away refers to storing received items in their proper warehouse locations."
      },
      {
        id: 24,
        question: "Which transportation mode is fastest for urgent shipments?",
        options: ["Sea", "Rail", "Air", "Road"],
        correctAnswer: 2,
        explanation: "Air transport provides the fastest delivery for time-sensitive shipments."
      },
      {
        id: 25,
        question: "What does continuous improvement involve?",
        options: [
          "Stopping all changes",
          "Always looking for ways to improve",
          "Keeping everything the same",
          "Ignoring problems"
        ],
        correctAnswer: 1,
        explanation: "Continuous improvement means constantly seeking enhancements to processes and performance."
      },
      {
        id: 26,
        question: "Who are the final users in a supply chain?",
        options: ["Suppliers", "Manufacturers", "Distributors", "Customers"],
        correctAnswer: 3,
        explanation: "Customers are the final users who purchase and consume the products."
      },
      {
        id: 27,
        question: "What is Indirect Procurement?",
        options: [
          "Buying raw materials",
          "Purchasing office supplies",
          "Acquiring manufacturing components",
          "Getting packaging materials"
        ],
        correctAnswer: 1,
        explanation: "Indirect Procurement covers non-production purchases like office supplies or services."
      },
      {
        id: 28,
        question: "What is the goal of inventory management?",
        options: [
          "Maximize storage space",
          "Maintain optimal inventory levels",
          "Eliminate all inventory",
          "Store as much as possible"
        ],
        correctAnswer: 1,
        explanation: "The goal is maintaining optimal levels to meet demand without excessive stock."
      },
      {
        id: 29,
        question: "Where do packaged orders leave the warehouse?",
        options: ["Receiving Area", "Storage Area", "Shipping Area", "Picking Area"],
        correctAnswer: 2,
        explanation: "The Shipping Area is where orders are loaded onto trucks for delivery."
      },
      {
        id: 30,
        question: "What are Common Carriers?",
        options: [
          "Companies transporting only their own goods",
          "Transport services for the general public",
          "Private delivery companies",
          "Only rail transport companies"
        ],
        correctAnswer: 1,
        explanation: "Common Carriers provide transportation services to the general public."
      },
      {
        id: 31,
        question: "What builds strong supply chain partnerships?",
        options: [
          "Secret information",
          "Shared goals and trust",
          "Competition only",
          "Short-term thinking"
        ],
        correctAnswer: 1,
        explanation: "Shared goals, trust, and collaboration build strong, lasting partnerships."
      },
      {
        id: 32,
        question: "What does distribution refer to?",
        options: [
          "Manufacturing process",
          "How products reach customers",
          "Financial planning",
          "Quality control"
        ],
        correctAnswer: 1,
        explanation: "Distribution is specifically about how finished products reach end customers."
      },
      {
        id: 33,
        question: "What should be checked when receiving goods?",
        options: [
          "Only the quantity",
          "Only the quality",
          "Quantity, quality, and condition",
          "Just sign without checking"
        ],
        correctAnswer: 2,
        explanation: "When receiving goods, check quantity, quality, and overall condition."
      },
      {
        id: 34,
        question: "What does ABC Analysis help with?",
        options: [
          "Prioritizing management of valuable items",
          "Eliminating all inventory",
          "Increasing storage space",
          "Reducing product quality"
        ],
        correctAnswer: 0,
        explanation: "ABC Analysis helps prioritize inventory management on the most valuable items."
      },
      {
        id: 35,
        question: "What are Bonded Warehouses used for?",
        options: [
          "Quick product movement",
          "Storing imported goods before customs",
          "Temperature-sensitive items",
          "Long-term product storage"
        ],
        correctAnswer: 1,
        explanation: "Bonded Warehouses store imported goods before customs duties are paid."
      },
      {
        id: 36,
        question: "What does Load Optimization focus on?",
        options: [
          "Finding shortest routes",
          "Filling vehicles efficiently",
          "Creating delivery schedules",
          "Managing shipping papers"
        ],
        correctAnswer: 1,
        explanation: "Load Optimization ensures transportation vehicles are filled efficiently."
      },
      {
        id: 37,
        question: "What does EDI stand for?",
        options: [
          "Electronic Data Interchange",
          "External Delivery Information",
          "Enterprise Documentation Interface",
          "Efficient Distribution Integration"
        ],
        correctAnswer: 0,
        explanation: "EDI stands for Electronic Data Interchange for standardized business communication."
      },
      {
        id: 38,
        question: "What is the kitchen pantry comparison for?",
        options: [
          "Procurement process",
          "Inventory management",
          "Warehouse design",
          "Transportation planning"
        ],
        correctAnswer: 1,
        explanation: "The kitchen pantry comparison helps explain inventory management concepts simply."
      },
      {
        id: 39,
        question: "What are Private Carriers?",
        options: [
          "Public transportation companies",
          "Companies transporting their own goods",
          "Contract-based transporters",
          "Government transport services"
        ],
        correctAnswer: 1,
        explanation: "Private Carriers are companies that transport their own goods using their own equipment."
      },
      {
        id: 40,
        question: "How should the entire supply chain be viewed?",
        options: [
          "As separate parts",
          "As one connected system",
          "Only as transportation",
          "Just as inventory"
        ],
        correctAnswer: 1,
        explanation: "The supply chain should be viewed as one connected system where all parts work together."
      }
    ]
  }
};
