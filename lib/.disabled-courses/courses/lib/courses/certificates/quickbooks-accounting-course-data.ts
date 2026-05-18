export const quickbooksAccountingCertificateCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "quickbooks-accounting-certificate",
  title: "QuickBooks Accounting (Certificate)",
  description: "Master QuickBooks accounting software for small business financial management. Learn to set up company files, manage transactions, generate reports, and understand basic bookkeeping principles in an easy-to-follow format.",
  duration: "6 weeks",
  timeCommitment: "4-5 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "📊",
  badge: "Certificate",
  
  // 2. MODULE ARCHITECTURE - 6 Modules
  modules: [
    {
      id: 1,
      title: "QuickBooks Basics and Company Setup",
      completed: false,
      content: `# Getting Started with QuickBooks

## Introduction to QuickBooks
QuickBooks is accounting software designed for small businesses. It helps track income and expenses, create invoices, pay bills, and generate financial reports. The software makes bookkeeping easier by organizing financial information in one place.

## Understanding QuickBooks Versions
QuickBooks comes in different versions:
- **QuickBooks Online** - Cloud-based version accessible from any device
- **QuickBooks Desktop** - Software installed on your computer
- **QuickBooks Self-Employed** - Simplified version for freelancers
- **QuickBooks Enterprise** - Advanced version for larger businesses

## Setting Up Your Company File
Creating your company file is the first step:
- **Company information** - Business name, address, contact details
- **Industry selection** - Choose your business type for preset accounts
- **Fiscal year start** - When your business year begins
- **Administrator setup** - Create login credentials
- **Preferences configuration** - Set up how QuickBooks works for you

## Chart of Accounts Basics
The Chart of Accounts organizes your finances:
- **Assets** - What your business owns (cash, equipment, inventory)
- **Liabilities** - What your business owes (loans, credit cards)
- **Equity** - Owner's investment in the business
- **Income** - Money your business earns
- **Expenses** - Money your business spends

## Setting Up Bank Accounts
Connect your business bank accounts:
- **Account linking** - Connect QuickBooks to your bank
- **Account types** - Checking, savings, credit cards
- **Starting balances** - Enter current account balances
- **Reconciliation setup** - Prepare for monthly bank reconciliations
- **Security settings** - Keep your financial information safe

## Adding Products and Services
Create your business items:
- **Service items** - Services you provide to customers
- **Product items** - Physical products you sell
- **Inventory items** - Products you track in stock
- **Description setup** - Clear item descriptions
- **Price setting** - Set your prices for each item

## Customer and Vendor Setup
Organize your business contacts:
- **Customer list** - People who buy from you
- **Vendor list** - People you buy from
- **Contact information** - Names, addresses, phone numbers
- **Payment terms** - When payments are due
- **Credit limits** - Set limits for customer credit

## QuickBooks Navigation
Learning to move around QuickBooks:
- **Dashboard** - Overview of your business finances
- **Left menu** - Main navigation menu
- **Top toolbar** - Common actions and shortcuts
- **Search function** - Find anything in QuickBooks
- **Help resources** - Getting assistance when needed

## Basic Preferences Setup
Configure QuickBooks to match your business:
- **Sales preferences** - How you handle customer sales
- **Expense preferences** - How you track business expenses
- **Tax settings** - Sales tax and other tax configurations
- **Reporting preferences** - How reports display information
- **Notification settings** - What alerts you receive

## Security Best Practices
Protect your financial information:
- **Strong passwords** - Create secure login credentials
- **User permissions** - Control what different users can access
- **Regular backups** - Back up your QuickBooks data
- **Software updates** - Keep QuickBooks updated
- **Data verification** - Check data accuracy regularly

## Getting Help in QuickBooks
Resources for learning and troubleshooting:
- **Help menu** - Built-in help articles
- **Tutorial videos** - Step-by-step video guides
- **Community forums** - Ask other QuickBooks users
- **Live support** - Get help from QuickBooks experts
- **Learning center** - Official training resources

## First Steps Checklist
What to do when starting with QuickBooks:
1. Complete company setup with accurate business information
2. Set up your Chart of Accounts for your business type
3. Connect your business bank accounts
4. Add your products and services
5. Enter customer and vendor information
6. Configure basic preferences
7. Set up security and backup procedures
8. Explore the dashboard and navigation

## Common Setup Mistakes to Avoid
Problems to watch out for:
- **Incorrect company type** - Choosing wrong business structure
- **Missing accounts** - Not setting up all needed accounts
- **Wrong start date** - Incorrect fiscal year beginning
- **Duplicate entries** - Creating multiple records for same item
- **Incomplete information** - Missing important business details

## QuickBooks Terminology
Key terms to understand:
- **Transaction** - Any financial activity recorded
- **Account** - Category for tracking money
- **Journal entry** - Manual recording of transactions
- **Reconciliation** - Matching records with bank statements
- **Report** - Summary of financial information`,
      quiz: [
        {
          id: 1,
          question: "What is QuickBooks primarily used for?",
          options: [
            "Writing business documents",
            "Small business accounting and financial management",
            "Creating marketing materials",
            "Managing employee schedules"
          ],
          correctAnswer: 1,
          explanation: "QuickBooks is accounting software designed to help small businesses manage finances including income, expenses, invoices, and reports."
        },
        {
          id: 2,
          question: "What is the Chart of Accounts?",
          options: [
            "List of customer names",
            "Organization system for financial accounts like assets and expenses",
            "Chart showing account growth",
            "List of product prices"
          ],
          correctAnswer: 1,
          explanation: "The Chart of Accounts organizes all financial accounts into categories like assets, liabilities, income, and expenses."
        },
        {
          id: 3,
          question: "What are assets in accounting?",
          options: [
            "Things your business owes",
            "Things your business owns, like cash and equipment",
            "Business expenses",
            "Customer debts"
          ],
          correctAnswer: 1,
          explanation: "Assets are resources owned by the business that have economic value, such as cash, inventory, and equipment."
        },
        {
          id: 4,
          question: "What should you set up first in QuickBooks?",
          options: [
            "Monthly reports",
            "Company file with business information",
            "Customer invoices",
            "Employee payroll"
          ],
          correctAnswer: 1,
          explanation: "The first step is creating your company file with accurate business information, industry type, and fiscal year start date."
        },
        {
          id: 5,
          question: "What is QuickBooks Online?",
          options: [
            "Desktop software only",
            "Cloud-based version accessible from any device",
            "Mobile app only",
            "Free trial version"
          ],
          correctAnswer: 1,
          explanation: "QuickBooks Online is the cloud-based version that can be accessed from any device with internet connection."
        },
        {
          id: 6,
          question: "Why connect bank accounts to QuickBooks?",
          options: [
            "To print checks",
            "To automatically import and categorize transactions",
            "To increase bank interest",
            "To get bank loans"
          ],
          correctAnswer: 1,
          explanation: "Connecting bank accounts allows QuickBooks to automatically import transactions, saving time on manual data entry."
        },
        {
          id: 7,
          question: "What are vendors in QuickBooks?",
          options: [
            "People who buy from you",
            "People or companies you buy from",
            "Software developers",
            "Bank employees"
          ],
          correctAnswer: 1,
          explanation: "Vendors are suppliers or companies from whom your business purchases goods or services."
        },
        {
          id: 8,
          question: "What is a service item?",
          options: [
            "Physical product you sell",
            "Service you provide to customers",
            "Customer service department",
            "Software feature"
          ],
          correctAnswer: 1,
          explanation: "Service items represent services your business provides, such as consulting, repairs, or professional services."
        },
        {
          id: 9,
          question: "What should you set in preferences?",
          options: [
            "Only color themes",
            "How QuickBooks handles sales, expenses, taxes, and reports",
            "Only font sizes",
            "Only background images"
          ],
          correctAnswer: 1,
          explanation: "Preferences configure how QuickBooks works for your specific business needs including sales, expenses, taxes, and reporting."
        },
        {
          id: 10,
          question: "Why create regular backups?",
          options: [
            "To speed up QuickBooks",
            "To protect your financial data from loss",
            "To reduce file size",
            "To print records"
          ],
          correctAnswer: 1,
          explanation: "Regular backups protect your financial data in case of computer problems, data corruption, or accidental deletion."
        },
        {
          id: 11,
          question: "What is the dashboard?",
          options: [
            "Car instrument panel",
            "Overview of your business finances in QuickBooks",
            "Customer contact screen",
            "Report printing area"
          ],
          correctAnswer: 1,
          explanation: "The dashboard provides a visual overview of key financial information and business performance metrics."
        },
        {
          id: 12,
          question: "What are liabilities?",
          options: [
            "Things your business owns",
            "Debts or obligations your business owes",
            "Business income",
            "Customer assets"
          ],
          correctAnswer: 1,
          explanation: "Liabilities are financial obligations or debts that your business owes to others, like loans or accounts payable."
        },
        {
          id: 13,
          question: "What is equity in accounting?",
          options: [
            "Customer fairness",
            "Owner's investment in the business",
            "Employee equality",
            "Price fairness"
          ],
          correctAnswer: 1,
          explanation: "Equity represents the owner's financial interest in the business after subtracting liabilities from assets."
        },
        {
          id: 14,
          question: "What is a fiscal year?",
          options: [
            "Calendar year only",
            "Your business's 12-month accounting period",
            "Tax year only",
            "Employee work year"
          ],
          correctAnswer: 1,
          explanation: "A fiscal year is any 12-month period a business uses for accounting purposes, which may differ from the calendar year."
        },
        {
          id: 15,
          question: "What are income accounts?",
          options: [
            "Bank accounts",
            "Accounts tracking money your business earns",
            "Expense accounts",
            "Customer accounts"
          ],
          correctAnswer: 1,
          explanation: "Income accounts track the money your business earns from sales, services, or other revenue sources."
        },
        {
          id: 16,
          question: "What are expense accounts?",
          options: [
            "Customer expenses",
            "Accounts tracking money your business spends",
            "Income records",
            "Bank fees only"
          ],
          correctAnswer: 1,
          explanation: "Expense accounts track the money your business spends on operations, supplies, rent, and other costs."
        },
        {
          id: 17,
          question: "What is bank reconciliation?",
          options: [
            "Opening new accounts",
            "Matching QuickBooks records with bank statements",
            "Changing banks",
            "Bank loan approval"
          ],
          correctAnswer: 1,
          explanation: "Bank reconciliation is the process of comparing your QuickBooks records with bank statements to ensure they match."
        },
        {
          id: 18,
          question: "What are user permissions?",
          options: [
            "Software licenses",
            "Controls over what different users can access in QuickBooks",
            "User manuals",
            "Training permissions"
          ],
          correctAnswer: 1,
          explanation: "User permissions control what features and data different users can access, helping maintain security and proper accounting controls."
        },
        {
          id: 19,
          question: "What should you avoid in setup?",
          options: [
            "Using help resources",
            "Incomplete information and duplicate entries",
            "Setting preferences",
            "Creating backups"
          ],
          correctAnswer: 1,
          explanation: "Avoid incomplete information, duplicate entries, incorrect business type, and wrong start dates during setup."
        },
        {
          id: 20,
          question: "Where can you get QuickBooks help?",
          options: [
            "Only from accountants",
            "Help menu, tutorials, forums, and live support",
            "Only from books",
            "Only from friends"
          ],
          correctAnswer: 1,
          explanation: "QuickBooks provides multiple help resources including built-in help, video tutorials, user forums, and live support options."
        }
      ]
    },
    {
      id: 2,
      title: "Managing Sales and Income",
      completed: false,
      content: `# Handling Customer Sales in QuickBooks

## Understanding Sales Transactions
Sales transactions record money coming into your business. QuickBooks offers several ways to track sales depending on how your business operates.

## Creating Customer Invoices
Invoices are bills you send to customers:
- **Invoice creation** - Create professional invoices
- **Customer selection** - Choose which customer gets the invoice
- **Item addition** - Add products or services sold
- **Quantity and price** - Enter amounts and prices
- **Payment terms** - Set when payment is due
- **Message inclusion** - Add notes or messages to customers

## Sales Receipts vs Invoices
Know when to use each:
- **Sales receipts** - For immediate payments (retail, in-person sales)
- **Invoices** - For payments later (services, billed work)
- **Estimates** - For quotes before work begins
- **Credit memos** - For refunds or credits to customers

## Recording Sales Receipts
For immediate customer payments:
- **Payment method** - Cash, check, credit card
- **Date and amount** - When and how much was paid
- **Item details** - What was purchased
- **Customer information** - Who made the purchase
- **Receipt printing** - Print or email receipts

## Managing Customer Payments
Recording payments on invoices:
- **Payment receipt** - Record customer payments
- **Invoice matching** - Apply payments to specific invoices
- **Partial payments** - Handle payments less than full amount
- **Payment methods** - Track how payment was made
- **Deposit recording** - Record bank deposits

## Creating Estimates
Providing quotes to customers:
- **Estimate creation** - Create professional estimates
- **Itemized lists** - Detail products or services
- **Expiration dates** - Set how long estimate is valid
- **Converting to invoices** - Turn estimates into invoices
- **Tracking status** - Monitor if estimates are accepted

## Sales Tax Setup and Calculation
Handling sales tax:
- **Tax agency setup** - Configure tax authorities
- **Tax rates** - Set correct tax percentages
- **Taxable items** - Mark which items are taxable
- **Tax calculations** - QuickBooks automatically calculates tax
- **Tax reporting** - Generate tax reports

## Customer Statements
Sending statement summaries:
- **Statement creation** - Generate customer statements
- **Period selection** - Choose time period covered
- **Outstanding balances** - Show what customers owe
- **Statement delivery** - Print or email statements
- **Follow-up tracking** - Monitor statement responses

## Managing Customer Credits
Handling credits and refunds:
- **Credit memo creation** - Create credit documents
- **Reason recording** - Note why credit is given
- **Credit application** - Apply credits to invoices
- **Refund processing** - Process customer refunds
- **Credit tracking** - Monitor available credits

## Recording Discounts
Applying discounts to sales:
- **Early payment discounts** - Discounts for quick payment
- **Volume discounts** - Discounts for large orders
- **Promotional discounts** - Special sale discounts
- **Discount accounts** - Set up discount tracking accounts
- **Discount calculation** - Automatic discount calculations

## Sales Reports
Understanding your sales data:
- **Sales by customer** - See which customers buy most
- **Sales by item** - See which products sell best
- **Income statements** - View overall income
- **Accounts receivable aging** - See overdue payments
- **Sales tax liability** - View tax owed

## Handling Returns
Managing product returns:
- **Return authorization** - Create return records
- **Item receipt** - Record returned items
- **Credit issuance** - Issue credit for returns
- **Inventory adjustment** - Update inventory counts
- **Return analysis** - Track return reasons

## Recurring Transactions
Setting up repeating sales:
- **Recurring invoices** - Regular invoices for repeat customers
- **Schedule setup** - Set frequency (weekly, monthly, etc.)
- **Automatic sending** - Schedule automatic invoice delivery
- **Amount adjustments** - Handle changing amounts
- **Recurring template management** - Manage recurring transaction templates

## Customer Deposit Handling
Managing customer deposits:
- **Deposit receipt** - Record customer deposits
- **Liability tracking** - Track deposit as liability until earned
- **Invoice application** - Apply deposits to final invoices
- **Refund processing** - Handle deposit refunds if needed
- **Deposit reporting** - Report on deposit status

## Sales Order Processing
For businesses with inventory:
- **Sales order creation** - Create orders for future delivery
- **Inventory reservation** - Reserve inventory for orders
- **Order fulfillment** - Convert orders to invoices when shipped
- **Backorder management** - Handle out-of-stock items
- **Order status tracking** - Monitor order progress

## Customer Communication Tracking
Keeping records of customer interactions:
- **Note adding** - Add notes to customer records
- **Email tracking** - Record emails sent to customers
- **Call logging** - Log phone conversations
- **Document attachment** - Attach files to customer records
- **Follow-up reminders** - Set reminders for customer follow-ups

## Sales Process Best Practices
Effective sales management:
- **Consistent numbering** - Use consistent invoice numbering
- **Timely invoicing** - Send invoices promptly
- **Clear terms** - State payment terms clearly
- **Professional templates** - Use professional invoice designs
- **Regular follow-up** - Follow up on overdue payments

## Common Sales Mistakes
Problems to avoid:
- **Duplicate invoices** - Creating multiple invoices for same sale
- **Missing payments** - Forgetting to record customer payments
- **Incorrect tax** - Applying wrong sales tax rates
- **Unapplied credits** - Not applying customer credits
- **Late invoicing** - Delaying invoice creation

## Sales Data Accuracy
Ensuring correct sales records:
- **Regular review** - Review sales transactions regularly
- **Error correction** - Correct mistakes promptly
- **Backup verification** - Verify backup includes sales data
- **Audit trail checking** - Review transaction history
- **Report verification** - Compare reports with actual sales`,
      quiz: [
        {
          id: 1,
          question: "When should you use a sales receipt instead of an invoice?",
          options: [
            "For services billed monthly",
            "For immediate payments like retail sales",
            "For quotes to customers",
            "For recording expenses"
          ],
          correctAnswer: 1,
          explanation: "Use sales receipts for immediate payments where the customer pays at time of purchase, such as retail or in-person sales."
        },
        {
          id: 2,
          question: "What is an estimate in QuickBooks?",
          options: [
            "Final invoice",
            "Quote or proposal for work before it begins",
            "Sales receipt",
            "Expense report"
          ],
          correctAnswer: 1,
          explanation: "An estimate is a quote or proposal showing expected costs before work begins, which can later be converted to an invoice."
        },
        {
          id: 3,
          question: "How do you record a customer payment on an invoice?",
          options: [
            "Delete the invoice",
            "Use the receive payment function to apply payment to specific invoice",
            "Create new invoice",
            "Ignore the payment"
          ],
          correctAnswer: 1,
          explanation: "Use the Receive Payment function to record customer payments and apply them to specific outstanding invoices."
        },
        {
          id: 4,
          question: "What are recurring transactions?",
          options: [
            "One-time sales",
            "Regular repeating transactions like monthly invoices",
            "Accidental transactions",
            "Deleted transactions"
          ],
          correctAnswer: 1,
          explanation: "Recurring transactions are set up to repeat automatically on a schedule, such as monthly invoices for regular clients."
        },
        {
          id: 5,
          question: "What is a credit memo?",
          options: [
            "Customer praise",
            "Document for refunds or credits to customers",
            "Credit card receipt",
            "Bank credit"
          ],
          correctAnswer: 1,
          explanation: "A credit memo documents credits or refunds given to customers for returns, discounts, or other adjustments."
        },
        {
          id: 6,
          question: "Why set up sales tax correctly?",
          options: [
            "To avoid calculating tax",
            "For accurate tax collection and reporting to tax authorities",
            "To increase prices",
            "To reduce sales"
          ],
          correctAnswer: 1,
          explanation: "Correct sales tax setup ensures you collect the right amount of tax and can report and remit it properly to tax authorities."
        },
        {
          id: 7,
          question: "What is accounts receivable aging?",
          options: [
            "Customer age list",
            "Report showing how long invoices have been unpaid",
            "Old customer records",
            "Historical sales data"
          ],
          correctAnswer: 1,
          explanation: "Accounts receivable aging report shows which invoices are overdue and how long they've been unpaid, helping with collections."
        },
        {
          id: 8,
          question: "How handle customer deposits?",
          options: [
            "Record as income immediately",
            "Track as liability until work is done or product delivered",
            "Ignore until invoice",
            "Return immediately"
          ],
          correctAnswer: 1,
          explanation: "Customer deposits should be tracked as liabilities until the work is completed or product delivered, then applied to the final invoice."
        },
        {
          id: 9,
          question: "What are sales orders for?",
          options: [
            "Final sales records",
            "Reserving inventory for future sales before invoicing",
            "Customer wish lists",
            "Expired offers"
          ],
          correctAnswer: 1,
          explanation: "Sales orders reserve inventory for customers and track orders before they are shipped and invoiced."
        },
        {
          id: 10,
          question: "What should invoices include?",
          options: [
            "Only total amount",
            "Item details, quantities, prices, terms, and contact information",
            "Only customer name",
            "Only date"
          ],
          correctAnswer: 1,
          explanation: "Professional invoices should include itemized details, quantities, prices, payment terms, and complete contact information."
        },
        {
          id: 11,
          question: "What are payment terms?",
          options: [
            "Bank terms",
            "When payment is due, like Net 30 for 30 days",
            "Credit card terms",
            "Loan terms"
          ],
          correctAnswer: 1,
          explanation: "Payment terms specify when payment is due, such as Net 30 (payment due in 30 days) or Due on Receipt."
        },
        {
          id: 12,
          question: "Why track customer communications?",
          options: [
            "To fill time",
            "To maintain records of interactions for better customer service",
            "To share with competitors",
            "To delete later"
          ],
          correctAnswer: 1,
          explanation: "Tracking communications helps provide better customer service, resolve disputes, and maintain complete customer history."
        },
        {
          id: 13,
          question: "What is partial payment handling?",
          options: [
            "Refusing partial payments",
            "Recording payments that are less than the full invoice amount",
            "Splitting payments randomly",
            "Ignoring small payments"
          ],
          correctAnswer: 1,
          explanation: "Partial payment handling records payments that cover only part of an invoice, with the remainder staying as outstanding balance."
        },
        {
          id: 14,
          question: "What are sales by customer reports?",
          options: [
            "Customer addresses",
            "Reports showing which customers generate most sales",
            "Customer complaints",
            "Customer birthdays"
          ],
          correctAnswer: 1,
          explanation: "Sales by customer reports show which customers are your best sources of revenue, helping with customer relationship management."
        },
        {
          id: 15,
          question: "How handle product returns?",
          options: [
            "Delete original sale",
            "Create credit memos and adjust inventory if needed",
            "Ignore returns",
            "Charge more next time"
          ],
          correctAnswer: 1,
          explanation: "Handle returns by creating credit memos to refund customers and adjusting inventory counts if physical products are returned."
        },
        {
          id: 16,
          question: "What are recurring invoice benefits?",
          options: [
            "More work",
            "Time savings and consistency for regular billing",
            "Higher prices",
            "Automatic payment"
          ],
          correctAnswer: 1,
          explanation: "Recurring invoices save time and ensure consistency for regular customers who get billed the same amount periodically."
        },
        {
          id: 17,
          question: "Why send customer statements?",
          options: [
            "To annoy customers",
            "To remind customers of outstanding balances and account activity",
            "To show off accounting skills",
            "To reduce mail costs"
          ],
          correctAnswer: 1,
          explanation: "Statements remind customers of what they owe and show recent account activity, helping with collections."
        },
        {
          id: 18,
          question: "What are early payment discounts?",
          options: [
            "Price increases",
            "Discounts offered for paying invoices early",
            "Late payment penalties",
            "Credit card discounts"
          ],
          correctAnswer: 1,
          explanation: "Early payment discounts encourage customers to pay quickly by offering a small discount for payment before the due date."
        },
        {
          id: 19,
          question: "What common sales mistake to avoid?",
          options: [
            "Sending invoices",
            "Duplicate invoices for the same sale",
            "Recording payments",
            "Creating estimates"
          ],
          correctAnswer: 1,
          explanation: "Creating duplicate invoices for the same sale can confuse customers and cause accounting errors in revenue tracking."
        },
        {
          id: 20,
          question: "Why review sales data regularly?",
          options: [
            "To waste time",
            "To ensure accuracy and catch errors early",
            "To delete records",
            "To change prices constantly"
          ],
          correctAnswer: 1,
          explanation: "Regular review of sales data helps catch errors early, ensure accuracy, and maintain reliable financial records."
        }
      ]
    },
    {
      id: 3,
      title: "Managing Expenses and Bills",
      completed: false,
      content: `# Tracking Business Expenses in QuickBooks

## Understanding Business Expenses
Expenses are the costs of running your business. Proper expense tracking helps you understand profitability, control costs, and prepare accurate tax returns.

## Recording Expenses
Different ways to record expenses:
- **Check payments** - Writing checks to pay expenses
- **Credit card charges** - Recording credit card purchases
- **Cash expenses** - Tracking cash payments
- **Bill payments** - Paying vendor invoices
- **Online payments** - Electronic payments from bank accounts

## Entering Bills from Vendors
Recording bills you need to pay:
- **Bill creation** - Enter bills from suppliers
- **Vendor selection** - Choose which vendor sent the bill
- **Due date setting** - Record when payment is due
- **Expense categorization** - Assign to correct expense accounts
- **Bill details** - Enter description and amounts

## Paying Bills
Processing bill payments:
- **Pay bills function** - Use QuickBooks to pay multiple bills
- **Payment method selection** - Choose how to pay (check, online, etc.)
- **Payment date** - Record when payment was made
- **Check printing** - Print checks directly from QuickBooks
- **Payment confirmation** - Mark bills as paid

## Credit Card Transactions
Managing credit card expenses:
- **Credit card setup** - Set up credit card accounts
- **Transaction import** - Import credit card transactions
- **Expense categorization** - Assign transactions to expense accounts
- **Statement reconciliation** - Reconcile credit card statements
- **Payment recording** - Record credit card payments

## Cash Expenses
Tracking cash payments:
- **Petty cash setup** - Set up petty cash account
- **Cash receipt recording** - Record cash payments with receipts
- **Expense reporting** - Create cash expense reports
- **Replenishment tracking** - Track petty cash replenishment
- **Receipt management** - Keep and organize cash receipts

## Recurring Expenses
Setting up regular bills:
- **Recurring bill setup** - Create templates for regular bills
- **Schedule creation** - Set payment frequency
- **Amount management** - Handle variable amounts if needed
- **Automatic payment** - Schedule automatic payments
- **Template management** - Manage recurring expense templates

## Expense Categorization
Assigning expenses to correct accounts:
- **Account selection** - Choose appropriate expense accounts
- **Multiple accounts** - Split expenses between accounts if needed
- **Class tracking** - Use classes for department or project tracking
- **Location tracking** - Track expenses by location if applicable
- **Customer job assignment** - Assign expenses to specific jobs

## Vendor Management
Organizing supplier information:
- **Vendor list maintenance** - Keep vendor information current
- **Payment terms** - Record vendor payment terms
- **Credit limits** - Track vendor credit limits if applicable
- **Contact information** - Maintain current vendor contacts
- **Purchase history** - Review vendor purchase history

## Purchase Orders
For businesses that order inventory:
- **Purchase order creation** - Create orders to suppliers
- **Item selection** - Specify what you're ordering
- **Quantity and price** - Enter amounts and agreed prices
- **Order tracking** - Monitor order status
- **Receipt recording** - Record when items are received

## Inventory Receiving
Receiving ordered items:
- **Receive items function** - Record received inventory
- **Purchase order matching** - Match receipts to purchase orders
- **Quantity verification** - Verify received quantities
- **Cost recording** - Record actual costs received
- **Bill matching** - Match bills to received items

## Expense Reports
For employee reimbursements:
- **Report creation** - Create expense reports
- "**Receipt attachment** - Attach supporting receipts
- **Approval process** - Set up approval workflow
- **Reimbursement recording** - Record employee reimbursements
- **Report tracking** - Track expense report status

## Mileage Tracking
Recording business vehicle expenses:
- **Trip recording** - Record business trips
- **Mileage rates** - Apply standard mileage rates
- **Purpose documentation** - Document business purpose
- **Report generation** - Create mileage reports
- **Deduction calculation** - Calculate tax deductions

## Fixed Assets
Tracking major business purchases:
- **Asset setup** - Set up fixed asset accounts
- **Purchase recording** - Record asset purchases
- **Depreciation setup** - Configure depreciation schedules
- **Depreciation calculation** - Calculate depreciation expenses
- **Asset reporting** - Generate fixed asset reports

## Loan Payments
Tracking business loan payments:
- **Loan setup** - Set up loan accounts
- **Payment scheduling** - Schedule loan payments
- **Principal/interest split** - Separate principal from interest
- **Balance tracking** - Track remaining loan balance
- **Amortization schedules** - View payment schedules

## Sales Tax Payments
Paying collected sales tax:
- **Tax liability tracking** - Track collected sales tax
- **Payment preparation** - Prepare tax payments
- **Payment recording** - Record tax payments made
- **Filing tracking** - Track tax filing due dates
- **Compliance monitoring** - Ensure tax compliance

## Expense Reports and Analysis
Understanding your spending:
- **Expense by vendor reports** - See who you spend most with
- **Expense by account reports** - See spending by category
- **Budget vs actual reports** - Compare spending to budget
- **Trend analysis** - Analyze expense trends over time
- **Cost control identification** - Identify areas for cost reduction

## Expense Audit Trail
Maintaining proper records:
- **Document attachment** - Attach receipts and documents
- **Approval tracking** - Track who approved expenses
- **Change history** - Review expense entry changes
- "**Backup documentation** - Maintain supporting documentation
- **Compliance verification** - Ensure expense compliance

## Expense Best Practices
Effective expense management:
- **Timely recording** - Record expenses promptly
- **Receipt organization** - Organize and store receipts
- **Regular review** - Review expenses regularly
- **Budget comparison** - Compare to budget monthly
- **Policy compliance** - Follow business expense policies

## Common Expense Mistakes
Problems to avoid:
- **Personal expenses** - Mixing personal and business expenses
- **Incorrect categorization** - Wrong expense account assignment
- "**Duplicate payments** - Paying same bill twice
- **Missed deductions** - Missing tax-deductible expenses
- **Late payments** - Paying bills late and incurring fees

## Expense Control Strategies
Managing business costs:
- **Vendor comparison** - Regularly compare vendor prices
- "**Bulk purchasing** - Consider bulk purchases for discounts
- **Expense approval** - Implement expense approval processes
- **Regular audits** - Conduct regular expense audits
- **Policy enforcement** - Enforce expense policies consistently`,
      quiz: [
        {
          id: 1,
          question: "What are business expenses?",
          options: [
            "Customer payments",
            "Costs of running your business",
            "Bank deposits",
            "Sales income"
          ],
          correctAnswer: 1,
          explanation: "Business expenses are the costs incurred in operating your business, such as rent, supplies, utilities, and salaries."
        },
        {
          id: 2,
          question: "When should you enter bills in QuickBooks?",
          options: [
            "After paying them",
            "When you receive them from vendors, before payment",
            "At year end only",
            "When customers pay"
          ],
          correctAnswer: 1,
          explanation: "Enter bills when you receive them from vendors to track what you owe, then pay them by the due date."
        },
        {
          id: 3,
          question: "How handle credit card expenses?",
          options: [
            "Ignore until statement",
            "Import transactions and categorize them to expense accounts",
            "Only track cash",
            "Put all on one account"
          ],
          correctAnswer: 1,
          explanation: "Import credit card transactions regularly and categorize each to appropriate expense accounts for accurate tracking."
        },
        {
          id: 4,
          question: "What are recurring expenses?",
          options: [
            "One-time purchases",
            "Regular repeating expenses like rent or utilities",
            "Unexpected costs",
            "Customer refunds"
          ],
          correctAnswer: 1,
          explanation: "Recurring expenses repeat regularly, such as monthly rent, utilities, or subscription services."
        },
        {
          id: 5,
          question: "Why categorize expenses correctly?",
          options: [
            "To make reports pretty",
            "For accurate financial reports and tax deductions",
            "To confuse bookkeepers",
            "To increase expenses"
          ],
          correctAnswer: 1,
          explanation: "Correct categorization ensures accurate financial reporting and maximizes legitimate tax deductions."
        },
        {
          id: 6,
          question: "What are purchase orders for?",
          options: [
            "Customer orders",
            "Formal requests to suppliers for goods or services",
            "Sales receipts",
            "Bank orders"
          ],
          correctAnswer: 1,
          explanation: "Purchase orders are formal documents sent to suppliers specifying what you want to purchase, at what price, and delivery terms."
        },
        {
          id: 7,
          question: "How track business mileage?",
          options: [
            "Guess distance",
            "Record trips with purpose, distance, and dates in QuickBooks",
            "Use personal odometer",
            "Estimate yearly"
          ],
          correctAnswer: 1,
          explanation: "Record each business trip with date, purpose, starting and ending locations, and distance for accurate mileage tracking."
        },
        {
          id: 8,
          question: "What are fixed assets?",
          options: [
            "Daily supplies",
            "Long-term business property like equipment or vehicles",
            "Inventory items",
            "Office snacks"
          ],
          correctAnswer: 1,
          explanation: "Fixed assets are long-term tangible assets used in business operations, such as equipment, vehicles, or buildings."
        },
        {
          id: 9,
          question: "How handle sales tax payments?",
          options: [
            "Ignore collected tax",
            "Track liability and make payments to tax authorities",
            "Keep as profit",
            "Refund to customers"
          ],
          correctAnswer: 1,
          explanation: "Track sales tax collected as a liability and make regular payments to the appropriate tax authorities."
        },
        {
          id: 10,
          question: "What are expense reports for employees?",
          options: [
            "Employee criticism",
            "Documents for employee business expense reimbursements",
            "Salary reports",
            "Performance reviews"
          ],
          correctAnswer: 1,
          explanation: "Expense reports document employee business expenses that need to be reimbursed by the company."
        },
        {
          id: 11,
          question: "Why attach receipts to expenses?",
          options: [
            "To waste paper",
            "For documentation and tax audit protection",
            "To decorate files",
            "To increase file size"
          ],
          correctAnswer: 1,
          explanation: "Attaching receipts provides documentation for expenses, which is important for tax deductions and potential audits."
        },
        {
          id: 12,
          question: "What is petty cash?",
          options: [
            "Small change",
            "Small amount of cash for minor business expenses",
            "Employee tips",
            "Bank vault cash"
          ],
          correctAnswer: 1,
          explanation: "Petty cash is a small amount of cash kept on hand for minor business expenses that don't justify writing checks."
        },
        {
          id: 13,
          question: "How avoid duplicate bill payments?",
          options: [
            "Pay everything twice",
            "Mark bills as paid when payment is processed and review unpaid bills regularly",
            "Ignore vendor statements",
            "Use multiple systems"
          ],
          correctAnswer: 1,
          explanation: "Mark bills as paid immediately when payment is processed and regularly review unpaid bills to avoid duplicate payments."
        },
        {
          id: 14,
          question: "What are accounts payable aging reports?",
          options: [
            "Vendor age list",
            "Reports showing how long bills have been unpaid",
            "Old vendor records",
            "Historical expense data"
          ],
          correctAnswer: 1,
          explanation: "Accounts payable aging reports show which bills are overdue and how long they've been unpaid, helping with cash flow management."
        },
        {
          id: 15,
          question: "Why track expenses by class?",
          options: [
            "For school accounting",
            "To analyze expenses by department, project, or location",
            "To classify employees",
            "For classroom use"
          ],
          correctAnswer: 1,
          explanation: "Class tracking allows analysis of expenses by department, project, location, or other categories important to your business."
        },
        {
          id: 16,
          question: "What is depreciation?",
          options: [
            "Asset appreciation",
            "Allocating asset cost over its useful life",
            "Asset damage",
            "Price reduction"
          ],
          correctAnswer: 1,
          explanation: "Depreciation spreads the cost of a fixed asset over its useful life rather than expensing the entire cost when purchased."
        },
        {
          id: 17,
          question: "How handle loan payments?",
          options: [
            "Record only total payment",
            "Split between principal reduction and interest expense",
            "Ignore interest",
            "Record as income"
          ],
          correctAnswer: 1,
          explanation: "Split loan payments between principal (reducing loan balance) and interest (business expense) for accurate accounting."
        },
        {
          id: 18,
          question: "What common expense mistake to avoid?",
          options: [
            "Recording expenses",
            "Mixing personal and business expenses",
            "Paying bills",
            "Using credit cards"
          ],
          correctAnswer: 1,
          explanation: "Mixing personal and business expenses makes accounting difficult and can cause problems with tax deductions and reporting."
        },
        {
          id: 19,
          question: "Why review expenses regularly?",
          options: [
            "To increase spending",
            "To control costs and identify savings opportunities",
            "To delete records",
            "To change vendors constantly"
          ],
          correctAnswer: 1,
          explanation: "Regular expense review helps control costs, identify unnecessary spending, and find opportunities for savings."
        },
        {
          id: 20,
          question: "What are expense budgets for?",
          options: [
            "Limiting growth",
            "Planning and controlling business spending",
            "Reducing quality",
            "Employee restrictions"
          ],
          correctAnswer: 1,
          explanation: "Expense budgets help plan expected costs and provide benchmarks for controlling actual spending."
        }
      ]
    },
    {
      id: 4,
      title: "Bank Reconciliation and Transactions",
      completed: false,
      content: `# Matching Your Records with Bank Statements

## Understanding Bank Reconciliation
Bank reconciliation is the process of matching your QuickBooks records with your bank statements. This ensures your financial records are accurate and complete.

## Why Reconcile Regularly
Importance of regular reconciliation:
- **Error detection** - Find mistakes in recording transactions
- **Fraud prevention** - Identify unauthorized transactions
- **Accuracy assurance** - Ensure financial records are correct
- **Cash flow clarity** - Know your true cash position
- **Tax preparation** - Have accurate records for tax time

## The Reconciliation Process
Step-by-step reconciliation:
1. **Get bank statement** - Obtain current bank statement
2. **Enter opening balance** - Start with correct beginning balance
3. **Match transactions** - Check off matching transactions
4. **Investigate differences** - Resolve any discrepancies
5. **Complete reconciliation** - Finalize when records match

## Starting Reconciliation
Beginning the reconciliation process:
- **Account selection** - Choose which bank account to reconcile
- **Statement date** - Enter bank statement ending date
- **Beginning balance** - Verify starting balance matches
- **Ending balance** - Enter bank statement ending balance
- **Service charges** - Record any bank fees

## Matching Transactions
Comparing records with bank statement:
- **Check marks** - Mark transactions that match bank statement
- **Date matching** - Ensure dates are consistent
- **Amount verification** - Verify amounts are identical
- **Payee confirmation** - Confirm payee names match
- **Check number checking** - Verify check numbers

## Handling Differences
Resolving discrepancies:
- **Timing differences** - Transactions not yet cleared bank
- **Recording errors** - Mistakes in transaction entry
- **Bank errors** - Mistakes made by the bank
- **Missing transactions** - Transactions not recorded in QuickBooks
- **Duplicate entries** - Same transaction recorded twice

## Common Reconciliation Issues
Frequent problems and solutions:
- **Outstanding checks** - Checks written but not yet cashed
- **Deposits in transit** - Deposits made but not yet cleared
- **Bank fees** - Service charges not recorded
- **Interest income** - Bank interest not recorded
- **Transfers between accounts** - Internal transfers causing confusion

## Recording Bank Fees
Entering bank service charges:
- **Fee identification** - Identify all bank fees on statement
- **Expense account assignment** - Assign to appropriate expense account
- **Date recording** - Record fees with correct date
- **Memo addition** - Add description of fees
- **Reconciliation inclusion** - Include in current reconciliation

## Recording Interest Income
Entering bank interest earned:
- **Interest identification** - Identify interest on statement
- **Income account assignment** - Assign to interest income account
- **Date recording** - Record with correct date
- **Memo addition** - Add description
- **Reconciliation inclusion** - Include in current reconciliation

## Handling Outstanding Items
Managing uncleared transactions:
- **Check tracking** - Track checks not yet cashed
- **Deposit tracking** - Track deposits not yet cleared
- **Follow-up procedures** - Follow up on old outstanding items
- **Escheatment awareness** - Understand unclaimed property rules
- **Communication with recipients** - Contact check recipients if needed

## Reconciliation Reports
Reviewing reconciliation results:
- **Reconciliation report** - Summary of reconciliation
- **Discrepancy report** - Details of differences found
- **Previous reconciliation** - Compare with past reconciliations
- **Audit trail** - Review reconciliation history
- **Problem transaction list** - List of recurring issues

## Correcting Reconciliation Errors
Fixing mistakes in reconciliation:
- **Reopening reconciliation** - Reopen completed reconciliation if needed
- **Error correction** - Correct mistaken transactions
- **Adjustment entries** - Make adjusting entries if necessary
- **Documentation** - Document corrections made
- **Verification** - Verify corrections solve the problem

## Bank Feed Management
Using automated bank feeds:
- **Feed setup** - Connect QuickBooks to bank
- **Transaction download** - Download transactions automatically
- **Transaction review** - Review downloaded transactions
- **Categorization assistance** - Use suggested categorizations
- **Feed reconciliation** - Reconcile with bank feed data

## Multiple Bank Accounts
Reconciling several accounts:
- **Account order** - Establish reconciliation order
- **Transfer tracking** - Track transfers between accounts
- **Consistency maintenance** - Maintain consistent procedures
- **Inter-account reconciliation** - Reconcile inter-account transfers
- **Overall cash position** - Understand total cash across accounts

## Credit Card Reconciliation
Reconciling credit card statements:
- **Statement date** - Use credit card statement date
- **Balance verification** - Verify starting balance
- **Transaction matching** - Match charges and payments
- **Payment recording** - Record credit card payments
- **Interest and fees** - Record interest and penalty fees

## Petty Cash Reconciliation
Reconciling petty cash fund:
- **Fund counting** - Physically count petty cash
- **Receipt verification** - Verify receipts against cash spent
- **Replenishment recording** - Record replenishment of fund
- "**Expense categorization** - Categorize petty cash expenses
- **Variance investigation** - Investigate any cash shortages or overages

## Reconciliation Frequency
How often to reconcile:
- **Monthly** - Standard for most businesses
- **Weekly** - For high transaction volume businesses
- **Daily** - For businesses with tight cash control needs
- **Quarterly** - Minimum acceptable frequency
- **As needed** - Additional reconciliations when problems suspected

## Reconciliation Best Practices
Effective reconciliation procedures:
- **Timely completion** - Reconcile soon after statement date
- **Regular schedule** - Establish consistent reconciliation schedule
- **Documentation** - Keep reconciliation reports and notes
- **Review process** - Have someone review completed reconciliations
- **Problem resolution** - Resolve discrepancies promptly

## Common Reconciliation Mistakes
Errors to avoid:
- **Rushing process** - Not taking time to do carefully
- **Ignoring small differences** - Small discrepancies can indicate larger problems
- **Not reviewing old items** - Ignoring long-outstanding items
- **Skipping months** - Missing regular reconciliations
- **Poor documentation** - Not keeping adequate records

## Fraud Detection
Using reconciliation to prevent fraud:
- **Unauthorized transactions** - Look for unfamiliar transactions
- **Altered checks** - Check for check amount alterations
- **Duplicate payments** - Watch for same bill paid twice
- **Missing deposits** - Ensure all deposits are recorded
- **Unusual patterns** - Watch for unusual transaction patterns

## Technology Aids
Tools to help with reconciliation:
- **Bank feeds** - Automatic transaction downloads
- **Matching suggestions** - Software suggestions for matching
- **Rules setup** - Create rules for recurring transactions
- **Alert systems** - Notifications for unusual transactions
- **Reporting tools** - Custom reconciliation reports

## Reconciliation Completion
Finalizing the process:
- **Balance verification** - Ensure ending balances match
- **Report printing** - Print reconciliation report
- **Filing** - File report with bank statement
- **Backup** - Ensure reconciliation data is backed up
- **Next month preparation** - Prepare for next reconciliation`,
      quiz: [
        {
          id: 1,
          question: "What is bank reconciliation?",
          options: [
            "Changing banks",
            "Matching QuickBooks records with bank statements",
            "Bank loan application",
            "Opening new accounts"
          ],
          correctAnswer: 1,
          explanation: "Bank reconciliation is comparing your QuickBooks transaction records with your bank statement to ensure they match."
        },
        {
          id: 2,
          question: "Why reconcile bank accounts regularly?",
          options: [
            "To increase bank fees",
            "To detect errors and ensure accurate financial records",
            "To reduce bank balance",
            "To avoid banking"
          ],
          correctAnswer: 1,
          explanation: "Regular reconciliation helps find errors, prevent fraud, and ensure your financial records accurately reflect your actual cash position."
        },
        {
          id: 3,
          question: "What is the first step in reconciliation?",
          options: [
            "Delete old transactions",
            "Get current bank statement and verify beginning balance",
            "Change all amounts",
            "Create new accounts"
          ],
          correctAnswer: 1,
          explanation: "Start with your current bank statement and verify that the beginning balance in QuickBooks matches the bank's beginning balance."
        },
        {
          id: 4,
          question: "What are outstanding checks?",
          options: [
            "Excellent checks",
            "Checks written but not yet cashed by recipients",
            "Bank errors",
            "Duplicate checks"
          ],
          correctAnswer: 1,
          explanation: "Outstanding checks are those you've written and recorded in QuickBooks but haven't yet cleared your bank account."
        },
        {
          id: 5,
          question: "What are deposits in transit?",
          options: [
            "Lost deposits",
            "Deposits recorded in QuickBooks but not yet showing on bank statement",
            "Bank deposit errors",
            "Future deposits"
          ],
          correctAnswer: 1,
          explanation: "Deposits in transit are those you've recorded in QuickBooks but haven't yet cleared and appeared on your bank statement."
        },
        {
          id: 6,
          question: "How handle bank fees in reconciliation?",
          options: [
            "Ignore bank fees",
            "Record as expenses during reconciliation",
            "Charge to customers",
            "Deduct from taxes"
          ],
          correctAnswer: 1,
          explanation: "Bank fees should be recorded as expense transactions during reconciliation to account for all bank statement items."
        },
        {
          id: 7,
          question: "What is interest income in reconciliation?",
          options: [
            "Bank interest paid to you that needs recording",
            "Customer interest",
            "Loan interest",
            "Credit card interest"
          ],
          correctAnswer: 0,
          explanation: "Interest income is interest paid by the bank on your account that needs to be recorded as income during reconciliation."
        },
        {
          id: 8,
          question: "Why track outstanding items?",
          options: [
            "To increase work",
            "To follow up on uncleared checks and deposits",
            "To ignore them",
            "To delete them"
          ],
          correctAnswer: 1,
          explanation: "Tracking outstanding items helps identify checks that haven't been cashed and ensures all deposits are properly recorded."
        },
        {
          id: 9,
          question: "What are bank feeds?",
          options: [
            "Bank food",
            "Automatic download of transactions from bank to QuickBooks",
            "Bank advertisements",
            "Paper statements"
          ],
          correctAnswer: 1,
          explanation: "Bank feeds automatically download transactions from your bank into QuickBooks, simplifying data entry and reconciliation."
        },
        {
          id: 10,
          question: "How often should most businesses reconcile?",
          options: [
            "Yearly",
            "Monthly, soon after receiving bank statement",
            "Never",
            "Only when problems occur"
          ],
          correctAnswer: 1,
          explanation: "Most businesses should reconcile monthly, soon after receiving bank statements, to maintain accurate financial records."
        },
        {
          id: 11,
          question: "What common reconciliation mistake to avoid?",
          options: [
            "Reconciling regularly",
            "Ignoring small differences that could indicate larger problems",
            "Keeping records",
            "Using bank feeds"
          ],
          correctAnswer: 1,
          explanation: "Even small differences should be investigated as they may indicate larger problems like recording errors or unauthorized transactions."
        },
        {
          id: 12,
          question: "How can reconciliation help detect fraud?",
          options: [
            "By increasing fraud",
            "By identifying unauthorized or altered transactions",
            "By hiding transactions",
            "By deleting records"
          ],
          correctAnswer: 1,
          explanation: "Reconciliation helps detect fraud by revealing unauthorized transactions, altered checks, or missing deposits."
        },
        {
          id: 13,
          question: "What should you do with reconciliation reports?",
          options: [
            "Throw away immediately",
            "Print and file with bank statements for records",
            "Email to competitors",
            "Delete from computer"
          ],
          correctAnswer: 1,
          explanation: "Reconciliation reports should be printed and filed with corresponding bank statements as part of your financial records."
        },
        {
          id: 14,
          question: "How handle credit card reconciliation?",
          options: [
            "Same as bank accounts, matching charges and payments",
            "Ignore credit cards",
            "Only track cash",
            "Combine with bank accounts"
          ],
          correctAnswer: 0,
          explanation: "Credit card reconciliation follows similar process to bank accounts, matching charges, payments, and recording interest/fees."
        },
        {
          id: 15,
          question: "What is petty cash reconciliation?",
          options: [
            "Counting actual cash and matching to receipts",
            "Ignoring small cash",
            "Bank cash counting",
            "Customer cash handling"
          ],
          correctAnswer: 0,
          explanation: "Petty cash reconciliation involves physically counting the cash and matching it to receipts for expenses paid from the fund."
        },
        {
          id: 16,
          question: "Why verify beginning balance each month?",
          options: [
            "To start fresh",
            "Because last month's ending balance should equal this month's beginning balance",
            "To change amounts",
            "To reduce work"
          ],
          correctAnswer: 1,
          explanation: "Each month's beginning balance should equal the previous month's ending balance; verifying this catches previous errors."
        },
        {
          id: 17,
          question: "What are timing differences?",
          options: [
            "Clock errors",
            "Transactions recorded in different periods in QuickBooks vs bank",
            "Time zone issues",
            "Bank hours"
          ],
          correctAnswer: 1,
          explanation: "Timing differences occur when transactions are recorded in different accounting periods in QuickBooks versus the bank statement."
        },
        {
          id: 18,
          question: "How correct reconciliation errors?",
          options: [
            "Ignore errors",
            "Reopen reconciliation, correct transactions, and complete again",
            "Start new company file",
            "Change bank accounts"
          ],
          correctAnswer: 1,
          explanation: "To correct errors, reopen the reconciliation, fix the incorrect transactions, then complete the reconciliation process again."
        },
        {
          id: 19,
          question: "What is the reconciliation report?",
          options: [
            "Bank advertisement",
            "Summary showing how you reconciled the account",
            "Marketing report",
            "Sales report"
          ],
          correctAnswer: 1,
          explanation: "The reconciliation report documents how you reconciled the account, showing matched transactions and any adjustments made."
        },
        {
          id: 20,
          question: "Why have someone review reconciliations?",
          options: [
            "To create more work",
            "To provide oversight and catch potential errors or fraud",
            "To share personal information",
            "To slow down process"
          ],
          correctAnswer: 1,
          explanation: "Having another person review reconciliations provides oversight, helps catch errors, and can deter or detect fraudulent activity."
        }
      ]
    },
    {
      id: 5,
      title: "Financial Reports and Analysis",
      completed: false,
      content: `# Understanding Your Business Finances

## Importance of Financial Reports
Financial reports help you understand your business performance, make informed decisions, and meet legal requirements. QuickBooks generates various reports to give you insights into your business finances.

## Basic Financial Statements
Three key financial statements:
- **Profit and Loss Statement** - Shows income, expenses, and profit
- **Balance Sheet** - Shows assets, liabilities, and equity
- **Cash Flow Statement** - Shows cash coming in and going out

## Profit and Loss Statement
Also called Income Statement:
- **Revenue section** - All income from sales and other sources
- **Cost of Goods Sold** - Direct costs of producing goods sold
- **Gross Profit** - Revenue minus cost of goods sold
- **Operating Expenses** - Business running costs
- **Net Income** - Final profit or loss after all expenses

## Balance Sheet Basics
Snapshot of financial position:
- **Assets** - What the business owns (current and fixed assets)
- **Liabilities** - What the business owes (current and long-term)
- **Equity** - Owner's investment and retained earnings
- **Accounting equation** - Assets = Liabilities + Equity
- **Date specific** - Shows position at specific date

## Cash Flow Statement
Tracking cash movements:
- **Operating activities** - Cash from main business operations
- **Investing activities** - Cash from buying/selling assets
- **Financing activities** - Cash from loans and owner investments
- **Net cash change** - Total cash increase or decrease
- **Ending cash balance** - Final cash position

## Accounts Receivable Reports
Understanding money owed to you:
- **Aging summary** - Shows how long invoices have been unpaid
- **Open invoices** - List of all unpaid invoices
- **Customer balance summary** - Total owed by each customer
- **Collections report** - Helps with collecting overdue payments
- **Payment history** - Shows customer payment patterns

## Accounts Payable Reports
Understanding money you owe:
- **Aging summary** - Shows how long bills have been unpaid
- **Unpaid bills** - List of all outstanding bills
- **Vendor balance summary** - Total owed to each vendor
- **Cash requirements** - Shows upcoming payment needs
- **Payment history** - Shows your payment patterns to vendors

## Sales Reports
Analyzing your income:
- **Sales by customer** - Which customers generate most revenue
- **Sales by item** - Which products/services sell best
- **Sales by class** - Revenue by department or project
- **Sales tax liability** - How much sales tax you've collected
- **Income by month** - Monthly revenue trends

## Expense Reports
Analyzing your spending:
- **Expense by vendor** - Who you spend most money with
- **Expense by account** - Spending by category
- **Expense by class** - Costs by department or project
- **Budget vs actual** - Compare spending to budget
- **Expense trends** - Spending patterns over time

## Budget Reports
Comparing actual to planned:
- **Budget overview** - Summary of budget vs actual
- **Budget vs actual by account** - Detailed comparison by account
- **Profit and loss budget performance** - Income/expense comparison
- **Budget creation reports** - Reports to help create budgets
- **Forecast reports** - Future financial projections

## Inventory Reports
For businesses with products:
- **Inventory valuation summary** - Value of inventory on hand
- **Inventory stock status** - Quantity available of each item
- **Inventory cost adjustment** - Reports on inventory value changes
- **Purchases by vendor** - What you buy from each supplier
- **Inventory turnover** - How quickly inventory sells

## Payroll Reports
For businesses with employees:
- **Payroll summary** - Total payroll costs
- **Employee earnings summary** - What each employee earned
- **Payroll liability balance** - Taxes and deductions owed
- **Workers compensation** - Reports for insurance
- **Payroll tax forms** - Forms for tax filing

## Tax Reports
Preparing for tax time:
- **Sales tax liability** - Sales tax collected and owed
- **Tax detail report** - Detailed tax transactions
- **1099 reports** - Reports for contractor payments
- **Income tax preparation** - Reports for income tax filing
- **Deduction summary** - Summary of tax deductions

## Customizing Reports
Making reports work for you:
- **Date ranges** - Change report periods
- **Columns** - Add or remove data columns
- **Filters** - Filter data by specific criteria
- **Sorting** - Change how data is sorted
- **Formatting** - Change appearance of reports

## Memorizing Reports
Saving report settings:
- **Memorize function** - Save customized report settings
- **Report groups** - Organize memorized reports
- **Quick access** - Access memorized reports easily
- **Template creation** - Create report templates
- **Sharing settings** - Share report setups with others

## Exporting Reports
Taking reports out of QuickBooks:
- **PDF export** - Create PDF files of reports
- **Excel export** - Export to spreadsheet format
- **Email sending** - Email reports directly from QuickBooks
- **Printing** - Print paper copies of reports
- **Cloud sharing** - Share reports via cloud services

## Report Interpretation
Understanding what reports tell you:
- **Trend analysis** - Looking at changes over time
- **Ratio analysis** - Calculating financial ratios
- **Comparison analysis** - Comparing to budget or previous periods
- **Variance analysis** - Understanding differences from expected
- **Benchmarking** - Comparing to industry standards

## Key Performance Indicators
Important metrics to track:
- **Gross profit margin** - Profit after direct costs
- **Net profit margin** - Final profit percentage
- **Current ratio** - Ability to pay short-term debts
- **Debt-to-equity ratio** - Balance of debt vs owner investment
- **Accounts receivable turnover** - How quickly customers pay

## Regular Report Review
Establishing review routines:
- **Daily reviews** - Cash position and daily sales
- **Weekly reviews** - Key performance indicators
- **Monthly reviews** - Full financial statements
- **Quarterly reviews** - Trends and comparisons
- **Annual reviews** - Year-end analysis and planning

## Report Accuracy
Ensuring reliable reports:
- **Reconciliation verification** - Ensure accounts are reconciled
- **Transaction review** - Check for recording errors
- **Account balance review** - Verify account balances
- **Comparative analysis** - Compare to previous periods
- **External verification** - Compare to bank and other records

## Common Report Errors
Mistakes to watch for:
- **Incorrect date ranges** - Wrong period selected
- **Missing transactions** - Transactions not recorded
- **Duplicate entries** - Same transaction recorded twice
- **Wrong account assignments** - Transactions in wrong accounts
- **Unreconciled accounts** - Accounts not reconciled recently

## Using Reports for Decision Making
Applying report insights:
- **Pricing decisions** - Adjust prices based on profit margins
- **Cost control** - Identify areas to reduce expenses
- **Cash flow management** - Plan for cash needs
- **Growth planning** - Identify opportunities for expansion
- **Financing needs** - Determine if additional funding needed

## Report Security
Protecting financial information:
- **Access controls** - Limit who can view reports
- **Data encryption** - Protect data in transit and storage
- **Secure sharing** - Safe methods for sharing reports
- **Backup protection** - Ensure reports are backed up
- **Audit trails** - Track who accessed reports

## QuickBooks Report Center
Finding and using reports:
- **Report categories** - Organized by type and purpose
- **Search function** - Find specific reports quickly
- **Favorites** - Mark frequently used reports
- **Recent reports** - Quick access to recently used reports
- **Help resources** - Guidance on using reports`,
      quiz: [
        {
          id: 1,
          question: "What are the three main financial statements?",
          options: [
            "Sales, expenses, bank statements",
            "Profit and Loss, Balance Sheet, Cash Flow Statement",
            "Invoices, bills, checks",
            "Budget, forecast, actual"
          ],
          correctAnswer: 1,
          explanation: "The three main financial statements are Profit and Loss (income statement), Balance Sheet, and Cash Flow Statement."
        },
        {
          id: 2,
          question: "What does a Profit and Loss Statement show?",
          options: [
            "Only assets",
            "Income, expenses, and profit or loss over a period",
            "Only cash balance",
            "Only customer list"
          ],
          correctAnswer: 1,
          explanation: "The Profit and Loss Statement shows revenue, expenses, and resulting profit or loss during a specific time period."
        },
        {
          id: 3,
          question: "What is a Balance Sheet?",
          options: [
            "Sheet for balancing",
            "Snapshot of assets, liabilities, and equity at a point in time",
            "Daily transaction list",
            "Bank statement"
          ],
          correctAnswer: 1,
          explanation: "A Balance Sheet shows what a business owns (assets), owes (liabilities), and the owner's investment (equity) at a specific date."
        },
        {
          id: 4,
          question: "What does accounts receivable aging show?",
          options: [
            "Customer ages",
            "How long invoices have been unpaid, grouped by age",
            "Old customer records",
            "Historical sales"
          ],
          correctAnswer: 1,
          explanation: "Accounts receivable aging shows unpaid invoices grouped by how long they've been outstanding (current, 30, 60, 90+ days)."
        },
        {
          id: 5,
          question: "Why use sales by customer reports?",
          options: [
            "To contact customers",
            "To identify which customers generate most revenue",
            "To get customer addresses",
            "To delete customers"
          ],
          correctAnswer: 1,
          explanation: "Sales by customer reports help identify your best customers for relationship management and sales focus."
        },
        {
          id: 6,
          question: "What are budget vs actual reports?",
          options: [
            "Future predictions",
            "Comparisons of planned spending to actual spending",
            "Historical comparisons",
            "Competitor analysis"
          ],
          correctAnswer: 1,
          explanation: "Budget vs actual reports compare what you planned to spend (budget) with what you actually spent, showing variances."
        },
        {
          id: 7,
          question: "How customize reports in QuickBooks?",
          options: [
            "Cannot customize",
            "Change date ranges, columns, filters, and sorting",
            "Only change colors",
            "Only print differently"
          ],
          correctAnswer: 1,
          explanation: "QuickBooks allows customization of date ranges, columns displayed, filters for specific data, and sorting options."
        },
        {
          id: 8,
          question: "What is the memorize function for reports?",
          options: [
            "Memory test",
            "Saving customized report settings for quick future access",
            "Deleting reports",
            "Changing all reports"
          ],
          correctAnswer: 1,
          explanation: "The memorize function saves your customized report settings so you can run the same report quickly in the future."
        },
        {
          id: 9,
          question: "Why export reports to Excel?",
          options: [
            "To lose data",
            "For additional analysis, formatting, or sharing outside QuickBooks",
            "To delete from QuickBooks",
            "To reduce file size"
          ],
          correctAnswer: 1,
          explanation: "Exporting to Excel allows additional analysis, custom formatting, calculations, and sharing with people who don't have QuickBooks."
        },
        {
          id: 10,
          question: "What is gross profit margin?",
          options: [
            "Total sales",
            "Profit after direct costs, as percentage of revenue",
            "Net profit",
            "Expense percentage"
          ],
          correctAnswer: 1,
          explanation: "Gross profit margin is revenue minus cost of goods sold, expressed as a percentage of revenue, showing basic profitability."
        },
        {
          id: 11,
          question: "How often review financial reports?",
          options: [
            "Yearly only",
            "Regularly - daily cash, weekly KPIs, monthly full review",
            "Never",
            "When problems occur"
          ],
          correctAnswer: 1,
          explanation: "Regular review at different frequencies (daily cash, weekly key metrics, monthly full statements) provides ongoing financial awareness."
        },
        {
          id: 12,
          question: "What common report error to avoid?",
          options: [
            "Creating reports",
            "Using incorrect date ranges that don't match intended period",
            "Viewing reports",
            "Saving reports"
          ],
          correctAnswer: 1,
          explanation: "Incorrect date ranges can make reports misleading; always verify the period covered matches your intended analysis period."
        },
        {
          id: 13,
          question: "What is accounts payable aging?",
          options: [
            "Vendor ages",
            "Report showing how long bills have been unpaid",
            "Old vendor records",
            "Historical purchases"
          ],
          correctAnswer: 1,
          explanation: "Accounts payable aging shows bills grouped by how long they've been outstanding, helping with cash flow management."
        },
        {
          id: 14,
          question: "What are key performance indicators (KPIs)?",
          options: [
            "Employee reviews",
            "Important metrics that measure business performance",
            "Customer complaints",
            "Bank fees"
          ],
          correctAnswer: 1,
          explanation: "KPIs are measurable values that show how effectively a business is achieving key objectives, like profit margins or turnover ratios."
        },
        {
          id: 15,
          question: "Why use inventory reports?",
          options: [
            "To count items",
            "To track stock levels, values, and turnover for product businesses",
            "To ignore inventory",
            "To increase inventory"
          ],
          correctAnswer: 1,
          explanation: "Inventory reports help manage stock levels, understand inventory value, and analyze how quickly products sell."
        },
        {
          id: 16,
          question: "What is a cash flow statement?",
          options: [
            "Bank statement",
            "Report showing cash inflows and outflows from operations, investing, financing",
            "Check register",
            "Deposit slip"
          ],
          correctAnswer: 1,
          explanation: "The cash flow statement shows cash generated and used by operating, investing, and financing activities during a period."
        },
        {
          id: 17,
          question: "How ensure report accuracy?",
          options: [
            "Guess numbers",
            "Verify reconciled accounts and review transactions regularly",
            "Change numbers",
            "Ignore discrepancies"
          ],
          correctAnswer: 1,
          explanation: "Report accuracy depends on having reconciled accounts and regularly reviewing transactions for errors before running reports."
        },
        {
          id: 18,
          question: "What are sales tax liability reports?",
          options: [
            "Customer tax forms",
            "Reports showing sales tax collected and owed to authorities",
            "Employee taxes",
            "Income tax"
          ],
          correctAnswer: 1,
          explanation: "Sales tax liability reports show how much sales tax you've collected from customers and owe to tax authorities."
        },
        {
          id: 19,
          question: "Why memorize frequently used reports?",
          options: [
            "To forget them",
            "To save time with quick access to regularly needed information",
            "To delete them",
            "To change them constantly"
          ],
          correctAnswer: 1,
          explanation: "Memorizing frequently used reports saves time by providing quick access to regularly needed financial information."
        },
        {
          id: 20,
          question: "How use reports for decision making?",
          options: [
            "Ignore reports",
            "Analyze trends, compare to goals, and identify improvement areas",
            "Follow random choices",
            "Copy competitors"
          ],
          correctAnswer: 1,
          explanation: "Use reports to analyze trends, compare actual performance to goals, and identify areas needing improvement or investment."
        }
      ]
    },
    {
      id: 6,
      title: "Month-End Closing and Maintenance",
      completed: false,
      content: `# Regular Accounting Maintenance

## Understanding Month-End Closing
Month-end closing is the process of finalizing accounting records for the month. It ensures accurate financial reporting and prepares your books for the next period.

## Importance of Regular Closing
Benefits of monthly closing:
- **Accurate reporting** - Ensures financial statements are correct
- **Timely decision making** - Provides current information for decisions
- **Tax preparation** - Makes tax time easier with organized records
- **Error detection** - Catches mistakes early
- **Audit readiness** - Keeps books ready for review

## Month-End Closing Checklist
Step-by-step closing process:
1. **Complete all transactions** - Enter all income and expenses
2. **Reconcile accounts** - Match bank and credit card statements
3. **Review accounts receivable** - Follow up on overdue invoices
4. **Review accounts payable** - Ensure bills are paid or scheduled
5. **Adjust inventory** - Update inventory counts if applicable
6. **Record depreciation** - Enter depreciation expenses
7. **Review financial statements** - Check accuracy of reports
8. **Back up data** - Create backup of QuickBooks file
9. **Close the period** - Lock previous month if using closing date
10. **Plan for next month** - Set goals and tasks for coming month

## Transaction Completion
Ensuring all transactions are recorded:
- **Sales recording** - All sales entered and deposits recorded
- **Expense recording** - All expenses entered and bills paid
- **Bank transactions** - All bank activity recorded
- **Credit card transactions** - All credit card charges entered
- **Payroll entries** - All payroll transactions completed

## Account Reconciliation Review
Verifying all accounts are reconciled:
- **Bank accounts** - All checking and savings accounts
- **Credit cards** - All business credit cards
- **Loan accounts** - Any business loans
- **Asset accounts** - Major asset accounts if applicable
- **Liability accounts** - Key liability accounts

## Accounts Receivable Review
Managing customer balances:
- **Aging report review** - Check overdue invoices
- **Collection follow-up** - Contact customers with overdue payments
- **Credit memo review** - Verify credit memos are properly applied
- **Bad debt evaluation** - Consider uncollectible accounts
- **Payment application** - Ensure payments applied correctly

## Accounts Payable Review
Managing vendor balances:
- **Aging report review** - Check overdue bills
- **Payment scheduling** - Schedule upcoming bill payments
- **Vendor statement reconciliation** - Match with vendor statements
- **Credit review** - Check for vendor credits
- **Duplicate payment check** - Verify no duplicate payments

## Inventory Adjustments
For product-based businesses:
- **Physical count** - Count actual inventory on hand
- **System comparison** - Compare to QuickBooks records
- **Adjustment entries** - Make inventory adjustment entries
- **Variance analysis** - Analyze inventory differences
- **Theft/loss recording** - Record any inventory shrinkage

## Depreciation Entries
Recording asset depreciation:
- **Depreciation schedule review** - Check depreciation calculations
- **Monthly entry** - Record monthly depreciation expense
- **Asset review** - Verify all assets being depreciated
- **Disposal recording** - Record any asset disposals
- **Accumulated depreciation update** - Update depreciation totals

## Accrual Adjustments
For accrual basis accounting:
- **Accrued revenue** - Record revenue earned but not invoiced
- **Accrued expenses** - Record expenses incurred but not billed
- **Prepaid expenses** - Adjust prepaid expense accounts
- **Unearned revenue** - Adjust customer deposits not yet earned
- **Other accruals** - Any other necessary accrual entries

## Financial Statement Review
Checking report accuracy:
- **Profit and loss review** - Verify income and expense amounts
- **Balance sheet review** - Verify asset, liability, equity balances
- **Cash flow review** - Verify cash flow statement accuracy
- **Comparative analysis** - Compare to previous periods
- **Variance investigation** - Investigate significant variances

## Error Correction
Fixing mistakes found:
- **Journal entries** - Make correcting journal entries
- **Transaction edits** - Edit incorrect transactions
- **Account changes** - Move transactions to correct accounts
- **Date corrections** - Correct transaction dates
- **Amount corrections** - Correct transaction amounts

## Backup Procedures
Protecting your data:
- **Regular backups** - Create backup copies regularly
- **Multiple locations** - Store backups in different places
- **Backup verification** - Verify backups can be restored
- **Archive copies** - Keep historical backup archives
- **Disaster recovery plan** - Have plan for data loss

## Period Closing
Locking previous period:
- **Closing date setting** - Set closing date for completed period
- **Password protection** - Add password to prevent changes
- **Closing report** - Generate period closing report
- **Adjustment policy** - Establish policy for after-closing adjustments
- **Reopening procedure** - Know how to reopen if needed

## Audit Trail Review
Checking transaction history:
- **Change report** - Review changes made during period
- **Deleted transaction report** - Review deleted transactions
- **Voided transaction report** - Review voided transactions
- "**User activity report** - Review user activities
- **Exception reporting** - Look for unusual activities

## Performance Analysis
Evaluating month results:
- **Goal comparison** - Compare to monthly goals
- **Budget variance** - Analyze differences from budget
- **Trend analysis** - Identify trends over time
- **Problem identification** - Identify areas needing improvement
- **Success recognition** - Recognize what went well

## Planning for Next Month
Preparing for future:
- **Goal setting** - Set financial goals for next month
- **Task planning** - Plan accounting tasks for next month
- **Budget updating** - Update budgets if needed
- "**Process improvement** - Identify process improvements
- **Training needs** - Identify any training needs

## Communication and Reporting
Sharing financial information:
- **Owner reporting** - Report results to business owner
- **Management reporting** - Report to management team
- "**Board reporting** - Report to board if applicable
- **Stakeholder communication** - Communicate with other stakeholders
- **Documentation** - Document closing process and findings

## Compliance Verification
Ensuring regulatory compliance:
- **Tax compliance** - Verify tax obligations met
- "**Regulatory requirements** - Check other regulatory requirements
- "**Licensing verification** - Verify business licenses current
- **Insurance review** - Review insurance coverage
- **Contract compliance** - Verify contract obligations met

## Common Closing Problems
Issues to watch for:
- **Incomplete transactions** - Missing income or expenses
- "**Unreconciled accounts** - Accounts not reconciled
- **Outstanding items** - Old outstanding checks or deposits
- **Data corruption** - QuickBooks file problems
- **Time constraints** - Rushing through closing process

## Closing Best Practices
Effective closing procedures:
- **Consistent schedule** - Close at same time each month
- **Adequate time** - Allow enough time for thorough closing
- **Checklist use** - Use closing checklist consistently
- **Documentation** - Document closing steps and findings
- **Continuous improvement** - Regularly improve closing process

## QuickBooks Maintenance
Software maintenance tasks:
- **Update installation** - Install QuickBooks updates
- **File verification** - Verify QuickBooks data file
- **Company file cleanup** - Clean up old data if needed
- **User review** - Review and update user access
- **Performance optimization** - Optimize QuickBooks performance

## Training and Development
Improving accounting skills:
- **Skill assessment** - Identify skill gaps
- **Training planning** - Plan training to address gaps
- **Cross-training** - Train others on closing procedures
- **Professional development** - Pursue accounting education
- **Certification maintenance** - Maintain accounting certifications

## Month-End Closing Automation
Using technology to help:
- **Recurring transactions** - Set up recurring entries
- **Bank feeds** - Use automatic transaction downloads
- **Report memorization** - Memorize frequently used reports
- **Alert systems** - Set up closing reminder alerts
- **Template use** - Use templates for consistency

## Year-End Closing Considerations
Special year-end tasks:
- **Annual reports** - Prepare year-end financial statements
- **Tax preparation** - Gather information for tax returns
- "**Inventory full count** - Complete full physical inventory
- **Fixed asset review** - Comprehensive fixed asset review
- **Budget creation** - Create budget for next year`,
      quiz: [
        {
          id: 1,
          question: "What is month-end closing?",
          options: [
            "Closing business for month",
            "Process of finalizing accounting records for the month",
            "Bank closing",
            "Employee vacation"
          ],
          correctAnswer: 1,
          explanation: "Month-end closing is the accounting process of completing all transactions, reconciling accounts, and preparing financial reports for the month."
        },
        {
          id: 2,
          question: "Why perform monthly closing?",
          options: [
            "To create work",
            "For accurate financial reporting and timely decision making",
            "To delete records",
            "To change systems"
          ],
          correctAnswer: 1,
          explanation: "Monthly closing ensures accurate financial records, provides current information for decisions, and makes tax preparation easier."
        },
        {
          id: 3,
          question: "What is first in closing checklist?",
          options: [
            "Delete old data",
            "Complete all transactions for the month",
            "Change all dates",
            "Create new accounts"
          ],
          correctAnswer: 1,
          explanation: "First ensure all income, expenses, and other transactions for the month are completely recorded in QuickBooks."
        },
        {
          id: 4,
          question: "Why reconcile all accounts during closing?",
          options: [
            "To increase balances",
            "To ensure QuickBooks matches bank and other statements",
            "To reduce balances",
            "To avoid banking"
          ],
          correctAnswer: 1,
          explanation: "Reconciling all accounts verifies that QuickBooks records match external statements, ensuring accuracy."
        },
        {
          id: 5,
          question: "What review in accounts receivable?",
          options: [
            "Customer names",
            "Overdue invoices and follow up on collections",
            "Customer addresses",
            "Sales only"
          ],
          correctAnswer: 1,
          explanation: "Review accounts receivable aging to identify overdue invoices and follow up with customers for payment."
        },
        {
          id: 6,
          question: "What are inventory adjustments?",
          options: [
            "Price changes",
            "Entries to correct inventory counts to match physical counts",
            "Customer returns only",
            "Supplier changes"
          ],
          correctAnswer: 1,
          explanation: "Inventory adjustment entries correct QuickBooks inventory quantities to match actual physical counts."
        },
        {
          id: 7,
          question: "What is depreciation?",
          options: [
            "Price reduction",
            "Allocating cost of assets over their useful life",
            "Asset damage",
            "Value increase"
          ],
          correctAnswer: 1,
          explanation: "Depreciation spreads the cost of long-term assets over their useful life through monthly expense entries."
        },
        {
          id: 8,
          question: "Why review financial statements during closing?",
          options: [
            "To admire work",
            "To verify accuracy and understand monthly performance",
            "To delete them",
            "To share with competitors"
          ],
          correctAnswer: 1,
          explanation: "Reviewing financial statements verifies accuracy and provides understanding of the month's business performance."
        },
        {
          id: 9,
          question: "Why create backups during closing?",
          options: [
            "To waste storage",
            "To protect financial data from loss or corruption",
            "To slow computer",
            "To delete later"
          ],
          correctAnswer: 1,
          explanation: "Backups protect your financial data in case of computer problems, data corruption, or accidental deletion."
        },
        {
          id: 10,
          question: "What is period closing in QuickBooks?",
          options: [
            "Closing business",
            "Setting closing date to prevent changes to closed period",
            "Deleting old data",
            "Starting new year"
          ],
          correctAnswer: 1,
          explanation: "Period closing sets a closing date and optionally a password to prevent changes to transactions in completed accounting periods."
        },
        {
          id: 11,
          question: "What review in audit trail?",
          options: [
            "Employee travel",
            "Transaction changes, deletions, and voids during period",
            "Sales only",
            "Bank statements"
          ],
          correctAnswer: 1,
          explanation: "The audit trail shows all changes, deletions, and voids made during the period, helping detect errors or unauthorized changes."
        },
        {
          id: 12,
          question: "Why analyze performance during closing?",
          options: [
            "To criticize",
            "To evaluate results and plan improvements for next month",
            "To ignore performance",
            "To reduce goals"
          ],
          correctAnswer: 1,
          explanation: "Performance analysis evaluates month results compared to goals and identifies improvements for the coming month."
        },
        {
          id: 13,
          question: "What plan during closing for next month?",
          options: [
            "Vacations",
            "Financial goals and accounting tasks for coming month",
            "Employee parties",
            "System changes"
          ],
          correctAnswer: 1,
          explanation: "Planning for next month includes setting financial goals and scheduling accounting tasks for the coming period."
        },
        {
          id: 14,
          question: "What are accrual adjustments?",
          options: [
            "Accident reports",
            "Entries for revenue earned or expenses incurred but not yet recorded",
            "Employee accruals",
            "Bank errors"
          ],
          correctAnswer: 1,
          explanation: "Accrual adjustments record revenue earned but not yet billed and expenses incurred but not yet paid for accrual basis accounting."
        },
        {
          id: 15,
          question: "Why verify compliance during closing?",
          options: [
            "To avoid regulations",
            "To ensure business meets tax and regulatory requirements",
            "To ignore laws",
            "To increase penalties"
          ],
          correctAnswer: 1,
          explanation: "Compliance verification ensures the business meets tax filing, payment, and other regulatory requirements."
        },
        {
          id: 16,
          question: "What common closing problem?",
          options: [
            "Too much time",
            "Incomplete transactions or unreconciled accounts",
            "Perfect records",
            "No work needed"
          ],
          correctAnswer: 1,
          explanation: "Common problems include incomplete transaction recording and accounts not reconciled before closing."
        },
        {
          id: 17,
          question: "What are closing best practices?",
          options: [
            "Rushing through",
            "Consistent schedule, adequate time, checklist use",
            "Skipping steps",
            "Working alone"
          ],
          correctAnswer: 1,
          explanation: "Best practices include consistent timing, allowing adequate time, using checklists, and thorough documentation."
        },
        {
          id: 18,
          question: "Why perform QuickBooks maintenance?",
          options: [
            "To break software",
            "To keep software updated and data file healthy",
            "To lose data",
            "To change colors"
          ],
          correctAnswer: 1,
          explanation: "Regular maintenance including updates and file verification keeps QuickBooks running properly and data secure."
        },
        {
          id: 19,
          question: "How use automation in closing?",
          options: [
            "To avoid work",
            "With recurring transactions, bank feeds, and memorized reports",
            "To delete automation",
            "To increase manual work"
          ],
          correctAnswer: 1,
          explanation: "Automation tools like recurring transactions, bank feeds, and memorized reports save time and increase accuracy."
        },
        {
          id: 20,
          question: "What special for year-end closing?",
          options: [
            "Nothing special",
            "Annual reports, tax preparation, full inventory count",
            "Ignore everything",
            "Start over"
          ],
          correctAnswer: 1,
          explanation: "Year-end closing includes annual financial statements, tax preparation, full physical inventory counts, and budget creation."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE - 40 Questions
  finalExam: {
    title: "QuickBooks Accounting Certificate Final Exam",
    description: "Comprehensive examination covering all 6 modules of QuickBooks Accounting Certificate course",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is QuickBooks primarily used for?",
        options: [
          "Writing business plans",
          "Small business accounting and financial management",
          "Creating websites",
          "Managing employee schedules"
        ],
        correctAnswer: 1,
        explanation: "QuickBooks is accounting software designed to help small businesses manage finances including income, expenses, invoices, and reports."
      },
      {
        id: 2,
        question: "What is the Chart of Accounts?",
        options: [
          "Customer contact list",
          "Organization system for financial accounts like assets and expenses",
          "Product price list",
          "Employee schedule"
        ],
        correctAnswer: 1,
        explanation: "The Chart of Accounts organizes all financial accounts into categories like assets, liabilities, income, and expenses."
      },
      {
        id: 3,
        question: "When should you use a sales receipt instead of an invoice?",
        options: [
          "For monthly service billing",
          "For immediate payments like retail sales",
          "For customer estimates",
          "For recording expenses"
        ],
        correctAnswer: 1,
        explanation: "Use sales receipts for immediate payments where customer pays at time of purchase, such as retail or in-person sales."
      },
      {
        id: 4,
        question: "What is an estimate in QuickBooks?",
        options: [
          "Final bill",
          "Quote or proposal for work before it begins",
          "Sales receipt",
          "Expense report"
        ],
        correctAnswer: 1,
        explanation: "An estimate is a quote or proposal showing expected costs before work begins, which can later be converted to an invoice."
      },
      {
        id: 5,
        question: "When should you enter bills in QuickBooks?",
        options: [
          "After paying them",
          "When you receive them from vendors, before payment",
          "At year end only",
          "When customers pay"
        ],
        correctAnswer: 1,
        explanation: "Enter bills when you receive them from vendors to track what you owe, then pay them by the due date."
      },
      {
        id: 6,
        question: "What are recurring expenses?",
        options: [
          "One-time purchases",
          "Regular repeating expenses like rent or utilities",
          "Unexpected costs",
          "Customer refunds"
        ],
        correctAnswer: 1,
        explanation: "Recurring expenses repeat regularly, such as monthly rent, utilities, or subscription services."
      },
      {
        id: 7,
        question: "What is bank reconciliation?",
        options: [
          "Changing banks",
          "Matching QuickBooks records with bank statements",
          "Bank loan application",
          "Opening new accounts"
        ],
        correctAnswer: 1,
        explanation: "Bank reconciliation is comparing your QuickBooks transaction records with your bank statement to ensure they match."
      },
      {
        id: 8,
        question: "What are outstanding checks?",
        options: [
          "Excellent checks",
          "Checks written but not yet cashed by recipients",
          "Bank errors",
          "Duplicate checks"
        ],
        correctAnswer: 1,
        explanation: "Outstanding checks are those you've written and recorded in QuickBooks but haven't yet cleared your bank account."
      },
      {
        id: 9,
        question: "What are the three main financial statements?",
        options: [
          "Sales, expenses, bank statements",
          "Profit and Loss, Balance Sheet, Cash Flow Statement",
          "Invoices, bills, checks",
          "Budget, forecast, actual"
        ],
        correctAnswer: 1,
        explanation: "The three main financial statements are Profit and Loss (income statement), Balance Sheet, and Cash Flow Statement."
      },
      {
        id: 10,
        question: "What does a Profit and Loss Statement show?",
        options: [
          "Only assets",
          "Income, expenses, and profit or loss over a period",
          "Only cash balance",
          "Only customer list"
        ],
        correctAnswer: 1,
        explanation: "The Profit and Loss Statement shows revenue, expenses, and resulting profit or loss during a specific time period."
      },
      {
        id: 11,
        question: "What is month-end closing?",
        options: [
          "Closing business for month",
          "Process of finalizing accounting records for the month",
          "Bank closing",
          "Employee vacation"
        ],
        correctAnswer: 1,
        explanation: "Month-end closing is the accounting process of completing all transactions, reconciling accounts, and preparing reports."
      },
      {
        id: 12,
        question: "Why perform monthly closing?",
        options: [
          "To create work",
          "For accurate financial reporting and timely decision making",
          "To delete records",
          "To change systems"
        ],
        correctAnswer: 1,
        explanation: "Monthly closing ensures accurate financial records, provides current information for decisions, and makes tax preparation easier."
      },
      {
        id: 13,
        question: "What are assets in accounting?",
        options: [
          "Things your business owes",
          "Things your business owns, like cash and equipment",
          "Business expenses",
          "Customer debts"
        ],
        correctAnswer: 1,
        explanation: "Assets are resources owned by the business that have economic value, such as cash, inventory, and equipment."
      },
      {
        id: 14,
        question: "What should you set up first in QuickBooks?",
        options: [
          "Monthly reports",
          "Company file with business information",
          "Customer invoices",
          "Employee payroll"
        ],
        correctAnswer: 1,
        explanation: "The first step is creating your company file with accurate business information, industry type, and fiscal year start."
      },
      {
        id: 15,
        question: "How do you record a customer payment on an invoice?",
        options: [
          "Delete the invoice",
          "Use the receive payment function to apply payment to specific invoice",
          "Create new invoice",
          "Ignore the payment"
        ],
        correctAnswer: 1,
        explanation: "Use the Receive Payment function to record customer payments and apply them to specific outstanding invoices."
      },
      {
        id: 16,
        question: "What are recurring transactions?",
        options: [
          "One-time sales",
          "Regular repeating transactions like monthly invoices",
          "Accidental transactions",
          "Deleted transactions"
        ],
        correctAnswer: 1,
        explanation: "Recurring transactions are set up to repeat automatically on a schedule, such as monthly invoices for regular clients."
      },
      {
        id: 17,
        question: "Why categorize expenses correctly?",
        options: [
          "To make reports pretty",
          "For accurate financial reports and tax deductions",
          "To confuse bookkeepers",
          "To increase expenses"
        ],
        correctAnswer: 1,
        explanation: "Correct categorization ensures accurate financial reporting and maximizes legitimate tax deductions."
      },
      {
        id: 18,
        question: "What are purchase orders for?",
        options: [
          "Customer orders",
          "Formal requests to suppliers for goods or services",
          "Sales receipts",
          "Bank orders"
        ],
        correctAnswer: 1,
        explanation: "Purchase orders are formal documents sent to suppliers specifying what you want to purchase and at what price."
      },
      {
        id: 19,
        question: "Why reconcile bank accounts regularly?",
        options: [
          "To increase bank fees",
          "To detect errors and ensure accurate financial records",
          "To reduce bank balance",
          "To avoid banking"
        ],
        correctAnswer: 1,
        explanation: "Regular reconciliation helps find errors, prevent fraud, and ensure your financial records accurately reflect actual cash."
      },
      {
        id: 20,
        question: "What are deposits in transit?",
        options: [
          "Lost deposits",
          "Deposits recorded in QuickBooks but not yet showing on bank statement",
          "Bank deposit errors",
          "Future deposits"
        ],
        correctAnswer: 1,
        explanation: "Deposits in transit are those you've recorded in QuickBooks but haven't yet cleared and appeared on bank statement."
      },
      {
        id: 21,
        question: "What does accounts receivable aging show?",
        options: [
          "Customer ages",
          "How long invoices have been unpaid, grouped by age",
          "Old customer records",
          "Historical sales"
        ],
        correctAnswer: 1,
        explanation: "Accounts receivable aging shows unpaid invoices grouped by how long they've been outstanding (30, 60, 90+ days)."
      },
      {
        id: 22,
        question: "Why use sales by customer reports?",
        options: [
          "To contact customers",
          "To identify which customers generate most revenue",
          "To get customer addresses",
          "To delete customers"
        ],
        correctAnswer: 1,
        explanation: "Sales by customer reports help identify your best customers for relationship management and sales focus."
      },
      {
        id: 23,
        question: "How customize reports in QuickBooks?",
        options: [
          "Cannot customize",
          "Change date ranges, columns, filters, and sorting",
          "Only change colors",
          "Only print differently"
        ],
        correctAnswer: 1,
        explanation: "QuickBooks allows customization of date ranges, columns displayed, filters for specific data, and sorting options."
      },
      {
        id: 24,
        question: "What is the memorize function for reports?",
        options: [
          "Memory test",
          "Saving customized report settings for quick future access",
          "Deleting reports",
          "Changing all reports"
        ],
        correctAnswer: 1,
        explanation: "The memorize function saves your customized report settings so you can run the same report quickly in the future."
      },
      {
        id: 25,
        question: "What is first in closing checklist?",
        options: [
          "Delete old data",
          "Complete all transactions for the month",
          "Change all dates",
          "Create new accounts"
        ],
        correctAnswer: 1,
        explanation: "First ensure all income, expenses, and other transactions for the month are completely recorded in QuickBooks."
      },
      {
        id: 26,
        question: "Why reconcile all accounts during closing?",
        options: [
          "To increase balances",
          "To ensure QuickBooks matches bank and other statements",
          "To reduce balances",
          "To avoid banking"
        ],
        correctAnswer: 1,
        explanation: "Reconciling all accounts verifies that QuickBooks records match external statements, ensuring accuracy."
      },
      {
        id: 27,
        question: "What are liabilities?",
        options: [
          "Things your business owns",
          "Debts or obligations your business owes",
          "Business income",
          "Customer assets"
        ],
        correctAnswer: 1,
        explanation: "Liabilities are financial obligations or debts that your business owes to others, like loans or accounts payable."
      },
      {
        id: 28,
        question: "What is QuickBooks Online?",
        options: [
          "Desktop software only",
          "Cloud-based version accessible from any device",
          "Mobile app only",
          "Free trial version"
        ],
        correctAnswer: 1,
        explanation: "QuickBooks Online is the cloud-based version that can be accessed from any device with internet connection."
      },
      {
        id: 29,
        question: "What is a credit memo?",
        options: [
          "Customer praise",
          "Document for refunds or credits to customers",
          "Credit card receipt",
          "Bank credit"
        ],
        correctAnswer: 1,
        explanation: "A credit memo documents credits or refunds given to customers for returns, discounts, or other adjustments."
      },
      {
        id: 30,
        question: "Why set up sales tax correctly?",
        options: [
          "To avoid calculating tax",
          "For accurate tax collection and reporting to tax authorities",
          "To increase prices",
          "To reduce sales"
        ],
        correctAnswer: 1,
        explanation: "Correct sales tax setup ensures you collect the right amount of tax and can report and remit it properly."
      },
      {
        id: 31,
        question: "How handle credit card expenses?",
        options: [
          "Ignore until statement",
          "Import transactions and categorize them to expense accounts",
          "Only track cash",
          "Put all on one account"
        ],
        correctAnswer: 1,
        explanation: "Import credit card transactions regularly and categorize each to appropriate expense accounts for accurate tracking."
      },
      {
        id: 32,
        question: "What are fixed assets?",
        options: [
          "Daily supplies",
          "Long-term business property like equipment or vehicles",
          "Inventory items",
          "Office snacks"
        ],
        correctAnswer: 1,
        explanation: "Fixed assets are long-term tangible assets used in business operations, such as equipment, vehicles, or buildings."
      },
      {
        id: 33,
        question: "How handle bank fees in reconciliation?",
        options: [
          "Ignore bank fees",
          "Record as expenses during reconciliation",
          "Charge to customers",
          "Deduct from taxes"
        ],
        correctAnswer: 1,
        explanation: "Bank fees should be recorded as expense transactions during reconciliation to account for all bank statement items."
      },
      {
        id: 34,
        question: "How often should most businesses reconcile?",
        options: [
          "Yearly",
          "Monthly, soon after receiving bank statement",
          "Never",
          "Only when problems occur"
        ],
        correctAnswer: 1,
        explanation: "Most businesses should reconcile monthly, soon after receiving bank statements, to maintain accurate records."
      },
      {
        id: 35,
        question: "What is a Balance Sheet?",
        options: [
          "Sheet for balancing",
          "Snapshot of assets, liabilities, and equity at a point in time",
          "Daily transaction list",
          "Bank statement"
        ],
        correctAnswer: 1,
        explanation: "A Balance Sheet shows what a business owns (assets), owes (liabilities), and owner's investment (equity) at specific date."
      },
      {
        id: 36,
        question: "What are budget vs actual reports?",
        options: [
          "Future predictions",
          "Comparisons of planned spending to actual spending",
          "Historical comparisons",
          "Competitor analysis"
        ],
        correctAnswer: 1,
        explanation: "Budget vs actual reports compare what you planned to spend (budget) with what you actually spent, showing variances."
      },
      {
        id: 37,
        question: "Why export reports to Excel?",
        options: [
          "To lose data",
          "For additional analysis, formatting, or sharing outside QuickBooks",
          "To delete from QuickBooks",
          "To reduce file size"
        ],
        correctAnswer: 1,
        explanation: "Exporting to Excel allows additional analysis, custom formatting, calculations, and sharing with non-QuickBooks users."
      },
      {
        id: 38,
        question: "What review in accounts receivable during closing?",
        options: [
          "Customer names",
          "Overdue invoices and follow up on collections",
          "Customer addresses",
          "Sales only"
        ],
        correctAnswer: 1,
        explanation: "Review accounts receivable aging to identify overdue invoices and follow up with customers for payment."
      },
      {
        id: 39,
        question: "What are inventory adjustments?",
        options: [
          "Price changes",
          "Entries to correct inventory counts to match physical counts",
          "Customer returns only",
          "Supplier changes"
        ],
        correctAnswer: 1,
        explanation: "Inventory adjustment entries correct QuickBooks inventory quantities to match actual physical counts."
      },
      {
        id: 40,
        question: "Why create backups during closing?",
        options: [
          "To waste storage",
          "To protect financial data from loss or corruption",
          "To slow computer",
          "To delete later"
        ],
        correctAnswer: 1,
        explanation: "Backups protect your financial data in case of computer problems, data corruption, or accidental deletion."
      }
    ]
  }
};
